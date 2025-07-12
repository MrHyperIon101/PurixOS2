/*! For license information please see main.a485ca0e.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},64:()=>{},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,g(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,i)&&!E.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function R(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+T(l,0):a,w(o)?(i="",null!=e&&(i=e.replace(P,"$&/")+"/"),R(o,t,i,"",function(e){return e})):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+T(s=e[c],c);l+=R(s,t,i,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=R(s=s.value,t,i,u=a+T(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function z(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",function(e){return t.call(n,e,i++)}),r}function D(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},_={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:_,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return z(e,function(){t++}),t},toArray:function(e){return z(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=y,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=g({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!E.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=_.transition;_.transition={};try{e()}finally{_.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(m=!1,x(e),!g)if(null!==r(c))g=!0,_(k);else{var t=r(u);null!==t&&A(w,t.startTime-e)}}function k(e,n){g=!1,m&&(m=!1,b(C),C=-1),h=!0;var a=f;try{for(x(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!R());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var s=o(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),x(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&A(w,d.startTime-n),l=!1}return l}finally{p=null,f=a,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,j=null,C=-1,P=5,T=-1;function R(){return!(t.unstable_now()-T<P)}function z(){if(null!==j){var e=t.unstable_now();T=e;var n=!0;try{n=j(!0,e)}finally{n?S():(E=!1,j=null)}}else E=!1}if("function"===typeof y)S=function(){y(z)};else if("undefined"!==typeof MessageChannel){var D=new MessageChannel,O=D.port2;D.port1.onmessage=z,S=function(){O.postMessage(null)}}else S=function(){v(z,0)};function _(e){j=e,E||(E=!0,S())}function A(e,n){C=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,_(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(m?(b(C),C=-1):m=!0,A(w,a-o))):(e.sortIndex=s,n(c,e),g||h||(g=!0,_(k))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function g(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){m[e]=new g(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){m[e]=new g(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){m[e]=new g(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){m[e]=new g(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){m[e]=new g(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=m.hasOwnProperty(t)?m[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)}),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),P=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var _=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var A=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=A&&e[A]||e["@@iterator"])?e:null}var M,N=Object.assign;function I(e){if(void 0===M)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return"\n"+M+e}var F=!1;function V(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function B(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case j:return"Profiler";case E:return"StrictMode";case R:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case D:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function $(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=$(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function X(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){Q(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ae(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ue(e,t)})}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]})});var ve=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ee=null;function je(e){if(e=yi(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?Ee?Ee.push(e):Ee=[e]:Se=e}function Pe(){if(Se){var e=Se,t=Ee;if(Ee=Se=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Te(e,t){return e(t)}function Re(){}var ze=!1;function De(e,t,n){if(ze)return e(t,n);ze=!0;try{return Te(e,t,n)}finally{ze=!1,(null!==Se||null!==Ee)&&(Re(),Pe())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var _e=!1;if(u)try{var Ae={};Object.defineProperty(Ae,"passive",{get:function(){_e=!0}}),window.addEventListener("test",Ae,Ae),window.removeEventListener("test",Ae,Ae)}catch(ue){_e=!1}function Le(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Me=!1,Ne=null,Ie=!1,Fe=null,Ve={onError:function(e){Me=!0,Ne=e}};function Be(e,t,n,r,i,a,o,s,l){Me=!1,Ne=null,Le.apply(Ve,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(a(188))}function $e(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return We(i),e;if(o===r)return We(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ye=i.unstable_scheduleCallback,Ke=i.unstable_cancelCallback,qe=i.unstable_shouldYield,Xe=i.unstable_requestPaint,Qe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=dt(s):0!==(a&=o)&&(r=dt(a))}else 0!==(o=n&~i)?r=dt(o):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ot(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,Et,jt,Ct=!1,Pt=[],Tt=null,Rt=null,zt=null,Dt=new Map,Ot=new Map,_t=[],At="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Dt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Mt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Nt(e){var t=bi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void jt(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ft(e,t,n){It(e)&&n.delete(t)}function Vt(){Ct=!1,null!==Tt&&It(Tt)&&(Tt=null),null!==Rt&&It(Rt)&&(Rt=null),null!==zt&&It(zt)&&(zt=null),Dt.forEach(Ft),Ot.forEach(Ft)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Vt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Pt.length){Bt(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Bt(Tt,e),null!==Rt&&Bt(Rt,e),null!==zt&&Bt(zt,e),Dt.forEach(t),Ot.forEach(t),n=0;n<_t.length;n++)(r=_t[n]).blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&null===(n=_t[0]).blockedOn;)Nt(n),null===n.blockedOn&&_t.shift()}var Ht=x.ReactCurrentBatchConfig,Wt=!0;function $t(e,t,n,r){var i=yt,a=Ht.transition;Ht.transition=null;try{yt=1,Yt(e,t,n,r)}finally{yt=i,Ht.transition=a}}function Gt(e,t,n,r){var i=yt,a=Ht.transition;Ht.transition=null;try{yt=4,Yt(e,t,n,r)}finally{yt=i,Ht.transition=a}}function Yt(e,t,n,r){if(Wt){var i=qt(e,t,n,r);if(null===i)Wr(e,t,r,Kt,n),Lt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Tt=Mt(Tt,e,t,n,r,i),!0;case"dragenter":return Rt=Mt(Rt,e,t,n,r,i),!0;case"mouseover":return zt=Mt(zt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Dt.set(a,Mt(Dt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ot.set(a,Mt(Ot.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<At.indexOf(e)){for(;null!==i;){var a=yi(i);if(null!==a&&wt(a),null===(a=qt(e,t,n,r))&&Wr(e,t,r,Kt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Kt=null;function qt(e,t,n,r){if(Kt=null,null!==(e=bi(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Xt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Qt?Qt.value:Qt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=N({},cn,{view:0,detail:0}),pn=an(dn),fn=N({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(on=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=on=0,ln=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=an(fn),gn=an(N({},fn,{dataTransfer:0})),mn=an(N({},dn,{relatedTarget:0})),vn=an(N({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=N({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(bn),xn=an(N({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function jn(){return En}var Cn=N({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(Cn),Tn=an(N({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=an(N({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),zn=an(N({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Dn=N({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(Dn),_n=[9,13,27,32],An=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var Mn=u&&"TextEvent"in window&&!Ln,Nn=u&&(!An||Ln&&8<Ln&&11>=Ln),In=String.fromCharCode(32),Fn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==_n.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function $n(e,t,n,r){Ce(r),0<(t=Gr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Yn=null;function Kn(e){Ir(e,0)}function qn(e){if(Y(xi(e)))return e}function Xn(e,t){if("change"===e)return t}var Qn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Gn&&(Gn.detachEvent("onpropertychange",nr),Yn=Gn=null)}function nr(e){if("value"===e.propertyName&&qn(Yn)){var t=[];$n(t,Yn,e,we(e)),De(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(Gn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Yn)}function ar(e,t){if("click"===e)return qn(t)}function or(e,t){if("input"===e||"change"===e)return qn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ur(n,a);var o=ur(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=u&&"documentMode"in document&&11>=document.documentMode,mr=null,vr=null,br=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==mr||mr!==K(r)||("selectionStart"in(r=mr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&lr(br,r)||(br=r,0<(r=Gr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Er={};function jr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return Sr[e]=n[t];return e}u&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=jr("animationend"),Pr=jr("animationiteration"),Tr=jr("animationstart"),Rr=jr("transitionend"),zr=new Map,Dr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){zr.set(e,t),l(t,[e])}for(var _r=0;_r<Dr.length;_r++){var Ar=Dr[_r];Or(Ar.toLowerCase(),"on"+(Ar[0].toUpperCase()+Ar.slice(1)))}Or(Cr,"onAnimationEnd"),Or(Pr,"onAnimationIteration"),Or(Tr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Rr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Nr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,l,c){if(Be.apply(this,arguments),Me){if(!Me)throw Error(a(198));var u=Ne;Me=!1,Ne=null,Ie||(Ie=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Nr(i,s,c),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Nr(i,s,c),a=l}}}if(Ie)throw e=Fe,Ie=!1,Fe=null,e}function Fr(e,t){var n=t[gi];void 0===n&&(n=t[gi]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,o.forEach(function(t){"selectionchange"!==t&&(Mr.has(t)||Vr(t,!1,e),Vr(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Vr("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Xt(t)){case 1:var i=$t;break;case 4:i=Gt;break;default:i=Yt}n=i.bind(null,t,n,e),i=void 0,!_e||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=bi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}De(function(){var r=a,i=we(n),o=[];e:{var s=zr.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Pn;break;case"focusin":c="focus",l=mn;break;case"focusout":c="blur",l=mn;break;case"beforeblur":case"afterblur":l=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Rn;break;case Cr:case Pr:case Tr:l=vn;break;case Rr:l=zn;break;case"scroll":l=pn;break;case"wheel":l=On;break;case"copy":case"cut":case"paste":l=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var f,h=r;null!==h;){var g=(f=h).stateNode;if(5===f.tag&&null!==g&&(f=g,null!==p&&(null!=(g=Oe(h,p))&&u.push($r(h,g,f)))),d)break;h=h.return}0<u.length&&(s=new l(s,c,null,n,i),o.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!bi(c)&&!c[hi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?bi(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=hn,g="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Tn,g="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==l?s:xi(l),f=null==c?s:xi(c),(s=new u(g,h+"leave",l,n,i)).target=d,s.relatedTarget=f,g=null,bi(i)===r&&((u=new u(p,h+"enter",c,n,i)).target=f,u.relatedTarget=d,g=u),d=g,l&&c)e:{for(p=c,h=0,f=u=l;f;f=Yr(f))h++;for(f=0,g=p;g;g=Yr(g))f++;for(;0<h-f;)u=Yr(u),h--;for(;0<f-h;)p=Yr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Yr(u),p=Yr(p)}u=null}else u=null;null!==l&&Kr(o,s,l,u,!1),null!==c&&null!==d&&Kr(o,d,c,u,!0)}if("select"===(l=(s=r?xi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var m=Xn;else if(Wn(s))if(Qn)m=or;else{m=ir;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(m=ar);switch(m&&(m=m(e,r))?$n(o,m,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?xi(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(mr=v,vr=r,br=null);break;case"focusout":br=vr=mr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(o,n,i);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":xr(o,n,i)}var b;if(An)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Vn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Nn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(b=en()):(Jt="value"in(Qt=i)?Qt.value:Qt.textContent,Un=!0)),0<(v=Gr(r,y)).length&&(y=new xn(y,e,null,n,i),o.push({event:y,listeners:v}),b?y.data=b:null!==(b=Bn(n))&&(y.data=b))),(b=Mn?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Fn=!0,In);case"textInput":return(e=t.data)===In&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!An&&Vn(e,t)?(e=en(),Zt=Jt=Qt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Gr(r,"onBeforeInput")).length&&(i=new xn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=b))}Ir(o,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=Oe(e,n))&&r.unshift($r(e,a,i)),null!=(a=Oe(e,t))&&r.push($r(e,a,i))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Oe(n,a))&&o.unshift($r(n,l,s)):i||null!=(l=Oe(n,a))&&o.push($r(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var qr=/\r\n?/g,Xr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Xr,"")}function Jr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(a(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,fi="__reactProps$"+di,hi="__reactContainer$"+di,gi="__reactEvents$"+di,mi="__reactListeners$"+di,vi="__reactHandles$"+di;function bi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[pi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[pi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wi(e){return e[fi]||null}var ki=[],Si=-1;function Ei(e){return{current:e}}function ji(e){0>Si||(e.current=ki[Si],ki[Si]=null,Si--)}function Ci(e,t){Si++,ki[Si]=e.current,e.current=t}var Pi={},Ti=Ei(Pi),Ri=Ei(!1),zi=Pi;function Di(e,t){var n=e.type.contextTypes;if(!n)return Pi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Oi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function _i(){ji(Ri),ji(Ti)}function Ai(e,t,n){if(Ti.current!==Pi)throw Error(a(168));Ci(Ti,t),Ci(Ri,n)}function Li(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,H(e)||"Unknown",i));return N({},n,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,zi=Ti.current,Ci(Ti,e),Ci(Ri,Ri.current),!0}function Ni(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Li(e,t,zi),r.__reactInternalMemoizedMergedChildContext=e,ji(Ri),ji(Ti),Ci(Ti,e)):ji(Ri),Ci(Ri,n)}var Ii=null,Fi=!1,Vi=!1;function Bi(e){null===Ii?Ii=[e]:Ii.push(e)}function Ui(){if(!Vi&&null!==Ii){Vi=!0;var e=0,t=yt;try{var n=Ii;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ii=null,Fi=!1}catch(i){throw null!==Ii&&(Ii=Ii.slice(e+1)),Ye(Ze,Ui),i}finally{yt=t,Vi=!1}}return null}var Hi=[],Wi=0,$i=null,Gi=0,Yi=[],Ki=0,qi=null,Xi=1,Qi="";function Ji(e,t){Hi[Wi++]=Gi,Hi[Wi++]=$i,$i=e,Gi=t}function Zi(e,t,n){Yi[Ki++]=Xi,Yi[Ki++]=Qi,Yi[Ki++]=qi,qi=e;var r=Xi;e=Qi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xi=1<<32-ot(t)+i|n<<i|r,Qi=a+e}else Xi=1<<a|n<<i|r,Qi=e}function ea(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function ta(e){for(;e===$i;)$i=Hi[--Wi],Hi[Wi]=null,Gi=Hi[--Wi],Hi[Wi]=null;for(;e===qi;)qi=Yi[--Ki],Yi[Ki]=null,Qi=Yi[--Ki],Yi[Ki]=null,Xi=Yi[--Ki],Yi[Ki]=null}var na=null,ra=null,ia=!1,aa=null;function oa(e,t){var n=Dc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qi?{id:Xi,overflow:Qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Dc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ia){var t=ra;if(t){var n=t;if(!sa(e,t)){if(la(e))throw Error(a(418));t=ci(n.nextSibling);var r=na;t&&sa(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function ua(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function da(e){if(e!==na)return!1;if(!ia)return ua(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ra)){if(la(e))throw pa(),Error(a(418));for(;t;)oa(e,t),t=ci(t.nextSibling)}if(ua(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?ci(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=ra;e;)e=ci(e.nextSibling)}function fa(){ra=na=null,ia=!1}function ha(e){null===aa?aa=[e]:aa.push(e)}var ga=x.ReactCurrentBatchConfig;function ma(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=_c(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Nc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===O&&ba(a)===t.type)?((r=i(t,n.props)).ref=ma(e,t,n),r.return=e,r):((r=Ac(n.type,n.key,n.props,null,e.mode,r)).ref=ma(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ic(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Nc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ac(t.type,t.key,t.props,null,e.mode,n)).ref=ma(e,null,t),n.return=e,n;case k:return(t=Ic(t,e.mode,n)).return=e,t;case O:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;va(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case O:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||L(n))return null!==i?null:d(e,t,n,r,null);va(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case O:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);va(t,r)}return null}function g(i,a,s,l){for(var c=null,u=null,d=a,g=a=0,m=null;null!==d&&g<s.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=f(i,d,s[g],l);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(i,d),a=o(v,a,g),null===u?c=v:u.sibling=v,u=v,d=m}if(g===s.length)return n(i,d),ia&&Ji(i,g),c;if(null===d){for(;g<s.length;g++)null!==(d=p(i,s[g],l))&&(a=o(d,a,g),null===u?c=d:u.sibling=d,u=d);return ia&&Ji(i,g),c}for(d=r(i,d);g<s.length;g++)null!==(m=h(d,i,g,s[g],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),a=o(m,a,g),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach(function(e){return t(i,e)}),ia&&Ji(i,g),c}function m(i,s,l,c){var u=L(l);if("function"!==typeof u)throw Error(a(150));if(null==(l=u.call(l)))throw Error(a(151));for(var d=u=null,g=s,m=s=0,v=null,b=l.next();null!==g&&!b.done;m++,b=l.next()){g.index>m?(v=g,g=null):v=g.sibling;var y=f(i,g,b.value,c);if(null===y){null===g&&(g=v);break}e&&g&&null===y.alternate&&t(i,g),s=o(y,s,m),null===d?u=y:d.sibling=y,d=y,g=v}if(b.done)return n(i,g),ia&&Ji(i,m),u;if(null===g){for(;!b.done;m++,b=l.next())null!==(b=p(i,b.value,c))&&(s=o(b,s,m),null===d?u=b:d.sibling=b,d=b);return ia&&Ji(i,m),u}for(g=r(i,g);!b.done;m++,b=l.next())null!==(b=h(g,i,m,b.value,c))&&(e&&null!==b.alternate&&g.delete(null===b.key?m:b.key),s=o(b,s,m),null===d?u=b:d.sibling=b,d=b);return e&&g.forEach(function(e){return t(i,e)}),ia&&Ji(i,m),u}return function e(r,a,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,u=a;null!==u;){if(u.key===c){if((c=o.type)===S){if(7===u.tag){n(r,u.sibling),(a=i(u,o.props.children)).return=r,r=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===O&&ba(c)===u.type){n(r,u.sibling),(a=i(u,o.props)).ref=ma(r,u,o),a.return=r,r=a;break e}n(r,u);break}t(r,u),u=u.sibling}o.type===S?((a=Lc(o.props.children,r.mode,l,o.key)).return=r,r=a):((l=Ac(o.type,o.key,o.props,null,r.mode,l)).ref=ma(r,a,o),l.return=r,r=l)}return s(r);case k:e:{for(u=o.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Ic(o,r.mode,l)).return=r,r=a}return s(r);case O:return e(r,a,(u=o._init)(o._payload),l)}if(te(o))return g(r,a,o,l);if(L(o))return m(r,a,o,l);va(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Nc(o,r.mode,l)).return=r,r=a),s(r)):n(r,a)}}var xa=ya(!0),wa=ya(!1),ka=Ei(null),Sa=null,Ea=null,ja=null;function Ca(){ja=Ea=Sa=null}function Pa(e){var t=ka.current;ji(ka),e._currentValue=t}function Ta(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ra(e,t){Sa=e,ja=Ea=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ys=!0),e.firstContext=null)}function za(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},null===Ea){if(null===Sa)throw Error(a(308));Ea=e,Sa.dependencies={lanes:0,firstContext:e}}else Ea=Ea.next=e;return t}var Da=null;function Oa(e){null===Da?Da=[e]:Da.push(e)}function _a(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Oa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Aa(e,r)}function Aa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var La=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ia(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Tl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Aa(e,n)}return null===(i=r.interleaved)?(t.next=t,Oa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Aa(e,n)}function Va(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var i=e.updateQueue;La=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,g=s;switch(p=t,f=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=g.payload)?h.call(f,d,p):h)||void 0===p)break e;d=N({},d,p);break e;case 2:La=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,o|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ml|=o,e.lanes=o,e.memoizedState=d}}function Ha(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Wa={},$a=Ei(Wa),Ga=Ei(Wa),Ya=Ei(Wa);function Ka(e){if(e===Wa)throw Error(a(174));return e}function qa(e,t){switch(Ci(Ya,t),Ci(Ga,e),Ci($a,Wa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ji($a),Ci($a,t)}function Xa(){ji($a),ji(Ga),ji(Ya)}function Qa(e){Ka(Ya.current);var t=Ka($a.current),n=le(t,e.type);t!==n&&(Ci(Ga,e),Ci($a,n))}function Ja(e){Ga.current===e&&(ji($a),ji(Ga))}var Za=Ei(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=x.ReactCurrentDispatcher,io=x.ReactCurrentBatchConfig,ao=0,oo=null,so=null,lo=null,co=!1,uo=!1,po=0,fo=0;function ho(){throw Error(a(321))}function go(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:es,e=n(r,i),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(a(301));o+=1,lo=so=null,t.updateQueue=null,ro.current=ts,e=n(r,i)}while(uo)}if(ro.current=Jo,t=null!==so&&null!==so.next,ao=0,lo=so=oo=null,co=!1,t)throw Error(a(300));return e}function vo(){var e=0!==po;return po=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function yo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(a(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function xo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=so,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((ao&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,oo.lanes|=d,Ml|=d}u=u.next}while(null!==u&&u!==o);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(ys=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Ml|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);sr(o,t.memoizedState)||(ys=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function Eo(e,t){var n=oo,r=yo(),i=t(),o=!sr(r.memoizedState,i);if(o&&(r.memoizedState=i,ys=!0),r=r.queue,Mo(Po.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,Do(9,Co.bind(null,n,r,i,t),void 0,null),null===Rl)throw Error(a(349));0!==(30&ao)||jo(n,t,i)}return i}function jo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Co(e,t,n,r){t.value=n,t.getSnapshot=r,To(t)&&Ro(e)}function Po(e,t,n){return n(function(){To(t)&&Ro(e)})}function To(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Ro(e){var t=Aa(e,1);null!==t&&nc(t,e,1,-1)}function zo(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[t.memoizedState,e]}function Do(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oo(){return yo().memoizedState}function _o(e,t,n,r){var i=bo();oo.flags|=e,i.memoizedState=Do(1|t,n,void 0,void 0===r?null:r)}function Ao(e,t,n,r){var i=yo();r=void 0===r?null:r;var a=void 0;if(null!==so){var o=so.memoizedState;if(a=o.destroy,null!==r&&go(r,o.deps))return void(i.memoizedState=Do(t,n,a,r))}oo.flags|=e,i.memoizedState=Do(1|t,n,a,r)}function Lo(e,t){return _o(8390656,8,e,t)}function Mo(e,t){return Ao(2048,8,e,t)}function No(e,t){return Ao(4,2,e,t)}function Io(e,t){return Ao(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ao(4,4,Fo.bind(null,t,e),n)}function Bo(){}function Uo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ho(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wo(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,ys=!0),e.memoizedState=n):(sr(n,t)||(n=gt(),oo.lanes|=n,Ml|=n,e.baseState=!0),t)}function $o(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{yt=n,io.transition=r}}function Go(){return yo().memoizedState}function Yo(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qo(e))Xo(t,n);else if(null!==(n=_a(e,t,n,r))){nc(n,e,r,ec()),Qo(n,t,r)}}function Ko(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qo(e))Xo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,o)){var l=t.interleaved;return null===l?(i.next=i,Oa(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=_a(e,t,i,r))&&(nc(n,e,r,i=ec()),Qo(n,t,r))}}function qo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Xo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Jo={readContext:za,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Zo={readContext:za,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:za,useEffect:Lo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,_o(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:zo,useDebugValue:Bo,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=zo(!1),t=e[0];return e=$o.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=bo();if(ia){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Rl)throw Error(a(349));0!==(30&ao)||jo(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Lo(Po.bind(null,r,o,e),[e]),r.flags|=2048,Do(9,Co.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=Rl.identifierPrefix;if(ia){var n=Qi;t=":"+t+"R"+(n=(Xi&~(1<<32-ot(Xi)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:za,useCallback:Uo,useContext:za,useEffect:Mo,useImperativeHandle:Vo,useInsertionEffect:No,useLayoutEffect:Io,useMemo:Ho,useReducer:wo,useRef:Oo,useState:function(){return wo(xo)},useDebugValue:Bo,useDeferredValue:function(e){return Wo(yo(),so.memoizedState,e)},useTransition:function(){return[wo(xo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:Eo,useId:Go,unstable_isNewReconciler:!1},ts={readContext:za,useCallback:Uo,useContext:za,useEffect:Mo,useImperativeHandle:Vo,useInsertionEffect:No,useLayoutEffect:Io,useMemo:Ho,useReducer:ko,useRef:Oo,useState:function(){return ko(xo)},useDebugValue:Bo,useDeferredValue:function(e){var t=yo();return null===so?t.memoizedState=e:Wo(t,so.memoizedState,e)},useTransition:function(){return[ko(xo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:Eo,useId:Go,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Ia(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(nc(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Ia(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(nc(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Ia(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Fa(e,i,r))&&(nc(t,e,r,n),Va(t,e,r))}};function as(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,a))}function os(e,t,n){var r=!1,i=Pi,a=t.contextType;return"object"===typeof a&&null!==a?a=za(a):(i=Oi(t)?zi:Ti.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Di(e,i):Pi),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ma(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=za(a):(a=Oi(t)?zi:Ti.current,i.context=Di(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rs(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Ua(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Ia(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,$l=r),ds(0,t)},n}function hs(e,t,n){(n=Ia(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Gl?Gl=new Set([this]):Gl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jc.bind(null,e,t,n),t.then(e,e))}function ms(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ia(-1,1)).tag=2,Fa(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var bs=x.ReactCurrentOwner,ys=!1;function xs(e,t,n,r){t.child=null===e?wa(t,null,n,r):xa(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var a=t.ref;return Ra(t,i),r=mo(e,t,n,r,a,i),n=vo(),null===e||ys?(ia&&n&&ea(t),t.flags|=1,xs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function ks(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Oc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ac(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ss(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(o,r)&&e.ref===t.ref)return Ws(e,t,i)}return t.flags|=1,(e=_c(a,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(lr(a,r)&&e.ref===t.ref){if(ys=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Ws(e,t,i);0!==(131072&e.flags)&&(ys=!0)}}return Cs(e,t,n,r,i)}function Es(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(_l,Ol),Ol|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(_l,Ol),Ol|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ci(_l,Ol),Ol|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ci(_l,Ol),Ol|=r;return xs(e,t,i,n),t.child}function js(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var a=Oi(n)?zi:Ti.current;return a=Di(t,a),Ra(t,i),n=mo(e,t,n,r,a,i),r=vo(),null===e||ys?(ia&&r&&ea(t),t.flags|=1,xs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function Ps(e,t,n,r,i){if(Oi(n)){var a=!0;Mi(t)}else a=!1;if(Ra(t,i),null===t.stateNode)Hs(e,t),os(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=za(c):c=Di(t,c=Oi(n)?zi:Ti.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,o,r,c),La=!1;var p=t.memoizedState;o.state=p,Ua(t,r,o,i),l=t.memoizedState,s!==r||p!==l||Ri.current||La?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=La||as(t,n,s,r,p,l,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Na(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),o.props=c,d=t.pendingProps,p=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=za(l):l=Di(t,l=Oi(n)?zi:Ti.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,o,r,l),La=!1,p=t.memoizedState,o.state=p,Ua(t,r,o,i);var h=t.memoizedState;s!==d||p!==h||Ri.current||La?("function"===typeof f&&(rs(t,n,f,r),h=t.memoizedState),(c=La||as(t,n,c,r,p,h,l)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ts(e,t,n,r,a,i)}function Ts(e,t,n,r,i,a){js(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Ni(t,n,!1),Ws(e,t,a);r=t.stateNode,bs.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=xa(t,e.child,null,a),t.child=xa(t,null,s,a)):xs(e,t,s,a),t.memoizedState=r.state,i&&Ni(t,n,!0),t.child}function Rs(e){var t=e.stateNode;t.pendingContext?Ai(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ai(0,t.context,!1),qa(e,t.containerInfo)}function zs(e,t,n,r,i){return fa(),ha(i),t.flags|=256,xs(e,t,n,r),t.child}var Ds,Os,_s,As,Ls={dehydrated:null,treeContext:null,retryLane:0};function Ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ns(e,t,n){var r,i=t.pendingProps,o=Za.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ci(Za,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Mc(l,i,0,null),e=Lc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ms(n),t.memoizedState=Ls,e):Is(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,r=us(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Mc({mode:"visible",children:r.children},i,0,null),(o=Lc(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&xa(t,e.child,null,s),t.child.memoizedState=Ms(s),t.memoizedState=Ls,o);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Fs(e,t,s,r=us(o=Error(a(419)),r,void 0))}if(l=0!==(s&e.childLanes),ys||l){if(null!==(r=Rl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Aa(e,i),nc(r,e,i,-1))}return gc(),Fs(e,t,s,r=us(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Pc.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ra=ci(i.nextSibling),na=t,ia=!0,aa=null,null!==e&&(Yi[Ki++]=Xi,Yi[Ki++]=Qi,Yi[Ki++]=qi,Xi=e.id,Qi=e.overflow,qi=t),t=Is(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,o,n);if(s){s=i.fallback,l=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=_c(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=_c(r,s):(s=Lc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ms(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ls,i}return e=(s=e.child).sibling,i=_c(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Is(e,t){return(t=Mc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&ha(r),xa(t,e.child,null,n),(e=Is(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ta(e.return,t,n)}function Bs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Us(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(xs(e,t,r.children,n),0!==(2&(r=Za.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,n,t);else if(19===e.tag)Vs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(Za,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,a);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ml|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=_c(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=_c(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function $s(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ys(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gs(t),null;case 1:case 17:return Oi(t.type)&&_i(),Gs(t),null;case 3:return r=t.stateNode,Xa(),ji(Ri),ji(Ti),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(da(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),Os(e,t),Gs(t),null;case 5:Ja(t);var i=Ka(Ya.current);if(n=t.type,null!==e&&null!=t.stateNode)_s(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Gs(t),null}if(e=Ka($a.current),da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pi]=t,r[fi]=o,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)Fr(Lr[i],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":X(r,o),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fr("invalid",r);break;case"textarea":ie(r,o),Fr("invalid",r)}for(var l in be(n,o),i=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Fr("scroll",r)}switch(n){case"input":G(r),Z(r,o,!0);break;case"textarea":G(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[fi]=r,Ds(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)Fr(Lr[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":X(e,r),i=q(e,r),Fr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=N({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Fr("invalid",e)}for(o in be(n,i),c=i)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?me(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Fr("scroll",e):null!=u&&y(e,o,u,l))}switch(n){case"input":G(e),Z(e,r,!1);break;case"textarea":G(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gs(t),null;case 6:if(e&&null!=t.stateNode)As(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Ka(Ya.current),Ka($a.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(o=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Gs(t),null;case 13:if(ji(Za),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&0!==(1&t.mode)&&0===(128&t.flags))pa(),fa(),t.flags|=98560,o=!1;else if(o=da(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[pi]=t}else fa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gs(t),o=!1}else null!==aa&&(oc(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===Al&&(Al=3):gc())),null!==t.updateQueue&&(t.flags|=4),Gs(t),null);case 4:return Xa(),Os(e,t),null===e&&Ur(t.stateNode.containerInfo),Gs(t),null;case 10:return Pa(t.type._context),Gs(t),null;case 19:if(ji(Za),null===(o=t.memoizedState))return Gs(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)$s(o,!1);else{if(0!==Al||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,$s(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(Za,1&Za.current|2),t.child}e=e.sibling}null!==o.tail&&Qe()>Ul&&(t.flags|=128,r=!0,$s(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),$s(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ia)return Gs(t),null}else 2*Qe()-o.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=128,r=!0,$s(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Qe(),t.sibling=null,n=Za.current,Ci(Za,r?1&n|2:1&n),t):(Gs(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ol)&&(Gs(t),6&t.subtreeFlags&&(t.flags|=8192)):Gs(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Ks(e,t){switch(ta(t),t.tag){case 1:return Oi(t.type)&&_i(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xa(),ji(Ri),ji(Ti),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(ji(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ji(Za),null;case 4:return Xa(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ds=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Os=function(){},_s=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ka($a.current);var a,o=null;switch(n){case"input":i=q(e,i),r=q(e,r),o=[];break;case"select":i=N({},i,{value:void 0}),r=N({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in be(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},As=function(e,t,n,r){n!==r&&(t.flags|=4)};var qs=!1,Xs=!1,Qs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Ec(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Ec(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&el(t,n,a)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[gi],delete t[mi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Xs||Zs(n,t);case 6:var r=ul,i=dl;ul=null,pl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Ut(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,pl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Xs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&el(n,t,o),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Xs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ec(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Xs=(r=Xs)||null!==n.memoizedState,pl(e,t,n),Xs=r):pl(e,t,n);break;default:pl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qs),t.forEach(function(t){var r=Tc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function gl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(a(160));fl(o,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){Ec(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ml(t,e),t=t.sibling}function ml(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gl(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(m){Ec(e,e.return,m)}try{nl(5,e,e.return)}catch(m){Ec(e,e.return,m)}}break;case 1:gl(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(gl(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(m){Ec(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&Q(i,o),ye(l,s);var u=ye(l,o);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?me(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):y(i,d,p,u)}switch(l){case"input":J(i,o);break;case"textarea":ae(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(i,!!o.multiple,h,!1):f!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[fi]=o}catch(m){Ec(e,e.return,m)}}break;case 6:if(gl(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Ec(e,e.return,m)}}break;case 3:if(gl(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(m){Ec(e,e.return,m)}break;case 4:default:gl(t,e),vl(e);break;case 13:gl(t,e),vl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Bl=Qe())),4&r&&hl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Xs=(u=Xs)||d,gl(t,e),Xs=u):gl(t,e),vl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(p=Js=d;null!==Js;){switch(h=(f=Js).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:Zs(f,f.return);var g=f.stateNode;if("function"===typeof g.componentWillUnmount){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Ec(r,n,m)}}break;case 5:Zs(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==h?(h.return=f,Js=h):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=ge("display",s))}catch(m){Ec(e,e.return,m)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(m){Ec(e,e.return,m)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gl(t,e),vl(e),4&r&&hl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ol(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(a(161))}}catch(s){Ec(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,n){Js=e,yl(e,t,n)}function yl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||qs;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Xs;s=qs;var c=Xs;if(qs=o,(Xs=l)&&!c)for(Js=i;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?kl(i):null!==l?(l.return=o,Js=l):kl(i);for(;null!==a;)Js=a,yl(a,t,n),a=a.sibling;Js=i,qs=s,Xs=c}xl(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Js=a):xl(e)}}function xl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Xs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Xs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ha(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ha(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(a(163))}Xs||512&t.flags&&il(t)}catch(f){Ec(t,t.return,f)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Ec(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Ec(t,i,l)}}var a=t.return;try{il(t)}catch(l){Ec(t,a,l)}break;case 5:var o=t.return;try{il(t)}catch(l){Ec(t,o,l)}}}catch(l){Ec(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,El=Math.ceil,jl=x.ReactCurrentDispatcher,Cl=x.ReactCurrentOwner,Pl=x.ReactCurrentBatchConfig,Tl=0,Rl=null,zl=null,Dl=0,Ol=0,_l=Ei(0),Al=0,Ll=null,Ml=0,Nl=0,Il=0,Fl=null,Vl=null,Bl=0,Ul=1/0,Hl=null,Wl=!1,$l=null,Gl=null,Yl=!1,Kl=null,ql=0,Xl=0,Ql=null,Jl=-1,Zl=0;function ec(){return 0!==(6&Tl)?Qe():-1!==Jl?Jl:Jl=Qe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==Dl?Dl&-Dl:null!==ga.transition?(0===Zl&&(Zl=gt()),Zl):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Xt(e.type)}function nc(e,t,n,r){if(50<Xl)throw Xl=0,Ql=null,Error(a(185));vt(e,n,r),0!==(2&Tl)&&e===Rl||(e===Rl&&(0===(2&Tl)&&(Nl|=n),4===Al&&sc(e,Dl)),rc(e,r),1===n&&0===Tl&&0===(1&t.mode)&&(Ul=Qe()+500,Fi&&Ui()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=ft(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=pt(e,e===Rl?Dl:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Fi=!0,Bi(e)}(lc.bind(null,e)):Bi(lc.bind(null,e)),oi(function(){0===(6&Tl)&&Ui()}),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Rc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Jl=-1,Zl=0,0!==(6&Tl))throw Error(a(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Rl?Dl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mc(e,r);else{t=r;var i=Tl;Tl|=2;var o=hc();for(Rl===e&&Dl===t||(Hl=null,Ul=Qe()+500,pc(e,t));;)try{bc();break}catch(l){fc(e,l)}Ca(),jl.current=o,Tl=i,null!==zl?t=0:(Rl=null,Dl=0,t=Al)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=ac(e,i))),1===t)throw n=Ll,pc(e,0),sc(e,r),rc(e,Qe()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=mc(e,r))&&(0!==(o=ht(e))&&(r=o,t=ac(e,o))),1===t))throw n=Ll,pc(e,0),sc(e,r),rc(e,Qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,Vl,Hl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Bl+500-Qe())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,Vl,Hl),t);break}wc(e,Vl,Hl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ot(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*El(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,Vl,Hl),r);break}wc(e,Vl,Hl);break;default:throw Error(a(329))}}}return rc(e,Qe()),e.callbackNode===n?ic.bind(null,e):null}function ac(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=mc(e,t))&&(t=Vl,Vl=n,null!==t&&oc(t)),e}function oc(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function sc(e,t){for(t&=~Il,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Tl))throw Error(a(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Qe()),null;var n=mc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Ll,pc(e,0),sc(e,t),rc(e,Qe()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Vl,Hl),rc(e,Qe()),null}function cc(e,t){var n=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=n)&&(Ul=Qe()+500,Fi&&Ui())}}function uc(e){null!==Kl&&0===Kl.tag&&0===(6&Tl)&&kc();var t=Tl;Tl|=1;var n=Pl.transition,r=yt;try{if(Pl.transition=null,yt=1,e)return e()}finally{yt=r,Pl.transition=n,0===(6&(Tl=t))&&Ui()}}function dc(){Ol=_l.current,ji(_l)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==zl)for(n=zl.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&_i();break;case 3:Xa(),ji(Ri),ji(Ti),no();break;case 5:Ja(r);break;case 4:Xa();break;case 13:case 19:ji(Za);break;case 10:Pa(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Rl=e,zl=e=_c(e.current,null),Dl=Ol=t,Al=0,Ll=null,Il=Nl=Ml=0,Vl=Fl=null,null!==Da){for(t=0;t<Da.length;t++)if(null!==(r=(n=Da[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Da=null}return e}function fc(e,t){for(;;){var n=zl;try{if(Ca(),ro.current=Jo,co){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}co=!1}if(ao=0,lo=so=oo=null,uo=!1,po=0,Cl.current=null,null===n||null===n.return){Al=1,Ll=t,zl=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Dl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ms(s);if(null!==h){h.flags&=-257,vs(h,s,l,0,t),1&h.mode&&gs(o,u,t),c=u;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(c),t.updateQueue=m}else g.add(c);break e}if(0===(1&t)){gs(o,u,t),gc();break e}c=Error(a(426))}else if(ia&&1&l.mode){var v=ms(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),ha(cs(c,l));break e}}o=c=cs(c,l),4!==Al&&(Al=2),null===Fl?Fl=[o]:Fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,fs(0,c,t));break e;case 1:l=c;var b=o.type,y=o.stateNode;if(0===(128&o.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Gl||!Gl.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Ba(o,hs(o,l,t));break e}}o=o.return}while(null!==o)}xc(n)}catch(x){t=x,zl===n&&null!==n&&(zl=n=n.return);continue}break}}function hc(){var e=jl.current;return jl.current=Jo,null===e?Jo:e}function gc(){0!==Al&&3!==Al&&2!==Al||(Al=4),null===Rl||0===(268435455&Ml)&&0===(268435455&Nl)||sc(Rl,Dl)}function mc(e,t){var n=Tl;Tl|=2;var r=hc();for(Rl===e&&Dl===t||(Hl=null,pc(e,t));;)try{vc();break}catch(i){fc(e,i)}if(Ca(),Tl=n,jl.current=r,null!==zl)throw Error(a(261));return Rl=null,Dl=0,Al}function vc(){for(;null!==zl;)yc(zl)}function bc(){for(;null!==zl&&!qe();)yc(zl)}function yc(e){var t=Sl(e.alternate,e,Ol);e.memoizedProps=e.pendingProps,null===t?xc(e):zl=t,Cl.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ys(n,t,Ol)))return void(zl=n)}else{if(null!==(n=Ks(n,t)))return n.flags&=32767,void(zl=n);if(null===e)return Al=6,void(zl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zl=t);zl=t=e}while(null!==t);0===Al&&(Al=5)}function wc(e,t,n){var r=yt,i=Pl.transition;try{Pl.transition=null,yt=1,function(e,t,n,r){do{kc()}while(null!==Kl);if(0!==(6&Tl))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Rl&&(zl=Rl=null,Dl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Yl||(Yl=!0,Rc(tt,function(){return kc(),null})),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Pl.transition,Pl.transition=null;var s=yt;yt=1;var l=Tl;Tl|=4,Cl.current=null,function(e,t){if(ei=Wt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==o||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++d===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?m:ns(t.type,m),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(a(163))}}catch(w){Ec(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}g=tl,tl=!1}(e,n),ml(n,e),hr(ti),Wt=!!ei,ti=ei=null,e.current=n,bl(n,e,i),Xe(),Tl=l,yt=s,Pl.transition=o}else e.current=n;if(Yl&&(Yl=!1,Kl=e,ql=i),o=e.pendingLanes,0===o&&(Gl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=$l,$l=null,e;0!==(1&ql)&&0!==e.tag&&kc(),o=e.pendingLanes,0!==(1&o)?e===Ql?Xl++:(Xl=0,Ql=e):Xl=0,Ui()}(e,t,n,r)}finally{Pl.transition=i,yt=r}return null}function kc(){if(null!==Kl){var e=xt(ql),t=Pl.transition,n=yt;try{if(Pl.transition=null,yt=16>e?16:e,null===Kl)var r=!1;else{if(e=Kl,Kl=null,ql=0,0!==(6&Tl))throw Error(a(331));var i=Tl;for(Tl|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(0!==(16&Js.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Js=u;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,o)}var p=d.child;if(null!==p)p.return=d,Js=p;else for(;null!==Js;){var f=(d=Js).sibling,h=d.return;if(al(d),d===u){Js=null;break}if(null!==f){f.return=h,Js=f;break}Js=h}}}var g=o.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Js=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(0!==(2048&(o=Js).flags))switch(o.tag){case 0:case 11:case 15:nl(9,o,o.return)}var b=o.sibling;if(null!==b){b.return=o.return,Js=b;break e}Js=o.return}}var y=e.current;for(Js=y;null!==Js;){var x=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,Js=x;else e:for(s=y;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){Ec(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Tl=i,Ui(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{yt=n,Pl.transition=t}}return!1}function Sc(e,t,n){e=Fa(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function Ec(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Gl||!Gl.has(r))){t=Fa(t,e=hs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function jc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Rl===e&&(Dl&n)===n&&(4===Al||3===Al&&(130023424&Dl)===Dl&&500>Qe()-Bl?pc(e,0):Il|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Aa(e,t))&&(vt(e,t,n),rc(e,n))}function Pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Tc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Cc(e,n)}function Rc(e,t){return Ye(e,t)}function zc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dc(e,t,n,r){return new zc(e,t,n,r)}function Oc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function _c(e,t){var n=e.alternate;return null===n?((n=Dc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ac(e,t,n,r,i,o){var s=2;if(r=e,"function"===typeof e)Oc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Lc(n.children,i,o,t);case E:s=8,i|=8;break;case j:return(e=Dc(12,n,t,2|i)).elementType=j,e.lanes=o,e;case R:return(e=Dc(13,n,t,i)).elementType=R,e.lanes=o,e;case z:return(e=Dc(19,n,t,i)).elementType=z,e.lanes=o,e;case _:return Mc(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case P:s=9;break e;case T:s=11;break e;case D:s=14;break e;case O:s=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Dc(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Lc(e,t,n,r){return(e=Dc(7,e,r,t)).lanes=n,e}function Mc(e,t,n,r){return(e=Dc(22,e,r,t)).elementType=_,e.lanes=n,e.stateNode={isHidden:!1},e}function Nc(e,t,n){return(e=Dc(6,e,null,t)).lanes=n,e}function Ic(e,t,n){return(t=Dc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,a,o,s,l){return e=new Fc(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Dc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(a),e}function Bc(e){if(!e)return Pi;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Oi(n))return Li(e,n,t)}return t}function Uc(e,t,n,r,i,a,o,s,l){return(e=Vc(n,r,!0,e,0,a,0,s,l)).context=Bc(null),n=e.current,(a=Ia(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Fa(n,a,i),e.current.lanes=i,vt(e,i,r),rc(e,r),e}function Hc(e,t,n,r){var i=t.current,a=ec(),o=tc(i);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ia(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fa(i,t,o))&&(nc(e,i,o,a),Va(e,i,o)),o}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function $c(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gc(e,t){$c(e,t),(e=e.alternate)&&$c(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ri.current)ys=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return ys=!1,function(e,t,n){switch(t.tag){case 3:Rs(t),fa();break;case 5:Qa(t);break;case 1:Oi(t.type)&&Mi(t);break;case 4:qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(ka,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ns(e,t,n):(Ci(Za,1&Za.current),null!==(e=Ws(e,t,n))?e.sibling:null);Ci(Za,1&Za.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Us(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(Za,Za.current),r)break;return null;case 22:case 23:return t.lanes=0,Es(e,t,n)}return Ws(e,t,n)}(e,t,n);ys=0!==(131072&e.flags)}else ys=!1,ia&&0!==(1048576&t.flags)&&Zi(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=Di(t,Ti.current);Ra(t,n),i=mo(null,t,r,e,i,n);var o=vo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oi(r)?(o=!0,Mi(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ma(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Ts(null,t,r,!0,o,n)):(t.tag=0,ia&&o&&ea(t),xs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Oc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===D)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=Ps(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ps(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Rs(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,Na(e,t),Ua(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=zs(e,t,r,n,i=cs(Error(a(423)),t));break e}if(r!==i){t=zs(e,t,r,n,i=cs(Error(a(424)),t));break e}for(ra=ci(t.stateNode.containerInfo.firstChild),na=t,ia=!0,aa=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fa(),r===i){t=Ws(e,t,n);break e}xs(e,t,r,n)}t=t.child}return t;case 5:return Qa(t),null===e&&ca(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==o&&ni(r,o)&&(t.flags|=32),js(e,t),xs(e,t,s,n),t.child;case 6:return null===e&&ca(t),null;case 13:return Ns(e,t,n);case 4:return qa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xa(t,null,r,n):xs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return xs(e,t,t.pendingProps,n),t.child;case 8:case 12:return xs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ci(ka,r._currentValue),r._currentValue=s,null!==o)if(sr(o.value,s)){if(o.children===i.children&&!Ri.current){t=Ws(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Ia(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),Ta(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ta(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}xs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ra(t,n),r=r(i=za(i)),t.flags|=1,xs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),ks(e,t,r,i=ns(r.type,i),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Hs(e,t),t.tag=1,Oi(r)?(e=!0,Mi(t)):e=!1,Ra(t,n),os(t,r,i),ls(t,r,i,n),Ts(null,t,r,!0,e,n);case 19:return Us(e,t,n);case 22:return Es(e,t,n)}throw Error(a(156,t.tag))};var Yc="function"===typeof reportError?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}function qc(e){this._internalRoot=e}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var s=i;i=function(){var e=Wc(o);s.call(e)}}Hc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Wc(o);a.call(e)}}var o=Uc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=o,e[hi]=o.current,Ur(8===e.nodeType?e.parentNode:e),uc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Wc(l);s.call(e)}}var l=Vc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[hi]=l.current,Ur(8===e.nodeType?e.parentNode:e),uc(function(){Hc(t,l,n,r)}),l}(n,t,e,i,r);return Wc(o)}qc.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Hc(e,t,null,null)},qc.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc(function(){Hc(null,e,null,null)}),t[hi]=null}},qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&0!==t&&t<_t[n].priority;n++);_t.splice(n,0,e),0===n&&Nt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),rc(t,Qe()),0===(6&Tl)&&(Ul=Qe()+500,Ui()))}break;case 13:uc(function(){var t=Aa(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}}),Gc(e,1)}},kt=function(e){if(13===e.tag){var t=Aa(e,134217728);if(null!==t)nc(t,e,134217728,ec());Gc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Aa(e,t);if(null!==n)nc(n,e,t,ec());Gc(e,t)}},Et=function(){return yt},jt=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(a(90));Y(r),J(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=cc,Re=uc;var eu={usingClientEntryPoint:!1,Events:[yi,xi,wi,Ce,Pe,cc]},tu={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=$e(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),at=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Xc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Xc(e))throw Error(a(299));var n=!1,r="",i=Yc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Kc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=$e(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Qc(t))throw Error(a(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=Yc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,i,0,o,s),e[hi]=t.current,Ur(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qc(t)},t.render=function(e,t,n){if(!Qc(t))throw Error(a(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[hi]=null})}),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>o[e]=()=>r[e]);return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),i=n(391),a=n(950),o=n.t(a,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const l="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g(t,n,r,i){void 0===i&&(i={});let{window:a=document.defaultView,v5Compat:o=!1}=i,u=a.history,h=e.Pop,g=null,m=v();function v(){return(u.state||{idx:null}).idx}function b(){h=e.Pop;let t=v(),n=null==t?null:t-m;m=t,g&&g({action:h,location:x.location,delta:n})}function y(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:f(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==m&&(m=0,u.replaceState(s({},u.state,{idx:m}),""));let x={get action(){return h},get location(){return t(a,u)},listen(e){if(g)throw new Error("A history only accepts one active listener");return a.addEventListener(l,b),g=e,()=>{a.removeEventListener(l,b),g=null}},createHref:e=>n(a,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let i=p(x.location,t,n);r&&r(i,t),m=v()+1;let s=d(i,m),l=x.createHref(i);try{u.pushState(s,"",l)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(l)}o&&g&&g({action:h,location:x.location,delta:1})},replace:function(t,n){h=e.Replace;let i=p(x.location,t,n);r&&r(i,t),m=v();let a=d(i,m),s=x.createHref(i);u.replaceState(a,"",s),o&&g&&g({action:h,location:x.location,delta:0})},go:e=>u.go(e)};return x}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),b(e,t,n,!1)}function b(e,t,n,r){let i=O(("string"===typeof t?h(t):t).pathname||"/",n);if(null==i)return null;let a=y(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=D(i);o=R(a[s],e,r)}return o}function y(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(c(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=N([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),y(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:T(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))i(e,t,r);else i(e,t)}),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=x(r.join("/")),s=[];return s.push(...o.map(e=>""===e?a:[a,e].join("/"))),i&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}const w=/^:[\w-]+$/,k=3,S=2,E=1,j=10,C=-2,P=e=>"*"===e;function T(e,t){let n=e.split("/"),r=n.length;return n.some(P)&&(r+=C),t&&(r+=S),n.filter(e=>!P(e)).reduce((e,t)=>e+(w.test(t)?k:""===t?E:j),r)}function R(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:N([a,u.pathname]),pathnameBase:I(N([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=N([a,u.pathnameBase]))}return o}function z(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{});return{params:l,pathname:a,pathnameBase:o,pattern:e}}function D(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function _(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function A(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function L(e,t){let n=A(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function M(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=h(e):(i=s({},e),c(!i.pathname||!i.pathname.includes("?"),_("?","pathname","search",i)),c(!i.pathname||!i.pathname.includes("#"),_("#","pathname","hash",i)),c(!i.search||!i.search.includes("#"),_("#","search","hash",i)));let a,o=""===e||""===i.pathname,l=o?"/":i.pathname;if(null==l)a=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?h(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:F(r),hash:V(i)}}(i,a),d=l&&"/"!==l&&l.endsWith("/"),p=(o||"."===l)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!p||(u.pathname+="/"),u}const N=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",V=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const U=["post","put","patch","delete"],H=(new Set(U),["get",...U]);new Set(H),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}const $=t.createContext(null);const G=t.createContext(null);const Y=t.createContext(null);const K=t.createContext(null);const q=t.createContext({outlet:null,matches:[],isDataRoute:!1});const X=t.createContext(null);function Q(){return null!=t.useContext(K)}function J(){return Q()||c(!1),t.useContext(K).location}function Z(e){t.useContext(Y).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(q);return e?function(){let{router:e}=ue(le.UseNavigateStable),n=pe(ce.UseNavigateStable),r=t.useRef(!1);Z(()=>{r.current=!0});let i=t.useCallback(function(t,i){void 0===i&&(i={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,W({fromRouteId:n},i)))},[e,n]);return i}():function(){Q()||c(!1);let e=t.useContext($),{basename:n,future:r,navigator:i}=t.useContext(Y),{matches:a}=t.useContext(q),{pathname:o}=J(),s=JSON.stringify(L(a,r.v7_relativeSplatPath)),l=t.useRef(!1);return Z(()=>{l.current=!0}),t.useCallback(function(t,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof t)return void i.go(t);let a=M(t,JSON.parse(s),o,"path"===r.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:N([n,a.pathname])),(r.replace?i.replace:i.push)(a,r.state,r)},[n,i,s,o,e])}()}function te(e,n){let{relative:r}=void 0===n?{}:n,{future:i}=t.useContext(Y),{matches:a}=t.useContext(q),{pathname:o}=J(),s=JSON.stringify(L(a,i.v7_relativeSplatPath));return t.useMemo(()=>M(e,JSON.parse(s),o,"path"===r),[e,s,o,r])}function ne(n,r,i,a){Q()||c(!1);let{navigator:o}=t.useContext(Y),{matches:s}=t.useContext(q),l=s[s.length-1],u=l?l.params:{},d=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let p,f=J();if(r){var g;let e="string"===typeof r?h(r):r;"/"===d||(null==(g=e.pathname)?void 0:g.startsWith(d))||c(!1),p=e}else p=f;let m=p.pathname||"/",b=m;if("/"!==d){let e=d.replace(/^\//,"").split("/");b="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let y=v(n,{pathname:b});let x=se(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:N([d,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:N([d,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,i,a);return r&&x?t.createElement(K.Provider,{value:{location:W({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:e.Pop}},x):x}function re(){let e=function(){var e;let n=t.useContext(X),r=de(ce.UseRouteError),i=pe(ce.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[i]}(),n=B(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:a},r):null,null)}const ie=t.createElement(re,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(q.Provider,{value:this.props.routeContext},t.createElement(X.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:n,match:r,children:i}=e,a=t.useContext($);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(q.Provider,{value:n},i)}function se(e,n,r,i){var a;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==e){var o;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(o=i)&&o.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,l=null==(a=r)?void 0:a.errors;if(null!=l){let e=s.findIndex(e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id]));e>=0||c(!1),s=s.slice(0,Math.min(s.length,e+1))}let u=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){u=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight((e,i,a)=>{let o,c=!1,p=null,f=null;var h;r&&(o=l&&i.route.id?l[i.route.id]:void 0,p=i.route.errorElement||ie,u&&(d<0&&0===a?(h="route-fallback",!1||fe[h]||(fe[h]=!0),c=!0,f=null):d===a&&(c=!0,f=i.route.hydrateFallbackElement||null)));let g=n.concat(s.slice(0,a+1)),m=()=>{let n;return n=o?p:c?f:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(oe,{match:i,routeContext:{outlet:e,matches:g,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===a)?t.createElement(ae,{location:r.location,revalidation:r.revalidation,component:p,error:o,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let n=t.useContext($);return n||c(!1),n}function de(e){let n=t.useContext(G);return n||c(!1),n}function pe(e){let n=function(){let e=t.useContext(q);return e||c(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||c(!1),r.route.id}const fe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function ge(e){c(!1)}function me(n){let{basename:r="/",children:i=null,location:a,navigationType:o=e.Pop,navigator:s,static:l=!1,future:u}=n;Q()&&c(!1);let d=r.replace(/^\/*/,"/"),p=t.useMemo(()=>({basename:d,navigator:s,static:l,future:W({v7_relativeSplatPath:!1},u)}),[d,u,s,l]);"string"===typeof a&&(a=h(a));let{pathname:f="/",search:g="",hash:m="",state:v=null,key:b="default"}=a,y=t.useMemo(()=>{let e=O(f,d);return null==e?null:{location:{pathname:e,search:g,hash:m,state:v,key:b},navigationType:o}},[d,f,g,m,v,b,o]);return null==y?null:t.createElement(Y.Provider,{value:p},t.createElement(K.Provider,{children:i,value:y}))}function ve(e){let{children:t,location:n}=e;return ne(be(t),n)}new Promise(()=>{});t.Component;function be(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,(e,i)=>{if(!t.isValidElement(e))return;let a=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,be(e.props.children,a));e.type!==ge&&c(!1),e.props.index&&e.props.children&&c(!1);let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=be(e.props.children,a)),r.push(o)}),r}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Jm){}new Map;const ke=r.startTransition;o.flushSync,r.useId;function Se(e){let{basename:n,children:r,future:i,window:a}=e,o=t.useRef();var s;null==o.current&&(o.current=(void 0===(s={window:a,v5Compat:!0})&&(s={}),g(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return p("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:f(t)},null,s)));let l=o.current,[c,u]=t.useState({action:l.action,location:l.location}),{v7_startTransition:d}=i||{},h=t.useCallback(e=>{d&&ke?ke(()=>u(e)):u(e)},[u,d]);return t.useLayoutEffect(()=>l.listen(h),[l,h]),t.useEffect(()=>he(i),[i]),t.createElement(me,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l,future:i})}const Ee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,je=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=t.forwardRef(function(e,n){let r,{onClick:i,relative:a,reloadDocument:o,replace:s,state:l,target:u,to:d,preventScrollReset:p,viewTransition:h}=e,g=xe(e,we),{basename:m}=t.useContext(Y),v=!1;if("string"===typeof d&&je.test(d)&&(r=d,Ee))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=O(t.pathname,m);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch(Jm){}let b=function(e,n){let{relative:r}=void 0===n?{}:n;Q()||c(!1);let{basename:i,navigator:a}=t.useContext(Y),{hash:o,pathname:s,search:l}=te(e,{relative:r}),u=s;return"/"!==i&&(u="/"===s?i:N([i,s])),a.createHref({pathname:u,search:l,hash:o})}(d,{relative:a}),y=function(e,n){let{target:r,replace:i,state:a,preventScrollReset:o,relative:s,viewTransition:l}=void 0===n?{}:n,c=ee(),u=J(),d=te(e,{relative:s});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==i?i:f(u)===f(d);c(e,{replace:n,state:a,preventScrollReset:o,relative:s,viewTransition:l})}},[u,c,d,i,a,r,e,o,s,l])}(d,{replace:s,state:l,target:u,preventScrollReset:p,relative:a,viewTransition:h});return t.createElement("a",ye({},g,{href:r||b,onClick:v||o?i:function(e){i&&i(e),e.defaultPrevented||y(e)},ref:n,target:u}))});var Pe,Te;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Te||(Te={}));var Re=function(){return Re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Re.apply(this,arguments)};Object.create;function ze(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var De=n(324),Oe=n.n(De),_e="-ms-",Ae="-moz-",Le="-webkit-",Me="comm",Ne="rule",Ie="decl",Fe="@keyframes",Ve=Math.abs,Be=String.fromCharCode,Ue=Object.assign;function He(e){return e.trim()}function We(e,t){return(e=t.exec(e))?e[0]:e}function $e(e,t,n){return e.replace(t,n)}function Ge(e,t,n){return e.indexOf(t,n)}function Ye(e,t){return 0|e.charCodeAt(t)}function Ke(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Xe(e){return e.length}function Qe(e,t){return t.push(e),e}function Je(e,t){return e.filter(function(e){return!We(e,t)})}var Ze=1,et=1,tt=0,nt=0,rt=0,it="";function at(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ze,column:et,length:o,return:"",siblings:s}}function ot(e,t){return Ue(at("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function st(e){for(;e.root;)e=ot(e.root,{children:[e]});Qe(e,e.siblings)}function lt(){return rt=nt>0?Ye(it,--nt):0,et--,10===rt&&(et=1,Ze--),rt}function ct(){return rt=nt<tt?Ye(it,nt++):0,et++,10===rt&&(et=1,Ze++),rt}function ut(){return Ye(it,nt)}function dt(){return nt}function pt(e,t){return Ke(it,e,t)}function ft(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ht(e){return Ze=et=1,tt=qe(it=e),nt=0,[]}function gt(e){return it="",e}function mt(e){return He(pt(nt-1,yt(91===e?e+2:40===e?e+1:e)))}function vt(e){for(;(rt=ut())&&rt<33;)ct();return ft(e)>2||ft(rt)>3?"":" "}function bt(e,t){for(;--t&&ct()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return pt(e,dt()+(t<6&&32==ut()&&32==ct()))}function yt(e){for(;ct();)switch(rt){case e:return nt;case 34:case 39:34!==e&&39!==e&&yt(rt);break;case 40:41===e&&yt(e);break;case 92:ct()}return nt}function xt(e,t){for(;ct()&&e+rt!==57&&(e+rt!==84||47!==ut()););return"/*"+pt(t,nt-1)+"*"+Be(47===e?e:ct())}function wt(e){for(;!ft(ut());)ct();return pt(e,nt)}function kt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function St(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Ie:return e.return=e.return||e.value;case Me:return"";case Fe:return e.return=e.value+"{"+kt(e.children,r)+"}";case Ne:if(!qe(e.value=e.props.join(",")))return""}return qe(n=kt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Et(e,t,n){switch(function(e,t){return 45^Ye(e,0)?(((t<<2^Ye(e,0))<<2^Ye(e,1))<<2^Ye(e,2))<<2^Ye(e,3):0}(e,t)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Le+e+e;case 4789:return Ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+Ae+e+_e+e+e;case 5936:switch(Ye(e,t+11)){case 114:return Le+e+_e+$e(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+_e+$e(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+_e+$e(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Le+e+_e+e+e;case 6165:return Le+e+_e+"flex-"+e+e;case 5187:return Le+e+$e(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+_e+"flex-$1$2")+e;case 5443:return Le+e+_e+"flex-item-"+$e(e,/flex-|-self/g,"")+(We(e,/flex-|baseline/)?"":_e+"grid-row-"+$e(e,/flex-|-self/g,""))+e;case 4675:return Le+e+_e+"flex-line-pack"+$e(e,/align-content|flex-|-self/g,"")+e;case 5548:return Le+e+_e+$e(e,"shrink","negative")+e;case 5292:return Le+e+_e+$e(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+$e(e,"-grow","")+Le+e+_e+$e(e,"grow","positive")+e;case 4554:return Le+$e(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return $e($e($e(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return $e(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return $e($e(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Le+e+e;case 4200:if(!We(e,/flex-|baseline/))return _e+"grid-column-align"+Ke(e,t)+e;break;case 2592:case 3360:return _e+$e(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,We(e.props,/grid-\w+-end/)})?~Ge(e+(n=n[t].value),"span",0)?e:_e+$e(e,"-start","")+e+_e+"grid-row-span:"+(~Ge(n,"span",0)?We(n,/\d+/):+We(n,/\d+/)-+We(e,/\d+/))+";":_e+$e(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return We(e.props,/grid-\w+-start/)})?e:_e+$e($e(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $e(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(Ye(e,t+1)){case 109:if(45!==Ye(e,t+4))break;case 102:return $e(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+Ae+(108==Ye(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ge(e,"stretch",0)?Et($e(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $e(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return _e+n+":"+r+s+(i?_e+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===Ye(e,t+6))return $e(e,":",":"+Le)+e;break;case 6444:switch(Ye(e,45===Ye(e,14)?18:11)){case 120:return $e(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Le+(45===Ye(e,14)?"inline-":"")+"box$3$1"+Le+"$2$3$1"+_e+"$2box$3")+e;case 100:return $e(e,":",":"+_e)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $e(e,"scroll-","scroll-snap-")+e}return e}function jt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ie:return void(e.return=Et(e.value,e.length,n));case Fe:return kt([ot(e,{value:$e(e.value,"@","@"+Le)})],r);case Ne:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(We(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":st(ot(e,{props:[$e(t,/:(read-\w+)/,":-moz-$1")]})),st(ot(e,{props:[t]})),Ue(e,{props:Je(n,r)});break;case"::placeholder":st(ot(e,{props:[$e(t,/:(plac\w+)/,":"+Le+"input-$1")]})),st(ot(e,{props:[$e(t,/:(plac\w+)/,":-moz-$1")]})),st(ot(e,{props:[$e(t,/:(plac\w+)/,_e+"input-$1")]})),st(ot(e,{props:[t]})),Ue(e,{props:Je(n,r)})}return""})}}function Ct(e){return gt(Pt("",null,null,null,[""],e=ht(e),0,[0],e))}function Pt(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,p=0,f=0,h=0,g=1,m=1,v=1,b=0,y="",x=i,w=a,k=r,S=y;m;)switch(h=b,b=ct()){case 40:if(108!=h&&58==Ye(S,d-1)){-1!=Ge(S+=$e(mt(b),"&","&\f"),"&\f",Ve(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=mt(b);break;case 9:case 10:case 13:case 32:S+=vt(h);break;case 92:S+=bt(dt()-1,7);continue;case 47:switch(ut()){case 42:case 47:Qe(Rt(xt(ct(),dt()),t,n,l),l);break;default:S+="/"}break;case 123*g:s[c++]=qe(S)*v;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+u:-1==v&&(S=$e(S,/\f/g,"")),f>0&&qe(S)-d&&Qe(f>32?zt(S+";",r,n,d-1,l):zt($e(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(Qe(k=Tt(S,t,n,c,u,i,s,y,x=[],w=[],d,a),a),123===b)if(0===u)Pt(S,t,k,k,x,a,d,s,w);else switch(99===p&&110===Ye(S,3)?100:p){case 100:case 108:case 109:case 115:Pt(e,k,k,r&&Qe(Tt(e,k,k,0,0,i,s,y,i,x=[],d,w),w),i,w,d,s,r?x:w);break;default:Pt(S,k,k,k,[""],w,0,s,w)}}c=u=f=0,g=v=1,y=S="",d=o;break;case 58:d=1+qe(S),f=h;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==lt())continue;switch(S+=Be(b),b*g){case 38:v=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(qe(S)-1)*v,v=1;break;case 64:45===ut()&&(S+=mt(ct())),p=ut(),u=d=qe(y=S+=wt(dt())),b++;break;case 45:45===h&&2==qe(S)&&(g=0)}}return a}function Tt(e,t,n,r,i,a,o,s,l,c,u,d){for(var p=i-1,f=0===i?a:[""],h=Xe(f),g=0,m=0,v=0;g<r;++g)for(var b=0,y=Ke(e,p+1,p=Ve(m=o[g])),x=e;b<h;++b)(x=He(m>0?f[b]+" "+y:$e(y,/&\f/g,f[b])))&&(l[v++]=x);return at(e,t,n,0===i?Ne:s,l,c,u,d)}function Rt(e,t,n,r){return at(e,t,n,Me,Be(rt),Ke(e,2,-2),0,r)}function zt(e,t,n,r,i){return at(e,t,n,Ie,Ke(e,0,r),Ke(e,r+1,-1),r,i)}var Dt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",_t="active",At="data-styled-version",Lt="6.1.19",Mt="/*!sc*/\n",Nt="undefined"!=typeof window&&"undefined"!=typeof document,It=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Ft={},Vt=(new Set,Object.freeze([])),Bt=Object.freeze({});function Ut(e,t,n){return void 0===n&&(n=Bt),e.theme!==n.theme&&e.theme||t||n.theme}var Ht=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Wt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$t=/(^-|-$)/g;function Gt(e){return e.replace(Wt,"-").replace($t,"")}var Yt=/(a)(d)/gi,Kt=function(e){return String.fromCharCode(e+(e>25?39:97))};function qt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kt(t%52)+n;return(Kt(t%52)+n).replace(Yt,"$1-$2")}var Xt,Qt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jt=function(e){return Qt(5381,e)};function Zt(e){return qt(Jt(e)>>>0)}function en(e){return e.displayName||e.name||"Component"}function tn(e){return"string"==typeof e&&!0}var nn="function"==typeof Symbol&&Symbol.for,rn=nn?Symbol.for("react.memo"):60115,an=nn?Symbol.for("react.forward_ref"):60112,on={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ln={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cn=((Xt={})[an]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xt[rn]=ln,Xt);function un(e){return("type"in(t=e)&&t.type.$$typeof)===rn?ln:"$$typeof"in e?cn[e.$$typeof]:on;var t}var dn=Object.defineProperty,pn=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,hn=Object.getOwnPropertyDescriptor,gn=Object.getPrototypeOf,mn=Object.prototype;function vn(e,t,n){if("string"!=typeof t){if(mn){var r=gn(t);r&&r!==mn&&vn(e,r,n)}var i=pn(t);fn&&(i=i.concat(fn(t)));for(var a=un(e),o=un(t),s=0;s<i.length;++s){var l=i[s];if(!(l in sn||n&&n[l]||o&&l in o||a&&l in a)){var c=hn(t,l);try{dn(e,l,c)}catch(e){}}}}return e}function bn(e){return"function"==typeof e}function yn(e){return"object"==typeof e&&"styledComponentId"in e}function xn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function kn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sn(e,t,n){if(void 0===n&&(n=!1),!n&&!kn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sn(e[r],t[r]);else if(kn(t))for(var r in t)e[r]=Sn(e[r],t[r]);return e}function En(e,t){Object.defineProperty(e,"toString",{value:t})}function jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Cn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw jn(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(Mt);return t},e}(),Pn=new Map,Tn=new Map,Rn=1,zn=function(e){if(Pn.has(e))return Pn.get(e);for(;Tn.has(Rn);)Rn++;var t=Rn++;return Pn.set(e,t),Tn.set(t,e),t},Dn=function(e,t){Rn=t+1,Pn.set(e,t),Tn.set(t,e)},On="style[".concat(Ot,"][").concat(At,'="').concat(Lt,'"]'),_n=new RegExp("^".concat(Ot,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),An=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Ln=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Mt),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(_n);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Dn(u,c),An(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},Mn=function(e){for(var t=document.querySelectorAll(On),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ot)!==_t&&(Ln(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Nn(){return n.nc}var In=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Ot,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(Ot,_t),r.setAttribute(At,Lt);var o=Nn();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Fn=function(){function e(e){this.element=In(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw jn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Vn=function(){function e(e){this.element=In(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Bn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Un=Nt,Hn={isServer:!Nt,useCSSOMInjection:!It},Wn=function(){function e(e,t,n){void 0===e&&(e=Bt),void 0===t&&(t={});var r=this;this.options=Re(Re({},Hn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Nt&&Un&&(Un=!1,Mn(this)),En(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return Tn.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(Ot,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(Mt)},a=0;a<n;a++)i(a);return r}(r)})}return e.registerId=function(e){return zn(e)},e.prototype.rehydrate=function(){!this.server&&Nt&&Mn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Bn(n):t?new Fn(n):new Vn(n)}(this.options),new Cn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(zn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(zn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(zn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$n=/&/g,Gn=/^\s*\/\/.*$/gm;function Yn(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Yn(e.children,t)),e})}function Kn(e){var t,n,r,i=void 0===e?Bt:e,a=i.options,o=void 0===a?Bt:a,s=i.plugins,l=void 0===s?Vt:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push(function(e){e.type===Ne&&e.value.includes("&")&&(e.props[0]=e.props[0].replace($n,n).replace(r,c))}),o.prefix&&u.push(jt),u.push(St);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Gn,""),c=Ct(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=Yn(c,o.namespace));var d,p=[];return kt(c,function(e){var t=Xe(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce(function(e,t){return t.name||jn(15),Qt(e,t.name)},5381).toString():"",d}var qn=new Wn,Xn=Kn(),Qn=t.createContext({shouldForwardProp:void 0,styleSheet:qn,stylis:Xn}),Jn=(Qn.Consumer,t.createContext(void 0));function Zn(){return(0,t.useContext)(Qn)}function er(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],a=Zn().styleSheet,o=(0,t.useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,a]),s=(0,t.useMemo)(function(){return Kn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){Oe()(r,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:s}},[e.shouldForwardProp,o,s]);return t.createElement(Qn.Provider,{value:l},t.createElement(Jn.Provider,{value:s},e.children))}var tr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Xn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,En(this,function(){throw jn(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Xn),this.name+e.hash},e}(),nr=function(e){return e>="A"&&e<="Z"};function rr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;nr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ir=function(e){return null==e||!1===e||""===e},ar=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!ir(a)&&(Array.isArray(a)&&a.isCss||bn(a)?r.push("".concat(rr(i),":"),a,";"):kn(a)?r.push.apply(r,ze(ze(["".concat(i," {")],ar(a),!1),["}"],!1)):r.push("".concat(rr(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Dt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function or(e,t,n,r){return ir(e)?[]:yn(e)?[".".concat(e.styledComponentId)]:bn(e)?!bn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:or(e(t),t,n,r):e instanceof tr?n?(e.inject(n,r),[e.getName(r)]):[e]:kn(e)?ar(e):Array.isArray(e)?Array.prototype.concat.apply(Vt,e.map(function(e){return or(e,t,n,r)})):[e.toString()];var i}function sr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(bn(n)&&!yn(n))return!1}return!0}var lr=Jt(Lt),cr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&sr(e),this.componentId=t,this.baseHash=Qt(lr,t),this.baseStyle=n,Wn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=xn(r,this.staticRulesId);else{var i=wn(or(this.rules,e,t,n)),a=qt(Qt(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=xn(r,a),this.staticRulesId=a}else{for(var s=Qt(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=wn(or(u,e,t,n));s=Qt(s,d+c),l+=d}}if(l){var p=qt(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=xn(r,p)}}return r},e}(),ur=t.createContext(void 0);ur.Consumer;var dr={};new Set;function pr(e,n,r){var i=yn(e),a=e,o=!tn(e),s=n.attrs,l=void 0===s?Vt:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Gt(e);dr[n]=(dr[n]||0)+1;var r="".concat(n,"-").concat(Zt(Lt+n+dr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return tn(e)?"styled.".concat(e):"Styled(".concat(en(e),")")}(e):d,f=n.displayName&&n.componentId?"".concat(Gt(n.displayName),"-").concat(n.componentId):n.componentId||u,h=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,g=n.shouldForwardProp;if(i&&a.shouldForwardProp){var m=a.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var b=new cr(r,f,i?a.componentStyle:void 0);function y(e,n){return function(e,n,r){var i=e.attrs,a=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=t.useContext(ur),d=Zn(),p=e.shouldForwardProp||d.shouldForwardProp,f=Ut(n,u,o)||Bt,h=function(e,t,n){for(var r,i=Re(Re({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=bn(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?xn(i[s],o[s]):"style"===s?Re(Re({},i[s]),o[s]):o[s]}return t.className&&(i.className=xn(i.className,t.className)),i}(i,n,f),g=h.as||c,m={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===f||("forwardedAs"===v?m.as=h.forwardedAs:p&&!p(v,g)||(m[v]=h[v]));var b=function(e,t){var n=Zn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),y=xn(s,l);return b&&(y+=" "+b),h.className&&(y+=" "+h.className),m[tn(g)&&!Ht.has(g)?"class":"className"]=y,r&&(m.ref=r),(0,t.createElement)(g,m)}(x,e,n)}y.displayName=p;var x=t.forwardRef(y);return x.attrs=h,x.componentStyle=b,x.displayName=p,x.shouldForwardProp=g,x.foldedComponentIds=i?xn(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=f,x.target=i?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Sn(e,i[r],!0);return e}({},a.defaultProps,e):e}}),En(x,function(){return".".concat(x.styledComponentId)}),o&&vn(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function fr(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var hr=function(e){return Object.assign(e,{isCss:!0})};function gr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(bn(e)||kn(e))return hr(or(fr(Vt,ze([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?or(r):hr(or(fr(r,t)))}function mr(e,t,n){if(void 0===n&&(n=Bt),!t)throw jn(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,gr.apply(void 0,ze([r],i,!1)))};return r.attrs=function(r){return mr(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return mr(e,t,Re(Re({},n),r))},r}var vr=function(e){return mr(pr,e)},br=vr;Ht.forEach(function(e){br[e]=vr(e)});var yr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=sr(e),Wn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(wn(or(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Wn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Nn(),r=wn([n&&'nonce="'.concat(n,'"'),"".concat(Ot,'="true"'),"".concat(At,'="').concat(Lt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw jn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw jn(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[Ot]="",n[At]=Lt,n.dangerouslySetInnerHTML={__html:r},n),a=Nn();return a&&(i.nonce=a),[t.createElement("style",Re({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Wn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw jn(2);return t.createElement(er,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw jn(3)}})(),"__sc-".concat(Ot,"__");var xr=n(579);const wr=()=>{const[e,n]=(0,t.useState)(!1),r="/"===J().pathname,i=e=>{if(r){const t=document.getElementById(e);t&&(t.scrollIntoView({behavior:"smooth"}),n(!1))}};return(0,xr.jsx)("nav",{className:"navbar",children:(0,xr.jsxs)("div",{className:"nav-container",children:[(0,xr.jsx)(Ce,{to:"/",className:"nav-logo",onClick:()=>n(!1),children:"PurixOS"}),(0,xr.jsxs)("div",{className:e?"nav-menu active":"nav-menu",children:[(0,xr.jsx)(Ce,{to:"/",className:"nav-link",onClick:()=>n(!1),children:"Home"}),r&&(0,xr.jsxs)(xr.Fragment,{children:[(0,xr.jsx)("span",{className:"nav-link",onClick:()=>{n(!1),i("features")},children:"Features"}),(0,xr.jsx)("span",{className:"nav-link",onClick:()=>{n(!1),i("showcase")},children:"Showcase"}),(0,xr.jsx)("span",{className:"nav-link",onClick:()=>{n(!1),i("community")},children:"Community"})]}),(0,xr.jsx)(Ce,{to:"/downloads",className:"nav-link",onClick:()=>n(!1),children:"Downloads"}),(0,xr.jsx)(Ce,{to:"/workspaces",className:"nav-link",onClick:()=>n(!1),children:"Workspaces"}),(0,xr.jsx)(Ce,{to:"/security",className:"nav-link",onClick:()=>n(!1),children:"Security"}),(0,xr.jsx)(Ce,{to:"/dev-tools",className:"nav-link",onClick:()=>n(!1),children:"Dev Tools"}),(0,xr.jsx)(Ce,{to:"/support",className:"nav-link",onClick:()=>n(!1),children:"Support"})]}),(0,xr.jsxs)("div",{className:e?"nav-toggle active":"nav-toggle",onClick:()=>n(!e),children:[(0,xr.jsx)("span",{className:"bar"}),(0,xr.jsx)("span",{className:"bar"}),(0,xr.jsx)("span",{className:"bar"})]})]})})},kr=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Sr=(0,t.createContext)({}),Er=(0,t.createContext)(null),jr="undefined"!==typeof document,Cr=jr?t.useLayoutEffect:t.useEffect,Pr=(0,t.createContext)({strict:!1}),Tr=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Rr="data-"+Tr("framerAppearId");function zr(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function Dr(e){return"string"===typeof e||Array.isArray(e)}function Or(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const _r=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ar=["initial",..._r];function Lr(e){return Or(e.animate)||Ar.some(t=>Dr(e[t]))}function Mr(e){return Boolean(Lr(e)||e.variants)}function Nr(e){const{initial:n,animate:r}=function(e,t){if(Lr(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Dr(t)?t:void 0,animate:Dr(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(Sr));return(0,t.useMemo)(()=>({initial:n,animate:r}),[Ir(n),Ir(r)])}function Ir(e){return Array.isArray(e)?e.join(" "):e}const Fr={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vr={};for(const n in Fr)Vr[n]={isEnabled:e=>Fr[n].some(t=>!!e[t])};const Br=(0,t.createContext)({}),Ur=(0,t.createContext)({}),Hr=Symbol.for("motionComponentSymbol");function Wr(e){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:a,Component:o}=e;n&&function(e){for(const t in e)Vr[t]={...Vr[t],...e[t]}}(n);const s=(0,t.forwardRef)(function(e,s){let l;const c={...(0,t.useContext)(kr),...e,layoutId:$r(e)},{isStatic:u}=c,d=Nr(e),p=a(e,u);if(!u&&jr){d.visualElement=function(e,n,r,i){const{visualElement:a}=(0,t.useContext)(Sr),o=(0,t.useContext)(Pr),s=(0,t.useContext)(Er),l=(0,t.useContext)(kr).reducedMotion,c=(0,t.useRef)();i=i||o.renderer,!c.current&&i&&(c.current=i(e,{visualState:n,parent:a,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const u=c.current;(0,t.useInsertionEffect)(()=>{u&&u.update(r,s)});const d=(0,t.useRef)(Boolean(r[Rr]&&!window.HandoffComplete));return Cr(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),(0,t.useEffect)(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}(o,p,c,r);const e=(0,t.useContext)(Ur),i=(0,t.useContext)(Pr).strict;d.visualElement&&(l=d.visualElement.loadFeatures(c,i,n,e))}return t.createElement(Sr.Provider,{value:d},l&&d.visualElement?t.createElement(l,{visualElement:d.visualElement,...c}):null,i(o,e,function(e,n,r){return(0,t.useCallback)(t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):zr(r)&&(r.current=t))},[n])}(p,d.visualElement,s),p,u,d.visualElement))});return s[Hr]=o,s}function $r(e){let{layoutId:n}=e;const r=(0,t.useContext)(Br).id;return r&&void 0!==n?r+"-"+n:n}function Gr(e){function t(t){return Wr(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const Yr=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kr(e){return"string"===typeof e&&!e.includes("-")&&!!(Yr.indexOf(e)>-1||/[A-Z]/.test(e))}const qr={};const Xr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Qr=new Set(Xr);function Jr(e,t){let{layout:n,layoutId:r}=t;return Qr.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!qr[e]||"opacity"===e)}const Zr=e=>Boolean(e&&e.getVelocity),ei={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ti=Xr.length;const ni=e=>t=>"string"===typeof t&&t.startsWith(e),ri=ni("--"),ii=ni("var(--"),ai=(e,t)=>t&&"number"===typeof e?t.transform(e):e,oi=(e,t,n)=>Math.min(Math.max(n,e),t),si={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},li={...si,transform:e=>oi(0,1,e)},ci={...si,default:1},ui=e=>Math.round(1e5*e)/1e5,di=/(-)?([\d]*\.?[\d])+/g,pi=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,fi=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function hi(e){return"string"===typeof e}const gi=e=>({test:t=>hi(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),mi=gi("deg"),vi=gi("%"),bi=gi("px"),yi=gi("vh"),xi=gi("vw"),wi={...vi,parse:e=>vi.parse(e)/100,transform:e=>vi.transform(100*e)},ki={...si,transform:Math.round},Si={borderWidth:bi,borderTopWidth:bi,borderRightWidth:bi,borderBottomWidth:bi,borderLeftWidth:bi,borderRadius:bi,radius:bi,borderTopLeftRadius:bi,borderTopRightRadius:bi,borderBottomRightRadius:bi,borderBottomLeftRadius:bi,width:bi,maxWidth:bi,height:bi,maxHeight:bi,size:bi,top:bi,right:bi,bottom:bi,left:bi,padding:bi,paddingTop:bi,paddingRight:bi,paddingBottom:bi,paddingLeft:bi,margin:bi,marginTop:bi,marginRight:bi,marginBottom:bi,marginLeft:bi,rotate:mi,rotateX:mi,rotateY:mi,rotateZ:mi,scale:ci,scaleX:ci,scaleY:ci,scaleZ:ci,skew:mi,skewX:mi,skewY:mi,distance:bi,translateX:bi,translateY:bi,translateZ:bi,x:bi,y:bi,z:bi,perspective:bi,transformPerspective:bi,opacity:li,originX:wi,originY:wi,originZ:bi,zIndex:ki,fillOpacity:li,strokeOpacity:li,numOctaves:ki};function Ei(e,t,n,r){const{style:i,vars:a,transform:o,transformOrigin:s}=e;let l=!1,c=!1,u=!0;for(const d in t){const e=t[d];if(ri(d)){a[d]=e;continue}const n=Si[d],r=ai(e,n);if(Qr.has(d)){if(l=!0,o[d]=r,!u)continue;e!==(n.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,s[d]=r):i[d]=r}if(t.transform||(l||r?i.transform=function(e,t,n,r){let{enableHardwareAcceleration:i=!0,allowTransformNone:a=!0}=t,o="";for(let s=0;s<ti;s++){const t=Xr[s];void 0!==e[t]&&(o+=`${ei[t]||t}(${e[t]}) `)}return i&&!e.z&&(o+="translateZ(0)"),o=o.trim(),r?o=r(e,n?"":o):a&&n&&(o="none"),o}(e.transform,n,u,r):i.transform&&(i.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}const ji=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ci(e,t,n){for(const r in t)Zr(t[r])||Jr(r,n)||(e[r]=t[r])}function Pi(e,n,r){const i={};return Ci(i,e.style||{},e),Object.assign(i,function(e,n,r){let{transformTemplate:i}=e;return(0,t.useMemo)(()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Ei(e,n,{enableHardwareAcceleration:!r},i),Object.assign({},e.vars,e.style)},[n])}(e,n,r)),e.transformValues?e.transformValues(i):i}function Ti(e,t,n){const r={},i=Pi(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const Ri=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function zi(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ri.has(e)}let Di=e=>!zi(e);try{(Oi=require("@emotion/is-prop-valid").default)&&(Di=e=>e.startsWith("on")?!zi(e):Oi(e))}catch(Zm){}var Oi;function _i(e,t,n){return"string"===typeof e?e:bi.transform(t+n*e)}const Ai={offset:"stroke-dashoffset",array:"stroke-dasharray"},Li={offset:"strokeDashoffset",array:"strokeDasharray"};function Mi(e,t,n,r,i){let{attrX:a,attrY:o,attrScale:s,originX:l,originY:c,pathLength:u,pathSpacing:d=1,pathOffset:p=0,...f}=t;if(Ei(e,f,n,i),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:h,style:g,dimensions:m}=e;h.transform&&(m&&(g.transform=h.transform),delete h.transform),m&&(void 0!==l||void 0!==c||g.transform)&&(g.transformOrigin=function(e,t,n){return`${_i(t,e.x,e.width)} ${_i(n,e.y,e.height)}`}(m,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==a&&(h.x=a),void 0!==o&&(h.y=o),void 0!==s&&(h.scale=s),void 0!==u&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Ai:Li;e[a.offset]=bi.transform(-r);const o=bi.transform(t),s=bi.transform(n);e[a.array]=`${o} ${s}`}(h,u,d,p,!1)}const Ni=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Ii=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Fi(e,n,r,i){const a=(0,t.useMemo)(()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Mi(t,n,{enableHardwareAcceleration:!1},Ii(i),e.transformTemplate),{...t.attrs,style:{...t.style}}},[n]);if(e.style){const t={};Ci(t,e.style,e),a.style={...t,...a.style}}return a}function Vi(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,a,o)=>{let{latestValues:s}=a;const l=(Kr(n)?Fi:Ti)(r,s,o,n),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(Di(i)||!0===n&&zi(i)||!t&&!zi(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,e),u={...c,...l,ref:i},{children:d}=r,p=(0,t.useMemo)(()=>Zr(d)?d.get():d,[d]);return(0,t.createElement)(n,{...u,children:p})}}function Bi(e,t,n,r){let{style:i,vars:a}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}const Ui=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Hi(e,t,n,r){Bi(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Ui.has(i)?i:Tr(i),t.attrs[i])}function Wi(e,t){const{style:n}=e,r={};for(const i in n)(Zr(n[i])||t.style&&Zr(t.style[i])||Jr(i,e))&&(r[i]=n[i]);return r}function $i(e,t){const n=Wi(e,t);for(const r in e)if(Zr(e[r])||Zr(t[r])){n[-1!==Xr.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function Gi(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}function Yi(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}const Ki=e=>Array.isArray(e),qi=e=>Ki(e)?e[e.length-1]||0:e;function Xi(e){const t=Zr(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Qi=e=>(n,r)=>{const i=(0,t.useContext)(Sr),a=(0,t.useContext)(Er),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a,onMount:o}=e;const s={latestValues:Ji(t,n,r,i),renderState:a()};return o&&(s.mount=e=>o(t,e,s)),s}(e,n,i,a);return r?o():Yi(o)};function Ji(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=Xi(a[p]);let{initial:o,animate:s}=e;const l=Lr(e),c=Mr(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===o;const d=u?s:o;if(d&&"boolean"!==typeof d&&!Or(d)){(Array.isArray(d)?d:[d]).forEach(t=>{const n=Gi(e,t);if(!n)return;const{transitionEnd:r,transition:a,...o}=n;for(const e in o){let t=o[e];if(Array.isArray(t)){t=t[u?t.length-1:0]}null!==t&&(i[e]=t)}for(const e in r)i[e]=r[e]})}return i}const Zi=e=>e;class ea{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const ta=["prepare","read","update","preRender","render","postRender"];const{schedule:na,cancel:ra,state:ia,steps:aa}=function(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=ta.reduce((e,t)=>(e[t]=function(e){let t=new ea,n=new ea,r=0,i=!1,a=!1;const o=new WeakSet,s={schedule:function(e){const a=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,s=a?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),s.add(e)&&a&&i&&(r=t.order.length),e},cancel:e=>{n.remove(e),o.delete(e)},process:l=>{if(i)a=!0;else{if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),o.has(r)&&(s.schedule(r),e())}i=!1,a&&(a=!1,s.process(l))}}};return s}(()=>n=!0),e),{}),o=e=>a[e].process(i),s=()=>{const a=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1),i.timestamp=a,i.isProcessing=!0,ta.forEach(o),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=ta.reduce((t,o)=>{const l=a[o];return t[o]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(s)),l.schedule(t,a,o)},t},{});return{schedule:l,cancel:e=>ta.forEach(t=>a[t].cancel(e)),state:i,steps:a}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:Zi,!0),oa={useVisualState:Qi({scrapeMotionValuesFromProps:$i,createRenderState:Ni,onMount:(e,t,n)=>{let{renderState:r,latestValues:i}=n;na.read(()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(Jm){r.dimensions={x:0,y:0,width:0,height:0}}}),na.render(()=>{Mi(r,i,{enableHardwareAcceleration:!1},Ii(t.tagName),e.transformTemplate),Hi(t,r)})}})},sa={useVisualState:Qi({scrapeMotionValuesFromProps:Wi,createRenderState:ji})};function la(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const ca=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function ua(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function da(e,t,n,r){return la(e,t,(e=>t=>ca(t)&&e(t,ua(t)))(n),r)}const pa=(e,t)=>n=>t(e(n)),fa=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(pa)};function ha(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const ga=ha("dragHorizontal"),ma=ha("dragVertical");function va(e){let t=!1;if("y"===e)t=ma();else if("x"===e)t=ga();else{const e=ga(),n=ma();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function ba(){const e=va(!0);return!e||(e(),!1)}class ya{constructor(e){this.isMounted=!1,this.node=e}update(){}}function xa(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return da(e.current,n,(n,i)=>{if("touch"===n.pointerType||ba())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&na.update(()=>a[r](n,i))},{passive:!e.getProps()[r]})}const wa=(e,t)=>!!t&&(e===t||wa(e,t.parentElement));function ka(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ua(n))}const Sa=new WeakMap,Ea=new WeakMap,ja=e=>{const t=Sa.get(e.target);t&&t(e)},Ca=e=>{e.forEach(ja)};function Pa(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Ea.has(r)||Ea.set(r,{});const i=Ea.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(Ca,{root:t,...n})),i[a]}(t);return Sa.set(e,n),r.observe(e),()=>{Sa.delete(e),r.unobserve(e)}}const Ta={some:0,all:1};const Ra={inView:{Feature:class extends ya{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Ta[r]};return Pa(this.node.current,a,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends ya{constructor(){super(...arguments),this.removeStartListeners=Zi,this.removeEndListeners=Zi,this.removeAccessibleListeners=Zi,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=da(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps();na.update(()=>{i||wa(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)})},{passive:!(n.onTap||n.onPointerUp)}),i=da(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=fa(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=la(this.node.current,"keydown",e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=la(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&ka("up",(e,t)=>{const{onTap:n}=this.node.getProps();n&&na.update(()=>n(e,t))})}),ka("down",(e,t)=>{this.startPress(e,t)})}),t=la(this.node.current,"blur",()=>{this.isPressing&&ka("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=fa(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&na.update(()=>n(e,t))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ba()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&na.update(()=>n(e,t))}mount(){const e=this.node.getProps(),t=da(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=la(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=fa(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends ya{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Jm){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=fa(la(this.node.current,"focus",()=>this.onFocus()),la(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends ya{mount(){this.unmount=fa(xa(this.node,!0),xa(this.node,!1))}unmount(){}}}};function za(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Da(e,t,n){const r=e.getProps();return Gi(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach((e,n)=>t[n]=e.get()),t}(e),function(e){const t={};return e.values.forEach((e,n)=>t[n]=e.getVelocity()),t}(e))}let Oa=Zi,_a=Zi;const Aa=e=>1e3*e,La=e=>e/1e3,Ma=!1,Na=e=>Array.isArray(e)&&"number"===typeof e[0];function Ia(e){return Boolean(!e||"string"===typeof e&&Va[e]||Na(e)||Array.isArray(e)&&e.every(Ia))}const Fa=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Va={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fa([0,.65,.55,1]),circOut:Fa([.55,0,1,.45]),backIn:Fa([.31,.01,.66,-.59]),backOut:Fa([.33,1.53,.69,.99])};function Ba(e){if(e)return Na(e)?Fa(e):Array.isArray(e)?e.map(Ba):Va[e]}const Ua=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Ha(e,t,n,r){if(e===t&&n===r)return Zi;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=Ua(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:Ua(i(e),t,r)}const Wa=Ha(.42,0,1,1),$a=Ha(0,0,.58,1),Ga=Ha(.42,0,.58,1),Ya=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ka=e=>t=>1-e(1-t),qa=e=>1-Math.sin(Math.acos(e)),Xa=Ka(qa),Qa=Ya(qa),Ja=Ha(.33,1.53,.69,.99),Za=Ka(Ja),eo=Ya(Za),to={linear:Zi,easeIn:Wa,easeInOut:Ga,easeOut:$a,circIn:qa,circInOut:Qa,circOut:Xa,backIn:Za,backInOut:eo,backOut:Ja,anticipate:e=>(e*=2)<1?.5*Za(e):.5*(2-Math.pow(2,-10*(e-1)))},no=e=>{if(Array.isArray(e)){_a(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return Ha(t,n,r,i)}return"string"===typeof e?(_a(void 0!==to[e],`Invalid easing type '${e}'`),to[e]):e},ro=(e,t)=>n=>Boolean(hi(n)&&fi.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),io=(e,t,n)=>r=>{if(!hi(r))return r;const[i,a,o,s]=r.match(di);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},ao={...si,transform:e=>Math.round((e=>oi(0,255,e))(e))},oo={test:ro("rgb","red"),parse:io("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+ao.transform(t)+", "+ao.transform(n)+", "+ao.transform(r)+", "+ui(li.transform(i))+")"}};const so={test:ro("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:oo.transform},lo={test:ro("hsl","hue"),parse:io("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+vi.transform(ui(n))+", "+vi.transform(ui(r))+", "+ui(li.transform(i))+")"}},co={test:e=>oo.test(e)||so.test(e)||lo.test(e),parse:e=>oo.test(e)?oo.parse(e):lo.test(e)?lo.parse(e):so.parse(e),transform:e=>hi(e)?e:e.hasOwnProperty("red")?oo.transform(e):lo.transform(e)},uo=(e,t,n)=>-n*e+n*t+e;function po(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const fo=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},ho=[so,oo,lo];function go(e){const t=(e=>ho.find(t=>t.test(e)))(e);_a(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===lo&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=po(i,e,t+1/3),o=po(i,e,t),s=po(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const mo=(e,t)=>{const n=go(e),r=go(t),i={...n};return e=>(i.red=fo(n.red,r.red,e),i.green=fo(n.green,r.green,e),i.blue=fo(n.blue,r.blue,e),i.alpha=uo(n.alpha,r.alpha,e),oo.transform(i))};const vo={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:Zi},bo={regex:pi,countKey:"Colors",token:"${c}",parse:co.parse},yo={regex:di,countKey:"Numbers",token:"${n}",parse:si.parse};function xo(e,t){let{regex:n,countKey:r,token:i,parse:a}=t;const o=e.tokenised.match(n);o&&(e["num"+r]=o.length,e.tokenised=e.tokenised.replace(n,i),e.values.push(...o.map(a)))}function wo(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&xo(n,vo),xo(n,bo),xo(n,yo),n}function ko(e){return wo(e).values}function So(e){const{values:t,numColors:n,numVars:r,tokenised:i}=wo(e),a=t.length;return e=>{let t=i;for(let i=0;i<a;i++)t=i<r?t.replace(vo.token,e[i]):i<r+n?t.replace(bo.token,co.transform(e[i])):t.replace(yo.token,ui(e[i]));return t}}const Eo=e=>"number"===typeof e?0:e;const jo={test:function(e){var t,n;return isNaN(e)&&hi(e)&&((null===(t=e.match(di))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(pi))||void 0===n?void 0:n.length)||0)>0},parse:ko,createTransformer:So,getAnimatableNone:function(e){const t=ko(e);return So(e)(t.map(Eo))}},Co=(e,t)=>n=>`${n>0?t:e}`;function Po(e,t){return"number"===typeof e?n=>uo(e,t,n):co.test(e)?mo(e,t):e.startsWith("var(")?Co(e,t):zo(e,t)}const To=(e,t)=>{const n=[...e],r=n.length,i=e.map((e,n)=>Po(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},Ro=(e,t)=>{const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=Po(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}},zo=(e,t)=>{const n=jo.createTransformer(t),r=wo(e),i=wo(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?fa(To(r.values,i.values),n):(Oa(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),Co(e,t))},Do=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},Oo=(e,t)=>n=>uo(e,t,n);function _o(e,t,n){const r=[],i=n||function(e){return"number"===typeof e?Oo:"string"===typeof e?co.test(e)?mo:zo:Array.isArray(e)?To:"object"===typeof e?Ro:Oo}(e[0]),a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||Zi:t;n=fa(e,n)}r.push(n)}return r}function Ao(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(_a(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=_o(t,r,i),s=o.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=Do(e[n],e[n+1],t);return o[n](r)};return n?t=>l(oi(e[0],e[a-1],t)):l}function Lo(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Do(0,t,r);e.push(uo(n,1,i))}}(t,e.length-1),t}function Mo(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(no):no(i),o={done:!1,value:n[0]},s=function(e,t){return e.map(e=>e*t)}(r&&r.length===n.length?r:Lo(n),t),l=Ao(s,n,{ease:Array.isArray(a)?a:(c=n,u=a,c.map(()=>u||Ga).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}function No(e,t){return t?e*(1e3/t):0}function Io(e,t,n){const r=Math.max(t-5,0);return No(n-e(r),t-r)}const Fo=.001;function Vo(e){let t,n,{duration:r=800,bounce:i=.25,velocity:a=0,mass:o=1}=e;Oa(r<=Aa(10),"Spring duration must be 10 seconds or less");let s=1-i;s=oi(.05,1,s),r=oi(.01,10,La(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=Uo(e,s),l=Math.exp(-n);return Fo-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=Uo(Math.pow(e,2),s);return(-t(e)+Fo>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<Bo;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Aa(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const Bo=12;function Uo(e,t){return e*Math.sqrt(1-t*t)}const Ho=["duration","bounce"],Wo=["stiffness","damping","mass"];function $o(e,t){return t.some(t=>void 0!==e[t])}function Go(e){let{keyframes:t,restDelta:n,restSpeed:r,...i}=e;const a=t[0],o=t[t.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!$o(e,Wo)&&$o(e,Ho)){const n=Vo(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-La(i.velocity||0)}),h=p||0,g=c/(2*Math.sqrt(l*u)),m=o-a,v=La(Math.sqrt(l/u)),b=Math.abs(m)<5;let y;if(r||(r=b?.01:2),n||(n=b?.005:.5),g<1){const e=Uo(v,g);y=t=>{const n=Math.exp(-g*v*t);return o-n*((h+g*v*m)/e*Math.sin(e*t)+m*Math.cos(e*t))}}else if(1===g)y=e=>o-Math.exp(-v*e)*(m+(h+v*m)*e);else{const e=v*Math.sqrt(g*g-1);y=t=>{const n=Math.exp(-g*v*t),r=Math.min(e*t,300);return o-n*((h+g*v*m)*Math.sinh(r)+e*m*Math.cosh(r))/e}}return{calculatedDuration:f&&d||null,next:e=>{const t=y(e);if(f)s.done=e>=d;else{let i=h;0!==e&&(i=g<1?Io(y,e,t):0);const a=Math.abs(i)<=r,l=Math.abs(o-t)<=n;s.done=a&&l}return s.value=s.done?o:t,s}}}function Yo(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],f={done:!1,value:p},h=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let g=r*n;const m=p+g,v=void 0===s?m:s(m);v!==m&&(g=v-p);const b=e=>-g*Math.exp(-e/i),y=e=>v+b(e),x=e=>{const t=b(e),n=y(e);f.done=Math.abs(t)<=u,f.value=f.done?v:n};let w,k;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(f.value)&&(w=e,k=Go({keyframes:[f.value,h(f.value)],velocity:Io(y,e,f.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,x(e),S(e)),void 0!==w&&e>w?k.next(e-w):(!t&&x(e),f)}}}const Ko=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>na.update(t,!0),stop:()=>ra(t),now:()=>ia.isProcessing?ia.timestamp:performance.now()}};function qo(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const Xo={decay:Yo,inertia:Yo,tween:Mo,keyframes:Mo,spring:Go};function Qo(e){let t,n,{autoplay:r=!0,delay:i=0,driver:a=Ko,keyframes:o,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:u="loop",onPlay:d,onStop:p,onComplete:f,onUpdate:h,...g}=e,m=1,v=!1;const b=()=>{n=new Promise(e=>{t=e})};let y;b();const x=Xo[s]||Mo;let w;x!==Mo&&"number"!==typeof o[0]&&(w=Ao([0,100],o,{clamp:!1}),o=[0,100]);const k=x({...g,keyframes:o});let S;"mirror"===u&&(S=x({...g,keyframes:[...o].reverse(),velocity:-(g.velocity||0)}));let E="idle",j=null,C=null,P=null;null===k.calculatedDuration&&l&&(k.calculatedDuration=qo(k));const{calculatedDuration:T}=k;let R=1/0,z=1/0;null!==T&&(R=T+c,z=R*(l+1)-c);let D=0;const O=e=>{if(null===C)return;m>0&&(C=Math.min(C,e)),m<0&&(C=Math.min(e-z/m,C)),D=null!==j?j:Math.round(e-C)*m;const t=D-i*(m>=0?1:-1),n=m>=0?t<0:t>z;D=Math.max(t,0),"finished"===E&&null===j&&(D=z);let r=D,a=k;if(l){const e=Math.min(D,z)/R;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===u?(n=1-n,c&&(n-=c/R)):"mirror"===u&&(a=S)),r=oi(0,1,n)*R}const s=n?{done:!1,value:o[0]}:a.next(r);w&&(s.value=w(s.value));let{done:d}=s;n||null===T||(d=m>=0?D>=z:D<=0);const p=null===j&&("finished"===E||"running"===E&&d);return h&&h(s.value),p&&L(),s},_=()=>{y&&y.stop(),y=void 0},A=()=>{E="idle",_(),t(),b(),C=P=null},L=()=>{E="finished",f&&f(),_(),t()},M=()=>{if(v)return;y||(y=a(O));const e=y.now();d&&d(),null!==j?C=e-j:C&&"finished"!==E||(C=e),"finished"===E&&b(),P=C,j=null,E="running",y.start()};r&&M();const N={then:(e,t)=>n.then(e,t),get time(){return La(D)},set time(e){e=Aa(e),D=e,null===j&&y&&0!==m?C=y.now()-e/m:j=e},get duration(){const e=null===k.calculatedDuration?qo(k):k.calculatedDuration;return La(e)},get speed(){return m},set speed(e){e!==m&&y&&(m=e,N.time=La(D))},get state(){return E},play:M,pause:()=>{E="paused",j=D},stop:()=>{v=!0,"idle"!==E&&(E="idle",p&&p(),A())},cancel:()=>{null!==P&&O(P),A()},complete:()=>{E="finished"},sample:e=>(C=0,O(e))};return N}const Jo=function(e){let t;return()=>(void 0===t&&(t=e()),t)}(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Zo=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function es(e,t,n){let{onUpdate:r,onComplete:i,...a}=n;if(!(Jo()&&Zo.has(t)&&!a.repeatDelay&&"mirror"!==a.repeatType&&0!==a.damping&&"inertia"!==a.type))return!1;let o,s,l=!1,c=!1;const u=()=>{s=new Promise(e=>{o=e})};u();let{keyframes:d,duration:p=300,ease:f,times:h}=a;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!Ia(t.ease))(t,a)){const e=Qo({...a,repeat:0,delay:0});let t={done:!1,value:d[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;h=void 0,d=n,p=r-10,f="linear"}const g=function(e,t,n){let{delay:r=0,duration:i,repeat:a=0,repeatType:o="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const u=Ba(s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"})}(e.owner.current,t,d,{...a,duration:p,ease:f,times:h}),m=()=>{c=!1,g.cancel()},v=()=>{c=!0,na.update(m),o(),u()};g.onfinish=()=>{c||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(d,a)),i&&i(),v())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(g.timeline=e,g.onfinish=null,Zi),get time(){return La(g.currentTime||0)},set time(e){g.currentTime=Aa(e)},get speed(){return g.playbackRate},set speed(e){g.playbackRate=e},get duration(){return La(p)},play:()=>{l||(g.play(),ra(m))},pause:()=>g.pause(),stop:()=>{if(l=!0,"idle"===g.playState)return;const{currentTime:t}=g;if(t){const n=Qo({...a,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}v()},complete:()=>{c||g.finish()},cancel:v}}const ts={type:"spring",stiffness:500,damping:25,restSpeed:10},ns={type:"keyframes",duration:.8},rs={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},is=(e,t)=>{let{keyframes:n}=t;return n.length>2?ns:Qr.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:ts:rs},as=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!jo.test(t)&&"0"!==t||t.startsWith("url("))),os=new Set(["brightness","contrast","saturate","opacity"]);function ss(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(di)||[];if(!r)return e;const i=n.replace(r,"");let a=os.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const ls=/([a-z-]*)\(.*?\)/g,cs={...jo,getAnimatableNone:e=>{const t=e.match(ls);return t?t.map(ss).join(" "):e}},us={...Si,color:co,backgroundColor:co,outlineColor:co,fill:co,stroke:co,borderColor:co,borderTopColor:co,borderRightColor:co,borderBottomColor:co,borderLeftColor:co,filter:cs,WebkitFilter:cs},ds=e=>us[e];function ps(e,t){let n=ds(e);return n!==cs&&(n=jo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const fs=e=>/^0[^.\s]+$/.test(e);function hs(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||fs(e):void 0}function gs(e,t){return e[t]||e.default||e}const ms=!1,vs=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i=>{const a=gs(r,e)||{},o=a.delay||r.delay||0;let{elapsed:s=0}=r;s-=Aa(o);const l=function(e,t,n,r){const i=as(t,n);let a;a=Array.isArray(n)?[...n]:[null,n];const o=void 0!==r.from?r.from:e.get();let s;const l=[];for(let c=0;c<a.length;c++)null===a[c]&&(a[c]=0===c?o:a[c-1]),hs(a[c])&&l.push(c),"string"===typeof a[c]&&"none"!==a[c]&&"0"!==a[c]&&(s=a[c]);if(i&&l.length&&s)for(let c=0;c<l.length;c++)a[l[c]]=ps(t,s);return a}(t,e,n,a),c=l[0],u=l[l.length-1],d=as(e,c),p=as(e,u);Oa(d===p,`You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);let f={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-s,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{i(),a.onComplete&&a.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length}(a)||(f={...f,...is(e,f)}),f.duration&&(f.duration=Aa(f.duration)),f.repeatDelay&&(f.repeatDelay=Aa(f.repeatDelay)),!d||!p||Ma||!1===a.type||ms)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:i}=e;const a=()=>(r&&r(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Zi,pause:Zi,stop:Zi,then:e=>(e(),Promise.resolve()),cancel:Zi,complete:Zi});return n?Qo({keyframes:[0,1],duration:0,delay:n,onComplete:a}):a()}(Ma?{...f,delay:0}:f);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=es(t,e,f);if(n)return n}return Qo(f)}};function bs(e){return Boolean(Zr(e)&&e.add)}const ys=e=>/^\-?\d*\.?\d+$/.test(e);function xs(e,t){-1===e.indexOf(t)&&e.push(t)}function ws(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ks{constructor(){this.subscriptions=[]}add(e){return xs(this.subscriptions,e),()=>ws(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ss={current:void 0};class Es{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:i}=ia;t.lastUpdated!==i&&(t.timeDelta=r,t.lastUpdated=i,na.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>na.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new ks);const n=this.events[e].add(t);return"change"===e?()=>{n(),na.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ss.current&&Ss.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?No(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function js(e,t){return new Es(e,t)}const Cs=e=>t=>t.test(e),Ps=[si,bi,vi,mi,xi,yi,{test:e=>"auto"===e,parse:e=>e}],Ts=e=>Ps.find(Cs(e)),Rs=[...Ps,co,jo],zs=e=>Rs.find(Cs(e));function Ds(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,js(n))}function Os(e,t){const n=Da(e,t);let{transitionEnd:r={},transition:i={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const o in a){Ds(e,o,qi(a[o]))}}function _s(e,t){if(!t)return;return(t[e]||t.default||t).from}function As(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function Ls(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function Ms(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(a=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in s){const t=e.getValue(d),r=s[d];if(!t||void 0===r||u&&As(u,d))continue;const i={delay:n,elapsed:0,...gs(a||{},d)};if(window.HandoffAppearAnimations){const n=e.getProps()[Rr];if(n){const e=window.HandoffAppearAnimations(n,d,t,na);null!==e&&(i.elapsed=e,i.isHandoff=!0)}}let o=!i.isHandoff&&!Ls(t,r);if("spring"===i.type&&(t.getVelocity()||i.velocity)&&(o=!1),t.animation&&(o=!1),o)continue;t.start(vs(d,t,r,e.shouldReduceMotion&&Qr.has(d)?{type:!1}:i));const p=t.animation;bs(l)&&(l.add(d),p.then(()=>l.remove(d))),c.push(p)}return o&&Promise.all(c).then(()=>{o&&Os(e,o)}),c}function Ns(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=Da(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(Ms(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(Is).forEach((e,r)=>{e.notify("AnimationStart",t),o.push(Ns(e,t,{...a,delay:n+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(o)}(e,t,a+r,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function Is(e,t){return e.sortNodePosition(t)}const Fs=[..._r].reverse(),Vs=_r.length;function Bs(e){return t=>Promise.all(t.map(t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>Ns(e,t,r));n=Promise.all(i)}else if("string"===typeof t)n=Ns(e,t,r);else{const i="function"===typeof t?Da(e,t,r.custom):t;n=Promise.all(Ms(e,i,r))}return n.then(()=>e.notify("AnimationComplete",t))}(e,n,r)}))}function Us(e){let t=Bs(e);const n={animate:Ws(!0),whileInView:Ws(),whileHover:Ws(),whileTap:Ws(),whileDrag:Ws(),whileFocus:Ws(),exit:Ws()};let r=!0;const i=(t,n)=>{const r=Da(e,n);if(r){const{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};function a(a,o){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],u=new Set;let d={},p=1/0;for(let t=0;t<Vs;t++){const f=Fs[t],h=n[f],g=void 0!==s[f]?s[f]:l[f],m=Dr(g),v=f===o?h.isActive:null;!1===v&&(p=t);let b=g===l[f]&&g!==s[f]&&m;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),h.protectedKeys={...d},!h.isActive&&null===v||!g&&!h.prevProp||Or(g)||"boolean"===typeof g)continue;let y=Hs(h.prevProp,g)||f===o&&h.isActive&&!b&&m||t>p&&m,x=!1;const w=Array.isArray(g)?g:[g];let k=w.reduce(i,{});!1===v&&(k={});const{prevResolvedValues:S={}}=h,E={...S,...k},j=e=>{y=!0,u.has(e)&&(x=!0,u.delete(e)),h.needsAnimating[e]=!0};for(const e in E){const t=k[e],n=S[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Ki(t)&&Ki(n)?!za(t,n):t!==n,r?void 0!==t?j(e):u.add(e):void 0!==t&&u.has(e)?j(e):h.protectedKeys[e]=!0}h.prevProp=g,h.prevResolvedValues=k,h.isActive&&(d={...d,...k}),r&&e.blockInitialAnimation&&(y=!1),!y||b&&!x||c.push(...w.map(e=>({animation:e,options:{type:f,...a}})))}if(u.size){const t={};u.forEach(n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)}),c.push({animation:t})}let f=Boolean(c.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(f=!1),r=!1,f?t(c):Promise.resolve()}return{animateChanges:a,setActive:function(t,r,i){var o;if(n[t].isActive===r)return Promise.resolve();null===(o=e.variantChildren)||void 0===o||o.forEach(e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)}),n[t].isActive=r;const s=a(i,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function Hs(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!za(t,e)}function Ws(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let $s=0;const Gs={animation:{Feature:class extends ya{constructor(e){super(e),e.animationState||(e.animationState=Us(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Or(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends ya{constructor(){super(...arguments),this.id=$s++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&i.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},Ys=(e,t)=>Math.abs(e-t);class Ks{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Qs(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Ys(e.x,t.x),r=Ys(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=ia;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=qs(t,this.transformPagePoint),na.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Qs("pointercancel"===e.type?this.lastMoveEventInfo:qs(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!ca(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const a=qs(ua(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=ia;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Qs(a,this.history)),this.removeListeners=fa(da(this.contextWindow,"pointermove",this.handlePointerMove),da(this.contextWindow,"pointerup",this.handlePointerUp),da(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ra(this.updatePoint)}}function qs(e,t){return t?{point:t(e.point)}:e}function Xs(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Qs(e,t){let{point:n}=e;return{point:n,delta:Xs(n,Zs(t)),offset:Xs(n,Js(t)),velocity:el(t,.1)}}function Js(e){return e[0]}function Zs(e){return e[e.length-1]}function el(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Zs(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Aa(t)));)n--;if(!r)return{x:0,y:0};const a=La(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function tl(e){return e.max-e.min}function nl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function rl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=uo(t.min,t.max,e.origin),e.scale=tl(n)/tl(t),(nl(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=uo(n.min,n.max,e.origin)-e.originPoint,(nl(e.translate)||isNaN(e.translate))&&(e.translate=0)}function il(e,t,n,r){rl(e.x,t.x,n.x,r?r.originX:void 0),rl(e.y,t.y,n.y,r?r.originY:void 0)}function al(e,t,n){e.min=n.min+t.min,e.max=e.min+tl(t)}function ol(e,t,n){e.min=t.min-n.min,e.max=e.min+tl(t)}function sl(e,t,n){ol(e.x,t.x,n.x),ol(e.y,t.y,n.y)}function ll(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function cl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const ul=.35;function dl(e,t,n){return{min:pl(e,t),max:pl(e,n)}}function pl(e,t){return"number"===typeof e?e:e[t]||0}const fl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function hl(e){return[e("x"),e("y")]}function gl(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function ml(e){return void 0===e||1===e}function vl(e){let{scale:t,scaleX:n,scaleY:r}=e;return!ml(t)||!ml(n)||!ml(r)}function bl(e){return vl(e)||yl(e)||e.z||e.rotate||e.rotateX||e.rotateY}function yl(e){return xl(e.x)||xl(e.y)}function xl(e){return e&&"0%"!==e}function wl(e,t,n){return n+t*(e-n)}function kl(e,t,n,r,i){return void 0!==i&&(e=wl(e,i,r)),wl(e,n,r)+t}function Sl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=kl(e.min,t,n,r,i),e.max=kl(e.max,t,n,r,i)}function El(e,t){let{x:n,y:r}=t;Sl(e.x,n.translate,n.scale,n.originPoint),Sl(e.y,r.translate,r.scale,r.originPoint)}function jl(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Cl(e,t){e.min=e.min+t,e.max=e.max+t}function Pl(e,t,n){let[r,i,a]=n;const o=void 0!==t[a]?t[a]:.5,s=uo(e.min,e.max,o);Sl(e,t[r],t[i],s,t.scale)}const Tl=["x","scaleX","originX"],Rl=["y","scaleY","originY"];function zl(e,t){Pl(e.x,t,Tl),Pl(e.y,t,Rl)}function Dl(e,t){return gl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Ol=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},_l=new WeakMap;class Al{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Ks(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(ua(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=va(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),hl(e=>{let t=this.getAxisMotionValue(e).get()||0;if(vi.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=tl(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&na.update(()=>i(e,t),!1,!0);const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>hl(e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:Ol(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&na.update(()=>i(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!Ll(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?uo(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?uo(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&zr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:ll(e.x,r,a),y:ll(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ul;return!1===e?e=0:!0===e&&(e=ul),{x:dl(e,"left","right"),y:dl(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&hl(e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!zr(e))return!1;const n=e.current;_a(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Dl(e,n),{scroll:i}=t;return i&&(Cl(r.x,i.offset.x),Cl(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:cl(e.x,t.x),y:cl(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=gl(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=hl(o=>{if(!Ll(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)});return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(vs(e,n,0,t))}stopAnimation(){hl(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){hl(e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()})}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){hl(t=>{const{drag:n}=this.getProps();if(!Ll(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-uo(n,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!zr(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};hl(e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=tl(e),i=tl(t);return i>r?n=Do(t.min,t.max-r,e.min):r>i&&(n=Do(e.min,e.max-i,t.min)),oi(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),hl(t=>{if(!Ll(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(uo(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;_l.set(this.visualElement,this);const e=da(this.visualElement.current,"pointerdown",e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{const{dragConstraints:e}=this.getProps();zr(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const i=la(window,"resize",()=>this.scalePositionWithinConstraints()),a=n.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(hl(e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))}),this.visualElement.render())});return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=ul,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function Ll(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Ml=e=>(t,n)=>{e&&na.update(()=>e(t,n))};const Nl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Il(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Fl={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!bi.test(e))return e;e=parseFloat(e)}return`${Il(e,t.target.x)}% ${Il(e,t.target.y)}%`}},Vl={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=jo.parse(e);if(a.length>5)return i;const o=jo.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const u=uo(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=u),"number"===typeof a[3+s]&&(a[3+s]/=u),o(a)}};class Bl extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;var a;a=Hl,Object.assign(qr,a),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Nl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,a=n.projection;return a?(a.isPresent=i,r||e.layoutDependency!==t||void 0===t?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||na.postRender(()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ul(e){const[n,r]=function(){const e=(0,t.useContext)(Er);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,a=(0,t.useId)();return(0,t.useEffect)(()=>i(a),[]),!n&&r?[!1,()=>r&&r(a)]:[!0]}(),i=(0,t.useContext)(Br);return t.createElement(Bl,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)(Ur),isPresent:n,safeToRemove:r})}const Hl={borderRadius:{...Fl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Fl,borderTopRightRadius:Fl,borderBottomLeftRadius:Fl,borderBottomRightRadius:Fl,boxShadow:Vl},Wl=["TopLeft","TopRight","BottomLeft","BottomRight"],$l=Wl.length,Gl=e=>"string"===typeof e?parseFloat(e):e,Yl=e=>"number"===typeof e||bi.test(e);function Kl(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const ql=Ql(0,.5,Xa),Xl=Ql(.5,.95,Zi);function Ql(e,t,n){return r=>r<e?0:r>t?1:n(Do(e,t,r))}function Jl(e,t){e.min=t.min,e.max=t.max}function Zl(e,t){Jl(e.x,t.x),Jl(e.y,t.y)}function ec(e,t,n,r,i){return e=wl(e-=t,1/n,r),void 0!==i&&(e=wl(e,1/i,r)),e}function tc(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;vi.test(t)&&(t=parseFloat(t),t=uo(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=uo(a.min,a.max,r);e===a&&(s-=t),e.min=ec(e.min,t,n,s,i),e.max=ec(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const nc=["x","scaleX","originX"],rc=["y","scaleY","originY"];function ic(e,t,n,r){tc(e.x,t,nc,n?n.x:void 0,r?r.x:void 0),tc(e.y,t,rc,n?n.y:void 0,r?r.y:void 0)}function ac(e){return 0===e.translate&&1===e.scale}function oc(e){return ac(e.x)&&ac(e.y)}function sc(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function lc(e){return tl(e.x)/tl(e.y)}class cc{constructor(){this.members=[]}add(e){xs(this.members,e),e.scheduleRender()}remove(e){if(ws(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex(t=>e===t);if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function uc(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y;if((i||a)&&(r=`translate3d(${i}px, ${a}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}const o=e.x.scale*t.x,s=e.y.scale*t.y;return 1===o&&1===s||(r+=`scale(${o}, ${s})`),r||"none"}const dc=(e,t)=>e.depth-t.depth;class pc{constructor(){this.children=[],this.isDirty=!1}add(e){xs(this.children,e),this.isDirty=!0}remove(e){ws(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(dc),this.isDirty=!1,this.children.forEach(e)}}const fc=["","X","Y","Z"],hc={visibility:"hidden"};let gc=0;const mc={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function vc(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=gc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,mc.totalNodes=mc.resolvedTargetDeltas=mc.recalculatedProjection=0,this.nodes.forEach(xc),this.nodes.forEach(Pc),this.nodes.forEach(Tc),this.nodes.forEach(wc),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(mc)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new pc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ks),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(ra(r),e(o-t))};return na.read(r,!0),()=>ra(r)}(r,250),Nl.hasAnimatedSinceResize&&(Nl.hasAnimatedSinceResize=!1,this.nodes.forEach(Cc))})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||Ac,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!sc(this.targetLayout,i)||r,u=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...gs(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||Cc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ra(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Rc),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Sc);this.isUpdating||this.nodes.forEach(Ec),this.isUpdating=!1,this.nodes.forEach(jc),this.nodes.forEach(bc),this.nodes.forEach(yc),this.clearAllSnapshots();const e=performance.now();ia.delta=oi(0,1e3/60,e-ia.timestamp),ia.timestamp=e,ia.isProcessing=!0,aa.update.process(ia),aa.preRender.process(ia),aa.render.process(ia),ia.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(kc),this.sharedNodes.forEach(zc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,na.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){na.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:i(this.instance),offset:r(this.instance)})}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!oc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||bl(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Nc((r=n).x),Nc(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(Cl(t.x,n.offset.x),Cl(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Zl(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;if(r!==this.root&&i&&a.layoutScroll){if(i.isRoot){Zl(t,e);const{scroll:n}=this.root;n&&(Cl(t.x,-n.offset.x),Cl(t.y,-n.offset.y))}Cl(t.x,i.offset.x),Cl(t.y,i.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Zl(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&zl(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),bl(e.latestValues)&&zl(n,e.latestValues)}return bl(this.latestValues)&&zl(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Zl(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!bl(e.latestValues))continue;vl(e.latestValues)&&e.updateSnapshot();const r=fl();Zl(r,e.measurePageBox()),ic(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return bl(this.latestValues)&&ic(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ia.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:i,layoutId:a}=this.options;if(this.layout&&(i||a)){if(this.resolvedRelativeTargetAt=ia.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},sl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Zl(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,al(o.x,s.x,l.x),al(o.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Zl(this.target,this.layout.layoutBox),El(this.target,this.targetDelta)):Zl(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},sl(this.relativeTargetOrigin,this.target,e.target),Zl(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}mc.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!vl(this.parent.latestValues)&&!yl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===ia.timestamp&&(r=!1),r)return;const{layout:i,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!a)return;Zl(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const i=a.instance;i&&i.style&&"contents"===i.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&zl(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,El(e,o)),r&&bl(a.latestValues)&&zl(e,a.latestValues))}t.x=jl(t.x),t.y=jl(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;il(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=uc(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===o&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),mc.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(_c));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Dc(a.x,e.x,n),Dc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(sl(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){Oc(e.x,t.x,n.x,r),Oc(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Zl(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=uo(0,void 0!==n.opacity?n.opacity:1,ql(r)),e.opacityExit=uo(void 0!==t.opacity?t.opacity:1,0,Xl(r))):a&&(e.opacity=uo(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let o=0;o<$l;o++){const i=`border${Wl[o]}Radius`;let a=Kl(t,i),s=Kl(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Yl(a)===Yl(s)?(e[i]=Math.max(uo(Gl(a),Gl(s),r),0),(vi.test(s)||vi.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=uo(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ra(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=na.update(()=>{Nl.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=Zr(e)?e:js(e);return r.start(vs("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Ic(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=tl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=tl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Zl(t,n),zl(t,i),il(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new cc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let i=0;i<fc.length;i++){const t="rotate"+fc[i];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const i in r)e.setStaticValue(i,r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return hc;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=Xi(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=Xi(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!bl(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const o=a.animationValues||a.latestValues;this.applyTransformsToTarget(),r.transform=uc(this.projectionDeltaWithTransform,this.treeScale,o),i&&(r.transform=i(o,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,a.animationValues?r.opacity=a===this?null!==(n=null!==(t=o.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:r.opacity=a===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const c in qr){if(void 0===o[c])continue;const{correct:e,applyTo:t}=qr[c],n="none"===r.transform?o[c]:e(o[c],a);if(t){const e=t.length;for(let i=0;i<e;i++)r[t[i]]=n}else r[c]=n}return this.options.layoutId&&(r.pointerEvents=a===this?Xi(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(Sc),this.root.sharedNodes.clear()}}}function bc(e){e.updateLayout()}function yc(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,a=n.source!==e.layout.source;"size"===i?hl(e=>{const r=a?n.measuredBox[e]:n.layoutBox[e],i=tl(r);r.min=t[e].min,r.max=r.min+i}):Ic(i,n.layoutBox,t)&&hl(r=>{const i=a?n.measuredBox[r]:n.layoutBox[r],o=tl(t[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};il(o,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?il(s,e.applyTransform(r,!0),n.measuredBox):il(s,t,n.layoutBox);const l=!oc(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};sl(o,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};sl(s,t,a.layoutBox),sc(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function xc(e){mc.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function wc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function kc(e){e.clearSnapshot()}function Sc(e){e.clearMeasurements()}function Ec(e){e.isLayoutDirty=!1}function jc(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Cc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Pc(e){e.resolveTargetDelta()}function Tc(e){e.calcProjection()}function Rc(e){e.resetRotation()}function zc(e){e.removeLeadSnapshot()}function Dc(e,t,n){e.translate=uo(t.translate,0,n),e.scale=uo(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Oc(e,t,n,r){e.min=uo(t.min,n.min,r),e.max=uo(t.max,n.max,r)}function _c(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Ac={duration:.45,ease:[.4,0,.1,1]},Lc=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),Mc=Lc("applewebkit/")&&!Lc("chrome/")?Math.round:Zi;function Nc(e){e.min=Mc(e.min),e.max=Mc(e.max)}function Ic(e,t,n){return"position"===e||"preserve-aspect"===e&&!nl(lc(t),lc(n),.2)}const Fc=vc({attachResizeListener:(e,t)=>la(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vc={current:void 0},Bc=vc({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Vc.current){const e=new Fc({});e.mount(window),e.setOptions({layoutScroll:!0}),Vc.current=e}return Vc.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Uc={pan:{Feature:class extends ya{constructor(){super(...arguments),this.removePointerDownListener=Zi}onPointerDown(e){this.session=new Ks(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ol(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ml(e),onStart:Ml(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&na.update(()=>r(e,t))}}}mount(){this.removePointerDownListener=da(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends ya{constructor(e){super(e),this.removeGroupControls=Zi,this.removeListeners=Zi,this.controls=new Al(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Zi}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Bc,MeasureLayout:Ul}},Hc=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Wc(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;_a(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=Hc.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return ys(e)?parseFloat(e):e}return ii(i)?Wc(i,t,n+1):i}const $c=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Gc=e=>$c.has(e),Yc=e=>e===si||e===bi,Kc=(e,t)=>parseFloat(e.split(", ")[t]),qc=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const a=i.match(/^matrix3d\((.+)\)$/);if(a)return Kc(a[1],t);{const t=i.match(/^matrix\((.+)\)$/);return t?Kc(t[1],e):0}},Xc=new Set(["x","y","z"]),Qc=Xr.filter(e=>!Xc.has(e));const Jc={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:qc(4,13),y:qc(5,14)};Jc.translateX=Jc.x,Jc.translateY=Jc.y;const Zc=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const i=Object.keys(t).filter(Gc);let a=[],o=!1;const s=[];if(i.forEach(i=>{const l=e.getValue(i);if(!e.hasValue(i))return;let c=n[i],u=Ts(c);const d=t[i];let p;if(Ki(d)){const e=d.length,t=null===d[0]?1:0;c=d[t],u=Ts(c);for(let n=t;n<e&&null!==d[n];n++)p?_a(Ts(d[n])===p,"All keyframes must be of the same type"):(p=Ts(d[n]),_a(p===u||Yc(u)&&Yc(p),"Keyframes must be of the same dimension as the current value"))}else p=Ts(d);if(u!==p)if(Yc(u)&&Yc(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[i]=parseFloat(d):Array.isArray(d)&&p===bi&&(t[i]=d.map(parseFloat))}else(null===u||void 0===u?void 0:u.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===c||0===d)?0===c?l.set(p.transform(c)):t[i]=u.transform(d):(o||(a=function(e){const t=[];return Qc.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}(e),o=!0),s.push(i),r[i]=void 0!==r[i]?r[i]:t[i],l.jump(d))}),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,i=((e,t,n)=>{const r=t.measureViewportBox(),i=t.current,a=getComputedStyle(i),{display:o}=a,s={};"none"===o&&t.setStaticValue("display",e.display||"block"),n.forEach(e=>{s[e]=Jc[e](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=Jc[n](l,a)}),e})(t,e,s);return a.length&&a.forEach(t=>{let[n,r]=t;e.getValue(n).set(r)}),e.render(),jr&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}return{target:t,transitionEnd:r}};function eu(e,t,n,r){return(e=>Object.keys(e).some(Gc))(t)?Zc(e,t,n,r):{target:t,transitionEnd:r}}const tu=(e,t,n,r)=>{const i=function(e,t,n){let{...r}=t;const i=e.current;if(!(i instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach(e=>{const t=e.get();if(!ii(t))return;const n=Wc(t,i);n&&e.set(n)});for(const a in r){const e=r[a];if(!ii(e))continue;const t=Wc(e,i);t&&(r[a]=t,n||(n={}),void 0===n[a]&&(n[a]=e))}return{target:r,transitionEnd:n}}(e,t,r);return eu(e,t=i.target,n,r=i.transitionEnd)},nu={current:null},ru={current:!1};const iu=new WeakMap,au=Object.keys(Vr),ou=au.length,su=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],lu=Ar.length;class cu{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:a}=e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>na.render(this.render,!1,!0);const{latestValues:s,renderState:l}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Lr(n),this.isVariantNode=Mr(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const e=u[d];void 0!==s[d]&&Zr(e)&&(e.set(s[d],!1),bs(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,iu.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),ru.current||function(){if(ru.current=!0,jr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>nu.current=e.matches;e.addListener(t),t()}else nu.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||nu.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){iu.delete(this.current),this.projection&&this.projection.unmount(),ra(this.notifyUpdate),ra(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=Qr.has(e),r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&na.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),i()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let i,a,{children:o,...s}=e;for(let l=0;l<ou;l++){const e=au[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:o}=Vr[e];r&&(i=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),o&&(a=o))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:a,layoutScroll:o,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||a&&zr(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:o,layoutRoot:l})}return a}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<su.length;n++){const t=su[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const i in t){const a=t[i],o=n[i];if(Zr(a))e.addValue(i,a),bs(r)&&r.add(i);else if(Zr(o))e.addValue(i,js(a,{owner:e})),bs(r)&&r.remove(i);else if(o!==a)if(e.hasValue(i)){const t=e.getValue(i);!t.hasAnimated&&t.set(a)}else{const t=e.getStaticValue(i);e.addValue(i,js(void 0!==t?t:a,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<lu;t++){const n=Ar[t],r=this.props[n];(Dr(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=js(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=Gi(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||Zr(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new ks),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class uu extends cu{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:i,...a}=e,{transformValues:o}=t,s=function(e,t,n){const r={};for(const i in e){const e=_s(i,t);if(void 0!==e)r[i]=e;else{const e=n.getValue(i);e&&(r[i]=e.get())}}return r}(a,r||{},this);if(o&&(i&&(i=o(i)),a&&(a=o(a)),s&&(s=o(s))),n){!function(e,t,n){var r,i;const a=Object.keys(t).filter(t=>!e.hasValue(t)),o=a.length;if(o)for(let s=0;s<o;s++){const o=a[s],l=t[o];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(i=null!==(r=n[o])&&void 0!==r?r:e.readValue(o))&&void 0!==i?i:t[o]),void 0!==c&&null!==c&&("string"===typeof c&&(ys(c)||fs(c))?c=parseFloat(c):!zs(c)&&jo.test(l)&&(c=ps(o,l)),e.addValue(o,js(c,{owner:e})),void 0===n[o]&&(n[o]=c),null!==c&&e.setBaseTarget(o,c))}}(this,a,s);const e=tu(this,a,s,i);i=e.transitionEnd,a=e.target}return{transition:r,transitionEnd:i,...a}}}class du extends uu{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(Qr.has(t)){const e=ds(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(ri(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Dl(e,n)}build(e,t,n,r){Ei(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return Wi(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Zr(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,n,r){Bi(e,t,n,r)}}class pu extends uu{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Qr.has(t)){const e=ds(t);return e&&e.default||0}return t=Ui.has(t)?t:Tr(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return $i(e,t)}build(e,t,n,r){Mi(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){Hi(e,t,0,r)}mount(e){this.isSVGTag=Ii(e.tagName),super.mount(e)}}const fu=(e,t)=>Kr(e)?new pu(t,{enableHardwareAcceleration:!1}):new du(t,{enableHardwareAcceleration:!0}),hu={...Gs,...Ra,...Uc,...{layout:{ProjectionNode:Bc,MeasureLayout:Ul}}},gu=Gr((e,t)=>function(e,t,n,r){let{forwardMotionProps:i=!1}=t;return{...Kr(e)?oa:sa,preloadedFeatures:n,useRender:Vi(i),createVisualElement:r,Component:e}}(e,t,hu,fu));var mu=n(64),vu=n.n(mu);const bu=br.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 30, 0.98) 100%);
  overflow: hidden;
  padding-top: 40px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(118, 75, 162, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 60% 60%, rgba(102, 126, 234, 0.03) 0%, transparent 40%);
    opacity: 0.6;
  }
`,yu=br.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 100px;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 20px;
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`,xu=br.div`
  text-align: left;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.03) 0%, transparent 50%);
    animation: ambientGlow 12s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
  }
  
  @keyframes ambientGlow {
    0%, 100% { opacity: 0.4; transform: scale(0.8) rotate(0deg); }
    33% { opacity: 0.7; transform: scale(1.2) rotate(120deg); }
    66% { opacity: 0.5; transform: scale(1.0) rotate(240deg); }
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`,wu=br.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: 
      radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 40%),
      radial-gradient(circle, rgba(118, 75, 162, 0.05) 0%, transparent 60%);
    transform: translateX(-50%) translateY(-50%);
    animation: visualGlow 15s ease-in-out infinite reverse;
    pointer-events: none;
    z-index: -1;
  }
  
  @keyframes visualGlow {
    0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(-50%) scale(1) rotate(0deg); }
    50% { opacity: 0.9; transform: translateX(-50%) translateY(-50%) scale(1.3) rotate(180deg); }
  }
  
  @media (max-width: 768px) {
    order: -1;
  }
`,ku=br(gu.div)`
  margin-bottom: 40px;
`,Su=br(gu.p)`
  font-size: 16px;
  font-weight: 400;
  color: rgba(102, 126, 234, 0.8);
  letter-spacing: 0.05em;
  margin-bottom: 15px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    width: 12px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.6));
    transform: translateY(-50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    width: 12px;
    height: 1px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), transparent);
    transform: translateY(-50%);
  }
`,Eu=br(gu.h1)`
  font-size: clamp(4rem, 12vw, 11rem);
  font-weight: 100;
  line-height: 0.85;
  margin-bottom: 30px;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`,ju=br(gu.span)`
  display: block;
  font-size: clamp(2.5rem, 8vw, 7rem);
  font-weight: 200;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 70%, #a8edea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
  margin-top: 15px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -30px;
    width: calc(100% + 60px);
    height: 3px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(102, 126, 234, 0.3), 
      rgba(118, 75, 162, 0.4), 
      rgba(168, 237, 234, 0.3), 
      transparent
    );
    transform: translateY(-50%);
    opacity: 0.6;
    filter: blur(1px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -15px;
    width: calc(100% + 30px);
    height: 1px;
    background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
    transform: translateY(-50%);
    opacity: 0.8;
  }
`,Cu=br(gu.p)`
  font-size: 22px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 40px;
  max-width: 580px;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.6));
    border-radius: 1px;
  }
  
  @media (max-width: 768px) {
    font-size: 19px;
    margin-bottom: 35px;
    margin-left: auto;
    margin-right: auto;
  }
`,Pu=br(gu.div)`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
  }
`,Tu=br(gu.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 70%, #a8edea 100%);
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  letter-spacing: -0.01em;
  display: inline-block;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 40px rgba(102, 126, 234, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
    transform: translateX(-50%) translateY(-50%);
    transition: all 0.3s ease;
    border-radius: 50%;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 15px 50px rgba(102, 126, 234, 0.5),
      0 5px 20px rgba(118, 75, 162, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
    
    &::before {
      left: 100%;
    }
    
    &::after {
      width: 120px;
      height: 120px;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
  
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px 45px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-weight: inherit;
  }
`,Ru=br(gu.div)`
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(102, 126, 234, 0.3);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 20px;
  letter-spacing: -0.01em;
  display: inline-block;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 0.05), 
      rgba(118, 75, 162, 0.03), 
      rgba(255, 255, 255, 0.05)
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.6);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 12px 40px rgba(102, 126, 234, 0.2),
      0 0 0 1px rgba(102, 126, 234, 0.1) inset;
    color: #ffffff;
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
  
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px 45px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-weight: inherit;
  }
`,zu=br(gu.div)`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`,Du=br.p`
  font-size: 12px;
  color: rgba(102, 126, 234, 0.8);
  margin-bottom: 15px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
`,Ou=br(gu.div)`
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, rgba(102, 126, 234, 0.8) 0%, transparent 100%);
  margin: 0 auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid rgba(102, 126, 234, 0.8);
  }
`,_u=()=>{const e={hidden:{opacity:0,y:40,scale:.95,filter:"blur(10px)"},visible:{opacity:1,y:0,scale:1,filter:"blur(0px)",transition:{duration:1,ease:[.25,.46,.45,.94],filter:{duration:.8}}}},t={hidden:{opacity:0,y:30,scale:.8},visible:{opacity:1,y:0,scale:1,transition:{duration:.8,ease:[.25,.46,.45,.94],type:"spring",stiffness:120,damping:10}}};return(0,xr.jsxs)(bu,{id:"hero",children:[(0,xr.jsxs)(yu,{children:[(0,xr.jsx)(xu,{children:(0,xr.jsxs)(gu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15,delayChildren:.2,duration:.8}}},initial:"hidden",animate:"visible",children:[(0,xr.jsx)(ku,{variants:e,children:(0,xr.jsx)(Su,{children:"Introducing"})}),(0,xr.jsxs)(Eu,{variants:{hidden:{opacity:0,y:60,scale:.9,rotateX:15},visible:{opacity:1,y:0,scale:1,rotateX:0,transition:{duration:1.2,ease:[.25,.46,.45,.94],type:"spring",stiffness:100,damping:12}}},children:["Purix",(0,xr.jsx)(ju,{children:"OS"})]}),(0,xr.jsx)(Cu,{variants:e,children:"A revolutionary operating system designed for the modern era. Pure simplicity meets powerful performance."}),(0,xr.jsxs)(Pu,{variants:e,children:[(0,xr.jsx)(Tu,{variants:t,whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,xr.jsx)(Ce,{to:"/downloads",children:"Download now"})}),(0,xr.jsx)(Ru,{variants:t,whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,xr.jsx)(Ce,{to:"/workspaces",children:"Explore Workspaces"})})]})]})}),(0,xr.jsx)(wu,{children:(0,xr.jsx)(gu.div,{variants:e,initial:"hidden",animate:"visible",transition:{delay:.6},children:(0,xr.jsx)(vu(),{})})})]}),(0,xr.jsxs)(zu,{onClick:()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},children:[(0,xr.jsx)(Du,{children:"Scroll"}),(0,xr.jsx)(Ou,{animate:{y:[0,10,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}})]})]})};var Au=Object.defineProperty,Lu=(e,t,n)=>((e,t,n)=>t in e?Au(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),Mu=new Map,Nu=new WeakMap,Iu=0,Fu=void 0;function Vu(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>`${t}_${"root"===t?function(e){return e?(Nu.has(e)||(Iu+=1,Nu.set(e,Iu.toString())),Nu.get(e)):"0"}(e.root):e[t]}`).toString()}function Bu(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Fu;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=Vu(e);let n=Mu.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver(t=>{t.forEach(t=>{var n;const a=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach(e=>{e(a,t)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},Mu.set(t,n)}return n}(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),Mu.delete(i))}}t.Component;function Uu(){let{threshold:e,delay:n,trackVisibility:r,rootMargin:i,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[p,f]=t.useState(null),h=t.useRef(u),[g,m]=t.useState({inView:!!l,entry:void 0});h.current=u,t.useEffect(()=>{if(s||!p)return;let t;return t=Bu(p,(e,n)=>{m({inView:e,entry:n}),h.current&&h.current(e,n),n.isIntersecting&&o&&t&&(t(),t=void 0)},{root:a,rootMargin:i,threshold:e,trackVisibility:r,delay:n},c),()=>{t&&t()}},[Array.isArray(e)?e.toString():e,p,a,i,o,s,r,c,n]);const v=null==(d=g.entry)?void 0:d.target,b=t.useRef(void 0);p||!v||o||s||b.current===v||(b.current=v,m({inView:!!l,entry:void 0}));const y=[f,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}const Hu=br.section`
  padding: 160px 0;
  background: 
    radial-gradient(ellipse at center, rgba(102, 126, 234, 0.08) 0%, transparent 70%),
    linear-gradient(180deg, #000000 0%, rgba(10, 10, 20, 0.95) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(102, 126, 234, 0.06) 0%, transparent 50%);
    animation: float 15s ease-in-out infinite alternate;
  }
  
  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(-10px, -5px) rotate(0.5deg); }
  }
`,Wu=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,$u=br.div`
  text-align: center;
  margin-bottom: 120px;
`,Gu=br(gu.h2)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 200;
  margin-bottom: 30px;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0ff 50%, #c0c0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
    border-radius: 2px;
  }
`,Yu=br(gu.p)`
  font-size: 20px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.4;
`,Ku=br.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,qu=br(gu.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(102, 126, 234, 0.02) 100%);
  border-right: 1px solid rgba(102, 126, 234, 0.15);
  border-bottom: 1px solid rgba(102, 126, 234, 0.15);
  padding: 60px 40px;
  text-align: left;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent,
      rgba(102, 126, 234, 0.08) 30%,
      rgba(118, 75, 162, 0.06) 50%,
      rgba(102, 126, 234, 0.08) 70%,
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(102, 126, 234, 0.08) 100%);
    border-right-color: rgba(102, 126, 234, 0.3);
    border-bottom-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      left: 100%;
    }
  }
  
  &:nth-child(3n) {
    border-right: none;
  }
  
  &:nth-last-child(-n+3) {
    border-bottom: none;
  }
  
  @media (max-width: 1024px) {
    &:nth-child(3n) {
      border-right: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    &:nth-child(2n) {
      border-right: none;
    }
    
    &:nth-last-child(-n+3) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    &:nth-last-child(-n+2) {
      border-bottom: none;
    }
  }
  
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 40px 30px;
    
    &:last-child {
      border-bottom: none;
    }
  }`,Xu=br.div`
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
  letter-spacing: 0.1em;
`,Qu=br.h3`
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1.2;
`,Ju=br.p`
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  font-weight: 300;
  font-size: 16px;
`,Zu=[{number:"01",title:"Pure Performance",description:"Engineered for speed. Every process optimized. Every interaction instantaneous. Built on a custom kernel that delivers 40% faster boot times and 60% better memory efficiency than traditional operating systems.",link:null},{number:"02",title:"Virtual Workspaces",description:"Like Windows virtual desktops, but smarter. Create separate desktop environments for work, gaming, development, and personal use. Switch instantly with keyboard shortcuts and maintain your workflow context.",link:"/workspaces"},{number:"03",title:"Advanced Security",description:"Privacy by design. Security by default. Your data, truly yours. End-to-end encryption, zero-knowledge architecture, and military-grade protection without compromising usability.",link:"/security"},{number:"04",title:"Developer Tools",description:"Complete development environment with modern tools, frameworks, and debugging capabilities. Built-in IDE, package management, and deployment tools for seamless development experience.",link:"/dev-tools"},{number:"05",title:"Cutting-Edge Hardware",description:"Latest technology support including WiFi 7, Bluetooth 6.0 LE, USB4 v2.0, DDR5-6400 memory, PCIe 5.0, and native AV1 hardware decode for 8K video streaming.",link:"/cutting-edge"},{number:"06",title:"Seamless Downloads",description:"Access all editions and versions from our comprehensive download center. Pro, Lite, and specialized builds with detailed installation guides and system requirements.",link:"/downloads"}],ed=()=>{const e=ee(),[t,n]=Uu({triggerOnce:!0,threshold:.1}),r={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}};return(0,xr.jsx)(Hu,{id:"features",ref:t,children:(0,xr.jsxs)(Wu,{children:[(0,xr.jsxs)($u,{children:[(0,xr.jsx)(Gu,{variants:r,initial:"hidden",animate:n?"visible":"hidden",children:"Pure Innovation"}),(0,xr.jsx)(Yu,{variants:r,initial:"hidden",animate:n?"visible":"hidden",children:"Every feature crafted with purpose. Every detail designed for perfection."})]}),(0,xr.jsx)(Ku,{children:Zu.map((t,i)=>(0,xr.jsxs)(qu,{variants:r,initial:"hidden",animate:n?"visible":"hidden",transition:{delay:.1*i},onClick:()=>{var n;(n=t.link)&&e(n)},whileHover:{scale:t.link?1.02:1},style:{cursor:t.link?"pointer":"default"},children:[(0,xr.jsx)(Xu,{children:t.number}),(0,xr.jsx)(Qu,{children:t.title}),(0,xr.jsx)(Ju,{children:t.description}),t.link&&(0,xr.jsx)(gu.div,{style:{marginTop:"16px",fontSize:"14px",color:"rgba(255, 255, 255, 0.5)",fontWeight:"300"},whileHover:{color:"rgba(255, 255, 255, 0.8)"},children:"Click to explore \u2192"})]},t.number))})]})})},td=br.section`
  padding: 120px 0;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.03) 0%, transparent 70%);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: linear-gradient(45deg, transparent 30%, rgba(102, 126, 234, 0.05) 50%, transparent 70%);
    animation: drift 20s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes drift {
    0%, 100% { transform: translateX(-20px) translateY(-10px); }
    50% { transform: translateX(20px) translateY(10px); }
  }
`,nd=br.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,rd=br.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 120px;
  
  &.reverse {
    .showcase-content {
      order: 2;
    }
    
    .showcase-visual {
      order: 1;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
    
    &.reverse {
      .showcase-content,
      .showcase-visual {
        order: unset;
      }
    }
  }
`,id=br(gu.div)``,ad=br.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
    opacity: 0.8;
  }
`,od=br.p`
  font-size: 18px;
  color: #888888;
  margin-bottom: 30px;
  line-height: 1.6;
`,sd=br(gu.button)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #ffffff;
  border: 1px solid rgba(102, 126, 234, 0.5);
  padding: 12px 24px;
  font-size: 13px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
    border-color: rgba(102, 126, 234, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
`,ld=br(gu.div)``,cd=br.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`,ud=br(gu.div)`
  width: 80px;
  height: 50px;
  background: ${e=>e.active?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.05)"};
  border: 1px solid ${e=>e.active?"rgba(255, 255, 255, 0.3)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.1) 50%,
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
    animation: workspaceGlow 2s linear infinite;
  }
  
  @keyframes workspaceGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`,dd=br.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`,pd=br.div`
  flex: 1;
  min-width: 15px;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
`,fd=br.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`,hd=br(gu.div)`
  width: 100px;
  height: 120px;
  position: relative;
`,gd=br.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(135deg, #4834d4, #686de0);
  border-radius: 50px 50px 20px 20px;
  position: relative;
  
  &::after {
    content: '✓';
    position: absolute;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
  }
`,md=br.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
`,vd=br(gu.div)`
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  width: ${e=>e.width||"100%"};
`,bd=br.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,yd=br.div`
  background: #1e1e1e;
  border-radius: 8px;
  width: 350px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,xd=br.div`
  display: flex;
  gap: 8px;
  padding: 15px;
  background: #333;
  border-radius: 8px 8px 0 0;
`,wd=br.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>e.color};
`,kd=br.div`
  padding: 20px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  line-height: 1.5;
`,Sd=br.div`
  margin-bottom: 8px;
  color: #f8f8f2;
`,Ed=br.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 300px;
`,jd=br(gu.div)`
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Cd=br.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
  }
`,Pd=br.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: rgba(102, 126, 234, 0.8);
  animation: rotate 3s linear infinite;
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,Td=br.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Rd=br(gu.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #f093fb, #f5576c);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(240, 147, 251, 0.8);
  
  &:nth-child(1) {
    top: 10%;
    left: 10%;
    animation: float1 3s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 15%;
    animation: float2 3s ease-in-out infinite 0.5s;
  }
  
  &:nth-child(3) {
    bottom: 20%;
    left: 20%;
    animation: float3 3s ease-in-out infinite 1s;
  }
  
  &:nth-child(4) {
    bottom: 10%;
    right: 10%;
    animation: float4 3s ease-in-out infinite 1.5s;
  }
  
  @keyframes float1 {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-20px) translateX(10px); }
  }
  
  @keyframes float2 {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(15px) translateX(-10px); }
  }
  
  @keyframes float3 {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-10px) translateX(15px); }
  }
  
  @keyframes float4 {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(20px) translateX(-15px); }
  }
`,zd=br.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`,Dd=br.div`
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform-origin: bottom;
  
  &:nth-child(1) {
    top: 20%;
    left: 20%;
    transform: rotate(45deg);
    animation: neural 4s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    top: 40%;
    right: 30%;
    transform: rotate(-30deg);
    animation: neural 4s ease-in-out infinite 1s;
  }
  
  &:nth-child(3) {
    bottom: 20%;
    left: 50%;
    transform: rotate(60deg);
    animation: neural 4s ease-in-out infinite 2s;
  }
  
  @keyframes neural {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }
`,Od=()=>{const e=ee(),[n,r]=(0,t.useState)(0),[i,a]=Uu({triggerOnce:!0,threshold:.3}),[o,s]=Uu({triggerOnce:!0,threshold:.3}),[l,c]=Uu({triggerOnce:!0,threshold:.3}),[u,d]=Uu({triggerOnce:!0,threshold:.3});(0,t.useEffect)(()=>{const e=setInterval(()=>{r(e=>(e+1)%3)},3e3);return()=>clearInterval(e)},[]);const p=t=>{e(t)},f={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:.8,ease:"easeOut"}}},h={hidden:{opacity:0,x:50},visible:{opacity:1,x:0,transition:{duration:.8,ease:"easeOut"}}},g={animate:{background:["rgba(255, 255, 255, 0.1)","rgba(72, 52, 212, 0.5)","rgba(255, 255, 255, 0.1)"],transition:{duration:2,repeat:1/0,ease:"easeInOut"}}};return(0,xr.jsx)(td,{id:"showcase",children:(0,xr.jsxs)(nd,{children:[(0,xr.jsxs)(rd,{ref:i,children:[(0,xr.jsxs)(id,{className:"showcase-content",variants:f,initial:"hidden",animate:a?"visible":"hidden",children:[(0,xr.jsx)(ad,{children:"Workspace reimagined."}),(0,xr.jsx)(od,{children:"Dynamic workspaces that adapt to your workflow. Seamless multitasking with intelligent window management."}),(0,xr.jsx)(sd,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>p("/workspaces"),children:"Explore Workspaces"})]}),(0,xr.jsx)(ld,{className:"showcase-visual",variants:h,initial:"hidden",animate:a?"visible":"hidden",children:(0,xr.jsx)(cd,{children:[0,1,2].map(e=>(0,xr.jsx)(ud,{active:e===n,whileHover:{scale:1.1},animate:{scale:e===n?1.1:1,background:e===n?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.05)"},transition:{duration:.3},children:(0,xr.jsxs)(dd,{children:[0===e&&(0,xr.jsxs)(xr.Fragment,{children:[(0,xr.jsx)(pd,{}),(0,xr.jsx)(pd,{})]}),1===e&&(0,xr.jsx)(pd,{}),2===e&&(0,xr.jsxs)(xr.Fragment,{children:[(0,xr.jsx)(pd,{}),(0,xr.jsx)(pd,{}),(0,xr.jsx)(pd,{})]})]})},e))})})]}),(0,xr.jsxs)(rd,{className:"reverse",ref:o,children:[(0,xr.jsxs)(id,{className:"showcase-content",variants:f,initial:"hidden",animate:s?"visible":"hidden",children:[(0,xr.jsx)(ad,{children:"Privacy first."}),(0,xr.jsx)(od,{children:"Your data stays yours. Built-in VPN, encrypted storage, and anonymous browsing by default. Advanced threat protection and zero-knowledge architecture ensure your privacy is never compromised."}),(0,xr.jsx)(sd,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>p("/security"),children:"Security Features"})]}),(0,xr.jsx)(ld,{className:"showcase-visual",variants:h,initial:"hidden",animate:s?"visible":"hidden",children:(0,xr.jsxs)(fd,{children:[(0,xr.jsx)(hd,{whileHover:{scale:1.1},animate:{y:[0,-5,0]},transition:{duration:2,repeat:1/0},children:(0,xr.jsx)(gd,{})}),(0,xr.jsxs)(md,{children:[(0,xr.jsx)(vd,{variants:g,animate:"animate"}),(0,xr.jsx)(vd,{width:"70%",variants:g,animate:"animate",transition:{delay:.3}}),(0,xr.jsx)(vd,{width:"85%",variants:g,animate:"animate",transition:{delay:.6}})]})]})})]}),(0,xr.jsxs)(rd,{ref:l,children:[(0,xr.jsxs)(id,{className:"showcase-content",variants:f,initial:"hidden",animate:c?"visible":"hidden",children:[(0,xr.jsx)(ad,{children:"Developer friendly."}),(0,xr.jsx)(od,{children:"Native support for modern development tools. Integrated terminal, code editors, and debugging tools. Run containers, manage deployments, and collaborate seamlessly with built-in Git integration."}),(0,xr.jsx)(sd,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>p("/dev-tools"),children:"Dev Tools"})]}),(0,xr.jsx)(ld,{className:"showcase-visual",variants:h,initial:"hidden",animate:c?"visible":"hidden",children:(0,xr.jsx)(bd,{children:(0,xr.jsxs)(yd,{children:[(0,xr.jsxs)(xd,{children:[(0,xr.jsx)(wd,{color:"#ff5f57"}),(0,xr.jsx)(wd,{color:"#ffbd2e"}),(0,xr.jsx)(wd,{color:"#28ca42"})]}),(0,xr.jsxs)(kd,{children:[(0,xr.jsxs)(Sd,{children:[(0,xr.jsx)("span",{style:{color:"#ff79c6"},children:"const"})," ",(0,xr.jsx)("span",{style:{color:"#f8f8f2"},children:"purixApp"})," ",(0,xr.jsx)("span",{style:{color:"#ff79c6"},children:"="})," ",(0,xr.jsx)("span",{style:{color:"#50fa7b"},children:"'amazing'"})]}),(0,xr.jsxs)(Sd,{children:[(0,xr.jsx)("span",{style:{color:"#8be9fd"},children:"console"}),(0,xr.jsx)("span",{style:{color:"#ff79c6"},children:"."}),(0,xr.jsx)("span",{style:{color:"#50fa7b"},children:"log"}),(0,xr.jsx)("span",{style:{color:"#f8f8f2"},children:"(purixApp)"})]})]})]})})})]}),(0,xr.jsxs)(rd,{className:"reverse",ref:u,children:[(0,xr.jsxs)(id,{className:"showcase-content",variants:f,initial:"hidden",animate:d?"visible":"hidden",children:[(0,xr.jsx)(ad,{children:"Cutting-edge hardware."}),(0,xr.jsx)(od,{children:"Latest technology support including WiFi 7, Bluetooth 6.0 LE, USB4 v2.0, DDR5-6400 memory, PCIe 5.0, and native AV1 hardware decode for 8K video streaming."}),(0,xr.jsx)(sd,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>p("/cutting-edge"),children:"Explore Features"})]}),(0,xr.jsx)(ld,{className:"showcase-visual",variants:h,initial:"hidden",animate:d?"visible":"hidden",children:(0,xr.jsxs)(Ed,{children:[(0,xr.jsxs)(jd,{children:[(0,xr.jsx)(Cd,{}),(0,xr.jsx)(Pd,{})]}),(0,xr.jsxs)(Td,{children:[(0,xr.jsx)(Rd,{delay:0}),(0,xr.jsx)(Rd,{delay:.5}),(0,xr.jsx)(Rd,{delay:1}),(0,xr.jsx)(Rd,{delay:1.5})]}),(0,xr.jsxs)(zd,{children:[(0,xr.jsx)(Dd,{}),(0,xr.jsx)(Dd,{}),(0,xr.jsx)(Dd,{})]})]})})]})]})})},_d=br.section`
  padding: 80px 2rem 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: 
    radial-gradient(ellipse at top, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, #000000 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
    animation: pulse 4s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`,Ad=br.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`,Ld=br(gu.h2)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0ff 50%, #c0c0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
  }
`,Md=br(gu.p)`
  font-size: 1.25rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
    animation: highlight 3s ease-in-out infinite;
  }
  
  @keyframes highlight {
    0%, 100% { width: 0; }
    50% { width: 100%; }
  }
`,Nd=br(gu.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 1rem;
`,Id=br(gu.a)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-50%);
    animation: glow 2s ease-in-out infinite;
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
    50% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(102, 126, 234, 0.5); }
  }
`,Fd=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return(0,xr.jsx)(_d,{children:(0,xr.jsx)(Ad,{children:(0,xr.jsxs)(gu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[(0,xr.jsx)(Ld,{variants:e,children:"Download Purix OS"}),(0,xr.jsx)(Md,{variants:e,children:"Experience the future of operating systems. Built for performance, designed for simplicity."}),(0,xr.jsx)(Nd,{variants:e,children:(0,xr.jsx)(Id,{as:Ce,to:"/downloads",whileHover:{scale:1.02},style:{background:"linear-gradient(90deg, #667eea, #764ba2)",borderColor:"rgba(255, 255, 255, 0.3)",fontWeight:"500",fontSize:"1.1rem",padding:"16px 32px"},children:"\ud83d\ude80 View Downloads"})})]})})})},Vd=br.section`
  padding: 120px 0;
  background: 
    radial-gradient(ellipse at top, rgba(118, 75, 162, 0.1) 0%, transparent 60%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.98) 0%, #000000 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 70%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
    animation: drift 25s ease-in-out infinite;
  }
  
  @keyframes drift {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(20px, -15px); }
    50% { transform: translate(-10px, 10px); }
    75% { transform: translate(15px, 5px); }
  }
`,Bd=br.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`,Ud=br.div`
  text-align: center;
`,Hd=br(gu.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0ff 50%, #c0c0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
  }
`,Wd=br(gu.p)`
  font-size: 18px;
  color: #888888;
  margin-bottom: 60px;
`,$d=br.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 60px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 40px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 30px;
  }
`,Gd=br(gu.div)`
  text-align: center;
`,Yd=br(gu.div)`
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff, #888888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
`,Kd=br.div`
  color: #888888;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
`,qd=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`,Xd=br(gu.a)`
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 25px;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`,Qd=br.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex-shrink: 0;
  background: ${e=>{switch(e.type){case"instagram":return"linear-gradient(135deg, #e4405f, #fd1d1d, #fcb045)";case"github":return"linear-gradient(135deg, #333333, #666666)";default:return"linear-gradient(135deg, #ffffff, #888888)"}}};
  
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    margin: 10px auto;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 2px;
  }
`,Jd=br.div``,Zd=br.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`,ep=br.p`
  color: #888888;
  font-size: 14px;
`,tp=br.div`
  margin: 80px 0;
`,np=br(gu.h3)`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
`,rp=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`,ip=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.05) 50%,
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.2);
    
    &::before {
      opacity: 1;
      animation: testimonialGlow 2s linear infinite;
    }
  }
  
  @keyframes testimonialGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`,ap=br.p`
  font-size: 16px;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 24px;
  font-style: italic;
`,op=br.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,sp=br.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
`,lp=br.div``,cp=br.h5`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
`,up=br.p`
  font-size: 12px;
  color: #888888;
`,dp=[{number:8500,suffix:"+",label:"Active Users"},{number:340,suffix:"+",label:"Contributors"},{number:24,suffix:"/7",label:"Support"}],pp=[{type:"instagram",title:"Instagram",description:"Follow us for updates and news",href:"/support"},{type:"github",title:"GitHub",description:"Contribute to development",href:"/support"}],fp=[{quote:"Switched to PurixOS Pro for better privacy controls. The reduced telemetry and clean interface make a huge difference in my daily workflow.",name:"Alex Chen",title:"Software Developer",avatar:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23667eea'/%3E%3C/svg%3E"},{quote:"The Linux-based Core edition is perfect for my development setup. Lightweight, stable, and has everything I need out of the box.",name:"Maria Rodriguez",title:"DevOps Engineer",avatar:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%23764ba2'/%3E%3C/svg%3E"},{quote:"Great alternative OS with modern hardware support. WiFi 7 and Bluetooth LE Audio work flawlessly on my new laptop.",name:"David Kim",title:"Tech Enthusiast",avatar:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='%2350fa7b'/%3E%3C/svg%3E"}],hp=()=>{const[e,n]=Uu({triggerOnce:!0,threshold:.3}),[r,i]=(0,t.useState)(dp.map(()=>0));(0,t.useEffect)(()=>{n&&dp.forEach((e,t)=>{let n=0;const r=e.number/100,a=setInterval(()=>{n+=r,n>=e.number?(i(n=>{const r=[...n];return r[t]=e.number,r}),clearInterval(a)):i(e=>{const r=[...e];return r[t]=Math.floor(n),r})},20)})},[n]);const a={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}},hover:{y:-3,scale:1.02,transition:{duration:.3}}},s=(e,t)=>"+"===t?Math.floor(e).toLocaleString()+"+":Math.floor(e)+t;return(0,xr.jsx)(Vd,{id:"community",ref:e,children:(0,xr.jsx)(Bd,{children:(0,xr.jsx)(gu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},initial:"hidden",animate:n?"visible":"hidden",children:(0,xr.jsxs)(Ud,{children:[(0,xr.jsx)(Hd,{variants:a,children:"Join the community."}),(0,xr.jsx)(Wd,{variants:a,children:"Connect with developers, share ideas, and shape the future of PurixOS."}),(0,xr.jsx)($d,{children:dp.map((e,t)=>(0,xr.jsxs)(Gd,{variants:a,initial:"hidden",animate:n?"visible":"hidden",transition:{delay:.1*t},children:[(0,xr.jsx)(Yd,{children:s(r[t],e.suffix)}),(0,xr.jsx)(Kd,{children:e.label})]},e.label))}),(0,xr.jsxs)(tp,{children:[(0,xr.jsx)(np,{variants:a,initial:"hidden",animate:n?"visible":"hidden",transition:{delay:.3},children:"What developers are saying"}),(0,xr.jsx)(rp,{children:fp.map((e,t)=>(0,xr.jsxs)(ip,{variants:a,initial:"hidden",animate:n?"visible":"hidden",transition:{delay:.4+.1*t},whileHover:{y:-5},children:[(0,xr.jsxs)(ap,{children:['"',e.quote,'"']}),(0,xr.jsxs)(op,{children:[(0,xr.jsx)(sp,{src:e.avatar,alt:e.name}),(0,xr.jsxs)(lp,{children:[(0,xr.jsx)(cp,{children:e.name}),(0,xr.jsx)(up,{children:e.title})]})]})]},t))})]}),(0,xr.jsx)(qd,{children:pp.map((e,t)=>(0,xr.jsxs)(Xd,{as:Ce,to:e.href,variants:o,initial:"hidden",animate:n?"visible":"hidden",whileHover:"hover",transition:{delay:.1*t},children:[(0,xr.jsx)(Qd,{type:e.type}),(0,xr.jsxs)(Jd,{children:[(0,xr.jsx)(Zd,{children:e.title}),(0,xr.jsx)(ep,{children:e.description})]})]},e.type))})]})})})})},gp=br.footer`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(102, 126, 234, 0.05) 100%);
  border-top: 1px solid rgba(102, 126, 234, 0.3);
  padding: 60px 0 30px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at top, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`,mp=br.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,vp=br.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`,bp=br.div``,yp=br.div``,xp=br.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1px;
  }
`,wp=br.p`
  color: #888888;
  margin-bottom: 20px;
  line-height: 1.6;
`,kp=br.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`,Sp=br(gu.a)`
  color: #888888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff;
  }
`,Ep=br.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
`,jp=br(gu.a)`
  display: block;
  color: #888888;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
  }
`,Cp=br.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,Pp=br.p`
  color: #888888;
  font-size: 14px;
`,Tp=br.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`,Rp=br(gu.a)`
  color: #888888;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
  }
`,zp=[{title:"Product",links:[{label:"Download",href:"#download"},{label:"Features",href:"#features"},{label:"System Requirements",href:"#"},{label:"Release Notes",href:"#"},{label:"Roadmap",href:"#"},{label:"Beta Program",href:"#"}]},{title:"Community",links:[{label:"GitHub",href:"#"},{label:"Instagram",href:"#"},{label:"Contributors",href:"#"},{label:"Events",href:"#"},{label:"Blog",href:"#"}]},{title:"Developers",links:[{label:"Documentation",href:"#"},{label:"API Reference",href:"#"},{label:"SDK Downloads",href:"#"},{label:"Developer Tools",href:"#"},{label:"Code Examples",href:"#"},{label:"Contributing Guide",href:"#"}]},{title:"Support",links:[{label:"Help Center",href:"/support"},{label:"Installation Guide",href:"/support"},{label:"Troubleshooting",href:"/support"},{label:"Contact Us",href:"/support"},{label:"Report Bug",href:"/support"},{label:"Feature Request",href:"/support"}]}],Dp=[{label:"Twitter",href:"#"},{label:"GitHub",href:"#"},{label:"Discord",href:"#"},{label:"YouTube",href:"#"}],Op=[{label:"Privacy Policy",href:"#"},{label:"Terms of Service",href:"#"},{label:"License",href:"#"}],_p=()=>{const e={hover:{x:5,transition:{duration:.2}}};return(0,xr.jsx)(gp,{children:(0,xr.jsxs)(mp,{children:[(0,xr.jsxs)(vp,{children:[(0,xr.jsxs)(bp,{children:[(0,xr.jsx)(xp,{children:"PurixOS"}),(0,xr.jsx)(wp,{children:"Pure innovation in computing. Built for the future, designed for today. Join the revolution of minimalist computing with enterprise-grade security, developer-friendly tools, and an interface that gets out of your way."}),(0,xr.jsx)(kp,{children:Dp.map(t=>(0,xr.jsx)(Sp,{href:t.href,variants:e,whileHover:"hover",children:t.label},t.label))})]}),zp.map(t=>(0,xr.jsxs)(yp,{children:[(0,xr.jsx)(Ep,{children:t.title}),t.links.map(t=>(0,xr.jsx)(jp,{href:t.href,onClick:e=>{t.href.startsWith("#")&&(e.preventDefault(),(e=>{if(e.startsWith("#")&&"#"!==e){const t=document.getElementById(e.substring(1));t&&t.scrollIntoView({behavior:"smooth"})}})(t.href))},variants:e,whileHover:"hover",children:t.label},t.label))]},t.title))]}),(0,xr.jsxs)(Cp,{children:[(0,xr.jsx)(Pp,{children:"\xa9 2024 PurixOS. All rights reserved."}),(0,xr.jsx)(Tp,{children:Op.map(t=>(0,xr.jsx)(Rp,{href:t.href,variants:e,whileHover:"hover",children:t.label},t.label))})]})]})})},Ap=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=wn(gr.apply(void 0,ze([e],t,!1))),i=Zt(r);return new tr(i,r)})`
  0% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.3);
  }
`,Lp=br.div`
  position: fixed;
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.6) 0%, rgba(118, 75, 162, 0.4) 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  animation: ${Ap} 0.8s ease-out forwards;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
  filter: blur(0.5px);
`,Mp=()=>{const[e,n]=(0,t.useState)([]),[r,i]=(0,t.useState)({x:0,y:0});return(0,t.useEffect)(()=>{const e=e=>{i({x:e.clientX,y:e.clientY})};return document.addEventListener("mousemove",e),()=>document.removeEventListener("mousemove",e)},[]),(0,t.useEffect)(()=>{const e=setInterval(()=>{const e={id:Date.now()+Math.random(),x:r.x,y:r.y};n(t=>[...t,e]),setTimeout(()=>{n(t=>t.filter(t=>t.id!==e.id))},800)},30);return()=>clearInterval(e)},[r]),(0,xr.jsx)(xr.Fragment,{children:e.map(e=>(0,xr.jsx)(Lp,{style:{left:e.x+"px",top:e.y+"px"}},e.id))})};function Np(){const e=(0,t.useRef)(!1);return Cr(()=>(e.current=!0,()=>{e.current=!1}),[]),e}class Ip extends t.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Fp(e){let{children:n,isPresent:r}=e;const i=(0,t.useId)(),a=(0,t.useRef)(null),o=(0,t.useRef)({width:0,height:0,top:0,left:0});return(0,t.useInsertionEffect)(()=>{const{width:e,height:t,top:n,left:s}=o.current;if(r||!a.current||!e||!t)return;a.current.dataset.motionPopId=i;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}},[r]),t.createElement(Ip,{isPresent:r,childRef:a,sizeRef:o},t.cloneElement(n,{ref:a}))}const Vp=e=>{let{children:n,initial:r,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l}=e;const c=Yi(Bp),u=(0,t.useId)(),d=(0,t.useMemo)(()=>({id:u,initial:r,isPresent:i,custom:o,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;a&&a()},register:e=>(c.set(e,!1),()=>c.delete(e))}),s?void 0:[i]);return(0,t.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[i]),t.useEffect(()=>{!i&&!c.size&&a&&a()},[i]),"popLayout"===l&&(n=t.createElement(Fp,{isPresent:i},n)),t.createElement(Er.Provider,{value:d},n)};function Bp(){return new Map}const Up=e=>e.key||"";const Hp=e=>{let{children:n,custom:r,initial:i=!0,onExitComplete:a,exitBeforeEnter:o,presenceAffectsLayout:s=!0,mode:l="sync"}=e;_a(!o,"Replace exitBeforeEnter with mode='wait'");const c=(0,t.useContext)(Br).forceRender||function(){const e=Np(),[n,r]=(0,t.useState)(0),i=(0,t.useCallback)(()=>{e.current&&r(n+1)},[n]);return[(0,t.useCallback)(()=>na.postRender(i),[i]),n]}()[0],u=Np(),d=function(e){const n=[];return t.Children.forEach(e,e=>{(0,t.isValidElement)(e)&&n.push(e)}),n}(n);let p=d;const f=(0,t.useRef)(new Map).current,h=(0,t.useRef)(p),g=(0,t.useRef)(new Map).current,m=(0,t.useRef)(!0);var v;if(Cr(()=>{m.current=!1,function(e,t){e.forEach(e=>{const n=Up(e);t.set(n,e)})}(d,g),h.current=p}),v=()=>{m.current=!0,g.clear(),f.clear()},(0,t.useEffect)(()=>()=>v(),[]),m.current)return t.createElement(t.Fragment,null,p.map(e=>t.createElement(Vp,{key:Up(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:s,mode:l},e)));p=[...p];const b=h.current.map(Up),y=d.map(Up),x=b.length;for(let t=0;t<x;t++){const e=b[t];-1!==y.indexOf(e)||f.has(e)||f.set(e,void 0)}return"wait"===l&&f.size&&(p=[]),f.forEach((e,n)=>{if(-1!==y.indexOf(n))return;const i=g.get(n);if(!i)return;const o=b.indexOf(n);let m=e;if(!m){const e=()=>{f.delete(n);const e=Array.from(g.keys()).filter(e=>!y.includes(e));if(e.forEach(e=>g.delete(e)),h.current=d.filter(t=>{const r=Up(t);return r===n||e.includes(r)}),!f.size){if(!1===u.current)return;c(),a&&a()}};m=t.createElement(Vp,{key:Up(i),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:s,mode:l},i),f.set(n,m)}p.splice(o,0,m)}),p=p.map(e=>{const n=e.key;return f.has(n)?e:t.createElement(Vp,{key:Up(e),isPresent:!0,presenceAffectsLayout:s,mode:l},e)}),t.createElement(t.Fragment,null,f.size?p:p.map(e=>(0,t.cloneElement)(e)))},Wp=br.section`
  min-height: 100vh;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 30, 0.95) 100%);
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.01) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(118, 75, 162, 0.02) 0%, transparent 50%);
    opacity: 0.8;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 98px,
        rgba(255, 255, 255, 0.005) 100px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 98px,
        rgba(255, 255, 255, 0.005) 100px
      );
    pointer-events: none;
  }
`,$p=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,Gp=br.div`
  text-align: center;
  margin-bottom: 80px;
`,Yp=br(gu.h1)`
  font-size: 4rem;
  font-weight: 100;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  letter-spacing: -0.03em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.6), transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Kp=br(gu.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.4));
    border-radius: 1px;
  }
`,qp=br.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Xp=br(gu.button)`
  background: ${e=>e.active?"#ffffff":"transparent"};
  color: ${e=>e.active?"#000000":"#ffffff"};
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    ${e=>!e.active&&"background: rgba(255, 255, 255, 0.05);"}
    
    &::before {
      left: 100%;
    }
  }
`,Qp=br(gu.button)`
  background: ${e=>e.active?"rgba(102, 126, 234, 0.2)":"transparent"};
  color: ${e=>e.active?"#667eea":"rgba(255, 255, 255, 0.8)"};
  border: 1px solid ${e=>e.active?"rgba(102, 126, 234, 0.5)":"rgba(255, 255, 255, 0.3)"};
  padding: 15px 30px;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  position: relative;
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.6);
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
`,Jp=br(gu.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,Zp=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.2) 25%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
    
    &::before {
      opacity: 1;
      animation: downloadCardGlow 3s linear infinite;
    }
  }
  
  @keyframes downloadCardGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`,ef=br.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 400;
  margin-bottom: 20px;
  letter-spacing: 0.02em;
`,tf=br.h3`
  font-size: 2rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: -0.02em;
`,nf=br.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 30px;
`,rf=br.div`
  margin-bottom: 30px;
`,af=br.h4`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 400;
`,of=br.ul`
  list-style: none;
  padding: 0;
`,sf=br.li`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.4);
  }
`,lf=br(gu.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  text-decoration: none;
  padding: 18px 35px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  margin-right: 15px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 10;
  user-select: none;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 2px solid rgba(102, 126, 234, 0.5);
    outline-offset: 2px;
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`,cf=br.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
`,uf=br.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  
  span {
    color: #667eea;
    font-weight: 500;
  }
`,df=br.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
`,pf=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
`,ff=br.div`
  text-align: center;
  padding: 10px;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(102, 126, 234, 0.1);
`,hf=br.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 2px;
`,gf=br.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`,mf=br(gu.div)`
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: #ffffff;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    padding: 18px 35px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,vf=br.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  margin-top: 40px;
`,bf=br.h4`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 400;
`,yf=br.ul`
  list-style: none;
  padding: 0;
`,xf=br.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  margin-bottom: 80px;
  backdrop-filter: blur(10px);
  overflow: hidden;
`,wf=br.h3`
  font-size: 2rem;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
`,kf=br.table`
  width: 100%;
  border-collapse: collapse;
`,Sf=br.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  ${e=>e.header&&"\n    background: rgba(102, 126, 234, 0.1);\n    font-weight: 500;\n  "}
`,Ef=br.td`
  padding: 15px 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  text-align: center;
  
  &:first-child {
    text-align: left;
    font-weight: 500;
    color: #ffffff;
  }
`,jf=br.li`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
  padding-left: 25px;
  position: relative;
  line-height: 1.5;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
  }
`,Cf=br.div`
  margin-top: 60px;
  text-align: center;
`,Pf=br.h3`
  font-size: 2rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
`,Tf=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`,Rf=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px 20px;
  text-align: center;
`,zf=br.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #ffffff;
`,Df=br.h4`
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 400;
`,Of=br.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`,_f=br.div`
  margin: 80px 0;
  padding: 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`,Af=br(gu.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`,Lf=br(gu.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,Mf=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`,Nf=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.2) 50%,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
    
    &::before {
      opacity: 1;
      animation: workspaceFeatureGlow 3s linear infinite;
    }
  }
  
  @keyframes workspaceFeatureGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`,If=br.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
`,Ff=br.h3`
  font-size: 1.3rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: -0.01em;
`,Vf=br.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`,Bf=br.div`
  margin: 80px 0;
  padding: 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Uf=br(gu.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`,Hf=br(gu.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,Wf=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`,$f=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      ${e=>e.gradient||"rgba(255, 255, 255, 0.2)"} 50%,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
    
    &::before {
      opacity: 1;
      animation: workspaceCardGlow 3s linear infinite;
    }
  }
  
  @keyframes workspaceCardGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`,Gf=br.div`
  font-size: 2rem;
  margin-bottom: 20px;
`,Yf=br.h3`
  font-size: 1.3rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
`,Kf=br.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin-bottom: 20px;
`,qf=br.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
`,Xf=br.li`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 6px;
  padding-left: 16px;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
  }
`,Qf=br.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
`,Jf=br(gu.a)`
  display: inline-block;
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.5);
    color: #ffffff;
  }
`,Zf=br.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,eh=br(gu.a)`
  display: inline-flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 12px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.03);
  }
`,th=br(gu.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`,nh=br(gu.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  padding: 15px 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    box-shadow: 0 12px 48px rgba(102, 126, 234, 0.6);
  }
`,rh=br(gu.div)`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 100;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 100px;
  }
`,ih=br(gu.div)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,ah=()=>{const[e,n]=(0,t.useState)("pro"),[r,i]=(0,t.useState)(0),[a,o]=(0,t.useState)(!1),[s,l]=(0,t.useState)(null),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(null),[f,h]=(0,t.useState)(0),[g,m]=(0,t.useState)(!1);console.log("Current activeEdition:",e);const v={pro:{title:"PurixOS Professional",badge:"Windows-Based",description:"A performance-optimized Windows experience designed for power users. Features enhanced privacy controls, reduced telemetry, and optimized performance without sacrificing compatibility.",fileSize:"4.2 GB",checksum:"SHA256: a1b2c3d4e5f6...",downloadCount:"15,847",lastUpdated:"2025-01-10",requirements:["CPU: 2 GHz Dual Core Processor or more","RAM: 4 GB of system memory","Storage: 15-40 GB of free disk space","System: 64-bit system capability"],downloadLink:"https://drive.google.com/file/d/1CbhUV-R7kg7t-74S4iEFxccS9vcOKRbP/view?usp=sharing",changelogLink:"/changelog/pro",changelog:["Improved User Interface with modern design","Updated Windows kernel with enhanced features","Improved Snap Feature for efficient multitasking","Telemetry reduced by 87% for enhanced privacy","Optimized performance for responsiveness","Wi-Fi 7 Support and Bluetooth LE Audio","Enhanced security with hardware-based isolation","Support for Auto HDR and DirectStorage","Optimized for older hardware"]},core:{title:"PurixOS Core",badge:"Linux-Based",description:"Built on the robust foundation of the Linux kernel, PurixOS Core delivers a lightweight, efficient, and reliable operating system perfect for developers and Linux enthusiasts.",fileSize:"2.8 GB",checksum:"SHA256: f6e5d4c3b2a1...",downloadCount:"8,352",lastUpdated:"2025-01-08",requirements:["CPU: 2 GHz Dual Core Processor or more","RAM: 2 GB of system memory","Storage: 20-30 GB of free disk space","System: 32-bit or 64-bit system capability"],downloadLink:"https://drive.google.com/file/d/10Z-4XpNkeoKTmvKDbXjVBn3n_R9gYZqV/view?usp=drive_link",changelogLink:"/changelog/core",changelog:["Year 2038 support for armhf architecture","Updated Linux Kernel 6.8 with new features","systemd v255.4 for improved system management","GCC 14, Python 3.12, OpenJDK 21 toolchain upgrades",".NET 8 support with full lifecycle coverage","Enhanced security with unprivileged user namespace restrictions","TLS 1.0, 1.1 and DTLS 1.0 forcefully disabled","Improved AppArmor integration","Enhanced APT repository security"]}}[e],b=e=>{o(!0),i(0),m(!0);const t=setInterval(()=>{h(e=>e+Math.floor(3*Math.random())+1)},500),n=setInterval(()=>{i(r=>r>=100?(clearInterval(n),clearInterval(t),o(!1),m(!1),window.open(e,"_blank"),0):r+Math.floor(8*Math.random())+2)},200)},y=t=>{t!==e&&(m(!0),setTimeout(()=>{n(t),m(!1)},300))};return(0,xr.jsxs)(Wp,{children:[(0,xr.jsx)(rh,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:(0,xr.jsx)(ih,{children:(0,xr.jsx)(Ce,{to:"/",children:"\u2190 Back to Home"})})}),(0,xr.jsxs)($p,{children:[(0,xr.jsxs)(Gp,{children:[(0,xr.jsx)(Yp,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"Download PurixOS"}),(0,xr.jsx)(Kp,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Choose your edition and transform your computing experience with our optimized operating systems."})]}),(0,xr.jsxs)(qp,{children:[(0,xr.jsx)(Xp,{active:"pro"===e,onClick:()=>{console.log("Switching to pro edition"),y("pro")},whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},animate:g?{opacity:.5}:{opacity:1},transition:{duration:.3},children:"\ud83d\ude80 PurixOS Professional"}),(0,xr.jsx)(Xp,{active:"core"===e,onClick:()=>{console.log("Switching to core edition"),y("core")},whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},animate:g?{opacity:.5}:{opacity:1},transition:{duration:.3},children:"\u26a1 PurixOS Core"}),(0,xr.jsx)(Qp,{onClick:()=>{u(!c)},whileHover:{scale:1.05,rotate:2},whileTap:{scale:.95},active:c,children:"\ud83d\udcca Compare Editions"})]}),(0,xr.jsx)(Hp,{mode:"wait",children:(0,xr.jsxs)(Jp,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:[(0,xr.jsxs)(Zp,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6},onMouseEnter:()=>l("main"),onMouseLeave:()=>l(null),whileHover:{scale:1.02,y:-5,transition:{duration:.3}},children:[(0,xr.jsx)(ef,{children:v.badge}),(0,xr.jsx)(tf,{children:v.title}),(0,xr.jsx)(nf,{children:v.description}),(0,xr.jsxs)(cf,{children:[(0,xr.jsxs)(uf,{children:["Size: ",(0,xr.jsx)("span",{children:v.fileSize})]}),(0,xr.jsx)(df,{children:"Verified"})]}),(0,xr.jsxs)(pf,{children:[(0,xr.jsxs)(ff,{as:gu.div,whileHover:{scale:1.1,y:-2},animate:{scale:f>0?[1,1.05,1]:1,transition:{duration:.3}},children:[(0,xr.jsx)(hf,{children:parseInt(v.downloadCount)+f}),(0,xr.jsx)(gf,{children:"Downloads"})]}),(0,xr.jsxs)(ff,{as:gu.div,whileHover:{scale:1.1,y:-2},children:[(0,xr.jsx)(hf,{children:"99.2%"}),(0,xr.jsx)(gf,{children:"Uptime"})]}),(0,xr.jsxs)(ff,{as:gu.div,whileHover:{scale:1.1,y:-2},children:[(0,xr.jsx)(hf,{children:v.lastUpdated}),(0,xr.jsx)(gf,{children:"Last Updated"})]})]}),(0,xr.jsxs)(rf,{children:[(0,xr.jsx)(af,{children:"System Requirements"}),(0,xr.jsx)(of,{children:v.requirements.map((e,t)=>(0,xr.jsx)(sf,{children:e},t))})]}),(0,xr.jsxs)("div",{style:{position:"relative",zIndex:10},children:[(0,xr.jsx)(lf,{as:"button",onClick:()=>b(v.downloadLink),whileHover:{scale:1.05,y:-3},whileTap:{scale:.95},disabled:a,animate:{background:a?`linear-gradient(135deg, #667eea ${r}%, rgba(118, 75, 162, 0.3) ${r}%)`:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},transition:{duration:.3},children:(0,xr.jsx)("span",{children:a?(0,xr.jsxs)(gu.div,{initial:{opacity:0},animate:{opacity:1},style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,xr.jsx)(gu.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},style:{width:"16px",height:"16px",border:"2px solid rgba(255,255,255,0.3)",borderTop:"2px solid white",borderRadius:"50%"}}),"Downloading... ",r,"%"]}):(0,xr.jsx)(gu.span,{whileHover:{scale:1.05},style:{display:"flex",alignItems:"center",gap:"8px"},children:"\u2b07\ufe0f Download Now"})})}),(0,xr.jsx)(mf,{whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,xr.jsx)(Ce,{to:v.changelogLink,children:"View Changelog"})})]})]}),(0,xr.jsx)(Zp,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.1},onMouseEnter:()=>l("changelog"),onMouseLeave:()=>l(null),whileHover:{scale:1.02,y:-5,transition:{duration:.3}},children:(0,xr.jsxs)(vf,{children:[(0,xr.jsx)(bf,{children:"Latest Updates"}),(0,xr.jsx)(yf,{children:v.changelog.slice(0,6).map((e,t)=>(0,xr.jsxs)(jf,{as:gu.li,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},whileHover:{x:10,color:"rgba(255, 255, 255, 0.9)",transition:{duration:.2}},onClick:()=>p(d===t?null:t),style:{cursor:"pointer",background:d===t?"rgba(102, 126, 234, 0.1)":"transparent",padding:d===t?"8px 12px":"0",borderRadius:d===t?"8px":"0",border:d===t?"1px solid rgba(102, 126, 234, 0.3)":"none"},children:[e,d===t&&(0,xr.jsx)(gu.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},style:{marginTop:"8px",fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.6)",fontStyle:"italic"},children:"\u2728 This feature enhances your experience significantly"})]},t))})]})})]},e)}),c&&(0,xr.jsxs)(xf,{as:gu.div,initial:{opacity:0,y:50,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-50,scale:.9},transition:{duration:.5},children:[(0,xr.jsx)(wf,{children:"Edition Comparison"}),(0,xr.jsxs)(kf,{children:[(0,xr.jsxs)(Sf,{header:!0,children:[(0,xr.jsx)(Ef,{children:"Feature"}),(0,xr.jsx)(Ef,{children:"PurixOS Professional"}),(0,xr.jsx)(Ef,{children:"PurixOS Core"})]}),(0,xr.jsxs)(Sf,{as:gu.tr,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[(0,xr.jsx)(Ef,{children:"Base System"}),(0,xr.jsx)(Ef,{children:"\ud83e\ude9f Windows-Based"}),(0,xr.jsx)(Ef,{children:"\ud83d\udc27 Linux-Based"})]}),(0,xr.jsxs)(Sf,{as:gu.tr,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[(0,xr.jsx)(Ef,{children:"File Size"}),(0,xr.jsx)(Ef,{children:"\ud83d\udce6 4.2 GB"}),(0,xr.jsx)(Ef,{children:"\ud83d\udce6 2.8 GB"})]}),(0,xr.jsxs)(Sf,{as:gu.tr,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[(0,xr.jsx)(Ef,{children:"RAM Required"}),(0,xr.jsx)(Ef,{children:"\ud83e\udde0 4 GB"}),(0,xr.jsx)(Ef,{children:"\ud83e\udde0 2 GB"})]}),(0,xr.jsxs)(Sf,{as:gu.tr,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[(0,xr.jsx)(Ef,{children:"Target Audience"}),(0,xr.jsx)(Ef,{children:"\ud83d\udcbc Power Users"}),(0,xr.jsx)(Ef,{children:"\ud83d\udc68\u200d\ud83d\udcbb Developers"})]}),(0,xr.jsxs)(Sf,{as:gu.tr,whileHover:{backgroundColor:"rgba(255, 255, 255, 0.02)"},children:[(0,xr.jsx)(Ef,{children:"Gaming Support"}),(0,xr.jsx)(Ef,{children:"\ud83c\udfae Excellent"}),(0,xr.jsx)(Ef,{children:"\ud83c\udfae Good"})]})]})]}),(0,xr.jsxs)(_f,{children:[(0,xr.jsx)(Af,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Built-in Workspace Management"}),(0,xr.jsx)(Lf,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},children:"Like Windows virtual desktops, PurixOS lets you create and switch between multiple workspace environments. Each workspace is tailored for different activities - Professional, Developer, Creative, Gaming, Data Science, and Secure - with specialized applications, settings, and optimizations ready when you need them."}),(0,xr.jsxs)(Mf,{children:[(0,xr.jsxs)(Nf,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[(0,xr.jsx)(If,{children:"\ufffd\ufe0f"}),(0,xr.jsx)(Ff,{children:"Multiple Workspaces"}),(0,xr.jsx)(Vf,{children:"Create separate desktop environments for work, gaming, development, and personal use - just like Windows virtual desktops"})]}),(0,xr.jsxs)(Nf,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:[(0,xr.jsx)(If,{children:"\u2328\ufe0f"}),(0,xr.jsx)(Ff,{children:"Quick Switching"}),(0,xr.jsx)(Vf,{children:"Switch between workspaces instantly with keyboard shortcuts (Win+Tab, Win+Ctrl+D) or taskbar gestures"})]}),(0,xr.jsxs)(Nf,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[(0,xr.jsx)(If,{children:"\ud83c\udfaf"}),(0,xr.jsx)(Ff,{children:"Context Awareness"}),(0,xr.jsx)(Vf,{children:"Each workspace remembers your apps, window positions, and settings - pick up exactly where you left off"})]})]})]}),(0,xr.jsxs)(Cf,{children:[(0,xr.jsx)(Pf,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},children:"Installation Guide"}),(0,xr.jsx)(Tf,{children:[{number:"1",title:"Download ISO",description:"Download the official ISO from the link above for your chosen edition."},{number:"2",title:"Create Bootable USB",description:"Use Rufus for Pro Edition or BalenaEtcher for Core Edition to create a bootable USB."},{number:"3",title:"Boot from USB",description:"Insert USB, restart PC, enter BIOS/UEFI, set USB as first boot option."},{number:"4",title:"Install System",description:"Follow the installation wizard: select language, timezone, partition disk, create user account."},{number:"5",title:"Complete Setup",description:"Remove USB after installation, reboot, log in, install drivers and updates."},{number:"6",title:"Enjoy PurixOS",description:"Customize settings and start enjoying your optimized operating system experience."}].map((e,t)=>(0,xr.jsxs)(Rf,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4+.1*t},whileHover:{scale:1.05,y:-5,transition:{duration:.3}},onMouseEnter:()=>l(`step-${t}`),onMouseLeave:()=>l(null),children:[(0,xr.jsx)(zf,{as:gu.div,animate:s===`step-${t}`?{scale:[1,1.2,1],rotate:[0,360,0]}:{},transition:{duration:.8},children:e.number}),(0,xr.jsx)(Df,{children:e.title}),(0,xr.jsx)(Of,{children:e.description}),s===`step-${t}`&&(0,xr.jsx)(gu.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},style:{marginTop:"10px",padding:"8px",background:"rgba(102, 126, 234, 0.1)",borderRadius:"8px",fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.7)"},children:"\ud83d\udca1 Tip: This step is crucial for a successful installation"})]},t))}),(0,xr.jsxs)(Zf,{children:[(0,xr.jsx)(eh,{as:Ce,to:"/support",whileHover:{scale:1.02},children:"Get Support"}),(0,xr.jsx)(eh,{as:Ce,to:"/support",whileHover:{scale:1.02},children:"Contact Support"})]})]}),(0,xr.jsxs)(Bf,{children:[(0,xr.jsx)(Uf,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},children:"Additional Downloads"}),(0,xr.jsx)(Hf,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:"Specialized ISOs and tools for developers, testers, and advanced users."}),(0,xr.jsxs)(Wf,{children:[(0,xr.jsxs)($f,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},children:[(0,xr.jsx)(Gf,{children:"\ufffd\ufe0f"}),(0,xr.jsx)(Yf,{children:"PurixOS Developer Edition"}),(0,xr.jsx)(Kf,{children:"Pre-configured development environment with essential tools, IDEs, and frameworks."}),(0,xr.jsxs)(qf,{children:[(0,xr.jsx)(Xf,{children:"Visual Studio Code, IntelliJ IDEA"}),(0,xr.jsx)(Xf,{children:"Docker, Kubernetes, Git"}),(0,xr.jsx)(Xf,{children:"Node.js, Python, Java SDK"}),(0,xr.jsx)(Xf,{children:"Database tools (MySQL, PostgreSQL)"})]}),(0,xr.jsxs)(Qf,{children:[(0,xr.jsxs)("div",{children:["File Size: ",(0,xr.jsx)("span",{style:{color:"#667eea",fontWeight:"500"},children:"5.1 GB"})]}),(0,xr.jsxs)("div",{children:["Downloads: ",(0,xr.jsx)("span",{style:{color:"#667eea",fontWeight:"500"},children:"3,247"})]})]}),(0,xr.jsx)(Jf,{as:"button",onClick:()=>b("https://drive.google.com/uc?export=download&id=1CbhUV-R7kg7t-74S4iEFxccS9vcOKRbP"),whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},animate:"dev"===s?{background:"rgba(102, 126, 234, 0.2)",borderColor:"rgba(102, 126, 234, 0.6)"}:{},children:"\ud83d\udcbb Download Dev Edition"})]}),(0,xr.jsxs)($f,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.1},whileHover:{scale:1.03,y:-8,transition:{duration:.3}},onMouseEnter:()=>l("gaming"),onMouseLeave:()=>l(null),children:[(0,xr.jsx)(Gf,{children:"\ud83c\udfae"}),(0,xr.jsx)(Yf,{children:"PurixOS Gaming Edition"}),(0,xr.jsx)(Kf,{children:"Optimized for gaming with performance tweaks, gaming tools, and minimal bloatware."}),(0,xr.jsxs)(qf,{children:[(0,xr.jsx)(Xf,{children:"Steam, Epic Games Store pre-installed"}),(0,xr.jsx)(Xf,{children:"Game Mode optimization"}),(0,xr.jsx)(Xf,{children:"Enhanced GPU drivers"}),(0,xr.jsx)(Xf,{children:"Low-latency audio configuration"})]}),(0,xr.jsxs)(Qf,{children:[(0,xr.jsxs)("div",{children:["File Size: ",(0,xr.jsx)("span",{style:{color:"#667eea",fontWeight:"500"},children:"4.8 GB"})]}),(0,xr.jsxs)("div",{children:["Downloads: ",(0,xr.jsx)("span",{style:{color:"#667eea",fontWeight:"500"},children:"7,891"})]})]}),(0,xr.jsx)(Jf,{as:"button",onClick:()=>b("https://drive.google.com/uc?export=download&id=10Z-4XpNkeoKTmvKDbXjVBn3n_R9gYZqV"),whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},animate:"gaming"===s?{background:"rgba(102, 126, 234, 0.2)",borderColor:"rgba(102, 126, 234, 0.6)"}:{},children:"\ud83c\udfae Download Gaming Edition"})]}),(0,xr.jsxs)($f,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.2},whileHover:{scale:1.03,y:-8,transition:{duration:.3}},onMouseEnter:()=>l("secure"),onMouseLeave:()=>l(null),children:[(0,xr.jsx)(Gf,{children:"\ud83d\udd12"}),(0,xr.jsx)(Yf,{children:"PurixOS Secure Edition"}),(0,xr.jsx)(Kf,{children:"Maximum security configuration with hardened kernel and privacy-focused tools."}),(0,xr.jsxs)(qf,{children:[(0,xr.jsx)(Xf,{children:"Tor Browser pre-configured"}),(0,xr.jsx)(Xf,{children:"Full disk encryption"}),(0,xr.jsx)(Xf,{children:"Firewall hardening"}),(0,xr.jsx)(Xf,{children:"Zero telemetry guarantee"})]}),(0,xr.jsxs)(Qf,{children:[(0,xr.jsxs)("div",{children:["File Size: ",(0,xr.jsx)("span",{style:{color:"#667eea",fontWeight:"500"},children:"3.9 GB"})]}),(0,xr.jsxs)("div",{children:["Downloads: ",(0,xr.jsx)("span",{style:{color:"#667eea",fontWeight:"500"},children:"2,156"})]})]}),(0,xr.jsx)(Jf,{as:"button",onClick:()=>b("https://drive.google.com/uc?export=download&id=1CbhUV-R7kg7t-74S4iEFxccS9vcOKRbP"),whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},animate:"secure"===s?{background:"rgba(102, 126, 234, 0.2)",borderColor:"rgba(102, 126, 234, 0.6)"}:{},children:"\ud83d\udd12 Download Secure Edition"})]})]})]})]}),(0,xr.jsx)(th,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:1,duration:.5,type:"spring"},children:(0,xr.jsxs)(nh,{onClick:()=>b(v.downloadLink),whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},animate:a?{background:"conic-gradient(from 0deg, #667eea, #764ba2, #667eea)",rotate:360}:{},transition:{rotate:{duration:2,repeat:a?1/0:0,ease:"linear"}},children:[a?"\u23f3":"\u26a1"," Quick Download"]})})]})},oh=br.section`
  min-height: 100vh;
  background: #000000;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
`,sh=br.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,lh=br.div`
  text-align: center;
  margin-bottom: 80px;
`,ch=br(gu.h1)`
  font-size: 4rem;
  font-weight: 200;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,uh=br(gu.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,dh=br.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 40px;
  letter-spacing: 0.02em;
`,ph=br.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,fh=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      transparent 100%
    );
  }
`,hh=br.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
`,gh=br.ul`
  list-style: none;
  padding: 0;
`,mh=br.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  padding-left: 30px;
  position: relative;
  line-height: 1.6;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.2rem;
    font-weight: bold;
  }
`,vh=br.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
  line-height: 1.5;
`,bh=br(gu.div)`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 100;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 100px;
  }
`,yh=br(gu.div)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,xh=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  margin-top: 40px;
`,wh=br.h4`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 400;
`,kh=br.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
`,Sh=br(gu.div)`
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  color: #000000;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,Eh=()=>(0,xr.jsxs)(oh,{children:[(0,xr.jsx)(bh,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:(0,xr.jsx)(yh,{children:(0,xr.jsx)(Ce,{to:"/",children:"\u2190 Back to Home"})})}),(0,xr.jsxs)(sh,{children:[(0,xr.jsxs)(lh,{children:[(0,xr.jsx)(ch,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"PurixOS Pro Changelog"}),(0,xr.jsx)(uh,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Discover the latest features, improvements, and security enhancements in PurixOS Professional."}),(0,xr.jsx)(gu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:(0,xr.jsx)(dh,{children:"Version 1.X - June 2024 Security Patch"})})]}),(0,xr.jsxs)(ph,{children:[(0,xr.jsxs)(fh,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[(0,xr.jsx)(hh,{children:"New Features"}),(0,xr.jsx)(gh,{children:[{title:"Improved User Interface",description:"PurixOS Pro features a Windows base with a modern, clean look with rounded corners, a centered Start Menu, and a redesigned taskbar."},{title:"Updated Kernel",description:"PurixOS Pro includes the new updated Windows kernel that brings many new features and improvements."},{title:"Improved Snap Feature",description:"PurixOS Pro allows you to create snap layouts just like Windows without the bloat for efficient multitasking and window organization."},{title:"Privacy Upgrades",description:"Telemetry tasks are reduced by 87%. Cortana and Copilot are disabled. Enhanced system tray, taskbar, and Wi-Fi network access controls."},{title:"Optimized Performance",description:"Implements meaningful enhancements for responsiveness & low latency without sacrificing stability or compatibility."},{title:"Wireless Interfaces Upgrade",description:"Bluetooth\xae LE Audio enhancements for assistive hearing devices support, Wi-Fi 7 Support, and QR code network sharing."},{title:"Enhanced Security",description:"Latest version of Microsoft Defender with enhanced threat protection. Windows Hello support utilizing Windows base."},{title:"Gaming & Media Enhancements",description:"Support for Auto HDR and DirectStorage added for improved gaming and media experiences."},{title:"Hardware Optimization",description:"Optimized for older hardware with reduced storage requirements while maintaining performance."}].map((e,t)=>(0,xr.jsxs)(mh,{children:[(0,xr.jsx)("strong",{children:e.title}),(0,xr.jsx)(vh,{children:e.description})]},t))})]}),(0,xr.jsxs)(fh,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[(0,xr.jsx)(hh,{children:"Security Improvements"}),(0,xr.jsx)(gh,{children:[{title:"Hardware-based Isolation",description:"PurixOS Pro incorporates improved security features, including hardware-based isolation and secure booting capabilities."},{title:"DirectAccess Issues Resolved",description:"Fixed issues with DirectAccess connectivity after fresh install or in-place upgrade to PurixOS Pro in the latest build."},{title:"Enhanced Boot Security",description:"Improved secure boot implementation with better hardware validation and trusted platform module integration."},{title:"Network Security Enhancements",description:"Advanced firewall configurations and network isolation features for better protection against network-based threats."}].map((e,t)=>(0,xr.jsxs)(mh,{children:[(0,xr.jsx)("strong",{children:e.title}),(0,xr.jsx)(vh,{children:e.description})]},t))})]})]}),(0,xr.jsxs)(xh,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[(0,xr.jsx)(wh,{children:"Ready to Experience PurixOS Pro?"}),(0,xr.jsx)(kh,{children:"Download the latest version and experience the perfect balance of performance, security, and user-friendly design that PurixOS Professional offers."}),(0,xr.jsx)(Sh,{whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,xr.jsx)(Ce,{to:"/downloads",children:"Download PurixOS Pro"})})]})]})]}),jh=br.section`
  min-height: 100vh;
  background: #000000;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
`,Ch=br.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,Ph=br.div`
  text-align: center;
  margin-bottom: 80px;
`,Th=br(gu.h1)`
  font-size: 4rem;
  font-weight: 200;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Rh=br(gu.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,zh=br.div`
  display: inline-block;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 40px;
  letter-spacing: 0.02em;
`,Dh=br.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,Oh=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(102, 126, 234, 0.5) 50%, 
      transparent 100%
    );
  }
`,_h=br.h3`
  font-size: 1.8rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
`,Ah=br.ul`
  list-style: none;
  padding: 0;
`,Lh=br.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  padding-left: 30px;
  position: relative;
  line-height: 1.6;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #667eea;
    font-size: 1.2rem;
    font-weight: bold;
  }
`,Mh=br.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
  line-height: 1.5;
`,Nh=br.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
  margin-top: 15px;
`,Ih=br.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Fh=br.li`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #667eea;
  }
`,Vh=br(gu.div)`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 100;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 100px;
  }
`,Bh=br(gu.div)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,Uh=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  margin-top: 40px;
`,Hh=br.h4`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 400;
`,Wh=br.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
`,$h=br(gu.div)`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #ffffff;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,Gh=()=>(0,xr.jsxs)(jh,{children:[(0,xr.jsx)(Vh,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:(0,xr.jsx)(Bh,{children:(0,xr.jsx)(Ce,{to:"/",children:"\u2190 Back to Home"})})}),(0,xr.jsxs)(Ch,{children:[(0,xr.jsxs)(Ph,{children:[(0,xr.jsx)(Th,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"PurixOS Core Changelog"}),(0,xr.jsx)(Rh,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Explore the latest updates, features, and security enhancements in PurixOS Core - built on the robust Linux foundation."}),(0,xr.jsx)(gu.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:(0,xr.jsx)(zh,{children:"Version 1.X - June 2024 Security Patch"})})]}),(0,xr.jsxs)(Dh,{children:[(0,xr.jsxs)(Oh,{initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[(0,xr.jsx)(_h,{children:"New Features"}),(0,xr.jsx)(Ah,{children:[{title:"Year 2038 Support for armhf Architecture",description:"PurixOS solves the Year 2038 problem that existed on armhf. More than a thousand packages have been updated to handle time using a 64-bit value rather than a 32-bit one, making it possible to handle times up to 292 billion years in the future."},{title:"Updated Linux Kernel 6.8",description:"PurixOS Core includes the new 6.8 Linux kernel that brings many new features and performance improvements."},{title:"systemd v255.4",description:"The init system was updated to systemd v255.4 for better system management and service handling."},{title:"Toolchain Upgrades",description:"Major updates to development tools and programming languages.",details:["GCC updated to version 14, binutils to 2.42, and glibc to 2.39","Python now defaults to version 3.12","OpenJDK now defaults to LTS version 21","LLVM now defaults to version 18","Rust toolchain defaults to version 1.75","Golang updated to 1.22",".NET 8 is now default"]},{title:"Enhanced OpenJDK Support",description:"OpenJDK LTS 21 is the default while maintaining support for versions 17, 11, and 8. OpenJDK 17 and 21 are TCK certified for Java standards compliance and interoperability."},{title:".NET 8 Support",description:"Full .NET 8 support on Ubuntu 24.04 LTS and 22.04 LTS for the entire lifecycle of both releases. Extended support to IBM System Z platform."},{title:"Apport Integration",description:"Apport added integration with systemd-coredump to handle crashes. Developers can co-install systemd-coredump and use coredumpctl to analyze crash data."}].map((e,t)=>(0,xr.jsxs)(Lh,{children:[(0,xr.jsx)("strong",{children:e.title}),(0,xr.jsx)(Mh,{children:e.description}),e.details&&(0,xr.jsx)(Nh,{children:(0,xr.jsx)(Ih,{children:e.details.map((e,t)=>(0,xr.jsx)(Fh,{children:e},t))})})]},t))})]}),(0,xr.jsxs)(Oh,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},children:[(0,xr.jsx)(_h,{children:"Security Improvements"}),(0,xr.jsx)(Ah,{children:[{title:"Unprivileged User Namespace Restrictions",description:"Enhanced security through AppArmor package restrictions on unprivileged user namespaces. Includes default profiles for common applications like Google Chrome and Discord."},{title:"Deprecated TLS Protocols Disabled",description:"TLS 1.0, 1.1 and DTLS 1.0 are forcefully disabled for enhanced security. OpenSSL configurations have been consistently applied system-wide."},{title:"Improved Configuration Access",description:"More consistent application of openssl and gnutls system configurations. AppArmor rules now grant access to configuration files by default."},{title:"APT Repository Security",description:"APT requires repositories to be signed with RSA keys no smaller than 2048 bits, Ed25519, or Ed448. Enhanced protection against compromised repositories."}].map((e,t)=>(0,xr.jsxs)(Lh,{children:[(0,xr.jsx)("strong",{children:e.title}),(0,xr.jsx)(Mh,{children:e.description})]},t))})]})]}),(0,xr.jsxs)(Uh,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[(0,xr.jsx)(Hh,{children:"Ready to Experience PurixOS Core?"}),(0,xr.jsx)(Wh,{children:"Download the latest version and discover the power of a Linux-based operating system designed for developers and enthusiasts who value performance and reliability."}),(0,xr.jsx)($h,{whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,xr.jsx)(Ce,{to:"/downloads",children:"Download PurixOS Core"})})]})]})]}),Yh=br.section`
  min-height: 100vh;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 30, 0.95) 100%);
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 70%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(118, 75, 162, 0.04) 0%, transparent 50%);
    animation: drift 25s ease-in-out infinite;
    opacity: 0.7;
  }
  
  @keyframes drift {
    0%, 100% { transform: translateX(-10px) translateY(-5px) rotate(0deg); }
    50% { transform: translateX(10px) translateY(5px) rotate(1deg); }
  }
`,Kh=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,qh=br.div`
  text-align: center;
  margin-bottom: 80px;
`,Xh=br(gu.h1)`
  font-size: 4rem;
  font-weight: 100;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  letter-spacing: -0.03em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.6), transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Qh=br(gu.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.4));
    border-radius: 1px;
  }
`,Jh=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`,Zh=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.2) 25%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
    
    &::before {
      opacity: 1;
      animation: workspaceCardGlow 3s linear infinite;
    }
  }
  
  @keyframes workspaceCardGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`,eg=br.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${e=>e.background||"rgba(255, 255, 255, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 24px;
`,tg=br.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`,ng=br.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
`,rg=br.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
`,ig=br.li`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
  }
`,ag=br.div`
  margin-top: 80px;
  padding: 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`,og=br(gu.h2)`
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`,sg=br(gu.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,lg=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`,cg=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.2) 50%,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
    
    &::before {
      opacity: 1;
      animation: shortcutCardGlow 3s linear infinite;
    }
  }
  
  @keyframes shortcutCardGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`,ug=br.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 15px;
  font-family: 'Courier New', monospace;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-block;
`,dg=br.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`,pg=br(gu.div)`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 100;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 100px;
  }
`,fg=br(gu.div)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,hg=()=>(0,xr.jsxs)(Yh,{children:[(0,xr.jsx)(pg,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:(0,xr.jsx)(fg,{children:(0,xr.jsx)(Ce,{to:"/",children:"\u2190 Back to Home"})})}),(0,xr.jsxs)(Kh,{children:[(0,xr.jsxs)(qh,{children:[(0,xr.jsx)(Xh,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"Virtual Workspaces"}),(0,xr.jsx)(Qh,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Like Windows virtual desktops, create separate environments for different activities. Switch between workspaces instantly with keyboard shortcuts (Win+Tab, Win+Ctrl+D) and maintain your workflow context across sessions."})]}),(0,xr.jsx)(Jh,{children:[{icon:"\ud83d\udcbc",title:"Professional Desktop",description:"A dedicated virtual desktop for business productivity. Switch to this workspace for meetings, documents, and professional applications.",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.5) 50%, transparent 100%)",features:["Microsoft Office and productivity apps","Business communication tools","File sharing and collaboration","Calendar and scheduling integration","Professional video conferencing"]},{icon:"\u26a1",title:"Developer Desktop",description:"Your coding sanctuary. This virtual desktop automatically opens your development tools and remembers your project layouts.",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(240, 147, 251, 0.5) 50%, transparent 100%)",features:["IDE and code editors ready","Terminal and command line tools","Git repositories and version control","Development servers and databases","Testing and debugging environments"]},{icon:"\ud83c\udfa8",title:"Creative Desktop",description:"Switch to your creative space where design applications, color profiles, and creative tools are optimized and ready.",background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(79, 172, 254, 0.5) 50%, transparent 100%)",features:["Adobe Creative Suite and design tools","Color-calibrated display settings","Graphics tablet and stylus support","Asset libraries and project files","Rendering and export queues"]},{icon:"\ud83c\udfae",title:"Gaming Desktop",description:"Your entertainment hub. Game launchers, streaming apps, and performance settings are pre-configured for the best experience.",background:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(250, 112, 154, 0.5) 50%, transparent 100%)",features:["Game launchers (Steam, Epic, etc.)","Performance mode activation","Gaming peripherals configuration","Streaming and recording tools","Discord and social gaming apps"]},{icon:"\ud83d\udcca",title:"Analytics Desktop",description:"Data analysis workspace with Jupyter notebooks, statistical tools, and visualization applications ready for your research.",background:"linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(168, 237, 234, 0.5) 50%, transparent 100%)",features:["Jupyter Lab and notebook environments","Python, R, and data science tools","Database connections and queries","Machine learning frameworks","Data visualization dashboards"]},{icon:"\ud83d\udd12",title:"Secure Desktop",description:"Isolated environment for sensitive work. Enhanced encryption, secure browsing, and privacy tools protect your confidential data.",background:"linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(255, 236, 210, 0.5) 50%, transparent 100%)",features:["Encrypted file storage and communication","Secure browser with VPN","Isolated network connections","Privacy-focused applications","Secure document editing and sharing"]}].map((e,t)=>(0,xr.jsxs)(Zh,{gradient:e.gradient,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1*t},whileHover:{y:-5},children:[(0,xr.jsx)(eg,{background:e.background,children:e.icon}),(0,xr.jsx)(tg,{children:e.title}),(0,xr.jsx)(ng,{children:e.description}),(0,xr.jsx)(rg,{children:e.features.map((e,t)=>(0,xr.jsx)(ig,{children:e},t))})]},t))}),(0,xr.jsxs)(ag,{children:[(0,xr.jsx)(og,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:"Quick Switching"}),(0,xr.jsx)(sg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.9},children:"Master these keyboard shortcuts to seamlessly navigate between your virtual workspaces, just like Windows virtual desktops."}),(0,xr.jsxs)(lg,{children:[(0,xr.jsxs)(cg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1},children:[(0,xr.jsx)(ug,{children:"Win + Tab"}),(0,xr.jsx)(dg,{children:"Open Task View to see all your workspaces and switch between them visually"})]}),(0,xr.jsxs)(cg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.1},children:[(0,xr.jsx)(ug,{children:"Win + Ctrl + D"}),(0,xr.jsx)(dg,{children:"Create a new virtual workspace instantly for your next project or activity"})]}),(0,xr.jsxs)(cg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.2},children:[(0,xr.jsx)(ug,{children:"Win + Ctrl + \u2190/\u2192"}),(0,xr.jsx)(dg,{children:"Switch between workspaces quickly using left and right arrow keys"})]}),(0,xr.jsxs)(cg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.3},children:[(0,xr.jsx)(ug,{children:"Win + Ctrl + F4"}),(0,xr.jsx)(dg,{children:"Close the current workspace when you're done with a project or task"})]})]})]})]})]}),gg=br.section`
  min-height: 100vh;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 30, 0.95) 100%);
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 15% 85%, rgba(102, 126, 234, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 85% 15%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
    animation: securityPulse 22s ease-in-out infinite;
    opacity: 0.7;
  }
  
  @keyframes securityPulse {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
    33% { transform: scale(1.05) rotate(1deg); opacity: 0.5; }
    66% { transform: scale(0.95) rotate(-1deg); opacity: 0.9; }
  }
`,mg=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,vg=br.div`
  text-align: center;
  margin-bottom: 80px;
`,bg=br(gu.h1)`
  font-size: 4rem;
  font-weight: 100;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  letter-spacing: -0.03em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.6), transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,yg=br(gu.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.4));
    border-radius: 1px;
  }
`,xg=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`,wg=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${e=>e.gradient||"linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.3) 50%, transparent 100%)"};
  }
`,kg=br.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${e=>e.background||"rgba(255, 0, 0, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 24px;
`,Sg=br.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`,Eg=br.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
`,jg=br.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 40px;
`,Cg=br.h3`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 300;
`,Pg=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`,Tg=br.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  strong {
    color: rgba(255, 255, 255, 0.9);
  }
`,Rg=br(gu.div)`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 100;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 100px;
  }
`,zg=br(gu.div)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,Dg=()=>(0,xr.jsxs)(gg,{children:[(0,xr.jsx)(Rg,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:(0,xr.jsx)(zg,{children:(0,xr.jsx)(Ce,{to:"/",children:"\u2190 Back to Home"})})}),(0,xr.jsxs)(mg,{children:[(0,xr.jsxs)(vg,{children:[(0,xr.jsx)(bg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"Security Features"}),(0,xr.jsx)(yg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Enterprise-grade security built into every layer of the system. Protecting your data, privacy, and digital identity with cutting-edge technology."})]}),(0,xr.jsx)(xg,{children:[{icon:"\ud83d\udd10",title:"Advanced Encryption",description:"Military-grade AES-256 encryption with quantum-resistant algorithms to protect your data from current and future threats.",background:"linear-gradient(135deg, #ff4b1f 0%, #ff9068 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(255, 75, 31, 0.5) 50%, transparent 100%)"},{icon:"\ud83d\udee1\ufe0f",title:"Zero-Trust Architecture",description:"Every access request is verified, authenticated, and authorized before granting access to system resources.",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.5) 50%, transparent 100%)"},{icon:"\ud83d\udd0d",title:"Real-time Threat Detection",description:"AI-powered monitoring system that identifies and neutralizes threats before they can compromise your system.",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(240, 147, 251, 0.5) 50%, transparent 100%)"},{icon:"\ud83d\udd12",title:"Secure Boot & TPM",description:"Hardware-based security features ensuring system integrity from the moment you power on your device.",background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(79, 172, 254, 0.5) 50%, transparent 100%)"},{icon:"\ud83c\udfe0",title:"Application Sandboxing",description:"Isolated execution environments prevent malicious software from accessing critical system resources.",background:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(67, 233, 123, 0.5) 50%, transparent 100%)"},{icon:"\ud83d\udccb",title:"Privacy Controls",description:"Granular privacy settings with complete transparency about data collection and usage policies.",background:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(250, 112, 154, 0.5) 50%, transparent 100%)"}].map((e,t)=>(0,xr.jsxs)(wg,{gradient:e.gradient,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1*t},whileHover:{y:-5},children:[(0,xr.jsx)(kg,{background:e.background,children:e.icon}),(0,xr.jsx)(Sg,{children:e.title}),(0,xr.jsx)(Eg,{children:e.description})]},t))}),(0,xr.jsxs)(jg,{children:[(0,xr.jsx)(Cg,{children:"Security Specifications"}),(0,xr.jsx)(Pg,{children:[{label:"Encryption Standard",value:"AES-256 + Post-Quantum"},{label:"Authentication",value:"Multi-Factor (MFA)"},{label:"Secure Boot",value:"UEFI + TPM 2.0"},{label:"Network Security",value:"VPN + Firewall"},{label:"Data Protection",value:"End-to-End Encryption"},{label:"Compliance",value:"GDPR, CCPA, SOC 2"},{label:"Vulnerability Scanning",value:"Real-time + Scheduled"},{label:"Incident Response",value:"Automated + Manual"}].map((e,t)=>(0,xr.jsxs)(Tg,{children:[(0,xr.jsxs)("strong",{children:[e.label,":"]})," ",e.value]},t))})]})]})]}),Og=br.section`
  min-height: 100vh;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 30, 0.95) 100%);
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 10% 90%, rgba(102, 126, 234, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 90% 10%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
    animation: pulse 18s ease-in-out infinite;
    opacity: 0.8;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
    50% { transform: scale(1.1) rotate(1deg); opacity: 0.6; }
  }
`,_g=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,Ag=br.div`
  text-align: center;
  margin-bottom: 80px;
`,Lg=br(gu.h1)`
  font-size: 4rem;
  font-weight: 100;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  letter-spacing: -0.03em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.6), transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Mg=br(gu.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.4));
    border-radius: 1px;
  }
`,Ng=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`,Ig=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${e=>e.gradient||"linear-gradient(90deg, transparent 0%, rgba(0, 255, 127, 0.3) 50%, transparent 100%)"};
  }
`,Fg=br.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${e=>e.background||"rgba(0, 255, 127, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 24px;
`,Vg=br.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`,Bg=br.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
`,Ug=br.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Hg=br.li`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
  }
`,Wg=br.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
`,$g=br.h3`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 300;
  text-align: center;
`,Gg=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`,Yg=br.div`
  text-align: center;
`,Kg=br.h4`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  font-weight: 400;
`,qg=br.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`,Xg=br.span`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,Qg=br(gu.div)`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 100;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 100px;
  }
`,Jg=br(gu.div)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,Zg=()=>(0,xr.jsxs)(Og,{children:[(0,xr.jsx)(Qg,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:(0,xr.jsx)(Jg,{children:(0,xr.jsx)(Ce,{to:"/",children:"\u2190 Back to Home"})})}),(0,xr.jsxs)(_g,{children:[(0,xr.jsxs)(Ag,{children:[(0,xr.jsx)(Lg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"Developer Tools"}),(0,xr.jsx)(Mg,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Professional development environment with modern tools and frameworks. Everything you need to build, test, and deploy applications efficiently."})]}),(0,xr.jsx)(Ng,{children:[{icon:"\u26a1",title:"Integrated Development Environment",description:"Full-featured IDE with intelligent code completion, debugging, and project management capabilities.",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(102, 126, 234, 0.5) 50%, transparent 100%)",features:["Multi-language syntax highlighting","IntelliSense code completion","Integrated terminal","Git version control","Extension marketplace"]},{icon:"\ud83d\udc1b",title:"Advanced Debugging Suite",description:"Comprehensive debugging tools with breakpoints, variable inspection, and performance profiling.",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(240, 147, 251, 0.5) 50%, transparent 100%)",features:["Visual debugger with breakpoints","Memory and CPU profiling","Call stack analysis","Variable watch windows","Remote debugging support"]},{icon:"\ud83d\udce6",title:"Package Management",description:"Universal package manager supporting npm, pip, cargo, and other language-specific package systems.",background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(79, 172, 254, 0.5) 50%, transparent 100%)",features:["Universal package installer","Dependency resolution","Version management","Security vulnerability scanning","Private registry support"]},{icon:"\ud83d\udd27",title:"Build & Deployment Tools",description:"Automated build systems with CI/CD integration and containerization support.",background:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(67, 233, 123, 0.5) 50%, transparent 100%)",features:["Multi-platform build system","Docker integration","CI/CD pipeline tools","Automated testing","Cloud deployment"]},{icon:"\ud83e\uddea",title:"Testing Framework",description:"Comprehensive testing suite with unit tests, integration tests, and performance benchmarks.",background:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(250, 112, 154, 0.5) 50%, transparent 100%)",features:["Unit and integration testing","Code coverage reports","Performance benchmarking","Mock and stub generation","Test automation"]},{icon:"\ud83d\udcca",title:"Performance Monitoring",description:"Real-time application monitoring with metrics, logging, and performance optimization tools.",background:"linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",gradient:"linear-gradient(90deg, transparent 0%, rgba(168, 237, 234, 0.5) 50%, transparent 100%)",features:["Real-time performance metrics","Application logging","Resource usage monitoring","Error tracking","Performance optimization suggestions"]}].map((e,t)=>(0,xr.jsxs)(Ig,{gradient:e.gradient,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1*t},whileHover:{y:-5},children:[(0,xr.jsx)(Fg,{background:e.background,children:e.icon}),(0,xr.jsx)(Vg,{children:e.title}),(0,xr.jsx)(Bg,{children:e.description}),(0,xr.jsx)(Ug,{children:e.features.map((e,t)=>(0,xr.jsx)(Hg,{children:e},t))})]},t))}),(0,xr.jsxs)(Wg,{children:[(0,xr.jsx)($g,{children:"Supported Technologies"}),(0,xr.jsx)(Gg,{children:Object.entries({"Programming Languages":["JavaScript","TypeScript","Python","Rust","Go","C++","Java","C#"],"Web Technologies":["React","Vue.js","Node.js","Express","Next.js","Webpack","Vite"],"Mobile Development":["React Native","Flutter","Swift","Kotlin","Xamarin"],"Database Systems":["PostgreSQL","MongoDB","Redis","SQLite","MySQL","Firebase"],"DevOps & Cloud":["Docker","Kubernetes","AWS","Azure","GCP","Terraform","Jenkins"],"Machine Learning":["TensorFlow","PyTorch","Scikit-learn","Jupyter","NumPy","Pandas"]}).map(e=>{let[t,n]=e;return(0,xr.jsxs)(Yg,{children:[(0,xr.jsx)(Kg,{children:t}),(0,xr.jsx)(qg,{children:n.map((e,t)=>(0,xr.jsx)(Xg,{children:e},t))})]},t)})})]})]})]}),em=br.section`
  min-height: 100vh;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 30, 0.95) 100%);
  padding: 100px 0 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 35% 65%, rgba(102, 126, 234, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 65% 35%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
    animation: edgeAnimation 26s ease-in-out infinite;
    opacity: 0.7;
  }
  
  @keyframes edgeAnimation {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
    25% { transform: scale(1.1) rotate(1deg); opacity: 0.5; }
    75% { transform: scale(0.9) rotate(-1deg); opacity: 0.9; }
  }
`,tm=br.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`,nm=br.div`
  text-align: center;
  margin-bottom: 80px;
`,rm=br(gu.h1)`
  font-size: 4rem;
  font-weight: 100;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  letter-spacing: -0.03em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.6), transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,im=br(gu.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.4));
    border-radius: 1px;
  }
`,am=[{id:1,title:"WiFi 7 Support",description:"Next-generation wireless connectivity with Multi-Link Operation (MLO), 320MHz channels, and speeds up to 46 Gbps. Experience ultra-low latency and improved reliability.",icon:"\ud83d\udcf6",details:["Multi-Link Operation (MLO)","320MHz channel bandwidth","Up to 46 Gbps speeds","Ultra-low latency gaming"]},{id:2,title:"Bluetooth 6.0 LE",description:"Latest Bluetooth Low Energy with Channel Sounding for precise positioning, improved audio quality, and enhanced security features.",icon:"\ud83d\udd17",details:["Channel Sounding technology","Precise indoor positioning","LE Audio with LC3 codec","Enhanced security protocols"]},{id:3,title:"USB4 Version 2.0",description:"80 Gbps data transfer speeds, improved DisplayPort tunneling, and enhanced power delivery for next-generation peripherals.",icon:"\u26a1",details:["80 Gbps data transfer","240W power delivery","DisplayPort 2.1 tunneling","PCIe 4.0 compatibility"]},{id:4,title:"DDR5-6400 Memory",description:"High-performance DDR5 memory support with speeds up to 6400 MT/s, improved power efficiency, and enhanced reliability features.",icon:"\ud83e\udde0",details:["Up to 6400 MT/s speeds","50% power reduction","On-die ECC support","Dual 32-bit channels"]},{id:5,title:"PCIe 5.0 Support",description:"Latest PCIe standard with 32 GT/s bandwidth per lane, enabling next-generation GPUs and ultra-fast NVMe storage.",icon:"\ud83d\ude80",details:["32 GT/s per lane bandwidth","128 GB/s x16 slot speed","Backward compatibility","CXL 3.0 ready"]},{id:6,title:"AV1 Hardware Decode",description:"Native AV1 codec support for 8K video streaming with 50% better compression than H.265, reducing bandwidth usage.",icon:"\ud83c\udfa5",details:["8K AV1 decode support","50% better compression","Real-time streaming","Power-efficient processing"]}],om=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`,sm=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      var(--gradient-angle, 45deg),
      transparent,
      rgba(255, 255, 255, 0.2) 25%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
    
    &::before {
      opacity: 1;
      animation: featureCardGlow 3s linear infinite;
    }
  }
  
  @keyframes featureCardGlow {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }
`,lm=br.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${e=>e.background||"rgba(255, 255, 255, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 24px;
`,cm=br.h3`
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
`,um=br.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 24px;
`,dm=br.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 24px;
`,pm=br.li`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: rgba(255, 255, 255, 0.5);
  }
`,fm=br(gu.div)`
  position: fixed;
  top: 120px;
  left: 40px;
  z-index: 100;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 100px;
  }
`,hm=br(gu.div)`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,gm=()=>(0,xr.jsxs)(em,{children:[(0,xr.jsx)(fm,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.5},children:(0,xr.jsx)(hm,{children:(0,xr.jsx)(Ce,{to:"/",children:"\u2190 Back to Home"})})}),(0,xr.jsxs)(tm,{children:[(0,xr.jsxs)(nm,{children:[(0,xr.jsx)(rm,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"Cutting-Edge Innovation"}),(0,xr.jsx)(im,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Experience tomorrow's technology today. Advanced features that push the boundaries of what's possible in computing."})]}),(0,xr.jsx)(om,{children:am.map((e,t)=>(0,xr.jsxs)(sm,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1*t},whileHover:{y:-5},children:[(0,xr.jsx)(lm,{children:e.icon}),(0,xr.jsx)(cm,{children:e.title}),(0,xr.jsx)(um,{children:e.description}),(0,xr.jsx)(dm,{children:e.details.map((e,t)=>(0,xr.jsx)(pm,{children:e},t))})]},e.id))})]})]}),mm=br.div`
  min-height: 100vh;
  background: 
    radial-gradient(ellipse 120% 120% at 50% 120%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 80% 80% at 80% 20%, rgba(118, 75, 162, 0.06) 0%, transparent 50%),
    linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(10, 10, 30, 0.95) 100%);
  color: #fff;
  padding: 100px 2rem 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 75%, rgba(102, 126, 234, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 75% 25%, rgba(118, 75, 162, 0.03) 0%, transparent 50%);
    animation: supportFloat 24s ease-in-out infinite;
    opacity: 0.8;
  }
  
  @keyframes supportFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
    50% { transform: translateY(-8px) rotate(0.5deg); opacity: 0.6; }
  }
`,vm=br.div`
  max-width: 1200px;
  margin: 0 auto;
`,bm=br.div`
  text-align: center;
  margin-bottom: 4rem;
`,ym=br(gu.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 100;
  background: linear-gradient(135deg, #ffffff 0%, rgba(102, 126, 234, 0.9) 50%, rgba(118, 75, 162, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.6), transparent);
    border-radius: 2px;
  }
`,xm=br(gu.p)`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.4));
    border-radius: 1px;
  }
`,wm=br.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
`,km=br(gu.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(102, 126, 234, 0.03) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(102, 126, 234, 0.05), 
      rgba(118, 75, 162, 0.03), 
      rgba(102, 126, 234, 0.05)
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(102, 126, 234, 0.08) 100%);
    border-color: rgba(102, 126, 234, 0.4);
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      left: 100%;
    }
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`,Sm=br.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`,Em=br.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #fff;
`,jm=br.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Cm=br(gu.button)`
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`,Pm=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 4rem;
`,Tm=br.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
`,Rm=br.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`,zm=br.form`
  display: grid;
  gap: 1.5rem;
`,Dm=br.div`
  display: grid;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Om=br.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,_m=br.label`
  font-weight: 500;
  color: #fff;
`,Am=br.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 16px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Lm=br.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 16px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
  }
  
  option {
    background: #1a1a1a;
    color: #fff;
  }
`,Mm=br.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px;
  color: #fff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,Nm=br(gu.button)`
  background: linear-gradient(90deg, #667eea, #764ba2);
  color: #fff;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  justify-self: center;
  
  &:hover {
    transform: scale(1.02);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Im=br.div`
  margin-bottom: 4rem;
`,Fm=br.h2`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 3rem;
`,Vm=br.div`
  display: grid;
  gap: 1.5rem;
`,Bm=br(gu.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
`,Um=br.button`
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  text-align: left;
  padding: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,Hm=br.div`
  padding: ${e=>e.isOpen?"0 1.5rem 1.5rem":"0"};
  max-height: ${e=>e.isOpen?"200px":"0"};
  overflow: hidden;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`,Wm=br(gu.div)`
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  background: ${e=>"success"===e.type?"rgba(34, 197, 94, 0.1)":"rgba(239, 68, 68, 0.1)"};
  border: 1px solid ${e=>"success"===e.type?"rgba(34, 197, 94, 0.3)":"rgba(239, 68, 68, 0.3)"};
  color: ${e=>"success"===e.type?"#22c55e":"#ef4444"};
`,$m=()=>{const[e,n]=(0,t.useState)({name:"",email:"",subject:"",category:"",message:""}),[r,i]=(0,t.useState)(!1),[a,o]=(0,t.useState)(null),[s,l]=(0,t.useState)(null),c=t=>{n({...e,[t.target.name]:t.target.value})},u={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return(0,xr.jsx)(mm,{children:(0,xr.jsx)(vm,{children:(0,xr.jsxs)(gu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:"visible",children:[(0,xr.jsxs)(bm,{children:[(0,xr.jsx)(ym,{variants:u,children:"Support Center"}),(0,xr.jsx)(xm,{variants:u,children:"Get help, ask questions, and find solutions for PurixOS. Our team is here to assist you with any technical issues or questions."})]}),(0,xr.jsxs)(wm,{children:[(0,xr.jsxs)(km,{variants:u,whileHover:{y:-5},children:[(0,xr.jsx)(Sm,{children:"\ud83d\udce7"}),(0,xr.jsx)(Em,{children:"Email Support"}),(0,xr.jsx)(jm,{children:"Get personalized help via email. We typically respond within 24 hours."}),(0,xr.jsx)(Cm,{onClick:()=>document.getElementById("contact-form").scrollIntoView({behavior:"smooth"}),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Contact Us"})]}),(0,xr.jsxs)(km,{variants:u,whileHover:{y:-5},children:[(0,xr.jsx)(Sm,{children:"\ud83d\udcda"}),(0,xr.jsx)(Em,{children:"Documentation"}),(0,xr.jsx)(jm,{children:"Comprehensive guides, tutorials, and technical documentation."}),(0,xr.jsx)(Cm,{onClick:()=>window.open("#","_blank"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Docs"})]})]}),(0,xr.jsxs)(Pm,{id:"contact-form",variants:u,children:[(0,xr.jsx)(Tm,{children:"Contact Support"}),(0,xr.jsx)(Rm,{children:"Fill out the form below and we'll get back to you as soon as possible. All fields are required."}),a&&(0,xr.jsx)(Wm,{type:a.type,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:a.message}),(0,xr.jsxs)(zm,{onSubmit:async t=>{t.preventDefault(),i(!0);try{const t=encodeURIComponent(`[${e.category}] ${e.subject}`),r=`mailto:support@purixos.studio?subject=${t}&body=${encodeURIComponent(`Name: ${e.name}\nEmail: ${e.email}\nCategory: ${e.category}\n\nMessage:\n${e.message}`)}`;window.location.href=r,o({type:"success",message:"Email client opened! Please send the email to complete your support request."}),n({name:"",email:"",subject:"",category:"",message:""})}catch(r){o({type:"error",message:"Failed to open email client. Please email us directly at support@purixos.studio"})}finally{i(!1)}},children:[(0,xr.jsxs)(Dm,{children:[(0,xr.jsxs)(Om,{children:[(0,xr.jsx)(_m,{htmlFor:"name",children:"Full Name"}),(0,xr.jsx)(Am,{type:"text",id:"name",name:"name",value:e.name,onChange:c,placeholder:"Enter your full name",required:!0})]}),(0,xr.jsxs)(Om,{children:[(0,xr.jsx)(_m,{htmlFor:"email",children:"Email Address"}),(0,xr.jsx)(Am,{type:"email",id:"email",name:"email",value:e.email,onChange:c,placeholder:"your@email.com",required:!0})]})]}),(0,xr.jsxs)(Dm,{children:[(0,xr.jsxs)(Om,{children:[(0,xr.jsx)(_m,{htmlFor:"category",children:"Category"}),(0,xr.jsxs)(Lm,{id:"category",name:"category",value:e.category,onChange:c,required:!0,children:[(0,xr.jsx)("option",{value:"",children:"Select a category"}),(0,xr.jsx)("option",{value:"Installation",children:"Installation Help"}),(0,xr.jsx)("option",{value:"Technical",children:"Technical Issue"}),(0,xr.jsx)("option",{value:"Bug Report",children:"Bug Report"}),(0,xr.jsx)("option",{value:"Feature Request",children:"Feature Request"}),(0,xr.jsx)("option",{value:"General",children:"General Question"}),(0,xr.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,xr.jsxs)(Om,{children:[(0,xr.jsx)(_m,{htmlFor:"subject",children:"Subject"}),(0,xr.jsx)(Am,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:c,placeholder:"Brief description of your issue",required:!0})]})]}),(0,xr.jsxs)(Om,{children:[(0,xr.jsx)(_m,{htmlFor:"message",children:"Message"}),(0,xr.jsx)(Mm,{id:"message",name:"message",value:e.message,onChange:c,placeholder:"Please provide detailed information about your issue or question...",required:!0})]}),(0,xr.jsx)(Nm,{type:"submit",disabled:r,whileHover:{scale:1.02},whileTap:{scale:.98},children:r?"Opening Email...":"Send Message"})]})]}),(0,xr.jsxs)(Im,{children:[(0,xr.jsx)(Fm,{children:"Frequently Asked Questions"}),(0,xr.jsx)(Vm,{children:[{question:"How do I install PurixOS?",answer:"Download the ISO file from our downloads page, create a bootable USB drive using tools like Rufus or Etcher, and follow our installation guide for step-by-step instructions."},{question:"What are the system requirements?",answer:"Minimum: 2GHz dual-core processor, 4GB RAM (Pro) / 2GB RAM (Core), 15-40GB storage. Recommended: Modern multi-core processor, 8GB+ RAM, SSD storage."},{question:"Is PurixOS free to use?",answer:"Yes! Both PurixOS Professional and Core editions are completely free to download and use. We believe in open access to quality operating systems."},{question:"Can I dual boot with Windows?",answer:"Yes, PurixOS supports dual boot configurations. Our installation guide includes detailed instructions for setting up dual boot with Windows or other operating systems."},{question:"How do I get support for technical issues?",answer:"You can reach out to us via email at support@purixos.studio, check our documentation, or contact us through GitHub for peer support and troubleshooting."},{question:"What's the difference between Pro and Core editions?",answer:"PurixOS Professional is Windows-based with enhanced privacy controls and reduced telemetry. PurixOS Core is Linux-based, lightweight, and developer-focused."}].map((e,t)=>(0,xr.jsxs)(Bm,{variants:u,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:[(0,xr.jsxs)(Um,{onClick:()=>(e=>{l(s===e?null:e)})(t),children:[e.question,(0,xr.jsx)("span",{children:s===t?"\u2212":"+"})]}),(0,xr.jsx)(Hm,{isOpen:s===t,children:e.answer})]},t))})]})]})})})},Gm=()=>{const{pathname:e,hash:n}=J();return(0,t.useEffect)(()=>{n?setTimeout(()=>{const e=document.querySelector(n);e&&e.scrollIntoView({behavior:"smooth",block:"start"})},100):(window.scrollTo({top:0,left:0,behavior:"instant"}),setTimeout(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},10))},[e,n]),null},Ym=e=>{let{children:t}=e;return(0,xr.jsx)(gu.div,{initial:"initial",animate:"in",exit:"out",variants:{initial:{opacity:0,y:30,scale:.98,filter:"blur(10px)"},in:{opacity:1,y:0,scale:1,filter:"blur(0px)"},out:{opacity:0,y:-30,scale:1.02,filter:"blur(5px)"}},transition:{type:"tween",ease:[.25,.46,.45,.94],duration:.6,filter:{duration:.4}},style:{position:"relative",zIndex:1},children:t})},Km=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=gr.apply(void 0,ze([e],n,!1)),a="sc-global-".concat(Zt(JSON.stringify(i))),o=new yr(i,a),s=function(e){var n=Zn(),r=t.useContext(ur),i=t.useRef(n.styleSheet.allocateGSInstance(a)).current;return n.styleSheet.server&&l(i,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return l(i,e,n.styleSheet,r,n.stylis),function(){return o.removeStyles(i,n.styleSheet)}},[i,e,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,Ft,n,i);else{var a=Re(Re({},t),{theme:Ut(t,r,s.defaultProps)});o.renderStyles(e,a,n,i)}}return t.memo(s)})`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px; /* Account for navbar height */
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 400;
    line-height: 1.4;
    color: #ffffff;
    background: #000000;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }
  
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 10%, rgba(102, 126, 234, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(118, 75, 162, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.002) 0%, transparent 70%);
    pointer-events: none;
    z-index: -1;
    animation: backgroundShift 30s ease-in-out infinite;
  }
  
  @keyframes backgroundShift {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
    
    &:hover {
      background: linear-gradient(135deg, #7c8ef0, #8b5cb8);
    }
  }
  
  ::selection {
    background: rgba(102, 126, 234, 0.3);
    color: #ffffff;
  }
  
  ::-moz-selection {
    background: rgba(102, 126, 234, 0.3);
    color: #ffffff;
  }
`,qm=br.div`
  min-height: 100vh;
  background: #000000;
`,Xm=()=>(0,xr.jsxs)(xr.Fragment,{children:[(0,xr.jsx)(_u,{}),(0,xr.jsx)(ed,{}),(0,xr.jsx)(Od,{}),(0,xr.jsx)(Fd,{}),(0,xr.jsx)(hp,{}),(0,xr.jsx)(_p,{})]});const Qm=function(){return(0,xr.jsxs)(Se,{children:[(0,xr.jsx)(Km,{}),(0,xr.jsxs)(qm,{children:[(0,xr.jsx)(Mp,{}),(0,xr.jsx)(wr,{}),(0,xr.jsx)(Gm,{}),(0,xr.jsxs)(ve,{children:[(0,xr.jsx)(ge,{path:"/",element:(0,xr.jsx)(Ym,{children:(0,xr.jsx)(Xm,{})})}),(0,xr.jsx)(ge,{path:"/downloads",element:(0,xr.jsx)(Ym,{children:(0,xr.jsx)(ah,{})})}),(0,xr.jsx)(ge,{path:"/changelog/pro",element:(0,xr.jsx)(Ym,{children:(0,xr.jsx)(Eh,{})})}),(0,xr.jsx)(ge,{path:"/changelog/core",element:(0,xr.jsx)(Ym,{children:(0,xr.jsx)(Gh,{})})}),(0,xr.jsx)(ge,{path:"/workspaces",element:(0,xr.jsx)(Ym,{children:(0,xr.jsx)(hg,{})})}),(0,xr.jsx)(ge,{path:"/security",element:(0,xr.jsx)(Ym,{children:(0,xr.jsx)(Dg,{})})}),(0,xr.jsx)(ge,{path:"/dev-tools",element:(0,xr.jsx)(Ym,{children:(0,xr.jsx)(Zg,{})})}),(0,xr.jsx)(ge,{path:"/cutting-edge",element:(0,xr.jsx)(Ym,{children:(0,xr.jsx)(gm,{})})}),(0,xr.jsx)(ge,{path:"/support",element:(0,xr.jsx)(Ym,{children:(0,xr.jsx)($m,{})})})]})]})]})};i.createRoot(document.getElementById("root")).render((0,xr.jsx)(t.StrictMode,{children:(0,xr.jsx)(Qm,{})}))})()})();
//# sourceMappingURL=main.a485ca0e.js.map
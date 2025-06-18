function dd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _s={exports:{}},Si={},Is={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),fd=Symbol.for("react.portal"),md=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),bd=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),mo=Symbol.iterator;function kd(e){return e===null||typeof e!="object"?null:(e=mo&&e[mo]||e["@@iterator"],typeof e=="function"?e:null)}var As={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ds=Object.assign,Os={};function yn(e,t,n){this.props=e,this.context=t,this.refs=Os,this.updater=n||As}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fs(){}Fs.prototype=yn.prototype;function pa(e,t,n){this.props=e,this.context=t,this.refs=Os,this.updater=n||As}var fa=pa.prototype=new Fs;fa.constructor=pa;Ds(fa,yn.prototype);fa.isPureReactComponent=!0;var ho=Array.isArray,Gs=Object.prototype.hasOwnProperty,ma={current:null},Us={key:!0,ref:!0,__self:!0,__source:!0};function Ws(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Gs.call(t,r)&&!Us.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:dr,type:e,key:l,ref:o,props:i,_owner:ma.current}}function jd(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function Cd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xo=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cd(""+e.key):t.toString(36)}function Ir(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case dr:case fd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Gi(o,0):r,ho(i)?(n="",e!=null&&(n=e.replace(xo,"$&/")+"/"),Ir(i,t,n,"",function(u){return u})):i!=null&&(ha(i)&&(i=jd(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ho(e))for(var s=0;s<e.length;s++){l=e[s];var c=r+Gi(l,s);o+=Ir(l,t,n,c,i)}else if(c=kd(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=r+Gi(l,s++),o+=Ir(l,t,n,c,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function wr(e,t,n){if(e==null)return e;var r=[],i=0;return Ir(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Nd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Ar={transition:null},Ed={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:ma};function Hs(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:wr,forEach:function(e,t,n){wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wr(e,function(){t++}),t},toArray:function(e){return wr(e,function(t){return t})||[]},only:function(e){if(!ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=yn;M.Fragment=md;M.Profiler=xd;M.PureComponent=pa;M.StrictMode=hd;M.Suspense=wd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;M.act=Hs;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ds({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=ma.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Gs.call(t,c)&&!Us.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:dr,type:e.type,key:i,ref:l,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gd,_context:e},e.Consumer=e};M.createElement=Ws;M.createFactory=function(e){var t=Ws.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:vd,render:e}};M.isValidElement=ha;M.lazy=function(e){return{$$typeof:Sd,_payload:{_status:-1,_result:e},_init:Nd}};M.memo=function(e,t){return{$$typeof:bd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};M.unstable_act=Hs;M.useCallback=function(e,t){return fe.current.useCallback(e,t)};M.useContext=function(e){return fe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};M.useEffect=function(e,t){return fe.current.useEffect(e,t)};M.useId=function(){return fe.current.useId()};M.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return fe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};M.useRef=function(e){return fe.current.useRef(e)};M.useState=function(e){return fe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return fe.current.useTransition()};M.version="18.3.1";Is.exports=M;var S=Is.exports;const zd=pd(S),Pd=dd({__proto__:null,default:zd},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd=S,Ld=Symbol.for("react.element"),Md=Symbol.for("react.fragment"),Td=Object.prototype.hasOwnProperty,Rd=Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$d={key:!0,ref:!0,__self:!0,__source:!0};function Ys(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Td.call(t,r)&&!$d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ld,type:e,key:l,ref:o,props:i,_owner:Rd.current}}Si.Fragment=Md;Si.jsx=Ys;Si.jsxs=Ys;_s.exports=Si;var a=_s.exports,Vs={exports:{}},je={},Qs={exports:{}},Xs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,B){var L=N.length;N.push(B);e:for(;0<L;){var V=L-1>>>1,ee=N[V];if(0<i(ee,B))N[V]=B,N[L]=ee,L=V;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],L=N.pop();if(L!==B){N[0]=L;e:for(var V=0,ee=N.length,yr=ee>>>1;V<yr;){var Ct=2*(V+1)-1,Fi=N[Ct],Nt=Ct+1,vr=N[Nt];if(0>i(Fi,L))Nt<ee&&0>i(vr,Fi)?(N[V]=vr,N[Nt]=L,V=Nt):(N[V]=Fi,N[Ct]=L,V=Ct);else if(Nt<ee&&0>i(vr,L))N[V]=vr,N[Nt]=L,V=Nt;else break e}}return B}function i(N,B){var L=N.sortIndex-B.sortIndex;return L!==0?L:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],u=[],h=1,f=null,x=3,g=!1,v=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=N)r(u),B.sortIndex=B.expirationTime,t(c,B);else break;B=n(u)}}function y(N){if(w=!1,m(N),!v)if(n(c)!==null)v=!0,Di(k);else{var B=n(u);B!==null&&Oi(y,B.startTime-N)}}function k(N,B){v=!1,w&&(w=!1,p(P),P=-1),g=!0;var L=x;try{for(m(B),f=n(c);f!==null&&(!(f.expirationTime>B)||N&&!Me());){var V=f.callback;if(typeof V=="function"){f.callback=null,x=f.priorityLevel;var ee=V(f.expirationTime<=B);B=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(c)&&r(c),m(B)}else r(c);f=n(c)}if(f!==null)var yr=!0;else{var Ct=n(u);Ct!==null&&Oi(y,Ct.startTime-B),yr=!1}return yr}finally{f=null,x=L,g=!1}}var E=!1,z=null,P=-1,Y=5,R=-1;function Me(){return!(e.unstable_now()-R<Y)}function Sn(){if(z!==null){var N=e.unstable_now();R=N;var B=!0;try{B=z(!0,N)}finally{B?kn():(E=!1,z=null)}}else E=!1}var kn;if(typeof d=="function")kn=function(){d(Sn)};else if(typeof MessageChannel<"u"){var fo=new MessageChannel,ud=fo.port2;fo.port1.onmessage=Sn,kn=function(){ud.postMessage(null)}}else kn=function(){j(Sn,0)};function Di(N){z=N,E||(E=!0,kn())}function Oi(N,B){P=j(function(){N(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Di(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var L=x;x=B;try{return N()}finally{x=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=x;x=N;try{return B()}finally{x=L}},e.unstable_scheduleCallback=function(N,B,L){var V=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,N={id:h++,callback:B,priorityLevel:N,startTime:L,expirationTime:ee,sortIndex:-1},L>V?(N.sortIndex=L,t(u,N),n(c)===null&&N===n(u)&&(w?(p(P),P=-1):w=!0,Oi(y,L-V))):(N.sortIndex=ee,t(c,N),v||g||(v=!0,Di(k))),N},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(N){var B=x;return function(){var L=x;x=B;try{return N.apply(this,arguments)}finally{x=L}}}})(Xs);Qs.exports=Xs;var _d=Qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=S,ke=_d;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ks=new Set,Yn={};function Ot(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)Ks.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,Ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,go={},yo={};function Dd(e){return xl.call(yo,e)?!0:xl.call(go,e)?!1:Ad.test(e)?yo[e]=!0:(go[e]=!0,!1)}function Od(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fd(e,t,n,r){if(t===null||typeof t>"u"||Od(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var xa=/[\-:]([a-z])/g;function ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xa,ga);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xa,ga);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xa,ga);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function ya(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fd(t,n,i,r)&&(n=null),r||i===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,br=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),va=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),Js=Symbol.for("react.provider"),Zs=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),yl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),ba=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),qs=Symbol.for("react.offscreen"),vo=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=vo&&e[vo]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Ui;function Tn(e){if(Ui===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ui=t&&t[1]||""}return`
`+Ui+e}var Wi=!1;function Hi(e,t){if(!e||Wi)return"";Wi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{Wi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function Gd(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Wt:return"Portal";case gl:return"Profiler";case va:return"StrictMode";case yl:return"Suspense";case vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zs:return(e.displayName||"Context")+".Consumer";case Js:return(e._context.displayName||"Context")+".Provider";case wa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ba:return t=e.displayName||null,t!==null?t:wl(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return wl(e(t))}catch{}}return null}function Ud(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wl(t);case 8:return t===va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wd(e){var t=ec(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=Wd(e))}function tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ec(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nc(e,t){t=t.checked,t!=null&&ya(e,"checked",t,!1)}function Sl(e,t){nc(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&kl(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function kl(e,t,n){(t!=="number"||Xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function So(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Rn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function rc(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ic(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ic(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kr,lc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hd=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ac(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Yd=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nl(e,t){if(t){if(Yd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function Sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,rn=null,ln=null;function jo(e){if(e=mr(e)){if(typeof Pl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Ei(t),Pl(e.stateNode,e.type,t))}}function sc(e){rn?ln?ln.push(e):ln=[e]:rn=e}function cc(){if(rn){var e=rn,t=ln;if(ln=rn=null,jo(e),t)for(e=0;e<t.length;e++)jo(t[e])}}function uc(e,t){return e(t)}function dc(){}var Yi=!1;function pc(e,t,n){if(Yi)return e(t,n);Yi=!0;try{return uc(e,t,n)}finally{Yi=!1,(rn!==null||ln!==null)&&(dc(),cc())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ei(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Bl=!1;if(Ke)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Bl=!1}function Vd(e,t,n,r,i,l,o,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var An=!1,Kr=null,Jr=!1,Ll=null,Qd={onError:function(e){An=!0,Kr=e}};function Xd(e,t,n,r,i,l,o,s,c){An=!1,Kr=null,Vd.apply(Qd,arguments)}function Kd(e,t,n,r,i,l,o,s,c){if(Xd.apply(this,arguments),An){if(An){var u=Kr;An=!1,Kr=null}else throw Error(b(198));Jr||(Jr=!0,Ll=u)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Co(e){if(Ft(e)!==e)throw Error(b(188))}function Jd(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Co(i),e;if(l===r)return Co(i),t;l=l.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function mc(e){return e=Jd(e),e!==null?hc(e):null}function hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hc(e);if(t!==null)return t;e=e.sibling}return null}var xc=ke.unstable_scheduleCallback,No=ke.unstable_cancelCallback,Zd=ke.unstable_shouldYield,qd=ke.unstable_requestPaint,X=ke.unstable_now,ep=ke.unstable_getCurrentPriorityLevel,ka=ke.unstable_ImmediatePriority,gc=ke.unstable_UserBlockingPriority,Zr=ke.unstable_NormalPriority,tp=ke.unstable_LowPriority,yc=ke.unstable_IdlePriority,ki=null,Ue=null;function np(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:lp,rp=Math.log,ip=Math.LN2;function lp(e){return e>>>=0,e===0?32:31-(rp(e)/ip|0)|0}var jr=64,Cr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=$n(s):(l&=o,l!==0&&(r=$n(l)))}else o=n&~i,o!==0?r=$n(o):l!==0&&(r=$n(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),i=1<<n,r|=e[n],t&=~i;return r}function ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function op(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ie(l),s=1<<o,c=i[o];c===-1?(!(s&n)||s&r)&&(i[o]=ap(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function Ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vc(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function Vi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function sp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ie(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var _=0;function wc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bc,Ca,Sc,kc,jc,Tl=!1,Nr=[],ut=null,dt=null,pt=null,Xn=new Map,Kn=new Map,lt=[],cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eo(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Nn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=mr(t),t!==null&&Ca(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function up(e,t,n,r,i){switch(t){case"focusin":return ut=Nn(ut,e,t,n,r,i),!0;case"dragenter":return dt=Nn(dt,e,t,n,r,i),!0;case"mouseover":return pt=Nn(pt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Xn.set(l,Nn(Xn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Kn.set(l,Nn(Kn.get(l)||null,e,t,n,r,i)),!0}return!1}function Cc(e){var t=Pt(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=fc(n),t!==null){e.blockedOn=t,jc(e.priority,function(){Sc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zl=r,n.target.dispatchEvent(r),zl=null}else return t=mr(n),t!==null&&Ca(t),e.blockedOn=n,!1;t.shift()}return!0}function zo(e,t,n){Dr(e)&&n.delete(t)}function dp(){Tl=!1,ut!==null&&Dr(ut)&&(ut=null),dt!==null&&Dr(dt)&&(dt=null),pt!==null&&Dr(pt)&&(pt=null),Xn.forEach(zo),Kn.forEach(zo)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,dp)))}function Jn(e){function t(i){return En(i,e)}if(0<Nr.length){En(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&En(ut,e),dt!==null&&En(dt,e),pt!==null&&En(pt,e),Xn.forEach(t),Kn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)Cc(n),n.blockedOn===null&&lt.shift()}var an=et.ReactCurrentBatchConfig,ei=!0;function pp(e,t,n,r){var i=_,l=an.transition;an.transition=null;try{_=1,Na(e,t,n,r)}finally{_=i,an.transition=l}}function fp(e,t,n,r){var i=_,l=an.transition;an.transition=null;try{_=4,Na(e,t,n,r)}finally{_=i,an.transition=l}}function Na(e,t,n,r){if(ei){var i=Rl(e,t,n,r);if(i===null)rl(e,t,r,ti,n),Eo(e,r);else if(up(i,e,t,n,r))r.stopPropagation();else if(Eo(e,r),t&4&&-1<cp.indexOf(e)){for(;i!==null;){var l=mr(i);if(l!==null&&bc(l),l=Rl(e,t,n,r),l===null&&rl(e,t,r,ti,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else rl(e,t,r,null,n)}}var ti=null;function Rl(e,t,n,r){if(ti=null,e=Sa(r),e=Pt(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ti=e,null}function Nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ep()){case ka:return 1;case gc:return 4;case Zr:case tp:return 16;case yc:return 536870912;default:return 16}default:return 16}}var ot=null,Ea=null,Or=null;function Ec(){if(Or)return Or;var e,t=Ea,n=t.length,r,i="value"in ot?ot.value:ot.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Or=i.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function Po(){return!1}function Ce(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Er:Po,this.isPropagationStopped=Po,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=Ce(vn),fr=U({},vn,{view:0,detail:0}),mp=Ce(fr),Qi,Xi,zn,ji=U({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Qi=e.screenX-zn.screenX,Xi=e.screenY-zn.screenY):Xi=Qi=0,zn=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Xi}}),Bo=Ce(ji),hp=U({},ji,{dataTransfer:0}),xp=Ce(hp),gp=U({},fr,{relatedTarget:0}),Ki=Ce(gp),yp=U({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=Ce(yp),wp=U({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bp=Ce(wp),Sp=U({},vn,{data:0}),Lo=Ce(Sp),kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Np(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cp[e])?!!t[e]:!1}function Pa(){return Np}var Ep=U({},fr,{key:function(e){if(e.key){var t=kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pa,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=Ce(Ep),Pp=U({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mo=Ce(Pp),Bp=U({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pa}),Lp=Ce(Bp),Mp=U({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tp=Ce(Mp),Rp=U({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=Ce(Rp),_p=[9,13,27,32],Ba=Ke&&"CompositionEvent"in window,Dn=null;Ke&&"documentMode"in document&&(Dn=document.documentMode);var Ip=Ke&&"TextEvent"in window&&!Dn,zc=Ke&&(!Ba||Dn&&8<Dn&&11>=Dn),To=" ",Ro=!1;function Pc(e,t){switch(e){case"keyup":return _p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function Ap(e,t){switch(e){case"compositionend":return Bc(t);case"keypress":return t.which!==32?null:(Ro=!0,To);case"textInput":return e=t.data,e===To&&Ro?null:e;default:return null}}function Dp(e,t){if(Yt)return e==="compositionend"||!Ba&&Pc(e,t)?(e=Ec(),Or=Ea=ot=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var Op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Op[e.type]:t==="textarea"}function Lc(e,t,n,r){sc(r),t=ni(t,"onChange"),0<t.length&&(n=new za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Zn=null;function Fp(e){Gc(e,0)}function Ci(e){var t=Xt(e);if(tc(t))return e}function Gp(e,t){if(e==="change")return t}var Mc=!1;if(Ke){var Ji;if(Ke){var Zi="oninput"in document;if(!Zi){var _o=document.createElement("div");_o.setAttribute("oninput","return;"),Zi=typeof _o.oninput=="function"}Ji=Zi}else Ji=!1;Mc=Ji&&(!document.documentMode||9<document.documentMode)}function Io(){On&&(On.detachEvent("onpropertychange",Tc),Zn=On=null)}function Tc(e){if(e.propertyName==="value"&&Ci(Zn)){var t=[];Lc(t,Zn,e,Sa(e)),pc(Fp,t)}}function Up(e,t,n){e==="focusin"?(Io(),On=t,Zn=n,On.attachEvent("onpropertychange",Tc)):e==="focusout"&&Io()}function Wp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(Zn)}function Hp(e,t){if(e==="click")return Ci(t)}function Yp(e,t){if(e==="input"||e==="change")return Ci(t)}function Vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Vp;function qn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xl.call(t,i)||!De(e[i],t[i]))return!1}return!0}function Ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Do(e,t){var n=Ao(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ao(n)}}function Rc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $c(){for(var e=window,t=Xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qp(e){var t=$c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rc(n.ownerDocument.documentElement,n)){if(r!==null&&La(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Do(n,l);var o=Do(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xp=Ke&&"documentMode"in document&&11>=document.documentMode,Vt=null,$l=null,Fn=null,_l=!1;function Oo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Vt==null||Vt!==Xr(r)||(r=Vt,"selectionStart"in r&&La(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fn&&qn(Fn,r)||(Fn=r,r=ni($l,"onSelect"),0<r.length&&(t=new za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},qi={},_c={};Ke&&(_c=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function Ni(e){if(qi[e])return qi[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _c)return qi[e]=t[n];return e}var Ic=Ni("animationend"),Ac=Ni("animationiteration"),Dc=Ni("animationstart"),Oc=Ni("transitionend"),Fc=new Map,Fo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){Fc.set(e,t),Ot(t,[e])}for(var el=0;el<Fo.length;el++){var tl=Fo[el],Kp=tl.toLowerCase(),Jp=tl[0].toUpperCase()+tl.slice(1);bt(Kp,"on"+Jp)}bt(Ic,"onAnimationEnd");bt(Ac,"onAnimationIteration");bt(Dc,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(Oc,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function Go(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kd(r,t,void 0,e),e.currentTarget=null}function Gc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==l&&i.isPropagationStopped())break e;Go(i,s,u),l=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,u=s.currentTarget,s=s.listener,c!==l&&i.isPropagationStopped())break e;Go(i,s,u),l=c}}}if(Jr)throw e=Ll,Jr=!1,Ll=null,e}function A(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(Uc(t,e,2,!1),n.add(r))}function nl(e,t,n){var r=0;t&&(r|=4),Uc(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Pr]){e[Pr]=!0,Ks.forEach(function(n){n!=="selectionchange"&&(Zp.has(n)||nl(n,!1,e),nl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,nl("selectionchange",!1,t))}}function Uc(e,t,n,r){switch(Nc(t)){case 1:var i=pp;break;case 4:i=fp;break;default:i=Na}n=i.bind(null,t,n,e),i=void 0,!Bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Pt(s),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}s=s.parentNode}}r=r.return}pc(function(){var u=l,h=Sa(n),f=[];e:{var x=Fc.get(e);if(x!==void 0){var g=za,v=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":g=zp;break;case"focusin":v="focus",g=Ki;break;case"focusout":v="blur",g=Ki;break;case"beforeblur":case"afterblur":g=Ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Lp;break;case Ic:case Ac:case Dc:g=vp;break;case Oc:g=Tp;break;case"scroll":g=mp;break;case"wheel":g=$p;break;case"copy":case"cut":case"paste":g=bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Mo}var w=(t&4)!==0,j=!w&&e==="scroll",p=w?x!==null?x+"Capture":null:x;w=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Qn(d,p),y!=null&&w.push(tr(d,y,m)))),j)break;d=d.return}0<w.length&&(x=new g(x,v,null,n,h),f.push({event:x,listeners:w}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",x&&n!==zl&&(v=n.relatedTarget||n.fromElement)&&(Pt(v)||v[Je]))break e;if((g||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Pt(v):null,v!==null&&(j=Ft(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Bo,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Mo,y="onPointerLeave",p="onPointerEnter",d="pointer"),j=g==null?x:Xt(g),m=v==null?x:Xt(v),x=new w(y,d+"leave",g,n,h),x.target=j,x.relatedTarget=m,y=null,Pt(h)===u&&(w=new w(p,d+"enter",v,n,h),w.target=m,w.relatedTarget=j,y=w),j=y,g&&v)t:{for(w=g,p=v,d=0,m=w;m;m=Ut(m))d++;for(m=0,y=p;y;y=Ut(y))m++;for(;0<d-m;)w=Ut(w),d--;for(;0<m-d;)p=Ut(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Ut(w),p=Ut(p)}w=null}else w=null;g!==null&&Uo(f,x,g,w,!1),v!==null&&j!==null&&Uo(f,j,v,w,!0)}}e:{if(x=u?Xt(u):window,g=x.nodeName&&x.nodeName.toLowerCase(),g==="select"||g==="input"&&x.type==="file")var k=Gp;else if($o(x))if(Mc)k=Yp;else{k=Wp;var E=Up}else(g=x.nodeName)&&g.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(k=Hp);if(k&&(k=k(e,u))){Lc(f,k,n,h);break e}E&&E(e,x,u),e==="focusout"&&(E=x._wrapperState)&&E.controlled&&x.type==="number"&&kl(x,"number",x.value)}switch(E=u?Xt(u):window,e){case"focusin":($o(E)||E.contentEditable==="true")&&(Vt=E,$l=u,Fn=null);break;case"focusout":Fn=$l=Vt=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Oo(f,n,h);break;case"selectionchange":if(Xp)break;case"keydown":case"keyup":Oo(f,n,h)}var z;if(Ba)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Yt?Pc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(zc&&n.locale!=="ko"&&(Yt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Yt&&(z=Ec()):(ot=h,Ea="value"in ot?ot.value:ot.textContent,Yt=!0)),E=ni(u,P),0<E.length&&(P=new Lo(P,e,null,n,h),f.push({event:P,listeners:E}),z?P.data=z:(z=Bc(n),z!==null&&(P.data=z)))),(z=Ip?Ap(e,n):Dp(e,n))&&(u=ni(u,"onBeforeInput"),0<u.length&&(h=new Lo("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=z))}Gc(f,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Qn(e,n),l!=null&&r.unshift(tr(e,l,i)),l=Qn(e,t),l!=null&&r.push(tr(e,l,i))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uo(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,i?(c=Qn(n,l),c!=null&&o.unshift(tr(n,c,s))):i||(c=Qn(n,l),c!=null&&o.push(tr(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qp=/\r\n?/g,ef=/\u0000|\uFFFD/g;function Wo(e){return(typeof e=="string"?e:""+e).replace(qp,`
`).replace(ef,"")}function Br(e,t,n){if(t=Wo(t),Wo(e)!==t&&n)throw Error(b(425))}function ri(){}var Il=null,Al=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,tf=typeof clearTimeout=="function"?clearTimeout:void 0,Ho=typeof Promise=="function"?Promise:void 0,nf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ho<"u"?function(e){return Ho.resolve(null).then(e).catch(rf)}:Ol;function rf(e){setTimeout(function(){throw e})}function il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+wn,nr="__reactProps$"+wn,Je="__reactContainer$"+wn,Fl="__reactEvents$"+wn,lf="__reactListeners$"+wn,af="__reactHandles$"+wn;function Pt(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yo(e);e!==null;){if(n=e[Ge])return n;e=Yo(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[Ge]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Ei(e){return e[nr]||null}var Gl=[],Kt=-1;function St(e){return{current:e}}function D(e){0>Kt||(e.current=Gl[Kt],Gl[Kt]=null,Kt--)}function I(e,t){Kt++,Gl[Kt]=e.current,e.current=t}var wt={},ce=St(wt),ge=St(!1),$t=wt;function pn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function ii(){D(ge),D(ce)}function Vo(e,t,n){if(ce.current!==wt)throw Error(b(168));I(ce,t),I(ge,n)}function Wc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,Ud(e)||"Unknown",i));return U({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,$t=ce.current,I(ce,e),I(ge,ge.current),!0}function Qo(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Wc(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,D(ge),D(ce),I(ce,e)):D(ge),I(ge,n)}var Ye=null,zi=!1,ll=!1;function Hc(e){Ye===null?Ye=[e]:Ye.push(e)}function of(e){zi=!0,Hc(e)}function kt(){if(!ll&&Ye!==null){ll=!0;var e=0,t=_;try{var n=Ye;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,zi=!1}catch(i){throw Ye!==null&&(Ye=Ye.slice(e+1)),xc(ka,kt),i}finally{_=t,ll=!1}}return null}var Jt=[],Zt=0,ai=null,oi=0,Ne=[],Ee=0,_t=null,Ve=1,Qe="";function Et(e,t){Jt[Zt++]=oi,Jt[Zt++]=ai,ai=e,oi=t}function Yc(e,t,n){Ne[Ee++]=Ve,Ne[Ee++]=Qe,Ne[Ee++]=_t,_t=e;var r=Ve;e=Qe;var i=32-Ie(r)-1;r&=~(1<<i),n+=1;var l=32-Ie(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ve=1<<32-Ie(t)+i|n<<i|r,Qe=l+e}else Ve=1<<l|n<<i|r,Qe=e}function Ma(e){e.return!==null&&(Et(e,1),Yc(e,1,0))}function Ta(e){for(;e===ai;)ai=Jt[--Zt],Jt[Zt]=null,oi=Jt[--Zt],Jt[Zt]=null;for(;e===_t;)_t=Ne[--Ee],Ne[Ee]=null,Qe=Ne[--Ee],Ne[Ee]=null,Ve=Ne[--Ee],Ne[Ee]=null}var Se=null,be=null,O=!1,_e=null;function Vc(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,be=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Ve,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,be=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(O){var t=be;if(t){var n=t;if(!Xo(e,t)){if(Ul(e))throw Error(b(418));t=ft(n.nextSibling);var r=Se;t&&Xo(e,t)?Vc(r,n):(e.flags=e.flags&-4097|2,O=!1,Se=e)}}else{if(Ul(e))throw Error(b(418));e.flags=e.flags&-4097|2,O=!1,Se=e}}}function Ko(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Lr(e){if(e!==Se)return!1;if(!O)return Ko(e),O=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=be)){if(Ul(e))throw Qc(),Error(b(418));for(;t;)Vc(e,t),t=ft(t.nextSibling)}if(Ko(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Se?ft(e.stateNode.nextSibling):null;return!0}function Qc(){for(var e=be;e;)e=ft(e.nextSibling)}function fn(){be=Se=null,O=!1}function Ra(e){_e===null?_e=[e]:_e.push(e)}var sf=et.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Mr(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jo(e){var t=e._init;return t(e._payload)}function Xc(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=gt(p,d),p.index=0,p.sibling=null,p}function l(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,y){return d===null||d.tag!==6?(d=pl(m,p.mode,y),d.return=p,d):(d=i(d,m),d.return=p,d)}function c(p,d,m,y){var k=m.type;return k===Ht?h(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rt&&Jo(k)===d.type)?(y=i(d,m.props),y.ref=Pn(p,d,m),y.return=p,y):(y=Qr(m.type,m.key,m.props,null,p.mode,y),y.ref=Pn(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=fl(m,p.mode,y),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function h(p,d,m,y,k){return d===null||d.tag!==7?(d=Tt(m,p.mode,y,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=pl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case br:return m=Qr(d.type,d.key,d.props,null,p.mode,m),m.ref=Pn(p,null,d),m.return=p,m;case Wt:return d=fl(d,p.mode,m),d.return=p,d;case rt:var y=d._init;return f(p,y(d._payload),m)}if(Rn(d)||jn(d))return d=Tt(d,p.mode,m,null),d.return=p,d;Mr(p,d)}return null}function x(p,d,m,y){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case br:return m.key===k?c(p,d,m,y):null;case Wt:return m.key===k?u(p,d,m,y):null;case rt:return k=m._init,x(p,d,k(m._payload),y)}if(Rn(m)||jn(m))return k!==null?null:h(p,d,m,y,null);Mr(p,m)}return null}function g(p,d,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,s(d,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case br:return p=p.get(y.key===null?m:y.key)||null,c(d,p,y,k);case Wt:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,k);case rt:var E=y._init;return g(p,d,m,E(y._payload),k)}if(Rn(y)||jn(y))return p=p.get(m)||null,h(d,p,y,k,null);Mr(d,y)}return null}function v(p,d,m,y){for(var k=null,E=null,z=d,P=d=0,Y=null;z!==null&&P<m.length;P++){z.index>P?(Y=z,z=null):Y=z.sibling;var R=x(p,z,m[P],y);if(R===null){z===null&&(z=Y);break}e&&z&&R.alternate===null&&t(p,z),d=l(R,d,P),E===null?k=R:E.sibling=R,E=R,z=Y}if(P===m.length)return n(p,z),O&&Et(p,P),k;if(z===null){for(;P<m.length;P++)z=f(p,m[P],y),z!==null&&(d=l(z,d,P),E===null?k=z:E.sibling=z,E=z);return O&&Et(p,P),k}for(z=r(p,z);P<m.length;P++)Y=g(z,p,P,m[P],y),Y!==null&&(e&&Y.alternate!==null&&z.delete(Y.key===null?P:Y.key),d=l(Y,d,P),E===null?k=Y:E.sibling=Y,E=Y);return e&&z.forEach(function(Me){return t(p,Me)}),O&&Et(p,P),k}function w(p,d,m,y){var k=jn(m);if(typeof k!="function")throw Error(b(150));if(m=k.call(m),m==null)throw Error(b(151));for(var E=k=null,z=d,P=d=0,Y=null,R=m.next();z!==null&&!R.done;P++,R=m.next()){z.index>P?(Y=z,z=null):Y=z.sibling;var Me=x(p,z,R.value,y);if(Me===null){z===null&&(z=Y);break}e&&z&&Me.alternate===null&&t(p,z),d=l(Me,d,P),E===null?k=Me:E.sibling=Me,E=Me,z=Y}if(R.done)return n(p,z),O&&Et(p,P),k;if(z===null){for(;!R.done;P++,R=m.next())R=f(p,R.value,y),R!==null&&(d=l(R,d,P),E===null?k=R:E.sibling=R,E=R);return O&&Et(p,P),k}for(z=r(p,z);!R.done;P++,R=m.next())R=g(z,p,P,R.value,y),R!==null&&(e&&R.alternate!==null&&z.delete(R.key===null?P:R.key),d=l(R,d,P),E===null?k=R:E.sibling=R,E=R);return e&&z.forEach(function(Sn){return t(p,Sn)}),O&&Et(p,P),k}function j(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===Ht&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case br:e:{for(var k=m.key,E=d;E!==null;){if(E.key===k){if(k=m.type,k===Ht){if(E.tag===7){n(p,E.sibling),d=i(E,m.props.children),d.return=p,p=d;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===rt&&Jo(k)===E.type){n(p,E.sibling),d=i(E,m.props),d.ref=Pn(p,E,m),d.return=p,p=d;break e}n(p,E);break}else t(p,E);E=E.sibling}m.type===Ht?(d=Tt(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=Qr(m.type,m.key,m.props,null,p.mode,y),y.ref=Pn(p,d,m),y.return=p,p=y)}return o(p);case Wt:e:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=fl(m,p.mode,y),d.return=p,p=d}return o(p);case rt:return E=m._init,j(p,d,E(m._payload),y)}if(Rn(m))return v(p,d,m,y);if(jn(m))return w(p,d,m,y);Mr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=pl(m,p.mode,y),d.return=p,p=d),o(p)):n(p,d)}return j}var mn=Xc(!0),Kc=Xc(!1),si=St(null),ci=null,qt=null,$a=null;function _a(){$a=qt=ci=null}function Ia(e){var t=si.current;D(si),e._currentValue=t}function Hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){ci=e,$a=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(ci===null)throw Error(b(308));qt=e,ci.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var Bt=null;function Aa(e){Bt===null?Bt=[e]:Bt.push(e)}function Jc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Aa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ze(e,n)}return i=r.interleaved,i===null?(t.next=t,Aa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ze(e,n)}function Gr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ja(e,n)}}function Zo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ui(e,t,n,r){var i=e.updateQueue;it=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,o===null?l=u:o.next=u,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=c))}if(l!==null){var f=i.baseState;o=0,h=u=c=null,s=l;do{var x=s.lane,g=s.eventTime;if((r&x)===x){h!==null&&(h=h.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(x=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,x);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,x=typeof v=="function"?v.call(g,f,x):v,x==null)break e;f=U({},f,x);break e;case 2:it=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[s]:x.push(s))}else g={eventTime:g,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=g,c=f):h=h.next=g,o|=x;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;x=s,s=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(h===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);At|=o,e.lanes=o,e.memoizedState=f}}function qo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var hr={},We=St(hr),rr=St(hr),ir=St(hr);function Lt(e){if(e===hr)throw Error(b(174));return e}function Oa(e,t){switch(I(ir,t),I(rr,e),I(We,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cl(t,e)}D(We),I(We,t)}function hn(){D(We),D(rr),D(ir)}function qc(e){Lt(ir.current);var t=Lt(We.current),n=Cl(t,e.type);t!==n&&(I(rr,e),I(We,n))}function Fa(e){rr.current===e&&(D(We),D(rr))}var F=St(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function Ga(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var Ur=et.ReactCurrentDispatcher,ol=et.ReactCurrentBatchConfig,It=0,G=null,Z=null,te=null,pi=!1,Gn=!1,lr=0,cf=0;function ae(){throw Error(b(321))}function Ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Wa(e,t,n,r,i,l){if(It=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?ff:mf,e=n(r,i),Gn){l=0;do{if(Gn=!1,lr=0,25<=l)throw Error(b(301));l+=1,te=Z=null,t.updateQueue=null,Ur.current=hf,e=n(r,i)}while(Gn)}if(Ur.current=fi,t=Z!==null&&Z.next!==null,It=0,te=Z=G=null,pi=!1,t)throw Error(b(300));return e}function Ha(){var e=lr!==0;return lr=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?G.memoizedState=te=e:te=te.next=e,te}function Le(){if(Z===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=te===null?G.memoizedState:te.next;if(t!==null)te=t,Z=e;else{if(e===null)throw Error(b(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},te===null?G.memoizedState=te=e:te=te.next=e}return te}function ar(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=Le(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,c=null,u=l;do{var h=u.lane;if((It&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=f,o=r):c=c.next=f,G.lanes|=h,At|=h}u=u.next}while(u!==null&&u!==l);c===null?o=r:c.next=s,De(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,G.lanes|=l,At|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=Le(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);De(l,t.memoizedState)||(xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function eu(){}function tu(e,t){var n=G,r=Le(),i=t(),l=!De(r.memoizedState,i);if(l&&(r.memoizedState=i,xe=!0),r=r.queue,Ya(iu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,or(9,ru.bind(null,n,r,i,t),void 0,null),ne===null)throw Error(b(349));It&30||nu(n,t,i)}return i}function nu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ru(e,t,n,r){t.value=n,t.getSnapshot=r,lu(t)&&au(e)}function iu(e,t,n){return n(function(){lu(t)&&au(e)})}function lu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function au(e){var t=Ze(e,1);t!==null&&Ae(t,e,1,-1)}function es(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=pf.bind(null,G,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ou(){return Le().memoizedState}function Wr(e,t,n,r){var i=Fe();G.flags|=e,i.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function Pi(e,t,n,r){var i=Le();r=r===void 0?null:r;var l=void 0;if(Z!==null){var o=Z.memoizedState;if(l=o.destroy,r!==null&&Ua(r,o.deps)){i.memoizedState=or(t,n,l,r);return}}G.flags|=e,i.memoizedState=or(1|t,n,l,r)}function ts(e,t){return Wr(8390656,8,e,t)}function Ya(e,t){return Pi(2048,8,e,t)}function su(e,t){return Pi(4,2,e,t)}function cu(e,t){return Pi(4,4,e,t)}function uu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function du(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4,4,uu.bind(null,t,e),n)}function Va(){}function pu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mu(e,t,n){return It&21?(De(n,t)||(n=vc(),G.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function uf(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{_=n,ol.transition=r}}function hu(){return Le().memoizedState}function df(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xu(e))gu(t,n);else if(n=Jc(e,t,n,r),n!==null){var i=pe();Ae(n,e,r,i),yu(n,t,r)}}function pf(e,t,n){var r=xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xu(e))gu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,De(s,o)){var c=t.interleaved;c===null?(i.next=i,Aa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Jc(e,t,i,r),n!==null&&(i=pe(),Ae(n,e,r,i),yu(n,t,r))}}function xu(e){var t=e.alternate;return e===G||t!==null&&t===G}function gu(e,t){Gn=pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ja(e,n)}}var fi={readContext:Be,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},ff={readContext:Be,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:ts,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,uu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=df.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:es,useDebugValue:Va,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=es(!1),t=e[0];return e=uf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=Fe();if(O){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ne===null)throw Error(b(349));It&30||nu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ts(iu.bind(null,r,l,e),[e]),r.flags|=2048,or(9,ru.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Fe(),t=ne.identifierPrefix;if(O){var n=Qe,r=Ve;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mf={readContext:Be,useCallback:pu,useContext:Be,useEffect:Ya,useImperativeHandle:du,useInsertionEffect:su,useLayoutEffect:cu,useMemo:fu,useReducer:sl,useRef:ou,useState:function(){return sl(ar)},useDebugValue:Va,useDeferredValue:function(e){var t=Le();return mu(t,Z.memoizedState,e)},useTransition:function(){var e=sl(ar)[0],t=Le().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:hu,unstable_isNewReconciler:!1},hf={readContext:Be,useCallback:pu,useContext:Be,useEffect:Ya,useImperativeHandle:du,useInsertionEffect:su,useLayoutEffect:cu,useMemo:fu,useReducer:cl,useRef:ou,useState:function(){return cl(ar)},useDebugValue:Va,useDeferredValue:function(e){var t=Le();return Z===null?t.memoizedState=e:mu(t,Z.memoizedState,e)},useTransition:function(){var e=cl(ar)[0],t=Le().memoizedState;return[e,t]},useMutableSource:eu,useSyncExternalStore:tu,useId:hu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bi={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),i=xt(e),l=Xe(r,i);l.payload=t,n!=null&&(l.callback=n),t=mt(e,l,i),t!==null&&(Ae(t,e,i,r),Gr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),i=xt(e),l=Xe(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=mt(e,l,i),t!==null&&(Ae(t,e,i,r),Gr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=xt(e),i=Xe(n,r);i.tag=2,t!=null&&(i.callback=t),t=mt(e,i,r),t!==null&&(Ae(t,e,r,n),Gr(t,e,r))}};function ns(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(i,l):!0}function vu(e,t,n){var r=!1,i=wt,l=t.contextType;return typeof l=="object"&&l!==null?l=Be(l):(i=ye(t)?$t:ce.current,r=t.contextTypes,l=(r=r!=null)?pn(e,i):wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function rs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bi.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Da(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Be(l):(l=ye(t)?$t:ce.current,i.context=pn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Yl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bi.enqueueReplaceState(i,i.state,null),ui(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=Gd(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xf=typeof WeakMap=="function"?WeakMap:Map;function wu(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hi||(hi=!0,ia=r),Ql(e,t)},n}function bu(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ql(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function is(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bf.bind(null,e,t,n),t.then(e,e))}function ls(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function as(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var gf=et.ReactCurrentOwner,xe=!1;function ue(e,t,n,r){t.child=e===null?Kc(t,null,n,r):mn(t,e.child,n,r)}function os(e,t,n,r,i){n=n.render;var l=t.ref;return on(t,i),r=Wa(e,t,n,r,l,i),n=Ha(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(O&&n&&Ma(t),t.flags|=1,ue(e,t,r,i),t.child)}function ss(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!to(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Su(e,t,l,r,i)):(e=Qr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(o,r)&&e.ref===t.ref)return qe(e,t,i)}return t.flags|=1,e=gt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Su(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(qn(l,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,qe(e,t,i)}return Xl(e,t,n,r,i)}function ku(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(tn,we),we|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(tn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,I(tn,we),we|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,I(tn,we),we|=r;return ue(e,t,i,n),t.child}function ju(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xl(e,t,n,r,i){var l=ye(n)?$t:ce.current;return l=pn(t,l),on(t,i),n=Wa(e,t,n,r,l,i),r=Ha(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qe(e,t,i)):(O&&r&&Ma(t),t.flags|=1,ue(e,t,n,i),t.child)}function cs(e,t,n,r,i){if(ye(n)){var l=!0;li(t)}else l=!1;if(on(t,i),t.stateNode===null)Hr(e,t),vu(t,n,r),Vl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=ye(n)?$t:ce.current,u=pn(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||c!==u)&&rs(t,o,r,u),it=!1;var x=t.memoizedState;o.state=x,ui(t,r,o,i),c=t.memoizedState,s!==r||x!==c||ge.current||it?(typeof h=="function"&&(Yl(t,n,h,r),c=t.memoizedState),(s=it||ns(t,n,s,r,x,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Zc(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Re(t.type,s),o.props=u,f=t.pendingProps,x=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Be(c):(c=ye(n)?$t:ce.current,c=pn(t,c));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||x!==c)&&rs(t,o,r,c),it=!1,x=t.memoizedState,o.state=x,ui(t,r,o,i);var v=t.memoizedState;s!==f||x!==v||ge.current||it?(typeof g=="function"&&(Yl(t,n,g,r),v=t.memoizedState),(u=it||ns(t,n,u,r,x,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,l,i)}function Kl(e,t,n,r,i,l){ju(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Qo(t,n,!1),qe(e,t,l);r=t.stateNode,gf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=mn(t,e.child,null,l),t.child=mn(t,null,s,l)):ue(e,t,s,l),t.memoizedState=r.state,i&&Qo(t,n,!0),t.child}function Cu(e){var t=e.stateNode;t.pendingContext?Vo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vo(e,t.context,!1),Oa(e,t.containerInfo)}function us(e,t,n,r,i){return fn(),Ra(i),t.flags|=256,ue(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nu(e,t,n){var r=t.pendingProps,i=F.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(F,i&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ti(o,r,0,null),e=Tt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Zl(n),t.memoizedState=Jl,e):Qa(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return yf(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=gt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=gt(s,l):(l=Tt(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return l=e.child,e=l.sibling,r=gt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qa(e,t){return t=Ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&Ra(r),mn(t,e.child,null,n),e=Qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(b(422))),Tr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ti({mode:"visible",children:r.children},i,0,null),l=Tt(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&mn(t,e.child,null,o),t.child.memoizedState=Zl(o),t.memoizedState=Jl,l);if(!(t.mode&1))return Tr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(b(419)),r=ul(l,r,void 0),Tr(e,t,o,r)}if(s=(o&e.childLanes)!==0,xe||s){if(r=ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ze(e,i),Ae(r,e,i,-1))}return eo(),r=ul(Error(b(421))),Tr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Lf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,be=ft(i.nextSibling),Se=t,O=!0,_e=null,e!==null&&(Ne[Ee++]=Ve,Ne[Ee++]=Qe,Ne[Ee++]=_t,Ve=e.id,Qe=e.overflow,_t=t),t=Qa(t,r.children),t.flags|=4096,t)}function ds(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hl(e.return,t,n)}function dl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Eu(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ue(e,t,r.children,n),r=F.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ds(e,n,t);else if(e.tag===19)ds(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(F,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&di(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&di(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,l);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vf(e,t,n){switch(t.tag){case 3:Cu(t),fn();break;case 5:qc(t);break;case 1:ye(t.type)&&li(t);break;case 4:Oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(si,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(F,F.current&1),t.flags|=128,null):n&t.child.childLanes?Nu(e,t,n):(I(F,F.current&1),e=qe(e,t,n),e!==null?e.sibling:null);I(F,F.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Eu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(F,F.current),r)break;return null;case 22:case 23:return t.lanes=0,ku(e,t,n)}return qe(e,t,n)}var zu,ql,Pu,Bu;zu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ql=function(){};Pu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Lt(We.current);var l=null;switch(n){case"input":i=bl(e,i),r=bl(e,r),l=[];break;case"select":i=U({},i,{value:void 0}),r=U({},r,{value:void 0}),l=[];break;case"textarea":i=jl(e,i),r=jl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ri)}Nl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yn.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var c=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(l||(l=[]),l.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&A("scroll",e),l||s===c||(l=[])):(l=l||[]).push(u,c))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!O)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wf(e,t,n){var r=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ye(t.type)&&ii(),oe(t),null;case 3:return r=t.stateNode,hn(),D(ge),D(ce),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_e!==null&&(oa(_e),_e=null))),ql(e,t),oe(t),null;case 5:Fa(t);var i=Lt(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Pu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return oe(t),null}if(e=Lt(We.current),Lr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ge]=t,r[nr]=l,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(i=0;i<_n.length;i++)A(_n[i],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":wo(r,l),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},A("invalid",r);break;case"textarea":So(r,l),A("invalid",r)}Nl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),i=["children",""+s]):Yn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&A("scroll",r)}switch(n){case"input":Sr(r),bo(r,l,!0);break;case"textarea":Sr(r),ko(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ri)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ic(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ge]=t,e[nr]=r,zu(e,t,!1,!1),t.stateNode=e;e:{switch(o=El(n,r),n){case"dialog":A("cancel",e),A("close",e),i=r;break;case"iframe":case"object":case"embed":A("load",e),i=r;break;case"video":case"audio":for(i=0;i<_n.length;i++)A(_n[i],e);i=r;break;case"source":A("error",e),i=r;break;case"img":case"image":case"link":A("error",e),A("load",e),i=r;break;case"details":A("toggle",e),i=r;break;case"input":wo(e,r),i=bl(e,r),A("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=U({},r,{value:void 0}),A("invalid",e);break;case"textarea":So(e,r),i=jl(e,r),A("invalid",e);break;default:i=r}Nl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?oc(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&lc(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vn(e,c):typeof c=="number"&&Vn(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?c!=null&&l==="onScroll"&&A("scroll",e):c!=null&&ya(e,l,c,o))}switch(n){case"input":Sr(e),bo(e,r,!1);break;case"textarea":Sr(e),ko(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nn(e,!!r.multiple,l,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Lt(ir.current),Lt(We.current),Lr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(l=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return oe(t),null;case 13:if(D(F),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&be!==null&&t.mode&1&&!(t.flags&128))Qc(),fn(),t.flags|=98560,l=!1;else if(l=Lr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(b(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));l[Ge]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),l=!1}else _e!==null&&(oa(_e),_e=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?q===0&&(q=3):eo())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return hn(),ql(e,t),e===null&&er(t.stateNode.containerInfo),oe(t),null;case 10:return Ia(t.type._context),oe(t),null;case 17:return ye(t.type)&&ii(),oe(t),null;case 19:if(D(F),l=t.memoizedState,l===null)return oe(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Bn(l,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=di(e),o!==null){for(t.flags|=128,Bn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(F,F.current&1|2),t.child}e=e.sibling}l.tail!==null&&X()>gn&&(t.flags|=128,r=!0,Bn(l,!1),t.lanes=4194304)}else{if(!r)if(e=di(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!O)return oe(t),null}else 2*X()-l.renderingStartTime>gn&&n!==1073741824&&(t.flags|=128,r=!0,Bn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=X(),t.sibling=null,n=F.current,I(F,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function bf(e,t){switch(Ta(t),t.tag){case 1:return ye(t.type)&&ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),D(ge),D(ce),Ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fa(t),null;case 13:if(D(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(F),null;case 4:return hn(),null;case 10:return Ia(t.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var Rr=!1,se=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,C=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function ea(e,t,n){try{n()}catch(r){W(e,t,r)}}var ps=!1;function kf(e,t){if(Il=ei,e=$c(),La(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,c=-1,u=0,h=0,f=e,x=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==l||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)x=f,f=g;for(;;){if(f===e)break t;if(x===n&&++u===i&&(s=o),x===l&&++h===r&&(c=o),(g=f.nextSibling)!==null)break;f=x,x=f.parentNode}f=g}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Al={focusedElem:e,selectionRange:n},ei=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,j=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Re(t.type,w),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(y){W(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=ps,ps=!1,v}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ea(t,n,l)}i=i.next}while(i!==r)}}function Li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ta(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lu(e){var t=e.alternate;t!==null&&(e.alternate=null,Lu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[nr],delete t[Fl],delete t[lf],delete t[af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mu(e){return e.tag===5||e.tag===3||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ri));else if(r!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}var re=null,$e=!1;function tt(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:se||en(n,t);case 6:var r=re,i=$e;re=null,tt(e,t,n),re=r,$e=i,re!==null&&($e?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&($e?(e=re,n=n.stateNode,e.nodeType===8?il(e.parentNode,n):e.nodeType===1&&il(e,n),Jn(e)):il(re,n.stateNode));break;case 4:r=re,i=$e,re=n.stateNode.containerInfo,$e=!0,tt(e,t,n),re=r,$e=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ea(n,t,o),i=i.next}while(i!==r)}tt(e,t,n);break;case 1:if(!se&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){W(n,t,s)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,tt(e,t,n),se=r):tt(e,t,n);break;default:tt(e,t,n)}}function ms(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sf),t.forEach(function(r){var i=Mf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,$e=!1;break e;case 3:re=s.stateNode.containerInfo,$e=!0;break e;case 4:re=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(re===null)throw Error(b(160));Tu(l,o,i),re=null,$e=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){W(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ru(t,e),t=t.sibling}function Ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Oe(e),r&4){try{Un(3,e,e.return),Li(3,e)}catch(w){W(e,e.return,w)}try{Un(5,e,e.return)}catch(w){W(e,e.return,w)}}break;case 1:Te(t,e),Oe(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Te(t,e),Oe(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Vn(i,"")}catch(w){W(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&nc(i,l),El(s,o);var u=El(s,l);for(o=0;o<c.length;o+=2){var h=c[o],f=c[o+1];h==="style"?oc(i,f):h==="dangerouslySetInnerHTML"?lc(i,f):h==="children"?Vn(i,f):ya(i,h,f,u)}switch(s){case"input":Sl(i,l);break;case"textarea":rc(i,l);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?nn(i,!!l.multiple,g,!1):x!==!!l.multiple&&(l.defaultValue!=null?nn(i,!!l.multiple,l.defaultValue,!0):nn(i,!!l.multiple,l.multiple?[]:"",!1))}i[nr]=l}catch(w){W(e,e.return,w)}}break;case 6:if(Te(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){W(e,e.return,w)}}break;case 3:if(Te(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(w){W(e,e.return,w)}break;case 4:Te(t,e),Oe(e);break;case 13:Te(t,e),Oe(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ja=X())),r&4&&ms(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(se=(u=se)||h,Te(t,e),se=u):Te(t,e),Oe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(f=C=h;C!==null;){switch(x=C,g=x.child,x.tag){case 0:case 11:case 14:case 15:Un(4,x,x.return);break;case 1:en(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){W(r,n,w)}}break;case 5:en(x,x.return);break;case 22:if(x.memoizedState!==null){xs(f);continue}}g!==null?(g.return=x,C=g):xs(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=ac("display",o))}catch(w){W(e,e.return,w)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){W(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Te(t,e),Oe(e),r&4&&ms(e);break;case 21:break;default:Te(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mu(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vn(i,""),r.flags&=-33);var l=fs(e);ra(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=fs(e);na(e,s,o);break;default:throw Error(b(161))}}catch(c){W(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jf(e,t,n){C=e,$u(e)}function $u(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Rr;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||se;s=Rr;var u=se;if(Rr=o,(se=c)&&!u)for(C=i;C!==null;)o=C,c=o.child,o.tag===22&&o.memoizedState!==null?gs(i):c!==null?(c.return=o,C=c):gs(i);for(;l!==null;)C=l,$u(l),l=l.sibling;C=i,Rr=s,se=u}hs(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,C=l):hs(e)}}function hs(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Li(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&qo(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qo(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Jn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}se||t.flags&512&&ta(t)}catch(x){W(t,t.return,x)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function xs(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function gs(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Li(4,t)}catch(c){W(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){W(t,i,c)}}var l=t.return;try{ta(t)}catch(c){W(t,l,c)}break;case 5:var o=t.return;try{ta(t)}catch(c){W(t,o,c)}}}catch(c){W(t,t.return,c)}if(t===e){C=null;break}var s=t.sibling;if(s!==null){s.return=t.return,C=s;break}C=t.return}}var Cf=Math.ceil,mi=et.ReactCurrentDispatcher,Xa=et.ReactCurrentOwner,Pe=et.ReactCurrentBatchConfig,$=0,ne=null,K=null,ie=0,we=0,tn=St(0),q=0,sr=null,At=0,Mi=0,Ka=0,Wn=null,he=null,Ja=0,gn=1/0,He=null,hi=!1,ia=null,ht=null,$r=!1,st=null,xi=0,Hn=0,la=null,Yr=-1,Vr=0;function pe(){return $&6?X():Yr!==-1?Yr:Yr=X()}function xt(e){return e.mode&1?$&2&&ie!==0?ie&-ie:sf.transition!==null?(Vr===0&&(Vr=vc()),Vr):(e=_,e!==0||(e=window.event,e=e===void 0?16:Nc(e.type)),e):1}function Ae(e,t,n,r){if(50<Hn)throw Hn=0,la=null,Error(b(185));pr(e,n,r),(!($&2)||e!==ne)&&(e===ne&&(!($&2)&&(Mi|=n),q===4&&at(e,ie)),ve(e,r),n===1&&$===0&&!(t.mode&1)&&(gn=X()+500,zi&&kt()))}function ve(e,t){var n=e.callbackNode;op(e,t);var r=qr(e,e===ne?ie:0);if(r===0)n!==null&&No(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&No(n),t===1)e.tag===0?of(ys.bind(null,e)):Hc(ys.bind(null,e)),nf(function(){!($&6)&&kt()}),n=null;else{switch(wc(r)){case 1:n=ka;break;case 4:n=gc;break;case 16:n=Zr;break;case 536870912:n=yc;break;default:n=Zr}n=Uu(n,_u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _u(e,t){if(Yr=-1,Vr=0,$&6)throw Error(b(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=qr(e,e===ne?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gi(e,r);else{t=r;var i=$;$|=2;var l=Au();(ne!==e||ie!==t)&&(He=null,gn=X()+500,Mt(e,t));do try{zf();break}catch(s){Iu(e,s)}while(!0);_a(),mi.current=l,$=i,K!==null?t=0:(ne=null,ie=0,t=q)}if(t!==0){if(t===2&&(i=Ml(e),i!==0&&(r=i,t=aa(e,i))),t===1)throw n=sr,Mt(e,0),at(e,r),ve(e,X()),n;if(t===6)at(e,r);else{if(i=e.current.alternate,!(r&30)&&!Nf(i)&&(t=gi(e,r),t===2&&(l=Ml(e),l!==0&&(r=l,t=aa(e,l))),t===1))throw n=sr,Mt(e,0),at(e,r),ve(e,X()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:zt(e,he,He);break;case 3:if(at(e,r),(r&130023424)===r&&(t=Ja+500-X(),10<t)){if(qr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(zt.bind(null,e,he,He),t);break}zt(e,he,He);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ie(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cf(r/1960))-r,10<r){e.timeoutHandle=Ol(zt.bind(null,e,he,He),r);break}zt(e,he,He);break;case 5:zt(e,he,He);break;default:throw Error(b(329))}}}return ve(e,X()),e.callbackNode===n?_u.bind(null,e):null}function aa(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=gi(e,t),e!==2&&(t=he,he=n,t!==null&&oa(t)),e}function oa(e){he===null?he=e:he.push.apply(he,e)}function Nf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!De(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Ka,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function ys(e){if($&6)throw Error(b(327));sn();var t=qr(e,0);if(!(t&1))return ve(e,X()),null;var n=gi(e,t);if(e.tag!==0&&n===2){var r=Ml(e);r!==0&&(t=r,n=aa(e,r))}if(n===1)throw n=sr,Mt(e,0),at(e,t),ve(e,X()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,he,He),ve(e,X()),null}function Za(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(gn=X()+500,zi&&kt())}}function Dt(e){st!==null&&st.tag===0&&!($&6)&&sn();var t=$;$|=1;var n=Pe.transition,r=_;try{if(Pe.transition=null,_=1,e)return e()}finally{_=r,Pe.transition=n,$=t,!($&6)&&kt()}}function qa(){we=tn.current,D(tn)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:hn(),D(ge),D(ce),Ga();break;case 5:Fa(r);break;case 4:hn();break;case 13:D(F);break;case 19:D(F);break;case 10:Ia(r.type._context);break;case 22:case 23:qa()}n=n.return}if(ne=e,K=e=gt(e.current,null),ie=we=t,q=0,sr=null,Ka=Mi=At=0,he=Wn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Bt=null}return e}function Iu(e,t){do{var n=K;try{if(_a(),Ur.current=fi,pi){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pi=!1}if(It=0,te=Z=G=null,Gn=!1,lr=0,Xa.current=null,n===null||n.return===null){q=1,sr=t,K=null;break}e:{var l=e,o=n.return,s=n,c=t;if(t=ie,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=s,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=ls(o);if(g!==null){g.flags&=-257,as(g,o,s,l,t),g.mode&1&&is(l,u,t),t=g,c=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){is(l,u,t),eo();break e}c=Error(b(426))}}else if(O&&s.mode&1){var j=ls(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),as(j,o,s,l,t),Ra(xn(c,s));break e}}l=c=xn(c,s),q!==4&&(q=2),Wn===null?Wn=[l]:Wn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=wu(l,c,t);Zo(l,p);break e;case 1:s=c;var d=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ht===null||!ht.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=bu(l,s,t);Zo(l,y);break e}}l=l.return}while(l!==null)}Ou(n)}catch(k){t=k,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Au(){var e=mi.current;return mi.current=fi,e===null?fi:e}function eo(){(q===0||q===3||q===2)&&(q=4),ne===null||!(At&268435455)&&!(Mi&268435455)||at(ne,ie)}function gi(e,t){var n=$;$|=2;var r=Au();(ne!==e||ie!==t)&&(He=null,Mt(e,t));do try{Ef();break}catch(i){Iu(e,i)}while(!0);if(_a(),$=n,mi.current=r,K!==null)throw Error(b(261));return ne=null,ie=0,q}function Ef(){for(;K!==null;)Du(K)}function zf(){for(;K!==null&&!Zd();)Du(K)}function Du(e){var t=Gu(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?Ou(e):K=t,Xa.current=null}function Ou(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,K=null;return}}else if(n=wf(n,t,we),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);q===0&&(q=5)}function zt(e,t,n){var r=_,i=Pe.transition;try{Pe.transition=null,_=1,Pf(e,t,n,r)}finally{Pe.transition=i,_=r}return null}function Pf(e,t,n,r){do sn();while(st!==null);if($&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(sp(e,l),e===ne&&(K=ne=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$r||($r=!0,Uu(Zr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var o=_;_=1;var s=$;$|=4,Xa.current=null,kf(e,n),Ru(n,e),Qp(Al),ei=!!Il,Al=Il=null,e.current=n,jf(n),qd(),$=s,_=o,Pe.transition=l}else e.current=n;if($r&&($r=!1,st=e,xi=i),l=e.pendingLanes,l===0&&(ht=null),np(n.stateNode),ve(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=ia,ia=null,e;return xi&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===la?Hn++:(Hn=0,la=e):Hn=0,kt(),null}function sn(){if(st!==null){var e=wc(xi),t=Pe.transition,n=_;try{if(Pe.transition=null,_=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,xi=0,$&6)throw Error(b(331));var i=$;for($|=4,C=e.current;C!==null;){var l=C,o=l.child;if(C.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(C=u;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:Un(8,h,l)}var f=h.child;if(f!==null)f.return=h,C=f;else for(;C!==null;){h=C;var x=h.sibling,g=h.return;if(Lu(h),h===u){C=null;break}if(x!==null){x.return=g,C=x;break}C=g}}}var v=l.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}C=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,C=o;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Un(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,C=p;break e}C=l.return}}var d=e.current;for(C=d;C!==null;){o=C;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,C=m;else e:for(o=d;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Li(9,s)}}catch(k){W(s,s.return,k)}if(s===o){C=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,C=y;break e}C=s.return}}if($=i,kt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{_=n,Pe.transition=t}}return!1}function vs(e,t,n){t=xn(n,t),t=wu(e,t,1),e=mt(e,t,1),t=pe(),e!==null&&(pr(e,1,t),ve(e,t))}function W(e,t,n){if(e.tag===3)vs(e,e,n);else for(;t!==null;){if(t.tag===3){vs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=xn(n,e),e=bu(t,e,1),t=mt(t,e,1),e=pe(),t!==null&&(pr(t,1,e),ve(t,e));break}}t=t.return}}function Bf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ie&n)===n&&(q===4||q===3&&(ie&130023424)===ie&&500>X()-Ja?Mt(e,0):Ka|=n),ve(e,t)}function Fu(e,t){t===0&&(e.mode&1?(t=Cr,Cr<<=1,!(Cr&130023424)&&(Cr=4194304)):t=1);var n=pe();e=Ze(e,t),e!==null&&(pr(e,t,n),ve(e,n))}function Lf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fu(e,n)}function Mf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Fu(e,n)}var Gu;Gu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,vf(e,t,n);xe=!!(e.flags&131072)}else xe=!1,O&&t.flags&1048576&&Yc(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var i=pn(t,ce.current);on(t,n),i=Wa(null,t,r,e,i,n);var l=Ha();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(l=!0,li(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Da(t),i.updater=Bi,t.stateNode=i,i._reactInternals=t,Vl(t,r,e,n),t=Kl(null,t,r,!0,l,n)):(t.tag=0,O&&l&&Ma(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rf(r),e=Re(r,e),i){case 0:t=Xl(null,t,r,e,n);break e;case 1:t=cs(null,t,r,e,n);break e;case 11:t=os(null,t,r,e,n);break e;case 14:t=ss(null,t,r,Re(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Xl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),cs(e,t,r,i,n);case 3:e:{if(Cu(t),e===null)throw Error(b(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Zc(e,t),ui(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=xn(Error(b(423)),t),t=us(e,t,r,n,i);break e}else if(r!==i){i=xn(Error(b(424)),t),t=us(e,t,r,n,i);break e}else for(be=ft(t.stateNode.containerInfo.firstChild),Se=t,O=!0,_e=null,n=Kc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===i){t=qe(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return qc(t),e===null&&Wl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Dl(r,i)?o=null:l!==null&&Dl(r,l)&&(t.flags|=32),ju(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Wl(t),null;case 13:return Nu(e,t,n);case 4:return Oa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),os(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,I(si,r._currentValue),r._currentValue=o,l!==null)if(De(l.value,o)){if(l.children===i.children&&!ge.current){t=qe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=Xe(-1,n&-n),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Hl(l.return,n,t),s.lanes|=n;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(b(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Hl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,on(t,n),i=Be(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Re(r,t.pendingProps),i=Re(r.type,i),ss(e,t,r,i,n);case 15:return Su(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Hr(e,t),t.tag=1,ye(r)?(e=!0,li(t)):e=!1,on(t,n),vu(t,r,i),Vl(t,r,i,n),Kl(null,t,r,!0,e,n);case 19:return Eu(e,t,n);case 22:return ku(e,t,n)}throw Error(b(156,t.tag))};function Uu(e,t){return xc(e,t)}function Tf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new Tf(e,t,n,r)}function to(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rf(e){if(typeof e=="function")return to(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wa)return 11;if(e===ba)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")to(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ht:return Tt(n.children,i,l,t);case va:o=8,i|=8;break;case gl:return e=ze(12,n,t,i|2),e.elementType=gl,e.lanes=l,e;case yl:return e=ze(13,n,t,i),e.elementType=yl,e.lanes=l,e;case vl:return e=ze(19,n,t,i),e.elementType=vl,e.lanes=l,e;case qs:return Ti(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Js:o=10;break e;case Zs:o=9;break e;case wa:o=11;break e;case ba:o=14;break e;case rt:o=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=ze(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Tt(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function Ti(e,t,n,r){return e=ze(22,e,r,t),e.elementType=qs,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $f(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function no(e,t,n,r,i,l,o,s,c){return e=new $f(e,t,n,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ze(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Da(l),e}function _f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wu(e){if(!e)return wt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(ye(n))return Wc(e,n,t)}return t}function Hu(e,t,n,r,i,l,o,s,c){return e=no(n,r,!0,e,i,l,o,s,c),e.context=Wu(null),n=e.current,r=pe(),i=xt(n),l=Xe(r,i),l.callback=t??null,mt(n,l,i),e.current.lanes=i,pr(e,i,r),ve(e,r),e}function Ri(e,t,n,r){var i=t.current,l=pe(),o=xt(i);return n=Wu(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(i,t,o),e!==null&&(Ae(e,i,o,l),Gr(e,i,o)),o}function yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ws(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ro(e,t){ws(e,t),(e=e.alternate)&&ws(e,t)}function If(){return null}var Yu=typeof reportError=="function"?reportError:function(e){console.error(e)};function io(e){this._internalRoot=e}$i.prototype.render=io.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Ri(e,t,null,null)};$i.prototype.unmount=io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){Ri(null,e,null,null)}),t[Je]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=kc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&Cc(e)}};function lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bs(){}function Af(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=yi(o);l.call(u)}}var o=Hu(t,r,e,0,null,!1,!1,"",bs);return e._reactRootContainer=o,e[Je]=o.current,er(e.nodeType===8?e.parentNode:e),Dt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=yi(c);s.call(u)}}var c=no(e,0,!1,null,null,!1,!1,"",bs);return e._reactRootContainer=c,e[Je]=c.current,er(e.nodeType===8?e.parentNode:e),Dt(function(){Ri(t,c,n,r)}),c}function Ii(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var c=yi(o);s.call(c)}}Ri(t,o,e,i)}else o=Af(n,t,e,i,r);return yi(o)}bc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(ja(t,n|1),ve(t,X()),!($&6)&&(gn=X()+500,kt()))}break;case 13:Dt(function(){var r=Ze(e,1);if(r!==null){var i=pe();Ae(r,e,1,i)}}),ro(e,1)}};Ca=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=pe();Ae(t,e,134217728,n)}ro(e,134217728)}};Sc=function(e){if(e.tag===13){var t=xt(e),n=Ze(e,t);if(n!==null){var r=pe();Ae(n,e,t,r)}ro(e,t)}};kc=function(){return _};jc=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};Pl=function(e,t,n){switch(t){case"input":if(Sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ei(r);if(!i)throw Error(b(90));tc(r),Sl(r,i)}}}break;case"textarea":rc(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};uc=Za;dc=Dt;var Df={usingClientEntryPoint:!1,Events:[mr,Xt,Ei,sc,cc,Za]},Ln={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Of={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||If,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{ki=_r.inject(Of),Ue=_r}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lo(t))throw Error(b(200));return _f(e,t,null,n)};je.createRoot=function(e,t){if(!lo(e))throw Error(b(299));var n=!1,r="",i=Yu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=no(e,1,!1,null,null,n,!1,r,i),e[Je]=t.current,er(e.nodeType===8?e.parentNode:e),new io(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=mc(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Dt(e)};je.hydrate=function(e,t,n){if(!_i(t))throw Error(b(200));return Ii(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!lo(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Yu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Hu(t,null,e,1,n??null,i,!1,l,o),e[Je]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $i(t)};je.render=function(e,t,n){if(!_i(t))throw Error(b(200));return Ii(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!_i(e))throw Error(b(40));return e._reactRootContainer?(Dt(function(){Ii(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};je.unstable_batchedUpdates=Za;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_i(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Ii(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function Vu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vu)}catch(e){console.error(e)}}Vu(),Vs.exports=je;var Ff=Vs.exports,Qu,Ss=Ff;Qu=Ss.createRoot,Ss.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(this,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const ks="popstate";function Gf(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return sa("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vi(i)}return Wf(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Uf(){return Math.random().toString(36).substr(2,8)}function js(e,t){return{usr:e.state,key:e.key,idx:t}}function sa(e,t,n,r){return n===void 0&&(n=null),cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?bn(t):t,{state:n,key:t&&t.key||r||Uf()})}function vi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function bn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wf(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=ct.Pop,c=null,u=h();u==null&&(u=0,o.replaceState(cr({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function f(){s=ct.Pop;let j=h(),p=j==null?null:j-u;u=j,c&&c({action:s,location:w.location,delta:p})}function x(j,p){s=ct.Push;let d=sa(w.location,j,p);u=h()+1;let m=js(d,u),y=w.createHref(d);try{o.pushState(m,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}l&&c&&c({action:s,location:w.location,delta:1})}function g(j,p){s=ct.Replace;let d=sa(w.location,j,p);u=h();let m=js(d,u),y=w.createHref(d);o.replaceState(m,"",y),l&&c&&c({action:s,location:w.location,delta:0})}function v(j){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:vi(j);return d=d.replace(/ $/,"%20"),J(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return s},get location(){return e(i,o)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ks,f),c=j,()=>{i.removeEventListener(ks,f),c=null}},createHref(j){return t(i,j)},createURL:v,encodeLocation(j){let p=v(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:x,replace:g,go(j){return o.go(j)}};return w}var Cs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cs||(Cs={}));function Hf(e,t,n){return n===void 0&&(n="/"),Yf(e,t,n,!1)}function Yf(e,t,n,r){let i=typeof t=="string"?bn(t):t,l=ao(i.pathname||"/",n);if(l==null)return null;let o=Ku(e);Vf(o);let s=null;for(let c=0;s==null&&c<o.length;++c){let u=i0(l);s=n0(o[c],u,r)}return s}function Ku(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let c={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};c.relativePath.startsWith("/")&&(J(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=yt([r,c.relativePath]),h=n.concat(c);l.children&&l.children.length>0&&(J(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ku(l.children,t,h,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:e0(u,l.index),routesMeta:h})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let c of Ju(l.path))i(l,o,c)}),t}function Ju(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=Ju(r.join("/")),s=[];return s.push(...o.map(c=>c===""?l:[l,c].join("/"))),i&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Vf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:t0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qf=/^:[\w-]+$/,Xf=3,Kf=2,Jf=1,Zf=10,qf=-2,Ns=e=>e==="*";function e0(e,t){let n=e.split("/"),r=n.length;return n.some(Ns)&&(r+=qf),t&&(r+=Kf),n.filter(i=>!Ns(i)).reduce((i,l)=>i+(Qf.test(l)?Xf:l===""?Jf:Zf),r)}function t0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function n0(e,t,n){let{routesMeta:r}=e,i={},l="/",o=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",f=Es({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),x=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Es({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:yt([l,f.pathname]),pathnameBase:s0(yt([l,f.pathnameBase])),route:x}),f.pathnameBase!=="/"&&(l=yt([l,f.pathnameBase]))}return o}function Es(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=r0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,h,f)=>{let{paramName:x,isOptional:g}=h;if(x==="*"){let w=s[f]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const v=s[f];return g&&!v?u[x]=void 0:u[x]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function r0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function i0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ao(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function l0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?bn(e):e;return{pathname:n?n.startsWith("/")?n:a0(n,t):t,search:c0(r),hash:u0(i)}}function a0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zu(e,t){let n=o0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=bn(e):(i=cr({},e),J(!i.pathname||!i.pathname.includes("?"),ml("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),ml("#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),ml("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),f-=1;i.pathname=x.join("/")}s=f>=0?t[f]:"/"}let c=l0(i,s),u=o&&o!=="/"&&o.endsWith("/"),h=(l||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const yt=e=>e.join("/").replace(/\/\/+/g,"/"),s0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),c0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,u0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function d0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ed=["post","put","patch","delete"];new Set(ed);const p0=["get",...ed];new Set(p0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(this,arguments)}const oo=S.createContext(null),f0=S.createContext(null),Gt=S.createContext(null),Ai=S.createContext(null),jt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),td=S.createContext(null);function m0(e,t){let{relative:n}=t===void 0?{}:t;xr()||J(!1);let{basename:r,navigator:i}=S.useContext(Gt),{hash:l,pathname:o,search:s}=id(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:yt([r,o])),i.createHref({pathname:c,search:s,hash:l})}function xr(){return S.useContext(Ai)!=null}function gr(){return xr()||J(!1),S.useContext(Ai).location}function nd(e){S.useContext(Gt).static||S.useLayoutEffect(e)}function so(){let{isDataRoute:e}=S.useContext(jt);return e?E0():h0()}function h0(){xr()||J(!1);let e=S.useContext(oo),{basename:t,future:n,navigator:r}=S.useContext(Gt),{matches:i}=S.useContext(jt),{pathname:l}=gr(),o=JSON.stringify(Zu(i,n.v7_relativeSplatPath)),s=S.useRef(!1);return nd(()=>{s.current=!0}),S.useCallback(function(u,h){if(h===void 0&&(h={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=qu(u,JSON.parse(o),l,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:yt([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,o,l,e])}function rd(){let{matches:e}=S.useContext(jt),t=e[e.length-1];return t?t.params:{}}function id(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Gt),{matches:i}=S.useContext(jt),{pathname:l}=gr(),o=JSON.stringify(Zu(i,r.v7_relativeSplatPath));return S.useMemo(()=>qu(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function x0(e,t){return g0(e,t)}function g0(e,t,n,r){xr()||J(!1);let{navigator:i}=S.useContext(Gt),{matches:l}=S.useContext(jt),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=gr(),h;if(t){var f;let j=typeof t=="string"?bn(t):t;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||J(!1),h=j}else h=u;let x=h.pathname||"/",g=x;if(c!=="/"){let j=c.replace(/^\//,"").split("/");g="/"+x.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=Hf(e,{pathname:g}),w=S0(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:yt([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:yt([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),l,n,r);return t&&w?S.createElement(Ai.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ct.Pop}},w):w}function y0(){let e=N0(),t=d0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const v0=S.createElement(y0,null);class w0 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(jt.Provider,{value:this.props.routeContext},S.createElement(td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b0(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(oo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(jt.Provider,{value:t},r)}function S0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let h=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);h>=0||J(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:x,errors:g}=n,v=f.route.loader&&x[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,f,x)=>{let g,v=!1,w=null,j=null;n&&(g=s&&f.route.id?s[f.route.id]:void 0,w=f.route.errorElement||v0,c&&(u<0&&x===0?(v=!0,j=null):u===x&&(v=!0,j=f.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,x+1)),d=()=>{let m;return g?m=w:v?m=j:f.route.Component?m=S.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,S.createElement(b0,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||x===0)?S.createElement(w0,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var ld=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ld||{}),wi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wi||{});function k0(e){let t=S.useContext(oo);return t||J(!1),t}function j0(e){let t=S.useContext(f0);return t||J(!1),t}function C0(e){let t=S.useContext(jt);return t||J(!1),t}function ad(e){let t=C0(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function N0(){var e;let t=S.useContext(td),n=j0(wi.UseRouteError),r=ad(wi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function E0(){let{router:e}=k0(ld.UseNavigateStable),t=ad(wi.UseNavigateStable),n=S.useRef(!1);return nd(()=>{n.current=!0}),S.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ur({fromRouteId:t},l)))},[e,t])}function z0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function nt(e){J(!1)}function P0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ct.Pop,navigator:l,static:o=!1,future:s}=e;xr()&&J(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:l,static:o,future:ur({v7_relativeSplatPath:!1},s)}),[c,s,l,o]);typeof r=="string"&&(r=bn(r));let{pathname:h="/",search:f="",hash:x="",state:g=null,key:v="default"}=r,w=S.useMemo(()=>{let j=ao(h,c);return j==null?null:{location:{pathname:j,search:f,hash:x,state:g,key:v},navigationType:i}},[c,h,f,x,g,v,i]);return w==null?null:S.createElement(Gt.Provider,{value:u},S.createElement(Ai.Provider,{children:n,value:w}))}function zs(e){let{children:t,location:n}=e;return x0(ca(t),n)}new Promise(()=>{});function ca(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let l=[...t,i];if(r.type===S.Fragment){n.push.apply(n,ca(r.props.children,l));return}r.type!==nt&&J(!1),!r.props.index||!r.props.children||J(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ca(r.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ua.apply(this,arguments)}function B0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function L0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function M0(e,t){return e.button===0&&(!t||t==="_self")&&!L0(e)}function da(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function T0(e,t){let n=da(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(l=>{n.append(i,l)})}),n}const R0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$0="6";try{window.__reactRouterVersion=$0}catch{}const _0="startTransition",Ps=Pd[_0];function I0(e){let{basename:t,children:n,future:r,window:i}=e,l=S.useRef();l.current==null&&(l.current=Gf({window:i,v5Compat:!0}));let o=l.current,[s,c]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=S.useCallback(f=>{u&&Ps?Ps(()=>c(f)):c(f)},[c,u]);return S.useLayoutEffect(()=>o.listen(h),[o,h]),S.useEffect(()=>z0(r),[r]),S.createElement(P0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const A0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",D0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,T=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:s,target:c,to:u,preventScrollReset:h,viewTransition:f}=t,x=B0(t,R0),{basename:g}=S.useContext(Gt),v,w=!1;if(typeof u=="string"&&D0.test(u)&&(v=u,A0))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=ao(y.pathname,g);y.origin===m.origin&&k!=null?u=k+y.search+y.hash:w=!0}catch{}let j=m0(u,{relative:i}),p=O0(u,{replace:o,state:s,target:c,preventScrollReset:h,relative:i,viewTransition:f});function d(m){r&&r(m),m.defaultPrevented||p(m)}return S.createElement("a",ua({},x,{href:v||j,onClick:w||l?r:d,ref:n,target:c}))});var Bs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bs||(Bs={}));var Ls;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ls||(Ls={}));function O0(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,viewTransition:s}=t===void 0?{}:t,c=so(),u=gr(),h=id(e,{relative:o});return S.useCallback(f=>{if(M0(f,n)){f.preventDefault();let x=r!==void 0?r:vi(u)===vi(h);c(e,{replace:x,state:i,preventScrollReset:l,relative:o,viewTransition:s})}},[u,c,h,r,i,n,e,l,o,s])}function F0(e){let t=S.useRef(da(e)),n=S.useRef(!1),r=gr(),i=S.useMemo(()=>T0(r.search,n.current?null:t.current),[r.search]),l=so(),o=S.useCallback((s,c)=>{const u=da(typeof s=="function"?s(i):s);n.current=!0,l("?"+u,c)},[l,i]);return[i,o]}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),H=(e,t)=>{const n=S.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:s="",children:c,...u},h)=>S.createElement("svg",{ref:h,...G0,width:i,height:i,stroke:r,strokeWidth:o?Number(l)*24/Number(i):l,className:["lucide",`lucide-${U0(e)}`,s].join(" "),...u},[...t.map(([f,x])=>S.createElement(f,x)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=H("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=H("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=H("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=H("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=H("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=H("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=H("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=H("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=H("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=H("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=H("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=H("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=H("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=H("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=H("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=H("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=H("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=H("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=H("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=H("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=H("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=H("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),de=[{id:"puzzle",name:"Puzzle",slug:"puzzle",description:"Brain-teasing games that challenge your logic and problem-solving skills",icon:"🧩",color:"from-purple-400 to-pink-400",gameCount:30},{id:"simulation",name:"Simulation",slug:"simulation",description:"Life-like experiences that let you build, manage, and create",icon:"🏗️",color:"from-blue-400 to-cyan-400",gameCount:30},{id:"adventure",name:"Adventure",slug:"adventure",description:"Peaceful exploration and discovery games",icon:"🗺️",color:"from-green-400 to-emerald-400",gameCount:30},{id:"casual",name:"Casual",slug:"casual",description:"Easy-to-play games perfect for quick relaxation breaks",icon:"🎯",color:"from-yellow-400 to-orange-400",gameCount:30},{id:"creative",name:"Creative",slug:"creative",description:"Express yourself through art, music, and design",icon:"🎨",color:"from-indigo-400 to-purple-400",gameCount:30},{id:"nature",name:"Nature",slug:"nature",description:"Connect with the natural world through immersive experiences",icon:"🌲",color:"from-green-400 to-teal-400",gameCount:30}],tm=(e,t,n,r)=>{const i=`game-${e.toLowerCase().replace(/[^\w]/g,"")}`;switch(t){case"puzzle":return $s(i,e,n,r);case"simulation":return om(i,e,n);case"adventure":return sm(i,e,n);case"casual":return cm(i,e,n);case"creative":return um(i,e,n);case"nature":return dm(i,e,n);default:return $s(i,e,n,r)}},$s=(e,t,n,r)=>t==="2048"?nm(e,t,n):t==="Tetris"?rm(e,t,n):t.includes("Match")?im(e,t,n):t.includes("Sudoku")?lm(e,t,n):am(e,t,n,r),nm=(e,t,n)=>`
<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 100vh; box-sizing: border-box; overflow: visible;">
  <h1 style="margin: 0 0 20px 0; color: white; font-size: 36px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${n} ${t}</h1>
  
  ${po()}
  
  <div style="background: #bbada0; padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${e}" width="520" height="520" style="background: #cdc1b4; border-radius: 12px; display: block;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #667eea, #764ba2); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(102,126,234,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(102,126,234,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(102,126,234,0.4)';">New Game</button>
    <button id="undoBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #f093fb, #f5576c); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(245,87,108,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Undo</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #776e65; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">SCORE</div>
      <div id="score${e}" style="font-size: 32px; font-weight: 900; color: #776e65;">0</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #776e65; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">BEST</div>
      <div id="best${e}" style="font-size: 32px; font-weight: 900; color: #776e65;">0</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 500px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #776e65; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #776e65; line-height: 1.6;">Use <strong>ARROW KEYS</strong> to move tiles. When two tiles with the same number touch, they <strong>merge into one</strong>! Try to reach the <strong>2048</strong> tile!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    const startBtn = document.getElementById('startBtn${e}');
    const undoBtn = document.getElementById('undoBtn${e}');
    
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 4;
    const tileSize = 120;
    const tileMargin = 10;
    let grid = [];
    let previousGrid = [];
    let score = 0;
    let previousScore = 0;
    let bestScore = parseInt(localStorage.getItem('2048-best') || '0');
    let animationFrameId;
    let isAnimating = false;
    
    const tileColors = {
      2: {bg: '#eee4da', text: '#776e65'},
      4: {bg: '#ede0c8', text: '#776e65'},
      8: {bg: '#f2b179', text: '#f9f6f2'},
      16: {bg: '#f59563', text: '#f9f6f2'},
      32: {bg: '#f67c5f', text: '#f9f6f2'},
      64: {bg: '#f65e3b', text: '#f9f6f2'},
      128: {bg: '#edcf72', text: '#f9f6f2'},
      256: {bg: '#edcc61', text: '#f9f6f2'},
      512: {bg: '#edc850', text: '#f9f6f2'},
      1024: {bg: '#edc53f', text: '#f9f6f2'},
      2048: {bg: '#edc22e', text: '#f9f6f2'}
    };
    
    function updateScore() {
      document.getElementById('score${e}').textContent = score.toLocaleString();
      if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('2048-best', bestScore.toString());
      }
      document.getElementById('best${e}').textContent = bestScore.toLocaleString();
    }
    
    function saveState() {
      previousGrid = grid.map(row => [...row]);
      previousScore = score;
    }
    
    function undo() {
      if (previousGrid.length > 0) {
        grid = previousGrid.map(row => [...row]);
        score = previousScore;
        updateScore();
        drawGrid();
      }
    }
    
    function initGrid() {
      grid = Array(gridSize).fill().map(() => Array(gridSize).fill(0));
      score = 0;
      previousGrid = [];
      updateScore();
      addNewTile();
      addNewTile();
      drawGrid();
    }
    
    function addNewTile() {
      const emptyCells = [];
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] === 0) {
            emptyCells.push({x: i, y: j});
          }
        }
      }
      
      if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[randomCell.x][randomCell.y] = Math.random() < 0.9 ? 2 : 4;
      }
    }
    
    function drawTile(value, x, y, opacity = 1) {
      const colors = tileColors[value] || {bg: '#3c3a32', text: '#f9f6f2'};
      
      // 绘制阴影
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(x + 3, y + 3, tileSize - 4, tileSize - 4);
      
      // 绘制tile背景
      ctx.fillStyle = colors.bg;
      ctx.globalAlpha = opacity;
      ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
      
      // 绘制数字
      if (value > 0) {
        ctx.fillStyle = colors.text;
        const fontSize = value < 100 ? 48 : value < 1000 ? 42 : 36;
        ctx.font = \`bold \${fontSize}px 'Segoe UI', Arial, sans-serif\`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(value.toString(), x + tileSize/2, y + tileSize/2);
      }
      
      ctx.globalAlpha = 1;
    }
    
    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制背景网格
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const x = j * (tileSize + tileMargin) + tileMargin;
          const y = i * (tileSize + tileMargin) + tileMargin;
          
          // 背景格子
          ctx.fillStyle = 'rgba(255,255,255,0.35)';
          ctx.fillRect(x, y, tileSize, tileSize);
          
          // 格子内阴影
          ctx.fillStyle = '#bbada0';
          ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
        }
      }
      
      // 绘制tiles
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] !== 0) {
            const x = j * (tileSize + tileMargin) + tileMargin;
            const y = i * (tileSize + tileMargin) + tileMargin;
            drawTile(grid[i][j], x, y);
          }
        }
      }
    }
    
    function animateMove(direction) {
      if (isAnimating) return false;
      
      const newGrid = grid.map(row => [...row]);
      let moved = false;
      let scoreIncrease = 0;
      
      if (direction === 'left' || direction === 'right') {
        for (let i = 0; i < gridSize; i++) {
          let row = newGrid[i];
          if (direction === 'right') row = row.reverse();
          
          row = row.filter(val => val !== 0);
          
          for (let j = 0; j < row.length - 1; j++) {
            if (row[j] === row[j + 1]) {
              row[j] *= 2;
              scoreIncrease += row[j];
              row[j + 1] = 0;
              moved = true;
            }
          }
          
          row = row.filter(val => val !== 0);
          while (row.length < gridSize) {
            row.push(0);
          }
          
          if (direction === 'right') row = row.reverse();
          
          for (let j = 0; j < gridSize; j++) {
            if (newGrid[i][j] !== row[j]) moved = true;
            newGrid[i][j] = row[j];
          }
        }
      } else {
        for (let j = 0; j < gridSize; j++) {
          let column = [];
          for (let i = 0; i < gridSize; i++) {
            column.push(newGrid[i][j]);
          }
          
          if (direction === 'down') column = column.reverse();
          
          column = column.filter(val => val !== 0);
          
          for (let i = 0; i < column.length - 1; i++) {
            if (column[i] === column[i + 1]) {
              column[i] *= 2;
              scoreIncrease += column[i];
              column[i + 1] = 0;
              moved = true;
            }
          }
          
          column = column.filter(val => val !== 0);
          while (column.length < gridSize) {
            column.push(0);
          }
          
          if (direction === 'down') column = column.reverse();
          
          for (let i = 0; i < gridSize; i++) {
            if (newGrid[i][j] !== column[i]) moved = true;
            newGrid[i][j] = column[i];
          }
        }
      }
      
      if (moved) {
        isAnimating = true;
        score += scoreIncrease;
        updateScore();
        
        // 动画效果
        let animationProgress = 0;
        const animationDuration = 150;
        const startTime = Date.now();
        
        function animate() {
          const currentTime = Date.now();
          animationProgress = (currentTime - startTime) / animationDuration;
          
          if (animationProgress < 1) {
            // 在动画期间绘制中间状态
            drawGrid();
            animationFrameId = requestAnimationFrame(animate);
          } else {
            grid = newGrid;
            addNewTile();
            drawGrid();
            isAnimating = false;
            
            // 检查游戏结束
            if (checkGameOver()) {
              setTimeout(() => {
                updatePlayerBest(score);
                eval(generateLevelCompleteModal('${e}', 1, score, 0));
              }, 100);
            } else if (hasWon()) {
              setTimeout(() => {
                updatePlayerBest(score);
                eval(generateLevelCompleteModal('${e}', 1, score, 500));
              }, 100);
            }
          }
        }
        
        animate();
      }
      
      return moved;
    }
    
    function checkGameOver() {
      // 检查是否有空格
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] === 0) return false;
        }
      }
      
      // 检查是否可以合并
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const current = grid[i][j];
          if ((i < gridSize - 1 && grid[i + 1][j] === current) ||
              (j < gridSize - 1 && grid[i][j + 1] === current)) {
            return false;
          }
        }
      }
      
      return true;
    }
    
    function hasWon() {
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (grid[i][j] === 2048) return true;
        }
      }
      return false;
    }
    
    document.addEventListener('keydown', function(e) {
      if (isAnimating) return;
      
      let moved = false;
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          saveState();
          moved = animateMove('left');
          break;
        case 'ArrowRight':
          e.preventDefault();
          saveState();
          moved = animateMove('right');
          break;
        case 'ArrowUp':
          e.preventDefault();
          saveState();
          moved = animateMove('up');
          break;
        case 'ArrowDown':
          e.preventDefault();
          saveState();
          moved = animateMove('down');
          break;
      }
    });
    
    startBtn.addEventListener('click', initGrid);
    undoBtn.addEventListener('click', undo);
    
    // 初始化
    updateScore();
    initGrid();
  }, 100);
})();
<\/script>`,rm=(e,t,n)=>`
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${n} ${t}</h1>
  
  ${po()}
  
  <div style="display: flex; gap: 30px; align-items: flex-start;">
    <div style="background: #2c3e50; padding: 20px; border-radius: 16px; border: 4px solid #34495e; box-shadow: 0 12px 30px rgba(0,0,0,0.3);">
      <canvas id="${e}" width="320" height="640" style="background: linear-gradient(180deg, #1a252f 0%, #2c3e50 100%); border-radius: 8px; display: block;"></canvas>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="background: rgba(255,255,255,0.95); padding: 25px; border-radius: 16px; min-width: 180px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 15px;">
          <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">SCORE</div>
          <div id="score${e}" style="font-size: 28px; font-weight: 900; color: #2c3e50;">0</div>
        </div>
        <div style="text-align: center; margin-bottom: 15px;">
          <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">LINES</div>
          <div id="lines${e}" style="font-size: 24px; font-weight: 900; color: #e67e22;">0</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 14px; color: #7f8c8d; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">LEVEL</div>
          <div id="level${e}" style="font-size: 24px; font-weight: 900; color: #27ae60;">1</div>
        </div>
      </div>
      
      <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 15px; font-weight: bold; color: #2c3e50; font-size: 16px;">NEXT</div>
        <canvas id="next${e}" width="120" height="120" style="background: #ecf0f1; border-radius: 8px; display: block;"></canvas>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <button id="startBtn${e}" style="padding: 15px 25px; background: linear-gradient(45deg, #27ae60, #2ecc71); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; box-shadow: 0 6px 20px rgba(39,174,96,0.4); transition: all 0.3s ease;">Start</button>
        <button id="pauseBtn${e}" style="padding: 15px 25px; background: linear-gradient(45deg, #f39c12, #e67e22); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; box-shadow: 0 6px 20px rgba(243,156,18,0.4); transition: all 0.3s ease;">Pause</button>
        <button id="resetBtn${e}" style="padding: 15px 25px; background: linear-gradient(45deg, #e74c3c, #c0392b); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px; box-shadow: 0 6px 20px rgba(231,76,60,0.4); transition: all 0.3s ease;">Reset</button>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; margin-top: 25px; max-width: 550px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #2c3e50; margin-bottom: 10px; font-size: 16px;">CONTROLS</div>
    <div style="font-size: 15px; color: #7f8c8d; line-height: 1.6;"><strong>←→</strong> Move | <strong>↓</strong> Soft Drop | <strong>↑</strong> Rotate | <strong>Space</strong> Hard Drop</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    const nextCanvas = document.getElementById('next${e}');
    const startBtn = document.getElementById('startBtn${e}');
    const pauseBtn = document.getElementById('pauseBtn${e}');
    const resetBtn = document.getElementById('resetBtn${e}');
    
    if (!canvas || !nextCanvas) return;
    
    const ctx = canvas.getContext('2d');
    const nextCtx = nextCanvas.getContext('2d');
    
    const ROWS = 20;
    const COLS = 10;
    const BLOCK_SIZE = 32;
    
    let board = Array(ROWS).fill().map(() => Array(COLS).fill(null));
    let score = 0;
    let lines = 0;
    let level = 1;
    let gameRunning = false;
    let gamePaused = false;
    let dropTime = 0;
    let dropInterval = 1000;
    
    const pieces = [
      {shape: [[1,1,1,1]], color: '#00f5ff', name: 'I'},
      {shape: [[1,1],[1,1]], color: '#ffff00', name: 'O'},
      {shape: [[1,1,1],[0,1,0]], color: '#800080', name: 'T'},
      {shape: [[1,1,1],[1,0,0]], color: '#ffa500', name: 'L'},
      {shape: [[1,1,1],[0,0,1]], color: '#0000ff', name: 'J'},
      {shape: [[0,1,1],[1,1,0]], color: '#00ff00', name: 'S'},
      {shape: [[1,1,0],[0,1,1]], color: '#ff0000', name: 'Z'}
    ];
    
    let currentPiece = null;
    let nextPiece = null;
    let ghostPiece = null;
    
    function updateStats() {
      document.getElementById('score${e}').textContent = score.toLocaleString();
      document.getElementById('lines${e}').textContent = lines;
      document.getElementById('level${e}').textContent = level;
    }
    
    function drawBlock(ctx, x, y, color, size = BLOCK_SIZE) {
      if (!color) return;
      
      // 绘制方块主体
      ctx.fillStyle = color;
      ctx.fillRect(x, y, size, size);
      
      // 绘制高光
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fillRect(x, y, size, 4);
      ctx.fillRect(x, y, 4, size);
      
      // 绘制阴影
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.fillRect(x, y + size - 4, size, 4);
      ctx.fillRect(x + size - 4, y, 4, size);
      
      // 绘制边框
      ctx.strokeStyle = 'rgba(255,255,255,0.8)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 0.5, y + 0.5, size - 1, size - 1);
    }
    
    function drawBoard() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 绘制网格背景
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= COLS; i++) {
        ctx.beginPath();
        ctx.moveTo(i * BLOCK_SIZE, 0);
        ctx.lineTo(i * BLOCK_SIZE, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i <= ROWS; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * BLOCK_SIZE);
        ctx.lineTo(canvas.width, i * BLOCK_SIZE);
        ctx.stroke();
      }
      
      // 绘制已放置的方块
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          if (board[row][col]) {
            drawBlock(ctx, col * BLOCK_SIZE, row * BLOCK_SIZE, board[row][col]);
          }
        }
      }
      
      // 绘制幽灵方块（预览位置）
      if (currentPiece && ghostPiece) {
        ctx.globalAlpha = 0.3;
        for (let row = 0; row < ghostPiece.shape.length; row++) {
          for (let col = 0; col < ghostPiece.shape[row].length; col++) {
            if (ghostPiece.shape[row][col]) {
              drawBlock(ctx, (ghostPiece.x + col) * BLOCK_SIZE, (ghostPiece.y + row) * BLOCK_SIZE, currentPiece.color);
            }
          }
        }
        ctx.globalAlpha = 1;
      }
      
      // 绘制当前方块
      if (currentPiece) {
        for (let row = 0; row < currentPiece.shape.length; row++) {
          for (let col = 0; col < currentPiece.shape[row].length; col++) {
            if (currentPiece.shape[row][col]) {
              drawBlock(ctx, (currentPiece.x + col) * BLOCK_SIZE, (currentPiece.y + row) * BLOCK_SIZE, currentPiece.color);
            }
          }
        }
      }
    }
    
    function drawNext() {
      nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
      if (nextPiece) {
        const offsetX = (nextCanvas.width - nextPiece.shape[0].length * 25) / 2;
        const offsetY = (nextCanvas.height - nextPiece.shape.length * 25) / 2;
        
        for (let row = 0; row < nextPiece.shape.length; row++) {
          for (let col = 0; col < nextPiece.shape[row].length; col++) {
            if (nextPiece.shape[row][col]) {
              drawBlock(nextCtx, col * 25 + offsetX, row * 25 + offsetY, nextPiece.color, 25);
            }
          }
        }
      }
    }
    
    function createPiece() {
      const piece = pieces[Math.floor(Math.random() * pieces.length)];
      return {
        shape: piece.shape.map(row => [...row]),
        color: piece.color,
        name: piece.name,
        x: Math.floor(COLS / 2) - Math.floor(piece.shape[0].length / 2),
        y: 0
      };
    }
    
    function isValidMove(piece, dx, dy, newShape) {
      const shape = newShape || piece.shape;
      for (let row = 0; row < shape.length; row++) {
        for (let col = 0; col < shape[row].length; col++) {
          if (shape[row][col]) {
            const newX = piece.x + col + dx;
            const newY = piece.y + row + dy;
            
            if (newX < 0 || newX >= COLS || newY >= ROWS) return false;
            if (newY >= 0 && board[newY][newX]) return false;
          }
        }
      }
      return true;
    }
    
    function rotatePiece(piece) {
      const rotated = piece.shape[0].map((_, index) =>
        piece.shape.map(row => row[index]).reverse()
      );
      
      if (isValidMove(piece, 0, 0, rotated)) {
        piece.shape = rotated;
        updateGhostPiece();
        return true;
      }
      return false;
    }
    
    function updateGhostPiece() {
      if (!currentPiece) return;
      
      ghostPiece = {
        shape: currentPiece.shape.map(row => [...row]),
        x: currentPiece.x,
        y: currentPiece.y
      };
      
      while (isValidMove(ghostPiece, 0, 1)) {
        ghostPiece.y++;
      }
    }
    
    function placePiece() {
      for (let row = 0; row < currentPiece.shape.length; row++) {
        for (let col = 0; col < currentPiece.shape[row].length; col++) {
          if (currentPiece.shape[row][col]) {
            if (currentPiece.y + row < 0) {
              gameRunning = false;
              alert('Game Over! Score: ' + score.toLocaleString());
              return;
            }
            board[currentPiece.y + row][currentPiece.x + col] = currentPiece.color;
          }
        }
      }
      
      clearLines();
      currentPiece = nextPiece;
      nextPiece = createPiece();
      updateGhostPiece();
      
      if (!isValidMove(currentPiece, 0, 0)) {
        gameRunning = false;
        alert('Game Over! Score: ' + score.toLocaleString());
      }
    }
    
    function clearLines() {
      let linesCleared = 0;
      for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row].every(cell => cell !== null)) {
          // 添加闪烁效果
          board.splice(row, 1);
          board.unshift(Array(COLS).fill(null));
          linesCleared++;
          row++;
        }
      }
      
      if (linesCleared > 0) {
        lines += linesCleared;
        score += [0, 100, 300, 500, 800][linesCleared] * level;
        level = Math.floor(lines / 10) + 1;
        dropInterval = Math.max(50, 1000 - (level - 1) * 50);
        updateStats();
      }
    }
    
    function gameLoop(timestamp) {
      if (!gameRunning || gamePaused) {
        if (gameRunning) requestAnimationFrame(gameLoop);
        return;
      }
      
      if (timestamp - dropTime > dropInterval) {
        if (isValidMove(currentPiece, 0, 1)) {
          currentPiece.y++;
          updateGhostPiece();
        } else {
          placePiece();
        }
        dropTime = timestamp;
      }
      
      drawBoard();
      drawNext();
      requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
      board = Array(ROWS).fill().map(() => Array(COLS).fill(null));
      score = 0;
      lines = 0;
      level = 1;
      dropInterval = 1000;
      currentPiece = createPiece();
      nextPiece = createPiece();
      updateGhostPiece();
      gameRunning = true;
      gamePaused = false;
      updateStats();
      requestAnimationFrame(gameLoop);
    }
    
    document.addEventListener('keydown', function(e) {
      if (!gameRunning || gamePaused || !currentPiece) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (isValidMove(currentPiece, -1, 0)) {
            currentPiece.x--;
            updateGhostPiece();
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (isValidMove(currentPiece, 1, 0)) {
            currentPiece.x++;
            updateGhostPiece();
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (isValidMove(currentPiece, 0, 1)) {
            currentPiece.y++;
            score++;
            updateStats();
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          rotatePiece(currentPiece);
          break;
        case ' ':
          e.preventDefault();
          while (isValidMove(currentPiece, 0, 1)) {
            currentPiece.y++;
            score += 2;
          }
          updateStats();
          break;
      }
    });
    
    startBtn.addEventListener('click', startGame);
    pauseBtn.addEventListener('click', () => {
      gamePaused = !gamePaused;
      pauseBtn.textContent = gamePaused ? 'Resume' : 'Pause';
      if (!gamePaused && gameRunning) requestAnimationFrame(gameLoop);
    });
    resetBtn.addEventListener('click', () => {
      gameRunning = false;
      gamePaused = false;
      pauseBtn.textContent = 'Pause';
      drawBoard();
      drawNext();
    });
    
    updateStats();
  }, 100);
})();
<\/script>`,im=(e,t,n)=>`
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${n} ${t}</h1>
  
  <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${e}" width="480" height="480" style="background: #f8f9fa; border-radius: 12px; display: block;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #ff6b6b, #ffa500); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(255,107,107,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(255,107,107,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(255,107,107,0.4)';">New Game</button>
    <button id="hintBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #4ecdc4, #44a08d); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(78,205,196,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Hint</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">SCORE</div>
      <div id="score${e}" style="font-size: 32px; font-weight: 900; color: #333;">0</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">MOVES</div>
      <div id="moves${e}" style="font-size: 32px; font-weight: 900; color: #333;">0</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 500px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Click to swap adjacent gems and create matches of 3 or more. Chain combos for higher scores!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 8;
    const tileSize = 55;
    const margin = 10;
    let grid = [];
    let score = 0;
    let moves = 0;
    let selectedTile = null;
    let animating = false;
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8', '#f7dc6f'];
    
    function initGame() {
      grid = [];
      for (let row = 0; row < gridSize; row++) {
        grid[row] = [];
        for (let col = 0; col < gridSize; col++) {
          grid[row][col] = Math.floor(Math.random() * colors.length);
        }
      }
      removeMatches();
      score = 0;
      moves = 0;
      updateUI();
      draw();
    }
    
    function draw() {
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          const x = col * (tileSize + 2) + margin;
          const y = row * (tileSize + 2) + margin;
          
          ctx.fillStyle = colors[grid[row][col]];
          ctx.beginPath();
          ctx.roundRect(x, y, tileSize, tileSize, 8);
          ctx.fill();
          
          if (selectedTile && selectedTile.row === row && selectedTile.col === col) {
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 4;
            ctx.stroke();
          }
          
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(x + tileSize/2, y + tileSize/2, 15, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    
    function removeMatches() {
      let hasMatches = true;
      while (hasMatches) {
        hasMatches = false;
        const toRemove = [];
        
        for (let row = 0; row < gridSize; row++) {
          for (let col = 0; col < gridSize - 2; col++) {
            if (grid[row][col] === grid[row][col + 1] && grid[row][col] === grid[row][col + 2]) {
              toRemove.push([row, col], [row, col + 1], [row, col + 2]);
              hasMatches = true;
            }
          }
        }
        
        for (let col = 0; col < gridSize; col++) {
          for (let row = 0; row < gridSize - 2; row++) {
            if (grid[row][col] === grid[row + 1][col] && grid[row][col] === grid[row + 2][col]) {
              toRemove.push([row, col], [row + 1, col], [row + 2, col]);
              hasMatches = true;
            }
          }
        }
        
        if (hasMatches) {
          score += toRemove.length * 10;
          toRemove.forEach(([row, col]) => {
            grid[row][col] = Math.floor(Math.random() * colors.length);
          });
        }
      }
    }
    
    function updateUI() {
      document.getElementById('score${e}').textContent = score.toLocaleString();
      document.getElementById('moves${e}').textContent = moves;
    }
    
    canvas.addEventListener('click', function(e) {
      if (animating) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const col = Math.floor((x - margin) / (tileSize + 2));
      const row = Math.floor((y - margin) / (tileSize + 2));
      
      if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
        if (!selectedTile) {
          selectedTile = {row, col};
        } else {
          if (Math.abs(selectedTile.row - row) + Math.abs(selectedTile.col - col) === 1) {
            const temp = grid[selectedTile.row][selectedTile.col];
            grid[selectedTile.row][selectedTile.col] = grid[row][col];
            grid[row][col] = temp;
            
            removeMatches();
            moves++;
            updateUI();
          }
          selectedTile = null;
        }
        draw();
      }
    });
    
    document.getElementById('startBtn${e}').addEventListener('click', initGame);
    document.getElementById('hintBtn${e}').addEventListener('click', function() {
      selectedTile = null;
      draw();
    });
    
    initGame();
  }, 100);
})();
<\/script>`,lm=(e,t,n)=>`
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${n} ${t}</h1>
  
  <div style="background: white; padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${e}" width="450" height="450" style="border: 3px solid #333; border-radius: 8px; display: block;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="newBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #6a11cb, #2575fc); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(106,17,203,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(106,17,203,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(106,17,203,0.4)';">New Puzzle</button>
    <button id="checkBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #11998e, #38ef7d); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(17,153,142,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Check</button>
    <button id="hintBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #fc466b, #3f5efb); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(252,70,107,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Hint</button>
  </div>
  
  <div style="display: grid; grid-template-columns: repeat(9, 1fr); gap: 8px; margin-bottom: 25px; background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    ${Array.from({length:9},(r,i)=>`<button class="number-btn-${e}" data-number="${i+1}" style="width: 40px; height: 40px; border: 2px solid #6a11cb; background: white; color: #6a11cb; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 18px; transition: all 0.2s ease;" onmouseover="this.style.background='#6a11cb'; this.style.color='white';" onmouseout="this.style.background='white'; this.style.color='#6a11cb';">${i+1}</button>`).join("")}
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 500px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Fill the 9×9 grid so that each row, column and 3×3 box contains all digits 1-9. Click a cell and then click a number to place it.</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 9;
    const cellSize = 50;
    let puzzle = [];
    let solution = [];
    let userInput = [];
    let selectedCell = null;
    
    function generateSudoku() {
      const base = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
      ];
      
      puzzle = base.map(row => [...row]);
      userInput = puzzle.map(row => row.map(cell => cell === 0 ? 0 : cell));
      solution = [
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]
      ];
    }
    
    function draw() {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      
      for (let i = 0; i <= 9; i++) {
        ctx.lineWidth = (i % 3 === 0) ? 3 : 1;
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, gridSize * cellSize);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(gridSize * cellSize, i * cellSize);
        ctx.stroke();
      }
      
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          const x = col * cellSize + cellSize / 2;
          const y = row * cellSize + cellSize / 2;
          
          if (selectedCell && selectedCell.row === row && selectedCell.col === col) {
            ctx.fillStyle = '#e3f2fd';
            ctx.fillRect(col * cellSize + 1, row * cellSize + 1, cellSize - 2, cellSize - 2);
          }
          
          if (userInput[row][col] !== 0) {
            ctx.fillStyle = puzzle[row][col] !== 0 ? '#333' : '#2196F3';
            ctx.fillText(userInput[row][col].toString(), x, y);
          }
        }
      }
    }
    
    canvas.addEventListener('click', function(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      
      if (row >= 0 && row < gridSize && col >= 0 && col < gridSize && puzzle[row][col] === 0) {
        selectedCell = {row, col};
        draw();
      }
    });
    
    document.querySelectorAll('.number-btn-${e}').forEach(btn => {
      btn.addEventListener('click', function() {
        if (selectedCell) {
          const number = parseInt(this.dataset.number);
          userInput[selectedCell.row][selectedCell.col] = number;
          draw();
        }
      });
    });
    
    document.getElementById('newBtn${e}').addEventListener('click', function() {
      generateSudoku();
      selectedCell = null;
      draw();
    });
    
    document.getElementById('checkBtn${e}').addEventListener('click', function() {
      let correct = true;
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          if (userInput[row][col] !== solution[row][col]) {
            correct = false;
            break;
          }
        }
        if (!correct) break;
      }
      alert(correct ? 'Congratulations! Puzzle solved!' : 'Not quite right, keep trying!');
    });
    
    document.getElementById('hintBtn${e}').addEventListener('click', function() {
      if (selectedCell) {
        userInput[selectedCell.row][selectedCell.col] = solution[selectedCell.row][selectedCell.col];
        draw();
      }
    });
    
    generateSudoku();
    draw();
  }, 100);
})();
<\/script>`,am=(e,t,n,r)=>{const i=["chess","crossword","jigsaw","word-search","logic-puzzle"],l=i[r%i.length];return`
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #8360c3 0%, #2ebf91 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${n} ${t}</h1>
  
  ${po()}
  
  <div style="background: white; padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${e}" width="500" height="500" style="border: 2px solid #8360c3; border-radius: 12px; display: block;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #8360c3, #2ebf91); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(131,96,195,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(131,96,195,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(131,96,195,0.4)';">New Game</button>
    <button id="hintBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #f093fb, #f5576c); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(240,147,251,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Hint</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">LEVEL</div>
      <div id="level${e}" style="font-size: 32px; font-weight: 900; color: #333;">1</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">TIME</div>
      <div id="time${e}" style="font-size: 32px; font-weight: 900; color: #333;">0:00</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 500px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Solve challenging ${l.replace("-"," ")} puzzles with increasing difficulty. Use logic and strategy to complete each level!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let level = 1;
    let startTime = Date.now();
    let gameState = 'playing';
    let pieces = [];
    
    function initGame() {
      pieces = [];
      const numPieces = 5 + level * 2;
      
      for (let i = 0; i < numPieces; i++) {
        pieces.push({
          x: Math.random() * (canvas.width - 60),
          y: Math.random() * (canvas.height - 60),
          width: 40 + Math.random() * 40,
          height: 40 + Math.random() * 40,
          color: \`hsl(\${Math.random() * 360}, 70%, 60%)\`,
          targetX: (i % 5) * 80 + 50,
          targetY: Math.floor(i / 5) * 80 + 50,
          placed: false,
          dragging: false
        });
      }
      
      startTime = Date.now();
      gameState = 'playing';
      updateUI();
      draw();
    }
    
    function draw() {
      ctx.fillStyle = '#f8f9fa';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      pieces.forEach(piece => {
        if (!piece.placed) {
          ctx.strokeStyle = '#ddd';
          ctx.setLineDash([5, 5]);
          ctx.strokeRect(piece.targetX, piece.targetY, piece.width, piece.height);
          ctx.setLineDash([]);
        }
      });
      
      pieces.forEach(piece => {
        ctx.fillStyle = piece.color;
        ctx.fillRect(piece.x, piece.y, piece.width, piece.height);
        
        if (piece.placed) {
          ctx.strokeStyle = '#4CAF50';
          ctx.lineWidth = 3;
          ctx.strokeRect(piece.x, piece.y, piece.width, piece.height);
        }
      });
    }
    
    function updateUI() {
      document.getElementById('level${e}').textContent = level;
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(elapsed / 60);
      const seconds = elapsed % 60;
      document.getElementById('time${e}').textContent = \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
    }
    
    function checkWin() {
      if (pieces.every(piece => piece.placed)) {
        const currentScore = level * 100 + Math.max(0, 300 - Math.floor((Date.now() - startTime) / 1000)) * 5;
        const timeBonus = Math.max(0, 300 - Math.floor((Date.now() - startTime) / 1000)) * 5;
        updatePlayerBest(currentScore);
        
        level++;
        setTimeout(() => {
          eval(generateLevelCompleteModal('${e}', level - 1, currentScore, timeBonus));
          setTimeout(() => initGame(), 2000);
        }, 500);
      }
    }
    
    let dragPiece = null;
    let dragOffset = {x: 0, y: 0};
    
    canvas.addEventListener('mousedown', function(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      for (let i = pieces.length - 1; i >= 0; i--) {
        const piece = pieces[i];
        if (x >= piece.x && x <= piece.x + piece.width && 
            y >= piece.y && y <= piece.y + piece.height && !piece.placed) {
          dragPiece = piece;
          dragOffset.x = x - piece.x;
          dragOffset.y = y - piece.y;
          break;
        }
      }
    });
    
    canvas.addEventListener('mousemove', function(e) {
      if (dragPiece) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        dragPiece.x = x - dragOffset.x;
        dragPiece.y = y - dragOffset.y;
        draw();
      }
    });
    
    canvas.addEventListener('mouseup', function(e) {
      if (dragPiece) {
        const distance = Math.sqrt(
          Math.pow(dragPiece.x - dragPiece.targetX, 2) + 
          Math.pow(dragPiece.y - dragPiece.targetY, 2)
        );
        
        if (distance < 30) {
          dragPiece.x = dragPiece.targetX;
          dragPiece.y = dragPiece.targetY;
          dragPiece.placed = true;
          checkWin();
        }
        
        dragPiece = null;
        draw();
      }
    });
    
    document.getElementById('startBtn${e}').addEventListener('click', initGame);
    document.getElementById('hintBtn${e}').addEventListener('click', function() {
      const unplaced = pieces.find(p => !p.placed);
      if (unplaced) {
        ctx.strokeStyle = '#FF5722';
        ctx.lineWidth = 5;
        ctx.setLineDash([10, 10]);
        ctx.strokeRect(unplaced.targetX, unplaced.targetY, unplaced.width, unplaced.height);
        setTimeout(() => draw(), 2000);
      }
    });
    
    setInterval(updateUI, 1000);
    initGame();
  }, 100);
})();
<\/script>`},om=(e,t,n,r)=>`
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${n} ${t}</h1>
  
  <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${e}" width="600" height="500" style="border: 2px solid #3b82f6; border-radius: 12px; display: block; cursor: pointer;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #3b82f6, #1e40af); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(59,130,246,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(59,130,246,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(59,130,246,0.4)';">Start Business</button>
    <button id="upgradeBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #10b981, #059669); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(16,185,129,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Upgrade</button>
    <button id="resetBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #f59e0b, #d97706); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(245,158,11,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Reset</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">MONEY</div>
      <div id="money${e}" style="font-size: 32px; font-weight: 900; color: #059669;">$1,000</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">INCOME</div>
      <div id="income${e}" style="font-size: 32px; font-weight: 900; color: #3b82f6;">$0/sec</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">BUILDINGS</div>
      <div id="buildings${e}" style="font-size: 32px; font-weight: 900; color: #8b5cf6;">0</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 600px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Click to place buildings and grow your business empire. Earn money automatically, upgrade your buildings for higher income, and watch your ${t.toLowerCase()} flourish! Strategic placement and smart investments are key to success.</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let money = 1000;
    let income = 0;
    let buildings = [];
    let gameRunning = false;
    let lastIncomeTime = Date.now();
    let animationId;
    
    const buildingTypes = [
      {name: 'Shop', cost: 100, income: 1, color: '#ef4444', size: 40},
      {name: 'Office', cost: 500, income: 5, color: '#3b82f6', size: 50},
      {name: 'Factory', cost: 2000, income: 20, color: '#8b5cf6', size: 60},
      {name: 'Tower', cost: 10000, income: 100, color: '#f59e0b', size: 80}
    ];
    
    function updateUI() {
      document.getElementById('money${e}').textContent = '$' + money.toLocaleString();
      document.getElementById('income${e}').textContent = '$' + income + '/sec';
      document.getElementById('buildings${e}').textContent = buildings.length;
    }
    
    function drawGame() {
      ctx.fillStyle = '#f0f9ff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = '#e0e7ff';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw buildings
      buildings.forEach((building, index) => {
        ctx.fillStyle = building.color;
        ctx.fillRect(building.x, building.y, building.size, building.size);
        
        // Building shadow
        ctx.fillStyle = 'rgba(0,0,0,0.1)';
        ctx.fillRect(building.x + 2, building.y + 2, building.size, building.size);
        
        // Building main body
        ctx.fillStyle = building.color;
        ctx.fillRect(building.x, building.y, building.size, building.size);
        
        // Building details
        ctx.fillStyle = 'white';
        ctx.fillRect(building.x + 5, building.y + 5, building.size - 10, building.size - 10);
        
        // Building windows
        ctx.fillStyle = building.color;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            ctx.fillRect(
              building.x + 8 + i * (building.size - 16) / 3,
              building.y + 8 + j * (building.size - 16) / 3,
              (building.size - 16) / 5,
              (building.size - 16) / 5
            );
          }
        }
        
        // Income indicator
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('+$' + building.income, building.x + building.size/2, building.y - 5);
      });
      
      // Instructions when no buildings
      if (buildings.length === 0 && !gameRunning) {
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('${t}', canvas.width/2, canvas.height/2 - 40);
        ctx.font = '16px Arial';
        ctx.fillStyle = '#6b7280';
        ctx.fillText('Click to place your first building!', canvas.width/2, canvas.height/2);
        ctx.fillText('Build your business empire and earn money!', canvas.width/2, canvas.height/2 + 25);
      }
    }
    
    function gameLoop() {
      if (!gameRunning) return;
      
      const now = Date.now();
      if (now - lastIncomeTime >= 1000) {
        money += income;
        lastIncomeTime = now;
        updateUI();
      }
      
      drawGame();
      animationId = requestAnimationFrame(gameLoop);
    }
    
    function getBuildingType() {
      for (let i = buildingTypes.length - 1; i >= 0; i--) {
        if (money >= buildingTypes[i].cost) {
          return buildingTypes[i];
        }
      }
      return buildingTypes[0];
    }
    
    function startGame() {
      gameRunning = true;
      gameLoop();
    }
    
    function resetGame() {
      gameRunning = false;
      money = 1000;
      income = 0;
      buildings = [];
      if (animationId) cancelAnimationFrame(animationId);
      updateUI();
      drawGame();
    }
    
    canvas.addEventListener('click', function(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const buildingType = getBuildingType();
      
      if (money >= buildingType.cost) {
        // Check if position is free
        const gridX = Math.floor(x / 50) * 50;
        const gridY = Math.floor(y / 50) * 50;
        
        const collision = buildings.some(building => 
          Math.abs(building.x - gridX) < 50 && Math.abs(building.y - gridY) < 50
        );
        
        if (!collision && gridX + buildingType.size < canvas.width && gridY + buildingType.size < canvas.height) {
          money -= buildingType.cost;
          income += buildingType.income;
          
          buildings.push({
            x: gridX,
            y: gridY,
            ...buildingType
          });
          
          updateUI();
          
          if (!gameRunning) {
            startGame();
          }
        }
      }
    });
    
    document.getElementById('startBtn${e}').addEventListener('click', startGame);
    document.getElementById('upgradeBtn${e}').addEventListener('click', function() {
      if (buildings.length > 0 && money >= 1000) {
        money -= 1000;
        buildings.forEach(building => {
          building.income *= 1.5;
          income = buildings.reduce((sum, b) => sum + b.income, 0);
        });
        updateUI();
      }
    });
    document.getElementById('resetBtn${e}').addEventListener('click', resetGame);
    
    resetGame();
  }, 100);
})();
<\/script>`,sm=(e,t,n,r)=>`
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${n} ${t}</h1>
  
  <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${e}" width="600" height="500" style="border: 2px solid #10b981; border-radius: 12px; display: block; background: #1a2e05;"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #10b981, #059669); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(16,185,129,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(16,185,129,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(16,185,129,0.4)';">Start Adventure</button>
    <button id="mapBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #f59e0b, #d97706); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(245,158,11,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Map</button>
    <button id="resetBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #ef4444, #dc2626); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(239,68,68,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Reset</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">TREASURES</div>
      <div id="treasures${e}" style="font-size: 32px; font-weight: 900; color: #f59e0b;">0</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">HEALTH</div>
      <div id="health${e}" style="font-size: 32px; font-weight: 900; color: #ef4444;">100</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">LEVEL</div>
      <div id="level${e}" style="font-size: 32px; font-weight: 900; color: #8b5cf6;">1</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 600px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Use <strong>WASD</strong> or <strong>Arrow Keys</strong> to move your character. Explore the mysterious world, collect treasures, avoid enemies, and discover hidden secrets. The further you venture, the greater the rewards!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let gameRunning = false;
    let player = {x: 300, y: 250, size: 20, speed: 3, health: 100};
    let treasures = [];
    let enemies = [];
    let obstacles = [];
    let score = 0;
    let level = 1;
    let animationId;
    let keys = {};
    
    function generateLevel() {
      treasures = [];
      enemies = [];
      obstacles = [];
      
      // Generate treasures
      for (let i = 0; i < 5 + level; i++) {
        treasures.push({
          x: Math.random() * (canvas.width - 40) + 20,
          y: Math.random() * (canvas.height - 40) + 20,
          size: 15,
          color: '#f59e0b',
          value: 10 + level * 5
        });
      }
      
      // Generate enemies
      for (let i = 0; i < 2 + level; i++) {
        enemies.push({
          x: Math.random() * (canvas.width - 30) + 15,
          y: Math.random() * (canvas.height - 30) + 15,
          size: 18,
          speed: 1 + level * 0.3,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          color: '#ef4444'
        });
      }
      
      // Generate obstacles
      for (let i = 0; i < 8 + level * 2; i++) {
        obstacles.push({
          x: Math.random() * (canvas.width - 60) + 30,
          y: Math.random() * (canvas.height - 60) + 30,
          width: 30 + Math.random() * 40,
          height: 30 + Math.random() * 40,
          color: '#374151'
        });
      }
    }
    
    function updateUI() {
      document.getElementById('treasures${e}').textContent = score;
      document.getElementById('health${e}').textContent = player.health;
      document.getElementById('level${e}').textContent = level;
    }
    
    function drawGame() {
      // Background with parallax effect
      const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width);
      gradient.addColorStop(0, '#065f46');
      gradient.addColorStop(1, '#1a2e05');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(16,185,129,0.1)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw obstacles
      obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.color;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        ctx.strokeStyle = '#6b7280';
        ctx.lineWidth = 2;
        ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });
      
      // Draw treasures with glow effect
      treasures.forEach(treasure => {
        ctx.shadowColor = treasure.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = treasure.color;
        ctx.beginPath();
        ctx.arc(treasure.x, treasure.y, treasure.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Treasure sparkle
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(treasure.x - 5, treasure.y - 5, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(treasure.x + 5, treasure.y + 5, 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
      });
      
      // Draw enemies with animation
      enemies.forEach(enemy => {
        ctx.fillStyle = enemy.color;
        ctx.beginPath();
        ctx.arc(enemy.x, enemy.y, enemy.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Enemy eyes
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(enemy.x - 5, enemy.y - 5, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(enemy.x + 5, enemy.y - 5, 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(enemy.x - 5, enemy.y - 5, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(enemy.x + 5, enemy.y - 5, 1, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw player with animation
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Player details
      ctx.fillStyle = '#1e40af';
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.size - 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Player face
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(player.x - 5, player.y - 5, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(player.x + 5, player.y - 5, 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Health bar
      const healthBarWidth = (player.health / 100) * 60;
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(player.x - 30, player.y - 35, 60, 6);
      ctx.fillStyle = '#10b981';
      ctx.fillRect(player.x - 30, player.y - 35, healthBarWidth, 6);
      
      // Instructions when not running
      if (!gameRunning) {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 32px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('${t}', canvas.width/2, canvas.height/2 - 60);
        ctx.font = '18px Arial';
        ctx.fillText('An Epic Adventure Awaits!', canvas.width/2, canvas.height/2 - 20);
        ctx.font = '16px Arial';
        ctx.fillText('Use WASD or Arrow Keys to move', canvas.width/2, canvas.height/2 + 20);
        ctx.fillText('Collect treasures and avoid enemies!', canvas.width/2, canvas.height/2 + 45);
      }
    }
    
    function checkCollisions() {
      // Check treasure collection
      treasures = treasures.filter(treasure => {
        const dx = player.x - treasure.x;
        const dy = player.y - treasure.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < player.size + treasure.size) {
          score += treasure.value;
          return false;
        }
        return true;
      });
      
      // Check enemy collisions
      enemies.forEach(enemy => {
        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < player.size + enemy.size) {
          player.health -= 2;
          if (player.health <= 0) {
            gameRunning = false;
            alert('Game Over! You collected ' + score + ' treasures!');
          }
        }
      });
      
      // Check if level complete
      if (treasures.length === 0) {
        level++;
        player.health = Math.min(100, player.health + 20);
        generateLevel();
      }
    }
    
    function updateEntities() {
      // Update enemies
      enemies.forEach(enemy => {
        enemy.x += enemy.vx;
        enemy.y += enemy.vy;
        
        if (enemy.x <= enemy.size || enemy.x >= canvas.width - enemy.size) {
          enemy.vx *= -1;
        }
        if (enemy.y <= enemy.size || enemy.y >= canvas.height - enemy.size) {
          enemy.vy *= -1;
        }
        
        // Simple AI - move towards player occasionally
        if (Math.random() < 0.02) {
          const dx = player.x - enemy.x;
          const dy = player.y - enemy.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 0) {
            enemy.vx += (dx / distance) * 0.1;
            enemy.vy += (dy / distance) * 0.1;
          }
        }
        
        // Limit speed
        const speed = Math.sqrt(enemy.vx * enemy.vx + enemy.vy * enemy.vy);
        if (speed > enemy.speed) {
          enemy.vx = (enemy.vx / speed) * enemy.speed;
          enemy.vy = (enemy.vy / speed) * enemy.speed;
        }
      });
    }
    
    function gameLoop() {
      if (!gameRunning) return;
      
      // Handle player movement
      if (keys['ArrowUp'] || keys['KeyW']) {
        player.y = Math.max(player.size, player.y - player.speed);
      }
      if (keys['ArrowDown'] || keys['KeyS']) {
        player.y = Math.min(canvas.height - player.size, player.y + player.speed);
      }
      if (keys['ArrowLeft'] || keys['KeyA']) {
        player.x = Math.max(player.size, player.x - player.speed);
      }
      if (keys['ArrowRight'] || keys['KeyD']) {
        player.x = Math.min(canvas.width - player.size, player.x + player.speed);
      }
      
      // Check obstacle collisions
      obstacles.forEach(obstacle => {
        if (player.x + player.size > obstacle.x && 
            player.x - player.size < obstacle.x + obstacle.width &&
            player.y + player.size > obstacle.y && 
            player.y - player.size < obstacle.y + obstacle.height) {
          // Simple collision response
          const overlapX = Math.min(player.x + player.size - obstacle.x, obstacle.x + obstacle.width - (player.x - player.size));
          const overlapY = Math.min(player.y + player.size - obstacle.y, obstacle.y + obstacle.height - (player.y - player.size));
          
          if (overlapX < overlapY) {
            player.x += player.x < obstacle.x + obstacle.width/2 ? -overlapX : overlapX;
          } else {
            player.y += player.y < obstacle.y + obstacle.height/2 ? -overlapY : overlapY;
          }
        }
      });
      
      updateEntities();
      checkCollisions();
      updateUI();
      drawGame();
      
      animationId = requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
      gameRunning = true;
      player = {x: 300, y: 250, size: 20, speed: 3, health: 100};
      score = 0;
      level = 1;
      generateLevel();
      updateUI();
      gameLoop();
    }
    
    function resetGame() {
      gameRunning = false;
      player = {x: 300, y: 250, size: 20, speed: 3, health: 100};
      score = 0;
      level = 1;
      treasures = [];
      enemies = [];
      obstacles = [];
      if (animationId) cancelAnimationFrame(animationId);
      updateUI();
      drawGame();
    }
    
    // Event listeners
    document.addEventListener('keydown', function(e) {
      keys[e.code] = true;
    });
    
    document.addEventListener('keyup', function(e) {
      keys[e.code] = false;
    });
    
    document.getElementById('startBtn${e}').addEventListener('click', startGame);
    document.getElementById('mapBtn${e}').addEventListener('click', function() {
      if (gameRunning) {
        alert('Current Level: ' + level + '\\nTreasures Remaining: ' + treasures.length + '\\nEnemies: ' + enemies.length);
      }
    });
    document.getElementById('resetBtn${e}').addEventListener('click', resetGame);
    
    resetGame();
  }, 100);
})();
<\/script>`,cm=(e,t,n,r)=>`
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${n} ${t}</h1>
  
  <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${e}" width="600" height="500" style="border: 2px solid #f59e0b; border-radius: 12px; display: block; background: linear-gradient(135deg, #fef3c7, #fed7aa);"></canvas>
  </div>
  
  <div style="display: flex; gap: 20px; margin-bottom: 25px;">
    <button id="startBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #f59e0b, #d97706); color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 18px; box-shadow: 0 6px 20px rgba(245,158,11,0.4); transition: all 0.3s ease; transform: translateY(0);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(245,158,11,0.6)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(245,158,11,0.4)';">Start Game</button>
    <button id="pauseBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #8b5cf6, #7c3aed); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(139,92,246,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Pause</button>
    <button id="resetBtn${e}" style="padding: 18px 36px; background: linear-gradient(45deg, #ef4444, #dc2626); color: white; border: none; border-radius: 12px; cursor: pointer; font-size: 18px; box-shadow: 0 6px 20px rgba(239,68,68,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Reset</button>
  </div>
  
  <div style="display: flex; gap: 40px; margin-bottom: 25px;">
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">SCORE</div>
      <div id="score${e}" style="font-size: 32px; font-weight: 900; color: #d97706;">0</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">TIME</div>
      <div id="time${e}" style="font-size: 32px; font-weight: 900; color: #ef4444;">60</div>
    </div>
    <div style="background: rgba(255,255,255,0.95); padding: 20px 30px; border-radius: 16px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
      <div style="font-size: 14px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">COMBO</div>
      <div id="combo${e}" style="font-size: 32px; font-weight: 900; color: #8b5cf6;">0x</div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 600px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">HOW TO PLAY</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Click on the moving targets to score points! Quick successive hits build combos for bonus points. Race against time to achieve the highest score possible. Each target has different point values!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let gameRunning = false;
    let paused = false;
    let score = 0;
    let timeLeft = 60;
    let combo = 0;
    let lastHitTime = 0;
    let targets = [];
    let particles = [];
    let animationId;
    let gameTimer;
    let targetSpawnTimer;
    
    const targetTypes = [
      {size: 30, color: '#ef4444', points: 10, speed: 2},
      {size: 25, color: '#f59e0b', points: 15, speed: 3},
      {size: 20, color: '#10b981', points: 25, speed: 4},
      {size: 15, color: '#3b82f6', points: 50, speed: 5},
      {size: 12, color: '#8b5cf6', points: 100, speed: 6}
    ];
    
    function createTarget() {
      const type = targetTypes[Math.floor(Math.random() * targetTypes.length)];
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      
      switch(side) {
        case 0: // Top
          x = Math.random() * canvas.width;
          y = -type.size;
          vx = (Math.random() - 0.5) * type.speed;
          vy = type.speed;
          break;
        case 1: // Right
          x = canvas.width + type.size;
          y = Math.random() * canvas.height;
          vx = -type.speed;
          vy = (Math.random() - 0.5) * type.speed;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + type.size;
          vx = (Math.random() - 0.5) * type.speed;
          vy = -type.speed;
          break;
        case 3: // Left
          x = -type.size;
          y = Math.random() * canvas.height;
          vx = type.speed;
          vy = (Math.random() - 0.5) * type.speed;
          break;
      }
      
      targets.push({
        x, y, vx, vy,
        size: type.size,
        color: type.color,
        points: type.points,
        life: 1.0,
        pulse: 0
      });
    }
    
    function createParticles(x, y, color, count = 8) {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 6 + 2,
          color: color,
          life: 1.0,
          decay: 0.02 + Math.random() * 0.02
        });
      }
    }
    
    function updateUI() {
      document.getElementById('score${e}').textContent = score.toLocaleString();
      document.getElementById('time${e}').textContent = timeLeft;
      document.getElementById('combo${e}').textContent = combo + 'x';
    }
    
    function drawGame() {
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#fef3c7');
      gradient.addColorStop(1, '#fed7aa');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw floating background elements
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      for (let i = 0; i < 10; i++) {
        const x = (Date.now() * 0.01 + i * 50) % (canvas.width + 100) - 50;
        const y = 50 + Math.sin(Date.now() * 0.001 + i) * 20;
        ctx.beginPath();
        ctx.arc(x, y, 10 + i * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw targets
      targets.forEach(target => {
        target.pulse += 0.1;
        const pulseSize = target.size + Math.sin(target.pulse) * 3;
        
        // Target glow
        ctx.shadowColor = target.color;
        ctx.shadowBlur = 15;
        ctx.fillStyle = target.color;
        ctx.globalAlpha = target.life;
        ctx.beginPath();
        ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Target center
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(target.x, target.y, pulseSize * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Target outline
        ctx.strokeStyle = target.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.globalAlpha = 1;
      });
      
      // Draw particles
      particles.forEach(particle => {
        ctx.globalAlpha = particle.life;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      
      // Draw combo indicator
      if (combo > 1) {
        ctx.fillStyle = '#8b5cf6';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(\`COMBO x\${combo}\`, canvas.width/2, 50);
        
        // Combo glow effect
        ctx.shadowColor = '#8b5cf6';
        ctx.shadowBlur = 10;
        ctx.fillText(\`COMBO x\${combo}\`, canvas.width/2, 50);
        ctx.shadowBlur = 0;
      }
      
      // Game over or pause overlay
      if (!gameRunning || paused) {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 36px Arial';
        ctx.textAlign = 'center';
        
        if (paused) {
          ctx.fillText('PAUSED', canvas.width/2, canvas.height/2);
        } else if (timeLeft <= 0) {
          ctx.fillText('TIME UP!', canvas.width/2, canvas.height/2 - 40);
          ctx.font = '24px Arial';
          ctx.fillText(\`Final Score: \${score.toLocaleString()}\`, canvas.width/2, canvas.height/2 + 20);
        } else {
          ctx.fillText('${t}', canvas.width/2, canvas.height/2 - 40);
          ctx.font = '18px Arial';
          ctx.fillText('Click targets to score points!', canvas.width/2, canvas.height/2 + 20);
          ctx.fillText('Quick hits build combos!', canvas.width/2, canvas.height/2 + 45);
        }
      }
    }
    
    function gameLoop() {
      if (!gameRunning || paused) {
        drawGame();
        animationId = requestAnimationFrame(gameLoop);
        return;
      }
      
      // Update targets
      targets = targets.filter(target => {
        target.x += target.vx;
        target.y += target.vy;
        target.life -= 0.005; // Fade out over time
        
        // Remove targets that are off screen or faded
        return target.life > 0 && 
               target.x > -target.size - 50 && 
               target.x < canvas.width + target.size + 50 &&
               target.y > -target.size - 50 && 
               target.y < canvas.height + target.size + 50;
      });
      
      // Update particles
      particles = particles.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        particle.life -= particle.decay;
        particle.size *= 0.99;
        
        return particle.life > 0 && particle.size > 0.5;
      });
      
      // Check combo timeout
      if (Date.now() - lastHitTime > 1500) {
        combo = 0;
      }
      
      drawGame();
      animationId = requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
      gameRunning = true;
      paused = false;
      score = 0;
      timeLeft = 60;
      combo = 0;
      targets = [];
      particles = [];
      lastHitTime = Date.now();
      
      updateUI();
      
      // Game timer
      gameTimer = setInterval(() => {
        if (!paused && gameRunning) {
          timeLeft--;
          updateUI();
          
          if (timeLeft <= 0) {
            gameRunning = false;
            clearInterval(gameTimer);
            clearInterval(targetSpawnTimer);
          }
        }
      }, 1000);
      
      // Target spawning
      targetSpawnTimer = setInterval(() => {
        if (!paused && gameRunning) {
          createTarget();
        }
      }, 800 - Math.min(score / 100, 600)); // Spawn faster as score increases
      
      gameLoop();
    }
    
    function pauseGame() {
      paused = !paused;
      document.getElementById('pauseBtn${e}').textContent = paused ? 'Resume' : 'Pause';
    }
    
    function resetGame() {
      gameRunning = false;
      paused = false;
      score = 0;
      timeLeft = 60;
      combo = 0;
      targets = [];
      particles = [];
      
      if (gameTimer) clearInterval(gameTimer);
      if (targetSpawnTimer) clearInterval(targetSpawnTimer);
      if (animationId) cancelAnimationFrame(animationId);
      
      document.getElementById('pauseBtn${e}').textContent = 'Pause';
      updateUI();
      drawGame();
    }
    
    canvas.addEventListener('click', function(e) {
      if (!gameRunning || paused) return;
      
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      let hit = false;
      
      targets = targets.filter(target => {
        const dx = clickX - target.x;
        const dy = clickY - target.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance <= target.size) {
          // Hit target
          const now = Date.now();
          if (now - lastHitTime < 1000) {
            combo++;
          } else {
            combo = 1;
          }
          lastHitTime = now;
          
          const comboBonus = Math.floor(combo / 5) * 10;
          const points = target.points + comboBonus;
          score += points;
          
          // Create hit particles
          createParticles(target.x, target.y, target.color, 12);
          
          // Show point popup
          particles.push({
            x: target.x,
            y: target.y - 20,
            vx: 0,
            vy: -2,
            size: 16,
            color: target.color,
            life: 2.0,
            decay: 0.02,
            text: '+' + points
          });
          
          updateUI();
          hit = true;
          return false; // Remove target
        }
        return true; // Keep target
      });
      
      if (!hit) {
        // Missed - reset combo
        combo = 0;
        updateUI();
        
        // Create miss effect
        createParticles(clickX, clickY, '#6b7280', 4);
      }
    });
    
    document.getElementById('startBtn${e}').addEventListener('click', startGame);
    document.getElementById('pauseBtn${e}').addEventListener('click', pauseGame);
    document.getElementById('resetBtn${e}').addEventListener('click', resetGame);
    
    resetGame();
  }, 100);
})();
<\/script>`,um=(e,t,n,r)=>`
<div style="display: flex; flex-direction: column; align-items: center; padding: 30px; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Arial, sans-serif; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); width: 100%; min-height: 700px;">
  <h1 style="margin: 0 0 30px 0; color: white; font-size: 42px; font-weight: 800; text-shadow: 2px 2px 8px rgba(0,0,0,0.3); letter-spacing: -1px;">${n} ${t}</h1>
  
  <div style="background: rgba(255,255,255,0.95); padding: 20px; border-radius: 16px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
    <canvas id="${e}" width="600" height="500" style="border: 2px solid #8b5cf6; border-radius: 12px; display: block; background: white; cursor: crosshair;"></canvas>
  </div>
  
  <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 25px; justify-content: center;">
    <button id="brushBtn${e}" style="padding: 12px 24px; background: linear-gradient(45deg, #8b5cf6, #7c3aed); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(139,92,246,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Brush</button>
    <button id="eraserBtn${e}" style="padding: 12px 24px; background: linear-gradient(45deg, #ef4444, #dc2626); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(239,68,68,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Eraser</button>
    <button id="sprayBtn${e}" style="padding: 12px 24px; background: linear-gradient(45deg, #10b981, #059669); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(16,185,129,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Spray</button>
    <button id="fillBtn${e}" style="padding: 12px 24px; background: linear-gradient(45deg, #f59e0b, #d97706); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(245,158,11,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Fill</button>
    <button id="blurBtn${e}" style="padding: 12px 24px; background: linear-gradient(45deg, #6b7280, #4b5563); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(107,114,128,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Blur</button>
    <button id="clearBtn${e}" style="padding: 12px 24px; background: linear-gradient(45deg, #374151, #1f2937); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 15px rgba(55,65,81,0.4); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)';" onmouseout="this.style.transform='translateY(0)';">Clear</button>
  </div>
  
  <div style="display: flex; gap: 30px; margin-bottom: 25px; align-items: center; flex-wrap: wrap; justify-content: center;">
    <div style="background: rgba(255,255,255,0.95); padding: 15px 20px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <label style="display: block; font-size: 12px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Brush Size</label>
      <input type="range" id="brushSize${e}" min="1" max="50" value="10" style="width: 120px; accent-color: #8b5cf6;">
      <span id="sizeDisplay${e}" style="display: block; text-align: center; margin-top: 5px; font-size: 14px; color: #666; font-weight: bold;">10px</span>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 15px 20px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <label style="display: block; font-size: 12px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Opacity</label>
      <input type="range" id="brushOpacity${e}" min="0.1" max="1" step="0.1" value="1" style="width: 120px; accent-color: #8b5cf6;">
      <span id="opacityDisplay${e}" style="display: block; text-align: center; margin-top: 5px; font-size: 14px; color: #666; font-weight: bold;">100%</span>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 15px 20px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <label style="display: block; font-size: 12px; color: #333; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Color</label>
      <input type="color" id="colorPicker${e}" value="#8b5cf6" style="width: 60px; height: 40px; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
    </div>
  </div>
  
  <div style="display: flex; gap: 15px; margin-bottom: 25px; flex-wrap: wrap; justify-content: center;">
    <div style="background: rgba(255,255,255,0.95); padding: 15px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <div style="font-size: 12px; color: #333; margin-bottom: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; text-align: center;">Quick Colors</div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px;">
        <div class="colorSwatch" data-color="#ef4444" style="width: 25px; height: 25px; background: #ef4444; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#f59e0b" style="width: 25px; height: 25px; background: #f59e0b; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#10b981" style="width: 25px; height: 25px; background: #10b981; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#3b82f6" style="width: 25px; height: 25px; background: #3b82f6; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#8b5cf6" style="width: 25px; height: 25px; background: #8b5cf6; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#ec4899" style="width: 25px; height: 25px; background: #ec4899; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#000000" style="width: 25px; height: 25px; background: #000000; border-radius: 6px; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="colorSwatch" data-color="#ffffff" style="width: 25px; height: 25px; background: #ffffff; border-radius: 6px; cursor: pointer; border: 2px solid #ccc; transition: all 0.2s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"></div>
      </div>
    </div>
    
    <div style="background: rgba(255,255,255,0.95); padding: 15px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1);">
      <div style="font-size: 12px; color: #333; margin-bottom: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; text-align: center;">Actions</div>
      <div style="display: flex; gap: 8px;">
        <button id="undoBtn${e}" style="padding: 8px 16px; background: #6b7280; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;" onmouseover="this.style.background='#4b5563'" onmouseout="this.style.background='#6b7280'">Undo</button>
        <button id="redoBtn${e}" style="padding: 8px 16px; background: #6b7280; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;" onmouseover="this.style.background='#4b5563'" onmouseout="this.style.background='#6b7280'">Redo</button>
        <button id="saveBtn${e}" style="padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;" onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">Save</button>
      </div>
    </div>
  </div>
  
  <div style="text-align: center; background: rgba(255,255,255,0.9); padding: 20px 30px; border-radius: 16px; max-width: 600px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <div style="font-weight: bold; color: #333; margin-bottom: 10px; font-size: 16px;">DIGITAL ART STUDIO</div>
    <div style="font-size: 15px; color: #333; line-height: 1.6;">Create amazing digital artwork with professional drawing tools! Use different brushes, adjust opacity, blend colors, and apply effects. Your creativity is the only limit!</div>
  </div>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let currentTool = 'brush';
    let currentColor = '#8b5cf6';
    let currentSize = 10;
    let currentOpacity = 1;
    let lastX = 0;
    let lastY = 0;
    let history = [];
    let historyStep = -1;
    
    // Save initial state
    function saveState() {
      historyStep++;
      if (historyStep < history.length) {
        history.length = historyStep;
      }
      history.push(canvas.toDataURL());
    }
    
    function undo() {
      if (historyStep > 0) {
        historyStep--;
        const img = new Image();
        img.src = history[historyStep];
        img.onload = function() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        };
      }
    }
    
    function redo() {
      if (historyStep < history.length - 1) {
        historyStep++;
        const img = new Image();
        img.src = history[historyStep];
        img.onload = function() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
        };
      }
    }
    
    function setTool(tool) {
      currentTool = tool;
      
      // Update button styles
      document.querySelectorAll('[id*="Btn${e}"]').forEach(btn => {
        if (btn.id.includes('brush') || btn.id.includes('eraser') || btn.id.includes('spray') || btn.id.includes('fill') || btn.id.includes('blur')) {
          btn.style.opacity = '0.7';
          btn.style.transform = 'scale(1)';
        }
      });
      
      document.getElementById(tool + 'Btn${e}').style.opacity = '1';
      document.getElementById(tool + 'Btn${e}').style.transform = 'scale(1.05)';
      
      // Update cursor
      switch(tool) {
        case 'brush':
          canvas.style.cursor = 'crosshair';
          break;
        case 'eraser':
          canvas.style.cursor = 'grab';
          break;
        case 'spray':
          canvas.style.cursor = 'crosshair';
          break;
        case 'fill':
          canvas.style.cursor = 'pointer';
          break;
        case 'blur':
          canvas.style.cursor = 'move';
          break;
      }
    }
    
    function updateUI() {
      document.getElementById('sizeDisplay${e}').textContent = currentSize + 'px';
      document.getElementById('opacityDisplay${e}').textContent = Math.round(currentOpacity * 100) + '%';
    }
    
    function draw(e) {
      if (!isDrawing && currentTool !== 'spray') return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ctx.globalAlpha = currentOpacity;
      ctx.strokeStyle = currentColor;
      ctx.fillStyle = currentColor;
      ctx.lineWidth = currentSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      switch(currentTool) {
        case 'brush':
          ctx.globalCompositeOperation = 'source-over';
          ctx.beginPath();
          ctx.moveTo(lastX, lastY);
          ctx.lineTo(x, y);
          ctx.stroke();
          break;
          
        case 'eraser':
          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath();
          ctx.arc(x, y, currentSize/2, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case 'spray':
          ctx.globalCompositeOperation = 'source-over';
          for (let i = 0; i < 20; i++) {
            const offsetX = (Math.random() - 0.5) * currentSize;
            const offsetY = (Math.random() - 0.5) * currentSize;
            ctx.beginPath();
            ctx.arc(x + offsetX, y + offsetY, 1, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
          
        case 'blur':
          const imageData = ctx.getImageData(x - currentSize/2, y - currentSize/2, currentSize, currentSize);
          const data = imageData.data;
          
          // Simple blur effect
          for (let i = 0; i < data.length; i += 4) {
            data[i] = (data[i] + data[i + 4] + data[i - 4]) / 3;     // Red
            data[i + 1] = (data[i + 1] + data[i + 5] + data[i - 3]) / 3; // Green
            data[i + 2] = (data[i + 2] + data[i + 6] + data[i - 2]) / 3; // Blue
          }
          
          ctx.putImageData(imageData, x - currentSize/2, y - currentSize/2);
          break;
      }
      
      [lastX, lastY] = [x, y];
    }
    
    function floodFill(startX, startY, newColor) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const startIndex = (startY * canvas.width + startX) * 4;
      const startR = data[startIndex];
      const startG = data[startIndex + 1];
      const startB = data[startIndex + 2];
      
      const newR = parseInt(newColor.slice(1, 3), 16);
      const newG = parseInt(newColor.slice(3, 5), 16);
      const newB = parseInt(newColor.slice(5, 7), 16);
      
      if (startR === newR && startG === newG && startB === newB) return;
      
      const stack = [[startX, startY]];
      
      while (stack.length > 0) {
        const [x, y] = stack.pop();
        const index = (y * canvas.width + x) * 4;
        
        if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;
        if (data[index] !== startR || data[index + 1] !== startG || data[index + 2] !== startB) continue;
        
        data[index] = newR;
        data[index + 1] = newG;
        data[index + 2] = newB;
        data[index + 3] = 255;
        
        stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
      }
      
      ctx.putImageData(imageData, 0, 0);
    }
    
    // Event listeners
    canvas.addEventListener('mousedown', (e) => {
      if (currentTool === 'fill') {
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor(e.clientX - rect.left);
        const y = Math.floor(e.clientY - rect.top);
        saveState();
        floodFill(x, y, currentColor);
        return;
      }
      
      isDrawing = true;
      const rect = canvas.getBoundingClientRect();
      [lastX, lastY] = [e.clientX - rect.left, e.clientY - rect.top];
      saveState();
    });
    
    canvas.addEventListener('mousemove', draw);
    
    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
    });
    
    canvas.addEventListener('mouseout', () => {
      isDrawing = false;
    });
    
    // Tool buttons
    document.getElementById('brushBtn${e}').addEventListener('click', () => setTool('brush'));
    document.getElementById('eraserBtn${e}').addEventListener('click', () => setTool('eraser'));
    document.getElementById('sprayBtn${e}').addEventListener('click', () => setTool('spray'));
    document.getElementById('fillBtn${e}').addEventListener('click', () => setTool('fill'));
    document.getElementById('blurBtn${e}').addEventListener('click', () => setTool('blur'));
    
    // Controls
    document.getElementById('brushSize${e}').addEventListener('input', (e) => {
      currentSize = e.target.value;
      updateUI();
    });
    
    document.getElementById('brushOpacity${e}').addEventListener('input', (e) => {
      currentOpacity = e.target.value;
      updateUI();
    });
    
    document.getElementById('colorPicker${e}').addEventListener('change', (e) => {
      currentColor = e.target.value;
    });
    
    // Quick color swatches
    document.querySelectorAll('.colorSwatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        currentColor = e.target.getAttribute('data-color');
        document.getElementById('colorPicker${e}').value = currentColor;
        
        // Update active swatch
        document.querySelectorAll('.colorSwatch').forEach(s => s.style.border = '2px solid transparent');
        if (currentColor === '#ffffff') {
          e.target.style.border = '2px solid #333';
        } else {
          e.target.style.border = '2px solid #fff';
        }
      });
    });
    
    // Action buttons
    document.getElementById('undoBtn${e}').addEventListener('click', undo);
    document.getElementById('redoBtn${e}').addEventListener('click', redo);
    document.getElementById('saveBtn${e}').addEventListener('click', () => {
      const link = document.createElement('a');
      link.download = 'artwork.png';
      link.href = canvas.toDataURL();
      link.click();
    });
    
    document.getElementById('clearBtn${e}').addEventListener('click', () => {
      if (confirm('Clear the entire canvas? This cannot be undone.')) {
        saveState();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    });
    
    // Initialize
    setTool('brush');
    updateUI();
    
    // Set initial canvas background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveState();
  }, 100);
})();
<\/script>`,dm=(e,t,n,r)=>`
<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #4ade80 0%, #22d3ee 100%); border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); width: 100%; height: 100%; min-height: 600px;">
  <h3 style="margin: 0 0 20px 0; color: white; font-size: 28px; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${n} ${t}</h3>
  <canvas id="${e}" width="600" height="400" style="border: 4px solid #ffffff; border-radius: 12px; background: #ecfdf5; cursor: pointer; box-shadow: 0 4px 16px rgba(0,0,0,0.2);"></canvas>
  <div style="margin-top: 20px; display: flex; gap: 15px;">
    <button id="startBtn${e}" style="padding: 12px 24px; background: #059669; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 16px;">Start Ecosystem</button>
    <button id="resetBtn${e}" style="padding: 12px 24px; background: #0891b2; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">Reset Nature</button>
  </div>
  <div style="margin-top: 15px; display: flex; gap: 20px; align-items: center;">
    <p style="margin: 0; font-size: 18px; color: white; font-weight: bold;">Plants: <span id="score${e}" style="color: #fbbf24;">0</span></p>
    <p style="margin: 0; font-size: 18px; color: white; font-weight: bold;">Animals: <span id="level${e}" style="color: #34d399;">0</span></p>
  </div>
  <p style="margin: 10px 0; font-size: 14px; color: #e5e7eb; text-align: center;">Click to plant seeds and create a thriving ecosystem! Watch nature grow!</p>
</div>

<script>
(function() {
  setTimeout(function() {
    const canvas = document.getElementById('${e}');
    const startBtn = document.getElementById('startBtn${e}');
    const resetBtn = document.getElementById('resetBtn${e}');
    
    if (!canvas || !startBtn || !resetBtn) return;
    
    const ctx = canvas.getContext('2d');
    let gameRunning = false;
    let plants = [];
    let animals = [];
    let animationId;
    
    function updateUI() {
      const scoreEl = document.getElementById('score${e}');
      const levelEl = document.getElementById('level${e}');
      if (scoreEl) scoreEl.textContent = plants.length;
      if (levelEl) levelEl.textContent = animals.length;
    }
    
    function spawnPlant(x, y) {
      plants.push({
        x: x,
        y: y,
        size: 5,
        maxSize: 20 + Math.random() * 30,
        color: \`hsl(\${100 + Math.random() * 60}, 70%, 50%)\`,
        growth: 0.5 + Math.random() * 0.5
      });
    }
    
    function spawnAnimal() {
      if (plants.length > 5) {
        animals.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 8 + Math.random() * 12,
          color: \`hsl(\${Math.random() * 60 + 20}, 60%, 40%)\`,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          energy: 100
        });
      }
    }
    
    function drawGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 背景
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#dbeafe');
      gradient.addColorStop(1, '#dcfce7');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 绘制植物
      plants.forEach(plant => {
        ctx.fillStyle = plant.color;
        ctx.beginPath();
        ctx.arc(plant.x, plant.y, plant.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 叶子
        ctx.fillStyle = plant.color;
        for (let i = 0; i < 5; i++) {
          const angle = (i / 5) * Math.PI * 2;
          const leafX = plant.x + Math.cos(angle) * plant.size * 0.7;
          const leafY = plant.y + Math.sin(angle) * plant.size * 0.7;
          ctx.beginPath();
          ctx.arc(leafX, leafY, plant.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      // 绘制动物
      animals.forEach(animal => {
        ctx.fillStyle = animal.color;
        ctx.beginPath();
        ctx.arc(animal.x, animal.y, animal.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 眼睛
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(animal.x - animal.size * 0.3, animal.y - animal.size * 0.3, animal.size * 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(animal.x + animal.size * 0.3, animal.y - animal.size * 0.3, animal.size * 0.2, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    
    function gameLoop() {
      if (!gameRunning) return;
      
      // 植物生长
      plants.forEach(plant => {
        if (plant.size < plant.maxSize) {
          plant.size += plant.growth;
        }
      });
      
      // 动物移动
      animals = animals.filter(animal => {
        animal.x += animal.vx;
        animal.y += animal.vy;
        animal.energy -= 0.2;
        
        if (animal.x <= animal.size || animal.x >= canvas.width - animal.size) animal.vx *= -1;
        if (animal.y <= animal.size || animal.y >= canvas.height - animal.size) animal.vy *= -1;
        
        return animal.energy > 0;
      });
      
      // 随机生成动物
      if (Math.random() < 0.01) {
        spawnAnimal();
      }
      
      updateUI();
      drawGame();
      animationId = requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
      if (gameRunning) return;
      gameRunning = true;
      plants = [];
      animals = [];
      updateUI();
      gameLoop();
    }
    
    function resetGame() {
      gameRunning = false;
      plants = [];
      animals = [];
      if (animationId) cancelAnimationFrame(animationId);
      updateUI();
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#059669';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('${t}', canvas.width/2, canvas.height/2 - 20);
      ctx.font = '16px Arial';
      ctx.fillStyle = '#0891b2';
      ctx.fillText('Create your own ecosystem!', canvas.width/2, canvas.height/2 + 20);
    }
    
    canvas.addEventListener('click', function(e) {
      if (!gameRunning) return;
      
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      spawnPlant(clickX, clickY);
      updateUI();
    });
    
    startBtn.addEventListener('click', startGame);
    resetBtn.addEventListener('click', resetGame);
    resetGame();
  }, 100);
})();
<\/script>`,pm=(e,t)=>{const r={puzzle:"#8b5cf6",simulation:"#06b6d4",adventure:"#10b981",casual:"#f59e0b",creative:"#ec4899",nature:"#22c55e"}[e]||"#6b7280";return`data:image/svg+xml,${encodeURIComponent(`
    <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${r};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ffffff;stop-opacity=0.8" />
        </linearGradient>
      </defs>
      <rect width="200" height="150" fill="url(#grad)" rx="8"/>
      <text x="100" y="75" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="white">${t}</text>
      <text x="100" y="95" font-family="Arial" font-size="12" text-anchor="middle" fill="white" opacity="0.9">${e.toUpperCase()}</text>
    </svg>
  `)}`},Q=[],fm={puzzle:["2048","Tetris","Sudoku","Chess Master","Bubble Shooter","Solitaire","Mahjong","Word Search","Crossword","Jigsaw Puzzle","Snake Game","Checkers","Minesweeper","FreeCell","Spider Solitaire","Block Puzzle","Match 3","Tangram","Nonogram","Logic Grid","Number Link","Pattern Match","Color Lines","Brain Teaser","Mind Bender","Rubiks Cube","Pixel Art","Number Logic","Connect Lines","Memory Cards"],simulation:["City Builder","Farm Manager","Theme Park","Zoo Keeper","Restaurant Chef","Airport Control","Hospital Director","Train Conductor","Mall Manager","Gas Station","Car Dealership","Hair Salon","Pizza Kitchen","Ice Cream Truck","Bakery Business","Taxi Company","Bus Route","Delivery Service","Factory Owner","Mining Tycoon","Oil Drilling","Space Mission","Amusement Park","Grocery Store","Hotel Empire","Pet Daycare","Coffee House","Lemonade Stand","School Principal","Aquarium Keeper"],adventure:["Treasure Quest","Pirate Adventure","Jungle Explorer","Cave Explorer","Mountain Climber","Desert Wanderer","Space Odyssey","Ocean Diver","Castle Explorer","Dragon Hunter","Knight Quest","Magic Academy","Ninja Adventure","Pirate Gold","Ancient Temple","Escape Room","Mystery House","Ghost Detective","Time Explorer","Alien World","Hero Mission","Spy Operation","Dino Island","Enchanted Forest","Lost City","Robot Lab","Cyber City","Viking Journey","Samurai Path","Arctic Explorer"],casual:["Fruit Ninja","Angry Birds","Jumping Ball","Endless Runner","Subway Surfer","Sky Jumper","Cookie Clicker","Music Tiles","Geometry Dash","Tower Stack","Ball Drop","Color Jump","Spiral Drop","Target Shooter","Flip Challenge","Paper Plane","Bubble Pop","Cut Rope","Brick Breaker","Pinball","Pac Man","Frog Crossing","Space Shooter","Asteroid Dodge","Bug Blast","Paddle Game","Wall Breaker","Star Fighter","Shield Guard","Cube Jump"],creative:["Digital Canvas","Beat Studio","Story Writer","Animation Maker","Photo Editor","Brand Designer","Card Creator","Flag Maker","Ad Designer","Comic Studio","Pixel Editor","Paint Studio","Design Builder","Color Mixer","Art Book","Video Maker","Audio Lab","Rhythm Creator","Tune Maker","Mix Master","Gallery Curator","Fashion Designer","Interior Design","Landscape Planner","Building Designer","Sculpture Maker","Clay Studio","Jewelry Designer","Tattoo Artist","Beauty Studio"],nature:["Garden Designer","Forest Guardian","Marine Biologist","Peak Climber","Oasis Keeper","Jungle Guide","Polar Researcher","Safari Guide","Reef Explorer","Bird Watcher","Butterfly Garden","Bee Farm","Mushroom Hunter","Flower Grower","Tree House","Wildlife Protector","Weather Tracker","Season Keeper","Eco Builder","Earth Guardian","Planet Explorer","Star Observer","Lunar Explorer","Volcano Watcher","Earthquake Monitor","Wave Tracker","Storm Chaser","Tornado Tracker","Lightning Catcher","Aurora Seeker"]};Object.entries(fm).forEach(([e,t])=>{var r;const n=((r=de.find(i=>i.slug===e))==null?void 0:r.icon)||"🎮";t.forEach((i,l)=>{let o="";switch(e){case"puzzle":o=`Master ${i} - an addictive brain-training puzzle game that challenges your logic, strategic thinking, and problem-solving skills. Features smooth gameplay mechanics, progressive difficulty levels, and satisfying visual feedback. Perfect for puzzle enthusiasts who love mind-bending challenges that keep you engaged for hours. Sharpen your cognitive abilities while having fun with this professionally designed ${e} experience.`;break;case"simulation":o=`Build and manage your own ${i} empire in this immersive simulation game. Experience realistic business mechanics, strategic decision-making, and resource management that puts you in control. Watch your virtual world grow and prosper as you make smart choices and overcome challenges. Ideal for strategy lovers who enjoy creative building, economic planning, and simulation gameplay that mirrors real-world experiences.`;break;case"adventure":o=`Embark on an epic ${i} journey filled with discovery, exploration, and exciting quests. Navigate through beautifully crafted environments, solve mysteries, collect treasures, and uncover hidden secrets. Features intuitive controls, engaging storylines, and rewarding progression systems. Perfect for adventure seekers who love exploration games with rich narratives and immersive worlds to discover.`;break;case"casual":o=`Enjoy ${i} - a fun and relaxing casual game designed for quick entertainment and stress relief. Features easy-to-learn controls, colorful graphics, and instantly engaging gameplay that's perfect for short breaks or extended play sessions. Offers satisfying progression, simple mechanics, and endless replayability. Ideal for players of all ages who want accessible, enjoyable gaming experiences.`;break;case"creative":o=`Unleash your artistic potential with ${i} - a powerful creative tool that lets you express yourself through digital art, design, and imagination. Features professional-grade tools, intuitive interfaces, and unlimited creative possibilities. Whether you're a beginner or experienced creator, this game provides the perfect canvas for your artistic vision. Share your creations and explore endless creative possibilities.`;break;case"nature":o=`Connect with the natural world through ${i} - an immersive nature experience that celebrates Earth's beauty and biodiversity. Explore stunning environments, learn about ecosystems, and participate in conservation efforts. Features realistic graphics, educational content, and peaceful gameplay that promotes environmental awareness. Perfect for nature lovers who want to experience the wonder of the natural world through interactive entertainment.`;break;default:o=`Experience ${i} - an engaging ${e} game with captivating gameplay and beautiful graphics. Perfect for players who enjoy ${e} entertainment and challenging fun!`}Q.push({id:`${e}-${l+1}`,title:i,slug:i.toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g,"-"),description:o,coverImage:pm(e,i),categories:[e],controls:"Mouse click controls - Click on moving objects to collect points and achieve high scores",popularityScore:Math.floor(Math.random()*2e3)+3e3,status:"published",publishedAt:new Date(2024,0,Math.floor(Math.random()*30)+1).toISOString(),gameType:"canvas",gameCode:tm(i,e,n,l),icon:n})})});const sd=e=>Q.filter(t=>t.categories.includes(e)&&t.status==="published"),mm=(e=10)=>Q.filter(t=>t.status==="published").sort((t,n)=>n.popularityScore-t.popularityScore).slice(0,e),hm=(e=12)=>Q.filter(t=>t.status==="published").sort((t,n)=>new Date(n.publishedAt).getTime()-new Date(t.publishedAt).getTime()).slice(0,e),xm=e=>{const t=e.toLowerCase();return Q.filter(n=>n.status==="published"&&(n.title.toLowerCase().includes(t)||n.description.toLowerCase().includes(t)||n.categories.some(r=>r.toLowerCase().includes(t)))).sort((n,r)=>r.popularityScore-n.popularityScore)},po=e=>`
  <div id="sideLeaderboard\${gameId}" style="
    position: fixed;
    top: 80px;
    right: 20px;
    width: 300px;
    max-height: calc(100vh - 100px);
    background: linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    z-index: 1000;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.3) transparent;
    transform: translateX(320px);
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  ">
    <!-- 顶部标题区域 -->
    <div style="
      text-align: center;
      margin-bottom: 25px;
      padding-bottom: 15px;
      border-bottom: 2px solid rgba(255,255,255,0.1);
    ">
      <div style="
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 10px;
      ">
        <span style="font-size: 28px;">🏆</span>
        <h3 style="
          margin: 0;
          color: #fff;
          font-size: 22px;
          font-weight: 800;
          background: linear-gradient(45deg, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">TOP 20</h3>
      </div>
      <p style="
        margin: 0;
        color: rgba(255,255,255,0.7);
        font-size: 12px;
        font-weight: 500;
      ">Global Leaderboard</p>
    </div>

    <!-- 排行榜列表 -->
    <div id="leaderboardList\${gameId}" style="space-y: 8px;"></div>

    <!-- 你的排名 -->
    <div style="
      margin-top: 20px;
      padding-top: 15px;
      border-top: 2px solid rgba(255,255,255,0.1);
    ">
      <div id="playerRank\${gameId}" style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 12px;
        border: 2px solid rgba(255,255,255,0.2);
      ">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="
            background: rgba(255,255,255,0.9);
            color: #667eea;
            font-weight: bold;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          ">★</span>
          <span style="color: white; font-weight: 600; font-size: 14px;">You</span>
        </div>
        <span id="playerBest\${gameId}" style="color: white; font-weight: bold; font-size: 16px;">0</span>
      </div>
    </div>

    <!-- 控制按钮 -->
    <div style="
      display: flex;
      gap: 8px;
      margin-top: 15px;
    ">
      <button id="refreshLeaderboard\${gameId}" style="
        flex: 1;
        background: linear-gradient(45deg, #10b981, #059669);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      ">🔄 Refresh</button>
      <button id="toggleLeaderboard\${gameId}" style="
        flex: 1;
        background: linear-gradient(45deg, #f59e0b, #d97706);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      ">👁️ Hide</button>
    </div>
  </div>

  <!-- 显示/隐藏按钮 -->
  <button id="showLeaderboard\${gameId}" style="
    position: fixed;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    z-index: 999;
    font-size: 20px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  " onmouseover="this.style.transform='translateY(-50%) scale(1.1)'" onmouseout="this.style.transform='translateY(-50%) scale(1)'">🏆</button>

  <script>
    (function() {
      // 生成前20名模拟数据
      const generateLeaderboardData = () => {
        const names = [
          'DragonSlayer', 'NightHawk', 'StarCrusher', 'ShadowMaster', 'FirePhoenix',
          'IceQueen', 'ThunderBolt', 'MysticWizard', 'CyberNinja', 'GalacticHero',
          'QuantumLeap', 'PixelWarrior', 'CodeBreaker', 'GameChanger', 'ProGamer',
          'ElitePlayer', 'ChampionX', 'VictoryKing', 'ScoreHunter', 'LegendMaker'
        ];
        
        const baseScores = [
          50000, 48500, 47000, 45500, 44000, 42500, 41000, 39500, 38000, 36500,
          35000, 33500, 32000, 30500, 29000, 27500, 26000, 24500, 23000, 21500
        ];
        
        return names.map((name, index) => ({
          name,
          score: baseScores[index] + Math.floor(Math.random() * 1000),
          rank: index + 1
        }));
      };

      const leaderboardData = generateLeaderboardData();
      let playerBestScore = parseInt(localStorage.getItem('\${gameId}_best') || '0');
      let isVisible = false;

      const sideLeaderboard = document.getElementById('sideLeaderboard\${gameId}');
      const showButton = document.getElementById('showLeaderboard\${gameId}');
      const toggleButton = document.getElementById('toggleLeaderboard\${gameId}');
      const refreshButton = document.getElementById('refreshLeaderboard\${gameId}');
      const leaderboardList = document.getElementById('leaderboardList\${gameId}');

      // 渲染排行榜
      function renderLeaderboard() {
        leaderboardList.innerHTML = leaderboardData.map((player, index) => {
          let rankColor = '#6b7280';
          let bgGradient = 'linear-gradient(45deg, #f3f4f6, #e5e7eb)';
          let textColor = '#374151';
          
          if (index === 0) {
            rankColor = '#fbbf24';
            bgGradient = 'linear-gradient(45deg, #fbbf24, #f59e0b)';
            textColor = 'white';
          } else if (index === 1) {
            rankColor = '#9ca3af';
            bgGradient = 'linear-gradient(45deg, #9ca3af, #6b7280)';
            textColor = 'white';
          } else if (index === 2) {
            rankColor = '#cd7f32';
            bgGradient = 'linear-gradient(45deg, #cd7f32, #b45309)';
            textColor = 'white';
          } else if (index < 10) {
            bgGradient = 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))';
            textColor = 'rgba(255,255,255,0.9)';
          } else {
            bgGradient = 'linear-gradient(45deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))';
            textColor = 'rgba(255,255,255,0.7)';
          }

          return \`
            <div style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 8px 12px;
              background: \${bgGradient};
              border-radius: 8px;
              margin-bottom: 4px;
              transition: all 0.3s ease;
              border: 1px solid rgba(255,255,255,0.1);
            " onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform='translateX(0px)'">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="
                  color: \${index < 3 ? 'white' : rankColor};
                  font-weight: bold;
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 11px;
                  background: \${index < 3 ? 'rgba(255,255,255,0.2)' : 'transparent'};
                ">\${player.rank}</span>
                <span style="
                  color: \${textColor};
                  font-weight: 500;
                  font-size: 12px;
                  max-width: 120px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                ">\${player.name}</span>
              </div>
              <span style="
                color: \${textColor};
                font-weight: bold;
                font-size: 12px;
              ">\${player.score.toLocaleString()}</span>
            </div>
          \`;
        }).join('');
      }

      // 更新玩家最佳分数
      function updatePlayerBest() {
        document.getElementById('playerBest\${gameId}').textContent = playerBestScore.toLocaleString();
      }

      // 显示/隐藏排行榜
      function toggleLeaderboard() {
        isVisible = !isVisible;
        if (isVisible) {
          sideLeaderboard.style.transform = 'translateX(0)';
          showButton.style.display = 'none';
          toggleButton.textContent = '👁️ Hide';
        } else {
          sideLeaderboard.style.transform = 'translateX(320px)';
          showButton.style.display = 'flex';
          toggleButton.textContent = '👁️ Show';
        }
      }

      // 事件监听
      showButton.addEventListener('click', toggleLeaderboard);
      toggleButton.addEventListener('click', toggleLeaderboard);
      
      refreshButton.addEventListener('click', function() {
        this.textContent = '🔄 Refreshing...';
        this.disabled = true;
        
        // 随机更新分数
        leaderboardData.forEach(player => {
          player.score += Math.floor(Math.random() * 200) - 100;
        });
        
        setTimeout(() => {
          renderLeaderboard();
          this.textContent = '🔄 Refresh';
          this.disabled = false;
        }, 1000);
      });

      // 全局函数：更新玩家最佳分数
      window.updatePlayerBest = function(score) {
        if (score > playerBestScore) {
          playerBestScore = score;
          localStorage.setItem('\${gameId}_best', score.toString());
          updatePlayerBest();
          
          // 新纪录庆祝
          const celebration = document.createElement('div');
          celebration.style.cssText = \`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 40px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 24px;
            z-index: 10000;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            border: 2px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
          \`;
          celebration.innerHTML = \`
            <div style="font-size: 48px; margin-bottom: 10px;">🎉</div>
            <div>NEW RECORD!</div>
            <div style="font-size: 32px; color: #ffd700; margin-top: 10px;">\${score.toLocaleString()}</div>
          \`;
          
          document.body.appendChild(celebration);
          
          // 粒子效果
          for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = \`
              position: fixed;
              top: 50%;
              left: 50%;
              width: 8px;
              height: 8px;
              background: \${['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][Math.floor(Math.random() * 5)]};
              border-radius: 50%;
              pointer-events: none;
              z-index: 10001;
              animation: explode 2s ease-out forwards;
            \`;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 2000);
          }
          
          // CSS动画
          const style = document.createElement('style');
          style.textContent = \`
            @keyframes explode {
              0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
              }
              100% {
                transform: translate(\${(Math.random() - 0.5) * 400}px, \${(Math.random() - 0.5) * 400}px) scale(1);
                opacity: 0;
              }
            }
          \`;
          document.head.appendChild(style);
          
          setTimeout(() => {
            celebration.remove();
            style.remove();
          }, 3000);
        }
      };

      // 初始化
      renderLeaderboard();
      updatePlayerBest();

      // 自动显示排行榜（3秒后）
      setTimeout(() => {
        if (!isVisible) {
          toggleLeaderboard();
        }
      }, 3000);
    })();
  <\/script>
  `,gm=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(""),i=so(),l=o=>{o.preventDefault(),n.trim()&&(i(`/search?q=${encodeURIComponent(n.trim())}`),r(""))};return a.jsx("header",{className:"bg-white shadow-sm border-b-2 border-emerald-100",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"flex justify-between items-center h-16",children:[a.jsxs(T,{to:"/",className:"flex items-center space-x-2 group",children:[a.jsx("div",{className:"bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-xl group-hover:from-emerald-500 group-hover:to-teal-600 transition-all duration-200",children:a.jsx(bi,{className:"h-6 w-6 text-white"})}),a.jsx("span",{className:"text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors",children:"Cozyverse"})]}),a.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[a.jsx(T,{to:"/browse",className:"text-gray-700 hover:text-emerald-600 font-medium transition-colors",children:"Browse Games"}),a.jsxs("div",{className:"relative group",children:[a.jsx("button",{className:"text-gray-700 hover:text-emerald-600 font-medium transition-colors",children:"Categories"}),a.jsx("div",{className:"absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",children:a.jsx("div",{className:"p-4 grid grid-cols-1 gap-2",children:de.map(o=>a.jsxs(T,{to:`/category/${o.slug}`,className:"flex items-center space-x-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors",children:[a.jsx("div",{className:"w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center",children:a.jsx("span",{className:"text-emerald-600 text-sm",children:"🎮"})}),a.jsx("span",{className:"text-gray-700 font-medium",children:o.name})]},o.id))})})]}),a.jsx(T,{to:"/admin",className:"text-gray-700 hover:text-emerald-600 font-medium transition-colors",children:"Admin"})]}),a.jsx("form",{onSubmit:l,className:"hidden sm:flex items-center",children:a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",placeholder:"Search cozy games...",value:n,onChange:o=>r(o.target.value),className:"w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"}),a.jsx(Rt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"})]})}),a.jsx("button",{onClick:()=>t(!e),className:"md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors",children:e?a.jsx(em,{className:"h-6 w-6"}):a.jsx(J0,{className:"h-6 w-6"})})]}),e&&a.jsxs("div",{className:"md:hidden py-4 border-t border-gray-100",children:[a.jsx("form",{onSubmit:l,className:"mb-4",children:a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",placeholder:"Search cozy games...",value:n,onChange:o=>r(o.target.value),className:"w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"}),a.jsx(Rt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"})]})}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(T,{to:"/browse",className:"block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors font-medium",onClick:()=>t(!1),children:"Browse All Games"}),a.jsx("div",{className:"font-medium text-gray-900 mb-3 mt-4",children:"Categories"}),de.map(o=>a.jsx(T,{to:`/category/${o.slug}`,className:"block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors",onClick:()=>t(!1),children:o.name},o.id)),a.jsx(T,{to:"/admin",className:"block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors",onClick:()=>t(!1),children:"Admin"})]})]})]})})},ym=()=>a.jsx("footer",{className:"bg-gray-50 border-t border-gray-200",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[a.jsxs("div",{className:"col-span-1 md:col-span-2",children:[a.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[a.jsx("div",{className:"bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-xl",children:a.jsx(bi,{className:"h-6 w-6 text-white"})}),a.jsx("span",{className:"text-xl font-bold text-gray-800",children:"Cozyverse"})]}),a.jsx("p",{className:"text-gray-600 mb-4 max-w-md",children:"Your universe of calm and relaxing games. Discover cozy, wholesome gaming experiences designed to help you unwind and find peace in your daily routine."}),a.jsxs("div",{className:"flex items-center space-x-1 text-sm text-gray-500",children:[a.jsx("span",{children:"Made with"}),a.jsx(V0,{className:"h-4 w-4 text-red-500",fill:"currentColor"}),a.jsx("span",{children:"for peaceful gaming"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-gray-900 mb-4",children:"Explore"}),a.jsxs("ul",{className:"space-y-2",children:[a.jsx("li",{children:a.jsx(T,{to:"/category/puzzle",className:"text-gray-600 hover:text-emerald-600 transition-colors",children:"Puzzle Games"})}),a.jsx("li",{children:a.jsx(T,{to:"/category/simulation",className:"text-gray-600 hover:text-emerald-600 transition-colors",children:"Simulation"})}),a.jsx("li",{children:a.jsx(T,{to:"/category/adventure",className:"text-gray-600 hover:text-emerald-600 transition-colors",children:"Adventure"})}),a.jsx("li",{children:a.jsx(T,{to:"/category/creative",className:"text-gray-600 hover:text-emerald-600 transition-colors",children:"Creative Games"})})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-gray-900 mb-4",children:"Support"}),a.jsxs("ul",{className:"space-y-2",children:[a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-600 hover:text-emerald-600 transition-colors",children:"About Us"})}),a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-600 hover:text-emerald-600 transition-colors",children:"Contact"})}),a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-600 hover:text-emerald-600 transition-colors",children:"Privacy Policy"})}),a.jsx("li",{children:a.jsx("a",{href:"#",className:"text-gray-600 hover:text-emerald-600 transition-colors",children:"Terms of Service"})})]})]})]}),a.jsx("div",{className:"border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500",children:a.jsx("p",{children:"© 2024 Cozyverse. All rights reserved. Find your peaceful gaming sanctuary."})})]})}),vm=(e,t)=>{const n={puzzle:{primary:"#6366F1",secondary:"#8B5CF6",background:"#1E1B4B",accent:"#FDE047"},simulation:{primary:"#0EA5E9",secondary:"#06B6D4",background:"#0C4A6E",accent:"#FCD34D"},adventure:{primary:"#10B981",secondary:"#059669",background:"#064E3B",accent:"#FBBF24"},casual:{primary:"#F59E0B",secondary:"#EAB308",background:"#92400E",accent:"#FEF3C7"},creative:{primary:"#EC4899",secondary:"#BE185D",background:"#831843",accent:"#FDE047"},nature:{primary:"#22C55E",secondary:"#16A34A",background:"#15803D",accent:"#FDE047"}},r=n[e]||n.puzzle,i=Math.random().toString(36).substr(2,9),l=`<svg width="320" height="240" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240">
    <defs>
      <linearGradient id="${i}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${r.background};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${r.primary};stop-opacity:0.9" />
      </linearGradient>
    </defs>
    <rect width="320" height="240" fill="url(#${i})" rx="8"/>
    <rect x="16" y="80" width="288" height="112" rx="8" fill="${r.primary}" opacity="0.8" stroke="${r.accent}" stroke-width="2"/>
    <text x="160" y="135" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="${r.accent}">${t}</text>
    <text x="160" y="165" font-family="Arial, sans-serif" font-size="12" font-weight="600" text-anchor="middle" fill="white" opacity="0.9">${e.toUpperCase()}</text>
  </svg>`;return"data:image/svg+xml,"+encodeURIComponent(l)},wm=(e,t)=>{const n=`game-${e}-${t.toLowerCase().replace(/[^\w]/g,"-")}`;return`
<div style="display: flex; flex-direction: column; align-items: center; padding: 20px; font-family: Arial, sans-serif; background: #f8f9fa; border-radius: 12px;">
  <h3 style="margin: 0 0 15px 0; color: #333; font-size: 24px;">${t}</h3>
  <canvas id="${n}" width="480" height="360" style="border: 3px solid #10B981; border-radius: 12px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); box-shadow: 0 4px 12px rgba(0,0,0,0.15);"></canvas>
  <div style="margin-top: 20px; text-align: center;">
    <button id="start-btn-${n}" onclick="startGame_${n}()" style="padding: 12px 24px; font-size: 16px; background: linear-gradient(135deg, #10B981, #059669); color: white; border: none; border-radius: 8px; cursor: pointer; margin: 0 8px; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3); transition: all 0.3s;">开始游戏</button>
    <button onclick="resetGame_${n}()" style="padding: 12px 24px; font-size: 16px; background: linear-gradient(135deg, #6B7280, #4B5563); color: white; border: none; border-radius: 8px; cursor: pointer; margin: 0 8px; box-shadow: 0 2px 8px rgba(107, 114, 128, 0.3); transition: all 0.3s;">重新开始</button>
  </div>
  <div style="margin-top: 15px; padding: 10px 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <p style="margin: 0; font-size: 18px; color: #333;">得分: <span id="score_${n}" style="color: #10B981; font-weight: bold;">0</span></p>
  </div>
  <p style="margin-top: 10px; font-size: 14px; color: #666; text-align: center; max-width: 400px;">
    ${bm(t)}
  </p>
</div>

<script>
(function() {
  const canvas = document.getElementById('${n}');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let gameState = {
    running: false,
    score: 0,
    level: 1
  };
  
  let gameLoop;
  ${Sm(t)}
  
  window.startGame_${n} = function() {
    if (gameState.running) return;
    gameState.running = true;
    gameState.score = 0;
    updateScore();
    initGame();
    clearInterval(gameLoop);
    gameLoop = setInterval(updateGame, 60);
    document.getElementById('start-btn-${n}').textContent = '游戏中...';
  };
  
  window.resetGame_${n} = function() {
    gameState.running = false;
    gameState.score = 0;
    gameState.level = 1;
    clearInterval(gameLoop);
    updateScore();
    clearCanvas();
    drawStartScreen();
    document.getElementById('start-btn-${n}').textContent = '开始游戏';
  };
  
  function updateScore() {
    const scoreElement = document.getElementById('score_${n}');
    if (scoreElement) {
      scoreElement.textContent = gameState.score;
    }
  }
  
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  function drawStartScreen() {
    // 绘制渐变背景
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f0f9ff');
    gradient.addColorStop(1, '#e0f2fe');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制标题
    ctx.fillStyle = '#10B981';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('${t}', canvas.width/2, canvas.height/2 - 20);
    
    // 绘制说明
    ctx.font = '18px Arial';
    ctx.fillStyle = '#666';
    ctx.fillText('点击"开始游戏"按钮开始', canvas.width/2, canvas.height/2 + 20);
    
    // 绘制图标
    ctx.font = '48px Arial';
    ctx.fillText('🎮', canvas.width/2, canvas.height/2 - 80);
  }
  
  // 初始化显示
  drawStartScreen();
})();
<\/script>`},bm=e=>({2048:"使用鼠标点击移动数字方块，相同数字会合并。目标是达到2048！",Tetris:"点击移动下落的方块，填满一行即可消除。避免方块堆到顶部！","Snake Game":"控制蛇吃食物，小心不要撞到自己或墙壁。","Bubble Shooter":"瞄准并发射气泡，消除相同颜色的气泡群。","City Builder":"点击建造建筑，管理资源，打造你的城市。","Farm Manager":"种植作物，饲养动物，经营你的农场。","Treasure Quest":"探索地图，收集宝藏，避开危险。","Fruit Slicer":"切水果得分，避开炸弹。反应要快！"})[e]||"使用鼠标或键盘控制，收集物品并获得高分！",Sm=(e,t)=>{const n={2048:`
      let board = Array(4).fill().map(() => Array(4).fill(0));
      let tileSize = 100;
      let gap = 10;
      let offsetX = 40;
      let offsetY = 40;
      
      function initGame() {
        board = Array(4).fill().map(() => Array(4).fill(0));
        addNewTile();
        addNewTile();
        drawBoard();
      }
      
      function addNewTile() {
        let emptyCells = [];
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            if(board[i][j] === 0) emptyCells.push({x: i, y: j});
          }
        }
        if(emptyCells.length > 0) {
          let cell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          board[cell.x][cell.y] = Math.random() < 0.9 ? 2 : 4;
        }
      }
      
      function drawBoard() {
        clearCanvas();
        
        // 绘制背景
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#f0f9ff');
        gradient.addColorStop(1, '#e0f2fe');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for(let i = 0; i < 4; i++) {
          for(let j = 0; j < 4; j++) {
            let x = j * (tileSize + gap) + offsetX;
            let y = i * (tileSize + gap) + offsetY;
            
            // 绘制方块背景
            ctx.fillStyle = board[i][j] === 0 ? '#e5e7eb' : getTileColor(board[i][j]);
            ctx.fillRect(x, y, tileSize, tileSize);
            
            // 绘制数字
            if(board[i][j] !== 0) {
              ctx.fillStyle = board[i][j] <= 4 ? '#374151' : '#ffffff';
              ctx.font = 'bold 24px Arial';
              ctx.textAlign = 'center';
              ctx.fillText(board[i][j], x + tileSize/2, y + tileSize/2 + 8);
            }
          }
        }
      }
      
      function getTileColor(value) {
        const colors = {
          2: '#fef3c7', 4: '#fde047', 8: '#facc15', 16: '#eab308',
          32: '#f59e0b', 64: '#d97706', 128: '#b45309', 256: '#92400e',
          512: '#78350f', 1024: '#451a03', 2048: '#10b981'
        };
        return colors[value] || '#10b981';
      }
      
      function moveLeft() {
        let moved = false;
        for(let i = 0; i < 4; i++) {
          let row = board[i].filter(val => val !== 0);
          for(let j = 0; j < row.length - 1; j++) {
            if(row[j] === row[j + 1]) {
              row[j] *= 2;
              gameState.score += row[j];
              row.splice(j + 1, 1);
            }
          }
          while(row.length < 4) row.push(0);
          if(JSON.stringify(board[i]) !== JSON.stringify(row)) moved = true;
          board[i] = row;
        }
        return moved;
      }
      
      function updateGame() {
        if(!gameState.running) return;
        drawBoard();
      }
      
      canvas.addEventListener('click', function(e) {
        if(!gameState.running) return;
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        if(moveLeft()) {
          addNewTile();
          updateScore();
          drawBoard();
        }
      });`,Tetris:`
      let blocks = [];
      let currentBlock = null;
      let blockSize = 30;
      let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3'];
      
      function initGame() {
        blocks = [];
        spawnBlock();
      }
      
      function spawnBlock() {
        currentBlock = {
          x: canvas.width/2 - blockSize/2,
          y: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: 2
        };
      }
      
      function updateGame() {
        if(!gameState.running) return;
        clearCanvas();
        
        // 绘制背景
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 移动当前方块
        if(currentBlock) {
          currentBlock.y += currentBlock.speed;
          if(currentBlock.y > canvas.height - blockSize) {
            blocks.push({...currentBlock, y: canvas.height - blockSize});
            gameState.score += 10;
            updateScore();
            spawnBlock();
            
            // 检查游戏结束
            if(blocks.length > 50) {
              gameState.running = false;
              alert('游戏结束！最终得分：' + gameState.score);
            }
          }
        }
        
        // 绘制所有方块
        blocks.forEach(block => {
          ctx.fillStyle = block.color;
          ctx.fillRect(block.x, block.y, blockSize, blockSize);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(block.x, block.y, blockSize, blockSize);
        });
        
        // 绘制当前方块
        if(currentBlock) {
          ctx.fillStyle = currentBlock.color;
          ctx.fillRect(currentBlock.x, currentBlock.y, blockSize, blockSize);
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.strokeRect(currentBlock.x, currentBlock.y, blockSize, blockSize);
        }
      }
      
      canvas.addEventListener('mousemove', function(e) {
        if(!gameState.running || !currentBlock) return;
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        currentBlock.x = Math.max(0, Math.min(canvas.width - blockSize, x - blockSize/2));
      });`,default:`
      let player = { x: canvas.width/2, y: canvas.height/2, size: 25, color: '#10B981' };
      let targets = [];
      let particles = [];
      
      function initGame() {
        player = { x: canvas.width/2, y: canvas.height/2, size: 25, color: '#10B981' };
        targets = [];
        particles = [];
        for(let i = 0; i < 5; i++) {
          spawnTarget();
        }
      }
      
      function spawnTarget() {
        targets.push({
          x: Math.random() * (canvas.width - 30) + 15,
          y: Math.random() * (canvas.height - 30) + 15,
          size: 15 + Math.random() * 10,
          color: getRandomColor(),
          pulse: 0
        });
      }
      
      function getRandomColor() {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3'];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      function createParticle(x, y) {
        for(let i = 0; i < 5; i++) {
          particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            life: 30,
            color: getRandomColor()
          });
        }
      }
      
      function updateGame() {
        if(!gameState.running) return;
        clearCanvas();
        
        // 绘制星空背景
        const gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height));
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#0f0f0f');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 绘制星星
        for(let i = 0; i < 50; i++) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
        }
        
        // 更新和绘制粒子
        particles = particles.filter(particle => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.life--;
          
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life / 30;
          ctx.fillRect(particle.x, particle.y, 3, 3);
          
          return particle.life > 0;
        });
        ctx.globalAlpha = 1;
        
        // 绘制玩家
        ctx.fillStyle = player.color;
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // 绘制目标
        targets.forEach((target, index) => {
          target.pulse += 0.1;
          let pulseSize = target.size + Math.sin(target.pulse) * 3;
          
          ctx.fillStyle = target.color;
          ctx.beginPath();
          ctx.arc(target.x, target.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // 检测碰撞
          let dx = player.x - target.x;
          let dy = player.y - target.y;
          if(Math.sqrt(dx*dx + dy*dy) < player.size + target.size) {
            createParticle(target.x, target.y);
            targets.splice(index, 1);
            gameState.score += 100;
            updateScore();
            spawnTarget();
          }
        });
      }
      
      canvas.addEventListener('mousemove', function(e) {
        if(!gameState.running) return;
        let rect = canvas.getBoundingClientRect();
        player.x = e.clientX - rect.left;
        player.y = e.clientY - rect.top;
      });`};return n[e]||n.default},cd=()=>{const e=[];return Object.entries({puzzle:[{name:"2048",icon:"🎲"},{name:"Tetris",icon:"🧱"},{name:"Sudoku",icon:"🔢"},{name:"Chess Master",icon:"♟️"},{name:"Bubble Shooter",icon:"🫧"},{name:"Solitaire",icon:"🃏"},{name:"Mahjong",icon:"🀄"},{name:"Word Search",icon:"🔍"},{name:"Crossword",icon:"📝"},{name:"Jigsaw Puzzle",icon:"🧩"},{name:"Snake Game",icon:"🐍"},{name:"Checkers",icon:"🔴"},{name:"Minesweeper",icon:"💣"},{name:"FreeCell",icon:"🃏"},{name:"Spider Solitaire",icon:"🕷️"},{name:"Block Puzzle",icon:"🧱"},{name:"Match 3 Gems",icon:"💎"},{name:"Tangram",icon:"🔷"},{name:"Nonogram",icon:"📊"},{name:"Logic Grid",icon:"🔢"},{name:"Number Link",icon:"🧮"},{name:"Pattern Match",icon:"🎯"},{name:"Color Lines",icon:"🌈"},{name:"Brain Teaser",icon:"🧠"},{name:"Mind Bender",icon:"🤔"},{name:"Rubiks Cube",icon:"🎲"},{name:"Picross",icon:"📱"},{name:"Kakuro",icon:"➕"},{name:"Slitherlink",icon:"🔗"},{name:"KenKen",icon:"🔢"}],simulation:[{name:"City Builder",icon:"🏙️"},{name:"Farm Manager",icon:"🚜"},{name:"Theme Park",icon:"🎢"},{name:"Zoo Keeper",icon:"🦁"},{name:"Restaurant Chef",icon:"🍽️"},{name:"Airport Control",icon:"✈️"},{name:"Hospital Director",icon:"🏥"},{name:"Train Conductor",icon:"🚂"},{name:"Mall Manager",icon:"🛍️"},{name:"Gas Station Owner",icon:"⛽"},{name:"Car Dealership",icon:"🚗"},{name:"Hair Salon",icon:"💇"},{name:"Pizza Kitchen",icon:"🍕"},{name:"Ice Cream Truck",icon:"🍦"},{name:"Bakery Business",icon:"🥖"},{name:"Taxi Company",icon:"🚕"},{name:"Bus Route",icon:"🚌"},{name:"Delivery Service",icon:"🚚"},{name:"Factory Owner",icon:"🏭"},{name:"Mining Operation",icon:"⛏️"},{name:"Oil Drilling",icon:"🛢️"},{name:"Space Mission",icon:"🚀"},{name:"Amusement Park",icon:"🎢"},{name:"Grocery Store",icon:"🛒"},{name:"Hotel Empire",icon:"🏨"},{name:"Pet Daycare",icon:"🐕"},{name:"Coffee House",icon:"☕"},{name:"Lemonade Business",icon:"🍋"},{name:"School Principal",icon:"🎓"},{name:"Aquarium Keeper",icon:"🐠"}],adventure:[{name:"Treasure Quest",icon:"🗝️"},{name:"Pirate Adventure",icon:"🏴‍☠️"},{name:"Jungle Explorer",icon:"🌴"},{name:"Cave Spelunker",icon:"🕳️"},{name:"Mountain Climber",icon:"⛰️"},{name:"Desert Wanderer",icon:"🏜️"},{name:"Space Odyssey",icon:"🛸"},{name:"Ocean Diver",icon:"🌊"},{name:"Castle Explorer",icon:"🏰"},{name:"Dragon Hunter",icon:"🐉"},{name:"Knight Quest",icon:"⚔️"},{name:"Magic Academy",icon:"🧙"},{name:"Ninja Adventure",icon:"🥷"},{name:"Pirate Gold",icon:"💰"},{name:"Ancient Temple",icon:"🏛️"},{name:"Escape Challenge",icon:"🚪"},{name:"Mystery House",icon:"👻"},{name:"Ghost Detective",icon:"👻"},{name:"Time Explorer",icon:"⏰"},{name:"Alien World",icon:"👽"},{name:"Hero Mission",icon:"🦸"},{name:"Spy Operation",icon:"🕵️"},{name:"Dino Island",icon:"🦕"},{name:"Enchanted Forest",icon:"🌳"},{name:"Lost City",icon:"🏺"},{name:"Robot Lab",icon:"🤖"},{name:"Cyber City",icon:"🏙️"},{name:"Viking Journey",icon:"⚡"},{name:"Samurai Path",icon:"🗾"},{name:"Arctic Explorer",icon:"🐧"}],casual:[{name:"Fruit Slicer",icon:"🍎"},{name:"Flying Bird",icon:"🐦"},{name:"Bouncing Ball",icon:"🦘"},{name:"Endless Runner",icon:"🏃"},{name:"City Surfer",icon:"🚇"},{name:"Sky Jumper",icon:"🐦"},{name:"Cookie Tap",icon:"🍪"},{name:"Music Tiles",icon:"🎹"},{name:"Shape Dash",icon:"📐"},{name:"Tower Stack",icon:"📚"},{name:"Ball Fall",icon:"⚽"},{name:"Color Jump",icon:"🔄"},{name:"Spiral Drop",icon:"🌀"},{name:"Target Hit",icon:"🔪"},{name:"Flip Challenge",icon:"🍾"},{name:"Paper Flight",icon:"✈️"},{name:"Bubble Burst",icon:"🫧"},{name:"Cut Rope",icon:"✂️"},{name:"Brick Break",icon:"🧱"},{name:"Ball Bounce",icon:"📌"},{name:"Dot Eater",icon:"👻"},{name:"Road Cross",icon:"🐸"},{name:"Space Shooter",icon:"👾"},{name:"Rock Dodge",icon:"☄️"},{name:"Bug Blast",icon:"🐛"},{name:"Paddle Game",icon:"🏓"},{name:"Wall Break",icon:"🏓"},{name:"Star Fighter",icon:"🛸"},{name:"Shield Guard",icon:"🛡️"},{name:"Cube Jump",icon:"🎯"}],creative:[{name:"Digital Canvas",icon:"✏️"},{name:"Beat Studio",icon:"🎵"},{name:"Story Writer",icon:"📖"},{name:"Motion Creator",icon:"🎬"},{name:"Image Editor",icon:"📸"},{name:"Brand Designer",icon:"🎨"},{name:"Card Creator",icon:"🃏"},{name:"Flag Maker",icon:"🏳️"},{name:"Ad Designer",icon:"📰"},{name:"Comic Studio",icon:"📚"},{name:"Pixel Editor",icon:"🟫"},{name:"Paint Studio",icon:"🖌️"},{name:"Design Builder",icon:"🔳"},{name:"Color Studio",icon:"🎨"},{name:"Art Book",icon:"📝"},{name:"Video Maker",icon:"🎥"},{name:"Audio Lab",icon:"🎧"},{name:"Rhythm Creator",icon:"🥁"},{name:"Tune Maker",icon:"🎶"},{name:"Mix Master",icon:"🎧"},{name:"Gallery Curator",icon:"🖼️"},{name:"Style Designer",icon:"👗"},{name:"Interior Design",icon:"🏠"},{name:"Landscape Planner",icon:"🌻"},{name:"Building Designer",icon:"🏗️"},{name:"Sculpture Maker",icon:"🗿"},{name:"Clay Studio",icon:"🏺"},{name:"Gem Designer",icon:"💍"},{name:"Body Artist",icon:"🎭"},{name:"Beauty Studio",icon:"💄"}],nature:[{name:"Garden Designer",icon:"🌺"},{name:"Forest Guardian",icon:"🌲"},{name:"Marine Biologist",icon:"🌊"},{name:"Peak Climber",icon:"⛰️"},{name:"Oasis Keeper",icon:"🏜️"},{name:"Jungle Guide",icon:"🌴"},{name:"Polar Researcher",icon:"🐧"},{name:"Safari Guide",icon:"🦁"},{name:"Reef Explorer",icon:"🐠"},{name:"Bird Watcher",icon:"🦅"},{name:"Butterfly Keeper",icon:"🦋"},{name:"Bee Farmer",icon:"🐝"},{name:"Mushroom Hunter",icon:"🍄"},{name:"Flower Grower",icon:"🌸"},{name:"Tree Builder",icon:"🏠"},{name:"Wildlife Protector",icon:"🦌"},{name:"Weather Tracker",icon:"⛅"},{name:"Season Keeper",icon:"🔄"},{name:"Eco Builder",icon:"🌍"},{name:"Earth Guardian",icon:"🌍"},{name:"Planet Explorer",icon:"🪐"},{name:"Star Observer",icon:"⭐"},{name:"Lunar Explorer",icon:"🌙"},{name:"Volcano Watcher",icon:"🌋"},{name:"Seismic Monitor",icon:"🌍"},{name:"Wave Tracker",icon:"🌊"},{name:"Storm Chaser",icon:"🌀"},{name:"Wind Walker",icon:"🌪️"},{name:"Lightning Catcher",icon:"⚡"},{name:"Aurora Seeker",icon:"🌌"}]}).forEach(([n,r])=>{r.forEach((i,l)=>{e.push({id:`${n.charAt(0)}${l+1}`,title:i.name,slug:i.name.toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g,"-"),description:`Experience ${i.name} - an engaging ${n} game with captivating gameplay and beautiful graphics. Perfect for players who enjoy ${n} entertainment!`,coverImage:vm(n,i.name),categories:[n],controls:"Mouse and keyboard controls",popularityScore:Math.floor(Math.random()*1500)+3500,status:"published",publishedAt:new Date(2024,0,30-Math.floor(l/2)).toISOString(),gameType:"canvas",gameCode:wm(n,i.name),icon:i.icon})})}),e};cd();const km=[{id:"puzzle",name:"Puzzle",slug:"puzzle",description:"Brain-teasing games that challenge your logic and problem-solving skills",icon:"🧩",color:"from-purple-400 to-pink-400",gameCount:30},{id:"simulation",name:"Simulation",slug:"simulation",description:"Life-like experiences that let you build, manage, and create",icon:"🏗️",color:"from-blue-400 to-cyan-400",gameCount:30},{id:"adventure",name:"Adventure",slug:"adventure",description:"Peaceful exploration and discovery games",icon:"🗺️",color:"from-green-400 to-emerald-400",gameCount:30},{id:"casual",name:"Casual",slug:"casual",description:"Easy-to-play games perfect for quick relaxation breaks",icon:"🎯",color:"from-yellow-400 to-orange-400",gameCount:30},{id:"creative",name:"Creative",slug:"creative",description:"Express yourself through art, music, and design",icon:"🎨",color:"from-indigo-400 to-purple-400",gameCount:30},{id:"nature",name:"Nature",slug:"nature",description:"Connect with the natural world through immersive experiences",icon:"🌲",color:"from-green-400 to-teal-400",gameCount:30}];cd();const un=({game:e,variant:t="default",showPopularity:n=!1})=>{const r=km.find(i=>i.slug===e.categories[0]);return t==="grid"?a.jsxs(T,{to:`/game/${e.slug}`,className:"group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-emerald-300 overflow-hidden",children:[a.jsxs("div",{className:"aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden",children:[a.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),a.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center",children:a.jsx(hl,{className:"h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"})}),n&&a.jsx("div",{className:"absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700",children:a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(cn,{className:"h-3 w-3 text-yellow-500 fill-current"}),a.jsxs("span",{children:[(e.popularityScore/1e3).toFixed(1),"k"]})]})})]}),a.jsxs("div",{className:"p-2",children:[a.jsx("h3",{className:"font-semibold text-gray-900 text-xs mb-1 line-clamp-2 group-hover:text-emerald-600 transition-colors",children:e.title}),r&&a.jsx("p",{className:"text-xs text-gray-500",children:r.name})]})]}):t==="compact"?a.jsxs(T,{to:`/game/${e.slug}`,className:"group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-emerald-300 overflow-hidden",children:[a.jsxs("div",{className:"aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden",children:[a.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),a.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center",children:a.jsx(hl,{className:"h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"})}),n&&a.jsx("div",{className:"absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700",children:a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(cn,{className:"h-3 w-3 text-yellow-500 fill-current"}),a.jsxs("span",{children:[(e.popularityScore/1e3).toFixed(1),"k"]})]})})]}),a.jsxs("div",{className:"p-3",children:[a.jsx("h3",{className:"font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-emerald-600 transition-colors",children:e.title}),a.jsx("p",{className:"text-xs text-gray-600 line-clamp-2 mb-2",children:e.description}),r&&a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs text-gray-500",children:r.name}),n&&a.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500",children:[a.jsx(Rs,{className:"h-3 w-3"}),a.jsxs("span",{children:[(e.popularityScore/1e3).toFixed(1),"k"]})]})]})]})]}):a.jsx(T,{to:`/game/${e.slug}`,className:"group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-emerald-300 overflow-hidden",children:a.jsxs("div",{className:"flex",children:[a.jsxs("div",{className:"w-32 h-24 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex-shrink-0",children:[a.jsx("img",{src:e.coverImage,alt:e.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),a.jsx("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center",children:a.jsx(hl,{className:"h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"})})]}),a.jsxs("div",{className:"flex-1 p-3",children:[a.jsxs("div",{className:"flex items-start justify-between mb-2",children:[a.jsx("h3",{className:"font-semibold text-gray-900 text-sm line-clamp-1 group-hover:text-emerald-600 transition-colors",children:e.title}),n&&a.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500 ml-2",children:[a.jsx(cn,{className:"h-3 w-3 text-yellow-500 fill-current"}),a.jsxs("span",{children:[(e.popularityScore/1e3).toFixed(1),"k"]})]})]}),a.jsx("p",{className:"text-xs text-gray-600 line-clamp-2 mb-2",children:e.description}),a.jsxs("div",{className:"flex items-center justify-between",children:[r&&a.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full",children:[a.jsx("span",{children:r.icon}),a.jsx("span",{children:r.name})]}),a.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500",children:[a.jsx(Rs,{className:"h-3 w-3"}),a.jsxs("span",{children:[(e.popularityScore/1e3).toFixed(1),"k players"]})]})]})]})]})})},jm=()=>{const e=mm(15),t=hm(12);return a.jsxs("div",{className:"min-h-screen bg-gray-50",children:[a.jsx("section",{className:"bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-12",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"grid lg:grid-cols-3 gap-8 items-start",children:[a.jsx("div",{className:"lg:col-span-2",children:a.jsxs("div",{className:"max-w-2xl",children:[a.jsxs("h1",{className:"text-4xl md:text-5xl font-bold leading-tight mb-6",children:["Welcome to"," ",a.jsx("span",{className:"bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent",children:"Cozyverse"})]}),a.jsx("p",{className:"text-xl text-emerald-100 mb-8 leading-relaxed",children:"Your peaceful gaming sanctuary. Discover carefully curated games designed for relaxation, creativity, and gentle fun - no stress, no pressure - just pure, gentle entertainment."}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[a.jsxs(T,{to:"/browse",className:"bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2",children:[a.jsx("span",{children:"Browse All Games"}),a.jsx(Mn,{className:"h-5 w-5"})]}),a.jsxs("div",{className:"flex items-center gap-6 text-emerald-100",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-white",children:Q.length}),a.jsx("div",{className:"text-sm",children:"Games"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"text-2xl font-bold text-white",children:de.length}),a.jsx("div",{className:"text-sm",children:"Categories"})]})]})]})]})}),a.jsx("div",{className:"lg:col-span-1",children:a.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20",children:[a.jsx("h2",{className:"text-lg font-semibold text-white mb-4",children:"Game Categories"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs(T,{to:"/browse",className:"w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors bg-emerald-50 text-emerald-700 font-medium border border-emerald-200",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-base",children:"🎯"}),a.jsx("span",{children:"All Games"})]}),a.jsx("span",{className:"text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full",children:Q.length})]}),de.map(n=>a.jsxs(T,{to:`/category/${n.slug}`,className:"w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 hover:text-emerald-600",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-base",children:n.icon}),a.jsx("span",{children:n.name})]}),a.jsx("span",{className:"text-xs text-gray-500",children:n.gameCount})]},n.id))]}),a.jsxs("div",{className:"mt-6 pt-4 border-t border-gray-200",children:[a.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-3",children:"Game Library"}),a.jsxs("div",{className:"space-y-2 text-sm text-gray-600",children:[a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"Total Games"}),a.jsx("span",{className:"font-medium",children:Q.length})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"Categories"}),a.jsx("span",{className:"font-medium",children:de.length})]})]})]})]})})]})})}),a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:a.jsxs("div",{className:"lg:grid lg:grid-cols-4 lg:gap-8",children:[a.jsx("div",{className:"lg:col-span-1 mb-8 lg:mb-0",children:a.jsxs("div",{className:"bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-4",children:[a.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-4",children:"Game Categories"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs(T,{to:"/browse",className:"w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors bg-emerald-50 text-emerald-700 font-medium border border-emerald-200",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-base",children:"🎯"}),a.jsx("span",{children:"All Games"})]}),a.jsx("span",{className:"text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full",children:Q.length})]}),de.map(n=>a.jsxs(T,{to:`/category/${n.slug}`,className:"w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors text-gray-700 hover:bg-gray-50 hover:text-emerald-600",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-base",children:n.icon}),a.jsx("span",{children:n.name})]}),a.jsx("span",{className:"text-xs text-gray-500",children:n.gameCount})]},n.id))]}),a.jsxs("div",{className:"mt-6 pt-4 border-t border-gray-200",children:[a.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-3",children:"Game Library"}),a.jsxs("div",{className:"space-y-2 text-sm text-gray-600",children:[a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"Total Games"}),a.jsx("span",{className:"font-medium",children:Q.length})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"Categories"}),a.jsx("span",{className:"font-medium",children:de.length})]})]})]})]})}),a.jsxs("div",{className:"lg:col-span-3",children:[a.jsxs("section",{className:"mb-8",children:[a.jsxs("div",{className:"flex items-center justify-between mb-5",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"bg-orange-100 rounded-lg p-1.5",children:a.jsx(uo,{className:"h-4 w-4 text-orange-600"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"Most Popular"}),a.jsx("p",{className:"text-gray-600 text-xs",children:"The games everyone's playing"})]})]}),a.jsxs(T,{to:"/browse?sort=popularity",className:"text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 text-sm",children:["View All",a.jsx(Mn,{className:"h-3 w-3"})]})]}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",children:e.map(n=>a.jsx(un,{game:n,variant:"grid",showPopularity:!0},n.id))})]}),a.jsxs("section",{className:"mb-8",children:[a.jsxs("div",{className:"flex items-center justify-between mb-5",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"bg-emerald-100 rounded-lg p-1.5",children:a.jsx(od,{className:"h-4 w-4 text-emerald-600"})}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-gray-900",children:"New Arrivals"}),a.jsx("p",{className:"text-gray-600 text-xs",children:"Fresh games just added"})]})]}),a.jsxs(T,{to:"/browse?sort=newest",className:"text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 text-sm",children:["View All",a.jsx(Mn,{className:"h-3 w-3"})]})]}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4",children:t.map(n=>a.jsx(un,{game:n,variant:"compact",showPopularity:!0},n.id))})]}),a.jsx("section",{children:a.jsx("div",{className:"space-y-8",children:de.map(n=>{const r=sd(n.slug).slice(0,10);return r.length===0?null:a.jsxs("div",{className:"bg-white rounded-lg p-4 shadow-sm border border-gray-200",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"bg-gray-50 rounded-lg p-1.5",children:a.jsx("span",{className:"text-base",children:n.icon})}),a.jsxs("div",{children:[a.jsxs("h2",{className:"text-lg font-bold text-gray-900",children:[n.name," Games"]}),a.jsx("p",{className:"text-gray-600 text-xs",children:n.description})]})]}),a.jsxs(T,{to:`/category/${n.slug}`,className:"text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 text-sm",children:["View All",a.jsx(Mn,{className:"h-3 w-3"})]})]}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",children:r.map(i=>a.jsx(un,{game:i,variant:"grid",showPopularity:!1},i.id))})]},n.id)})})})]})]})}),a.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:a.jsx("div",{className:"bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6 text-center text-white",children:a.jsxs("div",{className:"max-w-xl mx-auto",children:[a.jsx("div",{className:"flex justify-center mb-3",children:a.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-full p-2",children:a.jsx(cn,{className:"h-5 w-5 text-white"})})}),a.jsx("h2",{className:"text-xl font-bold mb-2",children:"Ready to Start Playing?"}),a.jsx("p",{className:"text-emerald-100 mb-4",children:"Join thousands of players in our cozy gaming community"}),a.jsxs(T,{to:"/browse",className:"inline-flex items-center gap-2 bg-white text-emerald-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg",children:[a.jsx("span",{children:"Explore All Games"}),a.jsx(Mn,{className:"h-4 w-4"})]})]})})})]})},Cm=()=>{var x;const[e,t]=S.useState(""),[n,r]=S.useState("all"),[i,l]=S.useState("popularity"),[o,s]=S.useState("grid"),[c,u]=S.useState(!1),h=S.useMemo(()=>{let g=Q.filter(v=>{const w=v.title.toLowerCase().includes(e.toLowerCase())||v.description.toLowerCase().includes(e.toLowerCase()),j=n==="all"||v.categories.includes(n);return w&&j});return g.sort((v,w)=>{switch(i){case"popularity":return w.popularityScore-v.popularityScore;case"newest":return new Date(w.publishedAt).getTime()-new Date(v.publishedAt).getTime();case"title":return v.title.localeCompare(w.title);default:return 0}}),g},[e,n,i]),f=[{id:"all",name:"All Games",slug:"all",icon:"🎮",gameCount:Q.length},...de];return a.jsxs("div",{className:"min-h-screen bg-gray-50",children:[a.jsx("div",{className:"bg-white border-b border-gray-200 sticky top-0 z-10",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"py-4",children:a.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Browse Games"}),a.jsx("p",{className:"text-gray-600 text-sm",children:"Discover your next favorite cozy game"})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 lg:w-auto w-full",children:[a.jsxs("div",{className:"relative flex-1 lg:w-80",children:[a.jsx(Rt,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"}),a.jsx("input",{type:"text",placeholder:"Search games...",value:e,onChange:g=>t(g.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"})]}),a.jsxs("div",{className:"flex items-center bg-gray-100 rounded-lg p-1",children:[a.jsx("button",{onClick:()=>s("grid"),className:`p-2 rounded-md transition-colors ${o==="grid"?"bg-white text-emerald-600 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:a.jsx(Y0,{className:"h-4 w-4"})}),a.jsx("button",{onClick:()=>s("list"),className:`p-2 rounded-md transition-colors ${o==="list"?"bg-white text-emerald-600 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:a.jsx(X0,{className:"h-4 w-4"})})]}),a.jsxs("button",{onClick:()=>u(!c),className:"lg:hidden flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors",children:[a.jsx(Z0,{className:"h-4 w-4"}),"Filters"]})]})]})})})}),a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:a.jsxs("div",{className:"flex gap-6",children:[a.jsx("div",{className:`lg:block ${c?"block":"hidden"} lg:w-64 w-full lg:static fixed inset-0 lg:inset-auto bg-white lg:bg-transparent z-20 lg:z-auto`,children:a.jsxs("div",{className:"lg:sticky lg:top-24",children:[a.jsxs("div",{className:"lg:hidden flex items-center justify-between p-4 border-b border-gray-200",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Filters"}),a.jsx("button",{onClick:()=>u(!1),className:"text-gray-400 hover:text-gray-600",children:"×"})]}),a.jsxs("div",{className:"p-4 lg:p-0",children:[a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide",children:"Categories"}),a.jsx("div",{className:"space-y-1",children:f.map(g=>a.jsxs("button",{onClick:()=>{r(g.slug),u(!1)},className:`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${n===g.slug?"bg-emerald-100 text-emerald-700 font-medium":"text-gray-700 hover:bg-gray-100"}`,children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-base",children:g.icon||"🎮"}),a.jsx("span",{children:g.name})]}),a.jsx("span",{className:"text-xs text-gray-500",children:g.gameCount})]},g.id))})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide",children:"Sort By"}),a.jsxs("div",{className:"space-y-1",children:[a.jsxs("button",{onClick:()=>l("popularity"),className:`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${i==="popularity"?"bg-emerald-100 text-emerald-700 font-medium":"text-gray-700 hover:bg-gray-100"}`,children:[a.jsx(uo,{className:"h-4 w-4"}),"Most Popular"]}),a.jsxs("button",{onClick:()=>l("newest"),className:`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${i==="newest"?"bg-emerald-100 text-emerald-700 font-medium":"text-gray-700 hover:bg-gray-100"}`,children:[a.jsx(od,{className:"h-4 w-4"}),"Newest"]}),a.jsxs("button",{onClick:()=>l("title"),className:`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${i==="title"?"bg-emerald-100 text-emerald-700 font-medium":"text-gray-700 hover:bg-gray-100"}`,children:[a.jsx("span",{className:"h-4 w-4 flex items-center justify-center text-xs font-bold",children:"A-Z"}),"Alphabetical"]})]})]}),a.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[a.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-2",children:"Game Library"}),a.jsxs("div",{className:"space-y-2 text-sm text-gray-600",children:[a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"Total Games"}),a.jsx("span",{className:"font-medium",children:Q.length})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"Categories"}),a.jsx("span",{className:"font-medium",children:de.length})]}),a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"Showing"}),a.jsx("span",{className:"font-medium text-emerald-600",children:h.length})]})]})]})]})]})}),c&&a.jsx("div",{className:"lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10",onClick:()=>u(!1)}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"flex items-center justify-between mb-6",children:a.jsxs("div",{children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:n==="all"?"All Games":((x=de.find(g=>g.slug===n))==null?void 0:x.name)||"Games"}),a.jsxs("p",{className:"text-sm text-gray-600",children:[h.length," games found",e&&` for "${e}"`]})]})}),h.length>0?a.jsx("div",{className:o==="grid"?"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4":"space-y-4",children:h.map(g=>a.jsx(un,{game:g,variant:o==="grid"?"grid":"compact",showPopularity:!0},g.id))}):a.jsxs("div",{className:"text-center py-12",children:[a.jsx("div",{className:"text-gray-400 mb-4",children:a.jsx(Rt,{className:"h-12 w-12 mx-auto"})}),a.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No games found"}),a.jsx("p",{className:"text-gray-600",children:e?`No games match "${e}". Try a different search term.`:"No games available in this category."}),(e||n!=="all")&&a.jsx("button",{onClick:()=>{t(""),r("all")},className:"mt-4 text-emerald-600 hover:text-emerald-700 font-medium",children:"Clear filters"})]}),h.length>20&&a.jsx("div",{className:"text-center mt-12",children:a.jsx("button",{className:"bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors",children:"Load More Games"})})]})]})})]})},Nm=()=>{const{slug:e}=rd(),[t,n]=S.useState(!1),r=S.useRef(null),i=Q.find(o=>o.slug===e);if(S.useEffect(()=>{const o=document.createElement("style");if(o.textContent=`
      .game-container * {
        box-sizing: border-box !important;
      }
      .game-container > div {
        width: 100% !important;
        height: auto !important;
        min-height: auto !important;
        overflow: visible !important;
      }
    `,document.head.appendChild(o),i&&r.current){r.current.innerHTML="";const s=document.createElement("div");s.innerHTML=i.gameCode;const c=s.querySelectorAll("script"),u=s.querySelector("div");u&&(r.current.appendChild(u.cloneNode(!0)),c.forEach(h=>{const f=document.createElement("script");h.src?f.src=h.src:f.textContent=h.textContent,document.head.appendChild(f),setTimeout(()=>{f.parentNode&&f.parentNode.removeChild(f)},100)}))}return()=>{r.current&&(r.current.innerHTML=""),o.parentNode&&o.parentNode.removeChild(o)}},[i]),!i)return a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Game Not Found"}),a.jsx(T,{to:"/",className:"text-emerald-600 hover:text-emerald-700 font-medium",children:"Return to Home"})]})});const l=()=>{n(!t)};return a.jsxs("div",{className:"min-h-screen bg-gray-50",children:[a.jsx("div",{className:"bg-white border-b border-gray-200",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:a.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[a.jsx(T,{to:"/",className:"text-emerald-600 hover:text-emerald-700 transition-colors",children:"Home"}),a.jsx("span",{className:"text-gray-400",children:"/"}),a.jsx("span",{className:"text-gray-600",children:"Games"}),a.jsx("span",{className:"text-gray-400",children:"/"}),a.jsx("span",{className:"text-gray-900 font-medium",children:i.title})]})})}),a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[a.jsxs("div",{className:"lg:col-span-2",children:[a.jsxs(T,{to:"/",className:"inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors",children:[a.jsx(co,{className:"h-4 w-4"}),a.jsx("span",{children:"Back to Games"})]}),a.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-4",children:i.title}),a.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-6",children:[a.jsxs("div",{className:"flex items-center space-x-1 text-sm text-gray-600",children:[a.jsx(cn,{className:"h-4 w-4 text-yellow-500",fill:"currentColor"}),a.jsx("span",{className:"font-medium",children:i.popularityScore.toLocaleString()}),a.jsx("span",{children:"plays"})]}),a.jsxs("div",{className:"flex items-center space-x-1 text-sm text-gray-600",children:[a.jsx(W0,{className:"h-4 w-4"}),a.jsxs("span",{children:["Added ",new Date(i.publishedAt).toLocaleDateString()]})]})]}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:i.categories.map(o=>a.jsxs(T,{to:`/category/${o}`,className:"inline-flex items-center space-x-1 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 text-sm font-medium rounded-full transition-colors",children:[a.jsx(q0,{className:"h-3 w-3"}),a.jsx("span",{className:"capitalize",children:o})]},o))}),a.jsxs("div",{className:`relative bg-white rounded-2xl shadow-lg overflow-hidden mb-8 ${t?"fixed inset-0 z-50 rounded-none":""}`,children:[a.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200",children:[a.jsxs("h3",{className:"font-semibold text-gray-900",children:["Now Playing: ",i.title]}),a.jsxs("button",{onClick:l,className:"flex items-center space-x-2 px-3 py-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors",children:[a.jsx(K0,{className:"h-4 w-4"}),a.jsx("span",{children:t?"Exit":"Fullscreen"})]})]}),a.jsx("div",{ref:r,className:`game-container ${t?"h-full":"min-h-[700px]"} w-full overflow-auto`,style:{maxWidth:"100%",width:"100%"}})]}),a.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8",children:[a.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"About This Game"}),a.jsx("p",{className:"text-gray-700 leading-relaxed mb-6",children:i.description}),i.controls&&a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"How to Play"}),a.jsx("p",{className:"text-gray-600 text-sm",children:i.controls})]})]}),a.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100 mb-8",children:[a.jsx("p",{className:"text-purple-600 font-medium text-sm",children:"Advertisement Space"}),a.jsx("p",{className:"text-purple-500 text-xs mt-1",children:"In-Content Ad (728x90)"})]})]}),a.jsxs("div",{className:"lg:col-span-1",children:[a.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100 mb-8 sticky top-4",children:[a.jsx("p",{className:"text-blue-600 font-medium text-sm",children:"Advertisement Space"}),a.jsx("p",{className:"text-blue-500 text-xs mt-1",children:"Sidebar Ad (300x250)"}),a.jsx("div",{className:"mt-4 bg-white bg-opacity-50 rounded-lg p-8",children:a.jsx("div",{className:"w-full h-32 bg-blue-100 rounded-lg flex items-center justify-center",children:a.jsx("span",{className:"text-blue-400 text-sm",children:"Ad Content"})})})]}),a.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6",children:[a.jsx("h3",{className:"font-semibold text-gray-900 mb-4",children:"Game Statistics"}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-gray-600",children:"Popularity Score"}),a.jsx("span",{className:"font-semibold text-gray-900",children:i.popularityScore.toLocaleString()})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-gray-600",children:"Categories"}),a.jsx("span",{className:"font-semibold text-gray-900",children:i.categories.length})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-gray-600",children:"Status"}),a.jsx("span",{className:"inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full capitalize",children:i.status})]})]})]})]})]})})]})},Em=()=>{const{slug:e}=rd(),t=de.find(r=>r.slug===e),n=e?sd(e):[];return t?a.jsxs("div",{className:"min-h-screen bg-gray-50",children:[a.jsx("div",{className:"bg-white border-b border-gray-200",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:a.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[a.jsx(T,{to:"/",className:"text-emerald-600 hover:text-emerald-700 transition-colors",children:"Home"}),a.jsx("span",{className:"text-gray-400",children:"/"}),a.jsx("span",{className:"text-gray-600",children:"Categories"}),a.jsx("span",{className:"text-gray-400",children:"/"}),a.jsx("span",{className:"text-gray-900 font-medium",children:t.name})]})})}),a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs(T,{to:"/",className:"inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors",children:[a.jsx(co,{className:"h-4 w-4"}),a.jsx("span",{children:"Back to Home"})]}),a.jsxs("div",{className:"bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white mb-8",children:[a.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[a.jsx("div",{className:"bg-white bg-opacity-20 rounded-xl p-3",children:a.jsx("span",{className:"text-3xl",children:"🎮"})}),a.jsxs("div",{children:[a.jsxs("h1",{className:"text-3xl sm:text-4xl font-bold",children:["Cozy ",t.name]}),a.jsxs("p",{className:"text-emerald-100 mt-2",children:[n.length," games available"]})]})]}),a.jsx("p",{className:"text-lg opacity-90 max-w-3xl leading-relaxed",children:t.description})]}),n.length>0?a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6",children:n.map(r=>a.jsx(un,{game:r,variant:"grid"},r.id))}):a.jsxs("div",{className:"text-center py-16",children:[a.jsx("div",{className:"bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center",children:a.jsx(H0,{className:"h-8 w-8 text-gray-400"})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"No Games Found"}),a.jsx("p",{className:"text-gray-600 mb-6",children:"We're still adding games to this category. Check back soon!"}),a.jsx(T,{to:"/",className:"inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors",children:a.jsx("span",{children:"Explore Other Categories"})})]})]})]}):a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Category Not Found"}),a.jsx(T,{to:"/",className:"text-emerald-600 hover:text-emerald-700 font-medium",children:"Return to Home"})]})})},zm=()=>{const[e]=F0(),t=e.get("q")||"",n=t?xm(t):[];return a.jsxs("div",{className:"min-h-screen bg-gray-50",children:[a.jsx("div",{className:"bg-white border-b border-gray-200",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:a.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[a.jsx(T,{to:"/",className:"text-emerald-600 hover:text-emerald-700 transition-colors",children:"Home"}),a.jsx("span",{className:"text-gray-400",children:"/"}),a.jsx("span",{className:"text-gray-900 font-medium",children:"Search Results"})]})})}),a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[a.jsxs(T,{to:"/",className:"inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors",children:[a.jsx(co,{className:"h-4 w-4"}),a.jsx("span",{children:"Back to Home"})]}),a.jsxs("div",{className:"bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8",children:[a.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[a.jsx("div",{className:"bg-emerald-100 rounded-xl p-2",children:a.jsx(Rt,{className:"h-6 w-6 text-emerald-600"})}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-900",children:"Search Results"}),a.jsx("p",{className:"text-gray-600",children:t?a.jsxs(a.Fragment,{children:["Found ",n.length," result",n.length!==1?"s":"",' for "',t,'"']}):"Enter a search term to find games"})]})]}),t&&a.jsx("div",{className:"bg-emerald-50 rounded-xl p-4",children:a.jsxs("p",{className:"text-emerald-700 font-medium",children:['Searched for: "',t,'"']})})]}),t&&n.length>0?a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6",children:n.map(r=>a.jsx(un,{game:r,variant:"grid"},r.id))}):t&&n.length===0?a.jsxs("div",{className:"text-center py-16",children:[a.jsx("div",{className:"bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center",children:a.jsx(Rt,{className:"h-8 w-8 text-gray-400"})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"No Games Found"}),a.jsxs("p",{className:"text-gray-600 mb-6",children:[`We couldn't find any games matching "`,t,'". Try different keywords or browse our categories.']}),a.jsx(T,{to:"/",className:"inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors",children:a.jsx("span",{children:"Browse All Games"})})]}):a.jsxs("div",{className:"text-center py-16",children:[a.jsx("div",{className:"bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center",children:a.jsx(Rt,{className:"h-8 w-8 text-gray-400"})}),a.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",children:"Start Your Search"}),a.jsx("p",{className:"text-gray-600 mb-6",children:"Use the search bar above to find your favorite cozy games"}),a.jsx(T,{to:"/",className:"inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors",children:a.jsx("span",{children:"Explore Popular Games"})})]})]})]})},Pm=()=>{const[e,t]=S.useState("overview"),n=Q.filter(l=>l.status==="published");Q.filter(l=>l.status==="draft");const r=Q.reduce((l,o)=>l+o.popularityScore,0),i=[{id:"overview",label:"Overview",icon:Q0},{id:"games",label:"Games",icon:bi},{id:"categories",label:"Categories",icon:Ms},{id:"ads",label:"Advertisements",icon:Ts}];return a.jsxs("div",{className:"min-h-screen bg-gray-50",children:[a.jsx("div",{className:"bg-white shadow-sm border-b border-gray-200",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between items-center h-16",children:[a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx(T,{to:"/",className:"text-emerald-600 hover:text-emerald-700 font-medium",children:"← Back to Site"}),a.jsx("div",{className:"h-6 w-px bg-gray-300"}),a.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Admin Dashboard"})]}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("div",{className:"bg-emerald-100 rounded-full p-2",children:a.jsx(Ts,{className:"h-4 w-4 text-emerald-600"})}),a.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Administrator"})]})]})})}),a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[a.jsx("div",{className:"lg:col-span-1",children:a.jsx("nav",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 p-4",children:a.jsx("div",{className:"space-y-2",children:i.map(l=>{const o=l.icon;return a.jsxs("button",{onClick:()=>t(l.id),className:`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-left transition-colors ${e===l.id?"bg-emerald-100 text-emerald-700":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`,children:[a.jsx(o,{className:"h-4 w-4"}),a.jsx("span",{className:"font-medium",children:l.label})]},l.id)})})})}),a.jsxs("div",{className:"lg:col-span-3",children:[e==="overview"&&a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[a.jsx("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-100",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"bg-emerald-100 rounded-xl p-2",children:a.jsx(bi,{className:"h-5 w-5 text-emerald-600"})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600",children:"Total Games"}),a.jsx("p",{className:"text-2xl font-bold text-gray-900",children:Q.length})]})]})}),a.jsx("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-100",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"bg-blue-100 rounded-xl p-2",children:a.jsx(Ms,{className:"h-5 w-5 text-blue-600"})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600",children:"Categories"}),a.jsx("p",{className:"text-2xl font-bold text-gray-900",children:de.length})]})]})}),a.jsx("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-100",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"bg-purple-100 rounded-xl p-2",children:a.jsx(uo,{className:"h-5 w-5 text-purple-600"})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600",children:"Total Plays"}),a.jsx("p",{className:"text-2xl font-bold text-gray-900",children:r.toLocaleString()})]})]})}),a.jsx("div",{className:"bg-white rounded-2xl p-6 shadow-sm border border-gray-100",children:a.jsxs("div",{className:"flex items-center space-x-3",children:[a.jsx("div",{className:"bg-green-100 rounded-xl p-2",children:a.jsx(cn,{className:"h-5 w-5 text-green-600"})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-gray-600",children:"Published"}),a.jsx("p",{className:"text-2xl font-bold text-gray-900",children:n.length})]})]})})]}),a.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100",children:[a.jsx("div",{className:"p-6 border-b border-gray-100",children:a.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Recent Games"})}),a.jsx("div",{className:"p-6",children:a.jsx("div",{className:"space-y-4",children:Q.slice(0,5).map(l=>a.jsxs("div",{className:"flex items-center space-x-4",children:[a.jsx("img",{src:l.coverImage,alt:l.title,className:"w-12 h-12 rounded-lg object-cover"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"font-medium text-gray-900",children:l.title}),a.jsxs("p",{className:"text-sm text-gray-600",children:[l.popularityScore.toLocaleString()," plays"]})]}),a.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${l.status==="published"?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}`,children:l.status})]},l.id))})})]})]}),e==="games"&&a.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100",children:[a.jsxs("div",{className:"p-6 border-b border-gray-100 flex justify-between items-center",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Game Management"}),a.jsx("button",{className:"bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-700 transition-colors",children:"Add New Game"})]}),a.jsx("div",{className:"p-6",children:a.jsx("div",{className:"space-y-4",children:Q.map(l=>a.jsxs("div",{className:"flex items-center space-x-4 p-4 border border-gray-100 rounded-xl",children:[a.jsx("img",{src:l.coverImage,alt:l.title,className:"w-16 h-16 rounded-lg object-cover"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"font-medium text-gray-900",children:l.title}),a.jsx("p",{className:"text-sm text-gray-600 line-clamp-1",children:l.description}),a.jsxs("div",{className:"flex items-center space-x-4 mt-2",children:[a.jsxs("span",{className:"text-xs text-gray-500",children:[l.popularityScore.toLocaleString()," plays"]}),a.jsx("span",{className:"text-xs text-gray-500",children:l.categories.join(", ")})]})]}),a.jsx("span",{className:`px-2 py-1 text-xs font-medium rounded-full ${l.status==="published"?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}`,children:l.status}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{className:"text-emerald-600 hover:text-emerald-700 text-sm font-medium",children:"Edit"}),a.jsx("button",{className:"text-red-600 hover:text-red-700 text-sm font-medium",children:"Delete"})]})]},l.id))})})]}),e==="categories"&&a.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100",children:[a.jsxs("div",{className:"p-6 border-b border-gray-100 flex justify-between items-center",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Category Management"}),a.jsx("button",{className:"bg-emerald-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-700 transition-colors",children:"Add New Category"})]}),a.jsx("div",{className:"p-6",children:a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:de.map(l=>a.jsxs("div",{className:"p-4 border border-gray-100 rounded-xl",children:[a.jsxs("div",{className:"flex items-start justify-between mb-3",children:[a.jsx("h3",{className:"font-medium text-gray-900",children:l.name}),a.jsxs("div",{className:"flex space-x-2",children:[a.jsx("button",{className:"text-emerald-600 hover:text-emerald-700 text-sm font-medium",children:"Edit"}),a.jsx("button",{className:"text-red-600 hover:text-red-700 text-sm font-medium",children:"Delete"})]})]}),a.jsx("p",{className:"text-sm text-gray-600 mb-3",children:l.description}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"text-xs text-gray-500",children:["Slug: ",l.slug]}),a.jsxs("span",{className:"text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full",children:[Q.filter(o=>o.categories.includes(l.slug)).length," games"]})]})]},l.id))})})]}),e==="ads"&&a.jsx("div",{className:"space-y-6",children:a.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100",children:[a.jsxs("div",{className:"p-6 border-b border-gray-100",children:[a.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"Advertisement Management"}),a.jsx("p",{className:"text-sm text-gray-600 mt-1",children:"Manage ad placements across your site"})]}),a.jsxs("div",{className:"p-6 space-y-6",children:[a.jsxs("div",{className:"border border-gray-200 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"font-medium text-gray-900",children:"Header Banner Ad"}),a.jsx("span",{className:"text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full",children:"728x90"})]}),a.jsx("textarea",{placeholder:"Paste your ad code here...",className:"w-full h-24 p-3 border border-gray-200 rounded-lg text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",defaultValue:"<!-- AdSense Header Banner Code -->"}),a.jsx("div",{className:"flex justify-end mt-3",children:a.jsx("button",{className:"bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors",children:"Save Changes"})})]}),a.jsxs("div",{className:"border border-gray-200 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"font-medium text-gray-900",children:"Sidebar Ad"}),a.jsx("span",{className:"text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full",children:"300x250"})]}),a.jsx("textarea",{placeholder:"Paste your ad code here...",className:"w-full h-24 p-3 border border-gray-200 rounded-lg text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",defaultValue:"<!-- AdSense Sidebar Code -->"}),a.jsx("div",{className:"flex justify-end mt-3",children:a.jsx("button",{className:"bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors",children:"Save Changes"})})]}),a.jsxs("div",{className:"border border-gray-200 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"font-medium text-gray-900",children:"In-Content Ad"}),a.jsx("span",{className:"text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full",children:"728x90"})]}),a.jsx("textarea",{placeholder:"Paste your ad code here...",className:"w-full h-24 p-3 border border-gray-200 rounded-lg text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",defaultValue:"<!-- AdSense In-Content Code -->"}),a.jsx("div",{className:"flex justify-end mt-3",children:a.jsx("button",{className:"bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors",children:"Save Changes"})})]})]})]})})]})]})})]})};function Bm(){return a.jsx(I0,{children:a.jsx("div",{className:"min-h-screen bg-white",children:a.jsxs(zs,{children:[a.jsx(nt,{path:"/admin",element:a.jsx(Pm,{})}),a.jsx(nt,{path:"*",element:a.jsxs(a.Fragment,{children:[a.jsx(gm,{}),a.jsx("main",{children:a.jsxs(zs,{children:[a.jsx(nt,{path:"/",element:a.jsx(jm,{})}),a.jsx(nt,{path:"/browse",element:a.jsx(Cm,{})}),a.jsx(nt,{path:"/game/:slug",element:a.jsx(Nm,{})}),a.jsx(nt,{path:"/category/:slug",element:a.jsx(Em,{})}),a.jsx(nt,{path:"/search",element:a.jsx(zm,{})})]})}),a.jsx(ym,{})]})})]})})})}Qu(document.getElementById("root")).render(a.jsx(S.StrictMode,{children:a.jsx(Bm,{})}));

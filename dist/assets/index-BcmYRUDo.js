(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function L_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var jf={exports:{}},_a={},Xf={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function xM(){if(r0)return pt;r0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(O,re,Ue){this.props=O,this.context=re,this.refs=E,this.updater=Ue||x}S.prototype.isReactComponent={},S.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function b(O,re,Ue){this.props=O,this.context=re,this.refs=E,this.updater=Ue||x}var P=b.prototype=new y;P.constructor=b,M(P,S.prototype),P.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,N={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function k(O,re,Ue){var Q,de={},Te=null,ye=null;if(re!=null)for(Q in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(Te=""+re.key),re)V.call(re,Q)&&!U.hasOwnProperty(Q)&&(de[Q]=re[Q]);var Ce=arguments.length-2;if(Ce===1)de.children=Ue;else if(1<Ce){for(var Ne=Array(Ce),Je=0;Je<Ce;Je++)Ne[Je]=arguments[Je+2];de.children=Ne}if(O&&O.defaultProps)for(Q in Ce=O.defaultProps,Ce)de[Q]===void 0&&(de[Q]=Ce[Q]);return{$$typeof:n,type:O,key:Te,ref:ye,props:de,_owner:N.current}}function D(O,re){return{$$typeof:n,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function H(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ue){return re[Ue]})}var ce=/\/+/g;function j(O,re){return typeof O=="object"&&O!==null&&O.key!=null?H(""+O.key):re.toString(36)}function se(O,re,Ue,Q,de){var Te=typeof O;(Te==="undefined"||Te==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(Te){case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case n:case e:ye=!0}}if(ye)return ye=O,de=de(ye),O=Q===""?"."+j(ye,0):Q,C(de)?(Ue="",O!=null&&(Ue=O.replace(ce,"$&/")+"/"),se(de,re,Ue,"",function(Je){return Je})):de!=null&&(R(de)&&(de=D(de,Ue+(!de.key||ye&&ye.key===de.key?"":(""+de.key).replace(ce,"$&/")+"/")+O)),re.push(de)),1;if(ye=0,Q=Q===""?".":Q+":",C(O))for(var Ce=0;Ce<O.length;Ce++){Te=O[Ce];var Ne=Q+j(Te,Ce);ye+=se(Te,re,Ue,Ne,de)}else if(Ne=v(O),typeof Ne=="function")for(O=Ne.call(O),Ce=0;!(Te=O.next()).done;)Te=Te.value,Ne=Q+j(Te,Ce++),ye+=se(Te,re,Ue,Ne,de);else if(Te==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function fe(O,re,Ue){if(O==null)return O;var Q=[],de=0;return se(O,Q,"","",function(Te){return re.call(Ue,Te,de++)}),Q}function le(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ue)},function(Ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ue)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var ie={current:null},B={transition:null},ue={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:B,ReactCurrentOwner:N};function oe(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:fe,forEach:function(O,re,Ue){fe(O,function(){re.apply(this,arguments)},Ue)},count:function(O){var re=0;return fe(O,function(){re++}),re},toArray:function(O){return fe(O,function(re){return re})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pt.Component=S,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=b,pt.StrictMode=r,pt.Suspense=d,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,pt.act=oe,pt.cloneElement=function(O,re,Ue){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Q=M({},O.props),de=O.key,Te=O.ref,ye=O._owner;if(re!=null){if(re.ref!==void 0&&(Te=re.ref,ye=N.current),re.key!==void 0&&(de=""+re.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(Ne in re)V.call(re,Ne)&&!U.hasOwnProperty(Ne)&&(Q[Ne]=re[Ne]===void 0&&Ce!==void 0?Ce[Ne]:re[Ne])}var Ne=arguments.length-2;if(Ne===1)Q.children=Ue;else if(1<Ne){Ce=Array(Ne);for(var Je=0;Je<Ne;Je++)Ce[Je]=arguments[Je+2];Q.children=Ce}return{$$typeof:n,type:O.type,key:de,ref:Te,props:Q,_owner:ye}},pt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},pt.createElement=k,pt.createFactory=function(O){var re=k.bind(null,O);return re.type=O,re},pt.createRef=function(){return{current:null}},pt.forwardRef=function(O){return{$$typeof:c,render:O}},pt.isValidElement=R,pt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:le}},pt.memo=function(O,re){return{$$typeof:h,type:O,compare:re===void 0?null:re}},pt.startTransition=function(O){var re=B.transition;B.transition={};try{O()}finally{B.transition=re}},pt.unstable_act=oe,pt.useCallback=function(O,re){return ie.current.useCallback(O,re)},pt.useContext=function(O){return ie.current.useContext(O)},pt.useDebugValue=function(){},pt.useDeferredValue=function(O){return ie.current.useDeferredValue(O)},pt.useEffect=function(O,re){return ie.current.useEffect(O,re)},pt.useId=function(){return ie.current.useId()},pt.useImperativeHandle=function(O,re,Ue){return ie.current.useImperativeHandle(O,re,Ue)},pt.useInsertionEffect=function(O,re){return ie.current.useInsertionEffect(O,re)},pt.useLayoutEffect=function(O,re){return ie.current.useLayoutEffect(O,re)},pt.useMemo=function(O,re){return ie.current.useMemo(O,re)},pt.useReducer=function(O,re,Ue){return ie.current.useReducer(O,re,Ue)},pt.useRef=function(O){return ie.current.useRef(O)},pt.useState=function(O){return ie.current.useState(O)},pt.useSyncExternalStore=function(O,re,Ue){return ie.current.useSyncExternalStore(O,re,Ue)},pt.useTransition=function(){return ie.current.useTransition()},pt.version="18.3.1",pt}var s0;function Xh(){return s0||(s0=1,Xf.exports=xM()),Xf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function SM(){if(o0)return _a;o0=1;var n=Xh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,g={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:o.current}}return _a.Fragment=t,_a.jsx=u,_a.jsxs=u,_a}var a0;function MM(){return a0||(a0=1,jf.exports=SM()),jf.exports}var F=MM(),Se=Xh();const EM=L_(Se);var iu={},Yf={exports:{}},Bn={},qf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function TM(){return l0||(l0=1,(function(n){function e(B,ue){var oe=B.length;B.push(ue);e:for(;0<oe;){var O=oe-1>>>1,re=B[O];if(0<o(re,ue))B[O]=ue,B[oe]=re,oe=O;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ue=B[0],oe=B.pop();if(oe!==ue){B[0]=oe;e:for(var O=0,re=B.length,Ue=re>>>1;O<Ue;){var Q=2*(O+1)-1,de=B[Q],Te=Q+1,ye=B[Te];if(0>o(de,oe))Te<re&&0>o(ye,de)?(B[O]=ye,B[Te]=oe,O=Te):(B[O]=de,B[Q]=oe,O=Q);else if(Te<re&&0>o(ye,oe))B[O]=ye,B[Te]=oe,O=Te;else break e}}return ue}function o(B,ue){var oe=B.sortIndex-ue.sortIndex;return oe!==0?oe:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,g=null,v=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var ue=t(h);ue!==null;){if(ue.callback===null)r(h);else if(ue.startTime<=B)r(h),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(h)}}function C(B){if(E=!1,P(B),!M)if(t(d)!==null)M=!0,le(V);else{var ue=t(h);ue!==null&&ie(C,ue.startTime-B)}}function V(B,ue){M=!1,E&&(E=!1,y(k),k=-1),x=!0;var oe=v;try{for(P(ue),g=t(d);g!==null&&(!(g.expirationTime>ue)||B&&!H());){var O=g.callback;if(typeof O=="function"){g.callback=null,v=g.priorityLevel;var re=O(g.expirationTime<=ue);ue=n.unstable_now(),typeof re=="function"?g.callback=re:g===t(d)&&r(d),P(ue)}else r(d);g=t(d)}if(g!==null)var Ue=!0;else{var Q=t(h);Q!==null&&ie(C,Q.startTime-ue),Ue=!1}return Ue}finally{g=null,v=oe,x=!1}}var N=!1,U=null,k=-1,D=5,R=-1;function H(){return!(n.unstable_now()-R<D)}function ce(){if(U!==null){var B=n.unstable_now();R=B;var ue=!0;try{ue=U(!0,B)}finally{ue?j():(N=!1,U=null)}}else N=!1}var j;if(typeof b=="function")j=function(){b(ce)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,fe=se.port2;se.port1.onmessage=ce,j=function(){fe.postMessage(null)}}else j=function(){S(ce,0)};function le(B){U=B,N||(N=!0,j())}function ie(B,ue){k=S(function(){B(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,le(V))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(B){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var oe=v;v=ue;try{return B()}finally{v=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=v;v=B;try{return ue()}finally{v=oe}},n.unstable_scheduleCallback=function(B,ue,oe){var O=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=oe+re,B={id:m++,callback:ue,priorityLevel:B,startTime:oe,expirationTime:re,sortIndex:-1},oe>O?(B.sortIndex=oe,e(h,B),t(d)===null&&B===t(h)&&(E?(y(k),k=-1):E=!0,ie(C,oe-O))):(B.sortIndex=re,e(d,B),M||x||(M=!0,le(V))),B},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(B){var ue=v;return function(){var oe=v;v=ue;try{return B.apply(this,arguments)}finally{v=oe}}}})($f)),$f}var u0;function wM(){return u0||(u0=1,qf.exports=TM()),qf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function AM(){if(c0)return Bn;c0=1;var n=Xh(),e=wM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return d.call(g,i)?!0:d.call(m,i)?!1:h.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||x(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,a,f,p,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,b);S[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,b);S[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,b);S[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,a,f){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,f)&&(a=null),f||p===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,f=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var oe=Object.assign,O;function re(i){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Ue=!1;function Q(i,s){if(!i||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(J){var f=J}Reflect.construct(i,[],s)}else{try{s.call()}catch(J){f=J}i.call(s.prototype)}else{try{throw Error()}catch(J){f=J}i()}}catch(J){if(J&&f&&typeof J.stack=="string"){for(var p=J.stack.split(`
`),_=f.stack.split(`
`),T=p.length-1,I=_.length-1;1<=T&&0<=I&&p[T]!==_[I];)I--;for(;1<=T&&0<=I;T--,I--)if(p[T]!==_[I]){if(T!==1||I!==1)do if(T--,I--,0>I||p[T]!==_[I]){var z=`
`+p[T].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=T&&0<=I);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?re(i):""}function de(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=Q(i.type,!1),i;case 11:return i=Q(i.type.render,!1),i;case 1:return i=Q(i.type,!0),i;default:return""}}function Te(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case N:return"Portal";case D:return"Profiler";case k:return"StrictMode";case j:return"Suspense";case se:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case H:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case ce:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case fe:return s=i.displayName||null,s!==null?s:Te(i.type)||"Memo";case le:s=i._payload,i=i._init;try{return Te(i(s))}catch{}}return null}function ye(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ne(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Ne(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Dt(i){i._valueTracker||(i._valueTracker=Je(i))}function gt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ne(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function Nt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function q(i,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function wn(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Ce(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function mt(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function dt(i,s){mt(i,s);var a=Ce(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?bt(i,s.type,a):s.hasOwnProperty("defaultValue")&&bt(i,s.type,Ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ke(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function bt(i,s,a){(s!=="number"||Nt(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var $e=Array.isArray;function L(i,s,a,f){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Ce(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,f&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function w(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Z(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if($e(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Ce(a)}}function me(i,s){var a=Ce(s.value),f=Ce(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function ve(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Re,Fe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Re.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ft(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){ke.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function et(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function nt(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,p=et(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,p):i[a]=p}}var Be=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(i,s){if(s){if(Be[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ot(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function W(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var be=null,ae=null,pe=null;function Le(i){if(i=ia(i)){if(typeof be!="function")throw Error(t(280));var s=i.stateNode;s&&(s=_l(s),be(i.stateNode,i.type,s))}}function De(i){ae?pe?pe.push(i):pe=[i]:ae=i}function at(){if(ae){var i=ae,s=pe;if(pe=ae=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Ot(i,s){return i(s)}function Jt(){}var xt=!1;function Ln(i,s,a){if(xt)return i(s,a);xt=!0;try{return Ot(i,s,a)}finally{xt=!1,(ae!==null||pe!==null)&&(Jt(),at())}}function An(i,s){var a=i.stateNode;if(a===null)return null;var f=_l(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ds=!1;if(c)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Ds=!1}function Oi(i,s,a,f,p,_,T,I,z){var J=Array.prototype.slice.call(arguments,3);try{s.apply(a,J)}catch(_e){this.onError(_e)}}var ki=!1,$r=null,Kr=!1,pr=null,Qa={onError:function(i){ki=!0,$r=i}};function Ls(i,s,a,f,p,_,T,I,z){ki=!1,$r=null,Oi.apply(Qa,arguments)}function Ja(i,s,a,f,p,_,T,I,z){if(Ls.apply(this,arguments),ki){if(ki){var J=$r;ki=!1,$r=null}else throw Error(t(198));Kr||(Kr=!0,pr=J)}}function Ci(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function el(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function tl(i){if(Ci(i)!==i)throw Error(t(188))}function dc(i){var s=i.alternate;if(!s){if(s=Ci(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(f=p.return,f!==null){a=f;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return tl(p),i;if(_===f)return tl(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=p,f=_;else{for(var T=!1,I=p.child;I;){if(I===a){T=!0,a=p,f=_;break}if(I===f){T=!0,f=p,a=_;break}I=I.sibling}if(!T){for(I=_.child;I;){if(I===a){T=!0,a=_,f=p;break}if(I===f){T=!0,f=_,a=p;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function A(i){return i=dc(i),i!==null?X(i):null}function X(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=X(i);if(s!==null)return s;i=i.sibling}return null}var ee=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,Y=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Ee=e.unstable_now,je=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,_t=e.unstable_IdlePriority,At=null,vt=null;function hn(i){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(At,i,void 0,(i.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Tt,qe=Math.log,di=Math.LN2;function Tt(i){return i>>>=0,i===0?32:31-(qe(i)/di|0)|0}var pn=64,hi=4194304;function en(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ri(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,p=i.suspendedLanes,_=i.pingedLanes,T=a&268435455;if(T!==0){var I=T&~p;I!==0?f=en(I):(_&=T,_!==0&&(f=en(_)))}else T=a&~p,T!==0?f=en(T):_!==0&&(f=en(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&p)===0&&(p=f&-f,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-lt(s),p=1<<a,f|=i[a],s&=~p;return f}function It(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qn(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-lt(_),I=1<<T,z=p[T];z===-1?((I&a)===0||(I&f)!==0)&&(p[T]=It(I,s)):z<=s&&(i.expiredLanes|=I),_&=~I}}function Bi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Cn(){var i=pn;return pn<<=1,(pn&4194240)===0&&(pn=64),i}function Jn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function In(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-lt(s),i[s]=a}function nl(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-lt(a),_=1<<p;s[p]=0,f[p]=-1,i[p]=-1,a&=~_}}function hc(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-lt(a),p=1<<f;p&s|i[f]&s&&(i[f]|=s),a&=~p}}var Pt=0;function Fp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Op,pc,kp,Bp,zp,mc=!1,il=[],mr=null,gr=null,vr=null,Vo=new Map,Ho=new Map,_r=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(i,s){switch(i){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Vo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(s.pointerId)}}function Go(i,s,a,f,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[p]},s!==null&&(s=ia(s),s!==null&&pc(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Gx(i,s,a,f,p){switch(s){case"focusin":return mr=Go(mr,i,s,a,f,p),!0;case"dragenter":return gr=Go(gr,i,s,a,f,p),!0;case"mouseover":return vr=Go(vr,i,s,a,f,p),!0;case"pointerover":var _=p.pointerId;return Vo.set(_,Go(Vo.get(_)||null,i,s,a,f,p)),!0;case"gotpointercapture":return _=p.pointerId,Ho.set(_,Go(Ho.get(_)||null,i,s,a,f,p)),!0}return!1}function Hp(i){var s=Zr(i.target);if(s!==null){var a=Ci(s);if(a!==null){if(s=a.tag,s===13){if(s=el(a),s!==null){i.blockedOn=s,zp(i.priority,function(){kp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function rl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=vc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);Ct=f,a.target.dispatchEvent(f),Ct=null}else return s=ia(a),s!==null&&pc(s),i.blockedOn=a,!1;s.shift()}return!0}function Gp(i,s,a){rl(i)&&a.delete(s)}function Wx(){mc=!1,mr!==null&&rl(mr)&&(mr=null),gr!==null&&rl(gr)&&(gr=null),vr!==null&&rl(vr)&&(vr=null),Vo.forEach(Gp),Ho.forEach(Gp)}function Wo(i,s){i.blockedOn===s&&(i.blockedOn=null,mc||(mc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wx)))}function jo(i){function s(p){return Wo(p,i)}if(0<il.length){Wo(il[0],i);for(var a=1;a<il.length;a++){var f=il[a];f.blockedOn===i&&(f.blockedOn=null)}}for(mr!==null&&Wo(mr,i),gr!==null&&Wo(gr,i),vr!==null&&Wo(vr,i),Vo.forEach(s),Ho.forEach(s),a=0;a<_r.length;a++)f=_r[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<_r.length&&(a=_r[0],a.blockedOn===null);)Hp(a),a.blockedOn===null&&_r.shift()}var Is=C.ReactCurrentBatchConfig,sl=!0;function jx(i,s,a,f){var p=Pt,_=Is.transition;Is.transition=null;try{Pt=1,gc(i,s,a,f)}finally{Pt=p,Is.transition=_}}function Xx(i,s,a,f){var p=Pt,_=Is.transition;Is.transition=null;try{Pt=4,gc(i,s,a,f)}finally{Pt=p,Is.transition=_}}function gc(i,s,a,f){if(sl){var p=vc(i,s,a,f);if(p===null)Uc(i,s,f,ol,a),Vp(i,f);else if(Gx(p,i,s,a,f))f.stopPropagation();else if(Vp(i,f),s&4&&-1<Hx.indexOf(i)){for(;p!==null;){var _=ia(p);if(_!==null&&Op(_),_=vc(i,s,a,f),_===null&&Uc(i,s,f,ol,a),_===p)break;p=_}p!==null&&f.stopPropagation()}else Uc(i,s,f,null,a)}}var ol=null;function vc(i,s,a,f){if(ol=null,i=W(f),i=Zr(i),i!==null)if(s=Ci(i),s===null)i=null;else if(a=s.tag,a===13){if(i=el(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ol=i,null}function Wp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(je()){case He:return 1;case it:return 4;case st:case Xe:return 16;case _t:return 536870912;default:return 16}default:return 16}}var yr=null,_c=null,al=null;function jp(){if(al)return al;var i,s=_c,a=s.length,f,p="value"in yr?yr.value:yr.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var T=a-i;for(f=1;f<=T&&s[a-f]===p[_-f];f++);return al=p.slice(i,1<f?1-f:void 0)}function ll(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ul(){return!0}function Xp(){return!1}function Wn(i){function s(a,f,p,_,T){this._reactName=a,this._targetInst=p,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ul:Xp,this.isPropagationStopped=Xp,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),s}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=Wn(Us),Xo=oe({},Us,{view:0,detail:0}),Yx=Wn(Xo),xc,Sc,Yo,cl=oe({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Yo&&(Yo&&i.type==="mousemove"?(xc=i.screenX-Yo.screenX,Sc=i.screenY-Yo.screenY):Sc=xc=0,Yo=i),xc)},movementY:function(i){return"movementY"in i?i.movementY:Sc}}),Yp=Wn(cl),qx=oe({},cl,{dataTransfer:0}),$x=Wn(qx),Kx=oe({},Xo,{relatedTarget:0}),Mc=Wn(Kx),Zx=oe({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=Wn(Zx),Jx=oe({},Us,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),eS=Wn(Jx),tS=oe({},Us,{data:0}),qp=Wn(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=rS[i])?!!s[i]:!1}function Ec(){return sS}var oS=oe({},Xo,{key:function(i){if(i.key){var s=nS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ll(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?iS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(i){return i.type==="keypress"?ll(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ll(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),aS=Wn(oS),lS=oe({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Wn(lS),uS=oe({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),cS=Wn(uS),fS=oe({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=Wn(fS),hS=oe({},cl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),pS=Wn(hS),mS=[9,13,27,32],Tc=c&&"CompositionEvent"in window,qo=null;c&&"documentMode"in document&&(qo=document.documentMode);var gS=c&&"TextEvent"in window&&!qo,Kp=c&&(!Tc||qo&&8<qo&&11>=qo),Zp=" ",Qp=!1;function Jp(i,s){switch(i){case"keyup":return mS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ns=!1;function vS(i,s){switch(i){case"compositionend":return em(s);case"keypress":return s.which!==32?null:(Qp=!0,Zp);case"textInput":return i=s.data,i===Zp&&Qp?null:i;default:return null}}function _S(i,s){if(Ns)return i==="compositionend"||!Tc&&Jp(i,s)?(i=jp(),al=_c=yr=null,Ns=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Kp&&s.locale!=="ko"?null:s.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!yS[i.type]:s==="textarea"}function nm(i,s,a,f){De(f),s=ml(s,"onChange"),0<s.length&&(a=new yc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var $o=null,Ko=null;function xS(i){xm(i,0)}function fl(i){var s=zs(i);if(gt(s))return i}function SS(i,s){if(i==="change")return s}var im=!1;if(c){var wc;if(c){var Ac="oninput"in document;if(!Ac){var rm=document.createElement("div");rm.setAttribute("oninput","return;"),Ac=typeof rm.oninput=="function"}wc=Ac}else wc=!1;im=wc&&(!document.documentMode||9<document.documentMode)}function sm(){$o&&($o.detachEvent("onpropertychange",om),Ko=$o=null)}function om(i){if(i.propertyName==="value"&&fl(Ko)){var s=[];nm(s,Ko,i,W(i)),Ln(xS,s)}}function MS(i,s,a){i==="focusin"?(sm(),$o=s,Ko=a,$o.attachEvent("onpropertychange",om)):i==="focusout"&&sm()}function ES(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return fl(Ko)}function TS(i,s){if(i==="click")return fl(s)}function wS(i,s){if(i==="input"||i==="change")return fl(s)}function AS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var pi=typeof Object.is=="function"?Object.is:AS;function Zo(i,s){if(pi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var p=a[f];if(!d.call(s,p)||!pi(i[p],s[p]))return!1}return!0}function am(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function lm(i,s){var a=am(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=am(a)}}function um(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?um(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function cm(){for(var i=window,s=Nt();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=Nt(i.document)}return s}function Cc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function CS(i){var s=cm(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&um(a.ownerDocument.documentElement,a)){if(f!==null&&Cc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(f.start,p);f=f.end===void 0?_:Math.min(f.end,p),!i.extend&&_>f&&(p=f,f=_,_=p),p=lm(a,_);var T=lm(a,f);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var RS=c&&"documentMode"in document&&11>=document.documentMode,Fs=null,Rc=null,Qo=null,bc=!1;function fm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||Fs==null||Fs!==Nt(f)||(f=Fs,"selectionStart"in f&&Cc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Qo&&Zo(Qo,f)||(Qo=f,f=ml(Rc,"onSelect"),0<f.length&&(s=new yc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Fs)))}function dl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Os={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},Pc={},dm={};c&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function hl(i){if(Pc[i])return Pc[i];if(!Os[i])return i;var s=Os[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in dm)return Pc[i]=s[a];return i}var hm=hl("animationend"),pm=hl("animationiteration"),mm=hl("animationstart"),gm=hl("transitionend"),vm=new Map,_m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(i,s){vm.set(i,s),l(s,[i])}for(var Dc=0;Dc<_m.length;Dc++){var Lc=_m[Dc],bS=Lc.toLowerCase(),PS=Lc[0].toUpperCase()+Lc.slice(1);xr(bS,"on"+PS)}xr(hm,"onAnimationEnd"),xr(pm,"onAnimationIteration"),xr(mm,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr(gm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function ym(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,Ja(f,s,void 0,i),i.currentTarget=null}function xm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],p=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var T=f.length-1;0<=T;T--){var I=f[T],z=I.instance,J=I.currentTarget;if(I=I.listener,z!==_&&p.isPropagationStopped())break e;ym(p,I,J),_=z}else for(T=0;T<f.length;T++){if(I=f[T],z=I.instance,J=I.currentTarget,I=I.listener,z!==_&&p.isPropagationStopped())break e;ym(p,I,J),_=z}}}if(Kr)throw i=pr,Kr=!1,pr=null,i}function kt(i,s){var a=s[zc];a===void 0&&(a=s[zc]=new Set);var f=i+"__bubble";a.has(f)||(Sm(s,i,2,!1),a.add(f))}function Ic(i,s,a){var f=0;s&&(f|=4),Sm(a,i,f,s)}var pl="_reactListening"+Math.random().toString(36).slice(2);function ea(i){if(!i[pl]){i[pl]=!0,r.forEach(function(a){a!=="selectionchange"&&(DS.has(a)||Ic(a,!1,i),Ic(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[pl]||(s[pl]=!0,Ic("selectionchange",!1,s))}}function Sm(i,s,a,f){switch(Wp(s)){case 1:var p=jx;break;case 4:p=Xx;break;default:p=gc}a=p.bind(null,s,a,i),p=void 0,!Ds||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),f?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function Uc(i,s,a,f,p){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var I=f.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(T===4)for(T=f.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;T=T.return}for(;I!==null;){if(T=Zr(I),T===null)return;if(z=T.tag,z===5||z===6){f=_=T;continue e}I=I.parentNode}}f=f.return}Ln(function(){var J=_,_e=W(a),xe=[];e:{var ge=vm.get(i);if(ge!==void 0){var Ie=yc,ze=i;switch(i){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":Ie=aS;break;case"focusin":ze="focus",Ie=Mc;break;case"focusout":ze="blur",Ie=Mc;break;case"beforeblur":case"afterblur":Ie=Mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=cS;break;case hm:case pm:case mm:Ie=Qx;break;case gm:Ie=dS;break;case"scroll":Ie=Yx;break;case"wheel":Ie=pS;break;case"copy":case"cut":case"paste":Ie=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=$p}var Ge=(s&4)!==0,qt=!Ge&&i==="scroll",$=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var G=J,K;G!==null;){K=G;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,$!==null&&(we=An(G,$),we!=null&&Ge.push(ta(G,we,K)))),qt)break;G=G.return}0<Ge.length&&(ge=new Ie(ge,ze,null,a,_e),xe.push({event:ge,listeners:Ge}))}}if((s&7)===0){e:{if(ge=i==="mouseover"||i==="pointerover",Ie=i==="mouseout"||i==="pointerout",ge&&a!==Ct&&(ze=a.relatedTarget||a.fromElement)&&(Zr(ze)||ze[zi]))break e;if((Ie||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(ze=a.relatedTarget||a.toElement,Ie=J,ze=ze?Zr(ze):null,ze!==null&&(qt=Ci(ze),ze!==qt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=J),Ie!==ze)){if(Ge=Yp,we="onMouseLeave",$="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(Ge=$p,we="onPointerLeave",$="onPointerEnter",G="pointer"),qt=Ie==null?ge:zs(Ie),K=ze==null?ge:zs(ze),ge=new Ge(we,G+"leave",Ie,a,_e),ge.target=qt,ge.relatedTarget=K,we=null,Zr(_e)===J&&(Ge=new Ge($,G+"enter",ze,a,_e),Ge.target=K,Ge.relatedTarget=qt,we=Ge),qt=we,Ie&&ze)t:{for(Ge=Ie,$=ze,G=0,K=Ge;K;K=ks(K))G++;for(K=0,we=$;we;we=ks(we))K++;for(;0<G-K;)Ge=ks(Ge),G--;for(;0<K-G;)$=ks($),K--;for(;G--;){if(Ge===$||$!==null&&Ge===$.alternate)break t;Ge=ks(Ge),$=ks($)}Ge=null}else Ge=null;Ie!==null&&Mm(xe,ge,Ie,Ge,!1),ze!==null&&qt!==null&&Mm(xe,qt,ze,Ge,!0)}}e:{if(ge=J?zs(J):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var Ye=SS;else if(tm(ge))if(im)Ye=wS;else{Ye=ES;var Ze=MS}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ye=TS);if(Ye&&(Ye=Ye(i,J))){nm(xe,Ye,a,_e);break e}Ze&&Ze(i,ge,J),i==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&bt(ge,"number",ge.value)}switch(Ze=J?zs(J):window,i){case"focusin":(tm(Ze)||Ze.contentEditable==="true")&&(Fs=Ze,Rc=J,Qo=null);break;case"focusout":Qo=Rc=Fs=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,fm(xe,a,_e);break;case"selectionchange":if(RS)break;case"keydown":case"keyup":fm(xe,a,_e)}var Qe;if(Tc)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Ns?Jp(i,a)&&(rt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Kp&&a.locale!=="ko"&&(Ns||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ns&&(Qe=jp()):(yr=_e,_c="value"in yr?yr.value:yr.textContent,Ns=!0)),Ze=ml(J,rt),0<Ze.length&&(rt=new qp(rt,i,null,a,_e),xe.push({event:rt,listeners:Ze}),Qe?rt.data=Qe:(Qe=em(a),Qe!==null&&(rt.data=Qe)))),(Qe=gS?vS(i,a):_S(i,a))&&(J=ml(J,"onBeforeInput"),0<J.length&&(_e=new qp("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:J}),_e.data=Qe))}xm(xe,s)})}function ta(i,s,a){return{instance:i,listener:s,currentTarget:a}}function ml(i,s){for(var a=s+"Capture",f=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=An(i,a),_!=null&&f.unshift(ta(i,_,p)),_=An(i,s),_!=null&&f.push(ta(i,_,p))),i=i.return}return f}function ks(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Mm(i,s,a,f,p){for(var _=s._reactName,T=[];a!==null&&a!==f;){var I=a,z=I.alternate,J=I.stateNode;if(z!==null&&z===f)break;I.tag===5&&J!==null&&(I=J,p?(z=An(a,_),z!=null&&T.unshift(ta(a,z,I))):p||(z=An(a,_),z!=null&&T.push(ta(a,z,I)))),a=a.return}T.length!==0&&i.push({event:s,listeners:T})}var LS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function Em(i){return(typeof i=="string"?i:""+i).replace(LS,`
`).replace(IS,"")}function gl(i,s,a){if(s=Em(s),Em(i)!==s&&a)throw Error(t(425))}function vl(){}var Nc=null,Fc=null;function Oc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,NS=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(i){return Tm.resolve(null).then(i).catch(FS)}:kc;function FS(i){setTimeout(function(){throw i})}function Bc(i,s){var a=s,f=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(f===0){i.removeChild(p),jo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=p}while(a);jo(s)}function Sr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function wm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),bi="__reactFiber$"+Bs,na="__reactProps$"+Bs,zi="__reactContainer$"+Bs,zc="__reactEvents$"+Bs,OS="__reactListeners$"+Bs,kS="__reactHandles$"+Bs;function Zr(i){var s=i[bi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[zi]||a[bi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=wm(i);i!==null;){if(a=i[bi])return a;i=wm(i)}return s}i=a,a=i.parentNode}return null}function ia(i){return i=i[bi]||i[zi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function zs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function _l(i){return i[na]||null}var Vc=[],Vs=-1;function Mr(i){return{current:i}}function Bt(i){0>Vs||(i.current=Vc[Vs],Vc[Vs]=null,Vs--)}function Ft(i,s){Vs++,Vc[Vs]=i.current,i.current=s}var Er={},mn=Mr(Er),Un=Mr(!1),Qr=Er;function Hs(i,s){var a=i.type.contextTypes;if(!a)return Er;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Nn(i){return i=i.childContextTypes,i!=null}function yl(){Bt(Un),Bt(mn)}function Am(i,s,a){if(mn.current!==Er)throw Error(t(168));Ft(mn,s),Ft(Un,a)}function Cm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var p in f)if(!(p in s))throw Error(t(108,ye(i)||"Unknown",p));return oe({},a,f)}function xl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Er,Qr=mn.current,Ft(mn,i),Ft(Un,Un.current),!0}function Rm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=Cm(i,s,Qr),f.__reactInternalMemoizedMergedChildContext=i,Bt(Un),Bt(mn),Ft(mn,i)):Bt(Un),Ft(Un,a)}var Vi=null,Sl=!1,Hc=!1;function bm(i){Vi===null?Vi=[i]:Vi.push(i)}function BS(i){Sl=!0,bm(i)}function Tr(){if(!Hc&&Vi!==null){Hc=!0;var i=0,s=Pt;try{var a=Vi;for(Pt=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Vi=null,Sl=!1}catch(p){throw Vi!==null&&(Vi=Vi.slice(i+1)),ee(He,Tr),p}finally{Pt=s,Hc=!1}}return null}var Gs=[],Ws=0,Ml=null,El=0,ei=[],ti=0,Jr=null,Hi=1,Gi="";function es(i,s){Gs[Ws++]=El,Gs[Ws++]=Ml,Ml=i,El=s}function Pm(i,s,a){ei[ti++]=Hi,ei[ti++]=Gi,ei[ti++]=Jr,Jr=i;var f=Hi;i=Gi;var p=32-lt(f)-1;f&=~(1<<p),a+=1;var _=32-lt(s)+p;if(30<_){var T=p-p%5;_=(f&(1<<T)-1).toString(32),f>>=T,p-=T,Hi=1<<32-lt(s)+p|a<<p|f,Gi=_+i}else Hi=1<<_|a<<p|f,Gi=i}function Gc(i){i.return!==null&&(es(i,1),Pm(i,1,0))}function Wc(i){for(;i===Ml;)Ml=Gs[--Ws],Gs[Ws]=null,El=Gs[--Ws],Gs[Ws]=null;for(;i===Jr;)Jr=ei[--ti],ei[ti]=null,Gi=ei[--ti],ei[ti]=null,Hi=ei[--ti],ei[ti]=null}var jn=null,Xn=null,Vt=!1,mi=null;function Dm(i,s){var a=si(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Lm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,jn=i,Xn=Sr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,jn=i,Xn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Jr!==null?{id:Hi,overflow:Gi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=si(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,jn=i,Xn=null,!0):!1;default:return!1}}function jc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Xc(i){if(Vt){var s=Xn;if(s){var a=s;if(!Lm(i,s)){if(jc(i))throw Error(t(418));s=Sr(a.nextSibling);var f=jn;s&&Lm(i,s)?Dm(f,a):(i.flags=i.flags&-4097|2,Vt=!1,jn=i)}}else{if(jc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Vt=!1,jn=i}}}function Im(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;jn=i}function Tl(i){if(i!==jn)return!1;if(!Vt)return Im(i),Vt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Oc(i.type,i.memoizedProps)),s&&(s=Xn)){if(jc(i))throw Um(),Error(t(418));for(;s;)Dm(i,s),s=Sr(s.nextSibling)}if(Im(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Xn=Sr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Xn=null}}else Xn=jn?Sr(i.stateNode.nextSibling):null;return!0}function Um(){for(var i=Xn;i;)i=Sr(i.nextSibling)}function js(){Xn=jn=null,Vt=!1}function Yc(i){mi===null?mi=[i]:mi.push(i)}var zS=C.ReactCurrentBatchConfig;function ra(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var p=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var I=p.refs;T===null?delete I[_]:I[_]=T},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function wl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Nm(i){var s=i._init;return s(i._payload)}function Fm(i){function s($,G){if(i){var K=$.deletions;K===null?($.deletions=[G],$.flags|=16):K.push(G)}}function a($,G){if(!i)return null;for(;G!==null;)s($,G),G=G.sibling;return null}function f($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function p($,G){return $=Lr($,G),$.index=0,$.sibling=null,$}function _($,G,K){return $.index=K,i?(K=$.alternate,K!==null?(K=K.index,K<G?($.flags|=2,G):K):($.flags|=2,G)):($.flags|=1048576,G)}function T($){return i&&$.alternate===null&&($.flags|=2),$}function I($,G,K,we){return G===null||G.tag!==6?(G=Bf(K,$.mode,we),G.return=$,G):(G=p(G,K),G.return=$,G)}function z($,G,K,we){var Ye=K.type;return Ye===U?_e($,G,K.props.children,we,K.key):G!==null&&(G.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===le&&Nm(Ye)===G.type)?(we=p(G,K.props),we.ref=ra($,G,K),we.return=$,we):(we=$l(K.type,K.key,K.props,null,$.mode,we),we.ref=ra($,G,K),we.return=$,we)}function J($,G,K,we){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=zf(K,$.mode,we),G.return=$,G):(G=p(G,K.children||[]),G.return=$,G)}function _e($,G,K,we,Ye){return G===null||G.tag!==7?(G=ls(K,$.mode,we,Ye),G.return=$,G):(G=p(G,K),G.return=$,G)}function xe($,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Bf(""+G,$.mode,K),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return K=$l(G.type,G.key,G.props,null,$.mode,K),K.ref=ra($,null,G),K.return=$,K;case N:return G=zf(G,$.mode,K),G.return=$,G;case le:var we=G._init;return xe($,we(G._payload),K)}if($e(G)||ue(G))return G=ls(G,$.mode,K,null),G.return=$,G;wl($,G)}return null}function ge($,G,K,we){var Ye=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ye!==null?null:I($,G,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case V:return K.key===Ye?z($,G,K,we):null;case N:return K.key===Ye?J($,G,K,we):null;case le:return Ye=K._init,ge($,G,Ye(K._payload),we)}if($e(K)||ue(K))return Ye!==null?null:_e($,G,K,we,null);wl($,K)}return null}function Ie($,G,K,we,Ye){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(K)||null,I(G,$,""+we,Ye);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case V:return $=$.get(we.key===null?K:we.key)||null,z(G,$,we,Ye);case N:return $=$.get(we.key===null?K:we.key)||null,J(G,$,we,Ye);case le:var Ze=we._init;return Ie($,G,K,Ze(we._payload),Ye)}if($e(we)||ue(we))return $=$.get(K)||null,_e(G,$,we,Ye,null);wl(G,we)}return null}function ze($,G,K,we){for(var Ye=null,Ze=null,Qe=G,rt=G=0,ln=null;Qe!==null&&rt<K.length;rt++){Qe.index>rt?(ln=Qe,Qe=null):ln=Qe.sibling;var wt=ge($,Qe,K[rt],we);if(wt===null){Qe===null&&(Qe=ln);break}i&&Qe&&wt.alternate===null&&s($,Qe),G=_(wt,G,rt),Ze===null?Ye=wt:Ze.sibling=wt,Ze=wt,Qe=ln}if(rt===K.length)return a($,Qe),Vt&&es($,rt),Ye;if(Qe===null){for(;rt<K.length;rt++)Qe=xe($,K[rt],we),Qe!==null&&(G=_(Qe,G,rt),Ze===null?Ye=Qe:Ze.sibling=Qe,Ze=Qe);return Vt&&es($,rt),Ye}for(Qe=f($,Qe);rt<K.length;rt++)ln=Ie(Qe,$,rt,K[rt],we),ln!==null&&(i&&ln.alternate!==null&&Qe.delete(ln.key===null?rt:ln.key),G=_(ln,G,rt),Ze===null?Ye=ln:Ze.sibling=ln,Ze=ln);return i&&Qe.forEach(function(Ir){return s($,Ir)}),Vt&&es($,rt),Ye}function Ge($,G,K,we){var Ye=ue(K);if(typeof Ye!="function")throw Error(t(150));if(K=Ye.call(K),K==null)throw Error(t(151));for(var Ze=Ye=null,Qe=G,rt=G=0,ln=null,wt=K.next();Qe!==null&&!wt.done;rt++,wt=K.next()){Qe.index>rt?(ln=Qe,Qe=null):ln=Qe.sibling;var Ir=ge($,Qe,wt.value,we);if(Ir===null){Qe===null&&(Qe=ln);break}i&&Qe&&Ir.alternate===null&&s($,Qe),G=_(Ir,G,rt),Ze===null?Ye=Ir:Ze.sibling=Ir,Ze=Ir,Qe=ln}if(wt.done)return a($,Qe),Vt&&es($,rt),Ye;if(Qe===null){for(;!wt.done;rt++,wt=K.next())wt=xe($,wt.value,we),wt!==null&&(G=_(wt,G,rt),Ze===null?Ye=wt:Ze.sibling=wt,Ze=wt);return Vt&&es($,rt),Ye}for(Qe=f($,Qe);!wt.done;rt++,wt=K.next())wt=Ie(Qe,$,rt,wt.value,we),wt!==null&&(i&&wt.alternate!==null&&Qe.delete(wt.key===null?rt:wt.key),G=_(wt,G,rt),Ze===null?Ye=wt:Ze.sibling=wt,Ze=wt);return i&&Qe.forEach(function(yM){return s($,yM)}),Vt&&es($,rt),Ye}function qt($,G,K,we){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case V:e:{for(var Ye=K.key,Ze=G;Ze!==null;){if(Ze.key===Ye){if(Ye=K.type,Ye===U){if(Ze.tag===7){a($,Ze.sibling),G=p(Ze,K.props.children),G.return=$,$=G;break e}}else if(Ze.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===le&&Nm(Ye)===Ze.type){a($,Ze.sibling),G=p(Ze,K.props),G.ref=ra($,Ze,K),G.return=$,$=G;break e}a($,Ze);break}else s($,Ze);Ze=Ze.sibling}K.type===U?(G=ls(K.props.children,$.mode,we,K.key),G.return=$,$=G):(we=$l(K.type,K.key,K.props,null,$.mode,we),we.ref=ra($,G,K),we.return=$,$=we)}return T($);case N:e:{for(Ze=K.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a($,G.sibling),G=p(G,K.children||[]),G.return=$,$=G;break e}else{a($,G);break}else s($,G);G=G.sibling}G=zf(K,$.mode,we),G.return=$,$=G}return T($);case le:return Ze=K._init,qt($,G,Ze(K._payload),we)}if($e(K))return ze($,G,K,we);if(ue(K))return Ge($,G,K,we);wl($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(a($,G.sibling),G=p(G,K),G.return=$,$=G):(a($,G),G=Bf(K,$.mode,we),G.return=$,$=G),T($)):a($,G)}return qt}var Xs=Fm(!0),Om=Fm(!1),Al=Mr(null),Cl=null,Ys=null,qc=null;function $c(){qc=Ys=Cl=null}function Kc(i){var s=Al.current;Bt(Al),i._currentValue=s}function Zc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function qs(i,s){Cl=i,qc=Ys=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Fn=!0),i.firstContext=null)}function ni(i){var s=i._currentValue;if(qc!==i)if(i={context:i,memoizedValue:s,next:null},Ys===null){if(Cl===null)throw Error(t(308));Ys=i,Cl.dependencies={lanes:0,firstContext:i}}else Ys=Ys.next=i;return s}var ts=null;function Qc(i){ts===null?ts=[i]:ts.push(i)}function km(i,s,a,f){var p=s.interleaved;return p===null?(a.next=a,Qc(s)):(a.next=p.next,p.next=a),s.interleaved=a,Wi(i,f)}function Wi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var wr=!1;function Jc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ji(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ar(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(St&2)!==0){var p=f.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),f.pending=s,Wi(i,a)}return p=f.interleaved,p===null?(s.next=s,Qc(f)):(s.next=p.next,p.next=s),f.interleaved=s,Wi(i,a)}function Rl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,hc(i,a)}}function zm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function bl(i,s,a,f){var p=i.updateQueue;wr=!1;var _=p.firstBaseUpdate,T=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var z=I,J=z.next;z.next=null,T===null?_=J:T.next=J,T=z;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==T&&(I===null?_e.firstBaseUpdate=J:I.next=J,_e.lastBaseUpdate=z))}if(_!==null){var xe=p.baseState;T=0,_e=J=z=null,I=_;do{var ge=I.lane,Ie=I.eventTime;if((f&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=i,Ge=I;switch(ge=s,Ie=a,Ge.tag){case 1:if(ze=Ge.payload,typeof ze=="function"){xe=ze.call(Ie,xe,ge);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ge.payload,ge=typeof ze=="function"?ze.call(Ie,xe,ge):ze,ge==null)break e;xe=oe({},xe,ge);break e;case 2:wr=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,ge=p.effects,ge===null?p.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(J=_e=Ie,z=xe):_e=_e.next=Ie,T|=ge;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(_e===null&&(z=xe),p.baseState=z,p.firstBaseUpdate=J,p.lastBaseUpdate=_e,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);rs|=T,i.lanes=T,i.memoizedState=xe}}function Vm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],p=f.callback;if(p!==null){if(f.callback=null,f=a,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var sa={},Pi=Mr(sa),oa=Mr(sa),aa=Mr(sa);function ns(i){if(i===sa)throw Error(t(174));return i}function ef(i,s){switch(Ft(aa,s),Ft(oa,i),Ft(Pi,sa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:We(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=We(s,i)}Bt(Pi),Ft(Pi,s)}function $s(){Bt(Pi),Bt(oa),Bt(aa)}function Hm(i){ns(aa.current);var s=ns(Pi.current),a=We(s,i.type);s!==a&&(Ft(oa,i),Ft(Pi,a))}function tf(i){oa.current===i&&(Bt(Pi),Bt(oa))}var Ht=Mr(0);function Pl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var nf=[];function rf(){for(var i=0;i<nf.length;i++)nf[i]._workInProgressVersionPrimary=null;nf.length=0}var Dl=C.ReactCurrentDispatcher,sf=C.ReactCurrentBatchConfig,is=0,Gt=null,tn=null,on=null,Ll=!1,la=!1,ua=0,VS=0;function gn(){throw Error(t(321))}function of(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!pi(i[a],s[a]))return!1;return!0}function af(i,s,a,f,p,_){if(is=_,Gt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Dl.current=i===null||i.memoizedState===null?jS:XS,i=a(f,p),la){_=0;do{if(la=!1,ua=0,25<=_)throw Error(t(301));_+=1,on=tn=null,s.updateQueue=null,Dl.current=YS,i=a(f,p)}while(la)}if(Dl.current=Nl,s=tn!==null&&tn.next!==null,is=0,on=tn=Gt=null,Ll=!1,s)throw Error(t(300));return i}function lf(){var i=ua!==0;return ua=0,i}function Di(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Gt.memoizedState=on=i:on=on.next=i,on}function ii(){if(tn===null){var i=Gt.alternate;i=i!==null?i.memoizedState:null}else i=tn.next;var s=on===null?Gt.memoizedState:on.next;if(s!==null)on=s,tn=i;else{if(i===null)throw Error(t(310));tn=i,i={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},on===null?Gt.memoizedState=on=i:on=on.next=i}return on}function ca(i,s){return typeof s=="function"?s(i):s}function uf(i){var s=ii(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=tn,p=f.baseQueue,_=a.pending;if(_!==null){if(p!==null){var T=p.next;p.next=_.next,_.next=T}f.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,f=f.baseState;var I=T=null,z=null,J=_;do{var _e=J.lane;if((is&_e)===_e)z!==null&&(z=z.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),f=J.hasEagerState?J.eagerState:i(f,J.action);else{var xe={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};z===null?(I=z=xe,T=f):z=z.next=xe,Gt.lanes|=_e,rs|=_e}J=J.next}while(J!==null&&J!==_);z===null?T=f:z.next=I,pi(f,s.memoizedState)||(Fn=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=z,a.lastRenderedState=f}if(i=a.interleaved,i!==null){p=i;do _=p.lane,Gt.lanes|=_,rs|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function cf(i){var s=ii(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do _=i(_,T.action),T=T.next;while(T!==p);pi(_,s.memoizedState)||(Fn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function Gm(){}function Wm(i,s){var a=Gt,f=ii(),p=s(),_=!pi(f.memoizedState,p);if(_&&(f.memoizedState=p,Fn=!0),f=f.queue,ff(Ym.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,fa(9,Xm.bind(null,a,f,p,s),void 0,null),an===null)throw Error(t(349));(is&30)!==0||jm(a,s,p)}return p}function jm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Gt.updateQueue,s===null?(s={lastEffect:null,stores:null},Gt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Xm(i,s,a,f){s.value=a,s.getSnapshot=f,qm(s)&&$m(i)}function Ym(i,s,a){return a(function(){qm(s)&&$m(i)})}function qm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!pi(i,a)}catch{return!0}}function $m(i){var s=Wi(i,1);s!==null&&yi(s,i,1,-1)}function Km(i){var s=Di();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:i},s.queue=i,i=i.dispatch=WS.bind(null,Gt,i),[s.memoizedState,i]}function fa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Gt.updateQueue,s===null?(s={lastEffect:null,stores:null},Gt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function Zm(){return ii().memoizedState}function Il(i,s,a,f){var p=Di();Gt.flags|=i,p.memoizedState=fa(1|s,a,void 0,f===void 0?null:f)}function Ul(i,s,a,f){var p=ii();f=f===void 0?null:f;var _=void 0;if(tn!==null){var T=tn.memoizedState;if(_=T.destroy,f!==null&&of(f,T.deps)){p.memoizedState=fa(s,a,_,f);return}}Gt.flags|=i,p.memoizedState=fa(1|s,a,_,f)}function Qm(i,s){return Il(8390656,8,i,s)}function ff(i,s){return Ul(2048,8,i,s)}function Jm(i,s){return Ul(4,2,i,s)}function eg(i,s){return Ul(4,4,i,s)}function tg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function ng(i,s,a){return a=a!=null?a.concat([i]):null,Ul(4,4,tg.bind(null,s,i),a)}function df(){}function ig(i,s){var a=ii();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&of(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function rg(i,s){var a=ii();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&of(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function sg(i,s,a){return(is&21)===0?(i.baseState&&(i.baseState=!1,Fn=!0),i.memoizedState=a):(pi(a,s)||(a=Cn(),Gt.lanes|=a,rs|=a,i.baseState=!0),s)}function HS(i,s){var a=Pt;Pt=a!==0&&4>a?a:4,i(!0);var f=sf.transition;sf.transition={};try{i(!1),s()}finally{Pt=a,sf.transition=f}}function og(){return ii().memoizedState}function GS(i,s,a){var f=Pr(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},ag(i))lg(s,a);else if(a=km(i,s,a,f),a!==null){var p=bn();yi(a,i,f,p),ug(a,s,f)}}function WS(i,s,a){var f=Pr(i),p={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(ag(i))lg(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,I=_(T,a);if(p.hasEagerState=!0,p.eagerState=I,pi(I,T)){var z=s.interleaved;z===null?(p.next=p,Qc(s)):(p.next=z.next,z.next=p),s.interleaved=p;return}}catch{}finally{}a=km(i,s,p,f),a!==null&&(p=bn(),yi(a,i,f,p),ug(a,s,f))}}function ag(i){var s=i.alternate;return i===Gt||s!==null&&s===Gt}function lg(i,s){la=Ll=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function ug(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,hc(i,a)}}var Nl={readContext:ni,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},jS={readContext:ni,useCallback:function(i,s){return Di().memoizedState=[i,s===void 0?null:s],i},useContext:ni,useEffect:Qm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Il(4194308,4,tg.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Il(4194308,4,i,s)},useInsertionEffect:function(i,s){return Il(4,2,i,s)},useMemo:function(i,s){var a=Di();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Di();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=GS.bind(null,Gt,i),[f.memoizedState,i]},useRef:function(i){var s=Di();return i={current:i},s.memoizedState=i},useState:Km,useDebugValue:df,useDeferredValue:function(i){return Di().memoizedState=i},useTransition:function(){var i=Km(!1),s=i[0];return i=HS.bind(null,i[1]),Di().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Gt,p=Di();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),an===null)throw Error(t(349));(is&30)!==0||jm(f,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,Qm(Ym.bind(null,f,_,i),[i]),f.flags|=2048,fa(9,Xm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Di(),s=an.identifierPrefix;if(Vt){var a=Gi,f=Hi;a=(f&~(1<<32-lt(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=ua++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=VS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},XS={readContext:ni,useCallback:ig,useContext:ni,useEffect:ff,useImperativeHandle:ng,useInsertionEffect:Jm,useLayoutEffect:eg,useMemo:rg,useReducer:uf,useRef:Zm,useState:function(){return uf(ca)},useDebugValue:df,useDeferredValue:function(i){var s=ii();return sg(s,tn.memoizedState,i)},useTransition:function(){var i=uf(ca)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Gm,useSyncExternalStore:Wm,useId:og,unstable_isNewReconciler:!1},YS={readContext:ni,useCallback:ig,useContext:ni,useEffect:ff,useImperativeHandle:ng,useInsertionEffect:Jm,useLayoutEffect:eg,useMemo:rg,useReducer:cf,useRef:Zm,useState:function(){return cf(ca)},useDebugValue:df,useDeferredValue:function(i){var s=ii();return tn===null?s.memoizedState=i:sg(s,tn.memoizedState,i)},useTransition:function(){var i=cf(ca)[0],s=ii().memoizedState;return[i,s]},useMutableSource:Gm,useSyncExternalStore:Wm,useId:og,unstable_isNewReconciler:!1};function gi(i,s){if(i&&i.defaultProps){s=oe({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function hf(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:oe({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Fl={isMounted:function(i){return(i=i._reactInternals)?Ci(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=bn(),p=Pr(i),_=ji(f,p);_.payload=s,a!=null&&(_.callback=a),s=Ar(i,_,p),s!==null&&(yi(s,i,p,f),Rl(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=bn(),p=Pr(i),_=ji(f,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Ar(i,_,p),s!==null&&(yi(s,i,p,f),Rl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=bn(),f=Pr(i),p=ji(a,f);p.tag=2,s!=null&&(p.callback=s),s=Ar(i,p,f),s!==null&&(yi(s,i,f,a),Rl(s,i,f))}};function cg(i,s,a,f,p,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,T):s.prototype&&s.prototype.isPureReactComponent?!Zo(a,f)||!Zo(p,_):!0}function fg(i,s,a){var f=!1,p=Er,_=s.contextType;return typeof _=="object"&&_!==null?_=ni(_):(p=Nn(s)?Qr:mn.current,f=s.contextTypes,_=(f=f!=null)?Hs(i,p):Er),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Fl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function dg(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Fl.enqueueReplaceState(s,s.state,null)}function pf(i,s,a,f){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},Jc(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ni(_):(_=Nn(s)?Qr:mn.current,p.context=Hs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(hf(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Fl.enqueueReplaceState(p,p.state,null),bl(i,a,p,f),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ks(i,s){try{var a="",f=s;do a+=de(f),f=f.return;while(f);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function mf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function gf(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function hg(i,s,a){a=ji(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Gl||(Gl=!0,Df=f),gf(i,s)},a}function pg(i,s,a){a=ji(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var p=s.value;a.payload=function(){return f(p)},a.callback=function(){gf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){gf(i,s),typeof f!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),a}function mg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new qS;var p=new Set;f.set(s,p)}else p=f.get(s),p===void 0&&(p=new Set,f.set(s,p));p.has(a)||(p.add(a),i=lM.bind(null,i,s,a),s.then(i,i))}function gg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function vg(i,s,a,f,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=ji(-1,1),s.tag=2,Ar(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var $S=C.ReactCurrentOwner,Fn=!1;function Rn(i,s,a,f){s.child=i===null?Om(s,null,a,f):Xs(s,i.child,a,f)}function _g(i,s,a,f,p){a=a.render;var _=s.ref;return qs(s,p),f=af(i,s,a,f,_,p),a=lf(),i!==null&&!Fn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Xi(i,s,p)):(Vt&&a&&Gc(s),s.flags|=1,Rn(i,s,f,p),s.child)}function yg(i,s,a,f,p){if(i===null){var _=a.type;return typeof _=="function"&&!kf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,xg(i,s,_,f,p)):(i=$l(a.type,null,f,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(T,f)&&i.ref===s.ref)return Xi(i,s,p)}return s.flags|=1,i=Lr(_,f),i.ref=s.ref,i.return=s,s.child=i}function xg(i,s,a,f,p){if(i!==null){var _=i.memoizedProps;if(Zo(_,f)&&i.ref===s.ref)if(Fn=!1,s.pendingProps=f=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Fn=!0);else return s.lanes=i.lanes,Xi(i,s,p)}return vf(i,s,a,f,p)}function Sg(i,s,a){var f=s.pendingProps,p=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Qs,Yn),Yn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ft(Qs,Yn),Yn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Ft(Qs,Yn),Yn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Ft(Qs,Yn),Yn|=f;return Rn(i,s,p,a),s.child}function Mg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function vf(i,s,a,f,p){var _=Nn(a)?Qr:mn.current;return _=Hs(s,_),qs(s,p),a=af(i,s,a,f,_,p),f=lf(),i!==null&&!Fn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Xi(i,s,p)):(Vt&&f&&Gc(s),s.flags|=1,Rn(i,s,a,p),s.child)}function Eg(i,s,a,f,p){if(Nn(a)){var _=!0;xl(s)}else _=!1;if(qs(s,p),s.stateNode===null)kl(i,s),fg(s,a,f),pf(s,a,f,p),f=!0;else if(i===null){var T=s.stateNode,I=s.memoizedProps;T.props=I;var z=T.context,J=a.contextType;typeof J=="object"&&J!==null?J=ni(J):(J=Nn(a)?Qr:mn.current,J=Hs(s,J));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";xe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==f||z!==J)&&dg(s,T,f,J),wr=!1;var ge=s.memoizedState;T.state=ge,bl(s,f,T,p),z=s.memoizedState,I!==f||ge!==z||Un.current||wr?(typeof _e=="function"&&(hf(s,a,_e,f),z=s.memoizedState),(I=wr||cg(s,a,I,f,ge,z,J))?(xe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),T.props=f,T.state=z,T.context=J,f=I):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,Bm(i,s),I=s.memoizedProps,J=s.type===s.elementType?I:gi(s.type,I),T.props=J,xe=s.pendingProps,ge=T.context,z=a.contextType,typeof z=="object"&&z!==null?z=ni(z):(z=Nn(a)?Qr:mn.current,z=Hs(s,z));var Ie=a.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==xe||ge!==z)&&dg(s,T,f,z),wr=!1,ge=s.memoizedState,T.state=ge,bl(s,f,T,p);var ze=s.memoizedState;I!==xe||ge!==ze||Un.current||wr?(typeof Ie=="function"&&(hf(s,a,Ie,f),ze=s.memoizedState),(J=wr||cg(s,a,J,f,ge,ze,z)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,ze,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,ze,z)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=ze),T.props=f,T.state=ze,T.context=z,f=J):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),f=!1)}return _f(i,s,a,f,_,p)}function _f(i,s,a,f,p,_){Mg(i,s);var T=(s.flags&128)!==0;if(!f&&!T)return p&&Rm(s,a,!1),Xi(i,s,_);f=s.stateNode,$S.current=s;var I=T&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&T?(s.child=Xs(s,i.child,null,_),s.child=Xs(s,null,I,_)):Rn(i,s,I,_),s.memoizedState=f.state,p&&Rm(s,a,!0),s.child}function Tg(i){var s=i.stateNode;s.pendingContext?Am(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Am(i,s.context,!1),ef(i,s.containerInfo)}function wg(i,s,a,f,p){return js(),Yc(p),s.flags|=256,Rn(i,s,a,f),s.child}var yf={dehydrated:null,treeContext:null,retryLane:0};function xf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Ag(i,s,a){var f=s.pendingProps,p=Ht.current,_=!1,T=(s.flags&128)!==0,I;if((I=T)||(I=i!==null&&i.memoizedState===null?!1:(p&2)!==0),I?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ft(Ht,p&1),i===null)return Xc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=f.children,i=f.fallback,_?(f=s.mode,_=s.child,T={mode:"hidden",children:T},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Kl(T,f,0,null),i=ls(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=xf(a),s.memoizedState=yf,i):Sf(s,T));if(p=i.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return KS(i,s,T,f,I,p,a);if(_){_=f.fallback,T=s.mode,p=i.child,I=p.sibling;var z={mode:"hidden",children:f.children};return(T&1)===0&&s.child!==p?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=Lr(p,z),f.subtreeFlags=p.subtreeFlags&14680064),I!==null?_=Lr(I,_):(_=ls(_,T,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,T=i.child.memoizedState,T=T===null?xf(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~a,s.memoizedState=yf,f}return _=i.child,i=_.sibling,f=Lr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function Sf(i,s){return s=Kl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Ol(i,s,a,f){return f!==null&&Yc(f),Xs(s,i.child,null,a),i=Sf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function KS(i,s,a,f,p,_,T){if(a)return s.flags&256?(s.flags&=-257,f=mf(Error(t(422))),Ol(i,s,T,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,p=s.mode,f=Kl({mode:"visible",children:f.children},p,0,null),_=ls(_,p,T,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&Xs(s,i.child,null,T),s.child.memoizedState=xf(T),s.memoizedState=yf,_);if((s.mode&1)===0)return Ol(i,s,T,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var I=f.dgst;return f=I,_=Error(t(419)),f=mf(_,f,void 0),Ol(i,s,T,f)}if(I=(T&i.childLanes)!==0,Fn||I){if(f=an,f!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(f.suspendedLanes|T))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Wi(i,p),yi(f,i,p,-1))}return Of(),f=mf(Error(t(421))),Ol(i,s,T,f)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=uM.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,Xn=Sr(p.nextSibling),jn=s,Vt=!0,mi=null,i!==null&&(ei[ti++]=Hi,ei[ti++]=Gi,ei[ti++]=Jr,Hi=i.id,Gi=i.overflow,Jr=s),s=Sf(s,f.children),s.flags|=4096,s)}function Cg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Zc(i.return,s,a)}function Mf(i,s,a,f,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=p)}function Rg(i,s,a){var f=s.pendingProps,p=f.revealOrder,_=f.tail;if(Rn(i,s,f.children,a),f=Ht.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Cg(i,a,s);else if(i.tag===19)Cg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ft(Ht,f),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Pl(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),Mf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Pl(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}Mf(s,!0,a,null,_);break;case"together":Mf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function kl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Xi(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),rs|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Lr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Lr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function ZS(i,s,a){switch(s.tag){case 3:Tg(s),js();break;case 5:Hm(s);break;case 1:Nn(s.type)&&xl(s);break;case 4:ef(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,p=s.memoizedProps.value;Ft(Al,f._currentValue),f._currentValue=p;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ft(Ht,Ht.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Ag(i,s,a):(Ft(Ht,Ht.current&1),i=Xi(i,s,a),i!==null?i.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return Rg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ft(Ht,Ht.current),f)break;return null;case 22:case 23:return s.lanes=0,Sg(i,s,a)}return Xi(i,s,a)}var bg,Ef,Pg,Dg;bg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ef=function(){},Pg=function(i,s,a,f){var p=i.memoizedProps;if(p!==f){i=s.stateNode,ns(Pi.current);var _=null;switch(a){case"input":p=q(i,p),f=q(i,f),_=[];break;case"select":p=oe({},p,{value:void 0}),f=oe({},f,{value:void 0}),_=[];break;case"textarea":p=w(i,p),f=w(i,f),_=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=vl)}ht(a,f);var T;a=null;for(J in p)if(!f.hasOwnProperty(J)&&p.hasOwnProperty(J)&&p[J]!=null)if(J==="style"){var I=p[J];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(o.hasOwnProperty(J)?_||(_=[]):(_=_||[]).push(J,null));for(J in f){var z=f[J];if(I=p!=null?p[J]:void 0,f.hasOwnProperty(J)&&z!==I&&(z!=null||I!=null))if(J==="style")if(I){for(T in I)!I.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in z)z.hasOwnProperty(T)&&I[T]!==z[T]&&(a||(a={}),a[T]=z[T])}else a||(_||(_=[]),_.push(J,a)),a=z;else J==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(_=_||[]).push(J,z)):J==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(J,""+z):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(o.hasOwnProperty(J)?(z!=null&&J==="onScroll"&&kt("scroll",i),_||I===z||(_=[])):(_=_||[]).push(J,z))}a&&(_=_||[]).push("style",a);var J=_;(s.updateQueue=J)&&(s.flags|=4)}},Dg=function(i,s,a,f){a!==f&&(s.flags|=4)};function da(i,s){if(!Vt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function vn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function QS(i,s,a){var f=s.pendingProps;switch(Wc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(s),null;case 1:return Nn(s.type)&&yl(),vn(s),null;case 3:return f=s.stateNode,$s(),Bt(Un),Bt(mn),rf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Tl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,mi!==null&&(Uf(mi),mi=null))),Ef(i,s),vn(s),null;case 5:tf(s);var p=ns(aa.current);if(a=s.type,i!==null&&s.stateNode!=null)Pg(i,s,a,f,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return vn(s),null}if(i=ns(Pi.current),Tl(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[bi]=s,f[na]=_,i=(s.mode&1)!==0,a){case"dialog":kt("cancel",f),kt("close",f);break;case"iframe":case"object":case"embed":kt("load",f);break;case"video":case"audio":for(p=0;p<Jo.length;p++)kt(Jo[p],f);break;case"source":kt("error",f);break;case"img":case"image":case"link":kt("error",f),kt("load",f);break;case"details":kt("toggle",f);break;case"input":wn(f,_),kt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},kt("invalid",f);break;case"textarea":Z(f,_),kt("invalid",f)}ht(a,_),p=null;for(var T in _)if(_.hasOwnProperty(T)){var I=_[T];T==="children"?typeof I=="string"?f.textContent!==I&&(_.suppressHydrationWarning!==!0&&gl(f.textContent,I,i),p=["children",I]):typeof I=="number"&&f.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&gl(f.textContent,I,i),p=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&kt("scroll",f)}switch(a){case"input":Dt(f),Ke(f,_,!0);break;case"textarea":Dt(f),ve(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=vl)}f=p,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(a,{is:f.is}):(i=T.createElement(a),a==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,a),i[bi]=s,i[na]=f,bg(i,s,!1,!1),s.stateNode=i;e:{switch(T=ot(a,f),a){case"dialog":kt("cancel",i),kt("close",i),p=f;break;case"iframe":case"object":case"embed":kt("load",i),p=f;break;case"video":case"audio":for(p=0;p<Jo.length;p++)kt(Jo[p],i);p=f;break;case"source":kt("error",i),p=f;break;case"img":case"image":case"link":kt("error",i),kt("load",i),p=f;break;case"details":kt("toggle",i),p=f;break;case"input":wn(i,f),p=q(i,f),kt("invalid",i);break;case"option":p=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},p=oe({},f,{value:void 0}),kt("invalid",i);break;case"textarea":Z(i,f),p=w(i,f),kt("invalid",i);break;default:p=f}ht(a,p),I=p;for(_ in I)if(I.hasOwnProperty(_)){var z=I[_];_==="style"?nt(i,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Fe(i,z)):_==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&ft(i,z):typeof z=="number"&&ft(i,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&kt("scroll",i):z!=null&&P(i,_,z,T))}switch(a){case"input":Dt(i),Ke(i,f,!1);break;case"textarea":Dt(i),ve(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ce(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?L(i,!!f.multiple,_,!1):f.defaultValue!=null&&L(i,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=vl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return vn(s),null;case 6:if(i&&s.stateNode!=null)Dg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=ns(aa.current),ns(Pi.current),Tl(s)){if(f=s.stateNode,a=s.memoizedProps,f[bi]=s,(_=f.nodeValue!==a)&&(i=jn,i!==null))switch(i.tag){case 3:gl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&gl(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[bi]=s,s.stateNode=f}return vn(s),null;case 13:if(Bt(Ht),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Vt&&Xn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Um(),js(),s.flags|=98560,_=!1;else if(_=Tl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[bi]=s}else js(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;vn(s),_=!1}else mi!==null&&(Uf(mi),mi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Ht.current&1)!==0?nn===0&&(nn=3):Of())),s.updateQueue!==null&&(s.flags|=4),vn(s),null);case 4:return $s(),Ef(i,s),i===null&&ea(s.stateNode.containerInfo),vn(s),null;case 10:return Kc(s.type._context),vn(s),null;case 17:return Nn(s.type)&&yl(),vn(s),null;case 19:if(Bt(Ht),_=s.memoizedState,_===null)return vn(s),null;if(f=(s.flags&128)!==0,T=_.rendering,T===null)if(f)da(_,!1);else{if(nn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(T=Pl(i),T!==null){for(s.flags|=128,da(_,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Ft(Ht,Ht.current&1|2),s.child}i=i.sibling}_.tail!==null&&Ee()>Js&&(s.flags|=128,f=!0,da(_,!1),s.lanes=4194304)}else{if(!f)if(i=Pl(T),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),da(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Vt)return vn(s),null}else 2*Ee()-_.renderingStartTime>Js&&a!==1073741824&&(s.flags|=128,f=!0,da(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(a=_.last,a!==null?a.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Ee(),s.sibling=null,a=Ht.current,Ft(Ht,f?a&1|2:a&1),s):(vn(s),null);case 22:case 23:return Ff(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Yn&1073741824)!==0&&(vn(s),s.subtreeFlags&6&&(s.flags|=8192)):vn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function JS(i,s){switch(Wc(s),s.tag){case 1:return Nn(s.type)&&yl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return $s(),Bt(Un),Bt(mn),rf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return tf(s),null;case 13:if(Bt(Ht),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));js()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Bt(Ht),null;case 4:return $s(),null;case 10:return Kc(s.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var Bl=!1,_n=!1,eM=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Zs(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){jt(i,s,f)}else a.current=null}function Tf(i,s,a){try{a()}catch(f){jt(i,s,f)}}var Lg=!1;function tM(i,s){if(Nc=sl,i=cm(),Cc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var p=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,I=-1,z=-1,J=0,_e=0,xe=i,ge=null;t:for(;;){for(var Ie;xe!==a||p!==0&&xe.nodeType!==3||(I=T+p),xe!==_||f!==0&&xe.nodeType!==3||(z=T+f),xe.nodeType===3&&(T+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)ge=xe,xe=Ie;for(;;){if(xe===i)break t;if(ge===a&&++J===p&&(I=T),ge===_&&++_e===f&&(z=T),(Ie=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Ie}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:i,selectionRange:a},sl=!1,Oe=s;Oe!==null;)if(s=Oe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Oe=i;else for(;Oe!==null;){s=Oe;try{var ze=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ge=ze.memoizedProps,qt=ze.memoizedState,$=s.stateNode,G=$.getSnapshotBeforeUpdate(s.elementType===s.type?Ge:gi(s.type,Ge),qt);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=s.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){jt(s,s.return,we)}if(i=s.sibling,i!==null){i.return=s.return,Oe=i;break}Oe=s.return}return ze=Lg,Lg=!1,ze}function ha(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Tf(s,a,_)}p=p.next}while(p!==f)}}function zl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function wf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Ig(i){var s=i.alternate;s!==null&&(i.alternate=null,Ig(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[bi],delete s[na],delete s[zc],delete s[OS],delete s[kS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Ug(i){return i.tag===5||i.tag===3||i.tag===4}function Ng(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Ug(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Af(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=vl));else if(f!==4&&(i=i.child,i!==null))for(Af(i,s,a),i=i.sibling;i!==null;)Af(i,s,a),i=i.sibling}function Cf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Cf(i,s,a),i=i.sibling;i!==null;)Cf(i,s,a),i=i.sibling}var cn=null,vi=!1;function Cr(i,s,a){for(a=a.child;a!==null;)Fg(i,s,a),a=a.sibling}function Fg(i,s,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 5:_n||Zs(a,s);case 6:var f=cn,p=vi;cn=null,Cr(i,s,a),cn=f,vi=p,cn!==null&&(vi?(i=cn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(vi?(i=cn,a=a.stateNode,i.nodeType===8?Bc(i.parentNode,a):i.nodeType===1&&Bc(i,a),jo(i)):Bc(cn,a.stateNode));break;case 4:f=cn,p=vi,cn=a.stateNode.containerInfo,vi=!0,Cr(i,s,a),cn=f,vi=p;break;case 0:case 11:case 14:case 15:if(!_n&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var _=p,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&Tf(a,s,T),p=p.next}while(p!==f)}Cr(i,s,a);break;case 1:if(!_n&&(Zs(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(I){jt(a,s,I)}Cr(i,s,a);break;case 21:Cr(i,s,a);break;case 22:a.mode&1?(_n=(f=_n)||a.memoizedState!==null,Cr(i,s,a),_n=f):Cr(i,s,a);break;default:Cr(i,s,a)}}function Og(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new eM),s.forEach(function(f){var p=cM.bind(null,i,f);a.has(f)||(a.add(f),f.then(p,p))})}}function _i(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var p=a[f];try{var _=i,T=s,I=T;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,vi=!1;break e;case 3:cn=I.stateNode.containerInfo,vi=!0;break e;case 4:cn=I.stateNode.containerInfo,vi=!0;break e}I=I.return}if(cn===null)throw Error(t(160));Fg(_,T,p),cn=null,vi=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(J){jt(p,s,J)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)kg(s,i),s=s.sibling}function kg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(_i(s,i),Li(i),f&4){try{ha(3,i,i.return),zl(3,i)}catch(Ge){jt(i,i.return,Ge)}try{ha(5,i,i.return)}catch(Ge){jt(i,i.return,Ge)}}break;case 1:_i(s,i),Li(i),f&512&&a!==null&&Zs(a,a.return);break;case 5:if(_i(s,i),Li(i),f&512&&a!==null&&Zs(a,a.return),i.flags&32){var p=i.stateNode;try{ft(p,"")}catch(Ge){jt(i,i.return,Ge)}}if(f&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,T=a!==null?a.memoizedProps:_,I=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&mt(p,_),ot(I,T);var J=ot(I,_);for(T=0;T<z.length;T+=2){var _e=z[T],xe=z[T+1];_e==="style"?nt(p,xe):_e==="dangerouslySetInnerHTML"?Fe(p,xe):_e==="children"?ft(p,xe):P(p,_e,xe,J)}switch(I){case"input":dt(p,_);break;case"textarea":me(p,_);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ie=_.value;Ie!=null?L(p,!!_.multiple,Ie,!1):ge!==!!_.multiple&&(_.defaultValue!=null?L(p,!!_.multiple,_.defaultValue,!0):L(p,!!_.multiple,_.multiple?[]:"",!1))}p[na]=_}catch(Ge){jt(i,i.return,Ge)}}break;case 6:if(_i(s,i),Li(i),f&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(Ge){jt(i,i.return,Ge)}}break;case 3:if(_i(s,i),Li(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{jo(s.containerInfo)}catch(Ge){jt(i,i.return,Ge)}break;case 4:_i(s,i),Li(i);break;case 13:_i(s,i),Li(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Pf=Ee())),f&4&&Og(i);break;case 22:if(_e=a!==null&&a.memoizedState!==null,i.mode&1?(_n=(J=_n)||_e,_i(s,i),_n=J):_i(s,i),Li(i),f&8192){if(J=i.memoizedState!==null,(i.stateNode.isHidden=J)&&!_e&&(i.mode&1)!==0)for(Oe=i,_e=i.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(ge=Oe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:ha(4,ge,ge.return);break;case 1:Zs(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){f=ge,a=ge.return;try{s=f,ze.props=s.memoizedProps,ze.state=s.memoizedState,ze.componentWillUnmount()}catch(Ge){jt(f,a,Ge)}}break;case 5:Zs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Vg(xe);continue}}Ie!==null?(Ie.return=ge,Oe=Ie):Vg(xe)}_e=_e.sibling}e:for(_e=null,xe=i;;){if(xe.tag===5){if(_e===null){_e=xe;try{p=xe.stateNode,J?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=xe.stateNode,z=xe.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=et("display",T))}catch(Ge){jt(i,i.return,Ge)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=J?"":xe.memoizedProps}catch(Ge){jt(i,i.return,Ge)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===i)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===i)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===i)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:_i(s,i),Li(i),f&4&&Og(i);break;case 21:break;default:_i(s,i),Li(i)}}function Li(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Ug(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(ft(p,""),f.flags&=-33);var _=Ng(i);Cf(i,_,p);break;case 3:case 4:var T=f.stateNode.containerInfo,I=Ng(i);Af(i,I,T);break;default:throw Error(t(161))}}catch(z){jt(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function nM(i,s,a){Oe=i,Bg(i)}function Bg(i,s,a){for(var f=(i.mode&1)!==0;Oe!==null;){var p=Oe,_=p.child;if(p.tag===22&&f){var T=p.memoizedState!==null||Bl;if(!T){var I=p.alternate,z=I!==null&&I.memoizedState!==null||_n;I=Bl;var J=_n;if(Bl=T,(_n=z)&&!J)for(Oe=p;Oe!==null;)T=Oe,z=T.child,T.tag===22&&T.memoizedState!==null?Hg(p):z!==null?(z.return=T,Oe=z):Hg(p);for(;_!==null;)Oe=_,Bg(_),_=_.sibling;Oe=p,Bl=I,_n=J}zg(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Oe=_):zg(i)}}function zg(i){for(;Oe!==null;){var s=Oe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:_n||zl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!_n)if(a===null)f.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:gi(s.type,a.memoizedProps);f.componentDidUpdate(p,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Vm(s,_,f);break;case 3:var T=s.updateQueue;if(T!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Vm(s,T,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var J=s.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&jo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||s.flags&512&&wf(s)}catch(ge){jt(s,s.return,ge)}}if(s===i){Oe=null;break}if(a=s.sibling,a!==null){a.return=s.return,Oe=a;break}Oe=s.return}}function Vg(i){for(;Oe!==null;){var s=Oe;if(s===i){Oe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Oe=a;break}Oe=s.return}}function Hg(i){for(;Oe!==null;){var s=Oe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{zl(4,s)}catch(z){jt(s,a,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var p=s.return;try{f.componentDidMount()}catch(z){jt(s,p,z)}}var _=s.return;try{wf(s)}catch(z){jt(s,_,z)}break;case 5:var T=s.return;try{wf(s)}catch(z){jt(s,T,z)}}}catch(z){jt(s,s.return,z)}if(s===i){Oe=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Oe=I;break}Oe=s.return}}var iM=Math.ceil,Vl=C.ReactCurrentDispatcher,Rf=C.ReactCurrentOwner,ri=C.ReactCurrentBatchConfig,St=0,an=null,Zt=null,fn=0,Yn=0,Qs=Mr(0),nn=0,pa=null,rs=0,Hl=0,bf=0,ma=null,On=null,Pf=0,Js=1/0,Yi=null,Gl=!1,Df=null,Rr=null,Wl=!1,br=null,jl=0,ga=0,Lf=null,Xl=-1,Yl=0;function bn(){return(St&6)!==0?Ee():Xl!==-1?Xl:Xl=Ee()}function Pr(i){return(i.mode&1)===0?1:(St&2)!==0&&fn!==0?fn&-fn:zS.transition!==null?(Yl===0&&(Yl=Cn()),Yl):(i=Pt,i!==0||(i=window.event,i=i===void 0?16:Wp(i.type)),i)}function yi(i,s,a,f){if(50<ga)throw ga=0,Lf=null,Error(t(185));In(i,a,f),((St&2)===0||i!==an)&&(i===an&&((St&2)===0&&(Hl|=a),nn===4&&Dr(i,fn)),kn(i,f),a===1&&St===0&&(s.mode&1)===0&&(Js=Ee()+500,Sl&&Tr()))}function kn(i,s){var a=i.callbackNode;Qn(i,s);var f=Ri(i,i===an?fn:0);if(f===0)a!==null&&ne(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&ne(a),s===1)i.tag===0?BS(Wg.bind(null,i)):bm(Wg.bind(null,i)),NS(function(){(St&6)===0&&Tr()}),a=null;else{switch(Fp(f)){case 1:a=He;break;case 4:a=it;break;case 16:a=st;break;case 536870912:a=_t;break;default:a=st}a=Qg(a,Gg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Gg(i,s){if(Xl=-1,Yl=0,(St&6)!==0)throw Error(t(327));var a=i.callbackNode;if(eo()&&i.callbackNode!==a)return null;var f=Ri(i,i===an?fn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=ql(i,f);else{s=f;var p=St;St|=2;var _=Xg();(an!==i||fn!==s)&&(Yi=null,Js=Ee()+500,os(i,s));do try{oM();break}catch(I){jg(i,I)}while(!0);$c(),Vl.current=_,St=p,Zt!==null?s=0:(an=null,fn=0,s=nn)}if(s!==0){if(s===2&&(p=Bi(i),p!==0&&(f=p,s=If(i,p))),s===1)throw a=pa,os(i,0),Dr(i,f),kn(i,Ee()),a;if(s===6)Dr(i,f);else{if(p=i.current.alternate,(f&30)===0&&!rM(p)&&(s=ql(i,f),s===2&&(_=Bi(i),_!==0&&(f=_,s=If(i,_))),s===1))throw a=pa,os(i,0),Dr(i,f),kn(i,Ee()),a;switch(i.finishedWork=p,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:as(i,On,Yi);break;case 3:if(Dr(i,f),(f&130023424)===f&&(s=Pf+500-Ee(),10<s)){if(Ri(i,0)!==0)break;if(p=i.suspendedLanes,(p&f)!==f){bn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=kc(as.bind(null,i,On,Yi),s);break}as(i,On,Yi);break;case 4:if(Dr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,p=-1;0<f;){var T=31-lt(f);_=1<<T,T=s[T],T>p&&(p=T),f&=~_}if(f=p,f=Ee()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*iM(f/1960))-f,10<f){i.timeoutHandle=kc(as.bind(null,i,On,Yi),f);break}as(i,On,Yi);break;case 5:as(i,On,Yi);break;default:throw Error(t(329))}}}return kn(i,Ee()),i.callbackNode===a?Gg.bind(null,i):null}function If(i,s){var a=ma;return i.current.memoizedState.isDehydrated&&(os(i,s).flags|=256),i=ql(i,s),i!==2&&(s=On,On=a,s!==null&&Uf(s)),i}function Uf(i){On===null?On=i:On.push.apply(On,i)}function rM(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var p=a[f],_=p.getSnapshot;p=p.value;try{if(!pi(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Dr(i,s){for(s&=~bf,s&=~Hl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-lt(s),f=1<<a;i[a]=-1,s&=~f}}function Wg(i){if((St&6)!==0)throw Error(t(327));eo();var s=Ri(i,0);if((s&1)===0)return kn(i,Ee()),null;var a=ql(i,s);if(i.tag!==0&&a===2){var f=Bi(i);f!==0&&(s=f,a=If(i,f))}if(a===1)throw a=pa,os(i,0),Dr(i,s),kn(i,Ee()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,as(i,On,Yi),kn(i,Ee()),null}function Nf(i,s){var a=St;St|=1;try{return i(s)}finally{St=a,St===0&&(Js=Ee()+500,Sl&&Tr())}}function ss(i){br!==null&&br.tag===0&&(St&6)===0&&eo();var s=St;St|=1;var a=ri.transition,f=Pt;try{if(ri.transition=null,Pt=1,i)return i()}finally{Pt=f,ri.transition=a,St=s,(St&6)===0&&Tr()}}function Ff(){Yn=Qs.current,Bt(Qs)}function os(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,US(a)),Zt!==null)for(a=Zt.return;a!==null;){var f=a;switch(Wc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&yl();break;case 3:$s(),Bt(Un),Bt(mn),rf();break;case 5:tf(f);break;case 4:$s();break;case 13:Bt(Ht);break;case 19:Bt(Ht);break;case 10:Kc(f.type._context);break;case 22:case 23:Ff()}a=a.return}if(an=i,Zt=i=Lr(i.current,null),fn=Yn=s,nn=0,pa=null,bf=Hl=rs=0,On=ma=null,ts!==null){for(s=0;s<ts.length;s++)if(a=ts[s],f=a.interleaved,f!==null){a.interleaved=null;var p=f.next,_=a.pending;if(_!==null){var T=_.next;_.next=p,f.next=T}a.pending=f}ts=null}return i}function jg(i,s){do{var a=Zt;try{if($c(),Dl.current=Nl,Ll){for(var f=Gt.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}Ll=!1}if(is=0,on=tn=Gt=null,la=!1,ua=0,Rf.current=null,a===null||a.return===null){nn=1,pa=s,Zt=null;break}e:{var _=i,T=a.return,I=a,z=s;if(s=fn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var J=z,_e=I,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=gg(T);if(Ie!==null){Ie.flags&=-257,vg(Ie,T,I,_,s),Ie.mode&1&&mg(_,J,s),s=Ie,z=J;var ze=s.updateQueue;if(ze===null){var Ge=new Set;Ge.add(z),s.updateQueue=Ge}else ze.add(z);break e}else{if((s&1)===0){mg(_,J,s),Of();break e}z=Error(t(426))}}else if(Vt&&I.mode&1){var qt=gg(T);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),vg(qt,T,I,_,s),Yc(Ks(z,I));break e}}_=z=Ks(z,I),nn!==4&&(nn=2),ma===null?ma=[_]:ma.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var $=hg(_,z,s);zm(_,$);break e;case 1:I=z;var G=_.type,K=_.stateNode;if((_.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Rr===null||!Rr.has(K)))){_.flags|=65536,s&=-s,_.lanes|=s;var we=pg(_,I,s);zm(_,we);break e}}_=_.return}while(_!==null)}qg(a)}catch(Ye){s=Ye,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Xg(){var i=Vl.current;return Vl.current=Nl,i===null?Nl:i}function Of(){(nn===0||nn===3||nn===2)&&(nn=4),an===null||(rs&268435455)===0&&(Hl&268435455)===0||Dr(an,fn)}function ql(i,s){var a=St;St|=2;var f=Xg();(an!==i||fn!==s)&&(Yi=null,os(i,s));do try{sM();break}catch(p){jg(i,p)}while(!0);if($c(),St=a,Vl.current=f,Zt!==null)throw Error(t(261));return an=null,fn=0,nn}function sM(){for(;Zt!==null;)Yg(Zt)}function oM(){for(;Zt!==null&&!Y();)Yg(Zt)}function Yg(i){var s=Zg(i.alternate,i,Yn);i.memoizedProps=i.pendingProps,s===null?qg(i):Zt=s,Rf.current=null}function qg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=QS(a,s,Yn),a!==null){Zt=a;return}}else{if(a=JS(a,s),a!==null){a.flags&=32767,Zt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{nn=6,Zt=null;return}}if(s=s.sibling,s!==null){Zt=s;return}Zt=s=i}while(s!==null);nn===0&&(nn=5)}function as(i,s,a){var f=Pt,p=ri.transition;try{ri.transition=null,Pt=1,aM(i,s,a,f)}finally{ri.transition=p,Pt=f}return null}function aM(i,s,a,f){do eo();while(br!==null);if((St&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(nl(i,_),i===an&&(Zt=an=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wl||(Wl=!0,Qg(st,function(){return eo(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=ri.transition,ri.transition=null;var T=Pt;Pt=1;var I=St;St|=4,Rf.current=null,tM(i,a),kg(a,i),CS(Fc),sl=!!Nc,Fc=Nc=null,i.current=a,nM(a),Ae(),St=I,Pt=T,ri.transition=_}else i.current=a;if(Wl&&(Wl=!1,br=i,jl=p),_=i.pendingLanes,_===0&&(Rr=null),hn(a.stateNode),kn(i,Ee()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],f(p.value,{componentStack:p.stack,digest:p.digest});if(Gl)throw Gl=!1,i=Df,Df=null,i;return(jl&1)!==0&&i.tag!==0&&eo(),_=i.pendingLanes,(_&1)!==0?i===Lf?ga++:(ga=0,Lf=i):ga=0,Tr(),null}function eo(){if(br!==null){var i=Fp(jl),s=ri.transition,a=Pt;try{if(ri.transition=null,Pt=16>i?16:i,br===null)var f=!1;else{if(i=br,br=null,jl=0,(St&6)!==0)throw Error(t(331));var p=St;for(St|=4,Oe=i.current;Oe!==null;){var _=Oe,T=_.child;if((Oe.flags&16)!==0){var I=_.deletions;if(I!==null){for(var z=0;z<I.length;z++){var J=I[z];for(Oe=J;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:ha(8,_e,_)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var ge=_e.sibling,Ie=_e.return;if(Ig(_e),_e===J){Oe=null;break}if(ge!==null){ge.return=Ie,Oe=ge;break}Oe=Ie}}}var ze=_.alternate;if(ze!==null){var Ge=ze.child;if(Ge!==null){ze.child=null;do{var qt=Ge.sibling;Ge.sibling=null,Ge=qt}while(Ge!==null)}}Oe=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,Oe=T;else e:for(;Oe!==null;){if(_=Oe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ha(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,Oe=$;break e}Oe=_.return}}var G=i.current;for(Oe=G;Oe!==null;){T=Oe;var K=T.child;if((T.subtreeFlags&2064)!==0&&K!==null)K.return=T,Oe=K;else e:for(T=G;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:zl(9,I)}}catch(Ye){jt(I,I.return,Ye)}if(I===T){Oe=null;break e}var we=I.sibling;if(we!==null){we.return=I.return,Oe=we;break e}Oe=I.return}}if(St=p,Tr(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(At,i)}catch{}f=!0}return f}finally{Pt=a,ri.transition=s}}return!1}function $g(i,s,a){s=Ks(a,s),s=hg(i,s,1),i=Ar(i,s,1),s=bn(),i!==null&&(In(i,1,s),kn(i,s))}function jt(i,s,a){if(i.tag===3)$g(i,i,a);else for(;s!==null;){if(s.tag===3){$g(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Rr===null||!Rr.has(f))){i=Ks(a,i),i=pg(s,i,1),s=Ar(s,i,1),i=bn(),s!==null&&(In(s,1,i),kn(s,i));break}}s=s.return}}function lM(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=bn(),i.pingedLanes|=i.suspendedLanes&a,an===i&&(fn&a)===a&&(nn===4||nn===3&&(fn&130023424)===fn&&500>Ee()-Pf?os(i,0):bf|=a),kn(i,s)}function Kg(i,s){s===0&&((i.mode&1)===0?s=1:(s=hi,hi<<=1,(hi&130023424)===0&&(hi=4194304)));var a=bn();i=Wi(i,s),i!==null&&(In(i,s,a),kn(i,a))}function uM(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Kg(i,a)}function cM(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Kg(i,a)}var Zg;Zg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Un.current)Fn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Fn=!1,ZS(i,s,a);Fn=(i.flags&131072)!==0}else Fn=!1,Vt&&(s.flags&1048576)!==0&&Pm(s,El,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;kl(i,s),i=s.pendingProps;var p=Hs(s,mn.current);qs(s,a),p=af(null,s,f,i,p,a);var _=lf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Nn(f)?(_=!0,xl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Jc(s),p.updater=Fl,s.stateNode=p,p._reactInternals=s,pf(s,f,i,a),s=_f(null,s,f,!0,_,a)):(s.tag=0,Vt&&_&&Gc(s),Rn(null,s,p,a),s=s.child),s;case 16:f=s.elementType;e:{switch(kl(i,s),i=s.pendingProps,p=f._init,f=p(f._payload),s.type=f,p=s.tag=dM(f),i=gi(f,i),p){case 0:s=vf(null,s,f,i,a);break e;case 1:s=Eg(null,s,f,i,a);break e;case 11:s=_g(null,s,f,i,a);break e;case 14:s=yg(null,s,f,gi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:gi(f,p),vf(i,s,f,p,a);case 1:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:gi(f,p),Eg(i,s,f,p,a);case 3:e:{if(Tg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,p=_.element,Bm(i,s),bl(s,f,null,a);var T=s.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Ks(Error(t(423)),s),s=wg(i,s,f,a,p);break e}else if(f!==p){p=Ks(Error(t(424)),s),s=wg(i,s,f,a,p);break e}else for(Xn=Sr(s.stateNode.containerInfo.firstChild),jn=s,Vt=!0,mi=null,a=Om(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(js(),f===p){s=Xi(i,s,a);break e}Rn(i,s,f,a)}s=s.child}return s;case 5:return Hm(s),i===null&&Xc(s),f=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,T=p.children,Oc(f,p)?T=null:_!==null&&Oc(f,_)&&(s.flags|=32),Mg(i,s),Rn(i,s,T,a),s.child;case 6:return i===null&&Xc(s),null;case 13:return Ag(i,s,a);case 4:return ef(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Xs(s,null,f,a):Rn(i,s,f,a),s.child;case 11:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:gi(f,p),_g(i,s,f,p,a);case 7:return Rn(i,s,s.pendingProps,a),s.child;case 8:return Rn(i,s,s.pendingProps.children,a),s.child;case 12:return Rn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,p=s.pendingProps,_=s.memoizedProps,T=p.value,Ft(Al,f._currentValue),f._currentValue=T,_!==null)if(pi(_.value,T)){if(_.children===p.children&&!Un.current){s=Xi(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var I=_.dependencies;if(I!==null){T=_.child;for(var z=I.firstContext;z!==null;){if(z.context===f){if(_.tag===1){z=ji(-1,a&-a),z.tag=2;var J=_.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),J.pending=z}}_.lanes|=a,z=_.alternate,z!==null&&(z.lanes|=a),Zc(_.return,a,s),I.lanes|=a;break}z=z.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),Zc(T,a,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Rn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,f=s.pendingProps.children,qs(s,a),p=ni(p),f=f(p),s.flags|=1,Rn(i,s,f,a),s.child;case 14:return f=s.type,p=gi(f,s.pendingProps),p=gi(f.type,p),yg(i,s,f,p,a);case 15:return xg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:gi(f,p),kl(i,s),s.tag=1,Nn(f)?(i=!0,xl(s)):i=!1,qs(s,a),fg(s,f,p),pf(s,f,p,a),_f(null,s,f,!0,i,a);case 19:return Rg(i,s,a);case 22:return Sg(i,s,a)}throw Error(t(156,s.tag))};function Qg(i,s){return ee(i,s)}function fM(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(i,s,a,f){return new fM(i,s,a,f)}function kf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function dM(i){if(typeof i=="function")return kf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ce)return 11;if(i===fe)return 14}return 2}function Lr(i,s){var a=i.alternate;return a===null?(a=si(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function $l(i,s,a,f,p,_){var T=2;if(f=i,typeof i=="function")kf(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case U:return ls(a.children,p,_,s);case k:T=8,p|=8;break;case D:return i=si(12,a,s,p|2),i.elementType=D,i.lanes=_,i;case j:return i=si(13,a,s,p),i.elementType=j,i.lanes=_,i;case se:return i=si(19,a,s,p),i.elementType=se,i.lanes=_,i;case ie:return Kl(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:T=10;break e;case H:T=9;break e;case ce:T=11;break e;case fe:T=14;break e;case le:T=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=si(T,a,s,p),s.elementType=i,s.type=f,s.lanes=_,s}function ls(i,s,a,f){return i=si(7,i,f,s),i.lanes=a,i}function Kl(i,s,a,f){return i=si(22,i,f,s),i.elementType=ie,i.lanes=a,i.stateNode={isHidden:!1},i}function Bf(i,s,a){return i=si(6,i,null,s),i.lanes=a,i}function zf(i,s,a){return s=si(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function hM(i,s,a,f,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jn(0),this.expirationTimes=Jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jn(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Vf(i,s,a,f,p,_,T,I,z){return i=new hM(i,s,a,I,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=si(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(_),i}function pM(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Jg(i){if(!i)return Er;i=i._reactInternals;e:{if(Ci(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Nn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Nn(a))return Cm(i,a,s)}return s}function e0(i,s,a,f,p,_,T,I,z){return i=Vf(a,f,!0,i,p,_,T,I,z),i.context=Jg(null),a=i.current,f=bn(),p=Pr(a),_=ji(f,p),_.callback=s??null,Ar(a,_,p),i.current.lanes=p,In(i,p,f),kn(i,f),i}function Zl(i,s,a,f){var p=s.current,_=bn(),T=Pr(p);return a=Jg(a),s.context===null?s.context=a:s.pendingContext=a,s=ji(_,T),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Ar(p,s,T),i!==null&&(yi(i,p,T,_),Rl(i,p,T)),T}function Ql(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function t0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Hf(i,s){t0(i,s),(i=i.alternate)&&t0(i,s)}function mM(){return null}var n0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Gf(i){this._internalRoot=i}Jl.prototype.render=Gf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Zl(i,s,null,null)},Jl.prototype.unmount=Gf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ss(function(){Zl(null,i,null,null)}),s[zi]=null}};function Jl(i){this._internalRoot=i}Jl.prototype.unstable_scheduleHydration=function(i){if(i){var s=Bp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<_r.length&&s!==0&&s<_r[a].priority;a++);_r.splice(a,0,i),a===0&&Hp(i)}};function Wf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function eu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function i0(){}function gM(i,s,a,f,p){if(p){if(typeof f=="function"){var _=f;f=function(){var J=Ql(T);_.call(J)}}var T=e0(s,f,i,0,null,!1,!1,"",i0);return i._reactRootContainer=T,i[zi]=T.current,ea(i.nodeType===8?i.parentNode:i),ss(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof f=="function"){var I=f;f=function(){var J=Ql(z);I.call(J)}}var z=Vf(i,0,!1,null,null,!1,!1,"",i0);return i._reactRootContainer=z,i[zi]=z.current,ea(i.nodeType===8?i.parentNode:i),ss(function(){Zl(s,z,a,f)}),z}function tu(i,s,a,f,p){var _=a._reactRootContainer;if(_){var T=_;if(typeof p=="function"){var I=p;p=function(){var z=Ql(T);I.call(z)}}Zl(s,T,i,p)}else T=gM(a,s,i,p,f);return Ql(T)}Op=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=en(s.pendingLanes);a!==0&&(hc(s,a|1),kn(s,Ee()),(St&6)===0&&(Js=Ee()+500,Tr()))}break;case 13:ss(function(){var f=Wi(i,1);if(f!==null){var p=bn();yi(f,i,1,p)}}),Hf(i,1)}},pc=function(i){if(i.tag===13){var s=Wi(i,134217728);if(s!==null){var a=bn();yi(s,i,134217728,a)}Hf(i,134217728)}},kp=function(i){if(i.tag===13){var s=Pr(i),a=Wi(i,s);if(a!==null){var f=bn();yi(a,i,s,f)}Hf(i,s)}},Bp=function(){return Pt},zp=function(i,s){var a=Pt;try{return Pt=i,s()}finally{Pt=a}},be=function(i,s,a){switch(s){case"input":if(dt(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var p=_l(f);if(!p)throw Error(t(90));gt(f),dt(f,p)}}}break;case"textarea":me(i,a);break;case"select":s=a.value,s!=null&&L(i,!!a.multiple,s,!1)}},Ot=Nf,Jt=ss;var vM={usingClientEntryPoint:!1,Events:[ia,zs,_l,De,at,Nf]},va={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_M={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=A(i),i===null?null:i.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||mM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{At=nu.inject(_M),vt=nu}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vM,Bn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(s))throw Error(t(200));return pM(i,s,null,a)},Bn.createRoot=function(i,s){if(!Wf(i))throw Error(t(299));var a=!1,f="",p=n0;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Vf(i,1,!1,null,null,a,!1,f,p),i[zi]=s.current,ea(i.nodeType===8?i.parentNode:i),new Gf(s)},Bn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=A(s),i=i===null?null:i.stateNode,i},Bn.flushSync=function(i){return ss(i)},Bn.hydrate=function(i,s,a){if(!eu(s))throw Error(t(200));return tu(null,i,s,!0,a)},Bn.hydrateRoot=function(i,s,a){if(!Wf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,p=!1,_="",T=n0;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),s=e0(s,null,i,1,a??null,p,!1,_,T),i[zi]=s.current,ea(i),f)for(i=0;i<f.length;i++)a=f[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new Jl(s)},Bn.render=function(i,s,a){if(!eu(s))throw Error(t(200));return tu(null,i,s,!1,a)},Bn.unmountComponentAtNode=function(i){if(!eu(i))throw Error(t(40));return i._reactRootContainer?(ss(function(){tu(null,null,i,!1,function(){i._reactRootContainer=null,i[zi]=null})}),!0):!1},Bn.unstable_batchedUpdates=Nf,Bn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!eu(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return tu(i,s,a,!1,f)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var f0;function CM(){if(f0)return Yf.exports;f0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Yf.exports=AM(),Yf.exports}var d0;function RM(){if(d0)return iu;d0=1;var n=CM();return iu.createRoot=n.createRoot,iu.hydrateRoot=n.hydrateRoot,iu}var bM=RM();const PM=L_(bM),Yh=Se.createContext({});function qh(n){const e=Se.useRef(null);return e.current===null&&(e.current=n()),e.current}const tc=Se.createContext(null),$h=Se.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class DM extends Se.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function LM({children:n,isPresent:e}){const t=Se.useId(),r=Se.useRef(null),o=Se.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=Se.useContext($h);return Se.useInsertionEffect(()=>{const{width:u,height:c,top:d,left:h}=o.current;if(e||!r.current||!u||!c)return;r.current.dataset.motionPopId=t;const m=document.createElement("style");return l&&(m.nonce=l),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[e]),F.jsx(DM,{isPresent:e,childRef:r,sizeRef:o,children:Se.cloneElement(n,{ref:r})})}const IM=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u})=>{const c=qh(UM),d=Se.useId(),h=Se.useCallback(g=>{c.set(g,!0);for(const v of c.values())if(!v)return;r&&r()},[c,r]),m=Se.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:g=>(c.set(g,!1),()=>c.delete(g))}),l?[Math.random(),h]:[t,h]);return Se.useMemo(()=>{c.forEach((g,v)=>c.set(v,!1))},[t]),Se.useEffect(()=>{!t&&!c.size&&r&&r()},[t]),u==="popLayout"&&(n=F.jsx(LM,{isPresent:t,children:n})),F.jsx(tc.Provider,{value:m,children:n})};function UM(){return new Map}function I_(n=!0){const e=Se.useContext(tc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Se.useId();Se.useEffect(()=>{n&&o(l)},[n]);const u=Se.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const ru=n=>n.key||"";function h0(n){const e=[];return Se.Children.forEach(n,t=>{Se.isValidElement(t)&&e.push(t)}),e}const Kh=typeof window<"u",U_=Kh?Se.useLayoutEffect:Se.useEffect,N_=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1})=>{const[c,d]=I_(u),h=Se.useMemo(()=>h0(n),[n]),m=u&&!c?[]:h.map(ru),g=Se.useRef(!0),v=Se.useRef(h),x=qh(()=>new Map),[M,E]=Se.useState(h),[S,y]=Se.useState(h);U_(()=>{g.current=!1,v.current=h;for(let C=0;C<S.length;C++){const V=ru(S[C]);m.includes(V)?x.delete(V):x.get(V)!==!0&&x.set(V,!1)}},[S,m.length,m.join("-")]);const b=[];if(h!==M){let C=[...h];for(let V=0;V<S.length;V++){const N=S[V],U=ru(N);m.includes(U)||(C.splice(V,0,N),b.push(N))}l==="wait"&&b.length&&(C=b),y(h0(C)),E(h);return}const{forceRender:P}=Se.useContext(Yh);return F.jsx(F.Fragment,{children:S.map(C=>{const V=ru(C),N=u&&!c?!1:h===S||m.includes(V),U=()=>{if(x.has(V))x.set(V,!0);else return;let k=!0;x.forEach(D=>{D||(k=!1)}),k&&(P==null||P(),y(v.current),u&&(d==null||d()),r&&r())};return F.jsx(IM,{isPresent:N,initial:!g.current||t?void 0:!1,custom:N?void 0:e,presenceAffectsLayout:o,mode:l,onExitComplete:N?void 0:U,children:C},V)})})},Kn=n=>n;let F_=Kn;function Zh(n){let e;return()=>(e===void 0&&(e=n()),e)}const Ao=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},sr=n=>n*1e3,or=n=>n/1e3,NM={useManualTiming:!1};function FM(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,m=!1,g=!1)=>{const x=g&&r?e:t;return m&&l.add(h),x.has(h)||x.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(c),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const su=["read","resolveKeyframes","update","preRender","render","postRender"],OM=40;function O_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=su.reduce((y,b)=>(y[b]=FM(l),y),{}),{read:c,resolveKeyframes:d,update:h,preRender:m,render:g,postRender:v}=u,x=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,OM),1),o.timestamp=y,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),m.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(x))},M=()=>{t=!0,r=!0,o.isProcessing||n(x)};return{schedule:su.reduce((y,b)=>{const P=u[b];return y[b]=(C,V=!1,N=!1)=>(t||M(),P.schedule(C,V,N)),y},{}),cancel:y=>{for(let b=0;b<su.length;b++)u[su[b]].cancel(y)},state:o,steps:u}}const{schedule:zt,cancel:jr,state:dn,steps:Kf}=O_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Kn,!0),k_=Se.createContext({strict:!1}),p0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Co={};for(const n in p0)Co[n]={isEnabled:e=>p0[n].some(t=>!!e[t])};function kM(n){for(const e in n)Co[e]={...Co[e],...n[e]}}const BM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Wu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||BM.has(n)}let B_=n=>!Wu(n);function zM(n){n&&(B_=e=>e.startsWith("on")?!Wu(e):n(e))}try{zM(require("@emotion/is-prop-valid").default)}catch{}function VM(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(B_(o)||t===!0&&Wu(o)||!e&&!Wu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function HM(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const nc=Se.createContext({});function Fa(n){return typeof n=="string"||Array.isArray(n)}function ic(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Qh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Jh=["initial",...Qh];function rc(n){return ic(n.animate)||Jh.some(e=>Fa(n[e]))}function z_(n){return!!(rc(n)||n.variants)}function GM(n,e){if(rc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Fa(t)?t:void 0,animate:Fa(r)?r:void 0}}return n.inherit!==!1?e:{}}function WM(n){const{initial:e,animate:t}=GM(n,Se.useContext(nc));return Se.useMemo(()=>({initial:e,animate:t}),[m0(e),m0(t)])}function m0(n){return Array.isArray(n)?n.join(" "):n}const jM=Symbol.for("motionComponentSymbol");function go(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function XM(n,e,t){return Se.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):go(t)&&(t.current=r))},[e])}const ep=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),YM="framerAppearId",V_="data-"+ep(YM),{schedule:tp}=O_(queueMicrotask,!1),H_=Se.createContext({});function qM(n,e,t,r,o){var l,u;const{visualElement:c}=Se.useContext(nc),d=Se.useContext(k_),h=Se.useContext(tc),m=Se.useContext($h).reducedMotion,g=Se.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const v=g.current,x=Se.useContext(H_);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&$M(g.current,t,o,x);const M=Se.useRef(!1);Se.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const E=t[V_],S=Se.useRef(!!E&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,E))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,E)));return U_(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),tp.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),Se.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,E)}),S.current=!1))}),v}function $M(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:G_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&go(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function G_(n){if(n)return n.options.allowProjection!==!1?n.projection:G_(n.parent)}function KM({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&kM(n);function c(h,m){let g;const v={...Se.useContext($h),...h,layoutId:ZM(h)},{isStatic:x}=v,M=WM(h),E=r(h,x);if(!x&&Kh){QM();const S=JM(v);g=S.MeasureLayout,M.visualElement=qM(o,E,v,e,S.ProjectionNode)}return F.jsxs(nc.Provider,{value:M,children:[g&&M.visualElement?F.jsx(g,{visualElement:M.visualElement,...v}):null,t(o,h,XM(E,M.visualElement,m),E,x,M.visualElement)]})}c.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=Se.forwardRef(c);return d[jM]=o,d}function ZM({layoutId:n}){const e=Se.useContext(Yh).id;return e&&n!==void 0?e+"-"+n:n}function QM(n,e){Se.useContext(k_).strict}function JM(n){const{drag:e,layout:t}=Co;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const eE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function np(n){return typeof n!="string"||n.includes("-")?!1:!!(eE.indexOf(n)>-1||/[A-Z]/u.test(n))}function g0(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function ip(n,e,t,r){if(typeof e=="function"){const[o,l]=g0(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=g0(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Vd=n=>Array.isArray(n),tE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),nE=n=>Vd(n)?n[n.length-1]||0:n,En=n=>!!(n&&n.getVelocity);function Nu(n){const e=En(n)?n.get():n;return tE(e)?e.toValue():e}function iE({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:rE(r,o,l,n),renderState:e()};return t&&(u.onMount=c=>t({props:r,current:c,...u}),u.onUpdate=c=>t(c)),u}const W_=n=>(e,t)=>{const r=Se.useContext(nc),o=Se.useContext(tc),l=()=>iE(n,e,r,o);return t?l():qh(l)};function rE(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Nu(l[v]);let{initial:u,animate:c}=n;const d=rc(n),h=z_(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const g=m?c:u;if(g&&typeof g!="boolean"&&!ic(g)){const v=Array.isArray(g)?g:[g];for(let x=0;x<v.length;x++){const M=ip(n,v[x]);if(M){const{transitionEnd:E,transition:S,...y}=M;for(const b in y){let P=y[b];if(Array.isArray(P)){const C=m?P.length-1:0;P=P[C]}P!==null&&(o[b]=P)}for(const b in E)o[b]=E[b]}}}return o}const No=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ps=new Set(No),j_=n=>e=>typeof e=="string"&&e.startsWith(n),X_=j_("--"),sE=j_("var(--"),rp=n=>sE(n)?oE.test(n.split("/*")[0].trim()):!1,oE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Y_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,ur=(n,e,t)=>t>e?e:t<n?n:t,Fo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Oa={...Fo,transform:n=>ur(0,1,n)},ou={...Fo,default:1},Ha=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),zr=Ha("deg"),Ni=Ha("%"),tt=Ha("px"),aE=Ha("vh"),lE=Ha("vw"),v0={...Ni,parse:n=>Ni.parse(n)/100,transform:n=>Ni.transform(n*100)},uE={borderWidth:tt,borderTopWidth:tt,borderRightWidth:tt,borderBottomWidth:tt,borderLeftWidth:tt,borderRadius:tt,radius:tt,borderTopLeftRadius:tt,borderTopRightRadius:tt,borderBottomRightRadius:tt,borderBottomLeftRadius:tt,width:tt,maxWidth:tt,height:tt,maxHeight:tt,top:tt,right:tt,bottom:tt,left:tt,padding:tt,paddingTop:tt,paddingRight:tt,paddingBottom:tt,paddingLeft:tt,margin:tt,marginTop:tt,marginRight:tt,marginBottom:tt,marginLeft:tt,backgroundPositionX:tt,backgroundPositionY:tt},cE={rotate:zr,rotateX:zr,rotateY:zr,rotateZ:zr,scale:ou,scaleX:ou,scaleY:ou,scaleZ:ou,skew:zr,skewX:zr,skewY:zr,distance:tt,translateX:tt,translateY:tt,translateZ:tt,x:tt,y:tt,z:tt,perspective:tt,transformPerspective:tt,opacity:Oa,originX:v0,originY:v0,originZ:tt},_0={...Fo,transform:Math.round},sp={...uE,...cE,zIndex:_0,size:tt,fillOpacity:Oa,strokeOpacity:Oa,numOctaves:_0},fE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},dE=No.length;function hE(n,e,t){let r="",o=!0;for(let l=0;l<dE;l++){const u=No[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=Y_(c,sp[u]);if(!d){o=!1;const m=fE[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function op(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Ps.has(d)){u=!0;continue}else if(X_(d)){o[d]=h;continue}else{const m=Y_(h,sp[d]);d.startsWith("origin")?(c=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=hE(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const pE={offset:"stroke-dashoffset",array:"stroke-dasharray"},mE={offset:"strokeDashoffset",array:"strokeDasharray"};function gE(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?pE:mE;n[l.offset]=tt.transform(-r);const u=tt.transform(e),c=tt.transform(t);n[l.array]=`${u} ${c}`}function y0(n,e,t){return typeof n=="string"?n:tt.transform(e+t*n)}function vE(n,e,t){const r=y0(e,n.x,n.width),o=y0(t,n.y,n.height);return`${r} ${o}`}function ap(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},m,g){if(op(n,h,g),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:x,dimensions:M}=n;v.transform&&(M&&(x.transform=v.transform),delete v.transform),M&&(o!==void 0||l!==void 0||x.transform)&&(x.transformOrigin=vE(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),u!==void 0&&gE(v,u,c,d,!1)}const lp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),q_=()=>({...lp(),attrs:{}}),up=n=>typeof n=="string"&&n.toLowerCase()==="svg";function $_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const K_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Z_(n,e,t,r){$_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(K_.has(o)?o:ep(o),e.attrs[o])}const ju={};function _E(n){Object.assign(ju,n)}function Q_(n,{layout:e,layoutId:t}){return Ps.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!ju[n]||n==="opacity")}function cp(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(En(o[u])||e.style&&En(e.style[u])||Q_(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function J_(n,e,t){const r=cp(n,e,t);for(const o in n)if(En(n[o])||En(e[o])){const l=No.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function yE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const x0=["x","y","width","height","cx","cy","r"],xE={useVisualState:W_({scrapeMotionValuesFromProps:J_,createRenderState:q_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const c in o)if(Ps.has(c)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let c=0;c<x0.length;c++){const d=x0[c];n[d]!==e[d]&&(u=!0)}u&&zt.read(()=>{yE(t,r),zt.render(()=>{ap(r,o,up(t.tagName),n.transformTemplate),Z_(t,r)})})}})},SE={useVisualState:W_({scrapeMotionValuesFromProps:cp,createRenderState:lp})};function ey(n,e,t){for(const r in e)!En(e[r])&&!Q_(r,t)&&(n[r]=e[r])}function ME({transformTemplate:n},e){return Se.useMemo(()=>{const t=lp();return op(t,e,n),Object.assign({},t.vars,t.style)},[e])}function EE(n,e){const t=n.style||{},r={};return ey(r,t,n),Object.assign(r,ME(n,e)),r}function TE(n,e){const t={},r=EE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function wE(n,e,t,r){const o=Se.useMemo(()=>{const l=q_();return ap(l,e,up(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};ey(l,n.style,n),o.style={...l,...o.style}}return o}function AE(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(np(t)?wE:TE)(r,l,u,t),h=VM(r,typeof t=="string",n),m=t!==Se.Fragment?{...h,...d,ref:o}:{},{children:g}=r,v=Se.useMemo(()=>En(g)?g.get():g,[g]);return Se.createElement(t,{...m,children:v})}}function CE(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...np(r)?xE:SE,preloadedFeatures:n,useRender:AE(o),createVisualElement:e,Component:r};return KM(u)}}function ty(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function sc(n,e,t){const r=n.getProps();return ip(r,e,t!==void 0?t:r.custom,n)}const RE=Zh(()=>window.ScrollTimeline!==void 0);class bE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(RE()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class PE extends bE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function fp(n,e){return n?n[e]||n.default||n:void 0}const Hd=2e4;function ny(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Hd;)e+=t,r=n.next(e);return e>=Hd?1/0:e}function dp(n){return typeof n=="function"}function S0(n,e){n.timeline=e,n.onfinish=null}const hp=n=>Array.isArray(n)&&typeof n[0]=="number",DE={linearEasing:void 0};function LE(n,e){const t=Zh(n);return()=>{var r;return(r=DE[e])!==null&&r!==void 0?r:t()}}const Xu=LE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),iy=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(Ao(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function ry(n){return!!(typeof n=="function"&&Xu()||!n||typeof n=="string"&&(n in Gd||Xu())||hp(n)||Array.isArray(n)&&n.every(ry))}const Aa=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Gd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Aa([0,.65,.55,1]),circOut:Aa([.55,0,1,.45]),backIn:Aa([.31,.01,.66,-.59]),backOut:Aa([.33,1.53,.69,.99])};function sy(n,e){if(n)return typeof n=="function"&&Xu()?iy(n,e):hp(n)?Aa(n):Array.isArray(n)?n.map(t=>sy(t,e)||Gd.easeOut):Gd[n]}const Ei={x:!1,y:!1};function oy(){return Ei.x||Ei.y}function IE(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function ay(n,e){const t=IE(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function M0(n){return e=>{e.pointerType==="touch"||oy()||n(e)}}function UE(n,e,t={}){const[r,o,l]=ay(n,t),u=M0(c=>{const{target:d}=c,h=e(c);if(typeof h!="function"||!d)return;const m=M0(g=>{h(g),d.removeEventListener("pointerleave",m)});d.addEventListener("pointerleave",m,o)});return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const ly=(n,e)=>e?n===e?!0:ly(n,e.parentElement):!1,pp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,NE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function FE(n){return NE.has(n.tagName)||n.tabIndex!==-1}const Ca=new WeakSet;function E0(n){return e=>{e.key==="Enter"&&n(e)}}function Zf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const OE=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=E0(()=>{if(Ca.has(t))return;Zf(t,"down");const o=E0(()=>{Zf(t,"up")}),l=()=>Zf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function T0(n){return pp(n)&&!oy()}function kE(n,e,t={}){const[r,o,l]=ay(n,t),u=c=>{const d=c.currentTarget;if(!T0(c)||Ca.has(d))return;Ca.add(d);const h=e(c),m=(x,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!T0(x)||!Ca.has(d))&&(Ca.delete(d),typeof h=="function"&&h(x,{success:M}))},g=x=>{m(x,t.useGlobalTarget||ly(d,x.target))},v=x=>{m(x,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{!FE(c)&&c.getAttribute("tabindex")===null&&(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",h=>OE(h,o),o)}),l}function BE(n){return n==="x"||n==="y"?Ei[n]?null:(Ei[n]=!0,()=>{Ei[n]=!1}):Ei.x||Ei.y?null:(Ei.x=Ei.y=!0,()=>{Ei.x=Ei.y=!1})}const uy=new Set(["width","height","top","left","right","bottom",...No]);let Fu;function zE(){Fu=void 0}const Fi={now:()=>(Fu===void 0&&Fi.set(dn.isProcessing||NM.useManualTiming?dn.timestamp:performance.now()),Fu),set:n=>{Fu=n,queueMicrotask(zE)}};function mp(n,e){n.indexOf(e)===-1&&n.push(e)}function gp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class vp{constructor(){this.subscriptions=[]}add(e){return mp(this.subscriptions,e),()=>gp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function cy(n,e){return e?n*(1e3/e):0}const w0=30,VE=n=>!isNaN(parseFloat(n));class HE{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Fi.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Fi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=VE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new vp);const r=this.events[e].add(t);return e==="change"?()=>{r(),zt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Fi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>w0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,w0);return cy(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ka(n,e){return new HE(n,e)}function GE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,ka(t))}function WE(n,e){const t=sc(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=nE(l[u]);GE(n,u,c)}}function jE(n){return!!(En(n)&&n.add)}function Wd(n,e){const t=n.getValue("willChange");if(jE(t))return t.add(e)}function fy(n){return n.props[V_]}const dy=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,XE=1e-7,YE=12;function qE(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=dy(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>XE&&++c<YE);return u}function Ga(n,e,t,r){if(n===e&&t===r)return Kn;const o=l=>qE(l,0,1,n,t);return l=>l===0||l===1?l:dy(o(l),e,r)}const hy=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,py=n=>e=>1-n(1-e),my=Ga(.33,1.53,.69,.99),_p=py(my),gy=hy(_p),vy=n=>(n*=2)<1?.5*_p(n):.5*(2-Math.pow(2,-10*(n-1))),yp=n=>1-Math.sin(Math.acos(n)),_y=py(yp),yy=hy(yp),xy=n=>/^0[^.\s]+$/u.test(n);function $E(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||xy(n):!0}const La=n=>Math.round(n*1e5)/1e5,xp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function KE(n){return n==null}const ZE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Sp=(n,e)=>t=>!!(typeof t=="string"&&ZE.test(t)&&t.startsWith(n)||e&&!KE(t)&&Object.prototype.hasOwnProperty.call(t,e)),Sy=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(xp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},QE=n=>ur(0,255,n),Qf={...Fo,transform:n=>Math.round(QE(n))},Es={test:Sp("rgb","red"),parse:Sy("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Qf.transform(n)+", "+Qf.transform(e)+", "+Qf.transform(t)+", "+La(Oa.transform(r))+")"};function JE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const jd={test:Sp("#"),parse:JE,transform:Es.transform},vo={test:Sp("hsl","hue"),parse:Sy("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Ni.transform(La(e))+", "+Ni.transform(La(t))+", "+La(Oa.transform(r))+")"},Sn={test:n=>Es.test(n)||jd.test(n)||vo.test(n),parse:n=>Es.test(n)?Es.parse(n):vo.test(n)?vo.parse(n):jd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Es.transform(n):vo.transform(n)},eT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function tT(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(xp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(eT))===null||t===void 0?void 0:t.length)||0)>0}const My="number",Ey="color",nT="var",iT="var(",A0="${}",rT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ba(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(rT,d=>(Sn.test(d)?(r.color.push(l),o.push(Ey),t.push(Sn.parse(d))):d.startsWith(iT)?(r.var.push(l),o.push(nT),t.push(d)):(r.number.push(l),o.push(My),t.push(parseFloat(d))),++l,A0)).split(A0);return{values:t,split:c,indexes:r,types:o}}function Ty(n){return Ba(n).values}function wy(n){const{split:e,types:t}=Ba(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===My?l+=La(o[u]):c===Ey?l+=Sn.transform(o[u]):l+=o[u]}return l}}const sT=n=>typeof n=="number"?0:n;function oT(n){const e=Ty(n);return wy(n)(e.map(sT))}const Xr={test:tT,parse:Ty,createTransformer:wy,getAnimatableNone:oT},aT=new Set(["brightness","contrast","saturate","opacity"]);function lT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(xp)||[];if(!r)return n;const o=t.replace(r,"");let l=aT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const uT=/\b([a-z-]*)\(.*?\)/gu,Xd={...Xr,getAnimatableNone:n=>{const e=n.match(uT);return e?e.map(lT).join(" "):n}},cT={...sp,color:Sn,backgroundColor:Sn,outlineColor:Sn,fill:Sn,stroke:Sn,borderColor:Sn,borderTopColor:Sn,borderRightColor:Sn,borderBottomColor:Sn,borderLeftColor:Sn,filter:Xd,WebkitFilter:Xd},Mp=n=>cT[n];function Ay(n,e){let t=Mp(n);return t!==Xd&&(t=Xr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const fT=new Set(["auto","none","0"]);function dT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!fT.has(l)&&Ba(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=Ay(t,o)}const C0=n=>n===Fo||n===tt,R0=(n,e)=>parseFloat(n.split(", ")[e]),b0=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return R0(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?R0(l[1],n):0}},hT=new Set(["x","y","z"]),pT=No.filter(n=>!hT.has(n));function mT(n){const e=[];return pT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Ro={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:b0(4,13),y:b0(5,14)};Ro.translateX=Ro.x;Ro.translateY=Ro.y;const As=new Set;let Yd=!1,qd=!1;function Cy(){if(qd){const n=Array.from(As).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=mT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var c;(c=r.getValue(l))===null||c===void 0||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}qd=!1,Yd=!1,As.forEach(n=>n.complete()),As.clear()}function Ry(){As.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(qd=!0)})}function gT(){Ry(),Cy()}class Ep{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(As.add(this),Yd||(Yd=!0,zt.read(Ry),zt.resolveKeyframes(Cy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),As.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,As.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const by=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),vT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _T(n){const e=vT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Py(n,e,t=1){const[r,o]=_T(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return by(u)?parseFloat(u):u}return rp(o)?Py(o,e,t+1):o}const Dy=n=>e=>e.test(n),yT={test:n=>n==="auto",parse:n=>n},Ly=[Fo,tt,Ni,zr,lE,aE,yT],P0=n=>Ly.find(Dy(n));class Iy extends Ep{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),rp(h))){const m=Py(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!uy.has(r)||e.length!==2)return;const[o,l]=e,u=P0(o),c=P0(l);if(u!==c)if(C0(u)&&C0(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)$E(e[o])&&r.push(o);r.length&&dT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ro[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=Ro[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const D0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Xr.test(n)||n==="0")&&!n.startsWith("url("));function xT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function ST(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=D0(o,e),c=D0(l,e);return!u||!c?!1:xT(n)||(t==="spring"||dp(t))&&r}const MT=n=>n!==null;function oc(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(MT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const ET=40;class Uy{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Fi.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ET?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&gT(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Fi.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:c,onUpdate:d,isGenerator:h}=this.options;if(!h&&!ST(e,r,o,l))if(u)this.options.duration=0;else{d&&d(oc(e,this.options,t)),c&&c(),this.resolveFinishedPromise();return}const m=this.initPlayback(e,t);m!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...m},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Wt=(n,e,t)=>n+(e-n)*t;function Jf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function TT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=Jf(d,c,n+1/3),l=Jf(d,c,n),u=Jf(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Yu(n,e){return t=>t>0?e:n}const ed=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},wT=[jd,Es,vo],AT=n=>wT.find(e=>e.test(n));function L0(n){const e=AT(n);if(!e)return!1;let t=e.parse(n);return e===vo&&(t=TT(t)),t}const I0=(n,e)=>{const t=L0(n),r=L0(e);if(!t||!r)return Yu(n,e);const o={...t};return l=>(o.red=ed(t.red,r.red,l),o.green=ed(t.green,r.green,l),o.blue=ed(t.blue,r.blue,l),o.alpha=Wt(t.alpha,r.alpha,l),Es.transform(o))},CT=(n,e)=>t=>e(n(t)),Wa=(...n)=>n.reduce(CT),$d=new Set(["none","hidden"]);function RT(n,e){return $d.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function bT(n,e){return t=>Wt(n,e,t)}function Tp(n){return typeof n=="number"?bT:typeof n=="string"?rp(n)?Yu:Sn.test(n)?I0:LT:Array.isArray(n)?Ny:typeof n=="object"?Sn.test(n)?I0:PT:Yu}function Ny(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>Tp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function PT(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Tp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function DT(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const LT=(n,e)=>{const t=Xr.createTransformer(e),r=Ba(n),o=Ba(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?$d.has(n)&&!o.values.length||$d.has(e)&&!r.values.length?RT(n,e):Wa(Ny(DT(r,o),o.values),t):Yu(n,e)};function Fy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Wt(n,e,t):Tp(n)(n,e)}const IT=5;function Oy(n,e,t){const r=Math.max(e-IT,0);return cy(t-n(r),e-r)}const Xt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},td=.001;function UT({duration:n=Xt.duration,bounce:e=Xt.bounce,velocity:t=Xt.velocity,mass:r=Xt.mass}){let o,l,u=1-e;u=ur(Xt.minDamping,Xt.maxDamping,u),n=ur(Xt.minDuration,Xt.maxDuration,or(n)),u<1?(o=h=>{const m=h*u,g=m*n,v=m-t,x=Kd(h,u),M=Math.exp(-g);return td-v/x*M},l=h=>{const g=h*u*n,v=g*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),E=Kd(Math.pow(h,2),u);return(-o(h)+td>0?-1:1)*((v-x)*M)/E}):(o=h=>{const m=Math.exp(-h*n),g=(h-t)*n+1;return-td+m*g},l=h=>{const m=Math.exp(-h*n),g=(t-h)*(n*n);return m*g});const c=5/n,d=FT(o,l,c);if(n=sr(n),isNaN(d))return{stiffness:Xt.stiffness,damping:Xt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const NT=12;function FT(n,e,t){let r=t;for(let o=1;o<NT;o++)r=r-n(r)/e(r);return r}function Kd(n,e){return n*Math.sqrt(1-e*e)}const OT=["duration","bounce"],kT=["stiffness","damping","mass"];function U0(n,e){return e.some(t=>n[t]!==void 0)}function BT(n){let e={velocity:Xt.velocity,stiffness:Xt.stiffness,damping:Xt.damping,mass:Xt.mass,isResolvedFromDuration:!1,...n};if(!U0(n,kT)&&U0(n,OT))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*ur(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Xt.mass,stiffness:o,damping:l}}else{const t=UT(n);e={...e,...t,mass:Xt.mass},e.isResolvedFromDuration=!0}return e}function ky(n=Xt.visualDuration,e=Xt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:g,velocity:v,isResolvedFromDuration:x}=BT({...t,velocity:-or(t.velocity||0)}),M=v||0,E=h/(2*Math.sqrt(d*m)),S=u-l,y=or(Math.sqrt(d/m)),b=Math.abs(S)<5;r||(r=b?Xt.restSpeed.granular:Xt.restSpeed.default),o||(o=b?Xt.restDelta.granular:Xt.restDelta.default);let P;if(E<1){const V=Kd(y,E);P=N=>{const U=Math.exp(-E*y*N);return u-U*((M+E*y*S)/V*Math.sin(V*N)+S*Math.cos(V*N))}}else if(E===1)P=V=>u-Math.exp(-y*V)*(S+(M+y*S)*V);else{const V=y*Math.sqrt(E*E-1);P=N=>{const U=Math.exp(-E*y*N),k=Math.min(V*N,300);return u-U*((M+E*y*S)*Math.sinh(k)+V*S*Math.cosh(k))/V}}const C={calculatedDuration:x&&g||null,next:V=>{const N=P(V);if(x)c.done=V>=g;else{let U=0;E<1&&(U=V===0?sr(M):Oy(P,V,N));const k=Math.abs(U)<=r,D=Math.abs(u-N)<=o;c.done=k&&D}return c.value=c.done?u:N,c},toString:()=>{const V=Math.min(ny(C),Hd),N=iy(U=>C.next(V*U).value,V,30);return V+"ms "+N}};return C}function N0({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:m}){const g=n[0],v={done:!1,value:g},x=k=>c!==void 0&&k<c||d!==void 0&&k>d,M=k=>c===void 0?d:d===void 0||Math.abs(c-k)<Math.abs(d-k)?c:d;let E=t*e;const S=g+E,y=u===void 0?S:u(S);y!==S&&(E=y-g);const b=k=>-E*Math.exp(-k/r),P=k=>y+b(k),C=k=>{const D=b(k),R=P(k);v.done=Math.abs(D)<=h,v.value=v.done?y:R};let V,N;const U=k=>{x(v.value)&&(V=k,N=ky({keyframes:[v.value,M(v.value)],velocity:Oy(P,k,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return U(0),{calculatedDuration:null,next:k=>{let D=!1;return!N&&V===void 0&&(D=!0,C(k),U(k)),V!==void 0&&k>=V?N.next(k-V):(!D&&C(k),v)}}}const zT=Ga(.42,0,1,1),VT=Ga(0,0,.58,1),By=Ga(.42,0,.58,1),HT=n=>Array.isArray(n)&&typeof n[0]!="number",GT={linear:Kn,easeIn:zT,easeInOut:By,easeOut:VT,circIn:yp,circInOut:yy,circOut:_y,backIn:_p,backInOut:gy,backOut:my,anticipate:vy},F0=n=>{if(hp(n)){F_(n.length===4);const[e,t,r,o]=n;return Ga(e,t,r,o)}else if(typeof n=="string")return GT[n];return n};function WT(n,e,t){const r=[],o=t||Fy,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Kn:e;c=Wa(d,c)}r.push(c)}return r}function jT(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(F_(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=WT(e,r,o),d=c.length,h=m=>{if(u&&m<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(m<n[g+1]);g++);const v=Ao(n[g],n[g+1],m);return c[g](v)};return t?m=>h(ur(n[0],n[l-1],m)):h}function XT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Ao(0,e,r);n.push(Wt(t,1,o))}}function YT(n){const e=[0];return XT(e,n.length-1),e}function qT(n,e){return n.map(t=>t*e)}function $T(n,e){return n.map(()=>e||By).splice(0,n.length-1)}function qu({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=HT(r)?r.map(F0):F0(r),l={done:!1,value:e[0]},u=qT(t&&t.length===e.length?t:YT(e),n),c=jT(u,e,{ease:Array.isArray(o)?o:$T(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const KT=n=>{const e=({timestamp:t})=>n(t);return{start:()=>zt.update(e,!0),stop:()=>jr(e),now:()=>dn.isProcessing?dn.timestamp:Fi.now()}},ZT={decay:N0,inertia:N0,tween:qu,keyframes:qu,spring:ky},QT=n=>n/100;class wp extends Uy{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||Ep,c=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,c,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,c=dp(t)?t:ZT[t]||qu;let d,h;c!==qu&&typeof e[0]!="number"&&(d=Wa(QT,Fy(e[0],e[1])),e=[0,100]);const m=c({...this.options,keyframes:e});l==="mirror"&&(h=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=ny(m));const{calculatedDuration:g}=m,v=g+o,x=v*(r+1)-o;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:v,totalDuration:x}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:h,totalDuration:m,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:v,repeat:x,repeatType:M,repeatDelay:E,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-m/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-v*(this.speed>=0?1:-1),b=this.speed>=0?y<0:y>m;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let P=this.currentTime,C=l;if(x){const k=Math.min(this.currentTime,m)/g;let D=Math.floor(k),R=k%1;!R&&k>=1&&(R=1),R===1&&D--,D=Math.min(D,x+1),!!(D%2)&&(M==="reverse"?(R=1-R,E&&(R-=E/g)):M==="mirror"&&(C=u)),P=ur(0,1,R)*g}const V=b?{done:!1,value:d[0]}:C.next(P);c&&(V.value=c(V.value));let{done:N}=V;!b&&h!==null&&(N=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return U&&o!==void 0&&(V.value=oc(d,this.options,o)),S&&S(V.value),U&&this.finish(),V}get duration(){const{resolved:e}=this;return e?or(e.calculatedDuration):0}get time(){return or(this.currentTime)}set time(e){e=sr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=or(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=KT,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const JT=new Set(["opacity","clipPath","filter","transform"]);function e1(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=sy(c,o);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:r,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const t1=Zh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),$u=10,n1=2e4;function i1(n){return dp(n.type)||n.type==="spring"||!ry(n.ease)}function r1(n,e){const t=new wp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<n1;)r=t.sample(l),o.push(r.value),l+=$u;return{times:void 0,keyframes:o,duration:l-$u,ease:"linear"}}const zy={anticipate:vy,backInOut:gy,circInOut:yy};function s1(n){return n in zy}class O0 extends Uy{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new Iy(l,(u,c)=>this.onKeyframesResolved(u,c),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:c,name:d,startTime:h}=this.options;if(!c.owner||!c.owner.current)return!1;if(typeof l=="string"&&Xu()&&s1(l)&&(l=zy[l]),i1(this.options)){const{onComplete:g,onUpdate:v,motionValue:x,element:M,...E}=this.options,S=r1(e,E);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,l=S.ease,u="keyframes"}const m=e1(c.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(S0(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:g}=this.options;c.set(oc(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return or(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return or(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=sr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Kn;const{animation:r}=t;S0(r,e)}return Kn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:g,element:v,...x}=this.options,M=new wp({...x,keyframes:r,duration:o,type:l,ease:u,times:c,isGenerator:!0}),E=sr(this.time);h.setWithVelocity(M.sample(E-$u).value,M.sample(E).value,$u)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:c}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return t1()&&r&&JT.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&c!=="inertia"}}const o1={type:"spring",stiffness:500,damping:25,restSpeed:10},a1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),l1={type:"keyframes",duration:.8},u1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},c1=(n,{keyframes:e})=>e.length>2?l1:Ps.has(n)?n.startsWith("scale")?a1(e[1]):o1:u1;function f1({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const Ap=(n,e,t,r={},o,l)=>u=>{const c=fp(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-sr(d);let m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};f1(c)||(m={...m,...c1(n,m)}),m.duration&&(m.duration=sr(m.duration)),m.repeatDelay&&(m.repeatDelay=sr(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let g=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const v=oc(m.keyframes,c);if(v!==void 0)return zt.update(()=>{m.onUpdate(v),m.onComplete()}),new PE([])}return!l&&O0.supports(m)?new O0(m):new wp(m)};function d1({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Vy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;r&&(u=r);const h=[],m=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const v=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),x=d[g];if(x===void 0||m&&d1(m,g))continue;const M={delay:t,...fp(u||{},g)};let E=!1;if(window.MotionHandoffAnimation){const y=fy(n);if(y){const b=window.MotionHandoffAnimation(y,g,zt);b!==null&&(M.startTime=b,E=!0)}}Wd(n,g),v.start(Ap(g,v,x,n.shouldReduceMotion&&uy.has(g)?{type:!1}:M,n,E));const S=v.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{zt.update(()=>{c&&WE(n,c)})}),h}function Zd(n,e,t={}){var r;const o=sc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(Vy(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:v}=l;return h1(n,e,m+h,g,v,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,m]=d==="beforeChildren"?[u,c]:[c,u];return h().then(()=>m())}else return Promise.all([u(),c(t.delay)])}function h1(n,e,t=0,r=0,o=1,l){const u=[],c=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(n.variantChildren).sort(p1).forEach((h,m)=>{h.notify("AnimationStart",e),u.push(Zd(h,e,{...l,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function p1(n,e){return n.sortNodePosition(e)}function m1(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Zd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Zd(n,e,t);else{const o=typeof e=="function"?sc(n,e,t.custom):e;r=Promise.all(Vy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const g1=Jh.length;function Hy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Hy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<g1;t++){const r=Jh[t],o=n.props[r];(Fa(o)||o===!1)&&(e[r]=o)}return e}const v1=[...Qh].reverse(),_1=Qh.length;function y1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>m1(n,t,r)))}function x1(n){let e=y1(n),t=k0(),r=!0;const o=d=>(h,m)=>{var g;const v=sc(n,m,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:x,transitionEnd:M,...E}=v;h={...h,...E,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=Hy(n.parent)||{},g=[],v=new Set;let x={},M=1/0;for(let S=0;S<_1;S++){const y=v1[S],b=t[y],P=h[y]!==void 0?h[y]:m[y],C=Fa(P),V=y===d?b.isActive:null;V===!1&&(M=S);let N=P===m[y]&&P!==h[y]&&C;if(N&&r&&n.manuallyAnimateOnMount&&(N=!1),b.protectedKeys={...x},!b.isActive&&V===null||!P&&!b.prevProp||ic(P)||typeof P=="boolean")continue;const U=S1(b.prevProp,P);let k=U||y===d&&b.isActive&&!N&&C||S>M&&C,D=!1;const R=Array.isArray(P)?P:[P];let H=R.reduce(o(y),{});V===!1&&(H={});const{prevResolvedValues:ce={}}=b,j={...ce,...H},se=ie=>{k=!0,v.has(ie)&&(D=!0,v.delete(ie)),b.needsAnimating[ie]=!0;const B=n.getValue(ie);B&&(B.liveStyle=!1)};for(const ie in j){const B=H[ie],ue=ce[ie];if(x.hasOwnProperty(ie))continue;let oe=!1;Vd(B)&&Vd(ue)?oe=!ty(B,ue):oe=B!==ue,oe?B!=null?se(ie):v.add(ie):B!==void 0&&v.has(ie)?se(ie):b.protectedKeys[ie]=!0}b.prevProp=P,b.prevResolvedValues=H,b.isActive&&(x={...x,...H}),r&&n.blockInitialAnimation&&(k=!1),k&&(!(N&&U)||D)&&g.push(...R.map(ie=>({animation:ie,options:{type:y}})))}if(v.size){const S={};v.forEach(y=>{const b=n.getBaseTarget(y),P=n.getValue(y);P&&(P.liveStyle=!0),S[y]=b??null}),g.push({animation:S})}let E=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(g):Promise.resolve()}function c(d,h){var m;if(t[d].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(v=>{var x;return(x=v.animationState)===null||x===void 0?void 0:x.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=k0(),r=!0}}}function S1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!ty(e,n):!1}function us(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function k0(){return{animate:us(!0),whileInView:us(),whileHover:us(),whileTap:us(),whileDrag:us(),whileFocus:us(),exit:us()}}class qr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class M1 extends qr{constructor(e){super(e),e.animationState||(e.animationState=x1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ic(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let E1=0;class T1 extends qr{constructor(){super(...arguments),this.id=E1++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const w1={animation:{Feature:M1},exit:{Feature:T1}};function za(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function ja(n){return{point:{x:n.pageX,y:n.pageY}}}const A1=n=>e=>pp(e)&&n(e,ja(e));function Ia(n,e,t,r){return za(n,e,A1(t),r)}const B0=(n,e)=>Math.abs(n-e);function C1(n,e){const t=B0(n.x,e.x),r=B0(n.y,e.y);return Math.sqrt(t**2+r**2)}class Gy{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=id(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,x=C1(g.offset,{x:0,y:0})>=3;if(!v&&!x)return;const{point:M}=g,{timestamp:E}=dn;this.history.push({...M,timestamp:E});const{onStart:S,onMove:y}=this.handlers;v||(S&&S(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=nd(v,this.transformPagePoint),zt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:x,onSessionEnd:M,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=id(g.type==="pointercancel"?this.lastMoveEventInfo:nd(v,this.transformPagePoint),this.history);this.startEvent&&x&&x(g,S),M&&M(g,S)},!pp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=ja(e),c=nd(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=dn;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,id(c,this.history)),this.removeListeners=Wa(Ia(this.contextWindow,"pointermove",this.handlePointerMove),Ia(this.contextWindow,"pointerup",this.handlePointerUp),Ia(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),jr(this.updatePoint)}}function nd(n,e){return e?{point:e(n.point)}:n}function z0(n,e){return{x:n.x-e.x,y:n.y-e.y}}function id({point:n},e){return{point:n,delta:z0(n,Wy(e)),offset:z0(n,R1(e)),velocity:b1(e,.1)}}function R1(n){return n[0]}function Wy(n){return n[n.length-1]}function b1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Wy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>sr(e)));)t--;if(!r)return{x:0,y:0};const l=or(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const jy=1e-4,P1=1-jy,D1=1+jy,Xy=.01,L1=0-Xy,I1=0+Xy;function Zn(n){return n.max-n.min}function U1(n,e,t){return Math.abs(n-e)<=t}function V0(n,e,t,r=.5){n.origin=r,n.originPoint=Wt(e.min,e.max,n.origin),n.scale=Zn(t)/Zn(e),n.translate=Wt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=P1&&n.scale<=D1||isNaN(n.scale))&&(n.scale=1),(n.translate>=L1&&n.translate<=I1||isNaN(n.translate))&&(n.translate=0)}function Ua(n,e,t,r){V0(n.x,e.x,t.x,r?r.originX:void 0),V0(n.y,e.y,t.y,r?r.originY:void 0)}function H0(n,e,t){n.min=t.min+e.min,n.max=n.min+Zn(e)}function N1(n,e,t){H0(n.x,e.x,t.x),H0(n.y,e.y,t.y)}function G0(n,e,t){n.min=e.min-t.min,n.max=n.min+Zn(e)}function Na(n,e,t){G0(n.x,e.x,t.x),G0(n.y,e.y,t.y)}function F1(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Wt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Wt(t,n,r.max):Math.min(n,t)),n}function W0(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function O1(n,{top:e,left:t,bottom:r,right:o}){return{x:W0(n.x,t,o),y:W0(n.y,e,r)}}function j0(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function k1(n,e){return{x:j0(n.x,e.x),y:j0(n.y,e.y)}}function B1(n,e){let t=.5;const r=Zn(n),o=Zn(e);return o>r?t=Ao(e.min,e.max-r,n.min):r>o&&(t=Ao(n.min,n.max-o,e.min)),ur(0,1,t)}function z1(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Qd=.35;function V1(n=Qd){return n===!1?n=0:n===!0&&(n=Qd),{x:X0(n,"left","right"),y:X0(n,"top","bottom")}}function X0(n,e,t){return{min:Y0(n,e),max:Y0(n,t)}}function Y0(n,e){return typeof n=="number"?n:n[e]||0}const q0=()=>({translate:0,scale:1,origin:0,originPoint:0}),_o=()=>({x:q0(),y:q0()}),$0=()=>({min:0,max:0}),$t=()=>({x:$0(),y:$0()});function li(n){return[n("x"),n("y")]}function Yy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function H1({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function G1(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function rd(n){return n===void 0||n===1}function Jd({scale:n,scaleX:e,scaleY:t}){return!rd(n)||!rd(e)||!rd(t)}function gs(n){return Jd(n)||qy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function qy(n){return K0(n.x)||K0(n.y)}function K0(n){return n&&n!=="0%"}function Ku(n,e,t){const r=n-t,o=e*r;return t+o}function Z0(n,e,t,r,o){return o!==void 0&&(n=Ku(n,o,r)),Ku(n,t,r)+e}function eh(n,e=0,t=1,r,o){n.min=Z0(n.min,e,t,r,o),n.max=Z0(n.max,e,t,r,o)}function $y(n,{x:e,y:t}){eh(n.x,e.translate,e.scale,e.originPoint),eh(n.y,t.translate,t.scale,t.originPoint)}const Q0=.999999999999,J0=1.0000000000001;function W1(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&xo(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,$y(n,u)),r&&gs(l.latestValues)&&xo(n,l.latestValues))}e.x<J0&&e.x>Q0&&(e.x=1),e.y<J0&&e.y>Q0&&(e.y=1)}function yo(n,e){n.min=n.min+e,n.max=n.max+e}function ev(n,e,t,r,o=.5){const l=Wt(n.min,n.max,o);eh(n,e,t,l,r)}function xo(n,e){ev(n.x,e.x,e.scaleX,e.scale,e.originX),ev(n.y,e.y,e.scaleY,e.scale,e.originY)}function Ky(n,e){return Yy(G1(n.getBoundingClientRect(),e))}function j1(n,e,t){const r=Ky(n,t),{scroll:o}=e;return o&&(yo(r.x,o.offset.x),yo(r.y,o.offset.y)),r}const Zy=({current:n})=>n?n.ownerDocument.defaultView:null,X1=new WeakMap;class Y1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$t(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(ja(m).point)},l=(m,g)=>{const{drag:v,dragPropagation:x,onDragStart:M}=this.getProps();if(v&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=BE(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),li(S=>{let y=this.getAxisMotionValue(S).get()||0;if(Ni.test(y)){const{projection:b}=this.visualElement;if(b&&b.layout){const P=b.layout.layoutBox[S];P&&(y=Zn(P)*(parseFloat(y)/100))}}this.originPoint[S]=y}),M&&zt.postRender(()=>M(m,g)),Wd(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},u=(m,g)=>{const{dragPropagation:v,dragDirectionLock:x,onDirectionLock:M,onDrag:E}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=g;if(x&&this.currentDirection===null){this.currentDirection=q1(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),E&&E(m,g)},c=(m,g)=>this.stop(m,g),d=()=>li(m=>{var g;return this.getAnimationState(m)==="paused"&&((g=this.getAxisMotionValue(m).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Gy(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:Zy(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&zt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!au(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=F1(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&go(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=O1(o.layoutBox,t):this.constraints=!1,this.elastic=V1(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&li(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=z1(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!go(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=j1(r,o.root,this.visualElement.getTransformPagePoint());let u=k1(o.layout.layoutBox,l);if(t){const c=t(H1(u));this.hasMutatedConstraints=!!c,c&&(u=Yy(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=li(m=>{if(!au(m,t,this.currentDirection))return;let g=d&&d[m]||{};u&&(g={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Wd(this.visualElement,e),r.start(Ap(e,r,0,t,this.visualElement,!1))}stopAnimation(){li(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){li(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){li(t=>{const{drag:r}=this.getProps();if(!au(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Wt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!go(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};li(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=B1({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),li(u=>{if(!au(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Wt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;X1.set(this.visualElement,this);const e=this.visualElement.current,t=Ia(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();go(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),zt.read(r);const u=za(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(li(m=>{const g=this.getAxisMotionValue(m);g&&(this.originPoint[m]+=d[m].translate,g.set(g.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Qd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function au(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function q1(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class $1 extends qr{constructor(e){super(e),this.removeGroupControls=Kn,this.removeListeners=Kn,this.controls=new Y1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Kn}unmount(){this.removeGroupControls(),this.removeListeners()}}const tv=n=>(e,t)=>{n&&zt.postRender(()=>n(e,t))};class K1 extends qr{constructor(){super(...arguments),this.removePointerDownListener=Kn}onPointerDown(e){this.session=new Gy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:tv(e),onStart:tv(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&zt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Ia(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ou={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function nv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const ya={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(tt.test(n))n=parseFloat(n);else return n;const t=nv(n,e.target.x),r=nv(n,e.target.y);return`${t}% ${r}%`}},Z1={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Xr.parse(n);if(o.length>5)return r;const l=Xr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Wt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class Q1 extends Se.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;_E(J1),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Ou.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||zt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),tp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Qy(n){const[e,t]=I_(),r=Se.useContext(Yh);return F.jsx(Q1,{...n,layoutGroup:r,switchLayoutGroup:Se.useContext(H_),isPresent:e,safeToRemove:t})}const J1={borderRadius:{...ya,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ya,borderTopRightRadius:ya,borderBottomLeftRadius:ya,borderBottomRightRadius:ya,boxShadow:Z1};function ew(n,e,t){const r=En(n)?n:ka(n);return r.start(Ap("",r,e,t)),r.animation}function tw(n){return n instanceof SVGElement&&n.tagName!=="svg"}const nw=(n,e)=>n.depth-e.depth;class iw{constructor(){this.children=[],this.isDirty=!1}add(e){mp(this.children,e),this.isDirty=!0}remove(e){gp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(nw),this.isDirty=!1,this.children.forEach(e)}}function rw(n,e){const t=Fi.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(jr(r),n(l-e))};return zt.read(r,!0),()=>jr(r)}const Jy=["TopLeft","TopRight","BottomLeft","BottomRight"],sw=Jy.length,iv=n=>typeof n=="string"?parseFloat(n):n,rv=n=>typeof n=="number"||tt.test(n);function ow(n,e,t,r,o,l){o?(n.opacity=Wt(0,t.opacity!==void 0?t.opacity:1,aw(r)),n.opacityExit=Wt(e.opacity!==void 0?e.opacity:1,0,lw(r))):l&&(n.opacity=Wt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<sw;u++){const c=`border${Jy[u]}Radius`;let d=sv(e,c),h=sv(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||rv(d)===rv(h)?(n[c]=Math.max(Wt(iv(d),iv(h),r),0),(Ni.test(h)||Ni.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Wt(e.rotate||0,t.rotate||0,r))}function sv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const aw=ex(0,.5,_y),lw=ex(.5,.95,Kn);function ex(n,e,t){return r=>r<n?0:r>e?1:t(Ao(n,e,r))}function ov(n,e){n.min=e.min,n.max=e.max}function oi(n,e){ov(n.x,e.x),ov(n.y,e.y)}function av(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function lv(n,e,t,r,o){return n-=e,n=Ku(n,1/t,r),o!==void 0&&(n=Ku(n,1/o,r)),n}function uw(n,e=0,t=1,r=.5,o,l=n,u=n){if(Ni.test(e)&&(e=parseFloat(e),e=Wt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Wt(l.min,l.max,r);n===l&&(c-=e),n.min=lv(n.min,e,t,c,o),n.max=lv(n.max,e,t,c,o)}function uv(n,e,[t,r,o],l,u){uw(n,e[t],e[r],e[o],e.scale,l,u)}const cw=["x","scaleX","originX"],fw=["y","scaleY","originY"];function cv(n,e,t,r){uv(n.x,e,cw,t?t.x:void 0,r?r.x:void 0),uv(n.y,e,fw,t?t.y:void 0,r?r.y:void 0)}function fv(n){return n.translate===0&&n.scale===1}function tx(n){return fv(n.x)&&fv(n.y)}function dv(n,e){return n.min===e.min&&n.max===e.max}function dw(n,e){return dv(n.x,e.x)&&dv(n.y,e.y)}function hv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function nx(n,e){return hv(n.x,e.x)&&hv(n.y,e.y)}function pv(n){return Zn(n.x)/Zn(n.y)}function mv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class hw{constructor(){this.members=[]}add(e){mp(this.members,e),e.scheduleRender()}remove(e){if(gp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function pw(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:g,rotateY:v,skewX:x,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const vs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ra=typeof window<"u"&&window.MotionDebug!==void 0,sd=["","X","Y","Z"],mw={visibility:"hidden"},gv=1e3;let gw=0;function od(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function ix(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=fy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",zt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&ix(r)}function rx({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=gw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ra&&(vs.totalNodes=vs.resolvedTargetDeltas=vs.recalculatedProjection=0),this.nodes.forEach(yw),this.nodes.forEach(Tw),this.nodes.forEach(ww),this.nodes.forEach(xw),Ra&&window.MotionDebug.record(vs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new iw)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new vp),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=tw(u),this.instance=u;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=rw(v,250),Ou.hasAnimatedSinceResize&&(Ou.hasAnimatedSinceResize=!1,this.nodes.forEach(_v))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||m.getDefaultTransition()||Pw,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=m.getProps(),b=!this.targetLayout||!nx(this.targetLayout,M)||x,P=!v&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||P||v&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,P);const C={...fp(E,"layout"),onPlay:S,onComplete:y};(m.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else v||_v(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,jr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Aw),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ix(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const g=this.path[m];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(vv);return}this.isUpdating||this.nodes.forEach(Mw),this.isUpdating=!1,this.nodes.forEach(Ew),this.nodes.forEach(vw),this.nodes.forEach(_w),this.clearAllSnapshots();const c=Fi.now();dn.delta=ur(0,1e3/60,c-dn.timestamp),dn.timestamp=c,dn.isProcessing=!0,Kf.update.process(dn),Kf.preRender.process(dn),Kf.render.process(dn),dn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,tp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Sw),this.sharedNodes.forEach(Cw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,zt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){zt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$t(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!tx(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(c||gs(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),Dw(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return $t();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(Lw))){const{scroll:m}=this.root;m&&(yo(d.x,m.offset.x),yo(d.y,m.offset.y))}return d}removeElementScroll(u){var c;const d=$t();if(oi(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:g,options:v}=m;m!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&oi(d,u),yo(d.x,g.offset.x),yo(d.y,g.offset.y))}return d}applyTransform(u,c=!1){const d=$t();oi(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&xo(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),gs(m.latestValues)&&xo(d,m.latestValues)}return gs(this.latestValues)&&xo(d,this.latestValues),d}removeTransform(u){const c=$t();oi(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!gs(h.latestValues))continue;Jd(h.latestValues)&&h.updateSnapshot();const m=$t(),g=h.measurePageBox();oi(m,g),cv(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return gs(this.latestValues)&&cv(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==dn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=dn.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),Na(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),oi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$t(),this.targetWithTransforms=$t()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),N1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):oi(this.target,this.layout.layoutBox),$y(this.target,this.targetDelta)):oi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),Na(this.relativeTargetOrigin,this.target,x.target),oi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ra&&vs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Jd(this.parent.latestValues)||qy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===dn.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;oi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;W1(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=$t());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(av(this.prevProjectionDelta.x,this.projectionDelta.x),av(this.prevProjectionDelta.y,this.projectionDelta.y)),Ua(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!mv(this.projectionDelta.x,this.prevProjectionDelta.x)||!mv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Ra&&vs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_o(),this.projectionDelta=_o(),this.projectionDeltaWithTransform=_o()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},g=_o();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=$t(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,E=x!==M,S=this.getStack(),y=!S||S.members.length<=1,b=!!(E&&!y&&this.options.crossfade===!0&&!this.path.some(bw));this.animationProgress=0;let P;this.mixTargetDelta=C=>{const V=C/1e3;yv(g.x,u.x,V),yv(g.y,u.y,V),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Na(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Rw(this.relativeTarget,this.relativeTargetOrigin,v,V),P&&dw(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=$t()),oi(P,this.relativeTarget)),E&&(this.animationValues=m,ow(m,h,this.latestValues,V,b,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=V},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(jr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=zt.update(()=>{Ou.hasAnimatedSinceResize=!0,this.currentAnimation=ew(0,gv,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:m}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&sx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||$t();const g=Zn(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=Zn(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}oi(c,d),xo(c,m),Ua(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new hw),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&od("z",u,h,this.animationValues);for(let m=0;m<sd.length;m++)od(`rotate${sd[m]}`,u,h,this.animationValues),od(`skew${sd[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return mw;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Nu(u==null?void 0:u.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=Nu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!gs(this.latestValues)&&(E.transform=m?m({},""):"none",this.hasProjected=!1),E}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=pw(this.projectionDeltaWithTransform,this.treeScale,v),m&&(h.transform=m(v,h.transform));const{x,y:M}=this.projectionDelta;h.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=v.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const E in ju){if(v[E]===void 0)continue;const{correct:S,applyTo:y}=ju[E],b=h.transform==="none"?v[E]:S(v[E],g);if(y){const P=y.length;for(let C=0;C<P;C++)h[y[C]]=b}else h[E]=b}return this.options.layoutId&&(h.pointerEvents=g===this?Nu(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(vv),this.root.sharedNodes.clear()}}}function vw(n){n.updateLayout()}function _w(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?li(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=Zn(v);v.min=r[g].min,v.max=v.min+x}):sx(l,t.layoutBox,r)&&li(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=Zn(r[g]);v.max=v.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const c=_o();Ua(c,r,t.layoutBox);const d=_o();u?Ua(d,n.applyTransform(o,!0),t.measuredBox):Ua(d,r,t.layoutBox);const h=!tx(c);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:x}=g;if(v&&x){const M=$t();Na(M,t.layoutBox,v.layoutBox);const E=$t();Na(E,r,x.layoutBox),nx(M,E)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function yw(n){Ra&&vs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function xw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Sw(n){n.clearSnapshot()}function vv(n){n.clearMeasurements()}function Mw(n){n.isLayoutDirty=!1}function Ew(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function _v(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Tw(n){n.resolveTargetDelta()}function ww(n){n.calcProjection()}function Aw(n){n.resetSkewAndRotation()}function Cw(n){n.removeLeadSnapshot()}function yv(n,e,t){n.translate=Wt(e.translate,0,t),n.scale=Wt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function xv(n,e,t,r){n.min=Wt(e.min,t.min,r),n.max=Wt(e.max,t.max,r)}function Rw(n,e,t,r){xv(n.x,e.x,t.x,r),xv(n.y,e.y,t.y,r)}function bw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Pw={duration:.45,ease:[.4,0,.1,1]},Sv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Mv=Sv("applewebkit/")&&!Sv("chrome/")?Math.round:Kn;function Ev(n){n.min=Mv(n.min),n.max=Mv(n.max)}function Dw(n){Ev(n.x),Ev(n.y)}function sx(n,e,t){return n==="position"||n==="preserve-aspect"&&!U1(pv(e),pv(t),.2)}function Lw(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const Iw=rx({attachResizeListener:(n,e)=>za(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ad={current:void 0},ox=rx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ad.current){const n=new Iw({});n.mount(window),n.setOptions({layoutScroll:!0}),ad.current=n}return ad.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Uw={pan:{Feature:K1},drag:{Feature:$1,ProjectionNode:ox,MeasureLayout:Qy}};function Tv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&zt.postRender(()=>l(e,ja(e)))}class Nw extends qr{mount(){const{current:e}=this.node;e&&(this.unmount=UE(e,t=>(Tv(this.node,t,"Start"),r=>Tv(this.node,r,"End"))))}unmount(){}}class Fw extends qr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wa(za(this.node.current,"focus",()=>this.onFocus()),za(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function wv(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&zt.postRender(()=>l(e,ja(e)))}class Ow extends qr{mount(){const{current:e}=this.node;e&&(this.unmount=kE(e,t=>(wv(this.node,t,"Start"),(r,{success:o})=>wv(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const th=new WeakMap,ld=new WeakMap,kw=n=>{const e=th.get(n.target);e&&e(n)},Bw=n=>{n.forEach(kw)};function zw({root:n,...e}){const t=n||document;ld.has(t)||ld.set(t,{});const r=ld.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Bw,{root:n,...e})),r[o]}function Vw(n,e,t){const r=zw(e);return th.set(n,t),r.observe(n),()=>{th.delete(n),r.unobserve(n)}}const Hw={some:0,all:1};class Gw extends qr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:Hw[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:g}=this.node.getProps(),v=h?m:g;v&&v(d)};return Vw(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Ww(e,t))&&this.startObserver()}unmount(){}}function Ww({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const jw={inView:{Feature:Gw},tap:{Feature:Ow},focus:{Feature:Fw},hover:{Feature:Nw}},Xw={layout:{ProjectionNode:ox,MeasureLayout:Qy}},nh={current:null},ax={current:!1};function Yw(){if(ax.current=!0,!!Kh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>nh.current=n.matches;n.addListener(e),e()}else nh.current=!1}const qw=[...Ly,Sn,Xr],$w=n=>qw.find(Dy(n)),Av=new WeakMap;function Kw(n,e,t){for(const r in e){const o=e[r],l=t[r];if(En(o))n.addValue(r,o);else if(En(l))n.addValue(r,ka(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,ka(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Cv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Zw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ep,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Fi.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,zt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:m}=u;this.onUpdate=m,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=rc(t),this.isVariantNode=z_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const x in v){const M=v[x];d[x]!==void 0&&En(M)&&M.set(d[x],!1)}}mount(e){this.current=e,Av.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),ax.current||Yw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:nh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Av.delete(this.current),this.projection&&this.projection.unmount(),jr(this.notifyUpdate),jr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Ps.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&zt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Co){const t=Co[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$t()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Cv.length;r++){const o=Cv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=Kw(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=ka(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(by(o)||xy(o))?o=parseFloat(o):!$w(o)&&Xr.test(t)&&(o=Ay(e,t)),this.setBaseTarget(e,En(o)?o.get():o)),En(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=ip(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!En(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new vp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class lx extends Zw{constructor(){super(...arguments),this.KeyframeResolver=Iy}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;En(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Qw(n){return window.getComputedStyle(n)}class Jw extends lx{constructor(){super(...arguments),this.type="html",this.renderInstance=$_}readValueFromInstance(e,t){if(Ps.has(t)){const r=Mp(t);return r&&r.default||0}else{const r=Qw(e),o=(X_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ky(e,t)}build(e,t,r){op(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return cp(e,t,r)}}class eA extends lx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$t}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ps.has(t)){const r=Mp(t);return r&&r.default||0}return t=K_.has(t)?t:ep(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return J_(e,t,r)}build(e,t,r){ap(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){Z_(e,t,r,o)}mount(e){this.isSVGTag=up(e.tagName),super.mount(e)}}const tA=(n,e)=>np(n)?new eA(e):new Jw(e,{allowProjection:n!==Se.Fragment}),nA=CE({...w1,...jw,...Uw,...Xw},tA),Ve=HM(nA);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="170",iA=0,Rv=1,rA=2,ux=1,sA=2,er=3,Yr=0,Hn=1,tr=2,Gr=0,Mo=1,bv=2,Pv=3,Dv=4,oA=5,xs=100,aA=101,lA=102,uA=103,cA=104,fA=200,dA=201,hA=202,pA=203,ih=204,rh=205,mA=206,gA=207,vA=208,_A=209,yA=210,xA=211,SA=212,MA=213,EA=214,sh=0,oh=1,ah=2,bo=3,lh=4,uh=5,ch=6,fh=7,cx=0,TA=1,wA=2,Wr=0,AA=1,CA=2,RA=3,bA=4,PA=5,DA=6,LA=7,fx=300,Po=301,Do=302,dh=303,hh=304,ac=306,ph=1e3,Ts=1001,mh=1002,Ai=1003,IA=1004,lu=1005,Ui=1006,ud=1007,ws=1008,cr=1009,dx=1010,hx=1011,Va=1012,Rp=1013,Rs=1014,nr=1015,Xa=1016,bp=1017,Pp=1018,Lo=1020,px=35902,mx=1021,gx=1022,wi=1023,vx=1024,_x=1025,Eo=1026,Io=1027,yx=1028,Dp=1029,xx=1030,Lp=1031,Ip=1033,ku=33776,Bu=33777,zu=33778,Vu=33779,gh=35840,vh=35841,_h=35842,yh=35843,xh=36196,Sh=37492,Mh=37496,Eh=37808,Th=37809,wh=37810,Ah=37811,Ch=37812,Rh=37813,bh=37814,Ph=37815,Dh=37816,Lh=37817,Ih=37818,Uh=37819,Nh=37820,Fh=37821,Hu=36492,Oh=36494,kh=36495,Sx=36283,Bh=36284,zh=36285,Vh=36286,UA=3200,NA=3201,FA=0,OA=1,Vr="",ui="srgb",Oo="srgb-linear",lc="linear",Lt="srgb",to=7680,Lv=519,kA=512,BA=513,zA=514,Mx=515,VA=516,HA=517,GA=518,WA=519,Iv=35044,Uv="300 es",ir=2e3,Zu=2001;class ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,Hh=180/Math.PI;function Ya(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Vn(n,e,t){return Math.max(e,Math.min(t,n))}function jA(n,e){return(n%e+e)%e}function fd(n,e,t){return(1-t)*n+t*e}function xa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(e=0,t=0){Ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,r,o,l,u,c,d,h){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],m=r[4],g=r[7],v=r[2],x=r[5],M=r[8],E=o[0],S=o[3],y=o[6],b=o[1],P=o[4],C=o[7],V=o[2],N=o[5],U=o[8];return l[0]=u*E+c*b+d*V,l[3]=u*S+c*P+d*N,l[6]=u*y+c*C+d*U,l[1]=h*E+m*b+g*V,l[4]=h*S+m*P+g*N,l[7]=h*y+m*C+g*U,l[2]=v*E+x*b+M*V,l[5]=v*S+x*P+M*N,l[8]=v*y+x*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-r*l*m+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=m*u-c*h,v=c*d-m*l,x=h*l-u*d,M=t*g+r*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*h-m*r)*E,e[2]=(c*r-o*u)*E,e[3]=v*E,e[4]=(m*t-o*d)*E,e[5]=(o*l-c*t)*E,e[6]=x*E,e[7]=(r*d-h*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(dd.makeScale(e,t)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new ut;function Ex(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XA(){const n=Qu("canvas");return n.style.display="block",n}const Nv={};function ba(n){n in Nv||(Nv[n]=!0,console.warn(n))}function YA(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function qA(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $A(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mt={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(n.r=ar(n.r),n.g=ar(n.g),n.b=ar(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(n.r=To(n.r),n.g=To(n.g),n.b=To(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vr?lc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function To(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Fv=[.64,.33,.3,.6,.15,.06],Ov=[.2126,.7152,.0722],kv=[.3127,.329],Bv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt.define({[Oo]:{primaries:Fv,whitePoint:kv,transfer:lc,toXYZ:Bv,fromXYZ:zv,luminanceCoefficients:Ov,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:Fv,whitePoint:kv,transfer:Lt,toXYZ:Bv,fromXYZ:zv,luminanceCoefficients:Ov,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}});let no;class KA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{no===void 0&&(no=Qu("canvas")),no.width=e.width,no.height=e.height;const r=no.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=no}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ar(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ar(t[r]/255)*255):t[r]=ar(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZA=0;class Tx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(hd(o[u].image)):l.push(hd(o[u]))}else l=hd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function hd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?KA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QA=0;class Gn extends ko{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,r=Ts,o=Ts,l=Ui,u=ws,c=wi,d=cr,h=Gn.DEFAULT_ANISOTROPY,m=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=Ya(),this.name="",this.source=new Tx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case Ts:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case Ts:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=fx;Gn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,r=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],x=d[5],M=d[9],E=d[2],S=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,C=(x+1)/2,V=(y+1)/2,N=(m+v)/4,U=(g+E)/4,k=(M+S)/4;return P>C&&P>V?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=N/r,l=U/r):C>V?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=N/o,l=k/o):V<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),r=U/l,o=k/l),this.set(r,o,l,t),this}let b=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(b)<.001&&(b=1),this.x=(S-M)/b,this.y=(g-E)/b,this.z=(v-m)/b,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JA extends ko{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Gn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends JA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class wx extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eC extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],m=r[o+2],g=r[o+3];const v=l[u+0],x=l[u+1],M=l[u+2],E=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==v||h!==x||m!==M){let S=1-c;const y=d*v+h*x+m*M+g*E,b=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const V=Math.sqrt(P),N=Math.atan2(V,y*b);S=Math.sin(S*N)/V,c=Math.sin(c*N)/V}const C=c*b;if(d=d*S+v*C,h=h*S+x*C,m=m*S+M*C,g=g*S+E*C,S===1-c){const V=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=V,h*=V,m*=V,g*=V}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],m=r[o+3],g=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[t]=c*M+m*g+d*x-h*v,e[t+1]=d*M+m*v+h*g-c*x,e[t+2]=h*M+m*x+c*v-d*g,e[t+3]=m*M-c*g-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),m=c(o/2),g=c(l/2),v=d(r/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*m*g+h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g-v*x*M;break;case"YXZ":this._x=v*m*g+h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g+v*x*M;break;case"ZXY":this._x=v*m*g-h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g-v*x*M;break;case"ZYX":this._x=v*m*g-h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g+v*x*M;break;case"YZX":this._x=v*m*g+h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g-v*x*M;break;case"XZY":this._x=v*m*g-h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=r+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>c&&r>g){const x=2*Math.sqrt(1+r-c-g);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(c>g){const x=2*Math.sqrt(1+c-r-g);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-r-c);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*c+o*h-l*d,this._y=o*m+u*d+l*c-r*h,this._z=l*m+u*h+r*d-o*c,this._w=u*m-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),m=2*(c*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-c*m,this.y=r+d*m+c*h-l*g,this.z=o+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new te,Vv=new qa;class $a{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,xi):xi.fromBufferAttribute(l,u),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uu.copy(r.boundingBox)),uu.applyMatrix4(e.matrixWorld),this.union(uu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),cu.subVectors(this.max,Sa),io.subVectors(e.a,Sa),ro.subVectors(e.b,Sa),so.subVectors(e.c,Sa),Ur.subVectors(ro,io),Nr.subVectors(so,ro),cs.subVectors(io,so);let t=[0,-Ur.z,Ur.y,0,-Nr.z,Nr.y,0,-cs.z,cs.y,Ur.z,0,-Ur.x,Nr.z,0,-Nr.x,cs.z,0,-cs.x,-Ur.y,Ur.x,0,-Nr.y,Nr.x,0,-cs.y,cs.x,0];return!md(t,io,ro,so,cu)||(t=[1,0,0,0,1,0,0,0,1],!md(t,io,ro,so,cu))?!1:(fu.crossVectors(Ur,Nr),t=[fu.x,fu.y,fu.z],md(t,io,ro,so,cu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new te,new te,new te,new te,new te,new te,new te,new te],xi=new te,uu=new $a,io=new te,ro=new te,so=new te,Ur=new te,Nr=new te,cs=new te,Sa=new te,cu=new te,fu=new te,fs=new te;function md(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){fs.fromArray(n,l);const c=o.x*Math.abs(fs.x)+o.y*Math.abs(fs.y)+o.z*Math.abs(fs.z),d=e.dot(fs),h=t.dot(fs),m=r.dot(fs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const tC=new $a,Ma=new te,gd=new te;class Ka{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):tC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const t=Ma.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ma,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(gd)),this.expandByPoint(Ma.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new te,vd=new te,du=new te,Fr=new te,_d=new te,hu=new te,yd=new te;class Up{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){vd.copy(e).add(t).multiplyScalar(.5),du.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(vd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(du),c=Fr.dot(this.direction),d=-Fr.dot(du),h=Fr.lengthSq(),m=Math.abs(1-u*u);let g,v,x,M;if(m>0)if(g=u*d-c,v=u*c-d,M=l*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,x=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-u*l+c)),v=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(g=Math.max(0,-(u*l+c)),v=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(vd).addScaledVector(du,v),x}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){_d.subVectors(t,e),hu.subVectors(r,e),yd.crossVectors(_d,hu);let u=this.direction.dot(yd),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Fr.subVectors(this.origin,e);const d=c*this.direction.dot(hu.crossVectors(Fr,hu));if(d<0)return null;const h=c*this.direction.dot(_d.cross(Fr));if(h<0||d+h>u)return null;const m=-c*Fr.dot(yd);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,r,o,l,u,c,d,h,m,g,v,x,M,E,S){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,m,g,v,x,M,E,S)}set(e,t,r,o,l,u,c,d,h,m,g,v,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/oo.setFromMatrixColumn(e,0).length(),l=1/oo.setFromMatrixColumn(e,1).length(),u=1/oo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*m,x=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=x+M*h,t[5]=v-E*h,t[9]=-c*d,t[2]=E-v*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,x=d*g,M=h*m,E=h*g;t[0]=v+E*c,t[4]=M*c-x,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-M,t[6]=E+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,x=d*g,M=h*m,E=h*g;t[0]=v-E*c,t[4]=-u*g,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*m,t[9]=E-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,x=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=M*h-x,t[8]=v*h+E,t[1]=d*g,t[5]=E*h+v,t[9]=x*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,M=c*d,E=c*h;t[0]=d*m,t[4]=E-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=x*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=u*d,x=u*h,M=c*d,E=c*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+E,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=c*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nC,e,iC)}lookAt(e,t,r){const o=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Or.crossVectors(r,qn),Or.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Or.crossVectors(r,qn)),Or.normalize(),pu.crossVectors(qn,Or),o[0]=Or.x,o[4]=pu.x,o[8]=qn.x,o[1]=Or.y,o[5]=pu.y,o[9]=qn.y,o[2]=Or.z,o[6]=pu.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],m=r[1],g=r[5],v=r[9],x=r[13],M=r[2],E=r[6],S=r[10],y=r[14],b=r[3],P=r[7],C=r[11],V=r[15],N=o[0],U=o[4],k=o[8],D=o[12],R=o[1],H=o[5],ce=o[9],j=o[13],se=o[2],fe=o[6],le=o[10],ie=o[14],B=o[3],ue=o[7],oe=o[11],O=o[15];return l[0]=u*N+c*R+d*se+h*B,l[4]=u*U+c*H+d*fe+h*ue,l[8]=u*k+c*ce+d*le+h*oe,l[12]=u*D+c*j+d*ie+h*O,l[1]=m*N+g*R+v*se+x*B,l[5]=m*U+g*H+v*fe+x*ue,l[9]=m*k+g*ce+v*le+x*oe,l[13]=m*D+g*j+v*ie+x*O,l[2]=M*N+E*R+S*se+y*B,l[6]=M*U+E*H+S*fe+y*ue,l[10]=M*k+E*ce+S*le+y*oe,l[14]=M*D+E*j+S*ie+y*O,l[3]=b*N+P*R+C*se+V*B,l[7]=b*U+P*H+C*fe+V*ue,l[11]=b*k+P*ce+C*le+V*oe,l[15]=b*D+P*j+C*ie+V*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+l*d*g-o*h*g-l*c*v+r*h*v+o*c*x-r*d*x)+E*(+t*d*x-t*h*v+l*u*v-o*u*x+o*h*m-l*d*m)+S*(+t*h*g-t*c*x-l*u*g+r*u*x+l*c*m-r*h*m)+y*(-o*c*m-t*d*g+t*c*v+o*u*g-r*u*v+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],b=g*S*h-E*v*h+E*d*x-c*S*x-g*d*y+c*v*y,P=M*v*h-m*S*h-M*d*x+u*S*x+m*d*y-u*v*y,C=m*E*h-M*g*h+M*c*x-u*E*x-m*c*y+u*g*y,V=M*g*d-m*E*d-M*c*v+u*E*v+m*c*S-u*g*S,N=t*b+r*P+o*C+l*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=b*U,e[1]=(E*v*l-g*S*l-E*o*x+r*S*x+g*o*y-r*v*y)*U,e[2]=(c*S*l-E*d*l+E*o*h-r*S*h-c*o*y+r*d*y)*U,e[3]=(g*d*l-c*v*l-g*o*h+r*v*h+c*o*x-r*d*x)*U,e[4]=P*U,e[5]=(m*S*l-M*v*l+M*o*x-t*S*x-m*o*y+t*v*y)*U,e[6]=(M*d*l-u*S*l-M*o*h+t*S*h+u*o*y-t*d*y)*U,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*x+t*d*x)*U,e[8]=C*U,e[9]=(M*g*l-m*E*l-M*r*x+t*E*x+m*r*y-t*g*y)*U,e[10]=(u*E*l-M*c*l+M*r*h-t*E*h-u*r*y+t*c*y)*U,e[11]=(m*c*l-u*g*l-m*r*h+t*g*h+u*r*x-t*c*x)*U,e[12]=V*U,e[13]=(m*E*o-M*g*o+M*r*v-t*E*v-m*r*S+t*g*S)*U,e[14]=(M*c*o-u*E*o-M*r*d+t*E*d+u*r*S-t*c*S)*U,e[15]=(u*g*o-m*c*o+m*r*d-t*g*d-u*r*v+t*c*v)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,m=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,m*c+r,m*d-o*u,0,h*d-o*c,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,m=u+u,g=c+c,v=l*h,x=l*m,M=l*g,E=u*m,S=u*g,y=c*g,b=d*h,P=d*m,C=d*g,V=r.x,N=r.y,U=r.z;return o[0]=(1-(E+y))*V,o[1]=(x+C)*V,o[2]=(M-P)*V,o[3]=0,o[4]=(x-C)*N,o[5]=(1-(v+y))*N,o[6]=(S+b)*N,o[7]=0,o[8]=(M+P)*U,o[9]=(S-b)*U,o[10]=(1-(v+E))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=oo.set(o[0],o[1],o[2]).length();const u=oo.set(o[4],o[5],o[6]).length(),c=oo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Si.copy(this);const h=1/l,m=1/u,g=1/c;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=m,Si.elements[5]*=m,Si.elements[6]*=m,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,t.setFromRotationMatrix(Si),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=ir){const d=this.elements,h=2*l/(t-e),m=2*l/(r-o),g=(t+e)/(t-e),v=(r+o)/(r-o);let x,M;if(c===ir)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(c===Zu)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=ir){const d=this.elements,h=1/(t-e),m=1/(r-o),g=1/(u-l),v=(t+e)*h,x=(r+o)*m;let M,E;if(c===ir)M=(u+l)*g,E=-2*g;else if(c===Zu)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const oo=new te,Si=new Yt,nC=new te(0,0,0),iC=new te(1,1,1),Or=new te,pu=new te,qn=new te,Hv=new Yt,Gv=new qa;class fr{constructor(e=0,t=0,r=0,o=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],m=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(Vn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Vn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Vn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Vn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-Vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gv.setFromEuler(this),this.setFromQuaternion(Gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rC=0;const Wv=new te,ao=new qa,Ki=new Yt,mu=new te,Ea=new te,sC=new te,oC=new qa,jv=new te(1,0,0),Xv=new te(0,1,0),Yv=new te(0,0,1),qv={type:"added"},aC={type:"removed"},lo={type:"childadded",child:null},xd={type:"childremoved",child:null};class Dn extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new te,t=new fr,r=new qa,o=new te(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ut}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(jv,e)}rotateY(e){return this.rotateOnAxis(Xv,e)}rotateZ(e){return this.rotateOnAxis(Yv,e)}translateOnAxis(e,t){return Wv.copy(e).applyQuaternion(this.quaternion),this.position.add(Wv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jv,e)}translateY(e){return this.translateOnAxis(Xv,e)}translateZ(e){return this.translateOnAxis(Yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?mu.copy(e):mu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ea,mu,this.up):Ki.lookAt(mu,Ea,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),ao.setFromRotationMatrix(Ki),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qv),lo.child=e,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aC),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qv),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,sC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,oC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Dn.DEFAULT_UP=new te(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new te,Zi=new te,Sd=new te,Qi=new te,uo=new te,co=new te,$v=new te,Md=new te,Ed=new te,Td=new te,wd=new Kt,Ad=new Kt,Cd=new Kt;class Ti{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),Zi.subVectors(r,t),Sd.subVectors(e,t);const u=Mi.dot(Mi),c=Mi.dot(Zi),d=Mi.dot(Sd),h=Zi.dot(Zi),m=Zi.dot(Sd),g=u*h-c*c;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(h*d-c*m)*v,M=(u*m-c*d)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,Qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Qi.x),d.addScaledVector(u,Qi.y),d.addScaledVector(c,Qi.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return wd.setScalar(0),Ad.setScalar(0),Cd.setScalar(0),wd.fromBufferAttribute(e,t),Ad.fromBufferAttribute(e,r),Cd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(wd,l.x),u.addScaledVector(Ad,l.y),u.addScaledVector(Cd,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),Zi.subVectors(e,t),Mi.cross(Zi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Mi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ti.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;uo.subVectors(o,r),co.subVectors(l,r),Md.subVectors(e,r);const d=uo.dot(Md),h=co.dot(Md);if(d<=0&&h<=0)return t.copy(r);Ed.subVectors(e,o);const m=uo.dot(Ed),g=co.dot(Ed);if(m>=0&&g<=m)return t.copy(o);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(uo,u);Td.subVectors(e,l);const x=uo.dot(Td),M=co.dot(Td);if(M>=0&&x<=M)return t.copy(l);const E=x*h-d*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(co,c);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return $v.subVectors(l,o),c=(g-m)/(g-m+(x-M)),t.copy(o).addScaledVector($v,c);const y=1/(S+E+v);return u=E*y,c=v*y,t.copy(r).addScaledVector(uo,u).addScaledVector(co,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},gu={h:0,s:0,l:0};function Rd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Mt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Mt.workingColorSpace){if(e=jA(e,1),t=Vn(t,0,1),r=Vn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Rd(u,l,e+1/3),this.g=Rd(u,l,e),this.b=Rd(u,l,e-1/3)}return Mt.toWorkingColorSpace(this,o),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=Cx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Mt.fromWorkingColorSpace(xn.copy(this),e),Math.round(Vn(xn.r*255,0,255))*65536+Math.round(Vn(xn.g*255,0,255))*256+Math.round(Vn(xn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(xn.copy(this),t);const r=xn.r,o=xn.g,l=xn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=m<=.5?g/(u+c):g/(2-u-c),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ui){Mt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,o=xn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(gu);const r=fd(kr.h,gu.h,t),o=fd(kr.s,gu.s,t),l=fd(kr.l,gu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Et;Et.NAMES=Cx;let lC=0;class Bo extends ko{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lC++}),this.uuid=Ya(),this.name="",this.blending=Mo,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(r.blending=this.blending),this.side!==Yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ih&&(r.blendSrc=this.blendSrc),this.blendDst!==rh&&(r.blendDst=this.blendDst),this.blendEquation!==xs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(r.stencilFail=this.stencilFail),this.stencilZFail!==to&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rx extends Bo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new te,vu=new Ut;class Mn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Iv,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)vu.fromBufferAttribute(this,t),vu.applyMatrix3(e),this.setXY(t,vu.x,vu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=xa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xa(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xa(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xa(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),o=zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),o=zn(o,this.array),l=zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iv&&(e.usage=this.usage),e}}class bx extends Mn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Px extends Mn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class lr extends Mn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let uC=0;const ai=new Yt,bd=new Dn,fo=new te,$n=new $a,Ta=new $a,un=new te;class fi extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ex(e)?Px:bx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,r){return ai.makeTranslation(e,t,r),this.applyMatrix4(ai),this}scale(e,t,r){return ai.makeScale(e,t,r),this.applyMatrix4(ai),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new lr(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];Ta.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors($n.min,Ta.min),$n.expandByPoint(un),un.addVectors($n.max,Ta.max),$n.expandByPoint(un)):($n.expandByPoint(Ta.min),$n.expandByPoint(Ta.max))}$n.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(un));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)un.fromBufferAttribute(c,h),d&&(fo.fromBufferAttribute(e,h),un.add(fo)),o=Math.max(o,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let k=0;k<r.count;k++)c[k]=new te,d[k]=new te;const h=new te,m=new te,g=new te,v=new Ut,x=new Ut,M=new Ut,E=new te,S=new te;function y(k,D,R){h.fromBufferAttribute(r,k),m.fromBufferAttribute(r,D),g.fromBufferAttribute(r,R),v.fromBufferAttribute(l,k),x.fromBufferAttribute(l,D),M.fromBufferAttribute(l,R),m.sub(h),g.sub(h),x.sub(v),M.sub(v);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(H),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(H),c[k].add(E),c[D].add(E),c[R].add(E),d[k].add(S),d[D].add(S),d[R].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,D=b.length;k<D;++k){const R=b[k],H=R.start,ce=R.count;for(let j=H,se=H+ce;j<se;j+=3)y(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const P=new te,C=new te,V=new te,N=new te;function U(k){V.fromBufferAttribute(o,k),N.copy(V);const D=c[k];P.copy(D),P.sub(V.multiplyScalar(V.dot(D))).normalize(),C.crossVectors(N,D);const H=C.dot(d[k])<0?-1:1;u.setXYZW(k,P.x,P.y,P.z,H)}for(let k=0,D=b.length;k<D;++k){const R=b[k],H=R.start,ce=R.count;for(let j=H,se=H+ce;j<se;j+=3)U(e.getX(j+0)),U(e.getX(j+1)),U(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new te,l=new te,u=new te,c=new te,d=new te,h=new te,m=new te,g=new te;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,S),c.add(m),d.add(m),h.add(m),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,g=c.normalized,v=new h.constructor(d.length*m);let x=0,M=0;for(let E=0,S=d.length;E<S;E++){c.isInterleavedBufferAttribute?x=d[E]*c.data.stride+c.offset:x=d[E]*m;for(let y=0;y<m;y++)v[M++]=h[x++]}return new Mn(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let m=0,g=h.length;m<g;m++){const v=h[m],x=e(v,r);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const x=h[g];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kv=new Yt,ds=new Up,_u=new Ka,Zv=new te,yu=new te,xu=new te,Su=new te,Pd=new te,Mu=new te,Qv=new te,Eu=new te;class rr extends Dn{constructor(e=new fi,t=new Rx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){Mu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=c[d],g=l[d];m!==0&&(Pd.fromBufferAttribute(g,e),u?Mu.addScaledVector(Pd,m):Mu.addScaledVector(Pd.sub(t),m))}t.add(Mu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_u.copy(r.boundingSphere),_u.applyMatrix4(l),ds.copy(e.ray).recast(e.near),!(_u.containsPoint(ds.origin)===!1&&(ds.intersectSphere(_u,Zv)===null||ds.origin.distanceToSquared(Zv)>(e.far-e.near)**2))&&(Kv.copy(l).invert(),ds.copy(e.ray).applyMatrix4(Kv),!(r.boundingBox!==null&&ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=u[S.materialIndex],b=Math.max(S.start,x.start),P=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let C=b,V=P;C<V;C+=3){const N=c.getX(C),U=c.getX(C+1),k=c.getX(C+2);o=Tu(this,y,e,r,h,m,g,N,U,k),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(c.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const b=c.getX(S),P=c.getX(S+1),C=c.getX(S+2);o=Tu(this,u,e,r,h,m,g,b,P,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=u[S.materialIndex],b=Math.max(S.start,x.start),P=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=b,V=P;C<V;C+=3){const N=C,U=C+1,k=C+2;o=Tu(this,y,e,r,h,m,g,N,U,k),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const b=S,P=S+1,C=S+2;o=Tu(this,u,e,r,h,m,g,b,P,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function cC(n,e,t,r,o,l,u,c){let d;if(e.side===Hn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===Yr,c),d===null)return null;Eu.copy(c),Eu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Eu);return h<t.near||h>t.far?null:{distance:h,point:Eu.clone(),object:n}}function Tu(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,yu),n.getVertexPosition(d,xu),n.getVertexPosition(h,Su);const m=cC(n,e,t,r,yu,xu,Su,Qv);if(m){const g=new te;Ti.getBarycoord(Qv,yu,xu,Su,g),o&&(m.uv=Ti.getInterpolatedAttribute(o,c,d,h,g,new Ut)),l&&(m.uv1=Ti.getInterpolatedAttribute(l,c,d,h,g,new Ut)),u&&(m.normal=Ti.getInterpolatedAttribute(u,c,d,h,g,new te),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new te,materialIndex:0};Ti.getNormal(yu,xu,Su,v.normal),m.face=v,m.barycoord=g}return m}class Za extends fi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new lr(h,3)),this.setAttribute("normal",new lr(m,3)),this.setAttribute("uv",new lr(g,2));function M(E,S,y,b,P,C,V,N,U,k,D){const R=C/U,H=V/k,ce=C/2,j=V/2,se=N/2,fe=U+1,le=k+1;let ie=0,B=0;const ue=new te;for(let oe=0;oe<le;oe++){const O=oe*H-j;for(let re=0;re<fe;re++){const Ue=re*R-ce;ue[E]=Ue*b,ue[S]=O*P,ue[y]=se,h.push(ue.x,ue.y,ue.z),ue[E]=0,ue[S]=0,ue[y]=N>0?1:-1,m.push(ue.x,ue.y,ue.z),g.push(re/U),g.push(1-oe/k),ie+=1}}for(let oe=0;oe<k;oe++)for(let O=0;O<U;O++){const re=v+O+fe*oe,Ue=v+O+fe*(oe+1),Q=v+(O+1)+fe*(oe+1),de=v+(O+1)+fe*oe;d.push(re,Ue,de),d.push(Ue,Q,de),B+=6}c.addGroup(x,B,D),x+=B,v+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Pn(n){const e={};for(let t=0;t<n.length;t++){const r=Uo(n[t]);for(const o in r)e[o]=r[o]}return e}function fC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const dC={clone:Uo,merge:Pn};var hC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Bo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hC,this.fragmentShader=pC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=fC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Lx extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new te,Jv=new Ut,e_=new Ut;class ci extends Lx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,Jv,e_),t.subVectors(e_,Jv)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ho=-90,po=1;class mC extends Dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ci(ho,po,e,t);o.layers=this.layers,this.add(o);const l=new ci(ho,po,e,t);l.layers=this.layers,this.add(l);const u=new ci(ho,po,e,t);u.layers=this.layers,this.add(u);const c=new ci(ho,po,e,t);c.layers=this.layers,this.add(c);const d=new ci(ho,po,e,t);d.layers=this.layers,this.add(d);const h=new ci(ho,po,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===ir)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Ix extends Gn{constructor(e,t,r,o,l,u,c,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Po,super(e,t,r,o,l,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gC extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ix(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Za(5,5,5),l=new dr({name:"CubemapFromEquirect",uniforms:Uo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Gr});l.uniforms.tEquirect.value=t;const u=new rr(o,l),c=t.minFilter;return t.minFilter===ws&&(t.minFilter=Ui),new mC(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Dd=new te,vC=new te,_C=new ut;class _s{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Dd.subVectors(r,t).cross(vC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Dd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||_C.getNormalMatrix(e),o=this.coplanarPoint(Dd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Ka,wu=new te;class Ux{constructor(e=new _s,t=new _s,r=new _s,o=new _s,l=new _s,u=new _s){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ir){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],d=o[3],h=o[4],m=o[5],g=o[6],v=o[7],x=o[8],M=o[9],E=o[10],S=o[11],y=o[12],b=o[13],P=o[14],C=o[15];if(r[0].setComponents(d-l,v-h,S-x,C-y).normalize(),r[1].setComponents(d+l,v+h,S+x,C+y).normalize(),r[2].setComponents(d+u,v+m,S+M,C+b).normalize(),r[3].setComponents(d-u,v-m,S-M,C-b).normalize(),r[4].setComponents(d-c,v-g,S-E,C-P).normalize(),t===ir)r[5].setComponents(d+c,v+g,S+E,C+P).normalize();else if(t===Zu)r[5].setComponents(c,g,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(wu.x=o.normal.x>0?e.max.x:e.min.x,wu.y=o.normal.y>0?e.max.y:e.min.y,wu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nx(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function yC(n){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,m),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,h){const m=d.array,g=d.updateRanges;if(n.bindBuffer(h,c),g.length===0)n.bufferSubData(h,0,m);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];n.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}class uc extends fi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,m=d+1,g=e/c,v=t/d,x=[],M=[],E=[],S=[];for(let y=0;y<m;y++){const b=y*v-u;for(let P=0;P<h;P++){const C=P*g-l;M.push(C,-b,0),E.push(0,0,1),S.push(P/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let b=0;b<c;b++){const P=b+h*y,C=b+h*(y+1),V=b+1+h*(y+1),N=b+1+h*y;x.push(P,C,N),x.push(C,V,N)}this.setIndex(x),this.setAttribute("position",new lr(M,3)),this.setAttribute("normal",new lr(E,3)),this.setAttribute("uv",new lr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.widthSegments,e.heightSegments)}}var xC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$C=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KC="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_R=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ER=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$R=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ab=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:xC,alphahash_pars_fragment:SC,alphamap_fragment:MC,alphamap_pars_fragment:EC,alphatest_fragment:TC,alphatest_pars_fragment:wC,aomap_fragment:AC,aomap_pars_fragment:CC,batching_pars_vertex:RC,batching_vertex:bC,begin_vertex:PC,beginnormal_vertex:DC,bsdfs:LC,iridescence_fragment:IC,bumpmap_pars_fragment:UC,clipping_planes_fragment:NC,clipping_planes_pars_fragment:FC,clipping_planes_pars_vertex:OC,clipping_planes_vertex:kC,color_fragment:BC,color_pars_fragment:zC,color_pars_vertex:VC,color_vertex:HC,common:GC,cube_uv_reflection_fragment:WC,defaultnormal_vertex:jC,displacementmap_pars_vertex:XC,displacementmap_vertex:YC,emissivemap_fragment:qC,emissivemap_pars_fragment:$C,colorspace_fragment:KC,colorspace_pars_fragment:ZC,envmap_fragment:QC,envmap_common_pars_fragment:JC,envmap_pars_fragment:eR,envmap_pars_vertex:tR,envmap_physical_pars_fragment:dR,envmap_vertex:nR,fog_vertex:iR,fog_pars_vertex:rR,fog_fragment:sR,fog_pars_fragment:oR,gradientmap_pars_fragment:aR,lightmap_pars_fragment:lR,lights_lambert_fragment:uR,lights_lambert_pars_fragment:cR,lights_pars_begin:fR,lights_toon_fragment:hR,lights_toon_pars_fragment:pR,lights_phong_fragment:mR,lights_phong_pars_fragment:gR,lights_physical_fragment:vR,lights_physical_pars_fragment:_R,lights_fragment_begin:yR,lights_fragment_maps:xR,lights_fragment_end:SR,logdepthbuf_fragment:MR,logdepthbuf_pars_fragment:ER,logdepthbuf_pars_vertex:TR,logdepthbuf_vertex:wR,map_fragment:AR,map_pars_fragment:CR,map_particle_fragment:RR,map_particle_pars_fragment:bR,metalnessmap_fragment:PR,metalnessmap_pars_fragment:DR,morphinstance_vertex:LR,morphcolor_vertex:IR,morphnormal_vertex:UR,morphtarget_pars_vertex:NR,morphtarget_vertex:FR,normal_fragment_begin:OR,normal_fragment_maps:kR,normal_pars_fragment:BR,normal_pars_vertex:zR,normal_vertex:VR,normalmap_pars_fragment:HR,clearcoat_normal_fragment_begin:GR,clearcoat_normal_fragment_maps:WR,clearcoat_pars_fragment:jR,iridescence_pars_fragment:XR,opaque_fragment:YR,packing:qR,premultiplied_alpha_fragment:$R,project_vertex:KR,dithering_fragment:ZR,dithering_pars_fragment:QR,roughnessmap_fragment:JR,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:rb,skinbase_vertex:sb,skinning_pars_vertex:ob,skinning_vertex:ab,skinnormal_vertex:lb,specularmap_fragment:ub,specularmap_pars_fragment:cb,tonemapping_fragment:fb,tonemapping_pars_fragment:db,transmission_fragment:hb,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:gb,uv_vertex:vb,worldpos_vertex:_b,background_vert:yb,background_frag:xb,backgroundCube_vert:Sb,backgroundCube_frag:Mb,cube_vert:Eb,cube_frag:Tb,depth_vert:wb,depth_frag:Ab,distanceRGBA_vert:Cb,distanceRGBA_frag:Rb,equirect_vert:bb,equirect_frag:Pb,linedashed_vert:Db,linedashed_frag:Lb,meshbasic_vert:Ib,meshbasic_frag:Ub,meshlambert_vert:Nb,meshlambert_frag:Fb,meshmatcap_vert:Ob,meshmatcap_frag:kb,meshnormal_vert:Bb,meshnormal_frag:zb,meshphong_vert:Vb,meshphong_frag:Hb,meshphysical_vert:Gb,meshphysical_frag:Wb,meshtoon_vert:jb,meshtoon_frag:Xb,points_vert:Yb,points_frag:qb,shadow_vert:$b,shadow_frag:Kb,sprite_vert:Zb,sprite_frag:Qb},Pe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ii={basic:{uniforms:Pn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Pn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Pn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Pn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Pn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Et(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Pn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Pn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Pn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Pn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Pn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Pn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Pn([Pe.common,Pe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Pn([Pe.lights,Pe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ii.physical={uniforms:Pn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Au={r:0,b:0,g:0},ps=new fr,Jb=new Yt;function e2(n,e,t,r,o,l,u){const c=new Et(0);let d=l===!0?0:1,h,m,g=null,v=0,x=null;function M(b){let P=b.isScene===!0?b.background:null;return P&&P.isTexture&&(P=(b.backgroundBlurriness>0?t:e).get(P)),P}function E(b){let P=!1;const C=M(b);C===null?y(c,d):C&&C.isColor&&(y(C,1),P=!0);const V=n.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,P){const C=M(P);C&&(C.isCubeTexture||C.mapping===ac)?(m===void 0&&(m=new rr(new Za(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Uo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(V,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),ps.copy(P.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.material.uniforms.envMap.value=C,m.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(ps)),m.material.toneMapped=Mt.getTransfer(C.colorSpace)!==Lt,(g!==C||v!==C.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,g=C,v=C.version,x=n.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new rr(new uc(2,2),new dr({name:"BackgroundMaterial",uniforms:Uo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(C.colorSpace)!==Lt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,g=C,v=C.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,P){b.getRGB(Au,Dx(n)),r.buffers.color.setClear(Au.r,Au.g,Au.b,P,u)}return{getClearColor:function(){return c},setClearColor:function(b,P=1){c.set(b),d=P,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(c,d)},render:E,addToRenderList:S}}function t2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(R,H,ce,j,se){let fe=!1;const le=g(j,ce,H);l!==le&&(l=le,h(l.object)),fe=x(R,j,ce,se),fe&&M(R,j,ce,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,C(R,H,ce,j),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function d(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function m(R){return n.deleteVertexArray(R)}function g(R,H,ce){const j=ce.wireframe===!0;let se=r[R.id];se===void 0&&(se={},r[R.id]=se);let fe=se[H.id];fe===void 0&&(fe={},se[H.id]=fe);let le=fe[j];return le===void 0&&(le=v(d()),fe[j]=le),le}function v(R){const H=[],ce=[],j=[];for(let se=0;se<t;se++)H[se]=0,ce[se]=0,j[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ce,attributeDivisors:j,object:R,attributes:{},index:null}}function x(R,H,ce,j){const se=l.attributes,fe=H.attributes;let le=0;const ie=ce.getAttributes();for(const B in ie)if(ie[B].location>=0){const oe=se[B];let O=fe[B];if(O===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),oe===void 0||oe.attribute!==O||O&&oe.data!==O.data)return!0;le++}return l.attributesNum!==le||l.index!==j}function M(R,H,ce,j){const se={},fe=H.attributes;let le=0;const ie=ce.getAttributes();for(const B in ie)if(ie[B].location>=0){let oe=fe[B];oe===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const O={};O.attribute=oe,oe&&oe.data&&(O.data=oe.data),se[B]=O,le++}l.attributes=se,l.attributesNum=le,l.index=j}function E(){const R=l.newAttributes;for(let H=0,ce=R.length;H<ce;H++)R[H]=0}function S(R){y(R,0)}function y(R,H){const ce=l.newAttributes,j=l.enabledAttributes,se=l.attributeDivisors;ce[R]=1,j[R]===0&&(n.enableVertexAttribArray(R),j[R]=1),se[R]!==H&&(n.vertexAttribDivisor(R,H),se[R]=H)}function b(){const R=l.newAttributes,H=l.enabledAttributes;for(let ce=0,j=H.length;ce<j;ce++)H[ce]!==R[ce]&&(n.disableVertexAttribArray(ce),H[ce]=0)}function P(R,H,ce,j,se,fe,le){le===!0?n.vertexAttribIPointer(R,H,ce,se,fe):n.vertexAttribPointer(R,H,ce,j,se,fe)}function C(R,H,ce,j){E();const se=j.attributes,fe=ce.getAttributes(),le=H.defaultAttributeValues;for(const ie in fe){const B=fe[ie];if(B.location>=0){let ue=se[ie];if(ue===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const oe=ue.normalized,O=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Ue=re.buffer,Q=re.type,de=re.bytesPerElement,Te=Q===n.INT||Q===n.UNSIGNED_INT||ue.gpuType===Rp;if(ue.isInterleavedBufferAttribute){const ye=ue.data,Ce=ye.stride,Ne=ue.offset;if(ye.isInstancedInterleavedBuffer){for(let Je=0;Je<B.locationSize;Je++)y(B.location+Je,ye.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Je=0;Je<B.locationSize;Je++)S(B.location+Je);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Je=0;Je<B.locationSize;Je++)P(B.location+Je,O/B.locationSize,Q,oe,Ce*de,(Ne+O/B.locationSize*Je)*de,Te)}else{if(ue.isInstancedBufferAttribute){for(let ye=0;ye<B.locationSize;ye++)y(B.location+ye,ue.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<B.locationSize;ye++)S(B.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let ye=0;ye<B.locationSize;ye++)P(B.location+ye,O/B.locationSize,Q,oe,O*de,O/B.locationSize*ye*de,Te)}}else if(le!==void 0){const oe=le[ie];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(B.location,oe);break;case 3:n.vertexAttrib3fv(B.location,oe);break;case 4:n.vertexAttrib4fv(B.location,oe);break;default:n.vertexAttrib1fv(B.location,oe)}}}}b()}function V(){k();for(const R in r){const H=r[R];for(const ce in H){const j=H[ce];for(const se in j)m(j[se].object),delete j[se];delete H[ce]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const ce in H){const j=H[ce];for(const se in j)m(j[se].object),delete j[se];delete H[ce]}delete r[R.id]}function U(R){for(const H in r){const ce=r[H];if(ce[R.id]===void 0)continue;const j=ce[R.id];for(const se in j)m(j[se].object),delete j[se];delete ce[R.id]}}function k(){D(),u=!0,l!==o&&(l=o,h(l.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:k,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:b}}function n2(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,g){g!==0&&(n.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function c(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,r,1)}function d(h,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*v[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function i2(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==wi&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const k=U===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==cr&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==nr&&!k)}function d(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:V,maxSamples:N}}function r2(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new _s,c=new ut,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||r!==0||o;return o=v,r=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!S)l?m(null):h();else{const b=l?0:r,P=b*4;let C=y.clippingState||null;d.value=C,C=m(M,v,P,x);for(let V=0;V!==P;++V)C[V]=t[V];y.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,v,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const y=x+E*4,b=v.matrixWorldInverse;c.getNormalMatrix(b),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,C=x;P!==E;++P,C+=4)u.copy(g[P]).applyMatrix4(b,c),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function s2(n){let e=new WeakMap;function t(u,c){return c===dh?u.mapping=Po:c===hh&&(u.mapping=Do),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===dh||c===hh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new gC(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class o2 extends Lx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const So=4,t_=[.125,.215,.35,.446,.526,.582],Ss=20,Ld=new o2,n_=new Et;let Id=null,Ud=0,Nd=0,Fd=!1;const ys=(1+Math.sqrt(5))/2,mo=1/ys,i_=[new te(-ys,mo,0),new te(ys,mo,0),new te(-mo,0,ys),new te(mo,0,ys),new te(0,ys,-mo),new te(0,ys,mo),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class r_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Ud,Nd),this._renderer.xr.enabled=Fd,e.scissorTest=!1,Cu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Po||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Xa,format:wi,colorSpace:Oo,depthBuffer:!1},o=s_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a2(l)),this._blurMaterial=l2(l,e,t)}return o}_compileMaterial(e){const t=new rr(this._lodPlanes[0],e);this._renderer.compile(t,Ld)}_sceneToCubeUV(e,t,r,o){const c=new ci(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(n_),m.toneMapping=Wr,m.autoClear=!1;const x=new Rx({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),M=new rr(new Za,x);let E=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,E=!0):(x.color.copy(n_),E=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):b===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const P=this._cubeSize;Cu(o,b*P,y>2?P:0,P,P),m.setRenderTarget(o),E&&m.render(M,c),m.render(e,c)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Po||e.mapping===Do;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=a_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new rr(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;Cu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Ld)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=i_[(o-l-1)%i_.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new rr(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Ss-1),E=l/M,S=isFinite(l)?1+Math.floor(m*E):Ss;S>Ss&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ss}`);const y=[];let b=0;for(let U=0;U<Ss;++U){const k=U/E,D=Math.exp(-k*k/2);y.push(D),U===0?b+=D:U<S&&(b+=2*D)}for(let U=0;U<y.length;U++)y[U]=y[U]/b;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-r;const C=this._sizeLods[o],V=3*C*(o>P-So?o-P+So:0),N=4*(this._cubeSize-C);Cu(t,V,N,3*C,2*C),d.setRenderTarget(t),d.render(g,Ld)}}function a2(n){const e=[],t=[],r=[];let o=n;const l=n-So+1+t_.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-So?d=t_[u-n+So-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,E=3,S=2,y=1,b=new Float32Array(E*M*x),P=new Float32Array(S*M*x),C=new Float32Array(y*M*x);for(let N=0;N<x;N++){const U=N%3*2/3-1,k=N>2?0:-1,D=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];b.set(D,E*M*N),P.set(v,S*M*N);const R=[N,N,N,N,N,N];C.set(R,y*M*N)}const V=new fi;V.setAttribute("position",new Mn(b,E)),V.setAttribute("uv",new Mn(P,S)),V.setAttribute("faceIndex",new Mn(C,y)),e.push(V),o>So&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function s_(n,e,t){const r=new bs(n,e,t);return r.texture.mapping=ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function l2(n,e,t){const r=new Float32Array(Ss),o=new te(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function o_(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function a_(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function u2(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===dh||d===hh,m=d===Po||d===Do;if(h||m){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new r_(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return h&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new r_(n)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",l),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function c2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ba("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function f2(n,e,t,r){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const E=v.morphAttributes[M];for(let S=0,y=E.length;S<y;S++)e.remove(E[S])}v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const M in v)e.update(v[M],n.ARRAY_BUFFER);const x=g.morphAttributes;for(const M in x){const E=x[M];for(let S=0,y=E.length;S<y;S++)e.update(E[S],n.ARRAY_BUFFER)}}function h(g){const v=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const b=x.array;E=x.version;for(let P=0,C=b.length;P<C;P+=3){const V=b[P+0],N=b[P+1],U=b[P+2];v.push(V,N,N,U,U,V)}}else if(M!==void 0){const b=M.array;E=M.version;for(let P=0,C=b.length/3-1;P<C;P+=3){const V=P+0,N=P+1,U=P+2;v.push(V,N,N,U,U,V)}}else return;const S=new(Ex(v)?Px:bx)(v,1);S.version=E;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function m(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:m}}function d2(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,x){n.drawElements(r,x,l,v*u),t.update(x,r,1)}function h(v,x,M){M!==0&&(n.drawElementsInstanced(r,x,l,v*u,M),t.update(x,r,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function g(v,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,E,0,M);let y=0;for(let b=0;b<M;b++)y+=x[b]*E[b];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function h2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function p2(n,e,t){const r=new WeakMap,o=new Kt;function l(u,c,d){const h=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(c);if(v===void 0||v.count!==g){let R=function(){k.dispose(),r.delete(c),c.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let V=c.attributes.position.count*C,N=1;V>e.maxTextureSize&&(N=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*N*4*g),k=new wx(U,V,N,g);k.type=nr,k.needsUpdate=!0;const D=C*4;for(let H=0;H<g;H++){const ce=y[H],j=b[H],se=P[H],fe=V*N*4*H;for(let le=0;le<ce.count;le++){const ie=le*D;M===!0&&(o.fromBufferAttribute(ce,le),U[fe+ie+0]=o.x,U[fe+ie+1]=o.y,U[fe+ie+2]=o.z,U[fe+ie+3]=0),E===!0&&(o.fromBufferAttribute(j,le),U[fe+ie+4]=o.x,U[fe+ie+5]=o.y,U[fe+ie+6]=o.z,U[fe+ie+7]=0),S===!0&&(o.fromBufferAttribute(se,le),U[fe+ie+8]=o.x,U[fe+ie+9]=o.y,U[fe+ie+10]=o.z,U[fe+ie+11]=se.itemSize===4?o.w:1)}}v={count:g,texture:k,size:new Ut(V,N)},r.set(c,v),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function m2(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}class Fx extends Gn{constructor(e,t,r,o,l,u,c,d,h,m=Eo){if(m!==Eo&&m!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Eo&&(r=Rs),r===void 0&&m===Io&&(r=Lo),super(null,o,l,u,c,d,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ai,this.minFilter=d!==void 0?d:Ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ox=new Gn,l_=new Fx(1,1),kx=new wx,Bx=new eC,zx=new Ix,u_=[],c_=[],f_=new Float32Array(16),d_=new Float32Array(9),h_=new Float32Array(4);function zo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=u_[o];if(l===void 0&&(l=new Float32Array(o),u_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function rn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function sn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function cc(n,e){let t=c_[e];t===void 0&&(t=new Int32Array(e),c_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function g2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function v2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2fv(this.addr,e),sn(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;n.uniform3fv(this.addr,e),sn(t,e)}}function y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4fv(this.addr,e),sn(t,e)}}function x2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;h_.set(r),n.uniformMatrix2fv(this.addr,!1,h_),sn(t,r)}}function S2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;d_.set(r),n.uniformMatrix3fv(this.addr,!1,d_),sn(t,r)}}function M2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;f_.set(r),n.uniformMatrix4fv(this.addr,!1,f_),sn(t,r)}}function E2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2iv(this.addr,e),sn(t,e)}}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3iv(this.addr,e),sn(t,e)}}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4iv(this.addr,e),sn(t,e)}}function C2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;n.uniform2uiv(this.addr,e),sn(t,e)}}function b2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;n.uniform3uiv(this.addr,e),sn(t,e)}}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;n.uniform4uiv(this.addr,e),sn(t,e)}}function D2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(l_.compareFunction=Mx,l=l_):l=Ox,t.setTexture2D(e||l,o)}function L2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Bx,o)}function I2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||zx,o)}function U2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||kx,o)}function N2(n){switch(n){case 5126:return g2;case 35664:return v2;case 35665:return _2;case 35666:return y2;case 35674:return x2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return E2;case 35667:case 35671:return T2;case 35668:case 35672:return w2;case 35669:case 35673:return A2;case 5125:return C2;case 36294:return R2;case 36295:return b2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return D2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return U2}}function F2(n,e){n.uniform1fv(this.addr,e)}function O2(n,e){const t=zo(e,this.size,2);n.uniform2fv(this.addr,t)}function k2(n,e){const t=zo(e,this.size,3);n.uniform3fv(this.addr,t)}function B2(n,e){const t=zo(e,this.size,4);n.uniform4fv(this.addr,t)}function z2(n,e){const t=zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V2(n,e){const t=zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H2(n,e){const t=zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function G2(n,e){n.uniform1iv(this.addr,e)}function W2(n,e){n.uniform2iv(this.addr,e)}function j2(n,e){n.uniform3iv(this.addr,e)}function X2(n,e){n.uniform4iv(this.addr,e)}function Y2(n,e){n.uniform1uiv(this.addr,e)}function q2(n,e){n.uniform2uiv(this.addr,e)}function $2(n,e){n.uniform3uiv(this.addr,e)}function K2(n,e){n.uniform4uiv(this.addr,e)}function Z2(n,e,t){const r=this.cache,o=e.length,l=cc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Ox,l[u])}function Q2(n,e,t){const r=this.cache,o=e.length,l=cc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Bx,l[u])}function J2(n,e,t){const r=this.cache,o=e.length,l=cc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||zx,l[u])}function eP(n,e,t){const r=this.cache,o=e.length,l=cc(t,o);rn(r,l)||(n.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||kx,l[u])}function tP(n){switch(n){case 5126:return F2;case 35664:return O2;case 35665:return k2;case 35666:return B2;case 35674:return z2;case 35675:return V2;case 35676:return H2;case 5124:case 35670:return G2;case 35667:case 35671:return W2;case 35668:case 35672:return j2;case 35669:case 35673:return X2;case 5125:return Y2;case 36294:return q2;case 36295:return $2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return J2;case 36289:case 36303:case 36311:case 36292:return eP}}class nP{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=N2(t.type)}}class iP{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tP(t.type)}}class rP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function p_(n,e){n.seq.push(e),n.map[e.id]=e}function sP(n,e,t){const r=n.name,o=r.length;for(Od.lastIndex=0;;){const l=Od.exec(r),u=Od.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){p_(t,h===void 0?new nP(c,n,e):new iP(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new rP(c),p_(t,g)),t=g}}}class Gu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);sP(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function m_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const oP=37297;let aP=0;function lP(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const g_=new ut;function uP(n){Mt._getMatrix(g_,Mt.workingColorSpace,n);const e=`mat3( ${g_.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case lc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function v_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+lP(n.getShaderSource(e),u)}else return o}function cP(n,e){const t=uP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fP(n,e){let t;switch(e){case AA:t="Linear";break;case CA:t="Reinhard";break;case RA:t="Cineon";break;case bA:t="ACESFilmic";break;case DA:t="AgX";break;case LA:t="Neutral";break;case PA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ru=new te;function dP(){Mt.getLuminanceCoefficients(Ru);const n=Ru.x.toFixed(4),e=Ru.y.toFixed(4),t=Ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function pP(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function mP(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Pa(n){return n!==""}function __(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(n){return n.replace(gP,_P)}const vP=new Map;function _P(n,e){let t=ct[e];if(t===void 0){const r=vP.get(e);if(r!==void 0)t=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gh(t)}const yP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(n){return n.replace(yP,xP)}function xP(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function S_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function MP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Po:case Do:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Do:e="ENVMAP_MODE_REFRACTION";break}return e}function TP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cx:e="ENVMAP_BLENDING_MULTIPLY";break;case TA:e="ENVMAP_BLENDING_MIX";break;case wA:e="ENVMAP_BLENDING_ADD";break}return e}function wP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function AP(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=SP(t),h=MP(t),m=EP(t),g=TP(t),v=wP(t),x=hP(t),M=pP(l),E=o.createProgram();let S,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Pa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Pa).join(`
`),y.length>0&&(y+=`
`)):(S=[S_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),y=[S_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Wr?fP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,cP("linearToOutputTexel",t.outputColorSpace),dP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),u=Gh(u),u=__(u,t),u=y_(u,t),c=Gh(c),c=__(c,t),c=y_(c,t),u=x_(u),c=x_(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=b+S+u,C=b+y+c,V=m_(o,o.VERTEX_SHADER,P),N=m_(o,o.FRAGMENT_SHADER,C);o.attachShader(E,V),o.attachShader(E,N),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(H){if(n.debug.checkShaderErrors){const ce=o.getProgramInfoLog(E).trim(),j=o.getShaderInfoLog(V).trim(),se=o.getShaderInfoLog(N).trim();let fe=!0,le=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,V,N);else{const ie=v_(o,V,"vertex"),B=v_(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ce+`
`+ie+`
`+B)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(j===""||se==="")&&(le=!1);le&&(H.diagnostics={runnable:fe,programLog:ce,vertexShader:{log:j,prefix:S},fragmentShader:{log:se,prefix:y}})}o.deleteShader(V),o.deleteShader(N),k=new Gu(o,E),D=mP(o,E)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let D;this.getAttributes=function(){return D===void 0&&U(this),D};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(E,oP)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aP++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=N,this}let CP=0;class RP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new bP(e),t.set(e,r)),r}}class bP{constructor(e){this.id=CP++,this.code=e,this.usedTimes=0}}function PP(n,e,t,r,o,l,u){const c=new Ax,d=new RP,h=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return h.add(D),D===0?"uv":`uv${D}`}function S(D,R,H,ce,j){const se=ce.fog,fe=j.geometry,le=D.isMeshStandardMaterial?ce.environment:null,ie=(D.isMeshStandardMaterial?t:e).get(D.envMap||le),B=ie&&ie.mapping===ac?ie.image.height:null,ue=M[D.type];D.precision!==null&&(x=o.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const oe=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,O=oe!==void 0?oe.length:0;let re=0;fe.morphAttributes.position!==void 0&&(re=1),fe.morphAttributes.normal!==void 0&&(re=2),fe.morphAttributes.color!==void 0&&(re=3);let Ue,Q,de,Te;if(ue){const xt=Ii[ue];Ue=xt.vertexShader,Q=xt.fragmentShader}else Ue=D.vertexShader,Q=D.fragmentShader,d.update(D),de=d.getVertexShaderID(D),Te=d.getFragmentShaderID(D);const ye=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Ne=j.isInstancedMesh===!0,Je=j.isBatchedMesh===!0,Dt=!!D.map,gt=!!D.matcap,Nt=!!ie,q=!!D.aoMap,wn=!!D.lightMap,mt=!!D.bumpMap,dt=!!D.normalMap,Ke=!!D.displacementMap,bt=!!D.emissiveMap,$e=!!D.metalnessMap,L=!!D.roughnessMap,w=D.anisotropy>0,Z=D.clearcoat>0,me=D.dispersion>0,ve=D.iridescence>0,he=D.sheen>0,We=D.transmission>0,Re=w&&!!D.anisotropyMap,Fe=Z&&!!D.clearcoatMap,ft=Z&&!!D.clearcoatNormalMap,Me=Z&&!!D.clearcoatRoughnessMap,ke=ve&&!!D.iridescenceMap,et=ve&&!!D.iridescenceThicknessMap,nt=he&&!!D.sheenColorMap,Be=he&&!!D.sheenRoughnessMap,ht=!!D.specularMap,ot=!!D.specularColorMap,Ct=!!D.specularIntensityMap,W=We&&!!D.transmissionMap,be=We&&!!D.thicknessMap,ae=!!D.gradientMap,pe=!!D.alphaMap,Le=D.alphaTest>0,De=!!D.alphaHash,at=!!D.extensions;let Ot=Wr;D.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const Jt={shaderID:ue,shaderType:D.type,shaderName:D.name,vertexShader:Ue,fragmentShader:Q,defines:D.defines,customVertexShaderID:de,customFragmentShaderID:Te,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:Je,batchingColor:Je&&j._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&j.instanceColor!==null,instancingMorph:Ne&&j.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Oo,alphaToCoverage:!!D.alphaToCoverage,map:Dt,matcap:gt,envMap:Nt,envMapMode:Nt&&ie.mapping,envMapCubeUVHeight:B,aoMap:q,lightMap:wn,bumpMap:mt,normalMap:dt,displacementMap:v&&Ke,emissiveMap:bt,normalMapObjectSpace:dt&&D.normalMapType===OA,normalMapTangentSpace:dt&&D.normalMapType===FA,metalnessMap:$e,roughnessMap:L,anisotropy:w,anisotropyMap:Re,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:ft,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:ke,iridescenceThicknessMap:et,sheen:he,sheenColorMap:nt,sheenRoughnessMap:Be,specularMap:ht,specularColorMap:ot,specularIntensityMap:Ct,transmission:We,transmissionMap:W,thicknessMap:be,gradientMap:ae,opaque:D.transparent===!1&&D.blending===Mo&&D.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:De,combine:D.combine,mapUv:Dt&&E(D.map.channel),aoMapUv:q&&E(D.aoMap.channel),lightMapUv:wn&&E(D.lightMap.channel),bumpMapUv:mt&&E(D.bumpMap.channel),normalMapUv:dt&&E(D.normalMap.channel),displacementMapUv:Ke&&E(D.displacementMap.channel),emissiveMapUv:bt&&E(D.emissiveMap.channel),metalnessMapUv:$e&&E(D.metalnessMap.channel),roughnessMapUv:L&&E(D.roughnessMap.channel),anisotropyMapUv:Re&&E(D.anisotropyMap.channel),clearcoatMapUv:Fe&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:ft&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:et&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(D.sheenRoughnessMap.channel),specularMapUv:ht&&E(D.specularMap.channel),specularColorMapUv:ot&&E(D.specularColorMap.channel),specularIntensityMapUv:Ct&&E(D.specularIntensityMap.channel),transmissionMapUv:W&&E(D.transmissionMap.channel),thicknessMapUv:be&&E(D.thicknessMap.channel),alphaMapUv:pe&&E(D.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(dt||w),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!fe.attributes.uv&&(Dt||pe),fog:!!se,useFog:D.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ce,skinning:j.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Dt&&D.map.isVideoTexture===!0&&Mt.getTransfer(D.map.colorSpace)===Lt,decodeVideoTextureEmissive:bt&&D.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(D.emissiveMap.colorSpace)===Lt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===tr,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:at&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&D.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Jt.vertexUv1s=h.has(1),Jt.vertexUv2s=h.has(2),Jt.vertexUv3s=h.has(3),h.clear(),Jt}function y(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)R.push(H),R.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(b(R,D),P(R,D),R.push(n.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function b(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function P(D,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),D.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),D.push(c.mask)}function C(D){const R=M[D.type];let H;if(R){const ce=Ii[R];H=dC.clone(ce.uniforms)}else H=D.uniforms;return H}function V(D,R){let H;for(let ce=0,j=m.length;ce<j;ce++){const se=m[ce];if(se.cacheKey===R){H=se,++H.usedTimes;break}}return H===void 0&&(H=new AP(n,R,D,l),m.push(H)),H}function N(D){if(--D.usedTimes===0){const R=m.indexOf(D);m[R]=m[m.length-1],m.pop(),D.destroy()}}function U(D){d.remove(D)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:C,acquireProgram:V,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:k}}function DP(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function LP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function M_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function E_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,x,M,E,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function c(g,v,x,M,E,S){const y=u(g,v,x,M,E,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(g,v,x,M,E,S){const y=u(g,v,x,M,E,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||LP),r.length>1&&r.sort(v||M_),o.length>1&&o.sort(v||M_)}function m(){for(let g=e,v=n.length;g<v;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:m,sort:h}}function IP(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new E_,n.set(r,[u])):o>=l.length?(u=new E_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function UP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Et};break;case"SpotLight":t={position:new te,direction:new te,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new te,halfWidth:new te,halfHeight:new te};break}return n[e.id]=t,t}}}function NP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let FP=0;function OP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kP(n){const e=new UP,t=NP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,l=new Yt,u=new Yt;function c(h){let m=0,g=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,b=0,P=0,C=0,V=0,N=0,U=0;h.sort(OP);for(let D=0,R=h.length;D<R;D++){const H=h[D],ce=H.color,j=H.intensity,se=H.distance,fe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=ce.r*j,g+=ce.g*j,v+=ce.b*j;else if(H.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(H.sh.coefficients[le],j);U++}else if(H.isDirectionalLight){const le=e.get(H);if(le.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ie=H.shadow,B=t.get(H);B.shadowIntensity=ie.intensity,B.shadowBias=ie.bias,B.shadowNormalBias=ie.normalBias,B.shadowRadius=ie.radius,B.shadowMapSize=ie.mapSize,r.directionalShadow[x]=B,r.directionalShadowMap[x]=fe,r.directionalShadowMatrix[x]=H.shadow.matrix,b++}r.directional[x]=le,x++}else if(H.isSpotLight){const le=e.get(H);le.position.setFromMatrixPosition(H.matrixWorld),le.color.copy(ce).multiplyScalar(j),le.distance=se,le.coneCos=Math.cos(H.angle),le.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),le.decay=H.decay,r.spot[E]=le;const ie=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,ie.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[E]=ie.matrix,H.castShadow){const B=t.get(H);B.shadowIntensity=ie.intensity,B.shadowBias=ie.bias,B.shadowNormalBias=ie.normalBias,B.shadowRadius=ie.radius,B.shadowMapSize=ie.mapSize,r.spotShadow[E]=B,r.spotShadowMap[E]=fe,C++}E++}else if(H.isRectAreaLight){const le=e.get(H);le.color.copy(ce).multiplyScalar(j),le.halfWidth.set(H.width*.5,0,0),le.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=le,S++}else if(H.isPointLight){const le=e.get(H);if(le.color.copy(H.color).multiplyScalar(H.intensity),le.distance=H.distance,le.decay=H.decay,H.castShadow){const ie=H.shadow,B=t.get(H);B.shadowIntensity=ie.intensity,B.shadowBias=ie.bias,B.shadowNormalBias=ie.normalBias,B.shadowRadius=ie.radius,B.shadowMapSize=ie.mapSize,B.shadowCameraNear=ie.camera.near,B.shadowCameraFar=ie.camera.far,r.pointShadow[M]=B,r.pointShadowMap[M]=fe,r.pointShadowMatrix[M]=H.shadow.matrix,P++}r.point[M]=le,M++}else if(H.isHemisphereLight){const le=e.get(H);le.skyColor.copy(H.color).multiplyScalar(j),le.groundColor.copy(H.groundColor).multiplyScalar(j),r.hemi[y]=le,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==x||k.pointLength!==M||k.spotLength!==E||k.rectAreaLength!==S||k.hemiLength!==y||k.numDirectionalShadows!==b||k.numPointShadows!==P||k.numSpotShadows!==C||k.numSpotMaps!==V||k.numLightProbes!==U)&&(r.directional.length=x,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+V-N,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=U,k.directionalLength=x,k.pointLength=M,k.spotLength=E,k.rectAreaLength=S,k.hemiLength=y,k.numDirectionalShadows=b,k.numPointShadows=P,k.numSpotShadows=C,k.numSpotMaps=V,k.numLightProbes=U,r.version=FP++)}function d(h,m){let g=0,v=0,x=0,M=0,E=0;const S=m.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){const P=h[y];if(P.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),g++}else if(P.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(P.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const C=r.hemi[E];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:c,setupView:d,state:r}}function T_(n){const e=new kP(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function BP(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new T_(n),e.set(o,[c])):l>=u.length?(c=new T_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}class zP extends Bo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=UA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VP extends Bo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WP(n,e,t){let r=new Ux;const o=new Ut,l=new Ut,u=new Kt,c=new zP({depthPacking:NA}),d=new VP,h={},m=t.maxTextureSize,g={[Yr]:Hn,[Hn]:Yr,[tr]:tr},v=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:HP,fragmentShader:GP}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new fi;M.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new rr(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ux;let y=this.type;this.render=function(N,U,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const D=n.getRenderTarget(),R=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),ce=n.state;ce.setBlending(Gr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const j=y!==er&&this.type===er,se=y===er&&this.type!==er;for(let fe=0,le=N.length;fe<le;fe++){const ie=N[fe],B=ie.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ue=B.getFrameExtents();if(o.multiply(ue),l.copy(B.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ue.x),o.x=l.x*ue.x,B.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ue.y),o.y=l.y*ue.y,B.mapSize.y=l.y)),B.map===null||j===!0||se===!0){const O=this.type!==er?{minFilter:Ai,magFilter:Ai}:{};B.map!==null&&B.map.dispose(),B.map=new bs(o.x,o.y,O),B.map.texture.name=ie.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const oe=B.getViewportCount();for(let O=0;O<oe;O++){const re=B.getViewport(O);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ce.viewport(u),B.updateMatrices(ie,O),r=B.getFrustum(),C(U,k,B.camera,ie,this.type)}B.isPointLightShadow!==!0&&this.type===er&&b(B,k),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(D,R,H)};function b(N,U){const k=e.update(E);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new bs(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(U,null,k,v,E,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(U,null,k,x,E,null)}function P(N,U,k,D){let R=null;const H=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)R=H;else if(R=k.isPointLight===!0?d:c,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ce=R.uuid,j=U.uuid;let se=h[ce];se===void 0&&(se={},h[ce]=se);let fe=se[j];fe===void 0&&(fe=R.clone(),se[j]=fe,U.addEventListener("dispose",V)),R=fe}if(R.visible=U.visible,R.wireframe=U.wireframe,D===er?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ce=n.properties.get(R);ce.light=k}return R}function C(N,U,k,D,R){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===er)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const j=e.update(N),se=N.material;if(Array.isArray(se)){const fe=j.groups;for(let le=0,ie=fe.length;le<ie;le++){const B=fe[le],ue=se[B.materialIndex];if(ue&&ue.visible){const oe=P(N,ue,D,R);N.onBeforeShadow(n,N,U,k,j,oe,B),n.renderBufferDirect(k,null,j,oe,N,B),N.onAfterShadow(n,N,U,k,j,oe,B)}}}else if(se.visible){const fe=P(N,se,D,R);N.onBeforeShadow(n,N,U,k,j,fe,null),n.renderBufferDirect(k,null,j,fe,N,null),N.onAfterShadow(n,N,U,k,j,fe,null)}}const ce=N.children;for(let j=0,se=ce.length;j<se;j++)C(ce[j],U,k,D,R)}function V(N){N.target.removeEventListener("dispose",V);for(const k in h){const D=h[k],R=N.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const jP={[sh]:oh,[ah]:ch,[lh]:fh,[bo]:uh,[oh]:sh,[ch]:ah,[fh]:lh,[uh]:bo};function XP(n,e){function t(){let W=!1;const be=new Kt;let ae=null;const pe=new Kt(0,0,0,0);return{setMask:function(Le){ae!==Le&&!W&&(n.colorMask(Le,Le,Le,Le),ae=Le)},setLocked:function(Le){W=Le},setClear:function(Le,De,at,Ot,Jt){Jt===!0&&(Le*=Ot,De*=Ot,at*=Ot),be.set(Le,De,at,Ot),pe.equals(be)===!1&&(n.clearColor(Le,De,at,Ot),pe.copy(be))},reset:function(){W=!1,ae=null,pe.set(-1,0,0,0)}}}function r(){let W=!1,be=!1,ae=null,pe=null,Le=null;return{setReversed:function(De){if(be!==De){const at=e.get("EXT_clip_control");be?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Ot=Le;Le=null,this.setClear(Ot)}be=De},getReversed:function(){return be},setTest:function(De){De?ye(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(De){ae!==De&&!W&&(n.depthMask(De),ae=De)},setFunc:function(De){if(be&&(De=jP[De]),pe!==De){switch(De){case sh:n.depthFunc(n.NEVER);break;case oh:n.depthFunc(n.ALWAYS);break;case ah:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case lh:n.depthFunc(n.EQUAL);break;case uh:n.depthFunc(n.GEQUAL);break;case ch:n.depthFunc(n.GREATER);break;case fh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=De}},setLocked:function(De){W=De},setClear:function(De){Le!==De&&(be&&(De=1-De),n.clearDepth(De),Le=De)},reset:function(){W=!1,ae=null,pe=null,Le=null,be=!1}}}function o(){let W=!1,be=null,ae=null,pe=null,Le=null,De=null,at=null,Ot=null,Jt=null;return{setTest:function(xt){W||(xt?ye(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(xt){be!==xt&&!W&&(n.stencilMask(xt),be=xt)},setFunc:function(xt,Ln,An){(ae!==xt||pe!==Ln||Le!==An)&&(n.stencilFunc(xt,Ln,An),ae=xt,pe=Ln,Le=An)},setOp:function(xt,Ln,An){(De!==xt||at!==Ln||Ot!==An)&&(n.stencilOp(xt,Ln,An),De=xt,at=Ln,Ot=An)},setLocked:function(xt){W=xt},setClear:function(xt){Jt!==xt&&(n.clearStencil(xt),Jt=xt)},reset:function(){W=!1,be=null,ae=null,pe=null,Le=null,De=null,at=null,Ot=null,Jt=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,b=null,P=null,C=null,V=null,N=null,U=new Et(0,0,0),k=0,D=!1,R=null,H=null,ce=null,j=null,se=null;const fe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ie=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(B)[1]),le=ie>=1):B.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),le=ie>=2);let ue=null,oe={};const O=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Ue=new Kt().fromArray(O),Q=new Kt().fromArray(re);function de(W,be,ae,pe){const Le=new Uint8Array(4),De=n.createTexture();n.bindTexture(W,De),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<ae;at++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(be+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return De}const Te={};Te[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ye(n.DEPTH_TEST),u.setFunc(bo),mt(!1),dt(Rv),ye(n.CULL_FACE),q(Gr);function ye(W){m[W]!==!0&&(n.enable(W),m[W]=!0)}function Ce(W){m[W]!==!1&&(n.disable(W),m[W]=!1)}function Ne(W,be){return g[W]!==be?(n.bindFramebuffer(W,be),g[W]=be,W===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=be),W===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Je(W,be){let ae=x,pe=!1;if(W){ae=v.get(be),ae===void 0&&(ae=[],v.set(be,ae));const Le=W.textures;if(ae.length!==Le.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let De=0,at=Le.length;De<at;De++)ae[De]=n.COLOR_ATTACHMENT0+De;ae.length=Le.length,pe=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ae)}function Dt(W){return M!==W?(n.useProgram(W),M=W,!0):!1}const gt={[xs]:n.FUNC_ADD,[aA]:n.FUNC_SUBTRACT,[lA]:n.FUNC_REVERSE_SUBTRACT};gt[uA]=n.MIN,gt[cA]=n.MAX;const Nt={[fA]:n.ZERO,[dA]:n.ONE,[hA]:n.SRC_COLOR,[ih]:n.SRC_ALPHA,[yA]:n.SRC_ALPHA_SATURATE,[vA]:n.DST_COLOR,[mA]:n.DST_ALPHA,[pA]:n.ONE_MINUS_SRC_COLOR,[rh]:n.ONE_MINUS_SRC_ALPHA,[_A]:n.ONE_MINUS_DST_COLOR,[gA]:n.ONE_MINUS_DST_ALPHA,[xA]:n.CONSTANT_COLOR,[SA]:n.ONE_MINUS_CONSTANT_COLOR,[MA]:n.CONSTANT_ALPHA,[EA]:n.ONE_MINUS_CONSTANT_ALPHA};function q(W,be,ae,pe,Le,De,at,Ot,Jt,xt){if(W===Gr){E===!0&&(Ce(n.BLEND),E=!1);return}if(E===!1&&(ye(n.BLEND),E=!0),W!==oA){if(W!==S||xt!==D){if((y!==xs||C!==xs)&&(n.blendEquation(n.FUNC_ADD),y=xs,C=xs),xt)switch(W){case Mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bv:n.blendFunc(n.ONE,n.ONE);break;case Pv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}b=null,P=null,V=null,N=null,U.set(0,0,0),k=0,S=W,D=xt}return}Le=Le||be,De=De||ae,at=at||pe,(be!==y||Le!==C)&&(n.blendEquationSeparate(gt[be],gt[Le]),y=be,C=Le),(ae!==b||pe!==P||De!==V||at!==N)&&(n.blendFuncSeparate(Nt[ae],Nt[pe],Nt[De],Nt[at]),b=ae,P=pe,V=De,N=at),(Ot.equals(U)===!1||Jt!==k)&&(n.blendColor(Ot.r,Ot.g,Ot.b,Jt),U.copy(Ot),k=Jt),S=W,D=!1}function wn(W,be){W.side===tr?Ce(n.CULL_FACE):ye(n.CULL_FACE);let ae=W.side===Hn;be&&(ae=!ae),mt(ae),W.blending===Mo&&W.transparent===!1?q(Gr):q(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const pe=W.stencilWrite;c.setTest(pe),pe&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),bt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){R!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),R=W)}function dt(W){W!==iA?(ye(n.CULL_FACE),W!==H&&(W===Rv?n.cullFace(n.BACK):W===rA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),H=W}function Ke(W){W!==ce&&(le&&n.lineWidth(W),ce=W)}function bt(W,be,ae){W?(ye(n.POLYGON_OFFSET_FILL),(j!==be||se!==ae)&&(n.polygonOffset(be,ae),j=be,se=ae)):Ce(n.POLYGON_OFFSET_FILL)}function $e(W){W?ye(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function L(W){W===void 0&&(W=n.TEXTURE0+fe-1),ue!==W&&(n.activeTexture(W),ue=W)}function w(W,be,ae){ae===void 0&&(ue===null?ae=n.TEXTURE0+fe-1:ae=ue);let pe=oe[ae];pe===void 0&&(pe={type:void 0,texture:void 0},oe[ae]=pe),(pe.type!==W||pe.texture!==be)&&(ue!==ae&&(n.activeTexture(ae),ue=ae),n.bindTexture(W,be||Te[W]),pe.type=W,pe.texture=be)}function Z(){const W=oe[ue];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){Ue.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Ue.copy(W))}function Be(W){Q.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function ht(W,be){let ae=h.get(be);ae===void 0&&(ae=new WeakMap,h.set(be,ae));let pe=ae.get(W);pe===void 0&&(pe=n.getUniformBlockIndex(be,W.name),ae.set(W,pe))}function ot(W,be){const pe=h.get(be).get(W);d.get(be)!==pe&&(n.uniformBlockBinding(be,pe,W.__bindingPointIndex),d.set(be,pe))}function Ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},ue=null,oe={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,b=null,P=null,C=null,V=null,N=null,U=new Et(0,0,0),k=0,D=!1,R=null,H=null,ce=null,j=null,se=null,Ue.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:ye,disable:Ce,bindFramebuffer:Ne,drawBuffers:Je,useProgram:Dt,setBlending:q,setMaterial:wn,setFlipSided:mt,setCullFace:dt,setLineWidth:Ke,setPolygonOffset:bt,setScissorTest:$e,activeTexture:L,bindTexture:w,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:ke,texImage3D:et,updateUBOMapping:ht,uniformBlockBinding:ot,texStorage2D:ft,texStorage3D:Me,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:Re,compressedTexSubImage3D:Fe,scissor:nt,viewport:Be,reset:Ct}}function w_(n,e,t,r){const o=YP(r);switch(t){case mx:return n*e;case vx:return n*e;case _x:return n*e*2;case yx:return n*e/o.components*o.byteLength;case Dp:return n*e/o.components*o.byteLength;case xx:return n*e*2/o.components*o.byteLength;case Lp:return n*e*2/o.components*o.byteLength;case gx:return n*e*3/o.components*o.byteLength;case wi:return n*e*4/o.components*o.byteLength;case Ip:return n*e*4/o.components*o.byteLength;case ku:case Bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zu:case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vh:case yh:return Math.max(n,16)*Math.max(e,8)/4;case gh:case _h:return Math.max(n,8)*Math.max(e,8)/2;case xh:case Sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hu:case Oh:case kh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sx:case Bh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zh:case Vh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function YP(n){switch(n){case cr:case dx:return{byteLength:1,components:1};case Va:case hx:case Xa:return{byteLength:2,components:1};case bp:case Pp:return{byteLength:2,components:4};case Rs:case Rp:case nr:return{byteLength:4,components:1};case px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function qP(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ut,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return x?new OffscreenCanvas(L,w):Qu("canvas")}function E(L,w,Z){let me=1;const ve=$e(L);if((ve.width>Z||ve.height>Z)&&(me=Z/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(me*ve.width),We=Math.floor(me*ve.height);g===void 0&&(g=M(he,We));const Re=w?M(he,We):g;return Re.width=he,Re.height=We,Re.getContext("2d").drawImage(L,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+We+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(L,w,Z,me,ve=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=w;if(w===n.RED&&(Z===n.FLOAT&&(he=n.R32F),Z===n.HALF_FLOAT&&(he=n.R16F),Z===n.UNSIGNED_BYTE&&(he=n.R8)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.R8UI),Z===n.UNSIGNED_SHORT&&(he=n.R16UI),Z===n.UNSIGNED_INT&&(he=n.R32UI),Z===n.BYTE&&(he=n.R8I),Z===n.SHORT&&(he=n.R16I),Z===n.INT&&(he=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(he=n.RG32F),Z===n.HALF_FLOAT&&(he=n.RG16F),Z===n.UNSIGNED_BYTE&&(he=n.RG8)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.RG8UI),Z===n.UNSIGNED_SHORT&&(he=n.RG16UI),Z===n.UNSIGNED_INT&&(he=n.RG32UI),Z===n.BYTE&&(he=n.RG8I),Z===n.SHORT&&(he=n.RG16I),Z===n.INT&&(he=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(he=n.RGB16UI),Z===n.UNSIGNED_INT&&(he=n.RGB32UI),Z===n.BYTE&&(he=n.RGB8I),Z===n.SHORT&&(he=n.RGB16I),Z===n.INT&&(he=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(he=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(he=n.RGBA16UI),Z===n.UNSIGNED_INT&&(he=n.RGBA32UI),Z===n.BYTE&&(he=n.RGBA8I),Z===n.SHORT&&(he=n.RGBA16I),Z===n.INT&&(he=n.RGBA32I)),w===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(he=n.RGB9_E5),w===n.RGBA){const We=ve?lc:Mt.getTransfer(me);Z===n.FLOAT&&(he=n.RGBA32F),Z===n.HALF_FLOAT&&(he=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(he=We===Lt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(he=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(he=n.RGB5_A1)}return(he===n.R16F||he===n.R32F||he===n.RG16F||he===n.RG32F||he===n.RGBA16F||he===n.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(L,w){let Z;return L?w===null||w===Rs||w===Lo?Z=n.DEPTH24_STENCIL8:w===nr?Z=n.DEPTH32F_STENCIL8:w===Va&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Rs||w===Lo?Z=n.DEPTH_COMPONENT24:w===nr?Z=n.DEPTH_COMPONENT32F:w===Va&&(Z=n.DEPTH_COMPONENT16),Z}function V(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ai&&L.minFilter!==Ui?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function N(L){const w=L.target;w.removeEventListener("dispose",N),k(w),w.isVideoTexture&&m.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),R(w)}function k(L){const w=r.get(L);if(w.__webglInit===void 0)return;const Z=L.source,me=v.get(Z);if(me){const ve=me[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&D(L),Object.keys(me).length===0&&v.delete(Z)}r.remove(L)}function D(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const Z=L.source,me=v.get(Z);delete me[w.__cacheKey],u.memory.textures--}function R(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ve=0;ve<w.__webglFramebuffer[me].length;ve++)n.deleteFramebuffer(w.__webglFramebuffer[me][ve]);else n.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)n.deleteFramebuffer(w.__webglFramebuffer[me]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=L.textures;for(let me=0,ve=Z.length;me<ve;me++){const he=r.get(Z[me]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),u.memory.textures--),r.remove(Z[me])}r.remove(L)}let H=0;function ce(){H=0}function j(){const L=H;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),H+=1,L}function se(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function fe(L,w){const Z=r.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,L,w);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function le(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function ie(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function B(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){de(Z,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}const ue={[ph]:n.REPEAT,[Ts]:n.CLAMP_TO_EDGE,[mh]:n.MIRRORED_REPEAT},oe={[Ai]:n.NEAREST,[IA]:n.NEAREST_MIPMAP_NEAREST,[lu]:n.NEAREST_MIPMAP_LINEAR,[Ui]:n.LINEAR,[ud]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},O={[kA]:n.NEVER,[WA]:n.ALWAYS,[BA]:n.LESS,[Mx]:n.LEQUAL,[zA]:n.EQUAL,[GA]:n.GEQUAL,[VA]:n.GREATER,[HA]:n.NOTEQUAL};function re(L,w){if(w.type===nr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ui||w.magFilter===ud||w.magFilter===lu||w.magFilter===ws||w.minFilter===Ui||w.minFilter===ud||w.minFilter===lu||w.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ue[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ue[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ue[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,oe[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ai||w.minFilter!==lu&&w.minFilter!==ws||w.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(L,w){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",N));const me=w.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const he=se(w);if(he!==L.__cacheKey){ve[he]===void 0&&(ve[he]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ve[he].usedTimes++;const We=ve[L.__cacheKey];We!==void 0&&(ve[L.__cacheKey].usedTimes--,We.usedTimes===0&&D(w)),L.__cacheKey=he,L.__webglTexture=ve[he].texture}return Z}function Q(L,w,Z){let me=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=n.TEXTURE_3D);const ve=Ue(L,w),he=w.source;t.bindTexture(me,L.__webglTexture,n.TEXTURE0+Z);const We=r.get(he);if(he.version!==We.__version||ve===!0){t.activeTexture(n.TEXTURE0+Z);const Re=Mt.getPrimaries(Mt.workingColorSpace),Fe=w.colorSpace===Vr?null:Mt.getPrimaries(w.colorSpace),ft=w.colorSpace===Vr||Re===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=E(w.image,!1,o.maxTextureSize);Me=bt(w,Me);const ke=l.convert(w.format,w.colorSpace),et=l.convert(w.type);let nt=P(w.internalFormat,ke,et,w.colorSpace,w.isVideoTexture);re(me,w);let Be;const ht=w.mipmaps,ot=w.isVideoTexture!==!0,Ct=We.__version===void 0||ve===!0,W=he.dataReady,be=V(w,Me);if(w.isDepthTexture)nt=C(w.format===Io,w.type),Ct&&(ot?t.texStorage2D(n.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,nt,Me.width,Me.height,0,ke,et,null));else if(w.isDataTexture)if(ht.length>0){ot&&Ct&&t.texStorage2D(n.TEXTURE_2D,be,nt,ht[0].width,ht[0].height);for(let ae=0,pe=ht.length;ae<pe;ae++)Be=ht[ae],ot?W&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,et,Be.data):t.texImage2D(n.TEXTURE_2D,ae,nt,Be.width,Be.height,0,ke,et,Be.data);w.generateMipmaps=!1}else ot?(Ct&&t.texStorage2D(n.TEXTURE_2D,be,nt,Me.width,Me.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,ke,et,Me.data)):t.texImage2D(n.TEXTURE_2D,0,nt,Me.width,Me.height,0,ke,et,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ot&&Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,nt,ht[0].width,ht[0].height,Me.depth);for(let ae=0,pe=ht.length;ae<pe;ae++)if(Be=ht[ae],w.format!==wi)if(ke!==null)if(ot){if(W)if(w.layerUpdates.size>0){const Le=w_(Be.width,Be.height,w.format,w.type);for(const De of w.layerUpdates){const at=Be.data.subarray(De*Le/Be.data.BYTES_PER_ELEMENT,(De+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,De,Be.width,Be.height,1,ke,at)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Me.depth,ke,Be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,nt,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Me.depth,ke,et,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,nt,Be.width,Be.height,Me.depth,0,ke,et,Be.data)}else{ot&&Ct&&t.texStorage2D(n.TEXTURE_2D,be,nt,ht[0].width,ht[0].height);for(let ae=0,pe=ht.length;ae<pe;ae++)Be=ht[ae],w.format!==wi?ke!==null?ot?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,nt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?W&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,et,Be.data):t.texImage2D(n.TEXTURE_2D,ae,nt,Be.width,Be.height,0,ke,et,Be.data)}else if(w.isDataArrayTexture)if(ot){if(Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,nt,Me.width,Me.height,Me.depth),W)if(w.layerUpdates.size>0){const ae=w_(Me.width,Me.height,w.format,w.type);for(const pe of w.layerUpdates){const Le=Me.data.subarray(pe*ae/Me.data.BYTES_PER_ELEMENT,(pe+1)*ae/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,ke,et,Le)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,et,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,ke,et,Me.data);else if(w.isData3DTexture)ot?(Ct&&t.texStorage3D(n.TEXTURE_3D,be,nt,Me.width,Me.height,Me.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,et,Me.data)):t.texImage3D(n.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,ke,et,Me.data);else if(w.isFramebufferTexture){if(Ct)if(ot)t.texStorage2D(n.TEXTURE_2D,be,nt,Me.width,Me.height);else{let ae=Me.width,pe=Me.height;for(let Le=0;Le<be;Le++)t.texImage2D(n.TEXTURE_2D,Le,nt,ae,pe,0,ke,et,null),ae>>=1,pe>>=1}}else if(ht.length>0){if(ot&&Ct){const ae=$e(ht[0]);t.texStorage2D(n.TEXTURE_2D,be,nt,ae.width,ae.height)}for(let ae=0,pe=ht.length;ae<pe;ae++)Be=ht[ae],ot?W&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ke,et,Be):t.texImage2D(n.TEXTURE_2D,ae,nt,ke,et,Be);w.generateMipmaps=!1}else if(ot){if(Ct){const ae=$e(Me);t.texStorage2D(n.TEXTURE_2D,be,nt,ae.width,ae.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,et,Me)}else t.texImage2D(n.TEXTURE_2D,0,nt,ke,et,Me);S(w)&&y(me),We.__version=he.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,Z){if(w.image.length!==6)return;const me=Ue(L,w),ve=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);const he=r.get(ve);if(ve.version!==he.__version||me===!0){t.activeTexture(n.TEXTURE0+Z);const We=Mt.getPrimaries(Mt.workingColorSpace),Re=w.colorSpace===Vr?null:Mt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Vr||We===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ft&&!Me?ke[pe]=E(w.image[pe],!0,o.maxCubemapSize):ke[pe]=Me?w.image[pe].image:w.image[pe],ke[pe]=bt(w,ke[pe]);const et=ke[0],nt=l.convert(w.format,w.colorSpace),Be=l.convert(w.type),ht=P(w.internalFormat,nt,Be,w.colorSpace),ot=w.isVideoTexture!==!0,Ct=he.__version===void 0||me===!0,W=ve.dataReady;let be=V(w,et);re(n.TEXTURE_CUBE_MAP,w);let ae;if(ft){ot&&Ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ht,et.width,et.height);for(let pe=0;pe<6;pe++){ae=ke[pe].mipmaps;for(let Le=0;Le<ae.length;Le++){const De=ae[Le];w.format!==wi?nt!==null?ot?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,nt,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ht,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,nt,Be,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,ht,De.width,De.height,0,nt,Be,De.data)}}}else{if(ae=w.mipmaps,ot&&Ct){ae.length>0&&be++;const pe=$e(ke[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){ot?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,nt,Be,ke[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,ke[pe].width,ke[pe].height,0,nt,Be,ke[pe].data);for(let Le=0;Le<ae.length;Le++){const at=ae[Le].image[pe].image;ot?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,at.width,at.height,nt,Be,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ht,at.width,at.height,0,nt,Be,at.data)}}else{ot?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,Be,ke[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,nt,Be,ke[pe]);for(let Le=0;Le<ae.length;Le++){const De=ae[Le];ot?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,nt,Be,De.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,ht,nt,Be,De.image[pe])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),he.__version=ve.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Te(L,w,Z,me,ve,he){const We=l.convert(Z.format,Z.colorSpace),Re=l.convert(Z.type),Fe=P(Z.internalFormat,We,Re,Z.colorSpace),ft=r.get(w),Me=r.get(Z);if(Me.__renderTarget=w,!ft.__hasExternalTextures){const ke=Math.max(1,w.width>>he),et=Math.max(1,w.height>>he);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,he,Fe,ke,et,w.depth,0,We,Re,null):t.texImage2D(ve,he,Fe,ke,et,0,We,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),dt(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ve,Me.__webglTexture,0,mt(w)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ve,Me.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(L,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const me=w.depthTexture,ve=me&&me.isDepthTexture?me.type:null,he=C(w.stencilBuffer,ve),We=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=mt(w);dt(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,he,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,he,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,he,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,We,n.RENDERBUFFER,L)}else{const me=w.textures;for(let ve=0;ve<me.length;ve++){const he=me[ve],We=l.convert(he.format,he.colorSpace),Re=l.convert(he.type),Fe=P(he.internalFormat,We,Re,he.colorSpace),ft=mt(w);Z&&dt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Fe,w.width,w.height):dt(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,Fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const ve=me.__webglTexture,he=mt(w);if(w.depthTexture.format===Eo)dt(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Io)dt(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const w=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,L)}else if(Z){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=n.createRenderbuffer(),ye(w.__webglDepthbuffer[me],L,!1);else{const ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,he)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ye(w.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ve)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(L,w,Z){const me=r.get(L);w!==void 0&&Te(me.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ne(L)}function Dt(L){const w=L.texture,Z=r.get(L),me=r.get(w);L.addEventListener("dispose",U);const ve=L.textures,he=L.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=w.version,u.memory.textures++),he){Z.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Re]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)Z.__webglFramebuffer[Re][Fe]=n.createFramebuffer()}else Z.__webglFramebuffer[Re]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)Z.__webglFramebuffer[Re]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(We)for(let Re=0,Fe=ve.length;Re<Fe;Re++){const ft=r.get(ve[Re]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),u.memory.textures++)}if(L.samples>0&&dt(L)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Re=0;Re<ve.length;Re++){const Fe=ve[Re];Z.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Re]);const ft=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),ke=P(Fe.internalFormat,ft,Me,Fe.colorSpace,L.isXRRenderTarget===!0),et=mt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,et,ke,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),re(n.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Te(Z.__webglFramebuffer[Re][Fe],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Fe);else Te(Z.__webglFramebuffer[Re],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Re=0,Fe=ve.length;Re<Fe;Re++){const ft=ve[Re],Me=r.get(ft);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),re(n.TEXTURE_2D,ft),Te(Z.__webglFramebuffer,L,ft,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),S(ft)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Re=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,me.__webglTexture),re(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Te(Z.__webglFramebuffer[Fe],L,w,n.COLOR_ATTACHMENT0,Re,Fe);else Te(Z.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Re,0);S(w)&&y(Re),t.unbindTexture()}L.depthBuffer&&Ne(L)}function gt(L){const w=L.textures;for(let Z=0,me=w.length;Z<me;Z++){const ve=w[Z];if(S(ve)){const he=b(L),We=r.get(ve).__webglTexture;t.bindTexture(he,We),y(he),t.unbindTexture()}}}const Nt=[],q=[];function wn(L){if(L.samples>0){if(dt(L)===!1){const w=L.textures,Z=L.width,me=L.height;let ve=n.COLOR_BUFFER_BIT;const he=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,We=r.get(L),Re=w.length>1;if(Re)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,We.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ft=r.get(w[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,Z,me,0,0,Z,me,ve,n.NEAREST),d===!0&&(Nt.length=0,q.length=0,Nt.push(n.COLOR_ATTACHMENT0+Fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Nt.push(he),q.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ft=r.get(w[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,We.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,ft,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function mt(L){return Math.min(o.maxSamples,L.samples)}function dt(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(L){const w=u.render.frame;m.get(L)!==w&&(m.set(L,w),L.update())}function bt(L,w){const Z=L.colorSpace,me=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Oo&&Z!==Vr&&(Mt.getTransfer(Z)===Lt?(me!==wi||ve!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=ce,this.setTexture2D=fe,this.setTexture2DArray=le,this.setTexture3D=ie,this.setTextureCube=B,this.rebindTextures=Je,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=dt}function $P(n,e){function t(r,o=Vr){let l;const u=Mt.getTransfer(o);if(r===cr)return n.UNSIGNED_BYTE;if(r===bp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Pp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===px)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===dx)return n.BYTE;if(r===hx)return n.SHORT;if(r===Va)return n.UNSIGNED_SHORT;if(r===Rp)return n.INT;if(r===Rs)return n.UNSIGNED_INT;if(r===nr)return n.FLOAT;if(r===Xa)return n.HALF_FLOAT;if(r===mx)return n.ALPHA;if(r===gx)return n.RGB;if(r===wi)return n.RGBA;if(r===vx)return n.LUMINANCE;if(r===_x)return n.LUMINANCE_ALPHA;if(r===Eo)return n.DEPTH_COMPONENT;if(r===Io)return n.DEPTH_STENCIL;if(r===yx)return n.RED;if(r===Dp)return n.RED_INTEGER;if(r===xx)return n.RG;if(r===Lp)return n.RG_INTEGER;if(r===Ip)return n.RGBA_INTEGER;if(r===ku||r===Bu||r===zu||r===Vu)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ku)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ku)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gh||r===vh||r===_h||r===yh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===gh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_h)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xh||r===Sh||r===Mh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===xh||r===Sh)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Mh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Eh||r===Th||r===wh||r===Ah||r===Ch||r===Rh||r===bh||r===Ph||r===Dh||r===Lh||r===Ih||r===Uh||r===Nh||r===Fh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Eh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Th)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ah)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ch)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ih)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hu||r===Oh||r===kh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hu)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sx||r===Bh||r===zh||r===Vh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Hu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}class KP extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bu extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZP={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),y=this._getHandJoint(h,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(ZP)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new bu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const QP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Gn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new dr({vertexShader:QP,fragmentShader:JP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rr(new uc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tD extends ko{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,m=null,g=null,v=null,x=null,M=null;const E=new eD,S=t.getContextAttributes();let y=null,b=null;const P=[],C=[],V=new Ut;let N=null;const U=new ci;U.viewport=new Kt;const k=new ci;k.viewport=new Kt;const D=[U,k],R=new KP;let H=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=P[Q];return de===void 0&&(de=new kd,P[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=P[Q];return de===void 0&&(de=new kd,P[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=P[Q];return de===void 0&&(de=new kd,P[Q]=de),de.getHandSpace()};function j(Q){const de=C.indexOf(Q.inputSource);if(de===-1)return;const Te=P[de];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,h||u),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function se(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",fe);for(let Q=0;Q<P.length;Q++){const de=C[Q];de!==null&&(C[Q]=null,P[Q].disconnect(de))}H=null,ce=null,E.reset(),e.setRenderTarget(y),x=null,v=null,g=null,o=null,b=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",se),o.addEventListener("inputsourceschange",fe),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0){const de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new bs(x.framebufferWidth,x.framebufferHeight,{format:wi,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let de=null,Te=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?Io:Eo,Te=S.stencil?Lo:Rs);const Ce={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ce),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new bs(v.textureWidth,v.textureHeight,{format:wi,type:cr,depthTexture:new Fx(v.textureWidth,v.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function fe(Q){for(let de=0;de<Q.removed.length;de++){const Te=Q.removed[de],ye=C.indexOf(Te);ye>=0&&(C[ye]=null,P[ye].disconnect(Te))}for(let de=0;de<Q.added.length;de++){const Te=Q.added[de];let ye=C.indexOf(Te);if(ye===-1){for(let Ne=0;Ne<P.length;Ne++)if(Ne>=C.length){C.push(Te),ye=Ne;break}else if(C[Ne]===null){C[Ne]=Te,ye=Ne;break}if(ye===-1)break}const Ce=P[ye];Ce&&Ce.connect(Te)}}const le=new te,ie=new te;function B(Q,de,Te){le.setFromMatrixPosition(de.matrixWorld),ie.setFromMatrixPosition(Te.matrixWorld);const ye=le.distanceTo(ie),Ce=de.projectionMatrix.elements,Ne=Te.projectionMatrix.elements,Je=Ce[14]/(Ce[10]-1),Dt=Ce[14]/(Ce[10]+1),gt=(Ce[9]+1)/Ce[5],Nt=(Ce[9]-1)/Ce[5],q=(Ce[8]-1)/Ce[0],wn=(Ne[8]+1)/Ne[0],mt=Je*q,dt=Je*wn,Ke=ye/(-q+wn),bt=Ke*-q;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(bt),Q.translateZ(Ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ce[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $e=Je+Ke,L=Dt+Ke,w=mt-bt,Z=dt+(ye-bt),me=gt*Dt/L*$e,ve=Nt*Dt/L*$e;Q.projectionMatrix.makePerspective(w,Z,me,ve,$e,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let de=Q.near,Te=Q.far;E.texture!==null&&(E.depthNear>0&&(de=E.depthNear),E.depthFar>0&&(Te=E.depthFar)),R.near=k.near=U.near=de,R.far=k.far=U.far=Te,(H!==R.near||ce!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,ce=R.far),U.layers.mask=Q.layers.mask|2,k.layers.mask=Q.layers.mask|4,R.layers.mask=U.layers.mask|k.layers.mask;const ye=Q.parent,Ce=R.cameras;ue(R,ye);for(let Ne=0;Ne<Ce.length;Ne++)ue(Ce[Ne],ye);Ce.length===2?B(R,U,k):R.projectionMatrix.copy(U.projectionMatrix),oe(Q,R,ye)};function oe(Q,de,Te){Te===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Hh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(Q){d=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let O=null;function re(Q,de){if(m=de.getViewerPose(h||u),M=de,m!==null){const Te=m.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let ye=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let Ne=0;Ne<Te.length;Ne++){const Je=Te[Ne];let Dt=null;if(x!==null)Dt=x.getViewport(Je);else{const Nt=g.getViewSubImage(v,Je);Dt=Nt.viewport,Ne===0&&(e.setRenderTargetTextures(b,Nt.colorTexture,v.ignoreDepthValues?void 0:Nt.depthStencilTexture),e.setRenderTarget(b))}let gt=D[Ne];gt===void 0&&(gt=new ci,gt.layers.enable(Ne),gt.viewport=new Kt,D[Ne]=gt),gt.matrix.fromArray(Je.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Je.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ne===0&&(R.matrix.copy(gt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(gt)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ne=g.getDepthInformation(Te[0]);Ne&&Ne.isValid&&Ne.texture&&E.init(e,Ne,o.renderState)}}for(let Te=0;Te<P.length;Te++){const ye=C[Te],Ce=P[Te];ye!==null&&Ce!==void 0&&Ce.update(ye,de,h||u)}O&&O(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ue=new Nx;Ue.setAnimationLoop(re),this.setAnimationLoop=function(Q){O=Q},this.dispose=function(){}}}const ms=new fr,nD=new Yt;function iD(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Dx(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,b,P,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,b,P):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Hn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Hn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const b=e.get(y),P=b.envMap,C=b.envMapRotation;P&&(S.envMap.value=P,ms.copy(C),ms.x*=-1,ms.y*=-1,ms.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),S.envMapRotation.value.setFromMatrix4(nD.makeRotationFromEuler(ms)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,b,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*b,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,b){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Hn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const b=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function rD(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,P){const C=P.program;r.uniformBlockBinding(b,C)}function h(b,P){let C=o[b.id];C===void 0&&(M(b),C=m(b),o[b.id]=C,b.addEventListener("dispose",S));const V=P.program;r.updateUBOMapping(b,V);const N=e.render.frame;l[b.id]!==N&&(v(b),l[b.id]=N)}function m(b){const P=g();b.__bindingPointIndex=P;const C=n.createBuffer(),V=b.__size,N=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,V,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,C),C}function g(){for(let b=0;b<c;b++)if(u.indexOf(b)===-1)return u.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const P=o[b.id],C=b.uniforms,V=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let N=0,U=C.length;N<U;N++){const k=Array.isArray(C[N])?C[N]:[C[N]];for(let D=0,R=k.length;D<R;D++){const H=k[D];if(x(H,N,D,V)===!0){const ce=H.__offset,j=Array.isArray(H.value)?H.value:[H.value];let se=0;for(let fe=0;fe<j.length;fe++){const le=j[fe],ie=E(le);typeof le=="number"||typeof le=="boolean"?(H.__data[0]=le,n.bufferSubData(n.UNIFORM_BUFFER,ce+se,H.__data)):le.isMatrix3?(H.__data[0]=le.elements[0],H.__data[1]=le.elements[1],H.__data[2]=le.elements[2],H.__data[3]=0,H.__data[4]=le.elements[3],H.__data[5]=le.elements[4],H.__data[6]=le.elements[5],H.__data[7]=0,H.__data[8]=le.elements[6],H.__data[9]=le.elements[7],H.__data[10]=le.elements[8],H.__data[11]=0):(le.toArray(H.__data,se),se+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ce,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(b,P,C,V){const N=b.value,U=P+"_"+C;if(V[U]===void 0)return typeof N=="number"||typeof N=="boolean"?V[U]=N:V[U]=N.clone(),!0;{const k=V[U];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return V[U]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function M(b){const P=b.uniforms;let C=0;const V=16;for(let U=0,k=P.length;U<k;U++){const D=Array.isArray(P[U])?P[U]:[P[U]];for(let R=0,H=D.length;R<H;R++){const ce=D[R],j=Array.isArray(ce.value)?ce.value:[ce.value];for(let se=0,fe=j.length;se<fe;se++){const le=j[se],ie=E(le),B=C%V,ue=B%ie.boundary,oe=B+ue;C+=ue,oe!==0&&V-oe<ie.storage&&(C+=V-oe),ce.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=C,C+=ie.storage}}}const N=C%V;return N>0&&(C+=V-N),b.__size=C,b.__cache={},this}function E(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),P}function S(b){const P=b.target;P.removeEventListener("dispose",S);const C=u.indexOf(P.__bindingPointIndex);u.splice(C,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function y(){for(const b in o)n.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class sD{constructor(e={}){const{canvas:t=XA(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const b=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Wr,this.toneMappingExposure=1;const C=this;let V=!1,N=0,U=0,k=null,D=-1,R=null;const H=new Kt,ce=new Kt;let j=null;const se=new Et(0);let fe=0,le=t.width,ie=t.height,B=1,ue=null,oe=null;const O=new Kt(0,0,le,ie),re=new Kt(0,0,le,ie);let Ue=!1;const Q=new Ux;let de=!1,Te=!1;const ye=new Yt,Ce=new Yt,Ne=new te,Je=new Kt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Nt(){return k===null?B:1}let q=r;function wn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cp}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),q===null){const X="webgl2";if(q=wn(X,A),q===null)throw wn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,dt,Ke,bt,$e,L,w,Z,me,ve,he,We,Re,Fe,ft,Me,ke,et,nt,Be,ht,ot,Ct,W;function be(){mt=new c2(q),mt.init(),ot=new $P(q,mt),dt=new i2(q,mt,e,ot),Ke=new XP(q,mt),dt.reverseDepthBuffer&&v&&Ke.buffers.depth.setReversed(!0),bt=new h2(q),$e=new DP,L=new qP(q,mt,Ke,$e,dt,ot,bt),w=new s2(C),Z=new u2(C),me=new yC(q),Ct=new t2(q,me),ve=new f2(q,me,bt,Ct),he=new m2(q,ve,me,bt),nt=new p2(q,dt,L),Me=new r2($e),We=new PP(C,w,Z,mt,dt,Ct,Me),Re=new iD(C,$e),Fe=new IP,ft=new BP(mt),et=new e2(C,w,Z,Ke,he,x,d),ke=new WP(C,he,dt),W=new rD(q,bt,dt,Ke),Be=new n2(q,mt,bt),ht=new d2(q,mt,bt),bt.programs=We.programs,C.capabilities=dt,C.extensions=mt,C.properties=$e,C.renderLists=Fe,C.shadowMap=ke,C.state=Ke,C.info=bt}be();const ae=new tD(C,q);this.xr=ae,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(le,ie,!1))},this.getSize=function(A){return A.set(le,ie)},this.setSize=function(A,X,ee=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,ie=X,t.width=Math.floor(A*B),t.height=Math.floor(X*B),ee===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(le*B,ie*B).floor()},this.setDrawingBufferSize=function(A,X,ee){le=A,ie=X,B=ee,t.width=Math.floor(A*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,X,ee,ne){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,X,ee,ne),Ke.viewport(H.copy(O).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,X,ee,ne){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,X,ee,ne),Ke.scissor(ce.copy(re).multiplyScalar(B).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Ke.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,X=!0,ee=!0){let ne=0;if(A){let Y=!1;if(k!==null){const Ae=k.texture.format;Y=Ae===Ip||Ae===Lp||Ae===Dp}if(Y){const Ae=k.texture.type,Ee=Ae===cr||Ae===Rs||Ae===Va||Ae===Lo||Ae===bp||Ae===Pp,je=et.getClearColor(),He=et.getClearAlpha(),it=je.r,st=je.g,Xe=je.b;Ee?(M[0]=it,M[1]=st,M[2]=Xe,M[3]=He,q.clearBufferuiv(q.COLOR,0,M)):(E[0]=it,E[1]=st,E[2]=Xe,E[3]=He,q.clearBufferiv(q.COLOR,0,E))}else ne|=q.COLOR_BUFFER_BIT}X&&(ne|=q.DEPTH_BUFFER_BIT),ee&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),ft.dispose(),$e.dispose(),w.dispose(),Z.dispose(),he.dispose(),Ct.dispose(),W.dispose(),We.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ds),ae.removeEventListener("sessionend",hr),Oi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=bt.autoReset,X=ke.enabled,ee=ke.autoUpdate,ne=ke.needsUpdate,Y=ke.type;be(),bt.autoReset=A,ke.enabled=X,ke.autoUpdate=ee,ke.needsUpdate=ne,ke.type=Y}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const X=A.target;X.removeEventListener("dispose",at),Ot(X)}function Ot(A){Jt(A),$e.remove(A)}function Jt(A){const X=$e.get(A).programs;X!==void 0&&(X.forEach(function(ee){We.releaseProgram(ee)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ee,ne,Y,Ae){X===null&&(X=Dt);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,je=el(A,X,ee,ne,Y);Ke.setMaterial(ne,Ee);let He=ee.index,it=1;if(ne.wireframe===!0){if(He=ve.getWireframeAttribute(ee),He===void 0)return;it=2}const st=ee.drawRange,Xe=ee.attributes.position;let _t=st.start*it,At=(st.start+st.count)*it;Ae!==null&&(_t=Math.max(_t,Ae.start*it),At=Math.min(At,(Ae.start+Ae.count)*it)),He!==null?(_t=Math.max(_t,0),At=Math.min(At,He.count)):Xe!=null&&(_t=Math.max(_t,0),At=Math.min(At,Xe.count));const vt=At-_t;if(vt<0||vt===1/0)return;Ct.setup(Y,ne,je,ee,He);let hn,lt=Be;if(He!==null&&(hn=me.get(He),lt=ht,lt.setIndex(hn)),Y.isMesh)ne.wireframe===!0?(Ke.setLineWidth(ne.wireframeLinewidth*Nt()),lt.setMode(q.LINES)):lt.setMode(q.TRIANGLES);else if(Y.isLine){let qe=ne.linewidth;qe===void 0&&(qe=1),Ke.setLineWidth(qe*Nt()),Y.isLineSegments?lt.setMode(q.LINES):Y.isLineLoop?lt.setMode(q.LINE_LOOP):lt.setMode(q.LINE_STRIP)}else Y.isPoints?lt.setMode(q.POINTS):Y.isSprite&&lt.setMode(q.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)lt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,di=Y._multiDrawCounts,Tt=Y._multiDrawCount,pn=He?me.get(He).bytesPerElement:1,hi=$e.get(ne).currentProgram.getUniforms();for(let en=0;en<Tt;en++)hi.setValue(q,"_gl_DrawID",en),lt.render(qe[en]/pn,di[en])}else if(Y.isInstancedMesh)lt.renderInstances(_t,vt,Y.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,di=Math.min(ee.instanceCount,qe);lt.renderInstances(_t,vt,di)}else lt.render(_t,vt)};function xt(A,X,ee){A.transparent===!0&&A.side===tr&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,Ls(A,X,ee),A.side=Yr,A.needsUpdate=!0,Ls(A,X,ee),A.side=tr):Ls(A,X,ee)}this.compile=function(A,X,ee=null){ee===null&&(ee=A),y=ft.get(ee),y.init(X),P.push(y),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),A!==ee&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const ne=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Ee=0;Ee<Ae.length;Ee++){const je=Ae[Ee];xt(je,ee,Y),ne.add(je)}else xt(Ae,ee,Y),ne.add(Ae)}),P.pop(),y=null,ne},this.compileAsync=function(A,X,ee=null){const ne=this.compile(A,X,ee);return new Promise(Y=>{function Ae(){if(ne.forEach(function(Ee){$e.get(Ee).currentProgram.isReady()&&ne.delete(Ee)}),ne.size===0){Y(A);return}setTimeout(Ae,10)}mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Ln=null;function An(A){Ln&&Ln(A)}function Ds(){Oi.stop()}function hr(){Oi.start()}const Oi=new Nx;Oi.setAnimationLoop(An),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(A){Ln=A,ae.setAnimationLoop(A),A===null?Oi.stop():Oi.start()},ae.addEventListener("sessionstart",Ds),ae.addEventListener("sessionend",hr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,k),y=ft.get(A,P.length),y.init(X),P.push(y),Ce.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(Ce),Te=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Te),S=Fe.get(A,b.length),S.init(),b.push(S),ae.enabled===!0&&ae.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&ki(Ae,X,-1/0,C.sortObjects)}ki(A,X,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ue,oe),gt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,gt&&et.addToRenderList(S,A),this.info.render.frame++,de===!0&&Me.beginShadows();const ee=y.state.shadowsArray;ke.render(ee,A,X),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,Y=S.transmissive;if(y.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(Y.length>0)for(let Ee=0,je=Ae.length;Ee<je;Ee++){const He=Ae[Ee];Kr(ne,Y,A,He)}gt&&et.render(A);for(let Ee=0,je=Ae.length;Ee<je;Ee++){const He=Ae[Ee];$r(S,A,He,He.viewport)}}else Y.length>0&&Kr(ne,Y,A,X),gt&&et.render(A),$r(S,A,X);k!==null&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(C,A,X),Ct.resetDefaultState(),D=-1,R=null,P.pop(),P.length>0?(y=P[P.length-1],de===!0&&Me.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function ki(A,X,ee,ne){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){ne&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const Ee=he.update(A),je=A.material;je.visible&&S.push(A,Ee,je,ee,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Ee=he.update(A),je=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Je.copy(Ee.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(je)){const He=Ee.groups;for(let it=0,st=He.length;it<st;it++){const Xe=He[it],_t=je[Xe.materialIndex];_t&&_t.visible&&S.push(A,Ee,_t,ee,Je.z,Xe)}}else je.visible&&S.push(A,Ee,je,ee,Je.z,null)}}const Ae=A.children;for(let Ee=0,je=Ae.length;Ee<je;Ee++)ki(Ae[Ee],X,ee,ne)}function $r(A,X,ee,ne){const Y=A.opaque,Ae=A.transmissive,Ee=A.transparent;y.setupLightsView(ee),de===!0&&Me.setGlobalState(C.clippingPlanes,ee),ne&&Ke.viewport(H.copy(ne)),Y.length>0&&pr(Y,X,ee),Ae.length>0&&pr(Ae,X,ee),Ee.length>0&&pr(Ee,X,ee),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Kr(A,X,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ne.id]===void 0&&(y.state.transmissionRenderTarget[ne.id]=new bs(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Xa:cr,minFilter:ws,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ae=y.state.transmissionRenderTarget[ne.id],Ee=ne.viewport||H;Ae.setSize(Ee.z,Ee.w);const je=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor(se),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),gt&&et.render(ee);const He=C.toneMapping;C.toneMapping=Wr;const it=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),de===!0&&Me.setGlobalState(C.clippingPlanes,ne),pr(A,ee,ne),L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae),mt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Xe=0,_t=X.length;Xe<_t;Xe++){const At=X[Xe],vt=At.object,hn=At.geometry,lt=At.material,qe=At.group;if(lt.side===tr&&vt.layers.test(ne.layers)){const di=lt.side;lt.side=Hn,lt.needsUpdate=!0,Qa(vt,ee,ne,hn,lt,qe),lt.side=di,lt.needsUpdate=!0,st=!0}}st===!0&&(L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae))}C.setRenderTarget(je),C.setClearColor(se,fe),it!==void 0&&(ne.viewport=it),C.toneMapping=He}function pr(A,X,ee){const ne=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Ae=A.length;Y<Ae;Y++){const Ee=A[Y],je=Ee.object,He=Ee.geometry,it=ne===null?Ee.material:ne,st=Ee.group;je.layers.test(ee.layers)&&Qa(je,X,ee,He,it,st)}}function Qa(A,X,ee,ne,Y,Ae){A.onBeforeRender(C,X,ee,ne,Y,Ae),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,X,ee,ne,A,Ae),Y.transparent===!0&&Y.side===tr&&Y.forceSinglePass===!1?(Y.side=Hn,Y.needsUpdate=!0,C.renderBufferDirect(ee,X,ne,Y,A,Ae),Y.side=Yr,Y.needsUpdate=!0,C.renderBufferDirect(ee,X,ne,Y,A,Ae),Y.side=tr):C.renderBufferDirect(ee,X,ne,Y,A,Ae),A.onAfterRender(C,X,ee,ne,Y,Ae)}function Ls(A,X,ee){X.isScene!==!0&&(X=Dt);const ne=$e.get(A),Y=y.state.lights,Ae=y.state.shadowsArray,Ee=Y.state.version,je=We.getParameters(A,Y.state,Ae,X,ee),He=We.getProgramCacheKey(je);let it=ne.programs;ne.environment=A.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(A.isMeshStandardMaterial?Z:w).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",at),it=new Map,ne.programs=it);let st=it.get(He);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Ee)return Ci(A,je),st}else je.uniforms=We.getUniforms(A),A.onBeforeCompile(je,C),st=We.acquireProgram(je,He),it.set(He,st),ne.uniforms=je.uniforms;const Xe=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),Ci(A,je),ne.needsLights=dc(A),ne.lightsStateVersion=Ee,ne.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.directionalShadowMap.value=Y.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotShadowMap.value=Y.state.spotShadowMap,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMap.value=Y.state.pointShadowMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function Ja(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Gu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ci(A,X){const ee=$e.get(A);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function el(A,X,ee,ne,Y){X.isScene!==!0&&(X=Dt),L.resetTextureUnits();const Ae=X.fog,Ee=ne.isMeshStandardMaterial?X.environment:null,je=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Oo,He=(ne.isMeshStandardMaterial?Z:w).get(ne.envMap||Ee),it=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,st=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Xe=!!ee.morphAttributes.position,_t=!!ee.morphAttributes.normal,At=!!ee.morphAttributes.color;let vt=Wr;ne.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(vt=C.toneMapping);const hn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,lt=hn!==void 0?hn.length:0,qe=$e.get(ne),di=y.state.lights;if(de===!0&&(Te===!0||A!==R)){const Cn=A===R&&ne.id===D;Me.setState(ne,A,Cn)}let Tt=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==di.state.version||qe.outputColorSpace!==je||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==He||ne.fog===!0&&qe.fog!==Ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==st||qe.morphTargets!==Xe||qe.morphNormals!==_t||qe.morphColors!==At||qe.toneMapping!==vt||qe.morphTargetsCount!==lt)&&(Tt=!0):(Tt=!0,qe.__version=ne.version);let pn=qe.currentProgram;Tt===!0&&(pn=Ls(ne,X,Y));let hi=!1,en=!1,Ri=!1;const It=pn.getUniforms(),Qn=qe.uniforms;if(Ke.useProgram(pn.program)&&(hi=!0,en=!0,Ri=!0),ne.id!==D&&(D=ne.id,en=!0),hi||R!==A){Ke.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),qA(ye),$A(ye),It.setValue(q,"projectionMatrix",ye)):It.setValue(q,"projectionMatrix",A.projectionMatrix),It.setValue(q,"viewMatrix",A.matrixWorldInverse);const Jn=It.map.cameraPosition;Jn!==void 0&&Jn.setValue(q,Ne.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&It.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&It.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,en=!0,Ri=!0)}if(Y.isSkinnedMesh){It.setOptional(q,Y,"bindMatrix"),It.setOptional(q,Y,"bindMatrixInverse");const Cn=Y.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),It.setValue(q,"boneTexture",Cn.boneTexture,L))}Y.isBatchedMesh&&(It.setOptional(q,Y,"batchingTexture"),It.setValue(q,"batchingTexture",Y._matricesTexture,L),It.setOptional(q,Y,"batchingIdTexture"),It.setValue(q,"batchingIdTexture",Y._indirectTexture,L),It.setOptional(q,Y,"batchingColorTexture"),Y._colorsTexture!==null&&It.setValue(q,"batchingColorTexture",Y._colorsTexture,L));const Bi=ee.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&nt.update(Y,ee,pn),(en||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,It.setValue(q,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Qn.envMap.value=He,Qn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(Qn.envMapIntensity.value=X.environmentIntensity),en&&(It.setValue(q,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&tl(Qn,Ri),Ae&&ne.fog===!0&&Re.refreshFogUniforms(Qn,Ae),Re.refreshMaterialUniforms(Qn,ne,B,ie,y.state.transmissionRenderTarget[A.id]),Gu.upload(q,Ja(qe),Qn,L)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Gu.upload(q,Ja(qe),Qn,L),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&It.setValue(q,"center",Y.center),It.setValue(q,"modelViewMatrix",Y.modelViewMatrix),It.setValue(q,"normalMatrix",Y.normalMatrix),It.setValue(q,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Cn=ne.uniformsGroups;for(let Jn=0,In=Cn.length;Jn<In;Jn++){const nl=Cn[Jn];W.update(nl,pn),W.bind(nl,pn)}}return pn}function tl(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function dc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,X,ee){$e.get(A.texture).__webglTexture=X,$e.get(A.depthTexture).__webglTexture=ee;const ne=$e.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=ee===void 0,ne.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const ee=$e.get(A);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ee=0){k=A,N=X,U=ee;let ne=!0,Y=null,Ae=!1,Ee=!1;if(A){const He=$e.get(A);if(He.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(q.FRAMEBUFFER,null),ne=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(He.__hasExternalTextures)L.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(He.__boundDepthTexture!==Xe){if(Xe!==null&&$e.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ee=!0);const st=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[X])?Y=st[X][ee]:Y=st[X],Ae=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?Y=$e.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?Y=st[ee]:Y=st,H.copy(A.viewport),ce.copy(A.scissor),j=A.scissorTest}else H.copy(O).multiplyScalar(B).floor(),ce.copy(re).multiplyScalar(B).floor(),j=Ue;if(Ke.bindFramebuffer(q.FRAMEBUFFER,Y)&&ne&&Ke.drawBuffers(A,Y),Ke.viewport(H),Ke.scissor(ce),Ke.setScissorTest(j),Ae){const He=$e.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,ee)}else if(Ee){const He=$e.get(A.texture),it=X||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,He.__webglTexture,ee||0,it)}D=-1},this.readRenderTargetPixels=function(A,X,ee,ne,Y,Ae,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(je=je[Ee]),je){Ke.bindFramebuffer(q.FRAMEBUFFER,je);try{const He=A.texture,it=He.format,st=He.type;if(!dt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ne&&ee>=0&&ee<=A.height-Y&&q.readPixels(X,ee,ne,Y,ot.convert(it),ot.convert(st),Ae)}finally{const He=k!==null?$e.get(k).__webglFramebuffer:null;Ke.bindFramebuffer(q.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,X,ee,ne,Y,Ae,Ee){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(je=je[Ee]),je){const He=A.texture,it=He.format,st=He.type;if(!dt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-ne&&ee>=0&&ee<=A.height-Y){Ke.bindFramebuffer(q.FRAMEBUFFER,je);const Xe=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Xe),q.bufferData(q.PIXEL_PACK_BUFFER,Ae.byteLength,q.STREAM_READ),q.readPixels(X,ee,ne,Y,ot.convert(it),ot.convert(st),0);const _t=k!==null?$e.get(k).__webglFramebuffer:null;Ke.bindFramebuffer(q.FRAMEBUFFER,_t);const At=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await YA(q,At,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Xe),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ae),q.deleteBuffer(Xe),q.deleteSync(At),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,ee=0){A.isTexture!==!0&&(ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-ee),Y=Math.floor(A.image.width*ne),Ae=Math.floor(A.image.height*ne),Ee=X!==null?X.x:0,je=X!==null?X.y:0;L.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ee,0,0,Ee,je,Y,Ae),Ke.unbindTexture()},this.copyTextureToTexture=function(A,X,ee=null,ne=null,Y=0){A.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],X=arguments[2],Y=arguments[3]||0,ee=null);let Ae,Ee,je,He,it,st,Xe,_t,At;const vt=A.isCompressedTexture?A.mipmaps[Y]:A.image;ee!==null?(Ae=ee.max.x-ee.min.x,Ee=ee.max.y-ee.min.y,je=ee.isBox3?ee.max.z-ee.min.z:1,He=ee.min.x,it=ee.min.y,st=ee.isBox3?ee.min.z:0):(Ae=vt.width,Ee=vt.height,je=vt.depth||1,He=0,it=0,st=0),ne!==null?(Xe=ne.x,_t=ne.y,At=ne.z):(Xe=0,_t=0,At=0);const hn=ot.convert(X.format),lt=ot.convert(X.type);let qe;X.isData3DTexture?(L.setTexture3D(X,0),qe=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),qe=q.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),qe=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const di=q.getParameter(q.UNPACK_ROW_LENGTH),Tt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),pn=q.getParameter(q.UNPACK_SKIP_PIXELS),hi=q.getParameter(q.UNPACK_SKIP_ROWS),en=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,vt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,vt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,He),q.pixelStorei(q.UNPACK_SKIP_ROWS,it),q.pixelStorei(q.UNPACK_SKIP_IMAGES,st);const Ri=A.isDataArrayTexture||A.isData3DTexture,It=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Qn=$e.get(A),Bi=$e.get(X),Cn=$e.get(Qn.__renderTarget),Jn=$e.get(Bi.__renderTarget);Ke.bindFramebuffer(q.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Ke.bindFramebuffer(q.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let In=0;In<je;In++)Ri&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$e.get(A).__webglTexture,Y,st+In),A.isDepthTexture?(It&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$e.get(X).__webglTexture,Y,At+In),q.blitFramebuffer(He,it,Ae,Ee,Xe,_t,Ae,Ee,q.DEPTH_BUFFER_BIT,q.NEAREST)):It?q.copyTexSubImage3D(qe,Y,Xe,_t,At+In,He,it,Ae,Ee):q.copyTexSubImage2D(qe,Y,Xe,_t,At+In,He,it,Ae,Ee);Ke.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(qe,Y,Xe,_t,At,Ae,Ee,je,hn,lt,vt.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(qe,Y,Xe,_t,At,Ae,Ee,je,hn,vt.data):q.texSubImage3D(qe,Y,Xe,_t,At,Ae,Ee,je,hn,lt,vt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Y,Xe,_t,Ae,Ee,hn,lt,vt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Y,Xe,_t,vt.width,vt.height,hn,vt.data):q.texSubImage2D(q.TEXTURE_2D,Y,Xe,_t,Ae,Ee,hn,lt,vt);q.pixelStorei(q.UNPACK_ROW_LENGTH,di),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Tt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,pn),q.pixelStorei(q.UNPACK_SKIP_ROWS,hi),q.pixelStorei(q.UNPACK_SKIP_IMAGES,en),Y===0&&X.generateMipmaps&&q.generateMipmap(qe),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ee=null,ne=null,Y=0){return A.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0),ba('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ee,ne,Y)},this.initRenderTarget=function(A){$e.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){N=0,U=0,k=null,Ke.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class oD extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wh extends Bo{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ju=new te,ec=new te,A_=new Yt,wa=new Up,Pu=new Ka,Bd=new te,C_=new te;class Vx extends Dn{constructor(e=new fi,t=new Wh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Ju.fromBufferAttribute(t,o-1),ec.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Ju.distanceTo(ec);e.setAttribute("lineDistance",new lr(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pu.copy(r.boundingSphere),Pu.applyMatrix4(o),Pu.radius+=l,e.ray.intersectsSphere(Pu)===!1)return;A_.copy(o).invert(),wa.copy(e.ray).applyMatrix4(A_);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=h){const y=m.getX(E),b=m.getX(E+1),P=Du(this,e,wa,d,y,b);P&&t.push(P)}if(this.isLineLoop){const E=m.getX(M-1),S=m.getX(x),y=Du(this,e,wa,d,E,S);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let E=x,S=M-1;E<S;E+=h){const y=Du(this,e,wa,d,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=Du(this,e,wa,d,M-1,x);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function Du(n,e,t,r,o,l){const u=n.geometry.attributes.position;if(Ju.fromBufferAttribute(u,o),ec.fromBufferAttribute(u,l),t.distanceSqToSegment(Ju,ec,Bd,C_)>r)return;Bd.applyMatrix4(n.matrixWorld);const d=e.ray.origin.distanceTo(Bd);if(!(d<e.near||d>e.far))return{distance:d,point:C_.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const R_=new te,b_=new te;class aD extends Vx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)R_.fromBufferAttribute(t,o),b_.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+R_.distanceTo(b_);e.setAttribute("lineDistance",new lr(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lD extends Bo{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const P_=new Yt,jh=new Up,Lu=new Ka,Iu=new te;class uD extends Dn{constructor(e=new fi,t=new lD){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Lu.copy(r.boundingSphere),Lu.applyMatrix4(o),Lu.radius+=l,e.ray.intersectsSphere(Lu)===!1)return;P_.copy(o).invert(),jh.copy(e.ray).applyMatrix4(P_);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=r.index,g=r.attributes.position;if(h!==null){const v=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let M=v,E=x;M<E;M++){const S=h.getX(M);Iu.fromBufferAttribute(g,S),D_(Iu,S,d,o,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let M=v,E=x;M<E;M++)Iu.fromBufferAttribute(g,M),D_(Iu,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function D_(n,e,t,r,o,l,u){const c=jh.distanceSqToPoint(n);if(c<t){const d=new te;jh.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);const yt="#2D7FF9",Rt=n=>`rgba(45,127,249,${n})`,Tn="#4ECDC4",Da=n=>`rgba(78,205,196,${n})`,Ms=.15;function cD(){const n=Se.useRef(null);return Se.useEffect(()=>{const e=n.current;if(!e)return;let t=window.innerWidth,r=window.innerHeight;const o=new sD({antialias:!0,alpha:!0});o.setSize(t,r),o.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.appendChild(o.domElement);const l=new oD,u=new ci(55,t/r,.1,800);u.position.z=110;const c=130,d=new Float32Array(c*3),h=new Float32Array(c*3),m=new Float32Array(c),g=new Et(yt),v=new Et(Tn),x=new Et(.2,.22,.3);for(let j=0;j<c;j++){d[j*3]=(Math.random()-.5)*260,d[j*3+1]=(Math.random()-.5)*160,d[j*3+2]=(Math.random()-.5)*80;const se=Math.random(),fe=se>.85?g:se>.7?v:x;h[j*3]=fe.r,h[j*3+1]=fe.g,h[j*3+2]=fe.b,m[j]=se>.7?Math.random()*1.8+.5:Math.random()*.6+.2}const M=new fi;M.setAttribute("position",new Mn(d,3)),M.setAttribute("color",new Mn(h,3)),M.setAttribute("size",new Mn(m,1));const E=new dr({vertexShader:"attribute float size;attribute vec3 color;varying vec3 vColor;varying float vAlpha;uniform float uTime;void main(){vColor=color;vec3 p=position;p.x+=sin(uTime*0.2+position.z*0.03)*0.4;p.y+=cos(uTime*0.15+position.x*0.02)*0.3;vAlpha=0.2+0.4*abs(sin(uTime*0.5+position.x*0.06));vec4 mv=modelViewMatrix*vec4(p,1.0);gl_PointSize=size*(200.0/-mv.z);gl_Position=projectionMatrix*mv;}",fragmentShader:"varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-vec2(0.5));if(d>0.5)discard;gl_FragColor=vec4(vColor,smoothstep(0.5,0.05,d)*vAlpha);}",uniforms:{uTime:{value:0}},transparent:!0,vertexColors:!0,depthWrite:!1}),S=new uD(M,E);l.add(S);const y=[];for(let j=0;j<c;j++)for(let se=j+1;se<c;se++){const fe=d[j*3]-d[se*3],le=d[j*3+1]-d[se*3+1],ie=d[j*3+2]-d[se*3+2];Math.sqrt(fe*fe+le*le+ie*ie)<20&&y.length<100&&y.push(j,se)}const b=new Float32Array(y.length*3),P=new Float32Array(y.length*3);for(let j=0;j<y.length;j++){const se=y[j];b[j*3]=d[se*3],b[j*3+1]=d[se*3+1],b[j*3+2]=d[se*3+2];const fe=h[se*3]>.4;P[j*3]=fe?.7:.15,P[j*3+1]=fe?.6:.17,P[j*3+2]=fe?.2:.25}const C=new fi;C.setAttribute("position",new Mn(b,3)),C.setAttribute("color",new Mn(P,3)),l.add(new aD(C,new Wh({vertexColors:!0,transparent:!0,opacity:.1,depthWrite:!1})));const V=[];for(let j=0;j<10;j++){const se=new fi,fe=Math.random()*25+10,le=(Math.random()-.5)*220,ie=(Math.random()-.5)*120,B=(Math.random()-.5)*50;se.setAttribute("position",new Mn(new Float32Array([le,ie,B,le+fe,ie,B]),3));const ue=new Vx(se,new Wh({color:j%2===0?yt:Tn,transparent:!0,opacity:Math.random()*.05+.02}));ue.userData={spd:Math.random()*.25+.06},l.add(ue),V.push(ue)}let N=0,U=0;const k=j=>{N=(j.clientX/t-.5)*2,U=(j.clientY/r-.5)*2};window.addEventListener("mousemove",k);let D,R=0;const H=()=>{D=requestAnimationFrame(H),R+=.006,E.uniforms.uTime.value=R,S.rotation.y=R*.02+N*.04,S.rotation.x=U*.02,V.forEach(j=>{j.position.x+=j.userData.spd*.08,j.position.x>120&&(j.position.x=-120)}),u.position.x+=(N*3-u.position.x)*.02,u.position.y+=(-U*2-u.position.y)*.02,o.render(l,u)};H();const ce=()=>{t=window.innerWidth,r=window.innerHeight,u.aspect=t/r,u.updateProjectionMatrix(),o.setSize(t,r)};return window.addEventListener("resize",ce),()=>{cancelAnimationFrame(D),window.removeEventListener("mousemove",k),window.removeEventListener("resize",ce),o.dispose(),e.contains(o.domElement)&&e.removeChild(o.domElement)}},[]),F.jsx("div",{ref:n,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}})}function fD(){return F.jsx(Ve.div,{style:{position:"fixed",left:0,width:"100%",height:1.5,background:`linear-gradient(90deg,transparent,${yt},transparent)`,zIndex:2,pointerEvents:"none"},animate:{top:["0%","100%"],opacity:[0,.3,.3,0]},transition:{duration:7,repeat:1/0,ease:"linear",times:[0,.03,.97,1]}})}function Uu({pos:n,delay:e}){const t={position:"fixed",width:44,height:44,zIndex:3,pointerEvents:"none"},r={tl:{top:14,left:14},tr:{top:14,right:14,transform:"scaleX(-1)"},bl:{bottom:14,left:14,transform:"scaleY(-1)"},br:{bottom:14,right:14,transform:"scale(-1,-1)"}};return F.jsx(Ve.div,{style:{...t,...r[n]},initial:{opacity:0},animate:{opacity:.35},transition:{delay:e,duration:.4},children:F.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",width:"100%",height:"100%",children:[F.jsx("path",{d:"M2 24L2 2L24 2",stroke:yt,strokeWidth:"1.5"}),F.jsx("path",{d:"M2 12L6 12",stroke:yt,strokeWidth:"1"}),F.jsx("path",{d:"M12 2L12 6",stroke:yt,strokeWidth:"1"}),F.jsx("circle",{cx:"2",cy:"2",r:"1.5",fill:yt})]})})}const zd=["INITIALIZING M.I.D.A.S FRAMEWORK...","LOADING AI_STRATEGY v3.1.0","CONNECTING NEURAL NODES... OK","CALIBRATING BUSINESS ENGINE...","RENDERING INTERFACE..."];function dD({onDone:n}){const[e,t]=Se.useState([]),[r,o]=Se.useState(0),[l,u]=Se.useState(!1);return Se.useEffect(()=>{let c=0;const d=()=>{if(c>=zd.length){setTimeout(()=>{u(!0),setTimeout(n,450)},150);return}t(h=>[...h,zd[c]]),o((c+1)/zd.length*100),c++,setTimeout(d,380)};setTimeout(d,180)},[]),F.jsx(N_,{children:!l&&F.jsxs(Ve.div,{exit:{opacity:0},transition:{duration:.4},style:{position:"fixed",inset:0,zIndex:100,background:"#06060c",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5,fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:Rt(.7),letterSpacing:"0.1em"},children:[F.jsx("div",{style:{textAlign:"left",lineHeight:2},children:e.map((c,d)=>F.jsx(Ve.div,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{duration:.18},children:c},d))}),F.jsx("div",{style:{width:190,height:2,background:"rgba(255,255,255,.05)",borderRadius:2,marginTop:14,overflow:"hidden"},children:F.jsx(Ve.div,{style:{height:"100%",background:yt},animate:{width:`${r}%`},transition:{duration:.32}})})]})})}function hD({color:n}){const e=n||yt;return F.jsxs("span",{style:{position:"relative",width:7,height:7,flexShrink:0,display:"inline-block"},children:[F.jsx("span",{style:{display:"block",width:7,height:7,borderRadius:"50%",background:e}}),F.jsx(Ve.span,{style:{position:"absolute",inset:-4,borderRadius:"50%",border:`1px solid ${e}`,display:"block"},animate:{scale:[.4,2.6],opacity:[1,0]},transition:{duration:1.7,repeat:1/0,ease:"easeOut"}})]})}function Cs({label:n="Fazer o Quiz de Diagnóstico",onClick:e,variant:t}){const[r,o]=Se.useState(!1),l=t==="secondary";return F.jsxs(Ve.button,{whileHover:{scale:1.03},whileTap:{scale:.97},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:e,style:{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:14,letterSpacing:"0.12em",textTransform:"uppercase",padding:l?"12px 28px":"14px 32px",border:l?`1px solid ${Rt(.4)}`:"none",borderRadius:3,background:l?r?Rt(.1):"transparent":r?`linear-gradient(135deg,${yt},${Tn})`:yt,color:l?yt:"#06060c",cursor:"pointer",position:"relative",overflow:"hidden",transition:"background 0.3s"},children:[!l&&F.jsx(Ve.div,{animate:{x:r?["-100%","200%"]:"-100%"},transition:{duration:.6,ease:"easeInOut"},style:{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)",pointerEvents:"none"}}),n]})}function fc(n=.1){const e=Se.useRef(null),[t,r]=Se.useState(!1);return Se.useEffect(()=>{const o=e.current;if(!o)return;const l=new IntersectionObserver(([u])=>{u.isIntersecting&&(r(!0),l.disconnect())},{threshold:n});return l.observe(o),()=>l.disconnect()},[]),[e,t]}const wo=[{text:"A Inteligência Artificial",accent:!1},{text:"Não Vai Substituir",accent:!1},{text:"Seu Marketing.",accent:!1},{text:"Estrategistas Que",accent:!1},{text:"Usam IA Vão.",accent:!0}],Hr=.5;function pD({startDelay:n}){return F.jsxs("div",{style:{position:"relative",display:"flex",gap:14},children:[F.jsxs("div",{style:{position:"relative",flexShrink:0,width:3},children:[F.jsx(Ve.div,{initial:{scaleY:0,transformOrigin:"top"},animate:{scaleY:1},transition:{delay:n,duration:Hr*wo.length,ease:"linear"},style:{position:"absolute",top:0,left:0,width:3,height:"100%",background:`linear-gradient(to bottom,${yt},${Rt(.15)})`,borderRadius:2}}),F.jsx(Ve.div,{animate:{top:["0%","100%"],opacity:[0,1,1,0]},transition:{delay:n,duration:Hr*wo.length,ease:"linear",times:[0,.02,.96,1]},style:{position:"absolute",left:-4,width:11,height:11,borderRadius:"50%",background:yt,boxShadow:`0 0 12px 4px ${Rt(.7)}`,transform:"translateY(-50%)"}})]}),F.jsx("div",{style:{display:"flex",flexDirection:"column",gap:2},children:wo.map((e,t)=>F.jsx("div",{style:{overflow:"hidden",position:"relative"},children:F.jsxs(Ve.div,{initial:{y:"110%",opacity:0},animate:{y:0,opacity:1},transition:{delay:n+t*Hr,duration:.5,ease:[.16,1,.3,1]},style:{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"clamp(24px,4.5vw,42px)",lineHeight:1.05,letterSpacing:"-0.01em",textTransform:"uppercase",color:e.accent?yt:"#fff",position:"relative"},children:[e.text,F.jsx(Ve.span,{initial:{opacity:0,x:0},animate:{opacity:[0,.6,0],x:[0,-4,0]},transition:{delay:n+t*Hr+.02,duration:.18,times:[0,.5,1]},style:{position:"absolute",inset:0,color:yt,fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",textTransform:"inherit",pointerEvents:"none",userSelect:"none"},children:e.text}),e.accent&&F.jsx(Ve.span,{initial:{scaleX:0,transformOrigin:"left"},animate:{scaleX:1},transition:{delay:n+t*Hr+.5,duration:.45},style:{position:"absolute",bottom:0,left:0,right:0,height:3,background:yt,opacity:.4,display:"block",borderRadius:1}})]})},t))})]})}const mD=[{text:"$ midas --scan-portfolio",color:Rt(.5),delay:0},{text:"▶ Conectando ao Framework M.I.D.A.S...",color:"rgba(40,200,64,0.6)",delay:600},{text:"",color:"",delay:900},{text:"┌─ RESULTADOS ATIVOS ──────────────────",color:"rgba(255,255,255,0.2)",delay:1200},{text:"│",color:"rgba(255,255,255,0.1)",delay:1400},{text:"│  NeoVisão     → +240% leads gerados",color:Tn,delay:1600},{text:"│  Latitude23   → Experiência Escalada",color:Tn,delay:2e3},{text:"│  Ação Corp.   → ROI 3.8x em tráfego",color:Tn,delay:2400},{text:"│  MarmoApp     → Setor digitalizado",color:Tn,delay:2800},{text:"│",color:"rgba(255,255,255,0.1)",delay:3100},{text:"└──────────────────────────────────────",color:"rgba(255,255,255,0.2)",delay:3300},{text:"",color:"",delay:3500},{text:"✓ 5 empresas operando com IA ativa",color:"rgba(40,200,64,0.75)",delay:3800},{text:"✓ Framework validado em campo",color:"rgba(40,200,64,0.75)",delay:4100}];function gD({startDelay:n}){const[e,t]=Se.useState([]);return Se.useEffect(()=>{const r=mD.map((o,l)=>setTimeout(()=>t(u=>[...u,o]),(n||0)*1e3+o.delay));return()=>r.forEach(clearTimeout)},[n]),F.jsxs("div",{style:{width:"100%",maxWidth:400,background:"rgba(6,6,10,0.95)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,overflow:"hidden",boxShadow:`0 0 40px rgba(0,0,0,0.5), 0 0 20px ${Rt(.03)}`},children:[F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,padding:"10px 14px",background:"rgba(255,255,255,0.03)",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[["#ff5f57","#febc2e","#28c840"].map((r,o)=>F.jsx("div",{style:{width:11,height:11,borderRadius:"50%",background:r,opacity:.65}},o)),F.jsx("span",{style:{marginLeft:8,fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"rgba(255,255,255,0.25)",letterSpacing:"0.1em"},children:"midas_terminal v3.1"})]}),F.jsxs("div",{style:{padding:"16px 16px 20px",fontFamily:"'Share Tech Mono',monospace",fontSize:12,lineHeight:1.85,minHeight:280},children:[e.map((r,o)=>F.jsx(Ve.div,{initial:{opacity:0,x:-6},animate:{opacity:1,x:0},transition:{duration:.15},style:{color:r.color,minHeight:r.text?"auto":8},children:r.text},o)),F.jsx(Ve.span,{animate:{opacity:[1,0,1]},transition:{duration:.8,repeat:1/0},style:{color:Rt(.6)},children:"▋"})]})]})}function vD({booted:n,onQuizStart:e}){const t=Ms+.35;return F.jsx("section",{style:{position:"relative",zIndex:5,minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"80px 20px 60px"},children:n&&F.jsxs(F.Fragment,{children:[F.jsxs(Ve.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:Ms+.2,duration:.4},style:{display:"flex",alignItems:"center",gap:9,marginBottom:28,fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:Rt(.6),letterSpacing:"0.1em",textTransform:"uppercase"},children:[F.jsx(hD,{}),F.jsx("span",{children:"// Documentando a escala real de 5 empresas do zero"})]}),F.jsxs("div",{style:{display:"flex",gap:40,alignItems:"flex-start",flexWrap:"wrap",justifyContent:"center",width:"100%",maxWidth:980},children:[F.jsxs("div",{style:{flex:"1 1 420px",minWidth:300},children:[F.jsx(pD,{startDelay:t}),F.jsx(Ve.div,{initial:{scaleX:0,transformOrigin:"left"},animate:{scaleX:1},transition:{delay:t+wo.length*Hr+.1,duration:.55,ease:"easeOut"},style:{height:1,background:`linear-gradient(90deg,${yt},${Rt(.05)} 60%,transparent)`,margin:"20px 0"}}),F.jsxs(Ve.p,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:t+wo.length*Hr+.2,duration:.5},style:{fontSize:"clamp(13px,1.7vw,15px)",color:"rgba(255,255,255,.45)",lineHeight:1.8,fontWeight:300,margin:"0 0 8px",maxWidth:440},children:["Estou documentando a escala real de 5 empresas do zero. Deixe de ser refém de processos manuais e transforme sua operação em um ativo inteligente com o"," ",F.jsx("strong",{style:{color:yt,fontWeight:600},children:"Framework M.I.D.A.S."})]}),F.jsxs(Ve.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:t+wo.length*Hr+.35,duration:.5},style:{display:"flex",flexDirection:"column",gap:8,marginTop:20},children:[F.jsx(Cs,{label:"▶ Fazer o Quiz de Diagnóstico IA",onClick:e}),F.jsxs("p",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"rgba(255,255,255,.2)",letterSpacing:"0.08em",margin:0},children:["// Gratuito · Sem compromisso ·"," ",F.jsx("span",{style:{color:"rgba(255,255,255,.35)"},children:"2 min"})]})]})]}),F.jsx(Ve.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{delay:t+.5,duration:.7,ease:[.16,1,.3,1]},style:{flex:"1 1 360px",minWidth:300},children:F.jsx(gD,{startDelay:t+.8})})]})]})})}const _D=[{letter:"M",title:"Mídia",desc:"Tráfego Pago inteligente. Campanhas otimizadas por IA que maximizam ROI e eliminam desperdício de verba.",color:"#E74C3C",icon:"◉"},{letter:"I",title:"Inteligência",desc:"Implementação de agentes de IA para triagem automática, atendimento 24/7 e qualificação de leads.",color:Tn,icon:"◎"},{letter:"D",title:"Digital",desc:"Criação de sites de alta conversão. Presença digital estratégica que transforma visitas em receita.",color:"#3498DB",icon:"◈"},{letter:"A",title:"Autoridade",desc:"Branding e posicionamento orgânico em redes variadas. Conteúdo que constrói reputação e confiança.",color:yt,icon:"◆"},{letter:"S",title:"Sistema",desc:"CRMs e Dashboards interativos. Infraestrutura integrada que dá visibilidade total da sua operação.",color:"#9B59B6",icon:"▣"}];function yD({pillar:n,index:e,isVisible:t}){const[r,o]=Se.useState(!1),[l,u]=Se.useState(!1);return Se.useEffect(()=>{if(!t)return;const c=setTimeout(()=>o(!0),e*150);return()=>clearTimeout(c)},[t,e]),F.jsxs(Ve.div,{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),initial:{opacity:0,y:28},animate:r?{opacity:1,y:0}:{},transition:{duration:.55,ease:[.16,1,.3,1]},style:{flex:"1 1 170px",minWidth:160,position:"relative",background:l?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.02)",border:`1px solid ${l?n.color+"55":"rgba(255,255,255,0.07)"}`,borderRadius:8,padding:"28px 20px 24px",cursor:"default",transition:"background 0.25s, border-color 0.25s",overflow:"hidden"},children:[F.jsx(Ve.div,{initial:{scaleX:0,transformOrigin:"left"},animate:r?{scaleX:1}:{},transition:{duration:.6,delay:.1,ease:"easeOut"},style:{position:"absolute",top:0,left:0,right:0,height:2,background:n.color,borderRadius:"8px 8px 0 0"}}),F.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:42,color:l?n.color:"rgba(255,255,255,0.08)",lineHeight:1,marginBottom:6,transition:"color 0.3s"},children:n.letter}),F.jsx("div",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:15,color:"rgba(255,255,255,0.9)",marginBottom:10},children:n.title}),F.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:13,color:"rgba(255,255,255,0.42)",lineHeight:1.7,margin:0},children:n.desc}),F.jsxs(Ve.div,{initial:{opacity:0},animate:r?{opacity:1}:{},transition:{delay:.4,duration:.3},style:{position:"absolute",bottom:12,right:14,display:"flex",alignItems:"center",gap:5},children:[F.jsx(Ve.div,{animate:{opacity:[1,.2,1]},transition:{duration:1.4,repeat:1/0},style:{width:5,height:5,borderRadius:"50%",background:n.color}}),F.jsx("span",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:8,color:n.color+"88",letterSpacing:"0.1em"},children:"ACTIVE"})]})]})}function xD(){const[n,e]=fc();return F.jsxs("section",{ref:n,style:{position:"relative",zIndex:5,padding:"100px 20px 80px",display:"flex",flexDirection:"column",alignItems:"center"},children:[F.jsx(Ve.p,{initial:{opacity:0},animate:e?{opacity:1}:{},transition:{duration:.5},style:{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:Rt(.5),letterSpacing:"0.16em",textTransform:"uppercase",marginBottom:14,textAlign:"center"},children:"[ CONSULTORIA :: M.I.D.A.S ]"}),F.jsxs(Ve.h2,{initial:{opacity:0,y:16},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1},style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:"clamp(24px,3.5vw,38px)",textAlign:"center",lineHeight:1.35,color:"rgba(255,255,255,0.9)",marginBottom:12,maxWidth:640},children:["A Fusão entre"," ",F.jsx("strong",{style:{fontWeight:700,color:"#fff"},children:"Estratégia Humana"})," ","e"," ",F.jsx("strong",{style:{fontWeight:700,color:yt},children:"Eficiência Artificial."})]}),F.jsx(Ve.p,{initial:{opacity:0,y:12},animate:e?{opacity:1,y:0}:{},transition:{duration:.5,delay:.2},style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:"clamp(14px,1.8vw,16px)",textAlign:"center",color:"rgba(255,255,255,0.38)",marginBottom:56,maxWidth:500,lineHeight:1.7},children:"5 pilares que transformam sua operação de marketing em um ativo inteligente e escalável."}),F.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:14,width:"100%",maxWidth:920,marginBottom:48},children:_D.map((t,r)=>F.jsx(yD,{pillar:t,index:r,isVisible:e},r))}),F.jsxs(Ve.div,{initial:{opacity:0,y:16},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.5},style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[F.jsx(Cs,{label:"Quero uma Reunião de Diagnóstico M.I.D.A.S"}),F.jsx("span",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"rgba(255,255,255,0.22)",letterSpacing:"0.08em"},children:"// para empresas que querem escalar com inteligência"})]})]})}const SD=[{name:"NeoVisão",desc:"Construção de marca e venda de óculos home-based. Do zero ao lucro com tráfego pago e IA.",metric:"+240% leads",color:"#E74C3C",tag:"E-COMMERCE"},{name:"Latitude23",desc:"Plataforma de experiências costeiras e hospedagens. Experiência do cliente escalada com automação.",metric:"Exp. Escalada",color:Tn,tag:"TURISMO"},{name:"Ação Corporate",desc:"Tráfego pago e gestão de saúde corporativa. ROI multiplicado com campanhas orientadas por dados.",metric:"ROI 3.8x",color:"#3498DB",tag:"SAÚDE CORP."},{name:"MarmoApp",desc:"Digitalização do setor de rochas ornamentais. Um mercado tradicional transformado pela tecnologia.",metric:"Setor Digitalizado",color:"#9B59B6",tag:"PROPTECH"}];function MD({op:n,index:e,isVisible:t}){const[r,o]=Se.useState(!1),[l,u]=Se.useState(!1);return Se.useEffect(()=>{if(!t)return;const c=setTimeout(()=>o(!0),e*200);return()=>clearTimeout(c)},[t,e]),F.jsxs(Ve.div,{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),initial:{opacity:0,y:24},animate:r?{opacity:1,y:0}:{},transition:{duration:.5,ease:[.16,1,.3,1]},style:{flex:"1 1 200px",position:"relative",background:l?"rgba(255,255,255,0.04)":"rgba(255,255,255,0.015)",border:`1px solid ${l?n.color+"44":"rgba(255,255,255,0.06)"}`,borderRadius:8,padding:"26px 22px 60px",cursor:"default",transition:"background 0.25s, border-color 0.25s",overflow:"hidden"},children:[F.jsx(Ve.div,{initial:{scaleX:0,transformOrigin:"left"},animate:r?{scaleX:1}:{},transition:{duration:.6,delay:.1},style:{position:"absolute",top:0,left:0,right:0,height:2,background:n.color}}),F.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:14},children:[F.jsx("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:20,color:"#fff"},children:n.name}),F.jsx("span",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:n.color,background:n.color+"15",border:`1px solid ${n.color}33`,padding:"2px 8px",borderRadius:2,letterSpacing:"0.1em"},children:n.tag})]}),F.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:13,color:"rgba(255,255,255,0.45)",lineHeight:1.7,margin:0},children:n.desc}),F.jsxs("div",{style:{position:"absolute",bottom:16,left:22,right:22,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[F.jsx("span",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:12,color:n.color,fontWeight:600},children:n.metric}),F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[F.jsx(Ve.div,{animate:{opacity:[1,.2,1]},transition:{duration:1.4,repeat:1/0},style:{width:5,height:5,borderRadius:"50%",background:"#28c840"}}),F.jsx("span",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"rgba(40,200,64,0.6)",letterSpacing:"0.1em"},children:"LIVE"})]})]})]})}function ED(){const[n,e]=fc();return F.jsxs("section",{ref:n,style:{position:"relative",zIndex:5,padding:"100px 20px 80px",display:"flex",flexDirection:"column",alignItems:"center"},children:[F.jsx(Ve.p,{initial:{opacity:0},animate:e?{opacity:1}:{},transition:{duration:.5},style:{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:Rt(.5),letterSpacing:"0.16em",textTransform:"uppercase",marginBottom:14,textAlign:"center"},children:"[ ECOSSISTEMA :: SKIN_IN_THE_GAME ]"}),F.jsxs(Ve.h2,{initial:{opacity:0,y:16},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1},style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:"clamp(24px,3.5vw,38px)",textAlign:"center",lineHeight:1.35,color:"rgba(255,255,255,0.9)",marginBottom:12,maxWidth:640},children:["Eu não vendo cursos de quem nunca operou."," ",F.jsx("strong",{style:{fontWeight:700,color:yt},children:"Eu opero o que vendo."})]}),F.jsx(Ve.p,{initial:{opacity:0,y:12},animate:e?{opacity:1,y:0}:{},transition:{duration:.5,delay:.2},style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:"clamp(14px,1.8vw,16px)",textAlign:"center",color:"rgba(255,255,255,0.38)",marginBottom:56,maxWidth:520,lineHeight:1.7},children:"Cada uma dessas empresas é um laboratório onde testo as estratégias que implemento na sua."}),F.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16,width:"100%",maxWidth:920,marginBottom:48},children:SD.map((t,r)=>F.jsx(MD,{op:t,index:r,isVisible:e},r))})]})}function TD(){const[n,e]=fc();return F.jsxs("section",{ref:n,style:{position:"relative",zIndex:5,padding:"100px 20px 80px",display:"flex",flexDirection:"column",alignItems:"center"},children:[F.jsx(Ve.p,{initial:{opacity:0},animate:e?{opacity:1}:{},transition:{duration:.5},style:{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:Da(.5),letterSpacing:"0.16em",textTransform:"uppercase",marginBottom:14,textAlign:"center"},children:"[ PRODUTO :: FRAMEWORK_BUILDER ]"}),F.jsxs(Ve.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1},style:{width:"100%",maxWidth:760,background:"rgba(6,6,10,0.8)",border:`1px solid ${Da(.15)}`,borderRadius:10,padding:"48px 40px",position:"relative",overflow:"hidden"},children:[F.jsx(Ve.div,{initial:{scaleX:0,transformOrigin:"left"},animate:e?{scaleX:1}:{},transition:{duration:1,delay:.2},style:{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${Tn},${yt})`}}),F.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap",alignItems:"center"},children:[F.jsxs("div",{style:{flex:"1 1 340px"},children:[F.jsxs("h2",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:"clamp(24px,3.5vw,34px)",lineHeight:1.3,color:"rgba(255,255,255,0.9)",marginBottom:16},children:["Pare de seguir"," ",F.jsx("span",{style:{color:"rgba(255,255,255,0.3)",textDecoration:"line-through",textDecorationColor:"rgba(255,255,255,0.15)"},children:'"hacks"'}),".",F.jsx("br",{}),"Comece a criar"," ",F.jsx("strong",{style:{fontWeight:700,color:Tn},children:"Frameworks."})]}),F.jsxs("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:"clamp(14px,1.8vw,16px)",color:"rgba(255,255,255,0.45)",lineHeight:1.8,marginBottom:24},children:["Um treinamento prático de como estruturar uma metodologia do zero. Aprenda a transformar seu conhecimento em um"," ",F.jsx("strong",{style:{color:"rgba(255,255,255,0.8)",fontWeight:500},children:"ativo replicável e escalável"}),"."]}),F.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:28},children:["Estruture sua metodologia proprietária","Transforme experiência em produto digital","Escale sem depender só de tempo"].map((t,r)=>F.jsxs(Ve.div,{initial:{opacity:0,x:-12},animate:e?{opacity:1,x:0}:{},transition:{delay:.4+r*.1,duration:.35},style:{display:"flex",alignItems:"center",gap:10},children:[F.jsx("span",{style:{color:Tn,fontSize:12},children:"◆"}),F.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:"rgba(255,255,255,0.6)"},children:t})]},r))}),F.jsx(Cs,{label:"Quero Criar Meu Próprio Framework",variant:"secondary"})]}),F.jsxs(Ve.div,{initial:{opacity:0,scale:.9},animate:e?{opacity:1,scale:1}:{},transition:{delay:.3,duration:.6},style:{flex:"0 0 200px",height:200,position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[F.jsx(Ve.div,{animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},style:{position:"absolute",width:180,height:180,borderRadius:"50%",border:`1px solid ${Da(.15)}`}}),F.jsx(Ve.div,{animate:{rotate:-360},transition:{duration:15,repeat:1/0,ease:"linear"},style:{position:"absolute",width:140,height:140,borderRadius:"50%",border:`1px dashed ${Rt(.15)}`}}),F.jsx(Ve.div,{animate:{rotate:360},transition:{duration:25,repeat:1/0,ease:"linear"},style:{position:"absolute",width:100,height:100,borderRadius:"50%",border:`1px solid ${Da(.1)}`}}),F.jsxs("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:28,color:yt,textAlign:"center",lineHeight:1.1},children:["FW",F.jsx("br",{}),F.jsx("span",{style:{fontSize:10,color:Rt(.5),fontWeight:400,fontFamily:"'Share Tech Mono',monospace"},children:"BUILDER"})]})]})]})]})]})}const Ji=[{q:"Como você define seu público hoje?",options:[{label:"Intuição e experiência",score:1},{label:"Dados básicos (idade, cidade)",score:2},{label:"Dados + comportamento + IA",score:3}],axis:"Inteligência"},{q:"Quanto tempo gasta em tarefas repetitivas por semana?",options:[{label:"+15 horas (criativos, relatórios, triagem)",score:1},{label:"5-15 horas (parcialmente automatizado)",score:2},{label:"Menos de 5h (automações rodando)",score:3}],axis:"Sistema"},{q:"Você tem um framework de tráfego validado?",options:[{label:"Não, vou no feeling",score:1},{label:"Tenho processos, mas não documentados",score:2},{label:"Sim, framework testado e otimizado",score:3}],axis:"Mídia"},{q:"Como está sua presença digital?",options:[{label:"Básica ou inexistente",score:1},{label:"Tenho site e redes, mas sem estratégia",score:2},{label:"Ecossistema integrado e otimizado",score:3}],axis:"Digital"}];function wD({scores:n,size:e=220}){const t=["Mídia","Inteligência","Digital","Autoridade","Sistema"],r=e/2,o=e*.38,l=3,u=2*Math.PI/t.length,c=(v,x)=>({x:r+x*Math.sin(v*u),y:r-x*Math.cos(v*u)}),d=t.map(v=>n[v]||1),h=t.map(()=>3),m=d.map((v,x)=>{const M=c(x,v/3*o);return`${x===0?"M":"L"}${M.x},${M.y}`}).join(" ")+"Z",g=h.map((v,x)=>{const M=c(x,v/3*o);return`${x===0?"M":"L"}${M.x},${M.y}`}).join(" ")+"Z";return F.jsxs("svg",{width:e,height:e,children:[[1,2,3].map(v=>F.jsx("polygon",{points:t.map((x,M)=>{const E=c(M,v/l*o);return`${E.x},${E.y}`}).join(" "),fill:"none",stroke:"rgba(255,255,255,0.08)",strokeWidth:.5},v)),t.map((v,x)=>{const M=c(x,o);return F.jsx("line",{x1:r,y1:r,x2:M.x,y2:M.y,stroke:"rgba(255,255,255,0.06)",strokeWidth:.5},x)}),F.jsx(Ve.path,{d:g,fill:Rt(.05),stroke:Rt(.2),strokeWidth:1,strokeDasharray:"4 4",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5}}),F.jsx(Ve.path,{d:m,fill:Da(.12),stroke:Tn,strokeWidth:1.5,initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.8,ease:"easeOut"}}),d.map((v,x)=>{const M=c(x,v/3*o);return F.jsx(Ve.circle,{cx:M.x,cy:M.y,r:3,fill:Tn,initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:.6+x*.1,duration:.3}},x)}),t.map((v,x)=>{const M=c(x,o+22);return F.jsx("text",{x:M.x,y:M.y,textAnchor:"middle",dominantBaseline:"middle",style:{fontFamily:"'Share Tech Mono',monospace",fontSize:9,fill:"rgba(255,255,255,0.4)",letterSpacing:"0.08em"},children:v},x)})]})}function AD({quizRef:n}){const e=Se.useRef(null),[t,r]=Se.useState(!1),[o,l]=Se.useState(-1),[u,c]=Se.useState({}),[d,h]=Se.useState(0),[m,g]=Se.useState("");Se.useEffect(()=>{const y=e.current;if(!y)return;const b=new IntersectionObserver(([P])=>{P.isIntersecting&&(r(!0),b.disconnect())},{threshold:.1});return b.observe(y),()=>b.disconnect()},[]),Se.useEffect(()=>{n&&e.current&&(n.current=e.current)},[n]);const v=(y,b)=>{const P=Ji[y].axis;c(C=>({...C,[P]:b.score})),y<Ji.length-1?l(y+1):l(4)},x=()=>{m.trim().length<8||l(5)};Se.useEffect(()=>{if(o!==5)return;let y=0;const b=setInterval(()=>{y+=Math.random()*8+2,h(Math.min(y,100)),y>=100&&(clearInterval(b),setTimeout(()=>l(6),600))},120);return()=>clearInterval(b)},[o]);const M=Object.values(u).reduce((y,b)=>y+b,0),E=Ji.length*3,S=Math.round(M/E*100);return F.jsxs("section",{ref:e,style:{position:"relative",zIndex:5,padding:"100px 20px 80px",display:"flex",flexDirection:"column",alignItems:"center"},children:[F.jsx(Ve.p,{initial:{opacity:0},animate:t?{opacity:1}:{},transition:{duration:.5},style:{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:Rt(.5),letterSpacing:"0.16em",textTransform:"uppercase",marginBottom:14,textAlign:"center"},children:"[ DIAGNÓSTICO :: IA_QUIZ ]"}),F.jsxs(Ve.h2,{initial:{opacity:0,y:16},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1},style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:"clamp(24px,3.5vw,36px)",textAlign:"center",lineHeight:1.35,color:"rgba(255,255,255,0.9)",marginBottom:12,maxWidth:560},children:["Sua Operação é"," ",F.jsx("span",{style:{color:"#E74C3C"},children:"Escrava"})," ou"," ",F.jsx("strong",{style:{fontWeight:700,color:yt},children:"Inteligente"}),"?"]}),F.jsx(Ve.p,{initial:{opacity:0,y:12},animate:t?{opacity:1,y:0}:{},transition:{duration:.5,delay:.2},style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:"clamp(14px,1.8vw,16px)",textAlign:"center",color:"rgba(255,255,255,0.38)",marginBottom:48,maxWidth:460,lineHeight:1.7},children:"Faça o diagnóstico em 2 minutos e descubra."}),F.jsxs(Ve.div,{initial:{opacity:0,y:24},animate:t?{opacity:1,y:0}:{},transition:{duration:.6,delay:.3},style:{width:"100%",maxWidth:640,background:"rgba(6,6,10,0.92)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:10,overflow:"hidden",minHeight:380},children:[F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,padding:"12px 18px",background:"rgba(255,255,255,0.03)",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[["#ff5f57","#febc2e","#28c840"].map((y,b)=>F.jsx("div",{style:{width:11,height:11,borderRadius:"50%",background:y,opacity:.65}},b)),F.jsxs("span",{style:{marginLeft:8,fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"rgba(255,255,255,0.25)",letterSpacing:"0.1em"},children:["diagnostico_ia.exe —"," ",o<0?"standby":o<4?`pergunta ${o+1}/${Ji.length}`:o===4?"captura de contato":o===5?"processando...":"resultado"]})]}),F.jsx("div",{style:{height:2,background:"rgba(255,255,255,0.04)"},children:F.jsx(Ve.div,{animate:{width:o<0?"0%":o<4?`${(o+1)/Ji.length*80}%`:o===4?"85%":"100%"},transition:{duration:.4},style:{height:"100%",background:o>=5?`linear-gradient(90deg,${Tn},${yt})`:`linear-gradient(90deg,${yt},${Rt(.6)})`}})}),F.jsx("div",{style:{padding:"32px 28px"},children:F.jsxs(N_,{mode:"wait",children:[o===-1&&F.jsxs(Ve.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,x:-20},transition:{duration:.3},style:{textAlign:"center"},children:[F.jsx("div",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:48,color:Rt(.15),marginBottom:16},children:"◎"}),F.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:16,color:"rgba(255,255,255,0.5)",lineHeight:1.7,marginBottom:28},children:"4 perguntas rápidas para mapear o nível de inteligência da sua operação."}),F.jsx(Cs,{label:"▶ Iniciar Diagnóstico",onClick:()=>l(0)})]},"intro"),o>=0&&o<Ji.length&&F.jsxs(Ve.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[F.jsxs("div",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:Rt(.4),letterSpacing:"0.12em",marginBottom:16},children:["// EIXO: ",Ji[o].axis.toUpperCase()]}),F.jsx("h3",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:500,fontSize:"clamp(18px,2.5vw,22px)",color:"rgba(255,255,255,0.88)",lineHeight:1.4,marginBottom:28},children:Ji[o].q}),F.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:Ji[o].options.map((y,b)=>F.jsx(CD,{option:y,index:b,onClick:()=>v(o,y)},b))})]},`q-${o}`),o===4&&F.jsxs(Ve.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},style:{textAlign:"center",padding:"16px 0"},children:[F.jsx("div",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:Rt(.4),letterSpacing:"0.12em",marginBottom:20},children:"// ANÁLISE PRONTA — INSIRA SEU CONTATO PARA LIBERAR"}),F.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:Rt(.08),border:`1px solid ${Rt(.2)}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:24},children:"🔒"}),F.jsx("h3",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:500,fontSize:18,color:"rgba(255,255,255,0.85)",marginBottom:8},children:"Seu diagnóstico está pronto!"}),F.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:14,color:"rgba(255,255,255,0.42)",lineHeight:1.7,marginBottom:28,maxWidth:380,margin:"0 auto 28px"},children:"Insira seu WhatsApp para liberar o resultado completo com gráfico de radar + sugestão personalizada de ferramenta de IA para o seu nicho."}),F.jsxs("div",{style:{display:"flex",gap:10,maxWidth:360,margin:"0 auto"},children:[F.jsx("input",{type:"text",placeholder:"(00) 00000-0000",value:m,onChange:y=>g(y.target.value),onKeyDown:y=>y.key==="Enter"&&x(),style:{flex:1,padding:"12px 14px",background:"rgba(255,255,255,0.04)",border:`1px solid ${m.trim().length>=8?Rt(.3):"rgba(255,255,255,0.1)"}`,borderRadius:4,color:"#fff",fontFamily:"'DM Sans',sans-serif",fontSize:14,outline:"none",transition:"border-color 0.2s"}}),F.jsx(Cs,{label:"Liberar",onClick:x})]}),F.jsx("p",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"rgba(255,255,255,0.18)",marginTop:14,letterSpacing:"0.06em"},children:"// seus dados estão seguros · sem spam · prometido"})]},"whatsapp"),o===5&&F.jsxs(Ve.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},style:{textAlign:"center",padding:"32px 0"},children:[F.jsx(Ve.div,{animate:{rotate:360},transition:{duration:2,repeat:1/0,ease:"linear"},style:{width:48,height:48,borderRadius:"50%",border:`2px solid ${Rt(.15)}`,borderTopColor:yt,margin:"0 auto 24px"}}),F.jsx("p",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:13,color:Rt(.6),letterSpacing:"0.08em",marginBottom:16},children:"Processando dados..."}),F.jsx("div",{style:{width:"80%",height:3,background:"rgba(255,255,255,0.06)",borderRadius:2,margin:"0 auto",overflow:"hidden"},children:F.jsx(Ve.div,{animate:{width:`${d}%`},style:{height:"100%",background:`linear-gradient(90deg,${yt},${Tn})`,borderRadius:2}})}),F.jsxs("p",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"rgba(255,255,255,0.2)",marginTop:12},children:[Math.round(d),"% — Calibrando radar M.I.D.A.S"]})]},"processing"),o===6&&F.jsx(Ve.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:F.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[F.jsx(wD,{scores:u}),F.jsxs("div",{style:{flex:"1 1 220px",minWidth:200},children:[F.jsx("div",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:Rt(.4),letterSpacing:"0.12em",marginBottom:12},children:"// RESULTADO DO DIAGNÓSTICO"}),F.jsxs("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:48,color:S>=66?"#28c840":S>=40?yt:"#E74C3C",lineHeight:1,marginBottom:4},children:[S,"%"]}),F.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:500,fontSize:15,color:"rgba(255,255,255,0.7)",marginBottom:8},children:S>=66?"Operação Inteligente":S>=40?"Operação em Transição":"Operação Manual"}),F.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:13,color:"rgba(255,255,255,0.4)",lineHeight:1.7,marginBottom:24},children:S>=66?"Sua operação já tem boas bases. O próximo nível é otimizar com IA avançada.":S>=40?"Você tem processos, mas está deixando potencial na mesa. IA pode acelerar 3x.":"Sua operação depende demais de você. Automatizar é urgente para escalar."}),F.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[F.jsx(Cs,{label:"Agendar Reunião M.I.D.A.S"}),F.jsx("p",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"rgba(255,255,255,0.2)",margin:0,letterSpacing:"0.06em"},children:"// relatório completo enviado para seu WhatsApp"})]})]})]})},"result")]})})]})]})}function CD({option:n,index:e,onClick:t}){const[r,o]=Se.useState(!1);return F.jsxs(Ve.button,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:t,whileHover:{x:4},whileTap:{scale:.98},style:{width:"100%",padding:"16px 18px",background:r?Rt(.08):"rgba(255,255,255,0.02)",border:`1px solid ${r?Rt(.3):"rgba(255,255,255,0.07)"}`,borderRadius:6,cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:14,transition:"background 0.2s, border-color 0.2s"},children:[F.jsx("span",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:r?yt:"rgba(255,255,255,0.25)",flexShrink:0,width:20,textAlign:"center",transition:"color 0.2s"},children:String.fromCharCode(65+e)}),F.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:14,color:r?"rgba(255,255,255,0.85)":"rgba(255,255,255,0.55)",transition:"color 0.2s"},children:n.label})]})}function RD(){const[n,e]=fc(),[t,r]=Se.useState({nome:"",empresa:"",site:"",gargalo:""});return F.jsxs("section",{ref:n,style:{position:"relative",zIndex:5,padding:"100px 20px 60px",display:"flex",flexDirection:"column",alignItems:"center"},children:[F.jsx(Ve.p,{initial:{opacity:0},animate:e?{opacity:1}:{},transition:{duration:.5},style:{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:Rt(.5),letterSpacing:"0.16em",textTransform:"uppercase",marginBottom:14,textAlign:"center"},children:"[ MÓDULO :: CONTATO ]"}),F.jsxs(Ve.h2,{initial:{opacity:0,y:16},animate:e?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1},style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:"clamp(24px,3.5vw,34px)",textAlign:"center",lineHeight:1.35,color:"rgba(255,255,255,0.9)",marginBottom:48,maxWidth:520},children:["Pronto para transformar sua"," ",F.jsx("strong",{style:{fontWeight:700,color:yt},children:"operação"}),"?"]}),F.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",maxWidth:600,marginBottom:56},children:F.jsxs(Ve.div,{initial:{opacity:0,y:20},animate:e?{opacity:1,y:0}:{},transition:{delay:.2,duration:.6},style:{width:"100%",background:"rgba(6,6,10,0.8)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:8,padding:"32px 28px"},children:[F.jsx("div",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"rgba(255,255,255,0.25)",letterSpacing:"0.12em",marginBottom:20},children:"// FORMULÁRIO DE CONTATO"}),F.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[[{key:"nome",label:"Nome",placeholder:"Seu nome"},{key:"empresa",label:"Empresa",placeholder:"Nome da empresa"},{key:"site",label:"Site",placeholder:"https://"}].map(({key:o,label:l,placeholder:u})=>F.jsxs("div",{children:[F.jsx("label",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",display:"block",marginBottom:6},children:l}),F.jsx("input",{type:"text",placeholder:u,value:t[o],onChange:c=>r(d=>({...d,[o]:c.target.value})),style:{width:"100%",padding:"11px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,color:"#fff",fontFamily:"'DM Sans',sans-serif",fontSize:14,outline:"none",boxSizing:"border-box"}})]},o)),F.jsxs("div",{children:[F.jsx("label",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"rgba(255,255,255,0.3)",letterSpacing:"0.1em",display:"block",marginBottom:6},children:"Qual o gargalo da sua operação hoje?"}),F.jsx("textarea",{placeholder:"Descreva em poucas palavras...",value:t.gargalo,onChange:o=>r(l=>({...l,gargalo:o.target.value})),rows:3,style:{width:"100%",padding:"11px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:4,color:"#fff",fontFamily:"'DM Sans',sans-serif",fontSize:14,outline:"none",resize:"vertical",boxSizing:"border-box"}})]}),F.jsx(Cs,{label:"Enviar Mensagem"})]})]})}),F.jsxs(Ve.div,{initial:{opacity:0},animate:e?{opacity:1}:{},transition:{delay:.5,duration:.5},style:{width:"100%",maxWidth:880,borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:32,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16},children:[F.jsxs("div",{children:[F.jsxs("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:20,color:"#fff",letterSpacing:"0.05em",marginBottom:4},children:[F.jsx("span",{style:{color:yt},children:"@"}),"odaniellz"]}),F.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontWeight:300,fontSize:13,color:"rgba(255,255,255,0.35)",margin:0},children:"Acompanhe a documentação diária dessa jornada no Instagram."})]}),F.jsxs("div",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"rgba(255,255,255,0.15)",letterSpacing:"0.08em",textAlign:"right"},children:[F.jsx("div",{children:"// M.I.D.A.S FRAMEWORK v3.1"}),F.jsxs("div",{children:["// ",new Date().getFullYear()," · DANIEL LZ"]})]})]})]})}function bD(){const[n,e]=Se.useState(!1),t=Se.useRef(null),r=()=>{t.current&&t.current.scrollIntoView({behavior:"smooth",block:"start"})};return F.jsxs("div",{style:{background:"#06060c",minHeight:"100vh",color:"#fff",overflowX:"hidden",fontFamily:"'DM Sans',sans-serif"},children:[F.jsx(dD,{onDone:()=>e(!0)}),F.jsx(cD,{}),F.jsx(fD,{}),n&&F.jsxs(F.Fragment,{children:[F.jsx(Uu,{pos:"tl",delay:Ms+.8}),F.jsx(Uu,{pos:"tr",delay:Ms+.9}),F.jsx(Uu,{pos:"bl",delay:Ms+1}),F.jsx(Uu,{pos:"br",delay:Ms+1.1})]}),F.jsx(vD,{booted:n,onQuizStart:r}),F.jsx(xD,{}),F.jsx(ED,{}),F.jsx(TD,{}),F.jsx(AD,{quizRef:t}),F.jsx(RD,{}),n&&F.jsxs(Ve.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:Ms+4},style:{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:4,zIndex:10},children:[F.jsx(Ve.div,{style:{width:1,height:30,background:`linear-gradient(to bottom,${yt},transparent)`},animate:{opacity:[.2,.85,.2]},transition:{duration:2,repeat:1/0}}),F.jsx("span",{style:{fontFamily:"'Share Tech Mono',monospace",fontSize:8,letterSpacing:"0.16em",color:"rgba(255,255,255,.14)",textTransform:"uppercase"},children:"scroll"})]})]})}PM.createRoot(document.getElementById("root")).render(F.jsx(EM.StrictMode,{children:F.jsx(bD,{})}));

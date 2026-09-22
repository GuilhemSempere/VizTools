(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))A(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&A(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function A(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function z5(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var a4={exports:{}},k1={},l4={exports:{}},J0={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xt=Symbol.for("react.element"),O5=Symbol.for("react.portal"),q5=Symbol.for("react.fragment"),n7=Symbol.for("react.strict_mode"),r7=Symbol.for("react.profiler"),e7=Symbol.for("react.provider"),A7=Symbol.for("react.context"),t7=Symbol.for("react.forward_ref"),o7=Symbol.for("react.suspense"),a7=Symbol.for("react.memo"),l7=Symbol.for("react.lazy"),Ci=Symbol.iterator;function i7(n){return n===null||typeof n!="object"?null:(n=Ci&&n[Ci]||n["@@iterator"],typeof n=="function"?n:null)}var i4={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R4=Object.assign,c4={};function mA(n,r,e){this.props=n,this.context=r,this.refs=c4,this.updater=e||i4}mA.prototype.isReactComponent={};mA.prototype.setState=function(n,r){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,r,"setState")};mA.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function G4(){}G4.prototype=mA.prototype;function X2(n,r,e){this.props=n,this.context=r,this.refs=c4,this.updater=e||i4}var Q2=X2.prototype=new G4;Q2.constructor=X2;R4(Q2,mA.prototype);Q2.isPureReactComponent=!0;var Si=Array.isArray,s4=Object.prototype.hasOwnProperty,x2={current:null},u4={key:!0,ref:!0,__self:!0,__source:!0};function U4(n,r,e){var A,t={},o=null,a=null;if(r!=null)for(A in r.ref!==void 0&&(a=r.ref),r.key!==void 0&&(o=""+r.key),r)s4.call(r,A)&&!u4.hasOwnProperty(A)&&(t[A]=r[A]);var l=arguments.length-2;if(l===1)t.children=e;else if(1<l){for(var R=Array(l),G=0;G<l;G++)R[G]=arguments[G+2];t.children=R}if(n&&n.defaultProps)for(A in l=n.defaultProps,l)t[A]===void 0&&(t[A]=l[A]);return{$$typeof:xt,type:n,key:o,ref:a,props:t,_owner:x2.current}}function R7(n,r){return{$$typeof:xt,type:n.type,key:r,ref:n.ref,props:n.props,_owner:n._owner}}function Z2(n){return typeof n=="object"&&n!==null&&n.$$typeof===xt}function c7(n){var r={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(e){return r[e]})}var pi=/\/+/g;function oa(n,r){return typeof n=="object"&&n!==null&&n.key!=null?c7(""+n.key):r.toString(36)}function go(n,r,e,A,t){var o=typeof n;(o==="undefined"||o==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case xt:case O5:a=!0}}if(a)return a=n,t=t(a),n=A===""?"."+oa(a,0):A,Si(t)?(e="",n!=null&&(e=n.replace(pi,"$&/")+"/"),go(t,r,e,"",function(G){return G})):t!=null&&(Z2(t)&&(t=R7(t,e+(!t.key||a&&a.key===t.key?"":(""+t.key).replace(pi,"$&/")+"/")+n)),r.push(t)),1;if(a=0,A=A===""?".":A+":",Si(n))for(var l=0;l<n.length;l++){o=n[l];var R=A+oa(o,l);a+=go(o,r,e,R,t)}else if(R=i7(n),typeof R=="function")for(n=R.call(n),l=0;!(o=n.next()).done;)o=o.value,R=A+oa(o,l++),a+=go(o,r,e,R,t);else if(o==="object")throw r=String(n),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function so(n,r,e){if(n==null)return n;var A=[],t=0;return go(n,A,"","",function(o){return r.call(e,o,t++)}),A}function G7(n){if(n._status===-1){var r=n._result;r=r(),r.then(function(e){(n._status===0||n._status===-1)&&(n._status=1,n._result=e)},function(e){(n._status===0||n._status===-1)&&(n._status=2,n._result=e)}),n._status===-1&&(n._status=0,n._result=r)}if(n._status===1)return n._result.default;throw n._result}var Dn={current:null},Jo={transition:null},s7={ReactCurrentDispatcher:Dn,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:x2};function L4(){throw Error("act(...) is not supported in production builds of React.")}J0.Children={map:so,forEach:function(n,r,e){so(n,function(){r.apply(this,arguments)},e)},count:function(n){var r=0;return so(n,function(){r++}),r},toArray:function(n){return so(n,function(r){return r})||[]},only:function(n){if(!Z2(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};J0.Component=mA;J0.Fragment=q5;J0.Profiler=r7;J0.PureComponent=X2;J0.StrictMode=n7;J0.Suspense=o7;J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s7;J0.act=L4;J0.cloneElement=function(n,r,e){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var A=R4({},n.props),t=n.key,o=n.ref,a=n._owner;if(r!=null){if(r.ref!==void 0&&(o=r.ref,a=x2.current),r.key!==void 0&&(t=""+r.key),n.type&&n.type.defaultProps)var l=n.type.defaultProps;for(R in r)s4.call(r,R)&&!u4.hasOwnProperty(R)&&(A[R]=r[R]===void 0&&l!==void 0?l[R]:r[R])}var R=arguments.length-2;if(R===1)A.children=e;else if(1<R){l=Array(R);for(var G=0;G<R;G++)l[G]=arguments[G+2];A.children=l}return{$$typeof:xt,type:n.type,key:t,ref:o,props:A,_owner:a}};J0.createContext=function(n){return n={$$typeof:A7,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:e7,_context:n},n.Consumer=n};J0.createElement=U4;J0.createFactory=function(n){var r=U4.bind(null,n);return r.type=n,r};J0.createRef=function(){return{current:null}};J0.forwardRef=function(n){return{$$typeof:t7,render:n}};J0.isValidElement=Z2;J0.lazy=function(n){return{$$typeof:l7,_payload:{_status:-1,_result:n},_init:G7}};J0.memo=function(n,r){return{$$typeof:a7,type:n,compare:r===void 0?null:r}};J0.startTransition=function(n){var r=Jo.transition;Jo.transition={};try{n()}finally{Jo.transition=r}};J0.unstable_act=L4;J0.useCallback=function(n,r){return Dn.current.useCallback(n,r)};J0.useContext=function(n){return Dn.current.useContext(n)};J0.useDebugValue=function(){};J0.useDeferredValue=function(n){return Dn.current.useDeferredValue(n)};J0.useEffect=function(n,r){return Dn.current.useEffect(n,r)};J0.useId=function(){return Dn.current.useId()};J0.useImperativeHandle=function(n,r,e){return Dn.current.useImperativeHandle(n,r,e)};J0.useInsertionEffect=function(n,r){return Dn.current.useInsertionEffect(n,r)};J0.useLayoutEffect=function(n,r){return Dn.current.useLayoutEffect(n,r)};J0.useMemo=function(n,r){return Dn.current.useMemo(n,r)};J0.useReducer=function(n,r,e){return Dn.current.useReducer(n,r,e)};J0.useRef=function(n){return Dn.current.useRef(n)};J0.useState=function(n){return Dn.current.useState(n)};J0.useSyncExternalStore=function(n,r,e){return Dn.current.useSyncExternalStore(n,r,e)};J0.useTransition=function(){return Dn.current.useTransition()};J0.version="18.3.1";l4.exports=J0;var P=l4.exports;const pn=z5(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u7=P,U7=Symbol.for("react.element"),L7=Symbol.for("react.fragment"),T7=Object.prototype.hasOwnProperty,b7=u7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f7={key:!0,ref:!0,__self:!0,__source:!0};function T4(n,r,e){var A,t={},o=null,a=null;e!==void 0&&(o=""+e),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(a=r.ref);for(A in r)T7.call(r,A)&&!f7.hasOwnProperty(A)&&(t[A]=r[A]);if(n&&n.defaultProps)for(A in r=n.defaultProps,r)t[A]===void 0&&(t[A]=r[A]);return{$$typeof:U7,type:n,key:o,ref:a,props:t,_owner:b7.current}}k1.Fragment=L7;k1.jsx=T4;k1.jsxs=T4;a4.exports=k1;var U=a4.exports,Ka={},b4={exports:{}},qn={},f4={exports:{}},v4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function r(C,U0){var J=C.length;C.push(U0);n:for(;0<J;){var E0=J-1>>>1,M0=C[E0];if(0<t(M0,U0))C[E0]=U0,C[J]=M0,J=E0;else break n}}function e(C){return C.length===0?null:C[0]}function A(C){if(C.length===0)return null;var U0=C[0],J=C.pop();if(J!==U0){C[0]=J;n:for(var E0=0,M0=C.length,lr=M0>>>1;E0<lr;){var Nn=2*(E0+1)-1,_r=C[Nn],yr=Nn+1,Er=C[yr];if(0>t(_r,J))yr<M0&&0>t(Er,_r)?(C[E0]=Er,C[yr]=J,E0=yr):(C[E0]=_r,C[Nn]=J,E0=Nn);else if(yr<M0&&0>t(Er,J))C[E0]=Er,C[yr]=J,E0=yr;else break n}}return U0}function t(C,U0){var J=C.sortIndex-U0.sortIndex;return J!==0?J:C.id-U0.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();n.unstable_now=function(){return a.now()-l}}var R=[],G=[],u=1,b=null,f=3,h=!1,k=!1,E=!1,R0=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var U0=e(G);U0!==null;){if(U0.callback===null)A(G);else if(U0.startTime<=C)A(G),U0.sortIndex=U0.expirationTime,r(R,U0);else break;U0=e(G)}}function B(C){if(E=!1,d(C),!k)if(e(R)!==null)k=!0,h0(_);else{var U0=e(G);U0!==null&&Jn(B,U0.startTime-C)}}function _(C,U0){k=!1,E&&(E=!1,y(n0),n0=-1),h=!0;var J=f;try{for(d(U0),b=e(R);b!==null&&(!(b.expirationTime>U0)||C&&!In());){var E0=b.callback;if(typeof E0=="function"){b.callback=null,f=b.priorityLevel;var M0=E0(b.expirationTime<=U0);U0=n.unstable_now(),typeof M0=="function"?b.callback=M0:b===e(R)&&A(R),d(U0)}else A(R);b=e(R)}if(b!==null)var lr=!0;else{var Nn=e(G);Nn!==null&&Jn(B,Nn.startTime-U0),lr=!1}return lr}finally{b=null,f=J,h=!1}}var A0=!1,t0=null,n0=-1,j0=5,p0=-1;function In(){return!(n.unstable_now()-p0<j0)}function s0(){if(t0!==null){var C=n.unstable_now();p0=C;var U0=!0;try{U0=t0(!0,C)}finally{U0?wr():(A0=!1,t0=null)}}else A0=!1}var wr;if(typeof v=="function")wr=function(){v(s0)};else if(typeof MessageChannel<"u"){var sn=new MessageChannel,Ot=sn.port2;sn.port1.onmessage=s0,wr=function(){Ot.postMessage(null)}}else wr=function(){R0(s0,0)};function h0(C){t0=C,A0||(A0=!0,wr())}function Jn(C,U0){n0=R0(function(){C(n.unstable_now())},U0)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(C){C.callback=null},n.unstable_continueExecution=function(){k||h||(k=!0,h0(_))},n.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j0=0<C?Math.floor(1e3/C):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return e(R)},n.unstable_next=function(C){switch(f){case 1:case 2:case 3:var U0=3;break;default:U0=f}var J=f;f=U0;try{return C()}finally{f=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(C,U0){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var J=f;f=C;try{return U0()}finally{f=J}},n.unstable_scheduleCallback=function(C,U0,J){var E0=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?E0+J:E0):J=E0,C){case 1:var M0=-1;break;case 2:M0=250;break;case 5:M0=1073741823;break;case 4:M0=1e4;break;default:M0=5e3}return M0=J+M0,C={id:u++,callback:U0,priorityLevel:C,startTime:J,expirationTime:M0,sortIndex:-1},J>E0?(C.sortIndex=J,r(G,C),e(R)===null&&C===e(G)&&(E?(y(n0),n0=-1):E=!0,Jn(B,J-E0))):(C.sortIndex=M0,r(R,C),k||h||(k=!0,h0(_))),C},n.unstable_shouldYield=In,n.unstable_wrapCallback=function(C){var U0=f;return function(){var J=f;f=U0;try{return C.apply(this,arguments)}finally{f=J}}}})(v4);f4.exports=v4;var v7=f4.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y7=P,On=v7;function X(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,e=1;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y4=new Set,ht={};function Ze(n,r){CA(n,r),CA(n+"Capture",r)}function CA(n,r){for(ht[n]=r,n=0;n<r.length;n++)y4.add(r[n])}var Wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,d7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ki={},Ii={};function Y7(n){return Va.call(Ii,n)?!0:Va.call(ki,n)?!1:d7.test(n)?Ii[n]=!0:(ki[n]=!0,!1)}function h7(n,r,e,A){if(e!==null&&e.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return A?!1:e!==null?!e.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function C7(n,r,e,A){if(r===null||typeof r>"u"||h7(n,r,e,A))return!0;if(A)return!1;if(e!==null)switch(e.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function gn(n,r,e,A,t,o,a){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=A,this.attributeNamespace=t,this.mustUseProperty=e,this.propertyName=n,this.type=r,this.sanitizeURL=o,this.removeEmptyString=a}var Yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Yn[n]=new gn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];Yn[r]=new gn(r,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Yn[n]=new gn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Yn[n]=new gn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Yn[n]=new gn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Yn[n]=new gn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Yn[n]=new gn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Yn[n]=new gn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Yn[n]=new gn(n,5,!1,n.toLowerCase(),null,!1,!1)});var w2=/[\-:]([a-z])/g;function _2(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(w2,_2);Yn[r]=new gn(r,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(w2,_2);Yn[r]=new gn(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(w2,_2);Yn[r]=new gn(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Yn[n]=new gn(n,1,!1,n.toLowerCase(),null,!1,!1)});Yn.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Yn[n]=new gn(n,1,!1,n.toLowerCase(),null,!0,!0)});function j2(n,r,e,A){var t=Yn.hasOwnProperty(r)?Yn[r]:null;(t!==null?t.type!==0:A||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(C7(r,e,t,A)&&(e=null),A||t===null?Y7(r)&&(e===null?n.removeAttribute(r):n.setAttribute(r,""+e)):t.mustUseProperty?n[t.propertyName]=e===null?t.type===3?!1:"":e:(r=t.attributeName,A=t.attributeNamespace,e===null?n.removeAttribute(r):(t=t.type,e=t===3||t===4&&e===!0?"":""+e,A?n.setAttributeNS(A,r,e):n.setAttribute(r,e))))}var Zr=y7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),oA=Symbol.for("react.portal"),aA=Symbol.for("react.fragment"),$2=Symbol.for("react.strict_mode"),Wa=Symbol.for("react.profiler"),d4=Symbol.for("react.provider"),Y4=Symbol.for("react.context"),z2=Symbol.for("react.forward_ref"),Fa=Symbol.for("react.suspense"),Xa=Symbol.for("react.suspense_list"),O2=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),h4=Symbol.for("react.offscreen"),Ni=Symbol.iterator;function wA(n){return n===null||typeof n!="object"?null:(n=Ni&&n[Ni]||n["@@iterator"],typeof n=="function"?n:null)}var rn=Object.assign,aa;function tt(n){if(aa===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);aa=r&&r[1]||""}return`
`+aa+n}var la=!1;function ia(n,r){if(!n||la)return"";la=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(G){var A=G}Reflect.construct(n,[],r)}else{try{r.call()}catch(G){A=G}n.call(r.prototype)}else{try{throw Error()}catch(G){A=G}n()}}catch(G){if(G&&A&&typeof G.stack=="string"){for(var t=G.stack.split(`
`),o=A.stack.split(`
`),a=t.length-1,l=o.length-1;1<=a&&0<=l&&t[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(t[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||t[a]!==o[l]){var R=`
`+t[a].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=a&&0<=l);break}}}finally{la=!1,Error.prepareStackTrace=e}return(n=n?n.displayName||n.name:"")?tt(n):""}function S7(n){switch(n.tag){case 5:return tt(n.type);case 16:return tt("Lazy");case 13:return tt("Suspense");case 19:return tt("SuspenseList");case 0:case 2:case 15:return n=ia(n.type,!1),n;case 11:return n=ia(n.type.render,!1),n;case 1:return n=ia(n.type,!0),n;default:return""}}function Qa(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case aA:return"Fragment";case oA:return"Portal";case Wa:return"Profiler";case $2:return"StrictMode";case Fa:return"Suspense";case Xa:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Y4:return(n.displayName||"Context")+".Consumer";case d4:return(n._context.displayName||"Context")+".Provider";case z2:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O2:return r=n.displayName||null,r!==null?r:Qa(n.type)||"Memo";case re:r=n._payload,n=n._init;try{return Qa(n(r))}catch{}}return null}function p7(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(r);case 8:return r===$2?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function C4(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function k7(n){var r=C4(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),A=""+n[r];if(!n.hasOwnProperty(r)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var t=e.get,o=e.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return t.call(this)},set:function(a){A=""+a,o.call(this,a)}}),Object.defineProperty(n,r,{enumerable:e.enumerable}),{getValue:function(){return A},setValue:function(a){A=""+a},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Uo(n){n._valueTracker||(n._valueTracker=k7(n))}function S4(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var e=r.getValue(),A="";return n&&(A=C4(n)?n.checked?"true":"false":n.value),n=A,n!==e?(r.setValue(n),!0):!1}function zo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xa(n,r){var e=r.checked;return rn({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??n._wrapperState.initialChecked})}function Ei(n,r){var e=r.defaultValue==null?"":r.defaultValue,A=r.checked!=null?r.checked:r.defaultChecked;e=Te(r.value!=null?r.value:e),n._wrapperState={initialChecked:A,initialValue:e,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function p4(n,r){r=r.checked,r!=null&&j2(n,"checked",r,!1)}function Za(n,r){p4(n,r);var e=Te(r.value),A=r.type;if(e!=null)A==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+e):n.value!==""+e&&(n.value=""+e);else if(A==="submit"||A==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?wa(n,r.type,e):r.hasOwnProperty("defaultValue")&&wa(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Mi(n,r,e){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var A=r.type;if(!(A!=="submit"&&A!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,e||r===n.value||(n.value=r),n.defaultValue=r}e=n.name,e!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,e!==""&&(n.name=e)}function wa(n,r,e){(r!=="number"||zo(n.ownerDocument)!==n)&&(e==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+e&&(n.defaultValue=""+e))}var ot=Array.isArray;function bA(n,r,e,A){if(n=n.options,r){r={};for(var t=0;t<e.length;t++)r["$"+e[t]]=!0;for(e=0;e<n.length;e++)t=r.hasOwnProperty("$"+n[e].value),n[e].selected!==t&&(n[e].selected=t),t&&A&&(n[e].defaultSelected=!0)}else{for(e=""+Te(e),r=null,t=0;t<n.length;t++){if(n[t].value===e){n[t].selected=!0,A&&(n[t].defaultSelected=!0);return}r!==null||n[t].disabled||(r=n[t])}r!==null&&(r.selected=!0)}}function _a(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(X(91));return rn({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Pi(n,r){var e=r.value;if(e==null){if(e=r.children,r=r.defaultValue,e!=null){if(r!=null)throw Error(X(92));if(ot(e)){if(1<e.length)throw Error(X(93));e=e[0]}r=e}r==null&&(r=""),e=r}n._wrapperState={initialValue:Te(e)}}function k4(n,r){var e=Te(r.value),A=Te(r.defaultValue);e!=null&&(e=""+e,e!==n.value&&(n.value=e),r.defaultValue==null&&n.defaultValue!==e&&(n.defaultValue=e)),A!=null&&(n.defaultValue=""+A)}function mi(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function I4(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ja(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?I4(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Lo,N4=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,e,A,t){MSApp.execUnsafeLocalFunction(function(){return n(r,e,A,t)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Lo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ct(n,r){if(r){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=r;return}}n.textContent=r}var Gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I7=["Webkit","ms","Moz","O"];Object.keys(Gt).forEach(function(n){I7.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Gt[r]=Gt[n]})});function E4(n,r,e){return r==null||typeof r=="boolean"||r===""?"":e||typeof r!="number"||r===0||Gt.hasOwnProperty(n)&&Gt[n]?(""+r).trim():r+"px"}function M4(n,r){n=n.style;for(var e in r)if(r.hasOwnProperty(e)){var A=e.indexOf("--")===0,t=E4(e,r[e],A);e==="float"&&(e="cssFloat"),A?n.setProperty(e,t):n[e]=t}}var N7=rn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(n,r){if(r){if(N7[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(X(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(X(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(X(61))}if(r.style!=null&&typeof r.style!="object")throw Error(X(62))}}function za(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oa=null;function q2(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var qa=null,fA=null,vA=null;function Bi(n){if(n=_t(n)){if(typeof qa!="function")throw Error(X(280));var r=n.stateNode;r&&(r=P1(r),qa(n.stateNode,n.type,r))}}function P4(n){fA?vA?vA.push(n):vA=[n]:fA=n}function m4(){if(fA){var n=fA,r=vA;if(vA=fA=null,Bi(n),r)for(n=0;n<r.length;n++)Bi(r[n])}}function B4(n,r){return n(r)}function D4(){}var Ra=!1;function g4(n,r,e){if(Ra)return n(r,e);Ra=!0;try{return B4(n,r,e)}finally{Ra=!1,(fA!==null||vA!==null)&&(D4(),m4())}}function St(n,r){var e=n.stateNode;if(e===null)return null;var A=P1(e);if(A===null)return null;e=A[r];n:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(A=!A.disabled)||(n=n.type,A=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!A;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(X(231,r,typeof e));return e}var n2=!1;if(Wr)try{var _A={};Object.defineProperty(_A,"passive",{get:function(){n2=!0}}),window.addEventListener("test",_A,_A),window.removeEventListener("test",_A,_A)}catch{n2=!1}function E7(n,r,e,A,t,o,a,l,R){var G=Array.prototype.slice.call(arguments,3);try{r.apply(e,G)}catch(u){this.onError(u)}}var st=!1,Oo=null,qo=!1,r2=null,M7={onError:function(n){st=!0,Oo=n}};function P7(n,r,e,A,t,o,a,l,R){st=!1,Oo=null,E7.apply(M7,arguments)}function m7(n,r,e,A,t,o,a,l,R){if(P7.apply(this,arguments),st){if(st){var G=Oo;st=!1,Oo=null}else throw Error(X(198));qo||(qo=!0,r2=G)}}function we(n){var r=n,e=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(e=r.return),n=r.return;while(n)}return r.tag===3?e:null}function J4(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Di(n){if(we(n)!==n)throw Error(X(188))}function B7(n){var r=n.alternate;if(!r){if(r=we(n),r===null)throw Error(X(188));return r!==n?null:n}for(var e=n,A=r;;){var t=e.return;if(t===null)break;var o=t.alternate;if(o===null){if(A=t.return,A!==null){e=A;continue}break}if(t.child===o.child){for(o=t.child;o;){if(o===e)return Di(t),n;if(o===A)return Di(t),r;o=o.sibling}throw Error(X(188))}if(e.return!==A.return)e=t,A=o;else{for(var a=!1,l=t.child;l;){if(l===e){a=!0,e=t,A=o;break}if(l===A){a=!0,A=t,e=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===e){a=!0,e=o,A=t;break}if(l===A){a=!0,A=o,e=t;break}l=l.sibling}if(!a)throw Error(X(189))}}if(e.alternate!==A)throw Error(X(190))}if(e.tag!==3)throw Error(X(188));return e.stateNode.current===e?n:r}function H4(n){return n=B7(n),n!==null?K4(n):null}function K4(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=K4(n);if(r!==null)return r;n=n.sibling}return null}var V4=On.unstable_scheduleCallback,gi=On.unstable_cancelCallback,D7=On.unstable_shouldYield,g7=On.unstable_requestPaint,an=On.unstable_now,J7=On.unstable_getCurrentPriorityLevel,nl=On.unstable_ImmediatePriority,W4=On.unstable_UserBlockingPriority,n1=On.unstable_NormalPriority,H7=On.unstable_LowPriority,F4=On.unstable_IdlePriority,I1=null,pr=null;function K7(n){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot(I1,n,void 0,(n.current.flags&128)===128)}catch{}}var Lr=Math.clz32?Math.clz32:F7,V7=Math.log,W7=Math.LN2;function F7(n){return n>>>=0,n===0?32:31-(V7(n)/W7|0)|0}var To=64,bo=4194304;function at(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function r1(n,r){var e=n.pendingLanes;if(e===0)return 0;var A=0,t=n.suspendedLanes,o=n.pingedLanes,a=e&268435455;if(a!==0){var l=a&~t;l!==0?A=at(l):(o&=a,o!==0&&(A=at(o)))}else a=e&~t,a!==0?A=at(a):o!==0&&(A=at(o));if(A===0)return 0;if(r!==0&&r!==A&&!(r&t)&&(t=A&-A,o=r&-r,t>=o||t===16&&(o&4194240)!==0))return r;if(A&4&&(A|=e&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=A;0<r;)e=31-Lr(r),t=1<<e,A|=n[e],r&=~t;return A}function X7(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q7(n,r){for(var e=n.suspendedLanes,A=n.pingedLanes,t=n.expirationTimes,o=n.pendingLanes;0<o;){var a=31-Lr(o),l=1<<a,R=t[a];R===-1?(!(l&e)||l&A)&&(t[a]=X7(l,r)):R<=r&&(n.expiredLanes|=l),o&=~l}}function e2(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function X4(){var n=To;return To<<=1,!(To&4194240)&&(To=64),n}function ca(n){for(var r=[],e=0;31>e;e++)r.push(n);return r}function Zt(n,r,e){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Lr(r),n[r]=e}function x7(n,r){var e=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var A=n.eventTimes;for(n=n.expirationTimes;0<e;){var t=31-Lr(e),o=1<<t;r[t]=0,A[t]=-1,n[t]=-1,e&=~o}}function rl(n,r){var e=n.entangledLanes|=r;for(n=n.entanglements;e;){var A=31-Lr(e),t=1<<A;t&r|n[A]&r&&(n[A]|=r),e&=~t}}var W0=0;function Q4(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var x4,el,Z4,w4,_4,A2=!1,fo=[],ie=null,Re=null,ce=null,pt=new Map,kt=new Map,te=[],Z7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ji(n,r){switch(n){case"focusin":case"focusout":ie=null;break;case"dragenter":case"dragleave":Re=null;break;case"mouseover":case"mouseout":ce=null;break;case"pointerover":case"pointerout":pt.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":kt.delete(r.pointerId)}}function jA(n,r,e,A,t,o){return n===null||n.nativeEvent!==o?(n={blockedOn:r,domEventName:e,eventSystemFlags:A,nativeEvent:o,targetContainers:[t]},r!==null&&(r=_t(r),r!==null&&el(r)),n):(n.eventSystemFlags|=A,r=n.targetContainers,t!==null&&r.indexOf(t)===-1&&r.push(t),n)}function w7(n,r,e,A,t){switch(r){case"focusin":return ie=jA(ie,n,r,e,A,t),!0;case"dragenter":return Re=jA(Re,n,r,e,A,t),!0;case"mouseover":return ce=jA(ce,n,r,e,A,t),!0;case"pointerover":var o=t.pointerId;return pt.set(o,jA(pt.get(o)||null,n,r,e,A,t)),!0;case"gotpointercapture":return o=t.pointerId,kt.set(o,jA(kt.get(o)||null,n,r,e,A,t)),!0}return!1}function j4(n){var r=me(n.target);if(r!==null){var e=we(r);if(e!==null){if(r=e.tag,r===13){if(r=J4(e),r!==null){n.blockedOn=r,_4(n.priority,function(){Z4(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ho(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var e=t2(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(e===null){e=n.nativeEvent;var A=new e.constructor(e.type,e);Oa=A,e.target.dispatchEvent(A),Oa=null}else return r=_t(e),r!==null&&el(r),n.blockedOn=e,!1;r.shift()}return!0}function Hi(n,r,e){Ho(n)&&e.delete(r)}function _7(){A2=!1,ie!==null&&Ho(ie)&&(ie=null),Re!==null&&Ho(Re)&&(Re=null),ce!==null&&Ho(ce)&&(ce=null),pt.forEach(Hi),kt.forEach(Hi)}function $A(n,r){n.blockedOn===r&&(n.blockedOn=null,A2||(A2=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,_7)))}function It(n){function r(t){return $A(t,n)}if(0<fo.length){$A(fo[0],n);for(var e=1;e<fo.length;e++){var A=fo[e];A.blockedOn===n&&(A.blockedOn=null)}}for(ie!==null&&$A(ie,n),Re!==null&&$A(Re,n),ce!==null&&$A(ce,n),pt.forEach(r),kt.forEach(r),e=0;e<te.length;e++)A=te[e],A.blockedOn===n&&(A.blockedOn=null);for(;0<te.length&&(e=te[0],e.blockedOn===null);)j4(e),e.blockedOn===null&&te.shift()}var yA=Zr.ReactCurrentBatchConfig,e1=!0;function j7(n,r,e,A){var t=W0,o=yA.transition;yA.transition=null;try{W0=1,Al(n,r,e,A)}finally{W0=t,yA.transition=o}}function $7(n,r,e,A){var t=W0,o=yA.transition;yA.transition=null;try{W0=4,Al(n,r,e,A)}finally{W0=t,yA.transition=o}}function Al(n,r,e,A){if(e1){var t=t2(n,r,e,A);if(t===null)ya(n,r,A,A1,e),Ji(n,A);else if(w7(t,n,r,e,A))A.stopPropagation();else if(Ji(n,A),r&4&&-1<Z7.indexOf(n)){for(;t!==null;){var o=_t(t);if(o!==null&&x4(o),o=t2(n,r,e,A),o===null&&ya(n,r,A,A1,e),o===t)break;t=o}t!==null&&A.stopPropagation()}else ya(n,r,A,null,e)}}var A1=null;function t2(n,r,e,A){if(A1=null,n=q2(A),n=me(n),n!==null)if(r=we(n),r===null)n=null;else if(e=r.tag,e===13){if(n=J4(r),n!==null)return n;n=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return A1=n,null}function $4(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J7()){case nl:return 1;case W4:return 4;case n1:case H7:return 16;case F4:return 536870912;default:return 16}default:return 16}}var ae=null,tl=null,Ko=null;function z4(){if(Ko)return Ko;var n,r=tl,e=r.length,A,t="value"in ae?ae.value:ae.textContent,o=t.length;for(n=0;n<e&&r[n]===t[n];n++);var a=e-n;for(A=1;A<=a&&r[e-A]===t[o-A];A++);return Ko=t.slice(n,1<A?1-A:void 0)}function Vo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function vo(){return!0}function Ki(){return!1}function nr(n){function r(e,A,t,o,a){this._reactName=e,this._targetInst=t,this.type=A,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(e=n[l],this[l]=e?e(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vo:Ki,this.isPropagationStopped=Ki,this}return rn(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),r}var BA={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=nr(BA),wt=rn({},BA,{view:0,detail:0}),z7=nr(wt),Ga,sa,zA,N1=rn({},wt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zA&&(zA&&n.type==="mousemove"?(Ga=n.screenX-zA.screenX,sa=n.screenY-zA.screenY):sa=Ga=0,zA=n),Ga)},movementY:function(n){return"movementY"in n?n.movementY:sa}}),Vi=nr(N1),O7=rn({},N1,{dataTransfer:0}),q7=nr(O7),n9=rn({},wt,{relatedTarget:0}),ua=nr(n9),r9=rn({},BA,{animationName:0,elapsedTime:0,pseudoElement:0}),e9=nr(r9),A9=rn({},BA,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),t9=nr(A9),o9=rn({},BA,{data:0}),Wi=nr(o9),a9={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l9={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i9={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R9(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=i9[n])?!!r[n]:!1}function al(){return R9}var c9=rn({},wt,{key:function(n){if(n.key){var r=a9[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?l9[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(n){return n.type==="keypress"?Vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),G9=nr(c9),s9=rn({},N1,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fi=nr(s9),u9=rn({},wt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),U9=nr(u9),L9=rn({},BA,{propertyName:0,elapsedTime:0,pseudoElement:0}),T9=nr(L9),b9=rn({},N1,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),f9=nr(b9),v9=[9,13,27,32],ll=Wr&&"CompositionEvent"in window,ut=null;Wr&&"documentMode"in document&&(ut=document.documentMode);var y9=Wr&&"TextEvent"in window&&!ut,O4=Wr&&(!ll||ut&&8<ut&&11>=ut),Xi=" ",Qi=!1;function q4(n,r){switch(n){case"keyup":return v9.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n6(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var lA=!1;function d9(n,r){switch(n){case"compositionend":return n6(r);case"keypress":return r.which!==32?null:(Qi=!0,Xi);case"textInput":return n=r.data,n===Xi&&Qi?null:n;default:return null}}function Y9(n,r){if(lA)return n==="compositionend"||!ll&&q4(n,r)?(n=z4(),Ko=tl=ae=null,lA=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return O4&&r.locale!=="ko"?null:r.data;default:return null}}var h9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xi(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!h9[n.type]:r==="textarea"}function r6(n,r,e,A){P4(A),r=t1(r,"onChange"),0<r.length&&(e=new ol("onChange","change",null,e,A),n.push({event:e,listeners:r}))}var Ut=null,Nt=null;function C9(n){s6(n,0)}function E1(n){var r=cA(n);if(S4(r))return n}function S9(n,r){if(n==="change")return r}var e6=!1;if(Wr){var Ua;if(Wr){var La="oninput"in document;if(!La){var Zi=document.createElement("div");Zi.setAttribute("oninput","return;"),La=typeof Zi.oninput=="function"}Ua=La}else Ua=!1;e6=Ua&&(!document.documentMode||9<document.documentMode)}function wi(){Ut&&(Ut.detachEvent("onpropertychange",A6),Nt=Ut=null)}function A6(n){if(n.propertyName==="value"&&E1(Nt)){var r=[];r6(r,Nt,n,q2(n)),g4(C9,r)}}function p9(n,r,e){n==="focusin"?(wi(),Ut=r,Nt=e,Ut.attachEvent("onpropertychange",A6)):n==="focusout"&&wi()}function k9(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return E1(Nt)}function I9(n,r){if(n==="click")return E1(r)}function N9(n,r){if(n==="input"||n==="change")return E1(r)}function E9(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var br=typeof Object.is=="function"?Object.is:E9;function Et(n,r){if(br(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var e=Object.keys(n),A=Object.keys(r);if(e.length!==A.length)return!1;for(A=0;A<e.length;A++){var t=e[A];if(!Va.call(r,t)||!br(n[t],r[t]))return!1}return!0}function _i(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ji(n,r){var e=_i(n);n=0;for(var A;e;){if(e.nodeType===3){if(A=n+e.textContent.length,n<=r&&A>=r)return{node:e,offset:r-n};n=A}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=_i(e)}}function t6(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?t6(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function o6(){for(var n=window,r=zo();r instanceof n.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)n=r.contentWindow;else break;r=zo(n.document)}return r}function il(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function M9(n){var r=o6(),e=n.focusedElem,A=n.selectionRange;if(r!==e&&e&&e.ownerDocument&&t6(e.ownerDocument.documentElement,e)){if(A!==null&&il(e)){if(r=A.start,n=A.end,n===void 0&&(n=r),"selectionStart"in e)e.selectionStart=r,e.selectionEnd=Math.min(n,e.value.length);else if(n=(r=e.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var t=e.textContent.length,o=Math.min(A.start,t);A=A.end===void 0?o:Math.min(A.end,t),!n.extend&&o>A&&(t=A,A=o,o=t),t=ji(e,o);var a=ji(e,A);t&&a&&(n.rangeCount!==1||n.anchorNode!==t.node||n.anchorOffset!==t.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(r=r.createRange(),r.setStart(t.node,t.offset),n.removeAllRanges(),o>A?(n.addRange(r),n.extend(a.node,a.offset)):(r.setEnd(a.node,a.offset),n.addRange(r)))}}for(r=[],n=e;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<r.length;e++)n=r[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var P9=Wr&&"documentMode"in document&&11>=document.documentMode,iA=null,o2=null,Lt=null,a2=!1;function $i(n,r,e){var A=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;a2||iA==null||iA!==zo(A)||(A=iA,"selectionStart"in A&&il(A)?A={start:A.selectionStart,end:A.selectionEnd}:(A=(A.ownerDocument&&A.ownerDocument.defaultView||window).getSelection(),A={anchorNode:A.anchorNode,anchorOffset:A.anchorOffset,focusNode:A.focusNode,focusOffset:A.focusOffset}),Lt&&Et(Lt,A)||(Lt=A,A=t1(o2,"onSelect"),0<A.length&&(r=new ol("onSelect","select",null,r,e),n.push({event:r,listeners:A}),r.target=iA)))}function yo(n,r){var e={};return e[n.toLowerCase()]=r.toLowerCase(),e["Webkit"+n]="webkit"+r,e["Moz"+n]="moz"+r,e}var RA={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Ta={},a6={};Wr&&(a6=document.createElement("div").style,"AnimationEvent"in window||(delete RA.animationend.animation,delete RA.animationiteration.animation,delete RA.animationstart.animation),"TransitionEvent"in window||delete RA.transitionend.transition);function M1(n){if(Ta[n])return Ta[n];if(!RA[n])return n;var r=RA[n],e;for(e in r)if(r.hasOwnProperty(e)&&e in a6)return Ta[n]=r[e];return n}var l6=M1("animationend"),i6=M1("animationiteration"),R6=M1("animationstart"),c6=M1("transitionend"),G6=new Map,zi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fe(n,r){G6.set(n,r),Ze(r,[n])}for(var ba=0;ba<zi.length;ba++){var fa=zi[ba],m9=fa.toLowerCase(),B9=fa[0].toUpperCase()+fa.slice(1);fe(m9,"on"+B9)}fe(l6,"onAnimationEnd");fe(i6,"onAnimationIteration");fe(R6,"onAnimationStart");fe("dblclick","onDoubleClick");fe("focusin","onFocus");fe("focusout","onBlur");fe(c6,"onTransitionEnd");CA("onMouseEnter",["mouseout","mouseover"]);CA("onMouseLeave",["mouseout","mouseover"]);CA("onPointerEnter",["pointerout","pointerover"]);CA("onPointerLeave",["pointerout","pointerover"]);Ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ze("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D9=new Set("cancel close invalid load scroll toggle".split(" ").concat(lt));function Oi(n,r,e){var A=n.type||"unknown-event";n.currentTarget=e,m7(A,r,void 0,n),n.currentTarget=null}function s6(n,r){r=(r&4)!==0;for(var e=0;e<n.length;e++){var A=n[e],t=A.event;A=A.listeners;n:{var o=void 0;if(r)for(var a=A.length-1;0<=a;a--){var l=A[a],R=l.instance,G=l.currentTarget;if(l=l.listener,R!==o&&t.isPropagationStopped())break n;Oi(t,l,G),o=R}else for(a=0;a<A.length;a++){if(l=A[a],R=l.instance,G=l.currentTarget,l=l.listener,R!==o&&t.isPropagationStopped())break n;Oi(t,l,G),o=R}}}if(qo)throw n=r2,qo=!1,r2=null,n}function w0(n,r){var e=r[G2];e===void 0&&(e=r[G2]=new Set);var A=n+"__bubble";e.has(A)||(u6(r,n,2,!1),e.add(A))}function va(n,r,e){var A=0;r&&(A|=4),u6(e,n,A,r)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Mt(n){if(!n[Yo]){n[Yo]=!0,y4.forEach(function(e){e!=="selectionchange"&&(D9.has(e)||va(e,!1,n),va(e,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Yo]||(r[Yo]=!0,va("selectionchange",!1,r))}}function u6(n,r,e,A){switch($4(r)){case 1:var t=j7;break;case 4:t=$7;break;default:t=Al}e=t.bind(null,r,e,n),t=void 0,!n2||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(t=!0),A?t!==void 0?n.addEventListener(r,e,{capture:!0,passive:t}):n.addEventListener(r,e,!0):t!==void 0?n.addEventListener(r,e,{passive:t}):n.addEventListener(r,e,!1)}function ya(n,r,e,A,t){var o=A;if(!(r&1)&&!(r&2)&&A!==null)n:for(;;){if(A===null)return;var a=A.tag;if(a===3||a===4){var l=A.stateNode.containerInfo;if(l===t||l.nodeType===8&&l.parentNode===t)break;if(a===4)for(a=A.return;a!==null;){var R=a.tag;if((R===3||R===4)&&(R=a.stateNode.containerInfo,R===t||R.nodeType===8&&R.parentNode===t))return;a=a.return}for(;l!==null;){if(a=me(l),a===null)return;if(R=a.tag,R===5||R===6){A=o=a;continue n}l=l.parentNode}}A=A.return}g4(function(){var G=o,u=q2(e),b=[];n:{var f=G6.get(n);if(f!==void 0){var h=ol,k=n;switch(n){case"keypress":if(Vo(e)===0)break n;case"keydown":case"keyup":h=G9;break;case"focusin":k="focus",h=ua;break;case"focusout":k="blur",h=ua;break;case"beforeblur":case"afterblur":h=ua;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Vi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=q7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=U9;break;case l6:case i6:case R6:h=e9;break;case c6:h=T9;break;case"scroll":h=z7;break;case"wheel":h=f9;break;case"copy":case"cut":case"paste":h=t9;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Fi}var E=(r&4)!==0,R0=!E&&n==="scroll",y=E?f!==null?f+"Capture":null:f;E=[];for(var v=G,d;v!==null;){d=v;var B=d.stateNode;if(d.tag===5&&B!==null&&(d=B,y!==null&&(B=St(v,y),B!=null&&E.push(Pt(v,B,d)))),R0)break;v=v.return}0<E.length&&(f=new h(f,k,null,e,u),b.push({event:f,listeners:E}))}}if(!(r&7)){n:{if(f=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",f&&e!==Oa&&(k=e.relatedTarget||e.fromElement)&&(me(k)||k[Fr]))break n;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(k=e.relatedTarget||e.toElement,h=G,k=k?me(k):null,k!==null&&(R0=we(k),k!==R0||k.tag!==5&&k.tag!==6)&&(k=null)):(h=null,k=G),h!==k)){if(E=Vi,B="onMouseLeave",y="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(E=Fi,B="onPointerLeave",y="onPointerEnter",v="pointer"),R0=h==null?f:cA(h),d=k==null?f:cA(k),f=new E(B,v+"leave",h,e,u),f.target=R0,f.relatedTarget=d,B=null,me(u)===G&&(E=new E(y,v+"enter",k,e,u),E.target=d,E.relatedTarget=R0,B=E),R0=B,h&&k)r:{for(E=h,y=k,v=0,d=E;d;d=AA(d))v++;for(d=0,B=y;B;B=AA(B))d++;for(;0<v-d;)E=AA(E),v--;for(;0<d-v;)y=AA(y),d--;for(;v--;){if(E===y||y!==null&&E===y.alternate)break r;E=AA(E),y=AA(y)}E=null}else E=null;h!==null&&qi(b,f,h,E,!1),k!==null&&R0!==null&&qi(b,R0,k,E,!0)}}n:{if(f=G?cA(G):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var _=S9;else if(xi(f))if(e6)_=N9;else{_=k9;var A0=p9}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=I9);if(_&&(_=_(n,G))){r6(b,_,e,u);break n}A0&&A0(n,f,G),n==="focusout"&&(A0=f._wrapperState)&&A0.controlled&&f.type==="number"&&wa(f,"number",f.value)}switch(A0=G?cA(G):window,n){case"focusin":(xi(A0)||A0.contentEditable==="true")&&(iA=A0,o2=G,Lt=null);break;case"focusout":Lt=o2=iA=null;break;case"mousedown":a2=!0;break;case"contextmenu":case"mouseup":case"dragend":a2=!1,$i(b,e,u);break;case"selectionchange":if(P9)break;case"keydown":case"keyup":$i(b,e,u)}var t0;if(ll)n:{switch(n){case"compositionstart":var n0="onCompositionStart";break n;case"compositionend":n0="onCompositionEnd";break n;case"compositionupdate":n0="onCompositionUpdate";break n}n0=void 0}else lA?q4(n,e)&&(n0="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(n0="onCompositionStart");n0&&(O4&&e.locale!=="ko"&&(lA||n0!=="onCompositionStart"?n0==="onCompositionEnd"&&lA&&(t0=z4()):(ae=u,tl="value"in ae?ae.value:ae.textContent,lA=!0)),A0=t1(G,n0),0<A0.length&&(n0=new Wi(n0,n,null,e,u),b.push({event:n0,listeners:A0}),t0?n0.data=t0:(t0=n6(e),t0!==null&&(n0.data=t0)))),(t0=y9?d9(n,e):Y9(n,e))&&(G=t1(G,"onBeforeInput"),0<G.length&&(u=new Wi("onBeforeInput","beforeinput",null,e,u),b.push({event:u,listeners:G}),u.data=t0))}s6(b,r)})}function Pt(n,r,e){return{instance:n,listener:r,currentTarget:e}}function t1(n,r){for(var e=r+"Capture",A=[];n!==null;){var t=n,o=t.stateNode;t.tag===5&&o!==null&&(t=o,o=St(n,e),o!=null&&A.unshift(Pt(n,o,t)),o=St(n,r),o!=null&&A.push(Pt(n,o,t))),n=n.return}return A}function AA(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qi(n,r,e,A,t){for(var o=r._reactName,a=[];e!==null&&e!==A;){var l=e,R=l.alternate,G=l.stateNode;if(R!==null&&R===A)break;l.tag===5&&G!==null&&(l=G,t?(R=St(e,o),R!=null&&a.unshift(Pt(e,R,l))):t||(R=St(e,o),R!=null&&a.push(Pt(e,R,l)))),e=e.return}a.length!==0&&n.push({event:r,listeners:a})}var g9=/\r\n?/g,J9=/\u0000|\uFFFD/g;function n3(n){return(typeof n=="string"?n:""+n).replace(g9,`
`).replace(J9,"")}function ho(n,r,e){if(r=n3(r),n3(n)!==r&&e)throw Error(X(425))}function o1(){}var l2=null,i2=null;function R2(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var c2=typeof setTimeout=="function"?setTimeout:void 0,H9=typeof clearTimeout=="function"?clearTimeout:void 0,r3=typeof Promise=="function"?Promise:void 0,K9=typeof queueMicrotask=="function"?queueMicrotask:typeof r3<"u"?function(n){return r3.resolve(null).then(n).catch(V9)}:c2;function V9(n){setTimeout(function(){throw n})}function da(n,r){var e=r,A=0;do{var t=e.nextSibling;if(n.removeChild(e),t&&t.nodeType===8)if(e=t.data,e==="/$"){if(A===0){n.removeChild(t),It(r);return}A--}else e!=="$"&&e!=="$?"&&e!=="$!"||A++;e=t}while(e);It(r)}function Ge(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function e3(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(r===0)return n;r--}else e==="/$"&&r++}n=n.previousSibling}return null}var DA=Math.random().toString(36).slice(2),Sr="__reactFiber$"+DA,mt="__reactProps$"+DA,Fr="__reactContainer$"+DA,G2="__reactEvents$"+DA,W9="__reactListeners$"+DA,F9="__reactHandles$"+DA;function me(n){var r=n[Sr];if(r)return r;for(var e=n.parentNode;e;){if(r=e[Fr]||e[Sr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(n=e3(n);n!==null;){if(e=n[Sr])return e;n=e3(n)}return r}n=e,e=n.parentNode}return null}function _t(n){return n=n[Sr]||n[Fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cA(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(X(33))}function P1(n){return n[mt]||null}var s2=[],GA=-1;function ve(n){return{current:n}}function _0(n){0>GA||(n.current=s2[GA],s2[GA]=null,GA--)}function x0(n,r){GA++,s2[GA]=n.current,n.current=r}var be={},kn=ve(be),Zn=ve(!1),Ve=be;function SA(n,r){var e=n.type.contextTypes;if(!e)return be;var A=n.stateNode;if(A&&A.__reactInternalMemoizedUnmaskedChildContext===r)return A.__reactInternalMemoizedMaskedChildContext;var t={},o;for(o in e)t[o]=r[o];return A&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=t),t}function wn(n){return n=n.childContextTypes,n!=null}function a1(){_0(Zn),_0(kn)}function A3(n,r,e){if(kn.current!==be)throw Error(X(168));x0(kn,r),x0(Zn,e)}function U6(n,r,e){var A=n.stateNode;if(r=r.childContextTypes,typeof A.getChildContext!="function")return e;A=A.getChildContext();for(var t in A)if(!(t in r))throw Error(X(108,p7(n)||"Unknown",t));return rn({},e,A)}function l1(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||be,Ve=kn.current,x0(kn,n),x0(Zn,Zn.current),!0}function t3(n,r,e){var A=n.stateNode;if(!A)throw Error(X(169));e?(n=U6(n,r,Ve),A.__reactInternalMemoizedMergedChildContext=n,_0(Zn),_0(kn),x0(kn,n)):_0(Zn),x0(Zn,e)}var Jr=null,m1=!1,Ya=!1;function L6(n){Jr===null?Jr=[n]:Jr.push(n)}function X9(n){m1=!0,L6(n)}function ye(){if(!Ya&&Jr!==null){Ya=!0;var n=0,r=W0;try{var e=Jr;for(W0=1;n<e.length;n++){var A=e[n];do A=A(!0);while(A!==null)}Jr=null,m1=!1}catch(t){throw Jr!==null&&(Jr=Jr.slice(n+1)),V4(nl,ye),t}finally{W0=r,Ya=!1}}return null}var sA=[],uA=0,i1=null,R1=0,rr=[],er=0,We=null,Hr=1,Kr="";function Me(n,r){sA[uA++]=R1,sA[uA++]=i1,i1=n,R1=r}function T6(n,r,e){rr[er++]=Hr,rr[er++]=Kr,rr[er++]=We,We=n;var A=Hr;n=Kr;var t=32-Lr(A)-1;A&=~(1<<t),e+=1;var o=32-Lr(r)+t;if(30<o){var a=t-t%5;o=(A&(1<<a)-1).toString(32),A>>=a,t-=a,Hr=1<<32-Lr(r)+t|e<<t|A,Kr=o+n}else Hr=1<<o|e<<t|A,Kr=n}function Rl(n){n.return!==null&&(Me(n,1),T6(n,1,0))}function cl(n){for(;n===i1;)i1=sA[--uA],sA[uA]=null,R1=sA[--uA],sA[uA]=null;for(;n===We;)We=rr[--er],rr[er]=null,Kr=rr[--er],rr[er]=null,Hr=rr[--er],rr[er]=null}var zn=null,$n=null,z0=!1,ur=null;function b6(n,r){var e=Ar(5,null,null,0);e.elementType="DELETED",e.stateNode=r,e.return=n,r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)}function o3(n,r){switch(n.tag){case 5:var e=n.type;return r=r.nodeType!==1||e.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,zn=n,$n=Ge(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,zn=n,$n=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(e=We!==null?{id:Hr,overflow:Kr}:null,n.memoizedState={dehydrated:r,treeContext:e,retryLane:1073741824},e=Ar(18,null,null,0),e.stateNode=r,e.return=n,n.child=e,zn=n,$n=null,!0):!1;default:return!1}}function u2(n){return(n.mode&1)!==0&&(n.flags&128)===0}function U2(n){if(z0){var r=$n;if(r){var e=r;if(!o3(n,r)){if(u2(n))throw Error(X(418));r=Ge(e.nextSibling);var A=zn;r&&o3(n,r)?b6(A,e):(n.flags=n.flags&-4097|2,z0=!1,zn=n)}}else{if(u2(n))throw Error(X(418));n.flags=n.flags&-4097|2,z0=!1,zn=n}}}function a3(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Co(n){if(n!==zn)return!1;if(!z0)return a3(n),z0=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!R2(n.type,n.memoizedProps)),r&&(r=$n)){if(u2(n))throw f6(),Error(X(418));for(;r;)b6(n,r),r=Ge(r.nextSibling)}if(a3(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(X(317));n:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"){if(r===0){$n=Ge(n.nextSibling);break n}r--}else e!=="$"&&e!=="$!"&&e!=="$?"||r++}n=n.nextSibling}$n=null}}else $n=zn?Ge(n.stateNode.nextSibling):null;return!0}function f6(){for(var n=$n;n;)n=Ge(n.nextSibling)}function pA(){$n=zn=null,z0=!1}function Gl(n){ur===null?ur=[n]:ur.push(n)}var Q9=Zr.ReactCurrentBatchConfig;function OA(n,r,e){if(n=e.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(X(309));var A=e.stateNode}if(!A)throw Error(X(147,n));var t=A,o=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(a){var l=t.refs;a===null?delete l[o]:l[o]=a},r._stringRef=o,r)}if(typeof n!="string")throw Error(X(284));if(!e._owner)throw Error(X(290,n))}return n}function So(n,r){throw n=Object.prototype.toString.call(r),Error(X(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function l3(n){var r=n._init;return r(n._payload)}function v6(n){function r(y,v){if(n){var d=y.deletions;d===null?(y.deletions=[v],y.flags|=16):d.push(v)}}function e(y,v){if(!n)return null;for(;v!==null;)r(y,v),v=v.sibling;return null}function A(y,v){for(y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function t(y,v){return y=Le(y,v),y.index=0,y.sibling=null,y}function o(y,v,d){return y.index=d,n?(d=y.alternate,d!==null?(d=d.index,d<v?(y.flags|=2,v):d):(y.flags|=2,v)):(y.flags|=1048576,v)}function a(y){return n&&y.alternate===null&&(y.flags|=2),y}function l(y,v,d,B){return v===null||v.tag!==6?(v=Na(d,y.mode,B),v.return=y,v):(v=t(v,d),v.return=y,v)}function R(y,v,d,B){var _=d.type;return _===aA?u(y,v,d.props.children,B,d.key):v!==null&&(v.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===re&&l3(_)===v.type)?(B=t(v,d.props),B.ref=OA(y,v,d),B.return=y,B):(B=wo(d.type,d.key,d.props,null,y.mode,B),B.ref=OA(y,v,d),B.return=y,B)}function G(y,v,d,B){return v===null||v.tag!==4||v.stateNode.containerInfo!==d.containerInfo||v.stateNode.implementation!==d.implementation?(v=Ea(d,y.mode,B),v.return=y,v):(v=t(v,d.children||[]),v.return=y,v)}function u(y,v,d,B,_){return v===null||v.tag!==7?(v=He(d,y.mode,B,_),v.return=y,v):(v=t(v,d),v.return=y,v)}function b(y,v,d){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Na(""+v,y.mode,d),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case uo:return d=wo(v.type,v.key,v.props,null,y.mode,d),d.ref=OA(y,null,v),d.return=y,d;case oA:return v=Ea(v,y.mode,d),v.return=y,v;case re:var B=v._init;return b(y,B(v._payload),d)}if(ot(v)||wA(v))return v=He(v,y.mode,d,null),v.return=y,v;So(y,v)}return null}function f(y,v,d,B){var _=v!==null?v.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:l(y,v,""+d,B);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case uo:return d.key===_?R(y,v,d,B):null;case oA:return d.key===_?G(y,v,d,B):null;case re:return _=d._init,f(y,v,_(d._payload),B)}if(ot(d)||wA(d))return _!==null?null:u(y,v,d,B,null);So(y,d)}return null}function h(y,v,d,B,_){if(typeof B=="string"&&B!==""||typeof B=="number")return y=y.get(d)||null,l(v,y,""+B,_);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case uo:return y=y.get(B.key===null?d:B.key)||null,R(v,y,B,_);case oA:return y=y.get(B.key===null?d:B.key)||null,G(v,y,B,_);case re:var A0=B._init;return h(y,v,d,A0(B._payload),_)}if(ot(B)||wA(B))return y=y.get(d)||null,u(v,y,B,_,null);So(v,B)}return null}function k(y,v,d,B){for(var _=null,A0=null,t0=v,n0=v=0,j0=null;t0!==null&&n0<d.length;n0++){t0.index>n0?(j0=t0,t0=null):j0=t0.sibling;var p0=f(y,t0,d[n0],B);if(p0===null){t0===null&&(t0=j0);break}n&&t0&&p0.alternate===null&&r(y,t0),v=o(p0,v,n0),A0===null?_=p0:A0.sibling=p0,A0=p0,t0=j0}if(n0===d.length)return e(y,t0),z0&&Me(y,n0),_;if(t0===null){for(;n0<d.length;n0++)t0=b(y,d[n0],B),t0!==null&&(v=o(t0,v,n0),A0===null?_=t0:A0.sibling=t0,A0=t0);return z0&&Me(y,n0),_}for(t0=A(y,t0);n0<d.length;n0++)j0=h(t0,y,n0,d[n0],B),j0!==null&&(n&&j0.alternate!==null&&t0.delete(j0.key===null?n0:j0.key),v=o(j0,v,n0),A0===null?_=j0:A0.sibling=j0,A0=j0);return n&&t0.forEach(function(In){return r(y,In)}),z0&&Me(y,n0),_}function E(y,v,d,B){var _=wA(d);if(typeof _!="function")throw Error(X(150));if(d=_.call(d),d==null)throw Error(X(151));for(var A0=_=null,t0=v,n0=v=0,j0=null,p0=d.next();t0!==null&&!p0.done;n0++,p0=d.next()){t0.index>n0?(j0=t0,t0=null):j0=t0.sibling;var In=f(y,t0,p0.value,B);if(In===null){t0===null&&(t0=j0);break}n&&t0&&In.alternate===null&&r(y,t0),v=o(In,v,n0),A0===null?_=In:A0.sibling=In,A0=In,t0=j0}if(p0.done)return e(y,t0),z0&&Me(y,n0),_;if(t0===null){for(;!p0.done;n0++,p0=d.next())p0=b(y,p0.value,B),p0!==null&&(v=o(p0,v,n0),A0===null?_=p0:A0.sibling=p0,A0=p0);return z0&&Me(y,n0),_}for(t0=A(y,t0);!p0.done;n0++,p0=d.next())p0=h(t0,y,n0,p0.value,B),p0!==null&&(n&&p0.alternate!==null&&t0.delete(p0.key===null?n0:p0.key),v=o(p0,v,n0),A0===null?_=p0:A0.sibling=p0,A0=p0);return n&&t0.forEach(function(s0){return r(y,s0)}),z0&&Me(y,n0),_}function R0(y,v,d,B){if(typeof d=="object"&&d!==null&&d.type===aA&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case uo:n:{for(var _=d.key,A0=v;A0!==null;){if(A0.key===_){if(_=d.type,_===aA){if(A0.tag===7){e(y,A0.sibling),v=t(A0,d.props.children),v.return=y,y=v;break n}}else if(A0.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===re&&l3(_)===A0.type){e(y,A0.sibling),v=t(A0,d.props),v.ref=OA(y,A0,d),v.return=y,y=v;break n}e(y,A0);break}else r(y,A0);A0=A0.sibling}d.type===aA?(v=He(d.props.children,y.mode,B,d.key),v.return=y,y=v):(B=wo(d.type,d.key,d.props,null,y.mode,B),B.ref=OA(y,v,d),B.return=y,y=B)}return a(y);case oA:n:{for(A0=d.key;v!==null;){if(v.key===A0)if(v.tag===4&&v.stateNode.containerInfo===d.containerInfo&&v.stateNode.implementation===d.implementation){e(y,v.sibling),v=t(v,d.children||[]),v.return=y,y=v;break n}else{e(y,v);break}else r(y,v);v=v.sibling}v=Ea(d,y.mode,B),v.return=y,y=v}return a(y);case re:return A0=d._init,R0(y,v,A0(d._payload),B)}if(ot(d))return k(y,v,d,B);if(wA(d))return E(y,v,d,B);So(y,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,v!==null&&v.tag===6?(e(y,v.sibling),v=t(v,d),v.return=y,y=v):(e(y,v),v=Na(d,y.mode,B),v.return=y,y=v),a(y)):e(y,v)}return R0}var kA=v6(!0),y6=v6(!1),c1=ve(null),G1=null,UA=null,sl=null;function ul(){sl=UA=G1=null}function Ul(n){var r=c1.current;_0(c1),n._currentValue=r}function L2(n,r,e){for(;n!==null;){var A=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,A!==null&&(A.childLanes|=r)):A!==null&&(A.childLanes&r)!==r&&(A.childLanes|=r),n===e)break;n=n.return}}function dA(n,r){G1=n,sl=UA=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Qn=!0),n.firstContext=null)}function or(n){var r=n._currentValue;if(sl!==n)if(n={context:n,memoizedValue:r,next:null},UA===null){if(G1===null)throw Error(X(308));UA=n,G1.dependencies={lanes:0,firstContext:n}}else UA=UA.next=n;return r}var Be=null;function Ll(n){Be===null?Be=[n]:Be.push(n)}function d6(n,r,e,A){var t=r.interleaved;return t===null?(e.next=e,Ll(r)):(e.next=t.next,t.next=e),r.interleaved=e,Xr(n,A)}function Xr(n,r){n.lanes|=r;var e=n.alternate;for(e!==null&&(e.lanes|=r),e=n,n=n.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),e=n,n=n.return;return e.tag===3?e.stateNode:null}var ee=!1;function Tl(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y6(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function se(n,r,e){var A=n.updateQueue;if(A===null)return null;if(A=A.shared,K0&2){var t=A.pending;return t===null?r.next=r:(r.next=t.next,t.next=r),A.pending=r,Xr(n,e)}return t=A.interleaved,t===null?(r.next=r,Ll(A)):(r.next=t.next,t.next=r),A.interleaved=r,Xr(n,e)}function Wo(n,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194240)!==0)){var A=r.lanes;A&=n.pendingLanes,e|=A,r.lanes=e,rl(n,e)}}function i3(n,r){var e=n.updateQueue,A=n.alternate;if(A!==null&&(A=A.updateQueue,e===A)){var t=null,o=null;if(e=e.firstBaseUpdate,e!==null){do{var a={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};o===null?t=o=a:o=o.next=a,e=e.next}while(e!==null);o===null?t=o=r:o=o.next=r}else t=o=r;e={baseState:A.baseState,firstBaseUpdate:t,lastBaseUpdate:o,shared:A.shared,effects:A.effects},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=r:n.next=r,e.lastBaseUpdate=r}function s1(n,r,e,A){var t=n.updateQueue;ee=!1;var o=t.firstBaseUpdate,a=t.lastBaseUpdate,l=t.shared.pending;if(l!==null){t.shared.pending=null;var R=l,G=R.next;R.next=null,a===null?o=G:a.next=G,a=R;var u=n.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==a&&(l===null?u.firstBaseUpdate=G:l.next=G,u.lastBaseUpdate=R))}if(o!==null){var b=t.baseState;a=0,u=G=R=null,l=o;do{var f=l.lane,h=l.eventTime;if((A&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});n:{var k=n,E=l;switch(f=r,h=e,E.tag){case 1:if(k=E.payload,typeof k=="function"){b=k.call(h,b,f);break n}b=k;break n;case 3:k.flags=k.flags&-65537|128;case 0:if(k=E.payload,f=typeof k=="function"?k.call(h,b,f):k,f==null)break n;b=rn({},b,f);break n;case 2:ee=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,f=t.effects,f===null?t.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(G=u=h,R=b):u=u.next=h,a|=f;if(l=l.next,l===null){if(l=t.shared.pending,l===null)break;f=l,l=f.next,f.next=null,t.lastBaseUpdate=f,t.shared.pending=null}}while(!0);if(u===null&&(R=b),t.baseState=R,t.firstBaseUpdate=G,t.lastBaseUpdate=u,r=t.shared.interleaved,r!==null){t=r;do a|=t.lane,t=t.next;while(t!==r)}else o===null&&(t.shared.lanes=0);Xe|=a,n.lanes=a,n.memoizedState=b}}function R3(n,r,e){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var A=n[r],t=A.callback;if(t!==null){if(A.callback=null,A=e,typeof t!="function")throw Error(X(191,t));t.call(A)}}}var jt={},kr=ve(jt),Bt=ve(jt),Dt=ve(jt);function De(n){if(n===jt)throw Error(X(174));return n}function bl(n,r){switch(x0(Dt,r),x0(Bt,n),x0(kr,jt),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ja(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ja(r,n)}_0(kr),x0(kr,r)}function IA(){_0(kr),_0(Bt),_0(Dt)}function h6(n){De(Dt.current);var r=De(kr.current),e=ja(r,n.type);r!==e&&(x0(Bt,n),x0(kr,e))}function fl(n){Bt.current===n&&(_0(kr),_0(Bt))}var q0=ve(0);function u1(n){for(var r=n;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ha=[];function vl(){for(var n=0;n<ha.length;n++)ha[n]._workInProgressVersionPrimary=null;ha.length=0}var Fo=Zr.ReactCurrentDispatcher,Ca=Zr.ReactCurrentBatchConfig,Fe=0,nn=null,cn=null,Un=null,U1=!1,Tt=!1,gt=0,x9=0;function hn(){throw Error(X(321))}function yl(n,r){if(r===null)return!1;for(var e=0;e<r.length&&e<n.length;e++)if(!br(n[e],r[e]))return!1;return!0}function dl(n,r,e,A,t,o){if(Fe=o,nn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Fo.current=n===null||n.memoizedState===null?j9:$9,n=e(A,t),Tt){o=0;do{if(Tt=!1,gt=0,25<=o)throw Error(X(301));o+=1,Un=cn=null,r.updateQueue=null,Fo.current=z9,n=e(A,t)}while(Tt)}if(Fo.current=L1,r=cn!==null&&cn.next!==null,Fe=0,Un=cn=nn=null,U1=!1,r)throw Error(X(300));return n}function Yl(){var n=gt!==0;return gt=0,n}function Cr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Un===null?nn.memoizedState=Un=n:Un=Un.next=n,Un}function ar(){if(cn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var r=Un===null?nn.memoizedState:Un.next;if(r!==null)Un=r,cn=n;else{if(n===null)throw Error(X(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},Un===null?nn.memoizedState=Un=n:Un=Un.next=n}return Un}function Jt(n,r){return typeof r=="function"?r(n):r}function Sa(n){var r=ar(),e=r.queue;if(e===null)throw Error(X(311));e.lastRenderedReducer=n;var A=cn,t=A.baseQueue,o=e.pending;if(o!==null){if(t!==null){var a=t.next;t.next=o.next,o.next=a}A.baseQueue=t=o,e.pending=null}if(t!==null){o=t.next,A=A.baseState;var l=a=null,R=null,G=o;do{var u=G.lane;if((Fe&u)===u)R!==null&&(R=R.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),A=G.hasEagerState?G.eagerState:n(A,G.action);else{var b={lane:u,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};R===null?(l=R=b,a=A):R=R.next=b,nn.lanes|=u,Xe|=u}G=G.next}while(G!==null&&G!==o);R===null?a=A:R.next=l,br(A,r.memoizedState)||(Qn=!0),r.memoizedState=A,r.baseState=a,r.baseQueue=R,e.lastRenderedState=A}if(n=e.interleaved,n!==null){t=n;do o=t.lane,nn.lanes|=o,Xe|=o,t=t.next;while(t!==n)}else t===null&&(e.lanes=0);return[r.memoizedState,e.dispatch]}function pa(n){var r=ar(),e=r.queue;if(e===null)throw Error(X(311));e.lastRenderedReducer=n;var A=e.dispatch,t=e.pending,o=r.memoizedState;if(t!==null){e.pending=null;var a=t=t.next;do o=n(o,a.action),a=a.next;while(a!==t);br(o,r.memoizedState)||(Qn=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),e.lastRenderedState=o}return[o,A]}function C6(){}function S6(n,r){var e=nn,A=ar(),t=r(),o=!br(A.memoizedState,t);if(o&&(A.memoizedState=t,Qn=!0),A=A.queue,hl(I6.bind(null,e,A,n),[n]),A.getSnapshot!==r||o||Un!==null&&Un.memoizedState.tag&1){if(e.flags|=2048,Ht(9,k6.bind(null,e,A,t,r),void 0,null),Ln===null)throw Error(X(349));Fe&30||p6(e,r,t)}return t}function p6(n,r,e){n.flags|=16384,n={getSnapshot:r,value:e},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.stores=[n]):(e=r.stores,e===null?r.stores=[n]:e.push(n))}function k6(n,r,e,A){r.value=e,r.getSnapshot=A,N6(r)&&E6(n)}function I6(n,r,e){return e(function(){N6(r)&&E6(n)})}function N6(n){var r=n.getSnapshot;n=n.value;try{var e=r();return!br(n,e)}catch{return!0}}function E6(n){var r=Xr(n,1);r!==null&&Tr(r,n,1,-1)}function c3(n){var r=Cr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:n},r.queue=n,n=n.dispatch=_9.bind(null,nn,n),[r.memoizedState,n]}function Ht(n,r,e,A){return n={tag:n,create:r,destroy:e,deps:A,next:null},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.lastEffect=n.next=n):(e=r.lastEffect,e===null?r.lastEffect=n.next=n:(A=e.next,e.next=n,n.next=A,r.lastEffect=n)),n}function M6(){return ar().memoizedState}function Xo(n,r,e,A){var t=Cr();nn.flags|=n,t.memoizedState=Ht(1|r,e,void 0,A===void 0?null:A)}function B1(n,r,e,A){var t=ar();A=A===void 0?null:A;var o=void 0;if(cn!==null){var a=cn.memoizedState;if(o=a.destroy,A!==null&&yl(A,a.deps)){t.memoizedState=Ht(r,e,o,A);return}}nn.flags|=n,t.memoizedState=Ht(1|r,e,o,A)}function G3(n,r){return Xo(8390656,8,n,r)}function hl(n,r){return B1(2048,8,n,r)}function P6(n,r){return B1(4,2,n,r)}function m6(n,r){return B1(4,4,n,r)}function B6(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function D6(n,r,e){return e=e!=null?e.concat([n]):null,B1(4,4,B6.bind(null,r,n),e)}function Cl(){}function g6(n,r){var e=ar();r=r===void 0?null:r;var A=e.memoizedState;return A!==null&&r!==null&&yl(r,A[1])?A[0]:(e.memoizedState=[n,r],n)}function J6(n,r){var e=ar();r=r===void 0?null:r;var A=e.memoizedState;return A!==null&&r!==null&&yl(r,A[1])?A[0]:(n=n(),e.memoizedState=[n,r],n)}function H6(n,r,e){return Fe&21?(br(e,r)||(e=X4(),nn.lanes|=e,Xe|=e,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=e)}function Z9(n,r){var e=W0;W0=e!==0&&4>e?e:4,n(!0);var A=Ca.transition;Ca.transition={};try{n(!1),r()}finally{W0=e,Ca.transition=A}}function K6(){return ar().memoizedState}function w9(n,r,e){var A=Ue(n);if(e={lane:A,action:e,hasEagerState:!1,eagerState:null,next:null},V6(n))W6(r,e);else if(e=d6(n,r,e,A),e!==null){var t=Bn();Tr(e,n,A,t),F6(e,r,A)}}function _9(n,r,e){var A=Ue(n),t={lane:A,action:e,hasEagerState:!1,eagerState:null,next:null};if(V6(n))W6(r,t);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var a=r.lastRenderedState,l=o(a,e);if(t.hasEagerState=!0,t.eagerState=l,br(l,a)){var R=r.interleaved;R===null?(t.next=t,Ll(r)):(t.next=R.next,R.next=t),r.interleaved=t;return}}catch{}finally{}e=d6(n,r,t,A),e!==null&&(t=Bn(),Tr(e,n,A,t),F6(e,r,A))}}function V6(n){var r=n.alternate;return n===nn||r!==null&&r===nn}function W6(n,r){Tt=U1=!0;var e=n.pending;e===null?r.next=r:(r.next=e.next,e.next=r),n.pending=r}function F6(n,r,e){if(e&4194240){var A=r.lanes;A&=n.pendingLanes,e|=A,r.lanes=e,rl(n,e)}}var L1={readContext:or,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},j9={readContext:or,useCallback:function(n,r){return Cr().memoizedState=[n,r===void 0?null:r],n},useContext:or,useEffect:G3,useImperativeHandle:function(n,r,e){return e=e!=null?e.concat([n]):null,Xo(4194308,4,B6.bind(null,r,n),e)},useLayoutEffect:function(n,r){return Xo(4194308,4,n,r)},useInsertionEffect:function(n,r){return Xo(4,2,n,r)},useMemo:function(n,r){var e=Cr();return r=r===void 0?null:r,n=n(),e.memoizedState=[n,r],n},useReducer:function(n,r,e){var A=Cr();return r=e!==void 0?e(r):r,A.memoizedState=A.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},A.queue=n,n=n.dispatch=w9.bind(null,nn,n),[A.memoizedState,n]},useRef:function(n){var r=Cr();return n={current:n},r.memoizedState=n},useState:c3,useDebugValue:Cl,useDeferredValue:function(n){return Cr().memoizedState=n},useTransition:function(){var n=c3(!1),r=n[0];return n=Z9.bind(null,n[1]),Cr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,e){var A=nn,t=Cr();if(z0){if(e===void 0)throw Error(X(407));e=e()}else{if(e=r(),Ln===null)throw Error(X(349));Fe&30||p6(A,r,e)}t.memoizedState=e;var o={value:e,getSnapshot:r};return t.queue=o,G3(I6.bind(null,A,o,n),[n]),A.flags|=2048,Ht(9,k6.bind(null,A,o,e,r),void 0,null),e},useId:function(){var n=Cr(),r=Ln.identifierPrefix;if(z0){var e=Kr,A=Hr;e=(A&~(1<<32-Lr(A)-1)).toString(32)+e,r=":"+r+"R"+e,e=gt++,0<e&&(r+="H"+e.toString(32)),r+=":"}else e=x9++,r=":"+r+"r"+e.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},$9={readContext:or,useCallback:g6,useContext:or,useEffect:hl,useImperativeHandle:D6,useInsertionEffect:P6,useLayoutEffect:m6,useMemo:J6,useReducer:Sa,useRef:M6,useState:function(){return Sa(Jt)},useDebugValue:Cl,useDeferredValue:function(n){var r=ar();return H6(r,cn.memoizedState,n)},useTransition:function(){var n=Sa(Jt)[0],r=ar().memoizedState;return[n,r]},useMutableSource:C6,useSyncExternalStore:S6,useId:K6,unstable_isNewReconciler:!1},z9={readContext:or,useCallback:g6,useContext:or,useEffect:hl,useImperativeHandle:D6,useInsertionEffect:P6,useLayoutEffect:m6,useMemo:J6,useReducer:pa,useRef:M6,useState:function(){return pa(Jt)},useDebugValue:Cl,useDeferredValue:function(n){var r=ar();return cn===null?r.memoizedState=n:H6(r,cn.memoizedState,n)},useTransition:function(){var n=pa(Jt)[0],r=ar().memoizedState;return[n,r]},useMutableSource:C6,useSyncExternalStore:S6,useId:K6,unstable_isNewReconciler:!1};function Gr(n,r){if(n&&n.defaultProps){r=rn({},r),n=n.defaultProps;for(var e in n)r[e]===void 0&&(r[e]=n[e]);return r}return r}function T2(n,r,e,A){r=n.memoizedState,e=e(A,r),e=e==null?r:rn({},r,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var D1={isMounted:function(n){return(n=n._reactInternals)?we(n)===n:!1},enqueueSetState:function(n,r,e){n=n._reactInternals;var A=Bn(),t=Ue(n),o=Vr(A,t);o.payload=r,e!=null&&(o.callback=e),r=se(n,o,t),r!==null&&(Tr(r,n,t,A),Wo(r,n,t))},enqueueReplaceState:function(n,r,e){n=n._reactInternals;var A=Bn(),t=Ue(n),o=Vr(A,t);o.tag=1,o.payload=r,e!=null&&(o.callback=e),r=se(n,o,t),r!==null&&(Tr(r,n,t,A),Wo(r,n,t))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var e=Bn(),A=Ue(n),t=Vr(e,A);t.tag=2,r!=null&&(t.callback=r),r=se(n,t,A),r!==null&&(Tr(r,n,A,e),Wo(r,n,A))}};function s3(n,r,e,A,t,o,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(A,o,a):r.prototype&&r.prototype.isPureReactComponent?!Et(e,A)||!Et(t,o):!0}function X6(n,r,e){var A=!1,t=be,o=r.contextType;return typeof o=="object"&&o!==null?o=or(o):(t=wn(r)?Ve:kn.current,A=r.contextTypes,o=(A=A!=null)?SA(n,t):be),r=new r(e,o),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=D1,n.stateNode=r,r._reactInternals=n,A&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=t,n.__reactInternalMemoizedMaskedChildContext=o),r}function u3(n,r,e,A){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,A),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,A),r.state!==n&&D1.enqueueReplaceState(r,r.state,null)}function b2(n,r,e,A){var t=n.stateNode;t.props=e,t.state=n.memoizedState,t.refs={},Tl(n);var o=r.contextType;typeof o=="object"&&o!==null?t.context=or(o):(o=wn(r)?Ve:kn.current,t.context=SA(n,o)),t.state=n.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(T2(n,r,o,e),t.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(r=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),r!==t.state&&D1.enqueueReplaceState(t,t.state,null),s1(n,e,t,A),t.state=n.memoizedState),typeof t.componentDidMount=="function"&&(n.flags|=4194308)}function NA(n,r){try{var e="",A=r;do e+=S7(A),A=A.return;while(A);var t=e}catch(o){t=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:r,stack:t,digest:null}}function ka(n,r,e){return{value:n,source:null,stack:e??null,digest:r??null}}function f2(n,r){try{console.error(r.value)}catch(e){setTimeout(function(){throw e})}}var O9=typeof WeakMap=="function"?WeakMap:Map;function Q6(n,r,e){e=Vr(-1,e),e.tag=3,e.payload={element:null};var A=r.value;return e.callback=function(){b1||(b1=!0,I2=A),f2(n,r)},e}function x6(n,r,e){e=Vr(-1,e),e.tag=3;var A=n.type.getDerivedStateFromError;if(typeof A=="function"){var t=r.value;e.payload=function(){return A(t)},e.callback=function(){f2(n,r)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){f2(n,r),typeof A!="function"&&(ue===null?ue=new Set([this]):ue.add(this));var a=r.stack;this.componentDidCatch(r.value,{componentStack:a!==null?a:""})}),e}function U3(n,r,e){var A=n.pingCache;if(A===null){A=n.pingCache=new O9;var t=new Set;A.set(r,t)}else t=A.get(r),t===void 0&&(t=new Set,A.set(r,t));t.has(e)||(t.add(e),n=sR.bind(null,n,r,e),r.then(n,n))}function L3(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function T3(n,r,e,A,t){return n.mode&1?(n.flags|=65536,n.lanes=t,n):(n===r?n.flags|=65536:(n.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(r=Vr(-1,1),r.tag=2,se(e,r,1))),e.lanes|=1),n)}var q9=Zr.ReactCurrentOwner,Qn=!1;function mn(n,r,e,A){r.child=n===null?y6(r,null,e,A):kA(r,n.child,e,A)}function b3(n,r,e,A,t){e=e.render;var o=r.ref;return dA(r,t),A=dl(n,r,e,A,o,t),e=Yl(),n!==null&&!Qn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~t,Qr(n,r,t)):(z0&&e&&Rl(r),r.flags|=1,mn(n,r,A,t),r.child)}function f3(n,r,e,A,t){if(n===null){var o=e.type;return typeof o=="function"&&!Pl(o)&&o.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(r.tag=15,r.type=o,Z6(n,r,o,A,t)):(n=wo(e.type,null,A,r,r.mode,t),n.ref=r.ref,n.return=r,r.child=n)}if(o=n.child,!(n.lanes&t)){var a=o.memoizedProps;if(e=e.compare,e=e!==null?e:Et,e(a,A)&&n.ref===r.ref)return Qr(n,r,t)}return r.flags|=1,n=Le(o,A),n.ref=r.ref,n.return=r,r.child=n}function Z6(n,r,e,A,t){if(n!==null){var o=n.memoizedProps;if(Et(o,A)&&n.ref===r.ref)if(Qn=!1,r.pendingProps=A=o,(n.lanes&t)!==0)n.flags&131072&&(Qn=!0);else return r.lanes=n.lanes,Qr(n,r,t)}return v2(n,r,e,A,t)}function w6(n,r,e){var A=r.pendingProps,t=A.children,o=n!==null?n.memoizedState:null;if(A.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},x0(TA,jn),jn|=e;else{if(!(e&1073741824))return n=o!==null?o.baseLanes|e:e,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,x0(TA,jn),jn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},A=o!==null?o.baseLanes:e,x0(TA,jn),jn|=A}else o!==null?(A=o.baseLanes|e,r.memoizedState=null):A=e,x0(TA,jn),jn|=A;return mn(n,r,t,e),r.child}function _6(n,r){var e=r.ref;(n===null&&e!==null||n!==null&&n.ref!==e)&&(r.flags|=512,r.flags|=2097152)}function v2(n,r,e,A,t){var o=wn(e)?Ve:kn.current;return o=SA(r,o),dA(r,t),e=dl(n,r,e,A,o,t),A=Yl(),n!==null&&!Qn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~t,Qr(n,r,t)):(z0&&A&&Rl(r),r.flags|=1,mn(n,r,e,t),r.child)}function v3(n,r,e,A,t){if(wn(e)){var o=!0;l1(r)}else o=!1;if(dA(r,t),r.stateNode===null)Qo(n,r),X6(r,e,A),b2(r,e,A,t),A=!0;else if(n===null){var a=r.stateNode,l=r.memoizedProps;a.props=l;var R=a.context,G=e.contextType;typeof G=="object"&&G!==null?G=or(G):(G=wn(e)?Ve:kn.current,G=SA(r,G));var u=e.getDerivedStateFromProps,b=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";b||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==A||R!==G)&&u3(r,a,A,G),ee=!1;var f=r.memoizedState;a.state=f,s1(r,A,a,t),R=r.memoizedState,l!==A||f!==R||Zn.current||ee?(typeof u=="function"&&(T2(r,e,u,A),R=r.memoizedState),(l=ee||s3(r,e,l,A,f,R,G))?(b||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(r.flags|=4194308)):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=A,r.memoizedState=R),a.props=A,a.state=R,a.context=G,A=l):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),A=!1)}else{a=r.stateNode,Y6(n,r),l=r.memoizedProps,G=r.type===r.elementType?l:Gr(r.type,l),a.props=G,b=r.pendingProps,f=a.context,R=e.contextType,typeof R=="object"&&R!==null?R=or(R):(R=wn(e)?Ve:kn.current,R=SA(r,R));var h=e.getDerivedStateFromProps;(u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==b||f!==R)&&u3(r,a,A,R),ee=!1,f=r.memoizedState,a.state=f,s1(r,A,a,t);var k=r.memoizedState;l!==b||f!==k||Zn.current||ee?(typeof h=="function"&&(T2(r,e,h,A),k=r.memoizedState),(G=ee||s3(r,e,G,A,f,k,R)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(A,k,R),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(A,k,R)),typeof a.componentDidUpdate=="function"&&(r.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===n.memoizedProps&&f===n.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&f===n.memoizedState||(r.flags|=1024),r.memoizedProps=A,r.memoizedState=k),a.props=A,a.state=k,a.context=R,A=G):(typeof a.componentDidUpdate!="function"||l===n.memoizedProps&&f===n.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&f===n.memoizedState||(r.flags|=1024),A=!1)}return y2(n,r,e,A,o,t)}function y2(n,r,e,A,t,o){_6(n,r);var a=(r.flags&128)!==0;if(!A&&!a)return t&&t3(r,e,!1),Qr(n,r,o);A=r.stateNode,q9.current=r;var l=a&&typeof e.getDerivedStateFromError!="function"?null:A.render();return r.flags|=1,n!==null&&a?(r.child=kA(r,n.child,null,o),r.child=kA(r,null,l,o)):mn(n,r,l,o),r.memoizedState=A.state,t&&t3(r,e,!0),r.child}function j6(n){var r=n.stateNode;r.pendingContext?A3(n,r.pendingContext,r.pendingContext!==r.context):r.context&&A3(n,r.context,!1),bl(n,r.containerInfo)}function y3(n,r,e,A,t){return pA(),Gl(t),r.flags|=256,mn(n,r,e,A),r.child}var d2={dehydrated:null,treeContext:null,retryLane:0};function Y2(n){return{baseLanes:n,cachePool:null,transitions:null}}function $6(n,r,e){var A=r.pendingProps,t=q0.current,o=!1,a=(r.flags&128)!==0,l;if((l=a)||(l=n!==null&&n.memoizedState===null?!1:(t&2)!==0),l?(o=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(t|=1),x0(q0,t&1),n===null)return U2(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(a=A.children,n=A.fallback,o?(A=r.mode,o=r.child,a={mode:"hidden",children:a},!(A&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=H1(a,A,0,null),n=He(n,A,e,null),o.return=r,n.return=r,o.sibling=n,r.child=o,r.child.memoizedState=Y2(e),r.memoizedState=d2,n):Sl(r,a));if(t=n.memoizedState,t!==null&&(l=t.dehydrated,l!==null))return nR(n,r,a,A,l,t,e);if(o){o=A.fallback,a=r.mode,t=n.child,l=t.sibling;var R={mode:"hidden",children:A.children};return!(a&1)&&r.child!==t?(A=r.child,A.childLanes=0,A.pendingProps=R,r.deletions=null):(A=Le(t,R),A.subtreeFlags=t.subtreeFlags&14680064),l!==null?o=Le(l,o):(o=He(o,a,e,null),o.flags|=2),o.return=r,A.return=r,A.sibling=o,r.child=A,A=o,o=r.child,a=n.child.memoizedState,a=a===null?Y2(e):{baseLanes:a.baseLanes|e,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=n.childLanes&~e,r.memoizedState=d2,A}return o=n.child,n=o.sibling,A=Le(o,{mode:"visible",children:A.children}),!(r.mode&1)&&(A.lanes=e),A.return=r,A.sibling=null,n!==null&&(e=r.deletions,e===null?(r.deletions=[n],r.flags|=16):e.push(n)),r.child=A,r.memoizedState=null,A}function Sl(n,r){return r=H1({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function po(n,r,e,A){return A!==null&&Gl(A),kA(r,n.child,null,e),n=Sl(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function nR(n,r,e,A,t,o,a){if(e)return r.flags&256?(r.flags&=-257,A=ka(Error(X(422))),po(n,r,a,A)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(o=A.fallback,t=r.mode,A=H1({mode:"visible",children:A.children},t,0,null),o=He(o,t,a,null),o.flags|=2,A.return=r,o.return=r,A.sibling=o,r.child=A,r.mode&1&&kA(r,n.child,null,a),r.child.memoizedState=Y2(a),r.memoizedState=d2,o);if(!(r.mode&1))return po(n,r,a,null);if(t.data==="$!"){if(A=t.nextSibling&&t.nextSibling.dataset,A)var l=A.dgst;return A=l,o=Error(X(419)),A=ka(o,A,void 0),po(n,r,a,A)}if(l=(a&n.childLanes)!==0,Qn||l){if(A=Ln,A!==null){switch(a&-a){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(A.suspendedLanes|a)?0:t,t!==0&&t!==o.retryLane&&(o.retryLane=t,Xr(n,t),Tr(A,n,t,-1))}return Ml(),A=ka(Error(X(421))),po(n,r,a,A)}return t.data==="$?"?(r.flags|=128,r.child=n.child,r=uR.bind(null,n),t._reactRetry=r,null):(n=o.treeContext,$n=Ge(t.nextSibling),zn=r,z0=!0,ur=null,n!==null&&(rr[er++]=Hr,rr[er++]=Kr,rr[er++]=We,Hr=n.id,Kr=n.overflow,We=r),r=Sl(r,A.children),r.flags|=4096,r)}function d3(n,r,e){n.lanes|=r;var A=n.alternate;A!==null&&(A.lanes|=r),L2(n.return,r,e)}function Ia(n,r,e,A,t){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:A,tail:e,tailMode:t}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=A,o.tail=e,o.tailMode=t)}function z6(n,r,e){var A=r.pendingProps,t=A.revealOrder,o=A.tail;if(mn(n,r,A.children,e),A=q0.current,A&2)A=A&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&d3(n,e,r);else if(n.tag===19)d3(n,e,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break n;for(;n.sibling===null;){if(n.return===null||n.return===r)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}A&=1}if(x0(q0,A),!(r.mode&1))r.memoizedState=null;else switch(t){case"forwards":for(e=r.child,t=null;e!==null;)n=e.alternate,n!==null&&u1(n)===null&&(t=e),e=e.sibling;e=t,e===null?(t=r.child,r.child=null):(t=e.sibling,e.sibling=null),Ia(r,!1,t,e,o);break;case"backwards":for(e=null,t=r.child,r.child=null;t!==null;){if(n=t.alternate,n!==null&&u1(n)===null){r.child=t;break}n=t.sibling,t.sibling=e,e=t,t=n}Ia(r,!0,e,null,o);break;case"together":Ia(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Qo(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Qr(n,r,e){if(n!==null&&(r.dependencies=n.dependencies),Xe|=r.lanes,!(e&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(X(153));if(r.child!==null){for(n=r.child,e=Le(n,n.pendingProps),r.child=e,e.return=r;n.sibling!==null;)n=n.sibling,e=e.sibling=Le(n,n.pendingProps),e.return=r;e.sibling=null}return r.child}function rR(n,r,e){switch(r.tag){case 3:j6(r),pA();break;case 5:h6(r);break;case 1:wn(r.type)&&l1(r);break;case 4:bl(r,r.stateNode.containerInfo);break;case 10:var A=r.type._context,t=r.memoizedProps.value;x0(c1,A._currentValue),A._currentValue=t;break;case 13:if(A=r.memoizedState,A!==null)return A.dehydrated!==null?(x0(q0,q0.current&1),r.flags|=128,null):e&r.child.childLanes?$6(n,r,e):(x0(q0,q0.current&1),n=Qr(n,r,e),n!==null?n.sibling:null);x0(q0,q0.current&1);break;case 19:if(A=(e&r.childLanes)!==0,n.flags&128){if(A)return z6(n,r,e);r.flags|=128}if(t=r.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),x0(q0,q0.current),A)break;return null;case 22:case 23:return r.lanes=0,w6(n,r,e)}return Qr(n,r,e)}var O6,h2,q6,n8;O6=function(n,r){for(var e=r.child;e!==null;){if(e.tag===5||e.tag===6)n.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};h2=function(){};q6=function(n,r,e,A){var t=n.memoizedProps;if(t!==A){n=r.stateNode,De(kr.current);var o=null;switch(e){case"input":t=xa(n,t),A=xa(n,A),o=[];break;case"select":t=rn({},t,{value:void 0}),A=rn({},A,{value:void 0}),o=[];break;case"textarea":t=_a(n,t),A=_a(n,A),o=[];break;default:typeof t.onClick!="function"&&typeof A.onClick=="function"&&(n.onclick=o1)}$a(e,A);var a;e=null;for(G in t)if(!A.hasOwnProperty(G)&&t.hasOwnProperty(G)&&t[G]!=null)if(G==="style"){var l=t[G];for(a in l)l.hasOwnProperty(a)&&(e||(e={}),e[a]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(ht.hasOwnProperty(G)?o||(o=[]):(o=o||[]).push(G,null));for(G in A){var R=A[G];if(l=t!=null?t[G]:void 0,A.hasOwnProperty(G)&&R!==l&&(R!=null||l!=null))if(G==="style")if(l){for(a in l)!l.hasOwnProperty(a)||R&&R.hasOwnProperty(a)||(e||(e={}),e[a]="");for(a in R)R.hasOwnProperty(a)&&l[a]!==R[a]&&(e||(e={}),e[a]=R[a])}else e||(o||(o=[]),o.push(G,e)),e=R;else G==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,l=l?l.__html:void 0,R!=null&&l!==R&&(o=o||[]).push(G,R)):G==="children"?typeof R!="string"&&typeof R!="number"||(o=o||[]).push(G,""+R):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(ht.hasOwnProperty(G)?(R!=null&&G==="onScroll"&&w0("scroll",n),o||l===R||(o=[])):(o=o||[]).push(G,R))}e&&(o=o||[]).push("style",e);var G=o;(r.updateQueue=G)&&(r.flags|=4)}};n8=function(n,r,e,A){e!==A&&(r.flags|=4)};function qA(n,r){if(!z0)switch(n.tailMode){case"hidden":r=n.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var A=null;e!==null;)e.alternate!==null&&(A=e),e=e.sibling;A===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:A.sibling=null}}function Cn(n){var r=n.alternate!==null&&n.alternate.child===n.child,e=0,A=0;if(r)for(var t=n.child;t!==null;)e|=t.lanes|t.childLanes,A|=t.subtreeFlags&14680064,A|=t.flags&14680064,t.return=n,t=t.sibling;else for(t=n.child;t!==null;)e|=t.lanes|t.childLanes,A|=t.subtreeFlags,A|=t.flags,t.return=n,t=t.sibling;return n.subtreeFlags|=A,n.childLanes=e,r}function eR(n,r,e){var A=r.pendingProps;switch(cl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(r),null;case 1:return wn(r.type)&&a1(),Cn(r),null;case 3:return A=r.stateNode,IA(),_0(Zn),_0(kn),vl(),A.pendingContext&&(A.context=A.pendingContext,A.pendingContext=null),(n===null||n.child===null)&&(Co(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ur!==null&&(M2(ur),ur=null))),h2(n,r),Cn(r),null;case 5:fl(r);var t=De(Dt.current);if(e=r.type,n!==null&&r.stateNode!=null)q6(n,r,e,A,t),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!A){if(r.stateNode===null)throw Error(X(166));return Cn(r),null}if(n=De(kr.current),Co(r)){A=r.stateNode,e=r.type;var o=r.memoizedProps;switch(A[Sr]=r,A[mt]=o,n=(r.mode&1)!==0,e){case"dialog":w0("cancel",A),w0("close",A);break;case"iframe":case"object":case"embed":w0("load",A);break;case"video":case"audio":for(t=0;t<lt.length;t++)w0(lt[t],A);break;case"source":w0("error",A);break;case"img":case"image":case"link":w0("error",A),w0("load",A);break;case"details":w0("toggle",A);break;case"input":Ei(A,o),w0("invalid",A);break;case"select":A._wrapperState={wasMultiple:!!o.multiple},w0("invalid",A);break;case"textarea":Pi(A,o),w0("invalid",A)}$a(e,o),t=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?A.textContent!==l&&(o.suppressHydrationWarning!==!0&&ho(A.textContent,l,n),t=["children",l]):typeof l=="number"&&A.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ho(A.textContent,l,n),t=["children",""+l]):ht.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&w0("scroll",A)}switch(e){case"input":Uo(A),Mi(A,o,!0);break;case"textarea":Uo(A),mi(A);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(A.onclick=o1)}A=t,r.updateQueue=A,A!==null&&(r.flags|=4)}else{a=t.nodeType===9?t:t.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I4(e)),n==="http://www.w3.org/1999/xhtml"?e==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof A.is=="string"?n=a.createElement(e,{is:A.is}):(n=a.createElement(e),e==="select"&&(a=n,A.multiple?a.multiple=!0:A.size&&(a.size=A.size))):n=a.createElementNS(n,e),n[Sr]=r,n[mt]=A,O6(n,r,!1,!1),r.stateNode=n;n:{switch(a=za(e,A),e){case"dialog":w0("cancel",n),w0("close",n),t=A;break;case"iframe":case"object":case"embed":w0("load",n),t=A;break;case"video":case"audio":for(t=0;t<lt.length;t++)w0(lt[t],n);t=A;break;case"source":w0("error",n),t=A;break;case"img":case"image":case"link":w0("error",n),w0("load",n),t=A;break;case"details":w0("toggle",n),t=A;break;case"input":Ei(n,A),t=xa(n,A),w0("invalid",n);break;case"option":t=A;break;case"select":n._wrapperState={wasMultiple:!!A.multiple},t=rn({},A,{value:void 0}),w0("invalid",n);break;case"textarea":Pi(n,A),t=_a(n,A),w0("invalid",n);break;default:t=A}$a(e,t),l=t;for(o in l)if(l.hasOwnProperty(o)){var R=l[o];o==="style"?M4(n,R):o==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&N4(n,R)):o==="children"?typeof R=="string"?(e!=="textarea"||R!=="")&&Ct(n,R):typeof R=="number"&&Ct(n,""+R):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ht.hasOwnProperty(o)?R!=null&&o==="onScroll"&&w0("scroll",n):R!=null&&j2(n,o,R,a))}switch(e){case"input":Uo(n),Mi(n,A,!1);break;case"textarea":Uo(n),mi(n);break;case"option":A.value!=null&&n.setAttribute("value",""+Te(A.value));break;case"select":n.multiple=!!A.multiple,o=A.value,o!=null?bA(n,!!A.multiple,o,!1):A.defaultValue!=null&&bA(n,!!A.multiple,A.defaultValue,!0);break;default:typeof t.onClick=="function"&&(n.onclick=o1)}switch(e){case"button":case"input":case"select":case"textarea":A=!!A.autoFocus;break n;case"img":A=!0;break n;default:A=!1}}A&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Cn(r),null;case 6:if(n&&r.stateNode!=null)n8(n,r,n.memoizedProps,A);else{if(typeof A!="string"&&r.stateNode===null)throw Error(X(166));if(e=De(Dt.current),De(kr.current),Co(r)){if(A=r.stateNode,e=r.memoizedProps,A[Sr]=r,(o=A.nodeValue!==e)&&(n=zn,n!==null))switch(n.tag){case 3:ho(A.nodeValue,e,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ho(A.nodeValue,e,(n.mode&1)!==0)}o&&(r.flags|=4)}else A=(e.nodeType===9?e:e.ownerDocument).createTextNode(A),A[Sr]=r,r.stateNode=A}return Cn(r),null;case 13:if(_0(q0),A=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(z0&&$n!==null&&r.mode&1&&!(r.flags&128))f6(),pA(),r.flags|=98560,o=!1;else if(o=Co(r),A!==null&&A.dehydrated!==null){if(n===null){if(!o)throw Error(X(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(X(317));o[Sr]=r}else pA(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Cn(r),o=!1}else ur!==null&&(M2(ur),ur=null),o=!0;if(!o)return r.flags&65536?r:null}return r.flags&128?(r.lanes=e,r):(A=A!==null,A!==(n!==null&&n.memoizedState!==null)&&A&&(r.child.flags|=8192,r.mode&1&&(n===null||q0.current&1?Gn===0&&(Gn=3):Ml())),r.updateQueue!==null&&(r.flags|=4),Cn(r),null);case 4:return IA(),h2(n,r),n===null&&Mt(r.stateNode.containerInfo),Cn(r),null;case 10:return Ul(r.type._context),Cn(r),null;case 17:return wn(r.type)&&a1(),Cn(r),null;case 19:if(_0(q0),o=r.memoizedState,o===null)return Cn(r),null;if(A=(r.flags&128)!==0,a=o.rendering,a===null)if(A)qA(o,!1);else{if(Gn!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(a=u1(n),a!==null){for(r.flags|=128,qA(o,!1),A=a.updateQueue,A!==null&&(r.updateQueue=A,r.flags|=4),r.subtreeFlags=0,A=e,e=r.child;e!==null;)o=e,n=A,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,n=a.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e=e.sibling;return x0(q0,q0.current&1|2),r.child}n=n.sibling}o.tail!==null&&an()>EA&&(r.flags|=128,A=!0,qA(o,!1),r.lanes=4194304)}else{if(!A)if(n=u1(a),n!==null){if(r.flags|=128,A=!0,e=n.updateQueue,e!==null&&(r.updateQueue=e,r.flags|=4),qA(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!z0)return Cn(r),null}else 2*an()-o.renderingStartTime>EA&&e!==1073741824&&(r.flags|=128,A=!0,qA(o,!1),r.lanes=4194304);o.isBackwards?(a.sibling=r.child,r.child=a):(e=o.last,e!==null?e.sibling=a:r.child=a,o.last=a)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=an(),r.sibling=null,e=q0.current,x0(q0,A?e&1|2:e&1),r):(Cn(r),null);case 22:case 23:return El(),A=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==A&&(r.flags|=8192),A&&r.mode&1?jn&1073741824&&(Cn(r),r.subtreeFlags&6&&(r.flags|=8192)):Cn(r),null;case 24:return null;case 25:return null}throw Error(X(156,r.tag))}function AR(n,r){switch(cl(r),r.tag){case 1:return wn(r.type)&&a1(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return IA(),_0(Zn),_0(kn),vl(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return fl(r),null;case 13:if(_0(q0),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(X(340));pA()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return _0(q0),null;case 4:return IA(),null;case 10:return Ul(r.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var ko=!1,Sn=!1,tR=typeof WeakSet=="function"?WeakSet:Set,l0=null;function LA(n,r){var e=n.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(A){tn(n,r,A)}else e.current=null}function C2(n,r,e){try{e()}catch(A){tn(n,r,A)}}var Y3=!1;function oR(n,r){if(l2=e1,n=o6(),il(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var A=e.getSelection&&e.getSelection();if(A&&A.rangeCount!==0){e=A.anchorNode;var t=A.anchorOffset,o=A.focusNode;A=A.focusOffset;try{e.nodeType,o.nodeType}catch{e=null;break n}var a=0,l=-1,R=-1,G=0,u=0,b=n,f=null;r:for(;;){for(var h;b!==e||t!==0&&b.nodeType!==3||(l=a+t),b!==o||A!==0&&b.nodeType!==3||(R=a+A),b.nodeType===3&&(a+=b.nodeValue.length),(h=b.firstChild)!==null;)f=b,b=h;for(;;){if(b===n)break r;if(f===e&&++G===t&&(l=a),f===o&&++u===A&&(R=a),(h=b.nextSibling)!==null)break;b=f,f=b.parentNode}b=h}e=l===-1||R===-1?null:{start:l,end:R}}else e=null}e=e||{start:0,end:0}}else e=null;for(i2={focusedElem:n,selectionRange:e},e1=!1,l0=r;l0!==null;)if(r=l0,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,l0=n;else for(;l0!==null;){r=l0;try{var k=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var E=k.memoizedProps,R0=k.memoizedState,y=r.stateNode,v=y.getSnapshotBeforeUpdate(r.elementType===r.type?E:Gr(r.type,E),R0);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var d=r.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(B){tn(r,r.return,B)}if(n=r.sibling,n!==null){n.return=r.return,l0=n;break}l0=r.return}return k=Y3,Y3=!1,k}function bt(n,r,e){var A=r.updateQueue;if(A=A!==null?A.lastEffect:null,A!==null){var t=A=A.next;do{if((t.tag&n)===n){var o=t.destroy;t.destroy=void 0,o!==void 0&&C2(r,e,o)}t=t.next}while(t!==A)}}function g1(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var e=r=r.next;do{if((e.tag&n)===n){var A=e.create;e.destroy=A()}e=e.next}while(e!==r)}}function S2(n){var r=n.ref;if(r!==null){var e=n.stateNode;switch(n.tag){case 5:n=e;break;default:n=e}typeof r=="function"?r(n):r.current=n}}function r8(n){var r=n.alternate;r!==null&&(n.alternate=null,r8(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Sr],delete r[mt],delete r[G2],delete r[W9],delete r[F9])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function e8(n){return n.tag===5||n.tag===3||n.tag===4}function h3(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||e8(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function p2(n,r,e){var A=n.tag;if(A===5||A===6)n=n.stateNode,r?e.nodeType===8?e.parentNode.insertBefore(n,r):e.insertBefore(n,r):(e.nodeType===8?(r=e.parentNode,r.insertBefore(n,e)):(r=e,r.appendChild(n)),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=o1));else if(A!==4&&(n=n.child,n!==null))for(p2(n,r,e),n=n.sibling;n!==null;)p2(n,r,e),n=n.sibling}function k2(n,r,e){var A=n.tag;if(A===5||A===6)n=n.stateNode,r?e.insertBefore(n,r):e.appendChild(n);else if(A!==4&&(n=n.child,n!==null))for(k2(n,r,e),n=n.sibling;n!==null;)k2(n,r,e),n=n.sibling}var vn=null,sr=!1;function ne(n,r,e){for(e=e.child;e!==null;)A8(n,r,e),e=e.sibling}function A8(n,r,e){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount(I1,e)}catch{}switch(e.tag){case 5:Sn||LA(e,r);case 6:var A=vn,t=sr;vn=null,ne(n,r,e),vn=A,sr=t,vn!==null&&(sr?(n=vn,e=e.stateNode,n.nodeType===8?n.parentNode.removeChild(e):n.removeChild(e)):vn.removeChild(e.stateNode));break;case 18:vn!==null&&(sr?(n=vn,e=e.stateNode,n.nodeType===8?da(n.parentNode,e):n.nodeType===1&&da(n,e),It(n)):da(vn,e.stateNode));break;case 4:A=vn,t=sr,vn=e.stateNode.containerInfo,sr=!0,ne(n,r,e),vn=A,sr=t;break;case 0:case 11:case 14:case 15:if(!Sn&&(A=e.updateQueue,A!==null&&(A=A.lastEffect,A!==null))){t=A=A.next;do{var o=t,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&C2(e,r,a),t=t.next}while(t!==A)}ne(n,r,e);break;case 1:if(!Sn&&(LA(e,r),A=e.stateNode,typeof A.componentWillUnmount=="function"))try{A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(l){tn(e,r,l)}ne(n,r,e);break;case 21:ne(n,r,e);break;case 22:e.mode&1?(Sn=(A=Sn)||e.memoizedState!==null,ne(n,r,e),Sn=A):ne(n,r,e);break;default:ne(n,r,e)}}function C3(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var e=n.stateNode;e===null&&(e=n.stateNode=new tR),r.forEach(function(A){var t=UR.bind(null,n,A);e.has(A)||(e.add(A),A.then(t,t))})}}function cr(n,r){var e=r.deletions;if(e!==null)for(var A=0;A<e.length;A++){var t=e[A];try{var o=n,a=r,l=a;n:for(;l!==null;){switch(l.tag){case 5:vn=l.stateNode,sr=!1;break n;case 3:vn=l.stateNode.containerInfo,sr=!0;break n;case 4:vn=l.stateNode.containerInfo,sr=!0;break n}l=l.return}if(vn===null)throw Error(X(160));A8(o,a,t),vn=null,sr=!1;var R=t.alternate;R!==null&&(R.return=null),t.return=null}catch(G){tn(t,r,G)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)t8(r,n),r=r.sibling}function t8(n,r){var e=n.alternate,A=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(cr(r,n),hr(n),A&4){try{bt(3,n,n.return),g1(3,n)}catch(E){tn(n,n.return,E)}try{bt(5,n,n.return)}catch(E){tn(n,n.return,E)}}break;case 1:cr(r,n),hr(n),A&512&&e!==null&&LA(e,e.return);break;case 5:if(cr(r,n),hr(n),A&512&&e!==null&&LA(e,e.return),n.flags&32){var t=n.stateNode;try{Ct(t,"")}catch(E){tn(n,n.return,E)}}if(A&4&&(t=n.stateNode,t!=null)){var o=n.memoizedProps,a=e!==null?e.memoizedProps:o,l=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&p4(t,o),za(l,a);var G=za(l,o);for(a=0;a<R.length;a+=2){var u=R[a],b=R[a+1];u==="style"?M4(t,b):u==="dangerouslySetInnerHTML"?N4(t,b):u==="children"?Ct(t,b):j2(t,u,b,G)}switch(l){case"input":Za(t,o);break;case"textarea":k4(t,o);break;case"select":var f=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?bA(t,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?bA(t,!!o.multiple,o.defaultValue,!0):bA(t,!!o.multiple,o.multiple?[]:"",!1))}t[mt]=o}catch(E){tn(n,n.return,E)}}break;case 6:if(cr(r,n),hr(n),A&4){if(n.stateNode===null)throw Error(X(162));t=n.stateNode,o=n.memoizedProps;try{t.nodeValue=o}catch(E){tn(n,n.return,E)}}break;case 3:if(cr(r,n),hr(n),A&4&&e!==null&&e.memoizedState.isDehydrated)try{It(r.containerInfo)}catch(E){tn(n,n.return,E)}break;case 4:cr(r,n),hr(n);break;case 13:cr(r,n),hr(n),t=n.child,t.flags&8192&&(o=t.memoizedState!==null,t.stateNode.isHidden=o,!o||t.alternate!==null&&t.alternate.memoizedState!==null||(Il=an())),A&4&&C3(n);break;case 22:if(u=e!==null&&e.memoizedState!==null,n.mode&1?(Sn=(G=Sn)||u,cr(r,n),Sn=G):cr(r,n),hr(n),A&8192){if(G=n.memoizedState!==null,(n.stateNode.isHidden=G)&&!u&&n.mode&1)for(l0=n,u=n.child;u!==null;){for(b=l0=u;l0!==null;){switch(f=l0,h=f.child,f.tag){case 0:case 11:case 14:case 15:bt(4,f,f.return);break;case 1:LA(f,f.return);var k=f.stateNode;if(typeof k.componentWillUnmount=="function"){A=f,e=f.return;try{r=A,k.props=r.memoizedProps,k.state=r.memoizedState,k.componentWillUnmount()}catch(E){tn(A,e,E)}}break;case 5:LA(f,f.return);break;case 22:if(f.memoizedState!==null){p3(b);continue}}h!==null?(h.return=f,l0=h):p3(b)}u=u.sibling}n:for(u=null,b=n;;){if(b.tag===5){if(u===null){u=b;try{t=b.stateNode,G?(o=t.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=b.stateNode,R=b.memoizedProps.style,a=R!=null&&R.hasOwnProperty("display")?R.display:null,l.style.display=E4("display",a))}catch(E){tn(n,n.return,E)}}}else if(b.tag===6){if(u===null)try{b.stateNode.nodeValue=G?"":b.memoizedProps}catch(E){tn(n,n.return,E)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===n)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break n;for(;b.sibling===null;){if(b.return===null||b.return===n)break n;u===b&&(u=null),b=b.return}u===b&&(u=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:cr(r,n),hr(n),A&4&&C3(n);break;case 21:break;default:cr(r,n),hr(n)}}function hr(n){var r=n.flags;if(r&2){try{n:{for(var e=n.return;e!==null;){if(e8(e)){var A=e;break n}e=e.return}throw Error(X(160))}switch(A.tag){case 5:var t=A.stateNode;A.flags&32&&(Ct(t,""),A.flags&=-33);var o=h3(n);k2(n,o,t);break;case 3:case 4:var a=A.stateNode.containerInfo,l=h3(n);p2(n,l,a);break;default:throw Error(X(161))}}catch(R){tn(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function aR(n,r,e){l0=n,o8(n)}function o8(n,r,e){for(var A=(n.mode&1)!==0;l0!==null;){var t=l0,o=t.child;if(t.tag===22&&A){var a=t.memoizedState!==null||ko;if(!a){var l=t.alternate,R=l!==null&&l.memoizedState!==null||Sn;l=ko;var G=Sn;if(ko=a,(Sn=R)&&!G)for(l0=t;l0!==null;)a=l0,R=a.child,a.tag===22&&a.memoizedState!==null?k3(t):R!==null?(R.return=a,l0=R):k3(t);for(;o!==null;)l0=o,o8(o),o=o.sibling;l0=t,ko=l,Sn=G}S3(n)}else t.subtreeFlags&8772&&o!==null?(o.return=t,l0=o):S3(n)}}function S3(n){for(;l0!==null;){var r=l0;if(r.flags&8772){var e=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Sn||g1(5,r);break;case 1:var A=r.stateNode;if(r.flags&4&&!Sn)if(e===null)A.componentDidMount();else{var t=r.elementType===r.type?e.memoizedProps:Gr(r.type,e.memoizedProps);A.componentDidUpdate(t,e.memoizedState,A.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&R3(r,o,A);break;case 3:var a=r.updateQueue;if(a!==null){if(e=null,r.child!==null)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}R3(r,a,e)}break;case 5:var l=r.stateNode;if(e===null&&r.flags&4){e=l;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&e.focus();break;case"img":R.src&&(e.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var G=r.alternate;if(G!==null){var u=G.memoizedState;if(u!==null){var b=u.dehydrated;b!==null&&It(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}Sn||r.flags&512&&S2(r)}catch(f){tn(r,r.return,f)}}if(r===n){l0=null;break}if(e=r.sibling,e!==null){e.return=r.return,l0=e;break}l0=r.return}}function p3(n){for(;l0!==null;){var r=l0;if(r===n){l0=null;break}var e=r.sibling;if(e!==null){e.return=r.return,l0=e;break}l0=r.return}}function k3(n){for(;l0!==null;){var r=l0;try{switch(r.tag){case 0:case 11:case 15:var e=r.return;try{g1(4,r)}catch(R){tn(r,e,R)}break;case 1:var A=r.stateNode;if(typeof A.componentDidMount=="function"){var t=r.return;try{A.componentDidMount()}catch(R){tn(r,t,R)}}var o=r.return;try{S2(r)}catch(R){tn(r,o,R)}break;case 5:var a=r.return;try{S2(r)}catch(R){tn(r,a,R)}}}catch(R){tn(r,r.return,R)}if(r===n){l0=null;break}var l=r.sibling;if(l!==null){l.return=r.return,l0=l;break}l0=r.return}}var lR=Math.ceil,T1=Zr.ReactCurrentDispatcher,pl=Zr.ReactCurrentOwner,tr=Zr.ReactCurrentBatchConfig,K0=0,Ln=null,Rn=null,dn=0,jn=0,TA=ve(0),Gn=0,Kt=null,Xe=0,J1=0,kl=0,ft=null,Xn=null,Il=0,EA=1/0,gr=null,b1=!1,I2=null,ue=null,Io=!1,le=null,f1=0,vt=0,N2=null,xo=-1,Zo=0;function Bn(){return K0&6?an():xo!==-1?xo:xo=an()}function Ue(n){return n.mode&1?K0&2&&dn!==0?dn&-dn:Q9.transition!==null?(Zo===0&&(Zo=X4()),Zo):(n=W0,n!==0||(n=window.event,n=n===void 0?16:$4(n.type)),n):1}function Tr(n,r,e,A){if(50<vt)throw vt=0,N2=null,Error(X(185));Zt(n,e,A),(!(K0&2)||n!==Ln)&&(n===Ln&&(!(K0&2)&&(J1|=e),Gn===4&&oe(n,dn)),_n(n,A),e===1&&K0===0&&!(r.mode&1)&&(EA=an()+500,m1&&ye()))}function _n(n,r){var e=n.callbackNode;Q7(n,r);var A=r1(n,n===Ln?dn:0);if(A===0)e!==null&&gi(e),n.callbackNode=null,n.callbackPriority=0;else if(r=A&-A,n.callbackPriority!==r){if(e!=null&&gi(e),r===1)n.tag===0?X9(I3.bind(null,n)):L6(I3.bind(null,n)),K9(function(){!(K0&6)&&ye()}),e=null;else{switch(Q4(A)){case 1:e=nl;break;case 4:e=W4;break;case 16:e=n1;break;case 536870912:e=F4;break;default:e=n1}e=u8(e,a8.bind(null,n))}n.callbackPriority=r,n.callbackNode=e}}function a8(n,r){if(xo=-1,Zo=0,K0&6)throw Error(X(327));var e=n.callbackNode;if(YA()&&n.callbackNode!==e)return null;var A=r1(n,n===Ln?dn:0);if(A===0)return null;if(A&30||A&n.expiredLanes||r)r=v1(n,A);else{r=A;var t=K0;K0|=2;var o=i8();(Ln!==n||dn!==r)&&(gr=null,EA=an()+500,Je(n,r));do try{cR();break}catch(l){l8(n,l)}while(!0);ul(),T1.current=o,K0=t,Rn!==null?r=0:(Ln=null,dn=0,r=Gn)}if(r!==0){if(r===2&&(t=e2(n),t!==0&&(A=t,r=E2(n,t))),r===1)throw e=Kt,Je(n,0),oe(n,A),_n(n,an()),e;if(r===6)oe(n,A);else{if(t=n.current.alternate,!(A&30)&&!iR(t)&&(r=v1(n,A),r===2&&(o=e2(n),o!==0&&(A=o,r=E2(n,o))),r===1))throw e=Kt,Je(n,0),oe(n,A),_n(n,an()),e;switch(n.finishedWork=t,n.finishedLanes=A,r){case 0:case 1:throw Error(X(345));case 2:Pe(n,Xn,gr);break;case 3:if(oe(n,A),(A&130023424)===A&&(r=Il+500-an(),10<r)){if(r1(n,0)!==0)break;if(t=n.suspendedLanes,(t&A)!==A){Bn(),n.pingedLanes|=n.suspendedLanes&t;break}n.timeoutHandle=c2(Pe.bind(null,n,Xn,gr),r);break}Pe(n,Xn,gr);break;case 4:if(oe(n,A),(A&4194240)===A)break;for(r=n.eventTimes,t=-1;0<A;){var a=31-Lr(A);o=1<<a,a=r[a],a>t&&(t=a),A&=~o}if(A=t,A=an()-A,A=(120>A?120:480>A?480:1080>A?1080:1920>A?1920:3e3>A?3e3:4320>A?4320:1960*lR(A/1960))-A,10<A){n.timeoutHandle=c2(Pe.bind(null,n,Xn,gr),A);break}Pe(n,Xn,gr);break;case 5:Pe(n,Xn,gr);break;default:throw Error(X(329))}}}return _n(n,an()),n.callbackNode===e?a8.bind(null,n):null}function E2(n,r){var e=ft;return n.current.memoizedState.isDehydrated&&(Je(n,r).flags|=256),n=v1(n,r),n!==2&&(r=Xn,Xn=e,r!==null&&M2(r)),n}function M2(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function iR(n){for(var r=n;;){if(r.flags&16384){var e=r.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var A=0;A<e.length;A++){var t=e[A],o=t.getSnapshot;t=t.value;try{if(!br(o(),t))return!1}catch{return!1}}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oe(n,r){for(r&=~kl,r&=~J1,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var e=31-Lr(r),A=1<<e;n[e]=-1,r&=~A}}function I3(n){if(K0&6)throw Error(X(327));YA();var r=r1(n,0);if(!(r&1))return _n(n,an()),null;var e=v1(n,r);if(n.tag!==0&&e===2){var A=e2(n);A!==0&&(r=A,e=E2(n,A))}if(e===1)throw e=Kt,Je(n,0),oe(n,r),_n(n,an()),e;if(e===6)throw Error(X(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Pe(n,Xn,gr),_n(n,an()),null}function Nl(n,r){var e=K0;K0|=1;try{return n(r)}finally{K0=e,K0===0&&(EA=an()+500,m1&&ye())}}function Qe(n){le!==null&&le.tag===0&&!(K0&6)&&YA();var r=K0;K0|=1;var e=tr.transition,A=W0;try{if(tr.transition=null,W0=1,n)return n()}finally{W0=A,tr.transition=e,K0=r,!(K0&6)&&ye()}}function El(){jn=TA.current,_0(TA)}function Je(n,r){n.finishedWork=null,n.finishedLanes=0;var e=n.timeoutHandle;if(e!==-1&&(n.timeoutHandle=-1,H9(e)),Rn!==null)for(e=Rn.return;e!==null;){var A=e;switch(cl(A),A.tag){case 1:A=A.type.childContextTypes,A!=null&&a1();break;case 3:IA(),_0(Zn),_0(kn),vl();break;case 5:fl(A);break;case 4:IA();break;case 13:_0(q0);break;case 19:_0(q0);break;case 10:Ul(A.type._context);break;case 22:case 23:El()}e=e.return}if(Ln=n,Rn=n=Le(n.current,null),dn=jn=r,Gn=0,Kt=null,kl=J1=Xe=0,Xn=ft=null,Be!==null){for(r=0;r<Be.length;r++)if(e=Be[r],A=e.interleaved,A!==null){e.interleaved=null;var t=A.next,o=e.pending;if(o!==null){var a=o.next;o.next=t,A.next=a}e.pending=A}Be=null}return n}function l8(n,r){do{var e=Rn;try{if(ul(),Fo.current=L1,U1){for(var A=nn.memoizedState;A!==null;){var t=A.queue;t!==null&&(t.pending=null),A=A.next}U1=!1}if(Fe=0,Un=cn=nn=null,Tt=!1,gt=0,pl.current=null,e===null||e.return===null){Gn=1,Kt=r,Rn=null;break}n:{var o=n,a=e.return,l=e,R=r;if(r=dn,l.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var G=R,u=l,b=u.tag;if(!(u.mode&1)&&(b===0||b===11||b===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=L3(a);if(h!==null){h.flags&=-257,T3(h,a,l,o,r),h.mode&1&&U3(o,G,r),r=h,R=G;var k=r.updateQueue;if(k===null){var E=new Set;E.add(R),r.updateQueue=E}else k.add(R);break n}else{if(!(r&1)){U3(o,G,r),Ml();break n}R=Error(X(426))}}else if(z0&&l.mode&1){var R0=L3(a);if(R0!==null){!(R0.flags&65536)&&(R0.flags|=256),T3(R0,a,l,o,r),Gl(NA(R,l));break n}}o=R=NA(R,l),Gn!==4&&(Gn=2),ft===null?ft=[o]:ft.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var y=Q6(o,R,r);i3(o,y);break n;case 1:l=R;var v=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ue===null||!ue.has(d)))){o.flags|=65536,r&=-r,o.lanes|=r;var B=x6(o,l,r);i3(o,B);break n}}o=o.return}while(o!==null)}c8(e)}catch(_){r=_,Rn===e&&e!==null&&(Rn=e=e.return);continue}break}while(!0)}function i8(){var n=T1.current;return T1.current=L1,n===null?L1:n}function Ml(){(Gn===0||Gn===3||Gn===2)&&(Gn=4),Ln===null||!(Xe&268435455)&&!(J1&268435455)||oe(Ln,dn)}function v1(n,r){var e=K0;K0|=2;var A=i8();(Ln!==n||dn!==r)&&(gr=null,Je(n,r));do try{RR();break}catch(t){l8(n,t)}while(!0);if(ul(),K0=e,T1.current=A,Rn!==null)throw Error(X(261));return Ln=null,dn=0,Gn}function RR(){for(;Rn!==null;)R8(Rn)}function cR(){for(;Rn!==null&&!D7();)R8(Rn)}function R8(n){var r=s8(n.alternate,n,jn);n.memoizedProps=n.pendingProps,r===null?c8(n):Rn=r,pl.current=null}function c8(n){var r=n;do{var e=r.alternate;if(n=r.return,r.flags&32768){if(e=AR(e,r),e!==null){e.flags&=32767,Rn=e;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Gn=6,Rn=null;return}}else if(e=eR(e,r,jn),e!==null){Rn=e;return}if(r=r.sibling,r!==null){Rn=r;return}Rn=r=n}while(r!==null);Gn===0&&(Gn=5)}function Pe(n,r,e){var A=W0,t=tr.transition;try{tr.transition=null,W0=1,GR(n,r,e,A)}finally{tr.transition=t,W0=A}return null}function GR(n,r,e,A){do YA();while(le!==null);if(K0&6)throw Error(X(327));e=n.finishedWork;var t=n.finishedLanes;if(e===null)return null;if(n.finishedWork=null,n.finishedLanes=0,e===n.current)throw Error(X(177));n.callbackNode=null,n.callbackPriority=0;var o=e.lanes|e.childLanes;if(x7(n,o),n===Ln&&(Rn=Ln=null,dn=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||Io||(Io=!0,u8(n1,function(){return YA(),null})),o=(e.flags&15990)!==0,e.subtreeFlags&15990||o){o=tr.transition,tr.transition=null;var a=W0;W0=1;var l=K0;K0|=4,pl.current=null,oR(n,e),t8(e,n),M9(i2),e1=!!l2,i2=l2=null,n.current=e,aR(e),g7(),K0=l,W0=a,tr.transition=o}else n.current=e;if(Io&&(Io=!1,le=n,f1=t),o=n.pendingLanes,o===0&&(ue=null),K7(e.stateNode),_n(n,an()),r!==null)for(A=n.onRecoverableError,e=0;e<r.length;e++)t=r[e],A(t.value,{componentStack:t.stack,digest:t.digest});if(b1)throw b1=!1,n=I2,I2=null,n;return f1&1&&n.tag!==0&&YA(),o=n.pendingLanes,o&1?n===N2?vt++:(vt=0,N2=n):vt=0,ye(),null}function YA(){if(le!==null){var n=Q4(f1),r=tr.transition,e=W0;try{if(tr.transition=null,W0=16>n?16:n,le===null)var A=!1;else{if(n=le,le=null,f1=0,K0&6)throw Error(X(331));var t=K0;for(K0|=4,l0=n.current;l0!==null;){var o=l0,a=o.child;if(l0.flags&16){var l=o.deletions;if(l!==null){for(var R=0;R<l.length;R++){var G=l[R];for(l0=G;l0!==null;){var u=l0;switch(u.tag){case 0:case 11:case 15:bt(8,u,o)}var b=u.child;if(b!==null)b.return=u,l0=b;else for(;l0!==null;){u=l0;var f=u.sibling,h=u.return;if(r8(u),u===G){l0=null;break}if(f!==null){f.return=h,l0=f;break}l0=h}}}var k=o.alternate;if(k!==null){var E=k.child;if(E!==null){k.child=null;do{var R0=E.sibling;E.sibling=null,E=R0}while(E!==null)}}l0=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,l0=a;else n:for(;l0!==null;){if(o=l0,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bt(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,l0=y;break n}l0=o.return}}var v=n.current;for(l0=v;l0!==null;){a=l0;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,l0=d;else n:for(a=v;l0!==null;){if(l=l0,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:g1(9,l)}}catch(_){tn(l,l.return,_)}if(l===a){l0=null;break n}var B=l.sibling;if(B!==null){B.return=l.return,l0=B;break n}l0=l.return}}if(K0=t,ye(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot(I1,n)}catch{}A=!0}return A}finally{W0=e,tr.transition=r}}return!1}function N3(n,r,e){r=NA(e,r),r=Q6(n,r,1),n=se(n,r,1),r=Bn(),n!==null&&(Zt(n,1,r),_n(n,r))}function tn(n,r,e){if(n.tag===3)N3(n,n,e);else for(;r!==null;){if(r.tag===3){N3(r,n,e);break}else if(r.tag===1){var A=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof A.componentDidCatch=="function"&&(ue===null||!ue.has(A))){n=NA(e,n),n=x6(r,n,1),r=se(r,n,1),n=Bn(),r!==null&&(Zt(r,1,n),_n(r,n));break}}r=r.return}}function sR(n,r,e){var A=n.pingCache;A!==null&&A.delete(r),r=Bn(),n.pingedLanes|=n.suspendedLanes&e,Ln===n&&(dn&e)===e&&(Gn===4||Gn===3&&(dn&130023424)===dn&&500>an()-Il?Je(n,0):kl|=e),_n(n,r)}function G8(n,r){r===0&&(n.mode&1?(r=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):r=1);var e=Bn();n=Xr(n,r),n!==null&&(Zt(n,r,e),_n(n,e))}function uR(n){var r=n.memoizedState,e=0;r!==null&&(e=r.retryLane),G8(n,e)}function UR(n,r){var e=0;switch(n.tag){case 13:var A=n.stateNode,t=n.memoizedState;t!==null&&(e=t.retryLane);break;case 19:A=n.stateNode;break;default:throw Error(X(314))}A!==null&&A.delete(r),G8(n,e)}var s8;s8=function(n,r,e){if(n!==null)if(n.memoizedProps!==r.pendingProps||Zn.current)Qn=!0;else{if(!(n.lanes&e)&&!(r.flags&128))return Qn=!1,rR(n,r,e);Qn=!!(n.flags&131072)}else Qn=!1,z0&&r.flags&1048576&&T6(r,R1,r.index);switch(r.lanes=0,r.tag){case 2:var A=r.type;Qo(n,r),n=r.pendingProps;var t=SA(r,kn.current);dA(r,e),t=dl(null,r,A,n,t,e);var o=Yl();return r.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,wn(A)?(o=!0,l1(r)):o=!1,r.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,Tl(r),t.updater=D1,r.stateNode=t,t._reactInternals=r,b2(r,A,n,e),r=y2(null,r,A,!0,o,e)):(r.tag=0,z0&&o&&Rl(r),mn(null,r,t,e),r=r.child),r;case 16:A=r.elementType;n:{switch(Qo(n,r),n=r.pendingProps,t=A._init,A=t(A._payload),r.type=A,t=r.tag=TR(A),n=Gr(A,n),t){case 0:r=v2(null,r,A,n,e);break n;case 1:r=v3(null,r,A,n,e);break n;case 11:r=b3(null,r,A,n,e);break n;case 14:r=f3(null,r,A,Gr(A.type,n),e);break n}throw Error(X(306,A,""))}return r;case 0:return A=r.type,t=r.pendingProps,t=r.elementType===A?t:Gr(A,t),v2(n,r,A,t,e);case 1:return A=r.type,t=r.pendingProps,t=r.elementType===A?t:Gr(A,t),v3(n,r,A,t,e);case 3:n:{if(j6(r),n===null)throw Error(X(387));A=r.pendingProps,o=r.memoizedState,t=o.element,Y6(n,r),s1(r,A,null,e);var a=r.memoizedState;if(A=a.element,o.isDehydrated)if(o={element:A,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){t=NA(Error(X(423)),r),r=y3(n,r,A,e,t);break n}else if(A!==t){t=NA(Error(X(424)),r),r=y3(n,r,A,e,t);break n}else for($n=Ge(r.stateNode.containerInfo.firstChild),zn=r,z0=!0,ur=null,e=y6(r,null,A,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(pA(),A===t){r=Qr(n,r,e);break n}mn(n,r,A,e)}r=r.child}return r;case 5:return h6(r),n===null&&U2(r),A=r.type,t=r.pendingProps,o=n!==null?n.memoizedProps:null,a=t.children,R2(A,t)?a=null:o!==null&&R2(A,o)&&(r.flags|=32),_6(n,r),mn(n,r,a,e),r.child;case 6:return n===null&&U2(r),null;case 13:return $6(n,r,e);case 4:return bl(r,r.stateNode.containerInfo),A=r.pendingProps,n===null?r.child=kA(r,null,A,e):mn(n,r,A,e),r.child;case 11:return A=r.type,t=r.pendingProps,t=r.elementType===A?t:Gr(A,t),b3(n,r,A,t,e);case 7:return mn(n,r,r.pendingProps,e),r.child;case 8:return mn(n,r,r.pendingProps.children,e),r.child;case 12:return mn(n,r,r.pendingProps.children,e),r.child;case 10:n:{if(A=r.type._context,t=r.pendingProps,o=r.memoizedProps,a=t.value,x0(c1,A._currentValue),A._currentValue=a,o!==null)if(br(o.value,a)){if(o.children===t.children&&!Zn.current){r=Qr(n,r,e);break n}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var R=l.firstContext;R!==null;){if(R.context===A){if(o.tag===1){R=Vr(-1,e&-e),R.tag=2;var G=o.updateQueue;if(G!==null){G=G.shared;var u=G.pending;u===null?R.next=R:(R.next=u.next,u.next=R),G.pending=R}}o.lanes|=e,R=o.alternate,R!==null&&(R.lanes|=e),L2(o.return,e,r),l.lanes|=e;break}R=R.next}}else if(o.tag===10)a=o.type===r.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(X(341));a.lanes|=e,l=a.alternate,l!==null&&(l.lanes|=e),L2(a,e,r),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===r){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}mn(n,r,t.children,e),r=r.child}return r;case 9:return t=r.type,A=r.pendingProps.children,dA(r,e),t=or(t),A=A(t),r.flags|=1,mn(n,r,A,e),r.child;case 14:return A=r.type,t=Gr(A,r.pendingProps),t=Gr(A.type,t),f3(n,r,A,t,e);case 15:return Z6(n,r,r.type,r.pendingProps,e);case 17:return A=r.type,t=r.pendingProps,t=r.elementType===A?t:Gr(A,t),Qo(n,r),r.tag=1,wn(A)?(n=!0,l1(r)):n=!1,dA(r,e),X6(r,A,t),b2(r,A,t,e),y2(null,r,A,!0,n,e);case 19:return z6(n,r,e);case 22:return w6(n,r,e)}throw Error(X(156,r.tag))};function u8(n,r){return V4(n,r)}function LR(n,r,e,A){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=A,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ar(n,r,e,A){return new LR(n,r,e,A)}function Pl(n){return n=n.prototype,!(!n||!n.isReactComponent)}function TR(n){if(typeof n=="function")return Pl(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z2)return 11;if(n===O2)return 14}return 2}function Le(n,r){var e=n.alternate;return e===null?(e=Ar(n.tag,r,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=r,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&14680064,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,r=n.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e}function wo(n,r,e,A,t,o){var a=2;if(A=n,typeof n=="function")Pl(n)&&(a=1);else if(typeof n=="string")a=5;else n:switch(n){case aA:return He(e.children,t,o,r);case $2:a=8,t|=8;break;case Wa:return n=Ar(12,e,r,t|2),n.elementType=Wa,n.lanes=o,n;case Fa:return n=Ar(13,e,r,t),n.elementType=Fa,n.lanes=o,n;case Xa:return n=Ar(19,e,r,t),n.elementType=Xa,n.lanes=o,n;case h4:return H1(e,t,o,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case d4:a=10;break n;case Y4:a=9;break n;case z2:a=11;break n;case O2:a=14;break n;case re:a=16,A=null;break n}throw Error(X(130,n==null?n:typeof n,""))}return r=Ar(a,e,r,t),r.elementType=n,r.type=A,r.lanes=o,r}function He(n,r,e,A){return n=Ar(7,n,A,r),n.lanes=e,n}function H1(n,r,e,A){return n=Ar(22,n,A,r),n.elementType=h4,n.lanes=e,n.stateNode={isHidden:!1},n}function Na(n,r,e){return n=Ar(6,n,null,r),n.lanes=e,n}function Ea(n,r,e){return r=Ar(4,n.children!==null?n.children:[],n.key,r),r.lanes=e,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function bR(n,r,e,A,t){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ca(0),this.expirationTimes=ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ca(0),this.identifierPrefix=A,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function ml(n,r,e,A,t,o,a,l,R){return n=new bR(n,r,e,l,R),r===1?(r=1,o===!0&&(r|=8)):r=0,o=Ar(3,null,null,r),n.current=o,o.stateNode=n,o.memoizedState={element:A,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tl(o),n}function fR(n,r,e){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oA,key:A==null?null:""+A,children:n,containerInfo:r,implementation:e}}function U8(n){if(!n)return be;n=n._reactInternals;n:{if(we(n)!==n||n.tag!==1)throw Error(X(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break n;case 1:if(wn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break n}}r=r.return}while(r!==null);throw Error(X(171))}if(n.tag===1){var e=n.type;if(wn(e))return U6(n,e,r)}return r}function L8(n,r,e,A,t,o,a,l,R){return n=ml(e,A,!0,n,t,o,a,l,R),n.context=U8(null),e=n.current,A=Bn(),t=Ue(e),o=Vr(A,t),o.callback=r??null,se(e,o,t),n.current.lanes=t,Zt(n,t,A),_n(n,A),n}function K1(n,r,e,A){var t=r.current,o=Bn(),a=Ue(t);return e=U8(e),r.context===null?r.context=e:r.pendingContext=e,r=Vr(o,a),r.payload={element:n},A=A===void 0?null:A,A!==null&&(r.callback=A),n=se(t,r,a),n!==null&&(Tr(n,t,a,o),Wo(n,t,a)),a}function y1(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function E3(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<r?e:r}}function Bl(n,r){E3(n,r),(n=n.alternate)&&E3(n,r)}function vR(){return null}var T8=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dl(n){this._internalRoot=n}V1.prototype.render=Dl.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(X(409));K1(n,r,null,null)};V1.prototype.unmount=Dl.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qe(function(){K1(null,n,null,null)}),r[Fr]=null}};function V1(n){this._internalRoot=n}V1.prototype.unstable_scheduleHydration=function(n){if(n){var r=w4();n={blockedOn:null,target:n,priority:r};for(var e=0;e<te.length&&r!==0&&r<te[e].priority;e++);te.splice(e,0,n),e===0&&j4(n)}};function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function W1(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function M3(){}function yR(n,r,e,A,t){if(t){if(typeof A=="function"){var o=A;A=function(){var G=y1(a);o.call(G)}}var a=L8(r,A,n,0,null,!1,!1,"",M3);return n._reactRootContainer=a,n[Fr]=a.current,Mt(n.nodeType===8?n.parentNode:n),Qe(),a}for(;t=n.lastChild;)n.removeChild(t);if(typeof A=="function"){var l=A;A=function(){var G=y1(R);l.call(G)}}var R=ml(n,0,!1,null,null,!1,!1,"",M3);return n._reactRootContainer=R,n[Fr]=R.current,Mt(n.nodeType===8?n.parentNode:n),Qe(function(){K1(r,R,e,A)}),R}function F1(n,r,e,A,t){var o=e._reactRootContainer;if(o){var a=o;if(typeof t=="function"){var l=t;t=function(){var R=y1(a);l.call(R)}}K1(r,a,n,t)}else a=yR(e,r,n,t,A);return y1(a)}x4=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var e=at(r.pendingLanes);e!==0&&(rl(r,e|1),_n(r,an()),!(K0&6)&&(EA=an()+500,ye()))}break;case 13:Qe(function(){var A=Xr(n,1);if(A!==null){var t=Bn();Tr(A,n,1,t)}}),Bl(n,1)}};el=function(n){if(n.tag===13){var r=Xr(n,134217728);if(r!==null){var e=Bn();Tr(r,n,134217728,e)}Bl(n,134217728)}};Z4=function(n){if(n.tag===13){var r=Ue(n),e=Xr(n,r);if(e!==null){var A=Bn();Tr(e,n,r,A)}Bl(n,r)}};w4=function(){return W0};_4=function(n,r){var e=W0;try{return W0=n,r()}finally{W0=e}};qa=function(n,r,e){switch(r){case"input":if(Za(n,e),r=e.name,e.type==="radio"&&r!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<e.length;r++){var A=e[r];if(A!==n&&A.form===n.form){var t=P1(A);if(!t)throw Error(X(90));S4(A),Za(A,t)}}}break;case"textarea":k4(n,e);break;case"select":r=e.value,r!=null&&bA(n,!!e.multiple,r,!1)}};B4=Nl;D4=Qe;var dR={usingClientEntryPoint:!1,Events:[_t,cA,P1,P4,m4,Nl]},nt={findFiberByHostInstance:me,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YR={bundleType:nt.bundleType,version:nt.version,rendererPackageName:nt.rendererPackageName,rendererConfig:nt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=H4(n),n===null?null:n.stateNode},findFiberByHostInstance:nt.findFiberByHostInstance||vR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{I1=No.inject(YR),pr=No}catch{}}qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dR;qn.createPortal=function(n,r){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gl(r))throw Error(X(200));return fR(n,r,null,e)};qn.createRoot=function(n,r){if(!gl(n))throw Error(X(299));var e=!1,A="",t=T8;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(A=r.identifierPrefix),r.onRecoverableError!==void 0&&(t=r.onRecoverableError)),r=ml(n,1,!1,null,null,e,!1,A,t),n[Fr]=r.current,Mt(n.nodeType===8?n.parentNode:n),new Dl(r)};qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(X(188)):(n=Object.keys(n).join(","),Error(X(268,n)));return n=H4(r),n=n===null?null:n.stateNode,n};qn.flushSync=function(n){return Qe(n)};qn.hydrate=function(n,r,e){if(!W1(r))throw Error(X(200));return F1(null,n,r,!0,e)};qn.hydrateRoot=function(n,r,e){if(!gl(n))throw Error(X(405));var A=e!=null&&e.hydratedSources||null,t=!1,o="",a=T8;if(e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),r=L8(r,null,n,1,e??null,t,!1,o,a),n[Fr]=r.current,Mt(n),A)for(n=0;n<A.length;n++)e=A[n],t=e._getVersion,t=t(e._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[e,t]:r.mutableSourceEagerHydrationData.push(e,t);return new V1(r)};qn.render=function(n,r,e){if(!W1(r))throw Error(X(200));return F1(null,n,r,!1,e)};qn.unmountComponentAtNode=function(n){if(!W1(n))throw Error(X(40));return n._reactRootContainer?(Qe(function(){F1(null,null,n,!1,function(){n._reactRootContainer=null,n[Fr]=null})}),!0):!1};qn.unstable_batchedUpdates=Nl;qn.unstable_renderSubtreeIntoContainer=function(n,r,e,A){if(!W1(e))throw Error(X(200));if(n==null||n._reactInternals===void 0)throw Error(X(38));return F1(n,r,e,!1,A)};qn.version="18.3.1-next-f1338f8080-20240426";function b8(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b8)}catch(n){console.error(n)}}b8(),b4.exports=qn;var hR=b4.exports,P3=hR;Ka.createRoot=P3.createRoot,Ka.hydrateRoot=P3.hydrateRoot;const CR=`((((A0A6U3JU95:1.06636,A0A6A5BYM3:1.13744)0.551:0.15132,((A0A7S3JVG0:1.28403,((A0A015KGU0:0.37962,((((A0A015K9I1:0.24589,A0A2Z6RKH2:0.19682)0.987:0.16832,(A0A015LG84:0.22971,A0A015JDB7:0.28026)0.960:0.12470)0.902:0.07502,(A0A2H5RQU5:0.62259,(A0A2H5SWW4:0.33035,(A0A2Z6R810:0.50749,(A0A2H5U3T2:0.29034,A0A2H5QZD1:0.42314)0.768:0.12688)0.948:0.13335)0.968:0.16023)0.683:0.08573)0.916:0.06103,((A0A2H5RRP2:0.29285,(A0A2Z6QT07:0.16953,A0A2Z6QIK6:0.07429)0.999:0.28127)0.991:0.17832,(A0A2Z6Q998:0.55342,A0A2Z6QY61:0.23939)0.793:0.08928)0.981:0.15742)0.091:0.05037)0.952:0.17430,(A0A015K081:0.24478,(A0A2H5TWU9:0.10089,A0A015ILI8:0.08583)0.999:0.21796)0.929:0.13755)0.979:0.26016)0.148:0.14264,(A0A7S0STN6:0.71506,A0A227JRR0:0.65142)1.000:0.66228)0.878:0.10390)0.962:0.17811,((A0A225WQM4:1.44974,(A0A7S1VB90:0.60205,A0A7S4AWK4:0.53806)0.995:0.91369)0.964:0.54544,(A0A1Q9E5E1:1.43156,((A0A812KWY3:1.24842,((A0A813J9G6:0.75206,A0A812V6W6:0.57274)0.997:0.59860,(A0A812SB26:1.10108,(A0A1Q9DSY3:1.02064,((((A0A812Z1Z3:0.74119,A0A812I1X2:0.57866)0.903:0.18268,(A0A812UWU6:0.78473,((A0A812XW51:0.63562,(A0A813A2Y3:0.65852,A0A813BKB5:0.60293)0.387:0.10937)0.965:0.23228,A0A812MEF8:0.66259)0.151:0.04586)0.905:0.15518)0.969:0.16969,(A0A812U1M4:0.74499,(A0A812RXH1:0.59730,(A0A1Q9EH58:0.50022,A0A813HUX1:0.55783)0.966:0.21912)0.818:0.13162)0.931:0.22049)0.680:0.05972,(A0A812JHQ2:0.90732,(A0A812PHU8:0.83152,(A0A812MWY2:0.46163,(A0A1Q9CV02:0.66601,A0A812L0K3:0.59157)0.405:0.12432)0.807:0.14197)0.826:0.23127)0.978:0.26248)0.918:0.16951)0.876:0.14550)0.880:0.15386)0.953:0.18858)0.377:0.04940,((((A0A813ENQ5:1.42767,((A0A7S4D1P2:0.73120,A0A813GDX7:0.59772)0.451:0.13420,A0A812HZ90:1.32322)0.811:0.19765)0.142:0.11508,((A0A1Q9CMB9:0.59905,(A0A812N8Q1:0.68749,A0A812RAU9:0.63571)0.901:0.19621)0.952:0.26416,(A0A812TYA8:1.06099,((A0A1Q9D9S0:0.65918,A0A1Q9D757:0.68804)0.913:0.15341,((A0A812LHZ7:0.50048,A0A812ST18:0.41645)0.985:0.25209,(A0A812SD09:0.55985,A0A1Q9BXJ2:0.75751)0.422:0.08006)0.992:0.34332)0.651:0.09372)0.890:0.16467)0.993:0.33141)0.791:0.13946,(((A0A812USC9:0.31656,A0A812MG09:0.53209)0.880:0.14108,(A0A812LFZ4:0.58337,(A0A812SJP6:0.67440,A0A812LCA6:0.43645)0.919:0.20080)0.673:0.08284)1.000:1.31969,A0A812LKC8:1.05476)0.854:0.20902)0.849:0.11825,(((A0A812RVF4:0.50139,A0A812XB72:0.41356)0.997:0.35362,(A0A812P2U1:0.51253,(A0A812QE58:0.51320,A0A1Q9CR95:0.57558)0.909:0.18527)0.921:0.17888)0.690:0.12859,(((((A0A812MYR2:0.64707,((A0A812RLK5:0.61957,A0A812VYA8:0.68798)0.797:0.17729,A0A813A4A8:0.47277)0.009:0.04043)0.827:0.08483,A0A812Z348:0.65843)0.975:0.21313,A0A812JQV2:0.63123)0.498:0.07994,((A0A812PHR1:0.66040,(A0A812TEH6:0.48085,A0A812N7L4:0.57597)0.782:0.17678)0.943:0.17081,((A0A812J2W6:0.63633,(A0A1Q9EVI4:0.57966,A0A1Q9EV68:0.60829)0.719:0.13517)0.370:0.09904,A0A812N8T1:0.59807)0.870:0.12848)0.881:0.10853)0.836:0.07325,A0A812LX55:0.56792)0.993:0.31232)0.990:0.29314)0.770:0.08464)0.561:0.17531)0.945:0.32062)0.742:0.10637)0.879:0.08611,((((((C5K8E4:1.08643,(((((A0A0N5BSH9:0.76734,(A0A0K0EA54:0.40998,A0A0N5BQ19:0.23571)0.999:0.55882)0.943:0.22579,A0A1I7S6I1:0.69442)0.668:0.11657,((A0A0N5BZB8:0.80428,A0A0K0EBX2:0.59950)0.332:0.10976,(A0A0N5BDV2:0.71731,(((A0A0K0FTC6:0.60880,(A0A0N5BES6:0.37635,A0A0N5B5H6:0.53534)0.681:0.17488)0.976:0.26522,(A0A0K0E086:0.92246,A0A0N5C5K5:0.78445)0.253:0.14691)0.941:0.19914,((A0A1I8D1V2:0.42100,A0A0N5C001:0.64056)0.998:0.38936,(A0A0N5BH39:0.71083,A0A090L2C5:0.67032)0.788:0.09663)0.784:0.05714)0.312:0.06564)0.459:0.06449)0.862:0.10393)0.941:0.12244,((A0A820NAS8:0.52515,(A0A0N5ACU9:0.57762,A0A0N4VQG2:0.42662)0.944:0.14646)0.745:0.14961,(A0A183CPI0:0.57284,(A0A1I7S6I3:0.62433,(A0A0N4WKC0:0.39764,A0A0N4VUT6:0.24894)0.997:0.41094)0.262:0.17041)0.868:0.10967)0.841:0.09337)0.821:0.05082,(A0A6G3MES7:0.80072,A0A6G3MDR4:0.78164)0.946:0.21840)0.923:0.11231)0.753:0.04428,((A0A6J2X548:0.56034,A0A3C1S269:0.83853)0.572:0.08365,(((((A0A7R8YMH9:0.49384,(H3B0G5:0.46821,A0A6J1NUQ7:0.35275)0.524:0.05636)0.864:0.07818,Q76IN5:0.52247)0.681:0.05125,A0A1S4EPZ1:0.46037)0.955:0.10818,((A0A5C6N5I2:0.50551,A0A803T0X5:0.37970)0.603:0.11222,A0A6P4NL76:0.42832)0.839:0.06188)0.229:0.02806,A0A3Q0JF36:0.49661)0.933:0.10962)0.894:0.08495)0.731:0.07872,((A0A2B4RED6:0.39506,A0A2B4SGK4:0.20979)1.000:0.65342,((Q76IN4:0.57036,Q76IN3:0.43115)0.999:0.38075,(A0A6P6YLW1:0.65829,(A0A6P7TXG5:0.33668,(A0A6P7TTG2:0.45616,(A0A061BJX0:0.36481,(A0A4V2JX17:0.14060,A0A4Q9LMW1:0.09155)0.976:0.16674)0.984:0.19816)0.885:0.12376)0.035:0.10275)0.997:0.35309)0.000:0.08816)0.660:0.02312)1.000:0.46915,((A0A1D1VGC1:1.09471,A0A6A5B556:1.08342)0.743:0.18809,((A0A2E3BYI0:0.42775,(A0A6C0C7B7:0.35117,A0A838U394:0.43793)0.984:0.34726)1.000:0.65512,(A0A2G8LRJ1:0.67461,((A0A2G8KBI0:0.61837,(A0A3S1A548:0.32473,(A0A6P6JHZ7:0.36249,A0A8B6FSL2:0.42333)0.978:0.23629)0.998:0.35603)0.930:0.13437,(A0A7I1A4S3:0.56138,A0A6S7JSG2:0.79092)0.835:0.12032)0.914:0.17689)0.786:0.19242)0.941:0.19953)0.760:0.09978)0.651:0.05506,((((((A0A6J8CTN8:0.46349,O44318:0.35135)0.863:0.16140,(A0A401PB75:0.45052,(A0A3B4CU99:0.37077,((A0A3B3DN38:0.45524,A0A3B3ZBK2:0.34134)0.925:0.18101,(A0A672ZCC9:0.41475,A0A3Q3EFJ7:0.40861)0.484:0.06752)0.707:0.13875)0.963:0.15950)0.212:0.09395)0.980:0.16357,(A0A815VKE6:0.65663,(((A0A0V1ND77:0.50803,(A0A0V0UME0:0.43684,A0A0V0T642:0.18203)0.989:0.25620)0.869:0.10328,(A0A5S6Q2M3:0.55168,A0A085MRA0:0.42520)0.881:0.11801)0.947:0.14589,(A0A267DLS1:0.60282,Q76IN8:0.42151)0.949:0.17857)0.029:0.03699)0.868:0.08392)0.858:0.06317,((((A0A4Y2A5M3:0.65189,((A0A7E4RXF1:0.42206,A0A821XUS0:0.57484)0.352:0.09785,(A0A023EX96:0.37198,(A0A0K8TDX3:0.46712,A0A7E4SE11:0.78818)0.701:0.11268)0.921:0.14879)0.865:0.09723)0.501:0.13490,((((A0A075A9L3:0.42320,A0A183TLM2:0.48329)0.425:0.08397,(A0A183A2L0:0.53876,(A0A2H1BSZ9:0.39245,(A0A4Z2D6G6:0.60843,A0A183M8D5:0.51848)0.000:0.01842)0.924:0.11721)0.932:0.09451)0.955:0.16301,A0A812DKM4:0.73572)0.930:0.11146,(A0A4Y2NLE9:0.61041,(B7PXF8:0.66834,A0A096XIE1:0.40563)0.905:0.15457)0.009:0.08112)0.250:0.07969)0.799:0.04172,(((A0A6H5J4H1:0.47349,A0A293LBM6:0.58499)0.957:0.16827,((A0A6A4WP59:0.64194,A0A6A0H940:0.58854)0.937:0.16789,(((A0A817FE65:0.65999,A0A7T8H2M0:0.53829)0.459:0.08909,(A0A7R8CS82:0.49276,A0A817FCW8:1.14348)0.545:0.17939)0.979:0.20687,(A0A7C7WRG5:0.75574,(A0A7J7K4W2:0.54083,A0A6S7JLI6:0.55656)0.412:0.09737)0.268:0.07665)0.890:0.08089)0.930:0.09871)0.886:0.06299,((O44319:0.52861,C6F3W3:0.53351)0.475:0.08520,(((A0A444T140:0.60291,A0A0C9QX33:0.49280)0.913:0.15435,(J9M3R0:0.58705,A0A6H5INU4:0.45348)0.261:0.07266)0.846:0.07177,(B8Y0J4:0.63847,(A0A1B0GQ24:0.44281,A0A336N1I0:0.41363)0.868:0.15028)0.986:0.22734)0.847:0.06374)0.507:0.01002)0.685:0.05649)0.968:0.12987,(Q03274:0.61574,(A0A443SGA8:0.53567,A0A443SAG7:0.46151)0.736:0.13675)0.903:0.12105)0.929:0.08121)0.171:0.03636,(A0A1B6CJM7:0.54275,((A0A7T3V7X0:0.58387,(A0A6J1Q3P9:0.56343,A0A1B0CZB4:0.40850)0.832:0.10428)0.962:0.18342,(F1AQS6:0.65572,(A0A0J7K7K8:0.43661,A0A6P8NFS3:0.47258)0.928:0.17582)0.074:0.05389)0.895:0.12700)0.993:0.22677)0.982:0.14932,((Q7YXU7:0.78495,(A0A1J4L088:0.52991,A0A1J4KDY7:0.61127)0.970:0.25505)0.905:0.18182,(((((A0A164P0L0:0.21654,A0A164SET1:0.41573)1.000:0.57368,(A0A183J4B7:0.65540,A0A0V1GR43:0.54179)0.951:0.19095)0.772:0.05767,(((A0A803TJC4:0.35181,A0A402FR38:0.56991)0.999:0.33504,((A0A2A2JLL3:0.37813,A0A3L8D8X2:0.49822)0.851:0.13473,(J9KZK7:0.48112,(A0A6A0GVT1:0.51499,(A0A2R7VWV8:0.53695,A0A4Y2WK27:0.42404)0.220:0.05379)0.642:0.07761)0.999:0.21540)0.114:0.01708)0.734:0.06865,(A0A7D9JMA7:0.70685,A0A7D9JF01:0.24346)0.994:0.30382)0.684:0.06886)0.060:0.04912,(A0A4U5M9A9:0.44009,E3NN41:0.51800)0.943:0.12631)0.944:0.11032,(A0A068SIS9:0.89628,(A0A2P4YHP3:0.36910,A0A225UNE1:0.26854)0.999:0.38639)0.949:0.19966)0.854:0.08045)0.913:0.11153)0.976:0.16153)0.924:0.07789,(((A0A7S1NEV5:0.58955,(A0A7S4G3B4:0.61775,A0A7S1I335:0.77292)0.798:0.22847)1.000:0.67160,(A0A7T8JZM2:0.71829,(A0A7T8KB24:0.54149,A0A7T8HJE4:0.51178)0.773:0.18226)0.959:0.25335)0.832:0.12719,((((((((A0A0G2KV08:0.34560,(A0A1A8RRJ4:0.15417,A0A096MC09:0.32801)0.992:0.18750)0.998:0.28380,(((A0A6F9DM83:0.50448,(A0A354GEQ8:0.67236,A0A432I2X1:0.47362)0.884:0.14529)0.474:0.05411,(A0A432I848:0.55949,A0A432IA28:0.44249)0.971:0.16358)0.370:0.06985,A0A2G8JMH0:0.53013)0.742:0.14785)0.943:0.10524,(((A0A803TEV0:0.44680,(A0A670I215:0.32153,A0A670I6B9:0.18197)0.916:0.12300)0.993:0.22290,(A0A803T692:0.62192,A0A803SUI6:0.40230)0.957:0.19931)0.937:0.17758,(((A0A6P7WQ27:0.68217,(A0A803JAB7:0.57723,A0A803JJL3:0.66704)0.618:0.08666)0.915:0.12755,((((A0A672FFM7:0.39389,A0A3B3BVU9:0.24952)0.921:0.11069,A0A3Q3ED67:0.71589)0.807:0.06192,(A0A3Q1F781:0.55248,(A0A803JGS2:0.45202,A0A6I8SLC4:0.52638)0.830:0.11578)0.867:0.08872)0.932:0.07057,(A0A3Q3JGV0:0.57706,((A0A667X5D4:0.46206,A0A3Q3FNA9:0.36618)0.977:0.17309,(A0A3Q2EIC0:0.52589,A0A3P8R7Z4:0.39089)0.054:0.03838)0.533:0.05137)0.439:0.03058)0.881:0.04735)0.791:0.05512,(((A0A096M5N2:0.70010,A0A3Q3FLP2:0.65487)0.483:0.08386,((A0A822GMG0:0.45691,(A0A803JJA9:0.59680,A0A6I8RW77:0.48543)0.149:0.11779)0.904:0.11098,A0A1A8PUF6:0.49707)0.227:0.04400)0.363:0.02378,A0A0G2JUM9:0.60759)0.810:0.05849)0.940:0.11867)0.984:0.12793)0.922:0.06952,((A0A3B3D7A0:0.59497,A0A3B4UTK1:0.42834)1.000:0.30676,(((A0A6F9DMX7:0.62399,A0A6F9DM55:0.40856)0.989:0.32347,(A0A7R9RST1:0.81877,A0A7R9X1X5:0.54751)0.754:0.18468)0.955:0.18997,((A0A814I0M6:0.99776,(A0A7R9RVL0:0.74124,(A0A131Y5R5:0.53232,L7LX15:0.48517)0.979:0.28332)0.773:0.12197)0.563:0.21172,(((A0A1W7R6E0:0.31418,(A0A182FLS7:0.65542,A0A182R3Y0:0.52822)0.940:0.23286)1.000:0.62275,(A0A0K1IJB0:0.67379,A0A1W7R675:0.53801)0.836:0.16123)0.875:0.08768,(((A0A7J7KGR2:0.61824,A0A7R9REG3:0.82780)0.457:0.18010,(A0A7R9NIT4:0.82931,(A0A7R9XH65:0.59662,(A0A7R9XKS5:0.68673,A0A7R9X578:0.70298)0.788:0.12070)0.000:0.11499)0.975:0.23054)0.670:0.05476,((A0A226DA57:0.91628,(((A0A6I8Q649:0.58135,(A0A803TB21:0.50351,H2ZZX0:0.63197)0.865:0.13196)0.336:0.07651,(A0A131XUX4:0.57620,(A0A1E1X2L5:0.46263,A0A2R5L921:0.51017)0.991:0.29416)0.595:0.11629)0.047:0.06675,A0A3B1IC81:0.60670)0.679:0.06472)0.770:0.04160,((A0A6Q2X7C7:0.60912,((A0A4W5L9B3:0.37913,A0A7M4E7A5:1.00122)0.889:0.14350,A0A803J337:0.60287)0.875:0.11502)0.952:0.13202,(((A0A818Y1U7:0.18287,(A0A815FLC0:0.13887,A0A818STP1:0.14876)0.913:0.10625)1.000:0.46131,(A0A4W5JM51:0.39724,(A0A5J5CCJ1:0.45176,(A0A5C6P249:0.12602,Q76IM7:0.17065)0.891:0.13128)0.993:0.24465)0.991:0.25135)0.870:0.08020,((((((A0A6S7GBM3:0.49133,A0A2B4SBM2:0.47858)0.923:0.14847,(A0A482YNE9:0.55260,(A0A2G8JRT0:0.34789,A0A6J8A9N0:0.52584)0.944:0.17627)0.296:0.09338)0.866:0.07502,((A0A8B6HMP3:0.39462,A0A6S7K6K6:0.39470)0.950:0.10781,(A0A812C2N4:0.74080,(A0A2G8K5D1:0.56612,A0A2G8KBP6:0.42246)0.179:0.11556)0.815:0.11195)0.916:0.07054)0.889:0.04769,(A0A3Q2X2I3:0.56098,(A0A6J8BT64:0.35563,A0A8B6DRM3:0.13943)1.000:0.47908)0.869:0.07721)0.508:0.06512,A0A7D9I263:0.57699)0.808:0.04870,(A0A3B5PWS7:0.44791,A0A3N0XMX8:0.49069)0.830:0.11843)0.587:0.03934)0.262:0.04839)0.693:0.04401)0.921:0.05788)0.542:0.04210)0.000:0.03352)0.477:0.04861)0.750:0.03598)0.916:0.05519)0.666:0.05337,((A0A2K1JHT8:0.79617,((A0A176VPL5:1.15112,A0A176W190:0.45464)0.994:0.48748,((((((A0A2U1MW63:0.45410,A0A5K1DFY1:0.73307)0.894:0.16374,((((((((A0A438EI70:0.18595,A0A438F6M4:0.39558)0.721:0.05035,A0A438ET54:0.29078)0.506:0.03042,A0A438F3M1:0.18563)0.681:0.02572,(A0A438CAD5:0.76684,A0A438DK36:0.30837)0.881:0.14346)0.187:0.02376,(A0A438HGN1:0.26939,(A0A438J3K0:0.18790,A0A438GFP5:0.21216)0.900:0.07959)0.988:0.14167)0.984:0.11600,((A0A2N9FP60:0.21379,A0A2N9H3B1:0.31508)0.889:0.08459,(A0A2N9H895:0.36034,(A0A2N9J5C6:0.11664,A0A2N9G2U9:0.28744)0.978:0.13290)0.753:0.07168)0.937:0.09402)0.433:0.06600,A0A1S4AXD4:0.67798)0.953:0.12269,(A0A5D3C2W8:0.49867,((A0A438JRE5:0.03311,A0A438CEZ3:0.04800)0.998:0.21686,(A0A5E4FWN6:0.26120,A0A803PAY8:0.63545)0.072:0.01940)0.971:0.16667)0.243:0.10489)0.945:0.10231)0.723:0.05903,((A0A6A3ALT3:0.38554,(A0A6P4BY34:0.43092,(A0A6A3B497:0.56549,A0A7J0D929:0.46372)0.181:0.06045)0.765:0.03507)0.821:0.04986,((A0A2U1NWP4:0.52421,((A0A699ICK2:0.37309,A0A6L2NYQ5:0.63415)0.103:0.03264,(A0A6L2J218:0.33562,(((A0A6L2LEM5:0.22761,A0A6L2JCM8:0.43603)0.923:0.17567,(A0A699HHS1:0.27268,(A0A6L2J1P3:0.31196,A0A699H453:0.23109)0.944:0.11722)0.410:0.04782)0.996:0.20536,(A0A6L2LAW4:0.29693,(A0A699H7I5:0.32173,A0A6L2MVH7:0.10892)0.985:0.15298)0.978:0.14759)0.721:0.06239)0.912:0.07388)0.953:0.10456)0.914:0.07002,((A0A151SN56:0.37311,(A0A2Z6NYY2:0.20582,(A0A2Z6NRZ9:0.17293,A0A2Z6MTH4:0.15269)0.951:0.10275)0.990:0.18556)0.000:0.12045,(A0A2Z6NCN0:0.43527,((A0A2K3P7C7:0.42699,A0A151S6X1:0.30032)0.953:0.11154,(G8DCW8:0.38098,(A0A445M2Q6:0.29592,A0A445IKM5:0.32406)0.959:0.14255)0.860:0.06945)0.570:0.06973)0.476:0.05105)0.903:0.06731)0.980:0.11453)0.904:0.06631)0.938:0.08880,((A0A199W0A4:0.49843,A0A199UNR3:0.33804)1.000:0.30237,(M8CLX2:0.81124,((R7WA17:0.32486,Q6ATG8:0.26043)0.993:0.24700,((Q7XLJ3:0.26620,(A0A453EWT2:0.39309,A0A453PA94:0.57938)0.928:0.10196)0.690:0.03559,A0A5S6R989:0.39413)0.102:0.04192)0.901:0.12559)0.955:0.15771)0.871:0.08058)0.939:0.11781,(((((((((A0A5E4GES4:0.47779,((A0A803MQT3:0.46578,(A0A1R3G587:0.36455,(A0A1S4CC84:0.64760,A0A2N9GVI8:0.25209)0.236:0.07555)0.903:0.08222)0.658:0.04938,(A0A834SGK9:0.45118,(A0A834XBX3:0.25444,A0A834W6N5:0.31949)0.994:0.24409)0.913:0.09323)0.903:0.07381)0.405:0.03787,(((A0A444YA93:0.33318,(A0A392M4H3:0.32398,A0A392LX77:0.22039)0.996:0.21089)0.972:0.14188,((A0A151T691:0.50397,A0A151RTM7:0.13308)0.993:0.21720,(A0A6P8E5K3:0.31396,(A0A4D8Z6W9:0.44419,A0A5B6U4I8:0.41198)0.084:0.03266)0.896:0.08868)0.917:0.07612)0.213:0.04534,((A0A6A2XYE3:0.47741,A0A6A3CZD2:0.17003)0.999:0.30152,(A0A151S8J7:0.40854,(A0A2K3LZM6:0.29089,A0A151RRB7:0.40681)0.066:0.07058)0.946:0.11912)0.990:0.16852)0.708:0.04942)0.946:0.09696,(A0A0P0WX53:0.57809,M5WRJ8:0.40212)0.921:0.11183)0.976:0.11160,(((A0A2N9F7G7:0.26219,(A0A2N9IGY1:0.31640,A0A2N9FS53:0.43357)0.113:0.06424)0.996:0.22431,(((A0A803QA77:0.47281,A0A803NXW4:0.22320)0.940:0.11357,(A0A803PHC4:0.63924,(A0A803QPG7:0.42951,(A0A803QDU6:0.25152,A0A803PR23:0.15081)0.970:0.15028)0.955:0.11065)0.114:0.03488)0.893:0.08254,A0A2N9E896:0.38321)0.902:0.08225)0.904:0.07075,(((A0A803PV05:0.44045,A0A803Q9B8:0.47832)0.710:0.08927,(A0A2N9H1Z9:0.45412,A0A2N9IEJ4:0.29836)0.938:0.12270)0.381:0.04039,(A0A2I0KWI7:0.46826,A0A6P3ZSG1:0.59588)0.843:0.11386)0.000:0.06555)0.822:0.07007)0.722:0.05044,(((((A0A834L6G4:0.40953,A0A6P5MRQ9:0.45874)0.084:0.05059,A0A2U1MVD0:0.45360)0.818:0.04468,((A0A1R3GUS6:0.33712,(A0A834SR30:0.27824,A0A834WUY9:0.21379)1.000:0.28138)0.000:0.09283,A0A5N5FVC7:0.45381)0.577:0.05546)0.936:0.07124,(((((A0A6J0JKN7:0.35391,(A0A178U636:0.37885,A0A6D2HFH4:0.20032)0.856:0.06725)0.968:0.13820,A0A087GD46:0.37279)0.514:0.09384,A0A6D2K684:0.34746)0.985:0.13393,(((((A0A2N9HKW7:0.40764,(((A0A2N9F4Z0:0.28937,(A0A2N9GGQ9:0.29835,A0A2N9F068:0.23895)0.881:0.05172)0.809:0.06269,(A0A833TKR9:0.32572,A0A2I4E8H9:0.28481)0.976:0.14094)0.824:0.03380,(A0A834D4L9:0.41520,A0A2N9EY44:0.53724)0.666:0.03364)0.802:0.02697)0.840:0.03432,((A0A1R3GLF3:0.32436,A0A834HFR2:0.72079)0.476:0.06477,(A0A453K4J3:0.25188,B8BE31:0.24609)0.967:0.11687)0.847:0.07537)0.872:0.03811,(((A0A803PSV0:0.46693,M5XIV5:0.49121)0.888:0.11795,(A0A1U8I2Q3:0.47269,((A0A5B6WIN8:0.24029,A0A1U8J5G5:0.14403)0.998:0.21820,(A0A5B6UGM9:0.20740,A0A5B6WTK4:0.28587)0.982:0.14728)0.936:0.09595)0.036:0.08468)0.842:0.04163,((A0A6P4BJG5:0.38706,(A0A803NGI9:0.16670,(A0A803QHG9:0.25630,A0A803P0J9:0.13436)0.944:0.10464)1.000:0.22945)0.873:0.07775,J3MVP4:0.77472)0.489:0.01529)0.952:0.08375)0.890:0.04430,((A0A834GE24:0.48222,(A0A5N5IB01:0.41557,A0A6J5V8Q1:0.38226)0.918:0.13008)0.860:0.07785,M5WCD6:0.41034)0.726:0.04635)0.918:0.05323,(((A0A6P6V2V3:0.40603,A0A6P6T067:0.32284)0.925:0.09862,(A0A2Z6NX36:0.25206,(A0A438D8U2:0.45652,(A0A2Z6NY57:0.41030,A0A2K3PRL4:0.20754)0.974:0.16652)0.835:0.06659)0.984:0.12474)0.719:0.06245,(A0A175YKW1:0.44778,(A0A4D8Z3E5:0.42601,(A0A803PII9:0.30908,(A0A803PCN2:0.33237,A0A803NXZ1:0.26135)0.890:0.07340)0.980:0.12907)0.559:0.06105)0.724:0.02506)0.846:0.03905)0.895:0.04582)0.903:0.03497,(((B8AVS5:0.57531,A0A3L6TCF9:0.30311)0.991:0.25480,(A0A7N2M0D5:0.79739,A0A834LFK3:0.54688)0.737:0.13975)0.872:0.07918,((A0A392MB40:0.27669,A0A2Z6PKH7:0.34218)0.948:0.13763,((A0A803PSQ1:0.26678,A0A803NNJ1:0.12947)0.934:0.13624,(A0A803QFT6:0.37003,(A0A803PTL7:0.45324,A0A803P9U8:0.15691)0.975:0.16686)0.913:0.12977)0.993:0.16696)0.898:0.06269)0.306:0.02228)0.911:0.05367)0.906:0.05649,(((A0A5K1A2X5:0.81472,A0A803N7C0:0.45590)0.456:0.10453,(A0A834SGE5:0.46735,(A0A835CKF3:0.41852,(A0A834W8W6:0.05501,A0A834X167:0.00055)1.000:0.27372)0.795:0.07129)0.969:0.17751)0.790:0.09554,(A0A4Y7JB21:0.50715,(A0A822ZNS6:0.51941,A0A835H393:0.42159)0.394:0.04380)0.936:0.11151)0.595:0.05775)0.970:0.08108)0.819:0.07063,(A0A6P5FLZ2:0.49818,(A0A2I0ACS8:0.30570,(A0A2I0VD29:0.37535,A0A2I0VYZ5:0.48228)0.969:0.18670)0.974:0.18829)0.000:0.08636)0.848:0.08935,(A0A2I4HC76:0.28377,A0A6P9E9Z8:0.27474)0.999:0.25078)0.527:0.05999,((A0A7J7MRY2:0.81679,(A0A2P6PSU6:0.19328,(A0A6A5MBL7:0.50046,(A0A2Z6MD03:0.41629,A0A2Z6NQ52:0.20114)0.585:0.09501)0.906:0.16752)0.890:0.16649)0.965:0.18057,(((A0A1S4BNK6:0.25421,(A0A1S3ZB11:0.22960,A0A1U8G4N9:0.35553)0.972:0.12681)0.999:0.23790,(((A0A5N5LD40:0.38846,(A0A6P6VDP1:0.14411,A0A6P6V824:0.31275)0.999:0.33214)0.415:0.06401,A0A2I0XDZ4:0.43827)0.482:0.01858,(A0A061FTW1:0.28006,A0A6P6XAH9:0.34960)0.940:0.09770)0.727:0.03830)0.499:0.05597,(A0A835PJR2:0.61705,((A0A6P6VJB9:0.39732,A0A6P6TF03:0.35752)0.926:0.12387,(A0A484LI22:0.38834,(A0A484MQM8:0.33217,(A0A484LAY9:0.22163,A0A484LZZ9:0.37886)0.922:0.11823)0.997:0.17718)0.945:0.11321)0.816:0.07306)0.500:0.06983)0.879:0.09175)0.979:0.11311)0.945:0.10713,((((((((A0A1U8G6P3:0.40496,A0A484NHY8:0.30430)0.928:0.14746,((A0A803PYC4:0.28215,A0A803P3S3:0.21108)1.000:0.28041,(A0A803Q992:0.27447,A0A803P4Q1:0.27023)0.994:0.24593)0.712:0.06245)0.979:0.15715,(((A0A1S4DEN4:0.39741,A0A1S4DGA5:0.51294)0.038:0.07393,A0A2K3NHQ4:0.65347)0.781:0.10289,(A0A7J0G7Y2:0.62139,(A0A484M9E2:0.47838,A0A6I9V369:0.31213)0.334:0.06798)0.856:0.08144)0.459:0.03250)0.931:0.09003,((A0A6I9UGH2:0.29964,A0A6I9TJT8:0.19989)0.991:0.24097,((A0A6L2LAR5:0.19343,(A0A251SD80:0.20312,A0A6L2KNM0:0.32584)0.216:0.06152)0.977:0.16827,(A0A6L2KTG8:0.42756,(A0A699IPZ5:0.15967,A0A6L2NME7:0.44998)0.281:0.04671)0.493:0.11750)0.875:0.10110)0.232:0.05550)0.893:0.09171,(A0A2N9HM15:0.39399,A0A5D3DT20:0.28522)0.912:0.11328)0.859:0.05134,(A0A6A2XV92:0.30838,A0A6A2Z618:0.47931)0.999:0.45314)0.388:0.02913,((A0A6J0KM30:0.33524,A0A6D2HYA3:0.37067)0.901:0.11504,(A0A178UW88:0.51989,O65598:0.35160)0.823:0.08562)0.915:0.12247)0.886:0.09880,(A0A1D1YFE7:0.50578,A0A2I0VLI2:0.62463)0.654:0.11023)0.933:0.09977)0.992:0.16875)0.797:0.06952,((((Q7XVQ0:0.23619,Q948A0:0.67861)0.944:0.15919,((C7J6J5:0.35344,A0A453NC24:0.49453)0.069:0.11027,(Q7XKK3:0.29070,J3L168:0.66118)0.915:0.13384)0.501:0.11559)0.999:0.35078,((Q8H992:0.45029,Q10IP9:0.47183)0.933:0.12369,(B9GCW0:0.35956,A0A7H4LIX4:0.38260)0.942:0.15414)0.819:0.10266)0.682:0.07687,A0A6V7NJ93:0.44083)0.984:0.15656)0.951:0.16905)0.048:0.06897)0.679:0.05527,(((A0A388M5K7:0.57673,A0A388JS56:0.66055)0.934:0.18140,((A0A388KXF0:0.31614,(A0A388JZR0:0.26070,A0A388LU14:0.43372)0.889:0.14258)1.000:0.35596,(A0A388K5C4:0.54681,(A0A388M3U4:0.44979,A0A388L4M7:0.46931)0.974:0.20451)0.851:0.10863)0.767:0.13256)0.321:0.08092,A0A2K1JU92:0.72053)0.859:0.07426)0.952:0.10485)0.635:0.01361,((((A0A833WFZ0:0.33310,A0A833SFI5:0.25912)1.000:0.60001,((F0WG47:0.30246,A0A833SF44:0.25852)0.798:0.08130,(A0A6G0XDT0:0.24736,A0A1V9Y8S0:0.76180)0.959:0.25230)0.976:0.27134)0.832:0.19199,((Q572J7:0.49326,(A0A225W1A1:0.17356,A0A6A3S471:0.52834)0.985:0.25400)0.922:0.17184,(A0A225VP51:0.45491,A0A397E673:0.64688)0.951:0.23909)1.000:0.43474)0.484:0.08137,((A0A7S2J8F8:0.68173,A0A7S2DLX9:0.43627)0.998:0.38476,(A0A7S2J8C0:0.84164,(((A0A2P6TAZ8:0.32234,(A0A2J7ZU46:0.40206,A0A7S2QSR4:0.54973)0.008:0.04977)0.630:0.09637,(A0A2K3DSH2:0.23109,(A0A2J7ZLA0:0.26694,A0A2K3D234:0.29797)0.226:0.08309)0.990:0.20556)0.997:0.33500,(A0A383WHM7:0.53092,(A0A250XAW2:1.10822,A0A2K3CMZ0:0.43029)0.681:0.16260)0.986:0.27642)0.889:0.12899)0.771:0.12711)0.438:0.13678)0.866:0.08757)0.961:0.12516,(((A0A507CA20:0.86326,((A0A060SP60:0.26538,A0A4Y9XS76:0.27541)0.999:0.44859,(A0A5C3EST9:0.52287,A0A7J6UZ44:0.67939)0.975:0.28126)0.743:0.08963)0.675:0.02233,((A0A3N5HUC3:1.12357,A0A533WA04:0.68767)0.845:0.16375,((A0A238F9F2:0.46378,A0A2X0KGA8:0.28515)1.000:0.61731,((A0A0P1BS47:0.76936,(A0A177U104:0.52589,A0A177T0X7:0.60960)0.582:0.20608)0.866:0.30741,(A0A0F7RXJ2:0.41684,A0A127ZKB9:0.66705)1.000:0.90229)0.209:0.11831)0.857:0.15995)0.721:0.14053)0.334:0.02970,((A0A1R1X311:0.64325,A0A7J6V1Q5:0.60395)0.943:0.20138,(A0A0B7MVQ9:0.49066,(A0A0B7NA71:0.51092,((((((A0A1C7MXH7:0.31591,(A0A0C9MKP2:0.29282,A0A068SFN0:0.14470)0.594:0.06266)0.995:0.19519,I1BTK6:0.31476)0.945:0.12863,A0A1C7MXE6:0.46360)0.838:0.05768,(A0A1C7MX11:0.44014,S2JAN6:0.39067)0.967:0.20109)0.474:0.02106,A0A0B7NG03:0.55313)0.062:0.02763,(A0A0B7NY60:0.41747,I1C8P9:0.37430)0.816:0.06943)0.434:0.10351)0.628:0.06708)0.996:0.33111)0.956:0.16458)0.680:0.06666)0.767:0.10260,(((A0A1D8NA99:0.67185,(A0A813JI41:0.98275,A0A7C7WVN4:1.29658)0.755:0.28854)0.908:0.26676,((A0A238F5Z9:0.93253,(A0A4P6XLH8:0.71591,A0A2H0ZN92:0.55185)0.106:0.06507)0.906:0.17643,((A0A367YI73:0.67791,C4YT66:0.47527)0.930:0.16676,(A0A4T0WXC4:0.91539,(M3HSY6:0.98010,A0A1D8PSY7:0.39197)0.925:0.24016)0.205:0.03058)0.903:0.10738)0.917:0.13119)0.921:0.12308,(Q54BG8:0.49608,(O15639:0.57022,Q54DH4:0.34081)0.884:0.14500)1.000:0.30348)0.811:0.08008)0.348:0.08523)0.987:0.16211)0.902:0.07284,((((((((L1JC59:1.12842,((((A0A418RMH6:0.84988,A0A7S3HSS9:0.98110)0.892:0.23491,(((A0A2D5XPS0:0.76337,A0A1B7WD92:0.83897)0.973:0.33354,((A0A177U127:0.57416,K1WL81:0.59403)0.940:0.16766,(A0A1M8A4W3:0.60355,(A0A2K1QMK1:0.53869,(A0A4T0TKN5:0.60132,A0A5M6BQA7:0.54603)0.324:0.12063)0.737:0.08269)0.802:0.05748)0.994:0.35319)0.915:0.16921,(((((((A0A7V3K4U9:0.74951,A0A5J4YFZ6:0.82654)0.905:0.21159,(((A0A1X7TKG8:0.50296,(A0A1X7V5K4:0.76730,(A7S0P9:0.35874,A0A0N7ZA29:0.45537)0.433:0.07341)1.000:0.79443)0.205:0.06255,(A0A699GTZ7:0.23363,A0A251UV27:0.26831)0.998:0.34619)0.163:0.10039,(A0A813AKW8:0.53405,(A0A813CNN8:0.64065,A0A812SE16:0.24535)0.907:0.16455)0.982:0.26030)0.610:0.16044)0.856:0.09641,((A0A433BTR1:0.85073,(A0A2B7ZX51:0.63745,(((A0A6A4VKA8:0.53668,(A0A6P7TWZ1:0.64806,(A0A812EMT5:0.63344,(A0A6P7TT58:0.58801,A0A6P7U7S9:0.53927)0.536:0.08124)0.743:0.04681)0.519:0.06514)0.940:0.14227,(A0A811WHA5:0.55974,A0A226DV40:0.50950)0.000:0.10227)0.558:0.04907,(A0A1X7VK11:0.52322,A0A1D1UW74:0.44132)0.686:0.10293)0.422:0.11379)0.481:0.10509)0.895:0.15826,X6NKH2:1.02696)0.306:0.12989)0.894:0.12524,((B8LEJ8:1.07532,A0A7S3AJX3:0.83660)0.180:0.14651,A9V8N6:1.38274)0.523:0.16633)0.126:0.08393,((A0A835YLG1:0.92767,(A0A6H5KDF6:0.79760,A0A6H5JA89:0.78120)0.738:0.13468)0.994:0.42085,((A0A812TCN6:0.48357,A0A1Q9DDT0:0.50018)1.000:0.57574,(A0A0G4F5Q1:0.69475,(A0A0G4GU28:0.60742,A0A0G4GGY8:0.72196)0.508:0.11072)0.611:0.09383)0.942:0.15260)0.794:0.06538)0.362:0.07346,A0A7S2ZBP1:1.11876)0.611:0.06152,(((A0A7S1L9D9:0.87551,A0A2G2AE30:1.39045)0.661:0.25084,(A0A433C3U8:1.15262,(P15594:0.73915,(A0A7G2C2D1:0.59033,S9VX95:0.49788)0.941:0.25495)0.979:0.31158)0.000:0.09571)0.869:0.12835,(A0A2E8GC58:0.78099,A0A3M2C5X4:0.55431)0.939:0.26247)0.832:0.09903)0.475:0.06648)0.843:0.07616)0.863:0.06577,(F2U1I2:0.43967,F2TXL1:0.29530)1.000:0.81574)0.129:0.06211,(A0A350IBB4:0.59449,A0A7J4Q5L6:0.69826)1.000:0.55077)0.182:0.07693)0.182:0.00869,A0A5A8C6Z2:1.03889)0.954:0.32184,A0A391NSB1:1.31115)0.832:0.13359,(A0A391NJU7:1.22758,((A0A5J4U4L8:0.36439,(A0A5J4ULR4:1.03778,A0A5J4TF34:0.38716)0.210:0.00114)1.000:1.27397,(A0A146KM68:0.46961,(E1EYE6:0.71339,((E1EVS7:0.74550,A0A146K4X2:0.81950)0.398:0.09846,V6LZP4:0.85126)0.168:0.06365)0.289:0.11956)0.988:0.39159)0.183:0.08929)0.824:0.10227)0.970:0.24928,((((A0A369T7D5:1.06601,(((A0A521RVL8:1.18736,A0A3N5CSN5:0.90383)0.271:0.18303,(A0A7R7B5T0:0.62832,A0A2W6T5W3:0.61722)0.985:0.46979)0.871:0.16625,(A0A1L3LPB2:0.94804,(A0A2G2HVD8:1.33509,A0A844XW14:1.17982)0.897:0.30940)0.856:0.14720)0.839:0.15249)0.044:0.17344,A0A0Q6FRL0:1.27654)0.991:0.51226,(((A0A2R4A3Q4:0.80594,A0A2P1G866:0.47575)1.000:0.79458,((A0A4P8NWS4:1.04464,(((Q9XNK5:0.65329,E7D4Q0:0.72511)0.999:0.73601,(A0A4P8NQV1:0.65461,A0A4P8NPF3:0.42321)0.908:0.21092)0.731:0.06646,((A0A895KUH0:0.88071,((A0A433Q165:0.57789,A0A3G2C538:0.85588)0.977:0.38469,(A0A650AFC1:0.69357,A0A650AFC4:1.02824)0.962:0.40279)0.480:0.09574)0.609:0.17256,A0A074S599:1.32194)0.754:0.23342)0.820:0.27108)0.982:0.39296,(((A0A495Z8W2:0.59229,(A0A661D6N2:0.64337,A0A2K8N9I0:0.39465)0.879:0.10692)0.479:0.09647,((((((A0A1V4UDG7:0.55422,A0A2G6E4I5:0.41261)0.956:0.18371,((A0A413YHJ2:0.58982,A0A2Y9BKH3:0.40621)0.951:0.17644,((A0A096D6M8:0.40718,A0A1I5VQL2:0.63780)0.985:0.27216,(A0A0E3PFP8:0.43317,A0A7K3Y2I9:0.39709)0.317:0.03036)0.928:0.09396)0.811:0.06309)0.814:0.06712,((A0A759YK17:0.32430,A0A1I4LQG7:0.27053)0.827:0.05145,(A0A661ZQF6:0.39403,A0A076VHX8:0.46999)0.703:0.06921)0.859:0.09902)0.872:0.09387,((((M1GPG6:0.38310,A0A2H4QBM2:0.47729)0.971:0.17106,(A0A541AXI5:0.40395,(A0A679EJU6:0.44999,A0A679ETQ6:0.57186)0.963:0.16990)0.794:0.05711)0.926:0.10353,(A0A222AIH0:0.49936,(((A0A6B9VZ22:0.47476,A0A0S2LQ72:0.50329)0.909:0.14320,A0A1I9LKB8:0.40822)0.576:0.11818,(A0A0S2IE03:0.53315,(A0A0G3F6P4:0.48199,A0A7U1AQ42:0.47307)0.939:0.16173)0.279:0.05407)0.996:0.22347)0.738:0.08798)0.419:0.07850,(A0A097KL86:0.34570,(A0A3P8MUN1:1.08533,(A0A097KKB4:0.25118,A0A1X9GCP1:1.47563)0.514:0.09556)0.645:0.05432)0.999:0.25839)0.614:0.05506)0.421:0.03645,(((A0A5P9NVY5:0.52538,(A0A0G3F1J3:0.62129,A0A1B0TFP0:0.66837)0.351:0.04762)0.966:0.18629,((A0A291LI44:0.29682,Q1XA93:0.86859)0.371:0.04906,(A0A5P9NVZ4:0.32860,A0A291LIV3:0.21544)0.767:0.08100)0.958:0.14939)0.948:0.13867,(A7UDN1:0.55384,A0A2H4QBU4:0.40524)0.965:0.17052)0.665:0.05556)0.990:0.16968,(((A0A176RYS9:0.41877,(((A0A0G3SGR8:0.60190,A0A498QK94:0.48407)0.879:0.09656,((A0A1X9PUM5:0.44490,A0A097KNA0:0.62957)0.808:0.07630,J8GVU8:0.49479)0.182:0.01955)0.951:0.09402,(A0A6P2ABF1:0.29011,(A0A6P0S3A4:0.40433,A0A6P0KRZ6:0.44484)0.846:0.10664)0.977:0.14203)0.895:0.07108)0.781:0.02255,A0A1G7JYU9:0.62743)0.353:0.00690,(((A0A1Q9NF51:0.33296,A0A842U4V7:0.39776)0.751:0.08913,((A0A3E0NBT3:0.34521,A0A0F8VMR8:0.62333)0.782:0.04358,(A0A0A7RS66:0.37054,(Q8YKQ2:0.35872,A0A1Z4H5U6:0.16997)0.999:0.34558)1.000:0.37568)0.795:0.04940)0.948:0.09602,(A0A1Y9TM46:0.71193,(((A0A4Q3C3C4:0.52035,A0A366H8Z0:0.70609)0.985:0.24693,(((Q7YAJ7:0.85308,(A0A6P0RC08:0.26155,A0A6M0F6M0:0.28065)0.797:0.07020)0.775:0.04622,(A0A3D2JBD4:0.62614,(A0A1C9JBG1:1.23516,(((A0A6P0M9Z1:0.97834,(A0A223FM36:1.16484,A0A3S5X140:0.89063)0.710:0.10969)0.928:0.26830,(A0A1X9PUH1:0.98432,A0A223FM14:0.92268)0.943:0.29590)0.297:0.09732,G5J7K0:0.87757)0.815:0.13932)0.836:0.11645)0.788:0.06247)0.726:0.03684,(A0A1B2RYR6:0.42827,A0A0S2LPX6:0.28956)0.416:0.05119)0.841:0.05603)0.691:0.05160,(A0A679ELK8:0.51859,(A0A385UJQ7:0.47331,A0A7D5HK32:0.75686)0.834:0.08082)0.940:0.13977)0.128:0.01470)0.996:0.18970)0.887:0.06817)0.712:0.09568)0.951:0.11570)0.942:0.16338,(A0A1Y1Q1I8:0.67222,A0A1Y1Q1Q0:0.67324)0.998:0.56653)0.601:0.11231)0.556:0.06329)0.560:0.13823,((((((((A0A4U1A0B9:0.59375,A0A0F9ESY3:0.53286)0.416:0.12615,((((((((A0A3D1UXW4:0.36581,(A0A535Q1B2:0.54119,(A0A5M8TB02:0.14460,A0A1H3DWY4:0.20957)0.988:0.17294)0.423:0.07253)0.971:0.13139,((((A0A516ZBI8:0.49110,(A0A2P0QI84:0.38861,(A0A097KKN7:0.48163,A0A7S1N9C1:0.27619)0.957:0.16594)0.583:0.09436)0.871:0.09298,((A0A6G7MXR1:0.36719,(A0A516IKP1:0.47086,((A0A2C9DSC8:0.80405,A0A2K1JDH8:0.71252)0.917:0.15837,(A0A386TYU6:0.18248,A0A516IL11:0.20500)0.957:0.07811)0.863:0.05845)0.570:0.04106)0.467:0.05569,A0A7U1GG40:0.48305)0.970:0.13409)0.687:0.07338,((((((((A0A2E7MMD5:0.66256,((A0A7S2ZDD3:1.25540,A0A7S0G0N7:0.73978)0.940:0.23936,(A0A1J7IAE6:0.89777,((A0A3L6D6U5:0.51148,(A0A836IZF8:0.30933,A0A0K9NQH8:0.39597)0.688:0.07624)0.954:0.24425,(A0A2R6Q4G4:0.16354,(A0A5K1BK38:0.26892,A0A0E0ACS1:0.75158)0.344:0.08640)0.999:0.41076)0.999:0.48374)0.758:0.10555)0.472:0.09545)0.891:0.09597,(((A0A6C0SI94:0.44991,Q7YAJ5:0.55159)0.992:0.41546,A0A2K1KGK5:0.88058)0.726:0.07487,(A0A0H5R890:0.52155,A0A0G4IW58:0.70704)0.997:0.36953)0.860:0.08978)0.839:0.11183,((A0A0G3VSH7:0.96378,(A0A8B0SFD9:1.18843,A0A291LJD3:0.86651)0.379:0.10209)0.781:0.09225,(A0A7U1BFE0:0.96889,Q0R4Y4:0.97330)0.972:0.33895)0.893:0.11452)0.869:0.07152,(((A0A7U3RUP3:0.54480,A0A060D3Q7:0.65933)0.938:0.16947,A0A1D8RE55:0.30604)0.527:0.07853,A0A386TXY3:0.45650)0.951:0.10220)0.378:0.05744,(A0A2U9GJ32:0.60474,(A0A2U9GIQ0:0.44926,(A0A060DDJ7:0.51978,(A0A0A1ES51:0.47545,A0A343UY06:0.46792)0.905:0.13675)0.980:0.22631)0.709:0.09875)0.000:0.06395)0.716:0.02308,(((G0Y659:0.45612,A0A650BYA3:0.16521)0.995:0.30033,(A0A068PEQ5:0.38720,A0A2U9GJA7:0.44546)0.778:0.11508)0.999:0.34816,(((((Q0R4X8:0.77229,A0A5P9NW17:0.19766)0.996:0.28677,(A0A650BXP4:0.60104,(A0A2K1JBR1:0.60232,A0A5P9NXH7:0.36370)0.590:0.07643)0.296:0.03214)0.891:0.08818,(A0A2R4A3T3:0.42092,(A0A650AKN0:1.48880,(A0A101LU67:0.66515,(A0A101LZF7:0.60695,(A0A1Y0AZM1:0.64635,A0A5N6L0M6:0.46775)0.274:0.15934)0.996:0.46127)0.891:0.23858)0.000:0.15450)0.487:0.08091)0.749:0.05393,(((A0A2Z6DTF1:0.38238,(A0A2P1G843:0.38424,A0A650BXI3:0.34885)0.995:0.27913)0.709:0.09124,(A0A2Z6DTF0:0.39381,A0A6B9P6C7:0.49285)0.772:0.06286)0.664:0.07518,A0A5P8DJT5:0.47929)0.999:0.21598)0.864:0.04957,(A0A2R4A3S5:0.46031,(A0A0H3WH84:0.49157,S5TEL9:0.55524)0.523:0.12316)0.000:0.09069)0.714:0.02012)0.936:0.07109)0.702:0.05908,(((((A0A076VKH0:0.50220,(S5TMH3:0.60437,A0A7U1BF81:0.38875)0.774:0.08214)0.889:0.08856,(A0A6G7IT78:0.55928,(Q7YAJ6:0.56867,H9LR21:0.53150)0.893:0.21563)0.708:0.09111)0.745:0.05947,(Q0QIN8:0.42908,(A0A5P8DJU3:0.65899,A0A0B5H4U9:0.44541)0.942:0.19204)0.786:0.06741)0.850:0.04873,A0A2R4A3K9:0.51136)0.633:0.03420,(A0A4Y5SG58:0.54699,(A0A386TYN6:0.66958,(A0A191MX90:0.36296,A0A650AG83:0.34746)0.723:0.06835)0.898:0.08683)0.970:0.11335)0.927:0.09385)0.817:0.05217,((A0A2Z6FB49:0.36690,(A0A5P9NW19:0.40349,A0A5P9NVY2:0.41387)0.925:0.12788)0.846:0.08591,(A0A386TYN1:0.47920,(A0A1Y9TMC0:0.56814,(Q7YAJ3:0.36381,G4Y9U4:0.38990)0.580:0.09046)0.722:0.13394)0.963:0.14927)0.997:0.18316)0.000:0.04089)0.911:0.05698,(((A0A2V0QZX9:0.37076,A0A484SXX1:0.41788)0.643:0.10066,((A0A366JHU5:0.31950,(A0A7X2J1C6:0.47582,(A0A1D9FPE6:0.21802,(A0A1Y4MVR1:0.35970,D6U1R4:0.50203)0.931:0.12033)0.003:0.01034)0.793:0.03582)0.416:0.03262,A0A1V0NYD9:0.38289)0.459:0.02570)0.929:0.07580,((A0A024P644:0.37401,A0A1L3MPH4:0.25471)1.000:0.33457,(A0A6B3VYH9:0.42576,((((A0A6I0EWC8:1.14610,A0A364K3J0:0.75897)0.128:0.07223,A0A1M4WYM5:0.56427)0.426:0.12278,A0A1L5FE94:0.72272)0.125:0.10852,(A0A235B8L5:0.37159,A0A4P6JYN4:0.35296)0.369:0.10308)0.822:0.11146)0.333:0.02663)0.763:0.03300)0.951:0.07388)0.943:0.06442)0.789:0.05797,(((A0A0S2LQ03:0.34677,(A0A0S2IE99:0.43562,A0A0S2IDR2:0.20964)0.627:0.08344)1.000:0.41606,(A0A2U8GJB6:0.29188,((Q9G8T4:0.49110,A0A0S2LQF1:0.54459)0.452:0.08852,A0A0S2IB93:0.33030)0.730:0.06999)0.455:0.08142)0.593:0.07228,((A0A6B9VX97:0.25379,A0A0S2LP76:0.91766)0.938:0.23867,A0A1C9JB25:0.36320)0.397:0.10621)1.000:0.21506)0.983:0.14412,((A0A2E2B1X3:0.46432,(A0A143ZQL3:0.45946,A0A0P9DAF4:0.43409)0.304:0.08556)0.988:0.20469,(((A0A661VA86:0.48493,(((A0A810E2Q2:0.24558,A0A0L6JKK9:0.56079)0.928:0.13049,((((A0A2S6FYN6:0.34401,(A0A243AZF9:0.32210,(A0A0X1TJ67:0.32165,K7HBV9:0.20302)0.934:0.09851)0.148:0.06123)0.937:0.13012,(A0A1C7FU43:0.62999,A0A5Q2NIE1:1.04788)0.885:0.25137)0.967:0.15100,A0A161R9D8:0.33214)0.812:0.05753,(A0A7I8ELD3:0.38356,G8TY46:0.34409)0.040:0.08012)0.942:0.11837)0.987:0.15412,((A0A3D1SNM6:0.49482,A0A358U876:0.28729)0.792:0.06660,A0A497IQR6:0.37436)0.127:0.04963)0.921:0.10267)0.676:0.02998,(A0A838DM31:0.70803,A0A0C2LEV9:0.30859)0.945:0.14894)0.798:0.04567,((A0A7C2IBZ3:0.29743,A0A6N8UST3:0.39916)0.896:0.07684,A0A840EDU5:0.51439)0.612:0.07069)0.500:0.05015)0.814:0.03793)0.883:0.08525,(A0A841BYQ0:0.45177,A0A7V4XB29:0.42016)0.983:0.23673)0.845:0.05364,(Q6YQN1:0.74066,(((A0A3A1YJN9:0.51078,(A0A3D0HM84:0.48966,A0A373M6I5:0.30028)0.996:0.33764)0.969:0.16473,((R9JIE9:0.62745,A0A140DR96:0.48618)0.350:0.11405,A0A140DX45:0.22991)0.979:0.14818)0.160:0.03886,((A0A2X2UQH2:0.45817,A0A1V5RLB7:0.37706)0.943:0.11155,((A0A1C5PJ26:0.41220,(((A0A1G9L9Z6:0.23089,A0A3N5WXH2:0.51831)0.909:0.10093,A0A221KCN3:0.39702)0.505:0.04199,(A0A4P8RIQ1:0.57697,(A0A7C0UCD9:0.52922,A0A432R5P2:0.41789)0.126:0.07148)0.189:0.05820)0.681:0.04319)0.833:0.05907,A0A0R1TTY4:0.39669)0.739:0.04331)0.801:0.04890)0.989:0.17866)0.774:0.08996)0.863:0.04176,(A0A7V5RKL0:0.44555,(A0A518BBG8:0.55440,(A0A1M6YDE7:0.46902,A0A644W8T8:0.49771)0.932:0.15120)0.334:0.08892)0.855:0.13000)0.859:0.05974,((A0A5R8K6X2:0.37972,A0A418Y4U6:0.45713)0.976:0.19591,(A0A2B2C619:0.47043,(((A0A0F6SE89:0.38155,A0A7W7W8G5:0.60924)0.274:0.07948,(((X5J9G3:0.39309,A0A4Y2MSU1:0.68527)0.876:0.12851,(A0A1V5VVB1:0.49287,((A0A3R7X7W1:0.76171,A0A0E3NZP2:0.26276)0.997:0.26164,T0XWA2:0.42576)0.777:0.10720)0.596:0.04781)0.380:0.07178,((G2JBB1:0.65596,(A0A202DTT3:0.38114,A0A521Q4A4:0.38164)0.537:0.06738)0.166:0.08711,(B4CYA7:0.59133,(A0A0T7A6F2:0.35314,A0A3B1D612:0.45688)0.916:0.11914)0.933:0.16620)0.858:0.04932)0.896:0.06819)0.879:0.05882,((A0A1W9HLA3:0.68435,((((A0A6C2URV9:0.45079,(A0A3N5P1C6:0.42745,A0A6J4X2G4:0.46111)0.904:0.12048)0.857:0.14687,S3H6B5:0.37900)0.175:0.04568,(A0A1N6IFC0:0.48879,(A0A5C9BD35:0.44141,A0A536B5H6:0.43731)0.474:0.06915)0.664:0.07700)0.148:0.04400,(((A0A455WAY0:0.61493,A0A5C6AFT8:0.44286)0.248:0.05598,A0A415XX02:0.58673)0.558:0.09004,A0A6I5ZWE8:0.31149)0.944:0.12039)0.334:0.12436)0.873:0.10851,(A0A180EQW9:0.51552,((A0A0F7LUJ3:0.32168,A0A0N5A0M7:0.40343)0.878:0.06026,((A0A0E0SRU6:0.49609,(A0A563DY49:0.38799,A0A0S4QU48:0.39120)0.834:0.06152)0.927:0.09768,(A0A1H7B258:0.63745,(A0A1A9I208:0.38805,A0A2I7SS58:0.64300)0.742:0.05875)0.787:0.07285)0.655:0.04700)0.985:0.17718)0.997:0.24746)0.965:0.10911)0.920:0.11781)0.580:0.03139)0.903:0.07477)0.797:0.02595)0.810:0.03514,(A0A7X7VHD1:0.40780,A0A1M7YGE5:0.56954)0.872:0.12485)0.968:0.07309,(((T1B4R9:0.73581,A0A4P5VTS5:0.70207)0.898:0.18635,(A0A2N2FAV0:0.67030,(A0A6H9L8W7:0.71363,(A0A3A4PYY0:0.81916,A0A1F6LLT4:0.83279)0.761:0.14073)0.327:0.08679)0.875:0.11385)0.834:0.07541,((((A0A2M7T6K2:0.48625,A0A662NGV8:0.68206)0.747:0.14146,(((W4M085:0.37443,(A0A800C7G2:0.52381,(A0A7Y0TQX7:0.32175,A0A2M7I4N7:0.58902)0.962:0.18163)0.872:0.12013)0.406:0.09362,A0A3M1TXM6:0.61172)0.720:0.10056,(A0A3M1PJT0:0.37972,A0A6P0HTX8:0.57492)0.985:0.23311)0.815:0.06583)0.929:0.10000,((((A0A523Q7B1:0.48768,A0A259QM72:0.57424)0.886:0.11921,((A0A1F4NN58:0.55356,(A0A437JM08:0.43941,(A0A0F4Q940:0.62367,Q7MC43:0.57501)0.597:0.11623)0.902:0.15971)0.941:0.14086,((J9DDV2:0.46788,(A0A7C5LSY4:0.42692,A0A7Z0KYW6:0.60807)0.467:0.10800)0.812:0.08659,A0A4R5U6I3:0.56862)0.935:0.12979)0.852:0.08449)0.910:0.07750,(A0A3N1AWY4:0.91944,(A0A7D8YFB4:0.76107,A0A847GZ08:0.45067)0.911:0.25370)0.811:0.08706)0.650:0.01156,(((((A0A7V6CRB5:0.24616,(A0A1C3FEY3:1.42735,(A0A1V4AX65:0.31290,A0A1W9TI89:0.51061)0.000:0.09028)0.935:0.24609)0.985:0.27927,A0A1W9LVU5:0.64571)0.968:0.21743,((A0A5C6B6Q1:0.54809,A0A6C2YSZ1:0.62978)0.992:0.36563,((A0A2H0XXD2:0.42404,(A0A3M2C0Y3:0.43134,A0A3A4K6G5:0.46771)0.570:0.07087)0.917:0.09421,((A0A0F4P871:0.47640,A0A0W8JB31:0.41362)1.000:0.50593,(((A0A8A9EJ17:0.68987,A0A1J5UCP8:0.50612)0.884:0.09397,((A0A1M4VB00:0.37142,A0A347UQ58:0.43986)0.982:0.21068,(A0A2G6KXE4:0.49872,A0A2P1PTT3:0.69223)0.869:0.10072)0.546:0.04895)0.446:0.04495,(A0A349HDB6:0.40887,A0A1J5IBV5:0.48820)0.868:0.09393)0.682:0.08037)0.947:0.14150)0.519:0.05528)0.716:0.07013)0.946:0.10796,((L0H2H6:0.58446,(A0A7C9MA84:0.37664,((S2KXS1:0.47759,A0A3C2EIW7:0.46389)0.598:0.10027,(A0A347V5W3:0.55297,(A0A6N0LQ16:0.48672,A0A3P5WQN8:0.47477)0.909:0.12745)0.394:0.04682)0.971:0.21114)0.938:0.31060)0.993:0.41664,A0A4Y9EV24:0.81079)0.907:0.18848)0.698:0.04735,((D4MA43:0.74933,(H8YVT4:1.23285,A0A7D5ND40:0.64505)0.294:0.10093)0.626:0.22604,(((A0A495L2B7:0.46832,A0A2A5J076:0.92018)0.452:0.08805,(A0A556Q831:0.81980,(A0A3P1WSN8:0.63304,A0A1H0ETJ9:0.78537)0.888:0.19234)0.513:0.13131)0.979:0.20149,((A0A836SGW4:0.89025,A0A7Y5LPY1:0.85718)0.885:0.20904,((A0A1E4BA48:0.67296,(G2DYQ3:0.90873,(V4JME3:0.51376,A0A1F9MKV5:0.77083)0.490:0.11077)0.539:0.11221)0.902:0.14451,(((A0A7V2E9D6:0.69990,A0A5C5XMY0:0.91735)0.852:0.14504,(A0A0M2UVS7:0.54508,A0A7V2UBX8:0.78461)0.977:0.28354)0.751:0.08599,((A0A263BRN9:0.59119,A0A380MXW7:0.83079)0.976:0.36877,(A0A1Q9YEJ2:1.08593,(A0A2A9FI44:1.13359,A0A1V1P661:1.00255)0.664:0.19346)0.863:0.17215)0.120:0.03964)0.825:0.08946)0.644:0.04784)0.720:0.08995)0.429:0.05889)0.854:0.05427)0.163:0.02661)0.948:0.09509)0.752:0.08250,(((A0A399ZDK3:0.57621,A0A3A0BUZ9:0.48605)0.977:0.20070,((A0A7C3YAF2:0.74633,A0A6L4ZSM2:0.47764)0.919:0.14755,(A0A7C4QK90:0.47601,A0A1J5A8Y9:0.51492)0.929:0.15492)0.063:0.03355)0.859:0.05248,(A7NMI6:0.44775,A0A495ZKL8:0.57636)0.867:0.14207)0.907:0.10060)0.610:0.10290)0.690:0.05036)0.305:0.02436,(((A0A7X7EKK8:0.74785,A0A7C3MTS0:0.42453)0.815:0.09504,((A0A7X6WKT5:0.55843,(A0A832A1S9:0.52638,A0A1V1P2H0:0.44006)0.996:0.32970)0.943:0.18489,(A0A7C4FU34:0.59053,A0A2V3JID7:0.45763)0.577:0.06037)0.778:0.11838)0.957:0.10178,((A0A4R2RBR5:0.52193,A0A402D623:0.63215)0.906:0.25155,A0A2L2MZH9:0.90323)0.735:0.05706)0.923:0.09209)0.078:0.03892,(A0A7C4BUZ7:0.83850,((A0A660UJU8:0.31798,(((A0A661Q1D6:0.57459,A0A399WKQ1:0.46001)0.973:0.20336,(A0A661T406:0.45026,F2NE25:0.46125)0.925:0.14112)0.674:0.09639,A0A0B0EEW2:0.69625)0.708:0.08871)0.063:0.07295,(A0A318CY37:0.98696,(A0A6N6SMM3:0.75237,((A0A3D8HC39:0.66115,((A0A7Y5ETP2:0.57572,A0A7Y5T2X2:0.77365)0.597:0.12392,A0A3C2ECF9:0.66247)0.227:0.10417)0.679:0.09021,(A0A7C8B792:0.39218,A0A1M3MAZ0:0.51621)0.698:0.13672)0.625:0.09611)0.625:0.07639)0.236:0.04824)0.927:0.12253)0.989:0.22288)0.909:0.08927,(((A0A849WI53:0.73055,A0A1V1PG08:0.87570)0.956:0.26134,(A0A1C6JC61:0.75950,(A0A6N2CXZ7:0.70081,A0A3M1TSJ9:0.54385)0.971:0.31586)0.809:0.09007)0.865:0.12206,(((A0A377J340:0.98212,(((A0A2L2WMZ8:1.30307,(R5CA81:1.15397,A0A139L2A4:0.57280)0.957:0.45105)0.567:0.17817,(((A0A4Q5H7J4:0.91663,A0A843IDA1:0.68913)0.954:0.22544,((A0A843E0T5:0.76423,(A0A174VX16:0.58863,(R6TX26:0.64995,(A0A255S4Z5:0.69611,A0A3N2KNP0:0.50641)0.993:0.41165)0.862:0.14928)0.997:0.39392)0.829:0.13678,((R6FCS8:0.51164,(A0A3N2MIV3:0.64625,A0A3C2D4P4:0.44019)0.293:0.07914)0.981:0.16186,(A0A3N2M4R4:0.61944,((A0A316S8B1:0.55055,(A0A327JIZ8:0.59577,A0A292RVG8:0.46549)0.925:0.14463)0.967:0.17432,((((A0A7U9R2D0:0.29392,(C4Z5S9:0.35709,A0A564WS48:0.28835)0.997:0.23572)0.649:0.06998,A0A843DRJ7:0.83560)0.915:0.11728,(A0A646HMT0:0.52199,A0A5J4QU36:0.33707)0.119:0.10188)0.683:0.06597,(A0A4Y8VQV8:0.47922,A0A379GAA3:0.29792)0.984:0.19152)0.937:0.11248)0.232:0.05735)0.845:0.04271)0.465:0.04177)0.742:0.02631)0.591:0.02148,((((A0A353Q5Z7:0.83826,A0A6G1V5R5:0.99012)0.865:0.14498,(A0A5P0X1W9:1.00541,A0A1H0GWY9:0.95395)0.976:0.41413)0.796:0.17088,(A0A828VQ65:0.42260,(A0A4V1K5Q3:0.42780,A0A3L8AE97:0.46570)0.999:0.44242)0.997:0.40856)0.853:0.11080,(((A0A0D8J2G4:0.95896,A0A350KNR2:0.79129)0.817:0.13038,(((A0A1Q6RLC1:0.47048,A0A2V2FIK6:0.67852)0.842:0.07884,((A0A1C5VTC4:0.48108,A0A2T3FAP7:0.62763)0.997:0.39328,((((A0A1H3XCK8:0.72234,(A0A357TPP5:0.43883,A0A3D2D981:0.70669)0.983:0.35415)1.000:0.46315,(((A0A416G2W1:0.46613,(A0A1Q6TIP7:0.43287,A0A6N2TW50:0.43987)0.947:0.15882)0.858:0.16379,((A0A417FQ91:0.50885,(A0A174B5V1:0.46690,A0A1C5N0E2:0.56582)0.440:0.09017)0.889:0.08652,(A0A4Q2K0U8:0.70149,(A0A6N7RM83:0.31213,A0A7Y0EPZ3:0.57191)0.820:0.05734)0.995:0.23594)0.907:0.09389)0.781:0.05770,(A0A2N5P3N6:0.54830,(A0A2V2FT00:0.48685,A0A2N5P2J8:0.65883)0.852:0.14016)0.872:0.09129)0.853:0.10163)0.987:0.26466,A0A349YIY8:0.50207)0.977:0.21033,A0A1F8V0T1:0.55793)0.935:0.10373)0.860:0.06613)0.867:0.05762,((A0A849CV99:0.54124,A0A3E4VCN9:0.62929)0.916:0.09337,((A0A174X0R2:0.37812,((A0A173S204:0.34471,(A0A417QWZ1:0.47122,(A0A2U1CFG3:0.53202,(A0A0B2K0S1:0.78758,A0A6N7WI78:0.78125)0.296:0.14135)0.910:0.18441)0.766:0.09032)0.909:0.09641,(A0A1G5CKX9:0.49129,A0A7U9XET2:0.23367)0.966:0.17009)0.950:0.12223)0.970:0.12171,((A0A0J6WUF3:0.66475,A0A1C6DC36:0.91854)0.957:0.26019,(A0A4P6YWX5:0.36002,A0A644XSY0:0.75142)0.300:0.09262)0.784:0.05760)0.525:0.04107)0.647:0.05652)0.644:0.06847)0.928:0.11354,(A0A3E2TNX4:0.64553,A0A356J2R7:1.13535)0.607:0.18703)0.990:0.19801)0.672:0.07727)0.953:0.10569)0.000:0.08180,((((A0A3E2VUI6:0.70377,(((W0FH76:0.70287,A0A413B1B6:0.93061)0.957:0.29076,((A0A143WWL9:0.54495,(A0A415JNB5:0.89258,A0A3C1LSM0:0.36097)0.726:0.05926)1.000:0.32744,(A0A6N7VZ19:0.65497,(A0A143XZK4:0.42634,R6GLF4:0.23658)0.897:0.16189)0.698:0.07850)0.764:0.07748)0.941:0.13116,(((R6H5G0:0.67825,A0A173XPJ6:0.73417)0.993:0.37298,(((A0A1Y4HUA0:0.65091,(A0A1Q6JPH1:0.57099,(R7N9L9:0.41839,(S4GT69:0.64619,A0A6N8JPU7:0.59256)0.832:0.17985)0.762:0.09420)0.094:0.06193)0.935:0.12287,(A0A7C6SL11:0.50384,(A0A1G5AFK2:0.76751,(A0A5K1IKD5:0.91841,A0A6N8JT70:0.63952)0.793:0.11949)0.850:0.09791)0.416:0.06214)0.884:0.09258,(A0A1I5INH2:0.66204,(A0A349YHH5:0.32577,(A0A2K4ZKP7:0.64987,(A0A1H0P842:0.50897,(A0A7X2P831:0.83635,A0A374ABV3:0.26684)0.900:0.17353)0.692:0.10816)0.958:0.16310)0.867:0.11907)0.869:0.09990)0.768:0.05362)0.934:0.10208,A0A4S2HCQ2:0.53287)0.989:0.17335)0.896:0.09027)0.859:0.07594,(((A0A4Z0D583:0.73809,A0A412HYM9:0.62832)0.798:0.22030,A0A7T4NJW2:0.58273)0.287:0.05614,R5FQK9:0.50040)0.887:0.08383)0.084:0.03880,((((A0A1Q6JRE1:0.50812,(A0A252F313:0.79510,A0A350TI56:0.37459)0.755:0.17877)0.580:0.07939,A0A317UBP4:0.71574)0.956:0.14325,A0A1M6M5A6:0.25477)0.786:0.10122,((R5M915:0.35336,(A0A1Q6LIW7:0.52737,(R6AZU9:0.43576,R7IJS1:0.58456)0.906:0.15394)0.299:0.08212)0.992:0.26040,A0A1F8ULK9:0.47710)0.905:0.10824)0.977:0.12486)0.998:0.23615,(((((A0A4P5WT07:0.65439,(A0A518BG02:0.79487,(A0A3D4S1U1:0.71394,A0A832UT94:0.59216)0.721:0.11421)0.862:0.16021)0.940:0.18910,(((A0A1T4YH99:0.60507,A0A7V7MJ21:0.55177)0.910:0.17476,(A0A0M1JIE7:0.63663,(A0A2K8U6G9:0.63888,A0A1E5A5F5:0.48279)0.552:0.10483)0.970:0.22944)0.483:0.09143,(A0A1V1NUW5:0.46747,(A0A7C6I7V7:0.43157,(A0A2M7KIV0:0.46140,A0A3C1PLS4:0.63732)0.500:0.11395)0.742:0.13305)0.848:0.11807)0.886:0.07958)0.873:0.06718,((A0A7C1CN17:0.34521,A0A2E7BSY0:0.88859)0.538:0.07447,(A0A1E4ZMZ6:0.68346,(A0A2M8B6J4:0.58048,A0A4P5VUP6:0.62813)0.581:0.19400)0.851:0.08434)0.236:0.06925)0.947:0.11013,(((A0A0P7YP32:0.46038,A0A2G2M771:0.51782)0.739:0.13948,(A0A7V2NRH4:0.49487,A0A2H0XWR5:0.57896)0.555:0.04434)0.284:0.07815,(A0A2M7KYT4:0.37200,(A0A353Z5U1:0.44863,(A0A850AS55:0.23217,A0A533QMH6:0.41663)0.939:0.16956)0.197:0.09706)0.855:0.12471)0.930:0.09216)0.945:0.07378,(((((A0A1G1A8C1:0.50674,A0A5C7WAV5:0.63204)0.705:0.14415,(((A0A1F4NQU8:0.41769,(A0A0G0RP17:0.36390,A0A1F7UTP9:0.27547)0.970:0.18725)0.948:0.15939,(A0A0G1XSN9:0.42345,A0A2M7V732:0.69146)0.633:0.07292)0.230:0.07973,(A0A1F6N9N1:0.58304,A0A1G2PQ69:0.65626)0.830:0.12184)0.222:0.06326)0.940:0.08859,((((((((A0A1G0M0Q9:0.50766,A0A2K8UDA3:0.35877)0.671:0.07565,(A0A832AT28:0.33573,D5CUB0:0.67357)0.881:0.08590)0.865:0.05797,A0A1J4RSW2:0.40018)0.709:0.06519,((A0A2S7DEN0:0.51863,A0A0S2JBX1:0.41608)0.953:0.17418,(((A0A379Y253:0.52324,V5F7P9:0.60123)0.938:0.18224,A0A2T5NN85:0.51114)0.930:0.14441,A0A2M7NCR6:0.45605)0.540:0.16566)0.948:0.13452)0.783:0.06916,((A0A4R2LJY5:0.48371,(A0A3D2NB66:0.80205,(A0A6S6SLT5:0.50766,((A0A3A5R5S2:0.63031,(A0A6A2JJ34:0.42323,A0A4Q0J2W6:0.59384)0.961:0.25047)0.872:0.12386,((A0A6F9ZLW4:0.46500,A0A373ZQH3:0.59029)0.856:0.08086,(A0A3D0WR64:0.39690,A0A1M7AJN1:0.92794)0.970:0.25017)0.374:0.06148)0.988:0.18042)0.875:0.11544)0.903:0.11019)0.873:0.08310,(A0A316B823:0.50200,(A0A2J0MNF4:0.17526,A0A0G0HL24:0.31103)0.923:0.11079)0.880:0.09204)0.989:0.15508)0.980:0.15501,(A0A258W1Y7:0.84253,A0A2E1Q549:0.51532)0.069:0.22003)0.549:0.06987,((A0A1J5EWP5:0.77236,(A0A1F6WMN9:0.78597,A0A4R3USP9:0.73359)0.079:0.09615)0.489:0.11195,A0A2G9ME30:0.55323)0.710:0.10405)0.880:0.06411,(A0A419G9J5:0.74131,(A0A2S3QSZ7:0.90683,A0A258VWL0:0.36187)0.791:0.20731)0.700:0.02616)0.898:0.06078)0.422:0.02920,(((A0A0G0JI56:0.33426,A0A1M3BT46:0.51587)0.703:0.09814,(A0A0G1JEJ2:0.53117,A0A1V5UWM7:0.43826)0.962:0.18722)0.862:0.09666,((((((A0A2K4ZGW4:0.41218,(A0A3R6MCN2:0.60915,A0A2X2UDJ1:0.55077)0.204:0.12130)0.951:0.19686,(A0A416S7S1:0.37141,(A0A1H3BKT0:0.53679,A0A2P8EI60:0.65344)0.957:0.17837)0.119:0.05268)0.996:0.25054,((((A0A1Q6LA92:0.44743,R5NE19:0.58866)0.989:0.21220,(A0A2N0KBY0:0.65794,(A0A851I2H5:0.63307,A0A349HRL3:0.37794)0.779:0.14936)0.865:0.13161)0.422:0.03798,(A0A2D3WVK8:0.49002,A0A1F4MH79:0.61118)0.969:0.20942)0.329:0.04922,A0A7G8X023:0.84599)0.850:0.07492)0.000:0.04504,(A0A1C5RVB7:0.52465,(A0A849KRM8:0.69899,B8GRZ4:0.50810)0.952:0.24920)0.876:0.15403)0.590:0.04092,(A0A847R651:0.38104,A0A285Q2K9:0.49482)0.975:0.20310)0.735:0.03355,(A0A4R3JVJ7:0.50047,((A0A645DCM4:0.52495,A0A7X8WEQ6:0.72396)0.778:0.10070,A0A1G0MAT7:0.51512)0.530:0.07574)0.984:0.18995)0.869:0.04164)0.961:0.08614)0.475:0.00577,A0A1S6HHE2:0.76976)0.512:0.06364)0.713:0.03573)0.980:0.12953)0.792:0.20727)0.963:0.24715,((((((A0A7T9QB54:0.71719,A0A7W4DRE0:0.69639)0.000:0.14251,(A0A2H0RRZ4:1.14424,(A0A399WZN8:1.01449,A0A7S6M164:0.69628)0.977:0.45718)0.522:0.02772)0.775:0.06371,((A0A2D8YC27:0.89362,A0A285Q094:0.48322)0.959:0.26837,((((A0A6P1R5G6:0.42998,A0A2E2M3V7:0.59901)0.909:0.13990,(N0B891:0.47076,(A0A2E2QBD5:0.42195,A0A3B9ESB6:0.56140)0.642:0.14051)0.867:0.09101)0.969:0.12756,(((A0A4Q8T870:0.53502,A0A5C7RFN9:0.45252)0.564:0.08738,(A0A2D6EP68:0.57782,A0A4R7NSH1:0.54710)0.885:0.12802)0.861:0.08558,(A0A1P8QLC9:0.60312,((A0A2S3W493:0.51261,A0A832DHV7:0.64057)0.648:0.13716,(A0A850GZI3:0.82474,(A0A4D8R3J3:0.57576,A0A2R4XLR1:0.44598)0.319:0.05857)0.808:0.05689)0.297:0.03157)0.857:0.05324)0.913:0.07391)0.679:0.02098,((((A0A1Y3CSW2:0.52486,A0A2N5LNU8:0.82564)0.884:0.22190,A0A009F607:0.54063)0.232:0.12682,A0A2T1IX34:0.54403)0.995:0.30864,A0A3T0E6K2:0.84309)0.499:0.07495)0.807:0.06027)0.998:0.32492)0.872:0.11711,(((A0A1M5WSZ4:0.58906,A0A4U1G5D3:0.46304)0.967:0.22940,(A0A7G8BES8:0.54668,A0A7S7NXY0:0.61886)0.926:0.13592)0.538:0.03574,(A0A1L9GUY0:0.73667,A0A1G1L390:0.67702)0.218:0.05356)0.977:0.18308)0.822:0.08692,(A0A1G1XZW3:1.01097,(A0A0G0RRT4:0.86162,(R6IRE0:0.83088,(((A0A3M2WDG4:0.62986,(A0A1L6L488:0.52208,A0A3A0F1P1:0.35963)0.734:0.15286)0.679:0.11035,(((A0A7Z1V2N1:0.57519,(A0A1W2EM29:0.55164,A0A353Z7E2:0.56130)0.983:0.21311)0.901:0.09589,A0A651FN34:0.57042)0.889:0.10080,(A0A6N6VJH7:0.41449,(A0A6M1LFS3:0.67518,(A0A430EM92:0.54950,A0A318THF5:0.51510)0.083:0.04308)0.642:0.10299)0.697:0.05486)0.857:0.05869)0.831:0.06991,((A0A1F3VFN2:0.47058,A0A2E7GHZ1:0.53157)0.917:0.11667,((A0A2S4LS20:0.50729,Q2YAI4:0.41960)0.903:0.13580,(A0A1I6UKK0:0.75869,(A0A839PH79:0.40694,A0A245ZMC4:0.53205)0.991:0.33222)0.889:0.14501)0.903:0.08775)0.000:0.02342)0.803:0.24165)0.998:0.38928)0.541:0.09079)0.803:0.06550)0.923:0.15670,I4B0C5:1.31503)0.608:0.11482)0.608:0.08000,((((((A0A2E3MUH7:0.90298,A0A847LMV1:1.20434)0.944:0.34899,(A0A4Q5L260:0.87899,(A0A1G0WCM3:0.66757,((((((A0A0E2ZBV2:0.81850,A0A5P9CN51:0.59135)0.724:0.15842,(A0A6P0VQH0:0.33840,A0A2D7EF92:0.45978)0.000:0.05013)0.184:0.10919,(A0A1W9L669:0.50149,A0A496VHJ3:0.56418)0.958:0.18428)0.916:0.09795,((A0A7W2N974:0.37405,(A0A543KIP3:0.71495,M9R7V8:0.47604)0.924:0.19535)0.874:0.15043,(A0A2P5MUE0:0.48166,(A0A4U2CMX2:0.95350,(D4ZMB3:0.42495,(A0A4R8JK57:0.33343,A0A4D0QSD3:0.54084)0.558:0.12705)0.914:0.13510)0.938:0.15546)0.390:0.08097)0.870:0.07938)0.722:0.06041,(A0A6F8T865:1.18767,(K2EHQ9:0.97548,(A0A1G0WJ28:0.55668,A0A7C7XTM8:0.65978)0.986:0.40477)0.363:0.12801)0.841:0.12567)0.805:0.06308,A0A0G1K4C3:0.68301)0.381:0.06613)0.871:0.19648)0.986:0.28956)0.264:0.13491,(((((A0A7S7SM13:0.45900,A0A1M6GSR7:0.69850)0.852:0.11751,(A0A0C1ZCE0:0.50464,A0A7Y4SKK8:0.69264)0.992:0.33878)0.535:0.10549,((A0A0T5VQ03:0.64444,(((((A0A388TGR1:0.36393,A0A374C6A2:0.75401)0.968:0.18813,A0A3A9VJR1:0.49303)0.760:0.09527,(A0A521FA38:0.45569,A0A1N7DYP9:0.47026)0.459:0.08795)0.616:0.07437,(A0A844IJN6:0.41829,A0A7I0IB25:0.53713)0.810:0.11139)0.816:0.06116,(A0A132GWT1:0.71282,A0A202DD68:0.59484)0.268:0.12379)0.562:0.11382)0.921:0.14394,(A0A0F6H7T3:0.82600,A0A2S6H8F4:0.53673)0.928:0.15105)0.416:0.05118)1.000:0.84462,((A0A077NN59:0.55248,((A0A1C4AKF2:0.51166,A0A291GK47:0.52399)0.887:0.13488,(A0A2E7KH96:0.42469,A0A6L7JLF2:0.54118)0.877:0.11043)0.000:0.11406)0.903:0.16509,((A0A2G6IS22:0.53921,A0A431Q7D4:0.37008)0.945:0.18987,(A0A4U0RT17:0.69726,A0A349QJX5:0.42316)0.863:0.18647)0.936:0.24683)1.000:0.68034)0.773:0.13198,((((A0A1S9BTH9:0.91703,A0A1I0EQ72:0.71392)0.906:0.23692,((A0A7C6D587:0.57419,A0A6J4I9T2:1.02276)0.993:0.45709,((((A0A126QVM8:0.78126,A0A3G3IGV0:0.25514)0.975:0.25442,(R6CQT6:0.51559,(A0A3D2KDG8:0.31094,A0A2K4ZBE0:0.41094)0.979:0.23716)0.963:0.17790)0.166:0.05061,A0A3C1H2I1:0.60573)0.507:0.07382,A0A416MDJ1:0.57894)0.797:0.08046)0.658:0.18895)0.977:0.31459,(C9L7Q1:0.53100,A0A352HSR6:0.62573)1.000:1.04044)0.385:0.06346,((A0A2M6WRI5:1.07125,(A0A7V3CEK2:0.59978,A0A7V7WLF0:0.68823)0.974:0.32103)0.106:0.11702,((A0A538K9G0:0.93085,((A0A6N7ZVH5:1.04782,A0A1G0XTM2:0.64808)0.473:0.10857,A0A0W0YKF5:0.84987)0.766:0.08362)0.597:0.13841,((A0A2E9Z8E1:0.83092,A0A2E0GV82:0.61401)0.865:0.17665,A0A2G2A0V6:0.72115)0.000:0.08358)1.000:0.50454)0.727:0.13976)0.877:0.13544)0.402:0.07457)0.724:0.03436,(A0A2E9SZ56:1.19775,(A0A2P6N855:0.82827,(((A0A2D4BL10:0.57404,A0A067C9D2:0.55951)0.996:0.51683,(A0A818HFK4:0.59318,((A0A5N5WSQ2:0.54021,A0A2V1C7F9:0.76442)0.595:0.15998,A0A6M5Z3R5:1.18071)0.903:0.29213)0.121:0.12827)0.905:0.23054,A0A139B0A6:0.60507)0.908:0.38387)0.999:1.15872)0.942:0.49119)0.784:0.05163,((((((A0A068YH80:0.84583,A0A4E0S0J8:0.49543)0.999:0.76626,((((((A0A0M3KB70:0.43880,F1KU50:0.47801)0.998:0.49835,(((A0A811JSL9:1.28731,A0A4U5MQE4:0.89393)0.604:0.25834,(A0A7E4ZYH4:0.79786,A0A6G0UQK9:0.47344)0.970:0.38936)0.066:0.13257,A0A183BHQ7:0.94677)0.887:0.16848)0.793:0.12862,A0A7J7IUN8:1.13016)0.021:0.10313,((((A0A834R6R0:0.52968,A0A6P6XZN2:0.52403)1.000:0.72342,(((A0A7R9RH75:0.75314,A0A6J1RRM0:0.86206)0.000:0.16300,((((A0A6L2PQ53:0.59801,(A0A1B6M5A4:0.61620,A0A2H8TF82:1.04367)0.739:0.13236)0.578:0.10174,E0VPI4:1.02071)0.000:0.15400,(A0A6J0BAA1:0.58011,(A0A834Y692:0.73293,((A0A6P3Y6L7:0.57563,E9JBZ2:0.49268)0.989:0.30457,(A0A6J3KU98:0.48166,A0A834J8V0:0.49153)0.856:0.15666)0.767:0.11460)0.190:0.06930)1.000:0.37801)0.467:0.04302,(A0A0P6A2E9:0.72704,(((A0A1B1SN26:0.65396,A0A2P2IAG7:0.80278)0.877:0.19040,A0A6P7UGT1:1.04815)0.109:0.08290,(A0A482X284:0.71270,A0A1B6DPG7:0.80134)0.733:0.22000)0.510:0.06361)0.820:0.15326)0.840:0.08008)0.894:0.11737,A0A0A9X3C8:1.12089)0.598:0.08005)0.861:0.10713,((A0A813UEL6:1.19293,A0A085LWK5:1.10102)0.574:0.19260,(T1J3Z4:0.95652,(A5HE93:0.64467,A0A1D1W0H3:1.30355)0.669:0.14141)0.791:0.08662)0.865:0.10475)0.463:0.08871,(((A0A2R5GGI6:0.78230,A0A1J5X6Y5:1.11778)0.784:0.27529,((((A0A059F598:0.56568,(A0A1Y1S577:0.64086,A0A1W0E3Z1:0.92360)0.926:0.33223)0.000:0.13083,((A0A177EG38:0.83219,A0A177EJD2:0.43863)1.000:0.76816,((A0A4Q9KY89:0.43490,(L7JT26:0.59865,A0A0B2UKH5:0.58366)0.876:0.13672)0.916:0.16674,(T0L829:0.61065,(A0A0F9W9V6:0.34476,R0KPC8:0.49114)0.269:0.09983)0.934:0.15148)0.834:0.08687)0.618:0.09711)0.949:0.19403,(A0A1L0AZG6:1.12416,((A0A1B2JA37:0.79644,(A0A376B1U5:0.59309,(((((G0WGY9:0.33275,I2H487:0.57145)0.650:0.12261,G8JM93:0.47475)0.825:0.08289,(A0A1G4MAW1:0.40652,(A0A0C7MW14:0.55099,A0A0P1KRT3:0.45026)0.951:0.15401)0.886:0.09443)0.722:0.03839,A0A0W0CC56:0.57358)0.955:0.14546,A0A1G4JB89:0.69111)0.238:0.08240)0.936:0.14736)0.494:0.08426,((A0A1E4TXF2:0.47060,((W1Q9Z6:0.67935,(A0A7D9GZC3:0.56814,A0A1Q2YJ99:0.59965)0.808:0.17954)0.982:0.30993,((((G8YI25:0.68528,Q6BUF6:0.34881)0.948:0.13588,(A0A0L0NVK6:0.51408,(A0A1L0BF94:0.47315,A0A512UB85:0.35686)0.044:0.12780)0.936:0.13974)0.841:0.06392,(A0A421J5T9:0.64736,(A5DTL1:0.59944,C5MCQ7:0.28523)0.995:0.37154)0.396:0.10146)0.000:0.12561,A0A642UKI5:1.03768)0.918:0.23874)0.408:0.07956)0.614:0.09884,(K0KF00:0.53924,(A0A0H5BYC7:0.43212,A0A061BK43:0.35564)0.896:0.13633)0.974:0.21273)0.800:0.10650)0.781:0.09421)0.999:0.41536)0.650:0.13254,((A0A1N6LXK0:0.48495,((A0A3B0NED1:0.23660,A0A2T7I0S8:0.21875)0.998:0.36596,(A0A2H6KHH2:0.65035,L1LBS7:0.45410)0.843:0.12489)0.000:0.22942)1.000:0.49275,(A0DPN6:0.52117,(O00939:0.58129,(A0A0V0R041:0.40901,O77448:0.27341)0.615:0.13429)0.916:0.19603)1.000:0.38092)0.844:0.14983)0.547:0.09268)0.377:0.08509,((((A8B4E2:0.66678,A0A4Z1TBT4:0.54703)0.999:1.02348,A0A152AA99:0.82534)0.000:0.21139,(A0A7J7IE94:1.05842,(A0A5J4YN28:1.02741,(A0A2V3IP09:0.78540,(M2XLQ7:0.46412,A0A7S3A3V2:0.98503)0.203:0.05479)0.167:0.07060)0.874:0.12579)0.927:0.16154)0.891:0.11977,(((A0A662YC62:0.49000,(T0QQ33:0.49895,A0A6G0WJV8:0.44194)0.896:0.12488)0.998:0.27037,(((A4RWB2:0.71773,A0A061SFG8:0.65859)0.870:0.15511,(A0A0C5BXA6:0.67593,(A0A5B8MNC7:0.73303,(A0A6J0K394:0.50628,(D5MD95:0.33035,A0A0A9BFL4:0.49102)0.793:0.09528)0.960:0.17048)0.390:0.08278)0.674:0.03106)0.927:0.09971,(A0A075B102:0.69124,A0A2P6P0L2:0.53854)0.000:0.11036)0.938:0.12055)0.000:0.06818,((((((A0A7G6KMQ8:0.54444,J7SF03:0.66989)0.214:0.09345,A0A2C9LAV3:0.68494)0.760:0.04383,(A0A7D9HHD0:0.76939,(A0A7G6KMQ5:0.67166,(((A0A0P7V299:0.21648,(A0A4W4GFP9:0.26512,A0A669BWS8:0.29047)0.445:0.03321)1.000:0.49438,(A0A674IV00:0.27696,(G1RJV5:0.15817,A0A7F8K3T8:0.19902)0.988:0.17184)0.731:0.08313)0.999:0.28865,((A0A6P5ARC4:0.32462,A0A0D2UNU5:0.58701)0.904:0.11358,(A0A2G8LKF6:0.69328,(A0A812BHG3:0.58323,A0A7G6KMQ9:0.34684)0.953:0.18926)0.543:0.06195)0.641:0.02128)0.949:0.11611)0.330:0.00922)0.772:0.07743)0.799:0.03954,L1JKP9:0.78535)0.600:0.03320,((A0A369SLN0:0.65678,(A0A7M6DQ77:0.50340,J7S167:0.48053)1.000:0.42798)0.783:0.07278,((A0A1X7V5M0:0.74306,(A0A7S3LIC1:0.54947,A0A3P3YKG3:0.65804)0.000:0.12891)0.762:0.11356,(A0A7S4ERK4:0.86204,((A0A7S2KCK6:0.42448,K0STL0:0.47793)0.858:0.11395,(A0A1Z5KLG2:0.56877,A0A7S4AJ37:0.78569)0.957:0.25012)0.960:0.19163)0.677:0.06209)0.872:0.08009)0.846:0.05896)0.938:0.07343,(((((((A0A1U7LWB7:0.61914,(A0A7C8K1L3:0.46659,(K1WI00:0.33277,(((A0A0F8CX36:0.35426,(F7VLQ9:0.39733,S3BWX7:0.27477)0.962:0.11135)0.154:0.01017,A0A2H4S7L6:0.30652)0.921:0.07970,A0A420HCP7:0.39513)0.644:0.06549)0.630:0.06679)0.811:0.03709)0.691:0.02858,((A0A3M0WA96:0.40035,(D4B1T6:0.36178,(A0A167WDB5:0.41780,A0A2B7Z3V0:0.20652)0.579:0.08673)0.047:0.07975)0.620:0.06235,(A0A4Z1PCT2:0.33401,A0A6H0XZ90:0.54322)0.929:0.11359)0.882:0.09029)0.933:0.09470,A0A0W4ZUK2:0.39974)0.955:0.09578,(A8PXX5:0.83292,(((G7DX60:0.65160,L8GIB5:0.66334)0.342:0.11635,A0A4T0FTY4:0.38929)0.884:0.12569,((((A0A0P1BIP6:0.39908,(A0A4S4L3I3:0.20004,A0A166L9R7:0.24667)0.904:0.09011)0.000:0.06886,(R9PDU8:0.42086,(A0A507BKF3:0.50705,A0A238FDL9:0.33760)0.924:0.10935)0.785:0.02946)0.788:0.03244,A0A2S4WE31:0.47281)0.850:0.03809,(A0A261Y594:0.44543,(A0A433QVH5:0.32375,A0A2Z6RFJ2:0.50307)0.215:0.08060)0.435:0.08706)0.803:0.03600)0.505:0.03169)0.154:0.03899)0.437:0.06994,(A0A1B9FUA0:0.55062,A0A2H9TM71:0.63600)0.935:0.16609)0.658:0.04388,((((A0A1D8NE89:0.79752,(A0A5E8B021:0.46234,A0A0J9X2K1:0.36697)0.738:0.16931)0.873:0.13887,(A0A060T762:0.74107,A0A167CQ75:0.76552)0.806:0.12182)0.978:0.21096,A0A163JJV9:0.83163)0.061:0.03833,((A0A367JII0:0.34939,A0A1C7NQG5:0.57309)0.983:0.23813,(O13339:0.50493,T0T6J8:0.43748)0.994:0.26739)0.927:0.10905)0.684:0.06632)0.786:0.04774,(A0A2U1J8T9:0.36491,A0A2T9YQ49:0.43218)1.000:0.36821)0.861:0.06173)0.393:0.03753)0.776:0.09402)0.623:0.08496)0.777:0.11366)0.887:0.10743)0.124:0.06417,(A0A2T0FHL3:1.00650,(A0A1X0P3A6:1.46709,G1BJ46:0.85222)0.673:0.34189)0.857:0.13176)0.000:0.15386,(A0A7I4XW70:1.05659,O45321:1.21670)0.962:0.51303)0.857:0.14340)0.767:0.27289,(A0A6P7VJA7:1.20631,(A0A817UER1:0.57239,((A0A1Y1M9R5:0.50205,(A0A069DWI3:0.63318,A0A0A9WSN7:0.66301)0.649:0.14130)0.884:0.11574,((A0A1W7R692:0.62452,((J9HS23:0.77066,(A0A7M3PTT3:0.56700,Q7RTK8:0.45858)0.491:0.14510)0.000:0.08642,(A0A7M7PTB2:0.48880,(A0A817QV86:0.47669,(A0A821FMS9:0.59343,A0A815E2G7:0.39985)0.920:0.15865)0.993:0.25818)0.945:0.16081)0.679:0.02675)0.629:0.06808,A0A5S6R5A3:0.62895)0.422:0.05171)0.940:0.20701)0.949:0.33391)0.993:0.48962)0.947:0.27844,A0A3L7ZIK9:1.10388)0.418:0.15929,(((A0A212IVW5:0.67656,(((((A0A6I2MPB4:0.42050,A0A0B7H9V1:0.55717)0.930:0.14050,((((A0A6G1TYW2:0.64242,(A0A496BQ42:0.51967,C6BRH7:0.60611)0.204:0.04080)0.097:0.07464,(B8DM78:0.52338,A0A0K3A446:0.69180)0.680:0.19252)0.372:0.09957,(K9VAJ6:0.41811,A0A0C5SCQ1:0.69746)0.933:0.18771)0.433:0.06219,A0A3C1Y8M0:0.80350)0.785:0.03734)0.868:0.06769,D2QG84:0.65766)0.850:0.06250,(((A0A1X6WM98:0.55475,(A0A842CHN6:0.61427,A0A2N8Q0I5:0.44983)0.000:0.12922)0.872:0.12890,(A0A177SC86:0.51586,((A0A7S7EU63:0.71068,A0A2I0QRF7:0.48699)0.586:0.08435,A0A4R4E7Z1:0.42365)0.713:0.09622)0.623:0.08774)0.392:0.06495,((A0A6N7E1Q8:0.73210,A0A1N6FP59:0.50614)0.809:0.17291,(((((A0A251Z4Q5:0.46755,A0A3E0VJK2:0.46072)0.958:0.20400,(((A0A5A7MHU1:0.43817,A0A4R8UER9:0.78115)0.172:0.14034,((A0A7Y9SFI2:0.51743,A0A1D7W544:0.77733)0.589:0.11743,A0A251Y2I1:0.77578)0.876:0.11305)0.820:0.07866,A0A3N2CZZ0:0.83620)0.484:0.10111)0.415:0.05914,(((A0A4Q8Y3A7:0.46834,A0A0H5PX45:0.55564)0.164:0.10287,A0A7W7K5D2:0.80340)0.630:0.01938,A0A386TDP8:0.51256)0.979:0.14146)0.627:0.06661,(I2DSW1:0.67473,(A0A2T5E9K4:0.53657,A0A3M5ISE5:0.48870)0.000:0.09260)0.917:0.10592)0.973:0.12609,(((A0A7C9H584:0.65407,A0A7C5NAH7:0.45497)0.922:0.15310,((A0A800JNY0:0.47611,(R4YT38:0.60829,A0A7W2N9C4:0.53007)0.540:0.08953)0.948:0.15811,A0A1G3TCY5:0.37451)0.941:0.13235)0.597:0.06598,((A0A6N7S4U0:0.61890,A0A4R1K2V9:0.51404)0.780:0.04633,A0A0F9SWZ5:0.49423)0.581:0.06841)0.514:0.03167)0.882:0.06514)0.926:0.07872)0.927:0.07133)0.304:0.03221,(A0A5B0BUU0:0.42510,A0A150WM62:0.78890)0.885:0.16371)0.615:0.10762)0.587:0.09134,(U2RIY4:0.97572,((A0A845FBP8:0.42144,(A0A162KAR0:0.40152,A0A0Q3WZE0:0.38609)0.737:0.09280)0.979:0.24644,((((A0A243DXH2:0.72737,(A0A1G6T626:0.68833,A0A081QRP7:0.46285)0.716:0.09424)0.878:0.14422,((A0A0R2D3F3:0.66797,A0A176TM01:0.55373)0.884:0.10572,(C0XH00:0.61532,A0A2N9K807:0.70718)0.689:0.16048)0.988:0.27122)0.940:0.16495,(A0A1B3SM08:1.08184,A0A2H1IGT9:1.04601)0.847:0.19547)0.771:0.07524,((A0A5C5ZWX7:1.35773,(D0CBF3:1.07184,(((A0A316SF13:0.53073,(((W2VNB1:0.55834,(A0A1G4WWH1:0.37660,A0A3D4QXK3:0.57293)0.986:0.30964)0.282:0.07255,(A0A7X2N0P3:0.47007,A0A1L3MVF7:0.53319)0.821:0.14156)0.143:0.07991,A0A1V5GYZ1:1.27281)0.241:0.09399)0.970:0.33871,(A0A2N6PNT7:0.65863,A0A7U0YHR7:0.47837)0.968:0.36487)0.854:0.18604,A0A1E5TS11:0.74541)0.946:0.23546)0.873:0.12122)0.719:0.04625,(((((((A0A7V7Z7A7:0.62753,(A0A1F0PIJ2:0.86806,A0A7W8DKN4:0.75633)0.768:0.24162)0.698:0.13678,A0A318IHJ9:0.44278)0.829:0.18151,(A0A2T3CI26:0.69731,((A0A2S9ELM5:0.71324,(A0A380YKK6:0.74072,(A0A2S9MI20:0.69702,(A0A1H8USG1:0.53482,A0A840LKT6:0.68522)0.959:0.19884)0.084:0.02585)0.418:0.02472)0.807:0.07298,((A0A5N7TS72:0.69702,A0A2D5C400:0.61656)0.727:0.15234,A0A5M3Q3U2:0.73307)0.000:0.10130)0.000:0.04153)0.774:0.05190)0.890:0.06303,((((A0A5S3UY71:0.65953,A0A7I0IXZ9:0.84238)0.298:0.12586,(A0A4V1CXM7:0.66946,(A0A5S3YC56:0.55084,A0A198GY05:0.56467)0.904:0.15005)0.415:0.05970)0.774:0.04431,(A0A2D7EBS0:0.62020,((A0A7G6UQ64:0.51996,((A0A514EFN2:0.55705,A0A853JAP8:0.57145)0.591:0.14220,A0A7W9V405:0.58360)0.904:0.15735)0.886:0.12095,A0A1H8UY93:0.71901)0.745:0.10813)0.904:0.11849)0.890:0.09134,(A0A437QBS9:0.73843,A0A1P8MLY5:0.55817)0.757:0.11836)0.760:0.03063)0.621:0.05227,(((A0A3S5GFV6:1.10218,((A0A7W9R7V2:0.65225,(A0A7Z0MCQ3:0.56643,(A0A7H0LG20:0.60608,A0A4Q6CC69:0.68460)0.055:0.08165)0.935:0.18454)0.888:0.19562,(A0A844WFR5:0.68915,A0A0T7GAG9:1.01240)0.838:0.19279)0.933:0.23940)0.626:0.17801,((A0A0F9LXC1:0.72817,A0A4U0R397:0.49850)0.956:0.25982,(A6WYG7:0.57741,(A0A2K9JKS8:0.57678,A0A7G2TIX4:0.74522)0.264:0.07978)0.694:0.15125)0.989:0.29080)0.917:0.14723,(((A0A5S3X8W1:0.99188,A0A378R0U2:0.60280)0.546:0.14608,(A0A4Y8SJM7:0.75891,(A0A522VC01:0.53333,(A0A198FPJ6:0.66027,A0A0C5WR34:0.67657)0.353:0.10479)0.102:0.10781)0.946:0.15199)0.864:0.06088,((((A0A7X3NJ76:0.64133,(A0A2N7M0C6:0.58372,A0A0V9JX92:0.64235)0.775:0.17793)0.872:0.13010,A0A1T1GWD5:0.60852)0.608:0.03979,((A0A2N9XBY9:0.51638,(A0A2E2UDY6:0.66419,(F0EQ61:0.66754,A0A328C2C3:0.79071)0.897:0.20362)0.852:0.13331)0.977:0.23897,(((A0A2E3U3E4:0.59924,(A0A2W7FG25:0.60492,A0A2R7MJ05:0.53659)0.828:0.09945)0.882:0.16012,G2E3Z5:0.67042)0.816:0.11406,(((A0A7U1CW38:0.68738,A0A3D8M4F1:1.04858)0.517:0.11840,(A0A7G2JF79:0.57783,(I3I9S2:0.70343,(A0A1T4SE45:0.74348,A0A3D3KEW8:0.61453)0.832:0.22333)0.136:0.11690)0.837:0.05884)0.849:0.08256,B2VC04:0.87604)0.821:0.13775)0.581:0.04637)0.637:0.02593)0.970:0.14010,((A0A2S1JUC8:0.47265,A0A2P2E5C0:0.59344)0.964:0.20528,((A0A5C8T8G3:0.71035,(A0A2L1CWJ6:0.59859,(A0A7W4I7A7:0.52682,A0A2G1LQT6:0.50547)0.817:0.10041)0.750:0.07390)0.837:0.11277,((A0A3N6N2G1:0.65671,A0A2L1S4K9:0.77275)0.430:0.07495,A0A2T5XK54:0.58910)0.789:0.09719)0.752:0.03431)0.938:0.10235)0.954:0.10631)0.489:0.04490)0.917:0.07431)0.885:0.06790,(A0A073KTZ1:0.47844,A0A853N3I8:0.62248)0.996:0.37533)0.727:0.07740,(A0A2E8G185:1.29103,((((A0A3L7AAC5:0.71192,A0A399NIH2:0.76953)0.962:0.31223,((A0A641APH7:0.79076,(A0A399NUL5:0.49379,A0A1H1PVS7:0.49202)0.986:0.31936)0.793:0.15182,(A0A846SIR6:0.59270,(A0A410YHI6:0.65447,A0A6N7W9J4:0.48422)0.995:0.48787)0.638:0.16462)0.771:0.15575)0.900:0.20127,(A0A0X3TGP6:0.64869,A0A4R6YII9:0.71283)0.278:0.09862)0.912:0.16572,((A0A0M7BDG1:0.57474,(A0A2W4C0S1:0.64485,A0A842HV12:0.50474)0.943:0.18265)0.833:0.17279,(((A0A2T5XW16:0.53845,A0A0N0ZUW6:0.41576)0.964:0.18330,(A0A7U5VUK1:0.61491,(A0A495US24:0.49518,A0A4V3GQH2:0.60506)0.151:0.11494)0.430:0.06118)0.732:0.05892,(((A0A0S2KLN0:0.79149,(A0A7K0ATT5:0.58206,S0F813:0.41308)0.854:0.13409)0.965:0.16925,((A0A2T5RLR9:0.48243,A0A484GEF6:0.79126)0.067:0.03902,A0A2E2K540:0.47716)0.626:0.04035)0.937:0.09241,((A0A4Y8BNQ8:0.47716,A0A482ZLM6:0.46180)0.900:0.11671,(A0A5C7AVY5:0.37353,A0A519PQX9:0.50513)0.935:0.12338)0.590:0.04067)0.809:0.05432)0.472:0.04607)0.248:0.06731)0.886:0.11217)0.286:0.09663)0.996:0.21755)0.825:0.11783)0.938:0.13131)0.973:0.23547)0.871:0.17182)0.941:0.18611,(A0A221SZS0:0.82770,(A0A6N6KHG5:0.63882,A0A0G1VV23:0.59763)1.000:0.66141)0.176:0.13670)0.900:0.12770)0.122:0.05528,(((A0A0N0UYT8:0.37919,A1ZWF2:0.57483)0.984:0.26601,((A0A0G0UV61:0.69799,R7J7I8:0.45570)0.761:0.14365,(((((K4IQW5:0.38224,A0A495PTG5:0.49292)0.965:0.17448,(X5DKG6:0.53038,A0A0F5J330:0.52518)0.310:0.04289)0.940:0.08833,(A0A3D4XZ88:0.42869,((A0A7U3ZLZ8:0.46564,(A0A244D7H2:0.58970,(A0A1G6L7V6:0.40249,((A0A085ZT93:0.40274,(A0A1I1VXD0:0.32959,A0A3N7EIA8:0.27019)0.978:0.19063)0.529:0.11220,A0A2U0HT30:0.44495)0.000:0.06062)0.837:0.05961)0.310:0.09984)0.815:0.11500,A0A368JPF9:0.42676)0.850:0.08819)0.896:0.10135)0.442:0.03306,(((A0A5M8QZA1:0.45620,A0A7M3MTE3:0.50047)0.819:0.13958,(A0A2E1Z2D3:0.51301,(A0A7H1NRG3:0.52884,A0A4U1K280:0.36202)0.920:0.16269)0.998:0.30190)0.888:0.11672,(((A0A0A1F5B6:0.51302,((((A0A6N6M468:0.60624,L9M893:0.39690)0.315:0.07751,A0A4U1YLE3:0.52718)0.455:0.05612,A0A2W5MS80:0.80010)0.364:0.07867,A0A855FVE0:0.52915)0.408:0.06585)0.435:0.07586,((((A0A519UAZ6:0.60616,(A0A7L9BPI3:0.52614,A0A2N8M1Q7:0.60247)0.625:0.11084)0.742:0.10891,(A0A4V1N0T0:0.50978,A0A7X1E7D6:0.41861)0.000:0.09036)0.103:0.06054,A0A4V0NE73:0.57385)0.964:0.17371,((L9M919:0.60334,(N9AMU8:0.48482,A0A662ZED9:0.62402)0.375:0.11028)0.893:0.09996,((A0A5C6EYX1:0.57805,(A0A2A4NLW2:0.59262,(A0A2T3GU35:0.47570,A0A366XE81:0.37096)0.000:0.12175)0.981:0.19765)0.885:0.10820,((A0A519J0P8:0.55832,(A0A2E3UIW3:0.58829,A0A258SCF7:0.48104)0.913:0.18716)0.897:0.14393,A0A431NLM2:0.53337)0.945:0.14512)0.602:0.03843)0.655:0.06723)0.806:0.06863)0.786:0.04830,(((A0A2H0IRL9:0.35462,A0A317LKM9:0.37715)0.976:0.18311,A0A4Q3AYS2:0.35825)0.326:0.07830,(A0A1H7I854:0.33777,A0A1G7GKQ6:0.56644)0.448:0.10660)0.998:0.26183)0.829:0.06014)0.908:0.05453)0.908:0.06707,((A0A410DCU5:0.67641,((A0A0R2CVH4:0.50685,A0A6C2C7H8:0.46342)0.521:0.04878,(A0A2N9KGA1:0.57806,((A0A847J2C7:0.42879,(A0A1X8V8Z4:0.41913,A0A7H4UFP5:0.49203)0.805:0.08648)0.673:0.03494,A0A0R2L6I1:0.43465)0.882:0.08375)0.892:0.08275)0.479:0.05048)0.993:0.24845,(V7ZR78:0.64633,((A0A0B8R483:0.59452,A0A177SI48:0.50990)0.870:0.10548,((A0A3D2I1M6:0.54204,H1CY16:0.52670)0.790:0.10711,((A0A369P1X0:0.52276,(A0A396D2T0:0.47165,A0A1Y4DIH2:0.50458)0.976:0.24267)0.987:0.26897,(((R6RAY4:0.41425,A0A369LJY5:0.61144)0.949:0.13771,(A0A3D5IE54:0.40414,A0A418PGM4:0.49059)0.915:0.12423)0.915:0.10868,(A0A0R2D451:0.58128,(A0A069DT10:0.33603,G0VNL5:0.34813)0.774:0.05941)0.783:0.04173)0.074:0.04587)0.929:0.08321)0.855:0.08475)0.414:0.03460)0.883:0.07762)0.996:0.20134)0.858:0.06056)0.234:0.08854)1.000:0.79716,(((((A0A0F9LBG8:1.14449,((((A0A1J1CTJ0:0.51144,(((B1BP29:0.37943,(A0A1S8P0V0:0.40631,L1QFI1:0.43630)0.124:0.09942)0.996:0.35767,A0A371IZB7:0.75353)0.015:0.12268,A0A174R230:0.55123)0.040:0.06206)0.910:0.10879,(((A0A7I0HWD1:0.91852,A0A2U1S984:0.53928)0.000:0.16299,((C4ZGY5:0.52436,A0A1H9YA12:0.59850)0.981:0.26506,(((A0A7U9XKW1:0.40609,A0A848BTZ2:0.62588)0.359:0.11426,(A0A1Y4MZ67:0.39533,A0A1I0YKS2:0.59692)0.898:0.10426)0.249:0.07510,A0A8B0KKQ9:0.46111)0.992:0.27764)0.741:0.12939)0.854:0.12343,(((((A0A226GN34:0.61415,((A0A3S0PUX9:0.95001,A0A098LGB9:0.38273)0.744:0.14998,A0A1M5MLR9:0.43542)0.982:0.26436)0.734:0.08476,(A0A371QTF9:0.76867,((A0A6P1DHH2:0.37533,A0A0N1DYV1:0.38448)0.993:0.28060,(A0A5C0VH27:0.63198,A0A4R7D1V6:0.38274)0.861:0.17304)0.609:0.05039)0.451:0.05783)0.905:0.07750,((A0A7H8PIT7:0.60013,(A0A162QWX2:0.41855,(A0A412WU47:0.36812,A0A5Q5GFA1:0.56220)0.801:0.13543)0.926:0.13649)0.679:0.08622,((A0A7V2W481:0.63245,A0A4R6LYY9:0.48917)0.801:0.08792,A0A415PYU3:0.80533)0.601:0.01704)0.898:0.08301)0.746:0.04615,((A0A2H0QMN1:0.79024,((((A0A4Q6CBD6:0.80155,A0A1W6LM70:0.52905)0.544:0.07972,(A0A837AGC7:0.35185,(S7JS98:0.29703,A0A1I1GCI5:0.62674)0.176:0.09626)0.947:0.14379)0.919:0.11658,(K0NG86:0.55724,A0A7C6JPX1:0.60017)0.985:0.23051)0.512:0.04633,A0A353W4H0:0.60374)0.802:0.06557)0.032:0.01831,A0A7X7DIH1:0.82496)0.930:0.09867)0.928:0.08259,(((A0A101C776:0.58709,A0A1H6Z175:0.47481)0.999:0.38751,((A0A413DL41:0.55073,(A0A7S7J089:0.45062,A0A1M7MTL4:0.62367)0.823:0.16240)0.557:0.08278,A0A6M5I7D8:0.53154)0.995:0.25036)0.829:0.04821,R5HFP7:0.53033)0.907:0.08611)0.940:0.09989)0.364:0.05963)0.967:0.14530,((A0A2L0D255:0.66277,A0A1W7A972:0.66524)0.999:0.58467,A0A2D3P7Y2:0.78604)0.601:0.05806)0.944:0.13663,(A0A1G3UD79:0.52623,((A0A081NJ02:0.63046,((((A0A6I1KAX9:0.86560,(A0A6L2RCT8:0.68817,((A0A5C9A4V7:0.38090,A0A1G5ZZW0:0.40674)0.978:0.19487,(A0A838XN68:0.51622,A0A6I1PC72:0.57096)0.565:0.11009)0.899:0.12187)0.887:0.11446)0.303:0.08777,A0A5B8XRA0:1.16779)0.833:0.10262,((A0A562SQI5:0.59109,A0A7G5XFP3:0.46952)0.633:0.13804,((A0A1M6F279:0.44622,A0A167YQ80:0.84010)0.966:0.23835,A0A1H9N2X3:0.51900)0.697:0.05657)0.980:0.21469)0.907:0.09890,(A0A150HXV9:0.77475,(A0A2E9VT88:0.56942,(Q5X0E8:0.50204,(A0A3M1PG49:0.56717,(A0A4Q3YEL7:0.40052,A0A0A2X3G7:0.53858)0.973:0.21162)0.849:0.09744)0.892:0.10391)0.626:0.11450)0.235:0.05489)0.714:0.07058)0.401:0.07264,A0A3N7JNF4:1.56503)0.953:0.28535)0.953:0.23496)0.981:0.40982)0.944:0.30544,((((A0A7V6Q3K8:0.41481,A0A0B7MJW9:0.64270)0.954:0.19781,(A0A1Y3PUE2:0.72824,(A0A1C6JRZ0:0.76548,(N9XQL8:0.60285,A0A1W7LR60:0.52702)0.601:0.08115)0.865:0.14248)0.974:0.25010)0.981:0.24095,(A0A7C2JGB9:1.11640,(((A0A3M1UDK6:0.42713,(U7QQT1:0.37429,A0A1U7N934:0.49476)0.681:0.09199)0.934:0.21005,(A0A1B7WW67:0.68431,A0A7V7XDM9:0.70343)0.000:0.14680)0.905:0.16109,(A0A3L7XHM3:0.87092,A0A6N7A7B0:0.59084)0.824:0.16831)0.836:0.21419)0.984:0.32646)0.848:0.10211,((N8TY35:0.63614,((A0A3N9VYX2:0.57351,(((A0A8B5A3L5:0.47264,A0A518K7H4:0.53258)0.924:0.16117,((A0A4U0ZU84:0.50048,A0A3M3ZIA2:0.49622)0.111:0.05318,A0A3G4VHR9:0.61420)0.704:0.08248)0.725:0.03369,(A0A5C5XPQ7:0.41315,(Q7UH58:0.53158,(A0A091FYG7:0.52581,X5PMY7:0.60730)0.965:0.24261)0.870:0.17555)0.993:0.28041)0.103:0.05973)0.831:0.18286,A0A1Y5K0P7:0.47029)0.720:0.08891)0.997:0.39933,((A0A3A1QMU9:0.58938,A0A1M4VRW6:0.44856)1.000:0.65986,(A0A327VQG7:0.74124,((A0A225MB41:0.38414,A0A562MW27:0.65741)0.414:0.09471,((A0A363D297:0.54379,W4V472:0.33382)0.825:0.15512,(A0A255TEV9:0.43715,A0A1G7TSI4:0.47430)0.979:0.23394)0.691:0.09154)0.351:0.10559)0.972:0.36756)0.993:0.51236)0.940:0.25177)0.487:0.12687)0.000:0.08431,((A0A7J2R8E0:0.93085,A0A521IV15:0.93557)0.876:0.23685,(A0A7X8I0J4:1.28142,A0A353QTG0:1.04411)0.333:0.18698)0.400:0.06174)0.098:0.10189,(((R7BLG7:0.51019,((A0A1G6CM62:0.49524,(A0A417R0S2:0.23686,R5TWG5:0.23510)0.960:0.22242)0.895:0.13403,((A0A5J4RGE3:0.45902,(((A0A4S2FPY4:0.51777,A0A7Z8L4M3:0.64049)0.261:0.05770,A0A644XH96:0.39840)0.247:0.11093,A0A0P0M0X4:0.43106)0.000:0.11156)0.856:0.08476,A0A7G5NWA0:0.52556)0.950:0.14836)0.888:0.18612)1.000:0.95568,(A0A1Y4QFZ8:1.01903,A0A3S2TVJ1:0.57389)0.983:0.42392)0.916:0.31379,((((A0A7Z8GYG8:0.51705,A0A7Y8Z5U5:0.65165)0.996:0.41308,((A0A7U5TSQ1:0.52732,A0A1N6D5X6:0.46135)1.000:0.46885,(A0A235HX61:0.65554,(((A0A0M2NLJ6:0.54513,(A0A6S6SXV5:0.58399,A0A1G7P0G6:0.55269)0.902:0.15283)0.348:0.04424,A0A0M2UZ45:0.69813)0.193:0.07007,((A0A1Y4LLA2:0.59141,(A0A5D0RS84:0.56698,A0A7G7G6H4:0.41925)0.429:0.08245)0.974:0.18029,(A0A316AJX4:0.65555,(A0A1Q3QKD9:0.59919,(A0A523SAV6:0.62959,A0A2N2NI72:0.52710)0.378:0.07466)0.849:0.13020)0.975:0.20325)0.586:0.06487)0.962:0.17952)0.929:0.17663)0.938:0.14127)0.118:0.08919,(((A0A0G0QWW9:0.43810,A0A1F8GM39:0.55153)0.918:0.15147,(A0A0G0A4X7:0.90060,A0A1J4RXI6:0.96903)0.312:0.07027)0.999:0.41911,((A0A1Z4UI31:0.68351,((A0A1U7H720:0.47388,A0A6P0TWQ2:0.63497)0.773:0.12156,(A0A0B8Q290:0.76020,((A0A382GES2:0.51740,A0A351ST06:0.42555)0.891:0.14674,(A0A7J4VCJ6:0.41308,A0A7X8KSX5:0.83888)0.483:0.08776)0.623:0.08368)0.913:0.12131)0.428:0.08253)1.000:0.59170,(((((A0A7Y5G9B9:1.14277,(A0A0S4QIR9:0.76892,(A0A6B3BGG7:0.52119,(((A0A2L0N8W7:0.47666,A0A316IBX8:0.44650)0.863:0.12015,A0A346C6J9:0.58355)0.883:0.12600,A0A1G9MVS9:0.39434)0.056:0.05002)0.975:0.31706)0.970:0.29047)0.856:0.10950,(((A0A329LRE6:1.51046,(A0A560FKK3:0.53661,A0A2V9SRW4:0.65462)0.998:0.67312)0.886:0.29867,((A0A4R1RSS6:0.98527,((((((A0A2W5NST9:0.45653,A0A4V1ACB4:0.39722)0.984:0.25122,(A0A5C8TFB6:0.42531,A0A4Q3C029:0.52105)0.700:0.09126)0.988:0.23901,(A0A3M8G4D4:0.46726,(A0A523CCB8:0.55228,A0A7W7ZMP8:0.83009)0.171:0.19925)0.976:0.22880)0.048:0.07212,((A0A6J5DND7:1.06619,(((A0A2A3YUY9:0.53220,A0A441H7X7:0.62606)0.000:0.09854,A0A367WYI4:0.44889)0.274:0.09448,((A0A5Q0LYZ0:0.43420,A0A6I6L5G4:0.48665)0.929:0.13683,D3RS57:0.40283)0.300:0.04632)0.564:0.09584)0.986:0.27255,((X0RUF5:0.39280,(A0A3G8R9R3:0.62961,(A0A0F9RM57:0.49579,A0A841WIE4:0.75794)0.636:0.11246)0.440:0.11489)0.995:0.24986,((((A0A1C9BP67:0.40456,(R9GX02:0.40737,(A0A2S2DLT2:0.36685,A0A518EUS4:0.67349)0.814:0.13479)0.717:0.11772)0.774:0.10011,A0A1D2WVV7:0.57698)0.646:0.10516,A0A327XX43:0.46098)0.995:0.32647,((((A0A3N5KE59:0.43151,((A0A7Z3C5U5:0.29240,A0A1N6Q732:0.35864)0.991:0.19883,(A0A1D9CVI7:0.44279,(A0A5N3RZQ1:0.44710,A0A440JMW4:0.58513)0.506:0.07611)0.769:0.07690)0.790:0.07676)0.561:0.05757,A0A841W846:0.52313)0.968:0.15257,(A0A660UGS4:0.44899,A0A3D3UXE5:0.60003)0.429:0.08732)0.370:0.05379,A0A1F3STP7:0.58105)0.979:0.18804)0.837:0.09579)0.744:0.07742)0.903:0.09995)0.960:0.20763,((A0A7T2TY93:0.54855,(A0A6G2IMY4:0.46519,(J0WPA8:0.38494,U2LUN1:0.37306)0.624:0.05329)0.876:0.09700)0.903:0.08093,(A0A5P9BM38:0.33983,A0A829P4B4:0.84762)0.912:0.13782)0.968:0.20405)0.000:0.17014,A0A1H8XNH8:0.99771)0.670:0.15915)0.768:0.15045,((A0A537YN90:1.31026,A0A6B0ZF76:1.24253)0.512:0.19318,A0A2V5U8A7:1.26740)0.947:0.36235)0.747:0.09714)0.705:0.09058,((A0A5B9MCV2:0.93072,((A0A2W1T784:0.56547,(A0A260TD73:0.42252,(A0A365Z7F3:0.43655,A0A316I4J0:0.47247)0.978:0.23448)0.685:0.23898)1.000:0.61915,(A0A2S9YB99:1.18784,A0A512D2C0:0.68120)0.134:0.15565)0.328:0.07864)0.994:0.36365,(A0A840IH01:1.04018,(A0A2E2DPG3:0.49671,(A0A1H2FY88:0.64871,(A0A0V0Q692:0.40388,A0A5P6N7H0:0.79266)0.454:0.07981)0.885:0.11887)1.000:0.42553)0.571:0.16406)0.396:0.08584)0.946:0.15447)0.849:0.05739,((((((A0A3D3DFZ8:0.61818,A0A1F9BY01:0.45589)0.125:0.10424,(A0A7C7QJ13:0.45645,(A0A1Y6FDR2:0.52090,A0A4Q5NKH0:0.59306)0.566:0.13202)0.580:0.15141)0.956:0.20256,A0A2M7RZM0:0.83993)0.774:0.10958,(A0A3M1FV46:0.79872,(A0A357C3T8:0.69180,A0A5E4KAC0:0.64015)0.305:0.08600)0.702:0.06869)0.952:0.12026,(((A0A552RA10:0.95201,A0A7V8Y6Y0:0.98884)0.921:0.27948,((A0A857KSX8:0.68786,(A0A809GKK8:0.52314,(A0A495U971:0.75078,(A0A535MXW6:0.62011,A0A2W6DGR1:0.53683)0.823:0.08698)0.911:0.13157)0.330:0.08195)0.932:0.17683,A0A2W1AVP1:1.46563)0.393:0.10754)0.590:0.09555,((A0A519QZM1:0.49933,((A0A0F9F9X4:0.50082,A0A0F9CHW6:0.47650)0.795:0.05801,A5EGJ8:0.52619)0.491:0.05761)0.365:0.08360,(A0A3A8K915:0.58118,(A0A843AEJ1:0.50675,(A0A1H6WFR9:0.61785,A0A3N6LN63:0.59267)0.884:0.17654)0.809:0.14549)0.979:0.25584)1.000:0.32924)0.756:0.08116)0.273:0.01525,A0A850MQN3:1.16924)0.786:0.04103)0.205:0.04861,((((A0A2N6AS71:0.46228,A0A0M7ATX7:0.48923)0.997:0.43038,((A0A4U0FI04:0.43160,A0A5C4S9G8:0.48590)0.991:0.31044,((A0A0G1RNY1:0.50081,A0A1D2QZP3:0.41078)0.851:0.10036,((A0A0G0JXE6:0.59502,A0A519S4F2:0.40151)0.747:0.12369,(A0A7C4Y402:0.34581,(A0A1V3P882:0.61925,A0A522BBL7:0.41334)0.897:0.15418)0.938:0.13152)0.500:0.12292)0.919:0.19046)0.935:0.20534)0.998:0.42750,(A0A1F5GAZ1:1.01772,((A0A7C0U4P2:0.43135,(A0A7V9ZI49:0.42286,A0A7W8IEZ4:0.48746)0.999:0.60499)0.955:0.29439,((A0A1U7P553:0.68428,(((A0A238KI92:0.42958,((A0A0D6JKU5:0.35830,A0A8A3NBD7:0.32109)0.894:0.12176,A0A090F3A8:0.28786)0.180:0.06754)0.231:0.05805,A0A3S9B449:0.29741)0.999:0.33499,(((A0A560BQT3:0.46862,(A0A3N5YWP2:0.47390,A0A1H3NWE6:0.30044)0.841:0.11655)0.024:0.02149,A0A841P798:0.54705)0.931:0.09569,(A0A3B8RMT4:0.33288,A0A2A3VG99:0.39780)0.988:0.22884)0.281:0.08924)0.932:0.19678)0.459:0.18357,A0A6L7Q6F7:1.10248)0.828:0.15766)0.009:0.06138)0.661:0.22528)0.966:0.24036,(A0A418VHV8:1.64785,(((A0A660KYV0:0.67523,(A0A4V2M206:0.52975,A0A0M3D0Z0:0.50234)0.839:0.13564)0.997:0.40042,(A0A7Y9U415:0.61444,(A0A542R0Q7:0.65119,A0A349B8J5:0.83852)0.914:0.22318)0.628:0.14354)0.914:0.11277,(A0A535HUW1:0.84262,(((A0A6N8GN00:0.46251,A0A2H1JTN7:0.70210)0.908:0.22686,(A0A1G7MID4:0.56442,((A0A1X1AVD9:0.53562,(A0A5J5IZP6:0.45000,A0A1V0UBT3:0.62814)0.528:0.11507)0.408:0.10292,A0A317QP49:0.35943)0.892:0.14240)0.333:0.10720)0.984:0.27151,((A0A1H0HBA8:0.55024,A0A6G7Y6F5:0.46933)0.340:0.06406,(((A0A428Y6G9:0.71049,A0A7K1W2R8:0.48594)0.998:0.50191,(((A0A5J6V664:0.61291,A0A7D6VCT4:0.42989)0.000:0.09777,((A0A7W1DYK4:0.54795,A0A5N6BCR6:0.52592)0.683:0.10898,(A0A4Q7W863:0.34195,(A0A6I5X786:0.69698,A0A1H1T9Z9:0.42986)0.625:0.06107)0.959:0.15227)0.291:0.04832)0.851:0.11994,(A0A7K0JNQ8:0.67282,A0A1C6RL06:0.39129)0.000:0.09314)0.984:0.23706)0.222:0.06021,(A0A852WH97:0.58639,((A0A1G6TB65:0.48815,(A0A349CV26:0.39010,A0A4Y8UPP2:0.56286)0.172:0.04147)0.768:0.06407,(X8A538:0.34818,A0A260IFE2:0.48129)0.958:0.13349)0.994:0.24405)0.264:0.12610)0.945:0.14251)0.931:0.14029)0.997:0.33523)0.189:0.03549)0.979:0.31828)0.814:0.13196)0.058:0.09684)0.505:0.10088,((A0A535AMF1:1.08421,W9V429:0.74083)0.984:0.47916,((A0A108T3Q7:0.87046,(A0A0C1FWG3:0.37939,A0A0J7L895:0.28478)0.251:0.10326)0.999:0.36770,(A0A2M9BXI0:0.54568,(A0A2N1TFP2:0.92053,(A0A1I3S466:0.67951,(A0A1K1ZHI2:0.54725,A0A2N2N659:0.47917)0.644:0.09178)0.566:0.08828)0.966:0.27941)0.899:0.16104)0.644:0.09584)0.883:0.08424)0.934:0.11890)0.571:0.06267)0.710:0.09165)0.975:0.16169,((((A0A494YY77:0.51997,A0A7T7ALE6:0.87913)0.779:0.09311,((A0A2A5S074:0.66626,(A0A0R1FKV3:0.58896,A0A6A8DA43:0.48358)0.982:0.28706)0.904:0.12725,(A0A1Y3U5M2:0.80208,(A0A256MHN4:0.55663,(A0A0R1HF11:0.48016,A0A654MHX1:0.35311)0.255:0.09234)0.848:0.08969)0.958:0.19011)0.373:0.07026)0.996:0.42228,((A0A1H0FSR9:0.50297,(A0A0M2NNH2:0.62835,(A0A1X1IXB2:0.52007,A0A806JA88:0.65833)0.190:0.07564)0.829:0.16233)0.999:0.57350,((A0A2W1MV14:0.75897,(A0A839GT32:0.27289,K9UBG7:0.89675)0.994:0.33920)0.941:0.23912,((A0A6N8FHZ1:0.56178,((((K9W8H9:0.34145,A0A6M0GD03:0.50156)0.923:0.12524,(A0A168SDV4:0.51301,A0A5F2DT88:0.78674)0.184:0.08680)0.417:0.08469,(A0A2P7TGD5:0.48112,A0A0E3ZDS7:0.39167)0.939:0.12739)0.755:0.06115,(A0A7K1TLH2:0.49026,A0A7G6YQT9:0.60119)0.810:0.07762)0.910:0.13294)0.814:0.09570,(A0A288GUH6:0.99994,A0A4S8RFW8:1.02090)0.099:0.19988)0.738:0.13731)0.969:0.30319)0.903:0.17632)0.995:0.31195,((A0A0N0UGZ4:0.31489,((A0A1F2T497:0.49384,(A0A081K7M3:0.40040,A0A530YJM8:0.47601)0.635:0.13728)0.995:0.31373,A0A5C6BEJ6:0.67658)0.566:0.08938)1.000:1.09710,((((A0A268I8W0:0.51108,((A0A061AAT0:0.62420,(A0A373NW19:0.62006,(A0A2G3EDK6:0.60640,A0A7X0SDH6:0.31206)0.005:0.07716)0.000:0.13513)0.999:0.45041,(A0A1R1DUX3:0.67424,(A0A6L8Q6V9:0.45001,A0A7C9JS31:0.43043)0.993:0.31566)0.611:0.14777)0.382:0.08090)0.618:0.08960,((A0A160IPC9:0.70752,((C8P6I0:0.42326,(A0A0R1PLK1:0.43417,A0A2V4FBP0:0.37816)0.625:0.13467)0.998:0.35947,(A0A291DCT6:0.46243,(I0SY98:0.43344,(A0A0R1M7T5:0.42349,A0A1F2EXR2:0.37563)0.014:0.08505)0.975:0.20329)0.668:0.13320)0.000:0.10899)0.995:0.26149,((A0A1C1A7X1:0.65819,A0A2N1QFB8:0.84116)0.999:0.86129,((A0A2K8SFH1:0.43159,A0A1B3SKC7:0.51206)0.977:0.30405,(A0A857JX88:0.55574,((A0A414RZZ5:0.43131,A0A3D2EJI2:0.37802)0.994:0.37504,(A0A0R1F428:0.45105,(A0A564T369:0.58780,A0A7T7RVY0:0.33108)0.895:0.21279)0.985:0.29597)0.890:0.25280)0.999:0.62688)0.562:0.18182)0.891:0.15154)0.259:0.04620)0.982:0.14842,(((A0A7C7M0H4:0.99015,((A0A3B6VHJ5:0.38706,A0A0G0NH81:1.18312)0.595:0.12232,((A0A522JYV8:0.55462,A0A3D0MYD5:0.21481)0.931:0.09641,(A0A3D2SD03:0.42194,A0A7U8ZRS7:0.39432)0.962:0.17544)0.992:0.22675)0.938:0.16807)0.329:0.08452,(A0A3F3A7C7:0.90500,(A0A097B2H8:0.59929,(A0A842J595:0.47153,(((J1LN69:0.40611,A0A1H9JQ13:0.59342)0.887:0.09771,(((A0A6S4GV19:0.39042,A0A7H8YZG6:0.35619)0.944:0.17965,((A0A4U8SB91:0.31132,(A0A483AK88:0.31886,A0A7T5R369:0.35296)0.937:0.10472)0.418:0.04105,(A0A1F5T0M0:0.38115,A0A5E5PNS8:0.42992)0.036:0.05345)0.440:0.07948)0.014:0.06316,((((A0A8A6PAX1:0.40500,A0A847PNN4:0.35487)0.256:0.06765,(A0A4R6PI75:0.54612,(A0A831INE7:0.24630,(R6A2Z2:0.30722,A0A3D1HJE2:0.31556)0.997:0.32462)0.935:0.12182)0.945:0.10835)0.913:0.08785,(A0A8A8ESZ6:0.45913,A0A139PCJ8:0.38515)0.903:0.08138)0.559:0.02764,(A0A0R2BTS2:0.37426,A0A3M0NV35:0.36589)0.959:0.10266)0.904:0.08188)0.846:0.04134)0.516:0.05073,A0A1M6E7R9:0.42769)0.929:0.10487)0.765:0.05735)0.801:0.05964)0.980:0.24493)0.999:0.28924,(((((((A0A1A9R189:0.58819,A0A7C1KN40:0.33411)0.986:0.23481,(Q2B7Y2:0.36498,(A0A1E5G520:0.38137,A8U9C4:0.59246)0.890:0.12630)0.918:0.12487)0.901:0.10541,(((A0A1E2WRC1:0.41303,A0A2V8KNE8:0.52783)0.774:0.11088,((A0A852VIQ6:0.47372,A0A1Q8TRL4:0.39653)0.903:0.10400,(A0A4U3ETD6:0.33697,A0A2I0PEM9:0.52811)0.636:0.09331)0.704:0.04582)0.313:0.04777,((A0A364K9A8:0.50815,(A0A519NS48:0.41699,R9L894:0.43431)0.573:0.08924)0.587:0.05907,((Q07KQ6:0.52586,A0A4Q3G5T8:0.36033)0.998:0.35163,(A0A2J0SQB7:0.45452,A0A6L5H9Q9:0.44670)0.943:0.16217)0.950:0.15654)0.618:0.06374)0.193:0.06562)0.900:0.10943,((((A0A1Q3WQI0:0.74285,A0A832FDG1:0.39689)0.536:0.07498,A0A3A4UQI0:0.64711)0.896:0.09637,((((A0A285MX96:0.53955,A0A413VQI4:0.32379)0.916:0.14169,(A0A3E4NBQ9:0.37720,A0A1I5M3N5:0.73027)0.729:0.11827)0.853:0.07919,A0A415MUP7:0.55685)0.875:0.10827,(A0A1Y4UVJ1:0.76087,H1PQM9:0.36887)0.938:0.14707)0.951:0.12787)0.869:0.07536,A0A1L3Q038:0.61009)0.789:0.13773)0.455:0.04749,((A0A385LIC8:0.94489,A0A2T6CNV5:0.59126)0.354:0.13519,(A0A3L8AT76:0.66942,((A0A157Z8G0:0.79491,A0A7W1SA56:0.55495)0.927:0.18275,((((A0A068MT12:0.47886,A0A3P0XCW1:0.55087)0.761:0.07557,((A0A3A8LBM9:0.50549,A0A2T4TW00:0.40489)0.593:0.08649,A0A1H7I0M4:0.60387)0.898:0.10450)0.279:0.03454,A0A0M2VEJ9:0.65808)0.921:0.11743,((A0A4Y6PPD5:0.73766,A0A3D8MS28:0.66461)0.826:0.14713,(M5PQK8:0.52292,(A0A853NG02:0.49894,A0A066S0A7:0.44572)0.800:0.07562)0.572:0.04762)0.169:0.03097)0.920:0.10263)0.760:0.05771)0.772:0.04435)0.977:0.15161)0.910:0.07064,(((((A0A502STN7:0.58395,A0A257FXW5:0.45979)0.999:0.42203,(F0LEM4:0.61165,A0A090GRC8:0.59095)0.801:0.14137)0.126:0.05723,(A0A2U1SGC6:0.72776,(A0A4D8R4A4:0.42602,(A0A2J7TBT4:0.45542,A0A0A8K3S3:0.49954)0.686:0.05920)1.000:0.52020)0.461:0.16951)0.716:0.06947,(M5FEK1:0.47962,(A0A0Q7I3Y3:0.45313,(A0A4V3GRM5:0.43383,A0A0B4X575:0.50431)0.841:0.14177)0.915:0.15231)0.999:0.32992)0.957:0.13762,((A0A3L9Y438:0.68972,((A0A442H4X2:0.44900,A0A1X4N7Z2:0.36463)0.969:0.16769,(A0A6I4AZ34:0.51846,(A0A4Y1MS12:0.48031,(A0A840AA86:0.37246,A0A2T5JTL4:0.44700)0.987:0.19759)0.345:0.06081)0.858:0.12318)0.973:0.19343)0.747:0.12710,A0A3M0CT97:1.02388)0.190:0.07130)0.898:0.09692)0.983:0.16167,((E4U9T1:1.10568,A0A7X9UM65:0.96472)0.875:0.20442,(A0A2N3TB42:0.46881,(((A3QCY8:0.51977,A0A2J7Y6V9:0.44003)0.909:0.10994,((((A0A2Z3RXR8:0.82329,A0A1J5VA18:1.07203)0.387:0.18654,A0A258Z8F6:0.45734)0.963:0.26021,((A0A1C2E6T2:0.47722,A0A0D4BZ69:0.87492)0.150:0.06275,A0A2W4U883:0.65003)0.892:0.11153)0.296:0.05824,((A0A3A4NXC2:0.48841,A0A7Y3Q652:0.45087)0.827:0.09059,(A0A423GKN1:0.45801,A0A1Y0G139:0.46850)0.963:0.16616)0.361:0.07397)0.553:0.05717)0.944:0.13787,((A0A2S5FEN6:0.56863,(A0A7X3RAE0:0.57678,(A0A2N1SP27:0.47695,A0A849T5Z1:0.49989)0.467:0.10368)0.000:0.09593)0.952:0.15441,((A0A4Q9V2E2:0.81607,((X8HU76:0.35389,A0A7C8BRA1:0.44158)0.982:0.20786,A0A413QZ32:0.60651)0.800:0.05857)0.901:0.10277,(A0A1R4KJT9:0.53099,(M3R3I2:0.42433,A0A2P8QYY3:0.20002)0.966:0.15175)0.568:0.07851)0.926:0.10975)0.986:0.18532)0.810:0.11545)1.000:0.37884)0.594:0.03311)0.821:0.07818)0.106:0.08333)0.874:0.14654,((((A0A845FBY5:0.48045,A0A168L8S7:0.39862)0.999:0.34249,(((((A0A2P2DQT8:0.41410,A0A7I0J0N2:0.47313)0.988:0.20101,(A0A1B8PJV5:0.55866,((A0A7W7E5Z7:0.40242,A0A2E2DA86:0.36706)0.849:0.10642,((((A0A0F4RGE4:0.41136,(A0A1X4NCH6:0.32256,A0A1I7EDA5:0.42519)0.932:0.13939)0.937:0.12744,(A0A291PK40:0.55818,(A0A2L1S4I8:0.41783,(A0A2T5XK52:0.35962,A0A4Y9LDH2:0.50840)0.134:0.04026)0.825:0.08236)0.757:0.12516)0.736:0.07453,(((A0A0J8GYI4:0.31683,A0A7G2JF82:0.28814)0.916:0.10406,A0A3D8M452:0.56620)0.606:0.08034,A0A2E8G1A0:0.59128)0.082:0.05250)0.720:0.04920,((A0A5C4RKS8:0.38891,(A0A0M0I2F2:0.37378,((F0EQ63:0.47953,A0A2N9XBZ0:0.32750)0.000:0.09418,(A0A2E3U3D1:0.43472,G2E3Z6:0.40234)0.693:0.08140)0.495:0.09370)0.882:0.08975)0.825:0.08623,A0A3S7K4Y7:0.45068)0.738:0.06521)0.833:0.04103)0.108:0.07953)0.857:0.05625)0.496:0.02817,(((A0A396TXB9:0.36394,(A0A840LCL9:0.40166,A0A2S9MI14:0.39230)0.907:0.13199)0.706:0.08790,(((((A0A5N7TRU1:0.32637,A0A7T4YPS2:0.57632)0.522:0.07753,(A0A1H1XEE4:0.55199,(A0A1P8MLP5:0.43436,A0A2T3PXQ9:0.42388)0.000:0.09814)0.296:0.08528)0.841:0.06716,A0A1M6ZT90:0.33456)0.896:0.05113,((A0A7R6W8V5:0.37926,A0A1H8US85:0.38563)0.927:0.12230,(A0A7V7Z6T6:0.41902,A0A4P7UPG3:0.41941)0.906:0.11701)0.898:0.07554)0.897:0.04042,(A0A1U9RBV3:0.55479,A1JL41:0.26551)0.910:0.07770)0.470:0.01753)0.943:0.05721,(((A0A514EFM2:0.53304,(A0A7W9V4B1:0.55371,A0A853JAZ6:0.31076)0.914:0.14501)0.641:0.08904,A0A7G6UQ63:0.41793)0.986:0.18681,((D0CBF4:0.59743,(A0A7Y0NRA4:0.36879,(A0A415S1Z3:0.28101,A0A1M5VUT8:0.47490)0.681:0.08772)0.896:0.08867)0.443:0.06013,((((A0A0J7Y602:0.48710,A0A562KPQ9:0.32477)0.177:0.06770,A0A7W9R7V4:0.46329)0.574:0.08658,(A0A0T7GAB9:0.34447,A0A844WGS1:0.39179)0.963:0.13396)0.940:0.11896,((A0A7W8DKW3:0.43239,A0A517M0L8:0.69689)0.848:0.15833,A0A1H8UX75:0.46701)0.453:0.09443)0.547:0.04694)0.819:0.07655)0.876:0.04445)0.665:0.04192)0.943:0.08427,((((A0A173HMR4:0.53767,(A0A5C7ASS6:0.34448,((A0A1F0PII8:0.95500,A0A4V3DKW9:0.39701)0.819:0.15928,(A0A0J5Q6G9:0.45175,A0A2D8HGL8:0.26784)0.767:0.09830)0.907:0.09336)0.097:0.03727)0.765:0.04513,((A0A2T0MCR1:0.26248,A0A1X9YZX5:0.34099)0.893:0.08190,A0A2T5RLS7:0.34072)0.932:0.07007)0.735:0.04296,((A0A415DEV9:0.33569,A0A7K0AT70:0.41579)0.993:0.20598,A0A4Y8BNT4:0.31543)0.848:0.06684)0.952:0.09028,(((A0A410YHG8:0.51816,A0A846SPU9:0.43033)0.933:0.15682,(A0A147DSH0:0.38331,A0A399NVQ8:0.34635)0.860:0.09768)0.566:0.10176,A0A371P9H9:0.41254)0.997:0.23006)0.944:0.10003)0.521:0.06650,((A0A3L7AB27:0.50251,A0A399NHQ8:0.43486)0.966:0.22343,A0A4Q8AB32:0.96168)0.954:0.20072)0.980:0.14721)0.828:0.04549,(((A0A176TMN6:0.44964,A0A0R2CWZ6:0.45697)0.895:0.12600,(C0XH01:0.47177,A0A0J5PB59:0.49000)0.963:0.17887)0.994:0.23167,((A0A8B4HVB3:0.32703,A0A0F2CV09:0.37384)0.990:0.21319,((A0A1S7BGL9:0.44332,(A0A2S9HCF9:0.33508,S1P1T2:0.31704)0.934:0.18996)0.747:0.10558,A0A4R4J8Y4:0.61953)0.096:0.01378)0.922:0.12216)0.901:0.11120)0.000:0.07591,((A0A1E5TS16:0.70099,(A0A2N6PNX0:0.57596,A0A7U0TNJ0:0.40586)0.428:0.08633)0.937:0.13267,(A0A1B3SLZ1:1.16218,(A0A1V5GYS0:1.04881,(((A0A3D4QXF9:0.48377,A0A417AW40:0.40109)0.986:0.23241,A0A7C9L334:0.42738)0.253:0.09789,A0A417IKX4:0.43123)0.788:0.06551)0.268:0.09892)0.916:0.13855)0.986:0.23864)0.981:0.25287)0.974:0.41854)0.951:0.34382)0.954:0.19193)0.552:0.04092)0.928:0.09756)0.303:0.07394,((((((A0A7X5EB37:0.52218,C9RQR1:0.34585)0.987:0.28364,(A0A2T3FH13:0.61286,A0A178KHX1:0.58412)0.508:0.13958)0.889:0.13231,(A0A7G9S1M3:0.58747,(A0A1M6KP83:0.49156,A0A844GM75:0.55332)0.986:0.28301)0.882:0.13851)0.990:0.43683,(A0A3M4EY95:0.96233,(A0A1B3XVZ0:0.48699,A0A4V1MGJ4:0.65957)0.982:0.36819)0.426:0.12091)0.966:0.33367,(A0A3M7Q9V3:1.72804,(((((A0A4Q6CUI3:0.94849,((B3E6D5:0.86422,(A0A7W7YHC1:0.88337,(B4CV37:0.59211,((A0A8A6AR70:0.53527,A0A519U5N7:0.72207)0.733:0.09344,(A0A842VNV8:0.57188,A0A2K8XFT7:0.70308)0.874:0.09784)0.873:0.10783)0.813:0.15319)0.399:0.08019)0.999:0.44474,(A0A2W4WEA3:0.56377,A0A2V5Z0Y6:0.70398)0.885:0.16566)0.263:0.08830)0.766:0.15334,L0DIS4:0.78889)0.628:0.16707,(A1VUE3:0.90103,A0A517WWJ9:0.62615)0.932:0.22711)0.970:0.21125,(A0A2G2CLL6:0.72806,A0A6M8MUM0:0.62129)0.870:0.17666)0.706:0.09152,(A0A4Q1ANA5:0.58615,A0A1E5BI47:0.97882)0.490:0.09836)0.991:0.58273)0.517:0.14959)0.000:0.05734,(A0A6L9H7H4:0.55421,(A0A363RQY8:0.94418,A0A518HNZ2:0.67930)0.930:0.35877)1.000:1.04942)0.708:0.10145)0.992:0.25563)0.474:0.03590)0.987:0.20365)0.774:0.06285,(((A0A1B6BG06:1.16168,(A0A2N2BRX0:1.06436,I7LG99:0.92805)0.860:0.23108)0.831:0.17327,(((A0A7X7QLN0:0.88622,A0A1G4VUE6:0.83520)0.954:0.30778,((A0A563D4U1:0.84962,((A0A7X8JP74:0.73691,A0A1Y4QJ61:0.86750)0.890:0.17434,((A0A3D0HM21:0.53115,A0A7X8X8U4:0.59427)0.874:0.17502,(A0A6I3I790:0.60438,(A0A1G4SXF7:0.69867,A0A143XSF0:0.58036)0.951:0.22343)0.506:0.12769)0.341:0.10325)0.540:0.14778)0.972:0.22258,(((A0A6H3NP87:1.14716,(T0FE52:0.46603,M6CQU0:0.61481)0.924:0.21665)0.942:0.21008,(A0A4U2KVR3:0.30787,A0A4U2L366:0.21779)1.000:0.76587)0.836:0.16773,A0A1T4K562:0.67763)0.800:0.13018)0.870:0.09784)0.801:0.05336,((((A0A6S6U9W9:0.44296,A0A1W1EEJ9:0.54273)0.988:0.26936,(A0A0M9DZB1:0.57829,(A0A0A2F5U6:0.53223,A0A2G6H986:0.48797)1.000:0.52818)0.643:0.11523)0.488:0.05253,A0A133UDY8:1.47853)0.866:0.12260,(A0A519BLH9:0.81343,(((A0A7V4QDT3:0.51754,A0A6L5WIC2:0.42407)0.951:0.15925,A0A3N1YEI8:0.65609)0.922:0.15511,A0A2G6BN26:0.91170)0.213:0.03643)0.839:0.07175)0.789:0.08052)0.292:0.04840)0.415:0.04361,((A0A7X7VTA9:0.88220,A0A0F2ITQ2:0.71160)0.938:0.26728,(A0A497AIQ2:0.55227,K2DQF9:1.30300)0.914:0.24728)0.991:0.31683)0.849:0.04410)0.880:0.06407)0.854:0.06193)0.795:0.04664)0.914:0.09957,((A0A1D2U109:1.52324,A0A4P5Y5L5:1.13073)0.859:0.40057,((A0A517TE10:0.75223,((A0A517QEG1:0.56551,((A0A356EK95:0.34047,(((A0A517U1H2:0.72737,A0A5N9HUG4:1.09819)0.126:0.03491,A0A5C6DEL4:0.65726)0.740:0.08139,A0A6M5YKV4:0.82029)0.852:0.09286)0.681:0.10451,(A0A142WWA2:0.64374,A0A1C3EIR7:0.54097)0.045:0.12063)0.801:0.09296)0.274:0.09085,(A0A2D5GW14:0.79777,A0A517YKA5:0.74075)0.725:0.16227)0.110:0.08778)0.942:0.20565,((A0A5C1AI98:0.83720,(((A0A177R9U0:0.64265,(A0A142WPH1:0.68881,A0A142WWP1:0.55154)0.879:0.15678)0.887:0.15604,(A0A6I6A9K5:0.60716,(A0A5B9MFN6:0.71655,(A6BYW4:0.45478,A0A2E3GXA4:0.56013)0.525:0.05724)0.933:0.16312)0.992:0.28449)0.413:0.06473,(A0A3E0MZR9:0.64836,A0A2E2C0V8:0.75674)0.661:0.07513)0.924:0.15164)0.341:0.06652,(A0A517XV55:0.82159,A0A3D4PF71:0.93555)0.571:0.16226)0.965:0.26850)0.952:0.24368)0.797:0.18614)0.902:0.13252)0.763:0.08624)0.986:0.29698,((A0A7L9CWU9:0.43255,(A0A1B1FKA5:0.52664,A0SGM8:0.51039)0.367:0.09617)1.000:1.11221,((((A0A523RAG7:1.00913,A0A0G0AL44:1.00138)0.932:0.39927,((A0A0H5Q747:1.17940,W1I8A2:1.05091)0.000:0.17697,(A0A0H5Q2T7:1.32398,((((((((((A0A4R1D371:0.76304,A0A126V3D5:0.56933)0.987:0.36687,((A0A2E7HQI7:0.49687,A0A2E7CLN5:0.56175)0.870:0.14049,(A0A2E1KM22:0.50752,A0A382A9S0:0.74919)0.645:0.13962)0.937:0.17522)0.855:0.13411,A0A7C5EDI1:0.79424)0.679:0.08998,((A0A1V0DDI5:0.46207,A0A1G6JLR1:1.05094)0.921:0.28485,(A0A351MK72:0.75000,A0A7T9H4G9:0.66418)0.000:0.12680)0.952:0.20375)0.438:0.08029,((((A0A7K1KL67:0.63557,A0A445MXS3:0.54553)0.805:0.16171,(A0A6N9ACI8:0.89032,(A0A1W9J1Y0:0.82857,A0A7V1F6Z3:0.61073)0.592:0.17781)0.851:0.14474)0.859:0.13106,(((A0A523Z2X7:0.75175,(A0A4P7UJX5:0.83485,(A0A0J1B4S1:0.54651,A0A2E7KFH0:0.57409)0.993:0.40350)0.930:0.18832)0.401:0.06123,((A0A4P9A3Z4:1.22351,(((A0A3R6ZVV7:0.45952,A0A1F5TQJ6:0.74809)0.887:0.23341,(A0A2H0RTF6:0.60756,A0A1F7CNN7:0.73934)0.983:0.38063)0.584:0.03600,(A0A1G1P8D1:0.62503,A0A0S8J762:0.61027)0.805:0.09560)0.292:0.05153)0.872:0.07014,(((A0A1G1WP18:0.54182,(A0A1F5FPC6:0.68968,A0A1F7XM93:0.36106)0.887:0.13722)0.740:0.13795,((A0A2V8PXR5:0.61529,((A0A7C3F755:0.65938,A0A3M2BT43:0.63628)0.514:0.12495,(A0A1H4QGE1:0.38638,A0A7L5A4W3:0.57805)0.999:0.36879)0.551:0.09415)0.880:0.10318,((A0A1F2SPC7:0.79209,A0A1E3YBT8:0.84437)0.881:0.18061,A0A4R1VRZ1:0.68708)0.799:0.16100)0.580:0.10445)0.983:0.20000,(((((A0A4Q5LJV1:0.80409,A0A5B8VDR7:0.59443)0.419:0.16080,(A0A2G1BV13:0.54911,A0A1H4MUQ6:0.75674)0.812:0.12768)0.200:0.07349,(((A0A6M1SU45:0.50479,A0A3E1YC68:0.61976)0.908:0.12824,(A0A3C1RIF5:0.45757,A0A2D9C0Z4:0.61607)0.000:0.08058)0.797:0.06667,(A0A379MQF2:0.54706,(A0A060RDL6:0.45673,A0A519L1Q7:0.43602)0.705:0.11339)0.864:0.07641)0.253:0.08810)0.965:0.17962,(((((((A0A7T7XNI3:0.52391,A0A3S9KLC1:0.62731)0.971:0.23948,(((A0A2N7ASU1:0.56492,A0A0R1XPV0:0.62884)0.941:0.21132,A0A1L8SSR5:0.64626)0.778:0.06560,(A0A7U9WZ11:0.69183,A0A1C6HCZ3:0.42998)0.941:0.18992)0.645:0.10322)0.914:0.10440,(T0SXH7:0.63508,A0A7L6N5I8:0.64908)0.125:0.11005)0.417:0.03467,((((E1W275:0.68276,A0A8B4ND75:0.55623)0.871:0.13680,((A0A7T8ARK4:0.44857,A0A330MAV8:0.49253)0.459:0.10360,(A0A356NYB3:0.49476,A0A6N8XNG9:0.53773)0.984:0.26121)0.752:0.05855)0.643:0.04011,(A0A1E9MP84:0.45020,A0A448TVV3:0.64646)0.912:0.15212)0.807:0.06945,((((A0A4Q1CQM2:0.85126,A0A0J1NGF7:0.58484)0.801:0.13281,(A0A105TF75:0.69710,(A0A3D3KJA2:0.73792,((A0A4Z0AS36:0.48376,(A0A848FFQ0:0.52071,A0A4Q0HTQ9:0.66169)0.147:0.05377)0.929:0.13693,A0A3N8RB71:0.51526)0.893:0.08635)0.210:0.03131)0.848:0.07846)0.493:0.08303,((((A0A6H2D3B1:0.62402,(A0A2M7PZW6:0.41194,D3RQK8:0.66299)0.963:0.20881)0.762:0.10155,((A0A2M8YHR5:0.71452,((A0A1J0SW71:0.45421,(A0A1W6L2E1:0.77526,A0A7S9GFU0:0.38250)0.946:0.16902)0.946:0.14243,(A0A3M0EPV0:0.70610,A0A521V1A2:0.58986)0.939:0.17960)0.558:0.05957)0.045:0.04204,U4V9B3:0.53656)0.828:0.09615)0.621:0.03188,(A0A2A5EPN6:0.90971,((A0A519MEH1:0.52942,C5AN60:0.51928)0.998:0.38581,((F7ZAQ9:0.57774,A0A7X4GFL2:0.43708)0.998:0.47551,A0A1F3Y179:0.80953)0.849:0.11844)0.313:0.05239)0.845:0.09713)0.861:0.06721,((A0A521H333:0.67281,(A0A845X7Z5:0.61258,((A0A845A088:0.60778,(A0A1T2A2T6:0.56834,A0A0B5E216:0.45635)0.898:0.20908)0.962:0.27137,(A0A2T9KCY1:0.53216,A0A1X7HQZ2:0.46728)0.801:0.11593)0.927:0.13660)0.892:0.08737)0.958:0.16293,(A0A031JVU7:0.60230,A0A238D9C7:0.61818)0.409:0.12422)0.846:0.07879)0.826:0.04078)0.839:0.05859,(A0A7G7ENL2:0.64580,A0A4R7RMV8:0.71184)0.931:0.19002)0.960:0.09567)0.955:0.09827)0.948:0.11864,(R6XLK3:0.54562,(A0A3D1WGA9:0.44052,A0A1V5S2D7:0.47897)0.911:0.10460)0.982:0.19061)0.870:0.10972,((A0A419VTT3:0.62899,((A0A809NYB9:0.57766,A0A200ID83:0.42804)0.803:0.12111,A0A0U2X5Z9:0.48390)0.953:0.14784)0.971:0.16703,A0A5C8E082:1.00377)0.773:0.04794)0.561:0.05969,((A0A6S6TU31:0.95877,A0A3B6VZ66:0.54167)0.831:0.13378,(A0A6J4WRT4:0.78939,R6DSD3:0.67315)0.793:0.16724)0.881:0.10065)0.993:0.19337)0.602:0.09121,((A0A7W1NPA9:0.59333,((A0A2Z5UTB7:0.74332,((((A0A177W1C9:0.45417,A0A2I0EU16:0.42517)0.000:0.14565,A0A7Y3CKT6:0.78242)0.941:0.17186,((A0A1G0KBC3:0.46764,A0A540VQ97:0.63036)0.203:0.06524,S2ETR1:0.61820)0.699:0.08577)0.000:0.08151,(A0A7Y7ICE6:0.43420,(A0A4Q1HJL4:0.61831,A0A3N8PAU5:0.47191)0.843:0.19874)0.917:0.13015)0.131:0.03535)0.902:0.07393,(A0A2N7EBL6:0.46705,((A0A064E6Q4:0.70017,A0A1N6LZW7:0.56245)0.913:0.20993,G0A4K9:0.51434)0.725:0.09797)0.959:0.15372)0.320:0.06130)0.816:0.07710,((A0A809QXW8:0.49384,((G0AC57:0.58659,A0A840GIM2:0.34765)0.952:0.13259,((A0A366FEC3:0.46646,A0A221KDQ8:0.44531)0.957:0.15794,A0A172UC81:0.53613)0.827:0.06003)0.254:0.04599)0.962:0.17488,(A0A1C3ZMG4:0.70054,(((A0A2N8SPL7:0.55810,(A0A290TU22:0.49095,A0A7V7YE37:0.76672)0.933:0.17296)0.911:0.12815,(A0A3D8GYD0:0.58644,A0A2D8J266:0.56636)0.766:0.11118)0.916:0.21181,A0A0K9TGL3:0.43682)0.840:0.16705)0.841:0.14158)0.392:0.07676)1.000:0.38581)0.781:0.11896)0.832:0.07808)0.771:0.04124)0.743:0.02907,((A0A518KUC0:0.65124,(A0A7W5H4T3:0.97844,A0A2E2C4F4:0.51723)0.855:0.17103)1.000:0.65234,(A0A7T9CQ57:0.79139,(A0A1F6HTA5:0.55697,A0A1G1NY65:0.61298)0.836:0.17912)0.799:0.13744)0.675:0.12257)0.759:0.06621)0.945:0.10324,(A0A0G0AXR3:0.58982,A0A1F6W4H6:0.66324)0.986:0.34309)0.060:0.01072)0.902:0.07766,((((((A0A7Y1BM70:0.59940,((A0A7C8HUU0:0.52931,((A0A2S5F6K8:0.62106,(A0A2X4Y9M3:0.53065,A0A2M8Y856:0.39234)0.690:0.12658)0.425:0.07791,A0A371CGB7:0.53380)0.558:0.04803)0.818:0.05691,(A0A4P7BRK6:0.51633,S7U3H2:0.47550)0.502:0.12700)0.725:0.08555)0.984:0.21793,((A0A2T9K8W1:0.67321,((A0A7X6GKG4:0.36334,A0A6A1TUW0:0.50387)0.887:0.11239,A0A506UHP4:0.67297)0.550:0.08092)0.870:0.11274,(A0A2V6LFV7:0.61781,G8NSP1:0.63138)0.955:0.23533)0.875:0.12524)0.973:0.12847,(((((((A0A4Q6F417:0.68290,A0A0F7GD60:0.71367)0.626:0.18873,A0A2L1CLB7:0.55301)0.791:0.13213,((A0A1M6AZH8:0.69186,((A0A2N4XD69:0.40790,A0A3R6ADU9:0.53440)0.425:0.07032,(((A0A5E7MQ93:0.42718,Q477P7:0.62193)0.722:0.03951,A0A222ETX7:0.74704)0.197:0.06923,A0A7C1MNA0:0.65459)0.924:0.11460)0.590:0.06381)0.360:0.04935,((A0A2A1ZNS9:0.60387,A0A4U1YY68:0.54180)0.000:0.13509,A0A090QCG5:0.60166)0.537:0.10191)0.698:0.07494)0.645:0.06470,(A0A1H3DSX3:0.66009,A0A0F3HA32:0.47017)0.460:0.14801)0.809:0.12424,(((A0A1H0G6H4:0.50792,(A0A7K4H7S1:0.43167,(A0A0E3RW41:0.32593,A0A0E3QDK3:0.51851)0.839:0.09469)0.893:0.10409)0.620:0.11006,((A4G158:0.53330,A0A4R3NF62:0.43862)0.634:0.09068,(((V6J1K8:0.51689,A0A3E2WX17:0.40287)0.908:0.12191,(A0A2N1V071:0.47067,A0A401UI85:0.44311)0.057:0.07213)0.975:0.17584,(A0A1F9XM12:0.47228,(J8AGS9:0.73161,A0A8B5NDN0:0.22297)0.977:0.21805)0.857:0.07213)0.803:0.08034)0.990:0.22356)0.553:0.06275,(((A0A2Z3H9D7:0.61095,(A0A0F9QW46:0.50019,A0A7V5KV02:0.54941)0.872:0.13326)0.349:0.04975,((((A0A1N7J1S3:0.33599,U4T817:0.48212)0.466:0.07957,((I4APC9:0.40936,(A0A2E7CL21:0.44422,(A0A1V4IXF0:0.27740,N1ZCL8:0.25720)1.000:0.34275)0.671:0.05038)0.380:0.09599,(A0A1D8J5C0:0.30657,(A0A6P0U1P2:0.43377,A0A3S0NCM9:0.25172)0.826:0.06995)0.733:0.07599)0.925:0.11567)0.418:0.06493,(A0A523U0G7:0.40465,(A0A3L7SGD7:0.61782,(A0A3D8MSH4:0.52320,A0A838UN69:0.35675)0.716:0.08636)0.859:0.11306)0.913:0.08786)0.775:0.05042,((Q31A85:0.37398,A0A2E5VCH6:0.46045)0.984:0.17983,A0A2S8FQC8:0.40870)0.769:0.04147)0.989:0.17043)0.977:0.16000,A0A6M8VX92:0.62880)0.732:0.05669)0.913:0.07109)0.667:0.03617,((A0A414I6A1:0.56247,A0A542RI91:0.51122)0.000:0.09593,(A0A2C6CNE8:0.66983,(A0A2X2LHA8:0.65876,(A0A344LUT8:0.53691,A0A5S3PUU1:0.57018)0.875:0.15965)0.822:0.13095)0.953:0.17163)0.764:0.08684)0.664:0.05602,(A0A1Q5PCS6:0.70902,(A0A7V7TXS3:0.73667,A0A0F9JNI7:0.70763)0.216:0.09256)0.933:0.14019)0.621:0.01703)0.900:0.06336,(((((A0A842VQB4:0.58993,A0A7X1S119:0.54897)0.696:0.10045,R5DJE4:0.68186)0.412:0.08470,((A0A069SPB9:0.58452,A0A1S8NE49:0.61962)0.908:0.16080,((A0A2Z4VX68:0.83504,(A0A0R1WII8:0.51491,A0A0A2TF72:0.56626)0.450:0.14952)0.785:0.11466,A0A524CN96:0.70308)0.569:0.08945)0.688:0.11324)0.728:0.05712,(A0A3D9KE31:0.80533,A0A2P8NDL6:0.98902)0.814:0.20796)0.830:0.05532,(((A0A7U6KEK3:0.51785,(A0A351VC69:0.64898,(A0A564UUV8:0.38289,A0A1Y4MUH3:0.70430)0.250:0.08357)0.429:0.09078)0.916:0.13684,A0A1G0ZFP0:0.81803)0.623:0.06404,(A0A3N9PWQ5:0.64916,(((A0A4Q3ECR9:0.49529,(A0A096AYN0:0.46644,A0A317F747:0.58275)0.796:0.14927)0.901:0.13023,(A0A2U0DLL9:0.61306,S1MU46:0.48762)0.142:0.13311)0.837:0.08627,(((A0A1G4SF02:0.80606,((((A0A7X5CB38:0.36689,A0A3A6EWI3:0.31579)0.996:0.27904,(A5ZA82:0.45120,U2SCG5:0.49227)0.897:0.13936)0.706:0.07357,(A0A417IJM7:0.57831,A0A1C6BXJ6:0.53192)0.758:0.15552)0.889:0.11356,A0A355X6L4:0.54441)0.195:0.07351)0.916:0.13699,(A0A354U4S8:0.57188,A0A2U1AT38:0.36333)0.990:0.27169)0.430:0.07679,(A0A1Y4EPM7:0.45412,A0A7S7ER05:0.62192)0.997:0.38467)0.770:0.03930)0.913:0.11290)0.966:0.13525)0.534:0.03548)0.856:0.03883)0.677:0.02532,((A0A1H1D3D7:0.71152,(A0A4V6Z7Q9:0.60129,A0A7Z9PSM6:0.73372)0.991:0.45891)0.850:0.29361,((((A0A1H1Q012:0.69862,A0A839E6C7:0.68298)0.851:0.12530,((A0A1Y3LSH4:0.80929,(A0A3R9XE51:0.48311,A0A3N1ZRK8:0.63670)0.865:0.09682)0.133:0.06012,(A0A2I1Y8C6:0.59216,A0A2T0VAK9:0.59171)0.757:0.14404)0.812:0.03824)0.791:0.03430,(A0A4S2RS39:0.50424,A0A2A9CVU4:0.53210)0.998:0.40712)0.876:0.05210,(((A0A291GDZ8:0.44103,(A0A1R3U6U3:0.56448,(A0A518GFJ7:0.32646,R7JAG0:0.38383)1.000:0.32672)0.916:0.11594)0.847:0.07023,((A0A4R7P5M4:0.46130,A0A1Y6MHN1:0.46136)0.774:0.12005,(A0A0W0PG39:0.54072,(A0A4R2TJC9:0.53998,A0A7T0QZR6:0.61524)0.900:0.14459)0.856:0.08200)0.931:0.11807)0.880:0.05417,((A0A0F6L8U3:0.55968,A0A5F2CNS7:0.59682)0.606:0.09901,(A0A1Y0NZ40:0.48664,E5Y519:0.69283)0.557:0.10153)0.923:0.09017)0.500:0.07805)0.989:0.32641)0.955:0.21184)0.000:0.04656,((A0A354W7U0:0.90144,((A0A353DGV7:0.78641,(A0A2D9Z2K8:0.46172,A0A7Z9IAM1:0.34822)0.977:0.22149)0.000:0.07877,((A0A2E8B118:0.36295,A0A7V2XTI5:0.37759)0.846:0.08345,(A0A5S9F473:0.64181,A0A142X8K2:0.73440)0.946:0.24841)0.881:0.08997)0.932:0.14542)0.782:0.16838,(((A0A7C5ZQQ1:1.01358,(A0A368M433:0.96403,A0A1G0XRL8:1.08265)0.000:0.18252)0.763:0.15492,(A0A660WFW6:0.69389,A0A2D6QGU2:0.46873)0.988:0.40112)0.734:0.09967,((A0A3A0CIY8:0.56468,(M5TV13:0.58722,(((A0A5M8T0C4:0.39934,(A0A517QZS4:0.51402,(A0A1I3ASZ8:0.58576,A0A142WXM8:0.36552)0.054:0.08276)0.881:0.08765)0.159:0.06910,((L8DCB7:0.40342,A0A559QUQ0:0.58106)0.810:0.10427,A0A6I3JCD7:0.52187)0.804:0.08523)0.512:0.05097,((A0A545SWJ1:0.49357,(A0A7K0PXP3:0.34103,A0A3L7AS01:0.48434)0.997:0.22547)0.496:0.04776,(((A0A1E4ZRC1:0.60592,A0A261GFC6:0.35215)0.936:0.16295,A0A3M6RIW2:0.58233)0.826:0.13822,(A0A4D4JQY3:0.44026,A0A7T9Q9A5:0.54919)0.772:0.08784)0.188:0.06948)0.652:0.06206)0.924:0.15190)0.940:0.17912)0.247:0.10911,(A0A524F5W7:0.94296,A0A1V6G761:0.50185)0.258:0.10933)0.969:0.20631)0.589:0.04477)0.944:0.14057)0.482:0.02117)0.819:0.04184,((((((((((U4KTH3:0.77127,((A0A1S1NT53:0.74112,A0A2D5EB16:0.66684)0.920:0.18610,(A0A286BYP3:0.69267,(E1X5W3:0.73628,(A0A8A4E1J0:0.56482,(A0A7W3U4Q6:0.69651,A0A2T0QIC2:0.59912)0.000:0.13627)0.160:0.13495)0.511:0.11388)0.408:0.04763)0.984:0.28772)0.732:0.04177,((I0JJN7:0.47859,(A0A1C6G4I3:0.69952,(A0A3R5WDL8:0.58374,A0A3E2XP75:0.49614)0.816:0.09152)0.890:0.10398)0.979:0.19601,((((A0A202DEV6:0.64707,A0A6M1TB84:0.51998)0.987:0.31926,(A0A7W8IWX5:0.64274,A0A1G8CEE1:0.52253)0.887:0.17512)0.896:0.11013,(((A0A7Y0WS86:0.65397,(A0A7U5N8X8:0.51370,A0A7L4WSR8:0.58413)0.370:0.15223)0.945:0.16640,((((A0A529U4U5:0.58033,A0A2T5XPL1:0.55437)0.921:0.12859,A0A4P8QJS0:0.58608)0.919:0.12493,A0A2A3VLQ3:0.57692)0.712:0.04657,(K2K784:0.53701,A0A4Q3YT09:0.47953)0.893:0.12744)0.759:0.05205)0.639:0.04678,(((A0A6S6SAG2:0.55927,A0A7H8SEW2:0.62188)0.825:0.20315,A0A4Q0MUA6:0.69800)0.658:0.04729,A0A2S9KF84:0.68256)0.570:0.08439)0.922:0.09671)0.705:0.06948,((A0A7U2KTX2:0.56887,((A0A1E3G752:0.81261,A0A2E6Z9I7:0.61448)0.840:0.12326,(A0A651FKZ1:0.53812,A0A2S7BY03:0.71002)0.845:0.20289)0.693:0.08512)0.815:0.09230,((A0A2E1Q1G6:0.70170,A0A315CA38:0.66666)0.738:0.11882,A0A6N6VNB7:0.40095)0.942:0.14260)0.853:0.06882)1.000:0.31552)0.901:0.09680)0.575:0.04932,(A0A1Y4DX26:0.81103,A0A3C1DA65:0.81173)0.988:0.48727)0.905:0.08920,(A0A5C0SJW7:0.80660,(A0A174EVV8:0.75213,(A0A1C5TKL9:0.61087,(A0A413S246:0.61790,(R6ENK7:0.61641,A0A7U6KER9:0.45633)0.244:0.13177)0.894:0.13746)0.913:0.17352)0.968:0.24543)0.997:0.29762)0.076:0.01045,A0A4Q0ZWU5:1.04474)0.942:0.10409,((((A0A2A2N6V7:0.65202,A0A6I7DBK1:0.79642)0.904:0.18243,((A0A167IYL6:0.58301,(A0A0T9LB76:0.47028,A0A5S3WMD4:0.79744)0.908:0.19208)0.666:0.08156,((A0A509YJI1:0.39726,Q7MKL2:0.43701)0.978:0.17942,(A0A3S5BZ18:0.50041,A0A2G2HHQ9:0.36741)0.247:0.08426)0.887:0.06844)0.746:0.03128)0.999:0.30855,(((A0A3R6RE91:0.47900,(A0A4V3RYP2:0.48552,A0A7U9SC39:0.56081)0.347:0.06170)0.569:0.10972,(A0A8B5Y3N1:0.47749,(F1T8Z5:0.46425,A0A2A7AQX3:0.44337)0.882:0.14530)0.918:0.16397)0.832:0.07694,(((A0A2G2MIC4:0.56831,(A0A1M7IFD3:0.51847,A0A1I6HZH8:0.61934)0.620:0.09250)0.854:0.06460,(A0A5C1G6C6:0.48352,A0A371S6Z3:0.42079)0.724:0.05120)0.053:0.04429,(A0A6G8ALK5:0.82906,A0A1S8TKN2:0.42714)0.845:0.21293)0.883:0.08323)0.822:0.09253)1.000:0.37953,(((A0A1Y4N5E2:0.28813,(A0A658JSF7:0.54880,A0A2A7AJ35:0.53330)0.892:0.20124)1.000:0.79908,((A0A661HKC1:1.07114,A0A1G1V1Y3:1.55756)0.976:0.53287,(M4U5P9:0.72534,(A0A7L8QKD3:0.88314,((A0A1E8FE34:0.56660,(A0A382GGX9:0.59700,((A0A5C7LPJ9:0.61414,A0A1G7UPP1:0.35967)0.349:0.06373,A0A3M2CTV6:0.96292)0.886:0.18791)0.326:0.08459)0.909:0.12801,A0A2K7SZ61:0.71706)0.864:0.09190)0.098:0.10495)0.884:0.16016)0.808:0.13386)0.000:0.17284,(A0A839JPI2:1.47449,(((A0A060UQT7:0.81087,((A0A1L5QMC7:0.76727,A0A1B8YIM8:0.51901)0.499:0.02912,((A0A6G8JFW3:0.59507,(A0A750HWH1:0.53907,A0A437QRU2:0.67637)0.396:0.11989)0.948:0.18104,(A0A7X2ICF5:0.59666,A0A1E7D7S1:0.54527)0.238:0.07582)0.817:0.09801)0.852:0.05217)0.761:0.04254,(A0A482ZGF3:0.66821,A0A2M7HVL5:0.52056)0.943:0.17681)0.955:0.24568,(K1YN85:1.16947,(A0A1F6DG67:0.65490,A0A521GP55:0.78322)0.861:0.29371)1.000:0.98920)0.293:0.07786)0.440:0.16138)0.730:0.05084)0.228:0.05234)0.801:0.10853,((K1YJ08:1.19448,(A0A1Y4D6V3:0.60036,A0A848CC69:0.39479)1.000:1.32062)0.620:0.06421,(A0A268NW96:1.42148,(A0A0G0BGG4:0.73207,A0A357G6D1:0.72333)0.944:0.32049)0.481:0.14438)0.726:0.15198)0.632:0.12845,A0A420Z7W1:0.90155)0.476:0.06383,((C6C382:0.76983,(A0A6P2GI26:0.56040,A0A4P6B4I5:0.63885)0.000:0.13447)0.985:0.31645,(A0A120LUV8:0.80507,A0A4R0PEV5:0.87900)0.776:0.14694)0.928:0.20240)0.564:0.09659,((((A0A3D6DGX2:0.97327,((((A0A4Q4AJF4:0.61800,A0A374RNP6:0.70718)0.657:0.16249,(A0A2T5JZ32:0.48101,A0A2V4MXS3:0.41728)0.919:0.18131)0.390:0.07977,(A0A3N0AT12:0.41913,A0A1Y4BKD3:0.43827)0.890:0.12889)0.972:0.17671,(((((((A0A511ITH3:0.68781,((A0A4R0Z4S4:0.45947,(A0A3M8H4J5:0.41665,B9E9Y3:0.40812)0.903:0.11345)0.919:0.12081,(A0A2G5VZ17:0.36431,A0A7L8R307:0.46495)0.909:0.10828)0.474:0.10138)0.117:0.06101,A0A2E0UMP0:0.66641)0.241:0.02715,((A0A7T5CI75:0.59197,(A0A2X4TP36:0.36293,A0A4R5PI99:0.51714)0.753:0.11846)0.581:0.09952,(A0A2N1QUC8:0.48234,A0A1I7IP24:0.50050)0.879:0.09906)0.752:0.05914)0.656:0.01139,(A0A0G0BN90:0.45607,A0A127V9G1:0.48774)0.826:0.06424)0.035:0.01405,(((A0A829G084:0.36566,((((A0A3A1WIF7:0.55605,A0A375FCM2:0.33584)0.955:0.14645,A0A1X7FB28:0.33378)0.811:0.07157,(A0A1S6FJR2:0.60790,(A0A5C4XRK9:0.50409,A0A443IK64:0.40323)0.000:0.10273)0.882:0.10944)0.422:0.06425,A0A5S3TKL8:0.39528)0.626:0.06435)0.943:0.11048,(((A0A3Q9V5C4:0.51292,A0A0F2E545:0.26335)0.145:0.08214,A6W1H0:0.59746)0.948:0.10618,((A0A5C8ED44:0.37710,(A0A4R0FAL2:0.48015,(N9R133:0.32545,A0A1G6PZM7:0.50462)0.899:0.12238)0.911:0.12258)0.909:0.11875,((A0A8A8C4R3:0.51864,A0A377R2E1:0.40822)0.654:0.08242,(A0A5R9BU29:0.45932,A0A5A5TYR4:0.44580)0.987:0.25479)0.930:0.11990)0.582:0.02967)0.135:0.02035)0.996:0.17584,(((A0A2P2DQX3:0.58447,A0A1G3UCI0:0.41792)0.156:0.04252,(((A0A7G5XFR0:0.59230,A0A257K5R2:0.57984)0.091:0.06250,A0A543G857:0.61088)0.905:0.13360,A0A0G1AWZ5:0.48588)0.872:0.08526)0.540:0.08850,(A0A7K1ZRA7:0.56531,A0A2G7H0Y5:0.69522)0.953:0.20149)0.978:0.14084)0.889:0.06798)0.696:0.06104,((U1HNM0:0.58784,((A0A4R8FFH2:0.51939,(A0A3M5Y0G6:0.58862,A0A7Z0B2A4:0.41813)0.817:0.07943)0.895:0.07735,A0A1V2V7Y9:0.54048)0.669:0.04148)0.699:0.06012,(A0A2N3F7S0:0.38628,A0A1E3Y6T3:0.50805)0.000:0.13163)0.957:0.11227)0.854:0.04335,(((A0A7C5FUK9:0.43263,B8J4W6:0.47610)0.928:0.13019,((A0A239J3H4:0.58370,(A0A5C5XWA2:0.53736,A0A6V7BSW7:0.66381)0.669:0.13783)0.918:0.13700,(A0A0A1FCI1:0.48669,(R7G4H2:0.56810,(A0A3G2W9F9:0.50918,A0A246IDZ3:0.40283)0.987:0.25167)0.241:0.10023)0.446:0.04247)0.317:0.04608)0.799:0.03216,((((A0A4Y8W9C6:0.35562,(A0A432XGE6:0.46529,A0A7Y4YNY3:0.49714)0.058:0.09381)0.537:0.06272,(A0A3S0WZB9:0.57199,(A0A0Q8AXE6:0.46304,A0A2G0VQF1:0.34937)0.965:0.20397)0.910:0.12692)0.899:0.07039,((A0A699GDL5:0.44657,R6J3U1:0.57665)0.000:0.09827,A0A315EMF7:0.48708)0.882:0.11425)0.718:0.02651,(A0A0G1YXM6:0.54616,(A0A480A4H3:0.47907,(A0A6H2BWV1:0.35622,B1WTX0:0.28952)0.000:0.08098)0.693:0.07183)0.955:0.10023)0.385:0.01626)0.793:0.01939)0.801:0.08038)0.945:0.14802)0.859:0.08442,(((A0A329Z8Q9:0.45535,(A0A255TEM0:0.49692,(A0A1Y3YXB3:0.44155,(A0A349DTE5:0.56469,(A0A2U2P9I1:0.33562,A0A4Q3GXB5:0.23524)0.546:0.05461)0.347:0.06733)0.915:0.11952)0.414:0.04754)0.782:0.07702,((A0A426R7U6:0.48440,(A0A497ZE76:0.38111,A0A1Y4V4G6:0.54282)0.820:0.07289)0.328:0.07034,(A0A4Z0PKM5:0.50654,A0A7U3ZJ92:0.41918)0.914:0.16905)0.246:0.05536)0.970:0.15253,(A0A3N2KTF9:0.75164,(A0A4R6STT1:0.47117,A0A3D6BEX3:0.70264)0.042:0.02427)0.863:0.09687)0.558:0.07598)0.214:0.04380,(A0A1G7IQS8:0.41913,A0A096CU58:0.35966)0.999:0.31936)0.948:0.09043,(((A0A847YUB9:0.67345,(((((A0A4Q2UMN3:0.50815,A0A7C5JJ29:0.64258)0.735:0.05588,F4L2L2:0.48198)0.524:0.09123,(A0A3B9HJY7:0.72826,(A0A0X8G537:0.44354,A0A1H7BW72:0.47393)0.695:0.15628)0.867:0.12822)0.402:0.07645,(A0A2N2VUZ8:0.72483,(A0A3M1XY97:0.57980,(A0A7V4YT00:0.54050,A0A7Y5R4K9:0.67895)0.834:0.14563)0.866:0.15509)0.197:0.04996)0.934:0.13704,(A0A286IR28:0.48883,F4L831:0.78723)0.918:0.25224)0.937:0.15800)0.818:0.06538,((A0A5C7FCE5:0.57576,A0A520XGB5:0.70570)0.824:0.19549,(A0A349D5U3:0.70030,(A0A8A5DY34:0.65050,(A0A661EH64:0.55897,A0A6N8ECM6:0.38418)0.942:0.24705)0.914:0.17500)0.797:0.10536)0.877:0.07855)0.738:0.02854,(((A0A7K1UGW9:0.70818,A0A1G2VU88:0.62705)0.735:0.21734,(((A0A0F0L4Y0:1.00289,A0A3N2C765:0.57564)0.397:0.10851,(A0A5J5IQ12:0.62380,A0A7X7Q856:0.92443)0.733:0.17783)0.977:0.25479,((A0A5P2BY17:0.62690,A0A839IED0:0.65000)0.067:0.07188,((F5XG09:0.51239,A0A4V1Z2G7:0.49898)0.183:0.08717,(A0A365CWF1:0.50146,A0A542R1X2:0.61243)0.996:0.45649)0.810:0.07834)0.982:0.23067)0.490:0.12452)0.878:0.13823,((((A0A1Z4UJ08:0.40917,(A0A4Q5WYX7:0.65203,A0A3R7G947:0.56324)0.860:0.18217)0.963:0.25774,((A0A450U8A4:0.56059,A0A6G7ZTR9:0.45453)0.000:0.10793,(A0A1H3Q121:0.62847,(A0A2E9CHQ2:0.41128,A0A154L339:0.58578)0.970:0.23292)0.724:0.09880)0.988:0.27583)0.907:0.18052,(A0A434A2G2:0.51643,(A0A381FBL1:0.43197,A0A1H4FZM5:0.54842)0.796:0.14464)0.972:0.27834)0.304:0.05364,A0A2M9X8C6:0.74608)0.939:0.13510)0.963:0.16607)0.594:0.04459)0.962:0.12715)0.604:0.05865)0.764:0.04093,(A0A7X7TSB4:0.87383,(A0A2G6PLS9:0.57728,(A0A0F9BDF5:0.99228,A0A2D6NFY2:1.07158)0.158:0.20073)0.845:0.21561)0.933:0.15789)0.869:0.07958,((((A0A1F5ECS9:1.03719,((A0A2M7XEI2:0.51669,A0A0G1L357:0.83852)0.941:0.27433,A0A3B8LUX1:1.12125)0.047:0.11022)0.738:0.04654,((A0A1G2FIW9:0.83497,A0A2G9YW18:0.83117)0.871:0.23318,(((A0A1G1XRC6:1.08689,A0A2G9YW32:0.57560)0.863:0.26501,A0A0G0XE80:1.25071)0.235:0.24419,(A0A1F5EC00:0.79991,A0A1G1W8T9:0.62438)0.913:0.22611)0.451:0.16102)0.085:0.11278)0.152:0.09494,((A0A3M1B7D4:0.56829,(A0A2E9QPB3:0.59321,A0A2E8FF66:0.72326)0.829:0.15413)0.887:0.16224,(A0A0G1BMA6:0.55490,A0A0G1XH55:0.52889)0.993:0.36708)0.866:0.11031)0.607:0.12402,A0A3D2P996:0.75951)0.778:0.06653)0.935:0.15719,((A0A1M4SXX9:1.39433,A0A842UQP2:1.61569)0.453:0.06060,(A0A0G1LFI7:0.88617,(A0A1G2C5I4:0.78740,(A0A2A4T2K0:1.00074,(((((A0A3A4UT07:0.46571,(A0A0G0HAC7:0.63209,A0A2D9Y5Z3:0.58113)0.881:0.18347)0.670:0.05481,(A0A1G2QXX7:0.54841,A0A1F5EA23:0.58665)0.276:0.06139)0.487:0.04400,(A0A2H0R4M2:0.92540,(A0A7C4EMN9:0.71004,((A0A521Z9G4:0.92186,A0A521Z981:0.68828)0.729:0.08274,A0A2A4SFJ0:1.06169)0.600:0.07014)0.823:0.07118)0.744:0.07117)0.435:0.07774,((A0A7C4M0A5:0.56157,A0A1G2V187:0.57562)0.947:0.22891,A0A662FHD3:0.61957)0.590:0.07707)0.133:0.08918,A0A1F6D0X8:0.96259)0.724:0.10072)0.447:0.05462)0.988:0.45232)0.976:0.37182)0.868:0.14198)0.136:0.03627)0.846:0.20119)0.402:0.11056)0.776:0.11851,(A0A1F5E8X8:1.43337,(A0A563CWI9:0.95437,(A0A1H5IQK5:0.70438,((A0A327M0Y7:0.50042,A0A124JXZ2:0.71766)0.783:0.08899,((C6B8P7:0.83267,((A0A651FJR2:0.51462,A0A1V1UJF8:0.74012)0.880:0.16445,A0A239LZ48:0.77422)0.132:0.03258)0.773:0.05327,((A0A483PCB8:0.63255,A0A1H3PXH4:0.49427)0.141:0.06059,A0A1H4ENW9:0.67333)0.958:0.16797)0.891:0.13185)0.890:0.25053)1.000:0.86521)0.698:0.18163)0.662:0.11617)0.963:0.37075,(((((A0A151PAZ2:1.30267,G0W425:0.82801)0.452:0.21772,(((((((A0A0N5CAE9:0.77820,A0A6H5JDM0:0.81929)0.886:0.18502,(((A0A812JMP5:0.44904,A0A812XXH2:0.50246)0.982:0.31238,(A0A1Q9ELP9:0.78733,((A0A1Q9EL10:0.54853,A0A1Q9C1P7:0.41703)0.464:0.08247,(A0A813BA18:0.46100,A0A812TR93:0.63488)0.000:0.12988)0.952:0.19106)0.125:0.06951)0.994:0.34276,(((A0A813J3M3:0.55352,A0A813EEW1:0.54099)0.969:0.30424,((A0A812PPY0:0.64287,A0A2E6D553:0.50167)0.840:0.19214,(A0A813EM64:0.45180,A0A812Q5R4:0.80148)0.517:0.07117)1.000:0.84317)0.580:0.12006,(A0A1Q9DWN5:0.52750,A0A812Q257:0.42750)0.983:0.34724)0.938:0.20146)0.637:0.09684)0.238:0.02579,(A0A2G2BT73:0.83431,A0A2G2CC65:0.55834)1.000:0.98654)0.278:0.03040,((((A0A5J4YVK7:0.47506,A0A5J4YKV7:0.54526)1.000:0.77065,(((A0A5J4YKT1:0.53314,A0A5J4YRZ9:0.67686)0.936:0.27669,(A0A0B1P8M7:0.72134,(A0A5J4YVH7:0.46517,A0A5J4YJ22:0.67747)0.996:0.61786)0.921:0.26791)0.993:0.46098,((A0A813DG53:0.92331,A0A812SN85:0.99565)0.543:0.22914,(((((A0A813A0Y7:0.71841,(A0A812NKR6:0.52148,A0A812NQH4:0.48477)0.859:0.20895)0.844:0.12406,(A0A813C185:0.69523,(A0A812HGZ8:0.57680,A0A1Q9E1U0:0.63624)0.796:0.21890)0.947:0.26690)0.905:0.14214,(A0A1Q9BTN0:0.81237,((A0A812IWD9:0.90060,A0A813BNH6:0.54503)0.932:0.31722,A0A813GTY4:0.66182)0.804:0.08862)0.848:0.13658)0.771:0.08588,(A0A1X6NS11:1.16162,((A0A6J8EBP7:0.44044,A0A8B6GIJ0:0.40743)0.965:0.24630,(A0A6J8BGQ4:0.48482,A0A6J8DES9:0.54691)0.653:0.12291)0.875:0.17412)0.910:0.24850)0.000:0.10352,(((A0A812UHJ9:0.57509,A0A812WV23:0.49569)0.868:0.19051,(A0A813AZX0:1.09509,(A0A812S955:0.36730,A0A813LW24:0.86306)0.927:0.23027)0.222:0.12488)0.959:0.21341,(A0A1Q9CZR7:0.75666,A0A1Q9BWJ7:0.85057)0.257:0.09397)0.837:0.10082)0.764:0.06747)0.000:0.13137)0.408:0.10733)0.921:0.15421,((A0A0G4F0B1:0.87156,A0A0G4HH60:0.53425)0.992:0.55525,(((A0A5J4YWQ4:0.45914,((A0A5J4Z2M0:0.73990,A0A5J4YR09:0.86332)0.760:0.18261,A0A5J4YHU0:0.49764)0.944:0.22450)0.818:0.12821,A0A5J4YK31:0.54263)0.998:0.64432,(A0A0G4GTW9:0.97288,A0A0G4GK45:0.46422)0.997:0.55395)0.575:0.12748)0.715:0.12436)0.332:0.08240,(A0A812PMC7:1.11904,(A0A812NE54:0.79504,((A0A1Q9E4J6:0.85048,((A0A812NU20:0.70745,(A0A812NXW6:0.50646,A0A1Q9DRV8:0.54910)0.826:0.20169)0.896:0.22653,((A0A812MIJ6:0.69476,A0A812MMC4:0.51137)0.807:0.16318,(A0A1Q9ESD2:0.53279,A0A812LBL1:0.68451)0.787:0.08249)0.199:0.08857)0.582:0.12435)0.878:0.14634,A0A1Q9DAN9:0.65149)0.852:0.12667)0.810:0.16917)0.980:0.32076)0.833:0.08420)0.919:0.12187,((((((A0A7S0MIJ9:1.02638,(A0A7S0MLG9:0.41357,A0A7S0MWG7:0.76253)0.967:0.35475)0.895:0.19545,((A0A7S2DY95:1.06292,A0A2D7I431:1.17310)0.716:0.29993,(A0A7Z9GBU3:1.22335,A0A7S0VXP3:0.87415)0.733:0.10981)0.399:0.12804)0.963:0.20593,((A0A6U3WTI5:0.63952,A0A6U2QN21:0.48662)0.000:0.15533,(A0A7S4EQ58:0.73046,K0T1Z6:0.95887)0.175:0.07273)0.938:0.17586)0.700:0.05146,((((A0A146H1W6:0.85934,(A0A0G4J1F0:0.71703,(A0A4Q4N0G8:0.51210,(A0A0F7ZQQ4:0.77237,((((A0A1W5CVI0:0.70132,K2RFW9:0.33867)0.933:0.14867,((A0A545A995:0.57274,A0A4V1X6S2:0.49680)0.087:0.06772,A0A7J6WSV2:0.71367)0.168:0.04781)0.751:0.12486,((A0A1V6NX08:0.39566,(B8LX39:0.46799,A0A7J6X434:0.44527)0.531:0.06526)0.809:0.07673,A0A1S9RI25:0.77599)0.800:0.07730)0.132:0.04807,(A0A0B4G6Q7:0.51242,A0A2A9P685:0.51054)0.705:0.17532)0.326:0.07442)0.367:0.12091)0.983:0.30792)0.124:0.10337)0.921:0.19753,(((A0A7D9GZ32:1.06460,(A0A4P6XSJ0:1.32429,(A0A642UPC8:0.85305,A0A642UTN9:0.81907)0.997:0.72917)0.814:0.18439)0.648:0.01955,((A0A0L0G105:0.79754,(M3J0M0:1.89811,((A0A0M0JUF0:1.02357,A0A2D5A6R0:1.05878)0.803:0.31722,A0A2G2CC37:1.53698)0.262:0.13059)0.090:0.11015)0.580:0.17444,A0A0G4FE94:1.11826)0.798:0.11922)0.867:0.10074,(((A6QSW3:0.53858,A6XPC4:0.42750)0.893:0.19298,(A6R9R0:0.66152,(A0A1E3BJX2:0.60228,A0A0M8NTR0:0.55610)0.349:0.07819)0.874:0.10988)0.931:0.13315,((A0A1V6PPM4:0.77282,((A0A545UL69:0.95041,(A0A0F7ZEZ0:0.29662,A0A175W1H5:0.51498)0.854:0.15997)0.487:0.10677,T0JUS0:0.40308)0.990:0.33300)0.565:0.13613,(B6H6V9:0.40818,A0A1V6NJM9:0.55467)0.971:0.27682)0.957:0.20766)0.974:0.17957)0.775:0.05276)0.932:0.11687,((((A0A535F6S8:0.75035,(A0A7S4K281:0.75743,S8BYT8:0.65737)0.992:0.44408)0.300:0.15572,(((A0A7S4UB65:0.67326,A0A7S4P6K7:0.60715)0.995:0.52310,(A0A507FAR3:1.27740,(A0A7S0XE50:0.96906,A0A096PAH2:0.84535)0.866:0.22666)0.856:0.19888)0.258:0.06974,(A0A0G4EN14:0.83973,(A0A2I0XJJ4:0.97560,(A0A2E0WBG3:0.79648,A0A2E0WEF7:0.70227)0.974:0.40745)0.820:0.14258)0.292:0.08025)0.892:0.13248)0.743:0.05697,((((((((((A0A225VMT5:0.54583,(A0A6G0WFC0:0.49891,A0A6G0WJ78:0.48136)0.000:0.12935)0.086:0.10515,(A0A6A4A4L0:0.25943,(F0W9N8:0.32578,((F0WDL5:0.42312,A0A6A3IQM1:0.25708)0.913:0.09862,A0A2P4Y1J4:0.30663)0.951:0.14395)0.593:0.03702)0.999:0.50658)0.981:0.26251,A0A507D6Y1:0.71060)0.801:0.15280,(T1IUK0:0.74307,(A0A6G0WAE5:0.60883,A0A6A4YY14:0.53801)0.991:0.36887)0.351:0.13311)0.000:0.05552,(((A0A177VF51:0.45862,(A0A177TY21:0.46471,A0A177V567:0.53135)0.622:0.10910)0.899:0.14030,(A0A481SHG6:0.44081,I2FQB5:0.80193)0.900:0.15014)0.227:0.05130,(A0A177T395:0.44067,A0A075B3L7:0.47254)0.844:0.13222)0.735:0.04251)0.866:0.05965,(((A0A535F675:0.48310,A0A225UZ82:0.94686)0.792:0.10878,((A0A6H5JBN2:0.69417,(A0A6H5J594:0.35576,(A0A6H5JAZ5:0.58268,(A0A6H5KL18:0.42028,A0A6H5L4B2:0.62661)0.692:0.07470)0.950:0.20860)0.932:0.21830)0.954:0.22053,A0A0P7B6H7:1.05848)0.744:0.09889)0.954:0.17135,((A0A2D4IVV2:0.66659,(A0A6A4Z1V0:0.81073,A0A2D4PTW8:0.54390)0.758:0.15847)0.738:0.11467,((A0A075AQ97:0.55008,(A0A6A3N2N0:0.57790,A0A225VVC4:0.35772)0.938:0.19639)0.858:0.15570,((A0A0F8BLC2:0.63768,A0A7S3FKM4:0.99146)0.822:0.19578,(A0A2H2J2C1:0.63582,(A0A0F4GH69:0.38843,A8U3S6:0.47406)0.997:0.43529)0.291:0.11701)0.723:0.09888)0.874:0.09905)0.882:0.07780)0.881:0.08686)0.849:0.09082,(((((A0A4S4LR26:0.23593,A0A1M2VBJ6:0.38952)0.982:0.21891,(A0A0C3NU01:0.58175,(A0A4S4LIF7:0.49357,A0A4S4K5L2:0.54990)0.839:0.07870)0.677:0.13340)0.783:0.06975,(((((A0A369K9V4:0.37454,(G4TS75:0.26078,A0A286UJG5:0.44712)0.899:0.11490)0.707:0.08142,K5WU74:0.35890)0.969:0.14328,(A0A409WSZ3:0.60711,A0A0C9Z7U5:0.62162)0.935:0.21023)0.967:0.14734,A0A060S5X4:0.43984)0.841:0.06308,((A0A2R6NJS8:0.67057,(A0A1C7MSU6:0.34797,A0A4Y9ZNB6:0.52345)0.975:0.21559)0.462:0.07162,(A0A4S4M556:0.44193,(A0A284R0J7:0.48328,A0A0C3NCP2:0.44020)0.978:0.23525)0.674:0.02175)0.883:0.06665)0.701:0.04911)0.994:0.16313,((((((A0A4Q3L7G6:0.77859,(A0A4Q2D5Y2:0.43943,A0A409WC63:0.31242)1.000:0.46804)0.308:0.12475,(A0A1Z9QE82:0.70974,F2UGZ7:0.57528)0.912:0.20392)0.888:0.13047,(((((A0A1Z5KHE7:0.76054,(A0A7S4AT86:0.63831,A0A7S2P942:0.55232)1.000:0.68517)0.958:0.35203,((A0A5D3AWJ7:0.53924,A0A427Y2R1:0.40830)0.868:0.17380,(A0A177VLW9:0.47540,A0A177U1H6:0.55641)0.975:0.24591)0.580:0.11311)0.766:0.03766,((K9FAB9:0.80095,(A0A0F8DDM1:0.97377,A0A350JKC4:0.78476)0.000:0.12482)0.516:0.05742,A0A0P1BK82:0.79279)0.875:0.11909)0.889:0.06215,(((A0A5S6QJY9:0.55216,(A0A7S0BLZ1:0.67152,(((A0A2X0M4D8:0.30902,A0A2X0N209:0.22746)0.962:0.17600,A0A2X0L097:0.20379)0.416:0.02363,A0A2X0P749:0.29677)0.998:0.38517)0.719:0.12969)0.927:0.14747,((((A0A6A4ZIQ0:0.77400,(A0A507CYQ3:0.73064,(A0A507BR27:0.53332,A0A286QJ36:0.40725)0.970:0.26699)0.634:0.05591)0.810:0.14581,A0A814GH42:0.49280)0.657:0.06873,(A0A507BSG4:0.40721,(A0A507DC08:0.52327,A0A507DGU4:0.40606)0.283:0.07527)1.000:0.33081)0.125:0.04372,F0WU01:0.81329)0.826:0.07626)0.734:0.05386,(((A0A5B0M5T1:0.43480,(A0A0C4EZI6:0.59187,((A0A0L6V7B7:0.41163,A0A2N5UH98:0.15149)1.000:0.76085,(A0A2S4VN28:0.58542,A0A2N5VQK7:0.42727)0.446:0.15038)0.851:0.13076)0.803:0.08952)0.883:0.13364,A0A7S4MPX6:0.58843)0.930:0.10717,(B7S988:0.58627,A0A7S0MTK3:0.69429)0.952:0.22013)0.890:0.08081)0.915:0.08853)0.542:0.06966,(A0A329SK86:0.63727,(F0W8W0:0.34968,(A0A6A3MX40:0.44055,(F0WSF3:0.49118,F0W3P3:0.28285)0.898:0.11937)0.000:0.09232)0.961:0.18993)0.973:0.27311)0.115:0.02059)0.544:0.04945,(((A0A7S0MH90:0.57814,F2U251:0.60115)0.911:0.21776,((A0A409WYF4:0.49588,A0A5E3X9D7:0.65503)0.980:0.25120,(A0A4S4LF50:0.66272,A0A0G4J0Y5:0.83441)0.283:0.14209)0.520:0.09338)0.560:0.09826,(((A0A507CUE0:0.60405,(A0A507C1N5:0.54426,A0A507BIQ2:0.43050)0.057:0.06747)0.962:0.16996,((A0A6S7H7M4:0.52556,A0A6S7I6Q9:0.43181)0.877:0.11972,A0A1F5L057:0.77862)0.889:0.10347)0.610:0.08438,(W7SZA5:0.60300,A0A535F517:0.50292)0.944:0.17566)0.718:0.05870)0.889:0.08795)0.491:0.03850,(((A0A2G8SNB7:0.65176,A0A060S241:0.37205)0.927:0.19390,(((((A0A834L7M0:0.64726,(A0A075B0S6:0.47611,A0A537R0H1:0.31598)0.357:0.08825)0.875:0.11115,(A0A7S4DAV7:0.46675,A0A085N3G0:0.64372)0.825:0.13588)0.430:0.06174,(((A0A182G4A7:0.44299,A0A182HBD9:0.45607)0.974:0.18233,(((A0A182H4J9:0.36839,A0A485LF21:0.67864)0.000:0.08636,(((A0A1Y1NGN0:0.48451,A0A1Y1JXC3:0.54478)0.940:0.14864,(A0A4C1T9G5:0.56989,A0A1Y1N9F7:0.44539)0.115:0.07268)0.398:0.06865,A0A1Y1JUX7:0.51770)0.830:0.08314)0.795:0.05992,A0A194PHT8:0.60266)0.720:0.08535)0.897:0.08226,(A0A6S7H8C9:0.46522,H3HA00:0.24784)0.963:0.17842)0.765:0.06407)0.791:0.02927,(((((((A0A6A3HS58:0.39795,(A0A225VLV4:0.40540,A0A6G0WRV3:0.53325)0.906:0.12668)0.000:0.02675,A0A6A3L5X2:0.36860)0.942:0.11332,A0A6S7KKS5:0.47841)0.677:0.06109,((A0A2P4XFT6:0.43943,A0A2K1IY07:0.55526)0.670:0.10338,(L8H7M5:0.53021,L8GIM9:0.69708)0.930:0.20112)0.239:0.08860)0.630:0.05190,(A0A6G0WCN5:0.39897,M5C545:0.55076)0.831:0.16532)0.869:0.08998,(R7QQY1:0.49820,(A0A507DTC0:0.39018,(A0A507DZK9:0.42752,A0A5C3ERV5:0.38120)0.924:0.17905)0.661:0.10199)0.549:0.09346)0.379:0.05364,((A0A507DQS9:0.44476,A0A6G0WGN3:0.53531)0.909:0.17856,(((((A0A699GU40:0.50389,Q2QW17:0.21866)0.835:0.08791,A0A438IVL6:0.34701)0.391:0.03803,(Q9XEC2:0.37148,(Q9SZY0:0.30382,A0A438DJ20:0.34251)0.271:0.06649)0.547:0.08787)0.892:0.07227,(A0A176W9J0:0.48905,(A0A1R3JHG4:0.41918,A0A6A2Y4D7:0.25945)0.933:0.10701)0.370:0.05406)0.979:0.12271,((A0A5N6NFK0:0.19652,(A0A699H2T0:0.39802,A0A438FV67:0.22703)0.556:0.09701)0.995:0.18315,((A0A2N9G0N8:0.38820,(A0A2N9HGQ5:0.22727,A0A2N9EE71:0.09927)0.941:0.09781)0.693:0.05573,((A0A5A7VI97:0.24726,(A0A2I0KTQ4:0.18420,A0A699HWE3:0.38509)0.872:0.09454)0.975:0.15421,A0A2N9ENZ7:0.26360)0.982:0.14737)0.968:0.12056)0.945:0.10656)0.928:0.07968)0.651:0.05474)0.112:0.01746)0.862:0.04586,(((A0A034VRL5:0.41975,A0A5J4YKB1:0.57907)0.872:0.13050,((A0A821U0H2:0.43603,(A0A0J7K1E5:0.48581,(A0A085N5F5:0.42140,A0A0V0ZUS1:0.33634)0.855:0.13230)0.866:0.10519)0.904:0.12872,((A0A1Y3E9R1:0.50985,(A0A821W5Q2:0.58703,A0A4Y2DBF7:0.43778)0.762:0.07854)0.773:0.05463,(A0A0A9W1E1:0.57239,(A0A6H5FV69:0.31511,A0A034VP70:0.36201)0.003:0.07194)0.800:0.07392)0.945:0.11462)0.919:0.08332)0.526:0.06238,(A0A5E8B0Q7:0.37478,(A0A085N9K0:0.49805,T1JFF8:0.47230)0.902:0.16628)0.831:0.06577)0.660:0.04858)0.638:0.02430)0.303:0.00952,((((((A0A507D162:0.85308,((((A0A151S487:0.43677,A0A5A7U4R4:0.25627)0.839:0.04941,(((A0A438IX92:0.19063,A0A5H2XMW7:0.31203)0.855:0.07110,((A0A251VGU8:0.38035,A0A6L2JPX3:0.55609)0.859:0.09668,A0A2Z6PKM9:0.35234)0.291:0.05886)0.501:0.06901,(A0A438JI96:0.39505,(A0A5B6WLL2:0.31420,(A0A438G0Z4:0.32499,A0A438HST1:0.18598)0.007:0.02913)0.931:0.08974)0.885:0.07494)0.462:0.05704)0.803:0.05290,(((A0A6L2KCR0:0.25738,(A0A6L2NA77:0.26189,A0A6L2MC66:0.38496)0.561:0.04189)0.994:0.18869,(A0A6L2N8Q0:0.27253,(A0A6L2KA16:0.18068,A0A699GMK2:0.19455)0.997:0.21340)0.722:0.04904)0.569:0.07261,((A0A2N9EG92:0.06225,A0A6L2LIF4:0.58176)0.889:0.06267,(A0A5D3C1P5:0.36386,(Q9LP05:0.24020,A0A438I1P6:0.35839)0.144:0.06011)0.906:0.09301)0.152:0.03949)1.000:0.34712)0.799:0.08738,((A0A2Z6P5J6:0.45838,A0A2Z6NY36:0.26908)0.957:0.14660,(B9GC98:0.33025,(A0A699H563:0.38746,Q9MAR7:0.26778)0.884:0.09217)0.942:0.10465)0.881:0.08437)0.433:0.08203)0.853:0.07463,(((A0A7S3Z780:0.81952,((A0A2K1LB07:0.58608,(A0A2K1INW5:0.45089,A0A7I4BZ14:0.58746)0.995:0.36621)0.859:0.14587,(((A0A0K0FCE4:0.71103,(A0A0N5CBC5:0.82936,(A0A0N5BJE0:0.55274,A0A0K0EMU9:0.55802)0.965:0.31978)0.863:0.16039)0.574:0.10673,((A0A0A9YQI2:0.32154,A0A6H5GLE4:0.60710)0.982:0.33688,(A0A0A9XFP3:0.58110,A0A0A9W6B0:0.46298)0.971:0.21601)0.816:0.09292)0.634:0.08670,(A0A0A9XDZ4:0.64752,A0A6V7M123:0.48856)0.955:0.22651)0.902:0.11619)0.535:0.02108)0.492:0.07655,J9LA40:0.74364)0.323:0.09119,((((A0A5K0ZNS5:0.45982,(A0A438DI22:0.32136,(A0A438I379:0.30780,A0A371G830:0.18631)0.963:0.13553)0.604:0.08993)0.944:0.11811,(A0A2N9G3G0:0.48344,((A0A438GRC1:0.25704,A0A5D3BLX8:0.28057)0.783:0.04671,(A5BZC9:0.35766,(A0A2N9EG31:0.15248,A0A371HL05:0.43227)0.473:0.06514)0.882:0.08086)0.871:0.09548)0.373:0.04845)0.666:0.07759,(A0A438E4W3:0.46375,((((((A0A2U1PIQ9:0.37539,(A0A2I0J4P4:0.20131,A0A2I0JDW6:0.63607)0.927:0.12016)0.909:0.07584,A0A6N2LKM2:0.54610)0.439:0.05196,((((A0A699HC68:0.51859,(A0A6L2L907:0.36481,A0A699H8W7:0.29184)0.258:0.03173)0.916:0.15700,((A0A1U8HCI3:0.58999,A0A1U8GZA5:0.42321)0.838:0.09850,A0A5A7T140:0.36715)0.840:0.07836)0.420:0.08747,(A0A061EYN0:0.47783,A0A061EMD4:0.19830)0.976:0.19550)0.740:0.04528,(S8CEL4:0.51873,A0A699HIP1:0.44227)0.873:0.13440)0.650:0.05593)0.438:0.02601,(((A0A1S3ZHD0:0.54038,A0A803QAR3:0.45816)0.612:0.09011,(A0A2Z6LU54:0.39201,(A5B4F1:0.41738,A0A2N9HIV2:0.20609)0.462:0.02120)0.790:0.06182)0.724:0.03424,(A0A6A2ZW95:0.49923,Q9XIM3:0.36170)0.923:0.12742)0.613:0.05064)0.855:0.06413,A0A438DF57:0.40884)0.902:0.07589,(((((A0A7J7I0J8:0.71235,A0A5K0Z160:0.23819)0.777:0.06659,A0A2N9FA34:0.32510)0.794:0.02457,A0A2N9I2F7:0.36812)0.820:0.06569,A0A2U1QJG8:0.38981)0.982:0.15478,((A0A6L2P0M3:0.44574,(A0A6D2JGW2:0.26488,A5AE14:0.32353)0.904:0.09644)0.948:0.12885,(A0A2N9G848:0.22998,A0A438EIX7:0.25430)0.957:0.10507)0.945:0.07210)0.785:0.03420)0.670:0.04084)0.420:0.04444)0.948:0.09324,((A0A5N6P1T0:0.35954,(A0A822ZMY3:0.39552,A0A2N9GKK0:0.30103)0.366:0.03859)0.992:0.23006,((Q2R3M7:0.56770,(A0A6D2L5A1:0.38921,A0A699HVW4:0.26695)0.898:0.12471)0.983:0.22475,((((((A0A2N9IMJ2:0.32729,((A0A438CJZ5:0.55924,A0A2I0JGJ1:0.35427)0.825:0.16548,A0A2N9H5T7:0.50027)0.028:0.04759)0.457:0.03925,A0A2N9HLD4:0.31851)0.936:0.11168,((A0A6A2XNI2:0.54571,A0A2G3C092:0.44827)0.228:0.06610,((A0A5D3BEZ6:0.56022,(A0A438JRT1:0.28749,A0A2N9EEH5:0.32426)0.000:0.17098)0.369:0.06224,A0A061E1S4:0.32833)0.323:0.02340)0.909:0.10494)0.100:0.08085,(A0A699GJ65:0.47322,((A0A438INT8:0.44435,A0A2N9HJG0:0.48606)0.865:0.14262,((T2D0T6:0.44112,((A0A803P919:0.29217,(A0A445I3N8:0.44905,A0A2Z6NP41:0.25539)0.791:0.07546)0.707:0.04349,A0A803PU39:0.38153)0.327:0.02949)0.725:0.05512,(((A0A5B6V1L9:0.41715,A0A6A3AZB0:0.43215)0.875:0.11089,((A0A6A3ADU5:0.41181,A0A6A3C075:0.33099)0.798:0.04701,A0A6A3A9T5:0.55689)0.868:0.06335)0.769:0.03842,A0A1U8PKS3:0.30446)0.976:0.15458)0.928:0.08443)0.140:0.01922)0.842:0.05265)0.536:0.04962,((A0A1R3FXR6:0.35135,A0A5N5I5B1:0.46264)0.411:0.03557,A0A2N9JAS4:0.31906)0.000:0.07697)0.888:0.08135,A0A6V7QDL0:0.36967)0.580:0.02616)0.974:0.11511)0.602:0.03872)0.929:0.08614)0.925:0.06999)0.919:0.07980,(A0A4Y1ZNJ3:0.61424,((((A0A834RC73:0.73455,(A0A0F7SV57:0.80986,A0A511KEZ0:1.11906)0.527:0.20568)0.750:0.09945,(A0A4Y2JF47:0.62254,A0A4Y2CAH6:0.51743)0.923:0.20247)0.329:0.06689,((A0A4P6XIB5:0.72348,A0A834R4X5:0.55497)0.564:0.13973,((A0A1D8PR73:0.51366,A0A1D8PLS1:0.42122)1.000:0.55371,(I2H688:0.69976,A0A2E9QKR8:0.68514)0.819:0.20834)0.487:0.10283)0.792:0.14550)0.890:0.11862,((A0A4Y2QH30:0.56623,(A0A4Y2N430:0.31391,A0A4Y2Q857:0.53708)0.904:0.18007)0.890:0.12472,A0A4Y2D7A5:0.35128)1.000:0.43372)0.741:0.08769)0.831:0.05226)0.835:0.03104,(((G8BPQ9:0.54210,(C4Y0M3:0.26525,A0A512UJB7:0.55257)0.922:0.13543)0.939:0.15295,(A0A5E8C4X9:0.65359,A0A7H0KDV7:0.49839)0.296:0.06582)0.980:0.16104,((((A0A6A3DPZ3:0.53702,(A0A0P1AME1:0.70406,A0A6A3LA94:0.31228)0.923:0.15288)0.659:0.11975,(A0A0A2JZZ1:0.54255,A0A1D2M4Z4:0.55051)0.868:0.11079)0.892:0.12582,((A0A5S6QHL1:0.49977,(B2CN79:0.67378,(A0A4C1TMZ8:0.41693,A0A0J7KE66:0.45599)0.912:0.15699)0.724:0.04195)0.835:0.05205,((J9M2J6:0.48015,(((A0A0A9YMV4:0.47035,(A0A6H5HDJ3:0.45129,A0A6A4IQU4:0.44225)0.621:0.07482)0.977:0.23312,A0A1Y1LVN7:0.37006)0.146:0.09232,A0A0V1G2I5:0.41016)0.227:0.15236)0.867:0.09703,(A0A1Y1JZX1:0.68659,A0A0J7K4F5:0.47798)0.000:0.09670)0.718:0.03367)0.984:0.16804)0.652:0.04866,(A0A2N5SAV4:0.87251,(A0A6A3LJ39:0.59795,(A0A6A3I9X6:0.56529,(A0A225W3G9:0.36682,A0A6A3J545:0.37118)0.904:0.19022)0.850:0.14835)0.631:0.15929)0.937:0.19415)0.633:0.03582)0.749:0.01463)0.254:0.02109,(((A0A6H5KL37:0.43554,A0A6H5JDG0:0.60265)0.973:0.27272,((A0A507DKG9:0.48804,A0A177WTF1:0.46352)0.946:0.15646,(A0A0G4PWD0:0.48521,(A0A177U9M6:0.56563,A0A0P1BFS2:0.61596)0.942:0.22957)0.483:0.12284)0.308:0.08568)0.924:0.11486,(((((((A0A5M8PMT3:0.69962,(A0A537J880:0.67904,A0A1W5D5P9:0.45963)0.452:0.05743)0.911:0.11535,(A0A6S6VS14:0.34375,(A0A2S4PTH3:0.62127,K1WRP0:0.79808)0.934:0.22781)0.362:0.06263)0.523:0.05526,A0A3L6MPQ1:0.31846)0.826:0.04004,A0A535F5I8:0.59443)0.891:0.07075,(A0A093XZX1:0.52345,(((A0A1V6WLQ0:0.39706,A0A0G2FAW9:0.59188)0.488:0.12948,A0A2S6BTL3:0.52802)0.807:0.15215,J4VU23:0.25165)0.950:0.19985)0.948:0.13229)0.831:0.03982,((A0A3L6MZA3:0.33222,(A0A4Q4WGA0:0.68184,A0A151GPX4:0.61969)0.953:0.24492)0.798:0.08336,(A0A3E2HD53:0.46955,(A0A420IH78:0.36953,K1XJ03:0.59171)0.968:0.23537)0.861:0.11097)0.968:0.13844)0.964:0.09698,((A0A437A7N2:0.76985,(A0A482S374:0.55005,D5KY22:0.63943)0.541:0.10781)0.946:0.15656,(((A0A150GKT1:0.53067,A0A7R9V9Z0:0.65629)0.767:0.12550,((A0A250XND9:0.28915,A0A1Y1ISS2:0.34877)0.958:0.16793,A0A7R9YSA9:0.58933)0.384:0.09290)0.865:0.12229,(A0A395IJQ9:0.60309,(A0A6S6V3U7:0.43045,K2R444:0.45974)0.986:0.31822)0.908:0.17553)0.894:0.14091)0.286:0.02242)0.977:0.12820)0.190:0.01855)0.793:0.01384,(A0A4T0N9L3:0.71367,((U1GSH0:0.66576,A0A7S2ZD23:0.38609)0.934:0.18853,((A0A2V1AM68:0.78457,A0A1E3B2C5:0.62529)0.124:0.12907,A0A0B4G5A2:0.54961)0.850:0.11380)0.362:0.07753)0.847:0.09158)0.739:0.02389)0.936:0.07504)0.933:0.07133,((((I2G0T2:0.46982,(I2FLW1:0.52623,A0A1K0GD68:0.42860)0.971:0.30094)0.981:0.30938,(A0A1W5D8Y7:0.33026,(A0A834S5H9:0.39802,A0A2C5W0V4:0.45892)0.958:0.18522)0.990:0.28308)0.739:0.13483,((A0A6B0V9W6:0.47122,A0A087T1Z9:0.42130)0.493:0.13094,(A0A2J7PX44:0.52323,A0A535S533:0.68847)0.930:0.16395)0.163:0.14264)0.668:0.02958,((A0A094DQM4:0.63797,A0A067T5Q4:0.44761)0.077:0.02889,((A0A4S4KFI5:0.58066,A0A146HC19:0.56192)0.883:0.14847,(K5W0I5:0.68733,A0A0C3GFW7:0.54689)0.760:0.16418)0.829:0.08780)0.925:0.10615)0.892:0.06290)0.827:0.02965)0.717:0.05058,(((A0A2E1LL39:0.89506,A0A2D7MQY1:0.62717)0.831:0.26432,(((A0A6A3J9W8:0.55642,(A0A6A3NT90:0.29830,A0A225W1R0:0.47006)0.861:0.09342)0.440:0.07272,(A0A225UWZ8:0.32589,A0A225W3V2:0.75625)0.925:0.19722)0.994:0.32033,((((A0A6A4F3Y5:0.35140,A0A225VA09:1.07402)0.907:0.22472,(A0A0P1AJA7:0.71380,A0A2P4X1D7:0.29765)0.706:0.09203)0.603:0.05991,A0A2P4XBD3:0.77962)0.985:0.37294,(A0A0M0K2N5:1.21368,A0A7S0MSU5:1.16488)0.719:0.23021)0.476:0.12541)0.000:0.11880)0.880:0.11325,(G7E3S6:0.67167,(A0A250WVE1:0.56141,(A0A250XU73:0.58311,A0A250XAJ6:0.58303)0.859:0.12203)0.957:0.20332)0.898:0.16235)0.836:0.11058)0.643:0.00596)0.905:0.06477,((A0A7S2R556:0.73642,A0A401GEN6:0.74103)0.791:0.11922,((A0A1Q3EFZ1:0.64411,(A0A284RV53:0.75564,A0A146HB08:0.67797)0.405:0.08769)0.893:0.14276,(A0A1Q3DUH6:0.66392,A0A0D0AU44:0.79584)0.796:0.22493)0.964:0.24529)0.940:0.17900)0.877:0.05369,(((A0A7S0YWC4:0.98916,(A0A2X0LWI2:0.58004,A0A2X0N0G9:0.67583)0.937:0.27895)0.763:0.11469,(A0A0G4IJ16:0.89067,(A0A2X0MNY2:0.42358,(A0A2X0MP13:0.29416,A0A2X0KNA2:0.34945)0.761:0.12315)0.992:0.34664)0.752:0.10283)0.902:0.14240,((((A0A7S3Y454:0.94776,(A0A0B7FLR7:1.10202,A0A0M0JUZ3:1.16855)0.000:0.24698)0.845:0.22311,M3JSF6:0.66345)0.678:0.13734,(A0A7S0KCV4:0.54973,A0A090N4T0:0.59053)0.986:0.33159)0.697:0.09222,((A0A7S4D8N3:0.71415,(((A0A2N5SXJ7:0.50758,(A0A0C4EPV3:0.59744,A0A0C4ENF5:0.53626)0.877:0.14820)0.822:0.10906,A0A2N5ULS5:0.64247)0.000:0.01064,A0A0C4ER73:0.54990)0.999:0.41840)0.000:0.00381,(A0A0M0JDM7:1.23370,A0A5E3XBS5:1.16500)0.000:0.17835)0.870:0.16781)0.422:0.13845)0.000:0.07069)0.823:0.03932,(((A0A7S2CEI2:0.90136,(A0A0M0JTS7:1.13512,A0A2D6FGZ1:0.78962)0.541:0.14285)0.385:0.11145,(A0A7R9UHG9:0.84797,(A0A2D4XCH7:0.67199,A0A7S2AW75:0.53451)0.994:0.36751)0.317:0.08795)0.555:0.09870,((A0A7S2R5M6:0.95655,A0A226CZD0:0.47309)0.458:0.14392,A0A1Z8ZU62:1.03054)0.713:0.19818)0.948:0.17260)0.000:0.00363)0.363:0.06828,(A0A507F1J3:0.98605,(J6EZH3:0.71391,J5QRI8:0.59266)0.860:0.20030)0.920:0.19364)0.855:0.05516)0.820:0.05753,(A0A507DCM6:0.81664,(A0A2N5UBA1:0.59101,A0A2N5UF88:0.58650)0.977:0.38955)0.969:0.29748)0.839:0.06355)0.849:0.07327,(((A0A7C7JE26:1.19446,(A0A2D4XBS7:0.85226,A0A7S2YNC9:0.80479)0.874:0.21235)0.825:0.19550,((A0A0F8CN22:1.12309,(A0A2R5FKW7:0.76221,A0A2R5H253:0.39830)0.966:0.33462)0.374:0.15151,(A0A7S3UZT7:0.93609,(A0A7S1VQI3:1.21105,S8CZH9:1.13649)0.787:0.22740)0.875:0.21227)0.535:0.08985)0.402:0.10574,(G8BPV4:0.80550,(A0A2E8GDL4:1.07946,((K0L0S7:0.80050,A0A4T0X6T4:0.67777)0.874:0.22895,(A0A376B5Q4:0.88829,Q12193:0.67021)0.825:0.12990)0.852:0.10062)0.756:0.14155)0.874:0.18309)0.569:0.09268)0.829:0.09528,(A0A6T7SAD6:0.61050,A0A6U5XCR5:0.63563)0.986:0.40302)0.835:0.07461)0.726:0.06776,(((A0A5J4Z4D9:0.71863,(A0A7S0ZIZ4:0.53769,A0A5J4YT78:0.52150)0.200:0.09989)0.666:0.15051,(A0A7C4VLK0:0.43248,(A0A1Z5JV65:0.65152,K0S6F1:0.98917)0.844:0.24818)0.939:0.23665)0.985:0.42858,(A0A7S3PQJ1:1.46974,(A0A0M1J8C0:0.74909,(B1PJ25:0.83281,(A0A1Z5KMG8:0.62166,A0A7R9X0A2:0.40096)0.437:0.11305)0.000:0.11353)0.917:0.44943)0.000:0.24917)0.385:0.11140)0.842:0.29544,(A0A4V4NFA5:0.83550,K0KVP7:1.02978)0.983:0.81226)0.998:1.22900)0.828:0.21304,((((C5LV36:0.65464,A0A7J6NFV0:0.62299)0.906:0.30827,(A0A7J6L5U8:1.36923,A0A7J6KMT2:1.27617)0.000:0.32755)0.874:0.22481,(A0A7J6R6P0:1.03245,((C5KV83:0.63332,C5LP46:0.72964)0.997:0.70514,(A0A7J6TSX9:0.95818,A0A7J6KXQ8:0.87130)0.000:0.20050)0.880:0.21645)0.426:0.05130)0.977:0.30916,((((A0A7J6SUU7:1.19441,A0A6A4VR48:0.88121)0.978:0.63969,(((C5L4J0:0.89943,A0A7J6KNY7:0.98770)0.838:0.15376,(((((((((A0A7J6JU80:0.83792,(A0A4Y2L2Y6:0.64065,(((((W8C1U1:0.52604,(A0A7E5W872:0.46231,A0A811WI07:0.35589)0.963:0.15779)0.857:0.07184,(A0A6H5HSM4:1.02026,A0A6H5IPW1:0.11855)0.999:0.37650)0.859:0.06852,((((A0A5N4ANA1:0.41338,(A0A836J969:0.53539,A0A0J7N046:0.23377)0.878:0.12460)0.914:0.09176,(A0A3L8DXD3:0.44537,(A0A6G0Y4K9:0.49854,A0A3L8DXY0:0.38352)0.804:0.06820)0.920:0.09068)0.818:0.04361,(A0A6V7JGQ3:0.45715,(A0A6J1PLD9:0.29102,A0A6J1PQ95:0.46883)0.804:0.09141)0.999:0.28923)0.773:0.02789,((X1X039:0.47286,((A0A6G0W1K3:0.52827,(((((A0A437ASN8:0.35435,A0A4C1X8S5:0.36761)0.988:0.24529,(A0A811W7E3:0.42746,(A0A6H5G014:0.57423,A0A3Q0JNQ0:0.48907)0.300:0.08235)0.808:0.13209)0.758:0.07965,A0A146M0N4:0.47425)0.000:0.00054,((A0A6J2YU61:0.41261,(A0A6J1RCI1:0.46102,A0A6J2Y3C8:0.41833)0.318:0.05203)0.862:0.05960,D2A334:0.31451)0.968:0.09087)0.806:0.03683,A0A2R7VUK9:0.50155)0.795:0.04086)0.803:0.08575,((X1WT50:0.46530,(A0A7E4S6F5:0.56415,(A0A7E4RDH8:0.23744,A0A7E4SDU3:0.44370)0.876:0.09188)0.968:0.18580)0.185:0.07646,((A0A182NPV1:0.74882,(A0A5N4AWG8:0.47486,A0A1B0D818:0.68630)0.685:0.18519)0.872:0.15141,(((A0A3Q0IZW4:0.59842,A0A6H5FZC4:0.54539)0.953:0.20768,(A0A811WNG1:0.32641,A0A6H5I493:0.79441)0.480:0.08761)0.786:0.13388,A0A7E4RNW9:0.48841)0.720:0.11917)0.859:0.06896)0.861:0.04511)0.887:0.07714)0.752:0.04794,(((((A0A7M7Q3P0:0.40125,(A0A6H5HZ49:0.35315,A0A6H5J086:0.66222)0.515:0.08493)0.933:0.13379,A0A0J7K9N2:0.49031)0.399:0.05337,A0A6H5HLE0:0.64409)0.797:0.07813,(A0A6J1R373:0.51218,(A0A6J1NPT1:0.67172,(A0A7E5WW13:0.30164,A0A7E5VWJ9:0.42663)0.778:0.09685)0.871:0.13804)0.828:0.07034)0.908:0.06742,(A0A6P8MUI1:0.38646,J9M802:0.60109)0.748:0.08558)0.439:0.03235)0.938:0.08180)0.000:0.06882)0.746:0.06293,(((A0A4Y2I8S7:0.39281,(A0A4Y2C734:0.39319,A0A4Y2QK08:0.56284)0.819:0.07496)0.014:0.06255,(A0A4Y2SQ17:0.46015,(A0A4Y2C280:0.51249,A0A4Y2IDE5:0.40552)0.773:0.05408)0.038:0.03149)0.882:0.07770,A0A4Y2H6F5:0.54306)0.963:0.14656)0.921:0.07242,(((A0A151XBN9:0.48210,(A0A5N4B971:0.38192,A0A6J1PGN8:0.44373)0.828:0.11030)0.872:0.09585,(A0A6G0W399:0.41430,A0A182YRP2:0.53629)0.945:0.17221)0.585:0.04857,(((((A0A6G0VZ24:0.42477,A0A023EZ22:0.52578)0.456:0.05055,((V5GU69:0.38479,(A0A336LMN1:0.74112,(A0A6J1RMK9:0.59412,(A0A6G0VR62:0.41162,X1WL73:0.54036)0.587:0.12715)0.638:0.07569)0.676:0.09226)0.831:0.06349,(A0A151X0A1:0.66847,A0A336KCY2:0.50350)0.768:0.05799)0.607:0.02887)0.815:0.05174,(((A0A2A4IUY1:0.68268,(A0A4C1Y1R8:0.44602,A0A6J2KEQ6:0.65093)0.857:0.11759)0.480:0.09257,(((A0A821W8E1:0.29741,A0A2A4JL65:0.15347)0.988:0.19164,(A0A811WKK4:0.38819,A0A3S2N7W6:0.58769)0.796:0.05713)0.923:0.11566,A0A811WB63:0.46757)0.556:0.03542)0.961:0.12903,(A0A7E4RF45:0.67545,A0A811VX70:0.74364)0.814:0.10814)0.832:0.05188)0.833:0.03562,(A0A2M4A642:0.61233,A0A6J2XJB8:0.44844)0.731:0.12415)0.680:0.04280,(((A0A1U8N891:0.42911,A0A034WA88:0.43835)0.874:0.10169,A0A4Y2VFH2:0.51356)0.888:0.11091,((A0A182YRD6:0.72116,A0A3L8D4U7:0.38395)0.900:0.12864,(A0A5N4AIL0:0.45700,(A0A226DXY1:0.46114,A0A034W2D1:0.50282)0.818:0.07898)0.857:0.06016)0.869:0.04588)0.297:0.02625)0.668:0.04202)0.915:0.05251)0.779:0.03637)0.922:0.10434)0.933:0.15942,(A0A085MTK2:0.42227,A0A162NQN9:0.63681)0.995:0.36979)0.311:0.07230,(A0A7M5XM06:1.03954,A0A7R8H2Z5:0.55341)0.909:0.29956)0.754:0.03026,((((A0A0V1ND59:0.40752,(A0A0V0TBT4:0.38081,A0A0V1M4C3:0.67244)0.648:0.06369)0.774:0.05482,(A0A085NBT7:0.78680,A0A0V0T281:0.32843)0.663:0.02539)0.889:0.08966,(A0A0V1KLF4:0.30138,(A0A0V1ER11:0.38028,(A0A0V0W486:0.33354,A0A0V1CCT2:0.24283)0.950:0.12861)0.925:0.11859)0.894:0.12758)0.990:0.18872,(((A0A6S7JPQ6:0.64993,A0A7J4G303:0.86192)0.891:0.16519,((((A0A2B4SG21:0.52892,A0A6J8AUM1:0.37889)0.879:0.14131,A0A2B4RV04:0.53366)0.878:0.13024,A0A6P8IQI6:0.37349)0.797:0.08847,A0A6S7IXJ8:0.70723)0.775:0.09938)0.778:0.10190,(((A0A6S7IQH2:0.66098,(A0A7D9LXZ1:0.40599,(A0A6J8AI70:0.48105,(A0A7D9ILK3:0.39118,(A0A6S7IJ03:0.37382,A0A1S3MVF0:0.81094)0.946:0.21463)0.372:0.08595)0.439:0.15003)0.105:0.13007)0.664:0.11613,A0A6S7I3T9:0.82329)0.909:0.22513,(((A0A2M4BJS0:0.55712,(A0A1Y1LL65:0.52498,(A0A1B0CZG8:0.51657,A0A5N4A3X9:0.58035)0.066:0.10414)0.866:0.14283)0.377:0.00055,(W5J8X7:0.58889,(((A0A4C1Z2H5:0.51139,(V9GZQ1:0.51598,(A0A4C1TIE4:0.81980,A0A7E5WWV7:0.32248)0.435:0.04641)0.813:0.10450)0.763:0.08246,((A0A3S2NE83:0.34317,A0A811X2R9:0.21803)0.955:0.14783,A0A6J1MRX7:0.50204)0.855:0.11579)0.512:0.06632,(A0A4C1SMP7:0.53241,(W8AD81:0.33162,A0A1I8Q088:0.58589)0.893:0.14559)0.732:0.07618)0.487:0.06063)0.844:0.04745)0.988:0.19796,((A0A164P5T9:0.50127,(A0A164LBS6:0.73212,(A0A085MSJ2:0.28017,(A0A085LLC5:0.59650,A0A085N843:0.57301)0.756:0.18727)0.835:0.07045)0.637:0.02789)0.939:0.10117,(A0A0V1KZW1:0.81757,((A0A6P8H0Y6:0.49561,(((((((A0A6A0GW68:0.67383,A0A315W1T6:0.65517)0.013:0.08725,A0A8B6EHD7:0.37346)0.216:0.06500,A0A7D9HZN2:0.59406)0.987:0.22308,(A0A6S7JPG2:0.31358,A0A7M7NFF5:0.31494)0.876:0.08380)0.970:0.13185,A0A2B4RA13:0.35494)0.869:0.06950,((A0A2B4SKX1:0.48490,A0A2B4RXB5:0.48200)0.798:0.06805,A0A7D9IRD1:0.29376)0.271:0.10031)0.915:0.07697,(((A0A183A1C9:1.14519,(A0A2G8L0W5:0.57547,A0A0S7J8H4:0.69095)0.638:0.11138)0.656:0.00055,(A0A6A0H2Q3:0.54721,A0A074ZCE8:0.36958)0.731:0.14100)0.695:0.08567,((A0A183RKD5:0.42867,A0A7J6JUV2:0.39230)0.913:0.11408,((((A0A6A5DSC2:0.54137,A0A3R7C5I8:0.21921)0.716:0.04787,A0A3R7CGI4:0.55347)0.866:0.08057,A0A654HX80:0.43585)0.853:0.07364,A0A5J4N6X9:0.41865)0.961:0.16030)0.981:0.16474)0.118:0.03743)0.920:0.05761)0.070:0.03334,((A0A2B4S5D1:0.84767,A0A2B4SKU2:0.23746)0.408:0.06277,A0A2B4R9E4:0.48835)0.000:0.07129)0.524:0.06561)0.830:0.05697)0.948:0.15496)0.931:0.15940)0.770:0.13291)0.966:0.15063)0.874:0.09535)0.818:0.04587,(A0A2B4S2P5:0.56911,A0A7D9HVL0:0.33263)0.922:0.12157)0.745:0.04738,A0A6S7J235:0.71055)0.960:0.10208,((((A0A4Y2WAS0:0.58008,((A0A6A4WXV3:0.53567,(A0A5B7GG27:0.43773,A0A6A4WJR6:0.37715)0.919:0.19975)0.979:0.40942,(A0A1I7SHH4:0.72538,A0A811L437:0.43946)0.992:0.41498)0.185:0.17611)0.907:0.24697,((((A0A6V7XBZ1:0.55873,A0A1S4EA58:0.44917)0.327:0.08728,A0A6V7UM30:0.47377)0.943:0.11973,(((((((A0A7I4Z338:0.40913,A0A016U778:0.60515)0.919:0.23589,A0A7E4ZZU5:0.76040)0.835:0.14095,((A0A0M3JYH5:0.40450,A0A016WVH2:0.49231)0.870:0.09327,(A0A4U8UK48:0.35557,(A0A2A6CF47:0.36162,A0A2A6BXJ1:0.99042)0.859:0.22631)0.795:0.10152)0.729:0.03163)0.939:0.09836,((A0A016TWR9:0.26735,(A0A0C2CH59:0.32253,E3NEM2:0.43976)0.573:0.03860)0.899:0.08889,((A0A0K0DET9:0.37274,A0A4U5P0V0:0.74631)0.716:0.04186,A0A0C2GC61:0.25632)0.979:0.16115)0.628:0.05211)0.842:0.07067,(A0A3P7FWQ5:0.59759,(A0A1I7W1D6:0.34007,(A0A0C2GKL2:0.29637,(A0A2H2HUS1:0.27465,G0P8Y8:0.74110)0.963:0.18988)0.939:0.12575)0.542:0.06433)0.251:0.06504)0.956:0.11821,((A0A6V7VWZ2:0.40363,(A0A6V7WXJ5:0.52455,A0A1I8BIN4:0.36088)0.861:0.10093)0.945:0.12124,((A0A0N4U025:0.39020,((A0A6V7XLE3:0.54706,A0A4U5MMV4:0.54565)0.922:0.15192,(A0A6V7USW7:0.54537,A0A6V7UDZ2:0.50357)0.756:0.07934)0.306:0.06023)0.856:0.05629,((A0A016T4S0:0.37168,A0A1I8AFR5:0.73291)0.680:0.12050,((A0A6V7XLD1:0.34979,A0A7E4VQC1:0.58645)0.494:0.12776,(A0A6V7Y9S0:0.45780,A0A811L5S0:0.69976)0.912:0.14376)0.877:0.08072)0.895:0.06050)0.884:0.04962)0.659:0.01746)0.792:0.02441,A0A8B6GYS8:0.38111)0.847:0.05422)0.815:0.02770,((((A0A1I7WSC7:0.94034,A0A6H5GQ66:1.55293)0.791:0.20697,A0A0R3RB04:0.63083)0.498:0.05001,A0A7E5A051:0.67512)0.000:0.12884,(A0A1S3K1Z5:0.34480,(A0A8B6GJ38:0.36558,A0A8B6BQ14:0.35187)0.984:0.24142)0.995:0.30196)0.828:0.06203)0.788:0.08397)0.732:0.07524,((((A0A4Y2IH94:0.41782,A0A4Y2JJ75:0.46061)0.978:0.18860,((A0A4Y2KMQ7:0.36998,(A0A4Y2LB43:0.31474,A0A4Y2B3S1:0.41948)0.270:0.04564)0.869:0.13248,A0A4Y2F2R6:0.36258)0.888:0.08929)0.698:0.09983,(A0A4Y2GKB8:0.53588,(A0A4Y2H1Z7:0.83354,A0A4Y2RDK2:0.31980)0.798:0.14264)0.100:0.07815)0.913:0.09882,((((A0A6S7IV84:0.40554,A0A1X7TW76:0.33991)0.909:0.11813,((A0A2B4S6I6:0.36042,A0A2B4RJY1:0.59588)0.951:0.23620,(A0A7D9HIU8:0.59643,A0A2B4RI90:0.61247)0.182:0.07458)0.946:0.19618)0.771:0.04434,(A0A2B4R4A0:0.43952,A0A6S7FRE1:0.39309)0.975:0.18685)0.909:0.06708,(((A0A4Y2EVX1:0.53237,(((A0A4Y2EFH3:0.38139,A0A4Y2HQW4:0.50274)0.911:0.10652,((A0A226CXJ4:0.19311,A0A226DR38:0.32983)0.924:0.13011,A0A226EUJ9:0.44090)0.886:0.10136)0.692:0.05973,(A0A4Y2UII4:0.49081,A0A4Y2CNZ1:0.38927)0.887:0.10610)0.793:0.07547)0.701:0.01556,(A0A6J1PPU8:0.34809,A0A4Y2MJU0:0.34274)0.918:0.11301)0.984:0.17974,(((A0A3C1S0Q4:0.49105,A0A6A4WCI8:0.41681)0.885:0.23605,A0A444SJL9:1.59445)0.830:0.23819,A0A7D9KAK9:0.33801)0.085:0.10513)0.967:0.16577)0.790:0.02417)0.551:0.06789)0.390:0.03915,((A0A6J2U3I5:0.36375,A0A7R8V357:0.54094)0.959:0.19587,(A0A6A4WS78:0.53217,A0A2R5LFC3:0.43858)0.273:0.12429)0.190:0.04296)0.949:0.08964)0.798:0.15631,A0A6P6Y677:0.74056)0.958:0.24318,(A0A6P7FU43:0.81999,(A0A1Y3BT69:0.54645,A0A6P6YIH6:0.41336)0.986:0.38384)0.273:0.05187)0.988:0.39790)0.930:0.24971,(C5K708:1.11011,(C5KRL1:0.49020,(A0A7J6KMR3:0.71006,A0A7J6KP76:0.54394)0.486:0.18720)0.994:0.44605)0.741:0.10799)0.704:0.19255)0.989:0.64071,(((((A0A7S1IYK8:1.15916,A0A7S4D101:0.50301)0.987:0.53615,(A0A7S1IKF5:1.16159,(A0A391P437:0.99836,A0A391NQ35:0.95712)0.498:0.19196)0.093:0.14957)0.297:0.11581,(((A0A0N5BR41:0.79814,(A0A0N5C9A7:0.74462,A0A0N5BWB8:0.92134)0.597:0.13031)0.899:0.16914,((((((((A0A7M5XH70:0.76791,((A0A6J8A4K8:0.61903,A0A8B6BHI7:0.38308)0.911:0.14304,((A0A1X7U5H8:0.58006,((A0A7D9IUT3:0.62183,A0A7M5XH02:0.43145)0.385:0.11223,A0A164FH48:1.34030)0.107:0.07433)0.792:0.05823,(A0A7M7NWF3:0.29258,A0A8B6CK77:0.87461)0.854:0.20562)0.519:0.07468)0.521:0.12200)0.747:0.07858,(((((A0A1Y1HZT4:0.64345,A0A1Y1I905:0.45960)0.851:0.27080,((A0A150FYN4:0.60849,A0A250XTY5:0.48171)0.956:0.31900,A0A0D2NLB6:0.96155)0.939:0.27709)0.638:0.21352,((A0A6H5JIS8:0.65826,A0A6H5KLE3:0.45650)0.968:0.35343,(((A0A6J8BRV6:1.01992,A0A432I2M4:0.35033)0.343:0.11334,A0A6J8ANH1:0.67490)0.868:0.15904,(E4X2F4:0.79547,(A0A2D6FFC2:0.76869,E4WZ46:0.82234)0.611:0.17865)0.991:0.50672)0.285:0.16232)0.991:0.45547)0.342:0.15887,A0A553P8H4:1.00542)0.876:0.17182,(A0A4U5PF94:0.73765,((A0A2G9TSR6:0.49256,A0A0B1S9B3:0.36051)0.981:0.20962,((A0A368G6A9:0.44109,A0A2G5TUW2:0.61649)0.000:0.11709,(A0A4X3NZF0:0.86190,A0A7E4V160:0.85778)0.810:0.17034)0.811:0.06177)0.636:0.09202)0.867:0.08461)0.233:0.09803)0.873:0.11112,A0A3M6V3G2:0.40516)0.043:0.08621,(A0A7S0RGH3:0.59211,(A0A150FZB4:0.53423,(A0A0D2LN16:0.59085,A0A1Y1HI15:0.56114)0.780:0.09941)0.501:0.16746)0.948:0.21790)0.870:0.09819,(A0A7S0VWH1:1.05800,A0A6S8DWF2:0.78943)0.234:0.09332)0.534:0.11628,(L8GLF5:0.79306,(A0A7S0QVN1:0.53351,A0A7S0Z4Q6:0.62340)0.975:0.32442)0.940:0.28751)0.920:0.16144,A0A6A5C1B9:0.80007)0.906:0.08593,(((((A0A8B6H8B1:0.50988,(((A0A803KB01:0.62513,(A0A803K510:0.51965,((A0A6I9Y928:0.36274,A0A2D4M3Y6:0.41904)0.958:0.21798,A0A402ETG6:0.46806)0.854:0.12364)0.736:0.08323)0.389:0.13469,(A0A8B6DC45:0.47860,A0A8B6GDG0:0.41234)0.985:0.25963)0.733:0.05892,(A0A2G8KLY4:0.74363,A0A2G8JCK1:0.17811)0.998:0.35175)0.484:0.05731)0.094:0.05474,(A0A3B1IRS8:0.62223,(A0A661TEM3:0.59060,A0A7M7NDD2:0.59167)0.790:0.08280)0.939:0.15214)0.905:0.08163,((I1C6B0:0.46540,(I1CC29:0.19937,(I1CTE1:0.60428,A0A0B7NDY8:0.58861)0.833:0.30223)0.970:0.23124)0.966:0.16287,(A0A8B6ETM9:0.64940,A0A5B7GTV7:0.88742)0.875:0.19471)0.809:0.03574)0.926:0.08396,((((A0A653BK08:0.60098,A0A2H1W6Z8:0.52310)0.759:0.11419,((A0A226D534:0.39135,(A0A139W8L4:0.34613,(A0A0K8SFG0:0.55311,A0A146LQD6:0.54453)0.942:0.19727)0.677:0.10128)0.850:0.06758,(A0A226DEU9:0.54036,A0A3L8DG69:0.44345)0.504:0.06178)0.206:0.02371)0.827:0.08310,(A0A0P4W0U3:0.75471,((A0A7D9IN06:0.48861,A0A6S7JKP0:0.30845)0.000:0.11544,(A0A8B6HNJ7:0.46931,A0A2B4RSL5:0.32709)0.237:0.04782)0.936:0.17221)0.788:0.18010)0.992:0.22326,(((A0A2B4SHI9:0.75473,A0A0B1T6Y4:0.48365)0.579:0.16044,(((((A0A162SCA3:0.40088,(Q55H52:0.70178,Q55H48:0.05868)1.000:0.74985)0.328:0.10439,(A0A2B4RNW1:0.93386,(A0A8B6H5A6:1.01741,A0A164W7N8:0.66799)0.812:0.16374)0.840:0.15215)0.659:0.02081,(A0A7M6DR42:0.46310,A0A6J8CDJ6:0.61608)0.458:0.07977)0.341:0.07734,((A0A164M267:0.40239,(A0A2B4S5Q4:0.47769,A0A6S7JLU2:0.31113)0.889:0.11436)0.805:0.05104,((A0A164MR36:0.50981,A0A164MH56:0.31875)0.897:0.10435,(A0A162DCU3:0.51380,(A0A162QI74:0.55835,A0A162RAT6:0.37257)0.904:0.12414)0.880:0.08091)0.967:0.13498)0.582:0.04971)0.835:0.05713,((A0A164T8K5:0.48521,(A0A2B4REE5:0.51275,(A0A0B7MW62:0.65745,A0A1T2L0C8:0.57648)0.776:0.03989)0.727:0.02245)0.773:0.04603,A0A4D5REV5:0.55050)0.694:0.06982)0.161:0.05796)0.903:0.07942,(H3B8L7:0.69228,(A0A0C9Q0M0:0.28019,((H9JTW1:0.51546,(A0A811WDV5:0.45767,A0A811WK47:0.40848)0.738:0.08949)0.858:0.12879,(A0A0K8T700:0.51054,A0A6H5H3L6:0.52766)0.915:0.15174)0.719:0.12669)0.998:0.38621)0.000:0.13393)0.459:0.02486)0.390:0.06766)0.916:0.12871,(((((((A0A5J4VY02:0.60093,A0A5J4VTJ1:0.40741)0.940:0.20139,A0A5J4WP53:0.32925)0.912:0.13084,((A0A5J4WR31:0.45146,(A0A5J4TY04:1.14874,A0A5J4VRF5:0.70602)0.724:0.16368)0.857:0.11946,A0A5J4TYH2:0.63813)0.694:0.05567)0.853:0.06028,((((A0A5J4V948:0.47146,A0A5J4TNH5:0.33932)0.868:0.10077,(A0A5J4VXK0:0.67955,(A0A5J4VJB5:0.38574,A0A5J4TVD6:0.27538)0.653:0.10340)0.736:0.07148)0.951:0.19138,(A0A5J4WDS5:0.34484,A0A5J4X0F6:0.46723)1.000:0.43540)0.633:0.14129,(((A0A5J4TMB5:0.54547,(A0A5J4WD04:0.16574,A0A5J4UAV4:0.84387)0.972:0.22156)0.857:0.08782,A0A5J4TP13:0.87817)0.473:0.08626,(((A0A5J4WQ79:0.53244,A0A5J4VDJ9:0.35313)0.982:0.20380,A0A5J4VVP4:0.48590)0.517:0.03579,A0A5J4UJG1:0.17064)0.987:0.18089)0.981:0.16684)0.437:0.08617)0.438:0.09228,(A0A5J4VY81:0.56533,(A0A5J4WMF1:0.85353,(A0A5J4U818:0.30345,(A0A5J4X4Y3:1.09114,A0A5J4U2T7:0.65066)0.513:0.09773)0.907:0.20980)0.933:0.18060)0.518:0.09391)0.681:0.13278,(A0A5J4UV70:0.81189,A0A5J4UIG9:0.40978)0.274:0.15468)0.940:0.20530,((A0A5J4WP64:0.73161,A0A5J4X765:0.49088)0.964:0.25557,(A0A5J4VBN2:0.68199,(A0A5J4V207:0.67275,A0A5J4VL13:0.38190)0.968:0.29317)0.844:0.11891)0.726:0.13521)0.974:0.24817)0.059:0.03662)0.857:0.08739)0.016:0.13761,(A0A0N5BKD0:0.89887,(A0A0N5B908:0.67023,((A0A0N5BIH0:0.64167,A0A0N4ZIN9:1.08157)0.063:0.14002,A0A0N5BK06:0.85676)0.000:0.18489)0.683:0.10430)0.956:0.19442)0.875:0.08385)0.888:0.06935,((A0A147BHB3:0.79176,(A0A3M7T3D2:0.99407,(A0A3M7T2A5:0.62591,A0A814C8M2:0.64097)0.935:0.26709)0.909:0.17222)0.936:0.20237,(A0A7R9RRK7:1.04045,(A0A6A4VZM4:0.81120,(A0A7R9J991:0.54672,A0A7R9FZV0:0.62694)0.948:0.26030)0.644:0.16730)0.936:0.26990)0.920:0.13142)0.707:0.10300,(((A0A0G4ESN6:1.13619,A0A0G4HCV3:1.10746)0.926:0.40473,(A0A2K3DSD1:1.01845,A0A0M0JVC2:1.22012)0.761:0.18646)0.069:0.10524,((A0A521LJ77:1.35140,A0A424IHH9:0.84088)0.876:0.33536,((A0A6J8AFX8:0.88551,(A0A6J8BB88:0.57835,(A0A1I8JA32:0.57288,A0A1I8HAA6:0.40785)0.699:0.11992)0.640:0.12032)0.966:0.26889,((A0A6J8C9H9:0.89303,A0A6P5AC02:0.41382)0.997:0.57058,(((A0A7M5XHR6:0.73633,((A0A1X7V3E6:0.60116,(A0A1X7TD39:0.33225,A0A1X7V5R9:0.93120)0.942:0.23330)0.113:0.11223,A0A2B4R6M2:0.45330)0.798:0.09758)0.946:0.15188,(A0A4Q3LYC6:0.79568,((G7E4B9:0.63507,A0A409WWP8:0.60733)0.913:0.25728,(A0A369K150:0.64921,A0A1Q5SY17:0.97191)0.588:0.16955)0.628:0.14878)0.000:0.09287)0.301:0.05336,(((A0A6A4WEV3:0.81428,(A0A8B6DBK4:0.50890,A0A818XN92:0.30373)0.997:0.45222)0.893:0.24598,(A0A1D1W5V8:0.42887,(A0A1W0XEH3:0.47971,A0A1D1VSF7:0.43752)0.878:0.12382)0.926:0.17022)0.918:0.11608,((((A0A6P8QGU0:0.48128,(A0A402FWM2:0.62386,A0A8B6CAB5:0.47862)0.974:0.26730)0.949:0.19384,(A0A8B6DNZ9:0.59300,A0A6A4VVR0:0.75558)0.550:0.03924)0.620:0.04994,(A0A6J7ZWG4:0.85971,A0A432R1B6:0.61410)0.673:0.05350)0.953:0.14012,A0A432I204:0.59119)0.257:0.09609)0.757:0.07322)0.984:0.27389)0.788:0.15564)0.970:0.30142)0.906:0.17684)0.418:0.08756)0.883:0.14882)0.570:0.10748,A0A7S3Z3G3:1.27744)0.393:0.07015)0.837:0.12886)0.000:0.00054,((A0A7Z1MW46:0.80672,(A0A3M0IK83:0.47679,((A0A485PJ89:0.55121,(A0A1V4KFV4:0.37211,(A0A3M0IHE3:0.34129,(A0A3M0IV60:0.16253,A0A3M0KBF5:0.17430)1.000:0.35302)0.911:0.13010)0.551:0.07725)0.129:0.02728,A0A238BKA9:0.41592)0.863:0.14352)0.973:0.31926)0.992:0.42351,(((((A0A822H2L7:2.03951,(((((A0A0K0FQY8:1.00465,(A0A4Q9KVT9:0.36724,T0MCL9:0.72033)0.943:0.27466)0.595:0.10394,(A0A4V1T0I7:0.75304,A0A1D8PC70:0.81445)0.843:0.15454)0.808:0.12659,(A0A0N5C6J6:0.58909,(A0A0N5BQJ0:0.33026,A0A0N5BRD6:0.61417)0.969:0.33071)0.924:0.25211)0.940:0.15558,((((((((((((A0A1J5WFE4:0.51696,A0A1J5WXX6:0.55600)0.808:0.05717,A0A0C2MPM1:0.87141)0.679:0.06179,(((A0A1X0Q9P2:0.49768,Q15F66:0.50266)0.849:0.09764,A0A1X0QI84:0.90400)0.067:0.09602,A0A5J4NGT9:0.75797)0.630:0.06537)0.847:0.06462,(A0A6L2L947:1.99297,((A0A443QDD2:0.62485,A0A131XIW6:0.33931)0.958:0.27627,((A0A0R0LV59:0.50724,A0A0R0LZ68:0.46135)0.959:0.21415,((A0A1W0E2C1:0.46588,A0A0R0M291:0.38708)0.846:0.08837,((A0A0R0M1J0:0.39656,A0A1X0Q897:0.55859)0.969:0.19748,(A0A0R0M5T6:0.55685,(A0A0R0LUC3:0.51153,A0A1X0QKI8:0.52161)0.000:0.10856)0.838:0.07642)0.919:0.14736)0.000:0.12111)0.990:0.23258)0.735:0.07658)0.589:0.07616)0.879:0.05639,((A0A2H5TQ31:0.44089,(A0A814IVU6:0.65142,(A0A814C6H1:0.48750,A0A813QAU7:0.38668)0.902:0.09532)0.191:0.06075)0.000:0.06505,((((A0A814RG40:0.56223,A0A814I834:0.35646)0.607:0.13860,A0A0N5BKG3:0.84127)0.798:0.15023,(A0A6P6YC49:0.77509,A0A834R8W7:0.41697)0.896:0.11691)0.835:0.10673,((A0A815USC6:0.58554,(A0A819AC67:0.27581,A0A814V145:0.35964)0.758:0.09722)0.955:0.18290,((A0A816MPB8:0.27620,A0A820D9V4:0.58063)0.961:0.20858,(A0A815FP41:0.38091,(A0A818AGN6:0.50562,A0A816WS03:0.29827)0.000:0.10036)0.926:0.08790)0.904:0.10207)0.970:0.14843)0.906:0.07024)0.463:0.04589)0.344:0.03677,((((A0A2G8K7Z5:0.53700,(A0A7M3Q015:0.32167,((A0A7D9DU69:0.34859,(A0A2G8JGE0:0.33255,A0A085MZC2:0.31000)0.858:0.07461)0.963:0.13346,A0A0V0RFN6:0.33651)0.709:0.03384)1.000:0.69471)0.925:0.18351,(A0A443SHA5:0.71387,A0A226DC51:0.54041)0.906:0.17793)0.098:0.08436,(A0A0C2IFQ4:0.50316,A0A0R0LU25:0.40708)0.832:0.10992)0.866:0.09305,((((((Q1KTA8:0.52391,A0A2P2ID42:0.58945)0.921:0.16663,((A0A432RAE8:0.38549,Q54AS8:0.59685)0.000:0.09616,A0A146HY95:0.47371)0.160:0.07571)0.637:0.05998,(Q15F60:0.38503,A0A1J5X524:0.33971)0.952:0.15742)0.814:0.07475,(A0A388JUZ9:0.69928,((((A0A250WPX0:0.50890,Q54AM7:0.62528)0.405:0.13132,((B9W6M9:0.52573,(A0A4T0X6X9:0.41405,A0A7D9D1J3:0.51745)0.986:0.34395)0.998:0.52829,A0A0N5B321:0.69191)0.805:0.14351)0.476:0.05479,(((((((A0A511KDF7:0.77850,(A0A2X0NVJ4:0.59411,A0A2X0MCL4:0.40059)0.999:0.45883)0.624:0.02118,A0A060SQY4:0.55686)0.850:0.13297,A0A177TXR4:0.81393)0.994:0.32181,((((A0A238FAF8:0.38606,(A0A5D3AJL3:0.28907,Q55HB6:0.40464)0.993:0.29156)0.859:0.10424,A0A5E3XEM8:0.74977)0.669:0.04983,A0A401GJ94:0.55988)0.961:0.13513,A0A535F2L0:0.46840)0.755:0.11612)0.923:0.12628,(A0A485LN59:0.93557,A0A7S0W802:0.84331)0.900:0.18498)0.882:0.09212,((((D3B7X1:0.90138,A0A1D8NEN3:1.34818)0.081:0.19381,(O15725:0.60530,D3BRG8:0.96187)0.919:0.23326)0.925:0.19973,(((A0A6A3LEJ0:0.46964,A0A2P4YVI5:0.22834)0.995:0.34585,(A0A2P4XFH7:0.50490,(A0A225WQT5:0.47761,(A0A225VUG5:0.49938,(W2QXL6:0.33734,A0A2P4XH08:0.33475)0.972:0.17109)0.089:0.03009)0.927:0.12278)0.846:0.07045)0.990:0.25943,(A0A0D2UJJ6:0.68763,A0A250X008:0.61275)0.888:0.19108)0.688:0.04317)0.663:0.04938,A0A151Z4Q0:0.79633)0.792:0.05375)0.939:0.10539,(((((P0CT34:0.46689,(A0A0M4M1S5:0.44981,(A0A0U1MBD9:0.65063,A0A7J6KQJ3:0.70606)0.648:0.20942)0.000:0.12913)0.684:0.07626,A0A520B4Y5:0.79143)0.945:0.13451,(((A7EP32:0.49425,A0A161HH93:0.44549)0.956:0.18030,(A0A4Q4PW73:0.88184,(((A0A093UKN5:0.31561,(A0A094GMY0:0.15367,A0A1W5CTQ2:0.37878)0.921:0.12028)0.995:0.20345,(A0A2S4PQT6:0.86317,A0A834RP73:0.19077)0.984:0.20403)0.156:0.01951,((A0A1W5CUK2:0.38228,((A0A834RZS7:0.41958,A0A834RUR6:0.37517)0.964:0.16050,(A0A2S4PNY4:0.50515,A0A395IFE0:0.23120)0.923:0.11807)0.402:0.03904)0.575:0.03547,A0A167V6X7:0.56118)0.881:0.04299)0.912:0.08912)0.887:0.09608)0.877:0.06118,((((A0A402F430:0.42461,(A0A1K0GE26:0.47875,A0A402FVP2:0.45219)0.564:0.07516)0.722:0.03196,(((A0A821WEJ2:0.69157,A0A819AQM3:0.64439)0.187:0.14712,(A0A395IIE8:0.47848,(A0A0D2X5S0:0.56190,A0A5M6BN98:0.80472)0.286:0.10180)0.741:0.02769)0.934:0.09811,(A0A2N5SB08:0.68685,(A0A167WTM2:0.61170,A0A0L0W3B5:0.46735)0.869:0.11135)0.764:0.05163)0.855:0.05207)0.179:0.02247,((A0A507BZP3:0.73451,A0A507CVN4:0.25014)1.000:0.65747,((A0A0B7F8E0:0.31625,M5CEF6:0.35236)0.937:0.10786,((A0A060SB49:0.32223,(A0A5K1JYZ7:0.19102,(A0A4S4LNN7:0.41847,(A0A0W0ETX5:0.32946,A0A2G8RWR9:0.48997)0.857:0.06854)0.815:0.07917)0.783:0.06795)0.165:0.06926,(A0A0C3A3L0:0.66941,(A0A0C9YIL0:0.28794,A0A0C2ZFL1:0.18775)0.952:0.16716)0.410:0.10886)0.981:0.15006)0.845:0.04487)0.953:0.09856)0.517:0.01121,(((((A0A1W5D2R1:0.33261,F7VNV8:0.50303)0.743:0.05079,A0A094ASK4:0.36933)0.667:0.05104,A0A4S4KXG6:0.44094)0.215:0.02698,(((A6R121:0.27428,B8MA69:0.21421)0.919:0.11132,A0A0C9M9F1:0.58923)0.643:0.04600,(A0A1V8V4T0:0.52020,A0A0U5GF74:0.37204)0.926:0.10211)0.677:0.02899)0.887:0.04523,((A0A2P6MNG3:0.37465,A0A670JY61:0.47722)0.691:0.07618,((A0A1S3PQB9:0.45480,A0A1A8AUM2:0.23188)0.504:0.06787,(A0A5C6N273:0.23495,A0A1S3Q7Z3:0.63196)0.412:0.09443)0.993:0.17743)0.795:0.03541)0.794:0.03309)0.809:0.02634)0.938:0.07761)0.902:0.06239,((A0A507DKC2:0.61250,S7ZWC1:0.43506)0.359:0.08598,(A0A250X4B0:0.42951,A0A0C4F386:0.61628)0.740:0.07389)0.185:0.09130)0.699:0.05947,((F2UDX5:0.45687,((A0A2G5B133:0.49809,(F4Q719:0.46402,(A0A099NW38:0.24915,A0A1Z8JKL7:0.42433)0.941:0.15011)0.763:0.13134)0.807:0.07516,(A0A7S0G1E5:0.50370,(A0A0N7L9S9:0.41497,(A0A0B7MUY4:0.49208,A0A0B7NN30:0.33215)0.997:0.28791)0.938:0.14759)0.738:0.02058)0.059:0.01298)0.174:0.03675,((((A0A438C705:0.17861,(A0A061FBQ5:0.76297,(A0A438IJ59:0.25683,A0A3Q7EY30:0.44744)0.875:0.10159)0.542:0.03494)0.999:0.22190,(A0A388JQB2:0.28048,(A0A388M5K3:0.06886,A0A388M3U1:0.14378)0.824:0.04688)0.999:0.25823)0.919:0.06249,(((((((((A0A6L2NNM2:0.45941,A0A1S3Y5Y7:0.41426)0.254:0.04075,(A0A6G1BUM0:0.29632,(A0A5N6NZ26:0.30694,A0A151SEJ8:0.42961)0.965:0.16903)0.756:0.05682)0.753:0.04700,A0A6L2LPV9:0.36322)0.667:0.02964,A0A3Q7I2D9:0.56999)0.329:0.02604,((Q9LJT2:0.36521,Q2QUG5:0.57122)0.000:0.08127,A0A5N6NPC1:0.32222)0.819:0.05327)0.807:0.04768,A0A6P6WZ90:0.33007)0.995:0.23057,(((A0A2Z6NQM2:0.12974,A0A371FT81:0.46216)0.867:0.04814,(A0A5B6WG73:0.36689,(A0A5A7SNL7:0.16084,(A0A6L2NR84:0.33110,(A0A6L2MXT8:0.49545,(A0A6L2NCQ5:0.20591,(A0A699JL91:0.21305,A0A699GG89:0.23710)0.894:0.07355)0.920:0.06276)0.733:0.02047)0.814:0.03098)0.789:0.05250)0.835:0.03370)0.055:0.02734,(A0A371HWH3:0.66979,(((A0A6L2J3N0:0.72651,(A0A5D3BTR5:0.72714,(A0A699IMD1:0.48633,A0A3Q7ICQ4:0.77140)0.024:0.05045)0.198:0.06718)0.862:0.09769,(A0A2N9FS73:0.28291,(A0A6L2MVN0:0.43025,A0A6L2K1A8:0.41461)0.837:0.14297)0.870:0.10336)0.996:0.30111,(A0A6L2M311:0.40712,(A0A699IRS8:0.48862,A0A699IML3:0.38647)0.924:0.24794)0.814:0.08947)0.901:0.10768)0.967:0.15537)0.883:0.11502)0.000:0.05708,((A0A6L2NF25:0.47222,(A0A6D2JQY0:0.48142,M5XPR8:0.21916)0.579:0.05367)0.882:0.07117,(((A0A371FJ21:0.72412,A0A371I5J2:0.56554)0.906:0.16202,A0A5A7UR86:0.13160)0.817:0.07650,A0A2N9EAX3:0.13115)0.896:0.07304)1.000:0.30526)0.346:0.04333,((((U6JXZ7:0.61314,A0A833D477:0.59405)0.894:0.13770,A0A7S0MHT3:0.64168)0.825:0.10646,(A0A2P4X786:0.19233,A0A6G0W9X5:0.34292)1.000:0.70688)0.518:0.09758,(((D3BRX1:0.65617,(A0A2P6V2K7:0.59991,U6JXU7:0.72076)0.871:0.09134)0.763:0.02820,A0A0G4HAY4:0.71609)0.850:0.05986,(A0A388JSN1:0.41043,(A0A388ME32:0.16549,(A0A388LDJ8:0.42438,A0A388KZ60:0.26662)0.917:0.09822)0.946:0.11399)0.975:0.13339)0.179:0.02740)0.718:0.03630)0.879:0.03765)0.558:0.04259,A0A507FCJ7:0.52299)0.839:0.02340)0.730:0.02043)0.987:0.13479)0.837:0.07269)0.675:0.02136,A0A0R0LVS4:0.61656)0.781:0.05405)0.863:0.05731)0.870:0.04036,((A0A0A9VSG4:0.62958,(((A0A4Y2HL66:0.94297,A0A087TDM0:0.37639)0.984:0.40503,(A0A3Q7IGW3:0.82693,(A0A4Y2J279:0.89015,X1XU39:0.90126)0.955:0.42839)0.906:0.32773)0.833:0.15114,A0A670J3L3:1.04486)0.191:0.04360)0.295:0.01523,(G0W7Q7:0.53001,A0A023AXI1:0.62427)0.557:0.07434)0.902:0.08511)0.889:0.04424,(((((A0A438HFT1:0.43353,(A0A2N9EFL0:0.23973,A0A2N9FE51:0.23838)0.949:0.13468)0.799:0.05455,(A0A484NGE7:0.42370,((A0A453IQG8:0.33063,(Q6UUT3:0.41967,Q2R467:0.26087)0.448:0.01611)0.999:0.18697,(((A0A1U7X0K1:1.04071,A0A540KRS7:0.21106)0.842:0.09735,((A0A699IBA1:0.69123,((A0A699I066:0.52198,A0A6L2KGI3:0.10989)0.975:0.16599,((((A0A6L2K7V1:0.28723,A0A6L2K497:0.56852)0.206:0.07955,A0A699GH96:0.17246)0.868:0.06040,A0A6L2K8B3:0.55664)0.448:0.01509,A0A5N6LCF0:0.26929)0.337:0.05903)0.835:0.07203)0.987:0.19686,(((A0A371FD49:0.48256,A0A371FMN1:0.28899)0.990:0.23629,(A0A371E0Q0:0.53392,(A0A371DYM8:0.44806,A0A371GBS5:0.17115)0.841:0.16762)0.182:0.04488)0.300:0.01932,G8DCW6:0.45638)0.357:0.04557)0.873:0.08178)0.518:0.04715,A0A803PT16:0.58661)0.072:0.03255)0.509:0.04330)0.826:0.04813)0.872:0.08780,((A0A2N9EXL2:0.36076,A0A1S3C4J2:0.35359)0.822:0.06455,((A0A2N9IU84:0.34346,A0A438IY87:0.09729)0.926:0.08798,A0A2N9HMA4:0.51513)0.831:0.04811)0.951:0.10444)0.999:0.31205,(A0A101M1T6:0.91306,(((((A5B6L5:0.39783,A0A438EJ26:0.70520)0.014:0.02064,A0A438G3S5:0.60833)0.885:0.10829,A0A2N9IGG3:0.13167)0.347:0.05804,((A0A6L2P328:0.55907,A0A6L2MEX6:0.19490)0.934:0.13240,A0A1U8HKA3:0.60108)0.651:0.08387)0.400:0.03217,A0A371G4L7:0.44451)0.987:0.31960)0.676:0.19034)0.988:0.29274,((A0A177BCS4:1.31723,(((((A0A5J4NJF8:0.19220,A0A5J4P3H1:0.41946)0.957:0.14268,(((A0A3R7MJ12:0.29886,(A0A6H5GEF8:0.39014,A0A4C1UGD4:0.73454)0.999:0.54353)0.283:0.06431,A0A654HLI3:0.39521)0.385:0.01622,((A0A564YNH4:0.51215,A0A419QEA6:0.67865)0.842:0.07914,A0A293MAR4:0.27207)0.144:0.03478)0.861:0.04991)0.961:0.09391,((A0A812BV46:0.51786,(A0A3R7QE47:0.77127,A0A4Y2QPT6:0.35169)0.861:0.12201)0.913:0.13359,(((A0A7T8HLY0:0.43610,A0A6S7LSI3:0.69302)0.159:0.10559,((A0A6H5GBN1:0.49472,A0A0A9YE74:0.42651)0.989:0.23820,(A0A6H5IHU5:0.34531,A0A232EEI1:0.40792)0.982:0.25684)0.790:0.07241)0.896:0.08660,(((A0A7T8GZ29:0.37637,H2XNC4:0.62765)0.925:0.15290,(A0A4Y2WRN0:0.49841,A0A4C1WS67:0.32293)0.855:0.08747)0.791:0.06982,((A0A085NN57:0.42859,A0A4Y2SAF8:0.40814)0.761:0.08868,(A0A4Y2FGZ2:0.62090,A0A4Y2W9R0:0.25047)0.972:0.17644)0.769:0.04308)0.612:0.04204)0.222:0.02333)0.772:0.03094)0.841:0.06097,((A0A6H5IR03:0.56854,A0A6S7FXD4:0.40193)0.929:0.15357,(A0A085N4A7:0.71374,A0A5S6QYL9:0.15483)0.990:0.26256)0.546:0.08127)0.544:0.03521,A0A0C2MHN2:0.71621)0.985:0.27304)0.718:0.06836,((M3JU13:0.60960,((((I1BHB9:0.50972,((A0A0C9N6C7:0.40396,A0A0B7MU93:0.61731)0.970:0.34259,(A0A0B7N9E3:0.76623,A0A0B7MPK1:0.65074)0.855:0.15926)0.172:0.14077)0.950:0.19207,((A0A163MLY6:0.53174,A0A068SGQ1:0.40841)0.931:0.17481,(A0A7S4HQ34:0.65679,A0A6A3MPF2:0.92580)0.897:0.22209)0.070:0.04266)0.953:0.17717,A0A1B7W7V1:0.66038)0.810:0.08043,(A0A507FB23:0.94011,A0A2P6MMT6:0.60876)0.819:0.11585)0.993:0.23559)0.174:0.04875,A0A1W0WLC4:0.87609)0.659:0.06440)0.217:0.05849)0.719:0.02322)0.898:0.03890)0.615:0.04654)0.242:0.02935,(((A0A1D1USV5:0.74357,(A0A1Z9ABV2:0.65736,A0A833CZZ6:0.87063)0.837:0.11753)0.871:0.20996,(A0A1R1XB37:0.77661,(((A0A1C7N163:0.67457,(A0A1X0QHS8:0.49408,A0A4C1SM74:0.47376)0.566:0.17097)0.000:0.11702,(A0A0B7N123:0.53104,A0A0B7MP39:0.69094)0.514:0.12983)0.858:0.07945,A0A3S3RK21:0.58221)0.128:0.05479)0.662:0.06108)0.842:0.05286,(((V9H1C7:1.13694,(A0A2G8L3V0:0.85746,A0A5B7GS36:0.80245)0.012:0.07397)0.841:0.14192,(A0A3S3RGN5:0.58611,(A0A3S3PEZ9:0.61850,A0A443QG42:0.53864)0.310:0.09730)0.973:0.21337)0.758:0.04923,((((A0A6B0VGX1:0.39215,A0A0N7LBD9:0.51929)0.000:0.12558,(A0A177TYE3:0.67427,A0A177T6R8:0.58708)0.833:0.14055)0.509:0.06858,(A0A0B7FGV3:0.60095,(A0A0C4EP09:0.68994,A0A0B7N4H6:0.96639)0.576:0.11462)0.367:0.04193)0.901:0.11651,((A0A2H8TVD7:0.55344,(A0A418RIY2:0.86785,A0A1D2M200:0.58762)0.371:0.05643)0.925:0.22778,(((A0A1R1X278:0.40280,A0A7S1VFA6:1.38691)0.504:0.22832,A0A226DPM3:0.98871)0.825:0.12170,(A6REX9:0.53775,((L7N6E2:0.94628,A0A537JEL8:0.47083)0.858:0.11682,((A0A162ISE9:0.55713,((A0A139IFZ0:0.91262,A0A1W5CSX7:0.25739)0.844:0.10618,(A0A1L7XJP3:0.69403,S3CBB0:0.83906)0.151:0.03756)0.767:0.11255)0.942:0.15995,U1GAA6:0.61286)0.791:0.13964)0.942:0.16676)0.948:0.17586)0.956:0.15824)0.156:0.06061)0.888:0.06940)0.786:0.04808)0.955:0.07654)0.822:0.02844,((A0A177B588:0.97227,((A0A0V1APF3:0.85755,A0A0V1GXQ3:0.66021)0.717:0.13824,((A0A1A8E5U0:0.85937,(A0A2K1J2I2:1.10714,A0A6J8DQS1:0.57094)0.654:0.18832)0.648:0.07983,((A0A8B6HI41:0.86612,A0A672I7P2:0.56708)0.445:0.07219,A0A4U5TVX9:0.69352)0.140:0.14737)0.654:0.09835)0.000:0.02726)0.511:0.16433,((A0A6L2Q064:0.59852,A0A224XDE0:0.72356)0.932:0.18021,((((((A0A8B6BEJ5:0.34251,(A0A6J8A1A1:0.44795,A0A6J8D7V1:0.48424)0.593:0.08281)0.974:0.17195,((A0A226DRM8:0.57116,A0A1D2M490:0.92108)0.925:0.23687,((A0A150G980:0.54553,A0A7J6P183:0.80079)0.945:0.20716,((A0A0R0LUA6:0.75655,A0A267F6R8:0.47248)0.924:0.21515,(A0A7S3XV63:0.72067,A0A0B7MVV3:0.77068)0.238:0.00053)0.825:0.10174)0.882:0.09569)0.860:0.04230)0.752:0.01510,(A0A6J8DMY9:0.50792,A0A8B6CW70:0.58111)0.844:0.07454)0.913:0.05831,((A0A391NS33:0.58597,(A0A3S3PGH2:0.47291,A0A4C1U0C2:0.55262)0.769:0.10769)0.925:0.10973,(((A0A2S2NC39:0.45314,(J9L3T6:0.28958,J9L8N4:0.49313)0.181:0.13078)0.990:0.29841,(A0A443Q864:0.62335,A0A6H5JGV3:0.62408)0.176:0.15419)0.791:0.12649,(((A0A023G4Q1:0.27545,A0A4Y2VBM6:0.40361)1.000:0.40318,(A0A5C6NZC6:0.30329,(A0A2G8KAL9:0.28003,(A0A6A4SZI2:0.55161,A0A2G8LII3:0.30386)0.925:0.16360)0.882:0.10426)0.973:0.21484)0.496:0.13485,((((A0A6A7FWV7:0.58114,A0A2G8LCY1:0.47084)0.967:0.21324,((A0A151NX15:0.47578,(A0A147BPF4:0.35305,A0A4Y2DNX6:0.56978)0.964:0.18737)0.166:0.07271,A0A4V6ALN6:0.34393)0.863:0.09313)0.074:0.01810,A0A267F757:0.61533)0.236:0.01417,(A0A432I2N3:0.42938,(A0A6J8DAL0:0.33161,(A0A8B6CN90:0.46813,(A0A131XKF8:0.51916,A0A2T7NZ60:0.60765)0.846:0.13525)0.705:0.13866)0.881:0.11532)0.922:0.10538)0.880:0.06517)0.938:0.07585)0.361:0.03744)0.875:0.04773)0.141:0.02130,(((((A0A7D9LQ69:0.58649,A0A7D9ETA7:0.68315)0.828:0.11136,((A0A1Y1IEV6:0.65830,A0A1Y1IIJ1:0.50290)0.829:0.11700,(((A0A0D2KUF9:0.72322,(A0A150FUT8:0.57584,A0A250XTB7:0.89253)0.154:0.06648)0.939:0.18900,A0A1Y1HWG3:0.45745)0.965:0.21019,A0A2R6WJG7:0.37876)0.406:0.10692)0.997:0.26117)0.740:0.07159,(A0A6L5CGB3:1.10543,(A0A6H5IL95:0.51041,A0A139WKX9:0.16905)0.941:0.25099)0.129:0.10622)0.726:0.01670,(A0A3R7PAU9:0.63569,(A0A6N6ZI89:0.62470,A0A1Y1IKP5:0.63088)0.243:0.14137)0.904:0.14889)0.838:0.03683,((((((A0A6H5IQV0:0.34706,A0A6H5IJA7:0.38478)0.970:0.16361,((A0A3Q0JAQ4:0.53455,(A0A6J2YVZ2:0.56910,(A0A4Q3ER58:0.64575,A0A1W7R6D0:0.34670)0.771:0.13165)0.742:0.08798)0.415:0.00652,A0A6H5GW79:0.46249)0.857:0.06088)0.267:0.07180,A0A6V7LWY5:0.68769)0.763:0.11539,A0A6H5HVT5:0.42177)0.860:0.07999,Q9XZR7:0.51355)0.992:0.23101,(A0A4C1T9Z8:0.87888,(((A0A355BAI1:0.56595,A0A1W7R6I0:0.39189)0.988:0.25909,(A0A6H5FWK6:0.60086,(((A0A6H5J8C6:0.37043,A0A6H5HW71:0.77020)0.794:0.05556,(J9M772:0.34333,(J9KFQ5:0.50234,A0A4C1SLP1:0.54125)0.632:0.04654)0.848:0.11258)0.861:0.07815,A0A811WPI5:0.30095)0.631:0.04687)0.879:0.09315)0.903:0.09249,((A0A423TXR2:0.53221,(A0A2S2QIS3:0.38157,(A0A821N8H0:0.47186,(A0A146KYH2:0.46864,A0A4C1ZEQ7:0.39926)0.201:0.08992)0.939:0.14196)0.986:0.24013)0.868:0.13292,(A0A6L4YBZ3:0.67042,(A0A168PUD8:0.34775,(A0A1C7N279:0.30320,(A0A0B7NJ66:0.63594,I1BMK8:0.56054)0.147:0.02129)0.968:0.21552)1.000:0.45469)0.924:0.13453)0.776:0.03895)0.063:0.02690)0.899:0.09914)0.271:0.04776)0.921:0.07299)0.852:0.04731,(((A0A6S7G4K5:0.64414,((A0A811WXQ2:0.60594,A0A7E5WZ59:0.25863)0.995:0.28810,(A0A3S4Q7D3:0.53292,A0A7J6NWC9:0.54406)0.915:0.14857)0.504:0.10173)0.000:0.09383,((((A0A2S2PQS7:0.60744,(A0A4Y2WDD0:0.53252,A0A834VGD0:0.46814)0.128:0.06561)0.903:0.13793,A0A158P5B0:0.37338)0.908:0.11360,A0A147BNG4:0.78822)0.862:0.09113,(A0A0V0VK44:0.45096,A0A7J6R1T0:0.45794)0.922:0.17735)0.837:0.06206)0.875:0.06433,((((A0A168PDK8:0.47333,A0A0C2IKL9:0.50580)0.928:0.15006,(((((A0A8B6BFK5:0.42256,A0A6J8AEX2:0.42131)0.364:0.05943,(A0A6J8EI40:0.40639,(A0A6J8CRF2:0.43901,A0A8B6BPT7:0.39907)0.681:0.04232)0.816:0.06858)0.839:0.08245,(((A0A267DJJ7:0.60781,A0A816N347:0.53973)0.941:0.15445,((H3B5T7:0.44719,(A0A4Y1ZMP8:0.50909,A0A2B4RFI4:0.71548)0.898:0.14300)0.134:0.08972,(A0A661S391:0.53474,((A0A6J8BQZ0:0.53150,A0A6J8EDY3:0.17216)0.976:0.18960,A0A6J8AZU9:0.43164)0.906:0.10874)0.908:0.11503)0.836:0.07267)0.577:0.04047,((A0A498NY67:0.44338,A0A289ZXJ9:0.38935)0.947:0.12728,((H3A8S3:0.43596,(A0A2G8JPJ0:0.26276,A0A0B7BPE4:0.40703)0.393:0.05780)0.850:0.09102,((A0A0S7FIH7:0.57572,A0A2G8JE76:0.36283)0.192:0.04644,A0A5C6MH20:0.27953)0.839:0.07013)0.783:0.03728)0.961:0.07990)0.754:0.02672)0.800:0.03025,((((((A0A164NAB2:0.46036,(A0A164Z278:0.41706,A0A164DZJ6:0.08996)0.939:0.14850)0.970:0.17518,(A0A814HHR5:0.36304,A0A814LMI9:0.37811)0.970:0.18911)0.367:0.10558,((W6UC39:0.48172,A0A654GHK7:0.33150)0.410:0.04848,(A0A654I1U6:0.50382,(A0A564YRN0:0.41207,(A0A654I6T7:0.40490,A0A7M3QFL6:0.33024)0.847:0.07419)0.669:0.02212)0.066:0.02068)0.975:0.10484)0.000:0.05370,(A0A4Y2C9E2:0.21198,A0A0A9X4Z0:0.48914)0.821:0.04474)0.862:0.04515,(((A0A0V1MID2:0.44792,A0A0V1P4K7:0.21106)0.812:0.04619,A0A0V1E274:0.64082)0.801:0.04132,A0A6P8FUJ4:0.37236)0.291:0.01890)0.865:0.04727,A0A6F9DK63:0.48262)0.794:0.02236)0.553:0.04874,((((A0A818VFL3:0.33455,A0A815USW3:0.23387)0.996:0.28024,(((A0A085LZE7:0.40055,A0A2P4XZG0:0.46083)0.297:0.04036,A0A164W9Q7:0.36052)0.102:0.04222,A0A164MPC5:0.43046)0.549:0.06337)0.624:0.03742,(A0A164T5S3:0.33199,A0A023AWJ7:0.49117)0.898:0.12131)0.717:0.06274,(((A0A498LW63:0.37824,A0A498LAW3:0.27145)0.898:0.10873,A0A815WKX3:0.33444)0.199:0.03159,A0A818RT05:0.31964)0.897:0.06962)0.971:0.11634)0.619:0.04659)0.410:0.01374,(A0A814BB13:0.48530,((A0A015IZV2:0.33262,A0A2H5TM40:0.34426)0.947:0.13269,(A0A226D5N4:0.61208,(A0A6A3JZ17:0.19275,A0A024TPM7:0.25762)0.999:0.34162)0.893:0.11224)0.258:0.00487)0.911:0.04459)0.475:0.02950,((A0A0G4HR59:0.38541,A0A0G4HXQ9:0.41512)0.987:0.22703,A0A0C2J5H9:0.36733)0.954:0.14772)0.773:0.01958)0.800:0.02047)0.000:0.00709)0.219:0.00629)0.943:0.06238)0.982:0.08265,((((A0A0N5C9L6:0.61713,A0A0K0EP90:0.64678)0.784:0.14422,((((E3NT65:0.65741,(K7GYC6:0.64865,A0A2G5VME8:0.42118)0.980:0.29135)0.716:0.08938,(A0A183GEP7:0.50368,A0A6V7VZJ3:0.49587)0.589:0.06139)0.036:0.07286,A0A0B1S6V2:0.46993)0.958:0.18982,(A0A418RMC7:0.80162,(A0A0N5B3W1:0.62885,A0A0K0FQK3:0.39382)0.907:0.22090)0.690:0.16104)0.874:0.08277)0.877:0.09618,((A0A7S4G350:0.86560,A0A5J4YQC4:0.74391)0.840:0.18856,A0A163LV02:0.47099)0.965:0.22281)0.737:0.02840,(A0A7J6N4J0:0.95599,(A0A443SAP6:0.63447,A0A3S3PEC7:0.64590)0.453:0.19748)0.307:0.07422)0.936:0.10278)0.907:0.03675,((A0A0R0LU69:0.70538,(((A0A1Y1S7M2:0.35855,Q15F63:0.49114)0.817:0.06721,(A0A0F9YLY5:0.52487,A0A0R0M1S3:0.36908)0.951:0.17231)0.755:0.12248,(A0A177EN62:0.49914,A0A177ENS2:0.66096)0.916:0.14449)0.389:0.08104)0.999:0.35445,((((A0A7M5XDE8:0.72863,(A0A5J4YJI8:0.88841,A0A7S0ZFC7:0.53550)0.609:0.15401)0.941:0.18555,(((A0A4D8Y5Q8:0.88828,(A0A812STE2:0.68762,A0A7S3HIW8:0.36869)1.000:0.94580)0.823:0.16233,(A0A023AWZ7:1.04067,((A0A443S326:0.58554,(M5CCK2:0.75761,W4P2T7:1.08840)0.000:0.17145)0.872:0.10563,(A0A2R5LCV1:0.49880,(A0A4D5RCA6:0.65080,A0A443S6E4:0.65710)0.863:0.15820)0.935:0.17210)0.977:0.27128)0.006:0.00639)0.861:0.07256,(A0A4Q3NXH3:1.22081,(((A0A090MTF3:0.58670,A0A0N5BCJ0:0.34228)0.929:0.23529,(A0A0N5BQ76:0.50845,A0A0K0FRL5:0.86238)0.557:0.16329)1.000:0.55586,(((A0A225VA50:0.49572,A0A225WMZ5:0.13368)0.988:0.25494,(A0A225V859:0.44399,A0A6G0W8E0:0.53574)0.199:0.10265)0.844:0.08067,((A0A6A3NXS5:0.11867,(A0A225VI46:0.32328,A0A2P4WWE3:0.24488)0.234:0.00208)0.858:0.05708,(A0A225WUL0:0.59416,A0A225WYJ9:0.62569)0.901:0.13979)0.974:0.18791)1.000:0.67807)0.445:0.01441)0.843:0.14776)0.907:0.07982)0.724:0.06686,(A0A2T7NKB6:0.72149,((A0A267F178:0.74023,(((A0A267EVB3:0.43170,A0A0N5BY74:0.79361)0.894:0.16415,A0A267E8T4:0.63521)0.558:0.10881,(A0A074ZVH2:0.61203,A0A183AGZ3:0.59414)0.962:0.29064)0.826:0.09117)0.877:0.09997,(((A0A498T1H9:0.35658,A0A0K0FNY6:0.90880)0.969:0.29881,((((A0A2G8L8I3:0.26470,A0A2B4RBJ0:0.41806)0.999:0.40044,(((A0A0J7K7W1:0.47975,(A0A6J1RRS8:0.60125,A0A0P6IWY8:0.53812)0.905:0.14594)0.305:0.03400,(A0A6P7URU8:0.41465,A0A6B0VGA0:0.52548)0.926:0.15235)0.839:0.10512,((A0A4Y2AGE1:0.47007,A0A0N5C173:0.84137)0.405:0.10909,A0A0A9Z952:0.41732)0.975:0.24597)0.076:0.03608)0.547:0.04900,((((A0A182PBU3:0.75086,(A0A6J1T5A2:0.71417,A0A349AXA4:1.08560)0.320:0.07839)0.792:0.05926,(((A0A085ND74:0.38708,((A0A0V1I3C9:0.56740,(A0A6J1U9N4:0.51462,(A0A085MZ77:0.39718,A0A4Y2M6R3:0.32992)0.886:0.12747)0.671:0.09542)0.952:0.17713,A0A6L5D7B4:0.47443)0.773:0.13363)0.419:0.07270,A0A085MZ19:0.57477)0.584:0.06211,(A0A7I0ZBW4:0.50423,A0A0J7KFJ3:0.49343)0.442:0.09161)0.843:0.08535)0.978:0.16398,((((A0A2A4JEX3:0.57766,A0A0V0ZGS7:0.45925)0.811:0.08861,(((A0A5S6Q9J0:0.42461,A0A2S4PJW8:0.53479)0.900:0.10284,A0A0C2MV35:0.31053)0.256:0.04827,A0A6H5G7D0:0.51382)0.933:0.11101)0.989:0.19041,((A0A7M7Q5L8:0.68083,((A0A6H5FYY5:0.52168,A0A4Y2ICK2:0.41498)0.000:0.08378,(A0A7F5R640:0.59384,(A0A0J7KE65:0.31430,(A0A0J7KJD4:0.44048,A0A6J1RFH9:0.37873)0.952:0.19383)0.675:0.06999)0.951:0.14639)0.534:0.05679)0.494:0.06282,(A0A0C2MSE0:0.45014,A0A443R0C1:0.55855)0.844:0.16394)0.367:0.03519)0.912:0.05715,((((A0A5S6R6E2:0.47249,(A0A0C2J2W0:0.41752,(A0A7J7KAR9:0.49792,A0A815FWL1:0.40632)0.220:0.07060)0.677:0.09496)0.880:0.08634,A0A6F9DEH0:0.77342)0.450:0.07643,((A0A4U8UL24:0.28686,A0A183BVP9:0.33405)0.955:0.15273,(A0A821UPN2:0.41915,((A0A0V0RVS7:0.71165,(A0A7T8JZ00:0.61496,A0A0N5BN48:0.63441)0.854:0.12158)0.830:0.09625,((((A0A1I8AYE2:0.48936,((K7HJS8:0.25254,A0A0C2GU32:0.50042)0.371:0.06639,E3NKK3:0.41475)0.813:0.10452)0.440:0.02101,(((A0A2G9URV7:0.39123,A0A0D6L9V6:0.33759)0.867:0.08266,(A0A0B1PJA2:0.23002,A0A5J4NQQ0:0.53758)0.875:0.09028)0.642:0.09021,(((A0A564YQ24:0.50564,A0A0R3SB69:0.49642)0.959:0.20988,(A0A5J4NN91:0.37227,A0A654GWB4:0.31730)0.869:0.08323)0.769:0.02691,A0A6A5DFC2:0.41242)0.981:0.13033)0.936:0.10887)0.921:0.08187,A0A0J7K7Q6:0.49849)0.817:0.06006,(A0A1Y3EL04:0.17901,A0A0V1JLE1:0.22534)1.000:0.30446)0.326:0.04538)0.867:0.05514)0.562:0.05797)0.486:0.09888)0.881:0.05940,(((A0A2B4S417:0.45700,(A0A2B4SZ86:0.30126,A0A6S7HN31:0.40316)0.904:0.08688)0.937:0.09486,((A0A2B4RXH4:0.47578,(H3AIK2:0.52306,H3B501:0.49105)0.938:0.16296)0.747:0.04082,((A0A2G8JVU9:0.44434,(A0A4D5RH54:0.55769,(X1XU19:0.54024,A0A0A9ZFT1:0.53863)0.015:0.04859)0.699:0.06369)0.678:0.03080,(((A0A6J0C928:0.65483,A0A3R7CXH9:0.53999)0.765:0.16158,(A0A811WNA1:0.34642,A0A4C1X962:0.34450)0.980:0.19373)0.672:0.04940,((A0A1X7VLF9:0.43436,A0A2B4R999:0.63686)0.949:0.15704,((A0A7D9JNR4:0.34677,A0A7D9IFJ0:0.39737)0.942:0.12621,(A0A3B3T0U0:0.30945,A0A654H2F5:0.51084)0.197:0.04946)0.739:0.05178)0.689:0.01847)0.331:0.03380)0.871:0.08754)0.913:0.07573)0.819:0.03979,(A0A4C1ZRI4:0.97794,((A0A1Y1LDW7:0.60203,(A0A6H5I6T3:0.66061,A0A1Y1JZP1:0.39416)0.959:0.20780)0.862:0.09660,(A0A3Q0JLZ1:0.33527,A0A0A9YFS8:0.58097)0.979:0.20462)0.555:0.06583)0.416:0.04085)0.800:0.03028)0.000:0.01060)0.908:0.06221)0.147:0.03910,(A0A6H5IFA9:0.54381,(A0A0N0PC64:0.64651,A0A0C2IGS0:0.45670)0.000:0.12631)0.655:0.09252)0.873:0.08056)0.873:0.07622,((A0A6S7JX59:0.53282,A0A6J0C820:0.66182)0.248:0.06202,A0A267DRM8:0.80931)0.893:0.10819)0.845:0.06893)0.939:0.14863,A0A267DPS0:0.64356)0.541:0.09062)0.763:0.11616)0.911:0.10726)0.266:0.02802,((A0A166VNH7:0.98920,A0A023AX45:0.76335)0.823:0.25144,((A0A023AXA5:0.43399,A0A023AWS5:0.48541)0.994:0.36808,(A0A0F8D8U4:0.48275,(A0A420H9B8:0.77330,(A0A2S4PM14:0.31493,A0A7C8IHI1:0.40095)0.962:0.24608)0.067:0.18827)0.983:0.29199)0.338:0.05914)0.873:0.14888)0.743:0.02019)0.723:0.02693)0.661:0.01106,((A0A023AX67:0.83721,((A0A151R3E4:0.31433,A0A1S3DZH9:0.64413)0.989:0.28489,(Q93YE2:0.51406,((Q7XFN9:0.24480,(A0A6L2L9E3:0.56246,A0A5K1CRJ0:0.16076)0.995:0.30137)0.971:0.16277,(A0A5B6WTV1:0.39648,A0A2U1MFH9:0.51742)0.742:0.02530)0.844:0.06002)0.889:0.13473)0.938:0.18968)0.426:0.16422,(A0A813ZJT1:0.67803,(A0A6H5L269:0.64721,(A0A6H5JT06:0.46078,A0A6H5J9N0:0.47684)0.978:0.29192)0.930:0.29842)0.950:0.20803)0.911:0.12006)0.897:0.03509,(((((A0A0N5B5L4:0.72639,A0A0K0FR94:0.45860)0.931:0.27399,(A0A090KVV6:0.68017,A0A0K0ERQ5:0.64725)0.967:0.28752)0.985:0.37892,((A0A6H5JCK9:1.33452,(A5E131:0.76081,(((((A0A0C4ENI0:0.49641,((A0A369KG48:0.59184,A0A284RMP4:0.49028)0.979:0.34983,A0A177T2T2:0.64186)0.346:0.06933)0.949:0.15587,(A0A5E3XEW1:0.44130,A0A0D0ATX3:0.63782)0.910:0.14855)0.964:0.19912,((A0A6J4VDF6:0.45829,((A0A1R1YBT2:0.18749,A0A1R1XS20:0.41177)0.981:0.25101,A0A507DTK6:0.68883)0.880:0.15134)0.066:0.07315,(A0A388M4P9:0.45788,(A0A388K947:0.36969,A0A388JN09:0.43552)0.250:0.11479)0.997:0.25821)0.834:0.06749)0.862:0.11225,(A0A4Q4PW94:0.36758,(A0A4V1XRC0:0.45175,K1WQ40:0.84385)0.403:0.07481)0.984:0.22533)0.913:0.18288,A0A642UWB1:0.57735)0.930:0.19904)0.978:0.42261)0.578:0.04077,A0A182VIV1:1.37374)0.861:0.13943)0.929:0.15769,(((A0A6H5JF70:0.95807,A0A0N5B5K3:1.01663)0.000:0.14485,(((((A0A0K0DZW5:0.47849,(A0A0K0EFR9:0.56552,A0A0K0EAB9:0.43518)0.972:0.30461)0.981:0.34791,(A0A0K0EBY2:1.18379,A0A0N5BYT0:0.68078)0.858:0.25146)0.528:0.11579,(A0A0N5B1U6:1.21800,(A0A0K0FTG8:1.11859,(A0A0N5B361:0.63222,A0A1I8D3L2:0.48813)0.939:0.26882)0.708:0.14653)0.890:0.18730)0.072:0.17334,((A0A0K0F365:0.64181,((A0A0K0EMM4:0.51272,A0A0K0FHL8:0.37587)1.000:0.52771,A0A0N5C5G5:0.46479)0.941:0.27705)0.979:0.31938,(A0A0K0E5U3:0.95347,(((A0A0N5CDW8:0.67128,A0A0N5B2Z2:0.73661)0.824:0.21621,((A0A0K0FER7:0.93966,(A0A0N5BDS9:0.47532,A0A0K0DTT7:0.81972)0.850:0.15305)0.025:0.07315,A0A0K0E4M4:0.82011)0.875:0.14792)0.494:0.05213,A0A0K0FSF7:0.93965)0.963:0.23490)0.874:0.11241)0.134:0.02384)0.939:0.24042,(K0KSJ0:0.76408,A7TKG9:0.82258)0.967:0.48242)0.565:0.14669)0.900:0.12300,((((((((A0A6J1PVV2:0.38333,A0A0J7K756:0.32591)0.957:0.12419,A0A1E1X2Y8:0.41545)0.180:0.04020,(A0A7J7K1P1:0.55321,A0A6H5G7H2:0.61681)0.925:0.17469)0.247:0.04681,((A0A2B4RL02:0.50961,(((((((A0A2B4RE50:0.65813,((A0A2B4SIZ5:0.42473,(A0A2B4R8T9:0.44256,A0A7D9E5M6:0.36997)0.902:0.14066)0.752:0.03780,A0A2B4RZR4:0.43401)0.765:0.05865)0.611:0.02622,A0A2B4RER9:0.45169)0.660:0.01209,A0A2B4SN41:0.58356)0.669:0.04818,(((A0A812CIB2:0.67313,(A0A6P7WAP3:0.29894,A0A2B4SNC1:0.50796)0.830:0.06083)0.928:0.12100,(A0A2B4SI53:0.29282,(A0A3S0Z747:0.33755,A0A2B4R3A5:0.32312)0.900:0.06795)0.952:0.12872)0.267:0.04334,A0A6S7IPL4:0.37503)0.986:0.16909)0.915:0.09339,((A0A6S7KPV5:0.41899,A0A2B4SXF8:0.36368)0.930:0.11433,(A0A2B4RGE6:0.47732,A0A1W7R6G4:0.44776)0.833:0.10315)0.293:0.06728)0.964:0.12593,(((A0A7D9KE98:0.34373,A0A2B4R5X5:0.56725)0.905:0.11078,(A0A7D9E7T0:0.86283,A0A2G8LEH2:0.32155)0.938:0.19732)0.692:0.05989,((A0A2B4RPL2:0.65452,A0A3P9KLT8:0.27111)0.905:0.10165,(A0A2B4RNI0:0.74994,(A0A2B4S4K4:0.38860,A0A2B4RPF5:0.36696)0.949:0.17580)0.929:0.13788)0.937:0.11693)0.992:0.17426)0.614:0.04358,((A0A6S7JDY0:0.34631,(A0A6S7IIT9:0.38070,A0A6S7H7I2:0.33100)0.550:0.07321)0.418:0.05912,(A0A2B4R5P6:0.41300,(A0A2B4SMK4:0.56115,A0A669AVS4:0.34341)0.780:0.11409)0.493:0.06799)0.580:0.07616)0.765:0.03648)0.839:0.02788,((A0A2R7W3M1:0.50720,(((X1WQP2:0.34955,(A0A6J2X1D6:0.42240,(A0A5N3ZZL8:0.37451,(A0A6G0VVQ0:0.31911,J9LZC2:0.40806)0.974:0.17159)0.803:0.04739)0.873:0.06297)0.819:0.03417,((A0A7D9D9K5:0.35904,(A0A1Y1MJR5:0.77039,A0A2B4RCN2:0.55275)0.613:0.07530)0.037:0.03405,(A0A4Y2AK25:0.30796,A0A4Y2E4U0:0.53262)0.877:0.08483)0.847:0.03774)0.886:0.03752,X1WVQ6:0.82532)0.453:0.01275)0.900:0.12829,A0A267G2J7:0.66557)0.336:0.03609)0.940:0.06874)0.657:0.05761,(A0A6J1P689:0.48221,A0A4Y2D1Q3:0.43915)0.963:0.16010)0.460:0.03725,(A0A4Y2JZR7:0.44520,A0A162D3Z4:0.57531)0.913:0.11150)0.960:0.08893,(((A0A2T7PE47:0.40191,A0A498MNZ2:0.31038)0.933:0.14715,(A0A0A9WW63:0.66047,(A0A8B6H8N2:0.49586,A0A6P6LV72:0.38919)0.630:0.01743)0.960:0.13979)0.828:0.07642,(((((((A0A7T8GUD4:0.56850,(A0A3R7NQ00:0.31670,A0A423T0B1:0.31954)0.928:0.13706)0.948:0.18521,A0A6A4VT35:0.43503)0.422:0.08470,((A0A162PXQ8:0.20278,A0A164MRW6:0.55697)0.996:0.37816,A0A6H5H7Z7:0.40157)0.855:0.10657)0.774:0.09133,A0A2A5ATR8:0.86535)0.847:0.07132,(A0A0P4W1I8:0.35228,(A0A2B4SKT1:0.47235,A0A7D9JU10:0.48975)0.926:0.20572)1.000:0.45592)0.940:0.13792,(A0A7D9LJY8:0.60242,A0A267EWE3:0.45397)0.927:0.13380)1.000:0.34483,(((A0A6S7G0E1:0.69242,(((((((A0A2B4R723:0.43482,A0A2B4RK21:0.31644)0.819:0.06553,(A0A2B4RSX3:0.30865,A0A2B4R938:0.46564)0.339:0.07781)0.938:0.08798,A0A2B4SYL5:0.44463)0.298:0.03514,A0A6S7K004:0.33014)0.931:0.08202,(((((A0A814AJ56:0.55804,A0A814J5P7:0.57361)0.948:0.18529,A0A6S7HD15:0.39475)0.516:0.03506,A0A814HX30:0.39152)0.880:0.05333,((A0A6S7GCT6:0.70436,A0A6S7JX20:0.39640)0.945:0.22993,((A0A6S7J8Z9:0.65471,A0A6S7KD24:0.39933)0.996:0.40474,A0A076VEX3:0.50410)0.754:0.03406)0.957:0.12236)0.153:0.01227,(A0A6S7I5M0:0.31148,A0A2B4S853:0.42719)0.955:0.11652)0.943:0.07552)0.711:0.01998,(A0A3M7PEP4:0.63627,(A0A814JWN3:0.38236,(A0A3M7QZL4:0.79883,A0A6S7LJ14:0.78314)0.915:0.18643)0.829:0.08498)0.955:0.14048)0.290:0.06777,A0A267DNR8:0.66888)0.783:0.08383)0.829:0.03398,(((A0A811W4T5:0.42814,A0A0J7KFK7:0.37124)0.599:0.08158,(A0A182GBY5:0.42292,A0A6L5D3P2:0.80360)0.936:0.15409)0.981:0.21074,((A0A6A4SZF3:0.69059,A0A267E3C5:0.38156)0.838:0.08834,(A0A085N373:0.40632,A0A2G8KJA9:0.32147)0.609:0.08734)0.980:0.16140)0.070:0.01602)0.926:0.06450,(A0A2B4SCR3:0.87719,(A0A182G926:0.60803,A0A182GWE7:0.57092)0.914:0.24947)0.732:0.07245)0.958:0.07981)0.755:0.04445)0.483:0.04250)0.991:0.23223,(A0A5C7KSX0:1.62841,(((A0A1V9ZZZ0:0.54470,(((A0A024UI62:0.27312,(A0A6A4Z9U0:0.27971,A0A6A4FJL8:0.51030)0.914:0.14586)0.941:0.14832,(F0W7B6:0.55127,(A0A6A3XSY5:0.27297,(A0A6A4ZPW6:0.31264,W4GJ73:0.30127)0.922:0.12301)0.220:0.08049)0.973:0.17773)0.980:0.14798,((A0A3P3Y6I3:0.62551,(A0A0G4J378:0.93284,A0A0H5QZN7:0.39507)0.994:0.48729)0.930:0.19796,(A0A0G4J949:0.70626,(((A0A484DSB5:0.71956,A0A2P4XNQ9:0.38837)0.699:0.10912,(((A0A225V8L2:0.52453,(A0A225VFN1:0.77710,(A0A225W722:0.35495,A0A081A2M0:0.29580)0.961:0.21678)0.923:0.18160)0.527:0.08999,(A0A2P4XNR0:0.43313,A0A225UYH6:0.35479)0.513:0.08443)0.766:0.04753,(((A0A2P4X9F3:0.31958,A0A2P4YAX4:0.28035)0.976:0.21373,A0A6A4DF14:0.46229)0.865:0.09641,(A0A225WG09:0.36788,A0A225WV86:0.63452)0.887:0.13183)0.870:0.07855)0.866:0.08880)0.897:0.13668,(((A0A6G0XS72:0.53249,A0A485LD77:0.28482)0.983:0.29741,F0WXL3:0.87376)0.809:0.09742,((A0A6A3KVD3:0.34895,A0A225WUN9:0.66748)0.167:0.03794,(A0A6G0QB80:0.36259,A0A225W1J5:0.68185)0.961:0.21588)0.942:0.13569)0.277:0.04372)0.971:0.16109)0.792:0.05834)0.871:0.08783)0.359:0.05899)0.967:0.32232,A0A2D4RW98:0.74238)0.699:0.23923,(A0A433CYQ6:1.33451,A0A2R5FEA8:1.08078)0.616:0.25340)0.434:0.08687)0.933:0.22740)0.284:0.05985)0.295:0.04285)0.809:0.05617,(((((A0A182GXU0:0.62683,(A0A4Y2NDC1:0.48017,A0A4Y2RFM8:0.29308)0.985:0.21068)0.422:0.05090,(X1XD76:0.35548,A0A0J7KK73:0.44127)0.724:0.13612)0.508:0.04493,A0A0J7K6D6:0.54429)0.865:0.11804,(A0A7G3AWI1:0.47976,(A0A034VPR8:0.32413,A0A7R8UMS6:0.47275)0.930:0.16796)0.935:0.16618)0.974:0.17513,((A0A0N5BSS4:0.63420,(E3NIW8:0.45990,A0A267EZL3:0.58752)0.750:0.11647)0.830:0.07712,((A0A226DGM3:0.66003,A0A7S0EBU3:0.73104)0.869:0.13822,(A0A016URH6:0.30769,(A0A6H5KBF4:0.67510,A0A0G4G2C5:0.81705)0.886:0.14818)0.921:0.15650)0.527:0.09115)0.927:0.10454)0.742:0.07785)0.750:0.01176)0.536:0.02884)0.343:0.05494,(((A0A267ENI1:0.68176,(((A0A2J7PRQ5:0.50532,((A0A6L5CKR1:0.45571,(A0A1Y1KY18:0.52457,A0A1B6G9I6:0.52743)0.907:0.13770)0.783:0.08696,A0A811W5D5:0.66635)0.725:0.03166)0.828:0.09490,((A0A1B6DFS4:0.52093,(A0A2S2NBD6:0.50897,(A0A6G0Y8U0:0.18663,X1WJ94:0.08687)1.000:0.32038)0.872:0.10085)0.840:0.07705,(A0A2S2NZ20:0.28357,X1WWM7:0.53460)0.998:0.37402)0.860:0.15144)0.000:0.04401,((A0A0J7KIJ7:0.51134,A0A6V7JTR6:0.59013)0.913:0.14308,(A0A146LDL4:0.64821,((A0A6H5HK59:0.78254,(A0A1Y1MEL5:0.52069,A0A0A9VWG3:0.57629)0.761:0.13865)0.241:0.11139,A0A6H5HTR0:0.62955)0.187:0.04811)0.864:0.06793)0.435:0.04011)0.992:0.21970)0.812:0.09475,(((A0A183CNU7:0.40194,(A0A0N4X776:0.44918,A0A2H2HZZ6:0.35446)0.885:0.11536)0.998:0.36253,((A0A0N5BP40:0.68982,((A0A0K0ENQ8:0.53507,A0A0N5BI78:0.67142)0.985:0.38343,(A0A0K0FER9:0.67846,(A0A0K0EBX3:0.72058,A0A0K0E9H5:0.56759)0.308:0.11258)0.517:0.12246)0.239:0.10027)0.972:0.19729,(A0A0K0FW66:0.66733,A0A0N5A5W6:0.41538)0.771:0.12878)0.894:0.15416)0.000:0.13449,(((A0A0K0EG18:0.78358,(A0A090KW06:0.51709,A0A0K0E4M5:0.67131)0.988:0.39250)0.852:0.14780,((A0A0K0FHX9:0.71273,A0A0K0E0X7:0.59772)0.997:0.52994,((A0A1D8PI28:0.91144,(((A0A0N5C0W7:0.74540,(A0A0K0EJ17:0.59199,A0A0K0FNU4:0.47197)0.916:0.19954)0.975:0.25129,(A0A0K0FFE4:0.87461,(((A0A0N5C4H9:0.77721,(((A0A0N5BRM8:0.47723,A0A0N5BZ45:0.69133)0.781:0.14802,A0A0K0DS37:0.46413)0.951:0.20421,A0A090KVS2:0.41141)0.961:0.27292)0.296:0.17546,((A0A0K0FX96:0.59044,(A0A090MSQ4:0.62858,A0A0K0EPP4:0.90390)0.069:0.15158)0.977:0.29913,A0A0K0DTW4:0.59454)0.884:0.18487)0.746:0.08613,(A0A0K0ETE0:0.42596,(A0A0K0ETN3:0.55925,A0A090KZI5:0.72550)0.945:0.16297)0.930:0.13901)0.930:0.15070)0.687:0.09456)0.863:0.07658,A0A0K0ETC8:0.83520)0.304:0.05826)0.858:0.09992,((A0A0K0EK66:0.70115,((A0A0N5BU31:0.50336,A0A0K0DTS7:0.70746)0.661:0.19287,(A0A090MQK3:0.56107,A0A0K0DU34:0.75921)0.913:0.21639)0.242:0.14857)0.872:0.23983,(A0A0K0FFQ9:0.92529,A0A0N5B2R3:1.10178)0.768:0.17586)0.958:0.23143)0.756:0.03421)0.809:0.04946)0.929:0.08335,(A0A0N5B8W0:0.87894,(A0A0N5BQ84:0.78194,(A0A090KZR0:0.71815,A0A0N5B5L8:0.42428)0.888:0.14914)0.506:0.06503)0.979:0.34928)0.728:0.02918)0.897:0.09033)0.651:0.06558,(((A0A498NI45:0.76251,(((A0A671L2H2:0.57240,A0A803JEM1:0.61102)0.784:0.10404,((A0A3B1II10:0.41197,A0A674F7R7:0.51002)0.994:0.30079,(((A0A674GP21:0.65451,A0A663MEJ6:0.35442)0.998:0.53517,(((A0A3M0JAG5:0.55510,(A0A3Q2TRV0:0.34625,A0A7N9IGE9:0.66190)0.948:0.20864)0.364:0.10146,(M3Z4H7:0.66132,A0A663EFR6:0.47936)0.407:0.08235)0.997:0.29757,(((A0A5F4DGD1:0.49077,(A0A4W5MLS8:0.57933,(A0A3B3BQX6:0.44034,(A0A669EMB6:0.36116,(A0A3P8TXN9:0.50885,(A0A6P8UJC2:0.28836,A0A3B3DLR5:0.28300)0.985:0.20577)0.497:0.11413)0.883:0.06968)0.762:0.04209)0.880:0.07313)0.164:0.02012,((((A0A3Q3M3X8:0.41550,(A0A6P6IUV9:0.41350,A0A3B4EGT2:0.52257)0.918:0.10925)0.627:0.07520,A0A3B4U985:0.42064)0.958:0.14705,((A0A5F8HEG2:0.60391,F6SYS9:0.35392)0.956:0.19921,A0A663E1S1:0.50099)0.901:0.12826)0.788:0.08978,A0A4W3GRR4:0.67638)0.020:0.03710)0.962:0.09816,((A0A3B4BME9:0.55599,(A0A672FP86:0.55954,A0A3P8QWF9:0.35387)0.952:0.18178)0.963:0.14047,((A0A3M0L903:0.29344,A0A3M0JWJ6:0.24131)0.998:0.28541,((A0A3M0IRD0:0.20745,(A0A3M0JYT5:0.25037,A0A3M0K8V8:0.44633)0.924:0.11581)0.990:0.20027,(A0A670ZJT9:0.54188,A0A6P6HRC8:0.42154)0.935:0.15170)0.821:0.06574)0.954:0.12008)0.447:0.03618)0.991:0.24845)0.512:0.05532)0.621:0.02314,A0A821RAN1:1.30008)0.901:0.06618)0.279:0.08420)0.964:0.25096,A0A3B5PU39:0.74192)0.428:0.15051)0.941:0.25442,((A0A2G5B4Z4:1.84447,A0A0B7NF65:1.35808)0.000:0.26779,(E4X8D3:0.75187,(E4X2E3:0.72237,E4XIC2:0.65793)0.089:0.13721)0.873:0.25837)0.846:0.15651)0.704:0.13561,((A0A816VV82:0.90645,((A0A267DUG4:0.71429,A0A0M4HYG5:0.47986)0.970:0.31029,((A0A423SYR3:0.91267,A0A0P4VVD0:0.55412)0.751:0.31135,(((Q6GV78:0.73103,E4XSX8:1.20208)0.143:0.14785,(E4XEH5:0.46645,E4XRK5:0.59701)0.912:0.19987)0.765:0.07191,A0A2D5AIF1:0.55747)0.902:0.17408)0.907:0.15573)0.634:0.05823)0.135:0.06971,(((A0A3N5IEA8:0.98960,A0A0A9WT73:0.70765)0.942:0.24378,(A0A1B6EKA2:0.60924,A0A2S2QEP6:0.64425)0.815:0.19188)0.392:0.09996,(A0A7S3Y738:0.70681,((A0A816XLC4:0.39259,A0A816ZLT1:0.55407)0.993:0.33771,(A0A816XKB9:0.39774,A0A820JAW3:0.61479)0.885:0.22489)0.937:0.21707)0.945:0.18004)0.770:0.05907)0.895:0.10384)0.846:0.09645)0.835:0.09045)0.477:0.04084)0.818:0.05426,((((A0A3N5I9C6:0.87257,(A0A4Y1ZQ29:0.72086,A0A4Y2WYD6:0.77306)0.487:0.19359)0.459:0.16019,(A0A6J8BVR8:1.02511,(E4YVI6:0.61129,E4WSV7:1.17227)0.949:0.48899)0.938:0.43255)0.458:0.04675,A0A7S3Z2T1:1.65510)0.648:0.02189,((((((A0A146H7L8:0.54155,(A0A1M2W468:0.44422,A0A4S4LAC6:0.46228)0.675:0.06822)0.992:0.30735,(A0A5N5QFT8:0.57333,A0A0B7FSG7:0.20022)0.944:0.18331)0.819:0.17763,(A0A2X0KQD9:0.61663,(A0A061H7K7:0.63516,A0A0P1BP63:0.48031)0.995:0.52752)0.562:0.10435)0.979:0.38131,((A0A2H1H9G9:0.53813,A0A2S4PMJ3:0.54715)0.995:0.57987,(A0A4P7N0L4:0.67258,(A0A0J5SQT3:0.59086,(A0A5M8PD32:0.41509,A0A1V1T5X9:0.47267)0.523:0.19661)0.495:0.18461)0.966:0.37499)0.969:0.48984)0.817:0.14666,(A0A507DVN2:1.03915,A0A813HDF3:1.13845)0.931:0.40385)0.777:0.16929,(A0A0N5CB30:1.31583,((A0A354GI41:0.66993,A0A3N5IBU3:0.63631)0.977:0.41077,A0A7S2QR73:0.98704)0.555:0.18899)0.858:0.17392)0.724:0.07513)0.886:0.09957)0.453:0.01578,((((A0A7E4RY27:0.69181,A0A7E4S9P7:0.37663)0.874:0.14932,(A0A1B6H681:0.58421,(A0A7E4RFZ1:0.73003,(A0A0A9WWC1:0.55293,(A0A6H5GP33:0.42797,A0A533ZX04:0.48847)0.131:0.07969)0.771:0.09304)0.171:0.06128)0.650:0.06735)0.864:0.09618,A0A1Y1LMU5:0.63131)0.982:0.16162,((K0SPK0:0.68009,(A0A6A3FUK0:0.59030,(A0A2P4XBR6:0.65897,A0A7K4FCI7:0.49497)0.506:0.15053)0.970:0.22860)0.834:0.13039,(A0A354GG95:0.73992,(A0A6J7ZWE1:0.27048,A0A8B6FD68:0.28650)0.999:0.44290)0.922:0.20547)0.837:0.05237)0.422:0.04398)0.928:0.16656,A0A2G8JFQ9:0.91470)0.899:0.11922,((E4YXA2:0.71696,E4YVU9:0.75554)0.973:0.43671,(A0A0N5BDJ3:1.18501,A0A0N5C6S7:1.03706)0.383:0.42033)0.858:0.18851)0.083:0.06819)0.378:0.13355)0.313:0.12697,(A0A023AWT8:1.19585,(C5K5T7:0.61060,(A0A7J6Q599:0.65103,A0A7J6U7G0:0.63609)0.911:0.32450)0.955:0.50191)0.966:0.48526)1.000:0.91120)0.818:0.15186)0.766:0.09888)0.941:0.20382)0.901:0.15859,((A0A0G0KQT7:0.89884,A0A7V8BME0:0.95604)0.566:0.09690,(F0WX79:0.42815,A0A1V9YW80:0.51787)0.999:0.74012)0.649:0.15217)0.908:0.14831,((A0A1D1VQ72:1.13906,(A0A6A5BKJ1:0.77751,A0A7S0MXH0:1.35759)0.706:0.18531)0.891:0.18423,(((I7M7X4:1.04513,(A0A1B9C278:0.75220,Q6UE72:0.54449)0.946:0.25307)0.879:0.18755,(A0A078ANZ2:0.99493,(A0A6C0J8G2:1.17311,(A0A5E8CJ50:0.80058,(A0A6C0H7X2:0.55600,A0A6C0ITM6:0.49101)0.864:0.31539)0.997:0.79030)0.945:0.39378)0.593:0.13648)0.866:0.11655,(B3SRB8:0.72282,A0A023AW47:0.73583)1.000:0.51144)0.881:0.11498)0.174:0.06274)0.855:0.06125,(((((A0A3N1LK92:2.57111,((A0A812PE75:0.83064,((((A0A812WZ29:0.92316,(((A0A812S3K1:0.77062,((A0A812R3T0:0.48914,(A0A1Q9DK32:0.43414,A0A812P745:0.63089)0.689:0.18581)0.984:0.28491,(A0A812JQJ6:0.69262,(A0A813AMR6:0.50044,(A0A812X3E6:0.56533,A0A812WR18:0.55784)0.788:0.12096)0.935:0.14275)0.595:0.09985)0.181:0.07544)0.212:0.08506,((A0A812NQ92:0.82892,((A0A812M588:0.40633,A0A812RB61:0.41351)0.999:0.36891,(A0A812UUI6:0.56310,A0A812UJV2:0.49632)0.752:0.12087)0.847:0.10655)0.049:0.07125,(A0A1Q9EM40:0.69180,A0A1Q9C6G7:0.58424)0.997:0.40854)0.924:0.14437)0.704:0.05263,(A0A1Q9DXU4:0.80856,(((A0A812X9N1:0.55567,(A0A1Q9BVI2:0.61423,(A0A1Q9BXN6:0.62564,A0A812LMY0:0.40365)0.597:0.11971)0.990:0.29856)0.709:0.08149,A0A812LPH7:0.68474)0.124:0.04418,(A0A812VCD6:0.73285,(A0A812XNH3:0.49823,(A0A1Q9DGS9:0.42998,A0A812SIZ8:0.46062)0.527:0.08150)1.000:0.46420)0.729:0.09406)0.779:0.08367)0.889:0.08827)0.816:0.05648)0.922:0.10223,((A0A812W2D1:0.84902,(A0A812RYS5:0.83791,A0A812XUR2:0.66605)0.415:0.16574)0.688:0.06140,(((A0A812MUE4:0.31944,(A0A812P263:0.55683,(A0A812UK14:0.58543,A0A1Q9F3U2:0.44155)0.811:0.12661)0.919:0.15048)0.990:0.25148,((A0A812YJF2:0.32867,A0A812UKT2:0.38299)0.996:0.34835,A0A812J6S1:0.63814)0.315:0.08128)0.905:0.09890,((A0A812M2B5:0.70995,(A0A812U2K5:0.30827,(A0A813A2P7:0.50436,A0A812LX97:0.35815)0.383:0.06813)0.975:0.22989)0.000:0.11214,A0A812Y637:0.76026)0.143:0.04280)0.923:0.09102)0.963:0.13901)0.905:0.08513,((A0A812MAB7:0.50272,((A0A1Q9BXA2:0.40905,(A0A812ZM85:0.44617,(A0A812T3V1:0.36305,A0A1Q9C187:0.55196)0.950:0.12870)0.264:0.04981)0.549:0.07867,A0A812NDN3:0.50907)0.952:0.13038)0.991:0.24341,(A0A812K9G8:0.61081,(A0A812UXZ3:0.66683,A0A1Q9D966:0.59614)0.058:0.08214)0.980:0.21140)0.943:0.13037)0.615:0.12324,(A0A1Q9EZ72:0.64242,A0A812N2S3:0.59902)0.826:0.08408)0.930:0.22728)0.999:0.52121,((A0A812VP83:0.96454,(A0A812KC36:1.09861,(A0A813FW34:0.96603,((A0A813IP22:0.54040,A0A813HG44:0.59846)0.987:0.40563,(A0A813F4N3:0.78044,A0A813HFM0:0.80721)0.934:0.29237)0.812:0.15321)0.809:0.14726)0.805:0.26906)0.986:0.45461,(A0A812N1K1:1.07820,((A0A812V761:0.66921,A0A812I779:0.59064)0.985:0.43918,(A0A1Q9DCL9:0.84141,(A0A812MB35:0.74820,A0A812W2S7:0.91311)0.818:0.15985)0.822:0.22592)0.104:0.11939)0.973:0.33203)0.901:0.21680)0.736:0.13074)0.488:0.04050,((A0A564ZCN3:1.08009,A0A7C7T0R2:1.01313)0.864:0.26939,(A0A813FAF6:1.46260,E4YX28:1.12480)0.310:0.23060)0.864:0.25415)0.855:0.11158,(((A0A0P6ITR4:0.50806,(A0A6J1SVA7:1.05643,(A0A4C1WUE9:0.58424,A0A0P6IU55:0.52124)0.812:0.09574)0.158:0.04581)1.000:0.49023,((A0A813HIA5:0.99461,(A0A813LV87:1.20483,A0A813I0K4:0.65276)0.930:0.32346)0.719:0.13681,(((A0A812J0M0:0.71496,(A0A1Q9DGY9:0.86311,(((A0A812LZ70:0.65251,A0A812PJC7:0.92196)0.810:0.13572,A0A812KAB9:0.67132)0.806:0.05718,(A0A812YXK9:0.46850,A0A812LIX9:0.57372)0.869:0.13162)0.907:0.11874)0.972:0.18326)0.900:0.10721,((A0A1Q9EGA2:0.51044,(A0A812LC01:0.50428,A0A812YL95:0.44597)0.849:0.16411)0.997:0.45673,(A0A812TZR7:0.83983,(A0A812NDK6:0.59532,(A0A812IA77:0.61808,(((A0A812ZDT4:0.37739,(A0A812ZVP1:0.49281,A0A812NP26:0.64487)0.207:0.03247)0.983:0.22725,A0A812SV87:0.38589)0.814:0.11864,A0A1Q9BWG9:0.32862)0.056:0.02833)0.868:0.09990)0.941:0.21374)0.993:0.34563)0.169:0.11024)1.000:0.33871,((A0A812SWA5:0.54304,(A0A812PKC5:0.33218,(A0A812I3B1:0.39914,A0A812WW71:0.59625)0.889:0.17999)0.945:0.26975)0.946:0.24920,(A0A1Q9E7Y0:0.90453,(A0A812JJD1:0.93034,(A0A812TE54:0.35560,(A0A812JMI9:0.45199,A0A812I4D1:0.58550)0.907:0.25991)0.911:0.19158)0.000:0.16919)0.997:0.54557)0.971:0.26217)0.677:0.09434)0.946:0.19695)0.956:0.15679,((A0A812IIW6:0.65984,((A0A1Q9CBJ2:0.48209,A0A813GG27:0.50561)0.979:0.29766,((A0A812IE89:0.45718,(A0A813FHN2:0.51987,A0A812LTJ5:0.63966)0.302:0.10652)0.274:0.09043,A0A813FZB3:0.46756)0.877:0.14046)0.830:0.09248)0.887:0.20756,(A0A5K1K0I5:0.67642,K1VCQ9:0.56591)1.000:1.06407)0.823:0.14669)0.403:0.07175)0.755:0.06220,(A0A6G1SH98:1.92110,K0SQG0:0.95582)0.878:0.26685)0.798:0.05259,(((((A0A150GNC5:0.67161,A0A0G4E8T5:1.20611)0.589:0.15909,(L8GFH4:0.80748,(A0A2P6N9H8:0.55341,A0A838W906:0.71889)0.266:0.10687)0.066:0.09938)0.910:0.11329,(A0A7S1JD79:0.75730,A0A7S1N0S6:0.76014)0.994:0.42721)0.892:0.10748,((A0A196SFI0:1.41454,((((A0A0N7Z9T7:0.72227,A0A6J2XFY6:0.58830)0.975:0.34159,(((A0A522YGS1:1.20097,(A0A0C2J371:1.05134,((A0A1J5WS33:0.64542,((A0A196SB02:0.52501,A0A1J5WJX7:0.60202)0.885:0.15028,(M1VM81:0.57539,A0A507CUH4:0.45897)0.796:0.08824)0.452:0.06313)0.898:0.09545,(A0A1J5WHQ0:0.62661,(((A0A1M2V943:0.62612,A0A4S4M262:0.49277)0.005:0.06303,(A0A2N5VC78:0.65124,A0A0L6UZC2:0.61706)0.887:0.16663)0.991:0.24827,((A0A1W0E893:0.51073,((A0A4Q9LJ41:0.94585,A0A7S1SJ55:0.58819)0.128:0.04041,A0A0F9WKS0:0.49152)0.852:0.11436)0.518:0.08023,(L7JX89:0.45601,(A0A1R1X253:0.29757,(A0A1R1YE56:0.46107,A0A0F9ZBM3:0.38674)0.071:0.03636)0.997:0.21790)0.728:0.07647)0.966:0.11530)0.373:0.04643)0.677:0.04650)0.793:0.09727)0.212:0.02283)0.903:0.09887,(((A0A1B7WD97:0.68723,(A0A7W1H7G4:0.74162,(A0A6H5JCI7:0.56665,(A0A8B6G3C1:0.39958,A0A2D5PF14:0.92804)0.964:0.20389)0.016:0.02333)0.677:0.08810)0.785:0.08103,((A0A8B6FMQ4:0.50373,(A0A8B6DZK1:1.12737,A0A3B3H959:0.34675)0.709:0.05399)0.939:0.17618,A0A3M2BJA5:0.62440)0.882:0.10013)0.072:0.09842,(((A0A7S3ZYZ6:1.42875,A0A7S0UZD5:0.71198)0.519:0.26464,((A0A813J2G0:0.72086,A0A812NWK3:0.71872)1.000:0.79380,A0A1Q9C6S0:0.48924)0.813:0.19208)0.363:0.16621,(((((A0A838TY53:0.81908,(A0A7S3Y8N4:0.76768,A0A813H2I5:1.38086)0.920:0.38622)0.000:0.07351,(((((A0A4Y2WFW8:0.60867,(A0A4Y2AXQ2:0.54030,A0A4Y2LK91:0.41578)0.874:0.12172)0.997:0.34096,((E4XV35:0.90724,(E4YX78:0.50537,(E4YBK9:0.63634,E4YVY4:0.55382)0.873:0.22605)0.939:0.27169)0.998:0.51040,(((((((A0A7G2CSK8:0.85559,(A0A0S4IXU6:0.82979,A0A2G2JH10:0.40680)0.987:0.40079)0.947:0.22603,(A0A7S1W0I2:0.87337,A0A433BEK1:1.30359)0.713:0.05531)0.970:0.26013,((A0A267H915:0.70391,(A0A0L1KK94:0.47683,(A0A1X0NZJ7:0.17241,F9WLG9:0.92439)0.951:0.23334)0.933:0.23275)0.960:0.19610,(A0A6A4UZZ8:0.81127,(A0A1X0NLM9:0.63864,(A4H3V8:1.32756,A0A2V2UGV3:0.20564)0.929:0.33009)0.941:0.19647)0.436:0.09064)0.930:0.12711)0.279:0.04583,(C5KX49:1.03096,A0A6A4VY41:1.06372)0.847:0.18478)0.391:0.08319,(((A0A140KNL1:0.68549,A0A127ZG06:0.42240)1.000:0.64505,A0A067M096:1.05640)0.383:0.18334,(((((A0A286UPU1:0.54614,((Q45W67:0.35095,(A0A4S4KAT6:0.35604,A0A4S4M2I6:0.40213)0.164:0.09146)0.859:0.10198,(A0A4Z0A595:0.44463,A0A4Q2D6Y7:0.50484)0.879:0.17086)0.999:0.38351)0.827:0.11134,(A0A836DD35:0.51470,(A0A2H3J311:0.58611,(A0A5N5Q7I2:0.42370,A0A5N5Q824:0.61097)0.858:0.11451)0.792:0.12172)0.550:0.08071)0.990:0.18119,(A0A177VX50:0.47206,(A0A409X2X0:0.27993,A0A401H0J1:0.33548)0.974:0.20237)0.002:0.15985)0.960:0.12699,(((A0A2S4PZG0:0.51438,A0A0F8BM20:0.78388)0.203:0.05539,((((A0A420P8S7:0.40584,A0A1D9QB56:0.51250)0.429:0.09079,(C8VTR9:0.66862,A0A2S4PME5:0.53248)0.788:0.07493)0.942:0.12875,((A0A0F7ZIF0:0.32056,A0A179F7A1:0.09449)0.879:0.08224,(A0A0A1TJG2:0.46472,A0A545UKX9:0.27927)0.986:0.20396)0.958:0.10390)0.926:0.08041,((A0A395IN54:0.24897,A0A4T0VD83:0.35403)0.865:0.07503,A0A395NQ56:0.80335)0.794:0.05099)0.853:0.06067)1.000:0.27565,((A0A1W5CZS5:0.49583,(A7EVI9:0.29383,A0A834RNH5:0.31503)0.598:0.12552)0.888:0.09860,(A0A1E3B0W0:0.21197,(A0A1E3B2F5:0.27644,A0A2S4PYU5:0.75291)0.443:0.03839)0.999:0.38241)0.974:0.17845)0.972:0.14165)0.568:0.05191,((A0A5E8BE27:0.57470,(A0A5E8BYT4:0.51100,A0A167E5I2:0.28763)0.940:0.15627)0.994:0.29708,(((((A0A0A1TJ98:0.61168,(A0A0F4Z7R1:0.61643,Q2GMP6:0.43171)0.656:0.08487)0.266:0.12254,Q2GTW0:0.30952)0.999:0.30356,(((A0A1W5CR62:0.61756,A6RFJ6:0.42032)0.717:0.09799,A0A1W5D962:0.37002)0.863:0.11711,(A0A0B1P2R6:0.50668,(A0A364MR89:0.23903,(A0A0B1PAW2:0.27346,A0A2S4PSS3:0.28658)0.957:0.12180)0.828:0.09429)0.899:0.08443)0.388:0.07290)0.816:0.07475,(A0A317A9G6:0.61623,(A0A0B4H0C9:0.62040,(A0A0P7BQW8:0.59529,((A0A6S6V9B6:0.69335,(A0A2K0W9A5:0.29515,A0A366PHI6:0.35158)0.793:0.12089)0.723:0.07397,(A0A420UDU7:0.39998,(A0A1B7XZX7:0.37502,(A0A484G2T1:0.57291,A0A135S7P5:0.59966)0.741:0.08340)0.958:0.13414)0.082:0.04765)0.440:0.05132)0.421:0.07652)0.929:0.12402)0.986:0.24301)0.949:0.10817,(((((A6RHH2:0.23204,(B8MV45:0.21305,A0A401KYN2:0.40366)0.349:0.08218)0.996:0.20498,(A0A4S9M6M0:0.37681,(A0A4U0VMZ3:0.48803,A0A093UTM5:0.28839)0.914:0.10962)0.910:0.09659)0.992:0.21943,A0A077R560:0.88266)0.609:0.04234,(A0A177T065:0.79657,((A0A0C4EVM3:0.42791,A0A0C4F9C0:0.35657)0.999:0.37080,(A0A238FDX7:0.60945,M7X341:0.76467)0.790:0.07599)0.459:0.03407)0.942:0.12559)0.918:0.06733,((((A0A2G8RTX6:0.28460,A0A146H3U4:0.22193)1.000:0.26987,(((G4TZI5:0.40580,(A0A4Y9ZJN1:0.61531,A0A284R177:0.65161)0.749:0.09368)0.000:0.03092,(A0A0B7FLA0:0.52919,(A0A060SZC5:0.24431,A0A2R6NN06:0.62457)0.968:0.21608)0.953:0.11952)0.908:0.10064,(A0A0C9UJJ3:0.79362,(A0A836ARN3:0.36229,A0A409WK84:0.31080)0.573:0.07587)0.889:0.08681)0.995:0.18859)0.964:0.13957,((A0A4Q4PW77:0.48650,A0A370TE45:0.29353)0.732:0.04981,(A0A1E3BPY4:0.32672,A0A0L1IL73:0.49583)0.753:0.11281)0.987:0.16204)0.754:0.05783,R9A952:0.90861)0.824:0.04614)0.906:0.08797)0.960:0.12779)0.489:0.05174)0.965:0.17879)0.981:0.18066)0.000:0.06814,(((((A0A164SU62:0.46056,(A0A164TFW3:0.40743,A0A162D447:0.69160)0.104:0.08908)0.975:0.23454,(A0A7S4DAL7:0.88587,(A0A7S4DCB7:0.96968,A0A7S3Y6L7:0.75786)0.977:0.42237)0.738:0.15805)0.920:0.13096,(A0A1Y3ASY1:0.69196,A0A834R000:0.58808)0.844:0.22798)0.740:0.09356,((A0A2E9D1N9:1.26985,((A0A087TUG6:0.70351,((A0A4Y2S4K6:0.26981,A0A4Y2EQ91:0.44065)0.896:0.22257,(A0A4Y2VVE3:0.55632,A0A0J7JW51:0.51215)0.915:0.19437)0.994:0.33138)0.780:0.16308,(((((A0A4Y2CGV0:0.47425,(A0A4Y2PWI6:0.59748,A0A4Y2DXD3:0.29913)0.925:0.18084)1.000:0.47250,((A0A4Y2U8D7:0.20215,(A0A4Y2RJY4:0.35631,A0A4Y2UWZ7:0.51141)0.912:0.13372)0.947:0.12222,(A0A4Y2T0K4:0.39414,((A0A4Y2DII1:0.44496,A0A4Y2ES00:0.88965)0.000:0.18878,A0A4Y2HV43:0.06832)0.959:0.15272)0.970:0.15767)0.985:0.22324)0.938:0.18162,((A0A4Y2MTB6:0.35439,(A0A4Y2GMB5:0.52967,A0A4Y2DIU2:0.20187)0.987:0.27202)0.994:0.26471,(A0A131XWC0:0.60148,(A0A087TND3:0.66520,(A0A087T8L4:0.44612,(A0A4Y2NDK8:0.29864,A0A4Y2SSS4:0.22063)1.000:0.38561)0.844:0.07724)0.925:0.11830)0.775:0.03634)0.807:0.03392)0.923:0.09007,(((A0A4C2ABP3:0.19449,A0A4C1WAB2:0.61885)0.899:0.10429,(A0A821YB17:0.57323,A0A811WWI7:0.40578)0.779:0.05565)1.000:0.31974,(A0A1W7R9Y4:0.59847,(A0A087TJZ1:0.53168,(A0A0K1IK29:0.40281,A0A224X5M4:0.46553)0.986:0.21629)0.540:0.06171)0.734:0.08827)0.366:0.06045)0.393:0.05715,(((A0A1B6DRM7:0.60081,(((A0A7E4S768:0.53288,A0A224X653:0.24303)0.999:0.46054,(((A0A6V7KMJ5:0.52521,(A0A6H5IXL4:0.50788,A0A6H5J2C4:0.51271)0.896:0.12304)0.563:0.07757,A0A6H5GXR4:0.60790)0.807:0.10869,((A0A7E4S945:0.62788,(A0A6H5G4D2:0.45590,A0A146KP46:0.49744)0.989:0.25430)0.855:0.10431,(A0A023EYP7:0.55949,(A0A224XAL8:0.48334,(A0A6H5FUX9:0.60632,(A0A2R7W5S6:0.39273,A0A2R7VTT1:0.28334)0.995:0.32153)0.968:0.21061)0.094:0.06586)0.808:0.07458)0.554:0.04642)0.714:0.04766)0.516:0.03334,(A0A139W8L1:0.65991,(Q03277:0.72037,A0A6H5I9W9:0.54612)0.301:0.08246)0.991:0.27438)0.753:0.06490)0.322:0.07494,((A0A139WA45:0.60425,(J9KCN1:0.49669,(A0A5E4NRC4:0.53640,(J9KA38:0.46035,(A0A6G0SZZ7:0.42070,(J9LES4:0.49873,J9LCL3:0.68027)0.597:0.07207)0.853:0.09446)0.877:0.12593)0.193:0.08870)0.992:0.30261)0.258:0.06825,(A0A1B6FCA5:0.49238,A0A7R8VZK6:1.04328)0.008:0.12908)0.864:0.07811)0.721:0.05101,(A0A4C1XLK8:0.50446,O44315:0.69864)0.943:0.20717)0.979:0.19162)0.658:0.09758)0.317:0.08334)0.000:0.02587,(A0A0R3QBG2:0.82745,(((A0A7J6KXH8:0.49454,A0A7J6LCI0:0.60276)0.999:0.42728,((A0A7J6TZ08:0.59175,(A0A7J6M1X4:0.66543,C5LU70:0.52526)0.829:0.11722)0.996:0.47866,((A0A7J6NS11:0.49563,(A0A7J6NC36:0.54117,A0A7J6NQQ1:0.59070)0.602:0.16210)0.986:0.31073,(A0A7J6T2J7:0.56562,((C5L4Q7:0.96283,A0A7J6N384:0.56444)0.643:0.16020,(C5KV00:0.56336,(A0A7J6R643:0.65393,A0A7J6SVV3:0.27544)0.991:0.33257)0.961:0.20913)0.326:0.07569)0.914:0.21848)0.723:0.27424)0.886:0.13834)0.971:0.24767,((((A0A7J6VQP8:0.45376,J9LBG0:0.44434)0.919:0.12352,(((A0A6G0YK55:0.42188,J9KT70:0.34225)0.920:0.17412,(A0A6G0Z5E5:0.36474,X1X936:0.74149)0.904:0.16512)0.978:0.16901,(((A0A834IYI1:0.68915,A0A139WA31:0.40412)0.933:0.18787,((N6UIP2:0.45627,(D7GXX9:0.40354,A0A1S4EMG7:0.49057)0.064:0.04376)0.931:0.10534,(U4UZM3:0.50201,(D7EIB0:0.37146,A0A2G3AQL6:0.73142)0.946:0.14541)0.714:0.03476)0.428:0.02252)0.826:0.08289,A0A1B6KDF3:0.54146)0.711:0.07095)0.443:0.05440)0.881:0.06095,(((((A0A6H5IWA3:0.21992,A0A6H5ISY4:0.75440)0.830:0.07274,A0A6H5I7U7:0.34140)0.938:0.11429,A0A4C1VFR4:0.54924)0.891:0.08593,A0A034WR48:0.28296)0.907:0.09340,((((A0A4Q0MIQ8:0.39371,A0A3S2NGT9:0.67832)0.728:0.12522,((A0A0J7KFP5:0.51652,E0VRT2:0.64248)0.874:0.15744,(A0A0J7K7P2:0.29278,(A0A0J7KJ37:0.67536,(A0A0J7K3R6:0.34933,A0A0J7KJ07:0.58479)0.771:0.05988)0.357:0.03855)0.984:0.17577)0.460:0.02861)0.973:0.16939,A0A2S2PBP5:0.44011)0.980:0.17579,A0A2M3Z312:0.51112)0.338:0.11305)0.593:0.08529)0.826:0.05056,(A0A1Y1N165:0.67328,A0A6H5GVK6:0.54124)0.726:0.14619)0.998:0.28934)0.825:0.08022)0.825:0.07140)0.542:0.04838)0.950:0.09788,(((A0A7J6P421:0.92788,A0A7J6KTF8:0.74154)0.997:0.74236,(A0A7J6NSK5:1.03643,((A0A7J6KUZ7:0.76593,A0A7J6KU40:0.63615)0.722:0.23220,(A0A7J6PM66:0.70029,(A0A7J6NS36:0.51699,(A0A7J6NBL7:0.61726,A0A7J6NMN4:0.51177)0.628:0.10965)0.899:0.13088)0.881:0.14425)0.842:0.15224)0.955:0.32784)0.574:0.14050,(A0A7J6TU77:1.28776,(A0A0A9VXD9:0.55775,((((A0A226D6B3:0.62406,(A0A6H5INW1:0.59957,(A0A0J7NBA7:0.64606,A0A142LX39:0.39561)0.361:0.08001)0.837:0.06300)0.855:0.05733,(A0A0M4H4U9:0.50760,(A0A7T8HG41:0.71976,A0A7D9LY73:0.52308)0.754:0.15313)0.975:0.18971)0.762:0.07418,(A0A3S2PH44:0.49291,(U5EFQ1:0.56393,A0A4Q3EZD4:0.46400)0.767:0.06975)0.411:0.05699)0.543:0.05231,(A0A0L0BQB6:0.89069,A0A4C1SE01:0.23788)0.988:0.32542)0.827:0.08893)0.942:0.19040)0.224:0.09369)0.946:0.14521)0.945:0.08859)0.395:0.02381,A0A7J6PK80:1.20517)0.736:0.04009)0.711:0.11545)0.377:0.05209,A0A1Z5LDS4:0.96459)0.681:0.03592,(((((A0A3R7MJW0:0.56706,(A0A818JMT4:0.40089,(A0A0P4W211:0.54651,A0A1Y1S4U0:0.25879)0.910:0.19231)0.912:0.15334)0.999:0.39864,(((((A0A6M2DTM8:0.44212,((A0A0K8TKX9:0.66419,A0A0Q9WEA4:0.62918)0.000:0.12823,(A0A6V7JBX7:0.41393,(A0A6P3UYL3:0.29257,A0A0K8TM75:0.38758)0.277:0.09763)0.997:0.35878)0.658:0.04822)0.995:0.17421,((((A0A4Y2R7H9:0.60941,(Q93137:0.31128,(A0A4C1WLQ3:0.13332,(A0A4C1ZLF5:0.25949,A0A4C1XZ18:0.18402)0.918:0.06941)0.995:0.22340)0.993:0.23463)0.877:0.09129,((((J9KV82:0.41709,X1WXR6:0.30037)0.952:0.14917,(((Q6UJ39:0.40607,Q95SX7:0.47699)0.890:0.08872,(((A0A142LX49:0.28358,(A0A0J7KAX9:0.37002,X1X2F1:0.61713)0.623:0.07040)0.947:0.10345,A0A6H5IFH6:0.42401)0.925:0.08996,((A0A5E4N891:0.45883,(X1WK82:0.24002,X1WUP7:0.30986)0.985:0.16451)0.765:0.05176,A0A4C1UNP3:0.44931)0.337:0.05609)0.915:0.07556)0.911:0.07120,(Q18LA9:0.43224,A0A6H5GV05:0.58549)0.000:0.12558)0.928:0.08719)0.698:0.05879,(X1WQI9:0.39066,A0A224XB44:0.41189)0.943:0.15410)0.476:0.08102,(A0A232ENU1:0.57669,D7EM17:0.49979)0.000:0.06993)0.805:0.03252)0.663:0.04780,((A0A212EQ25:1.31020,(A0A4Y2DLY1:0.53076,(A0A4Y2D358:0.51791,(A0A3S2P7Z3:1.54850,A0A4Y2R351:0.84426)0.000:0.25251)0.807:0.10282)0.727:0.03992)0.513:0.02507,(A0A4Y2CUA8:0.43774,(A0A4Y2QUR3:0.46997,(A0A4Y2RL53:0.35950,A0A4Y2TTT4:0.32330)0.000:0.07719)0.000:0.10657)0.743:0.07512)0.923:0.07349)0.816:0.04048,((A0A1Q3G5F7:0.42116,(A0A087SWJ5:0.68419,A0A2J7PQB5:0.46644)0.847:0.12054)0.914:0.10954,((A0A2J7Q6J2:0.51755,((A0A437ATB5:0.25008,A0A4C1U0Y2:0.52569)0.994:0.25911,(J9JYZ4:0.51763,J9KCZ4:0.19063)0.960:0.14952)0.902:0.10451)0.737:0.09672,(A0A182GB02:0.45999,(A0A811W885:0.35748,A0A0C9RJA4:0.34252)0.957:0.11650)0.904:0.09093)0.599:0.03024)0.570:0.02685)0.114:0.03737)0.845:0.05377,(N6UK20:0.90169,(A0A7J7JM92:0.66623,A0A354GJM9:0.60837)0.976:0.35041)0.760:0.15124)0.444:0.01482,(A0A087U3E2:0.45180,((A0A7R9XEJ5:0.66383,A0A7R9RVE7:0.73255)0.950:0.23673,(A0A7R9RNH6:0.78829,(A0A7R9X568:0.63603,A0A7R9RNE9:0.58653)0.916:0.17514)0.781:0.09300)0.907:0.12820)0.957:0.12510)0.941:0.06176,((D7EKP2:0.51266,A0A2G8KD34:0.46630)0.000:0.11613,(A0A4W5LMT9:0.49564,A0A814B295:0.55076)0.823:0.10986)0.919:0.08292)0.208:0.05557)0.740:0.07140,(((A0A819HR79:0.76200,A0A815DTZ6:0.89057)0.795:0.13861,(A0A814YNK5:0.49131,(A0A815NQR5:0.79352,(A0A817ZYB3:0.49711,(A0A817K1Y4:0.45419,A0A815ZJ10:0.75451)0.154:0.04598)0.946:0.17718)0.947:0.16864)0.766:0.10061)1.000:0.38846,((((A0A813SK72:0.38472,A0A814D531:0.43529)0.896:0.10246,(A0A3M7T284:0.53901,(A0A3M7QXD8:0.76667,A0A814QTX1:0.34042)0.020:0.05514)0.919:0.13358)0.971:0.13503,(A0A814FIX6:0.22524,A0A813M5Z1:0.77325)0.994:0.36406)0.625:0.06563,A0A3M7PAI7:0.72573)0.842:0.06291)0.916:0.09609)0.896:0.08285,(((A0A355AA59:0.80595,A0A7G3ATE3:0.49547)0.000:0.15858,((A0A0S1TR39:0.76787,(A0A1B6KIY7:0.65576,(((A0A3S2LCB8:0.71832,(((A0A3L8E138:0.60485,A0A6J1QT32:0.60635)0.935:0.20521,(A0A6H5IZU7:0.87578,A0A6H5J1A2:0.24286)0.993:0.38537)0.874:0.19980,(((A0A6V7LYK6:0.38503,A0A232ENK8:0.90189)0.767:0.16328,A0A0J7N9M9:0.66631)0.691:0.08934,(A0A7M7QC47:0.68174,(A0A0J7K4D8:0.50159,A0A1B6C2K7:0.61761)0.508:0.06781)0.799:0.09844)0.832:0.10367)0.867:0.11478)0.735:0.02534,((A0A6L5D8S7:0.62961,(A0A6M2DVD1:0.56671,A0A023EY04:0.48433)0.363:0.04686)0.929:0.15171,(((A0A437AVK4:0.37065,(A0A4C1XI30:0.59111,A0A821TKV2:0.25829)0.732:0.14826)0.921:0.11855,A0A2P8YHV3:0.70678)0.917:0.10027,(A0A6J1TCJ9:0.99469,((A0A653DBA6:0.61854,A0A2H8TL40:0.63880)0.945:0.16513,(A0A6M2DJW2:0.61474,A0A023EXD6:0.55385)0.536:0.04861)0.334:0.04036)0.699:0.05544)0.440:0.03734)0.923:0.06933)0.855:0.04469,(A0A355BA43:0.55139,(A0A1B0CU15:0.71875,A0A2M4AIR6:0.34892)0.969:0.25643)0.918:0.11292)0.933:0.09668)0.484:0.03181)0.610:0.10210,((A0A1W7R5V5:0.91413,((A0A2M4CJ51:0.55104,A0A182GFR1:0.48901)0.990:0.25411,(A0A1I8PB78:0.61115,(A0A1I8MRW6:0.51015,A0A0A1XJH0:0.35304)0.846:0.15808)0.972:0.21197)0.000:0.05787)0.785:0.06410,(A0A0A9Z1X7:0.52177,(A0A0A9XPU9:0.73250,A0A0A9YDU6:0.61491)0.842:0.15377)1.000:0.36419)0.929:0.11707)0.914:0.09074)0.866:0.14627,(((J9L1U8:0.31488,A0A5E4N5C7:0.31498)0.998:0.38314,(A0A2S2R976:0.34173,(A0A6G0XU67:0.25052,A0A6G0XZQ3:0.33601)0.965:0.19430)0.658:0.13236)0.996:0.37189,((A0A2H2IGY8:0.09114,A0A2H2IW53:0.38824)1.000:0.56358,(A0A6P7TTU5:1.16194,A0A6B2EFB6:0.51056)0.742:0.10354)0.982:0.30425)0.000:0.13542)0.909:0.12437)0.000:0.05649,(((((W8C2B6:0.59340,A0A0K8V7H0:0.51831)0.999:0.31813,(((A0A4Y2CPQ8:0.27483,A0A4Y2BSC8:0.40929)0.983:0.20252,(A0A1S4ERY4:0.51572,((X1X035:0.44237,A0A6G0TAS1:0.37518)0.990:0.20613,(((A0A6G0XKF1:0.35296,((J9LI04:0.27760,A0A0V0G5S9:0.40690)0.670:0.03935,J9L5A4:0.23470)0.845:0.08522)0.956:0.09426,A0A256WGS0:0.34669)0.547:0.05313,(J9KNM1:0.37844,(J9JK68:0.42423,(J9KST2:0.08274,J9M0C8:0.05851)0.999:0.26162)0.417:0.03895)0.955:0.09452)0.105:0.02624)0.991:0.15861)0.471:0.06750)0.911:0.07978,(A0A7G3AYS6:0.54924,(A0A7G3B021:0.52321,(A0A2M4AM99:0.40183,(A0A182HF73:0.39916,(A0A0P6IVM9:0.57910,A0A1W7R6F8:0.43115)0.684:0.06009)0.957:0.19860)0.996:0.22478)0.409:0.04622)0.030:0.04980)0.726:0.04741)0.998:0.22694,((A0A162QT17:0.67482,(A0A164Q1B2:0.51747,(A0A164MS79:0.47671,A0A162QK44:0.45321)0.000:0.02166)0.804:0.07895)0.978:0.19876,(((A0A3B3Q2D7:0.60109,(A0A8B6DX24:0.38768,A0A432I2E3:0.35035)0.498:0.10770)0.795:0.08060,(A0A821U4Q8:0.45134,A0A6A7FTZ3:0.57974)0.612:0.11061)0.892:0.07409,(((A0A6J8AKH9:0.58506,A0A0B7BT55:0.36462)0.990:0.28375,(A0A0A9Z8V1:0.63736,A0A4Y2K0S3:0.51727)0.473:0.18408)0.869:0.13856,((A0A6A7FTR1:0.54558,(A0A821SVA6:0.63531,A0A2P2I5V9:0.53166)0.686:0.06702)0.153:0.04560,(A0A816QJK8:0.47912,A0A2P2HWH2:0.63973)0.915:0.13638)0.901:0.13699)0.685:0.09076)0.843:0.05722)0.363:0.04781)0.835:0.09329,((((A0A147BJP3:0.43559,(A0A6B0VGM7:0.50311,(A0A147BLH6:0.48720,(A0A6P7UW04:0.31457,L7MBC3:0.42348)0.888:0.09060)0.092:0.04700)0.991:0.24230)0.932:0.12821,((A0A6P7VMJ1:0.49721,A0A131Y4B5:0.56336)0.927:0.21606,((A0A6P7VS23:0.48325,A0A147BCS7:0.39562)0.880:0.11594,A0A4D5RBA1:0.69748)0.310:0.07969)0.485:0.09783)0.995:0.22092,((A0A2R5L4I6:0.39184,(A0A1Z5L781:0.44070,A0A147BP74:0.50666)0.799:0.10013)0.890:0.09853,((L7MBH8:0.59380,(A0A6P7UME4:0.70917,A0A147BK74:0.30241)0.959:0.20524)0.971:0.21082,(A0A090XEP0:0.62938,A0A2R5LDJ5:0.59305)0.653:0.06641)0.678:0.07834)0.977:0.19026)0.717:0.06098,((A0A5B7FB11:0.67770,A0A0P4VPG0:0.66658)0.984:0.34084,A0A087UUY7:0.72915)0.708:0.08592)0.989:0.16441)0.534:0.08671,(X6LJH9:0.67647,(A0A6A7FT79:0.82030,(A0A8B6DMN4:0.42237,A0A8B6DBI1:0.31315)0.950:0.21185)0.036:0.14790)0.953:0.14228)0.591:0.07400)0.440:0.05015)0.936:0.09482,((((A0A8B6CX31:0.49478,A0A210QEX7:0.39588)0.861:0.08335,((A0A813PRJ6:0.40870,((A0A815YD27:0.59218,A0A815N215:0.26786)0.962:0.18771,(A0A815EGP1:0.31245,A0A814I1F6:0.42953)0.993:0.30021)0.633:0.07328)0.917:0.12233,A0A3C1S0P7:0.57263)0.653:0.13533)0.976:0.17912,(((A0A821SDZ2:0.60851,A0A7S3Z738:1.03296)0.931:0.24722,((A0A653BGK5:0.33263,A0A3S2L424:0.42569)0.996:0.28724,(A0A5B7E6K3:0.62702,A0A0P4VTV9:0.33947)0.989:0.30428)0.248:0.07506)0.255:0.05460,(T2MCE4:0.81217,A0A3D5S1K1:0.30313)0.975:0.28461)0.940:0.13431)0.860:0.09087,(((((A0A2B4RWY6:0.68912,(A0A2B4SH19:0.49162,(A0A7D9E8U3:0.36845,A0A7D9IEM7:0.28137)0.836:0.05890)0.742:0.07162)0.981:0.24442,(A0A6S7LPG0:0.62379,A0A2B8A1T2:0.76078)0.828:0.10451)0.830:0.12464,(A0A6S7K2V9:0.91423,(((A0A6S7KUE5:0.47039,(A0A2B4SH28:0.40648,(A0A6S7GB89:0.34118,(A0A2B4RBZ9:0.39617,A0A2B4R643:0.36612)0.517:0.06786)0.993:0.22491)0.799:0.12269)0.491:0.06769,(((A0A0P4VNJ5:0.56941,A0A226CYW6:0.93962)0.825:0.15988,(A0A7M7GHW9:0.59878,A0A6P4Z017:0.34217)0.855:0.19717)0.233:0.08503,A0A7D9DJ11:0.77297)0.816:0.07162)0.726:0.05980,(A0A7D9LYH7:0.31083,A0A6S7GDK5:0.44220)0.999:0.26990)0.962:0.15193)0.886:0.09120)0.897:0.09748,((A0A183AT96:1.24774,A0A0X3PJB6:0.48071)0.979:0.38769,(A0A2G8LGI0:0.80036,(A0A3P9KDL8:0.44908,((((A0A5C6N5D5:0.24649,(A0A3P9JDD6:0.25290,(A0A6A4SWT2:0.48891,A0A4U5TVC9:0.47673)0.913:0.16534)0.953:0.15755)0.921:0.12501,((A0A5C6MID7:0.36532,((A0A5C6PMW7:0.08994,A0A5C6MG46:0.06415)1.000:0.30958,(A0A4U5TVZ9:0.25465,A0A5C6PLB3:0.32550)0.836:0.07038)0.955:0.12033)0.980:0.18308,A0A0S7J692:0.61099)0.705:0.04630)0.331:0.06169,A0A3N0YIH4:0.50030)0.000:0.04327,A0A671TU97:0.52289)0.926:0.11189)0.880:0.10064)0.803:0.09636)0.980:0.23431)0.998:0.29525,(((A0A443QAB1:1.10674,((((A0A4Y2W2I7:0.46850,(A0A811X4S7:0.37745,A0A3S2NU52:0.32493)0.907:0.12077)0.287:0.04500,((((A0A6H5H2C1:0.40200,A0A6H5GTC9:0.43945)0.991:0.25218,(J9M2E6:0.58960,J9LUC1:0.19919)0.985:0.18715)0.075:0.05714,((A0A6G0Y166:0.29933,A0A3S2N4V1:0.44351)0.860:0.09586,((J9KR06:0.62923,(J9LS27:0.42355,(((X1WNB7:0.33280,(J9KD63:0.24649,A0A6G0TBS4:0.47522)0.966:0.14126)0.834:0.05493,(J9LRD1:0.19891,J9M639:0.67920)0.984:0.19297)0.679:0.06522,((J9KN25:0.27794,A0A6G0W0S1:0.53900)0.980:0.21123,(J9KU12:0.50311,A0A6G0ZP59:0.31590)0.952:0.12896)0.120:0.05658)0.994:0.18969)0.269:0.01833)0.782:0.03970,A0A1Y1MYW8:0.62998)0.410:0.05308)0.351:0.06377)0.922:0.08730,((A0A6J1NEY6:0.49754,A0A437ARL8:0.55741)0.854:0.08290,((A0A821KMP4:0.75706,A0A1B6IS47:0.54343)0.781:0.07821,(A0A437BH80:0.44245,D6WP85:0.48771)0.715:0.03790)0.652:0.04217)0.244:0.07891)0.919:0.07920)0.783:0.04133,(A0A4Q3DGZ6:0.71606,A0A4Q3ERC2:0.35975)0.994:0.28535)0.589:0.03264,(A0A1B6KA64:0.47550,((A0A0P6J4T9:0.56458,(A0A821TZM2:0.49618,A0A811WJH2:0.36193)0.971:0.19056)0.842:0.09806,A0A147BKN6:0.48773)0.844:0.12017)0.610:0.07707)0.903:0.14148)0.727:0.13700,((A0A1D1V134:0.55345,A0A1D1ULC4:0.28722)1.000:0.57915,((A0A147BKN8:0.57426,(A0A147BC70:0.73053,A0A147BBI1:0.34810)0.980:0.24494)0.883:0.13974,((A0A7J7K7S7:0.65241,A0A6S7FS87:0.41004)0.000:0.10943,(((((((A0A2B4RQM0:0.52593,A0A7D9EJD4:0.30134)0.969:0.16606,(A0A2B4ST17:0.42919,(A0A2B4SVW4:0.47857,A0A2B4SKF0:0.50815)0.804:0.11020)0.593:0.07658)0.835:0.09314,((A0A1X7TC86:0.39661,(A0A1X7TNB5:0.44111,A0A1X7SYG8:0.42765)0.941:0.15819)0.965:0.15400,A0A7D9JID4:0.49179)0.841:0.05621)0.428:0.07132,((((A0A6S7GQ27:0.23422,A0A6S7J4Y2:0.33837)0.941:0.11915,(A0A2B4SUY9:0.31526,A0A6S7H9K6:0.36881)0.066:0.04198)0.933:0.10448,(A0A7D9DX31:0.33506,(A0A7D9EUF5:0.33311,A0A354GHG9:0.51010)0.935:0.16701)0.876:0.10529)0.809:0.06303,((A0A6S7JS01:0.37211,(A0A6S7KH39:0.41996,A0A6S7IJ29:0.29542)0.369:0.07723)0.965:0.13647,(A0A6S7G2C6:0.35304,A0A2B4R9N0:0.40805)0.934:0.14343)0.754:0.07857)0.209:0.06762)0.988:0.12750,((((A0A654HYA0:0.56298,(A0A0X3PDI4:0.63323,(Q4QQE6:0.22538,A0A6A5D870:0.71810)0.964:0.18094)0.771:0.07700)0.967:0.16587,(E3LJE4:0.46726,A0A016SRC8:0.61011)0.474:0.15938)0.876:0.09967,((((A0A016RTF0:0.35739,E3MFY2:0.60511)0.955:0.18812,(A0A016SDG3:0.47283,(A0A016T2J5:0.55674,(A0A016SG83:0.40488,A0A016WDZ7:0.64245)0.793:0.13533)0.854:0.13796)0.971:0.21277)0.731:0.14894,(A0A1I8BNX8:0.49962,((E3MTB7:0.49258,E3M2X6:0.55001)0.966:0.22288,(A0A6V7V9E4:0.50696,((A0A1I8BH41:0.46152,A0A1I8BXN1:0.34693)0.976:0.18210,A0A6V7VCW0:0.41538)0.439:0.08174)0.723:0.05071)0.789:0.03708)0.925:0.09465)0.535:0.03828,(A0A6V7V2N8:0.56187,(A0A7E4W0Y9:0.68858,A0A6V7Y4E6:0.40990)0.433:0.06842)0.960:0.14526)0.946:0.09740)0.941:0.07572,(((A0A0B2W6K3:0.49647,A0A6S7FXZ6:0.54915)0.000:0.12775,(A0A653CAK4:0.64687,(A0A2B4RZT7:0.36688,A0A6S7J5Q1:0.26140)0.983:0.19320)0.350:0.06294)0.407:0.08079,((A0A8B6ESY3:0.38388,((A0A0P4VNP1:0.46241,(A0A452IR79:0.34312,(K7EZI5:0.16549,(A0A3M0KNZ2:0.63092,(A0A3M0KTC9:0.29227,A0A2I0UDD9:0.13319)0.921:0.10528)0.749:0.07856)0.981:0.21506)0.983:0.20796)0.938:0.12783,(A0A3M7Q1R5:0.54029,(A0A814MHA3:0.39868,(T2MI15:0.47739,A0A813Q7I6:0.42451)0.231:0.05710)0.594:0.05301)0.902:0.07861)0.749:0.07873)0.714:0.07111,((E3UJT3:0.59861,(A0A6A5D6S9:0.77286,(A0A5J4NL39:0.00055,A0A5J4NF06:0.00465)1.000:0.46081)0.847:0.09529)0.000:0.08466,(((A0A6A5DFC9:0.38501,(A0A6A5D7X5:0.40667,A0A183WKN5:0.77889)0.255:0.02729)0.910:0.09401,(A0A3R7FQE5:0.43079,A0A075A316:0.49442)0.613:0.14185)0.746:0.08070,(((A0A654GZI6:0.69816,(((A0A7M3R5X5:0.58823,A0A7M3PRG5:0.47282)0.733:0.11793,A0A7M3QLG6:0.64560)0.320:0.06524,A0A7M3Q3M5:0.25474)0.107:0.09715)0.886:0.08808,(A0A654HHY8:0.53815,A0A0X3PTK8:0.33577)0.705:0.06377)0.806:0.06365,A0A7M3RKJ8:0.44896)0.975:0.18410)0.874:0.08054)0.827:0.06640)0.865:0.06288)0.499:0.03486)0.954:0.09129)0.728:0.02951,A0A2P2I115:0.73856)0.861:0.02573,((A0A1E1XGZ3:0.39231,(A0A6M2D128:0.81902,A0A1E1XG83:0.39551)0.931:0.16307)0.840:0.05749,(A0A482YR43:0.34936,(A0A7D9JAK6:0.49894,(A0A8B6CAI8:0.59043,(A0A7D9J621:0.35502,A0A7D9JCD4:0.18080)0.902:0.12611)0.835:0.09520)0.389:0.06007)0.962:0.13067)0.979:0.11144)0.690:0.01040)0.971:0.08414)0.759:0.04824)0.188:0.02506)0.093:0.07142,((((A0A1W0WKI1:0.71013,A0A7R9X1W3:0.71538)0.890:0.19426,(A0A1X7T9M2:0.51004,A0A3B1IW78:0.60300)0.868:0.12588)0.730:0.07965,(((((A0A2B4RUE5:0.43761,A0A6S7LQ61:0.44156)0.949:0.17898,(A0A2B4S173:0.60461,A0A2B4RFW9:0.37327)0.266:0.13697)0.994:0.26927,((A0A3P8R788:0.70686,(A0A2B4RZI8:0.47035,(A0A7D9EEX7:0.34330,(((A0A6J8DBS4:0.33379,A0A2T7NK70:0.58028)0.335:0.06148,A0A7D9JGG9:0.45535)0.791:0.04981,(A0A6S7GGG5:0.46898,(A0A7D9DZ82:0.58386,A0A6S7FTS7:0.40197)0.724:0.10387)0.932:0.09916)0.322:0.07723)0.637:0.10153)0.805:0.06323)0.441:0.05105,(A0A2B4SC04:0.56682,(A0A482YRP6:0.40969,(A0A6S7INV0:0.57094,((A0A7D9IDA4:0.53761,A0A2B4RWR3:0.48021)0.518:0.16556,(A0A6S7H411:0.53269,(A0A6S7FR59:0.44391,((A0A2B4SU05:0.41618,A0A2B4RHA7:0.37054)0.312:0.06847,A0A2B4RBL7:0.83462)0.667:0.10166)1.000:0.22384)0.030:0.04517)0.043:0.10065)0.395:0.10503)0.982:0.19892)0.971:0.18704)0.079:0.04077)0.846:0.04603,(((((((((A0A6L5CNE4:0.49583,A0A354GES4:0.40877)0.094:0.04851,(U5EEL4:0.46218,(A0A0A9YZW7:0.41571,(U5EEC7:0.37518,A0A146KR61:0.79565)0.408:0.09994)0.493:0.08775)0.899:0.08153)0.847:0.04235,((A0A811WGI1:0.50097,A0A2A4JRM8:0.31040)0.971:0.15865,(A0A0A9WX05:0.67574,A0A1B6HKJ1:0.49967)0.909:0.14813)0.870:0.09698)0.899:0.05760,((A0A232EDV0:0.47608,A0A6H5I4U0:0.33247)0.998:0.25320,((((A0A6H5HZQ4:0.35765,(A0A6H5IUG4:0.29839,A0A6H5J5B2:0.50668)0.886:0.11908)0.966:0.19963,(A0A6H5IZZ2:0.51818,A0A6J1RF39:0.39348)0.862:0.05787)0.867:0.10903,(A0A6V7HLT2:0.53419,(A0A232F0Q2:0.54218,(A0A232FHS7:0.73534,A0A6H5IVX8:0.27208)0.965:0.20893)0.933:0.13401)0.373:0.02351)0.798:0.03734,(A0A6J0CDK5:0.41802,(A0A0J7KTD2:0.33903,A0A0J7K589:0.13030)1.000:0.37423)0.936:0.12409)0.356:0.03538)0.937:0.09629)0.939:0.07336,(A0A6S7GTB2:0.69592,(((A0A1B6EJ81:0.56293,(A0A1Y1N9S9:0.43269,A0A653DLT0:0.52329)0.855:0.13384)0.689:0.05848,(((A0A6J2YV26:0.55772,A0A1Y1LSZ2:0.43642)0.848:0.11258,A0A811WEC8:0.48841)0.595:0.05204,(A0A6J2X836:0.46755,A0A6J2YA28:0.43646)0.915:0.11025)0.859:0.05881)0.734:0.04123,A0A6H2FUU0:0.53977)0.091:0.03000)0.893:0.07684)0.981:0.10916,(A0A6A4VXX0:0.77357,((((A0A6I8NG80:0.61424,A0A3C1S343:0.60865)0.772:0.13086,(((A0A669E0K7:0.31385,(A0A4U5TYJ1:0.27382,A0A669CB45:0.30536)0.952:0.12927)0.872:0.06735,(A0A669DF59:0.39846,(A0A5C6PQ10:0.30748,A0A671U6N3:0.27590)0.891:0.10335)0.249:0.06903)0.847:0.04450,(((A0A2G8KN05:0.63293,A0A6S7JYW4:0.56839)0.761:0.05808,((A0A6J8E0W4:0.15971,A0A6J8BXZ7:0.29780)1.000:0.31284,(((A0A7D9L456:0.37675,(A0A6S7IB97:0.44608,A0A2G8KXI7:0.47417)0.175:0.02782)0.189:0.05684,(A0A2G8KL41:0.35770,A0A2G8KCU5:0.36355)0.741:0.08465)0.966:0.11328,(A0A2B4S2X7:0.33301,A0A2B4RB26:0.63152)0.868:0.09747)0.959:0.11134)0.851:0.03771)0.127:0.04240,(A0A355AF07:0.46846,A0A7D9I4U0:0.37580)0.838:0.12126)0.521:0.05773)0.945:0.10277)0.637:0.05108,A0A7D9JD92:0.44005)0.767:0.02665,((A0A402EVE0:0.67417,A0A2B7ZY17:0.56631)0.909:0.13996,(A0A2G8LB10:0.48497,A0A3C1RYI2:0.51533)0.934:0.17169)0.528:0.04042)0.951:0.11854)0.879:0.11401)0.889:0.05609,(A0A2B4R9N2:0.47699,(A0A6S7I4F2:0.34504,((A0A7D9DUR1:0.30458,A0A7D9K8A8:0.34616)0.906:0.09273,(A0A2B4REU2:0.41496,A0A6S7IN70:0.30958)0.957:0.13500)0.816:0.04001)0.387:0.05591)0.999:0.22644)0.842:0.05491,((A0A226DDP4:0.50657,A0A226EXC9:0.47201)0.997:0.29798,((A0A3Q0IWD5:0.90580,(A0A4D5RYV2:0.40565,(A0A1E1XIX8:0.57154,A0A131Y891:0.42945)0.176:0.07368)0.139:0.12012)0.162:0.10052,((A0A811X9L6:0.56992,A0A811W0N9:0.59961)0.995:0.50828,(A0A1B6JXW7:0.52462,(A0A437B525:0.88351,A0A3S2TK00:0.68842)0.922:0.16602)0.594:0.07169)0.681:0.08029)0.991:0.25934)0.953:0.15250)0.865:0.02917,(((A0A7D9L7P8:0.97255,(A0A2B4RGE4:0.31520,(A0A6S7HST0:0.32334,A0A6S7FSF3:0.34293)0.904:0.11712)0.893:0.09822)0.911:0.11717,(((A0A2B4R6X4:0.48581,A0A7D9HDS5:0.50071)0.377:0.05935,(((A0A6S7FYQ8:0.37575,A0A6S7GT04:0.33393)0.583:0.08682,(A0A6S7IKT7:0.42594,A0A6S7FSB0:0.47327)0.732:0.08819)0.650:0.08452,(A0A2B4RV21:0.60980,A0A2B4SU23:0.61940)0.000:0.18319)0.779:0.04315)0.827:0.04899,(A0A6S7GBT1:0.38653,A0A2B4RDU5:0.59825)0.554:0.08566)0.363:0.02309)0.949:0.07621,(A0A3P9K3F6:0.47332,((A0A1B0GL79:0.72507,A0A2B4R4T4:0.77629)0.718:0.09180,((A0A673VW46:0.53663,A0A060Z383:0.42183)0.934:0.19516,(M4AZN2:0.40193,A0A3B3HCE9:0.38552)0.967:0.16170)0.920:0.10838)0.779:0.09472)0.879:0.08224)0.933:0.07266)0.831:0.02983)0.937:0.06643,((A0A354GG70:0.53195,A0A3C1S1E8:0.45467)0.952:0.15568,(((((((A0A131Y5S4:0.38786,A0A4D5RBE7:0.42456)0.882:0.07730,A0A0N7ZAE4:0.53288)0.952:0.09615,(A0A354GFQ4:0.45603,A0A293N5E5:0.46395)0.895:0.10371)0.817:0.03152,A0A224Z9S1:0.50378)0.950:0.08592,((A0A7D9IJM9:0.39922,A0A6S7GAT1:0.33067)0.922:0.10069,((A0A7D9IKA8:0.41949,(A0A7D9HIH5:0.45757,(A0A7D9ICG5:0.38094,A0A6S7HS30:0.35431)0.932:0.12069)0.504:0.04982)0.190:0.03041,(A0A6S7H880:0.35030,A0A2D6S8R1:0.36321)0.334:0.05564)0.920:0.07656)0.986:0.14100)0.625:0.04139,(A0A2G8JVN9:0.48306,A0A354GI06:0.48615)0.962:0.19345)0.183:0.04188,(A0A147BLS4:0.57431,((((((((A0A6H5HD91:0.50164,A0A6H5GZX7:0.47194)0.000:0.09750,(A0A1B6F216:0.46117,(A0A146M6K4:0.48944,A0A2S2NHB6:0.53782)0.638:0.11031)0.393:0.08501)0.464:0.08952,J9JSP8:0.61110)0.722:0.07570,((X1WZ17:0.43618,(J9KQG5:0.55452,J9KBI9:0.29050)0.978:0.22632)0.679:0.06961,((A0A0A9XDH3:0.50573,V5GMW6:0.49417)0.865:0.09871,(A0A3S2P6U3:0.34748,A0A811W843:0.38870)0.915:0.10582)0.901:0.07666)0.790:0.03374)0.399:0.04364,((A0A1L2K1U4:0.45716,A0A1B6MKH3:0.28440)0.966:0.12644,((A0A6H5H9G6:0.54174,A0A6H5G8I0:0.45201)0.936:0.16207,(A0A6B2EFB0:0.55183,A0A1B6L7P7:0.51400)0.846:0.14956)0.424:0.08601)0.961:0.12052)0.893:0.07956,A0A2L2Y7E7:0.44960)0.929:0.06790,(((U5EEF0:0.63411,A0A336LGH0:0.92698)0.823:0.13228,(A0A821XHH9:0.39524,A0A1W7R627:0.52249)0.778:0.05346)0.558:0.08208,A0A1B6KPU2:0.50419)0.844:0.06260)0.910:0.06701,((((((A0A2J7QBY8:0.37153,(A0A653DHJ7:0.50650,A0A5N4AQ46:0.50507)0.846:0.08825)0.932:0.11745,A0A2J7PD27:0.47394)0.948:0.12422,((A0A1B6EPZ8:0.48460,A0A1B6LMV0:0.53056)0.942:0.16739,(A0A1B6LXZ5:0.61428,(D6X303:0.42811,A0A1Y1MDM8:0.40346)0.971:0.16082)0.429:0.05710)0.631:0.04132)0.875:0.05103,(((A0A069DXF5:0.71845,A0A1B6LGX0:0.37058)0.741:0.19815,(A0A1Y1KNM0:0.46058,A0A2S2NSE6:0.46295)0.956:0.15745)0.871:0.09635,((((A0A6L2Q5S1:0.47974,A0A2J7PX45:0.45411)0.567:0.12140,(A0A1B6LCP9:0.49398,A0A1B6H789:0.57986)0.778:0.09095)0.365:0.05243,((A0A3S2L7U6:0.49692,A0A437BLN1:0.52631)0.925:0.16441,(A0A482WQ83:0.46645,A0A1B6L8R3:0.48522)0.429:0.12241)0.352:0.03237)0.966:0.07818,((A0A1B6M8A4:0.55949,((A0A821LGR2:0.28507,(A0A4C1W9T6:0.42163,A0A4C1VKV2:0.37085)0.927:0.15357)0.998:0.28493,A0A1B6GQ49:0.52562)0.359:0.07836)0.624:0.08401,(((A0A811WAD2:0.58050,(A0A811WVX7:1.11555,A0A811WJG8:0.42480)0.726:0.21167)0.993:0.33415,A0A6M2DRU0:0.52149)0.857:0.09433,((A0A0A9XNJ7:0.48526,A0A6M2DQU2:0.50590)0.973:0.20454,((A0A1B6LBV2:0.51865,(V5GR72:0.44979,A0A811XBA8:0.47397)0.373:0.08534)0.118:0.07604,((D7EID3:0.52265,A0A1Y1M0T7:0.43647)0.964:0.16966,((A0A1B6LXC5:0.46944,(A0A1B6L055:0.63409,(A0A6H5GQ62:0.82908,A0A6A4K0S1:0.55189)0.907:0.15851)0.670:0.06841)0.821:0.06067,(A0A1U8N924:0.47622,A0A1B6KWH0:0.65972)0.858:0.15473)0.232:0.03548)0.913:0.08073)0.336:0.01667)0.859:0.03377)0.731:0.05204)0.609:0.03754)0.886:0.04272)0.768:0.03952)0.959:0.06884,((A0A354GFV8:0.31438,A0A1B6LDZ9:0.58397)0.948:0.19857,(T2M590:0.45404,(A0A354GIP9:0.65124,(A0A6Q2ZN45:0.31848,A0A3B5RBE5:0.41361)0.250:0.06658)0.596:0.04800)0.728:0.04861)0.918:0.07334)0.938:0.07895,(((A0A2J7QSL4:0.46166,A0A817Y398:0.55935)0.950:0.18129,(A0A0B2UWN8:0.82325,(A0A443Q8B7:0.70960,(A0A1D2M1I2:0.75028,(A0A1D2M5K7:0.73129,(A0A1D2M452:0.49059,A0A1D2MHK5:0.59458)0.667:0.11201)0.368:0.09279)0.162:0.05660)0.802:0.06990)0.869:0.08483)0.503:0.03610,(((A0A814HH01:0.27374,A0A813MHP2:0.34448)1.000:0.33646,(A0A6J8DMQ8:1.11463,(A0A0J7K8Y9:0.46975,U5EIT4:0.41946)0.994:0.26311)0.762:0.04940)0.942:0.11109,((A0A7T8GWW0:0.67169,A0A7T8H323:0.59749)0.985:0.28108,(A0A1Y1LB48:0.47312,(A0A5N4AX94:0.58929,A0A1Y1N6E6:0.60783)0.710:0.14317)0.846:0.10954)0.912:0.09357)0.915:0.07348)0.778:0.04629)0.699:0.05075)0.272:0.01634)0.838:0.04049)0.706:0.04146)0.953:0.08671)0.830:0.07999)0.766:0.04616,A0A814U6D3:0.75371)0.000:0.05004)0.382:0.02569)0.785:0.09598)0.992:0.14626)0.000:0.10331)0.980:0.16804,((((A0A4Q9KSP2:0.30306,A0A4Q9KUG4:0.53366)1.000:0.82280,(A0A812YRY2:1.30102,(A0A3P3YK22:1.00873,(A0A2V3J4C7:0.57948,A0A2V3IBZ3:0.70580)0.996:0.60908)0.635:0.23053)0.336:0.08116)0.765:0.06640,((A0A507CQ60:0.87372,(A0A0C9N9H7:0.45328,((I1BK60:0.26321,I1BYG8:0.16892)0.990:0.19181,(A0A068SI20:0.41270,(I1C7T9:0.55099,B7XBB2:0.17988)0.933:0.11177)0.861:0.07191)0.883:0.12857)0.995:0.35907)0.927:0.20158,(((A0A4Q5NCG8:0.52588,(A0A177T3Z5:0.35369,A0A4Q3L6T2:0.72243)0.994:0.45869)0.977:0.24723,(A0A1R1YA35:0.47844,A0A1R0GRB3:0.47340)0.474:0.08472)0.654:0.11430,A0A177T235:0.67246)0.993:0.31280)0.944:0.15525)0.842:0.12387,(A0A813DXZ3:1.39235,A0A7M5VDN7:1.28047)0.785:0.22726)0.716:0.07395)0.356:0.03059,(X6LPL8:0.54598,(X6LWU8:0.56706,X6P958:0.32053)0.908:0.16457)1.000:0.70234)0.213:0.04205,((((A0A7M7NA62:0.67085,(A0A1X7TXX3:0.89473,(((A0A8B6C2A5:0.43014,(A0A8B6H376:0.56211,(A0A6J8DSR9:0.51075,A0A8B6GMH5:0.18503)1.000:0.33829)0.913:0.14070)0.977:0.19494,(A0A8B6DHN5:0.37977,(((A0A6J8AI10:0.45268,(A0A6J8C6T4:0.26715,A0A6J7ZSD3:0.00534)1.000:0.33682)0.938:0.11732,A0A8B6GYV5:0.35075)0.187:0.04542,A0A6J8CEI2:0.40787)0.944:0.12594)0.185:0.13048)0.496:0.09922,(((A0A8B6GQM9:0.40099,A0A6J8C8I2:0.45233)0.958:0.13734,(A0A8B6DKD2:0.53197,A0A8B6HD08:0.42926)0.253:0.10575)0.925:0.09728,(A0A6J8BU78:0.73351,A0A482YR68:0.32860)0.999:0.35595)0.338:0.02775)0.979:0.19687)0.925:0.13347)0.000:0.09428,(((A0A2H9T4I5:0.51795,(A0A6J8EK29:0.57149,A0A8B6DU25:0.54093)0.850:0.10636)0.898:0.11179,A0A8B6GVT1:0.54490)0.890:0.12491,(A0A7D9IPC5:0.62461,A0A6S7GPW8:0.52530)0.873:0.10883)0.352:0.07569)0.569:0.07357,(A0A8B6CDT2:0.22138,A0A6J8CFK3:0.28931)1.000:0.38480)0.968:0.16221,(((A0A814LTG7:0.50614,A0A814NLU6:0.49734)0.914:0.15020,(A0A3M7SR12:0.74201,((A0A3M7T8X5:0.22294,A0A814CVE6:0.27379)0.992:0.23332,(A0A814MUD4:0.45204,A0A813Z459:0.28930)0.557:0.09463)0.362:0.08496)0.987:0.25111)0.646:0.10920,(A0A7M5XB23:0.80940,((A0A3B3I0P1:0.48627,(A0A3C1S3F5:0.61098,(A0A0P4VXS2:0.48583,A0A3C1S1R4:0.55787)0.783:0.15418)0.956:0.17130)0.890:0.12235,((A0A821RZ53:0.56947,A0A819ACS2:0.51608)0.968:0.20812,A0A811WQU5:0.71817)0.440:0.05465)0.929:0.14003)0.027:0.09324)0.983:0.20500)0.979:0.19585)0.937:0.09486)0.866:0.06855)0.907:0.04968)0.912:0.06763,(((((((A0A6V1P5X7:0.68456,((A0A2H9T4I8:0.41120,A0A0G4HC10:1.09791)0.666:0.13628,A0A3C1S4H7:0.45273)0.590:0.09760)0.507:0.05420,A0A672KW72:0.90333)0.580:0.05201,(A0A6S7FVC4:0.46365,A0A482YPZ5:0.54496)0.990:0.27277)0.455:0.05670,(A0A6P4F638:1.13920,(A0A6H5FX46:0.55204,A0A023F5J8:0.38584)0.648:0.08314)0.962:0.24470)0.289:0.03801,(A0A6L2PBD4:0.85182,A0A023F6D8:0.65934)0.928:0.18074)0.000:0.04503,(((A0A4Q3DGJ1:0.52576,(A0A699YMD7:0.90995,A0A7S3R9K1:0.41373)0.997:0.52583)0.891:0.16077,A0A176WTT6:0.78380)0.703:0.07408,((A0A2V0PK37:0.66098,A0A4Q3DGF7:0.37921)0.480:0.08322,(A0A1Y1IF39:0.42877,A0A2P6VSD4:0.80386)0.148:0.07847)0.831:0.13237)0.996:0.23696)0.641:0.06266,(((((A0A6H5HZB8:0.65471,(A0A4S2KV36:0.30103,A0A0J7KAU6:0.38462)0.232:0.12828)0.977:0.22416,(A0A6V7J383:0.35631,(T1J142:0.33429,T1IHP6:0.48320)0.893:0.14969)0.945:0.14577)0.985:0.19547,((A0A226DU66:0.50179,A0A226EW43:0.46700)0.977:0.24553,(((A0A226EC95:0.39717,A0A226DD11:0.35195)0.863:0.07615,(A0A226DD09:0.38889,A0A1D2MAZ3:0.48260)0.159:0.07679)0.950:0.15645,(((A0A6H5IEM9:0.45258,A0A0A9XSX7:0.49934)0.959:0.15640,((A0A6J0CDS4:0.35458,A0A6J0CEE4:0.47730)0.761:0.10479,(A0A0J7KCF7:0.39242,A0A224XHE7:0.49922)0.000:0.11038)0.643:0.04543)0.427:0.08446,((A0A224XIG8:0.39702,A0A6H5G5X2:0.52256)0.959:0.18834,(A0A6H5GML3:0.70315,A0A023F6C8:0.35559)0.797:0.12378)0.181:0.03744)0.878:0.11690)0.676:0.15274)0.969:0.14387)0.836:0.08895,((A0A1E1XHE2:0.51663,(A0A4D5RDJ2:0.32046,A0A147BJ97:0.69888)0.974:0.26103)0.991:0.26772,((A0A2J7PBW9:0.50705,A0A443QBM7:0.47545)1.000:0.45080,((A0A409W2D9:0.53773,(((A0A146HLF7:0.53884,A0A284RYV7:0.42142)0.292:0.06396,A0A284QR32:0.52568)0.735:0.09910,((A0A5E3XHC8:0.42890,(A0A6A4GJQ8:0.95000,A0A409YMP0:0.34558)0.915:0.21766)0.653:0.07868,A0A1M2VLS3:0.36123)0.883:0.07113)0.876:0.08094)1.000:0.47616,(S8AMW5:0.59178,A0A0E9NNG3:0.56797)0.503:0.05778)0.944:0.16442)0.825:0.08892)0.927:0.10925)0.130:0.01745,(A0A670ILX9:0.42653,A0A670HNL2:0.52034)0.996:0.33588)0.547:0.02619)0.952:0.07689)0.119:0.06022)0.947:0.11219,((((A0A1Y1MCV0:0.55914,(A0A0B7BUV6:0.48261,(A0A3B3HFM7:0.70132,(A0A5C6NH06:0.27369,A0A3B3H7C9:0.05459)1.000:0.36566)0.401:0.12220)0.795:0.09665)0.699:0.11875,(((((A0A6A3CI34:0.33021,(A0A699HF30:0.29394,A0A5N6LFF0:0.14701)0.792:0.04721)0.000:0.08330,(M7ZP89:0.50681,(A0A484NQS8:0.47301,A0A1U7X9N7:0.37610)0.569:0.06544)0.444:0.04180)0.994:0.22979,A0A183GGK7:0.48616)0.842:0.06851,((A0A7R8Z2A1:0.24392,(A0A183GJH0:0.34161,A0A3P8CVJ3:0.14994)0.985:0.17495)0.923:0.12632,(A0A085NQM5:1.04756,(W2T0R7:0.43779,A0A4U5TWD6:0.91520)0.478:0.05930)0.858:0.18398)0.988:0.21775)0.912:0.10638,(A0A498SY65:0.51491,A0A6P4XX56:0.41278)0.972:0.20543)0.988:0.20395)0.869:0.11987,((A0A1Q9CAG6:0.98712,A0A812MR09:0.87088)0.988:0.50133,((A0A023AVK4:0.90952,(K0SMM5:1.16213,A0A1Q9CHL1:0.73028)0.936:0.29474)0.301:0.03139,(C5K652:0.64863,A0A7J6KQD3:0.85918)0.937:0.21329)0.704:0.07830)0.384:0.08988)0.950:0.11322,(((((A0A432UTE6:0.71737,A0A814L774:0.47167)0.000:0.09083,(A0A7J6MVI8:1.11064,A0A7R9YSZ2:0.97459)0.527:0.07201)0.822:0.08103,(A0A6A7FV80:0.63729,(((A0A1Q9DQD8:1.14470,(A0A6H5L1F1:0.40975,A0A6H5JBI6:0.31714)0.955:0.26470)0.514:0.16965,((A0A2B4S4K3:0.41827,((A0A3R7MGU0:0.38079,(A0A7M7NHT1:0.44084,(A0A183T7C0:0.34109,A0A654HY30:0.02606)0.999:0.27671)0.701:0.09400)0.623:0.07262,A0A7D9IPZ0:0.36700)0.722:0.03290)0.917:0.11746,A0A2H1W991:0.42063)0.875:0.08038)0.806:0.05889,A0A0G4GUQ4:0.64190)0.967:0.14962)0.851:0.16291)0.860:0.08061,(((((A0A6I1JUY3:0.57607,(A0A2A4YK05:0.71011,A0A0S4J5D3:0.79128)0.873:0.15296)0.061:0.05486,A0A498M6E7:0.43820)0.988:0.20775,(A0A0N5B5Y1:0.80555,((((C5L570:0.36195,C5KLC5:0.72613)1.000:0.67659,(A0A0N4ZZQ8:0.85002,(A0A1I8CCJ3:0.47464,(A0A0N5BFQ2:0.69573,A0A0N5BIM8:0.73490)0.908:0.22240)0.722:0.12598)0.898:0.19638)0.317:0.07020,((A0A0N5B4Q1:0.71170,A0A0K0DVT6:0.65039)0.859:0.22002,(A0A2D4RYI1:0.90715,A0A2H2HZU7:0.75400)0.881:0.16931)0.862:0.12204)0.739:0.03034,(A0A1I8D0L3:0.83881,((A0A016WVK2:0.44484,(A0A811KYA2:0.70302,A0A7E4VR27:0.43614)0.879:0.13758)0.947:0.12771,(A0A023EWU8:0.70069,((((A0A1S3HCU5:0.43275,A0A2G8K4F2:0.36455)0.929:0.09716,(A0A3S2LNU0:0.42675,A0A6J2XXC5:0.46430)0.915:0.11644)0.863:0.04817,(((A0A016SCZ1:0.45308,A0A4U5LRM8:0.41916)0.430:0.07431,(G0MZ46:0.42654,(A0A0B1TFM8:0.21297,A0A016S3I7:0.12591)1.000:0.54078)0.722:0.09661)0.763:0.05786,(((A0A7I4YYS9:0.40259,(A0A2H2ITH9:0.29427,A0A7I5EAP1:0.50137)0.934:0.10038)0.950:0.13028,((A0A7I4YFB8:0.33470,A0A7I4YIW4:0.34851)0.894:0.10186,A0A0B1T3V1:0.94408)0.283:0.06111)0.744:0.05181,(A0A7I5EB76:0.18866,A0A0B2W179:0.29992)1.000:0.37606)0.915:0.06452)0.723:0.04385)0.906:0.06554,((((A0A821PJN1:0.43329,(A0A4C1WQ80:0.28653,A0A821UEX6:0.25565)0.948:0.14642)0.960:0.13113,(A0A4C1TPF2:0.63156,(A0A4C1WQ35:0.35660,A0A4C1Z4Y5:0.32602)0.645:0.03641)0.754:0.05322)0.102:0.04775,A0A016UTS3:0.49503)0.720:0.05549,A0A3P9KK69:0.75570)0.681:0.02856)0.615:0.07806)0.806:0.12461)0.340:0.03931)0.939:0.12582)0.792:0.06892)0.943:0.13184)0.638:0.04545,(A0A354GIV0:0.64863,A0A2D7SNV8:0.93200)0.950:0.28985)0.000:0.06463,((A0A3B3HVR8:0.48593,H3ABK0:0.71197)0.995:0.27183,(((A0A2G9UVK2:0.53261,A0A6F9D8K7:0.30048)0.969:0.16718,(((A0A6J2XZR8:0.55358,A0A811X2E2:0.42358)0.957:0.17307,((A0A2B4S413:0.43343,A0A6J8AWR3:0.22266)0.914:0.10179,(A0A433SM46:0.40413,A0A6A5D7R0:0.36412)0.792:0.05370)0.888:0.05932)0.876:0.04334,(A0A2B4RE56:0.49252,A0A433TJL7:0.23783)0.716:0.11664)0.954:0.11641)0.994:0.14530,((A0A654GKU6:0.43125,(A0A5J4NHR8:0.21790,(((A0A074ZVF8:0.30260,A0A419QH19:0.22142)1.000:0.54058,((A0A6A5D8V5:0.10480,A0A6A5DV39:0.54803)0.868:0.05983,(A0A6A5DBC0:0.70284,A0A6A5E508:0.39385)0.743:0.03197)0.876:0.08986)0.478:0.06341,A0A419PML3:0.38005)0.918:0.10764)1.000:0.34962)0.991:0.22145,(A0A016TPK0:0.60147,(A0A3Q0JJS5:0.52238,(A0A2P8Z3H5:0.68093,((J9LNA1:0.33639,J9M0P4:0.25541)0.984:0.15122,((A0A3L8DXX9:0.59980,(A0A0P8YCI9:0.39385,(A0A6J1QHX6:0.36949,A0A7R8ULT0:0.33004)0.474:0.09161)0.742:0.04243)0.989:0.14780,(A0A1Y1LWA9:0.44128,((A0A2P8YI77:0.51330,(A0A6G0Y0S1:0.35840,J9LEB5:0.21899)0.996:0.23322)0.824:0.05763,(J9KIG6:0.46377,((J9L287:0.27685,(J9LV02:0.24660,A0A6G0VWE7:0.53614)0.103:0.05243)0.929:0.09334,(A0A6G0Y452:0.32265,A0A6G0YT78:0.61642)0.851:0.08313)0.967:0.13267)0.920:0.08388)0.788:0.05087)0.644:0.07584)0.700:0.04954)0.942:0.14914)0.710:0.10531)0.943:0.16072)0.000:0.07406)0.738:0.01517)0.378:0.02604)0.886:0.06220)0.762:0.04376)0.791:0.02938,(A0A2G8KGL8:0.59155,(H3B0L2:0.51849,(A0A3B1JXQ2:0.44414,A0A815KXJ2:0.57148)0.952:0.14800)0.669:0.08314)0.963:0.12118)0.556:0.02963)0.629:0.03977)0.000:0.05173,((A0A812I4D2:0.64068,A0A812GZP5:0.50987)1.000:0.57561,(A0A433U5M4:0.65915,(((((A0A0J7KGF7:0.36771,A0A2W1B3T2:0.33994)0.836:0.08382,H3ABE5:0.68100)0.048:0.08816,A0A4W2G499:0.40422)0.795:0.05614,A0A817IPD1:0.63395)0.673:0.02736,((A0A1W7RAL1:0.38886,(A0A2J7QCU0:0.56973,(J9KDM4:0.36241,A0A6G0T0J6:0.29716)0.999:0.27954)0.877:0.10434)0.796:0.08034,(A0A3S0ZV17:0.45451,A0A2A4JBK9:0.38646)0.917:0.10598)0.998:0.18977)0.020:0.12570)0.605:0.09357)0.801:0.08445)0.760:0.05348)0.135:0.06524,A0A7S1NEX9:1.14923)0.485:0.05825)0.692:0.03405,(D3BEG6:0.89637,(A0A7W1C0G9:0.89198,A0A838N6K7:0.62378)0.693:0.13433)0.728:0.13071)0.939:0.08323)0.629:0.04479)0.429:0.05609);
`,SR=`id,label,randomnumber,organism,UGness\r
A0A521V1A2,retron,3,bacterial,nonUG\r
A0A3M0EPV0,retron,4,bacterial,nonUG\r
A0A2M8YHR5,retron,4,bacterial,nonUG\r
A0A7S9GFU0,retron,5,bacterial,nonUG\r
A0A1W6L2E1,retron,5,bacterial,nonUG\r
A0A1J0SW71,retron,6,bacterial,nonUG\r
U4V9B3,retron,6,bacterial,nonUG\r
D3RQK8,retron,7,bacterial,nonUG\r
A0A2M7PZW6,retron,7,bacterial,nonUG\r
A0A6H2D3B1,retron,8,bacterial,nonUG\r
A0A7X4GFL2,retron,8,bacterial,nonUG\r
F7ZAQ9,retron,9,bacterial,nonUG\r
A0A1F3Y179,retron,9,bacterial,nonUG\r
C5AN60,retron,10,bacterial,nonUG\r
A0A519MEH1,retron,10,bacterial,nonUG\r
A0A2A5EPN6,retron,11,bacterial,nonUG\r
A0A0B5E216,retron,11,bacterial,nonUG\r
A0A1T2A2T6,retron,12,bacterial,nonUG\r
A0A845A088,retron,12,bacterial,nonUG\r
A0A1X7HQZ2,retron,13,bacterial,nonUG\r
A0A2T9KCY1,retron,13,bacterial,nonUG\r
A0A845X7Z5,retron,14,bacterial,nonUG\r
A0A521H333,retron,14,bacterial,nonUG\r
A0A238D9C7,retron,15,bacterial,nonUG\r
A0A031JVU7,retron,15,bacterial,nonUG\r
A0A4Q0HTQ9,retron,16,bacterial,nonUG\r
A0A848FFQ0,retron,16,bacterial,nonUG\r
A0A4Z0AS36,retron,17,bacterial,nonUG\r
A0A3N8RB71,retron,17,bacterial,nonUG\r
A0A105TF75,retron,18,bacterial,nonUG\r
A0A3D3KJA2,retron,18,bacterial,nonUG\r
A0A0J1NGF7,retron,19,bacterial,nonUG\r
A0A4Q1CQM2,retron,19,bacterial,nonUG\r
A0A4R7RMV8,retron,20,bacterial,nonUG\r
A0A7G7ENL2,retron,20,bacterial,nonUG\r
A0A6N8XNG9,retron,21,bacterial,nonUG\r
A0A356NYB3,retron,21,bacterial,nonUG\r
A0A8B4ND75,retron,22,bacterial,nonUG\r
E1W275,retron,22,bacterial,nonUG\r
A0A330MAV8,retron,23,bacterial,nonUG\r
A0A7T8ARK4,retron,23,bacterial,nonUG\r
A0A448TVV3,retron,24,bacterial,nonUG\r
A0A1E9MP84,retron,24,bacterial,nonUG\r
A0A7L6N5I8,retron,25,bacterial,nonUG\r
T0SXH7,retron,25,bacterial,nonUG\r
A0A3S9KLC1,retron,26,bacterial,nonUG\r
A0A7T7XNI3,retron,26,bacterial,nonUG\r
A0A1C6HCZ3,retron,27,bacterial,nonUG\r
A0A7U9WZ11,retron,27,bacterial,nonUG\r
A0A0R1XPV0,retron,28,bacterial,nonUG\r
A0A2N7ASU1,retron,28,bacterial,nonUG\r
A0A1L8SSR5,retron,29,bacterial,nonUG\r
A0A1V5S2D7,retron,29,bacterial,nonUG\r
A0A3D1WGA9,retron,30,bacterial,nonUG\r
R6XLK3,retron,30,bacterial,nonUG\r
A0A200ID83,retron,31,bacterial,nonUG\r
A0A809NYB9,retron,31,bacterial,nonUG\r
A0A0U2X5Z9,retron,32,bacterial,nonUG\r
A0A419VTT3,retron,32,bacterial,nonUG\r
A0A5C8E082,retron,33,bacterial,nonUG\r
R6DSD3,retron,33,bacterial,nonUG\r
A0A6J4WRT4,retron,34,bacterial,nonUG\r
A0A3B6VZ66,retron,34,bacterial,nonUG\r
A0A6S6TU31,retron,35,bacterial,nonUG\r
A0A2D9C0Z4,retron,35,bacterial,nonUG\r
A0A3C1RIF5,retron,36,bacterial,nonUG\r
A0A3E1YC68,retron,36,bacterial,nonUG\r
A0A6M1SU45,retron,37,bacterial,nonUG\r
A0A519L1Q7,retron,37,bacterial,nonUG\r
A0A060RDL6,retron,38,bacterial,nonUG\r
A0A379MQF2,retron,38,bacterial,nonUG\r
A0A1H4MUQ6,retron,39,bacterial,nonUG\r
A0A2G1BV13,retron,39,bacterial,nonUG\r
A0A5B8VDR7,retron,40,bacterial,nonUG\r
A0A4Q5LJV1,retron,40,bacterial,nonUG\r
A0A3N8PAU5,retron,41,bacterial,nonUG\r
A0A4Q1HJL4,retron,41,bacterial,nonUG\r
S2ETR1,retron,42,bacterial,nonUG\r
A0A2Z5UTB7,retron,42,bacterial,nonUG\r
A0A7Y7ICE6,retron,43,bacterial,nonUG\r
A0A2I0EU16,retron,43,bacterial,nonUG\r
A0A177W1C9,retron,44,bacterial,nonUG\r
A0A7Y3CKT6,retron,44,bacterial,nonUG\r
A0A540VQ97,retron,45,bacterial,nonUG\r
A0A1G0KBC3,retron,45,bacterial,nonUG\r
A0A1N6LZW7,retron,46,bacterial,nonUG\r
A0A064E6Q4,retron,46,bacterial,nonUG\r
G0A4K9,retron,47,bacterial,nonUG\r
A0A2N7EBL6,retron,47,bacterial,nonUG\r
A0A7W1NPA9,retron,48,bacterial,nonUG\r
A0A7V7YE37,retron,48,bacterial,nonUG\r
A0A290TU22,retron,49,bacterial,nonUG\r
A0A2N8SPL7,retron,49,bacterial,nonUG\r
A0A2D8J266,retron,50,bacterial,nonUG\r
A0A3D8GYD0,retron,50,bacterial,nonUG\r
A0A0K9TGL3,retron,51,bacterial,nonUG\r
A0A1C3ZMG4,retron,51,bacterial,nonUG\r
A0A172UC81,retron,52,bacterial,nonUG\r
A0A809QXW8,retron,52,bacterial,nonUG\r
A0A840GIM2,retron,53,bacterial,nonUG\r
G0AC57,retron,53,bacterial,nonUG\r
A0A221KDQ8,retron,54,bacterial,nonUG\r
A0A366FEC3,retron,54,bacterial,nonUG\r
A0A7L5A4W3,retron,55,bacterial,nonUG\r
A0A1H4QGE1,retron,55,bacterial,nonUG\r
A0A3M2BT43,retron,56,bacterial,nonUG\r
A0A7C3F755,retron,56,bacterial,nonUG\r
A0A1E3YBT8,retron,57,bacterial,nonUG\r
A0A1F2SPC7,retron,57,bacterial,nonUG\r
A0A2V8PXR5,retron,58,bacterial,nonUG\r
A0A1F7XM93,retron,58,bacterial,nonUG\r
A0A1F5FPC6,retron,59,bacterial,nonUG\r
A0A1G1WP18,retron,59,bacterial,nonUG\r
A0A4P9A3Z4,retron,60,bacterial,nonUG\r
A0A4R1VRZ1,retron,60,bacterial,nonUG\r
A0A1F7CNN7,retron,61,bacterial,nonUG\r
A0A2H0RTF6,retron,61,bacterial,nonUG\r
A0A0S8J762,retron,62,bacterial,nonUG\r
A0A1F5TQJ6,retron,62,bacterial,nonUG\r
A0A3R6ZVV7,retron,63,bacterial,nonUG\r
A0A1G1P8D1,retron,63,bacterial,nonUG\r
A0A2E7KFH0,retron,64,bacterial,nonUG\r
A0A0J1B4S1,retron,64,bacterial,nonUG\r
A0A4P7UJX5,retron,65,bacterial,nonUG\r
A0A523Z2X7,retron,65,bacterial,nonUG\r
A0A1G1NY65,retron,66,bacterial,nonUG\r
A0A1F6HTA5,retron,66,bacterial,nonUG\r
A0A7T9CQ57,retron,67,bacterial,nonUG\r
A0A2E2C4F4,retron,67,bacterial,nonUG\r
A0A7W5H4T3,retron,68,bacterial,nonUG\r
A0A518KUC0,retron,68,bacterial,nonUG\r
A0A6N9ACI8,retron,69,bacterial,nonUG\r
A0A1W9J1Y0,retron,69,bacterial,nonUG\r
A0A7V1F6Z3,retron,70,bacterial,nonUG\r
A0A445MXS3,retron,70,bacterial,nonUG\r
A0A7K1KL67,retron,71,bacterial,nonUG\r
A0A7C5EDI1,retron,71,bacterial,nonUG\r
A0A7T9H4G9,retron,72,bacterial,nonUG\r
A0A351MK72,retron,72,bacterial,nonUG\r
A0A1G6JLR1,retron,73,bacterial,nonUG\r
A0A1V0DDI5,retron,73,bacterial,nonUG\r
A0A382A9S0,retron,74,bacterial,nonUG\r
A0A2E1KM22,retron,74,bacterial,nonUG\r
A0A2E7CLN5,retron,75,bacterial,nonUG\r
A0A2E7HQI7,retron,75,bacterial,nonUG\r
A0A126V3D5,retron,76,bacterial,nonUG\r
A0A4R1D371,retron,76,bacterial,nonUG\r
A0A1F6W4H6,retron,77,bacterial,nonUG\r
A0A0G0AXR3,retron,77,bacterial,nonUG\r
A0A142X8K2,retron,78,bacterial,nonUG\r
A0A5S9F473,retron,78,bacterial,nonUG\r
A0A7V2XTI5,retron,79,bacterial,nonUG\r
A0A2E8B118,retron,79,bacterial,nonUG\r
A0A7Z9IAM1,retron,80,bacterial,nonUG\r
A0A2D9Z2K8,retron,80,bacterial,nonUG\r
A0A353DGV7,retron,81,bacterial,nonUG\r
A0A354W7U0,retron,81,bacterial,nonUG\r
N1ZCL8,retron,82,bacterial,nonUG\r
A0A1V4IXF0,retron,82,bacterial,nonUG\r
A0A2E7CL21,retron,83,bacterial,nonUG\r
I4APC9,retron,83,bacterial,nonUG\r
A0A3S0NCM9,retron,84,bacterial,nonUG\r
A0A6P0U1P2,retron,84,bacterial,nonUG\r
A0A1D8J5C0,retron,85,bacterial,nonUG\r
U4T817,retron,85,bacterial,nonUG\r
A0A1N7J1S3,retron,86,bacterial,nonUG\r
A0A838UN69,retron,86,bacterial,nonUG\r
A0A3D8MSH4,retron,87,bacterial,nonUG\r
A0A3L7SGD7,retron,87,bacterial,nonUG\r
A0A523U0G7,retron,88,bacterial,nonUG\r
A0A2E5VCH6,retron,88,bacterial,nonUG\r
Q31A85,retron,89,bacterial,nonUG\r
A0A2S8FQC8,retron,89,bacterial,nonUG\r
A0A7V5KV02,retron,90,bacterial,nonUG\r
A0A0F9QW46,retron,90,bacterial,nonUG\r
A0A2Z3H9D7,retron,91,bacterial,nonUG\r
A0A6M8VX92,retron,91,bacterial,nonUG\r
A0A5S3PUU1,retron,92,bacterial,nonUG\r
A0A344LUT8,retron,92,bacterial,nonUG\r
A0A2X2LHA8,,93,bacterial,nonUG\r
A0A2C6CNE8,,93,bacterial,nonUG\r
A0A542RI91,,94,bacterial,nonUG\r
A0A414I6A1,,94,bacterial,nonUG\r
A0A0E3QDK3,,95,bacterial,nonUG\r
A0A0E3RW41,,95,bacterial,nonUG\r
A0A7K4H7S1,,96,bacterial,nonUG\r
A0A1H0G6H4,,96,bacterial,nonUG\r
A0A3E2WX17,,97,bacterial,nonUG\r
V6J1K8,,97,bacterial,nonUG\r
A0A401UI85,,98,bacterial,nonUG\r
A0A2N1V071,,98,bacterial,nonUG\r
A0A1F9XM12,,99,bacterial,nonUG\r
A0A4R3NF62,,99,bacterial,nonUG\r
A4G158,,100,bacterial,nonUG\r
A0A8B5NDN0,,100,bacterial,nonUG\r
J8AGS9,,101,bacterial,nonUG\r
A0A0F9JNI7,,101,bacterial,nonUG\r
A0A222ETX7,,102,bacterial,nonUG\r
A0A7C1MNA0,,102,bacterial,nonUG\r
A0A5E7MQ93,,103,bacterial,nonUG\r
Q477P7,,103,bacterial,nonUG\r
A0A1M6AZH8,,104,bacterial,nonUG\r
A0A090QCG5,,104,bacterial,nonUG\r
A0A2N4XD69,,105,bacterial,nonUG\r
A0A3R6ADU9,,105,bacterial,nonUG\r
A0A0F7GD60,,106,bacterial,nonUG\r
A0A4Q6F417,,106,bacterial,nonUG\r
A0A2L1CLB7,,107,bacterial,nonUG\r
A0A4U1YY68,,107,bacterial,nonUG\r
A0A2A1ZNS9,,108,bacterial,nonUG\r
A0A2P8NDL6,,108,bacterial,nonUG\r
A0A3D9KE31,,109,bacterial,nonUG\r
A0A1H3DSX3,,109,bacterial,nonUG\r
A0A0F3HA32,,110,bacterial,nonUG\r
A0A371CGB7,,110,bacterial,nonUG\r
S7U3H2,,111,bacterial,nonUG\r
A0A7C8HUU0,,111,bacterial,nonUG\r
A0A4P7BRK6,,112,bacterial,nonUG\r
A0A2M8Y856,,112,bacterial,nonUG\r
A0A2X4Y9M3,,113,bacterial,nonUG\r
A0A2S5F6K8,,113,bacterial,nonUG\r
A0A7Y1BM70,,114,bacterial,nonUG\r
A0A506UHP4,,114,bacterial,nonUG\r
A0A2T9K8W1,,115,bacterial,nonUG\r
A0A6A1TUW0,,115,bacterial,nonUG\r
A0A7X6GKG4,,116,bacterial,nonUG\r
G8NSP1,,116,bacterial,nonUG\r
A0A2V6LFV7,,117,bacterial,nonUG\r
U2SCG5,,117,bacterial,nonUG\r
A5ZA82,,118,bacterial,nonUG\r
A0A355X6L4,,118,bacterial,nonUG\r
A0A1G4SF02,,119,bacterial,nonUG\r
A0A1C6BXJ6,,119,bacterial,nonUG\r
A0A417IJM7,,120,bacterial,nonUG\r
A0A3A6EWI3,,120,bacterial,nonUG\r
A0A7X5CB38,,121,bacterial,nonUG\r
A0A7S7ER05,,121,bacterial,nonUG\r
A0A1Y4EPM7,,122,bacterial,nonUG\r
A0A3N9PWQ5,,122,bacterial,nonUG\r
A0A2U1AT38,,123,bacterial,nonUG\r
A0A354U4S8,,123,bacterial,nonUG\r
A0A317F747,,124,bacterial,nonUG\r
A0A096AYN0,,124,bacterial,nonUG\r
A0A4Q3ECR9,,125,bacterial,nonUG\r
S1MU46,,125,bacterial,nonUG\r
A0A2U0DLL9,,126,bacterial,nonUG\r
A0A1Q5PCS6,,126,bacterial,nonUG\r
A0A7V7TXS3,,127,bacterial,nonUG\r
A0A1Y4MUH3,,127,bacterial,nonUG\r
A0A564UUV8,,128,bacterial,nonUG\r
A0A351VC69,,128,bacterial,nonUG\r
A0A7U6KEK3,,129,bacterial,nonUG\r
A0A1G0ZFP0,,129,bacterial,nonUG\r
A0A0A2TF72,,130,bacterial,nonUG\r
A0A0R1WII8,,130,bacterial,nonUG\r
A0A2Z4VX68,,131,bacterial,nonUG\r
A0A524CN96,,131,bacterial,nonUG\r
A0A1S8NE49,,132,bacterial,nonUG\r
A0A069SPB9,,132,bacterial,nonUG\r
A0A7X1S119,,133,bacterial,nonUG\r
A0A842VQB4,,133,bacterial,nonUG\r
R5DJE4,,134,bacterial,nonUG\r
A0A7T0QZR6,,134,bacterial,nonUG\r
A0A4R2TJC9,,135,bacterial,nonUG\r
A0A0W0PG39,,135,bacterial,nonUG\r
A0A1Y6MHN1,,136,bacterial,nonUG\r
A0A4R7P5M4,,136,bacterial,nonUG\r
R7JAG0,,137,bacterial,nonUG\r
A0A518GFJ7,,137,bacterial,nonUG\r
A0A1R3U6U3,,138,bacterial,nonUG\r
A0A291GDZ8,,138,bacterial,nonUG\r
E5Y519,,139,bacterial,nonUG\r
A0A1Y0NZ40,,139,bacterial,nonUG\r
A0A5F2CNS7,,140,bacterial,nonUG\r
A0A0F6L8U3,,140,bacterial,nonUG\r
A0A2T0VAK9,,141,bacterial,nonUG\r
A0A2I1Y8C6,,141,bacterial,nonUG\r
A0A1Y3LSH4,,142,bacterial,nonUG\r
A0A3N1ZRK8,,142,bacterial,nonUG\r
A0A3R9XE51,,143,bacterial,nonUG\r
A0A2A9CVU4,,143,bacterial,nonUG\r
A0A4S2RS39,,144,bacterial,nonUG\r
A0A839E6C7,,144,bacterial,nonUG\r
A0A1H1Q012,,145,bacterial,nonUG\r
A0A7Z9PSM6,,145,bacterial,nonUG\r
A0A4V6Z7Q9,,146,bacterial,nonUG\r
A0A1H1D3D7,,146,bacterial,nonUG\r
A0A261GFC6,,147,bacterial,nonUG\r
A0A1E4ZRC1,,147,bacterial,nonUG\r
A0A3M6RIW2,,148,bacterial,nonUG\r
A0A4D4JQY3,,148,bacterial,nonUG\r
A0A7T9Q9A5,,149,bacterial,nonUG\r
A0A3L7AS01,,149,bacterial,nonUG\r
A0A7K0PXP3,,150,bacterial,nonUG\r
A0A545SWJ1,,150,bacterial,nonUG\r
A0A142WXM8,,151,bacterial,nonUG\r
A0A1I3ASZ8,,151,bacterial,nonUG\r
A0A517QZS4,,152,bacterial,nonUG\r
A0A559QUQ0,,152,bacterial,nonUG\r
L8DCB7,,153,bacterial,nonUG\r
A0A6I3JCD7,,153,bacterial,nonUG\r
A0A5M8T0C4,,154,bacterial,nonUG\r
M5TV13,,154,bacterial,nonUG\r
A0A3A0CIY8,,155,bacterial,nonUG\r
A0A1V6G761,,155,bacterial,nonUG\r
A0A524F5W7,,156,bacterial,nonUG\r
A0A1G0XRL8,,156,bacterial,nonUG\r
A0A368M433,,157,bacterial,nonUG\r
A0A7C5ZQQ1,,157,bacterial,nonUG\r
A0A2D6QGU2,,158,bacterial,nonUG\r
A0A660WFW6,,158,bacterial,nonUG\r
A0A246IDZ3,,159,bacterial,nonUG\r
A0A3G2W9F9,,159,bacterial,nonUG\r
R7G4H2,,160,bacterial,nonUG\r
A0A239J3H4,,160,bacterial,nonUG\r
A0A5C5XWA2,,161,bacterial,nonUG\r
A0A6V7BSW7,,161,bacterial,nonUG\r
B8J4W6,,162,bacterial,nonUG\r
A0A0A1FCI1,,162,bacterial,nonUG\r
A0A7C5FUK9,,163,bacterial,nonUG\r
A0A7Z0B2A4,,163,bacterial,nonUG\r
A0A3M5Y0G6,,164,bacterial,nonUG\r
A0A4R8FFH2,,164,bacterial,nonUG\r
A0A1V2V7Y9,,165,bacterial,nonUG\r
A0A1E3Y6T3,,165,bacterial,nonUG\r
A0A2N3F7S0,,166,bacterial,nonUG\r
U1HNM0,,166,bacterial,nonUG\r
A0A127V9G1,,167,bacterial,nonUG\r
A0A0G0BN90,,167,bacterial,nonUG\r
A0A4R5PI99,,168,bacterial,nonUG\r
A0A2X4TP36,,168,bacterial,nonUG\r
A0A7T5CI75,,169,bacterial,nonUG\r
A0A1I7IP24,,169,bacterial,nonUG\r
A0A2N1QUC8,,170,bacterial,nonUG\r
A0A480A4H3,,170,bacterial,nonUG\r
A0A6H2BWV1,,171,bacterial,nonUG\r
B1WTX0,,171,bacterial,nonUG\r
A0A0G1YXM6,,172,bacterial,nonUG\r
B9E9Y3,,172,bacterial,nonUG\r
A0A3M8H4J5,,173,bacterial,nonUG\r
A0A4R0Z4S4,,173,bacterial,nonUG\r
A0A7L8R307,,174,bacterial,nonUG\r
A0A2G5VZ17,,174,bacterial,nonUG\r
A0A511ITH3,,175,bacterial,nonUG\r
R6J3U1,,175,bacterial,nonUG\r
A0A699GDL5,,176,bacterial,nonUG\r
A0A315EMF7,,176,bacterial,nonUG\r
A0A7Y4YNY3,,177,bacterial,nonUG\r
A0A432XGE6,,177,bacterial,nonUG\r
A0A4Y8W9C6,,178,bacterial,nonUG\r
A0A2G0VQF1,,178,bacterial,nonUG\r
A0A0Q8AXE6,,179,bacterial,nonUG\r
A0A3S0WZB9,,179,bacterial,nonUG\r
A0A443IK64,,180,bacterial,nonUG\r
A0A1S6FJR2,,180,bacterial,nonUG\r
A0A5C4XRK9,,181,bacterial,nonUG\r
A0A375FCM2,,181,bacterial,nonUG\r
A0A3A1WIF7,,182,bacterial,nonUG\r
A0A1X7FB28,,182,bacterial,nonUG\r
A0A5S3TKL8,,183,bacterial,nonUG\r
A0A829G084,,183,bacterial,nonUG\r
A0A0F2E545,,184,bacterial,nonUG\r
A0A3Q9V5C4,,184,bacterial,nonUG\r
A6W1H0,,185,bacterial,nonUG\r
A0A1G6PZM7,,185,bacterial,nonUG\r
N9R133,,186,bacterial,nonUG\r
A0A4R0FAL2,,186,bacterial,nonUG\r
A0A5C8ED44,,187,bacterial,nonUG\r
A0A5A5TYR4,,187,bacterial,nonUG\r
A0A5R9BU29,,188,bacterial,nonUG\r
A0A377R2E1,,188,bacterial,nonUG\r
A0A8A8C4R3,,189,bacterial,nonUG\r
A0A2E0UMP0,,189,bacterial,nonUG\r
A0A1G3UCI0,,190,bacterial,nonUG\r
A0A2P2DQX3,,190,bacterial,nonUG\r
A0A0G1AWZ5,,191,bacterial,nonUG\r
A0A2G7H0Y5,,191,bacterial,nonUG\r
A0A7K1ZRA7,,192,bacterial,nonUG\r
A0A2V4MXS3,,192,bacterial,nonUG\r
A0A2T5JZ32,,193,bacterial,nonUG\r
A0A374RNP6,,193,bacterial,nonUG\r
A0A4Q4AJF4,,194,bacterial,nonUG\r
A0A1Y4BKD3,,194,bacterial,nonUG\r
A0A3N0AT12,,195,bacterial,nonUG\r
A0A6N8ECM6,,195,bacterial,nonUG\r
A0A661EH64,,196,bacterial,nonUG\r
A0A8A5DY34,,196,bacterial,nonUG\r
A0A520XGB5,,197,bacterial,nonUG\r
A0A5C7FCE5,,197,bacterial,nonUG\r
A0A349D5U3,,198,bacterial,nonUG\r
A0A1H7BW72,,198,bacterial,nonUG\r
A0A0X8G537,,199,bacterial,nonUG\r
A0A3B9HJY7,,199,bacterial,nonUG\r
A0A7C5JJ29,,200,bacterial,nonUG\r
A0A4Q2UMN3,,200,bacterial,nonUG\r
F4L2L2,,201,bacterial,nonUG\r
A0A7Y5R4K9,,201,bacterial,nonUG\r
A0A7V4YT00,,202,bacterial,nonUG\r
A0A3M1XY97,,202,bacterial,nonUG\r
A0A2N2VUZ8,,203,bacterial,nonUG\r
F4L831,,203,bacterial,nonUG\r
A0A286IR28,,204,bacterial,nonUG\r
A0A257K5R2,,204,bacterial,nonUG\r
A0A7G5XFR0,,205,bacterial,nonUG\r
A0A543G857,,205,bacterial,nonUG\r
A0A3D6BEX3,,206,bacterial,nonUG\r
A0A847YUB9,,206,bacterial,nonUG\r
A0A154L339,,207,bacterial,nonUG\r
A0A2E9CHQ2,,207,bacterial,nonUG\r
A0A1H3Q121,,208,bacterial,nonUG\r
A0A6G7ZTR9,,208,bacterial,nonUG\r
A0A450U8A4,,209,bacterial,nonUG\r
A0A3R7G947,,209,bacterial,nonUG\r
A0A4Q5WYX7,,210,bacterial,nonUG\r
A0A1Z4UJ08,,210,bacterial,nonUG\r
A0A1H4FZM5,,211,bacterial,nonUG\r
A0A381FBL1,,211,bacterial,nonUG\r
A0A434A2G2,,212,bacterial,nonUG\r
A0A2M9X8C6,,212,bacterial,nonUG\r
A0A542R1X2,,213,bacterial,nonUG\r
A0A365CWF1,,213,bacterial,nonUG\r
A0A4V1Z2G7,,214,bacterial,nonUG\r
F5XG09,,214,bacterial,nonUG\r
A0A5P2BY17,,215,bacterial,nonUG\r
A0A839IED0,,215,bacterial,nonUG\r
A0A7X7Q856,,216,bacterial,nonUG\r
A0A5J5IQ12,,216,bacterial,nonUG\r
A0A3N2C765,,217,bacterial,nonUG\r
A0A0F0L4Y0,,217,bacterial,nonUG\r
A0A1G2VU88,,218,bacterial,nonUG\r
A0A7K1UGW9,,218,bacterial,nonUG\r
A0A1Y3YXB3,,219,bacterial,nonUG\r
A0A349DTE5,,219,bacterial,nonUG\r
A0A4Q3GXB5,,220,bacterial,nonUG\r
A0A2U2P9I1,,220,bacterial,nonUG\r
A0A255TEM0,,221,bacterial,nonUG\r
A0A329Z8Q9,,221,bacterial,nonUG\r
A0A7U3ZJ92,,222,bacterial,nonUG\r
A0A4Z0PKM5,,222,bacterial,nonUG\r
A0A426R7U6,,223,bacterial,nonUG\r
A0A1Y4V4G6,,223,bacterial,nonUG\r
A0A497ZE76,,224,bacterial,nonUG\r
A0A3D6DGX2,,224,bacterial,nonUG\r
A0A3N2KTF9,,225,bacterial,nonUG\r
A0A4R6STT1,,225,bacterial,nonUG\r
A0A096CU58,,226,bacterial,nonUG\r
A0A1G7IQS8,,226,bacterial,nonUG\r
A0A4P6B4I5,,227,bacterial,nonUG\r
A0A6P2GI26,,227,bacterial,nonUG\r
C6C382,,228,bacterial,nonUG\r
A0A4R0PEV5,,228,bacterial,nonUG\r
A0A120LUV8,,229,bacterial,nonUG\r
A0A2T5XPL1,,229,bacterial,nonUG\r
A0A529U4U5,,230,bacterial,nonUG\r
A0A4P8QJS0,,230,bacterial,nonUG\r
A0A2A3VLQ3,,231,bacterial,nonUG\r
A0A4Q3YT09,,231,bacterial,nonUG\r
K2K784,,232,bacterial,nonUG\r
A0A7L4WSR8,,232,bacterial,nonUG\r
A0A7U5N8X8,,233,bacterial,nonUG\r
A0A7Y0WS86,,233,bacterial,nonUG\r
A0A7H8SEW2,,234,bacterial,nonUG\r
A0A6S6SAG2,,234,bacterial,nonUG\r
A0A2S9KF84,,235,bacterial,nonUG\r
A0A4Q0MUA6,,235,bacterial,nonUG\r
A0A1G8CEE1,,236,bacterial,nonUG\r
A0A7W8IWX5,,236,bacterial,nonUG\r
A0A6M1TB84,,237,bacterial,nonUG\r
A0A202DEV6,,237,bacterial,nonUG\r
A0A315CA38,,238,bacterial,nonUG\r
A0A2E1Q1G6,,238,bacterial,nonUG\r
A0A6N6VNB7,,239,bacterial,nonUG\r
A0A2S7BY03,,239,bacterial,nonUG\r
A0A651FKZ1,,240,bacterial,nonUG\r
A0A7U2KTX2,,240,bacterial,nonUG\r
A0A2E6Z9I7,,241,bacterial,nonUG\r
A0A1E3G752,,241,bacterial,nonUG\r
A0A3E2XP75,,242,bacterial,nonUG\r
A0A3R5WDL8,,242,bacterial,nonUG\r
A0A1C6G4I3,,243,bacterial,nonUG\r
I0JJN7,,243,bacterial,nonUG\r
A0A3C1DA65,,244,bacterial,nonUG\r
A0A1Y4DX26,,244,bacterial,nonUG\r
U4KTH3,,245,bacterial,nonUG\r
E1X5W3,,245,bacterial,nonUG\r
A0A8A4E1J0,,246,bacterial,nonUG\r
A0A2T0QIC2,,246,bacterial,nonUG\r
A0A7W3U4Q6,,247,bacterial,nonUG\r
A0A2D5EB16,,247,bacterial,nonUG\r
A0A1S1NT53,,248,bacterial,nonUG\r
A0A286BYP3,,248,bacterial,nonUG\r
A0A4Q0ZWU5,,249,bacterial,nonUG\r
A0A7U6KER9,,249,bacterial,nonUG\r
R6ENK7,,250,bacterial,nonUG\r
A0A413S246,,250,bacterial,nonUG\r
A0A1C5TKL9,,251,bacterial,nonUG\r
A0A174EVV8,,251,bacterial,nonUG\r
A0A5C0SJW7,,252,bacterial,nonUG\r
A0A437QRU2,,252,bacterial,nonUG\r
A0A750HWH1,,253,bacterial,nonUG\r
A0A6G8JFW3,,253,bacterial,nonUG\r
A0A1E7D7S1,,254,bacterial,nonUG\r
A0A7X2ICF5,,254,bacterial,nonUG\r
A0A1L5QMC7,,255,bacterial,nonUG\r
A0A1B8YIM8,,255,bacterial,nonUG\r
A0A060UQT7,,256,bacterial,nonUG\r
A0A2M7HVL5,,256,bacterial,nonUG\r
A0A482ZGF3,,257,bacterial,nonUG\r
A0A521GP55,,257,bacterial,nonUG\r
A0A1F6DG67,,258,bacterial,nonUG\r
K1YN85,,258,bacterial,nonUG\r
A0A839JPI2,,259,bacterial,nonUG\r
A0A1G7UPP1,,259,bacterial,nonUG\r
A0A3M2CTV6,,260,bacterial,nonUG\r
A0A5C7LPJ9,,260,bacterial,nonUG\r
A0A1E8FE34,,261,bacterial,nonUG\r
A0A382GGX9,,261,bacterial,nonUG\r
A0A2K7SZ61,,262,bacterial,nonUG\r
M4U5P9,,262,bacterial,nonUG\r
A0A7L8QKD3,,263,bacterial,nonUG\r
A0A1G1V1Y3,,263,bacterial,nonUG\r
A0A661HKC1,,264,bacterial,nonUG\r
A0A2A7AJ35,,264,bacterial,nonUG\r
A0A658JSF7,,265,bacterial,nonUG\r
A0A1Y4N5E2,,265,bacterial,nonUG\r
A0A1S8TKN2,,266,bacterial,nonUG\r
A0A6G8ALK5,,266,bacterial,nonUG\r
A0A2G2MIC4,,267,bacterial,nonUG\r
A0A371S6Z3,,267,bacterial,nonUG\r
A0A5C1G6C6,,268,bacterial,nonUG\r
A0A1I6HZH8,,268,bacterial,nonUG\r
A0A1M7IFD3,,269,bacterial,nonUG\r
A0A2A7AQX3,,269,bacterial,nonUG\r
F1T8Z5,,270,bacterial,nonUG\r
A0A8B5Y3N1,,270,bacterial,nonUG\r
A0A7U9SC39,,271,bacterial,nonUG\r
A0A4V3RYP2,,271,bacterial,nonUG\r
A0A3R6RE91,,272,bacterial,nonUG\r
A0A2G2HHQ9,,272,bacterial,nonUG\r
A0A3S5BZ18,,273,bacterial,nonUG\r
Q7MKL2,,273,bacterial,nonUG\r
A0A509YJI1,,274,bacterial,nonUG\r
A0A5S3WMD4,,274,bacterial,nonUG\r
A0A0T9LB76,,275,bacterial,nonUG\r
A0A167IYL6,,275,bacterial,nonUG\r
A0A6I7DBK1,,276,bacterial,nonUG\r
A0A2A2N6V7,,276,bacterial,nonUG\r
A0A420Z7W1,,277,bacterial,nonUG\r
A0A357G6D1,,277,bacterial,nonUG\r
A0A0G0BGG4,,278,bacterial,nonUG\r
A0A268NW96,,278,bacterial,nonUG\r
A0A848CC69,,279,bacterial,nonUG\r
A0A1Y4D6V3,,279,bacterial,nonUG\r
K1YJ08,,280,bacterial,nonUG\r
A0A2G6PLS9,,280,bacterial,nonUG\r
A0A0F9BDF5,,281,bacterial,nonUG\r
A0A2D6NFY2,,281,bacterial,nonUG\r
A0A7X7TSB4,,282,bacterial,nonUG\r
A0A0G1L357,,282,bacterial,nonUG\r
A0A2M7XEI2,,283,bacterial,nonUG\r
A0A3B8LUX1,,283,bacterial,nonUG\r
A0A3M1B7D4,,284,bacterial,nonUG\r
A0A2E9QPB3,,284,bacterial,nonUG\r
A0A2E8FF66,,285,bacterial,nonUG\r
A0A0G1XH55,retron,285,bacterial,nonUG\r
A0A0G1BMA6,retron,286,bacterial,nonUG\r
A0A1F5ECS9,retron,286,bacterial,nonUG\r
A0A2G9YW32,retron,287,bacterial,nonUG\r
A0A1G1XRC6,retron,287,bacterial,nonUG\r
A0A0G0XE80,retron,288,bacterial,nonUG\r
A0A1G1W8T9,retron,288,bacterial,nonUG\r
A0A1F5EC00,retron,289,bacterial,nonUG\r
A0A2G9YW18,retron,289,bacterial,nonUG\r
A0A1G2FIW9,retron,290,bacterial,nonUG\r
A0A3D2P996,retron,290,bacterial,nonUG\r
A0A2D9Y5Z3,retron,291,bacterial,nonUG\r
A0A0G0HAC7,retron,291,bacterial,nonUG\r
A0A3A4UT07,retron,292,bacterial,nonUG\r
A0A2H0R4M2,retron,292,bacterial,nonUG\r
A0A7C4EMN9,retron,293,bacterial,nonUG\r
A0A1F5EA23,retron,293,bacterial,nonUG\r
A0A1G2QXX7,retron,294,bacterial,nonUG\r
A0A521Z981,retron,294,bacterial,nonUG\r
A0A521Z9G4,retron,295,bacterial,nonUG\r
A0A2A4SFJ0,retron,295,bacterial,nonUG\r
A0A1G2V187,retron,296,bacterial,nonUG\r
A0A7C4M0A5,retron,296,bacterial,nonUG\r
A0A662FHD3,retron,297,bacterial,nonUG\r
A0A1F6D0X8,retron,297,bacterial,nonUG\r
A0A2A4T2K0,retron,298,bacterial,nonUG\r
A0A1G2C5I4,retron,298,bacterial,nonUG\r
A0A0G1LFI7,retron,299,bacterial,nonUG\r
A0A842UQP2,retron,299,bacterial,nonUG\r
A0A1M4SXX9,retron,300,bacterial,nonUG\r
A0A0H5Q2T7,retron,300,bacterial,nonUG\r
A0A1F5E8X8,retron,301,bacterial,nonUG\r
W1I8A2,retron,301,bacterial,nonUG\r
A0A0H5Q747,retron,302,bacterial,nonUG\r
A0A0G0AL44,retron,302,bacterial,nonUG\r
A0A523RAG7,retron,303,bacterial,nonUG\r
A0A1H3PXH4,retron,303,bacterial,nonUG\r
A0A1H4ENW9,retron,304,bacterial,nonUG\r
A0A483PCB8,retron,304,bacterial,nonUG\r
A0A1V1UJF8,retron,305,bacterial,nonUG\r
A0A651FJR2,retron,305,bacterial,nonUG\r
A0A239LZ48,retron,306,bacterial,nonUG\r
C6B8P7,retron,306,bacterial,nonUG\r
A0A124JXZ2,retron,307,bacterial,nonUG\r
A0A327M0Y7,retron,307,bacterial,nonUG\r
A0A1H5IQK5,retron,308,bacterial,nonUG\r
A0A563CWI9,retron,308,bacterial,nonUG\r
A0A225WYJ9,LTR/Retroviral/YR,309,eukaryote,nonUG\r
A0A225WUL0,LTR/Retroviral/YR,309,eukaryote,nonUG\r
A0A2P4WWE3,LTR/Retroviral/YR,310,eukaryote,nonUG\r
A0A6A3NXS5,LTR/Retroviral/YR,310,eukaryote,nonUG\r
A0A225VI46,LTR/Retroviral/YR,311,eukaryote,nonUG\r
A0A6G0W8E0,LTR/Retroviral/YR,311,eukaryote,nonUG\r
A0A225V859,LTR/Retroviral/YR,312,eukaryote,nonUG\r
A0A225WMZ5,LTR/Retroviral/YR,312,eukaryote,nonUG\r
A0A225VA50,LTR/Retroviral/YR,313,eukaryote,nonUG\r
A0A2T7NKB6,LTR/Retroviral/YR,313,eukaryote,nonUG\r
A0A4C1U0C2,LTR/Retroviral/YR,314,eukaryote,nonUG\r
A0A3S3PGH2,LTR/Retroviral/YR,314,eukaryote,nonUG\r
J9L8N4,LTR/Retroviral/YR,315,eukaryote,nonUG\r
J9L3T6,LTR/Retroviral/YR,315,eukaryote,nonUG\r
A0A2S2NC39,LTR/Retroviral/YR,316,eukaryote,nonUG\r
A0A443Q864,LTR/Retroviral/YR,316,eukaryote,nonUG\r
A0A391NS33,LTR/Retroviral/YR,317,eukaryote,nonUG\r
A0A0J7K6D6,LTR/Retroviral/YR,317,eukaryote,nonUG\r
A0A182GXU0,LTR/Retroviral/YR,318,eukaryote,nonUG\r
A0A0J7KK73,LTR/Retroviral/YR,318,eukaryote,nonUG\r
X1XD76,LTR/Retroviral/YR,319,eukaryote,nonUG\r
A0A4Y2RFM8,LTR/Retroviral/YR,319,eukaryote,nonUG\r
A0A4Y2NDC1,LTR/Retroviral/YR,320,eukaryote,nonUG\r
A0A7R8UMS6,LTR/Retroviral/YR,320,eukaryote,nonUG\r
A0A034VPR8,LTR/Retroviral/YR,321,eukaryote,nonUG\r
A0A7G3AWI1,LTR/Retroviral/YR,321,eukaryote,nonUG\r
A0A7S0EBU3,LTR/Retroviral/YR,322,eukaryote,nonUG\r
A0A226DGM3,LTR/Retroviral/YR,322,eukaryote,nonUG\r
A0A016URH6,LTR/Retroviral/YR,323,eukaryote,nonUG\r
A0A0G4G2C5,LTR/Retroviral/YR,323,eukaryote,nonUG\r
A0A6H5KBF4,LTR/Retroviral/YR,324,eukaryote,nonUG\r
A0A6H5JGV3,LTR/Retroviral/YR,324,eukaryote,nonUG\r
A0A4Y2DNX6,LTR/Retroviral/YR,325,eukaryote,nonUG\r
A0A147BPF4,LTR/Retroviral/YR,325,eukaryote,nonUG\r
A0A4V6ALN6,LTR/Retroviral/YR,326,eukaryote,nonUG\r
A0A151NX15,LTR/Retroviral/YR,326,eukaryote,nonUG\r
A0A2G8LCY1,LTR/Retroviral/YR,327,eukaryote,nonUG\r
A0A6A7FWV7,LTR/Retroviral/YR,327,eukaryote,nonUG\r
A0A267F757,LTR/Retroviral/YR,328,eukaryote,nonUG\r
A0A2T7NZ60,LTR/Retroviral/YR,328,eukaryote,nonUG\r
A0A131XKF8,LTR/Retroviral/YR,329,eukaryote,nonUG\r
A0A8B6CN90,LTR/Retroviral/YR,329,eukaryote,nonUG\r
A0A6J8DAL0,LTR/Retroviral/YR,330,eukaryote,nonUG\r
A0A432I2N3,LTR/Retroviral/YR,330,eukaryote,nonUG\r
A0A2G8LII3,LTR/Retroviral/YR,331,eukaryote,nonUG\r
A0A6A4SZI2,LTR/Retroviral/YR,331,eukaryote,nonUG\r
A0A2G8KAL9,LTR/Retroviral/YR,332,eukaryote,nonUG\r
A0A5C6NZC6,LTR/Retroviral/YR,332,eukaryote,nonUG\r
A0A4Y2VBM6,LTR/Retroviral/YR,333,eukaryote,nonUG\r
A0A023G4Q1,LTR/Retroviral/YR,333,eukaryote,nonUG\r
A0A0B7MVV3,LTR/Retroviral/YR,334,eukaryote,nonUG\r
A0A7S3XV63,LTR/Retroviral/YR,334,eukaryote,nonUG\r
A0A267F6R8,LTR/Retroviral/YR,335,eukaryote,nonUG\r
A0A0R0LUA6,LTR/Retroviral/YR,335,eukaryote,nonUG\r
A0A7J6P183,LTR/Retroviral/YR,336,eukaryote,nonUG\r
A0A150G980,LTR/Retroviral/YR,336,eukaryote,nonUG\r
A0A1D2M490,LTR/Retroviral/YR,337,eukaryote,nonUG\r
A0A226DRM8,LTR/Retroviral/YR,337,eukaryote,nonUG\r
A0A0N5BSS4,LTR/Retroviral/YR,338,eukaryote,nonUG\r
E3NIW8,LTR/Retroviral/YR,338,eukaryote,nonUG\r
A0A267EZL3,LTR/Retroviral/YR,339,eukaryote,nonUG\r
A0A023AXI1,LTR/Retroviral/YR,339,eukaryote,nonUG\r
A0A0A9VSG4,LTR/Retroviral/YR,340,eukaryote,nonUG\r
A0A2P2ID42,LTR/Retroviral/YR,340,eukaryote,nonUG\r
Q1KTA8,LTR/Retroviral/YR,341,eukaryote,nonUG\r
A0A6L2Q064,LTR/Retroviral/YR,341,eukaryote,nonUG\r
A0A224XDE0,LTR/Retroviral/YR,342,eukaryote,nonUG\r
A0A6J8D7V1,LTR/Retroviral/YR,342,eukaryote,nonUG\r
A0A6J8A1A1,LTR/Retroviral/YR,343,eukaryote,nonUG\r
A0A8B6BEJ5,LTR/Retroviral/YR,343,eukaryote,nonUG\r
A0A8B6CW70,LTR/Retroviral/YR,344,eukaryote,nonUG\r
A0A6J8DMY9,LTR/Retroviral/YR,344,eukaryote,nonUG\r
A0A2G8JE76,LTR/Retroviral/YR,345,eukaryote,nonUG\r
A0A5C6MH20,LTR/Retroviral/YR,345,eukaryote,nonUG\r
A0A0S7FIH7,LTR/Retroviral/YR,346,eukaryote,nonUG\r
A0A0B7BPE4,LTR/Retroviral/YR,346,eukaryote,nonUG\r
A0A2G8JPJ0,LTR/Retroviral/YR,347,eukaryote,nonUG\r
H3A8S3,LTR/Retroviral/YR,347,eukaryote,nonUG\r
A0A289ZXJ9,LTR/Retroviral/YR,348,eukaryote,nonUG\r
A0A498NY67,LTR/Retroviral/YR,348,eukaryote,nonUG\r
A0A6J8EDY3,LTR/Retroviral/YR,349,eukaryote,nonUG\r
A0A6J8BQZ0,LTR/Retroviral/YR,349,eukaryote,nonUG\r
A0A6J8AZU9,LTR/Retroviral/YR,350,eukaryote,nonUG\r
A0A2B4RFI4,LTR/Retroviral/YR,350,eukaryote,nonUG\r
A0A4Y1ZMP8,LTR/Retroviral/YR,351,eukaryote,nonUG\r
A0A661S391,LTR/Retroviral/YR,351,eukaryote,nonUG\r
A0A8B6BPT7,LTR/Retroviral/YR,352,eukaryote,nonUG\r
A0A6J8CRF2,LTR/Retroviral/YR,352,eukaryote,nonUG\r
A0A6J8EI40,LTR/Retroviral/YR,353,eukaryote,nonUG\r
A0A816N347,LTR/Retroviral/YR,353,eukaryote,nonUG\r
A0A267DJJ7,LTR/Retroviral/YR,354,eukaryote,nonUG\r
A0A6J8AEX2,LTR/Retroviral/YR,354,eukaryote,nonUG\r
A0A8B6BFK5,LTR/Retroviral/YR,355,eukaryote,nonUG\r
A0A654GHK7,LTR/Retroviral/YR,355,eukaryote,nonUG\r
A0A654I1U6,LTR/Retroviral/YR,356,eukaryote,nonUG\r
W6UC39,LTR/Retroviral/YR,356,eukaryote,nonUG\r
A0A7M3QFL6,LTR/Retroviral/YR,357,eukaryote,nonUG\r
A0A654I6T7,LTR/Retroviral/YR,357,eukaryote,nonUG\r
A0A564YRN0,LTR/Retroviral/YR,358,eukaryote,nonUG\r
A0A164DZJ6,LTR/Retroviral/YR,358,eukaryote,nonUG\r
A0A164Z278,LTR/Retroviral/YR,359,eukaryote,nonUG\r
A0A164NAB2,LTR/Retroviral/YR,359,eukaryote,nonUG\r
A0A0A9X4Z0,LTR/Retroviral/YR,360,eukaryote,nonUG\r
A0A4Y2C9E2,LTR/Retroviral/YR,360,eukaryote,nonUG\r
A0A0V1P4K7,LTR/Retroviral/YR,361,eukaryote,nonUG\r
A0A0V1MID2,LTR/Retroviral/YR,361,eukaryote,nonUG\r
A0A6P8FUJ4,LTR/Retroviral/YR,362,eukaryote,nonUG\r
A0A0V1E274,LTR/Retroviral/YR,362,eukaryote,nonUG\r
A0A815USW3,LTR/Retroviral/YR,363,eukaryote,nonUG\r
A0A818VFL3,LTR/Retroviral/YR,363,eukaryote,nonUG\r
A0A085LZE7,LTR/Retroviral/YR,364,eukaryote,nonUG\r
A0A164MPC5,LTR/Retroviral/YR,364,eukaryote,nonUG\r
A0A2P4XZG0,LTR/Retroviral/YR,365,eukaryote,nonUG\r
A0A164W9Q7,LTR/Retroviral/YR,365,eukaryote,nonUG\r
A0A023AWJ7,LTR/Retroviral/YR,366,eukaryote,nonUG\r
A0A164T5S3,LTR/Retroviral/YR,366,eukaryote,nonUG\r
A0A498LAW3,LTR/Retroviral/YR,367,eukaryote,nonUG\r
A0A498LW63,LTR/Retroviral/YR,367,eukaryote,nonUG\r
A0A815WKX3,LTR/Retroviral/YR,368,eukaryote,nonUG\r
A0A818RT05,LTR/Retroviral/YR,368,eukaryote,nonUG\r
H3B5T7,LTR/Retroviral/YR,369,eukaryote,nonUG\r
A0A814LMI9,LTR/Retroviral/YR,369,eukaryote,nonUG\r
A0A814HHR5,LTR/Retroviral/YR,370,eukaryote,nonUG\r
A0A6F9DK63,LTR/Retroviral/YR,370,eukaryote,nonUG\r
A0A0C2J5H9,LTR/Retroviral/YR,371,eukaryote,nonUG\r
A0A168PDK8,LTR/Retroviral/YR,371,eukaryote,nonUG\r
A0A814BB13,LTR/Retroviral/YR,372,eukaryote,nonUG\r
A0A0G4HXQ9,LTR/Retroviral/YR,372,eukaryote,nonUG\r
A0A0G4HR59,LTR/Retroviral/YR,373,eukaryote,nonUG\r
A0A024TPM7,LTR/Retroviral/YR,373,eukaryote,nonUG\r
A0A6A3JZ17,LTR/Retroviral/YR,374,eukaryote,nonUG\r
A0A226D5N4,LTR/Retroviral/YR,374,eukaryote,nonUG\r
A0A2H5TM40,LTR/Retroviral/YR,375,eukaryote,nonUG\r
A0A015IZV2,LTR/Retroviral/YR,375,eukaryote,nonUG\r
A0A7J6R1T0,LTR/Retroviral/YR,376,eukaryote,nonUG\r
A0A0V0VK44,LTR/Retroviral/YR,376,eukaryote,nonUG\r
A0A0C2IKL9,LTR/Retroviral/YR,377,eukaryote,nonUG\r
A0A816WS03,LTR/Retroviral/YR,377,eukaryote,nonUG\r
A0A818AGN6,LTR/Retroviral/YR,378,eukaryote,nonUG\r
A0A815FP41,LTR/Retroviral/YR,378,eukaryote,nonUG\r
A0A820D9V4,LTR/Retroviral/YR,379,eukaryote,nonUG\r
A0A816MPB8,LTR/Retroviral/YR,379,eukaryote,nonUG\r
A0A814V145,LTR/Retroviral/YR,380,eukaryote,nonUG\r
A0A819AC67,LTR/Retroviral/YR,380,eukaryote,nonUG\r
A0A815USC6,LTR/Retroviral/YR,381,eukaryote,nonUG\r
A0A2S2PQS7,LTR/Retroviral/YR,381,eukaryote,nonUG\r
A0A4Y2WDD0,LTR/Retroviral/YR,382,eukaryote,nonUG\r
A0A834VGD0,LTR/Retroviral/YR,382,eukaryote,nonUG\r
A0A158P5B0,LTR/Retroviral/YR,383,eukaryote,nonUG\r
A0A147BNG4,LTR/Retroviral/YR,383,eukaryote,nonUG\r
A0A1J5WXX6,LTR/Retroviral/YR,384,eukaryote,nonUG\r
A0A1J5WFE4,LTR/Retroviral/YR,384,eukaryote,nonUG\r
A0A0C2MPM1,LTR/Retroviral/YR,385,eukaryote,nonUG\r
A0A6L2K497,LTR/Retroviral/YR,385,eukaryote,nonUG\r
A0A6L2K7V1,LTR/Retroviral/YR,386,eukaryote,nonUG\r
A0A699GH96,LTR/Retroviral/YR,386,eukaryote,nonUG\r
A0A6L2K8B3,LTR/Retroviral/YR,387,eukaryote,nonUG\r
A0A5N6LCF0,LTR/Retroviral/YR,387,eukaryote,nonUG\r
A0A6L2KGI3,LTR/Retroviral/YR,388,eukaryote,nonUG\r
A0A699I066,LTR/Retroviral/YR,388,eukaryote,nonUG\r
A0A699IBA1,LTR/Retroviral/YR,389,eukaryote,nonUG\r
A0A371FMN1,LTR/Retroviral/YR,389,eukaryote,nonUG\r
A0A371FD49,LTR/Retroviral/YR,390,eukaryote,nonUG\r
A0A371E0Q0,LTR/Retroviral/YR,390,eukaryote,nonUG\r
A0A371GBS5,LTR/Retroviral/YR,391,eukaryote,nonUG\r
A0A371DYM8,LTR/Retroviral/YR,391,eukaryote,nonUG\r
G8DCW6,LTR/Retroviral/YR,392,eukaryote,nonUG\r
A0A540KRS7,LTR/Retroviral/YR,392,eukaryote,nonUG\r
A0A1U7X0K1,LTR/Retroviral/YR,393,eukaryote,nonUG\r
Q2R467,LTR/Retroviral/YR,393,eukaryote,nonUG\r
Q6UUT3,LTR/Retroviral/YR,394,eukaryote,nonUG\r
A0A453IQG8,LTR/Retroviral/YR,394,eukaryote,nonUG\r
A0A803PT16,LTR/Retroviral/YR,395,eukaryote,nonUG\r
A0A484NGE7,LTR/Retroviral/YR,395,eukaryote,nonUG\r
A0A2N9FE51,LTR/Retroviral/YR,396,eukaryote,nonUG\r
A0A2N9EFL0,LTR/Retroviral/YR,396,eukaryote,nonUG\r
A0A438HFT1,LTR/Retroviral/YR,397,eukaryote,nonUG\r
A0A438IY87,LTR/Retroviral/YR,397,eukaryote,nonUG\r
A0A2N9IU84,LTR/Retroviral/YR,398,eukaryote,nonUG\r
A0A2N9HMA4,LTR/Retroviral/YR,398,eukaryote,nonUG\r
A0A1S3C4J2,LTR/Retroviral/YR,399,eukaryote,nonUG\r
A0A2N9EXL2,LTR/Retroviral/YR,399,eukaryote,nonUG\r
A0A438EJ26,LTR/Retroviral/YR,400,eukaryote,nonUG\r
A5B6L5,LTR/Retroviral/YR,400,eukaryote,nonUG\r
A0A438G3S5,LTR/Retroviral/YR,401,eukaryote,nonUG\r
A0A2N9IGG3,LTR/Retroviral/YR,401,eukaryote,nonUG\r
A0A6L2MEX6,LTR/Retroviral/YR,402,eukaryote,nonUG\r
A0A6L2P328,LTR/Retroviral/YR,402,eukaryote,nonUG\r
A0A371G4L7,LTR/Retroviral/YR,403,eukaryote,nonUG\r
A0A1U8HKA3,LTR/Retroviral/YR,403,eukaryote,nonUG\r
A0A101M1T6,LTR/Retroviral/YR,404,eukaryote,nonUG\r
A0A833CZZ6,LTR/Retroviral/YR,404,eukaryote,nonUG\r
A0A1Z9ABV2,LTR/Retroviral/YR,405,eukaryote,nonUG\r
A0A1D1USV5,LTR/Retroviral/YR,405,eukaryote,nonUG\r
A0A7J6NWC9,LTR/Retroviral/YR,406,eukaryote,nonUG\r
A0A3S4Q7D3,LTR/Retroviral/YR,406,eukaryote,nonUG\r
A0A7E5WZ59,LTR/Retroviral/YR,407,eukaryote,nonUG\r
A0A811WXQ2,LTR/Retroviral/YR,407,eukaryote,nonUG\r
A0A0B7N4H6,LTR/Retroviral/YR,408,eukaryote,nonUG\r
A0A0C4EP09,LTR/Retroviral/YR,408,eukaryote,nonUG\r
A0A0B7FGV3,LTR/Retroviral/YR,409,eukaryote,nonUG\r
A0A177T6R8,LTR/Retroviral/YR,409,eukaryote,nonUG\r
A0A177TYE3,LTR/Retroviral/YR,410,eukaryote,nonUG\r
A0A0N7LBD9,LTR/Retroviral/YR,410,eukaryote,nonUG\r
A0A6B0VGX1,LTR/Retroviral/YR,411,eukaryote,nonUG\r
A0A226DC51,LTR/Retroviral/YR,411,eukaryote,nonUG\r
A0A443SHA5,LTR/Retroviral/YR,412,eukaryote,nonUG\r
A0A0V0RFN6,LTR/Retroviral/YR,412,eukaryote,nonUG\r
A0A7M3Q015,LTR/Retroviral/YR,413,eukaryote,nonUG\r
A0A7D9DU69,LTR/Retroviral/YR,413,eukaryote,nonUG\r
A0A2G8JGE0,LTR/Retroviral/YR,414,eukaryote,nonUG\r
A0A085MZC2,LTR/Retroviral/YR,414,eukaryote,nonUG\r
A0A2G8K7Z5,LTR/Retroviral/YR,415,eukaryote,nonUG\r
A0A2G8L3V0,LTR/Retroviral/YR,415,eukaryote,nonUG\r
V9H1C7,LTR/Retroviral/YR,416,eukaryote,nonUG\r
A0A5B7GS36,LTR/Retroviral/YR,416,eukaryote,nonUG\r
A0A4C1SM74,LTR/Retroviral/YR,417,eukaryote,nonUG\r
A0A1X0QHS8,LTR/Retroviral/YR,417,eukaryote,nonUG\r
A0A1C7N163,LTR/Retroviral/YR,418,eukaryote,nonUG\r
A0A0B7MP39,LTR/Retroviral/YR,418,eukaryote,nonUG\r
A0A0B7N123,LTR/Retroviral/YR,419,eukaryote,nonUG\r
A0A3S3RK21,LTR/Retroviral/YR,419,eukaryote,nonUG\r
A0A1R1XB37,LTR/Retroviral/YR,420,eukaryote,nonUG\r
A0A2H8TVD7,LTR/Retroviral/YR,420,eukaryote,nonUG\r
A0A418RIY2,LTR/Retroviral/YR,421,eukaryote,nonUG\r
A0A1D2M200,LTR/Retroviral/YR,421,eukaryote,nonUG\r
A0A3S3RGN5,LTR/Retroviral/YR,422,eukaryote,nonUG\r
A0A3S3PEZ9,LTR/Retroviral/YR,422,eukaryote,nonUG\r
A0A443QG42,LTR/Retroviral/YR,423,eukaryote,nonUG\r
A0A6J8DQS1,LTR/Retroviral/YR,423,eukaryote,nonUG\r
A0A2K1J2I2,LTR/Retroviral/YR,424,eukaryote,nonUG\r
A0A1A8E5U0,LTR/Retroviral/YR,424,eukaryote,nonUG\r
A0A0V1GXQ3,LTR/Retroviral/YR,425,eukaryote,nonUG\r
A0A0V1APF3,LTR/Retroviral/YR,425,eukaryote,nonUG\r
A0A177B588,LTR/Retroviral/YR,426,eukaryote,nonUG\r
A0A672I7P2,LTR/Retroviral/YR,426,eukaryote,nonUG\r
A0A8B6HI41,LTR/Retroviral/YR,427,eukaryote,nonUG\r
A0A4U5TVX9,LTR/Retroviral/YR,427,eukaryote,nonUG\r
A0A0R0LU25,LTR/Retroviral/YR,428,eukaryote,nonUG\r
A0A0C2IFQ4,LTR/Retroviral/YR,428,eukaryote,nonUG\r
A0A813QAU7,LTR/Retroviral/YR,429,eukaryote,nonUG\r
A0A814C6H1,LTR/Retroviral/YR,429,eukaryote,nonUG\r
A0A2H5TQ31,LTR/Retroviral/YR,430,eukaryote,nonUG\r
A0A2G8RWR9,LTR/Retroviral/YR,430,eukaryote,nonUG\r
A0A0W0ETX5,LTR/Retroviral/YR,431,eukaryote,nonUG\r
A0A4S4LNN7,LTR/Retroviral/YR,431,eukaryote,nonUG\r
A0A5K1JYZ7,LTR/Retroviral/YR,432,eukaryote,nonUG\r
A0A060SB49,LTR/Retroviral/YR,432,eukaryote,nonUG\r
A0A0C2ZFL1,LTR/Retroviral/YR,433,eukaryote,nonUG\r
A0A0C9YIL0,LTR/Retroviral/YR,433,eukaryote,nonUG\r
A0A0C3A3L0,LTR/Retroviral/YR,434,eukaryote,nonUG\r
M5CEF6,LTR/Retroviral/YR,434,eukaryote,nonUG\r
A0A0B7F8E0,LTR/Retroviral/YR,435,eukaryote,nonUG\r
A0A507CVN4,LTR/Retroviral/YR,435,eukaryote,nonUG\r
A0A507BZP3,LTR/Retroviral/YR,436,eukaryote,nonUG\r
A0A5M6BN98,LTR/Retroviral/YR,436,eukaryote,nonUG\r
A0A395IIE8,LTR/Retroviral/YR,437,eukaryote,nonUG\r
A0A0D2X5S0,LTR/Retroviral/YR,437,eukaryote,nonUG\r
A0A819AQM3,LTR/Retroviral/YR,438,eukaryote,nonUG\r
A0A821WEJ2,LTR/Retroviral/YR,438,eukaryote,nonUG\r
A0A1S3Q7Z3,LTR/Retroviral/YR,439,eukaryote,nonUG\r
A0A5C6N273,LTR/Retroviral/YR,439,eukaryote,nonUG\r
A0A1A8AUM2,LTR/Retroviral/YR,440,eukaryote,nonUG\r
A0A1S3PQB9,LTR/Retroviral/YR,440,eukaryote,nonUG\r
A0A402FVP2,LTR/Retroviral/YR,441,eukaryote,nonUG\r
A0A1K0GE26,LTR/Retroviral/YR,441,eukaryote,nonUG\r
A0A402F430,LTR/Retroviral/YR,442,eukaryote,nonUG\r
B8MA69,LTR/Retroviral/YR,442,eukaryote,nonUG\r
A6R121,LTR/Retroviral/YR,443,eukaryote,nonUG\r
A0A0C9M9F1,LTR/Retroviral/YR,443,eukaryote,nonUG\r
A0A0U5GF74,LTR/Retroviral/YR,444,eukaryote,nonUG\r
A0A1V8V4T0,LTR/Retroviral/YR,444,eukaryote,nonUG\r
F7VNV8,LTR/Retroviral/YR,445,eukaryote,nonUG\r
A0A4S4KXG6,LTR/Retroviral/YR,445,eukaryote,nonUG\r
A0A1W5D2R1,LTR/Retroviral/YR,446,eukaryote,nonUG\r
A0A161HH93,LTR/Retroviral/YR,446,eukaryote,nonUG\r
A7EP32,LTR/Retroviral/YR,447,eukaryote,nonUG\r
A0A670JY61,LTR/Retroviral/YR,447,eukaryote,nonUG\r
A0A2P6MNG3,LTR/Retroviral/YR,448,eukaryote,nonUG\r
A0A0L0W3B5,LTR/Retroviral/YR,448,eukaryote,nonUG\r
A0A167WTM2,LTR/Retroviral/YR,449,eukaryote,nonUG\r
A0A2N5SB08,LTR/Retroviral/YR,449,eukaryote,nonUG\r
A0A1W5CUK2,LTR/Retroviral/YR,450,eukaryote,nonUG\r
A0A167V6X7,LTR/Retroviral/YR,450,eukaryote,nonUG\r
A0A834RUR6,LTR/Retroviral/YR,451,eukaryote,nonUG\r
A0A834RZS7,LTR/Retroviral/YR,451,eukaryote,nonUG\r
A0A395IFE0,LTR/Retroviral/YR,452,eukaryote,nonUG\r
A0A2S4PNY4,LTR/Retroviral/YR,452,eukaryote,nonUG\r
A0A834RP73,LTR/Retroviral/YR,453,eukaryote,nonUG\r
A0A2S4PQT6,LTR/Retroviral/YR,453,eukaryote,nonUG\r
A0A1W5CTQ2,LTR/Retroviral/YR,454,eukaryote,nonUG\r
A0A094GMY0,LTR/Retroviral/YR,454,eukaryote,nonUG\r
A0A093UKN5,LTR/Retroviral/YR,455,eukaryote,nonUG\r
A0A4Q4PW73,LTR/Retroviral/YR,455,eukaryote,nonUG\r
A0A094ASK4,LTR/Retroviral/YR,456,eukaryote,nonUG\r
A0A250X4B0,LTR/Retroviral/YR,456,eukaryote,nonUG\r
A0A507DKC2,LTR/Retroviral/YR,457,eukaryote,nonUG\r
S7ZWC1,LTR/Retroviral/YR,457,eukaryote,nonUG\r
A0A7J6KQJ3,LTR/Retroviral/YR,458,eukaryote,nonUG\r
A0A0U1MBD9,LTR/Retroviral/YR,458,eukaryote,nonUG\r
A0A0M4M1S5,LTR/Retroviral/YR,459,eukaryote,nonUG\r
P0CT34,LTR/Retroviral/YR,459,eukaryote,nonUG\r
A0A520B4Y5,LTR/Retroviral/YR,460,eukaryote,nonUG\r
F2UDX5,LTR/Retroviral/YR,460,eukaryote,nonUG\r
A0A507FCJ7,LTR/Retroviral/YR,461,eukaryote,nonUG\r
A0A0C4F386,LTR/Retroviral/YR,461,eukaryote,nonUG\r
A0A6L2J3N0,LTR/Retroviral/YR,462,eukaryote,nonUG\r
A0A5D3BTR5,LTR/Retroviral/YR,462,eukaryote,nonUG\r
A0A3Q7ICQ4,LTR/Retroviral/YR,463,eukaryote,nonUG\r
A0A6L2NNM2,LTR/Retroviral/YR,463,eukaryote,nonUG\r
A0A699IMD1,LTR/Retroviral/YR,464,eukaryote,nonUG\r
A0A151SEJ8,LTR/Retroviral/YR,464,eukaryote,nonUG\r
A0A5N6NZ26,LTR/Retroviral/YR,465,eukaryote,nonUG\r
A0A6G1BUM0,LTR/Retroviral/YR,465,eukaryote,nonUG\r
Q2QUG5,LTR/Retroviral/YR,466,eukaryote,nonUG\r
Q9LJT2,LTR/Retroviral/YR,466,eukaryote,nonUG\r
A0A5N6NPC1,LTR/Retroviral/YR,467,eukaryote,nonUG\r
A0A1S3Y5Y7,LTR/Retroviral/YR,467,eukaryote,nonUG\r
A0A2N9FS73,LTR/Retroviral/YR,468,eukaryote,nonUG\r
A0A6L2MVN0,LTR/Retroviral/YR,468,eukaryote,nonUG\r
A0A6L2K1A8,LTR/Retroviral/YR,469,eukaryote,nonUG\r
A0A6L2LPV9,LTR/Retroviral/YR,469,eukaryote,nonUG\r
A0A3Q7I2D9,LTR/Retroviral/YR,470,eukaryote,nonUG\r
A0A6P6WZ90,LTR/Retroviral/YR,470,eukaryote,nonUG\r
A0A371I5J2,LTR/Retroviral/YR,471,eukaryote,nonUG\r
A0A371FJ21,LTR/Retroviral/YR,471,eukaryote,nonUG\r
A0A5A7UR86,LTR/Retroviral/YR,472,eukaryote,nonUG\r
A0A2N9EAX3,LTR/Retroviral/YR,472,eukaryote,nonUG\r
M5XPR8,LTR/Retroviral/YR,473,eukaryote,nonUG\r
A0A6D2JQY0,LTR/Retroviral/YR,473,eukaryote,nonUG\r
A0A6L2NF25,LTR/Retroviral/YR,474,eukaryote,nonUG\r
A0A833D477,LTR/Retroviral/YR,474,eukaryote,nonUG\r
U6JXZ7,LTR/Retroviral/YR,475,eukaryote,nonUG\r
A0A7S0MHT3,LTR/Retroviral/YR,475,eukaryote,nonUG\r
A0A6G0W9X5,LTR/Retroviral/YR,476,eukaryote,nonUG\r
A0A2P4X786,LTR/Retroviral/YR,476,eukaryote,nonUG\r
A0A7S0W802,LTR/Retroviral/YR,477,eukaryote,nonUG\r
D3BRX1,LTR/Retroviral/YR,477,eukaryote,nonUG\r
U6JXU7,LTR/Retroviral/YR,478,eukaryote,nonUG\r
A0A2P6V2K7,LTR/Retroviral/YR,478,eukaryote,nonUG\r
A0A0G4HAY4,LTR/Retroviral/YR,479,eukaryote,nonUG\r
A0A388KZ60,LTR/Retroviral/YR,479,eukaryote,nonUG\r
A0A388LDJ8,LTR/Retroviral/YR,480,eukaryote,nonUG\r
A0A388ME32,LTR/Retroviral/YR,480,eukaryote,nonUG\r
A0A388JSN1,LTR/Retroviral/YR,481,eukaryote,nonUG\r
A0A699IML3,LTR/Retroviral/YR,481,eukaryote,nonUG\r
A0A699IRS8,LTR/Retroviral/YR,482,eukaryote,nonUG\r
A0A6L2M311,LTR/Retroviral/YR,482,eukaryote,nonUG\r
A0A371HWH3,LTR/Retroviral/YR,483,eukaryote,nonUG\r
A0A5B6WG73,LTR/Retroviral/YR,483,eukaryote,nonUG\r
A0A5A7SNL7,LTR/Retroviral/YR,484,eukaryote,nonUG\r
A0A699GG89,LTR/Retroviral/YR,484,eukaryote,nonUG\r
A0A699JL91,LTR/Retroviral/YR,485,eukaryote,nonUG\r
A0A6L2NCQ5,LTR/Retroviral/YR,485,eukaryote,nonUG\r
A0A6L2MXT8,LTR/Retroviral/YR,486,eukaryote,nonUG\r
A0A6L2NR84,LTR/Retroviral/YR,486,eukaryote,nonUG\r
A0A371FT81,LTR/Retroviral/YR,487,eukaryote,nonUG\r
A0A2Z6NQM2,LTR/Retroviral/YR,487,eukaryote,nonUG\r
A0A3Q7EY30,LTR/Retroviral/YR,488,eukaryote,nonUG\r
A0A438IJ59,LTR/Retroviral/YR,488,eukaryote,nonUG\r
A0A061FBQ5,LTR/Retroviral/YR,489,eukaryote,nonUG\r
A0A438C705,LTR/Retroviral/YR,489,eukaryote,nonUG\r
A0A388M3U1,LTR/Retroviral/YR,490,eukaryote,nonUG\r
A0A388M5K3,LTR/Retroviral/YR,490,eukaryote,nonUG\r
A0A388JQB2,LTR/Retroviral/YR,491,eukaryote,nonUG\r
A0A1Z8JKL7,LTR/Retroviral/YR,491,eukaryote,nonUG\r
A0A099NW38,LTR/Retroviral/YR,492,eukaryote,nonUG\r
F4Q719,LTR/Retroviral/YR,492,eukaryote,nonUG\r
A0A2G5B133,LTR/Retroviral/YR,493,eukaryote,nonUG\r
A0A0B7NN30,LTR/Retroviral/YR,493,eukaryote,nonUG\r
A0A0B7MUY4,LTR/Retroviral/YR,494,eukaryote,nonUG\r
A0A0N7L9S9,LTR/Retroviral/YR,494,eukaryote,nonUG\r
A0A7S0G1E5,LTR/Retroviral/YR,495,eukaryote,nonUG\r
Q54AM7,LTR/Retroviral/YR,495,eukaryote,nonUG\r
A0A250WPX0,LTR/Retroviral/YR,496,eukaryote,nonUG\r
G0W7Q7,LTR/Retroviral/YR,496,eukaryote,nonUG\r
A0A814I834,LTR/Retroviral/YR,497,eukaryote,nonUG\r
A0A814RG40,LTR/Retroviral/YR,497,eukaryote,nonUG\r
A0A388JUZ9,LTR/Retroviral/YR,498,eukaryote,nonUG\r
A0A432RAE8,LTR/Retroviral/YR,498,eukaryote,nonUG\r
A0A146HY95,LTR/Retroviral/YR,499,eukaryote,nonUG\r
Q54AS8,LTR/Retroviral/YR,499,eukaryote,nonUG\r
A0A0R0LVS4,LTR/Retroviral/YR,500,eukaryote,nonUG\r
A0A1J5X524,LTR/Retroviral/YR,500,eukaryote,nonUG\r
Q15F60,LTR/Retroviral/YR,501,eukaryote,nonUG\r
A0A3R7PAU9,LTR/Retroviral/YR,501,eukaryote,nonUG\r
A0A6N6ZI89,LTR/Retroviral/YR,502,eukaryote,nonUG\r
A0A1Y1IKP5,LTR/Retroviral/YR,502,eukaryote,nonUG\r
A0A4C1SLP1,LTR/Retroviral/YR,503,eukaryote,nonUG\r
J9KFQ5,LTR/Retroviral/YR,503,eukaryote,nonUG\r
J9M772,LTR/Retroviral/YR,504,eukaryote,nonUG\r
A0A6H5HW71,LTR/Retroviral/YR,504,eukaryote,nonUG\r
A0A6H5J8C6,LTR/Retroviral/YR,505,eukaryote,nonUG\r
A0A811WPI5,LTR/Retroviral/YR,505,eukaryote,nonUG\r
A0A6H5FWK6,LTR/Retroviral/YR,506,eukaryote,nonUG\r
A0A1W7R6I0,LTR/Retroviral/YR,506,eukaryote,nonUG\r
A0A355BAI1,LTR/Retroviral/YR,507,eukaryote,nonUG\r
A0A4C1T9Z8,LTR/Retroviral/YR,507,eukaryote,nonUG\r
I1BMK8,LTR/Retroviral/YR,508,eukaryote,nonUG\r
A0A0B7NJ66,LTR/Retroviral/YR,508,eukaryote,nonUG\r
A0A1C7N279,LTR/Retroviral/YR,509,eukaryote,nonUG\r
A0A168PUD8,LTR/Retroviral/YR,509,eukaryote,nonUG\r
A0A6L4YBZ3,LTR/Retroviral/YR,510,eukaryote,nonUG\r
A0A4C1ZEQ7,LTR/Retroviral/YR,510,eukaryote,nonUG\r
A0A146KYH2,LTR/Retroviral/YR,511,eukaryote,nonUG\r
A0A821N8H0,LTR/Retroviral/YR,511,eukaryote,nonUG\r
A0A2S2QIS3,LTR/Retroviral/YR,512,eukaryote,nonUG\r
A0A423TXR2,LTR/Retroviral/YR,512,eukaryote,nonUG\r
A0A2G5VME8,LTR/Retroviral/YR,513,eukaryote,nonUG\r
K7GYC6,LTR/Retroviral/YR,513,eukaryote,nonUG\r
E3NT65,LTR/Retroviral/YR,514,eukaryote,nonUG\r
A0A6V7VZJ3,LTR/Retroviral/YR,514,eukaryote,nonUG\r
A0A183GEP7,LTR/Retroviral/YR,515,eukaryote,nonUG\r
A0A0B1S6V2,LTR/Retroviral/YR,515,eukaryote,nonUG\r
A0A0K0FQK3,LTR/Retroviral/YR,516,eukaryote,nonUG\r
A0A0N5B3W1,LTR/Retroviral/YR,516,eukaryote,nonUG\r
A0A418RMC7,LTR/Retroviral/YR,517,eukaryote,nonUG\r
A0A0N5C9L6,LTR/Retroviral/YR,517,eukaryote,nonUG\r
A0A0K0EP90,LTR/Retroviral/YR,518,eukaryote,nonUG\r
A0A3S3PEC7,LTR/Retroviral/YR,518,eukaryote,nonUG\r
A0A443SAP6,LTR/Retroviral/YR,519,eukaryote,nonUG\r
A0A7J6N4J0,LTR/Retroviral/YR,519,eukaryote,nonUG\r
A0A5J4YQC4,LTR/Retroviral/YR,520,eukaryote,nonUG\r
A0A7S4G350,LTR/Retroviral/YR,520,eukaryote,nonUG\r
A0A163LV02,LTR/Retroviral/YR,521,eukaryote,nonUG\r
A0A7D9ETA7,LTR/Retroviral/YR,521,eukaryote,nonUG\r
A0A1W7R6D0,LTR/Retroviral/YR,522,eukaryote,nonUG\r
A0A4Q3ER58,LTR/Retroviral/YR,522,eukaryote,nonUG\r
A0A6J2YVZ2,LTR/Retroviral/YR,523,eukaryote,nonUG\r
A0A3Q0JAQ4,LTR/Retroviral/YR,523,eukaryote,nonUG\r
A0A6H5GW79,LTR/Retroviral/YR,524,eukaryote,nonUG\r
A0A6H5IJA7,LTR/Retroviral/YR,524,eukaryote,nonUG\r
A0A6H5IQV0,LTR/Retroviral/YR,525,eukaryote,nonUG\r
A0A6V7LWY5,LTR/Retroviral/YR,525,eukaryote,nonUG\r
A0A6H5HVT5,LTR/Retroviral/YR,526,eukaryote,nonUG\r
Q9XZR7,LTR/Retroviral/YR,526,eukaryote,nonUG\r
A0A139WKX9,LTR/Retroviral/YR,527,eukaryote,nonUG\r
A0A6H5IL95,LTR/Retroviral/YR,527,eukaryote,nonUG\r
A0A7D9LQ69,LTR/Retroviral/YR,528,eukaryote,nonUG\r
A0A150FUT8,LTR/Retroviral/YR,528,eukaryote,nonUG\r
A0A250XTB7,LTR/Retroviral/YR,529,eukaryote,nonUG\r
A0A0D2KUF9,LTR/Retroviral/YR,529,eukaryote,nonUG\r
A0A1Y1HWG3,LTR/Retroviral/YR,530,eukaryote,nonUG\r
A0A2R6WJG7,LTR/Retroviral/YR,530,eukaryote,nonUG\r
A0A1Y1IIJ1,LTR/Retroviral/YR,531,eukaryote,nonUG\r
A0A1Y1IEV6,LTR/Retroviral/YR,531,eukaryote,nonUG\r
A0A6L5CGB3,LTR/Retroviral/YR,532,eukaryote,nonUG\r
X1WJ94,LTR/Retroviral/YR,532,eukaryote,nonUG\r
A0A6G0Y8U0,LTR/Retroviral/YR,533,eukaryote,nonUG\r
A0A2S2NBD6,LTR/Retroviral/YR,533,eukaryote,nonUG\r
A0A1B6DFS4,LTR/Retroviral/YR,534,eukaryote,nonUG\r
X1WWM7,LTR/Retroviral/YR,534,eukaryote,nonUG\r
A0A2S2NZ20,LTR/Retroviral/YR,535,eukaryote,nonUG\r
A0A1B6G9I6,LTR/Retroviral/YR,535,eukaryote,nonUG\r
A0A1Y1KY18,LTR/Retroviral/YR,536,eukaryote,nonUG\r
A0A6L5CKR1,LTR/Retroviral/YR,536,eukaryote,nonUG\r
A0A6V7JTR6,LTR/Retroviral/YR,537,eukaryote,nonUG\r
A0A0J7KIJ7,LTR/Retroviral/YR,537,eukaryote,nonUG\r
A0A2J7PRQ5,LTR/Retroviral/YR,538,eukaryote,nonUG\r
A0A146LDL4,LTR/Retroviral/YR,538,eukaryote,nonUG\r
A0A6H5HK59,LTR/Retroviral/YR,539,eukaryote,nonUG\r
A0A6H5HTR0,LTR/Retroviral/YR,539,eukaryote,nonUG\r
A0A0A9VWG3,LTR/Retroviral/YR,540,eukaryote,nonUG\r
A0A1Y1MEL5,LTR/Retroviral/YR,540,eukaryote,nonUG\r
A0A811W5D5,LTR/Retroviral/YR,541,eukaryote,nonUG\r
A0A267ENI1,LTR/Retroviral/YR,541,eukaryote,nonUG\r
A0A820JAW3,LTR/Retroviral/YR,542,eukaryote,nonUG\r
A0A816XKB9,LTR/Retroviral/YR,542,eukaryote,nonUG\r
A0A816ZLT1,LTR/Retroviral/YR,543,eukaryote,nonUG\r
A0A816XLC4,LTR/Retroviral/YR,543,eukaryote,nonUG\r
A0A7S3Y738,LTR/Retroviral/YR,544,eukaryote,nonUG\r
A0A816VV82,LTR/Retroviral/YR,544,eukaryote,nonUG\r
A0A2S2QEP6,LTR/Retroviral/YR,545,eukaryote,nonUG\r
A0A1B6EKA2,LTR/Retroviral/YR,545,eukaryote,nonUG\r
A0A0M4HYG5,LTR/Retroviral/YR,546,eukaryote,nonUG\r
A0A267DUG4,LTR/Retroviral/YR,546,eukaryote,nonUG\r
E4XRK5,LTR/Retroviral/YR,547,eukaryote,nonUG\r
E4XEH5,LTR/Retroviral/YR,547,eukaryote,nonUG\r
Q6GV78,LTR/Retroviral/YR,548,eukaryote,nonUG\r
E4XSX8,LTR/Retroviral/YR,548,eukaryote,nonUG\r
A0A2D5AIF1,LTR/Retroviral/YR,549,eukaryote,nonUG\r
A0A0P4VVD0,LTR/Retroviral/YR,549,eukaryote,nonUG\r
A0A423SYR3,LTR/Retroviral/YR,550,eukaryote,nonUG\r
A0A0R0M1S3,LTR/Retroviral/YR,550,eukaryote,nonUG\r
A0A0F9YLY5,LTR/Retroviral/YR,551,eukaryote,nonUG\r
Q15F63,LTR/Retroviral/YR,551,eukaryote,nonUG\r
A0A1Y1S7M2,LTR/Retroviral/YR,552,eukaryote,nonUG\r
A0A177ENS2,LTR/Retroviral/YR,552,eukaryote,nonUG\r
A0A177EN62,LTR/Retroviral/YR,553,eukaryote,nonUG\r
A0A0R0LU69,LTR/Retroviral/YR,553,eukaryote,nonUG\r
A0A834R8W7,LTR/Retroviral/YR,554,eukaryote,nonUG\r
A0A6P6YC49,LTR/Retroviral/YR,554,eukaryote,nonUG\r
A0A0N5BKG3,LTR/Retroviral/YR,555,eukaryote,nonUG\r
A0A1X0QI84,LTR/Retroviral/YR,555,eukaryote,nonUG\r
Q55HB6,LTR/Retroviral/YR,556,eukaryote,nonUG\r
A0A5D3AJL3,LTR/Retroviral/YR,556,eukaryote,nonUG\r
A0A238FAF8,LTR/Retroviral/YR,557,eukaryote,nonUG\r
A0A5E3XEM8,LTR/Retroviral/YR,557,eukaryote,nonUG\r
A0A401GJ94,LTR/Retroviral/YR,558,eukaryote,nonUG\r
A0A535F2L0,LTR/Retroviral/YR,558,eukaryote,nonUG\r
A0A060SQY4,LTR/Retroviral/YR,559,eukaryote,nonUG\r
A0A511KDF7,LTR/Retroviral/YR,559,eukaryote,nonUG\r
A0A2X0MCL4,LTR/Retroviral/YR,560,eukaryote,nonUG\r
A0A2X0NVJ4,LTR/Retroviral/YR,560,eukaryote,nonUG\r
A0A177TXR4,LTR/Retroviral/YR,561,eukaryote,nonUG\r
A0A485LN59,LTR/Retroviral/YR,561,eukaryote,nonUG\r
A0A151Z4Q0,LTR/Retroviral/YR,562,eukaryote,nonUG\r
A0A2P4XH08,LTR/Retroviral/YR,562,eukaryote,nonUG\r
W2QXL6,LTR/Retroviral/YR,563,eukaryote,nonUG\r
A0A225WQT5,LTR/Retroviral/YR,563,eukaryote,nonUG\r
A0A225VUG5,LTR/Retroviral/YR,564,eukaryote,nonUG\r
A0A2P4XFH7,LTR/Retroviral/YR,564,eukaryote,nonUG\r
A0A2P4YVI5,LTR/Retroviral/YR,565,eukaryote,nonUG\r
A0A6A3LEJ0,LTR/Retroviral/YR,565,eukaryote,nonUG\r
D3BRG8,LTR/Retroviral/YR,566,eukaryote,nonUG\r
O15725,LTR/Retroviral/YR,566,eukaryote,nonUG\r
A0A0D2UJJ6,LTR/Retroviral/YR,567,eukaryote,nonUG\r
A0A1W5CSX7,LTR/Retroviral/YR,567,eukaryote,nonUG\r
A0A139IFZ0,LTR/Retroviral/YR,568,eukaryote,nonUG\r
S3CBB0,LTR/Retroviral/YR,568,eukaryote,nonUG\r
A0A1L7XJP3,LTR/Retroviral/YR,569,eukaryote,nonUG\r
A0A162ISE9,LTR/Retroviral/YR,569,eukaryote,nonUG\r
U1GAA6,LTR/Retroviral/YR,570,eukaryote,nonUG\r
A0A537JEL8,LTR/Retroviral/YR,570,eukaryote,nonUG\r
L7N6E2,LTR/Retroviral/YR,571,eukaryote,nonUG\r
A6REX9,LTR/Retroviral/YR,571,eukaryote,nonUG\r
A0A7S1VFA6,LTR/Retroviral/YR,572,eukaryote,nonUG\r
A0A1R1X278,LTR/Retroviral/YR,572,eukaryote,nonUG\r
A0A226DPM3,LTR/Retroviral/YR,573,eukaryote,nonUG\r
A0A6H5J9N0,LTR/Retroviral/YR,573,eukaryote,nonUG\r
A0A6H5JT06,LTR/Retroviral/YR,574,eukaryote,nonUG\r
A0A6H5L269,LTR/Retroviral/YR,574,eukaryote,nonUG\r
A0A813ZJT1,LTR/Retroviral/YR,575,eukaryote,nonUG\r
A0A4C1UGD4,LTR/Retroviral/YR,575,eukaryote,nonUG\r
A0A6H5GEF8,LTR/Retroviral/YR,576,eukaryote,nonUG\r
A0A3R7MJ12,LTR/Retroviral/YR,576,eukaryote,nonUG\r
A0A293MAR4,LTR/Retroviral/YR,577,eukaryote,nonUG\r
A0A419QEA6,LTR/Retroviral/YR,577,eukaryote,nonUG\r
A0A564YNH4,LTR/Retroviral/YR,578,eukaryote,nonUG\r
A0A654HLI3,LTR/Retroviral/YR,578,eukaryote,nonUG\r
A0A5J4P3H1,LTR/Retroviral/YR,579,eukaryote,nonUG\r
A0A5J4NJF8,LTR/Retroviral/YR,579,eukaryote,nonUG\r
A0A6S7FXD4,LTR/Retroviral/YR,580,eukaryote,nonUG\r
A0A6H5IR03,LTR/Retroviral/YR,580,eukaryote,nonUG\r
A0A0C2MHN2,LTR/Retroviral/YR,581,eukaryote,nonUG\r
A0A5S6QYL9,LTR/Retroviral/YR,581,eukaryote,nonUG\r
A0A085N4A7,LTR/Retroviral/YR,582,eukaryote,nonUG\r
A0A4Y2SAF8,LTR/Retroviral/YR,582,eukaryote,nonUG\r
A0A085NN57,LTR/Retroviral/YR,583,eukaryote,nonUG\r
A0A4Y2W9R0,LTR/Retroviral/YR,583,eukaryote,nonUG\r
A0A4Y2FGZ2,LTR/Retroviral/YR,584,eukaryote,nonUG\r
A0A4C1WS67,LTR/Retroviral/YR,584,eukaryote,nonUG\r
A0A4Y2WRN0,LTR/Retroviral/YR,585,eukaryote,nonUG\r
H2XNC4,LTR/Retroviral/YR,585,eukaryote,nonUG\r
A0A7T8GZ29,LTR/Retroviral/YR,586,eukaryote,nonUG\r
A0A4Y2QPT6,LTR/Retroviral/YR,586,eukaryote,nonUG\r
A0A3R7QE47,LTR/Retroviral/YR,587,eukaryote,nonUG\r
A0A812BV46,LTR/Retroviral/YR,587,eukaryote,nonUG\r
A0A232EEI1,LTR/Retroviral/YR,588,eukaryote,nonUG\r
A0A6H5IHU5,LTR/Retroviral/YR,588,eukaryote,nonUG\r
A0A0A9YE74,LTR/Retroviral/YR,589,eukaryote,nonUG\r
A0A6H5GBN1,LTR/Retroviral/YR,589,eukaryote,nonUG\r
A0A7T8HLY0,LTR/Retroviral/YR,590,eukaryote,nonUG\r
A0A6S7LSI3,LTR/Retroviral/YR,590,eukaryote,nonUG\r
A0A1X0QKI8,LTR/Retroviral/YR,591,eukaryote,nonUG\r
A0A0R0M5T6,LTR/Retroviral/YR,591,eukaryote,nonUG\r
A0A0R0LUC3,LTR/Retroviral/YR,592,eukaryote,nonUG\r
A0A1X0Q897,LTR/Retroviral/YR,592,eukaryote,nonUG\r
A0A0R0M1J0,LTR/Retroviral/YR,593,eukaryote,nonUG\r
A0A0R0LZ68,LTR/Retroviral/YR,593,eukaryote,nonUG\r
A0A0R0LV59,LTR/Retroviral/YR,594,eukaryote,nonUG\r
A0A0R0M291,LTR/Retroviral/YR,594,eukaryote,nonUG\r
A0A1W0E2C1,LTR/Retroviral/YR,595,eukaryote,nonUG\r
A0A131XIW6,LTR/Retroviral/YR,595,eukaryote,nonUG\r
A0A443QDD2,LTR/Retroviral/YR,596,eukaryote,nonUG\r
A0A814IVU6,LTR/Retroviral/YR,596,eukaryote,nonUG\r
Q15F66,LTR/Retroviral/YR,597,eukaryote,nonUG\r
A0A1X0Q9P2,LTR/Retroviral/YR,597,eukaryote,nonUG\r
A0A5J4NGT9,LTR/Retroviral/YR,598,eukaryote,nonUG\r
A0A0B7MPK1,LTR/Retroviral/YR,598,eukaryote,nonUG\r
A0A0B7N9E3,LTR/Retroviral/YR,599,eukaryote,nonUG\r
A0A0B7MU93,LTR/Retroviral/YR,599,eukaryote,nonUG\r
A0A0C9N6C7,LTR/Retroviral/YR,600,eukaryote,nonUG\r
I1BHB9,LTR/Retroviral/YR,600,eukaryote,nonUG\r
A0A068SGQ1,LTR/Retroviral/YR,601,eukaryote,nonUG\r
A0A163MLY6,LTR/Retroviral/YR,601,eukaryote,nonUG\r
A0A6A3MPF2,LTR/Retroviral/YR,602,eukaryote,nonUG\r
A0A7S4HQ34,LTR/Retroviral/YR,602,eukaryote,nonUG\r
A0A1B7W7V1,LTR/Retroviral/YR,603,eukaryote,nonUG\r
A0A507FB23,LTR/Retroviral/YR,603,eukaryote,nonUG\r
A0A2P6MMT6,LTR/Retroviral/YR,604,eukaryote,nonUG\r
M3JU13,LTR/Retroviral/YR,604,eukaryote,nonUG\r
A0A1W0WLC4,LTR/Retroviral/YR,605,eukaryote,nonUG\r
A0A6S7G4K5,LTR/Retroviral/YR,605,eukaryote,nonUG\r
A0A087TDM0,LTR/Retroviral/YR,606,eukaryote,nonUG\r
A0A4Y2HL66,LTR/Retroviral/YR,606,eukaryote,nonUG\r
A0A177BCS4,LTR/Retroviral/YR,607,eukaryote,nonUG\r
A0A250X008,LTR/Retroviral/YR,607,eukaryote,nonUG\r
A0A670J3L3,LTR/Retroviral/YR,608,eukaryote,nonUG\r
X1XU39,LTR/Retroviral/YR,608,eukaryote,nonUG\r
A0A4Y2J279,LTR/Retroviral/YR,609,eukaryote,nonUG\r
A0A3Q7IGW3,LTR/Retroviral/YR,609,eukaryote,nonUG\r
A0A2B4R3A5,LTR/Retroviral/YR,610,eukaryote,nonUG\r
A0A3S0Z747,LTR/Retroviral/YR,610,eukaryote,nonUG\r
A0A2B4SI53,LTR/Retroviral/YR,611,eukaryote,nonUG\r
A0A6S7IPL4,LTR/Retroviral/YR,611,eukaryote,nonUG\r
A0A2B4SNC1,LTR/Retroviral/YR,612,eukaryote,nonUG\r
A0A6P7WAP3,LTR/Retroviral/YR,612,eukaryote,nonUG\r
A0A812CIB2,LTR/Retroviral/YR,613,eukaryote,nonUG\r
A0A7D9E5M6,LTR/Retroviral/YR,613,eukaryote,nonUG\r
A0A2B4R8T9,LTR/Retroviral/YR,614,eukaryote,nonUG\r
A0A2B4SIZ5,LTR/Retroviral/YR,614,eukaryote,nonUG\r
A0A2B4RZR4,LTR/Retroviral/YR,615,eukaryote,nonUG\r
A0A2B4RE50,LTR/Retroviral/YR,615,eukaryote,nonUG\r
A0A2B4RER9,LTR/Retroviral/YR,616,eukaryote,nonUG\r
A0A2B4SN41,LTR/Retroviral/YR,616,eukaryote,nonUG\r
A0A1W7R6G4,LTR/Retroviral/YR,617,eukaryote,nonUG\r
A0A2B4RGE6,LTR/Retroviral/YR,617,eukaryote,nonUG\r
A0A2B4SXF8,LTR/Retroviral/YR,618,eukaryote,nonUG\r
A0A6S7KPV5,LTR/Retroviral/YR,618,eukaryote,nonUG\r
A0A2B4RPF5,LTR/Retroviral/YR,619,eukaryote,nonUG\r
A0A2B4S4K4,LTR/Retroviral/YR,619,eukaryote,nonUG\r
A0A2B4RNI0,LTR/Retroviral/YR,620,eukaryote,nonUG\r
A0A3P9KLT8,LTR/Retroviral/YR,620,eukaryote,nonUG\r
A0A2B4RPL2,LTR/Retroviral/YR,621,eukaryote,nonUG\r
A0A2G8LEH2,LTR/Retroviral/YR,621,eukaryote,nonUG\r
A0A7D9E7T0,LTR/Retroviral/YR,622,eukaryote,nonUG\r
A0A2B4R5X5,LTR/Retroviral/YR,622,eukaryote,nonUG\r
A0A7D9KE98,LTR/Retroviral/YR,623,eukaryote,nonUG\r
A0A267G2J7,LTR/Retroviral/YR,623,eukaryote,nonUG\r
A0A669AVS4,LTR/Retroviral/YR,624,eukaryote,nonUG\r
A0A2B4R5P6,LTR/Retroviral/YR,624,eukaryote,nonUG\r
A0A2B4SMK4,LTR/Retroviral/YR,625,eukaryote,nonUG\r
A0A6S7H7I2,LTR/Retroviral/YR,625,eukaryote,nonUG\r
A0A6S7IIT9,LTR/Retroviral/YR,626,eukaryote,nonUG\r
A0A6S7JDY0,LTR/Retroviral/YR,626,eukaryote,nonUG\r
A0A2B4RL02,LTR/Retroviral/YR,627,eukaryote,nonUG\r
A0A6H5G7H2,LTR/Retroviral/YR,627,eukaryote,nonUG\r
A0A7J7K1P1,LTR/Retroviral/YR,628,eukaryote,nonUG\r
A0A1E1X2Y8,LTR/Retroviral/YR,628,eukaryote,nonUG\r
A0A0J7K756,LTR/Retroviral/YR,629,eukaryote,nonUG\r
A0A6J1PVV2,LTR/Retroviral/YR,629,eukaryote,nonUG\r
A0A4Y2D1Q3,LTR/Retroviral/YR,630,eukaryote,nonUG\r
A0A6J1P689,LTR/Retroviral/YR,630,eukaryote,nonUG\r
A0A4Y2JZR7,LTR/Retroviral/YR,631,eukaryote,nonUG\r
A0A162D3Z4,LTR/Retroviral/YR,631,eukaryote,nonUG\r
X1WQP2,LTR/Retroviral/YR,632,eukaryote,nonUG\r
X1WVQ6,LTR/Retroviral/YR,632,eukaryote,nonUG\r
A0A1Y1MJR5,LTR/Retroviral/YR,633,eukaryote,nonUG\r
A0A2B4RCN2,LTR/Retroviral/YR,633,eukaryote,nonUG\r
A0A4Y2E4U0,LTR/Retroviral/YR,634,eukaryote,nonUG\r
A0A7D9D9K5,LTR/Retroviral/YR,634,eukaryote,nonUG\r
A0A4Y2AK25,LTR/Retroviral/YR,635,eukaryote,nonUG\r
J9LZC2,LTR/Retroviral/YR,635,eukaryote,nonUG\r
A0A6G0VVQ0,LTR/Retroviral/YR,636,eukaryote,nonUG\r
A0A5N3ZZL8,LTR/Retroviral/YR,636,eukaryote,nonUG\r
A0A6J2X1D6,LTR/Retroviral/YR,637,eukaryote,nonUG\r
A0A2R7W3M1,LTR/Retroviral/YR,637,eukaryote,nonUG\r
A0A2B4S853,LTR/Retroviral/YR,638,eukaryote,nonUG\r
A0A6S7I5M0,LTR/Retroviral/YR,638,eukaryote,nonUG\r
A0A6S7HD15,LTR/Retroviral/YR,639,eukaryote,nonUG\r
A0A814J5P7,LTR/Retroviral/YR,639,eukaryote,nonUG\r
A0A814AJ56,LTR/Retroviral/YR,640,eukaryote,nonUG\r
A0A814HX30,LTR/Retroviral/YR,640,eukaryote,nonUG\r
A0A6S7KD24,LTR/Retroviral/YR,641,eukaryote,nonUG\r
A0A6S7J8Z9,LTR/Retroviral/YR,641,eukaryote,nonUG\r
A0A076VEX3,LTR/Retroviral/YR,642,eukaryote,nonUG\r
A0A6S7JX20,LTR/Retroviral/YR,642,eukaryote,nonUG\r
A0A6S7GCT6,LTR/Retroviral/YR,643,eukaryote,nonUG\r
A0A6S7LJ14,LTR/Retroviral/YR,643,eukaryote,nonUG\r
A0A3M7QZL4,LTR/Retroviral/YR,644,eukaryote,nonUG\r
A0A814JWN3,LTR/Retroviral/YR,644,eukaryote,nonUG\r
A0A3M7PEP4,LTR/Retroviral/YR,645,eukaryote,nonUG\r
A0A2B4RK21,LTR/Retroviral/YR,645,eukaryote,nonUG\r
A0A2B4R723,LTR/Retroviral/YR,646,eukaryote,nonUG\r
A0A2B4RSX3,LTR/Retroviral/YR,646,eukaryote,nonUG\r
A0A2B4R938,LTR/Retroviral/YR,647,eukaryote,nonUG\r
A0A6S7K004,LTR/Retroviral/YR,647,eukaryote,nonUG\r
A0A2B4SYL5,LTR/Retroviral/YR,648,eukaryote,nonUG\r
A0A267DNR8,LTR/Retroviral/YR,648,eukaryote,nonUG\r
A0A6S7G0E1,LTR/Retroviral/YR,649,eukaryote,nonUG\r
A0A6L5D3P2,LTR/Retroviral/YR,649,eukaryote,nonUG\r
A0A182GBY5,LTR/Retroviral/YR,650,eukaryote,nonUG\r
A0A0J7KFK7,LTR/Retroviral/YR,650,eukaryote,nonUG\r
A0A811W4T5,LTR/Retroviral/YR,651,eukaryote,nonUG\r
A0A2G8KJA9,LTR/Retroviral/YR,651,eukaryote,nonUG\r
A0A085N373,LTR/Retroviral/YR,652,eukaryote,nonUG\r
A0A267E3C5,LTR/Retroviral/YR,652,eukaryote,nonUG\r
A0A6A4SZF3,LTR/Retroviral/YR,653,eukaryote,nonUG\r
A0A182GWE7,LTR/Retroviral/YR,653,eukaryote,nonUG\r
A0A182G926,LTR/Retroviral/YR,654,eukaryote,nonUG\r
A0A2B4SCR3,LTR/Retroviral/YR,654,eukaryote,nonUG\r
A0A423T0B1,LTR/Retroviral/YR,655,eukaryote,nonUG\r
A0A3R7NQ00,LTR/Retroviral/YR,655,eukaryote,nonUG\r
A0A7T8GUD4,LTR/Retroviral/YR,656,eukaryote,nonUG\r
A0A6A4VT35,LTR/Retroviral/YR,656,eukaryote,nonUG\r
A0A164MRW6,LTR/Retroviral/YR,657,eukaryote,nonUG\r
A0A162PXQ8,LTR/Retroviral/YR,657,eukaryote,nonUG\r
A0A6H5H7Z7,LTR/Retroviral/YR,658,eukaryote,nonUG\r
A0A2A5ATR8,LTR/Retroviral/YR,658,eukaryote,nonUG\r
A0A7D9JU10,LTR/Retroviral/YR,659,eukaryote,nonUG\r
A0A2B4SKT1,LTR/Retroviral/YR,659,eukaryote,nonUG\r
A0A0P4W1I8,LTR/Retroviral/YR,660,eukaryote,nonUG\r
A0A267EWE3,LTR/Retroviral/YR,660,eukaryote,nonUG\r
A0A7D9LJY8,LTR/Retroviral/YR,661,eukaryote,nonUG\r
A0A5C7KSX0,LTR/Retroviral/YR,661,eukaryote,nonUG\r
A0A6P6LV72,LTR/Retroviral/YR,662,eukaryote,nonUG\r
A0A8B6H8N2,LTR/Retroviral/YR,662,eukaryote,nonUG\r
A0A0A9WW63,LTR/Retroviral/YR,663,eukaryote,nonUG\r
A0A498MNZ2,LTR/Retroviral/YR,663,eukaryote,nonUG\r
A0A2T7PE47,LTR/Retroviral/YR,664,eukaryote,nonUG\r
H3B501,LTR/Retroviral/YR,664,eukaryote,nonUG\r
H3AIK2,LTR/Retroviral/YR,665,eukaryote,nonUG\r
A0A7D9IFJ0,LTR/Retroviral/YR,665,eukaryote,nonUG\r
A0A7D9JNR4,LTR/Retroviral/YR,666,eukaryote,nonUG\r
A0A654H2F5,LTR/Retroviral/YR,666,eukaryote,nonUG\r
A0A3B3T0U0,LTR/Retroviral/YR,667,eukaryote,nonUG\r
A0A2B4R999,LTR/Retroviral/YR,667,eukaryote,nonUG\r
A0A1X7VLF9,LTR/Retroviral/YR,668,eukaryote,nonUG\r
A0A2G8JVU9,LTR/Retroviral/YR,668,eukaryote,nonUG\r
X1XU19,LTR/Retroviral/YR,669,eukaryote,nonUG\r
A0A6J0C928,LTR/Retroviral/YR,669,eukaryote,nonUG\r
A0A4C1ZRI4,LTR/Retroviral/YR,670,eukaryote,nonUG\r
A0A3R7CXH9,LTR/Retroviral/YR,670,eukaryote,nonUG\r
A0A0A9ZFT1,LTR/Retroviral/YR,671,eukaryote,nonUG\r
A0A4D5RH54,LTR/Retroviral/YR,671,eukaryote,nonUG\r
A0A4C1X962,LTR/Retroviral/YR,672,eukaryote,nonUG\r
A0A811WNA1,LTR/Retroviral/YR,672,eukaryote,nonUG\r
A0A6F9DEH0,LTR/Retroviral/YR,673,eukaryote,nonUG\r
A0A2S4PJW8,LTR/Retroviral/YR,673,eukaryote,nonUG\r
A0A5S6Q9J0,LTR/Retroviral/YR,674,eukaryote,nonUG\r
A0A0C2MV35,LTR/Retroviral/YR,674,eukaryote,nonUG\r
A0A0V0ZGS7,LTR/Retroviral/YR,675,eukaryote,nonUG\r
A0A2A4JEX3,LTR/Retroviral/YR,675,eukaryote,nonUG\r
A0A6H5G7D0,LTR/Retroviral/YR,676,eukaryote,nonUG\r
A0A443R0C1,LTR/Retroviral/YR,676,eukaryote,nonUG\r
A0A0C2MSE0,LTR/Retroviral/YR,677,eukaryote,nonUG\r
A0A6S7HN31,LTR/Retroviral/YR,677,eukaryote,nonUG\r
A0A2B4SZ86,LTR/Retroviral/YR,678,eukaryote,nonUG\r
A0A2B4S417,LTR/Retroviral/YR,678,eukaryote,nonUG\r
A0A0C2IGS0,LTR/Retroviral/YR,679,eukaryote,nonUG\r
A0A2B4RXH4,LTR/Retroviral/YR,679,eukaryote,nonUG\r
A0A1Y1JZP1,LTR/Retroviral/YR,680,eukaryote,nonUG\r
A0A6H5I6T3,LTR/Retroviral/YR,680,eukaryote,nonUG\r
A0A0A9YFS8,LTR/Retroviral/YR,681,eukaryote,nonUG\r
A0A3Q0JLZ1,LTR/Retroviral/YR,681,eukaryote,nonUG\r
A0A2B4RBJ0,LTR/Retroviral/YR,682,eukaryote,nonUG\r
A0A2G8L8I3,LTR/Retroviral/YR,682,eukaryote,nonUG\r
A0A1Y1LDW7,LTR/Retroviral/YR,683,eukaryote,nonUG\r
A0A183BVP9,LTR/Retroviral/YR,683,eukaryote,nonUG\r
A0A4U8UL24,LTR/Retroviral/YR,684,eukaryote,nonUG\r
A0A821UPN2,LTR/Retroviral/YR,684,eukaryote,nonUG\r
A0A654GWB4,LTR/Retroviral/YR,685,eukaryote,nonUG\r
A0A5J4NN91,LTR/Retroviral/YR,685,eukaryote,nonUG\r
A0A0R3SB69,LTR/Retroviral/YR,686,eukaryote,nonUG\r
A0A564YQ24,LTR/Retroviral/YR,686,eukaryote,nonUG\r
A0A6A5DFC2,LTR/Retroviral/YR,687,eukaryote,nonUG\r
A0A5J4NQQ0,LTR/Retroviral/YR,687,eukaryote,nonUG\r
A0A0B1PJA2,LTR/Retroviral/YR,688,eukaryote,nonUG\r
A0A0D6L9V6,LTR/Retroviral/YR,688,eukaryote,nonUG\r
A0A2G9URV7,LTR/Retroviral/YR,689,eukaryote,nonUG\r
A0A0C2GU32,LTR/Retroviral/YR,689,eukaryote,nonUG\r
K7HJS8,LTR/Retroviral/YR,690,eukaryote,nonUG\r
E3NKK3,LTR/Retroviral/YR,690,eukaryote,nonUG\r
A0A1I8AYE2,LTR/Retroviral/YR,691,eukaryote,nonUG\r
A0A0J7K7Q6,LTR/Retroviral/YR,691,eukaryote,nonUG\r
A0A0V1JLE1,LTR/Retroviral/YR,692,eukaryote,nonUG\r
A0A1Y3EL04,LTR/Retroviral/YR,692,eukaryote,nonUG\r
A0A0N5BN48,LTR/Retroviral/YR,693,eukaryote,nonUG\r
A0A7T8JZ00,LTR/Retroviral/YR,693,eukaryote,nonUG\r
A0A0V0RVS7,LTR/Retroviral/YR,694,eukaryote,nonUG\r
A0A7J7KAR9,LTR/Retroviral/YR,694,eukaryote,nonUG\r
A0A815FWL1,LTR/Retroviral/YR,695,eukaryote,nonUG\r
A0A0C2J2W0,LTR/Retroviral/YR,695,eukaryote,nonUG\r
A0A5S6R6E2,LTR/Retroviral/YR,696,eukaryote,nonUG\r
A0A0J7K7W1,LTR/Retroviral/YR,696,eukaryote,nonUG\r
A0A6P7URU8,LTR/Retroviral/YR,697,eukaryote,nonUG\r
A0A6B0VGA0,LTR/Retroviral/YR,697,eukaryote,nonUG\r
A0A0P6IWY8,LTR/Retroviral/YR,698,eukaryote,nonUG\r
A0A6J1RRS8,LTR/Retroviral/YR,698,eukaryote,nonUG\r
A0A4Y2M6R3,LTR/Retroviral/YR,699,eukaryote,nonUG\r
A0A085MZ77,LTR/Retroviral/YR,699,eukaryote,nonUG\r
A0A6J1U9N4,LTR/Retroviral/YR,700,eukaryote,nonUG\r
A0A0V1I3C9,LTR/Retroviral/YR,700,eukaryote,nonUG\r
A0A6L5D7B4,LTR/Retroviral/YR,701,eukaryote,nonUG\r
A0A085ND74,LTR/Retroviral/YR,701,eukaryote,nonUG\r
A0A085MZ19,LTR/Retroviral/YR,702,eukaryote,nonUG\r
A0A0J7KFJ3,LTR/Retroviral/YR,702,eukaryote,nonUG\r
A0A7I0ZBW4,LTR/Retroviral/YR,703,eukaryote,nonUG\r
A0A349AXA4,LTR/Retroviral/YR,703,eukaryote,nonUG\r
A0A6J1T5A2,LTR/Retroviral/YR,704,eukaryote,nonUG\r
A0A182PBU3,LTR/Retroviral/YR,704,eukaryote,nonUG\r
A0A6J1RFH9,LTR/Retroviral/YR,705,eukaryote,nonUG\r
A0A0J7KJD4,LTR/Retroviral/YR,705,eukaryote,nonUG\r
A0A0J7KE65,LTR/Retroviral/YR,706,eukaryote,nonUG\r
A0A7F5R640,LTR/Retroviral/YR,706,eukaryote,nonUG\r
A0A4Y2ICK2,LTR/Retroviral/YR,707,eukaryote,nonUG\r
A0A6H5FYY5,LTR/Retroviral/YR,707,eukaryote,nonUG\r
A0A7M7Q5L8,LTR/Retroviral/YR,708,eukaryote,nonUG\r
A0A6H5IFA9,LTR/Retroviral/YR,708,eukaryote,nonUG\r
A0A0N0PC64,LTR/Retroviral/YR,709,eukaryote,nonUG\r
A0A0A9Z952,LTR/Retroviral/YR,709,eukaryote,nonUG\r
A0A4Y2AGE1,LTR/Retroviral/YR,710,eukaryote,nonUG\r
A0A0N5C173,LTR/Retroviral/YR,710,eukaryote,nonUG\r
A0A6J0C820,LTR/Retroviral/YR,711,eukaryote,nonUG\r
A0A6S7JX59,LTR/Retroviral/YR,711,eukaryote,nonUG\r
A0A267DRM8,LTR/Retroviral/YR,712,eukaryote,nonUG\r
A0A0K0FNY6,LTR/Retroviral/YR,712,eukaryote,nonUG\r
A0A498T1H9,LTR/Retroviral/YR,713,eukaryote,nonUG\r
A0A267DPS0,LTR/Retroviral/YR,713,eukaryote,nonUG\r
A0A0N5BY74,LTR/Retroviral/YR,714,eukaryote,nonUG\r
A0A267EVB3,LTR/Retroviral/YR,714,eukaryote,nonUG\r
A0A267E8T4,LTR/Retroviral/YR,715,eukaryote,nonUG\r
A0A183AGZ3,LTR/Retroviral/YR,715,eukaryote,nonUG\r
A0A074ZVH2,LTR/Retroviral/YR,716,eukaryote,nonUG\r
A0A267F178,LTR/Retroviral/YR,716,eukaryote,nonUG\r
A0A1R1XS20,LTR/Retroviral/YR,717,eukaryote,nonUG\r
A0A1R1YBT2,LTR/Retroviral/YR,717,eukaryote,nonUG\r
A0A507DTK6,LTR/Retroviral/YR,718,eukaryote,nonUG\r
A0A6J4VDF6,LTR/Retroviral/YR,718,eukaryote,nonUG\r
A0A388JN09,LTR/Retroviral/YR,719,eukaryote,nonUG\r
A0A388K947,LTR/Retroviral/YR,719,eukaryote,nonUG\r
A0A388M4P9,LTR/Retroviral/YR,720,eukaryote,nonUG\r
A0A284RMP4,LTR/Retroviral/YR,720,eukaryote,nonUG\r
A0A369KG48,LTR/Retroviral/YR,721,eukaryote,nonUG\r
A0A177T2T2,LTR/Retroviral/YR,721,eukaryote,nonUG\r
A0A0C4ENI0,LTR/Retroviral/YR,722,eukaryote,nonUG\r
A0A0D0ATX3,LTR/Retroviral/YR,722,eukaryote,nonUG\r
A0A5E3XEW1,LTR/Retroviral/YR,723,eukaryote,nonUG\r
K1WQ40,LTR/Retroviral/YR,723,eukaryote,nonUG\r
A0A4V1XRC0,LTR/Retroviral/YR,724,eukaryote,nonUG\r
A0A4Q4PW94,LTR/Retroviral/YR,724,eukaryote,nonUG\r
A0A642UWB1,LTR/Retroviral/YR,725,eukaryote,nonUG\r
A5E131,LTR/Retroviral/YR,725,eukaryote,nonUG\r
A0A182VIV1,LTR/Retroviral/YR,726,eukaryote,nonUG\r
A0A6H5JCK9,LTR/Retroviral/YR,726,eukaryote,nonUG\r
A0A0K0ERQ5,LTR/Retroviral/YR,727,eukaryote,nonUG\r
A0A090KVV6,LTR/Retroviral/YR,727,eukaryote,nonUG\r
A0A0K0FR94,LTR/Retroviral/YR,728,eukaryote,nonUG\r
A0A0N5B5L4,LTR/Retroviral/YR,728,eukaryote,nonUG\r
A0A7S0ZFC7,LTR/Retroviral/YR,729,eukaryote,nonUG\r
A0A5J4YJI8,LTR/Retroviral/YR,729,eukaryote,nonUG\r
A0A7M5XDE8,LTR/Retroviral/YR,730,eukaryote,nonUG\r
A0A0N5BRD6,LTR/Retroviral/YR,730,eukaryote,nonUG\r
A0A0N5BQJ0,LTR/Retroviral/YR,731,eukaryote,nonUG\r
A0A0N5C6J6,LTR/Retroviral/YR,731,eukaryote,nonUG\r
A0A023AX67,LTR/Retroviral/YR,732,eukaryote,nonUG\r
A0A0K0FQY8,LTR/Retroviral/YR,732,eukaryote,nonUG\r
A0A4V1T0I7,LTR/Retroviral/YR,733,eukaryote,nonUG\r
A0A1D8PC70,LTR/Retroviral/YR,733,eukaryote,nonUG\r
T0MCL9,LTR/Retroviral/YR,734,eukaryote,nonUG\r
A0A4Q9KVT9,LTR/Retroviral/YR,734,eukaryote,nonUG\r
A0A7D9D1J3,LTR/Retroviral/YR,735,eukaryote,nonUG\r
A0A4T0X6X9,LTR/Retroviral/YR,735,eukaryote,nonUG\r
B9W6M9,LTR/Retroviral/YR,736,eukaryote,nonUG\r
A0A1D8NEN3,LTR/Retroviral/YR,736,eukaryote,nonUG\r
D3B7X1,LTR/Retroviral/YR,737,eukaryote,nonUG\r
A0A0N5B321,LTR/Retroviral/YR,737,eukaryote,nonUG\r
A0A5K1CRJ0,LTR/Retroviral/YR,738,eukaryote,nonUG\r
A0A6L2L9E3,LTR/Retroviral/YR,738,eukaryote,nonUG\r
Q7XFN9,LTR/Retroviral/YR,739,eukaryote,nonUG\r
A0A2U1MFH9,LTR/Retroviral/YR,739,eukaryote,nonUG\r
A0A5B6WTV1,LTR/Retroviral/YR,740,eukaryote,nonUG\r
Q93YE2,LTR/Retroviral/YR,740,eukaryote,nonUG\r
A0A1S3DZH9,LTR/Retroviral/YR,741,eukaryote,nonUG\r
A0A151R3E4,LTR/Retroviral/YR,741,eukaryote,nonUG\r
A0A6L2L947,LTR/Retroviral/YR,742,eukaryote,nonUG\r
A0A443S6E4,LTR/Retroviral/YR,742,eukaryote,nonUG\r
A0A4D5RCA6,LTR/Retroviral/YR,743,eukaryote,nonUG\r
A0A2R5LCV1,LTR/Retroviral/YR,743,eukaryote,nonUG\r
A0A443S326,LTR/Retroviral/YR,744,eukaryote,nonUG\r
W4P2T7,LTR/Retroviral/YR,744,eukaryote,nonUG\r
M5CCK2,LTR/Retroviral/YR,745,eukaryote,nonUG\r
A0A7C8IHI1,LTR/Retroviral/YR,745,eukaryote,nonUG\r
A0A2S4PM14,LTR/Retroviral/YR,746,eukaryote,nonUG\r
A0A420H9B8,LTR/Retroviral/YR,746,eukaryote,nonUG\r
A0A0F8D8U4,LTR/Retroviral/YR,747,eukaryote,nonUG\r
A0A023AWZ7,LTR/Retroviral/YR,747,eukaryote,nonUG\r
A0A4D8Y5Q8,LTR/Retroviral/YR,748,eukaryote,nonUG\r
A0A7S3HIW8,LTR/Retroviral/YR,748,eukaryote,nonUG\r
A0A812STE2,LTR/Retroviral/YR,749,eukaryote,nonUG\r
A0A023AWS5,LTR/Retroviral/YR,749,eukaryote,nonUG\r
A0A023AXA5,LTR/Retroviral/YR,750,eukaryote,nonUG\r
A0A0K0FRL5,LTR/Retroviral/YR,750,eukaryote,nonUG\r
A0A0N5BQ76,LTR/Retroviral/YR,751,eukaryote,nonUG\r
A0A0N5BCJ0,LTR/Retroviral/YR,751,eukaryote,nonUG\r
A0A090MTF3,LTR/Retroviral/YR,752,eukaryote,nonUG\r
A0A4Q3NXH3,LTR/Retroviral/YR,752,eukaryote,nonUG\r
A0A023AX45,LTR/Retroviral/YR,753,eukaryote,nonUG\r
A0A166VNH7,LTR/Retroviral/YR,753,eukaryote,nonUG\r
A0A081A2M0,LTR/Retroviral/YR,754,eukaryote,nonUG\r
A0A225W722,LTR/Retroviral/YR,754,eukaryote,nonUG\r
A0A225VFN1,LTR/Retroviral/YR,755,eukaryote,nonUG\r
A0A225V8L2,LTR/Retroviral/YR,755,eukaryote,nonUG\r
A0A2P4YAX4,LTR/Retroviral/YR,756,eukaryote,nonUG\r
A0A2P4X9F3,LTR/Retroviral/YR,756,eukaryote,nonUG\r
A0A6A4DF14,LTR/Retroviral/YR,757,eukaryote,nonUG\r
A0A225WV86,LTR/Retroviral/YR,757,eukaryote,nonUG\r
A0A225WG09,LTR/Retroviral/YR,758,eukaryote,nonUG\r
A0A225UYH6,LTR/Retroviral/YR,758,eukaryote,nonUG\r
A0A2P4XNR0,LTR/Retroviral/YR,759,eukaryote,nonUG\r
A0A2P4XNQ9,LTR/Retroviral/YR,759,eukaryote,nonUG\r
A0A484DSB5,LTR/Retroviral/YR,760,eukaryote,nonUG\r
A0A485LD77,LTR/Retroviral/YR,760,eukaryote,nonUG\r
A0A6G0XS72,LTR/Retroviral/YR,761,eukaryote,nonUG\r
F0WXL3,LTR/Retroviral/YR,761,eukaryote,nonUG\r
A0A225W1J5,LTR/Retroviral/YR,762,eukaryote,nonUG\r
A0A6G0QB80,LTR/Retroviral/YR,762,eukaryote,nonUG\r
A0A225WUN9,LTR/Retroviral/YR,763,eukaryote,nonUG\r
A0A6A3KVD3,LTR/Retroviral/YR,763,eukaryote,nonUG\r
A0A0H5QZN7,LTR/Retroviral/YR,764,eukaryote,nonUG\r
A0A0G4J378,LTR/Retroviral/YR,764,eukaryote,nonUG\r
A0A3P3Y6I3,LTR/Retroviral/YR,765,eukaryote,nonUG\r
A0A1V9ZZZ0,LTR/Retroviral/YR,765,eukaryote,nonUG\r
W4GJ73,LTR/Retroviral/YR,766,eukaryote,nonUG\r
A0A6A4ZPW6,LTR/Retroviral/YR,766,eukaryote,nonUG\r
A0A6A3XSY5,LTR/Retroviral/YR,767,eukaryote,nonUG\r
F0W7B6,LTR/Retroviral/YR,767,eukaryote,nonUG\r
A0A6A4FJL8,LTR/Retroviral/YR,768,eukaryote,nonUG\r
A0A6A4Z9U0,LTR/Retroviral/YR,768,eukaryote,nonUG\r
A0A024UI62,LTR/Retroviral/YR,769,eukaryote,nonUG\r
A0A0G4J949,LTR/Retroviral/YR,769,eukaryote,nonUG\r
A0A2R5FEA8,LTR/Retroviral/YR,770,eukaryote,nonUG\r
A0A433CYQ6,LTR/Retroviral/YR,770,eukaryote,nonUG\r
A0A146H7L8,LTR/Retroviral/YR,771,eukaryote,nonUG\r
A0A1M2W468,LTR/Retroviral/YR,771,eukaryote,nonUG\r
A0A4S4LAC6,LTR/Retroviral/YR,772,eukaryote,nonUG\r
A0A0B7FSG7,LTR/Retroviral/YR,772,eukaryote,nonUG\r
A0A5N5QFT8,LTR/Retroviral/YR,773,eukaryote,nonUG\r
A0A0P1BP63,LTR/Retroviral/YR,773,eukaryote,nonUG\r
A0A061H7K7,LTR/Retroviral/YR,774,eukaryote,nonUG\r
A0A2X0KQD9,LTR/Retroviral/YR,774,eukaryote,nonUG\r
A0A1V1T5X9,LTR/Retroviral/YR,775,eukaryote,nonUG\r
A0A5M8PD32,LTR/Retroviral/YR,775,eukaryote,nonUG\r
A0A0J5SQT3,LTR/Retroviral/YR,776,eukaryote,nonUG\r
A0A4P7N0L4,LTR/Retroviral/YR,776,eukaryote,nonUG\r
A0A2S4PMJ3,LTR/Retroviral/YR,777,eukaryote,nonUG\r
A0A2H1H9G9,LTR/Retroviral/YR,777,eukaryote,nonUG\r
A0A813HDF3,LTR/Retroviral/YR,778,eukaryote,nonUG\r
A0A507DVN2,LTR/Retroviral/YR,778,eukaryote,nonUG\r
A0A7S3Z2T1,LTR/Retroviral/YR,779,eukaryote,nonUG\r
A0A3B4EGT2,LTR/Retroviral/YR,779,eukaryote,nonUG\r
A0A6P6IUV9,LTR/Retroviral/YR,780,eukaryote,nonUG\r
A0A3Q3M3X8,LTR/Retroviral/YR,780,eukaryote,nonUG\r
A0A3B4U985,LTR/Retroviral/YR,781,eukaryote,nonUG\r
F6SYS9,LTR/Retroviral/YR,781,eukaryote,nonUG\r
A0A5F8HEG2,LTR/Retroviral/YR,782,eukaryote,nonUG\r
A0A663E1S1,LTR/Retroviral/YR,782,eukaryote,nonUG\r
A0A3B3DLR5,LTR/Retroviral/YR,783,eukaryote,nonUG\r
A0A6P8UJC2,LTR/Retroviral/YR,783,eukaryote,nonUG\r
A0A3P8TXN9,LTR/Retroviral/YR,784,eukaryote,nonUG\r
A0A669EMB6,LTR/Retroviral/YR,784,eukaryote,nonUG\r
A0A3B3BQX6,LTR/Retroviral/YR,785,eukaryote,nonUG\r
A0A4W5MLS8,LTR/Retroviral/YR,785,eukaryote,nonUG\r
A0A5F4DGD1,LTR/Retroviral/YR,786,eukaryote,nonUG\r
A0A4W3GRR4,LTR/Retroviral/YR,786,eukaryote,nonUG\r
A0A3M0K8V8,LTR/Retroviral/YR,787,eukaryote,nonUG\r
A0A3M0JYT5,LTR/Retroviral/YR,787,eukaryote,nonUG\r
A0A3M0IRD0,LTR/Retroviral/YR,788,eukaryote,nonUG\r
A0A6P6HRC8,LTR/Retroviral/YR,788,eukaryote,nonUG\r
A0A670ZJT9,LTR/Retroviral/YR,789,eukaryote,nonUG\r
A0A3M0JWJ6,LTR/Retroviral/YR,789,eukaryote,nonUG\r
A0A3M0L903,LTR/Retroviral/YR,790,eukaryote,nonUG\r
A0A3P8QWF9,LTR/Retroviral/YR,790,eukaryote,nonUG\r
A0A672FP86,LTR/Retroviral/YR,791,eukaryote,nonUG\r
A0A3B4BME9,LTR/Retroviral/YR,791,eukaryote,nonUG\r
A0A7N9IGE9,LTR/Retroviral/YR,792,eukaryote,nonUG\r
A0A3Q2TRV0,LTR/Retroviral/YR,792,eukaryote,nonUG\r
A0A3M0JAG5,LTR/Retroviral/YR,793,eukaryote,nonUG\r
A0A663EFR6,LTR/Retroviral/YR,793,eukaryote,nonUG\r
M3Z4H7,LTR/Retroviral/YR,794,eukaryote,nonUG\r
A0A663MEJ6,LTR/Retroviral/YR,794,eukaryote,nonUG\r
A0A674GP21,LTR/Retroviral/YR,795,eukaryote,nonUG\r
A0A821RAN1,LTR/Retroviral/YR,795,eukaryote,nonUG\r
A0A674F7R7,LTR/Retroviral/YR,796,eukaryote,nonUG\r
A0A3B1II10,LTR/Retroviral/YR,796,eukaryote,nonUG\r
A0A803JEM1,LTR/Retroviral/YR,797,eukaryote,nonUG\r
A0A671L2H2,LTR/Retroviral/YR,797,eukaryote,nonUG\r
A0A3B5PU39,LTR/Retroviral/YR,798,eukaryote,nonUG\r
A0A498NI45,LTR/Retroviral/YR,798,eukaryote,nonUG\r
E4X2E3,LTR/Retroviral/YR,799,eukaryote,nonUG\r
E4X8D3,LTR/Retroviral/YR,799,eukaryote,nonUG\r
E4XIC2,LTR/Retroviral/YR,800,eukaryote,nonUG\r
A0A0B7NF65,LTR/Retroviral/YR,800,eukaryote,nonUG\r
A0A2G5B4Z4,LTR/Retroviral/YR,801,eukaryote,nonUG\r
A0A4Y2WYD6,LTR/Retroviral/YR,801,eukaryote,nonUG\r
A0A4Y1ZQ29,LTR/Retroviral/YR,802,eukaryote,nonUG\r
A0A822H2L7,LTR/Retroviral/YR,802,eukaryote,nonUG\r
A0A146HC19,LTR/Retroviral/YR,803,eukaryote,nonUG\r
A0A4S4KFI5,LTR/Retroviral/YR,803,eukaryote,nonUG\r
A0A067T5Q4,LTR/Retroviral/YR,804,eukaryote,nonUG\r
A0A094DQM4,LTR/Retroviral/YR,804,eukaryote,nonUG\r
A0A0C3GFW7,LTR/Retroviral/YR,805,eukaryote,nonUG\r
K5W0I5,LTR/Retroviral/YR,805,eukaryote,nonUG\r
A0A2R6NJS8,LTR/Retroviral/YR,806,eukaryote,nonUG\r
A0A4S4K5L2,LTR/Retroviral/YR,806,eukaryote,nonUG\r
A0A4S4LIF7,LTR/Retroviral/YR,807,eukaryote,nonUG\r
A0A0C3NU01,LTR/Retroviral/YR,807,eukaryote,nonUG\r
A0A1M2VBJ6,LTR/Retroviral/YR,808,eukaryote,nonUG\r
A0A4S4LR26,LTR/Retroviral/YR,808,eukaryote,nonUG\r
A0A4S4M556,LTR/Retroviral/YR,809,eukaryote,nonUG\r
A0A0C3NCP2,LTR/Retroviral/YR,809,eukaryote,nonUG\r
A0A284R0J7,LTR/Retroviral/YR,810,eukaryote,nonUG\r
A0A4Y9ZNB6,LTR/Retroviral/YR,810,eukaryote,nonUG\r
A0A1C7MSU6,LTR/Retroviral/YR,811,eukaryote,nonUG\r
A0A286UJG5,LTR/Retroviral/YR,811,eukaryote,nonUG\r
G4TS75,LTR/Retroviral/YR,812,eukaryote,nonUG\r
A0A369K9V4,LTR/Retroviral/YR,812,eukaryote,nonUG\r
K5WU74,LTR/Retroviral/YR,813,eukaryote,nonUG\r
A0A0C9Z7U5,LTR/Retroviral/YR,813,eukaryote,nonUG\r
A0A409WSZ3,LTR/Retroviral/YR,814,eukaryote,nonUG\r
A0A060S5X4,LTR/Retroviral/YR,814,eukaryote,nonUG\r
A0A5E3X9D7,LTR/Retroviral/YR,815,eukaryote,nonUG\r
A0A409WYF4,LTR/Retroviral/YR,815,eukaryote,nonUG\r
F2U251,LTR/Retroviral/YR,816,eukaryote,nonUG\r
A0A7S0MH90,LTR/Retroviral/YR,816,eukaryote,nonUG\r
A0A4S4LF50,LTR/Retroviral/YR,817,eukaryote,nonUG\r
A0A0G4J0Y5,LTR/Retroviral/YR,817,eukaryote,nonUG\r
A0A409WC63,LTR/Retroviral/YR,818,eukaryote,nonUG\r
A0A4Q2D5Y2,LTR/Retroviral/YR,818,eukaryote,nonUG\r
A0A4Q3L7G6,LTR/Retroviral/YR,819,eukaryote,nonUG\r
F2UGZ7,LTR/Retroviral/YR,819,eukaryote,nonUG\r
A0A6S7I6Q9,LTR/Retroviral/YR,820,eukaryote,nonUG\r
A0A6S7H7M4,LTR/Retroviral/YR,820,eukaryote,nonUG\r
A0A535F517,LTR/Retroviral/YR,821,eukaryote,nonUG\r
W7SZA5,LTR/Retroviral/YR,821,eukaryote,nonUG\r
A0A1F5L057,LTR/Retroviral/YR,822,eukaryote,nonUG\r
A0A1Z9QE82,LTR/Retroviral/YR,822,eukaryote,nonUG\r
A0A507BIQ2,LTR/Retroviral/YR,823,eukaryote,nonUG\r
A0A507C1N5,LTR/Retroviral/YR,823,eukaryote,nonUG\r
A0A507CUE0,LTR/Retroviral/YR,824,eukaryote,nonUG\r
A0A6G0WRV3,LTR/Retroviral/YR,824,eukaryote,nonUG\r
A0A225VLV4,LTR/Retroviral/YR,825,eukaryote,nonUG\r
A0A6A3L5X2,LTR/Retroviral/YR,825,eukaryote,nonUG\r
A0A6A3HS58,LTR/Retroviral/YR,826,eukaryote,nonUG\r
A0A6S7KKS5,LTR/Retroviral/YR,826,eukaryote,nonUG\r
L8GIM9,LTR/Retroviral/YR,827,eukaryote,nonUG\r
L8H7M5,LTR/Retroviral/YR,827,eukaryote,nonUG\r
A0A2P4XFT6,LTR/Retroviral/YR,828,eukaryote,nonUG\r
A0A2K1IY07,LTR/Retroviral/YR,828,eukaryote,nonUG\r
A0A0A9W1E1,LTR/Retroviral/YR,829,eukaryote,nonUG\r
A0A6H5FV69,LTR/Retroviral/YR,829,eukaryote,nonUG\r
A0A034VP70,LTR/Retroviral/YR,830,eukaryote,nonUG\r
A0A4Y2DBF7,LTR/Retroviral/YR,830,eukaryote,nonUG\r
A0A821W5Q2,LTR/Retroviral/YR,831,eukaryote,nonUG\r
A0A1Y3E9R1,LTR/Retroviral/YR,831,eukaryote,nonUG\r
A0A0V0ZUS1,LTR/Retroviral/YR,832,eukaryote,nonUG\r
A0A085N5F5,LTR/Retroviral/YR,832,eukaryote,nonUG\r
A0A0J7K1E5,LTR/Retroviral/YR,833,eukaryote,nonUG\r
A0A821U0H2,LTR/Retroviral/YR,833,eukaryote,nonUG\r
A0A5J4YKB1,LTR/Retroviral/YR,834,eukaryote,nonUG\r
A0A034VRL5,LTR/Retroviral/YR,834,eukaryote,nonUG\r
A0A060S241,LTR/Retroviral/YR,835,eukaryote,nonUG\r
A0A2G8SNB7,LTR/Retroviral/YR,835,eukaryote,nonUG\r
T1JFF8,LTR/Retroviral/YR,836,eukaryote,nonUG\r
A0A085N9K0,LTR/Retroviral/YR,836,eukaryote,nonUG\r
A0A5E8B0Q7,LTR/Retroviral/YR,837,eukaryote,nonUG\r
A0A5C3ERV5,LTR/Retroviral/YR,837,eukaryote,nonUG\r
A0A507DZK9,LTR/Retroviral/YR,838,eukaryote,nonUG\r
A0A507DTC0,LTR/Retroviral/YR,838,eukaryote,nonUG\r
R7QQY1,LTR/Retroviral/YR,839,eukaryote,nonUG\r
A0A6G0WGN3,LTR/Retroviral/YR,839,eukaryote,nonUG\r
A0A507DQS9,LTR/Retroviral/YR,840,eukaryote,nonUG\r
M5C545,LTR/Retroviral/YR,840,eukaryote,nonUG\r
A0A6G0WCN5,LTR/Retroviral/YR,841,eukaryote,nonUG\r
A0A699HWE3,LTR/Retroviral/YR,841,eukaryote,nonUG\r
A0A2I0KTQ4,LTR/Retroviral/YR,842,eukaryote,nonUG\r
A0A5A7VI97,LTR/Retroviral/YR,842,eukaryote,nonUG\r
A0A2N9ENZ7,LTR/Retroviral/YR,843,eukaryote,nonUG\r
A0A2N9EE71,LTR/Retroviral/YR,843,eukaryote,nonUG\r
A0A2N9HGQ5,LTR/Retroviral/YR,844,eukaryote,nonUG\r
A0A2N9G0N8,LTR/Retroviral/YR,844,eukaryote,nonUG\r
A0A438FV67,LTR/Retroviral/YR,845,eukaryote,nonUG\r
A0A699H2T0,LTR/Retroviral/YR,845,eukaryote,nonUG\r
A0A5N6NFK0,LTR/Retroviral/YR,846,eukaryote,nonUG\r
Q9XEC2,LTR/Retroviral/YR,846,eukaryote,nonUG\r
Q9SZY0,LTR/Retroviral/YR,847,eukaryote,nonUG\r
A0A438DJ20,LTR/Retroviral/YR,847,eukaryote,nonUG\r
Q2QW17,LTR/Retroviral/YR,848,eukaryote,nonUG\r
A0A699GU40,LTR/Retroviral/YR,848,eukaryote,nonUG\r
A0A438IVL6,LTR/Retroviral/YR,849,eukaryote,nonUG\r
A0A6A2Y4D7,LTR/Retroviral/YR,849,eukaryote,nonUG\r
A0A1R3JHG4,LTR/Retroviral/YR,850,eukaryote,nonUG\r
A0A176W9J0,LTR/Retroviral/YR,850,eukaryote,nonUG\r
A0A537R0H1,LTR/Retroviral/YR,851,eukaryote,nonUG\r
A0A075B0S6,LTR/Retroviral/YR,851,eukaryote,nonUG\r
A0A834L7M0,LTR/Retroviral/YR,852,eukaryote,nonUG\r
A0A085N3G0,LTR/Retroviral/YR,852,eukaryote,nonUG\r
A0A7S4DAV7,LTR/Retroviral/YR,853,eukaryote,nonUG\r
A0A5M8PMT3,LTR/Retroviral/YR,853,eukaryote,nonUG\r
A0A537J880,LTR/Retroviral/YR,854,eukaryote,nonUG\r
A0A1W5D5P9,LTR/Retroviral/YR,854,eukaryote,nonUG\r
K1WRP0,LTR/Retroviral/YR,855,eukaryote,nonUG\r
A0A2S4PTH3,LTR/Retroviral/YR,855,eukaryote,nonUG\r
A0A535F5I8,LTR/Retroviral/YR,856,eukaryote,nonUG\r
A0A6S6VS14,LTR/Retroviral/YR,856,eukaryote,nonUG\r
A0A3L6MPQ1,LTR/Retroviral/YR,857,eukaryote,nonUG\r
A0A0G2FAW9,LTR/Retroviral/YR,857,eukaryote,nonUG\r
A0A1V6WLQ0,LTR/Retroviral/YR,858,eukaryote,nonUG\r
A0A2S6BTL3,LTR/Retroviral/YR,858,eukaryote,nonUG\r
J4VU23,LTR/Retroviral/YR,859,eukaryote,nonUG\r
A0A093XZX1,LTR/Retroviral/YR,859,eukaryote,nonUG\r
K1XJ03,LTR/Retroviral/YR,860,eukaryote,nonUG\r
A0A420IH78,LTR/Retroviral/YR,860,eukaryote,nonUG\r
A0A3E2HD53,LTR/Retroviral/YR,861,eukaryote,nonUG\r
A0A3L6MZA3,LTR/Retroviral/YR,861,eukaryote,nonUG\r
A0A151GPX4,LTR/Retroviral/YR,862,eukaryote,nonUG\r
A0A4Q4WGA0,LTR/Retroviral/YR,862,eukaryote,nonUG\r
A0A7S2P942,LTR/Retroviral/YR,863,eukaryote,nonUG\r
A0A7S4AT86,LTR/Retroviral/YR,863,eukaryote,nonUG\r
A0A1Z5KHE7,LTR/Retroviral/YR,864,eukaryote,nonUG\r
A0A350JKC4,LTR/Retroviral/YR,864,eukaryote,nonUG\r
K9FAB9,LTR/Retroviral/YR,865,eukaryote,nonUG\r
A0A0F8DDM1,LTR/Retroviral/YR,865,eukaryote,nonUG\r
A0A1Y1ISS2,LTR/Retroviral/YR,866,eukaryote,nonUG\r
A0A250XND9,LTR/Retroviral/YR,866,eukaryote,nonUG\r
A0A150GKT1,LTR/Retroviral/YR,867,eukaryote,nonUG\r
A0A7R9YSA9,LTR/Retroviral/YR,867,eukaryote,nonUG\r
A0A7R9V9Z0,LTR/Retroviral/YR,868,eukaryote,nonUG\r
K2R444,LTR/Retroviral/YR,868,eukaryote,nonUG\r
A0A6S6V3U7,LTR/Retroviral/YR,869,eukaryote,nonUG\r
A0A395IJQ9,LTR/Retroviral/YR,869,eukaryote,nonUG\r
A0A1K0GD68,LTR/Retroviral/YR,870,eukaryote,nonUG\r
I2FLW1,LTR/Retroviral/YR,870,eukaryote,nonUG\r
I2G0T2,LTR/Retroviral/YR,871,eukaryote,nonUG\r
A0A087T1Z9,LTR/Retroviral/YR,871,eukaryote,nonUG\r
A0A6B0V9W6,LTR/Retroviral/YR,872,eukaryote,nonUG\r
A0A535S533,LTR/Retroviral/YR,872,eukaryote,nonUG\r
A0A2J7PX44,LTR/Retroviral/YR,873,eukaryote,nonUG\r
A0A2C5W0V4,LTR/Retroviral/YR,873,eukaryote,nonUG\r
A0A834S5H9,LTR/Retroviral/YR,874,eukaryote,nonUG\r
A0A1W5D8Y7,LTR/Retroviral/YR,874,eukaryote,nonUG\r
A0A1E3B2C5,LTR/Retroviral/YR,875,eukaryote,nonUG\r
A0A2V1AM68,LTR/Retroviral/YR,875,eukaryote,nonUG\r
U1GSH0,LTR/Retroviral/YR,876,eukaryote,nonUG\r
A0A0B4G5A2,LTR/Retroviral/YR,876,eukaryote,nonUG\r
A0A2N5VQK7,LTR/Retroviral/YR,877,eukaryote,nonUG\r
A0A2S4VN28,LTR/Retroviral/YR,877,eukaryote,nonUG\r
A0A2N5UH98,LTR/Retroviral/YR,878,eukaryote,nonUG\r
A0A0L6V7B7,LTR/Retroviral/YR,878,eukaryote,nonUG\r
A0A0C4EZI6,LTR/Retroviral/YR,879,eukaryote,nonUG\r
A0A5B0M5T1,LTR/Retroviral/YR,879,eukaryote,nonUG\r
A0A7S4MPX6,LTR/Retroviral/YR,880,eukaryote,nonUG\r
A0A7S0MTK3,LTR/Retroviral/YR,880,eukaryote,nonUG\r
B7S988,LTR/Retroviral/YR,881,eukaryote,nonUG\r
F0WU01,LTR/Retroviral/YR,881,eukaryote,nonUG\r
A0A814GH42,LTR/Retroviral/YR,882,eukaryote,nonUG\r
A0A1Y1JUX7,LTR/Retroviral/YR,882,eukaryote,nonUG\r
A0A4C1T9G5,LTR/Retroviral/YR,883,eukaryote,nonUG\r
A0A1Y1JXC3,LTR/Retroviral/YR,883,eukaryote,nonUG\r
A0A1Y1NGN0,LTR/Retroviral/YR,884,eukaryote,nonUG\r
A0A1Y1N9F7,LTR/Retroviral/YR,884,eukaryote,nonUG\r
A0A182H4J9,LTR/Retroviral/YR,885,eukaryote,nonUG\r
A0A194PHT8,LTR/Retroviral/YR,885,eukaryote,nonUG\r
A0A182HBD9,LTR/Retroviral/YR,886,eukaryote,nonUG\r
A0A182G4A7,LTR/Retroviral/YR,886,eukaryote,nonUG\r
A0A485LF21,LTR/Retroviral/YR,887,eukaryote,nonUG\r
H3HA00,LTR/Retroviral/YR,887,eukaryote,nonUG\r
A0A6S7H8C9,LTR/Retroviral/YR,888,eukaryote,nonUG\r
A0A6A4IQU4,LTR/Retroviral/YR,888,eukaryote,nonUG\r
A0A6H5HDJ3,LTR/Retroviral/YR,889,eukaryote,nonUG\r
A0A0A9YMV4,LTR/Retroviral/YR,889,eukaryote,nonUG\r
A0A1Y1LVN7,LTR/Retroviral/YR,890,eukaryote,nonUG\r
A0A0V1G2I5,LTR/Retroviral/YR,890,eukaryote,nonUG\r
J9M2J6,LTR/Retroviral/YR,891,eukaryote,nonUG\r
A0A5S6QHL1,LTR/Retroviral/YR,891,eukaryote,nonUG\r
A0A0J7KE66,LTR/Retroviral/YR,892,eukaryote,nonUG\r
A0A4C1TMZ8,LTR/Retroviral/YR,892,eukaryote,nonUG\r
A0A0J7K4F5,LTR/Retroviral/YR,893,eukaryote,nonUG\r
A0A4Y2CAH6,LTR/Retroviral/YR,893,eukaryote,nonUG\r
A0A4Y2JF47,LTR/Retroviral/YR,894,eukaryote,nonUG\r
A0A4Y1ZNJ3,LTR/Retroviral/YR,894,eukaryote,nonUG\r
A0A6A3LA94,LTR/Retroviral/YR,895,eukaryote,nonUG\r
A0A0P1AME1,LTR/Retroviral/YR,895,eukaryote,nonUG\r
A0A6A3DPZ3,LTR/Retroviral/YR,896,eukaryote,nonUG\r
A0A1D2M4Z4,LTR/Retroviral/YR,896,eukaryote,nonUG\r
A0A0A2JZZ1,LTR/Retroviral/YR,897,eukaryote,nonUG\r
B2CN79,LTR/Retroviral/YR,897,eukaryote,nonUG\r
A0A512UJB7,LTR/Retroviral/YR,898,eukaryote,nonUG\r
C4Y0M3,LTR/Retroviral/YR,898,eukaryote,nonUG\r
G8BPQ9,LTR/Retroviral/YR,899,eukaryote,nonUG\r
A0A7H0KDV7,LTR/Retroviral/YR,899,eukaryote,nonUG\r
A0A1Y1JZX1,LTR/Retroviral/YR,900,eukaryote,nonUG\r
A0A5E8C4X9,LTR/Retroviral/YR,900,eukaryote,nonUG\r
A0A6A3J545,LTR/Retroviral/YR,901,eukaryote,nonUG\r
A0A225W3G9,LTR/Retroviral/YR,901,eukaryote,nonUG\r
A0A6A3I9X6,LTR/Retroviral/YR,902,eukaryote,nonUG\r
A0A6A3LJ39,LTR/Retroviral/YR,902,eukaryote,nonUG\r
A0A2N5SAV4,LTR/Retroviral/YR,903,eukaryote,nonUG\r
A0A2N9HIV2,LTR/Retroviral/YR,903,eukaryote,nonUG\r
A5B4F1,LTR/Retroviral/YR,904,eukaryote,nonUG\r
A0A2Z6LU54,LTR/Retroviral/YR,904,eukaryote,nonUG\r
A0A6N2LKM2,LTR/Retroviral/YR,905,eukaryote,nonUG\r
A0A803QAR3,LTR/Retroviral/YR,905,eukaryote,nonUG\r
A0A1S3ZHD0,LTR/Retroviral/YR,906,eukaryote,nonUG\r
Q9XIM3,LTR/Retroviral/YR,906,eukaryote,nonUG\r
A0A6A2ZW95,LTR/Retroviral/YR,907,eukaryote,nonUG\r
A0A2I0JDW6,LTR/Retroviral/YR,907,eukaryote,nonUG\r
A0A2I0J4P4,LTR/Retroviral/YR,908,eukaryote,nonUG\r
A0A2U1PIQ9,LTR/Retroviral/YR,908,eukaryote,nonUG\r
A0A699H8W7,LTR/Retroviral/YR,909,eukaryote,nonUG\r
A0A6L2L907,LTR/Retroviral/YR,909,eukaryote,nonUG\r
A0A699HC68,LTR/Retroviral/YR,910,eukaryote,nonUG\r
A0A1U8GZA5,LTR/Retroviral/YR,910,eukaryote,nonUG\r
A0A5A7T140,LTR/Retroviral/YR,911,eukaryote,nonUG\r
A0A699HIP1,LTR/Retroviral/YR,911,eukaryote,nonUG\r
S8CEL4,LTR/Retroviral/YR,912,eukaryote,nonUG\r
A0A1U8HCI3,LTR/Retroviral/YR,912,eukaryote,nonUG\r
A0A061EMD4,LTR/Retroviral/YR,913,eukaryote,nonUG\r
A0A061EYN0,LTR/Retroviral/YR,913,eukaryote,nonUG\r
A0A438DF57,LTR/Retroviral/YR,914,eukaryote,nonUG\r
A5AE14,LTR/Retroviral/YR,914,eukaryote,nonUG\r
A0A6D2JGW2,LTR/Retroviral/YR,915,eukaryote,nonUG\r
A0A6L2P0M3,LTR/Retroviral/YR,915,eukaryote,nonUG\r
A0A438EIX7,LTR/Retroviral/YR,916,eukaryote,nonUG\r
A0A2N9G848,LTR/Retroviral/YR,916,eukaryote,nonUG\r
A0A438E4W3,LTR/Retroviral/YR,917,eukaryote,nonUG\r
A0A5K0Z160,LTR/Retroviral/YR,917,eukaryote,nonUG\r
A0A7J7I0J8,LTR/Retroviral/YR,918,eukaryote,nonUG\r
A0A2N9FA34,LTR/Retroviral/YR,918,eukaryote,nonUG\r
A0A2N9I2F7,LTR/Retroviral/YR,919,eukaryote,nonUG\r
A0A2U1QJG8,LTR/Retroviral/YR,919,eukaryote,nonUG\r
A0A371HL05,LTR/Retroviral/YR,920,eukaryote,nonUG\r
A0A2N9EG31,LTR/Retroviral/YR,920,eukaryote,nonUG\r
A5BZC9,LTR/Retroviral/YR,921,eukaryote,nonUG\r
A0A5D3BLX8,LTR/Retroviral/YR,921,eukaryote,nonUG\r
A0A438GRC1,LTR/Retroviral/YR,922,eukaryote,nonUG\r
A0A2N9G3G0,LTR/Retroviral/YR,922,eukaryote,nonUG\r
A0A371G830,LTR/Retroviral/YR,923,eukaryote,nonUG\r
A0A438I379,LTR/Retroviral/YR,923,eukaryote,nonUG\r
A0A438DI22,LTR/Retroviral/YR,924,eukaryote,nonUG\r
A0A5K0ZNS5,LTR/Retroviral/YR,924,eukaryote,nonUG\r
A0A2N9GKK0,LTR/Retroviral/YR,925,eukaryote,nonUG\r
A0A822ZMY3,LTR/Retroviral/YR,925,eukaryote,nonUG\r
A0A5N6P1T0,LTR/Retroviral/YR,926,eukaryote,nonUG\r
A0A2I0JGJ1,LTR/Retroviral/YR,926,eukaryote,nonUG\r
A0A438CJZ5,LTR/Retroviral/YR,927,eukaryote,nonUG\r
A0A2N9H5T7,LTR/Retroviral/YR,927,eukaryote,nonUG\r
A0A2N9IMJ2,LTR/Retroviral/YR,928,eukaryote,nonUG\r
A0A2N9HLD4,LTR/Retroviral/YR,928,eukaryote,nonUG\r
A0A2G3C092,LTR/Retroviral/YR,929,eukaryote,nonUG\r
A0A6A2XNI2,LTR/Retroviral/YR,929,eukaryote,nonUG\r
A0A061E1S4,LTR/Retroviral/YR,930,eukaryote,nonUG\r
A0A2N9EEH5,LTR/Retroviral/YR,930,eukaryote,nonUG\r
A0A438JRT1,LTR/Retroviral/YR,931,eukaryote,nonUG\r
A0A5D3BEZ6,LTR/Retroviral/YR,931,eukaryote,nonUG\r
A0A2N9HJG0,LTR/Retroviral/YR,932,eukaryote,nonUG\r
A0A438INT8,LTR/Retroviral/YR,932,eukaryote,nonUG\r
A0A6A3C075,LTR/Retroviral/YR,933,eukaryote,nonUG\r
A0A6A3ADU5,LTR/Retroviral/YR,933,eukaryote,nonUG\r
A0A6A3A9T5,LTR/Retroviral/YR,934,eukaryote,nonUG\r
A0A6A3AZB0,LTR/Retroviral/YR,934,eukaryote,nonUG\r
A0A5B6V1L9,LTR/Retroviral/YR,935,eukaryote,nonUG\r
A0A1U8PKS3,LTR/Retroviral/YR,935,eukaryote,nonUG\r
A0A2Z6NP41,LTR/Retroviral/YR,936,eukaryote,nonUG\r
A0A445I3N8,LTR/Retroviral/YR,936,eukaryote,nonUG\r
A0A803P919,LTR/Retroviral/YR,937,eukaryote,nonUG\r
A0A803PU39,LTR/Retroviral/YR,937,eukaryote,nonUG\r
T2D0T6,LTR/Retroviral/YR,938,eukaryote,nonUG\r
A0A699GJ65,LTR/Retroviral/YR,938,eukaryote,nonUG\r
A0A6V7QDL0,LTR/Retroviral/YR,939,eukaryote,nonUG\r
A0A5N5I5B1,LTR/Retroviral/YR,939,eukaryote,nonUG\r
A0A2N9JAS4,LTR/Retroviral/YR,940,eukaryote,nonUG\r
A0A1R3FXR6,LTR/Retroviral/YR,940,eukaryote,nonUG\r
A0A699HVW4,LTR/Retroviral/YR,941,eukaryote,nonUG\r
A0A6D2L5A1,LTR/Retroviral/YR,941,eukaryote,nonUG\r
Q2R3M7,LTR/Retroviral/YR,942,eukaryote,nonUG\r
A0A0A9W6B0,LTR/Retroviral/YR,942,eukaryote,nonUG\r
A0A0A9XFP3,LTR/Retroviral/YR,943,eukaryote,nonUG\r
A0A6H5GLE4,LTR/Retroviral/YR,943,eukaryote,nonUG\r
A0A0A9YQI2,LTR/Retroviral/YR,944,eukaryote,nonUG\r
A0A0K0EMU9,LTR/Retroviral/YR,944,eukaryote,nonUG\r
A0A0N5BJE0,LTR/Retroviral/YR,945,eukaryote,nonUG\r
A0A0N5CBC5,LTR/Retroviral/YR,945,eukaryote,nonUG\r
A0A0K0FCE4,LTR/Retroviral/YR,946,eukaryote,nonUG\r
A0A6V7M123,LTR/Retroviral/YR,946,eukaryote,nonUG\r
A0A0A9XDZ4,LTR/Retroviral/YR,947,eukaryote,nonUG\r
J9LA40,LTR/Retroviral/YR,947,eukaryote,nonUG\r
A0A7S3Z780,LTR/Retroviral/YR,948,eukaryote,nonUG\r
A0A7I4BZ14,LTR/Retroviral/YR,948,eukaryote,nonUG\r
A0A2K1INW5,LTR/Retroviral/YR,949,eukaryote,nonUG\r
A0A2K1LB07,LTR/Retroviral/YR,949,eukaryote,nonUG\r
A0A225W1R0,LTR/Retroviral/YR,950,eukaryote,nonUG\r
A0A6A3NT90,LTR/Retroviral/YR,950,eukaryote,nonUG\r
A0A6A3J9W8,LTR/Retroviral/YR,951,eukaryote,nonUG\r
A0A225W3V2,LTR/Retroviral/YR,951,eukaryote,nonUG\r
A0A225UWZ8,LTR/Retroviral/YR,952,eukaryote,nonUG\r
A0A2P4X1D7,LTR/Retroviral/YR,952,eukaryote,nonUG\r
A0A0P1AJA7,LTR/Retroviral/YR,953,eukaryote,nonUG\r
A0A225VA09,LTR/Retroviral/YR,953,eukaryote,nonUG\r
A0A6A4F3Y5,LTR/Retroviral/YR,954,eukaryote,nonUG\r
A0A2P4XBD3,LTR/Retroviral/YR,954,eukaryote,nonUG\r
A0A7S0MSU5,LTR/Retroviral/YR,955,eukaryote,nonUG\r
A0A0M0K2N5,LTR/Retroviral/YR,955,eukaryote,nonUG\r
G7E3S6,LTR/Retroviral/YR,956,eukaryote,nonUG\r
A0A250XAJ6,LTR/Retroviral/YR,956,eukaryote,nonUG\r
A0A250XU73,LTR/Retroviral/YR,957,eukaryote,nonUG\r
A0A250WVE1,LTR/Retroviral/YR,957,eukaryote,nonUG\r
A0A4Y2Q857,LTR/Retroviral/YR,958,eukaryote,nonUG\r
A0A4Y2N430,LTR/Retroviral/YR,958,eukaryote,nonUG\r
A0A4Y2D7A5,LTR/Retroviral/YR,959,eukaryote,nonUG\r
A0A4Y2QH30,LTR/Retroviral/YR,959,eukaryote,nonUG\r
A0A511KEZ0,LTR/Retroviral/YR,960,eukaryote,nonUG\r
A0A834RC73,LTR/Retroviral/YR,960,eukaryote,nonUG\r
A0A0F7SV57,LTR/Retroviral/YR,961,eukaryote,nonUG\r
A0A2E9QKR8,LTR/Retroviral/YR,961,eukaryote,nonUG\r
I2H688,LTR/Retroviral/YR,962,eukaryote,nonUG\r
A0A1D8PLS1,LTR/Retroviral/YR,962,eukaryote,nonUG\r
A0A1D8PR73,LTR/Retroviral/YR,963,eukaryote,nonUG\r
A0A834R4X5,LTR/Retroviral/YR,963,eukaryote,nonUG\r
A0A4P6XIB5,LTR/Retroviral/YR,964,eukaryote,nonUG\r
A0A438HST1,LTR/Retroviral/YR,964,eukaryote,nonUG\r
A0A438G0Z4,LTR/Retroviral/YR,965,eukaryote,nonUG\r
A0A5B6WLL2,LTR/Retroviral/YR,965,eukaryote,nonUG\r
A0A438JI96,LTR/Retroviral/YR,966,eukaryote,nonUG\r
A0A5H2XMW7,LTR/Retroviral/YR,966,eukaryote,nonUG\r
A0A438IX92,LTR/Retroviral/YR,967,eukaryote,nonUG\r
A0A151S487,LTR/Retroviral/YR,967,eukaryote,nonUG\r
A0A5A7U4R4,LTR/Retroviral/YR,968,eukaryote,nonUG\r
Q9MAR7,LTR/Retroviral/YR,968,eukaryote,nonUG\r
A0A699H563,LTR/Retroviral/YR,969,eukaryote,nonUG\r
B9GC98,LTR/Retroviral/YR,969,eukaryote,nonUG\r
A0A2Z6NY36,LTR/Retroviral/YR,970,eukaryote,nonUG\r
A0A2Z6P5J6,LTR/Retroviral/YR,970,eukaryote,nonUG\r
A0A251VGU8,LTR/Retroviral/YR,971,eukaryote,nonUG\r
A0A2Z6PKM9,LTR/Retroviral/YR,971,eukaryote,nonUG\r
A0A6L2JPX3,LTR/Retroviral/YR,972,eukaryote,nonUG\r
A0A438I1P6,LTR/Retroviral/YR,972,eukaryote,nonUG\r
Q9LP05,LTR/Retroviral/YR,973,eukaryote,nonUG\r
A0A5D3C1P5,LTR/Retroviral/YR,973,eukaryote,nonUG\r
A0A6L2LIF4,LTR/Retroviral/YR,974,eukaryote,nonUG\r
A0A2N9EG92,LTR/Retroviral/YR,974,eukaryote,nonUG\r
A0A699GMK2,LTR/Retroviral/YR,975,eukaryote,nonUG\r
A0A6L2KA16,LTR/Retroviral/YR,975,eukaryote,nonUG\r
A0A6L2N8Q0,LTR/Retroviral/YR,976,eukaryote,nonUG\r
A0A6L2MC66,LTR/Retroviral/YR,976,eukaryote,nonUG\r
A0A6L2NA77,LTR/Retroviral/YR,977,eukaryote,nonUG\r
A0A6L2KCR0,LTR/Retroviral/YR,977,eukaryote,nonUG\r
A0A507D162,LTR/Retroviral/YR,978,eukaryote,nonUG\r
D5KY22,LTR/Retroviral/YR,978,eukaryote,nonUG\r
A0A482S374,LTR/Retroviral/YR,979,eukaryote,nonUG\r
A0A437A7N2,LTR/Retroviral/YR,979,eukaryote,nonUG\r
A0A0P1BFS2,LTR/Retroviral/YR,980,eukaryote,nonUG\r
A0A177U9M6,LTR/Retroviral/YR,980,eukaryote,nonUG\r
A0A0G4PWD0,LTR/Retroviral/YR,981,eukaryote,nonUG\r
A0A6H5JDG0,LTR/Retroviral/YR,981,eukaryote,nonUG\r
A0A6H5KL37,LTR/Retroviral/YR,982,eukaryote,nonUG\r
A0A177WTF1,LTR/Retroviral/YR,982,eukaryote,nonUG\r
A0A507DKG9,LTR/Retroviral/YR,983,eukaryote,nonUG\r
F0W3P3,LTR/Retroviral/YR,983,eukaryote,nonUG\r
F0WSF3,LTR/Retroviral/YR,984,eukaryote,nonUG\r
A0A6A3MX40,LTR/Retroviral/YR,984,eukaryote,nonUG\r
F0W8W0,LTR/Retroviral/YR,985,eukaryote,nonUG\r
A0A329SK86,LTR/Retroviral/YR,985,eukaryote,nonUG\r
A0A507DGU4,LTR/Retroviral/YR,986,eukaryote,nonUG\r
A0A507DC08,LTR/Retroviral/YR,986,eukaryote,nonUG\r
A0A507BSG4,LTR/Retroviral/YR,987,eukaryote,nonUG\r
A0A7S2ZD23,LTR/Retroviral/YR,987,eukaryote,nonUG\r
A0A2X0N209,LTR/Retroviral/YR,988,eukaryote,nonUG\r
A0A2X0M4D8,LTR/Retroviral/YR,988,eukaryote,nonUG\r
A0A2X0L097,LTR/Retroviral/YR,989,eukaryote,nonUG\r
A0A2X0P749,LTR/Retroviral/YR,989,eukaryote,nonUG\r
A0A7S0BLZ1,LTR/Retroviral/YR,990,eukaryote,nonUG\r
A0A5S6QJY9,LTR/Retroviral/YR,990,eukaryote,nonUG\r
A0A177U1H6,LTR/Retroviral/YR,991,eukaryote,nonUG\r
A0A177VLW9,LTR/Retroviral/YR,991,eukaryote,nonUG\r
A0A427Y2R1,LTR/Retroviral/YR,992,eukaryote,nonUG\r
A0A5D3AWJ7,LTR/Retroviral/YR,992,eukaryote,nonUG\r
A0A0P1BK82,LTR/Retroviral/YR,993,eukaryote,nonUG\r
A0A075B3L7,LTR/Retroviral/YR,993,eukaryote,nonUG\r
A0A177T395,LTR/Retroviral/YR,994,eukaryote,nonUG\r
I2FQB5,LTR/Retroviral/YR,994,eukaryote,nonUG\r
A0A481SHG6,LTR/Retroviral/YR,995,eukaryote,nonUG\r
A0A177V567,LTR/Retroviral/YR,995,eukaryote,nonUG\r
A0A177TY21,LTR/Retroviral/YR,996,eukaryote,nonUG\r
A0A177VF51,LTR/Retroviral/YR,996,eukaryote,nonUG\r
A0A286QJ36,LTR/Retroviral/YR,997,eukaryote,nonUG\r
A0A507BR27,LTR/Retroviral/YR,997,eukaryote,nonUG\r
A0A507CYQ3,LTR/Retroviral/YR,998,eukaryote,nonUG\r
A0A6A4ZIQ0,LTR/Retroviral/YR,998,eukaryote,nonUG\r
A0A4T0N9L3,LTR/Retroviral/YR,999,eukaryote,nonUG\r
A0A2D7MQY1,LTR/Retroviral/YR,999,eukaryote,nonUG\r
A0A2E1LL39,LTR/Retroviral/YR,1000,eukaryote,nonUG\r
A8U3S6,LTR/Retroviral/YR,1000,eukaryote,nonUG\r
A0A0F4GH69,LTR/Retroviral/YR,1001,eukaryote,nonUG\r
A0A7S3FKM4,LTR/Retroviral/YR,1001,eukaryote,nonUG\r
A0A2H2J2C1,LTR/Retroviral/YR,1002,eukaryote,nonUG\r
A0A0F8BLC2,LTR/Retroviral/YR,1002,eukaryote,nonUG\r
A0A225VVC4,LTR/Retroviral/YR,1003,eukaryote,nonUG\r
A0A6A3N2N0,LTR/Retroviral/YR,1003,eukaryote,nonUG\r
A0A075AQ97,LTR/Retroviral/YR,1004,eukaryote,nonUG\r
A0A6A4Z1V0,LTR/Retroviral/YR,1004,eukaryote,nonUG\r
A0A2D4PTW8,LTR/Retroviral/YR,1005,eukaryote,nonUG\r
A0A2D4IVV2,LTR/Retroviral/YR,1005,eukaryote,nonUG\r
A0A6H5L4B2,LTR/Retroviral/YR,1006,eukaryote,nonUG\r
A0A6H5KL18,LTR/Retroviral/YR,1006,eukaryote,nonUG\r
A0A6H5JAZ5,LTR/Retroviral/YR,1007,eukaryote,nonUG\r
A0A6H5J594,LTR/Retroviral/YR,1007,eukaryote,nonUG\r
A0A6H5JBN2,LTR/Retroviral/YR,1008,eukaryote,nonUG\r
A0A0P7B6H7,LTR/Retroviral/YR,1008,eukaryote,nonUG\r
A0A535F675,LTR/Retroviral/YR,1009,eukaryote,nonUG\r
A0A225UZ82,LTR/Retroviral/YR,1009,eukaryote,nonUG\r
A0A2N5ULS5,LTR/Retroviral/YR,1010,eukaryote,nonUG\r
A0A0C4ER73,LTR/Retroviral/YR,1010,eukaryote,nonUG\r
A0A2N5SXJ7,LTR/Retroviral/YR,1011,eukaryote,nonUG\r
A0A0C4ENF5,LTR/Retroviral/YR,1011,eukaryote,nonUG\r
A0A0C4EPV3,LTR/Retroviral/YR,1012,eukaryote,nonUG\r
A0A7S4D8N3,LTR/Retroviral/YR,1012,eukaryote,nonUG\r
A0A0M0JDM7,LTR/Retroviral/YR,1013,eukaryote,nonUG\r
A0A5E3XBS5,LTR/Retroviral/YR,1013,eukaryote,nonUG\r
A0A090N4T0,LTR/Retroviral/YR,1014,eukaryote,nonUG\r
A0A7S0KCV4,LTR/Retroviral/YR,1014,eukaryote,nonUG\r
A0A2X0KNA2,LTR/Retroviral/YR,1015,eukaryote,nonUG\r
A0A2X0MP13,LTR/Retroviral/YR,1015,eukaryote,nonUG\r
A0A2X0MNY2,LTR/Retroviral/YR,1016,eukaryote,nonUG\r
A0A0G4IJ16,LTR/Retroviral/YR,1016,eukaryote,nonUG\r
A0A2X0N0G9,LTR/Retroviral/YR,1017,eukaryote,nonUG\r
A0A2X0LWI2,LTR/Retroviral/YR,1017,eukaryote,nonUG\r
A0A7S0YWC4,LTR/Retroviral/YR,1018,eukaryote,nonUG\r
A0A146HB08,LTR/Retroviral/YR,1018,eukaryote,nonUG\r
A0A284RV53,LTR/Retroviral/YR,1019,eukaryote,nonUG\r
A0A1Q3EFZ1,LTR/Retroviral/YR,1019,eukaryote,nonUG\r
A0A0D0AU44,LTR/Retroviral/YR,1020,eukaryote,nonUG\r
A0A1Q3DUH6,LTR/Retroviral/YR,1020,eukaryote,nonUG\r
A0A401GEN6,LTR/Retroviral/YR,1021,eukaryote,nonUG\r
A0A7S2R556,LTR/Retroviral/YR,1021,eukaryote,nonUG\r
A0A0M0JUZ3,LTR/Retroviral/YR,1022,eukaryote,nonUG\r
A0A0B7FLR7,LTR/Retroviral/YR,1022,eukaryote,nonUG\r
A0A7S3Y454,LTR/Retroviral/YR,1023,eukaryote,nonUG\r
M3JSF6,LTR/Retroviral/YR,1023,eukaryote,nonUG\r
A0A6A3IQM1,LTR/Retroviral/YR,1024,eukaryote,nonUG\r
F0WDL5,LTR/Retroviral/YR,1024,eukaryote,nonUG\r
A0A2P4Y1J4,LTR/Retroviral/YR,1025,eukaryote,nonUG\r
F0W9N8,LTR/Retroviral/YR,1025,eukaryote,nonUG\r
A0A6A4A4L0,LTR/Retroviral/YR,1026,eukaryote,nonUG\r
A0A6G0WJ78,LTR/Retroviral/YR,1026,eukaryote,nonUG\r
A0A6G0WFC0,LTR/Retroviral/YR,1027,eukaryote,nonUG\r
A0A225VMT5,LTR/Retroviral/YR,1027,eukaryote,nonUG\r
T1IUK0,LTR/Retroviral/YR,1028,eukaryote,nonUG\r
A0A096PAH2,LTR/Retroviral/YR,1028,eukaryote,nonUG\r
A0A7S0XE50,LTR/Retroviral/YR,1029,eukaryote,nonUG\r
A0A507FAR3,LTR/Retroviral/YR,1029,eukaryote,nonUG\r
A0A7S4P6K7,LTR/Retroviral/YR,1030,eukaryote,nonUG\r
A0A7S4UB65,LTR/Retroviral/YR,1030,eukaryote,nonUG\r
S8BYT8,LTR/Retroviral/YR,1031,eukaryote,nonUG\r
A0A7S4K281,LTR/Retroviral/YR,1031,eukaryote,nonUG\r
A0A535F6S8,LTR/Retroviral/YR,1032,eukaryote,nonUG\r
A0A507D6Y1,LTR/Retroviral/YR,1032,eukaryote,nonUG\r
A0A6A4YY14,LTR/Retroviral/YR,1033,eukaryote,nonUG\r
A0A6G0WAE5,LTR/Retroviral/YR,1033,eukaryote,nonUG\r
A0A2E0WEF7,LTR/Retroviral/YR,1034,eukaryote,nonUG\r
A0A2E0WBG3,LTR/Retroviral/YR,1034,eukaryote,nonUG\r
A0A2I0XJJ4,LTR/Retroviral/YR,1035,eukaryote,nonUG\r
A0A0G4EN14,LTR/Retroviral/YR,1035,eukaryote,nonUG\r
A0A7S2AW75,LTR/Retroviral/YR,1036,eukaryote,nonUG\r
A0A2D4XCH7,LTR/Retroviral/YR,1036,eukaryote,nonUG\r
A0A7R9UHG9,LTR/Retroviral/YR,1037,eukaryote,nonUG\r
A0A2D6FGZ1,LTR/Retroviral/YR,1037,eukaryote,nonUG\r
A0A0M0JTS7,LTR/Retroviral/YR,1038,eukaryote,nonUG\r
A0A7S2CEI2,LTR/Retroviral/YR,1038,eukaryote,nonUG\r
A0A226CZD0,LTR/Retroviral/YR,1039,eukaryote,nonUG\r
A0A7S2R5M6,LTR/Retroviral/YR,1039,eukaryote,nonUG\r
A0A1Z8ZU62,LTR/Retroviral/YR,1040,eukaryote,nonUG\r
J5QRI8,LTR/Retroviral/YR,1040,eukaryote,nonUG\r
J6EZH3,LTR/Retroviral/YR,1041,eukaryote,nonUG\r
A0A507F1J3,LTR/Retroviral/YR,1041,eukaryote,nonUG\r
A0A7S0MWG7,LTR/Retroviral/YR,1042,eukaryote,nonUG\r
A0A7S0MLG9,LTR/Retroviral/YR,1042,eukaryote,nonUG\r
A0A7S0MIJ9,LTR/Retroviral/YR,1043,eukaryote,nonUG\r
A0A7S0VXP3,LTR/Retroviral/YR,1043,eukaryote,nonUG\r
A0A7Z9GBU3,LTR/Retroviral/YR,1044,eukaryote,nonUG\r
A0A2D7I431,LTR/Retroviral/YR,1044,eukaryote,nonUG\r
A0A7S2DY95,LTR/Retroviral/YR,1045,eukaryote,nonUG\r
A0A6U2QN21,LTR/Retroviral/YR,1045,eukaryote,nonUG\r
A0A6U3WTI5,LTR/Retroviral/YR,1046,eukaryote,nonUG\r
A0A7S4EQ58,LTR/Retroviral/YR,1046,eukaryote,nonUG\r
K0T1Z6,LTR/Retroviral/YR,1047,eukaryote,nonUG\r
K2RFW9,LTR/Retroviral/YR,1047,eukaryote,nonUG\r
A0A1W5CVI0,LTR/Retroviral/YR,1048,eukaryote,nonUG\r
A0A7J6WSV2,LTR/Retroviral/YR,1048,eukaryote,nonUG\r
A0A4V1X6S2,LTR/Retroviral/YR,1049,eukaryote,nonUG\r
A0A545A995,LTR/Retroviral/YR,1049,eukaryote,nonUG\r
A0A2A9P685,LTR/Retroviral/YR,1050,eukaryote,nonUG\r
A0A0B4G6Q7,LTR/Retroviral/YR,1050,eukaryote,nonUG\r
A0A7J6X434,LTR/Retroviral/YR,1051,eukaryote,nonUG\r
B8LX39,LTR/Retroviral/YR,1051,eukaryote,nonUG\r
A0A1V6NX08,LTR/Retroviral/YR,1052,eukaryote,nonUG\r
A0A1S9RI25,LTR/Retroviral/YR,1052,eukaryote,nonUG\r
A0A0F7ZQQ4,LTR/Retroviral/YR,1053,eukaryote,nonUG\r
A0A4Q4N0G8,LTR/Retroviral/YR,1053,eukaryote,nonUG\r
A0A0G4J1F0,LTR/Retroviral/YR,1054,eukaryote,nonUG\r
A0A146H1W6,LTR/Retroviral/YR,1054,eukaryote,nonUG\r
A0A0G4FE94,LTR/Retroviral/YR,1055,eukaryote,nonUG\r
A0A175W1H5,LTR/Retroviral/YR,1055,eukaryote,nonUG\r
A0A0F7ZEZ0,LTR/Retroviral/YR,1056,eukaryote,nonUG\r
T0JUS0,LTR/Retroviral/YR,1056,eukaryote,nonUG\r
A0A545UL69,LTR/Retroviral/YR,1057,eukaryote,nonUG\r
A0A1V6PPM4,LTR/Retroviral/YR,1057,eukaryote,nonUG\r
A0A1V6NJM9,LTR/Retroviral/YR,1058,eukaryote,nonUG\r
B6H6V9,LTR/Retroviral/YR,1058,eukaryote,nonUG\r
A6R9R0,LTR/Retroviral/YR,1059,eukaryote,nonUG\r
A0A1E3BJX2,LTR/Retroviral/YR,1059,eukaryote,nonUG\r
A0A0M8NTR0,LTR/Retroviral/YR,1060,eukaryote,nonUG\r
A6XPC4,LTR/Retroviral/YR,1060,eukaryote,nonUG\r
A6QSW3,LTR/Retroviral/YR,1061,eukaryote,nonUG\r
A0A7D9GZ32,LTR/Retroviral/YR,1061,eukaryote,nonUG\r
A0A642UTN9,LTR/Retroviral/YR,1062,eukaryote,nonUG\r
A0A642UPC8,LTR/Retroviral/YR,1062,eukaryote,nonUG\r
A0A2N5UF88,LTR/Retroviral/YR,1063,eukaryote,nonUG\r
A0A2N5UBA1,LTR/Retroviral/YR,1063,eukaryote,nonUG\r
A0A507DCM6,LTR/Retroviral/YR,1064,eukaryote,nonUG\r
A0A2D5A6R0,LTR/Retroviral/YR,1064,eukaryote,nonUG\r
A0A0M0JUF0,LTR/Retroviral/YR,1065,eukaryote,nonUG\r
A0A2G2CC37,LTR/Retroviral/YR,1065,eukaryote,nonUG\r
A0A0L0G105,LTR/Retroviral/YR,1066,eukaryote,nonUG\r
A0A4P6XSJ0,LTR/Retroviral/YR,1066,eukaryote,nonUG\r
M3J0M0,LTR/Retroviral/YR,1067,eukaryote,nonUG\r
S8CZH9,LTR/Retroviral/YR,1067,eukaryote,nonUG\r
A0A7S1VQI3,LTR/Retroviral/YR,1068,eukaryote,nonUG\r
A0A7S3UZT7,LTR/Retroviral/YR,1068,eukaryote,nonUG\r
A0A2R5H253,LTR/Retroviral/YR,1069,eukaryote,nonUG\r
A0A2R5FKW7,LTR/Retroviral/YR,1069,eukaryote,nonUG\r
A0A7S2YNC9,LTR/Retroviral/YR,1070,eukaryote,nonUG\r
A0A2D4XBS7,LTR/Retroviral/YR,1070,eukaryote,nonUG\r
A0A7C7JE26,LTR/Retroviral/YR,1071,eukaryote,nonUG\r
A0A0F8CN22,LTR/Retroviral/YR,1071,eukaryote,nonUG\r
Q12193,LTR/Retroviral/YR,1072,eukaryote,nonUG\r
G8BPV4,LTR/Retroviral/YR,1072,eukaryote,nonUG\r
A0A376B5Q4,LTR/Retroviral/YR,1073,eukaryote,nonUG\r
A0A4T0X6T4,LTR/Retroviral/YR,1073,eukaryote,nonUG\r
K0L0S7,LTR/Retroviral/YR,1074,eukaryote,nonUG\r
A0A2E8GDL4,LTR/Retroviral/YR,1074,eukaryote,nonUG\r
A0A1Q9E1U0,LTR/Retroviral/YR,1075,eukaryote,nonUG\r
A0A812HGZ8,LTR/Retroviral/YR,1075,eukaryote,nonUG\r
A0A813C185,LTR/Retroviral/YR,1076,eukaryote,nonUG\r
A0A812NQH4,LTR/Retroviral/YR,1076,eukaryote,nonUG\r
A0A812NKR6,LTR/Retroviral/YR,1077,eukaryote,nonUG\r
A0A813A0Y7,LTR/Retroviral/YR,1077,eukaryote,nonUG\r
A0A813BNH6,LTR/Retroviral/YR,1078,eukaryote,nonUG\r
A0A812IWD9,LTR/Retroviral/YR,1078,eukaryote,nonUG\r
A0A813GTY4,LTR/Retroviral/YR,1079,eukaryote,nonUG\r
A0A1Q9BTN0,LTR/Retroviral/YR,1079,eukaryote,nonUG\r
A0A6J8DES9,LTR/Retroviral/YR,1080,eukaryote,nonUG\r
A0A6J8BGQ4,LTR/Retroviral/YR,1080,eukaryote,nonUG\r
A0A8B6GIJ0,LTR/Retroviral/YR,1081,eukaryote,nonUG\r
A0A6J8EBP7,LTR/Retroviral/YR,1081,eukaryote,nonUG\r
A0A1X6NS11,LTR/Retroviral/YR,1082,eukaryote,nonUG\r
A0A813LW24,LTR/Retroviral/YR,1082,eukaryote,nonUG\r
A0A812S955,LTR/Retroviral/YR,1083,eukaryote,nonUG\r
A0A813AZX0,LTR/Retroviral/YR,1083,eukaryote,nonUG\r
A0A812WV23,LTR/Retroviral/YR,1084,eukaryote,nonUG\r
A0A812UHJ9,LTR/Retroviral/YR,1084,eukaryote,nonUG\r
A0A1Q9CZR7,LTR/Retroviral/YR,1085,eukaryote,nonUG\r
A0A1Q9BWJ7,LTR/Retroviral/YR,1085,eukaryote,nonUG\r
A0A812SN85,LTR/Retroviral/YR,1086,eukaryote,nonUG\r
A0A813DG53,LTR/Retroviral/YR,1086,eukaryote,nonUG\r
A0A5J4YJ22,LTR/Retroviral/YR,1087,eukaryote,nonUG\r
A0A5J4YVH7,LTR/Retroviral/YR,1087,eukaryote,nonUG\r
A0A0B1P8M7,LTR/Retroviral/YR,1088,eukaryote,nonUG\r
A0A5J4YRZ9,LTR/Retroviral/YR,1088,eukaryote,nonUG\r
A0A5J4YKT1,LTR/Retroviral/YR,1089,eukaryote,nonUG\r
A0A5J4YKV7,LTR/Retroviral/YR,1089,eukaryote,nonUG\r
A0A5J4YVK7,LTR/Retroviral/YR,1090,eukaryote,nonUG\r
A0A5J4YR09,LTR/Retroviral/YR,1090,eukaryote,nonUG\r
A0A5J4Z2M0,LTR/Retroviral/YR,1091,eukaryote,nonUG\r
A0A5J4YHU0,LTR/Retroviral/YR,1091,eukaryote,nonUG\r
A0A5J4YWQ4,LTR/Retroviral/YR,1092,eukaryote,nonUG\r
A0A5J4YK31,LTR/Retroviral/YR,1092,eukaryote,nonUG\r
A0A0G4GK45,LTR/Retroviral/YR,1093,eukaryote,nonUG\r
A0A0G4GTW9,LTR/Retroviral/YR,1093,eukaryote,nonUG\r
A0A0G4HH60,LTR/Retroviral/YR,1094,eukaryote,nonUG\r
A0A0G4F0B1,LTR/Retroviral/YR,1094,eukaryote,nonUG\r
A0A2G2CC65,LTR/Retroviral/YR,1095,eukaryote,nonUG\r
A0A2G2BT73,LTR/Retroviral/YR,1095,eukaryote,nonUG\r
A0A1Q9DRV8,LTR/Retroviral/YR,1096,eukaryote,nonUG\r
A0A812NXW6,LTR/Retroviral/YR,1096,eukaryote,nonUG\r
A0A812NU20,LTR/Retroviral/YR,1097,eukaryote,nonUG\r
A0A812LBL1,LTR/Retroviral/YR,1097,eukaryote,nonUG\r
A0A1Q9ESD2,LTR/Retroviral/YR,1098,eukaryote,nonUG\r
A0A812MMC4,LTR/Retroviral/YR,1098,eukaryote,nonUG\r
A0A812MIJ6,LTR/Retroviral/YR,1099,eukaryote,nonUG\r
A0A1Q9E4J6,LTR/Retroviral/YR,1099,eukaryote,nonUG\r
A0A1Q9DAN9,LTR/Retroviral/YR,1100,eukaryote,nonUG\r
A0A812NE54,LTR/Retroviral/YR,1100,eukaryote,nonUG\r
A0A812PMC7,LTR/Retroviral/YR,1101,eukaryote,nonUG\r
A0A812TR93,LTR/Retroviral/YR,1101,eukaryote,nonUG\r
A0A813BA18,LTR/Retroviral/YR,1102,eukaryote,nonUG\r
A0A1Q9C1P7,LTR/Retroviral/YR,1102,eukaryote,nonUG\r
A0A1Q9EL10,LTR/Retroviral/YR,1103,eukaryote,nonUG\r
A0A812XXH2,LTR/Retroviral/YR,1103,eukaryote,nonUG\r
A0A812JMP5,LTR/Retroviral/YR,1104,eukaryote,nonUG\r
A0A1Q9ELP9,LTR/Retroviral/YR,1104,eukaryote,nonUG\r
A0A812Q5R4,LTR/Retroviral/YR,1105,eukaryote,nonUG\r
A0A813EM64,LTR/Retroviral/YR,1105,eukaryote,nonUG\r
A0A2E6D553,LTR/Retroviral/YR,1106,eukaryote,nonUG\r
A0A812PPY0,LTR/Retroviral/YR,1106,eukaryote,nonUG\r
A0A812Q257,LTR/Retroviral/YR,1107,eukaryote,nonUG\r
A0A1Q9DWN5,LTR/Retroviral/YR,1107,eukaryote,nonUG\r
A0A813EEW1,LTR/Retroviral/YR,1108,eukaryote,nonUG\r
A0A813J3M3,LTR/Retroviral/YR,1108,eukaryote,nonUG\r
A0A0N5CAE9,LTR/Retroviral/YR,1109,eukaryote,nonUG\r
A0A6H5JDM0,LTR/Retroviral/YR,1109,eukaryote,nonUG\r
A0A6U5XCR5,LTR/Retroviral/YR,1110,eukaryote,nonUG\r
A0A6T7SAD6,LTR/Retroviral/YR,1110,eukaryote,nonUG\r
K0S6F1,LTR/Retroviral/YR,1111,eukaryote,nonUG\r
A0A1Z5JV65,LTR/Retroviral/YR,1111,eukaryote,nonUG\r
A0A7C4VLK0,LTR/Retroviral/YR,1112,eukaryote,nonUG\r
A0A5J4YT78,LTR/Retroviral/YR,1112,eukaryote,nonUG\r
A0A5J4Z4D9,LTR/Retroviral/YR,1113,eukaryote,nonUG\r
A0A7S0ZIZ4,LTR/Retroviral/YR,1113,eukaryote,nonUG\r
A0A7R9X0A2,LTR/Retroviral/YR,1114,eukaryote,nonUG\r
A0A1Z5KMG8,LTR/Retroviral/YR,1114,eukaryote,nonUG\r
B1PJ25,LTR/Retroviral/YR,1115,eukaryote,nonUG\r
A0A0M1J8C0,LTR/Retroviral/YR,1115,eukaryote,nonUG\r
A0A7S3PQJ1,LTR/Retroviral/YR,1116,eukaryote,nonUG\r
K0KVP7,LTR/Retroviral/YR,1116,eukaryote,nonUG\r
A0A4V4NFA5,LTR/Retroviral/YR,1117,eukaryote,nonUG\r
A0A0K0E9H5,LTR/Retroviral/YR,1117,eukaryote,nonUG\r
A0A0K0EBX3,LTR/Retroviral/YR,1118,eukaryote,nonUG\r
A0A0K0FER9,LTR/Retroviral/YR,1118,eukaryote,nonUG\r
A0A0N5BI78,LTR/Retroviral/YR,1119,eukaryote,nonUG\r
A0A0K0ENQ8,LTR/Retroviral/YR,1119,eukaryote,nonUG\r
A0A0N5BP40,LTR/Retroviral/YR,1120,eukaryote,nonUG\r
A0A0N5A5W6,LTR/Retroviral/YR,1120,eukaryote,nonUG\r
A0A0K0FW66,LTR/Retroviral/YR,1121,eukaryote,nonUG\r
A0A2H2HZZ6,LTR/Retroviral/YR,1121,eukaryote,nonUG\r
A0A0N4X776,LTR/Retroviral/YR,1122,eukaryote,nonUG\r
A0A183CNU7,LTR/Retroviral/YR,1122,eukaryote,nonUG\r
A0A0K0E4M5,LTR/Retroviral/YR,1123,eukaryote,nonUG\r
A0A090KW06,LTR/Retroviral/YR,1123,eukaryote,nonUG\r
A0A0K0EG18,LTR/Retroviral/YR,1124,eukaryote,nonUG\r
A0A0K0E0X7,LTR/Retroviral/YR,1124,eukaryote,nonUG\r
A0A0K0FHX9,LTR/Retroviral/YR,1125,eukaryote,nonUG\r
A0A0K0DU34,LTR/Retroviral/YR,1125,eukaryote,nonUG\r
A0A090MQK3,LTR/Retroviral/YR,1126,eukaryote,nonUG\r
A0A0K0EK66,LTR/Retroviral/YR,1126,eukaryote,nonUG\r
A0A0K0DTS7,LTR/Retroviral/YR,1127,eukaryote,nonUG\r
A0A0N5BU31,LTR/Retroviral/YR,1127,eukaryote,nonUG\r
A0A0N5B2R3,LTR/Retroviral/YR,1128,eukaryote,nonUG\r
A0A0K0FFQ9,LTR/Retroviral/YR,1128,eukaryote,nonUG\r
A0A0N5B5L8,LTR/Retroviral/YR,1129,eukaryote,nonUG\r
A0A090KZR0,LTR/Retroviral/YR,1129,eukaryote,nonUG\r
A0A0N5BQ84,LTR/Retroviral/YR,1130,eukaryote,nonUG\r
A0A0N5B8W0,LTR/Retroviral/YR,1130,eukaryote,nonUG\r
A0A0N5BZ45,LTR/Retroviral/YR,1131,eukaryote,nonUG\r
A0A0N5BRM8,LTR/Retroviral/YR,1131,eukaryote,nonUG\r
A0A0K0DS37,LTR/Retroviral/YR,1132,eukaryote,nonUG\r
A0A090KVS2,LTR/Retroviral/YR,1132,eukaryote,nonUG\r
A0A0N5C4H9,LTR/Retroviral/YR,1133,eukaryote,nonUG\r
A0A0K0FX96,LTR/Retroviral/YR,1133,eukaryote,nonUG\r
A0A090MSQ4,LTR/Retroviral/YR,1134,eukaryote,nonUG\r
A0A0K0EPP4,LTR/Retroviral/YR,1134,eukaryote,nonUG\r
A0A0K0DTW4,LTR/Retroviral/YR,1135,eukaryote,nonUG\r
A0A090KZI5,LTR/Retroviral/YR,1135,eukaryote,nonUG\r
A0A0K0ETN3,LTR/Retroviral/YR,1136,eukaryote,nonUG\r
A0A0K0ETE0,LTR/Retroviral/YR,1136,eukaryote,nonUG\r
A0A0K0FNU4,LTR/Retroviral/YR,1137,eukaryote,nonUG\r
A0A0K0EJ17,LTR/Retroviral/YR,1137,eukaryote,nonUG\r
A0A0N5C0W7,LTR/Retroviral/YR,1138,eukaryote,nonUG\r
A0A0K0FFE4,LTR/Retroviral/YR,1138,eukaryote,nonUG\r
A0A8B6FD68,LTR/Retroviral/YR,1139,eukaryote,nonUG\r
A0A6J7ZWE1,LTR/Retroviral/YR,1139,eukaryote,nonUG\r
A0A354GG95,LTR/Retroviral/YR,1140,eukaryote,nonUG\r
A0A0K0ETC8,LTR/Retroviral/YR,1140,eukaryote,nonUG\r
A0A1D8PI28,LTR/Retroviral/YR,1141,eukaryote,nonUG\r
A0A3N5IBU3,LTR/Retroviral/YR,1141,eukaryote,nonUG\r
A0A354GI41,LTR/Retroviral/YR,1142,eukaryote,nonUG\r
A0A0N5CB30,LTR/Retroviral/YR,1142,eukaryote,nonUG\r
A0A7S2QR73,LTR/Retroviral/YR,1143,eukaryote,nonUG\r
A0A2G8JFQ9,LTR/Retroviral/YR,1143,eukaryote,nonUG\r
A0A7K4FCI7,LTR/Retroviral/YR,1144,eukaryote,nonUG\r
A0A2P4XBR6,LTR/Retroviral/YR,1144,eukaryote,nonUG\r
A0A6A3FUK0,LTR/Retroviral/YR,1145,eukaryote,nonUG\r
K0SPK0,LTR/Retroviral/YR,1145,eukaryote,nonUG\r
A0A2D4RW98,LTR/Retroviral/YR,1146,eukaryote,nonUG\r
A0A0A9WWC1,LTR/Retroviral/YR,1146,eukaryote,nonUG\r
A0A533ZX04,LTR/Retroviral/YR,1147,eukaryote,nonUG\r
A0A6H5GP33,LTR/Retroviral/YR,1147,eukaryote,nonUG\r
A0A7E4RFZ1,LTR/Retroviral/YR,1148,eukaryote,nonUG\r
A0A1Y1LMU5,LTR/Retroviral/YR,1148,eukaryote,nonUG\r
A0A7E4RY27,LTR/Retroviral/YR,1149,eukaryote,nonUG\r
A0A7E4S9P7,LTR/Retroviral/YR,1149,eukaryote,nonUG\r
A0A1B6H681,LTR/Retroviral/YR,1150,eukaryote,nonUG\r
A0A0K0DTT7,LTR/Retroviral/YR,1150,eukaryote,nonUG\r
A0A0N5BDS9,LTR/Retroviral/YR,1151,eukaryote,nonUG\r
A0A0K0E4M4,LTR/Retroviral/YR,1151,eukaryote,nonUG\r
A0A0K0FER7,LTR/Retroviral/YR,1152,eukaryote,nonUG\r
A0A0N5B2Z2,LTR/Retroviral/YR,1152,eukaryote,nonUG\r
A0A0N5CDW8,LTR/Retroviral/YR,1153,eukaryote,nonUG\r
A0A0K0FSF7,LTR/Retroviral/YR,1153,eukaryote,nonUG\r
A0A0K0E5U3,LTR/Retroviral/YR,1154,eukaryote,nonUG\r
A0A0K0FHL8,LTR/Retroviral/YR,1154,eukaryote,nonUG\r
A0A0K0EMM4,LTR/Retroviral/YR,1155,eukaryote,nonUG\r
A0A0N5C5G5,LTR/Retroviral/YR,1155,eukaryote,nonUG\r
A0A0K0F365,LTR/Retroviral/YR,1156,eukaryote,nonUG\r
A0A0K0EAB9,LTR/Retroviral/YR,1156,eukaryote,nonUG\r
A0A0K0EFR9,LTR/Retroviral/YR,1157,eukaryote,nonUG\r
A0A0K0DZW5,LTR/Retroviral/YR,1157,eukaryote,nonUG\r
A0A0N5BYT0,LTR/Retroviral/YR,1158,eukaryote,nonUG\r
A0A0K0EBY2,LTR/Retroviral/YR,1158,eukaryote,nonUG\r
A0A0N5B1U6,LTR/Retroviral/YR,1159,eukaryote,nonUG\r
A0A0K0FTG8,LTR/Retroviral/YR,1159,eukaryote,nonUG\r
A0A1I8D3L2,LTR/Retroviral/YR,1160,eukaryote,nonUG\r
A0A0N5B361,LTR/Retroviral/YR,1160,eukaryote,nonUG\r
A0A0N5B5K3,LTR/Retroviral/YR,1161,eukaryote,nonUG\r
A0A6H5JF70,LTR/Retroviral/YR,1161,eukaryote,nonUG\r
A7TKG9,LTR/Retroviral/YR,1162,eukaryote,nonUG\r
K0KSJ0,LTR/Retroviral/YR,1162,eukaryote,nonUG\r
A0A3N5I9C6,LTR/Retroviral/YR,1163,eukaryote,nonUG\r
A0A0A9WT73,LTR/Retroviral/YR,1163,eukaryote,nonUG\r
A0A3N5IEA8,LTR/Retroviral/YR,1164,eukaryote,nonUG\r
E4WSV7,LTR/Retroviral/YR,1164,eukaryote,nonUG\r
E4YVI6,LTR/Retroviral/YR,1165,eukaryote,nonUG\r
A0A6J8BVR8,LTR/Retroviral/YR,1165,eukaryote,nonUG\r
G0W425,LTR/Retroviral/YR,1166,eukaryote,nonUG\r
A0A151PAZ2,LTR/Retroviral/YR,1166,eukaryote,nonUG\r
A0A0N5C6S7,LTR/Retroviral/YR,1167,eukaryote,nonUG\r
A0A0N5BDJ3,LTR/Retroviral/YR,1167,eukaryote,nonUG\r
E4YVU9,LTR/Retroviral/YR,1168,eukaryote,nonUG\r
E4YXA2,LTR/Retroviral/YR,1168,eukaryote,nonUG\r
A0A238BKA9,LTR/Retroviral/YR,1169,eukaryote,nonUG\r
A0A3M0IK83,LTR/Retroviral/YR,1169,eukaryote,nonUG\r
A0A485PJ89,LTR/Retroviral/YR,1170,eukaryote,nonUG\r
A0A1V4KFV4,LTR/Retroviral/YR,1170,eukaryote,nonUG\r
A0A3M0KBF5,LTR/Retroviral/YR,1171,eukaryote,nonUG\r
A0A3M0IV60,LTR/Retroviral/YR,1171,eukaryote,nonUG\r
A0A3M0IHE3,LTR/Retroviral/YR,1172,eukaryote,nonUG\r
A0A7Z1MW46,LTR/Retroviral/YR,1172,eukaryote,nonUG\r
A0A7J6U7G0,LTR/Retroviral/YR,1173,eukaryote,nonUG\r
A0A7J6Q599,LTR/Retroviral/YR,1173,eukaryote,nonUG\r
C5K5T7,LTR/Retroviral/YR,1174,eukaryote,nonUG\r
A0A023AWT8,LTR/Retroviral/YR,1174,eukaryote,nonUG\r
A0A6H5FZC4,LTR/Retroviral/YR,1175,eukaryote,nonUG\r
A0A3Q0IZW4,LTR/Retroviral/YR,1175,eukaryote,nonUG\r
A0A811WNG1,LTR/Retroviral/YR,1176,eukaryote,nonUG\r
A0A6H5I493,LTR/Retroviral/YR,1176,eukaryote,nonUG\r
A0A182NPV1,LTR/Retroviral/YR,1177,eukaryote,nonUG\r
A0A7E4SDU3,LTR/Retroviral/YR,1177,eukaryote,nonUG\r
A0A7E4RDH8,LTR/Retroviral/YR,1178,eukaryote,nonUG\r
A0A7E4S6F5,LTR/Retroviral/YR,1178,eukaryote,nonUG\r
A0A1B0D818,LTR/Retroviral/YR,1179,eukaryote,nonUG\r
A0A5N4AWG8,LTR/Retroviral/YR,1179,eukaryote,nonUG\r
A0A7E4RNW9,LTR/Retroviral/YR,1180,eukaryote,nonUG\r
X1WT50,LTR/Retroviral/YR,1180,eukaryote,nonUG\r
A0A3Q0JNQ0,LTR/Retroviral/YR,1181,eukaryote,nonUG\r
A0A6H5G014,LTR/Retroviral/YR,1181,eukaryote,nonUG\r
A0A811W7E3,LTR/Retroviral/YR,1182,eukaryote,nonUG\r
A0A4C1X8S5,LTR/Retroviral/YR,1182,eukaryote,nonUG\r
A0A437ASN8,LTR/Retroviral/YR,1183,eukaryote,nonUG\r
A0A6J2YU61,LTR/Retroviral/YR,1183,eukaryote,nonUG\r
A0A6J1RCI1,LTR/Retroviral/YR,1184,eukaryote,nonUG\r
A0A6J2Y3C8,LTR/Retroviral/YR,1184,eukaryote,nonUG\r
D2A334,LTR/Retroviral/YR,1185,eukaryote,nonUG\r
A0A146M0N4,LTR/Retroviral/YR,1185,eukaryote,nonUG\r
A0A2R7VUK9,LTR/Retroviral/YR,1186,eukaryote,nonUG\r
A0A6G0W1K3,LTR/Retroviral/YR,1186,eukaryote,nonUG\r
A0A6P8MUI1,LTR/Retroviral/YR,1187,eukaryote,nonUG\r
X1X039,LTR/Retroviral/YR,1187,eukaryote,nonUG\r
A0A6H5J086,LTR/Retroviral/YR,1188,eukaryote,nonUG\r
A0A6H5HZ49,LTR/Retroviral/YR,1188,eukaryote,nonUG\r
A0A7M7Q3P0,LTR/Retroviral/YR,1189,eukaryote,nonUG\r
A0A0J7K9N2,LTR/Retroviral/YR,1189,eukaryote,nonUG\r
A0A6H5HLE0,LTR/Retroviral/YR,1190,eukaryote,nonUG\r
J9M802,LTR/Retroviral/YR,1190,eukaryote,nonUG\r
A0A7E5VWJ9,LTR/Retroviral/YR,1191,eukaryote,nonUG\r
A0A7E5WW13,LTR/Retroviral/YR,1191,eukaryote,nonUG\r
A0A6J1NPT1,LTR/Retroviral/YR,1192,eukaryote,nonUG\r
A0A6J1R373,LTR/Retroviral/YR,1192,eukaryote,nonUG\r
W8C1U1,LTR/Retroviral/YR,1193,eukaryote,nonUG\r
A0A3L8DXY0,LTR/Retroviral/YR,1193,eukaryote,nonUG\r
A0A6G0Y4K9,LTR/Retroviral/YR,1194,eukaryote,nonUG\r
A0A3L8DXD3,LTR/Retroviral/YR,1194,eukaryote,nonUG\r
A0A0J7N046,LTR/Retroviral/YR,1195,eukaryote,nonUG\r
A0A836J969,LTR/Retroviral/YR,1195,eukaryote,nonUG\r
A0A5N4ANA1,LTR/Retroviral/YR,1196,eukaryote,nonUG\r
A0A6J1PQ95,LTR/Retroviral/YR,1196,eukaryote,nonUG\r
A0A6J1PLD9,LTR/Retroviral/YR,1197,eukaryote,nonUG\r
A0A6V7JGQ3,LTR/Retroviral/YR,1197,eukaryote,nonUG\r
A0A6H5IPW1,LTR/Retroviral/YR,1198,eukaryote,nonUG\r
A0A6H5HSM4,LTR/Retroviral/YR,1198,eukaryote,nonUG\r
A0A811WI07,LTR/Retroviral/YR,1199,eukaryote,nonUG\r
A0A7E5W872,LTR/Retroviral/YR,1199,eukaryote,nonUG\r
A0A4Y2C280,LTR/Retroviral/YR,1200,eukaryote,nonUG\r
A0A4Y2H6F5,LTR/Retroviral/YR,1200,eukaryote,nonUG\r
A0A4Y2IDE5,LTR/Retroviral/YR,1201,eukaryote,nonUG\r
A0A4Y2QK08,LTR/Retroviral/YR,1201,eukaryote,nonUG\r
A0A4Y2C734,LTR/Retroviral/YR,1202,eukaryote,nonUG\r
A0A4Y2SQ17,LTR/Retroviral/YR,1202,eukaryote,nonUG\r
A0A4Y2I8S7,LTR/Retroviral/YR,1203,eukaryote,nonUG\r
A0A6J2KEQ6,LTR/Retroviral/YR,1203,eukaryote,nonUG\r
A0A4C1Y1R8,LTR/Retroviral/YR,1204,eukaryote,nonUG\r
A0A2A4IUY1,LTR/Retroviral/YR,1204,eukaryote,nonUG\r
A0A811WB63,LTR/Retroviral/YR,1205,eukaryote,nonUG\r
A0A3S2N7W6,LTR/Retroviral/YR,1205,eukaryote,nonUG\r
A0A811WKK4,LTR/Retroviral/YR,1206,eukaryote,nonUG\r
A0A2A4JL65,LTR/Retroviral/YR,1206,eukaryote,nonUG\r
A0A821W8E1,LTR/Retroviral/YR,1207,eukaryote,nonUG\r
A0A6J2XJB8,LTR/Retroviral/YR,1207,eukaryote,nonUG\r
A0A2M4A642,LTR/Retroviral/YR,1208,eukaryote,nonUG\r
A0A336KCY2,LTR/Retroviral/YR,1208,eukaryote,nonUG\r
A0A151X0A1,LTR/Retroviral/YR,1209,eukaryote,nonUG\r
A0A023EZ22,LTR/Retroviral/YR,1209,eukaryote,nonUG\r
A0A6G0VZ24,LTR/Retroviral/YR,1210,eukaryote,nonUG\r
A0A811VX70,LTR/Retroviral/YR,1210,eukaryote,nonUG\r
A0A7E4RF45,LTR/Retroviral/YR,1211,eukaryote,nonUG\r
X1WL73,LTR/Retroviral/YR,1211,eukaryote,nonUG\r
A0A6G0VR62,LTR/Retroviral/YR,1212,eukaryote,nonUG\r
A0A6J1RMK9,LTR/Retroviral/YR,1212,eukaryote,nonUG\r
V5GU69,LTR/Retroviral/YR,1213,eukaryote,nonUG\r
A0A3L8D4U7,LTR/Retroviral/YR,1213,eukaryote,nonUG\r
A0A336LMN1,LTR/Retroviral/YR,1214,eukaryote,nonUG\r
A0A182YRD6,LTR/Retroviral/YR,1214,eukaryote,nonUG\r
A0A034WA88,LTR/Retroviral/YR,1215,eukaryote,nonUG\r
A0A1U8N891,LTR/Retroviral/YR,1215,eukaryote,nonUG\r
A0A4Y2VFH2,LTR/Retroviral/YR,1216,eukaryote,nonUG\r
A0A034W2D1,LTR/Retroviral/YR,1216,eukaryote,nonUG\r
A0A5N4AIL0,LTR/Retroviral/YR,1217,eukaryote,nonUG\r
A0A226DXY1,LTR/Retroviral/YR,1217,eukaryote,nonUG\r
A0A6J1PGN8,LTR/Retroviral/YR,1218,eukaryote,nonUG\r
A0A5N4B971,LTR/Retroviral/YR,1218,eukaryote,nonUG\r
A0A151XBN9,LTR/Retroviral/YR,1219,eukaryote,nonUG\r
A0A182YRP2,LTR/Retroviral/YR,1219,eukaryote,nonUG\r
A0A6G0W399,LTR/Retroviral/YR,1220,eukaryote,nonUG\r
A0A4Y2L2Y6,LTR/Retroviral/YR,1220,eukaryote,nonUG\r
A0A7J6JU80,LTR/Retroviral/YR,1221,eukaryote,nonUG\r
A0A162NQN9,LTR/Retroviral/YR,1221,eukaryote,nonUG\r
A0A085MTK2,LTR/Retroviral/YR,1222,eukaryote,nonUG\r
A0A7J4G303,LTR/Retroviral/YR,1222,eukaryote,nonUG\r
A0A6S7JPQ6,LTR/Retroviral/YR,1223,eukaryote,nonUG\r
A0A7R8H2Z5,LTR/Retroviral/YR,1223,eukaryote,nonUG\r
A0A7M5XM06,LTR/Retroviral/YR,1224,eukaryote,nonUG\r
A0A315W1T6,LTR/Retroviral/YR,1224,eukaryote,nonUG\r
A0A6A0GW68,LTR/Retroviral/YR,1225,eukaryote,nonUG\r
A0A8B6EHD7,LTR/Retroviral/YR,1225,eukaryote,nonUG\r
A0A7D9HZN2,LTR/Retroviral/YR,1226,eukaryote,nonUG\r
A0A7M7NFF5,LTR/Retroviral/YR,1226,eukaryote,nonUG\r
A0A6S7JPG2,LTR/Retroviral/YR,1227,eukaryote,nonUG\r
A0A2B4RA13,LTR/Retroviral/YR,1227,eukaryote,nonUG\r
A0A2B4RXB5,LTR/Retroviral/YR,1228,eukaryote,nonUG\r
A0A2B4SKX1,LTR/Retroviral/YR,1228,eukaryote,nonUG\r
A0A7D9IRD1,LTR/Retroviral/YR,1229,eukaryote,nonUG\r
A0A074ZCE8,LTR/Retroviral/YR,1229,eukaryote,nonUG\r
A0A6A0H2Q3,LTR/Retroviral/YR,1230,eukaryote,nonUG\r
A0A2B4R9E4,LTR/Retroviral/YR,1230,eukaryote,nonUG\r
A0A2B4S5D1,LTR/Retroviral/YR,1231,eukaryote,nonUG\r
A0A2B4SKU2,LTR/Retroviral/YR,1231,eukaryote,nonUG\r
A0A3R7C5I8,LTR/Retroviral/YR,1232,eukaryote,nonUG\r
A0A6A5DSC2,LTR/Retroviral/YR,1232,eukaryote,nonUG\r
A0A3R7CGI4,LTR/Retroviral/YR,1233,eukaryote,nonUG\r
A0A654HX80,LTR/Retroviral/YR,1233,eukaryote,nonUG\r
A0A5J4N6X9,LTR/Retroviral/YR,1234,eukaryote,nonUG\r
A0A7J6JUV2,LTR/Retroviral/YR,1234,eukaryote,nonUG\r
A0A183RKD5,LTR/Retroviral/YR,1235,eukaryote,nonUG\r
A0A0S7J8H4,LTR/Retroviral/YR,1235,eukaryote,nonUG\r
A0A2G8L0W5,LTR/Retroviral/YR,1236,eukaryote,nonUG\r
A0A183A1C9,LTR/Retroviral/YR,1236,eukaryote,nonUG\r
A0A6P8H0Y6,LTR/Retroviral/YR,1237,eukaryote,nonUG\r
A0A164LBS6,LTR/Retroviral/YR,1237,eukaryote,nonUG\r
A0A0V1KZW1,LTR/Retroviral/YR,1238,eukaryote,nonUG\r
A0A085N843,LTR/Retroviral/YR,1238,eukaryote,nonUG\r
A0A085LLC5,LTR/Retroviral/YR,1239,eukaryote,nonUG\r
A0A085MSJ2,LTR/Retroviral/YR,1239,eukaryote,nonUG\r
A0A164P5T9,LTR/Retroviral/YR,1240,eukaryote,nonUG\r
A0A7E5WWV7,LTR/Retroviral/YR,1240,eukaryote,nonUG\r
A0A4C1TIE4,LTR/Retroviral/YR,1241,eukaryote,nonUG\r
V9GZQ1,LTR/Retroviral/YR,1241,eukaryote,nonUG\r
A0A4C1Z2H5,LTR/Retroviral/YR,1242,eukaryote,nonUG\r
A0A811X2R9,LTR/Retroviral/YR,1242,eukaryote,nonUG\r
A0A3S2NE83,LTR/Retroviral/YR,1243,eukaryote,nonUG\r
A0A6J1MRX7,LTR/Retroviral/YR,1243,eukaryote,nonUG\r
A0A4C1SMP7,LTR/Retroviral/YR,1244,eukaryote,nonUG\r
W5J8X7,LTR/Retroviral/YR,1244,eukaryote,nonUG\r
A0A1I8Q088,LTR/Retroviral/YR,1245,eukaryote,nonUG\r
W8AD81,LTR/Retroviral/YR,1245,eukaryote,nonUG\r
A0A5N4A3X9,LTR/Retroviral/YR,1246,eukaryote,nonUG\r
A0A1B0CZG8,LTR/Retroviral/YR,1246,eukaryote,nonUG\r
A0A1Y1LL65,LTR/Retroviral/YR,1247,eukaryote,nonUG\r
A0A2M4BJS0,LTR/Retroviral/YR,1247,eukaryote,nonUG\r
A0A1S3MVF0,LTR/Retroviral/YR,1248,eukaryote,nonUG\r
A0A6S7IJ03,LTR/Retroviral/YR,1248,eukaryote,nonUG\r
A0A7D9ILK3,LTR/Retroviral/YR,1249,eukaryote,nonUG\r
A0A6J8AI70,LTR/Retroviral/YR,1249,eukaryote,nonUG\r
A0A7D9LXZ1,LTR/Retroviral/YR,1250,eukaryote,nonUG\r
A0A6S7IQH2,LTR/Retroviral/YR,1250,eukaryote,nonUG\r
A0A6S7I3T9,LTR/Retroviral/YR,1251,eukaryote,nonUG\r
A0A6S7IXJ8,LTR/Retroviral/YR,1251,eukaryote,nonUG\r
A0A6J8AUM1,LTR/Retroviral/YR,1252,eukaryote,nonUG\r
A0A2B4SG21,LTR/Retroviral/YR,1252,eukaryote,nonUG\r
A0A2B4RV04,LTR/Retroviral/YR,1253,eukaryote,nonUG\r
A0A6P8IQI6,LTR/Retroviral/YR,1253,eukaryote,nonUG\r
A0A0V1M4C3,LTR/Retroviral/YR,1254,eukaryote,nonUG\r
A0A0V0TBT4,LTR/Retroviral/YR,1254,eukaryote,nonUG\r
A0A0V1ND59,LTR/Retroviral/YR,1255,eukaryote,nonUG\r
A0A0V0T281,LTR/Retroviral/YR,1255,eukaryote,nonUG\r
A0A085NBT7,LTR/Retroviral/YR,1256,eukaryote,nonUG\r
A0A0V1CCT2,LTR/Retroviral/YR,1256,eukaryote,nonUG\r
A0A0V0W486,LTR/Retroviral/YR,1257,eukaryote,nonUG\r
A0A0V1ER11,LTR/Retroviral/YR,1257,eukaryote,nonUG\r
A0A0V1KLF4,LTR/Retroviral/YR,1258,eukaryote,nonUG\r
A0A7D9HVL0,LTR/Retroviral/YR,1258,eukaryote,nonUG\r
A0A2B4S2P5,LTR/Retroviral/YR,1259,eukaryote,nonUG\r
A0A6S7J235,LTR/Retroviral/YR,1259,eukaryote,nonUG\r
A0A2A6BXJ1,LTR/Retroviral/YR,1260,eukaryote,nonUG\r
A0A2A6CF47,LTR/Retroviral/YR,1260,eukaryote,nonUG\r
A0A4U8UK48,LTR/Retroviral/YR,1261,eukaryote,nonUG\r
A0A016WVH2,LTR/Retroviral/YR,1261,eukaryote,nonUG\r
A0A0M3JYH5,LTR/Retroviral/YR,1262,eukaryote,nonUG\r
A0A016U778,LTR/Retroviral/YR,1262,eukaryote,nonUG\r
A0A7I4Z338,LTR/Retroviral/YR,1263,eukaryote,nonUG\r
A0A7E4ZZU5,LTR/Retroviral/YR,1263,eukaryote,nonUG\r
G0P8Y8,LTR/Retroviral/YR,1264,eukaryote,nonUG\r
A0A2H2HUS1,LTR/Retroviral/YR,1264,eukaryote,nonUG\r
A0A0C2GKL2,LTR/Retroviral/YR,1265,eukaryote,nonUG\r
A0A3P7FWQ5,LTR/Retroviral/YR,1265,eukaryote,nonUG\r
A0A1I7W1D6,LTR/Retroviral/YR,1266,eukaryote,nonUG\r
A0A4U5P0V0,LTR/Retroviral/YR,1266,eukaryote,nonUG\r
A0A0K0DET9,LTR/Retroviral/YR,1267,eukaryote,nonUG\r
A0A0C2GC61,LTR/Retroviral/YR,1267,eukaryote,nonUG\r
E3NEM2,LTR/Retroviral/YR,1268,eukaryote,nonUG\r
A0A0C2CH59,LTR/Retroviral/YR,1268,eukaryote,nonUG\r
A0A016TWR9,LTR/Retroviral/YR,1269,eukaryote,nonUG\r
A0A811L5S0,LTR/Retroviral/YR,1269,eukaryote,nonUG\r
A0A6V7Y9S0,LTR/Retroviral/YR,1270,eukaryote,nonUG\r
A0A6V7XLD1,LTR/Retroviral/YR,1270,eukaryote,nonUG\r
A0A7E4VQC1,LTR/Retroviral/YR,1271,eukaryote,nonUG\r
A0A1I8AFR5,LTR/Retroviral/YR,1271,eukaryote,nonUG\r
A0A016T4S0,LTR/Retroviral/YR,1272,eukaryote,nonUG\r
A0A6V7UDZ2,LTR/Retroviral/YR,1272,eukaryote,nonUG\r
A0A6V7USW7,LTR/Retroviral/YR,1273,eukaryote,nonUG\r
A0A4U5MMV4,LTR/Retroviral/YR,1273,eukaryote,nonUG\r
A0A6V7XLE3,LTR/Retroviral/YR,1274,eukaryote,nonUG\r
A0A0N4U025,LTR/Retroviral/YR,1274,eukaryote,nonUG\r
A0A1I8BIN4,LTR/Retroviral/YR,1275,eukaryote,nonUG\r
A0A6V7WXJ5,LTR/Retroviral/YR,1275,eukaryote,nonUG\r
A0A6V7VWZ2,LTR/Retroviral/YR,1276,eukaryote,nonUG\r
A0A8B6GYS8,LTR/Retroviral/YR,1276,eukaryote,nonUG\r
A0A1S4EA58,LTR/Retroviral/YR,1277,eukaryote,nonUG\r
A0A6V7XBZ1,LTR/Retroviral/YR,1277,eukaryote,nonUG\r
A0A6V7UM30,LTR/Retroviral/YR,1278,eukaryote,nonUG\r
A0A6H5GQ66,LTR/Retroviral/YR,1278,eukaryote,nonUG\r
A0A1I7WSC7,LTR/Retroviral/YR,1279,eukaryote,nonUG\r
A0A7E5A051,LTR/Retroviral/YR,1279,eukaryote,nonUG\r
A0A0R3RB04,LTR/Retroviral/YR,1280,eukaryote,nonUG\r
A0A8B6BQ14,LTR/Retroviral/YR,1280,eukaryote,nonUG\r
A0A8B6GJ38,LTR/Retroviral/YR,1281,eukaryote,nonUG\r
A0A1S3K1Z5,LTR/Retroviral/YR,1281,eukaryote,nonUG\r
A0A6A4WJR6,LTR/Retroviral/YR,1282,eukaryote,nonUG\r
A0A5B7GG27,LTR/Retroviral/YR,1282,eukaryote,nonUG\r
A0A6A4WXV3,LTR/Retroviral/YR,1283,eukaryote,nonUG\r
A0A811L437,LTR/Retroviral/YR,1283,eukaryote,nonUG\r
A0A1I7SHH4,LTR/Retroviral/YR,1284,eukaryote,nonUG\r
A0A4Y2WAS0,LTR/Retroviral/YR,1284,eukaryote,nonUG\r
A0A2R5LFC3,LTR/Retroviral/YR,1285,eukaryote,nonUG\r
A0A6A4WS78,LTR/Retroviral/YR,1285,eukaryote,nonUG\r
A0A4Y2B3S1,LTR/Retroviral/YR,1286,eukaryote,nonUG\r
A0A4Y2LB43,LTR/Retroviral/YR,1286,eukaryote,nonUG\r
A0A4Y2KMQ7,LTR/Retroviral/YR,1287,eukaryote,nonUG\r
A0A4Y2F2R6,LTR/Retroviral/YR,1287,eukaryote,nonUG\r
A0A4Y2JJ75,LTR/Retroviral/YR,1288,eukaryote,nonUG\r
A0A4Y2IH94,LTR/Retroviral/YR,1288,eukaryote,nonUG\r
A0A4Y2RDK2,LTR/Retroviral/YR,1289,eukaryote,nonUG\r
A0A4Y2H1Z7,LTR/Retroviral/YR,1289,eukaryote,nonUG\r
A0A4Y2GKB8,LTR/Retroviral/YR,1290,eukaryote,nonUG\r
A0A226DR38,LTR/Retroviral/YR,1290,eukaryote,nonUG\r
A0A226CXJ4,LTR/Retroviral/YR,1291,eukaryote,nonUG\r
A0A226EUJ9,LTR/Retroviral/YR,1291,eukaryote,nonUG\r
A0A4Y2HQW4,LTR/Retroviral/YR,1292,eukaryote,nonUG\r
A0A4Y2EFH3,LTR/Retroviral/YR,1292,eukaryote,nonUG\r
A0A4Y2CNZ1,LTR/Retroviral/YR,1293,eukaryote,nonUG\r
A0A4Y2UII4,LTR/Retroviral/YR,1293,eukaryote,nonUG\r
A0A4Y2EVX1,LTR/Retroviral/YR,1294,eukaryote,nonUG\r
A0A4Y2MJU0,LTR/Retroviral/YR,1294,eukaryote,nonUG\r
A0A6J1PPU8,LTR/Retroviral/YR,1295,eukaryote,nonUG\r
A0A6A4WCI8,LTR/Retroviral/YR,1295,eukaryote,nonUG\r
A0A3C1S0Q4,LTR/Retroviral/YR,1296,eukaryote,nonUG\r
A0A444SJL9,LTR/Retroviral/YR,1296,eukaryote,nonUG\r
A0A7D9KAK9,LTR/Retroviral/YR,1297,eukaryote,nonUG\r
A0A2B4RI90,LTR/Retroviral/YR,1297,eukaryote,nonUG\r
A0A7D9HIU8,LTR/Retroviral/YR,1298,eukaryote,nonUG\r
A0A2B4RJY1,LTR/Retroviral/YR,1298,eukaryote,nonUG\r
A0A2B4S6I6,LTR/Retroviral/YR,1299,eukaryote,nonUG\r
A0A1X7TW76,LTR/Retroviral/YR,1299,eukaryote,nonUG\r
A0A6S7IV84,LTR/Retroviral/YR,1300,eukaryote,nonUG\r
A0A6S7FRE1,LTR/Retroviral/YR,1300,eukaryote,nonUG\r
A0A2B4R4A0,LTR/Retroviral/YR,1301,eukaryote,nonUG\r
A0A7R8V357,LTR/Retroviral/YR,1301,eukaryote,nonUG\r
A0A6J2U3I5,LTR/Retroviral/YR,1302,eukaryote,nonUG\r
A0A6P6Y677,LTR/Retroviral/YR,1302,eukaryote,nonUG\r
A0A6P7FU43,LTR/Retroviral/YR,1303,eukaryote,nonUG\r
A0A6P6YIH6,LTR/Retroviral/YR,1303,eukaryote,nonUG\r
A0A1Y3BT69,LTR/Retroviral/YR,1304,eukaryote,nonUG\r
A0A7J6KNY7,LTR/Retroviral/YR,1304,eukaryote,nonUG\r
C5L4J0,LTR/Retroviral/YR,1305,eukaryote,nonUG\r
A0A7J6KP76,LTR/Retroviral/YR,1305,eukaryote,nonUG\r
A0A7J6KMR3,LTR/Retroviral/YR,1306,eukaryote,nonUG\r
C5KRL1,LTR/Retroviral/YR,1306,eukaryote,nonUG\r
C5K708,LTR/Retroviral/YR,1307,eukaryote,nonUG\r
A0A6A4VR48,LTR/Retroviral/YR,1307,eukaryote,nonUG\r
A0A7J6SUU7,LTR/Retroviral/YR,1308,eukaryote,nonUG\r
A0A5J4VDJ9,LTR/Retroviral/YR,1308,eukaryote,nonUG\r
A0A5J4WQ79,LTR/Retroviral/YR,1309,eukaryote,nonUG\r
A0A5J4VVP4,LTR/Retroviral/YR,1309,eukaryote,nonUG\r
A0A5J4UJG1,LTR/Retroviral/YR,1310,eukaryote,nonUG\r
A0A5J4UAV4,LTR/Retroviral/YR,1310,eukaryote,nonUG\r
A0A5J4WD04,LTR/Retroviral/YR,1311,eukaryote,nonUG\r
A0A5J4TMB5,LTR/Retroviral/YR,1311,eukaryote,nonUG\r
A0A5J4TP13,LTR/Retroviral/YR,1312,eukaryote,nonUG\r
A0A5J4UIG9,LTR/Retroviral/YR,1312,eukaryote,nonUG\r
A0A5J4UV70,LTR/Retroviral/YR,1313,eukaryote,nonUG\r
A0A5J4VRF5,LTR/Retroviral/YR,1313,eukaryote,nonUG\r
A0A5J4TY04,LTR/Retroviral/YR,1314,eukaryote,nonUG\r
A0A5J4WR31,LTR/Retroviral/YR,1314,eukaryote,nonUG\r
A0A5J4TYH2,LTR/Retroviral/YR,1315,eukaryote,nonUG\r
A0A5J4VTJ1,LTR/Retroviral/YR,1315,eukaryote,nonUG\r
A0A5J4VY02,LTR/Retroviral/YR,1316,eukaryote,nonUG\r
A0A5J4WP53,LTR/Retroviral/YR,1316,eukaryote,nonUG\r
A0A5J4VXK0,LTR/Retroviral/YR,1317,eukaryote,nonUG\r
A0A5J4V948,LTR/Retroviral/YR,1317,eukaryote,nonUG\r
A0A5J4TVD6,LTR/Retroviral/YR,1318,eukaryote,nonUG\r
A0A5J4VJB5,LTR/Retroviral/YR,1318,eukaryote,nonUG\r
A0A5J4TNH5,LTR/Retroviral/YR,1319,eukaryote,nonUG\r
A0A5J4X0F6,LTR/Retroviral/YR,1319,eukaryote,nonUG\r
A0A5J4WDS5,LTR/Retroviral/YR,1320,eukaryote,nonUG\r
A0A5J4VY81,LTR/Retroviral/YR,1320,eukaryote,nonUG\r
A0A5J4U2T7,LTR/Retroviral/YR,1321,eukaryote,nonUG\r
A0A5J4X4Y3,LTR/Retroviral/YR,1321,eukaryote,nonUG\r
A0A5J4U818,LTR/Retroviral/YR,1322,eukaryote,nonUG\r
A0A5J4WMF1,LTR/Retroviral/YR,1322,eukaryote,nonUG\r
A0A5J4VL13,LTR/Retroviral/YR,1323,eukaryote,nonUG\r
A0A5J4V207,LTR/Retroviral/YR,1323,eukaryote,nonUG\r
A0A5J4VBN2,LTR/Retroviral/YR,1324,eukaryote,nonUG\r
A0A5J4X765,LTR/Retroviral/YR,1324,eukaryote,nonUG\r
A0A5J4WP64,LTR/Retroviral/YR,1325,eukaryote,nonUG\r
A0A2D4M3Y6,LTR/Retroviral/YR,1325,eukaryote,nonUG\r
A0A6I9Y928,LTR/Retroviral/YR,1326,eukaryote,nonUG\r
A0A402ETG6,LTR/Retroviral/YR,1326,eukaryote,nonUG\r
A0A803K510,LTR/Retroviral/YR,1327,eukaryote,nonUG\r
A0A803KB01,LTR/Retroviral/YR,1327,eukaryote,nonUG\r
A0A8B6GDG0,LTR/Retroviral/YR,1328,eukaryote,nonUG\r
A0A8B6DC45,LTR/Retroviral/YR,1328,eukaryote,nonUG\r
A0A8B6H8B1,LTR/Retroviral/YR,1329,eukaryote,nonUG\r
A0A2G8JCK1,LTR/Retroviral/YR,1329,eukaryote,nonUG\r
A0A2G8KLY4,LTR/Retroviral/YR,1330,eukaryote,nonUG\r
A0A7M7NDD2,LTR/Retroviral/YR,1330,eukaryote,nonUG\r
A0A661TEM3,LTR/Retroviral/YR,1331,eukaryote,nonUG\r
A0A3B1IRS8,LTR/Retroviral/YR,1331,eukaryote,nonUG\r
A0A0B7NDY8,LTR/Retroviral/YR,1332,eukaryote,nonUG\r
I1CTE1,LTR/Retroviral/YR,1332,eukaryote,nonUG\r
I1CC29,LTR/Retroviral/YR,1333,eukaryote,nonUG\r
I1C6B0,LTR/Retroviral/YR,1333,eukaryote,nonUG\r
A0A5B7GTV7,LTR/Retroviral/YR,1334,eukaryote,nonUG\r
A0A8B6ETM9,LTR/Retroviral/YR,1334,eukaryote,nonUG\r
A0A6S7JLU2,LTR/Retroviral/YR,1335,eukaryote,nonUG\r
A0A2B4S5Q4,LTR/Retroviral/YR,1335,eukaryote,nonUG\r
A0A164M267,LTR/Retroviral/YR,1336,eukaryote,nonUG\r
Q55H48,LTR/Retroviral/YR,1336,eukaryote,nonUG\r
Q55H52,LTR/Retroviral/YR,1337,eukaryote,nonUG\r
A0A6J8CDJ6,LTR/Retroviral/YR,1337,eukaryote,nonUG\r
A0A7M6DR42,LTR/Retroviral/YR,1338,eukaryote,nonUG\r
A0A164W7N8,LTR/Retroviral/YR,1338,eukaryote,nonUG\r
A0A8B6H5A6,LTR/Retroviral/YR,1339,eukaryote,nonUG\r
A0A2B4RNW1,LTR/Retroviral/YR,1339,eukaryote,nonUG\r
A0A162SCA3,LTR/Retroviral/YR,1340,eukaryote,nonUG\r
A0A164T8K5,LTR/Retroviral/YR,1340,eukaryote,nonUG\r
A0A162RAT6,LTR/Retroviral/YR,1341,eukaryote,nonUG\r
A0A162QI74,LTR/Retroviral/YR,1341,eukaryote,nonUG\r
A0A162DCU3,LTR/Retroviral/YR,1342,eukaryote,nonUG\r
A0A164MH56,LTR/Retroviral/YR,1342,eukaryote,nonUG\r
A0A164MR36,LTR/Retroviral/YR,1343,eukaryote,nonUG\r
H3B8L7,LTR/Retroviral/YR,1343,eukaryote,nonUG\r
A0A0B1T6Y4,LTR/Retroviral/YR,1344,eukaryote,nonUG\r
A0A2B4SHI9,LTR/Retroviral/YR,1344,eukaryote,nonUG\r
A0A1T2L0C8,LTR/Retroviral/YR,1345,eukaryote,nonUG\r
A0A0B7MW62,LTR/Retroviral/YR,1345,eukaryote,nonUG\r
A0A2B4REE5,LTR/Retroviral/YR,1346,eukaryote,nonUG\r
A0A4D5REV5,LTR/Retroviral/YR,1346,eukaryote,nonUG\r
A0A6H5H3L6,LTR/Retroviral/YR,1347,eukaryote,nonUG\r
A0A0K8T700,LTR/Retroviral/YR,1347,eukaryote,nonUG\r
A0A0C9Q0M0,LTR/Retroviral/YR,1348,eukaryote,nonUG\r
A0A811WK47,LTR/Retroviral/YR,1348,eukaryote,nonUG\r
A0A811WDV5,LTR/Retroviral/YR,1349,eukaryote,nonUG\r
H9JTW1,LTR/Retroviral/YR,1349,eukaryote,nonUG\r
A0A146LQD6,LTR/Retroviral/YR,1350,eukaryote,nonUG\r
A0A0K8SFG0,LTR/Retroviral/YR,1350,eukaryote,nonUG\r
A0A139W8L4,LTR/Retroviral/YR,1351,eukaryote,nonUG\r
A0A226D534,LTR/Retroviral/YR,1351,eukaryote,nonUG\r
A0A3L8DG69,LTR/Retroviral/YR,1352,eukaryote,nonUG\r
A0A226DEU9,LTR/Retroviral/YR,1352,eukaryote,nonUG\r
A0A2H1W6Z8,LTR/Retroviral/YR,1353,eukaryote,nonUG\r
A0A653BK08,LTR/Retroviral/YR,1353,eukaryote,nonUG\r
A0A6S7JKP0,LTR/Retroviral/YR,1354,eukaryote,nonUG\r
A0A7D9IN06,LTR/Retroviral/YR,1354,eukaryote,nonUG\r
A0A2B4RSL5,LTR/Retroviral/YR,1355,eukaryote,nonUG\r
A0A8B6HNJ7,LTR/Retroviral/YR,1355,eukaryote,nonUG\r
A0A0P4W0U3,LTR/Retroviral/YR,1356,eukaryote,nonUG\r
A0A8B6BHI7,LTR/Retroviral/YR,1356,eukaryote,nonUG\r
A0A6J8A4K8,LTR/Retroviral/YR,1357,eukaryote,nonUG\r
A0A7M5XH70,LTR/Retroviral/YR,1357,eukaryote,nonUG\r
A0A164FH48,LTR/Retroviral/YR,1358,eukaryote,nonUG\r
A0A1X7U5H8,LTR/Retroviral/YR,1358,eukaryote,nonUG\r
A0A8B6CK77,LTR/Retroviral/YR,1359,eukaryote,nonUG\r
A0A7M7NWF3,LTR/Retroviral/YR,1359,eukaryote,nonUG\r
A0A7M5XH02,LTR/Retroviral/YR,1360,eukaryote,nonUG\r
A0A7D9IUT3,LTR/Retroviral/YR,1360,eukaryote,nonUG\r
A0A0B1S9B3,LTR/Retroviral/YR,1361,eukaryote,nonUG\r
A0A2G9TSR6,LTR/Retroviral/YR,1361,eukaryote,nonUG\r
A0A368G6A9,LTR/Retroviral/YR,1362,eukaryote,nonUG\r
A0A553P8H4,LTR/Retroviral/YR,1362,eukaryote,nonUG\r
A0A2G5TUW2,LTR/Retroviral/YR,1363,eukaryote,nonUG\r
A0A4X3NZF0,LTR/Retroviral/YR,1363,eukaryote,nonUG\r
A0A7E4V160,LTR/Retroviral/YR,1364,eukaryote,nonUG\r
A0A4U5PF94,LTR/Retroviral/YR,1364,eukaryote,nonUG\r
A0A3M6V3G2,LTR/Retroviral/YR,1365,eukaryote,nonUG\r
A0A432I2M4,LTR/Retroviral/YR,1365,eukaryote,nonUG\r
A0A6J8BRV6,LTR/Retroviral/YR,1366,eukaryote,nonUG\r
A0A6J8ANH1,LTR/Retroviral/YR,1366,eukaryote,nonUG\r
A0A6H5KLE3,LTR/Retroviral/YR,1367,eukaryote,nonUG\r
A0A6H5JIS8,LTR/Retroviral/YR,1367,eukaryote,nonUG\r
E4WZ46,LTR/Retroviral/YR,1368,eukaryote,nonUG\r
A0A2D6FFC2,LTR/Retroviral/YR,1368,eukaryote,nonUG\r
E4X2F4,LTR/Retroviral/YR,1369,eukaryote,nonUG\r
A0A250XTY5,LTR/Retroviral/YR,1369,eukaryote,nonUG\r
A0A150FYN4,LTR/Retroviral/YR,1370,eukaryote,nonUG\r
A0A0D2NLB6,LTR/Retroviral/YR,1370,eukaryote,nonUG\r
A0A1Y1I905,LTR/Retroviral/YR,1371,eukaryote,nonUG\r
A0A1Y1HZT4,LTR/Retroviral/YR,1371,eukaryote,nonUG\r
A0A0D2LN16,LTR/Retroviral/YR,1372,eukaryote,nonUG\r
A0A150FZB4,LTR/Retroviral/YR,1372,eukaryote,nonUG\r
A0A1Y1HI15,LTR/Retroviral/YR,1373,eukaryote,nonUG\r
A0A7S0RGH3,LTR/Retroviral/YR,1373,eukaryote,nonUG\r
A0A6S8DWF2,LTR/Retroviral/YR,1374,eukaryote,nonUG\r
A0A7S0VWH1,LTR/Retroviral/YR,1374,eukaryote,nonUG\r
A0A7S0Z4Q6,LTR/Retroviral/YR,1375,eukaryote,nonUG\r
A0A7S0QVN1,LTR/Retroviral/YR,1375,eukaryote,nonUG\r
L8GLF5,LTR/Retroviral/YR,1376,eukaryote,nonUG\r
A0A6A5C1B9,LTR/Retroviral/YR,1376,eukaryote,nonUG\r
A0A0N5BWB8,LTR/Retroviral/YR,1377,eukaryote,nonUG\r
A0A0N5C9A7,LTR/Retroviral/YR,1377,eukaryote,nonUG\r
A0A0N5BR41,LTR/Retroviral/YR,1378,eukaryote,nonUG\r
A0A391NQ35,LTR/Retroviral/YR,1378,eukaryote,nonUG\r
A0A391P437,LTR/Retroviral/YR,1379,eukaryote,nonUG\r
A0A7S1IKF5,LTR/Retroviral/YR,1379,eukaryote,nonUG\r
A0A0N5BK06,LTR/Retroviral/YR,1380,eukaryote,nonUG\r
A0A0N5BIH0,LTR/Retroviral/YR,1380,eukaryote,nonUG\r
A0A0N5B908,LTR/Retroviral/YR,1381,eukaryote,nonUG\r
A0A0N5BKD0,LTR/Retroviral/YR,1381,eukaryote,nonUG\r
A0A0N4ZIN9,LTR/Retroviral/YR,1382,eukaryote,nonUG\r
A0A6A4VVR0,LTR/Retroviral/YR,1382,eukaryote,nonUG\r
A0A8B6DNZ9,LTR/Retroviral/YR,1383,eukaryote,nonUG\r
A0A432R1B6,LTR/Retroviral/YR,1383,eukaryote,nonUG\r
A0A6J7ZWG4,LTR/Retroviral/YR,1384,eukaryote,nonUG\r
A0A8B6CAB5,LTR/Retroviral/YR,1384,eukaryote,nonUG\r
A0A402FWM2,LTR/Retroviral/YR,1385,eukaryote,nonUG\r
A0A6P8QGU0,LTR/Retroviral/YR,1385,eukaryote,nonUG\r
A0A1D1VSF7,LTR/Retroviral/YR,1386,eukaryote,nonUG\r
A0A1W0XEH3,LTR/Retroviral/YR,1386,eukaryote,nonUG\r
A0A1D1W5V8,LTR/Retroviral/YR,1387,eukaryote,nonUG\r
A0A818XN92,LTR/Retroviral/YR,1387,eukaryote,nonUG\r
A0A8B6DBK4,LTR/Retroviral/YR,1388,eukaryote,nonUG\r
A0A6A4WEV3,LTR/Retroviral/YR,1388,eukaryote,nonUG\r
A0A1Q5SY17,LTR/Retroviral/YR,1389,eukaryote,nonUG\r
A0A369K150,LTR/Retroviral/YR,1389,eukaryote,nonUG\r
A0A409WWP8,LTR/Retroviral/YR,1390,eukaryote,nonUG\r
G7E4B9,LTR/Retroviral/YR,1390,eukaryote,nonUG\r
A0A4Q3LYC6,LTR/Retroviral/YR,1391,eukaryote,nonUG\r
A0A432I204,LTR/Retroviral/YR,1391,eukaryote,nonUG\r
A0A1X7V5R9,LTR/Retroviral/YR,1392,eukaryote,nonUG\r
A0A1X7TD39,LTR/Retroviral/YR,1392,eukaryote,nonUG\r
A0A1X7V3E6,LTR/Retroviral/YR,1393,eukaryote,nonUG\r
A0A2B4R6M2,LTR/Retroviral/YR,1393,eukaryote,nonUG\r
A0A7M5XHR6,LTR/Retroviral/YR,1394,eukaryote,nonUG\r
A0A6P5AC02,LTR/Retroviral/YR,1394,eukaryote,nonUG\r
A0A6J8C9H9,LTR/Retroviral/YR,1395,eukaryote,nonUG\r
A0A1I8HAA6,LTR/Retroviral/YR,1395,eukaryote,nonUG\r
A0A1I8JA32,LTR/Retroviral/YR,1396,eukaryote,nonUG\r
A0A6J8BB88,LTR/Retroviral/YR,1396,eukaryote,nonUG\r
A0A6J8AFX8,LTR/Retroviral/YR,1397,eukaryote,nonUG\r
A0A424IHH9,LTR/Retroviral/YR,1397,eukaryote,nonUG\r
A0A521LJ77,LTR/Retroviral/YR,1398,eukaryote,nonUG\r
A0A0M0JVC2,LTR/Retroviral/YR,1398,eukaryote,nonUG\r
A0A2K3DSD1,LTR/Retroviral/YR,1399,eukaryote,nonUG\r
A0A0G4HCV3,LTR/Retroviral/YR,1399,eukaryote,nonUG\r
A0A0G4ESN6,LTR/Retroviral/YR,1400,eukaryote,nonUG\r
A0A814C8M2,LTR/Retroviral/YR,1400,eukaryote,nonUG\r
A0A3M7T2A5,LTR/Retroviral/YR,1401,eukaryote,nonUG\r
A0A3M7T3D2,LTR/Retroviral/YR,1401,eukaryote,nonUG\r
A0A147BHB3,LTR/Retroviral/YR,1402,eukaryote,nonUG\r
A0A7S4D101,LTR/Retroviral/YR,1402,eukaryote,nonUG\r
A0A7S1IYK8,LTR/Retroviral/YR,1403,eukaryote,nonUG\r
A0A7R9FZV0,LTR/Retroviral/YR,1403,eukaryote,nonUG\r
A0A7R9J991,LTR/Retroviral/YR,1404,eukaryote,nonUG\r
A0A6A4VZM4,LTR/Retroviral/YR,1404,eukaryote,nonUG\r
A0A7R9RRK7,LTR/Retroviral/YR,1405,eukaryote,nonUG\r
A0A7S3Z3G3,LTR/Retroviral/YR,1405,eukaryote,nonUG\r
A0A7J6KMT2,LTR/Retroviral/YR,1406,eukaryote,nonUG\r
A0A7J6L5U8,LTR/Retroviral/YR,1406,eukaryote,nonUG\r
A0A7J6NFV0,LTR/Retroviral/YR,1407,eukaryote,nonUG\r
C5LV36,LTR/Retroviral/YR,1407,eukaryote,nonUG\r
A0A7J6R6P0,LTR/Retroviral/YR,1408,eukaryote,nonUG\r
A0A7J6KXQ8,LTR/Retroviral/YR,1408,eukaryote,nonUG\r
A0A7J6TSX9,LTR/Retroviral/YR,1409,eukaryote,nonUG\r
C5LP46,LTR/Retroviral/YR,1409,eukaryote,nonUG\r
C5KV83,LTR/Retroviral/YR,1410,eukaryote,nonUG\r
A0A1B1FKA5,RTL,1410,bacterial,nonUG\r
A0SGM8,RTL,1411,bacterial,nonUG\r
A0A7L9CWU9,RTL,1411,bacterial,nonUG\r
A0A3D3KEW8,UG3,1412,bacterial,UG\r
A0A1T4SE45,UG3,1412,bacterial,UG\r
A0A7G2JF79,UG3,1413,bacterial,UG\r
I3I9S2,UG3,1413,bacterial,UG\r
A0A3D8M4F1,UG3,1414,bacterial,UG\r
A0A7U1CW38,UG3,1414,bacterial,UG\r
B2VC04,UG3,1415,bacterial,UG\r
A0A0V9JX92,UG3,1415,bacterial,UG\r
A0A2N7M0C6,UG3,1416,bacterial,UG\r
A0A7X3NJ76,UG3,1416,bacterial,UG\r
A0A2R7MJ05,UG3,1417,bacterial,UG\r
A0A2W7FG25,UG3,1417,bacterial,UG\r
A0A2E3U3E4,UG3,1418,bacterial,UG\r
G2E3Z5,UG3,1418,bacterial,UG\r
A0A1T1GWD5,UG3,1419,bacterial,UG\r
A0A328C2C3,UG3,1419,bacterial,UG\r
F0EQ61,UG3,1420,bacterial,UG\r
A0A2E2UDY6,UG3,1420,bacterial,UG\r
A0A2N9XBY9,UG3,1421,bacterial,UG\r
A0A2G1LQT6,UG3,1421,bacterial,UG\r
A0A7W4I7A7,UG3,1422,bacterial,UG\r
A0A2L1CWJ6,UG3,1422,bacterial,UG\r
A0A5C8T8G3,UG3,1423,bacterial,UG\r
A0A2L1S4K9,UG3,1423,bacterial,UG\r
A0A3N6N2G1,UG3,1424,bacterial,UG\r
A0A2T5XK54,UG3,1424,bacterial,UG\r
A0A2P2E5C0,UG3,1425,bacterial,UG\r
A0A2S1JUC8,UG3,1425,bacterial,UG\r
A0A7G2TIX4,UG3,1426,bacterial,UG\r
A6WYG7,UG3,1426,bacterial,UG\r
A0A2K9JKS8,UG3,1427,bacterial,UG\r
A0A4U0R397,UG3,1427,bacterial,UG\r
A0A0F9LXC1,UG3,1428,bacterial,UG\r
A0A7Z0MCQ3,UG3,1428,bacterial,UG\r
A0A7H0LG20,UG3,1429,bacterial,UG\r
A0A4Q6CC69,UG3,1429,bacterial,UG\r
A0A7W9R7V2,UG3,1430,bacterial,UG\r
A0A0T7GAG9,UG3,1430,bacterial,UG\r
A0A844WFR5,UG3,1431,bacterial,UG\r
A0A3S5GFV6,UG3,1431,bacterial,UG\r
A0A378R0U2,UG3,1432,bacterial,UG\r
A0A5S3X8W1,UG3,1432,bacterial,UG\r
A0A0C5WR34,UG3,1433,bacterial,UG\r
A0A198FPJ6,UG3,1433,bacterial,UG\r
A0A522VC01,UG3,1434,bacterial,UG\r
A0A4Y8SJM7,UG3,1434,bacterial,UG\r
A0A1P8MLY5,UG3,1435,bacterial,UG\r
A0A437QBS9,UG3,1435,bacterial,UG\r
A0A2T3CI26,UG3,1436,bacterial,UG\r
A0A2S9ELM5,UG3,1436,bacterial,UG\r
A0A2S9MI20,UG3,1437,bacterial,UG\r
A0A840LKT6,UG3,1437,bacterial,UG\r
A0A1H8USG1,UG3,1438,bacterial,UG\r
A0A380YKK6,UG3,1438,bacterial,UG\r
A0A2D5C400,UG3,1439,bacterial,UG\r
A0A5N7TS72,UG3,1439,bacterial,UG\r
A0A5M3Q3U2,UG3,1440,bacterial,UG\r
A0A853JAP8,UG3,1440,bacterial,UG\r
A0A7W9V405,UG3,1441,bacterial,UG\r
A0A514EFN2,UG3,1441,bacterial,UG\r
A0A7G6UQ64,UG3,1442,bacterial,UG\r
A0A1F0PIJ2,UG3,1442,bacterial,UG\r
A0A1H8UY93,UG3,1443,bacterial,UG\r
A0A2D7EBS0,UG3,1443,bacterial,UG\r
A0A7W8DKN4,UG3,1444,bacterial,UG\r
A0A7V7Z7A7,UG3,1444,bacterial,UG\r
A0A318IHJ9,UG3,1445,bacterial,UG\r
A0A198GY05,UG3,1445,bacterial,UG\r
A0A5S3YC56,UG3,1446,bacterial,UG\r
A0A4V1CXM7,UG3,1446,bacterial,UG\r
A0A7I0IXZ9,UG3,1447,bacterial,UG\r
A0A5S3UY71,UG3,1447,bacterial,UG\r
A0A853N3I8,UG3,1448,bacterial,UG\r
A0A073KTZ1,UG3,1448,bacterial,UG\r
S0F813,UG3,1449,bacterial,UG\r
A0A7K0ATT5,UG3,1449,bacterial,UG\r
A0A0S2KLN0,UG3,1450,bacterial,UG\r
A0A2T5RLR9,UG3,1450,bacterial,UG\r
A0A484GEF6,UG3,1451,bacterial,UG\r
A0A2E2K540,UG3,1451,bacterial,UG\r
A0A519PQX9,UG3,1452,bacterial,UG\r
A0A5C7AVY5,UG3,1452,bacterial,UG\r
A0A482ZLM6,UG3,1453,bacterial,UG\r
A0A4Y8BNQ8,UG3,1453,bacterial,UG\r
A0A4V3GQH2,UG3,1454,bacterial,UG\r
A0A495US24,UG3,1454,bacterial,UG\r
A0A7U5VUK1,UG3,1455,bacterial,UG\r
A0A0N0ZUW6,UG3,1455,bacterial,UG\r
A0A2T5XW16,UG3,1456,bacterial,UG\r
A0A842HV12,UG3,1456,bacterial,UG\r
A0A2W4C0S1,UG3,1457,bacterial,UG\r
A0A0M7BDG1,UG3,1457,bacterial,UG\r
A0A6N7W9J4,UG3,1458,bacterial,UG\r
A0A410YHI6,UG3,1458,bacterial,UG\r
A0A1H1PVS7,UG3,1459,bacterial,UG\r
A0A399NUL5,UG3,1459,bacterial,UG\r
A0A846SIR6,UG3,1460,bacterial,UG\r
A0A641APH7,UG3,1460,bacterial,UG\r
A0A399NIH2,UG3,1461,bacterial,UG\r
A0A3L7AAC5,UG3,1461,bacterial,UG\r
A0A4R6YII9,UG3,1462,bacterial,UG\r
A0A0X3TGP6,UG3,1462,bacterial,UG\r
A0A5C5ZWX7,UG3,1463,bacterial,UG\r
A0A2N9K807,UG3,1463,bacterial,UG\r
C0XH00,UG3,1464,bacterial,UG\r
A0A176TM01,UG3,1464,bacterial,UG\r
A0A0R2D3F3,UG3,1465,bacterial,UG\r
A0A081QRP7,UG3,1465,bacterial,UG\r
A0A1G6T626,UG3,1466,bacterial,UG\r
A0A243DXH2,UG3,1466,bacterial,UG\r
A0A3D4QXK3,UG3,1467,bacterial,UG\r
A0A1G4WWH1,UG3,1467,bacterial,UG\r
A0A1L3MVF7,UG3,1468,bacterial,UG\r
A0A7X2N0P3,UG3,1468,bacterial,UG\r
W2VNB1,UG3,1469,bacterial,UG\r
A0A1V5GYZ1,UG3,1469,bacterial,UG\r
A0A316SF13,UG3,1470,bacterial,UG\r
A0A7U0YHR7,UG3,1470,bacterial,UG\r
A0A2N6PNT7,UG3,1471,bacterial,UG\r
A0A1E5TS11,UG3,1471,bacterial,UG\r
D0CBF3,UG3,1472,bacterial,UG\r
A0A2E8G185,UG3,1472,bacterial,UG\r
A0A0Q3WZE0,UG3,1473,bacterial,UG\r
A0A162KAR0,UG3,1473,bacterial,UG\r
A0A845FBP8,UG3,1474,bacterial,UG\r
A0A2H1IGT9,UG3,1474,bacterial,UG\r
A0A1B3SM08,UG3,1475,bacterial,UG\r
A0A366XE81,UG2,1475,bacterial,UG\r
A0A2A4NLW2,UG2,1476,bacterial,UG\r
A0A2T3GU35,UG2,1476,bacterial,UG\r
A0A5C6EYX1,UG2,1477,bacterial,UG\r
A0A258SCF7,UG2,1477,bacterial,UG\r
A0A2E3UIW3,UG2,1478,bacterial,UG\r
A0A519J0P8,UG2,1478,bacterial,UG\r
A0A431NLM2,UG2,1479,bacterial,UG\r
L9M919,UG2,1479,bacterial,UG\r
N9AMU8,UG2,1480,bacterial,UG\r
A0A662ZED9,UG2,1480,bacterial,UG\r
A0A2N8M1Q7,UG2,1481,bacterial,UG\r
A0A7L9BPI3,UG2,1481,bacterial,UG\r
A0A519UAZ6,UG2,1482,bacterial,UG\r
A0A7X1E7D6,UG2,1482,bacterial,UG\r
A0A4V1N0T0,UG2,1483,bacterial,UG\r
A0A4V0NE73,UG2,1483,bacterial,UG\r
A0A2W5MS80,UG2,1484,bacterial,UG\r
A0A855FVE0,UG2,1484,bacterial,UG\r
A0A4U1YLE3,UG2,1485,bacterial,UG\r
L9M893,UG2,1485,bacterial,UG\r
A0A6N6M468,UG2,1486,bacterial,UG\r
A0A0A1F5B6,UG2,1486,bacterial,UG\r
A0A317LKM9,UG2,1487,bacterial,UG\r
A0A2H0IRL9,UG2,1487,bacterial,UG\r
A0A4Q3AYS2,UG2,1488,bacterial,UG\r
A0A1G7GKQ6,UG2,1488,bacterial,UG\r
A0A1H7I854,UG2,1489,bacterial,UG\r
A0A4U1K280,UG2,1489,bacterial,UG\r
A0A7H1NRG3,UG2,1490,bacterial,UG\r
A0A2E1Z2D3,UG2,1490,bacterial,UG\r
A0A7M3MTE3,UG2,1491,bacterial,UG\r
A0A5M8QZA1,UG2,1491,bacterial,UG\r
A0A495PTG5,UG2,1492,bacterial,UG\r
K4IQW5,UG2,1492,bacterial,UG\r
X5DKG6,UG2,1493,bacterial,UG\r
A0A0F5J330,UG2,1493,bacterial,UG\r
A0A3N7EIA8,UG2,1494,bacterial,UG\r
A0A1I1VXD0,UG2,1494,bacterial,UG\r
A0A085ZT93,UG2,1495,bacterial,UG\r
A0A1G6L7V6,UG2,1495,bacterial,UG\r
A0A2U0HT30,UG2,1496,bacterial,UG\r
A0A244D7H2,UG2,1496,bacterial,UG\r
A0A7U3ZLZ8,UG2,1497,bacterial,UG\r
A0A368JPF9,UG2,1497,bacterial,UG\r
A0A3D4XZ88,UG2,1498,bacterial,UG\r
A1ZWF2,UG2,1498,bacterial,UG\r
A0A0N0UYT8,UG2,1499,bacterial,UG\r
A0A418PGM4,UG2,1499,bacterial,UG\r
A0A3D5IE54,UG2,1500,bacterial,UG\r
A0A0R2D451,UG2,1500,bacterial,UG\r
A0A369LJY5,UG2,1501,bacterial,UG\r
R6RAY4,UG2,1501,bacterial,UG\r
G0VNL5,UG2,1502,bacterial,UG\r
A0A069DT10,UG2,1502,bacterial,UG\r
A0A1Y4DIH2,UG2,1503,bacterial,UG\r
A0A396D2T0,UG2,1503,bacterial,UG\r
A0A369P1X0,UG2,1504,bacterial,UG\r
H1CY16,UG2,1504,bacterial,UG\r
A0A3D2I1M6,UG2,1505,bacterial,UG\r
A0A177SI48,UG2,1505,bacterial,UG\r
A0A0B8R483,UG2,1506,bacterial,UG\r
V7ZR78,UG2,1506,bacterial,UG\r
A0A7H4UFP5,UG2,1507,bacterial,UG\r
A0A1X8V8Z4,UG2,1507,bacterial,UG\r
A0A847J2C7,UG2,1508,bacterial,UG\r
A0A0R2L6I1,UG2,1508,bacterial,UG\r
A0A2N9KGA1,UG2,1509,bacterial,UG\r
A0A410DCU5,UG2,1509,bacterial,UG\r
A0A0R2CVH4,UG2,1510,bacterial,UG\r
A0A6C2C7H8,UG2,1510,bacterial,UG\r
R7J7I8,UG2,1511,bacterial,UG\r
A0A0G0UV61,UG2,1511,bacterial,UG\r
A0A374C6A2,UG39,1512,bacterial,UG\r
A0A388TGR1,UG39,1512,bacterial,UG\r
A0A3A9VJR1,UG39,1513,bacterial,UG\r
A0A1N7DYP9,UG39,1513,bacterial,UG\r
A0A521FA38,UG39,1514,bacterial,UG\r
A0A7I0IB25,UG39,1514,bacterial,UG\r
A0A844IJN6,UG39,1515,bacterial,UG\r
A0A202DD68,UG39,1515,bacterial,UG\r
A0A132GWT1,UG39,1516,bacterial,UG\r
A0A0T5VQ03,UG39,1516,bacterial,UG\r
A0A2S6H8F4,UG39,1517,bacterial,UG\r
A0A0F6H7T3,UG39,1517,bacterial,UG\r
A0A7Y4SKK8,UG39,1518,bacterial,UG\r
A0A0C1ZCE0,UG39,1518,bacterial,UG\r
A0A1M6GSR7,UG39,1519,bacterial,UG\r
A0A7S7SM13,UG39,1519,bacterial,UG\r
S3BWX7,TERT,1520,bacterial,nonUG\r
F7VLQ9,TERT,1520,bacterial,nonUG\r
A0A0F8CX36,TERT,1521,bacterial,nonUG\r
A0A2H4S7L6,TERT,1521,bacterial,nonUG\r
A0A420HCP7,TERT,1522,bacterial,nonUG\r
K1WI00,TERT,1522,bacterial,nonUG\r
A0A2B7Z3V0,TERT,1523,bacterial,nonUG\r
A0A167WDB5,TERT,1523,bacterial,nonUG\r
D4B1T6,TERT,1524,bacterial,nonUG\r
A0A3M0WA96,TERT,1524,bacterial,nonUG\r
A0A6H0XZ90,TERT,1525,bacterial,nonUG\r
A0A4Z1PCT2,TERT,1525,bacterial,nonUG\r
A0A7C8K1L3,TERT,1526,bacterial,nonUG\r
A0A1U7LWB7,TERT,1526,bacterial,nonUG\r
A0A2H9TM71,TERT,1527,bacterial,nonUG\r
A0A1B9FUA0,TERT,1527,bacterial,nonUG\r
A0A238FDL9,TERT,1528,bacterial,nonUG\r
A0A507BKF3,TERT,1528,bacterial,nonUG\r
A0A2S4WE31,TERT,1529,bacterial,nonUG\r
A0A166L9R7,TERT,1529,bacterial,nonUG\r
A0A4S4L3I3,TERT,1530,bacterial,nonUG\r
A0A0P1BIP6,TERT,1530,bacterial,nonUG\r
R9PDU8,TERT,1531,bacterial,nonUG\r
A0A2Z6RFJ2,TERT,1531,bacterial,nonUG\r
A0A433QVH5,TERT,1532,bacterial,nonUG\r
A0A261Y594,TERT,1532,bacterial,nonUG\r
L8GIB5,TERT,1533,bacterial,nonUG\r
G7DX60,TERT,1533,bacterial,nonUG\r
A0A4T0FTY4,TERT,1534,bacterial,nonUG\r
A8PXX5,TERT,1534,bacterial,nonUG\r
A0A0W4ZUK2,TERT,1535,bacterial,nonUG\r
A0A0J9X2K1,TERT,1535,bacterial,nonUG\r
A0A5E8B021,TERT,1536,bacterial,nonUG\r
A0A1D8NE89,TERT,1536,bacterial,nonUG\r
A0A167CQ75,TERT,1537,bacterial,nonUG\r
A0A060T762,TERT,1537,bacterial,nonUG\r
T0T6J8,TERT,1538,bacterial,nonUG\r
O13339,TERT,1538,bacterial,nonUG\r
A0A1C7NQG5,TERT,1539,bacterial,nonUG\r
A0A367JII0,TERT,1539,bacterial,nonUG\r
A0A163JJV9,TERT,1540,bacterial,nonUG\r
A0A2T9YQ49,TERT,1540,bacterial,nonUG\r
A0A2U1J8T9,TERT,1541,bacterial,nonUG\r
A0A7F8K3T8,TERT,1541,bacterial,nonUG\r
G1RJV5,TERT,1542,bacterial,nonUG\r
A0A674IV00,TERT,1542,bacterial,nonUG\r
A0A0P7V299,TERT,1543,bacterial,nonUG\r
A0A669BWS8,TERT,1543,bacterial,nonUG\r
A0A4W4GFP9,TERT,1544,bacterial,nonUG\r
A0A0D2UNU5,TERT,1544,bacterial,nonUG\r
A0A6P5ARC4,TERT,1545,bacterial,nonUG\r
A0A7G6KMQ9,TERT,1545,bacterial,nonUG\r
A0A812BHG3,TERT,1546,bacterial,nonUG\r
A0A2G8LKF6,TERT,1546,bacterial,nonUG\r
A0A7G6KMQ5,TERT,1547,bacterial,nonUG\r
J7SF03,TERT,1547,bacterial,nonUG\r
A0A7G6KMQ8,TERT,1548,bacterial,nonUG\r
A0A2C9LAV3,TERT,1548,bacterial,nonUG\r
A0A7S4AJ37,TERT,1549,bacterial,nonUG\r
A0A1Z5KLG2,TERT,1549,bacterial,nonUG\r
K0STL0,TERT,1550,bacterial,nonUG\r
A0A7S2KCK6,TERT,1550,bacterial,nonUG\r
A0A7S4ERK4,TERT,1551,bacterial,nonUG\r
A0A3P3YKG3,TERT,1551,bacterial,nonUG\r
A0A7S3LIC1,TERT,1552,bacterial,nonUG\r
A0A1X7V5M0,TERT,1552,bacterial,nonUG\r
J7S167,TERT,1553,bacterial,nonUG\r
A0A7M6DQ77,TERT,1553,bacterial,nonUG\r
A0A369SLN0,TERT,1554,bacterial,nonUG\r
A0A7D9HHD0,TERT,1554,bacterial,nonUG\r
L1JKP9,TERT,1555,bacterial,nonUG\r
A0A0A9BFL4,TERT,1555,bacterial,nonUG\r
D5MD95,TERT,1556,bacterial,nonUG\r
A0A6J0K394,TERT,1556,bacterial,nonUG\r
A0A5B8MNC7,TERT,1557,bacterial,nonUG\r
A0A0C5BXA6,TERT,1557,bacterial,nonUG\r
A0A061SFG8,TERT,1558,bacterial,nonUG\r
A4RWB2,TERT,1558,bacterial,nonUG\r
A0A2P6P0L2,TERT,1559,bacterial,nonUG\r
A0A075B102,TERT,1559,bacterial,nonUG\r
A0A7S3A3V2,TERT,1560,bacterial,nonUG\r
M2XLQ7,TERT,1560,bacterial,nonUG\r
A0A2V3IP09,TERT,1561,bacterial,nonUG\r
A0A5J4YN28,TERT,1561,bacterial,nonUG\r
A0A7J7IE94,TERT,1562,bacterial,nonUG\r
A0A4Z1TBT4,TERT,1562,bacterial,nonUG\r
A8B4E2,TERT,1563,bacterial,nonUG\r
A0A152AA99,TERT,1563,bacterial,nonUG\r
A0A6G0WJV8,TERT,1564,bacterial,nonUG\r
T0QQ33,TERT,1564,bacterial,nonUG\r
A0A662YC62,TERT,1565,bacterial,nonUG\r
A0A512UB85,TERT,1565,bacterial,nonUG\r
A0A1L0BF94,TERT,1566,bacterial,nonUG\r
A0A0L0NVK6,TERT,1566,bacterial,nonUG\r
Q6BUF6,TERT,1567,bacterial,nonUG\r
G8YI25,TERT,1567,bacterial,nonUG\r
C5MCQ7,TERT,1568,bacterial,nonUG\r
A5DTL1,TERT,1568,bacterial,nonUG\r
A0A642UKI5,TERT,1569,bacterial,nonUG\r
A0A421J5T9,TERT,1569,bacterial,nonUG\r
A0A1E4TXF2,TERT,1570,bacterial,nonUG\r
A0A061BK43,TERT,1570,bacterial,nonUG\r
A0A0H5BYC7,TERT,1571,bacterial,nonUG\r
K0KF00,TERT,1571,bacterial,nonUG\r
A0A1Q2YJ99,TERT,1572,bacterial,nonUG\r
A0A7D9GZC3,TERT,1572,bacterial,nonUG\r
W1Q9Z6,TERT,1573,bacterial,nonUG\r
A0A0P1KRT3,TERT,1573,bacterial,nonUG\r
A0A0C7MW14,TERT,1574,bacterial,nonUG\r
A0A1G4MAW1,TERT,1574,bacterial,nonUG\r
I2H487,TERT,1575,bacterial,nonUG\r
G0WGY9,TERT,1575,bacterial,nonUG\r
G8JM93,TERT,1576,bacterial,nonUG\r
A0A0W0CC56,TERT,1576,bacterial,nonUG\r
A0A376B1U5,TERT,1577,bacterial,nonUG\r
A0A1G4JB89,TERT,1577,bacterial,nonUG\r
A0A1B2JA37,TERT,1578,bacterial,nonUG\r
A0A1L0AZG6,TERT,1578,bacterial,nonUG\r
A0A1W0E3Z1,TERT,1579,bacterial,nonUG\r
A0A1Y1S577,TERT,1579,bacterial,nonUG\r
R0KPC8,TERT,1580,bacterial,nonUG\r
A0A0F9W9V6,TERT,1580,bacterial,nonUG\r
T0L829,TERT,1581,bacterial,nonUG\r
A0A0B2UKH5,TERT,1581,bacterial,nonUG\r
L7JT26,TERT,1582,bacterial,nonUG\r
A0A4Q9KY89,TERT,1582,bacterial,nonUG\r
A0A177EJD2,TERT,1583,bacterial,nonUG\r
A0A177EG38,TERT,1583,bacterial,nonUG\r
A0A059F598,TERT,1584,bacterial,nonUG\r
L1LBS7,TERT,1584,bacterial,nonUG\r
A0A2H6KHH2,TERT,1585,bacterial,nonUG\r
A0A2T7I0S8,TERT,1585,bacterial,nonUG\r
A0A3B0NED1,TERT,1586,bacterial,nonUG\r
A0A1N6LXK0,TERT,1586,bacterial,nonUG\r
O77448,TERT,1587,bacterial,nonUG\r
A0A0V0R041,TERT,1587,bacterial,nonUG\r
O00939,TERT,1588,bacterial,nonUG\r
A0DPN6,TERT,1588,bacterial,nonUG\r
A0A1J5X6Y5,TERT,1589,bacterial,nonUG\r
A0A2R5GGI6,TERT,1589,bacterial,nonUG\r
A0A1D1W0H3,TERT,1590,bacterial,nonUG\r
A5HE93,TERT,1590,bacterial,nonUG\r
T1J3Z4,TERT,1591,bacterial,nonUG\r
A0A085LWK5,TERT,1591,bacterial,nonUG\r
A0A813UEL6,TERT,1592,bacterial,nonUG\r
A0A1B6DPG7,TERT,1592,bacterial,nonUG\r
A0A482X284,TERT,1593,bacterial,nonUG\r
A0A6P7UGT1,TERT,1593,bacterial,nonUG\r
A0A2P2IAG7,TERT,1594,bacterial,nonUG\r
A0A1B1SN26,TERT,1594,bacterial,nonUG\r
A0A0P6A2E9,TERT,1595,bacterial,nonUG\r
A0A834J8V0,TERT,1595,bacterial,nonUG\r
A0A6J3KU98,TERT,1596,bacterial,nonUG\r
E9JBZ2,TERT,1596,bacterial,nonUG\r
A0A6P3Y6L7,TERT,1597,bacterial,nonUG\r
A0A834Y692,TERT,1597,bacterial,nonUG\r
A0A6J0BAA1,TERT,1598,bacterial,nonUG\r
A0A1B6M5A4,TERT,1598,bacterial,nonUG\r
A0A6L2PQ53,TERT,1599,bacterial,nonUG\r
A0A2H8TF82,TERT,1599,bacterial,nonUG\r
E0VPI4,TERT,1600,bacterial,nonUG\r
A0A7R9RH75,TERT,1600,bacterial,nonUG\r
A0A0A9X3C8,TERT,1601,bacterial,nonUG\r
A0A6J1RRM0,TERT,1601,bacterial,nonUG\r
A0A6P6XZN2,TERT,1602,bacterial,nonUG\r
A0A834R6R0,TERT,1602,bacterial,nonUG\r
F1KU50,TERT,1603,bacterial,nonUG\r
A0A0M3KB70,TERT,1603,bacterial,nonUG\r
A0A7J7IUN8,TERT,1604,bacterial,nonUG\r
A0A2T0FHL3,TERT,1604,bacterial,nonUG\r
A0A4U5MQE4,TERT,1605,bacterial,nonUG\r
A0A811JSL9,TERT,1605,bacterial,nonUG\r
A0A183BHQ7,TERT,1606,bacterial,nonUG\r
A0A6G0UQK9,TERT,1606,bacterial,nonUG\r
A0A7E4ZYH4,TERT,1607,bacterial,nonUG\r
O45321,TERT,1607,bacterial,nonUG\r
A0A7I4XW70,TERT,1608,bacterial,nonUG\r
G1BJ46,TERT,1608,bacterial,nonUG\r
A0A1X0P3A6,TERT,1609,bacterial,nonUG\r
A0A4E0S0J8,TERT,1609,bacterial,nonUG\r
A0A068YH80,TERT,1610,bacterial,nonUG\r
A0A815E2G7,PLE,1610,bacterial,nonUG\r
A0A821FMS9,PLE,1611,bacterial,nonUG\r
A0A817QV86,PLE,1611,bacterial,nonUG\r
A0A7M7PTB2,PLE,1612,bacterial,nonUG\r
J9HS23,PLE,1612,bacterial,nonUG\r
A0A5S6R5A3,PLE,1613,bacterial,nonUG\r
Q7RTK8,PLE,1613,bacterial,nonUG\r
A0A7M3PTT3,PLE,1614,bacterial,nonUG\r
A0A0A9WSN7,PLE,1614,bacterial,nonUG\r
A0A069DWI3,PLE,1615,bacterial,nonUG\r
A0A1Y1M9R5,PLE,1615,bacterial,nonUG\r
A0A1W7R692,PLE,1616,bacterial,nonUG\r
A0A817UER1,PLE,1616,bacterial,nonUG\r
A0A6P7VJA7,PLE,1617,bacterial,nonUG\r
A0A650BXI3,GII intron,1617,bacterial,nonUG\r
A0A2P1G843,GII intron,1618,bacterial,nonUG\r
A0A2Z6DTF1,GII intron,1618,bacterial,nonUG\r
A0A6B9P6C7,GII intron,1619,bacterial,nonUG\r
A0A2Z6DTF0,GII intron,1619,bacterial,nonUG\r
A0A5P8DJT5,GII intron,1620,bacterial,nonUG\r
A0A5P9NW17,GII intron,1620,bacterial,nonUG\r
Q0R4X8,GII intron,1621,bacterial,nonUG\r
A0A650BXP4,GII intron,1621,bacterial,nonUG\r
A0A5P9NXH7,GII intron,1622,bacterial,nonUG\r
A0A2K1JBR1,GII intron,1622,bacterial,nonUG\r
A0A5N6L0M6,GII intron,1623,bacterial,nonUG\r
A0A1Y0AZM1,GII intron,1623,bacterial,nonUG\r
A0A101LZF7,GII intron,1624,bacterial,nonUG\r
A0A101LU67,GII intron,1624,bacterial,nonUG\r
A0A650AKN0,GII intron,1625,bacterial,nonUG\r
A0A2R4A3T3,GII intron,1625,bacterial,nonUG\r
A0A2U9GJA7,GII intron,1626,bacterial,nonUG\r
A0A068PEQ5,GII intron,1626,bacterial,nonUG\r
A0A650BYA3,GII intron,1627,bacterial,nonUG\r
G0Y659,GII intron,1627,bacterial,nonUG\r
S5TEL9,GII intron,1628,bacterial,nonUG\r
A0A2R4A3S5,GII intron,1628,bacterial,nonUG\r
A0A343UY06,GII intron,1629,bacterial,nonUG\r
A0A0A1ES51,GII intron,1629,bacterial,nonUG\r
A0A060DDJ7,GII intron,1630,bacterial,nonUG\r
A0A2U9GIQ0,GII intron,1630,bacterial,nonUG\r
A0A0H3WH84,GII intron,1631,bacterial,nonUG\r
A0A0E0ACS1,GII intron,1631,bacterial,nonUG\r
A0A5K1BK38,GII intron,1632,bacterial,nonUG\r
A0A2R6Q4G4,GII intron,1632,bacterial,nonUG\r
A0A0K9NQH8,GII intron,1633,bacterial,nonUG\r
A0A836IZF8,GII intron,1633,bacterial,nonUG\r
A0A3L6D6U5,GII intron,1634,bacterial,nonUG\r
A0A2E7MMD5,GII intron,1634,bacterial,nonUG\r
A0A1J7IAE6,GII intron,1635,bacterial,nonUG\r
A0A7S0G0N7,GII intron,1635,bacterial,nonUG\r
A0A7S2ZDD3,GII intron,1636,bacterial,nonUG\r
Q7YAJ5,GII intron,1636,bacterial,nonUG\r
A0A6C0SI94,GII intron,1637,bacterial,nonUG\r
A0A2K1KGK5,GII intron,1637,bacterial,nonUG\r
A0A0G4IW58,GII intron,1638,bacterial,nonUG\r
A0A0H5R890,GII intron,1638,bacterial,nonUG\r
A0A8B0SFD9,GII intron,1639,bacterial,nonUG\r
A0A291LJD3,GII intron,1639,bacterial,nonUG\r
A0A0G3VSH7,GII intron,1640,bacterial,nonUG\r
Q0R4Y4,GII intron,1640,bacterial,nonUG\r
A0A7U1BFE0,GII intron,1641,bacterial,nonUG\r
A0A060D3Q7,GII intron,1641,bacterial,nonUG\r
A0A7U3RUP3,GII intron,1642,bacterial,nonUG\r
A0A1D8RE55,GII intron,1642,bacterial,nonUG\r
A0A386TXY3,GII intron,1643,bacterial,nonUG\r
A0A2U9GJ32,GII intron,1643,bacterial,nonUG\r
A0A7U1BF81,GII intron,1644,bacterial,nonUG\r
S5TMH3,GII intron,1644,bacterial,nonUG\r
A0A076VKH0,GII intron,1645,bacterial,nonUG\r
A0A6G7IT78,GII intron,1645,bacterial,nonUG\r
H9LR21,GII intron,1646,bacterial,nonUG\r
Q7YAJ6,GII intron,1646,bacterial,nonUG\r
A0A2R4A3K9,GII intron,1647,bacterial,nonUG\r
Q0QIN8,GII intron,1647,bacterial,nonUG\r
A0A650AG83,GII intron,1648,bacterial,nonUG\r
A0A191MX90,GII intron,1648,bacterial,nonUG\r
A0A386TYN6,GII intron,1649,bacterial,nonUG\r
A0A4Y5SG58,GII intron,1649,bacterial,nonUG\r
A0A0B5H4U9,GII intron,1650,bacterial,nonUG\r
A0A5P8DJU3,GII intron,1650,bacterial,nonUG\r
G4Y9U4,GII intron,1651,bacterial,nonUG\r
Q7YAJ3,GII intron,1651,bacterial,nonUG\r
A0A1Y9TMC0,GII intron,1652,bacterial,nonUG\r
A0A386TYN1,GII intron,1652,bacterial,nonUG\r
A0A5P9NVY2,GII intron,1653,bacterial,nonUG\r
A0A5P9NW19,GII intron,1653,bacterial,nonUG\r
A0A2Z6FB49,GII intron,1654,bacterial,nonUG\r
A0A1M4WYM5,GII intron,1654,bacterial,nonUG\r
A0A6I0EWC8,GII intron,1655,bacterial,nonUG\r
A0A364K3J0,GII intron,1655,bacterial,nonUG\r
A0A1L5FE94,GII intron,1656,bacterial,nonUG\r
A0A4P6JYN4,GII intron,1656,bacterial,nonUG\r
A0A235B8L5,GII intron,1657,bacterial,nonUG\r
A0A6B3VYH9,GII intron,1657,bacterial,nonUG\r
A0A1L3MPH4,GII intron,1658,bacterial,nonUG\r
A0A024P644,GII intron,1658,bacterial,nonUG\r
D6U1R4,GII intron,1659,bacterial,nonUG\r
A0A1Y4MVR1,GII intron,1659,bacterial,nonUG\r
A0A7X2J1C6,GII intron,1660,bacterial,nonUG\r
A0A1D9FPE6,GII intron,1660,bacterial,nonUG\r
A0A1V0NYD9,GII intron,1661,bacterial,nonUG\r
A0A366JHU5,GII intron,1661,bacterial,nonUG\r
A0A484SXX1,GII intron,1662,bacterial,nonUG\r
A0A2V0QZX9,GII intron,1662,bacterial,nonUG\r
A0A516IL11,GII intron,1663,bacterial,nonUG\r
A0A386TYU6,GII intron,1663,bacterial,nonUG\r
A0A2K1JDH8,GII intron,1664,bacterial,nonUG\r
A0A2C9DSC8,GII intron,1664,bacterial,nonUG\r
A0A516IKP1,GII intron,1665,bacterial,nonUG\r
A0A7U1GG40,GII intron,1665,bacterial,nonUG\r
A0A6G7MXR1,GII intron,1666,bacterial,nonUG\r
A0A7S1N9C1,GII intron,1666,bacterial,nonUG\r
A0A097KKN7,GII intron,1667,bacterial,nonUG\r
A0A2P0QI84,GII intron,1667,bacterial,nonUG\r
A0A516ZBI8,GII intron,1668,bacterial,nonUG\r
A0A1H3DWY4,GII intron,1668,bacterial,nonUG\r
A0A5M8TB02,GII intron,1669,bacterial,nonUG\r
A0A3D1UXW4,GII intron,1669,bacterial,nonUG\r
A0A535Q1B2,GII intron,1670,bacterial,nonUG\r
A0A0S2IDR2,GII intron,1670,bacterial,nonUG\r
A0A0S2IE99,GII intron,1671,bacterial,nonUG\r
A0A0S2LQ03,GII intron,1671,bacterial,nonUG\r
A0A0S2LQF1,GII intron,1672,bacterial,nonUG\r
A0A2U8GJB6,GII intron,1672,bacterial,nonUG\r
A0A0S2IB93,GII intron,1673,bacterial,nonUG\r
Q9G8T4,GII intron,1673,bacterial,nonUG\r
A0A0S2LP76,GII intron,1674,bacterial,nonUG\r
A0A6B9VX97,GII intron,1674,bacterial,nonUG\r
A0A1C9JB25,GII intron,1675,bacterial,nonUG\r
A0A2S6FYN6,GII intron,1675,bacterial,nonUG\r
A0A243AZF9,GII intron,1676,bacterial,nonUG\r
K7HBV9,GII intron,1676,bacterial,nonUG\r
A0A0X1TJ67,GII intron,1677,bacterial,nonUG\r
A0A5Q2NIE1,GII intron,1677,bacterial,nonUG\r
A0A1C7FU43,GII intron,1678,bacterial,nonUG\r
A0A161R9D8,GII intron,1678,bacterial,nonUG\r
G8TY46,GII intron,1679,bacterial,nonUG\r
A0A7I8ELD3,GII intron,1679,bacterial,nonUG\r
A0A0L6JKK9,GII intron,1680,bacterial,nonUG\r
A0A810E2Q2,GII intron,1680,bacterial,nonUG\r
A0A358U876,GII intron,1681,bacterial,nonUG\r
A0A497IQR6,GII intron,1681,bacterial,nonUG\r
A0A3D1SNM6,GII intron,1682,bacterial,nonUG\r
A0A661VA86,GII intron,1682,bacterial,nonUG\r
A0A0C2LEV9,GII intron,1683,bacterial,nonUG\r
A0A838DM31,GII intron,1683,bacterial,nonUG\r
A0A6N8UST3,GII intron,1684,bacterial,nonUG\r
A0A7C2IBZ3,GII intron,1684,bacterial,nonUG\r
A0A840EDU5,GII intron,1685,bacterial,nonUG\r
A0A0P9DAF4,GII intron,1685,bacterial,nonUG\r
A0A143ZQL3,GII intron,1686,bacterial,nonUG\r
A0A2E2B1X3,GII intron,1686,bacterial,nonUG\r
A0A7V4XB29,GII intron,1687,bacterial,nonUG\r
A0A841BYQ0,GII intron,1687,bacterial,nonUG\r
Q6YQN1,GII intron,1688,bacterial,nonUG\r
A0A432R5P2,GII intron,1688,bacterial,nonUG\r
A0A7C0UCD9,GII intron,1689,bacterial,nonUG\r
A0A3N5WXH2,GII intron,1689,bacterial,nonUG\r
A0A1G9L9Z6,GII intron,1690,bacterial,nonUG\r
A0A221KCN3,GII intron,1690,bacterial,nonUG\r
A0A4P8RIQ1,GII intron,1691,bacterial,nonUG\r
A0A1C5PJ26,GII intron,1691,bacterial,nonUG\r
A0A1V5RLB7,GII intron,1692,bacterial,nonUG\r
A0A2X2UQH2,GII intron,1692,bacterial,nonUG\r
A0A0R1TTY4,GII intron,1693,bacterial,nonUG\r
A0A140DR96,GII intron,1693,bacterial,nonUG\r
R9JIE9,GII intron,1694,bacterial,nonUG\r
A0A140DX45,GII intron,1694,bacterial,nonUG\r
A0A373M6I5,GII intron,1695,bacterial,nonUG\r
A0A3D0HM84,GII intron,1695,bacterial,nonUG\r
A0A3A1YJN9,GII intron,1696,bacterial,nonUG\r
A0A536B5H6,GII intron,1696,bacterial,nonUG\r
A0A5C9BD35,GII intron,1697,bacterial,nonUG\r
A0A1N6IFC0,GII intron,1697,bacterial,nonUG\r
A0A6J4X2G4,GII intron,1698,bacterial,nonUG\r
A0A3N5P1C6,GII intron,1698,bacterial,nonUG\r
A0A6C2URV9,GII intron,1699,bacterial,nonUG\r
S3H6B5,GII intron,1699,bacterial,nonUG\r
A0A5C6AFT8,GII intron,1700,bacterial,nonUG\r
A0A455WAY0,GII intron,1700,bacterial,nonUG\r
A0A415XX02,GII intron,1701,bacterial,nonUG\r
A0A6I5ZWE8,GII intron,1701,bacterial,nonUG\r
A0A1W9HLA3,GII intron,1702,bacterial,nonUG\r
A0A2I7SS58,GII intron,1702,bacterial,nonUG\r
A0A1A9I208,GII intron,1703,bacterial,nonUG\r
A0A1H7B258,GII intron,1703,bacterial,nonUG\r
A0A0S4QU48,GII intron,1704,bacterial,nonUG\r
A0A563DY49,GII intron,1704,bacterial,nonUG\r
A0A0E0SRU6,GII intron,1705,bacterial,nonUG\r
A0A0N5A0M7,GII intron,1705,bacterial,nonUG\r
A0A0F7LUJ3,GII intron,1706,bacterial,nonUG\r
A0A180EQW9,GII intron,1706,bacterial,nonUG\r
A0A3B1D612,GII intron,1707,bacterial,nonUG\r
A0A0T7A6F2,GII intron,1707,bacterial,nonUG\r
B4CYA7,GII intron,1708,bacterial,nonUG\r
G2JBB1,GII intron,1708,bacterial,nonUG\r
A0A202DTT3,GII intron,1709,bacterial,nonUG\r
A0A521Q4A4,GII intron,1709,bacterial,nonUG\r
A0A7W7W8G5,GII intron,1710,bacterial,nonUG\r
A0A0F6SE89,GII intron,1710,bacterial,nonUG\r
A0A0E3NZP2,GII intron,1711,bacterial,nonUG\r
A0A3R7X7W1,GII intron,1711,bacterial,nonUG\r
T0XWA2,GII intron,1712,bacterial,nonUG\r
A0A1V5VVB1,GII intron,1712,bacterial,nonUG\r
A0A4Y2MSU1,GII intron,1713,bacterial,nonUG\r
X5J9G3,GII intron,1713,bacterial,nonUG\r
A0A7V5RKL0,GII intron,1714,bacterial,nonUG\r
A0A518BBG8,GII intron,1714,bacterial,nonUG\r
A0A644W8T8,GII intron,1715,bacterial,nonUG\r
A0A1M6YDE7,GII intron,1715,bacterial,nonUG\r
A0A0F9ESY3,GII intron,1716,bacterial,nonUG\r
A0A4U1A0B9,GII intron,1716,bacterial,nonUG\r
A0A418Y4U6,GII intron,1717,bacterial,nonUG\r
A0A5R8K6X2,GII intron,1717,bacterial,nonUG\r
A0A2B2C619,GII intron,1718,bacterial,nonUG\r
A0A1M7YGE5,GII intron,1718,bacterial,nonUG\r
A0A7X7VHD1,GII intron,1719,bacterial,nonUG\r
A0A1H0ETJ9,G2L/CRISPR,1719,bacterial,nonUG\r
A0A3P1WSN8,G2L/CRISPR,1720,bacterial,nonUG\r
A0A2A5J076,G2L/CRISPR,1720,bacterial,nonUG\r
A0A495L2B7,G2L/CRISPR,1721,bacterial,nonUG\r
A0A556Q831,G2L/CRISPR,1721,bacterial,nonUG\r
A0A4Y9EV24,G2L/CRISPR,1722,bacterial,nonUG\r
A0A1F9MKV5,G2L/CRISPR,1722,bacterial,nonUG\r
V4JME3,G2L/CRISPR,1723,bacterial,nonUG\r
A0A1E4BA48,G2L/CRISPR,1723,bacterial,nonUG\r
G2DYQ3,G2L/CRISPR,1724,bacterial,nonUG\r
A0A7Y5LPY1,G2L/CRISPR,1724,bacterial,nonUG\r
A0A836SGW4,G2L/CRISPR,1725,bacterial,nonUG\r
D4MA43,G2L/CRISPR,1725,bacterial,nonUG\r
H8YVT4,G2L/CRISPR,1726,bacterial,nonUG\r
A0A7D5ND40,G2L/CRISPR,1726,bacterial,nonUG\r
A0A847GZ08,G2L/CRISPR,1727,bacterial,nonUG\r
A0A7D8YFB4,G2L/CRISPR,1727,bacterial,nonUG\r
A0A7Z0KYW6,G2L/CRISPR,1728,bacterial,nonUG\r
A0A7C5LSY4,G2L/CRISPR,1728,bacterial,nonUG\r
J9DDV2,G2L/CRISPR,1729,bacterial,nonUG\r
A0A4R5U6I3,G2L/CRISPR,1729,bacterial,nonUG\r
Q7MC43,G2L/CRISPR,1730,bacterial,nonUG\r
A0A0F4Q940,G2L/CRISPR,1730,bacterial,nonUG\r
A0A437JM08,G2L/CRISPR,1731,bacterial,nonUG\r
A0A1F4NN58,G2L/CRISPR,1731,bacterial,nonUG\r
A0A259QM72,G2L/CRISPR,1732,bacterial,nonUG\r
A0A523Q7B1,G2L/CRISPR,1732,bacterial,nonUG\r
A0A347UQ58,G2L/CRISPR,1733,bacterial,nonUG\r
A0A1M4VB00,G2L/CRISPR,1733,bacterial,nonUG\r
A0A0W8JB31,G2L/CRISPR,1734,bacterial,nonUG\r
A0A0F4P871,G2L/CRISPR,1734,bacterial,nonUG\r
A0A1J5IBV5,G2L/CRISPR,1735,bacterial,nonUG\r
A0A349HDB6,G2L/CRISPR,1735,bacterial,nonUG\r
A0A2P1PTT3,G2L/CRISPR,1736,bacterial,nonUG\r
A0A2G6KXE4,G2L/CRISPR,1736,bacterial,nonUG\r
A0A1J5UCP8,G2L/CRISPR,1737,bacterial,nonUG\r
A0A8A9EJ17,G2L/CRISPR,1737,bacterial,nonUG\r
A0A3A4K6G5,G2L/CRISPR,1738,bacterial,nonUG\r
A0A3M2C0Y3,G2L/CRISPR,1738,bacterial,nonUG\r
A0A2H0XXD2,G2L/CRISPR,1739,bacterial,nonUG\r
A0A6C2YSZ1,G2L/CRISPR,1739,bacterial,nonUG\r
A0A5C6B6Q1,G2L/CRISPR,1740,bacterial,nonUG\r
A0A1W9TI89,G2L/CRISPR,1740,bacterial,nonUG\r
A0A1V4AX65,G2L/CRISPR,1741,bacterial,nonUG\r
A0A7V6CRB5,G2L/CRISPR,1741,bacterial,nonUG\r
A0A1C3FEY3,G2L/CRISPR,1742,bacterial,nonUG\r
A0A1W9LVU5,G2L/CRISPR,1742,bacterial,nonUG\r
A0A380MXW7,G2L/CRISPR,1743,bacterial,nonUG\r
A0A263BRN9,G2L/CRISPR,1743,bacterial,nonUG\r
A0A2M7I4N7,G2L/CRISPR,1744,bacterial,nonUG\r
A0A7Y0TQX7,G2L/CRISPR,1744,bacterial,nonUG\r
A0A800C7G2,G2L/CRISPR,1745,bacterial,nonUG\r
W4M085,G2L/CRISPR,1745,bacterial,nonUG\r
A0A3M1TXM6,G2L/CRISPR,1746,bacterial,nonUG\r
A0A6P0HTX8,G2L/CRISPR,1746,bacterial,nonUG\r
A0A3M1PJT0,G2L/CRISPR,1747,bacterial,nonUG\r
A0A662NGV8,G2L/CRISPR,1747,bacterial,nonUG\r
A0A2M7T6K2,G2L/CRISPR,1748,bacterial,nonUG\r
A0A3N1AWY4,G2L/CRISPR,1748,bacterial,nonUG\r
A0A1J5A8Y9,G2L/CRISPR,1749,bacterial,nonUG\r
A0A7C4QK90,G2L/CRISPR,1749,bacterial,nonUG\r
A0A6L4ZSM2,G2L/CRISPR,1750,bacterial,nonUG\r
A0A7C3YAF2,G2L/CRISPR,1750,bacterial,nonUG\r
A0A3A0BUZ9,G2L/CRISPR,1751,bacterial,nonUG\r
A0A399ZDK3,G2L/CRISPR,1751,bacterial,nonUG\r
A0A495ZKL8,G2L/CRISPR,1752,bacterial,nonUG\r
A7NMI6,G2L/CRISPR,1752,bacterial,nonUG\r
A0A7V2UBX8,G2L/CRISPR,1753,bacterial,nonUG\r
A0A0M2UVS7,G2L/CRISPR,1753,bacterial,nonUG\r
A0A5C5XMY0,G2L/CRISPR,1754,bacterial,nonUG\r
A0A7V2E9D6,G2L/CRISPR,1754,bacterial,nonUG\r
A0A1V1P661,G2L/CRISPR,1755,bacterial,nonUG\r
A0A2A9FI44,G2L/CRISPR,1755,bacterial,nonUG\r
A0A1Q9YEJ2,G2L/CRISPR,1756,bacterial,nonUG\r
A0A1V1P2H0,G2L/CRISPR,1756,bacterial,nonUG\r
A0A832A1S9,G2L/CRISPR,1757,bacterial,nonUG\r
A0A7X6WKT5,G2L/CRISPR,1757,bacterial,nonUG\r
A0A2V3JID7,G2L/CRISPR,1758,bacterial,nonUG\r
A0A7C4FU34,G2L/CRISPR,1758,bacterial,nonUG\r
A0A7C3MTS0,G2L/CRISPR,1759,bacterial,nonUG\r
A0A7X7EKK8,G2L/CRISPR,1759,bacterial,nonUG\r
A0A3M1TSJ9,G2L/CRISPR,1760,bacterial,nonUG\r
A0A6N2CXZ7,G2L/CRISPR,1760,bacterial,nonUG\r
A0A2L2MZH9,G2L/CRISPR,1761,bacterial,nonUG\r
A0A402D623,G2L/CRISPR,1761,bacterial,nonUG\r
A0A4R2RBR5,G2L/CRISPR,1762,bacterial,nonUG\r
A0A3C2EIW7,G2L/CRISPR,1762,bacterial,nonUG\r
S2KXS1,G2L/CRISPR,1763,bacterial,nonUG\r
A0A3P5WQN8,G2L/CRISPR,1763,bacterial,nonUG\r
A0A6N0LQ16,G2L/CRISPR,1764,bacterial,nonUG\r
A0A347V5W3,G2L/CRISPR,1764,bacterial,nonUG\r
A0A7C9MA84,G2L/CRISPR,1765,bacterial,nonUG\r
L0H2H6,G2L/CRISPR,1765,bacterial,nonUG\r
A0A1F6LLT4,G2L/CRISPR,1766,bacterial,nonUG\r
A0A3A4PYY0,G2L/CRISPR,1766,bacterial,nonUG\r
A0A6H9L8W7,G2L/CRISPR,1767,bacterial,nonUG\r
A0A2N2FAV0,G2L/CRISPR,1767,bacterial,nonUG\r
A0A4P5VTS5,G2L/CRISPR,1768,bacterial,nonUG\r
T1B4R9,G2L/CRISPR,1768,bacterial,nonUG\r
A0A1M3MAZ0,G2L/CRISPR,1769,bacterial,nonUG\r
A0A7C8B792,G2L/CRISPR,1769,bacterial,nonUG\r
A0A7Y5T2X2,G2L/CRISPR,1770,bacterial,nonUG\r
A0A7Y5ETP2,G2L/CRISPR,1770,bacterial,nonUG\r
A0A3D8HC39,G2L/CRISPR,1771,bacterial,nonUG\r
A0A3C2ECF9,G2L/CRISPR,1771,bacterial,nonUG\r
A0A6N6SMM3,G2L/CRISPR,1772,bacterial,nonUG\r
A0A318CY37,G2L/CRISPR,1772,bacterial,nonUG\r
F2NE25,G2L/CRISPR,1773,bacterial,nonUG\r
A0A661T406,G2L/CRISPR,1773,bacterial,nonUG\r
A0A399WKQ1,G2L/CRISPR,1774,bacterial,nonUG\r
A0A661Q1D6,G2L/CRISPR,1774,bacterial,nonUG\r
A0A0B0EEW2,G2L/CRISPR,1775,bacterial,nonUG\r
A0A660UJU8,G2L/CRISPR,1775,bacterial,nonUG\r
A0A7C4BUZ7,G2L/CRISPR,1776,bacterial,nonUG\r
A0A1V1PG08,G2L/CRISPR,1776,bacterial,nonUG\r
A0A849WI53,G2L/CRISPR,1777,bacterial,nonUG\r
A0A1C6JC61,G2L/CRISPR,1777,bacterial,nonUG\r
A0A1E5A5F5,DGRs,1778,bacterial,nonUG\r
A0A2K8U6G9,DGRs,1778,bacterial,nonUG\r
A0A0M1JIE7,DGRs,1779,bacterial,nonUG\r
A0A7V7MJ21,DGRs,1779,bacterial,nonUG\r
A0A1T4YH99,DGRs,1780,bacterial,nonUG\r
A0A3C1PLS4,DGRs,1780,bacterial,nonUG\r
A0A2M7KIV0,DGRs,1781,bacterial,nonUG\r
A0A7C6I7V7,DGRs,1781,bacterial,nonUG\r
A0A1V1NUW5,DGRs,1782,bacterial,nonUG\r
A0A832UT94,DGRs,1782,bacterial,nonUG\r
A0A3D4S1U1,DGRs,1783,bacterial,nonUG\r
A0A518BG02,DGRs,1783,bacterial,nonUG\r
A0A4P5WT07,DGRs,1784,bacterial,nonUG\r
A0A4P5VUP6,DGRs,1784,bacterial,nonUG\r
A0A2M8B6J4,DGRs,1785,bacterial,nonUG\r
A0A1E4ZMZ6,DGRs,1785,bacterial,nonUG\r
A0A2E7BSY0,DGRs,1786,bacterial,nonUG\r
A0A7C1CN17,DGRs,1786,bacterial,nonUG\r
A0A2M7KYT4,DGRs,1787,bacterial,nonUG\r
A0A353Z5U1,DGRs,1787,bacterial,nonUG\r
A0A533QMH6,DGRs,1788,bacterial,nonUG\r
A0A850AS55,DGRs,1788,bacterial,nonUG\r
A0A2H0XWR5,DGRs,1789,bacterial,nonUG\r
A0A7V2NRH4,DGRs,1789,bacterial,nonUG\r
A0A2G2M771,DGRs,1790,bacterial,nonUG\r
A0A0P7YP32,DGRs,1790,bacterial,nonUG\r
A0A4Q0J2W6,DGRs,1791,bacterial,nonUG\r
A0A6A2JJ34,DGRs,1791,bacterial,nonUG\r
A0A3A5R5S2,DGRs,1792,bacterial,nonUG\r
A0A373ZQH3,DGRs,1792,bacterial,nonUG\r
A0A6F9ZLW4,DGRs,1793,bacterial,nonUG\r
A0A1M7AJN1,DGRs,1793,bacterial,nonUG\r
A0A3D0WR64,DGRs,1794,bacterial,nonUG\r
A0A6S6SLT5,DGRs,1794,bacterial,nonUG\r
A0A3D2NB66,DGRs,1795,bacterial,nonUG\r
A0A4R2LJY5,DGRs,1795,bacterial,nonUG\r
A0A0G0HL24,DGRs,1796,bacterial,nonUG\r
A0A2J0MNF4,DGRs,1796,bacterial,nonUG\r
A0A316B823,DGRs,1797,bacterial,nonUG\r
V5F7P9,DGRs,1797,bacterial,nonUG\r
A0A379Y253,DGRs,1798,bacterial,nonUG\r
A0A2T5NN85,DGRs,1798,bacterial,nonUG\r
A0A2M7NCR6,DGRs,1799,bacterial,nonUG\r
A0A0S2JBX1,DGRs,1799,bacterial,nonUG\r
A0A2S7DEN0,DGRs,1800,bacterial,nonUG\r
A0A1G0M0Q9,DGRs,1800,bacterial,nonUG\r
A0A832AT28,DGRs,1801,bacterial,nonUG\r
A0A2K8UDA3,DGRs,1801,bacterial,nonUG\r
A0A1J4RSW2,DGRs,1802,bacterial,nonUG\r
D5CUB0,DGRs,1802,bacterial,nonUG\r
A0A2E1Q549,DGRs,1803,bacterial,nonUG\r
A0A258W1Y7,DGRs,1803,bacterial,nonUG\r
A0A349HRL3,DGRs,1804,bacterial,nonUG\r
A0A851I2H5,DGRs,1804,bacterial,nonUG\r
A0A2N0KBY0,DGRs,1805,bacterial,nonUG\r
R5NE19,DGRs,1805,bacterial,nonUG\r
A0A1Q6LA92,DGRs,1806,bacterial,nonUG\r
A0A1F4MH79,DGRs,1806,bacterial,nonUG\r
A0A2D3WVK8,DGRs,1807,bacterial,nonUG\r
A0A7G8X023,DGRs,1807,bacterial,nonUG\r
A0A2P8EI60,DGRs,1808,bacterial,nonUG\r
A0A1H3BKT0,DGRs,1808,bacterial,nonUG\r
A0A416S7S1,DGRs,1809,bacterial,nonUG\r
A0A2K4ZGW4,DGRs,1809,bacterial,nonUG\r
A0A3R6MCN2,DGRs,1810,bacterial,nonUG\r
A0A2X2UDJ1,DGRs,1810,bacterial,nonUG\r
A0A7X8WEQ6,DGRs,1811,bacterial,nonUG\r
A0A645DCM4,DGRs,1811,bacterial,nonUG\r
A0A1G0MAT7,DGRs,1812,bacterial,nonUG\r
A0A4R3JVJ7,DGRs,1812,bacterial,nonUG\r
B8GRZ4,DGRs,1813,bacterial,nonUG\r
A0A849KRM8,DGRs,1813,bacterial,nonUG\r
A0A1C5RVB7,DGRs,1814,bacterial,nonUG\r
A0A285Q2K9,DGRs,1814,bacterial,nonUG\r
A0A847R651,DGRs,1815,bacterial,nonUG\r
A0A1V5UWM7,DGRs,1815,bacterial,nonUG\r
A0A0G1JEJ2,DGRs,1816,bacterial,nonUG\r
A0A1M3BT46,DGRs,1816,bacterial,nonUG\r
A0A0G0JI56,DGRs,1817,bacterial,nonUG\r
A0A258VWL0,DGRs,1817,bacterial,nonUG\r
A0A2S3QSZ7,DGRs,1818,bacterial,nonUG\r
A0A419G9J5,DGRs,1818,bacterial,nonUG\r
A0A1F7UTP9,DGRs,1819,bacterial,nonUG\r
A0A0G0RP17,DGRs,1819,bacterial,nonUG\r
A0A1F4NQU8,DGRs,1820,bacterial,nonUG\r
A0A0G1XSN9,DGRs,1820,bacterial,nonUG\r
A0A2M7V732,DGRs,1821,bacterial,nonUG\r
A0A1G2PQ69,DGRs,1821,bacterial,nonUG\r
A0A1F6N9N1,DGRs,1822,bacterial,nonUG\r
A0A5C7WAV5,DGRs,1822,bacterial,nonUG\r
A0A1G1A8C1,DGRs,1823,bacterial,nonUG\r
A0A6N8JPU7,DGRs,1823,bacterial,nonUG\r
S4GT69,DGRs,1824,bacterial,nonUG\r
R7N9L9,DGRs,1824,bacterial,nonUG\r
A0A1Q6JPH1,DGRs,1825,bacterial,nonUG\r
A0A1Y4HUA0,DGRs,1825,bacterial,nonUG\r
A0A6N8JT70,DGRs,1826,bacterial,nonUG\r
A0A5K1IKD5,DGRs,1826,bacterial,nonUG\r
A0A1G5AFK2,DGRs,1827,bacterial,nonUG\r
A0A7C6SL11,DGRs,1827,bacterial,nonUG\r
A0A2K4ZKP7,DGRs,1828,bacterial,nonUG\r
A0A7X2P831,DGRs,1828,bacterial,nonUG\r
A0A374ABV3,DGRs,1829,bacterial,nonUG\r
A0A1H0P842,DGRs,1829,bacterial,nonUG\r
A0A349YHH5,DGRs,1830,bacterial,nonUG\r
A0A1I5INH2,DGRs,1830,bacterial,nonUG\r
A0A173XPJ6,DGRs,1831,bacterial,nonUG\r
R6H5G0,DGRs,1831,bacterial,nonUG\r
A0A4S2HCQ2,DGRs,1832,bacterial,nonUG\r
R6GLF4,DGRs,1832,bacterial,nonUG\r
A0A143XZK4,DGRs,1833,bacterial,nonUG\r
A0A6N7VZ19,DGRs,1833,bacterial,nonUG\r
A0A3C1LSM0,DGRs,1834,bacterial,nonUG\r
A0A415JNB5,DGRs,1834,bacterial,nonUG\r
A0A143WWL9,DGRs,1835,bacterial,nonUG\r
A0A413B1B6,DGRs,1835,bacterial,nonUG\r
W0FH76,DGRs,1836,bacterial,nonUG\r
A0A3E2VUI6,DGRs,1836,bacterial,nonUG\r
A0A412HYM9,DGRs,1837,bacterial,nonUG\r
A0A4Z0D583,DGRs,1837,bacterial,nonUG\r
A0A7T4NJW2,DGRs,1838,bacterial,nonUG\r
R5FQK9,DGRs,1838,bacterial,nonUG\r
R5M915,DGRs,1839,bacterial,nonUG\r
A0A1Q6LIW7,DGRs,1839,bacterial,nonUG\r
R7IJS1,DGRs,1840,bacterial,nonUG\r
R6AZU9,DGRs,1840,bacterial,nonUG\r
A0A1F8ULK9,DGRs,1841,bacterial,nonUG\r
A0A350TI56,DGRs,1841,bacterial,nonUG\r
A0A252F313,DGRs,1842,bacterial,nonUG\r
A0A1Q6JRE1,DGRs,1842,bacterial,nonUG\r
A0A317UBP4,DGRs,1843,bacterial,nonUG\r
A0A1M6M5A6,DGRs,1843,bacterial,nonUG\r
A0A1S6HHE2,DGRs,1844,bacterial,nonUG\r
A0A4R3USP9,DGRs,1844,bacterial,nonUG\r
A0A1F6WMN9,DGRs,1845,bacterial,nonUG\r
A0A1J5EWP5,DGRs,1845,bacterial,nonUG\r
A0A2G9ME30,DGRs,1846,bacterial,nonUG\r
A0A7Y0EPZ3,DGRs,1846,bacterial,nonUG\r
A0A6N7RM83,DGRs,1847,bacterial,nonUG\r
A0A4Q2K0U8,DGRs,1847,bacterial,nonUG\r
A0A1C5N0E2,DGRs,1848,bacterial,nonUG\r
A0A174B5V1,DGRs,1848,bacterial,nonUG\r
A0A417FQ91,DGRs,1849,bacterial,nonUG\r
A0A6N2TW50,DGRs,1849,bacterial,nonUG\r
A0A1Q6TIP7,DGRs,1850,bacterial,nonUG\r
A0A416G2W1,DGRs,1850,bacterial,nonUG\r
A0A2N5P2J8,DGRs,1851,bacterial,nonUG\r
A0A2V2FT00,DGRs,1851,bacterial,nonUG\r
A0A2N5P3N6,DGRs,1852,bacterial,nonUG\r
A0A3D2D981,DGRs,1852,bacterial,nonUG\r
A0A357TPP5,DGRs,1853,bacterial,nonUG\r
A0A1H3XCK8,DGRs,1853,bacterial,nonUG\r
A0A349YIY8,DGRs,1854,bacterial,nonUG\r
A0A1F8V0T1,DGRs,1854,bacterial,nonUG\r
A0A2T3FAP7,DGRs,1855,bacterial,nonUG\r
A0A1C5VTC4,DGRs,1855,bacterial,nonUG\r
A0A2V2FIK6,DGRs,1856,bacterial,nonUG\r
A0A1Q6RLC1,DGRs,1856,bacterial,nonUG\r
A0A6N7WI78,DGRs,1857,bacterial,nonUG\r
A0A0B2K0S1,DGRs,1857,bacterial,nonUG\r
A0A2U1CFG3,DGRs,1858,bacterial,nonUG\r
A0A417QWZ1,DGRs,1858,bacterial,nonUG\r
A0A173S204,DGRs,1859,bacterial,nonUG\r
A0A7U9XET2,DGRs,1859,bacterial,nonUG\r
A0A1G5CKX9,DGRs,1860,bacterial,nonUG\r
A0A174X0R2,DGRs,1860,bacterial,nonUG\r
A0A644XSY0,DGRs,1861,bacterial,nonUG\r
A0A4P6YWX5,DGRs,1861,bacterial,nonUG\r
A0A1C6DC36,DGRs,1862,bacterial,nonUG\r
A0A0J6WUF3,DGRs,1862,bacterial,nonUG\r
A0A3E4VCN9,DGRs,1863,bacterial,nonUG\r
A0A849CV99,DGRs,1863,bacterial,nonUG\r
A0A350KNR2,DGRs,1864,bacterial,nonUG\r
A0A0D8J2G4,DGRs,1864,bacterial,nonUG\r
A0A356J2R7,DGRs,1865,bacterial,nonUG\r
A0A3E2TNX4,DGRs,1865,bacterial,nonUG\r
A0A1H0GWY9,DGRs,1866,bacterial,nonUG\r
A0A5P0X1W9,DGRs,1866,bacterial,nonUG\r
A0A6G1V5R5,DGRs,1867,bacterial,nonUG\r
A0A353Q5Z7,DGRs,1867,bacterial,nonUG\r
A0A3L8AE97,DGRs,1868,bacterial,nonUG\r
A0A4V1K5Q3,DGRs,1868,bacterial,nonUG\r
A0A828VQ65,DGRs,1869,bacterial,nonUG\r
A0A564WS48,DGRs,1869,bacterial,nonUG\r
C4Z5S9,DGRs,1870,bacterial,nonUG\r
A0A7U9R2D0,DGRs,1870,bacterial,nonUG\r
A0A843DRJ7,DGRs,1871,bacterial,nonUG\r
A0A5J4QU36,DGRs,1871,bacterial,nonUG\r
A0A646HMT0,DGRs,1872,bacterial,nonUG\r
A0A379GAA3,DGRs,1872,bacterial,nonUG\r
A0A4Y8VQV8,DGRs,1873,bacterial,nonUG\r
A0A292RVG8,DGRs,1873,bacterial,nonUG\r
A0A327JIZ8,DGRs,1874,bacterial,nonUG\r
A0A316S8B1,DGRs,1874,bacterial,nonUG\r
A0A3N2M4R4,DGRs,1875,bacterial,nonUG\r
A0A3N2KNP0,DGRs,1875,bacterial,nonUG\r
A0A255S4Z5,DGRs,1876,bacterial,nonUG\r
R6TX26,DGRs,1876,bacterial,nonUG\r
A0A174VX16,DGRs,1877,bacterial,nonUG\r
A0A843E0T5,DGRs,1877,bacterial,nonUG\r
A0A3C2D4P4,DGRs,1878,bacterial,nonUG\r
A0A3N2MIV3,DGRs,1878,bacterial,nonUG\r
R6FCS8,DGRs,1879,bacterial,nonUG\r
A0A843IDA1,DGRs,1879,bacterial,nonUG\r
A0A4Q5H7J4,DGRs,1880,bacterial,nonUG\r
A0A139L2A4,DGRs,1880,bacterial,nonUG\r
R5CA81,DGRs,1881,bacterial,nonUG\r
A0A2L2WMZ8,DGRs,1881,bacterial,nonUG\r
A0A377J340,DGRs,1882,bacterial,nonUG\r
A0A143XSF0,G2L/CRISPR,1882,bacterial,nonUG\r
A0A1G4SXF7,G2L/CRISPR,1883,bacterial,nonUG\r
A0A6I3I790,G2L/CRISPR,1883,bacterial,nonUG\r
A0A7X8X8U4,G2L/CRISPR,1884,bacterial,nonUG\r
A0A3D0HM21,G2L/CRISPR,1884,bacterial,nonUG\r
A0A1Y4QJ61,G2L/CRISPR,1885,bacterial,nonUG\r
A0A7X8JP74,G2L/CRISPR,1885,bacterial,nonUG\r
A0A563D4U1,G2L/CRISPR,1886,bacterial,nonUG\r
M6CQU0,G2L/CRISPR,1886,bacterial,nonUG\r
T0FE52,G2L/CRISPR,1887,bacterial,nonUG\r
A0A6H3NP87,G2L/CRISPR,1887,bacterial,nonUG\r
A0A4U2L366,G2L/CRISPR,1888,bacterial,nonUG\r
A0A4U2KVR3,G2L/CRISPR,1888,bacterial,nonUG\r
A0A1T4K562,G2L/CRISPR,1889,bacterial,nonUG\r
A0A1B6BG06,G2L/CRISPR,1889,bacterial,nonUG\r
A0A2N2BRX0,G2L/CRISPR,1890,bacterial,nonUG\r
I7LG99,G2L/CRISPR,1890,bacterial,nonUG\r
A0A1G4VUE6,G2L/CRISPR,1891,bacterial,nonUG\r
A0A7X7QLN0,G2L/CRISPR,1891,bacterial,nonUG\r
A0A133UDY8,G2L/CRISPR,1892,bacterial,nonUG\r
A0A0M9DZB1,G2L/CRISPR,1892,bacterial,nonUG\r
A0A1W1EEJ9,G2L/CRISPR,1893,bacterial,nonUG\r
A0A6S6U9W9,G2L/CRISPR,1893,bacterial,nonUG\r
A0A2G6H986,G2L/CRISPR,1894,bacterial,nonUG\r
A0A0A2F5U6,G2L/CRISPR,1894,bacterial,nonUG\r
A0A6L5WIC2,G2L/CRISPR,1895,bacterial,nonUG\r
A0A7V4QDT3,G2L/CRISPR,1895,bacterial,nonUG\r
A0A3N1YEI8,G2L/CRISPR,1896,bacterial,nonUG\r
A0A2G6BN26,G2L/CRISPR,1896,bacterial,nonUG\r
A0A519BLH9,G2L/CRISPR,1897,bacterial,nonUG\r
A0A318THF5,G2L/CRISPR,1897,bacterial,nonUG\r
A0A6M1LFS3,G2L/CRISPR,1898,bacterial,nonUG\r
A0A430EM92,G2L/CRISPR,1898,bacterial,nonUG\r
A0A6N6VJH7,G2L/CRISPR,1899,bacterial,nonUG\r
A0A353Z7E2,G2L/CRISPR,1899,bacterial,nonUG\r
A0A1W2EM29,G2L/CRISPR,1900,bacterial,nonUG\r
A0A7Z1V2N1,G2L/CRISPR,1900,bacterial,nonUG\r
A0A651FN34,G2L/CRISPR,1901,bacterial,nonUG\r
A0A3A0F1P1,G2L/CRISPR,1901,bacterial,nonUG\r
A0A1L6L488,G2L/CRISPR,1902,bacterial,nonUG\r
A0A3M2WDG4,G2L/CRISPR,1902,bacterial,nonUG\r
A0A245ZMC4,G2L/CRISPR,1903,bacterial,nonUG\r
A0A839PH79,G2L/CRISPR,1903,bacterial,nonUG\r
A0A1I6UKK0,G2L/CRISPR,1904,bacterial,nonUG\r
Q2YAI4,G2L/CRISPR,1904,bacterial,nonUG\r
A0A2S4LS20,G2L/CRISPR,1905,bacterial,nonUG\r
A0A2E7GHZ1,G2L/CRISPR,1905,bacterial,nonUG\r
A0A1F3VFN2,G2L/CRISPR,1906,bacterial,nonUG\r
R6IRE0,G2L/CRISPR,1906,bacterial,nonUG\r
A0A1G1XZW3,G2L/CRISPR,1907,bacterial,nonUG\r
A0A4U1G5D3,G2L/CRISPR,1907,bacterial,nonUG\r
A0A1M5WSZ4,G2L/CRISPR,1908,bacterial,nonUG\r
A0A1L9GUY0,G2L/CRISPR,1908,bacterial,nonUG\r
A0A7S7NXY0,G2L/CRISPR,1909,bacterial,nonUG\r
A0A7G8BES8,G2L/CRISPR,1909,bacterial,nonUG\r
A0A1G1L390,G2L/CRISPR,1910,bacterial,nonUG\r
A0A7S6M164,G2L/CRISPR,1910,bacterial,nonUG\r
A0A399WZN8,G2L/CRISPR,1911,bacterial,nonUG\r
A0A0G0RRT4,G2L/CRISPR,1911,bacterial,nonUG\r
A0A7W4DRE0,G2L/CRISPR,1912,bacterial,nonUG\r
A0A7T9QB54,G2L/CRISPR,1912,bacterial,nonUG\r
I4B0C5,G2L/CRISPR,1913,bacterial,nonUG\r
A0A2H0RRZ4,G2L/CRISPR,1913,bacterial,nonUG\r
A0A4R7NSH1,G2L/CRISPR,1914,bacterial,nonUG\r
A0A2D6EP68,G2L/CRISPR,1914,bacterial,nonUG\r
A0A5C7RFN9,G2L/CRISPR,1915,bacterial,nonUG\r
A0A4Q8T870,G2L/CRISPR,1915,bacterial,nonUG\r
A0A2R4XLR1,G2L/CRISPR,1916,bacterial,nonUG\r
A0A850GZI3,G2L/CRISPR,1916,bacterial,nonUG\r
A0A4D8R3J3,G2L/CRISPR,1917,bacterial,nonUG\r
A0A832DHV7,G2L/CRISPR,1917,bacterial,nonUG\r
A0A2S3W493,G2L/CRISPR,1918,bacterial,nonUG\r
A0A1P8QLC9,G2L/CRISPR,1918,bacterial,nonUG\r
A0A3B9ESB6,G2L/CRISPR,1919,bacterial,nonUG\r
A0A2E2QBD5,G2L/CRISPR,1919,bacterial,nonUG\r
N0B891,G2L/CRISPR,1920,bacterial,nonUG\r
A0A2E2M3V7,G2L/CRISPR,1920,bacterial,nonUG\r
A0A6P1R5G6,G2L/CRISPR,1921,bacterial,nonUG\r
A0A2N5LNU8,G2L/CRISPR,1921,bacterial,nonUG\r
A0A1Y3CSW2,G2L/CRISPR,1922,bacterial,nonUG\r
A0A2T1IX34,G2L/CRISPR,1922,bacterial,nonUG\r
A0A009F607,G2L/CRISPR,1923,bacterial,nonUG\r
A0A3T0E6K2,G2L/CRISPR,1923,bacterial,nonUG\r
A0A285Q094,G2L/CRISPR,1924,bacterial,nonUG\r
A0A2D8YC27,G2L/CRISPR,1924,bacterial,nonUG\r
A0A1D7W544,UG17,1925,bacterial,UG\r
A0A7Y9SFI2,UG17,1925,bacterial,UG\r
A0A251Y2I1,UG17,1926,bacterial,UG\r
A0A4R8UER9,UG17,1926,bacterial,UG\r
A0A5A7MHU1,UG17,1927,bacterial,UG\r
A0A3E0VJK2,UG17,1927,bacterial,UG\r
A0A251Z4Q5,UG17,1928,bacterial,UG\r
A0A3N2CZZ0,UG17,1928,bacterial,UG\r
A0A3M5ISE5,UG17,1929,bacterial,UG\r
A0A2T5E9K4,UG17,1929,bacterial,UG\r
I2DSW1,UG17,1930,bacterial,UG\r
A0A0H5PX45,UG17,1930,bacterial,UG\r
A0A4Q8Y3A7,UG17,1931,bacterial,UG\r
A0A7W7K5D2,UG17,1931,bacterial,UG\r
A0A386TDP8,UG17,1932,bacterial,UG\r
A0A7W2N9C4,UG17,1932,bacterial,UG\r
A0A800JNY0,UG17,1933,bacterial,UG\r
R4YT38,UG17,1933,bacterial,UG\r
A0A1G3TCY5,UG17,1934,bacterial,UG\r
A0A7C5NAH7,UG17,1934,bacterial,UG\r
A0A7C9H584,UG17,1935,bacterial,UG\r
A0A4R1K2V9,UG17,1935,bacterial,UG\r
A0A6N7S4U0,UG17,1936,bacterial,UG\r
A0A0F9SWZ5,UG17,1936,bacterial,UG\r
A0A1N6FP59,UG17,1937,bacterial,UG\r
A0A6N7E1Q8,UG17,1937,bacterial,UG\r
A0A2I0QRF7,UG17,1938,bacterial,UG\r
A0A7S7EU63,UG17,1938,bacterial,UG\r
A0A4R4E7Z1,UG17,1939,bacterial,UG\r
A0A177SC86,UG17,1939,bacterial,UG\r
A0A2N8Q0I5,UG17,1940,bacterial,UG\r
A0A842CHN6,UG17,1940,bacterial,UG\r
A0A1X6WM98,UG17,1941,bacterial,UG\r
A0A0K3A446,UG17,1941,bacterial,UG\r
B8DM78,UG17,1942,bacterial,UG\r
C6BRH7,UG17,1942,bacterial,UG\r
A0A496BQ42,UG17,1943,bacterial,UG\r
A0A6G1TYW2,UG17,1943,bacterial,UG\r
A0A3C1Y8M0,UG17,1944,bacterial,UG\r
A0A0C5SCQ1,UG17,1944,bacterial,UG\r
K9VAJ6,UG17,1945,bacterial,UG\r
A0A0B7H9V1,UG17,1945,bacterial,UG\r
A0A6I2MPB4,UG17,1946,bacterial,UG\r
D2QG84,UG17,1946,bacterial,UG\r
A0A212IVW5,UG17,1947,bacterial,UG\r
A0A5B0BUU0,UG17,1947,bacterial,UG\r
A0A150WM62,UG17,1948,bacterial,UG\r
U2RIY4,UG17,1948,bacterial,UG\r
A0A221SZS0,UG17,1949,bacterial,UG\r
A0A4D0QSD3,UG4,1949,bacterial,UG\r
A0A4R8JK57,UG4,1950,bacterial,UG\r
D4ZMB3,UG4,1950,bacterial,UG\r
A0A4U2CMX2,UG4,1951,bacterial,UG\r
A0A2P5MUE0,UG4,1951,bacterial,UG\r
M9R7V8,UG4,1952,bacterial,UG\r
A0A543KIP3,UG4,1952,bacterial,UG\r
A0A7W2N974,UG4,1953,bacterial,UG\r
A0A0E2ZBV2,UG4,1953,bacterial,UG\r
A0A2D7EF92,UG4,1954,bacterial,UG\r
A0A6P0VQH0,UG4,1954,bacterial,UG\r
A0A5P9CN51,UG4,1955,bacterial,UG\r
A0A496VHJ3,UG4,1955,bacterial,UG\r
A0A1W9L669,UG4,1956,bacterial,UG\r
A0A0G1K4C3,UG4,1956,bacterial,UG\r
A0A7C7XTM8,UG4,1957,bacterial,UG\r
A0A1G0WJ28,UG4,1957,bacterial,UG\r
A0A6F8T865,UG4,1958,bacterial,UG\r
K2EHQ9,UG4,1958,bacterial,UG\r
A0A1G0WCM3,UG4,1959,bacterial,UG\r
A0A4Q5L260,UG4,1959,bacterial,UG\r
A0A3G3IGV0,UG26,1960,bacterial,UG\r
A0A126QVM8,UG26,1960,bacterial,UG\r
A0A416MDJ1,UG26,1961,bacterial,UG\r
A0A3C1H2I1,UG26,1961,bacterial,UG\r
A0A2K4ZBE0,UG26,1962,bacterial,UG\r
A0A3D2KDG8,UG26,1962,bacterial,UG\r
R6CQT6,UG26,1963,bacterial,UG\r
A0A6J4I9T2,UG26,1963,bacterial,UG\r
A0A7C6D587,UG26,1964,bacterial,UG\r
A0A1I0EQ72,UG26,1964,bacterial,UG\r
A0A1S9BTH9,UG26,1965,bacterial,UG\r
A0A352HSR6,UG27,1965,bacterial,UG\r
C9L7Q1,UG27,1966,bacterial,UG\r
A0A0W0YKF5,G2L/CRISPR,1966,bacterial,nonUG\r
A0A6N7ZVH5,G2L/CRISPR,1967,bacterial,nonUG\r
A0A538K9G0,G2L/CRISPR,1967,bacterial,nonUG\r
A0A1G0XTM2,G2L/CRISPR,1968,bacterial,nonUG\r
A0A2E0GV82,G2L/CRISPR,1968,bacterial,nonUG\r
A0A2E9Z8E1,G2L/CRISPR,1969,bacterial,nonUG\r
A0A2G2A0V6,G2L/CRISPR,1969,bacterial,nonUG\r
A0A2M6WRI5,G2L/CRISPR,1970,bacterial,nonUG\r
A0A7V7WLF0,G2L/CRISPR,1970,bacterial,nonUG\r
A0A7V3CEK2,G2L/CRISPR,1971,bacterial,nonUG\r
A0A2V1C7F9,RVT,1971,bacterial,nonUG\r
A0A5N5WSQ2,RVT,1972,bacterial,nonUG\r
A0A6M5Z3R5,RVT,1972,bacterial,nonUG\r
A0A818HFK4,RVT,1973,bacterial,nonUG\r
A0A067C9D2,RVT,1973,bacterial,nonUG\r
A0A2D4BL10,RVT,1974,bacterial,nonUG\r
A0A139B0A6,RVT,1974,bacterial,nonUG\r
A0A2P6N855,RVT,1975,bacterial,nonUG\r
A0A6M5YKV4,G2L/CRISPR,1975,bacterial,nonUG\r
A0A5N9HUG4,G2L/CRISPR,1976,bacterial,nonUG\r
A0A5C6DEL4,G2L/CRISPR,1976,bacterial,nonUG\r
A0A517U1H2,G2L/CRISPR,1977,bacterial,nonUG\r
A0A356EK95,G2L/CRISPR,1977,bacterial,nonUG\r
A0A1C3EIR7,G2L/CRISPR,1978,bacterial,nonUG\r
A0A142WWA2,G2L/CRISPR,1978,bacterial,nonUG\r
A0A517QEG1,G2L/CRISPR,1979,bacterial,nonUG\r
A0A517TE10,G2L/CRISPR,1979,bacterial,nonUG\r
A0A517YKA5,G2L/CRISPR,1980,bacterial,nonUG\r
A0A2D5GW14,G2L/CRISPR,1980,bacterial,nonUG\r
A0A6L7JLF2,UG28,1981,bacterial,UG\r
A0A2E7KH96,UG28,1981,bacterial,UG\r
A0A077NN59,UG28,1982,bacterial,UG\r
A0A291GK47,UG28,1982,bacterial,UG\r
A0A1C4AKF2,UG28,1983,bacterial,UG\r
A0A349QJX5,UG28,1983,bacterial,UG\r
A0A4U0RT17,UG28,1984,bacterial,UG\r
A0A431Q7D4,UG28,1984,bacterial,UG\r
A0A2G6IS22,UG28,1985,bacterial,UG\r
A0A3G2C538,Retroplasmid,1985,bacterial,nonUG\r
A0A433Q165,Retroplasmid,1986,bacterial,nonUG\r
A0A650AFC4,Retroplasmid,1986,bacterial,nonUG\r
A0A650AFC1,Retroplasmid,1987,bacterial,nonUG\r
A0A074S599,Retroplasmid,1987,bacterial,nonUG\r
A0A895KUH0,Retroplasmid,1988,bacterial,nonUG\r
A0A4P8NPF3,Retroplasmid,1988,bacterial,nonUG\r
A0A4P8NQV1,Retroplasmid,1989,bacterial,nonUG\r
E7D4Q0,Retroplasmid,1989,bacterial,nonUG\r
Q9XNK5,Retroplasmid,1990,bacterial,nonUG\r
A0A4P8NWS4,Retroplasmid,1990,bacterial,nonUG\r
A0A7U1AQ42,GII intron,1991,bacterial,nonUG\r
A0A0G3F6P4,GII intron,1991,bacterial,nonUG\r
A0A0S2IE03,GII intron,1992,bacterial,nonUG\r
A0A0S2LQ72,GII intron,1992,bacterial,nonUG\r
A0A6B9VZ22,GII intron,1993,bacterial,nonUG\r
A0A1I9LKB8,GII intron,1993,bacterial,nonUG\r
A0A222AIH0,GII intron,1994,bacterial,nonUG\r
A0A679ETQ6,GII intron,1994,bacterial,nonUG\r
A0A679EJU6,GII intron,1995,bacterial,nonUG\r
A0A541AXI5,GII intron,1995,bacterial,nonUG\r
A0A2H4QBM2,GII intron,1996,bacterial,nonUG\r
M1GPG6,GII intron,1996,bacterial,nonUG\r
A0A3P8MUN1,GII intron,1997,bacterial,nonUG\r
A0A097KKB4,GII intron,1997,bacterial,nonUG\r
A0A1X9GCP1,GII intron,1998,bacterial,nonUG\r
A0A097KL86,GII intron,1998,bacterial,nonUG\r
A0A7K3Y2I9,GII intron,1999,bacterial,nonUG\r
A0A0E3PFP8,GII intron,1999,bacterial,nonUG\r
A0A1I5VQL2,GII intron,2000,bacterial,nonUG\r
A0A096D6M8,GII intron,2000,bacterial,nonUG\r
A0A2Y9BKH3,GII intron,2001,bacterial,nonUG\r
A0A413YHJ2,GII intron,2001,bacterial,nonUG\r
A0A2G6E4I5,GII intron,2002,bacterial,nonUG\r
A0A1V4UDG7,GII intron,2002,bacterial,nonUG\r
A0A1I4LQG7,GII intron,2003,bacterial,nonUG\r
A0A759YK17,GII intron,2003,bacterial,nonUG\r
A0A661ZQF6,GII intron,2004,bacterial,nonUG\r
A0A076VHX8,GII intron,2004,bacterial,nonUG\r
A0A2H4QBU4,GII intron,2005,bacterial,nonUG\r
A7UDN1,GII intron,2005,bacterial,nonUG\r
A0A291LIV3,GII intron,2006,bacterial,nonUG\r
A0A5P9NVZ4,GII intron,2006,bacterial,nonUG\r
Q1XA93,GII intron,2007,bacterial,nonUG\r
A0A291LI44,GII intron,2007,bacterial,nonUG\r
A0A1B0TFP0,GII intron,2008,bacterial,nonUG\r
A0A0G3F1J3,GII intron,2008,bacterial,nonUG\r
A0A5P9NVY5,GII intron,2009,bacterial,nonUG\r
A0A3S5X140,GII intron,2009,bacterial,nonUG\r
A0A223FM36,GII intron,2010,bacterial,nonUG\r
A0A6P0M9Z1,GII intron,2010,bacterial,nonUG\r
G5J7K0,GII intron,2011,bacterial,nonUG\r
A0A223FM14,GII intron,2011,bacterial,nonUG\r
A0A1X9PUH1,GII intron,2012,bacterial,nonUG\r
A0A1C9JBG1,GII intron,2012,bacterial,nonUG\r
A0A1B2RYR6,GII intron,2013,bacterial,nonUG\r
A0A6M0F6M0,GII intron,2013,bacterial,nonUG\r
A0A6P0RC08,GII intron,2014,bacterial,nonUG\r
A0A3D2JBD4,GII intron,2014,bacterial,nonUG\r
A0A0S2LPX6,GII intron,2015,bacterial,nonUG\r
A0A7D5HK32,GII intron,2015,bacterial,nonUG\r
A0A385UJQ7,GII intron,2016,bacterial,nonUG\r
A0A679ELK8,GII intron,2016,bacterial,nonUG\r
A0A1Y9TM46,GII intron,2017,bacterial,nonUG\r
Q7YAJ7,GII intron,2017,bacterial,nonUG\r
A0A366H8Z0,GII intron,2018,bacterial,nonUG\r
A0A4Q3C3C4,GII intron,2018,bacterial,nonUG\r
A0A1Z4H5U6,GII intron,2019,bacterial,nonUG\r
Q8YKQ2,GII intron,2019,bacterial,nonUG\r
A0A0A7RS66,GII intron,2020,bacterial,nonUG\r
A0A3E0NBT3,GII intron,2020,bacterial,nonUG\r
A0A0F8VMR8,GII intron,2021,bacterial,nonUG\r
A0A842U4V7,GII intron,2021,bacterial,nonUG\r
A0A1Q9NF51,GII intron,2022,bacterial,nonUG\r
A0A097KNA0,GII intron,2022,bacterial,nonUG\r
A0A1X9PUM5,GII intron,2023,bacterial,nonUG\r
A0A498QK94,GII intron,2023,bacterial,nonUG\r
J8GVU8,GII intron,2024,bacterial,nonUG\r
A0A0G3SGR8,GII intron,2024,bacterial,nonUG\r
A0A6P0KRZ6,GII intron,2025,bacterial,nonUG\r
A0A6P0S3A4,GII intron,2025,bacterial,nonUG\r
A0A6P2ABF1,GII intron,2026,bacterial,nonUG\r
A0A176RYS9,GII intron,2026,bacterial,nonUG\r
A0A1G7JYU9,GII intron,2027,bacterial,nonUG\r
A0A2K8N9I0,GII intron,2027,bacterial,nonUG\r
A0A661D6N2,GII intron,2028,bacterial,nonUG\r
A0A495Z8W2,GII intron,2028,bacterial,nonUG\r
A0A1Y1Q1Q0,GII intron,2029,bacterial,nonUG\r
A0A1Y1Q1I8,GII intron,2029,bacterial,nonUG\r
A0A2P1G866,GII intron,2030,bacterial,nonUG\r
A0A2R4A3Q4,GII intron,2030,bacterial,nonUG\r
A0A2W6T5W3,GII intron,2031,bacterial,nonUG\r
A0A7R7B5T0,GII intron,2031,bacterial,nonUG\r
A0A3N5CSN5,GII intron,2032,bacterial,nonUG\r
A0A521RVL8,GII intron,2032,bacterial,nonUG\r
A0A844XW14,GII intron,2033,bacterial,nonUG\r
A0A2G2HVD8,GII intron,2033,bacterial,nonUG\r
A0A1L3LPB2,GII intron,2034,bacterial,nonUG\r
A0A0Q6FRL0,GII intron,2034,bacterial,nonUG\r
A0A369T7D5,GII intron,2035,bacterial,nonUG\r
A0A0N7ZA29,non-LTR,2035,bacterial,nonUG\r
A7S0P9,non-LTR,2036,bacterial,nonUG\r
A0A1X7V5K4,non-LTR,2036,bacterial,nonUG\r
A0A1X7TKG8,non-LTR,2037,bacterial,nonUG\r
A0A812SE16,non-LTR,2037,bacterial,nonUG\r
A0A813CNN8,non-LTR,2038,bacterial,nonUG\r
A0A813AKW8,non-LTR,2038,bacterial,nonUG\r
A0A251UV27,non-LTR,2039,bacterial,nonUG\r
A0A699GTZ7,non-LTR,2039,bacterial,nonUG\r
A0A5J4YFZ6,non-LTR,2040,bacterial,nonUG\r
A0A7V3K4U9,non-LTR,2040,bacterial,nonUG\r
A0A6P7U7S9,non-LTR,2041,bacterial,nonUG\r
A0A6P7TT58,non-LTR,2041,bacterial,nonUG\r
A0A812EMT5,non-LTR,2042,bacterial,nonUG\r
A0A6P7TWZ1,non-LTR,2042,bacterial,nonUG\r
A0A6A4VKA8,non-LTR,2043,bacterial,nonUG\r
A0A226DV40,non-LTR,2043,bacterial,nonUG\r
A0A811WHA5,non-LTR,2044,bacterial,nonUG\r
A0A1D1UW74,non-LTR,2044,bacterial,nonUG\r
A0A2B7ZX51,non-LTR,2045,bacterial,nonUG\r
A0A1X7VK11,non-LTR,2045,bacterial,nonUG\r
A0A433BTR1,non-LTR,2046,bacterial,nonUG\r
X6NKH2,non-LTR,2046,bacterial,nonUG\r
A0A7S3AJX3,non-LTR,2047,bacterial,nonUG\r
A0A5M6BQA7,non-LTR,2047,bacterial,nonUG\r
A0A4T0TKN5,non-LTR,2048,bacterial,nonUG\r
A0A2K1QMK1,non-LTR,2048,bacterial,nonUG\r
A0A1M8A4W3,non-LTR,2049,bacterial,nonUG\r
K1WL81,non-LTR,2049,bacterial,nonUG\r
A0A177U127,non-LTR,2050,bacterial,nonUG\r
A0A1B7WD92,non-LTR,2050,bacterial,nonUG\r
A0A2D5XPS0,non-LTR,2051,bacterial,nonUG\r
A9V8N6,non-LTR,2051,bacterial,nonUG\r
B8LEJ8,non-LTR,2052,bacterial,nonUG\r
A0A7S2ZBP1,non-LTR,2052,bacterial,nonUG\r
A0A6H5JA89,non-LTR,2053,bacterial,nonUG\r
A0A6H5KDF6,non-LTR,2053,bacterial,nonUG\r
A0A835YLG1,non-LTR,2054,bacterial,nonUG\r
A0A0G4F5Q1,non-LTR,2054,bacterial,nonUG\r
A0A0G4GU28,non-LTR,2055,bacterial,nonUG\r
A0A0G4GGY8,non-LTR,2055,bacterial,nonUG\r
A0A1Q9DDT0,non-LTR,2056,bacterial,nonUG\r
A0A812TCN6,non-LTR,2056,bacterial,nonUG\r
S9VX95,non-LTR,2057,bacterial,nonUG\r
A0A7G2C2D1,non-LTR,2057,bacterial,nonUG\r
P15594,non-LTR,2058,bacterial,nonUG\r
A0A2G2AE30,non-LTR,2058,bacterial,nonUG\r
A0A433C3U8,non-LTR,2059,bacterial,nonUG\r
A0A7S1L9D9,non-LTR,2059,bacterial,nonUG\r
A0A3M2C5X4,non-LTR,2060,bacterial,nonUG\r
A0A2E8GC58,non-LTR,2060,bacterial,nonUG\r
A0A7S3HSS9,non-LTR,2061,bacterial,nonUG\r
A0A418RMH6,non-LTR,2061,bacterial,nonUG\r
A0A7J4Q5L6,non-LTR,2062,bacterial,nonUG\r
A0A350IBB4,non-LTR,2062,bacterial,nonUG\r
L1JC59,non-LTR,2063,bacterial,nonUG\r
F2TXL1,non-LTR,2063,bacterial,nonUG\r
F2U1I2,non-LTR,2064,bacterial,nonUG\r
A0A5A8C6Z2,non-LTR,2064,bacterial,nonUG\r
A0A391NSB1,non-LTR,2065,bacterial,nonUG\r
A0A5J4TF34,non-LTR,2065,bacterial,nonUG\r
A0A5J4ULR4,non-LTR,2066,bacterial,nonUG\r
A0A5J4U4L8,non-LTR,2066,bacterial,nonUG\r
A0A146K4X2,non-LTR,2067,bacterial,nonUG\r
E1EVS7,non-LTR,2067,bacterial,nonUG\r
V6LZP4,non-LTR,2068,bacterial,nonUG\r
E1EYE6,non-LTR,2068,bacterial,nonUG\r
A0A146KM68,non-LTR,2069,bacterial,nonUG\r
A0A391NJU7,non-LTR,2069,bacterial,nonUG\r
A0A6A5BKJ1,non-LTR,2070,bacterial,nonUG\r
A0A812PJC7,non-LTR,2070,bacterial,nonUG\r
A0A812LZ70,non-LTR,2071,bacterial,nonUG\r
A0A812KAB9,non-LTR,2071,bacterial,nonUG\r
A0A812LIX9,non-LTR,2072,bacterial,nonUG\r
A0A812YXK9,non-LTR,2072,bacterial,nonUG\r
A0A1Q9DGY9,non-LTR,2073,bacterial,nonUG\r
A0A812J0M0,non-LTR,2073,bacterial,nonUG\r
A0A812YL95,non-LTR,2074,bacterial,nonUG\r
A0A812LC01,non-LTR,2074,bacterial,nonUG\r
A0A1Q9EGA2,non-LTR,2075,bacterial,nonUG\r
A0A812NP26,non-LTR,2075,bacterial,nonUG\r
A0A812ZVP1,non-LTR,2076,bacterial,nonUG\r
A0A812ZDT4,non-LTR,2076,bacterial,nonUG\r
A0A812SV87,non-LTR,2077,bacterial,nonUG\r
A0A812IA77,non-LTR,2077,bacterial,nonUG\r
A0A1Q9BWG9,non-LTR,2078,bacterial,nonUG\r
A0A812NDK6,non-LTR,2078,bacterial,nonUG\r
A0A812TZR7,non-LTR,2079,bacterial,nonUG\r
A0A812I4D1,non-LTR,2079,bacterial,nonUG\r
A0A812JMI9,non-LTR,2080,bacterial,nonUG\r
A0A812TE54,non-LTR,2080,bacterial,nonUG\r
A0A812JJD1,non-LTR,2081,bacterial,nonUG\r
A0A1Q9E7Y0,non-LTR,2081,bacterial,nonUG\r
A0A812WW71,non-LTR,2082,bacterial,nonUG\r
A0A812I3B1,non-LTR,2082,bacterial,nonUG\r
A0A812PKC5,non-LTR,2083,bacterial,nonUG\r
A0A812SWA5,non-LTR,2083,bacterial,nonUG\r
A0A813I0K4,non-LTR,2084,bacterial,nonUG\r
A0A813LV87,non-LTR,2084,bacterial,nonUG\r
A0A813HIA5,non-LTR,2085,bacterial,nonUG\r
K0SQG0,non-LTR,2085,bacterial,nonUG\r
A0A6G1SH98,non-LTR,2086,bacterial,nonUG\r
A0A183M8D5,non-LTR,2086,bacterial,nonUG\r
A0A2H1BSZ9,non-LTR,2087,bacterial,nonUG\r
A0A4Z2D6G6,non-LTR,2087,bacterial,nonUG\r
A0A183A2L0,non-LTR,2088,bacterial,nonUG\r
A0A075A9L3,non-LTR,2088,bacterial,nonUG\r
A0A183TLM2,non-LTR,2089,bacterial,nonUG\r
A0A812DKM4,non-LTR,2089,bacterial,nonUG\r
A0A4Y2A5M3,non-LTR,2090,bacterial,nonUG\r
A0A7E4SE11,non-LTR,2090,bacterial,nonUG\r
A0A0K8TDX3,non-LTR,2091,bacterial,nonUG\r
A0A023EX96,non-LTR,2091,bacterial,nonUG\r
A0A821XUS0,non-LTR,2092,bacterial,nonUG\r
A0A7E4RXF1,non-LTR,2092,bacterial,nonUG\r
A0A096XIE1,non-LTR,2093,bacterial,nonUG\r
B7PXF8,non-LTR,2093,bacterial,nonUG\r
A0A4Y2NLE9,non-LTR,2094,bacterial,nonUG\r
A0A293LBM6,non-LTR,2094,bacterial,nonUG\r
A0A6H5J4H1,non-LTR,2095,bacterial,nonUG\r
A0A6H5INU4,non-LTR,2095,bacterial,nonUG\r
J9M3R0,non-LTR,2096,bacterial,nonUG\r
A0A0C9QX33,non-LTR,2096,bacterial,nonUG\r
A0A444T140,non-LTR,2097,bacterial,nonUG\r
A0A336N1I0,non-LTR,2097,bacterial,nonUG\r
A0A1B0GQ24,non-LTR,2098,bacterial,nonUG\r
B8Y0J4,non-LTR,2098,bacterial,nonUG\r
C6F3W3,non-LTR,2099,bacterial,nonUG\r
O44319,non-LTR,2099,bacterial,nonUG\r
A0A817FCW8,non-LTR,2100,bacterial,nonUG\r
A0A7R8CS82,non-LTR,2100,bacterial,nonUG\r
A0A7T8H2M0,non-LTR,2101,bacterial,nonUG\r
A0A817FE65,non-LTR,2101,bacterial,nonUG\r
A0A6S7JLI6,non-LTR,2102,bacterial,nonUG\r
A0A7J7K4W2,non-LTR,2102,bacterial,nonUG\r
A0A7C7WRG5,non-LTR,2103,bacterial,nonUG\r
A0A6A0H940,non-LTR,2103,bacterial,nonUG\r
A0A6A4WP59,non-LTR,2104,bacterial,nonUG\r
A0A443SAG7,non-LTR,2104,bacterial,nonUG\r
A0A443SGA8,non-LTR,2105,bacterial,nonUG\r
Q03274,non-LTR,2105,bacterial,nonUG\r
A0A0V0T642,non-LTR,2106,bacterial,nonUG\r
A0A0V0UME0,non-LTR,2106,bacterial,nonUG\r
A0A0V1ND77,non-LTR,2107,bacterial,nonUG\r
A0A085MRA0,non-LTR,2107,bacterial,nonUG\r
A0A5S6Q2M3,non-LTR,2108,bacterial,nonUG\r
A0A815VKE6,non-LTR,2108,bacterial,nonUG\r
Q76IN8,non-LTR,2109,bacterial,nonUG\r
A0A267DLS1,non-LTR,2109,bacterial,nonUG\r
A0A3Q3EFJ7,non-LTR,2110,bacterial,nonUG\r
A0A672ZCC9,non-LTR,2110,bacterial,nonUG\r
A0A3B3ZBK2,non-LTR,2111,bacterial,nonUG\r
A0A3B3DN38,non-LTR,2111,bacterial,nonUG\r
A0A3B4CU99,non-LTR,2112,bacterial,nonUG\r
A0A401PB75,non-LTR,2112,bacterial,nonUG\r
O44318,non-LTR,2113,bacterial,nonUG\r
A0A6J8CTN8,non-LTR,2113,bacterial,nonUG\r
A0A6P8NFS3,non-LTR,2114,bacterial,nonUG\r
A0A0J7K7K8,non-LTR,2114,bacterial,nonUG\r
F1AQS6,non-LTR,2115,bacterial,nonUG\r
A0A1B0CZB4,non-LTR,2115,bacterial,nonUG\r
A0A6J1Q3P9,non-LTR,2116,bacterial,nonUG\r
A0A7T3V7X0,non-LTR,2116,bacterial,nonUG\r
A0A1B6CJM7,non-LTR,2117,bacterial,nonUG\r
A0A6A0GVT1,non-LTR,2117,bacterial,nonUG\r
A0A2R7VWV8,non-LTR,2118,bacterial,nonUG\r
A0A4Y2WK27,non-LTR,2118,bacterial,nonUG\r
J9KZK7,non-LTR,2119,bacterial,nonUG\r
A0A3L8D8X2,non-LTR,2119,bacterial,nonUG\r
A0A2A2JLL3,non-LTR,2120,bacterial,nonUG\r
A0A402FR38,non-LTR,2120,bacterial,nonUG\r
A0A803TJC4,non-LTR,2121,bacterial,nonUG\r
A0A0V1GR43,non-LTR,2121,bacterial,nonUG\r
A0A183J4B7,non-LTR,2122,bacterial,nonUG\r
A0A164SET1,non-LTR,2122,bacterial,nonUG\r
A0A164P0L0,non-LTR,2123,bacterial,nonUG\r
E3NN41,non-LTR,2123,bacterial,nonUG\r
A0A4U5M9A9,non-LTR,2124,bacterial,nonUG\r
A0A7D9JF01,non-LTR,2124,bacterial,nonUG\r
A0A7D9JMA7,non-LTR,2125,bacterial,nonUG\r
A0A225UNE1,non-LTR,2125,bacterial,nonUG\r
A0A2P4YHP3,non-LTR,2126,bacterial,nonUG\r
A0A068SIS9,non-LTR,2126,bacterial,nonUG\r
A0A1J4KDY7,non-LTR,2127,bacterial,nonUG\r
A0A1J4L088,non-LTR,2127,bacterial,nonUG\r
Q7YXU7,non-LTR,2128,bacterial,nonUG\r
A0A0N5B5H6,non-LTR,2128,bacterial,nonUG\r
A0A0N5BES6,non-LTR,2129,bacterial,nonUG\r
A0A0K0FTC6,non-LTR,2129,bacterial,nonUG\r
A0A0N5C5K5,non-LTR,2130,bacterial,nonUG\r
A0A0K0E086,non-LTR,2130,bacterial,nonUG\r
A0A090L2C5,non-LTR,2131,bacterial,nonUG\r
A0A0N5BH39,non-LTR,2131,bacterial,nonUG\r
A0A0N5C001,non-LTR,2132,bacterial,nonUG\r
A0A1I8D1V2,non-LTR,2132,bacterial,nonUG\r
A0A0N5BDV2,non-LTR,2133,bacterial,nonUG\r
A0A0K0EBX2,non-LTR,2133,bacterial,nonUG\r
A0A0N5BZB8,non-LTR,2134,bacterial,nonUG\r
A0A1I7S6I1,non-LTR,2134,bacterial,nonUG\r
A0A0N5BQ19,non-LTR,2135,bacterial,nonUG\r
A0A0K0EA54,non-LTR,2135,bacterial,nonUG\r
A0A0N5BSH9,non-LTR,2136,bacterial,nonUG\r
A0A0N4VUT6,non-LTR,2136,bacterial,nonUG\r
A0A0N4WKC0,non-LTR,2137,bacterial,nonUG\r
A0A1I7S6I3,non-LTR,2137,bacterial,nonUG\r
A0A183CPI0,non-LTR,2138,bacterial,nonUG\r
A0A0N4VQG2,non-LTR,2138,bacterial,nonUG\r
A0A0N5ACU9,non-LTR,2139,bacterial,nonUG\r
A0A820NAS8,non-LTR,2139,bacterial,nonUG\r
A0A6G3MDR4,non-LTR,2140,bacterial,nonUG\r
A0A6G3MES7,non-LTR,2140,bacterial,nonUG\r
C5K8E4,non-LTR,2141,bacterial,nonUG\r
A0A6J1NUQ7,non-LTR,2141,bacterial,nonUG\r
H3B0G5,non-LTR,2142,bacterial,nonUG\r
A0A7R8YMH9,non-LTR,2142,bacterial,nonUG\r
Q76IN5,non-LTR,2143,bacterial,nonUG\r
A0A1S4EPZ1,non-LTR,2143,bacterial,nonUG\r
A0A3Q0JF36,non-LTR,2144,bacterial,nonUG\r
A0A803T0X5,non-LTR,2144,bacterial,nonUG\r
A0A5C6N5I2,non-LTR,2145,bacterial,nonUG\r
A0A6P4NL76,non-LTR,2145,bacterial,nonUG\r
A0A3C1S269,non-LTR,2146,bacterial,nonUG\r
A0A6J2X548,non-LTR,2146,bacterial,nonUG\r
A0A4Q9LMW1,non-LTR,2147,bacterial,nonUG\r
A0A4V2JX17,non-LTR,2147,bacterial,nonUG\r
A0A061BJX0,non-LTR,2148,bacterial,nonUG\r
A0A6P7TTG2,non-LTR,2148,bacterial,nonUG\r
A0A6P7TXG5,non-LTR,2149,bacterial,nonUG\r
A0A6P6YLW1,non-LTR,2149,bacterial,nonUG\r
Q76IN3,non-LTR,2150,bacterial,nonUG\r
Q76IN4,non-LTR,2150,bacterial,nonUG\r
A0A2B4SGK4,non-LTR,2151,bacterial,nonUG\r
A0A2B4RED6,non-LTR,2151,bacterial,nonUG\r
A0A8B6FSL2,non-LTR,2152,bacterial,nonUG\r
A0A6P6JHZ7,non-LTR,2152,bacterial,nonUG\r
A0A3S1A548,non-LTR,2153,bacterial,nonUG\r
A0A2G8KBI0,non-LTR,2153,bacterial,nonUG\r
A0A6S7JSG2,non-LTR,2154,bacterial,nonUG\r
A0A7I1A4S3,non-LTR,2154,bacterial,nonUG\r
A0A2G8LRJ1,non-LTR,2155,bacterial,nonUG\r
A0A838U394,non-LTR,2155,bacterial,nonUG\r
A0A6C0C7B7,non-LTR,2156,bacterial,nonUG\r
A0A2E3BYI0,non-LTR,2156,bacterial,nonUG\r
A0A6A5B556,non-LTR,2157,bacterial,nonUG\r
A0A1D1VGC1,non-LTR,2157,bacterial,nonUG\r
A0A1D1VQ72,non-LTR,2158,bacterial,nonUG\r
A0A812ST18,non-LTR,2158,bacterial,nonUG\r
A0A812LHZ7,non-LTR,2159,bacterial,nonUG\r
A0A812SD09,non-LTR,2159,bacterial,nonUG\r
A0A1Q9BXJ2,non-LTR,2160,bacterial,nonUG\r
A0A812RAU9,non-LTR,2160,bacterial,nonUG\r
A0A812N8Q1,non-LTR,2161,bacterial,nonUG\r
A0A1Q9CMB9,non-LTR,2161,bacterial,nonUG\r
A0A1Q9D757,non-LTR,2162,bacterial,nonUG\r
A0A1Q9D9S0,non-LTR,2162,bacterial,nonUG\r
A0A812TYA8,non-LTR,2163,bacterial,nonUG\r
A0A812LKC8,non-LTR,2163,bacterial,nonUG\r
A0A812HZ90,non-LTR,2164,bacterial,nonUG\r
A0A7S4D1P2,non-LTR,2164,bacterial,nonUG\r
A0A813GDX7,non-LTR,2165,bacterial,nonUG\r
A0A813ENQ5,non-LTR,2165,bacterial,nonUG\r
A0A812LCA6,non-LTR,2166,bacterial,nonUG\r
A0A812SJP6,non-LTR,2166,bacterial,nonUG\r
A0A812LFZ4,non-LTR,2167,bacterial,nonUG\r
A0A812MG09,non-LTR,2167,bacterial,nonUG\r
A0A812USC9,non-LTR,2168,bacterial,nonUG\r
A0A1Q9EV68,non-LTR,2168,bacterial,nonUG\r
A0A1Q9EVI4,non-LTR,2169,bacterial,nonUG\r
A0A812J2W6,non-LTR,2169,bacterial,nonUG\r
A0A812N8T1,non-LTR,2170,bacterial,nonUG\r
A0A812N7L4,non-LTR,2170,bacterial,nonUG\r
A0A812TEH6,non-LTR,2171,bacterial,nonUG\r
A0A812PHR1,non-LTR,2171,bacterial,nonUG\r
A0A813A4A8,non-LTR,2172,bacterial,nonUG\r
A0A812MYR2,non-LTR,2172,bacterial,nonUG\r
A0A812Z348,non-LTR,2173,bacterial,nonUG\r
A0A812VYA8,non-LTR,2173,bacterial,nonUG\r
A0A812RLK5,non-LTR,2174,bacterial,nonUG\r
A0A812JQV2,non-LTR,2174,bacterial,nonUG\r
A0A812LX55,non-LTR,2175,bacterial,nonUG\r
A0A1Q9CR95,non-LTR,2175,bacterial,nonUG\r
A0A812QE58,non-LTR,2176,bacterial,nonUG\r
A0A812P2U1,non-LTR,2176,bacterial,nonUG\r
A0A812XB72,non-LTR,2177,bacterial,nonUG\r
A0A812RVF4,non-LTR,2177,bacterial,nonUG\r
A0A812L0K3,non-LTR,2178,bacterial,nonUG\r
A0A812MWY2,non-LTR,2178,bacterial,nonUG\r
A0A1Q9CV02,non-LTR,2179,bacterial,nonUG\r
A0A812JHQ2,non-LTR,2179,bacterial,nonUG\r
A0A812PHU8,non-LTR,2180,bacterial,nonUG\r
A0A813HUX1,non-LTR,2180,bacterial,nonUG\r
A0A1Q9EH58,non-LTR,2181,bacterial,nonUG\r
A0A812RXH1,non-LTR,2181,bacterial,nonUG\r
A0A812U1M4,non-LTR,2182,bacterial,nonUG\r
A0A813BKB5,non-LTR,2182,bacterial,nonUG\r
A0A813A2Y3,non-LTR,2183,bacterial,nonUG\r
A0A812XW51,non-LTR,2183,bacterial,nonUG\r
A0A812MEF8,non-LTR,2184,bacterial,nonUG\r
A0A812UWU6,non-LTR,2184,bacterial,nonUG\r
A0A812I1X2,non-LTR,2185,bacterial,nonUG\r
A0A812Z1Z3,non-LTR,2185,bacterial,nonUG\r
A0A1Q9DSY3,non-LTR,2186,bacterial,nonUG\r
A0A812SB26,non-LTR,2186,bacterial,nonUG\r
A0A812V6W6,non-LTR,2187,bacterial,nonUG\r
A0A813J9G6,non-LTR,2187,bacterial,nonUG\r
A0A1Q9E5E1,non-LTR,2188,bacterial,nonUG\r
A0A812KWY3,non-LTR,2188,bacterial,nonUG\r
K1VCQ9,non-LTR,2189,bacterial,nonUG\r
A0A5K1K0I5,non-LTR,2189,bacterial,nonUG\r
A0A3N1LK92,non-LTR,2190,bacterial,nonUG\r
A0A7S4AWK4,non-LTR,2190,bacterial,nonUG\r
A0A7S1VB90,non-LTR,2191,bacterial,nonUG\r
A0A225WQM4,non-LTR,2191,bacterial,nonUG\r
A0A2H5QZD1,non-LTR,2192,bacterial,nonUG\r
A0A2H5U3T2,non-LTR,2192,bacterial,nonUG\r
A0A2Z6R810,non-LTR,2193,bacterial,nonUG\r
A0A2H5SWW4,non-LTR,2193,bacterial,nonUG\r
A0A2H5RQU5,non-LTR,2194,bacterial,nonUG\r
A0A015JDB7,non-LTR,2194,bacterial,nonUG\r
A0A015LG84,non-LTR,2195,bacterial,nonUG\r
A0A2Z6RKH2,non-LTR,2195,bacterial,nonUG\r
A0A015K9I1,non-LTR,2196,bacterial,nonUG\r
A0A2Z6QIK6,non-LTR,2196,bacterial,nonUG\r
A0A2Z6QT07,non-LTR,2197,bacterial,nonUG\r
A0A2H5RRP2,non-LTR,2197,bacterial,nonUG\r
A0A2Z6QY61,non-LTR,2198,bacterial,nonUG\r
A0A2Z6Q998,non-LTR,2198,bacterial,nonUG\r
A0A015KGU0,non-LTR,2199,bacterial,nonUG\r
A0A015ILI8,non-LTR,2199,bacterial,nonUG\r
A0A2H5TWU9,non-LTR,2200,bacterial,nonUG\r
A0A015K081,non-LTR,2200,bacterial,nonUG\r
A0A7S3JVG0,non-LTR,2201,bacterial,nonUG\r
A0A227JRR0,non-LTR,2201,bacterial,nonUG\r
A0A7S0STN6,non-LTR,2202,bacterial,nonUG\r
A0A6A5BYM3,non-LTR,2202,bacterial,nonUG\r
A0A6U3JU95,non-LTR,2203,bacterial,nonUG\r
A0A812WR18,non-LTR,2203,bacterial,nonUG\r
A0A812X3E6,non-LTR,2204,bacterial,nonUG\r
A0A813AMR6,non-LTR,2204,bacterial,nonUG\r
A0A812JQJ6,non-LTR,2205,bacterial,nonUG\r
A0A812P745,non-LTR,2205,bacterial,nonUG\r
A0A1Q9DK32,non-LTR,2206,bacterial,nonUG\r
A0A812R3T0,non-LTR,2206,bacterial,nonUG\r
A0A812S3K1,non-LTR,2207,bacterial,nonUG\r
A0A812UJV2,non-LTR,2207,bacterial,nonUG\r
A0A812UUI6,non-LTR,2208,bacterial,nonUG\r
A0A812RB61,non-LTR,2208,bacterial,nonUG\r
A0A812M588,non-LTR,2209,bacterial,nonUG\r
A0A812NQ92,non-LTR,2209,bacterial,nonUG\r
A0A1Q9C6G7,non-LTR,2210,bacterial,nonUG\r
A0A1Q9EM40,non-LTR,2210,bacterial,nonUG\r
A0A812WZ29,non-LTR,2211,bacterial,nonUG\r
A0A812LMY0,non-LTR,2211,bacterial,nonUG\r
A0A1Q9BXN6,non-LTR,2212,bacterial,nonUG\r
A0A1Q9BVI2,non-LTR,2212,bacterial,nonUG\r
A0A812X9N1,non-LTR,2213,bacterial,nonUG\r
A0A812LPH7,non-LTR,2213,bacterial,nonUG\r
A0A812VCD6,non-LTR,2214,bacterial,nonUG\r
A0A812XNH3,non-LTR,2214,bacterial,nonUG\r
A0A1Q9DGS9,non-LTR,2215,bacterial,nonUG\r
A0A812SIZ8,non-LTR,2215,bacterial,nonUG\r
A0A1Q9DXU4,non-LTR,2216,bacterial,nonUG\r
A0A1Q9F3U2,non-LTR,2216,bacterial,nonUG\r
A0A812UK14,non-LTR,2217,bacterial,nonUG\r
A0A812P263,non-LTR,2217,bacterial,nonUG\r
A0A812MUE4,non-LTR,2218,bacterial,nonUG\r
A0A812UKT2,non-LTR,2218,bacterial,nonUG\r
A0A812YJF2,non-LTR,2219,bacterial,nonUG\r
A0A812J6S1,non-LTR,2219,bacterial,nonUG\r
A0A813A2P7,non-LTR,2220,bacterial,nonUG\r
A0A812LX97,non-LTR,2220,bacterial,nonUG\r
A0A812U2K5,non-LTR,2221,bacterial,nonUG\r
A0A812M2B5,non-LTR,2221,bacterial,nonUG\r
A0A812Y637,non-LTR,2222,bacterial,nonUG\r
A0A812XUR2,non-LTR,2222,bacterial,nonUG\r
A0A812RYS5,non-LTR,2223,bacterial,nonUG\r
A0A812W2D1,non-LTR,2223,bacterial,nonUG\r
A0A1Q9BXA2,non-LTR,2224,bacterial,nonUG\r
A0A812ZM85,non-LTR,2224,bacterial,nonUG\r
A0A1Q9C187,non-LTR,2225,bacterial,nonUG\r
A0A812T3V1,non-LTR,2225,bacterial,nonUG\r
A0A812NDN3,non-LTR,2226,bacterial,nonUG\r
A0A812MAB7,non-LTR,2226,bacterial,nonUG\r
A0A1Q9D966,non-LTR,2227,bacterial,nonUG\r
A0A812UXZ3,non-LTR,2227,bacterial,nonUG\r
A0A812K9G8,non-LTR,2228,bacterial,nonUG\r
A0A1Q9EZ72,non-LTR,2228,bacterial,nonUG\r
A0A812N2S3,non-LTR,2229,bacterial,nonUG\r
A0A812PE75,non-LTR,2229,bacterial,nonUG\r
A0A813HFM0,non-LTR,2230,bacterial,nonUG\r
A0A813F4N3,non-LTR,2230,bacterial,nonUG\r
A0A813HG44,non-LTR,2231,bacterial,nonUG\r
A0A813IP22,non-LTR,2231,bacterial,nonUG\r
A0A813FW34,non-LTR,2232,bacterial,nonUG\r
A0A812KC36,non-LTR,2232,bacterial,nonUG\r
A0A812VP83,non-LTR,2233,bacterial,nonUG\r
A0A812W2S7,non-LTR,2233,bacterial,nonUG\r
A0A812MB35,non-LTR,2234,bacterial,nonUG\r
A0A1Q9DCL9,non-LTR,2234,bacterial,nonUG\r
A0A812I779,non-LTR,2235,bacterial,nonUG\r
A0A812V761,non-LTR,2235,bacterial,nonUG\r
A0A812N1K1,non-LTR,2236,bacterial,nonUG\r
A0A7C7T0R2,non-LTR,2236,bacterial,nonUG\r
A0A564ZCN3,non-LTR,2237,bacterial,nonUG\r
A0A813FAF6,non-LTR,2237,bacterial,nonUG\r
E4YX28,non-LTR,2238,bacterial,nonUG\r
A0A6H5J2C4,non-LTR,2238,bacterial,nonUG\r
A0A6H5IXL4,non-LTR,2239,bacterial,nonUG\r
A0A6V7KMJ5,non-LTR,2239,bacterial,nonUG\r
A0A6H5GXR4,non-LTR,2240,bacterial,nonUG\r
A0A146KP46,non-LTR,2240,bacterial,nonUG\r
A0A6H5G4D2,non-LTR,2241,bacterial,nonUG\r
A0A7E4S945,non-LTR,2241,bacterial,nonUG\r
A0A023EYP7,non-LTR,2242,bacterial,nonUG\r
A0A224XAL8,non-LTR,2242,bacterial,nonUG\r
A0A2R7VTT1,non-LTR,2243,bacterial,nonUG\r
A0A2R7W5S6,non-LTR,2243,bacterial,nonUG\r
A0A6H5FUX9,non-LTR,2244,bacterial,nonUG\r
A0A224X653,non-LTR,2244,bacterial,nonUG\r
A0A7E4S768,non-LTR,2245,bacterial,nonUG\r
A0A1B6DRM7,non-LTR,2245,bacterial,nonUG\r
A0A6H5I9W9,non-LTR,2246,bacterial,nonUG\r
Q03277,non-LTR,2246,bacterial,nonUG\r
A0A139W8L1,non-LTR,2247,bacterial,nonUG\r
J9LCL3,non-LTR,2247,bacterial,nonUG\r
J9LES4,non-LTR,2248,bacterial,nonUG\r
A0A6G0SZZ7,non-LTR,2248,bacterial,nonUG\r
J9KA38,non-LTR,2249,bacterial,nonUG\r
A0A5E4NRC4,non-LTR,2249,bacterial,nonUG\r
J9KCN1,non-LTR,2250,bacterial,nonUG\r
A0A7R8VZK6,non-LTR,2250,bacterial,nonUG\r
A0A1B6FCA5,non-LTR,2251,bacterial,nonUG\r
A0A139WA45,non-LTR,2251,bacterial,nonUG\r
A0A224X5M4,non-LTR,2252,bacterial,nonUG\r
A0A0K1IK29,non-LTR,2252,bacterial,nonUG\r
A0A087TJZ1,non-LTR,2253,bacterial,nonUG\r
A0A1W7R9Y4,non-LTR,2253,bacterial,nonUG\r
A0A811WWI7,non-LTR,2254,bacterial,nonUG\r
A0A821YB17,non-LTR,2254,bacterial,nonUG\r
A0A4C1WAB2,non-LTR,2255,bacterial,nonUG\r
A0A4C2ABP3,non-LTR,2255,bacterial,nonUG\r
O44315,non-LTR,2256,bacterial,nonUG\r
A0A4C1XLK8,non-LTR,2256,bacterial,nonUG\r
A0A4Y2ES00,non-LTR,2257,bacterial,nonUG\r
A0A4Y2DII1,non-LTR,2257,bacterial,nonUG\r
A0A4Y2HV43,non-LTR,2258,bacterial,nonUG\r
A0A4Y2T0K4,non-LTR,2258,bacterial,nonUG\r
A0A4Y2UWZ7,non-LTR,2259,bacterial,nonUG\r
A0A4Y2RJY4,non-LTR,2259,bacterial,nonUG\r
A0A4Y2U8D7,non-LTR,2260,bacterial,nonUG\r
A0A4Y2DXD3,non-LTR,2260,bacterial,nonUG\r
A0A4Y2PWI6,non-LTR,2261,bacterial,nonUG\r
A0A4Y2CGV0,non-LTR,2261,bacterial,nonUG\r
A0A4Y2SSS4,non-LTR,2262,bacterial,nonUG\r
A0A4Y2NDK8,non-LTR,2262,bacterial,nonUG\r
A0A087T8L4,non-LTR,2263,bacterial,nonUG\r
A0A087TND3,non-LTR,2263,bacterial,nonUG\r
A0A131XWC0,non-LTR,2264,bacterial,nonUG\r
A0A4Y2DIU2,non-LTR,2264,bacterial,nonUG\r
A0A4Y2GMB5,non-LTR,2265,bacterial,nonUG\r
A0A4Y2MTB6,non-LTR,2265,bacterial,nonUG\r
A0A0J7JW51,non-LTR,2266,bacterial,nonUG\r
A0A4Y2VVE3,non-LTR,2266,bacterial,nonUG\r
A0A4Y2EQ91,non-LTR,2267,bacterial,nonUG\r
A0A4Y2S4K6,non-LTR,2267,bacterial,nonUG\r
A0A087TUG6,non-LTR,2268,bacterial,nonUG\r
A0A0R3QBG2,non-LTR,2268,bacterial,nonUG\r
A0A0J7KJ07,non-LTR,2269,bacterial,nonUG\r
A0A0J7K3R6,non-LTR,2269,bacterial,nonUG\r
A0A0J7KJ37,non-LTR,2270,bacterial,nonUG\r
A0A0J7K7P2,non-LTR,2270,bacterial,nonUG\r
E0VRT2,non-LTR,2271,bacterial,nonUG\r
A0A0J7KFP5,non-LTR,2271,bacterial,nonUG\r
A0A3S2NGT9,non-LTR,2272,bacterial,nonUG\r
A0A4Q0MIQ8,non-LTR,2272,bacterial,nonUG\r
A0A2S2PBP5,non-LTR,2273,bacterial,nonUG\r
A0A2M3Z312,non-LTR,2273,bacterial,nonUG\r
A0A6H5ISY4,non-LTR,2274,bacterial,nonUG\r
A0A6H5IWA3,non-LTR,2274,bacterial,nonUG\r
A0A6H5I7U7,non-LTR,2275,bacterial,nonUG\r
A0A4C1VFR4,non-LTR,2275,bacterial,nonUG\r
A0A034WR48,non-LTR,2276,bacterial,nonUG\r
U4UZM3,non-LTR,2276,bacterial,nonUG\r
D7GXX9,non-LTR,2277,bacterial,nonUG\r
A0A1S4EMG7,non-LTR,2277,bacterial,nonUG\r
N6UIP2,non-LTR,2278,bacterial,nonUG\r
A0A2G3AQL6,non-LTR,2278,bacterial,nonUG\r
D7EIB0,non-LTR,2279,bacterial,nonUG\r
A0A139WA31,non-LTR,2279,bacterial,nonUG\r
A0A834IYI1,non-LTR,2280,bacterial,nonUG\r
A0A1B6KDF3,non-LTR,2280,bacterial,nonUG\r
X1X936,non-LTR,2281,bacterial,nonUG\r
A0A6G0Z5E5,non-LTR,2281,bacterial,nonUG\r
J9KT70,non-LTR,2282,bacterial,nonUG\r
A0A6G0YK55,non-LTR,2282,bacterial,nonUG\r
J9LBG0,non-LTR,2283,bacterial,nonUG\r
A0A7J6VQP8,non-LTR,2283,bacterial,nonUG\r
A0A6H5GVK6,non-LTR,2284,bacterial,nonUG\r
A0A1Y1N165,non-LTR,2284,bacterial,nonUG\r
A0A7J6SVV3,non-LTR,2285,bacterial,nonUG\r
A0A7J6R643,non-LTR,2285,bacterial,nonUG\r
C5KV00,non-LTR,2286,bacterial,nonUG\r
A0A7J6N384,non-LTR,2286,bacterial,nonUG\r
C5L4Q7,non-LTR,2287,bacterial,nonUG\r
A0A7J6T2J7,non-LTR,2287,bacterial,nonUG\r
A0A7J6NQQ1,non-LTR,2288,bacterial,nonUG\r
A0A7J6NS11,non-LTR,2288,bacterial,nonUG\r
A0A7J6NC36,non-LTR,2289,bacterial,nonUG\r
C5LU70,non-LTR,2289,bacterial,nonUG\r
A0A7J6M1X4,non-LTR,2290,bacterial,nonUG\r
A0A7J6TZ08,non-LTR,2290,bacterial,nonUG\r
A0A7J6LCI0,non-LTR,2291,bacterial,nonUG\r
A0A7J6KXH8,non-LTR,2291,bacterial,nonUG\r
A0A2E9D1N9,non-LTR,2292,bacterial,nonUG\r
A0A4Q3EZD4,non-LTR,2292,bacterial,nonUG\r
U5EFQ1,non-LTR,2293,bacterial,nonUG\r
A0A3S2PH44,non-LTR,2293,bacterial,nonUG\r
A0A0A9VXD9,non-LTR,2294,bacterial,nonUG\r
A0A7D9LY73,non-LTR,2294,bacterial,nonUG\r
A0A0M4H4U9,non-LTR,2295,bacterial,nonUG\r
A0A7T8HG41,non-LTR,2295,bacterial,nonUG\r
A0A142LX39,non-LTR,2296,bacterial,nonUG\r
A0A0J7NBA7,non-LTR,2296,bacterial,nonUG\r
A0A6H5INW1,non-LTR,2297,bacterial,nonUG\r
A0A226D6B3,non-LTR,2297,bacterial,nonUG\r
A0A4C1SE01,non-LTR,2298,bacterial,nonUG\r
A0A0L0BQB6,non-LTR,2298,bacterial,nonUG\r
A0A7S3Y6L7,non-LTR,2299,bacterial,nonUG\r
A0A7S4DCB7,non-LTR,2299,bacterial,nonUG\r
A0A7J6TU77,non-LTR,2300,bacterial,nonUG\r
A0A7S4DAL7,non-LTR,2300,bacterial,nonUG\r
A0A164SU62,non-LTR,2301,bacterial,nonUG\r
A0A164TFW3,non-LTR,2301,bacterial,nonUG\r
A0A162D447,non-LTR,2302,bacterial,nonUG\r
A0A834R000,non-LTR,2302,bacterial,nonUG\r
A0A1Y3ASY1,non-LTR,2303,bacterial,nonUG\r
A0A7J6NMN4,non-LTR,2303,bacterial,nonUG\r
A0A7J6NBL7,non-LTR,2304,bacterial,nonUG\r
A0A7J6NS36,non-LTR,2304,bacterial,nonUG\r
A0A7J6PM66,non-LTR,2305,bacterial,nonUG\r
A0A7J6KU40,non-LTR,2305,bacterial,nonUG\r
A0A7J6KUZ7,non-LTR,2306,bacterial,nonUG\r
A0A7J6NSK5,non-LTR,2306,bacterial,nonUG\r
A0A7J6KTF8,non-LTR,2307,bacterial,nonUG\r
A0A7J6P421,non-LTR,2307,bacterial,nonUG\r
E4YVY4,non-LTR,2308,bacterial,nonUG\r
E4YBK9,non-LTR,2308,bacterial,nonUG\r
E4YX78,non-LTR,2309,bacterial,nonUG\r
E4XV35,non-LTR,2309,bacterial,nonUG\r
A0A2R6NN06,non-LTR,2310,bacterial,nonUG\r
A0A060SZC5,non-LTR,2310,bacterial,nonUG\r
A0A0B7FLA0,non-LTR,2311,bacterial,nonUG\r
A0A284R177,non-LTR,2311,bacterial,nonUG\r
A0A4Y9ZJN1,non-LTR,2312,bacterial,nonUG\r
G4TZI5,non-LTR,2312,bacterial,nonUG\r
A0A409WK84,non-LTR,2313,bacterial,nonUG\r
A0A836ARN3,non-LTR,2313,bacterial,nonUG\r
A0A0C9UJJ3,non-LTR,2314,bacterial,nonUG\r
A0A146H3U4,non-LTR,2314,bacterial,nonUG\r
A0A2G8RTX6,non-LTR,2315,bacterial,nonUG\r
A0A370TE45,non-LTR,2315,bacterial,nonUG\r
A0A1E3BPY4,non-LTR,2316,bacterial,nonUG\r
A0A4Q4PW77,non-LTR,2316,bacterial,nonUG\r
A0A0L1IL73,non-LTR,2317,bacterial,nonUG\r
R9A952,non-LTR,2317,bacterial,nonUG\r
A0A093UTM5,non-LTR,2318,bacterial,nonUG\r
A0A4U0VMZ3,non-LTR,2318,bacterial,nonUG\r
A0A4S9M6M0,non-LTR,2319,bacterial,nonUG\r
A0A401KYN2,non-LTR,2319,bacterial,nonUG\r
B8MV45,non-LTR,2320,bacterial,nonUG\r
A6RHH2,non-LTR,2320,bacterial,nonUG\r
A0A077R560,non-LTR,2321,bacterial,nonUG\r
A0A0C4F9C0,non-LTR,2321,bacterial,nonUG\r
A0A0C4EVM3,non-LTR,2322,bacterial,nonUG\r
M7X341,non-LTR,2322,bacterial,nonUG\r
A0A238FDX7,non-LTR,2323,bacterial,nonUG\r
A0A177T065,non-LTR,2323,bacterial,nonUG\r
A0A2S4PSS3,non-LTR,2324,bacterial,nonUG\r
A0A0B1PAW2,non-LTR,2324,bacterial,nonUG\r
A0A364MR89,non-LTR,2325,bacterial,nonUG\r
A0A0B1P2R6,non-LTR,2325,bacterial,nonUG\r
A6RFJ6,non-LTR,2326,bacterial,nonUG\r
A0A1W5CR62,non-LTR,2326,bacterial,nonUG\r
A0A1W5D962,non-LTR,2327,bacterial,nonUG\r
Q2GMP6,non-LTR,2327,bacterial,nonUG\r
A0A0F4Z7R1,non-LTR,2328,bacterial,nonUG\r
A0A0A1TJ98,non-LTR,2328,bacterial,nonUG\r
Q2GTW0,non-LTR,2329,bacterial,nonUG\r
A0A135S7P5,non-LTR,2329,bacterial,nonUG\r
A0A484G2T1,non-LTR,2330,bacterial,nonUG\r
A0A1B7XZX7,non-LTR,2330,bacterial,nonUG\r
A0A0P7BQW8,non-LTR,2331,bacterial,nonUG\r
A0A366PHI6,non-LTR,2331,bacterial,nonUG\r
A0A2K0W9A5,non-LTR,2332,bacterial,nonUG\r
A0A6S6V9B6,non-LTR,2332,bacterial,nonUG\r
A0A420UDU7,non-LTR,2333,bacterial,nonUG\r
A0A0B4H0C9,non-LTR,2333,bacterial,nonUG\r
A0A317A9G6,non-LTR,2334,bacterial,nonUG\r
A0A545UKX9,non-LTR,2334,bacterial,nonUG\r
A0A0A1TJG2,non-LTR,2335,bacterial,nonUG\r
A0A179F7A1,non-LTR,2335,bacterial,nonUG\r
A0A0F7ZIF0,non-LTR,2336,bacterial,nonUG\r
A0A2S4PME5,non-LTR,2336,bacterial,nonUG\r
C8VTR9,non-LTR,2337,bacterial,nonUG\r
A0A1D9QB56,non-LTR,2337,bacterial,nonUG\r
A0A420P8S7,non-LTR,2338,bacterial,nonUG\r
A0A4T0VD83,non-LTR,2338,bacterial,nonUG\r
A0A395IN54,non-LTR,2339,bacterial,nonUG\r
A0A395NQ56,non-LTR,2339,bacterial,nonUG\r
A0A2S4PZG0,non-LTR,2340,bacterial,nonUG\r
A0A0F8BM20,non-LTR,2340,bacterial,nonUG\r
A0A2S4PYU5,non-LTR,2341,bacterial,nonUG\r
A0A1E3B2F5,non-LTR,2341,bacterial,nonUG\r
A0A1E3B0W0,non-LTR,2342,bacterial,nonUG\r
A0A834RNH5,non-LTR,2342,bacterial,nonUG\r
A7EVI9,non-LTR,2343,bacterial,nonUG\r
A0A1W5CZS5,non-LTR,2343,bacterial,nonUG\r
A0A167E5I2,non-LTR,2344,bacterial,nonUG\r
A0A5E8BYT4,non-LTR,2344,bacterial,nonUG\r
A0A5E8BE27,non-LTR,2345,bacterial,nonUG\r
A0A4S4M2I6,non-LTR,2345,bacterial,nonUG\r
A0A4S4KAT6,non-LTR,2346,bacterial,nonUG\r
Q45W67,non-LTR,2346,bacterial,nonUG\r
A0A4Q2D6Y7,non-LTR,2347,bacterial,nonUG\r
A0A4Z0A595,non-LTR,2347,bacterial,nonUG\r
A0A286UPU1,non-LTR,2348,bacterial,nonUG\r
A0A5N5Q824,non-LTR,2348,bacterial,nonUG\r
A0A5N5Q7I2,non-LTR,2349,bacterial,nonUG\r
A0A2H3J311,non-LTR,2349,bacterial,nonUG\r
A0A836DD35,non-LTR,2350,bacterial,nonUG\r
A0A401H0J1,non-LTR,2350,bacterial,nonUG\r
A0A409X2X0,non-LTR,2351,bacterial,nonUG\r
A0A177VX50,non-LTR,2351,bacterial,nonUG\r
A0A127ZG06,non-LTR,2352,bacterial,nonUG\r
A0A140KNL1,non-LTR,2352,bacterial,nonUG\r
A0A067M096,non-LTR,2353,bacterial,nonUG\r
A0A2G2JH10,non-LTR,2353,bacterial,nonUG\r
A0A0S4IXU6,non-LTR,2354,bacterial,nonUG\r
A0A7G2CSK8,non-LTR,2354,bacterial,nonUG\r
A0A433BEK1,non-LTR,2355,bacterial,nonUG\r
A0A7S1W0I2,non-LTR,2355,bacterial,nonUG\r
A0A7J6PK80,non-LTR,2356,bacterial,nonUG\r
C5KX49,non-LTR,2356,bacterial,nonUG\r
A0A6A4VY41,non-LTR,2357,bacterial,nonUG\r
A0A2V2UGV3,non-LTR,2357,bacterial,nonUG\r
A4H3V8,non-LTR,2358,bacterial,nonUG\r
A0A1X0NLM9,non-LTR,2358,bacterial,nonUG\r
A0A6A4UZZ8,non-LTR,2359,bacterial,nonUG\r
F9WLG9,non-LTR,2359,bacterial,nonUG\r
A0A1X0NZJ7,non-LTR,2360,bacterial,nonUG\r
A0A0L1KK94,non-LTR,2360,bacterial,nonUG\r
A0A267H915,non-LTR,2361,bacterial,nonUG\r
J9M0C8,non-LTR,2361,bacterial,nonUG\r
J9KST2,non-LTR,2362,bacterial,nonUG\r
J9KNM1,non-LTR,2362,bacterial,nonUG\r
J9JK68,non-LTR,2363,bacterial,nonUG\r
A0A6G0TAS1,non-LTR,2363,bacterial,nonUG\r
X1X035,non-LTR,2364,bacterial,nonUG\r
A0A256WGS0,non-LTR,2364,bacterial,nonUG\r
A0A0V0G5S9,non-LTR,2365,bacterial,nonUG\r
J9LI04,non-LTR,2365,bacterial,nonUG\r
J9L5A4,non-LTR,2366,bacterial,nonUG\r
A0A6G0XKF1,non-LTR,2366,bacterial,nonUG\r
A0A1S4ERY4,non-LTR,2367,bacterial,nonUG\r
A0A1W7R6F8,non-LTR,2367,bacterial,nonUG\r
A0A0P6IVM9,non-LTR,2368,bacterial,nonUG\r
A0A182HF73,non-LTR,2368,bacterial,nonUG\r
A0A2M4AM99,non-LTR,2369,bacterial,nonUG\r
A0A0K8V7H0,non-LTR,2369,bacterial,nonUG\r
W8C2B6,non-LTR,2370,bacterial,nonUG\r
A0A7G3AYS6,non-LTR,2370,bacterial,nonUG\r
A0A7G3B021,non-LTR,2371,bacterial,nonUG\r
A0A4Y2BSC8,non-LTR,2371,bacterial,nonUG\r
A0A4Y2CPQ8,non-LTR,2372,bacterial,nonUG\r
A0A432I2E3,non-LTR,2372,bacterial,nonUG\r
A0A8B6DX24,non-LTR,2373,bacterial,nonUG\r
A0A3B3Q2D7,non-LTR,2373,bacterial,nonUG\r
A0A6A7FTZ3,non-LTR,2374,bacterial,nonUG\r
A0A821U4Q8,non-LTR,2374,bacterial,nonUG\r
A0A162QK44,non-LTR,2375,bacterial,nonUG\r
A0A164MS79,non-LTR,2375,bacterial,nonUG\r
A0A164Q1B2,non-LTR,2376,bacterial,nonUG\r
A0A162QT17,non-LTR,2376,bacterial,nonUG\r
A0A2P2I5V9,non-LTR,2377,bacterial,nonUG\r
A0A821SVA6,non-LTR,2377,bacterial,nonUG\r
A0A6A7FTR1,non-LTR,2378,bacterial,nonUG\r
A0A2P2HWH2,non-LTR,2378,bacterial,nonUG\r
A0A816QJK8,non-LTR,2379,bacterial,nonUG\r
A0A4Y2K0S3,non-LTR,2379,bacterial,nonUG\r
A0A0A9Z8V1,non-LTR,2380,bacterial,nonUG\r
A0A0B7BT55,non-LTR,2380,bacterial,nonUG\r
A0A6J8AKH9,non-LTR,2381,bacterial,nonUG\r
A0A8B6DBI1,non-LTR,2381,bacterial,nonUG\r
A0A8B6DMN4,non-LTR,2382,bacterial,nonUG\r
A0A6A7FT79,non-LTR,2382,bacterial,nonUG\r
X6LJH9,non-LTR,2383,bacterial,nonUG\r
A0A4Y2LK91,non-LTR,2383,bacterial,nonUG\r
A0A4Y2AXQ2,non-LTR,2384,bacterial,nonUG\r
A0A4Y2WFW8,non-LTR,2384,bacterial,nonUG\r
A0A147BK74,non-LTR,2385,bacterial,nonUG\r
A0A6P7UME4,non-LTR,2385,bacterial,nonUG\r
L7MBH8,non-LTR,2386,bacterial,nonUG\r
A0A2R5LDJ5,non-LTR,2386,bacterial,nonUG\r
A0A090XEP0,non-LTR,2387,bacterial,nonUG\r
A0A147BP74,non-LTR,2387,bacterial,nonUG\r
A0A1Z5L781,non-LTR,2388,bacterial,nonUG\r
A0A2R5L4I6,non-LTR,2388,bacterial,nonUG\r
A0A0P4VPG0,non-LTR,2389,bacterial,nonUG\r
A0A5B7FB11,non-LTR,2389,bacterial,nonUG\r
A0A087UUY7,non-LTR,2390,bacterial,nonUG\r
A0A131Y4B5,non-LTR,2390,bacterial,nonUG\r
A0A6P7VMJ1,non-LTR,2391,bacterial,nonUG\r
A0A147BCS7,non-LTR,2391,bacterial,nonUG\r
A0A6P7VS23,non-LTR,2392,bacterial,nonUG\r
A0A4D5RBA1,non-LTR,2392,bacterial,nonUG\r
L7MBC3,non-LTR,2393,bacterial,nonUG\r
A0A6P7UW04,non-LTR,2393,bacterial,nonUG\r
A0A147BLH6,non-LTR,2394,bacterial,nonUG\r
A0A6B0VGM7,non-LTR,2394,bacterial,nonUG\r
A0A147BJP3,non-LTR,2395,bacterial,nonUG\r
A0A1Z5LDS4,non-LTR,2395,bacterial,nonUG\r
A0A023EY04,non-LTR,2396,bacterial,nonUG\r
A0A6L5D8S7,non-LTR,2396,bacterial,nonUG\r
A0A6M2DVD1,non-LTR,2397,bacterial,nonUG\r
A0A2P8YHV3,non-LTR,2397,bacterial,nonUG\r
A0A821TKV2,non-LTR,2398,bacterial,nonUG\r
A0A4C1XI30,non-LTR,2398,bacterial,nonUG\r
A0A437AVK4,non-LTR,2399,bacterial,nonUG\r
A0A6M2DJW2,non-LTR,2399,bacterial,nonUG\r
A0A2H8TL40,non-LTR,2400,bacterial,nonUG\r
A0A653DBA6,non-LTR,2400,bacterial,nonUG\r
A0A6J1TCJ9,non-LTR,2401,bacterial,nonUG\r
A0A023EXD6,non-LTR,2401,bacterial,nonUG\r
A0A3S2LCB8,non-LTR,2402,bacterial,nonUG\r
A0A1B6C2K7,non-LTR,2402,bacterial,nonUG\r
A0A0J7K4D8,non-LTR,2403,bacterial,nonUG\r
A0A7M7QC47,non-LTR,2403,bacterial,nonUG\r
A0A232ENK8,non-LTR,2404,bacterial,nonUG\r
A0A6V7LYK6,non-LTR,2404,bacterial,nonUG\r
A0A0J7N9M9,non-LTR,2405,bacterial,nonUG\r
A0A6H5J1A2,non-LTR,2405,bacterial,nonUG\r
A0A6H5IZU7,non-LTR,2406,bacterial,nonUG\r
A0A6J1QT32,non-LTR,2406,bacterial,nonUG\r
A0A3L8E138,non-LTR,2407,bacterial,nonUG\r
A0A2M4AIR6,non-LTR,2407,bacterial,nonUG\r
A0A1B0CU15,non-LTR,2408,bacterial,nonUG\r
A0A355BA43,non-LTR,2408,bacterial,nonUG\r
A0A182GFR1,non-LTR,2409,bacterial,nonUG\r
A0A2M4CJ51,non-LTR,2409,bacterial,nonUG\r
A0A1W7R5V5,non-LTR,2410,bacterial,nonUG\r
A0A0A1XJH0,non-LTR,2410,bacterial,nonUG\r
A0A1I8MRW6,non-LTR,2411,bacterial,nonUG\r
A0A1I8PB78,non-LTR,2411,bacterial,nonUG\r
A0A0A9YDU6,non-LTR,2412,bacterial,nonUG\r
A0A0A9XPU9,non-LTR,2412,bacterial,nonUG\r
A0A0A9Z1X7,non-LTR,2413,bacterial,nonUG\r
A0A0S1TR39,non-LTR,2413,bacterial,nonUG\r
A0A1B6KIY7,non-LTR,2414,bacterial,nonUG\r
A0A7G3ATE3,non-LTR,2414,bacterial,nonUG\r
A0A355AA59,non-LTR,2415,bacterial,nonUG\r
X1WUP7,non-LTR,2415,bacterial,nonUG\r
X1WK82,non-LTR,2416,bacterial,nonUG\r
A0A5E4N891,non-LTR,2416,bacterial,nonUG\r
A0A4C1UNP3,non-LTR,2417,bacterial,nonUG\r
X1X2F1,non-LTR,2417,bacterial,nonUG\r
A0A0J7KAX9,non-LTR,2418,bacterial,nonUG\r
A0A142LX49,non-LTR,2418,bacterial,nonUG\r
A0A6H5IFH6,non-LTR,2419,bacterial,nonUG\r
Q95SX7,non-LTR,2419,bacterial,nonUG\r
Q6UJ39,non-LTR,2420,bacterial,nonUG\r
A0A6H5GV05,non-LTR,2420,bacterial,nonUG\r
Q18LA9,non-LTR,2421,bacterial,nonUG\r
X1WXR6,non-LTR,2421,bacterial,nonUG\r
J9KV82,non-LTR,2422,bacterial,nonUG\r
A0A224XB44,non-LTR,2422,bacterial,nonUG\r
X1WQI9,non-LTR,2423,bacterial,nonUG\r
A0A232ENU1,non-LTR,2423,bacterial,nonUG\r
A0A4Y2R7H9,non-LTR,2424,bacterial,nonUG\r
D7EM17,non-LTR,2424,bacterial,nonUG\r
A0A4Y2R351,non-LTR,2425,bacterial,nonUG\r
A0A3S2P7Z3,non-LTR,2425,bacterial,nonUG\r
A0A4Y2D358,non-LTR,2426,bacterial,nonUG\r
A0A4Y2DLY1,non-LTR,2426,bacterial,nonUG\r
A0A212EQ25,non-LTR,2427,bacterial,nonUG\r
A0A4Y2TTT4,non-LTR,2427,bacterial,nonUG\r
A0A4Y2RL53,non-LTR,2428,bacterial,nonUG\r
A0A4Y2QUR3,non-LTR,2428,bacterial,nonUG\r
A0A4Y2CUA8,non-LTR,2429,bacterial,nonUG\r
A0A4C1XZ18,non-LTR,2429,bacterial,nonUG\r
A0A4C1ZLF5,non-LTR,2430,bacterial,nonUG\r
A0A4C1WLQ3,non-LTR,2430,bacterial,nonUG\r
Q93137,non-LTR,2431,bacterial,nonUG\r
A0A2J7PQB5,non-LTR,2431,bacterial,nonUG\r
A0A087SWJ5,non-LTR,2432,bacterial,nonUG\r
A0A1Q3G5F7,non-LTR,2432,bacterial,nonUG\r
J9KCZ4,non-LTR,2433,bacterial,nonUG\r
J9JYZ4,non-LTR,2433,bacterial,nonUG\r
A0A4C1U0Y2,non-LTR,2434,bacterial,nonUG\r
A0A437ATB5,non-LTR,2434,bacterial,nonUG\r
A0A2J7Q6J2,non-LTR,2435,bacterial,nonUG\r
A0A0C9RJA4,non-LTR,2435,bacterial,nonUG\r
A0A811W885,non-LTR,2436,bacterial,nonUG\r
A0A182GB02,non-LTR,2436,bacterial,nonUG\r
A0A354GJM9,non-LTR,2437,bacterial,nonUG\r
A0A7J7JM92,non-LTR,2437,bacterial,nonUG\r
N6UK20,non-LTR,2438,bacterial,nonUG\r
A0A7R9RNE9,non-LTR,2438,bacterial,nonUG\r
A0A7R9X568,non-LTR,2439,bacterial,nonUG\r
A0A7R9RNH6,non-LTR,2439,bacterial,nonUG\r
A0A7R9RVE7,non-LTR,2440,bacterial,nonUG\r
A0A7R9XEJ5,non-LTR,2440,bacterial,nonUG\r
A0A087U3E2,non-LTR,2441,bacterial,nonUG\r
A0A0K8TM75,non-LTR,2441,bacterial,nonUG\r
A0A6P3UYL3,non-LTR,2442,bacterial,nonUG\r
A0A6V7JBX7,non-LTR,2442,bacterial,nonUG\r
A0A6M2DTM8,non-LTR,2443,bacterial,nonUG\r
A0A0Q9WEA4,non-LTR,2443,bacterial,nonUG\r
A0A0K8TKX9,non-LTR,2444,bacterial,nonUG\r
A0A814QTX1,non-LTR,2444,bacterial,nonUG\r
A0A3M7QXD8,non-LTR,2445,bacterial,nonUG\r
A0A3M7T284,non-LTR,2445,bacterial,nonUG\r
A0A814D531,non-LTR,2446,bacterial,nonUG\r
A0A813SK72,non-LTR,2446,bacterial,nonUG\r
A0A813M5Z1,non-LTR,2447,bacterial,nonUG\r
A0A814FIX6,non-LTR,2447,bacterial,nonUG\r
A0A3M7PAI7,non-LTR,2448,bacterial,nonUG\r
A0A4W5LMT9,non-LTR,2448,bacterial,nonUG\r
A0A814B295,non-LTR,2449,bacterial,nonUG\r
A0A815ZJ10,non-LTR,2449,bacterial,nonUG\r
A0A817K1Y4,non-LTR,2450,bacterial,nonUG\r
A0A817ZYB3,non-LTR,2450,bacterial,nonUG\r
A0A815NQR5,non-LTR,2451,bacterial,nonUG\r
A0A814YNK5,non-LTR,2451,bacterial,nonUG\r
A0A815DTZ6,non-LTR,2452,bacterial,nonUG\r
A0A819HR79,non-LTR,2452,bacterial,nonUG\r
A0A2G8KD34,non-LTR,2453,bacterial,nonUG\r
D7EKP2,non-LTR,2453,bacterial,nonUG\r
A0A1Y1S4U0,non-LTR,2454,bacterial,nonUG\r
A0A0P4W211,non-LTR,2454,bacterial,nonUG\r
A0A818JMT4,non-LTR,2455,bacterial,nonUG\r
A0A3R7MJW0,non-LTR,2455,bacterial,nonUG\r
A0A6G0XZQ3,non-LTR,2456,bacterial,nonUG\r
A0A6G0XU67,non-LTR,2456,bacterial,nonUG\r
A0A2S2R976,non-LTR,2457,bacterial,nonUG\r
A0A5E4N5C7,non-LTR,2457,bacterial,nonUG\r
J9L1U8,non-LTR,2458,bacterial,nonUG\r
A0A2H2IW53,non-LTR,2458,bacterial,nonUG\r
A0A2H2IGY8,non-LTR,2459,bacterial,nonUG\r
A0A6B2EFB6,non-LTR,2459,bacterial,nonUG\r
A0A6P7TTU5,non-LTR,2460,bacterial,nonUG\r
A0A0J7K589,non-LTR,2460,bacterial,nonUG\r
A0A0J7KTD2,non-LTR,2461,bacterial,nonUG\r
A0A6J0CDK5,non-LTR,2461,bacterial,nonUG\r
A0A6H5I4U0,non-LTR,2462,bacterial,nonUG\r
A0A232EDV0,non-LTR,2462,bacterial,nonUG\r
A0A6H5J5B2,non-LTR,2463,bacterial,nonUG\r
A0A6H5IUG4,non-LTR,2463,bacterial,nonUG\r
A0A6H5HZQ4,non-LTR,2464,bacterial,nonUG\r
A0A6J1RF39,non-LTR,2464,bacterial,nonUG\r
A0A6H5IZZ2,non-LTR,2465,bacterial,nonUG\r
A0A6H5IVX8,non-LTR,2465,bacterial,nonUG\r
A0A232FHS7,non-LTR,2466,bacterial,nonUG\r
A0A232F0Q2,non-LTR,2466,bacterial,nonUG\r
A0A6V7HLT2,non-LTR,2467,bacterial,nonUG\r
A0A146KR61,non-LTR,2467,bacterial,nonUG\r
U5EEC7,non-LTR,2468,bacterial,nonUG\r
A0A0A9YZW7,non-LTR,2468,bacterial,nonUG\r
U5EEL4,non-LTR,2469,bacterial,nonUG\r
A0A354GES4,non-LTR,2469,bacterial,nonUG\r
A0A6L5CNE4,non-LTR,2470,bacterial,nonUG\r
A0A1B6HKJ1,non-LTR,2470,bacterial,nonUG\r
A0A0A9WX05,non-LTR,2471,bacterial,nonUG\r
A0A2A4JRM8,non-LTR,2471,bacterial,nonUG\r
A0A811WGI1,non-LTR,2472,bacterial,nonUG\r
A0A6J2YA28,non-LTR,2472,bacterial,nonUG\r
A0A6J2X836,non-LTR,2473,bacterial,nonUG\r
A0A1Y1LSZ2,non-LTR,2473,bacterial,nonUG\r
A0A6H2FUU0,non-LTR,2474,bacterial,nonUG\r
A0A1B6EJ81,non-LTR,2474,bacterial,nonUG\r
A0A811WEC8,non-LTR,2475,bacterial,nonUG\r
A0A6J2YV26,non-LTR,2475,bacterial,nonUG\r
A0A653DLT0,non-LTR,2476,bacterial,nonUG\r
A0A1Y1N9S9,non-LTR,2476,bacterial,nonUG\r
A0A6S7GTB2,non-LTR,2477,bacterial,nonUG\r
A0A2G8KL41,non-LTR,2477,bacterial,nonUG\r
A0A6S7IB97,non-LTR,2478,bacterial,nonUG\r
A0A7D9L456,non-LTR,2478,bacterial,nonUG\r
A0A2G8KCU5,non-LTR,2479,bacterial,nonUG\r
A0A2G8KXI7,non-LTR,2479,bacterial,nonUG\r
A0A2B4RB26,non-LTR,2480,bacterial,nonUG\r
A0A2B4S2X7,non-LTR,2480,bacterial,nonUG\r
A0A6S7JYW4,non-LTR,2481,bacterial,nonUG\r
A0A2G8KN05,non-LTR,2481,bacterial,nonUG\r
A0A6J8BXZ7,non-LTR,2482,bacterial,nonUG\r
A0A6J8E0W4,non-LTR,2482,bacterial,nonUG\r
A0A7D9I4U0,non-LTR,2483,bacterial,nonUG\r
A0A355AF07,non-LTR,2483,bacterial,nonUG\r
A0A671U6N3,non-LTR,2484,bacterial,nonUG\r
A0A5C6PQ10,non-LTR,2484,bacterial,nonUG\r
A0A669DF59,non-LTR,2485,bacterial,nonUG\r
A0A669CB45,non-LTR,2485,bacterial,nonUG\r
A0A4U5TYJ1,non-LTR,2486,bacterial,nonUG\r
A0A669E0K7,non-LTR,2486,bacterial,nonUG\r
A0A7D9JD92,non-LTR,2487,bacterial,nonUG\r
A0A3C1S343,non-LTR,2487,bacterial,nonUG\r
A0A6I8NG80,non-LTR,2488,bacterial,nonUG\r
A0A3C1RYI2,non-LTR,2488,bacterial,nonUG\r
A0A2G8LB10,non-LTR,2489,bacterial,nonUG\r
A0A2B7ZY17,non-LTR,2489,bacterial,nonUG\r
A0A402EVE0,non-LTR,2490,bacterial,nonUG\r
A0A6A4VXX0,non-LTR,2490,bacterial,nonUG\r
A0A6S7IN70,non-LTR,2491,bacterial,nonUG\r
A0A2B4REU2,non-LTR,2491,bacterial,nonUG\r
A0A7D9K8A8,non-LTR,2492,bacterial,nonUG\r
A0A7D9DUR1,non-LTR,2492,bacterial,nonUG\r
A0A6S7I4F2,non-LTR,2493,bacterial,nonUG\r
A0A2B4R9N2,non-LTR,2493,bacterial,nonUG\r
A0A811W0N9,non-LTR,2494,bacterial,nonUG\r
A0A811X9L6,non-LTR,2494,bacterial,nonUG\r
A0A437B525,non-LTR,2495,bacterial,nonUG\r
A0A1B6JXW7,non-LTR,2495,bacterial,nonUG\r
A0A3S2TK00,non-LTR,2496,bacterial,nonUG\r
A0A131Y891,non-LTR,2496,bacterial,nonUG\r
A0A1E1XIX8,non-LTR,2497,bacterial,nonUG\r
A0A4D5RYV2,non-LTR,2497,bacterial,nonUG\r
A0A3Q0IWD5,non-LTR,2498,bacterial,nonUG\r
A0A226EXC9,non-LTR,2498,bacterial,nonUG\r
A0A226DDP4,non-LTR,2499,bacterial,nonUG\r
A0A6S7FSF3,non-LTR,2499,bacterial,nonUG\r
A0A6S7HST0,non-LTR,2500,bacterial,nonUG\r
A0A2B4RGE4,non-LTR,2500,bacterial,nonUG\r
A0A6S7GBT1,non-LTR,2501,bacterial,nonUG\r
A0A2B4R6X4,non-LTR,2501,bacterial,nonUG\r
A0A2B4RDU5,non-LTR,2502,bacterial,nonUG\r
A0A7D9L7P8,non-LTR,2502,bacterial,nonUG\r
A0A2B4SU23,non-LTR,2503,bacterial,nonUG\r
A0A2B4RV21,non-LTR,2503,bacterial,nonUG\r
A0A6S7FSB0,non-LTR,2504,bacterial,nonUG\r
A0A6S7IKT7,non-LTR,2504,bacterial,nonUG\r
A0A6S7GT04,non-LTR,2505,bacterial,nonUG\r
A0A6S7FYQ8,non-LTR,2505,bacterial,nonUG\r
A0A7D9HDS5,non-LTR,2506,bacterial,nonUG\r
A0A3B3HCE9,non-LTR,2506,bacterial,nonUG\r
M4AZN2,non-LTR,2507,bacterial,nonUG\r
A0A060Z383,non-LTR,2507,bacterial,nonUG\r
A0A673VW46,non-LTR,2508,bacterial,nonUG\r
A0A2B4R4T4,non-LTR,2508,bacterial,nonUG\r
A0A1B0GL79,non-LTR,2509,bacterial,nonUG\r
A0A3P9K3F6,non-LTR,2509,bacterial,nonUG\r
A0A2B4RHA7,non-LTR,2510,bacterial,nonUG\r
A0A2B4SU05,non-LTR,2510,bacterial,nonUG\r
A0A2B4RBL7,non-LTR,2511,bacterial,nonUG\r
A0A6S7FR59,non-LTR,2511,bacterial,nonUG\r
A0A6S7H411,non-LTR,2512,bacterial,nonUG\r
A0A2B4RWR3,non-LTR,2512,bacterial,nonUG\r
A0A7D9IDA4,non-LTR,2513,bacterial,nonUG\r
A0A6S7INV0,non-LTR,2513,bacterial,nonUG\r
A0A482YRP6,non-LTR,2514,bacterial,nonUG\r
A0A2B4SC04,non-LTR,2514,bacterial,nonUG\r
A0A6S7FTS7,non-LTR,2515,bacterial,nonUG\r
A0A7D9DZ82,non-LTR,2515,bacterial,nonUG\r
A0A6S7GGG5,non-LTR,2516,bacterial,nonUG\r
A0A2T7NK70,non-LTR,2516,bacterial,nonUG\r
A0A6J8DBS4,non-LTR,2517,bacterial,nonUG\r
A0A7D9JGG9,non-LTR,2517,bacterial,nonUG\r
A0A7D9EEX7,non-LTR,2518,bacterial,nonUG\r
A0A2B4RZI8,non-LTR,2518,bacterial,nonUG\r
A0A3P8R788,non-LTR,2519,bacterial,nonUG\r
A0A2B4RFW9,non-LTR,2519,bacterial,nonUG\r
A0A2B4S173,non-LTR,2520,bacterial,nonUG\r
A0A6S7LQ61,non-LTR,2520,bacterial,nonUG\r
A0A2B4RUE5,non-LTR,2521,bacterial,nonUG\r
A0A6A4K0S1,non-LTR,2521,bacterial,nonUG\r
A0A6H5GQ62,non-LTR,2522,bacterial,nonUG\r
A0A1B6L055,non-LTR,2522,bacterial,nonUG\r
A0A1Y1M0T7,non-LTR,2523,bacterial,nonUG\r
D7EID3,non-LTR,2523,bacterial,nonUG\r
A0A1B6KWH0,non-LTR,2524,bacterial,nonUG\r
A0A1U8N924,non-LTR,2524,bacterial,nonUG\r
A0A1B6LXC5,non-LTR,2525,bacterial,nonUG\r
A0A1B6LBV2,non-LTR,2525,bacterial,nonUG\r
V5GR72,non-LTR,2526,bacterial,nonUG\r
A0A811XBA8,non-LTR,2526,bacterial,nonUG\r
A0A6M2DQU2,non-LTR,2527,bacterial,nonUG\r
A0A0A9XNJ7,non-LTR,2527,bacterial,nonUG\r
A0A811WJG8,non-LTR,2528,bacterial,nonUG\r
A0A811WVX7,non-LTR,2528,bacterial,nonUG\r
A0A811WAD2,non-LTR,2529,bacterial,nonUG\r
A0A6M2DRU0,non-LTR,2529,bacterial,nonUG\r
A0A4C1VKV2,non-LTR,2530,bacterial,nonUG\r
A0A4C1W9T6,non-LTR,2530,bacterial,nonUG\r
A0A821LGR2,non-LTR,2531,bacterial,nonUG\r
A0A1B6GQ49,non-LTR,2531,bacterial,nonUG\r
A0A1B6M8A4,non-LTR,2532,bacterial,nonUG\r
A0A1B6H789,non-LTR,2532,bacterial,nonUG\r
A0A1B6LCP9,non-LTR,2533,bacterial,nonUG\r
A0A2J7PX45,non-LTR,2533,bacterial,nonUG\r
A0A6L2Q5S1,non-LTR,2534,bacterial,nonUG\r
A0A1B6L8R3,non-LTR,2534,bacterial,nonUG\r
A0A482WQ83,non-LTR,2535,bacterial,nonUG\r
A0A437BLN1,non-LTR,2535,bacterial,nonUG\r
A0A3S2L7U6,non-LTR,2536,bacterial,nonUG\r
A0A2S2NSE6,non-LTR,2536,bacterial,nonUG\r
A0A1Y1KNM0,non-LTR,2537,bacterial,nonUG\r
A0A1B6LGX0,non-LTR,2537,bacterial,nonUG\r
A0A069DXF5,non-LTR,2538,bacterial,nonUG\r
A0A1Y1MDM8,non-LTR,2538,bacterial,nonUG\r
D6X303,non-LTR,2539,bacterial,nonUG\r
A0A1B6LXZ5,non-LTR,2539,bacterial,nonUG\r
A0A1B6LMV0,non-LTR,2540,bacterial,nonUG\r
A0A1B6EPZ8,non-LTR,2540,bacterial,nonUG\r
A0A5N4AQ46,non-LTR,2541,bacterial,nonUG\r
A0A653DHJ7,non-LTR,2541,bacterial,nonUG\r
A0A2J7QBY8,non-LTR,2542,bacterial,nonUG\r
A0A2J7PD27,non-LTR,2542,bacterial,nonUG\r
A0A3B5RBE5,non-LTR,2543,bacterial,nonUG\r
A0A6Q2ZN45,non-LTR,2543,bacterial,nonUG\r
A0A354GIP9,non-LTR,2544,bacterial,nonUG\r
T2M590,non-LTR,2544,bacterial,nonUG\r
A0A1B6LDZ9,non-LTR,2545,bacterial,nonUG\r
A0A354GFV8,non-LTR,2545,bacterial,nonUG\r
A0A1Y1N6E6,non-LTR,2546,bacterial,nonUG\r
A0A5N4AX94,non-LTR,2546,bacterial,nonUG\r
A0A1Y1LB48,non-LTR,2547,bacterial,nonUG\r
A0A7T8H323,non-LTR,2547,bacterial,nonUG\r
A0A7T8GWW0,non-LTR,2548,bacterial,nonUG\r
U5EIT4,non-LTR,2548,bacterial,nonUG\r
A0A0J7K8Y9,non-LTR,2549,bacterial,nonUG\r
A0A6J8DMQ8,non-LTR,2549,bacterial,nonUG\r
A0A813MHP2,non-LTR,2550,bacterial,nonUG\r
A0A814HH01,non-LTR,2550,bacterial,nonUG\r
A0A811W843,non-LTR,2551,bacterial,nonUG\r
A0A3S2P6U3,non-LTR,2551,bacterial,nonUG\r
V5GMW6,non-LTR,2552,bacterial,nonUG\r
A0A0A9XDH3,non-LTR,2552,bacterial,nonUG\r
J9KBI9,non-LTR,2553,bacterial,nonUG\r
J9KQG5,non-LTR,2553,bacterial,nonUG\r
X1WZ17,non-LTR,2554,bacterial,nonUG\r
A0A2S2NHB6,non-LTR,2554,bacterial,nonUG\r
A0A146M6K4,non-LTR,2555,bacterial,nonUG\r
A0A6H5HD91,non-LTR,2555,bacterial,nonUG\r
A0A1B6F216,non-LTR,2556,bacterial,nonUG\r
J9JSP8,non-LTR,2556,bacterial,nonUG\r
A0A6H5GZX7,non-LTR,2557,bacterial,nonUG\r
A0A1B6L7P7,non-LTR,2557,bacterial,nonUG\r
A0A6B2EFB0,non-LTR,2558,bacterial,nonUG\r
A0A6H5G8I0,non-LTR,2558,bacterial,nonUG\r
A0A6H5H9G6,non-LTR,2559,bacterial,nonUG\r
A0A1B6MKH3,non-LTR,2559,bacterial,nonUG\r
A0A1L2K1U4,non-LTR,2560,bacterial,nonUG\r
A0A2L2Y7E7,non-LTR,2560,bacterial,nonUG\r
A0A1W7R627,non-LTR,2561,bacterial,nonUG\r
A0A821XHH9,non-LTR,2561,bacterial,nonUG\r
A0A336LGH0,non-LTR,2562,bacterial,nonUG\r
U5EEF0,non-LTR,2562,bacterial,nonUG\r
A0A1B6KPU2,non-LTR,2563,bacterial,nonUG\r
A0A1D2MHK5,non-LTR,2563,bacterial,nonUG\r
A0A1D2M452,non-LTR,2564,bacterial,nonUG\r
A0A1D2M5K7,non-LTR,2564,bacterial,nonUG\r
A0A443Q8B7,non-LTR,2565,bacterial,nonUG\r
A0A1D2M1I2,non-LTR,2565,bacterial,nonUG\r
A0A0B2UWN8,non-LTR,2566,bacterial,nonUG\r
A0A817Y398,non-LTR,2566,bacterial,nonUG\r
A0A2J7QSL4,non-LTR,2567,bacterial,nonUG\r
A0A4D5RBE7,non-LTR,2567,bacterial,nonUG\r
A0A131Y5S4,non-LTR,2568,bacterial,nonUG\r
A0A293N5E5,non-LTR,2568,bacterial,nonUG\r
A0A354GFQ4,non-LTR,2569,bacterial,nonUG\r
A0A224Z9S1,non-LTR,2569,bacterial,nonUG\r
A0A0N7ZAE4,non-LTR,2570,bacterial,nonUG\r
A0A147BLS4,non-LTR,2570,bacterial,nonUG\r
A0A6S7HS30,non-LTR,2571,bacterial,nonUG\r
A0A7D9ICG5,non-LTR,2571,bacterial,nonUG\r
A0A7D9HIH5,non-LTR,2572,bacterial,nonUG\r
A0A7D9IKA8,non-LTR,2572,bacterial,nonUG\r
A0A2D6S8R1,non-LTR,2573,bacterial,nonUG\r
A0A6S7H880,non-LTR,2573,bacterial,nonUG\r
A0A6S7GAT1,non-LTR,2574,bacterial,nonUG\r
A0A7D9IJM9,non-LTR,2574,bacterial,nonUG\r
A0A354GI06,non-LTR,2575,bacterial,nonUG\r
A0A2G8JVN9,non-LTR,2575,bacterial,nonUG\r
A0A3C1S1E8,non-LTR,2576,bacterial,nonUG\r
A0A354GG70,non-LTR,2576,bacterial,nonUG\r
A0A3B1IW78,non-LTR,2577,bacterial,nonUG\r
A0A1X7T9M2,non-LTR,2577,bacterial,nonUG\r
A0A814U6D3,non-LTR,2578,bacterial,nonUG\r
A0A7R9X1W3,non-LTR,2578,bacterial,nonUG\r
A0A1W0WKI1,non-LTR,2579,bacterial,nonUG\r
A0A6P4Z017,non-LTR,2579,bacterial,nonUG\r
A0A7M7GHW9,non-LTR,2580,bacterial,nonUG\r
A0A226CYW6,non-LTR,2580,bacterial,nonUG\r
A0A0P4VNJ5,non-LTR,2581,bacterial,nonUG\r
A0A7D9DJ11,non-LTR,2581,bacterial,nonUG\r
A0A2B4R643,non-LTR,2582,bacterial,nonUG\r
A0A2B4RBZ9,non-LTR,2582,bacterial,nonUG\r
A0A6S7GB89,non-LTR,2583,bacterial,nonUG\r
A0A2B4SH28,non-LTR,2583,bacterial,nonUG\r
A0A6S7KUE5,non-LTR,2584,bacterial,nonUG\r
A0A6S7GDK5,non-LTR,2584,bacterial,nonUG\r
A0A7D9LYH7,non-LTR,2585,bacterial,nonUG\r
A0A6S7K2V9,non-LTR,2585,bacterial,nonUG\r
A0A7D9IEM7,non-LTR,2586,bacterial,nonUG\r
A0A7D9E8U3,non-LTR,2586,bacterial,nonUG\r
A0A2B4SH19,non-LTR,2587,bacterial,nonUG\r
A0A2B4RWY6,non-LTR,2587,bacterial,nonUG\r
A0A2B8A1T2,non-LTR,2588,bacterial,nonUG\r
A0A6S7LPG0,non-LTR,2588,bacterial,nonUG\r
A0A5C6PLB3,non-LTR,2589,bacterial,nonUG\r
A0A4U5TVZ9,non-LTR,2589,bacterial,nonUG\r
A0A5C6MG46,non-LTR,2590,bacterial,nonUG\r
A0A5C6PMW7,non-LTR,2590,bacterial,nonUG\r
A0A5C6MID7,non-LTR,2591,bacterial,nonUG\r
A0A3N0YIH4,non-LTR,2591,bacterial,nonUG\r
A0A4U5TVC9,non-LTR,2592,bacterial,nonUG\r
A0A6A4SWT2,non-LTR,2592,bacterial,nonUG\r
A0A3P9JDD6,non-LTR,2593,bacterial,nonUG\r
A0A5C6N5D5,non-LTR,2593,bacterial,nonUG\r
A0A671TU97,non-LTR,2594,bacterial,nonUG\r
A0A3P9KDL8,non-LTR,2594,bacterial,nonUG\r
A0A0S7J692,non-LTR,2595,bacterial,nonUG\r
A0A2G8LGI0,non-LTR,2595,bacterial,nonUG\r
A0A0X3PJB6,non-LTR,2596,bacterial,nonUG\r
A0A183AT96,non-LTR,2596,bacterial,nonUG\r
A0A7M3PRG5,non-LTR,2597,bacterial,nonUG\r
A0A7M3R5X5,non-LTR,2597,bacterial,nonUG\r
A0A7M3QLG6,non-LTR,2598,bacterial,nonUG\r
A0A7M3Q3M5,non-LTR,2598,bacterial,nonUG\r
A0A654GZI6,non-LTR,2599,bacterial,nonUG\r
A0A0X3PTK8,non-LTR,2599,bacterial,nonUG\r
A0A7M3RKJ8,non-LTR,2600,bacterial,nonUG\r
A0A654HHY8,non-LTR,2600,bacterial,nonUG\r
A0A183WKN5,non-LTR,2601,bacterial,nonUG\r
A0A6A5DFC9,non-LTR,2601,bacterial,nonUG\r
A0A6A5D7X5,non-LTR,2602,bacterial,nonUG\r
A0A075A316,non-LTR,2602,bacterial,nonUG\r
A0A3R7FQE5,non-LTR,2603,bacterial,nonUG\r
A0A5J4NF06,non-LTR,2603,bacterial,nonUG\r
A0A5J4NL39,non-LTR,2604,bacterial,nonUG\r
A0A6A5D6S9,non-LTR,2604,bacterial,nonUG\r
E3UJT3,non-LTR,2605,bacterial,nonUG\r
A0A2I0UDD9,non-LTR,2605,bacterial,nonUG\r
A0A3M0KTC9,non-LTR,2606,bacterial,nonUG\r
A0A3M0KNZ2,non-LTR,2606,bacterial,nonUG\r
K7EZI5,non-LTR,2607,bacterial,nonUG\r
A0A452IR79,non-LTR,2607,bacterial,nonUG\r
A0A0P4VNP1,non-LTR,2608,bacterial,nonUG\r
A0A813Q7I6,non-LTR,2608,bacterial,nonUG\r
T2MI15,non-LTR,2609,bacterial,nonUG\r
A0A814MHA3,non-LTR,2609,bacterial,nonUG\r
A0A3M7Q1R5,non-LTR,2610,bacterial,nonUG\r
A0A8B6ESY3,non-LTR,2610,bacterial,nonUG\r
A0A6S7FXZ6,non-LTR,2611,bacterial,nonUG\r
A0A0B2W6K3,non-LTR,2611,bacterial,nonUG\r
A0A653CAK4,non-LTR,2612,bacterial,nonUG\r
A0A6S7J5Q1,non-LTR,2612,bacterial,nonUG\r
A0A2B4RZT7,non-LTR,2613,bacterial,nonUG\r
A0A1I8BXN1,non-LTR,2613,bacterial,nonUG\r
A0A1I8BH41,non-LTR,2614,bacterial,nonUG\r
A0A6V7VCW0,non-LTR,2614,bacterial,nonUG\r
A0A6V7V9E4,non-LTR,2615,bacterial,nonUG\r
E3M2X6,non-LTR,2615,bacterial,nonUG\r
E3MTB7,non-LTR,2616,bacterial,nonUG\r
A0A1I8BNX8,non-LTR,2616,bacterial,nonUG\r
A0A016WDZ7,non-LTR,2617,bacterial,nonUG\r
A0A016SG83,non-LTR,2617,bacterial,nonUG\r
A0A016T2J5,non-LTR,2618,bacterial,nonUG\r
A0A016SDG3,non-LTR,2618,bacterial,nonUG\r
E3MFY2,non-LTR,2619,bacterial,nonUG\r
A0A016RTF0,non-LTR,2619,bacterial,nonUG\r
A0A6V7Y4E6,non-LTR,2620,bacterial,nonUG\r
A0A7E4W0Y9,non-LTR,2620,bacterial,nonUG\r
A0A6V7V2N8,non-LTR,2621,bacterial,nonUG\r
A0A6A5D870,non-LTR,2621,bacterial,nonUG\r
Q4QQE6,non-LTR,2622,bacterial,nonUG\r
A0A654HYA0,non-LTR,2622,bacterial,nonUG\r
A0A0X3PDI4,non-LTR,2623,bacterial,nonUG\r
A0A016SRC8,non-LTR,2623,bacterial,nonUG\r
E3LJE4,non-LTR,2624,bacterial,nonUG\r
A0A6S7H9K6,non-LTR,2624,bacterial,nonUG\r
A0A2B4SUY9,non-LTR,2625,bacterial,nonUG\r
A0A6S7J4Y2,non-LTR,2625,bacterial,nonUG\r
A0A6S7GQ27,non-LTR,2626,bacterial,nonUG\r
A0A354GHG9,non-LTR,2626,bacterial,nonUG\r
A0A7D9EUF5,non-LTR,2627,bacterial,nonUG\r
A0A7D9DX31,non-LTR,2627,bacterial,nonUG\r
A0A6S7IJ29,non-LTR,2628,bacterial,nonUG\r
A0A6S7JS01,non-LTR,2628,bacterial,nonUG\r
A0A6S7KH39,non-LTR,2629,bacterial,nonUG\r
A0A2B4R9N0,non-LTR,2629,bacterial,nonUG\r
A0A6S7G2C6,non-LTR,2630,bacterial,nonUG\r
A0A2B4SKF0,non-LTR,2630,bacterial,nonUG\r
A0A2B4SVW4,non-LTR,2631,bacterial,nonUG\r
A0A2B4ST17,non-LTR,2631,bacterial,nonUG\r
A0A7D9EJD4,non-LTR,2632,bacterial,nonUG\r
A0A2B4RQM0,non-LTR,2632,bacterial,nonUG\r
A0A1X7SYG8,non-LTR,2633,bacterial,nonUG\r
A0A1X7TNB5,non-LTR,2633,bacterial,nonUG\r
A0A1X7TC86,non-LTR,2634,bacterial,nonUG\r
A0A7D9JID4,non-LTR,2634,bacterial,nonUG\r
A0A2P2I115,non-LTR,2635,bacterial,nonUG\r
A0A7D9JCD4,non-LTR,2635,bacterial,nonUG\r
A0A7D9J621,non-LTR,2636,bacterial,nonUG\r
A0A8B6CAI8,non-LTR,2636,bacterial,nonUG\r
A0A7D9JAK6,non-LTR,2637,bacterial,nonUG\r
A0A482YR43,non-LTR,2637,bacterial,nonUG\r
A0A1E1XG83,non-LTR,2638,bacterial,nonUG\r
A0A6M2D128,non-LTR,2638,bacterial,nonUG\r
A0A1E1XGZ3,non-LTR,2639,bacterial,nonUG\r
A0A6S7FS87,non-LTR,2639,bacterial,nonUG\r
A0A7J7K7S7,non-LTR,2640,bacterial,nonUG\r
A0A147BBI1,non-LTR,2640,bacterial,nonUG\r
A0A147BC70,non-LTR,2641,bacterial,nonUG\r
A0A147BKN8,non-LTR,2641,bacterial,nonUG\r
A0A1D1ULC4,non-LTR,2642,bacterial,nonUG\r
A0A1D1V134,non-LTR,2642,bacterial,nonUG\r
A0A6G0TBS4,non-LTR,2643,bacterial,nonUG\r
J9KD63,non-LTR,2643,bacterial,nonUG\r
X1WNB7,non-LTR,2644,bacterial,nonUG\r
J9M639,non-LTR,2644,bacterial,nonUG\r
J9LRD1,non-LTR,2645,bacterial,nonUG\r
A0A6G0ZP59,non-LTR,2645,bacterial,nonUG\r
J9KU12,non-LTR,2646,bacterial,nonUG\r
A0A6G0W0S1,non-LTR,2646,bacterial,nonUG\r
J9KN25,non-LTR,2647,bacterial,nonUG\r
A0A1Y1MYW8,non-LTR,2647,bacterial,nonUG\r
J9LS27,non-LTR,2648,bacterial,nonUG\r
J9KR06,non-LTR,2648,bacterial,nonUG\r
A0A3S2N4V1,non-LTR,2649,bacterial,nonUG\r
A0A6G0Y166,non-LTR,2649,bacterial,nonUG\r
A0A6H5GTC9,non-LTR,2650,bacterial,nonUG\r
A0A6H5H2C1,non-LTR,2650,bacterial,nonUG\r
J9LUC1,non-LTR,2651,bacterial,nonUG\r
J9M2E6,non-LTR,2651,bacterial,nonUG\r
A0A437ARL8,non-LTR,2652,bacterial,nonUG\r
A0A6J1NEY6,non-LTR,2652,bacterial,nonUG\r
A0A437BH80,non-LTR,2653,bacterial,nonUG\r
A0A1B6IS47,non-LTR,2653,bacterial,nonUG\r
A0A821KMP4,non-LTR,2654,bacterial,nonUG\r
D6WP85,non-LTR,2654,bacterial,nonUG\r
A0A3S2NU52,non-LTR,2655,bacterial,nonUG\r
A0A811X4S7,non-LTR,2655,bacterial,nonUG\r
A0A4Y2W2I7,non-LTR,2656,bacterial,nonUG\r
A0A4Q3ERC2,non-LTR,2656,bacterial,nonUG\r
A0A4Q3DGZ6,non-LTR,2657,bacterial,nonUG\r
A0A811WJH2,non-LTR,2657,bacterial,nonUG\r
A0A821TZM2,non-LTR,2658,bacterial,nonUG\r
A0A0P6J4T9,non-LTR,2658,bacterial,nonUG\r
A0A147BKN6,non-LTR,2659,bacterial,nonUG\r
A0A1B6KA64,non-LTR,2659,bacterial,nonUG\r
A0A443QAB1,non-LTR,2660,bacterial,nonUG\r
A0A7S3Z738,non-LTR,2660,bacterial,nonUG\r
A0A821SDZ2,non-LTR,2661,bacterial,nonUG\r
A0A3S2L424,non-LTR,2661,bacterial,nonUG\r
A0A653BGK5,non-LTR,2662,bacterial,nonUG\r
A0A0P4VTV9,non-LTR,2662,bacterial,nonUG\r
A0A5B7E6K3,non-LTR,2663,bacterial,nonUG\r
A0A3D5S1K1,non-LTR,2663,bacterial,nonUG\r
T2MCE4,non-LTR,2664,bacterial,nonUG\r
A0A815N215,non-LTR,2664,bacterial,nonUG\r
A0A815YD27,non-LTR,2665,bacterial,nonUG\r
A0A814I1F6,non-LTR,2665,bacterial,nonUG\r
A0A815EGP1,non-LTR,2666,bacterial,nonUG\r
A0A813PRJ6,non-LTR,2666,bacterial,nonUG\r
A0A3C1S0P7,non-LTR,2667,bacterial,nonUG\r
A0A210QEX7,non-LTR,2667,bacterial,nonUG\r
A0A8B6CX31,non-LTR,2668,bacterial,nonUG\r
A0A813H2I5,non-LTR,2668,bacterial,nonUG\r
A0A7S3Y8N4,non-LTR,2669,bacterial,nonUG\r
A0A838TY53,non-LTR,2669,bacterial,nonUG\r
A0A812NWK3,non-LTR,2670,bacterial,nonUG\r
A0A813J2G0,non-LTR,2670,bacterial,nonUG\r
A0A7S3ZYZ6,non-LTR,2671,bacterial,nonUG\r
A0A7S0UZD5,non-LTR,2671,bacterial,nonUG\r
A0A1Q9C6S0,non-LTR,2672,bacterial,nonUG\r
A0A6J8AI10,non-LTR,2672,bacterial,nonUG\r
A0A6J8CEI2,non-LTR,2673,bacterial,nonUG\r
A0A8B6GYV5,non-LTR,2673,bacterial,nonUG\r
A0A6J7ZSD3,non-LTR,2674,bacterial,nonUG\r
A0A6J8C6T4,non-LTR,2674,bacterial,nonUG\r
A0A8B6DHN5,non-LTR,2675,bacterial,nonUG\r
A0A8B6GMH5,non-LTR,2675,bacterial,nonUG\r
A0A6J8DSR9,non-LTR,2676,bacterial,nonUG\r
A0A8B6H376,non-LTR,2676,bacterial,nonUG\r
A0A8B6C2A5,non-LTR,2677,bacterial,nonUG\r
A0A8B6HD08,non-LTR,2677,bacterial,nonUG\r
A0A8B6DKD2,non-LTR,2678,bacterial,nonUG\r
A0A6J8C8I2,non-LTR,2678,bacterial,nonUG\r
A0A8B6GQM9,non-LTR,2679,bacterial,nonUG\r
A0A482YR68,non-LTR,2679,bacterial,nonUG\r
A0A6J8BU78,non-LTR,2680,bacterial,nonUG\r
A0A1X7TXX3,non-LTR,2680,bacterial,nonUG\r
A0A6S7GPW8,non-LTR,2681,bacterial,nonUG\r
A0A7D9IPC5,non-LTR,2681,bacterial,nonUG\r
A0A6J8CFK3,non-LTR,2682,bacterial,nonUG\r
A0A8B6CDT2,non-LTR,2682,bacterial,nonUG\r
A0A8B6DU25,non-LTR,2683,bacterial,nonUG\r
A0A6J8EK29,non-LTR,2683,bacterial,nonUG\r
A0A8B6GVT1,non-LTR,2684,bacterial,nonUG\r
A0A2H9T4I5,non-LTR,2684,bacterial,nonUG\r
A0A7M7NA62,non-LTR,2685,bacterial,nonUG\r
A0A813Z459,non-LTR,2685,bacterial,nonUG\r
A0A814MUD4,non-LTR,2686,bacterial,nonUG\r
A0A814CVE6,non-LTR,2686,bacterial,nonUG\r
A0A3M7T8X5,non-LTR,2687,bacterial,nonUG\r
A0A3M7SR12,non-LTR,2687,bacterial,nonUG\r
A0A814NLU6,non-LTR,2688,bacterial,nonUG\r
A0A814LTG7,non-LTR,2688,bacterial,nonUG\r
A0A7M5XB23,non-LTR,2689,bacterial,nonUG\r
A0A3C1S1R4,non-LTR,2689,bacterial,nonUG\r
A0A0P4VXS2,non-LTR,2690,bacterial,nonUG\r
A0A3C1S3F5,non-LTR,2690,bacterial,nonUG\r
A0A3B3I0P1,non-LTR,2691,bacterial,nonUG\r
A0A819ACS2,non-LTR,2691,bacterial,nonUG\r
A0A821RZ53,non-LTR,2692,bacterial,nonUG\r
A0A811WQU5,non-LTR,2692,bacterial,nonUG\r
A0A7M5VDN7,non-LTR,2693,bacterial,nonUG\r
B7XBB2,non-LTR,2693,bacterial,nonUG\r
I1C7T9,non-LTR,2694,bacterial,nonUG\r
A0A068SI20,non-LTR,2694,bacterial,nonUG\r
I1BYG8,non-LTR,2695,bacterial,nonUG\r
I1BK60,non-LTR,2695,bacterial,nonUG\r
A0A0C9N9H7,non-LTR,2696,bacterial,nonUG\r
A0A507CQ60,non-LTR,2696,bacterial,nonUG\r
A0A4Q3L6T2,non-LTR,2697,bacterial,nonUG\r
A0A177T3Z5,non-LTR,2697,bacterial,nonUG\r
A0A4Q5NCG8,non-LTR,2698,bacterial,nonUG\r
A0A1R0GRB3,non-LTR,2698,bacterial,nonUG\r
A0A1R1YA35,non-LTR,2699,bacterial,nonUG\r
A0A177T235,non-LTR,2699,bacterial,nonUG\r
A0A2V3IBZ3,non-LTR,2700,bacterial,nonUG\r
A0A2V3J4C7,non-LTR,2700,bacterial,nonUG\r
A0A3P3YK22,non-LTR,2701,bacterial,nonUG\r
A0A4Q9KUG4,non-LTR,2701,bacterial,nonUG\r
A0A4Q9KSP2,non-LTR,2702,bacterial,nonUG\r
A0A812YRY2,non-LTR,2702,bacterial,nonUG\r
X6P958,non-LTR,2703,bacterial,nonUG\r
X6LWU8,non-LTR,2703,bacterial,nonUG\r
X6LPL8,non-LTR,2704,bacterial,nonUG\r
A0A0F9ZBM3,non-LTR,2704,bacterial,nonUG\r
A0A1R1YE56,non-LTR,2705,bacterial,nonUG\r
A0A1R1X253,non-LTR,2705,bacterial,nonUG\r
L7JX89,non-LTR,2706,bacterial,nonUG\r
A0A0F9WKS0,non-LTR,2706,bacterial,nonUG\r
A0A4Q9LJ41,non-LTR,2707,bacterial,nonUG\r
A0A7S1SJ55,non-LTR,2707,bacterial,nonUG\r
A0A0L6UZC2,non-LTR,2708,bacterial,nonUG\r
A0A2N5VC78,non-LTR,2708,bacterial,nonUG\r
A0A4S4M262,non-LTR,2709,bacterial,nonUG\r
A0A1M2V943,non-LTR,2709,bacterial,nonUG\r
A0A1W0E893,non-LTR,2710,bacterial,nonUG\r
A0A1J5WHQ0,non-LTR,2710,bacterial,nonUG\r
A0A507CUH4,non-LTR,2711,bacterial,nonUG\r
M1VM81,non-LTR,2711,bacterial,nonUG\r
A0A1J5WJX7,non-LTR,2712,bacterial,nonUG\r
A0A196SB02,non-LTR,2712,bacterial,nonUG\r
A0A1J5WS33,non-LTR,2713,bacterial,nonUG\r
A0A522YGS1,non-LTR,2713,bacterial,nonUG\r
A0A0C2J371,non-LTR,2714,bacterial,nonUG\r
A0A443QBM7,non-LTR,2714,bacterial,nonUG\r
A0A2J7PBW9,non-LTR,2715,bacterial,nonUG\r
A0A813DXZ3,non-LTR,2715,bacterial,nonUG\r
A0A2D5PF14,non-LTR,2716,bacterial,nonUG\r
A0A8B6G3C1,non-LTR,2716,bacterial,nonUG\r
A0A1B7WD97,non-LTR,2717,bacterial,nonUG\r
A0A6H5JCI7,non-LTR,2717,bacterial,nonUG\r
A0A7W1H7G4,non-LTR,2718,bacterial,nonUG\r
A0A3B3H959,non-LTR,2718,bacterial,nonUG\r
A0A8B6DZK1,non-LTR,2719,bacterial,nonUG\r
A0A8B6FMQ4,non-LTR,2719,bacterial,nonUG\r
A0A3M2BJA5,non-LTR,2720,bacterial,nonUG\r
A0A6V1P5X7,non-LTR,2720,bacterial,nonUG\r
A0A0G4HC10,non-LTR,2721,bacterial,nonUG\r
A0A2H9T4I8,non-LTR,2721,bacterial,nonUG\r
A0A3C1S4H7,non-LTR,2722,bacterial,nonUG\r
A0A672KW72,non-LTR,2722,bacterial,nonUG\r
A0A482YPZ5,non-LTR,2723,bacterial,nonUG\r
A0A6S7FVC4,non-LTR,2723,bacterial,nonUG\r
A0A023F5J8,non-LTR,2724,bacterial,nonUG\r
A0A6H5FX46,non-LTR,2724,bacterial,nonUG\r
A0A6P4F638,non-LTR,2725,bacterial,nonUG\r
A0A023F6D8,non-LTR,2725,bacterial,nonUG\r
A0A6L2PBD4,non-LTR,2726,bacterial,nonUG\r
A0A4Q3DGF7,non-LTR,2726,bacterial,nonUG\r
A0A1Y1IF39,non-LTR,2727,bacterial,nonUG\r
A0A2V0PK37,non-LTR,2727,bacterial,nonUG\r
A0A2P6VSD4,non-LTR,2728,bacterial,nonUG\r
A0A7S3R9K1,non-LTR,2728,bacterial,nonUG\r
A0A699YMD7,non-LTR,2729,bacterial,nonUG\r
A0A4Q3DGJ1,non-LTR,2729,bacterial,nonUG\r
A0A176WTT6,non-LTR,2730,bacterial,nonUG\r
A0A284RYV7,non-LTR,2730,bacterial,nonUG\r
A0A146HLF7,non-LTR,2731,bacterial,nonUG\r
A0A284QR32,non-LTR,2731,bacterial,nonUG\r
A0A409W2D9,non-LTR,2732,bacterial,nonUG\r
A0A409YMP0,non-LTR,2732,bacterial,nonUG\r
A0A6A4GJQ8,non-LTR,2733,bacterial,nonUG\r
A0A5E3XHC8,non-LTR,2733,bacterial,nonUG\r
A0A1M2VLS3,non-LTR,2734,bacterial,nonUG\r
A0A0E9NNG3,non-LTR,2734,bacterial,nonUG\r
S8AMW5,non-LTR,2735,bacterial,nonUG\r
A0A147BJ97,non-LTR,2735,bacterial,nonUG\r
A0A4D5RDJ2,non-LTR,2736,bacterial,nonUG\r
A0A1E1XHE2,non-LTR,2736,bacterial,nonUG\r
A0A224XHE7,non-LTR,2737,bacterial,nonUG\r
A0A0J7KCF7,non-LTR,2737,bacterial,nonUG\r
A0A6J0CEE4,non-LTR,2738,bacterial,nonUG\r
A0A6J0CDS4,non-LTR,2738,bacterial,nonUG\r
A0A0A9XSX7,non-LTR,2739,bacterial,nonUG\r
A0A6H5IEM9,non-LTR,2739,bacterial,nonUG\r
A0A6H5G5X2,non-LTR,2740,bacterial,nonUG\r
A0A224XIG8,non-LTR,2740,bacterial,nonUG\r
A0A023F6C8,non-LTR,2741,bacterial,nonUG\r
A0A6H5GML3,non-LTR,2741,bacterial,nonUG\r
A0A226DD11,non-LTR,2742,bacterial,nonUG\r
A0A226EC95,non-LTR,2742,bacterial,nonUG\r
A0A226DD09,non-LTR,2743,bacterial,nonUG\r
A0A1D2MAZ3,non-LTR,2743,bacterial,nonUG\r
A0A226EW43,non-LTR,2744,bacterial,nonUG\r
A0A226DU66,non-LTR,2744,bacterial,nonUG\r
T1IHP6,non-LTR,2745,bacterial,nonUG\r
T1J142,non-LTR,2745,bacterial,nonUG\r
A0A6V7J383,non-LTR,2746,bacterial,nonUG\r
A0A0J7KAU6,non-LTR,2746,bacterial,nonUG\r
A0A4S2KV36,non-LTR,2747,bacterial,nonUG\r
A0A6H5HZB8,non-LTR,2747,bacterial,nonUG\r
A0A670HNL2,non-LTR,2748,bacterial,nonUG\r
A0A670ILX9,non-LTR,2748,bacterial,nonUG\r
A0A6J2XFY6,non-LTR,2749,bacterial,nonUG\r
A0A0N7Z9T7,non-LTR,2749,bacterial,nonUG\r
A0A6A5E508,non-LTR,2750,bacterial,nonUG\r
A0A6A5DBC0,non-LTR,2750,bacterial,nonUG\r
A0A6A5DV39,non-LTR,2751,bacterial,nonUG\r
A0A6A5D8V5,non-LTR,2751,bacterial,nonUG\r
A0A419QH19,non-LTR,2752,bacterial,nonUG\r
A0A074ZVF8,non-LTR,2752,bacterial,nonUG\r
A0A419PML3,non-LTR,2753,bacterial,nonUG\r
A0A5J4NHR8,non-LTR,2753,bacterial,nonUG\r
A0A654GKU6,non-LTR,2754,bacterial,nonUG\r
H3ABK0,non-LTR,2754,bacterial,nonUG\r
A0A3B3HVR8,non-LTR,2755,bacterial,nonUG\r
A0A6A5D7R0,non-LTR,2755,bacterial,nonUG\r
A0A433SM46,non-LTR,2756,bacterial,nonUG\r
A0A6J8AWR3,non-LTR,2756,bacterial,nonUG\r
A0A2B4S413,non-LTR,2757,bacterial,nonUG\r
A0A811X2E2,non-LTR,2757,bacterial,nonUG\r
A0A6J2XZR8,non-LTR,2758,bacterial,nonUG\r
A0A433TJL7,non-LTR,2758,bacterial,nonUG\r
A0A2B4RE56,non-LTR,2759,bacterial,nonUG\r
A0A6F9D8K7,non-LTR,2759,bacterial,nonUG\r
A0A2G9UVK2,non-LTR,2760,bacterial,nonUG\r
A0A6G0VWE7,non-LTR,2760,bacterial,nonUG\r
J9LV02,non-LTR,2761,bacterial,nonUG\r
J9L287,non-LTR,2761,bacterial,nonUG\r
A0A6G0YT78,non-LTR,2762,bacterial,nonUG\r
A0A6G0Y452,non-LTR,2762,bacterial,nonUG\r
J9KIG6,non-LTR,2763,bacterial,nonUG\r
J9LEB5,non-LTR,2763,bacterial,nonUG\r
A0A6G0Y0S1,non-LTR,2764,bacterial,nonUG\r
A0A2P8YI77,non-LTR,2764,bacterial,nonUG\r
A0A1Y1LWA9,non-LTR,2765,bacterial,nonUG\r
J9M0P4,non-LTR,2765,bacterial,nonUG\r
J9LNA1,non-LTR,2766,bacterial,nonUG\r
A0A7R8ULT0,non-LTR,2766,bacterial,nonUG\r
A0A6J1QHX6,non-LTR,2767,bacterial,nonUG\r
A0A0P8YCI9,non-LTR,2767,bacterial,nonUG\r
A0A3L8DXX9,non-LTR,2768,bacterial,nonUG\r
A0A2P8Z3H5,non-LTR,2768,bacterial,nonUG\r
A0A3Q0JJS5,non-LTR,2769,bacterial,nonUG\r
A0A016TPK0,non-LTR,2769,bacterial,nonUG\r
A0A815KXJ2,non-LTR,2770,bacterial,nonUG\r
A0A3B1JXQ2,non-LTR,2770,bacterial,nonUG\r
H3B0L2,non-LTR,2771,bacterial,nonUG\r
A0A2G8KGL8,non-LTR,2771,bacterial,nonUG\r
A0A654HY30,non-LTR,2772,bacterial,nonUG\r
A0A183T7C0,non-LTR,2772,bacterial,nonUG\r
A0A7M7NHT1,non-LTR,2773,bacterial,nonUG\r
A0A3R7MGU0,non-LTR,2773,bacterial,nonUG\r
A0A7D9IPZ0,non-LTR,2774,bacterial,nonUG\r
A0A2B4S4K3,non-LTR,2774,bacterial,nonUG\r
A0A2H1W991,non-LTR,2775,bacterial,nonUG\r
A0A6H5JBI6,non-LTR,2775,bacterial,nonUG\r
A0A6H5L1F1,non-LTR,2776,bacterial,nonUG\r
A0A1Q9DQD8,non-LTR,2776,bacterial,nonUG\r
A0A0G4GUQ4,non-LTR,2777,bacterial,nonUG\r
A0A6A7FV80,non-LTR,2777,bacterial,nonUG\r
A0A7I4YIW4,non-LTR,2778,bacterial,nonUG\r
A0A7I4YFB8,non-LTR,2778,bacterial,nonUG\r
A0A0B1T3V1,non-LTR,2779,bacterial,nonUG\r
A0A7I5EAP1,non-LTR,2779,bacterial,nonUG\r
A0A2H2ITH9,non-LTR,2780,bacterial,nonUG\r
A0A7I4YYS9,non-LTR,2780,bacterial,nonUG\r
A0A0B2W179,non-LTR,2781,bacterial,nonUG\r
A0A7I5EB76,non-LTR,2781,bacterial,nonUG\r
A0A016S3I7,non-LTR,2782,bacterial,nonUG\r
A0A0B1TFM8,non-LTR,2782,bacterial,nonUG\r
G0MZ46,non-LTR,2783,bacterial,nonUG\r
A0A4U5LRM8,non-LTR,2783,bacterial,nonUG\r
A0A016SCZ1,non-LTR,2784,bacterial,nonUG\r
A0A6J2XXC5,non-LTR,2784,bacterial,nonUG\r
A0A3S2LNU0,non-LTR,2785,bacterial,nonUG\r
A0A2G8K4F2,non-LTR,2785,bacterial,nonUG\r
A0A1S3HCU5,non-LTR,2786,bacterial,nonUG\r
A0A821UEX6,non-LTR,2786,bacterial,nonUG\r
A0A4C1WQ80,non-LTR,2787,bacterial,nonUG\r
A0A821PJN1,non-LTR,2787,bacterial,nonUG\r
A0A016UTS3,non-LTR,2788,bacterial,nonUG\r
A0A4C1Z4Y5,non-LTR,2788,bacterial,nonUG\r
A0A4C1WQ35,non-LTR,2789,bacterial,nonUG\r
A0A4C1TPF2,non-LTR,2789,bacterial,nonUG\r
A0A3P9KK69,non-LTR,2790,bacterial,nonUG\r
A0A023EWU8,non-LTR,2790,bacterial,nonUG\r
A0A7E4VR27,non-LTR,2791,bacterial,nonUG\r
A0A811KYA2,non-LTR,2791,bacterial,nonUG\r
A0A016WVK2,non-LTR,2792,bacterial,nonUG\r
A0A1I8D0L3,non-LTR,2792,bacterial,nonUG\r
A0A0N5BIM8,non-LTR,2793,bacterial,nonUG\r
A0A0N5BFQ2,non-LTR,2793,bacterial,nonUG\r
A0A1I8CCJ3,non-LTR,2794,bacterial,nonUG\r
A0A0N4ZZQ8,non-LTR,2794,bacterial,nonUG\r
C5KLC5,non-LTR,2795,bacterial,nonUG\r
C5L570,non-LTR,2795,bacterial,nonUG\r
A0A2H2HZU7,non-LTR,2796,bacterial,nonUG\r
A0A2D4RYI1,non-LTR,2796,bacterial,nonUG\r
A0A0K0DVT6,non-LTR,2797,bacterial,nonUG\r
A0A0N5B4Q1,non-LTR,2797,bacterial,nonUG\r
A0A0N5B5Y1,non-LTR,2798,bacterial,nonUG\r
A0A0S4J5D3,non-LTR,2798,bacterial,nonUG\r
A0A2A4YK05,non-LTR,2799,bacterial,nonUG\r
A0A6I1JUY3,non-LTR,2799,bacterial,nonUG\r
A0A498M6E7,non-LTR,2800,bacterial,nonUG\r
A0A2D7SNV8,non-LTR,2800,bacterial,nonUG\r
A0A354GIV0,non-LTR,2801,bacterial,nonUG\r
A0A814L774,non-LTR,2801,bacterial,nonUG\r
A0A432UTE6,non-LTR,2802,bacterial,nonUG\r
A0A7R9YSZ2,non-LTR,2802,bacterial,nonUG\r
A0A7J6MVI8,non-LTR,2803,bacterial,nonUG\r
A0A1U7X9N7,non-LTR,2803,bacterial,nonUG\r
A0A484NQS8,non-LTR,2804,bacterial,nonUG\r
M7ZP89,non-LTR,2804,bacterial,nonUG\r
A0A5N6LFF0,non-LTR,2805,bacterial,nonUG\r
A0A699HF30,non-LTR,2805,bacterial,nonUG\r
A0A6A3CI34,non-LTR,2806,bacterial,nonUG\r
A0A4U5TWD6,non-LTR,2806,bacterial,nonUG\r
A0A183GGK7,non-LTR,2807,bacterial,nonUG\r
A0A3P8CVJ3,non-LTR,2807,bacterial,nonUG\r
A0A183GJH0,non-LTR,2808,bacterial,nonUG\r
A0A7R8Z2A1,non-LTR,2808,bacterial,nonUG\r
A0A085NQM5,non-LTR,2809,bacterial,nonUG\r
W2T0R7,non-LTR,2809,bacterial,nonUG\r
A0A6P4XX56,non-LTR,2810,bacterial,nonUG\r
A0A498SY65,non-LTR,2810,bacterial,nonUG\r
A0A3B3HFM7,non-LTR,2811,bacterial,nonUG\r
A0A0B7BUV6,non-LTR,2811,bacterial,nonUG\r
A0A3B3H7C9,non-LTR,2812,bacterial,nonUG\r
A0A5C6NH06,non-LTR,2812,bacterial,nonUG\r
A0A1Y1MCV0,non-LTR,2813,bacterial,nonUG\r
A0A1Q9CHL1,non-LTR,2813,bacterial,nonUG\r
K0SMM5,non-LTR,2814,bacterial,nonUG\r
A0A812MR09,non-LTR,2814,bacterial,nonUG\r
A0A1Q9CAG6,non-LTR,2815,bacterial,nonUG\r
A0A7J6KQD3,non-LTR,2815,bacterial,nonUG\r
C5K652,non-LTR,2816,bacterial,nonUG\r
A0A023AVK4,non-LTR,2816,bacterial,nonUG\r
A0A6G0T0J6,non-LTR,2817,bacterial,nonUG\r
J9KDM4,non-LTR,2817,bacterial,nonUG\r
A0A2J7QCU0,non-LTR,2818,bacterial,nonUG\r
A0A1W7RAL1,non-LTR,2818,bacterial,nonUG\r
A0A2A4JBK9,non-LTR,2819,bacterial,nonUG\r
A0A3S0ZV17,non-LTR,2819,bacterial,nonUG\r
A0A2W1B3T2,non-LTR,2820,bacterial,nonUG\r
A0A0J7KGF7,non-LTR,2820,bacterial,nonUG\r
H3ABE5,non-LTR,2821,bacterial,nonUG\r
A0A4W2G499,non-LTR,2821,bacterial,nonUG\r
A0A817IPD1,non-LTR,2822,bacterial,nonUG\r
A0A433U5M4,non-LTR,2822,bacterial,nonUG\r
A0A812GZP5,non-LTR,2823,bacterial,nonUG\r
A0A812I4D2,non-LTR,2823,bacterial,nonUG\r
A0A196SFI0,non-LTR,2824,bacterial,nonUG\r
A0A813FZB3,non-LTR,2824,bacterial,nonUG\r
A0A812IE89,non-LTR,2825,bacterial,nonUG\r
A0A813FHN2,non-LTR,2825,bacterial,nonUG\r
A0A812LTJ5,non-LTR,2826,bacterial,nonUG\r
A0A813GG27,non-LTR,2826,bacterial,nonUG\r
A0A1Q9CBJ2,non-LTR,2827,bacterial,nonUG\r
A0A812IIW6,non-LTR,2827,bacterial,nonUG\r
A0A0P6IU55,non-LTR,2828,bacterial,nonUG\r
A0A4C1WUE9,non-LTR,2828,bacterial,nonUG\r
A0A0P6ITR4,non-LTR,2829,bacterial,nonUG\r
A0A6J1SVA7,non-LTR,2829,bacterial,nonUG\r
A0A838W906,non-LTR,2830,bacterial,nonUG\r
A0A2P6N9H8,non-LTR,2830,bacterial,nonUG\r
L8GFH4,non-LTR,2831,bacterial,nonUG\r
A0A0G4E8T5,non-LTR,2831,bacterial,nonUG\r
A0A150GNC5,non-LTR,2832,bacterial,nonUG\r
A0A7S0MXH0,non-LTR,2832,bacterial,nonUG\r
A0A7W1C0G9,non-LTR,2833,bacterial,nonUG\r
D3BEG6,non-LTR,2833,bacterial,nonUG\r
A0A838N6K7,non-LTR,2834,bacterial,nonUG\r
A0A7S1N0S6,non-LTR,2834,bacterial,nonUG\r
A0A7S1JD79,non-LTR,2835,bacterial,nonUG\r
A0A7S1NEX9,non-LTR,2835,bacterial,nonUG\r
A0A2N9F068,non-LTR,2836,bacterial,nonUG\r
A0A2N9GGQ9,non-LTR,2836,bacterial,nonUG\r
A0A834HFR2,non-LTR,2837,bacterial,nonUG\r
A0A2N9F4Z0,non-LTR,2837,bacterial,nonUG\r
A0A2N9EY44,non-LTR,2838,bacterial,nonUG\r
A0A834D4L9,non-LTR,2838,bacterial,nonUG\r
A0A2N9HKW7,non-LTR,2839,bacterial,nonUG\r
B8BE31,non-LTR,2839,bacterial,nonUG\r
A0A453K4J3,non-LTR,2840,bacterial,nonUG\r
A0A2I4E8H9,non-LTR,2840,bacterial,nonUG\r
A0A833TKR9,non-LTR,2841,bacterial,nonUG\r
A0A1R3GLF3,non-LTR,2841,bacterial,nonUG\r
A0A5B6WTK4,non-LTR,2842,bacterial,nonUG\r
A0A5B6UGM9,non-LTR,2842,bacterial,nonUG\r
A0A1U8J5G5,non-LTR,2843,bacterial,nonUG\r
A0A5B6WIN8,non-LTR,2843,bacterial,nonUG\r
A0A1U8I2Q3,non-LTR,2844,bacterial,nonUG\r
A0A803PSV0,non-LTR,2844,bacterial,nonUG\r
M5XIV5,non-LTR,2845,bacterial,nonUG\r
A0A803P0J9,non-LTR,2845,bacterial,nonUG\r
A0A803QHG9,non-LTR,2846,bacterial,nonUG\r
A0A803NGI9,non-LTR,2846,bacterial,nonUG\r
A0A6P4BJG5,non-LTR,2847,bacterial,nonUG\r
A0A6J5V8Q1,non-LTR,2847,bacterial,nonUG\r
A0A5N5IB01,non-LTR,2848,bacterial,nonUG\r
A0A834GE24,non-LTR,2848,bacterial,nonUG\r
J3MVP4,non-LTR,2849,bacterial,nonUG\r
M5WCD6,non-LTR,2849,bacterial,nonUG\r
A0A2K3PRL4,non-LTR,2850,bacterial,nonUG\r
A0A2Z6NY57,non-LTR,2850,bacterial,nonUG\r
A0A438D8U2,non-LTR,2851,bacterial,nonUG\r
A0A2Z6NX36,non-LTR,2851,bacterial,nonUG\r
A0A6P6T067,non-LTR,2852,bacterial,nonUG\r
A0A6P6V2V3,non-LTR,2852,bacterial,nonUG\r
A0A803NXZ1,non-LTR,2853,bacterial,nonUG\r
A0A803PCN2,non-LTR,2853,bacterial,nonUG\r
A0A803PII9,non-LTR,2854,bacterial,nonUG\r
A0A4D8Z3E5,non-LTR,2854,bacterial,nonUG\r
A0A175YKW1,non-LTR,2855,bacterial,nonUG\r
A0A6D2HFH4,non-LTR,2855,bacterial,nonUG\r
A0A178U636,non-LTR,2856,bacterial,nonUG\r
A0A6J0JKN7,non-LTR,2856,bacterial,nonUG\r
A0A087GD46,non-LTR,2857,bacterial,nonUG\r
A0A6D2K684,non-LTR,2857,bacterial,nonUG\r
A0A803P9U8,non-LTR,2858,bacterial,nonUG\r
A0A803PTL7,non-LTR,2858,bacterial,nonUG\r
A0A803QFT6,non-LTR,2859,bacterial,nonUG\r
A0A803NNJ1,non-LTR,2859,bacterial,nonUG\r
A0A803PSQ1,non-LTR,2860,bacterial,nonUG\r
A0A2Z6PKH7,non-LTR,2860,bacterial,nonUG\r
A0A392MB40,non-LTR,2861,bacterial,nonUG\r
A0A834LFK3,non-LTR,2861,bacterial,nonUG\r
A0A7N2M0D5,non-LTR,2862,bacterial,nonUG\r
A0A3L6TCF9,non-LTR,2862,bacterial,nonUG\r
B8AVS5,non-LTR,2863,bacterial,nonUG\r
A0A834WUY9,non-LTR,2863,bacterial,nonUG\r
A0A834SR30,non-LTR,2864,bacterial,nonUG\r
A0A1R3GUS6,non-LTR,2864,bacterial,nonUG\r
A0A5N5FVC7,non-LTR,2865,bacterial,nonUG\r
A0A2U1MVD0,non-LTR,2865,bacterial,nonUG\r
A0A834L6G4,non-LTR,2866,bacterial,nonUG\r
A0A6P5MRQ9,non-LTR,2866,bacterial,nonUG\r
A0A4Y7JB21,non-LTR,2867,bacterial,nonUG\r
A0A822ZNS6,non-LTR,2867,bacterial,nonUG\r
A0A835H393,non-LTR,2868,bacterial,nonUG\r
A0A803PR23,non-LTR,2868,bacterial,nonUG\r
A0A803QDU6,non-LTR,2869,bacterial,nonUG\r
A0A803QPG7,non-LTR,2869,bacterial,nonUG\r
A0A803PHC4,non-LTR,2870,bacterial,nonUG\r
A0A803QA77,non-LTR,2870,bacterial,nonUG\r
A0A803NXW4,non-LTR,2871,bacterial,nonUG\r
A0A2N9E896,non-LTR,2871,bacterial,nonUG\r
A0A2N9F7G7,non-LTR,2872,bacterial,nonUG\r
A0A2N9IGY1,non-LTR,2872,bacterial,nonUG\r
A0A2N9FS53,non-LTR,2873,bacterial,nonUG\r
A0A6P3ZSG1,non-LTR,2873,bacterial,nonUG\r
A0A2I0KWI7,non-LTR,2874,bacterial,nonUG\r
A0A2N9IEJ4,non-LTR,2874,bacterial,nonUG\r
A0A2N9H1Z9,non-LTR,2875,bacterial,nonUG\r
A0A803Q9B8,non-LTR,2875,bacterial,nonUG\r
A0A803PV05,non-LTR,2876,bacterial,nonUG\r
A0A6P9E9Z8,non-LTR,2876,bacterial,nonUG\r
A0A2I4HC76,non-LTR,2877,bacterial,nonUG\r
A0A6P5FLZ2,non-LTR,2877,bacterial,nonUG\r
A0A2I0VYZ5,non-LTR,2878,bacterial,nonUG\r
A0A2I0VD29,non-LTR,2878,bacterial,nonUG\r
A0A2I0ACS8,non-LTR,2879,bacterial,nonUG\r
A0A5B6U4I8,non-LTR,2879,bacterial,nonUG\r
A0A4D8Z6W9,non-LTR,2880,bacterial,nonUG\r
A0A6P8E5K3,non-LTR,2880,bacterial,nonUG\r
A0A151RTM7,non-LTR,2881,bacterial,nonUG\r
A0A151T691,non-LTR,2881,bacterial,nonUG\r
A0A151RRB7,non-LTR,2882,bacterial,nonUG\r
A0A2K3LZM6,non-LTR,2882,bacterial,nonUG\r
A0A151S8J7,non-LTR,2883,bacterial,nonUG\r
A0A6A3CZD2,non-LTR,2883,bacterial,nonUG\r
A0A6A2XYE3,non-LTR,2884,bacterial,nonUG\r
A0A392LX77,non-LTR,2884,bacterial,nonUG\r
A0A392M4H3,non-LTR,2885,bacterial,nonUG\r
A0A444YA93,non-LTR,2885,bacterial,nonUG\r
A0A5E4GES4,non-LTR,2886,bacterial,nonUG\r
A0A1R3G587,non-LTR,2886,bacterial,nonUG\r
A0A1S4CC84,non-LTR,2887,bacterial,nonUG\r
A0A2N9GVI8,non-LTR,2887,bacterial,nonUG\r
A0A803MQT3,non-LTR,2888,bacterial,nonUG\r
A0A834W6N5,non-LTR,2888,bacterial,nonUG\r
A0A834XBX3,non-LTR,2889,bacterial,nonUG\r
A0A834SGK9,non-LTR,2889,bacterial,nonUG\r
M5WRJ8,non-LTR,2890,bacterial,nonUG\r
A0A0P0WX53,non-LTR,2890,bacterial,nonUG\r
A0A834X167,non-LTR,2891,bacterial,nonUG\r
A0A834W8W6,non-LTR,2891,bacterial,nonUG\r
A0A835CKF3,non-LTR,2892,bacterial,nonUG\r
A0A834SGE5,non-LTR,2892,bacterial,nonUG\r
A0A803N7C0,non-LTR,2893,bacterial,nonUG\r
A0A6I9V369,non-LTR,2893,bacterial,nonUG\r
A0A484M9E2,non-LTR,2894,bacterial,nonUG\r
A0A7J0G7Y2,non-LTR,2894,bacterial,nonUG\r
A0A1S4DGA5,non-LTR,2895,bacterial,nonUG\r
A0A1S4DEN4,non-LTR,2895,bacterial,nonUG\r
A0A2K3NHQ4,non-LTR,2896,bacterial,nonUG\r
A0A803P4Q1,non-LTR,2896,bacterial,nonUG\r
A0A803Q992,non-LTR,2897,bacterial,nonUG\r
A0A803P3S3,non-LTR,2897,bacterial,nonUG\r
A0A803PYC4,non-LTR,2898,bacterial,nonUG\r
A0A484NHY8,non-LTR,2898,bacterial,nonUG\r
A0A1U8G6P3,non-LTR,2899,bacterial,nonUG\r
A0A6L2KTG8,non-LTR,2899,bacterial,nonUG\r
A0A699IPZ5,non-LTR,2900,bacterial,nonUG\r
A0A6L2NME7,non-LTR,2900,bacterial,nonUG\r
A0A6L2KNM0,non-LTR,2901,bacterial,nonUG\r
A0A251SD80,non-LTR,2901,bacterial,nonUG\r
A0A6L2LAR5,non-LTR,2902,bacterial,nonUG\r
A0A6I9TJT8,non-LTR,2902,bacterial,nonUG\r
A0A6I9UGH2,non-LTR,2903,bacterial,nonUG\r
A0A5D3DT20,non-LTR,2903,bacterial,nonUG\r
A0A2N9HM15,non-LTR,2904,bacterial,nonUG\r
O65598,non-LTR,2904,bacterial,nonUG\r
A0A178UW88,non-LTR,2905,bacterial,nonUG\r
A0A6D2HYA3,non-LTR,2905,bacterial,nonUG\r
A0A6J0KM30,non-LTR,2906,bacterial,nonUG\r
A0A6A2Z618,non-LTR,2906,bacterial,nonUG\r
A0A6A2XV92,non-LTR,2907,bacterial,nonUG\r
A0A2I0VLI2,non-LTR,2907,bacterial,nonUG\r
A0A1D1YFE7,non-LTR,2908,bacterial,nonUG\r
A0A5K1A2X5,non-LTR,2908,bacterial,nonUG\r
A0A6P6V824,non-LTR,2909,bacterial,nonUG\r
A0A6P6VDP1,non-LTR,2909,bacterial,nonUG\r
A0A5N5LD40,non-LTR,2910,bacterial,nonUG\r
A0A2I0XDZ4,non-LTR,2910,bacterial,nonUG\r
A0A6P6XAH9,non-LTR,2911,bacterial,nonUG\r
A0A061FTW1,non-LTR,2911,bacterial,nonUG\r
A0A1U8G4N9,non-LTR,2912,bacterial,nonUG\r
A0A1S3ZB11,non-LTR,2912,bacterial,nonUG\r
A0A1S4BNK6,non-LTR,2913,bacterial,nonUG\r
A0A835PJR2,non-LTR,2913,bacterial,nonUG\r
A0A484LZZ9,non-LTR,2914,bacterial,nonUG\r
A0A484LAY9,non-LTR,2914,bacterial,nonUG\r
A0A484MQM8,non-LTR,2915,bacterial,nonUG\r
A0A484LI22,non-LTR,2915,bacterial,nonUG\r
A0A6P6TF03,non-LTR,2916,bacterial,nonUG\r
A0A6P6VJB9,non-LTR,2916,bacterial,nonUG\r
A0A2Z6NQ52,non-LTR,2917,bacterial,nonUG\r
A0A2Z6MD03,non-LTR,2917,bacterial,nonUG\r
A0A6A5MBL7,non-LTR,2918,bacterial,nonUG\r
A0A2P6PSU6,non-LTR,2918,bacterial,nonUG\r
A0A7J7MRY2,non-LTR,2919,bacterial,nonUG\r
A0A699H453,non-LTR,2919,bacterial,nonUG\r
A0A6L2J1P3,non-LTR,2920,bacterial,nonUG\r
A0A699HHS1,non-LTR,2920,bacterial,nonUG\r
A0A6L2JCM8,non-LTR,2921,bacterial,nonUG\r
A0A6L2LEM5,non-LTR,2921,bacterial,nonUG\r
A0A6L2MVH7,non-LTR,2922,bacterial,nonUG\r
A0A699H7I5,non-LTR,2922,bacterial,nonUG\r
A0A6L2LAW4,non-LTR,2923,bacterial,nonUG\r
A0A6L2J218,non-LTR,2923,bacterial,nonUG\r
A0A6L2NYQ5,non-LTR,2924,bacterial,nonUG\r
A0A699ICK2,non-LTR,2924,bacterial,nonUG\r
A0A2U1NWP4,non-LTR,2925,bacterial,nonUG\r
A0A445IKM5,non-LTR,2925,bacterial,nonUG\r
A0A445M2Q6,non-LTR,2926,bacterial,nonUG\r
G8DCW8,non-LTR,2926,bacterial,nonUG\r
A0A151S6X1,non-LTR,2927,bacterial,nonUG\r
A0A2K3P7C7,non-LTR,2927,bacterial,nonUG\r
A0A2Z6NCN0,non-LTR,2928,bacterial,nonUG\r
A0A2Z6MTH4,non-LTR,2928,bacterial,nonUG\r
A0A2Z6NRZ9,non-LTR,2929,bacterial,nonUG\r
A0A2Z6NYY2,non-LTR,2929,bacterial,nonUG\r
A0A151SN56,non-LTR,2930,bacterial,nonUG\r
A0A7J0D929,non-LTR,2930,bacterial,nonUG\r
A0A6A3ALT3,non-LTR,2931,bacterial,nonUG\r
A0A6P4BY34,non-LTR,2931,bacterial,nonUG\r
A0A6A3B497,non-LTR,2932,bacterial,nonUG\r
A0A438GFP5,non-LTR,2932,bacterial,nonUG\r
A0A438J3K0,non-LTR,2933,bacterial,nonUG\r
A0A438HGN1,non-LTR,2933,bacterial,nonUG\r
A0A438F3M1,non-LTR,2934,bacterial,nonUG\r
A0A438DK36,non-LTR,2934,bacterial,nonUG\r
A0A438CAD5,non-LTR,2935,bacterial,nonUG\r
A0A438F6M4,non-LTR,2935,bacterial,nonUG\r
A0A438EI70,non-LTR,2936,bacterial,nonUG\r
A0A438ET54,non-LTR,2936,bacterial,nonUG\r
A0A2N9G2U9,non-LTR,2937,bacterial,nonUG\r
A0A2N9J5C6,non-LTR,2937,bacterial,nonUG\r
A0A2N9H895,non-LTR,2938,bacterial,nonUG\r
A0A2N9H3B1,non-LTR,2938,bacterial,nonUG\r
A0A2N9FP60,non-LTR,2939,bacterial,nonUG\r
A0A1S4AXD4,non-LTR,2939,bacterial,nonUG\r
A0A438CEZ3,non-LTR,2940,bacterial,nonUG\r
A0A438JRE5,non-LTR,2940,bacterial,nonUG\r
A0A5E4FWN6,non-LTR,2941,bacterial,nonUG\r
A0A803PAY8,non-LTR,2941,bacterial,nonUG\r
A0A5D3C2W8,non-LTR,2942,bacterial,nonUG\r
A0A5K1DFY1,non-LTR,2942,bacterial,nonUG\r
A0A2U1MW63,non-LTR,2943,bacterial,nonUG\r
A0A453PA94,non-LTR,2943,bacterial,nonUG\r
A0A453EWT2,non-LTR,2944,bacterial,nonUG\r
Q7XLJ3,non-LTR,2944,bacterial,nonUG\r
A0A5S6R989,non-LTR,2945,bacterial,nonUG\r
Q6ATG8,non-LTR,2945,bacterial,nonUG\r
R7WA17,non-LTR,2946,bacterial,nonUG\r
M8CLX2,non-LTR,2946,bacterial,nonUG\r
A0A199UNR3,non-LTR,2947,bacterial,nonUG\r
A0A199W0A4,non-LTR,2947,bacterial,nonUG\r
J3L168,non-LTR,2948,bacterial,nonUG\r
Q7XKK3,non-LTR,2948,bacterial,nonUG\r
A0A453NC24,non-LTR,2949,bacterial,nonUG\r
C7J6J5,non-LTR,2949,bacterial,nonUG\r
Q948A0,non-LTR,2950,bacterial,nonUG\r
Q7XVQ0,non-LTR,2950,bacterial,nonUG\r
A0A7H4LIX4,non-LTR,2951,bacterial,nonUG\r
B9GCW0,non-LTR,2951,bacterial,nonUG\r
Q10IP9,non-LTR,2952,bacterial,nonUG\r
Q8H992,non-LTR,2952,bacterial,nonUG\r
A0A6V7NJ93,non-LTR,2953,bacterial,nonUG\r
A0A2K1JHT8,non-LTR,2953,bacterial,nonUG\r
A0A176W190,non-LTR,2954,bacterial,nonUG\r
A0A176VPL5,non-LTR,2954,bacterial,nonUG\r
A0A388L4M7,non-LTR,2955,bacterial,nonUG\r
A0A388M3U4,non-LTR,2955,bacterial,nonUG\r
A0A388K5C4,non-LTR,2956,bacterial,nonUG\r
A0A388LU14,non-LTR,2956,bacterial,nonUG\r
A0A388JZR0,non-LTR,2957,bacterial,nonUG\r
A0A388KXF0,non-LTR,2957,bacterial,nonUG\r
A0A388JS56,non-LTR,2958,bacterial,nonUG\r
A0A388M5K7,non-LTR,2958,bacterial,nonUG\r
A0A2K1JU92,non-LTR,2959,bacterial,nonUG\r
A0A3B3BVU9,non-LTR,2959,bacterial,nonUG\r
A0A672FFM7,non-LTR,2960,bacterial,nonUG\r
A0A3Q3ED67,non-LTR,2960,bacterial,nonUG\r
A0A6I8SLC4,non-LTR,2961,bacterial,nonUG\r
A0A803JGS2,non-LTR,2961,bacterial,nonUG\r
A0A3Q1F781,non-LTR,2962,bacterial,nonUG\r
A0A3P8R7Z4,non-LTR,2962,bacterial,nonUG\r
A0A3Q2EIC0,non-LTR,2963,bacterial,nonUG\r
A0A3Q3FNA9,non-LTR,2963,bacterial,nonUG\r
A0A667X5D4,non-LTR,2964,bacterial,nonUG\r
A0A3Q3JGV0,non-LTR,2964,bacterial,nonUG\r
A0A803JJL3,non-LTR,2965,bacterial,nonUG\r
A0A803JAB7,non-LTR,2965,bacterial,nonUG\r
A0A6P7WQ27,non-LTR,2966,bacterial,nonUG\r
A0A6I8RW77,non-LTR,2966,bacterial,nonUG\r
A0A803JJA9,non-LTR,2967,bacterial,nonUG\r
A0A822GMG0,non-LTR,2967,bacterial,nonUG\r
A0A1A8PUF6,non-LTR,2968,bacterial,nonUG\r
A0A096M5N2,non-LTR,2968,bacterial,nonUG\r
A0A3Q3FLP2,non-LTR,2969,bacterial,nonUG\r
A0A0G2JUM9,non-LTR,2969,bacterial,nonUG\r
A0A670I6B9,non-LTR,2970,bacterial,nonUG\r
A0A670I215,non-LTR,2970,bacterial,nonUG\r
A0A803TEV0,non-LTR,2971,bacterial,nonUG\r
A0A803SUI6,non-LTR,2971,bacterial,nonUG\r
A0A803T692,non-LTR,2972,bacterial,nonUG\r
A0A432I2X1,non-LTR,2972,bacterial,nonUG\r
A0A354GEQ8,non-LTR,2973,bacterial,nonUG\r
A0A6F9DM83,non-LTR,2973,bacterial,nonUG\r
A0A432IA28,non-LTR,2974,bacterial,nonUG\r
A0A432I848,non-LTR,2974,bacterial,nonUG\r
A0A2G8JMH0,non-LTR,2975,bacterial,nonUG\r
A0A096MC09,non-LTR,2975,bacterial,nonUG\r
A0A1A8RRJ4,non-LTR,2976,bacterial,nonUG\r
A0A0G2KV08,non-LTR,2976,bacterial,nonUG\r
A0A2K3D234,non-LTR,2977,bacterial,nonUG\r
A0A2J7ZLA0,non-LTR,2977,bacterial,nonUG\r
A0A2K3DSH2,non-LTR,2978,bacterial,nonUG\r
A0A2J7ZU46,non-LTR,2978,bacterial,nonUG\r
A0A2P6TAZ8,non-LTR,2979,bacterial,nonUG\r
A0A7S2QSR4,non-LTR,2979,bacterial,nonUG\r
A0A250XAW2,non-LTR,2980,bacterial,nonUG\r
A0A383WHM7,non-LTR,2980,bacterial,nonUG\r
A0A2K3CMZ0,non-LTR,2981,bacterial,nonUG\r
A0A7S2J8C0,non-LTR,2981,bacterial,nonUG\r
A0A7S2DLX9,non-LTR,2982,bacterial,nonUG\r
A0A7S2J8F8,non-LTR,2982,bacterial,nonUG\r
A0A1V9Y8S0,non-LTR,2983,bacterial,nonUG\r
A0A6G0XDT0,non-LTR,2983,bacterial,nonUG\r
A0A833SF44,non-LTR,2984,bacterial,nonUG\r
F0WG47,non-LTR,2984,bacterial,nonUG\r
A0A833SFI5,non-LTR,2985,bacterial,nonUG\r
A0A833WFZ0,non-LTR,2985,bacterial,nonUG\r
A0A6A3S471,non-LTR,2986,bacterial,nonUG\r
A0A225W1A1,non-LTR,2986,bacterial,nonUG\r
Q572J7,non-LTR,2987,bacterial,nonUG\r
A0A397E673,non-LTR,2987,bacterial,nonUG\r
A0A225VP51,non-LTR,2988,bacterial,nonUG\r
A0A3B4UTK1,non-LTR,2988,bacterial,nonUG\r
A0A3B3D7A0,non-LTR,2989,bacterial,nonUG\r
A0A6J8A9N0,non-LTR,2989,bacterial,nonUG\r
A0A2G8JRT0,non-LTR,2990,bacterial,nonUG\r
A0A482YNE9,non-LTR,2990,bacterial,nonUG\r
A0A8B6DRM3,non-LTR,2991,bacterial,nonUG\r
A0A6J8BT64,non-LTR,2991,bacterial,nonUG\r
A0A3Q2X2I3,non-LTR,2992,bacterial,nonUG\r
A0A2G8KBP6,non-LTR,2992,bacterial,nonUG\r
A0A2G8K5D1,non-LTR,2993,bacterial,nonUG\r
A0A812C2N4,non-LTR,2993,bacterial,nonUG\r
A0A6S7K6K6,non-LTR,2994,bacterial,nonUG\r
A0A8B6HMP3,non-LTR,2994,bacterial,nonUG\r
A0A2B4SBM2,non-LTR,2995,bacterial,nonUG\r
A0A6S7GBM3,non-LTR,2995,bacterial,nonUG\r
A0A7D9I263,non-LTR,2996,bacterial,nonUG\r
A0A3N0XMX8,non-LTR,2996,bacterial,nonUG\r
A0A3B5PWS7,non-LTR,2997,bacterial,nonUG\r
Q76IM7,non-LTR,2997,bacterial,nonUG\r
A0A5C6P249,non-LTR,2998,bacterial,nonUG\r
A0A5J5CCJ1,non-LTR,2998,bacterial,nonUG\r
A0A4W5JM51,non-LTR,2999,bacterial,nonUG\r
A0A818STP1,non-LTR,2999,bacterial,nonUG\r
A0A815FLC0,non-LTR,3000,bacterial,nonUG\r
A0A818Y1U7,non-LTR,3000,bacterial,nonUG\r
A0A7M4E7A5,non-LTR,3001,bacterial,nonUG\r
A0A4W5L9B3,non-LTR,3001,bacterial,nonUG\r
A0A803J337,non-LTR,3002,bacterial,nonUG\r
A0A6Q2X7C7,non-LTR,3002,bacterial,nonUG\r
H2ZZX0,non-LTR,3003,bacterial,nonUG\r
A0A803TB21,non-LTR,3003,bacterial,nonUG\r
A0A6I8Q649,non-LTR,3004,bacterial,nonUG\r
A0A3B1IC81,non-LTR,3004,bacterial,nonUG\r
A0A2R5L921,non-LTR,3005,bacterial,nonUG\r
A0A1E1X2L5,non-LTR,3005,bacterial,nonUG\r
A0A131XUX4,non-LTR,3006,bacterial,nonUG\r
A0A226DA57,non-LTR,3006,bacterial,nonUG\r
A0A7R9XH65,non-LTR,3007,bacterial,nonUG\r
A0A7R9NIT4,non-LTR,3007,bacterial,nonUG\r
A0A7R9X578,non-LTR,3008,bacterial,nonUG\r
A0A7R9XKS5,non-LTR,3008,bacterial,nonUG\r
A0A7R9REG3,non-LTR,3009,bacterial,nonUG\r
A0A7J7KGR2,non-LTR,3009,bacterial,nonUG\r
A0A182R3Y0,non-LTR,3010,bacterial,nonUG\r
A0A182FLS7,non-LTR,3010,bacterial,nonUG\r
A0A1W7R6E0,non-LTR,3011,bacterial,nonUG\r
A0A1W7R675,non-LTR,3011,bacterial,nonUG\r
A0A0K1IJB0,non-LTR,3012,bacterial,nonUG\r
L7LX15,non-LTR,3012,bacterial,nonUG\r
A0A131Y5R5,non-LTR,3013,bacterial,nonUG\r
A0A7R9RVL0,non-LTR,3013,bacterial,nonUG\r
A0A6F9DM55,non-LTR,3014,bacterial,nonUG\r
A0A6F9DMX7,non-LTR,3014,bacterial,nonUG\r
A0A814I0M6,non-LTR,3015,bacterial,nonUG\r
A0A7R9X1X5,non-LTR,3015,bacterial,nonUG\r
A0A7R9RST1,non-LTR,3016,bacterial,nonUG\r
A0A068SFN0,non-LTR,3016,bacterial,nonUG\r
A0A0C9MKP2,non-LTR,3017,bacterial,nonUG\r
A0A1C7MXH7,non-LTR,3017,bacterial,nonUG\r
I1BTK6,non-LTR,3018,bacterial,nonUG\r
A0A1C7MXE6,non-LTR,3018,bacterial,nonUG\r
I1C8P9,non-LTR,3019,bacterial,nonUG\r
A0A0B7NY60,non-LTR,3019,bacterial,nonUG\r
S2JAN6,non-LTR,3020,bacterial,nonUG\r
A0A1C7MX11,non-LTR,3020,bacterial,nonUG\r
A0A0B7NG03,non-LTR,3021,bacterial,nonUG\r
A0A0B7NA71,non-LTR,3021,bacterial,nonUG\r
A0A0B7MVQ9,non-LTR,3022,bacterial,nonUG\r
A0A7J6V1Q5,non-LTR,3022,bacterial,nonUG\r
A0A1R1X311,non-LTR,3023,bacterial,nonUG\r
A0A177T0X7,non-LTR,3023,bacterial,nonUG\r
A0A177U104,non-LTR,3024,bacterial,nonUG\r
A0A0P1BS47,non-LTR,3024,bacterial,nonUG\r
A0A127ZKB9,non-LTR,3025,bacterial,nonUG\r
A0A0F7RXJ2,non-LTR,3025,bacterial,nonUG\r
A0A2X0KGA8,non-LTR,3026,bacterial,nonUG\r
A0A238F9F2,non-LTR,3026,bacterial,nonUG\r
A0A533WA04,non-LTR,3027,bacterial,nonUG\r
A0A3N5HUC3,non-LTR,3027,bacterial,nonUG\r
A0A7J6UZ44,non-LTR,3028,bacterial,nonUG\r
A0A5C3EST9,non-LTR,3028,bacterial,nonUG\r
A0A4Y9XS76,non-LTR,3029,bacterial,nonUG\r
A0A060SP60,non-LTR,3029,bacterial,nonUG\r
A0A507CA20,non-LTR,3030,bacterial,nonUG\r
A0A238F5Z9,non-LTR,3030,bacterial,nonUG\r
Q54DH4,non-LTR,3031,bacterial,nonUG\r
O15639,non-LTR,3031,bacterial,nonUG\r
Q54BG8,non-LTR,3032,bacterial,nonUG\r
A0A7T8HJE4,non-LTR,3032,bacterial,nonUG\r
A0A7T8KB24,non-LTR,3033,bacterial,nonUG\r
A0A7T8JZM2,non-LTR,3033,bacterial,nonUG\r
A0A7C7WVN4,non-LTR,3034,bacterial,nonUG\r
A0A813JI41,non-LTR,3034,bacterial,nonUG\r
A0A1D8NA99,non-LTR,3035,bacterial,nonUG\r
A0A1D8PSY7,non-LTR,3035,bacterial,nonUG\r
M3HSY6,non-LTR,3036,bacterial,nonUG\r
A0A4T0WXC4,non-LTR,3036,bacterial,nonUG\r
C4YT66,non-LTR,3037,bacterial,nonUG\r
A0A367YI73,non-LTR,3037,bacterial,nonUG\r
A0A2H0ZN92,non-LTR,3038,bacterial,nonUG\r
A0A4P6XLH8,non-LTR,3038,bacterial,nonUG\r
A0A7S1I335,non-LTR,3039,bacterial,nonUG\r
A0A7S4G3B4,non-LTR,3039,bacterial,nonUG\r
A0A7S1NEV5,non-LTR,3040,bacterial,nonUG\r
A0A7V8BME0,non-LTR,3040,bacterial,nonUG\r
A0A6C0ITM6,non-LTR,3041,bacterial,nonUG\r
A0A6C0H7X2,non-LTR,3041,bacterial,nonUG\r
A0A5E8CJ50,non-LTR,3042,bacterial,nonUG\r
A0A6C0J8G2,non-LTR,3042,bacterial,nonUG\r
A0A078ANZ2,non-LTR,3043,bacterial,nonUG\r
Q6UE72,non-LTR,3043,bacterial,nonUG\r
A0A1B9C278,non-LTR,3044,bacterial,nonUG\r
I7M7X4,non-LTR,3044,bacterial,nonUG\r
A0A023AW47,non-LTR,3045,bacterial,nonUG\r
B3SRB8,non-LTR,3045,bacterial,nonUG\r
A0A1V9YW80,non-LTR,3046,bacterial,nonUG\r
F0WX79,non-LTR,3046,bacterial,nonUG\r
A0A0G0KQT7,non-LTR,3047,bacterial,nonUG\r
A0A2E3GXA4,G2L/CRISPR,3047,bacterial,nonUG\r
A6BYW4,G2L/CRISPR,3048,bacterial,nonUG\r
A0A5B9MFN6,G2L/CRISPR,3048,bacterial,nonUG\r
A0A6I6A9K5,G2L/CRISPR,3049,bacterial,nonUG\r
A0A142WWP1,G2L/CRISPR,3049,bacterial,nonUG\r
A0A142WPH1,G2L/CRISPR,3050,bacterial,nonUG\r
A0A177R9U0,G2L/CRISPR,3050,bacterial,nonUG\r
A0A2E2C0V8,G2L/CRISPR,3051,bacterial,nonUG\r
A0A3E0MZR9,G2L/CRISPR,3051,bacterial,nonUG\r
A0A5C1AI98,G2L/CRISPR,3052,bacterial,nonUG\r
A0A3D4PF71,G2L/CRISPR,3052,bacterial,nonUG\r
A0A517XV55,G2L/CRISPR,3053,bacterial,nonUG\r
K2DQF9,G2L/CRISPR,3053,bacterial,nonUG\r
A0A497AIQ2,G2L/CRISPR,3054,bacterial,nonUG\r
A0A0F2ITQ2,G2L/CRISPR,3054,bacterial,nonUG\r
A0A7X7VTA9,G2L/CRISPR,3055,bacterial,nonUG\r
A0A1D2U109,G2L/CRISPR,3055,bacterial,nonUG\r
A0A4P5Y5L5,G2L/CRISPR,3056,bacterial,nonUG\r
A0A6L5H9Q9,Class 1 UG/Abi,3056,bacterial,nonUG\r
A0A2J0SQB7,Class 1 UG/Abi,3057,bacterial,nonUG\r
A0A4Q3G5T8,Class 1 UG/Abi,3057,bacterial,nonUG\r
Q07KQ6,Class 1 UG/Abi,3058,bacterial,nonUG\r
R9L894,Class 1 UG/Abi,3058,bacterial,nonUG\r
A0A519NS48,Class 1 UG/Abi,3059,bacterial,nonUG\r
A0A364K9A8,Class 1 UG/Abi,3059,bacterial,nonUG\r
A0A2I0PEM9,Class 1 UG/Abi,3060,bacterial,nonUG\r
A0A4U3ETD6,Class 1 UG/Abi,3060,bacterial,nonUG\r
A0A1Q8TRL4,Class 1 UG/Abi,3061,bacterial,nonUG\r
A0A852VIQ6,Class 1 UG/Abi,3061,bacterial,nonUG\r
A0A2V8KNE8,Class 1 UG/Abi,3062,bacterial,nonUG\r
A0A1E2WRC1,Class 1 UG/Abi,3062,bacterial,nonUG\r
A8U9C4,Class 1 UG/Abi,3063,bacterial,nonUG\r
A0A1E5G520,Class 1 UG/Abi,3063,bacterial,nonUG\r
Q2B7Y2,Class 1 UG/Abi,3064,bacterial,nonUG\r
A0A7C1KN40,Class 1 UG/Abi,3064,bacterial,nonUG\r
A0A1A9R189,Class 1 UG/Abi,3065,bacterial,nonUG\r
A0A1I5M3N5,Class 1 UG/Abi,3065,bacterial,nonUG\r
A0A3E4NBQ9,Class 1 UG/Abi,3066,bacterial,nonUG\r
A0A413VQI4,Class 1 UG/Abi,3066,bacterial,nonUG\r
A0A285MX96,Class 1 UG/Abi,3067,bacterial,nonUG\r
A0A415MUP7,Class 1 UG/Abi,3067,bacterial,nonUG\r
H1PQM9,Class 1 UG/Abi,3068,bacterial,nonUG\r
A0A1Y4UVJ1,Class 1 UG/Abi,3068,bacterial,nonUG\r
A0A832FDG1,Class 1 UG/Abi,3069,bacterial,nonUG\r
A0A1Q3WQI0,Class 1 UG/Abi,3069,bacterial,nonUG\r
A0A3A4UQI0,Class 1 UG/Abi,3070,bacterial,nonUG\r
A0A1L3Q038,Class 1 UG/Abi,3070,bacterial,nonUG\r
A0A2T4TW00,Class 1 UG/Abi,3071,bacterial,nonUG\r
A0A3A8LBM9,Class 1 UG/Abi,3071,bacterial,nonUG\r
A0A1H7I0M4,Class 1 UG/Abi,3072,bacterial,nonUG\r
A0A3P0XCW1,Class 1 UG/Abi,3072,bacterial,nonUG\r
A0A068MT12,Class 1 UG/Abi,3073,bacterial,nonUG\r
A0A0M2VEJ9,Class 1 UG/Abi,3073,bacterial,nonUG\r
A0A066S0A7,Class 1 UG/Abi,3074,bacterial,nonUG\r
A0A853NG02,Class 1 UG/Abi,3074,bacterial,nonUG\r
M5PQK8,Class 1 UG/Abi,3075,bacterial,nonUG\r
A0A3D8MS28,Class 1 UG/Abi,3075,bacterial,nonUG\r
A0A4Y6PPD5,Class 1 UG/Abi,3076,bacterial,nonUG\r
A0A7W1SA56,Class 1 UG/Abi,3076,bacterial,nonUG\r
A0A157Z8G0,Class 1 UG/Abi,3077,bacterial,nonUG\r
A0A3L8AT76,Class 1 UG/Abi,3077,bacterial,nonUG\r
A0A2T6CNV5,Class 1 UG/Abi,3078,bacterial,nonUG\r
A0A385LIC8,Class 1 UG/Abi,3078,bacterial,nonUG\r
A0A0A8K3S3,Class 1 UG/Abi,3079,bacterial,nonUG\r
A0A2J7TBT4,Class 1 UG/Abi,3079,bacterial,nonUG\r
A0A4D8R4A4,Class 1 UG/Abi,3080,bacterial,nonUG\r
A0A2U1SGC6,Class 1 UG/Abi,3080,bacterial,nonUG\r
A0A090GRC8,Class 1 UG/Abi,3081,bacterial,nonUG\r
F0LEM4,Class 1 UG/Abi,3081,bacterial,nonUG\r
A0A257FXW5,Class 1 UG/Abi,3082,bacterial,nonUG\r
A0A502STN7,Class 1 UG/Abi,3082,bacterial,nonUG\r
A0A0B4X575,Class 1 UG/Abi,3083,bacterial,nonUG\r
A0A4V3GRM5,Class 1 UG/Abi,3083,bacterial,nonUG\r
A0A0Q7I3Y3,Class 1 UG/Abi,3084,bacterial,nonUG\r
M5FEK1,Class 1 UG/Abi,3084,bacterial,nonUG\r
A0A2T5JTL4,Class 1 UG/Abi,3085,bacterial,nonUG\r
A0A840AA86,Class 1 UG/Abi,3085,bacterial,nonUG\r
A0A4Y1MS12,Class 1 UG/Abi,3086,bacterial,nonUG\r
A0A6I4AZ34,Class 1 UG/Abi,3086,bacterial,nonUG\r
A0A1X4N7Z2,Class 1 UG/Abi,3087,bacterial,nonUG\r
A0A442H4X2,Class 1 UG/Abi,3087,bacterial,nonUG\r
A0A3L9Y438,Class 1 UG/Abi,3088,bacterial,nonUG\r
A0A3M0CT97,Class 1 UG/Abi,3088,bacterial,nonUG\r
A0A0D4BZ69,Class 1 UG/Abi,3089,bacterial,nonUG\r
A0A1C2E6T2,Class 1 UG/Abi,3089,bacterial,nonUG\r
A0A2W4U883,Class 1 UG/Abi,3090,bacterial,nonUG\r
A0A1J5VA18,Class 1 UG/Abi,3090,bacterial,nonUG\r
A0A2Z3RXR8,Class 1 UG/Abi,3091,bacterial,nonUG\r
A0A258Z8F6,Class 1 UG/Abi,3091,bacterial,nonUG\r
A0A1Y0G139,Class 1 UG/Abi,3092,bacterial,nonUG\r
A0A423GKN1,Class 1 UG/Abi,3092,bacterial,nonUG\r
A0A7Y3Q652,Class 1 UG/Abi,3093,bacterial,nonUG\r
A0A3A4NXC2,Class 1 UG/Abi,3093,bacterial,nonUG\r
A0A2J7Y6V9,Class 1 UG/Abi,3094,bacterial,nonUG\r
A3QCY8,Class 1 UG/Abi,3094,bacterial,nonUG\r
A0A7C8BRA1,Class 1 UG/Abi,3095,bacterial,nonUG\r
X8HU76,Class 1 UG/Abi,3095,bacterial,nonUG\r
A0A413QZ32,Class 1 UG/Abi,3096,bacterial,nonUG\r
A0A4Q9V2E2,Class 1 UG/Abi,3096,bacterial,nonUG\r
A0A2P8QYY3,Class 1 UG/Abi,3097,bacterial,nonUG\r
M3R3I2,Class 1 UG/Abi,3097,bacterial,nonUG\r
A0A1R4KJT9,Class 1 UG/Abi,3098,bacterial,nonUG\r
A0A849T5Z1,Class 1 UG/Abi,3098,bacterial,nonUG\r
A0A2N1SP27,Class 1 UG/Abi,3099,bacterial,nonUG\r
A0A7X3RAE0,Class 1 UG/Abi,3099,bacterial,nonUG\r
A0A2S5FEN6,Class 1 UG/Abi,3100,bacterial,nonUG\r
A0A2N3TB42,Class 1 UG/Abi,3100,bacterial,nonUG\r
A0A7X9UM65,Class 1 UG/Abi,3101,bacterial,nonUG\r
E4U9T1,Class 1 UG/Abi,3101,bacterial,nonUG\r
A0A3D1HJE2,Class 1 UG/Abi,3102,bacterial,nonUG\r
R6A2Z2,Class 1 UG/Abi,3102,bacterial,nonUG\r
A0A831INE7,Class 1 UG/Abi,3103,bacterial,nonUG\r
A0A4R6PI75,Class 1 UG/Abi,3103,bacterial,nonUG\r
A0A847PNN4,Class 1 UG/Abi,3104,bacterial,nonUG\r
A0A8A6PAX1,Class 1 UG/Abi,3104,bacterial,nonUG\r
A0A139PCJ8,Class 1 UG/Abi,3105,bacterial,nonUG\r
A0A8A8ESZ6,Class 1 UG/Abi,3105,bacterial,nonUG\r
A0A3M0NV35,Class 1 UG/Abi,3106,bacterial,nonUG\r
A0A0R2BTS2,Class 1 UG/Abi,3106,bacterial,nonUG\r
A0A7T5R369,Class 1 UG/Abi,3107,bacterial,nonUG\r
A0A483AK88,Class 1 UG/Abi,3107,bacterial,nonUG\r
A0A4U8SB91,Class 1 UG/Abi,3108,bacterial,nonUG\r
A0A5E5PNS8,Class 1 UG/Abi,3108,bacterial,nonUG\r
A0A1F5T0M0,Class 1 UG/Abi,3109,bacterial,nonUG\r
A0A7H8YZG6,Class 1 UG/Abi,3109,bacterial,nonUG\r
A0A6S4GV19,Class 1 UG/Abi,3110,bacterial,nonUG\r
A0A1H9JQ13,Class 1 UG/Abi,3110,bacterial,nonUG\r
J1LN69,Class 1 UG/Abi,3111,bacterial,nonUG\r
A0A1M6E7R9,Class 1 UG/Abi,3111,bacterial,nonUG\r
A0A842J595,Class 1 UG/Abi,3112,bacterial,nonUG\r
A0A097B2H8,Class 1 UG/Abi,3112,bacterial,nonUG\r
A0A3F3A7C7,Class 1 UG/Abi,3113,bacterial,nonUG\r
A0A7U8ZRS7,Class 1 UG/Abi,3113,bacterial,nonUG\r
A0A3D2SD03,Class 1 UG/Abi,3114,bacterial,nonUG\r
A0A3D0MYD5,Class 1 UG/Abi,3114,bacterial,nonUG\r
A0A522JYV8,Class 1 UG/Abi,3115,bacterial,nonUG\r
A0A0G0NH81,Class 1 UG/Abi,3115,bacterial,nonUG\r
A0A3B6VHJ5,Class 1 UG/Abi,3116,bacterial,nonUG\r
A0A7C7M0H4,Class 1 UG/Abi,3116,bacterial,nonUG\r
A0A7T7RVY0,Class 1 UG/Abi,3117,bacterial,nonUG\r
A0A564T369,Class 1 UG/Abi,3117,bacterial,nonUG\r
A0A0R1F428,Class 1 UG/Abi,3118,bacterial,nonUG\r
A0A3D2EJI2,Class 1 UG/Abi,3118,bacterial,nonUG\r
A0A414RZZ5,Class 1 UG/Abi,3119,bacterial,nonUG\r
A0A857JX88,Class 1 UG/Abi,3119,bacterial,nonUG\r
A0A1B3SKC7,Class 1 UG/Abi,3120,bacterial,nonUG\r
A0A2K8SFH1,Class 1 UG/Abi,3120,bacterial,nonUG\r
A0A2N1QFB8,Class 1 UG/Abi,3121,bacterial,nonUG\r
A0A1C1A7X1,Class 1 UG/Abi,3121,bacterial,nonUG\r
A0A1F2EXR2,Class 1 UG/Abi,3122,bacterial,nonUG\r
A0A0R1M7T5,Class 1 UG/Abi,3122,bacterial,nonUG\r
I0SY98,Class 1 UG/Abi,3123,bacterial,nonUG\r
A0A291DCT6,Class 1 UG/Abi,3123,bacterial,nonUG\r
A0A2V4FBP0,Class 1 UG/Abi,3124,bacterial,nonUG\r
A0A0R1PLK1,Class 1 UG/Abi,3124,bacterial,nonUG\r
C8P6I0,Class 1 UG/Abi,3125,bacterial,nonUG\r
A0A160IPC9,Class 1 UG/Abi,3125,bacterial,nonUG\r
A0A7X0SDH6,Class 1 UG/Abi,3126,bacterial,nonUG\r
A0A2G3EDK6,Class 1 UG/Abi,3126,bacterial,nonUG\r
A0A373NW19,Class 1 UG/Abi,3127,bacterial,nonUG\r
A0A061AAT0,Class 1 UG/Abi,3127,bacterial,nonUG\r
A0A7C9JS31,Class 1 UG/Abi,3128,bacterial,nonUG\r
A0A6L8Q6V9,Class 1 UG/Abi,3128,bacterial,nonUG\r
A0A1R1DUX3,Class 1 UG/Abi,3129,bacterial,nonUG\r
A0A268I8W0,Class 1 UG/Abi,3129,bacterial,nonUG\r
A0A562KPQ9,Class 1 UG/Abi,3130,bacterial,nonUG\r
A0A0J7Y602,Class 1 UG/Abi,3130,bacterial,nonUG\r
A0A7W9R7V4,Class 1 UG/Abi,3131,bacterial,nonUG\r
A0A844WGS1,Class 1 UG/Abi,3131,bacterial,nonUG\r
A0A0T7GAB9,Class 1 UG/Abi,3132,bacterial,nonUG\r
A0A517M0L8,Class 1 UG/Abi,3132,bacterial,nonUG\r
A0A7W8DKW3,Class 1 UG/Abi,3133,bacterial,nonUG\r
A0A1H8UX75,Class 1 UG/Abi,3133,bacterial,nonUG\r
A0A1M5VUT8,Class 1 UG/Abi,3134,bacterial,nonUG\r
A0A415S1Z3,Class 1 UG/Abi,3134,bacterial,nonUG\r
A0A7Y0NRA4,Class 1 UG/Abi,3135,bacterial,nonUG\r
D0CBF4,Class 1 UG/Abi,3135,bacterial,nonUG\r
A0A853JAZ6,Class 1 UG/Abi,3136,bacterial,nonUG\r
A0A7W9V4B1,Class 1 UG/Abi,3136,bacterial,nonUG\r
A0A514EFM2,Class 1 UG/Abi,3137,bacterial,nonUG\r
A0A7G6UQ63,Class 1 UG/Abi,3137,bacterial,nonUG\r
A0A2T3PXQ9,Class 1 UG/Abi,3138,bacterial,nonUG\r
A0A1P8MLP5,Class 1 UG/Abi,3138,bacterial,nonUG\r
A0A1H1XEE4,Class 1 UG/Abi,3139,bacterial,nonUG\r
A0A7T4YPS2,Class 1 UG/Abi,3139,bacterial,nonUG\r
A0A5N7TRU1,Class 1 UG/Abi,3140,bacterial,nonUG\r
A0A1M6ZT90,Class 1 UG/Abi,3140,bacterial,nonUG\r
A0A4P7UPG3,Class 1 UG/Abi,3141,bacterial,nonUG\r
A0A7V7Z6T6,Class 1 UG/Abi,3141,bacterial,nonUG\r
A0A1H8US85,Class 1 UG/Abi,3142,bacterial,nonUG\r
A0A7R6W8V5,Class 1 UG/Abi,3142,bacterial,nonUG\r
A1JL41,Class 1 UG/Abi,3143,bacterial,nonUG\r
A0A1U9RBV3,Class 1 UG/Abi,3143,bacterial,nonUG\r
A0A2S9MI14,Class 1 UG/Abi,3144,bacterial,nonUG\r
A0A840LCL9,Class 1 UG/Abi,3144,bacterial,nonUG\r
A0A396TXB9,Class 1 UG/Abi,3145,bacterial,nonUG\r
A0A4Y9LDH2,Class 1 UG/Abi,3145,bacterial,nonUG\r
A0A2T5XK52,Class 1 UG/Abi,3146,bacterial,nonUG\r
A0A2L1S4I8,Class 1 UG/Abi,3146,bacterial,nonUG\r
A0A291PK40,Class 1 UG/Abi,3147,bacterial,nonUG\r
A0A1I7EDA5,Class 1 UG/Abi,3147,bacterial,nonUG\r
A0A1X4NCH6,Class 1 UG/Abi,3148,bacterial,nonUG\r
A0A0F4RGE4,Class 1 UG/Abi,3148,bacterial,nonUG\r
A0A7G2JF82,Class 1 UG/Abi,3149,bacterial,nonUG\r
A0A0J8GYI4,Class 1 UG/Abi,3149,bacterial,nonUG\r
A0A3D8M452,Class 1 UG/Abi,3150,bacterial,nonUG\r
A0A2E8G1A0,Class 1 UG/Abi,3150,bacterial,nonUG\r
G2E3Z6,Class 1 UG/Abi,3151,bacterial,nonUG\r
A0A2E3U3D1,Class 1 UG/Abi,3151,bacterial,nonUG\r
A0A2N9XBZ0,Class 1 UG/Abi,3152,bacterial,nonUG\r
F0EQ63,Class 1 UG/Abi,3152,bacterial,nonUG\r
A0A0M0I2F2,Class 1 UG/Abi,3153,bacterial,nonUG\r
A0A5C4RKS8,Class 1 UG/Abi,3153,bacterial,nonUG\r
A0A3S7K4Y7,Class 1 UG/Abi,3154,bacterial,nonUG\r
A0A2E2DA86,Class 1 UG/Abi,3154,bacterial,nonUG\r
A0A7W7E5Z7,Class 1 UG/Abi,3155,bacterial,nonUG\r
A0A1B8PJV5,Class 1 UG/Abi,3155,bacterial,nonUG\r
A0A7I0J0N2,Class 1 UG/Abi,3156,bacterial,nonUG\r
A0A2P2DQT8,Class 1 UG/Abi,3156,bacterial,nonUG\r
A0A2D8HGL8,Class 1 UG/Abi,3157,bacterial,nonUG\r
A0A0J5Q6G9,Class 1 UG/Abi,3157,bacterial,nonUG\r
A0A4V3DKW9,Class 1 UG/Abi,3158,bacterial,nonUG\r
A0A1F0PII8,Class 1 UG/Abi,3158,bacterial,nonUG\r
A0A5C7ASS6,Class 1 UG/Abi,3159,bacterial,nonUG\r
A0A173HMR4,Class 1 UG/Abi,3159,bacterial,nonUG\r
A0A1X9YZX5,Class 1 UG/Abi,3160,bacterial,nonUG\r
A0A2T0MCR1,Class 1 UG/Abi,3160,bacterial,nonUG\r
A0A2T5RLS7,Class 1 UG/Abi,3161,bacterial,nonUG\r
A0A7K0AT70,Class 1 UG/Abi,3161,bacterial,nonUG\r
A0A415DEV9,Class 1 UG/Abi,3162,bacterial,nonUG\r
A0A4Y8BNT4,Class 1 UG/Abi,3162,bacterial,nonUG\r
A0A399NVQ8,Class 1 UG/Abi,3163,bacterial,nonUG\r
A0A147DSH0,Class 1 UG/Abi,3163,bacterial,nonUG\r
A0A846SPU9,Class 1 UG/Abi,3164,bacterial,nonUG\r
A0A410YHG8,Class 1 UG/Abi,3164,bacterial,nonUG\r
A0A371P9H9,Class 1 UG/Abi,3165,bacterial,nonUG\r
A0A399NHQ8,Class 1 UG/Abi,3165,bacterial,nonUG\r
A0A3L7AB27,Class 1 UG/Abi,3166,bacterial,nonUG\r
A0A4Q8AB32,Class 1 UG/Abi,3166,bacterial,nonUG\r
A0A168L8S7,Class 1 UG/Abi,3167,bacterial,nonUG\r
A0A845FBY5,Class 1 UG/Abi,3167,bacterial,nonUG\r
S1P1T2,Class 1 UG/Abi,3168,bacterial,nonUG\r
A0A2S9HCF9,Class 1 UG/Abi,3168,bacterial,nonUG\r
A0A1S7BGL9,Class 1 UG/Abi,3169,bacterial,nonUG\r
A0A4R4J8Y4,Class 1 UG/Abi,3169,bacterial,nonUG\r
A0A0F2CV09,Class 1 UG/Abi,3170,bacterial,nonUG\r
A0A8B4HVB3,Class 1 UG/Abi,3170,bacterial,nonUG\r
A0A0J5PB59,Class 1 UG/Abi,3171,bacterial,nonUG\r
C0XH01,Class 1 UG/Abi,3171,bacterial,nonUG\r
A0A0R2CWZ6,Class 1 UG/Abi,3172,bacterial,nonUG\r
A0A176TMN6,Class 1 UG/Abi,3172,bacterial,nonUG\r
A0A417AW40,Class 1 UG/Abi,3173,bacterial,nonUG\r
A0A3D4QXF9,Class 1 UG/Abi,3173,bacterial,nonUG\r
A0A7C9L334,Class 1 UG/Abi,3174,bacterial,nonUG\r
A0A417IKX4,Class 1 UG/Abi,3174,bacterial,nonUG\r
A0A1V5GYS0,Class 1 UG/Abi,3175,bacterial,nonUG\r
A0A1B3SLZ1,Class 1 UG/Abi,3175,bacterial,nonUG\r
A0A7U0TNJ0,Class 1 UG/Abi,3176,bacterial,nonUG\r
A0A2N6PNX0,Class 1 UG/Abi,3176,bacterial,nonUG\r
A0A1E5TS16,Class 1 UG/Abi,3177,bacterial,nonUG\r
A0A530YJM8,Class 1 UG/Abi,3177,bacterial,nonUG\r
A0A081K7M3,Class 1 UG/Abi,3178,bacterial,nonUG\r
A0A1F2T497,Class 1 UG/Abi,3178,bacterial,nonUG\r
A0A5C6BEJ6,Class 1 UG/Abi,3179,bacterial,nonUG\r
A0A0N0UGZ4,Class 1 UG/Abi,3179,bacterial,nonUG\r
A0A5F2DT88,Class 1 UG/Abi,3180,bacterial,nonUG\r
A0A168SDV4,Class 1 UG/Abi,3180,bacterial,nonUG\r
A0A6M0GD03,Class 1 UG/Abi,3181,bacterial,nonUG\r
K9W8H9,Class 1 UG/Abi,3181,bacterial,nonUG\r
A0A0E3ZDS7,Class 1 UG/Abi,3182,bacterial,nonUG\r
A0A2P7TGD5,Class 1 UG/Abi,3182,bacterial,nonUG\r
A0A7G6YQT9,Class 1 UG/Abi,3183,bacterial,nonUG\r
A0A7K1TLH2,Class 1 UG/Abi,3183,bacterial,nonUG\r
A0A6N8FHZ1,Class 1 UG/Abi,3184,bacterial,nonUG\r
A0A4S8RFW8,Class 1 UG/Abi,3184,bacterial,nonUG\r
A0A288GUH6,Class 1 UG/Abi,3185,bacterial,nonUG\r
K9UBG7,Class 1 UG/Abi,3185,bacterial,nonUG\r
A0A839GT32,Class 1 UG/Abi,3186,bacterial,nonUG\r
A0A2W1MV14,Class 1 UG/Abi,3186,bacterial,nonUG\r
A0A806JA88,Class 1 UG/Abi,3187,bacterial,nonUG\r
A0A1X1IXB2,Class 1 UG/Abi,3187,bacterial,nonUG\r
A0A0M2NNH2,Class 1 UG/Abi,3188,bacterial,nonUG\r
A0A1H0FSR9,Class 1 UG/Abi,3188,bacterial,nonUG\r
A0A654MHX1,Class 1 UG/Abi,3189,bacterial,nonUG\r
A0A0R1HF11,Class 1 UG/Abi,3189,bacterial,nonUG\r
A0A256MHN4,Class 1 UG/Abi,3190,bacterial,nonUG\r
A0A1Y3U5M2,Class 1 UG/Abi,3190,bacterial,nonUG\r
A0A6A8DA43,Class 1 UG/Abi,3191,bacterial,nonUG\r
A0A0R1FKV3,Class 1 UG/Abi,3191,bacterial,nonUG\r
A0A2A5S074,Class 1 UG/Abi,3192,bacterial,nonUG\r
A0A7T7ALE6,Class 1 UG/Abi,3192,bacterial,nonUG\r
A0A494YY77,Class 1 UG/Abi,3193,bacterial,nonUG\r
A0A440JMW4,Class 1 UG/Abi,3193,bacterial,nonUG\r
A0A5N3RZQ1,Class 1 UG/Abi,3194,bacterial,nonUG\r
A0A1D9CVI7,Class 1 UG/Abi,3194,bacterial,nonUG\r
A0A1N6Q732,Class 1 UG/Abi,3195,bacterial,nonUG\r
A0A7Z3C5U5,Class 1 UG/Abi,3195,bacterial,nonUG\r
A0A3N5KE59,Class 1 UG/Abi,3196,bacterial,nonUG\r
A0A841W846,Class 1 UG/Abi,3196,bacterial,nonUG\r
A0A3D3UXE5,Class 1 UG/Abi,3197,bacterial,nonUG\r
A0A660UGS4,Class 1 UG/Abi,3197,bacterial,nonUG\r
A0A1F3STP7,Class 1 UG/Abi,3198,bacterial,nonUG\r
A0A518EUS4,Class 1 UG/Abi,3198,bacterial,nonUG\r
A0A2S2DLT2,Class 1 UG/Abi,3199,bacterial,nonUG\r
R9GX02,Class 1 UG/Abi,3199,bacterial,nonUG\r
A0A1C9BP67,Class 1 UG/Abi,3200,bacterial,nonUG\r
A0A1D2WVV7,Class 1 UG/Abi,3200,bacterial,nonUG\r
A0A327XX43,Class 1 UG/Abi,3201,bacterial,nonUG\r
A0A841WIE4,Class 1 UG/Abi,3201,bacterial,nonUG\r
A0A0F9RM57,Class 1 UG/Abi,3202,bacterial,nonUG\r
A0A3G8R9R3,Class 1 UG/Abi,3202,bacterial,nonUG\r
X0RUF5,Class 1 UG/Abi,3203,bacterial,nonUG\r
A0A6I6L5G4,Class 1 UG/Abi,3203,bacterial,nonUG\r
A0A5Q0LYZ0,Class 1 UG/Abi,3204,bacterial,nonUG\r
D3RS57,Class 1 UG/Abi,3204,bacterial,nonUG\r
A0A441H7X7,Class 1 UG/Abi,3205,bacterial,nonUG\r
A0A2A3YUY9,Class 1 UG/Abi,3205,bacterial,nonUG\r
A0A367WYI4,Class 1 UG/Abi,3206,bacterial,nonUG\r
A0A6J5DND7,Class 1 UG/Abi,3206,bacterial,nonUG\r
A0A4Q3C029,Class 1 UG/Abi,3207,bacterial,nonUG\r
A0A5C8TFB6,Class 1 UG/Abi,3207,bacterial,nonUG\r
A0A4V1ACB4,Class 1 UG/Abi,3208,bacterial,nonUG\r
A0A2W5NST9,Class 1 UG/Abi,3208,bacterial,nonUG\r
A0A7W7ZMP8,Class 1 UG/Abi,3209,bacterial,nonUG\r
A0A523CCB8,Class 1 UG/Abi,3209,bacterial,nonUG\r
A0A3M8G4D4,Class 1 UG/Abi,3210,bacterial,nonUG\r
U2LUN1,Class 1 UG/Abi,3210,bacterial,nonUG\r
J0WPA8,Class 1 UG/Abi,3211,bacterial,nonUG\r
A0A6G2IMY4,Class 1 UG/Abi,3211,bacterial,nonUG\r
A0A7T2TY93,Class 1 UG/Abi,3212,bacterial,nonUG\r
A0A829P4B4,Class 1 UG/Abi,3212,bacterial,nonUG\r
A0A5P9BM38,Class 1 UG/Abi,3213,bacterial,nonUG\r
A0A1H8XNH8,Class 1 UG/Abi,3213,bacterial,nonUG\r
A0A4R1RSS6,Class 1 UG/Abi,3214,bacterial,nonUG\r
A0A6B0ZF76,Class 1 UG/Abi,3214,bacterial,nonUG\r
A0A537YN90,Class 1 UG/Abi,3215,bacterial,nonUG\r
A0A2V5U8A7,Class 1 UG/Abi,3215,bacterial,nonUG\r
A0A2V9SRW4,Class 1 UG/Abi,3216,bacterial,nonUG\r
A0A560FKK3,Class 1 UG/Abi,3216,bacterial,nonUG\r
A0A329LRE6,Class 1 UG/Abi,3217,bacterial,nonUG\r
A0A316I4J0,Class 1 UG/Abi,3217,bacterial,nonUG\r
A0A365Z7F3,Class 1 UG/Abi,3218,bacterial,nonUG\r
A0A260TD73,Class 1 UG/Abi,3218,bacterial,nonUG\r
A0A2W1T784,Class 1 UG/Abi,3219,bacterial,nonUG\r
A0A512D2C0,Class 1 UG/Abi,3219,bacterial,nonUG\r
A0A2S9YB99,Class 1 UG/Abi,3220,bacterial,nonUG\r
A0A5B9MCV2,Class 1 UG/Abi,3220,bacterial,nonUG\r
A0A5P6N7H0,Class 1 UG/Abi,3221,bacterial,nonUG\r
A0A0V0Q692,Class 1 UG/Abi,3221,bacterial,nonUG\r
A0A1H2FY88,Class 1 UG/Abi,3222,bacterial,nonUG\r
A0A2E2DPG3,Class 1 UG/Abi,3222,bacterial,nonUG\r
A0A840IH01,Class 1 UG/Abi,3223,bacterial,nonUG\r
A0A316IBX8,Class 1 UG/Abi,3223,bacterial,nonUG\r
A0A2L0N8W7,Class 1 UG/Abi,3224,bacterial,nonUG\r
A0A346C6J9,Class 1 UG/Abi,3224,bacterial,nonUG\r
A0A1G9MVS9,Class 1 UG/Abi,3225,bacterial,nonUG\r
A0A6B3BGG7,Class 1 UG/Abi,3225,bacterial,nonUG\r
A0A0S4QIR9,Class 1 UG/Abi,3226,bacterial,nonUG\r
A0A7Y5G9B9,Class 1 UG/Abi,3226,bacterial,nonUG\r
A0A3N6LN63,Class 1 UG/Abi,3227,bacterial,nonUG\r
A0A1H6WFR9,Class 1 UG/Abi,3227,bacterial,nonUG\r
A0A843AEJ1,Class 1 UG/Abi,3228,bacterial,nonUG\r
A0A3A8K915,Class 1 UG/Abi,3228,bacterial,nonUG\r
A0A0F9CHW6,Class 1 UG/Abi,3229,bacterial,nonUG\r
A0A0F9F9X4,Class 1 UG/Abi,3229,bacterial,nonUG\r
A5EGJ8,Class 1 UG/Abi,3230,bacterial,nonUG\r
A0A519QZM1,Class 1 UG/Abi,3230,bacterial,nonUG\r
A0A2W6DGR1,Class 1 UG/Abi,3231,bacterial,nonUG\r
A0A535MXW6,Class 1 UG/Abi,3231,bacterial,nonUG\r
A0A495U971,Class 1 UG/Abi,3232,bacterial,nonUG\r
A0A809GKK8,Class 1 UG/Abi,3232,bacterial,nonUG\r
A0A857KSX8,Class 1 UG/Abi,3233,bacterial,nonUG\r
A0A2W1AVP1,Class 1 UG/Abi,3233,bacterial,nonUG\r
A0A7V8Y6Y0,Class 1 UG/Abi,3234,bacterial,nonUG\r
A0A552RA10,Class 1 UG/Abi,3234,bacterial,nonUG\r
A0A4Q5NKH0,Class 1 UG/Abi,3235,bacterial,nonUG\r
A0A1Y6FDR2,Class 1 UG/Abi,3235,bacterial,nonUG\r
A0A7C7QJ13,Class 1 UG/Abi,3236,bacterial,nonUG\r
A0A1F9BY01,Class 1 UG/Abi,3236,bacterial,nonUG\r
A0A3D3DFZ8,Class 1 UG/Abi,3237,bacterial,nonUG\r
A0A2M7RZM0,Class 1 UG/Abi,3237,bacterial,nonUG\r
A0A5E4KAC0,Class 1 UG/Abi,3238,bacterial,nonUG\r
A0A357C3T8,Class 1 UG/Abi,3238,bacterial,nonUG\r
A0A3M1FV46,Class 1 UG/Abi,3239,bacterial,nonUG\r
A0A850MQN3,Class 1 UG/Abi,3239,bacterial,nonUG\r
A0A1H1T9Z9,Class 1 UG/Abi,3240,bacterial,nonUG\r
A0A6I5X786,Class 1 UG/Abi,3240,bacterial,nonUG\r
A0A4Q7W863,Class 1 UG/Abi,3241,bacterial,nonUG\r
A0A5N6BCR6,Class 1 UG/Abi,3241,bacterial,nonUG\r
A0A7W1DYK4,Class 1 UG/Abi,3242,bacterial,nonUG\r
A0A7D6VCT4,Class 1 UG/Abi,3242,bacterial,nonUG\r
A0A5J6V664,Class 1 UG/Abi,3243,bacterial,nonUG\r
A0A1C6RL06,Class 1 UG/Abi,3243,bacterial,nonUG\r
A0A7K0JNQ8,Class 1 UG/Abi,3244,bacterial,nonUG\r
A0A7K1W2R8,Class 1 UG/Abi,3244,bacterial,nonUG\r
A0A428Y6G9,Class 1 UG/Abi,3245,bacterial,nonUG\r
A0A4Y8UPP2,Class 1 UG/Abi,3245,bacterial,nonUG\r
A0A349CV26,Class 1 UG/Abi,3246,bacterial,nonUG\r
A0A1G6TB65,Class 1 UG/Abi,3246,bacterial,nonUG\r
A0A260IFE2,Class 1 UG/Abi,3247,bacterial,nonUG\r
X8A538,Class 1 UG/Abi,3247,bacterial,nonUG\r
A0A852WH97,Class 1 UG/Abi,3248,bacterial,nonUG\r
A0A6G7Y6F5,Class 1 UG/Abi,3248,bacterial,nonUG\r
A0A1H0HBA8,Class 1 UG/Abi,3249,bacterial,nonUG\r
A0A1V0UBT3,Class 1 UG/Abi,3249,bacterial,nonUG\r
A0A5J5IZP6,Class 1 UG/Abi,3250,bacterial,nonUG\r
A0A1X1AVD9,Class 1 UG/Abi,3250,bacterial,nonUG\r
A0A317QP49,Class 1 UG/Abi,3251,bacterial,nonUG\r
A0A1G7MID4,Class 1 UG/Abi,3251,bacterial,nonUG\r
A0A2H1JTN7,Class 1 UG/Abi,3252,bacterial,nonUG\r
A0A6N8GN00,Class 1 UG/Abi,3252,bacterial,nonUG\r
A0A535HUW1,Class 1 UG/Abi,3253,bacterial,nonUG\r
A0A349B8J5,Class 1 UG/Abi,3253,bacterial,nonUG\r
A0A542R0Q7,Class 1 UG/Abi,3254,bacterial,nonUG\r
A0A7Y9U415,Class 1 UG/Abi,3254,bacterial,nonUG\r
A0A0M3D0Z0,Class 1 UG/Abi,3255,bacterial,nonUG\r
A0A4V2M206,Class 1 UG/Abi,3255,bacterial,nonUG\r
A0A660KYV0,Class 1 UG/Abi,3256,bacterial,nonUG\r
A0A418VHV8,Class 1 UG/Abi,3256,bacterial,nonUG\r
A0A1H3NWE6,Class 1 UG/Abi,3257,bacterial,nonUG\r
A0A3N5YWP2,Class 1 UG/Abi,3257,bacterial,nonUG\r
A0A560BQT3,Class 1 UG/Abi,3258,bacterial,nonUG\r
A0A841P798,Class 1 UG/Abi,3258,bacterial,nonUG\r
A0A2A3VG99,Class 1 UG/Abi,3259,bacterial,nonUG\r
A0A3B8RMT4,Class 1 UG/Abi,3259,bacterial,nonUG\r
A0A8A3NBD7,Class 1 UG/Abi,3260,bacterial,nonUG\r
A0A0D6JKU5,Class 1 UG/Abi,3260,bacterial,nonUG\r
A0A090F3A8,Class 1 UG/Abi,3261,bacterial,nonUG\r
A0A238KI92,Class 1 UG/Abi,3261,bacterial,nonUG\r
A0A3S9B449,Class 1 UG/Abi,3262,bacterial,nonUG\r
A0A1U7P553,Class 1 UG/Abi,3262,bacterial,nonUG\r
A0A6L7Q6F7,Class 1 UG/Abi,3263,bacterial,nonUG\r
A0A7W8IEZ4,Class 1 UG/Abi,3263,bacterial,nonUG\r
A0A7V9ZI49,Class 1 UG/Abi,3264,bacterial,nonUG\r
A0A7C0U4P2,Class 1 UG/Abi,3264,bacterial,nonUG\r
A0A1F5GAZ1,Class 1 UG/Abi,3265,bacterial,nonUG\r
A0A522BBL7,Class 1 UG/Abi,3265,bacterial,nonUG\r
A0A1V3P882,Class 1 UG/Abi,3266,bacterial,nonUG\r
A0A7C4Y402,Class 1 UG/Abi,3266,bacterial,nonUG\r
A0A519S4F2,Class 1 UG/Abi,3267,bacterial,nonUG\r
A0A0G0JXE6,Class 1 UG/Abi,3267,bacterial,nonUG\r
A0A1D2QZP3,Class 1 UG/Abi,3268,bacterial,nonUG\r
A0A0G1RNY1,Class 1 UG/Abi,3268,bacterial,nonUG\r
A0A5C4S9G8,Class 1 UG/Abi,3269,bacterial,nonUG\r
A0A4U0FI04,Class 1 UG/Abi,3269,bacterial,nonUG\r
A0A0M7ATX7,Class 1 UG/Abi,3270,bacterial,nonUG\r
A0A2N6AS71,Class 1 UG/Abi,3270,bacterial,nonUG\r
A0A2N2N659,Class 1 UG/Abi,3271,bacterial,nonUG\r
A0A1K1ZHI2,Class 1 UG/Abi,3271,bacterial,nonUG\r
A0A1I3S466,Class 1 UG/Abi,3272,bacterial,nonUG\r
A0A2N1TFP2,Class 1 UG/Abi,3272,bacterial,nonUG\r
A0A2M9BXI0,Class 1 UG/Abi,3273,bacterial,nonUG\r
A0A0J7L895,Class 1 UG/Abi,3273,bacterial,nonUG\r
A0A0C1FWG3,Class 1 UG/Abi,3274,bacterial,nonUG\r
A0A108T3Q7,Class 1 UG/Abi,3274,bacterial,nonUG\r
W9V429,Class 1 UG/Abi,3275,bacterial,nonUG\r
A0A535AMF1,Class 1 UG/Abi,3275,bacterial,nonUG\r
A0A7X8KSX5,Class 1 UG/Abi,3276,bacterial,nonUG\r
A0A7J4VCJ6,Class 1 UG/Abi,3276,bacterial,nonUG\r
A0A351ST06,Class 1 UG/Abi,3277,bacterial,nonUG\r
A0A382GES2,Class 1 UG/Abi,3277,bacterial,nonUG\r
A0A0B8Q290,Class 1 UG/Abi,3278,bacterial,nonUG\r
A0A6P0TWQ2,Class 1 UG/Abi,3278,bacterial,nonUG\r
A0A1U7H720,Class 1 UG/Abi,3279,bacterial,nonUG\r
A0A1Z4UI31,Class 1 UG/Abi,3279,bacterial,nonUG\r
A0A1J4RXI6,Class 1 UG/Abi,3280,bacterial,nonUG\r
A0A0G0A4X7,Class 1 UG/Abi,3280,bacterial,nonUG\r
A0A1F8GM39,Class 1 UG/Abi,3281,bacterial,nonUG\r
A0A0G0QWW9,Class 1 UG/Abi,3281,bacterial,nonUG\r
A0A2N2NI72,Class 1 UG/Abi,3282,bacterial,nonUG\r
A0A523SAV6,Class 1 UG/Abi,3282,bacterial,nonUG\r
A0A1Q3QKD9,Class 1 UG/Abi,3283,bacterial,nonUG\r
A0A316AJX4,Class 1 UG/Abi,3283,bacterial,nonUG\r
A0A7G7G6H4,Class 1 UG/Abi,3284,bacterial,nonUG\r
A0A5D0RS84,Class 1 UG/Abi,3284,bacterial,nonUG\r
A0A1Y4LLA2,Class 1 UG/Abi,3285,bacterial,nonUG\r
A0A1G7P0G6,Class 1 UG/Abi,3285,bacterial,nonUG\r
A0A6S6SXV5,Class 1 UG/Abi,3286,bacterial,nonUG\r
A0A0M2NLJ6,Class 1 UG/Abi,3286,bacterial,nonUG\r
A0A0M2UZ45,Class 1 UG/Abi,3287,bacterial,nonUG\r
A0A235HX61,Class 1 UG/Abi,3287,bacterial,nonUG\r
A0A1N6D5X6,Class 1 UG/Abi,3288,bacterial,nonUG\r
A0A7U5TSQ1,Class 1 UG/Abi,3288,bacterial,nonUG\r
A0A7Y8Z5U5,Class 1 UG/Abi,3289,bacterial,nonUG\r
A0A7Z8GYG8,Class 1 UG/Abi,3289,bacterial,nonUG\r
A0A178KHX1,Class 1 UG/Abi,3290,bacterial,nonUG\r
A0A2T3FH13,Class 1 UG/Abi,3290,bacterial,nonUG\r
C9RQR1,Class 1 UG/Abi,3291,bacterial,nonUG\r
A0A7X5EB37,Class 1 UG/Abi,3291,bacterial,nonUG\r
A0A844GM75,Class 1 UG/Abi,3292,bacterial,nonUG\r
A0A1M6KP83,Class 1 UG/Abi,3292,bacterial,nonUG\r
A0A7G9S1M3,Class 1 UG/Abi,3293,bacterial,nonUG\r
A0A4V1MGJ4,Class 1 UG/Abi,3293,bacterial,nonUG\r
A0A1B3XVZ0,Class 1 UG/Abi,3294,bacterial,nonUG\r
A0A3M4EY95,Class 1 UG/Abi,3294,bacterial,nonUG\r
A0A2K8XFT7,UG36,3295,bacterial,UG\r
A0A842VNV8,UG36,3295,bacterial,UG\r
A0A519U5N7,UG36,3296,bacterial,UG\r
A0A8A6AR70,UG36,3296,bacterial,UG\r
B4CV37,UG36,3297,bacterial,UG\r
A0A7W7YHC1,UG36,3297,bacterial,UG\r
B3E6D5,UG36,3298,bacterial,UG\r
A0A2V5Z0Y6,UG36,3298,bacterial,UG\r
A0A2W4WEA3,UG36,3299,bacterial,UG\r
A0A4Q6CUI3,UG36,3299,bacterial,UG\r
L0DIS4,UG36,3300,bacterial,UG\r
A0A517WWJ9,UG36,3300,bacterial,UG\r
A1VUE3,UG36,3301,bacterial,UG\r
A0A6M8MUM0,UG36,3301,bacterial,UG\r
A0A2G2CLL6,UG36,3302,bacterial,UG\r
A0A1E5BI47,UG36,3302,bacterial,UG\r
A0A4Q1ANA5,UG36,3303,bacterial,UG\r
A0A518HNZ2,Class 3 UG/Abi,3303,bacterial,nonUG\r
A0A363RQY8,Class 3 UG/Abi,3304,bacterial,nonUG\r
A0A6L9H7H4,Class 3 UG/Abi,3304,bacterial,nonUG\r
A0A4R7D1V6,Class 3 UG/Abi,3305,bacterial,nonUG\r
A0A5C0VH27,Class 3 UG/Abi,3305,bacterial,nonUG\r
A0A0N1DYV1,Class 3 UG/Abi,3306,bacterial,nonUG\r
A0A6P1DHH2,Class 3 UG/Abi,3306,bacterial,nonUG\r
A0A371QTF9,Class 3 UG/Abi,3307,bacterial,nonUG\r
A0A098LGB9,Class 3 UG/Abi,3307,bacterial,nonUG\r
A0A3S0PUX9,Class 3 UG/Abi,3308,bacterial,nonUG\r
A0A1M5MLR9,Class 3 UG/Abi,3308,bacterial,nonUG\r
A0A226GN34,Class 3 UG/Abi,3309,bacterial,nonUG\r
A0A5Q5GFA1,Class 3 UG/Abi,3309,bacterial,nonUG\r
A0A412WU47,Class 3 UG/Abi,3310,bacterial,nonUG\r
A0A162QWX2,Class 3 UG/Abi,3310,bacterial,nonUG\r
A0A7H8PIT7,Class 3 UG/Abi,3311,bacterial,nonUG\r
A0A4R6LYY9,Class 3 UG/Abi,3311,bacterial,nonUG\r
A0A7V2W481,Class 3 UG/Abi,3312,bacterial,nonUG\r
A0A415PYU3,Class 3 UG/Abi,3312,bacterial,nonUG\r
A0A1I1GCI5,Class 3 UG/Abi,3313,bacterial,nonUG\r
S7JS98,Class 3 UG/Abi,3313,bacterial,nonUG\r
A0A837AGC7,Class 3 UG/Abi,3314,bacterial,nonUG\r
A0A1W6LM70,Class 3 UG/Abi,3314,bacterial,nonUG\r
A0A4Q6CBD6,Class 3 UG/Abi,3315,bacterial,nonUG\r
A0A7C6JPX1,Class 3 UG/Abi,3315,bacterial,nonUG\r
K0NG86,Class 3 UG/Abi,3316,bacterial,nonUG\r
A0A353W4H0,Class 3 UG/Abi,3316,bacterial,nonUG\r
A0A2H0QMN1,Class 3 UG/Abi,3317,bacterial,nonUG\r
A0A7X7DIH1,Class 3 UG/Abi,3317,bacterial,nonUG\r
A0A1M7MTL4,Class 3 UG/Abi,3318,bacterial,nonUG\r
A0A7S7J089,Class 3 UG/Abi,3318,bacterial,nonUG\r
A0A413DL41,Class 3 UG/Abi,3319,bacterial,nonUG\r
A0A6M5I7D8,Class 3 UG/Abi,3319,bacterial,nonUG\r
A0A1H6Z175,Class 3 UG/Abi,3320,bacterial,nonUG\r
A0A101C776,Class 3 UG/Abi,3320,bacterial,nonUG\r
R5HFP7,Class 3 UG/Abi,3321,bacterial,nonUG\r
A0A1I0YKS2,Class 3 UG/Abi,3321,bacterial,nonUG\r
A0A1Y4MZ67,Class 3 UG/Abi,3322,bacterial,nonUG\r
A0A848BTZ2,Class 3 UG/Abi,3322,bacterial,nonUG\r
A0A7U9XKW1,Class 3 UG/Abi,3323,bacterial,nonUG\r
A0A8B0KKQ9,Class 3 UG/Abi,3323,bacterial,nonUG\r
A0A1H9YA12,Class 3 UG/Abi,3324,bacterial,nonUG\r
C4ZGY5,Class 3 UG/Abi,3324,bacterial,nonUG\r
A0A2U1S984,Class 3 UG/Abi,3325,bacterial,nonUG\r
A0A7I0HWD1,Class 3 UG/Abi,3325,bacterial,nonUG\r
L1QFI1,Class 3 UG/Abi,3326,bacterial,nonUG\r
A0A1S8P0V0,Class 3 UG/Abi,3326,bacterial,nonUG\r
B1BP29,Class 3 UG/Abi,3327,bacterial,nonUG\r
A0A371IZB7,Class 3 UG/Abi,3327,bacterial,nonUG\r
A0A174R230,Class 3 UG/Abi,3328,bacterial,nonUG\r
A0A1J1CTJ0,Class 3 UG/Abi,3328,bacterial,nonUG\r
A0A1W7A972,Class 3 UG/Abi,3329,bacterial,nonUG\r
A0A2L0D255,Class 3 UG/Abi,3329,bacterial,nonUG\r
A0A2D3P7Y2,Class 3 UG/Abi,3330,bacterial,nonUG\r
A0A6I1PC72,Class 3 UG/Abi,3330,bacterial,nonUG\r
A0A838XN68,Class 3 UG/Abi,3331,bacterial,nonUG\r
A0A1G5ZZW0,Class 3 UG/Abi,3331,bacterial,nonUG\r
A0A5C9A4V7,Class 3 UG/Abi,3332,bacterial,nonUG\r
A0A6L2RCT8,Class 3 UG/Abi,3332,bacterial,nonUG\r
A0A6I1KAX9,Class 3 UG/Abi,3333,bacterial,nonUG\r
A0A5B8XRA0,Class 3 UG/Abi,3333,bacterial,nonUG\r
A0A167YQ80,Class 3 UG/Abi,3334,bacterial,nonUG\r
A0A1M6F279,Class 3 UG/Abi,3334,bacterial,nonUG\r
A0A1H9N2X3,Class 3 UG/Abi,3335,bacterial,nonUG\r
A0A7G5XFP3,Class 3 UG/Abi,3335,bacterial,nonUG\r
A0A562SQI5,Class 3 UG/Abi,3336,bacterial,nonUG\r
A0A0A2X3G7,Class 3 UG/Abi,3336,bacterial,nonUG\r
A0A4Q3YEL7,Class 3 UG/Abi,3337,bacterial,nonUG\r
A0A3M1PG49,Class 3 UG/Abi,3337,bacterial,nonUG\r
Q5X0E8,Class 3 UG/Abi,3338,bacterial,nonUG\r
A0A2E9VT88,Class 3 UG/Abi,3338,bacterial,nonUG\r
A0A150HXV9,Class 3 UG/Abi,3339,bacterial,nonUG\r
A0A081NJ02,Class 3 UG/Abi,3339,bacterial,nonUG\r
A0A3N7JNF4,Class 3 UG/Abi,3340,bacterial,nonUG\r
A0A1G3UD79,Class 3 UG/Abi,3340,bacterial,nonUG\r
A0A0F9LBG8,Class 3 UG/Abi,3341,bacterial,nonUG\r
A0A3M3ZIA2,Class 3 UG/Abi,3341,bacterial,nonUG\r
A0A4U0ZU84,Class 3 UG/Abi,3342,bacterial,nonUG\r
A0A3G4VHR9,Class 3 UG/Abi,3342,bacterial,nonUG\r
A0A518K7H4,Class 3 UG/Abi,3343,bacterial,nonUG\r
A0A8B5A3L5,Class 3 UG/Abi,3343,bacterial,nonUG\r
X5PMY7,Class 3 UG/Abi,3344,bacterial,nonUG\r
A0A091FYG7,Class 3 UG/Abi,3344,bacterial,nonUG\r
Q7UH58,Class 3 UG/Abi,3345,bacterial,nonUG\r
A0A5C5XPQ7,Class 3 UG/Abi,3345,bacterial,nonUG\r
A0A3N9VYX2,Class 3 UG/Abi,3346,bacterial,nonUG\r
A0A1Y5K0P7,Class 3 UG/Abi,3346,bacterial,nonUG\r
N8TY35,Class 3 UG/Abi,3347,bacterial,nonUG\r
A0A1G7TSI4,Class 3 UG/Abi,3347,bacterial,nonUG\r
A0A255TEV9,Class 3 UG/Abi,3348,bacterial,nonUG\r
W4V472,Class 3 UG/Abi,3348,bacterial,nonUG\r
A0A363D297,Class 3 UG/Abi,3349,bacterial,nonUG\r
A0A562MW27,Class 3 UG/Abi,3349,bacterial,nonUG\r
A0A225MB41,Class 3 UG/Abi,3350,bacterial,nonUG\r
A0A327VQG7,Class 3 UG/Abi,3350,bacterial,nonUG\r
A0A1M4VRW6,Class 3 UG/Abi,3351,bacterial,nonUG\r
A0A3A1QMU9,Class 3 UG/Abi,3351,bacterial,nonUG\r
A0A1U7N934,Class 3 UG/Abi,3352,bacterial,nonUG\r
U7QQT1,Class 3 UG/Abi,3352,bacterial,nonUG\r
A0A3M1UDK6,Class 3 UG/Abi,3353,bacterial,nonUG\r
A0A7V7XDM9,Class 3 UG/Abi,3353,bacterial,nonUG\r
A0A1B7WW67,Class 3 UG/Abi,3354,bacterial,nonUG\r
A0A6N7A7B0,Class 3 UG/Abi,3354,bacterial,nonUG\r
A0A3L7XHM3,Class 3 UG/Abi,3355,bacterial,nonUG\r
A0A7C2JGB9,Class 3 UG/Abi,3355,bacterial,nonUG\r
A0A1W7LR60,Class 3 UG/Abi,3356,bacterial,nonUG\r
N9XQL8,Class 3 UG/Abi,3356,bacterial,nonUG\r
A0A1C6JRZ0,Class 3 UG/Abi,3357,bacterial,nonUG\r
A0A1Y3PUE2,Class 3 UG/Abi,3357,bacterial,nonUG\r
A0A0B7MJW9,Class 3 UG/Abi,3358,bacterial,nonUG\r
A0A7V6Q3K8,Class 3 UG/Abi,3358,bacterial,nonUG\r
A0A7Z8L4M3,Class 3 UG/Abi,3359,bacterial,nonUG\r
A0A4S2FPY4,Class 3 UG/Abi,3359,bacterial,nonUG\r
A0A644XH96,Class 3 UG/Abi,3360,bacterial,nonUG\r
A0A0P0M0X4,Class 3 UG/Abi,3360,bacterial,nonUG\r
A0A5J4RGE3,Class 3 UG/Abi,3361,bacterial,nonUG\r
A0A7G5NWA0,Class 3 UG/Abi,3361,bacterial,nonUG\r
R5TWG5,Class 3 UG/Abi,3362,bacterial,nonUG\r
A0A417R0S2,Class 3 UG/Abi,3362,bacterial,nonUG\r
A0A1G6CM62,Class 3 UG/Abi,3363,bacterial,nonUG\r
R7BLG7,Class 3 UG/Abi,3363,bacterial,nonUG\r
A0A3S2TVJ1,Class 3 UG/Abi,3364,bacterial,nonUG\r
A0A1Y4QFZ8,Class 3 UG/Abi,3364,bacterial,nonUG`;function f8(n,r){let e;if(r===void 0)for(const A of n)A!=null&&(e<A||e===void 0&&A>=A)&&(e=A);else{let A=-1;for(let t of n)(t=r(t,++A,n))!=null&&(e<t||e===void 0&&t>=t)&&(e=t)}return e}function pR(n,r){let e=0;if(r===void 0)for(let A of n)(A=+A)&&(e+=A);else{let A=-1;for(let t of n)(t=+r(t,++A,n))&&(e+=t)}return e}var kR={value:()=>{}};function v8(){for(var n=0,r=arguments.length,e={},A;n<r;++n){if(!(A=arguments[n]+"")||A in e||/[\s.]/.test(A))throw new Error("illegal type: "+A);e[A]=[]}return new _o(e)}function _o(n){this._=n}function IR(n,r){return n.trim().split(/^|\s+/).map(function(e){var A="",t=e.indexOf(".");if(t>=0&&(A=e.slice(t+1),e=e.slice(0,t)),e&&!r.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:A}})}_o.prototype=v8.prototype={constructor:_o,on:function(n,r){var e=this._,A=IR(n+"",e),t,o=-1,a=A.length;if(arguments.length<2){for(;++o<a;)if((t=(n=A[o]).type)&&(t=NR(e[t],n.name)))return t;return}if(r!=null&&typeof r!="function")throw new Error("invalid callback: "+r);for(;++o<a;)if(t=(n=A[o]).type)e[t]=m3(e[t],n.name,r);else if(r==null)for(t in e)e[t]=m3(e[t],n.name,null);return this},copy:function(){var n={},r=this._;for(var e in r)n[e]=r[e].slice();return new _o(n)},call:function(n,r){if((t=arguments.length-2)>0)for(var e=new Array(t),A=0,t,o;A<t;++A)e[A]=arguments[A+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],A=0,t=o.length;A<t;++A)o[A].value.apply(r,e)},apply:function(n,r,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var A=this._[n],t=0,o=A.length;t<o;++t)A[t].value.apply(r,e)}};function NR(n,r){for(var e=0,A=n.length,t;e<A;++e)if((t=n[e]).name===r)return t.value}function m3(n,r,e){for(var A=0,t=n.length;A<t;++A)if(n[A].name===r){n[A]=kR,n=n.slice(0,A).concat(n.slice(A+1));break}return e!=null&&n.push({name:r,value:e}),n}var P2="http://www.w3.org/1999/xhtml";const B3={svg:"http://www.w3.org/2000/svg",xhtml:P2,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function X1(n){var r=n+="",e=r.indexOf(":");return e>=0&&(r=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),B3.hasOwnProperty(r)?{space:B3[r],local:n}:n}function ER(n){return function(){var r=this.ownerDocument,e=this.namespaceURI;return e===P2&&r.documentElement.namespaceURI===P2?r.createElement(n):r.createElementNS(e,n)}}function MR(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function y8(n){var r=X1(n);return(r.local?MR:ER)(r)}function PR(){}function Jl(n){return n==null?PR:function(){return this.querySelector(n)}}function mR(n){typeof n!="function"&&(n=Jl(n));for(var r=this._groups,e=r.length,A=new Array(e),t=0;t<e;++t)for(var o=r[t],a=o.length,l=A[t]=new Array(a),R,G,u=0;u<a;++u)(R=o[u])&&(G=n.call(R,R.__data__,u,o))&&("__data__"in R&&(G.__data__=R.__data__),l[u]=G);return new fr(A,this._parents)}function BR(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function DR(){return[]}function d8(n){return n==null?DR:function(){return this.querySelectorAll(n)}}function gR(n){return function(){return BR(n.apply(this,arguments))}}function JR(n){typeof n=="function"?n=gR(n):n=d8(n);for(var r=this._groups,e=r.length,A=[],t=[],o=0;o<e;++o)for(var a=r[o],l=a.length,R,G=0;G<l;++G)(R=a[G])&&(A.push(n.call(R,R.__data__,G,a)),t.push(R));return new fr(A,t)}function Y8(n){return function(){return this.matches(n)}}function h8(n){return function(r){return r.matches(n)}}var HR=Array.prototype.find;function KR(n){return function(){return HR.call(this.children,n)}}function VR(){return this.firstElementChild}function WR(n){return this.select(n==null?VR:KR(typeof n=="function"?n:h8(n)))}var FR=Array.prototype.filter;function XR(){return Array.from(this.children)}function QR(n){return function(){return FR.call(this.children,n)}}function xR(n){return this.selectAll(n==null?XR:QR(typeof n=="function"?n:h8(n)))}function ZR(n){typeof n!="function"&&(n=Y8(n));for(var r=this._groups,e=r.length,A=new Array(e),t=0;t<e;++t)for(var o=r[t],a=o.length,l=A[t]=[],R,G=0;G<a;++G)(R=o[G])&&n.call(R,R.__data__,G,o)&&l.push(R);return new fr(A,this._parents)}function C8(n){return new Array(n.length)}function wR(){return new fr(this._enter||this._groups.map(C8),this._parents)}function d1(n,r){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=r}d1.prototype={constructor:d1,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,r){return this._parent.insertBefore(n,r)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function _R(n){return function(){return n}}function jR(n,r,e,A,t,o){for(var a=0,l,R=r.length,G=o.length;a<G;++a)(l=r[a])?(l.__data__=o[a],A[a]=l):e[a]=new d1(n,o[a]);for(;a<R;++a)(l=r[a])&&(t[a]=l)}function $R(n,r,e,A,t,o,a){var l,R,G=new Map,u=r.length,b=o.length,f=new Array(u),h;for(l=0;l<u;++l)(R=r[l])&&(f[l]=h=a.call(R,R.__data__,l,r)+"",G.has(h)?t[l]=R:G.set(h,R));for(l=0;l<b;++l)h=a.call(n,o[l],l,o)+"",(R=G.get(h))?(A[l]=R,R.__data__=o[l],G.delete(h)):e[l]=new d1(n,o[l]);for(l=0;l<u;++l)(R=r[l])&&G.get(f[l])===R&&(t[l]=R)}function zR(n){return n.__data__}function OR(n,r){if(!arguments.length)return Array.from(this,zR);var e=r?$R:jR,A=this._parents,t=this._groups;typeof n!="function"&&(n=_R(n));for(var o=t.length,a=new Array(o),l=new Array(o),R=new Array(o),G=0;G<o;++G){var u=A[G],b=t[G],f=b.length,h=qR(n.call(u,u&&u.__data__,G,A)),k=h.length,E=l[G]=new Array(k),R0=a[G]=new Array(k),y=R[G]=new Array(f);e(u,b,E,R0,y,h,r);for(var v=0,d=0,B,_;v<k;++v)if(B=E[v]){for(v>=d&&(d=v+1);!(_=R0[d])&&++d<k;);B._next=_||null}}return a=new fr(a,A),a._enter=l,a._exit=R,a}function qR(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function nc(){return new fr(this._exit||this._groups.map(C8),this._parents)}function rc(n,r,e){var A=this.enter(),t=this,o=this.exit();return typeof n=="function"?(A=n(A),A&&(A=A.selection())):A=A.append(n+""),r!=null&&(t=r(t),t&&(t=t.selection())),e==null?o.remove():e(o),A&&t?A.merge(t).order():t}function ec(n){for(var r=n.selection?n.selection():n,e=this._groups,A=r._groups,t=e.length,o=A.length,a=Math.min(t,o),l=new Array(t),R=0;R<a;++R)for(var G=e[R],u=A[R],b=G.length,f=l[R]=new Array(b),h,k=0;k<b;++k)(h=G[k]||u[k])&&(f[k]=h);for(;R<t;++R)l[R]=e[R];return new fr(l,this._parents)}function Ac(){for(var n=this._groups,r=-1,e=n.length;++r<e;)for(var A=n[r],t=A.length-1,o=A[t],a;--t>=0;)(a=A[t])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function tc(n){n||(n=oc);function r(b,f){return b&&f?n(b.__data__,f.__data__):!b-!f}for(var e=this._groups,A=e.length,t=new Array(A),o=0;o<A;++o){for(var a=e[o],l=a.length,R=t[o]=new Array(l),G,u=0;u<l;++u)(G=a[u])&&(R[u]=G);R.sort(r)}return new fr(t,this._parents).order()}function oc(n,r){return n<r?-1:n>r?1:n>=r?0:NaN}function ac(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function lc(){return Array.from(this)}function ic(){for(var n=this._groups,r=0,e=n.length;r<e;++r)for(var A=n[r],t=0,o=A.length;t<o;++t){var a=A[t];if(a)return a}return null}function Rc(){let n=0;for(const r of this)++n;return n}function cc(){return!this.node()}function Gc(n){for(var r=this._groups,e=0,A=r.length;e<A;++e)for(var t=r[e],o=0,a=t.length,l;o<a;++o)(l=t[o])&&n.call(l,l.__data__,o,t);return this}function sc(n){return function(){this.removeAttribute(n)}}function uc(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Uc(n,r){return function(){this.setAttribute(n,r)}}function Lc(n,r){return function(){this.setAttributeNS(n.space,n.local,r)}}function Tc(n,r){return function(){var e=r.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function bc(n,r){return function(){var e=r.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function fc(n,r){var e=X1(n);if(arguments.length<2){var A=this.node();return e.local?A.getAttributeNS(e.space,e.local):A.getAttribute(e)}return this.each((r==null?e.local?uc:sc:typeof r=="function"?e.local?bc:Tc:e.local?Lc:Uc)(e,r))}function S8(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function vc(n){return function(){this.style.removeProperty(n)}}function yc(n,r,e){return function(){this.style.setProperty(n,r,e)}}function dc(n,r,e){return function(){var A=r.apply(this,arguments);A==null?this.style.removeProperty(n):this.style.setProperty(n,A,e)}}function Yc(n,r,e){return arguments.length>1?this.each((r==null?vc:typeof r=="function"?dc:yc)(n,r,e??"")):MA(this.node(),n)}function MA(n,r){return n.style.getPropertyValue(r)||S8(n).getComputedStyle(n,null).getPropertyValue(r)}function hc(n){return function(){delete this[n]}}function Cc(n,r){return function(){this[n]=r}}function Sc(n,r){return function(){var e=r.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function pc(n,r){return arguments.length>1?this.each((r==null?hc:typeof r=="function"?Sc:Cc)(n,r)):this.node()[n]}function p8(n){return n.trim().split(/^|\s+/)}function Hl(n){return n.classList||new k8(n)}function k8(n){this._node=n,this._names=p8(n.getAttribute("class")||"")}k8.prototype={add:function(n){var r=this._names.indexOf(n);r<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var r=this._names.indexOf(n);r>=0&&(this._names.splice(r,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function I8(n,r){for(var e=Hl(n),A=-1,t=r.length;++A<t;)e.add(r[A])}function N8(n,r){for(var e=Hl(n),A=-1,t=r.length;++A<t;)e.remove(r[A])}function kc(n){return function(){I8(this,n)}}function Ic(n){return function(){N8(this,n)}}function Nc(n,r){return function(){(r.apply(this,arguments)?I8:N8)(this,n)}}function Ec(n,r){var e=p8(n+"");if(arguments.length<2){for(var A=Hl(this.node()),t=-1,o=e.length;++t<o;)if(!A.contains(e[t]))return!1;return!0}return this.each((typeof r=="function"?Nc:r?kc:Ic)(e,r))}function Mc(){this.textContent=""}function Pc(n){return function(){this.textContent=n}}function mc(n){return function(){var r=n.apply(this,arguments);this.textContent=r??""}}function Bc(n){return arguments.length?this.each(n==null?Mc:(typeof n=="function"?mc:Pc)(n)):this.node().textContent}function Dc(){this.innerHTML=""}function gc(n){return function(){this.innerHTML=n}}function Jc(n){return function(){var r=n.apply(this,arguments);this.innerHTML=r??""}}function Hc(n){return arguments.length?this.each(n==null?Dc:(typeof n=="function"?Jc:gc)(n)):this.node().innerHTML}function Kc(){this.nextSibling&&this.parentNode.appendChild(this)}function Vc(){return this.each(Kc)}function Wc(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Fc(){return this.each(Wc)}function Xc(n){var r=typeof n=="function"?n:y8(n);return this.select(function(){return this.appendChild(r.apply(this,arguments))})}function Qc(){return null}function xc(n,r){var e=typeof n=="function"?n:y8(n),A=r==null?Qc:typeof r=="function"?r:Jl(r);return this.select(function(){return this.insertBefore(e.apply(this,arguments),A.apply(this,arguments)||null)})}function Zc(){var n=this.parentNode;n&&n.removeChild(this)}function wc(){return this.each(Zc)}function _c(){var n=this.cloneNode(!1),r=this.parentNode;return r?r.insertBefore(n,this.nextSibling):n}function jc(){var n=this.cloneNode(!0),r=this.parentNode;return r?r.insertBefore(n,this.nextSibling):n}function $c(n){return this.select(n?jc:_c)}function zc(n){return arguments.length?this.property("__data__",n):this.node().__data__}function Oc(n){return function(r){n.call(this,r,this.__data__)}}function qc(n){return n.trim().split(/^|\s+/).map(function(r){var e="",A=r.indexOf(".");return A>=0&&(e=r.slice(A+1),r=r.slice(0,A)),{type:r,name:e}})}function nG(n){return function(){var r=this.__on;if(r){for(var e=0,A=-1,t=r.length,o;e<t;++e)o=r[e],(!n.type||o.type===n.type)&&o.name===n.name?this.removeEventListener(o.type,o.listener,o.options):r[++A]=o;++A?r.length=A:delete this.__on}}}function rG(n,r,e){return function(){var A=this.__on,t,o=Oc(r);if(A){for(var a=0,l=A.length;a<l;++a)if((t=A[a]).type===n.type&&t.name===n.name){this.removeEventListener(t.type,t.listener,t.options),this.addEventListener(t.type,t.listener=o,t.options=e),t.value=r;return}}this.addEventListener(n.type,o,e),t={type:n.type,name:n.name,value:r,listener:o,options:e},A?A.push(t):this.__on=[t]}}function eG(n,r,e){var A=qc(n+""),t,o=A.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var R=0,G=l.length,u;R<G;++R)for(t=0,u=l[R];t<o;++t)if((a=A[t]).type===u.type&&a.name===u.name)return u.value}return}for(l=r?rG:nG,t=0;t<o;++t)this.each(l(A[t],r,e));return this}function E8(n,r,e){var A=S8(n),t=A.CustomEvent;typeof t=="function"?t=new t(r,e):(t=A.document.createEvent("Event"),e?(t.initEvent(r,e.bubbles,e.cancelable),t.detail=e.detail):t.initEvent(r,!1,!1)),n.dispatchEvent(t)}function AG(n,r){return function(){return E8(this,n,r)}}function tG(n,r){return function(){return E8(this,n,r.apply(this,arguments))}}function oG(n,r){return this.each((typeof r=="function"?tG:AG)(n,r))}function*aG(){for(var n=this._groups,r=0,e=n.length;r<e;++r)for(var A=n[r],t=0,o=A.length,a;t<o;++t)(a=A[t])&&(yield a)}var lG=[null];function fr(n,r){this._groups=n,this._parents=r}function $t(){return new fr([[document.documentElement]],lG)}function iG(){return this}fr.prototype=$t.prototype={constructor:fr,select:mR,selectAll:JR,selectChild:WR,selectChildren:xR,filter:ZR,data:OR,enter:wR,exit:nc,join:rc,merge:ec,selection:iG,order:Ac,sort:tc,call:ac,nodes:lc,node:ic,size:Rc,empty:cc,each:Gc,attr:fc,style:Yc,property:pc,classed:Ec,text:Bc,html:Hc,raise:Vc,lower:Fc,append:Xc,insert:xc,remove:wc,clone:$c,datum:zc,on:eG,dispatch:oG,[Symbol.iterator]:aG};function Kl(n,r,e){n.prototype=r.prototype=e,e.constructor=n}function M8(n,r){var e=Object.create(n.prototype);for(var A in r)e[A]=r[A];return e}function zt(){}var Vt=.7,Y1=1/Vt,hA="\\s*([+-]?\\d+)\\s*",Wt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ir="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",RG=/^#([0-9a-f]{3,8})$/,cG=new RegExp(`^rgb\\(${hA},${hA},${hA}\\)$`),GG=new RegExp(`^rgb\\(${Ir},${Ir},${Ir}\\)$`),sG=new RegExp(`^rgba\\(${hA},${hA},${hA},${Wt}\\)$`),uG=new RegExp(`^rgba\\(${Ir},${Ir},${Ir},${Wt}\\)$`),UG=new RegExp(`^hsl\\(${Wt},${Ir},${Ir}\\)$`),LG=new RegExp(`^hsla\\(${Wt},${Ir},${Ir},${Wt}\\)$`),D3={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Kl(zt,Ft,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:g3,formatHex:g3,formatHex8:TG,formatHsl:bG,formatRgb:J3,toString:J3});function g3(){return this.rgb().formatHex()}function TG(){return this.rgb().formatHex8()}function bG(){return P8(this).formatHsl()}function J3(){return this.rgb().formatRgb()}function Ft(n){var r,e;return n=(n+"").trim().toLowerCase(),(r=RG.exec(n))?(e=r[1].length,r=parseInt(r[1],16),e===6?H3(r):e===3?new xn(r>>8&15|r>>4&240,r>>4&15|r&240,(r&15)<<4|r&15,1):e===8?Eo(r>>24&255,r>>16&255,r>>8&255,(r&255)/255):e===4?Eo(r>>12&15|r>>8&240,r>>8&15|r>>4&240,r>>4&15|r&240,((r&15)<<4|r&15)/255):null):(r=cG.exec(n))?new xn(r[1],r[2],r[3],1):(r=GG.exec(n))?new xn(r[1]*255/100,r[2]*255/100,r[3]*255/100,1):(r=sG.exec(n))?Eo(r[1],r[2],r[3],r[4]):(r=uG.exec(n))?Eo(r[1]*255/100,r[2]*255/100,r[3]*255/100,r[4]):(r=UG.exec(n))?W3(r[1],r[2]/100,r[3]/100,1):(r=LG.exec(n))?W3(r[1],r[2]/100,r[3]/100,r[4]):D3.hasOwnProperty(n)?H3(D3[n]):n==="transparent"?new xn(NaN,NaN,NaN,0):null}function H3(n){return new xn(n>>16&255,n>>8&255,n&255,1)}function Eo(n,r,e,A){return A<=0&&(n=r=e=NaN),new xn(n,r,e,A)}function fG(n){return n instanceof zt||(n=Ft(n)),n?(n=n.rgb(),new xn(n.r,n.g,n.b,n.opacity)):new xn}function m2(n,r,e,A){return arguments.length===1?fG(n):new xn(n,r,e,A??1)}function xn(n,r,e,A){this.r=+n,this.g=+r,this.b=+e,this.opacity=+A}Kl(xn,m2,M8(zt,{brighter(n){return n=n==null?Y1:Math.pow(Y1,n),new xn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Vt:Math.pow(Vt,n),new xn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new xn(Ke(this.r),Ke(this.g),Ke(this.b),h1(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:K3,formatHex:K3,formatHex8:vG,formatRgb:V3,toString:V3}));function K3(){return`#${ge(this.r)}${ge(this.g)}${ge(this.b)}`}function vG(){return`#${ge(this.r)}${ge(this.g)}${ge(this.b)}${ge((isNaN(this.opacity)?1:this.opacity)*255)}`}function V3(){const n=h1(this.opacity);return`${n===1?"rgb(":"rgba("}${Ke(this.r)}, ${Ke(this.g)}, ${Ke(this.b)}${n===1?")":`, ${n})`}`}function h1(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Ke(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function ge(n){return n=Ke(n),(n<16?"0":"")+n.toString(16)}function W3(n,r,e,A){return A<=0?n=r=e=NaN:e<=0||e>=1?n=r=NaN:r<=0&&(n=NaN),new Ur(n,r,e,A)}function P8(n){if(n instanceof Ur)return new Ur(n.h,n.s,n.l,n.opacity);if(n instanceof zt||(n=Ft(n)),!n)return new Ur;if(n instanceof Ur)return n;n=n.rgb();var r=n.r/255,e=n.g/255,A=n.b/255,t=Math.min(r,e,A),o=Math.max(r,e,A),a=NaN,l=o-t,R=(o+t)/2;return l?(r===o?a=(e-A)/l+(e<A)*6:e===o?a=(A-r)/l+2:a=(r-e)/l+4,l/=R<.5?o+t:2-o-t,a*=60):l=R>0&&R<1?0:a,new Ur(a,l,R,n.opacity)}function yG(n,r,e,A){return arguments.length===1?P8(n):new Ur(n,r,e,A??1)}function Ur(n,r,e,A){this.h=+n,this.s=+r,this.l=+e,this.opacity=+A}Kl(Ur,yG,M8(zt,{brighter(n){return n=n==null?Y1:Math.pow(Y1,n),new Ur(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Vt:Math.pow(Vt,n),new Ur(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,r=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,A=e+(e<.5?e:1-e)*r,t=2*e-A;return new xn(Ma(n>=240?n-240:n+120,t,A),Ma(n,t,A),Ma(n<120?n+240:n-120,t,A),this.opacity)},clamp(){return new Ur(F3(this.h),Mo(this.s),Mo(this.l),h1(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=h1(this.opacity);return`${n===1?"hsl(":"hsla("}${F3(this.h)}, ${Mo(this.s)*100}%, ${Mo(this.l)*100}%${n===1?")":`, ${n})`}`}}));function F3(n){return n=(n||0)%360,n<0?n+360:n}function Mo(n){return Math.max(0,Math.min(1,n||0))}function Ma(n,r,e){return(n<60?r+(e-r)*n/60:n<180?e:n<240?r+(e-r)*(240-n)/60:r)*255}const m8=n=>()=>n;function dG(n,r){return function(e){return n+e*r}}function YG(n,r,e){return n=Math.pow(n,e),r=Math.pow(r,e)-n,e=1/e,function(A){return Math.pow(n+A*r,e)}}function hG(n){return(n=+n)==1?B8:function(r,e){return e-r?YG(r,e,n):m8(isNaN(r)?e:r)}}function B8(n,r){var e=r-n;return e?dG(n,e):m8(isNaN(n)?r:n)}const X3=function n(r){var e=hG(r);function A(t,o){var a=e((t=m2(t)).r,(o=m2(o)).r),l=e(t.g,o.g),R=e(t.b,o.b),G=B8(t.opacity,o.opacity);return function(u){return t.r=a(u),t.g=l(u),t.b=R(u),t.opacity=G(u),t+""}}return A.gamma=n,A}(1);function Ae(n,r){return n=+n,r=+r,function(e){return n*(1-e)+r*e}}var B2=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Pa=new RegExp(B2.source,"g");function CG(n){return function(){return n}}function SG(n){return function(r){return n(r)+""}}function pG(n,r){var e=B2.lastIndex=Pa.lastIndex=0,A,t,o,a=-1,l=[],R=[];for(n=n+"",r=r+"";(A=B2.exec(n))&&(t=Pa.exec(r));)(o=t.index)>e&&(o=r.slice(e,o),l[a]?l[a]+=o:l[++a]=o),(A=A[0])===(t=t[0])?l[a]?l[a]+=t:l[++a]=t:(l[++a]=null,R.push({i:a,x:Ae(A,t)})),e=Pa.lastIndex;return e<r.length&&(o=r.slice(e),l[a]?l[a]+=o:l[++a]=o),l.length<2?R[0]?SG(R[0].x):CG(r):(r=R.length,function(G){for(var u=0,b;u<r;++u)l[(b=R[u]).i]=b.x(G);return l.join("")})}var Q3=180/Math.PI,D2={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function D8(n,r,e,A,t,o){var a,l,R;return(a=Math.sqrt(n*n+r*r))&&(n/=a,r/=a),(R=n*e+r*A)&&(e-=n*R,A-=r*R),(l=Math.sqrt(e*e+A*A))&&(e/=l,A/=l,R/=l),n*A<r*e&&(n=-n,r=-r,R=-R,a=-a),{translateX:t,translateY:o,rotate:Math.atan2(r,n)*Q3,skewX:Math.atan(R)*Q3,scaleX:a,scaleY:l}}var Po;function kG(n){const r=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return r.isIdentity?D2:D8(r.a,r.b,r.c,r.d,r.e,r.f)}function IG(n){return n==null||(Po||(Po=document.createElementNS("http://www.w3.org/2000/svg","g")),Po.setAttribute("transform",n),!(n=Po.transform.baseVal.consolidate()))?D2:(n=n.matrix,D8(n.a,n.b,n.c,n.d,n.e,n.f))}function g8(n,r,e,A){function t(G){return G.length?G.pop()+" ":""}function o(G,u,b,f,h,k){if(G!==b||u!==f){var E=h.push("translate(",null,r,null,e);k.push({i:E-4,x:Ae(G,b)},{i:E-2,x:Ae(u,f)})}else(b||f)&&h.push("translate("+b+r+f+e)}function a(G,u,b,f){G!==u?(G-u>180?u+=360:u-G>180&&(G+=360),f.push({i:b.push(t(b)+"rotate(",null,A)-2,x:Ae(G,u)})):u&&b.push(t(b)+"rotate("+u+A)}function l(G,u,b,f){G!==u?f.push({i:b.push(t(b)+"skewX(",null,A)-2,x:Ae(G,u)}):u&&b.push(t(b)+"skewX("+u+A)}function R(G,u,b,f,h,k){if(G!==b||u!==f){var E=h.push(t(h)+"scale(",null,",",null,")");k.push({i:E-4,x:Ae(G,b)},{i:E-2,x:Ae(u,f)})}else(b!==1||f!==1)&&h.push(t(h)+"scale("+b+","+f+")")}return function(G,u){var b=[],f=[];return G=n(G),u=n(u),o(G.translateX,G.translateY,u.translateX,u.translateY,b,f),a(G.rotate,u.rotate,b,f),l(G.skewX,u.skewX,b,f),R(G.scaleX,G.scaleY,u.scaleX,u.scaleY,b,f),G=u=null,function(h){for(var k=-1,E=f.length,R0;++k<E;)b[(R0=f[k]).i]=R0.x(h);return b.join("")}}}var NG=g8(kG,"px, ","px)","deg)"),EG=g8(IG,", ",")",")"),PA=0,it=0,rt=0,J8=1e3,C1,Rt,S1=0,xe=0,Q1=0,Xt=typeof performance=="object"&&performance.now?performance:Date,H8=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Vl(){return xe||(H8(MG),xe=Xt.now()+Q1)}function MG(){xe=0}function p1(){this._call=this._time=this._next=null}p1.prototype=K8.prototype={constructor:p1,restart:function(n,r,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Vl():+e)+(r==null?0:+r),!this._next&&Rt!==this&&(Rt?Rt._next=this:C1=this,Rt=this),this._call=n,this._time=e,g2()},stop:function(){this._call&&(this._call=null,this._time=1/0,g2())}};function K8(n,r,e){var A=new p1;return A.restart(n,r,e),A}function PG(){Vl(),++PA;for(var n=C1,r;n;)(r=xe-n._time)>=0&&n._call.call(void 0,r),n=n._next;--PA}function x3(){xe=(S1=Xt.now())+Q1,PA=it=0;try{PG()}finally{PA=0,BG(),xe=0}}function mG(){var n=Xt.now(),r=n-S1;r>J8&&(Q1-=r,S1=n)}function BG(){for(var n,r=C1,e,A=1/0;r;)r._call?(A>r._time&&(A=r._time),n=r,r=r._next):(e=r._next,r._next=null,r=n?n._next=e:C1=e);Rt=n,g2(A)}function g2(n){if(!PA){it&&(it=clearTimeout(it));var r=n-xe;r>24?(n<1/0&&(it=setTimeout(x3,n-Xt.now()-Q1)),rt&&(rt=clearInterval(rt))):(rt||(S1=Xt.now(),rt=setInterval(mG,J8)),PA=1,H8(x3))}}function Z3(n,r,e){var A=new p1;return r=r==null?0:+r,A.restart(t=>{A.stop(),n(t+r)},r,e),A}var DG=v8("start","end","cancel","interrupt"),gG=[],V8=0,w3=1,J2=2,jo=3,_3=4,H2=5,$o=6;function x1(n,r,e,A,t,o){var a=n.__transition;if(!a)n.__transition={};else if(e in a)return;JG(n,e,{name:r,index:A,group:t,on:DG,tween:gG,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:V8})}function Wl(n,r){var e=vr(n,r);if(e.state>V8)throw new Error("too late; already scheduled");return e}function Nr(n,r){var e=vr(n,r);if(e.state>jo)throw new Error("too late; already running");return e}function vr(n,r){var e=n.__transition;if(!e||!(e=e[r]))throw new Error("transition not found");return e}function JG(n,r,e){var A=n.__transition,t;A[r]=e,e.timer=K8(o,0,e.time);function o(G){e.state=w3,e.timer.restart(a,e.delay,e.time),e.delay<=G&&a(G-e.delay)}function a(G){var u,b,f,h;if(e.state!==w3)return R();for(u in A)if(h=A[u],h.name===e.name){if(h.state===jo)return Z3(a);h.state===_3?(h.state=$o,h.timer.stop(),h.on.call("interrupt",n,n.__data__,h.index,h.group),delete A[u]):+u<r&&(h.state=$o,h.timer.stop(),h.on.call("cancel",n,n.__data__,h.index,h.group),delete A[u])}if(Z3(function(){e.state===jo&&(e.state=_3,e.timer.restart(l,e.delay,e.time),l(G))}),e.state=J2,e.on.call("start",n,n.__data__,e.index,e.group),e.state===J2){for(e.state=jo,t=new Array(f=e.tween.length),u=0,b=-1;u<f;++u)(h=e.tween[u].value.call(n,n.__data__,e.index,e.group))&&(t[++b]=h);t.length=b+1}}function l(G){for(var u=G<e.duration?e.ease.call(null,G/e.duration):(e.timer.restart(R),e.state=H2,1),b=-1,f=t.length;++b<f;)t[b].call(n,u);e.state===H2&&(e.on.call("end",n,n.__data__,e.index,e.group),R())}function R(){e.state=$o,e.timer.stop(),delete A[r];for(var G in A)return;delete n.__transition}}function HG(n,r){var e=n.__transition,A,t,o=!0,a;if(e){r=r==null?null:r+"";for(a in e){if((A=e[a]).name!==r){o=!1;continue}t=A.state>J2&&A.state<H2,A.state=$o,A.timer.stop(),A.on.call(t?"interrupt":"cancel",n,n.__data__,A.index,A.group),delete e[a]}o&&delete n.__transition}}function KG(n){return this.each(function(){HG(this,n)})}function VG(n,r){var e,A;return function(){var t=Nr(this,n),o=t.tween;if(o!==e){A=e=o;for(var a=0,l=A.length;a<l;++a)if(A[a].name===r){A=A.slice(),A.splice(a,1);break}}t.tween=A}}function WG(n,r,e){var A,t;if(typeof e!="function")throw new Error;return function(){var o=Nr(this,n),a=o.tween;if(a!==A){t=(A=a).slice();for(var l={name:r,value:e},R=0,G=t.length;R<G;++R)if(t[R].name===r){t[R]=l;break}R===G&&t.push(l)}o.tween=t}}function FG(n,r){var e=this._id;if(n+="",arguments.length<2){for(var A=vr(this.node(),e).tween,t=0,o=A.length,a;t<o;++t)if((a=A[t]).name===n)return a.value;return null}return this.each((r==null?VG:WG)(e,n,r))}function Fl(n,r,e){var A=n._id;return n.each(function(){var t=Nr(this,A);(t.value||(t.value={}))[r]=e.apply(this,arguments)}),function(t){return vr(t,A).value[r]}}function W8(n,r){var e;return(typeof r=="number"?Ae:r instanceof Ft?X3:(e=Ft(r))?(r=e,X3):pG)(n,r)}function XG(n){return function(){this.removeAttribute(n)}}function QG(n){return function(){this.removeAttributeNS(n.space,n.local)}}function xG(n,r,e){var A,t=e+"",o;return function(){var a=this.getAttribute(n);return a===t?null:a===A?o:o=r(A=a,e)}}function ZG(n,r,e){var A,t=e+"",o;return function(){var a=this.getAttributeNS(n.space,n.local);return a===t?null:a===A?o:o=r(A=a,e)}}function wG(n,r,e){var A,t,o;return function(){var a,l=e(this),R;return l==null?void this.removeAttribute(n):(a=this.getAttribute(n),R=l+"",a===R?null:a===A&&R===t?o:(t=R,o=r(A=a,l)))}}function _G(n,r,e){var A,t,o;return function(){var a,l=e(this),R;return l==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),R=l+"",a===R?null:a===A&&R===t?o:(t=R,o=r(A=a,l)))}}function jG(n,r){var e=X1(n),A=e==="transform"?EG:W8;return this.attrTween(n,typeof r=="function"?(e.local?_G:wG)(e,A,Fl(this,"attr."+n,r)):r==null?(e.local?QG:XG)(e):(e.local?ZG:xG)(e,A,r))}function $G(n,r){return function(e){this.setAttribute(n,r.call(this,e))}}function zG(n,r){return function(e){this.setAttributeNS(n.space,n.local,r.call(this,e))}}function OG(n,r){var e,A;function t(){var o=r.apply(this,arguments);return o!==A&&(e=(A=o)&&zG(n,o)),e}return t._value=r,t}function qG(n,r){var e,A;function t(){var o=r.apply(this,arguments);return o!==A&&(e=(A=o)&&$G(n,o)),e}return t._value=r,t}function ns(n,r){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(r==null)return this.tween(e,null);if(typeof r!="function")throw new Error;var A=X1(n);return this.tween(e,(A.local?OG:qG)(A,r))}function rs(n,r){return function(){Wl(this,n).delay=+r.apply(this,arguments)}}function es(n,r){return r=+r,function(){Wl(this,n).delay=r}}function As(n){var r=this._id;return arguments.length?this.each((typeof n=="function"?rs:es)(r,n)):vr(this.node(),r).delay}function ts(n,r){return function(){Nr(this,n).duration=+r.apply(this,arguments)}}function os(n,r){return r=+r,function(){Nr(this,n).duration=r}}function as(n){var r=this._id;return arguments.length?this.each((typeof n=="function"?ts:os)(r,n)):vr(this.node(),r).duration}function ls(n,r){if(typeof r!="function")throw new Error;return function(){Nr(this,n).ease=r}}function is(n){var r=this._id;return arguments.length?this.each(ls(r,n)):vr(this.node(),r).ease}function Rs(n,r){return function(){var e=r.apply(this,arguments);if(typeof e!="function")throw new Error;Nr(this,n).ease=e}}function cs(n){if(typeof n!="function")throw new Error;return this.each(Rs(this._id,n))}function Gs(n){typeof n!="function"&&(n=Y8(n));for(var r=this._groups,e=r.length,A=new Array(e),t=0;t<e;++t)for(var o=r[t],a=o.length,l=A[t]=[],R,G=0;G<a;++G)(R=o[G])&&n.call(R,R.__data__,G,o)&&l.push(R);return new xr(A,this._parents,this._name,this._id)}function ss(n){if(n._id!==this._id)throw new Error;for(var r=this._groups,e=n._groups,A=r.length,t=e.length,o=Math.min(A,t),a=new Array(A),l=0;l<o;++l)for(var R=r[l],G=e[l],u=R.length,b=a[l]=new Array(u),f,h=0;h<u;++h)(f=R[h]||G[h])&&(b[h]=f);for(;l<A;++l)a[l]=r[l];return new xr(a,this._parents,this._name,this._id)}function us(n){return(n+"").trim().split(/^|\s+/).every(function(r){var e=r.indexOf(".");return e>=0&&(r=r.slice(0,e)),!r||r==="start"})}function Us(n,r,e){var A,t,o=us(r)?Wl:Nr;return function(){var a=o(this,n),l=a.on;l!==A&&(t=(A=l).copy()).on(r,e),a.on=t}}function Ls(n,r){var e=this._id;return arguments.length<2?vr(this.node(),e).on.on(n):this.each(Us(e,n,r))}function Ts(n){return function(){var r=this.parentNode;for(var e in this.__transition)if(+e!==n)return;r&&r.removeChild(this)}}function bs(){return this.on("end.remove",Ts(this._id))}function fs(n){var r=this._name,e=this._id;typeof n!="function"&&(n=Jl(n));for(var A=this._groups,t=A.length,o=new Array(t),a=0;a<t;++a)for(var l=A[a],R=l.length,G=o[a]=new Array(R),u,b,f=0;f<R;++f)(u=l[f])&&(b=n.call(u,u.__data__,f,l))&&("__data__"in u&&(b.__data__=u.__data__),G[f]=b,x1(G[f],r,e,f,G,vr(u,e)));return new xr(o,this._parents,r,e)}function vs(n){var r=this._name,e=this._id;typeof n!="function"&&(n=d8(n));for(var A=this._groups,t=A.length,o=[],a=[],l=0;l<t;++l)for(var R=A[l],G=R.length,u,b=0;b<G;++b)if(u=R[b]){for(var f=n.call(u,u.__data__,b,R),h,k=vr(u,e),E=0,R0=f.length;E<R0;++E)(h=f[E])&&x1(h,r,e,E,f,k);o.push(f),a.push(u)}return new xr(o,a,r,e)}var ys=$t.prototype.constructor;function ds(){return new ys(this._groups,this._parents)}function Ys(n,r){var e,A,t;return function(){var o=MA(this,n),a=(this.style.removeProperty(n),MA(this,n));return o===a?null:o===e&&a===A?t:t=r(e=o,A=a)}}function F8(n){return function(){this.style.removeProperty(n)}}function hs(n,r,e){var A,t=e+"",o;return function(){var a=MA(this,n);return a===t?null:a===A?o:o=r(A=a,e)}}function Cs(n,r,e){var A,t,o;return function(){var a=MA(this,n),l=e(this),R=l+"";return l==null&&(R=l=(this.style.removeProperty(n),MA(this,n))),a===R?null:a===A&&R===t?o:(t=R,o=r(A=a,l))}}function Ss(n,r){var e,A,t,o="style."+r,a="end."+o,l;return function(){var R=Nr(this,n),G=R.on,u=R.value[o]==null?l||(l=F8(r)):void 0;(G!==e||t!==u)&&(A=(e=G).copy()).on(a,t=u),R.on=A}}function ps(n,r,e){var A=(n+="")=="transform"?NG:W8;return r==null?this.styleTween(n,Ys(n,A)).on("end.style."+n,F8(n)):typeof r=="function"?this.styleTween(n,Cs(n,A,Fl(this,"style."+n,r))).each(Ss(this._id,n)):this.styleTween(n,hs(n,A,r),e).on("end.style."+n,null)}function ks(n,r,e){return function(A){this.style.setProperty(n,r.call(this,A),e)}}function Is(n,r,e){var A,t;function o(){var a=r.apply(this,arguments);return a!==t&&(A=(t=a)&&ks(n,a,e)),A}return o._value=r,o}function Ns(n,r,e){var A="style."+(n+="");if(arguments.length<2)return(A=this.tween(A))&&A._value;if(r==null)return this.tween(A,null);if(typeof r!="function")throw new Error;return this.tween(A,Is(n,r,e??""))}function Es(n){return function(){this.textContent=n}}function Ms(n){return function(){var r=n(this);this.textContent=r??""}}function Ps(n){return this.tween("text",typeof n=="function"?Ms(Fl(this,"text",n)):Es(n==null?"":n+""))}function ms(n){return function(r){this.textContent=n.call(this,r)}}function Bs(n){var r,e;function A(){var t=n.apply(this,arguments);return t!==e&&(r=(e=t)&&ms(t)),r}return A._value=n,A}function Ds(n){var r="text";if(arguments.length<1)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,Bs(n))}function gs(){for(var n=this._name,r=this._id,e=X8(),A=this._groups,t=A.length,o=0;o<t;++o)for(var a=A[o],l=a.length,R,G=0;G<l;++G)if(R=a[G]){var u=vr(R,r);x1(R,n,e,G,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new xr(A,this._parents,n,e)}function Js(){var n,r,e=this,A=e._id,t=e.size();return new Promise(function(o,a){var l={value:a},R={value:function(){--t===0&&o()}};e.each(function(){var G=Nr(this,A),u=G.on;u!==n&&(r=(n=u).copy(),r._.cancel.push(l),r._.interrupt.push(l),r._.end.push(R)),G.on=r}),t===0&&o()})}var Hs=0;function xr(n,r,e,A){this._groups=n,this._parents=r,this._name=e,this._id=A}function X8(){return++Hs}var Dr=$t.prototype;xr.prototype={constructor:xr,select:fs,selectAll:vs,selectChild:Dr.selectChild,selectChildren:Dr.selectChildren,filter:Gs,merge:ss,selection:ds,transition:gs,call:Dr.call,nodes:Dr.nodes,node:Dr.node,size:Dr.size,empty:Dr.empty,each:Dr.each,on:Ls,attr:jG,attrTween:ns,style:ps,styleTween:Ns,text:Ps,textTween:Ds,remove:bs,tween:FG,delay:As,duration:as,ease:is,easeVarying:cs,end:Js,[Symbol.iterator]:Dr[Symbol.iterator]};function Ks(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Vs={time:null,delay:0,duration:250,ease:Ks};function Ws(n,r){for(var e;!(e=n.__transition)||!(e=e[r]);)if(!(n=n.parentNode))throw new Error(`transition ${r} not found`);return e}function Fs(n){var r,e;n instanceof xr?(r=n._id,n=n._name):(r=X8(),(e=Vs).time=Vl(),n=n==null?null:n+"");for(var A=this._groups,t=A.length,o=0;o<t;++o)for(var a=A[o],l=a.length,R,G=0;G<l;++G)(R=a[G])&&x1(R,n,r,G,a,e||Ws(R,r));return new xr(A,this._parents,n,r)}$t.prototype.interrupt=KG;$t.prototype.transition=Fs;var j3={},ma={},Ba=34,et=10,Da=13;function Q8(n){return new Function("d","return {"+n.map(function(r,e){return JSON.stringify(r)+": d["+e+'] || ""'}).join(",")+"}")}function Xs(n,r){var e=Q8(n);return function(A,t){return r(e(A),t,n)}}function $3(n){var r=Object.create(null),e=[];return n.forEach(function(A){for(var t in A)t in r||e.push(r[t]=t)}),e}function Fn(n,r){var e=n+"",A=e.length;return A<r?new Array(r-A+1).join(0)+e:e}function Qs(n){return n<0?"-"+Fn(-n,6):n>9999?"+"+Fn(n,6):Fn(n,4)}function xs(n){var r=n.getUTCHours(),e=n.getUTCMinutes(),A=n.getUTCSeconds(),t=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":Qs(n.getUTCFullYear())+"-"+Fn(n.getUTCMonth()+1,2)+"-"+Fn(n.getUTCDate(),2)+(t?"T"+Fn(r,2)+":"+Fn(e,2)+":"+Fn(A,2)+"."+Fn(t,3)+"Z":A?"T"+Fn(r,2)+":"+Fn(e,2)+":"+Fn(A,2)+"Z":e||r?"T"+Fn(r,2)+":"+Fn(e,2)+"Z":"")}function x8(n){var r=new RegExp('["'+n+`
\r]`),e=n.charCodeAt(0);function A(b,f){var h,k,E=t(b,function(R0,y){if(h)return h(R0,y-1);k=R0,h=f?Xs(R0,f):Q8(R0)});return E.columns=k||[],E}function t(b,f){var h=[],k=b.length,E=0,R0=0,y,v=k<=0,d=!1;b.charCodeAt(k-1)===et&&--k,b.charCodeAt(k-1)===Da&&--k;function B(){if(v)return ma;if(d)return d=!1,j3;var A0,t0=E,n0;if(b.charCodeAt(t0)===Ba){for(;E++<k&&b.charCodeAt(E)!==Ba||b.charCodeAt(++E)===Ba;);return(A0=E)>=k?v=!0:(n0=b.charCodeAt(E++))===et?d=!0:n0===Da&&(d=!0,b.charCodeAt(E)===et&&++E),b.slice(t0+1,A0-1).replace(/""/g,'"')}for(;E<k;){if((n0=b.charCodeAt(A0=E++))===et)d=!0;else if(n0===Da)d=!0,b.charCodeAt(E)===et&&++E;else if(n0!==e)continue;return b.slice(t0,A0)}return v=!0,b.slice(t0,k)}for(;(y=B())!==ma;){for(var _=[];y!==j3&&y!==ma;)_.push(y),y=B();f&&(_=f(_,R0++))==null||h.push(_)}return h}function o(b,f){return b.map(function(h){return f.map(function(k){return u(h[k])}).join(n)})}function a(b,f){return f==null&&(f=$3(b)),[f.map(u).join(n)].concat(o(b,f)).join(`
`)}function l(b,f){return f==null&&(f=$3(b)),o(b,f).join(`
`)}function R(b){return b.map(G).join(`
`)}function G(b){return b.map(u).join(n)}function u(b){return b==null?"":b instanceof Date?xs(b):r.test(b+="")?'"'+b.replace(/"/g,'""')+'"':b}return{parse:A,parseRows:t,format:a,formatBody:l,formatRows:R,formatRow:G,formatValue:u}}var Zs=x8(","),ws=Zs.parse,_s=x8("	"),js=_s.parse;function $s(n,r,e){return(r[0]-n[0])*(e[1]-n[1])-(r[1]-n[1])*(e[0]-n[0])}function zs(n,r){return n[0]-r[0]||n[1]-r[1]}function z3(n){const r=n.length,e=[0,1];let A=2,t;for(t=2;t<r;++t){for(;A>1&&$s(n[e[A-2]],n[e[A-1]],n[t])<=0;)--A;e[A++]=t}return e.slice(0,A)}function mo(n){if((e=n.length)<3)return null;var r,e,A=new Array(e),t=new Array(e);for(r=0;r<e;++r)A[r]=[+n[r][0],+n[r][1],r];for(A.sort(zs),r=0;r<e;++r)t[r]=[A[r][0],-A[r][1]];var o=z3(A),a=z3(t),l=a[0]===o[0],R=a[a.length-1]===o[o.length-1],G=[];for(r=o.length-1;r>=0;--r)G.push(n[A[o[r]][2]]);for(r=+l;r<a.length-R;++r)G.push(n[A[a[r]][2]]);return G}function ct(n,r,e){this.k=n,this.x=r,this.y=e}ct.prototype={constructor:ct,scale:function(n){return n===1?this:new ct(this.k*n,this.x,this.y)},translate:function(n,r){return n===0&r===0?this:new ct(this.k,this.x+this.k*n,this.y+this.k*r)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ct.prototype;function Z1(){return(Z1=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&(n[A]=e[A])}return n}).apply(this,arguments)}function Z8(n,r){if(n==null)return{};var e,A,t={},o=Object.keys(n);for(A=0;A<o.length;A++)r.indexOf(e=o[A])>=0||(t[e]=n[e]);return t}function K2(n){var r=P.useRef(n),e=P.useRef(function(A){r.current&&r.current(A)});return r.current=n,e.current}var Qt=function(n,r,e){return r===void 0&&(r=0),e===void 0&&(e=1),n>e?e:n<r?r:n},yt=function(n){return"touches"in n},V2=function(n){return n&&n.ownerDocument.defaultView||self},O3=function(n,r,e){var A=n.getBoundingClientRect(),t=yt(r)?function(o,a){for(var l=0;l<o.length;l++)if(o[l].identifier===a)return o[l];return o[0]}(r.touches,e):r;return{left:Qt((t.pageX-(A.left+V2(n).pageXOffset))/A.width),top:Qt((t.pageY-(A.top+V2(n).pageYOffset))/A.height)}},q3=function(n){!yt(n)&&n.preventDefault()},w8=pn.memo(function(n){var r=n.onMove,e=n.onKey,A=Z8(n,["onMove","onKey"]),t=P.useRef(null),o=K2(r),a=K2(e),l=P.useRef(null),R=P.useRef(!1),G=P.useMemo(function(){var h=function(R0){q3(R0),(yt(R0)?R0.touches.length>0:R0.buttons>0)&&t.current?o(O3(t.current,R0,l.current)):E(!1)},k=function(){return E(!1)};function E(R0){var y=R.current,v=V2(t.current),d=R0?v.addEventListener:v.removeEventListener;d(y?"touchmove":"mousemove",h),d(y?"touchend":"mouseup",k)}return[function(R0){var y=R0.nativeEvent,v=t.current;if(v&&(q3(y),!function(B,_){return _&&!yt(B)}(y,R.current)&&v)){if(yt(y)){R.current=!0;var d=y.changedTouches||[];d.length&&(l.current=d[0].identifier)}v.focus(),o(O3(v,y,l.current)),E(!0)}},function(R0){var y=R0.which||R0.keyCode;y<37||y>40||(R0.preventDefault(),a({left:y===39?.05:y===37?-.05:0,top:y===40?.05:y===38?-.05:0}))},E]},[a,o]),u=G[0],b=G[1],f=G[2];return P.useEffect(function(){return f},[f]),pn.createElement("div",Z1({},A,{onTouchStart:u,onMouseDown:u,className:"react-colorful__interactive",ref:t,onKeyDown:b,tabIndex:0,role:"slider"}))}),Xl=function(n){return n.filter(Boolean).join(" ")},_8=function(n){var r=n.color,e=n.left,A=n.top,t=A===void 0?.5:A,o=Xl(["react-colorful__pointer",n.className]);return pn.createElement("div",{className:o,style:{top:100*t+"%",left:100*e+"%"}},pn.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},yn=function(n,r,e){return r===void 0&&(r=0),e===void 0&&(e=Math.pow(10,r)),Math.round(e*n)/e},Os=function(n){return Au(W2(n))},W2=function(n){return n[0]==="#"&&(n=n.substring(1)),n.length<6?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?yn(parseInt(n[3]+n[3],16)/255,2):1}:{r:parseInt(n.substring(0,2),16),g:parseInt(n.substring(2,4),16),b:parseInt(n.substring(4,6),16),a:n.length===8?yn(parseInt(n.substring(6,8),16)/255,2):1}},qs=function(n){return eu(ru(n))},nu=function(n){var r=n.s,e=n.v,A=n.a,t=(200-r)*e/100;return{h:yn(n.h),s:yn(t>0&&t<200?r*e/100/(t<=100?t:200-t)*100:0),l:yn(t/2),a:yn(A,2)}},F2=function(n){var r=nu(n);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},ru=function(n){var r=n.h,e=n.s,A=n.v,t=n.a;r=r/360*6,e/=100,A/=100;var o=Math.floor(r),a=A*(1-e),l=A*(1-(r-o)*e),R=A*(1-(1-r+o)*e),G=o%6;return{r:yn(255*[A,l,a,a,R,A][G]),g:yn(255*[R,A,A,l,a,a][G]),b:yn(255*[a,a,R,A,A,l][G]),a:yn(t,2)}},Bo=function(n){var r=n.toString(16);return r.length<2?"0"+r:r},eu=function(n){var r=n.r,e=n.g,A=n.b,t=n.a,o=t<1?Bo(yn(255*t)):"";return"#"+Bo(r)+Bo(e)+Bo(A)+o},Au=function(n){var r=n.r,e=n.g,A=n.b,t=n.a,o=Math.max(r,e,A),a=o-Math.min(r,e,A),l=a?o===r?(e-A)/a:o===e?2+(A-r)/a:4+(r-e)/a:0;return{h:yn(60*(l<0?l+6:l)),s:yn(o?a/o*100:0),v:yn(o/255*100),a:t}},tu=pn.memo(function(n){var r=n.hue,e=n.onChange,A=Xl(["react-colorful__hue",n.className]);return pn.createElement("div",{className:A},pn.createElement(w8,{onMove:function(t){e({h:360*t.left})},onKey:function(t){e({h:Qt(r+360*t.left,0,360)})},"aria-label":"Hue","aria-valuenow":yn(r),"aria-valuemax":"360","aria-valuemin":"0"},pn.createElement(_8,{className:"react-colorful__hue-pointer",left:r/360,color:F2({h:r,s:100,v:100,a:1})})))}),ou=pn.memo(function(n){var r=n.hsva,e=n.onChange,A={backgroundColor:F2({h:r.h,s:100,v:100,a:1})};return pn.createElement("div",{className:"react-colorful__saturation",style:A},pn.createElement(w8,{onMove:function(t){e({s:100*t.left,v:100-100*t.top})},onKey:function(t){e({s:Qt(r.s+100*t.left,0,100),v:Qt(r.v-100*t.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+yn(r.s)+"%, Brightness "+yn(r.v)+"%"},pn.createElement(_8,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:F2(r)})))}),j8=function(n,r){if(n===r)return!0;for(var e in n)if(n[e]!==r[e])return!1;return!0},au=function(n,r){return n.toLowerCase()===r.toLowerCase()||j8(W2(n),W2(r))};function lu(n,r,e){var A=K2(e),t=P.useState(function(){return n.toHsva(r)}),o=t[0],a=t[1],l=P.useRef({color:r,hsva:o});P.useEffect(function(){if(!n.equal(r,l.current.color)){var G=n.toHsva(r);l.current={hsva:G,color:r},a(G)}},[r,n]),P.useEffect(function(){var G;j8(o,l.current.hsva)||n.equal(G=n.fromHsva(o),l.current.color)||(l.current={hsva:o,color:G},A(G))},[o,n,A]);var R=P.useCallback(function(G){a(function(u){return Object.assign({},u,G)})},[]);return[o,R]}var iu=typeof window<"u"?P.useLayoutEffect:P.useEffect,Ru=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},n4=new Map,cu=function(n){iu(function(){var r=n.current?n.current.ownerDocument:document;if(r!==void 0&&!n4.has(r)){var e=r.createElement("style");e.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,n4.set(r,e);var A=Ru();A&&e.setAttribute("nonce",A),r.head.appendChild(e)}},[])},Gu=function(n){var r=n.className,e=n.colorModel,A=n.color,t=A===void 0?e.defaultColor:A,o=n.onChange,a=Z8(n,["className","colorModel","color","onChange"]),l=P.useRef(null);cu(l);var R=lu(e,t,o),G=R[0],u=R[1],b=Xl(["react-colorful",r]);return pn.createElement("div",Z1({},a,{ref:l,className:b}),pn.createElement(ou,{hsva:G,onChange:u}),pn.createElement(tu,{hue:G.h,onChange:u,className:"react-colorful__last-control"}))},su={defaultColor:"000",toHsva:Os,fromHsva:function(n){return qs({h:n.h,s:n.s,v:n.v,a:1})},equal:au},ga=function(n){return pn.createElement(Gu,Z1({},n,{colorModel:su}))};const Do=.5,r4=2,a0=40,Wn=2,on=.45,At=150;function un(n,r,e){return Math.max(r,Math.min(e,n))}function dt(n,r,e){return n+(r-n)*e}function uu(n){let r=2166136261;for(let e=0;e<n.length;e++)r^=n.charCodeAt(e),r=Math.imul(r,16777619);return r>>>0}function Yt(n){const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:[0,0,0]}function e4(n,r,e){const A=Yt(n),t=Yt(r);return`rgb(${Math.round(dt(A[0],t[0],e))},${Math.round(dt(A[1],t[1],e))},${Math.round(dt(A[2],t[2],e))})`}function Uu(n,r){const[e,A]=n;let t=!1;for(let o=0,a=r.length-1;o<r.length;a=o++){const[l,R]=r[o],[G,u]=r[a];R>A!=u>A&&e<(G-l)*(A-R)/(u-R)+l&&(t=!t)}return t}const A4=["#4e79a7","#59a14f","#e15759","#f28e2b","#76b7b2","#edc948","#b07aa1","#ff9da7","#9c755f","#bab0ab","#a6cee3","#b2df8a","#fb9a99","#fdbf6f","#cab2d6","#ffff99","#1f78b4","#33a02c","#e31a1c","#ff7f00"];function Lu(n){if(!n)return"#aaa";const r=Math.abs(uu(n))%A4.length;return A4[r]}function Tu(n){let r=0;function e(){for(;r<n.length&&/\s/.test(n[r]);)r++}function A(){e();const o=[];let a="",l;if(n[r]==="("){for(r++;;){if(o.push(A()),e(),n[r]===","){r++;continue}if(n[r]===")"){r++;break}throw new Error("Newick parse error at position "+r)}for(e();r<n.length&&/[A-Za-z0-9_./\-]/.test(n[r]);)a+=n[r++]}else for(;r<n.length&&!/[:),;\s]/.test(n[r]);)a+=n[r++];if(e(),n[r]===":"){r++;let R="";for(;r<n.length&&!/[),;\s]/.test(n[r]);)R+=n[r++];l=parseFloat(R)}return e(),{name:a||void 0,length:l??0,children:o}}const t=A();if(e(),n[r]!==";")throw new Error("Newick parse error: missing trailing ';'");return t}function $8(n,r){if(!n.children||n.children.length===0)return r.has(n.name||"")?null:n;const e=[];for(const A of n.children){const t=$8(A,r);t!==null&&e.push(t)}return e.length===0?null:e.length===1?{...e[0],length:(e[0].length||0)+(n.length||0)}:{...n,children:e}}function bu(n){const r=[],e=new Map;function A(l,R){var f,h;const G=r.length,u={id:G,name:(f=l.children)!=null&&f.length?void 0:l.name,parent:R,children:[],length:l.length||0,support:void 0,isLeaf:!((h=l.children)!=null&&h.length),depth:0,cumLen:0,leafIndex:-1,L:0,R:0,propCat:void 0};if(!u.isLeaf&&l.name){const k=l.name.indexOf("/");if(k!==-1){const E=parseFloat(l.name.slice(k+1));isNaN(E)||(u.support=E>1?E/100:E)}else if(/^-?\d+(\.\d+)?$/.test(l.name)){const E=parseFloat(l.name);u.support=E>1?E/100:E}}r.push(u),u.name&&e.set(u.name,G);const b=[];for(const k of l.children||[])b.push(A(k,G));return r[G].children=b,G}const t=A(n,null),o=[];function a(l,R,G){const u=r[l];if(u.depth=R,u.cumLen=G,u.isLeaf)u.leafIndex=o.length,u.L=u.leafIndex,u.R=u.leafIndex+1,o.push(l);else{u.L=1/0,u.R=-1/0;for(const b of u.children)a(b,R+1,G+r[b].length),u.L=Math.min(u.L,r[b].L),u.R=Math.max(u.R,r[b].R)}}return a(t,0,0),{nodes:r,root:t,leaves:o,nameToNode:e}}function z8(n){const{nodes:r,root:e}=n,A=new Uint32Array(r.length),t=[];(function o(a){for(const l of r[a].children)o(l);t.push(a)})(e);for(const o of t){const a=r[o];if(a.isLeaf)A[o]=1;else{let l=0;for(const R of a.children)l+=A[R];A[o]=l}a.leaves=A[o]}}function fu(n){const r=new Uint32Array(n.nodes.length),e=[];(function A(t){for(const o of n.nodes[t].children)A(o);e.push(t)})(n.root);for(const A of e){const t=n.nodes[A];if(t.isLeaf)r[A]=1;else{let o=0;for(const a of t.children)o+=r[a];r[A]=o}}return r}function O8(n,r){const e=fu(n),A=[n.root];for(;A.length;){const a=A.pop(),l=n.nodes[a];l.children.sort((R,G)=>r==="asc"?e[R]-e[G]:e[G]-e[R]);for(const R of l.children)A.push(R)}const t=[];function o(a){const l=n.nodes[a];if(l.isLeaf)l.leafIndex=t.length,l.L=l.leafIndex,l.R=l.leafIndex+1,t.push(a);else{l.L=1/0,l.R=-1/0;for(const R of l.children)o(R),l.L=Math.min(l.L,n.nodes[R].L),l.R=Math.max(l.R,n.nodes[R].R)}}o(n.root),n.leaves=t}function t4(n,r,e){const A=n.nodes.length,t=Array.from({length:A},()=>[]);for(const u of n.nodes)for(const b of u.children){const f=n.nodes[b].length;t[u.id].push({to:b,len:f}),t[b].push({to:u.id,len:f})}const o=new Int32Array(A).fill(-1),a=new Float32Array(A).fill(0),l=[r];o[r]=-2;for(let u=0;u<l.length;u++){const b=l[u];for(const f of t[b])o[f.to]===-1&&(o[f.to]=b,a[f.to]=f.len,l.push(f.to))}for(const u of n.nodes)u.parent=null,u.children=[];for(let u=0;u<A;u++){const b=o[u];b===-2?(n.root=u,n.nodes[u].parent=null,n.nodes[u].length=0):(n.nodes[u].parent=b,n.nodes[u].length=a[u],n.nodes[b].children.push(u))}const R=[];function G(u,b,f){const h=n.nodes[u];if(h.depth=b,h.cumLen=f,h.isLeaf)h.leafIndex=R.length,h.L=h.leafIndex,h.R=h.leafIndex+1,R.push(u);else{h.L=1/0,h.R=-1/0;for(const k of h.children)G(k,b+1,f+n.nodes[k].length),h.L=Math.min(h.L,n.nodes[k].L),h.R=Math.max(h.R,n.nodes[k].R)}}G(n.root,0,0),n.leaves=R,e!=="none"&&O8(n,e),z8(n)}function vu(n,r){const{nodes:e}=n;let A,t=new Int32Array(0);if(r)A=f8(e,l=>l.cumLen)||1;else{t=new Int32Array(e.length);const l=[],R=[n.root];for(;R.length;){const G=R.pop();l.push(G);for(const u of e[G].children)R.push(u)}for(let G=l.length-1;G>=0;G--){const u=l[G],b=e[u];if(!b.isLeaf){let f=0;for(const h of b.children)t[h]+1>f&&(f=t[h]+1);t[u]=f}}A=t[n.root]||1}const o=new Array(e.length).fill(0).map(()=>({x:0,y:0}));for(const l of e){const R=r?l.cumLen:A-t[l.id],G=l.isLeaf?l.leafIndex:(l.L+l.R-1)/2;o[l.id]={x:R,y:G}}const a=n.leaves.length>0?n.leaves.length-1:1;return{coords:o,height:a,maxX:A}}function yu(n,r){const{nodes:e,root:A}=n,t=new Array(e.length).fill(0).map(()=>({x:0,y:0,angle:0,r:0})),o=e[A].leaves||n.leaves.length||1,a=2*Math.PI/o;function l(G,u,b,f){const h=e[G],k=h.leaves||1;let E=u-k*a/2;const R0=[...h.children];R0.sort((y,v)=>{const d=e[y].leaves||1,B=e[v].leaves||1;return d-B});for(const y of R0){const v=e[y],d=v.leaves||1,B=v.isLeaf?1:d,_=E+B*a/2,A0=r?.1:v.length||.01,t0=b+A0*Math.cos(_),n0=f+A0*Math.sin(_);t[y]={x:t0,y:n0,angle:_,r:Math.hypot(t0,n0)},v.isLeaf||l(y,_,t0,n0),E+=B*a}}t[A]={x:0,y:0,angle:0,r:0},l(A,0,0,0);const R=f8(t,G=>G.r)||1;return{coords:t,maxR:R}}function Pn(n,r,e,A,t,o){const a=t*Math.PI/180,l=o*Math.PI/180,R=e>0?(r+.5)/e:0,G=a-R*l,u=n*A;return{x:u*Math.cos(G),y:u*Math.sin(G),angle:G,radius:u}}async function Ja(n,r){const e=await n.text(),t=n.name.toLowerCase().endsWith(".tsv")||e.includes("	")?js(e):ws(e),o=t.columns.map(G=>G.trim()),a=r&&o.some(G=>G.toLowerCase()===r.toLowerCase())?o.find(G=>G.toLowerCase()===r.toLowerCase()):o.find(G=>G.toLowerCase()==="id"||G.toLowerCase()==="name")??o[0];if(!a)throw new Error(`Annotation file must include at least one column (found: ${o.join(", ")})`);const l=t.map(G=>{const u={id:String(G[a]??"").trim()};for(const b of o)b!==a&&(u[b]=G[b]!=null?String(G[b]).trim():G[b]);return u}).filter(G=>G.id!==""),R=o.filter(G=>G!==a);return{rows:l,columns:R}}const Ha=[{name:"Tableau 10",colors:["#4c78a8","#f58518","#e45756","#72b7b2","#54a24b","#eeca3b","#b279a2","#ff9da6","#9d755d","#bab0ac"]},{name:"Set1",colors:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#a65628","#f781bf","#999999"]},{name:"Set2",colors:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]},{name:"Dark2",colors:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]},{name:"Paired",colors:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#ffdead","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]},{name:"Pastel",colors:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]}];function tA(n,r){const e=n.nodes[r],A=n.nodes[n.leaves[e.L]].name??"",t=n.nodes[n.leaves[e.R-1]].name??"";return`${A}\0${t}`}function o4(n,r){const e=r.indexOf("\0"),A=r.slice(0,e),t=r.slice(e+1),o=n.nameToNode.get(A),a=n.nameToNode.get(t);if(o===void 0||a===void 0)return null;if(o===a)return o;const l=new Set;let R=o;for(;R!==null;)l.add(R),R=n.nodes[R].parent;for(R=a;R!==null;){if(l.has(R))return R;R=n.nodes[R].parent}return null}function du(){var di;const[n,r]=P.useState(null),[e,A]=P.useState([]),[t,o]=P.useState(null),[a,l]=P.useState(null),[R,G]=P.useState(new Map),[u,b]=P.useState([]),[f,h]=P.useState(!0),[k,E]=P.useState(new Map),[R0,y]=P.useState(null),[v,d]=P.useState(null),[B,_]=P.useState(null),[A0,t0]=P.useState(Ha[0].name),[n0,j0]=P.useState(6),[p0,In]=P.useState("auto"),[s0,wr]=P.useState("rect"),[sn,Ot]=P.useState(!0),[h0,Jn]=P.useState(1),[C,U0]=P.useState(1),[J,E0]=P.useState({x:0,y:0}),[M0,lr]=P.useState([]),[Nn,_r]=P.useState("#ffe08a"),[yr,Er]=P.useState(""),[Tn,En]=P.useState(!1),[w1,Ql]=P.useState(null),[_1,de]=P.useState(null),[k0,ir]=P.useState(null),[Mr,gA]=P.useState(()=>new Set),[jr,JA]=P.useState(()=>new Set),[Hn,xl]=P.useState(!0),[Ye,Zl]=P.useState("desc"),[O0,qt]=P.useState(210),[Z0,no]=P.useState(350),[he,ro]=P.useState(0),[j1,q8]=P.useState(!1),[HA,n5]=P.useState("#e31919"),[_e,r5]=P.useState("#ffd424"),[KA,e5]=P.useState("#000000"),[je,wl]=P.useState(0),[$e,_l]=P.useState(.5),[VA,jl]=P.useState(1),[eo,A5]=P.useState(!1),[Kn,$l]=P.useState(null),[zl,Ol]=P.useState(null),[$1,t5]=P.useState(null),[o5,Ao]=P.useState("grab"),[a5,z1]=P.useState(!1),[ze,O1]=P.useState(""),[WA,to]=P.useState([]),[q1,Oe]=P.useState(-1),[ql,Ce]=P.useState(!1),[Se,l5]=P.useState(2),[Mn,i5]=P.useState(1),[en,R5]=P.useState(1.5),[pe,c5]=P.useState(1.5),[qe,G5]=P.useState(1),[ni,s5]=P.useState(!1),[oo,u5]=P.useState("#ffffff"),[na,U5]=P.useState(!1),[ao,L5]=P.useState(!0),[ra,T5]=P.useState(!0),[nA,b5]=P.useState("background"),[ri,ei]=P.useState(!0),[Vn,f5]=P.useState({files:!0,export:!1,ranges:!1,layout:!0,tree:!0,tracks:!1,support:!1,options:!1}),ke=c=>f5(L=>({...L,[c]:!L[c]})),[Pr,v5]=P.useState(null);function y5(c){if(typeof c=="string")return/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(c)||/^rgb\(/i.test(c)?c:null;if(Array.isArray(c)&&c.length>=3){const[L,i,s]=c.map(T=>Number(T));if([L,i,s].every(T=>Number.isFinite(T))){const T=S=>Math.max(0,Math.min(255,Math.round(S))).toString(16).padStart(2,"0");return`#${T(L)}${T(i)}${T(s)}`}}return null}function ea(c){return c&&(c.startsWith("meta_")?c.slice(5):c)}const dr=P.useRef(null),bn=P.useRef(null),FA=P.useRef(!1),lo=P.useRef({x:0,y:0}),XA=P.useRef(!1),io=P.useRef([]),Ro=P.useRef([]),QA=P.useRef(!1),V0=P.useMemo(()=>a?vu(a,sn):null,[a,sn]),An=P.useMemo(()=>a?yu(a,!sn):null,[a,sn]),Ie=P.useMemo(()=>{if(!a)return new Float32Array(0);const{nodes:c,leaves:L}=a,i=L.length||1,s=new Float32Array(c.length);for(let T=0;T<c.length;T++){const S=c[T];s[T]=ra?pe*Math.max(.5,Math.pow((S.R-S.L)/i,.3)):pe}return s},[a,ra,pe]);P.useEffect(()=>{n&&n.text().then(c=>{o(c),Jn(1),U0(1),E0({x:0,y:0})})},[n]),P.useEffect(()=>{if(t)try{const c=Tu(t),L=jr.size>0?$8(c,jr)??c:c,i=bu(L);if(z8(i),Ye!=="none"&&O8(i,Ye),l(i),QA.current){QA.current=!1;const s=new Set;for(const S of io.current){const p=o4(i,S);p!==null&&s.add(p)}gA(s);const T=[];for(const S of Ro.current){const p=o4(i,S.fp);p!==null&&T.push({nodeId:p,color:S.color,label:S.label})}lr(T)}}catch(c){console.error("Failed to parse Newick:",c)}},[t,Ye,jr]),P.useEffect(()=>{ir(null),En(!1)},[jr]),P.useEffect(()=>{const c=new Map;for(const p of e)for(const Y of p.rows){const m=c.get(Y.id);m?Object.assign(m,Y):c.set(Y.id,{...Y})}G(c);const L=[],i=new Set;for(const p of e)for(const Y of p.columns)i.has(Y)||(i.add(Y),L.push(Y));const s=[...c.values()],T=new Map;for(const p of L){let Y=!0,m=-1/0;const V=new Set;for(const W of s){const D=W[p];if(!(D==null||D==="")){if(Y){const O=Number(D);isNaN(O)?Y=!1:O>m&&(m=O)}Y||V.add(D.toString())}}T.set(p,{isContinuous:Y,maxVal:m>0?m:1,cats:V})}b(p=>{const Y=new Map(p.map(m=>[m.key,m]));return L.map(m=>{const V=T.get(m),W=Y.get(m),D=V.isContinuous?"continuous":"categorical";return W&&W.type===D?W.type==="continuous"?{...W,maxVal:Math.max(W.maxVal??1,V.maxVal)}:W:V.isContinuous?{key:m,label:m,type:"continuous",height:20,maxVal:V.maxVal,visible:!0}:{key:m,label:m,type:"categorical",height:8,visible:!0}})}),E(p=>{var m;const Y=new Map;for(const V of L){const W=T.get(V);if(W.isContinuous)continue;const D=p.get(V),O=new Map;for(const b0 of W.cats){const L0=ea(Pr==null?void 0:Pr.defaultColorByField),K=Pr&&V===L0?y5((m=Pr.colorMapping)==null?void 0:m[b0]):null;O.set(b0,K??(D==null?void 0:D.get(b0))??Lu(b0))}Y.set(V,O)}return Y});const S=ea(Pr==null?void 0:Pr.defaultColorByField);y(p=>p&&i.has(p)?p:null),d(p=>p&&i.has(p.trackKey)?p:null),Ql(p=>{if(S&&i.has(S))return S;if(p&&i.has(p)){const Y=T.get(p);if(Y&&!Y.isContinuous)return p}for(const Y of L)if(!T.get(Y).isContinuous)return Y;return null}),S&&i.has(S)&&y(S)},[e,Pr]);const Ai=async c=>{try{const{rows:L,columns:i}=await Ja(c);A(s=>[...s,{name:c.name,rows:L,columns:i}])}catch(L){console.error("Failed to parse annotations:",L)}},ti=P.useCallback(async c=>{try{const L=await fetch(c);if(!L.ok)throw new Error(`HTTP ${L.status}`);const i=await L.text(),s=(()=>{try{const S=new URL(c,window.location.href).pathname.split("/").pop();return S?decodeURIComponent(S):"tree.nwk"}catch{return"tree.nwk"}})();r(new File([i],s||"tree.nwk",{type:"text/plain"}))}catch(L){console.error("Failed to load tree from URL:",L)}},[]),oi=P.useCallback(async(c,L)=>{try{const i=await fetch(c);if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.text(),T=(()=>{try{const V=new URL(c,window.location.href).pathname.split("/").pop();return V?decodeURIComponent(V):"metadata.csv"}catch{return"metadata.csv"}})(),S=new File([s],T||"metadata.csv",{type:"text/plain"}),{rows:p,columns:Y}=await Ja(S,L);A(m=>[...m,{name:S.name,rows:p,columns:Y}])}catch(i){console.error("Failed to load annotation metadata from URL:",i)}},[]);P.useEffect(()=>{const c=new URLSearchParams(window.location.search),L=c.get("treeUrl"),i=c.get("metaUrl"),s=c.get("metaIdField"),T=c.get("config");if(L&&ti(L),i&&oi(i,s??void 0),T)try{const S=JSON.parse(T);S&&typeof S=="object"&&v5({colorMapping:S.colorMapping??void 0,defaultColorByField:ea(S.defaultColorByField??void 0)})}catch(S){console.error("Failed to parse URL config:",S)}},[ti,oi]);const d5=c=>{A(L=>L.filter((i,s)=>s!==c))};function Ne(c){let L=un(c,Math.min(je,VA),Math.max(je,VA));if(L<=$e){const i=$e-je,s=i>0?(L-je)/i:0;return e4(HA,_e,s)}else{const i=VA-$e,s=i>0?(L-$e)/i:0;return e4(_e,KA,s)}}const $r=P.useCallback(()=>f?pR(u.filter(c=>c.visible),c=>c.height+Wn):0,[u,f]);function zr(c,L,i){const T=i+(Hn?At:0)+6;if(he>0&&sn)return(c-2*a0-T)/he;const S=Math.max(50,c-2*a0-T);return L>0?S/L:S}function Y5(c,L,i){return-c/2+a0+L*i+n0}function Or(c,L,i,s,T,S){const{coords:p,maxX:Y}=i,m=s;if(!f||p0==="manual"){const b0=m+n0;return{trackStartRadius:b0,trackOuterRadius:b0+S}}let V=0;const W=40;for(let b0=0;b0<a.leaves.length;b0++){const L0=a.leaves[b0],K=p[L0];if(!K)continue;const i0=Pn(Y>0?K.x/Y:0,K.y,T,s,O0,Z0),w=c/2+J.x+C*i0.x,j=L/2+J.y+C*i0.y;w<-W||w>c+W||j<-W||j>L+W||i0.radius>V&&(V=i0.radius)}const O=(V>0?V:m)+n0;return{trackStartRadius:O,trackOuterRadius:O+S}}function rA(c,L,i,s,T){const{coords:S,maxR:p}=i,Y=p*s;if(!f||p0==="manual"){const O=Y+n0;return{ringR:O,trackOuterRingR:O+T}}let m=0;const V=40;for(let O=0;O<a.leaves.length;O++){const b0=a.leaves[O],L0=S[b0];if(!L0)continue;const K=c/2+J.x+C*(L0.x*s),i0=L/2+J.y+C*(L0.y*s);if(K<-V||K>c+V||i0<-V||i0>L+V)continue;const w=Math.hypot(L0.x*s,L0.y*s);w>m&&(m=w)}const D=(m>0?m:Y)+n0;return{ringR:D,trackOuterRingR:D+T}}function h5(){var o0,T0;const c=dr.current,L=bn.current;if(!c||!L||!a)return;const i=c.getContext("2d"),s=L.clientWidth,T=L.clientHeight;(c.width!==s||c.height!==T)&&(c.width=s,c.height=T),i.fillStyle=oo,i.fillRect(0,0,s,T),i.save(),i.translate(s/2+J.x,T/2+J.y),s0==="rect"?i.scale(1,h0):i.scale(C,C);let S,p,Y,m;s0==="rect"?(S=-s/2-J.x,p=s/2-J.x,Y=(-T/2-J.y)/h0,m=(T/2-J.y)/h0):(S=(-s/2-J.x)/C,p=(s/2-J.x)/C,Y=(-T/2-J.y)/C,m=(T/2-J.y)/C);const V=10/(s0==="rect"?h0:C);function W(I,M){return I>=S-V&&I<=p+V&&M>=Y-V&&M<=m+V}const D=a.nodes,O=a.leaves,b0=a.root,L0=$r();if(!V0){i.restore();return}const{coords:K,height:i0,maxX:w}=V0,j=zr(s,w,L0),q=(T-2*a0)/Math.max(1,i0);let u0=0,f0=a.leaves.length;if(s0==="rect"){const I=(0-T/2-J.y)/h0,M=(T-T/2-J.y)/h0,N=(I+T/2-a0)/q,g=(M+T/2-a0)/q;u0=un(Math.floor(N)-1,0,a.leaves.length),f0=un(Math.ceil(g)+1,0,a.leaves.length),f0<u0&&([u0,f0]=[f0,u0])}const B0=Y5(s,j,w)+L0,y0=new Uint8Array(D.length);{const I=[b0];for(;I.length;){const M=I.pop();if(y0[M]===2)continue;const N=D[M];if(M!==b0&&Mr.has(M)){y0[M]=1;for(const g of N.children){const r0=[g];for(;r0.length;){const Q=r0.pop();y0[Q]=2;for(const z of D[Q].children)r0.push(z)}}continue}for(const g of N.children)I.push(g)}}const ln=new Map;if(nA==="branches"&&M0.length>0){const I=[...M0].sort((M,N)=>D[N.nodeId].R-D[N.nodeId].L-(D[M.nodeId].R-D[M.nodeId].L));for(const M of I){const N=[M.nodeId];for(;N.length;){const g=N.pop();ln.set(g,M.color);for(const r0 of D[g].children)N.push(r0)}}}const Q0=(I,M)=>ln.get(I)??(ao&&M!==void 0?Ne(M):"#333"),d0=()=>{if(Kn===null||Kn===k0||Tn)return;const I=D[Kn],M=K[I.id],N=-s/2+a0+j*M.x,g=-T/2+a0+q*I.L,r0=-T/2+a0+q*(I.R-1)+q,Q=i.createLinearGradient(N,0,B0,0);Q.addColorStop(0,"rgba(80,140,255,0.35)"),Q.addColorStop(1,"rgba(80,140,255,0.2)"),i.fillStyle=Q,i.fillRect(N,g,B0-N,r0-g);const z=i.createLinearGradient(-s/2,0,N,0);z.addColorStop(1,"rgba(80,140,255,0.06)"),z.addColorStop(0,"rgba(80,140,255,0.0)"),i.fillStyle=z,i.fillRect(-s/2,g,N- -s/2,r0-g)},v0=()=>{if(k0===null)return;const I=Tn?Nn:"#FF8200",[M,N,g]=Yt(I),r0=Tn?.55:.4,Q=Tn?.4:.25,z=D[k0],$=K[z.id],F=-s/2+a0+j*$.x,H=-T/2+a0+q*z.L,e0=-T/2+a0+q*(z.R-1)+q;i.shadowColor=`rgba(${M},${N},${g},0.5)`,i.shadowBlur=10;const Z=i.createLinearGradient(F,0,B0,0);Z.addColorStop(0,`rgba(${M},${N},${g},${r0})`),Z.addColorStop(1,`rgba(${M},${N},${g},${Q})`),i.fillStyle=Z,i.fillRect(F,H,B0-F,e0-H),i.shadowBlur=0,i.shadowColor="transparent";const x=i.createLinearGradient(-s/2,0,F,0);x.addColorStop(1,`rgba(${M},${N},${g},0.1)`),x.addColorStop(0,`rgba(${M},${N},${g},0.0)`),i.fillStyle=x,i.fillRect(-s/2,H,F- -s/2,e0-H),i.fillStyle=`rgba(${M},${N},${g},0.85)`,i.fillRect(F-1,H,2,e0-H)},F0=()=>{if(Kn===null||Kn===k0||Tn)return;const I=O.length||1,M=Math.min(s,T)*on,N=D[Kn],g=O0*Math.PI/180-N.L/I*(Z0*Math.PI/180),r0=O0*Math.PI/180-N.R/I*(Z0*Math.PI/180),Q=K[N.id],z=Pn(w>0?Q.x/w:0,Q.y,I,M,O0,Z0).radius,{trackOuterRadius:$}=Or(s,T,{coords:K,maxX:w},M,I,L0),F=8;for(let H=0;H<F;H++){const e0=H/F,Z=(H+1)/F,x=z+e0*($-z),c0=z+Z*($-z),G0=dt(.35,.2,e0);i.beginPath(),i.arc(0,0,c0,r0,g,!1),i.arc(0,0,x,g,r0,!0),i.closePath(),i.fillStyle=`rgba(80,140,255,${G0.toFixed(3)})`,i.fill()}},H0=()=>{if(k0===null)return;const I=Tn?Nn:"#FF8200",[M,N,g]=Yt(I),r0=Tn?.55:.4,Q=Tn?.4:.25,z=O.length||1,$=Math.min(s,T)*on,F=D[k0],H=O0*Math.PI/180-F.L/z*(Z0*Math.PI/180),e0=O0*Math.PI/180-F.R/z*(Z0*Math.PI/180),Z=K[F.id],x=Pn(w>0?Z.x/w:0,Z.y,z,$,O0,Z0).radius,{trackOuterRadius:c0}=Or(s,T,{coords:K,maxX:w},$,z,L0);i.shadowColor=`rgba(${M},${N},${g},0.5)`,i.shadowBlur=10;const G0=8;for(let P0=0;P0<G0;P0++){const g0=P0/G0,m0=(P0+1)/G0,X0=x+g0*(c0-x),$0=x+m0*(c0-x),fn=dt(r0,Q,g0);i.beginPath(),i.arc(0,0,$0,e0,H,!1),i.arc(0,0,X0,H,e0,!0),i.closePath(),i.fillStyle=`rgba(${M},${N},${g},${fn.toFixed(3)})`,i.fill()}i.shadowBlur=0,i.shadowColor="transparent"},Y0=()=>{if(Kn===null||Kn===k0||Tn||!An)return;const{coords:I,maxR:M}=An,N=Math.min(s,T)*on/(M||1),g=D[Kn],{ringR:r0}=rA(s,T,{coords:I,maxR:M},N,L0),Q=[];for(let $=g.L;$<g.R;$++){const F=O[$];Q.push([I[F].x*N,I[F].y*N]);const H=I[F].angle;Q.push([r0*Math.cos(H),r0*Math.sin(H)])}Q.push([I[g.id].x*N,I[g.id].y*N]);const z=mo(Q);if(z){i.beginPath(),i.moveTo(z[0][0],z[0][1]);for(let $=1;$<z.length;$++)i.lineTo(z[$][0],z[$][1]);i.closePath(),i.fillStyle="rgba(80,140,255,0.25)",i.fill()}},C0=()=>{if(k0===null||!An)return;const I=Tn?Nn:"#FF8200",[M,N,g]=Yt(I),r0=Tn?.45:.3,{coords:Q,maxR:z}=An,$=Math.min(s,T)*on/(z||1),F=D[k0],{ringR:H}=rA(s,T,{coords:Q,maxR:z},$,L0),e0=[];for(let x=F.L;x<F.R;x++){const c0=O[x];e0.push([Q[c0].x*$,Q[c0].y*$]);const G0=Q[c0].angle;e0.push([H*Math.cos(G0),H*Math.sin(G0)])}e0.push([Q[F.id].x*$,Q[F.id].y*$]);const Z=mo(e0);if(Z){i.beginPath(),i.moveTo(Z[0][0],Z[0][1]);for(let x=1;x<Z.length;x++)i.lineTo(Z[x][0],Z[x][1]);i.closePath(),i.shadowColor=`rgba(${M},${N},${g},0.5)`,i.shadowBlur=10,i.fillStyle=`rgba(${M},${N},${g},${r0})`,i.fill(),i.strokeStyle=`rgba(${M},${N},${g},0.7)`,i.lineWidth=1.5/C,i.stroke(),i.shadowBlur=0,i.shadowColor="transparent"}};function S0(){for(const I of M0){if(nA!=="background")continue;const M=D[I.nodeId],N=K[M.id],g=-s/2+a0+j*N.x,r0=-T/2+a0+q*M.L,Q=-T/2+a0+q*(M.R-1)+q;i.fillStyle=I.color+"55",i.fillRect(g,r0,B0-g,Q-r0)}for(const I of D){if(y0[I.id]===2||I.R<=u0||I.L>=f0)continue;const M=K[I.id],N=-s/2+a0+j*M.x,g=-T/2+a0+q*M.y;if(I.id!==b0&&y0[I.id]===0&&(I.R-I.L)*q*h0<en&&en>0)continue;if(y0[I.id]===1){const z=-T/2+a0+q*I.L,$=-T/2+a0+q*(I.R-1)+q,F=(z+$)/2,H=Math.min((I.R-I.L)*q*.4,60/h0);i.beginPath(),i.moveTo(N,F),i.lineTo(N+H,z),i.lineTo(N+H,$),i.closePath(),i.fillStyle="rgba(100,100,100,0.18)",i.fill(),i.strokeStyle="#666",i.lineWidth=1/h0,i.stroke();continue}I.id===b0&&(i.fillStyle="#000",i.beginPath(),i.arc(N,g,3/h0,0,2*Math.PI),i.fill());const r0=Q0(I.id,I.support),Q=Ie[I.id];for(const z of I.children){const $=K[z],F=-s/2+a0+j*$.x,H=-T/2+a0+q*$.y,e0=Q0(z,D[z].support),Z=Ie[z];if(Math.abs(H-g)*h0>=Do){i.fillStyle=r0;const x=Q;g<H?i.fillRect(N-x/2,g,x,H-g):i.fillRect(N-x/2,H,x,g-H)}if(Math.abs(F-N)>=Do){i.fillStyle=e0;const x=Z/h0;N<F?i.fillRect(N,H-x/2,F-N,x):i.fillRect(F,H-x/2,N-F,x)}i.beginPath(),i.ellipse(N,H,Q/2,Q/(2*Math.max(h0,.01)),0,0,2*Math.PI),i.fillStyle=r0,i.fill()}}}function D0(){const I=Math.min(s,T)*on,M=O.length||1,N=O0,g=Z0,{trackStartRadius:r0,trackOuterRadius:Q}=Or(s,T,{coords:K,maxX:w},I,M,L0);for(const H of M0){if(nA!=="background")continue;const e0=D[H.nodeId],Z=N*Math.PI/180-e0.L/M*(g*Math.PI/180),x=N*Math.PI/180-e0.R/M*(g*Math.PI/180),c0=K[e0.id],G0=Pn(w>0?c0.x/w:0,c0.y,M,I,N,g).radius;i.beginPath(),i.arc(0,0,Q,x,Z,!1),i.arc(0,0,Math.max(0,G0),Z,x,!0),i.closePath(),i.fillStyle=H.color+"55",i.fill()}i.fillStyle="#000",i.beginPath(),i.arc(0,0,3/C,0,2*Math.PI),i.fill();const z=(H,e0,Z)=>{let x=e0,c0=Z,G0=c0-x;G0>Math.PI?(c0-=2*Math.PI,G0=c0-x):G0<-Math.PI&&(c0+=2*Math.PI,G0=c0-x),i.arc(0,0,H,x,c0,G0<0)},$=g*Math.PI/180,F=M>0?$/M:0;i.lineCap="round",i.lineJoin="round";for(const H of D){if(y0[H.id]===2||H.id!==b0&&y0[H.id]===0&&(H.R-H.L)*F*Q*C<en&&en>0)continue;if(y0[H.id]===1){const G0=N*Math.PI/180-H.L/M*$,P0=N*Math.PI/180-H.R/M*$,g0=K[H.id],m0=Pn(w>0?g0.x/w:0,g0.y,M,I,N,g).radius,X0=m0+Math.min((H.R-H.L)*F*I*.4,40/C);i.beginPath(),i.arc(0,0,X0,P0,G0,!1),i.arc(0,0,Math.max(0,m0),G0,P0,!0),i.closePath(),i.fillStyle="rgba(100,100,100,0.18)",i.fill(),i.strokeStyle="#666",i.lineWidth=1/C,i.stroke();continue}const e0=K[H.id],Z=Pn(w>0?e0.x/w:0,e0.y,M,I,N,g);if(!W(Z.x,Z.y))continue;const x=Q0(H.id,H.support),c0=Ie[H.id]/C;for(const G0 of H.children){const P0=K[G0],g0=Pn(w>0?P0.x/w:0,P0.y,M,I,N,g);if(!W(Z.x,Z.y)&&!W(g0.x,g0.y))continue;const m0=Q0(G0,D[G0].support),X0=Ie[G0]/C;Z.radius>0&&(i.beginPath(),i.moveTo(Z.x,Z.y),z(Z.radius,Z.angle,g0.angle),i.strokeStyle=x,i.lineWidth=c0,i.stroke()),i.beginPath(),i.moveTo(Z.radius*Math.cos(g0.angle),Z.radius*Math.sin(g0.angle)),i.lineTo(g0.x,g0.y),i.strokeStyle=m0,i.lineWidth=X0,i.stroke()}}if(Hn){const H=r0+L0/C+6/C,e0=M>0?g*Math.PI/180/M:0,Z=H*e0*C;if(Z>=6){const x=Math.min(Math.floor(Z*.75*Mn),13*Mn);i.save(),i.font=`${x/C}px sans-serif`,i.textBaseline="middle";for(let c0=0;c0<O.length;c0++){const G0=O[c0];if(y0[G0]===2)continue;const P0=D[G0].name;if(!P0)continue;const g0=K[G0],{angle:m0}=Pn(w>0?g0.x/w:0,g0.y,M,I,N,g),X0=H*Math.cos(m0),$0=H*Math.sin(m0);if(!W(X0,$0))continue;i.fillStyle=ln.get(G0)??"#222",i.save(),i.translate(X0,$0),Math.cos(m0)>=0?(i.rotate(m0),i.textAlign="left"):(i.rotate(m0+Math.PI),i.textAlign="right"),i.fillText(P0,0,0),i.restore()}i.restore()}}}function N0(){var $;if(!An)return;const{coords:I,maxR:M}=An,N=Math.min(s,T)*on/(M||1),{ringR:g,trackOuterRingR:r0}=rA(s,T,{coords:I,maxR:M},N,L0),Q=O.length||1,z=Q>0?2*Math.PI/Q:0;i.lineCap="round",i.lineJoin="round";for(const F of D)if(y0[F.id]!==2&&!(F.id!==b0&&y0[F.id]===0&&(F.R-F.L)*z*r0*C<en&&en>0)){if(y0[F.id]===1){const H=I[F.id].x*N,e0=I[F.id].y*N,Z=Math.max(3,Math.min((F.R-F.L)*z*r0*.15,12))/C;i.beginPath(),i.arc(H,e0,Z,0,2*Math.PI),i.fillStyle="rgba(100,100,100,0.35)",i.fill(),i.strokeStyle="#666",i.lineWidth=Ie[F.id]/C,i.stroke();continue}for(const H of F.children){const e0=I[F.id].x*N,Z=I[F.id].y*N,x=I[H].x*N,c0=I[H].y*N;if(!W(e0,Z)&&!W(x,c0)||Math.hypot((x-e0)*C,(c0-Z)*C)<=r4)continue;const P0=D[H].support;i.beginPath(),i.moveTo(e0,Z),i.lineTo(x,c0),i.strokeStyle=Q0(H,P0),i.lineWidth=Ie[H]/C,i.stroke()}}if(f){const F=O.filter(H=>y0[H]!==2).slice().sort((H,e0)=>I[H].angle-I[e0].angle);if(F.length>0){const H=2*Math.PI/F.length;let e0=g;for(const Z of u){if(!Z.visible){e0+=Z.height+Wn;continue}const x=e0,c0=x+Z.height,G0=x*H*C,P0=Math.max(1,Math.floor(en/Math.max(G0,1e-9))),g0=new Map;for(let m0=0;m0<F.length;m0+=P0){const X0=F[m0],$0=F[(m0+P0)%F.length],fn=D[X0],mr=R.get(fn.name||""),Yr=mr?mr[Z.key]:void 0;if(Yr==null||Yr==="")continue;let Rr;if(Z.type==="categorical")Rr=(($=k.get(Z.key))==null?void 0:$.get(Yr.toString()))??"#aaa";else{const hi=Number(Yr);if(isNaN(hi))continue;Rr=`rgba(80,80,80,${(.1+Math.min(1,Math.max(0,hi/(Z.maxVal||1)))*.85).toFixed(2)})`}const Br=I[X0].angle,eA=I[$0].angle,ZA=eA>Br?eA:eA+2*Math.PI,Yi=(Br+ZA)/2;W(x*Math.cos(Yi),x*Math.sin(Yi))&&(g0.has(Rr)||g0.set(Rr,[]),g0.get(Rr).push([Br,ZA]))}for(const[m0,X0]of g0){i.fillStyle=m0,i.beginPath();for(const[$0,fn]of X0)i.moveTo(c0*Math.cos($0),c0*Math.sin($0)),i.arc(0,0,c0,$0,fn,!1),i.arc(0,0,x,fn,$0,!0),i.closePath();i.fill()}e0+=Z.height+Wn}}}if(Hn){const F=Q>0?2*Math.PI/Q:0,H=g*F*C;if(H>=6){const e0=Math.min(Math.floor(H*.75*Mn),13*Mn),Z=L0+n0+6/C;i.save(),i.font=`${e0/C}px sans-serif`,i.textBaseline="middle";for(const x of O){if(y0[x]===2)continue;const c0=D[x].name;if(!c0)continue;const G0=I[x].x*N,P0=I[x].y*N,g0=Math.hypot(G0,P0);if(g0<.001)continue;const m0=Math.atan2(P0,G0),X0=G0+Z*(G0/g0),$0=P0+Z*(P0/g0);if(!W(X0,$0))continue;i.fillStyle=ln.get(x)??"#222",i.save(),i.translate(X0,$0),Math.cos(m0)>=0?(i.rotate(m0),i.textAlign="left"):(i.rotate(m0+Math.PI),i.textAlign="right"),i.fillText(c0,0,0),i.restore()}i.restore()}}for(const F of M0){if(nA!=="background")continue;const H=D[F.nodeId];if(!H)continue;const e0=[];for(let x=H.L;x<H.R;x++){const c0=O[x],G0=I[c0];e0.push([G0.x*N,G0.y*N])}e0.push([I[H.id].x*N,I[H.id].y*N]);const Z=mo(e0);if(Z){F.hull=Z,i.beginPath(),i.moveTo(Z[0][0],Z[0][1]);for(let x=1;x<Z.length;x++)i.lineTo(Z[x][0],Z[x][1]);i.closePath(),i.fillStyle=F.color+"55",i.fill()}}}if(s0==="rect"?(S0(),d0(),v0()):s0==="circular"?(D0(),F0(),H0()):s0==="unrooted"&&(N0(),Y0(),C0()),i.restore(),s0==="circular"&&f&&L0>0&&V0){const I=Math.min(s,T)*on,M=O.length||1,N=Z0*Math.PI/180,g=M>0?N/M:0,r0=s/2+J.x,Q=T/2+J.y,{trackStartRadius:z}=Or(s,T,{coords:K,maxX:w},I,M,L0),$=z*C,F=$*g,H=F>0?Math.max(1,Math.floor(en/F)):1,e0=[];for(let Z=0;Z<O.length;Z+=H){const x=O[Z];if(y0[x]===2)continue;const c0=D[x],G0=K[x],{angle:P0}=Pn(w>0?G0.x/w:0,G0.y,M,I,O0,Z0),g0=r0+$*Math.cos(P0),m0=Q+$*Math.sin(P0);g0<-50||g0>s+50||m0<-50||m0>T+50||e0.push({a:P0,row:R.get(c0.name||"")})}if(e0.sort((Z,x)=>Z.a-x.a),e0.length>0){const Z=Z0<360?1.5*(N/e0.length):1/0;i.save(),i.translate(r0,Q);let x=$;for(const c0 of u){if(!c0.visible){x+=c0.height+Wn;continue}const G0=x,P0=G0+c0.height,g0=new Map;for(let m0=0;m0<e0.length;m0++){const{a:X0,row:$0}=e0[m0],fn=e0[(m0+1)%e0.length].a,mr=fn>X0?fn:fn+2*Math.PI;if(mr-X0>Z)continue;const Yr=X0+(mr-X0)*qe,Rr=$0?$0[c0.key]:void 0;if(Rr==null||Rr==="")continue;let Br,eA=G0;if(c0.type==="categorical")Br=((o0=k.get(c0.key))==null?void 0:o0.get(Rr.toString()))??"#aaa";else{const ZA=Number(Rr);if(isNaN(ZA))continue;eA=G0+Math.min(1,Math.max(0,ZA/(c0.maxVal||1)))*(P0-G0),Br="#666"}g0.has(Br)||g0.set(Br,[]),g0.get(Br).push([X0,Yr,eA])}for(const[m0,X0]of g0){i.fillStyle=m0,i.beginPath();for(const[$0,fn,mr]of X0)i.moveTo(P0*Math.cos($0),P0*Math.sin($0)),i.arc(0,0,P0,$0,fn,!1),i.arc(0,0,mr,fn,$0,!0),i.closePath();i.fill()}x+=c0.height+Wn}i.restore()}}if(s0==="rect"){const I=Hn?At:0,M=s-a0-L0-I,N=s-a0-I+4,g=q*h0;if(f&&L0>0){const r0=g>0?Math.max(1,Math.floor(en/g)):1,Q=Math.max(g*qe,1);for(let z=u0;z<f0;z+=r0){const $=O[z];if(y0[$]===2)continue;const F=T/2+J.y+h0*(-T/2+a0+q*z),H=D[$],e0=R.get(H.name||"");let Z=M;for(const x of u){if(!x.visible){Z+=x.height+Wn;continue}const c0=e0?e0[x.key]:void 0;if(c0==null||c0===""){Z+=x.height+Wn;continue}if(x.type==="categorical"){const G0=((T0=k.get(x.key))==null?void 0:T0.get(c0.toString()))??"#aaa";i.fillStyle=G0,i.fillRect(Z,F-Q/2,x.height,Q)}else{const G0=Number(c0);if(!isNaN(G0)){const P0=G0/(x.maxVal||1)*x.height;i.fillStyle="#666",i.fillRect(Z,F-Q/2,P0,Q)}}Z+=x.height+Wn}}}if(Hn&&g>=6){const r0=Math.min(Math.floor(g*.75*Mn),13*Mn);i.save(),i.font=`${r0}px sans-serif`,i.textAlign="left",i.textBaseline="middle";for(let Q=u0;Q<f0;Q++){const z=O[Q];if(y0[z]===2)continue;const $=D[z].name;if(!$)continue;const F=T/2+J.y+h0*(-T/2+a0+q*Q);i.fillStyle=ln.get(z)??"#222",i.fillText($,N,F)}i.restore()}if(na){const r0=Math.min(Math.max(Math.floor(g*1.5*Mn),8),11);i.save(),i.font=`${r0}px sans-serif`,i.textAlign="left",i.textBaseline="bottom";for(const Q of D){if(y0[Q.id]===2||y0[Q.id]===1||Q.support===void 0||Q.children.length===0||Q.id!==b0&&(Q.R-Q.L)*g<en&&en>0)continue;const z=K[Q.id],$=a0+j*z.x+J.x,F=T/2+J.y+h0*(-T/2+a0+q*z.y);if(F<-r0||F>T+r0||$<0||$>s)continue;const H=eo?Q.support.toFixed(0):Q.support.toFixed(2);i.fillStyle=ao?Ne(Q.support):"#555",i.fillText(H,$+3,F)}i.restore()}}if(sn){let I=0;if(s0==="rect")I=zr(s,w,L0);else{const M=Math.min(s,T)*on;I=(s0==="unrooted"&&An?M/(An.maxR||1):M/(w||1))*C}if(I>0){const M=100/I,N=Math.pow(10,Math.floor(Math.log10(M))),g=[1,2,5,10];let r0=N;for(const F of g){const H=N*F;if(H*I>=50&&H*I<=200){r0=H;break}}const Q=r0*I,z=16,$=T-24;i.save(),i.strokeStyle="#333",i.lineWidth=2,i.beginPath(),i.moveTo(z,$),i.lineTo(z+Q,$),i.moveTo(z,$-5),i.lineTo(z,$+5),i.moveTo(z+Q,$-5),i.lineTo(z+Q,$+5),i.stroke(),i.fillStyle="#333",i.font="11px sans-serif",i.textAlign="center",i.textBaseline="top",i.fillText(r0<.01?r0.toExponential(1):r0<1?r0.toPrecision(2):String(r0),z+Q/2,$+7),i.restore()}}}P.useEffect(()=>{h5()},[a,R,s0,sn,h0,C,J,M0,he,HA,_e,KA,je,$e,VA,eo,Kn,k0,O0,Z0,u,f,k,n0,p0,Tn,Nn,Mr,Hn,Mn,en,Ie,qe,oo,na,ao,nA]);function ai(c,L){if(!a)return{idx:0,inGap:!0};const i=O0*Math.PI/180,s=Z0*Math.PI/180,T=i-s;let S=Math.atan2(L,c);i<T||S<T%(2*Math.PI)&&(S+=2*Math.PI);let p=!1;(S>i||S<T)&&(p=!0);let Y=i-S;for(;Y<0;)Y+=2*Math.PI;return Y=Y%(2*Math.PI)/s,p&&(Y=-1),{idx:un(Math.floor(Y*a.leaves.length),0,a.leaves.length-1),inGap:p}}function li(c,L,i,s){if(!a||!V0)return null;const T=$r(),{coords:S,height:p,maxX:Y}=V0,m=zr(i,Y,T),V=(s-2*a0)/Math.max(1,p),W=a.leaves.length||1;for(let D=M0.length-1;D>=0;D--){const O=M0[D],b0=a.nodes[O.nodeId];if(b0){if(s0==="rect"){const L0=S[b0.id],K=-i/2+a0+m*L0.x,i0=-s/2+a0+V*b0.L,w=-s/2+a0+V*(b0.R-1)+V,j=-i/2+a0+m*Y;if(c>=K&&c<=j&&L>=i0&&L<=w)return{range:O,index:D}}else if(s0==="circular"){const L0=Math.min(i,s)*on,{trackOuterRadius:K}=Or(i,s,{coords:S,maxX:Y},L0,W,T),i0=Math.hypot(c,L),w=Math.atan2(L,c),j=O0*Math.PI/180-b0.L/W*(Z0*Math.PI/180),q=O0*Math.PI/180-b0.R/W*(Z0*Math.PI/180),u0=S[b0.id],f0=Pn(Y>0?u0.x/Y:0,u0.y,W,L0,O0,Z0).radius;if((q<j?w<=j&&w>=q:w<=j||w>=q)&&i0>=f0&&i0<=K)return{range:O,index:D}}else if(s0==="unrooted"){const L0=O.hull;if(L0&&Uu([c,L],L0))return{range:O,index:D}}}}return null}function ii(c,L,i,s){if(!a||!V0)return null;const{coords:T,height:S,maxX:p}=V0,Y=$r(),m=zr(i,p,Y),V=(s-2*a0)/Math.max(1,S);if(s0==="rect"){const W=un(Math.round((L+s/2-a0)/V),0,a.leaves.length-1),D=a.leaves[W],O=c+i/2+J.x,b0=Hn?At:0,L0=i-a0-Y-b0;if(f&&O>L0&&O<i-a0+6)return D;let K=D;const i0=[];for(;K!=null;)i0.push(K),K=a.nodes[K].parent;let w=null,j=1/0;for(const q of i0){const u0=T[q],f0=Math.hypot(c-(-i/2+a0+m*u0.x),L-(-s/2+a0+V*u0.y));f0<j&&(j=f0,w=q)}return j<=18?w:null}else if(s0==="circular"){const W=Math.min(i,s)*on,D=a.leaves.length||1,{trackStartRadius:O,trackOuterRadius:b0}=Or(i,s,{coords:T,maxX:p},W,D,Y),L0=Math.hypot(c,L);if(L0<4||L0>b0+80)return null;const{idx:K,inGap:i0}=ai(c,L);if(i0)return null;const w=a.leaves[K];if(f&&L0>O&&L0<b0+6)return w;let j=w;const q=[];for(;j!=null;)q.push(j),j=a.nodes[j].parent;let u0=null,f0=1/0;for(const I0 of q){const B0=T[I0],y0=Pn(p>0?B0.x/p:0,B0.y,D,W,O0,Z0),ln=Math.hypot(c-y0.x,L-y0.y);ln<f0&&(f0=ln,u0=I0)}return f0<=18/C?u0:null}else{if(!An)return null;const{coords:W,maxR:D}=An,O=Math.min(i,s)*on/(D||1),{ringR:b0,trackOuterRingR:L0}=rA(i,s,{coords:W,maxR:D},O,Y),K=Math.hypot(c,L);if(f&&K>b0&&K<L0+6){const j=Math.atan2(L,c);let q=1/0,u0=null;for(const f0 of a.leaves){let I0=j-W[f0].angle;for(;I0>Math.PI;)I0-=2*Math.PI;for(;I0<-Math.PI;)I0+=2*Math.PI;Math.abs(I0)<q&&(q=Math.abs(I0),u0=f0)}if(u0!==null&&q<Math.PI/a.leaves.length*1.5)return u0}let i0=null,w=1/0;for(const j of a.nodes){const q=Math.hypot(c-W[j.id].x*O,L-W[j.id].y*O);q<w&&(w=q,i0=j.id)}return w<=20/C?i0:null}}function C5(c){if(!a||!V0)return;const L=dr.current,i=bn.current,s=L.getBoundingClientRect(),T=c.clientX-s.left,S=c.clientY-s.top,p=i.clientWidth,Y=i.clientHeight,m=s0==="rect"?T-p/2-J.x:(T-p/2-J.x)/C,V=s0==="rect"?(S-Y/2-J.y)/h0:(S-Y/2-J.y)/C;let W=null,D=!1;const O=$r(),{coords:b0,height:L0,maxX:K}=V0,i0=(Y-2*a0)/Math.max(1,L0);if(s0==="rect"){const j=Hn?At:0,q=p-a0-O-j;if(T>q-12&&T<p-a0+20&&f){const u0=un(Math.round((V+Y/2-a0)/i0),0,a.leaves.length-1),f0=a.leaves[u0];D=!0;const I0=a.nodes[f0].name||"",B0=R.get(I0);if(W=I0,B0)for(const y0 of u)y0.visible&&(W+=`
${y0.key}: ${B0[y0.key]||"N/A"}`)}}else if(s0==="circular"){const j=Math.min(p,Y)*on,q=a.leaves.length||1,{trackStartRadius:u0,trackOuterRadius:f0}=Or(p,Y,{coords:b0,maxX:K},j,q,O),I0=Math.hypot(m,V);if(f&&I0>u0-12&&I0<f0+20){const{idx:B0,inGap:y0}=ai(m,V);if(!y0){D=!0;const ln=a.leaves[B0],Q0=a.nodes[ln].name||"",d0=R.get(Q0);if(W=Q0,d0)for(const v0 of u)v0.visible&&(W+=`
${v0.key}: ${d0[v0.key]||"N/A"}`)}}}else if(s0==="unrooted"&&An){const{coords:j,maxR:q}=An,u0=Math.min(p,Y)*on/(q||1),{ringR:f0,trackOuterRingR:I0}=rA(p,Y,{coords:j,maxR:q},u0,O),B0=Math.hypot(m,V);if(f&&B0>f0-12&&B0<I0+20){const y0=Math.atan2(V,m);let ln=1/0,Q0=null;for(const d0 of a.leaves){let v0=y0-j[d0].angle;for(;v0>Math.PI;)v0-=2*Math.PI;for(;v0<-Math.PI;)v0+=2*Math.PI;Math.abs(v0)<ln&&(ln=Math.abs(v0),Q0=d0)}if(Q0!==null&&ln<Math.PI/a.leaves.length*1.5){D=!0;const d0=a.nodes[Q0].name||"",v0=R.get(d0);if(W=d0,v0)for(const F0 of u)F0.visible&&(W+=`
${F0.key}: ${v0[F0.key]||"N/A"}`)}}}const w=ii(m,V,p,Y);if($l(w),w!==null&&(D=!0),W===null&&w!=null&&w!==k0){const j=a.nodes[w];let u0=`${j.leaves??j.R-j.L} leaves
Branch: ${j.length.toFixed(4)}`;if(j.support!==void 0&&(u0+=`
Support: ${j.support}`),j.isLeaf){const f0=j.name||"",I0=R.get(f0);if(W=f0,I0&&f)for(const B0 of u)B0.visible&&(W+=`
${B0.key}: ${I0[B0.key]||"N/A"}`);W+=`
`+u0}else W=u0}if(W===null){const j=li(m,V,p,Y);j!=null&&j.range.label&&(W=j.range.label,D=!0)}Ao(D?"pointer":FA.current?"grabbing":"grab"),t5({x:T,y:S}),Ol(W)}function S5(c){if(!a||XA.current){XA.current=!1;return}Tn&&(En(!1),de(null));const L=dr.current,i=bn.current,s=L.getBoundingClientRect(),T=c.clientX-s.left,S=c.clientY-s.top,p=i.clientWidth,Y=i.clientHeight,m=s0==="rect"?T-p/2-J.x:(T-p/2-J.x)/C,V=s0==="rect"?(S-Y/2-J.y)/h0:(S-Y/2-J.y)/C,W=ii(m,V,p,Y);W===k0?(ir(null),En(!1)):(ir(W),En(!1))}function p5(c){if(!a)return;const L=dr.current,i=bn.current,s=L.getBoundingClientRect(),T=c.clientX-s.left,S=c.clientY-s.top,p=i.clientWidth,Y=i.clientHeight,m=s0==="rect"?T-p/2-J.x:(T-p/2-J.x)/C,V=s0==="rect"?(S-Y/2-J.y)/h0:(S-Y/2-J.y)/C,W=li(m,V,p,Y);W&&(ir(W.range.nodeId),_r(W.range.color),Er(W.range.label||""),de(W.index),En(!0))}function k5(c){XA.current=!1,FA.current=!0,lo.current={x:c.clientX,y:c.clientY},Ao("grabbing")}function I5(){FA.current=!1,Ao(Kn!==null?"pointer":"grab")}function N5(){FA.current=!1,Ol(null),$l(null),Ao("grab")}function E5(c){if(C5(c),!FA.current)return;XA.current||(En(!1),de(null)),XA.current=!0;const L=c.clientX-lo.current.x,i=c.clientY-lo.current.y;lo.current={x:c.clientX,y:c.clientY},E0(s=>({x:s.x+L,y:s.y+i}))}const Ri=P.useCallback(c=>{if(c.preventDefault(),!dr.current||!bn.current)return;const L=dr.current.getBoundingClientRect(),i=bn.current.clientWidth,s=bn.current.clientHeight;let T=c.clientX-L.left,S=c.clientY-L.top;if(a&&k0!==null){if(s0==="rect"&&V0){const{coords:p,height:Y,maxX:m}=V0,V=zr(i,m,$r()),W=(s-2*a0)/Math.max(1,Y),D=p[k0];D&&(T=i/2+J.x+(-i/2+a0+V*D.x),S=s/2+J.y+h0*(-s/2+a0+W*D.y))}else if(s0==="circular"&&V0){const{coords:p,maxX:Y}=V0,m=Math.min(i,s)*on,V=a.leaves.length||1,W=p[k0];if(W){const D=Pn(Y>0?W.x/Y:0,W.y,V,m,O0,Z0);T=i/2+J.x+C*D.x,S=s/2+J.y+C*D.y}}else if(s0==="unrooted"&&An){const{coords:p,maxR:Y}=An,m=Math.min(i,s)*on/(Y||1),V=p[k0];V&&(T=i/2+J.x+C*V.x*m,S=s/2+J.y+C*V.y*m)}}if(s0==="rect"){const p=Math.max(.01,h0*(c.deltaY<0?1.1:.9)),Y=(S-s/2-J.y)/h0,m=S-s/2-p*Y;let V=J.x;if(!j1&&sn&&V0&&a){const{coords:W,height:D}=V0,O=si(p,{y:m},i,s,a,W,D);if(O){const b0=O.span>0?O.span:O.maxVisibleX;ro(b0),V=Gi(i,b0,O.localRootX,a0)}}E0({x:V,y:m}),Jn(p)}else{const p=Math.max(.01,C*(c.deltaY<0?1.1:.9)),Y=(T-i/2-J.x)/C,m=(S-s/2-J.y)/C;E0({x:T-i/2-p*Y,y:S-s/2-p*m}),U0(p)}},[s0,h0,C,J.x,J.y,V0,An,a,k0,he,sn,O0,Z0,j1]);P.useEffect(()=>{const c=dr.current;if(!c)return;const L=i=>Ri(i);return c.addEventListener("wheel",L,{passive:!1}),()=>c.removeEventListener("wheel",L)},[Ri]);const co=c=>{const L=dr.current;if(!L)return;const i=L.getBoundingClientRect(),s=i.width,T=i.height;let S=s/2,p=T/2;if(a&&k0!==null){if(s0==="rect"&&V0){const{coords:Y,height:m,maxX:V}=V0,W=zr(s,V,$r()),D=(T-2*a0)/Math.max(1,m),O=Y[k0];O&&(S=s/2+J.x+(-s/2+a0+W*O.x),p=T/2+J.y+h0*(-T/2+a0+D*O.y))}else if(s0==="circular"&&V0){const{coords:Y,maxX:m}=V0,V=Math.min(s,T)*on,W=a.leaves.length||1,D=Y[k0];if(D){const O=Pn(m>0?D.x/m:0,D.y,W,V,O0,Z0);S=s/2+J.x+C*O.x,p=T/2+J.y+C*O.y}}else if(s0==="unrooted"&&An){const{coords:Y,maxR:m}=An,V=Math.min(s,T)*on/(m||1),W=Y[k0];W&&(S=s/2+J.x+C*W.x*V,p=T/2+J.y+C*W.y*V)}}if(s0==="rect"){const Y=Math.max(.01,h0*c),m=(p-T/2-J.y)/h0;E0(V=>({x:V.x,y:p-T/2-Y*m})),Jn(Y)}else{const Y=Math.max(.01,C*c),m=(S-s/2-J.x)/C,V=(p-T/2-J.y)/C;E0({x:S-s/2-Y*m,y:p-T/2-Y*V}),U0(Y)}},M5=()=>co(1.2),P5=()=>co(1/1.2),m5=()=>{E0({x:0,y:0}),Jn(1),U0(1)},ci=P.useRef(()=>{});ci.current=c=>{const L=c.target.tagName;L==="INPUT"||L==="TEXTAREA"||L==="SELECT"||(c.key==="+"||c.key==="="?(c.preventDefault(),co(1.2)):c.key==="-"||c.key==="_"?(c.preventDefault(),co(1/1.2)):c.key==="f"||c.key==="F"?(c.preventDefault(),E0({x:0,y:0}),Jn(1),U0(1)):c.key==="Escape"?(c.preventDefault(),ir(null),En(!1)):(c.key==="r"||c.key==="R")&&k0!==null&&a?(c.preventDefault(),Ui()):(c.key==="c"||c.key==="C")&&k0!==null?(c.preventDefault(),fi()):c.key==="Enter"&&Tn&&(c.preventDefault(),Aa()))},P.useEffect(()=>{const c=L=>ci.current(L);return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[]);function Gi(c,L,i,s=a0){const T=c-2*s;return-(L>0?T/L:T)*i}function si(c,L,i,s,T,S,p){var q;const Y=(s-2*a0)/Math.max(1,p),m=(0-s/2-L.y)/c,V=(s-s/2-L.y)/c;let W=un(Math.floor((m+s/2-a0)/Y)-1,0,T.leaves.length),D=un(Math.ceil((V+s/2-a0)/Y)+1,0,T.leaves.length);D<W&&([W,D]=[D,W]);let O=0;for(let u0=W;u0<D;u0++){const f0=S[T.leaves[u0]];f0&&f0.x>O&&(O=f0.x)}if(T.leaves.length===0)return{visibleStart:W,visibleEnd:D,localRootX:0,maxVisibleX:0,span:0};const b0=T.leaves[un(W,0,T.leaves.length-1)],L0=T.leaves[un(D-1,0,T.leaves.length-1)];function K(u0,f0){const I0=T.nodes[f0].leafIndex;let B0=u0;for(;B0!=null;){const y0=T.nodes[B0];if(y0.L<=I0&&I0<y0.R)return B0;B0=y0.parent}return T.root}const i0=K(b0,L0),w=((q=S[i0])==null?void 0:q.x)??0,j=Math.max(0,O-w);return{visibleStart:W,visibleEnd:D,localRootX:w,maxVisibleX:O,span:j}}const ui=(c,L)=>{const i=[...u],s=L==="up"?c-1:c+1;s<0||s>=i.length||([i[c],i[s]]=[i[s],i[c]],b(i))},Go=(c,L,i)=>{const s=[...u],T={...s[c]};L==="type"&&(T.type=i),L==="height"&&(T.height=un(Number(i)||0,1,100)),L==="visible"&&(T.visible=!!i),L==="label"&&(T.label=String(i)),s[c]=T,b(s)},B5=c=>{if(!v)return;const{trackKey:L,category:i}=v;E(s=>{const T=new Map(s),S=new Map(T.get(L));return S.set(i,c),T.set(L,S),T})},D5=(c,L)=>{const i=Ha.find(s=>s.name===L);i&&E(s=>{const T=new Map(s),S=T.get(c);if(!S)return s;const p=new Map;let Y=0;for(const m of S.keys())p.set(m,i.colors[Y%i.colors.length]),Y++;return T.set(c,p),T})};R0&&k.get(R0);const Ui=()=>{k0===null||!a||(t4(a,k0,Ye),E0({x:0,y:0}),Jn(1),U0(1),l({...a}),En(!1))},Li=P.useRef(null),Ti=P.useRef(null),bi=P.useRef(null),g5=()=>{var O,b0,L0;if(!a||!bn.current)return;const c=bn.current,L=c.clientWidth,i=c.clientHeight,s=K=>K.toFixed(2),T=K=>K.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),S=new Uint8Array(a.nodes.length);{const K=[a.root];for(;K.length;){const i0=K.pop();if(S[i0]===2)continue;const w=a.nodes[i0];if(i0!==a.root&&Mr.has(i0)){S[i0]=1;const j=[...w.children];for(;j.length;){const q=j.pop();S[q]=2;for(const u0 of a.nodes[q].children)j.push(u0)}continue}for(const j of w.children)K.push(j)}}const p=$r(),Y=[];Y.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${i}" viewBox="0 0 ${L} ${i}">`),Y.push('<rect width="100%" height="100%" fill="white"/>');const m=20,V=(K,i0)=>K>=-m&&K<=L+m&&i0>=-m&&i0<=i+m;if(s0==="rect"&&V0){const{coords:K,height:i0,maxX:w}=V0,j=zr(L,w,p),q=(i-2*a0)/Math.max(1,i0),u0=Hn?At:0,f0=L-a0-p-u0,I0=L-a0-u0+4,B0=q*h0,y0=L/2+J.x,ln=i/2+J.y,Q0=o0=>y0+(-L/2+a0+j*o0),d0=o0=>ln+h0*(-i/2+a0+q*o0),v0=pe,F0=(0-i/2-J.y)/h0,H0=(i-i/2-J.y)/h0,Y0=un(Math.floor((F0+i/2-a0)/q)-1,0,a.leaves.length),C0=un(Math.ceil((H0+i/2-a0)/q)+1,0,a.leaves.length);Y.push('<g id="ranges">');for(const o0 of M0){const T0=a.nodes[o0.nodeId],I=K[T0.id],M=Q0(I.x),N=d0(T0.L),g=d0(T0.R-1)+B0;Y.push(`<rect x="${s(M)}" y="${s(N)}" width="${s(L-M)}" height="${s(g-N)}" fill="${o0.color}" opacity="0.33"/>`)}Y.push("</g>");const S0=new Map,D0=new Map;for(const o0 of a.nodes){if(S[o0.id]===2||o0.R<=Y0||o0.L>=C0||o0.id!==a.root&&S[o0.id]===0&&(o0.R-o0.L)*q*h0<en&&en>0)continue;const T0=K[o0.id],I=Q0(T0.x),M=d0(T0.y),N=o0.support!==void 0?Ne(o0.support):"#333";for(const g of o0.children){if(S[g]===2)continue;const r0=K[g],Q=Q0(r0.x),z=d0(r0.y),$=a.nodes[g].support!==void 0?Ne(a.nodes[g].support):"#333",F=Math.abs(z-M);F>=Do&&(S0.has(N)||S0.set(N,[]),S0.get(N).push(`M ${s(I)},${s(Math.min(M,z))} v ${s(F)}`));const H=Math.abs(Q-I);H>=Do&&(D0.has($)||D0.set($,[]),D0.get($).push(`M ${s(Math.min(I,Q))},${s(z)} h ${s(H)}`))}}Y.push('<g id="branches">');for(const[o0,T0]of S0)Y.push(`<path stroke="${o0}" stroke-width="${s(v0)}" fill="none" d="${T0.join(" ")}"/>`);const N0=s(v0/h0);for(const[o0,T0]of D0)Y.push(`<path stroke="${o0}" stroke-width="${N0}" fill="none" d="${T0.join(" ")}"/>`);if(Y.push("</g>"),f&&p>0){const o0=B0>0?Math.max(1,Math.floor(en/B0)):1,T0=Math.max(B0*qe*o0,1);Y.push('<g id="annotations">');let I=f0;for(const M of u){if(!M.visible){I+=M.height+Wn;continue}const N=new Map;for(let g=0;g<a.leaves.length;g+=o0){const r0=a.leaves[g];if(S[r0]===2)continue;const Q=i/2+J.y+h0*(-i/2+a0+q*g);if(Q+T0/2<0||Q-T0/2>i)continue;const z=R.get(a.nodes[r0].name||""),$=z?z[M.key]:void 0;if($==null||$==="")continue;let F,H;if(M.type==="categorical")F=((O=k.get(M.key))==null?void 0:O.get($.toString()))??"#aaa",H=M.height;else{const e0=Number($);if(isNaN(e0))continue;F="#666",H=e0/(M.maxVal||1)*M.height}N.has(F)||N.set(F,[]),N.get(F).push(`M ${s(I)},${s(Q-T0/2)} h ${s(H)} v ${s(T0)} h ${s(-H)} Z`)}for(const[g,r0]of N)Y.push(`<path fill="${g}" d="${r0.join(" ")}"/>`);I+=M.height+Wn}Y.push("</g>")}if(Hn&&B0>=6){const o0=Math.min(Math.floor(B0*.75*Mn),13*Mn);Y.push(`<g id="labels" font-family="sans-serif" font-size="${s(o0)}" fill="#222" dominant-baseline="middle">`);for(let T0=Y0;T0<C0;T0++){const I=a.leaves[T0];if(S[I]===2)continue;const M=a.nodes[I].name;if(!M)continue;const N=i/2+J.y+h0*(-i/2+a0+q*T0);N<0||N>i||Y.push(`<text x="${s(I0)}" y="${s(N)}">${T(M)}</text>`)}Y.push("</g>")}}else if(s0==="circular"&&V0){const{coords:K,maxX:i0}=V0,w=Math.min(L,i)*on,j=a.leaves.length||1,q=O0,u0=Z0,f0=L/2+J.x,I0=i/2+J.y,B0=Y0=>({x:f0+C*Y0.x,y:I0+C*Y0.y}),y0=Y0=>{const C0=K[Y0];return Pn(i0>0?C0.x/i0:0,C0.y,j,w,q,u0)},{trackStartRadius:ln,trackOuterRadius:Q0}=Or(L,i,{coords:K,maxX:i0},w,j,p),d0=u0*Math.PI/180,v0=j>0?d0/j:0,F0=pe;Y.push('<g id="ranges">');for(const Y0 of M0){const C0=a.nodes[Y0.nodeId],S0=q*Math.PI/180-C0.L/j*d0,D0=q*Math.PI/180-C0.R/j*d0,N0=y0(C0.id).radius*C,o0=Q0*C,T0=S0-D0>Math.PI?1:0,[I,M]=[f0+o0*Math.cos(D0),I0+o0*Math.sin(D0)],[N,g]=[f0+o0*Math.cos(S0),I0+o0*Math.sin(S0)],[r0,Q]=[f0+N0*Math.cos(S0),I0+N0*Math.sin(S0)],[z,$]=[f0+N0*Math.cos(D0),I0+N0*Math.sin(D0)];Y.push(`<path fill="${Y0.color}" opacity="0.33" d="M ${s(I)},${s(M)} A ${s(o0)},${s(o0)} 0 ${T0},1 ${s(N)},${s(g)} L ${s(r0)},${s(Q)} A ${s(N0)},${s(N0)} 0 ${T0},0 ${s(z)},${s($)} Z"/>`)}Y.push("</g>");const H0=new Map;for(const Y0 of a.nodes){if(S[Y0.id]===2||Y0.id!==a.root&&S[Y0.id]===0&&(Y0.R-Y0.L)*v0*Q0*C<en&&en>0)continue;const C0=y0(Y0.id),S0=B0(C0);if(!V(S0.x,S0.y))continue;const D0=Y0.support!==void 0?Ne(Y0.support):"#333";for(const N0 of Y0.children){if(S[N0]===2)continue;const o0=y0(N0),T0=B0(o0);if(!V(S0.x,S0.y)&&!V(T0.x,T0.y))continue;const I=a.nodes[N0].support!==void 0?Ne(a.nodes[N0].support):"#333";if(C0.radius>0){let M=o0.angle-C0.angle;M>Math.PI?M-=2*Math.PI:M<-Math.PI&&(M+=2*Math.PI);const N=M>=0?1:0,g=C0.radius*C,r0=f0+g*Math.cos(o0.angle),Q=I0+g*Math.sin(o0.angle);H0.has(D0)||H0.set(D0,[]),H0.get(D0).push(`M ${s(S0.x)},${s(S0.y)} A ${s(g)},${s(g)} 0 0,${N} ${s(r0)},${s(Q)}`),H0.has(I)||H0.set(I,[]),H0.get(I).push(`M ${s(r0)},${s(Q)} L ${s(T0.x)},${s(T0.y)}`)}else H0.has(I)||H0.set(I,[]),H0.get(I).push(`M ${s(S0.x)},${s(S0.y)} L ${s(T0.x)},${s(T0.y)}`)}}Y.push('<g id="branches">');for(const[Y0,C0]of H0)Y.push(`<path stroke="${Y0}" stroke-width="${s(F0)}" fill="none" d="${C0.join(" ")}"/>`);if(Y.push("</g>"),f){const Y0=Q0*v0*C,C0=Y0>0?Math.max(1,Math.floor(en/Y0)):1,S0=[];for(let D0=0;D0<a.leaves.length;D0+=C0){const N0=a.leaves[D0];if(S[N0]===2)continue;const{angle:o0}=y0(N0);S0.push({a:o0,row:R.get(a.nodes[N0].name||"")})}if(S0.sort((D0,N0)=>D0.a-N0.a),Y.push('<g id="annotations">'),S0.length>0){const D0=u0<360?1.5*(d0/S0.length):1/0;let N0=ln;for(const o0 of u){if(!o0.visible){N0+=o0.height+Wn;continue}const T0=N0*C,I=(N0+o0.height)*C,M=new Map;for(let N=0;N<S0.length;N++){const{a:g,row:r0}=S0[N],Q=S0[(N+1)%S0.length].a,z=Q>g?Q:Q+2*Math.PI;if(z-g>D0)continue;const $=g+(z-g)*qe,F=r0?r0[o0.key]:void 0;if(F==null||F==="")continue;let H,e0=T0;if(o0.type==="categorical")H=((b0=k.get(o0.key))==null?void 0:b0.get(F.toString()))??"#aaa";else{const Yr=Number(F);if(isNaN(Yr))continue;e0=T0+Math.min(1,Math.max(0,Yr/(o0.maxVal||1)))*(I-T0),H="#666"}M.has(H)||M.set(H,[]);let Z=$-g;for(;Z>Math.PI;)Z-=2*Math.PI;for(;Z<-Math.PI;)Z+=2*Math.PI;const x=Z>=0?1:0,c0=Math.abs(Z)>Math.PI?1:0,[G0,P0]=[s(f0+I*Math.cos(g)),s(I0+I*Math.sin(g))],[g0,m0]=[s(f0+I*Math.cos($)),s(I0+I*Math.sin($))],[X0,$0]=[s(f0+e0*Math.cos($)),s(I0+e0*Math.sin($))],[fn,mr]=[s(f0+e0*Math.cos(g)),s(I0+e0*Math.sin(g))];M.get(H).push(`M ${G0},${P0} A ${s(I)},${s(I)} 0 ${c0},${x} ${g0},${m0} L ${X0},${$0} A ${s(e0)},${s(e0)} 0 ${c0},${x^1} ${fn},${mr} Z`)}for(const[N,g]of M)Y.push(`<path fill="${N}" d="${g.join(" ")}"/>`);N0+=o0.height+Wn}}Y.push("</g>")}if(Hn){const Y0=Q0+6/C,C0=Y0*v0*C;if(C0>=6){const S0=Math.min(Math.floor(C0*.75*Mn),13*Mn);Y.push(`<g id="labels" font-family="sans-serif" font-size="${s(S0)}" fill="#222" dominant-baseline="middle">`);for(let D0=0;D0<a.leaves.length;D0++){const N0=a.leaves[D0];if(S[N0]===2)continue;const o0=a.nodes[N0].name;if(!o0)continue;const{angle:T0}=y0(N0),I=f0+Y0*C*Math.cos(T0),M=I0+Y0*C*Math.sin(T0);if(!V(I,M))continue;const N=Math.cos(T0),g=N>=0?"start":"end",r0=N>=0?T0*180/Math.PI:T0*180/Math.PI+180;Y.push(`<text x="${s(I)}" y="${s(M)}" text-anchor="${g}" transform="rotate(${s(r0)},${s(I)},${s(M)})">${T(o0)}</text>`)}Y.push("</g>")}}}else if(s0==="unrooted"&&An){const{coords:K,maxR:i0}=An,w=Math.min(L,i)*on/(i0||1),j=L/2+J.x,q=i/2+J.y,u0=d0=>({x:j+C*K[d0].x*w,y:q+C*K[d0].y*w}),{ringR:f0,trackOuterRingR:I0}=rA(L,i,{coords:K,maxR:i0},w,p),B0=pe,y0=a.leaves.length||1,ln=2*Math.PI/y0;Y.push('<g id="ranges">');for(const d0 of M0){const v0=a.nodes[d0.nodeId];if(!v0)continue;const F0=[];for(let C0=v0.L;C0<v0.R;C0++){const S0=a.leaves[C0],D0=K[S0];F0.push([D0.x*w,D0.y*w])}F0.push([K[v0.id].x*w,K[v0.id].y*w]);const H0=mo(F0);if(!H0)continue;const Y0=H0.map(([C0,S0])=>`${s(j+C*C0)},${s(q+C*S0)}`).join(" ");Y.push(`<polygon fill="${d0.color}" opacity="0.33" points="${Y0}"/>`)}Y.push("</g>");const Q0=new Map;for(const d0 of a.nodes){if(S[d0.id]===2||d0.id!==a.root&&S[d0.id]===0&&(d0.R-d0.L)*ln*I0*C<en&&en>0)continue;const v0=u0(d0.id);for(const F0 of d0.children){if(S[F0]===2)continue;const H0=u0(F0);if(!V(v0.x,v0.y)&&!V(H0.x,H0.y)||Math.hypot(H0.x-v0.x,H0.y-v0.y)<=r4)continue;const C0=a.nodes[F0].support!==void 0?Ne(a.nodes[F0].support):"#333";Q0.has(C0)||Q0.set(C0,[]),Q0.get(C0).push(`M ${s(v0.x)},${s(v0.y)} L ${s(H0.x)},${s(H0.y)}`)}}Y.push('<g id="branches">');for(const[d0,v0]of Q0)Y.push(`<path stroke="${d0}" stroke-width="${s(B0)}" fill="none" d="${v0.join(" ")}"/>`);if(Y.push("</g>"),f){const d0=a.leaves.filter(v0=>S[v0]!==2).slice().sort((v0,F0)=>K[v0].angle-K[F0].angle);if(d0.length>0){const v0=2*Math.PI/d0.length;let F0=f0;Y.push('<g id="annotations">');for(const H0 of u){if(!H0.visible){F0+=H0.height+Wn;continue}const Y0=F0*C,C0=(F0+H0.height)*C,S0=F0*v0*C,D0=Math.max(1,Math.floor(en/Math.max(S0,1e-9))),N0=new Map;for(let o0=0;o0<d0.length;o0+=D0){const T0=d0[o0],I=d0[(o0+D0)%d0.length],M=a.nodes[T0],N=R.get(M.name||""),g=N?N[H0.key]:void 0;if(g==null||g==="")continue;let r0;if(H0.type==="categorical")r0=((L0=k.get(H0.key))==null?void 0:L0.get(g.toString()))??"#aaa";else{const m0=Number(g);if(isNaN(m0))continue;r0=`rgba(80,80,80,${(.1+Math.min(1,Math.max(0,m0/(H0.maxVal||1)))*.85).toFixed(2)})`}const Q=K[T0].angle,z=K[I].angle,$=z>Q?z:z+2*Math.PI,F=$-Q>Math.PI?1:0,[H,e0]=[j+C0*Math.cos(Q),q+C0*Math.sin(Q)],[Z,x]=[j+C0*Math.cos($),q+C0*Math.sin($)],[c0,G0]=[j+Y0*Math.cos($),q+Y0*Math.sin($)],[P0,g0]=[j+Y0*Math.cos(Q),q+Y0*Math.sin(Q)];N0.has(r0)||N0.set(r0,[]),N0.get(r0).push(`M ${s(H)},${s(e0)} A ${s(C0)},${s(C0)} 0 ${F},1 ${s(Z)},${s(x)} L ${s(c0)},${s(G0)} A ${s(Y0)},${s(Y0)} 0 ${F},0 ${s(P0)},${s(g0)} Z`)}for(const[o0,T0]of N0)Y.push(`<path fill="${o0}" d="${T0.join(" ")}"/>`);F0+=H0.height+Wn}Y.push("</g>")}}if(Hn){const d0=a.leaves.length>0?2*Math.PI/a.leaves.length:0,v0=f0*d0*C;if(v0>=6){const F0=Math.min(Math.floor(v0*.75*Mn),13*Mn),H0=(p+n0)*C+6;Y.push(`<g id="labels" font-family="sans-serif" font-size="${s(F0)}" fill="#222" dominant-baseline="middle">`);for(const Y0 of a.leaves){if(S[Y0]===2)continue;const C0=a.nodes[Y0].name;if(!C0)continue;const S0=K[Y0],D0=Math.hypot(S0.x,S0.y)*w*C,N0=Math.atan2(S0.y,S0.x),o0=j+(D0+H0)*Math.cos(N0),T0=q+(D0+H0)*Math.sin(N0);if(!V(o0,T0))continue;const I=Math.cos(N0),M=I>=0?"start":"end",N=I>=0?N0*180/Math.PI:N0*180/Math.PI+180;Y.push(`<text x="${s(o0)}" y="${s(T0)}" text-anchor="${M}" transform="rotate(${s(N)},${s(o0)},${s(T0)})">${T(C0)}</text>`)}Y.push("</g>")}}}Y.push("</svg>");const W=new Blob([Y.join(`
`)],{type:"image/svg+xml"}),D=document.createElement("a");D.href=URL.createObjectURL(W),D.download="tree.svg",D.click(),URL.revokeObjectURL(D.href)},J5=()=>{const c=dr.current,L=bn.current;if(!(!c||!L))if(Se===1){const i=c.toDataURL("image/png"),s=document.createElement("a");s.href=i,s.download="tree.png",s.click()}else{const i=L.clientWidth*Se,s=L.clientHeight*Se,T=document.createElement("canvas");T.width=i,T.height=s;const S=T.getContext("2d");S.scale(Se,Se),S.drawImage(c,0,0,L.clientWidth,L.clientHeight);const p=T.toDataURL("image/png"),Y=document.createElement("a");Y.href=p,Y.download=`tree-${Se}x.png`,Y.click()}},H5=async()=>{gA(new Set),lr([]),ir(null),r(new File([CR],"RTtree.nwk",{type:"text/plain"}));const c=new File([SR],"RTtreelabels.csv",{type:"text/csv"});try{const{rows:L,columns:i}=await Ja(c);A([{name:c.name,rows:L,columns:i}])}catch(L){console.error("Failed to parse example annotations:",L)}},K5=()=>{if(!a||!t)return;const c={version:1,newickText:t,layout:s0,phylogram:sn,ladderize:Ye,rotation:O0,arc:Z0,hSpan:he,vZoom:h0,gZoom:C,offset:J,showLeafLabels:Hn,showTracks:f,trackOffset:n0,trackOffsetMode:p0,trackConfig:u,colorMaps:Object.fromEntries([...k.entries()].map(([s,T])=>[s,Object.fromEntries(T)])),collapsedFingerprints:[...Mr].map(s=>tA(a,s)),ranges:M0.map(s=>({fp:tA(a,s.nodeId),color:s.color,label:s.label})),hiddenLeafNames:[...jr]},L=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(L),i.download="tree-session.json",i.click(),URL.revokeObjectURL(i.href)},V5=c=>{var i;const L=(i=c.target.files)==null?void 0:i[0];L&&(c.target.value="",L.text().then(s=>{try{const T=JSON.parse(s);if(T.newickText&&(io.current=T.collapsedFingerprints??[],Ro.current=T.ranges??[],QA.current=!0,JA(new Set(T.hiddenLeafNames??[])),o(T.newickText)),T.layout&&wr(T.layout),T.phylogram!==void 0&&Ot(T.phylogram),T.ladderize&&Zl(T.ladderize),T.rotation!==void 0&&qt(T.rotation),T.arc!==void 0&&no(T.arc),T.hSpan!==void 0&&ro(T.hSpan),T.vZoom!==void 0&&Jn(T.vZoom),T.gZoom!==void 0&&U0(T.gZoom),T.offset&&E0(T.offset),T.showLeafLabels!==void 0&&xl(T.showLeafLabels),T.showTracks!==void 0&&h(T.showTracks),T.trackOffset!==void 0&&j0(T.trackOffset),T.trackOffsetMode&&In(T.trackOffsetMode),T.trackConfig&&b(T.trackConfig),T.colorMaps){const S=new Map;for(const[p,Y]of Object.entries(T.colorMaps))S.set(p,new Map(Object.entries(Y)));E(S)}}catch(T){console.error("Failed to load session:",T)}}))},W5=()=>{gA(new Set),JA(new Set),lr([]),ir(null),En(!1),E0({x:0,y:0}),Jn(1),U0(1)},F5=()=>{if(!a)return;const c=a.nodes.length;if(c===0||a.leaves.length===0)return;const L=Array.from({length:c},()=>[]);for(const K of a.nodes)for(const i0 of K.children){const w=a.nodes[i0].length;L[K.id].push({to:i0,len:w}),L[i0].push({to:K.id,len:w})}const i=K=>{const i0=new Float64Array(c);return i0.fill(NaN),i0[K]=0,function w(j,q){for(const u0 of L[j])u0.to!==q&&(i0[u0.to]=i0[j]+u0.len,w(u0.to,j))}(K,-1),i0},s=a.leaves,T=i(s[0]);let S=s[0],p=-1;for(const K of s){const i0=T[K];i0>p&&(p=i0,S=K)}const Y=i(S);let m=S;p=-1;for(const K of s){const i0=Y[K];i0>p&&(p=i0,m=K)}const V=p;if(!isFinite(V)||V<=0)return;const W=V/2,D=[];function O(K,i0){if(K===m)return D.push(K),!0;for(const w of L[K])if(w.to!==i0&&O(w.to,K))return D.push(K),!0;return!1}if(O(S,-1),D.reverse(),D.length===0)return;let b0=0,L0=D[0];for(let K=0;K<D.length-1;K++){const i0=L[D[K]].find(j=>j.to===D[K+1]),w=i0?i0.len:0;if(b0+w>=W){L0=W-b0>b0+w-W?D[K+1]:D[K];break}b0+=w}t4(a,L0,Ye),E0({x:0,y:0}),Jn(1),U0(1),l({...a})},X5=(c,L)=>{var p,Y;if(!a)return{color:"#ffe08a",name:""};const i=a.nodes[c],s=new Map;for(let m=i.L;m<i.R;m++){const V=a.nodes[a.leaves[m]].name||"",W=R.get(V),D=(p=W==null?void 0:W[L])==null?void 0:p.toString();D!==void 0&&D!==""&&s.set(D,(s.get(D)??0)+1)}let T="",S=0;for(const[m,V]of s)V>S&&(S=V,T=m);return{color:((Y=k.get(L))==null?void 0:Y.get(T))??"#ffe08a",name:T}},fi=()=>{if(k0!==null)if(Tn)En(!1),de(null);else{de(null);const{color:c,name:L}=w1?X5(k0,w1):{color:"#ffe08a",name:""};_r(c),Er(L),En(!0)}},Aa=()=>{if(k0===null)return;const c={nodeId:k0,color:Nn,label:yr};if(_1!==null){const L=[...M0];L[_1]=c,lr(L)}else lr(L=>[c,...L]);En(!1),de(null)},vi=()=>{if(k0===null||!a)return[];const c=a.nodes[k0],L=[];for(let i=c.L;i<c.R;i++){const s=a.nodes[a.leaves[i]].name;s&&L.push(s)}return L},Q5=()=>{const c=vi();if(!c.length)return;const L=URL.createObjectURL(new Blob([c.join(`
`)],{type:"text/plain"})),i=document.createElement("a");i.href=L,i.download="leaves.txt",i.click(),URL.revokeObjectURL(L)},x5=()=>{a&&M0.forEach((c,L)=>{const i=a.nodes[c.nodeId];if(!i)return;const s=[];for(let S=i.L;S<i.R;S++){const p=a.nodes[a.leaves[S]].name;p&&s.push(p)}if(!s.length)return;const T=(c.label?c.label.trim():`range_${c.nodeId}`)+".txt";setTimeout(()=>{const S=URL.createObjectURL(new Blob([s.join(`
`)],{type:"text/plain"})),p=document.createElement("a");p.href=S,p.download=T,p.click(),URL.revokeObjectURL(S)},L*200)})},Z5=()=>{const c=vi();c.length&&navigator.clipboard.writeText(c.join(`
`)).catch(L=>console.error("Failed to copy:",L))},w5=c=>{A5(c);const L=c?100:1/100;wl(i=>i*L),_l(i=>i*L),jl(i=>i*L)},Ee=k0!==null&&a?a.nodes[k0]:null,_5=()=>{k0===null||!a||k0===a.root||gA(c=>{const L=new Set(c);return L.add(k0),L})},j5=()=>{if(k0===null||!a)return;const c=a.nodes[k0],L=new Set;for(let i=c.L;i<c.R;i++){const s=a.nodes[a.leaves[i]].name;s&&L.add(s)}L.size!==0&&(io.current=[...Mr].map(i=>tA(a,i)),Ro.current=M0.map(i=>({fp:tA(a,i.nodeId),color:i.color,label:i.label})),QA.current=!0,JA(i=>new Set([...i,...L])))},$5=()=>{if(k0===null||!a)return;const c=a.nodes[k0],L=new Set;for(let s=c.L;s<c.R;s++){const T=a.nodes[a.leaves[s]].name;T&&L.add(T)}const i=new Set;for(const s of a.leaves){const T=a.nodes[s].name;T&&!L.has(T)&&i.add(T)}io.current=[...Mr].map(s=>tA(a,s)),Ro.current=M0.map(s=>({fp:tA(a,s.nodeId),color:s.color,label:s.label})),QA.current=!0,JA(s=>new Set([...s,...i]))},ta=P.useMemo(()=>{if(Kn===null||!a)return null;const c=u.filter(s=>s.type==="categorical"&&s.visible);if(c.length===0)return null;const L=a.nodes[Kn],i=new Map;c.forEach(s=>i.set(s.key,new Map));for(let s=L.L;s<L.R;s++){const T=a.nodes[a.leaves[s]].name;if(!T)continue;const S=R.get(T);if(S)for(const p of c){const Y=S[p.key];if(Y!=null&&Y!==""){const m=String(Y),V=i.get(p.key);V.set(m,(V.get(m)||0)+1)}}}return c.map(s=>{const T=i.get(s.key),S=[...T.entries()].sort((Y,m)=>m[1]-Y[1]).slice(0,5),p=[...T.values()].reduce((Y,m)=>Y+m,0);return{key:s.key,label:s.label||s.key,topValues:S,totalLeaves:L.R-L.L,labelledCount:p}}).filter(s=>s.topValues.length>0)},[Kn,a,R,u]),xA=P.useMemo(()=>{const c=new Map;if(!a)return c;for(const L of a.leaves){const i=a.nodes[L].name;i&&!c.has(i)&&c.set(i,L)}return c},[a]),qr=P.useMemo(()=>{const c=Array.from(xA.keys());return c.sort((L,i)=>{const s=L.toLowerCase(),T=i.toLowerCase();return s<T?-1:s>T?1:0}),c},[xA]);P.useEffect(()=>{if(!ze.trim()||qr.length===0){to([]),Oe(-1);return}const c=ze.trim().toLowerCase(),L=50;let i=0,s=qr.length;for(;i<s;){const m=i+s>>1;qr[m].toLowerCase()<c?i=m+1:s=m}const T=[];for(let m=i;m<qr.length&&T.length<L&&qr[m].toLowerCase().startsWith(c);m++)T.push(qr[m]);const S=L-T.length,p=[];if(S>0)for(const m of qr){const V=m.toLowerCase();if(!V.startsWith(c)&&V.includes(c)&&(p.push(m),p.length>=S))break}const Y=[...T,...p];to(Y),Oe(Y.length?0:-1)},[ze,qr]);const yi=P.useCallback(c=>{if(!a||!V0||!bn.current)return;const L=xA.get(c);if(L==null)return;ir(L);const i=bn.current.clientWidth,s=bn.current.clientHeight;if(s0==="rect"){const{coords:T,height:S,maxX:p}=V0,Y=zr(i,p,$r()),m=(s-2*a0)/Math.max(1,S),V=T[L];E0({x:-(-i/2+a0+Y*V.x),y:-h0*(-s/2+a0+m*V.y)})}else if(s0==="circular"){const T=a.leaves.length||1,S=Math.min(i,s)*on,p=V0.coords[L],Y=Pn(V0.maxX>0?p.x/V0.maxX:0,p.y,T,S,O0,Z0);E0({x:-C*Y.x,y:-C*Y.y})}else if(s0==="unrooted"&&An){const{coords:T,maxR:S}=An,p=Math.min(i,s)*on/(S||1),Y=T[L];E0({x:-C*(Y.x*p),y:-C*(Y.y*p)})}Ce(!1),to([])},[a,V0,An,s0,sn,he,h0,C,O0,Z0,xA]);return P.useEffect(()=>{const c=()=>Ce(!1);return document.addEventListener("click",c),()=>document.removeEventListener("click",c)},[]),U.jsxs("div",{className:"app-container",children:[!ri&&U.jsx("button",{type:"button",className:"panel-show-btn",onClick:()=>ei(!0),title:"Show panel",children:"☰"}),U.jsxs("div",{className:"panel",style:{display:ri?void 0:"none"},children:[U.jsxs("div",{className:"panel-header",children:[U.jsx("span",{style:{fontWeight:600,fontSize:14},children:"myTOL"}),U.jsx("button",{type:"button",className:"btn",onClick:()=>ei(!1),title:"Hide panel",style:{padding:"0 6px"},children:"✕"})]}),U.jsxs("div",{className:"section-header",onClick:()=>ke("files"),children:[U.jsx("span",{children:"Load"}),U.jsx("span",{children:Vn.files?"▲":"▼"})]}),Vn.files&&U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Tree (Newick)"}),U.jsxs("div",{className:"file-input-row",children:[U.jsx("button",{type:"button",className:"btn",onClick:()=>{var c;return(c=Ti.current)==null?void 0:c.click()},children:"Choose file…"}),U.jsx("span",{className:"note file-input-name",children:(n==null?void 0:n.name)??"No file chosen"}),U.jsx("input",{type:"file",ref:Ti,accept:".nwk,.newick,.tree,.treefile,.txt",style:{display:"none"},onChange:c=>{var L;return r(((L=c.target.files)==null?void 0:L[0])||null)}})]}),a&&U.jsxs("div",{className:"note",style:{marginTop:4},children:[a.leaves.length.toLocaleString()," leaves · ",a.nodes.length.toLocaleString()," nodes"]})]}),U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Annotations (CSV/TSV)"}),U.jsxs("div",{className:"file-input-row",children:[U.jsx("button",{type:"button",className:"btn",onClick:()=>{var c;return(c=bi.current)==null?void 0:c.click()},children:e.length>0?"Add file…":"Choose file…"}),U.jsx("span",{className:"note file-input-name",children:e.length===0?"No file chosen":`${e.length} file${e.length===1?"":"s"} loaded`}),U.jsx("input",{type:"file",ref:bi,accept:".csv,.tsv",style:{display:"none"},onChange:c=>{var i;const L=(i=c.target.files)==null?void 0:i[0];L&&Ai(L),c.target.value=""}})]}),e.length>0&&U.jsx("div",{style:{marginTop:4},children:e.map((c,L)=>U.jsxs("span",{className:"chip",title:`${c.rows.length} rows · ${c.columns.length} columns`,children:[U.jsx("span",{style:{maxWidth:160,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c.name}),U.jsx("button",{className:"btn",onClick:()=>d5(L),title:"Close this annotation file",children:"×"})]},L))})]}),U.jsx("div",{className:"row",children:U.jsx("button",{type:"button",className:"btn",style:{width:"100%"},onClick:H5,children:"Load example data"})}),U.jsxs("div",{className:"row",style:{display:"flex",gap:6,flexWrap:"wrap"},children:[U.jsx("button",{type:"button",className:"btn",onClick:K5,disabled:!a,children:"Save session"}),U.jsx("button",{type:"button",className:"btn",onClick:()=>{var c;return(c=Li.current)==null?void 0:c.click()},children:"Load session"}),U.jsx("input",{type:"file",accept:".json",ref:Li,style:{display:"none"},onChange:V5})]})]}),U.jsxs("div",{className:"section-header",onClick:()=>ke("export"),children:[U.jsx("span",{children:"Export"}),U.jsx("span",{children:Vn.export?"▲":"▼"})]}),Vn.export&&U.jsxs("div",{className:"row",children:[U.jsxs("div",{style:{marginBottom:6},children:[U.jsx("label",{className:"label",style:{marginBottom:4},children:"PNG"}),U.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap",alignItems:"center",marginBottom:6},children:[1,2,4,6,8,12,16].map(c=>U.jsxs("button",{type:"button",className:"btn"+(Se===c?" active":""),style:{padding:"2px 6px",fontSize:11},onClick:()=>l5(c),children:[c,"×"]},c))}),U.jsx("button",{type:"button",className:"btn",onClick:J5,disabled:!a,children:"Export PNG"})]}),U.jsxs("div",{children:[U.jsx("label",{className:"label",style:{marginBottom:4},children:"SVG"}),U.jsx("button",{type:"button",className:"btn",onClick:g5,disabled:!a,children:"Export SVG"})]})]}),U.jsxs("div",{className:"section-header",onClick:()=>ke("ranges"),children:[U.jsxs("span",{children:["Coloured Ranges",M0.length>0?` (${M0.length})`:""]}),U.jsx("span",{children:Vn.ranges?"▲":"▼"})]}),Vn.ranges&&U.jsxs("div",{className:"row",children:[U.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:["background","branches"].map(c=>U.jsx("button",{className:`btn${nA===c?" active":""}`,onClick:()=>b5(c),style:{flex:1,fontSize:12},children:c==="background"?"Background":"Colour branches"},c))}),M0.length===0?U.jsxs("div",{className:"note",children:["No ranges yet. Select a node and press ",U.jsx("kbd",{children:"C"}),"."]}):U.jsxs(U.Fragment,{children:[U.jsx("div",{children:M0.map((c,L)=>U.jsxs("span",{className:"chip",onClick:()=>{ir(c.nodeId),_r(c.color),Er(c.label||""),de(L),En(!0)},children:[U.jsx("span",{style:{display:"inline-block",width:12,height:12,borderRadius:2,background:c.color}}),c.label||`Node ${c.nodeId}`,U.jsx("button",{className:"btn",onClick:i=>{i.stopPropagation(),lr(s=>s.filter((T,S)=>S!==L))},children:"×"})]},L))}),U.jsx("div",{style:{marginTop:6},children:U.jsx("button",{className:"btn",onClick:x5,children:"Save leaves in ranges"})})]})]}),U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Search leaf"}),U.jsxs("div",{className:"search-box",children:[U.jsx("input",{type:"text",value:ze,placeholder:"Type leaf name…",onChange:c=>{O1(c.target.value),Ce(!0)},onFocus:()=>Ce(!0),onKeyDown:c=>{if(!ql&&(c.key==="ArrowDown"||c.key==="ArrowUp")&&Ce(!0),c.key==="ArrowDown")c.preventDefault(),Oe(L=>Math.min((L<0?-1:L)+1,WA.length-1));else if(c.key==="ArrowUp")c.preventDefault(),Oe(L=>Math.max((L<0?WA.length:L)-1,0));else if(c.key==="Enter"){c.preventDefault();const L=q1>=0&&WA[q1]||ze.trim();L&&xA.has(L)&&yi(L)}else c.key==="Escape"&&Ce(!1)}}),!!ze&&U.jsx("button",{type:"button",className:"search-clear",onClick:()=>{O1(""),to([]),Oe(-1),Ce(!1)},"aria-label":"Clear search",children:"×"}),ql&&WA.length>0&&U.jsx("div",{className:"search-suggest-list",onMouseDown:c=>c.preventDefault(),children:WA.map((c,L)=>U.jsx("div",{className:"search-suggest-item"+(L===q1?" active":""),onMouseEnter:()=>Oe(L),onMouseDown:()=>{O1(c),yi(c)},children:c},`${c}-${L}`))})]})]}),Ee&&U.jsxs("div",{className:"row selection-panel",children:[U.jsxs("div",{className:"label-row",children:[U.jsxs("span",{className:"label",children:["Selection: Node ",Ee.id]}),U.jsx("button",{onClick:()=>{ir(null),En(!1)},style:{border:"none",background:"transparent",cursor:"pointer",fontSize:16},children:"×"})]}),U.jsxs("div",{className:"selection-info",children:[U.jsx("strong",{children:"Leaves:"})," ",Ee.leaves??Ee.R-Ee.L,U.jsx("br",{}),U.jsx("strong",{children:"Length:"})," ",Ee.length.toFixed(4),U.jsx("br",{}),U.jsx("strong",{children:"Support:"})," ",Ee.support??"N/A"]}),U.jsxs("div",{className:"selection-actions",children:[U.jsxs("button",{className:"btn active",onClick:fi,children:[Tn?"Cancel Range":"Colour Range"," (C)"]}),U.jsx("button",{className:"btn",onClick:Q5,children:"Save Leaves"}),U.jsx("button",{className:"btn",onClick:Z5,children:"Copy Leaves"})]}),U.jsxs("div",{className:"selection-actions",style:{marginTop:4,opacity:.85},children:[U.jsx("button",{className:"btn",onClick:Ui,children:"Reroot (R)"}),U.jsx("button",{className:"btn",onClick:_5,children:"Collapse"}),U.jsx("button",{className:"btn",onClick:j5,children:"Hide"}),U.jsx("button",{className:"btn",onClick:$5,title:"Rebuild tree showing only leaves in this clade",children:"Show only"})]})]}),k0!==null&&Tn&&U.jsxs("div",{className:"row range-panel",style:{borderColor:Nn},children:[U.jsx("label",{className:"label",children:_1!==null?"Edit Range":"Add New Range"}),U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",style:{fontSize:13,fontWeight:"normal"},children:"Range Colour"}),U.jsx(ga,{color:Nn,onChange:_r})]}),U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",style:{fontSize:13,fontWeight:"normal"},children:"Range Label (optional)"}),U.jsx("input",{type:"text",value:yr,onChange:c=>Er(c.target.value),onKeyDown:c=>{c.key==="Enter"&&(c.preventDefault(),Aa())},placeholder:"e.g., Clade A",style:{width:"100%",boxSizing:"border-box"}})]}),U.jsx("div",{className:"modal-footer",children:U.jsx("button",{className:"btn active",onClick:Aa,children:"Confirm"})})]}),U.jsxs("div",{className:"section-header",onClick:()=>ke("layout"),children:[U.jsx("span",{children:"Layout & View"}),U.jsx("span",{children:Vn.layout?"▲":"▼"})]}),Vn.layout&&U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Zoom"}),U.jsxs("div",{className:"zoom-row",children:[U.jsx("button",{className:"btn",type:"button",onClick:M5,children:"+"}),U.jsx("button",{className:"btn",type:"button",onClick:P5,children:"–"}),U.jsx("button",{className:"btn",type:"button",onClick:m5,title:"Frame all (F)",children:"Fit"})]})]}),U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Layout"}),U.jsx("div",{className:"layout-toggle-group",children:["rect","circular","unrooted"].map(c=>U.jsxs("button",{type:"button",className:"layout-toggle-btn"+(s0===c?" active":""),onClick:()=>{s0==="rect"!=(c==="rect")&&(E0({x:0,y:0}),Jn(1),U0(1)),wr(c),ir(null),En(!1)},children:[U.jsx("img",{src:`./icons/layout-${c==="rect"?"rect":c==="circular"?"circular":"unrooted"}.svg`,alt:c}),c==="rect"?"Rect":c==="circular"?"Circ":"Unrooted"]},c))})]}),s0==="circular"&&U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Rotation (deg)"}),U.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[U.jsx("button",{className:"btn",type:"button",style:{padding:"2px 7px"},onClick:()=>qt(c=>c-15),children:"−15"}),U.jsx("input",{type:"number",step:5,value:O0,onChange:c=>qt(Number(c.target.value)),style:{flex:1}}),U.jsx("button",{className:"btn",type:"button",style:{padding:"2px 7px"},onClick:()=>qt(c=>c+15),children:"+15"})]})]}),U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Arc (deg)"}),U.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[U.jsx("button",{className:"btn",type:"button",style:{padding:"2px 7px"},onClick:()=>no(c=>un(c-10,1,360)),children:"−10"}),U.jsx("input",{type:"number",step:5,max:360,value:Z0,onChange:c=>no(un(Number(c.target.value),1,360)),style:{flex:1}}),U.jsx("button",{className:"btn",type:"button",style:{padding:"2px 7px"},onClick:()=>no(c=>un(c+10,1,360)),children:"+10"})]})]})]}),U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Scale"}),U.jsxs("select",{value:sn?"phylo":"clado",onChange:c=>Ot(c.target.value==="phylo"),children:[U.jsx("option",{value:"phylo",children:"Phylogram"}),U.jsx("option",{value:"clado",children:"Cladogram"})]})]}),U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Ladderize"}),U.jsxs("select",{value:Ye,onChange:c=>Zl(c.target.value),children:[U.jsx("option",{value:"none",children:"None"}),U.jsx("option",{value:"asc",children:"Ascending"}),U.jsx("option",{value:"desc",children:"Descending"})]})]}),U.jsx("div",{className:"row",children:U.jsxs("label",{style:{fontSize:13,display:"flex",alignItems:"center",gap:6},children:[U.jsx("input",{type:"checkbox",checked:Hn,onChange:c=>xl(c.target.checked)}),"Leaf labels"]})}),U.jsxs("div",{className:"row",style:{display:"flex",gap:6,flexWrap:"wrap"},children:[U.jsx("button",{type:"button",className:"btn",onClick:F5,children:"Re-root at midpoint"}),U.jsx("button",{type:"button",className:"btn",onClick:W5,disabled:!a,title:"Clear hidden/collapsed nodes and reset view",children:"Reset tree"})]}),(Mr.size>0||jr.size>0)&&U.jsxs("div",{className:"row",children:[U.jsx("span",{className:"label",children:"Collapsed / Hidden"}),U.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[Mr.size>0&&U.jsxs("button",{type:"button",className:"btn",onClick:()=>gA(new Set),children:["Uncollapse all (",Mr.size,")"]}),jr.size>0&&U.jsxs("button",{type:"button",className:"btn",onClick:()=>JA(new Set),children:["Unhide all (",jr.size,")"]})]})]}),s0==="rect"&&U.jsxs("div",{className:"row",children:[U.jsx("label",{className:"label",children:"Horizontal Scale"}),!sn&&U.jsx("div",{className:"note",style:{marginBottom:6},children:"No effect in cladogram mode."}),U.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",opacity:sn?1:.45,pointerEvents:sn?"auto":"none"},children:[U.jsx("button",{className:"btn",onClick:()=>{if(!a||!V0||!bn.current)return;const c=bn.current.clientWidth,L=bn.current.clientHeight,{coords:i,height:s}=V0,T=si(h0,J,c,L,a,i,s);if(!T)return;const S=T.span>0?T.span:T.maxVisibleX;ro(S),E0(p=>({x:Gi(c,S,T.localRootX,a0),y:p.y}))},children:"Auto-fit visible"}),U.jsx("input",{type:"number",step:"0.5",min:"0",value:he,onChange:c=>ro(Math.max(0,Number(c.target.value)||0)),style:{width:80}}),U.jsxs("label",{className:"note",style:{display:"inline-flex",alignItems:"center",gap:6},children:[U.jsx("input",{type:"checkbox",checked:j1,onChange:c=>q8(c.target.checked)}),"Lock scale"]})]}),U.jsx("div",{className:"note",children:"When unlocked, rectangular phylogram auto-fits horizontally as you zoom vertically."})]})]}),U.jsxs("div",{className:"section-header",onClick:()=>ke("support"),children:[U.jsx("span",{children:"Support colouring"}),U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[U.jsxs("label",{style:{fontSize:12,fontWeight:"normal"},onClick:c=>c.stopPropagation(),children:[U.jsx("input",{type:"checkbox",checked:ao,onChange:c=>L5(c.target.checked)})," On"]}),U.jsx("div",{style:{width:12,height:8,borderRadius:3,background:HA}}),U.jsx("div",{style:{width:12,height:8,borderRadius:3,background:_e}}),U.jsx("div",{style:{width:12,height:8,borderRadius:3,background:KA}}),U.jsx("span",{children:Vn.support?"▲":"▼"})]})]}),Vn.support&&U.jsxs("div",{className:"row",children:[U.jsx("div",{className:"note",style:{marginTop:4},children:"Three-colour gradient: low → mid → high. Click a swatch to edit."}),U.jsx("div",{style:{display:"flex",gap:8,alignItems:"flex-end",marginTop:8,marginBottom:4},children:[["Low",HA,"low"],["Mid",_e,"mid"],["High",KA,"high"]].map(([c,L,i])=>U.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:3,flex:1},children:[U.jsx("div",{className:"legend-swatch",style:{width:"100%",height:24,background:L,cursor:"pointer",borderRadius:4},onClick:()=>_(i)}),U.jsx("span",{className:"note",children:c})]},i))}),U.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"4px",marginTop:"8px"},children:[["Low",je,wl],["Mid",$e,_l],["High",VA,jl]].map(([c,L,i])=>U.jsxs("div",{children:[U.jsx("label",{className:"note",children:c}),U.jsx("input",{type:"number",step:eo?1:.01,value:L,onChange:s=>i(Number(s.target.value)),style:{width:"100%"}})]},c))}),U.jsx("div",{style:{marginTop:8},children:U.jsxs("label",{style:{fontSize:12},children:[U.jsx("input",{type:"checkbox",checked:eo,onChange:c=>w5(c.target.checked)})," Values are in % (0–100)"]})})]}),u.length>0&&U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"section-header",onClick:()=>ke("tracks"),children:[U.jsx("span",{children:"Annotation Tracks"}),U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[U.jsxs("label",{style:{fontSize:12,fontWeight:"normal"},onClick:c=>c.stopPropagation(),children:[U.jsx("input",{type:"checkbox",checked:f,onChange:c=>h(c.target.checked)})," Show"]}),U.jsx("span",{children:Vn.tracks?"▲":"▼"})]})]}),Vn.tracks&&U.jsxs("div",{className:"row",children:[U.jsxs("div",{style:{marginBottom:8},children:[U.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center",marginBottom:4},children:[U.jsxs("div",{className:"toggle-pill",children:[U.jsx("button",{type:"button",className:p0==="auto"?"active":"",onClick:()=>In("auto"),children:"Auto"}),U.jsx("button",{type:"button",className:p0==="manual"?"active":"",onClick:()=>In("manual"),children:"Manual"})]}),U.jsxs("label",{className:"note",style:{display:"flex",alignItems:"center"},children:["Offset (px)",U.jsx("input",{type:"number",step:10,min:-999,value:n0,onChange:c=>j0(Number(c.target.value)||0),style:{width:60,marginLeft:4}})]})]}),U.jsx("div",{className:"note",children:"Auto: tracks start at outermost visible branch + offset."})]}),u.some(c=>c.type==="categorical")&&U.jsxs("div",{style:{marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[U.jsx("span",{className:"note",children:"Default range colour source:"}),U.jsxs("select",{className:"note",value:w1??"",onChange:c=>Ql(c.target.value||null),style:{fontSize:12},children:[U.jsx("option",{value:"",children:"Manual"}),u.filter(c=>c.type==="categorical").map(c=>U.jsx("option",{value:c.key,children:c.label||c.key},c.key))]})]}),U.jsx("div",{className:"track-config-list",children:u.map((c,L)=>U.jsxs("div",{children:[U.jsxs("div",{className:"track-item",children:[U.jsxs("div",{className:"track-item-order",children:[U.jsx("button",{onClick:()=>ui(L,"up"),disabled:L===0,children:"▲"}),U.jsx("button",{onClick:()=>ui(L,"down"),disabled:L===u.length-1,children:"▼"})]}),U.jsx("input",{type:"checkbox",style:{gridColumn:"3 / 4",gridRow:"1 / 3"},checked:c.visible,onChange:i=>Go(L,"visible",i.target.checked)}),U.jsx("input",{className:"track-item-name",value:c.label,onChange:i=>Go(L,"label",i.target.value),title:`Column key: ${c.key}`,style:{border:"1px solid transparent",borderRadius:3,background:"transparent",cursor:"text",width:"100%"},onFocus:i=>i.currentTarget.style.borderColor="#999",onBlur:i=>i.currentTarget.style.borderColor="transparent"}),U.jsxs("div",{className:"track-item-controls",children:[U.jsxs("select",{value:c.type,onChange:i=>Go(L,"type",i.target.value),children:[U.jsx("option",{value:"categorical",children:"Categorical"}),U.jsx("option",{value:"continuous",children:"Continuous"})]}),U.jsx("input",{type:"number",value:c.height,onChange:i=>Go(L,"height",i.target.value),style:{width:46},min:"1",max:"100"}),U.jsx("span",{className:"note",children:"px"}),c.type==="categorical"&&U.jsxs("button",{className:"btn",style:{padding:"2px 5px",fontSize:11},onClick:()=>y(c.key===R0?null:c.key),children:["Edit colours ",R0===c.key?"▴":"▾"]})]})]}),R0===c.key&&k.get(c.key)&&U.jsxs("div",{style:{marginLeft:8,marginBottom:4,background:"#fff",border:"1px solid #ddd",padding:"4px 6px",borderRadius:4},children:[U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginBottom:6,flexWrap:"wrap"},children:[U.jsx("span",{className:"note",style:{flexShrink:0},children:"Apply palette:"}),U.jsx("select",{className:"note",value:A0,onChange:i=>t0(i.target.value),style:{fontSize:11,flexGrow:1},children:Ha.map(i=>U.jsx("option",{value:i.name,children:i.name},i.name))}),U.jsx("button",{className:"btn",style:{padding:"2px 6px",fontSize:11},onClick:()=>D5(c.key,A0),children:"Apply"})]}),U.jsx("div",{style:{maxHeight:140,overflowY:"auto"},children:[...k.get(c.key).entries()].map(([i,s])=>U.jsxs("div",{className:"legend-item",children:[U.jsx("div",{className:"legend-swatch",style:{background:s},onClick:()=>d({trackKey:c.key,category:i})}),U.jsx("span",{className:"legend-label",children:i||"(empty)"})]},i))})]})]},c.key))})]})]}),U.jsxs("div",{className:"section-header",onClick:()=>ke("options"),children:[U.jsx("span",{children:"Options"}),U.jsx("span",{children:Vn.options?"▲":"▼"})]}),Vn.options&&U.jsxs("div",{className:"row",children:[U.jsx("div",{className:"note",style:{fontWeight:600,marginBottom:6},children:"Display"}),[["Font scale",Mn,i5,.1,3,.1],["Branch thickness",pe,c5,.5,8,.5]].map(([c,L,i,s,T,S])=>U.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[U.jsx("span",{style:{fontSize:12},children:c}),U.jsx("input",{type:"number",min:s,max:T,step:S,value:L,onChange:p=>i(un(Number(p.target.value),s,T)),style:{width:70,fontSize:12}})]},c)),U.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,marginBottom:6},children:[U.jsx("input",{type:"checkbox",checked:ra,onChange:c=>T5(c.target.checked)}),"Taper branches"]}),U.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[U.jsx("span",{style:{fontSize:12},children:"Background colour"}),U.jsx("input",{type:"color",value:oo,onChange:c=>u5(c.target.value),style:{width:44,height:26,padding:1,border:"1px solid #ccc",borderRadius:4,cursor:"pointer"}})]}),U.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,marginBottom:2},children:[U.jsx("input",{type:"checkbox",checked:na,onChange:c=>U5(c.target.checked)}),"Show support values on branches"]}),U.jsxs("div",{className:"note",style:{marginBottom:6},children:["Requires numeric bootstrap values in newick, e.g. ",U.jsx("code",{children:"(A,B)95"}),". Rect layout only."]}),U.jsx("div",{className:"note",style:{fontWeight:600,marginBottom:6,marginTop:4},children:"Level of detail"}),[["LOD threshold (px)",en,R5,0,50,.5],["Annotation bar fill",qe,G5,0,2,.05]].map(([c,L,i,s,T,S])=>U.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[U.jsx("span",{style:{fontSize:12},children:c}),U.jsx("input",{type:"number",min:s,max:T,step:S,value:L,onChange:p=>i(un(Number(p.target.value),s,T)),style:{width:70,fontSize:12}})]},c)),U.jsx("div",{className:"note",style:{marginBottom:8},children:"LOD 0 = off (show all). Higher = skip smaller clades and thin annotations. Bar fill > 1 slightly overlaps bars to fill gaps."}),U.jsx("div",{className:"note",style:{fontWeight:600,marginBottom:6},children:"Statistics"}),U.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12},children:[U.jsx("input",{type:"checkbox",checked:ni,onChange:c=>s5(c.target.checked)}),"Clade % includes unlabelled leaves"]})]}),U.jsxs("div",{className:"shortcut-strip",children:[U.jsxs("div",{className:"shortcut-strip-row",children:[U.jsx("span",{style:{marginRight:4},children:"Mouse:"}),U.jsx("span",{children:"Click select · Drag pan · Scroll zoom"})]}),U.jsxs("div",{className:"shortcut-strip-row",children:[U.jsx("kbd",{children:"+"}),U.jsx("kbd",{children:"−"})," zoom ",U.jsx("kbd",{children:"F"})," fit ",U.jsx("kbd",{children:"R"})," reroot ",U.jsx("kbd",{children:"C"})," colour range ",U.jsx("kbd",{children:"Enter"})," confirm ",U.jsx("kbd",{children:"Esc"})," deselect"]})]})]}),U.jsxs("div",{className:"canvas-wrap",ref:bn,onDragOver:c=>{c.preventDefault(),z1(!0)},onDragLeave:()=>z1(!1),onDrop:c=>{var s;c.preventDefault(),z1(!1);const L=c.dataTransfer.files[0];if(!L)return;const i=((s=L.name.split(".").pop())==null?void 0:s.toLowerCase())??"";["nwk","newick","tree","txt"].includes(i)?r(L):["csv","tsv"].includes(i)&&Ai(L)},children:[!a&&U.jsx("div",{className:"drop-zone-hint"+(a5?" drag-over":""),children:U.jsxs("div",{className:"drop-zone-hint-text",children:[U.jsx("div",{style:{fontSize:40,marginBottom:10},children:"🌿"}),U.jsx("div",{style:{fontWeight:600,fontSize:16,marginBottom:6},children:"Drop a Newick file here"}),U.jsx("div",{style:{fontSize:13,color:"#999"},children:"or use the Load panel on the left"})]})}),U.jsx("canvas",{ref:dr,style:{display:"block",width:"100%",height:"100%",background:oo,cursor:o5},onMouseMove:E5,onMouseDown:k5,onMouseUp:I5,onMouseLeave:N5,onClick:S5,onDoubleClick:p5}),ta&&ta.length>0&&U.jsxs("div",{style:{position:"absolute",bottom:16,right:16,background:"rgba(255,255,255,0.95)",border:"1px solid #ddd",borderRadius:6,padding:"10px 14px",minWidth:200,maxWidth:280,pointerEvents:"none",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",zIndex:10,fontSize:12},children:[U.jsx("div",{style:{fontWeight:600,fontSize:13,marginBottom:8},children:"Clade statistics"}),ta.map(c=>U.jsxs("div",{style:{marginBottom:10},children:[U.jsxs("div",{style:{fontWeight:"bold",marginBottom:3},children:[c.label," ",U.jsxs("span",{style:{fontWeight:"normal",color:"#666"},children:["(",c.totalLeaves," leaves)"]})]}),c.topValues.map(([L,i])=>{var p;const s=((p=k.get(c.key))==null?void 0:p.get(L))||"#aaa",T=ni?c.totalLeaves:c.labelledCount,S=T>0?(i/T*100).toFixed(1):"0.0";return U.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:2},children:[U.jsx("span",{style:{width:10,height:10,background:s,marginRight:6,borderRadius:2,flexShrink:0}}),U.jsx("span",{style:{marginRight:"auto",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:L}),U.jsx("strong",{style:{marginLeft:6},children:i}),U.jsxs("span",{style:{color:"#888",marginLeft:4,minWidth:35,textAlign:"right"},children:["(",S,"%)"]})]},L)})]},c.key))]})]}),zl&&$1&&U.jsx("div",{className:"tooltip",style:{position:"absolute",left:$1.x+5,top:$1.y+5,pointerEvents:"none"},children:zl.split(`
`).map((c,L)=>U.jsx("div",{children:c},L))}),B&&U.jsxs(U.Fragment,{children:[U.jsx("div",{className:"modal-backdrop",onClick:()=>_(null)}),U.jsxs("div",{className:"modal-content",children:[U.jsxs("div",{className:"modal-header",children:[U.jsxs("span",{children:["Support colour: ",B]}),U.jsx("button",{onClick:()=>_(null),style:{border:"none",background:"transparent",cursor:"pointer",fontSize:16},children:"×"})]}),U.jsx(ga,{color:B==="low"?HA:B==="mid"?_e:KA,onChange:c=>{B==="low"?n5(c):B==="mid"?r5(c):e5(c)}})]})]}),v&&U.jsxs(U.Fragment,{children:[U.jsx("div",{className:"modal-backdrop",onClick:()=>d(null)}),U.jsxs("div",{className:"modal-content",children:[U.jsxs("div",{className:"modal-header",children:[U.jsx("span",{children:v.category||"(empty)"}),U.jsx("button",{onClick:()=>d(null),style:{border:"none",background:"transparent",cursor:"pointer",fontSize:16},children:"×"})]}),U.jsx(ga,{color:((di=k.get(v.trackKey))==null?void 0:di.get(v.category))||"#aaa",onChange:B5})]})]})]})}function Yu(){return U.jsx("div",{className:"app",children:U.jsx(du,{})})}Ka.createRoot(document.getElementById("root")).render(U.jsx(Yu,{}));

(function(he,fe){typeof exports=="object"&&typeof module<"u"?fe(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],fe):(he=typeof globalThis<"u"?globalThis:he||self,fe(he.novelUI={},he.r))})(this,function(he,fe){"use strict";var He={},ir={get exports(){return He},set exports(e){He=e}},Ye={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yt;function sr(){if(yt)return Ye;yt=1;var e=fe,n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function u(m,h,b){var S,_={},N=null,z=null;b!==void 0&&(N=""+b),h.key!==void 0&&(N=""+h.key),h.ref!==void 0&&(z=h.ref);for(S in h)o.call(h,S)&&!f.hasOwnProperty(S)&&(_[S]=h[S]);if(m&&m.defaultProps)for(S in h=m.defaultProps,h)_[S]===void 0&&(_[S]=h[S]);return{$$typeof:n,type:m,key:N,ref:z,props:_,_owner:i.current}}return Ye.Fragment=t,Ye.jsx=u,Ye.jsxs=u,Ye}var Ve={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gt;function cr(){return gt||(gt=1,process.env.NODE_ENV!=="production"&&function(){var e=fe,n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),m=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),x=Symbol.iterator,R="@@iterator";function s(r){if(r===null||typeof r!="object")return null;var d=x&&r[x]||r[R];return typeof d=="function"?d:null}var I=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function C(r){{for(var d=arguments.length,v=new Array(d>1?d-1:0),$=1;$<d;$++)v[$-1]=arguments[$];O("error",r,v)}}function O(r,d,v){{var $=I.ReactDebugCurrentFrame,V=$.getStackAddendum();V!==""&&(d+="%s",v=v.concat([V]));var q=v.map(function(Y){return String(Y)});q.unshift("Warning: "+d),Function.prototype.apply.call(console[r],console,q)}}var A=!1,c=!1,oe=!1,me=!1,ue=!1,de;de=Symbol.for("react.module.reference");function ve(r){return!!(typeof r=="string"||typeof r=="function"||r===o||r===f||ue||r===i||r===b||r===S||me||r===z||A||c||oe||typeof r=="object"&&r!==null&&(r.$$typeof===N||r.$$typeof===_||r.$$typeof===u||r.$$typeof===m||r.$$typeof===h||r.$$typeof===de||r.getModuleId!==void 0))}function Ee(r,d,v){var $=r.displayName;if($)return $;var V=d.displayName||d.name||"";return V!==""?v+"("+V+")":v}function ae(r){return r.displayName||"Context"}function X(r){if(r==null)return null;if(typeof r.tag=="number"&&C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case o:return"Fragment";case t:return"Portal";case f:return"Profiler";case i:return"StrictMode";case b:return"Suspense";case S:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case m:var d=r;return ae(d)+".Consumer";case u:var v=r;return ae(v._context)+".Provider";case h:return Ee(r,r.render,"ForwardRef");case _:var $=r.displayName||null;return $!==null?$:X(r.type)||"Memo";case N:{var V=r,q=V._payload,Y=V._init;try{return X(Y(q))}catch{return null}}}return null}var te=Object.assign,Q=0,we,le,re,be,ye,_e,w;function g(){}g.__reactDisabledLog=!0;function E(){{if(Q===0){we=console.log,le=console.info,re=console.warn,be=console.error,ye=console.group,_e=console.groupCollapsed,w=console.groupEnd;var r={configurable:!0,enumerable:!0,value:g,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}Q++}}function T(){{if(Q--,Q===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:te({},r,{value:we}),info:te({},r,{value:le}),warn:te({},r,{value:re}),error:te({},r,{value:be}),group:te({},r,{value:ye}),groupCollapsed:te({},r,{value:_e}),groupEnd:te({},r,{value:w})})}Q<0&&C("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var a=I.ReactCurrentDispatcher,j;function p(r,d,v){{if(j===void 0)try{throw Error()}catch(V){var $=V.stack.trim().match(/\n( *(at )?)/);j=$&&$[1]||""}return`
`+j+r}}var G=!1,D;{var M=typeof WeakMap=="function"?WeakMap:Map;D=new M}function l(r,d){if(!r||G)return"";{var v=D.get(r);if(v!==void 0)return v}var $;G=!0;var V=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var q;q=a.current,a.current=null,E();try{if(d){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(ke){$=ke}Reflect.construct(r,[],Y)}else{try{Y.call()}catch(ke){$=ke}r.call(Y.prototype)}}else{try{throw Error()}catch(ke){$=ke}r()}}catch(ke){if(ke&&$&&typeof ke.stack=="string"){for(var L=ke.stack.split(`
`),pe=$.stack.split(`
`),ne=L.length-1,se=pe.length-1;ne>=1&&se>=0&&L[ne]!==pe[se];)se--;for(;ne>=1&&se>=0;ne--,se--)if(L[ne]!==pe[se]){if(ne!==1||se!==1)do if(ne--,se--,se<0||L[ne]!==pe[se]){var Ce=`
`+L[ne].replace(" at new "," at ");return r.displayName&&Ce.includes("<anonymous>")&&(Ce=Ce.replace("<anonymous>",r.displayName)),typeof r=="function"&&D.set(r,Ce),Ce}while(ne>=1&&se>=0);break}}}finally{G=!1,a.current=q,T(),Error.prepareStackTrace=V}var ze=r?r.displayName||r.name:"",ar=ze?p(ze):"";return typeof r=="function"&&D.set(r,ar),ar}function K(r,d,v){return l(r,!1)}function y(r){var d=r.prototype;return!!(d&&d.isReactComponent)}function k(r,d,v){if(r==null)return"";if(typeof r=="function")return l(r,y(r));if(typeof r=="string")return p(r);switch(r){case b:return p("Suspense");case S:return p("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case h:return K(r.render);case _:return k(r.type,d,v);case N:{var $=r,V=$._payload,q=$._init;try{return k(q(V),d,v)}catch{}}}return""}var Z=Object.prototype.hasOwnProperty,F={},ie=I.ReactDebugCurrentFrame;function xe(r){if(r){var d=r._owner,v=k(r.type,r._source,d?d.type:null);ie.setExtraStackFrame(v)}else ie.setExtraStackFrame(null)}function ce(r,d,v,$,V){{var q=Function.call.bind(Z);for(var Y in r)if(q(r,Y)){var L=void 0;try{if(typeof r[Y]!="function"){var pe=Error(($||"React class")+": "+v+" type `"+Y+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[Y]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw pe.name="Invariant Violation",pe}L=r[Y](d,Y,$,v,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ne){L=ne}L&&!(L instanceof Error)&&(xe(V),C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",$||"React class",v,Y,typeof L),xe(null)),L instanceof Error&&!(L.message in F)&&(F[L.message]=!0,xe(V),C("Failed %s type: %s",v,L.message),xe(null))}}}var Me=Array.isArray;function Pe(r){return Me(r)}function Se(r){{var d=typeof Symbol=="function"&&Symbol.toStringTag,v=d&&r[Symbol.toStringTag]||r.constructor.name||"Object";return v}}function P(r){try{return ee(r),!1}catch{return!0}}function ee(r){return""+r}function Fe(r){if(P(r))return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Se(r)),ee(r)}var $e=I.ReactCurrentOwner,Ae={key:!0,ref:!0,__self:!0,__source:!0},Kt,Jt,pt;pt={};function Pn(r){if(Z.call(r,"ref")){var d=Object.getOwnPropertyDescriptor(r,"ref").get;if(d&&d.isReactWarning)return!1}return r.ref!==void 0}function $n(r){if(Z.call(r,"key")){var d=Object.getOwnPropertyDescriptor(r,"key").get;if(d&&d.isReactWarning)return!1}return r.key!==void 0}function kn(r,d){if(typeof r.ref=="string"&&$e.current&&d&&$e.current.stateNode!==d){var v=X($e.current.type);pt[v]||(C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',X($e.current.type),r.ref),pt[v]=!0)}}function On(r,d){{var v=function(){Kt||(Kt=!0,C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",d))};v.isReactWarning=!0,Object.defineProperty(r,"key",{get:v,configurable:!0})}}function Nn(r,d){{var v=function(){Jt||(Jt=!0,C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",d))};v.isReactWarning=!0,Object.defineProperty(r,"ref",{get:v,configurable:!0})}}var In=function(r,d,v,$,V,q,Y){var L={$$typeof:n,type:r,key:d,ref:v,props:Y,_owner:q};return L._store={},Object.defineProperty(L._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(L,"_self",{configurable:!1,enumerable:!1,writable:!1,value:$}),Object.defineProperty(L,"_source",{configurable:!1,enumerable:!1,writable:!1,value:V}),Object.freeze&&(Object.freeze(L.props),Object.freeze(L)),L};function Dn(r,d,v,$,V){{var q,Y={},L=null,pe=null;v!==void 0&&(Fe(v),L=""+v),$n(d)&&(Fe(d.key),L=""+d.key),Pn(d)&&(pe=d.ref,kn(d,V));for(q in d)Z.call(d,q)&&!Ae.hasOwnProperty(q)&&(Y[q]=d[q]);if(r&&r.defaultProps){var ne=r.defaultProps;for(q in ne)Y[q]===void 0&&(Y[q]=ne[q])}if(L||pe){var se=typeof r=="function"?r.displayName||r.name||"Unknown":r;L&&On(Y,se),pe&&Nn(Y,se)}return In(r,L,pe,V,$,$e.current,Y)}}var ht=I.ReactCurrentOwner,Qt=I.ReactDebugCurrentFrame;function Le(r){if(r){var d=r._owner,v=k(r.type,r._source,d?d.type:null);Qt.setExtraStackFrame(v)}else Qt.setExtraStackFrame(null)}var mt;mt=!1;function vt(r){return typeof r=="object"&&r!==null&&r.$$typeof===n}function er(){{if(ht.current){var r=X(ht.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function jn(r){{if(r!==void 0){var d=r.fileName.replace(/^.*[\\\/]/,""),v=r.lineNumber;return`

Check your code at `+d+":"+v+"."}return""}}var tr={};function Mn(r){{var d=er();if(!d){var v=typeof r=="string"?r:r.displayName||r.name;v&&(d=`

Check the top-level render call using <`+v+">.")}return d}}function rr(r,d){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var v=Mn(d);if(tr[v])return;tr[v]=!0;var $="";r&&r._owner&&r._owner!==ht.current&&($=" It was passed a child from "+X(r._owner.type)+"."),Le(r),C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',v,$),Le(null)}}function nr(r,d){{if(typeof r!="object")return;if(Pe(r))for(var v=0;v<r.length;v++){var $=r[v];vt($)&&rr($,d)}else if(vt(r))r._store&&(r._store.validated=!0);else if(r){var V=s(r);if(typeof V=="function"&&V!==r.entries)for(var q=V.call(r),Y;!(Y=q.next()).done;)vt(Y.value)&&rr(Y.value,d)}}}function Fn(r){{var d=r.type;if(d==null||typeof d=="string")return;var v;if(typeof d=="function")v=d.propTypes;else if(typeof d=="object"&&(d.$$typeof===h||d.$$typeof===_))v=d.propTypes;else return;if(v){var $=X(d);ce(v,r.props,"prop",$,r)}else if(d.PropTypes!==void 0&&!mt){mt=!0;var V=X(d);C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",V||"Unknown")}typeof d.getDefaultProps=="function"&&!d.getDefaultProps.isReactClassApproved&&C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ln(r){{for(var d=Object.keys(r.props),v=0;v<d.length;v++){var $=d[v];if($!=="children"&&$!=="key"){Le(r),C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",$),Le(null);break}}r.ref!==null&&(Le(r),C("Invalid attribute `ref` supplied to `React.Fragment`."),Le(null))}}function or(r,d,v,$,V,q){{var Y=ve(r);if(!Y){var L="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(L+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var pe=jn(V);pe?L+=pe:L+=er();var ne;r===null?ne="null":Pe(r)?ne="array":r!==void 0&&r.$$typeof===n?(ne="<"+(X(r.type)||"Unknown")+" />",L=" Did you accidentally export a JSX literal instead of a component?"):ne=typeof r,C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ne,L)}var se=Dn(r,d,v,V,q);if(se==null)return se;if(Y){var Ce=d.children;if(Ce!==void 0)if($)if(Pe(Ce)){for(var ze=0;ze<Ce.length;ze++)nr(Ce[ze],r);Object.freeze&&Object.freeze(Ce)}else C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else nr(Ce,r)}return r===o?Ln(se):Fn(se),se}}function zn(r,d,v){return or(r,d,v,!0)}function Yn(r,d,v){return or(r,d,v,!1)}var Vn=Yn,Bn=zn;Ve.Fragment=o,Ve.jsx=Vn,Ve.jsxs=Bn}()),Ve}(function(e){process.env.NODE_ENV==="production"?e.exports=sr():e.exports=cr()})(ir);const ge=He.jsx,bt=He.jsxs;var Be={},ur={get exports(){return Be},set exports(e){Be=e}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var St;function lr(){if(St)return B;St=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),u=Symbol.for("react.context"),m=Symbol.for("react.server_context"),h=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function R(s){if(typeof s=="object"&&s!==null){var I=s.$$typeof;switch(I){case e:switch(s=s.type,s){case t:case i:case o:case b:case S:return s;default:switch(s=s&&s.$$typeof,s){case m:case u:case h:case N:case _:case f:return s;default:return I}}case n:return I}}}return B.ContextConsumer=u,B.ContextProvider=f,B.Element=e,B.ForwardRef=h,B.Fragment=t,B.Lazy=N,B.Memo=_,B.Portal=n,B.Profiler=i,B.StrictMode=o,B.Suspense=b,B.SuspenseList=S,B.isAsyncMode=function(){return!1},B.isConcurrentMode=function(){return!1},B.isContextConsumer=function(s){return R(s)===u},B.isContextProvider=function(s){return R(s)===f},B.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===e},B.isForwardRef=function(s){return R(s)===h},B.isFragment=function(s){return R(s)===t},B.isLazy=function(s){return R(s)===N},B.isMemo=function(s){return R(s)===_},B.isPortal=function(s){return R(s)===n},B.isProfiler=function(s){return R(s)===i},B.isStrictMode=function(s){return R(s)===o},B.isSuspense=function(s){return R(s)===b},B.isSuspenseList=function(s){return R(s)===S},B.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===t||s===i||s===o||s===b||s===S||s===z||typeof s=="object"&&s!==null&&(s.$$typeof===N||s.$$typeof===_||s.$$typeof===f||s.$$typeof===u||s.$$typeof===h||s.$$typeof===x||s.getModuleId!==void 0)},B.typeOf=R,B}var W={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et;function fr(){return Et||(Et=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),u=Symbol.for("react.context"),m=Symbol.for("react.server_context"),h=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),x=!1,R=!1,s=!1,I=!1,C=!1,O;O=Symbol.for("react.module.reference");function A(y){return!!(typeof y=="string"||typeof y=="function"||y===t||y===i||C||y===o||y===b||y===S||I||y===z||x||R||s||typeof y=="object"&&y!==null&&(y.$$typeof===N||y.$$typeof===_||y.$$typeof===f||y.$$typeof===u||y.$$typeof===h||y.$$typeof===O||y.getModuleId!==void 0))}function c(y){if(typeof y=="object"&&y!==null){var k=y.$$typeof;switch(k){case e:var Z=y.type;switch(Z){case t:case i:case o:case b:case S:return Z;default:var F=Z&&Z.$$typeof;switch(F){case m:case u:case h:case N:case _:case f:return F;default:return k}}case n:return k}}}var oe=u,me=f,ue=e,de=h,ve=t,Ee=N,ae=_,X=n,te=i,Q=o,we=b,le=S,re=!1,be=!1;function ye(y){return re||(re=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function _e(y){return be||(be=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function w(y){return c(y)===u}function g(y){return c(y)===f}function E(y){return typeof y=="object"&&y!==null&&y.$$typeof===e}function T(y){return c(y)===h}function a(y){return c(y)===t}function j(y){return c(y)===N}function p(y){return c(y)===_}function G(y){return c(y)===n}function D(y){return c(y)===i}function M(y){return c(y)===o}function l(y){return c(y)===b}function K(y){return c(y)===S}W.ContextConsumer=oe,W.ContextProvider=me,W.Element=ue,W.ForwardRef=de,W.Fragment=ve,W.Lazy=Ee,W.Memo=ae,W.Portal=X,W.Profiler=te,W.StrictMode=Q,W.Suspense=we,W.SuspenseList=le,W.isAsyncMode=ye,W.isConcurrentMode=_e,W.isContextConsumer=w,W.isContextProvider=g,W.isElement=E,W.isForwardRef=T,W.isFragment=a,W.isLazy=j,W.isMemo=p,W.isPortal=G,W.isProfiler=D,W.isStrictMode=M,W.isSuspense=l,W.isSuspenseList=K,W.isValidElementType=A,W.typeOf=c}()),W}(function(e){process.env.NODE_ENV==="production"?e.exports=lr():e.exports=fr()})(ur);function dr(e){function n(w,g,E,T,a){for(var j=0,p=0,G=0,D=0,M,l,K=0,y=0,k,Z=k=M=0,F=0,ie=0,xe=0,ce=0,Me=E.length,Pe=Me-1,Se,P="",ee="",Fe="",$e="",Ae;F<Me;){if(l=E.charCodeAt(F),F===Pe&&p+D+G+j!==0&&(p!==0&&(l=p===47?10:47),D=G=j=0,Me++,Pe++),p+D+G+j===0){if(F===Pe&&(0<ie&&(P=P.replace(N,"")),0<P.trim().length)){switch(l){case 32:case 9:case 59:case 13:case 10:break;default:P+=E.charAt(F)}l=59}switch(l){case 123:for(P=P.trim(),M=P.charCodeAt(0),k=1,ce=++F;F<Me;){switch(l=E.charCodeAt(F)){case 123:k++;break;case 125:k--;break;case 47:switch(l=E.charCodeAt(F+1)){case 42:case 47:e:{for(Z=F+1;Z<Pe;++Z)switch(E.charCodeAt(Z)){case 47:if(l===42&&E.charCodeAt(Z-1)===42&&F+2!==Z){F=Z+1;break e}break;case 10:if(l===47){F=Z+1;break e}}F=Z}}break;case 91:l++;case 40:l++;case 34:case 39:for(;F++<Pe&&E.charCodeAt(F)!==l;);}if(k===0)break;F++}switch(k=E.substring(ce,F),M===0&&(M=(P=P.replace(_,"").trim()).charCodeAt(0)),M){case 64:switch(0<ie&&(P=P.replace(N,"")),l=P.charCodeAt(1),l){case 100:case 109:case 115:case 45:ie=g;break;default:ie=we}if(k=n(g,ie,k,l,a+1),ce=k.length,0<re&&(ie=t(we,P,xe),Ae=m(3,k,ie,g,X,ae,ce,l,a,T),P=ie.join(""),Ae!==void 0&&(ce=(k=Ae.trim()).length)===0&&(l=0,k="")),0<ce)switch(l){case 115:P=P.replace(oe,u);case 100:case 109:case 45:k=P+"{"+k+"}";break;case 107:P=P.replace(C,"$1 $2"),k=P+"{"+k+"}",k=Q===1||Q===2&&f("@"+k,3)?"@-webkit-"+k+"@"+k:"@"+k;break;default:k=P+k,T===112&&(k=(ee+=k,""))}else k="";break;default:k=n(g,t(g,P,xe),k,T,a+1)}Fe+=k,k=xe=ie=Z=M=0,P="",l=E.charCodeAt(++F);break;case 125:case 59:if(P=(0<ie?P.replace(N,""):P).trim(),1<(ce=P.length))switch(Z===0&&(M=P.charCodeAt(0),M===45||96<M&&123>M)&&(ce=(P=P.replace(" ",":")).length),0<re&&(Ae=m(1,P,g,w,X,ae,ee.length,T,a,T))!==void 0&&(ce=(P=Ae.trim()).length)===0&&(P="\0\0"),M=P.charCodeAt(0),l=P.charCodeAt(1),M){case 0:break;case 64:if(l===105||l===99){$e+=P+E.charAt(F);break}default:P.charCodeAt(ce-1)!==58&&(ee+=i(P,M,l,P.charCodeAt(2)))}xe=ie=Z=M=0,P="",l=E.charCodeAt(++F)}}switch(l){case 13:case 10:p===47?p=0:1+M===0&&T!==107&&0<P.length&&(ie=1,P+="\0"),0<re*ye&&m(0,P,g,w,X,ae,ee.length,T,a,T),ae=1,X++;break;case 59:case 125:if(p+D+G+j===0){ae++;break}default:switch(ae++,Se=E.charAt(F),l){case 9:case 32:if(D+j+p===0)switch(K){case 44:case 58:case 9:case 32:Se="";break;default:l!==32&&(Se=" ")}break;case 0:Se="\\0";break;case 12:Se="\\f";break;case 11:Se="\\v";break;case 38:D+p+j===0&&(ie=xe=1,Se="\f"+Se);break;case 108:if(D+p+j+te===0&&0<Z)switch(F-Z){case 2:K===112&&E.charCodeAt(F-3)===58&&(te=K);case 8:y===111&&(te=y)}break;case 58:D+p+j===0&&(Z=F);break;case 44:p+G+D+j===0&&(ie=1,Se+="\r");break;case 34:case 39:p===0&&(D=D===l?0:D===0?l:D);break;case 91:D+p+G===0&&j++;break;case 93:D+p+G===0&&j--;break;case 41:D+p+j===0&&G--;break;case 40:if(D+p+j===0){if(M===0)switch(2*K+3*y){case 533:break;default:M=1}G++}break;case 64:p+G+D+j+Z+k===0&&(k=1);break;case 42:case 47:if(!(0<D+j+G))switch(p){case 0:switch(2*l+3*E.charCodeAt(F+1)){case 235:p=47;break;case 220:ce=F,p=42}break;case 42:l===47&&K===42&&ce+2!==F&&(E.charCodeAt(ce+2)===33&&(ee+=E.substring(ce,F+1)),Se="",p=0)}}p===0&&(P+=Se)}y=K,K=l,F++}if(ce=ee.length,0<ce){if(ie=g,0<re&&(Ae=m(2,ee,ie,w,X,ae,ce,T,a,T),Ae!==void 0&&(ee=Ae).length===0))return $e+ee+Fe;if(ee=ie.join(",")+"{"+ee+"}",Q*te!==0){switch(Q!==2||f(ee,2)||(te=0),te){case 111:ee=ee.replace(A,":-moz-$1")+ee;break;case 112:ee=ee.replace(O,"::-webkit-input-$1")+ee.replace(O,"::-moz-$1")+ee.replace(O,":-ms-input-$1")+ee}te=0}}return $e+ee+Fe}function t(w,g,E){var T=g.trim().split(s);g=T;var a=T.length,j=w.length;switch(j){case 0:case 1:var p=0;for(w=j===0?"":w[0]+" ";p<a;++p)g[p]=o(w,g[p],E).trim();break;default:var G=p=0;for(g=[];p<a;++p)for(var D=0;D<j;++D)g[G++]=o(w[D]+" ",T[p],E).trim()}return g}function o(w,g,E){var T=g.charCodeAt(0);switch(33>T&&(T=(g=g.trim()).charCodeAt(0)),T){case 38:return g.replace(I,"$1"+w.trim());case 58:return w.trim()+g.replace(I,"$1"+w.trim());default:if(0<1*E&&0<g.indexOf("\f"))return g.replace(I,(w.charCodeAt(0)===58?"":"$1")+w.trim())}return w+g}function i(w,g,E,T){var a=w+";",j=2*g+3*E+4*T;if(j===944){w=a.indexOf(":",9)+1;var p=a.substring(w,a.length-1).trim();return p=a.substring(0,w).trim()+p+";",Q===1||Q===2&&f(p,1)?"-webkit-"+p+p:p}if(Q===0||Q===2&&!f(a,1))return a;switch(j){case 1015:return a.charCodeAt(10)===97?"-webkit-"+a+a:a;case 951:return a.charCodeAt(3)===116?"-webkit-"+a+a:a;case 963:return a.charCodeAt(5)===110?"-webkit-"+a+a:a;case 1009:if(a.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(a.charCodeAt(8)===45)return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(Ee,"$1-webkit-$2")+a;break;case 932:if(a.charCodeAt(4)===45)switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(a.charCodeAt(8)!==99)break;return p=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+p+"-webkit-"+a+"-ms-flex-pack"+p+a;case 1005:return x.test(a)?a.replace(z,":-webkit-")+a.replace(z,":-moz-")+a:a;case 1e3:switch(p=a.substring(13).trim(),g=p.indexOf("-")+1,p.charCodeAt(0)+p.charCodeAt(g)){case 226:p=a.replace(c,"tb");break;case 232:p=a.replace(c,"tb-rl");break;case 220:p=a.replace(c,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+p+a;case 1017:if(a.indexOf("sticky",9)===-1)break;case 975:switch(g=(a=w).length-10,p=(a.charCodeAt(g)===33?a.substring(0,g):a).substring(w.indexOf(":",7)+1).trim(),j=p.charCodeAt(0)+(p.charCodeAt(7)|0)){case 203:if(111>p.charCodeAt(8))break;case 115:a=a.replace(p,"-webkit-"+p)+";"+a;break;case 207:case 102:a=a.replace(p,"-webkit-"+(102<j?"inline-":"")+"box")+";"+a.replace(p,"-webkit-"+p)+";"+a.replace(p,"-ms-"+p+"box")+";"+a}return a+";";case 938:if(a.charCodeAt(5)===45)switch(a.charCodeAt(6)){case 105:return p=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+p+"-ms-flex-"+p+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(ue,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(ue,"")+a}break;case 973:case 989:if(a.charCodeAt(3)!==45||a.charCodeAt(4)===122)break;case 931:case 953:if(ve.test(w)===!0)return(p=w.substring(w.indexOf(":")+1)).charCodeAt(0)===115?i(w.replace("stretch","fill-available"),g,E,T).replace(":fill-available",":stretch"):a.replace(p,"-webkit-"+p)+a.replace(p,"-moz-"+p.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(a.charCodeAt(5)===102?"-ms-"+a:"")+a,E+T===211&&a.charCodeAt(13)===105&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(R,"$1-webkit-$2")+a}return a}function f(w,g){var E=w.indexOf(g===1?":":"{"),T=w.substring(0,g!==3?E:10);return E=w.substring(E+1,w.length-1),be(g!==2?T:T.replace(de,"$1"),E,g)}function u(w,g){var E=i(g,g.charCodeAt(0),g.charCodeAt(1),g.charCodeAt(2));return E!==g+";"?E.replace(me," or ($1)").substring(4):"("+g+")"}function m(w,g,E,T,a,j,p,G,D,M){for(var l=0,K=g,y;l<re;++l)switch(y=le[l].call(S,w,K,E,T,a,j,p,G,D,M)){case void 0:case!1:case!0:case null:break;default:K=y}if(K!==g)return K}function h(w){switch(w){case void 0:case null:re=le.length=0;break;default:if(typeof w=="function")le[re++]=w;else if(typeof w=="object")for(var g=0,E=w.length;g<E;++g)h(w[g]);else ye=!!w|0}return h}function b(w){return w=w.prefix,w!==void 0&&(be=null,w?typeof w!="function"?Q=1:(Q=2,be=w):Q=0),b}function S(w,g){var E=w;if(33>E.charCodeAt(0)&&(E=E.trim()),_e=E,E=[_e],0<re){var T=m(-1,g,E,E,X,ae,0,0,0,0);T!==void 0&&typeof T=="string"&&(g=T)}var a=n(we,E,g,0,0);return 0<re&&(T=m(-2,a,E,E,X,ae,a.length,0,0,0),T!==void 0&&(a=T)),_e="",te=0,ae=X=1,a}var _=/^\0+/g,N=/[\0\r\f]/g,z=/: */g,x=/zoo|gra/,R=/([,: ])(transform)/g,s=/,\r+?/g,I=/([\t\r\n ])*\f?&/g,C=/@(k\w+)\s*(\S*)\s*/,O=/::(place)/g,A=/:(read-only)/g,c=/[svh]\w+-[tblr]{2}/,oe=/\(\s*(.*)\s*\)/g,me=/([\s\S]*?);/g,ue=/-self|flex-/g,de=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ve=/stretch|:\s*\w+\-(?:conte|avail)/,Ee=/([^-])(image-set\()/,ae=1,X=1,te=0,Q=1,we=[],le=[],re=0,be=null,ye=0,_e="";return S.use=h,S.set=b,e!==void 0&&b(e),S}var pr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hr(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var mr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,wt=hr(function(e){return mr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Qe={},vr={get exports(){return Qe},set exports(e){Qe=e}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _t;function yr(){if(_t)return U;_t=1;var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,f=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,m=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,b=e?Symbol.for("react.concurrent_mode"):60111,S=e?Symbol.for("react.forward_ref"):60112,_=e?Symbol.for("react.suspense"):60113,N=e?Symbol.for("react.suspense_list"):60120,z=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,s=e?Symbol.for("react.fundamental"):60117,I=e?Symbol.for("react.responder"):60118,C=e?Symbol.for("react.scope"):60119;function O(c){if(typeof c=="object"&&c!==null){var oe=c.$$typeof;switch(oe){case n:switch(c=c.type,c){case h:case b:case o:case f:case i:case _:return c;default:switch(c=c&&c.$$typeof,c){case m:case S:case x:case z:case u:return c;default:return oe}}case t:return oe}}}function A(c){return O(c)===b}return U.AsyncMode=h,U.ConcurrentMode=b,U.ContextConsumer=m,U.ContextProvider=u,U.Element=n,U.ForwardRef=S,U.Fragment=o,U.Lazy=x,U.Memo=z,U.Portal=t,U.Profiler=f,U.StrictMode=i,U.Suspense=_,U.isAsyncMode=function(c){return A(c)||O(c)===h},U.isConcurrentMode=A,U.isContextConsumer=function(c){return O(c)===m},U.isContextProvider=function(c){return O(c)===u},U.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===n},U.isForwardRef=function(c){return O(c)===S},U.isFragment=function(c){return O(c)===o},U.isLazy=function(c){return O(c)===x},U.isMemo=function(c){return O(c)===z},U.isPortal=function(c){return O(c)===t},U.isProfiler=function(c){return O(c)===f},U.isStrictMode=function(c){return O(c)===i},U.isSuspense=function(c){return O(c)===_},U.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===o||c===b||c===f||c===i||c===_||c===N||typeof c=="object"&&c!==null&&(c.$$typeof===x||c.$$typeof===z||c.$$typeof===u||c.$$typeof===m||c.$$typeof===S||c.$$typeof===s||c.$$typeof===I||c.$$typeof===C||c.$$typeof===R)},U.typeOf=O,U}var H={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ct;function gr(){return Ct||(Ct=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,f=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,m=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,b=e?Symbol.for("react.concurrent_mode"):60111,S=e?Symbol.for("react.forward_ref"):60112,_=e?Symbol.for("react.suspense"):60113,N=e?Symbol.for("react.suspense_list"):60120,z=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,s=e?Symbol.for("react.fundamental"):60117,I=e?Symbol.for("react.responder"):60118,C=e?Symbol.for("react.scope"):60119;function O(l){return typeof l=="string"||typeof l=="function"||l===o||l===b||l===f||l===i||l===_||l===N||typeof l=="object"&&l!==null&&(l.$$typeof===x||l.$$typeof===z||l.$$typeof===u||l.$$typeof===m||l.$$typeof===S||l.$$typeof===s||l.$$typeof===I||l.$$typeof===C||l.$$typeof===R)}function A(l){if(typeof l=="object"&&l!==null){var K=l.$$typeof;switch(K){case n:var y=l.type;switch(y){case h:case b:case o:case f:case i:case _:return y;default:var k=y&&y.$$typeof;switch(k){case m:case S:case x:case z:case u:return k;default:return K}}case t:return K}}}var c=h,oe=b,me=m,ue=u,de=n,ve=S,Ee=o,ae=x,X=z,te=t,Q=f,we=i,le=_,re=!1;function be(l){return re||(re=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ye(l)||A(l)===h}function ye(l){return A(l)===b}function _e(l){return A(l)===m}function w(l){return A(l)===u}function g(l){return typeof l=="object"&&l!==null&&l.$$typeof===n}function E(l){return A(l)===S}function T(l){return A(l)===o}function a(l){return A(l)===x}function j(l){return A(l)===z}function p(l){return A(l)===t}function G(l){return A(l)===f}function D(l){return A(l)===i}function M(l){return A(l)===_}H.AsyncMode=c,H.ConcurrentMode=oe,H.ContextConsumer=me,H.ContextProvider=ue,H.Element=de,H.ForwardRef=ve,H.Fragment=Ee,H.Lazy=ae,H.Memo=X,H.Portal=te,H.Profiler=Q,H.StrictMode=we,H.Suspense=le,H.isAsyncMode=be,H.isConcurrentMode=ye,H.isContextConsumer=_e,H.isContextProvider=w,H.isElement=g,H.isForwardRef=E,H.isFragment=T,H.isLazy=a,H.isMemo=j,H.isPortal=p,H.isProfiler=G,H.isStrictMode=D,H.isSuspense=M,H.isValidElementType=O,H.typeOf=A}()),H}(function(e){process.env.NODE_ENV==="production"?e.exports=yr():e.exports=gr()})(vr);var et=Qe,br={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Sr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Er={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tt={};tt[et.ForwardRef]=Er,tt[et.Memo]=Rt;function xt(e){return et.isMemo(e)?Rt:tt[e.$$typeof]||br}var wr=Object.defineProperty,_r=Object.getOwnPropertyNames,At=Object.getOwnPropertySymbols,Cr=Object.getOwnPropertyDescriptor,Rr=Object.getPrototypeOf,Tt=Object.prototype;function Pt(e,n,t){if(typeof n!="string"){if(Tt){var o=Rr(n);o&&o!==Tt&&Pt(e,o,t)}var i=_r(n);At&&(i=i.concat(At(n)));for(var f=xt(e),u=xt(n),m=0;m<i.length;++m){var h=i[m];if(!Sr[h]&&!(t&&t[h])&&!(u&&u[h])&&!(f&&f[h])){var b=Cr(n,h);try{wr(e,h,b)}catch{}}}}return e}var xr=Pt;function Te(){return(Te=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var $t=function(e,n){for(var t=[e[0]],o=0,i=n.length;o<i;o+=1)t.push(n[o],e[o+1]);return t},rt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Be.typeOf(e)},Ge=Object.freeze([]),Oe=Object.freeze({});function We(e){return typeof e=="function"}function nt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function ot(e){return e&&typeof e.styledComponentId=="string"}var Ie=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",at=typeof window<"u"&&"HTMLElement"in window,Ar=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production"),Tr=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

`,2:`Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,3:`Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,4:`The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,5:`The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,6:`Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:`ThemeProvider: Please make your "theme" prop an object.

`,9:"Missing document `<head>`\n\n",10:`Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,11:`_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:`%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,14:`ThemeProvider: "theme" prop is required.

`,15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:`Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,17:`CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`}:{};function Pr(){for(var e=arguments.length<=0?void 0:arguments[0],n=[],t=1,o=arguments.length;t<o;t+=1)n.push(t<0||arguments.length<=t?void 0:arguments[t]);return n.forEach(function(i){e=e.replace(/%[a-z]/,i)}),e}function De(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(Pr.apply(void 0,[Tr[e]].concat(t)).trim())}var $r=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var o=0,i=0;i<t;i++)o+=this.groupSizes[i];return o},n.insertRules=function(t,o){if(t>=this.groupSizes.length){for(var i=this.groupSizes,f=i.length,u=f;t>=u;)(u<<=1)<0&&De(16,""+t);this.groupSizes=new Uint32Array(u),this.groupSizes.set(i),this.length=u;for(var m=f;m<u;m++)this.groupSizes[m]=0}for(var h=this.indexOfGroup(t+1),b=0,S=o.length;b<S;b++)this.tag.insertRule(h,o[b])&&(this.groupSizes[t]++,h++)},n.clearGroup=function(t){if(t<this.length){var o=this.groupSizes[t],i=this.indexOfGroup(t),f=i+o;this.groupSizes[t]=0;for(var u=i;u<f;u++)this.tag.deleteRule(i)}},n.getGroup=function(t){var o="";if(t>=this.length||this.groupSizes[t]===0)return o;for(var i=this.groupSizes[t],f=this.indexOfGroup(t),u=f+i,m=f;m<u;m++)o+=this.tag.getRule(m)+`/*!sc*/
`;return o},e}(),qe=new Map,Xe=new Map,Ue=1,Ze=function(e){if(qe.has(e))return qe.get(e);for(;Xe.has(Ue);)Ue++;var n=Ue++;return process.env.NODE_ENV!=="production"&&((0|n)<0||n>1<<30)&&De(16,""+n),qe.set(e,n),Xe.set(n,e),n},kr=function(e){return Xe.get(e)},Or=function(e,n){n>=Ue&&(Ue=n+1),qe.set(e,n),Xe.set(n,e)},Nr="style["+Ie+'][data-styled-version="5.3.6"]',Ir=new RegExp("^"+Ie+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Dr=function(e,n,t){for(var o,i=t.split(","),f=0,u=i.length;f<u;f++)(o=i[f])&&e.registerName(n,o)},jr=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),o=[],i=0,f=t.length;i<f;i++){var u=t[i].trim();if(u){var m=u.match(Ir);if(m){var h=0|parseInt(m[1],10),b=m[2];h!==0&&(Or(b,h),Dr(e,b,m[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(u)}}},Mr=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},kt=function(e){var n=document.head,t=e||n,o=document.createElement("style"),i=function(m){for(var h=m.childNodes,b=h.length;b>=0;b--){var S=h[b];if(S&&S.nodeType===1&&S.hasAttribute(Ie))return S}}(t),f=i!==void 0?i.nextSibling:null;o.setAttribute(Ie,"active"),o.setAttribute("data-styled-version","5.3.6");var u=Mr();return u&&o.setAttribute("nonce",u),t.insertBefore(o,f),o},Fr=function(){function e(t){var o=this.element=kt(t);o.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var f=document.styleSheets,u=0,m=f.length;u<m;u++){var h=f[u];if(h.ownerNode===i)return h}De(17)}(o),this.length=0}var n=e.prototype;return n.insertRule=function(t,o){try{return this.sheet.insertRule(o,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var o=this.sheet.cssRules[t];return o!==void 0&&typeof o.cssText=="string"?o.cssText:""},e}(),Lr=function(){function e(t){var o=this.element=kt(t);this.nodes=o.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,o){if(t<=this.length&&t>=0){var i=document.createTextNode(o),f=this.nodes[t];return this.element.insertBefore(i,f||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),zr=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,o){return t<=this.length&&(this.rules.splice(t,0,o),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ot=at,Yr={isServer:!at,useCSSOMInjection:!Ar},Nt=function(){function e(t,o,i){t===void 0&&(t=Oe),o===void 0&&(o={}),this.options=Te({},Yr,{},t),this.gs=o,this.names=new Map(i),this.server=!!t.isServer,!this.server&&at&&Ot&&(Ot=!1,function(f){for(var u=document.querySelectorAll(Nr),m=0,h=u.length;m<h;m++){var b=u[m];b&&b.getAttribute(Ie)!=="active"&&(jr(f,b),b.parentNode&&b.parentNode.removeChild(b))}}(this))}e.registerId=function(t){return Ze(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,o){return o===void 0&&(o=!0),new e(Te({},this.options,{},t),this.gs,o&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(i=(o=this.options).isServer,f=o.useCSSOMInjection,u=o.target,t=i?new zr(u):f?new Fr(u):new Lr(u),new $r(t)));var t,o,i,f,u},n.hasNameForId=function(t,o){return this.names.has(t)&&this.names.get(t).has(o)},n.registerName=function(t,o){if(Ze(t),this.names.has(t))this.names.get(t).add(o);else{var i=new Set;i.add(o),this.names.set(t,i)}},n.insertRules=function(t,o,i){this.registerName(t,o),this.getTag().insertRules(Ze(t),i)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(Ze(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var o=t.getTag(),i=o.length,f="",u=0;u<i;u++){var m=kr(u);if(m!==void 0){var h=t.names.get(m),b=o.getGroup(u);if(h&&b&&h.size){var S=Ie+".g"+u+'[id="'+m+'"]',_="";h!==void 0&&h.forEach(function(N){N.length>0&&(_+=N+",")}),f+=""+b+S+'{content:"'+_+`"}/*!sc*/
`}}}return f}(this)},e}(),Vr=/(a)(d)/gi,It=function(e){return String.fromCharCode(e+(e>25?39:97))};function it(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=It(n%52)+t;return(It(n%52)+t).replace(Vr,"$1-$2")}var Ne=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},Dt=function(e){return Ne(5381,e)};function Br(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(We(t)&&!ot(t))return!1}return!0}var Wr=Dt("5.3.6"),Ur=function(){function e(n,t,o){this.rules=n,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(o===void 0||o.isStatic)&&Br(n),this.componentId=t,this.baseHash=Ne(Wr,t),this.baseStyle=o,Nt.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,o){var i=this.componentId,f=[];if(this.baseStyle&&f.push(this.baseStyle.generateAndInjectStyles(n,t,o)),this.isStatic&&!o.hash)if(this.staticRulesId&&t.hasNameForId(i,this.staticRulesId))f.push(this.staticRulesId);else{var u=je(this.rules,n,t,o).join(""),m=it(Ne(this.baseHash,u)>>>0);if(!t.hasNameForId(i,m)){var h=o(u,"."+m,void 0,i);t.insertRules(i,m,h)}f.push(m),this.staticRulesId=m}else{for(var b=this.rules.length,S=Ne(this.baseHash,o.hash),_="",N=0;N<b;N++){var z=this.rules[N];if(typeof z=="string")_+=z,process.env.NODE_ENV!=="production"&&(S=Ne(S,z+N));else if(z){var x=je(z,n,t,o),R=Array.isArray(x)?x.join(""):x;S=Ne(S,R+N),_+=R}}if(_){var s=it(S>>>0);if(!t.hasNameForId(i,s)){var I=o(_,"."+s,void 0,i);t.insertRules(i,s,I)}f.push(s)}}return f.join(" ")},e}(),Hr=/^\s*\/\/.*$/gm,Gr=[":","[",".","#"];function qr(e){var n,t,o,i,f=e===void 0?Oe:e,u=f.options,m=u===void 0?Oe:u,h=f.plugins,b=h===void 0?Ge:h,S=new dr(m),_=[],N=function(R){function s(I){if(I)try{R(I+"}")}catch{}}return function(I,C,O,A,c,oe,me,ue,de,ve){switch(I){case 1:if(de===0&&C.charCodeAt(0)===64)return R(C+";"),"";break;case 2:if(ue===0)return C+"/*|*/";break;case 3:switch(ue){case 102:case 112:return R(O[0]+C),"";default:return C+(ve===0?"/*|*/":"")}case-2:C.split("/*|*/}").forEach(s)}}}(function(R){_.push(R)}),z=function(R,s,I){return s===0&&Gr.indexOf(I[t.length])!==-1||I.match(i)?R:"."+n};function x(R,s,I,C){C===void 0&&(C="&");var O=R.replace(Hr,""),A=s&&I?I+" "+s+" { "+O+" }":O;return n=C,t=s,o=new RegExp("\\"+t+"\\b","g"),i=new RegExp("(\\"+t+"\\b){2,}"),S(I||!s?"":s,A)}return S.use([].concat(b,[function(R,s,I){R===2&&I.length&&I[0].lastIndexOf(t)>0&&(I[0]=I[0].replace(o,z))},N,function(R){if(R===-2){var s=_;return _=[],s}}])),x.hash=b.length?b.reduce(function(R,s){return s.name||De(15),Ne(R,s.name)},5381).toString():"",x}var jt=fe.createContext();jt.Consumer;var Mt=fe.createContext(),Xr=(Mt.Consumer,new Nt),st=qr();function Zr(){return fe.useContext(jt)||Xr}function Kr(){return fe.useContext(Mt)||st}var Jr=function(){function e(n,t){var o=this;this.inject=function(i,f){f===void 0&&(f=st);var u=o.name+f.hash;i.hasNameForId(o.id,u)||i.insertRules(o.id,u,f(o.rules,u,"@keyframes"))},this.toString=function(){return De(12,String(o.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=st),this.name+n.hash},e}(),Qr=/([A-Z])/,en=/([A-Z])/g,tn=/^ms-/,rn=function(e){return"-"+e.toLowerCase()};function Ft(e){return Qr.test(e)?e.replace(en,rn).replace(tn,"-ms-"):e}var Lt=function(e){return e==null||e===!1||e===""};function je(e,n,t,o){if(Array.isArray(e)){for(var i,f=[],u=0,m=e.length;u<m;u+=1)(i=je(e[u],n,t,o))!==""&&(Array.isArray(i)?f.push.apply(f,i):f.push(i));return f}if(Lt(e))return"";if(ot(e))return"."+e.styledComponentId;if(We(e)){if(typeof(b=e)!="function"||b.prototype&&b.prototype.isReactComponent||!n)return e;var h=e(n);return process.env.NODE_ENV!=="production"&&Be.isElement(h)&&console.warn(nt(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),je(h,n,t,o)}var b;return e instanceof Jr?t?(e.inject(t,o),e.getName(o)):e:rt(e)?function S(_,N){var z,x,R=[];for(var s in _)_.hasOwnProperty(s)&&!Lt(_[s])&&(Array.isArray(_[s])&&_[s].isCss||We(_[s])?R.push(Ft(s)+":",_[s],";"):rt(_[s])?R.push.apply(R,S(_[s],s)):R.push(Ft(s)+": "+(z=s,(x=_[s])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||z in pr?String(x).trim():x+"px")+";"));return N?[N+" {"].concat(R,["}"]):R}(e):e.toString()}var zt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function J(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];return We(e)||rt(e)?zt(je($t(Ge,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:zt(je($t(e,t)))}var Yt=/invalid hook call/i,Ke=new Set,nn=function(e,n){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(n?' with the id of "'+n+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,o=console.error;try{var i=!0;console.error=function(f){if(Yt.test(f))i=!1,Ke.delete(t);else{for(var u=arguments.length,m=new Array(u>1?u-1:0),h=1;h<u;h++)m[h-1]=arguments[h];o.apply(void 0,[f].concat(m))}},fe.useRef(),i&&!Ke.has(t)&&(console.warn(t),Ke.add(t))}catch(f){Yt.test(f.message)&&Ke.delete(t)}finally{console.error=o}}},on=function(e,n,t){return t===void 0&&(t=Oe),e.theme!==t.theme&&e.theme||n||t.theme},an=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sn=/(^-|-$)/g;function ct(e){return e.replace(an,"-").replace(sn,"")}var cn=function(e){return it(Dt(e)>>>0)};function Je(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var ut=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},un=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function ln(e,n,t){var o=e[t];ut(n)&&ut(o)?Vt(o,n):e[t]=n}function Vt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];for(var i=0,f=t;i<f.length;i++){var u=f[i];if(ut(u))for(var m in u)un(m)&&ln(e,u[m],m)}return e}var Bt=fe.createContext();Bt.Consumer;var lt={};function Wt(e,n,t){var o=ot(e),i=!Je(e),f=n.attrs,u=f===void 0?Ge:f,m=n.componentId,h=m===void 0?function(C,O){var A=typeof C!="string"?"sc":ct(C);lt[A]=(lt[A]||0)+1;var c=A+"-"+cn("5.3.6"+A+lt[A]);return O?O+"-"+c:c}(n.displayName,n.parentComponentId):m,b=n.displayName,S=b===void 0?function(C){return Je(C)?"styled."+C:"Styled("+nt(C)+")"}(e):b,_=n.displayName&&n.componentId?ct(n.displayName)+"-"+n.componentId:n.componentId||h,N=o&&e.attrs?Array.prototype.concat(e.attrs,u).filter(Boolean):u,z=n.shouldForwardProp;o&&e.shouldForwardProp&&(z=n.shouldForwardProp?function(C,O,A){return e.shouldForwardProp(C,O,A)&&n.shouldForwardProp(C,O,A)}:e.shouldForwardProp);var x,R=new Ur(t,_,o?e.componentStyle:void 0),s=R.isStatic&&u.length===0,I=function(C,O){return function(A,c,oe,me){var ue=A.attrs,de=A.componentStyle,ve=A.defaultProps,Ee=A.foldedComponentIds,ae=A.shouldForwardProp,X=A.styledComponentId,te=A.target;process.env.NODE_ENV!=="production"&&fe.useDebugValue(X);var Q=function(T,a,j){T===void 0&&(T=Oe);var p=Te({},a,{theme:T}),G={};return j.forEach(function(D){var M,l,K,y=D;for(M in We(y)&&(y=y(p)),y)p[M]=G[M]=M==="className"?(l=G[M],K=y[M],l&&K?l+" "+K:l||K):y[M]}),[p,G]}(on(c,fe.useContext(Bt),ve)||Oe,c,ue),we=Q[0],le=Q[1],re=function(T,a,j,p){var G=Zr(),D=Kr(),M=a?T.generateAndInjectStyles(Oe,G,D):T.generateAndInjectStyles(j,G,D);return process.env.NODE_ENV!=="production"&&fe.useDebugValue(M),process.env.NODE_ENV!=="production"&&!a&&p&&p(M),M}(de,me,we,process.env.NODE_ENV!=="production"?A.warnTooManyClasses:void 0),be=oe,ye=le.$as||c.$as||le.as||c.as||te,_e=Je(ye),w=le!==c?Te({},c,{},le):c,g={};for(var E in w)E[0]!=="$"&&E!=="as"&&(E==="forwardedAs"?g.as=w[E]:(ae?ae(E,wt,ye):!_e||wt(E))&&(g[E]=w[E]));return c.style&&le.style!==c.style&&(g.style=Te({},c.style,{},le.style)),g.className=Array.prototype.concat(Ee,X,re!==X?re:null,c.className,le.className).filter(Boolean).join(" "),g.ref=be,fe.createElement(ye,g)}(x,C,O,s)};return I.displayName=S,(x=fe.forwardRef(I)).attrs=N,x.componentStyle=R,x.displayName=S,x.shouldForwardProp=z,x.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ge,x.styledComponentId=_,x.target=o?e.target:e,x.withComponent=function(C){var O=n.componentId,A=function(oe,me){if(oe==null)return{};var ue,de,ve={},Ee=Object.keys(oe);for(de=0;de<Ee.length;de++)ue=Ee[de],me.indexOf(ue)>=0||(ve[ue]=oe[ue]);return ve}(n,["componentId"]),c=O&&O+"-"+(Je(C)?C:ct(nt(C)));return Wt(C,Te({},A,{attrs:N,componentId:c}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=o?Vt({},e.defaultProps,C):C}}),process.env.NODE_ENV!=="production"&&(nn(S,_),x.warnTooManyClasses=function(C,O){var A={},c=!1;return function(oe){if(!c&&(A[oe]=!0,Object.keys(A).length>=200)){var me=O?' with the id of "'+O+'"':"";console.warn("Over 200 classes were generated for component "+C+me+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),c=!0,A={}}}}(S,_)),x.toString=function(){return"."+x.styledComponentId},i&&xr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ft=function(e){return function n(t,o,i){if(i===void 0&&(i=Oe),!Be.isValidElementType(o))return De(1,String(o));var f=function(){return t(o,i,J.apply(void 0,arguments))};return f.withConfig=function(u){return n(t,o,Te({},i,{},u))},f.attrs=function(u){return n(t,o,Te({},i,{attrs:Array.prototype.concat(i.attrs,u).filter(Boolean)}))},f}(Wt,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ft[e]=ft(e)}),process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const Re=ft,fn=Re.hr`
	width: 100%;

	${({theme:{colors:e}})=>J`
			border: 0.5px solid ${e.color5};
		`}
`,dn=({"data-testid":e="break"})=>ge(fn,{"data-testid":e}),pn=Re.div`
	text-align: center;
	display: flex;

	> div {
		width: 10px;
		height: 10px;
		background-color: ${({theme:e})=>e.colors.main};
		border-radius: 100%;
		display: inline-block;
		animation: animation-loader-button 1.4s infinite ease-in-out both;
	}

	.load1 {
		animation-delay: -0.32s;
	}

	.load2 {
		animation-delay: -0.16s;
	}

	@keyframes animation-loader-button {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
`,hn=Re.div`
	display: inline-block;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	&:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		border: ${({theme:e})=>`6px solid ${e.colors.secondary}`};
		border-color: ${({theme:e})=>`${e.colors.secondary} transparent ${e.colors.secondary} transparent`};
		animation: animation-loader 1.2s linear infinite;
	}

	@keyframes animation-loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`,dt=({type:e="button","data-testid":n="loader"})=>e==="button"?bt(pn,{"data-testid":n,children:[ge("div",{className:"load1"}),ge("div",{className:"load2"}),ge("div",{className:"load3"})]}):ge(hn,{"data-testid":n});dt.displayName="Loader";const mn=({colors:e},n="primary")=>({primary:J`
			color: ${e.main};
			background: ${e.secondary};

			&:hover {
				background: ${e.color1};
			}

			&:disabled,
			&[disabled] {
				background: ${e.color5};
				color: ${e.main};
				cursor: not-allowed;
			}
		`,secondary:J`
			color: ${e.secondary};
			background: ${e.main};
			border: 2px solid ${e.secondary};

			&:hover {
				background: ${e.secondary};
				color: ${e.main};
			}
		`,alert:J`
			color: ${e.secondary};
			background: ${e.error};

			&:hover {
				background: ${e.color5};
			}
		`})[n],vn=(e="center")=>({center:J`
			justify-content: center;
		`,left:J`
			justify-content: flex-start;
		`})[e],yn=Re.button`
	cursor: pointer;
	min-width: fit-content;
	min-height: 44px;
	max-height: 44px;
	border: 0;
	border-radius: 15px;
	display: flex;
	align-items: center;
	gap: 8px;
	transition: 0.2s;

	${({theme:{spaces:e,font:n},hasOnlyIcon:t,hasFullWidth:o,isDropdown:i})=>J`
			width: ${o&&"100%"};
			font-weight: ${n.weights.bold};
			padding: ${t?`${e.tiny} ${e.small}`:`${e.tiny} ${e.big}`};
			border-radius: ${i&&"15px 15px 0 0"};
		`}

	${({theme:e,variant:n})=>mn(e,n)}
	${({align:e})=>vn(e)}
`,Ut=({variant:e="primary",type:n="button",children:t,action:o,hasFullWidth:i=!1,hasOnlyIcon:f=!1,align:u="center",isLoading:m=!1,isDisabled:h=!1,isDropdown:b=!1,"data-testid":S="button"})=>ge(yn,{variant:e,type:n,onClick:o,hasFullWidth:i,hasOnlyIcon:f,align:u,disabled:h,isDropdown:b,"data-testid":S,children:m?ge(dt,{"data-testid":"button-loader"}):t});Ut.displayName="Button";const gn=({font:e,colors:n},t="h1")=>({h1:J`
			font-weight: ${e.weights.medium};
			font-size: ${e.sizes.h1};
			line-height: ${e.lineHeight.h1};
			letter-spacing: ${e.letterSpacing.h1};
			color: ${n.color1};
			text-transform: uppercase;
		`,h2:J`
			font-weight: ${e.weights.regular};
			font-size: ${e.sizes.h2};
			line-height: ${e.lineHeight.h2};
			letter-spacing: ${e.letterSpacing.h2};
			color: ${n.color2};
		`})[t],bn=Re.h1`
	text-align: ${({align:e})=>e};

	${({theme:e,level:n})=>gn(e,`h${n}`)};
`,Ht=({level:e=1,children:n,align:t="center","data-testid":o="heading"})=>ge(bn,{as:`h${e}`,level:e,align:t,"data-testid":o,children:n});Ht.displayName="Heading";const Sn=({colors:e},n="avatar")=>({avatar:J`
			cursor: pointer;
			width: 120px;
			height: 120px;
			background: ${e.main};
			border: 2px solid ${e.secondary};
			border-radius: 100%;
		`})[n],En=Re.img`
	${({onClick:e})=>J`
			cursor: ${e&&"pointer"};
		`}

	${({theme:e,variant:n})=>Sn(e,n)}
`,Gt=({src:e,width:n,height:t,alt:o,variant:i="default",onClick:f,"data-testid":u="image"})=>ge(En,{src:e,width:n,height:t,alt:o,variant:i,onClick:f,"data-testid":u});Gt.displayName="Image";const wn=Re.div`
	${({theme:{breakpoints:e}})=>J`
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			overflow: scroll;

			@media (max-width: ${e.mobile}px) {
				width: 100%;
				height: calc(100vh - 112px);
				overflow: none;
			}
		`}
`,_n=Re.div`
	${({theme:{spaces:e,colors:n,breakpoints:t},image:o})=>J`
			width: calc(100% - 600px);
			height: calc(100vh - 84px);
			padding: calc(${e.huge} + ${e.huge}) ${e.huge};
			background: ${n.main};
			background-image: url(${o});
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			opacity: 0.5;
			display: ${!o&&"none"};

			@media (max-width: ${t.mobile}px) {
				display: none;
			}

			@media (max-width: ${t.tablet}px) {
				display: none;
			}
		`}
`,Cn=Re.div`
	${({theme:{spaces:e,breakpoints:n}})=>J`
			width: 400px;
			margin: 0 auto;
			padding: ${e.huge} ${e.big};
			display: flex;
			flex-direction: column;
			align-items: center;

			@media (max-width: ${n.mobile}px) {
				width: 100%;
				height: calc(100vh - 172px);
			}
		`}
`,qt=({children:e,image:n,"data-testid":t="layout"})=>bt(wn,{"data-testid":t,children:[ge(_n,{image:n}),ge(Cn,{children:e})]});qt.displayName="Layout";const Rn=({colors:e},n="label")=>({default:J`
			color: ${e.secondary};
		`,label:J`
			color: ${e.color5};
		`,error:J`
			color: ${e.error};
		`})[n],xn=({font:e},n="medium")=>({small:J`
			font-size: ${e.sizes.error};
		`,medium:J`
			font-size: ${e.sizes.default};
		`,big:J`
			font-size: ${e.sizes.info};
		`,large:J`
			font-size: ${e.sizes.icon};
		`,huge:J`
			font-size: ${e.sizes.notFound};
		`})[n],An=Re.p`
	font-size: ${({size:e})=>e};
	text-align: ${({align:e})=>e};
	min-height: 24px;
	display: flex;
	align-items: center;
	gap: 5px;

	${({theme:e,type:n})=>Rn(e,n)};
	${({theme:e,size:n})=>xn(e,n)};
`,Xt=({type:e="default",children:n,size:t="medium",align:o="center","data-testid":i="paragraph"})=>ge(An,{type:e,size:t,align:o,"data-testid":i,children:n});Xt.displayName="Paragraph";const Tn=Re.div`
	${({theme:{spaces:e},type:n,space:t="medium"})=>J`
			width: ${n==="horizontal"&&e[t]};
			height: ${n==="vertical"&&e[t]};
		`}
`,Zt=({type:e="horizontal",space:n="medium","data-testid":t="spacer"})=>ge(Tn,{type:e,space:n,"data-testid":t});Zt.displayName="Spacer",he.Break=dn,he.Button=Ut,he.Heading=Ht,he.Image=Gt,he.Layout=qt,he.Loader=dt,he.Paragraph=Xt,he.Spacer=Zt,Object.defineProperty(he,Symbol.toStringTag,{value:"Module"})});

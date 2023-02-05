(function(he,Q){typeof exports=="object"&&typeof module<"u"?Q(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],Q):(he=typeof globalThis<"u"?globalThis:he||self,Q(he.novelUI={},he.r))})(this,function(he,Q){"use strict";var qe={},vr={get exports(){return qe},set exports(e){qe=e}},Ge={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et;function gr(){if(Et)return Ge;Et=1;var e=Q,r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(h,m,v){var y,E={},T=null,I=null;v!==void 0&&(T=""+v),m.key!==void 0&&(T=""+m.key),m.ref!==void 0&&(I=m.ref);for(y in m)o.call(m,y)&&!s.hasOwnProperty(y)&&(E[y]=m[y]);if(h&&h.defaultProps)for(y in m=h.defaultProps,m)E[y]===void 0&&(E[y]=m[y]);return{$$typeof:r,type:h,key:T,ref:I,props:E,_owner:i.current}}return Ge.Fragment=t,Ge.jsx=c,Ge.jsxs=c,Ge}var Be={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt;function br(){return wt||(wt=1,process.env.NODE_ENV!=="production"&&function(){var e=Q,r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),x=Symbol.iterator,R="@@iterator";function l(n){if(n===null||typeof n!="object")return null;var d=x&&n[x]||n[R];return typeof d=="function"?d:null}var D=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(n){{for(var d=arguments.length,g=new Array(d>1?d-1:0),k=1;k<d;k++)g[k-1]=arguments[k];N("error",n,g)}}function N(n,d,g){{var k=D.ReactDebugCurrentFrame,G=k.getStackAddendum();G!==""&&(d+="%s",g=g.concat([G]));var X=g.map(function(V){return String(V)});X.unshift("Warning: "+d),Function.prototype.apply.call(console[n],console,X)}}var A=!1,u=!1,ie=!1,ve=!1,fe=!1,pe;pe=Symbol.for("react.module.reference");function ge(n){return!!(typeof n=="string"||typeof n=="function"||n===o||n===s||fe||n===i||n===v||n===y||ve||n===I||A||u||ie||typeof n=="object"&&n!==null&&(n.$$typeof===T||n.$$typeof===E||n.$$typeof===c||n.$$typeof===h||n.$$typeof===m||n.$$typeof===pe||n.getModuleId!==void 0))}function we(n,d,g){var k=n.displayName;if(k)return k;var G=d.displayName||d.name||"";return G!==""?g+"("+G+")":g}function se(n){return n.displayName||"Context"}function Z(n){if(n==null)return null;if(typeof n.tag=="number"&&_("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case o:return"Fragment";case t:return"Portal";case s:return"Profiler";case i:return"StrictMode";case v:return"Suspense";case y:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case h:var d=n;return se(d)+".Consumer";case c:var g=n;return se(g._context)+".Provider";case m:return we(n,n.render,"ForwardRef");case E:var k=n.displayName||null;return k!==null?k:Z(n.type)||"Memo";case T:{var G=n,X=G._payload,V=G._init;try{return Z(V(X))}catch{return null}}}return null}var ne=Object.assign,te=0,Ce,de,oe,Se,be,_e,C;function S(){}S.__reactDisabledLog=!0;function w(){{if(te===0){Ce=console.log,de=console.info,oe=console.warn,Se=console.error,be=console.group,_e=console.groupCollapsed,C=console.groupEnd;var n={configurable:!0,enumerable:!0,value:S,writable:!0};Object.defineProperties(console,{info:n,log:n,warn:n,error:n,group:n,groupCollapsed:n,groupEnd:n})}te++}}function P(){{if(te--,te===0){var n={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:ne({},n,{value:Ce}),info:ne({},n,{value:de}),warn:ne({},n,{value:oe}),error:ne({},n,{value:Se}),group:ne({},n,{value:be}),groupCollapsed:ne({},n,{value:_e}),groupEnd:ne({},n,{value:C})})}te<0&&_("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var a=D.ReactCurrentDispatcher,j;function p(n,d,g){{if(j===void 0)try{throw Error()}catch(G){var k=G.stack.trim().match(/\n( *(at )?)/);j=k&&k[1]||""}return`
`+j+n}}var q=!1,M;{var F=typeof WeakMap=="function"?WeakMap:Map;M=new F}function f(n,d){if(!n||q)return"";{var g=M.get(n);if(g!==void 0)return g}var k;q=!0;var G=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var X;X=a.current,a.current=null,w();try{if(d){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(Ie){k=Ie}Reflect.construct(n,[],V)}else{try{V.call()}catch(Ie){k=Ie}n.call(V.prototype)}}else{try{throw Error()}catch(Ie){k=Ie}n()}}catch(Ie){if(Ie&&k&&typeof Ie.stack=="string"){for(var z=Ie.stack.split(`
`),me=k.stack.split(`
`),ae=z.length-1,le=me.length-1;ae>=1&&le>=0&&z[ae]!==me[le];)le--;for(;ae>=1&&le>=0;ae--,le--)if(z[ae]!==me[le]){if(ae!==1||le!==1)do if(ae--,le--,le<0||z[ae]!==me[le]){var xe=`
`+z[ae].replace(" at new "," at ");return n.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",n.displayName)),typeof n=="function"&&M.set(n,xe),xe}while(ae>=1&&le>=0);break}}}finally{q=!1,a.current=X,P(),Error.prepareStackTrace=G}var Ve=n?n.displayName||n.name:"",yr=Ve?p(Ve):"";return typeof n=="function"&&M.set(n,yr),yr}function ee(n,d,g){return f(n,!1)}function b(n){var d=n.prototype;return!!(d&&d.isReactComponent)}function O(n,d,g){if(n==null)return"";if(typeof n=="function")return f(n,b(n));if(typeof n=="string")return p(n);switch(n){case v:return p("Suspense");case y:return p("SuspenseList")}if(typeof n=="object")switch(n.$$typeof){case m:return ee(n.render);case E:return O(n.type,d,g);case T:{var k=n,G=k._payload,X=k._init;try{return O(X(G),d,g)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,L={},ce=D.ReactDebugCurrentFrame;function Te(n){if(n){var d=n._owner,g=O(n.type,n._source,d?d.type:null);ce.setExtraStackFrame(g)}else ce.setExtraStackFrame(null)}function ue(n,d,g,k,G){{var X=Function.call.bind(J);for(var V in n)if(X(n,V)){var z=void 0;try{if(typeof n[V]!="function"){var me=Error((k||"React class")+": "+g+" type `"+V+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[V]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw me.name="Invariant Violation",me}z=n[V](d,V,k,g,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ae){z=ae}z&&!(z instanceof Error)&&(Te(G),_("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",k||"React class",g,V,typeof z),Te(null)),z instanceof Error&&!(z.message in L)&&(L[z.message]=!0,Te(G),_("Failed %s type: %s",g,z.message),Te(null))}}}var Le=Array.isArray;function ke(n){return Le(n)}function Ee(n){{var d=typeof Symbol=="function"&&Symbol.toStringTag,g=d&&n[Symbol.toStringTag]||n.constructor.name||"Object";return g}}function $(n){try{return re(n),!1}catch{return!0}}function re(n){return""+n}function ze(n){if($(n))return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ee(n)),re(n)}var Oe=D.ReactCurrentOwner,Pe={key:!0,ref:!0,__self:!0,__source:!0},cr,lr,vt;vt={};function Vn(n){if(J.call(n,"ref")){var d=Object.getOwnPropertyDescriptor(n,"ref").get;if(d&&d.isReactWarning)return!1}return n.ref!==void 0}function Gn(n){if(J.call(n,"key")){var d=Object.getOwnPropertyDescriptor(n,"key").get;if(d&&d.isReactWarning)return!1}return n.key!==void 0}function Bn(n,d){if(typeof n.ref=="string"&&Oe.current&&d&&Oe.current.stateNode!==d){var g=Z(Oe.current.type);vt[g]||(_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',Z(Oe.current.type),n.ref),vt[g]=!0)}}function Wn(n,d){{var g=function(){cr||(cr=!0,_("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",d))};g.isReactWarning=!0,Object.defineProperty(n,"key",{get:g,configurable:!0})}}function Un(n,d){{var g=function(){lr||(lr=!0,_("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",d))};g.isReactWarning=!0,Object.defineProperty(n,"ref",{get:g,configurable:!0})}}var Hn=function(n,d,g,k,G,X,V){var z={$$typeof:r,type:n,key:d,ref:g,props:V,_owner:X};return z._store={},Object.defineProperty(z._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(z,"_self",{configurable:!1,enumerable:!1,writable:!1,value:k}),Object.defineProperty(z,"_source",{configurable:!1,enumerable:!1,writable:!1,value:G}),Object.freeze&&(Object.freeze(z.props),Object.freeze(z)),z};function qn(n,d,g,k,G){{var X,V={},z=null,me=null;g!==void 0&&(ze(g),z=""+g),Gn(d)&&(ze(d.key),z=""+d.key),Vn(d)&&(me=d.ref,Bn(d,G));for(X in d)J.call(d,X)&&!Pe.hasOwnProperty(X)&&(V[X]=d[X]);if(n&&n.defaultProps){var ae=n.defaultProps;for(X in ae)V[X]===void 0&&(V[X]=ae[X])}if(z||me){var le=typeof n=="function"?n.displayName||n.name||"Unknown":n;z&&Wn(V,le),me&&Un(V,le)}return Hn(n,z,me,G,k,Oe.current,V)}}var gt=D.ReactCurrentOwner,ur=D.ReactDebugCurrentFrame;function Ye(n){if(n){var d=n._owner,g=O(n.type,n._source,d?d.type:null);ur.setExtraStackFrame(g)}else ur.setExtraStackFrame(null)}var bt;bt=!1;function St(n){return typeof n=="object"&&n!==null&&n.$$typeof===r}function fr(){{if(gt.current){var n=Z(gt.current.type);if(n)return`

Check the render method of \``+n+"`."}return""}}function Xn(n){{if(n!==void 0){var d=n.fileName.replace(/^.*[\\\/]/,""),g=n.lineNumber;return`

Check your code at `+d+":"+g+"."}return""}}var dr={};function Kn(n){{var d=fr();if(!d){var g=typeof n=="string"?n:n.displayName||n.name;g&&(d=`

Check the top-level render call using <`+g+">.")}return d}}function pr(n,d){{if(!n._store||n._store.validated||n.key!=null)return;n._store.validated=!0;var g=Kn(d);if(dr[g])return;dr[g]=!0;var k="";n&&n._owner&&n._owner!==gt.current&&(k=" It was passed a child from "+Z(n._owner.type)+"."),Ye(n),_('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',g,k),Ye(null)}}function hr(n,d){{if(typeof n!="object")return;if(ke(n))for(var g=0;g<n.length;g++){var k=n[g];St(k)&&pr(k,d)}else if(St(n))n._store&&(n._store.validated=!0);else if(n){var G=l(n);if(typeof G=="function"&&G!==n.entries)for(var X=G.call(n),V;!(V=X.next()).done;)St(V.value)&&pr(V.value,d)}}}function Zn(n){{var d=n.type;if(d==null||typeof d=="string")return;var g;if(typeof d=="function")g=d.propTypes;else if(typeof d=="object"&&(d.$$typeof===m||d.$$typeof===E))g=d.propTypes;else return;if(g){var k=Z(d);ue(g,n.props,"prop",k,n)}else if(d.PropTypes!==void 0&&!bt){bt=!0;var G=Z(d);_("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",G||"Unknown")}typeof d.getDefaultProps=="function"&&!d.getDefaultProps.isReactClassApproved&&_("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Jn(n){{for(var d=Object.keys(n.props),g=0;g<d.length;g++){var k=d[g];if(k!=="children"&&k!=="key"){Ye(n),_("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",k),Ye(null);break}}n.ref!==null&&(Ye(n),_("Invalid attribute `ref` supplied to `React.Fragment`."),Ye(null))}}function mr(n,d,g,k,G,X){{var V=ge(n);if(!V){var z="";(n===void 0||typeof n=="object"&&n!==null&&Object.keys(n).length===0)&&(z+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var me=Xn(G);me?z+=me:z+=fr();var ae;n===null?ae="null":ke(n)?ae="array":n!==void 0&&n.$$typeof===r?(ae="<"+(Z(n.type)||"Unknown")+" />",z=" Did you accidentally export a JSX literal instead of a component?"):ae=typeof n,_("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ae,z)}var le=qn(n,d,g,G,X);if(le==null)return le;if(V){var xe=d.children;if(xe!==void 0)if(k)if(ke(xe)){for(var Ve=0;Ve<xe.length;Ve++)hr(xe[Ve],n);Object.freeze&&Object.freeze(xe)}else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else hr(xe,n)}return n===o?Jn(le):Zn(le),le}}function Qn(n,d,g){return mr(n,d,g,!0)}function eo(n,d,g){return mr(n,d,g,!1)}var to=eo,ro=Qn;Be.Fragment=o,Be.jsx=to,Be.jsxs=ro}()),Be}(function(e){process.env.NODE_ENV==="production"?e.exports=gr():e.exports=br()})(vr);const ye=qe.jsx,rt=qe.jsxs;var We={},Sr={get exports(){return We},set exports(e){We=e}},B={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ct;function Er(){if(Ct)return B;Ct=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),x;x=Symbol.for("react.module.reference");function R(l){if(typeof l=="object"&&l!==null){var D=l.$$typeof;switch(D){case e:switch(l=l.type,l){case t:case i:case o:case v:case y:return l;default:switch(l=l&&l.$$typeof,l){case h:case c:case m:case T:case E:case s:return l;default:return D}}case r:return D}}}return B.ContextConsumer=c,B.ContextProvider=s,B.Element=e,B.ForwardRef=m,B.Fragment=t,B.Lazy=T,B.Memo=E,B.Portal=r,B.Profiler=i,B.StrictMode=o,B.Suspense=v,B.SuspenseList=y,B.isAsyncMode=function(){return!1},B.isConcurrentMode=function(){return!1},B.isContextConsumer=function(l){return R(l)===c},B.isContextProvider=function(l){return R(l)===s},B.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===e},B.isForwardRef=function(l){return R(l)===m},B.isFragment=function(l){return R(l)===t},B.isLazy=function(l){return R(l)===T},B.isMemo=function(l){return R(l)===E},B.isPortal=function(l){return R(l)===r},B.isProfiler=function(l){return R(l)===i},B.isStrictMode=function(l){return R(l)===o},B.isSuspense=function(l){return R(l)===v},B.isSuspenseList=function(l){return R(l)===y},B.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===t||l===i||l===o||l===v||l===y||l===I||typeof l=="object"&&l!==null&&(l.$$typeof===T||l.$$typeof===E||l.$$typeof===s||l.$$typeof===c||l.$$typeof===m||l.$$typeof===x||l.getModuleId!==void 0)},B.typeOf=R,B}var W={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _t;function wr(){return _t||(_t=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),x=!1,R=!1,l=!1,D=!1,_=!1,N;N=Symbol.for("react.module.reference");function A(b){return!!(typeof b=="string"||typeof b=="function"||b===t||b===i||_||b===o||b===v||b===y||D||b===I||x||R||l||typeof b=="object"&&b!==null&&(b.$$typeof===T||b.$$typeof===E||b.$$typeof===s||b.$$typeof===c||b.$$typeof===m||b.$$typeof===N||b.getModuleId!==void 0))}function u(b){if(typeof b=="object"&&b!==null){var O=b.$$typeof;switch(O){case e:var J=b.type;switch(J){case t:case i:case o:case v:case y:return J;default:var L=J&&J.$$typeof;switch(L){case h:case c:case m:case T:case E:case s:return L;default:return O}}case r:return O}}}var ie=c,ve=s,fe=e,pe=m,ge=t,we=T,se=E,Z=r,ne=i,te=o,Ce=v,de=y,oe=!1,Se=!1;function be(b){return oe||(oe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function _e(b){return Se||(Se=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function C(b){return u(b)===c}function S(b){return u(b)===s}function w(b){return typeof b=="object"&&b!==null&&b.$$typeof===e}function P(b){return u(b)===m}function a(b){return u(b)===t}function j(b){return u(b)===T}function p(b){return u(b)===E}function q(b){return u(b)===r}function M(b){return u(b)===i}function F(b){return u(b)===o}function f(b){return u(b)===v}function ee(b){return u(b)===y}W.ContextConsumer=ie,W.ContextProvider=ve,W.Element=fe,W.ForwardRef=pe,W.Fragment=ge,W.Lazy=we,W.Memo=se,W.Portal=Z,W.Profiler=ne,W.StrictMode=te,W.Suspense=Ce,W.SuspenseList=de,W.isAsyncMode=be,W.isConcurrentMode=_e,W.isContextConsumer=C,W.isContextProvider=S,W.isElement=w,W.isForwardRef=P,W.isFragment=a,W.isLazy=j,W.isMemo=p,W.isPortal=q,W.isProfiler=M,W.isStrictMode=F,W.isSuspense=f,W.isSuspenseList=ee,W.isValidElementType=A,W.typeOf=u}()),W}(function(e){process.env.NODE_ENV==="production"?e.exports=Er():e.exports=wr()})(Sr);function Cr(e){function r(C,S,w,P,a){for(var j=0,p=0,q=0,M=0,F,f,ee=0,b=0,O,J=O=F=0,L=0,ce=0,Te=0,ue=0,Le=w.length,ke=Le-1,Ee,$="",re="",ze="",Oe="",Pe;L<Le;){if(f=w.charCodeAt(L),L===ke&&p+M+q+j!==0&&(p!==0&&(f=p===47?10:47),M=q=j=0,Le++,ke++),p+M+q+j===0){if(L===ke&&(0<ce&&($=$.replace(T,"")),0<$.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:$+=w.charAt(L)}f=59}switch(f){case 123:for($=$.trim(),F=$.charCodeAt(0),O=1,ue=++L;L<Le;){switch(f=w.charCodeAt(L)){case 123:O++;break;case 125:O--;break;case 47:switch(f=w.charCodeAt(L+1)){case 42:case 47:e:{for(J=L+1;J<ke;++J)switch(w.charCodeAt(J)){case 47:if(f===42&&w.charCodeAt(J-1)===42&&L+2!==J){L=J+1;break e}break;case 10:if(f===47){L=J+1;break e}}L=J}}break;case 91:f++;case 40:f++;case 34:case 39:for(;L++<ke&&w.charCodeAt(L)!==f;);}if(O===0)break;L++}switch(O=w.substring(ue,L),F===0&&(F=($=$.replace(E,"").trim()).charCodeAt(0)),F){case 64:switch(0<ce&&($=$.replace(T,"")),f=$.charCodeAt(1),f){case 100:case 109:case 115:case 45:ce=S;break;default:ce=Ce}if(O=r(S,ce,O,f,a+1),ue=O.length,0<oe&&(ce=t(Ce,$,Te),Pe=h(3,O,ce,S,Z,se,ue,f,a,P),$=ce.join(""),Pe!==void 0&&(ue=(O=Pe.trim()).length)===0&&(f=0,O="")),0<ue)switch(f){case 115:$=$.replace(ie,c);case 100:case 109:case 45:O=$+"{"+O+"}";break;case 107:$=$.replace(_,"$1 $2"),O=$+"{"+O+"}",O=te===1||te===2&&s("@"+O,3)?"@-webkit-"+O+"@"+O:"@"+O;break;default:O=$+O,P===112&&(O=(re+=O,""))}else O="";break;default:O=r(S,t(S,$,Te),O,P,a+1)}ze+=O,O=Te=ce=J=F=0,$="",f=w.charCodeAt(++L);break;case 125:case 59:if($=(0<ce?$.replace(T,""):$).trim(),1<(ue=$.length))switch(J===0&&(F=$.charCodeAt(0),F===45||96<F&&123>F)&&(ue=($=$.replace(" ",":")).length),0<oe&&(Pe=h(1,$,S,C,Z,se,re.length,P,a,P))!==void 0&&(ue=($=Pe.trim()).length)===0&&($="\0\0"),F=$.charCodeAt(0),f=$.charCodeAt(1),F){case 0:break;case 64:if(f===105||f===99){Oe+=$+w.charAt(L);break}default:$.charCodeAt(ue-1)!==58&&(re+=i($,F,f,$.charCodeAt(2)))}Te=ce=J=F=0,$="",f=w.charCodeAt(++L)}}switch(f){case 13:case 10:p===47?p=0:1+F===0&&P!==107&&0<$.length&&(ce=1,$+="\0"),0<oe*be&&h(0,$,S,C,Z,se,re.length,P,a,P),se=1,Z++;break;case 59:case 125:if(p+M+q+j===0){se++;break}default:switch(se++,Ee=w.charAt(L),f){case 9:case 32:if(M+j+p===0)switch(ee){case 44:case 58:case 9:case 32:Ee="";break;default:f!==32&&(Ee=" ")}break;case 0:Ee="\\0";break;case 12:Ee="\\f";break;case 11:Ee="\\v";break;case 38:M+p+j===0&&(ce=Te=1,Ee="\f"+Ee);break;case 108:if(M+p+j+ne===0&&0<J)switch(L-J){case 2:ee===112&&w.charCodeAt(L-3)===58&&(ne=ee);case 8:b===111&&(ne=b)}break;case 58:M+p+j===0&&(J=L);break;case 44:p+q+M+j===0&&(ce=1,Ee+="\r");break;case 34:case 39:p===0&&(M=M===f?0:M===0?f:M);break;case 91:M+p+q===0&&j++;break;case 93:M+p+q===0&&j--;break;case 41:M+p+j===0&&q--;break;case 40:if(M+p+j===0){if(F===0)switch(2*ee+3*b){case 533:break;default:F=1}q++}break;case 64:p+q+M+j+J+O===0&&(O=1);break;case 42:case 47:if(!(0<M+j+q))switch(p){case 0:switch(2*f+3*w.charCodeAt(L+1)){case 235:p=47;break;case 220:ue=L,p=42}break;case 42:f===47&&ee===42&&ue+2!==L&&(w.charCodeAt(ue+2)===33&&(re+=w.substring(ue,L+1)),Ee="",p=0)}}p===0&&($+=Ee)}b=ee,ee=f,L++}if(ue=re.length,0<ue){if(ce=S,0<oe&&(Pe=h(2,re,ce,C,Z,se,ue,P,a,P),Pe!==void 0&&(re=Pe).length===0))return Oe+re+ze;if(re=ce.join(",")+"{"+re+"}",te*ne!==0){switch(te!==2||s(re,2)||(ne=0),ne){case 111:re=re.replace(A,":-moz-$1")+re;break;case 112:re=re.replace(N,"::-webkit-input-$1")+re.replace(N,"::-moz-$1")+re.replace(N,":-ms-input-$1")+re}ne=0}}return Oe+re+ze}function t(C,S,w){var P=S.trim().split(l);S=P;var a=P.length,j=C.length;switch(j){case 0:case 1:var p=0;for(C=j===0?"":C[0]+" ";p<a;++p)S[p]=o(C,S[p],w).trim();break;default:var q=p=0;for(S=[];p<a;++p)for(var M=0;M<j;++M)S[q++]=o(C[M]+" ",P[p],w).trim()}return S}function o(C,S,w){var P=S.charCodeAt(0);switch(33>P&&(P=(S=S.trim()).charCodeAt(0)),P){case 38:return S.replace(D,"$1"+C.trim());case 58:return C.trim()+S.replace(D,"$1"+C.trim());default:if(0<1*w&&0<S.indexOf("\f"))return S.replace(D,(C.charCodeAt(0)===58?"":"$1")+C.trim())}return C+S}function i(C,S,w,P){var a=C+";",j=2*S+3*w+4*P;if(j===944){C=a.indexOf(":",9)+1;var p=a.substring(C,a.length-1).trim();return p=a.substring(0,C).trim()+p+";",te===1||te===2&&s(p,1)?"-webkit-"+p+p:p}if(te===0||te===2&&!s(a,1))return a;switch(j){case 1015:return a.charCodeAt(10)===97?"-webkit-"+a+a:a;case 951:return a.charCodeAt(3)===116?"-webkit-"+a+a:a;case 963:return a.charCodeAt(5)===110?"-webkit-"+a+a:a;case 1009:if(a.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(a.charCodeAt(8)===45)return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(we,"$1-webkit-$2")+a;break;case 932:if(a.charCodeAt(4)===45)switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(a.charCodeAt(8)!==99)break;return p=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+p+"-webkit-"+a+"-ms-flex-pack"+p+a;case 1005:return x.test(a)?a.replace(I,":-webkit-")+a.replace(I,":-moz-")+a:a;case 1e3:switch(p=a.substring(13).trim(),S=p.indexOf("-")+1,p.charCodeAt(0)+p.charCodeAt(S)){case 226:p=a.replace(u,"tb");break;case 232:p=a.replace(u,"tb-rl");break;case 220:p=a.replace(u,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+p+a;case 1017:if(a.indexOf("sticky",9)===-1)break;case 975:switch(S=(a=C).length-10,p=(a.charCodeAt(S)===33?a.substring(0,S):a).substring(C.indexOf(":",7)+1).trim(),j=p.charCodeAt(0)+(p.charCodeAt(7)|0)){case 203:if(111>p.charCodeAt(8))break;case 115:a=a.replace(p,"-webkit-"+p)+";"+a;break;case 207:case 102:a=a.replace(p,"-webkit-"+(102<j?"inline-":"")+"box")+";"+a.replace(p,"-webkit-"+p)+";"+a.replace(p,"-ms-"+p+"box")+";"+a}return a+";";case 938:if(a.charCodeAt(5)===45)switch(a.charCodeAt(6)){case 105:return p=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+p+"-ms-flex-"+p+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(fe,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(fe,"")+a}break;case 973:case 989:if(a.charCodeAt(3)!==45||a.charCodeAt(4)===122)break;case 931:case 953:if(ge.test(C)===!0)return(p=C.substring(C.indexOf(":")+1)).charCodeAt(0)===115?i(C.replace("stretch","fill-available"),S,w,P).replace(":fill-available",":stretch"):a.replace(p,"-webkit-"+p)+a.replace(p,"-moz-"+p.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(a.charCodeAt(5)===102?"-ms-"+a:"")+a,w+P===211&&a.charCodeAt(13)===105&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(R,"$1-webkit-$2")+a}return a}function s(C,S){var w=C.indexOf(S===1?":":"{"),P=C.substring(0,S!==3?w:10);return w=C.substring(w+1,C.length-1),Se(S!==2?P:P.replace(pe,"$1"),w,S)}function c(C,S){var w=i(S,S.charCodeAt(0),S.charCodeAt(1),S.charCodeAt(2));return w!==S+";"?w.replace(ve," or ($1)").substring(4):"("+S+")"}function h(C,S,w,P,a,j,p,q,M,F){for(var f=0,ee=S,b;f<oe;++f)switch(b=de[f].call(y,C,ee,w,P,a,j,p,q,M,F)){case void 0:case!1:case!0:case null:break;default:ee=b}if(ee!==S)return ee}function m(C){switch(C){case void 0:case null:oe=de.length=0;break;default:if(typeof C=="function")de[oe++]=C;else if(typeof C=="object")for(var S=0,w=C.length;S<w;++S)m(C[S]);else be=!!C|0}return m}function v(C){return C=C.prefix,C!==void 0&&(Se=null,C?typeof C!="function"?te=1:(te=2,Se=C):te=0),v}function y(C,S){var w=C;if(33>w.charCodeAt(0)&&(w=w.trim()),_e=w,w=[_e],0<oe){var P=h(-1,S,w,w,Z,se,0,0,0,0);P!==void 0&&typeof P=="string"&&(S=P)}var a=r(Ce,w,S,0,0);return 0<oe&&(P=h(-2,a,w,w,Z,se,a.length,0,0,0),P!==void 0&&(a=P)),_e="",ne=0,se=Z=1,a}var E=/^\0+/g,T=/[\0\r\f]/g,I=/: */g,x=/zoo|gra/,R=/([,: ])(transform)/g,l=/,\r+?/g,D=/([\t\r\n ])*\f?&/g,_=/@(k\w+)\s*(\S*)\s*/,N=/::(place)/g,A=/:(read-only)/g,u=/[svh]\w+-[tblr]{2}/,ie=/\(\s*(.*)\s*\)/g,ve=/([\s\S]*?);/g,fe=/-self|flex-/g,pe=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ge=/stretch|:\s*\w+\-(?:conte|avail)/,we=/([^-])(image-set\()/,se=1,Z=1,ne=0,te=1,Ce=[],de=[],oe=0,Se=null,be=0,_e="";return y.use=m,y.set=v,e!==void 0&&v(e),y}var _r={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function xr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Rr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,xt=xr(function(e){return Rr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),nt={},Ar={get exports(){return nt},set exports(e){nt=e}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rt;function Tr(){if(Rt)return U;Rt=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,h=e?Symbol.for("react.context"):60110,m=e?Symbol.for("react.async_mode"):60111,v=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,E=e?Symbol.for("react.suspense"):60113,T=e?Symbol.for("react.suspense_list"):60120,I=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,l=e?Symbol.for("react.fundamental"):60117,D=e?Symbol.for("react.responder"):60118,_=e?Symbol.for("react.scope"):60119;function N(u){if(typeof u=="object"&&u!==null){var ie=u.$$typeof;switch(ie){case r:switch(u=u.type,u){case m:case v:case o:case s:case i:case E:return u;default:switch(u=u&&u.$$typeof,u){case h:case y:case x:case I:case c:return u;default:return ie}}case t:return ie}}}function A(u){return N(u)===v}return U.AsyncMode=m,U.ConcurrentMode=v,U.ContextConsumer=h,U.ContextProvider=c,U.Element=r,U.ForwardRef=y,U.Fragment=o,U.Lazy=x,U.Memo=I,U.Portal=t,U.Profiler=s,U.StrictMode=i,U.Suspense=E,U.isAsyncMode=function(u){return A(u)||N(u)===m},U.isConcurrentMode=A,U.isContextConsumer=function(u){return N(u)===h},U.isContextProvider=function(u){return N(u)===c},U.isElement=function(u){return typeof u=="object"&&u!==null&&u.$$typeof===r},U.isForwardRef=function(u){return N(u)===y},U.isFragment=function(u){return N(u)===o},U.isLazy=function(u){return N(u)===x},U.isMemo=function(u){return N(u)===I},U.isPortal=function(u){return N(u)===t},U.isProfiler=function(u){return N(u)===s},U.isStrictMode=function(u){return N(u)===i},U.isSuspense=function(u){return N(u)===E},U.isValidElementType=function(u){return typeof u=="string"||typeof u=="function"||u===o||u===v||u===s||u===i||u===E||u===T||typeof u=="object"&&u!==null&&(u.$$typeof===x||u.$$typeof===I||u.$$typeof===c||u.$$typeof===h||u.$$typeof===y||u.$$typeof===l||u.$$typeof===D||u.$$typeof===_||u.$$typeof===R)},U.typeOf=N,U}var H={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var At;function Pr(){return At||(At=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,h=e?Symbol.for("react.context"):60110,m=e?Symbol.for("react.async_mode"):60111,v=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,E=e?Symbol.for("react.suspense"):60113,T=e?Symbol.for("react.suspense_list"):60120,I=e?Symbol.for("react.memo"):60115,x=e?Symbol.for("react.lazy"):60116,R=e?Symbol.for("react.block"):60121,l=e?Symbol.for("react.fundamental"):60117,D=e?Symbol.for("react.responder"):60118,_=e?Symbol.for("react.scope"):60119;function N(f){return typeof f=="string"||typeof f=="function"||f===o||f===v||f===s||f===i||f===E||f===T||typeof f=="object"&&f!==null&&(f.$$typeof===x||f.$$typeof===I||f.$$typeof===c||f.$$typeof===h||f.$$typeof===y||f.$$typeof===l||f.$$typeof===D||f.$$typeof===_||f.$$typeof===R)}function A(f){if(typeof f=="object"&&f!==null){var ee=f.$$typeof;switch(ee){case r:var b=f.type;switch(b){case m:case v:case o:case s:case i:case E:return b;default:var O=b&&b.$$typeof;switch(O){case h:case y:case x:case I:case c:return O;default:return ee}}case t:return ee}}}var u=m,ie=v,ve=h,fe=c,pe=r,ge=y,we=o,se=x,Z=I,ne=t,te=s,Ce=i,de=E,oe=!1;function Se(f){return oe||(oe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),be(f)||A(f)===m}function be(f){return A(f)===v}function _e(f){return A(f)===h}function C(f){return A(f)===c}function S(f){return typeof f=="object"&&f!==null&&f.$$typeof===r}function w(f){return A(f)===y}function P(f){return A(f)===o}function a(f){return A(f)===x}function j(f){return A(f)===I}function p(f){return A(f)===t}function q(f){return A(f)===s}function M(f){return A(f)===i}function F(f){return A(f)===E}H.AsyncMode=u,H.ConcurrentMode=ie,H.ContextConsumer=ve,H.ContextProvider=fe,H.Element=pe,H.ForwardRef=ge,H.Fragment=we,H.Lazy=se,H.Memo=Z,H.Portal=ne,H.Profiler=te,H.StrictMode=Ce,H.Suspense=de,H.isAsyncMode=Se,H.isConcurrentMode=be,H.isContextConsumer=_e,H.isContextProvider=C,H.isElement=S,H.isForwardRef=w,H.isFragment=P,H.isLazy=a,H.isMemo=j,H.isPortal=p,H.isProfiler=q,H.isStrictMode=M,H.isSuspense=F,H.isValidElementType=N,H.typeOf=A}()),H}(function(e){process.env.NODE_ENV==="production"?e.exports=Tr():e.exports=Pr()})(Ar);var ot=nt,$r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Or={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},at={};at[ot.ForwardRef]=Or,at[ot.Memo]=Tt;function Pt(e){return ot.isMemo(e)?Tt:at[e.$$typeof]||$r}var Ir=Object.defineProperty,Nr=Object.getOwnPropertyNames,$t=Object.getOwnPropertySymbols,Dr=Object.getOwnPropertyDescriptor,Mr=Object.getPrototypeOf,kt=Object.prototype;function Ot(e,r,t){if(typeof r!="string"){if(kt){var o=Mr(r);o&&o!==kt&&Ot(e,o,t)}var i=Nr(r);$t&&(i=i.concat($t(r)));for(var s=Pt(e),c=Pt(r),h=0;h<i.length;++h){var m=i[h];if(!kr[m]&&!(t&&t[m])&&!(c&&c[m])&&!(s&&s[m])){var v=Dr(r,m);try{Ir(e,m,v)}catch{}}}}return e}var jr=Ot;function Re(){return(Re=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var It=function(e,r){for(var t=[e[0]],o=0,i=r.length;o<i;o+=1)t.push(r[o],e[o+1]);return t},it=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!We.typeOf(e)},Xe=Object.freeze([]),Ne=Object.freeze({});function je(e){return typeof e=="function"}function st(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function ct(e){return e&&typeof e.styledComponentId=="string"}var Fe=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",lt=typeof window<"u"&&"HTMLElement"in window,Fr=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production"),Lr={},zr=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

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
`}:{};function Yr(){for(var e=arguments.length<=0?void 0:arguments[0],r=[],t=1,o=arguments.length;t<o;t+=1)r.push(t<0||arguments.length<=t?void 0:arguments[t]);return r.forEach(function(i){e=e.replace(/%[a-z]/,i)}),e}function $e(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];throw process.env.NODE_ENV==="production"?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):"")):new Error(Yr.apply(void 0,[zr[e]].concat(t)).trim())}var Vr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var r=e.prototype;return r.indexOfGroup=function(t){for(var o=0,i=0;i<t;i++)o+=this.groupSizes[i];return o},r.insertRules=function(t,o){if(t>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,c=s;t>=c;)(c<<=1)<0&&$e(16,""+t);this.groupSizes=new Uint32Array(c),this.groupSizes.set(i),this.length=c;for(var h=s;h<c;h++)this.groupSizes[h]=0}for(var m=this.indexOfGroup(t+1),v=0,y=o.length;v<y;v++)this.tag.insertRule(m,o[v])&&(this.groupSizes[t]++,m++)},r.clearGroup=function(t){if(t<this.length){var o=this.groupSizes[t],i=this.indexOfGroup(t),s=i+o;this.groupSizes[t]=0;for(var c=i;c<s;c++)this.tag.deleteRule(i)}},r.getGroup=function(t){var o="";if(t>=this.length||this.groupSizes[t]===0)return o;for(var i=this.groupSizes[t],s=this.indexOfGroup(t),c=s+i,h=s;h<c;h++)o+=this.tag.getRule(h)+`/*!sc*/
`;return o},e}(),Ke=new Map,Ze=new Map,Ue=1,Je=function(e){if(Ke.has(e))return Ke.get(e);for(;Ze.has(Ue);)Ue++;var r=Ue++;return process.env.NODE_ENV!=="production"&&((0|r)<0||r>1<<30)&&$e(16,""+r),Ke.set(e,r),Ze.set(r,e),r},Gr=function(e){return Ze.get(e)},Br=function(e,r){r>=Ue&&(Ue=r+1),Ke.set(e,r),Ze.set(r,e)},Wr="style["+Fe+'][data-styled-version="5.3.6"]',Ur=new RegExp("^"+Fe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Hr=function(e,r,t){for(var o,i=t.split(","),s=0,c=i.length;s<c;s++)(o=i[s])&&e.registerName(r,o)},qr=function(e,r){for(var t=(r.textContent||"").split(`/*!sc*/
`),o=[],i=0,s=t.length;i<s;i++){var c=t[i].trim();if(c){var h=c.match(Ur);if(h){var m=0|parseInt(h[1],10),v=h[2];m!==0&&(Br(v,m),Hr(e,v,h[3]),e.getTag().insertRules(m,o)),o.length=0}else o.push(c)}}},Xr=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Nt=function(e){var r=document.head,t=e||r,o=document.createElement("style"),i=function(h){for(var m=h.childNodes,v=m.length;v>=0;v--){var y=m[v];if(y&&y.nodeType===1&&y.hasAttribute(Fe))return y}}(t),s=i!==void 0?i.nextSibling:null;o.setAttribute(Fe,"active"),o.setAttribute("data-styled-version","5.3.6");var c=Xr();return c&&o.setAttribute("nonce",c),t.insertBefore(o,s),o},Kr=function(){function e(t){var o=this.element=Nt(t);o.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,c=0,h=s.length;c<h;c++){var m=s[c];if(m.ownerNode===i)return m}$e(17)}(o),this.length=0}var r=e.prototype;return r.insertRule=function(t,o){try{return this.sheet.insertRule(o,t),this.length++,!0}catch{return!1}},r.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},r.getRule=function(t){var o=this.sheet.cssRules[t];return o!==void 0&&typeof o.cssText=="string"?o.cssText:""},e}(),Zr=function(){function e(t){var o=this.element=Nt(t);this.nodes=o.childNodes,this.length=0}var r=e.prototype;return r.insertRule=function(t,o){if(t<=this.length&&t>=0){var i=document.createTextNode(o),s=this.nodes[t];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},r.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},r.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Jr=function(){function e(t){this.rules=[],this.length=0}var r=e.prototype;return r.insertRule=function(t,o){return t<=this.length&&(this.rules.splice(t,0,o),this.length++,!0)},r.deleteRule=function(t){this.rules.splice(t,1),this.length--},r.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Dt=lt,Qr={isServer:!lt,useCSSOMInjection:!Fr},Qe=function(){function e(t,o,i){t===void 0&&(t=Ne),o===void 0&&(o={}),this.options=Re({},Qr,{},t),this.gs=o,this.names=new Map(i),this.server=!!t.isServer,!this.server&&lt&&Dt&&(Dt=!1,function(s){for(var c=document.querySelectorAll(Wr),h=0,m=c.length;h<m;h++){var v=c[h];v&&v.getAttribute(Fe)!=="active"&&(qr(s,v),v.parentNode&&v.parentNode.removeChild(v))}}(this))}e.registerId=function(t){return Je(t)};var r=e.prototype;return r.reconstructWithOptions=function(t,o){return o===void 0&&(o=!0),new e(Re({},this.options,{},t),this.gs,o&&this.names||void 0)},r.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},r.getTag=function(){return this.tag||(this.tag=(i=(o=this.options).isServer,s=o.useCSSOMInjection,c=o.target,t=i?new Jr(c):s?new Kr(c):new Zr(c),new Vr(t)));var t,o,i,s,c},r.hasNameForId=function(t,o){return this.names.has(t)&&this.names.get(t).has(o)},r.registerName=function(t,o){if(Je(t),this.names.has(t))this.names.get(t).add(o);else{var i=new Set;i.add(o),this.names.set(t,i)}},r.insertRules=function(t,o,i){this.registerName(t,o),this.getTag().insertRules(Je(t),i)},r.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},r.clearRules=function(t){this.getTag().clearGroup(Je(t)),this.clearNames(t)},r.clearTag=function(){this.tag=void 0},r.toString=function(){return function(t){for(var o=t.getTag(),i=o.length,s="",c=0;c<i;c++){var h=Gr(c);if(h!==void 0){var m=t.names.get(h),v=o.getGroup(c);if(m&&v&&m.size){var y=Fe+".g"+c+'[id="'+h+'"]',E="";m!==void 0&&m.forEach(function(T){T.length>0&&(E+=T+",")}),s+=""+v+y+'{content:"'+E+`"}/*!sc*/
`}}}return s}(this)},e}(),en=/(a)(d)/gi,Mt=function(e){return String.fromCharCode(e+(e>25?39:97))};function ut(e){var r,t="";for(r=Math.abs(e);r>52;r=r/52|0)t=Mt(r%52)+t;return(Mt(r%52)+t).replace(en,"$1-$2")}var De=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},jt=function(e){return De(5381,e)};function Ft(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(je(t)&&!ct(t))return!1}return!0}var tn=jt("5.3.6"),rn=function(){function e(r,t,o){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(o===void 0||o.isStatic)&&Ft(r),this.componentId=t,this.baseHash=De(tn,t),this.baseStyle=o,Qe.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,o){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(r,t,o)),this.isStatic&&!o.hash)if(this.staticRulesId&&t.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var c=Me(this.rules,r,t,o).join(""),h=ut(De(this.baseHash,c)>>>0);if(!t.hasNameForId(i,h)){var m=o(c,"."+h,void 0,i);t.insertRules(i,h,m)}s.push(h),this.staticRulesId=h}else{for(var v=this.rules.length,y=De(this.baseHash,o.hash),E="",T=0;T<v;T++){var I=this.rules[T];if(typeof I=="string")E+=I,process.env.NODE_ENV!=="production"&&(y=De(y,I+T));else if(I){var x=Me(I,r,t,o),R=Array.isArray(x)?x.join(""):x;y=De(y,R+T),E+=R}}if(E){var l=ut(y>>>0);if(!t.hasNameForId(i,l)){var D=o(E,"."+l,void 0,i);t.insertRules(i,l,D)}s.push(l)}}return s.join(" ")},e}(),nn=/^\s*\/\/.*$/gm,on=[":","[",".","#"];function an(e){var r,t,o,i,s=e===void 0?Ne:e,c=s.options,h=c===void 0?Ne:c,m=s.plugins,v=m===void 0?Xe:m,y=new Cr(h),E=[],T=function(R){function l(D){if(D)try{R(D+"}")}catch{}}return function(D,_,N,A,u,ie,ve,fe,pe,ge){switch(D){case 1:if(pe===0&&_.charCodeAt(0)===64)return R(_+";"),"";break;case 2:if(fe===0)return _+"/*|*/";break;case 3:switch(fe){case 102:case 112:return R(N[0]+_),"";default:return _+(ge===0?"/*|*/":"")}case-2:_.split("/*|*/}").forEach(l)}}}(function(R){E.push(R)}),I=function(R,l,D){return l===0&&on.indexOf(D[t.length])!==-1||D.match(i)?R:"."+r};function x(R,l,D,_){_===void 0&&(_="&");var N=R.replace(nn,""),A=l&&D?D+" "+l+" { "+N+" }":N;return r=_,t=l,o=new RegExp("\\"+t+"\\b","g"),i=new RegExp("(\\"+t+"\\b){2,}"),y(D||!l?"":l,A)}return y.use([].concat(v,[function(R,l,D){R===2&&D.length&&D[0].lastIndexOf(t)>0&&(D[0]=D[0].replace(o,I))},T,function(R){if(R===-2){var l=E;return E=[],l}}])),x.hash=v.length?v.reduce(function(R,l){return l.name||$e(15),De(R,l.name)},5381).toString():"",x}var Lt=Q.createContext();Lt.Consumer;var zt=Q.createContext(),sn=(zt.Consumer,new Qe),ft=an();function Yt(){return Q.useContext(Lt)||sn}function Vt(){return Q.useContext(zt)||ft}var cn=function(){function e(r,t){var o=this;this.inject=function(i,s){s===void 0&&(s=ft);var c=o.name+s.hash;i.hasNameForId(o.id,c)||i.insertRules(o.id,c,s(o.rules,c,"@keyframes"))},this.toString=function(){return $e(12,String(o.name))},this.name=r,this.id="sc-keyframes-"+r,this.rules=t}return e.prototype.getName=function(r){return r===void 0&&(r=ft),this.name+r.hash},e}(),ln=/([A-Z])/,un=/([A-Z])/g,fn=/^ms-/,dn=function(e){return"-"+e.toLowerCase()};function Gt(e){return ln.test(e)?e.replace(un,dn).replace(fn,"-ms-"):e}var Bt=function(e){return e==null||e===!1||e===""};function Me(e,r,t,o){if(Array.isArray(e)){for(var i,s=[],c=0,h=e.length;c<h;c+=1)(i=Me(e[c],r,t,o))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Bt(e))return"";if(ct(e))return"."+e.styledComponentId;if(je(e)){if(typeof(v=e)!="function"||v.prototype&&v.prototype.isReactComponent||!r)return e;var m=e(r);return process.env.NODE_ENV!=="production"&&We.isElement(m)&&console.warn(st(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Me(m,r,t,o)}var v;return e instanceof cn?t?(e.inject(t,o),e.getName(o)):e:it(e)?function y(E,T){var I,x,R=[];for(var l in E)E.hasOwnProperty(l)&&!Bt(E[l])&&(Array.isArray(E[l])&&E[l].isCss||je(E[l])?R.push(Gt(l)+":",E[l],";"):it(E[l])?R.push.apply(R,y(E[l],l)):R.push(Gt(l)+": "+(I=l,(x=E[l])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||I in _r?String(x).trim():x+"px")+";"));return T?[T+" {"].concat(R,["}"]):R}(e):e.toString()}var Wt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function K(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return je(e)||it(e)?Wt(Me(It(Xe,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:Wt(Me(It(e,t)))}var Ut=/invalid hook call/i,et=new Set,Ht=function(e,r){if(process.env.NODE_ENV!=="production"){var t="The component "+e+(r?' with the id of "'+r+'"':"")+` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,o=console.error;try{var i=!0;console.error=function(s){if(Ut.test(s))i=!1,et.delete(t);else{for(var c=arguments.length,h=new Array(c>1?c-1:0),m=1;m<c;m++)h[m-1]=arguments[m];o.apply(void 0,[s].concat(h))}},Q.useRef(),i&&!et.has(t)&&(console.warn(t),et.add(t))}catch(s){Ut.test(s.message)&&et.delete(t)}finally{console.error=o}}},qt=function(e,r,t){return t===void 0&&(t=Ne),e.theme!==t.theme&&e.theme||r||t.theme},pn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hn=/(^-|-$)/g;function dt(e){return e.replace(pn,"-").replace(hn,"")}var Xt=function(e){return ut(jt(e)>>>0)};function tt(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var pt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},mn=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function yn(e,r,t){var o=e[t];pt(r)&&pt(o)?Kt(o,r):e[t]=r}function Kt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];for(var i=0,s=t;i<s.length;i++){var c=s[i];if(pt(c))for(var h in c)mn(h)&&yn(e,c[h],h)}return e}var He=Q.createContext();He.Consumer;function vn(e){var r=Q.useContext(He),t=Q.useMemo(function(){return function(o,i){if(!o)return $e(14);if(je(o)){var s=o(i);return process.env.NODE_ENV==="production"||s!==null&&!Array.isArray(s)&&typeof s=="object"?s:$e(7)}return Array.isArray(o)||typeof o!="object"?$e(8):i?Re({},i,{},o):o}(e.theme,r)},[e.theme,r]);return e.children?Q.createElement(He.Provider,{value:t},e.children):null}var ht={};function Zt(e,r,t){var o=ct(e),i=!tt(e),s=r.attrs,c=s===void 0?Xe:s,h=r.componentId,m=h===void 0?function(_,N){var A=typeof _!="string"?"sc":dt(_);ht[A]=(ht[A]||0)+1;var u=A+"-"+Xt("5.3.6"+A+ht[A]);return N?N+"-"+u:u}(r.displayName,r.parentComponentId):h,v=r.displayName,y=v===void 0?function(_){return tt(_)?"styled."+_:"Styled("+st(_)+")"}(e):v,E=r.displayName&&r.componentId?dt(r.displayName)+"-"+r.componentId:r.componentId||m,T=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,I=r.shouldForwardProp;o&&e.shouldForwardProp&&(I=r.shouldForwardProp?function(_,N,A){return e.shouldForwardProp(_,N,A)&&r.shouldForwardProp(_,N,A)}:e.shouldForwardProp);var x,R=new rn(t,E,o?e.componentStyle:void 0),l=R.isStatic&&c.length===0,D=function(_,N){return function(A,u,ie,ve){var fe=A.attrs,pe=A.componentStyle,ge=A.defaultProps,we=A.foldedComponentIds,se=A.shouldForwardProp,Z=A.styledComponentId,ne=A.target;process.env.NODE_ENV!=="production"&&Q.useDebugValue(Z);var te=function(P,a,j){P===void 0&&(P=Ne);var p=Re({},a,{theme:P}),q={};return j.forEach(function(M){var F,f,ee,b=M;for(F in je(b)&&(b=b(p)),b)p[F]=q[F]=F==="className"?(f=q[F],ee=b[F],f&&ee?f+" "+ee:f||ee):b[F]}),[p,q]}(qt(u,Q.useContext(He),ge)||Ne,u,fe),Ce=te[0],de=te[1],oe=function(P,a,j,p){var q=Yt(),M=Vt(),F=a?P.generateAndInjectStyles(Ne,q,M):P.generateAndInjectStyles(j,q,M);return process.env.NODE_ENV!=="production"&&Q.useDebugValue(F),process.env.NODE_ENV!=="production"&&!a&&p&&p(F),F}(pe,ve,Ce,process.env.NODE_ENV!=="production"?A.warnTooManyClasses:void 0),Se=ie,be=de.$as||u.$as||de.as||u.as||ne,_e=tt(be),C=de!==u?Re({},u,{},de):u,S={};for(var w in C)w[0]!=="$"&&w!=="as"&&(w==="forwardedAs"?S.as=C[w]:(se?se(w,xt,be):!_e||xt(w))&&(S[w]=C[w]));return u.style&&de.style!==u.style&&(S.style=Re({},u.style,{},de.style)),S.className=Array.prototype.concat(we,Z,oe!==Z?oe:null,u.className,de.className).filter(Boolean).join(" "),S.ref=Se,Q.createElement(be,S)}(x,_,N,l)};return D.displayName=y,(x=Q.forwardRef(D)).attrs=T,x.componentStyle=R,x.displayName=y,x.shouldForwardProp=I,x.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Xe,x.styledComponentId=E,x.target=o?e.target:e,x.withComponent=function(_){var N=r.componentId,A=function(ie,ve){if(ie==null)return{};var fe,pe,ge={},we=Object.keys(ie);for(pe=0;pe<we.length;pe++)fe=we[pe],ve.indexOf(fe)>=0||(ge[fe]=ie[fe]);return ge}(r,["componentId"]),u=N&&N+"-"+(tt(_)?_:dt(st(_)));return Zt(_,Re({},A,{attrs:T,componentId:u}),t)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=o?Kt({},e.defaultProps,_):_}}),process.env.NODE_ENV!=="production"&&(Ht(y,E),x.warnTooManyClasses=function(_,N){var A={},u=!1;return function(ie){if(!u&&(A[ie]=!0,Object.keys(A).length>=200)){var ve=N?' with the id of "'+N+'"':"";console.warn("Over 200 classes were generated for component "+_+ve+`.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),u=!0,A={}}}}(y,E)),x.toString=function(){return"."+x.styledComponentId},i&&jr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var mt=function(e){return function r(t,o,i){if(i===void 0&&(i=Ne),!We.isValidElementType(o))return $e(1,String(o));var s=function(){return t(o,i,K.apply(void 0,arguments))};return s.withConfig=function(c){return r(t,o,Re({},i,{},c))},s.attrs=function(c){return r(t,o,Re({},i,{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)}))},s}(Zt,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){mt[e]=mt(e)});var gn=function(){function e(t,o){this.rules=t,this.componentId=o,this.isStatic=Ft(t),Qe.registerId(this.componentId+1)}var r=e.prototype;return r.createStyles=function(t,o,i,s){var c=s(Me(this.rules,o,i,s).join(""),""),h=this.componentId+t;i.insertRules(h,h,c)},r.removeStyles=function(t,o){o.clearRules(this.componentId+t)},r.renderStyles=function(t,o,i,s){t>2&&Qe.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,o,i,s)},e}();function bn(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];var i=K.apply(void 0,[e].concat(t)),s="sc-global-"+Xt(JSON.stringify(i)),c=new gn(i,s);function h(v){var y=Yt(),E=Vt(),T=Q.useContext(He),I=Q.useRef(y.allocateGSInstance(s)).current;return process.env.NODE_ENV!=="production"&&Q.Children.count(v.children)&&console.warn("The global style component "+s+" was given child JSX. createGlobalStyle does not render children."),process.env.NODE_ENV!=="production"&&i.some(function(x){return typeof x=="string"&&x.indexOf("@import")!==-1})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),y.server&&m(I,v,y,T,E),Q.useLayoutEffect(function(){if(!y.server)return m(I,v,y,T,E),function(){return c.removeStyles(I,y)}},[I,v,y,T,E]),null}function m(v,y,E,T,I){if(c.isStatic)c.renderStyles(v,Lr,E,I);else{var x=Re({},y,{theme:qt(y,T,h.defaultProps)});c.renderStyles(v,x,E,I)}}return process.env.NODE_ENV!=="production"&&Ht(s),Q.memo(h)}process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`),process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,window["__styled-components-init__"]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window["__styled-components-init__"]+=1);const Ae=mt,Sn=Ae.hr`
	width: 100%;

	${({theme:{colors:e}})=>K`
			border: 0.5px solid ${e.color5};
		`}
`,En=({"data-testid":e="break"})=>ye(Sn,{"data-testid":e}),wn=Ae.div`
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
`,Cn=Ae.div`
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
`,yt=({type:e="button","data-testid":r="loader"})=>e==="button"?rt(wn,{"data-testid":r,children:[ye("div",{className:"load1"}),ye("div",{className:"load2"}),ye("div",{className:"load3"})]}):ye(Cn,{"data-testid":r});yt.displayName="Loader";const _n=({colors:e},r="primary")=>({primary:K`
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
		`,secondary:K`
			color: ${e.secondary};
			background: ${e.main};
			border: 2px solid ${e.secondary};

			&:hover {
				background: ${e.secondary};
				color: ${e.main};
			}
		`,alert:K`
			color: ${e.secondary};
			background: ${e.error};

			&:hover {
				background: ${e.color5};
			}
		`})[r],xn=(e="center")=>({center:K`
			justify-content: center;
		`,left:K`
			justify-content: flex-start;
		`})[e],Rn=Ae.button`
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

	${({theme:{spaces:e,font:r},hasOnlyIcon:t,hasFullWidth:o,isDropdown:i})=>K`
			width: ${o&&"100%"};
			font-weight: ${r.weights.bold};
			padding: ${t?`${e.tiny} ${e.small}`:`${e.tiny} ${e.big}`};
			border-radius: ${i&&"15px 15px 0 0"};
		`}

	${({theme:e,variant:r})=>_n(e,r)}
	${({align:e})=>xn(e)}
`,Jt=({variant:e="primary",type:r="button",children:t,action:o,hasFullWidth:i=!1,hasOnlyIcon:s=!1,align:c="center",isLoading:h=!1,isDisabled:m=!1,isDropdown:v=!1,"data-testid":y="button"})=>ye(Rn,{variant:e,type:r,onClick:o,hasFullWidth:i,hasOnlyIcon:s,align:c,disabled:m,isDropdown:v,"data-testid":y,children:h?ye(yt,{"data-testid":"button-loader"}):t});Jt.displayName="Button";const An=({font:e,colors:r},t="h1")=>({h1:K`
			font-weight: ${e.weights.medium};
			font-size: ${e.sizes.h1};
			line-height: ${e.lineHeight.h1};
			letter-spacing: ${e.letterSpacing.h1};
			color: ${r.color1};
			text-transform: uppercase;
		`,h2:K`
			font-weight: ${e.weights.regular};
			font-size: ${e.sizes.h2};
			line-height: ${e.lineHeight.h2};
			letter-spacing: ${e.letterSpacing.h2};
			color: ${r.color2};
		`})[t],Tn=Ae.h1`
	text-align: ${({align:e})=>e};

	${({theme:e,level:r})=>An(e,`h${r}`)};
`,Qt=({level:e=1,children:r,align:t="center","data-testid":o="heading"})=>ye(Tn,{as:`h${e}`,level:e,align:t,"data-testid":o,children:r});Qt.displayName="Heading";const Pn=({colors:e},r="avatar")=>({avatar:K`
			cursor: pointer;
			width: 120px;
			height: 120px;
			background: ${e.main};
			border: 2px solid ${e.secondary};
			border-radius: 100%;
		`})[r],$n=Ae.img`
	${({onClick:e})=>K`
			cursor: ${e&&"pointer"};
		`}

	${({theme:e,variant:r})=>Pn(e,r)}
`,er=({src:e,width:r,height:t,alt:o,variant:i="default",onClick:s,"data-testid":c="image"})=>ye($n,{src:e,width:r,height:t,alt:o,variant:i,onClick:s,"data-testid":c});er.displayName="Image";const kn=Ae.div`
	${({theme:{breakpoints:e}})=>K`
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
`,On=Ae.div`
	${({theme:{spaces:e,colors:r,breakpoints:t},image:o})=>K`
			width: calc(100% - 600px);
			height: calc(100vh - 84px);
			padding: calc(${e.huge} + ${e.huge}) ${e.huge};
			background: ${r.main};
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
`,In=Ae.div`
	${({theme:{spaces:e,breakpoints:r}})=>K`
			width: 400px;
			margin: 0 auto;
			padding: ${e.huge} ${e.big};
			display: flex;
			flex-direction: column;
			align-items: center;

			@media (max-width: ${r.mobile}px) {
				width: 100%;
				height: calc(100vh - 172px);
			}
		`}
`,tr=({children:e,image:r,"data-testid":t="layout"})=>rt(kn,{"data-testid":t,children:[ye(On,{image:r}),ye(In,{children:e})]});tr.displayName="Layout";const Nn=({colors:e},r="label")=>({default:K`
			color: ${e.secondary};
		`,label:K`
			color: ${e.color5};
		`,error:K`
			color: ${e.error};
		`})[r],Dn=({font:e},r="medium")=>({small:K`
			font-size: ${e.sizes.error};
		`,medium:K`
			font-size: ${e.sizes.default};
		`,big:K`
			font-size: ${e.sizes.info};
		`,large:K`
			font-size: ${e.sizes.icon};
		`,huge:K`
			font-size: ${e.sizes.notFound};
		`})[r],Mn=Ae.p`
	font-size: ${({size:e})=>e};
	text-align: ${({align:e})=>e};
	min-height: 24px;
	display: flex;
	align-items: center;
	gap: 5px;

	${({theme:e,type:r})=>Nn(e,r)};
	${({theme:e,size:r})=>Dn(e,r)};
`,rr=({type:e="default",children:r,size:t="medium",align:o="center","data-testid":i="paragraph"})=>ye(Mn,{type:e,size:t,align:o,"data-testid":i,children:r});rr.displayName="Paragraph";const jn=Ae.div`
	${({theme:{spaces:e},type:r,space:t="medium"})=>K`
			width: ${r==="horizontal"&&e[t]};
			height: ${r==="vertical"&&e[t]};
		`}
`,nr=({type:e="horizontal",space:r="medium","data-testid":t="spacer"})=>ye(jn,{type:e,space:r,"data-testid":t});nr.displayName="Spacer";const Fn=bn`
	${({theme:{font:e,colors:r}})=>K`
		@font-face {
			font-family: Poppins;
			src: url('../assets/fonts/PoppinsRegular.woff2') format('woff2'),
				url('../assets/fonts/PoppinsRegular.woff') format('woff');
			font-weight: 400;
		}
	
		@font-face {
			font-family: Roboto;
			src: url('../assets/fonts/PoppinsMedium.woff2') format('woff2'),
				url('../assets/fonts/PoppinsMedium.woff') format('woff');
			font-weight: 500;
		}
	
		@font-face {
			font-family: Roboto;
			src: url('../assets/fonts/PoppinsSemiBold.woff2') format('woff2'),
				url('../assets/fonts/PoppinsSemiBold.woff') format('woff');
			font-weight: 600;
		}
	
		:root {
			font-family: 'Poppins', sans-serif;
			font-weight: ${e.weights.regular};
	
			--toastify-color-light: ${r.secondary};
			--toastify-color-dark: ${r.secondary};
			--toastify-color-info: ${r.toastInfo};;
			--toastify-color-success: ${r.toastSuccess};
			--toastify-color-warning: ${r.toastWarning};
			--toastify-color-error: ${r.toastError};
			
			--toastify-icon-color-info: var(--toastify-color-info);
			--toastify-icon-color-success: var(--toastify-color-success);
			--toastify-icon-color-warning: var(--toastify-color-warning);
			--toastify-icon-color-error: var(--toastify-color-error);
			
			--toastify-toast-width: 320px;
			--toastify-toast-min-height: 64px;
			--toastify-toast-max-height: 800px;
			--toastify-font-family: 'Poppins', sans-serif;
			--toastify-z-index: 9999;
			
			--toastify-text-color-light: ${r.main};
			--toastify-text-color-dark: ${r.main};
		}
	
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}
	
		* {
			margin: 0;
		}
	
		main {
			display: block;
		}
	
		a {
			background-color: transparent;
		}
	
		img {
			border-style: none;
		}
	
		html,
		body {
			height: 100vh;
			font-size: ${e.sizes.default}
			line-height: ${e.lineHeight.default};
			color: ${r.secondary};
			background-color: ${({theme:t})=>t.colors.main};
		}

		body {
			transition: background .5s, color .7s;
		}

		img,
		picture,
		video,
		canvas,
		svg {
			display: block;
			max-width: 100%;
		}

		input,
		button,
		textarea,
		select {
			font: inherit;
		}

		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			overflow-wrap: break-word;
		}

		ul {
			list-style: none;
			padding: 0;
		}
	`}	
`,or={MOBILE:428,TABLET:1200},Y={Grey100:"#090909",Grey200:"#111111",Grey300:"#3C3C3C",Grey400:"#797979",White100:"#EAEAEA",White200:"#EEEEEE",White300:"#DDDDDD",Red100:"#F97777",Red200:"#F86565",Orange100:"#EFA360",Orange200:"#F18F5D",Yellow100:"#DECC56",Yellow200:"#E4CF49",Green100:"#D7E66D",Green200:"#D6E560",Green300:"#8EE296",Green400:"#83DF8C",Blue100:"#83CDE8",Blue200:"#77C8E6"},ar={mini:"4px",tiny:"8px",small:"12px",medium:"20px",big:"40px",large:"60px",huge:"80px"},ir={weights:{regular:400,medium:500,bold:600},sizes:{error:"12px",default:"16px",info:"18px",h1:"28px",h2:"18px",icon:"64px",notFound:"128px"},lineHeight:{default:"24px",h1:"44px",h2:"28px"},letterSpacing:{default:"normal",h1:"0.1em",h2:"0.02em"}},sr={mobile:or.MOBILE,tablet:or.TABLET},Ln={colors:{main:Y.White100,secondary:Y.Grey100,color1:Y.Grey300,color2:Y.Grey200,color3:Y.White200,color4:Y.Grey300,color5:Y.Grey400,weak:Y.Orange100,good:Y.Green100,error:Y.Red100,warning:Y.Yellow100,success:Y.Green300,info:Y.Blue100,toastError:Y.Red200,toastWarning:Y.Yellow200,toastSuccess:Y.Green400,toastInfo:Y.Blue200},font:ir,spaces:ar,breakpoints:sr},zn={colors:{main:Y.Grey100,secondary:Y.White300,color1:Y.White100,color2:Y.White200,color3:Y.Grey200,color4:Y.Grey300,color5:Y.Grey400,weak:Y.Orange200,good:Y.Green200,error:Y.Red200,warning:Y.Yellow200,success:Y.Green400,info:Y.Blue200,toastError:Y.Red100,toastWarning:Y.Yellow100,toastSuccess:Y.Green300,toastInfo:Y.Blue100},font:ir,spaces:ar,breakpoints:sr},Yn=({theme:e="dark",children:r})=>rt(vn,{theme:e==="dark"?zn:Ln,children:[ye(Fn,{}),r]});he.Break=En,he.Button=Jt,he.Heading=Qt,he.Image=er,he.Layout=tr,he.Loader=yt,he.Paragraph=rr,he.Spacer=nr,he.Theme=Yn,Object.defineProperty(he,Symbol.toStringTag,{value:"Module"})});

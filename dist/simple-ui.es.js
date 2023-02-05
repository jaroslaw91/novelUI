import Fe, { useRef as vr, useDebugValue as Rt, useContext as ft, createElement as yr } from "react";
var Xe = {}, gr = {
  get exports() {
    return Xe;
  },
  set exports(e) {
    Xe = e;
  }
}, ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function br() {
  if (xt)
    return ze;
  xt = 1;
  var e = Fe, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(m, h, b) {
    var S, _ = {}, N = null, z = null;
    b !== void 0 && (N = "" + b), h.key !== void 0 && (N = "" + h.key), h.ref !== void 0 && (z = h.ref);
    for (S in h)
      o.call(h, S) && !f.hasOwnProperty(S) && (_[S] = h[S]);
    if (m && m.defaultProps)
      for (S in h = m.defaultProps, h)
        _[S] === void 0 && (_[S] = h[S]);
    return { $$typeof: n, type: m, key: N, ref: z, props: _, _owner: i.current };
  }
  return ze.Fragment = t, ze.jsx = l, ze.jsxs = l, ze;
}
var Ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function Sr() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Fe, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), x = Symbol.iterator, R = "@@iterator";
    function s(r) {
      if (r === null || typeof r != "object")
        return null;
      var d = x && r[x] || r[R];
      return typeof d == "function" ? d : null;
    }
    var I = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(r) {
      {
        for (var d = arguments.length, v = new Array(d > 1 ? d - 1 : 0), $ = 1; $ < d; $++)
          v[$ - 1] = arguments[$];
        O("error", r, v);
      }
    }
    function O(r, d, v) {
      {
        var $ = I.ReactDebugCurrentFrame, V = $.getStackAddendum();
        V !== "" && (d += "%s", v = v.concat([V]));
        var q = v.map(function(Y) {
          return String(Y);
        });
        q.unshift("Warning: " + d), Function.prototype.apply.call(console[r], console, q);
      }
    }
    var A = !1, c = !1, oe = !1, pe = !1, le = !1, fe;
    fe = Symbol.for("react.module.reference");
    function he(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === f || le || r === i || r === b || r === S || pe || r === z || A || c || oe || typeof r == "object" && r !== null && (r.$$typeof === N || r.$$typeof === _ || r.$$typeof === l || r.$$typeof === m || r.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === fe || r.getModuleId !== void 0));
    }
    function be(r, d, v) {
      var $ = r.displayName;
      if ($)
        return $;
      var V = d.displayName || d.name || "";
      return V !== "" ? v + "(" + V + ")" : v;
    }
    function ae(r) {
      return r.displayName || "Context";
    }
    function X(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case t:
          return "Portal";
        case f:
          return "Profiler";
        case i:
          return "StrictMode";
        case b:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            var d = r;
            return ae(d) + ".Consumer";
          case l:
            var v = r;
            return ae(v._context) + ".Provider";
          case h:
            return be(r, r.render, "ForwardRef");
          case _:
            var $ = r.displayName || null;
            return $ !== null ? $ : X(r.type) || "Memo";
          case N: {
            var V = r, q = V._payload, Y = V._init;
            try {
              return X(Y(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, J = 0, Se, ue, re, ve, me, Ee, w;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function E() {
      {
        if (J === 0) {
          Se = console.log, ue = console.info, re = console.warn, ve = console.error, me = console.group, Ee = console.groupCollapsed, w = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        J++;
      }
    }
    function T() {
      {
        if (J--, J === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, r, {
              value: Se
            }),
            info: te({}, r, {
              value: ue
            }),
            warn: te({}, r, {
              value: re
            }),
            error: te({}, r, {
              value: ve
            }),
            group: te({}, r, {
              value: me
            }),
            groupCollapsed: te({}, r, {
              value: Ee
            }),
            groupEnd: te({}, r, {
              value: w
            })
          });
        }
        J < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var a = I.ReactCurrentDispatcher, j;
    function p(r, d, v) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (V) {
            var $ = V.stack.trim().match(/\n( *(at )?)/);
            j = $ && $[1] || "";
          }
        return `
` + j + r;
      }
    }
    var W = !1, D;
    {
      var M = typeof WeakMap == "function" ? WeakMap : Map;
      D = new M();
    }
    function u(r, d) {
      if (!r || W)
        return "";
      {
        var v = D.get(r);
        if (v !== void 0)
          return v;
      }
      var $;
      W = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = a.current, a.current = null, E();
      try {
        if (d) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (Te) {
              $ = Te;
            }
            Reflect.construct(r, [], Y);
          } else {
            try {
              Y.call();
            } catch (Te) {
              $ = Te;
            }
            r.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            $ = Te;
          }
          r();
        }
      } catch (Te) {
        if (Te && $ && typeof Te.stack == "string") {
          for (var L = Te.stack.split(`
`), de = $.stack.split(`
`), ne = L.length - 1, se = de.length - 1; ne >= 1 && se >= 0 && L[ne] !== de[se]; )
            se--;
          for (; ne >= 1 && se >= 0; ne--, se--)
            if (L[ne] !== de[se]) {
              if (ne !== 1 || se !== 1)
                do
                  if (ne--, se--, se < 0 || L[ne] !== de[se]) {
                    var we = `
` + L[ne].replace(" at new ", " at ");
                    return r.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", r.displayName)), typeof r == "function" && D.set(r, we), we;
                  }
                while (ne >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        W = !1, a.current = q, T(), Error.prepareStackTrace = V;
      }
      var De = r ? r.displayName || r.name : "", Ct = De ? p(De) : "";
      return typeof r == "function" && D.set(r, Ct), Ct;
    }
    function K(r, d, v) {
      return u(r, !1);
    }
    function y(r) {
      var d = r.prototype;
      return !!(d && d.isReactComponent);
    }
    function k(r, d, v) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return u(r, y(r));
      if (typeof r == "string")
        return p(r);
      switch (r) {
        case b:
          return p("Suspense");
        case S:
          return p("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case h:
            return K(r.render);
          case _:
            return k(r.type, d, v);
          case N: {
            var $ = r, V = $._payload, q = $._init;
            try {
              return k(q(V), d, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, F = {}, ie = I.ReactDebugCurrentFrame;
    function Ce(r) {
      if (r) {
        var d = r._owner, v = k(r.type, r._source, d ? d.type : null);
        ie.setExtraStackFrame(v);
      } else
        ie.setExtraStackFrame(null);
    }
    function ce(r, d, v, $, V) {
      {
        var q = Function.call.bind(Z);
        for (var Y in r)
          if (q(r, Y)) {
            var L = void 0;
            try {
              if (typeof r[Y] != "function") {
                var de = Error(($ || "React class") + ": " + v + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              L = r[Y](d, Y, $, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              L = ne;
            }
            L && !(L instanceof Error) && (Ce(V), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", v, Y, typeof L), Ce(null)), L instanceof Error && !(L.message in F) && (F[L.message] = !0, Ce(V), C("Failed %s type: %s", v, L.message), Ce(null));
          }
      }
    }
    var Oe = Array.isArray;
    function xe(r) {
      return Oe(r);
    }
    function ye(r) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, v = d && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return v;
      }
    }
    function P(r) {
      try {
        return Q(r), !1;
      } catch {
        return !0;
      }
    }
    function Q(r) {
      return "" + r;
    }
    function Ne(r) {
      if (P(r))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(r)), Q(r);
    }
    var Ae = I.ReactCurrentOwner, Re = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vt, yt, Je;
    Je = {};
    function tr(r) {
      if (Z.call(r, "ref")) {
        var d = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function rr(r) {
      if (Z.call(r, "key")) {
        var d = Object.getOwnPropertyDescriptor(r, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function nr(r, d) {
      if (typeof r.ref == "string" && Ae.current && d && Ae.current.stateNode !== d) {
        var v = X(Ae.current.type);
        Je[v] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(Ae.current.type), r.ref), Je[v] = !0);
      }
    }
    function or(r, d) {
      {
        var v = function() {
          vt || (vt = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function ar(r, d) {
      {
        var v = function() {
          yt || (yt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        v.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var ir = function(r, d, v, $, V, q, Y) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: d,
        ref: v,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function sr(r, d, v, $, V) {
      {
        var q, Y = {}, L = null, de = null;
        v !== void 0 && (Ne(v), L = "" + v), rr(d) && (Ne(d.key), L = "" + d.key), tr(d) && (de = d.ref, nr(d, V));
        for (q in d)
          Z.call(d, q) && !Re.hasOwnProperty(q) && (Y[q] = d[q]);
        if (r && r.defaultProps) {
          var ne = r.defaultProps;
          for (q in ne)
            Y[q] === void 0 && (Y[q] = ne[q]);
        }
        if (L || de) {
          var se = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          L && or(Y, se), de && ar(Y, se);
        }
        return ir(r, L, de, V, $, Ae.current, Y);
      }
    }
    var Qe = I.ReactCurrentOwner, gt = I.ReactDebugCurrentFrame;
    function Ie(r) {
      if (r) {
        var d = r._owner, v = k(r.type, r._source, d ? d.type : null);
        gt.setExtraStackFrame(v);
      } else
        gt.setExtraStackFrame(null);
    }
    var et;
    et = !1;
    function tt(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function bt() {
      {
        if (Qe.current) {
          var r = X(Qe.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function cr(r) {
      {
        if (r !== void 0) {
          var d = r.fileName.replace(/^.*[\\\/]/, ""), v = r.lineNumber;
          return `

Check your code at ` + d + ":" + v + ".";
        }
        return "";
      }
    }
    var St = {};
    function lr(r) {
      {
        var d = bt();
        if (!d) {
          var v = typeof r == "string" ? r : r.displayName || r.name;
          v && (d = `

Check the top-level render call using <` + v + ">.");
        }
        return d;
      }
    }
    function Et(r, d) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var v = lr(d);
        if (St[v])
          return;
        St[v] = !0;
        var $ = "";
        r && r._owner && r._owner !== Qe.current && ($ = " It was passed a child from " + X(r._owner.type) + "."), Ie(r), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, $), Ie(null);
      }
    }
    function wt(r, d) {
      {
        if (typeof r != "object")
          return;
        if (xe(r))
          for (var v = 0; v < r.length; v++) {
            var $ = r[v];
            tt($) && Et($, d);
          }
        else if (tt(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var V = s(r);
          if (typeof V == "function" && V !== r.entries)
            for (var q = V.call(r), Y; !(Y = q.next()).done; )
              tt(Y.value) && Et(Y.value, d);
        }
      }
    }
    function ur(r) {
      {
        var d = r.type;
        if (d == null || typeof d == "string")
          return;
        var v;
        if (typeof d == "function")
          v = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === _))
          v = d.propTypes;
        else
          return;
        if (v) {
          var $ = X(d);
          ce(v, r.props, "prop", $, r);
        } else if (d.PropTypes !== void 0 && !et) {
          et = !0;
          var V = X(d);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(r) {
      {
        for (var d = Object.keys(r.props), v = 0; v < d.length; v++) {
          var $ = d[v];
          if ($ !== "children" && $ !== "key") {
            Ie(r), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Ie(null);
            break;
          }
        }
        r.ref !== null && (Ie(r), C("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    function _t(r, d, v, $, V, q) {
      {
        var Y = he(r);
        if (!Y) {
          var L = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = cr(V);
          de ? L += de : L += bt();
          var ne;
          r === null ? ne = "null" : xe(r) ? ne = "array" : r !== void 0 && r.$$typeof === n ? (ne = "<" + (X(r.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof r, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, L);
        }
        var se = sr(r, d, v, V, q);
        if (se == null)
          return se;
        if (Y) {
          var we = d.children;
          if (we !== void 0)
            if ($)
              if (xe(we)) {
                for (var De = 0; De < we.length; De++)
                  wt(we[De], r);
                Object.freeze && Object.freeze(we);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wt(we, r);
        }
        return r === o ? fr(se) : ur(se), se;
      }
    }
    function dr(r, d, v) {
      return _t(r, d, v, !0);
    }
    function pr(r, d, v) {
      return _t(r, d, v, !1);
    }
    var hr = pr, mr = dr;
    Ye.Fragment = o, Ye.jsx = hr, Ye.jsxs = mr;
  }()), Ye;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = br() : e.exports = Sr();
})(gr);
const ge = Xe.jsx, Wt = Xe.jsxs;
var We = {}, Er = {
  get exports() {
    return We;
  },
  set exports(e) {
    We = e;
  }
}, B = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function wr() {
  if (Tt)
    return B;
  Tt = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), m = Symbol.for("react.server_context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
  function R(s) {
    if (typeof s == "object" && s !== null) {
      var I = s.$$typeof;
      switch (I) {
        case e:
          switch (s = s.type, s) {
            case t:
            case i:
            case o:
            case b:
            case S:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case m:
                case l:
                case h:
                case N:
                case _:
                case f:
                  return s;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  return B.ContextConsumer = l, B.ContextProvider = f, B.Element = e, B.ForwardRef = h, B.Fragment = t, B.Lazy = N, B.Memo = _, B.Portal = n, B.Profiler = i, B.StrictMode = o, B.Suspense = b, B.SuspenseList = S, B.isAsyncMode = function() {
    return !1;
  }, B.isConcurrentMode = function() {
    return !1;
  }, B.isContextConsumer = function(s) {
    return R(s) === l;
  }, B.isContextProvider = function(s) {
    return R(s) === f;
  }, B.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, B.isForwardRef = function(s) {
    return R(s) === h;
  }, B.isFragment = function(s) {
    return R(s) === t;
  }, B.isLazy = function(s) {
    return R(s) === N;
  }, B.isMemo = function(s) {
    return R(s) === _;
  }, B.isPortal = function(s) {
    return R(s) === n;
  }, B.isProfiler = function(s) {
    return R(s) === i;
  }, B.isStrictMode = function(s) {
    return R(s) === o;
  }, B.isSuspense = function(s) {
    return R(s) === b;
  }, B.isSuspenseList = function(s) {
    return R(s) === S;
  }, B.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === t || s === i || s === o || s === b || s === S || s === z || typeof s == "object" && s !== null && (s.$$typeof === N || s.$$typeof === _ || s.$$typeof === f || s.$$typeof === l || s.$$typeof === h || s.$$typeof === x || s.getModuleId !== void 0);
  }, B.typeOf = R, B;
}
var U = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function _r() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), m = Symbol.for("react.server_context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), x = !1, R = !1, s = !1, I = !1, C = !1, O;
    O = Symbol.for("react.module.reference");
    function A(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === t || y === i || C || y === o || y === b || y === S || I || y === z || x || R || s || typeof y == "object" && y !== null && (y.$$typeof === N || y.$$typeof === _ || y.$$typeof === f || y.$$typeof === l || y.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === O || y.getModuleId !== void 0));
    }
    function c(y) {
      if (typeof y == "object" && y !== null) {
        var k = y.$$typeof;
        switch (k) {
          case e:
            var Z = y.type;
            switch (Z) {
              case t:
              case i:
              case o:
              case b:
              case S:
                return Z;
              default:
                var F = Z && Z.$$typeof;
                switch (F) {
                  case m:
                  case l:
                  case h:
                  case N:
                  case _:
                  case f:
                    return F;
                  default:
                    return k;
                }
            }
          case n:
            return k;
        }
      }
    }
    var oe = l, pe = f, le = e, fe = h, he = t, be = N, ae = _, X = n, te = i, J = o, Se = b, ue = S, re = !1, ve = !1;
    function me(y) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ee(y) {
      return ve || (ve = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function w(y) {
      return c(y) === l;
    }
    function g(y) {
      return c(y) === f;
    }
    function E(y) {
      return typeof y == "object" && y !== null && y.$$typeof === e;
    }
    function T(y) {
      return c(y) === h;
    }
    function a(y) {
      return c(y) === t;
    }
    function j(y) {
      return c(y) === N;
    }
    function p(y) {
      return c(y) === _;
    }
    function W(y) {
      return c(y) === n;
    }
    function D(y) {
      return c(y) === i;
    }
    function M(y) {
      return c(y) === o;
    }
    function u(y) {
      return c(y) === b;
    }
    function K(y) {
      return c(y) === S;
    }
    U.ContextConsumer = oe, U.ContextProvider = pe, U.Element = le, U.ForwardRef = fe, U.Fragment = he, U.Lazy = be, U.Memo = ae, U.Portal = X, U.Profiler = te, U.StrictMode = J, U.Suspense = Se, U.SuspenseList = ue, U.isAsyncMode = me, U.isConcurrentMode = Ee, U.isContextConsumer = w, U.isContextProvider = g, U.isElement = E, U.isForwardRef = T, U.isFragment = a, U.isLazy = j, U.isMemo = p, U.isPortal = W, U.isProfiler = D, U.isStrictMode = M, U.isSuspense = u, U.isSuspenseList = K, U.isValidElementType = A, U.typeOf = c;
  }()), U;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = wr() : e.exports = _r();
})(Er);
function Cr(e) {
  function n(w, g, E, T, a) {
    for (var j = 0, p = 0, W = 0, D = 0, M, u, K = 0, y = 0, k, Z = k = M = 0, F = 0, ie = 0, Ce = 0, ce = 0, Oe = E.length, xe = Oe - 1, ye, P = "", Q = "", Ne = "", Ae = "", Re; F < Oe; ) {
      if (u = E.charCodeAt(F), F === xe && p + D + W + j !== 0 && (p !== 0 && (u = p === 47 ? 10 : 47), D = W = j = 0, Oe++, xe++), p + D + W + j === 0) {
        if (F === xe && (0 < ie && (P = P.replace(N, "")), 0 < P.trim().length)) {
          switch (u) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              P += E.charAt(F);
          }
          u = 59;
        }
        switch (u) {
          case 123:
            for (P = P.trim(), M = P.charCodeAt(0), k = 1, ce = ++F; F < Oe; ) {
              switch (u = E.charCodeAt(F)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (u = E.charCodeAt(F + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Z = F + 1; Z < xe; ++Z)
                          switch (E.charCodeAt(Z)) {
                            case 47:
                              if (u === 42 && E.charCodeAt(Z - 1) === 42 && F + 2 !== Z) {
                                F = Z + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (u === 47) {
                                F = Z + 1;
                                break e;
                              }
                          }
                        F = Z;
                      }
                  }
                  break;
                case 91:
                  u++;
                case 40:
                  u++;
                case 34:
                case 39:
                  for (; F++ < xe && E.charCodeAt(F) !== u; )
                    ;
              }
              if (k === 0)
                break;
              F++;
            }
            switch (k = E.substring(ce, F), M === 0 && (M = (P = P.replace(_, "").trim()).charCodeAt(0)), M) {
              case 64:
                switch (0 < ie && (P = P.replace(N, "")), u = P.charCodeAt(1), u) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ie = g;
                    break;
                  default:
                    ie = Se;
                }
                if (k = n(g, ie, k, u, a + 1), ce = k.length, 0 < re && (ie = t(Se, P, Ce), Re = m(3, k, ie, g, X, ae, ce, u, a, T), P = ie.join(""), Re !== void 0 && (ce = (k = Re.trim()).length) === 0 && (u = 0, k = "")), 0 < ce)
                  switch (u) {
                    case 115:
                      P = P.replace(oe, l);
                    case 100:
                    case 109:
                    case 45:
                      k = P + "{" + k + "}";
                      break;
                    case 107:
                      P = P.replace(C, "$1 $2"), k = P + "{" + k + "}", k = J === 1 || J === 2 && f("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                      break;
                    default:
                      k = P + k, T === 112 && (k = (Q += k, ""));
                  }
                else
                  k = "";
                break;
              default:
                k = n(g, t(g, P, Ce), k, T, a + 1);
            }
            Ne += k, k = Ce = ie = Z = M = 0, P = "", u = E.charCodeAt(++F);
            break;
          case 125:
          case 59:
            if (P = (0 < ie ? P.replace(N, "") : P).trim(), 1 < (ce = P.length))
              switch (Z === 0 && (M = P.charCodeAt(0), M === 45 || 96 < M && 123 > M) && (ce = (P = P.replace(" ", ":")).length), 0 < re && (Re = m(1, P, g, w, X, ae, Q.length, T, a, T)) !== void 0 && (ce = (P = Re.trim()).length) === 0 && (P = "\0\0"), M = P.charCodeAt(0), u = P.charCodeAt(1), M) {
                case 0:
                  break;
                case 64:
                  if (u === 105 || u === 99) {
                    Ae += P + E.charAt(F);
                    break;
                  }
                default:
                  P.charCodeAt(ce - 1) !== 58 && (Q += i(P, M, u, P.charCodeAt(2)));
              }
            Ce = ie = Z = M = 0, P = "", u = E.charCodeAt(++F);
        }
      }
      switch (u) {
        case 13:
        case 10:
          p === 47 ? p = 0 : 1 + M === 0 && T !== 107 && 0 < P.length && (ie = 1, P += "\0"), 0 < re * me && m(0, P, g, w, X, ae, Q.length, T, a, T), ae = 1, X++;
          break;
        case 59:
        case 125:
          if (p + D + W + j === 0) {
            ae++;
            break;
          }
        default:
          switch (ae++, ye = E.charAt(F), u) {
            case 9:
            case 32:
              if (D + j + p === 0)
                switch (K) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ye = "";
                    break;
                  default:
                    u !== 32 && (ye = " ");
                }
              break;
            case 0:
              ye = "\\0";
              break;
            case 12:
              ye = "\\f";
              break;
            case 11:
              ye = "\\v";
              break;
            case 38:
              D + p + j === 0 && (ie = Ce = 1, ye = "\f" + ye);
              break;
            case 108:
              if (D + p + j + te === 0 && 0 < Z)
                switch (F - Z) {
                  case 2:
                    K === 112 && E.charCodeAt(F - 3) === 58 && (te = K);
                  case 8:
                    y === 111 && (te = y);
                }
              break;
            case 58:
              D + p + j === 0 && (Z = F);
              break;
            case 44:
              p + W + D + j === 0 && (ie = 1, ye += "\r");
              break;
            case 34:
            case 39:
              p === 0 && (D = D === u ? 0 : D === 0 ? u : D);
              break;
            case 91:
              D + p + W === 0 && j++;
              break;
            case 93:
              D + p + W === 0 && j--;
              break;
            case 41:
              D + p + j === 0 && W--;
              break;
            case 40:
              if (D + p + j === 0) {
                if (M === 0)
                  switch (2 * K + 3 * y) {
                    case 533:
                      break;
                    default:
                      M = 1;
                  }
                W++;
              }
              break;
            case 64:
              p + W + D + j + Z + k === 0 && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < D + j + W))
                switch (p) {
                  case 0:
                    switch (2 * u + 3 * E.charCodeAt(F + 1)) {
                      case 235:
                        p = 47;
                        break;
                      case 220:
                        ce = F, p = 42;
                    }
                    break;
                  case 42:
                    u === 47 && K === 42 && ce + 2 !== F && (E.charCodeAt(ce + 2) === 33 && (Q += E.substring(ce, F + 1)), ye = "", p = 0);
                }
          }
          p === 0 && (P += ye);
      }
      y = K, K = u, F++;
    }
    if (ce = Q.length, 0 < ce) {
      if (ie = g, 0 < re && (Re = m(2, Q, ie, w, X, ae, ce, T, a, T), Re !== void 0 && (Q = Re).length === 0))
        return Ae + Q + Ne;
      if (Q = ie.join(",") + "{" + Q + "}", J * te !== 0) {
        switch (J !== 2 || f(Q, 2) || (te = 0), te) {
          case 111:
            Q = Q.replace(A, ":-moz-$1") + Q;
            break;
          case 112:
            Q = Q.replace(O, "::-webkit-input-$1") + Q.replace(O, "::-moz-$1") + Q.replace(O, ":-ms-input-$1") + Q;
        }
        te = 0;
      }
    }
    return Ae + Q + Ne;
  }
  function t(w, g, E) {
    var T = g.trim().split(s);
    g = T;
    var a = T.length, j = w.length;
    switch (j) {
      case 0:
      case 1:
        var p = 0;
        for (w = j === 0 ? "" : w[0] + " "; p < a; ++p)
          g[p] = o(w, g[p], E).trim();
        break;
      default:
        var W = p = 0;
        for (g = []; p < a; ++p)
          for (var D = 0; D < j; ++D)
            g[W++] = o(w[D] + " ", T[p], E).trim();
    }
    return g;
  }
  function o(w, g, E) {
    var T = g.charCodeAt(0);
    switch (33 > T && (T = (g = g.trim()).charCodeAt(0)), T) {
      case 38:
        return g.replace(I, "$1" + w.trim());
      case 58:
        return w.trim() + g.replace(I, "$1" + w.trim());
      default:
        if (0 < 1 * E && 0 < g.indexOf("\f"))
          return g.replace(I, (w.charCodeAt(0) === 58 ? "" : "$1") + w.trim());
    }
    return w + g;
  }
  function i(w, g, E, T) {
    var a = w + ";", j = 2 * g + 3 * E + 4 * T;
    if (j === 944) {
      w = a.indexOf(":", 9) + 1;
      var p = a.substring(w, a.length - 1).trim();
      return p = a.substring(0, w).trim() + p + ";", J === 1 || J === 2 && f(p, 1) ? "-webkit-" + p + p : p;
    }
    if (J === 0 || J === 2 && !f(a, 1))
      return a;
    switch (j) {
      case 1015:
        return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
      case 951:
        return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
      case 963:
        return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
      case 1009:
        if (a.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (a.charCodeAt(8) === 45)
          return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(be, "$1-webkit-$2") + a;
        break;
      case 932:
        if (a.charCodeAt(4) === 45)
          switch (a.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
            case 115:
              return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
            case 98:
              return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
          }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (a.charCodeAt(8) !== 99)
          break;
        return p = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + p + "-webkit-" + a + "-ms-flex-pack" + p + a;
      case 1005:
        return x.test(a) ? a.replace(z, ":-webkit-") + a.replace(z, ":-moz-") + a : a;
      case 1e3:
        switch (p = a.substring(13).trim(), g = p.indexOf("-") + 1, p.charCodeAt(0) + p.charCodeAt(g)) {
          case 226:
            p = a.replace(c, "tb");
            break;
          case 232:
            p = a.replace(c, "tb-rl");
            break;
          case 220:
            p = a.replace(c, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + p + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (g = (a = w).length - 10, p = (a.charCodeAt(g) === 33 ? a.substring(0, g) : a).substring(w.indexOf(":", 7) + 1).trim(), j = p.charCodeAt(0) + (p.charCodeAt(7) | 0)) {
          case 203:
            if (111 > p.charCodeAt(8))
              break;
          case 115:
            a = a.replace(p, "-webkit-" + p) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(p, "-webkit-" + (102 < j ? "inline-" : "") + "box") + ";" + a.replace(p, "-webkit-" + p) + ";" + a.replace(p, "-ms-" + p + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (a.charCodeAt(5) === 45)
          switch (a.charCodeAt(6)) {
            case 105:
              return p = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + p + "-ms-flex-" + p + a;
            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(le, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(le, "") + a;
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (he.test(w) === !0)
          return (p = w.substring(w.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(w.replace("stretch", "fill-available"), g, E, T).replace(":fill-available", ":stretch") : a.replace(p, "-webkit-" + p) + a.replace(p, "-moz-" + p.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, E + T === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(R, "$1-webkit-$2") + a;
    }
    return a;
  }
  function f(w, g) {
    var E = w.indexOf(g === 1 ? ":" : "{"), T = w.substring(0, g !== 3 ? E : 10);
    return E = w.substring(E + 1, w.length - 1), ve(g !== 2 ? T : T.replace(fe, "$1"), E, g);
  }
  function l(w, g) {
    var E = i(g, g.charCodeAt(0), g.charCodeAt(1), g.charCodeAt(2));
    return E !== g + ";" ? E.replace(pe, " or ($1)").substring(4) : "(" + g + ")";
  }
  function m(w, g, E, T, a, j, p, W, D, M) {
    for (var u = 0, K = g, y; u < re; ++u)
      switch (y = ue[u].call(S, w, K, E, T, a, j, p, W, D, M)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          K = y;
      }
    if (K !== g)
      return K;
  }
  function h(w) {
    switch (w) {
      case void 0:
      case null:
        re = ue.length = 0;
        break;
      default:
        if (typeof w == "function")
          ue[re++] = w;
        else if (typeof w == "object")
          for (var g = 0, E = w.length; g < E; ++g)
            h(w[g]);
        else
          me = !!w | 0;
    }
    return h;
  }
  function b(w) {
    return w = w.prefix, w !== void 0 && (ve = null, w ? typeof w != "function" ? J = 1 : (J = 2, ve = w) : J = 0), b;
  }
  function S(w, g) {
    var E = w;
    if (33 > E.charCodeAt(0) && (E = E.trim()), Ee = E, E = [Ee], 0 < re) {
      var T = m(-1, g, E, E, X, ae, 0, 0, 0, 0);
      T !== void 0 && typeof T == "string" && (g = T);
    }
    var a = n(Se, E, g, 0, 0);
    return 0 < re && (T = m(-2, a, E, E, X, ae, a.length, 0, 0, 0), T !== void 0 && (a = T)), Ee = "", te = 0, ae = X = 1, a;
  }
  var _ = /^\0+/g, N = /[\0\r\f]/g, z = /: */g, x = /zoo|gra/, R = /([,: ])(transform)/g, s = /,\r+?/g, I = /([\t\r\n ])*\f?&/g, C = /@(k\w+)\s*(\S*)\s*/, O = /::(place)/g, A = /:(read-only)/g, c = /[svh]\w+-[tblr]{2}/, oe = /\(\s*(.*)\s*\)/g, pe = /([\s\S]*?);/g, le = /-self|flex-/g, fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, he = /stretch|:\s*\w+\-(?:conte|avail)/, be = /([^-])(image-set\()/, ae = 1, X = 1, te = 0, J = 1, Se = [], ue = [], re = 0, ve = null, me = 0, Ee = "";
  return S.use = h, S.set = b, e !== void 0 && b(e), S;
}
var Rr = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function xr(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var Ar = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $t = /* @__PURE__ */ xr(
  function(e) {
    return Ar.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ot = {}, Tr = {
  get exports() {
    return ot;
  },
  set exports(e) {
    ot = e;
  }
}, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Pr() {
  if (kt)
    return H;
  kt = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, f = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, N = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, s = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function O(c) {
    if (typeof c == "object" && c !== null) {
      var oe = c.$$typeof;
      switch (oe) {
        case n:
          switch (c = c.type, c) {
            case h:
            case b:
            case o:
            case f:
            case i:
            case _:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case m:
                case S:
                case x:
                case z:
                case l:
                  return c;
                default:
                  return oe;
              }
          }
        case t:
          return oe;
      }
    }
  }
  function A(c) {
    return O(c) === b;
  }
  return H.AsyncMode = h, H.ConcurrentMode = b, H.ContextConsumer = m, H.ContextProvider = l, H.Element = n, H.ForwardRef = S, H.Fragment = o, H.Lazy = x, H.Memo = z, H.Portal = t, H.Profiler = f, H.StrictMode = i, H.Suspense = _, H.isAsyncMode = function(c) {
    return A(c) || O(c) === h;
  }, H.isConcurrentMode = A, H.isContextConsumer = function(c) {
    return O(c) === m;
  }, H.isContextProvider = function(c) {
    return O(c) === l;
  }, H.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === n;
  }, H.isForwardRef = function(c) {
    return O(c) === S;
  }, H.isFragment = function(c) {
    return O(c) === o;
  }, H.isLazy = function(c) {
    return O(c) === x;
  }, H.isMemo = function(c) {
    return O(c) === z;
  }, H.isPortal = function(c) {
    return O(c) === t;
  }, H.isProfiler = function(c) {
    return O(c) === f;
  }, H.isStrictMode = function(c) {
    return O(c) === i;
  }, H.isSuspense = function(c) {
    return O(c) === _;
  }, H.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === o || c === b || c === f || c === i || c === _ || c === N || typeof c == "object" && c !== null && (c.$$typeof === x || c.$$typeof === z || c.$$typeof === l || c.$$typeof === m || c.$$typeof === S || c.$$typeof === s || c.$$typeof === I || c.$$typeof === C || c.$$typeof === R);
  }, H.typeOf = O, H;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function $r() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, f = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, b = e ? Symbol.for("react.concurrent_mode") : 60111, S = e ? Symbol.for("react.forward_ref") : 60112, _ = e ? Symbol.for("react.suspense") : 60113, N = e ? Symbol.for("react.suspense_list") : 60120, z = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, s = e ? Symbol.for("react.fundamental") : 60117, I = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function O(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === o || u === b || u === f || u === i || u === _ || u === N || typeof u == "object" && u !== null && (u.$$typeof === x || u.$$typeof === z || u.$$typeof === l || u.$$typeof === m || u.$$typeof === S || u.$$typeof === s || u.$$typeof === I || u.$$typeof === C || u.$$typeof === R);
    }
    function A(u) {
      if (typeof u == "object" && u !== null) {
        var K = u.$$typeof;
        switch (K) {
          case n:
            var y = u.type;
            switch (y) {
              case h:
              case b:
              case o:
              case f:
              case i:
              case _:
                return y;
              default:
                var k = y && y.$$typeof;
                switch (k) {
                  case m:
                  case S:
                  case x:
                  case z:
                  case l:
                    return k;
                  default:
                    return K;
                }
            }
          case t:
            return K;
        }
      }
    }
    var c = h, oe = b, pe = m, le = l, fe = n, he = S, be = o, ae = x, X = z, te = t, J = f, Se = i, ue = _, re = !1;
    function ve(u) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), me(u) || A(u) === h;
    }
    function me(u) {
      return A(u) === b;
    }
    function Ee(u) {
      return A(u) === m;
    }
    function w(u) {
      return A(u) === l;
    }
    function g(u) {
      return typeof u == "object" && u !== null && u.$$typeof === n;
    }
    function E(u) {
      return A(u) === S;
    }
    function T(u) {
      return A(u) === o;
    }
    function a(u) {
      return A(u) === x;
    }
    function j(u) {
      return A(u) === z;
    }
    function p(u) {
      return A(u) === t;
    }
    function W(u) {
      return A(u) === f;
    }
    function D(u) {
      return A(u) === i;
    }
    function M(u) {
      return A(u) === _;
    }
    G.AsyncMode = c, G.ConcurrentMode = oe, G.ContextConsumer = pe, G.ContextProvider = le, G.Element = fe, G.ForwardRef = he, G.Fragment = be, G.Lazy = ae, G.Memo = X, G.Portal = te, G.Profiler = J, G.StrictMode = Se, G.Suspense = ue, G.isAsyncMode = ve, G.isConcurrentMode = me, G.isContextConsumer = Ee, G.isContextProvider = w, G.isElement = g, G.isForwardRef = E, G.isFragment = T, G.isLazy = a, G.isMemo = j, G.isPortal = p, G.isProfiler = W, G.isStrictMode = D, G.isSuspense = M, G.isValidElementType = O, G.typeOf = A;
  }()), G;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Pr() : e.exports = $r();
})(Tr);
var dt = ot, kr = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Or = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Nr = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Bt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, pt = {};
pt[dt.ForwardRef] = Nr;
pt[dt.Memo] = Bt;
function Nt(e) {
  return dt.isMemo(e) ? Bt : pt[e.$$typeof] || kr;
}
var Ir = Object.defineProperty, Dr = Object.getOwnPropertyNames, It = Object.getOwnPropertySymbols, jr = Object.getOwnPropertyDescriptor, Mr = Object.getPrototypeOf, Dt = Object.prototype;
function Ut(e, n, t) {
  if (typeof n != "string") {
    if (Dt) {
      var o = Mr(n);
      o && o !== Dt && Ut(e, o, t);
    }
    var i = Dr(n);
    It && (i = i.concat(It(n)));
    for (var f = Nt(e), l = Nt(n), m = 0; m < i.length; ++m) {
      var h = i[m];
      if (!Or[h] && !(t && t[h]) && !(l && l[h]) && !(f && f[h])) {
        var b = jr(n, h);
        try {
          Ir(e, h, b);
        } catch {
        }
      }
    }
  }
  return e;
}
var Fr = Ut;
function Pe() {
  return (Pe = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }).apply(this, arguments);
}
var jt = function(e, n) {
  for (var t = [e[0]], o = 0, i = n.length; o < i; o += 1)
    t.push(n[o], e[o + 1]);
  return t;
}, at = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !We.typeOf(e);
}, Ze = Object.freeze([]), $e = Object.freeze({});
function Be(e) {
  return typeof e == "function";
}
function it(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ht(e) {
  return e && typeof e.styledComponentId == "string";
}
var je = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", mt = typeof window < "u" && "HTMLElement" in window, Lr = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), zr = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Yr() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, o = arguments.length; t < o; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Le(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Yr.apply(void 0, [zr[e]].concat(t)).trim());
}
var Vr = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(t) {
    for (var o = 0, i = 0; i < t; i++)
      o += this.groupSizes[i];
    return o;
  }, n.insertRules = function(t, o) {
    if (t >= this.groupSizes.length) {
      for (var i = this.groupSizes, f = i.length, l = f; t >= l; )
        (l <<= 1) < 0 && Le(16, "" + t);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(i), this.length = l;
      for (var m = f; m < l; m++)
        this.groupSizes[m] = 0;
    }
    for (var h = this.indexOfGroup(t + 1), b = 0, S = o.length; b < S; b++)
      this.tag.insertRule(h, o[b]) && (this.groupSizes[t]++, h++);
  }, n.clearGroup = function(t) {
    if (t < this.length) {
      var o = this.groupSizes[t], i = this.indexOfGroup(t), f = i + o;
      this.groupSizes[t] = 0;
      for (var l = i; l < f; l++)
        this.tag.deleteRule(i);
    }
  }, n.getGroup = function(t) {
    var o = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return o;
    for (var i = this.groupSizes[t], f = this.indexOfGroup(t), l = f + i, m = f; m < l; m++)
      o += this.tag.getRule(m) + `/*!sc*/
`;
    return o;
  }, e;
}(), qe = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Map(), Ve = 1, Ue = function(e) {
  if (qe.has(e))
    return qe.get(e);
  for (; Ke.has(Ve); )
    Ve++;
  var n = Ve++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Le(16, "" + n), qe.set(e, n), Ke.set(n, e), n;
}, Wr = function(e) {
  return Ke.get(e);
}, Br = function(e, n) {
  n >= Ve && (Ve = n + 1), qe.set(e, n), Ke.set(n, e);
}, Ur = "style[" + je + '][data-styled-version="5.3.6"]', Hr = new RegExp("^" + je + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Gr = function(e, n, t) {
  for (var o, i = t.split(","), f = 0, l = i.length; f < l; f++)
    (o = i[f]) && e.registerName(n, o);
}, qr = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), o = [], i = 0, f = t.length; i < f; i++) {
    var l = t[i].trim();
    if (l) {
      var m = l.match(Hr);
      if (m) {
        var h = 0 | parseInt(m[1], 10), b = m[2];
        h !== 0 && (Br(b, h), Gr(e, b, m[3]), e.getTag().insertRules(h, o)), o.length = 0;
      } else
        o.push(l);
    }
  }
}, Xr = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ht = function(e) {
  var n = document.head, t = e || n, o = document.createElement("style"), i = function(m) {
    for (var h = m.childNodes, b = h.length; b >= 0; b--) {
      var S = h[b];
      if (S && S.nodeType === 1 && S.hasAttribute(je))
        return S;
    }
  }(t), f = i !== void 0 ? i.nextSibling : null;
  o.setAttribute(je, "active"), o.setAttribute("data-styled-version", "5.3.6");
  var l = Xr();
  return l && o.setAttribute("nonce", l), t.insertBefore(o, f), o;
}, Zr = function() {
  function e(t) {
    var o = this.element = Ht(t);
    o.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var f = document.styleSheets, l = 0, m = f.length; l < m; l++) {
        var h = f[l];
        if (h.ownerNode === i)
          return h;
      }
      Le(17);
    }(o), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, o) {
    try {
      return this.sheet.insertRule(o, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, n.getRule = function(t) {
    var o = this.sheet.cssRules[t];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), Kr = function() {
  function e(t) {
    var o = this.element = Ht(t);
    this.nodes = o.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, o) {
    if (t <= this.length && t >= 0) {
      var i = document.createTextNode(o), f = this.nodes[t];
      return this.element.insertBefore(i, f || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Jr = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, o) {
    return t <= this.length && (this.rules.splice(t, 0, o), this.length++, !0);
  }, n.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Mt = mt, Qr = { isServer: !mt, useCSSOMInjection: !Lr }, Gt = function() {
  function e(t, o, i) {
    t === void 0 && (t = $e), o === void 0 && (o = {}), this.options = Pe({}, Qr, {}, t), this.gs = o, this.names = new Map(i), this.server = !!t.isServer, !this.server && mt && Mt && (Mt = !1, function(f) {
      for (var l = document.querySelectorAll(Ur), m = 0, h = l.length; m < h; m++) {
        var b = l[m];
        b && b.getAttribute(je) !== "active" && (qr(f, b), b.parentNode && b.parentNode.removeChild(b));
      }
    }(this));
  }
  e.registerId = function(t) {
    return Ue(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, o) {
    return o === void 0 && (o = !0), new e(Pe({}, this.options, {}, t), this.gs, o && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (i = (o = this.options).isServer, f = o.useCSSOMInjection, l = o.target, t = i ? new Jr(l) : f ? new Zr(l) : new Kr(l), new Vr(t)));
    var t, o, i, f, l;
  }, n.hasNameForId = function(t, o) {
    return this.names.has(t) && this.names.get(t).has(o);
  }, n.registerName = function(t, o) {
    if (Ue(t), this.names.has(t))
      this.names.get(t).add(o);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(o), this.names.set(t, i);
    }
  }, n.insertRules = function(t, o, i) {
    this.registerName(t, o), this.getTag().insertRules(Ue(t), i);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(Ue(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var o = t.getTag(), i = o.length, f = "", l = 0; l < i; l++) {
        var m = Wr(l);
        if (m !== void 0) {
          var h = t.names.get(m), b = o.getGroup(l);
          if (h && b && h.size) {
            var S = je + ".g" + l + '[id="' + m + '"]', _ = "";
            h !== void 0 && h.forEach(function(N) {
              N.length > 0 && (_ += N + ",");
            }), f += "" + b + S + '{content:"' + _ + `"}/*!sc*/
`;
          }
        }
      }
      return f;
    }(this);
  }, e;
}(), en = /(a)(d)/gi, Ft = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function st(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Ft(n % 52) + t;
  return (Ft(n % 52) + t).replace(en, "$1-$2");
}
var ke = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, qt = function(e) {
  return ke(5381, e);
};
function tn(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Be(t) && !ht(t))
      return !1;
  }
  return !0;
}
var rn = qt("5.3.6"), nn = function() {
  function e(n, t, o) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && tn(n), this.componentId = t, this.baseHash = ke(rn, t), this.baseStyle = o, Gt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, o) {
    var i = this.componentId, f = [];
    if (this.baseStyle && f.push(this.baseStyle.generateAndInjectStyles(n, t, o)), this.isStatic && !o.hash)
      if (this.staticRulesId && t.hasNameForId(i, this.staticRulesId))
        f.push(this.staticRulesId);
      else {
        var l = Me(this.rules, n, t, o).join(""), m = st(ke(this.baseHash, l) >>> 0);
        if (!t.hasNameForId(i, m)) {
          var h = o(l, "." + m, void 0, i);
          t.insertRules(i, m, h);
        }
        f.push(m), this.staticRulesId = m;
      }
    else {
      for (var b = this.rules.length, S = ke(this.baseHash, o.hash), _ = "", N = 0; N < b; N++) {
        var z = this.rules[N];
        if (typeof z == "string")
          _ += z, process.env.NODE_ENV !== "production" && (S = ke(S, z + N));
        else if (z) {
          var x = Me(z, n, t, o), R = Array.isArray(x) ? x.join("") : x;
          S = ke(S, R + N), _ += R;
        }
      }
      if (_) {
        var s = st(S >>> 0);
        if (!t.hasNameForId(i, s)) {
          var I = o(_, "." + s, void 0, i);
          t.insertRules(i, s, I);
        }
        f.push(s);
      }
    }
    return f.join(" ");
  }, e;
}(), on = /^\s*\/\/.*$/gm, an = [":", "[", ".", "#"];
function sn(e) {
  var n, t, o, i, f = e === void 0 ? $e : e, l = f.options, m = l === void 0 ? $e : l, h = f.plugins, b = h === void 0 ? Ze : h, S = new Cr(m), _ = [], N = function(R) {
    function s(I) {
      if (I)
        try {
          R(I + "}");
        } catch {
        }
    }
    return function(I, C, O, A, c, oe, pe, le, fe, he) {
      switch (I) {
        case 1:
          if (fe === 0 && C.charCodeAt(0) === 64)
            return R(C + ";"), "";
          break;
        case 2:
          if (le === 0)
            return C + "/*|*/";
          break;
        case 3:
          switch (le) {
            case 102:
            case 112:
              return R(O[0] + C), "";
            default:
              return C + (he === 0 ? "/*|*/" : "");
          }
        case -2:
          C.split("/*|*/}").forEach(s);
      }
    };
  }(function(R) {
    _.push(R);
  }), z = function(R, s, I) {
    return s === 0 && an.indexOf(I[t.length]) !== -1 || I.match(i) ? R : "." + n;
  };
  function x(R, s, I, C) {
    C === void 0 && (C = "&");
    var O = R.replace(on, ""), A = s && I ? I + " " + s + " { " + O + " }" : O;
    return n = C, t = s, o = new RegExp("\\" + t + "\\b", "g"), i = new RegExp("(\\" + t + "\\b){2,}"), S(I || !s ? "" : s, A);
  }
  return S.use([].concat(b, [function(R, s, I) {
    R === 2 && I.length && I[0].lastIndexOf(t) > 0 && (I[0] = I[0].replace(o, z));
  }, N, function(R) {
    if (R === -2) {
      var s = _;
      return _ = [], s;
    }
  }])), x.hash = b.length ? b.reduce(function(R, s) {
    return s.name || Le(15), ke(R, s.name);
  }, 5381).toString() : "", x;
}
var Xt = Fe.createContext();
Xt.Consumer;
var Zt = Fe.createContext(), cn = (Zt.Consumer, new Gt()), ct = sn();
function ln() {
  return ft(Xt) || cn;
}
function un() {
  return ft(Zt) || ct;
}
var fn = function() {
  function e(n, t) {
    var o = this;
    this.inject = function(i, f) {
      f === void 0 && (f = ct);
      var l = o.name + f.hash;
      i.hasNameForId(o.id, l) || i.insertRules(o.id, l, f(o.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Le(12, String(o.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = ct), this.name + n.hash;
  }, e;
}(), dn = /([A-Z])/, pn = /([A-Z])/g, hn = /^ms-/, mn = function(e) {
  return "-" + e.toLowerCase();
};
function Lt(e) {
  return dn.test(e) ? e.replace(pn, mn).replace(hn, "-ms-") : e;
}
var zt = function(e) {
  return e == null || e === !1 || e === "";
};
function Me(e, n, t, o) {
  if (Array.isArray(e)) {
    for (var i, f = [], l = 0, m = e.length; l < m; l += 1)
      (i = Me(e[l], n, t, o)) !== "" && (Array.isArray(i) ? f.push.apply(f, i) : f.push(i));
    return f;
  }
  if (zt(e))
    return "";
  if (ht(e))
    return "." + e.styledComponentId;
  if (Be(e)) {
    if (typeof (b = e) != "function" || b.prototype && b.prototype.isReactComponent || !n)
      return e;
    var h = e(n);
    return process.env.NODE_ENV !== "production" && We.isElement(h) && console.warn(it(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Me(h, n, t, o);
  }
  var b;
  return e instanceof fn ? t ? (e.inject(t, o), e.getName(o)) : e : at(e) ? function S(_, N) {
    var z, x, R = [];
    for (var s in _)
      _.hasOwnProperty(s) && !zt(_[s]) && (Array.isArray(_[s]) && _[s].isCss || Be(_[s]) ? R.push(Lt(s) + ":", _[s], ";") : at(_[s]) ? R.push.apply(R, S(_[s], s)) : R.push(Lt(s) + ": " + (z = s, (x = _[s]) == null || typeof x == "boolean" || x === "" ? "" : typeof x != "number" || x === 0 || z in Rr ? String(x).trim() : x + "px") + ";"));
    return N ? [N + " {"].concat(R, ["}"]) : R;
  }(e) : e.toString();
}
var Yt = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function ee(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  return Be(e) || at(e) ? Yt(Me(jt(Ze, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Yt(Me(jt(e, t)));
}
var Vt = /invalid hook call/i, He = /* @__PURE__ */ new Set(), vn = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(f) {
        if (Vt.test(f))
          i = !1, He.delete(t);
        else {
          for (var l = arguments.length, m = new Array(l > 1 ? l - 1 : 0), h = 1; h < l; h++)
            m[h - 1] = arguments[h];
          o.apply(void 0, [f].concat(m));
        }
      }, vr(), i && !He.has(t) && (console.warn(t), He.add(t));
    } catch (f) {
      Vt.test(f.message) && He.delete(t);
    } finally {
      console.error = o;
    }
  }
}, yn = function(e, n, t) {
  return t === void 0 && (t = $e), e.theme !== t.theme && e.theme || n || t.theme;
}, gn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, bn = /(^-|-$)/g;
function rt(e) {
  return e.replace(gn, "-").replace(bn, "");
}
var Sn = function(e) {
  return st(qt(e) >>> 0);
};
function Ge(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var lt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, En = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function wn(e, n, t) {
  var o = e[t];
  lt(n) && lt(o) ? Kt(o, n) : e[t] = n;
}
function Kt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  for (var i = 0, f = t; i < f.length; i++) {
    var l = f[i];
    if (lt(l))
      for (var m in l)
        En(m) && wn(e, l[m], m);
  }
  return e;
}
var Jt = Fe.createContext();
Jt.Consumer;
var nt = {};
function Qt(e, n, t) {
  var o = ht(e), i = !Ge(e), f = n.attrs, l = f === void 0 ? Ze : f, m = n.componentId, h = m === void 0 ? function(C, O) {
    var A = typeof C != "string" ? "sc" : rt(C);
    nt[A] = (nt[A] || 0) + 1;
    var c = A + "-" + Sn("5.3.6" + A + nt[A]);
    return O ? O + "-" + c : c;
  }(n.displayName, n.parentComponentId) : m, b = n.displayName, S = b === void 0 ? function(C) {
    return Ge(C) ? "styled." + C : "Styled(" + it(C) + ")";
  }(e) : b, _ = n.displayName && n.componentId ? rt(n.displayName) + "-" + n.componentId : n.componentId || h, N = o && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, z = n.shouldForwardProp;
  o && e.shouldForwardProp && (z = n.shouldForwardProp ? function(C, O, A) {
    return e.shouldForwardProp(C, O, A) && n.shouldForwardProp(C, O, A);
  } : e.shouldForwardProp);
  var x, R = new nn(t, _, o ? e.componentStyle : void 0), s = R.isStatic && l.length === 0, I = function(C, O) {
    return function(A, c, oe, pe) {
      var le = A.attrs, fe = A.componentStyle, he = A.defaultProps, be = A.foldedComponentIds, ae = A.shouldForwardProp, X = A.styledComponentId, te = A.target;
      process.env.NODE_ENV !== "production" && Rt(X);
      var J = function(T, a, j) {
        T === void 0 && (T = $e);
        var p = Pe({}, a, { theme: T }), W = {};
        return j.forEach(function(D) {
          var M, u, K, y = D;
          for (M in Be(y) && (y = y(p)), y)
            p[M] = W[M] = M === "className" ? (u = W[M], K = y[M], u && K ? u + " " + K : u || K) : y[M];
        }), [p, W];
      }(yn(c, ft(Jt), he) || $e, c, le), Se = J[0], ue = J[1], re = function(T, a, j, p) {
        var W = ln(), D = un(), M = a ? T.generateAndInjectStyles($e, W, D) : T.generateAndInjectStyles(j, W, D);
        return process.env.NODE_ENV !== "production" && Rt(M), process.env.NODE_ENV !== "production" && !a && p && p(M), M;
      }(fe, pe, Se, process.env.NODE_ENV !== "production" ? A.warnTooManyClasses : void 0), ve = oe, me = ue.$as || c.$as || ue.as || c.as || te, Ee = Ge(me), w = ue !== c ? Pe({}, c, {}, ue) : c, g = {};
      for (var E in w)
        E[0] !== "$" && E !== "as" && (E === "forwardedAs" ? g.as = w[E] : (ae ? ae(E, $t, me) : !Ee || $t(E)) && (g[E] = w[E]));
      return c.style && ue.style !== c.style && (g.style = Pe({}, c.style, {}, ue.style)), g.className = Array.prototype.concat(be, X, re !== X ? re : null, c.className, ue.className).filter(Boolean).join(" "), g.ref = ve, yr(me, g);
    }(x, C, O, s);
  };
  return I.displayName = S, (x = Fe.forwardRef(I)).attrs = N, x.componentStyle = R, x.displayName = S, x.shouldForwardProp = z, x.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ze, x.styledComponentId = _, x.target = o ? e.target : e, x.withComponent = function(C) {
    var O = n.componentId, A = function(oe, pe) {
      if (oe == null)
        return {};
      var le, fe, he = {}, be = Object.keys(oe);
      for (fe = 0; fe < be.length; fe++)
        le = be[fe], pe.indexOf(le) >= 0 || (he[le] = oe[le]);
      return he;
    }(n, ["componentId"]), c = O && O + "-" + (Ge(C) ? C : rt(it(C)));
    return Qt(C, Pe({}, A, { attrs: N, componentId: c }), t);
  }, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = o ? Kt({}, e.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (vn(S, _), x.warnTooManyClasses = function(C, O) {
    var A = {}, c = !1;
    return function(oe) {
      if (!c && (A[oe] = !0, Object.keys(A).length >= 200)) {
        var pe = O ? ' with the id of "' + O + '"' : "";
        console.warn("Over 200 classes were generated for component " + C + pe + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), c = !0, A = {};
      }
    };
  }(S, _)), x.toString = function() {
    return "." + x.styledComponentId;
  }, i && Fr(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), x;
}
var ut = function(e) {
  return function n(t, o, i) {
    if (i === void 0 && (i = $e), !We.isValidElementType(o))
      return Le(1, String(o));
    var f = function() {
      return t(o, i, ee.apply(void 0, arguments));
    };
    return f.withConfig = function(l) {
      return n(t, o, Pe({}, i, {}, l));
    }, f.attrs = function(l) {
      return n(t, o, Pe({}, i, { attrs: Array.prototype.concat(i.attrs, l).filter(Boolean) }));
    }, f;
  }(Qt, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ut[e] = ut(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const _e = ut, _n = _e.hr`
	width: 100%;

	${({ theme: { colors: e } }) => ee`
			border: 0.5px solid ${e.color5};
		`}
`, Gn = ({ "data-testid": e = "break" }) => /* @__PURE__ */ ge(_n, { "data-testid": e }), Cn = _e.div`
	text-align: center;
	display: flex;

	> div {
		width: 10px;
		height: 10px;
		background-color: ${({ theme: e }) => e.colors.main};
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
`, Rn = _e.div`
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
		border: ${({ theme: e }) => `6px solid ${e.colors.secondary}`};
		border-color: ${({ theme: e }) => `${e.colors.secondary} transparent ${e.colors.secondary} transparent`};
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
`, er = ({
  type: e = "button",
  "data-testid": n = "loader"
}) => e === "button" ? /* @__PURE__ */ Wt(Cn, { "data-testid": n, children: [
  /* @__PURE__ */ ge("div", { className: "load1" }),
  /* @__PURE__ */ ge("div", { className: "load2" }),
  /* @__PURE__ */ ge("div", { className: "load3" })
] }) : /* @__PURE__ */ ge(Rn, { "data-testid": n });
er.displayName = "Loader";
const xn = ({ colors: e }, n = "primary") => ({
  primary: ee`
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
		`,
  secondary: ee`
			color: ${e.secondary};
			background: ${e.main};
			border: 2px solid ${e.secondary};

			&:hover {
				background: ${e.secondary};
				color: ${e.main};
			}
		`,
  alert: ee`
			color: ${e.secondary};
			background: ${e.error};

			&:hover {
				background: ${e.color5};
			}
		`
})[n], An = (e = "center") => ({
  center: ee`
			justify-content: center;
		`,
  left: ee`
			justify-content: flex-start;
		`
})[e], Tn = _e.button`
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

	${({ theme: { spaces: e, font: n }, hasOnlyIcon: t, hasFullWidth: o, isDropdown: i }) => ee`
			width: ${o && "100%"};
			font-weight: ${n.weights.bold};
			padding: ${t ? `${e.tiny} ${e.small}` : `${e.tiny} ${e.big}`};
			border-radius: ${i && "15px 15px 0 0"};
		`}

	${({ theme: e, variant: n }) => xn(e, n)}
	${({ align: e }) => An(e)}
`, Pn = ({
  variant: e = "primary",
  type: n = "button",
  children: t,
  action: o,
  hasFullWidth: i = !1,
  hasOnlyIcon: f = !1,
  align: l = "center",
  isLoading: m = !1,
  isDisabled: h = !1,
  isDropdown: b = !1,
  "data-testid": S = "button"
}) => /* @__PURE__ */ ge(
  Tn,
  {
    variant: e,
    type: n,
    onClick: o,
    hasFullWidth: i,
    hasOnlyIcon: f,
    align: l,
    disabled: h,
    isDropdown: b,
    "data-testid": S,
    children: m ? /* @__PURE__ */ ge(er, { "data-testid": "button-loader" }) : t
  }
);
Pn.displayName = "Button";
const $n = ({ font: e, colors: n }, t = "h1") => ({
  h1: ee`
			font-weight: ${e.weights.medium};
			font-size: ${e.sizes.h1};
			line-height: ${e.lineHeight.h1};
			letter-spacing: ${e.letterSpacing.h1};
			color: ${n.color1};
			text-transform: uppercase;
		`,
  h2: ee`
			font-weight: ${e.weights.regular};
			font-size: ${e.sizes.h2};
			line-height: ${e.lineHeight.h2};
			letter-spacing: ${e.letterSpacing.h2};
			color: ${n.color2};
		`
})[t], kn = _e.h1`
	text-align: ${({ align: e }) => e};

	${({ theme: e, level: n }) => $n(e, `h${n}`)};
`, On = ({
  level: e = 1,
  children: n,
  align: t = "center",
  "data-testid": o = "heading"
}) => /* @__PURE__ */ ge(
  kn,
  {
    as: `h${e}`,
    level: e,
    align: t,
    "data-testid": o,
    children: n
  }
);
On.displayName = "Heading";
const Nn = ({ colors: e }, n = "avatar") => ({
  avatar: ee`
			cursor: pointer;
			width: 120px;
			height: 120px;
			background: ${e.main};
			border: 2px solid ${e.secondary};
			border-radius: 100%;
		`
})[n], In = _e.img`
	${({ onClick: e }) => ee`
			cursor: ${e && "pointer"};
		`}

	${({ theme: e, variant: n }) => Nn(e, n)}
`, Dn = ({
  src: e,
  width: n,
  height: t,
  alt: o,
  variant: i = "default",
  onClick: f,
  "data-testid": l = "image"
}) => /* @__PURE__ */ ge(
  In,
  {
    src: e,
    width: n,
    height: t,
    alt: o,
    variant: i,
    onClick: f,
    "data-testid": l
  }
);
Dn.displayName = "Image";
const jn = _e.div`
	${({ theme: { breakpoints: e } }) => ee`
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
`, Mn = _e.div`
	${({ theme: { spaces: e, colors: n, breakpoints: t }, image: o }) => ee`
			width: calc(100% - 600px);
			height: calc(100vh - 84px);
			padding: calc(${e.huge} + ${e.huge}) ${e.huge};
			background: ${n.main};
			background-image: url(${o});
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			opacity: 0.5;
			display: ${!o && "none"};

			@media (max-width: ${t.mobile}px) {
				display: none;
			}

			@media (max-width: ${t.tablet}px) {
				display: none;
			}
		`}
`, Fn = _e.div`
	${({ theme: { spaces: e, breakpoints: n } }) => ee`
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
`, Ln = ({
  children: e,
  image: n,
  "data-testid": t = "layout"
}) => /* @__PURE__ */ Wt(jn, { "data-testid": t, children: [
  /* @__PURE__ */ ge(Mn, { image: n }),
  /* @__PURE__ */ ge(Fn, { children: e })
] });
Ln.displayName = "Layout";
const zn = ({ colors: e }, n = "label") => ({
  default: ee`
			color: ${e.secondary};
		`,
  label: ee`
			color: ${e.color5};
		`,
  error: ee`
			color: ${e.error};
		`
})[n], Yn = ({ font: e }, n = "medium") => ({
  small: ee`
			font-size: ${e.sizes.error};
		`,
  medium: ee`
			font-size: ${e.sizes.default};
		`,
  big: ee`
			font-size: ${e.sizes.info};
		`,
  large: ee`
			font-size: ${e.sizes.icon};
		`,
  huge: ee`
			font-size: ${e.sizes.notFound};
		`
})[n], Vn = _e.p`
	font-size: ${({ size: e }) => e};
	text-align: ${({ align: e }) => e};
	min-height: 24px;
	display: flex;
	align-items: center;
	gap: 5px;

	${({ theme: e, type: n }) => zn(e, n)};
	${({ theme: e, size: n }) => Yn(e, n)};
`, Wn = ({
  type: e = "default",
  children: n,
  size: t = "medium",
  align: o = "center",
  "data-testid": i = "paragraph"
}) => /* @__PURE__ */ ge(
  Vn,
  {
    type: e,
    size: t,
    align: o,
    "data-testid": i,
    children: n
  }
);
Wn.displayName = "Paragraph";
const Bn = _e.div`
	${({ theme: { spaces: e }, type: n, space: t = "medium" }) => ee`
			width: ${n === "horizontal" && e[t]};
			height: ${n === "vertical" && e[t]};
		`}
`, Un = ({
  type: e = "horizontal",
  space: n = "medium",
  "data-testid": t = "spacer"
}) => /* @__PURE__ */ ge(
  Bn,
  {
    type: e,
    space: n,
    "data-testid": t
  }
);
Un.displayName = "Spacer";
export {
  Gn as Break,
  Pn as Button,
  On as Heading,
  Dn as Image,
  Ln as Layout,
  er as Loader,
  Wn as Paragraph,
  Un as Spacer
};

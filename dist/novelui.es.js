import Oe, { useRef as qt, useContext as He, useLayoutEffect as Tr, useMemo as Pr, useDebugValue as Pt, createElement as $r } from "react";
var Je = {}, kr = {
  get exports() {
    return Je;
  },
  set exports(e) {
    Je = e;
  }
}, Ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function Or() {
  if ($t)
    return Ve;
  $t = 1;
  var e = Oe, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(h, m, v) {
    var y, E = {}, T = null, N = null;
    v !== void 0 && (T = "" + v), m.key !== void 0 && (T = "" + m.key), m.ref !== void 0 && (N = m.ref);
    for (y in m)
      o.call(m, y) && !s.hasOwnProperty(y) && (E[y] = m[y]);
    if (h && h.defaultProps)
      for (y in m = h.defaultProps, m)
        E[y] === void 0 && (E[y] = m[y]);
    return { $$typeof: r, type: h, key: T, ref: N, props: E, _owner: i.current };
  }
  return Ve.Fragment = t, Ve.jsx = c, Ve.jsxs = c, Ve;
}
var Ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Nr() {
  return kt || (kt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Oe, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), x = Symbol.iterator, R = "@@iterator";
    function l(n) {
      if (n === null || typeof n != "object")
        return null;
      var d = x && n[x] || n[R];
      return typeof d == "function" ? d : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(n) {
      {
        for (var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), k = 1; k < d; k++)
          g[k - 1] = arguments[k];
        I("error", n, g);
      }
    }
    function I(n, d, g) {
      {
        var k = D.ReactDebugCurrentFrame, G = k.getStackAddendum();
        G !== "" && (d += "%s", g = g.concat([G]));
        var X = g.map(function(Y) {
          return String(Y);
        });
        X.unshift("Warning: " + d), Function.prototype.apply.call(console[n], console, X);
      }
    }
    var A = !1, u = !1, ae = !1, he = !1, ue = !1, de;
    de = Symbol.for("react.module.reference");
    function me(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === s || ue || n === i || n === v || n === y || he || n === N || A || u || ae || typeof n == "object" && n !== null && (n.$$typeof === T || n.$$typeof === E || n.$$typeof === c || n.$$typeof === h || n.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === de || n.getModuleId !== void 0));
    }
    function Se(n, d, g) {
      var k = n.displayName;
      if (k)
        return k;
      var G = d.displayName || d.name || "";
      return G !== "" ? g + "(" + G + ")" : g;
    }
    function ie(n) {
      return n.displayName || "Context";
    }
    function K(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case t:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case v:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case h:
            var d = n;
            return ie(d) + ".Consumer";
          case c:
            var g = n;
            return ie(g._context) + ".Provider";
          case m:
            return Se(n, n.render, "ForwardRef");
          case E:
            var k = n.displayName || null;
            return k !== null ? k : K(n.type) || "Memo";
          case T: {
            var G = n, X = G._payload, Y = G._init;
            try {
              return K(Y(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, ee = 0, Ee, fe, ne, ge, ye, we, C;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function w() {
      {
        if (ee === 0) {
          Ee = console.log, fe = console.info, ne = console.warn, ge = console.error, ye = console.group, we = console.groupCollapsed, C = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: S,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ee++;
      }
    }
    function P() {
      {
        if (ee--, ee === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, n, {
              value: Ee
            }),
            info: re({}, n, {
              value: fe
            }),
            warn: re({}, n, {
              value: ne
            }),
            error: re({}, n, {
              value: ge
            }),
            group: re({}, n, {
              value: ye
            }),
            groupCollapsed: re({}, n, {
              value: we
            }),
            groupEnd: re({}, n, {
              value: C
            })
          });
        }
        ee < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var a = D.ReactCurrentDispatcher, j;
    function p(n, d, g) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (G) {
            var k = G.stack.trim().match(/\n( *(at )?)/);
            j = k && k[1] || "";
          }
        return `
` + j + n;
      }
    }
    var W = !1, M;
    {
      var F = typeof WeakMap == "function" ? WeakMap : Map;
      M = new F();
    }
    function f(n, d) {
      if (!n || W)
        return "";
      {
        var g = M.get(n);
        if (g !== void 0)
          return g;
      }
      var k;
      W = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = a.current, a.current = null, w();
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
            } catch ($e) {
              k = $e;
            }
            Reflect.construct(n, [], Y);
          } else {
            try {
              Y.call();
            } catch ($e) {
              k = $e;
            }
            n.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($e) {
            k = $e;
          }
          n();
        }
      } catch ($e) {
        if ($e && k && typeof $e.stack == "string") {
          for (var z = $e.stack.split(`
`), pe = k.stack.split(`
`), oe = z.length - 1, ce = pe.length - 1; oe >= 1 && ce >= 0 && z[oe] !== pe[ce]; )
            ce--;
          for (; oe >= 1 && ce >= 0; oe--, ce--)
            if (z[oe] !== pe[ce]) {
              if (oe !== 1 || ce !== 1)
                do
                  if (oe--, ce--, ce < 0 || z[oe] !== pe[ce]) {
                    var Ce = `
` + z[oe].replace(" at new ", " at ");
                    return n.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", n.displayName)), typeof n == "function" && M.set(n, Ce), Ce;
                  }
                while (oe >= 1 && ce >= 0);
              break;
            }
        }
      } finally {
        W = !1, a.current = X, P(), Error.prepareStackTrace = G;
      }
      var Le = n ? n.displayName || n.name : "", Tt = Le ? p(Le) : "";
      return typeof n == "function" && M.set(n, Tt), Tt;
    }
    function Q(n, d, g) {
      return f(n, !1);
    }
    function b(n) {
      var d = n.prototype;
      return !!(d && d.isReactComponent);
    }
    function O(n, d, g) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return f(n, b(n));
      if (typeof n == "string")
        return p(n);
      switch (n) {
        case v:
          return p("Suspense");
        case y:
          return p("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case m:
            return Q(n.render);
          case E:
            return O(n.type, d, g);
          case T: {
            var k = n, G = k._payload, X = k._init;
            try {
              return O(X(G), d, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, L = {}, se = D.ReactDebugCurrentFrame;
    function Re(n) {
      if (n) {
        var d = n._owner, g = O(n.type, n._source, d ? d.type : null);
        se.setExtraStackFrame(g);
      } else
        se.setExtraStackFrame(null);
    }
    function le(n, d, g, k, G) {
      {
        var X = Function.call.bind(Z);
        for (var Y in n)
          if (X(n, Y)) {
            var z = void 0;
            try {
              if (typeof n[Y] != "function") {
                var pe = Error((k || "React class") + ": " + g + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              z = n[Y](d, Y, k, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              z = oe;
            }
            z && !(z instanceof Error) && (Re(G), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", g, Y, typeof z), Re(null)), z instanceof Error && !(z.message in L) && (L[z.message] = !0, Re(G), _("Failed %s type: %s", g, z.message), Re(null));
          }
      }
    }
    var Me = Array.isArray;
    function Te(n) {
      return Me(n);
    }
    function be(n) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, g = d && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return g;
      }
    }
    function $(n) {
      try {
        return te(n), !1;
      } catch {
        return !0;
      }
    }
    function te(n) {
      return "" + n;
    }
    function je(n) {
      if ($(n))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", be(n)), te(n);
    }
    var Pe = D.ReactCurrentOwner, Ae = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, St, Et, rt;
    rt = {};
    function pr(n) {
      if (Z.call(n, "ref")) {
        var d = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function hr(n) {
      if (Z.call(n, "key")) {
        var d = Object.getOwnPropertyDescriptor(n, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function mr(n, d) {
      if (typeof n.ref == "string" && Pe.current && d && Pe.current.stateNode !== d) {
        var g = K(Pe.current.type);
        rt[g] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Pe.current.type), n.ref), rt[g] = !0);
      }
    }
    function yr(n, d) {
      {
        var g = function() {
          St || (St = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function vr(n, d) {
      {
        var g = function() {
          Et || (Et = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var gr = function(n, d, g, k, G, X, Y) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: d,
        ref: g,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function br(n, d, g, k, G) {
      {
        var X, Y = {}, z = null, pe = null;
        g !== void 0 && (je(g), z = "" + g), hr(d) && (je(d.key), z = "" + d.key), pr(d) && (pe = d.ref, mr(d, G));
        for (X in d)
          Z.call(d, X) && !Ae.hasOwnProperty(X) && (Y[X] = d[X]);
        if (n && n.defaultProps) {
          var oe = n.defaultProps;
          for (X in oe)
            Y[X] === void 0 && (Y[X] = oe[X]);
        }
        if (z || pe) {
          var ce = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          z && yr(Y, ce), pe && vr(Y, ce);
        }
        return gr(n, z, pe, G, k, Pe.current, Y);
      }
    }
    var nt = D.ReactCurrentOwner, wt = D.ReactDebugCurrentFrame;
    function Fe(n) {
      if (n) {
        var d = n._owner, g = O(n.type, n._source, d ? d.type : null);
        wt.setExtraStackFrame(g);
      } else
        wt.setExtraStackFrame(null);
    }
    var ot;
    ot = !1;
    function at(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function Ct() {
      {
        if (nt.current) {
          var n = K(nt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Sr(n) {
      {
        if (n !== void 0) {
          var d = n.fileName.replace(/^.*[\\\/]/, ""), g = n.lineNumber;
          return `

Check your code at ` + d + ":" + g + ".";
        }
        return "";
      }
    }
    var _t = {};
    function Er(n) {
      {
        var d = Ct();
        if (!d) {
          var g = typeof n == "string" ? n : n.displayName || n.name;
          g && (d = `

Check the top-level render call using <` + g + ">.");
        }
        return d;
      }
    }
    function xt(n, d) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var g = Er(d);
        if (_t[g])
          return;
        _t[g] = !0;
        var k = "";
        n && n._owner && n._owner !== nt.current && (k = " It was passed a child from " + K(n._owner.type) + "."), Fe(n), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, k), Fe(null);
      }
    }
    function Rt(n, d) {
      {
        if (typeof n != "object")
          return;
        if (Te(n))
          for (var g = 0; g < n.length; g++) {
            var k = n[g];
            at(k) && xt(k, d);
          }
        else if (at(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var G = l(n);
          if (typeof G == "function" && G !== n.entries)
            for (var X = G.call(n), Y; !(Y = X.next()).done; )
              at(Y.value) && xt(Y.value, d);
        }
      }
    }
    function wr(n) {
      {
        var d = n.type;
        if (d == null || typeof d == "string")
          return;
        var g;
        if (typeof d == "function")
          g = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === E))
          g = d.propTypes;
        else
          return;
        if (g) {
          var k = K(d);
          le(g, n.props, "prop", k, n);
        } else if (d.PropTypes !== void 0 && !ot) {
          ot = !0;
          var G = K(d);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cr(n) {
      {
        for (var d = Object.keys(n.props), g = 0; g < d.length; g++) {
          var k = d[g];
          if (k !== "children" && k !== "key") {
            Fe(n), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Fe(null);
            break;
          }
        }
        n.ref !== null && (Fe(n), _("Invalid attribute `ref` supplied to `React.Fragment`."), Fe(null));
      }
    }
    function At(n, d, g, k, G, X) {
      {
        var Y = me(n);
        if (!Y) {
          var z = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = Sr(G);
          pe ? z += pe : z += Ct();
          var oe;
          n === null ? oe = "null" : Te(n) ? oe = "array" : n !== void 0 && n.$$typeof === r ? (oe = "<" + (K(n.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof n, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, z);
        }
        var ce = br(n, d, g, G, X);
        if (ce == null)
          return ce;
        if (Y) {
          var Ce = d.children;
          if (Ce !== void 0)
            if (k)
              if (Te(Ce)) {
                for (var Le = 0; Le < Ce.length; Le++)
                  Rt(Ce[Le], n);
                Object.freeze && Object.freeze(Ce);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rt(Ce, n);
        }
        return n === o ? Cr(ce) : wr(ce), ce;
      }
    }
    function _r(n, d, g) {
      return At(n, d, g, !0);
    }
    function xr(n, d, g) {
      return At(n, d, g, !1);
    }
    var Rr = xr, Ar = _r;
    Ge.Fragment = o, Ge.jsx = Rr, Ge.jsxs = Ar;
  }()), Ge;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Or() : e.exports = Nr();
})(kr);
const ve = Je.jsx, mt = Je.jsxs;
var Be = {}, Ir = {
  get exports() {
    return Be;
  },
  set exports(e) {
    Be = e;
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
var Ot;
function Dr() {
  if (Ot)
    return B;
  Ot = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), h = Symbol.for("react.server_context"), m = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), x;
  x = Symbol.for("react.module.reference");
  function R(l) {
    if (typeof l == "object" && l !== null) {
      var D = l.$$typeof;
      switch (D) {
        case e:
          switch (l = l.type, l) {
            case t:
            case i:
            case o:
            case v:
            case y:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case h:
                case c:
                case m:
                case T:
                case E:
                case s:
                  return l;
                default:
                  return D;
              }
          }
        case r:
          return D;
      }
    }
  }
  return B.ContextConsumer = c, B.ContextProvider = s, B.Element = e, B.ForwardRef = m, B.Fragment = t, B.Lazy = T, B.Memo = E, B.Portal = r, B.Profiler = i, B.StrictMode = o, B.Suspense = v, B.SuspenseList = y, B.isAsyncMode = function() {
    return !1;
  }, B.isConcurrentMode = function() {
    return !1;
  }, B.isContextConsumer = function(l) {
    return R(l) === c;
  }, B.isContextProvider = function(l) {
    return R(l) === s;
  }, B.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, B.isForwardRef = function(l) {
    return R(l) === m;
  }, B.isFragment = function(l) {
    return R(l) === t;
  }, B.isLazy = function(l) {
    return R(l) === T;
  }, B.isMemo = function(l) {
    return R(l) === E;
  }, B.isPortal = function(l) {
    return R(l) === r;
  }, B.isProfiler = function(l) {
    return R(l) === i;
  }, B.isStrictMode = function(l) {
    return R(l) === o;
  }, B.isSuspense = function(l) {
    return R(l) === v;
  }, B.isSuspenseList = function(l) {
    return R(l) === y;
  }, B.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === t || l === i || l === o || l === v || l === y || l === N || typeof l == "object" && l !== null && (l.$$typeof === T || l.$$typeof === E || l.$$typeof === s || l.$$typeof === c || l.$$typeof === m || l.$$typeof === x || l.getModuleId !== void 0);
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
var Nt;
function Mr() {
  return Nt || (Nt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), h = Symbol.for("react.server_context"), m = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), x = !1, R = !1, l = !1, D = !1, _ = !1, I;
    I = Symbol.for("react.module.reference");
    function A(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === t || b === i || _ || b === o || b === v || b === y || D || b === N || x || R || l || typeof b == "object" && b !== null && (b.$$typeof === T || b.$$typeof === E || b.$$typeof === s || b.$$typeof === c || b.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === I || b.getModuleId !== void 0));
    }
    function u(b) {
      if (typeof b == "object" && b !== null) {
        var O = b.$$typeof;
        switch (O) {
          case e:
            var Z = b.type;
            switch (Z) {
              case t:
              case i:
              case o:
              case v:
              case y:
                return Z;
              default:
                var L = Z && Z.$$typeof;
                switch (L) {
                  case h:
                  case c:
                  case m:
                  case T:
                  case E:
                  case s:
                    return L;
                  default:
                    return O;
                }
            }
          case r:
            return O;
        }
      }
    }
    var ae = c, he = s, ue = e, de = m, me = t, Se = T, ie = E, K = r, re = i, ee = o, Ee = v, fe = y, ne = !1, ge = !1;
    function ye(b) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function we(b) {
      return ge || (ge = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function C(b) {
      return u(b) === c;
    }
    function S(b) {
      return u(b) === s;
    }
    function w(b) {
      return typeof b == "object" && b !== null && b.$$typeof === e;
    }
    function P(b) {
      return u(b) === m;
    }
    function a(b) {
      return u(b) === t;
    }
    function j(b) {
      return u(b) === T;
    }
    function p(b) {
      return u(b) === E;
    }
    function W(b) {
      return u(b) === r;
    }
    function M(b) {
      return u(b) === i;
    }
    function F(b) {
      return u(b) === o;
    }
    function f(b) {
      return u(b) === v;
    }
    function Q(b) {
      return u(b) === y;
    }
    U.ContextConsumer = ae, U.ContextProvider = he, U.Element = ue, U.ForwardRef = de, U.Fragment = me, U.Lazy = Se, U.Memo = ie, U.Portal = K, U.Profiler = re, U.StrictMode = ee, U.Suspense = Ee, U.SuspenseList = fe, U.isAsyncMode = ye, U.isConcurrentMode = we, U.isContextConsumer = C, U.isContextProvider = S, U.isElement = w, U.isForwardRef = P, U.isFragment = a, U.isLazy = j, U.isMemo = p, U.isPortal = W, U.isProfiler = M, U.isStrictMode = F, U.isSuspense = f, U.isSuspenseList = Q, U.isValidElementType = A, U.typeOf = u;
  }()), U;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Dr() : e.exports = Mr();
})(Ir);
function jr(e) {
  function r(C, S, w, P, a) {
    for (var j = 0, p = 0, W = 0, M = 0, F, f, Q = 0, b = 0, O, Z = O = F = 0, L = 0, se = 0, Re = 0, le = 0, Me = w.length, Te = Me - 1, be, $ = "", te = "", je = "", Pe = "", Ae; L < Me; ) {
      if (f = w.charCodeAt(L), L === Te && p + M + W + j !== 0 && (p !== 0 && (f = p === 47 ? 10 : 47), M = W = j = 0, Me++, Te++), p + M + W + j === 0) {
        if (L === Te && (0 < se && ($ = $.replace(T, "")), 0 < $.trim().length)) {
          switch (f) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += w.charAt(L);
          }
          f = 59;
        }
        switch (f) {
          case 123:
            for ($ = $.trim(), F = $.charCodeAt(0), O = 1, le = ++L; L < Me; ) {
              switch (f = w.charCodeAt(L)) {
                case 123:
                  O++;
                  break;
                case 125:
                  O--;
                  break;
                case 47:
                  switch (f = w.charCodeAt(L + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Z = L + 1; Z < Te; ++Z)
                          switch (w.charCodeAt(Z)) {
                            case 47:
                              if (f === 42 && w.charCodeAt(Z - 1) === 42 && L + 2 !== Z) {
                                L = Z + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (f === 47) {
                                L = Z + 1;
                                break e;
                              }
                          }
                        L = Z;
                      }
                  }
                  break;
                case 91:
                  f++;
                case 40:
                  f++;
                case 34:
                case 39:
                  for (; L++ < Te && w.charCodeAt(L) !== f; )
                    ;
              }
              if (O === 0)
                break;
              L++;
            }
            switch (O = w.substring(le, L), F === 0 && (F = ($ = $.replace(E, "").trim()).charCodeAt(0)), F) {
              case 64:
                switch (0 < se && ($ = $.replace(T, "")), f = $.charCodeAt(1), f) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    se = S;
                    break;
                  default:
                    se = Ee;
                }
                if (O = r(S, se, O, f, a + 1), le = O.length, 0 < ne && (se = t(Ee, $, Re), Ae = h(3, O, se, S, K, ie, le, f, a, P), $ = se.join(""), Ae !== void 0 && (le = (O = Ae.trim()).length) === 0 && (f = 0, O = "")), 0 < le)
                  switch (f) {
                    case 115:
                      $ = $.replace(ae, c);
                    case 100:
                    case 109:
                    case 45:
                      O = $ + "{" + O + "}";
                      break;
                    case 107:
                      $ = $.replace(_, "$1 $2"), O = $ + "{" + O + "}", O = ee === 1 || ee === 2 && s("@" + O, 3) ? "@-webkit-" + O + "@" + O : "@" + O;
                      break;
                    default:
                      O = $ + O, P === 112 && (O = (te += O, ""));
                  }
                else
                  O = "";
                break;
              default:
                O = r(S, t(S, $, Re), O, P, a + 1);
            }
            je += O, O = Re = se = Z = F = 0, $ = "", f = w.charCodeAt(++L);
            break;
          case 125:
          case 59:
            if ($ = (0 < se ? $.replace(T, "") : $).trim(), 1 < (le = $.length))
              switch (Z === 0 && (F = $.charCodeAt(0), F === 45 || 96 < F && 123 > F) && (le = ($ = $.replace(" ", ":")).length), 0 < ne && (Ae = h(1, $, S, C, K, ie, te.length, P, a, P)) !== void 0 && (le = ($ = Ae.trim()).length) === 0 && ($ = "\0\0"), F = $.charCodeAt(0), f = $.charCodeAt(1), F) {
                case 0:
                  break;
                case 64:
                  if (f === 105 || f === 99) {
                    Pe += $ + w.charAt(L);
                    break;
                  }
                default:
                  $.charCodeAt(le - 1) !== 58 && (te += i($, F, f, $.charCodeAt(2)));
              }
            Re = se = Z = F = 0, $ = "", f = w.charCodeAt(++L);
        }
      }
      switch (f) {
        case 13:
        case 10:
          p === 47 ? p = 0 : 1 + F === 0 && P !== 107 && 0 < $.length && (se = 1, $ += "\0"), 0 < ne * ye && h(0, $, S, C, K, ie, te.length, P, a, P), ie = 1, K++;
          break;
        case 59:
        case 125:
          if (p + M + W + j === 0) {
            ie++;
            break;
          }
        default:
          switch (ie++, be = w.charAt(L), f) {
            case 9:
            case 32:
              if (M + j + p === 0)
                switch (Q) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    be = "";
                    break;
                  default:
                    f !== 32 && (be = " ");
                }
              break;
            case 0:
              be = "\\0";
              break;
            case 12:
              be = "\\f";
              break;
            case 11:
              be = "\\v";
              break;
            case 38:
              M + p + j === 0 && (se = Re = 1, be = "\f" + be);
              break;
            case 108:
              if (M + p + j + re === 0 && 0 < Z)
                switch (L - Z) {
                  case 2:
                    Q === 112 && w.charCodeAt(L - 3) === 58 && (re = Q);
                  case 8:
                    b === 111 && (re = b);
                }
              break;
            case 58:
              M + p + j === 0 && (Z = L);
              break;
            case 44:
              p + W + M + j === 0 && (se = 1, be += "\r");
              break;
            case 34:
            case 39:
              p === 0 && (M = M === f ? 0 : M === 0 ? f : M);
              break;
            case 91:
              M + p + W === 0 && j++;
              break;
            case 93:
              M + p + W === 0 && j--;
              break;
            case 41:
              M + p + j === 0 && W--;
              break;
            case 40:
              if (M + p + j === 0) {
                if (F === 0)
                  switch (2 * Q + 3 * b) {
                    case 533:
                      break;
                    default:
                      F = 1;
                  }
                W++;
              }
              break;
            case 64:
              p + W + M + j + Z + O === 0 && (O = 1);
              break;
            case 42:
            case 47:
              if (!(0 < M + j + W))
                switch (p) {
                  case 0:
                    switch (2 * f + 3 * w.charCodeAt(L + 1)) {
                      case 235:
                        p = 47;
                        break;
                      case 220:
                        le = L, p = 42;
                    }
                    break;
                  case 42:
                    f === 47 && Q === 42 && le + 2 !== L && (w.charCodeAt(le + 2) === 33 && (te += w.substring(le, L + 1)), be = "", p = 0);
                }
          }
          p === 0 && ($ += be);
      }
      b = Q, Q = f, L++;
    }
    if (le = te.length, 0 < le) {
      if (se = S, 0 < ne && (Ae = h(2, te, se, C, K, ie, le, P, a, P), Ae !== void 0 && (te = Ae).length === 0))
        return Pe + te + je;
      if (te = se.join(",") + "{" + te + "}", ee * re !== 0) {
        switch (ee !== 2 || s(te, 2) || (re = 0), re) {
          case 111:
            te = te.replace(A, ":-moz-$1") + te;
            break;
          case 112:
            te = te.replace(I, "::-webkit-input-$1") + te.replace(I, "::-moz-$1") + te.replace(I, ":-ms-input-$1") + te;
        }
        re = 0;
      }
    }
    return Pe + te + je;
  }
  function t(C, S, w) {
    var P = S.trim().split(l);
    S = P;
    var a = P.length, j = C.length;
    switch (j) {
      case 0:
      case 1:
        var p = 0;
        for (C = j === 0 ? "" : C[0] + " "; p < a; ++p)
          S[p] = o(C, S[p], w).trim();
        break;
      default:
        var W = p = 0;
        for (S = []; p < a; ++p)
          for (var M = 0; M < j; ++M)
            S[W++] = o(C[M] + " ", P[p], w).trim();
    }
    return S;
  }
  function o(C, S, w) {
    var P = S.charCodeAt(0);
    switch (33 > P && (P = (S = S.trim()).charCodeAt(0)), P) {
      case 38:
        return S.replace(D, "$1" + C.trim());
      case 58:
        return C.trim() + S.replace(D, "$1" + C.trim());
      default:
        if (0 < 1 * w && 0 < S.indexOf("\f"))
          return S.replace(D, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim());
    }
    return C + S;
  }
  function i(C, S, w, P) {
    var a = C + ";", j = 2 * S + 3 * w + 4 * P;
    if (j === 944) {
      C = a.indexOf(":", 9) + 1;
      var p = a.substring(C, a.length - 1).trim();
      return p = a.substring(0, C).trim() + p + ";", ee === 1 || ee === 2 && s(p, 1) ? "-webkit-" + p + p : p;
    }
    if (ee === 0 || ee === 2 && !s(a, 1))
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
          return a.replace(Se, "$1-webkit-$2") + a;
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
        return x.test(a) ? a.replace(N, ":-webkit-") + a.replace(N, ":-moz-") + a : a;
      case 1e3:
        switch (p = a.substring(13).trim(), S = p.indexOf("-") + 1, p.charCodeAt(0) + p.charCodeAt(S)) {
          case 226:
            p = a.replace(u, "tb");
            break;
          case 232:
            p = a.replace(u, "tb-rl");
            break;
          case 220:
            p = a.replace(u, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + p + a;
      case 1017:
        if (a.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (S = (a = C).length - 10, p = (a.charCodeAt(S) === 33 ? a.substring(0, S) : a).substring(C.indexOf(":", 7) + 1).trim(), j = p.charCodeAt(0) + (p.charCodeAt(7) | 0)) {
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
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(ue, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ue, "") + a;
          }
        break;
      case 973:
      case 989:
        if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (me.test(C) === !0)
          return (p = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115 ? i(C.replace("stretch", "fill-available"), S, w, P).replace(":fill-available", ":stretch") : a.replace(p, "-webkit-" + p) + a.replace(p, "-moz-" + p.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, w + P === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(R, "$1-webkit-$2") + a;
    }
    return a;
  }
  function s(C, S) {
    var w = C.indexOf(S === 1 ? ":" : "{"), P = C.substring(0, S !== 3 ? w : 10);
    return w = C.substring(w + 1, C.length - 1), ge(S !== 2 ? P : P.replace(de, "$1"), w, S);
  }
  function c(C, S) {
    var w = i(S, S.charCodeAt(0), S.charCodeAt(1), S.charCodeAt(2));
    return w !== S + ";" ? w.replace(he, " or ($1)").substring(4) : "(" + S + ")";
  }
  function h(C, S, w, P, a, j, p, W, M, F) {
    for (var f = 0, Q = S, b; f < ne; ++f)
      switch (b = fe[f].call(y, C, Q, w, P, a, j, p, W, M, F)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Q = b;
      }
    if (Q !== S)
      return Q;
  }
  function m(C) {
    switch (C) {
      case void 0:
      case null:
        ne = fe.length = 0;
        break;
      default:
        if (typeof C == "function")
          fe[ne++] = C;
        else if (typeof C == "object")
          for (var S = 0, w = C.length; S < w; ++S)
            m(C[S]);
        else
          ye = !!C | 0;
    }
    return m;
  }
  function v(C) {
    return C = C.prefix, C !== void 0 && (ge = null, C ? typeof C != "function" ? ee = 1 : (ee = 2, ge = C) : ee = 0), v;
  }
  function y(C, S) {
    var w = C;
    if (33 > w.charCodeAt(0) && (w = w.trim()), we = w, w = [we], 0 < ne) {
      var P = h(-1, S, w, w, K, ie, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (S = P);
    }
    var a = r(Ee, w, S, 0, 0);
    return 0 < ne && (P = h(-2, a, w, w, K, ie, a.length, 0, 0, 0), P !== void 0 && (a = P)), we = "", re = 0, ie = K = 1, a;
  }
  var E = /^\0+/g, T = /[\0\r\f]/g, N = /: */g, x = /zoo|gra/, R = /([,: ])(transform)/g, l = /,\r+?/g, D = /([\t\r\n ])*\f?&/g, _ = /@(k\w+)\s*(\S*)\s*/, I = /::(place)/g, A = /:(read-only)/g, u = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, he = /([\s\S]*?);/g, ue = /-self|flex-/g, de = /[^]*?(:[rp][el]a[\w-]+)[^]*/, me = /stretch|:\s*\w+\-(?:conte|avail)/, Se = /([^-])(image-set\()/, ie = 1, K = 1, re = 0, ee = 1, Ee = [], fe = [], ne = 0, ge = null, ye = 0, we = "";
  return y.use = m, y.set = v, e !== void 0 && v(e), y;
}
var Fr = {
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
function Lr(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var zr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, It = /* @__PURE__ */ Lr(
  function(e) {
    return zr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ct = {}, Yr = {
  get exports() {
    return ct;
  },
  set exports(e) {
    ct = e;
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
var Dt;
function Vr() {
  if (Dt)
    return H;
  Dt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, h = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, T = e ? Symbol.for("react.suspense_list") : 60120, N = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, l = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function I(u) {
    if (typeof u == "object" && u !== null) {
      var ae = u.$$typeof;
      switch (ae) {
        case r:
          switch (u = u.type, u) {
            case m:
            case v:
            case o:
            case s:
            case i:
            case E:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case h:
                case y:
                case x:
                case N:
                case c:
                  return u;
                default:
                  return ae;
              }
          }
        case t:
          return ae;
      }
    }
  }
  function A(u) {
    return I(u) === v;
  }
  return H.AsyncMode = m, H.ConcurrentMode = v, H.ContextConsumer = h, H.ContextProvider = c, H.Element = r, H.ForwardRef = y, H.Fragment = o, H.Lazy = x, H.Memo = N, H.Portal = t, H.Profiler = s, H.StrictMode = i, H.Suspense = E, H.isAsyncMode = function(u) {
    return A(u) || I(u) === m;
  }, H.isConcurrentMode = A, H.isContextConsumer = function(u) {
    return I(u) === h;
  }, H.isContextProvider = function(u) {
    return I(u) === c;
  }, H.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === r;
  }, H.isForwardRef = function(u) {
    return I(u) === y;
  }, H.isFragment = function(u) {
    return I(u) === o;
  }, H.isLazy = function(u) {
    return I(u) === x;
  }, H.isMemo = function(u) {
    return I(u) === N;
  }, H.isPortal = function(u) {
    return I(u) === t;
  }, H.isProfiler = function(u) {
    return I(u) === s;
  }, H.isStrictMode = function(u) {
    return I(u) === i;
  }, H.isSuspense = function(u) {
    return I(u) === E;
  }, H.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === o || u === v || u === s || u === i || u === E || u === T || typeof u == "object" && u !== null && (u.$$typeof === x || u.$$typeof === N || u.$$typeof === c || u.$$typeof === h || u.$$typeof === y || u.$$typeof === l || u.$$typeof === D || u.$$typeof === _ || u.$$typeof === R);
  }, H.typeOf = I, H;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function Gr() {
  return Mt || (Mt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, h = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, T = e ? Symbol.for("react.suspense_list") : 60120, N = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, R = e ? Symbol.for("react.block") : 60121, l = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function I(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === o || f === v || f === s || f === i || f === E || f === T || typeof f == "object" && f !== null && (f.$$typeof === x || f.$$typeof === N || f.$$typeof === c || f.$$typeof === h || f.$$typeof === y || f.$$typeof === l || f.$$typeof === D || f.$$typeof === _ || f.$$typeof === R);
    }
    function A(f) {
      if (typeof f == "object" && f !== null) {
        var Q = f.$$typeof;
        switch (Q) {
          case r:
            var b = f.type;
            switch (b) {
              case m:
              case v:
              case o:
              case s:
              case i:
              case E:
                return b;
              default:
                var O = b && b.$$typeof;
                switch (O) {
                  case h:
                  case y:
                  case x:
                  case N:
                  case c:
                    return O;
                  default:
                    return Q;
                }
            }
          case t:
            return Q;
        }
      }
    }
    var u = m, ae = v, he = h, ue = c, de = r, me = y, Se = o, ie = x, K = N, re = t, ee = s, Ee = i, fe = E, ne = !1;
    function ge(f) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ye(f) || A(f) === m;
    }
    function ye(f) {
      return A(f) === v;
    }
    function we(f) {
      return A(f) === h;
    }
    function C(f) {
      return A(f) === c;
    }
    function S(f) {
      return typeof f == "object" && f !== null && f.$$typeof === r;
    }
    function w(f) {
      return A(f) === y;
    }
    function P(f) {
      return A(f) === o;
    }
    function a(f) {
      return A(f) === x;
    }
    function j(f) {
      return A(f) === N;
    }
    function p(f) {
      return A(f) === t;
    }
    function W(f) {
      return A(f) === s;
    }
    function M(f) {
      return A(f) === i;
    }
    function F(f) {
      return A(f) === E;
    }
    q.AsyncMode = u, q.ConcurrentMode = ae, q.ContextConsumer = he, q.ContextProvider = ue, q.Element = de, q.ForwardRef = me, q.Fragment = Se, q.Lazy = ie, q.Memo = K, q.Portal = re, q.Profiler = ee, q.StrictMode = Ee, q.Suspense = fe, q.isAsyncMode = ge, q.isConcurrentMode = ye, q.isContextConsumer = we, q.isContextProvider = C, q.isElement = S, q.isForwardRef = w, q.isFragment = P, q.isLazy = a, q.isMemo = j, q.isPortal = p, q.isProfiler = W, q.isStrictMode = M, q.isSuspense = F, q.isValidElementType = I, q.typeOf = A;
  }()), q;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Vr() : e.exports = Gr();
})(Yr);
var yt = ct, Wr = {
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
}, Br = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ur = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Xt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, vt = {};
vt[yt.ForwardRef] = Ur;
vt[yt.Memo] = Xt;
function jt(e) {
  return yt.isMemo(e) ? Xt : vt[e.$$typeof] || Wr;
}
var Hr = Object.defineProperty, qr = Object.getOwnPropertyNames, Ft = Object.getOwnPropertySymbols, Xr = Object.getOwnPropertyDescriptor, Kr = Object.getPrototypeOf, Lt = Object.prototype;
function Kt(e, r, t) {
  if (typeof r != "string") {
    if (Lt) {
      var o = Kr(r);
      o && o !== Lt && Kt(e, o, t);
    }
    var i = qr(r);
    Ft && (i = i.concat(Ft(r)));
    for (var s = jt(e), c = jt(r), h = 0; h < i.length; ++h) {
      var m = i[h];
      if (!Br[m] && !(t && t[m]) && !(c && c[m]) && !(s && s[m])) {
        var v = Xr(r, m);
        try {
          Hr(e, m, v);
        } catch {
        }
      }
    }
  }
  return e;
}
var Zr = Kt;
function _e() {
  return (_e = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }).apply(this, arguments);
}
var zt = function(e, r) {
  for (var t = [e[0]], o = 0, i = r.length; o < i; o += 1)
    t.push(r[o], e[o + 1]);
  return t;
}, lt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Be.typeOf(e);
}, Qe = Object.freeze([]), Ne = Object.freeze({});
function ze(e) {
  return typeof e == "function";
}
function ut(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function gt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ye = typeof process < "u" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", bt = typeof window < "u" && "HTMLElement" in window, Jr = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Qr = {}, en = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function tn() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, o = arguments.length; t < o; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function ke(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    t[o - 1] = arguments[o];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(tn.apply(void 0, [en[e]].concat(t)).trim());
}
var rn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var o = 0, i = 0; i < t; i++)
      o += this.groupSizes[i];
    return o;
  }, r.insertRules = function(t, o) {
    if (t >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, c = s; t >= c; )
        (c <<= 1) < 0 && ke(16, "" + t);
      this.groupSizes = new Uint32Array(c), this.groupSizes.set(i), this.length = c;
      for (var h = s; h < c; h++)
        this.groupSizes[h] = 0;
    }
    for (var m = this.indexOfGroup(t + 1), v = 0, y = o.length; v < y; v++)
      this.tag.insertRule(m, o[v]) && (this.groupSizes[t]++, m++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var o = this.groupSizes[t], i = this.indexOfGroup(t), s = i + o;
      this.groupSizes[t] = 0;
      for (var c = i; c < s; c++)
        this.tag.deleteRule(i);
    }
  }, r.getGroup = function(t) {
    var o = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return o;
    for (var i = this.groupSizes[t], s = this.indexOfGroup(t), c = s + i, h = s; h < c; h++)
      o += this.tag.getRule(h) + `/*!sc*/
`;
    return o;
  }, e;
}(), Ze = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), We = 1, qe = function(e) {
  if (Ze.has(e))
    return Ze.get(e);
  for (; et.has(We); )
    We++;
  var r = We++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && ke(16, "" + r), Ze.set(e, r), et.set(r, e), r;
}, nn = function(e) {
  return et.get(e);
}, on = function(e, r) {
  r >= We && (We = r + 1), Ze.set(e, r), et.set(r, e);
}, an = "style[" + Ye + '][data-styled-version="5.3.6"]', sn = new RegExp("^" + Ye + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), cn = function(e, r, t) {
  for (var o, i = t.split(","), s = 0, c = i.length; s < c; s++)
    (o = i[s]) && e.registerName(r, o);
}, ln = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), o = [], i = 0, s = t.length; i < s; i++) {
    var c = t[i].trim();
    if (c) {
      var h = c.match(sn);
      if (h) {
        var m = 0 | parseInt(h[1], 10), v = h[2];
        m !== 0 && (on(v, m), cn(e, v, h[3]), e.getTag().insertRules(m, o)), o.length = 0;
      } else
        o.push(c);
    }
  }
}, un = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Zt = function(e) {
  var r = document.head, t = e || r, o = document.createElement("style"), i = function(h) {
    for (var m = h.childNodes, v = m.length; v >= 0; v--) {
      var y = m[v];
      if (y && y.nodeType === 1 && y.hasAttribute(Ye))
        return y;
    }
  }(t), s = i !== void 0 ? i.nextSibling : null;
  o.setAttribute(Ye, "active"), o.setAttribute("data-styled-version", "5.3.6");
  var c = un();
  return c && o.setAttribute("nonce", c), t.insertBefore(o, s), o;
}, fn = function() {
  function e(t) {
    var o = this.element = Zt(t);
    o.appendChild(document.createTextNode("")), this.sheet = function(i) {
      if (i.sheet)
        return i.sheet;
      for (var s = document.styleSheets, c = 0, h = s.length; c < h; c++) {
        var m = s[c];
        if (m.ownerNode === i)
          return m;
      }
      ke(17);
    }(o), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, o) {
    try {
      return this.sheet.insertRule(o, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var o = this.sheet.cssRules[t];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), dn = function() {
  function e(t) {
    var o = this.element = Zt(t);
    this.nodes = o.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, o) {
    if (t <= this.length && t >= 0) {
      var i = document.createTextNode(o), s = this.nodes[t];
      return this.element.insertBefore(i, s || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), pn = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, o) {
    return t <= this.length && (this.rules.splice(t, 0, o), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Yt = bt, hn = { isServer: !bt, useCSSOMInjection: !Jr }, tt = function() {
  function e(t, o, i) {
    t === void 0 && (t = Ne), o === void 0 && (o = {}), this.options = _e({}, hn, {}, t), this.gs = o, this.names = new Map(i), this.server = !!t.isServer, !this.server && bt && Yt && (Yt = !1, function(s) {
      for (var c = document.querySelectorAll(an), h = 0, m = c.length; h < m; h++) {
        var v = c[h];
        v && v.getAttribute(Ye) !== "active" && (ln(s, v), v.parentNode && v.parentNode.removeChild(v));
      }
    }(this));
  }
  e.registerId = function(t) {
    return qe(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, o) {
    return o === void 0 && (o = !0), new e(_e({}, this.options, {}, t), this.gs, o && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (i = (o = this.options).isServer, s = o.useCSSOMInjection, c = o.target, t = i ? new pn(c) : s ? new fn(c) : new dn(c), new rn(t)));
    var t, o, i, s, c;
  }, r.hasNameForId = function(t, o) {
    return this.names.has(t) && this.names.get(t).has(o);
  }, r.registerName = function(t, o) {
    if (qe(t), this.names.has(t))
      this.names.get(t).add(o);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(o), this.names.set(t, i);
    }
  }, r.insertRules = function(t, o, i) {
    this.registerName(t, o), this.getTag().insertRules(qe(t), i);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(qe(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var o = t.getTag(), i = o.length, s = "", c = 0; c < i; c++) {
        var h = nn(c);
        if (h !== void 0) {
          var m = t.names.get(h), v = o.getGroup(c);
          if (m && v && m.size) {
            var y = Ye + ".g" + c + '[id="' + h + '"]', E = "";
            m !== void 0 && m.forEach(function(T) {
              T.length > 0 && (E += T + ",");
            }), s += "" + v + y + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), mn = /(a)(d)/gi, Vt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ft(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Vt(r % 52) + t;
  return (Vt(r % 52) + t).replace(mn, "$1-$2");
}
var Ie = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Jt = function(e) {
  return Ie(5381, e);
};
function Qt(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (ze(t) && !gt(t))
      return !1;
  }
  return !0;
}
var yn = Jt("5.3.6"), vn = function() {
  function e(r, t, o) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && Qt(r), this.componentId = t, this.baseHash = Ie(yn, t), this.baseStyle = o, tt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, o) {
    var i = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(r, t, o)), this.isStatic && !o.hash)
      if (this.staticRulesId && t.hasNameForId(i, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var c = De(this.rules, r, t, o).join(""), h = ft(Ie(this.baseHash, c) >>> 0);
        if (!t.hasNameForId(i, h)) {
          var m = o(c, "." + h, void 0, i);
          t.insertRules(i, h, m);
        }
        s.push(h), this.staticRulesId = h;
      }
    else {
      for (var v = this.rules.length, y = Ie(this.baseHash, o.hash), E = "", T = 0; T < v; T++) {
        var N = this.rules[T];
        if (typeof N == "string")
          E += N, process.env.NODE_ENV !== "production" && (y = Ie(y, N + T));
        else if (N) {
          var x = De(N, r, t, o), R = Array.isArray(x) ? x.join("") : x;
          y = Ie(y, R + T), E += R;
        }
      }
      if (E) {
        var l = ft(y >>> 0);
        if (!t.hasNameForId(i, l)) {
          var D = o(E, "." + l, void 0, i);
          t.insertRules(i, l, D);
        }
        s.push(l);
      }
    }
    return s.join(" ");
  }, e;
}(), gn = /^\s*\/\/.*$/gm, bn = [":", "[", ".", "#"];
function Sn(e) {
  var r, t, o, i, s = e === void 0 ? Ne : e, c = s.options, h = c === void 0 ? Ne : c, m = s.plugins, v = m === void 0 ? Qe : m, y = new jr(h), E = [], T = function(R) {
    function l(D) {
      if (D)
        try {
          R(D + "}");
        } catch {
        }
    }
    return function(D, _, I, A, u, ae, he, ue, de, me) {
      switch (D) {
        case 1:
          if (de === 0 && _.charCodeAt(0) === 64)
            return R(_ + ";"), "";
          break;
        case 2:
          if (ue === 0)
            return _ + "/*|*/";
          break;
        case 3:
          switch (ue) {
            case 102:
            case 112:
              return R(I[0] + _), "";
            default:
              return _ + (me === 0 ? "/*|*/" : "");
          }
        case -2:
          _.split("/*|*/}").forEach(l);
      }
    };
  }(function(R) {
    E.push(R);
  }), N = function(R, l, D) {
    return l === 0 && bn.indexOf(D[t.length]) !== -1 || D.match(i) ? R : "." + r;
  };
  function x(R, l, D, _) {
    _ === void 0 && (_ = "&");
    var I = R.replace(gn, ""), A = l && D ? D + " " + l + " { " + I + " }" : I;
    return r = _, t = l, o = new RegExp("\\" + t + "\\b", "g"), i = new RegExp("(\\" + t + "\\b){2,}"), y(D || !l ? "" : l, A);
  }
  return y.use([].concat(v, [function(R, l, D) {
    R === 2 && D.length && D[0].lastIndexOf(t) > 0 && (D[0] = D[0].replace(o, N));
  }, T, function(R) {
    if (R === -2) {
      var l = E;
      return E = [], l;
    }
  }])), x.hash = v.length ? v.reduce(function(R, l) {
    return l.name || ke(15), Ie(R, l.name);
  }, 5381).toString() : "", x;
}
var er = Oe.createContext();
er.Consumer;
var tr = Oe.createContext(), En = (tr.Consumer, new tt()), dt = Sn();
function rr() {
  return He(er) || En;
}
function nr() {
  return He(tr) || dt;
}
var wn = function() {
  function e(r, t) {
    var o = this;
    this.inject = function(i, s) {
      s === void 0 && (s = dt);
      var c = o.name + s.hash;
      i.hasNameForId(o.id, c) || i.insertRules(o.id, c, s(o.rules, c, "@keyframes"));
    }, this.toString = function() {
      return ke(12, String(o.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = dt), this.name + r.hash;
  }, e;
}(), Cn = /([A-Z])/, _n = /([A-Z])/g, xn = /^ms-/, Rn = function(e) {
  return "-" + e.toLowerCase();
};
function Gt(e) {
  return Cn.test(e) ? e.replace(_n, Rn).replace(xn, "-ms-") : e;
}
var Wt = function(e) {
  return e == null || e === !1 || e === "";
};
function De(e, r, t, o) {
  if (Array.isArray(e)) {
    for (var i, s = [], c = 0, h = e.length; c < h; c += 1)
      (i = De(e[c], r, t, o)) !== "" && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (Wt(e))
    return "";
  if (gt(e))
    return "." + e.styledComponentId;
  if (ze(e)) {
    if (typeof (v = e) != "function" || v.prototype && v.prototype.isReactComponent || !r)
      return e;
    var m = e(r);
    return process.env.NODE_ENV !== "production" && Be.isElement(m) && console.warn(ut(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), De(m, r, t, o);
  }
  var v;
  return e instanceof wn ? t ? (e.inject(t, o), e.getName(o)) : e : lt(e) ? function y(E, T) {
    var N, x, R = [];
    for (var l in E)
      E.hasOwnProperty(l) && !Wt(E[l]) && (Array.isArray(E[l]) && E[l].isCss || ze(E[l]) ? R.push(Gt(l) + ":", E[l], ";") : lt(E[l]) ? R.push.apply(R, y(E[l], l)) : R.push(Gt(l) + ": " + (N = l, (x = E[l]) == null || typeof x == "boolean" || x === "" ? "" : typeof x != "number" || x === 0 || N in Fr ? String(x).trim() : x + "px") + ";"));
    return T ? [T + " {"].concat(R, ["}"]) : R;
  }(e) : e.toString();
}
var Bt = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function J(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    t[o - 1] = arguments[o];
  return ze(e) || lt(e) ? Bt(De(zt(Qe, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Bt(De(zt(e, t)));
}
var Ut = /invalid hook call/i, Xe = /* @__PURE__ */ new Set(), or = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        if (Ut.test(s))
          i = !1, Xe.delete(t);
        else {
          for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), m = 1; m < c; m++)
            h[m - 1] = arguments[m];
          o.apply(void 0, [s].concat(h));
        }
      }, qt(), i && !Xe.has(t) && (console.warn(t), Xe.add(t));
    } catch (s) {
      Ut.test(s.message) && Xe.delete(t);
    } finally {
      console.error = o;
    }
  }
}, ar = function(e, r, t) {
  return t === void 0 && (t = Ne), e.theme !== t.theme && e.theme || r || t.theme;
}, An = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Tn = /(^-|-$)/g;
function it(e) {
  return e.replace(An, "-").replace(Tn, "");
}
var ir = function(e) {
  return ft(Jt(e) >>> 0);
};
function Ke(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var pt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Pn = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function $n(e, r, t) {
  var o = e[t];
  pt(r) && pt(o) ? sr(o, r) : e[t] = r;
}
function sr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    t[o - 1] = arguments[o];
  for (var i = 0, s = t; i < s.length; i++) {
    var c = s[i];
    if (pt(c))
      for (var h in c)
        Pn(h) && $n(e, c[h], h);
  }
  return e;
}
var Ue = Oe.createContext();
Ue.Consumer;
function kn(e) {
  var r = He(Ue), t = Pr(function() {
    return function(o, i) {
      if (!o)
        return ke(14);
      if (ze(o)) {
        var s = o(i);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : ke(7);
      }
      return Array.isArray(o) || typeof o != "object" ? ke(8) : i ? _e({}, i, {}, o) : o;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? Oe.createElement(Ue.Provider, { value: t }, e.children) : null;
}
var st = {};
function cr(e, r, t) {
  var o = gt(e), i = !Ke(e), s = r.attrs, c = s === void 0 ? Qe : s, h = r.componentId, m = h === void 0 ? function(_, I) {
    var A = typeof _ != "string" ? "sc" : it(_);
    st[A] = (st[A] || 0) + 1;
    var u = A + "-" + ir("5.3.6" + A + st[A]);
    return I ? I + "-" + u : u;
  }(r.displayName, r.parentComponentId) : h, v = r.displayName, y = v === void 0 ? function(_) {
    return Ke(_) ? "styled." + _ : "Styled(" + ut(_) + ")";
  }(e) : v, E = r.displayName && r.componentId ? it(r.displayName) + "-" + r.componentId : r.componentId || m, T = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c, N = r.shouldForwardProp;
  o && e.shouldForwardProp && (N = r.shouldForwardProp ? function(_, I, A) {
    return e.shouldForwardProp(_, I, A) && r.shouldForwardProp(_, I, A);
  } : e.shouldForwardProp);
  var x, R = new vn(t, E, o ? e.componentStyle : void 0), l = R.isStatic && c.length === 0, D = function(_, I) {
    return function(A, u, ae, he) {
      var ue = A.attrs, de = A.componentStyle, me = A.defaultProps, Se = A.foldedComponentIds, ie = A.shouldForwardProp, K = A.styledComponentId, re = A.target;
      process.env.NODE_ENV !== "production" && Pt(K);
      var ee = function(P, a, j) {
        P === void 0 && (P = Ne);
        var p = _e({}, a, { theme: P }), W = {};
        return j.forEach(function(M) {
          var F, f, Q, b = M;
          for (F in ze(b) && (b = b(p)), b)
            p[F] = W[F] = F === "className" ? (f = W[F], Q = b[F], f && Q ? f + " " + Q : f || Q) : b[F];
        }), [p, W];
      }(ar(u, He(Ue), me) || Ne, u, ue), Ee = ee[0], fe = ee[1], ne = function(P, a, j, p) {
        var W = rr(), M = nr(), F = a ? P.generateAndInjectStyles(Ne, W, M) : P.generateAndInjectStyles(j, W, M);
        return process.env.NODE_ENV !== "production" && Pt(F), process.env.NODE_ENV !== "production" && !a && p && p(F), F;
      }(de, he, Ee, process.env.NODE_ENV !== "production" ? A.warnTooManyClasses : void 0), ge = ae, ye = fe.$as || u.$as || fe.as || u.as || re, we = Ke(ye), C = fe !== u ? _e({}, u, {}, fe) : u, S = {};
      for (var w in C)
        w[0] !== "$" && w !== "as" && (w === "forwardedAs" ? S.as = C[w] : (ie ? ie(w, It, ye) : !we || It(w)) && (S[w] = C[w]));
      return u.style && fe.style !== u.style && (S.style = _e({}, u.style, {}, fe.style)), S.className = Array.prototype.concat(Se, K, ne !== K ? ne : null, u.className, fe.className).filter(Boolean).join(" "), S.ref = ge, $r(ye, S);
    }(x, _, I, l);
  };
  return D.displayName = y, (x = Oe.forwardRef(D)).attrs = T, x.componentStyle = R, x.displayName = y, x.shouldForwardProp = N, x.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Qe, x.styledComponentId = E, x.target = o ? e.target : e, x.withComponent = function(_) {
    var I = r.componentId, A = function(ae, he) {
      if (ae == null)
        return {};
      var ue, de, me = {}, Se = Object.keys(ae);
      for (de = 0; de < Se.length; de++)
        ue = Se[de], he.indexOf(ue) >= 0 || (me[ue] = ae[ue]);
      return me;
    }(r, ["componentId"]), u = I && I + "-" + (Ke(_) ? _ : it(ut(_)));
    return cr(_, _e({}, A, { attrs: T, componentId: u }), t);
  }, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = o ? sr({}, e.defaultProps, _) : _;
  } }), process.env.NODE_ENV !== "production" && (or(y, E), x.warnTooManyClasses = function(_, I) {
    var A = {}, u = !1;
    return function(ae) {
      if (!u && (A[ae] = !0, Object.keys(A).length >= 200)) {
        var he = I ? ' with the id of "' + I + '"' : "";
        console.warn("Over 200 classes were generated for component " + _ + he + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), u = !0, A = {};
      }
    };
  }(y, E)), x.toString = function() {
    return "." + x.styledComponentId;
  }, i && Zr(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), x;
}
var ht = function(e) {
  return function r(t, o, i) {
    if (i === void 0 && (i = Ne), !Be.isValidElementType(o))
      return ke(1, String(o));
    var s = function() {
      return t(o, i, J.apply(void 0, arguments));
    };
    return s.withConfig = function(c) {
      return r(t, o, _e({}, i, {}, c));
    }, s.attrs = function(c) {
      return r(t, o, _e({}, i, { attrs: Array.prototype.concat(i.attrs, c).filter(Boolean) }));
    }, s;
  }(cr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ht[e] = ht(e);
});
var On = function() {
  function e(t, o) {
    this.rules = t, this.componentId = o, this.isStatic = Qt(t), tt.registerId(this.componentId + 1);
  }
  var r = e.prototype;
  return r.createStyles = function(t, o, i, s) {
    var c = s(De(this.rules, o, i, s).join(""), ""), h = this.componentId + t;
    i.insertRules(h, h, c);
  }, r.removeStyles = function(t, o) {
    o.clearRules(this.componentId + t);
  }, r.renderStyles = function(t, o, i, s) {
    t > 2 && tt.registerId(this.componentId + t), this.removeStyles(t, i), this.createStyles(t, o, i, s);
  }, e;
}();
function Nn(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    t[o - 1] = arguments[o];
  var i = J.apply(void 0, [e].concat(t)), s = "sc-global-" + ir(JSON.stringify(i)), c = new On(i, s);
  function h(v) {
    var y = rr(), E = nr(), T = He(Ue), N = qt(y.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Oe.Children.count(v.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && i.some(function(x) {
      return typeof x == "string" && x.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), y.server && m(N, v, y, T, E), Tr(function() {
      if (!y.server)
        return m(N, v, y, T, E), function() {
          return c.removeStyles(N, y);
        };
    }, [N, v, y, T, E]), null;
  }
  function m(v, y, E, T, N) {
    if (c.isStatic)
      c.renderStyles(v, Qr, E, N);
    else {
      var x = _e({}, y, { theme: ar(y, T, h.defaultProps) });
      c.renderStyles(v, x, E, N);
    }
  }
  return process.env.NODE_ENV !== "production" && or(s), Oe.memo(h);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const xe = ht, In = xe.hr`
	width: 100%;

	${({ theme: { colors: e } }) => J`
			border: 0.5px solid ${e.color5};
		`}
`, so = ({ "data-testid": e = "break" }) => /* @__PURE__ */ ve(In, { "data-testid": e }), Dn = xe.div`
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
`, Mn = xe.div`
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
`, lr = ({
  type: e = "button",
  "data-testid": r = "loader"
}) => e === "button" ? /* @__PURE__ */ mt(Dn, { "data-testid": r, children: [
  /* @__PURE__ */ ve("div", { className: "load1" }),
  /* @__PURE__ */ ve("div", { className: "load2" }),
  /* @__PURE__ */ ve("div", { className: "load3" })
] }) : /* @__PURE__ */ ve(Mn, { "data-testid": r });
lr.displayName = "Loader";
const jn = ({ colors: e }, r = "primary") => ({
  primary: J`
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
  secondary: J`
			color: ${e.secondary};
			background: ${e.main};
			border: 2px solid ${e.secondary};

			&:hover {
				background: ${e.secondary};
				color: ${e.main};
			}
		`,
  alert: J`
			color: ${e.secondary};
			background: ${e.error};

			&:hover {
				background: ${e.color5};
			}
		`
})[r], Fn = (e = "center") => ({
  center: J`
			justify-content: center;
		`,
  left: J`
			justify-content: flex-start;
		`
})[e], Ln = xe.button`
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

	${({ theme: { spaces: e, font: r }, hasOnlyIcon: t, hasFullWidth: o, isDropdown: i }) => J`
			width: ${o && "100%"};
			font-weight: ${r.weights.bold};
			padding: ${t ? `${e.tiny} ${e.small}` : `${e.tiny} ${e.big}`};
			border-radius: ${i && "15px 15px 0 0"};
		`}

	${({ theme: e, variant: r }) => jn(e, r)}
	${({ align: e }) => Fn(e)}
`, zn = ({
  variant: e = "primary",
  type: r = "button",
  children: t,
  action: o,
  hasFullWidth: i = !1,
  hasOnlyIcon: s = !1,
  align: c = "center",
  isLoading: h = !1,
  isDisabled: m = !1,
  isDropdown: v = !1,
  "data-testid": y = "button"
}) => /* @__PURE__ */ ve(
  Ln,
  {
    variant: e,
    type: r,
    onClick: o,
    hasFullWidth: i,
    hasOnlyIcon: s,
    align: c,
    disabled: m,
    isDropdown: v,
    "data-testid": y,
    children: h ? /* @__PURE__ */ ve(lr, { "data-testid": "button-loader" }) : t
  }
);
zn.displayName = "Button";
const Yn = ({ font: e, colors: r }, t = "h1") => ({
  h1: J`
			font-weight: ${e.weights.medium};
			font-size: ${e.sizes.h1};
			line-height: ${e.lineHeight.h1};
			letter-spacing: ${e.letterSpacing.h1};
			color: ${r.color1};
			text-transform: uppercase;
		`,
  h2: J`
			font-weight: ${e.weights.regular};
			font-size: ${e.sizes.h2};
			line-height: ${e.lineHeight.h2};
			letter-spacing: ${e.letterSpacing.h2};
			color: ${r.color2};
		`
})[t], Vn = xe.h1`
	text-align: ${({ align: e }) => e};

	${({ theme: e, level: r }) => Yn(e, `h${r}`)};
`, Gn = ({
  level: e = 1,
  children: r,
  align: t = "center",
  "data-testid": o = "heading"
}) => /* @__PURE__ */ ve(
  Vn,
  {
    as: `h${e}`,
    level: e,
    align: t,
    "data-testid": o,
    children: r
  }
);
Gn.displayName = "Heading";
const Wn = ({ colors: e }, r = "avatar") => ({
  avatar: J`
			cursor: pointer;
			width: 120px;
			height: 120px;
			background: ${e.main};
			border: 2px solid ${e.secondary};
			border-radius: 100%;
		`
})[r], Bn = xe.img`
	${({ onClick: e }) => J`
			cursor: ${e && "pointer"};
		`}

	${({ theme: e, variant: r }) => Wn(e, r)}
`, Un = ({
  src: e,
  width: r,
  height: t,
  alt: o,
  variant: i = "default",
  onClick: s,
  "data-testid": c = "image"
}) => /* @__PURE__ */ ve(
  Bn,
  {
    src: e,
    width: r,
    height: t,
    alt: o,
    variant: i,
    onClick: s,
    "data-testid": c
  }
);
Un.displayName = "Image";
const Hn = xe.div`
	${({ theme: { breakpoints: e } }) => J`
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
`, qn = xe.div`
	${({ theme: { spaces: e, colors: r, breakpoints: t }, image: o }) => J`
			width: calc(100% - 600px);
			height: calc(100vh - 84px);
			padding: calc(${e.huge} + ${e.huge}) ${e.huge};
			background: ${r.main};
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
`, Xn = xe.div`
	${({ theme: { spaces: e, breakpoints: r } }) => J`
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
`, Kn = ({
  children: e,
  image: r,
  "data-testid": t = "layout"
}) => /* @__PURE__ */ mt(Hn, { "data-testid": t, children: [
  /* @__PURE__ */ ve(qn, { image: r }),
  /* @__PURE__ */ ve(Xn, { children: e })
] });
Kn.displayName = "Layout";
const Zn = ({ colors: e }, r = "label") => ({
  default: J`
			color: ${e.secondary};
		`,
  label: J`
			color: ${e.color5};
		`,
  error: J`
			color: ${e.error};
		`
})[r], Jn = ({ font: e }, r = "medium") => ({
  small: J`
			font-size: ${e.sizes.error};
		`,
  medium: J`
			font-size: ${e.sizes.default};
		`,
  big: J`
			font-size: ${e.sizes.info};
		`,
  large: J`
			font-size: ${e.sizes.icon};
		`,
  huge: J`
			font-size: ${e.sizes.notFound};
		`
})[r], Qn = xe.p`
	font-size: ${({ size: e }) => e};
	text-align: ${({ align: e }) => e};
	min-height: 24px;
	display: flex;
	align-items: center;
	gap: 5px;

	${({ theme: e, type: r }) => Zn(e, r)};
	${({ theme: e, size: r }) => Jn(e, r)};
`, eo = ({
  type: e = "default",
  children: r,
  size: t = "medium",
  align: o = "center",
  "data-testid": i = "paragraph"
}) => /* @__PURE__ */ ve(
  Qn,
  {
    type: e,
    size: t,
    align: o,
    "data-testid": i,
    children: r
  }
);
eo.displayName = "Paragraph";
const to = xe.div`
	${({ theme: { spaces: e }, type: r, space: t = "medium" }) => J`
			width: ${r === "horizontal" && e[t]};
			height: ${r === "vertical" && e[t]};
		`}
`, ro = ({
  type: e = "horizontal",
  space: r = "medium",
  "data-testid": t = "spacer"
}) => /* @__PURE__ */ ve(
  to,
  {
    type: e,
    space: r,
    "data-testid": t
  }
);
ro.displayName = "Spacer";
const no = Nn`
	${({ theme: { font: e, colors: r } }) => J`
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
			background-color: ${({ theme: t }) => t.colors.main};
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
`, Ht = {
  MOBILE: 428,
  TABLET: 1200
}, V = {
  Grey100: "#090909",
  Grey200: "#111111",
  Grey300: "#3C3C3C",
  Grey400: "#797979",
  White100: "#EAEAEA",
  White200: "#EEEEEE",
  White300: "#DDDDDD",
  Red100: "#F97777",
  Red200: "#F86565",
  Orange100: "#EFA360",
  Orange200: "#F18F5D",
  Yellow100: "#DECC56",
  Yellow200: "#E4CF49",
  Green100: "#D7E66D",
  Green200: "#D6E560",
  Green300: "#8EE296",
  Green400: "#83DF8C",
  Blue100: "#83CDE8",
  Blue200: "#77C8E6"
}, ur = {
  mini: "4px",
  tiny: "8px",
  small: "12px",
  medium: "20px",
  big: "40px",
  large: "60px",
  huge: "80px"
}, fr = {
  weights: {
    regular: 400,
    medium: 500,
    bold: 600
  },
  sizes: {
    error: "12px",
    default: "16px",
    info: "18px",
    h1: "28px",
    h2: "18px",
    icon: "64px",
    notFound: "128px"
  },
  lineHeight: {
    default: "24px",
    h1: "44px",
    h2: "28px"
  },
  letterSpacing: {
    default: "normal",
    h1: "0.1em",
    h2: "0.02em"
  }
}, dr = {
  mobile: Ht.MOBILE,
  tablet: Ht.TABLET
}, oo = {
  colors: {
    main: V.White100,
    secondary: V.Grey100,
    color1: V.Grey300,
    color2: V.Grey200,
    color3: V.White200,
    color4: V.Grey300,
    color5: V.Grey400,
    weak: V.Orange100,
    good: V.Green100,
    error: V.Red100,
    warning: V.Yellow100,
    success: V.Green300,
    info: V.Blue100,
    toastError: V.Red200,
    toastWarning: V.Yellow200,
    toastSuccess: V.Green400,
    toastInfo: V.Blue200
  },
  font: fr,
  spaces: ur,
  breakpoints: dr
}, ao = {
  colors: {
    main: V.Grey100,
    secondary: V.White300,
    color1: V.White100,
    color2: V.White200,
    color3: V.Grey200,
    color4: V.Grey300,
    color5: V.Grey400,
    weak: V.Orange200,
    good: V.Green200,
    error: V.Red200,
    warning: V.Yellow200,
    success: V.Green400,
    info: V.Blue200,
    toastError: V.Red100,
    toastWarning: V.Yellow100,
    toastSuccess: V.Green300,
    toastInfo: V.Blue100
  },
  font: fr,
  spaces: ur,
  breakpoints: dr
}, co = ({ theme: e = "dark", children: r }) => /* @__PURE__ */ mt(kn, { theme: e === "dark" ? ao : oo, children: [
  /* @__PURE__ */ ve(no, {}),
  r
] });
export {
  so as Break,
  zn as Button,
  Gn as Heading,
  Un as Image,
  Kn as Layout,
  lr as Loader,
  eo as Paragraph,
  ro as Spacer,
  co as Theme
};

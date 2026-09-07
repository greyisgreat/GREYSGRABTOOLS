const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/ControlPanel.js",
      "assets/label.js",
      "assets/ApiExplorer.js",
      "assets/Messenger.js",
      "assets/client.js",
      "assets/Forums.js",
    ]),
) => i.map((i) => d[i]);
var id = (e) => {
  throw TypeError(e);
};
var Xa = (e, t, n) => t.has(e) || id("Cannot " + n);
var P = (e, t, n) => (
    Xa(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  ae = (e, t, n) =>
    t.has(e)
      ? id("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  ee = (e, t, n, r) => (
    Xa(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  $e = (e, t, n) => (Xa(e, t, "access private method"), n);
var ri = (e, t, n, r) => ({
  set _(o) {
    ee(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function Wv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function xp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wp = { exports: {} },
  ba = {},
  bp = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bs = Symbol.for("react.element"),
  Hv = Symbol.for("react.portal"),
  Qv = Symbol.for("react.fragment"),
  Gv = Symbol.for("react.strict_mode"),
  Kv = Symbol.for("react.profiler"),
  Yv = Symbol.for("react.provider"),
  qv = Symbol.for("react.context"),
  Xv = Symbol.for("react.forward_ref"),
  Zv = Symbol.for("react.suspense"),
  Jv = Symbol.for("react.memo"),
  ey = Symbol.for("react.lazy"),
  ad = Symbol.iterator;
function ty(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ad && e[ad]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var kp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sp = Object.assign,
  Cp = {};
function Io(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Cp),
    (this.updater = n || kp));
}
Io.prototype.isReactComponent = {};
Io.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Io.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ep() {}
Ep.prototype = Io.prototype;
function Fc(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Cp),
    (this.updater = n || kp));
}
var Uc = (Fc.prototype = new Ep());
Uc.constructor = Fc;
Sp(Uc, Io.prototype);
Uc.isPureReactComponent = !0;
var ld = Array.isArray,
  Np = Object.prototype.hasOwnProperty,
  Bc = { current: null },
  _p = { key: !0, ref: !0, __self: !0, __source: !0 };
function jp(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Np.call(t, r) && !_p.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Bs,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Bc.current,
  };
}
function ny(e, t) {
  return {
    $$typeof: Bs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Vc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bs;
}
function ry(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cd = /\/+/g;
function Za(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ry("" + e.key)
    : t.toString(36);
}
function _i(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Bs:
          case Hv:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Za(i, 0) : r),
      ld(o)
        ? ((n = ""),
          e != null && (n = e.replace(cd, "$&/") + "/"),
          _i(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Vc(o) &&
            (o = ny(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(cd, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ld(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Za(s, a);
      i += _i(s, t, n, l, o);
    }
  else if (((l = ty(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done;)
      ((s = s.value), (l = r + Za(s, a++)), (i += _i(s, t, n, l, o)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return i;
}
function oi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    _i(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function oy(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ke = { current: null },
  ji = { transition: null },
  sy = {
    ReactCurrentDispatcher: Ke,
    ReactCurrentBatchConfig: ji,
    ReactCurrentOwner: Bc,
  };
function Pp() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = {
  map: oi,
  forEach: function (e, t, n) {
    oi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Vc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
re.Component = Io;
re.Fragment = Qv;
re.Profiler = Kv;
re.PureComponent = Fc;
re.StrictMode = Gv;
re.Suspense = Zv;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sy;
re.act = Pp;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Sp({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Bc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Np.call(t, l) &&
        !_p.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Bs, type: e.type, key: o, ref: s, props: r, _owner: i };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: qv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yv, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = jp;
re.createFactory = function (e) {
  var t = jp.bind(null, e);
  return ((t.type = e), t);
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: Xv, render: e };
};
re.isValidElement = Vc;
re.lazy = function (e) {
  return { $$typeof: ey, _payload: { _status: -1, _result: e }, _init: oy };
};
re.memo = function (e, t) {
  return { $$typeof: Jv, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = ji.transition;
  ji.transition = {};
  try {
    e();
  } finally {
    ji.transition = t;
  }
};
re.unstable_act = Pp;
re.useCallback = function (e, t) {
  return Ke.current.useCallback(e, t);
};
re.useContext = function (e) {
  return Ke.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return Ke.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return Ke.current.useEffect(e, t);
};
re.useId = function () {
  return Ke.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return Ke.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return Ke.current.useRef(e);
};
re.useState = function (e) {
  return Ke.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return Ke.current.useTransition();
};
re.version = "18.3.1";
bp.exports = re;
var y = bp.exports;
const A = xp(y),
  Tp = Wv({ __proto__: null, default: A }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var iy = y,
  ay = Symbol.for("react.element"),
  ly = Symbol.for("react.fragment"),
  cy = Object.prototype.hasOwnProperty,
  uy = iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rp(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) cy.call(t, r) && !dy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ay,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: uy.current,
  };
}
ba.Fragment = ly;
ba.jsx = Rp;
ba.jsxs = Rp;
wp.exports = ba;
var u = wp.exports,
  Lp = { exports: {} },
  mt = {},
  Ip = { exports: {} },
  Op = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, T) {
    var z = _.length;
    _.push(T);
    e: for (; 0 < z;) {
      var q = (z - 1) >>> 1,
        W = _[q];
      if (0 < o(W, T)) ((_[q] = T), (_[z] = W), (z = q));
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      z = _.pop();
    if (z !== T) {
      _[0] = z;
      e: for (var q = 0, W = _.length, Z = W >>> 1; q < Z;) {
        var ne = 2 * (q + 1) - 1,
          ce = _[ne],
          Ne = ne + 1,
          oe = _[Ne];
        if (0 > o(ce, z))
          Ne < W && 0 > o(oe, ce)
            ? ((_[q] = oe), (_[Ne] = z), (q = Ne))
            : ((_[q] = ce), (_[ne] = z), (q = ne));
        else if (Ne < W && 0 > o(oe, z)) ((_[q] = oe), (_[Ne] = z), (q = Ne));
        else break e;
      }
    }
    return T;
  }
  function o(_, T) {
    var z = _.sortIndex - T.sortIndex;
    return z !== 0 ? z : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var l = [],
    c = [],
    p = 1,
    m = null,
    g = 3,
    d = !1,
    w = !1,
    x = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(_) {
    for (var T = n(c); T !== null;) {
      if (T.callback === null) r(c);
      else if (T.startTime <= _)
        (r(c), (T.sortIndex = T.expirationTime), t(l, T));
      else break;
      T = n(c);
    }
  }
  function k(_) {
    if (((x = !1), v(_), !w))
      if (n(l) !== null) ((w = !0), Q(S));
      else {
        var T = n(c);
        T !== null && V(k, T.startTime - _);
      }
  }
  function S(_, T) {
    ((w = !1), x && ((x = !1), f(j), (j = -1)), (d = !0));
    var z = g;
    try {
      for (
        v(T), m = n(l);
        m !== null && (!(m.expirationTime > T) || (_ && !D()));
      ) {
        var q = m.callback;
        if (typeof q == "function") {
          ((m.callback = null), (g = m.priorityLevel));
          var W = q(m.expirationTime <= T);
          ((T = e.unstable_now()),
            typeof W == "function" ? (m.callback = W) : m === n(l) && r(l),
            v(T));
        } else r(l);
        m = n(l);
      }
      if (m !== null) var Z = !0;
      else {
        var ne = n(c);
        (ne !== null && V(k, ne.startTime - T), (Z = !1));
      }
      return Z;
    } finally {
      ((m = null), (g = z), (d = !1));
    }
  }
  var E = !1,
    N = null,
    j = -1,
    M = 5,
    O = -1;
  function D() {
    return !(e.unstable_now() - O < M);
  }
  function F() {
    if (N !== null) {
      var _ = e.unstable_now();
      O = _;
      var T = !0;
      try {
        T = N(!0, _);
      } finally {
        T ? Y() : ((E = !1), (N = null));
      }
    } else E = !1;
  }
  var Y;
  if (typeof h == "function")
    Y = function () {
      h(F);
    };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(),
      X = $.port2;
    (($.port1.onmessage = F),
      (Y = function () {
        X.postMessage(null);
      }));
  } else
    Y = function () {
      b(F, 0);
    };
  function Q(_) {
    ((N = _), E || ((E = !0), Y()));
  }
  function V(_, T) {
    j = b(function () {
      _(e.unstable_now());
    }, T);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || d || ((w = !0), Q(S));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (_) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = g;
      }
      var z = g;
      g = T;
      try {
        return _();
      } finally {
        g = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var z = g;
      g = _;
      try {
        return T();
      } finally {
        g = z;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, z) {
      var q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? q + z : q))
          : (z = q),
        _)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = z + W),
        (_ = {
          id: p++,
          callback: T,
          priorityLevel: _,
          startTime: z,
          expirationTime: W,
          sortIndex: -1,
        }),
        z > q
          ? ((_.sortIndex = z),
            t(c, _),
            n(l) === null &&
              _ === n(c) &&
              (x ? (f(j), (j = -1)) : (x = !0), V(k, z - q)))
          : ((_.sortIndex = W), t(l, _), w || d || ((w = !0), Q(S))),
        _
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (_) {
      var T = g;
      return function () {
        var z = g;
        g = T;
        try {
          return _.apply(this, arguments);
        } finally {
          g = z;
        }
      };
    }));
})(Op);
Ip.exports = Op;
var fy = Ip.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var py = y,
  ft = fy;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ap = new Set(),
  vs = {};
function Fr(e, t) {
  (Co(e, t), Co(e + "Capture", t));
}
function Co(e, t) {
  for (vs[e] = t, e = 0; e < t.length; e++) Ap.add(t[e]);
}
var kn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ll = Object.prototype.hasOwnProperty,
  hy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ud = {},
  dd = {};
function my(e) {
  return Ll.call(dd, e)
    ? !0
    : Ll.call(ud, e)
      ? !1
      : hy.test(e)
        ? (dd[e] = !0)
        : ((ud[e] = !0), !1);
}
function gy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function vy(e, t, n, r) {
  if (t === null || typeof t > "u" || gy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ye(e, t, n, r, o, s, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i));
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Me[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Me[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Me[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Me[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Me[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Me[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Me[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wc = /[\-:]([a-z])/g;
function Hc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wc, Hc);
    Me[t] = new Ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wc, Hc);
    Me[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wc, Hc);
  Me[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Me[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new Ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Me[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qc(e, t, n, r) {
  var o = Me.hasOwnProperty(t) ? Me[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (vy(t, n, o, r) && (n = null),
    r || o === null
      ? my(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jn = py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  si = Symbol.for("react.element"),
  Kr = Symbol.for("react.portal"),
  Yr = Symbol.for("react.fragment"),
  Gc = Symbol.for("react.strict_mode"),
  Il = Symbol.for("react.profiler"),
  Mp = Symbol.for("react.provider"),
  $p = Symbol.for("react.context"),
  Kc = Symbol.for("react.forward_ref"),
  Ol = Symbol.for("react.suspense"),
  Al = Symbol.for("react.suspense_list"),
  Yc = Symbol.for("react.memo"),
  $n = Symbol.for("react.lazy"),
  zp = Symbol.for("react.offscreen"),
  fd = Symbol.iterator;
function Wo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fd && e[fd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var be = Object.assign,
  Ja;
function ns(e) {
  if (Ja === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ja = (t && t[1]) || "";
    }
  return (
    `
` +
    Ja +
    e
  );
}
var el = !1;
function tl(e, t) {
  if (!e || el) return "";
  el = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          a = s.length - 1;
        1 <= i && 0 <= a && o[i] !== s[a];
      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== s[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== s[a])) {
                var l =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    ((el = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? ns(e) : "";
}
function yy(e) {
  switch (e.tag) {
    case 5:
      return ns(e.type);
    case 16:
      return ns("Lazy");
    case 13:
      return ns("Suspense");
    case 19:
      return ns("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = tl(e.type, !1)), e);
    case 11:
      return ((e = tl(e.type.render, !1)), e);
    case 1:
      return ((e = tl(e.type, !0)), e);
    default:
      return "";
  }
}
function Ml(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yr:
      return "Fragment";
    case Kr:
      return "Portal";
    case Il:
      return "Profiler";
    case Gc:
      return "StrictMode";
    case Ol:
      return "Suspense";
    case Al:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $p:
        return (e.displayName || "Context") + ".Consumer";
      case Mp:
        return (e._context.displayName || "Context") + ".Provider";
      case Kc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Yc:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ml(e.type) || "Memo"
        );
      case $n:
        ((t = e._payload), (e = e._init));
        try {
          return Ml(e(t));
        } catch {}
    }
  return null;
}
function xy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ml(t);
    case 8:
      return t === Gc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ir(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Dp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function wy(e) {
  var t = Dp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          ((r = "" + i), s.call(this, i));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ii(e) {
  e._valueTracker || (e._valueTracker = wy(e));
}
function Fp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Dp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Bi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $l(e, t) {
  var n = t.checked;
  return be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = ir(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Up(e, t) {
  ((t = t.checked), t != null && Qc(e, "checked", t, !1));
}
function zl(e, t) {
  Up(e, t);
  var n = ir(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Dl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Dl(e, t.type, ir(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function hd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(
      (r !== "submit" && r !== "reset") ||
      (t.value !== void 0 && t.value !== null)
    ))
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Dl(e, t, n) {
  (t !== "number" || Bi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var rs = Array.isArray;
function ao(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + ir(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function md(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (rs(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: ir(n) };
}
function Bp(e, t) {
  var n = ir(t.value),
    r = ir(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function gd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ul(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ai,
  Wp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ai = ai || document.createElement("div"),
          ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ai.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function ys(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var as = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  by = ["Webkit", "ms", "Moz", "O"];
Object.keys(as).forEach(function (e) {
  by.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (as[t] = as[e]));
  });
});
function Hp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (as.hasOwnProperty(e) && as[e])
      ? ("" + t).trim()
      : t + "px";
}
function Qp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Hp(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var ky = be(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Bl(e, t) {
  if (t) {
    if (ky[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Vl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Wl = null;
function qc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hl = null,
  lo = null,
  co = null;
function vd(e) {
  if ((e = Hs(e))) {
    if (typeof Hl != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Na(t)), Hl(e.stateNode, e.type, t));
  }
}
function Gp(e) {
  lo ? (co ? co.push(e) : (co = [e])) : (lo = e);
}
function Kp() {
  if (lo) {
    var e = lo,
      t = co;
    if (((co = lo = null), vd(e), t)) for (e = 0; e < t.length; e++) vd(t[e]);
  }
}
function Yp(e, t) {
  return e(t);
}
function qp() {}
var nl = !1;
function Xp(e, t, n) {
  if (nl) return e(t, n);
  nl = !0;
  try {
    return Yp(e, t, n);
  } finally {
    ((nl = !1), (lo !== null || co !== null) && (qp(), Kp()));
  }
}
function xs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Na(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Ql = !1;
if (kn)
  try {
    var Ho = {};
    (Object.defineProperty(Ho, "passive", {
      get: function () {
        Ql = !0;
      },
    }),
      window.addEventListener("test", Ho, Ho),
      window.removeEventListener("test", Ho, Ho));
  } catch {
    Ql = !1;
  }
function Sy(e, t, n, r, o, s, i, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var ls = !1,
  Vi = null,
  Wi = !1,
  Gl = null,
  Cy = {
    onError: function (e) {
      ((ls = !0), (Vi = e));
    },
  };
function Ey(e, t, n, r, o, s, i, a, l) {
  ((ls = !1), (Vi = null), Sy.apply(Cy, arguments));
}
function Ny(e, t, n, r, o, s, i, a, l) {
  if ((Ey.apply(this, arguments), ls)) {
    if (ls) {
      var c = Vi;
      ((ls = !1), (Vi = null));
    } else throw Error(L(198));
    Wi || ((Wi = !0), (Gl = c));
  }
}
function Ur(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function yd(e) {
  if (Ur(e) !== e) throw Error(L(188));
}
function _y(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ur(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ;) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s;) {
        if (s === n) return (yd(o), e);
        if (s === r) return (yd(o), t);
        s = s.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) ((n = o), (r = s));
    else {
      for (var i = !1, a = o.child; a;) {
        if (a === n) {
          ((i = !0), (n = o), (r = s));
          break;
        }
        if (a === r) {
          ((i = !0), (r = o), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = s.child; a;) {
          if (a === n) {
            ((i = !0), (n = s), (r = o));
            break;
          }
          if (a === r) {
            ((i = !0), (r = s), (n = o));
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Jp(e) {
  return ((e = _y(e)), e !== null ? eh(e) : null);
}
function eh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = eh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var th = ft.unstable_scheduleCallback,
  xd = ft.unstable_cancelCallback,
  jy = ft.unstable_shouldYield,
  Py = ft.unstable_requestPaint,
  Ce = ft.unstable_now,
  Ty = ft.unstable_getCurrentPriorityLevel,
  Xc = ft.unstable_ImmediatePriority,
  nh = ft.unstable_UserBlockingPriority,
  Hi = ft.unstable_NormalPriority,
  Ry = ft.unstable_LowPriority,
  rh = ft.unstable_IdlePriority,
  ka = null,
  tn = null;
function Ly(e) {
  if (tn && typeof tn.onCommitFiberRoot == "function")
    try {
      tn.onCommitFiberRoot(ka, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : Ay,
  Iy = Math.log,
  Oy = Math.LN2;
function Ay(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Iy(e) / Oy) | 0)) | 0);
}
var li = 64,
  ci = 4194304;
function os(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Qi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = os(a)) : ((s &= i), s !== 0 && (r = os(s)));
  } else ((i = n & ~o), i !== 0 ? (r = os(i)) : s !== 0 && (r = os(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - Dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function My(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $y(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var i = 31 - Dt(s),
      a = 1 << i,
      l = o[i];
    (l === -1
      ? (!(a & n) || a & r) && (o[i] = My(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function Kl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function oh() {
  var e = li;
  return ((li <<= 1), !(li & 4194240) && (li = 64), e);
}
function rl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vs(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = n));
}
function zy(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - Dt(n),
      s = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s));
  }
}
function Zc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - Dt(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var ue = 0;
function sh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ih,
  Jc,
  ah,
  lh,
  ch,
  Yl = !1,
  ui = [],
  qn = null,
  Xn = null,
  Zn = null,
  ws = new Map(),
  bs = new Map(),
  Dn = [],
  Dy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function wd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qn = null;
      break;
    case "dragenter":
    case "dragleave":
      Xn = null;
      break;
    case "mouseover":
    case "mouseout":
      Zn = null;
      break;
    case "pointerover":
    case "pointerout":
      ws.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bs.delete(t.pointerId);
  }
}
function Qo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = Hs(t)), t !== null && Jc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Fy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((qn = Qo(qn, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Xn = Qo(Xn, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Zn = Qo(Zn, e, t, n, r, o)), !0);
    case "pointerover":
      var s = o.pointerId;
      return (ws.set(s, Qo(ws.get(s) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (s = o.pointerId),
        bs.set(s, Qo(bs.get(s) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function uh(e) {
  var t = kr(e.target);
  if (t !== null) {
    var n = Ur(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zp(n)), t !== null)) {
          ((e.blockedOn = t),
            ch(e.priority, function () {
              ah(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Wl = r), n.target.dispatchEvent(r), (Wl = null));
    } else return ((t = Hs(n)), t !== null && Jc(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function bd(e, t, n) {
  Pi(e) && n.delete(t);
}
function Uy() {
  ((Yl = !1),
    qn !== null && Pi(qn) && (qn = null),
    Xn !== null && Pi(Xn) && (Xn = null),
    Zn !== null && Pi(Zn) && (Zn = null),
    ws.forEach(bd),
    bs.forEach(bd));
}
function Go(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Yl ||
      ((Yl = !0),
      ft.unstable_scheduleCallback(ft.unstable_NormalPriority, Uy)));
}
function ks(e) {
  function t(o) {
    return Go(o, e);
  }
  if (0 < ui.length) {
    Go(ui[0], e);
    for (var n = 1; n < ui.length; n++) {
      var r = ui[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    qn !== null && Go(qn, e),
      Xn !== null && Go(Xn, e),
      Zn !== null && Go(Zn, e),
      ws.forEach(t),
      bs.forEach(t),
      n = 0;
    n < Dn.length;
    n++
  )
    ((r = Dn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Dn.length && ((n = Dn[0]), n.blockedOn === null);)
    (uh(n), n.blockedOn === null && Dn.shift());
}
var uo = jn.ReactCurrentBatchConfig,
  Gi = !0;
function By(e, t, n, r) {
  var o = ue,
    s = uo.transition;
  uo.transition = null;
  try {
    ((ue = 1), eu(e, t, n, r));
  } finally {
    ((ue = o), (uo.transition = s));
  }
}
function Vy(e, t, n, r) {
  var o = ue,
    s = uo.transition;
  uo.transition = null;
  try {
    ((ue = 4), eu(e, t, n, r));
  } finally {
    ((ue = o), (uo.transition = s));
  }
}
function eu(e, t, n, r) {
  if (Gi) {
    var o = ql(e, t, n, r);
    if (o === null) (pl(e, t, r, Ki, n), wd(e, r));
    else if (Fy(o, e, t, n, r)) r.stopPropagation();
    else if ((wd(e, r), t & 4 && -1 < Dy.indexOf(e))) {
      for (; o !== null;) {
        var s = Hs(o);
        if (
          (s !== null && ih(s),
          (s = ql(e, t, n, r)),
          s === null && pl(e, t, r, Ki, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else pl(e, t, r, null, n);
  }
}
var Ki = null;
function ql(e, t, n, r) {
  if (((Ki = null), (e = qc(r)), (e = kr(e)), e !== null))
    if (((t = Ur(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Ki = e), null);
}
function dh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ty()) {
        case Xc:
          return 1;
        case nh:
          return 4;
        case Hi:
        case Ry:
          return 16;
        case rh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gn = null,
  tu = null,
  Ti = null;
function fh() {
  if (Ti) return Ti;
  var e,
    t = tu,
    n = t.length,
    r,
    o = "value" in Gn ? Gn.value : Gn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Ti = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ri(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function di() {
  return !0;
}
function kd() {
  return !1;
}
function gt(e) {
  function t(n, r, o, s, i) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? di
        : kd),
      (this.isPropagationStopped = kd),
      this
    );
  }
  return (
    be(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = di));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = di));
      },
      persist: function () {},
      isPersistent: di,
    }),
    t
  );
}
var Oo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nu = gt(Oo),
  Ws = be({}, Oo, { view: 0, detail: 0 }),
  Wy = gt(Ws),
  ol,
  sl,
  Ko,
  Sa = be({}, Ws, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ru,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ko &&
            (Ko && e.type === "mousemove"
              ? ((ol = e.screenX - Ko.screenX), (sl = e.screenY - Ko.screenY))
              : (sl = ol = 0),
            (Ko = e)),
          ol);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : sl;
    },
  }),
  Sd = gt(Sa),
  Hy = be({}, Sa, { dataTransfer: 0 }),
  Qy = gt(Hy),
  Gy = be({}, Ws, { relatedTarget: 0 }),
  il = gt(Gy),
  Ky = be({}, Oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yy = gt(Ky),
  qy = be({}, Oo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Xy = gt(qy),
  Zy = be({}, Oo, { data: 0 }),
  Cd = gt(Zy),
  Jy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  e0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  t0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function n0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = t0[e]) ? !!t[e] : !1;
}
function ru() {
  return n0;
}
var r0 = be({}, Ws, {
    key: function (e) {
      if (e.key) {
        var t = Jy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? e0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ru,
    charCode: function (e) {
      return e.type === "keypress" ? Ri(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ri(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  o0 = gt(r0),
  s0 = be({}, Sa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ed = gt(s0),
  i0 = be({}, Ws, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ru,
  }),
  a0 = gt(i0),
  l0 = be({}, Oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  c0 = gt(l0),
  u0 = be({}, Sa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  d0 = gt(u0),
  f0 = [9, 13, 27, 32],
  ou = kn && "CompositionEvent" in window,
  cs = null;
kn && "documentMode" in document && (cs = document.documentMode);
var p0 = kn && "TextEvent" in window && !cs,
  ph = kn && (!ou || (cs && 8 < cs && 11 >= cs)),
  Nd = " ",
  _d = !1;
function hh(e, t) {
  switch (e) {
    case "keyup":
      return f0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function mh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var qr = !1;
function h0(e, t) {
  switch (e) {
    case "compositionend":
      return mh(t);
    case "keypress":
      return t.which !== 32 ? null : ((_d = !0), Nd);
    case "textInput":
      return ((e = t.data), e === Nd && _d ? null : e);
    default:
      return null;
  }
}
function m0(e, t) {
  if (qr)
    return e === "compositionend" || (!ou && hh(e, t))
      ? ((e = fh()), (Ti = tu = Gn = null), (qr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ph && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var g0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!g0[e.type] : t === "textarea";
}
function gh(e, t, n, r) {
  (Gp(r),
    (t = Yi(t, "onChange")),
    0 < t.length &&
      ((n = new nu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var us = null,
  Ss = null;
function v0(e) {
  _h(e, 0);
}
function Ca(e) {
  var t = Jr(e);
  if (Fp(t)) return e;
}
function y0(e, t) {
  if (e === "change") return t;
}
var vh = !1;
if (kn) {
  var al;
  if (kn) {
    var ll = "oninput" in document;
    if (!ll) {
      var Pd = document.createElement("div");
      (Pd.setAttribute("oninput", "return;"),
        (ll = typeof Pd.oninput == "function"));
    }
    al = ll;
  } else al = !1;
  vh = al && (!document.documentMode || 9 < document.documentMode);
}
function Td() {
  us && (us.detachEvent("onpropertychange", yh), (Ss = us = null));
}
function yh(e) {
  if (e.propertyName === "value" && Ca(Ss)) {
    var t = [];
    (gh(t, Ss, e, qc(e)), Xp(v0, t));
  }
}
function x0(e, t, n) {
  e === "focusin"
    ? (Td(), (us = t), (Ss = n), us.attachEvent("onpropertychange", yh))
    : e === "focusout" && Td();
}
function w0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ca(Ss);
}
function b0(e, t) {
  if (e === "click") return Ca(t);
}
function k0(e, t) {
  if (e === "input" || e === "change") return Ca(t);
}
function S0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ut = typeof Object.is == "function" ? Object.is : S0;
function Cs(e, t) {
  if (Ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ll.call(t, o) || !Ut(e[o], t[o])) return !1;
  }
  return !0;
}
function Rd(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function Ld(e, t) {
  var n = Rd(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Rd(n);
  }
}
function xh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? xh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function wh() {
  for (var e = window, t = Bi(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Bi(e.document);
  }
  return t;
}
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function C0(e) {
  var t = wh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && su(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        ((r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Ld(n, s)));
        var i = Ld(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var E0 = kn && "documentMode" in document && 11 >= document.documentMode,
  Xr = null,
  Xl = null,
  ds = null,
  Zl = !1;
function Id(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zl ||
    Xr == null ||
    Xr !== Bi(r) ||
    ((r = Xr),
    "selectionStart" in r && su(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ds && Cs(ds, r)) ||
      ((ds = r),
      (r = Yi(Xl, "onSelect")),
      0 < r.length &&
        ((t = new nu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xr))));
}
function fi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zr = {
    animationend: fi("Animation", "AnimationEnd"),
    animationiteration: fi("Animation", "AnimationIteration"),
    animationstart: fi("Animation", "AnimationStart"),
    transitionend: fi("Transition", "TransitionEnd"),
  },
  cl = {},
  bh = {};
kn &&
  ((bh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zr.animationend.animation,
    delete Zr.animationiteration.animation,
    delete Zr.animationstart.animation),
  "TransitionEvent" in window || delete Zr.transitionend.transition);
function Ea(e) {
  if (cl[e]) return cl[e];
  if (!Zr[e]) return e;
  var t = Zr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bh) return (cl[e] = t[n]);
  return e;
}
var kh = Ea("animationend"),
  Sh = Ea("animationiteration"),
  Ch = Ea("animationstart"),
  Eh = Ea("transitionend"),
  Nh = new Map(),
  Od =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function fr(e, t) {
  (Nh.set(e, t), Fr(t, [e]));
}
for (var ul = 0; ul < Od.length; ul++) {
  var dl = Od[ul],
    N0 = dl.toLowerCase(),
    _0 = dl[0].toUpperCase() + dl.slice(1);
  fr(N0, "on" + _0);
}
fr(kh, "onAnimationEnd");
fr(Sh, "onAnimationIteration");
fr(Ch, "onAnimationStart");
fr("dblclick", "onDoubleClick");
fr("focusin", "onFocus");
fr("focusout", "onBlur");
fr(Eh, "onTransitionEnd");
Co("onMouseEnter", ["mouseout", "mouseover"]);
Co("onMouseLeave", ["mouseout", "mouseover"]);
Co("onPointerEnter", ["pointerout", "pointerover"]);
Co("onPointerLeave", ["pointerout", "pointerover"]);
Fr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Fr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Fr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Fr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ss =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  j0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ss));
function Ad(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Ny(r, t, void 0, e), (e.currentTarget = null));
}
function _h(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && o.isPropagationStopped())) break e;
          (Ad(o, a, c), (s = l));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && o.isPropagationStopped())
          )
            break e;
          (Ad(o, a, c), (s = l));
        }
    }
  }
  if (Wi) throw ((e = Gl), (Wi = !1), (Gl = null), e);
}
function me(e, t) {
  var n = t[rc];
  n === void 0 && (n = t[rc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jh(t, e, 2, !1), n.add(r));
}
function fl(e, t, n) {
  var r = 0;
  (t && (r |= 4), jh(n, e, r, t));
}
var pi = "_reactListening" + Math.random().toString(36).slice(2);
function Es(e) {
  if (!e[pi]) {
    ((e[pi] = !0),
      Ap.forEach(function (n) {
        n !== "selectionchange" && (j0.has(n) || fl(n, !1, e), fl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pi] || ((t[pi] = !0), fl("selectionchange", !1, t));
  }
}
function jh(e, t, n, r) {
  switch (dh(t)) {
    case 1:
      var o = By;
      break;
    case 4:
      o = Vy;
      break;
    default:
      o = eu;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ql ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function pl(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null;) {
            var l = i.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = i.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null;) {
          if (((i = kr(a)), i === null)) return;
          if (((l = i.tag), l === 5 || l === 6)) {
            r = s = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Xp(function () {
    var c = s,
      p = qc(n),
      m = [];
    e: {
      var g = Nh.get(e);
      if (g !== void 0) {
        var d = nu,
          w = e;
        switch (e) {
          case "keypress":
            if (Ri(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = o0;
            break;
          case "focusin":
            ((w = "focus"), (d = il));
            break;
          case "focusout":
            ((w = "blur"), (d = il));
            break;
          case "beforeblur":
          case "afterblur":
            d = il;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = Sd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Qy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = a0;
            break;
          case kh:
          case Sh:
          case Ch:
            d = Yy;
            break;
          case Eh:
            d = c0;
            break;
          case "scroll":
            d = Wy;
            break;
          case "wheel":
            d = d0;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = Xy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Ed;
        }
        var x = (t & 4) !== 0,
          b = !x && e === "scroll",
          f = x ? (g !== null ? g + "Capture" : null) : g;
        x = [];
        for (var h = c, v; h !== null;) {
          v = h;
          var k = v.stateNode;
          if (
            (v.tag === 5 &&
              k !== null &&
              ((v = k),
              f !== null && ((k = xs(h, f)), k != null && x.push(Ns(h, k, v)))),
            b)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((g = new d(g, w, null, n, p)), m.push({ event: g, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (d = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Wl &&
            (w = n.relatedTarget || n.fromElement) &&
            (kr(w) || w[Sn]))
        )
          break e;
        if (
          (d || g) &&
          ((g =
            p.window === p
              ? p
              : (g = p.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
          d
            ? ((w = n.relatedTarget || n.toElement),
              (d = c),
              (w = w ? kr(w) : null),
              w !== null &&
                ((b = Ur(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((d = null), (w = c)),
          d !== w)
        ) {
          if (
            ((x = Sd),
            (k = "onMouseLeave"),
            (f = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Ed),
              (k = "onPointerLeave"),
              (f = "onPointerEnter"),
              (h = "pointer")),
            (b = d == null ? g : Jr(d)),
            (v = w == null ? g : Jr(w)),
            (g = new x(k, h + "leave", d, n, p)),
            (g.target = b),
            (g.relatedTarget = v),
            (k = null),
            kr(p) === c &&
              ((x = new x(f, h + "enter", w, n, p)),
              (x.target = v),
              (x.relatedTarget = b),
              (k = x)),
            (b = k),
            d && w)
          )
            t: {
              for (x = d, f = w, h = 0, v = x; v; v = Hr(v)) h++;
              for (v = 0, k = f; k; k = Hr(k)) v++;
              for (; 0 < h - v;) ((x = Hr(x)), h--);
              for (; 0 < v - h;) ((f = Hr(f)), v--);
              for (; h--;) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                ((x = Hr(x)), (f = Hr(f)));
              }
              x = null;
            }
          else x = null;
          (d !== null && Md(m, g, d, x, !1),
            w !== null && b !== null && Md(m, b, w, x, !0));
        }
      }
      e: {
        if (
          ((g = c ? Jr(c) : window),
          (d = g.nodeName && g.nodeName.toLowerCase()),
          d === "select" || (d === "input" && g.type === "file"))
        )
          var S = y0;
        else if (jd(g))
          if (vh) S = k0;
          else {
            S = w0;
            var E = x0;
          }
        else
          (d = g.nodeName) &&
            d.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (S = b0);
        if (S && (S = S(e, c))) {
          gh(m, S, n, p);
          break e;
        }
        (E && E(e, g, c),
          e === "focusout" &&
            (E = g._wrapperState) &&
            E.controlled &&
            g.type === "number" &&
            Dl(g, "number", g.value));
      }
      switch (((E = c ? Jr(c) : window), e)) {
        case "focusin":
          (jd(E) || E.contentEditable === "true") &&
            ((Xr = E), (Xl = c), (ds = null));
          break;
        case "focusout":
          ds = Xl = Xr = null;
          break;
        case "mousedown":
          Zl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Zl = !1), Id(m, n, p));
          break;
        case "selectionchange":
          if (E0) break;
        case "keydown":
        case "keyup":
          Id(m, n, p);
      }
      var N;
      if (ou)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        qr
          ? hh(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      (j &&
        (ph &&
          n.locale !== "ko" &&
          (qr || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && qr && (N = fh())
            : ((Gn = p),
              (tu = "value" in Gn ? Gn.value : Gn.textContent),
              (qr = !0))),
        (E = Yi(c, j)),
        0 < E.length &&
          ((j = new Cd(j, e, null, n, p)),
          m.push({ event: j, listeners: E }),
          N ? (j.data = N) : ((N = mh(n)), N !== null && (j.data = N)))),
        (N = p0 ? h0(e, n) : m0(e, n)) &&
          ((c = Yi(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new Cd("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: c }),
            (p.data = N))));
    }
    _h(m, t);
  });
}
function Ns(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yi(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var o = e,
      s = o.stateNode;
    (o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = xs(e, n)),
      s != null && r.unshift(Ns(e, s, o)),
      (s = xs(e, t)),
      s != null && r.push(Ns(e, s, o))),
      (e = e.return));
  }
  return r;
}
function Hr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Md(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r;) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((l = xs(n, s)), l != null && i.unshift(Ns(n, l, a)))
        : o || ((l = xs(n, s)), l != null && i.push(Ns(n, l, a)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var P0 = /\r\n?/g,
  T0 = /\u0000|\uFFFD/g;
function $d(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      P0,
      `
`,
    )
    .replace(T0, "");
}
function hi(e, t, n) {
  if (((t = $d(t)), $d(e) !== t && n)) throw Error(L(425));
}
function qi() {}
var Jl = null,
  ec = null;
function tc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var nc = typeof setTimeout == "function" ? setTimeout : void 0,
  R0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zd = typeof Promise == "function" ? Promise : void 0,
  L0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof zd < "u"
        ? function (e) {
            return zd.resolve(null).then(e).catch(I0);
          }
        : nc;
function I0(e) {
  setTimeout(function () {
    throw e;
  });
}
function hl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), ks(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ks(t);
}
function Jn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Dd(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ao = Math.random().toString(36).slice(2),
  Jt = "__reactFiber$" + Ao,
  _s = "__reactProps$" + Ao,
  Sn = "__reactContainer$" + Ao,
  rc = "__reactEvents$" + Ao,
  O0 = "__reactListeners$" + Ao,
  A0 = "__reactHandles$" + Ao;
function kr(e) {
  var t = e[Jt];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[Sn] || n[Jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Dd(e); e !== null;) {
          if ((n = e[Jt])) return n;
          e = Dd(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Hs(e) {
  return (
    (e = e[Jt] || e[Sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Na(e) {
  return e[_s] || null;
}
var oc = [],
  eo = -1;
function pr(e) {
  return { current: e };
}
function ge(e) {
  0 > eo || ((e.current = oc[eo]), (oc[eo] = null), eo--);
}
function pe(e, t) {
  (eo++, (oc[eo] = e.current), (e.current = t));
}
var ar = {},
  Be = pr(ar),
  rt = pr(!1),
  Or = ar;
function Eo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ar;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ot(e) {
  return ((e = e.childContextTypes), e != null);
}
function Xi() {
  (ge(rt), ge(Be));
}
function Fd(e, t, n) {
  if (Be.current !== ar) throw Error(L(168));
  (pe(Be, t), pe(rt, n));
}
function Ph(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, xy(e) || "Unknown", o));
  return be({}, n, r);
}
function Zi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ar),
    (Or = Be.current),
    pe(Be, e),
    pe(rt, rt.current),
    !0
  );
}
function Ud(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  (n
    ? ((e = Ph(e, t, Or)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(rt),
      ge(Be),
      pe(Be, e))
    : ge(rt),
    pe(rt, n));
}
var vn = null,
  _a = !1,
  ml = !1;
function Th(e) {
  vn === null ? (vn = [e]) : vn.push(e);
}
function M0(e) {
  ((_a = !0), Th(e));
}
function hr() {
  if (!ml && vn !== null) {
    ml = !0;
    var e = 0,
      t = ue;
    try {
      var n = vn;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((vn = null), (_a = !1));
    } catch (o) {
      throw (vn !== null && (vn = vn.slice(e + 1)), th(Xc, hr), o);
    } finally {
      ((ue = t), (ml = !1));
    }
  }
  return null;
}
var to = [],
  no = 0,
  Ji = null,
  ea = 0,
  wt = [],
  bt = 0,
  Ar = null,
  xn = 1,
  wn = "";
function yr(e, t) {
  ((to[no++] = ea), (to[no++] = Ji), (Ji = e), (ea = t));
}
function Rh(e, t, n) {
  ((wt[bt++] = xn), (wt[bt++] = wn), (wt[bt++] = Ar), (Ar = e));
  var r = xn;
  e = wn;
  var o = 32 - Dt(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var s = 32 - Dt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    ((s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (xn = (1 << (32 - Dt(t) + o)) | (n << o) | r),
      (wn = s + e));
  } else ((xn = (1 << s) | (n << o) | r), (wn = e));
}
function iu(e) {
  e.return !== null && (yr(e, 1), Rh(e, 1, 0));
}
function au(e) {
  for (; e === Ji;)
    ((Ji = to[--no]), (to[no] = null), (ea = to[--no]), (to[no] = null));
  for (; e === Ar;)
    ((Ar = wt[--bt]),
      (wt[bt] = null),
      (wn = wt[--bt]),
      (wt[bt] = null),
      (xn = wt[--bt]),
      (wt[bt] = null));
}
var ut = null,
  ct = null,
  ve = !1,
  zt = null;
function Lh(e, t) {
  var n = kt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Bd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ut = e), (ct = Jn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ut = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ar !== null ? { id: xn, overflow: wn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = kt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ut = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function sc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ic(e) {
  if (ve) {
    var t = ct;
    if (t) {
      var n = t;
      if (!Bd(e, t)) {
        if (sc(e)) throw Error(L(418));
        t = Jn(n.nextSibling);
        var r = ut;
        t && Bd(e, t)
          ? Lh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (ut = e));
      }
    } else {
      if (sc(e)) throw Error(L(418));
      ((e.flags = (e.flags & -4097) | 2), (ve = !1), (ut = e));
    }
  }
}
function Vd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  ut = e;
}
function mi(e) {
  if (e !== ut) return !1;
  if (!ve) return (Vd(e), (ve = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !tc(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (sc(e)) throw (Ih(), Error(L(418)));
    for (; t;) (Lh(e, t), (t = Jn(t.nextSibling)));
  }
  if ((Vd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = Jn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = ut ? Jn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ih() {
  for (var e = ct; e;) e = Jn(e.nextSibling);
}
function No() {
  ((ct = ut = null), (ve = !1));
}
function lu(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
var $0 = jn.ReactCurrentBatchConfig;
function Yo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            i === null ? delete a[s] : (a[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function gi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Wd(e) {
  var t = e._init;
  return t(e._payload);
}
function Oh(e) {
  function t(f, h) {
    if (e) {
      var v = f.deletions;
      v === null ? ((f.deletions = [h]), (f.flags |= 16)) : v.push(h);
    }
  }
  function n(f, h) {
    if (!e) return null;
    for (; h !== null;) (t(f, h), (h = h.sibling));
    return null;
  }
  function r(f, h) {
    for (f = new Map(); h !== null;)
      (h.key !== null ? f.set(h.key, h) : f.set(h.index, h), (h = h.sibling));
    return f;
  }
  function o(f, h) {
    return ((f = rr(f, h)), (f.index = 0), (f.sibling = null), f);
  }
  function s(f, h, v) {
    return (
      (f.index = v),
      e
        ? ((v = f.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((f.flags |= 2), h) : v)
            : ((f.flags |= 2), h))
        : ((f.flags |= 1048576), h)
    );
  }
  function i(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function a(f, h, v, k) {
    return h === null || h.tag !== 6
      ? ((h = kl(v, f.mode, k)), (h.return = f), h)
      : ((h = o(h, v)), (h.return = f), h);
  }
  function l(f, h, v, k) {
    var S = v.type;
    return S === Yr
      ? p(f, h, v.props.children, k, v.key)
      : h !== null &&
          (h.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === $n &&
              Wd(S) === h.type))
        ? ((k = o(h, v.props)), (k.ref = Yo(f, h, v)), (k.return = f), k)
        : ((k = zi(v.type, v.key, v.props, null, f.mode, k)),
          (k.ref = Yo(f, h, v)),
          (k.return = f),
          k);
  }
  function c(f, h, v, k) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = Sl(v, f.mode, k)), (h.return = f), h)
      : ((h = o(h, v.children || [])), (h.return = f), h);
  }
  function p(f, h, v, k, S) {
    return h === null || h.tag !== 7
      ? ((h = Ir(v, f.mode, k, S)), (h.return = f), h)
      : ((h = o(h, v)), (h.return = f), h);
  }
  function m(f, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = kl("" + h, f.mode, v)), (h.return = f), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case si:
          return (
            (v = zi(h.type, h.key, h.props, null, f.mode, v)),
            (v.ref = Yo(f, null, h)),
            (v.return = f),
            v
          );
        case Kr:
          return ((h = Sl(h, f.mode, v)), (h.return = f), h);
        case $n:
          var k = h._init;
          return m(f, k(h._payload), v);
      }
      if (rs(h) || Wo(h))
        return ((h = Ir(h, f.mode, v, null)), (h.return = f), h);
      gi(f, h);
    }
    return null;
  }
  function g(f, h, v, k) {
    var S = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return S !== null ? null : a(f, h, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case si:
          return v.key === S ? l(f, h, v, k) : null;
        case Kr:
          return v.key === S ? c(f, h, v, k) : null;
        case $n:
          return ((S = v._init), g(f, h, S(v._payload), k));
      }
      if (rs(v) || Wo(v)) return S !== null ? null : p(f, h, v, k, null);
      gi(f, v);
    }
    return null;
  }
  function d(f, h, v, k, S) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return ((f = f.get(v) || null), a(h, f, "" + k, S));
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case si:
          return (
            (f = f.get(k.key === null ? v : k.key) || null),
            l(h, f, k, S)
          );
        case Kr:
          return (
            (f = f.get(k.key === null ? v : k.key) || null),
            c(h, f, k, S)
          );
        case $n:
          var E = k._init;
          return d(f, h, v, E(k._payload), S);
      }
      if (rs(k) || Wo(k)) return ((f = f.get(v) || null), p(h, f, k, S, null));
      gi(h, k);
    }
    return null;
  }
  function w(f, h, v, k) {
    for (
      var S = null, E = null, N = h, j = (h = 0), M = null;
      N !== null && j < v.length;
      j++
    ) {
      N.index > j ? ((M = N), (N = null)) : (M = N.sibling);
      var O = g(f, N, v[j], k);
      if (O === null) {
        N === null && (N = M);
        break;
      }
      (e && N && O.alternate === null && t(f, N),
        (h = s(O, h, j)),
        E === null ? (S = O) : (E.sibling = O),
        (E = O),
        (N = M));
    }
    if (j === v.length) return (n(f, N), ve && yr(f, j), S);
    if (N === null) {
      for (; j < v.length; j++)
        ((N = m(f, v[j], k)),
          N !== null &&
            ((h = s(N, h, j)),
            E === null ? (S = N) : (E.sibling = N),
            (E = N)));
      return (ve && yr(f, j), S);
    }
    for (N = r(f, N); j < v.length; j++)
      ((M = d(N, f, j, v[j], k)),
        M !== null &&
          (e && M.alternate !== null && N.delete(M.key === null ? j : M.key),
          (h = s(M, h, j)),
          E === null ? (S = M) : (E.sibling = M),
          (E = M)));
    return (
      e &&
        N.forEach(function (D) {
          return t(f, D);
        }),
      ve && yr(f, j),
      S
    );
  }
  function x(f, h, v, k) {
    var S = Wo(v);
    if (typeof S != "function") throw Error(L(150));
    if (((v = S.call(v)), v == null)) throw Error(L(151));
    for (
      var E = (S = null), N = h, j = (h = 0), M = null, O = v.next();
      N !== null && !O.done;
      j++, O = v.next()
    ) {
      N.index > j ? ((M = N), (N = null)) : (M = N.sibling);
      var D = g(f, N, O.value, k);
      if (D === null) {
        N === null && (N = M);
        break;
      }
      (e && N && D.alternate === null && t(f, N),
        (h = s(D, h, j)),
        E === null ? (S = D) : (E.sibling = D),
        (E = D),
        (N = M));
    }
    if (O.done) return (n(f, N), ve && yr(f, j), S);
    if (N === null) {
      for (; !O.done; j++, O = v.next())
        ((O = m(f, O.value, k)),
          O !== null &&
            ((h = s(O, h, j)),
            E === null ? (S = O) : (E.sibling = O),
            (E = O)));
      return (ve && yr(f, j), S);
    }
    for (N = r(f, N); !O.done; j++, O = v.next())
      ((O = d(N, f, j, O.value, k)),
        O !== null &&
          (e && O.alternate !== null && N.delete(O.key === null ? j : O.key),
          (h = s(O, h, j)),
          E === null ? (S = O) : (E.sibling = O),
          (E = O)));
    return (
      e &&
        N.forEach(function (F) {
          return t(f, F);
        }),
      ve && yr(f, j),
      S
    );
  }
  function b(f, h, v, k) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Yr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case si:
          e: {
            for (var S = v.key, E = h; E !== null;) {
              if (E.key === S) {
                if (((S = v.type), S === Yr)) {
                  if (E.tag === 7) {
                    (n(f, E.sibling),
                      (h = o(E, v.props.children)),
                      (h.return = f),
                      (f = h));
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === $n &&
                    Wd(S) === E.type)
                ) {
                  (n(f, E.sibling),
                    (h = o(E, v.props)),
                    (h.ref = Yo(f, E, v)),
                    (h.return = f),
                    (f = h));
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            v.type === Yr
              ? ((h = Ir(v.props.children, f.mode, k, v.key)),
                (h.return = f),
                (f = h))
              : ((k = zi(v.type, v.key, v.props, null, f.mode, k)),
                (k.ref = Yo(f, h, v)),
                (k.return = f),
                (f = k));
          }
          return i(f);
        case Kr:
          e: {
            for (E = v.key; h !== null;) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  (n(f, h.sibling),
                    (h = o(h, v.children || [])),
                    (h.return = f),
                    (f = h));
                  break e;
                } else {
                  n(f, h);
                  break;
                }
              else t(f, h);
              h = h.sibling;
            }
            ((h = Sl(v, f.mode, k)), (h.return = f), (f = h));
          }
          return i(f);
        case $n:
          return ((E = v._init), b(f, h, E(v._payload), k));
      }
      if (rs(v)) return w(f, h, v, k);
      if (Wo(v)) return x(f, h, v, k);
      gi(f, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(f, h.sibling), (h = o(h, v)), (h.return = f), (f = h))
          : (n(f, h), (h = kl(v, f.mode, k)), (h.return = f), (f = h)),
        i(f))
      : n(f, h);
  }
  return b;
}
var _o = Oh(!0),
  Ah = Oh(!1),
  ta = pr(null),
  na = null,
  ro = null,
  cu = null;
function uu() {
  cu = ro = na = null;
}
function du(e) {
  var t = ta.current;
  (ge(ta), (e._currentValue = t));
}
function ac(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function fo(e, t) {
  ((na = e),
    (cu = ro = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (nt = !0), (e.firstContext = null)));
}
function Ct(e) {
  var t = e._currentValue;
  if (cu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ro === null)) {
      if (na === null) throw Error(L(308));
      ((ro = e), (na.dependencies = { lanes: 0, firstContext: e }));
    } else ro = ro.next = e;
  return t;
}
var Sr = null;
function fu(e) {
  Sr === null ? (Sr = [e]) : Sr.push(e);
}
function Mh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), fu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Cn(e, r)
  );
}
function Cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var zn = !1;
function pu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $h(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function bn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function er(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Cn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), fu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Cn(e, n)
  );
}
function Li(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Zc(e, n));
  }
}
function Hd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (o = s = i) : (s = s.next = i), (n = n.next));
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ra(e, t, n, r) {
  var o = e.updateQueue;
  zn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      c = l.next;
    ((l.next = null), i === null ? (s = c) : (i.next = c), (i = l));
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== i &&
        (a === null ? (p.firstBaseUpdate = c) : (a.next = c),
        (p.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var m = o.baseState;
    ((i = 0), (p = c = l = null), (a = s));
    do {
      var g = a.lane,
        d = a.eventTime;
      if ((r & g) === g) {
        p !== null &&
          (p = p.next =
            {
              eventTime: d,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            x = a;
          switch (((g = t), (d = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                m = w.call(d, m, g);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (g = typeof w == "function" ? w.call(d, m, g) : w),
                g == null)
              )
                break e;
              m = be({}, m, g);
              break e;
            case 2:
              zn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [a]) : g.push(a));
      } else
        ((d = {
          eventTime: d,
          lane: g,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((c = p = d), (l = m)) : (p = p.next = d),
          (i |= g));
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        ((g = a),
          (a = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (p === null && (l = m),
      (o.baseState = l),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((i |= o.lane), (o = o.next));
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (($r |= i), (e.lanes = i), (e.memoizedState = m));
  }
}
function Qd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var Qs = {},
  nn = pr(Qs),
  js = pr(Qs),
  Ps = pr(Qs);
function Cr(e) {
  if (e === Qs) throw Error(L(174));
  return e;
}
function hu(e, t) {
  switch ((pe(Ps, t), pe(js, e), pe(nn, Qs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ul(t, e)));
  }
  (ge(nn), pe(nn, t));
}
function jo() {
  (ge(nn), ge(js), ge(Ps));
}
function zh(e) {
  Cr(Ps.current);
  var t = Cr(nn.current),
    n = Ul(t, e.type);
  t !== n && (pe(js, e), pe(nn, n));
}
function mu(e) {
  js.current === e && (ge(nn), ge(js));
}
var xe = pr(0);
function oa(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var gl = [];
function gu() {
  for (var e = 0; e < gl.length; e++)
    gl[e]._workInProgressVersionPrimary = null;
  gl.length = 0;
}
var Ii = jn.ReactCurrentDispatcher,
  vl = jn.ReactCurrentBatchConfig,
  Mr = 0,
  we = null,
  Pe = null,
  Le = null,
  sa = !1,
  fs = !1,
  Ts = 0,
  z0 = 0;
function ze() {
  throw Error(L(321));
}
function vu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ut(e[n], t[n])) return !1;
  return !0;
}
function yu(e, t, n, r, o, s) {
  if (
    ((Mr = s),
    (we = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ii.current = e === null || e.memoizedState === null ? B0 : V0),
    (e = n(r, o)),
    fs)
  ) {
    s = 0;
    do {
      if (((fs = !1), (Ts = 0), 25 <= s)) throw Error(L(301));
      ((s += 1),
        (Le = Pe = null),
        (t.updateQueue = null),
        (Ii.current = W0),
        (e = n(r, o)));
    } while (fs);
  }
  if (
    ((Ii.current = ia),
    (t = Pe !== null && Pe.next !== null),
    (Mr = 0),
    (Le = Pe = we = null),
    (sa = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function xu() {
  var e = Ts !== 0;
  return ((Ts = 0), e);
}
function Yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Le === null ? (we.memoizedState = Le = e) : (Le = Le.next = e), Le);
}
function Et() {
  if (Pe === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = Le === null ? we.memoizedState : Le.next;
  if (t !== null) ((Le = t), (Pe = e));
  else {
    if (e === null) throw Error(L(310));
    ((Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Le === null ? (we.memoizedState = Le = e) : (Le = Le.next = e));
  }
  return Le;
}
function Rs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yl(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      ((o.next = s.next), (s.next = i));
    }
    ((r.baseQueue = o = s), (n.pending = null));
  }
  if (o !== null) {
    ((s = o.next), (r = r.baseState));
    var a = (i = null),
      l = null,
      c = s;
    do {
      var p = c.lane;
      if ((Mr & p) === p)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var m = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (l === null ? ((a = l = m), (i = r)) : (l = l.next = m),
          (we.lanes |= p),
          ($r |= p));
      }
      c = c.next;
    } while (c !== null && c !== s);
    (l === null ? (i = r) : (l.next = a),
      Ut(r, t.memoizedState) || (nt = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((s = o.lane), (we.lanes |= s), ($r |= s), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xl(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do ((s = e(s, i.action)), (i = i.next));
    while (i !== o);
    (Ut(s, t.memoizedState) || (nt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Dh() {}
function Fh(e, t) {
  var n = we,
    r = Et(),
    o = t(),
    s = !Ut(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (nt = !0)),
    (r = r.queue),
    wu(Vh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ls(9, Bh.bind(null, n, r, o, t), void 0, null),
      Ie === null)
    )
      throw Error(L(349));
    Mr & 30 || Uh(n, t, o);
  }
  return o;
}
function Uh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Bh(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Wh(t) && Hh(e));
}
function Vh(e, t, n) {
  return n(function () {
    Wh(t) && Hh(e);
  });
}
function Wh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ut(e, n);
  } catch {
    return !0;
  }
}
function Hh(e) {
  var t = Cn(e, 1);
  t !== null && Ft(t, e, 1, -1);
}
function Gd(e) {
  var t = Yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = U0.bind(null, we, e)),
    [t.memoizedState, e]
  );
}
function Ls(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Qh() {
  return Et().memoizedState;
}
function Oi(e, t, n, r) {
  var o = Yt();
  ((we.flags |= e),
    (o.memoizedState = Ls(1 | t, n, void 0, r === void 0 ? null : r)));
}
function ja(e, t, n, r) {
  var o = Et();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Pe !== null) {
    var i = Pe.memoizedState;
    if (((s = i.destroy), r !== null && vu(r, i.deps))) {
      o.memoizedState = Ls(t, n, s, r);
      return;
    }
  }
  ((we.flags |= e), (o.memoizedState = Ls(1 | t, n, s, r)));
}
function Kd(e, t) {
  return Oi(8390656, 8, e, t);
}
function wu(e, t) {
  return ja(2048, 8, e, t);
}
function Gh(e, t) {
  return ja(4, 2, e, t);
}
function Kh(e, t) {
  return ja(4, 4, e, t);
}
function Yh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function qh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    ja(4, 4, Yh.bind(null, t, e), n)
  );
}
function bu() {}
function Xh(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zh(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jh(e, t, n) {
  return Mr & 21
    ? (Ut(n, t) || ((n = oh()), (we.lanes |= n), ($r |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = n));
}
function D0(e, t) {
  var n = ue;
  ((ue = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = vl.transition;
  vl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ue = n), (vl.transition = r));
  }
}
function em() {
  return Et().memoizedState;
}
function F0(e, t, n) {
  var r = nr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tm(e))
  )
    nm(t, n);
  else if (((n = Mh(e, t, n, r)), n !== null)) {
    var o = Ge();
    (Ft(n, e, r, o), rm(n, t, r));
  }
}
function U0(e, t, n) {
  var r = nr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tm(e)) nm(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Ut(a, i))) {
          var l = t.interleaved;
          (l === null
            ? ((o.next = o), fu(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Mh(e, t, o, r)),
      n !== null && ((o = Ge()), Ft(n, e, r, o), rm(n, t, r)));
  }
}
function tm(e) {
  var t = e.alternate;
  return e === we || (t !== null && t === we);
}
function nm(e, t) {
  fs = sa = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function rm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Zc(e, n));
  }
}
var ia = {
    readContext: Ct,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  B0 = {
    readContext: Ct,
    useCallback: function (e, t) {
      return ((Yt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ct,
    useEffect: Kd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Oi(4194308, 4, Yh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Oi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Oi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Yt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = F0.bind(null, we, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Yt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Gd,
    useDebugValue: bu,
    useDeferredValue: function (e) {
      return (Yt().memoizedState = e);
    },
    useTransition: function () {
      var e = Gd(!1),
        t = e[0];
      return ((e = D0.bind(null, e[1])), (Yt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = we,
        o = Yt();
      if (ve) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Ie === null)) throw Error(L(349));
        Mr & 30 || Uh(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        Kd(Vh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ls(9, Bh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Yt(),
        t = Ie.identifierPrefix;
      if (ve) {
        var n = wn,
          r = xn;
        ((n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ts++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = z0++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  V0 = {
    readContext: Ct,
    useCallback: Xh,
    useContext: Ct,
    useEffect: wu,
    useImperativeHandle: qh,
    useInsertionEffect: Gh,
    useLayoutEffect: Kh,
    useMemo: Zh,
    useReducer: yl,
    useRef: Qh,
    useState: function () {
      return yl(Rs);
    },
    useDebugValue: bu,
    useDeferredValue: function (e) {
      var t = Et();
      return Jh(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = yl(Rs)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: Dh,
    useSyncExternalStore: Fh,
    useId: em,
    unstable_isNewReconciler: !1,
  },
  W0 = {
    readContext: Ct,
    useCallback: Xh,
    useContext: Ct,
    useEffect: wu,
    useImperativeHandle: qh,
    useInsertionEffect: Gh,
    useLayoutEffect: Kh,
    useMemo: Zh,
    useReducer: xl,
    useRef: Qh,
    useState: function () {
      return xl(Rs);
    },
    useDebugValue: bu,
    useDeferredValue: function (e) {
      var t = Et();
      return Pe === null ? (t.memoizedState = e) : Jh(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = xl(Rs)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: Dh,
    useSyncExternalStore: Fh,
    useId: em,
    unstable_isNewReconciler: !1,
  };
function It(e, t) {
  if (e && e.defaultProps) {
    ((t = be({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function lc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : be({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Pa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ur(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      o = nr(e),
      s = bn(r, o);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = er(e, s, o)),
      t !== null && (Ft(t, e, o, r), Li(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      o = nr(e),
      s = bn(r, o);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = er(e, s, o)),
      t !== null && (Ft(t, e, o, r), Li(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ge(),
      r = nr(e),
      o = bn(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = er(e, o, r)),
      t !== null && (Ft(t, e, r, n), Li(t, e, r)));
  },
};
function Yd(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Cs(n, r) || !Cs(o, s)
        : !0
  );
}
function om(e, t, n) {
  var r = !1,
    o = ar,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ct(s))
      : ((o = ot(t) ? Or : Be.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Eo(e, o) : ar)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function qd(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pa.enqueueReplaceState(t, t.state, null));
}
function cc(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), pu(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (o.context = Ct(s))
    : ((s = ot(t) ? Or : Be.current), (o.context = Eo(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (lc(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Pa.enqueueReplaceState(o, o.state, null),
      ra(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Po(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += yy(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function uc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var H0 = typeof WeakMap == "function" ? WeakMap : Map;
function sm(e, t, n) {
  ((n = bn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (la || ((la = !0), (wc = r)), uc(e, t));
    }),
    n
  );
}
function im(e, t, n) {
  ((n = bn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        uc(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (uc(e, t),
          typeof r != "function" &&
            (tr === null ? (tr = new Set([this])) : tr.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Xd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new H0();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = sx.bind(null, e, t, n)), t.then(e, e));
}
function Zd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Jd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = bn(-1, 1)), (t.tag = 2), er(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Q0 = jn.ReactCurrentOwner,
  nt = !1;
function He(e, t, n, r) {
  t.child = e === null ? Ah(t, null, n, r) : _o(t, e.child, n, r);
}
function ef(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    fo(t, o),
    (r = yu(e, t, n, r, s, o)),
    (n = xu()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        En(e, t, o))
      : (ve && n && iu(t), (t.flags |= 1), He(e, t, r, o), t.child)
  );
}
function tf(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Pu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), am(e, t, s, r, o))
      : ((e = zi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Cs), n(i, r) && e.ref === t.ref)
    )
      return En(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = rr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function am(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Cs(s, r) && e.ref === t.ref)
      if (((nt = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (nt = !0);
      else return ((t.lanes = e.lanes), En(e, t, o));
  }
  return dc(e, t, n, r, o);
}
function lm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe(so, at),
        (at |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          pe(so, at),
          (at |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        pe(so, at),
        (at |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      pe(so, at),
      (at |= r));
  return (He(e, t, o, n), t.child);
}
function cm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function dc(e, t, n, r, o) {
  var s = ot(n) ? Or : Be.current;
  return (
    (s = Eo(t, s)),
    fo(t, o),
    (n = yu(e, t, n, r, s, o)),
    (r = xu()),
    e !== null && !nt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        En(e, t, o))
      : (ve && r && iu(t), (t.flags |= 1), He(e, t, n, o), t.child)
  );
}
function nf(e, t, n, r, o) {
  if (ot(n)) {
    var s = !0;
    Zi(t);
  } else s = !1;
  if ((fo(t, o), t.stateNode === null))
    (Ai(e, t), om(t, n, r), cc(t, n, r, o), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var l = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ct(c))
      : ((c = ot(n) ? Or : Be.current), (c = Eo(t, c)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && qd(t, i, r, c)),
      (zn = !1));
    var g = t.memoizedState;
    ((i.state = g),
      ra(t, r, i, o),
      (l = t.memoizedState),
      a !== r || g !== l || rt.current || zn
        ? (typeof p == "function" && (lc(t, n, p, r), (l = t.memoizedState)),
          (a = zn || Yd(t, n, a, r, g, l, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (i.props = r),
          (i.state = l),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      $h(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : It(t.type, a)),
      (i.props = c),
      (m = t.pendingProps),
      (g = i.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ct(l))
        : ((l = ot(n) ? Or : Be.current), (l = Eo(t, l))));
    var d = n.getDerivedStateFromProps;
    ((p =
      typeof d == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== m || g !== l) && qd(t, i, r, l)),
      (zn = !1),
      (g = t.memoizedState),
      (i.state = g),
      ra(t, r, i, o));
    var w = t.memoizedState;
    a !== m || g !== w || rt.current || zn
      ? (typeof d == "function" && (lc(t, n, d, r), (w = t.memoizedState)),
        (c = zn || Yd(t, n, c, r, g, w, l) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, l),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, l)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = l),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fc(e, t, n, r, s, o);
}
function fc(e, t, n, r, o, s) {
  cm(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (o && Ud(t, n, !1), En(e, t, s));
  ((r = t.stateNode), (Q0.current = t));
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = _o(t, e.child, null, s)), (t.child = _o(t, null, a, s)))
      : He(e, t, a, s),
    (t.memoizedState = r.state),
    o && Ud(t, n, !0),
    t.child
  );
}
function um(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Fd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fd(e, t.context, !1),
    hu(e, t.containerInfo));
}
function rf(e, t, n, r, o) {
  return (No(), lu(o), (t.flags |= 256), He(e, t, n, r), t.child);
}
var pc = { dehydrated: null, treeContext: null, retryLane: 0 };
function hc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dm(e, t, n) {
  var r = t.pendingProps,
    o = xe.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    pe(xe, o & 1),
    e === null)
  )
    return (
      ic(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = La(i, r, 0, null)),
              (e = Ir(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = hc(n)),
              (t.memoizedState = pc),
              e)
            : ku(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return G0(e, t, i, r, a, o, n);
  if (s) {
    ((s = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = rr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (s = rr(a, s)) : ((s = Ir(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? hc(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = pc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = rr(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ku(e, t) {
  return (
    (t = La({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vi(e, t, n, r) {
  return (
    r !== null && lu(r),
    _o(t, e.child, null, n),
    (e = ku(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function G0(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = wl(Error(L(422)))), vi(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (o = t.mode),
          (r = La({ mode: "visible", children: r.children }, o, 0, null)),
          (s = Ir(s, o, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && _o(t, e.child, null, i),
          (t.child.memoizedState = hc(i)),
          (t.memoizedState = pc),
          s);
  if (!(t.mode & 1)) return vi(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(L(419))),
      (r = wl(s, r, void 0)),
      vi(e, t, i, r)
    );
  }
  if (((a = (i & e.childLanes) !== 0), nt || a)) {
    if (((r = Ie), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), Cn(e, o), Ft(r, e, o, -1)));
    }
    return (ju(), (r = wl(Error(L(421)))), vi(e, t, i, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ix.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (ct = Jn(o.nextSibling)),
      (ut = t),
      (ve = !0),
      (zt = null),
      e !== null &&
        ((wt[bt++] = xn),
        (wt[bt++] = wn),
        (wt[bt++] = Ar),
        (xn = e.id),
        (wn = e.overflow),
        (Ar = t)),
      (t = ku(t, r.children)),
      (t.flags |= 4096),
      t);
}
function of(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ac(e.return, t, n));
}
function bl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function fm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((He(e, t, r.children, n), (r = xe.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && of(e, n, t);
        else if (e.tag === 19) of(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((pe(xe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null;)
          ((e = n.alternate),
            e !== null && oa(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          bl(t, !1, o, n, s));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null;) {
          if (((e = o.alternate), e !== null && oa(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        bl(t, !0, n, null, s);
        break;
      case "together":
        bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ai(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function En(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($r |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = rr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function K0(e, t, n) {
  switch (t.tag) {
    case 3:
      (um(t), No());
      break;
    case 5:
      zh(t);
      break;
    case 1:
      ot(t.type) && Zi(t);
      break;
    case 4:
      hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (pe(ta, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(xe, xe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? dm(e, t, n)
            : (pe(xe, xe.current & 1),
              (e = En(e, t, n)),
              e !== null ? e.sibling : null);
      pe(xe, xe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        pe(xe, xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), lm(e, t, n));
  }
  return En(e, t, n);
}
var pm, mc, hm, mm;
pm = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
mc = function () {};
hm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), Cr(nn.current));
    var s = null;
    switch (n) {
      case "input":
        ((o = $l(e, o)), (r = $l(e, r)), (s = []));
        break;
      case "select":
        ((o = be({}, o, { value: void 0 })),
          (r = be({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((o = Fl(e, o)), (r = Fl(e, r)), (s = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = qi);
    }
    Bl(n, r);
    var i;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (vs.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (l && l.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in l)
              l.hasOwnProperty(i) &&
                a[i] !== l[i] &&
                (n || (n = {}), (n[i] = l[i]));
          } else (n || (s || (s = []), s.push(c, n)), (n = l));
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (vs.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && me("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
mm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qo(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null;)
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null;)
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Y0(e, t, n) {
  var r = t.pendingProps;
  switch ((au(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (De(t), null);
    case 1:
      return (ot(t.type) && Xi(), De(t), null);
    case 3:
      return (
        (r = t.stateNode),
        jo(),
        ge(rt),
        ge(Be),
        gu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), zt !== null && (Sc(zt), (zt = null)))),
        mc(e, t),
        De(t),
        null
      );
    case 5:
      mu(t);
      var o = Cr(Ps.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (hm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return (De(t), null);
        }
        if (((e = Cr(nn.current)), mi(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[Jt] = t), (r[_s] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (me("cancel", r), me("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ss.length; o++) me(ss[o], r);
              break;
            case "source":
              me("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (me("error", r), me("load", r));
              break;
            case "details":
              me("toggle", r);
              break;
            case "input":
              (pd(r, s), me("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                me("invalid", r));
              break;
            case "textarea":
              (md(r, s), me("invalid", r));
          }
          (Bl(n, s), (o = null));
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : vs.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  me("scroll", r);
            }
          switch (n) {
            case "input":
              (ii(r), hd(r, s, !0));
              break;
            case "textarea":
              (ii(r), gd(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = qi);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Jt] = t),
            (e[_s] = r),
            pm(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Vl(n, r)), n)) {
              case "dialog":
                (me("cancel", e), me("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (me("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < ss.length; o++) me(ss[o], e);
                o = r;
                break;
              case "source":
                (me("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (me("error", e), me("load", e), (o = r));
                break;
              case "details":
                (me("toggle", e), (o = r));
                break;
              case "input":
                (pd(e, r), (o = $l(e, r)), me("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = be({}, r, { value: void 0 })),
                  me("invalid", e));
                break;
              case "textarea":
                (md(e, r), (o = Fl(e, r)), me("invalid", e));
                break;
              default:
                o = r;
            }
            (Bl(n, o), (a = o));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Qp(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Wp(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && ys(e, l)
                        : typeof l == "number" && ys(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (vs.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && me("scroll", e)
                          : l != null && Qc(e, s, l, i));
              }
            switch (n) {
              case "input":
                (ii(e), hd(e, r, !1));
                break;
              case "textarea":
                (ii(e), gd(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ir(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? ao(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      ao(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = qi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (De(t), null);
    case 6:
      if (e && t.stateNode != null) mm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Cr(Ps.current)), Cr(nn.current), mi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Jt] = t),
            (s = r.nodeValue !== n) && ((e = ut), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Jt] = t),
            (t.stateNode = r));
      }
      return (De(t), null);
    case 13:
      if (
        (ge(xe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && ct !== null && t.mode & 1 && !(t.flags & 128))
          (Ih(), No(), (t.flags |= 98560), (s = !1));
        else if (((s = mi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(L(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(L(317));
            s[Jt] = t;
          } else
            (No(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (De(t), (s = !1));
        } else (zt !== null && (Sc(zt), (zt = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || xe.current & 1 ? Te === 0 && (Te = 3) : ju())),
          t.updateQueue !== null && (t.flags |= 4),
          De(t),
          null);
    case 4:
      return (
        jo(),
        mc(e, t),
        e === null && Es(t.stateNode.containerInfo),
        De(t),
        null
      );
    case 10:
      return (du(t.type._context), De(t), null);
    case 17:
      return (ot(t.type) && Xi(), De(t), null);
    case 19:
      if ((ge(xe), (s = t.memoizedState), s === null)) return (De(t), null);
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) qo(s, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((i = oa(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    qo(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (pe(xe, (xe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ce() > To &&
            ((t.flags |= 128), (r = !0), qo(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = oa(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qo(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !ve)
            )
              return (De(t), null);
          } else
            2 * Ce() - s.renderingStartTime > To &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qo(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = xe.current),
          pe(xe, r ? (n & 1) | 2 : n & 1),
          t)
        : (De(t), null);
    case 22:
    case 23:
      return (
        _u(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? at & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function q0(e, t) {
  switch ((au(t), t.tag)) {
    case 1:
      return (
        ot(t.type) && Xi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        jo(),
        ge(rt),
        ge(Be),
        gu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (mu(t), null);
    case 13:
      if (
        (ge(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        No();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ge(xe), null);
    case 4:
      return (jo(), null);
    case 10:
      return (du(t.type._context), null);
    case 22:
    case 23:
      return (_u(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var yi = !1,
  Ue = !1,
  X0 = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function oo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function gc(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var sf = !1;
function Z0(e, t) {
  if (((Jl = Gi), (e = wh()), su(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            l = -1,
            c = 0,
            p = 0,
            m = e,
            g = null;
          t: for (;;) {
            for (
              var d;
              m !== n || (o !== 0 && m.nodeType !== 3) || (a = i + o),
                m !== s || (r !== 0 && m.nodeType !== 3) || (l = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (d = m.firstChild) !== null;
            )
              ((g = m), (m = d));
            for (;;) {
              if (m === e) break t;
              if (
                (g === n && ++c === o && (a = i),
                g === s && ++p === r && (l = i),
                (d = m.nextSibling) !== null)
              )
                break;
              ((m = g), (g = m.parentNode));
            }
            m = d;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ec = { focusedElem: e, selectionRange: n }, Gi = !1, B = t; B !== null;)
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (B = e));
    else
      for (; B !== null;) {
        t = B;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    b = w.memoizedState,
                    f = t.stateNode,
                    h = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : It(t.type, x),
                      b,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (k) {
          Se(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (B = e));
          break;
        }
        B = t.return;
      }
  return ((w = sf), (sf = !1), w);
}
function ps(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        ((o.destroy = void 0), s !== void 0 && gc(t, n, s));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ta(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function vc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gm(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), gm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[_s], delete t[rc], delete t[O0], delete t[A0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function vm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function af(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || vm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = qi)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yc(e, t, n), e = e.sibling; e !== null;)
      (yc(e, t, n), (e = e.sibling));
}
function xc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xc(e, t, n), e = e.sibling; e !== null;)
      (xc(e, t, n), (e = e.sibling));
}
var Oe = null,
  $t = !1;
function Ln(e, t, n) {
  for (n = n.child; n !== null;) (ym(e, t, n), (n = n.sibling));
}
function ym(e, t, n) {
  if (tn && typeof tn.onCommitFiberUnmount == "function")
    try {
      tn.onCommitFiberUnmount(ka, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || oo(n, t);
    case 6:
      var r = Oe,
        o = $t;
      ((Oe = null),
        Ln(e, t, n),
        (Oe = r),
        ($t = o),
        Oe !== null &&
          ($t
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Oe.removeChild(n.stateNode)));
      break;
    case 18:
      Oe !== null &&
        ($t
          ? ((e = Oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? hl(e.parentNode, n)
              : e.nodeType === 1 && hl(e, n),
            ks(e))
          : hl(Oe, n.stateNode));
      break;
    case 4:
      ((r = Oe),
        (o = $t),
        (Oe = n.stateNode.containerInfo),
        ($t = !0),
        Ln(e, t, n),
        (Oe = r),
        ($t = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          ((s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && gc(n, t, i),
            (o = o.next));
        } while (o !== r);
      }
      Ln(e, t, n);
      break;
    case 1:
      if (
        !Ue &&
        (oo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          Se(n, t, a);
        }
      Ln(e, t, n);
      break;
    case 21:
      Ln(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ue = (r = Ue) || n.memoizedState !== null), Ln(e, t, n), (Ue = r))
        : Ln(e, t, n);
      break;
    default:
      Ln(e, t, n);
  }
}
function lf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new X0()),
      t.forEach(function (r) {
        var o = ax.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function Rt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          a = i;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              ((Oe = a.stateNode), ($t = !1));
              break e;
            case 3:
              ((Oe = a.stateNode.containerInfo), ($t = !0));
              break e;
            case 4:
              ((Oe = a.stateNode.containerInfo), ($t = !0));
              break e;
          }
          a = a.return;
        }
        if (Oe === null) throw Error(L(160));
        (ym(s, i, o), (Oe = null), ($t = !1));
        var l = o.alternate;
        (l !== null && (l.return = null), (o.return = null));
      } catch (c) {
        Se(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (xm(t, e), (t = t.sibling));
}
function xm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Rt(t, e), Gt(e), r & 4)) {
        try {
          (ps(3, e, e.return), Ta(3, e));
        } catch (x) {
          Se(e, e.return, x);
        }
        try {
          ps(5, e, e.return);
        } catch (x) {
          Se(e, e.return, x);
        }
      }
      break;
    case 1:
      (Rt(t, e), Gt(e), r & 512 && n !== null && oo(n, n.return));
      break;
    case 5:
      if (
        (Rt(t, e),
        Gt(e),
        r & 512 && n !== null && oo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ys(o, "");
        } catch (x) {
          Se(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && Up(o, s),
              Vl(a, i));
            var c = Vl(a, s);
            for (i = 0; i < l.length; i += 2) {
              var p = l[i],
                m = l[i + 1];
              p === "style"
                ? Qp(o, m)
                : p === "dangerouslySetInnerHTML"
                  ? Wp(o, m)
                  : p === "children"
                    ? ys(o, m)
                    : Qc(o, p, m, c);
            }
            switch (a) {
              case "input":
                zl(o, s);
                break;
              case "textarea":
                Bp(o, s);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var d = s.value;
                d != null
                  ? ao(o, !!s.multiple, d, !1)
                  : g !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ao(o, !!s.multiple, s.defaultValue, !0)
                      : ao(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[_s] = s;
          } catch (x) {
            Se(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Rt(t, e), Gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        ((o = e.stateNode), (s = e.memoizedProps));
        try {
          o.nodeValue = s;
        } catch (x) {
          Se(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Rt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ks(t.containerInfo);
        } catch (x) {
          Se(e, e.return, x);
        }
      break;
    case 4:
      (Rt(t, e), Gt(e));
      break;
    case 13:
      (Rt(t, e),
        Gt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Eu = Ce())),
        r & 4 && lf(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ue = (c = Ue) || p), Rt(t, e), (Ue = c)) : Rt(t, e),
        Gt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (B = e, p = e.child; p !== null;) {
            for (m = B = p; B !== null;) {
              switch (((g = B), (d = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ps(4, g, g.return);
                  break;
                case 1:
                  oo(g, g.return);
                  var w = g.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = g), (n = g.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (x) {
                      Se(r, n, x);
                    }
                  }
                  break;
                case 5:
                  oo(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    uf(m);
                    continue;
                  }
              }
              d !== null ? ((d.return = g), (B = d)) : uf(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ;) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                ((o = m.stateNode),
                  c
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = m.stateNode),
                      (l = m.memoizedProps.style),
                      (i =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Hp("display", i))));
              } catch (x) {
                Se(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (x) {
                Se(e, e.return, x);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ((m.child.return = m), (m = m.child));
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null;) {
            if (m.return === null || m.return === e) break e;
            (p === m && (p = null), (m = m.return));
          }
          (p === m && (p = null),
            (m.sibling.return = m.return),
            (m = m.sibling));
        }
      }
      break;
    case 19:
      (Rt(t, e), Gt(e), r & 4 && lf(e));
      break;
    case 21:
      break;
    default:
      (Rt(t, e), Gt(e));
  }
}
function Gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (vm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ys(o, ""), (r.flags &= -33));
          var s = af(e);
          xc(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = af(e);
          yc(e, a, i);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      Se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function J0(e, t, n) {
  ((B = e), wm(e));
}
function wm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null;) {
    var o = B,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || yi;
      if (!i) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Ue;
        a = yi;
        var c = Ue;
        if (((yi = i), (Ue = l) && !c))
          for (B = o; B !== null;)
            ((i = B),
              (l = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? df(o)
                : l !== null
                  ? ((l.return = i), (B = l))
                  : df(o));
        for (; s !== null;) ((B = s), wm(s), (s = s.sibling));
        ((B = o), (yi = a), (Ue = c));
      }
      cf(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (B = s)) : cf(e);
  }
}
function cf(e) {
  for (; B !== null;) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || Ta(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : It(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Qd(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qd(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && ks(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ue || (t.flags & 512 && vc(t));
      } catch (g) {
        Se(t, t.return, g);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (B = n));
      break;
    }
    B = t.return;
  }
}
function uf(e) {
  for (; B !== null;) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (B = n));
      break;
    }
    B = t.return;
  }
}
function df(e) {
  for (; B !== null;) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ta(4, t);
          } catch (l) {
            Se(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Se(t, o, l);
            }
          }
          var s = t.return;
          try {
            vc(t);
          } catch (l) {
            Se(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            vc(t);
          } catch (l) {
            Se(t, i, l);
          }
      }
    } catch (l) {
      Se(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (B = a));
      break;
    }
    B = t.return;
  }
}
var ex = Math.ceil,
  aa = jn.ReactCurrentDispatcher,
  Su = jn.ReactCurrentOwner,
  St = jn.ReactCurrentBatchConfig,
  ie = 0,
  Ie = null,
  _e = null,
  Ae = 0,
  at = 0,
  so = pr(0),
  Te = 0,
  Is = null,
  $r = 0,
  Ra = 0,
  Cu = 0,
  hs = null,
  tt = null,
  Eu = 0,
  To = 1 / 0,
  gn = null,
  la = !1,
  wc = null,
  tr = null,
  xi = !1,
  Kn = null,
  ca = 0,
  ms = 0,
  bc = null,
  Mi = -1,
  $i = 0;
function Ge() {
  return ie & 6 ? Ce() : Mi !== -1 ? Mi : (Mi = Ce());
}
function nr(e) {
  return e.mode & 1
    ? ie & 2 && Ae !== 0
      ? Ae & -Ae
      : $0.transition !== null
        ? ($i === 0 && ($i = oh()), $i)
        : ((e = ue),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dh(e.type))),
          e)
    : 1;
}
function Ft(e, t, n, r) {
  if (50 < ms) throw ((ms = 0), (bc = null), Error(L(185)));
  (Vs(e, n, r),
    (!(ie & 2) || e !== Ie) &&
      (e === Ie && (!(ie & 2) && (Ra |= n), Te === 4 && Fn(e, Ae)),
      st(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((To = Ce() + 500), _a && hr())));
}
function st(e, t) {
  var n = e.callbackNode;
  $y(e, t);
  var r = Qi(e, e === Ie ? Ae : 0);
  if (r === 0)
    (n !== null && xd(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xd(n), t === 1))
      (e.tag === 0 ? M0(ff.bind(null, e)) : Th(ff.bind(null, e)),
        L0(function () {
          !(ie & 6) && hr();
        }),
        (n = null));
    else {
      switch (sh(r)) {
        case 1:
          n = Xc;
          break;
        case 4:
          n = nh;
          break;
        case 16:
          n = Hi;
          break;
        case 536870912:
          n = rh;
          break;
        default:
          n = Hi;
      }
      n = jm(n, bm.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function bm(e, t) {
  if (((Mi = -1), ($i = 0), ie & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (po() && e.callbackNode !== n) return null;
  var r = Qi(e, e === Ie ? Ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ua(e, r);
  else {
    t = r;
    var o = ie;
    ie |= 2;
    var s = Sm();
    (Ie !== e || Ae !== t) && ((gn = null), (To = Ce() + 500), Lr(e, t));
    do
      try {
        rx();
        break;
      } catch (a) {
        km(e, a);
      }
    while (!0);
    (uu(),
      (aa.current = s),
      (ie = o),
      _e !== null ? (t = 0) : ((Ie = null), (Ae = 0), (t = Te)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Kl(e)), o !== 0 && ((r = o), (t = kc(e, o)))), t === 1)
    )
      throw ((n = Is), Lr(e, 0), Fn(e, r), st(e, Ce()), n);
    if (t === 6) Fn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !tx(o) &&
          ((t = ua(e, r)),
          t === 2 && ((s = Kl(e)), s !== 0 && ((r = s), (t = kc(e, s)))),
          t === 1))
      )
        throw ((n = Is), Lr(e, 0), Fn(e, r), st(e, Ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          xr(e, tt, gn);
          break;
        case 3:
          if (
            (Fn(e, r), (r & 130023424) === r && ((t = Eu + 500 - Ce()), 10 < t))
          ) {
            if (Qi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Ge(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = nc(xr.bind(null, e, tt, gn), t);
            break;
          }
          xr(e, tt, gn);
          break;
        case 4:
          if ((Fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var i = 31 - Dt(r);
            ((s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s));
          }
          if (
            ((r = o),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * ex(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = nc(xr.bind(null, e, tt, gn), r);
            break;
          }
          xr(e, tt, gn);
          break;
        case 5:
          xr(e, tt, gn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return (st(e, Ce()), e.callbackNode === n ? bm.bind(null, e) : null);
}
function kc(e, t) {
  var n = hs;
  return (
    e.current.memoizedState.isDehydrated && (Lr(e, t).flags |= 256),
    (e = ua(e, t)),
    e !== 2 && ((t = tt), (tt = n), t !== null && Sc(t)),
    e
  );
}
function Sc(e) {
  tt === null ? (tt = e) : tt.push.apply(tt, e);
}
function tx(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Ut(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Fn(e, t) {
  for (
    t &= ~Cu,
      t &= ~Ra,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Dt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ff(e) {
  if (ie & 6) throw Error(L(327));
  po();
  var t = Qi(e, 0);
  if (!(t & 1)) return (st(e, Ce()), null);
  var n = ua(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Kl(e);
    r !== 0 && ((t = r), (n = kc(e, r)));
  }
  if (n === 1) throw ((n = Is), Lr(e, 0), Fn(e, t), st(e, Ce()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xr(e, tt, gn),
    st(e, Ce()),
    null
  );
}
function Nu(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ((ie = n), ie === 0 && ((To = Ce() + 500), _a && hr()));
  }
}
function zr(e) {
  Kn !== null && Kn.tag === 0 && !(ie & 6) && po();
  var t = ie;
  ie |= 1;
  var n = St.transition,
    r = ue;
  try {
    if (((St.transition = null), (ue = 1), e)) return e();
  } finally {
    ((ue = r), (St.transition = n), (ie = t), !(ie & 6) && hr());
  }
}
function _u() {
  ((at = so.current), ge(so));
}
function Lr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), R0(n)), _e !== null))
    for (n = _e.return; n !== null;) {
      var r = n;
      switch ((au(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Xi());
          break;
        case 3:
          (jo(), ge(rt), ge(Be), gu());
          break;
        case 5:
          mu(r);
          break;
        case 4:
          jo();
          break;
        case 13:
          ge(xe);
          break;
        case 19:
          ge(xe);
          break;
        case 10:
          du(r.type._context);
          break;
        case 22:
        case 23:
          _u();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (_e = e = rr(e.current, null)),
    (Ae = at = t),
    (Te = 0),
    (Is = null),
    (Cu = Ra = $r = 0),
    (tt = hs = null),
    Sr !== null)
  ) {
    for (t = 0; t < Sr.length; t++)
      if (((n = Sr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          ((s.next = o), (r.next = i));
        }
        n.pending = r;
      }
    Sr = null;
  }
  return e;
}
function km(e, t) {
  do {
    var n = _e;
    try {
      if ((uu(), (Ii.current = ia), sa)) {
        for (var r = we.memoizedState; r !== null;) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        sa = !1;
      }
      if (
        ((Mr = 0),
        (Le = Pe = we = null),
        (fs = !1),
        (Ts = 0),
        (Su.current = null),
        n === null || n.return === null)
      ) {
        ((Te = 1), (Is = t), (_e = null));
        break;
      }
      e: {
        var s = e,
          i = n.return,
          a = n,
          l = t;
        if (
          ((t = Ae),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            p = a,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var g = p.alternate;
            g
              ? ((p.updateQueue = g.updateQueue),
                (p.memoizedState = g.memoizedState),
                (p.lanes = g.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var d = Zd(i);
          if (d !== null) {
            ((d.flags &= -257),
              Jd(d, i, a, s, t),
              d.mode & 1 && Xd(s, c, t),
              (t = d),
              (l = c));
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              (x.add(l), (t.updateQueue = x));
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Xd(s, c, t), ju());
              break e;
            }
            l = Error(L(426));
          }
        } else if (ve && a.mode & 1) {
          var b = Zd(i);
          if (b !== null) {
            (!(b.flags & 65536) && (b.flags |= 256),
              Jd(b, i, a, s, t),
              lu(Po(l, a)));
            break e;
          }
        }
        ((s = l = Po(l, a)),
          Te !== 4 && (Te = 2),
          hs === null ? (hs = [s]) : hs.push(s),
          (s = i));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var f = sm(s, l, t);
              Hd(s, f);
              break e;
            case 1:
              a = l;
              var h = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (tr === null || !tr.has(v))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var k = im(s, a, t);
                Hd(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Em(n);
    } catch (S) {
      ((t = S), _e === n && n !== null && (_e = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Sm() {
  var e = aa.current;
  return ((aa.current = ia), e === null ? ia : e);
}
function ju() {
  ((Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Ie === null || (!($r & 268435455) && !(Ra & 268435455)) || Fn(Ie, Ae));
}
function ua(e, t) {
  var n = ie;
  ie |= 2;
  var r = Sm();
  (Ie !== e || Ae !== t) && ((gn = null), Lr(e, t));
  do
    try {
      nx();
      break;
    } catch (o) {
      km(e, o);
    }
  while (!0);
  if ((uu(), (ie = n), (aa.current = r), _e !== null)) throw Error(L(261));
  return ((Ie = null), (Ae = 0), Te);
}
function nx() {
  for (; _e !== null;) Cm(_e);
}
function rx() {
  for (; _e !== null && !jy();) Cm(_e);
}
function Cm(e) {
  var t = _m(e.alternate, e, at);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Em(e) : (_e = t),
    (Su.current = null));
}
function Em(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = q0(n, t)), n !== null)) {
        ((n.flags &= 32767), (_e = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Te = 6), (_e = null));
        return;
      }
    } else if (((n = Y0(n, t, at)), n !== null)) {
      _e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function xr(e, t, n) {
  var r = ue,
    o = St.transition;
  try {
    ((St.transition = null), (ue = 1), ox(e, t, n, r));
  } finally {
    ((St.transition = o), (ue = r));
  }
  return null;
}
function ox(e, t, n, r) {
  do po();
  while (Kn !== null);
  if (ie & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (zy(e, s),
    e === Ie && ((_e = Ie = null), (Ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xi ||
      ((xi = !0),
      jm(Hi, function () {
        return (po(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = St.transition), (St.transition = null));
    var i = ue;
    ue = 1;
    var a = ie;
    ((ie |= 4),
      (Su.current = null),
      Z0(e, n),
      xm(n, e),
      C0(ec),
      (Gi = !!Jl),
      (ec = Jl = null),
      (e.current = n),
      J0(n),
      Py(),
      (ie = a),
      (ue = i),
      (St.transition = s));
  } else e.current = n;
  if (
    (xi && ((xi = !1), (Kn = e), (ca = o)),
    (s = e.pendingLanes),
    s === 0 && (tr = null),
    Ly(n.stateNode),
    st(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (la) throw ((la = !1), (e = wc), (wc = null), e);
  return (
    ca & 1 && e.tag !== 0 && po(),
    (s = e.pendingLanes),
    s & 1 ? (e === bc ? ms++ : ((ms = 0), (bc = e))) : (ms = 0),
    hr(),
    null
  );
}
function po() {
  if (Kn !== null) {
    var e = sh(ca),
      t = St.transition,
      n = ue;
    try {
      if (((St.transition = null), (ue = 16 > e ? 16 : e), Kn === null))
        var r = !1;
      else {
        if (((e = Kn), (Kn = null), (ca = 0), ie & 6)) throw Error(L(331));
        var o = ie;
        for (ie |= 4, B = e.current; B !== null;) {
          var s = B,
            i = s.child;
          if (B.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (B = c; B !== null;) {
                  var p = B;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ps(8, p, s);
                  }
                  var m = p.child;
                  if (m !== null) ((m.return = p), (B = m));
                  else
                    for (; B !== null;) {
                      p = B;
                      var g = p.sibling,
                        d = p.return;
                      if ((gm(p), p === c)) {
                        B = null;
                        break;
                      }
                      if (g !== null) {
                        ((g.return = d), (B = g));
                        break;
                      }
                      B = d;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var b = x.sibling;
                    ((x.sibling = null), (x = b));
                  } while (x !== null);
                }
              }
              B = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) ((i.return = s), (B = i));
          else
            e: for (; B !== null;) {
              if (((s = B), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ps(9, s, s.return);
                }
              var f = s.sibling;
              if (f !== null) {
                ((f.return = s.return), (B = f));
                break e;
              }
              B = s.return;
            }
        }
        var h = e.current;
        for (B = h; B !== null;) {
          i = B;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) ((v.return = i), (B = v));
          else
            e: for (i = h; B !== null;) {
              if (((a = B), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ta(9, a);
                  }
                } catch (S) {
                  Se(a, a.return, S);
                }
              if (a === i) {
                B = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                ((k.return = a.return), (B = k));
                break e;
              }
              B = a.return;
            }
        }
        if (
          ((ie = o), hr(), tn && typeof tn.onPostCommitFiberRoot == "function")
        )
          try {
            tn.onPostCommitFiberRoot(ka, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ue = n), (St.transition = t));
    }
  }
  return !1;
}
function pf(e, t, n) {
  ((t = Po(n, t)),
    (t = sm(e, t, 1)),
    (e = er(e, t, 1)),
    (t = Ge()),
    e !== null && (Vs(e, 1, t), st(e, t)));
}
function Se(e, t, n) {
  if (e.tag === 3) pf(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        pf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (tr === null || !tr.has(r)))
        ) {
          ((e = Po(n, e)),
            (e = im(t, e, 1)),
            (t = er(t, e, 1)),
            (e = Ge()),
            t !== null && (Vs(t, 1, e), st(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function sx(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      (Ae & n) === n &&
      (Te === 4 || (Te === 3 && (Ae & 130023424) === Ae && 500 > Ce() - Eu)
        ? Lr(e, 0)
        : (Cu |= n)),
    st(e, t));
}
function Nm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ci), (ci <<= 1), !(ci & 130023424) && (ci = 4194304))
      : (t = 1));
  var n = Ge();
  ((e = Cn(e, t)), e !== null && (Vs(e, t, n), st(e, n)));
}
function ix(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Nm(e, n));
}
function ax(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  (r !== null && r.delete(t), Nm(e, n));
}
var _m;
_m = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || rt.current) nt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((nt = !1), K0(e, t, n));
      nt = !!(e.flags & 131072);
    }
  else ((nt = !1), ve && t.flags & 1048576 && Rh(t, ea, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Ai(e, t), (e = t.pendingProps));
      var o = Eo(t, Be.current);
      (fo(t, n), (o = yu(null, t, r, e, o, n)));
      var s = xu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ot(r) ? ((s = !0), Zi(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            pu(t),
            (o.updater = Pa),
            (t.stateNode = o),
            (o._reactInternals = t),
            cc(t, r, e, n),
            (t = fc(null, t, r, !0, s, n)))
          : ((t.tag = 0), ve && s && iu(t), He(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ai(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = cx(r)),
          (e = It(r, e)),
          o)
        ) {
          case 0:
            t = dc(null, t, r, e, n);
            break e;
          case 1:
            t = nf(null, t, r, e, n);
            break e;
          case 11:
            t = ef(null, t, r, e, n);
            break e;
          case 14:
            t = tf(null, t, r, It(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        dc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        nf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((um(t), e === null)) throw Error(L(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          $h(e, t),
          ra(t, r, null, n));
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((o = Po(Error(L(423)), t)), (t = rf(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = Po(Error(L(424)), t)), (t = rf(e, t, r, n, o)));
            break e;
          } else
            for (
              ct = Jn(t.stateNode.containerInfo.firstChild),
                ut = t,
                ve = !0,
                zt = null,
                n = Ah(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((No(), r === o)) {
            t = En(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zh(t),
        e === null && ic(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        tc(r, o) ? (i = null) : s !== null && tc(r, s) && (t.flags |= 32),
        cm(e, t),
        He(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && ic(t), null);
    case 13:
      return dm(e, t, n);
    case 4:
      return (
        hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _o(t, null, r, n)) : He(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        ef(e, t, r, o, n)
      );
    case 7:
      return (He(e, t, t.pendingProps, n), t.child);
    case 8:
      return (He(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (He(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          pe(ta, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Ut(s.value, i)) {
            if (s.children === o.children && !rt.current) {
              t = En(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null;) {
              var a = s.dependencies;
              if (a !== null) {
                i = s.child;
                for (var l = a.firstContext; l !== null;) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = bn(-1, n & -n)), (l.tag = 2));
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        (p === null
                          ? (l.next = l)
                          : ((l.next = p.next), (p.next = l)),
                          (c.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      ac(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(L(341));
                ((i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  ac(i, n, t),
                  (i = s.sibling));
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null;) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    ((s.return = i.return), (i = s));
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        (He(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        fo(t, n),
        (o = Ct(o)),
        (r = r(o)),
        (t.flags |= 1),
        He(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = It(r, t.pendingProps)),
        (o = It(r.type, o)),
        tf(e, t, r, o, n)
      );
    case 15:
      return am(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : It(r, o)),
        Ai(e, t),
        (t.tag = 1),
        ot(r) ? ((e = !0), Zi(t)) : (e = !1),
        fo(t, n),
        om(t, r, o),
        cc(t, r, o, n),
        fc(null, t, r, !0, e, n)
      );
    case 19:
      return fm(e, t, n);
    case 22:
      return lm(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function jm(e, t) {
  return th(e, t);
}
function lx(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function kt(e, t, n, r) {
  return new lx(e, t, n, r);
}
function Pu(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function cx(e) {
  if (typeof e == "function") return Pu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Kc)) return 11;
    if (e === Yc) return 14;
  }
  return 2;
}
function rr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = kt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zi(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) Pu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Yr:
        return Ir(n.children, o, s, t);
      case Gc:
        ((i = 8), (o |= 8));
        break;
      case Il:
        return (
          (e = kt(12, n, t, o | 2)),
          (e.elementType = Il),
          (e.lanes = s),
          e
        );
      case Ol:
        return ((e = kt(13, n, t, o)), (e.elementType = Ol), (e.lanes = s), e);
      case Al:
        return ((e = kt(19, n, t, o)), (e.elementType = Al), (e.lanes = s), e);
      case zp:
        return La(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mp:
              i = 10;
              break e;
            case $p:
              i = 9;
              break e;
            case Kc:
              i = 11;
              break e;
            case Yc:
              i = 14;
              break e;
            case $n:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = kt(i, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Ir(e, t, n, r) {
  return ((e = kt(7, e, r, t)), (e.lanes = n), e);
}
function La(e, t, n, r) {
  return (
    (e = kt(22, e, r, t)),
    (e.elementType = zp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function kl(e, t, n) {
  return ((e = kt(6, e, null, t)), (e.lanes = n), e);
}
function Sl(e, t, n) {
  return (
    (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ux(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = rl(0)),
    (this.expirationTimes = rl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = rl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Tu(e, t, n, r, o, s, i, a, l) {
  return (
    (e = new ux(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = kt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pu(s),
    e
  );
}
function dx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Pm(e) {
  if (!e) return ar;
  e = e._reactInternals;
  e: {
    if (Ur(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ot(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ot(n)) return Ph(e, n, t);
  }
  return t;
}
function Tm(e, t, n, r, o, s, i, a, l) {
  return (
    (e = Tu(n, r, !0, e, o, s, i, a, l)),
    (e.context = Pm(null)),
    (n = e.current),
    (r = Ge()),
    (o = nr(n)),
    (s = bn(r, o)),
    (s.callback = t ?? null),
    er(n, s, o),
    (e.current.lanes = o),
    Vs(e, o, r),
    st(e, r),
    e
  );
}
function Ia(e, t, n, r) {
  var o = t.current,
    s = Ge(),
    i = nr(o);
  return (
    (n = Pm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = er(o, t, i)),
    e !== null && (Ft(e, o, i, s), Li(e, o, i)),
    i
  );
}
function da(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ru(e, t) {
  (hf(e, t), (e = e.alternate) && hf(e, t));
}
function fx() {
  return null;
}
var Rm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Lu(e) {
  this._internalRoot = e;
}
Oa.prototype.render = Lu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Ia(e, t, null, null);
};
Oa.prototype.unmount = Lu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (zr(function () {
      Ia(null, e, null, null);
    }),
      (t[Sn] = null));
  }
};
function Oa(e) {
  this._internalRoot = e;
}
Oa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = lh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dn.length && t !== 0 && t < Dn[n].priority; n++);
    (Dn.splice(n, 0, e), n === 0 && uh(e));
  }
};
function Iu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Aa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mf() {}
function px(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = da(i);
        s.call(c);
      };
    }
    var i = Tm(t, r, e, 0, null, !1, !1, "", mf);
    return (
      (e._reactRootContainer = i),
      (e[Sn] = i.current),
      Es(e.nodeType === 8 ? e.parentNode : e),
      zr(),
      i
    );
  }
  for (; (o = e.lastChild);) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = da(l);
      a.call(c);
    };
  }
  var l = Tu(e, 0, !1, null, null, !1, !1, "", mf);
  return (
    (e._reactRootContainer = l),
    (e[Sn] = l.current),
    Es(e.nodeType === 8 ? e.parentNode : e),
    zr(function () {
      Ia(t, l, n, r);
    }),
    l
  );
}
function Ma(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = da(i);
        a.call(l);
      };
    }
    Ia(t, i, e, o);
  } else i = px(n, t, e, o, r);
  return da(i);
}
ih = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = os(t.pendingLanes);
        n !== 0 &&
          (Zc(t, n | 1), st(t, Ce()), !(ie & 6) && ((To = Ce() + 500), hr()));
      }
      break;
    case 13:
      (zr(function () {
        var r = Cn(e, 1);
        if (r !== null) {
          var o = Ge();
          Ft(r, e, 1, o);
        }
      }),
        Ru(e, 1));
  }
};
Jc = function (e) {
  if (e.tag === 13) {
    var t = Cn(e, 134217728);
    if (t !== null) {
      var n = Ge();
      Ft(t, e, 134217728, n);
    }
    Ru(e, 134217728);
  }
};
ah = function (e) {
  if (e.tag === 13) {
    var t = nr(e),
      n = Cn(e, t);
    if (n !== null) {
      var r = Ge();
      Ft(n, e, t, r);
    }
    Ru(e, t);
  }
};
lh = function () {
  return ue;
};
ch = function (e, t) {
  var n = ue;
  try {
    return ((ue = e), t());
  } finally {
    ue = n;
  }
};
Hl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((zl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Na(r);
            if (!o) throw Error(L(90));
            (Fp(r), zl(r, o));
          }
        }
      }
      break;
    case "textarea":
      Bp(e, n);
      break;
    case "select":
      ((t = n.value), t != null && ao(e, !!n.multiple, t, !1));
  }
};
Yp = Nu;
qp = zr;
var hx = { usingClientEntryPoint: !1, Events: [Hs, Jr, Na, Gp, Kp, Nu] },
  Xo = {
    findFiberByHostInstance: kr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  mx = {
    bundleType: Xo.bundleType,
    version: Xo.version,
    rendererPackageName: Xo.rendererPackageName,
    rendererConfig: Xo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Jp(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Xo.findFiberByHostInstance || fx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wi.isDisabled && wi.supportsFiber)
    try {
      ((ka = wi.inject(mx)), (tn = wi));
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hx;
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Iu(t)) throw Error(L(200));
  return dx(e, t, null, n);
};
mt.createRoot = function (e, t) {
  if (!Iu(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = Rm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Tu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Sn] = t.current),
    Es(e.nodeType === 8 ? e.parentNode : e),
    new Lu(t)
  );
};
mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return ((e = Jp(t)), (e = e === null ? null : e.stateNode), e);
};
mt.flushSync = function (e) {
  return zr(e);
};
mt.hydrate = function (e, t, n) {
  if (!Aa(t)) throw Error(L(200));
  return Ma(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
  if (!Iu(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Rm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Tm(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[Sn] = t.current),
    Es(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Oa(t);
};
mt.render = function (e, t, n) {
  if (!Aa(t)) throw Error(L(200));
  return Ma(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
  if (!Aa(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (zr(function () {
        Ma(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Sn] = null));
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = Nu;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Aa(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Ma(e, t, n, !1, r);
};
mt.version = "18.3.1-next-f1338f8080-20240426";
function Lm() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lm);
    } catch (e) {
      console.error(e);
    }
}
(Lm(), (Lp.exports = mt));
var Gs = Lp.exports;
const Im = xp(Gs);
var Om,
  gf = Gs;
((Om = gf.createRoot), gf.hydrateRoot);
var $a = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  za = typeof window > "u" || "Deno" in globalThis;
function Ot() {}
function gx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vx(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function yx(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Cc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vf(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: s,
    queryKey: i,
    stale: a,
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== Ou(i, t.options)) return !1;
    } else if (!As(t.queryKey, i)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (o && o !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function yf(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Os(t.options.mutationKey) !== Os(s)) return !1;
    } else if (!As(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Ou(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Os)(e);
}
function Os(e) {
  return JSON.stringify(e, (t, n) =>
    Ec(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function As(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => As(e[n], t[n]))
        : !1;
}
function Am(e, t) {
  if (e === t) return e;
  const n = xf(e) && xf(t);
  if (n || (Ec(e) && Ec(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      s = n ? t : Object.keys(t),
      i = s.length,
      a = n ? [] : {},
      l = new Set(r);
    let c = 0;
    for (let p = 0; p < i; p++) {
      const m = n ? p : s[p];
      ((!n && l.has(m)) || n) && e[m] === void 0 && t[m] === void 0
        ? ((a[m] = void 0), c++)
        : ((a[m] = Am(e[m], t[m])), a[m] === e[m] && e[m] !== void 0 && c++);
    }
    return o === i && c === o ? e : a;
  }
  return t;
}
function xf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ec(e) {
  if (!wf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !wf(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function wf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function wx(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function bx(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Am(e, t)
      : t;
}
function kx(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Sx(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Au = Symbol();
function Mm(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Au
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var Nr,
  Bn,
  go,
  dp,
  Cx =
    ((dp = class extends $a {
      constructor() {
        super();
        ae(this, Nr);
        ae(this, Bn);
        ae(this, go);
        ee(this, go, (t) => {
          if (!za && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Bn) || this.setEventListener(P(this, go));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Bn)) == null || t.call(this), ee(this, Bn, void 0));
      }
      setEventListener(t) {
        var n;
        (ee(this, go, t),
          (n = P(this, Bn)) == null || n.call(this),
          ee(
            this,
            Bn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        P(this, Nr) !== t && (ee(this, Nr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, Nr) == "boolean"
          ? P(this, Nr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Nr = new WeakMap()),
    (Bn = new WeakMap()),
    (go = new WeakMap()),
    dp),
  $m = new Cx(),
  vo,
  Vn,
  yo,
  fp,
  Ex =
    ((fp = class extends $a {
      constructor() {
        super();
        ae(this, vo, !0);
        ae(this, Vn);
        ae(this, yo);
        ee(this, yo, (t) => {
          if (!za && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Vn) || this.setEventListener(P(this, yo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Vn)) == null || t.call(this), ee(this, Vn, void 0));
      }
      setEventListener(t) {
        var n;
        (ee(this, yo, t),
          (n = P(this, Vn)) == null || n.call(this),
          ee(this, Vn, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        P(this, vo) !== t &&
          (ee(this, vo, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, vo);
      }
    }),
    (vo = new WeakMap()),
    (Vn = new WeakMap()),
    (yo = new WeakMap()),
    fp),
  fa = new Ex();
function Nx() {
  let e, t;
  const n = new Promise((o, s) => {
    ((e = o), (t = s));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(o) {
    (Object.assign(n, o), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (o) => {
      (r({ status: "fulfilled", value: o }), e(o));
    }),
    (n.reject = (o) => {
      (r({ status: "rejected", reason: o }), t(o));
    }),
    n
  );
}
function _x(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function zm(e) {
  return (e ?? "online") === "online" ? fa.isOnline() : !0;
}
var Dm = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function Cl(e) {
  return e instanceof Dm;
}
function Fm(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const s = Nx(),
    i = (x) => {
      var b;
      r || (g(new Dm(x)), (b = e.abort) == null || b.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    c = () =>
      $m.isFocused() &&
      (e.networkMode === "always" || fa.isOnline()) &&
      e.canRun(),
    p = () => zm(e.networkMode) && e.canRun(),
    m = (x) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onSuccess) == null || b.call(e, x),
        o == null || o(),
        s.resolve(x));
    },
    g = (x) => {
      var b;
      r ||
        ((r = !0),
        (b = e.onError) == null || b.call(e, x),
        o == null || o(),
        s.reject(x));
    },
    d = () =>
      new Promise((x) => {
        var b;
        ((o = (f) => {
          (r || c()) && x(f);
        }),
          (b = e.onPause) == null || b.call(e));
      }).then(() => {
        var x;
        ((o = void 0), r || (x = e.onContinue) == null || x.call(e));
      }),
    w = () => {
      if (r) return;
      let x;
      const b = n === 0 ? e.initialPromise : void 0;
      try {
        x = b ?? e.fn();
      } catch (f) {
        x = Promise.reject(f);
      }
      Promise.resolve(x)
        .then(m)
        .catch((f) => {
          var E;
          if (r) return;
          const h = e.retry ?? (za ? 0 : 3),
            v = e.retryDelay ?? _x,
            k = typeof v == "function" ? v(n, f) : v,
            S =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, f));
          if (t || !S) {
            g(f);
            return;
          }
          (n++,
            (E = e.onFail) == null || E.call(e, n, f),
            wx(k)
              .then(() => (c() ? void 0 : d()))
              .then(() => {
                t ? g(f) : w();
              }));
        });
    };
  return {
    promise: s,
    cancel: i,
    continue: () => (o == null || o(), s),
    cancelRetry: a,
    continueRetry: l,
    canStart: p,
    start: () => (p() ? w() : d().then(w), s),
  };
}
var jx = (e) => setTimeout(e, 0);
function Px() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    o = jx;
  const s = (a) => {
      t
        ? e.push(a)
        : o(() => {
            n(a);
          });
    },
    i = () => {
      const a = e;
      ((e = []),
        a.length &&
          o(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          }));
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        (t--, t || i());
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        s(() => {
          a(...l);
        });
      },
    schedule: s,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      o = a;
    },
  };
}
var Qe = Px(),
  _r,
  pp,
  Um =
    ((pp = class {
      constructor() {
        ae(this, _r);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          vx(this.gcTime) &&
            ee(
              this,
              _r,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (za ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        P(this, _r) && (clearTimeout(P(this, _r)), ee(this, _r, void 0));
      }
    }),
    (_r = new WeakMap()),
    pp),
  xo,
  jr,
  yt,
  Pr,
  Fe,
  Fs,
  Tr,
  At,
  mn,
  hp,
  Tx =
    ((hp = class extends Um {
      constructor(t) {
        super();
        ae(this, At);
        ae(this, xo);
        ae(this, jr);
        ae(this, yt);
        ae(this, Pr);
        ae(this, Fe);
        ae(this, Fs);
        ae(this, Tr);
        (ee(this, Tr, !1),
          ee(this, Fs, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          ee(this, Pr, t.client),
          ee(this, yt, P(this, Pr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          ee(this, xo, Lx(this.options)),
          (this.state = t.state ?? P(this, xo)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, Fe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        ((this.options = { ...P(this, Fs), ...t }),
          this.updateGcTime(this.options.gcTime));
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, yt).remove(this);
      }
      setData(t, n) {
        const r = bx(this.state.data, t, this.options);
        return (
          $e(this, At, mn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        $e(this, At, mn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, Fe)) == null ? void 0 : r.promise;
        return (
          (o = P(this, Fe)) == null || o.cancel(t),
          n ? n.then(Ot).catch(Ot) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(P(this, xo)));
      }
      isActive() {
        return this.observers.some((t) => xx(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Au ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Cc(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !yx(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Fe)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Fe)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, yt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, Fe) &&
              (P(this, Tr)
                ? P(this, Fe).cancel({ revert: !0 })
                : P(this, Fe).cancelRetry()),
            this.scheduleGc()),
          P(this, yt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          $e(this, At, mn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, p, m;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, Fe))
            return (P(this, Fe).continueRetry(), P(this, Fe).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const g = this.observers.find((d) => d.options.queryFn);
          g && this.setOptions(g.options);
        }
        const r = new AbortController(),
          o = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (ee(this, Tr, !0), r.signal),
            });
          },
          s = () => {
            const g = Mm(this.options, n),
              w = (() => {
                const x = {
                  client: P(this, Pr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (o(x), x);
              })();
            return (
              ee(this, Tr, !1),
              this.options.persister ? this.options.persister(g, w, this) : g(w)
            );
          },
          a = (() => {
            const g = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: P(this, Pr),
              state: this.state,
              fetchFn: s,
            };
            return (o(g), g);
          })();
        ((c = this.options.behavior) == null || c.onFetch(a, this),
          ee(this, jr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((p = a.fetchOptions) == null ? void 0 : p.meta)) &&
            $e(this, At, mn).call(this, {
              type: "fetch",
              meta: (m = a.fetchOptions) == null ? void 0 : m.meta,
            }));
        const l = (g) => {
          var d, w, x, b;
          ((Cl(g) && g.silent) ||
            $e(this, At, mn).call(this, { type: "error", error: g }),
            Cl(g) ||
              ((w = (d = P(this, yt).config).onError) == null ||
                w.call(d, g, this),
              (b = (x = P(this, yt).config).onSettled) == null ||
                b.call(x, this.state.data, g, this)),
            this.scheduleGc());
        };
        return (
          ee(
            this,
            Fe,
            Fm({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (g) => {
                var d, w, x, b;
                if (g === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(g);
                } catch (f) {
                  l(f);
                  return;
                }
                ((w = (d = P(this, yt).config).onSuccess) == null ||
                  w.call(d, g, this),
                  (b = (x = P(this, yt).config).onSettled) == null ||
                    b.call(x, g, this.state.error, this),
                  this.scheduleGc());
              },
              onError: l,
              onFail: (g, d) => {
                $e(this, At, mn).call(this, {
                  type: "failed",
                  failureCount: g,
                  error: d,
                });
              },
              onPause: () => {
                $e(this, At, mn).call(this, { type: "pause" });
              },
              onContinue: () => {
                $e(this, At, mn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            }),
          ),
          P(this, Fe).start()
        );
      }
    }),
    (xo = new WeakMap()),
    (jr = new WeakMap()),
    (yt = new WeakMap()),
    (Pr = new WeakMap()),
    (Fe = new WeakMap()),
    (Fs = new WeakMap()),
    (Tr = new WeakMap()),
    (At = new WeakSet()),
    (mn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Rx(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              ee(this, jr, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return Cl(o) && o.revert && P(this, jr)
              ? { ...P(this, jr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        Qe.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, yt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    hp);
function Rx(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: zm(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Lx(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var qt,
  mp,
  Ix =
    ((mp = class extends $a {
      constructor(t = {}) {
        super();
        ae(this, qt);
        ((this.config = t), ee(this, qt, new Map()));
      }
      build(t, n, r) {
        const o = n.queryKey,
          s = n.queryHash ?? Ou(o, n);
        let i = this.get(s);
        return (
          i ||
            ((i = new Tx({
              client: t,
              queryKey: o,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(i)),
          i
        );
      }
      add(t) {
        P(this, qt).has(t.queryHash) ||
          (P(this, qt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, qt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, qt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, qt).get(t);
      }
      getAll() {
        return [...P(this, qt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => vf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => vf(t, r)) : n;
      }
      notify(t) {
        Qe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Qe.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (qt = new WeakMap()),
    mp),
  Xt,
  We,
  Rr,
  Zt,
  An,
  gp,
  Ox =
    ((gp = class extends Um {
      constructor(t) {
        super();
        ae(this, Zt);
        ae(this, Xt);
        ae(this, We);
        ae(this, Rr);
        ((this.mutationId = t.mutationId),
          ee(this, We, t.mutationCache),
          ee(this, Xt, []),
          (this.state = t.state || Ax()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, Xt).includes(t) ||
          (P(this, Xt).push(t),
          this.clearGcTimeout(),
          P(this, We).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (ee(
          this,
          Xt,
          P(this, Xt).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          P(this, We).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        P(this, Xt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, We).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, Rr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, a, l, c, p, m, g, d, w, x, b, f, h, v, k, S, E, N, j;
        const n = () => {
          $e(this, Zt, An).call(this, { type: "continue" });
        };
        ee(
          this,
          Rr,
          Fm({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, O) => {
              $e(this, Zt, An).call(this, {
                type: "failed",
                failureCount: M,
                error: O,
              });
            },
            onPause: () => {
              $e(this, Zt, An).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, We).canRun(this),
          }),
        );
        const r = this.state.status === "pending",
          o = !P(this, Rr).canStart();
        try {
          if (r) n();
          else {
            ($e(this, Zt, An).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((i = (s = P(this, We).config).onMutate) == null
                ? void 0
                : i.call(s, t, this)));
            const O = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            O !== this.state.context &&
              $e(this, Zt, An).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: o,
              });
          }
          const M = await P(this, Rr).start();
          return (
            await ((p = (c = P(this, We).config).onSuccess) == null
              ? void 0
              : p.call(c, M, t, this.state.context, this)),
            await ((g = (m = this.options).onSuccess) == null
              ? void 0
              : g.call(m, M, t, this.state.context)),
            await ((w = (d = P(this, We).config).onSettled) == null
              ? void 0
              : w.call(
                  d,
                  M,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((b = (x = this.options).onSettled) == null
              ? void 0
              : b.call(x, M, null, t, this.state.context)),
            $e(this, Zt, An).call(this, { type: "success", data: M }),
            M
          );
        } catch (M) {
          try {
            throw (
              await ((h = (f = P(this, We).config).onError) == null
                ? void 0
                : h.call(f, M, t, this.state.context, this)),
              await ((k = (v = this.options).onError) == null
                ? void 0
                : k.call(v, M, t, this.state.context)),
              await ((E = (S = P(this, We).config).onSettled) == null
                ? void 0
                : E.call(
                    S,
                    void 0,
                    M,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((j = (N = this.options).onSettled) == null
                ? void 0
                : j.call(N, void 0, M, t, this.state.context)),
              M
            );
          } finally {
            $e(this, Zt, An).call(this, { type: "error", error: M });
          }
        } finally {
          P(this, We).runNext(this);
        }
      }
    }),
    (Xt = new WeakMap()),
    (We = new WeakMap()),
    (Rr = new WeakMap()),
    (Zt = new WeakSet()),
    (An = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        Qe.batch(() => {
          (P(this, Xt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, We).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    gp);
function Ax() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var yn,
  Mt,
  Us,
  vp,
  Mx =
    ((vp = class extends $a {
      constructor(t = {}) {
        super();
        ae(this, yn);
        ae(this, Mt);
        ae(this, Us);
        ((this.config = t),
          ee(this, yn, new Set()),
          ee(this, Mt, new Map()),
          ee(this, Us, 0));
      }
      build(t, n, r) {
        const o = new Ox({
          mutationCache: this,
          mutationId: ++ri(this, Us)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(o), o);
      }
      add(t) {
        P(this, yn).add(t);
        const n = bi(t);
        if (typeof n == "string") {
          const r = P(this, Mt).get(n);
          r ? r.push(t) : P(this, Mt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (P(this, yn).delete(t)) {
          const n = bi(t);
          if (typeof n == "string") {
            const r = P(this, Mt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && P(this, Mt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = bi(t);
        if (typeof n == "string") {
          const r = P(this, Mt).get(n),
            o =
              r == null ? void 0 : r.find((s) => s.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = bi(t);
        if (typeof n == "string") {
          const o =
            (r = P(this, Mt).get(n)) == null
              ? void 0
              : r.find((s) => s !== t && s.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Qe.batch(() => {
          (P(this, yn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            P(this, yn).clear(),
            P(this, Mt).clear());
        });
      }
      getAll() {
        return Array.from(P(this, yn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => yf(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => yf(t, n));
      }
      notify(t) {
        Qe.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Qe.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Ot))),
        );
      }
    }),
    (yn = new WeakMap()),
    (Mt = new WeakMap()),
    (Us = new WeakMap()),
    vp);
function bi(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function bf(e) {
  return {
    onFetch: (t, n) => {
      var p, m, g, d, w;
      const r = t.options,
        o =
          (g =
            (m = (p = t.fetchOptions) == null ? void 0 : p.meta) == null
              ? void 0
              : m.fetchMore) == null
            ? void 0
            : g.direction,
        s = ((d = t.state.data) == null ? void 0 : d.pages) || [],
        i = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const c = async () => {
        let x = !1;
        const b = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (x = !0)
                  : t.signal.addEventListener("abort", () => {
                      x = !0;
                    }),
                t.signal
              ),
            });
          },
          f = Mm(t.options, t.fetchOptions),
          h = async (v, k, S) => {
            if (x) return Promise.reject();
            if (k == null && v.pages.length) return Promise.resolve(v);
            const N = (() => {
                const D = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: k,
                  direction: S ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (b(D), D);
              })(),
              j = await f(N),
              { maxPages: M } = t.options,
              O = S ? Sx : kx;
            return {
              pages: O(v.pages, j, M),
              pageParams: O(v.pageParams, k, M),
            };
          };
        if (o && s.length) {
          const v = o === "backward",
            k = v ? $x : kf,
            S = { pages: s, pageParams: i },
            E = k(r, S);
          a = await h(S, E, v);
        } else {
          const v = e ?? s.length;
          do {
            const k = l === 0 ? (i[0] ?? r.initialPageParam) : kf(r, a);
            if (l > 0 && k == null) break;
            ((a = await h(a, k)), l++);
          } while (l < v);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var x, b;
            return (b = (x = t.options).persister) == null
              ? void 0
              : b.call(
                  x,
                  c,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function kf(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function $x(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ke,
  Wn,
  Hn,
  wo,
  bo,
  Qn,
  ko,
  So,
  yp,
  zx =
    ((yp = class {
      constructor(e = {}) {
        ae(this, ke);
        ae(this, Wn);
        ae(this, Hn);
        ae(this, wo);
        ae(this, bo);
        ae(this, Qn);
        ae(this, ko);
        ae(this, So);
        (ee(this, ke, e.queryCache || new Ix()),
          ee(this, Wn, e.mutationCache || new Mx()),
          ee(this, Hn, e.defaultOptions || {}),
          ee(this, wo, new Map()),
          ee(this, bo, new Map()),
          ee(this, Qn, 0));
      }
      mount() {
        (ri(this, Qn)._++,
          P(this, Qn) === 1 &&
            (ee(
              this,
              ko,
              $m.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, ke).onFocus());
              }),
            ),
            ee(
              this,
              So,
              fa.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, ke).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (ri(this, Qn)._--,
          P(this, Qn) === 0 &&
            ((e = P(this, ko)) == null || e.call(this),
            ee(this, ko, void 0),
            (t = P(this, So)) == null || t.call(this),
            ee(this, So, void 0)));
      }
      isFetching(e) {
        return P(this, ke).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, Wn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, ke).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = P(this, ke).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Cc(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return P(this, ke)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, ke).get(r.queryHash),
          s = o == null ? void 0 : o.state.data,
          i = gx(t, s);
        if (i !== void 0)
          return P(this, ke)
            .build(this, r)
            .setData(i, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Qe.batch(() =>
          P(this, ke)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, ke).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, ke);
        Qe.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, ke);
        return Qe.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Qe.batch(() =>
            P(this, ke)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(Ot).catch(Ot);
      }
      invalidateQueries(e, t = {}) {
        return Qe.batch(
          () => (
            P(this, ke)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Qe.batch(() =>
            P(this, ke)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let s = o.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(Ot)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              }),
          );
        return Promise.all(r).then(Ot);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, ke).build(this, t);
        return n.isStaleByTime(Cc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Ot).catch(Ot);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = bf(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ot).catch(Ot);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = bf(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return fa.isOnline()
          ? P(this, Wn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, ke);
      }
      getMutationCache() {
        return P(this, Wn);
      }
      getDefaultOptions() {
        return P(this, Hn);
      }
      setDefaultOptions(e) {
        ee(this, Hn, e);
      }
      setQueryDefaults(e, t) {
        P(this, wo).set(Os(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, wo).values()],
          n = {};
        return (
          t.forEach((r) => {
            As(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, bo).set(Os(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, bo).values()],
          n = {};
        return (
          t.forEach((r) => {
            As(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, Hn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Ou(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Au && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, Hn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (P(this, ke).clear(), P(this, Wn).clear());
      }
    }),
    (ke = new WeakMap()),
    (Wn = new WeakMap()),
    (Hn = new WeakMap()),
    (wo = new WeakMap()),
    (bo = new WeakMap()),
    (Qn = new WeakMap()),
    (ko = new WeakMap()),
    (So = new WeakMap()),
    yp),
  Dx = y.createContext(void 0),
  Fx = ({ client: e, children: t }) => (
    y.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    u.jsx(Dx.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ms() {
  return (
    (Ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ms.apply(this, arguments)
  );
}
var Yn;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Yn || (Yn = {}));
const Sf = "popstate";
function Ux(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: a } = r.location;
    return Nc(
      "",
      { pathname: s, search: i, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : pa(o);
  }
  return Vx(t, n, null, e);
}
function je(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Bm(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Bx() {
  return Math.random().toString(36).substr(2, 8);
}
function Cf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Nc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ms(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Mo(t) : t,
      { state: n, key: (t && t.key) || r || Bx() },
    )
  );
}
function pa(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Mo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Vx(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    a = Yn.Pop,
    l = null,
    c = p();
  c == null && ((c = 0), i.replaceState(Ms({}, i.state, { idx: c }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    a = Yn.Pop;
    let b = p(),
      f = b == null ? null : b - c;
    ((c = b), l && l({ action: a, location: x.location, delta: f }));
  }
  function g(b, f) {
    a = Yn.Push;
    let h = Nc(x.location, b, f);
    c = p() + 1;
    let v = Cf(h, c),
      k = x.createHref(h);
    try {
      i.pushState(v, "", k);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      o.location.assign(k);
    }
    s && l && l({ action: a, location: x.location, delta: 1 });
  }
  function d(b, f) {
    a = Yn.Replace;
    let h = Nc(x.location, b, f);
    c = p();
    let v = Cf(h, c),
      k = x.createHref(h);
    (i.replaceState(v, "", k),
      s && l && l({ action: a, location: x.location, delta: 0 }));
  }
  function w(b) {
    let f = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof b == "string" ? b : pa(b);
    return (
      (h = h.replace(/ $/, "%20")),
      je(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, f)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(o, i);
    },
    listen(b) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Sf, m),
        (l = b),
        () => {
          (o.removeEventListener(Sf, m), (l = null));
        }
      );
    },
    createHref(b) {
      return t(o, b);
    },
    createURL: w,
    encodeLocation(b) {
      let f = w(b);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: g,
    replace: d,
    go(b) {
      return i.go(b);
    },
  };
  return x;
}
var Ef;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Ef || (Ef = {}));
function Wx(e, t, n) {
  return (n === void 0 && (n = "/"), Hx(e, t, n, !1));
}
function Hx(e, t, n, r) {
  let o = typeof t == "string" ? Mo(t) : t,
    s = Mu(o.pathname || "/", n);
  if (s == null) return null;
  let i = Vm(e);
  Qx(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) {
    let c = r1(s);
    a = t1(i[l], c, r);
  }
  return a;
}
function Vm(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let o = (s, i, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (je(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = or([r, l.relativePath]),
      p = n.concat(l);
    (s.children &&
      s.children.length > 0 &&
      (je(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      Vm(s.children, t, p, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: Jx(c, s.index), routesMeta: p }));
  };
  return (
    e.forEach((s, i) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) o(s, i);
      else for (let l of Wm(s.path)) o(s, i, l);
    }),
    t
  );
}
function Wm(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = Wm(r.join("/")),
    a = [];
  return (
    a.push(...i.map((l) => (l === "" ? s : [s, l].join("/")))),
    o && a.push(...i),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Qx(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : e1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Gx = /^:[\w-]+$/,
  Kx = 3,
  Yx = 2,
  qx = 1,
  Xx = 10,
  Zx = -2,
  Nf = (e) => e === "*";
function Jx(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Nf) && (r += Zx),
    t && (r += Yx),
    n
      .filter((o) => !Nf(o))
      .reduce((o, s) => o + (Gx.test(s) ? Kx : s === "" ? qx : Xx), r)
  );
}
function e1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function t1(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    s = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      c = a === r.length - 1,
      p = s === "/" ? t : t.slice(s.length) || "/",
      m = _f(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        p,
      ),
      g = l.route;
    if (
      (!m &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (m = _f(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          p,
        )),
      !m)
    )
      return null;
    (Object.assign(o, m.params),
      i.push({
        params: o,
        pathname: or([s, m.pathname]),
        pathnameBase: a1(or([s, m.pathnameBase])),
        route: g,
      }),
      m.pathnameBase !== "/" && (s = or([s, m.pathnameBase])));
  }
  return i;
}
function _f(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = n1(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((c, p, m) => {
      let { paramName: g, isOptional: d } = p;
      if (g === "*") {
        let x = a[m] || "";
        i = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[m];
      return (
        d && !w ? (c[g] = void 0) : (c[g] = (w || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function n1(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Bm(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function r1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Bm(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Mu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function o1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Mo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : s1(n, t)) : t,
    search: l1(r),
    hash: c1(o),
  };
}
function s1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function El(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function i1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Hm(e, t) {
  let n = i1(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Qm(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Mo(e))
    : ((o = Ms({}, e)),
      je(
        !o.pathname || !o.pathname.includes("?"),
        El("?", "pathname", "search", o),
      ),
      je(
        !o.pathname || !o.pathname.includes("#"),
        El("#", "pathname", "hash", o),
      ),
      je(!o.search || !o.search.includes("#"), El("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "",
    i = s ? "/" : o.pathname,
    a;
  if (i == null) a = n;
  else {
    let m = t.length - 1;
    if (!r && i.startsWith("..")) {
      let g = i.split("/");
      for (; g[0] === "..";) (g.shift(), (m -= 1));
      o.pathname = g.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let l = o1(o, a),
    c = i && i !== "/" && i.endsWith("/"),
    p = (s || i === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (c || p) && (l.pathname += "/"), l);
}
const or = (e) => e.join("/").replace(/\/\/+/g, "/"),
  a1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  l1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  c1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function u1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Gm = ["post", "put", "patch", "delete"];
new Set(Gm);
const d1 = ["get", ...Gm];
new Set(d1);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $s() {
  return (
    ($s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $s.apply(this, arguments)
  );
}
const $u = y.createContext(null),
  f1 = y.createContext(null),
  Br = y.createContext(null),
  Da = y.createContext(null),
  Vr = y.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Km = y.createContext(null);
function p1(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ks() || je(!1);
  let { basename: r, navigator: o } = y.useContext(Br),
    { hash: s, pathname: i, search: a } = Xm(e, { relative: n }),
    l = i;
  return (
    r !== "/" && (l = i === "/" ? r : or([r, i])),
    o.createHref({ pathname: l, search: a, hash: s })
  );
}
function Ks() {
  return y.useContext(Da) != null;
}
function Wr() {
  return (Ks() || je(!1), y.useContext(Da).location);
}
function Ym(e) {
  y.useContext(Br).static || y.useLayoutEffect(e);
}
function qm() {
  let { isDataRoute: e } = y.useContext(Vr);
  return e ? N1() : h1();
}
function h1() {
  Ks() || je(!1);
  let e = y.useContext($u),
    { basename: t, future: n, navigator: r } = y.useContext(Br),
    { matches: o } = y.useContext(Vr),
    { pathname: s } = Wr(),
    i = JSON.stringify(Hm(o, n.v7_relativeSplatPath)),
    a = y.useRef(!1);
  return (
    Ym(() => {
      a.current = !0;
    }),
    y.useCallback(
      function (c, p) {
        if ((p === void 0 && (p = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let m = Qm(c, JSON.parse(i), s, p.relative === "path");
        (e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : or([t, m.pathname])),
          (p.replace ? r.replace : r.push)(m, p.state, p));
      },
      [t, r, i, s, e],
    )
  );
}
function Xm(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = y.useContext(Br),
    { matches: o } = y.useContext(Vr),
    { pathname: s } = Wr(),
    i = JSON.stringify(Hm(o, r.v7_relativeSplatPath));
  return y.useMemo(() => Qm(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
}
function m1(e, t) {
  return g1(e, t);
}
function g1(e, t, n, r) {
  Ks() || je(!1);
  let { navigator: o } = y.useContext(Br),
    { matches: s } = y.useContext(Vr),
    i = s[s.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let l = i ? i.pathnameBase : "/";
  i && i.route;
  let c = Wr(),
    p;
  if (t) {
    var m;
    let b = typeof t == "string" ? Mo(t) : t;
    (l === "/" || ((m = b.pathname) != null && m.startsWith(l)) || je(!1),
      (p = b));
  } else p = c;
  let g = p.pathname || "/",
    d = g;
  if (l !== "/") {
    let b = l.replace(/^\//, "").split("/");
    d = "/" + g.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let w = Wx(e, { pathname: d }),
    x = b1(
      w &&
        w.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, a, b.params),
            pathname: or([
              l,
              o.encodeLocation
                ? o.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? l
                : or([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          }),
        ),
      s,
      n,
      r,
    );
  return t && x
    ? y.createElement(
        Da.Provider,
        {
          value: {
            location: $s(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              p,
            ),
            navigationType: Yn.Pop,
          },
        },
        x,
      )
    : x;
}
function v1() {
  let e = E1(),
    t = u1(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return y.createElement(
    y.Fragment,
    null,
    y.createElement("h2", null, "Unexpected Application Error!"),
    y.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? y.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const y1 = y.createElement(v1, null);
class x1 extends y.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? y.createElement(
          Vr.Provider,
          { value: this.props.routeContext },
          y.createElement(Km.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function w1(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = y.useContext($u);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Vr.Provider, { value: t }, r)
  );
}
function b1(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let p = i.findIndex(
      (m) => m.route.id && (a == null ? void 0 : a[m.route.id]) !== void 0,
    );
    (p >= 0 || je(!1), (i = i.slice(0, Math.min(i.length, p + 1))));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < i.length; p++) {
      let m = i[p];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (c = p),
        m.route.id)
      ) {
        let { loaderData: g, errors: d } = n,
          w =
            m.route.loader &&
            g[m.route.id] === void 0 &&
            (!d || d[m.route.id] === void 0);
        if (m.route.lazy || w) {
          ((l = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((p, m, g) => {
    let d,
      w = !1,
      x = null,
      b = null;
    n &&
      ((d = a && m.route.id ? a[m.route.id] : void 0),
      (x = m.route.errorElement || y1),
      l &&
        (c < 0 && g === 0
          ? ((w = !0), (b = null))
          : c === g &&
            ((w = !0), (b = m.route.hydrateFallbackElement || null))));
    let f = t.concat(i.slice(0, g + 1)),
      h = () => {
        let v;
        return (
          d
            ? (v = x)
            : w
              ? (v = b)
              : m.route.Component
                ? (v = y.createElement(m.route.Component, null))
                : m.route.element
                  ? (v = m.route.element)
                  : (v = p),
          y.createElement(w1, {
            match: m,
            routeContext: { outlet: p, matches: f, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? y.createElement(x1, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: d,
          children: h(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Zm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Zm || {}),
  ha = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ha || {});
function k1(e) {
  let t = y.useContext($u);
  return (t || je(!1), t);
}
function S1(e) {
  let t = y.useContext(f1);
  return (t || je(!1), t);
}
function C1(e) {
  let t = y.useContext(Vr);
  return (t || je(!1), t);
}
function Jm(e) {
  let t = C1(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || je(!1), n.route.id);
}
function E1() {
  var e;
  let t = y.useContext(Km),
    n = S1(ha.UseRouteError),
    r = Jm(ha.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function N1() {
  let { router: e } = k1(Zm.UseNavigateStable),
    t = Jm(ha.UseNavigateStable),
    n = y.useRef(!1);
  return (
    Ym(() => {
      n.current = !0;
    }),
    y.useCallback(
      function (o, s) {
        (s === void 0 && (s = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, $s({ fromRouteId: t }, s))));
      },
      [e, t],
    )
  );
}
function _1(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Mn(e) {
  je(!1);
}
function j1(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Yn.Pop,
    navigator: s,
    static: i = !1,
    future: a,
  } = e;
  Ks() && je(!1);
  let l = t.replace(/^\/*/, "/"),
    c = y.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: i,
        future: $s({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, i],
    );
  typeof r == "string" && (r = Mo(r));
  let {
      pathname: p = "/",
      search: m = "",
      hash: g = "",
      state: d = null,
      key: w = "default",
    } = r,
    x = y.useMemo(() => {
      let b = Mu(p, l);
      return b == null
        ? null
        : {
            location: { pathname: b, search: m, hash: g, state: d, key: w },
            navigationType: o,
          };
    }, [l, p, m, g, d, w, o]);
  return x == null
    ? null
    : y.createElement(
        Br.Provider,
        { value: c },
        y.createElement(Da.Provider, { children: n, value: x }),
      );
}
function P1(e) {
  let { children: t, location: n } = e;
  return m1(_c(t), n);
}
new Promise(() => {});
function _c(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    y.Children.forEach(e, (r, o) => {
      if (!y.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === y.Fragment) {
        n.push.apply(n, _c(r.props.children, s));
        return;
      }
      (r.type !== Mn && je(!1), !r.props.index || !r.props.children || je(!1));
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (i.children = _c(r.props.children, s)), n.push(i));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jc() {
  return (
    (jc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jc.apply(this, arguments)
  );
}
function T1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    ((o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]));
  return n;
}
function R1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function L1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !R1(e);
}
function Pc(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]);
          }, []),
    )
  );
}
function I1(e, t) {
  let n = Pc(e);
  return (
    t &&
      t.forEach((r, o) => {
        n.has(o) ||
          t.getAll(o).forEach((s) => {
            n.append(o, s);
          });
      }),
    n
  );
}
const O1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  A1 = "6";
try {
  window.__reactRouterVersion = A1;
} catch {}
const M1 = "startTransition",
  jf = Tp[M1];
function $1(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = y.useRef();
  s.current == null && (s.current = Ux({ window: o, v5Compat: !0 }));
  let i = s.current,
    [a, l] = y.useState({ action: i.action, location: i.location }),
    { v7_startTransition: c } = r || {},
    p = y.useCallback(
      (m) => {
        c && jf ? jf(() => l(m)) : l(m);
      },
      [l, c],
    );
  return (
    y.useLayoutEffect(() => i.listen(p), [i, p]),
    y.useEffect(() => _1(r), [r]),
    y.createElement(j1, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: r,
    })
  );
}
const z1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  D1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pf = y.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: s,
        replace: i,
        state: a,
        target: l,
        to: c,
        preventScrollReset: p,
        viewTransition: m,
      } = t,
      g = T1(t, O1),
      { basename: d } = y.useContext(Br),
      w,
      x = !1;
    if (typeof c == "string" && D1.test(c) && ((w = c), z1))
      try {
        let v = new URL(window.location.href),
          k = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
          S = Mu(k.pathname, d);
        k.origin === v.origin && S != null
          ? (c = S + k.search + k.hash)
          : (x = !0);
      } catch {}
    let b = p1(c, { relative: o }),
      f = F1(c, {
        replace: i,
        state: a,
        target: l,
        preventScrollReset: p,
        relative: o,
        viewTransition: m,
      });
    function h(v) {
      (r && r(v), v.defaultPrevented || f(v));
    }
    return y.createElement(
      "a",
      jc({}, g, { href: w || b, onClick: x || s ? r : h, ref: n, target: l }),
    );
  });
var Tf;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Tf || (Tf = {}));
var Rf;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Rf || (Rf = {}));
function F1(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: s,
      relative: i,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = qm(),
    c = Wr(),
    p = Xm(e, { relative: i });
  return y.useCallback(
    (m) => {
      if (L1(m, n)) {
        m.preventDefault();
        let g = r !== void 0 ? r : pa(c) === pa(p);
        l(e, {
          replace: g,
          state: o,
          preventScrollReset: s,
          relative: i,
          viewTransition: a,
        });
      }
    },
    [c, l, p, r, o, n, e, s, i, a],
  );
}
function U1(e) {
  let t = y.useRef(Pc(e)),
    n = y.useRef(!1),
    r = Wr(),
    o = y.useMemo(() => I1(r.search, n.current ? null : t.current), [r.search]),
    s = qm(),
    i = y.useCallback(
      (a, l) => {
        const c = Pc(typeof a == "function" ? a(o) : a);
        ((n.current = !0), s("?" + c, l));
      },
      [s, o],
    );
  return [o, i];
}
var Lf = ["light", "dark"],
  B1 = "(prefers-color-scheme: dark)",
  V1 = y.createContext(void 0),
  W1 = { setTheme: (e) => {}, themes: [] },
  H1 = () => {
    var e;
    return (e = y.useContext(V1)) != null ? e : W1;
  };
y.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: a,
    nonce: l,
  }) => {
    let c = s === "system",
      p =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((w) => `'${w}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      m = o
        ? Lf.includes(s) && s
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      g = (w, x = !1, b = !0) => {
        let f = i ? i[w] : w,
          h = x ? w + "|| ''" : `'${f}'`,
          v = "";
        return (
          o &&
            b &&
            !x &&
            Lf.includes(w) &&
            (v += `d.style.colorScheme = '${w}';`),
          n === "class"
            ? x || f
              ? (v += `c.add(${h})`)
              : (v += "null")
            : f && (v += `d[s](n,${h})`),
          v
        );
      },
      d = e
        ? `!function(){${p}${g(e)}}()`
        : r
          ? `!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${B1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${g(i ? "x[e]" : "e", !0)}}${c ? "" : "else{" + g(s, !1, !1) + "}"}${m}}catch(e){}}()`
          : `!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${g(i ? "x[e]" : "e", !0)}}else{${g(s, !1, !1)};}${m}}catch(t){}}();`;
    return y.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: d },
    });
  },
);
var Q1 = (e) => {
    switch (e) {
      case "success":
        return Y1;
      case "info":
        return X1;
      case "warning":
        return q1;
      case "error":
        return Z1;
      default:
        return null;
    }
  },
  G1 = Array(12).fill(0),
  K1 = ({ visible: e, className: t }) =>
    A.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      A.createElement(
        "div",
        { className: "sonner-spinner" },
        G1.map((n, r) =>
          A.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  Y1 = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  q1 = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  X1 = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  Z1 = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  J1 = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    A.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    A.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  ew = () => {
    let [e, t] = A.useState(document.hidden);
    return (
      A.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Tc = 1,
  tw = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Tc++,
            s = this.toasts.find((a) => a.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === o
                    ? (this.publish({ ...a, ...e, id: o, title: n }),
                      { ...a, ...e, id: o, dismissible: i, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            s,
            i = r
              .then(async (l) => {
                if (((s = ["resolve", l]), A.isValidElement(l)))
                  ((o = !1),
                    this.create({ id: n, type: "default", message: l }));
                else if (rw(l) && !l.ok) {
                  o = !1;
                  let c =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    p =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: p,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let c =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    p =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: c,
                    description: p,
                  });
                }
              })
              .catch(async (l) => {
                if (((s = ["reject", l]), t.error !== void 0)) {
                  o = !1;
                  let c =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    p =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: p,
                  });
                }
              })
              .finally(() => {
                var l;
                (o && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t));
              }),
            a = () =>
              new Promise((l, c) =>
                i.then(() => (s[0] === "reject" ? c(s[1]) : l(s[1]))).catch(c),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Tc++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  et = new tw(),
  nw = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Tc++;
    return (et.addToast({ title: e, ...t, id: n }), n);
  },
  rw = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  ow = nw,
  sw = () => et.toasts,
  iw = () => et.getActiveToasts(),
  le = Object.assign(
    ow,
    {
      success: et.success,
      info: et.info,
      warning: et.warning,
      error: et.error,
      custom: et.custom,
      message: et.message,
      promise: et.promise,
      dismiss: et.dismiss,
      loading: et.loading,
    },
    { getHistory: sw, getToasts: iw },
  );
function aw(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
aw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ki(e) {
  return e.label !== void 0;
}
var lw = 3,
  cw = "32px",
  uw = "16px",
  If = 4e3,
  dw = 356,
  fw = 14,
  pw = 20,
  hw = 200;
function Lt(...e) {
  return e.filter(Boolean).join(" ");
}
function mw(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var gw = (e) => {
  var t, n, r, o, s, i, a, l, c, p, m;
  let {
      invert: g,
      toast: d,
      unstyled: w,
      interacting: x,
      setHeights: b,
      visibleToasts: f,
      heights: h,
      index: v,
      toasts: k,
      expanded: S,
      removeToast: E,
      defaultRichColors: N,
      closeButton: j,
      style: M,
      cancelButtonStyle: O,
      actionButtonStyle: D,
      className: F = "",
      descriptionClassName: Y = "",
      duration: $,
      position: X,
      gap: Q,
      loadingIcon: V,
      expandByDefault: _,
      classNames: T,
      icons: z,
      closeButtonAriaLabel: q = "Close toast",
      pauseWhenPageIsHidden: W,
    } = e,
    [Z, ne] = A.useState(null),
    [ce, Ne] = A.useState(null),
    [oe, Nt] = A.useState(!1),
    [_t, an] = A.useState(!1),
    [Ve, Wt] = A.useState(!1),
    [qe, mr] = A.useState(!1),
    [ln, gr] = A.useState(!1),
    [cn, Xe] = A.useState(0),
    [Ht, Uo] = A.useState(0),
    un = A.useRef(d.duration || $ || If),
    Js = A.useRef(null),
    Qt = A.useRef(null),
    Ya = v === 0,
    ei = v + 1 <= f,
    Ze = d.type,
    dn = d.dismissible !== !1,
    qa = d.className || "",
    jt = d.descriptionClassName || "",
    fn = A.useMemo(
      () => h.findIndex((H) => H.toastId === d.id) || 0,
      [h, d.id],
    ),
    ti = A.useMemo(() => {
      var H;
      return (H = d.closeButton) != null ? H : j;
    }, [d.closeButton, j]),
    ni = A.useMemo(() => d.duration || $ || If, [d.duration, $]),
    Bo = A.useRef(0),
    pn = A.useRef(0),
    Vo = A.useRef(0),
    C = A.useRef(null),
    [I, U] = X.split("-"),
    R = A.useMemo(
      () => h.reduce((H, se, fe) => (fe >= fn ? H : H + se.height), 0),
      [h, fn],
    ),
    J = ew(),
    G = d.invert || g,
    K = Ze === "loading";
  ((pn.current = A.useMemo(() => fn * Q + R, [fn, R])),
    A.useEffect(() => {
      un.current = ni;
    }, [ni]),
    A.useEffect(() => {
      Nt(!0);
    }, []),
    A.useEffect(() => {
      let H = Qt.current;
      if (H) {
        let se = H.getBoundingClientRect().height;
        return (
          Uo(se),
          b((fe) => [
            { toastId: d.id, height: se, position: d.position },
            ...fe,
          ]),
          () => b((fe) => fe.filter((Je) => Je.toastId !== d.id))
        );
      }
    }, [b, d.id]),
    A.useLayoutEffect(() => {
      if (!oe) return;
      let H = Qt.current,
        se = H.style.height;
      H.style.height = "auto";
      let fe = H.getBoundingClientRect().height;
      ((H.style.height = se),
        Uo(fe),
        b((Je) =>
          Je.find((it) => it.toastId === d.id)
            ? Je.map((it) => (it.toastId === d.id ? { ...it, height: fe } : it))
            : [{ toastId: d.id, height: fe, position: d.position }, ...Je],
        ));
    }, [oe, d.title, d.description, b, d.id]));
  let de = A.useCallback(() => {
    (an(!0),
      Xe(pn.current),
      b((H) => H.filter((se) => se.toastId !== d.id)),
      setTimeout(() => {
        E(d);
      }, hw));
  }, [d, E, b, pn]);
  (A.useEffect(() => {
    if (
      (d.promise && Ze === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let H;
    return (
      S || x || (W && J)
        ? (() => {
            if (Vo.current < Bo.current) {
              let se = new Date().getTime() - Bo.current;
              un.current = un.current - se;
            }
            Vo.current = new Date().getTime();
          })()
        : un.current !== 1 / 0 &&
          ((Bo.current = new Date().getTime()),
          (H = setTimeout(() => {
            var se;
            ((se = d.onAutoClose) == null || se.call(d, d), de());
          }, un.current))),
      () => clearTimeout(H)
    );
  }, [S, x, d, Ze, W, J, de]),
    A.useEffect(() => {
      d.delete && de();
    }, [de, d.delete]));
  function Tn() {
    var H, se, fe;
    return z != null && z.loading
      ? A.createElement(
          "div",
          {
            className: Lt(
              T == null ? void 0 : T.loader,
              (H = d == null ? void 0 : d.classNames) == null
                ? void 0
                : H.loader,
              "sonner-loader",
            ),
            "data-visible": Ze === "loading",
          },
          z.loading,
        )
      : V
        ? A.createElement(
            "div",
            {
              className: Lt(
                T == null ? void 0 : T.loader,
                (se = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : se.loader,
                "sonner-loader",
              ),
              "data-visible": Ze === "loading",
            },
            V,
          )
        : A.createElement(K1, {
            className: Lt(
              T == null ? void 0 : T.loader,
              (fe = d == null ? void 0 : d.classNames) == null
                ? void 0
                : fe.loader,
            ),
            visible: Ze === "loading",
          });
  }
  return A.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Qt,
      className: Lt(
        F,
        qa,
        T == null ? void 0 : T.toast,
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
        T == null ? void 0 : T.default,
        T == null ? void 0 : T[Ze],
        (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Ze],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = d.richColors) != null ? r : N,
      "data-styled": !(d.jsx || d.unstyled || w),
      "data-mounted": oe,
      "data-promise": !!d.promise,
      "data-swiped": ln,
      "data-removed": _t,
      "data-visible": ei,
      "data-y-position": I,
      "data-x-position": U,
      "data-index": v,
      "data-front": Ya,
      "data-swiping": Ve,
      "data-dismissible": dn,
      "data-type": Ze,
      "data-invert": G,
      "data-swipe-out": qe,
      "data-swipe-direction": ce,
      "data-expanded": !!(S || (_ && oe)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": k.length - v,
        "--offset": `${_t ? cn : pn.current}px`,
        "--initial-height": _ ? "auto" : `${Ht}px`,
        ...M,
        ...d.style,
      },
      onDragEnd: () => {
        (Wt(!1), ne(null), (C.current = null));
      },
      onPointerDown: (H) => {
        K ||
          !dn ||
          ((Js.current = new Date()),
          Xe(pn.current),
          H.target.setPointerCapture(H.pointerId),
          H.target.tagName !== "BUTTON" &&
            (Wt(!0), (C.current = { x: H.clientX, y: H.clientY })));
      },
      onPointerUp: () => {
        var H, se, fe, Je;
        if (qe || !dn) return;
        C.current = null;
        let it = Number(
            ((H = Qt.current) == null
              ? void 0
              : H.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Pt = Number(
            ((se = Qt.current) == null
              ? void 0
              : se.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          vr =
            new Date().getTime() -
            ((fe = Js.current) == null ? void 0 : fe.getTime()),
          Tt = Z === "x" ? it : Pt,
          Rn = Math.abs(Tt) / vr;
        if (Math.abs(Tt) >= pw || Rn > 0.11) {
          (Xe(pn.current),
            (Je = d.onDismiss) == null || Je.call(d, d),
            Ne(
              Z === "x" ? (it > 0 ? "right" : "left") : Pt > 0 ? "down" : "up",
            ),
            de(),
            mr(!0),
            gr(!1));
          return;
        }
        (Wt(!1), ne(null));
      },
      onPointerMove: (H) => {
        var se, fe, Je, it;
        if (
          !C.current ||
          !dn ||
          ((se = window.getSelection()) == null
            ? void 0
            : se.toString().length) > 0
        )
          return;
        let Pt = H.clientY - C.current.y,
          vr = H.clientX - C.current.x,
          Tt = (fe = e.swipeDirections) != null ? fe : mw(X);
        !Z &&
          (Math.abs(vr) > 1 || Math.abs(Pt) > 1) &&
          ne(Math.abs(vr) > Math.abs(Pt) ? "x" : "y");
        let Rn = { x: 0, y: 0 };
        (Z === "y"
          ? (Tt.includes("top") || Tt.includes("bottom")) &&
            ((Tt.includes("top") && Pt < 0) ||
              (Tt.includes("bottom") && Pt > 0)) &&
            (Rn.y = Pt)
          : Z === "x" &&
            (Tt.includes("left") || Tt.includes("right")) &&
            ((Tt.includes("left") && vr < 0) ||
              (Tt.includes("right") && vr > 0)) &&
            (Rn.x = vr),
          (Math.abs(Rn.x) > 0 || Math.abs(Rn.y) > 0) && gr(!0),
          (Je = Qt.current) == null ||
            Je.style.setProperty("--swipe-amount-x", `${Rn.x}px`),
          (it = Qt.current) == null ||
            it.style.setProperty("--swipe-amount-y", `${Rn.y}px`));
      },
    },
    ti && !d.jsx
      ? A.createElement(
          "button",
          {
            "aria-label": q,
            "data-disabled": K,
            "data-close-button": !0,
            onClick:
              K || !dn
                ? () => {}
                : () => {
                    var H;
                    (de(), (H = d.onDismiss) == null || H.call(d, d));
                  },
            className: Lt(
              T == null ? void 0 : T.closeButton,
              (o = d == null ? void 0 : d.classNames) == null
                ? void 0
                : o.closeButton,
            ),
          },
          (s = z == null ? void 0 : z.close) != null ? s : J1,
        )
      : null,
    d.jsx || y.isValidElement(d.title)
      ? d.jsx
        ? d.jsx
        : typeof d.title == "function"
          ? d.title()
          : d.title
      : A.createElement(
          A.Fragment,
          null,
          Ze || d.icon || d.promise
            ? A.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Lt(
                    T == null ? void 0 : T.icon,
                    (i = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : i.icon,
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || Tn()
                  : null,
                d.type !== "loading"
                  ? d.icon || (z == null ? void 0 : z[Ze]) || Q1(Ze)
                  : null,
              )
            : null,
          A.createElement(
            "div",
            {
              "data-content": "",
              className: Lt(
                T == null ? void 0 : T.content,
                (a = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            A.createElement(
              "div",
              {
                "data-title": "",
                className: Lt(
                  T == null ? void 0 : T.title,
                  (l = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof d.title == "function" ? d.title() : d.title,
            ),
            d.description
              ? A.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Lt(
                      Y,
                      jt,
                      T == null ? void 0 : T.description,
                      (c = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : c.description,
                    ),
                  },
                  typeof d.description == "function"
                    ? d.description()
                    : d.description,
                )
              : null,
          ),
          y.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && ki(d.cancel)
              ? A.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: d.cancelButtonStyle || O,
                    onClick: (H) => {
                      var se, fe;
                      ki(d.cancel) &&
                        dn &&
                        ((fe = (se = d.cancel).onClick) == null ||
                          fe.call(se, H),
                        de());
                    },
                    className: Lt(
                      T == null ? void 0 : T.cancelButton,
                      (p = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : p.cancelButton,
                    ),
                  },
                  d.cancel.label,
                )
              : null,
          y.isValidElement(d.action)
            ? d.action
            : d.action && ki(d.action)
              ? A.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: d.actionButtonStyle || D,
                    onClick: (H) => {
                      var se, fe;
                      ki(d.action) &&
                        ((fe = (se = d.action).onClick) == null ||
                          fe.call(se, H),
                        !H.defaultPrevented && de());
                    },
                    className: Lt(
                      T == null ? void 0 : T.actionButton,
                      (m = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : m.actionButton,
                    ),
                  },
                  d.action.label,
                )
              : null,
        ),
  );
};
function Of() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function vw(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let s = o === 1,
        i = s ? "--mobile-offset" : "--offset",
        a = s ? uw : cw;
      function l(c) {
        ["top", "right", "bottom", "left"].forEach((p) => {
          n[`${i}-${p}`] = typeof c == "number" ? `${c}px` : c;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((c) => {
              r[c] === void 0
                ? (n[`${i}-${c}`] = a)
                : (n[`${i}-${c}`] =
                    typeof r[c] == "number" ? `${r[c]}px` : r[c]);
            })
          : l(a);
    }),
    n
  );
}
var yw = y.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: s,
      closeButton: i,
      className: a,
      offset: l,
      mobileOffset: c,
      theme: p = "light",
      richColors: m,
      duration: g,
      style: d,
      visibleToasts: w = lw,
      toastOptions: x,
      dir: b = Of(),
      gap: f = fw,
      loadingIcon: h,
      icons: v,
      containerAriaLabel: k = "Notifications",
      pauseWhenPageIsHidden: S,
    } = e,
    [E, N] = A.useState([]),
    j = A.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(E.filter((W) => W.position).map((W) => W.position)),
          ),
        ),
      [E, r],
    ),
    [M, O] = A.useState([]),
    [D, F] = A.useState(!1),
    [Y, $] = A.useState(!1),
    [X, Q] = A.useState(
      p !== "system"
        ? p
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    V = A.useRef(null),
    _ = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    T = A.useRef(null),
    z = A.useRef(!1),
    q = A.useCallback((W) => {
      N((Z) => {
        var ne;
        return (
          ((ne = Z.find((ce) => ce.id === W.id)) != null && ne.delete) ||
            et.dismiss(W.id),
          Z.filter(({ id: ce }) => ce !== W.id)
        );
      });
    }, []);
  return (
    A.useEffect(
      () =>
        et.subscribe((W) => {
          if (W.dismiss) {
            N((Z) =>
              Z.map((ne) => (ne.id === W.id ? { ...ne, delete: !0 } : ne)),
            );
            return;
          }
          setTimeout(() => {
            Im.flushSync(() => {
              N((Z) => {
                let ne = Z.findIndex((ce) => ce.id === W.id);
                return ne !== -1
                  ? [...Z.slice(0, ne), { ...Z[ne], ...W }, ...Z.slice(ne + 1)]
                  : [W, ...Z];
              });
            });
          });
        }),
      [],
    ),
    A.useEffect(() => {
      if (p !== "system") {
        Q(p);
        return;
      }
      if (
        (p === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? Q("dark")
            : Q("light")),
        typeof window > "u")
      )
        return;
      let W = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        W.addEventListener("change", ({ matches: Z }) => {
          Q(Z ? "dark" : "light");
        });
      } catch {
        W.addListener(({ matches: ne }) => {
          try {
            Q(ne ? "dark" : "light");
          } catch (ce) {
            console.error(ce);
          }
        });
      }
    }, [p]),
    A.useEffect(() => {
      E.length <= 1 && F(!1);
    }, [E]),
    A.useEffect(() => {
      let W = (Z) => {
        var ne, ce;
        (o.every((Ne) => Z[Ne] || Z.code === Ne) &&
          (F(!0), (ne = V.current) == null || ne.focus()),
          Z.code === "Escape" &&
            (document.activeElement === V.current ||
              ((ce = V.current) != null &&
                ce.contains(document.activeElement))) &&
            F(!1));
      };
      return (
        document.addEventListener("keydown", W),
        () => document.removeEventListener("keydown", W)
      );
    }, [o]),
    A.useEffect(() => {
      if (V.current)
        return () => {
          T.current &&
            (T.current.focus({ preventScroll: !0 }),
            (T.current = null),
            (z.current = !1));
        };
    }, [V.current]),
    A.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${k} ${_}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      j.map((W, Z) => {
        var ne;
        let [ce, Ne] = W.split("-");
        return E.length
          ? A.createElement(
              "ol",
              {
                key: W,
                dir: b === "auto" ? Of() : b,
                tabIndex: -1,
                ref: V,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": X,
                "data-y-position": ce,
                "data-lifted": D && E.length > 1 && !s,
                "data-x-position": Ne,
                style: {
                  "--front-toast-height": `${((ne = M[0]) == null ? void 0 : ne.height) || 0}px`,
                  "--width": `${dw}px`,
                  "--gap": `${f}px`,
                  ...d,
                  ...vw(l, c),
                },
                onBlur: (oe) => {
                  z.current &&
                    !oe.currentTarget.contains(oe.relatedTarget) &&
                    ((z.current = !1),
                    T.current &&
                      (T.current.focus({ preventScroll: !0 }),
                      (T.current = null)));
                },
                onFocus: (oe) => {
                  (oe.target instanceof HTMLElement &&
                    oe.target.dataset.dismissible === "false") ||
                    z.current ||
                    ((z.current = !0), (T.current = oe.relatedTarget));
                },
                onMouseEnter: () => F(!0),
                onMouseMove: () => F(!0),
                onMouseLeave: () => {
                  Y || F(!1);
                },
                onDragEnd: () => F(!1),
                onPointerDown: (oe) => {
                  (oe.target instanceof HTMLElement &&
                    oe.target.dataset.dismissible === "false") ||
                    $(!0);
                },
                onPointerUp: () => $(!1),
              },
              E.filter(
                (oe) => (!oe.position && Z === 0) || oe.position === W,
              ).map((oe, Nt) => {
                var _t, an;
                return A.createElement(gw, {
                  key: oe.id,
                  icons: v,
                  index: Nt,
                  toast: oe,
                  defaultRichColors: m,
                  duration:
                    (_t = x == null ? void 0 : x.duration) != null ? _t : g,
                  className: x == null ? void 0 : x.className,
                  descriptionClassName:
                    x == null ? void 0 : x.descriptionClassName,
                  invert: n,
                  visibleToasts: w,
                  closeButton:
                    (an = x == null ? void 0 : x.closeButton) != null ? an : i,
                  interacting: Y,
                  position: W,
                  style: x == null ? void 0 : x.style,
                  unstyled: x == null ? void 0 : x.unstyled,
                  classNames: x == null ? void 0 : x.classNames,
                  cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                  actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                  removeToast: q,
                  toasts: E.filter((Ve) => Ve.position == oe.position),
                  heights: M.filter((Ve) => Ve.position == oe.position),
                  setHeights: O,
                  expandByDefault: s,
                  gap: f,
                  loadingIcon: h,
                  expanded: D,
                  pauseWhenPageIsHidden: S,
                  swipeDirections: e.swipeDirections,
                });
              }),
            )
          : null;
      }),
    )
  );
});
const xw = ({ ...e }) => {
    const { theme: t = "system" } = H1();
    return u.jsx(yw, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  ww = 1,
  bw = 1e6;
let Nl = 0;
function kw() {
  return ((Nl = (Nl + 1) % Number.MAX_SAFE_INTEGER), Nl.toString());
}
const _l = new Map(),
  Af = (e) => {
    if (_l.has(e)) return;
    const t = setTimeout(() => {
      (_l.delete(e), gs({ type: "REMOVE_TOAST", toastId: e }));
    }, bw);
    _l.set(e, t);
  },
  Sw = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, ww) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Af(n)
            : e.toasts.forEach((r) => {
                Af(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Di = [];
let Fi = { toasts: [] };
function gs(e) {
  ((Fi = Sw(Fi, e)),
    Di.forEach((t) => {
      t(Fi);
    }));
}
function Cw({ ...e }) {
  const t = kw(),
    n = (o) => gs({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => gs({ type: "DISMISS_TOAST", toastId: t });
  return (
    gs({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Ew() {
  const [e, t] = y.useState(Fi);
  return (
    y.useEffect(
      () => (
        Di.push(t),
        () => {
          const n = Di.indexOf(t);
          n > -1 && Di.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: Cw,
      dismiss: (n) => gs({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function Ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Mf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function eg(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Mf(o, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Mf(e[o], null);
        }
      };
  };
}
function pt(...e) {
  return y.useCallback(eg(...e), e);
}
function $o(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = y.createContext(i),
      l = n.length;
    n = [...n, i];
    const c = (m) => {
      var f;
      const { scope: g, children: d, ...w } = m,
        x = ((f = g == null ? void 0 : g[e]) == null ? void 0 : f[l]) || a,
        b = y.useMemo(() => w, Object.values(w));
      return u.jsx(x.Provider, { value: b, children: d });
    };
    c.displayName = s + "Provider";
    function p(m, g) {
      var x;
      const d = ((x = g == null ? void 0 : g[e]) == null ? void 0 : x[l]) || a,
        w = y.useContext(d);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return [c, p];
  }
  const o = () => {
    const s = n.map((i) => y.createContext(i));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return y.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return ((o.scopeName = e), [r, Nw(o, ...t)]);
}
function Nw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((a, { useScope: l, scopeName: c }) => {
        const m = l(s)[`__scope${c}`];
        return { ...a, ...m };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function ma(e) {
  const t = jw(e),
    n = y.forwardRef((r, o) => {
      const { children: s, ...i } = r,
        a = y.Children.toArray(s),
        l = a.find(Tw);
      if (l) {
        const c = l.props.children,
          p = a.map((m) =>
            m === l
              ? y.Children.count(c) > 1
                ? y.Children.only(null)
                : y.isValidElement(c)
                  ? c.props.children
                  : null
              : m,
          );
        return u.jsx(t, {
          ...i,
          ref: o,
          children: y.isValidElement(c) ? y.cloneElement(c, void 0, p) : null,
        });
      }
      return u.jsx(t, { ...i, ref: o, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var _w = ma("Slot");
function jw(e) {
  const t = y.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (y.isValidElement(o)) {
      const i = Lw(o),
        a = Rw(s, o.props);
      return (
        o.type !== y.Fragment && (a.ref = r ? eg(r, i) : i),
        y.cloneElement(o, a)
      );
    }
    return y.Children.count(o) > 1 ? y.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var tg = Symbol("radix.slottable");
function Pw(e) {
  const t = ({ children: n }) => u.jsx(u.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = tg), t);
}
function Tw(e) {
  return (
    y.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === tg
  );
}
function Rw(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...a) => {
            const l = s(...a);
            return (o(...a), l);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...s })
        : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Lw(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Iw(e) {
  const t = e + "CollectionProvider",
    [n, r] = $o(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (x) => {
      const { scope: b, children: f } = x,
        h = A.useRef(null),
        v = A.useRef(new Map()).current;
      return u.jsx(o, { scope: b, itemMap: v, collectionRef: h, children: f });
    };
  i.displayName = t;
  const a = e + "CollectionSlot",
    l = ma(a),
    c = A.forwardRef((x, b) => {
      const { scope: f, children: h } = x,
        v = s(a, f),
        k = pt(b, v.collectionRef);
      return u.jsx(l, { ref: k, children: h });
    });
  c.displayName = a;
  const p = e + "CollectionItemSlot",
    m = "data-radix-collection-item",
    g = ma(p),
    d = A.forwardRef((x, b) => {
      const { scope: f, children: h, ...v } = x,
        k = A.useRef(null),
        S = pt(b, k),
        E = s(p, f);
      return (
        A.useEffect(
          () => (
            E.itemMap.set(k, { ref: k, ...v }),
            () => void E.itemMap.delete(k)
          ),
        ),
        u.jsx(g, { [m]: "", ref: S, children: h })
      );
    });
  d.displayName = p;
  function w(x) {
    const b = s(e + "CollectionConsumer", x);
    return A.useCallback(() => {
      const h = b.collectionRef.current;
      if (!h) return [];
      const v = Array.from(h.querySelectorAll(`[${m}]`));
      return Array.from(b.itemMap.values()).sort(
        (E, N) => v.indexOf(E.ref.current) - v.indexOf(N.ref.current),
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [{ Provider: i, Slot: c, ItemSlot: d }, w, r];
}
var Ow = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Re = Ow.reduce((e, t) => {
    const n = ma(`Primitive.${t}`),
      r = y.forwardRef((o, s) => {
        const { asChild: i, ...a } = o,
          l = i ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(l, { ...a, ref: s })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function ng(e, t) {
  e && Gs.flushSync(() => e.dispatchEvent(t));
}
function lr(e) {
  const t = y.useRef(e);
  return (
    y.useEffect(() => {
      t.current = e;
    }),
    y.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function Aw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = lr(e);
  y.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Mw = "DismissableLayer",
  Rc = "dismissableLayer.update",
  $w = "dismissableLayer.pointerDownOutside",
  zw = "dismissableLayer.focusOutside",
  $f,
  rg = y.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  zu = y.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: a,
        ...l
      } = e,
      c = y.useContext(rg),
      [p, m] = y.useState(null),
      g =
        (p == null ? void 0 : p.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, d] = y.useState({}),
      w = pt(t, (N) => m(N)),
      x = Array.from(c.layers),
      [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      f = x.indexOf(b),
      h = p ? x.indexOf(p) : -1,
      v = c.layersWithOutsidePointerEventsDisabled.size > 0,
      k = h >= f,
      S = Fw((N) => {
        const j = N.target,
          M = [...c.branches].some((O) => O.contains(j));
        !k ||
          M ||
          (o == null || o(N),
          i == null || i(N),
          N.defaultPrevented || a == null || a());
      }, g),
      E = Uw((N) => {
        const j = N.target;
        [...c.branches].some((O) => O.contains(j)) ||
          (s == null || s(N),
          i == null || i(N),
          N.defaultPrevented || a == null || a());
      }, g);
    return (
      Aw((N) => {
        h === c.layers.size - 1 &&
          (r == null || r(N),
          !N.defaultPrevented && a && (N.preventDefault(), a()));
      }, g),
      y.useEffect(() => {
        if (p)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                (($f = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(p)),
            c.layers.add(p),
            zf(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = $f);
            }
          );
      }, [p, g, n, c]),
      y.useEffect(
        () => () => {
          p &&
            (c.layers.delete(p),
            c.layersWithOutsidePointerEventsDisabled.delete(p),
            zf());
        },
        [p, c],
      ),
      y.useEffect(() => {
        const N = () => d({});
        return (
          document.addEventListener(Rc, N),
          () => document.removeEventListener(Rc, N)
        );
      }, []),
      u.jsx(Re.div, {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? (k ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ee(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Ee(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Ee(
          e.onPointerDownCapture,
          S.onPointerDownCapture,
        ),
      })
    );
  });
zu.displayName = Mw;
var Dw = "DismissableLayerBranch",
  og = y.forwardRef((e, t) => {
    const n = y.useContext(rg),
      r = y.useRef(null),
      o = pt(t, r);
    return (
      y.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      u.jsx(Re.div, { ...e, ref: o })
    );
  });
og.displayName = Dw;
function Fw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = lr(e),
    r = y.useRef(!1),
    o = y.useRef(() => {});
  return (
    y.useEffect(() => {
      const s = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              sg($w, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        (window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Uw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = lr(e),
    r = y.useRef(!1);
  return (
    y.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          sg(zw, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function zf() {
  const e = new CustomEvent(Rc);
  document.dispatchEvent(e);
}
function sg(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? ng(o, s) : o.dispatchEvent(s));
}
var Bw = zu,
  Vw = og,
  cr = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {},
  Ww = "Portal",
  ig = y.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, s] = y.useState(!1);
    cr(() => s(!0), []);
    const i =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return i ? Im.createPortal(u.jsx(Re.div, { ...r, ref: t }), i) : null;
  });
ig.displayName = Ww;
function Hw(e, t) {
  return y.useReducer((n, r) => t[n][r] ?? n, e);
}
var Fa = (e) => {
  const { present: t, children: n } = e,
    r = Qw(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : y.Children.only(n),
    s = pt(r.ref, Gw(o));
  return typeof n == "function" || r.isPresent
    ? y.cloneElement(o, { ref: s })
    : null;
};
Fa.displayName = "Presence";
function Qw(e) {
  const [t, n] = y.useState(),
    r = y.useRef(null),
    o = y.useRef(e),
    s = y.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [a, l] = Hw(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    y.useEffect(() => {
      const c = Si(r.current);
      s.current = a === "mounted" ? c : "none";
    }, [a]),
    cr(() => {
      const c = r.current,
        p = o.current;
      if (p !== e) {
        const g = s.current,
          d = Si(c);
        (e
          ? l("MOUNT")
          : d === "none" || (c == null ? void 0 : c.display) === "none"
            ? l("UNMOUNT")
            : l(p && g !== d ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, l]),
    cr(() => {
      if (t) {
        let c;
        const p = t.ownerDocument.defaultView ?? window,
          m = (d) => {
            const x = Si(r.current).includes(d.animationName);
            if (d.target === t && x && (l("ANIMATION_END"), !o.current)) {
              const b = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (c = p.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = b);
                })));
            }
          },
          g = (d) => {
            d.target === t && (s.current = Si(r.current));
          };
        return (
          t.addEventListener("animationstart", g),
          t.addEventListener("animationcancel", m),
          t.addEventListener("animationend", m),
          () => {
            (p.clearTimeout(c),
              t.removeEventListener("animationstart", g),
              t.removeEventListener("animationcancel", m),
              t.removeEventListener("animationend", m));
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: y.useCallback((c) => {
        ((r.current = c ? getComputedStyle(c) : null), n(c));
      }, []),
    }
  );
}
function Si(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Gw(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Kw = Tp[" useInsertionEffect ".trim().toString()] || cr;
function ag({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, s, i] = Yw({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : o;
  {
    const p = y.useRef(e !== void 0);
    y.useEffect(() => {
      const m = p.current;
      (m !== a &&
        console.warn(
          `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (p.current = a));
    }, [a, r]);
  }
  const c = y.useCallback(
    (p) => {
      var m;
      if (a) {
        const g = qw(p) ? p(e) : p;
        g !== e && ((m = i.current) == null || m.call(i, g));
      } else s(p);
    },
    [a, e, s, i],
  );
  return [l, c];
}
function Yw({ defaultProp: e, onChange: t }) {
  const [n, r] = y.useState(e),
    o = y.useRef(n),
    s = y.useRef(t);
  return (
    Kw(() => {
      s.current = t;
    }, [t]),
    y.useEffect(() => {
      var i;
      o.current !== n &&
        ((i = s.current) == null || i.call(s, n), (o.current = n));
    }, [n, o]),
    [n, r, s]
  );
}
function qw(e) {
  return typeof e == "function";
}
var Xw = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Zw = "VisuallyHidden",
  Ua = y.forwardRef((e, t) =>
    u.jsx(Re.span, { ...e, ref: t, style: { ...Xw, ...e.style } }),
  );
Ua.displayName = Zw;
var Jw = Ua,
  Du = "ToastProvider",
  [Fu, eb, tb] = Iw("Toast"),
  [lg, qE] = $o("Toast", [tb]),
  [nb, Ba] = lg(Du),
  cg = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [a, l] = y.useState(null),
      [c, p] = y.useState(0),
      m = y.useRef(!1),
      g = y.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Du}\`. Expected non-empty \`string\`.`,
        ),
      u.jsx(Fu.Provider, {
        scope: t,
        children: u.jsx(nb, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: c,
          viewport: a,
          onViewportChange: l,
          onToastAdd: y.useCallback(() => p((d) => d + 1), []),
          onToastRemove: y.useCallback(() => p((d) => d - 1), []),
          isFocusedToastEscapeKeyDownRef: m,
          isClosePausedRef: g,
          children: i,
        }),
      })
    );
  };
cg.displayName = Du;
var ug = "ToastViewport",
  rb = ["F8"],
  Lc = "toast.viewportPause",
  Ic = "toast.viewportResume",
  dg = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = rb,
        label: o = "Notifications ({hotkey})",
        ...s
      } = e,
      i = Ba(ug, n),
      a = eb(n),
      l = y.useRef(null),
      c = y.useRef(null),
      p = y.useRef(null),
      m = y.useRef(null),
      g = pt(t, m, i.onViewportChange),
      d = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = i.toastCount > 0;
    (y.useEffect(() => {
      const b = (f) => {
        var v;
        r.length !== 0 &&
          r.every((k) => f[k] || f.code === k) &&
          ((v = m.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
      );
    }, [r]),
      y.useEffect(() => {
        const b = l.current,
          f = m.current;
        if (w && b && f) {
          const h = () => {
              if (!i.isClosePausedRef.current) {
                const E = new CustomEvent(Lc);
                (f.dispatchEvent(E), (i.isClosePausedRef.current = !0));
              }
            },
            v = () => {
              if (i.isClosePausedRef.current) {
                const E = new CustomEvent(Ic);
                (f.dispatchEvent(E), (i.isClosePausedRef.current = !1));
              }
            },
            k = (E) => {
              !b.contains(E.relatedTarget) && v();
            },
            S = () => {
              b.contains(document.activeElement) || v();
            };
          return (
            b.addEventListener("focusin", h),
            b.addEventListener("focusout", k),
            b.addEventListener("pointermove", h),
            b.addEventListener("pointerleave", S),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
              (b.removeEventListener("focusin", h),
                b.removeEventListener("focusout", k),
                b.removeEventListener("pointermove", h),
                b.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v));
            }
          );
        }
      }, [w, i.isClosePausedRef]));
    const x = y.useCallback(
      ({ tabbingDirection: b }) => {
        const h = a().map((v) => {
          const k = v.ref.current,
            S = [k, ...gb(k)];
          return b === "forwards" ? S : S.reverse();
        });
        return (b === "forwards" ? h.reverse() : h).flat();
      },
      [a],
    );
    return (
      y.useEffect(() => {
        const b = m.current;
        if (b) {
          const f = (h) => {
            var S, E, N;
            const v = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === "Tab" && !v) {
              const j = document.activeElement,
                M = h.shiftKey;
              if (h.target === b && M) {
                (S = c.current) == null || S.focus();
                return;
              }
              const F = x({ tabbingDirection: M ? "backwards" : "forwards" }),
                Y = F.findIndex(($) => $ === j);
              jl(F.slice(Y + 1))
                ? h.preventDefault()
                : M
                  ? (E = c.current) == null || E.focus()
                  : (N = p.current) == null || N.focus();
            }
          };
          return (
            b.addEventListener("keydown", f),
            () => b.removeEventListener("keydown", f)
          );
        }
      }, [a, x]),
      u.jsxs(Vw, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", d),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            u.jsx(Oc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const b = x({ tabbingDirection: "forwards" });
                jl(b);
              },
            }),
          u.jsx(Fu.Slot, {
            scope: n,
            children: u.jsx(Re.ol, { tabIndex: -1, ...s, ref: g }),
          }),
          w &&
            u.jsx(Oc, {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const b = x({ tabbingDirection: "backwards" });
                jl(b);
              },
            }),
        ],
      })
    );
  });
dg.displayName = ug;
var fg = "ToastFocusProxy",
  Oc = y.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = Ba(fg, n);
    return u.jsx(Ua, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var c;
        const a = i.relatedTarget;
        !((c = s.viewport) != null && c.contains(a)) && r();
      },
    });
  });
Oc.displayName = fg;
var Ys = "Toast",
  ob = "toast.swipeStart",
  sb = "toast.swipeMove",
  ib = "toast.swipeCancel",
  ab = "toast.swipeEnd",
  pg = y.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [a, l] = ag({ prop: r, defaultProp: o ?? !0, onChange: s, caller: Ys });
    return u.jsx(Fa, {
      present: n || a,
      children: u.jsx(ub, {
        open: a,
        ...i,
        ref: t,
        onClose: () => l(!1),
        onPause: lr(e.onPause),
        onResume: lr(e.onResume),
        onSwipeStart: Ee(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Ee(e.onSwipeMove, (c) => {
          const { x: p, y: m } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "move"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${p}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${m}px`,
            ));
        }),
        onSwipeCancel: Ee(e.onSwipeCancel, (c) => {
          (c.currentTarget.setAttribute("data-swipe", "cancel"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: Ee(e.onSwipeEnd, (c) => {
          const { x: p, y: m } = c.detail.delta;
          (c.currentTarget.setAttribute("data-swipe", "end"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${p}px`,
            ),
            c.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${m}px`,
            ),
            l(!1));
        }),
      }),
    });
  });
pg.displayName = Ys;
var [lb, cb] = lg(Ys, { onClose() {} }),
  ub = y.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: c,
        onSwipeStart: p,
        onSwipeMove: m,
        onSwipeCancel: g,
        onSwipeEnd: d,
        ...w
      } = e,
      x = Ba(Ys, n),
      [b, f] = y.useState(null),
      h = pt(t, ($) => f($)),
      v = y.useRef(null),
      k = y.useRef(null),
      S = o || x.duration,
      E = y.useRef(0),
      N = y.useRef(S),
      j = y.useRef(0),
      { onToastAdd: M, onToastRemove: O } = x,
      D = lr(() => {
        var X;
        ((b == null ? void 0 : b.contains(document.activeElement)) &&
          ((X = x.viewport) == null || X.focus()),
          i());
      }),
      F = y.useCallback(
        ($) => {
          !$ ||
            $ === 1 / 0 ||
            (window.clearTimeout(j.current),
            (E.current = new Date().getTime()),
            (j.current = window.setTimeout(D, $)));
        },
        [D],
      );
    (y.useEffect(() => {
      const $ = x.viewport;
      if ($) {
        const X = () => {
            (F(N.current), c == null || c());
          },
          Q = () => {
            const V = new Date().getTime() - E.current;
            ((N.current = N.current - V),
              window.clearTimeout(j.current),
              l == null || l());
          };
        return (
          $.addEventListener(Lc, Q),
          $.addEventListener(Ic, X),
          () => {
            ($.removeEventListener(Lc, Q), $.removeEventListener(Ic, X));
          }
        );
      }
    }, [x.viewport, S, l, c, F]),
      y.useEffect(() => {
        s && !x.isClosePausedRef.current && F(S);
      }, [s, S, x.isClosePausedRef, F]),
      y.useEffect(() => (M(), () => O()), [M, O]));
    const Y = y.useMemo(() => (b ? wg(b) : null), [b]);
    return x.viewport
      ? u.jsxs(u.Fragment, {
          children: [
            Y &&
              u.jsx(db, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Y,
              }),
            u.jsx(lb, {
              scope: n,
              onClose: D,
              children: Gs.createPortal(
                u.jsx(Fu.ItemSlot, {
                  scope: n,
                  children: u.jsx(Bw, {
                    asChild: !0,
                    onEscapeKeyDown: Ee(a, () => {
                      (x.isFocusedToastEscapeKeyDownRef.current || D(),
                        (x.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: u.jsx(Re.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": s ? "open" : "closed",
                      "data-swipe-direction": x.swipeDirection,
                      ...w,
                      ref: h,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Ee(e.onKeyDown, ($) => {
                        $.key === "Escape" &&
                          (a == null || a($.nativeEvent),
                          $.nativeEvent.defaultPrevented ||
                            ((x.isFocusedToastEscapeKeyDownRef.current = !0),
                            D()));
                      }),
                      onPointerDown: Ee(e.onPointerDown, ($) => {
                        $.button === 0 &&
                          (v.current = { x: $.clientX, y: $.clientY });
                      }),
                      onPointerMove: Ee(e.onPointerMove, ($) => {
                        if (!v.current) return;
                        const X = $.clientX - v.current.x,
                          Q = $.clientY - v.current.y,
                          V = !!k.current,
                          _ = ["left", "right"].includes(x.swipeDirection),
                          T = ["left", "up"].includes(x.swipeDirection)
                            ? Math.min
                            : Math.max,
                          z = _ ? T(0, X) : 0,
                          q = _ ? 0 : T(0, Q),
                          W = $.pointerType === "touch" ? 10 : 2,
                          Z = { x: z, y: q },
                          ne = { originalEvent: $, delta: Z };
                        V
                          ? ((k.current = Z), Ci(sb, m, ne, { discrete: !1 }))
                          : Df(Z, x.swipeDirection, W)
                            ? ((k.current = Z),
                              Ci(ob, p, ne, { discrete: !1 }),
                              $.target.setPointerCapture($.pointerId))
                            : (Math.abs(X) > W || Math.abs(Q) > W) &&
                              (v.current = null);
                      }),
                      onPointerUp: Ee(e.onPointerUp, ($) => {
                        const X = k.current,
                          Q = $.target;
                        if (
                          (Q.hasPointerCapture($.pointerId) &&
                            Q.releasePointerCapture($.pointerId),
                          (k.current = null),
                          (v.current = null),
                          X)
                        ) {
                          const V = $.currentTarget,
                            _ = { originalEvent: $, delta: X };
                          (Df(X, x.swipeDirection, x.swipeThreshold)
                            ? Ci(ab, d, _, { discrete: !0 })
                            : Ci(ib, g, _, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (T) => T.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                x.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  db = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Ba(Ys, t),
      [s, i] = y.useState(!1),
      [a, l] = y.useState(!1);
    return (
      hb(() => i(!0)),
      y.useEffect(() => {
        const c = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(c);
      }, []),
      a
        ? null
        : u.jsx(ig, {
            asChild: !0,
            children: u.jsx(Ua, {
              ...r,
              children:
                s && u.jsxs(u.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  fb = "ToastTitle",
  hg = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return u.jsx(Re.div, { ...r, ref: t });
  });
hg.displayName = fb;
var pb = "ToastDescription",
  mg = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return u.jsx(Re.div, { ...r, ref: t });
  });
mg.displayName = pb;
var gg = "ToastAction",
  vg = y.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? u.jsx(xg, {
          altText: n,
          asChild: !0,
          children: u.jsx(Uu, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${gg}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
vg.displayName = gg;
var yg = "ToastClose",
  Uu = y.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = cb(yg, n);
    return u.jsx(xg, {
      asChild: !0,
      children: u.jsx(Re.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Ee(e.onClick, o.onClose),
      }),
    });
  });
Uu.displayName = yg;
var xg = y.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return u.jsx(Re.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function wg(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        mb(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...wg(r));
      }
    }),
    t
  );
}
function Ci(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? ng(o, s) : o.dispatchEvent(s));
}
var Df = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function hb(e = () => {}) {
  const t = lr(e);
  cr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function mb(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function gb(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function jl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var vb = cg,
  bg = dg,
  kg = pg,
  Sg = hg,
  Cg = mg,
  Eg = vg,
  Ng = Uu;
function _g(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = _g(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function jg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = _g(e)) && (r && (r += " "), (r += t));
  return r;
}
const Ff = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Uf = jg,
  Pg = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Uf(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((c) => {
        const p = n == null ? void 0 : n[c],
          m = s == null ? void 0 : s[c];
        if (p === null) return null;
        const g = Ff(p) || Ff(m);
        return o[c][g];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, p) => {
          let [m, g] = p;
          return (g === void 0 || (c[m] = g), c);
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, p) => {
              let { class: m, className: g, ...d } = p;
              return Object.entries(d).every((w) => {
                let [x, b] = w;
                return Array.isArray(b)
                  ? b.includes({ ...s, ...a }[x])
                  : { ...s, ...a }[x] === b;
              })
                ? [...c, m, g]
                : c;
            }, []);
    return Uf(
      e,
      i,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Tg = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var xb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wb = y.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...a
    },
    l,
  ) =>
    y.createElement(
      "svg",
      {
        ref: l,
        ...xb,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Tg("lucide", o),
        ...a,
      },
      [
        ...i.map(([c, p]) => y.createElement(c, p)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ye = (e, t) => {
  const n = y.forwardRef(({ className: r, ...o }, s) =>
    y.createElement(wb, {
      ref: s,
      iconNode: t,
      className: Tg(`lucide-${yb(e)}`, r),
      ...o,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rg = ye("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bu = ye("Bookmark", [
  [
    "path",
    { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lg = ye("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bb = ye("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kb = ye("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Un = ye("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vu = ye("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f",
    },
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a",
    },
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sb = ye("Gauge", [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cb = ye("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wu = ye("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw",
    },
  ],
  [
    "path",
    { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
  ],
  [
    "path",
    { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const br = ye("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eb = ye("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nb = ye("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _b = ye("Pause", [
  [
    "rect",
    { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
  ],
  [
    "rect",
    { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jb = ye("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = ye("Radio", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ig = ye("Scale", [
  [
    "path",
    { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" },
  ],
  [
    "path",
    { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" },
  ],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const is = ye("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pb = ye("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tb = ye("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rb = ye("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Og = ye("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lb = ye("Volume2", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Er = ye("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Hu = "-",
  Ib = (e) => {
    const t = Ab(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const a = i.split(Hu);
        return (a[0] === "" && a.length !== 1 && a.shift(), Ag(a, t) || Ob(i));
      },
      getConflictingClassGroupIds: (i, a) => {
        const l = n[i] || [];
        return a && r[i] ? [...l, ...r[i]] : l;
      },
    };
  },
  Ag = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Ag(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(Hu);
    return (i = t.validators.find(({ validator: a }) => a(s))) == null
      ? void 0
      : i.classGroupId;
  },
  Vf = /^\[(.+)\]$/,
  Ob = (e) => {
    if (Vf.test(e)) {
      const t = Vf.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Ab = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      $b(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        Ac(i, r, s, t);
      }),
      r
    );
  },
  Ac = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : Wf(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Mb(o)) {
          Ac(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        Ac(i, Wf(t, s), n, r);
      });
    });
  },
  Wf = (e, t) => {
    let n = e;
    return (
      t.split(Hu).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  Mb = (e) => e.isThemeGetter,
  $b = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
                ? Object.fromEntries(
                    Object.entries(s).map(([i, a]) => [t + i, a]),
                  )
                : s,
          );
          return [n, o];
        })
      : e,
  zb = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      (n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return (o(s, i), i);
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  Mg = "!",
  Db = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (a) => {
        const l = [];
        let c = 0,
          p = 0,
          m;
        for (let b = 0; b < a.length; b++) {
          let f = a[b];
          if (c === 0) {
            if (f === o && (r || a.slice(b, b + s) === t)) {
              (l.push(a.slice(p, b)), (p = b + s));
              continue;
            }
            if (f === "/") {
              m = b;
              continue;
            }
          }
          f === "[" ? c++ : f === "]" && c--;
        }
        const g = l.length === 0 ? a : a.substring(p),
          d = g.startsWith(Mg),
          w = d ? g.substring(1) : g,
          x = m && m > p ? m - p : void 0;
        return {
          modifiers: l,
          hasImportantModifier: d,
          baseClassName: w,
          maybePostfixModifierPosition: x,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: i }) : i;
  },
  Fb = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Ub = (e) => ({ cache: zb(e.cacheSize), parseClassName: Db(e), ...Ib(e) }),
  Bb = /\s+/,
  Vb = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      i = e.trim().split(Bb);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
      const c = i[l],
        {
          modifiers: p,
          hasImportantModifier: m,
          baseClassName: g,
          maybePostfixModifierPosition: d,
        } = n(c);
      let w = !!d,
        x = r(w ? g.substring(0, d) : g);
      if (!x) {
        if (!w) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((x = r(g)), !x)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        w = !1;
      }
      const b = Fb(p).join(":"),
        f = m ? b + Mg : b,
        h = f + x;
      if (s.includes(h)) continue;
      s.push(h);
      const v = o(x, w);
      for (let k = 0; k < v.length; ++k) {
        const S = v[k];
        s.push(f + S);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Wb() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length;)
    (t = arguments[e++]) && (n = $g(t)) && (r && (r += " "), (r += n));
  return r;
}
const $g = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = $g(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Hb(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(l) {
    const c = t.reduce((p, m) => m(p), e());
    return ((n = Ub(c)), (r = n.cache.get), (o = n.cache.set), (s = a), a(l));
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const p = Vb(l, n);
    return (o(l, p), p);
  }
  return function () {
    return s(Wb.apply(null, arguments));
  };
}
const he = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  zg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Qb = /^\d+\/\d+$/,
  Gb = new Set(["px", "full", "screen"]),
  Kb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Yb =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  qb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Xb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Zb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  hn = (e) => ho(e) || Gb.has(e) || Qb.test(e),
  In = (e) => zo(e, "length", i2),
  ho = (e) => !!e && !Number.isNaN(Number(e)),
  Pl = (e) => zo(e, "number", ho),
  Zo = (e) => !!e && Number.isInteger(Number(e)),
  Jb = (e) => e.endsWith("%") && ho(e.slice(0, -1)),
  te = (e) => zg.test(e),
  On = (e) => Kb.test(e),
  e2 = new Set(["length", "size", "percentage"]),
  t2 = (e) => zo(e, e2, Dg),
  n2 = (e) => zo(e, "position", Dg),
  r2 = new Set(["image", "url"]),
  o2 = (e) => zo(e, r2, l2),
  s2 = (e) => zo(e, "", a2),
  Jo = () => !0,
  zo = (e, t, n) => {
    const r = zg.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  i2 = (e) => Yb.test(e) && !qb.test(e),
  Dg = () => !1,
  a2 = (e) => Xb.test(e),
  l2 = (e) => Zb.test(e),
  c2 = () => {
    const e = he("colors"),
      t = he("spacing"),
      n = he("blur"),
      r = he("brightness"),
      o = he("borderColor"),
      s = he("borderRadius"),
      i = he("borderSpacing"),
      a = he("borderWidth"),
      l = he("contrast"),
      c = he("grayscale"),
      p = he("hueRotate"),
      m = he("invert"),
      g = he("gap"),
      d = he("gradientColorStops"),
      w = he("gradientColorStopPositions"),
      x = he("inset"),
      b = he("margin"),
      f = he("opacity"),
      h = he("padding"),
      v = he("saturate"),
      k = he("scale"),
      S = he("sepia"),
      E = he("skew"),
      N = he("space"),
      j = he("translate"),
      M = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      D = () => ["auto", te, t],
      F = () => [te, t],
      Y = () => ["", hn, In],
      $ = () => ["auto", ho, te],
      X = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      Q = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      _ = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      T = () => ["", "0", te],
      z = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      q = () => [ho, te];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Jo],
        spacing: [hn, In],
        blur: ["none", "", On, te],
        brightness: q(),
        borderColor: [e],
        borderRadius: ["none", "", "full", On, te],
        borderSpacing: F(),
        borderWidth: Y(),
        contrast: q(),
        grayscale: T(),
        hueRotate: q(),
        invert: T(),
        gap: F(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Jb, In],
        inset: D(),
        margin: D(),
        opacity: q(),
        padding: F(),
        saturate: q(),
        scale: q(),
        sepia: T(),
        skew: q(),
        space: F(),
        translate: F(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", te] }],
        container: ["container"],
        columns: [{ columns: [On] }],
        "break-after": [{ "break-after": z() }],
        "break-before": [{ "break-before": z() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...X(), te] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [x] }],
        "inset-x": [{ "inset-x": [x] }],
        "inset-y": [{ "inset-y": [x] }],
        start: [{ start: [x] }],
        end: [{ end: [x] }],
        top: [{ top: [x] }],
        right: [{ right: [x] }],
        bottom: [{ bottom: [x] }],
        left: [{ left: [x] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Zo, te] }],
        basis: [{ basis: D() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", te] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ["first", "last", "none", Zo, te] }],
        "grid-cols": [{ "grid-cols": [Jo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Zo, te] }, te] }],
        "col-start": [{ "col-start": $() }],
        "col-end": [{ "col-end": $() }],
        "grid-rows": [{ "grid-rows": [Jo] }],
        "row-start-end": [{ row: ["auto", { span: [Zo, te] }, te] }],
        "row-start": [{ "row-start": $() }],
        "row-end": [{ "row-end": $() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", te] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", te] }],
        gap: [{ gap: [g] }],
        "gap-x": [{ "gap-x": [g] }],
        "gap-y": [{ "gap-y": [g] }],
        "justify-content": [{ justify: ["normal", ..._()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ..._(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [..._(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [N] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [N] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", te, t] }],
        "min-w": [{ "min-w": [te, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              te,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [On] },
              On,
            ],
          },
        ],
        h: [{ h: [te, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [te, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", On, In] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Pl,
            ],
          },
        ],
        "font-family": [{ font: [Jo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              te,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", ho, Pl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              hn,
              te,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", te] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", te] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [f] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [f] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Q(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", hn, In] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", hn, te] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: F() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              te,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", te] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [f] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...X(), n2] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", t2] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              o2,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [d] }],
        "gradient-via": [{ via: [d] }],
        "gradient-to": [{ to: [d] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [f] }],
        "border-style": [{ border: [...Q(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [f] }],
        "divide-style": [{ divide: Q() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...Q()] }],
        "outline-offset": [{ "outline-offset": [hn, te] }],
        "outline-w": [{ outline: [hn, In] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Y() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [f] }],
        "ring-offset-w": [{ "ring-offset": [hn, In] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", On, s2] }],
        "shadow-color": [{ shadow: [Jo] }],
        opacity: [{ opacity: [f] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", On, te] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [p] }],
        invert: [{ invert: [m] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
        "backdrop-invert": [{ "backdrop-invert": [m] }],
        "backdrop-opacity": [{ "backdrop-opacity": [f] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              te,
            ],
          },
        ],
        duration: [{ duration: q() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", te] }],
        delay: [{ delay: q() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", te] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [k] }],
        "scale-x": [{ "scale-x": [k] }],
        "scale-y": [{ "scale-y": [k] }],
        rotate: [{ rotate: [Zo, te] }],
        "translate-x": [{ "translate-x": [j] }],
        "translate-y": [{ "translate-y": [j] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              te,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              te,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": F() }],
        "scroll-mx": [{ "scroll-mx": F() }],
        "scroll-my": [{ "scroll-my": F() }],
        "scroll-ms": [{ "scroll-ms": F() }],
        "scroll-me": [{ "scroll-me": F() }],
        "scroll-mt": [{ "scroll-mt": F() }],
        "scroll-mr": [{ "scroll-mr": F() }],
        "scroll-mb": [{ "scroll-mb": F() }],
        "scroll-ml": [{ "scroll-ml": F() }],
        "scroll-p": [{ "scroll-p": F() }],
        "scroll-px": [{ "scroll-px": F() }],
        "scroll-py": [{ "scroll-py": F() }],
        "scroll-ps": [{ "scroll-ps": F() }],
        "scroll-pe": [{ "scroll-pe": F() }],
        "scroll-pt": [{ "scroll-pt": F() }],
        "scroll-pr": [{ "scroll-pr": F() }],
        "scroll-pb": [{ "scroll-pb": F() }],
        "scroll-pl": [{ "scroll-pl": F() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", te] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [hn, In, Pl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  u2 = Hb(c2);
function ht(...e) {
  return u2(jg(e));
}
const d2 = vb,
  Fg = y.forwardRef(({ className: e, ...t }, n) =>
    u.jsx(bg, {
      ref: n,
      className: ht(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
Fg.displayName = bg.displayName;
const f2 = Pg(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Ug = y.forwardRef(({ className: e, variant: t, ...n }, r) =>
    u.jsx(kg, { ref: r, className: ht(f2({ variant: t }), e), ...n }),
  );
Ug.displayName = kg.displayName;
const p2 = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(Eg, {
    ref: n,
    className: ht(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
p2.displayName = Eg.displayName;
const Bg = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(Ng, {
    ref: n,
    className: ht(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: u.jsx(Er, { className: "h-4 w-4" }),
  }),
);
Bg.displayName = Ng.displayName;
const Vg = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(Sg, { ref: n, className: ht("text-sm font-semibold", e), ...t }),
);
Vg.displayName = Sg.displayName;
const Wg = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(Cg, { ref: n, className: ht("text-sm opacity-90", e), ...t }),
);
Wg.displayName = Cg.displayName;
function h2() {
  const { toasts: e } = Ew();
  return u.jsxs(d2, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
        return u.jsxs(
          Ug,
          {
            ...s,
            children: [
              u.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && u.jsx(Vg, { children: n }),
                  r && u.jsx(Wg, { children: r }),
                ],
              }),
              o,
              u.jsx(Bg, {}),
            ],
          },
          t,
        );
      }),
      u.jsx(Fg, {}),
    ],
  });
}
const m2 = ["top", "right", "bottom", "left"],
  ur = Math.min,
  lt = Math.max,
  ga = Math.round,
  Ei = Math.floor,
  rn = (e) => ({ x: e, y: e }),
  g2 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  v2 = { start: "end", end: "start" };
function Mc(e, t, n) {
  return lt(e, ur(t, n));
}
function Nn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _n(e) {
  return e.split("-")[0];
}
function Do(e) {
  return e.split("-")[1];
}
function Qu(e) {
  return e === "x" ? "y" : "x";
}
function Gu(e) {
  return e === "y" ? "height" : "width";
}
const y2 = new Set(["top", "bottom"]);
function en(e) {
  return y2.has(_n(e)) ? "y" : "x";
}
function Ku(e) {
  return Qu(en(e));
}
function x2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e),
    o = Ku(e),
    s = Gu(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[s] > t.floating[s] && (i = va(i)), [i, va(i)]);
}
function w2(e) {
  const t = va(e);
  return [$c(e), t, $c(t)];
}
function $c(e) {
  return e.replace(/start|end/g, (t) => v2[t]);
}
const Hf = ["left", "right"],
  Qf = ["right", "left"],
  b2 = ["top", "bottom"],
  k2 = ["bottom", "top"];
function S2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Qf : Hf) : t ? Hf : Qf;
    case "left":
    case "right":
      return t ? b2 : k2;
    default:
      return [];
  }
}
function C2(e, t, n, r) {
  const o = Do(e);
  let s = S2(_n(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map($c)))),
    s
  );
}
function va(e) {
  return e.replace(/left|right|bottom|top/g, (t) => g2[t]);
}
function E2(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Hg(e) {
  return typeof e != "number"
    ? E2(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ya(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Gf(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = en(t),
    i = Ku(t),
    a = Gu(i),
    l = _n(t),
    c = s === "y",
    p = r.x + r.width / 2 - o.width / 2,
    m = r.y + r.height / 2 - o.height / 2,
    g = r[a] / 2 - o[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = { x: p, y: r.y - o.height };
      break;
    case "bottom":
      d = { x: p, y: r.y + r.height };
      break;
    case "right":
      d = { x: r.x + r.width, y: m };
      break;
    case "left":
      d = { x: r.x - o.width, y: m };
      break;
    default:
      d = { x: r.x, y: r.y };
  }
  switch (Do(t)) {
    case "start":
      d[i] -= g * (n && c ? -1 : 1);
      break;
    case "end":
      d[i] += g * (n && c ? -1 : 1);
      break;
  }
  return d;
}
const N2 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    a = s.filter(Boolean),
    l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: p, y: m } = Gf(c, r, l),
    g = r,
    d = {},
    w = 0;
  for (let x = 0; x < a.length; x++) {
    const { name: b, fn: f } = a[x],
      {
        x: h,
        y: v,
        data: k,
        reset: S,
      } = await f({
        x: p,
        y: m,
        initialPlacement: r,
        placement: g,
        strategy: o,
        middlewareData: d,
        rects: c,
        platform: i,
        elements: { reference: e, floating: t },
      });
    ((p = h ?? p),
      (m = v ?? m),
      (d = { ...d, [b]: { ...d[b], ...k } }),
      S &&
        w <= 50 &&
        (w++,
        typeof S == "object" &&
          (S.placement && (g = S.placement),
          S.rects &&
            (c =
              S.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : S.rects),
          ({ x: p, y: m } = Gf(c, g, l))),
        (x = -1)));
  }
  return { x: p, y: m, placement: g, strategy: o, middlewareData: d };
};
async function zs(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: m = "floating",
      altBoundary: g = !1,
      padding: d = 0,
    } = Nn(t, e),
    w = Hg(d),
    b = a[g ? (m === "floating" ? "reference" : "floating") : m],
    f = ya(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: p,
        strategy: l,
      }),
    ),
    h =
      m === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    v = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    k = (await (s.isElement == null ? void 0 : s.isElement(v)))
      ? (await (s.getScale == null ? void 0 : s.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = ya(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: h,
            offsetParent: v,
            strategy: l,
          })
        : h,
    );
  return {
    top: (f.top - S.top + w.top) / k.y,
    bottom: (S.bottom - f.bottom + w.bottom) / k.y,
    left: (f.left - S.left + w.left) / k.x,
    right: (S.right - f.right + w.right) / k.x,
  };
}
const _2 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: p = 0 } = Nn(e, t) || {};
      if (c == null) return {};
      const m = Hg(p),
        g = { x: n, y: r },
        d = Ku(o),
        w = Gu(d),
        x = await i.getDimensions(c),
        b = d === "y",
        f = b ? "top" : "left",
        h = b ? "bottom" : "right",
        v = b ? "clientHeight" : "clientWidth",
        k = s.reference[w] + s.reference[d] - g[d] - s.floating[w],
        S = g[d] - s.reference[d],
        E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
      let N = E ? E[v] : 0;
      (!N || !(await (i.isElement == null ? void 0 : i.isElement(E)))) &&
        (N = a.floating[v] || s.floating[w]);
      const j = k / 2 - S / 2,
        M = N / 2 - x[w] / 2 - 1,
        O = ur(m[f], M),
        D = ur(m[h], M),
        F = O,
        Y = N - x[w] - D,
        $ = N / 2 - x[w] / 2 + j,
        X = Mc(F, $, Y),
        Q =
          !l.arrow &&
          Do(o) != null &&
          $ !== X &&
          s.reference[w] / 2 - ($ < F ? O : D) - x[w] / 2 < 0,
        V = Q ? ($ < F ? $ - F : $ - Y) : 0;
      return {
        [d]: g[d] + V,
        data: {
          [d]: X,
          centerOffset: $ - X - V,
          ...(Q && { alignmentOffset: V }),
        },
        reset: Q,
      };
    },
  }),
  j2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: p = !0,
              crossAxis: m = !0,
              fallbackPlacements: g,
              fallbackStrategy: d = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: x = !0,
              ...b
            } = Nn(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const f = _n(o),
            h = en(a),
            v = _n(a) === a,
            k = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            S = g || (v || !x ? [va(a)] : w2(a)),
            E = w !== "none";
          !g && E && S.push(...C2(a, x, w, k));
          const N = [a, ...S],
            j = await zs(t, b),
            M = [];
          let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((p && M.push(j[f]), m)) {
            const $ = x2(o, i, k);
            M.push(j[$[0]], j[$[1]]);
          }
          if (
            ((O = [...O, { placement: o, overflows: M }]),
            !M.every(($) => $ <= 0))
          ) {
            var D, F;
            const $ = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1,
              X = N[$];
            if (
              X &&
              (!(m === "alignment" ? h !== en(X) : !1) ||
                O.every((_) => _.overflows[0] > 0 && en(_.placement) === h))
            )
              return {
                data: { index: $, overflows: O },
                reset: { placement: X },
              };
            let Q =
              (F = O.filter((V) => V.overflows[0] <= 0).sort(
                (V, _) => V.overflows[1] - _.overflows[1],
              )[0]) == null
                ? void 0
                : F.placement;
            if (!Q)
              switch (d) {
                case "bestFit": {
                  var Y;
                  const V =
                    (Y = O.filter((_) => {
                      if (E) {
                        const T = en(_.placement);
                        return T === h || T === "y";
                      }
                      return !0;
                    })
                      .map((_) => [
                        _.placement,
                        _.overflows
                          .filter((T) => T > 0)
                          .reduce((T, z) => T + z, 0),
                      ])
                      .sort((_, T) => _[1] - T[1])[0]) == null
                      ? void 0
                      : Y[0];
                  V && (Q = V);
                  break;
                }
                case "initialPlacement":
                  Q = a;
                  break;
              }
            if (o !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
function Kf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Yf(e) {
  return m2.some((t) => e[t] >= 0);
}
const P2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = Nn(e, t);
          switch (r) {
            case "referenceHidden": {
              const s = await zs(t, { ...o, elementContext: "reference" }),
                i = Kf(s, n.reference);
              return {
                data: { referenceHiddenOffsets: i, referenceHidden: Yf(i) },
              };
            }
            case "escaped": {
              const s = await zs(t, { ...o, altBoundary: !0 }),
                i = Kf(s, n.floating);
              return { data: { escapedOffsets: i, escaped: Yf(i) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Qg = new Set(["left", "top"]);
async function T2(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = _n(n),
    a = Do(n),
    l = en(n) === "y",
    c = Qg.has(i) ? -1 : 1,
    p = s && l ? -1 : 1,
    m = Nn(t, e);
  let {
    mainAxis: g,
    crossAxis: d,
    alignmentAxis: w,
  } = typeof m == "number"
    ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis,
      };
  return (
    a && typeof w == "number" && (d = a === "end" ? w * -1 : w),
    l ? { x: d * p, y: g * c } : { x: g * c, y: d * p }
  );
}
const R2 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: a } = t,
            l = await T2(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: s + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  L2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: f, y: h } = b;
                  return { x: f, y: h };
                },
              },
              ...l
            } = Nn(e, t),
            c = { x: n, y: r },
            p = await zs(t, l),
            m = en(_n(o)),
            g = Qu(m);
          let d = c[g],
            w = c[m];
          if (s) {
            const b = g === "y" ? "top" : "left",
              f = g === "y" ? "bottom" : "right",
              h = d + p[b],
              v = d - p[f];
            d = Mc(h, d, v);
          }
          if (i) {
            const b = m === "y" ? "top" : "left",
              f = m === "y" ? "bottom" : "right",
              h = w + p[b],
              v = w - p[f];
            w = Mc(h, w, v);
          }
          const x = a.fn({ ...t, [g]: d, [m]: w });
          return {
            ...x,
            data: { x: x.x - n, y: x.y - r, enabled: { [g]: s, [m]: i } },
          };
        },
      }
    );
  },
  I2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = Nn(e, t),
            p = { x: n, y: r },
            m = en(o),
            g = Qu(m);
          let d = p[g],
            w = p[m];
          const x = Nn(a, t),
            b =
              typeof x == "number"
                ? { mainAxis: x, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...x };
          if (l) {
            const v = g === "y" ? "height" : "width",
              k = s.reference[g] - s.floating[v] + b.mainAxis,
              S = s.reference[g] + s.reference[v] - b.mainAxis;
            d < k ? (d = k) : d > S && (d = S);
          }
          if (c) {
            var f, h;
            const v = g === "y" ? "width" : "height",
              k = Qg.has(_n(o)),
              S =
                s.reference[m] -
                s.floating[v] +
                ((k && ((f = i.offset) == null ? void 0 : f[m])) || 0) +
                (k ? 0 : b.crossAxis),
              E =
                s.reference[m] +
                s.reference[v] +
                (k ? 0 : ((h = i.offset) == null ? void 0 : h[m]) || 0) -
                (k ? b.crossAxis : 0);
            w < S ? (w = S) : w > E && (w = E);
          }
          return { [g]: d, [m]: w };
        },
      }
    );
  },
  O2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: a } = t,
            { apply: l = () => {}, ...c } = Nn(e, t),
            p = await zs(t, c),
            m = _n(o),
            g = Do(o),
            d = en(o) === "y",
            { width: w, height: x } = s.floating;
          let b, f;
          m === "top" || m === "bottom"
            ? ((b = m),
              (f =
                g ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((f = m), (b = g === "end" ? "top" : "bottom"));
          const h = x - p.top - p.bottom,
            v = w - p.left - p.right,
            k = ur(x - p[b], h),
            S = ur(w - p[f], v),
            E = !t.middlewareData.shift;
          let N = k,
            j = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (j = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = h),
            E && !g)
          ) {
            const O = lt(p.left, 0),
              D = lt(p.right, 0),
              F = lt(p.top, 0),
              Y = lt(p.bottom, 0);
            d
              ? (j = w - 2 * (O !== 0 || D !== 0 ? O + D : lt(p.left, p.right)))
              : (N =
                  x - 2 * (F !== 0 || Y !== 0 ? F + Y : lt(p.top, p.bottom)));
          }
          await l({ ...t, availableWidth: j, availableHeight: N });
          const M = await i.getDimensions(a.floating);
          return w !== M.width || x !== M.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Va() {
  return typeof window < "u";
}
function Fo(e) {
  return Gg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function dt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function sn(e) {
  var t;
  return (t = (Gg(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Gg(e) {
  return Va() ? e instanceof Node || e instanceof dt(e).Node : !1;
}
function Bt(e) {
  return Va() ? e instanceof Element || e instanceof dt(e).Element : !1;
}
function on(e) {
  return Va() ? e instanceof HTMLElement || e instanceof dt(e).HTMLElement : !1;
}
function qf(e) {
  return !Va() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof dt(e).ShadowRoot;
}
const A2 = new Set(["inline", "contents"]);
function qs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Vt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !A2.has(o);
}
const M2 = new Set(["table", "td", "th"]);
function $2(e) {
  return M2.has(Fo(e));
}
const z2 = [":popover-open", ":modal"];
function Wa(e) {
  return z2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const D2 = ["transform", "translate", "scale", "rotate", "perspective"],
  F2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  U2 = ["paint", "layout", "strict", "content"];
function Yu(e) {
  const t = qu(),
    n = Bt(e) ? Vt(e) : e;
  return (
    D2.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    F2.some((r) => (n.willChange || "").includes(r)) ||
    U2.some((r) => (n.contain || "").includes(r))
  );
}
function B2(e) {
  let t = dr(e);
  for (; on(t) && !Ro(t);) {
    if (Yu(t)) return t;
    if (Wa(t)) return null;
    t = dr(t);
  }
  return null;
}
function qu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const V2 = new Set(["html", "body", "#document"]);
function Ro(e) {
  return V2.has(Fo(e));
}
function Vt(e) {
  return dt(e).getComputedStyle(e);
}
function Ha(e) {
  return Bt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function dr(e) {
  if (Fo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (qf(e) && e.host) || sn(e);
  return qf(t) ? t.host : t;
}
function Kg(e) {
  const t = dr(e);
  return Ro(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : on(t) && qs(t)
      ? t
      : Kg(t);
}
function Ds(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = Kg(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = dt(o);
  if (s) {
    const a = zc(i);
    return t.concat(
      i,
      i.visualViewport || [],
      qs(o) ? o : [],
      a && n ? Ds(a) : [],
    );
  }
  return t.concat(o, Ds(o, [], n));
}
function zc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Yg(e) {
  const t = Vt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = on(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    a = ga(n) !== s || ga(r) !== i;
  return (a && ((n = s), (r = i)), { width: n, height: r, $: a });
}
function Xu(e) {
  return Bt(e) ? e : e.contextElement;
}
function mo(e) {
  const t = Xu(e);
  if (!on(t)) return rn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Yg(t);
  let i = (s ? ga(n.width) : n.width) / r,
    a = (s ? ga(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const W2 = rn(0);
function qg(e) {
  const t = dt(e);
  return !qu() || !t.visualViewport
    ? W2
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function H2(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== dt(e)) ? !1 : t);
}
function Dr(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    s = Xu(e);
  let i = rn(1);
  t && (r ? Bt(r) && (i = mo(r)) : (i = mo(e)));
  const a = H2(s, n, r) ? qg(s) : rn(0);
  let l = (o.left + a.x) / i.x,
    c = (o.top + a.y) / i.y,
    p = o.width / i.x,
    m = o.height / i.y;
  if (s) {
    const g = dt(s),
      d = r && Bt(r) ? dt(r) : r;
    let w = g,
      x = zc(w);
    for (; x && r && d !== w;) {
      const b = mo(x),
        f = x.getBoundingClientRect(),
        h = Vt(x),
        v = f.left + (x.clientLeft + parseFloat(h.paddingLeft)) * b.x,
        k = f.top + (x.clientTop + parseFloat(h.paddingTop)) * b.y;
      ((l *= b.x),
        (c *= b.y),
        (p *= b.x),
        (m *= b.y),
        (l += v),
        (c += k),
        (w = dt(x)),
        (x = zc(w)));
    }
  }
  return ya({ width: p, height: m, x: l, y: c });
}
function Zu(e, t) {
  const n = Ha(e).scrollLeft;
  return t ? t.left + n : Dr(sn(e)).left + n;
}
function Xg(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Zu(e, r)),
    s = r.top + t.scrollTop;
  return { x: o, y: s };
}
function Q2(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = sn(r),
    a = t ? Wa(t.floating) : !1;
  if (r === i || (a && s)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = rn(1);
  const p = rn(0),
    m = on(r);
  if (
    (m || (!m && !s)) &&
    ((Fo(r) !== "body" || qs(i)) && (l = Ha(r)), on(r))
  ) {
    const d = Dr(r);
    ((c = mo(r)), (p.x = d.x + r.clientLeft), (p.y = d.y + r.clientTop));
  }
  const g = i && !m && !s ? Xg(i, l, !0) : rn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + p.x + g.x,
    y: n.y * c.y - l.scrollTop * c.y + p.y + g.y,
  };
}
function G2(e) {
  return Array.from(e.getClientRects());
}
function K2(e) {
  const t = sn(e),
    n = Ha(e),
    r = e.ownerDocument.body,
    o = lt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = lt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Zu(e);
  const a = -n.scrollTop;
  return (
    Vt(r).direction === "rtl" && (i += lt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: a }
  );
}
function Y2(e, t) {
  const n = dt(e),
    r = sn(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    ((s = o.width), (i = o.height));
    const c = qu();
    (!c || (c && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: s, height: i, x: a, y: l };
}
const q2 = new Set(["absolute", "fixed"]);
function X2(e, t) {
  const n = Dr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = on(e) ? mo(e) : rn(1),
    i = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    l = o * s.x,
    c = r * s.y;
  return { width: i, height: a, x: l, y: c };
}
function Xf(e, t, n) {
  let r;
  if (t === "viewport") r = Y2(e, n);
  else if (t === "document") r = K2(sn(e));
  else if (Bt(t)) r = X2(t, n);
  else {
    const o = qg(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return ya(r);
}
function Zg(e, t) {
  const n = dr(e);
  return n === t || !Bt(n) || Ro(n)
    ? !1
    : Vt(n).position === "fixed" || Zg(n, t);
}
function Z2(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ds(e, [], !1).filter((a) => Bt(a) && Fo(a) !== "body"),
    o = null;
  const s = Vt(e).position === "fixed";
  let i = s ? dr(e) : e;
  for (; Bt(i) && !Ro(i);) {
    const a = Vt(i),
      l = Yu(i);
    (!l && a.position === "fixed" && (o = null),
      (
        s
          ? !l && !o
          : (!l && a.position === "static" && !!o && q2.has(o.position)) ||
            (qs(i) && !l && Zg(e, i))
      )
        ? (r = r.filter((p) => p !== i))
        : (o = a),
      (i = dr(i)));
  }
  return (t.set(e, r), r);
}
function J2(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Wa(t)
          ? []
          : Z2(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = i[0],
    l = i.reduce(
      (c, p) => {
        const m = Xf(t, p, o);
        return (
          (c.top = lt(m.top, c.top)),
          (c.right = ur(m.right, c.right)),
          (c.bottom = ur(m.bottom, c.bottom)),
          (c.left = lt(m.left, c.left)),
          c
        );
      },
      Xf(t, a, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function ek(e) {
  const { width: t, height: n } = Yg(e);
  return { width: t, height: n };
}
function tk(e, t, n) {
  const r = on(t),
    o = sn(t),
    s = n === "fixed",
    i = Dr(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = rn(0);
  function c() {
    l.x = Zu(o);
  }
  if (r || (!r && !s))
    if (((Fo(t) !== "body" || qs(o)) && (a = Ha(t)), r)) {
      const d = Dr(t, !0, s, t);
      ((l.x = d.x + t.clientLeft), (l.y = d.y + t.clientTop));
    } else o && c();
  s && !r && o && c();
  const p = o && !r && !s ? Xg(o, a) : rn(0),
    m = i.left + a.scrollLeft - l.x - p.x,
    g = i.top + a.scrollTop - l.y - p.y;
  return { x: m, y: g, width: i.width, height: i.height };
}
function Tl(e) {
  return Vt(e).position === "static";
}
function Zf(e, t) {
  if (!on(e) || Vt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (sn(e) === n && (n = n.ownerDocument.body), n);
}
function Jg(e, t) {
  const n = dt(e);
  if (Wa(e)) return n;
  if (!on(e)) {
    let o = dr(e);
    for (; o && !Ro(o);) {
      if (Bt(o) && !Tl(o)) return o;
      o = dr(o);
    }
    return n;
  }
  let r = Zf(e, t);
  for (; r && $2(r) && Tl(r);) r = Zf(r, t);
  return r && Ro(r) && Tl(r) && !Yu(r) ? n : r || B2(e) || n;
}
const nk = async function (e) {
  const t = this.getOffsetParent || Jg,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: tk(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function rk(e) {
  return Vt(e).direction === "rtl";
}
const ok = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Q2,
  getDocumentElement: sn,
  getClippingRect: J2,
  getOffsetParent: Jg,
  getElementRects: nk,
  getClientRects: G2,
  getDimensions: ek,
  getScale: mo,
  isElement: Bt,
  isRTL: rk,
};
function ev(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function sk(e, t) {
  let n = null,
    r;
  const o = sn(e);
  function s() {
    var a;
    (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
  }
  function i(a, l) {
    (a === void 0 && (a = !1), l === void 0 && (l = 1), s());
    const c = e.getBoundingClientRect(),
      { left: p, top: m, width: g, height: d } = c;
    if ((a || t(), !g || !d)) return;
    const w = Ei(m),
      x = Ei(o.clientWidth - (p + g)),
      b = Ei(o.clientHeight - (m + d)),
      f = Ei(p),
      v = {
        rootMargin: -w + "px " + -x + "px " + -b + "px " + -f + "px",
        threshold: lt(0, ur(1, l)) || 1,
      };
    let k = !0;
    function S(E) {
      const N = E[0].intersectionRatio;
      if (N !== l) {
        if (!k) return i();
        N
          ? i(!1, N)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      (N === 1 && !ev(c, e.getBoundingClientRect()) && i(), (k = !1));
    }
    try {
      n = new IntersectionObserver(S, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, v);
    }
    n.observe(e);
  }
  return (i(!0), s);
}
function ik(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = Xu(e),
    p = o || s ? [...(c ? Ds(c) : []), ...Ds(t)] : [];
  p.forEach((f) => {
    (o && f.addEventListener("scroll", n, { passive: !0 }),
      s && f.addEventListener("resize", n));
  });
  const m = c && a ? sk(c, n) : null;
  let g = -1,
    d = null;
  i &&
    ((d = new ResizeObserver((f) => {
      let [h] = f;
      (h &&
        h.target === c &&
        d &&
        (d.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var v;
          (v = d) == null || v.observe(t);
        }))),
        n());
    })),
    c && !l && d.observe(c),
    d.observe(t));
  let w,
    x = l ? Dr(e) : null;
  l && b();
  function b() {
    const f = Dr(e);
    (x && !ev(x, f) && n(), (x = f), (w = requestAnimationFrame(b)));
  }
  return (
    n(),
    () => {
      var f;
      (p.forEach((h) => {
        (o && h.removeEventListener("scroll", n),
          s && h.removeEventListener("resize", n));
      }),
        m == null || m(),
        (f = d) == null || f.disconnect(),
        (d = null),
        l && cancelAnimationFrame(w));
    }
  );
}
const ak = R2,
  lk = L2,
  ck = j2,
  uk = O2,
  dk = P2,
  Jf = _2,
  fk = I2,
  pk = (e, t, n) => {
    const r = new Map(),
      o = { platform: ok, ...n },
      s = { ...o.platform, _c: r };
    return N2(e, t, { ...o, platform: s });
  };
var hk = typeof document < "u",
  mk = function () {},
  Ui = hk ? y.useLayoutEffect : mk;
function xa(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!xa(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0;) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !xa(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tv(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ep(e, t) {
  const n = tv(e);
  return Math.round(t * n) / n;
}
function Rl(e) {
  const t = y.useRef(e);
  return (
    Ui(() => {
      t.current = e;
    }),
    t
  );
}
function gk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [p, m] = y.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [g, d] = y.useState(r);
  xa(g, r) || d(r);
  const [w, x] = y.useState(null),
    [b, f] = y.useState(null),
    h = y.useCallback((_) => {
      _ !== E.current && ((E.current = _), x(_));
    }, []),
    v = y.useCallback((_) => {
      _ !== N.current && ((N.current = _), f(_));
    }, []),
    k = s || w,
    S = i || b,
    E = y.useRef(null),
    N = y.useRef(null),
    j = y.useRef(p),
    M = l != null,
    O = Rl(l),
    D = Rl(o),
    F = Rl(c),
    Y = y.useCallback(() => {
      if (!E.current || !N.current) return;
      const _ = { placement: t, strategy: n, middleware: g };
      (D.current && (_.platform = D.current),
        pk(E.current, N.current, _).then((T) => {
          const z = { ...T, isPositioned: F.current !== !1 };
          $.current &&
            !xa(j.current, z) &&
            ((j.current = z),
            Gs.flushSync(() => {
              m(z);
            }));
        }));
    }, [g, t, n, D, F]);
  Ui(() => {
    c === !1 &&
      j.current.isPositioned &&
      ((j.current.isPositioned = !1), m((_) => ({ ..._, isPositioned: !1 })));
  }, [c]);
  const $ = y.useRef(!1);
  (Ui(
    () => (
      ($.current = !0),
      () => {
        $.current = !1;
      }
    ),
    [],
  ),
    Ui(() => {
      if ((k && (E.current = k), S && (N.current = S), k && S)) {
        if (O.current) return O.current(k, S, Y);
        Y();
      }
    }, [k, S, Y, O, M]));
  const X = y.useMemo(
      () => ({ reference: E, floating: N, setReference: h, setFloating: v }),
      [h, v],
    ),
    Q = y.useMemo(() => ({ reference: k, floating: S }), [k, S]),
    V = y.useMemo(() => {
      const _ = { position: n, left: 0, top: 0 };
      if (!Q.floating) return _;
      const T = ep(Q.floating, p.x),
        z = ep(Q.floating, p.y);
      return a
        ? {
            ..._,
            transform: "translate(" + T + "px, " + z + "px)",
            ...(tv(Q.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: T, top: z };
    }, [n, a, Q.floating, p.x, p.y]);
  return y.useMemo(
    () => ({ ...p, update: Y, refs: X, elements: Q, floatingStyles: V }),
    [p, Y, X, Q, V],
  );
}
const vk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Jf({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Jf({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  yk = (e, t) => ({ ...ak(e), options: [e, t] }),
  xk = (e, t) => ({ ...lk(e), options: [e, t] }),
  wk = (e, t) => ({ ...fk(e), options: [e, t] }),
  bk = (e, t) => ({ ...ck(e), options: [e, t] }),
  kk = (e, t) => ({ ...uk(e), options: [e, t] }),
  Sk = (e, t) => ({ ...dk(e), options: [e, t] }),
  Ck = (e, t) => ({ ...vk(e), options: [e, t] });
var Ek = "Arrow",
  nv = y.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return u.jsx(Re.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : u.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
nv.displayName = Ek;
var Nk = nv;
function rv(e) {
  const [t, n] = y.useState(void 0);
  return (
    cr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, a;
          if ("borderBoxSize" in s) {
            const l = s.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            ((i = c.inlineSize), (a = c.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          n({ width: i, height: a });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Ju = "Popper",
  [ov, sv] = $o(Ju),
  [_k, iv] = ov(Ju),
  av = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = y.useState(null);
    return u.jsx(_k, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
av.displayName = Ju;
var lv = "PopperAnchor",
  cv = y.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = iv(lv, n),
      i = y.useRef(null),
      a = pt(t, i);
    return (
      y.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : u.jsx(Re.div, { ...o, ref: a })
    );
  });
cv.displayName = lv;
var ed = "PopperContent",
  [jk, Pk] = ov(ed),
  uv = y.forwardRef((e, t) => {
    var oe, Nt, _t, an, Ve, Wt;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: i = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: p = 0,
        sticky: m = "partial",
        hideWhenDetached: g = !1,
        updatePositionStrategy: d = "optimized",
        onPlaced: w,
        ...x
      } = e,
      b = iv(ed, n),
      [f, h] = y.useState(null),
      v = pt(t, (qe) => h(qe)),
      [k, S] = y.useState(null),
      E = rv(k),
      N = (E == null ? void 0 : E.width) ?? 0,
      j = (E == null ? void 0 : E.height) ?? 0,
      M = r + (s !== "center" ? "-" + s : ""),
      O =
        typeof p == "number"
          ? p
          : { top: 0, right: 0, bottom: 0, left: 0, ...p },
      D = Array.isArray(c) ? c : [c],
      F = D.length > 0,
      Y = { padding: O, boundary: D.filter(Rk), altBoundary: F },
      {
        refs: $,
        floatingStyles: X,
        placement: Q,
        isPositioned: V,
        middlewareData: _,
      } = gk({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...qe) =>
          ik(...qe, { animationFrame: d === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          yk({ mainAxis: o + j, alignmentAxis: i }),
          l &&
            xk({
              mainAxis: !0,
              crossAxis: !1,
              limiter: m === "partial" ? wk() : void 0,
              ...Y,
            }),
          l && bk({ ...Y }),
          kk({
            ...Y,
            apply: ({
              elements: qe,
              rects: mr,
              availableWidth: ln,
              availableHeight: gr,
            }) => {
              const { width: cn, height: Xe } = mr.reference,
                Ht = qe.floating.style;
              (Ht.setProperty("--radix-popper-available-width", `${ln}px`),
                Ht.setProperty("--radix-popper-available-height", `${gr}px`),
                Ht.setProperty("--radix-popper-anchor-width", `${cn}px`),
                Ht.setProperty("--radix-popper-anchor-height", `${Xe}px`));
            },
          }),
          k && Ck({ element: k, padding: a }),
          Lk({ arrowWidth: N, arrowHeight: j }),
          g && Sk({ strategy: "referenceHidden", ...Y }),
        ],
      }),
      [T, z] = pv(Q),
      q = lr(w);
    cr(() => {
      V && (q == null || q());
    }, [V, q]);
    const W = (oe = _.arrow) == null ? void 0 : oe.x,
      Z = (Nt = _.arrow) == null ? void 0 : Nt.y,
      ne = ((_t = _.arrow) == null ? void 0 : _t.centerOffset) !== 0,
      [ce, Ne] = y.useState();
    return (
      cr(() => {
        f && Ne(window.getComputedStyle(f).zIndex);
      }, [f]),
      u.jsx("div", {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...X,
          transform: V ? X.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ce,
          "--radix-popper-transform-origin": [
            (an = _.transformOrigin) == null ? void 0 : an.x,
            (Ve = _.transformOrigin) == null ? void 0 : Ve.y,
          ].join(" "),
          ...(((Wt = _.hide) == null ? void 0 : Wt.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: u.jsx(jk, {
          scope: n,
          placedSide: T,
          onArrowChange: S,
          arrowX: W,
          arrowY: Z,
          shouldHideArrow: ne,
          children: u.jsx(Re.div, {
            "data-side": T,
            "data-align": z,
            ...x,
            ref: v,
            style: { ...x.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
uv.displayName = ed;
var dv = "PopperArrow",
  Tk = { top: "bottom", right: "left", bottom: "top", left: "right" },
  fv = y.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = Pk(dv, r),
      i = Tk[s.placedSide];
    return u.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: u.jsx(Nk, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
fv.displayName = dv;
function Rk(e) {
  return e !== null;
}
var Lk = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, f, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0,
      a = i ? 0 : e.arrowWidth,
      l = i ? 0 : e.arrowHeight,
      [c, p] = pv(n),
      m = { start: "0%", center: "50%", end: "100%" }[p],
      g = (((f = o.arrow) == null ? void 0 : f.x) ?? 0) + a / 2,
      d = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "",
      x = "";
    return (
      c === "bottom"
        ? ((w = i ? m : `${g}px`), (x = `${-l}px`))
        : c === "top"
          ? ((w = i ? m : `${g}px`), (x = `${r.floating.height + l}px`))
          : c === "right"
            ? ((w = `${-l}px`), (x = i ? m : `${d}px`))
            : c === "left" &&
              ((w = `${r.floating.width + l}px`), (x = i ? m : `${d}px`)),
      { data: { x: w, y: x } }
    );
  },
});
function pv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var XE = av,
  Ik = cv,
  Ok = uv,
  Ak = fv,
  [Qa, ZE] = $o("Tooltip", [sv]),
  td = sv(),
  hv = "TooltipProvider",
  Mk = 700,
  tp = "tooltip.open",
  [$k, mv] = Qa(hv),
  gv = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Mk,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: s,
      } = e,
      i = y.useRef(!0),
      a = y.useRef(!1),
      l = y.useRef(0);
    return (
      y.useEffect(() => {
        const c = l.current;
        return () => window.clearTimeout(c);
      }, []),
      u.jsx($k, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: y.useCallback(() => {
          (window.clearTimeout(l.current), (i.current = !1));
        }, []),
        onClose: y.useCallback(() => {
          (window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (i.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: y.useCallback((c) => {
          a.current = c;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
gv.displayName = hv;
var vv = "Tooltip",
  [JE, Ga] = Qa(vv),
  Dc = "TooltipTrigger",
  zk = y.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Ga(Dc, n),
      s = mv(Dc, n),
      i = td(n),
      a = y.useRef(null),
      l = pt(t, a, o.onTriggerChange),
      c = y.useRef(!1),
      p = y.useRef(!1),
      m = y.useCallback(() => (c.current = !1), []);
    return (
      y.useEffect(
        () => () => document.removeEventListener("pointerup", m),
        [m],
      ),
      u.jsx(Ik, {
        asChild: !0,
        ...i,
        children: u.jsx(Re.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: Ee(e.onPointerMove, (g) => {
            g.pointerType !== "touch" &&
              !p.current &&
              !s.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (p.current = !0));
          }),
          onPointerLeave: Ee(e.onPointerLeave, () => {
            (o.onTriggerLeave(), (p.current = !1));
          }),
          onPointerDown: Ee(e.onPointerDown, () => {
            (o.open && o.onClose(),
              (c.current = !0),
              document.addEventListener("pointerup", m, { once: !0 }));
          }),
          onFocus: Ee(e.onFocus, () => {
            c.current || o.onOpen();
          }),
          onBlur: Ee(e.onBlur, o.onClose),
          onClick: Ee(e.onClick, o.onClose),
        }),
      })
    );
  });
zk.displayName = Dc;
var Dk = "TooltipPortal",
  [e4, Fk] = Qa(Dk, { forceMount: void 0 }),
  Lo = "TooltipContent",
  yv = y.forwardRef((e, t) => {
    const n = Fk(Lo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
      i = Ga(Lo, e.__scopeTooltip);
    return u.jsx(Fa, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? u.jsx(xv, { side: o, ...s, ref: t })
        : u.jsx(Uk, { side: o, ...s, ref: t }),
    });
  }),
  Uk = y.forwardRef((e, t) => {
    const n = Ga(Lo, e.__scopeTooltip),
      r = mv(Lo, e.__scopeTooltip),
      o = y.useRef(null),
      s = pt(t, o),
      [i, a] = y.useState(null),
      { trigger: l, onClose: c } = n,
      p = o.current,
      { onPointerInTransitChange: m } = r,
      g = y.useCallback(() => {
        (a(null), m(!1));
      }, [m]),
      d = y.useCallback(
        (w, x) => {
          const b = w.currentTarget,
            f = { x: w.clientX, y: w.clientY },
            h = Qk(f, b.getBoundingClientRect()),
            v = Gk(f, h),
            k = Kk(x.getBoundingClientRect()),
            S = qk([...v, ...k]);
          (a(S), m(!0));
        },
        [m],
      );
    return (
      y.useEffect(() => () => g(), [g]),
      y.useEffect(() => {
        if (l && p) {
          const w = (b) => d(b, p),
            x = (b) => d(b, l);
          return (
            l.addEventListener("pointerleave", w),
            p.addEventListener("pointerleave", x),
            () => {
              (l.removeEventListener("pointerleave", w),
                p.removeEventListener("pointerleave", x));
            }
          );
        }
      }, [l, p, d, g]),
      y.useEffect(() => {
        if (i) {
          const w = (x) => {
            const b = x.target,
              f = { x: x.clientX, y: x.clientY },
              h =
                (l == null ? void 0 : l.contains(b)) ||
                (p == null ? void 0 : p.contains(b)),
              v = !Yk(f, i);
            h ? g() : v && (g(), c());
          };
          return (
            document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
          );
        }
      }, [l, p, i, c, g]),
      u.jsx(xv, { ...e, ref: s })
    );
  }),
  [Bk, Vk] = Qa(vv, { isInside: !1 }),
  Wk = Pw("TooltipContent"),
  xv = y.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        ...a
      } = e,
      l = Ga(Lo, n),
      c = td(n),
      { onClose: p } = l;
    return (
      y.useEffect(
        () => (
          document.addEventListener(tp, p),
          () => document.removeEventListener(tp, p)
        ),
        [p],
      ),
      y.useEffect(() => {
        if (l.trigger) {
          const m = (g) => {
            const d = g.target;
            d != null && d.contains(l.trigger) && p();
          };
          return (
            window.addEventListener("scroll", m, { capture: !0 }),
            () => window.removeEventListener("scroll", m, { capture: !0 })
          );
        }
      }, [l.trigger, p]),
      u.jsx(zu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: p,
        children: u.jsxs(Ok, {
          "data-state": l.stateAttribute,
          ...c,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            u.jsx(Wk, { children: r }),
            u.jsx(Bk, {
              scope: n,
              isInside: !0,
              children: u.jsx(Jw, {
                id: l.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
yv.displayName = Lo;
var wv = "TooltipArrow",
  Hk = y.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = td(n);
    return Vk(wv, n).isInside ? null : u.jsx(Ak, { ...o, ...r, ref: t });
  });
Hk.displayName = wv;
function Qk(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Gk(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Kk(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Yk(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s],
      l = t[i],
      c = a.x,
      p = a.y,
      m = l.x,
      g = l.y;
    p > r != g > r && n < ((m - c) * (r - p)) / (g - p) + c && (o = !o);
  }
  return o;
}
function qk(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    Xk(t)
  );
}
function Xk(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2;) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2;) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Zk = gv,
  bv = yv;
const Jk = Zk,
  eS = y.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    u.jsx(bv, {
      ref: r,
      sideOffset: t,
      className: ht(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
eS.displayName = bv.displayName;
const tS = "modulepreload",
  nS = function (e) {
    return "/" + e;
  },
  np = {},
  Pn = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        a =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((l) => {
          if (((l = nS(l)), l in np)) return;
          np[l] = !0;
          const c = l.endsWith(".css"),
            p = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${p}`)) return;
          const m = document.createElement("link");
          if (
            ((m.rel = c ? "stylesheet" : tS),
            c || (m.as = "script"),
            (m.crossOrigin = ""),
            (m.href = l),
            a && m.setAttribute("nonce", a),
            document.head.appendChild(m),
            c)
          )
            return new Promise((g, d) => {
              (m.addEventListener("load", g),
                m.addEventListener("error", () =>
                  d(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    function s(i) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented))
        throw i;
    }
    return o.then((i) => {
      for (const a of i || []) a.status === "rejected" && s(a.reason);
      return t().catch(s);
    });
  },
  kv = y.createContext(!1),
  Sv = () => y.useContext(kv),
  rS = "/assets/bliss.jpg",
  oS = 1,
  sS = "febc9954-7d8a-43ab-8b43-072dd43c3c09",
  iS = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  aS =
    "/__l5e/assets-v1/febc9954-7d8a-43ab-8b43-072dd43c3c09/02._Quest_for_the_Golden_Trophy.mp3",
  lS =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/febc9954-7d8a-43ab-8b43-072dd43c3c09/02._Quest_for_the_Golden_Trophy.mp3",
  cS = "02._Quest_for_the_Golden_Trophy.mp3",
  uS = 6353772,
  dS = "audio/mpeg",
  fS = "2026-07-05T00:59:32Z",
  pS = {
    version: oS,
    asset_id: sS,
    project_id: iS,
    url: aS,
    r2_key: lS,
    original_filename: cS,
    size: uS,
    content_type: dS,
    created_at: fS,
  },
  hS = 1,
  mS = "9d467c17-bb84-41c8-9b4e-e842885937c9",
  gS = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  vS =
    "/__l5e/assets-v1/9d467c17-bb84-41c8-9b4e-e842885937c9/05._Super_Mario_64_Main_Theme.mp3",
  yS =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/9d467c17-bb84-41c8-9b4e-e842885937c9/05._Super_Mario_64_Main_Theme.mp3",
  xS = "05._Super_Mario_64_Main_Theme.mp3",
  wS = 5037997,
  bS = "audio/mpeg",
  kS = "2026-07-05T00:59:36Z",
  SS = {
    version: hS,
    asset_id: mS,
    project_id: gS,
    url: vS,
    r2_key: yS,
    original_filename: xS,
    size: wS,
    content_type: bS,
    created_at: kS,
  },
  CS = 1,
  ES = "07fdac6f-8ac5-4fce-b6be-c332354282aa",
  NS = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  _S =
    "/__l5e/assets-v1/07fdac6f-8ac5-4fce-b6be-c332354282aa/1-11._Mice_on_Venus.mp3",
  jS =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/07fdac6f-8ac5-4fce-b6be-c332354282aa/1-11._Mice_on_Venus.mp3",
  PS = "1-11._Mice_on_Venus.mp3",
  TS = 7912144,
  RS = "audio/mpeg",
  LS = "2026-07-05T00:59:40Z",
  IS = {
    version: CS,
    asset_id: ES,
    project_id: NS,
    url: _S,
    r2_key: jS,
    original_filename: PS,
    size: TS,
    content_type: RS,
    created_at: LS,
  },
  OS = 1,
  AS = "774e2e0b-44a3-4858-a544-ebddcfbcc96a",
  MS = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  $S = "/__l5e/assets-v1/774e2e0b-44a3-4858-a544-ebddcfbcc96a/36._Bee_DM.mp3",
  zS =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/774e2e0b-44a3-4858-a544-ebddcfbcc96a/36._Bee_DM.mp3",
  DS = "36._Bee_DM.mp3",
  FS = 2898173,
  US = "audio/mpeg",
  BS = "2026-07-05T00:59:43Z",
  VS = {
    version: OS,
    asset_id: AS,
    project_id: MS,
    url: $S,
    r2_key: zS,
    original_filename: DS,
    size: FS,
    content_type: US,
    created_at: BS,
  },
  WS = 1,
  HS = "fe05ae0b-3af4-4bba-b848-e840360ce615",
  QS = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  GS =
    "/__l5e/assets-v1/fe05ae0b-3af4-4bba-b848-e840360ce615/38._Rec_Room_Theme.mp3",
  KS =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/fe05ae0b-3af4-4bba-b848-e840360ce615/38._Rec_Room_Theme.mp3",
  YS = "38._Rec_Room_Theme.mp3",
  qS = 2135409,
  XS = "audio/mpeg",
  ZS = "2026-07-05T00:59:45Z",
  JS = {
    version: WS,
    asset_id: HS,
    project_id: QS,
    url: GS,
    r2_key: KS,
    original_filename: YS,
    size: qS,
    content_type: XS,
    created_at: ZS,
  },
  eC = 1,
  tC = "9dab8451-cf8f-4b8b-af88-cc2a0151cc1f",
  nC = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  rC =
    "/__l5e/assets-v1/9dab8451-cf8f-4b8b-af88-cc2a0151cc1f/40._Account_Organism.mp3",
  oC =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/9dab8451-cf8f-4b8b-af88-cc2a0151cc1f/40._Account_Organism.mp3",
  sC = "40._Account_Organism.mp3",
  iC = 2271907,
  aC = "audio/mpeg",
  lC = "2026-07-05T00:59:48Z",
  cC = {
    version: eC,
    asset_id: tC,
    project_id: nC,
    url: rC,
    r2_key: oC,
    original_filename: sC,
    size: iC,
    content_type: aC,
    created_at: lC,
  },
  uC = 1,
  dC = "14c08e2e-7536-4456-9256-9cc9dc6f5276",
  fC = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  pC = "/__l5e/assets-v1/14c08e2e-7536-4456-9256-9cc9dc6f5276/44._Bassment.mp3",
  hC =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/14c08e2e-7536-4456-9256-9cc9dc6f5276/44._Bassment.mp3",
  mC = "44._Bassment.mp3",
  gC = 1609690,
  vC = "audio/mpeg",
  yC = "2026-07-05T00:59:51Z",
  xC = {
    version: uC,
    asset_id: dC,
    project_id: fC,
    url: pC,
    r2_key: hC,
    original_filename: mC,
    size: gC,
    content_type: vC,
    created_at: yC,
  },
  wC = 1,
  bC = "754a89c4-f096-48bc-9c12-e2ba598e2297",
  kC = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  SC = "/__l5e/assets-v1/754a89c4-f096-48bc-9c12-e2ba598e2297/60._OOBE.mp3",
  CC =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/754a89c4-f096-48bc-9c12-e2ba598e2297/60._OOBE.mp3",
  EC = "60._OOBE.mp3",
  NC = 2920356,
  _C = "audio/mpeg",
  jC = "2026-07-05T00:59:54Z",
  PC = {
    version: wC,
    asset_id: bC,
    project_id: kC,
    url: SC,
    r2_key: CC,
    original_filename: EC,
    size: NC,
    content_type: _C,
    created_at: jC,
  },
  TC = 1,
  RC = "3e059816-a49b-4f8e-abce-0bf9b1835f69",
  LC = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  IC =
    "/__l5e/assets-v1/3e059816-a49b-4f8e-abce-0bf9b1835f69/Stan_Lepard_-_Velkommen.mp3",
  OC =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/3e059816-a49b-4f8e-abce-0bf9b1835f69/Stan_Lepard_-_Velkommen.mp3",
  AC = "Stan_Lepard_-_Velkommen.mp3",
  MC = 5462236,
  $C = "audio/mpeg",
  zC = "2026-07-05T00:59:58Z",
  DC = {
    version: TC,
    asset_id: RC,
    project_id: LC,
    url: IC,
    r2_key: OC,
    original_filename: AC,
    size: MC,
    content_type: $C,
    created_at: zC,
  },
  FC = 1,
  UC = "e173bbe1-2d7f-4328-848f-0441bdc29c56",
  BC = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  VC =
    "/__l5e/assets-v1/e173bbe1-2d7f-4328-848f-0441bdc29c56/music_vend_clarinet.mp3",
  WC =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/e173bbe1-2d7f-4328-848f-0441bdc29c56/music_vend_clarinet.mp3",
  HC = "music_vend_clarinet.mp3",
  QC = 787362,
  GC = "audio/mpeg",
  KC = "2026-07-05T01:00:01Z",
  YC = {
    version: FC,
    asset_id: UC,
    project_id: BC,
    url: VC,
    r2_key: WC,
    original_filename: HC,
    size: QC,
    content_type: GC,
    created_at: KC,
  },
  Qr = [
    { title: "Quest for the Golden Trophy", url: pS.url },
    { title: "Super Mario 64 Main Theme", url: SS.url },
    { title: "Mice on Venus", url: IS.url },
    { title: "Bee DM", url: VS.url },
    { title: "Rec Room Theme", url: JS.url },
    { title: "Account Organism", url: cC.url },
    { title: "Bassment", url: xC.url },
    { title: "OOBE", url: PC.url },
    { title: "Velkommen — Stan LePard", url: DC.url },
    { title: "Music Vend (Clarinet)", url: YC.url },
  ],
  rp = ["#ff5ea8", "#5ec8ff", "#ffe14d", "#7dff8f", "#c78bff", "#ff9a4d"],
  qC = () => {
    const [e, t] = y.useState(!1),
      [n, r] = y.useState(0),
      [o, s] = y.useState(!1),
      [i, a] = y.useState(0.7),
      [l, c] = y.useState([]),
      p = y.useRef(null),
      m = y.useRef(0);
    (y.useEffect(() => {
      p.current && (p.current.volume = i);
    }, [i]),
      y.useEffect(() => {
        const w = p.current;
        w && ((w.src = Qr[n].url), o && w.play().catch(() => s(!1)));
      }, [n]),
      y.useEffect(() => {
        const w = p.current;
        w && (o ? w.play().catch(() => s(!1)) : w.pause());
      }, [o]),
      y.useEffect(() => {
        if (!o) return;
        const w = setInterval(() => {
          const x = ++m.current,
            b = rp[Math.floor(Math.random() * rp.length)],
            f = 10 + Math.random() * 40,
            h = (Math.random() - 0.5) * 60,
            v = 2200 + Math.random() * 900;
          (c((k) => [...k, { id: x, left: f, color: b, drift: h, dur: v }]),
            setTimeout(() => c((k) => k.filter((S) => S.id !== x)), v));
        }, 420);
        return () => clearInterval(w);
      }, [o]),
      y.useEffect(() => {
        const w = () => {
            (t(!0), s(!0));
          },
          x = () => s(!1);
        return (
          window.addEventListener("clippy:play", w),
          window.addEventListener("clippy:stop", x),
          () => {
            (window.removeEventListener("clippy:play", w),
              window.removeEventListener("clippy:stop", x));
          }
        );
      }, []));
    const g = () => r((w) => (w + 1) % Qr.length),
      d = () => r((w) => (w - 1 + Qr.length) % Qr.length);
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("audio", { ref: p, onEnded: g, preload: "none" }),
        e &&
          u.jsxs("div", {
            className: "fa-radio-popup",
            children: [
              u.jsxs("div", {
                className: "fa-radio-popup-header",
                children: [
                  u.jsx(Bf, { className: "w-4 h-4" }),
                  u.jsx("span", {
                    className: "flex-1 font-semibold text-[12px]",
                    children: "Aero Radio",
                  }),
                  u.jsx("button", {
                    className: "fa-radio-x",
                    onClick: () => t(!1),
                    "aria-label": "Close",
                    children: u.jsx(Er, { className: "w-3 h-3" }),
                  }),
                ],
              }),
              u.jsx("div", {
                className: "fa-radio-now",
                children: u.jsx("div", {
                  className: "fa-radio-marquee",
                  children: u.jsx("span", { children: Qr[n].title }),
                }),
              }),
              u.jsxs("div", {
                className: "fa-radio-controls",
                children: [
                  u.jsx("button", {
                    onClick: d,
                    "aria-label": "Previous",
                    children: u.jsx(Tb, { className: "w-4 h-4" }),
                  }),
                  u.jsx("button", {
                    className: "fa-radio-play",
                    onClick: () => s((w) => !w),
                    "aria-label": "Play/Pause",
                    children: o
                      ? u.jsx(_b, { className: "w-5 h-5" })
                      : u.jsx(jb, { className: "w-5 h-5" }),
                  }),
                  u.jsx("button", {
                    onClick: g,
                    "aria-label": "Next",
                    children: u.jsx(Rb, { className: "w-4 h-4" }),
                  }),
                  u.jsxs("div", {
                    className: "fa-radio-vol",
                    children: [
                      u.jsx(Lb, { className: "w-3.5 h-3.5" }),
                      u.jsx("input", {
                        type: "range",
                        min: 0,
                        max: 1,
                        step: 0.01,
                        value: i,
                        onChange: (w) => a(Number(w.target.value)),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "fa-radio-list",
                children: Qr.map((w, x) =>
                  u.jsxs(
                    "button",
                    {
                      className: `fa-radio-track ${x === n ? "active" : ""}`,
                      onClick: () => {
                        (r(x), s(!0));
                      },
                      children: [
                        u.jsx("span", {
                          className: "fa-radio-track-num",
                          children: String(x + 1).padStart(2, "0"),
                        }),
                        u.jsx("span", {
                          className: "truncate",
                          children: w.title,
                        }),
                      ],
                    },
                    w.url,
                  ),
                ),
              }),
            ],
          }),
        u.jsxs("div", {
          className: "fa-radio-wrap",
          children: [
            l.map((w) =>
              u.jsx(
                "span",
                {
                  className: "fa-radio-note",
                  style: {
                    left: `${w.left}px`,
                    color: w.color,
                    "--drift": `${w.drift}px`,
                    animationDuration: `${w.dur}ms`,
                  },
                  children: "♪",
                },
                w.id,
              ),
            ),
            u.jsx("button", {
              className: `fa-radio-btn ${o ? "dancing" : ""}`,
              onClick: () => t((w) => !w),
              "aria-label": "Open radio",
              children: u.jsx(Bf, { className: "w-6 h-6" }),
            }),
          ],
        }),
      ],
    });
  },
  XC = 1,
  ZC = "048d409d-21eb-4101-9fa7-691bedff81ca",
  JC = "11a7665d-d1ea-491e-a144-1bfcd9c20fa6",
  eE = "/__l5e/assets-v1/048d409d-21eb-4101-9fa7-691bedff81ca/clippy.png",
  tE =
    "a/v1/11a7665d-d1ea-491e-a144-1bfcd9c20fa6/048d409d-21eb-4101-9fa7-691bedff81ca/clippy.png",
  nE = "clippy.png",
  rE = 145186,
  oE = "image/png",
  sE = "2026-07-05T01:37:33Z",
  iE = {
    version: XC,
    asset_id: ZC,
    project_id: JC,
    url: eE,
    r2_key: tE,
    original_filename: nE,
    size: rE,
    content_type: oE,
    created_at: sE,
  },
  Ni = "glg_clippy_seen_v1",
  xt = (e, t) => window.dispatchEvent(new CustomEvent(e, { detail: t })),
  es = [
    {
      text: "Hi there! I'm Clippy 📎 — your quirky little assistant. Looks like it's your first time here!",
    },
    {
      text: "This is your desktop. Double-click any icon to open a program — just like the good old days.",
    },
    {
      text: "Want to grab a level from GrabVR? Open the Single Download app and paste a level ID.",
      action: {
        label: "Open Single Download",
        run: () => xt("clippy:open", "single"),
      },
    },
    {
      text: "You can also chat with other users in Messenger, or hang out in the Forums.",
      action: {
        label: "Open Messenger",
        run: () => xt("clippy:open", "messenger"),
      },
    },
    {
      text: "Check out the little Frutiger Aero radio in the bottom-right corner for some tunes 🎵",
      action: { label: "Play some music", run: () => xt("clippy:play") },
    },
    { text: "That's it! Click me anytime you need help. Happy grabbing! ✨" },
  ],
  aE = [
    {
      label: "Open an app",
      msg: {
        text: "Which one should I open for you?",
        actions: [
          { label: "Single Download", run: () => xt("clippy:open", "single") },
          { label: "Messenger", run: () => xt("clippy:open", "messenger") },
          { label: "Forums", run: () => xt("clippy:open", "forums") },
          {
            label: "Bookmarklets",
            run: () => xt("clippy:open", "bookmarklets"),
          },
          {
            label: "Control Panel",
            run: () => xt("clippy:open", "controlpanel"),
          },
        ],
      },
    },
    {
      label: "Play music",
      msg: {
        text: "Cranking up the Aero Radio for you now! 🎶",
        actions: [{ label: "Stop music", run: () => xt("clippy:stop") }],
      },
    },
    {
      label: "How do I grab a level?",
      msg: {
        text: "Easy! Open Single Download and paste a level ID (like 'username:123'). Or use the Steal Level bookmarklet on grabvr.quest.",
        actions: [
          {
            label: "Open Single Download",
            run: () => xt("clippy:open", "single"),
          },
          {
            label: "Open Bookmarklets",
            run: () => xt("clippy:open", "bookmarklets"),
          },
        ],
      },
    },
    { label: "Replay tutorial", msg: { text: "Sure! Restarting the tour…" } },
  ],
  lE = () => {
    var w, x;
    const [e, t] = y.useState(!1),
      [n, r] = y.useState(null),
      [o, s] = y.useState(null),
      [i, a] = y.useState(!1);
    (y.useRef(null),
      y.useEffect(() => {
        localStorage.getItem(Ni) ||
          setTimeout(() => {
            (t(!0), s(0));
          }, 900);
      }, []),
      y.useEffect(() => {
        const b = setInterval(() => {
          (a(!0), setTimeout(() => a(!1), 1200));
        }, 12e3);
        return () => clearInterval(b);
      }, []));
    const l =
        o !== null
          ? (w = es[o]) == null
            ? void 0
            : w.text
          : n == null
            ? void 0
            : n.text,
      c =
        o !== null
          ? (x = es[o]) != null && x.action
            ? [es[o].action]
            : []
          : ((n == null ? void 0 : n.actions) ?? []),
      p = () => {
        if (o !== null) {
          if (o + 1 >= es.length) {
            (localStorage.setItem(Ni, "1"),
              s(null),
              r({ text: "You can ask me anything from this menu 👇" }));
            return;
          }
          s(o + 1);
        }
      },
      m = () => {
        (localStorage.setItem(Ni, "1"), s(null), r(null));
      },
      g = (b) => {
        if (b.label === "Replay tutorial") {
          (s(0), r(null));
          return;
        }
        (r(b.msg), b.label === "Play music" && xt("clippy:play"));
      },
      d = () => {
        e ? t(!1) : (t(!0), !localStorage.getItem(Ni) && o === null && s(0));
      };
    return u.jsxs("div", {
      className: "clippy-wrap",
      children: [
        e &&
          u.jsxs("div", {
            className: "clippy-bubble",
            children: [
              u.jsx("button", {
                className: "clippy-bubble-close",
                onClick: () => t(!1),
                "aria-label": "Close",
                children: u.jsx(Er, { className: "w-3 h-3" }),
              }),
              u.jsx("div", {
                className: "clippy-bubble-text",
                children: l ?? "Hi! How can I help?",
              }),
              c &&
                c.length > 0 &&
                u.jsx("div", {
                  className: "clippy-actions",
                  children: c.map((b) =>
                    u.jsx(
                      "button",
                      {
                        className: "clippy-action",
                        onClick: () => b.run(),
                        children: b.label,
                      },
                      b.label,
                    ),
                  ),
                }),
              o !== null
                ? u.jsxs("div", {
                    className: "clippy-tut-row",
                    children: [
                      u.jsx("button", {
                        className: "clippy-skip",
                        onClick: m,
                        children: "Skip tutorial",
                      }),
                      u.jsx("button", {
                        className: "clippy-next",
                        onClick: p,
                        children: o + 1 >= es.length ? "Finish" : "Next ›",
                      }),
                    ],
                  })
                : u.jsx("div", {
                    className: "clippy-suggestions",
                    children: aE.map((b) =>
                      u.jsx(
                        "button",
                        {
                          className: "clippy-suggestion",
                          onClick: () => g(b),
                          children: b.label,
                        },
                        b.label,
                      ),
                    ),
                  }),
              u.jsx("div", { className: "clippy-bubble-tail" }),
            ],
          }),
        u.jsx("button", {
          className: `clippy-btn ${i ? "wave" : ""}`,
          onClick: d,
          "aria-label": "Clippy assistant",
          title: "Clippy — click for help",
          children: u.jsx("img", { src: iE.url, alt: "Clippy", draggable: !1 }),
        }),
      ],
    });
  },
  op = y.lazy(() => Pn(() => Promise.resolve().then(() => ME), void 0)),
  cE = y.lazy(() => Pn(() => Promise.resolve().then(() => WE), void 0)),
  uE = y.lazy(() => Pn(() => Promise.resolve().then(() => UE), void 0)),
  dE = y.lazy(() => Pn(() => Promise.resolve().then(() => $E), void 0)),
  fE = y.lazy(() => Pn(() => Promise.resolve().then(() => HE), void 0)),
  pE = y.lazy(() =>
    Pn(() => import("./ControlPanel.js"), __vite__mapDeps([0, 1])),
  ),
  hE = y.lazy(() =>
    Pn(() => import("./ApiExplorer.js"), __vite__mapDeps([2, 1])),
  ),
  mE = y.lazy(() =>
    Pn(() => import("./Messenger.js"), __vite__mapDeps([3, 4])),
  ),
  gE = y.lazy(() => Pn(() => import("./Forums.js"), __vite__mapDeps([5, 4]))),
  Kt = ({ children: e }) =>
    u.jsx(kv.Provider, {
      value: !0,
      children: u.jsx(y.Suspense, {
        fallback: u.jsx("div", {
          className: "p-4 text-sm",
          children: "Loading…",
        }),
        children: e,
      }),
    }),
  ts = [
    {
      id: "single",
      label: "Single Download",
      icon: Un,
      iconColor: "#1e6fd9",
      render: () => u.jsx(Kt, { children: u.jsx(op, {}) }),
      defaultSize: { w: 760, h: 560 },
    },
    {
      id: "multi",
      label: "Multi Download",
      icon: Wu,
      iconColor: "#7a3fbf",
      render: () => u.jsx(Kt, { children: u.jsx(op, {}) }),
      defaultSize: { w: 760, h: 560 },
    },
    {
      id: "unlisted",
      label: "Unlisted Levels",
      icon: Vu,
      iconColor: "#c0392b",
      render: () => u.jsx(Kt, { children: u.jsx(cE, {}) }),
      defaultSize: { w: 720, h: 560 },
    },
    {
      id: "bookmarklets",
      label: "Bookmarklets",
      icon: Bu,
      iconColor: "#d4a017",
      render: () => u.jsx(Kt, { children: u.jsx(uE, {}) }),
      defaultSize: { w: 760, h: 560 },
    },
    {
      id: "tutorial",
      label: "Tutorial",
      icon: Rg,
      iconColor: "#2e8b57",
      render: () => u.jsx(Kt, { children: u.jsx(dE, {}) }),
      defaultSize: { w: 640, h: 480 },
    },
    {
      id: "legal",
      label: "Legal",
      icon: Ig,
      iconColor: "#555",
      render: () => u.jsx(Kt, { children: u.jsx(fE, {}) }),
      defaultSize: { w: 600, h: 460 },
    },
    {
      id: "controlpanel",
      label: "Control Panel",
      icon: Pb,
      iconColor: "#4a5568",
      render: () => u.jsx(Kt, { children: u.jsx(pE, {}) }),
      defaultSize: { w: 520, h: 560 },
    },
    {
      id: "api",
      label: "Api",
      icon: bb,
      iconColor: "#2d7d46",
      render: () => u.jsx(Kt, { children: u.jsx(hE, {}) }),
      defaultSize: { w: 880, h: 600 },
    },
    {
      id: "messenger",
      label: "Messenger",
      icon: Eb,
      iconColor: "#0a66c2",
      render: () => u.jsx(Kt, { children: u.jsx(mE, {}) }),
      defaultSize: { w: 780, h: 560 },
    },
    {
      id: "forums",
      label: "Forums",
      icon: Og,
      iconColor: "#8a4b1a",
      render: () => u.jsx(Kt, { children: u.jsx(gE, {}) }),
      defaultSize: { w: 820, h: 580 },
    },
    {
      id: "mycomp",
      label: "My Computer",
      icon: Nb,
      iconColor: "#1e6fd9",
      render: () =>
        u.jsxs("div", {
          className: "p-4 text-[13px]",
          children: [
            u.jsx("p", {
              className: "mb-3 font-bold",
              children: "Welcome to GREY'S GRAB TOOLS.",
            }),
            u.jsx("p", {
              children:
                "Double-click any icon on the desktop to launch a program.",
            }),
            u.jsxs("ul", {
              className: "list-disc list-inside mt-3 space-y-1",
              children: [
                u.jsx("li", {
                  children: "Drag window title bars to move them around.",
                }),
                u.jsx("li", {
                  children:
                    "Click a taskbar item to focus / minimize a window.",
                }),
                u.jsx("li", { children: "Click Start for the program menu." }),
              ],
            }),
          ],
        }),
      defaultSize: { w: 500, h: 360 },
    },
  ],
  vE = () => {
    const [e, t] = y.useState([]),
      [n, r] = y.useState(10),
      [o, s] = y.useState(!1),
      [i, a] = y.useState(new Date()),
      l = y.useRef(1),
      c = y.useRef(null);
    (y.useEffect(() => {
      const f = setInterval(() => a(new Date()), 3e4);
      return () => clearInterval(f);
    }, []),
      y.useEffect(() => {
        const f = (h) => {
          const v = h.detail;
          v && p(v);
        };
        return (
          window.addEventListener("clippy:open", f),
          () => window.removeEventListener("clippy:open", f)
        );
      }));
    const p = (f) => {
        if ((s(!1), e.find((E) => E.programId === f))) {
          const E = n + 1;
          (r(E),
            t((N) =>
              N.map((j) =>
                j.programId === f ? { ...j, minimized: !1, z: E } : j,
              ),
            ));
          return;
        }
        const v = ts.find((E) => E.id === f),
          k = e.length * 24,
          S = n + 1;
        (r(S),
          t((E) => [
            ...E,
            {
              key: l.current++,
              programId: f,
              x: 60 + k,
              y: 40 + k,
              w: v.defaultSize.w,
              h: v.defaultSize.h,
              z: S,
              minimized: !1,
              maximized: !1,
            },
          ]));
      },
      m = (f) => t((h) => h.filter((v) => v.key !== f)),
      g = (f) => {
        const h = n + 1;
        (r(h),
          t((v) =>
            v.map((k) => (k.key === f ? { ...k, z: h, minimized: !1 } : k)),
          ));
      },
      d = (f) => {
        const h = e.find((k) => k.key === f);
        if (!h) return;
        h.z === n && !h.minimized
          ? t((k) => k.map((S) => (S.key === f ? { ...S, minimized: !0 } : S)))
          : g(f);
      },
      w = (f) => {
        var v;
        const h = (v = c.current) == null ? void 0 : v.getBoundingClientRect();
        h &&
          t((k) =>
            k.map((S) =>
              S.key !== f
                ? S
                : S.maximized && S.prev
                  ? { ...S, ...S.prev, maximized: !1, prev: void 0 }
                  : {
                      ...S,
                      maximized: !0,
                      prev: { x: S.x, y: S.y, w: S.w, h: S.h },
                      x: 0,
                      y: 0,
                      w: h.width,
                      h: h.height - 40,
                    },
            ),
          );
      },
      x = (f, h) => {
        if (f.button !== 0 && f.pointerType === "mouse") return;
        const v = e.find((D) => D.key === h);
        if (!v || v.maximized) return;
        g(h);
        const k = f.currentTarget;
        try {
          k.setPointerCapture(f.pointerId);
        } catch {}
        const S = f.clientX,
          E = f.clientY,
          N = v.x,
          j = v.y,
          M = (D) => {
            if (D.pointerId !== f.pointerId) return;
            D.preventDefault();
            const F = D.clientX - S,
              Y = D.clientY - E;
            t(($) =>
              $.map((X) =>
                X.key === h
                  ? {
                      ...X,
                      x: Math.max(-X.w + 80, N + F),
                      y: Math.max(0, j + Y),
                    }
                  : X,
              ),
            );
          },
          O = (D) => {
            if (D.pointerId === f.pointerId) {
              (window.removeEventListener("pointermove", M),
                window.removeEventListener("pointerup", O),
                window.removeEventListener("pointercancel", O));
              try {
                k.releasePointerCapture(f.pointerId);
              } catch {}
            }
          };
        (window.addEventListener("pointermove", M, { passive: !1 }),
          window.addEventListener("pointerup", O),
          window.addEventListener("pointercancel", O));
      },
      b = ts;
    return u.jsxs("div", {
      ref: c,
      className: "xp-desktop",
      style: { backgroundImage: `url(${rS})` },
      onClick: () => s(!1),
      children: [
        u.jsx("div", {
          className: "xp-icon-grid",
          children: b.map((f) =>
            u.jsxs(
              "button",
              {
                className: "xp-desktop-icon",
                onDoubleClick: () => p(f.id),
                onClick: (h) => h.stopPropagation(),
                children: [
                  u.jsx("div", {
                    className: "xp-desktop-icon-img",
                    style: { background: f.iconColor },
                    children: u.jsx(f.icon, {
                      className: "w-7 h-7",
                      style: { color: "#fff" },
                    }),
                  }),
                  u.jsx("span", {
                    className: "xp-desktop-icon-label",
                    children: f.label,
                  }),
                ],
              },
              f.id,
            ),
          ),
        }),
        e.map((f) => {
          const h = ts.find((v) => v.id === f.programId);
          return f.minimized
            ? null
            : u.jsxs(
                "div",
                {
                  className: "xp-win",
                  style: {
                    left: f.x,
                    top: f.y,
                    width: f.w,
                    height: f.h,
                    zIndex: f.z,
                  },
                  onMouseDown: () => g(f.key),
                  children: [
                    u.jsxs("div", {
                      className: "xp-win-title",
                      onPointerDown: (v) => x(v, f.key),
                      onDoubleClick: () => w(f.key),
                      style: { touchAction: "none" },
                      children: [
                        u.jsxs("div", {
                          className: "xp-win-title-text",
                          children: [
                            u.jsx(h.icon, { className: "w-4 h-4" }),
                            u.jsx("span", { children: h.label }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "xp-win-title-buttons",
                          children: [
                            u.jsx("button", {
                              className: "xp-tb xp-tb-min",
                              onClick: (v) => {
                                (v.stopPropagation(),
                                  t((k) =>
                                    k.map((S) =>
                                      S.key === f.key
                                        ? { ...S, minimized: !0 }
                                        : S,
                                    ),
                                  ));
                              },
                              "aria-label": "Minimize",
                              children: "_",
                            }),
                            u.jsx("button", {
                              className: "xp-tb xp-tb-max",
                              onClick: (v) => {
                                (v.stopPropagation(), w(f.key));
                              },
                              "aria-label": "Maximize",
                              children: "▢",
                            }),
                            u.jsx("button", {
                              className: "xp-tb xp-tb-close",
                              onClick: (v) => {
                                (v.stopPropagation(), m(f.key));
                              },
                              "aria-label": "Close",
                              children: "✕",
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "xp-win-body",
                      children: h.render(),
                    }),
                  ],
                },
                f.key,
              );
        }),
        o &&
          u.jsxs("div", {
            className: "xp-startmenu",
            onClick: (f) => f.stopPropagation(),
            children: [
              u.jsxs("div", {
                className: "xp-startmenu-header",
                children: [
                  u.jsx("div", { className: "xp-startmenu-avatar" }),
                  u.jsx("span", { children: "Level Grabber" }),
                ],
              }),
              u.jsx("div", {
                className: "xp-startmenu-body",
                children: ts.map((f) =>
                  u.jsxs(
                    "button",
                    {
                      className: "xp-startmenu-item",
                      onClick: () => p(f.id),
                      children: [
                        u.jsx("span", {
                          className: "xp-sm-icon",
                          style: { background: f.iconColor },
                          children: u.jsx(f.icon, {
                            className: "w-4 h-4",
                            style: { color: "#fff" },
                          }),
                        }),
                        u.jsx("span", { children: f.label }),
                      ],
                    },
                    f.id,
                  ),
                ),
              }),
              u.jsx("div", {
                className: "xp-startmenu-footer",
                children: "© GREY'S GRAB TOOLS",
              }),
            ],
          }),
        u.jsxs("div", {
          className: "xp-taskbar-bar",
          onClick: (f) => f.stopPropagation(),
          children: [
            u.jsxs("button", {
              className: "xp-start-btn",
              onClick: (f) => {
                (f.stopPropagation(), s((h) => !h));
              },
              children: [
                u.jsx("span", { className: "xp-start-orb" }),
                u.jsx("span", { children: "start" }),
              ],
            }),
            u.jsx("div", { className: "xp-task-divider" }),
            u.jsx("div", {
              className: "xp-task-list",
              children: e.map((f) => {
                const h = ts.find((k) => k.id === f.programId),
                  v = !f.minimized && f.z === n;
                return u.jsxs(
                  "button",
                  {
                    className: `xp-task-btn ${v ? "active" : ""}`,
                    onClick: () => d(f.key),
                    children: [
                      u.jsx(h.icon, { className: "w-3.5 h-3.5" }),
                      u.jsx("span", {
                        className: "truncate",
                        children: h.label,
                      }),
                    ],
                  },
                  f.key,
                );
              }),
            }),
            u.jsxs("div", {
              className: "xp-tray",
              children: [
                u.jsx("span", { className: "xp-tray-led" }),
                u.jsx("span", {
                  className: "xp-tray-time",
                  children: i.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                }),
              ],
            }),
          ],
        }),
        u.jsx(qC, {}),
        u.jsx(lE, {}),
      ],
    });
  },
  yE = () => u.jsx(vE, {}),
  xE = [
    { to: "/download?tab=single", label: "Download", icon: Un },
    { to: "/download?tab=multi", label: "Multi Download", icon: Wu },
  ],
  wE = () => {
    const e = Wr(),
      t = (r) =>
        r === "/"
          ? e.pathname === "/"
          : e.pathname + e.search === r || e.pathname === r.split("?")[0],
      n = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    return u.jsx("nav", {
      className: "sticky top-0 z-50",
      style: {
        background: "var(--xp-taskbar)",
        borderBottom: "2px solid #0a0a1a",
        boxShadow:
          "0 2px 0 rgba(255,255,255,0.18) inset, 0 -2px 0 rgba(0,0,0,0.35) inset, 0 4px 14px rgba(0,0,0,0.5)",
      },
      children: u.jsxs("div", {
        className: "max-w-6xl mx-auto flex items-center gap-2 px-2 h-12",
        children: [
          u.jsxs(Pf, {
            to: "/",
            className:
              "flex items-center gap-2 pr-4 pl-3 h-9 rounded-r-[18px] rounded-l-md font-bold italic text-white",
            style: {
              background: "var(--xp-start)",
              border: "1px solid #0a0a1a",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.55) inset, 0 -6px 10px rgba(0,0,0,0.35) inset",
              textShadow: "1px 1px 0 rgba(0,0,0,0.55)",
              fontFamily: '"Comic Sans MS", cursive',
            },
            children: [
              u.jsx("span", {
                className: "inline-block w-5 h-5 rounded-sm",
                style: {
                  background:
                    "conic-gradient(from 0deg, #ff5151, #ffd154, #54d96b, #54a8ff, #ff5151)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(0,0,0,0.5), 0 0 8px rgba(255,255,255,0.35)",
                },
              }),
              "start",
            ],
          }),
          u.jsx("span", {
            style: {
              width: 2,
              height: 28,
              background: "linear-gradient(180deg,#0a0a1a,#1e1e5a)",
              boxShadow: "1px 0 0 rgba(255,255,255,0.18)",
            },
          }),
          u.jsx("div", {
            className: "flex items-center gap-1 overflow-x-auto flex-1",
            children: xE.map((r) => {
              const o = t(r.to);
              return u.jsxs(
                Pf,
                {
                  to: r.to,
                  className:
                    "flex items-center gap-1.5 px-3 h-8 text-[13px] font-bold text-white whitespace-nowrap",
                  style: {
                    fontFamily: '"Comic Sans MS", cursive',
                    borderRadius: 3,
                    border: "1px solid #0a0a1a",
                    background: o
                      ? "linear-gradient(180deg,#2b25a8,#1e1e5a 60%,#141432)"
                      : "linear-gradient(180deg,#6a63ff,#4f46e5 55%,#2b25a8)",
                    boxShadow: o
                      ? "inset 0 2px 6px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)"
                      : "inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -4px 6px rgba(0,0,0,0.25)",
                    textShadow: "1px 1px 0 rgba(0,0,0,0.55)",
                  },
                  children: [
                    u.jsx(r.icon, { className: "w-3.5 h-3.5" }),
                    u.jsx("span", {
                      className: "hidden sm:inline",
                      children: r.label,
                    }),
                  ],
                },
                r.to,
              );
            }),
          }),
          u.jsxs("div", {
            className: "hidden md:flex items-center gap-2 px-3 h-9 rounded-sm",
            style: {
              background: "linear-gradient(180deg,#2b25a8,#1e1e5a 60%,#141432)",
              border: "1px solid #0a0a1a",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
              color: "#fff",
              fontFamily: '"Comic Sans MS", cursive',
              textShadow: "1px 1px 0 rgba(0,0,0,0.5)",
            },
            children: [
              u.jsx("span", { className: "xp-led" }),
              u.jsx("span", { className: "text-[12px]", children: "GLG" }),
              u.jsx("span", { className: "opacity-60", children: "|" }),
              u.jsx("span", {
                className: "text-[12px] tabular-nums",
                children: n,
              }),
            ],
          }),
        ],
      }),
    });
  },
  bE = () =>
    u.jsx("footer", {
      className: "mt-auto px-4 py-4",
      children: u.jsxs("div", {
        className: "max-w-3xl mx-auto",
        children: [
          u.jsx("div", {
            className: "xp-marquee rounded-sm",
            children: u.jsx("div", {
              className: "xp-marquee-inner",
              children:
                "★ Welcome to GREY'S GRAB TOOLS ★ Not affiliated with SlinDev or GRAB VR ★ We are not responsible for how downloaded levels are used ★ Best viewed at 1024×768 ★ Press any key to continue ★ Powered by GREY'S GRAB TOOLS ★",
            }),
          }),
          u.jsxs("p", {
            className: "text-center text-foreground/70 text-xs mt-3",
            children: ["© ", new Date().getFullYear(), " GLG · Service Pack ∞"],
          }),
        ],
      }),
    }),
  Xs = ({ children: e }) =>
    u.jsx("div", {
      className: "min-h-screen flex flex-col",
      children: u.jsx("main", { className: "flex-1 flex flex-col", children: e }),
    }),
  Zs = ({ children: e, className: t = "", title: n = "Grab Level Grabber" }) =>
    Sv()
      ? u.jsx("div", { className: t, children: e })
      : u.jsxs("div", {
          className: `xp-window ${t}`,
          children: [
            u.jsxs("div", {
              className: "xp-titlebar",
              children: [
                u.jsxs("div", {
                  className: "xp-titlebar-title",
                  children: [
                    u.jsx("span", { className: "xp-titlebar-icon" }),
                    u.jsx("span", { children: n }),
                  ],
                }),
                u.jsxs("div", {
                  className: "xp-window-buttons",
                  children: [
                    u.jsx("span", {
                      className: "xp-wb xp-wb-min",
                      "aria-hidden": !0,
                      children: "_",
                    }),
                    u.jsx("span", {
                      className: "xp-wb xp-wb-max",
                      "aria-hidden": !0,
                      children: "▢",
                    }),
                    u.jsx("span", {
                      className: "xp-wb xp-wb-close",
                      "aria-hidden": !0,
                      children: "✕",
                    }),
                  ],
                }),
              ],
            }),
            u.jsx("div", { className: "xp-body", children: e }),
          ],
        }),
  io = y.forwardRef(({ className: e, type: t, ...n }, r) =>
    u.jsx("input", {
      type: t,
      className: ht(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e,
      ),
      ref: r,
      ...n,
    }),
  );
io.displayName = "Input";
const kE = Pg(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  vt = y.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? _w : "button";
      return u.jsx(i, {
        className: ht(kE({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    },
  );
vt.displayName = "Button";
const Cv = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("textarea", {
    className: ht(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: n,
    ...t,
  }),
);
Cv.displayName = "Textarea";
var nd = "Progress",
  rd = 100,
  [SE, t4] = $o(nd),
  [CE, EE] = SE(nd),
  Ev = y.forwardRef((e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: s = NE,
      ...i
    } = e;
    (o || o === 0) && !sp(o) && console.error(_E(`${o}`, "Progress"));
    const a = sp(o) ? o : rd;
    r !== null && !ip(r, a) && console.error(jE(`${r}`, "Progress"));
    const l = ip(r, a) ? r : null,
      c = wa(l) ? s(l, a) : void 0;
    return u.jsx(CE, {
      scope: n,
      value: l,
      max: a,
      children: u.jsx(Re.div, {
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": wa(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": jv(l, a),
        "data-value": l ?? void 0,
        "data-max": a,
        ...i,
        ref: t,
      }),
    });
  });
Ev.displayName = nd;
var Nv = "ProgressIndicator",
  _v = y.forwardRef((e, t) => {
    const { __scopeProgress: n, ...r } = e,
      o = EE(Nv, n);
    return u.jsx(Re.div, {
      "data-state": jv(o.value, o.max),
      "data-value": o.value ?? void 0,
      "data-max": o.max,
      ...r,
      ref: t,
    });
  });
_v.displayName = Nv;
function NE(e, t) {
  return `${Math.round((e / t) * 100)}%`;
}
function jv(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function wa(e) {
  return typeof e == "number";
}
function sp(e) {
  return wa(e) && !isNaN(e) && e > 0;
}
function ip(e, t) {
  return wa(e) && !isNaN(e) && e <= t && e >= 0;
}
function _E(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${rd}\`.`;
}
function jE(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${rd} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Pv = Ev,
  PE = _v;
const Gr = y.forwardRef(({ className: e, value: t, ...n }, r) =>
  u.jsx(Pv, {
    ref: r,
    className: ht(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e,
    ),
    ...n,
    children: u.jsx(PE, {
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (t || 0)}%)` },
    }),
  }),
);
Gr.displayName = Pv.displayName;
function TE(e) {
  const t = y.useRef({ value: e, previous: e });
  return y.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var Ka = "Checkbox",
  [RE, n4] = $o(Ka),
  [LE, od] = RE(Ka);
function IE(e) {
  const {
      __scopeCheckbox: t,
      checked: n,
      children: r,
      defaultChecked: o,
      disabled: s,
      form: i,
      name: a,
      onCheckedChange: l,
      required: c,
      value: p = "on",
      internal_do_not_use_render: m,
    } = e,
    [g, d] = ag({ prop: n, defaultProp: o ?? !1, onChange: l, caller: Ka }),
    [w, x] = y.useState(null),
    [b, f] = y.useState(null),
    h = y.useRef(!1),
    v = w ? !!i || !!w.closest("form") : !0,
    k = {
      checked: g,
      disabled: s,
      setChecked: d,
      control: w,
      setControl: x,
      name: a,
      form: i,
      value: p,
      hasConsumerStoppedPropagationRef: h,
      required: c,
      defaultChecked: sr(o) ? !1 : o,
      isFormControl: v,
      bubbleInput: b,
      setBubbleInput: f,
    };
  return u.jsx(LE, { scope: t, ...k, children: OE(m) ? m(k) : r });
}
var Tv = "CheckboxTrigger",
  Rv = y.forwardRef(
    ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
      const {
          control: s,
          value: i,
          disabled: a,
          checked: l,
          required: c,
          setControl: p,
          setChecked: m,
          hasConsumerStoppedPropagationRef: g,
          isFormControl: d,
          bubbleInput: w,
        } = od(Tv, e),
        x = pt(o, p),
        b = y.useRef(l);
      return (
        y.useEffect(() => {
          const f = s == null ? void 0 : s.form;
          if (f) {
            const h = () => m(b.current);
            return (
              f.addEventListener("reset", h),
              () => f.removeEventListener("reset", h)
            );
          }
        }, [s, m]),
        u.jsx(Re.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": sr(l) ? "mixed" : l,
          "aria-required": c,
          "data-state": Mv(l),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...r,
          ref: x,
          onKeyDown: Ee(t, (f) => {
            f.key === "Enter" && f.preventDefault();
          }),
          onClick: Ee(n, (f) => {
            (m((h) => (sr(h) ? !0 : !h)),
              w &&
                d &&
                ((g.current = f.isPropagationStopped()),
                g.current || f.stopPropagation()));
          }),
        })
      );
    },
  );
Rv.displayName = Tv;
var sd = y.forwardRef((e, t) => {
  const {
    __scopeCheckbox: n,
    name: r,
    checked: o,
    defaultChecked: s,
    required: i,
    disabled: a,
    value: l,
    onCheckedChange: c,
    form: p,
    ...m
  } = e;
  return u.jsx(IE, {
    __scopeCheckbox: n,
    checked: o,
    defaultChecked: s,
    disabled: a,
    required: i,
    onCheckedChange: c,
    name: r,
    form: p,
    value: l,
    internal_do_not_use_render: ({ isFormControl: g }) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(Rv, { ...m, ref: t, __scopeCheckbox: n }),
          g && u.jsx(Av, { __scopeCheckbox: n }),
        ],
      }),
  });
});
sd.displayName = Ka;
var Lv = "CheckboxIndicator",
  Iv = y.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e,
      s = od(Lv, n);
    return u.jsx(Fa, {
      present: r || sr(s.checked) || s.checked === !0,
      children: u.jsx(Re.span, {
        "data-state": Mv(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
Iv.displayName = Lv;
var Ov = "CheckboxBubbleInput",
  Av = y.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    const {
        control: r,
        hasConsumerStoppedPropagationRef: o,
        checked: s,
        defaultChecked: i,
        required: a,
        disabled: l,
        name: c,
        value: p,
        form: m,
        bubbleInput: g,
        setBubbleInput: d,
      } = od(Ov, e),
      w = pt(n, d),
      x = TE(s),
      b = rv(r);
    y.useEffect(() => {
      const h = g;
      if (!h) return;
      const v = window.HTMLInputElement.prototype,
        S = Object.getOwnPropertyDescriptor(v, "checked").set,
        E = !o.current;
      if (x !== s && S) {
        const N = new Event("click", { bubbles: E });
        ((h.indeterminate = sr(s)),
          S.call(h, sr(s) ? !1 : s),
          h.dispatchEvent(N));
      }
    }, [g, x, s, o]);
    const f = y.useRef(sr(s) ? !1 : s);
    return u.jsx(Re.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: i ?? f.current,
      required: a,
      disabled: l,
      name: c,
      value: p,
      form: m,
      ...t,
      tabIndex: -1,
      ref: w,
      style: {
        ...t.style,
        ...b,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)",
      },
    });
  });
Av.displayName = Ov;
function OE(e) {
  return typeof e == "function";
}
function sr(e) {
  return e === "indeterminate";
}
function Mv(e) {
  return sr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const wr = y.forwardRef(({ className: e, ...t }, n) =>
  u.jsx(sd, {
    ref: n,
    className: ht(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ...t,
    children: u.jsx(Iv, {
      className: ht("flex items-center justify-center text-current"),
      children: u.jsx(Lg, { className: "h-4 w-4" }),
    }),
  }),
);
wr.displayName = sd.displayName;
const AE = /[a-z0-9]{15,32}:\d{1,15}/g,
  $v = () => {
    var pn, Vo;
    const [e, t] = U1(),
      n = e.get("tab") || "single",
      [r, o] = y.useState(""),
      [s, i] = y.useState(""),
      [a, l] = y.useState(!0),
      [c, p] = y.useState(!1),
      [m, g] = y.useState(!1),
      [d, w] = y.useState(null),
      [x, b] = y.useState(new Set()),
      [f, h] = y.useState(""),
      [v, k] = y.useState(0),
      [S, E] = y.useState(0),
      [N, j] = y.useState(0),
      [M, O] = y.useState(""),
      [D, F] = y.useState(null),
      [Y, $] = y.useState(new Set()),
      [X, Q] = y.useState(""),
      [V, _] = y.useState(null),
      [T, z] = y.useState(new Set()),
      [q, W] = y.useState(""),
      [Z, ne] = y.useState("search"),
      [ce, Ne] = y.useState(null),
      [oe, Nt] = y.useState(new Set()),
      [_t, an] = y.useState(!1),
      Ve = (C) => {
        t({ tab: C });
      },
      Wt = (C) => {
        const I = C.match(/level=([^&]+)/);
        return I ? I[1] : C.match(/^[a-zA-Z0-9_-]+:\d+$/) ? C : null;
      },
      qe = "https://ijmowerdujivlvqojroc.supabase.co",
      mr =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbW93ZXJkdWppdmx2cW9qcm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNjEzOTcsImV4cCI6MjA5MDgzNzM5N30.55W84VdH_BaYqdBMSole6LLNHETjvkV-iYad4bMJeP8",
      ln = { Authorization: `Bearer ${mr}`, apikey: mr },
      gr = async (C) => {
        const [I, U] = C.split(":");
        if (!I || !U) return null;
        const R = await fetch(
          `/api/grab-proxy?action=details&user_id=${I}&iteration=${U}`,
        );
        return R.ok ? await R.json() : null;
      },
      cn = async (C) => {
        const [I, U] = C.split(":");
        if (!I || !U) throw new Error("Invalid level ID");
        const R = await gr(C),
          J = (R == null ? void 0 : R.iteration) || "1",
          G = await fetch(
            `/api/grab-proxy?action=download&user_id=${I}&iteration=${U}&version=${J}`,
            );
        if (!G.ok) {
          const de = await G.json().catch(() => ({}));
          throw new Error(de.error || `Failed to download level ${C}`);
        }
        return { blob: await G.blob(), details: R };
      },
      Xe = (C, I) => {
        const U = URL.createObjectURL(C),
          R = document.createElement("a");
        ((R.href = U),
          (R.download = `1${I.replace(/[^a-zA-Z0-9]/g, "_")}.level`),
          document.body.appendChild(R),
          R.click(),
          document.body.removeChild(R),
          URL.revokeObjectURL(U));
      },
      Ht = async (C, I, U) => {
        const R = await fetch(
          `/api/grab-proxy?action=download&user_id=${C}&iteration=${I}&version=${U}`,
        );
        if (!R.ok) {
          const J = await R.json().catch(() => ({}));
          throw new Error(J.error || `Failed v${U}`);
        }
        return await R.blob();
      },
      Uo = async (C) => {
        const I = await fetch(
          `/api/grab-proxy?action=list&user_id=${C}`,
        );
        if (!I.ok) throw new Error("Failed to list creator levels");
        return await I.json();
      },
      un = (C) => {
        if (!C) return 1;
        const I = C.split(":"),
          U = parseInt(I[I.length - 1], 10);
        return Number.isFinite(U) && U > 0 ? U : 1;
      },
      Js = (C) => {
        const I = C.trim(),
          U = I.match(/user_id=([a-zA-Z0-9_-]+)/);
        if (U) return U[1];
        const R = I.match(/level=([a-zA-Z0-9_-]+):\d+/);
        return R
          ? R[1]
          : /^[a-zA-Z0-9_-]+:\d+$/.test(I)
            ? I.split(":")[0]
            : /^[a-zA-Z0-9_-]+$/.test(I)
              ? I
              : null;
      },
      Qt = async () => {
        const C = Wt(M.trim());
        if (!C) {
          le.error("Invalid level URL or ID");
          return;
        }
        (g(!0), F(null));
        try {
          const I = C.split(":")[0],
            R = (await Uo(I)).find((K) => K.identifier === C);
          if (!R) {
            le.error("Level not found for this creator");
            return;
          }
          const J = un(R.data_key);
          F({ levelId: C, latest: J, title: R.title || C });
          const G = new Set();
          for (let K = 1; K <= J; K++) G.add(K);
          $(G);
        } catch {
          le.error("Failed to load versions");
        } finally {
          g(!1);
        }
      },
      Ya = async () => {
        if (!D) return;
        const C = Array.from(Y).sort((J, G) => J - G);
        if (C.length === 0) {
          le.error("No versions selected");
          return;
        }
        const [I, U] = D.levelId.split(":");
        (p(!0), E(C.length), j(0), k(0));
        let R = 0;
        for (let J = 0; J < C.length; J++) {
          const G = C[J];
          h(`${D.title} v${G}`);
          try {
            const K = await Ht(I, U, G);
            (Xe(K, `${D.title}__v${G}`), R++);
          } catch {
            le.error(`Failed v${G}`);
          }
          (j(J + 1),
            k(((J + 1) / C.length) * 100),
            await new Promise((K) => setTimeout(K, 200)));
        }
        (h("Done!"),
          le.success(`Downloaded ${R} version${R !== 1 ? "s" : ""}`),
          setTimeout(() => {
            (p(!1), h(""), k(0), E(0), j(0), F(null), O(""));
          }, 900));
      },
      ei = async () => {
        const C = Js(X);
        if (!C) {
          le.error("Invalid user ID or URL");
          return;
        }
        (g(!0), _(null));
        try {
          const I = await Uo(C);
          if (!I.length) {
            le.error("No levels found for this creator");
            return;
          }
          const U = I.map((R) => ({
            identifier: R.identifier,
            title: R.title || R.identifier,
            version: un(R.data_key),
            complexity: R.complexity,
            hidden: !1,
          }));
          (_(U), z(new Set(U.map((R) => R.identifier))));
        } catch {
          le.error("Failed to load creator's levels");
        } finally {
          g(!1);
        }
      },
      Ze = async () => {
        if (!V) return;
        const C = V.filter((U) => T.has(U.identifier));
        if (!C.length) {
          le.error("No levels selected");
          return;
        }
        (p(!0), E(C.length), j(0), k(0));
        let I = 0;
        for (let U = 0; U < C.length; U++) {
          const R = C[U],
            [J, G] = R.identifier.split(":");
          h(`${U + 1}/${C.length}: ${R.title}`);
          try {
            const K = await Ht(J, G, R.version);
            (Xe(K, R.title), I++);
          } catch {
            le.error(`Failed: ${R.title}`);
          }
          (j(U + 1),
            k(((U + 1) / C.length) * 100),
            await new Promise((K) => setTimeout(K, 200)));
        }
        (h("Done!"),
          le.success(`Downloaded ${I} level${I !== 1 ? "s" : ""}`),
          setTimeout(() => {
            (p(!1), h(""), k(0), E(0), j(0), _(null), Q(""));
          }, 900));
      },
      dn = async () => {
        const C = q.trim();
        if (Z === "search" && !C) {
          le.error("Enter a search term");
          return;
        }
        (g(!0), Ne(null));
        try {
          const I = new URLSearchParams({
            action: "list",
            type: Z,
            max_format_version: "100",
            limit: "60",
          });
          Z === "search" && I.set("search_term", C);
          const U = await fetch(
            `/api/grab-proxy?${I.toString()}`,
            );
          if (!U.ok) throw new Error("Search failed");
          const R = await U.json();
          if (!Array.isArray(R) || R.length === 0) {
            le.error("No levels found");
            return;
          }
          const J = R.map((G) => {
            var K, de;
            return {
              identifier: G.identifier,
              title: G.title || G.identifier,
              version: un(G.data_key),
              complexity: G.complexity,
              creators: G.creators,
              difficulty:
                (K = G.statistics) == null ? void 0 : K.difficulty_string,
              plays: (de = G.statistics) == null ? void 0 : de.total_played,
            };
          });
          (Ne(J), Nt(new Set()));
        } catch {
          le.error("Search failed");
        } finally {
          g(!1);
        }
      },
      qa = async () => {
        if (!ce) return;
        const C = ce.filter((R) => oe.has(R.identifier));
        if (!C.length) {
          le.error("No levels selected");
          return;
        }
        (p(!0), E(C.length), j(0), k(0));
        let I = 0;
        const U = new Set();
        for (let R = 0; R < C.length; R++) {
          const J = C[R],
            [G, K] = J.identifier.split(":");
          h(`${R + 1}/${C.length}: ${J.title}`);
          try {
            const de = await Ht(G, K, J.version);
            if ((Xe(de, J.title), U.add(J.identifier), I++, _t)) {
              const Tn = await fn(de, J.identifier);
              for (const H of Tn)
                if (!U.has(H)) {
                  U.add(H);
                  try {
                    const se = await cn(H);
                    (Xe(
                      se.blob,
                      `${jt(se.details, H)}__sub_${H.replace(":", "_")}`,
                    ),
                      I++);
                  } catch {}
                }
            }
          } catch {
            le.error(`Failed: ${J.title}`);
          }
          (j(R + 1),
            k(((R + 1) / C.length) * 100),
            await new Promise((de) => setTimeout(de, 200)));
        }
        (h("Done!"),
          le.success(`Downloaded ${I} file${I !== 1 ? "s" : ""}`),
          setTimeout(() => {
            (p(!1), h(""), k(0), E(0), j(0));
          }, 900));
      },
      jt = (C, I) => (C != null && C.title && C.title !== "null" ? C.title : I),
      fn = async (C, I) => {
        const U = new Uint8Array(await C.arrayBuffer());
        let R = "";
        for (let G = 0; G < U.length; G++) {
          const K = U[G];
          R += K >= 32 && K < 127 ? String.fromCharCode(K) : " ";
        }
        const J = new Set();
        for (const G of R.matchAll(AE)) G[0] !== I && J.add(G[0]);
        return Array.from(J);
      },
      ti = async () => {
        const C = Wt(r.trim());
        if (!C) {
          le.error("Invalid level URL or ID format");
          return;
        }
        (g(!0), w(null));
        try {
          const { blob: I, details: U } = await cn(C),
            R = U || { title: C },
            J = await fn(I, C),
            G = await Promise.all(
              J.slice(0, 50).map(async (K) => {
                const de = await gr(K).catch(() => null);
                return { id: K, title: jt(de, K) };
              }),
            );
          (w({ rootId: C, details: R, blob: I, subLevels: G }),
            b(new Set(G.map((K) => K.id))));
        } catch {
          le.error("Failed to load preview. Check the URL and try again.");
        } finally {
          g(!1);
        }
      },
      ni = async () => {
        if (!d) return;
        p(!0);
        const C = new Set([d.rootId]),
          I = [];
        let U = 0,
          R = 0;
        const J = a ? d.subLevels.filter((K) => x.has(K.id)) : [],
          G = 1 + J.length;
        (E(G), j(0), k(0));
        try {
          (h(`Saving ${jt(d.details, d.rootId)}`),
            Xe(d.blob, jt(d.details, d.rootId)),
            U++,
            R++,
            j(R),
            k((R / G) * 100));
        } catch {
          le.error("Failed to save root level");
        }
        if (J.length > 0) {
          for (const K of J)
            I.push({
              id: K.id,
              depth: 1,
              parentTitle: jt(d.details, d.rootId),
            });
          for (; I.length > 0;) {
            const { id: K, depth: de, parentTitle: Tn } = I.shift();
            if (C.has(K)) continue;
            C.add(K);
            const H = Math.max(G, C.size + I.length);
            (E(H), h(`Sub-level (${Tn}): ${K}`));
            try {
              const { blob: se, details: fe } = await cn(K),
                Je = jt(fe, K);
              if ((Xe(se, `${Je}__sub_${K.replace(":", "_")}`), U++, de < 3)) {
                const it = await fn(se, K);
                for (const Pt of it)
                  C.has(Pt) ||
                    I.push({ id: Pt, depth: de + 1, parentTitle: Je });
              }
            } catch {
              le.error(`Failed: ${K}`);
            }
            (R++,
              j(R),
              k((R / Math.max(H, 1)) * 100),
              await new Promise((se) => setTimeout(se, 200)));
          }
        }
        (k(100),
          h("Done!"),
          le.success(`Installed ${U} file${U !== 1 ? "s" : ""}`),
          setTimeout(() => {
            (p(!1), h(""), k(0), E(0), j(0), w(null), o(""));
          }, 900));
      },
      Bo = async () => {
        const I = s
          .split(
            `
`,
          )
          .map((R) => R.trim())
          .filter(Boolean)
          .map(Wt)
          .filter(Boolean);
        if (I.length === 0) {
          le.error("No valid level URLs found");
          return;
        }
        (p(!0), E(I.length), j(0));
        let U = 0;
        for (let R = 0; R < I.length; R++) {
          (h(`Level ${R + 1}/${I.length}: ${I[R]}`), k((R / I.length) * 100));
          try {
            const { blob: J, details: G } = await cn(I[R]);
            if ((Xe(J, jt(G, I[R])), U++, a)) {
              const K = await fn(J, I[R]);
              for (const de of K)
                try {
                  const Tn = await cn(de);
                  (Xe(
                    Tn.blob,
                    `${jt(Tn.details, de)}__sub_${de.replace(":", "_")}`,
                  ),
                    U++);
                } catch {}
            }
            (j(R + 1), k(((R + 1) / I.length) * 100));
          } catch {
            le.error(`Failed: ${I[R]}`);
          }
        }
        (k(100),
          h("All done!"),
          le.success(`Downloaded ${U} file${U !== 1 ? "s" : ""}`),
          setTimeout(() => {
            (p(!1), h(""), k(0), E(0), j(0));
          }, 1e3));
      };
    return u.jsx(Xs, {
      children: u.jsxs("div", {
        className: "flex-1 flex flex-col items-center px-4 py-8",
        children: [
          u.jsxs("div", {
            className: "flex rounded-lg overflow-hidden shadow-md mb-6",
            children: [
              u.jsx("button", {
                onClick: () => Ve("single"),
                className: `px-6 py-2.5 font-semibold text-sm transition-colors ${n === "single" ? "bg-primary text-primary-foreground" : "bg-card/60 text-card-foreground hover:bg-card/80"}`,
                children: "Single Download",
              }),
              u.jsx("button", {
                onClick: () => Ve("multi"),
                className: `px-6 py-2.5 font-semibold text-sm transition-colors ${n === "multi" ? "bg-primary text-primary-foreground" : "bg-card/60 text-card-foreground hover:bg-card/80"}`,
                children: "Multi Download",
              }),
              u.jsx("button", {
                onClick: () => Ve("versions"),
                className: `px-6 py-2.5 font-semibold text-sm transition-colors ${n === "versions" ? "bg-primary text-primary-foreground" : "bg-card/60 text-card-foreground hover:bg-card/80"}`,
                children: "Versions",
              }),
              u.jsx("button", {
                onClick: () => Ve("creator"),
                className: `px-6 py-2.5 font-semibold text-sm transition-colors ${n === "creator" ? "bg-primary text-primary-foreground" : "bg-card/60 text-card-foreground hover:bg-card/80"}`,
                children: "Creator",
              }),
              u.jsx("button", {
                onClick: () => Ve("search"),
                className: `px-6 py-2.5 font-semibold text-sm transition-colors ${n === "search" ? "bg-primary text-primary-foreground" : "bg-card/60 text-card-foreground hover:bg-card/80"}`,
                children: "Search",
              }),
            ],
          }),
          u.jsxs(Zs, {
            className: "w-full max-w-lg",
            children: [
              n === "single" &&
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      className: "block text-card-foreground font-medium mb-2",
                      children: "Level URL or ID",
                    }),
                    u.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        u.jsx(io, {
                          placeholder:
                            "https://grabvr.quest/levels/viewer/?level=...",
                          value: r,
                          onChange: (C) => o(C.target.value),
                          className:
                            "bg-input text-card-foreground border-border placeholder:text-muted-foreground",
                          onKeyDown: (C) => C.key === "Enter" && !d && ti(),
                          disabled: m || c || !!d,
                        }),
                        u.jsx(vt, {
                          onClick: ti,
                          disabled: m || c || !!d,
                          className:
                            "bg-primary text-primary-foreground hover:brightness-110 px-3",
                          children: m
                            ? u.jsx(br, { className: "w-4 h-4 animate-spin" })
                            : u.jsx(is, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    d &&
                      !c &&
                      u.jsxs("div", {
                        className:
                          "mt-4 rounded-lg border border-border bg-card/40 p-4 space-y-3",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-start justify-between gap-2",
                            children: [
                              u.jsxs("div", {
                                children: [
                                  u.jsx("h3", {
                                    className:
                                      "font-bold text-card-foreground text-lg leading-tight",
                                    children: jt(d.details, d.rootId),
                                  }),
                                  d.details.description &&
                                    u.jsx("p", {
                                      className:
                                        "text-xs text-muted-foreground mt-1 line-clamp-2",
                                      children: d.details.description,
                                    }),
                                ],
                              }),
                              u.jsx("button", {
                                onClick: () => w(null),
                                className:
                                  "text-muted-foreground hover:text-card-foreground",
                                "aria-label": "Cancel preview",
                                children: u.jsx(Er, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "grid grid-cols-3 gap-2 text-xs",
                            children: [
                              u.jsxs("div", {
                                className:
                                  "flex items-center gap-1.5 text-card-foreground",
                                children: [
                                  u.jsx(Og, {
                                    className:
                                      "w-3.5 h-3.5 text-muted-foreground",
                                  }),
                                  u.jsx("span", {
                                    className: "truncate",
                                    title:
                                      ((pn = d.details.creators) == null
                                        ? void 0
                                        : pn.join(", ")) || "Unknown",
                                    children:
                                      ((Vo = d.details.creators) == null
                                        ? void 0
                                        : Vo.join(", ")) || "Unknown",
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                className:
                                  "flex items-center gap-1.5 text-card-foreground",
                                children: [
                                  u.jsx(Sb, {
                                    className:
                                      "w-3.5 h-3.5 text-muted-foreground",
                                  }),
                                  u.jsxs("span", {
                                    children: [
                                      "Complexity ",
                                      d.details.complexity ?? "—",
                                    ],
                                  }),
                                ],
                              }),
                              u.jsxs("div", {
                                className:
                                  "flex items-center gap-1.5 text-card-foreground",
                                children: [
                                  u.jsx(Wu, {
                                    className:
                                      "w-3.5 h-3.5 text-muted-foreground",
                                  }),
                                  u.jsxs("span", {
                                    children: [
                                      d.subLevels.length,
                                      " sub-level",
                                      d.subLevels.length !== 1 ? "s" : "",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d.subLevels.length > 0 &&
                            a &&
                            u.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                u.jsxs("div", {
                                  className:
                                    "flex items-center justify-between text-xs",
                                  children: [
                                    u.jsxs("span", {
                                      className: "text-muted-foreground",
                                      children: [
                                        x.size,
                                        "/",
                                        d.subLevels.length,
                                        " selected",
                                      ],
                                    }),
                                    u.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () =>
                                            b(
                                              new Set(
                                                d.subLevels.map((C) => C.id),
                                              ),
                                            ),
                                          className:
                                            "text-primary hover:underline",
                                          children: "All",
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => b(new Set()),
                                          className:
                                            "text-primary hover:underline",
                                          children: "None",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                u.jsx("div", {
                                  className:
                                    "max-h-32 overflow-y-auto rounded border border-border/60 bg-background/40 p-2",
                                  children: u.jsx("ul", {
                                    className:
                                      "text-xs text-card-foreground space-y-1",
                                    children: d.subLevels.map((C) =>
                                      u.jsxs(
                                        "li",
                                        {
                                          className: "flex items-center gap-2",
                                          children: [
                                            u.jsx(wr, {
                                              id: `sub-${C.id}`,
                                              checked: x.has(C.id),
                                              onCheckedChange: (I) => {
                                                b((U) => {
                                                  const R = new Set(U);
                                                  return (
                                                    I === !0
                                                      ? R.add(C.id)
                                                      : R.delete(C.id),
                                                    R
                                                  );
                                                });
                                              },
                                            }),
                                            u.jsx("label", {
                                              htmlFor: `sub-${C.id}`,
                                              className:
                                                "truncate cursor-pointer flex-1",
                                              title: C.id,
                                              children: C.title,
                                            }),
                                          ],
                                        },
                                        C.id,
                                      ),
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          u.jsxs(vt, {
                            onClick: ni,
                            className:
                              "w-full bg-primary text-primary-foreground hover:brightness-110 font-semibold",
                            children: [
                              u.jsx(Un, { className: "w-4 h-4 mr-2" }),
                              "Install (",
                              1 + (a ? x.size : 0),
                              " file",
                              1 + (a ? x.size : 0) !== 1 ? "s" : "",
                              ")",
                            ],
                          }),
                        ],
                      }),
                    c &&
                      u.jsxs("div", {
                        className: "mt-3 space-y-1",
                        children: [
                          u.jsx(Gr, { value: v, className: "h-2" }),
                          u.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: [f, " ", S > 0 && `(${N}/${S})`],
                          }),
                        ],
                      }),
                    !d &&
                      !c &&
                      u.jsxs("div", {
                        className:
                          "mt-3 text-muted-foreground text-xs space-y-1",
                        children: [
                          u.jsx("p", { children: "Accepted formats:" }),
                          u.jsx("p", {
                            children:
                              "→ https://grabvr.quest/levels/viewer/?level=id:iteration",
                          }),
                          u.jsx("p", { children: "→ user_id:iteration" }),
                        ],
                      }),
                  ],
                }),
              n === "multi" &&
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      className: "block text-card-foreground font-medium mb-2",
                      children: "Paste level URLs (one per line)",
                    }),
                    u.jsx(Cv, {
                      placeholder: `https://grabvr.quest/levels/viewer/?level=...
https://grabvr.quest/levels/viewer/?level=...
abc123:1234567890`,
                      value: s,
                      onChange: (C) => i(C.target.value),
                      rows: 5,
                      className:
                        "bg-input text-card-foreground border-border placeholder:text-muted-foreground resize-y",
                    }),
                    u.jsxs("p", {
                      className: "mt-2 text-destructive text-xs font-bold",
                      children: [
                        "DO NOT STEAL MAPS!",
                        " ",
                        u.jsx("span", {
                          className: "font-normal text-muted-foreground",
                          children:
                            "Only download levels you have permission to use.",
                        }),
                      ],
                    }),
                    u.jsxs(vt, {
                      onClick: Bo,
                      disabled: c,
                      className:
                        "w-full mt-3 bg-primary text-primary-foreground hover:brightness-110 font-semibold",
                      children: [
                        c
                          ? u.jsx(br, {
                              className: "w-4 h-4 mr-2 animate-spin",
                            })
                          : u.jsx(Un, { className: "w-4 h-4 mr-2" }),
                        c ? `${N}/${S} downloaded` : "Parse Links",
                      ],
                    }),
                    c &&
                      u.jsxs("div", {
                        className: "mt-3 space-y-1",
                        children: [
                          u.jsx(Gr, { value: v, className: "h-2" }),
                          u.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: f,
                          }),
                        ],
                      }),
                  ],
                }),
              n === "versions" &&
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      className: "block text-card-foreground font-medium mb-2",
                      children: "Level URL or ID",
                    }),
                    u.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        u.jsx(io, {
                          placeholder:
                            "https://grabvr.quest/levels/viewer/?level=...",
                          value: M,
                          onChange: (C) => O(C.target.value),
                          className:
                            "bg-input text-card-foreground border-border placeholder:text-muted-foreground",
                          onKeyDown: (C) => C.key === "Enter" && !D && Qt(),
                          disabled: m || c || !!D,
                        }),
                        u.jsx(vt, {
                          onClick: Qt,
                          disabled: m || c || !!D,
                          className:
                            "bg-primary text-primary-foreground hover:brightness-110 px-3",
                          children: m
                            ? u.jsx(br, { className: "w-4 h-4 animate-spin" })
                            : u.jsx(is, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    D &&
                      !c &&
                      u.jsxs("div", {
                        className:
                          "mt-4 rounded-lg border border-border bg-card/40 p-4 space-y-3",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-start justify-between gap-2",
                            children: [
                              u.jsx("h3", {
                                className:
                                  "font-bold text-card-foreground text-lg leading-tight",
                                children: D.title,
                              }),
                              u.jsx("button", {
                                onClick: () => F(null),
                                className:
                                  "text-muted-foreground hover:text-card-foreground",
                                "aria-label": "Cancel",
                                children: u.jsx(Er, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                          u.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: [
                              D.latest,
                              " version",
                              D.latest !== 1 ? "s" : "",
                              " available",
                            ],
                          }),
                          u.jsxs("div", {
                            className:
                              "flex items-center justify-between text-xs",
                            children: [
                              u.jsxs("span", {
                                className: "text-muted-foreground",
                                children: [Y.size, "/", D.latest, " selected"],
                              }),
                              u.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      const C = new Set();
                                      for (let I = 1; I <= D.latest; I++)
                                        C.add(I);
                                      $(C);
                                    },
                                    className: "text-primary hover:underline",
                                    children: "All",
                                  }),
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: () => $(new Set()),
                                    className: "text-primary hover:underline",
                                    children: "None",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsx("div", {
                            className:
                              "max-h-48 overflow-y-auto rounded border border-border/60 bg-background/40 p-2",
                            children: u.jsx("ul", {
                              className:
                                "text-xs text-card-foreground space-y-1",
                              children: Array.from(
                                { length: D.latest },
                                (C, I) => D.latest - I,
                              ).map((C) =>
                                u.jsxs(
                                  "li",
                                  {
                                    className: "flex items-center gap-2",
                                    children: [
                                      u.jsx(wr, {
                                        id: `ver-${C}`,
                                        checked: Y.has(C),
                                        onCheckedChange: (I) => {
                                          $((U) => {
                                            const R = new Set(U);
                                            return (
                                              I === !0 ? R.add(C) : R.delete(C),
                                              R
                                            );
                                          });
                                        },
                                      }),
                                      u.jsxs("label", {
                                        htmlFor: `ver-${C}`,
                                        className: "cursor-pointer flex-1",
                                        children: [
                                          "Version ",
                                          C,
                                          " ",
                                          C === D.latest &&
                                            u.jsx("span", {
                                              className:
                                                "text-muted-foreground",
                                              children: "(latest)",
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  C,
                                ),
                              ),
                            }),
                          }),
                          u.jsxs(vt, {
                            onClick: Ya,
                            className:
                              "w-full bg-primary text-primary-foreground hover:brightness-110 font-semibold",
                            children: [
                              u.jsx(Un, { className: "w-4 h-4 mr-2" }),
                              "Install (",
                              Y.size,
                              " version",
                              Y.size !== 1 ? "s" : "",
                              ")",
                            ],
                          }),
                        ],
                      }),
                    c &&
                      u.jsxs("div", {
                        className: "mt-3 space-y-1",
                        children: [
                          u.jsx(Gr, { value: v, className: "h-2" }),
                          u.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: [f, " ", S > 0 && `(${N}/${S})`],
                          }),
                        ],
                      }),
                  ],
                }),
              n === "creator" &&
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      className: "block text-card-foreground font-medium mb-2",
                      children: "Creator user ID, level URL, or level ID",
                    }),
                    u.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        u.jsx(io, {
                          placeholder: "user_id or level URL",
                          value: X,
                          onChange: (C) => Q(C.target.value),
                          className:
                            "bg-input text-card-foreground border-border placeholder:text-muted-foreground",
                          onKeyDown: (C) => C.key === "Enter" && !V && ei(),
                          disabled: m || c || !!V,
                        }),
                        u.jsx(vt, {
                          onClick: ei,
                          disabled: m || c || !!V,
                          className:
                            "bg-primary text-primary-foreground hover:brightness-110 px-3",
                          children: m
                            ? u.jsx(br, { className: "w-4 h-4 animate-spin" })
                            : u.jsx(is, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    V &&
                      !c &&
                      u.jsxs("div", {
                        className:
                          "mt-4 rounded-lg border border-border bg-card/40 p-4 space-y-3",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-start justify-between gap-2",
                            children: [
                              u.jsxs("h3", {
                                className:
                                  "font-bold text-card-foreground text-lg leading-tight",
                                children: [
                                  V.length,
                                  " level",
                                  V.length !== 1 ? "s" : "",
                                  " found",
                                ],
                              }),
                              u.jsx("button", {
                                onClick: () => _(null),
                                className:
                                  "text-muted-foreground hover:text-card-foreground",
                                "aria-label": "Cancel",
                                children: u.jsx(Er, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className:
                              "flex items-center justify-between text-xs",
                            children: [
                              u.jsxs("span", {
                                className: "text-muted-foreground",
                                children: [T.size, "/", V.length, " selected"],
                              }),
                              u.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: () =>
                                      z(new Set(V.map((C) => C.identifier))),
                                    className: "text-primary hover:underline",
                                    children: "All",
                                  }),
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: () => z(new Set()),
                                    className: "text-primary hover:underline",
                                    children: "None",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsx("div", {
                            className:
                              "max-h-64 overflow-y-auto rounded border border-border/60 bg-background/40 p-2",
                            children: u.jsx("ul", {
                              className:
                                "text-xs text-card-foreground space-y-1",
                              children: V.map((C) =>
                                u.jsxs(
                                  "li",
                                  {
                                    className: "flex items-center gap-2",
                                    children: [
                                      u.jsx(wr, {
                                        id: `lvl-${C.identifier}`,
                                        checked: T.has(C.identifier),
                                        onCheckedChange: (I) => {
                                          z((U) => {
                                            const R = new Set(U);
                                            return (
                                              I === !0
                                                ? R.add(C.identifier)
                                                : R.delete(C.identifier),
                                              R
                                            );
                                          });
                                        },
                                      }),
                                      u.jsxs("label", {
                                        htmlFor: `lvl-${C.identifier}`,
                                        className:
                                          "truncate cursor-pointer flex-1",
                                        title: C.identifier,
                                        children: [
                                          C.title,
                                          C.hidden &&
                                            u.jsx("span", {
                                              className:
                                                "ml-1 rounded bg-destructive/20 px-1 text-[10px] uppercase tracking-wide text-destructive",
                                              children: "hidden",
                                            }),
                                          C.complexity !== void 0 &&
                                            u.jsxs("span", {
                                              className:
                                                "text-muted-foreground",
                                              children: [" · ", C.complexity],
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  C.identifier,
                                ),
                              ),
                            }),
                          }),
                          u.jsxs(vt, {
                            onClick: Ze,
                            className:
                              "w-full bg-primary text-primary-foreground hover:brightness-110 font-semibold",
                            children: [
                              u.jsx(Un, { className: "w-4 h-4 mr-2" }),
                              "Install (",
                              T.size,
                              " level",
                              T.size !== 1 ? "s" : "",
                              ")",
                            ],
                          }),
                        ],
                      }),
                    c &&
                      u.jsxs("div", {
                        className: "mt-3 space-y-1",
                        children: [
                          u.jsx(Gr, { value: v, className: "h-2" }),
                          u.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: [f, " ", S > 0 && `(${N}/${S})`],
                          }),
                        ],
                      }),
                  ],
                }),
              n === "search" &&
                u.jsxs("div", {
                  children: [
                    u.jsx("label", {
                      className: "block text-card-foreground font-medium mb-2",
                      children: "Search levels (by title)",
                    }),
                    u.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        u.jsxs("select", {
                          value: Z,
                          onChange: (C) => ne(C.target.value),
                          disabled: m || c,
                          className:
                            "rounded-md bg-input text-card-foreground border border-border px-2 text-sm",
                          children: [
                            u.jsx("option", {
                              value: "search",
                              children: "Search",
                            }),
                            u.jsx("option", {
                              value: "newest",
                              children: "Newest",
                            }),
                            u.jsx("option", {
                              value: "popular",
                              children: "Popular",
                            }),
                          ],
                        }),
                        u.jsx(io, {
                          placeholder:
                            Z === "search"
                              ? "Level title…"
                              : "(ignored for browse)",
                          value: q,
                          onChange: (C) => W(C.target.value),
                          className:
                            "bg-input text-card-foreground border-border placeholder:text-muted-foreground",
                          onKeyDown: (C) => C.key === "Enter" && dn(),
                          disabled: m || c,
                        }),
                        u.jsx(vt, {
                          onClick: dn,
                          disabled: m || c,
                          className:
                            "bg-primary text-primary-foreground hover:brightness-110 px-3",
                          children: m
                            ? u.jsx(br, { className: "w-4 h-4 animate-spin" })
                            : u.jsx(is, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    ce &&
                      !c &&
                      u.jsxs("div", {
                        className:
                          "mt-4 rounded-lg border border-border bg-card/40 p-4 space-y-3",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-start justify-between gap-2",
                            children: [
                              u.jsxs("h3", {
                                className:
                                  "font-bold text-card-foreground text-lg leading-tight",
                                children: [
                                  ce.length,
                                  " result",
                                  ce.length !== 1 ? "s" : "",
                                ],
                              }),
                              u.jsx("button", {
                                onClick: () => Ne(null),
                                className:
                                  "text-muted-foreground hover:text-card-foreground",
                                "aria-label": "Clear",
                                children: u.jsx(Er, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className:
                              "flex items-center justify-between text-xs",
                            children: [
                              u.jsxs("span", {
                                className: "text-muted-foreground",
                                children: [
                                  oe.size,
                                  "/",
                                  ce.length,
                                  " selected",
                                ],
                              }),
                              u.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: () =>
                                      Nt(new Set(ce.map((C) => C.identifier))),
                                    className: "text-primary hover:underline",
                                    children: "All",
                                  }),
                                  u.jsx("button", {
                                    type: "button",
                                    onClick: () => Nt(new Set()),
                                    className: "text-primary hover:underline",
                                    children: "None",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsx("div", {
                            className:
                              "max-h-72 overflow-y-auto rounded border border-border/60 bg-background/40 p-2",
                            children: u.jsx("ul", {
                              className:
                                "text-xs text-card-foreground space-y-1",
                              children: ce.map((C) => {
                                var I, U;
                                return u.jsxs(
                                  "li",
                                  {
                                    className: "flex items-start gap-2",
                                    children: [
                                      u.jsx(wr, {
                                        id: `s-${C.identifier}`,
                                        checked: oe.has(C.identifier),
                                        onCheckedChange: (R) => {
                                          Nt((J) => {
                                            const G = new Set(J);
                                            return (
                                              R === !0
                                                ? G.add(C.identifier)
                                                : G.delete(C.identifier),
                                              G
                                            );
                                          });
                                        },
                                        className: "mt-0.5",
                                      }),
                                      u.jsxs("label", {
                                        htmlFor: `s-${C.identifier}`,
                                        className:
                                          "cursor-pointer flex-1 min-w-0",
                                        title: C.identifier,
                                        children: [
                                          u.jsx("div", {
                                            className: "truncate font-medium",
                                            children: C.title,
                                          }),
                                          u.jsxs("div", {
                                            className:
                                              "truncate text-muted-foreground text-[10px]",
                                            children: [
                                              ((I = C.creators) == null
                                                ? void 0
                                                : I[0]) &&
                                                u.jsxs(u.Fragment, {
                                                  children: [
                                                    "by ",
                                                    C.creators[0].slice(0, 30),
                                                    " · ",
                                                  ],
                                                }),
                                              C.difficulty &&
                                                u.jsxs(u.Fragment, {
                                                  children: [
                                                    C.difficulty,
                                                    " · ",
                                                  ],
                                                }),
                                              C.complexity !== void 0 &&
                                                u.jsxs(u.Fragment, {
                                                  children: [
                                                    "cx ",
                                                    C.complexity,
                                                    " · ",
                                                  ],
                                                }),
                                              C.plays !== void 0 &&
                                                u.jsxs(u.Fragment, {
                                                  children: [C.plays, " plays"],
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      ((U = C.creators) == null
                                        ? void 0
                                        : U[0]) &&
                                        u.jsx("button", {
                                          type: "button",
                                          title:
                                            "Load all levels by this creator",
                                          onClick: () => {
                                            (Q(C.identifier), Ve("creator"));
                                          },
                                          className:
                                            "text-[10px] text-primary hover:underline shrink-0",
                                          children: "creator",
                                        }),
                                    ],
                                  },
                                  C.identifier,
                                );
                              }),
                            }),
                          }),
                          u.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              u.jsx(wr, {
                                id: "search-subs",
                                checked: _t,
                                onCheckedChange: (C) => an(C === !0),
                              }),
                              u.jsx("label", {
                                htmlFor: "search-subs",
                                className:
                                  "text-xs text-card-foreground cursor-pointer",
                                children: "Also download sub-levels",
                              }),
                            ],
                          }),
                          u.jsxs(vt, {
                            onClick: qa,
                            className:
                              "w-full bg-primary text-primary-foreground hover:brightness-110 font-semibold",
                            children: [
                              u.jsx(Un, { className: "w-4 h-4 mr-2" }),
                              "Install (",
                              oe.size,
                              " level",
                              oe.size !== 1 ? "s" : "",
                              ")",
                            ],
                          }),
                        ],
                      }),
                    c &&
                      u.jsxs("div", {
                        className: "mt-3 space-y-1",
                        children: [
                          u.jsx(Gr, { value: v, className: "h-2" }),
                          u.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: [f, " ", S > 0 && `(${N}/${S})`],
                          }),
                        ],
                      }),
                  ],
                }),
              (n === "single" || n === "multi") &&
                u.jsxs("div", {
                  className:
                    "mt-4 flex items-center gap-2 pt-3 border-t border-border/50",
                  children: [
                    u.jsx(wr, {
                      id: "include-sub",
                      checked: a,
                      onCheckedChange: (C) => l(C === !0),
                    }),
                    u.jsx("label", {
                      htmlFor: "include-sub",
                      className:
                        "text-sm text-card-foreground cursor-pointer select-none",
                      children:
                        "Also download sub-levels (referenced inside the level)",
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    });
  },
  ME = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $v },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  zv = () =>
    u.jsx(Xs, {
      children: u.jsxs("div", {
        className: "flex-1 flex flex-col items-center px-4 py-8",
        children: [
          u.jsx("h1", {
            className: "text-3xl font-bold text-foreground mb-6",
            children: "How to Use Grab Level Grabber",
          }),
          u.jsxs(Zs, {
            className: "w-full max-w-2xl",
            children: [
              u.jsx("h2", {
                className: "text-xl font-semibold text-card-foreground mb-3",
                children: "Useful Links",
              }),
              u.jsxs("ul", {
                className:
                  "list-disc list-inside space-y-2 text-card-foreground",
                children: [
                  u.jsxs("li", {
                    children: [
                      u.jsx("a", {
                        href: "https://grabvr.quest/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-primary hover:underline",
                        children: "GRAB VR Website",
                      }),
                      " ",
                      "— Browse and find levels",
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("a", {
                        href: "https://apkpure.com/cx-file-explorer-2025/com.cxinventor.file.explorer",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-primary hover:underline",
                        children: "CX File Explorer",
                      }),
                      " ",
                      "— File manager for Quest",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  $E = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: zv },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Dv = "https://ijmowerdujivlvqojroc.supabase.co",
  Fv =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbW93ZXJkdWppdmx2cW9qcm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNjEzOTcsImV4cCI6MjA5MDgzNzM5N30.55W84VdH_BaYqdBMSole6LLNHETjvkV-iYad4bMJeP8",
  zE = `(function(){
  const SUPABASE='${Dv}/functions/v1';
  const APIKEY='${Fv}';
  const m=location.search.match(/[?&]level=([^&]+)/);
  if(!m){alert('Go to a GrabVR level page first!');return;}
  const id=decodeURIComponent(m[1]);
  const [u,i]=id.split(':');
  if(!u||!i){alert('Could not parse level ID');return;}
  document.getElementById('glg-steal-ui')?.remove();
  const style=document.createElement('style');
  style.textContent='@keyframes glg-spin{to{transform:rotate(360deg)}}@keyframes glg-pulse{0%,100%{box-shadow:0 0 0 0 rgba(168,85,247,.7),0 10px 40px -5px rgba(168,85,247,.6)}50%{box-shadow:0 0 0 14px rgba(168,85,247,0),0 10px 40px -5px rgba(168,85,247,.6)}}@keyframes glg-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}@keyframes glg-in{from{opacity:0;transform:translateY(20px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes glg-bar{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}';
  document.head.appendChild(style);
  const wrap=document.createElement('div');
  wrap.id='glg-steal-ui';
  wrap.style.cssText='position:fixed;bottom:24px;right:24px;z-index:2147483647;font-family:ui-sans-serif,system-ui,sans-serif;animation:glg-in .4s cubic-bezier(.2,.9,.3,1.2) both';
  const card=document.createElement('div');
  card.style.cssText='min-width:280px;padding:16px;border-radius:18px;background:linear-gradient(135deg,rgba(30,15,50,.92),rgba(20,10,35,.92));backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(168,85,247,.35);box-shadow:0 20px 60px -10px rgba(124,58,237,.55),inset 0 1px 0 rgba(255,255,255,.08);color:#f5f3ff;position:relative';
  const header=document.createElement('div');
  header.style.cssText='display:flex;align-items:center;gap:10px;margin-bottom:12px;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#c4b5fd';
  header.innerHTML='<span style="width:8px;height:8px;border-radius:50%;background:#a855f7;box-shadow:0 0 10px #a855f7;animation:glg-pulse 1.6s ease-in-out infinite"></span>Grab Level Grabber';
  const status=document.createElement('div');
  status.style.cssText='font-size:13px;color:#ddd6fe;margin-bottom:6px;min-height:18px';
  status.textContent=u+' · #'+i;
  const pctRow=document.createElement('div');
  pctRow.style.cssText='display:none;justify-content:space-between;align-items:baseline;font-size:11px;color:#c4b5fd;margin-bottom:6px;font-variant-numeric:tabular-nums';
  const pctLabel=document.createElement('span');pctLabel.textContent='0%';
  const pctBytes=document.createElement('span');pctBytes.textContent='';
  pctRow.append(pctLabel,pctBytes);
  const bar=document.createElement('div');
  bar.style.cssText='height:6px;border-radius:99px;background:rgba(168,85,247,.15);overflow:hidden;margin-bottom:12px;display:none;position:relative';
  const barInner=document.createElement('div');
  barInner.style.cssText='position:absolute;top:0;left:0;bottom:0;width:0%;background:linear-gradient(90deg,#7c3aed,#a855f7,#d8b4fe,#a855f7);background-size:200% 100%;animation:glg-shimmer 2s linear infinite;transition:width .15s ease;border-radius:99px';
  const barIndet=document.createElement('div');
  barIndet.style.cssText='position:absolute;top:0;bottom:0;left:0;width:40%;background:linear-gradient(90deg,transparent,#a855f7,transparent);animation:glg-bar 1.1s ease-in-out infinite;display:none';
  bar.append(barInner,barIndet);
  const btn=document.createElement('button');
  btn.style.cssText='width:100%;display:flex;align-items:center;justify-content:center;gap:10px;padding:13px 18px;border:none;border-radius:12px;cursor:pointer;font-size:15px;font-weight:700;color:white;background:linear-gradient(110deg,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed);background-size:200% 100%;animation:glg-shimmer 3s linear infinite;box-shadow:0 8px 24px -6px rgba(168,85,247,.6);transition:transform .15s ease';
  btn.onmouseenter=()=>{btn.style.transform='translateY(-1px) scale(1.02)'};
  btn.onmouseleave=()=>{btn.style.transform='none'};
  const icon=document.createElement('span');
  icon.style.cssText='display:inline-block;width:16px;height:16px;font-size:16px;line-height:16px';
  icon.textContent='⚡';
  const label=document.createElement('span');
  label.textContent='Steal Level';
  btn.append(icon,label);
  const close=document.createElement('button');
  close.textContent='×';
  close.style.cssText='position:absolute;top:8px;right:10px;background:transparent;border:none;color:#a78bfa;font-size:20px;cursor:pointer;line-height:1;padding:4px';
  close.onclick=()=>wrap.remove();
  card.append(close,header,status,pctRow,bar,btn);
  wrap.appendChild(card);
  document.body.appendChild(wrap);
  const fmt=(n)=>n<1024?n+' B':n<1048576?(n/1024).toFixed(1)+' KB':(n/1048576).toFixed(2)+' MB';
  btn.onclick=async()=>{
    btn.disabled=true;
    btn.style.cursor='wait';
    bar.style.display='block';
    pctRow.style.display='flex';
    barIndet.style.display='block';
    barInner.style.width='0%';
    pctLabel.textContent='--';
    pctBytes.textContent='';
    icon.textContent='';
    icon.style.cssText='display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;border-radius:50%;animation:glg-spin .7s linear infinite';
    label.textContent='Connecting...';
    status.textContent='Contacting proxy...';
    try{
      const r=await fetch('/api/grab-proxy?action=download&user_id='+u+'&iteration='+i,{});
      if(!r.ok)throw new Error('Failed '+r.status);
      const totalH=r.headers.get('content-length')||r.headers.get('x-content-length');
      const total=totalH?parseInt(totalH,10):0;
      label.textContent='Downloading...';
      status.textContent='Receiving level data...';
      let received=0;const chunks=[];
      if(r.body&&r.body.getReader){
        const reader=r.body.getReader();
        if(total>0)barIndet.style.display='none';
        while(true){
          const {done,value}=await reader.read();
          if(done)break;
          chunks.push(value);received+=value.length;
          if(total>0){
            const p=Math.min(100,(received/total)*100);
            barInner.style.width=p.toFixed(1)+'%';
            pctLabel.textContent=p.toFixed(0)+'%';
            pctBytes.textContent=fmt(received)+' / '+fmt(total);
          }else{
            pctLabel.textContent=fmt(received);
            pctBytes.textContent='size unknown';
          }
        }
      }else{
        const ab=await r.arrayBuffer();chunks.push(new Uint8Array(ab));received=ab.byteLength;
      }
      const b=new Blob(chunks);
      const a=document.createElement('a');
      a.href=URL.createObjectURL(b);
      a.download=u+'_'+i+'.level';
      document.body.appendChild(a);a.click();document.body.removeChild(a);
      barInner.style.width='100%';
      barIndet.style.display='none';
      pctLabel.textContent='100%';
      pctBytes.textContent=fmt(received);
      icon.style.cssText='display:inline-block;width:16px;height:16px;font-size:16px;line-height:16px';
      icon.textContent='✓';
      label.textContent='Downloaded!';
      status.textContent='Saved '+u+'_'+i+'.level';
      btn.style.animation='none';
      btn.style.background='linear-gradient(135deg,#10b981,#059669)';
    }catch(e){
      bar.style.display='none';
      pctRow.style.display='none';
      icon.style.cssText='display:inline-block;width:16px;height:16px;font-size:16px;line-height:16px';
      icon.textContent='⚠';
      label.textContent='Failed';
      status.textContent=e.message;
      btn.style.animation='none';
      btn.style.background='linear-gradient(135deg,#ef4444,#b91c1c)';
    }
  };
})();`,
  DE = `(function(){
  const SUPABASE='${Dv}/functions/v1';
  const APIKEY='${Fv}';
  const CLIPPY='https://raw.githubusercontent.com/pi0/clippyjs-offline/master/assets/agents/Clippy/map.png';
  document.getElementById('glg-clippy')?.remove();
  const s=document.createElement('style');
  s.textContent='@keyframes glg-cbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes glg-cpop{from{opacity:0;transform:translateY(10px) scale(.9)}to{opacity:1;transform:translateY(0) scale(1)}}';
  document.head.appendChild(s);
  const w=document.createElement('div');
  w.id='glg-clippy';
  w.style.cssText='position:fixed;bottom:20px;right:20px;z-index:2147483647;font-family:Tahoma,Segoe UI,sans-serif;display:flex;align-items:flex-end;gap:8px';
  const bubble=document.createElement('div');
  bubble.style.cssText='max-width:280px;background:linear-gradient(180deg,#fffde8,#fff5b8);border:1px solid #b8a24a;border-radius:14px;padding:12px 14px;font-size:12.5px;color:#2a2410;box-shadow:0 10px 26px -6px rgba(0,0,0,.4);position:relative;animation:glg-cpop .25s ease';
  const tail=document.createElement('div');
  tail.style.cssText='position:absolute;right:-9px;bottom:22px;width:16px;height:16px;background:#fff5b8;border-right:1px solid #b8a24a;border-bottom:1px solid #b8a24a;transform:rotate(-45deg)';
  const close=document.createElement('button');
  close.textContent='×';
  close.style.cssText='position:absolute;top:4px;right:8px;background:none;border:none;font-size:16px;cursor:pointer;color:#7a6a2a';
  close.onclick=()=>w.remove();
  const txt=document.createElement('div');
  txt.style.cssText='line-height:1.4;padding-right:14px;min-height:36px';
  const actions=document.createElement('div');
  actions.style.cssText='margin-top:10px;display:flex;flex-wrap:wrap;gap:6px';
  bubble.append(close,txt,actions,tail);
  const clip=document.createElement('div');
  clip.style.cssText='width:74px;height:74px;background:#fff;border-radius:50%;border:2px solid #b8a24a;box-shadow:0 6px 14px rgba(0,0,0,.35);animation:glg-cbob 2.4s ease-in-out infinite;display:flex;align-items:center;justify-content:center;font-size:44px;cursor:pointer;user-select:none';
  clip.textContent='📎';
  clip.title='Clippy — click to hide';
  clip.onclick=()=>{bubble.style.display=bubble.style.display==='none'?'block':'none'};
  w.append(bubble,clip);
  document.body.appendChild(w);
  const say=(t,acts)=>{
    txt.textContent=t;actions.innerHTML='';
    (acts||[]).forEach(a=>{
      const b=document.createElement('button');
      b.textContent=a.label;
      b.style.cssText='background:linear-gradient(180deg,#f5faff,#c8def5);border:1px solid #6b8bb5;color:#12345a;font-size:11.5px;font-weight:600;padding:4px 9px;border-radius:5px;cursor:pointer';
      b.onclick=a.run;actions.appendChild(b);
    });
  };
  const fmt=n=>n<1024?n+' B':n<1048576?(n/1024).toFixed(1)+' KB':(n/1048576).toFixed(2)+' MB';
  const grab=async(u,i)=>{
    say('Grabbing '+u+' · #'+i+'...');
    try{
      const r=await fetch('/api/grab-proxy?action=download&user_id='+u+'&iteration='+i,{});
      if(!r.ok)throw new Error('HTTP '+r.status);
      const ab=await r.arrayBuffer();
      const a=document.createElement('a');
      a.href=URL.createObjectURL(new Blob([ab]));
      a.download=u+'_'+i+'.level';
      document.body.appendChild(a);a.click();a.remove();
      say('✨ Grabbed! Saved '+fmt(ab.byteLength)+' as '+u+'_'+i+'.level',[{label:'Grab again',run:()=>grab(u,i)}]);
    }catch(e){ say('⚠ Grab failed: '+e.message,[{label:'Retry',run:()=>grab(u,i)}]); }
  };
  const detect=()=>{
    const m=location.search.match(/[?&]level=([^&]+)/);
    if(m){
      const id=decodeURIComponent(m[1]);
      const p=id.split(':');
      if(p.length===2){
        say('Hi! Looks like you\\'re on a level page. Want me to grab '+p[0]+' · #'+p[1]+' for you?',[
          {label:'⚡ Grab this level',run:()=>grab(p[0],p[1])},
          {label:'Copy Level ID',run:()=>{navigator.clipboard.writeText(id);say('Copied '+id+' to clipboard!')}},
        ]);
        return;
      }
    }
    if(/\\/user\\//.test(location.pathname)||/user=/.test(location.search)){
      say('You\\'re browsing a user\\'s levels. Click a level thumbnail to open it, then I\\'ll offer to grab it for you.');
      return;
    }
    say('Hi! I\\'m Clippy, your GrabVR level-grabbing helper. Navigate to a level page (grabvr.quest/?level=user:id) and I\\'ll grab it for you!',[
      {label:'Enter Level ID manually',run:()=>{
        const v=prompt('Enter level ID as user:iteration');
        if(!v)return;const p=v.split(':');
        if(p.length===2)grab(p[0].trim(),p[1].trim());
        else say('That doesn\\'t look right. Format: user:iteration');
      }},
    ]);
  };
  detect();
  let last=location.href;
  setInterval(()=>{if(location.href!==last){last=location.href;detect();}},1000);
})();`,
  ap = (e) =>
    "javascript:" + encodeURI(e.replace(/\n\s*/g, "").replace(/\s{2,}/g, " ")),
  FE = [
    {
      name: "Steal Level",
      description:
        "While on any grabvr.quest level page, click this bookmarklet to inject a purple download button that grabs the .level file directly.",
      href: ap(zE),
    },
    {
      name: "Clippy Assistant",
      description:
        "A quirky little helper that lives on grabvr.quest. Clippy detects what page you're on and offers to grab levels, copy IDs, or walk you through the process — auto-updates as you browse.",
      href: ap(DE),
    },
  ],
  Uv = () => {
    const [e, t] = y.useState(null),
      n = async (r, o) => {
        (await navigator.clipboard.writeText(r),
          t(o),
          setTimeout(() => t(null), 1500));
      };
    return u.jsx(Xs, {
      children: u.jsxs("div", {
        className: "flex-1 flex flex-col items-center px-4 py-8",
        children: [
          u.jsx("h1", {
            className: "text-3xl font-bold text-foreground mb-2",
            children: "Bookmarklets",
          }),
          u.jsx("p", {
            className: "text-foreground/70 mb-6 text-center max-w-xl",
            children:
              "Drag a button to your bookmarks bar, then click it on any GrabVR level page.",
          }),
          u.jsxs(Zs, {
            className: "w-full max-w-2xl space-y-4",
            children: [
              FE.map((r, o) =>
                u.jsxs(
                  "div",
                  {
                    className:
                      "flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-lg bg-secondary/40 border border-border",
                    children: [
                      u.jsxs("div", {
                        className: "flex-1",
                        children: [
                          u.jsxs("h2", {
                            className:
                              "text-lg font-semibold text-card-foreground flex items-center gap-2",
                            children: [
                              u.jsx(Bu, { className: "w-4 h-4 text-primary" }),
                              r.name,
                            ],
                          }),
                          u.jsx("p", {
                            className: "text-sm text-card-foreground/70 mt-1",
                            children: r.description,
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex items-center gap-2 shrink-0",
                        children: [
                          u.jsxs("a", {
                            href: r.href,
                            onClick: (s) => s.preventDefault(),
                            draggable: !0,
                            className:
                              "px-4 py-2 rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:brightness-110 transition-all cursor-grab active:cursor-grabbing",
                            title: "Drag me to your bookmarks bar",
                            children: ["⚡ ", r.name],
                          }),
                          u.jsx("button", {
                            onClick: () => n(r.href, o),
                            className:
                              "p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors",
                            title: "Copy bookmarklet code",
                            children:
                              e === o
                                ? u.jsx(Lg, {
                                    className: "w-4 h-4 text-primary",
                                  })
                                : u.jsx(kb, { className: "w-4 h-4" }),
                          }),
                        ],
                      }),
                    ],
                  },
                  r.name,
                ),
              ),
              u.jsx("p", {
                className: "text-xs text-card-foreground/60 pt-2",
                children:
                  "Tip: if your browser blocks dragging, click the copy icon and create a new bookmark manually, pasting the code into the URL field.",
              }),
            ],
          }),
        ],
      }),
    });
  },
  UE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Uv },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  lp = "https://ijmowerdujivlvqojroc.supabase.co",
  cp =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqbW93ZXJkdWppdmx2cW9qcm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNjEzOTcsImV4cCI6MjA5MDgzNzM5N30.55W84VdH_BaYqdBMSole6LLNHETjvkV-iYad4bMJeP8",
  up = { Authorization: `Bearer ${cp}`, apikey: cp },
  BE = (e) => {
    if (!e) return 1;
    const t = e.split(":"),
      n = parseInt(t[t.length - 1], 10);
    return Number.isFinite(n) && n > 0 ? n : 1;
  },
  VE = (e) => {
    const t = e.trim(),
      n = t.match(/user_id=([a-zA-Z0-9_-]+)/);
    if (n) return n[1];
    const r = t.match(/level=([a-zA-Z0-9_-]+):\d+/);
    return r
      ? r[1]
      : /^[a-zA-Z0-9_-]+:\d+$/.test(t)
        ? t.split(":")[0]
        : /^[a-zA-Z0-9_-]+$/.test(t)
          ? t
          : null;
  },
  Bv = () => {
    const [e, t] = y.useState(""),
      [n, r] = y.useState(!1),
      [o, s] = y.useState(null),
      [i, a] = y.useState(null),
      [l, c] = y.useState(""),
      p = async (d, w) => {
        const x = new URLSearchParams({
            action: "list",
            user_id: d,
            type: w,
            max_format_version: "100",
            limit: "200",
          }),
          b = await fetch(`/api/grab-proxy?${x}`, {
          });
        if (!b.ok) return null;
        const f = await b.json();
        return Array.isArray(f) ? f : null;
      },
      m = async () => {
        const d = VE(e);
        if (!d) {
          le.error("Invalid user ID or URL");
          return;
        }
        (r(!0), s(null));
        try {
          const w = ["unlisted", "hidden", "private"];
          let x = null,
            b = "";
          for (const f of w) {
            const h = await p(d, f);
            if (h && h.length) {
              ((x = h), (b = f));
              break;
            }
          }
          if (!x) {
            const [f, h] = await Promise.all([p(d, "newest"), p(d, "popular")]);
            if (f && h) {
              const v = new Set(h.map((S) => S.identifier)),
                k = f.filter((S) => !v.has(S.identifier));
              k.length && ((x = k), (b = "diff (newest − popular)"));
            }
          }
          if (!x || !x.length) {
            (le.error("No unlisted levels found for this creator"), c(""));
            return;
          }
          (c(b),
            s(
              x.map((f) => ({
                identifier: f.identifier,
                title: f.title || f.identifier,
                version: BE(f.data_key),
                complexity: f.complexity,
                creators: f.creators,
              })),
            ),
            le.success(
              `Found ${x.length} unlisted level${x.length !== 1 ? "s" : ""}`,
            ));
        } catch {
          le.error("Failed to load unlisted levels");
        } finally {
          r(!1);
        }
      },
      g = async (d) => {
        const [w, x] = d.identifier.split(":");
        a(d.identifier);
        try {
          const b = await fetch(
            `/api/grab-proxy?action=download&user_id=${w}&iteration=${x}&version=${d.version}`,
          );
          if (!b.ok) throw new Error("Failed");
          const f = await b.blob(),
            h = URL.createObjectURL(f),
            v = document.createElement("a");
          ((v.href = h),
            (v.download = `1${d.title.replace(/[^a-zA-Z0-9]/g, "_")}.level`),
            document.body.appendChild(v),
            v.click(),
            document.body.removeChild(v),
            URL.revokeObjectURL(h));
        } catch {
          le.error(`Failed: ${d.title}`);
        } finally {
          a(null);
        }
      };
    return u.jsx(Xs, {
      children: u.jsxs("div", {
        className: "flex-1 flex flex-col items-center px-4 py-8",
        children: [
          u.jsxs("h1", {
            className:
              "text-3xl font-bold text-foreground mb-2 flex items-center gap-2",
            children: [
              u.jsx(Vu, { className: "w-7 h-7 text-primary" }),
              " Unlisted Levels",
            ],
          }),
          u.jsx("p", {
            className: "text-foreground/70 mb-6 text-center max-w-xl",
            children:
              "Enter a creator's user ID (or any of their level URLs) to view their unlisted levels.",
          }),
          u.jsxs(Zs, {
            className: "w-full max-w-2xl space-y-4",
            children: [
              u.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-2",
                children: [
                  u.jsx(io, {
                    placeholder: "user_id or grabvr.quest/?level=USER:ITER",
                    value: e,
                    onChange: (d) => t(d.target.value),
                    onKeyDown: (d) => d.key === "Enter" && m(),
                  }),
                  u.jsxs(vt, {
                    onClick: m,
                    disabled: n,
                    children: [
                      n
                        ? u.jsx(br, { className: "w-4 h-4 animate-spin" })
                        : u.jsx(is, { className: "w-4 h-4" }),
                      u.jsx("span", { className: "ml-2", children: "Find" }),
                    ],
                  }),
                ],
              }),
              l &&
                u.jsxs("p", {
                  className: "text-xs text-card-foreground/60",
                  children: [
                    "Source: ",
                    u.jsx("span", {
                      className: "font-mono text-primary",
                      children: l,
                    }),
                  ],
                }),
              o &&
                u.jsx("div", {
                  className: "space-y-2 max-h-[60vh] overflow-y-auto pr-1",
                  children: o.map((d) =>
                    u.jsxs(
                      "div",
                      {
                        className:
                          "flex items-center justify-between gap-3 p-3 rounded-lg bg-secondary/40 border border-border",
                        children: [
                          u.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [
                              u.jsx("div", {
                                className:
                                  "font-semibold text-card-foreground truncate",
                                children: d.title,
                              }),
                              u.jsxs("div", {
                                className:
                                  "text-xs text-card-foreground/60 font-mono truncate",
                                children: [
                                  d.identifier,
                                  " · v",
                                  d.version,
                                  d.complexity ? ` · cplx ${d.complexity}` : "",
                                ],
                              }),
                            ],
                          }),
                          u.jsx(vt, {
                            size: "sm",
                            onClick: () => g(d),
                            disabled: i === d.identifier,
                            children:
                              i === d.identifier
                                ? u.jsx(br, {
                                    className: "w-4 h-4 animate-spin",
                                  })
                                : u.jsx(Un, { className: "w-4 h-4" }),
                          }),
                        ],
                      },
                      d.identifier,
                    ),
                  ),
                }),
              !o &&
                !n &&
                u.jsx("p", {
                  className: "text-xs text-card-foreground/60 pt-2",
                  children:
                    "Tip: not every creator has unlisted levels exposed by the GRAB API. If none are found, they likely don't have any — or the API doesn't expose them.",
                }),
            ],
          }),
        ],
      }),
    });
  },
  WE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Bv },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Vv = () =>
    u.jsx(Xs, {
      children: u.jsx("div", {
        className: "flex-1 flex flex-col items-center px-4 py-8",
        children: u.jsxs(Zs, {
          className: "w-full max-w-2xl",
          children: [
            u.jsx("h1", {
              className: "text-2xl font-bold text-card-foreground mb-4",
              children: "Legal & Disclaimer",
            }),
            u.jsxs("div", {
              className: "space-y-4 text-card-foreground/90 leading-relaxed",
              children: [
                u.jsx("p", {
                  children:
                    "This tool is provided as-is, without warranty of any kind.",
                }),
                u.jsxs("p", {
                  children: [
                    "We are ",
                    u.jsx("strong", { children: "not affiliated" }),
                    " with SlinDev or GRAB VR in any way.",
                  ],
                }),
                u.jsxs("p", {
                  children: [
                    "We are ",
                    u.jsx("strong", { children: "not responsible" }),
                    " for how downloaded levels are used. Users assume full responsibility for their actions when using this tool.",
                  ],
                }),
                u.jsx("p", {
                  children:
                    "All level data is fetched directly from the public GRAB API. No data is stored on our servers.",
                }),
                u.jsx("p", {
                  children:
                    "By using this tool, you agree to use it in compliance with all applicable laws and the GRAB VR terms of service.",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  HE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vv },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  QE = () => {
    const e = Wr();
    return (
      y.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      u.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: u.jsxs("div", {
          className: "text-center",
          children: [
            u.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            u.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            u.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  PinGate = () => {
    const [unlocked, setUnlocked] = y.useState(() => sessionStorage.getItem("levelgrabber_unlocked") === "1");
    const [pin, setPin] = y.useState("");
    const [busy, setBusy] = y.useState(false);
    const [error, setError] = y.useState("");
    const unlock = async () => {
      if (!/^\d{4}$/.test(pin)) { setError("Enter the 4-digit PIN."); return; }
      setBusy(true); setError("");
      try {
        const r = await fetch("/api/verify-pin", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ pin }),
        });
        if (!r.ok) throw new Error("Invalid PIN");
        sessionStorage.setItem("levelgrabber_unlocked", "1");
        setUnlocked(true);
      } catch {
        setError("Incorrect PIN.");
      } finally { setBusy(false); }
    };
    if (unlocked) return u.jsx($v, {});
    return u.jsx("div", { className: "min-h-screen flex items-center justify-center px-4", children: u.jsxs(Zs, { className: "w-full max-w-md p-6 space-y-5", children: [
      u.jsxs("div", { className: "text-center space-y-2", children: [
        u.jsx("h1", { className: "text-3xl font-bold text-card-foreground", children: "GREY'S GRAB TOOLS" }),
        u.jsx("p", { className: "text-sm text-card-foreground/70", children: "Enter your access PIN to continue to GREY'S GRAB TOOLS." }),
      ] }),
      u.jsxs("div", { className: "space-y-3", children: [
        u.jsx(io, { type: "password", inputMode: "numeric", maxLength: 4, placeholder: "••••", value: pin, onChange: e => setPin(e.target.value.replace(/\D/g, "")), onKeyDown: e => e.key === "Enter" && unlock(), className: "text-center text-xl tracking-[0.5em]" }),
        u.jsx(vt, { className: "w-full", onClick: unlock, disabled: busy || pin.length !== 4, children: busy ? "Checking…" : "Unlock" }),
        error && u.jsx("p", { className: "text-sm text-destructive text-center", children: error }),
      ] }),
    ] }) });
  },
  GE = new zx(),
  KE = () =>
    u.jsx(Fx, {
      client: GE,
      children: u.jsxs(Jk, {
        children: [
          u.jsx(h2, {}),
          u.jsx(xw, {}),
          u.jsx($1, {
            children: u.jsxs(P1, {
              children: [
                u.jsx(Mn, { path: "/", element: u.jsx(PinGate, {}) }),
                u.jsx(Mn, { path: "/download", element: u.jsx(PinGate, {}) }),
                u.jsx(Mn, { path: "*", element: u.jsx(PinGate, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Om(document.getElementById("root")).render(u.jsx(KE, {}));
export {
  Ik as A,
  vt as B,
  wr as C,
  zu as D,
  io as I,
  Re as P,
  Tp as R,
  Cv as T,
  Xw as V,
  cr as a,
  lr as b,
  ye as c,
  pt as d,
  Iw as e,
  $o as f,
  sv as g,
  Ee as h,
  Gs as i,
  u as j,
  Ok as k,
  Ak as l,
  TE as m,
  ag as n,
  XE as o,
  ig as p,
  ma as q,
  y as r,
  ht as s,
  Lg as t,
  le as u,
  kb as v,
  Pg as w,
};

/* GREY'S extra tools: download history + level inspector */
import './extra-tools.js';

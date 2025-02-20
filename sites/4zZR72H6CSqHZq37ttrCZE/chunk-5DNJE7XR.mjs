import {a as pn, b as bg, c as pr, d as R, e as fe, f as Kt, g as qu, h as $t} from "./chunk-JR5VT52U.mjs";
import {a as Gu, b as Fe, c as P} from "./chunk-RIUMFBNJ.mjs";

var St = {};
Gu(St, {
    Children: () => mn,
    Component: () => Ce,
    Fragment: () => gn,
    Profiler: () => qT,
    PureComponent: () => XT,
    StrictMode: () => YT,
    Suspense: () => mi,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => KT,
    cloneElement: () => mr,
    createContext: () => ve,
    createElement: () => Zi,
    createFactory: () => QT,
    createRef: () => _g,
    default: () => x,
    forwardRef: () => Ve,
    isValidElement: () => Mt,
    lazy: () => ZT,
    memo: () => Ha,
    startTransition: () => Qt,
    unstable_act: () => JT,
    useCallback: () => Q,
    useContext: () => A,
    useDebugValue: () => eR,
    useDeferredValue: () => tR,
    useEffect: () => $,
    useId: () => gi,
    useImperativeHandle: () => nR,
    useInsertionEffect: () => lt,
    useLayoutEffect: () => Ae,
    useMemo: () => se,
    useReducer: () => rR,
    useRef: () => V,
    useState: () => De,
    useSyncExternalStore: () => Ig,
    useTransition: () => iR,
    version: () => oR
});
var x = {}, is = Symbol.for("react.element"), OT = Symbol.for("react.portal"), MT = Symbol.for("react.fragment"),
    LT = Symbol.for("react.strict_mode"), VT = Symbol.for("react.profiler"), AT = Symbol.for("react.provider"),
    DT = Symbol.for("react.context"), zT = Symbol.for("react.forward_ref"), BT = Symbol.for("react.suspense"),
    $T = Symbol.for("react.memo"), NT = Symbol.for("react.lazy"), xg = Symbol.iterator;

function jT(e) {
    return e === null || typeof e != "object" ? null : (e = xg && e[xg] || e["@@iterator"], typeof e == "function" ? e : null)
}

var kg = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, Cg = Object.assign, Tg = {};

function Qi(e, t, n) {
    this.props = e, this.context = t, this.refs = Tg, this.updater = n || kg
}

Qi.prototype.isReactComponent = {};
Qi.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Qi.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Rg() {
}

Rg.prototype = Qi.prototype;

function Yu(e, t, n) {
    this.props = e, this.context = t, this.refs = Tg, this.updater = n || kg
}

var Ku = Yu.prototype = new Rg;
Ku.constructor = Yu;
Cg(Ku, Qi.prototype);
Ku.isPureReactComponent = !0;
var wg = Array.isArray, Eg = Object.prototype.hasOwnProperty, Qu = {current: null},
    Fg = {key: !0, ref: !0, __self: !0, __source: !0};

function Pg(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Eg.call(t, r) && !Fg.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n; else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
        i.children = l
    }
    if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {$$typeof: is, type: e, key: o, ref: s, props: i, _owner: Qu.current}
}

function HT(e, t) {
    return {$$typeof: is, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function Zu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === is
}

function WT(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var Sg = /\/+/g;

function Xu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? WT("" + e.key) : t.toString(36)
}

function Na(e, t, n, r, i) {
    var o = typeof e;
    o !== "undefined" && o !== "boolean" || (e = null);
    var s = !1;
    if (e === null) s = !0; else switch (o) {
        case"string":
        case"number":
            s = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case is:
                case OT:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + Xu(s, 0) : r, wg(i) ? (n = "", e != null && (n = e.replace(Sg, "$&/") + "/"), Na(i, t, n, "", function (c) {
        return c
    })) : i != null && (Zu(i) && (i = HT(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Sg, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", wg(e)) for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + Xu(o, a);
        s += Na(o, t, n, l, i)
    } else if (l = jT(e), typeof l == "function") for (e = l.call(e), a = 0; !(o = e.next()).done;) o = o.value, l = r + Xu(o, a++), s += Na(o, t, n, l, i); else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function $a(e, t, n) {
    if (e == null) return e;
    var r = [], i = 0;
    return Na(e, r, "", "", function (o) {
        return t.call(n, o, i++)
    }), r
}

function UT(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            e._status !== 0 && e._status !== -1 || (e._status = 1, e._result = n)
        }, function (n) {
            e._status !== 0 && e._status !== -1 || (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var Ot = {current: null}, ja = {transition: null},
    GT = {ReactCurrentDispatcher: Ot, ReactCurrentBatchConfig: ja, ReactCurrentOwner: Qu};
x.Children = {
    map: $a, forEach: function (e, t, n) {
        $a(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return $a(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return $a(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!Zu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
x.Component = Qi;
x.Fragment = MT;
x.Profiler = VT;
x.PureComponent = Yu;
x.StrictMode = LT;
x.Suspense = BT;
x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GT;
x.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Cg({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = Qu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) Eg.call(t, l) && !Fg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n; else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
        r.children = a
    }
    return {$$typeof: is, type: e.type, key: i, ref: o, props: r, _owner: s}
};
x.createContext = function (e) {
    return e = {
        $$typeof: DT,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: AT, _context: e}, e.Consumer = e
};
x.createElement = Pg;
x.createFactory = function (e) {
    var t = Pg.bind(null, e);
    return t.type = e, t
};
x.createRef = function () {
    return {current: null}
};
x.forwardRef = function (e) {
    return {$$typeof: zT, render: e}
};
x.isValidElement = Zu;
x.lazy = function (e) {
    return {$$typeof: NT, _payload: {_status: -1, _result: e}, _init: UT}
};
x.memo = function (e, t) {
    return {$$typeof: $T, type: e, compare: t === void 0 ? null : t}
};
x.startTransition = function (e) {
    var t = ja.transition;
    ja.transition = {};
    try {
        e()
    } finally {
        ja.transition = t
    }
};
x.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
};
x.useCallback = function (e, t) {
    return Ot.current.useCallback(e, t)
};
x.useContext = function (e) {
    return Ot.current.useContext(e)
};
x.useDebugValue = function () {
};
x.useDeferredValue = function (e) {
    return Ot.current.useDeferredValue(e)
};
x.useEffect = function (e, t) {
    return Ot.current.useEffect(e, t)
};
x.useId = function () {
    return Ot.current.useId()
};
x.useImperativeHandle = function (e, t, n) {
    return Ot.current.useImperativeHandle(e, t, n)
};
x.useInsertionEffect = function (e, t) {
    return Ot.current.useInsertionEffect(e, t)
};
x.useLayoutEffect = function (e, t) {
    return Ot.current.useLayoutEffect(e, t)
};
x.useMemo = function (e, t) {
    return Ot.current.useMemo(e, t)
};
x.useReducer = function (e, t, n) {
    return Ot.current.useReducer(e, t, n)
};
x.useRef = function (e) {
    return Ot.current.useRef(e)
};
x.useState = function (e) {
    return Ot.current.useState(e)
};
x.useSyncExternalStore = function (e, t, n) {
    return Ot.current.useSyncExternalStore(e, t, n)
};
x.useTransition = function () {
    return Ot.current.useTransition()
};
x.version = "18.2.0";
var mn = x.Children, Ce = x.Component, gn = x.Fragment, qT = x.Profiler, XT = x.PureComponent, YT = x.StrictMode,
    mi = x.Suspense, KT = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mr = x.cloneElement,
    ve = x.createContext, Zi = x.createElement, QT = x.createFactory, _g = x.createRef, Ve = x.forwardRef,
    Mt = x.isValidElement, ZT = x.lazy, Ha = x.memo, Qt = x.startTransition, JT = x.unstable_act, Q = x.useCallback,
    A = x.useContext, eR = x.useDebugValue, tR = x.useDeferredValue, $ = x.useEffect, gi = x.useId,
    nR = x.useImperativeHandle, lt = x.useInsertionEffect, Ae = x.useLayoutEffect, se = x.useMemo, rR = x.useReducer,
    V = x.useRef, De = x.useState, Ig = x.useSyncExternalStore, iR = x.useTransition, oR = x.version;
var sR = "default" in St ? x : St, Ji = {}, aR = sR, lR = Symbol.for("react.element"),
    cR = Symbol.for("react.fragment"), uR = Object.prototype.hasOwnProperty,
    fR = aR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    dR = {key: !0, ref: !0, __self: !0, __source: !0};

function Og(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) uR.call(t, r) && !dR.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {$$typeof: lR, type: e, key: o, ref: s, props: i, _owner: fR.current}
}

Ji.Fragment = cR;
Ji.jsx = Og;
Ji.jsxs = Og;
var nt = Ji.Fragment, C = Ji.jsx, de = Ji.jsxs;
var hR = pn({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});

        function t(n) {
            var r = {};
            return function (i) {
                return r[i] === void 0 && (r[i] = n(i)), r[i]
            }
        }

        e.default = t
    }
}), pR = pn({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});

        function t(o) {
            return o && typeof o == "object" && "default" in o ? o.default : o
        }

        var n = t(hR()),
            r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
            i = n(function (o) {
                return r.test(o) || o.charCodeAt(0) === 111 && o.charCodeAt(1) === 110 && o.charCodeAt(2) < 91
            });
        e.default = i
    }
}), ol = {skipAnimations: !1, useManualTiming: !1}, vt = e => e;

function mR(e) {
    let t = new Set, n = new Set, r = !1, i = !1, o = new WeakSet, s = {delta: 0, timestamp: 0, isProcessing: !1};

    function a(c) {
        o.has(c) && (l.schedule(c), e()), c(s)
    }

    let l = {
        schedule: (c, u = !1, f = !1) => {
            let m = f && r ? t : n;
            return u && o.add(c), m.has(c) || m.add(c), c
        }, cancel: c => {
            n.delete(c), o.delete(c)
        }, process: c => {
            if (s = c, r) {
                i = !0;
                return
            }
            r = !0, [t, n] = [n, t], n.clear(), t.forEach(a), r = !1, i && (i = !1, l.process(c))
        }
    };
    return l
}

var as = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"], gR = 40;

function ry(e, t) {
    let n = !1, r = !0, i = {delta: 0, timestamp: 0, isProcessing: !1}, o = () => n = !0,
        s = as.reduce((p, h) => (p[h] = mR(o), p), {}), {
            read: a,
            resolveKeyframes: l,
            update: c,
            preRender: u,
            render: f,
            postRender: d
        } = s, m = () => {
            let p = ol.useManualTiming ? i.timestamp : performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, gR), 1), i.timestamp = p, i.isProcessing = !0, a.process(i), l.process(i), c.process(i), u.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(m))
        }, v = () => {
            n = !0, r = !0, i.isProcessing || e(m)
        };
    return {
        schedule: as.reduce((p, h) => {
            let y = s[h];
            return p[h] = (w, k = !1, S = !1) => (n || v(), y.schedule(w, k, S)), p
        }, {}), cancel: p => {
            for (let h = 0; h < as.length; h++) s[as[h]].cancel(p)
        }, state: i, steps: s
    }
}

var {
        schedule: Y,
        cancel: Ct,
        state: Ue,
        steps: qa
    } = ry(typeof requestAnimationFrame < "u" ? requestAnimationFrame : vt, !0),
    iy = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, vR = 1e-7, yR = 12;

function bR(e, t, n, r, i) {
    let o, s, a = 0;
    do s = t + (n - t) / 2, o = iy(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > vR && ++a < yR);
    return s
}

function lo(e, t, n, r) {
    if (e === t && n === r) return vt;
    let i = o => bR(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : iy(i(o), t, r)
}

var Lf = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Vf = e => t => 1 - e(1 - t),
    Af = lo(.33, 1.53, .69, .99), sl = Vf(Af), Df = Lf(sl),
    zf = e => (e *= 2) < 1 ? .5 * sl(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))), al = e => 1 - Math.sin(Math.acos(e)),
    Bf = Vf(al), $f = Lf(al), co = vt, Zt = vt, vr = (e, t, n) => n > t ? t : n < e ? e : n, ws = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }), Ar = ws("deg"), Hn = ws("%"), Z = ws("px"), xR = ws("vh"), wR = ws("vw"),
    Mg = {...Hn, parse: e => Hn.parse(e) / 100, transform: e => Hn.transform(e * 100)},
    uo = {test: e => typeof e == "number", parse: parseFloat, transform: e => e},
    ms = {...uo, transform: e => vr(0, 1, e)}, Wa = {...uo, default: 1}, us = e => Math.round(e * 1e5) / 1e5,
    Nf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function SR(e) {
    return e == null
}

var kR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    jf = (e, t) => n => !!(typeof n == "string" && kR.test(n) && n.startsWith(e) || t && !SR(n) && Object.prototype.hasOwnProperty.call(n, t)),
    oy = (e, t, n) => r => {
        if (typeof r != "string") return r;
        let [i, o, s, a] = r.match(Nf);
        return {[e]: parseFloat(i), [t]: parseFloat(o), [n]: parseFloat(s), alpha: a !== void 0 ? parseFloat(a) : 1}
    }, CR = e => vr(0, 255, e), Ju = {...uo, transform: e => Math.round(CR(e))}, xi = {
        test: jf("rgb", "red"),
        parse: oy("red", "green", "blue"),
        transform: ({
                        red: e,
                        green: t,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + Ju.transform(e) + ", " + Ju.transform(t) + ", " + Ju.transform(n) + ", " + us(ms.transform(r)) + ")"
    };

function TR(e) {
    let t = "", n = "", r = "", i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}

var hf = {test: jf("#"), parse: TR, transform: xi.transform}, eo = {
        test: jf("hsl", "hue"),
        parse: oy("hue", "saturation", "lightness"),
        transform: ({
                        hue: e,
                        saturation: t,
                        lightness: n,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(e) + ", " + Hn.transform(us(t)) + ", " + Hn.transform(us(n)) + ", " + us(ms.transform(r)) + ")"
    }, gt = {
        test: e => xi.test(e) || hf.test(e) || eo.test(e),
        parse: e => xi.test(e) ? xi.parse(e) : eo.test(e) ? eo.parse(e) : hf.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? xi.transform(e) : eo.transform(e)
    },
    RR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function ER(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Nf)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(RR)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}

var sy = "number", ay = "color", FR = "var", PR = "var(", Lg = "${}",
    _R = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function gs(e) {
    let t = e.toString(), n = [], r = {color: [], number: [], var: []}, i = [], o = 0,
        a = t.replace(_R, l => (gt.test(l) ? (r.color.push(o), i.push(ay), n.push(gt.parse(l))) : l.startsWith(PR) ? (r.var.push(o), i.push(FR), n.push(l)) : (r.number.push(o), i.push(sy), n.push(parseFloat(l))), ++o, Lg)).split(Lg);
    return {values: n, split: a, indexes: r, types: i}
}

function ly(e) {
    return gs(e).values
}

function cy(e) {
    let {split: t, types: n} = gs(e), r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++) if (o += t[s], i[s] !== void 0) {
            let a = n[s];
            a === sy ? o += us(i[s]) : a === ay ? o += gt.transform(i[s]) : o += i[s]
        }
        return o
    }
}

var IR = e => typeof e == "number" ? 0 : e;

function OR(e) {
    let t = ly(e);
    return cy(e)(t.map(IR))
}

var yr = {test: ER, parse: ly, createTransformer: cy, getAnimatableNone: OR}, Pn = e => e * 1e3, Wn = e => e / 1e3,
    ef = .001, MR = .01, Vg = 10, LR = .05, VR = 1;

function uy({duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1}) {
    let i, o;
    co(e <= Pn(Vg), "Spring duration must be 10 seconds or less");
    let s = 1 - t;
    s = vr(LR, VR, s), e = vr(MR, Vg, Wn(e)), s < 1 ? (i = c => {
        let u = c * s, f = u * e, d = u - n, m = pf(c, s), v = Math.exp(-f);
        return ef - d / m * v
    }, o = c => {
        let f = c * s * e, d = f * n + n, m = Math.pow(s, 2) * Math.pow(c, 2) * e, v = Math.exp(-f),
            g = pf(Math.pow(c, 2), s);
        return (-i(c) + ef > 0 ? -1 : 1) * ((d - m) * v) / g
    }) : (i = c => {
        let u = Math.exp(-c * e), f = (c - n) * e + 1;
        return -ef + u * f
    }, o = c => {
        let u = Math.exp(-c * e), f = (n - c) * (e * e);
        return u * f
    });
    let a = 5 / e, l = DR(i, o, a);
    if (e = Pn(e), isNaN(l)) return {stiffness: 100, damping: 10, duration: e};
    {
        let c = Math.pow(l, 2) * r;
        return {stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e}
    }
}

var AR = 12;

function DR(e, t, n) {
    let r = n;
    for (let i = 1; i < AR; i++) r = r - e(r) / t(r);
    return r
}

function pf(e, t) {
    return e * Math.sqrt(1 - t * t)
}

function Hf(e, t) {
    return t ? e * (1e3 / t) : 0
}

var zR = 5;

function fy(e, t, n) {
    let r = Math.max(t - zR, 0);
    return Hf(n - e(r), t - r)
}

var BR = ["duration", "bounce"], $R = ["stiffness", "damping", "mass"];

function Ag(e, t) {
    return t.some(n => e[n] !== void 0)
}

function NR(e) {
    let t = {velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e};
    if (!Ag(e, $R) && Ag(e, BR)) {
        let n = uy(e);
        t = {...t, ...n, mass: 1}, t.isResolvedFromDuration = !0
    }
    return t
}

function Ss({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    let i = e[0], o = e[e.length - 1], s = {done: !1, value: i}, {
            stiffness: a,
            damping: l,
            mass: c,
            duration: u,
            velocity: f,
            isResolvedFromDuration: d
        } = NR({...r, velocity: -Wn(r.velocity || 0)}), m = f || 0, v = l / (2 * Math.sqrt(a * c)), g = o - i,
        b = Wn(Math.sqrt(a / c)), p = Math.abs(g) < 5;
    n || (n = p ? .01 : 2), t || (t = p ? .005 : .5);
    let h;
    if (v < 1) {
        let y = pf(b, v);
        h = w => {
            let k = Math.exp(-v * b * w);
            return o - k * ((m + v * b * g) / y * Math.sin(y * w) + g * Math.cos(y * w))
        }
    } else if (v === 1) h = y => o - Math.exp(-b * y) * (g + (m + b * g) * y); else {
        let y = b * Math.sqrt(v * v - 1);
        h = w => {
            let k = Math.exp(-v * b * w), S = Math.min(y * w, 300);
            return o - k * ((m + v * b * g) * Math.sinh(S) + y * g * Math.cosh(S)) / y
        }
    }
    return {
        calculatedDuration: d && u || null, next: y => {
            let w = h(y);
            if (d) s.done = y >= u; else {
                let k = 0;
                v < 1 && (k = y === 0 ? Pn(m) : fy(h, y, w));
                let S = Math.abs(k) <= n, T = Math.abs(o - w) <= t;
                s.done = S && T
            }
            return s.value = s.done ? o : w, s
        }
    }
}

function mf({
                keyframes: e,
                velocity: t = 0,
                power: n = .8,
                timeConstant: r = 325,
                bounceDamping: i = 10,
                bounceStiffness: o = 500,
                modifyTarget: s,
                min: a,
                max: l,
                restDelta: c = .5,
                restSpeed: u
            }) {
    let f = e[0], d = {done: !1, value: f}, m = E => a !== void 0 && E < a || l !== void 0 && E > l,
        v = E => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l, g = n * t, b = f + g,
        p = s === void 0 ? b : s(b);
    p !== b && (g = p - f);
    let h = E => -g * Math.exp(-E / r), y = E => p + h(E), w = E => {
        let O = h(E), I = y(E);
        d.done = Math.abs(O) <= c, d.value = d.done ? p : I
    }, k, S, T = E => {
        m(d.value) && (k = E, S = Ss({
            keyframes: [d.value, v(d.value)],
            velocity: fy(y, E, d.value),
            damping: i,
            stiffness: o,
            restDelta: c,
            restSpeed: u
        }))
    };
    return T(0), {
        calculatedDuration: null, next: E => {
            let O = !1;
            return !S && k === void 0 && (O = !0, w(E), T(E)), k !== void 0 && E >= k ? S.next(E - k) : (!O && w(E), d)
        }
    }
}

var dy = lo(.42, 0, 1, 1), hy = lo(0, 0, .58, 1), Wf = lo(.42, 0, .58, 1), jR = (e, t) => n => t(e(n)),
    Un = (...e) => e.reduce(jR), br = (e, t, n) => {
        let r = t - e;
        return r === 0 ? 1 : (n - e) / r
    }, Ie = (e, t, n) => e + (t - e) * n;

function tf(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function HR({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0, o = 0, s = 0;
    if (!t) i = o = s = n; else {
        let a = n < .5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
        i = tf(l, a, e + 1 / 3), o = tf(l, a, e), s = tf(l, a, e - 1 / 3)
    }
    return {red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(s * 255), alpha: r}
}

function Za(e, t) {
    return n => n > 0 ? t : e
}

var nf = (e, t, n) => {
    let r = e * e, i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}, WR = [hf, xi, eo], UR = e => WR.find(t => t.test(e));

function Dg(e) {
    let t = UR(e);
    if (co(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
    let n = t.parse(e);
    return t === eo && (n = HR(n)), n
}

var zg = (e, t) => {
        let n = Dg(e), r = Dg(t);
        if (!n || !r) return Za(e, t);
        let i = {...n};
        return o => (i.red = nf(n.red, r.red, o), i.green = nf(n.green, r.green, o), i.blue = nf(n.blue, r.blue, o), i.alpha = Ie(n.alpha, r.alpha, o), xi.transform(i))
    }, py = e => t => typeof t == "string" && t.startsWith(e), my = py("--"), GR = py("var(--"),
    Uf = e => GR(e) ? qR.test(e.split("/*")[0].trim()) : !1,
    qR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    gf = new Set(["none", "hidden"]);

function XR(e, t) {
    return gf.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function YR(e, t) {
    return n => Ie(e, t, n)
}

function Gf(e) {
    return typeof e == "number" ? YR : typeof e == "string" ? Uf(e) ? Za : gt.test(e) ? zg : ZR : Array.isArray(e) ? gy : typeof e == "object" ? gt.test(e) ? zg : KR : Za
}

function gy(e, t) {
    let n = [...e], r = n.length, i = e.map((o, s) => Gf(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++) n[s] = i[s](o);
        return n
    }
}

function KR(e, t) {
    let n = {...e, ...t}, r = {};
    for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Gf(e[i])(e[i], t[i]));
    return i => {
        for (let o in r) n[o] = r[o](i);
        return n
    }
}

function QR(e, t) {
    var n;
    let r = [], i = {color: 0, var: 0, number: 0};
    for (let o = 0; o < t.values.length; o++) {
        let s = t.types[o], a = e.indexes[s][i[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[o] = l, i[s]++
    }
    return r
}

var ZR = (e, t) => {
    let n = yr.createTransformer(t), r = gs(e), i = gs(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? gf.has(e) && !i.values.length || gf.has(t) && !r.values.length ? XR(e, t) : Un(gy(QR(r, i), i.values), n) : (co(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Za(e, t))
};

function qf(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Ie(e, t, n) : Gf(e)(e, t)
}

function JR(e, t, n) {
    let r = [], i = n || qf, o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            let l = Array.isArray(t) ? t[s] || vt : t;
            a = Un(l, a)
        }
        r.push(a)
    }
    return r
}

function fo(e, t, {clamp: n = !0, ease: r, mixer: i} = {}) {
    let o = e.length;
    if (Zt(o === t.length, "Both input and output ranges must be the same length"), o === 1) return () => t[0];
    if (o === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    let s = JR(t, r, i), a = s.length, l = c => {
        let u = 0;
        if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++) ;
        let f = br(e[u], e[u + 1], c);
        return s[u](f)
    };
    return n ? c => l(vr(e[0], e[o - 1], c)) : l
}

var vy = e => Array.isArray(e) && typeof e[0] != "number", Xf = e => Array.isArray(e) && typeof e[0] == "number", Bg = {
    linear: vt,
    easeIn: dy,
    easeInOut: Wf,
    easeOut: hy,
    circIn: al,
    circInOut: $f,
    circOut: Bf,
    backIn: sl,
    backInOut: Df,
    backOut: Af,
    anticipate: zf
}, vf = e => {
    if (Xf(e)) {
        Zt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
        let [t, n, r, i] = e;
        return lo(t, n, r, i)
    } else if (typeof e == "string") return Zt(Bg[e] !== void 0, `Invalid easing type '${e}'`), Bg[e];
    return e
};

function yy(e, t) {
    let n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        let i = br(0, t, r);
        e.push(Ie(n, 1, i))
    }
}

function Yf(e) {
    let t = [0];
    return yy(t, e.length - 1), t
}

function eE(e, t) {
    return e.map(n => n * t)
}

function tE(e, t) {
    return e.map(() => t || Wf).splice(0, e.length - 1)
}

function vs({duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut"}) {
    let i = vy(r) ? r.map(vf) : vf(r), o = {done: !1, value: t[0]}, s = eE(n && n.length === t.length ? n : Yf(t), e),
        a = fo(s, t, {ease: Array.isArray(i) ? i : tE(t, i)});
    return {calculatedDuration: e, next: l => (o.value = a(l), o.done = l >= e, o)}
}

var ks = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    zr = new Set(ks),
    nE = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    $g = e => e === uo || e === Z, Ng = (e, t) => parseFloat(e.split(", ")[t]), jg = (e, t) => (n, {transform: r}) => {
        if (r === "none" || !r) return 0;
        let i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return Ng(i[1], t);
        {
            let o = r.match(/^matrix\((.+)\)$/u);
            return o ? Ng(o[1], e) : 0
        }
    }, rE = new Set(["x", "y", "z"]), iE = ks.filter(e => !rE.has(e));

function oE(e) {
    let t = [];
    return iE.forEach(n => {
        let r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}

var oo = {
    width: ({x: e}, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t = "0", paddingBottom: n = "0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: jg(4, 13),
    y: jg(5, 14)
};
oo.translateX = oo.x;
oo.translateY = oo.y;
var wi = new Set, yf = !1, bf = !1;

function by() {
    if (bf) {
        let e = Array.from(wi).filter(r => r.needsMeasurement), t = new Set(e.map(r => r.element)), n = new Map;
        t.forEach(r => {
            let i = oE(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            let i = n.get(r);
            i && i.forEach(([o, s]) => {
                var a;
                (a = r.getValue(o)) === null || a === void 0 || a.set(s)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && P.scrollTo(0, r.suspendedScrollY)
        })
    }
    bf = !1, yf = !1, wi.forEach(e => e.complete()), wi.clear()
}

function xy() {
    wi.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (bf = !0)
    })
}

function sE() {
    xy(), by()
}

var Kf = class {
    constructor(e, t, n, r, i, o = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = o
    }

    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (wi.add(this), yf || (yf = !0, Y.read(xy), Y.resolveKeyframes(by))) : (this.readKeyframes(), this.complete())
    }

    readKeyframes() {
        let {unresolvedKeyframes: e, name: t, element: n, motionValue: r} = this;
        for (let i = 0; i < e.length; i++) if (e[i] === null) if (i === 0) {
            let o = r?.get(), s = e[e.length - 1];
            if (o !== void 0) e[0] = o; else if (n && t) {
                let a = n.readValue(t, s);
                a != null && (e[0] = a)
            }
            e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0])
        } else e[i] = e[i - 1]
    }

    setFinalKeyframe() {
    }

    measureInitialState() {
    }

    renderEndStyles() {
    }

    measureEndState() {
    }

    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), wi.delete(this)
    }

    cancel() {
        this.isComplete || (this.isScheduled = !1, wi.delete(this))
    }

    resume() {
        this.isComplete || this.scheduleResolve()
    }
}, Xa;

function aE() {
    Xa = void 0
}

var Gn = {
    now: () => (Xa === void 0 && Gn.set(Ue.isProcessing || ol.useManualTiming ? Ue.timestamp : performance.now()), Xa),
    set: e => {
        Xa = e, queueMicrotask(aE)
    }
}, Ja = {current: !1};

function ll(e) {
    return typeof e == "function"
}

var Hg = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (yr.test(e) || e === "0") && !e.startsWith("url("));

function lE(e) {
    let t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}

function cE(e, t, n, r) {
    let i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    let o = e[e.length - 1], s = Hg(i, t), a = Hg(o, t);
    return co(s === a, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !s || !a ? !1 : lE(e) || (n === "spring" || ll(n)) && r
}

var uE = e => e !== null;

function cl(e, {repeat: t, repeatType: n = "loop"}, r) {
    let i = e.filter(uE), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}

var fE = 40, wy = class {
    constructor({
                    autoplay: e = !0,
                    delay: t = 0,
                    type: n = "keyframes",
                    repeat: r = 0,
                    repeatDelay: i = 0,
                    repeatType: o = "loop",
                    ...s
                }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Gn.now(), this.options = {
            autoplay: e,
            delay: t,
            type: n,
            repeat: r,
            repeatDelay: i,
            repeatType: o, ...s
        }, this.updateFinishedPromise()
    }

    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > fE ? this.resolvedAt : this.createdAt : this.createdAt
    }

    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && sE(), this._resolved
    }

    onKeyframesResolved(e, t) {
        this.resolvedAt = Gn.now(), this.hasAttemptedResolve = !0;
        let {name: n, type: r, velocity: i, delay: o, onComplete: s, onUpdate: a, isGenerator: l} = this.options;
        if (!l && !cE(e, n, r, i)) if (Ja.current || !o) {
            a?.(cl(e, this.options, t)), s?.(), this.resolveFinishedPromise();
            return
        } else this.options.duration = 0;
        let c = this.initPlayback(e, t);
        c !== !1 && (this._resolved = {keyframes: e, finalKeyframe: t, ...c}, this.onPostResolved())
    }

    onPostResolved() {
    }

    then(e, t) {
        return this.currentFinishedPromise.then(e, t)
    }

    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}, xf = 2e4;

function Sy(e) {
    let t = 0, n = 50, r = e.next(t);
    for (; !r.done && t < xf;) t += n, r = e.next(t);
    return t >= xf ? 1 / 0 : t
}

var dE = e => {
    let t = ({timestamp: n}) => e(n);
    return {start: () => Y.update(t, !0), stop: () => Ct(t), now: () => Ue.isProcessing ? Ue.timestamp : Gn.now()}
}, hE = {decay: mf, inertia: mf, tween: vs, keyframes: vs, spring: Ss}, pE = e => e / 100, ul = class extends wy {
    constructor(e) {
        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            let {onStop: a} = this.options;
            a && a()
        };
        let {name: t, motionValue: n, element: r, keyframes: i} = this.options, o = r?.KeyframeResolver || Kf,
            s = (a, l) => this.onKeyframesResolved(a, l);
        this.resolver = new o(i, s, t, n, r), this.resolver.scheduleResolve()
    }

    initPlayback(e) {
        let {type: t = "keyframes", repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: o = 0} = this.options,
            s = ll(t) ? t : hE[t] || vs, a, l;
        s !== vs && typeof e[0] != "number" && (a = Un(pE, qf(e[0], e[1])), e = [0, 100]);
        let c = s({...this.options, keyframes: e});
        i === "mirror" && (l = s({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -o
        })), c.calculatedDuration === null && (c.calculatedDuration = Sy(c));
        let {calculatedDuration: u} = c, f = u + r, d = f * (n + 1) - r;
        return {
            generator: c,
            mirroredGenerator: l,
            mapPercentToKeyframes: a,
            calculatedDuration: u,
            resolvedDuration: f,
            totalDuration: d
        }
    }

    onPostResolved() {
        let {autoplay: e = !0} = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }

    tick(e, t = !1) {
        let {resolved: n} = this;
        if (!n) {
            let {keyframes: T} = this.options;
            return {done: !0, value: T[T.length - 1]}
        }
        let {
            finalKeyframe: r,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: s,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: c,
            resolvedDuration: u
        } = n;
        if (this.startTime === null) return i.next(0);
        let {delay: f, repeat: d, repeatType: m, repeatDelay: v, onUpdate: g} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), t ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        let b = this.currentTime - f * (this.speed >= 0 ? 1 : -1), p = this.speed >= 0 ? b < 0 : b > c;
        this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let h = this.currentTime, y = i;
        if (d) {
            let T = Math.min(this.currentTime, c) / u, E = Math.floor(T), O = T % 1;
            !O && T >= 1 && (O = 1), O === 1 && E--, E = Math.min(E, d + 1), !!(E % 2) && (m === "reverse" ? (O = 1 - O, v && (O -= v / u)) : m === "mirror" && (y = o)), h = vr(0, 1, O) * u
        }
        let w = p ? {done: !1, value: a[0]} : y.next(h);
        s && (w.value = s(w.value));
        let {done: k} = w;
        !p && l !== null && (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
        return S && r !== void 0 && (w.value = cl(a, this.options, r)), g && g(w.value), S && this.finish(), w
    }

    get duration() {
        let {resolved: e} = this;
        return e ? Wn(e.calculatedDuration) : 0
    }

    get time() {
        return Wn(this.currentTime)
    }

    set time(e) {
        e = Pn(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }

    get speed() {
        return this.playbackSpeed
    }

    set speed(e) {
        let t = this.playbackSpeed !== e;
        this.playbackSpeed = e, t && (this.time = Wn(this.currentTime))
    }

    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        let {driver: e = dE, onPlay: t, startTime: n} = this.options;
        this.driver || (this.driver = e(i => this.tick(i))), t && t();
        let r = this.driver.now();
        this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = r) : this.startTime = n ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }

    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }

    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }

    finish() {
        this.teardown(), this.state = "finished";
        let {onComplete: e} = this.options;
        e && e()
    }

    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }

    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }

    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }

    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
};

function Qf(e) {
    return new ul(e)
}

var ky = e => /^0[^.\s]+$/u.test(e);

function mE(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ky(e) : !0
}

var Cy = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), gE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function vE(e) {
    let t = gE.exec(e);
    if (!t) return [,];
    let [, n, r, i] = t;
    return [`--${n ?? r}`, i]
}

var yE = 4;

function Ty(e, t, n = 1) {
    Zt(n <= yE, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
    let [r, i] = vE(e);
    if (!r) return;
    let o = P.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        let s = o.trim();
        return Cy(s) ? parseFloat(s) : s
    }
    return Uf(i) ? Ty(i, t, n + 1) : i
}

var Ry = e => t => t.test(e), bE = {test: e => e === "auto", parse: e => e}, Ey = [uo, Z, Hn, Ar, wR, xR, bE],
    Wg = e => Ey.find(Ry(e)), xE = new Set(["brightness", "contrast", "saturate", "opacity"]);

function wE(e) {
    let [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    let [r] = n.match(Nf) || [];
    if (!r) return e;
    let i = n.replace(r, ""), o = xE.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}

var SE = /\b([a-z-]*)\(.*?\)/gu, wf = {
        ...yr, getAnimatableNone: e => {
            let t = e.match(SE);
            return t ? t.map(wE).join(" ") : e
        }
    }, kE = {
        borderWidth: Z,
        borderTopWidth: Z,
        borderRightWidth: Z,
        borderBottomWidth: Z,
        borderLeftWidth: Z,
        borderRadius: Z,
        radius: Z,
        borderTopLeftRadius: Z,
        borderTopRightRadius: Z,
        borderBottomRightRadius: Z,
        borderBottomLeftRadius: Z,
        width: Z,
        maxWidth: Z,
        height: Z,
        maxHeight: Z,
        top: Z,
        right: Z,
        bottom: Z,
        left: Z,
        padding: Z,
        paddingTop: Z,
        paddingRight: Z,
        paddingBottom: Z,
        paddingLeft: Z,
        margin: Z,
        marginTop: Z,
        marginRight: Z,
        marginBottom: Z,
        marginLeft: Z,
        backgroundPositionX: Z,
        backgroundPositionY: Z
    }, CE = {
        rotate: Ar,
        rotateX: Ar,
        rotateY: Ar,
        rotateZ: Ar,
        scale: Wa,
        scaleX: Wa,
        scaleY: Wa,
        scaleZ: Wa,
        skew: Ar,
        skewX: Ar,
        skewY: Ar,
        distance: Z,
        translateX: Z,
        translateY: Z,
        translateZ: Z,
        x: Z,
        y: Z,
        z: Z,
        perspective: Z,
        transformPerspective: Z,
        opacity: ms,
        originX: Mg,
        originY: Mg,
        originZ: Z
    }, Ug = {...uo, transform: Math.round},
    Zf = {...kE, ...CE, zIndex: Ug, size: Z, fillOpacity: ms, strokeOpacity: ms, numOctaves: Ug}, TE = {
        ...Zf,
        color: gt,
        backgroundColor: gt,
        outlineColor: gt,
        fill: gt,
        stroke: gt,
        borderColor: gt,
        borderTopColor: gt,
        borderRightColor: gt,
        borderBottomColor: gt,
        borderLeftColor: gt,
        filter: wf,
        WebkitFilter: wf
    }, Jf = e => TE[e];

function Fy(e, t) {
    let n = Jf(e);
    return n !== wf && (n = yr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}

var RE = new Set(["auto", "none", "0"]);

function EE(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i;) {
        let o = e[r];
        typeof o == "string" && !RE.has(o) && gs(o).values.length && (i = e[r]), r++
    }
    if (i && n) for (let o of t) e[o] = Fy(n, i)
}

var Py = class extends Kf {
    constructor(e, t, n, r, i) {
        super(e, t, n, r, i, !0)
    }

    readKeyframes() {
        let {unresolvedKeyframes: e, element: t, name: n} = this;
        if (!t || !t.current) return;
        super.readKeyframes();
        for (let a = 0; a < e.length; a++) {
            let l = e[a];
            if (typeof l == "string" && (l = l.trim(), Uf(l))) {
                let c = Ty(l, t.current);
                c !== void 0 && (e[a] = c), a === e.length - 1 && (this.finalKeyframe = l)
            }
        }
        if (this.resolveNoneKeyframes(), !nE.has(n) || e.length !== 2) return;
        let [r, i] = e, o = Wg(r), s = Wg(i);
        if (o !== s) if ($g(o) && $g(s)) for (let a = 0; a < e.length; a++) {
            let l = e[a];
            typeof l == "string" && (e[a] = parseFloat(l))
        } else this.needsMeasurement = !0
    }

    resolveNoneKeyframes() {
        let {unresolvedKeyframes: e, name: t} = this, n = [];
        for (let r = 0; r < e.length; r++) mE(e[r]) && n.push(r);
        n.length && EE(e, n, t)
    }

    measureInitialState() {
        let {element: e, unresolvedKeyframes: t, name: n} = this;
        if (!e || !e.current) return;
        n === "height" && (this.suspendedScrollY = P.pageYOffset), this.measuredOrigin = oo[n](e.measureViewportBox(), P.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
        let r = t[t.length - 1];
        r !== void 0 && e.getValue(n, r).jump(r, !1)
    }

    measureEndState() {
        var e;
        let {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current) return;
        let i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        let o = r.length - 1, s = r[o];
        r[o] = oo[n](t.measureViewportBox(), P.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([a, l]) => {
            t.getValue(a).set(l)
        }), this.resolveNoneKeyframes()
    }
}, _y = new Set(["opacity", "clipPath", "filter", "transform"]), FE = 10, PE = (e, t) => {
    let n = "", r = Math.max(Math.round(t / FE), 2);
    for (let i = 0; i < r; i++) n += e(br(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`
};

function ed(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}

var _E = {linearEasing: void 0};

function IE(e, t) {
    let n = ed(e);
    return () => {
        var r;
        return (r = _E[t]) !== null && r !== void 0 ? r : n()
    }
}

var el = IE(() => {
    try {
        document.createElement("div").animate({opacity: 0}, {easing: "linear(0, 1)"})
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function Iy(e) {
    return !!(typeof e == "function" && el() || !e || typeof e == "string" && (e in Sf || el()) || Xf(e) || Array.isArray(e) && e.every(Iy))
}

var ls = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Sf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ls([0, .65, .55, 1]),
    circOut: ls([.55, 0, 1, .45]),
    backIn: ls([.31, .01, .66, -.59]),
    backOut: ls([.33, 1.53, .69, .99])
};

function Oy(e, t) {
    if (e) return typeof e == "function" && el() ? PE(e, t) : Xf(e) ? ls(e) : Array.isArray(e) ? e.map(n => Oy(n, t) || Sf.easeOut) : Sf[e]
}

function OE(e, t, n, {delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a, times: l} = {}) {
    let c = {[t]: n};
    l && (c.offset = l);
    let u = Oy(a, i);
    return Array.isArray(u) && (c.easing = u), e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}

function Gg(e, t) {
    e.timeline = t, e.onfinish = null
}

var ME = ed(() => Object.hasOwnProperty.call(Element.prototype, "animate")), tl = 10, LE = 2e4;

function VE(e) {
    return ll(e.type) || e.type === "spring" || !Iy(e.ease)
}

function AE(e, t) {
    let n = new ul({...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0}), r = {done: !1, value: e[0]}, i = [],
        o = 0;
    for (; !r.done && o < LE;) r = n.sample(o), i.push(r.value), o += tl;
    return {times: void 0, keyframes: i, duration: o - tl, ease: "linear"}
}

var My = {anticipate: zf, backInOut: Df, circInOut: $f};

function DE(e) {
    return e in My
}

var kf = class extends wy {
    constructor(e) {
        super(e);
        let {name: t, motionValue: n, element: r, keyframes: i} = this.options;
        this.resolver = new Py(i, (o, s) => this.onKeyframesResolved(o, s), t, n, r), this.resolver.scheduleResolve()
    }

    initPlayback(e, t) {
        var n;
        let {duration: r = 300, times: i, ease: o, type: s, motionValue: a, name: l, startTime: c} = this.options;
        if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;
        if (typeof o == "string" && el() && DE(o) && (o = My[o]), VE(this.options)) {
            let {onComplete: f, onUpdate: d, motionValue: m, element: v, ...g} = this.options, b = AE(e, g);
            e = b.keyframes, e.length === 1 && (e[1] = e[0]), r = b.duration, i = b.times, o = b.ease, s = "keyframes"
        }
        let u = OE(a.owner.current, l, e, {...this.options, duration: r, times: i, ease: o});
        return u.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (Gg(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
            let {onComplete: f} = this.options;
            a.set(cl(e, this.options, t)), f && f(), this.cancel(), this.resolveFinishedPromise()
        }, {animation: u, duration: r, times: i, type: s, ease: o, keyframes: e}
    }

    get duration() {
        let {resolved: e} = this;
        if (!e) return 0;
        let {duration: t} = e;
        return Wn(t)
    }

    get time() {
        let {resolved: e} = this;
        if (!e) return 0;
        let {animation: t} = e;
        return Wn(t.currentTime || 0)
    }

    set time(e) {
        let {resolved: t} = this;
        if (!t) return;
        let {animation: n} = t;
        n.currentTime = Pn(e)
    }

    get speed() {
        let {resolved: e} = this;
        if (!e) return 1;
        let {animation: t} = e;
        return t.playbackRate
    }

    set speed(e) {
        let {resolved: t} = this;
        if (!t) return;
        let {animation: n} = t;
        n.playbackRate = e
    }

    get state() {
        let {resolved: e} = this;
        if (!e) return "idle";
        let {animation: t} = e;
        return t.playState
    }

    get startTime() {
        let {resolved: e} = this;
        if (!e) return null;
        let {animation: t} = e;
        return t.startTime
    }

    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e; else {
            let {resolved: t} = this;
            if (!t) return vt;
            let {animation: n} = t;
            Gg(n, e)
        }
        return vt
    }

    play() {
        if (this.isStopped) return;
        let {resolved: e} = this;
        if (!e) return;
        let {animation: t} = e;
        t.playState === "finished" && this.updateFinishedPromise(), t.play()
    }

    pause() {
        let {resolved: e} = this;
        if (!e) return;
        let {animation: t} = e;
        t.pause()
    }

    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        let {resolved: e} = this;
        if (!e) return;
        let {animation: t, keyframes: n, duration: r, type: i, ease: o, times: s} = e;
        if (t.playState === "idle" || t.playState === "finished") return;
        if (this.time) {
            let {motionValue: l, onUpdate: c, onComplete: u, element: f, ...d} = this.options,
                m = new ul({...d, keyframes: n, duration: r, type: i, ease: o, times: s, isGenerator: !0}),
                v = Pn(this.time);
            l.setWithVelocity(m.sample(v - tl).value, m.sample(v).value, tl)
        }
        let {onStop: a} = this.options;
        a && a(), this.cancel()
    }

    complete() {
        let {resolved: e} = this;
        e && e.animation.finish()
    }

    cancel() {
        let {resolved: e} = this;
        e && e.animation.cancel()
    }

    static supports(e) {
        let {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: o, type: s} = e;
        return ME() && n && _y.has(n) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !r && i !== "mirror" && o !== 0 && s !== "inertia"
    }
};

function td(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function fl(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}

function zE([...e], t, n) {
    let r = t < 0 ? e.length + t : t;
    if (r >= 0 && r < e.length) {
        let i = n < 0 ? e.length + n : n, [o] = e.splice(t, 1);
        e.splice(i, 0, o)
    }
    return e
}

var nd = class {
    constructor() {
        this.subscriptions = []
    }

    add(e) {
        return td(this.subscriptions, e), () => fl(this.subscriptions, e)
    }

    notify(e, t, n) {
        let r = this.subscriptions.length;
        if (r) if (r === 1) this.subscriptions[0](e, t, n); else for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n)
        }
    }

    getSize() {
        return this.subscriptions.length
    }

    clear() {
        this.subscriptions.length = 0
    }
}, qg = 30, BE = e => !isNaN(parseFloat(e)), fs = {current: void 0}, dl = class {
    constructor(e, t = {}) {
        this.version = "11.11.7", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n, r = !0) => {
            let i = Gn.now();
            this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), r && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
    }

    setCurrent(e) {
        this.current = e, this.updatedAt = Gn.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = BE(this.current))
    }

    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }

    onChange(e) {
        return this.on("change", e)
    }

    on(e, t) {
        this.events[e] || (this.events[e] = new nd);
        let n = this.events[e].add(t);
        return e === "change" ? () => {
            n(), Y.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : n
    }

    clearListeners() {
        for (let e in this.events) this.events[e].clear()
    }

    attach(e, t) {
        this.passiveEffect = e, this.stopPassiveEffect = t
    }

    set(e, t = !0) {
        !t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify)
    }

    setWithVelocity(e, t, n) {
        this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n
    }

    jump(e, t = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }

    get() {
        return fs.current && fs.current.push(this), this.current
    }

    getPrevious() {
        return this.prev
    }

    getVelocity() {
        let e = Gn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > qg) return 0;
        let t = Math.min(this.updatedAt - this.prevUpdatedAt, qg);
        return Hf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
    }

    start(e) {
        return this.stop(), new Promise(t => {
            this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }

    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }

    isAnimating() {
        return !!this.animation
    }

    clearAnimation() {
        delete this.animation
    }

    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
};

function Ge(e, t) {
    return new dl(e, t)
}

var hl = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), $E = "framerAppearId", pl = "data-" + hl($E),
    ze = e => !!(e && e.getVelocity);

function Xg(e) {
    let t = [{}, {}];
    return e?.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function rd(e, t, n, r) {
    if (typeof t == "function") {
        let [i, o] = Xg(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        let [i, o] = Xg(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}

function ml(e, t, n) {
    let r = e.getProps();
    return rd(r, t, n !== void 0 ? n : r.custom, e)
}

var NE = {type: "spring", stiffness: 500, damping: 25, restSpeed: 10},
    jE = e => ({type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10}),
    HE = {type: "keyframes", duration: .8}, WE = {type: "keyframes", ease: [.25, .1, .35, 1], duration: .3},
    UE = (e, {keyframes: t}) => t.length > 2 ? HE : zr.has(e) ? e.startsWith("scale") ? jE(t[1]) : NE : WE;

function id(e, t) {
    return e ? e[t] || e.default || e : void 0
}

var Ly = ed(() => P.ScrollTimeline !== void 0), Vy = class {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }

    then(e, t) {
        return Promise.all(this.animations).then(e).catch(t)
    }

    getAll(e) {
        return this.animations[0][e]
    }

    setAll(e, t) {
        for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
    }

    attachTimeline(e, t) {
        let n = this.animations.map(r => Ly() && r.attachTimeline ? r.attachTimeline(e) : t(r));
        return () => {
            n.forEach((r, i) => {
                r && r(), this.animations[i].stop()
            })
        }
    }

    get time() {
        return this.getAll("time")
    }

    set time(e) {
        this.setAll("time", e)
    }

    get speed() {
        return this.getAll("speed")
    }

    set speed(e) {
        this.setAll("speed", e)
    }

    get startTime() {
        return this.getAll("startTime")
    }

    get duration() {
        let e = 0;
        for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
        return e
    }

    runAll(e) {
        this.animations.forEach(t => t[e]())
    }

    play() {
        this.runAll("play")
    }

    pause() {
        this.runAll("pause")
    }

    cancel() {
        this.runAll("cancel")
    }

    complete() {
        this.runAll("complete")
    }
};

function GE({
                when: e,
                delay: t,
                delayChildren: n,
                staggerChildren: r,
                staggerDirection: i,
                repeat: o,
                repeatType: s,
                repeatDelay: a,
                from: l,
                elapsed: c,
                ...u
            }) {
    return !!Object.keys(u).length
}

var od = (e, t, n, r = {}, i, o) => s => {
        let a = id(r, e) || {}, l = a.delay || r.delay || 0, {elapsed: c = 0} = r;
        c = c - Pn(l);
        let u = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: t.getVelocity(), ...a,
            delay: -c,
            onUpdate: d => {
                t.set(d), a.onUpdate && a.onUpdate(d)
            },
            onComplete: () => {
                s(), a.onComplete && a.onComplete()
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : i
        };
        GE(a) || (u = {...u, ...UE(e, u)}), u.duration && (u.duration = Pn(u.duration)), u.repeatDelay && (u.repeatDelay = Pn(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
        let f = !1;
        if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), (Ja.current || ol.skipAnimations) && (f = !0, u.duration = 0, u.delay = 0), f && !o && t.get() !== void 0) {
            let d = cl(u.keyframes, a);
            if (d !== void 0) return Y.update(() => {
                u.onUpdate(d), u.onComplete()
            }), new Vy([])
        }
        return !o && kf.supports(u) ? new kf(u) : new ul(u)
    }, Cf = e => Array.isArray(e), qE = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    XE = e => Cf(e) ? e[e.length - 1] || 0 : e;

function YE(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ge(n))
}

function sd(e, t) {
    let n = ml(e, t), {transitionEnd: r = {}, transition: i = {}, ...o} = n || {};
    o = {...o, ...r};
    for (let s in o) {
        let a = XE(o[s]);
        YE(e, s, a)
    }
}

function Ay(e) {
    return e.props[pl]
}

function KE(e) {
    return !!(ze(e) && e.add)
}

function Dy(e) {
    if (zr.has(e)) return "transform";
    if (_y.has(e)) return hl(e)
}

function Tf(e, t) {
    var n;
    if (!e.applyWillChange) return;
    let r = e.getValue("willChange");
    if (KE(r)) return r.add(t);
    !(!((n = e.props.style) === null || n === void 0) && n.willChange) && Dy(t) && e.setStaticValue("willChange", "transform")
}

function QE({protectedKeys: e, needsAnimating: t}, n) {
    let r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function ad(e, t, {delay: n = 0, transitionOverride: r, type: i} = {}) {
    var o;
    let {transition: s = e.getDefaultTransition(), transitionEnd: a, ...l} = t;
    r && (s = r);
    let c = [], u = i && e.animationState && e.animationState.getState()[i];
    for (let f in l) {
        let d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null), m = l[f];
        if (m === void 0 || u && QE(u, f)) continue;
        let v = {delay: n, ...id(s || {}, f)}, g = !1;
        if (P.MotionHandoffAnimation) {
            let p = Ay(e);
            if (p) {
                let h = P.MotionHandoffAnimation(p, f, Y);
                h !== null && (v.startTime = h, g = !0)
            }
        }
        Tf(e, f), d.start(od(f, d, m, e.shouldReduceMotion && zr.has(f) ? {type: !1} : v, e, g));
        let b = d.animation;
        b && c.push(b)
    }
    return a && Promise.all(c).then(() => {
        Y.update(() => {
            a && sd(e, a)
        })
    }), c
}

function Rf(e, t, n = {}) {
    var r;
    let i = ml(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0), {transition: o = e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    let s = i ? () => Promise.all(ad(e, i, n)) : () => Promise.resolve(),
        a = e.variantChildren && e.variantChildren.size ? (c = 0) => {
            let {delayChildren: u = 0, staggerChildren: f, staggerDirection: d} = o;
            return ZE(e, t, u + c, f, d, n)
        } : () => Promise.resolve(), {when: l} = o;
    if (l) {
        let [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
        return c().then(() => u())
    } else return Promise.all([s(), a(n.delay)])
}

function ZE(e, t, n = 0, r = 0, i = 1, o) {
    let s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
    return Array.from(e.variantChildren).sort(JE).forEach((c, u) => {
        c.notify("AnimationStart", t), s.push(Rf(c, t, {
            ...o,
            delay: n + l(u)
        }).then(() => c.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function JE(e, t) {
    return e.sortNodePosition(t)
}

function ld(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        let i = t.map(o => Rf(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = Rf(e, t, n); else {
        let i = typeof t == "function" ? ml(e, t, n.custom) : t;
        r = Promise.all(ad(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}

function ys(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function zy(e, t) {
    if (!Array.isArray(t)) return !1;
    let n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0
}

function bs(e) {
    return typeof e == "string" || Array.isArray(e)
}

var cd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    ud = ["initial", ...cd], eF = ud.length;

function By(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        let n = e.parent ? By(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    let t = {};
    for (let n = 0; n < eF; n++) {
        let r = ud[n], i = e.props[r];
        (bs(i) || i === !1) && (t[r] = i)
    }
    return t
}

var tF = [...cd].reverse(), nF = cd.length;

function rF(e) {
    return t => Promise.all(t.map(({animation: n, options: r}) => ld(e, n, r)))
}

function iF(e) {
    let t = rF(e), n = Yg(), r = !0, i = l => (c, u) => {
        var f;
        let d = ml(e, u, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (d) {
            let {transition: m, transitionEnd: v, ...g} = d;
            c = {...c, ...g, ...v}
        }
        return c
    };

    function o(l) {
        t = l(e)
    }

    function s(l) {
        let {props: c} = e, u = By(e.parent) || {}, f = [], d = new Set, m = {}, v = 1 / 0;
        for (let b = 0; b < nF; b++) {
            let p = tF[b], h = n[p], y = c[p] !== void 0 ? c[p] : u[p], w = bs(y), k = p === l ? h.isActive : null;
            k === !1 && (v = b);
            let S = y === u[p] && y !== c[p] && w;
            if (S && r && e.manuallyAnimateOnMount && (S = !1), h.protectedKeys = {...m}, !h.isActive && k === null || !y && !h.prevProp || ys(y) || typeof y == "boolean") continue;
            let T = oF(h.prevProp, y), E = T || p === l && h.isActive && !S && w || b > v && w, O = !1,
                I = Array.isArray(y) ? y : [y], B = I.reduce(i(p), {});
            k === !1 && (B = {});
            let {prevResolvedValues: z = {}} = h, j = {...z, ...B}, J = ie => {
                E = !0, d.has(ie) && (O = !0, d.delete(ie)), h.needsAnimating[ie] = !0;
                let q = e.getValue(ie);
                q && (q.liveStyle = !1)
            };
            for (let ie in j) {
                let q = B[ie], re = z[ie];
                if (m.hasOwnProperty(ie)) continue;
                let W = !1;
                Cf(q) && Cf(re) ? W = !zy(q, re) : W = q !== re, W ? q != null ? J(ie) : d.add(ie) : q !== void 0 && d.has(ie) ? J(ie) : h.protectedKeys[ie] = !0
            }
            h.prevProp = y, h.prevResolvedValues = B, h.isActive && (m = {...m, ...B}), r && e.blockInitialAnimation && (E = !1), E && (!(S && T) || O) && f.push(...I.map(ie => ({
                animation: ie,
                options: {type: p}
            })))
        }
        if (d.size) {
            let b = {};
            d.forEach(p => {
                let h = e.getBaseTarget(p), y = e.getValue(p);
                y && (y.liveStyle = !0), b[p] = h ?? null
            }), f.push({animation: b})
        }
        let g = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(f) : Promise.resolve()
    }

    function a(l, c) {
        var u;
        if (n[l].isActive === c) return Promise.resolve();
        (u = e.variantChildren) === null || u === void 0 || u.forEach(d => {
            var m;
            return (m = d.animationState) === null || m === void 0 ? void 0 : m.setActive(l, c)
        }), n[l].isActive = c;
        let f = s(l);
        for (let d in n) n[d].protectedKeys = {};
        return f
    }

    return {
        animateChanges: s, setActive: a, setAnimateFunction: o, getState: () => n, reset: () => {
            n = Yg(), r = !0
        }
    }
}

function oF(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !zy(t, e) : !1
}

function vi(e = !1) {
    return {isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {}}
}

function Yg() {
    return {
        animate: vi(!0),
        whileInView: vi(),
        whileHover: vi(),
        whileTap: vi(),
        whileDrag: vi(),
        whileFocus: vi(),
        exit: vi()
    }
}

var Br = class {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }

        update() {
        }
    }, sF = class extends Br {
        constructor(e) {
            super(e), e.animationState || (e.animationState = iF(e))
        }

        updateAnimationControlsSubscription() {
            let {animate: e} = this.node.getProps();
            ys(e) && (this.unmountControls = e.subscribe(this.node))
        }

        mount() {
            this.updateAnimationControlsSubscription()
        }

        update() {
            let {animate: e} = this.node.getProps(), {animate: t} = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription()
        }

        unmount() {
            var e;
            this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
        }
    }, aF = 0, lF = class extends Br {
        constructor() {
            super(...arguments), this.id = aF++
        }

        update() {
            if (!this.node.presenceContext) return;
            let {
                isPresent: e,
                onExitComplete: t
            } = this.node.presenceContext, {isPresent: n} = this.node.prevPresenceContext || {};
            if (!this.node.animationState || e === n) return;
            let r = this.node.animationState.setActive("exit", !e);
            t && !e && r.then(() => t(this.id))
        }

        mount() {
            let {register: e} = this.node.presenceContext || {};
            e && (this.unmount = e(this.id))
        }

        unmount() {
        }
    }, gl = {animation: {Feature: sF}, exit: {Feature: lF}},
    $y = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function vl(e, t = "page") {
    return {point: {x: e[`${t}X`], y: e[`${t}Y`]}}
}

var Ny = e => t => $y(t) && e(t, vl(t));

function gr(e, t, n, r = {passive: !0}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function qn(e, t, n, r) {
    return gr(e, t, Ny(n), r)
}

var Ef = (e, t) => Math.abs(e - t);

function jy(e, t) {
    let n = Ef(e.x, t.x), r = Ef(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}

function Hy(e) {
    let t = null;
    return () => {
        let n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}

var Kg = Hy("dragHorizontal"), Qg = Hy("dragVertical");

function Wy(e) {
    let t = !1;
    if (e === "y") t = Qg(); else if (e === "x") t = Kg(); else {
        let n = Kg(), r = Qg();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function fd() {
    let e = Wy(!0);
    return e ? (e(), !1) : !0
}

var Uy = 1e-4, cF = 1 - Uy, uF = 1 + Uy, Gy = .01, fF = 0 - Gy, dF = 0 + Gy;

function Nt(e) {
    return e.max - e.min
}

function hF(e, t, n) {
    return Math.abs(e - t) <= n
}

function Zg(e, t, n, r = .5) {
    e.origin = r, e.originPoint = Ie(t.min, t.max, e.origin), e.scale = Nt(n) / Nt(t), e.translate = Ie(n.min, n.max, e.origin) - e.originPoint, (e.scale >= cF && e.scale <= uF || isNaN(e.scale)) && (e.scale = 1), (e.translate >= fF && e.translate <= dF || isNaN(e.translate)) && (e.translate = 0)
}

function ds(e, t, n, r) {
    Zg(e.x, t.x, n.x, r ? r.originX : void 0), Zg(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Jg(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Nt(t)
}

function pF(e, t, n) {
    Jg(e.x, t.x, n.x), Jg(e.y, t.y, n.y)
}

function ev(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Nt(t)
}

function hs(e, t, n) {
    ev(e.x, t.x, n.x), ev(e.y, t.y, n.y)
}

var tv = () => ({translate: 0, scale: 1, origin: 0, originPoint: 0}), to = () => ({x: tv(), y: tv()}),
    nv = () => ({min: 0, max: 0}), $e = () => ({x: nv(), y: nv()}), ho = ve(null);

function dd() {
    let e = A(ho);
    if (e === null) return [!0, null];
    let {isPresent: t, onExitComplete: n, register: r} = e, i = gi();
    $(() => r(i), []);
    let o = Q(() => n && n(i), [i, n]);
    return !t && n ? [!1, o] : [!0]
}

var xs = ve({}), yl = ve({}), nl = {};

function hd(e) {
    Object.assign(nl, e)
}

var mF = (e, t) => e.depth - t.depth, qy = class {
    constructor() {
        this.children = [], this.isDirty = !1
    }

    add(e) {
        td(this.children, e), this.isDirty = !0
    }

    remove(e) {
        fl(this.children, e), this.isDirty = !0
    }

    forEach(e) {
        this.isDirty && this.children.sort(mF), this.isDirty = !1, this.children.forEach(e)
    }
};

function kt(e) {
    let t = ze(e) ? e.get() : e;
    return qE(t) ? t.toValue() : t
}

function Xy(e, t) {
    let n = Gn.now(), r = ({timestamp: i}) => {
        let o = i - n;
        o >= t && (Ct(r), e(o - t))
    };
    return Y.read(r, !0), () => Ct(r)
}

var Xn = ve({transformPagePoint: e => e, isStatic: !1, reducedMotion: "never"}), Cs = ve({}), bl = typeof P < "u",
    $r = bl ? Ae : $, Yy = ve({strict: !1}), {schedule: pd, cancel: R$} = ry(queueMicrotask, !1);

function no(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function gF(e, t, n, r, i) {
    var o, s;
    let {visualElement: a} = A(Cs), l = A(Yy), c = A(ho), u = A(Xn).reducedMotion, f = V();
    r = r || l.renderer, !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u
    }));
    let d = f.current, m = A(yl);
    d && !d.projection && i && (d.type === "html" || d.type === "svg") && vF(f.current, n, i, m), lt(() => {
        d && d.update(n, c)
    });
    let v = n[pl],
        g = V(!!v && !(!((o = P.MotionHandoffIsComplete) === null || o === void 0) && o.call(P, v)) && ((s = P.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(P, v)));
    return $r(() => {
        d && (P.MotionIsMounted = !0, d.updateFeatures(), pd.render(d.render), g.current && d.animationState && d.animationState.animateChanges())
    }), $(() => {
        d && (!g.current && d.animationState && d.animationState.animateChanges(), g.current && (queueMicrotask(() => {
            var b;
            (b = P.MotionHandoffMarkAsComplete) === null || b === void 0 || b.call(P, v)
        }), g.current = !1))
    }), d
}

function vF(e, t, n, r) {
    let {layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: c} = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Ky(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || a && no(a),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: c
    })
}

function Ky(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : Ky(e.parent)
}

function yF(e, t, n) {
    return Q(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : no(n) && (n.current = r))
    }, [t])
}

function xl(e) {
    return ys(e.animate) || ud.some(t => bs(e[t]))
}

function Qy(e) {
    return !!(xl(e) || e.variants)
}

function bF(e, t) {
    if (xl(e)) {
        let {initial: n, animate: r} = e;
        return {initial: n === !1 || bs(n) ? n : void 0, animate: bs(r) ? r : void 0}
    }
    return e.inherit !== !1 ? t : {}
}

function xF(e) {
    let {initial: t, animate: n} = bF(e, A(Cs));
    return se(() => ({initial: t, animate: n}), [rv(t), rv(n)])
}

function rv(e) {
    return Array.isArray(e) ? e.join(" ") : e
}

var iv = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, so = {};
for (let e in iv) so[e] = {isEnabled: t => iv[e].some(n => !!t[n])};

function wF(e) {
    for (let t in e) so[t] = {...so[t], ...e[t]}
}

var md = Symbol.for("motionComponentSymbol");

function Zy({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && wF(e);

    function o(a, l) {
        let c, u = {...A(Xn), ...a, layoutId: SF(a)}, {isStatic: f} = u, d = xF(a), m = r(a, f);
        if (!f && bl) {
            kF(u, e);
            let v = CF(u);
            c = v.MeasureLayout, d.visualElement = gF(i, m, u, t, v.ProjectionNode)
        }
        return de(Cs.Provider, {
            value: d,
            children: [c && d.visualElement ? C(c, {visualElement: d.visualElement, ...u}) : null, n(i, a, yF(m, d.visualElement, l), m, f, d.visualElement)]
        })
    }

    let s = Ve(o);
    return s[md] = i, s
}

function SF({layoutId: e}) {
    let t = A(xs).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function kF(e, t) {
    let n = A(Yy).strict
}

function CF(e) {
    let {drag: t, layout: n} = so;
    if (!t && !n) return {};
    let r = {...t, ...n};
    return {
        MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}

function Kn(e) {
    let t = V(null);
    return t.current === null && (t.current = e()), t.current
}

function TF({applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r}, i, o, s, a) {
    let l = {latestValues: RF(i, o, s, a ? !1 : e, t), renderState: n()};
    return r && (l.mount = c => r(i, c, l)), l
}

var wl = e => (t, n) => {
    let r = A(Cs), i = A(ho), o = () => TF(e, t, r, i, n);
    return n ? o() : Kn(o)
};

function ov(e, t, n) {
    let r = Array.isArray(t) ? t : [t];
    for (let i = 0; i < r.length; i++) {
        let o = rd(e, r[i]);
        if (o) {
            let {transitionEnd: s, transition: a, ...l} = o;
            n(l, s)
        }
    }
}

function RF(e, t, n, r, i) {
    var o;
    let s = {}, a = r && ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0, l = i(e, {});
    for (let g in l) s[g] = kt(l[g]);
    let {initial: c, animate: u} = e, f = xl(e), d = Qy(e);
    t && d && !f && e.inherit !== !1 && (c === void 0 && (c = t.initial), u === void 0 && (u = t.animate));
    let m = n ? n.initial === !1 : !1;
    m = m || c === !1;
    let v = m ? u : c;
    return v && typeof v != "boolean" && !ys(v) && ov(e, v, (g, b) => {
        for (let p in g) {
            let h = g[p];
            if (Array.isArray(h)) {
                let y = m ? h.length - 1 : 0;
                h = h[y]
            }
            h !== null && (s[p] = h)
        }
        for (let p in b) s[p] = b[p]
    }), a && u && c !== !1 && !ys(u) && ov(e, u, g => {
        for (let b in g) if (Dy(b)) {
            s.willChange = "transform";
            return
        }
    }), s
}

var Jy = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    EF = {x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective"}, FF = ks.length;

function e0(e, t, n) {
    let r = "", i = !0;
    for (let o = 0; o < FF; o++) {
        let s = ks[o], a = e[s];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            let c = Jy(a, Zf[s]);
            if (!l) {
                i = !1;
                let u = EF[s] || s;
                r += `${u}(${c}) `
            }
            n && (t[s] = c)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

var PF = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function ao(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || PF.has(e)
}

var t0 = e => !ao(e);

function n0(e) {
    e && (t0 = t => t.startsWith("on") ? !ao(t) : e(t))
}

try {
    n0(pR().default)
} catch {
}

function r0(e, t, n) {
    let r = {};
    for (let i in e) i === "values" && typeof e.values == "object" || (t0(i) || n === !0 && ao(i) || !t && !ao(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

var Yn = new WeakMap, rl = {current: null}, gd = {current: !1};

function i0() {
    if (gd.current = !0, !!bl) if (P.matchMedia) {
        let e = P.matchMedia("(prefers-reduced-motion)"), t = () => rl.current = e.matches;
        e.addListener(t), t()
    } else rl.current = !1
}

function _F(e, t, n) {
    for (let r in t) {
        let i = t[r], o = n[r];
        if (ze(i)) e.addValue(r, i); else if (ze(o)) e.addValue(r, Ge(i, {owner: e})); else if (o !== i) if (e.hasValue(r)) {
            let s = e.getValue(r);
            s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
        } else {
            let s = e.getStaticValue(r);
            e.addValue(r, Ge(s !== void 0 ? s : i, {owner: e}))
        }
    }
    for (let r in n) t[r] === void 0 && e.removeValue(r);
    return t
}

var IF = [...Ey, gt, yr], OF = e => IF.find(Ry(e)),
    sv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    vd = class {
        scrapeMotionValuesFromProps(e, t, n) {
            return {}
        }

        constructor({
                        parent: e,
                        props: t,
                        presenceContext: n,
                        reducedMotionConfig: r,
                        blockInitialAnimation: i,
                        visualState: o
                    }, s = {}) {
            this.applyWillChange = !1, this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Kf, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let f = Gn.now();
                this.renderScheduledAt < f && (this.renderScheduledAt = f, Y.render(this.render, !1, !0))
            };
            let {latestValues: a, renderState: l} = o;
            this.latestValues = a, this.baseTarget = {...a}, this.initialValues = t.initial ? {...a} : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.blockInitialAnimation = !!i, this.isControllingVariants = xl(t), this.isVariantNode = Qy(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
            let {willChange: c, ...u} = this.scrapeMotionValuesFromProps(t, {}, this);
            for (let f in u) {
                let d = u[f];
                a[f] !== void 0 && ze(d) && d.set(a[f], !1)
            }
        }

        mount(e) {
            this.current = e, Yn.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, n) => this.bindToMotionValue(n, t)), gd.current || i0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : rl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
        }

        unmount() {
            Yn.delete(this.current), this.projection && this.projection.unmount(), Ct(this.notifyUpdate), Ct(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
            for (let e in this.events) this.events[e].clear();
            for (let e in this.features) {
                let t = this.features[e];
                t && (t.unmount(), t.isMounted = !1)
            }
            this.current = null
        }

        bindToMotionValue(e, t) {
            this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
            let n = zr.has(e), r = t.on("change", s => {
                this.latestValues[e] = s, this.props.onUpdate && Y.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
            }), i = t.on("renderRequest", this.scheduleRender), o;
            P.MotionCheckAppearSync && (o = P.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
                r(), i(), o && o(), t.owner && t.stop()
            })
        }

        sortNodePosition(e) {
            return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
        }

        updateFeatures() {
            let e = "animation";
            for (e in so) {
                let t = so[e];
                if (!t) continue;
                let {isEnabled: n, Feature: r} = t;
                if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
                    let i = this.features[e];
                    i.isMounted ? i.update() : (i.mount(), i.isMounted = !0)
                }
            }
        }

        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }

        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : $e()
        }

        getStaticValue(e) {
            return this.latestValues[e]
        }

        setStaticValue(e, t) {
            this.latestValues[e] = t
        }

        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
            for (let n = 0; n < sv.length; n++) {
                let r = sv[n];
                this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                let i = "on" + r, o = e[i];
                o && (this.propEventSubscriptions[r] = this.on(r, o))
            }
            this.prevMotionValues = _F(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }

        getProps() {
            return this.props
        }

        getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0
        }

        getDefaultTransition() {
            return this.props.transition
        }

        getTransformPagePoint() {
            return this.props.transformPagePoint
        }

        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }

        addVariantChild(e) {
            let t = this.getClosestVariantNode();
            if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }

        addValue(e, t) {
            let n = this.values.get(e);
            t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
        }

        removeValue(e) {
            this.values.delete(e);
            let t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }

        hasValue(e) {
            return this.values.has(e)
        }

        getValue(e, t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            let n = this.values.get(e);
            return n === void 0 && t !== void 0 && (n = Ge(t === null ? void 0 : t, {owner: this}), this.addValue(e, n)), n
        }

        readValue(e, t) {
            var n;
            let r = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options);
            return r != null && (typeof r == "string" && (Cy(r) || ky(r)) ? r = parseFloat(r) : !OF(r) && yr.test(t) && (r = Fy(e, t)), this.setBaseTarget(e, ze(r) ? r.get() : r)), ze(r) ? r.get() : r
        }

        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }

        getBaseTarget(e) {
            var t;
            let {initial: n} = this.props, r;
            if (typeof n == "string" || typeof n == "object") {
                let o = rd(this.props, n, (t = this.presenceContext) === null || t === void 0 ? void 0 : t.custom);
                o && (r = o[e])
            }
            if (n && r !== void 0) return r;
            let i = this.getBaseTargetFromProps(this.props, e);
            return i !== void 0 && !ze(i) ? i : this.initialValues[e] !== void 0 && r === void 0 ? void 0 : this.baseTarget[e]
        }

        on(e, t) {
            return this.events[e] || (this.events[e] = new nd), this.events[e].add(t)
        }

        notify(e, ...t) {
            this.events[e] && this.events[e].notify(...t)
        }
    };

function MF(e) {
    if (typeof Proxy > "u") return e;
    let t = new Map, n = (...r) => e(...r);
    return new Proxy(n, {get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))})
}

var o0 = class {
    constructor(e, t, {transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1} = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = P, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            let u = of(this.lastMoveEventInfo, this.history), f = this.startEvent !== null,
                d = jy(u.offset, {x: 0, y: 0}) >= 3;
            if (!f && !d) return;
            let {point: m} = u, {timestamp: v} = Ue;
            this.history.push({...m, timestamp: v});
            let {onStart: g, onMove: b} = this.handlers;
            f || (g && g(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, u)
        }, this.handlePointerMove = (u, f) => {
            this.lastMoveEvent = u, this.lastMoveEventInfo = rf(f, this.transformPagePoint), Y.update(this.updatePoint, !0)
        }, this.handlePointerUp = (u, f) => {
            this.end();
            let {onEnd: d, onSessionEnd: m, resumeAnimation: v} = this.handlers;
            if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            let g = of(u.type === "pointercancel" ? this.lastMoveEventInfo : rf(f, this.transformPagePoint), this.history);
            this.startEvent && d && d(u, g), m && m(u, g)
        }, !$y(e)) return;
        this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || P;
        let o = vl(e), s = rf(o, this.transformPagePoint), {point: a} = s, {timestamp: l} = Ue;
        this.history = [{...a, timestamp: l}];
        let {onSessionStart: c} = t;
        c && c(e, of(s, this.history)), this.removeListeners = Un(qn(this.contextWindow, "pointermove", this.handlePointerMove), qn(this.contextWindow, "pointerup", this.handlePointerUp), qn(this.contextWindow, "pointercancel", this.handlePointerUp))
    }

    updateHandlers(e) {
        this.handlers = e
    }

    end() {
        this.removeListeners && this.removeListeners(), Ct(this.updatePoint)
    }
};

function rf(e, t) {
    return t ? {point: t(e.point)} : e
}

function av(e, t) {
    return {x: e.x - t.x, y: e.y - t.y}
}

function of({point: e}, t) {
    return {point: e, delta: av(e, s0(t)), offset: av(e, LF(t)), velocity: VF(t, .1)}
}

function LF(e) {
    return e[0]
}

function s0(e) {
    return e[e.length - 1]
}

function VF(e, t) {
    if (e.length < 2) return {x: 0, y: 0};
    let n = e.length - 1, r = null, i = s0(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Pn(t)));) n--;
    if (!r) return {x: 0, y: 0};
    let o = Wn(i.timestamp - r.timestamp);
    if (o === 0) return {x: 0, y: 0};
    let s = {x: (i.x - r.x) / o, y: (i.y - r.y) / o};
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function AF(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? Ie(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Ie(n, e, r.max) : Math.min(e, n)), e
}

function lv(e, t, n) {
    return {min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0}
}

function DF(e, {top: t, left: n, bottom: r, right: i}) {
    return {x: lv(e.x, n, i), y: lv(e.y, t, r)}
}

function cv(e, t) {
    let n = t.min - e.min, r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {min: n, max: r}
}

function zF(e, t) {
    return {x: cv(e.x, t.x), y: cv(e.y, t.y)}
}

function BF(e, t) {
    let n = .5, r = Nt(e), i = Nt(t);
    return i > r ? n = br(t.min, t.max - r, e.min) : r > i && (n = br(e.min, e.max - i, t.min)), vr(0, 1, n)
}

function $F(e, t) {
    let n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}

var Ff = .35;

function NF(e = Ff) {
    return e === !1 ? e = 0 : e === !0 && (e = Ff), {x: uv(e, "left", "right"), y: uv(e, "top", "bottom")}
}

function uv(e, t, n) {
    return {min: fv(e, t), max: fv(e, n)}
}

function fv(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}

function yn(e) {
    return [e("x"), e("y")]
}

function a0({top: e, left: t, right: n, bottom: r}) {
    return {x: {min: t, max: n}, y: {min: e, max: r}}
}

function jF({x: e, y: t}) {
    return {top: t.min, right: e.max, bottom: t.max, left: e.min}
}

function HF(e, t) {
    if (!t) return e;
    let n = t({x: e.left, y: e.top}), r = t({x: e.right, y: e.bottom});
    return {top: n.y, left: n.x, bottom: r.y, right: r.x}
}

function sf(e) {
    return e === void 0 || e === 1
}

function Pf({scale: e, scaleX: t, scaleY: n}) {
    return !sf(e) || !sf(t) || !sf(n)
}

function yi(e) {
    return Pf(e) || l0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function l0(e) {
    return dv(e.x) || dv(e.y)
}

function dv(e) {
    return e && e !== "0%"
}

function il(e, t, n) {
    let r = e - n, i = t * r;
    return n + i
}

function hv(e, t, n, r, i) {
    return i !== void 0 && (e = il(e, i, r)), il(e, n, r) + t
}

function _f(e, t = 0, n = 1, r, i) {
    e.min = hv(e.min, t, n, r, i), e.max = hv(e.max, t, n, r, i)
}

function c0(e, {x: t, y: n}) {
    _f(e.x, t.translate, t.scale, t.originPoint), _f(e.y, n.translate, n.scale, n.originPoint)
}

var pv = .999999999999, mv = 1.0000000000001;

function WF(e, t, n, r = !1) {
    let i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a], s = o.projectionDelta;
        let {visualElement: l} = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && io(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), s && (t.x *= s.x.scale, t.y *= s.y.scale, c0(e, s)), r && yi(o.latestValues) && io(e, o.latestValues))
    }
    t.x < mv && t.x > pv && (t.x = 1), t.y < mv && t.y > pv && (t.y = 1)
}

function ro(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function gv(e, t, n, r, i = .5) {
    let o = Ie(e.min, e.max, i);
    _f(e, t, n, o, r)
}

function io(e, t) {
    gv(e.x, t.x, t.scaleX, t.scale, t.originX), gv(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function u0(e, t) {
    return a0(HF(e.getBoundingClientRect(), t))
}

function UF(e, t, n) {
    let r = u0(e, n), {scroll: i} = t;
    return i && (ro(r.x, i.offset.x), ro(r.y, i.offset.y)), r
}

var f0 = ({current: e}) => e ? e.ownerDocument.defaultView : null, GF = new WeakMap, qF = class {
    constructor(e) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = $e(), this.visualElement = e
    }

    start(e, {snapToCursor: t = !1} = {}) {
        let {presenceContext: n} = this.visualElement;
        if (n && n.isPresent === !1) return;
        let r = c => {
            let {dragSnapToOrigin: u} = this.getProps();
            u ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(vl(c, "page").point)
        }, i = (c, u) => {
            let {drag: f, dragPropagation: d, onDragStart: m} = this.getProps();
            if (f && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Wy(f), !this.openGlobalLock)) return;
            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), yn(g => {
                let b = this.getAxisMotionValue(g).get() || 0;
                if (Hn.test(b)) {
                    let {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        let h = p.layout.layoutBox[g];
                        h && (b = Nt(h) * (parseFloat(b) / 100))
                    }
                }
                this.originPoint[g] = b
            }), m && Y.postRender(() => m(c, u)), Tf(this.visualElement, "transform");
            let {animationState: v} = this.visualElement;
            v && v.setActive("whileDrag", !0)
        }, o = (c, u) => {
            let {dragPropagation: f, dragDirectionLock: d, onDirectionLock: m, onDrag: v} = this.getProps();
            if (!f && !this.openGlobalLock) return;
            let {offset: g} = u;
            if (d && this.currentDirection === null) {
                this.currentDirection = XF(g), this.currentDirection !== null && m && m(this.currentDirection);
                return
            }
            this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), v && v(c, u)
        }, s = (c, u) => this.stop(c, u), a = () => yn(c => {
            var u;
            return this.getAnimationState(c) === "paused" && ((u = this.getAxisMotionValue(c).animation) === null || u === void 0 ? void 0 : u.play())
        }), {dragSnapToOrigin: l} = this.getProps();
        this.panSession = new o0(e, {
            onSessionStart: r,
            onStart: i,
            onMove: o,
            onSessionEnd: s,
            resumeAnimation: a
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: l,
            contextWindow: f0(this.visualElement)
        })
    }

    stop(e, t) {
        let n = this.isDragging;
        if (this.cancel(), !n) return;
        let {velocity: r} = t;
        this.startAnimation(r);
        let {onDragEnd: i} = this.getProps();
        i && Y.postRender(() => i(e, t))
    }

    cancel() {
        this.isDragging = !1;
        let {projection: e, animationState: t} = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        let {dragPropagation: n} = this.getProps();
        !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1)
    }

    updateAxis(e, t, n) {
        let {drag: r} = this.getProps();
        if (!n || !Ua(e, r, this.currentDirection)) return;
        let i = this.getAxisMotionValue(e), o = this.originPoint[e] + n[e];
        this.constraints && this.constraints[e] && (o = AF(o, this.constraints[e], this.elastic[e])), i.set(o)
    }

    resolveConstraints() {
        var e;
        let {dragConstraints: t, dragElastic: n} = this.getProps(),
            r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout,
            i = this.constraints;
        t && no(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = DF(r.layoutBox, t) : this.constraints = !1, this.elastic = NF(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && yn(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = $F(r.layoutBox[o], this.constraints[o]))
        })
    }

    resolveRefConstraints() {
        let {dragConstraints: e, onMeasureDragConstraints: t} = this.getProps();
        if (!e || !no(e)) return !1;
        let n = e.current;
        Zt(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        let {projection: r} = this.visualElement;
        if (!r || !r.layout) return !1;
        let i = UF(n, r.root, this.visualElement.getTransformPagePoint()), o = zF(r.layout.layoutBox, i);
        if (t) {
            let s = t(jF(o));
            this.hasMutatedConstraints = !!s, s && (o = a0(s))
        }
        return o
    }

    startAnimation(e) {
        let {
            drag: t,
            dragMomentum: n,
            dragElastic: r,
            dragTransition: i,
            dragSnapToOrigin: o,
            onDragTransitionEnd: s
        } = this.getProps(), a = this.constraints || {}, l = yn(c => {
            if (!Ua(c, t, this.currentDirection)) return;
            let u = a && a[c] || {};
            o && (u = {min: 0, max: 0});
            let f = r ? 200 : 1e6, d = r ? 40 : 1e7, m = {
                type: "inertia",
                velocity: n ? e[c] : 0,
                bounceStiffness: f,
                bounceDamping: d,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10, ...i, ...u
            };
            return this.startAxisValueAnimation(c, m)
        });
        return Promise.all(l).then(s)
    }

    startAxisValueAnimation(e, t) {
        let n = this.getAxisMotionValue(e);
        return Tf(this.visualElement, e), n.start(od(e, n, 0, t, this.visualElement, !1))
    }

    stopAnimation() {
        yn(e => this.getAxisMotionValue(e).stop())
    }

    pauseAnimation() {
        yn(e => {
            var t;
            return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.pause()
        })
    }

    getAnimationState(e) {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null || t === void 0 ? void 0 : t.state
    }

    getAxisMotionValue(e) {
        let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps(), r = n[t];
        return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
    }

    snapToCursor(e) {
        yn(t => {
            let {drag: n} = this.getProps();
            if (!Ua(t, n, this.currentDirection)) return;
            let {projection: r} = this.visualElement, i = this.getAxisMotionValue(t);
            if (r && r.layout) {
                let {min: o, max: s} = r.layout.layoutBox[t];
                i.set(e[t] - Ie(o, s, .5))
            }
        })
    }

    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let {drag: e, dragConstraints: t} = this.getProps(), {projection: n} = this.visualElement;
        if (!no(t) || !n || !this.constraints) return;
        this.stopAnimation();
        let r = {x: 0, y: 0};
        yn(o => {
            let s = this.getAxisMotionValue(o);
            if (s && this.constraints !== !1) {
                let a = s.get();
                r[o] = BF({min: a, max: a}, this.constraints[o])
            }
        });
        let {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), yn(o => {
            if (!Ua(o, e, null)) return;
            let s = this.getAxisMotionValue(o), {min: a, max: l} = this.constraints[o];
            s.set(Ie(a, l, r[o]))
        })
    }

    addListeners() {
        if (!this.visualElement.current) return;
        GF.set(this.visualElement, this);
        let e = this.visualElement.current, t = qn(e, "pointerdown", a => {
            let {drag: l, dragListener: c = !0} = this.getProps();
            l && c && this.start(a)
        }), n = () => {
            let {dragConstraints: a} = this.getProps();
            no(a) && a.current && (this.constraints = this.resolveRefConstraints())
        }, {projection: r} = this.visualElement, i = r.addEventListener("measure", n);
        r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), Y.read(n);
        let o = gr(P, "resize", () => this.scalePositionWithinConstraints()),
            s = r.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: l}) => {
                this.isDragging && l && (yn(c => {
                    let u = this.getAxisMotionValue(c);
                    u && (this.originPoint[c] += a[c].translate, u.set(u.get() + a[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), t(), i(), s && s()
        }
    }

    getProps() {
        let e = this.visualElement.getProps(), {
            drag: t = !1,
            dragDirectionLock: n = !1,
            dragPropagation: r = !1,
            dragConstraints: i = !1,
            dragElastic: o = Ff,
            dragMomentum: s = !0
        } = e;
        return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s
        }
    }
};

function Ua(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function XF(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}

var YF = class extends Br {
    constructor(e) {
        super(e), this.removeGroupControls = vt, this.removeListeners = vt, this.controls = new qF(e)
    }

    mount() {
        let {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || vt
    }

    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}, vv = e => (t, n) => {
    e && Y.postRender(() => e(t, n))
}, KF = class extends Br {
    constructor() {
        super(...arguments), this.removePointerDownListener = vt
    }

    onPointerDown(e) {
        this.session = new o0(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: f0(this.node)
        })
    }

    createPanHandlers() {
        let {onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r} = this.node.getProps();
        return {
            onSessionStart: vv(e), onStart: vv(t), onMove: n, onEnd: (i, o) => {
                delete this.session, r && Y.postRender(() => r(i, o))
            }
        }
    }

    mount() {
        this.removePointerDownListener = qn(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }

    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }

    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}, Ya = {hasAnimatedSinceResize: !0, hasEverUpdated: !1};

function yv(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}

var os = {
    correct: (e, t) => {
        if (!t.target) return e;
        if (typeof e == "string") if (Z.test(e)) e = parseFloat(e); else return e;
        let n = yv(e, t.target.x), r = yv(e, t.target.y);
        return `${n}% ${r}%`
    }
}, QF = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        let r = e, i = yr.parse(e);
        if (i.length > 5) return r;
        let o = yr.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
        i[0 + s] /= a, i[1 + s] /= l;
        let c = Ie(a, l, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= c), typeof i[3 + s] == "number" && (i[3 + s] /= c), o(i)
    }
}, ZF = class extends Ce {
    componentDidMount() {
        let {visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r} = this.props, {projection: i} = e;
        hd(JF), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), i.setOptions({...i.options, onExitComplete: () => this.safeToRemove()})), Ya.hasEverUpdated = !0
    }

    getSnapshotBeforeUpdate(e) {
        let {layoutDependency: t, visualElement: n, drag: r, isPresent: i} = this.props, o = n.projection;
        return o && (o.isPresent = i, r || e.layoutDependency !== t || t === void 0 ? o.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? o.promote() : o.relegate() || Y.postRender(() => {
            let s = o.getStack();
            (!s || !s.members.length) && this.safeToRemove()
        }))), null
    }

    componentDidUpdate() {
        let {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(), pd.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }

    componentWillUnmount() {
        let {visualElement: e, layoutGroup: t, switchLayoutGroup: n} = this.props, {projection: r} = e;
        r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
    }

    safeToRemove() {
        let {safeToRemove: e} = this.props;
        e && e()
    }

    render() {
        return null
    }
};

function d0(e) {
    let [t, n] = dd(), r = A(xs);
    return C(ZF, {...e, layoutGroup: r, switchLayoutGroup: A(yl), isPresent: t, safeToRemove: n})
}

var JF = {
        borderRadius: {
            ...os,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: os,
        borderTopRightRadius: os,
        borderBottomLeftRadius: os,
        borderBottomRightRadius: os,
        boxShadow: QF
    }, h0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], eP = h0.length,
    bv = e => typeof e == "string" ? parseFloat(e) : e, xv = e => typeof e == "number" || Z.test(e);

function tP(e, t, n, r, i, o) {
    i ? (e.opacity = Ie(0, n.opacity !== void 0 ? n.opacity : 1, nP(r)), e.opacityExit = Ie(t.opacity !== void 0 ? t.opacity : 1, 0, rP(r))) : o && (e.opacity = Ie(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < eP; s++) {
        let a = `border${h0[s]}Radius`, l = wv(t, a), c = wv(n, a);
        if (l === void 0 && c === void 0) continue;
        l || (l = 0), c || (c = 0), l === 0 || c === 0 || xv(l) === xv(c) ? (e[a] = Math.max(Ie(bv(l), bv(c), r), 0), (Hn.test(c) || Hn.test(l)) && (e[a] += "%")) : e[a] = c
    }
    (t.rotate || n.rotate) && (e.rotate = Ie(t.rotate || 0, n.rotate || 0, r))
}

function wv(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}

var nP = p0(0, .5, Bf), rP = p0(.5, .95, vt);

function p0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(br(e, t, r))
}

function Sv(e, t) {
    e.min = t.min, e.max = t.max
}

function vn(e, t) {
    Sv(e.x, t.x), Sv(e.y, t.y)
}

function kv(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function Cv(e, t, n, r, i) {
    return e -= t, e = il(e, 1 / n, r), i !== void 0 && (e = il(e, 1 / i, r)), e
}

function iP(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (Hn.test(t) && (t = parseFloat(t), t = Ie(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let a = Ie(o.min, o.max, r);
    e === o && (a -= t), e.min = Cv(e.min, t, n, a, i), e.max = Cv(e.max, t, n, a, i)
}

function Tv(e, t, [n, r, i], o, s) {
    iP(e, t[n], t[r], t[i], t.scale, o, s)
}

var oP = ["x", "scaleX", "originX"], sP = ["y", "scaleY", "originY"];

function Rv(e, t, n, r) {
    Tv(e.x, t, oP, n ? n.x : void 0, r ? r.x : void 0), Tv(e.y, t, sP, n ? n.y : void 0, r ? r.y : void 0)
}

function Ev(e) {
    return e.translate === 0 && e.scale === 1
}

function m0(e) {
    return Ev(e.x) && Ev(e.y)
}

function Fv(e, t) {
    return e.min === t.min && e.max === t.max
}

function aP(e, t) {
    return Fv(e.x, t.x) && Fv(e.y, t.y)
}

function Pv(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function g0(e, t) {
    return Pv(e.x, t.x) && Pv(e.y, t.y)
}

function _v(e) {
    return Nt(e.x) / Nt(e.y)
}

function Iv(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}

var lP = class {
    constructor() {
        this.members = []
    }

    add(e) {
        td(this.members, e), e.scheduleRender()
    }

    remove(e) {
        if (fl(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t)
        }
    }

    relegate(e) {
        let t = this.members.findIndex(r => e === r);
        if (t === 0) return !1;
        let n;
        for (let r = t; r >= 0; r--) {
            let i = this.members[r];
            if (i.isPresent !== !1) {
                n = i;
                break
            }
        }
        return n ? (this.promote(n), !0) : !1
    }

    promote(e, t) {
        let n = this.lead;
        if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
            n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let {crossfade: r} = e.options;
            r === !1 && n.hide()
        }
    }

    exitAnimationComplete() {
        this.members.forEach(e => {
            let {options: t, resumingFrom: n} = e;
            t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
        })
    }

    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }

    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
};

function cP(e, t, n) {
    let r = "", i = e.x.translate / t.x, o = e.y.translate / t.y, s = n?.z || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
        let {transformPerspective: c, rotate: u, rotateX: f, rotateY: d, skewX: m, skewY: v} = n;
        c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), m && (r += `skewX(${m}deg) `), v && (r += `skewY(${v}deg) `)
    }
    let a = e.x.scale * t.x, l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}

function v0(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function y0(e, t, n) {
    let r = ze(e) ? e : Ge(e);
    return r.start(od("", r, t, n)), r.animation
}

var bi = {type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0},
    cs = typeof P < "u" && P.MotionDebug !== void 0, af = ["", "X", "Y", "Z"], uP = {visibility: "hidden"}, Ov = 1e3,
    fP = 0;

function lf(e, t, n, r) {
    let {latestValues: i} = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function b0(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    let {visualElement: t} = e.options;
    if (!t) return;
    let n = Ay(t);
    if (P.MotionHasOptimisedAnimation(n, "transform")) {
        let {layout: i, layoutId: o} = e.options;
        P.MotionCancelOptimisedAnimation(n, "transform", Y, !(i || o))
    }
    let {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && b0(r)
}

function x0({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s = {}, a = t?.()) {
            this.id = fP++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, cs && (bi.totalNodes = bi.resolvedTargetDeltas = bi.recalculatedProjection = 0), this.nodes.forEach(pP), this.nodes.forEach(bP), this.nodes.forEach(xP), this.nodes.forEach(mP), cs && P.MotionDebug.record(bi)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new qy)
        }

        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new nd), this.eventHandlers.get(s).add(a)
        }

        notifyListeners(s, ...a) {
            let l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }

        hasListeners(s) {
            return this.eventHandlers.has(s)
        }

        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = v0(s), this.instance = s;
            let {layoutId: l, layout: c, visualElement: u} = this.options;
            if (u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), e) {
                let f, d = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = Xy(d, 250), Ya.hasAnimatedSinceResize && (Ya.hasAnimatedSinceResize = !1, this.nodes.forEach(Lv))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({
                                                                                                                                                delta: f,
                                                                                                                                                hasLayoutChanged: d,
                                                                                                                                                hasRelativeTargetChanged: m,
                                                                                                                                                layout: v
                                                                                                                                            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                let g = this.options.transition || u.getDefaultTransition() || TP, {
                    onLayoutAnimationStart: b,
                    onLayoutAnimationComplete: p
                } = u.getProps(), h = !this.targetLayout || !g0(this.targetLayout, v) || m, y = !d && m;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || d && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, y);
                    let w = {...id(g, "layout"), onPlay: b, onComplete: p};
                    (u.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w)
                } else d || Lv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            })
        }

        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            let s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Ct(this.updateProjection)
        }

        blockUpdate() {
            this.updateManuallyBlocked = !0
        }

        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }

        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }

        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }

        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(wP), this.animationId++)
        }

        getTransformTemplate() {
            let {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }

        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (P.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && b0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                let f = this.path[u];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            let {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l) return;
            let c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }

        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Mv);
                return
            }
            this.isUpdating || this.nodes.forEach(vP), this.isUpdating = !1, this.nodes.forEach(yP), this.nodes.forEach(dP), this.nodes.forEach(hP), this.clearAllSnapshots();
            let a = Gn.now();
            Ue.delta = vr(0, 1e3 / 60, a - Ue.timestamp), Ue.timestamp = a, Ue.isProcessing = !0, qa.update.process(Ue), qa.preRender.process(Ue), qa.render.process(Ue), Ue.isProcessing = !1
        }

        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, pd.read(this.scheduleUpdate))
        }

        clearAllSnapshots() {
            this.nodes.forEach(gP), this.sharedNodes.forEach(SP)
        }

        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Y.preRender(this.updateProjection, !1, !0))
        }

        scheduleCheckAfterUnmount() {
            Y.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }

        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }

        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            let s = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = $e(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            let {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }

        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
                let l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }

        resetTransform() {
            if (!i) return;
            let s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !m0(this.projectionDelta), l = this.getTransformTemplate(),
                c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
            s && (a || yi(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }

        measure(s = !0) {
            let a = this.measurePageBox(), l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)), RP(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }

        measurePageBox() {
            var s;
            let {visualElement: a} = this.options;
            if (!a) return $e();
            let l = a.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(EP))) {
                let {scroll: u} = this.root;
                u && (ro(l.x, u.offset.x), ro(l.y, u.offset.y))
            }
            return l
        }

        removeElementScroll(s) {
            var a;
            let l = $e();
            if (vn(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
            for (let c = 0; c < this.path.length; c++) {
                let u = this.path[c], {scroll: f, options: d} = u;
                u !== this.root && f && d.layoutScroll && (f.wasRoot && vn(l, s), ro(l.x, f.offset.x), ro(l.y, f.offset.y))
            }
            return l
        }

        applyTransform(s, a = !1) {
            let l = $e();
            vn(l, s);
            for (let c = 0; c < this.path.length; c++) {
                let u = this.path[c];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && io(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }), yi(u.latestValues) && io(l, u.latestValues)
            }
            return yi(this.latestValues) && io(l, this.latestValues), l
        }

        removeTransform(s) {
            let a = $e();
            vn(a, s);
            for (let l = 0; l < this.path.length; l++) {
                let c = this.path[l];
                if (!c.instance || !yi(c.latestValues)) continue;
                Pf(c.latestValues) && c.updateSnapshot();
                let u = $e(), f = c.measurePageBox();
                vn(u, f), Rv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u)
            }
            return yi(this.latestValues) && Rv(a, this.latestValues), a
        }

        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }

        setOptions(s) {
            this.options = {...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0}
        }

        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }

        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ue.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }

        resolveTargetDelta(s = !1) {
            var a;
            let l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            let c = !!this.resumingFrom || this !== l;
            if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            let {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = Ue.timestamp, !this.targetDelta && !this.relativeTarget) {
                    let m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $e(), this.relativeTargetOrigin = $e(), hs(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), vn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = $e(), this.targetWithTransforms = $e()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), pF(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : vn(this.target, this.layout.layoutBox), c0(this.target, this.targetDelta)) : vn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        let m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $e(), this.relativeTargetOrigin = $e(), hs(this.relativeTargetOrigin, this.target, m.target), vn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    cs && bi.resolvedTargetDeltas++
                }
            }
        }

        getClosestProjectingParent() {
            if (!(!this.parent || Pf(this.parent.latestValues) || l0(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }

        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }

        calcProjection() {
            var s;
            let a = this.getLead(), l = !!this.resumingFrom || this !== a, c = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === Ue.timestamp && (c = !1), c) return;
            let {layout: u, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f)) return;
            vn(this.layoutCorrected, this.layout.layoutBox);
            let d = this.treeScale.x, m = this.treeScale.y;
            WF(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = $e());
            let {target: v} = a;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (kv(this.prevProjectionDelta.x, this.projectionDelta.x), kv(this.prevProjectionDelta.y, this.projectionDelta.y)), ds(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== m || !Iv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Iv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), cs && bi.recalculatedProjection++
        }

        hide() {
            this.isVisible = !1
        }

        show() {
            this.isVisible = !0
        }

        scheduleRender(s = !0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
                let l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }

        createProjectionDeltas() {
            this.prevProjectionDelta = to(), this.projectionDelta = to(), this.projectionDeltaWithTransform = to()
        }

        setAnimationOrigin(s, a = !1) {
            let l = this.snapshot, c = l ? l.latestValues : {}, u = {...this.latestValues}, f = to();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            let d = $e(), m = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, g = m !== v,
                b = this.getStack(), p = !b || b.members.length <= 1,
                h = !!(g && !p && this.options.crossfade === !0 && !this.path.some(CP));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = w => {
                let k = w / 1e3;
                Vv(f.x, s.x, k), Vv(f.y, s.y, k), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (hs(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), kP(this.relativeTarget, this.relativeTargetOrigin, d, k), y && aP(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = $e()), vn(y, this.relativeTarget)), g && (this.animationValues = u, tP(u, c, this.latestValues, k, h, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }

        startAnimation(s) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Ct(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Y.update(() => {
                Ya.hasAnimatedSinceResize = !0, this.currentAnimation = y0(0, Ov, {
                    ...s, onUpdate: a => {
                        this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a)
                    }, onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }

        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            let s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }

        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ov), this.currentAnimation.stop()), this.completeAnimation()
        }

        applyTransformsToTarget() {
            let s = this.getLead(), {targetWithTransforms: a, target: l, layout: c, latestValues: u} = s;
            if (!(!a || !l || !c)) {
                if (this !== s && this.layout && c && w0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || $e();
                    let f = Nt(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min, l.x.max = l.x.min + f;
                    let d = Nt(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min, l.y.max = l.y.min + d
                }
                vn(a, l), io(a, u), ds(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }

        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new lP), this.sharedNodes.get(s).add(a);
            let c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }

        isLead() {
            let s = this.getStack();
            return s ? s.lead === this : !0
        }

        getLead() {
            var s;
            let {layoutId: a} = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }

        getPrevLead() {
            var s;
            let {layoutId: a} = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }

        getStack() {
            let {layoutId: s} = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }

        promote({needsReset: s, transition: a, preserveFollowOpacity: l} = {}) {
            let c = this.getStack();
            c && c.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({transition: a})
        }

        relegate() {
            let s = this.getStack();
            return s ? s.relegate(this) : !1
        }

        resetSkewAndRotation() {
            let {visualElement: s} = this.options;
            if (!s) return;
            let a = !1, {latestValues: l} = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            let c = {};
            l.z && lf("z", s, c, this.animationValues);
            for (let u = 0; u < af.length; u++) lf(`rotate${af[u]}`, s, c, this.animationValues), lf(`skew${af[u]}`, s, c, this.animationValues);
            s.render();
            for (let u in c) s.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
            s.scheduleRender()
        }

        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return uP;
            let c = {visibility: ""}, u = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, c.opacity = "", c.pointerEvents = kt(s?.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
            let f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                let g = {};
                return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = kt(s?.pointerEvents) || ""), this.hasProjected && !yi(this.latestValues) && (g.transform = u ? u({}, "") : "none", this.hasProjected = !1), g
            }
            let d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), c.transform = cP(this.projectionDeltaWithTransform, this.treeScale, d), u && (c.transform = u(d, c.transform));
            let {x: m, y: v} = this.projectionDelta;
            c.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (let g in nl) {
                if (d[g] === void 0) continue;
                let {correct: b, applyTo: p} = nl[g], h = c.transform === "none" ? d[g] : b(d[g], f);
                if (p) {
                    let y = p.length;
                    for (let w = 0; w < y; w++) c[p[w]] = h
                } else c[g] = h
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? kt(s?.pointerEvents) || "" : "none"), c
        }

        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }

        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(Mv), this.root.sharedNodes.clear()
        }
    }
}

function dP(e) {
    e.updateLayout()
}

function hP(e) {
    var t;
    let n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        let {layoutBox: r, measuredBox: i} = e.layout, {animationType: o} = e.options, s = n.source !== e.layout.source;
        o === "size" ? yn(f => {
            let d = s ? n.measuredBox[f] : n.layoutBox[f], m = Nt(d);
            d.min = r[f].min, d.max = d.min + m
        }) : w0(o, n.layoutBox, r) && yn(f => {
            let d = s ? n.measuredBox[f] : n.layoutBox[f], m = Nt(r[f]);
            d.max = d.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + m)
        });
        let a = to();
        ds(a, r, n.layoutBox);
        let l = to();
        s ? ds(l, e.applyTransform(i, !0), n.measuredBox) : ds(l, r, n.layoutBox);
        let c = !m0(a), u = !1;
        if (!e.resumeFrom) {
            let f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                let {snapshot: d, layout: m} = f;
                if (d && m) {
                    let v = $e();
                    hs(v, n.layoutBox, d.layoutBox);
                    let g = $e();
                    hs(g, r, m.layoutBox), g0(v, g) || (u = !0), f.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = v, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: u
        })
    } else if (e.isLead()) {
        let {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function pP(e) {
    cs && bi.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function mP(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function gP(e) {
    e.clearSnapshot()
}

function Mv(e) {
    e.clearMeasurements()
}

function vP(e) {
    e.isLayoutDirty = !1
}

function yP(e) {
    let {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Lv(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function bP(e) {
    e.resolveTargetDelta()
}

function xP(e) {
    e.calcProjection()
}

function wP(e) {
    e.resetSkewAndRotation()
}

function SP(e) {
    e.removeLeadSnapshot()
}

function Vv(e, t, n) {
    e.translate = Ie(t.translate, 0, n), e.scale = Ie(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Av(e, t, n, r) {
    e.min = Ie(t.min, n.min, r), e.max = Ie(t.max, n.max, r)
}

function kP(e, t, n, r) {
    Av(e.x, t.x, n.x, r), Av(e.y, t.y, n.y, r)
}

function CP(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}

var TP = {duration: .45, ease: [.4, 0, .1, 1]},
    Dv = e => typeof Fe < "u" && Fe.userAgent && Fe.userAgent.toLowerCase().includes(e),
    zv = Dv("applewebkit/") && !Dv("chrome/") ? Math.round : vt;

function Bv(e) {
    e.min = zv(e.min), e.max = zv(e.max)
}

function RP(e) {
    Bv(e.x), Bv(e.y)
}

function w0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !hF(_v(t), _v(n), .2)
}

function EP(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}

var FP = x0({
    attachResizeListener: (e, t) => gr(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
}), Si = {current: void 0}, S0 = x0({
    measureScroll: e => ({x: e.scrollLeft, y: e.scrollTop}), defaultParent: () => {
        if (!Si.current) {
            let e = new FP({});
            e.mount(P), e.setOptions({layoutScroll: !0}), Si.current = e
        }
        return Si.current
    }, resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }, checkIsScrollRoot: e => P.getComputedStyle(e).position === "fixed"
}), k0 = {pan: {Feature: KF}, drag: {Feature: YF, ProjectionNode: S0, MeasureLayout: d0}};

function $v(e, t) {
    let n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (o, s) => {
        if (o.pointerType === "touch" || fd()) return;
        let a = e.getProps();
        e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
        let l = a[r];
        l && Y.postRender(() => l(o, s))
    };
    return qn(e.current, n, i, {passive: !e.getProps()[r]})
}

var PP = class extends Br {
    mount() {
        this.unmount = Un($v(this.node, !0), $v(this.node, !1))
    }

    unmount() {
    }
}, _P = class extends Br {
    constructor() {
        super(...arguments), this.isActive = !1
    }

    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }

    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }

    mount() {
        this.unmount = Un(gr(this.node.current, "focus", () => this.onFocus()), gr(this.node.current, "blur", () => this.onBlur()))
    }

    unmount() {
    }
}, C0 = (e, t) => t ? e === t ? !0 : C0(e, t.parentElement) : !1;

function cf(e, t) {
    if (!t) return;
    let n = new PointerEvent("pointer" + e);
    t(n, vl(n))
}

var IP = class extends Br {
    constructor() {
        super(...arguments), this.removeStartListeners = vt, this.removeEndListeners = vt, this.removeAccessibleListeners = vt, this.startPointerPress = (e, t) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            let n = this.node.getProps(), i = qn(P, "pointerup", (s, a) => {
                    if (!this.checkPressEnd()) return;
                    let {onTap: l, onTapCancel: c, globalTapTarget: u} = this.node.getProps(),
                        f = !u && !C0(this.node.current, s.target) ? c : l;
                    f && Y.update(() => f(s, a))
                }, {passive: !(n.onTap || n.onPointerUp)}),
                o = qn(P, "pointercancel", (s, a) => this.cancelPress(s, a), {passive: !(n.onTapCancel || n.onPointerCancel)});
            this.removeEndListeners = Un(i, o), this.startPress(e, t)
        }, this.startAccessiblePress = () => {
            let e = i => {
                if (i.key !== "Enter" || this.isPressing) return;
                let o = s => {
                    s.key !== "Enter" || !this.checkPressEnd() || cf("up", (a, l) => {
                        let {onTap: c} = this.node.getProps();
                        c && Y.postRender(() => c(a, l))
                    })
                };
                this.removeEndListeners(), this.removeEndListeners = gr(this.node.current, "keyup", o), cf("down", (s, a) => {
                    this.startPress(s, a)
                })
            }, t = gr(this.node.current, "keydown", e), n = () => {
                this.isPressing && cf("cancel", (i, o) => this.cancelPress(i, o))
            }, r = gr(this.node.current, "blur", n);
            this.removeAccessibleListeners = Un(t, r)
        }
    }

    startPress(e, t) {
        this.isPressing = !0;
        let {onTapStart: n, whileTap: r} = this.node.getProps();
        r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Y.postRender(() => n(e, t))
    }

    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !fd()
    }

    cancelPress(e, t) {
        if (!this.checkPressEnd()) return;
        let {onTapCancel: n} = this.node.getProps();
        n && Y.postRender(() => n(e, t))
    }

    mount() {
        let e = this.node.getProps(),
            t = qn(e.globalTapTarget ? P : this.node.current, "pointerdown", this.startPointerPress, {passive: !(e.onTapStart || e.onPointerStart)}),
            n = gr(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Un(t, n)
    }

    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}, If = new WeakMap, uf = new WeakMap, OP = e => {
    let t = If.get(e.target);
    t && t(e)
}, MP = e => {
    e.forEach(OP)
};

function LP({root: e, ...t}) {
    let n = e || document;
    uf.has(n) || uf.set(n, {});
    let r = uf.get(n), i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(MP, {root: e, ...t})), r[i]
}

function VP(e, t, n) {
    let r = LP(t);
    return If.set(e, n), r.observe(e), () => {
        If.delete(e), r.unobserve(e)
    }
}

var AP = {some: 0, all: 1}, DP = class extends Br {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }

    startObserver() {
        this.unmount();
        let {viewport: e = {}} = this.node.getProps(), {root: t, margin: n, amount: r = "some", once: i} = e,
            o = {root: t ? t.current : void 0, rootMargin: n, threshold: typeof r == "number" ? r : AP[r]}, s = a => {
                let {isIntersecting: l} = a;
                if (this.isInView === l || (this.isInView = l, i && !l && this.hasEnteredView)) return;
                l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
                let {onViewportEnter: c, onViewportLeave: u} = this.node.getProps(), f = l ? c : u;
                f && f(a)
            };
        return VP(this.node.current, o, s)
    }

    mount() {
        this.startObserver()
    }

    update() {
        if (typeof IntersectionObserver > "u") return;
        let {props: e, prevProps: t} = this.node;
        ["amount", "margin", "root"].some(zP(e, t)) && this.startObserver()
    }

    unmount() {
    }
};

function zP({viewport: e = {}}, {viewport: t = {}} = {}) {
    return n => e[n] !== t[n]
}

var T0 = {inView: {Feature: DP}, tap: {Feature: IP}, focus: {Feature: _P}, hover: {Feature: PP}},
    R0 = {layout: {ProjectionNode: S0, MeasureLayout: d0}},
    BP = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function yd(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(BP.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function E0(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (let o in n) e.style.setProperty(o, n[o])
}

var F0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function P0(e, t, n, r) {
    E0(e, t, void 0, r);
    for (let i in t.attrs) e.setAttribute(F0.has(i) ? i : hl(i), t.attrs[i])
}

function _0(e, {layout: t, layoutId: n}) {
    return zr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!nl[e] || e === "opacity")
}

function bd(e, t, n) {
    var r;
    let {style: i} = e, o = {};
    for (let s in i) (ze(i[s]) || t.style && ze(t.style[s]) || _0(s, e) || ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o
}

function I0(e, t, n) {
    let r = bd(e, t, n);
    for (let i in e) if (ze(e[i]) || ze(t[i])) {
        let o = ks.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
        r[o] = e[i]
    }
    return r
}

var xd = () => ({style: {}, transform: {}, transformOrigin: {}, vars: {}}), O0 = () => ({...xd(), attrs: {}});

function wd(e, t, n) {
    let {style: r, vars: i, transformOrigin: o} = e, s = !1, a = !1;
    for (let l in t) {
        let c = t[l];
        if (zr.has(l)) {
            s = !0;
            continue
        } else if (my(l)) {
            i[l] = c;
            continue
        } else {
            let u = Jy(c, Zf[l]);
            l.startsWith("origin") ? (a = !0, o[l] = u) : r[l] = u
        }
    }
    if (t.transform || (s || n ? r.transform = e0(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        let {originX: l = "50%", originY: c = "50%", originZ: u = 0} = o;
        r.transformOrigin = `${l} ${c} ${u}`
    }
}

function Nv(e, t, n) {
    return typeof e == "string" ? e : Z.transform(t + n * e)
}

function $P(e, t, n) {
    let r = Nv(t, e.x, e.width), i = Nv(n, e.y, e.height);
    return `${r} ${i}`
}

var NP = {offset: "stroke-dashoffset", array: "stroke-dasharray"},
    jP = {offset: "strokeDashoffset", array: "strokeDasharray"};

function HP(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    let o = i ? NP : jP;
    e[o.offset] = Z.transform(-r);
    let s = Z.transform(t), a = Z.transform(n);
    e[o.array] = `${s} ${a}`
}

function Sd(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
}, u, f) {
    if (wd(e, c, f), u) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    let {attrs: d, style: m, dimensions: v} = e;
    d.transform && (v && (m.transform = d.transform), delete d.transform), v && (i !== void 0 || o !== void 0 || m.transform) && (m.transformOrigin = $P(v, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && HP(d, s, a, l, !1)
}

var kd = e => typeof e == "string" && e.toLowerCase() === "svg", WP = {
    useVisualState: wl({
        scrapeMotionValuesFromProps: I0,
        createRenderState: O0,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            Y.read(() => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {x: 0, y: 0, width: 0, height: 0}
                }
            }), Y.render(() => {
                Sd(n, r, kd(t.tagName), e.transformTemplate), P0(t, n)
            })
        }
    })
}, UP = {useVisualState: wl({applyWillChange: !0, scrapeMotionValuesFromProps: bd, createRenderState: xd})};

function M0(e, t, n) {
    for (let r in t) !ze(t[r]) && !_0(r, n) && (e[r] = t[r])
}

function GP({transformTemplate: e}, t) {
    return se(() => {
        let n = xd();
        return wd(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function qP(e, t) {
    let n = e.style || {}, r = {};
    return M0(r, n, e), Object.assign(r, GP(e, t)), r
}

function XP(e, t) {
    let n = {}, r = qP(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}

function YP(e, t, n, r) {
    let i = se(() => {
        let o = O0();
        return Sd(o, t, kd(r), e.transformTemplate), {...o.attrs, style: {...o.style}}
    }, [t]);
    if (e.style) {
        let o = {};
        M0(o, e.style, e), i.style = {...o, ...i.style}
    }
    return i
}

function KP(e = !1) {
    return (n, r, i, {latestValues: o}, s) => {
        let l = (yd(n) ? YP : XP)(r, o, s, n), c = r0(r, typeof n == "string", e),
            u = n !== gn ? {...c, ...l, ref: i} : {}, {children: f} = r, d = se(() => ze(f) ? f.get() : f, [f]);
        return Zi(n, {...u, children: d})
    }
}

function QP(e, t) {
    return function (r, {forwardMotionProps: i} = {forwardMotionProps: !1}) {
        let s = {...yd(r) ? WP : UP, preloadedFeatures: e, useRender: KP(i), createVisualElement: t, Component: r};
        return Zy(s)
    }
}

var L0 = class extends vd {
    constructor() {
        super(...arguments), this.KeyframeResolver = Py
    }

    sortInstanceNodePosition(e, t) {
        return e.compareDocumentPosition(t) & 2 ? 1 : -1
    }

    getBaseTargetFromProps(e, t) {
        return e.style ? e.style[t] : void 0
    }

    removeValueFromRenderState(e, {vars: t, style: n}) {
        delete t[e], delete n[e]
    }
};

function ZP(e) {
    return P.getComputedStyle(e)
}

var V0 = class extends L0 {
        constructor() {
            super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = E0
        }

        readValueFromInstance(e, t) {
            if (zr.has(t)) {
                let n = Jf(t);
                return n && n.default || 0
            } else {
                let n = ZP(e), r = (my(t) ? n.getPropertyValue(t) : n[t]) || 0;
                return typeof r == "string" ? r.trim() : r
            }
        }

        measureInstanceViewportBox(e, {transformPagePoint: t}) {
            return u0(e, t)
        }

        build(e, t, n) {
            wd(e, t, n.transformTemplate)
        }

        scrapeMotionValuesFromProps(e, t, n) {
            return bd(e, t, n)
        }

        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {children: e} = this.props;
            ze(e) && (this.childSubscription = e.on("change", t => {
                this.current && (this.current.textContent = `${t}`)
            }))
        }
    }, A0 = class extends L0 {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = $e
        }

        getBaseTargetFromProps(e, t) {
            return e[t]
        }

        readValueFromInstance(e, t) {
            if (zr.has(t)) {
                let n = Jf(t);
                return n && n.default || 0
            }
            return t = F0.has(t) ? t : hl(t), e.getAttribute(t)
        }

        scrapeMotionValuesFromProps(e, t, n) {
            return I0(e, t, n)
        }

        build(e, t, n) {
            Sd(e, t, this.isSVGTag, n.transformTemplate)
        }

        renderInstance(e, t, n, r) {
            P0(e, t, n, r)
        }

        mount(e) {
            this.isSVGTag = kd(e.tagName), super.mount(e)
        }
    }, Cd = (e, t) => yd(e) ? new A0(t) : new V0(t, {allowProjection: e !== gn}), JP = QP({...gl, ...T0, ...k0, ...R0}, Cd),
    Jt = MF(JP);
var e_ = class extends Ce {
    getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
            let n = this.props.sizeRef.current;
            n.height = t.offsetHeight || 0, n.width = t.offsetWidth || 0, n.top = t.offsetTop, n.left = t.offsetLeft
        }
        return null
    }

    componentDidUpdate() {
    }

    render() {
        return this.props.children
    }
};

function t_({children: e, isPresent: t}) {
    let n = gi(), r = V(null), i = V({width: 0, height: 0, top: 0, left: 0}), {nonce: o} = A(Xn);
    return lt(() => {
        let {width: s, height: a, top: l, left: c} = i.current;
        if (t || !r.current || !s || !a) return;
        r.current.dataset.motionPopId = n;
        let u = document.createElement("style");
        return o && (u.nonce = o), document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `), () => {
            document.head.removeChild(u)
        }
    }, [t]), C(e_, {isPresent: t, childRef: r, sizeRef: i, children: mr(e, {ref: r})})
}

var n_ = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s}) => {
    let a = Kn(r_), l = gi(), c = Q(f => {
        a.set(f, !0);
        for (let d of a.values()) if (!d) return;
        r && r()
    }, [a, r]), u = se(() => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: f => (a.set(f, !1), () => a.delete(f))
    }), o ? [Math.random(), c] : [n, c]);
    return se(() => {
        a.forEach((f, d) => a.set(d, !1))
    }, [n]), $(() => {
        !n && !a.size && r && r()
    }, [n]), s === "popLayout" && (e = C(t_, {isPresent: n, children: e})), C(ho.Provider, {value: u, children: e})
};

function r_() {
    return new Map
}

var Ga = e => e.key || "";

function jv(e) {
    let t = [];
    return mn.forEach(e, n => {
        Mt(n) && t.push(n)
    }), t
}

var Td = ({
              children: e,
              exitBeforeEnter: t,
              custom: n,
              initial: r = !0,
              onExitComplete: i,
              presenceAffectsLayout: o = !0,
              mode: s = "sync"
          }) => {
    Zt(!t, "Replace exitBeforeEnter with mode='wait'");
    let a = se(() => jv(e), [e]), l = a.map(Ga), c = V(!0), u = V(a),
        f = Kn(() => new Map), [d, m] = De(a), [v, g] = De(a);
    $r(() => {
        c.current = !1, u.current = a;
        for (let h = 0; h < v.length; h++) {
            let y = Ga(v[h]);
            l.includes(y) ? f.delete(y) : f.get(y) !== !0 && f.set(y, !1)
        }
    }, [v, l.length, l.join("-")]);
    let b = [];
    if (a !== d) {
        let h = [...a];
        for (let y = 0; y < v.length; y++) {
            let w = v[y], k = Ga(w);
            l.includes(k) || (h.splice(y, 0, w), b.push(w))
        }
        s === "wait" && b.length && (h = b), g(jv(h)), m(a);
        return
    }
    let {forceRender: p} = A(xs);
    return C(nt, {
        children: v.map(h => {
            let y = Ga(h), w = a === v || l.includes(y), k = () => {
                if (f.has(y)) f.set(y, !0); else return;
                let S = !0;
                f.forEach(T => {
                    T || (S = !1)
                }), S && (p?.(), g(u.current), i && i())
            };
            return C(n_, {
                isPresent: w,
                initial: !c.current || r ? void 0 : !1,
                custom: w ? void 0 : n,
                presenceAffectsLayout: o,
                mode: s,
                onExitComplete: w ? void 0 : k,
                children: h
            }, y)
        })
    })
};

function D0({children: e, isValidProp: t, ...n}) {
    t && n0(t), n = {...A(Xn), ...n}, n.isStatic = Kn(() => n.isStatic);
    let r = se(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
    return C(Xn.Provider, {value: r, children: e})
}

var z0 = ve(null);

function i_() {
    let e = V(!1);
    return $r(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Rd() {
    let e = i_(), [t, n] = De(0), r = Q(() => {
        e.current && n(t + 1)
    }, [t]);
    return [Q(() => Y.postRender(r), [r]), t]
}

var o_ = e => !e.isLayoutDirty && e.willUpdate(!1);

function Hv() {
    let e = new Set, t = new WeakMap, n = () => e.forEach(o_);
    return {
        add: r => {
            e.add(r), t.set(r, r.addEventListener("willUpdate", n))
        }, remove: r => {
            e.delete(r);
            let i = t.get(r);
            i && (i(), t.delete(r)), n()
        }, dirty: n
    }
}

var B0 = e => e === !0, s_ = e => B0(e === !0) || e === "id", $0 = ({children: e, id: t, inherit: n = !0}) => {
    let r = A(xs), i = A(z0), [o, s] = Rd(), a = V(null), l = r.id || i;
    a.current === null && (s_(n) && l && (t = t ? l + "-" + t : l), a.current = {
        id: t,
        group: B0(n) && r.group || Hv()
    });
    let c = se(() => ({...a.current, forceRender: o}), [s]);
    return C(xs.Provider, {value: c, children: e})
}, a_ = {renderer: Cd, ...gl}, N0 = {renderer: Cd, ...gl, ...T0}, l_ = {...N0, ...k0, ...R0};

function Qn(e) {
    let t = Kn(() => Ge(e)), {isStatic: n} = A(Xn);
    if (n) {
        let [, r] = De(e);
        $(() => t.on("change", r), [])
    }
    return t
}

function j0(e, t) {
    let n = Qn(t()), r = () => n.set(t());
    return r(), $r(() => {
        let i = () => Y.preRender(r, !1, !0), o = e.map(s => s.on("change", i));
        return () => {
            o.forEach(s => s()), Ct(r)
        }
    }), n
}

var c_ = e => e && typeof e == "object" && e.mix, u_ = e => c_(e) ? e.mix : void 0;

function Ts(...e) {
    let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], o = e[2 + n], s = e[3 + n],
        a = fo(i, o, {mixer: u_(o[0]), ...s});
    return t ? a(r) : a
}

function f_(e) {
    fs.current = [], e();
    let t = j0(fs.current, e);
    return fs.current = void 0, t
}

function Lt(e, t, n, r) {
    if (typeof e == "function") return f_(e);
    let i = typeof t == "function" ? t : Ts(t, n, r);
    return Array.isArray(e) ? Wv(e, i) : Wv([e], ([o]) => i(o))
}

function Wv(e, t) {
    let n = Kn(() => []);
    return j0(e, () => {
        n.length = 0;
        let r = e.length;
        for (let i = 0; i < r; i++) n[i] = e[i].get();
        return t(n)
    })
}

function Uv(e) {
    return typeof e == "number" ? e : parseFloat(e)
}

function Ed(e, t = {}) {
    let {isStatic: n} = A(Xn), r = V(null), i = Qn(ze(e) ? Uv(e.get()) : e), o = V(i.get()), s = V(() => {
    }), a = () => {
        let c = r.current;
        c && c.time === 0 && c.sample(Ue.delta), l(), r.current = Qf({
            keyframes: [i.get(), o.current],
            velocity: i.getVelocity(),
            type: "spring",
            restDelta: .001,
            restSpeed: .01, ...t,
            onUpdate: s.current
        })
    }, l = () => {
        r.current && r.current.stop()
    };
    return lt(() => i.attach((c, u) => n ? u(c) : (o.current = c, s.current = u, Y.update(a), i.get()), l), [JSON.stringify(t)]), $r(() => {
        if (ze(e)) return e.on("change", c => i.set(Uv(c)))
    }, [i]), i
}

function Fd(e, t, n) {
    var r;
    if (typeof e == "string") {
        let i = document;
        t && (Zt(!!t.current, "Scope provided, but no element detected."), i = t.current), n ? ((r = n[e]) !== null && r !== void 0 || (n[e] = i.querySelectorAll(e)), e = n[e]) : e = i.querySelectorAll(e)
    } else e instanceof Element && (e = [e]);
    return Array.from(e || [])
}

var Ka = new WeakMap, Dr;

function d_(e, t) {
    if (t) {
        let {inlineSize: n, blockSize: r} = t[0];
        return {width: n, height: r}
    } else return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
        width: e.offsetWidth,
        height: e.offsetHeight
    }
}

function h_({target: e, contentRect: t, borderBoxSize: n}) {
    var r;
    (r = Ka.get(e)) === null || r === void 0 || r.forEach(i => {
        i({
            target: e, contentSize: t, get size() {
                return d_(e, n)
            }
        })
    })
}

function p_(e) {
    e.forEach(h_)
}

function m_() {
    typeof ResizeObserver > "u" || (Dr = new ResizeObserver(p_))
}

function g_(e, t) {
    Dr || m_();
    let n = Fd(e);
    return n.forEach(r => {
        let i = Ka.get(r);
        i || (i = new Set, Ka.set(r, i)), i.add(t), Dr?.observe(r)
    }), () => {
        n.forEach(r => {
            let i = Ka.get(r);
            i?.delete(t), i?.size || Dr?.unobserve(r)
        })
    }
}

var Qa = new Set, ps;

function v_() {
    ps = () => {
        let e = {width: P.innerWidth, height: P.innerHeight}, t = {target: P, size: e, contentSize: e};
        Qa.forEach(n => n(t))
    }, P.addEventListener("resize", ps)
}

function y_(e) {
    return Qa.add(e), ps || v_(), () => {
        Qa.delete(e), !Qa.size && ps && (ps = void 0)
    }
}

function b_(e, t) {
    return typeof e == "function" ? y_(e) : g_(e, t)
}

var x_ = 50, Gv = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }), w_ = () => ({time: 0, x: Gv(), y: Gv()}),
    S_ = {x: {length: "Width", position: "Left"}, y: {length: "Height", position: "Top"}};

function qv(e, t, n, r) {
    let i = n[t], {length: o, position: s} = S_[t], a = i.current, l = n.time;
    i.current = e[`scroll${s}`], i.scrollLength = e[`scroll${o}`] - e[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = br(0, i.scrollLength, i.current);
    let c = r - l;
    i.velocity = c > x_ ? 0 : Hf(i.current - a, c)
}

function k_(e, t, n) {
    qv(e, "x", t, n), qv(e, "y", t, n), t.time = n
}

function C_(e, t) {
    let n = {x: 0, y: 0}, r = e;
    for (; r && r !== t;) if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent; else if (r.tagName === "svg") {
        let i = r.getBoundingClientRect();
        r = r.parentElement;
        let o = r.getBoundingClientRect();
        n.x += i.left - o.left, n.y += i.top - o.top
    } else if (r instanceof SVGGraphicsElement) {
        let {x: i, y: o} = r.getBBox();
        n.x += i, n.y += o;
        let s = null, a = r.parentNode;
        for (; !s;) a.tagName === "svg" && (s = a), a = r.parentNode;
        r = s
    } else break;
    return n
}

var T_ = {Enter: [[0, 1], [1, 1]], Exit: [[0, 0], [1, 0]], Any: [[1, 0], [0, 1]], All: [[0, 0], [1, 1]]},
    Of = {start: 0, center: .5, end: 1};

function Xv(e, t, n = 0) {
    let r = 0;
    if (e in Of && (e = Of[e]), typeof e == "string") {
        let i = parseFloat(e);
        e.endsWith("px") ? r = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : e = i
    }
    return typeof e == "number" && (r = t * e), n + r
}

var R_ = [0, 0];

function E_(e, t, n, r) {
    let i = Array.isArray(e) ? e : R_, o = 0, s = 0;
    return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? i = e.split(" ") : i = [e, Of[e] ? e : "0"]), o = Xv(i[0], n, r), s = Xv(i[1], t), o - s
}

var F_ = {x: 0, y: 0};

function P_(e) {
    return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {width: e.clientWidth, height: e.clientHeight}
}

function __(e, t, n) {
    let {offset: r = T_.All} = n, {target: i = e, axis: o = "y"} = n, s = o === "y" ? "height" : "width",
        a = i !== e ? C_(i, e) : F_, l = i === e ? {width: e.scrollWidth, height: e.scrollHeight} : P_(i),
        c = {width: e.clientWidth, height: e.clientHeight};
    t[o].offset.length = 0;
    let u = !t[o].interpolate, f = r.length;
    for (let d = 0; d < f; d++) {
        let m = E_(r[d], c[s], l[s], a[o]);
        !u && m !== t[o].interpolatorOffsets[d] && (u = !0), t[o].offset[d] = m
    }
    u && (t[o].interpolate = fo(t[o].offset, Yf(r)), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = t[o].interpolate(t[o].current)
}

function I_(e, t = e, n) {
    if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
        let r = t;
        for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
}

function O_(e, t, n, r = {}) {
    return {
        measure: () => I_(e, r.target, n), update: i => {
            k_(e, n, i), (r.offset || r.target) && __(e, n, r)
        }, notify: () => t(n)
    }
}

var ss = new WeakMap, Yv = new WeakMap, ff = new WeakMap, Kv = e => e === document.documentElement ? P : e;

function Nr(e, {container: t = document.documentElement, ...n} = {}) {
    let r = ff.get(t);
    r || (r = new Set, ff.set(t, r));
    let i = w_(), o = O_(t, e, i, n);
    if (r.add(o), !ss.has(t)) {
        let a = () => {
            for (let d of r) d.measure()
        }, l = () => {
            for (let d of r) d.update(Ue.timestamp)
        }, c = () => {
            for (let d of r) d.notify()
        }, u = () => {
            Y.read(a, !1, !0), Y.read(l, !1, !0), Y.update(c, !1, !0)
        };
        ss.set(t, u);
        let f = Kv(t);
        P.addEventListener("resize", u, {passive: !0}), t !== document.documentElement && Yv.set(t, b_(t, u)), f.addEventListener("scroll", u, {passive: !0})
    }
    let s = ss.get(t);
    return Y.read(s, !1, !0), () => {
        var a;
        Ct(s);
        let l = ff.get(t);
        if (!l || (l.delete(o), l.size)) return;
        let c = ss.get(t);
        ss.delete(t), c && (Kv(t).removeEventListener("scroll", c), (a = Yv.get(t)) === null || a === void 0 || a(), P.removeEventListener("resize", c))
    }
}

function H0(e, t) {
    let n, r = () => {
        let {currentTime: i} = t, s = (i === null ? 0 : i.value) / 100;
        n !== s && e(s), n = s
    };
    return Y.update(r, !0), () => Ct(r)
}

function M_({source: e, container: t, axis: n = "y"}) {
    e && (t = e);
    let r = {value: 0}, i = Nr(o => {
        r.value = o[n].progress * 100
    }, {container: t, axis: n});
    return {currentTime: r, cancel: i}
}

var df = new Map;

function W0({source: e, container: t = document.documentElement, axis: n = "y"} = {}) {
    e && (t = e), df.has(t) || df.set(t, {});
    let r = df.get(t);
    return r[n] || (r[n] = Ly() ? new ScrollTimeline({source: t, axis: n}) : M_({source: t, axis: n})), r[n]
}

function L_(e) {
    return e.length === 2
}

function U0(e) {
    return e && (e.target || e.offset)
}

function V_(e, t) {
    return L_(e) || U0(t) ? Nr(n => {
        e(n[t.axis].progress, n)
    }, t) : H0(e, W0(t))
}

function A_(e, t) {
    if (U0(t)) return e.pause(), Nr(n => {
        e.time = e.duration * n[t.axis].progress
    }, t);
    {
        let n = W0(t);
        return e.attachTimeline(n, r => (r.pause(), H0(i => {
            r.time = r.duration * i
        }, n)))
    }
}

function G0(e, {axis: t = "y", ...n} = {}) {
    let r = {axis: t, ...n};
    return typeof e == "function" ? V_(e, r) : A_(e, r)
}

function Qv(e, t) {
    co(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
}

var D_ = () => ({scrollX: Ge(0), scrollY: Ge(0), scrollXProgress: Ge(0), scrollYProgress: Ge(0)});

function q0({container: e, target: t, layoutEffect: n = !0, ...r} = {}) {
    let i = Kn(D_);
    return (n ? $r : $)(() => (Qv("target", t), Qv("container", e), G0((s, {x: a, y: l}) => {
        i.scrollX.set(a.current), i.scrollXProgress.set(a.progress), i.scrollY.set(l.current), i.scrollYProgress.set(l.progress)
    }, {...r, container: e?.current || void 0, target: t?.current || void 0})), [e, t, JSON.stringify(r.offset)]), i
}

function z_(e) {
    let t = V(0), {isStatic: n} = A(Xn);
    $(() => {
        if (n) return;
        let r = ({timestamp: i, delta: o}) => {
            t.current || (t.current = i), e(i - t.current, o)
        };
        return Y.update(r, !0), () => Ct(r)
    }, [e])
}

function X0() {
    !gd.current && i0();
    let [e] = De(rl.current);
    return e
}

function ki() {
    let e = X0(), {reducedMotion: t} = A(Xn);
    return t === "never" ? !1 : t === "always" ? !0 : e
}

function B_(e) {
    e.values.forEach(t => t.stop())
}

function Mf(e, t) {
    [...t].reverse().forEach(r => {
        let i = e.getVariant(r);
        i && sd(e, i), e.variantChildren && e.variantChildren.forEach(o => {
            Mf(o, t)
        })
    })
}

function $_(e, t) {
    if (Array.isArray(t)) return Mf(e, t);
    if (typeof t == "string") return Mf(e, [t]);
    sd(e, t)
}

function Y0() {
    let e = !1, t = new Set, n = {
        subscribe(r) {
            return t.add(r), () => void t.delete(r)
        }, start(r, i) {
            Zt(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
            let o = [];
            return t.forEach(s => {
                o.push(ld(s, r, {transitionOverride: i}))
            }), Promise.all(o)
        }, set(r) {
            return Zt(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach(i => {
                $_(i, r)
            })
        }, stop() {
            t.forEach(r => {
                B_(r)
            })
        }, mount() {
            return e = !0, () => {
                e = !1, n.stop()
            }
        }
    };
    return n
}

var K0 = (e, t, n) => {
    let r = t - e;
    return ((n - e) % r + r) % r + e
};

function N_(e, t = 100, n) {
    let r = n({...e, keyframes: [0, t]}), i = Math.min(Sy(r), xf);
    return {type: "keyframes", ease: o => r.next(i * o).value / t, duration: Wn(i)}
}

function Pd(e) {
    return typeof e == "object" && !Array.isArray(e)
}

function Q0(e, t, n, r) {
    return typeof e == "string" && Pd(t) ? Fd(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e : [e]
}

function Zv(e, t, n, r) {
    var i;
    return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : (i = r.get(t)) !== null && i !== void 0 ? i : e
}

function j_(e, t) {
    return vy(e) ? e[K0(0, e.length, t)] : e
}

function H_(e, t, n) {
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        i.at > t && i.at < n && (fl(e, i), r--)
    }
}

function W_(e, t, n, r, i, o) {
    H_(e, i, o);
    for (let s = 0; s < t.length; s++) e.push({value: t[s], at: Ie(i, o, r[s]), easing: j_(n, s)})
}

function U_(e, t) {
    return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at
}

var G_ = "easeInOut";

function q_(e, {defaultTransition: t = {}, ...n} = {}, r, i) {
    let o = t.duration || .3, s = new Map, a = new Map, l = {}, c = new Map, u = 0, f = 0, d = 0;
    for (let m = 0; m < e.length; m++) {
        let v = e[m];
        if (typeof v == "string") {
            c.set(v, f);
            continue
        } else if (!Array.isArray(v)) {
            c.set(v.name, Zv(f, v.at, u, c));
            continue
        }
        let [g, b, p = {}] = v;
        p.at !== void 0 && (f = Zv(f, p.at, u, c));
        let h = 0, y = (w, k, S, T = 0, E = 0) => {
            let O = X_(w), {
                    delay: I = 0,
                    times: B = Yf(O),
                    type: z = "keyframes",
                    ...j
                } = k, {ease: J = t.ease || "easeOut", duration: H} = k, ue = typeof I == "function" ? I(T, E) : I,
                ie = O.length, q = ll(z) ? z : i?.[z];
            if (ie <= 2 && q) {
                let me = 100;
                if (ie === 2 && Q_(O)) {
                    let Ye = O[1] - O[0];
                    me = Math.abs(Ye)
                }
                let ae = {...j};
                H !== void 0 && (ae.duration = Pn(H));
                let X = N_(ae, me, q);
                J = X.ease, H = X.duration
            }
            H ?? (H = o);
            let re = f + ue, W = re + H;
            B.length === 1 && B[0] === 0 && (B[1] = 1);
            let pe = B.length - O.length;
            pe > 0 && yy(B, pe), O.length === 1 && O.unshift(null), W_(S, O, J, B, re, W), h = Math.max(ue + H, h), d = Math.max(W, d)
        };
        if (ze(g)) {
            let w = Jv(g, a);
            y(b, p, ey("default", w))
        } else {
            let w = Q0(g, b, r, l), k = w.length;
            for (let S = 0; S < k; S++) {
                b = b, p = p;
                let T = w[S], E = Jv(T, a);
                for (let O in b) y(b[O], Y_(p, O), ey(O, E), S, k)
            }
        }
        u = f, f += h
    }
    return a.forEach((m, v) => {
        for (let g in m) {
            let b = m[g];
            b.sort(U_);
            let p = [], h = [], y = [];
            for (let k = 0; k < b.length; k++) {
                let {at: S, value: T, easing: E} = b[k];
                p.push(T), h.push(br(0, d, S)), y.push(E || "easeOut")
            }
            h[0] !== 0 && (h.unshift(0), p.unshift(p[0]), y.unshift(G_)), h[h.length - 1] !== 1 && (h.push(1), p.push(null)), s.has(v) || s.set(v, {
                keyframes: {},
                transition: {}
            });
            let w = s.get(v);
            w.keyframes[g] = p, w.transition[g] = {...t, duration: d, ease: y, times: h, ...n}
        }
    }), s
}

function Jv(e, t) {
    return !t.has(e) && t.set(e, {}), t.get(e)
}

function ey(e, t) {
    return t[e] || (t[e] = []), t[e]
}

function X_(e) {
    return Array.isArray(e) ? e : [e]
}

function Y_(e, t) {
    return e && e[t] ? {...e, ...e[t]} : {...e}
}

var K_ = e => typeof e == "number", Q_ = e => e.every(K_);

function Z_(e, t) {
    return e in t
}

var J_ = class extends vd {
    constructor() {
        super(...arguments), this.type = "object"
    }

    readValueFromInstance(e, t) {
        if (Z_(t, e)) {
            let n = e[t];
            if (typeof n == "string" || typeof n == "number") return n
        }
    }

    getBaseTargetFromProps() {
    }

    removeValueFromRenderState(e, t) {
        delete t.output[e]
    }

    measureInstanceViewportBox() {
        return $e()
    }

    build(e, t) {
        Object.assign(e.output, t)
    }

    renderInstance(e, {output: t}) {
        Object.assign(e, t)
    }

    sortInstanceNodePosition() {
        return 0
    }
};

function eI(e) {
    let t = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {}},
            latestValues: {}
        }
    }, n = v0(e) ? new A0(t) : new V0(t);
    n.mount(e), Yn.set(e, n)
}

function tI(e) {
    let t = {presenceContext: null, props: {}, visualState: {renderState: {output: {}}, latestValues: {}}},
        n = new J_(t);
    n.mount(e), Yn.set(e, n)
}

function nI(e, t) {
    return ze(e) || typeof e == "number" || typeof e == "string" && !Pd(t)
}

function Z0(e, t, n, r) {
    let i = [];
    if (nI(e, t)) i.push(y0(e, Pd(t) && t.default || t, n && (n.default || n))); else {
        let o = Q0(e, t, r), s = o.length;
        Zt(!!s, "No valid elements provided.");
        for (let a = 0; a < s; a++) {
            let l = o[a], c = l instanceof Element ? eI : tI;
            Yn.has(l) || c(l);
            let u = Yn.get(l), f = {...n};
            "delay" in f && typeof f.delay == "function" && (f.delay = f.delay(a, s)), i.push(...ad(u, {
                ...t,
                transition: f
            }, {}))
        }
    }
    return i
}

function rI(e, t, n) {
    let r = [];
    return q_(e, t, n, {spring: Ss}).forEach(({keyframes: o, transition: s}, a) => {
        r.push(...Z0(a, o, s))
    }), r
}

function iI(e) {
    return Array.isArray(e) && Array.isArray(e[0])
}

function J0(e) {
    function t(n, r, i) {
        let o = [];
        iI(n) ? o = rI(n, r, e) : o = Z0(n, r, i, e);
        let s = new Vy(o);
        return e && e.animations.push(s), s
    }

    return t
}

var Zn = J0();

function eb() {
    let e = Kn(Y0);
    return $r(e.mount, []), e
}

var tb = eb;
var oI = {some: 0, all: 1};

function Sl(e, t, {root: n, margin: r, amount: i = "some"} = {}) {
    let o = Fd(e), s = new WeakMap, a = c => {
        c.forEach(u => {
            let f = s.get(u.target);
            if (u.isIntersecting !== !!f) if (u.isIntersecting) {
                let d = t(u);
                typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target)
            } else f && (f(u), s.delete(u.target))
        })
    }, l = new IntersectionObserver(a, {root: n, rootMargin: r, threshold: typeof i == "number" ? i : oI[i]});
    return o.forEach(c => l.observe(c)), () => l.disconnect()
}

function sI(e, {root: t, margin: n, amount: r, once: i = !1} = {}) {
    let [o, s] = De(!1);
    return $(() => {
        if (!e.current || i && o) return;
        let a = () => (s(!0), i ? void 0 : () => s(!1)), l = {root: t && t.current || void 0, margin: n, amount: r};
        return Sl(e.current, a, l)
    }, [t, e, n, i, r]), o
}

function kl(e) {
    return e !== null && typeof e == "object" && md in e
}

function _d(e) {
    if (kl(e)) return e[md]
}

function Id() {
    return aI
}

function aI(e) {
    Si.current && (Si.current.isUpdating = !1, Si.current.blockUpdate(), e && e())
}

function nb() {
    let [e, t] = Rd(), n = Id(), r = V();
    return $(() => {
        Y.postRender(() => Y.postRender(() => {
            t === r.current && (Ja.current = !1)
        }))
    }, [t]), i => {
        n(() => {
            Ja.current = !0, e(), i(), r.current = t + 1
        })
    }
}

function rb() {
    return Q(() => {
        let t = Si.current;
        t && t.resetTree()
    }, [])
}

var ty = () => ({});
var pN = wl({scrapeMotionValuesFromProps: ty, createRenderState: ty});
var ib = {};
bg(ib, {Group: () => uI, Item: () => pI});
var ob = ve(null);

function lI(e, t, n, r) {
    if (!r) return e;
    let i = e.findIndex(u => u.value === t);
    if (i === -1) return e;
    let o = r > 0 ? 1 : -1, s = e[i + o];
    if (!s) return e;
    let a = e[i], l = s.layout, c = Ie(l.min, l.max, .5);
    return o === 1 && a.layout.max + n > c || o === -1 && a.layout.min + n < c ? zE(e, i, i + o) : e
}

function cI({children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o}, s) {
    let a = Kn(() => Jt[t]), l = [], c = V(!1);
    Zt(!!i, "Reorder.Group must be provided a values prop");
    let u = {
        axis: n, registerItem: (f, d) => {
            let m = l.findIndex(v => f === v.value);
            m !== -1 ? l[m].layout = d[n] : l.push({value: f, layout: d[n]}), l.sort(dI)
        }, updateOrder: (f, d, m) => {
            if (c.current) return;
            let v = lI(l, f, d, m);
            l !== v && (c.current = !0, r(v.map(fI).filter(g => i.indexOf(g) !== -1)))
        }
    };
    return $(() => {
        c.current = !1
    }), C(a, {...o, ref: s, ignoreStrict: !0, children: C(ob.Provider, {value: u, children: e})})
}

var uI = Ve(cI);

function fI(e) {
    return e.value
}

function dI(e, t) {
    return e.layout.min - t.layout.min
}

function ny(e, t = 0) {
    return ze(e) ? e : Qn(t)
}

function hI({children: e, style: t = {}, value: n, as: r = "li", onDrag: i, layout: o = !0, ...s}, a) {
    let l = Kn(() => Jt[r]), c = A(ob), u = {x: ny(t.x), y: ny(t.y)},
        f = Lt([u.x, u.y], ([g, b]) => g || b ? 1 : "unset");
    Zt(!!c, "Reorder.Item must be a child of Reorder.Group");
    let {axis: d, registerItem: m, updateOrder: v} = c;
    return C(l, {
        drag: d, ...s,
        dragSnapToOrigin: !0,
        style: {...t, x: u.x, y: u.y, zIndex: f},
        layout: o,
        onDrag: (g, b) => {
            let {velocity: p} = b;
            p[d] && v(n, u[d].get(), p[d]), i && i(g, b)
        },
        onLayoutMeasure: g => m(n, g),
        ref: a,
        ignoreStrict: !0,
        children: e
    })
}

var pI = Ve(hI);

function mI(e, t) {
    if (e === "first") return 0;
    {
        let n = t - 1;
        return e === "last" ? n : n / 2
    }
}

function Od(e = .1, {startDelay: t = 0, from: n = 0, ease: r} = {}) {
    return (i, o) => {
        let s = typeof n == "number" ? n : mI(n, o), a = Math.abs(s - i), l = e * a;
        if (r) {
            let c = o * e;
            l = vf(r)(l / c) * c
        }
        return t + l
    }
}

var gI = Y, vI = as.reduce((e, t) => (e[t] = n => Ct(n), e), {});
var Z2 = {};
Gu(Z2, {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => $2,
    createPortal: () => N2,
    createRoot: () => j2,
    default: () => SS,
    findDOMNode: () => H2,
    flushSync: () => W2,
    hydrate: () => U2,
    hydrateRoot: () => G2,
    render: () => q2,
    unmountComponentAtNode: () => X2,
    unstable_batchedUpdates: () => Y2,
    unstable_renderSubtreeIntoContainer: () => K2,
    version: () => Q2
});
var Pl = {};
Gu(Pl, {
    default: () => ee,
    unstable_IdlePriority: () => xI,
    unstable_ImmediatePriority: () => wI,
    unstable_LowPriority: () => SI,
    unstable_NormalPriority: () => kI,
    unstable_Profiling: () => CI,
    unstable_UserBlockingPriority: () => TI,
    unstable_cancelCallback: () => RI,
    unstable_continueExecution: () => EI,
    unstable_forceFrameRate: () => FI,
    unstable_getCurrentPriorityLevel: () => PI,
    unstable_getFirstCallbackNode: () => _I,
    unstable_next: () => II,
    unstable_now: () => bI,
    unstable_pauseExecution: () => OI,
    unstable_requestPaint: () => MI,
    unstable_runWithPriority: () => LI,
    unstable_scheduleCallback: () => VI,
    unstable_shouldYield: () => AI,
    unstable_wrapCallback: () => DI
});
var ee = {};

function Ad(e, t) {
    var n = e.length;
    e.push(t);
    e:for (; 0 < n;) {
        var r = n - 1 >>> 1, i = e[r];
        if (!(0 < Cl(i, t))) break e;
        e[r] = t, e[n] = i, n = r
    }
}

function _n(e) {
    return e.length === 0 ? null : e[0]
}

function Rl(e) {
    if (e.length === 0) return null;
    var t = e[0], n = e.pop();
    if (n !== t) {
        e[0] = n;
        e:for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
            var s = 2 * (r + 1) - 1, a = e[s], l = s + 1, c = e[l];
            if (0 > Cl(a, n)) l < i && 0 > Cl(c, a) ? (e[r] = c, e[l] = n, r = l) : (e[r] = a, e[s] = n, r = s); else {
                if (!(l < i && 0 > Cl(c, n))) break e;
                e[r] = c, e[l] = n, r = l
            }
        }
    }
    return t
}

function Cl(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n !== 0 ? n : e.id - t.id
}

typeof performance == "object" && typeof performance.now == "function" ? (sb = performance, ee.unstable_now = function () {
    return sb.now()
}) : (Md = Date, ab = Md.now(), ee.unstable_now = function () {
    return Md.now() - ab
});
var sb, Md, ab, Jn = [], jr = [], yI = 1, bn = null, Tt = 3, El = !1, Ci = !1, Es = !1,
    ub = typeof setTimeout == "function" ? setTimeout : null,
    fb = typeof clearTimeout == "function" ? clearTimeout : null, lb = typeof setImmediate < "u" ? setImmediate : null;
typeof Fe < "u" && Fe.scheduling !== void 0 && Fe.scheduling.isInputPending !== void 0 && Fe.scheduling.isInputPending.bind(Fe.scheduling);

function Dd(e) {
    for (var t = _n(jr); t !== null;) {
        if (t.callback === null) Rl(jr); else {
            if (!(t.startTime <= e)) break;
            Rl(jr), t.sortIndex = t.expirationTime, Ad(Jn, t)
        }
        t = _n(jr)
    }
}

function zd(e) {
    if (Es = !1, Dd(e), !Ci) if (_n(Jn) !== null) Ci = !0, $d(Bd); else {
        var t = _n(jr);
        t !== null && Nd(zd, t.startTime - e)
    }
}

function Bd(e, t) {
    Ci = !1, Es && (Es = !1, fb(Fs), Fs = -1), El = !0;
    var n = Tt;
    try {
        for (Dd(t), bn = _n(Jn); bn !== null && (!(bn.expirationTime > t) || e && !pb());) {
            var r = bn.callback;
            if (typeof r == "function") {
                bn.callback = null, Tt = bn.priorityLevel;
                var i = r(bn.expirationTime <= t);
                t = ee.unstable_now(), typeof i == "function" ? bn.callback = i : bn === _n(Jn) && Rl(Jn), Dd(t)
            } else Rl(Jn);
            bn = _n(Jn)
        }
        if (bn !== null) var o = !0; else {
            var s = _n(jr);
            s !== null && Nd(zd, s.startTime - t), o = !1
        }
        return o
    } finally {
        bn = null, Tt = n, El = !1
    }
}

var Fl = !1, Tl = null, Fs = -1, db = 5, hb = -1;

function pb() {
    return !(ee.unstable_now() - hb < db)
}

function Ld() {
    if (Tl !== null) {
        var e = ee.unstable_now();
        hb = e;
        var t = !0;
        try {
            t = Tl(!0, e)
        } finally {
            t ? Rs() : (Fl = !1, Tl = null)
        }
    } else Fl = !1
}

var Rs;
typeof lb == "function" ? Rs = function () {
    lb(Ld)
} : typeof MessageChannel < "u" ? (Vd = new MessageChannel, cb = Vd.port2, Vd.port1.onmessage = Ld, Rs = function () {
    cb.postMessage(null)
}) : Rs = function () {
    ub(Ld, 0)
};
var Vd, cb;

function $d(e) {
    Tl = e, Fl || (Fl = !0, Rs())
}

function Nd(e, t) {
    Fs = ub(function () {
        e(ee.unstable_now())
    }, t)
}

ee.unstable_IdlePriority = 5;
ee.unstable_ImmediatePriority = 1;
ee.unstable_LowPriority = 4;
ee.unstable_NormalPriority = 3;
ee.unstable_Profiling = null;
ee.unstable_UserBlockingPriority = 2;
ee.unstable_cancelCallback = function (e) {
    e.callback = null
};
ee.unstable_continueExecution = function () {
    Ci || El || (Ci = !0, $d(Bd))
};
ee.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : db = 0 < e ? Math.floor(1e3 / e) : 5
};
ee.unstable_getCurrentPriorityLevel = function () {
    return Tt
};
ee.unstable_getFirstCallbackNode = function () {
    return _n(Jn)
};
ee.unstable_next = function (e) {
    switch (Tt) {
        case 1:
        case 2:
        case 3:
            var t = 3;
            break;
        default:
            t = Tt
    }
    var n = Tt;
    Tt = t;
    try {
        return e()
    } finally {
        Tt = n
    }
};
ee.unstable_pauseExecution = function () {
};
ee.unstable_requestPaint = function () {
};
ee.unstable_runWithPriority = function (e, t) {
    switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            e = 3
    }
    var n = Tt;
    Tt = e;
    try {
        return t()
    } finally {
        Tt = n
    }
};
ee.unstable_scheduleCallback = function (e, t, n) {
    var r = ee.unstable_now();
    switch (typeof n == "object" && n !== null ? (n = n.delay, n = typeof n == "number" && 0 < n ? r + n : r) : n = r, e) {
        case 1:
            var i = -1;
            break;
        case 2:
            i = 250;
            break;
        case 5:
            i = 1073741823;
            break;
        case 4:
            i = 1e4;
            break;
        default:
            i = 5e3
    }
    return i = n + i, e = {
        id: yI++,
        callback: t,
        priorityLevel: e,
        startTime: n,
        expirationTime: i,
        sortIndex: -1
    }, n > r ? (e.sortIndex = n, Ad(jr, e), _n(Jn) === null && e === _n(jr) && (Es ? (fb(Fs), Fs = -1) : Es = !0, Nd(zd, n - r))) : (e.sortIndex = i, Ad(Jn, e), Ci || El || (Ci = !0, $d(Bd))), e
};
ee.unstable_shouldYield = pb;
ee.unstable_wrapCallback = function (e) {
    var t = Tt;
    return function () {
        var n = Tt;
        Tt = t;
        try {
            return e.apply(this, arguments)
        } finally {
            Tt = n
        }
    }
};
var bI = ee.unstable_now, xI = ee.unstable_IdlePriority, wI = ee.unstable_ImmediatePriority,
    SI = ee.unstable_LowPriority, kI = ee.unstable_NormalPriority, CI = ee.unstable_Profiling,
    TI = ee.unstable_UserBlockingPriority, RI = ee.unstable_cancelCallback, EI = ee.unstable_continueExecution,
    FI = ee.unstable_forceFrameRate, PI = ee.unstable_getCurrentPriorityLevel, _I = ee.unstable_getFirstCallbackNode,
    II = ee.unstable_next, OI = ee.unstable_pauseExecution, MI = ee.unstable_requestPaint,
    LI = ee.unstable_runWithPriority, VI = ee.unstable_scheduleCallback, AI = ee.unstable_shouldYield,
    DI = ee.unstable_wrapCallback;
var zI = "default" in St ? x : St, BI = "default" in Pl ? ee : Pl, on = {}, wx = zI, rn = BI;

function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var Sx = new Set, Ks = {};

function Di(e, t) {
    Lo(e, t), Lo(e + "Capture", t)
}

function Lo(e, t) {
    for (Ks[e] = t, e = 0; e < t.length; e++) Sx.add(t[e])
}

var Tr = !(typeof P > "u" || typeof P.document > "u" || typeof P.document.createElement > "u"),
    uh = Object.prototype.hasOwnProperty,
    $I = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    mb = {}, gb = {};

function NI(e) {
    return uh.call(gb, e) ? !0 : uh.call(mb, e) ? !1 : $I.test(e) ? gb[e] = !0 : (mb[e] = !0, !1)
}

function jI(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function HI(e, t, n, r) {
    if (t === null || typeof t > "u" || jI(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Dt(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}

var xt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    xt[e] = new Dt(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    xt[t] = new Dt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    xt[e] = new Dt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    xt[e] = new Dt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    xt[e] = new Dt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    xt[e] = new Dt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    xt[e] = new Dt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    xt[e] = new Dt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    xt[e] = new Dt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var tp = /[\-:]([a-z])/g;

function np(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(tp, np);
    xt[t] = new Dt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(tp, np);
    xt[t] = new Dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(tp, np);
    xt[t] = new Dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    xt[e] = new Dt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
xt.xlinkHref = new Dt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    xt[e] = new Dt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function rp(e, t, n, r) {
    var i = xt.hasOwnProperty(t) ? xt[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (HI(t, n, i, r) && (n = null), r || i === null ? NI(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type !== 3 && "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var Pr = wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _l = Symbol.for("react.element"),
    go = Symbol.for("react.portal"), vo = Symbol.for("react.fragment"), ip = Symbol.for("react.strict_mode"),
    fh = Symbol.for("react.profiler"), kx = Symbol.for("react.provider"), Cx = Symbol.for("react.context"),
    op = Symbol.for("react.forward_ref"), dh = Symbol.for("react.suspense"), hh = Symbol.for("react.suspense_list"),
    sp = Symbol.for("react.memo"), Wr = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var Tx = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var vb = Symbol.iterator;

function Ps(e) {
    return e === null || typeof e != "object" ? null : (e = vb && e[vb] || e["@@iterator"], typeof e == "function" ? e : null)
}

var jd, He = Object.assign;

function Ds(e) {
    if (jd === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        jd = t && t[1] || ""
    }
    return `
` + jd + e
}

var Hd = !1;

function Wd(e, t) {
    if (!e || Hd) return "";
    Hd = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (c) {
                var r = c
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (c) {
                r = c
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--) if (i[s] !== o[a]) {
                if (s !== 1 || a !== 1) do if (s--, a--, 0 > a || i[s] !== o[a]) {
                    var l = `
` + i[s].replace(" at new ", " at ");
                    return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                } while (1 <= s && 0 <= a);
                break
            }
        }
    } finally {
        Hd = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ds(e) : ""
}

function WI(e) {
    switch (e.tag) {
        case 5:
            return Ds(e.type);
        case 16:
            return Ds("Lazy");
        case 13:
            return Ds("Suspense");
        case 19:
            return Ds("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Wd(e.type, !1), e;
        case 11:
            return e = Wd(e.type.render, !1), e;
        case 1:
            return e = Wd(e.type, !0), e;
        default:
            return ""
    }
}

function ph(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case vo:
            return "Fragment";
        case go:
            return "Portal";
        case fh:
            return "Profiler";
        case ip:
            return "StrictMode";
        case dh:
            return "Suspense";
        case hh:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Cx:
            return (e.displayName || "Context") + ".Consumer";
        case kx:
            return (e._context.displayName || "Context") + ".Provider";
        case op:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case sp:
            return t = e.displayName || null, t !== null ? t : ph(e.type) || "Memo";
        case Wr:
            t = e._payload, e = e._init;
            try {
                return ph(e(t))
            } catch {
            }
    }
    return null
}

function UI(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return ph(t);
        case 8:
            return t === ip ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function ii(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function Rx(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function GI(e) {
    var t = Rx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get, o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return i.call(this)
            }, set: function (s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (s) {
                r = "" + s
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Il(e) {
    e._valueTracker || (e._valueTracker = GI(e))
}

function Ex(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Rx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0)
}

function oc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function mh(e, t) {
    var n = t.checked;
    return He({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function yb(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ii(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Fx(e, t) {
    t = t.checked, t != null && rp(e, "checked", t, !1)
}

function gh(e, t) {
    Fx(e, t);
    var n = ii(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? vh(e, t.type, n) : t.hasOwnProperty("defaultValue") && vh(e, t.type, ii(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function bb(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function vh(e, t, n) {
    t === "number" && oc(e.ownerDocument) === e || (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var zs = Array.isArray;

function Fo(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ii(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function yh(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
    return He({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function xb(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(M(92));
            if (zs(n)) {
                if (1 < n.length) throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: ii(n)}
}

function Px(e, t) {
    var n = ii(t.value), r = ii(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function wb(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function _x(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function bh(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _x(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var Ol, Ix = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (Ol = Ol || document.createElement("div"), Ol.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ol.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Qs(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var Ns = {
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
    strokeWidth: !0
}, qI = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ns).forEach(function (e) {
    qI.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Ns[t] = Ns[e]
    })
});

function Ox(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ns.hasOwnProperty(e) && Ns[e] ? ("" + t).trim() : t + "px"
}

function Mx(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Ox(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
    }
}

var XI = He({menuitem: !0}, {
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
    wbr: !0
});

function xh(e, t) {
    if (t) {
        if (XI[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(M(62))
    }
}

function wh(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var Sh = null;

function ap(e) {
    return e = e.target || e.srcElement || P, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var kh = null, Po = null, _o = null;

function Sb(e) {
    if (e = ma(e)) {
        if (typeof kh != "function") throw Error(M(280));
        var t = e.stateNode;
        t && (t = Mc(t), kh(e.stateNode, e.type, t))
    }
}

function Lx(e) {
    Po ? _o ? _o.push(e) : _o = [e] : Po = e
}

function Vx() {
    if (Po) {
        var e = Po, t = _o;
        if (_o = Po = null, Sb(e), t) for (e = 0; e < t.length; e++) Sb(t[e])
    }
}

function Ax(e, t) {
    return e(t)
}

function Dx() {
}

var Ud = !1;

function zx(e, t, n) {
    if (Ud) return e(t, n);
    Ud = !0;
    try {
        return Ax(e, t, n)
    } finally {
        Ud = !1, (Po !== null || _o !== null) && (Dx(), Vx())
    }
}

function Zs(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Mc(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(M(231, t, typeof n));
    return n
}

var Ch = !1;
if (Tr) try {
    po = {}, Object.defineProperty(po, "passive", {
        get: function () {
            Ch = !0
        }
    }), P.addEventListener("test", po, po), P.removeEventListener("test", po, po)
} catch {
    Ch = !1
}
var po;

function YI(e, t, n, r, i, o, s, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}

var js = !1, sc = null, ac = !1, Th = null, KI = {
    onError: function (e) {
        js = !0, sc = e
    }
};

function QI(e, t, n, r, i, o, s, a, l) {
    js = !1, sc = null, YI.apply(KI, arguments)
}

function ZI(e, t, n, r, i, o, s, a, l) {
    if (QI.apply(this, arguments), js) {
        if (!js) throw Error(M(198));
        var c = sc;
        js = !1, sc = null, ac || (ac = !0, Th = c)
    }
}

function zi(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, 4098 & t.flags && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Bx(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function kb(e) {
    if (zi(e) !== e) throw Error(M(188))
}

function JI(e) {
    var t = e.alternate;
    if (!t) {
        if (t = zi(e), t === null) throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return kb(i), e;
                if (o === r) return kb(i), t;
                o = o.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return) n = i, r = o; else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(M(189))
            }
        }
        if (n.alternate !== r) throw Error(M(190))
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? e : t
}

function $x(e) {
    return e = JI(e), e !== null ? Nx(e) : null
}

function Nx(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Nx(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var jx = rn.unstable_scheduleCallback, Cb = rn.unstable_cancelCallback, eO = rn.unstable_shouldYield,
    tO = rn.unstable_requestPaint, Ze = rn.unstable_now, nO = rn.unstable_getCurrentPriorityLevel,
    lp = rn.unstable_ImmediatePriority, Hx = rn.unstable_UserBlockingPriority, lc = rn.unstable_NormalPriority,
    rO = rn.unstable_LowPriority, Wx = rn.unstable_IdlePriority, Pc = null, rr = null;

function iO(e) {
    if (rr && typeof rr.onCommitFiberRoot == "function") try {
        rr.onCommitFiberRoot(Pc, e, void 0, (128 & e.current.flags) === 128)
    } catch {
    }
}

var Vn = Math.clz32 ? Math.clz32 : aO, oO = Math.log, sO = Math.LN2;

function aO(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (oO(e) / sO | 0) | 0
}

var Ml = 64, Ll = 4194304;

function Bs(e) {
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
            return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return 130023424 & e;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function cc(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = 268435455 & n;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Bs(a) : (o &= s, o !== 0 && (r = Bs(o)))
    } else s = n & ~i, s !== 0 ? r = Bs(s) : o !== 0 && (r = Bs(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (4194240 & o) !== 0)) return t;
    if (4 & r && (r |= 16 & n), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Vn(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function lO(e, t) {
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
            return -1
    }
}

function cO(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - Vn(o), a = 1 << s, l = i[s];
        l === -1 ? a & n && !(a & r) || (i[s] = lO(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function Rh(e) {
    return e = -1073741825 & e.pendingLanes, e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
}

function Ux() {
    var e = Ml;
    return Ml <<= 1, !(4194240 & Ml) && (Ml = 64), e
}

function Gd(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ha(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Vn(t), e[t] = n
}

function uO(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Vn(n), o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function cp(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Vn(n), i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}

var we = 0;

function Gx(e) {
    return e &= -e, 1 < e ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
}

var qx, up, Xx, Yx, Kx, Eh = !1, Vl = [], Kr = null, Qr = null, Zr = null, Js = new Map, ea = new Map, Gr = [],
    fO = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Tb(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            Kr = null;
            break;
        case"dragenter":
        case"dragleave":
            Qr = null;
            break;
        case"mouseover":
        case"mouseout":
            Zr = null;
            break;
        case"pointerover":
        case"pointerout":
            Js.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            ea.delete(t.pointerId)
    }
}

function _s(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = ma(t), t !== null && up(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function dO(e, t, n, r, i) {
    switch (t) {
        case"focusin":
            return Kr = _s(Kr, e, t, n, r, i), !0;
        case"dragenter":
            return Qr = _s(Qr, e, t, n, r, i), !0;
        case"mouseover":
            return Zr = _s(Zr, e, t, n, r, i), !0;
        case"pointerover":
            var o = i.pointerId;
            return Js.set(o, _s(Js.get(o) || null, e, t, n, r, i)), !0;
        case"gotpointercapture":
            return o = i.pointerId, ea.set(o, _s(ea.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Qx(e) {
    var t = Ei(e.target);
    if (t !== null) {
        var n = zi(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Bx(n), t !== null) {
                    e.blockedOn = t, Kx(e.priority, function () {
                        Xx(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Yl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Fh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null) return t = ma(n), t !== null && up(t), e.blockedOn = n, !1;
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Sh = r, n.target.dispatchEvent(r), Sh = null, t.shift()
    }
    return !0
}

function Rb(e, t, n) {
    Yl(e) && n.delete(t)
}

function hO() {
    Eh = !1, Kr !== null && Yl(Kr) && (Kr = null), Qr !== null && Yl(Qr) && (Qr = null), Zr !== null && Yl(Zr) && (Zr = null), Js.forEach(Rb), ea.forEach(Rb)
}

function Is(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Eh || (Eh = !0, rn.unstable_scheduleCallback(rn.unstable_NormalPriority, hO)))
}

function ta(e) {
    function t(i) {
        return Is(i, e)
    }

    if (0 < Vl.length) {
        Is(Vl[0], e);
        for (var n = 1; n < Vl.length; n++) {
            var r = Vl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Kr !== null && Is(Kr, e), Qr !== null && Is(Qr, e), Zr !== null && Is(Zr, e), Js.forEach(t), ea.forEach(t), n = 0; n < Gr.length; n++) r = Gr[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Gr.length && (n = Gr[0], n.blockedOn === null);) Qx(n), n.blockedOn === null && Gr.shift()
}

var Io = Pr.ReactCurrentBatchConfig, uc = !0;

function pO(e, t, n, r) {
    var i = we, o = Io.transition;
    Io.transition = null;
    try {
        we = 1, fp(e, t, n, r)
    } finally {
        we = i, Io.transition = o
    }
}

function mO(e, t, n, r) {
    var i = we, o = Io.transition;
    Io.transition = null;
    try {
        we = 4, fp(e, t, n, r)
    } finally {
        we = i, Io.transition = o
    }
}

function fp(e, t, n, r) {
    if (uc) {
        var i = Fh(e, t, n, r);
        if (i === null) Jd(e, t, r, fc, n), Tb(e, r); else if (dO(i, e, t, n, r)) r.stopPropagation(); else if (Tb(e, r), 4 & t && -1 < fO.indexOf(e)) {
            for (; i !== null;) {
                var o = ma(i);
                if (o !== null && qx(o), o = Fh(e, t, n, r), o === null && Jd(e, t, r, fc, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else Jd(e, t, r, null, n)
    }
}

var fc = null;

function Fh(e, t, n, r) {
    if (fc = null, e = ap(r), e = Ei(e), e !== null) if (t = zi(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = Bx(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return fc = e, null
}

function Zx(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (nO()) {
                case lp:
                    return 1;
                case Hx:
                    return 4;
                case lc:
                case rO:
                    return 16;
                case Wx:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var Xr = null, dp = null, Kl = null;

function Jx() {
    if (Kl) return Kl;
    var e, t, n = dp, r = n.length, i = "value" in Xr ? Xr.value : Xr.textContent, o = i.length;
    for (e = 0; e < r && n[e] === i[e]; e++) ;
    var s = r - e;
    for (t = 1; t <= s && n[r - t] === i[o - t]; t++) ;
    return Kl = i.slice(e, 1 < t ? 1 - t : void 0)
}

function Ql(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Al() {
    return !0
}

function Eb() {
    return !1
}

function sn(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Al : Eb, this.isPropagationStopped = Eb, this
    }

    return He(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Al)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Al)
        }, persist: function () {
        }, isPersistent: Al
    }), t
}

var qd, Xd, Os, No = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, hp = sn(No), pa = He({}, No, {view: 0, detail: 0}), gO = sn(pa), _c = He({}, pa, {
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
        getModifierState: pp,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Os && (Os && e.type === "mousemove" ? (qd = e.screenX - Os.screenX, Xd = e.screenY - Os.screenY) : Xd = qd = 0, Os = e), qd)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Xd
        }
    }), Fb = sn(_c), vO = He({}, _c, {dataTransfer: 0}), yO = sn(vO), bO = He({}, pa, {relatedTarget: 0}), Yd = sn(bO),
    xO = He({}, No, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), wO = sn(xO), SO = He({}, No, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : P.clipboardData
        }
    }), kO = sn(SO), CO = He({}, No, {data: 0}), Pb = sn(CO), TO = {
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
        MozPrintableKey: "Unidentified"
    }, RO = {
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
        224: "Meta"
    }, EO = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function FO(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = EO[e]) && !!t[e]
}

function pp() {
    return FO
}

var PO = He({}, pa, {
    key: function (e) {
        if (e.key) {
            var t = TO[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = Ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? RO[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pp,
    charCode: function (e) {
        return e.type === "keypress" ? Ql(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? Ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), _O = sn(PO), IO = He({}, _c, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), _b = sn(IO), OO = He({}, pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pp
}), MO = sn(OO), LO = He({}, No, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), VO = sn(LO), AO = He({}, _c, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), DO = sn(AO), zO = [9, 13, 27, 32], mp = Tr && "CompositionEvent" in P, Hs = null;
Tr && "documentMode" in document && (Hs = document.documentMode);
var BO = Tr && "TextEvent" in P && !Hs, ew = Tr && (!mp || Hs && 8 < Hs && 11 >= Hs), Ib = String.fromCharCode(32),
    Ob = !1;

function tw(e, t) {
    switch (e) {
        case"keyup":
            return zO.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function nw(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var yo = !1;

function $O(e, t) {
    switch (e) {
        case"compositionend":
            return nw(t);
        case"keypress":
            return t.which !== 32 ? null : (Ob = !0, Ib);
        case"textInput":
            return e = t.data, e === Ib && Ob ? null : e;
        default:
            return null
    }
}

function NO(e, t) {
    if (yo) return e === "compositionend" || !mp && tw(e, t) ? (e = Jx(), Kl = dp = Xr = null, yo = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return ew && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var jO = {
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
    week: !0
};

function Mb(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jO[e.type] : t === "textarea"
}

function rw(e, t, n, r) {
    Lx(r), t = dc(t, "onChange"), 0 < t.length && (n = new hp("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var Ws = null, na = null;

function HO(e) {
    pw(e, 0)
}

function Ic(e) {
    var t = wo(e);
    if (Ex(t)) return e
}

function WO(e, t) {
    if (e === "change") return t
}

var iw = !1;
Tr && (Tr ? (zl = "oninput" in document, zl || (Kd = document.createElement("div"), Kd.setAttribute("oninput", "return;"), zl = typeof Kd.oninput == "function"), Dl = zl) : Dl = !1, iw = Dl && (!document.documentMode || 9 < document.documentMode));
var Dl, zl, Kd;

function Lb() {
    Ws && (Ws.detachEvent("onpropertychange", ow), na = Ws = null)
}

function ow(e) {
    if (e.propertyName === "value" && Ic(na)) {
        var t = [];
        rw(t, na, e, ap(e)), zx(HO, t)
    }
}

function UO(e, t, n) {
    e === "focusin" ? (Lb(), Ws = t, na = n, Ws.attachEvent("onpropertychange", ow)) : e === "focusout" && Lb()
}

function GO(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ic(na)
}

function qO(e, t) {
    if (e === "click") return Ic(t)
}

function XO(e, t) {
    if (e === "input" || e === "change") return Ic(t)
}

function YO(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var Dn = typeof Object.is == "function" ? Object.is : YO;

function ra(e, t) {
    if (Dn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!uh.call(t, i) || !Dn(e[i], t[i])) return !1
    }
    return !0
}

function Vb(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Ab(e, t) {
    var n = Vb(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Vb(n)
    }
}

function sw(e, t) {
    return !(!e || !t) && (e === t || (!e || e.nodeType !== 3) && (t && t.nodeType === 3 ? sw(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
}

function aw() {
    for (var e = P, t = oc(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (!n) break;
        e = t.contentWindow, t = oc(e.document)
    }
    return t
}

function gp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function KO(e) {
    var t = aw(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && sw(n.ownerDocument.documentElement, n)) {
        if (r !== null && gp(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || P, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length, o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Ab(n, o);
                var s = Ab(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var QO = Tr && "documentMode" in document && 11 >= document.documentMode, bo = null, Ph = null, Us = null, _h = !1;

function Db(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    _h || bo == null || bo !== oc(r) || (r = bo, "selectionStart" in r && gp(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || P).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Us && ra(Us, r) || (Us = r, r = dc(Ph, "onSelect"), 0 < r.length && (t = new hp("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = bo)))
}

function Bl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var xo = {
    animationend: Bl("Animation", "AnimationEnd"),
    animationiteration: Bl("Animation", "AnimationIteration"),
    animationstart: Bl("Animation", "AnimationStart"),
    transitionend: Bl("Transition", "TransitionEnd")
}, Qd = {}, lw = {};
Tr && (lw = document.createElement("div").style, "AnimationEvent" in P || (delete xo.animationend.animation, delete xo.animationiteration.animation, delete xo.animationstart.animation), "TransitionEvent" in P || delete xo.transitionend.transition);

function Oc(e) {
    if (Qd[e]) return Qd[e];
    if (!xo[e]) return e;
    var t, n = xo[e];
    for (t in n) if (n.hasOwnProperty(t) && t in lw) return Qd[e] = n[t];
    return e
}

var cw = Oc("animationend"), uw = Oc("animationiteration"), fw = Oc("animationstart"), dw = Oc("transitionend"),
    hw = new Map,
    zb = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function si(e, t) {
    hw.set(e, t), Di(t, [e])
}

for ($l = 0; $l < zb.length; $l++) Nl = zb[$l], Bb = Nl.toLowerCase(), $b = Nl[0].toUpperCase() + Nl.slice(1), si(Bb, "on" + $b);
var Nl, Bb, $b, $l;
si(cw, "onAnimationEnd");
si(uw, "onAnimationIteration");
si(fw, "onAnimationStart");
si("dblclick", "onDoubleClick");
si("focusin", "onFocus");
si("focusout", "onBlur");
si(dw, "onTransitionEnd");
Lo("onMouseEnter", ["mouseout", "mouseover"]);
Lo("onMouseLeave", ["mouseout", "mouseover"]);
Lo("onPointerEnter", ["pointerout", "pointerover"]);
Lo("onPointerLeave", ["pointerout", "pointerover"]);
Di("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Di("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Di("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Di("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Di("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Di("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $s = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    ZO = new Set("cancel close invalid load scroll toggle".split(" ").concat($s));

function Nb(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ZI(r, t, void 0, e), e.currentTarget = null
}

function pw(e, t) {
    t = (4 & t) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], i = r.event;
        r = r.listeners;
        e:{
            var o = void 0;
            if (t) for (var s = r.length - 1; 0 <= s; s--) {
                var a = r[s], l = a.instance, c = a.currentTarget;
                if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
                Nb(i, a, c), o = l
            } else for (s = 0; s < r.length; s++) {
                if (a = r[s], l = a.instance, c = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                Nb(i, a, c), o = l
            }
        }
    }
    if (ac) throw e = Th, ac = !1, Th = null, e
}

function Oe(e, t) {
    var n = t[Vh];
    n === void 0 && (n = t[Vh] = new Set);
    var r = e + "__bubble";
    n.has(r) || (mw(t, e, 2, !1), n.add(r))
}

function Zd(e, t, n) {
    var r = 0;
    t && (r |= 4), mw(n, e, r, t)
}

var jl = "_reactListening" + Math.random().toString(36).slice(2);

function ia(e) {
    if (!e[jl]) {
        e[jl] = !0, Sx.forEach(function (n) {
            n !== "selectionchange" && (ZO.has(n) || Zd(n, !1, e), Zd(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[jl] || (t[jl] = !0, Zd("selectionchange", !1, t))
    }
}

function mw(e, t, n, r) {
    switch (Zx(t)) {
        case 1:
            var i = pO;
            break;
        case 4:
            i = mO;
            break;
        default:
            i = fp
    }
    n = i.bind(null, t, n, e), i = void 0, !Ch || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {passive: i}) : e.addEventListener(t, n, !1)
}

function Jd(e, t, n, r, i) {
    var o = r;
    if (!(1 & t) && !(2 & t) && r !== null) e:for (; ;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4) for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                s = s.return
            }
            for (; a !== null;) {
                if (s = Ei(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = o = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    zx(function () {
        var c = o, u = ap(n), f = [];
        e:{
            var d = hw.get(e);
            if (d !== void 0) {
                var m = hp, v = e;
                switch (e) {
                    case"keypress":
                        if (Ql(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        m = _O;
                        break;
                    case"focusin":
                        v = "focus", m = Yd;
                        break;
                    case"focusout":
                        v = "blur", m = Yd;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        m = Yd;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        m = Fb;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        m = yO;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        m = MO;
                        break;
                    case cw:
                    case uw:
                    case fw:
                        m = wO;
                        break;
                    case dw:
                        m = VO;
                        break;
                    case"scroll":
                        m = gO;
                        break;
                    case"wheel":
                        m = DO;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        m = kO;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        m = _b
                }
                var g = (4 & t) !== 0, b = !g && e === "scroll", p = g ? d !== null ? d + "Capture" : null : d;
                g = [];
                for (var h, y = c; y !== null;) {
                    h = y;
                    var w = h.stateNode;
                    if (h.tag === 5 && w !== null && (h = w, p !== null && (w = Zs(y, p), w != null && g.push(oa(y, w, h)))), b) break;
                    y = y.return
                }
                0 < g.length && (d = new m(d, v, null, n, u), f.push({event: d, listeners: g}))
            }
        }
        if (!(7 & t)) {
            if (d = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", (!d || n === Sh || !(v = n.relatedTarget || n.fromElement) || !Ei(v) && !v[Rr]) && (m || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : P, m ? (v = n.relatedTarget || n.toElement, m = c, v = v ? Ei(v) : null, v !== null && (b = zi(v), v !== b || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null, v = c), m !== v)) {
                if (g = Fb, w = "onMouseLeave", p = "onMouseEnter", y = "mouse", e !== "pointerout" && e !== "pointerover" || (g = _b, w = "onPointerLeave", p = "onPointerEnter", y = "pointer"), b = m == null ? d : wo(m), h = v == null ? d : wo(v), d = new g(w, y + "leave", m, n, u), d.target = b, d.relatedTarget = h, w = null, Ei(u) === c && (g = new g(p, y + "enter", v, n, u), g.target = h, g.relatedTarget = b, w = g), b = w, m && v) e:{
                    for (g = m, p = v, y = 0, h = g; h; h = mo(h)) y++;
                    for (h = 0, w = p; w; w = mo(w)) h++;
                    for (; 0 < y - h;) g = mo(g), y--;
                    for (; 0 < h - y;) p = mo(p), h--;
                    for (; y--;) {
                        if (g === p || p !== null && g === p.alternate) break e;
                        g = mo(g), p = mo(p)
                    }
                    g = null
                } else g = null;
                m !== null && jb(f, d, m, g, !1), v !== null && b !== null && jb(f, b, v, g, !0)
            }
            if (d = c ? wo(c) : P, m = d.nodeName && d.nodeName.toLowerCase(), m === "select" || m === "input" && d.type === "file") var k = WO; else if (Mb(d)) if (iw) k = XO; else {
                k = GO;
                var S = UO
            } else (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = qO);
            switch (k && (k = k(e, c)) ? rw(f, k, n, u) : (S && S(e, d, c), e === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && vh(d, "number", d.value)), S = c ? wo(c) : P, e) {
                case"focusin":
                    (Mb(S) || S.contentEditable === "true") && (bo = S, Ph = c, Us = null);
                    break;
                case"focusout":
                    Us = Ph = bo = null;
                    break;
                case"mousedown":
                    _h = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    _h = !1, Db(f, n, u);
                    break;
                case"selectionchange":
                    if (QO) break;
                case"keydown":
                case"keyup":
                    Db(f, n, u)
            }
            var T;
            if (mp) e:{
                switch (e) {
                    case"compositionstart":
                        var E = "onCompositionStart";
                        break e;
                    case"compositionend":
                        E = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        E = "onCompositionUpdate";
                        break e
                }
                E = void 0
            } else yo ? tw(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E && (ew && n.locale !== "ko" && (yo || E !== "onCompositionStart" ? E === "onCompositionEnd" && yo && (T = Jx()) : (Xr = u, dp = "value" in Xr ? Xr.value : Xr.textContent, yo = !0)), S = dc(c, E), 0 < S.length && (E = new Pb(E, e, null, n, u), f.push({
                event: E,
                listeners: S
            }), T ? E.data = T : (T = nw(n), T !== null && (E.data = T)))), (T = BO ? $O(e, n) : NO(e, n)) && (c = dc(c, "onBeforeInput"), 0 < c.length && (u = new Pb("onBeforeInput", "beforeinput", null, n, u), f.push({
                event: u,
                listeners: c
            }), u.data = T))
        }
        pw(f, t)
    })
}

function oa(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function dc(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e, o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Zs(e, n), o != null && r.unshift(oa(e, o, i)), o = Zs(e, t), o != null && r.push(oa(e, o, i))), e = e.return
    }
    return r
}

function mo(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function jb(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n, l = a.alternate, c = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && c !== null && (a = c, i ? (l = Zs(n, o), l != null && s.unshift(oa(n, l, a))) : i || (l = Zs(n, o), l != null && s.push(oa(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({event: t, listeners: s})
}

var JO = /\r\n?/g, e2 = /\u0000|\uFFFD/g;

function Hb(e) {
    return (typeof e == "string" ? e : "" + e).replace(JO, `
`).replace(e2, "")
}

function Hl(e, t, n) {
    if (t = Hb(t), Hb(e) !== t && n) throw Error(M(425))
}

function hc() {
}

var Ih = null, Oh = null;

function Mh(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var Lh = typeof setTimeout == "function" ? setTimeout : void 0,
    t2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wb = typeof Promise == "function" ? Promise : void 0,
    n2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wb < "u" ? function (e) {
        return Wb.resolve(null).then(e).catch(r2)
    } : Lh;

function r2(e) {
    setTimeout(function () {
        throw e
    })
}

function eh(e, t) {
    var n = t, r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), ta(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ta(t)
}

function Jr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Ub(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var jo = Math.random().toString(36).slice(2), nr = "__reactFiber$" + jo, sa = "__reactProps$" + jo,
    Rr = "__reactContainer$" + jo, Vh = "__reactEvents$" + jo, i2 = "__reactListeners$" + jo,
    o2 = "__reactHandles$" + jo;

function Ei(e) {
    var t = e[nr];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Rr] || n[nr]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ub(e); e !== null;) {
                if (n = e[nr]) return n;
                e = Ub(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ma(e) {
    return e = e[nr] || e[Rr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function wo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(M(33))
}

function Mc(e) {
    return e[sa] || null
}

var Ah = [], So = -1;

function ai(e) {
    return {current: e}
}

function Me(e) {
    0 > So || (e.current = Ah[So], Ah[So] = null, So--)
}

function Pe(e, t) {
    So++, Ah[So] = e.current, e.current = t
}

var oi = {}, Pt = ai(oi), Wt = ai(!1), Oi = oi;

function Vo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return oi;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i, o = {};
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Ut(e) {
    return e = e.childContextTypes, e != null
}

function pc() {
    Me(Wt), Me(Pt)
}

function Gb(e, t, n) {
    if (Pt.current !== oi) throw Error(M(168));
    Pe(Pt, t), Pe(Wt, n)
}

function gw(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(M(108, UI(e) || "Unknown", i));
    return He({}, n, r)
}

function mc(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || oi, Oi = Pt.current, Pe(Pt, e), Pe(Wt, Wt.current), !0
}

function qb(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(M(169));
    n ? (e = gw(e, t, Oi), r.__reactInternalMemoizedMergedChildContext = e, Me(Wt), Me(Pt), Pe(Pt, e)) : Me(Wt), Pe(Wt, n)
}

var wr = null, Lc = !1, th = !1;

function vw(e) {
    wr === null ? wr = [e] : wr.push(e)
}

function s2(e) {
    Lc = !0, vw(e)
}

function li() {
    if (!th && wr !== null) {
        th = !0;
        var e = 0, t = we;
        try {
            var n = wr;
            for (we = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            wr = null, Lc = !1
        } catch (i) {
            throw wr !== null && (wr = wr.slice(e + 1)), jx(lp, li), i
        } finally {
            we = t, th = !1
        }
    }
    return null
}

var ko = [], Co = 0, gc = null, vc = 0, xn = [], wn = 0, Mi = null, Sr = 1, kr = "";

function Ti(e, t) {
    ko[Co++] = vc, ko[Co++] = gc, gc = e, vc = t
}

function yw(e, t, n) {
    xn[wn++] = Sr, xn[wn++] = kr, xn[wn++] = Mi, Mi = e;
    var r = Sr;
    e = kr;
    var i = 32 - Vn(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - Vn(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Sr = 1 << 32 - Vn(t) + i | n << i | r, kr = o + e
    } else Sr = 1 << o | n << i | r, kr = e
}

function vp(e) {
    e.return !== null && (Ti(e, 1), yw(e, 1, 0))
}

function yp(e) {
    for (; e === gc;) gc = ko[--Co], ko[Co] = null, vc = ko[--Co], ko[Co] = null;
    for (; e === Mi;) Mi = xn[--wn], xn[wn] = null, kr = xn[--wn], xn[wn] = null, Sr = xn[--wn], xn[wn] = null
}

var nn = null, tn = null, Be = !1, Ln = null;

function bw(e, t) {
    var n = Sn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Xb(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null && (e.stateNode = t, nn = e, tn = Jr(t.firstChild), !0);
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null && (e.stateNode = t, nn = e, tn = null, !0);
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null && (n = Mi !== null ? {
                id: Sr,
                overflow: kr
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Sn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nn = e, tn = null, !0);
        default:
            return !1
    }
}

function Dh(e) {
    return (1 & e.mode) !== 0 && (128 & e.flags) === 0
}

function zh(e) {
    if (Be) {
        var t = tn;
        if (t) {
            var n = t;
            if (!Xb(e, t)) {
                if (Dh(e)) throw Error(M(418));
                t = Jr(n.nextSibling);
                var r = nn;
                t && Xb(e, t) ? bw(r, n) : (e.flags = -4097 & e.flags | 2, Be = !1, nn = e)
            }
        } else {
            if (Dh(e)) throw Error(M(418));
            e.flags = -4097 & e.flags | 2, Be = !1, nn = e
        }
    }
}

function Yb(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    nn = e
}

function Wl(e) {
    if (e !== nn) return !1;
    if (!Be) return Yb(e), Be = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mh(e.type, e.memoizedProps)), t && (t = tn)) {
        if (Dh(e)) throw xw(), Error(M(418));
        for (; t;) bw(e, t), t = Jr(t.nextSibling)
    }
    if (Yb(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            tn = Jr(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            tn = null
        }
    } else tn = nn ? Jr(e.stateNode.nextSibling) : null;
    return !0
}

function xw() {
    for (var e = tn; e;) e = Jr(e.nextSibling)
}

function Ao() {
    tn = nn = null, Be = !1
}

function bp(e) {
    Ln === null ? Ln = [e] : Ln.push(e)
}

var a2 = Pr.ReactCurrentBatchConfig;

function On(e, t) {
    if (e && e.defaultProps) {
        t = He({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

var yc = ai(null), bc = null, To = null, xp = null;

function wp() {
    xp = To = bc = null
}

function Sp(e) {
    var t = yc.current;
    Me(yc), e._currentValue = t
}

function Bh(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Oo(e, t) {
    bc = e, xp = To = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ht = !0), e.firstContext = null)
}

function Cn(e) {
    var t = e._currentValue;
    if (xp !== e) if (e = {context: e, memoizedValue: t, next: null}, To === null) {
        if (bc === null) throw Error(M(308));
        To = e, bc.dependencies = {lanes: 0, firstContext: e}
    } else To = To.next = e;
    return t
}

var Fi = null;

function kp(e) {
    Fi === null ? Fi = [e] : Fi.push(e)
}

function ww(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, kp(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Er(e, r)
}

function Er(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var Ur = !1;

function Cp(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function Sw(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Cr(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function ei(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, 2 & ye) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Er(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, kp(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Er(e, n)
}

function Zl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (4194240 & n) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, cp(e, n)
    }
}

function Kb(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r === null || (r = r.updateQueue, n !== r)) e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; else {
        var i = null, o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n
    }
}

function xc(e, t, n, r) {
    var i = e.updateQueue;
    Ur = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a, c = l.next;
        l.next = null, s === null ? o = c : s.next = c, s = l;
        var u = e.alternate;
        u !== null && (u = u.updateQueue, a = u.lastBaseUpdate, a !== s && (a === null ? u.firstBaseUpdate = c : a.next = c, u.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0, u = c = l = null, a = o;
        do {
            var d = a.lane, m = a.eventTime;
            if ((r & d) === d) {
                u !== null && (u = u.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e:{
                    var v = e, g = a;
                    switch (d = t, m = n, g.tag) {
                        case 1:
                            if (v = g.payload, typeof v == "function") {
                                f = v.call(m, f, d);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = -65537 & v.flags | 128;
                        case 0:
                            if (v = g.payload, d = typeof v == "function" ? v.call(m, f, d) : v, d == null) break e;
                            f = He({}, f, d);
                            break e;
                        case 2:
                            Ur = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a))
            } else m = {
                eventTime: m,
                lane: d,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, u === null ? (c = u = m, l = f) : u = u.next = m, s |= d;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null
            }
        } while (1);
        if (u === null && (l = f), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = u, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        Vi |= s, e.lanes = s, e.memoizedState = f
    }
}

function Qb(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function") throw Error(M(191, i));
            i.call(r)
        }
    }
}

var kw = new wx.Component().refs;

function $h(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : He({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var Vc = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && zi(e) === e
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = At(), i = ni(e), o = Cr(r, i);
        o.payload = t, n != null && (o.callback = n), t = ei(e, o, i), t !== null && (An(t, e, i, r), Zl(t, e, i))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = At(), i = ni(e), o = Cr(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ei(e, o, i), t !== null && (An(t, e, i, r), Zl(t, e, i))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = At(), r = ni(e), i = Cr(n, r);
        i.tag = 2, t != null && (i.callback = t), t = ei(e, i, r), t !== null && (An(t, e, r, n), Zl(t, e, r))
    }
};

function Zb(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : !t.prototype || !t.prototype.isPureReactComponent || !ra(n, r) || !ra(i, o)
}

function Cw(e, t, n) {
    var r = !1, i = oi, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Cn(o) : (i = Ut(t) ? Oi : Pt.current, r = t.contextTypes, o = (r = r != null) ? Vo(e, i) : oi), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Jb(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vc.enqueueReplaceState(t, t.state, null)
}

function Nh(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = kw, Cp(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Cn(o) : (o = Ut(t) ? Oi : Pt.current, i.context = Vo(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && ($h(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Vc.enqueueReplaceState(i, i.state, null), xc(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ms(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(M(309));
                var r = n.stateNode
            }
            if (!r) throw Error(M(147, e));
            var i = r, o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) {
                var a = i.refs;
                a === kw && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(M(284));
        if (!n._owner) throw Error(M(290, e))
    }
    return e
}

function Ul(e, t) {
    throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function ex(e) {
    var t = e._init;
    return t(e._payload)
}

function Tw(e) {
    function t(p, h) {
        if (e) {
            var y = p.deletions;
            y === null ? (p.deletions = [h], p.flags |= 16) : y.push(h)
        }
    }

    function n(p, h) {
        if (!e) return null;
        for (; h !== null;) t(p, h), h = h.sibling;
        return null
    }

    function r(p, h) {
        for (p = new Map; h !== null;) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
        return p
    }

    function i(p, h) {
        return p = ri(p, h), p.index = 0, p.sibling = null, p
    }

    function o(p, h, y) {
        return p.index = y, e ? (y = p.alternate, y !== null ? (y = y.index, y < h ? (p.flags |= 2, h) : y) : (p.flags |= 2, h)) : (p.flags |= 1048576, h)
    }

    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, h, y, w) {
        return h === null || h.tag !== 6 ? (h = lh(y, p.mode, w), h.return = p, h) : (h = i(h, y), h.return = p, h)
    }

    function l(p, h, y, w) {
        var k = y.type;
        return k === vo ? u(p, h, y.props.children, w, y.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Wr && ex(k) === h.type) ? (w = i(h, y.props), w.ref = Ms(p, h, y), w.return = p, w) : (w = ic(y.type, y.key, y.props, null, p.mode, w), w.ref = Ms(p, h, y), w.return = p, w)
    }

    function c(p, h, y, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = ch(y, p.mode, w), h.return = p, h) : (h = i(h, y.children || []), h.return = p, h)
    }

    function u(p, h, y, w, k) {
        return h === null || h.tag !== 7 ? (h = Ii(y, p.mode, w, k), h.return = p, h) : (h = i(h, y), h.return = p, h)
    }

    function f(p, h, y) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = lh("" + h, p.mode, y), h.return = p, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case _l:
                    return y = ic(h.type, h.key, h.props, null, p.mode, y), y.ref = Ms(p, null, h), y.return = p, y;
                case go:
                    return h = ch(h, p.mode, y), h.return = p, h;
                case Wr:
                    var w = h._init;
                    return f(p, w(h._payload), y)
            }
            if (zs(h) || Ps(h)) return h = Ii(h, p.mode, y, null), h.return = p, h;
            Ul(p, h)
        }
        return null
    }

    function d(p, h, y, w) {
        var k = h !== null ? h.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number") return k !== null ? null : a(p, h, "" + y, w);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case _l:
                    return y.key === k ? l(p, h, y, w) : null;
                case go:
                    return y.key === k ? c(p, h, y, w) : null;
                case Wr:
                    return k = y._init, d(p, h, k(y._payload), w)
            }
            if (zs(y) || Ps(y)) return k !== null ? null : u(p, h, y, w, null);
            Ul(p, y)
        }
        return null
    }

    function m(p, h, y, w, k) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(y) || null, a(h, p, "" + w, k);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case _l:
                    return p = p.get(w.key === null ? y : w.key) || null, l(h, p, w, k);
                case go:
                    return p = p.get(w.key === null ? y : w.key) || null, c(h, p, w, k);
                case Wr:
                    var S = w._init;
                    return m(p, h, y, S(w._payload), k)
            }
            if (zs(w) || Ps(w)) return p = p.get(y) || null, u(h, p, w, k, null);
            Ul(h, w)
        }
        return null
    }

    function v(p, h, y, w) {
        for (var k = null, S = null, T = h, E = h = 0, O = null; T !== null && E < y.length; E++) {
            T.index > E ? (O = T, T = null) : O = T.sibling;
            var I = d(p, T, y[E], w);
            if (I === null) {
                T === null && (T = O);
                break
            }
            e && T && I.alternate === null && t(p, T), h = o(I, h, E), S === null ? k = I : S.sibling = I, S = I, T = O
        }
        if (E === y.length) return n(p, T), Be && Ti(p, E), k;
        if (T === null) {
            for (; E < y.length; E++) T = f(p, y[E], w), T !== null && (h = o(T, h, E), S === null ? k = T : S.sibling = T, S = T);
            return Be && Ti(p, E), k
        }
        for (T = r(p, T); E < y.length; E++) O = m(T, p, E, y[E], w), O !== null && (e && O.alternate !== null && T.delete(O.key === null ? E : O.key), h = o(O, h, E), S === null ? k = O : S.sibling = O, S = O);
        return e && T.forEach(function (B) {
            return t(p, B)
        }), Be && Ti(p, E), k
    }

    function g(p, h, y, w) {
        var k = Ps(y);
        if (typeof k != "function") throw Error(M(150));
        if (y = k.call(y), y == null) throw Error(M(151));
        for (var S = k = null, T = h, E = h = 0, O = null, I = y.next(); T !== null && !I.done; E++, I = y.next()) {
            T.index > E ? (O = T, T = null) : O = T.sibling;
            var B = d(p, T, I.value, w);
            if (B === null) {
                T === null && (T = O);
                break
            }
            e && T && B.alternate === null && t(p, T), h = o(B, h, E), S === null ? k = B : S.sibling = B, S = B, T = O
        }
        if (I.done) return n(p, T), Be && Ti(p, E), k;
        if (T === null) {
            for (; !I.done; E++, I = y.next()) I = f(p, I.value, w), I !== null && (h = o(I, h, E), S === null ? k = I : S.sibling = I, S = I);
            return Be && Ti(p, E), k
        }
        for (T = r(p, T); !I.done; E++, I = y.next()) I = m(T, p, E, I.value, w), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? E : I.key), h = o(I, h, E), S === null ? k = I : S.sibling = I, S = I);
        return e && T.forEach(function (z) {
            return t(p, z)
        }), Be && Ti(p, E), k
    }

    function b(p, h, y, w) {
        if (typeof y == "object" && y !== null && y.type === vo && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case _l:
                    e:{
                        for (var k = y.key, S = h; S !== null;) {
                            if (S.key === k) {
                                if (k = y.type, k === vo) {
                                    if (S.tag === 7) {
                                        n(p, S.sibling), h = i(S, y.props.children), h.return = p, p = h;
                                        break e
                                    }
                                } else if (S.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Wr && ex(k) === S.type) {
                                    n(p, S.sibling), h = i(S, y.props), h.ref = Ms(p, S, y), h.return = p, p = h;
                                    break e
                                }
                                n(p, S);
                                break
                            }
                            t(p, S), S = S.sibling
                        }
                        y.type === vo ? (h = Ii(y.props.children, p.mode, w, y.key), h.return = p, p = h) : (w = ic(y.type, y.key, y.props, null, p.mode, w), w.ref = Ms(p, h, y), w.return = p, p = w)
                    }
                    return s(p);
                case go:
                    e:{
                        for (S = y.key; h !== null;) {
                            if (h.key === S) {
                                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                                    n(p, h.sibling), h = i(h, y.children || []), h.return = p, p = h;
                                    break e
                                }
                                n(p, h);
                                break
                            }
                            t(p, h), h = h.sibling
                        }
                        h = ch(y, p.mode, w), h.return = p, p = h
                    }
                    return s(p);
                case Wr:
                    return S = y._init, b(p, h, S(y._payload), w)
            }
            if (zs(y)) return v(p, h, y, w);
            if (Ps(y)) return g(p, h, y, w);
            Ul(p, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (n(p, h.sibling), h = i(h, y), h.return = p, p = h) : (n(p, h), h = lh(y, p.mode, w), h.return = p, p = h), s(p)) : n(p, h)
    }

    return b
}

var Do = Tw(!0), Rw = Tw(!1), ga = {}, ir = ai(ga), aa = ai(ga), la = ai(ga);

function Pi(e) {
    if (e === ga) throw Error(M(174));
    return e
}

function Tp(e, t) {
    switch (Pe(la, t), Pe(aa, e), Pe(ir, ga), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : bh(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = bh(t, e)
    }
    Me(ir), Pe(ir, t)
}

function zo() {
    Me(ir), Me(aa), Me(la)
}

function Ew(e) {
    Pi(la.current);
    var t = Pi(ir.current), n = bh(t, e.type);
    t !== n && (Pe(aa, e), Pe(ir, n))
}

function Rp(e) {
    aa.current === e && (Me(ir), Me(aa))
}

var Ne = ai(0);

function wc(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (128 & t.flags) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var nh = [];

function Ep() {
    for (var e = 0; e < nh.length; e++) nh[e]._workInProgressVersionPrimary = null;
    nh.length = 0
}

var Jl = Pr.ReactCurrentDispatcher, rh = Pr.ReactCurrentBatchConfig, Li = 0, je = null, rt = null, ct = null, Sc = !1,
    Gs = !1, ca = 0, l2 = 0;

function Rt() {
    throw Error(M(321))
}

function Fp(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Dn(e[n], t[n])) return !1;
    return !0
}

function Pp(e, t, n, r, i, o) {
    if (Li = o, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jl.current = e === null || e.memoizedState === null ? d2 : h2, e = n(r, i), Gs) {
        o = 0;
        do {
            if (Gs = !1, ca = 0, 25 <= o) throw Error(M(301));
            o += 1, ct = rt = null, t.updateQueue = null, Jl.current = p2, e = n(r, i)
        } while (Gs)
    }
    if (Jl.current = kc, t = rt !== null && rt.next !== null, Li = 0, ct = rt = je = null, Sc = !1, t) throw Error(M(300));
    return e
}

function _p() {
    var e = ca !== 0;
    return ca = 0, e
}

function tr() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return ct === null ? je.memoizedState = ct = e : ct = ct.next = e, ct
}

function Tn() {
    if (rt === null) {
        var e = je.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = rt.next;
    var t = ct === null ? je.memoizedState : ct.next;
    if (t !== null) ct = t, rt = e; else {
        if (e === null) throw Error(M(310));
        rt = e, e = {
            memoizedState: rt.memoizedState,
            baseState: rt.baseState,
            baseQueue: rt.baseQueue,
            queue: rt.queue,
            next: null
        }, ct === null ? je.memoizedState = ct = e : ct = ct.next = e
    }
    return ct
}

function ua(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ih(e) {
    var t = Tn(), n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = rt, i = r.baseQueue, o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = s = null, l = null, c = o;
        do {
            var u = c.lane;
            if ((Li & u) === u) l !== null && (l = l.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action); else {
                var f = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = f, s = r) : l = l.next = f, je.lanes |= u, Vi |= u
            }
            c = c.next
        } while (c !== null && c !== o);
        l === null ? s = r : l.next = a, Dn(r, t.memoizedState) || (Ht = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, je.lanes |= o, Vi |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function oh(e) {
    var t = Tn(), n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        Dn(o, t.memoizedState) || (Ht = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Fw() {
}

function Pw(e, t) {
    var n = je, r = Tn(), i = t(), o = !Dn(r.memoizedState, i);
    if (o && (r.memoizedState = i, Ht = !0), r = r.queue, Ip(Ow.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ct !== null && 1 & ct.memoizedState.tag) {
        if (n.flags |= 2048, fa(9, Iw.bind(null, n, r, i, t), void 0, null), ut === null) throw Error(M(349));
        30 & Li || _w(n, t, i)
    }
    return i
}

function _w(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = je.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Iw(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Mw(t) && Lw(e)
}

function Ow(e, t, n) {
    return n(function () {
        Mw(t) && Lw(e)
    })
}

function Mw(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Dn(e, n)
    } catch {
        return !0
    }
}

function Lw(e) {
    var t = Er(e, 1);
    t !== null && An(t, e, 1, -1)
}

function tx(e) {
    var t = tr();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ua,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = f2.bind(null, je, e), [t.memoizedState, e]
}

function fa(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = je.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Vw() {
    return Tn().memoizedState
}

function ec(e, t, n, r) {
    var i = tr();
    je.flags |= e, i.memoizedState = fa(1 | t, n, void 0, r === void 0 ? null : r)
}

function Ac(e, t, n, r) {
    var i = Tn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (rt !== null) {
        var s = rt.memoizedState;
        if (o = s.destroy, r !== null && Fp(r, s.deps)) {
            i.memoizedState = fa(t, n, o, r);
            return
        }
    }
    je.flags |= e, i.memoizedState = fa(1 | t, n, o, r)
}

function nx(e, t) {
    return ec(8390656, 8, e, t)
}

function Ip(e, t) {
    return Ac(2048, 8, e, t)
}

function Aw(e, t) {
    return Ac(4, 2, e, t)
}

function Dw(e, t) {
    return Ac(4, 4, e, t)
}

function zw(e, t) {
    return typeof t == "function" ? (e = e(), t(e), function () {
        t(null)
    }) : t != null ? (e = e(), t.current = e, function () {
        t.current = null
    }) : void 0
}

function Bw(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ac(4, 4, zw.bind(null, t, e), n)
}

function Op() {
}

function $w(e, t) {
    var n = Tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Nw(e, t) {
    var n = Tn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function jw(e, t, n) {
    return 21 & Li ? (Dn(n, t) || (n = Ux(), je.lanes |= n, Vi |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ht = !0), e.memoizedState = n)
}

function c2(e, t) {
    var n = we;
    we = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = rh.transition;
    rh.transition = {};
    try {
        e(!1), t()
    } finally {
        we = n, rh.transition = r
    }
}

function Hw() {
    return Tn().memoizedState
}

function u2(e, t, n) {
    var r = ni(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, Ww(e)) Uw(t, n); else if (n = ww(e, t, n, r), n !== null) {
        var i = At();
        An(n, e, r, i), Gw(n, t, r)
    }
}

function f2(e, t, n) {
    var r = ni(e), i = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (Ww(e)) Uw(t, i); else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState, a = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, Dn(a, s)) {
                var l = t.interleaved;
                l === null ? (i.next = i, kp(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {
        }
        n = ww(e, t, i, r), n !== null && (i = At(), An(n, e, r, i), Gw(n, t, r))
    }
}

function Ww(e) {
    var t = e.alternate;
    return e === je || t !== null && t === je
}

function Uw(e, t) {
    Gs = Sc = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Gw(e, t, n) {
    if (4194240 & n) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, cp(e, n)
    }
}

var kc = {
    readContext: Cn,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useInsertionEffect: Rt,
    useLayoutEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useMutableSource: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
    unstable_isNewReconciler: !1
}, d2 = {
    readContext: Cn, useCallback: function (e, t) {
        return tr().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: Cn, useEffect: nx, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, ec(4194308, 4, zw.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return ec(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return ec(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = tr();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = tr();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = u2.bind(null, je, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = tr();
        return e = {current: e}, t.memoizedState = e
    }, useState: tx, useDebugValue: Op, useDeferredValue: function (e) {
        return tr().memoizedState = e
    }, useTransition: function () {
        var e = tx(!1), t = e[0];
        return e = c2.bind(null, e[1]), tr().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = je, i = tr();
        if (Be) {
            if (n === void 0) throw Error(M(407));
            n = n()
        } else {
            if (n = t(), ut === null) throw Error(M(349));
            30 & Li || _w(r, t, n)
        }
        i.memoizedState = n;
        var o = {value: n, getSnapshot: t};
        return i.queue = o, nx(Ow.bind(null, r, o, e), [e]), r.flags |= 2048, fa(9, Iw.bind(null, r, o, n, t), void 0, null), n
    }, useId: function () {
        var e = tr(), t = ut.identifierPrefix;
        if (Be) {
            var n = kr, r = Sr;
            n = (r & ~(1 << 32 - Vn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ca++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = l2++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, h2 = {
    readContext: Cn,
    useCallback: $w,
    useContext: Cn,
    useEffect: Ip,
    useImperativeHandle: Bw,
    useInsertionEffect: Aw,
    useLayoutEffect: Dw,
    useMemo: Nw,
    useReducer: ih,
    useRef: Vw,
    useState: function () {
        return ih(ua)
    },
    useDebugValue: Op,
    useDeferredValue: function (e) {
        var t = Tn();
        return jw(t, rt.memoizedState, e)
    },
    useTransition: function () {
        var e = ih(ua)[0], t = Tn().memoizedState;
        return [e, t]
    },
    useMutableSource: Fw,
    useSyncExternalStore: Pw,
    useId: Hw,
    unstable_isNewReconciler: !1
}, p2 = {
    readContext: Cn,
    useCallback: $w,
    useContext: Cn,
    useEffect: Ip,
    useImperativeHandle: Bw,
    useInsertionEffect: Aw,
    useLayoutEffect: Dw,
    useMemo: Nw,
    useReducer: oh,
    useRef: Vw,
    useState: function () {
        return oh(ua)
    },
    useDebugValue: Op,
    useDeferredValue: function (e) {
        var t = Tn();
        return rt === null ? t.memoizedState = e : jw(t, rt.memoizedState, e)
    },
    useTransition: function () {
        var e = oh(ua)[0], t = Tn().memoizedState;
        return [e, t]
    },
    useMutableSource: Fw,
    useSyncExternalStore: Pw,
    useId: Hw,
    unstable_isNewReconciler: !1
};

function Bo(e, t) {
    try {
        var n = "", r = t;
        do n += WI(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {value: e, source: t, stack: i, digest: null}
}

function sh(e, t, n) {
    return {value: e, source: null, stack: n ?? null, digest: t ?? null}
}

function jh(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var m2 = typeof WeakMap == "function" ? WeakMap : Map;

function qw(e, t, n) {
    n = Cr(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        Tc || (Tc = !0, Qh = r), jh(e, t)
    }, n
}

function Xw(e, t, n) {
    n = Cr(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }, n.callback = function () {
            jh(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        jh(e, t), typeof r != "function" && (ti === null ? ti = new Set([this]) : ti.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {componentStack: s !== null ? s : ""})
    }), n
}

function rx(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new m2;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = P2.bind(null, e, t, n), t.then(e, e))
}

function ix(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t === null || t.dehydrated !== null), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function ox(e, t, n, r, i) {
    return 1 & e.mode ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Cr(-1, 1), t.tag = 2, ei(n, t, 1))), n.lanes |= 1), e)
}

var g2 = Pr.ReactCurrentOwner, Ht = !1;

function Vt(e, t, n, r) {
    t.child = e === null ? Rw(t, null, n, r) : Do(t, e.child, n, r)
}

function sx(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Oo(t, i), r = Pp(e, t, n, r, o, i), n = _p(), e !== null && !Ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Fr(e, t, i)) : (Be && n && vp(t), t.flags |= 1, Vt(e, t, r, i), t.child)
}

function ax(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !$p(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Yw(e, t, o, r, i)) : (e = ic(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ra, n(s, r) && e.ref === t.ref) return Fr(e, t, i)
    }
    return t.flags |= 1, e = ri(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Yw(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (ra(o, r) && e.ref === t.ref) {
            if (Ht = !1, t.pendingProps = r = o, (e.lanes & i) === 0) return t.lanes = e.lanes, Fr(e, t, i);
            131072 & e.flags && (Ht = !0)
        }
    }
    return Hh(e, t, n, r, i)
}

function Kw(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(1 & t.mode)) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, Pe(Eo, en), en |= n; else {
        if (!(1073741824 & n)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, Pe(Eo, en), en |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = o !== null ? o.baseLanes : n, Pe(Eo, en), en |= r
    } else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Pe(Eo, en), en |= r;
    return Vt(e, t, i, n), t.child
}

function Qw(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Hh(e, t, n, r, i) {
    var o = Ut(n) ? Oi : Pt.current;
    return o = Vo(t, o), Oo(t, i), n = Pp(e, t, n, r, o, i), r = _p(), e !== null && !Ht ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Fr(e, t, i)) : (Be && r && vp(t), t.flags |= 1, Vt(e, t, n, i), t.child)
}

function lx(e, t, n, r, i) {
    if (Ut(n)) {
        var o = !0;
        mc(t)
    } else o = !1;
    if (Oo(t, i), t.stateNode === null) tc(e, t), Cw(t, n, r), Nh(t, n, r, i), r = !0; else if (e === null) {
        var s = t.stateNode, a = t.memoizedProps;
        s.props = a;
        var l = s.context, c = n.contextType;
        typeof c == "object" && c !== null ? c = Cn(c) : (c = Ut(n) ? Oi : Pt.current, c = Vo(t, c));
        var u = n.getDerivedStateFromProps,
            f = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== c) && Jb(t, s, r, c), Ur = !1;
        var d = t.memoizedState;
        s.state = d, xc(t, r, s, i), l = t.memoizedState, a !== r || d !== l || Wt.current || Ur ? (typeof u == "function" && ($h(t, n, u, r), l = t.memoizedState), (a = Ur || Zb(t, n, a, r, d, l, c)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = c, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Sw(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : On(t.type, a), s.props = c, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Cn(l) : (l = Ut(n) ? Oi : Pt.current, l = Vo(t, l));
        var m = n.getDerivedStateFromProps;
        (u = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && Jb(t, s, r, l), Ur = !1, d = t.memoizedState, s.state = d, xc(t, r, s, i);
        var v = t.memoizedState;
        a !== f || d !== v || Wt.current || Ur ? (typeof m == "function" && ($h(t, n, m, r), v = t.memoizedState), (c = Ur || Zb(t, n, c, r, d, v, l) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = l, r = c) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Wh(e, t, n, r, o, i)
}

function Wh(e, t, n, r, i, o) {
    Qw(e, t);
    var s = (128 & t.flags) !== 0;
    if (!r && !s) return i && qb(t, n, !1), Fr(e, t, o);
    r = t.stateNode, g2.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Do(t, e.child, null, o), t.child = Do(t, null, a, o)) : Vt(e, t, a, o), t.memoizedState = r.state, i && qb(t, n, !0), t.child
}

function Zw(e) {
    var t = e.stateNode;
    t.pendingContext ? Gb(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gb(e, t.context, !1), Tp(e, t.containerInfo)
}

function cx(e, t, n, r, i) {
    return Ao(), bp(i), t.flags |= 256, Vt(e, t, n, r), t.child
}

var Uh = {dehydrated: null, treeContext: null, retryLane: 0};

function Gh(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function Jw(e, t, n) {
    var r, i = t.pendingProps, o = Ne.current, s = !1, a = (128 & t.flags) !== 0;
    if ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0), r ? (s = !0, t.flags &= -129) : e !== null && e.memoizedState === null || (o |= 1), Pe(Ne, 1 & o), e === null) return zh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (1 & t.mode ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = i.children, e = i.fallback, s ? (i = t.mode, s = t.child, a = {
        mode: "hidden",
        children: a
    }, !(1 & i) && s !== null ? (s.childLanes = 0, s.pendingProps = a) : s = Bc(a, i, 0, null), e = Ii(e, i, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Gh(n), t.memoizedState = Uh, e) : Mp(t, a));
    if (o = e.memoizedState, o !== null && (r = o.dehydrated, r !== null)) return v2(e, t, a, i, r, o, n);
    if (s) {
        s = i.fallback, a = t.mode, o = e.child, r = o.sibling;
        var l = {mode: "hidden", children: i.children};
        return !(1 & a) && t.child !== o ? (i = t.child, i.childLanes = 0, i.pendingProps = l, t.deletions = null) : (i = ri(o, l), i.subtreeFlags = 14680064 & o.subtreeFlags), r !== null ? s = ri(r, s) : (s = Ii(s, a, n, null), s.flags |= 2), s.return = t, i.return = t, i.sibling = s, t.child = i, i = s, s = t.child, a = e.child.memoizedState, a = a === null ? Gh(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        }, s.memoizedState = a, s.childLanes = e.childLanes & ~n, t.memoizedState = Uh, i
    }
    return s = e.child, e = s.sibling, i = ri(s, {
        mode: "visible",
        children: i.children
    }), !(1 & t.mode) && (i.lanes = n), i.return = t, i.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = i, t.memoizedState = null, i
}

function Mp(e, t) {
    return t = Bc({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function Gl(e, t, n, r) {
    return r !== null && bp(r), Do(t, e.child, null, n), e = Mp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function v2(e, t, n, r, i, o, s) {
    if (n) return 256 & t.flags ? (t.flags &= -257, r = sh(Error(M(422))), Gl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Bc({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = Ii(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 1 & t.mode && Do(t, e.child, null, s), t.child.memoizedState = Gh(s), t.memoizedState = Uh, o);
    if (!(1 & t.mode)) return Gl(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(M(419)), r = sh(o, r, void 0), Gl(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, Ht || a) {
        if (r = ut, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
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
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Er(e, i), An(r, e, i, -1))
        }
        return Bp(), r = sh(Error(M(421))), Gl(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _2.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, tn = Jr(i.nextSibling), nn = t, Be = !0, Ln = null, e !== null && (xn[wn++] = Sr, xn[wn++] = kr, xn[wn++] = Mi, Sr = e.id, kr = e.overflow, Mi = t), t = Mp(t, r.children), t.flags |= 4096, t)
}

function ux(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Bh(e.return, t, n)
}

function ah(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function eS(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (Vt(e, t, r.children, n), r = Ne.current, 2 & r) r = 1 & r | 2, t.flags |= 128; else {
        if (e !== null && 128 & e.flags) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ux(e, n, t); else if (e.tag === 19) ux(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Pe(Ne, r), !(1 & t.mode)) t.memoizedState = null; else switch (i) {
        case"forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && wc(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ah(t, !1, i, n, o);
            break;
        case"backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && wc(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            ah(t, !0, n, null, o);
            break;
        case"together":
            ah(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function tc(e, t) {
    !(1 & t.mode) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Fr(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Vi |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child, n = ri(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ri(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function y2(e, t, n) {
    switch (t.tag) {
        case 3:
            Zw(t), Ao();
            break;
        case 5:
            Ew(t);
            break;
        case 1:
            Ut(t.type) && mc(t);
            break;
        case 4:
            Tp(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, i = t.memoizedProps.value;
            Pe(yc, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Pe(Ne, 1 & Ne.current), t.flags |= 128, null) : n & t.child.childLanes ? Jw(e, t, n) : (Pe(Ne, 1 & Ne.current), e = Fr(e, t, n), e !== null ? e.sibling : null);
            Pe(Ne, 1 & Ne.current);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, 128 & e.flags) {
                if (r) return eS(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Pe(Ne, Ne.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Kw(e, t, n)
    }
    return Fr(e, t, n)
}

var tS, qh, nS, rS;
tS = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
qh = function () {
};
nS = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Pi(ir.current);
        var o = null;
        switch (n) {
            case"input":
                i = mh(e, i), r = mh(e, r), o = [];
                break;
            case"select":
                i = He({}, i, {value: void 0}), r = He({}, r, {value: void 0}), o = [];
                break;
            case"textarea":
                i = yh(e, i), r = yh(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = hc)
        }
        xh(n, r);
        var s;
        n = null;
        for (c in i) if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null) if (c === "style") {
            var a = i[c];
            for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
        } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ks.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (a = i?.[c], r.hasOwnProperty(c) && l !== a && (l != null || a != null)) if (c === "style") if (a) {
                for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
            } else n || (o || (o = []), o.push(c, n)), n = l; else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ks.hasOwnProperty(c) ? (l != null && c === "onScroll" && Oe("scroll", e), o || a === l || (o = [])) : (o = o || []).push(c, l))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
rS = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Ls(e, t) {
    if (!Be) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= 14680064 & i.subtreeFlags, r |= 14680064 & i.flags, i.return = e, i = i.sibling; else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function b2(e, t, n) {
    var r = t.pendingProps;
    switch (yp(t), t.tag) {
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
            return Et(t), null;
        case 1:
            return Ut(t.type) && pc(), Et(t), null;
        case 3:
            return r = t.stateNode, zo(), Me(Wt), Me(Pt), Ep(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), e !== null && e.child !== null || (Wl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, Ln !== null && (ep(Ln), Ln = null))), qh(e, t), Et(t), null;
        case 5:
            Rp(t);
            var i = Pi(la.current);
            if (n = t.type, e !== null && t.stateNode != null) nS(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(M(166));
                    return Et(t), null
                }
                if (e = Pi(ir.current), Wl(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[nr] = t, r[sa] = o, e = (1 & t.mode) !== 0, n) {
                        case"dialog":
                            Oe("cancel", r), Oe("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            Oe("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (i = 0; i < $s.length; i++) Oe($s[i], r);
                            break;
                        case"source":
                            Oe("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            Oe("error", r), Oe("load", r);
                            break;
                        case"details":
                            Oe("toggle", r);
                            break;
                        case"input":
                            yb(r, o), Oe("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!o.multiple}, Oe("invalid", r);
                            break;
                        case"textarea":
                            xb(r, o), Oe("invalid", r)
                    }
                    xh(n, o), i = null;
                    for (var s in o) if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Hl(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Hl(r.textContent, a, e), i = ["children", "" + a]) : Ks.hasOwnProperty(s) && a != null && s === "onScroll" && Oe("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            Il(r), bb(r, o, !0);
                            break;
                        case"textarea":
                            Il(r), wb(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = hc)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _x(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {is: r.is}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[nr] = t, e[sa] = r, tS(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (s = wh(n, r), n) {
                            case"dialog":
                                Oe("cancel", e), Oe("close", e), i = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                Oe("load", e), i = r;
                                break;
                            case"video":
                            case"audio":
                                for (i = 0; i < $s.length; i++) Oe($s[i], e);
                                i = r;
                                break;
                            case"source":
                                Oe("error", e), i = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                Oe("error", e), Oe("load", e), i = r;
                                break;
                            case"details":
                                Oe("toggle", e), i = r;
                                break;
                            case"input":
                                yb(e, r), i = mh(e, r), Oe("invalid", e);
                                break;
                            case"option":
                                i = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, i = He({}, r, {value: void 0}), Oe("invalid", e);
                                break;
                            case"textarea":
                                xb(e, r), i = yh(e, r), Oe("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        xh(n, i), a = i;
                        for (o in a) if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? Mx(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ix(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Qs(e, l) : typeof l == "number" && Qs(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ks.hasOwnProperty(o) ? l != null && o === "onScroll" && Oe("scroll", e) : l != null && rp(e, o, l, s))
                        }
                        switch (n) {
                            case"input":
                                Il(e), bb(e, r, !1);
                                break;
                            case"textarea":
                                Il(e), wb(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + ii(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Fo(e, !!r.multiple, o, !1) : r.defaultValue != null && Fo(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = hc)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Et(t), null;
        case 6:
            if (e && t.stateNode != null) rS(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
                if (n = Pi(la.current), Pi(ir.current), Wl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[nr] = t, (o = r.nodeValue !== n) && (e = nn, e !== null)) switch (e.tag) {
                        case 3:
                            Hl(r.nodeValue, n, (1 & e.mode) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Hl(r.nodeValue, n, (1 & e.mode) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nr] = t, t.stateNode = r
            }
            return Et(t), null;
        case 13:
            if (Me(Ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Be && tn !== null && 1 & t.mode && !(128 & t.flags)) xw(), Ao(), t.flags |= 98560, o = !1; else if (o = Wl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(M(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(M(317));
                        o[nr] = t
                    } else Ao(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                    Et(t), o = !1
                } else Ln !== null && (ep(Ln), Ln = null), o = !0;
                if (!o) return 65536 & t.flags ? t : null
            }
            return 128 & t.flags ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, 1 & t.mode && (e === null || 1 & Ne.current ? it === 0 && (it = 3) : Bp())), t.updateQueue !== null && (t.flags |= 4), Et(t), null);
        case 4:
            return zo(), qh(e, t), e === null && ia(t.stateNode.containerInfo), Et(t), null;
        case 10:
            return Sp(t.type._context), Et(t), null;
        case 17:
            return Ut(t.type) && pc(), Et(t), null;
        case 19:
            if (Me(Ne), o = t.memoizedState, o === null) return Et(t), null;
            if (r = (128 & t.flags) !== 0, s = o.rendering, s === null) if (r) Ls(o, !1); else {
                if (it !== 0 || e !== null && 128 & e.flags) for (e = t.child; e !== null;) {
                    if (s = wc(e), s !== null) {
                        for (t.flags |= 128, Ls(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return Pe(Ne, 1 & Ne.current | 2), t.child
                    }
                    e = e.sibling
                }
                o.tail !== null && Ze() > $o && (t.flags |= 128, r = !0, Ls(o, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = wc(s), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ls(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Be) return Et(t), null
                } else 2 * Ze() - o.renderingStartTime > $o && n !== 1073741824 && (t.flags |= 128, r = !0, Ls(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ze(), t.sibling = null, n = Ne.current, Pe(Ne, r ? 1 & n | 2 : 1 & n), t) : (Et(t), null);
        case 22:
        case 23:
            return zp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && 1 & t.mode ? 1073741824 & en && (Et(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Et(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(M(156, t.tag))
}

function x2(e, t) {
    switch (yp(t), t.tag) {
        case 1:
            return Ut(t.type) && pc(), e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;
        case 3:
            return zo(), Me(Wt), Me(Pt), Ep(), e = t.flags, 65536 & e && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
        case 5:
            return Rp(t), null;
        case 13:
            if (Me(Ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(M(340));
                Ao()
            }
            return e = t.flags, 65536 & e ? (t.flags = -65537 & e | 128, t) : null;
        case 19:
            return Me(Ne), null;
        case 4:
            return zo(), null;
        case 10:
            return Sp(t.type._context), null;
        case 22:
        case 23:
            return zp(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var ql = !1, Ft = !1, w2 = typeof WeakSet == "function" ? WeakSet : Set, N = null;

function Ro(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        qe(e, t, r)
    } else n.current = null
}

function iS(e, t, n) {
    try {
        n()
    } catch (r) {
        qe(e, t, r)
    }
}

var fx = !1;

function S2(e, t) {
    if (Ih = uc, e = aw(), gp(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || P;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0, a = -1, l = -1, c = 0, u = 0, f = e, d = null;
                t:for (; ;) {
                    for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) d = f, f = m;
                    for (; ;) {
                        if (f === e) break t;
                        if (d === n && ++c === i && (a = s), d === o && ++u === r && (l = s), (m = f.nextSibling) !== null) break;
                        f = d, d = f.parentNode
                    }
                    f = m
                }
                n = a === -1 || l === -1 ? null : {start: a, end: l}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (Oh = {
        focusedElem: e,
        selectionRange: n
    }, uc = !1, N = t; N !== null;) if (t = N, e = t.child, (1028 & t.subtreeFlags) !== 0 && e !== null) e.return = t, N = e; else for (; N !== null;) {
        t = N;
        try {
            var v = t.alternate;
            if (1024 & t.flags) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (v !== null) {
                        var g = v.memoizedProps, b = v.memoizedState, p = t.stateNode,
                            h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : On(t.type, g), b);
                        p.__reactInternalSnapshotBeforeUpdate = h
                    }
                    break;
                case 3:
                    var y = t.stateNode.containerInfo;
                    y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(M(163))
            }
        } catch (w) {
            qe(t, t.return, w)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, N = e;
            break
        }
        N = t.return
    }
    return v = fx, fx = !1, v
}

function qs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && iS(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function Dc(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Xh(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function oS(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, oS(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nr], delete t[sa], delete t[Vh], delete t[i2], delete t[o2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function sS(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function dx(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || sS(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (2 & e.flags || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(2 & e.flags)) return e.stateNode
    }
}

function Yh(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = hc)); else if (r !== 4 && (e = e.child, e !== null)) for (Yh(e, t, n), e = e.sibling; e !== null;) Yh(e, t, n), e = e.sibling
}

function Kh(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (Kh(e, t, n), e = e.sibling; e !== null;) Kh(e, t, n), e = e.sibling
}

var yt = null, Mn = !1;

function Hr(e, t, n) {
    for (n = n.child; n !== null;) aS(e, t, n), n = n.sibling
}

function aS(e, t, n) {
    if (rr && typeof rr.onCommitFiberUnmount == "function") try {
        rr.onCommitFiberUnmount(Pc, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            Ft || Ro(n, t);
        case 6:
            var r = yt, i = Mn;
            yt = null, Hr(e, t, n), yt = r, Mn = i, yt !== null && (Mn ? (e = yt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : yt.removeChild(n.stateNode));
            break;
        case 18:
            yt !== null && (Mn ? (e = yt, n = n.stateNode, e.nodeType === 8 ? eh(e.parentNode, n) : e.nodeType === 1 && eh(e, n), ta(e)) : eh(yt, n.stateNode));
            break;
        case 4:
            r = yt, i = Mn, yt = n.stateNode.containerInfo, Mn = !0, Hr(e, t, n), yt = r, Mn = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ft && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i, s = o.destroy;
                    o = o.tag, s !== void 0 && (2 & o || 4 & o) && iS(n, t, s), i = i.next
                } while (i !== r)
            }
            Hr(e, t, n);
            break;
        case 1:
            if (!Ft && (Ro(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                qe(n, t, a)
            }
            Hr(e, t, n);
            break;
        case 21:
            Hr(e, t, n);
            break;
        case 22:
            1 & n.mode ? (Ft = (r = Ft) || n.memoizedState !== null, Hr(e, t, n), Ft = r) : Hr(e, t, n);
            break;
        default:
            Hr(e, t, n)
    }
}

function hx(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new w2), t.forEach(function (r) {
            var i = I2.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function In(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var o = e, s = t, a = s;
            e:for (; a !== null;) {
                switch (a.tag) {
                    case 5:
                        yt = a.stateNode, Mn = !1;
                        break e;
                    case 3:
                        yt = a.stateNode.containerInfo, Mn = !0;
                        break e;
                    case 4:
                        yt = a.stateNode.containerInfo, Mn = !0;
                        break e
                }
                a = a.return
            }
            if (yt === null) throw Error(M(160));
            aS(o, s, i), yt = null, Mn = !1;
            var l = i.alternate;
            l !== null && (l.return = null), i.return = null
        } catch (c) {
            qe(i, t, c)
        }
    }
    if (12854 & t.subtreeFlags) for (t = t.child; t !== null;) lS(t, e), t = t.sibling
}

function lS(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (In(t, e), er(e), 4 & r) {
                try {
                    qs(3, e, e.return), Dc(3, e)
                } catch (g) {
                    qe(e, e.return, g)
                }
                try {
                    qs(5, e, e.return)
                } catch (g) {
                    qe(e, e.return, g)
                }
            }
            break;
        case 1:
            In(t, e), er(e), 512 & r && n !== null && Ro(n, n.return);
            break;
        case 5:
            if (In(t, e), er(e), 512 & r && n !== null && Ro(n, n.return), 32 & e.flags) {
                var i = e.stateNode;
                try {
                    Qs(i, "")
                } catch (g) {
                    qe(e, e.return, g)
                }
            }
            if (4 & r && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && Fx(i, o), wh(a, s);
                    var c = wh(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var u = l[s], f = l[s + 1];
                        u === "style" ? Mx(i, f) : u === "dangerouslySetInnerHTML" ? Ix(i, f) : u === "children" ? Qs(i, f) : rp(i, u, f, c)
                    }
                    switch (a) {
                        case"input":
                            gh(i, o);
                            break;
                        case"textarea":
                            Px(i, o);
                            break;
                        case"select":
                            var d = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var m = o.value;
                            m != null ? Fo(i, !!o.multiple, m, !1) : d !== !!o.multiple && (o.defaultValue != null ? Fo(i, !!o.multiple, o.defaultValue, !0) : Fo(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[sa] = o
                } catch (g) {
                    qe(e, e.return, g)
                }
            }
            break;
        case 6:
            if (In(t, e), er(e), 4 & r) {
                if (e.stateNode === null) throw Error(M(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (g) {
                    qe(e, e.return, g)
                }
            }
            break;
        case 3:
            if (In(t, e), er(e), 4 & r && n !== null && n.memoizedState.isDehydrated) try {
                ta(t.containerInfo)
            } catch (g) {
                qe(e, e.return, g)
            }
            break;
        case 4:
            In(t, e), er(e);
            break;
        case 13:
            In(t, e), er(e), i = e.child, 8192 & i.flags && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ap = Ze())), 4 & r && hx(e);
            break;
        case 22:
            if (u = n !== null && n.memoizedState !== null, 1 & e.mode ? (Ft = (c = Ft) || u, In(t, e), Ft = c) : In(t, e), er(e), 8192 & r) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && 1 & e.mode) for (N = e, u = e.child; u !== null;) {
                    for (f = N = u; N !== null;) {
                        switch (d = N, m = d.child, d.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                qs(4, d, d.return);
                                break;
                            case 1:
                                Ro(d, d.return);
                                var v = d.stateNode;
                                if (typeof v.componentWillUnmount == "function") {
                                    r = d, n = d.return;
                                    try {
                                        t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                    } catch (g) {
                                        qe(r, n, g)
                                    }
                                }
                                break;
                            case 5:
                                Ro(d, d.return);
                                break;
                            case 22:
                                if (d.memoizedState !== null) {
                                    mx(f);
                                    continue
                                }
                        }
                        m !== null ? (m.return = d, N = m) : mx(f)
                    }
                    u = u.sibling
                }
                e:for (u = null, f = e; ;) {
                    if (f.tag === 5) {
                        if (u === null) {
                            u = f;
                            try {
                                i = f.stateNode, c ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Ox("display", s))
                            } catch (g) {
                                qe(e, e.return, g)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (u === null) try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (g) {
                            qe(e, e.return, g)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        u === f && (u = null), f = f.return
                    }
                    u === f && (u = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            In(t, e), er(e), 4 & r && hx(e);
            break;
        case 21:
            break;
        default:
            In(t, e), er(e)
    }
}

function er(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (sS(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    32 & r.flags && (Qs(i, ""), r.flags &= -33);
                    var o = dx(e);
                    Kh(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo, a = dx(e);
                    Yh(e, a, s);
                    break;
                default:
                    throw Error(M(161))
            }
        } catch (l) {
            qe(e, e.return, l)
        }
        e.flags &= -3
    }
    4096 & t && (e.flags &= -4097)
}

function k2(e, t, n) {
    N = e, cS(e, t, n)
}

function cS(e, t, n) {
    for (var r = (1 & e.mode) !== 0; N !== null;) {
        var i = N, o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || ql;
            if (!s) {
                var a = i.alternate, l = a !== null && a.memoizedState !== null || Ft;
                a = ql;
                var c = Ft;
                if (ql = s, (Ft = l) && !c) for (N = i; N !== null;) s = N, l = s.child, s.tag === 22 && s.memoizedState !== null ? gx(i) : l !== null ? (l.return = s, N = l) : gx(i);
                for (; o !== null;) N = o, cS(o, t, n), o = o.sibling;
                N = i, ql = a, Ft = c
            }
            px(e, t, n)
        } else 8772 & i.subtreeFlags && o !== null ? (o.return = i, N = o) : px(e, t, n)
    }
}

function px(e) {
    for (; N !== null;) {
        var t = N;
        if (8772 & t.flags) {
            var n = t.alternate;
            try {
                if (8772 & t.flags) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ft || Dc(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !Ft) if (n === null) r.componentDidMount(); else {
                            var i = t.elementType === t.type ? n.memoizedProps : On(t.type, n.memoizedProps);
                            r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var o = t.updateQueue;
                        o !== null && Qb(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Qb(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && 4 & t.flags) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case"img":
                                    l.src && (n.src = l.src)
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
                                var u = c.memoizedState;
                                if (u !== null) {
                                    var f = u.dehydrated;
                                    f !== null && ta(f)
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
                        throw Error(M(163))
                }
                Ft || 512 & t.flags && Xh(t)
            } catch (d) {
                qe(t, t.return, d)
            }
        }
        if (t === e) {
            N = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function mx(e) {
    for (; N !== null;) {
        var t = N;
        if (t === e) {
            N = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function gx(e) {
    for (; N !== null;) {
        var t = N;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Dc(4, t)
                    } catch (l) {
                        qe(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            qe(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        Xh(t)
                    } catch (l) {
                        qe(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Xh(t)
                    } catch (l) {
                        qe(t, s, l)
                    }
            }
        } catch (l) {
            qe(t, t.return, l)
        }
        if (t === e) {
            N = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, N = a;
            break
        }
        N = t.return
    }
}

var C2 = Math.ceil, Cc = Pr.ReactCurrentDispatcher, Lp = Pr.ReactCurrentOwner, kn = Pr.ReactCurrentBatchConfig, ye = 0,
    ut = null, et = null, bt = 0, en = 0, Eo = ai(0), it = 0, da = null, Vi = 0, zc = 0, Vp = 0, Xs = null, jt = null,
    Ap = 0, $o = 1 / 0, xr = null, Tc = !1, Qh = null, ti = null, Xl = !1, Yr = null, Rc = 0, Ys = 0, Zh = null,
    nc = -1, rc = 0;

function At() {
    return 6 & ye ? Ze() : nc !== -1 ? nc : nc = Ze()
}

function ni(e) {
    return 1 & e.mode ? 2 & ye && bt !== 0 ? bt & -bt : a2.transition !== null ? (rc === 0 && (rc = Ux()), rc) : (e = we, e !== 0 || (e = P.event, e = e === void 0 ? 16 : Zx(e.type)), e) : 1
}

function An(e, t, n, r) {
    if (50 < Ys) throw Ys = 0, Zh = null, Error(M(185));
    ha(e, n, r), 2 & ye && e === ut || (e === ut && (!(2 & ye) && (zc |= n), it === 4 && qr(e, bt)), Gt(e, r), n === 1 && ye === 0 && !(1 & t.mode) && ($o = Ze() + 500, Lc && li()))
}

function Gt(e, t) {
    var n = e.callbackNode;
    cO(e, t);
    var r = cc(e, e === ut ? bt : 0);
    if (r === 0) n !== null && Cb(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Cb(n), t === 1) e.tag === 0 ? s2(vx.bind(null, e)) : vw(vx.bind(null, e)), n2(function () {
            !(6 & ye) && li()
        }), n = null; else {
            switch (Gx(r)) {
                case 1:
                    n = lp;
                    break;
                case 4:
                    n = Hx;
                    break;
                case 16:
                    n = lc;
                    break;
                case 536870912:
                    n = Wx;
                    break;
                default:
                    n = lc
            }
            n = vS(n, uS.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function uS(e, t) {
    if (nc = -1, rc = 0, 6 & ye) throw Error(M(327));
    var n = e.callbackNode;
    if (Mo() && e.callbackNode !== n) return null;
    var r = cc(e, e === ut ? bt : 0);
    if (r === 0) return null;
    if (30 & r || r & e.expiredLanes || t) t = Ec(e, r); else {
        t = r;
        var i = ye;
        ye |= 2;
        var o = dS();
        ut === e && bt === t || (xr = null, $o = Ze() + 500, _i(e, t));
        do try {
            E2();
            break
        } catch (a) {
            fS(e, a)
        } while (1);
        wp(), Cc.current = o, ye = i, et !== null ? t = 0 : (ut = null, bt = 0, t = it)
    }
    if (t !== 0) {
        if (t === 2 && (i = Rh(e), i !== 0 && (r = i, t = Jh(e, i))), t === 1) throw n = da, _i(e, 0), qr(e, r), Gt(e, Ze()), n;
        if (t === 6) qr(e, r); else {
            if (i = e.current.alternate, !(30 & r) && !T2(i) && (t = Ec(e, r), t === 2 && (o = Rh(e), o !== 0 && (r = o, t = Jh(e, o))), t === 1)) throw n = da, _i(e, 0), qr(e, r), Gt(e, Ze()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(M(345));
                case 2:
                    Ri(e, jt, xr);
                    break;
                case 3:
                    if (qr(e, r), (130023424 & r) === r && (t = Ap + 500 - Ze(), 10 < t)) {
                        if (cc(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            At(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Lh(Ri.bind(null, e, jt, xr), t);
                        break
                    }
                    Ri(e, jt, xr);
                    break;
                case 4:
                    if (qr(e, r), (4194240 & r) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - Vn(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = Ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * C2(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Lh(Ri.bind(null, e, jt, xr), r);
                        break
                    }
                    Ri(e, jt, xr);
                    break;
                case 5:
                    Ri(e, jt, xr);
                    break;
                default:
                    throw Error(M(329))
            }
        }
    }
    return Gt(e, Ze()), e.callbackNode === n ? uS.bind(null, e) : null
}

function Jh(e, t) {
    var n = Xs;
    return e.current.memoizedState.isDehydrated && (_i(e, t).flags |= 256), e = Ec(e, t), e !== 2 && (t = jt, jt = n, t !== null && ep(t)), e
}

function ep(e) {
    jt === null ? jt = e : jt.push.apply(jt, e)
}

function T2(e) {
    for (var t = e; ;) {
        if (16384 & t.flags) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var i = n[r], o = i.getSnapshot;
                i = i.value;
                try {
                    if (!Dn(o(), i)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, 16384 & t.subtreeFlags && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function qr(e, t) {
    for (t &= ~Vp, t &= ~zc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Vn(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function vx(e) {
    if (6 & ye) throw Error(M(327));
    Mo();
    var t = cc(e, 0);
    if (!(1 & t)) return Gt(e, Ze()), null;
    var n = Ec(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Rh(e);
        r !== 0 && (t = r, n = Jh(e, r))
    }
    if (n === 1) throw n = da, _i(e, 0), qr(e, t), Gt(e, Ze()), n;
    if (n === 6) throw Error(M(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ri(e, jt, xr), Gt(e, Ze()), null
}

function Dp(e, t) {
    var n = ye;
    ye |= 1;
    try {
        return e(t)
    } finally {
        ye = n, ye === 0 && ($o = Ze() + 500, Lc && li())
    }
}

function Ai(e) {
    Yr !== null && Yr.tag === 0 && !(6 & ye) && Mo();
    var t = ye;
    ye |= 1;
    var n = kn.transition, r = we;
    try {
        if (kn.transition = null, we = 1, e) return e()
    } finally {
        we = r, kn.transition = n, ye = t, !(6 & ye) && li()
    }
}

function zp() {
    en = Eo.current, Me(Eo)
}

function _i(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, t2(n)), et !== null) for (n = et.return; n !== null;) {
        var r = n;
        switch (yp(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && pc();
                break;
            case 3:
                zo(), Me(Wt), Me(Pt), Ep();
                break;
            case 5:
                Rp(r);
                break;
            case 4:
                zo();
                break;
            case 13:
                Me(Ne);
                break;
            case 19:
                Me(Ne);
                break;
            case 10:
                Sp(r.type._context);
                break;
            case 22:
            case 23:
                zp()
        }
        n = n.return
    }
    if (ut = e, et = e = ri(e.current, null), bt = en = t, it = 0, da = null, Vp = zc = Vi = 0, jt = Xs = null, Fi !== null) {
        for (t = 0; t < Fi.length; t++) if (n = Fi[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, o = n.pending;
            if (o !== null) {
                var s = o.next;
                o.next = i, r.next = s
            }
            n.pending = r
        }
        Fi = null
    }
    return e
}

function fS(e, t) {
    do {
        var n = et;
        try {
            if (wp(), Jl.current = kc, Sc) {
                for (var r = je.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Sc = !1
            }
            if (Li = 0, ct = rt = je = null, Gs = !1, ca = 0, Lp.current = null, n === null || n.return === null) {
                it = 1, da = t, et = null;
                break
            }
            e:{
                var o = e, s = n.return, a = n, l = t;
                if (t = bt, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l, u = a, f = u.tag;
                    if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
                        var d = u.alternate;
                        d ? (u.updateQueue = d.updateQueue, u.memoizedState = d.memoizedState, u.lanes = d.lanes) : (u.updateQueue = null, u.memoizedState = null)
                    }
                    var m = ix(s);
                    if (m !== null) {
                        m.flags &= -257, ox(m, s, a, o, t), 1 & m.mode && rx(o, c, t), t = m, l = c;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(l), t.updateQueue = g
                        } else v.add(l);
                        break e
                    }
                    if (!(1 & t)) {
                        rx(o, c, t), Bp();
                        break e
                    }
                    l = Error(M(426))
                } else if (Be && 1 & a.mode) {
                    var b = ix(s);
                    if (b !== null) {
                        !(65536 & b.flags) && (b.flags |= 256), ox(b, s, a, o, t), bp(Bo(l, a));
                        break e
                    }
                }
                o = l = Bo(l, a), it !== 4 && (it = 2), Xs === null ? Xs = [o] : Xs.push(o), o = s;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var p = qw(o, l, t);
                            Kb(o, p);
                            break e;
                        case 1:
                            a = l;
                            var h = o.type, y = o.stateNode;
                            if (!(128 & o.flags) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (ti === null || !ti.has(y)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var w = Xw(o, a, t);
                                Kb(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            pS(n)
        } catch (k) {
            t = k, et === n && n !== null && (et = n = n.return);
            continue
        }
        break
    } while (1)
}

function dS() {
    var e = Cc.current;
    return Cc.current = kc, e === null ? kc : e
}

function Bp() {
    it !== 0 && it !== 3 && it !== 2 || (it = 4), ut === null || !(268435455 & Vi) && !(268435455 & zc) || qr(ut, bt)
}

function Ec(e, t) {
    var n = ye;
    ye |= 2;
    var r = dS();
    ut === e && bt === t || (xr = null, _i(e, t));
    do try {
        R2();
        break
    } catch (i) {
        fS(e, i)
    } while (1);
    if (wp(), ye = n, Cc.current = r, et !== null) throw Error(M(261));
    return ut = null, bt = 0, it
}

function R2() {
    for (; et !== null;) hS(et)
}

function E2() {
    for (; et !== null && !eO();) hS(et)
}

function hS(e) {
    var t = gS(e.alternate, e, en);
    e.memoizedProps = e.pendingProps, t === null ? pS(e) : et = t, Lp.current = null
}

function pS(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, 32768 & t.flags) {
            if (n = x2(n, t), n !== null) {
                n.flags &= 32767, et = n;
                return
            }
            if (e === null) {
                it = 6, et = null;
                return
            }
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
        } else if (n = b2(n, t, en), n !== null) {
            et = n;
            return
        }
        if (t = t.sibling, t !== null) {
            et = t;
            return
        }
        et = t = e
    } while (t !== null);
    it === 0 && (it = 5)
}

function Ri(e, t, n) {
    var r = we, i = kn.transition;
    try {
        kn.transition = null, we = 1, F2(e, t, n, r)
    } finally {
        kn.transition = i, we = r
    }
    return null
}

function F2(e, t, n, r) {
    do Mo(); while (Yr !== null);
    if (6 & ye) throw Error(M(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (uO(e, o), e === ut && (et = ut = null, bt = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || Xl || (Xl = !0, vS(lc, function () {
        return Mo(), null
    })), o = (15990 & n.flags) !== 0, 15990 & n.subtreeFlags || o) {
        o = kn.transition, kn.transition = null;
        var s = we;
        we = 1;
        var a = ye;
        ye |= 4, Lp.current = null, S2(e, n), lS(n, e), KO(Oh), uc = !!Ih, Oh = Ih = null, e.current = n, k2(n, e, i), tO(), ye = a, we = s, kn.transition = o
    } else e.current = n;
    if (Xl && (Xl = !1, Yr = e, Rc = i), o = e.pendingLanes, o === 0 && (ti = null), iO(n.stateNode, r), Gt(e, Ze()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
        componentStack: i.stack,
        digest: i.digest
    });
    if (Tc) throw Tc = !1, e = Qh, Qh = null, e;
    return 1 & Rc && e.tag !== 0 && Mo(), o = e.pendingLanes, 1 & o ? e === Zh ? Ys++ : (Ys = 0, Zh = e) : Ys = 0, li(), null
}

function Mo() {
    if (Yr !== null) {
        var e = Gx(Rc), t = kn.transition, n = we;
        try {
            if (kn.transition = null, we = 16 > e ? 16 : e, Yr === null) var r = !1; else {
                if (e = Yr, Yr = null, Rc = 0, 6 & ye) throw Error(M(331));
                var i = ye;
                for (ye |= 4, N = e.current; N !== null;) {
                    var o = N, s = o.child;
                    if (16 & N.flags) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (N = c; N !== null;) {
                                    var u = N;
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qs(8, u, o)
                                    }
                                    var f = u.child;
                                    if (f !== null) f.return = u, N = f; else for (; N !== null;) {
                                        u = N;
                                        var d = u.sibling, m = u.return;
                                        if (oS(u), u === c) {
                                            N = null;
                                            break
                                        }
                                        if (d !== null) {
                                            d.return = m, N = d;
                                            break
                                        }
                                        N = m
                                    }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var b = g.sibling;
                                        g.sibling = null, g = b
                                    } while (g !== null)
                                }
                            }
                            N = o
                        }
                    }
                    if (2064 & o.subtreeFlags && s !== null) s.return = o, N = s; else e:for (; N !== null;) {
                        if (o = N, 2048 & o.flags) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                qs(9, o, o.return)
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, N = p;
                            break e
                        }
                        N = o.return
                    }
                }
                var h = e.current;
                for (N = h; N !== null;) {
                    s = N;
                    var y = s.child;
                    if (2064 & s.subtreeFlags && y !== null) y.return = s, N = y; else e:for (s = h; N !== null;) {
                        if (a = N, 2048 & a.flags) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Dc(9, a)
                            }
                        } catch (k) {
                            qe(a, a.return, k)
                        }
                        if (a === s) {
                            N = null;
                            break e
                        }
                        var w = a.sibling;
                        if (w !== null) {
                            w.return = a.return, N = w;
                            break e
                        }
                        N = a.return
                    }
                }
                if (ye = i, li(), rr && typeof rr.onPostCommitFiberRoot == "function") try {
                    rr.onPostCommitFiberRoot(Pc, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            we = n, kn.transition = t
        }
    }
    return !1
}

function yx(e, t, n) {
    t = Bo(n, t), t = qw(e, t, 1), e = ei(e, t, 1), t = At(), e !== null && (ha(e, 1, t), Gt(e, t))
}

function qe(e, t, n) {
    if (e.tag === 3) yx(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            yx(t, e, n);
            break
        }
        if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ti === null || !ti.has(r))) {
                e = Bo(n, e), e = Xw(t, e, 1), t = ei(t, e, 1), e = At(), t !== null && (ha(t, 1, e), Gt(t, e));
                break
            }
        }
        t = t.return
    }
}

function P2(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, ut === e && (bt & n) === n && (it === 4 || it === 3 && (130023424 & bt) === bt && 500 > Ze() - Ap ? _i(e, 0) : Vp |= n), Gt(e, t)
}

function mS(e, t) {
    t === 0 && (1 & e.mode ? (t = Ll, Ll <<= 1, !(130023424 & Ll) && (Ll = 4194304)) : t = 1);
    var n = At();
    e = Er(e, t), e !== null && (ha(e, t, n), Gt(e, n))
}

function _2(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), mS(e, n)
}

function I2(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(M(314))
    }
    r !== null && r.delete(t), mS(e, n)
}

var gS;
gS = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Wt.current) Ht = !0; else {
        if (!(e.lanes & n) && !(128 & t.flags)) return Ht = !1, y2(e, t, n);
        Ht = (131072 & e.flags) !== 0
    } else Ht = !1, Be && 1048576 & t.flags && yw(t, vc, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            tc(e, t), e = t.pendingProps;
            var i = Vo(t, Pt.current);
            Oo(t, n), i = Pp(null, t, r, e, i, n);
            var o = _p();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ut(r) ? (o = !0, mc(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Cp(t), i.updater = Vc, t.stateNode = i, i._reactInternals = t, Nh(t, r, e, n), t = Wh(null, t, r, !0, o, n)) : (t.tag = 0, Be && o && vp(t), Vt(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (tc(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = M2(r), e = On(r, e), i) {
                    case 0:
                        t = Hh(null, t, r, e, n);
                        break e;
                    case 1:
                        t = lx(null, t, r, e, n);
                        break e;
                    case 11:
                        t = sx(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ax(null, t, r, On(r.type, e), n);
                        break e
                }
                throw Error(M(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : On(r, i), Hh(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : On(r, i), lx(e, t, r, i, n);
        case 3:
            e:{
                if (Zw(t), e === null) throw Error(M(387));
                r = t.pendingProps, o = t.memoizedState, i = o.element, Sw(e, t), xc(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated) {
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache,
                        pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                        transitions: s.transitions
                    }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                        i = Bo(Error(M(423)), t), t = cx(e, t, r, n, i);
                        break e
                    }
                    if (r !== i) {
                        i = Bo(Error(M(424)), t), t = cx(e, t, r, n, i);
                        break e
                    }
                    for (tn = Jr(t.stateNode.containerInfo.firstChild), nn = t, Be = !0, Ln = null, n = Rw(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                } else {
                    if (Ao(), r === i) {
                        t = Fr(e, t, n);
                        break e
                    }
                    Vt(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Ew(t), e === null && zh(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Mh(r, i) ? s = null : o !== null && Mh(r, o) && (t.flags |= 32), Qw(e, t), Vt(e, t, s, n), t.child;
        case 6:
            return e === null && zh(t), null;
        case 13:
            return Jw(e, t, n);
        case 4:
            return Tp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Do(t, null, r, n) : Vt(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : On(r, i), sx(e, t, r, i, n);
        case 7:
            return Vt(e, t, t.pendingProps, n), t.child;
        case 8:
            return Vt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Vt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, Pe(yc, r._currentValue), r._currentValue = s, o !== null) if (Dn(o.value, s)) {
                    if (o.children === i.children && !Wt.current) {
                        t = Fr(e, t, n);
                        break e
                    }
                } else for (o = t.child, o !== null && (o.return = t); o !== null;) {
                    var a = o.dependencies;
                    if (a !== null) {
                        s = o.child;
                        for (var l = a.firstContext; l !== null;) {
                            if (l.context === r) {
                                if (o.tag === 1) {
                                    l = Cr(-1, n & -n), l.tag = 2;
                                    var c = o.updateQueue;
                                    if (c !== null) {
                                        c = c.shared;
                                        var u = c.pending;
                                        u === null ? l.next = l : (l.next = u.next, u.next = l), c.pending = l
                                    }
                                }
                                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Bh(o.return, n, t), a.lanes |= n;
                                break
                            }
                            l = l.next
                        }
                    } else if (o.tag === 10) s = o.type === t.type ? null : o.child; else if (o.tag === 18) {
                        if (s = o.return, s === null) throw Error(M(341));
                        s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Bh(s, n, t), s = o.sibling
                    } else s = o.child;
                    if (s !== null) s.return = o; else for (s = o; s !== null;) {
                        if (s === t) {
                            s = null;
                            break
                        }
                        if (o = s.sibling, o !== null) {
                            o.return = s.return, s = o;
                            break
                        }
                        s = s.return
                    }
                    o = s
                }
                Vt(e, t, i.children, n), t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Oo(t, n), i = Cn(i), r = r(i), t.flags |= 1, Vt(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = On(r, t.pendingProps), i = On(r.type, i), ax(e, t, r, i, n);
        case 15:
            return Yw(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : On(r, i), tc(e, t), t.tag = 1, Ut(r) ? (e = !0, mc(t)) : e = !1, Oo(t, n), Cw(t, r, i), Nh(t, r, i, n), Wh(null, t, r, !0, e, n);
        case 19:
            return eS(e, t, n);
        case 22:
            return Kw(e, t, n)
    }
    throw Error(M(156, t.tag))
};

function vS(e, t) {
    return jx(e, t)
}

function O2(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Sn(e, t, n, r) {
    return new O2(e, t, n, r)
}

function $p(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function M2(e) {
    if (typeof e == "function") return $p(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === op) return 11;
        if (e === sp) return 14
    }
    return 2
}

function ri(e, t) {
    var n = e.alternate;
    return n === null ? (n = Sn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ic(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") $p(e) && (s = 1); else if (typeof e == "string") s = 5; else e:switch (e) {
        case vo:
            return Ii(n.children, i, o, t);
        case ip:
            s = 8, i |= 8;
            break;
        case fh:
            return e = Sn(12, n, t, 2 | i), e.elementType = fh, e.lanes = o, e;
        case dh:
            return e = Sn(13, n, t, i), e.elementType = dh, e.lanes = o, e;
        case hh:
            return e = Sn(19, n, t, i), e.elementType = hh, e.lanes = o, e;
        case Tx:
            return Bc(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case kx:
                    s = 10;
                    break e;
                case Cx:
                    s = 9;
                    break e;
                case op:
                    s = 11;
                    break e;
                case sp:
                    s = 14;
                    break e;
                case Wr:
                    s = 16, r = null;
                    break e
            }
            throw Error(M(130, e == null ? e : typeof e, ""))
    }
    return t = Sn(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function Ii(e, t, n, r) {
    return e = Sn(7, e, r, t), e.lanes = n, e
}

function Bc(e, t, n, r) {
    return e = Sn(22, e, r, t), e.elementType = Tx, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function lh(e, t, n) {
    return e = Sn(6, e, null, t), e.lanes = n, e
}

function ch(e, t, n) {
    return t = Sn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function L2(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gd(0), this.expirationTimes = Gd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gd(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Np(e, t, n, r, i, o, s, a, l) {
    return e = new L2(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Sn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Cp(o), e
}

function V2(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: go, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function yS(e) {
    if (!e) return oi;
    e = e._reactInternals;
    e:{
        if (zi(e) !== e || e.tag !== 1) throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ut(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ut(n)) return gw(e, n, t)
    }
    return t
}

function bS(e, t, n, r, i, o, s, a, l) {
    return e = Np(n, r, !0, e, i, o, s, a, l), e.context = yS(null), n = e.current, r = At(), i = ni(n), o = Cr(r, i), o.callback = t ?? null, ei(n, o, i), e.current.lanes = i, ha(e, i, r), Gt(e, r), e
}

function $c(e, t, n, r) {
    var i = t.current, o = At(), s = ni(i);
    return n = yS(n), t.context === null ? t.context = n : t.pendingContext = n, t = Cr(o, s), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ei(i, t, s), e !== null && (An(e, i, s, o), Zl(e, i, s)), s
}

function Fc(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function bx(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function jp(e, t) {
    bx(e, t), (e = e.alternate) && bx(e, t)
}

function A2() {
    return null
}

var xS = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Hp(e) {
    this._internalRoot = e
}

Nc.prototype.render = Hp.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(M(409));
    $c(e, t, null, null)
};
Nc.prototype.unmount = Hp.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ai(function () {
            $c(null, e, null, null)
        }), t[Rr] = null
    }
};

function Nc(e) {
    this._internalRoot = e
}

Nc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Yx();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < Gr.length && t !== 0 && t < Gr[n].priority; n++) ;
        Gr.splice(n, 0, e), n === 0 && Qx(e)
    }
};

function Wp(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function jc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function xx() {
}

function D2(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var c = Fc(s);
                o.call(c)
            }
        }
        var s = bS(t, r, e, 0, null, !1, !1, "", xx);
        return e._reactRootContainer = s, e[Rr] = s.current, ia(e.nodeType === 8 ? e.parentNode : e), Ai(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var c = Fc(l);
            a.call(c)
        }
    }
    var l = Np(e, 0, !1, null, null, !1, !1, "", xx);
    return e._reactRootContainer = l, e[Rr] = l.current, ia(e.nodeType === 8 ? e.parentNode : e), Ai(function () {
        $c(t, l, n, r)
    }), l
}

function Hc(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var l = Fc(s);
                a.call(l)
            }
        }
        $c(t, s, e, i)
    } else s = D2(n, t, e, i, r);
    return Fc(s)
}

qx = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Bs(t.pendingLanes);
                n !== 0 && (cp(t, 1 | n), Gt(t, Ze()), !(6 & ye) && ($o = Ze() + 500, li()))
            }
            break;
        case 13:
            Ai(function () {
                var r = Er(e, 1);
                if (r !== null) {
                    var i = At();
                    An(r, e, 1, i)
                }
            }), jp(e, 1)
    }
};
up = function (e) {
    if (e.tag === 13) {
        var t = Er(e, 134217728);
        if (t !== null) {
            var n = At();
            An(t, e, 134217728, n)
        }
        jp(e, 134217728)
    }
};
Xx = function (e) {
    if (e.tag === 13) {
        var t = ni(e), n = Er(e, t);
        if (n !== null) {
            var r = At();
            An(n, e, t, r)
        }
        jp(e, t)
    }
};
Yx = function () {
    return we
};
Kx = function (e, t) {
    var n = we;
    try {
        return we = e, t()
    } finally {
        we = n
    }
};
kh = function (e, t, n) {
    switch (t) {
        case"input":
            if (gh(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Mc(r);
                        if (!i) throw Error(M(90));
                        Ex(r), gh(r, i)
                    }
                }
            }
            break;
        case"textarea":
            Px(e, n);
            break;
        case"select":
            t = n.value, t != null && Fo(e, !!n.multiple, t, !1)
    }
};
Ax = Dp;
Dx = Ai;
var z2 = {usingClientEntryPoint: !1, Events: [ma, wo, Mc, Lx, Vx, Dp]},
    Vs = {findFiberByHostInstance: Ei, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"}, B2 = {
        bundleType: Vs.bundleType,
        version: Vs.version,
        rendererPackageName: Vs.rendererPackageName,
        rendererConfig: Vs.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Pr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = $x(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Vs.findFiberByHostInstance || A2,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (As = __REACT_DEVTOOLS_GLOBAL_HOOK__, !As.isDisabled && As.supportsFiber)) try {
    Pc = As.inject(B2), rr = As
} catch {
}
var As;
on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z2;
on.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wp(t)) throw Error(M(200));
    return V2(e, t, null, n)
};
on.createRoot = function (e, t) {
    if (!Wp(e)) throw Error(M(299));
    var n = !1, r = "", i = xS;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Np(e, 1, !1, null, null, n, !1, r, i), e[Rr] = t.current, ia(e.nodeType === 8 ? e.parentNode : e), new Hp(t)
};
on.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
    return e = $x(t), e = e === null ? null : e.stateNode, e
};
on.flushSync = function (e) {
    return Ai(e)
};
on.hydrate = function (e, t, n) {
    if (!jc(t)) throw Error(M(200));
    return Hc(null, e, t, !0, n)
};
on.hydrateRoot = function (e, t, n) {
    if (!Wp(e)) throw Error(M(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = xS;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = bS(t, null, e, 1, n ?? null, i, !1, o, s), e[Rr] = t.current, ia(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Nc(t)
};
on.render = function (e, t, n) {
    if (!jc(t)) throw Error(M(200));
    return Hc(null, e, t, !1, n)
};
on.unmountComponentAtNode = function (e) {
    if (!jc(e)) throw Error(M(40));
    return !!e._reactRootContainer && (Ai(function () {
        Hc(null, null, e, !1, function () {
            e._reactRootContainer = null, e[Rr] = null
        })
    }), !0)
};
on.unstable_batchedUpdates = Dp;
on.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!jc(n)) throw Error(M(200));
    if (e == null || e._reactInternals === void 0) throw Error(M(38));
    return Hc(e, t, n, !1, r)
};
on.version = "18.2.0-next-9e3b772b8-20220608";

function wS() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wS)
    } catch (e) {
        console.error(e)
    }
}

wS();
var an = on, SS = an, $2 = an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, N2 = an.createPortal,
    j2 = an.createRoot, H2 = an.findDOMNode, W2 = an.flushSync, U2 = an.hydrate, G2 = an.hydrateRoot, q2 = an.render,
    X2 = an.unmountComponentAtNode, Y2 = an.unstable_batchedUpdates, K2 = an.unstable_renderSubtreeIntoContainer,
    Q2 = an.version;
var J2 = pn({
    "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.Hsluv = void 0;
        var t = class {
            constructor() {
                this.hex = "#000000", this.rgb_r = 0, this.rgb_g = 0, this.rgb_b = 0, this.xyz_x = 0, this.xyz_y = 0, this.xyz_z = 0, this.luv_l = 0, this.luv_u = 0, this.luv_v = 0, this.lch_l = 0, this.lch_c = 0, this.lch_h = 0, this.hsluv_h = 0, this.hsluv_s = 0, this.hsluv_l = 0, this.hpluv_h = 0, this.hpluv_p = 0, this.hpluv_l = 0, this.r0s = 0, this.r0i = 0, this.r1s = 0, this.r1i = 0, this.g0s = 0, this.g0i = 0, this.g1s = 0, this.g1i = 0, this.b0s = 0, this.b0i = 0, this.b1s = 0, this.b1i = 0
            }

            static fromLinear(n) {
                return n <= .0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055
            }

            static toLinear(n) {
                return n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92
            }

            static yToL(n) {
                return n <= t.epsilon ? n / t.refY * t.kappa : 116 * Math.pow(n / t.refY, 1 / 3) - 16
            }

            static lToY(n) {
                return n <= 8 ? t.refY * n / t.kappa : t.refY * Math.pow((n + 16) / 116, 3)
            }

            static rgbChannelToHex(n) {
                let r = Math.round(n * 255), i = r % 16, o = (r - i) / 16 | 0;
                return t.hexChars.charAt(o) + t.hexChars.charAt(i)
            }

            static hexToRgbChannel(n, r) {
                let i = t.hexChars.indexOf(n.charAt(r)), o = t.hexChars.indexOf(n.charAt(r + 1));
                return (i * 16 + o) / 255
            }

            static distanceFromOriginAngle(n, r, i) {
                let o = r / (Math.sin(i) - n * Math.cos(i));
                return o < 0 ? 1 / 0 : o
            }

            static distanceFromOrigin(n, r) {
                return Math.abs(r) / Math.sqrt(Math.pow(n, 2) + 1)
            }

            static min6(n, r, i, o, s, a) {
                return Math.min(n, Math.min(r, Math.min(i, Math.min(o, Math.min(s, a)))))
            }

            rgbToHex() {
                this.hex = "#", this.hex += t.rgbChannelToHex(this.rgb_r), this.hex += t.rgbChannelToHex(this.rgb_g), this.hex += t.rgbChannelToHex(this.rgb_b)
            }

            hexToRgb() {
                this.hex = this.hex.toLowerCase(), this.rgb_r = t.hexToRgbChannel(this.hex, 1), this.rgb_g = t.hexToRgbChannel(this.hex, 3), this.rgb_b = t.hexToRgbChannel(this.hex, 5)
            }

            xyzToRgb() {
                this.rgb_r = t.fromLinear(t.m_r0 * this.xyz_x + t.m_r1 * this.xyz_y + t.m_r2 * this.xyz_z), this.rgb_g = t.fromLinear(t.m_g0 * this.xyz_x + t.m_g1 * this.xyz_y + t.m_g2 * this.xyz_z), this.rgb_b = t.fromLinear(t.m_b0 * this.xyz_x + t.m_b1 * this.xyz_y + t.m_b2 * this.xyz_z)
            }

            rgbToXyz() {
                let n = t.toLinear(this.rgb_r), r = t.toLinear(this.rgb_g), i = t.toLinear(this.rgb_b);
                this.xyz_x = .41239079926595 * n + .35758433938387 * r + .18048078840183 * i, this.xyz_y = .21263900587151 * n + .71516867876775 * r + .072192315360733 * i, this.xyz_z = .019330818715591 * n + .11919477979462 * r + .95053215224966 * i
            }

            xyzToLuv() {
                let n = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z, r = 4 * this.xyz_x, i = 9 * this.xyz_y;
                n !== 0 ? (r /= n, i /= n) : (r = NaN, i = NaN), this.luv_l = t.yToL(this.xyz_y), this.luv_l === 0 ? (this.luv_u = 0, this.luv_v = 0) : (this.luv_u = 13 * this.luv_l * (r - t.refU), this.luv_v = 13 * this.luv_l * (i - t.refV))
            }

            luvToXyz() {
                if (this.luv_l === 0) {
                    this.xyz_x = 0, this.xyz_y = 0, this.xyz_z = 0;
                    return
                }
                let n = this.luv_u / (13 * this.luv_l) + t.refU, r = this.luv_v / (13 * this.luv_l) + t.refV;
                this.xyz_y = t.lToY(this.luv_l), this.xyz_x = 0 - 9 * this.xyz_y * n / ((n - 4) * r - n * r), this.xyz_z = (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) / (3 * r)
            }

            luvToLch() {
                if (this.lch_l = this.luv_l, this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v), this.lch_c < 1e-8) this.lch_h = 0; else {
                    let n = Math.atan2(this.luv_v, this.luv_u);
                    this.lch_h = n * 180 / Math.PI, this.lch_h < 0 && (this.lch_h = 360 + this.lch_h)
                }
            }

            lchToLuv() {
                let n = this.lch_h / 180 * Math.PI;
                this.luv_l = this.lch_l, this.luv_u = Math.cos(n) * this.lch_c, this.luv_v = Math.sin(n) * this.lch_c
            }

            calculateBoundingLines(n) {
                let r = Math.pow(n + 16, 3) / 1560896, i = r > t.epsilon ? r : n / t.kappa,
                    o = i * (284517 * t.m_r0 - 94839 * t.m_r2),
                    s = i * (838422 * t.m_r2 + 769860 * t.m_r1 + 731718 * t.m_r0),
                    a = i * (632260 * t.m_r2 - 126452 * t.m_r1), l = i * (284517 * t.m_g0 - 94839 * t.m_g2),
                    c = i * (838422 * t.m_g2 + 769860 * t.m_g1 + 731718 * t.m_g0),
                    u = i * (632260 * t.m_g2 - 126452 * t.m_g1), f = i * (284517 * t.m_b0 - 94839 * t.m_b2),
                    d = i * (838422 * t.m_b2 + 769860 * t.m_b1 + 731718 * t.m_b0),
                    m = i * (632260 * t.m_b2 - 126452 * t.m_b1);
                this.r0s = o / a, this.r0i = s * n / a, this.r1s = o / (a + 126452), this.r1i = (s - 769860) * n / (a + 126452), this.g0s = l / u, this.g0i = c * n / u, this.g1s = l / (u + 126452), this.g1i = (c - 769860) * n / (u + 126452), this.b0s = f / m, this.b0i = d * n / m, this.b1s = f / (m + 126452), this.b1i = (d - 769860) * n / (m + 126452)
            }

            calcMaxChromaHpluv() {
                let n = t.distanceFromOrigin(this.r0s, this.r0i), r = t.distanceFromOrigin(this.r1s, this.r1i),
                    i = t.distanceFromOrigin(this.g0s, this.g0i), o = t.distanceFromOrigin(this.g1s, this.g1i),
                    s = t.distanceFromOrigin(this.b0s, this.b0i), a = t.distanceFromOrigin(this.b1s, this.b1i);
                return t.min6(n, r, i, o, s, a)
            }

            calcMaxChromaHsluv(n) {
                let r = n / 360 * Math.PI * 2, i = t.distanceFromOriginAngle(this.r0s, this.r0i, r),
                    o = t.distanceFromOriginAngle(this.r1s, this.r1i, r),
                    s = t.distanceFromOriginAngle(this.g0s, this.g0i, r),
                    a = t.distanceFromOriginAngle(this.g1s, this.g1i, r),
                    l = t.distanceFromOriginAngle(this.b0s, this.b0i, r),
                    c = t.distanceFromOriginAngle(this.b1s, this.b1i, r);
                return t.min6(i, o, s, a, l, c)
            }

            hsluvToLch() {
                if (this.hsluv_l > 99.9999999) this.lch_l = 100, this.lch_c = 0; else if (this.hsluv_l < 1e-8) this.lch_l = 0, this.lch_c = 0; else {
                    this.lch_l = this.hsluv_l, this.calculateBoundingLines(this.hsluv_l);
                    let n = this.calcMaxChromaHsluv(this.hsluv_h);
                    this.lch_c = n / 100 * this.hsluv_s
                }
                this.lch_h = this.hsluv_h
            }

            lchToHsluv() {
                if (this.lch_l > 99.9999999) this.hsluv_s = 0, this.hsluv_l = 100; else if (this.lch_l < 1e-8) this.hsluv_s = 0, this.hsluv_l = 0; else {
                    this.calculateBoundingLines(this.lch_l);
                    let n = this.calcMaxChromaHsluv(this.lch_h);
                    this.hsluv_s = this.lch_c / n * 100, this.hsluv_l = this.lch_l
                }
                this.hsluv_h = this.lch_h
            }

            hpluvToLch() {
                if (this.hpluv_l > 99.9999999) this.lch_l = 100, this.lch_c = 0; else if (this.hpluv_l < 1e-8) this.lch_l = 0, this.lch_c = 0; else {
                    this.lch_l = this.hpluv_l, this.calculateBoundingLines(this.hpluv_l);
                    let n = this.calcMaxChromaHpluv();
                    this.lch_c = n / 100 * this.hpluv_p
                }
                this.lch_h = this.hpluv_h
            }

            lchToHpluv() {
                if (this.lch_l > 99.9999999) this.hpluv_p = 0, this.hpluv_l = 100; else if (this.lch_l < 1e-8) this.hpluv_p = 0, this.hpluv_l = 0; else {
                    this.calculateBoundingLines(this.lch_l);
                    let n = this.calcMaxChromaHpluv();
                    this.hpluv_p = this.lch_c / n * 100, this.hpluv_l = this.lch_l
                }
                this.hpluv_h = this.lch_h
            }

            hsluvToRgb() {
                this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb()
            }

            hpluvToRgb() {
                this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb()
            }

            hsluvToHex() {
                this.hsluvToRgb(), this.rgbToHex()
            }

            hpluvToHex() {
                this.hpluvToRgb(), this.rgbToHex()
            }

            rgbToHsluv() {
                this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv()
            }

            rgbToHpluv() {
                this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv()
            }

            hexToHsluv() {
                this.hexToRgb(), this.rgbToHsluv()
            }

            hexToHpluv() {
                this.hexToRgb(), this.rgbToHpluv()
            }
        };
        e.Hsluv = t, t.hexChars = "0123456789abcdef", t.refY = 1, t.refU = .19783000664283, t.refV = .46831999493879, t.kappa = 903.2962962, t.epsilon = .0088564516, t.m_r0 = 3.240969941904521, t.m_r1 = -1.537383177570093, t.m_r2 = -.498610760293, t.m_g0 = -.96924363628087, t.m_g1 = 1.87596750150772, t.m_g2 = .041555057407175, t.m_b0 = .055630079696993, t.m_b1 = -.20397695888897, t.m_b2 = 1.056971514242878
    }
}), eM = pn({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
        "use strict";
        var n = Object.prototype.hasOwnProperty, r = "~";

        function i() {
        }

        Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1));

        function o(c, u, f) {
            this.fn = c, this.context = u, this.once = f || !1
        }

        function s(c, u, f, d, m) {
            if (typeof f != "function") throw new TypeError("The listener must be a function");
            var v = new o(f, d || c, m), g = r ? r + u : u;
            return c._events[g] ? c._events[g].fn ? c._events[g] = [c._events[g], v] : c._events[g].push(v) : (c._events[g] = v, c._eventsCount++), c
        }

        function a(c, u) {
            --c._eventsCount === 0 ? c._events = new i : delete c._events[u]
        }

        function l() {
            this._events = new i, this._eventsCount = 0
        }

        l.prototype.eventNames = function () {
            var u = [], f, d;
            if (this._eventsCount === 0) return u;
            for (d in f = this._events) n.call(f, d) && u.push(r ? d.slice(1) : d);
            return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(f)) : u
        }, l.prototype.listeners = function (u) {
            var f = r ? r + u : u, d = this._events[f];
            if (!d) return [];
            if (d.fn) return [d.fn];
            for (var m = 0, v = d.length, g = new Array(v); m < v; m++) g[m] = d[m].fn;
            return g
        }, l.prototype.listenerCount = function (u) {
            var f = r ? r + u : u, d = this._events[f];
            return d ? d.fn ? 1 : d.length : 0
        }, l.prototype.emit = function (u, f, d, m, v, g) {
            var b = r ? r + u : u;
            if (!this._events[b]) return !1;
            var p = this._events[b], h = arguments.length, y, w;
            if (p.fn) {
                switch (p.once && this.removeListener(u, p.fn, void 0, !0), h) {
                    case 1:
                        return p.fn.call(p.context), !0;
                    case 2:
                        return p.fn.call(p.context, f), !0;
                    case 3:
                        return p.fn.call(p.context, f, d), !0;
                    case 4:
                        return p.fn.call(p.context, f, d, m), !0;
                    case 5:
                        return p.fn.call(p.context, f, d, m, v), !0;
                    case 6:
                        return p.fn.call(p.context, f, d, m, v, g), !0
                }
                for (w = 1, y = new Array(h - 1); w < h; w++) y[w - 1] = arguments[w];
                p.fn.apply(p.context, y)
            } else {
                var k = p.length, S;
                for (w = 0; w < k; w++) switch (p[w].once && this.removeListener(u, p[w].fn, void 0, !0), h) {
                    case 1:
                        p[w].fn.call(p[w].context);
                        break;
                    case 2:
                        p[w].fn.call(p[w].context, f);
                        break;
                    case 3:
                        p[w].fn.call(p[w].context, f, d);
                        break;
                    case 4:
                        p[w].fn.call(p[w].context, f, d, m);
                        break;
                    default:
                        if (!y) for (S = 1, y = new Array(h - 1); S < h; S++) y[S - 1] = arguments[S];
                        p[w].fn.apply(p[w].context, y)
                }
            }
            return !0
        }, l.prototype.on = function (u, f, d) {
            return s(this, u, f, d, !1)
        }, l.prototype.once = function (u, f, d) {
            return s(this, u, f, d, !0)
        }, l.prototype.removeListener = function (u, f, d, m) {
            var v = r ? r + u : u;
            if (!this._events[v]) return this;
            if (!f) return a(this, v), this;
            var g = this._events[v];
            if (g.fn) g.fn === f && (!m || g.once) && (!d || g.context === d) && a(this, v); else {
                for (var b = 0, p = [], h = g.length; b < h; b++) (g[b].fn !== f || m && !g[b].once || d && g[b].context !== d) && p.push(g[b]);
                p.length ? this._events[v] = p.length === 1 ? p[0] : p : a(this, v)
            }
            return this
        }, l.prototype.removeAllListeners = function (u) {
            var f;
            return u ? (f = r ? r + u : u, this._events[f] && a(this, f)) : (this._events = new i, this._eventsCount = 0), this
        }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, typeof t < "u" && (t.exports = l)
    }
}), Vm = pn({
    "../../../node_modules/process/browser.js"(e, t) {
        var n = t.exports = {}, r, i;

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        (function () {
            try {
                typeof setTimeout == "function" ? r = setTimeout : r = o
            } catch {
                r = o
            }
            try {
                typeof clearTimeout == "function" ? i = clearTimeout : i = s
            } catch {
                i = s
            }
        })();

        function a(p) {
            if (r === setTimeout) return setTimeout(p, 0);
            if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(p, 0);
            try {
                return r(p, 0)
            } catch {
                try {
                    return r.call(null, p, 0)
                } catch {
                    return r.call(this, p, 0)
                }
            }
        }

        function l(p) {
            if (i === clearTimeout) return clearTimeout(p);
            if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(p);
            try {
                return i(p)
            } catch {
                try {
                    return i.call(null, p)
                } catch {
                    return i.call(this, p)
                }
            }
        }

        var c = [], u = !1, f, d = -1;

        function m() {
            !u || !f || (u = !1, f.length ? c = f.concat(c) : d = -1, c.length && v())
        }

        function v() {
            if (!u) {
                var p = a(m);
                u = !0;
                for (var h = c.length; h;) {
                    for (f = c, c = []; ++d < h;) f && f[d].run();
                    d = -1, h = c.length
                }
                f = null, u = !1, l(p)
            }
        }

        n.nextTick = function (p) {
            var h = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var y = 1; y < arguments.length; y++) h[y - 1] = arguments[y];
            c.push(new g(p, h)), c.length === 1 && !u && a(v)
        };

        function g(p, h) {
            this.fun = p, this.array = h
        }

        g.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {};

        function b() {
        }

        n.on = b, n.addListener = b, n.once = b, n.off = b, n.removeListener = b, n.removeAllListeners = b, n.emit = b, n.prependListener = b, n.prependOnceListener = b, n.listeners = function (p) {
            return []
        }, n.binding = function (p) {
            throw new Error("process.binding is not supported")
        }, n.cwd = function () {
            return "/"
        }, n.chdir = function (p) {
            throw new Error("process.chdir is not supported")
        }, n.umask = function () {
            return 0
        }
    }
}), tM = pn({
    "../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js"(e, t) {
        (function (n, r) {
            typeof e == "object" && typeof t < "u" ? r(e) : typeof define == "function" && define.amd ? define(["exports"], r) : (n = typeof globalThis < "u" ? globalThis : n || self, r(n.ResizeObserver = {}))
        })(e, function (n) {
            "use strict";
            var r = [], i = function () {
                return r.some(function (F) {
                    return F.activeTargets.length > 0
                })
            }, o = function () {
                return r.some(function (F) {
                    return F.skippedTargets.length > 0
                })
            }, s = "ResizeObserver loop completed with undelivered notifications.", a = function () {
                var F;
                typeof ErrorEvent == "function" ? F = new ErrorEvent("error", {message: s}) : (F = document.createEvent("Event"), F.initEvent("error", !1, !1), F.message = s), P.dispatchEvent(F)
            }, l;
            (function (F) {
                F.BORDER_BOX = "border-box", F.CONTENT_BOX = "content-box", F.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
            })(l || (l = {}));
            var c = function (F) {
                    return Object.freeze(F)
                }, u = function () {
                    function F(_, L) {
                        this.inlineSize = _, this.blockSize = L, c(this)
                    }

                    return F
                }(), f = function () {
                    function F(_, L, G, ge) {
                        return this.x = _, this.y = L, this.width = G, this.height = ge, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, c(this)
                    }

                    return F.prototype.toJSON = function () {
                        var _ = this, L = _.x, G = _.y, ge = _.top, It = _.right, mt = _.bottom, Qe = _.left, hr = _.width,
                            Yt = _.height;
                        return {x: L, y: G, top: ge, right: It, bottom: mt, left: Qe, width: hr, height: Yt}
                    }, F.fromRect = function (_) {
                        return new F(_.x, _.y, _.width, _.height)
                    }, F
                }(), d = function (F) {
                    return F instanceof SVGElement && "getBBox" in F
                }, m = function (F) {
                    if (d(F)) {
                        var _ = F.getBBox(), L = _.width, G = _.height;
                        return !L && !G
                    }
                    var ge = F, It = ge.offsetWidth, mt = ge.offsetHeight;
                    return !(It || mt || F.getClientRects().length)
                }, v = function (F) {
                    var _, L;
                    if (F instanceof Element) return !0;
                    var G = (L = (_ = F) === null || _ === void 0 ? void 0 : _.ownerDocument) === null || L === void 0 ? void 0 : L.defaultView;
                    return !!(G && F instanceof G.Element)
                }, g = function (F) {
                    switch (F.tagName) {
                        case"INPUT":
                            if (F.type !== "image") break;
                        case"VIDEO":
                        case"AUDIO":
                        case"EMBED":
                        case"OBJECT":
                        case"CANVAS":
                        case"IFRAME":
                        case"IMG":
                            return !0
                    }
                    return !1
                }, b = typeof P < "u" ? P : {}, p = new WeakMap, h = /auto|scroll/, y = /^tb|vertical/,
                w = /msie|trident/i.test(b.navigator && b.navigator.userAgent), k = function (F) {
                    return parseFloat(F || "0")
                }, S = function (F, _, L) {
                    return F === void 0 && (F = 0), _ === void 0 && (_ = 0), L === void 0 && (L = !1), new u((L ? _ : F) || 0, (L ? F : _) || 0)
                }, T = c({
                    devicePixelContentBoxSize: S(),
                    borderBoxSize: S(),
                    contentBoxSize: S(),
                    contentRect: new f(0, 0, 0, 0)
                }), E = function (F, _) {
                    if (_ === void 0 && (_ = !1), p.has(F) && !_) return p.get(F);
                    if (m(F)) return p.set(F, T), T;
                    var L = getComputedStyle(F), G = d(F) && F.ownerSVGElement && F.getBBox(),
                        ge = !w && L.boxSizing === "border-box", It = y.test(L.writingMode || ""),
                        mt = !G && h.test(L.overflowY || ""), Qe = !G && h.test(L.overflowX || ""),
                        hr = G ? 0 : k(L.paddingTop), Yt = G ? 0 : k(L.paddingRight), pi = G ? 0 : k(L.paddingBottom),
                        Ki = G ? 0 : k(L.paddingLeft), CT = G ? 0 : k(L.borderTopWidth), TT = G ? 0 : k(L.borderRightWidth),
                        RT = G ? 0 : k(L.borderBottomWidth), ET = G ? 0 : k(L.borderLeftWidth), pg = Ki + Yt, mg = hr + pi,
                        Wu = ET + TT, Uu = CT + RT, gg = Qe ? F.offsetHeight - Uu - F.clientHeight : 0,
                        vg = mt ? F.offsetWidth - Wu - F.clientWidth : 0, FT = ge ? pg + Wu : 0, PT = ge ? mg + Uu : 0,
                        za = G ? G.width : k(L.width) - FT - vg, Ba = G ? G.height : k(L.height) - PT - gg,
                        _T = za + pg + vg + Wu, IT = Ba + mg + gg + Uu, yg = c({
                            devicePixelContentBoxSize: S(Math.round(za * devicePixelRatio), Math.round(Ba * devicePixelRatio), It),
                            borderBoxSize: S(_T, IT, It),
                            contentBoxSize: S(za, Ba, It),
                            contentRect: new f(Ki, hr, za, Ba)
                        });
                    return p.set(F, yg), yg
                }, O = function (F, _, L) {
                    var G = E(F, L), ge = G.borderBoxSize, It = G.contentBoxSize, mt = G.devicePixelContentBoxSize;
                    switch (_) {
                        case l.DEVICE_PIXEL_CONTENT_BOX:
                            return mt;
                        case l.BORDER_BOX:
                            return ge;
                        default:
                            return It
                    }
                }, I = function () {
                    function F(_) {
                        var L = E(_);
                        this.target = _, this.contentRect = L.contentRect, this.borderBoxSize = c([L.borderBoxSize]), this.contentBoxSize = c([L.contentBoxSize]), this.devicePixelContentBoxSize = c([L.devicePixelContentBoxSize])
                    }

                    return F
                }(), B = function (F) {
                    if (m(F)) return 1 / 0;
                    for (var _ = 0, L = F.parentNode; L;) _ += 1, L = L.parentNode;
                    return _
                }, z = function () {
                    var F = 1 / 0, _ = [];
                    r.forEach(function (mt) {
                        if (mt.activeTargets.length !== 0) {
                            var Qe = [];
                            mt.activeTargets.forEach(function (Yt) {
                                var pi = new I(Yt.target), Ki = B(Yt.target);
                                Qe.push(pi), Yt.lastReportedSize = O(Yt.target, Yt.observedBox), Ki < F && (F = Ki)
                            }), _.push(function () {
                                mt.callback.call(mt.observer, Qe, mt.observer)
                            }), mt.activeTargets.splice(0, mt.activeTargets.length)
                        }
                    });
                    for (var L = 0, G = _; L < G.length; L++) {
                        var ge = G[L];
                        ge()
                    }
                    return F
                }, j = function (F) {
                    r.forEach(function (L) {
                        L.activeTargets.splice(0, L.activeTargets.length), L.skippedTargets.splice(0, L.skippedTargets.length), L.observationTargets.forEach(function (ge) {
                            ge.isActive() && (B(ge.target) > F ? L.activeTargets.push(ge) : L.skippedTargets.push(ge))
                        })
                    })
                }, J = function () {
                    var F = 0;
                    for (j(F); i();) F = z(), j(F);
                    return o() && a(), F > 0
                }, H, ue = [], ie = function () {
                    return ue.splice(0).forEach(function (F) {
                        return F()
                    })
                }, q = function (F) {
                    if (!H) {
                        var _ = 0, L = document.createTextNode(""), G = {characterData: !0};
                        new MutationObserver(function () {
                            return ie()
                        }).observe(L, G), H = function () {
                            L.textContent = "" + (_ ? _-- : _++)
                        }
                    }
                    ue.push(F), H()
                }, re = function (F) {
                    q(function () {
                        requestAnimationFrame(F)
                    })
                }, W = 0, pe = function () {
                    return !!W
                }, me = 250, ae = {attributes: !0, characterData: !0, childList: !0, subtree: !0},
                X = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
                Ye = function (F) {
                    return F === void 0 && (F = 0), Date.now() + F
                }, ke = !1, Ke = function () {
                    function F() {
                        var _ = this;
                        this.stopped = !0, this.listener = function () {
                            return _.schedule()
                        }
                    }

                    return F.prototype.run = function (_) {
                        var L = this;
                        if (_ === void 0 && (_ = me), !ke) {
                            ke = !0;
                            var G = Ye(_);
                            re(function () {
                                var ge = !1;
                                try {
                                    ge = J()
                                } finally {
                                    if (ke = !1, _ = G - Ye(), !pe()) return;
                                    ge ? L.run(1e3) : _ > 0 ? L.run(_) : L.start()
                                }
                            })
                        }
                    }, F.prototype.schedule = function () {
                        this.stop(), this.run()
                    }, F.prototype.observe = function () {
                        var _ = this, L = function () {
                            return _.observer && _.observer.observe(document.body, ae)
                        };
                        document.body ? L() : b.addEventListener("DOMContentLoaded", L)
                    }, F.prototype.start = function () {
                        var _ = this;
                        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), X.forEach(function (L) {
                            return b.addEventListener(L, _.listener, !0)
                        }))
                    }, F.prototype.stop = function () {
                        var _ = this;
                        this.stopped || (this.observer && this.observer.disconnect(), X.forEach(function (L) {
                            return b.removeEventListener(L, _.listener, !0)
                        }), this.stopped = !0)
                    }, F
                }(), Ee = new Ke, dn = function (F) {
                    !W && F > 0 && Ee.start(), W += F, !W && Ee.stop()
                }, wt = function (F) {
                    return !d(F) && !g(F) && getComputedStyle(F).display === "inline"
                }, jn = function () {
                    function F(_, L) {
                        this.target = _, this.observedBox = L || l.CONTENT_BOX, this.lastReportedSize = {
                            inlineSize: 0,
                            blockSize: 0
                        }
                    }

                    return F.prototype.isActive = function () {
                        var _ = O(this.target, this.observedBox, !0);
                        return wt(this.target) && (this.lastReportedSize = _), this.lastReportedSize.inlineSize !== _.inlineSize || this.lastReportedSize.blockSize !== _.blockSize
                    }, F
                }(), ce = function () {
                    function F(_, L) {
                        this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = _, this.callback = L
                    }

                    return F
                }(), Xt = new WeakMap, at = function (F, _) {
                    for (var L = 0; L < F.length; L += 1) if (F[L].target === _) return L;
                    return -1
                }, hn = function () {
                    function F() {
                    }

                    return F.connect = function (_, L) {
                        var G = new ce(_, L);
                        Xt.set(_, G)
                    }, F.observe = function (_, L, G) {
                        var ge = Xt.get(_), It = ge.observationTargets.length === 0;
                        at(ge.observationTargets, L) < 0 && (It && r.push(ge), ge.observationTargets.push(new jn(L, G && G.box)), dn(1), Ee.schedule())
                    }, F.unobserve = function (_, L) {
                        var G = Xt.get(_), ge = at(G.observationTargets, L), It = G.observationTargets.length === 1;
                        ge >= 0 && (It && r.splice(r.indexOf(G), 1), G.observationTargets.splice(ge, 1), dn(-1))
                    }, F.disconnect = function (_) {
                        var L = this, G = Xt.get(_);
                        G.observationTargets.slice().forEach(function (ge) {
                            return L.unobserve(_, ge.target)
                        }), G.activeTargets.splice(0, G.activeTargets.length)
                    }, F
                }(), Da = function () {
                    function F(_) {
                        if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (typeof _ != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                        hn.connect(this, _)
                    }

                    return F.prototype.observe = function (_, L) {
                        if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!v(_)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        hn.observe(this, _, L)
                    }, F.prototype.unobserve = function (_) {
                        if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!v(_)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        hn.unobserve(this, _)
                    }, F.prototype.disconnect = function () {
                        hn.disconnect(this)
                    }, F.toString = function () {
                        return "function ResizeObserver () { [polyfill code] }"
                    }, F
                }();
            n.ResizeObserver = Da, n.ResizeObserverEntry = I, n.ResizeObserverSize = u, Object.defineProperty(n, "__esModule", {value: !0})
        })
    }
}), nM = pn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(e) {
        "use strict";
        var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103,
            r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107,
            o = t ? Symbol.for("react.strict_mode") : 60108, s = t ? Symbol.for("react.profiler") : 60114,
            a = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110,
            c = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111,
            f = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113,
            m = t ? Symbol.for("react.suspense_list") : 60120, v = t ? Symbol.for("react.memo") : 60115,
            g = t ? Symbol.for("react.lazy") : 60116, b = t ? Symbol.for("react.block") : 60121,
            p = t ? Symbol.for("react.fundamental") : 60117, h = t ? Symbol.for("react.responder") : 60118,
            y = t ? Symbol.for("react.scope") : 60119;

        function w(S) {
            if (typeof S == "object" && S !== null) {
                var T = S.$$typeof;
                switch (T) {
                    case n:
                        switch (S = S.type, S) {
                            case c:
                            case u:
                            case i:
                            case s:
                            case o:
                            case d:
                                return S;
                            default:
                                switch (S = S && S.$$typeof, S) {
                                    case l:
                                    case f:
                                    case g:
                                    case v:
                                    case a:
                                        return S;
                                    default:
                                        return T
                                }
                        }
                    case r:
                        return T
                }
            }
        }

        function k(S) {
            return w(S) === u
        }

        e.AsyncMode = c, e.ConcurrentMode = u, e.ContextConsumer = l, e.ContextProvider = a, e.Element = n, e.ForwardRef = f, e.Fragment = i, e.Lazy = g, e.Memo = v, e.Portal = r, e.Profiler = s, e.StrictMode = o, e.Suspense = d, e.isAsyncMode = function (S) {
            return k(S) || w(S) === c
        }, e.isConcurrentMode = k, e.isContextConsumer = function (S) {
            return w(S) === l
        }, e.isContextProvider = function (S) {
            return w(S) === a
        }, e.isElement = function (S) {
            return typeof S == "object" && S !== null && S.$$typeof === n
        }, e.isForwardRef = function (S) {
            return w(S) === f
        }, e.isFragment = function (S) {
            return w(S) === i
        }, e.isLazy = function (S) {
            return w(S) === g
        }, e.isMemo = function (S) {
            return w(S) === v
        }, e.isPortal = function (S) {
            return w(S) === r
        }, e.isProfiler = function (S) {
            return w(S) === s
        }, e.isStrictMode = function (S) {
            return w(S) === o
        }, e.isSuspense = function (S) {
            return w(S) === d
        }, e.isValidElementType = function (S) {
            return typeof S == "string" || typeof S == "function" || S === i || S === u || S === s || S === o || S === d || S === m || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === v || S.$$typeof === a || S.$$typeof === l || S.$$typeof === f || S.$$typeof === p || S.$$typeof === h || S.$$typeof === y || S.$$typeof === b)
        }, e.typeOf = w
    }
}), rM = pn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
        "use strict";
        t.exports = nM()
    }
}), Lu = pn({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
        "use strict";
        var n = rM(), r = {
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
            }, i = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
            o = {$$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0},
            s = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, a = {};
        a[n.ForwardRef] = o, a[n.Memo] = s;

        function l(b) {
            return n.isMemo(b) ? s : a[b.$$typeof] || r
        }

        var c = Object.defineProperty, u = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols,
            d = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, v = Object.prototype;

        function g(b, p, h) {
            if (typeof p != "string") {
                if (v) {
                    var y = m(p);
                    y && y !== v && g(b, y, h)
                }
                var w = u(p);
                f && (w = w.concat(f(p)));
                for (var k = l(b), S = l(p), T = 0; T < w.length; ++T) {
                    var E = w[T];
                    if (!i[E] && !(h && h[E]) && !(S && S[E]) && !(k && k[E])) {
                        var O = d(p, E);
                        try {
                            c(b, E, O)
                        } catch {
                        }
                    }
                }
            }
            return b
        }

        t.exports = g
    }
}), iM = pn({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
        (function () {
            function n(p, h) {
                document.addEventListener ? p.addEventListener("scroll", h, !1) : p.attachEvent("scroll", h)
            }

            function r(p) {
                document.body ? p() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function h() {
                    document.removeEventListener("DOMContentLoaded", h), p()
                }) : document.attachEvent("onreadystatechange", function h() {
                    (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", h), p())
                })
            }

            function i(p) {
                this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(p)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
            }

            function o(p, h) {
                p.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + h + ";"
            }

            function s(p) {
                var h = p.a.offsetWidth, y = h + 100;
                return p.f.style.width = y + "px", p.c.scrollLeft = y, p.b.scrollLeft = p.b.scrollWidth + 100, p.g !== h ? (p.g = h, !0) : !1
            }

            function a(p, h) {
                function y() {
                    var k = w;
                    s(k) && k.a.parentNode && h(k.g)
                }

                var w = p;
                n(p.b, y), n(p.c, y), s(p)
            }

            function l(p, h) {
                var y = h || {};
                this.family = p, this.style = y.style || "normal", this.weight = y.weight || "normal", this.stretch = y.stretch || "normal"
            }

            var c = null, u = null, f = null, d = null;

            function m() {
                if (u === null) if (v() && /Apple/.test(P.navigator.vendor)) {
                    var p = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(P.navigator.userAgent);
                    u = !!p && 603 > parseInt(p[1], 10)
                } else u = !1;
                return u
            }

            function v() {
                return d === null && (d = !!document.fonts), d
            }

            function g() {
                if (f === null) {
                    var p = document.createElement("div");
                    try {
                        p.style.font = "condensed 100px sans-serif"
                    } catch {
                    }
                    f = p.style.font !== ""
                }
                return f
            }

            function b(p, h) {
                return [p.style, p.weight, g() ? p.stretch : "", "100px", h].join(" ")
            }

            l.prototype.load = function (p, h) {
                var y = this, w = p || "BESbswy", k = 0, S = h || 3e3, T = new Date().getTime();
                return new Promise(function (E, O) {
                    if (v() && !m()) {
                        var I = new Promise(function (z, j) {
                            function J() {
                                new Date().getTime() - T >= S ? j(Error("" + S + "ms timeout exceeded")) : document.fonts.load(b(y, '"' + y.family + '"'), w).then(function (H) {
                                    1 <= H.length ? z() : setTimeout(J, 25)
                                }, j)
                            }

                            J()
                        }), B = new Promise(function (z, j) {
                            k = setTimeout(function () {
                                j(Error("" + S + "ms timeout exceeded"))
                            }, S)
                        });
                        Promise.race([B, I]).then(function () {
                            clearTimeout(k), E(y)
                        }, O)
                    } else r(function () {
                        function z() {
                            var X;
                            (X = ie != -1 && q != -1 || ie != -1 && re != -1 || q != -1 && re != -1) && ((X = ie != q && ie != re && q != re) || (c === null && (X = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(P.navigator.userAgent), c = !!X && (536 > parseInt(X[1], 10) || parseInt(X[1], 10) === 536 && 11 >= parseInt(X[2], 10))), X = c && (ie == W && q == W && re == W || ie == pe && q == pe && re == pe || ie == me && q == me && re == me)), X = !X), X && (ae.parentNode && ae.parentNode.removeChild(ae), clearTimeout(k), E(y))
                        }

                        function j() {
                            if (new Date().getTime() - T >= S) ae.parentNode && ae.parentNode.removeChild(ae), O(Error("" + S + "ms timeout exceeded")); else {
                                var X = document.hidden;
                                (X === !0 || X === void 0) && (ie = J.a.offsetWidth, q = H.a.offsetWidth, re = ue.a.offsetWidth, z()), k = setTimeout(j, 50)
                            }
                        }

                        var J = new i(w), H = new i(w), ue = new i(w), ie = -1, q = -1, re = -1, W = -1, pe = -1,
                            me = -1, ae = document.createElement("div");
                        ae.dir = "ltr", o(J, b(y, "sans-serif")), o(H, b(y, "serif")), o(ue, b(y, "monospace")), ae.appendChild(J.a), ae.appendChild(H.a), ae.appendChild(ue.a), document.body.appendChild(ae), W = J.a.offsetWidth, pe = H.a.offsetWidth, me = ue.a.offsetWidth, j(), a(J, function (X) {
                            ie = X, z()
                        }), o(J, b(y, '"' + y.family + '",sans-serif')), a(H, function (X) {
                            q = X, z()
                        }), o(H, b(y, '"' + y.family + '",serif')), a(ue, function (X) {
                            re = X, z()
                        }), o(ue, b(y, '"' + y.family + '",monospace'))
                    })
                })
            }, typeof t == "object" ? t.exports = l : (P.FontFaceObserver = l, P.FontFaceObserver.prototype.load = l.prototype.load)
        })()
    }
});

function ym(e, t) {
    let n = {style: t};
    return x.isValidElement(e) ? x.cloneElement(e, n) : x.createElement(e, n)
}

var oM = class extends Error {
}, ru = class extends Error {
}, sM = class extends Ce {
    constructor(e) {
        super(e), this.state = {error: void 0, forceUpdateKey: e.forceUpdateKey}
    }

    static getDerivedStateFromError(e) {
        return {error: e}
    }

    static getDerivedStateFromProps(e, t) {
        if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = {forceUpdateKey: e.forceUpdateKey};
            return t.error && (n.error = void 0), n
        }
        return null
    }

    render() {
        if (this.state.error === void 0) return this.props.children;
        if (!(this.state.error instanceof oM)) {
            let n = new ru;
            throw n.cause = this.state.error, n
        }
        let {notFoundPage: e, defaultPageStyle: t} = this.props;
        if (!e) throw this.state.error;
        return ym(e, t)
    }
}, aM = ":([a-z]\\w*)", Gi = new RegExp(aM, "gi");

function lk(e, t) {
    return e.replace(Gi, (n, r) => {
        let i = t[r];
        return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i)
    })
}

function ck(e, t) {
    if (!e.startsWith("/") || !t.startsWith("/")) throw new Error("from/to paths are expected to be absolute");
    let [n] = kS(e), [r, i] = kS(t), o = lM(n, r);
    return o === "" && (o = "."), !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o), o + "/" + i
}

function kS(e) {
    let t = e.lastIndexOf("/");
    return [e.substring(0, t + 1), e.substring(t + 1)]
}

var Up = 46, qo = 47, hi = (e, t) => e.charCodeAt(t), CS = (e, t) => e.lastIndexOf(t), Yo = (e, t, n) => e.slice(t, n);

function lM(e, t) {
    if (e === t || (e = "/" + RS(e), t = "/" + RS(t), e === t)) return "";
    let n = 1, r = e.length, i = r - n, o = 1, s = t.length - o, a = i < s ? i : s, l = -1, c = 0;
    for (; c < a; c++) {
        let f = hi(e, n + c);
        if (f !== hi(t, o + c)) break;
        f === qo && (l = c)
    }
    if (c === a) if (s > a) {
        if (hi(t, o + c) === qo) return Yo(t, o + c + 1);
        if (c === 0) return Yo(t, o + c)
    } else i > a && (hi(e, n + c) === qo ? l = c : c === 0 && (l = 0));
    let u = "";
    for (c = n + l + 1; c <= r; ++c) (c === r || hi(e, c) === qo) && (u += u.length === 0 ? ".." : "/..");
    return `${u}${Yo(t, o + l)}`
}

var cM = !1, Wc = "/", TS = e => e === qo;

function RS(e) {
    let t = "", n = 0, r = -1, i = 0, o = 0;
    for (let s = 0; s <= e.length; ++s) {
        if (s < e.length) o = hi(e, s); else {
            if (TS(o)) break;
            o = qo
        }
        if (TS(o)) {
            if (!(r === s - 1 || i === 1)) if (i === 2) {
                if (t.length < 2 || n !== 2 || hi(t, t.length - 1) !== Up || hi(t, t.length - 2) !== Up) {
                    if (t.length > 2) {
                        let a = CS(t, Wc);
                        a === -1 ? (t = "", n = 0) : (t = Yo(t, 0, a), n = t.length - 1 - CS(t, Wc)), r = s, i = 0;
                        continue
                    } else if (t.length !== 0) {
                        t = "", n = 0, r = s, i = 0;
                        continue
                    }
                }
                cM && (t += t.length > 0 ? `${Wc}..` : "..", n = 2)
            } else t.length > 0 ? t += `${Wc}${Yo(e, r + 1, s)}` : t = Yo(e, r + 1, s), n = s - r - 1;
            r = s, i = 0
        } else o === Up && i !== -1 ? ++i : i = -1
    }
    return t
}

function uk(e) {
    let t = typeof P < "u" ? P.location.search : "";
    return t ? uM(t, e) : e
}

function uM(e, t) {
    let n = t.indexOf("#"), r = n === -1 ? t : t.substring(0, n), i = n === -1 ? "" : t.substring(n),
        o = r.indexOf("?");
    if (o === -1) return r + e + i;
    let s = new URLSearchParams(e), a = r.substring(o + 1), l = new URLSearchParams(a);
    for (let [c, u] of s) l.has(c) || l.append(c, u);
    return r.substring(0, o + 1) + l.toString() + i
}

function Ta(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e)
}

function Ui(e) {
    return typeof e == "string"
}

var fM = "preload";

function fk(e) {
    return typeof e == "object" && e !== null && !x.isValidElement(e) && fM in e
}

function I6(e) {
    let t = x.lazy(e), n, r, i = x.forwardRef(function (s, a) {
        return x.createElement(r ?? t, a ? {ref: a, ...s} : s)
    });
    return i.preload = () => (n || (n = e().then(o => (r = o.default, r))), n), i
}

function Am(e, t) {
    if (t && e) return e.elements && t in e.elements ? e.elements[t] : t
}

function dM(e) {
    return /bot|-google|google-|yandex|ia_archiver/iu.test(e)
}

function dk(e) {
    if ("scheduler" in P) {
        if ("yield" in scheduler) return scheduler.yield(e);
        if ("postTask" in scheduler) return scheduler.postTask(() => {
        }, e)
    }
    return e?.priority === "user-blocking" ? Promise.resolve() : new Promise(t => {
        setTimeout(t)
    })
}

async function hk(e, t) {
    return await dk(t), e()
}

function Vu(e) {
    return new Promise(t => {
        setTimeout(t, 100), requestAnimationFrame(() => {
            hk(t, e)
        })
    })
}

function hM(e, t, n, r = Ae) {
    r(() => {
        let i = async s => (await Vu(n), s()), o = i(e);
        return () => {
            (async () => {
                let s = await o;
                s && i(s)
            })()
        }
    }, t)
}

var Dm = () => {
}, pM = [];

async function mM(e, t, n, r, i, o, s) {
    var a, l, c;
    let u = e, f = !1, d = {...o}, m = Array.from(u.matchAll(Gi)), v = await Promise.all(m.map(async h => {
        var y;
        let w = h?.[0], k = h?.[1];
        if (!w || !k) throw new Error("Failed to replace path variables: unexpected regex match group");
        let S = o[k];
        if (!S || !Ui(S)) throw new Error(`No slug found for path variable ${k}`);
        let T = await ((y = s?.[i]) === null || y === void 0 ? void 0 : y.call(s));
        if (!T || !t) return S;
        let E = await T.getRecordIdBySlug(S, t);
        if (!E) return S;
        let O = await T.getSlugByRecordId(E, n);
        if (!O) {
            f = !0;
            let I = await T.getSlugByRecordId(E, r);
            return I && (d[k] = I), I ?? S
        }
        return d[k] = O, O
    })), g = 0, b = "", p = !1;
    for (let h = 0; h < m.length; h++) {
        let y = m[h], w = v[h];
        !y || !w || (b += u.substring(g, y.index), g = ((a = y.index) !== null && a !== void 0 ? a : 0) + ((c = (l = y[0]) === null || l === void 0 ? void 0 : l.length) !== null && c !== void 0 ? c : 0), b += v[h], p = !0)
    }
    return p && (u = b), {path: u, pathVariables: d, isMissingInLocale: f}
}

async function gM({
                      currentLocale: e,
                      nextLocale: t,
                      defaultLocale: n,
                      route: r,
                      pathVariables: i,
                      collectionUtils: o,
                      preserveQueryParams: s
                  }) {
    let {path: a} = r, l = {path: a, pathVariables: i, isMissingInLocale: !1};
    if (!a) return l;
    if (i && r.collectionId) try {
        l = await mM(a, e, t, n, r.collectionId, i, o)
    } catch {
    }
    return t.slug && (l.path = "/" + t.slug + l.path), s && l.path && (l.path = uk(l.path)), l
}

function vM(e, t, {global: n, routes: r}) {
    var i;
    return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n
}

var yM = {global: void 0, routes: {}}, pk = x.createContext(yM);

function V6({children: e, value: t}) {
    return C(pk.Provider, {value: t, children: e})
}

function bM() {
    return x.useContext(pk)
}

var Gp = 10, xM = 1e4;

function wM(e) {
    let t = Gp, n = e.next(0), r = [n.value];
    for (; !n.done && t < xM;) n = e.next(t), r.push(n.value), t += Gp;
    return r.length === 1 && r.push(n.value), {easing: `linear(${r.join(",")})`, duration: t - Gp}
}

var Mr = e => `--view-transition-${e}`;

function bm(e) {
    return [parseFloat(e), e.endsWith("px") ? "px" : "%"]
}

function mk(e) {
    let {innerWidth: t, innerHeight: n} = P, [r, i] = bm(e.x), [o, s] = bm(e.y);
    return {x: i === "px" ? r : t * (r / 100), y: s === "px" ? o : n * (o / 100)}
}

var SM = {
        makeKeyframe: (e, t, n) => {
            let r = 0;
            return (n === "exit" && e.angularDirection === "clockwise" && t === "start" || n === "exit" && e.angularDirection === "counter-clockwise" && t === "end" || n === "enter" && e.angularDirection === "counter-clockwise" && t === "start" || n === "enter" && e.angularDirection === "clockwise" && t === "end") && (r = e.sweepAngle / 360 * 100), `${Mr("conic-offset")}: ${r}%;`
        }, makeStyles: (e, t) => {
            let n = `var(${Mr("conic-offset")})`,
                r = t === "exit" && e.angularDirection === "clockwise" || t === "enter" && e.angularDirection === "counter-clockwise",
                i = r ? "transparent" : "black", o = r ? "black" : "transparent", s = "conic-gradient(from ";
            return s += `${e.angle}deg at ${e.x} ${e.y}, `, s += `${i} 0%, ${i} ${n}, `, s += `${o} ${n}, ${o} 100%)`, `mask-image: ${s}; -webkit-mask-image: ${s};`
        }, makePropertyRules: () => `
        @property ${Mr("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `
    }, kM = {
        makeKeyframe: (e, t) => {
            let {x: n, y: r} = mk(e);
            return t === "start" ? `clip-path: circle(0 at ${n}px ${r}px);` : `clip-path: circle(${Math.hypot(Math.max(n, P.innerWidth - n), Math.max(r, P.innerHeight - r))}px at ${n}px ${r}px);`
        }
    }, CM = {
        makeKeyframe: (e, t) => {
            let {x: n, y: r} = mk(e), i = P.innerHeight - r, o = P.innerWidth - n;
            return t === "start" ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);` : "clip-path: inset(0 round 0);"
        }
    }, TM = {
        makeKeyframe: (e, t, n) => {
            let [, r] = bm(e.width), i = `0${r}`;
            return (t === "start" && n === "exit" || t === "end" && n === "enter") && (i = e.width), `${Mr("blinds-width")}: ${i};`
        }, makeStyles: (e, t) => {
            let n = `var(${Mr("blinds-width")})`, r = t === "exit" ? "transparent" : "black",
                i = t === "exit" ? "black" : "transparent", o = "repeating-linear-gradient(";
            return o += e.angle + 90 + "deg, ", o += `${r} 0px, ${r} ${n}, `, o += `${i} ${n}, ${i} ${e.width})`, `mask-image: ${o}; -webkit-mask-image: ${o};`
        }, makePropertyRules: () => `
            @property ${Mr("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `
    }, RM = {
        makeKeyframe: (e, t, n) => {
            let r = t === "start" && n === "exit" || t === "end" && n === "enter" ? 1 : 0;
            return `${Mr("wipe-offset")}: ${r};`
        }, makeStyles: (e, t) => {
            let n = `var(${Mr("wipe-offset")})`, r = t === "exit" ? "transparent" : "black",
                i = t === "exit" ? "black" : "transparent", o = "linear-gradient(";
            return o += e.angle + 90 + "deg, ", o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `, o += `${i} calc(calc(100% + ${e.width}) * ${n}))`, `mask-image: ${o}; -webkit-mask-image: ${o};`
        }, makePropertyRules: () => `
            @property ${Mr("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `
    }, EM = {circle: kM, conic: SM, inset: CM, blinds: TM, wipe: RM},
    FM = {opacity: 1, x: "0px", y: "0px", scale: 1, rotate: 0, rotateX: 0, rotateY: 0, mask: void 0};

function ES(e, t, n, r) {
    var i;
    let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
    return e.mask && (o += ((i = r?.makeKeyframe) === null || i === void 0 ? void 0 : i.call(r, e.mask, t, n)) || ""), o
}

function PM(e) {
    return e ? EM[e] : void 0
}

function FS(e, {transition: t, ...n}) {
    var r;
    let i = "view-transition-" + e, o = {duration: "0s", easing: "linear"};
    if (t.type === "tween") o.duration = t.duration + "s", o.easing = `cubic-bezier(${t.ease.join(",")})`; else if (_M(t)) {
        let {easing: c, duration: u} = wM(Ss({keyframes: [0, 1], ...IM(t), restDelta: .001, restSpeed: 1e-4}));
        o.duration = u + "ms", o.easing = c
    }
    let s = PM((r = n?.mask) === null || r === void 0 ? void 0 : r.type), a = ES(n, "start", e, s),
        l = ES({...FM, mask: n.mask}, "end", e, s);
    return e === "exit" && ([a, l] = [l, a]), `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
}

function _M(e) {
    return e.type === "spring"
}

function IM(e) {
    return e.durationBasedSpring ? {duration: e.duration, bounce: e.bounce} : {
        stiffness: e.stiffness,
        damping: e.damping,
        mass: e.mass
    }
}

var gk = "view-transition-styles", OM = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {type: "tween", delay: 0, duration: .2, ease: [.27, 0, .51, 1], stiffness: 400, damping: 30, mass: 1}
};

function MM({exit: e = OM, enter: t}) {
    let n = document.createElement("style");
    n.id = gk;
    let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
    (e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) && (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `), r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `, r += FS("exit", e), r += FS("enter", t), n.textContent = r, document.head.appendChild(n)
}

var LM = (() => typeof P < "u" ? P.requestIdleCallback || P.setTimeout : setTimeout)();

function VM() {
    LM(() => {
        Y.render(() => {
            performance.mark("framer-vt-remove");
            let e = document.getElementById(gk);
            e && document.head.removeChild(e)
        })
    })
}

var PS = () => {
};

function AM() {
    return !!document.startViewTransition
}

function DM(e) {
    return new Promise(t => {
        Y.render(() => {
            performance.mark("framer-vt-style"), MM(e), t()
        })
    })
}

async function _S(e, t, n) {
    if (!AM()) {
        e();
        return
    }
    if (await DM(t), n?.aborted) return;
    performance.mark("framer-vt");
    let r = document.startViewTransition(async () => {
        performance.mark("framer-vt-freeze"), !n?.aborted && (n?.addEventListener("abort", () => r.skipTransition()), await e())
    });
    return r.updateCallbackDone.then(() => {
        performance.mark("framer-vt-unfreeze")
    }).catch(PS), Promise.all([r.ready, r.finished]).then(() => {
        performance.mark("framer-vt-finished"), VM()
    }).catch(PS), r
}

function vk() {
    let e = bM(), t = V(void 0);
    return $(() => {
        t.current && (t.current(), t.current = void 0)
    }), Q((n, r, i, o, s) => {
        let a = vM(n, r, e);
        if (a) {
            let l = new Promise(f => {
                t.current = f
            }), c = async () => {
                i(), await l
            }, u = async () => (await Vu({priority: "user-blocking", signal: s}).catch(Dm), _S(c, a, s));
            return o ? u() : _S(c, a)
        } else return i()
    }, [e])
}

function yk(e) {
    let t = `${e}-start`, n = `${e}-end`, r = V(void 0);
    return hM(() => {
        r.current && (r.current(), r.current = void 0)
    }, void 0, {priority: "user-blocking"}), Q(() => {
        let i = new Promise(o => {
            r.current = o
        });
        return performance.mark(t), i.finally(() => {
            performance.mark(n), performance.measure(e, t, n)
        }).catch(o => {
            console.error(o)
        })
    }, [e, t, n])
}

async function IS(e, t, {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a
}, l = !1, c = !1) {
    let {path: u} = t;
    if (u) try {
        let f = zm(t, {
            currentRoutePath: n,
            currentPathVariables: r,
            hash: i,
            pathVariables: o,
            preserveQueryParams: a
        });
        return await bk({routeId: e, hash: i, pathVariables: o, localeId: s}, f, l, c)
    } catch {
    }
}

function zM(e) {
    let t = "routeId";
    return Ta(e) && Ui(e[t])
}

function BM(e, t, n = !1) {
    performance.mark("framer-history-replace"), (n ? P.history.__proto__.replaceState : P.history.replaceState).call(P.history, e, "", t)
}

var Uc = !0, OS = (() => {
    if (typeof Fe > "u") return !1;
    let e = Fe.userAgent, t = e.indexOf("Chrome/"), n = +e.slice(t + 7, e.indexOf(".", t));
    return n > 101 && n < 128
})();

async function bk(e, t, n = !1, r = !1) {
    if (n && await Vu({priority: "user-blocking"}), performance.mark("framer-history-push"), !r) {
        P.history.pushState(e, "", t);
        return
    }
    let i = !1, o;
    Uc && (o = () => {
        var s;
        if (i = !0, OS) return;
        let a = "Popstate called after intercept(). Please report this to the Framer team.";
        console.error(a), (s = P.__framer_events) === null || s === void 0 || s.push(["published_site_load_recoverable_error", {
            message: a,
            userAgent: Fe.userAgent
        }])
    }, P.addEventListener("popstate", o, {once: !0})), OS && Uc ? P.history.__proto__.pushState.call(P.history, e, "", t) : P.history.pushState(e, "", t), Uc && queueMicrotask(() => {
        i || (Uc = !1, P.removeEventListener("popstate", o))
    })
}

function $M({disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r}) {
    Ae(() => {
        e || (performance.mark("framer-history-set-initial-state"), BM({
            routeId: t,
            pathVariables: n,
            localeId: r
        }, void 0, !0))
    }, [])
}

function NM(e, t) {
    let n = vk(), r = yk("framer-route-change-popstate"), i = V(void 0), o = Q(async ({state: a}) => {
        var l, c, u, f, d, m;
        if (!((l = P.navigation) === null || l === void 0) && l.transition && ((u = (c = P.navigation) === null || c === void 0 ? void 0 : c.transition) === null || u === void 0 ? void 0 : u.navigationType) !== "traverse" || !Ta(a)) return;
        let {routeId: v, hash: g, pathVariables: b, localeId: p} = a;
        if (!Ui(v)) return;
        r();
        let h = () => {
            t(v, Ui(p) ? p : void 0, Ui(g) ? g : void 0, Ta(b) ? b : void 0, !1, !0)
        }, y = await n(e.current, v, h, !1);
        y ? y.updateCallbackDone.then((f = i.current) === null || f === void 0 ? void 0 : f.resolve).catch((d = i.current) === null || d === void 0 ? void 0 : d.reject) : (m = i.current) === null || m === void 0 || m.resolve()
    }, [e, r, t, n]), s = Q(a => {
        a.navigationType === "traverse" && a.intercept({
            async handler() {
                await new Promise((l, c) => {
                    i.current = {resolve: l, reject: c}
                }), i.current = void 0
            }, scroll: "after-transition"
        })
    }, []);
    $(() => {
        var a;
        return P.addEventListener("popstate", o), (a = P.navigation) === null || a === void 0 || a.addEventListener("navigate", s), () => {
            var l;
            P.removeEventListener("popstate", o), (l = P.navigation) === null || l === void 0 || l.removeEventListener("navigate", s)
        }
    }, [o, s])
}

function jM(e, t, n) {
    let r = Am(t, e);
    if (!r) return;
    let i = Object.assign({}, t?.elements, n);
    return r.replace(Gi, (o, s) => {
        var a;
        return String((a = i[s]) !== null && a !== void 0 ? a : o)
    })
}

function zm(e, {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a
}) {
    var l;
    let c = t ?? "/";
    n && (c = c.replace(Gi, (v, g) => String(n[g] || v)));
    let f = (l = e?.path) !== null && l !== void 0 ? l : "/";
    i && (f = f.replace(Gi, (v, g) => String(i[g] || v)));
    let d = jM(r, e, o), m = c === f && d;
    return s && (f = ck(c, f)), (a || m) && (f = uk(f)), d && (f = `${f}#${d}`), f
}

async function HM(e, t, n) {
    if (!e.path || !t) return !1;
    let i = `${n.slug ? `/${n.slug}` : ""}${lk(e.path, t)}`;
    return (await fetch(i, {
        method: "HEAD",
        redirect: "manual"
    })).type === "opaqueredirect" ? (P.location.href = P.location.origin + i, !0) : !1
}

async function WM(e) {
    let t = await gM(e);
    if (t) {
        try {
            localStorage.setItem("preferredLocale", e.nextLocale.code)
        } catch {
        }
        try {
            if (!Ui(t.path)) throw new Error("Expected result.path to be a string");
            if (t.isMissingInLocale && await HM(e.route, t.pathVariables, e.nextLocale)) return
        } catch {
        }
        return t
    }
}

function UM() {
    let e = V(Promise.resolve()), t = V(), n = Q(r => {
        if (r.navigationType === "traverse") return;
        let i = t.current;
        i?.signal.addEventListener("abort", () => {
            i.abort("user aborted")
        }), r.intercept({handler: () => e.current})
    }, []);
    return Q((r, i, o) => {
        if (!P.navigation) {
            i();
            return
        }
        e.current = r, t.current = o, P.navigation.addEventListener("navigate", n), i(!0), r.catch(Dm).finally(() => {
            P.navigation.removeEventListener("navigate", n)
        })
    }, [n])
}

function Ir(e, t, n) {
    try {
        performance.measure(e, t, n)
    } catch (r) {
        console.warn(`Could not measure ${e}`, r)
    }
}

var ur = !1;

function z6() {
    ur = !0, performance.mark("framer-hydration-start")
}

var MS = !1, LS = !1, VS = !1;

function GM() {
    let e = "framer-hydration-router";
    lt(() => {
        MS || !ur || (MS = !0, performance.mark(`${e}-insertion-effect`))
    }, []), Ae(() => {
        LS || !ur || (LS = !0, performance.mark(`${e}-layout-effect`))
    }, []), $(() => {
        VS || !ur || (VS = !0, performance.mark(`${e}-effect`))
    }, [])
}

var AS = !1, DS = !1, zS = !1, xk = !1;

function qM() {
    let e = "framer-hydration-", t = `${e}layout-effects-end`, n = `${e}effects-end`, r = `${e}browser-render-start`,
        i = `${e}render-end`;
    return lt(() => {
        AS || !ur || (AS = !0, performance.mark(i), Ir(`${e}render`, `${e}start`, i), performance.mark(`${e}insertion-effects-start`))
    }, []), Ae(() => {
        if (!(DS || !ur)) {
            if (DS = !0, performance.mark(`${e}layout-effects-start`), document.visibilityState !== "visible") {
                xk = !0;
                return
            }
            requestAnimationFrame(() => {
                var o, s, a;
                performance.mark(r), Ir(`${e}uho`, (s = (o = performance.getEntriesByName(n)[0]) === null || o === void 0 ? void 0 : o.name) !== null && s !== void 0 ? s : (a = performance.getEntriesByName(t)[0]) === null || a === void 0 ? void 0 : a.name, r)
            })
        }
    }, []), $(() => {
        var o;
        if (zS || !ur) return;
        zS = !0;
        let s = `${e}effects-start`;
        performance.mark(s), ((o = performance.getEntriesByName(r)[0]) === null || o === void 0 ? void 0 : o.name) || (Ir(`${e}commit`, t, s), performance.mark(`${e}effects-sync`))
    }, []), null
}

var BS = !1, $S = !1, NS = !1;

function XM() {
    let e = "framer-hydration-", t = `${e}layout-effects-end`, n = `${e}effects-end`, r = `${e}browser-render-start`,
        i = `${e}start`, o = `${e}insertion-effects-end`, s = `${e}first-paint`, a = `${e}browser-raf-end`;
    return lt(() => {
        BS || !ur || (BS = !0, performance.mark(o), Ir(`${e}insertion-effects`, `${e}insertion-effects-start`, o))
    }, []), Ae(() => {
        $S || !ur || ($S = !0, performance.mark(t), Ir(`${e}layout-effects`, `${e}layout-effects-start`, t), !(xk || document.visibilityState !== "visible") && requestAnimationFrame(() => {
            performance.mark(a), Ir(`${e}raf`, r, a), hk(() => {
                performance.mark(s), Ir(`${e}time-to-first-paint`, i, s), Ir(`${e}browser-render`, a, s)
            })
        }))
    }, []), $(() => {
        var l, c, u;
        NS || !ur || (NS = !0, performance.mark(n), Ir(`${e}effects`, (c = (l = performance.getEntriesByName(s)[0]) === null || l === void 0 ? void 0 : l.name) !== null && c !== void 0 ? c : (u = performance.getEntriesByName(`${e}effects-start`)[0]) === null || u === void 0 ? void 0 : u.name, n))
    }, []), null
}

function YM() {
    return qM(), null
}

function KM() {
    return XM(), null
}

var jS = {Start: YM, End: KM},
    ka = ["mousedown", "mouseup", "touchcancel", "touchend", "touchstart", "auxclick", "dblclick", "pointercancel", "pointerdown", "pointerup", "dragend", "dragstart", "drop", "compositionend", "compositionstart", "keydown", "keypress", "keyup", "input", "textInput", "copy", "cut", "paste", "click", "change", "contextmenu", "reset"],
    wk = e => {
        var t, n;
        !((n = (t = e.target) === null || t === void 0 ? void 0 : t.closest) === null || n === void 0) && n.call(t, "#main") && (e.stopPropagation(), performance.mark("framer-react-event-handling-prevented"))
    }, Sk = !1;

function $6() {
    if (!ka) return;
    Sk = !0, performance.mark("framer-react-event-handling-start");
    let e = {capture: !0};
    ka.forEach(t => document.body.addEventListener(t, wk, e))
}

function QM() {
    return $(() => {
        if (!Sk || !ka) return;
        let e = {capture: !0};
        ka.forEach(t => document.body.removeEventListener(t, wk, e)), ka = void 0, performance.mark("framer-react-event-handling-end")
    }, []), null
}

var Bm = !1;

function j6() {
    Bm = !0
}

function ZM() {
    Bm = !1
}

function JM() {
    let e = V(typeof P > "u" || Bm);
    return $(() => {
        e.current = !1
    }, []), e
}

function eL(e, t) {
    if (e.routeId !== t.routeId) return !1;
    if (e.pathVariables === t.pathVariables) return !0;
    let n = e.pathVariables || {}, r = t.pathVariables || {};
    return n.length === r.length && Object.keys(n).every(i => n[i] === r[i])
}

function kk(e) {
    return x.useCallback(t => e[t], [e])
}

var $m = (() => x.createContext({}))();

function tL({api: e, children: t}) {
    return C($m.Provider, {value: e, children: t})
}

function _a() {
    return x.useContext($m)
}

function nL({routes: e, children: t}) {
    let n = kk(e);
    return C($m.Provider, {value: {getRoute: n}, children: t})
}

var rL = class extends Ce {
    constructor() {
        super(...arguments), this.state = {error: void 0}
    }

    static getDerivedStateFromError(e) {
        return e instanceof ru || console.error("Derived error in SuspenseErrorBoundary", e), {error: e}
    }

    componentDidCatch(e, t) {
        var n;
        if (e instanceof ru) return;
        let r = t?.componentStack;
        if (console.error("Caught error in SuspenseErrorBoundary", e, r), typeof P < "u") {
            let i = e instanceof Error && typeof e.stack == "string" ? e.stack : null;
            (n = P.__framer_events) === null || n === void 0 || n.push(["published_site_load_recoverable_error", {
                message: String(e),
                stack: i,
                componentStack: i ? void 0 : r
            }])
        }
    }

    render() {
        if (this.state.error === void 0) return this.props.children;
        if (this.state.error instanceof ru) throw this.state.error.cause;
        return P.__framer_STPD_OPT_OUT__ = !0, C(mi, {children: this.props.fallbackChildren})
    }
}, iL = (() => typeof P < "u" ? new Promise(() => {
}) : null)();

function oL() {
    if (typeof P > "u" || P.__framer_STPD_OPT_OUT__) return null;
    throw iL
}

function Ck({children: e}) {
    return C(rL, {fallbackChildren: e, children: C(mi, {fallback: C(oL, {}), children: e})})
}

var HS = "default";

function sL() {
    let [e, t] = x.useState(0);
    return [e, x.useCallback(() => t(n => n + 1), [])]
}

var aL = async () => {
}, lL = {activeLocale: null, locales: [], setLocale: aL}, Tk = x.createContext(lL);

function cL() {
    return x.useContext(Tk)
}

function WS(e, t, n) {
    let r = e && document.getElementById(e);
    if (r) {
        pL(r, t);
        return
    }
    n || P.scrollTo(0, 0)
}

function uL(e) {
    let t = V([]);
    return Ae(() => {
        var n;
        !((n = t.current) === null || n === void 0) && n.length && (t.current.forEach(r => r()), t.current = [])
    }, [e]), Q(n => {
        t.current.push(n)
    }, [])
}

function fL(e) {
    let t = UM(), n = yk("framer-route-change"), r = V(void 0);
    return Q(async (i, o, s = !0) => {
        var a;
        if (ZM(), !e) return await o?.(), i(), n(), new Promise(m => {
            m()
        });
        (a = r.current) === null || a === void 0 || a.abort();
        let l = s ? new AbortController : void 0;
        r.current = l;
        let c = l?.signal, u = n();
        if (!o) return r.current = void 0, i(c), u;
        let f, d = new Promise((m, v) => {
            f = m, c?.aborted ? v() : c?.addEventListener("abort", v)
        });
        return await Vu({priority: "user-blocking", signal: c}).catch(Dm), i(c), t(d, o, l), u.then(() => {
            f()
        })
    }, [e, n, t])
}

function dL({
                defaultPageStyle: e,
                disableHistory: t,
                initialPathVariables: n,
                initialRoute: r,
                notFoundPage: i,
                collectionUtils: o,
                routes: s,
                initialLocaleId: a,
                locales: l = pM,
                preserveQueryParams: c = !1,
                enableAsyncURLUpdates: u = !1,
                LayoutTemplate: f,
                editorBar: d
            }) {
    GM(), $M({disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: a});
    let m = vk(), [v, g] = sL(), b = uL(v), p = fL(u), h = V(r), y = V(n), w = V(a), k = w.current, S = se(() => {
        var q;
        return (q = l.find(({id: re}) => k ? re === k : re === HS)) !== null && q !== void 0 ? q : null
    }, [k, l]), T = se(() => ({
        activeLocale: S, locales: l, setLocale: async q => {
            let re;
            Ui(q) ? re = q : Ta(q) && (re = q.id);
            let W = l.find(({id: X}) => X === HS), pe = l.find(({id: X}) => X === re);
            if (!pe) return;
            let me = h.current, ae = s[me];
            if (ae) try {
                let X = await WM({
                    currentLocale: S,
                    nextLocale: pe,
                    route: ae,
                    routeId: me,
                    defaultLocale: W,
                    pathVariables: y.current,
                    collectionUtils: o,
                    preserveQueryParams: c
                });
                if (!X) return;
                let Ye = y.current, ke = zM(P.history.state) ? P.history.state.paginationInfo : void 0, Ke = X.path;
                y.current = X.pathVariables, w.current = pe.id, p(() => {
                    m(me, me, () => Qt(g), u)
                }, async (dn = !1) => {
                    if (Ke) return bk({routeId: me, pathVariables: Ye, localeId: pe.id, paginationInfo: ke}, Ke, !1, dn)
                }, !1)
            } catch {
            }
        }
    }), [S, o, u, g, l, c, s, p, m]), E = Q((q, re, W, pe, me = !1, ae = !1, X) => {
        let Ye = h.current;
        if (h.current = q, y.current = pe, w.current = re, b(() => {
            WS(W, me, ae)
        }), ae) {
            Qt(g);
            return
        }
        p(ke => {
            m(Ye, q, () => Qt(g), u, ke)
        }, X)
    }, [u, g, b, p, m]);
    NM(h, E);
    let O = Q(async (q, re, W, pe) => {
        var me, ae;
        let X = s[q];
        if (W) {
            let wt = new Set, jn = (me = X?.path) !== null && me !== void 0 ? me : "/";
            for (let ce of jn.matchAll(Gi)) {
                let Xt = ce[1];
                if (Xt === void 0) throw new Error("A matching path variable should not be undefined");
                wt.add(Xt)
            }
            W = Object.fromEntries(Object.entries(W).filter(([ce]) => wt.has(ce)))
        }
        let Ye = Am(X, re), ke = y.current, Ke = w.current;
        if (eL({routeId: h.current, pathVariables: ke}, {routeId: q, pathVariables: W})) {
            let wt = s[q];
            ((ae = P.history.state) === null || ae === void 0 ? void 0 : ae.hash) !== re && !t && wt && await IS(q, wt, {
                currentRoutePath: wt.path,
                currentPathVariables: ke,
                pathVariables: W,
                hash: re,
                localeId: Ke,
                preserveQueryParams: c
            }, u), WS(Ye, pe, !1);
            return
        }
        if (!X) return;
        let Ee = s[h.current];
        E(q, Ke, Ye, W, pe, !1, t ? void 0 : async (wt = !1) => IS(q, X, {
            currentRoutePath: Ee?.path,
            currentPathVariables: ke,
            hash: re,
            pathVariables: W,
            localeId: Ke,
            preserveQueryParams: c
        }, !1, wt))
    }, [s, E, t, c, u]), I = kk(s), B = h.current, z = y.current, j = se(() => ({
        navigate: O,
        getRoute: I,
        currentRouteId: B,
        currentPathVariables: z,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c
    }), [O, I, B, z, s, o, c]), J = s[h.current];
    if (!J) throw new Error(`Router cannot find route for ${h.current}`);
    let H = !S || !J.includedLocales || J.includedLocales.includes(S.id), ue = J.path && z ? lk(J.path, z) : J.path,
        ie = String(k) + ue;
    return C(tL, {
        api: j,
        children: C(Tk.Provider, {
            value: T,
            children: de(Ck, {
                children: [C(sM, {
                    notFoundPage: i,
                    defaultPageStyle: e,
                    forceUpdateKey: v,
                    children: C(hL, {
                        LayoutTemplate: f,
                        routeId: B,
                        children: de(gn, {
                            children: [C(jS.Start, {}), H ? ym(J.page, f ? {
                                ...e,
                                display: "content"
                            } : e) : i && ym(i, e)]
                        }, ie)
                    })
                }), C(QM, {}), C(jS.End, {}), d]
            })
        })
    })
}

function hL({LayoutTemplate: e, routeId: t, children: n}) {
    return e ? C(e, {routeId: t, children: n}) : n
}

function pL(e, t) {
    let n = t ? {behavior: "smooth", block: "start", inline: "nearest"} : void 0;
    e.scrollIntoView(n)
}

var Gc, qp, US;

function mL(e) {
    if (US !== e) {
        Gc = {};
        for (let [t, {path: n}] of Object.entries(e)) n && (Gc[n] = {path: n, depth: gL(n), routeId: t});
        qp = Object.values(Gc), qp.sort(({depth: t}, {depth: n}) => n - t), US = e
    }
    return [Gc, qp]
}

function Rk(e, t, n = !0, r = []) {
    let [i, o] = mL(e), s, a, l = t;
    if (r.length > 0) {
        let d = l.split("/").find(Boolean);
        if (d && (s = r.find(({slug: m}) => m === d), s && (a = s.id, l = l.substring(s.slug.length + 1))), !a) {
            let m = r.find(({slug: v}) => v === "");
            m && (a = m.id)
        }
    }
    let c = i[l];
    if (c) {
        let d = GS(l, c.path);
        if (d.isMatch) return {routeId: c.routeId, localeId: a, pathVariables: d.pathVariables}
    }
    for (let {path: d, routeId: m} of o) {
        let v = GS(l, d);
        if (v.isMatch) return {routeId: m, localeId: a, pathVariables: v.pathVariables}
    }
    if (!n) throw new Error("No exact match found for path");
    let u = i["/"];
    if (u) return {routeId: u.routeId, localeId: a};
    let f = Object.keys(e)[0];
    if (!f) throw new Error("Router should not have undefined routes");
    return {routeId: f, localeId: a}
}

function gL(e) {
    let t = e.replace(/^\/|\/$/gu, "");
    return t === "" ? 0 : t.split("/").length
}

function GS(e, t) {
    let n = [], i = vL(t).replace(Gi, (c, u) => (n.push(u), "([^/]+)")), o = new RegExp(i + "$"), s = e.match(o);
    if (!s) return {isMatch: !1};
    if (s.length === 1) return {isMatch: !0};
    let a = {}, l = s.slice(1);
    for (let c = 0; c < n.length; ++c) {
        let u = n[c];
        if (u === void 0) continue;
        let f = l[c], d = a[u];
        if (d) {
            if (d !== f) return {isMatch: !1};
            continue
        }
        if (f === void 0) throw new Error("Path variable values cannot be undefined");
        a[u] = f
    }
    return {isMatch: !0, pathVariables: a}
}

function vL(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d")
}

var yL = "page";

function qS(e) {
    return Ta(e) && yL in e && e.page !== void 0
}

var bL = (() => x.createContext(void 0))();

function Au() {
    var e;
    let t = _a(), n = A(bL), r = n ?? t.currentRouteId;
    if (!r) return;
    let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
    if (i) return {...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables}
}

var Nm = (() => typeof P < "u" && !dM(Fe.userAgent))();

function xL(e, t = !0) {
    let {getRoute: n} = _a();
    $(() => {
        if (!(!n || !t || !Nm)) for (let r of e) Ek(n(r))
    }, [e, n, t])
}

async function Ek(e) {
    if (!Nm || !e) return;
    let t = e.page;
    if (!(!t || !fk(t))) {
        await dk();
        try {
            await t.preload()
        } catch {
        }
    }
}

var XS = new Set;

function Ra(e, ...t) {
    XS.has(e) || (XS.add(e), console.warn(e, ...t))
}

function wL(e, t, n) {
    let r = n ? `, use ${n} instead` : "", i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
    Ra(i)
}

var Fk = class {
    constructor() {
        R(this, "observers", new Set), R(this, "transactions", {})
    }

    add(e) {
        this.observers.add(e);
        let t = !1;
        return () => {
            t || (t = !0, this.remove(e))
        }
    }

    remove(e) {
        this.observers.delete(e)
    }

    notify(e, t) {
        if (t) {
            let n = this.transactions[t] || e;
            n.value = e.value, this.transactions[t] = n
        } else this.callObservers(e)
    }

    finishTransaction(e) {
        let t = this.transactions[e];
        return delete this.transactions[e], this.callObservers(t, e)
    }

    callObservers(e, t) {
        let n = [];
        return new Set(this.observers).forEach(r => {
            typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish))
        }), n
    }
}, ot = (() => {
    function e(t) {
        return wL("Animatable()", "2.0.0", "the new animation API (https://www.framer.com/api/animation/)"), Bn(t) ? t : new kL(t)
    }

    return e.transaction = t => {
        let n = Math.random(), r = new Set;
        t((s, a) => {
            s.set(a, n), r.add(s)
        }, n);
        let o = [];
        r.forEach(s => {
            o.push(...s.finishTransaction(n))
        }), o.forEach(s => {
            s(n)
        })
    }, e.getNumber = (t, n = 0) => e.get(t, n), e.get = (t, n) => t == null ? n : Bn(t) ? t.get() : t, e.objectToValues = t => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
            let i = t[r];
            Bn(i) ? n[r] = i.get() : n[r] = i
        }
        return n
    }, e
})(), YS = "onUpdate", KS = "finishTransaction";

function Bn(e) {
    return e !== null && typeof e == "object" && YS in e && e[YS] instanceof Function && KS in e && e[KS] instanceof Function
}

function SL(e, t) {
    return {
        interpolate(n, r) {
            let i = n.get(), o = r.get(), s = ot(i);
            return a => {
                let l = t.interpolate(i, o)(a);
                return s.set(l), s
            }
        }, difference(n, r) {
            let i = n.get();
            return t.difference(i, r.get())
        }
    }
}

var kL = class {
    constructor(e) {
        this.value = e, R(this, "observers", new Fk)
    }

    static interpolationFor(e, t) {
        if (Bn(e)) return SL(e, t)
    }

    get() {
        return this.value
    }

    set(e, t) {
        let n = this.value;
        Bn(e) && (e = e.get()), this.value = e;
        let r = {value: e, oldValue: n};
        this.observers.notify(r, t)
    }

    finishTransaction(e) {
        return this.observers.finishTransaction(e)
    }

    onUpdate(e) {
        return this.observers.add(e)
    }
};

function qc(e, t) {
    let r = 10 ** Math.round(Math.abs(t));
    return Math.round(e * r) / r
}

function QS(e, t) {
    return t === 0 ? Math.round(e) : (t -= t | 0, t < 0 && (t = 1 - t), Math.round(e - t) + t)
}

function un(e, t) {
    return {x: e, y: t}
}

(e => {
    e.add = (...i) => i.reduce((o, s) => ({x: o.x + s.x, y: o.y + s.y}), {
        x: 0,
        y: 0
    }), e.subtract = (i, o) => ({x: i.x - o.x, y: i.y - o.y}), e.multiply = (i, o) => ({
        x: i.x * o,
        y: i.y * o
    }), e.divide = (i, o) => ({x: i.x / o, y: i.y / o}), e.absolute = i => ({
        x: Math.abs(i.x),
        y: Math.abs(i.y)
    }), e.reverse = i => ({x: i.x * -1, y: i.y * -1}), e.pixelAligned = (i, o = {x: 0, y: 0}) => ({
        x: QS(i.x, o.x),
        y: QS(i.y, o.y)
    }), e.distance = (i, o) => {
        let s = Math.abs(i.x - o.x), a = Math.abs(i.y - o.y);
        return Math.sqrt(s * s + a * a)
    }, e.angle = (i, o) => Math.atan2(o.y - i.y, o.x - i.x) * 180 / Math.PI - 90, e.angleFromX = (i, o) => Math.atan2(o.y - i.y, o.x - i.x) * 180 / Math.PI, e.isEqual = (i, o) => i.x === o.x && i.y === o.y, e.rotationNormalizer = () => {
        let i;
        return o => {
            typeof i != "number" && (i = o);
            let s = i - o, a = Math.abs(s) + 180, l = Math.floor(a / 360);
            return s < 180 && (o -= l * 360), s > 180 && (o += l * 360), i = o, o
        }
    };

    function t(i, o) {
        return {x: (i.x + o.x) / 2, y: (i.y + o.y) / 2}
    }

    e.center = t;

    function n(i) {
        let o = 0, s = 0;
        i.forEach(c => {
            o += c.x, s += c.y
        });
        let a = o / i.length, l = s / i.length;
        return {x: a, y: l}
    }

    e.centroid = n;

    function r(i) {
        let o = e.centroid(i), s = new Map;
        for (let a = 0; a < i.length; a++) {
            let l = i[a];
            s.set(l, Math.atan2(l.x - o.x, l.y - o.y))
        }
        return i.sort((a, l) => s.get(a) - s.get(l))
    }

    e.sortClockwise = r
})(un || (un = {}));
var xm = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

function ci(e, t, n, r = !1) {
    let [i, o] = t, [s, a] = n, l = o - i;
    if (l === 0) return (a + s) / 2;
    let c = a - s;
    if (c === 0) return s;
    let u = s + (e - i) / l * c;
    if (r === !0) if (s < a) {
        if (u < s) return s;
        if (u > a) return a
    } else {
        if (u > s) return s;
        if (u < a) return a
    }
    return u
}

function Ko(e) {
    return !Number.isNaN(e) && Number.isFinite(e)
}

function ui(e) {
    let t = wm(e);
    return t !== void 0 ? e.includes("%") ? t / 100 : t : 0
}

function wm(e) {
    let t = /\d?\.?\d+/u.exec(e);
    return t ? Number(t[0]) : void 0
}

var CL = (() => J2().Hsluv)(), qt = new CL;

function TL(e, t, n) {
    return qt.rgb_r = e / 255, qt.rgb_g = t / 255, qt.rgb_b = n / 255, qt.rgbToHsluv(), {
        h: qt.hsluv_h,
        s: qt.hsluv_s,
        l: qt.hsluv_l
    }
}

function RL(e, t, n, r = 1) {
    return qt.hsluv_h = e, qt.hsluv_s = t, qt.hsluv_l = n, qt.hsluvToRgb(), {
        r: qt.rgb_r * 255,
        g: qt.rgb_g * 255,
        b: qt.rgb_b * 255,
        a: r
    }
}

function Xc(e, t, n, r) {
    let i = Math.round(e), o = Math.round(t * 100), s = Math.round(n * 100);
    return r === void 0 || r === 1 ? "hsv(" + i + ", " + o + "%, " + s + "%)" : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")"
}

function EL(e, t, n) {
    return {r: Ko(e) ? Bt(e, 255) * 255 : 0, g: Ko(t) ? Bt(t, 255) * 255 : 0, b: Ko(n) ? Bt(n, 255) * 255 : 0}
}

function ZS(e, t, n, r) {
    let i = [Yp(Math.round(e).toString(16)), Yp(Math.round(t).toString(16)), Yp(Math.round(n).toString(16))];
    return r && i[0].charAt(0) === i[0].charAt(1) && i[1].charAt(0) === i[1].charAt(1) && i[2].charAt(0) === i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}

function jm(e, t, n) {
    let r, i, o = Bt(e, 255), s = Bt(t, 255), a = Bt(n, 255), l = Math.max(o, s, a), c = Math.min(o, s, a),
        u = i = r = (l + c) / 2;
    if (l === c) u = i = 0; else {
        let f = l - c;
        switch (i = r > .5 ? f / (2 - l - c) : f / (l + c), l) {
            case o:
                u = (s - a) / f + (s < a ? 6 : 0);
                break;
            case s:
                u = (a - o) / f + 2;
                break;
            case a:
                u = (o - s) / f + 4;
                break
        }
        u /= 6
    }
    return {h: u * 360, s: i, l: r}
}

function Xp(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function FL(e, t, n) {
    let r, i, o;
    if (e = Bt(e, 360), t = Bt(t * 100, 100), n = Bt(n * 100, 100), t === 0) r = i = o = n; else {
        let s = n < .5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
        r = Xp(a, s, e + 1 / 3), i = Xp(a, s, e), o = Xp(a, s, e - 1 / 3)
    }
    return {r: r * 255, g: i * 255, b: o * 255}
}

function JS(e, t, n) {
    e = Bt(e, 255), t = Bt(t, 255), n = Bt(n, 255);
    let r = Math.max(e, t, n), i = Math.min(e, t, n), o = r - i, s, a = r === 0 ? 0 : o / r, l = r;
    if (r === i) s = 0; else {
        switch (r) {
            case e:
                s = (t - n) / o + (t < n ? 6 : 0);
                break;
            case t:
                s = (n - e) / o + 2;
                break;
            case n:
                s = (e - t) / o + 4;
                break
        }
        s /= 6
    }
    return {h: s, s: a, v: l}
}

function PL(e, t, n) {
    e = Bt(e, 360) * 6, t = Bt(t * 100, 100), n = Bt(n * 100, 100);
    let r = Math.floor(e), i = e - r, o = n * (1 - t), s = n * (1 - i * t), a = n * (1 - (1 - i) * t), l = r % 6,
        c = [n, s, o, o, a, n][l], u = [a, n, n, s, o, o][l], f = [o, o, a, n, n, s][l];
    return {r: c * 255, g: u * 255, b: f * 255}
}

function Bt(e, t) {
    let n, r;
    if (typeof t == "string" ? n = parseFloat(t) : n = t, typeof e == "string") {
        _L(e) && (e = "100%");
        let i = IL(e);
        r = Math.min(n, Math.max(0, parseFloat(e))), i && (r = Math.floor(r * n) / 100)
    } else r = e;
    return Math.abs(r - n) < 1e-6 ? 1 : r % n / n
}

function _L(e) {
    return typeof e == "string" && e.includes(".") && parseFloat(e) === 1
}

function IL(e) {
    return typeof e == "string" && e.includes("%")
}

function Yp(e) {
    return e.length === 1 ? "0" + e : "" + e
}

var or = (() => {
    let e = "[-\\+]?\\d+%?", n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
        r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
        i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
    return {
        rgb: new RegExp("rgb" + r),
        rgba: new RegExp("rgba" + i),
        hsl: new RegExp("hsl" + r),
        hsla: new RegExp("hsla" + i),
        hsv: new RegExp("hsv" + r),
        hsva: new RegExp("hsva" + i),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu
    }
})();

function Hm(e) {
    if (e.includes("gradient(") || e.includes("var(")) return !1;
    let t = /^[\s,#]+/u, n = e.replace(t, "").trimEnd().toLowerCase(), r = xm[n];
    if (r && (n = r), n === "transparent") return {r: 0, g: 0, b: 0, a: 0, format: "name"};
    let i;
    return (i = or.rgb.exec(n)) ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb"
    } : (i = or.rgba.exec(n)) ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb"
    } : (i = or.hsl.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: ui(i[2] ?? ""),
        l: ui(i[3] ?? ""),
        a: 1,
        format: "hsl"
    } : (i = or.hsla.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: ui(i[2] ?? ""),
        l: ui(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl"
    } : (i = or.hsv.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: ui(i[2] ?? ""),
        v: ui(i[3] ?? ""),
        a: 1,
        format: "hsv"
    } : (i = or.hsva.exec(n)) ? {
        h: parseInt(i[1] ?? ""),
        s: ui(i[2] ?? ""),
        v: ui(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv"
    } : (i = or.hex8.exec(n)) ? {
        r: cn(i[1] ?? ""),
        g: cn(i[2] ?? ""),
        b: cn(i[3] ?? ""),
        a: e1(i[4] ?? ""),
        format: r ? "name" : "hex"
    } : (i = or.hex6.exec(n)) ? {
        r: cn(i[1] ?? ""),
        g: cn(i[2] ?? ""),
        b: cn(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex"
    } : (i = or.hex4.exec(n)) ? {
        r: cn(`${i[1]}${i[1]}`),
        g: cn(`${i[2]}${i[2]}`),
        b: cn(`${i[3]}${i[3]}`),
        a: e1(i[4] + "" + i[4]),
        format: r ? "name" : "hex"
    } : (i = or.hex3.exec(n)) ? {
        r: cn(`${i[1]}${i[1]}`),
        g: cn(`${i[2]}${i[2]}`),
        b: cn(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex"
    } : !1
}

function cn(e) {
    return parseInt(e, 16)
}

function e1(e) {
    return cn(e) / 255
}

var t1 = new Map, K = (() => {
    function e(o, s, a, l) {
        if (typeof o == "string") {
            let u = t1.get(o);
            return u || (u = t(o), u === void 0 ? {...e("black"), isValid: !1} : (t1.set(o, u), u))
        }
        let c = t(o, s, a, l);
        return c !== void 0 ? c : {...e("black"), isValid: !1}
    }

    function t(o, s, a, l) {
        if (o === "") return;
        let c = OL(o, s, a, l);
        if (c) {
            let u = {
                r: c.r,
                g: c.g,
                b: c.b,
                a: c.a,
                h: c.h,
                s: c.s,
                l: c.l,
                initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
                roundA: Math.round(100 * c.a) / 100,
                format: c.format,
                mix: e.mix,
                toValue: () => e.toRgbString(u)
            };
            return u
        } else return
    }

    let n = {
        isRGB(o) {
            return o === "rgb" || o === "rgba"
        }, isHSL(o) {
            return o === "hsl" || o === "hsla"
        }
    };
    e.inspect = (o, s) => o.format === "hsl" ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>` : o.format === "hex" || o.format === "name" ? `<${o.constructor.name} "${s}">` : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`, e.isColor = o => typeof o == "string" ? e.isColorString(o) : e.isColorObject(o), e.isColorString = o => typeof o == "string" ? Hm(o) !== !1 : !1, e.isColorObject = o => o && typeof o != "string" && typeof o.r == "number" && typeof o.g == "number" && typeof o.b == "number" && typeof o.h == "number" && typeof o.s == "number" && typeof o.l == "number" && typeof o.a == "number" && typeof o.roundA == "number" && typeof o.format == "string", e.toString = o => e.toRgbString(o), e.toHex = (o, s = !1) => ZS(o.r, o.g, o.b, s), e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`, e.toRgbString = o => o.a === 1 ? "rgb(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ")" : "rgba(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ", " + o.roundA + ")", e.toHusl = o => ({
        ...TL(o.r, o.g, o.b),
        a: o.roundA
    }), e.toHslString = o => {
        let s = e.toHsl(o), a = Math.round(s.h), l = Math.round(s.s * 100), c = Math.round(s.l * 100);
        return o.a === 1 ? "hsl(" + a + ", " + l + "%, " + c + "%)" : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")"
    }, e.toHsv = o => {
        let s = JS(o.r, o.g, o.b);
        return {h: s.h * 360, s: s.s, v: s.v, a: o.a}
    }, e.toHsvString = o => {
        let s = JS(o.r, o.g, o.b), a = Math.round(s.h * 360), l = Math.round(s.s * 100), c = Math.round(s.v * 100);
        return o.a === 1 ? "hsv(" + a + ", " + l + "%, " + c + "%)" : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")"
    }, e.toName = o => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let s = ZS(o.r, o.g, o.b, !0);
        for (let a of Object.keys(xm)) if (xm[a] === s) return a;
        return !1
    }, e.toHsl = o => ({h: Math.round(o.h), s: o.s, l: o.l, a: o.a}), e.toRgb = o => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a
    }), e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return a.r = Math.max(0, Math.min(255, a.r - Math.round(255 * -(s / 100)))), a.g = Math.max(0, Math.min(255, a.g - Math.round(255 * -(s / 100)))), a.b = Math.max(0, Math.min(255, a.b - Math.round(255 * -(s / 100)))), e(a)
    }, e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return a.l += s / 100, a.l = Math.min(1, Math.max(0, a.l)), e(a)
    }, e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return a.l -= s / 100, a.l = Math.min(1, Math.max(0, a.l)), e(a)
    }, e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return a.s += s / 100, a.s = Math.min(1, Math.max(0, a.s)), e(a)
    }, e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return a.s -= s / 100, a.s = Math.min(1, Math.max(0, a.s)), e(a)
    }, e.grayscale = o => e.desaturate(o, 100), e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return a.h += s, a.h = a.h > 360 ? a.h - 360 : a.h, e(a)
    }, e.alpha = (o, s = 1) => e({
        r: o.r,
        g: o.g,
        b: o.b,
        a: s
    }), e.transparent = o => e.alpha(o, 0), e.multiplyAlpha = (o, s = 1) => e({
        r: o.r,
        g: o.g,
        b: o.b,
        a: o.a * s
    }), e.interpolate = (o, s, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s)) throw new TypeError("Both arguments for Color.interpolate must be Color objects");
        return l => e.mixAsColor(o, s, l, !1, a)
    }, e.mix = (o, s, {model: a = "rgb"} = {}) => {
        let l = typeof o == "string" ? e(o) : o, c = e.interpolate(l, s, a);
        return u => e.toRgbString(c(u))
    }, e.mixAsColor = (o, s, a = .5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c)) u = e({
            r: ci(a, [0, 1], [o.r, s.r], l),
            g: ci(a, [0, 1], [o.g, s.g], l),
            b: ci(a, [0, 1], [o.b, s.b], l),
            a: ci(a, [0, 1], [o.a, s.a], l)
        }); else {
            let f, d;
            n.isHSL(c) ? (f = e.toHsl(o), d = e.toHsl(s)) : (f = e.toHusl(o), d = e.toHusl(s)), f.s === 0 ? f.h = d.h : d.s === 0 && (d.h = f.h);
            let m = f.h, v = d.h, g = v - m;
            g > 180 ? g = v - 360 - m : g < -180 && (g = v + 360 - m);
            let b = {
                h: ci(a, [0, 1], [m, m + g], l),
                s: ci(a, [0, 1], [f.s, d.s], l),
                l: ci(a, [0, 1], [f.l, d.l], l),
                a: ci(a, [0, 1], [o.a, s.a], l)
            };
            n.isHSL(c) ? u = e(b) : u = e(RL(b.h, b.s, b.l, b.a))
        }
        return u
    }, e.random = (o = 1) => {
        function s() {
            return Math.floor(Math.random() * 255)
        }

        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")")
    }, e.grey = (o = .5, s = 1) => (o = Math.floor(o * 255), e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")), e.gray = e.grey, e.rgbToHsl = (o, s, a) => jm(o, s, a), e.isValidColorProperty = (o, s) => !!((o.toLowerCase().slice(-5) === "color" || o === "fill" || o === "stroke") && typeof s == "string" && e.isColorString(s)), e.difference = (o, s) => {
        let a = (o.r + s.r) / 2, l = o.r - s.r, c = o.g - s.g, u = o.b - s.b, f = Math.pow(l, 2), d = Math.pow(c, 2),
            m = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * m + a * (f - m) / 256)
    }, e.equal = (o, s, a = .1) => !(Math.abs(o.r - s.r) >= a || Math.abs(o.g - s.g) >= a || Math.abs(o.b - s.b) >= a || Math.abs(o.a - s.a) * 256 >= a);
    let r = fo([0, 255], [0, 1]);

    function i(o) {
        o = r(o);
        let s = Math.abs(o);
        return s < .04045 ? o / 12.92 : (Math.sign(o) || 1) * Math.pow((s + .055) / 1.055, 2.4)
    }

    return e.luminance = o => {
        let {r: s, g: a, b: l} = e.toRgb(o);
        return .2126 * i(s) + .7152 * i(a) + .0722 * i(l)
    }, e.contrast = (o, s) => {
        let a = e.luminance(o), l = e.luminance(s);
        return (Math.max(a, l) + .05) / (Math.min(a, l) + .05)
    }, e
})();

function OL(e, t, n, r = 1) {
    let i;
    return typeof e == "number" && !Number.isNaN(e) && typeof t == "number" && !Number.isNaN(t) && typeof n == "number" && !Number.isNaN(n) ? i = Sm({
        r: e,
        g: t,
        b: n,
        a: r
    }) : typeof e == "string" ? i = ML(e) : typeof e == "object" && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? i = Sm(e) : i = Pk(e)), i
}

function ML(e) {
    let t = Hm(e);
    if (t) return t.format === "hsl" ? Pk(t) : t.format === "hsv" ? LL(t) : Sm(t)
}

function LL(e) {
    let t = PL(e.h, e.s, e.v);
    return {...jm(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? _k(e.a) : 1}
}

function Sm(e) {
    let t = EL(e.r, e.g, e.b);
    return {...jm(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? _k(e.a) : 1}
}

function Pk(e) {
    let t, n, r, i = {r: 0, g: 0, b: 0}, o = {h: 0, s: 0, l: 0};
    return t = Ko(e.h) ? e.h : 0, t = (t + 360) % 360, n = Ko(e.s) ? e.s : 1, typeof e.s == "string" && (n = wm(e.s)), r = Ko(e.l) ? e.l : .5, typeof e.l == "string" && (r = wm(e.l)), i = FL(t, n, r), o = {
        h: t,
        s: n,
        l: r
    }, {...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl"}
}

function _k(e) {
    return e = parseFloat(e), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e
}

var n1 = e => e instanceof dl;
var VL = (() => eM().EventEmitter)(), AL = class {
    constructor() {
        R(this, "_emitter", new VL)
    }

    eventNames() {
        return this._emitter.eventNames()
    }

    eventListeners() {
        let e = {};
        for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
        return e
    }

    on(e, t) {
        this.addEventListener(e, t, !1, !1, this)
    }

    off(e, t) {
        this.removeEventListeners(e, t)
    }

    once(e, t) {
        this.addEventListener(e, t, !0, !1, this)
    }

    unique(e, t) {
        this.addEventListener(e, t, !1, !0, this)
    }

    addEventListener(e, t, n, r, i) {
        if (r) {
            for (let o of this._emitter.eventNames()) if (t === this._emitter.listeners(o)) return
        }
        n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i)
    }

    removeEventListeners(e, t) {
        e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners()
    }

    removeAllEventListeners() {
        this._emitter.removeAllListeners()
    }

    countEventListeners(e, t) {
        if (e) return this._emitter.listeners(e).length;
        {
            let n = 0;
            for (let r of this._emitter.eventNames()) n += this._emitter.listeners(r).length;
            return n
        }
    }

    emit(e, ...t) {
        this._emitter.emit(e, ...t)
    }
}, DL = {
    addEventListener: () => {
    },
    removeEventListener: () => {
    },
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: {href: ""},
    document: {cookie: ""},
    setTimeout: () => 0,
    clearTimeout: () => {
    },
    setInterval: () => 0,
    clearInterval: () => {
    },
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {
    },
    requestIdleCallback: () => 0,
    getSelection: () => null,
    matchMedia: e => ({
        matches: !1, media: e, onchange: () => {
        }, addEventListener: () => {
        }, removeEventListener: () => {
        }, addListener: () => {
        }, removeListener: () => {
        }, dispatchEvent: () => !1
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, n) {
    }
}, st = typeof P > "u" ? DL : P, zL = e => {
    setTimeout(e, 1 / 60)
}, BL = (() => st.requestAnimationFrame || zL)(), r1 = e => BL(e), va = (() => 1 / 60)(), $L = class extends AL {
    constructor(e = !1) {
        super(), R(this, "_started", !1), R(this, "_frame", 0), R(this, "_frameTasks", []), R(this, "tick", () => {
            this._started && (r1(this.tick), this.emit("update", this._frame, va), this.emit("render", this._frame, va), this._processFrameTasks(), this._frame++)
        }), e && this.start()
    }

    addFrameTask(e) {
        this._frameTasks.push(e)
    }

    _processFrameTasks() {
        var e;
        let t = this._frameTasks, n = t.length;
        if (n !== 0) {
            for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
            t.length = 0
        }
    }

    static set TimeStep(e) {
        va = e
    }

    static get TimeStep() {
        return va
    }

    start() {
        return this._started ? this : (this._frame = 0, this._started = !0, r1(this.tick), this)
    }

    stop() {
        return this._started = !1, this
    }

    get frame() {
        return this._frame
    }

    get time() {
        return this._frame * va
    }
}, Ik = new $L, km = {target: "PREVIEW", zoom: 1};
var he = {
    canvas: "CANVAS",
    export: "EXPORT",
    thumbnail: "THUMBNAIL",
    preview: "PREVIEW",
    current: () => km.target,
    hasRestrictions: () => {
        let e = km.target;
        return e === "CANVAS" || e === "EXPORT"
    }
};
var Yc = e => ({
    correct: (t, {delta: n, treeScale: r}) => {
        if (typeof t == "string" && (t = parseFloat(t)), t === 0) return "0px";
        let i = t;
        return n && r && (i = Math.round(t / n[e].scale / r[e]), i = Math.max(i, 1)), i + "px"
    }
});
hd({borderTopWidth: Yc("y"), borderLeftWidth: Yc("x"), borderRightWidth: Yc("x"), borderBottomWidth: Yc("y")});

function D(e, ...t) {
    var n, r;
    if (e) return;
    let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
    if (i.stack) try {
        let o = i.stack.split(`
`);
        (n = o[1]) != null && n.includes("assert") ? (o.splice(1, 1), i.stack = o.join(`
`)) : (r = o[0]) != null && r.includes("assert") && (o.splice(0, 1), i.stack = o.join(`
`))
    } catch {
    }
    throw i
}

function Se(e, t) {
    throw t || new Error(e ? `Unexpected value: ${e}` : "Application entered invalid state")
}

var Qo = x.createContext({
    getLayoutId: e => null, persistLayoutIdCache: () => {
    }, top: !1, enabled: !0
});

function NL({children: e}) {
    if (A(Qo).top) return C(nt, {children: e});
    let n = V({
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
            count: {byId: {}, byName: {}}
        }), r = V({byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}}),
        i = V(new Set).current, o = Q(({id: l, name: c, duplicatedFrom: u}) => {
            if (!l) return null;
            let f = c ? "byName" : "byId", d = n.current[f][l];
            if (d) return d;
            let m = c || l;
            if (!u && !i.has(m) && (!n.current.byLayoutId[m] || n.current.byLayoutId[m] === m)) return n.current.count[f][m] === void 0 && (n.current.count[f][m] = 0, n.current.byLayoutId[m] = m, r.current[f][l] = m), i.add(m), m;
            let v;
            if (u?.length) for (let S = u.length - 1; S >= 0; S--) {
                let T = u[S];
                D(!!T, "duplicatedId must be defined");
                let E = n.current[f][T], O = n.current.byLastId[T];
                if (O && !v) {
                    let z = n.current.byLayoutId[O], j = !z || z === c;
                    O && !i.has(O) && (!c || j) && (v = [O, T])
                }
                let I = E ? n.current.byLayoutId[E] : void 0, B = !I || I === c;
                if (E && !i.has(E) && (!c || B)) return r.current[f][l] = E, r.current.byLastId[T] = E, i.add(E), E
            }
            let g = n.current.byLastId[l];
            if (g && !i.has(g)) return i.add(g), r.current.byId[l] = g, g;
            if (v) {
                let [S, T] = v;
                return r.current[f][l] = S, r.current.byLastId[T] = S, i.add(S), S
            }
            let b = n.current.byPossibleId[l];
            if (b && !i.has(b)) return i.add(b), r.current.byId[l] = b, b;
            let p = u?.[0], h = c || p || l, y = (n.current.count[f][h] ?? -1) + 1, {layoutId: w, value: k} = jL(h, y, i);
            if (n.current.count[f][h] = k, r.current[f][l] = w, u?.length && !c) {
                let S = u[u.length - 1];
                if (S && (r.current.byLastId[S] = w), u.length > 1) for (let T = 0; T < u.length - 1; T++) {
                    let E = u[T];
                    E !== void 0 && (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = w))
                }
            }
            return r.current.byLayoutId[w] = m, i.add(w), w
        }, []), s = Q(() => {
            n.current = {
                byId: {...n.current.byId, ...r.current.byId},
                byLastId: {...n.current.byLastId, ...r.current.byLastId},
                byPossibleId: {...n.current.byPossibleId, ...r.current.byPossibleId},
                byName: {...n.current.byName, ...r.current.byName},
                byLastName: {...n.current.byLastName, ...r.current.byLastName},
                byLayoutId: {...n.current.byLayoutId, ...r.current.byLayoutId},
                count: {...n.current.count, byName: {}}
            }, r.current = {byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {}}, i.clear()
        }, []), a = V({getLayoutId: o, persistLayoutIdCache: s, top: !0, enabled: !0}).current;
    return C(Qo.Provider, {value: a, children: e})
}

function jL(e, t, n) {
    let r = t, i = r ? `${e}-${r}` : e;
    for (; n.has(i);) r++, i = `${e}-${r}`;
    return {layoutId: i, value: r}
}

function HL({enabled: e = !0, ...t}) {
    let n = A(Qo), r = se(() => ({...n, enabled: e}), [e]);
    return C(Qo.Provider, {...t, value: r})
}

function pt(e) {
    let t = V(null);
    return t.current === null && (t.current = e()), t.current
}

var WL = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%"
}, UL = (() => ({
    ...WL,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5"
}))(), Ok = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px"
}, GL = (() => ({...Ok, fontWeight: 500}))(), qL = (() => ({
    ...Ok,
    whiteSpace: "pre",
    maxHeight: "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
}))();

function fj(e) {
    let {error: t, file: n} = e, r = n ? `Error in ${XL(n)}` : "Error", i = t instanceof Error ? t.message : "" + t;
    return de("div", {
        style: UL,
        children: [C("div", {className: "text", style: GL, children: r}), i && C("div", {
            className: "text",
            style: qL,
            children: i
        })]
    })
}

function XL(e) {
    return e.startsWith("./") ? e.replace("./", "") : e
}

function ne(e) {
    return Number.isFinite(e)
}

function YL(e) {
    return !e || !Object.keys(e).length && e.constructor === Object
}

function iu(e) {
    return typeof e != "string" && typeof e != "number"
}

function ou(e) {
    return e !== null && typeof e < "u" && typeof e != "boolean" && !YL(e)
}

function KL(e) {
    return e * (Math.PI / 180)
}

var En = (() => {
    function e(t, n) {
        return {a: t, b: n}
    }

    return e.offset = (t, n) => {
        let r = un.angleFromX(t.a, t.b), i = KL(r), o = n * Math.sin(i), s = n * Math.cos(i);
        return e({x: t.a.x + o, y: t.a.y - s}, {x: t.b.x + o, y: t.b.y - s})
    }, e.intersection = (t, n, r) => {
        let i = t.a.x, o = t.a.y, s = t.b.x, a = t.b.y, l = n.a.x, c = n.a.y, u = n.b.x, f = n.b.y,
            d = (u - l) * (c - o) - (f - c) * (l - i), m = (u - l) * (a - o) - (f - c) * (s - i),
            v = (s - i) * (c - o) - (a - o) * (l - i);
        if (d === 0 && m === 0 || m === 0) return null;
        let g = d / m, b = v / m;
        return r && (g < 0 || g > 1 || b < 0 || b > 1) ? null : {x: i + g * (s - i), y: o + g * (a - o)}
    }, e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x, i = t.b.y - t.a.y, o = n.b.x - n.a.x, s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI)
    }, e.isOrthogonal = t => t.a.x === t.b.x || t.a.y === t.b.y, e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x, i = t.a.y - t.b.y, o = un(n.x - i, n.y + r);
        return e(o, n)
    }, e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r)
    }, e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t), i = n * r / r;
        return {x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y}
    }, e.distance = t => un.distance(t.a, t.b), e
})(), te = {
    equals: function (e, t) {
        return e === t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
    },
    atOrigin: e => ({...e, x: 0, y: 0}),
    fromTwoPoints: (e, t) => ({
        x: Math.min(e.x, t.x),
        y: Math.min(e.y, t.y),
        width: Math.abs(e.x - t.x),
        height: Math.abs(e.y - t.y)
    }),
    fromRect: e => ({x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top}),
    multiply: (e, t) => ({x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t}),
    divide: (e, t) => te.multiply(e, 1 / t),
    offset: (e, t) => {
        let n = typeof t.x == "number" ? t.x : 0, r = typeof t.y == "number" ? t.y : 0;
        return {...e, x: e.x + n, y: e.y + r}
    },
    inflate: (e, t) => {
        if (t === 0) return e;
        let n = 2 * t;
        return {x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n}
    },
    pixelAligned: e => {
        let t = Math.round(e.x), n = Math.round(e.y), r = Math.round(e.x + e.width), i = Math.round(e.y + e.height),
            o = Math.max(r - t, 0), s = Math.max(i - n, 0);
        return {x: t, y: n, width: o, height: s}
    },
    halfPixelAligned: e => {
        let t = Math.round(e.x * 2) / 2, n = Math.round(e.y * 2) / 2, r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2, o = Math.max(r - t, 1), s = Math.max(i - n, 1);
        return {x: t, y: n, width: o, height: s}
    },
    round: (e, t = 0) => {
        let n = qc(e.x, t), r = qc(e.y, t), i = qc(e.width, t), o = qc(e.height, t);
        return {x: n, y: r, width: i, height: o}
    },
    roundToOutside: e => {
        let t = Math.floor(e.x), n = Math.floor(e.y), r = Math.ceil(e.x + e.width), i = Math.ceil(e.y + e.height),
            o = Math.max(r - t, 0), s = Math.max(i - n, 0);
        return {x: t, y: n, width: o, height: s}
    },
    minX: e => e.x,
    maxX: e => e.x + e.width,
    minY: e => e.y,
    maxY: e => e.y + e.height,
    positions: e => ({
        minX: e.x,
        midX: e.x + e.width / 2,
        maxX: te.maxX(e),
        minY: e.y,
        midY: e.y + e.height / 2,
        maxY: te.maxY(e)
    }),
    center: e => ({x: e.x + e.width / 2, y: e.y + e.height / 2}),
    boundingRectFromPoints: e => {
        let t = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0;
        for (let o = 0; o < e.length; o++) {
            let s = e[o];
            t = Math.min(t, s.x), n = Math.max(n, s.x), r = Math.min(r, s.y), i = Math.max(i, s.y)
        }
        return {x: t, y: r, width: n - t, height: i - r}
    },
    fromPoints: e => {
        let [t, n, r, i] = e, {x: o, y: s} = t, a = un.distance(t, n), l = un.distance(t, i);
        return {x: o, y: s, width: a, height: l}
    },
    merge: (...e) => {
        let t = {x: Math.min(...e.map(te.minX)), y: Math.min(...e.map(te.minY))},
            n = {x: Math.max(...e.map(te.maxX)), y: Math.max(...e.map(te.maxY))};
        return te.fromTwoPoints(t, n)
    },
    intersection: (e, t) => {
        let n = Math.max(e.x, t.x), r = Math.min(e.x + e.width, t.x + t.width), i = Math.max(e.y, t.y),
            o = Math.min(e.y + e.height, t.y + t.height);
        return {x: n, y: i, width: r - n, height: o - i}
    },
    points: e => [{x: te.minX(e), y: te.minY(e)}, {x: te.minX(e), y: te.maxY(e)}, {
        x: te.maxX(e),
        y: te.minY(e)
    }, {x: te.maxX(e), y: te.maxY(e)}],
    pointsAtOrigin: e => [{x: 0, y: 0}, {x: e.width, y: 0}, {x: e.width, y: e.height}, {x: 0, y: e.height}],
    transform: (e, t) => {
        let {x: n, y: r} = t.transformPoint({x: e.x, y: e.y}), {x: i, y: o} = t.transformPoint({
                x: e.x + e.width,
                y: e.y
            }), {x: s, y: a} = t.transformPoint({x: e.x + e.width, y: e.y + e.height}), {
                x: l,
                y: c
            } = t.transformPoint({x: e.x, y: e.y + e.height}), u = Math.min(n, i, s, l), f = Math.max(n, i, s, l) - u,
            d = Math.min(r, o, a, c), m = Math.max(r, o, a, c) - d;
        return {x: u, y: d, width: f, height: m}
    },
    containsPoint: (e, t) => !(t.x < te.minX(e) || t.x > te.maxX(e) || t.y < te.minY(e) || t.y > te.maxY(e) || Number.isNaN(e.x) || Number.isNaN(e.y)),
    containsRect: (e, t) => {
        for (let n of te.points(t)) if (!te.containsPoint(e, n)) return !1;
        return !0
    },
    toCSS: e => ({
        display: "block",
        transform: `translate(${e.x}px, ${e.y}px)`,
        width: `${e.width}px`,
        height: `${e.height}px`
    }),
    inset: (e, t) => ({
        x: e.x + t,
        y: e.y + t,
        width: Math.max(0, e.width - 2 * t),
        height: Math.max(0, e.height - 2 * t)
    }),
    intersects: (e, t) => !(t.x >= te.maxX(e) || te.maxX(t) <= e.x || t.y >= te.maxY(e) || te.maxY(t) <= e.y),
    overlapHorizontally: (e, t) => {
        let n = te.maxX(e), r = te.maxX(t);
        return n > t.x && r > e.x
    },
    overlapVertically: (e, t) => {
        let n = te.maxY(e), r = te.maxY(t);
        return n > t.y && r > e.y
    },
    doesNotIntersect: (e, t) => t.find(n => te.intersects(n, e)) === void 0,
    isEqual: (e, t) => te.equals(e, t),
    cornerPoints: e => {
        let t = e.x, n = e.x + e.width, r = e.y, i = e.y + e.height;
        return [{x: t, y: r}, {x: n, y: r}, {x: n, y: i}, {x: t, y: i}]
    },
    midPoints: e => {
        let t = e.x, n = e.x + e.width / 2, r = e.x + e.width, i = e.y, o = e.y + e.height / 2, s = e.y + e.height;
        return [{x: n, y: i}, {x: r, y: o}, {x: n, y: s}, {x: t, y: o}]
    },
    pointDistance: (e, t) => {
        let n = 0, r = 0;
        return t.x < e.x ? n = e.x - t.x : t.x > te.maxX(e) && (n = t.x - te.maxX(e)), t.y < e.y ? r = e.y - t.y : t.y > te.maxY(e) && (r = t.y - te.maxY(e)), un.distance({
            x: n,
            y: r
        }, {x: 0, y: 0})
    },
    fromAny: (e, t = {x: 0, y: 0, width: 0, height: 0}) => ({
        x: e.x || t.x,
        y: e.y || t.y,
        width: e.width || t.width,
        height: e.height || t.height
    }),
    delta: (e, t) => {
        let n = {x: te.minX(e), y: te.minY(e)}, r = {x: te.minX(t), y: te.minY(t)};
        return {x: n.x - r.x, y: n.y - r.y}
    },
    withMinSize: (e, t) => {
        let {width: n, height: r} = t, i = e.width - n, o = e.height - r;
        return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + o / 2 : e.y
        }
    },
    anyPointsOutsideRect: (e, t) => {
        let n = te.minX(e), r = te.minY(e), i = te.maxX(e), o = te.maxY(e);
        for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;
        return !1
    },
    edges: e => {
        let [t, n, r, i] = te.cornerPoints(e);
        return [En(t, n), En(n, r), En(r, i), En(i, t)]
    },
    rebaseRectOnto: (e, t, n, r) => {
        let i = {...e};
        switch (n) {
            case"bottom":
            case"top":
                switch (r) {
                    case"start":
                        i.x = t.x;
                        break;
                    case"center":
                        i.x = t.x + t.width / 2 - e.width / 2;
                        break;
                    case"end":
                        i.x = t.x + t.width - e.width;
                        break;
                    default:
                        Se(r)
                }
                break;
            case"left":
                i.x = t.x - e.width;
                break;
            case"right":
                i.x = t.x + t.width;
                break;
            default:
                Se(n)
        }
        switch (n) {
            case"left":
            case"right":
                switch (r) {
                    case"start":
                        i.y = t.y;
                        break;
                    case"center":
                        i.y = t.y + t.height / 2 - e.height / 2;
                        break;
                    case"end":
                        i.y = t.y + t.height - e.height;
                        break;
                    default:
                        Se(r)
                }
                break;
            case"top":
                i.y = t.y - e.height;
                break;
            case"bottom":
                i.y = t.y + t.height;
                break;
            default:
                Se(n)
        }
        return i
    }
};
var Mk = {quickfix: e => ((e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null), ne(e.aspectRatio) && (e.left && e.right && (e.widthType = 0), e.top && e.bottom && (e.heightType = 0), e.left && e.right && e.top && e.bottom && (e.bottom = !1), e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)), e.left && e.right && ((e.fixedSize || e.widthType === 2 || ne(e.maxWidth)) && (e.right = !1), e.widthType = 0), e.top && e.bottom && ((e.fixedSize || e.heightType === 2 || ne(e.maxHeight)) && (e.bottom = !1), e.heightType = 0), e)};

function hu(e) {
    if (typeof e == "string") {
        let t = e.trim();
        if (t === "auto") return 2;
        if (t.endsWith("fr")) return 3;
        if (t.endsWith("%")) return 1;
        if (t.endsWith("vw") || t.endsWith("vh")) return 4
    }
    return 0
}

var Lk = {
    fromProperties: e => {
        let {
            left: t,
            right: n,
            top: r,
            bottom: i,
            width: o,
            height: s,
            centerX: a,
            centerY: l,
            aspectRatio: c,
            autoSize: u
        } = e, f = Mk.quickfix({
            left: ne(t) || Bn(t),
            right: ne(n) || Bn(n),
            top: ne(r) || Bn(r),
            bottom: ne(i) || Bn(i),
            widthType: hu(o),
            heightType: hu(s),
            aspectRatio: c || null,
            fixedSize: u === !0
        }), d = null, m = null, v = 0, g = 0;
        if (f.widthType !== 0 && typeof o == "string") {
            let h = parseFloat(o);
            o.endsWith("fr") ? (v = 3, d = h) : o === "auto" ? v = 2 : (v = 1, d = h / 100)
        } else o !== void 0 && typeof o != "string" && (d = ot.getNumber(o));
        if (f.heightType !== 0 && typeof s == "string") {
            let h = parseFloat(s);
            s.endsWith("fr") ? (g = 3, m = h) : s === "auto" ? g = 2 : (g = 1, m = parseFloat(s) / 100)
        } else s !== void 0 && typeof s != "string" && (m = ot.getNumber(s));
        let b = .5, p = .5;
        return a && (b = parseFloat(a) / 100), l && (p = parseFloat(l) / 100), {
            left: f.left ? ot.getNumber(t) : null,
            right: f.right ? ot.getNumber(n) : null,
            top: f.top ? ot.getNumber(r) : null,
            bottom: f.bottom ? ot.getNumber(i) : null,
            widthType: v,
            heightType: g,
            width: d,
            height: m,
            aspectRatio: f.aspectRatio || null,
            centerAnchorX: b,
            centerAnchorY: p
        }
    }, toSize: (e, t, n, r) => {
        let i = null, o = null, s = t?.sizing ? ot.getNumber(t?.sizing.width) : null,
            a = t?.sizing ? ot.getNumber(t?.sizing.height) : null, l = i1(e.left, e.right);
        if (s && ne(l)) i = s - l; else if (n && e.widthType === 2) i = n.width; else if (ne(e.width)) switch (e.widthType) {
            case 0:
                i = e.width;
                break;
            case 3:
                i = r ? r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width * e.width : null;
                break;
            case 1:
            case 4:
                s && (i = s * e.width);
                break;
            case 2:
                break;
            default:
                Se(e.widthType)
        }
        let c = i1(e.top, e.bottom);
        if (a && ne(c)) o = a - c; else if (n && e.heightType === 2) o = n.height; else if (ne(e.height)) switch (e.heightType) {
            case 0:
                o = e.height;
                break;
            case 3:
                o = r ? r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height * e.height : null;
                break;
            case 1:
            case 4:
                a && (o = a * e.height);
                break;
            case 2:
                break;
            default:
                Se(e.heightType)
        }
        return nV(i, o, e, {height: a ?? 0, width: s ?? 0}, t?.viewport)
    }, toRect: (e, t = null, n = null, r = !1, i = null) => {
        let o = e.left || 0, s = e.top || 0, {width: a, height: l} = Lk.toSize(e, t, n, i), c = t?.positioning ?? null,
            u = c ? ot.getNumber(c.width) : null, f = c ? ot.getNumber(c.height) : null;
        e.left !== null ? o = e.left : u && e.right !== null ? o = u - e.right - a : u && (o = e.centerAnchorX * u - a / 2), e.top !== null ? s = e.top : f && e.bottom !== null ? s = f - e.bottom - l : f && (s = e.centerAnchorY * f - l / 2);
        let d = {x: o, y: s, width: a, height: l};
        return r ? te.pixelAligned(d) : d
    }
}, QL = 200, ZL = 200;

function pu(e, t, n, r) {
    if (typeof t == "string") {
        if (t.endsWith("%") && n) switch (e) {
            case"maxWidth":
            case"minWidth":
                return parseFloat(t) / 100 * n.width;
            case"maxHeight":
            case"minHeight":
                return parseFloat(t) / 100 * n.height;
            default:
                break
        }
        if (t.endsWith("vh")) {
            if (!r) return JL(e);
            switch (e) {
                case"maxWidth":
                case"minWidth":
                    return parseFloat(t) / 100 * r.width;
                case"maxHeight":
                case"minHeight":
                    return parseFloat(t) / 100 * r.height;
                default:
                    break
            }
        }
        return parseFloat(t)
    }
    return t
}

function JL(e) {
    switch (e) {
        case"minWidth":
        case"minHeight":
            return Number.NEGATIVE_INFINITY;
        case"maxWidth":
        case"maxHeight":
            return Number.POSITIVE_INFINITY;
        default:
            Se(e, "unknown constraint key")
    }
}

function eV(e, t, n, r) {
    return t.minHeight && (e = Math.max(pu("minHeight", t.minHeight, n, r), e)), t.maxHeight && (e = Math.min(pu("maxHeight", t.maxHeight, n, r), e)), e
}

function tV(e, t, n, r) {
    return t.minWidth && (e = Math.max(pu("minWidth", t.minWidth, n, r), e)), t.maxWidth && (e = Math.min(pu("maxWidth", t.maxWidth, n, r), e)), e
}

function nV(e, t, n, r, i) {
    let o = tV(ne(e) ? e : QL, n, r, i), s = eV(ne(t) ? t : ZL, n, r, i);
    return ne(n.aspectRatio) && n.aspectRatio > 0 && (ne(n.left) && ne(n.right) ? s = o / n.aspectRatio : ne(n.top) && ne(n.bottom) ? o = s * n.aspectRatio : n.widthType !== 0 ? s = o / n.aspectRatio : o = s * n.aspectRatio), {
        width: o,
        height: s
    }
}

function i1(e, t) {
    return !ne(e) || !ne(t) ? null : e + t
}

function rV(e) {
    return typeof e.right == "string" || typeof e.bottom == "string" || typeof e.left == "string" && (!e.center || e.center === "y") || typeof e.top == "string" && (!e.center || e.center === "x")
}

function Ia(e) {
    return !e._constraints || rV(e) ? !1 : e._constraints.enabled
}

function iV(e) {
    let {size: t} = e, {width: n, height: r} = e;
    return ne(t) && (n === void 0 && (n = t), r === void 0 && (r = t)), ne(n) && ne(r) ? {width: n, height: r} : null
}

function oV(e) {
    let t = iV(e);
    if (t === null) return null;
    let {left: n, top: r} = e;
    return ne(n) && ne(r) ? {x: n, y: r, ...t} : null
}

function Ea(e, t, n = !0) {
    if (e.positionFixed || e.positionAbsolute) return null;
    let r = t === 1 || t === 2;
    if (!Ia(e) || r) return oV(e);
    let i = sV(e), o = aV(t), s = o ? {sizing: o, positioning: o, viewport: null} : null;
    return Lk.toRect(i, s, null, n, null)
}

function sV(e) {
    let {left: t, right: n, top: r, bottom: i, center: o, _constraints: s, size: a} = e, {width: l, height: c} = e;
    l === void 0 && (l = a), c === void 0 && (c = a);
    let {aspectRatio: u, autoSize: f} = s, d = Mk.quickfix({
        left: ne(t),
        right: ne(n),
        top: ne(r),
        bottom: ne(i),
        widthType: hu(l),
        heightType: hu(c),
        aspectRatio: u || null,
        fixedSize: f === !0
    }), m = null, v = null, g = 0, b = 0;
    if (d.widthType !== 0 && typeof l == "string") {
        let y = parseFloat(l);
        l.endsWith("fr") ? (g = 3, m = y) : l === "auto" ? g = 2 : (g = 1, m = y / 100)
    } else l !== void 0 && typeof l != "string" && (m = l);
    if (d.heightType !== 0 && typeof c == "string") {
        let y = parseFloat(c);
        c.endsWith("fr") ? (b = 3, v = y) : c === "auto" ? b = 2 : (b = 1, v = parseFloat(c) / 100)
    } else c !== void 0 && typeof c != "string" && (v = c);
    let p = .5, h = .5;
    return (o === !0 || o === "x") && (d.left = !1, typeof t == "string" && (p = parseFloat(t) / 100)), (o === !0 || o === "y") && (d.top = !1, typeof r == "string" && (h = parseFloat(r) / 100)), {
        left: d.left ? t : null,
        right: d.right ? n : null,
        top: d.top ? r : null,
        bottom: d.bottom ? i : null,
        widthType: g,
        heightType: b,
        width: m,
        height: v,
        aspectRatio: d.aspectRatio || null,
        centerAnchorX: p,
        centerAnchorY: h,
        minHeight: e.minHeight,
        maxHeight: e.maxHeight,
        minWidth: e.minWidth,
        maxWidth: e.maxWidth
    }
}

var Vk = x.createContext({parentSize: 0});

function aV(e) {
    return e === 0 || e === 1 || e === 2 ? null : e
}

function Oa() {
    return x.useContext(Vk).parentSize
}

function Ak(e) {
    return typeof e == "object"
}

var lV = e => {
    let t = Oa(), {parentSize: n, children: r} = e, i = x.useMemo(() => ({parentSize: n}), [cV(n), uV(n)]);
    return t === 1 ? r ? C(nt, {children: r}) : null : C(Vk.Provider, {value: i, children: r})
};

function cV(e) {
    return Ak(e) ? e.width : e
}

function uV(e) {
    return Ak(e) ? e.height : e
}

function fV(e, t) {
    return C(lV, {parentSize: t, children: e})
}

function dV(e) {
    let t = Oa();
    return Ea(e, t, !0)
}

function Dk({width: e, height: t}) {
    return e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
}

var hV = (e => (e.Boolean = "boolean", e.Number = "number", e.String = "string", e.RichText = "richtext", e.FusedNumber = "fusednumber", e.Enum = "enum", e.SegmentedEnum = "segmentedenum", e.Color = "color", e.Image = "image", e.ResponsiveImage = "responsiveimage", e.File = "file", e.ComponentInstance = "componentinstance", e.Array = "array", e.EventHandler = "eventhandler", e.Transition = "transition", e.BoxShadow = "boxshadow", e.Link = "link", e.Date = "date", e.Object = "object", e.Font = "font", e.PageScope = "pagescope", e.ScrollSectionRef = "scrollsectionref", e.CustomCursor = "customcursor", e.Border = "border", e.Cursor = "cursor", e.Padding = "padding", e.BorderRadius = "borderradius", e.CollectionReference = "collectionreference", e.MultiCollectionReference = "multicollectionreference", e))(hV || {}),
    Kp;

function pV() {
    if (Kp !== void 0) return Kp;
    let e = document.createElement("div");
    Object.assign(e.style, {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        rowGap: "1px"
    }), e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e);
    let t = e.scrollHeight === 1;
    return e.parentNode && e.parentNode.removeChild(e), Kp = t, t
}

var qi = "flexbox-gap-not-supported", o1 = !1;

function gj() {
    o1 || (o1 = !0, !pV() && document.body.classList.add(qi))
}

var mV = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`, gV = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`, vV = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`, yV = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`, bV = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, xV = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`, wV = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`, SV = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`, kV = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`, CV = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`, TV = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`, RV = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`, EV = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`, FV = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`, PV = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`, _V = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
    IV = ['[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }', RV, TV, mV, gV, vV, yV, bV, xV, wV, SV, kV, CV, EV, FV, PV, _V],
    OV = [`
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `, `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, none));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes, normal);
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `, `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `, `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `, `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `, `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `, `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `, `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `, `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `, `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `, `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `, `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `, `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `, `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `, `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `, `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `, `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `, `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
        }
    `, `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `, `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `, `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `, `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `, `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `, `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `, `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `], MV = new Set, Qp;

function zk(e, t, n = MV) {
    if (!(!e || n.has(e) || typeof document > "u")) {
        if (n.add(e), !t) {
            if (!Qp) {
                let r = document.createElement("style");
                if (r.setAttribute("type", "text/css"), r.setAttribute("data-framer-css", "true"), !document.head) {
                    console.warn("not injecting CSS: the document is missing a <head> element");
                    return
                }
                if (document.head.appendChild(r), r.sheet) Qp = r.sheet; else {
                    console.warn("not injecting CSS: injected <style> element does not have a sheet", r);
                    return
                }
            }
            t = Qp
        }
        try {
            t.insertRule(e, t.cssRules.length)
        } catch {
        }
    }
}

var LV = ["[data-framer-component-type] { position: absolute; }"], VV = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`, AV = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`, DV = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`, zV = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`, BV = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`, $V = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`, NV = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`, jV = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
    HV = ['[data-framer-component-type="Text"] { cursor: inherit; }', "[data-framer-component-text-autosized] * { white-space: pre; }", VV, AV, DV, zV, BV, $V, NV, jV],
    WV = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`, UV = (() => [`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`, `.${qi} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`])(), GV = (() => `
.${qi} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(), qV = (() => `
.${qi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${qi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(), XV = (() => `
.${qi}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${qi}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(), YV = (() => [WV, GV, ...UV, qV, XV])(), KV = [`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`],
    QV = ['[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }', '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }'],
    ZV = ['[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }', '[data-framer-component-type="NativeScroll"] > * { position: relative; }', '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }', '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }', '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }', '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }', '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }', '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }'],
    JV = ['[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }'],
    eA = ['[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }'],
    tA = ['[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }'],
    nA = ['[data-framer-cursor="pointer"] { cursor: pointer; }', '[data-framer-cursor="grab"] { cursor: grab; }', '[data-framer-cursor="grab"]:active { cursor: grabbing; }'],
    rA = ['[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }', "[data-framer-generated] * { pointer-events: unset }"],
    iA = [`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`],
    oA = ['[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }', '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }'],
    Zp = "--framer-will-change-override", sA = "(background: -webkit-named-image(i))",
    aA = "(grid-template-rows: subgrid)",
    lA = e => e ? [`body { ${Zp}: none; }`, `@supports ${sA} and (not ${aA}) { body { ${Zp}: transform; } }`] : [`body { ${Zp}: none; }`],
    cA = e => e ? rA : [], uA = [".svgContainer svg { display: block; }"],
    Bk = e => [...lA(e), ...LV, ...HV, ...OV, ...IV, ...YV, ...KV, ...QV, ...ZV, ...eA, ...JV, ...tA, ...nA, ...cA(e), ...uA, ...iA, ...oA],
    fA = Bk(!1), dA = Bk(!0), s1 = !1;

function Ma() {
    if (s1) return;
    s1 = !0;
    let e = he.current() === he.preview ? dA : fA;
    for (let t of e) zk(t, void 0, void 0)
}

function $n(e) {
    return typeof e == "function"
}

function Wm(e) {
    return typeof e == "boolean"
}

function xe(e) {
    return typeof e == "string"
}

function We(e) {
    return Number.isFinite(e)
}

function Du(e) {
    return Array.isArray(e)
}

function Re(e) {
    return e !== null && typeof e == "object" && !Du(e)
}

function _t(e) {
    return typeof e > "u"
}

function ar(e) {
    return e === null
}

function hA(e) {
    return e == null
}

function $k(e) {
    return e instanceof Date && !Number.isNaN(e.getTime())
}

function Nk(e) {
    return Re(e) && $n(e.return)
}

function pA(e) {
    return Re(e) || $n(e)
}

var a1 = "optional";

function mA(e) {
    return !!e && a1 in e && e[a1] === !0
}

function gA(e) {
    try {
        switch (e.type) {
            case"string":
            case"collectionreference":
            case"multicollectionreference":
            case"color":
            case"date":
            case"link":
            case"boxshadow":
            case"padding":
            case"borderradius":
                return xe(e.defaultValue) ? e.defaultValue : void 0;
            case"boolean":
                return Wm(e.defaultValue) ? e.defaultValue : void 0;
            case"enum":
                return _t(e.defaultValue) ? void 0 : e.options.includes(e.defaultValue) ? e.defaultValue : void 0;
            case"fusednumber":
            case"number":
                return We(e.defaultValue) ? e.defaultValue : void 0;
            case"transition":
                return Re(e.defaultValue) ? e.defaultValue : void 0;
            case"border":
                return Re(e.defaultValue) ? e.defaultValue : void 0;
            case"font":
                return Re(e.defaultValue) ? e.defaultValue : void 0;
            case"object": {
                let t = Re(e.defaultValue) ? e.defaultValue : {};
                return Re(e.controls) && jk(t, e.controls), t
            }
            case"array":
                return Du(e.defaultValue) ? e.defaultValue : void 0;
            case"file":
            case"image":
            case"richtext":
            case"pagescope":
            case"eventhandler":
            case"segmentedenum":
            case"responsiveimage":
            case"componentinstance":
            case"scrollsectionref":
            case"customcursor":
            case"cursor":
                return;
            default:
                return
        }
    } catch {
        return
    }
}

function jk(e, t) {
    for (let n in t) {
        let r = t[n];
        if (!r) continue;
        let i = e[n];
        if (!_t(i) || mA(r)) continue;
        let o = gA(r);
        _t(o) || (e[n] = o)
    }
}

function vA(e) {
    if (Re(e.defaultProps)) return e.defaultProps;
    let t = {};
    return e.defaultProps = t, t
}

function yA(e, t) {
    if (!pA(e)) return;
    let n = vA(e);
    jk(n, t)
}

function vj(e, t) {
    Object.assign(e, {propertyControls: t}), yA(e, t)
}

function bA(e) {
    return e.propertyControls
}

var tt = e => e;

function xA(e) {
    let t = Object.create(Object.prototype);
    return n => (t[n] === void 0 && (t[n] = e(n)), t[n])
}

var wA = /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
    SA = xA(e => wA.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91),
    l1 = e => () => {
        Ra(e)
    }, kA = () => () => {
    }, CA = {
        useImageSource(e) {
            return e.src ?? ""
        }, useImageElement(e, t, n) {
            let r = new Image;
            return r.src = ht.useImageSource(e, t, n), e.srcSet && (r.srcset = e.srcSet), r
        }, canRenderOptimizedCanvasImage() {
            return !1
        }
    }, TA = !1, RA = {
        get(e, t, n) {
            return Reflect.has(e, t) ? Reflect.get(e, t, n) : ["getLogger"].includes(String(t)) ? kA() : l1(TA ? `${String(t)} is not available in this version of Framer.` : `${String(t)} is only available inside of Framer. https://www.framer.com/`)
        }
    }, ht = new Proxy(CA, RA);
var c1 = {position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0}, EA = {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "126px auto",
    backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjEyNiI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0xMjYgMHYyMS41ODRMMjEuNTg0IDEyNkgwdi0xNy41ODVMMTA4LjQxNSAwSDEyNlptMCAxMDguNDE0VjEyNmgtMTcuNTg2TDEyNiAxMDguNDE0Wm0wLTg0djM5LjE3MUw2My41ODUgMTI2SDI0LjQxNEwxMjYgMjQuNDE0Wm0wIDQydjM5LjE3TDEwNS41ODQgMTI2aC0zOS4xN0wxMjYgNjYuNDE0Wk0xMDUuNTg2IDAgMCAxMDUuNTg2VjY2LjQxNUw2Ni40MTUgMGgzOS4xNzFabS00MiAwTDAgNjMuNTg2VjI0LjQxNUwyNC40MTUgMGgzOS4xNzFabS00MiAwTDAgMjEuNTg2VjBoMjEuNTg2WiIvPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhIiBmaWxsPSIjODg4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)",
    opacity: .2
};

function FA(e) {
    switch (e) {
        case"fit":
            return "contain";
        case"stretch":
            return "fill";
        default:
            return "cover"
    }
}

function Hk(e, t) {
    let n = e ?? "center", r = t ?? "center";
    return n === "center" && r === "center" ? "center" : n + " " + r
}

function Um(e) {
    return {
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        objectPosition: Hk(e.positionX, e.positionY),
        objectFit: FA(e.fit)
    }
}

function PA({image: e, containerSize: t, nodeId: n, alt: r, draggable: i}) {
    let o = ht.useImageSource(e, t, n), s = Um(e), a = x.useRef(null);
    return C("img", {
        ref: a,
        decoding: "async",
        fetchpriority: e.fetchPriority,
        loading: e.loading,
        sizes: e.sizes,
        srcSet: e.srcSet,
        src: o,
        alt: r ?? e.alt ?? "",
        style: s,
        draggable: i
    })
}

function _A({image: e, containerSize: t, nodeId: n}) {
    let r = x.useRef(null), i = ht.useImageElement(e, t, n), o = Um(e);
    return x.useLayoutEffect(() => {
        let s = r.current;
        if (s !== null) return s.appendChild(i), () => {
            s.removeChild(i)
        }
    }, [i]), Object.assign(i.style, o), C("div", {ref: r, style: {display: "contents", borderRadius: "inherit"}})
}

function IA({nodeId: e, image: t, containerSize: n}) {
    let r = x.useRef(null), i = ht.useImageSource(t, n, e);
    return x.useLayoutEffect(() => {
        let o = r.current;
        if (o === null) return;
        let s = Um(t);
        ht.renderOptimizedCanvasImage(o, i, s, e)
    }, [e, t, i, n]), C("div", {ref: r, style: {display: "contents", borderRadius: "inherit"}})
}

function Wk({layoutId: e, image: t, ...n}) {
    e && (e = e + "-background");
    let r = {...c1, ...EA}, i = null;
    if (xe(t.src)) if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
        let o = We(t.backgroundSize) ? t.backgroundSize : 1,
            s = {width: Math.round(o * t.pixelWidth), height: Math.round(o * t.pixelHeight)},
            a = ht.useImageSource(t, s);
        r.backgroundImage = `url(${a})`, r.backgroundRepeat = "repeat", r.backgroundPosition = Hk(t.positionX, t.positionY), r.opacity = void 0, r.border = 0, r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`, i = null
    } else he.current() !== he.canvas ? i = C(PA, {image: t, ...n}) : ht.canRenderOptimizedCanvasImage(ht.useImageSource(t)) ? i = C(IA, {image: t, ...n}) : i = C(_A, {image: t, ...n});
    return C(Jt.div, {layoutId: e, style: i ? c1 : r, "data-framer-background-image-wrapper": !0, children: i})
}

var OA = "src", Hi = {
    isImageObject: function (e) {
        return !e || typeof e == "string" ? !1 : OA in e
    }
};

function MA(e, t) {
    let {_forwardedOverrideId: n, _forwardedOverrides: r, id: i} = t, o = n ?? i, s = r && o ? r[o] : void 0;
    return s && typeof s == "string" && (e = {...e, src: s}), e
}

function LA(e) {
    let {background: t, image: n} = e;
    if (n !== void 0 && t && !Hi.isImageObject(t)) return;
    let r = null;
    if (xe(n) ? r = {alt: "", src: n} : r = ot.get(t, null), !!Hi.isImageObject(r)) return MA(r, e)
}

function VA(e, t, n = !0) {
    let {borderWidth: r, borderStyle: i, borderColor: o} = e;
    if (!r) return;
    let s, a, l, c;
    if (typeof r == "number" ? s = a = l = c = r : (s = r.top || 0, a = r.bottom || 0, l = r.left || 0, c = r.right || 0), !(s === 0 && a === 0 && l === 0 && c === 0)) {
        if (n && s === a && s === l && s === c) {
            t.border = `${s}px ${i} ${o}`;
            return
        }
        t.borderStyle = e.borderStyle, t.borderColor = e.borderColor, t.borderTopWidth = `${s}px`, t.borderBottomWidth = `${a}px`, t.borderLeftWidth = `${l}px`, t.borderRightWidth = `${c}px`
    }
}

function AA(e) {
    let t = e.layoutId ? `${e.layoutId}-border` : void 0;
    if (!e.borderWidth) return null;
    let n = {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: "inherit",
        pointerEvents: "none"
    };
    return e.border ? (n.border = e.border, C(Jt.div, {style: n})) : (VA(e, n, !1), C(Jt.div, {
        "data-frame-border": !0,
        style: n,
        layoutId: t
    }))
}

function La(e) {
    return e && e !== "search" && e !== "slot" && e !== "template" ? Jt[e] : Jt.div
}

var DA = pr(Vm(), 1), Fn = typeof Fe < "u" ? Fe : void 0, Lr = () => typeof document == "object";
var zA = () => Fn && /Chrome/u.test(Fn.userAgent) && /Google Inc/u.test(Fn.vendor) && !jA(),
    BA = () => Fn && /Safari/u.test(Fn.userAgent) && /Apple Computer/u.test(Fn.vendor),
    $A = () => Fn && /Firefox\/\d+\.\d+$/u.test(Fn.userAgent), NA = () => Fn && /FramerX/u.test(Fn.userAgent),
    jA = () => Fn && /Edg\//u.test(Fn.userAgent);
var HA = () => DA.default.env.NODE_ENV === "test";
var WA = zA();

function Uk(e) {
    let t = {};
    return !WA || he.current() !== he.canvas || ((e === !0 || e === "x") && (t["data-framer-layout-hint-center-x"] = !0), (e === !0 || e === "y") && (t["data-framer-layout-hint-center-y"] = !0)), t
}

function Gm(e) {
    return e.replace(/^id_/u, "").replace(/\\/gu, "")
}

function UA(e, t) {
    if (!t && (t = e.children, !t)) return {props: e, children: t};
    let n = e._forwardedOverrides;
    return n ? (t = x.Children.map(t, r => x.isValidElement(r) ? x.cloneElement(r, {_forwardedOverrides: n}) : r), {
        props: e,
        children: t
    }) : {props: e, children: t}
}

function zu(e) {
    return (t, n) => e === !0 ? `translate(-50%, -50%) ${n}` : e === "x" ? `translateX(-50%) ${n}` : e === "y" ? `translateY(-50%) ${n}` : n || "none"
}

function Va(e, {specificLayoutId: t, postfix: n} = {}) {
    let {name: r, layoutIdKey: i, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: a} = e, {
        getLayoutId: l,
        enabled: c
    } = A(Qo);
    return se(() => {
        if (!c) return e.layoutId;
        let u = t || e.layoutId;
        if (!u && (a || !i || s)) return;
        let f = u || l({id: i, name: r, duplicatedFrom: o});
        if (f) return n ? `${f}-${n}` : f
    }, [c])
}

var Gk = typeof document < "u" ? Ae : $, es = x.createContext(!1);

function Bu() {
    let [e, t] = x.useState(0);
    return x.useCallback(() => t(n => n + 1), [])
}

var GA = (() => tM().ResizeObserver)();
var qA = class {
    constructor() {
        R(this, "sharedResizeObserver"), R(this, "callbacks", new WeakMap);
        let e = st.ResizeObserver ?? GA;
        this.sharedResizeObserver = new e(this.updateResizedElements.bind(this))
    }

    updateResizedElements(e) {
        for (let t of e) {
            let n = this.callbacks.get(t.target);
            n && n(t.contentRect)
        }
    }

    observeElementWithCallback(e, t) {
        this.sharedResizeObserver.observe(e), this.callbacks.set(e, t)
    }

    unobserve(e) {
        this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e)
    }
}, Kc = (() => Lr() ? new qA : void 0)();

function XA(e) {
    let t = Bu();
    $(() => {
        let n = e?.current;
        if (n) return Kc?.observeElementWithCallback(e.current, t), () => {
            Kc?.unobserve(n)
        }
    }, [e, t])
}

var YA = "data-framer-size-compatibility-wrapper";

function KA(e) {
    return [...e.firstElementChild && e.firstElementChild.hasAttribute(YA) ? e.firstElementChild.children : e.children].filter(qk).map(Xk)
}

function qk(e) {
    return e instanceof HTMLBaseElement || e instanceof HTMLHeadElement || e instanceof HTMLLinkElement || e instanceof HTMLMetaElement || e instanceof HTMLScriptElement || e instanceof HTMLStyleElement || e instanceof HTMLTitleElement ? !1 : e instanceof HTMLElement || e instanceof SVGElement
}

function Xk(e) {
    if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents") return e;
    let t = [...e.children].find(qk);
    return t ? Xk(t) : e
}

function $u(e, t, n = () => [], r = {}) {
    let {id: i, visible: o, _needsMeasure: s} = e, {skipHook: a = !1} = r, l = !!A(es), c = he.current() === he.canvas;
    Gk(() => {
        !c || l || a || t.current && i && o && s && ht.queueMeasureRequest(Gm(i), t.current, n(t.current))
    })
}

function QA(e) {
    let t = e.closest("[data-framer-component-container]");
    t && ht.queueMeasureRequest(Gm(t.id), t, KA(t))
}

var Xi = Object.keys;

function mu(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

var ZA = "equals";

function u1(e) {
    return e === null || !(ZA in e) ? !1 : typeof e.equals == "function"
}

function qm(e, t) {
    return e === t ? !0 : e !== e && t !== t
}

function JA(e, t) {
    let n = e.length;
    if (n !== t.length) return !1;
    for (let r = n; r-- !== 0;) if (!qm(e[r], t[r])) return !1;
    return !0
}

function eD(e, t) {
    let n = e.length;
    if (n !== t.length) return !1;
    for (let r = n; r-- !== 0;) if (!Nu(e[r], t[r], !0)) return !1;
    return !0
}

function tD(e, t) {
    if (e.size !== t.size) return !1;
    for (let [n, r] of e.entries()) if (!qm(r, t.get(n))) return !1;
    return !0
}

function nD(e, t) {
    if (e.size !== t.size) return !1;
    for (let [n, r] of e.entries()) if (!Nu(r, t.get(n), !0)) return !1;
    return !0
}

function rD(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e.keys()) if (!t.has(n)) return !1;
    return !0
}

function iD(e, t) {
    let n = Xi(e);
    if (n.length !== Xi(t).length) return !1;
    for (let r of n) {
        if (!mu(t, r)) return !1;
        if (!(r === "_owner" && mu(e, "$$typeof") && e.$$typeof) && !qm(e[r], t[r])) return !1
    }
    return !0
}

function oD(e, t) {
    let n = Xi(e);
    if (n.length !== Xi(t).length) return !1;
    for (let r of n) {
        if (!mu(t, r)) return !1;
        if (!(r === "_owner" && mu(e, "$$typeof") && e.$$typeof) && !Nu(e[r], t[r], !0)) return !1
    }
    return !0
}

function Nu(e, t, n) {
    if (e === t) return !0;
    if (!e || !t) return e !== e && t !== t;
    let r = typeof e;
    if (r !== typeof t || r !== "object") return !1;
    let o = Array.isArray(e), s = Array.isArray(t);
    if (o && s) return n ? eD(e, t) : JA(e, t);
    if (o !== s) return !1;
    let a = e instanceof Map, l = t instanceof Map;
    if (a && l) return n ? nD(e, t) : tD(e, t);
    if (a !== l) return !1;
    let c = e instanceof Set, u = t instanceof Set;
    if (c && u) return rD(e, t);
    if (c !== u) return !1;
    let f = e instanceof Date, d = t instanceof Date;
    if (f && d) return e.getTime() === t.getTime();
    if (f !== d) return !1;
    let m = e instanceof RegExp, v = t instanceof RegExp;
    return m && v ? e.toString() === t.toString() : m !== v ? !1 : u1(e) && u1(t) ? e.equals(t) : n ? oD(e, t) : iD(e, t)
}

function Xm(e, t, n = !0) {
    try {
        return Nu(e, t, n)
    } catch (r) {
        if (r instanceof Error && /stack|recursion/iu.exec(r.message)) return console.warn("Warning: isEqual does not handle circular references.", r.name, r.message), !1;
        throw r
    }
}

var Yk = "0.000001px", Jp = (() => ` translateZ(${Yk})`)(), Kk = (() => NA() || BA() || HA())();

function sD(e) {
    e.willChange = "transform";
    let t = he.current() === he.canvas;
    Kk && t && (e.translateZ = Yk)
}

function Ym(e) {
    e.willChange = "transform", aD(e, !0)
}

function aD(e, t) {
    let n = he.current() === he.canvas;
    if (!Kk || !n) return;
    let r = xe(e.transform) && e.transform || "";
    t ? r.includes(Jp) || (e.transform = r + Jp) : e.transform = r.replace(Jp, "")
}

function Qk(e, t, n, r = !0) {
    if (!e) return;
    let i = tt(e.style), o = n || i[t], s = () => {
        i[t] = o
    };
    i[t] = null, r ? Promise.resolve().then(s) : setTimeout(s, 0)
}

var su = (() => {
    class e extends Ce {
        constructor() {
            super(...arguments), R(this, "layerElement", null), R(this, "setLayerElement", n => {
                this.layerElement = n
            })
        }

        static applyWillChange(n, r, i) {
            n.willChangeTransform && (i ? sD(r) : Ym(r))
        }

        shouldComponentUpdate(n, r) {
            return n._needsMeasure || this.state !== r || !Xm(this.props, n)
        }

        componentDidUpdate(n) {
            tt(this.props).clip && tt(this.props).radius === 0 && tt(n).radius !== 0 && Qk(this.layerElement, "overflow", "hidden", !1)
        }
    }

    return R(e, "defaultProps", {}), e
})();

function lD(e, t) {
    if (e.size < t) return;
    let r = Math.round(Math.random());
    for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i)
}

function cD(e, t, n, r) {
    let i = t.get(n);
    if (i) return i;
    lD(t, e);
    let o = r(n);
    return t.set(n, o), o
}

var Zk = e => {
    let t = 0, n, r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++) r = e.charCodeAt(n), t = (t << 5) - t + r, t |= 0;
    return t
}, Km = {
    hueRotate: (e, t) => K.toHslString(K.hueRotate(K(e), t)),
    setAlpha: (e, t) => K.toRgbString(K.alpha(K(e), t)),
    getAlpha: e => {
        let t = Hm(e);
        return t ? t.a : 1
    },
    multiplyAlpha: (e, t) => K.toRgbString(K.multiplyAlpha(K(e), t)),
    toHex: e => K.toHexString(K(e)).toUpperCase(),
    toRgb: e => K.toRgb(K(e)),
    toRgbString: e => K.toRgbString(K(e)),
    toHSV: e => K.toHsv(K(e)),
    toHSL: e => K.toHsl(K(e)),
    toHslString: e => K.toHslString(K(e)),
    toHsvString: e => K.toHsvString(K(e)),
    hsvToHSLString: e => K.toHslString(K(Xc(e.h, e.s, e.v, e.a))),
    hsvToHex: e => K.toHexString(K(Xc(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: e => K.toRgbString(K(Xc(e.h, e.s, e.v, e.a))),
    hsvToString: e => Xc(e.h, e.s, e.v),
    rgbaToString: e => K.toRgbString(K(e)),
    rgbToHexString: e => K.toHexString(K(e)),
    hslToString: e => K.toHslString(K(e)),
    hslToRgbString: e => K.toRgbString(K(e)),
    toColorPickerSquare: e => K.toRgbString(K({h: e, s: 1, l: .5, a: 1})),
    isValid: e => K(e).isValid !== !1,
    equals: (e, t) => (typeof e == "string" && (e = K(e)), typeof t == "string" && (t = K(t)), K.equal(e, t)),
    toHexOrRgbaString: e => {
        let t = K(e);
        return t.a !== 1 ? K.toRgbString(t) : K.toHexString(t)
    }
}, uD = /var\(.+\)/u, fD = new Map;

function dD(e, t) {
    let n = [e, t];
    return uD.test(e) ? e : cD(1e3, fD, n, () => Km.multiplyAlpha(e, t))
}

function Aa(e, t = 1) {
    let n;
    return "stops" in e ? n = e.stops : n = [{value: e.start, position: 0}, {
        value: e.end,
        position: 1
    }], t === 1 ? n : n.map(r => ({...r, value: dD(r.value, t)}))
}

function Jk(e, t) {
    let n = 0;
    return Aa(e, t).forEach(r => {
        n ^= Zk(r.value) ^ r.position
    }), n
}

var hD = ["stops"];

function eC(e) {
    return e && hD.every(t => t in e)
}

var pD = ["start", "end"];

function tC(e) {
    return e && pD.every(t => t in e)
}

var mD = ["angle", "alpha"], Fa = {
    isLinearGradient: e => e && mD.every(t => t in e) && (tC(e) || eC(e)),
    hash: e => e.angle ^ Jk(e, e.alpha),
    toCSS: (e, t) => {
        let n = Aa(e, e.alpha), r = t !== void 0 ? t : e.angle, i = n.map(o => `${o.value} ${o.position * 100}%`);
        return `linear-gradient(${r}deg, ${i.join(", ")})`
    }
}, gD = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"], Pa = {
    isRadialGradient: e => e && gD.every(t => t in e) && (tC(e) || eC(e)),
    hash: e => e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Jk(e, e.alpha),
    toCSS: e => {
        let {alpha: t, widthFactor: n, heightFactor: r, centerAnchorX: i, centerAnchorY: o} = e, s = Aa(e, t),
            a = s.map((l, c) => {
                let u = s[c + 1], f = l.position === 1 && u?.position === 1 ? l.position - 1e-4 : l.position;
                return `${l.value} ${f * 100}%`
            });
        return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${o * 100}%, ${a.join(", ")})`
    }
};

function vD({background: e, backgroundColor: t}, n) {
    t ? typeof t == "string" || n1(t) ? n.backgroundColor = t : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e)) : e && (e = ot.get(e, null), typeof e == "string" || n1(e) ? n.background = e : Fa.isLinearGradient(e) ? n.background = Fa.toCSS(e) : Pa.isRadialGradient(e) ? n.background = Pa.toCSS(e) : K.isColorObject(e) && (n.backgroundColor = e.initialValue || K.toRgbString(e)))
}

function be(e, t, n, r) {
    if (r === void 0 && (r = t), e[t] !== void 0) {
        n[r] = e[t];
        return
    }
}

function yD(e) {
    return e ? e.left !== void 0 && e.right !== void 0 : !1
}

function bD(e) {
    return e ? e.top !== void 0 && e.bottom !== void 0 : !1
}

function xD(e) {
    if (!e) return {};
    let t = {};
    return e.preserve3d === !0 ? t.transformStyle = "preserve-3d" : e.preserve3d === !1 && (t.transformStyle = "flat"), e.backfaceVisible === !0 ? t.backfaceVisibility = "visible" : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"), t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility), e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective), e.__fromCanvasComponent || (e.center === !0 ? (t.left = "50%", t.top = "50%") : e.center === "x" ? t.left = "50%" : e.center === "y" && (t.top = "50%")), be(e, "size", t), be(e, "width", t), be(e, "height", t), be(e, "minWidth", t), be(e, "minHeight", t), be(e, "top", t), be(e, "right", t), be(e, "bottom", t), be(e, "left", t), be(e, "position", t), be(e, "overflow", t), be(e, "opacity", t), (!e._border || !e._border.borderWidth) && be(e, "border", t), be(e, "borderRadius", t), be(e, "radius", t, "borderRadius"), be(e, "color", t), be(e, "shadow", t, "boxShadow"), be(e, "x", t), be(e, "y", t), be(e, "z", t), be(e, "rotate", t), be(e, "rotateX", t), be(e, "rotateY", t), be(e, "rotateZ", t), be(e, "scale", t), be(e, "scaleX", t), be(e, "scaleY", t), be(e, "skew", t), be(e, "skewX", t), be(e, "skewY", t), be(e, "originX", t), be(e, "originY", t), be(e, "originZ", t), vD(e, t), t
}

function wD(e) {
    for (let t in e) if (t === "drag" || t.startsWith("while") || typeof tt(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation")) return !0;
    return !1
}

var f1 = ["onClick", "onDoubleClick", "onMouse", "onMouseDown", "onMouseUp", "onTapDown", "onTap", "onTapUp", "onPointer", "onPointerDown", "onPointerUp", "onTouch", "onTouchDown", "onTouchUp"],
    SD = (() => new Set([...f1, ...f1.map(e => `${e}Capture`)]))();

function kD(e) {
    if (e.drag) return "grab";
    for (let t in e) if (SD.has(t)) return "pointer"
}

var em = "overflow";

function CD(e) {
    return d1(e) ? !0 : e.style ? !!d1(e.style) : !1
}

function d1(e) {
    return em in e && (e[em] === "scroll" || e[em] === "auto")
}

function nC(e) {
    let {
        left: t,
        top: n,
        bottom: r,
        right: i,
        width: o,
        height: s,
        center: a,
        _constraints: l,
        size: c,
        widthType: u,
        heightType: f,
        positionFixed: d,
        positionAbsolute: m
    } = e, v = kt(e.minWidth), g = kt(e.minHeight), b = kt(e.maxWidth), p = kt(e.maxHeight);
    return {
        top: kt(n),
        left: kt(t),
        bottom: kt(r),
        right: kt(i),
        width: kt(o),
        height: kt(s),
        size: kt(c),
        center: a,
        _constraints: l,
        widthType: u,
        heightType: f,
        positionFixed: d,
        positionAbsolute: m,
        minWidth: v,
        minHeight: g,
        maxWidth: b,
        maxHeight: p
    }
}

var h1 = {x: 0, y: 0, width: 200, height: 200};

function TD(e) {
    x.useInsertionEffect(() => {
        Ma()
    }, []);
    let t = !!A(es), {style: n, _initialStyle: r, __fromCanvasComponent: i, size: o} = e, s = nC(e), a = dV(s),
        l = {display: "block", flex: n?.flex ?? "0 0 auto", userSelect: he.current() !== he.preview ? "none" : void 0};
    e.__fromCanvasComponent || (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
    let c = !wD(e) && !e.__fromCanvasComponent && !CD(e), u = e.style ? !("pointerEvents" in e.style) : !0;
    c && u && (l.pointerEvents = "none");
    let d = x.Children.count(e.children) > 0 && x.Children.toArray(e.children).every(p => typeof p == "string" || typeof p == "number") && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }, m = xD(e);
    o === void 0 && !i && (yD(m) || (l.width = h1.width), bD(m) || (l.height = h1.height)), s.minWidth !== void 0 && (l.minWidth = s.minWidth), s.minHeight !== void 0 && (l.minHeight = s.minHeight);
    let v = {};
    Ia(s) && a && !Dk(e) && (v = {
        left: a.x,
        top: a.y,
        width: a.width,
        height: a.height,
        right: void 0,
        bottom: void 0
    }), Object.assign(l, d, r, m, v, n), Object.assign(l, {
        overflowX: l.overflowX ?? l.overflow,
        overflowY: l.overflowY ?? l.overflow,
        overflow: void 0
    }), su.applyWillChange(e, l, !0);
    let g = l;
    l.transform || (g = {x: 0, y: 0, ...l});
    let b = he.current() === he.canvas;
    return e.positionSticky ? (!b || t) && (g.position = "sticky", g.willChange = "transform", g.zIndex = 1, g.top = e.positionStickyTop, g.right = e.positionStickyRight, g.bottom = e.positionStickyBottom, g.left = e.positionStickyLeft) : b && (e.positionFixed || e.positionAbsolute) && (g.position = "absolute"), "rotate" in g && g.rotate === void 0 && delete g.rotate, [g, a]
}

var RD = new Set(["width", "height", "opacity", "overflow", "radius", "background", "color", "x", "y", "z", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "skew", "skewX", "skewY", "originX", "originY", "originZ"]);

function ED(e) {
    let t = {};
    for (let n in e) (ao(n) || SA(n)) && !RD.has(n) ? t[n] = tt(e)[n] : (n === "positionTransition" || n === "layoutTransition") && (t.layout = !0, typeof tt(e)[n] != "boolean" && !e.transition && (t.transition = tt(e)[n]));
    return t
}

function FD(e) {
    return "data-framer-name" in e
}

var PD = Ve(function (t, n) {
    let {name: r, center: i, border: o, _border: s, __portal: a} = t, {props: l, children: c} = UA(t), u = ED(l),
        f = Va(t), d = kD(t), m = V(null), v = n ?? m, g = {
            "data-framer-component-type": t.componentType ?? "Frame",
            "data-framer-cursor": d,
            "data-framer-highlight": d === "pointer" ? !0 : void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": tt(t)["data-framer-offset-parent-id"]
        };
    !FD(t) && r && (tt(g)["data-framer-name"] = r);
    let [b, p] = TD(l), h = nC(l), y = Dk(h);
    i && !(p && !y && Ia(h)) ? (u.transformTemplate || (u.transformTemplate = zu(i)), Object.assign(g, Uk(i))) : u.transformTemplate || (u.transformTemplate = void 0), $u(t, v);
    let w = LA(t), k = !!A(es), S = _D(l, h, p, k), T = fV(de(nt, {
        children: [w ? C(Wk, {
            alt: t.alt ?? "",
            image: w,
            containerSize: p ?? void 0,
            nodeId: t.id && Gm(t.id),
            layoutId: f
        }) : null, c, C(AA, {...s, border: o, layoutId: f})]
    }), S), E = La(t.as), {size: O, radius: I, shadow: B} = b;
    return O !== void 0 && (delete b.size, b.height === void 0 && (b.height = O), b.width === void 0 && (b.width = O)), I !== void 0 && (delete b.radius, b.borderRadius = I), B !== void 0 && (delete b.shadow, b.boxShadow = B), de(E, {
        ...g, ...u,
        layoutId: f,
        style: b,
        ref: v,
        children: [T, a]
    })
}), au = Ve(function (t, n) {
    let {visible: r = !0} = t;
    return r ? C(PD, {...t, ref: n}) : null
});

function _D(e, t, n, r) {
    if (r) return n ? {width: n.width, height: n.height} : 1;
    let {_usesDOMRect: i} = e, {widthType: o = 0, heightType: s = 0, width: a, height: l} = t;
    return n && !i ? n : o === 0 && s === 0 && typeof a == "number" && typeof l == "number" ? {
        width: a,
        height: l
    } : i || e.positionFixed || e.positionAbsolute ? 2 : 0
}

var Qm = "__LAYOUT_TREE_ROOT", rC = x.createContext({
    schedulePromoteTree: () => {
    }, scheduleProjectionDidUpdate: () => {
    }, initLead: () => {
    }
}), ID = class extends Ce {
    constructor() {
        super(...arguments), R(this, "shouldAnimate", !1), R(this, "transition"), R(this, "lead"), R(this, "follow"), R(this, "scheduledPromotion", !1), R(this, "scheduledDidUpdate", !1), R(this, "scheduleProjectionDidUpdate", () => {
            this.scheduledDidUpdate = !0
        }), R(this, "schedulePromoteTree", (e, t, n) => {
            this.follow = this.lead, this.shouldAnimate = n, this.lead = e, this.transition = t, this.scheduledPromotion = !0
        }), R(this, "initLead", (e, t) => {
            this.follow = this.lead, this.lead = e, this.follow && t && (this.follow.layoutMaybeMutated = !0)
        }), R(this, "sharedLayoutContext", {
            schedulePromoteTree: this.schedulePromoteTree,
            scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
            initLead: this.initLead
        })
    }

    getSnapshotBeforeUpdate() {
        var e;
        if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
        let t = !!((e = this.lead) != null && e.layoutMaybeMutated) && !this.shouldAnimate;
        return this.lead.projectionNodes.forEach(n => {
            var r;
            n?.promote({
                needsReset: t,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: n.options.layoutId === Qm && !((r = this.follow) != null && r.isExiting)
            })
        }), this.shouldAnimate ? this.follow.layoutMaybeMutated = !0 : this.scheduleProjectionDidUpdate(), this.lead.layoutMaybeMutated = !1, this.transition = void 0, this.scheduledPromotion = !1, null
    }

    componentDidUpdate() {
        var e, t;
        if (!this.lead) return null;
        this.scheduledDidUpdate && ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) == null || t.didUpdate(), this.scheduledDidUpdate = !1)
    }

    render() {
        return C(rC.Provider, {value: this.sharedLayoutContext, children: this.props.children})
    }
}, OD = {width: "100%", height: "100%", backgroundColor: "none"};

function MD(e) {
    return C(Jt.div, {layoutId: Qm, style: OD, children: e.children})
}

function p1(e, t) {
    $n(e) ? e(t) : iC(e) && (e.current = t)
}

function iC(e) {
    return Re(e) && "current" in e
}

function LD() {
    let e = pt(() => new Set), t = pt(() => new Map);
    return pt(() => (n, r) => ({
        get current() {
            return n.current
        }, set current(i) {
            r && r(i), n.current = i;
            let o = i === null;
            e.forEach(s => {
                if (o && t.has(s)) return;
                let a = s(i);
                a && t.set(s, a)
            }), o && (t.forEach(s => s()), t.clear())
        }, observe(i, o = !1) {
            e.has(i) || (e.add(i), !o && n.current && i(n.current))
        }, unobserve(i) {
            i && e.delete(i)
        }, cleanup(i) {
            var o;
            return !i || !t.has(i) ? !1 : ((o = t.get(i)) == null || o(), !0)
        }
    }))
}

function oC(e) {
    let t = V(null), n = LD();
    return pt(() => iC(e) ? n(e) : $n(e) ? n(t, e) : n(t))
}

function Yi(e, t, n) {
    var r;
    let i = V(), o = V();
    if (se(() => {
        o.current !== void 0 && (o.current = !0)
    }, [n]), !e) return;
    let s = o.current;
    if (s) {
        o.current = !1, e.cleanup(i.current) || (r = i.current) == null || r.call(i, null);
        let a = e.current;
        a && t?.(a)
    }
    i.current !== t && (e.unobserve(i.current), i.current = t, e.observe(t, s), o.current === void 0 && (o.current = !1))
}

var VD = class {
    constructor(e) {
        R(this, "sharedIntersectionObserver"), R(this, "callbacks", new WeakMap), document && (this.sharedIntersectionObserver = new IntersectionObserver(this.resizeObserverCallback.bind(this), e))
    }

    resizeObserverCallback(e, t) {
        for (let n of e) {
            let r = this.callbacks.get(n.target);
            r && r([n], t)
        }
    }

    observeElementWithCallback(e, t) {
        this.sharedIntersectionObserver && (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t))
    }

    unobserve(e) {
        this.sharedIntersectionObserver && (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e))
    }

    get root() {
        var e;
        return (e = this.sharedIntersectionObserver) == null ? void 0 : e.root
    }
}, AD = ve(new Map);

function DD(e, t, n) {
    if (typeof IntersectionObserver > "u") return;
    let r = pt(() => `${n.rootMargin}`), i = A(AD), {enabled: o} = n;
    Yi(e, s => {
        var a;
        if (!o || s === null) return;
        let l = i.get(r);
        if (!l || l.root !== ((a = n.root) == null ? void 0 : a.current)) {
            let {root: c, ...u} = n;
            l = new VD({...u, root: c?.current}), i.set(r, l)
        }
        return l.observeElementWithCallback(s, t), () => {
            l?.unobserve(s)
        }
    }, [o])
}

var zD = new Array(100).fill(void 0).map((e, t) => t * .01), BD = x.createContext(null);

function $D(e, t, n) {
    let r = x.useRef({isInView: !1, hasAnimatedOnce: !1}), {
        enabled: i,
        animateOnce: o,
        threshold: s,
        rootMargin: a = "0px 0px 0px 0px"
    } = n, l = x.useCallback(([c]) => {
        if (!c) return;
        let {isInView: u, hasAnimatedOnce: f} = r.current, d = jD(c, s?.y ?? 0);
        if (d && !u) {
            if (o && f) return;
            r.current.hasAnimatedOnce = !0, r.current.isInView = !0, t(!0);
            return
        }
        if (!d && u) {
            if (r.current.isInView = !1, o) return;
            t(!1);
            return
        }
    }, [o, s?.y, t]);
    DD(e, l, {threshold: zD, rootMargin: a, enabled: i ?? !0})
}

function ND(e, t) {
    return t.height === 0 ? 0 : e.height / Math.min(t.height, st.innerHeight)
}

function jD({boundingClientRect: e, intersectionRect: t, isIntersecting: n}, r) {
    return e.height === 0 ? n : n && ND(t, e) >= r
}

var Xj = pr(Lu(), 1);
var Kj = pr(Lu(), 1);
var m1 = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Or = Symbol("private"), tm = (() => {
    function e(t = {}, n = !1, r = !0) {
        let i = {
            [Or]: {
                makeAnimatables: n, observeAnimatables: r, observers: new Fk, reset() {
                    for (let s in o) if (m1(o, s)) {
                        let a = m1(t, s) ? tt(t)[s] : void 0;
                        a !== void 0 ? o[s] = a : delete o[s]
                    }
                }, transactions: new Set
            }
        }, o = new Proxy(i, WD);
        return Object.assign(o, t), o
    }

    return e.resetObject = t => t[Or].reset(), e.addObserver = (t, n) => t[Or].observers.add(n), e
})(), HD = class {
    constructor() {
        R(this, "set", (e, t, n, r) => {
            if (t === Or) return !1;
            let i = e[Or], o, s;
            if (Bn(n) ? (o = n, s = o.get()) : s = n, i.makeAnimatables && typeof n != "function" && typeof n != "object" && !o && (o = ot(n)), i.observeAnimatables && o) {
                let u = i.transactions;
                o.onUpdate({
                    update: (f, d) => {
                        d && u.add(d), i.observers.notify({value: r}, d)
                    }, finish: f => {
                        u.delete(f) && i.observers.finishTransaction(f)
                    }
                })
            }
            let a = !1, l = !0, c = tt(e)[t];
            if (c !== void 0) {
                Bn(c) ? (l = c.get() !== s, c.set(s)) : (l = c !== s, tt(e)[t] = s);
                let u = s !== null && typeof s == "object";
                (Array.isArray(s) || u) && (l = !0), a = !0
            } else o && (n = o), a = Reflect.set(e, t, n);
            return l && i.observers.notify({value: r}), a
        }), R(this, "get", (e, t, n) => {
            if (t === Or) return tt(e)[t];
            let r = Reflect.get(e, t, n);
            return typeof r == "function" ? r.bind(n) : r
        })
    }

    deleteProperty(e, t) {
        let n = Reflect.deleteProperty(e, t);
        return e[Or].observers.notify({value: e}), n
    }

    ownKeys(e) {
        let t = Reflect.ownKeys(e), n = t.indexOf(Or);
        return n !== -1 && t.splice(n, 1), t
    }

    getOwnPropertyDescriptor(e, t) {
        if (t !== Or) return Reflect.getOwnPropertyDescriptor(e, t)
    }
}, WD = new HD;
var UD = "opacity";

function GD(e) {
    return UD in e
}

function qD(e, t) {
    if (!GD(e)) return;
    let n = ot.getNumber(e.opacity);
    n !== 1 && (t.opacity = n)
}

function XD(e) {
    let t = [];
    if (e && e.length) {
        let n = e.map(r => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`);
        t.push(...n)
    }
    return t
}

function sC(e, t) {
    if (!e.shadows || e.shadows.length === 0) return;
    let n = e.shadows.map(r => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`).join(", ");
    n && (t.textShadow = n)
}

function YD(e, t) {
    let n = [];
    ne(e.brightness) && n.push(`brightness(${e.brightness / 100})`), ne(e.contrast) && n.push(`contrast(${e.contrast / 100})`), ne(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`), ne(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`), ne(e.invert) && n.push(`invert(${e.invert / 100})`), ne(e.saturate) && n.push(`saturate(${e.saturate / 100})`), ne(e.sepia) && n.push(`sepia(${e.sepia / 100})`), ne(e.blur) && n.push(`blur(${e.blur}px)`), e.dropShadows && n.push(...XD(e.dropShadows)), n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "))
}

function KD(e, t) {
    ne(e.backgroundBlur) && (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`)
}

function Zm(e, t) {
    KD(e, t), YD(e, t)
}

var QD = class extends Ce {
    constructor() {
        super(...arguments), R(this, "layoutMaybeMutated"), R(this, "projectionNodes", new Map), R(this, "rootProjectionNode"), R(this, "isExiting"), R(this, "shouldPreserveFollowOpacity", e => e.options.layoutId === Qm && !this.props.isExiting), R(this, "switchLayoutGroupContext", {
            register: e => this.addChild(e),
            deregister: e => this.removeChild(e),
            transition: this.props.isLead !== void 0 && this.props.animatesLayout ? this.props.transition : void 0,
            shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity
        })
    }

    componentDidMount() {
        this.props.isLead && this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout)
    }

    shouldComponentUpdate(e) {
        let {isLead: t, isExiting: n, isOverlayed: r, animatesLayout: i, transition: o, sharedLayoutContext: s} = e;
        if (this.isExiting = n, t === void 0) return !0;
        let a = !this.props.isLead && !!t, l = this.props.isExiting && !n, c = a || l, u = !!this.props.isLead && !t,
            f = this.props.isOverlayed !== r;
        return (c || u) && this.projectionNodes.forEach(d => d?.willUpdate()), c ? s.schedulePromoteTree(this, o, !!i) : f && s.scheduleProjectionDidUpdate(), !!c && !!i
    }

    addChild(e) {
        let t = e.options.layoutId;
        t && (this.projectionNodes.set(t, e), this.setRootChild(e))
    }

    setRootChild(e) {
        if (!this.rootProjectionNode) return this.rootProjectionNode = e;
        this.rootProjectionNode = this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e
    }

    removeChild(e) {
        let t = e.options.layoutId;
        t && this.projectionNodes.delete(t)
    }

    render() {
        return C(yl.Provider, {value: this.switchLayoutGroupContext, children: this.props.children})
    }
}, ZD = e => {
    let t = x.useContext(rC);
    return C(QD, {...e, sharedLayoutContext: t})
}, aC = x.createContext(!0);

function aH() {
    return A(aC)
}

function JD() {
    return new Map
}

function e3() {
    return pt(JD)
}

var lC = ve({
    register: () => {
    }, deregister: () => {
    }
}), t3 = ({isCurrent: e, isOverlayed: t, children: n}) => {
    let r = e3(), i = Q(a => {
        if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return
        }
        r.set(a, void 0)
    }, [r]), o = Q(a => {
        let l = r.get(a);
        l?.(), r.delete(a)
    }, [r]), s = V({register: i, deregister: o}).current;
    return $(() => (r.forEach((a, l) => {
        let c = l(e, t);
        r.set(l, $n(c) ? c : void 0)
    }), () => {
        r.forEach((a, l) => {
            a && (a(), r.set(l, void 0))
        })
    }), [e, t, r]), C(lC.Provider, {value: s, children: n})
};

function cC(e, t = []) {
    let {register: n, deregister: r} = A(lC);
    $(() => {
        if (e) return n(e), () => r(e)
    }, [n, r, ...t])
}

var nm = x.memo(function ({
                              isLayeredContainer: t,
                              isCurrent: n,
                              isPrevious: r,
                              isOverlayed: i = !1,
                              visible: o,
                              transitionProps: s,
                              children: a,
                              backdropColor: l,
                              onTapBackdrop: c,
                              backfaceVisible: u,
                              exitBackfaceVisible: f,
                              animation: d,
                              exitAnimation: m,
                              instant: v,
                              initialProps: g,
                              exitProps: b,
                              position: p = {top: 0, right: 0, bottom: 0, left: 0},
                              withMagicMotion: h,
                              index: y,
                              areMagicMotionLayersPresent: w,
                              id: k,
                              isInitial: S
                          }) {
    let T = tb(), E = A(ho), {persistLayoutIdCache: O} = A(Qo),
        I = V({wasCurrent: void 0, wasPrevious: !1, wasBeingRemoved: !1, wasReset: !0, origins: g1({}, g, s)}),
        B = V(null), z = E !== null && !E.isPresent;
    n && I.current.wasCurrent === void 0 && O(), $(() => {
        if (t || !T) return;
        if (z) {
            I.current = {...I.current, wasBeingRemoved: z};
            return
        }
        let {wasPrevious: ae, wasCurrent: X} = I.current, Ye = n && !X || !z && I.current.wasBeingRemoved && n,
            ke = r && !ae, Ke = g1(I.current.origins, g, s), Ee = I.current.wasReset;
        Ye || ke ? (T.stop(), T.start({zIndex: y, ...Ke, ...s}), Ee = !1) : Ee === !1 && (T.stop(), T.set({
            zIndex: y, ...Wi,
            opacity: 0
        }), Ee = !0), I.current = {wasCurrent: !!n, wasPrevious: !!r, wasBeingRemoved: !1, wasReset: Ee, origins: Ke}
    }, [n, r, z]);
    let j = v ? {type: !1} : "velocity" in d ? {...d, velocity: 0} : d, J = v ? {type: !1} : m || d, H = {...p};
    (H.left === void 0 || H.right === void 0) && (H.width = "auto"), (H.top === void 0 || H.bottom === void 0) && (H.height = "auto");
    let ie = (v1(s) || v1(g)) && (t || n || r) ? 1200 : void 0, q = {...Wi, ...I.current.origins}, re = t ? {
        initial: {...q, ...g},
        animate: {...q, ...s, transition: j},
        exit: {...q, ...b, transition: d}
    } : {animate: T, exit: {...q, ...b, transition: J}}, W = !(z || w === !1), pe = !!n && W;
    return de(au, {
        "data-framer-component-type": "NavigationContainerWrapper",
        width: "100%",
        height: "100%",
        style: {
            position: "absolute",
            transformStyle: "flat",
            backgroundColor: "transparent",
            overflow: "hidden",
            zIndex: t || z || n && h ? y : void 0,
            pointerEvents: void 0,
            visibility: o ? "visible" : "hidden",
            perspective: ie
        },
        children: [t && C(au, {
            width: "100%",
            height: "100%",
            "data-framer-component-type": "NavigationContainerBackdrop",
            transition: d,
            initial: {opacity: v && o ? 1 : 0},
            animate: {opacity: 1},
            exit: {opacity: 0},
            backgroundColor: l || "transparent",
            onTap: z ? void 0 : c
        }), C(au, {
            ...H, ...re,
            transition: {default: j, originX: {type: !1}, originY: {type: !1}, originZ: {type: !1}},
            backgroundColor: "transparent",
            backfaceVisible: z ? f : u,
            "data-framer-component-type": "NavigationContainer",
            "data-framer-is-current-navigation-target": !!n,
            style: {pointerEvents: void 0, opacity: n && S || t || n && h ? 1 : 0},
            "data-is-present": W ? void 0 : !1,
            ref: B,
            children: C(BD.Provider, {
                value: B,
                children: C(aC.Provider, {
                    value: pe,
                    children: C(t3, {
                        isCurrent: pe,
                        isOverlayed: i,
                        children: C(ZD, {
                            isLead: n,
                            animatesLayout: !!h,
                            transition: j,
                            isExiting: !W,
                            isOverlayed: i,
                            id: k,
                            children: a
                        })
                    })
                })
            })
        })]
    })
}, n3);

function n3(e, t) {
    return !(t.isCurrent === void 0 || e.isCurrent !== t.isCurrent || e.isPrevious !== t.isPrevious || t.isCurrent && e.isOverlayed !== t.isOverlayed)
}

function g1(e, t, n) {
    let r = {...e};
    return t && (ne(t.originX) && (r.originX = t.originX), ne(t.originY) && (r.originY = t.originY), ne(t.originZ) && (r.originZ = t.originZ)), n && (ne(n.originX) && (r.originX = n.originX), ne(n.originY) && (r.originY = n.originY), ne(n.originZ) && (r.originZ = n.originZ)), r
}

function v1(e) {
    var t, n, r;
    if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
    let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
        s = ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 || ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 || ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
    return o || s
}

var Wi = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: .5,
    originY: .5,
    originZ: 0,
    opacity: 1
}, r3 = class {
    constructor() {
        R(this, "warning", () => {
            Ra("The Navigator API is only available inside of Framer: https://www.framer.com/")
        }), R(this, "goBack", () => this.warning()), R(this, "instant", () => this.warning()), R(this, "fade", () => this.warning()), R(this, "push", () => this.warning()), R(this, "modal", () => this.warning()), R(this, "overlay", () => this.warning()), R(this, "flip", () => this.warning()), R(this, "customTransition", () => this.warning()), R(this, "magicMotion", () => this.warning())
    }
}, i3 = new r3, o3 = ve(i3), dt = {
    Fade: {exit: {opacity: 0}, enter: {opacity: 0}},
    PushLeft: {exit: {x: "-30%"}, enter: {x: "100%"}},
    PushRight: {exit: {x: "30%"}, enter: {x: "-100%"}},
    PushUp: {exit: {y: "-30%"}, enter: {y: "100%"}},
    PushDown: {exit: {y: "30%"}, enter: {y: "-100%"}},
    Instant: {animation: {type: !1}, enter: {opacity: 0}},
    Modal: {overCurrentContext: !0, goBackOnTapOutside: !0, position: {center: !0}, enter: {opacity: 0, scale: 1.2}},
    OverlayLeft: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {right: 0, top: 0, bottom: 0},
        enter: {x: "100%"}
    },
    OverlayRight: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {left: 0, top: 0, bottom: 0},
        enter: {x: "-100%"}
    },
    OverlayUp: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {bottom: 0, left: 0, right: 0},
        enter: {y: "100%"}
    },
    OverlayDown: {
        overCurrentContext: !0,
        goBackOnTapOutside: !0,
        position: {top: 0, left: 0, right: 0},
        enter: {y: "-100%"}
    },
    FlipLeft: {backfaceVisible: !1, exit: {rotateY: -180}, enter: {rotateY: 180}},
    FlipRight: {backfaceVisible: !1, exit: {rotateY: 180}, enter: {rotateY: -180}},
    FlipUp: {backfaceVisible: !1, exit: {rotateX: 180}, enter: {rotateX: -180}},
    FlipDown: {backfaceVisible: !1, exit: {rotateX: -180}, enter: {rotateX: 180}},
    MagicMotion: {withMagicMotion: !0}
};

function s3(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "right") {
        case"right":
            return dt.PushLeft;
        case"left":
            return dt.PushRight;
        case"bottom":
            return dt.PushUp;
        case"top":
            return dt.PushDown
    }
}

function a3(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
        case"right":
            return dt.OverlayLeft;
        case"left":
            return dt.OverlayRight;
        case"bottom":
            return dt.OverlayUp;
        case"top":
            return dt.OverlayDown
    }
}

function l3(e) {
    switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
        case"right":
            return dt.FlipLeft;
        case"left":
            return dt.FlipRight;
        case"bottom":
            return dt.FlipUp;
        case"top":
            return dt.FlipDown
    }
}

var c3 = () => ({
    current: -1,
    previous: -1,
    currentOverlay: -1,
    previousOverlay: -1,
    visualIndex: 0,
    overlayItemId: 0,
    historyItemId: 0,
    history: [],
    overlayStack: [],
    containers: {},
    containerIndex: {},
    containerVisualIndex: {},
    containerIsRemoved: {},
    transitionForContainer: {},
    previousTransition: null
});

function y1(e, t) {
    switch (t.type) {
        case"addOverlay":
            return f3(e, t.transition, t.component);
        case"removeOverlay":
            return d3(e);
        case"add":
            return uC(e, t.key, t.transition, t.component);
        case"remove":
            return fC(e);
        case"update":
            return u3(e, t.key, t.component);
        case"back":
            return h3(e);
        case"forward":
            return p3(e);
        default:
            return
    }
}

function u3(e, t, n) {
    return {...e, containers: {...e.containers, [t]: n}}
}

function f3(e, t, n) {
    let r = e.overlayStack[e.currentOverlay];
    if (r && r.component === n) return;
    let i = e.overlayItemId + 1, o = [...e.overlayStack, {key: `stack-${i}`, component: n, transition: t}];
    return {
        ...e,
        overlayStack: o,
        overlayItemId: i,
        currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
        previousOverlay: e.currentOverlay
    }
}

function d3(e) {
    return {...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay}
}

function uC(e, t, n, r) {
    e.containers[t] || (e.containers[t] = r), e.history = e.history.slice(0, e.current + 1), e.visualIndex = Math.max(e.history.length, 0);
    let i = e.history[e.history.length - 1], o = i && i.key === t;
    if (e.overlayStack = [], o && e.currentOverlay > -1) return {
        ...e,
        currentOverlay: -1,
        previousOverlay: e.currentOverlay
    };
    if (o) return;
    let s = e.containerVisualIndex[t], a = e.containerIsRemoved[t],
        l = i?.key && n.withMagicMotion ? y3(t, s, a, e.history) : !0;
    e.history.push({key: t, transition: n, visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t]});
    let c = e.current + 1, u = e.current;
    for (let v in e.containerIndex) e.containerIndex[v] === c && (e.containerIndex[v] = v3(v, e.history));
    e.containerIndex[t] = c;
    let {containerVisualIndex: f, containerIsRemoved: d} = m3(e, t, l),
        m = dC(c, u, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: c,
        previous: u,
        containerVisualIndex: f,
        containerIsRemoved: d,
        transitionForContainer: m,
        previousTransition: null,
        currentOverlay: -1,
        historyItemId: e.historyItemId + 1,
        previousOverlay: e.currentOverlay
    }
}

function h3(e) {
    let t = {...e.containers}, n = fC(e);
    if (n) return n.containers = t, n
}

function p3(e) {
    let t = e.history[e.current + 1];
    if (!t) return;
    let {key: n, transition: r, component: i} = t, o = [...e.history], s = uC(e, n, r, i);
    if (s) return s.history = o, s
}

function fC(e) {
    let t = [...e.history.slice(0, e.current + 1)];
    if (t.length === 1) return;
    let n = t.pop();
    if (!n) return;
    let r = t[t.length - 1];
    D(r, "The navigation history must have at least one component"), e.containerIndex[r.key] = t.length - 1, t.every(d => d.key !== n.key) && delete e.containers[n.key];
    let o = e.current - 1, s = e.current, {
        containerIsRemoved: a,
        containerVisualIndex: l,
        previousTransition: c,
        visualIndex: u
    } = g3(e, r, n), f = dC(o, s, e.history, e.containerIndex, e.transitionForContainer);
    return {
        ...e,
        current: o,
        previous: s,
        containerIsRemoved: a,
        containerVisualIndex: l,
        previousTransition: c,
        visualIndex: u,
        transitionForContainer: f
    }
}

function m3(e, t, n) {
    let r = {containerVisualIndex: {...e.containerVisualIndex}, containerIsRemoved: {...e.containerIsRemoved}};
    if (n) r.containerVisualIndex[t] = e.history.length - 1, r.containerIsRemoved[t] = !1; else {
        let i = e.containerVisualIndex[t];
        for (let [o, s] of Object.entries(e.containerVisualIndex)) i !== void 0 && s > i && (r.containerIsRemoved[o] = !0)
    }
    return r
}

function g3(e, t, n) {
    let r = [t.key, n.key], i = e.history[e.history.length - 2],
        o = e.previousTransition === null ? null : {...e.previousTransition}, s = {
            containerIsRemoved: {...e.containerIsRemoved},
            containerVisualIndex: {...e.containerVisualIndex},
            previousTransition: o,
            visualIndex: e.visualIndex
        };
    i && r.push(i.key);
    let a = e.containerVisualIndex[t.key], l = e.containerVisualIndex[n.key],
        c = a !== void 0 && l !== void 0 && a <= l || t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1,
        u = t.visualIndex;
    return c ? (s.containerIsRemoved[n.key] = !0, s.containerVisualIndex[t.key] = u !== void 0 ? u : e.history.length - 1) : (s.visualIndex = e.visualIndex + 1, s.containerVisualIndex[t.key] = e.visualIndex + 1), n.transition.withMagicMotion && (s.previousTransition = n.transition || null), e.containerIsRemoved[t.key] = !1, s
}

function v3(e, t) {
    var n;
    for (let r = t.length; r > t.length; r--) if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
    return -1
}

function dC(e, t, n, r, i) {
    let o = {...i};
    for (let [s, a] of Object.entries(r)) {
        let l = b3(a, {current: e, previous: t, history: n});
        l && (o[s] = l)
    }
    return o
}

function y3(e, t, n, r) {
    return n || t === void 0 ? !0 : t === 0 ? !1 : r.slice(t, r.length).findIndex(s => s.key === e) > -1 ? !0 : !(r.slice(0, t - 1).findIndex(s => s.key === e) > -1)
}

function b3(e, t) {
    let {current: n, previous: r, history: i} = t;
    if (!(e !== n && e !== r)) {
        if (e === n && n > r) {
            let o = i[e];
            return Qc("enter", o?.transition.enter, o?.transition.animation)
        }
        if (e === r && n > r) {
            let o = i[e + 1];
            return Qc("exit", o?.transition.exit, o?.transition.animation)
        }
        if (e === n && n < r) {
            let o = i[e + 1];
            return Qc("enter", o?.transition.exit, o?.transition.animation)
        }
        if (e === r && n < r) {
            let o = i[e];
            return Qc("exit", o?.transition.enter, o?.transition.animation)
        }
    }
}

var x3 = Xi(Wi);

function Qc(e, t, n) {
    let r = {}, i = {};
    return x3.forEach(o => {
        r[o] = Wi[o], i[o] = {...n, from: Wi[o]}
    }), t && Object.keys(t).forEach(o => {
        if (t[o] === void 0) return;
        let s = t[o], a = typeof t[o] == "string" ? `${tt(Wi)[o]}%` : tt(Wi)[o];
        tt(r)[o] = e === "enter" ? a : s, i[o] = {...n, from: e === "enter" ? s : a, velocity: 0}
    }), {...r, transition: {...i}}
}

var w3 = x.createContext(void 0);
var hC = x.createContext(void 0), S3 = (() => {
    var e, t, n, r, i, o, s, a, l;
    return t = class extends Ce {
        constructor(c) {
            var u;
            super(c), Kt(this, n), Kt(this, i), Kt(this, a), Kt(this, e, null), R(this, "state", c3()), Kt(this, s, b => {
                if (!this.props.enabled && this.state.history.length > 0) return;
                let p = y1(this.state, b);
                if (!p) return;
                let {skipLayoutAnimation: h} = this.props, y = p.history[p.current],
                    w = b.type === "add" && b.transition.withMagicMotion || b.type === "forward" && y?.transition.withMagicMotion || b.type === "remove" && !!p.previousTransition,
                    k = () => {
                        var S;
                        this.setState(p), y?.key && ((S = this.context) == null || S.call(this, y.key))
                    };
                h && !w ? h(k) : k()
            }), R(this, "goBack", () => {
                var b;
                if (!$t(this, i, o).call(this)) return qu(this, e, ((b = globalThis.event) == null ? void 0 : b.timeStamp) || null), this.state.currentOverlay !== -1 ? fe(this, s).call(this, {type: "removeOverlay"}) : fe(this, s).call(this, {type: "remove"})
            });
            let f = this.props.children;
            if (!f || !ou(f) || !iu(f)) return;
            let d = {...dt.Instant}, v = {
                type: "add",
                key: ((u = f.key) == null ? void 0 : u.toString()) || `stack-${this.state.historyItemId + 1}`,
                transition: d,
                component: f
            }, g = y1(this.state, v);
            g && (this.state = g)
        }

        componentDidMount() {
            var c;
            let u = this.state.history[this.state.current];
            u && ((c = this.context) == null || c.call(this, u.key))
        }

        UNSAFE_componentWillReceiveProps(c) {
            var u;
            let f = c.children;
            if (!ou(f) || !iu(f)) return;
            let d = (u = f.key) == null ? void 0 : u.toString();
            d && (this.state.history.length === 0 ? $t(this, a, l).call(this, f, dt.Instant) : fe(this, s).call(this, {
                type: "update",
                key: d,
                component: f
            }))
        }

        componentWillUnmount() {
            var c, u;
            (u = (c = this.props).resetProjection) == null || u.call(c)
        }

        instant(c) {
            $t(this, a, l).call(this, c, dt.Instant, void 0)
        }

        fade(c, u) {
            $t(this, a, l).call(this, c, dt.Fade, u)
        }

        push(c, u) {
            $t(this, a, l).call(this, c, s3(u), u)
        }

        modal(c, u) {
            $t(this, a, l).call(this, c, dt.Modal, u)
        }

        overlay(c, u) {
            $t(this, a, l).call(this, c, a3(u), u)
        }

        flip(c, u) {
            $t(this, a, l).call(this, c, l3(u), u)
        }

        magicMotion(c, u) {
            $t(this, a, l).call(this, c, dt.MagicMotion, u)
        }

        customTransition(c, u) {
            $t(this, a, l).call(this, c, u)
        }

        render() {
            var c, u, f, d, m;
            let v = $t(this, n, r).call(this, {overCurrentContext: !1}),
                g = $t(this, n, r).call(this, {overCurrentContext: !0}), b = k3(g), p = g.current > -1,
                h = this.state.history.length === 1, y = [];
            for (let [k, S] of Object.entries(this.state.containers)) {
                let T = this.state.containerIndex[k];
                D(T !== void 0, "Container's index must be registered");
                let E = this.state.containerVisualIndex[k];
                D(E !== void 0, "Container's visual index must be registered");
                let O = this.state.containerIsRemoved[k], I = this.state.history[T],
                    B = this.state.transitionForContainer[k], z = T === this.state.current,
                    j = T === this.state.previous, J = z ? !1 : O,
                    H = ((c = I?.transition) == null ? void 0 : c.withMagicMotion) || z && !!this.state.previousTransition;
                y.push(C(nm, {
                    id: k,
                    index: E,
                    isInitial: h,
                    isCurrent: z,
                    isPrevious: j,
                    isOverlayed: p,
                    visible: z || j,
                    position: (u = I?.transition) == null ? void 0 : u.position,
                    instant: x1(T, v),
                    transitionProps: B,
                    animation: b1(T, v),
                    backfaceVisible: _3(T, v),
                    exitAnimation: (f = I?.transition) == null ? void 0 : f.animation,
                    exitBackfaceVisible: (d = I?.transition) == null ? void 0 : d.backfaceVisible,
                    exitProps: (m = I?.transition) == null ? void 0 : m.enter,
                    withMagicMotion: H,
                    areMagicMotionLayersPresent: J ? !1 : void 0,
                    children: C(MD, {children: w1({component: S, transition: I?.transition})})
                }, k))
            }
            let w = this.state.overlayStack.map((k, S) => C(nm, {
                isLayeredContainer: !0,
                isCurrent: S === this.state.currentOverlay,
                position: k.transition.position,
                initialProps: P3(S, g),
                transitionProps: I3(S, g),
                instant: x1(S, g, !0),
                animation: b1(S, g),
                exitProps: k.transition.enter,
                visible: O3(S, g),
                backdropColor: E3(k.transition),
                backfaceVisible: F3(S, g),
                onTapBackdrop: M3(k.transition, this.goBack),
                index: this.state.current + 1 + S,
                children: w1({component: k.component, transition: k.transition})
            }, k.key));
            return C(au, {
                "data-framer-component-type": "NavigationRoot",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "relative",
                style: {overflow: "hidden", backgroundColor: "unset", pointerEvents: void 0, ...this.props.style},
                children: C(o3.Provider, {
                    value: this,
                    children: de(hC.Provider, {
                        value: h,
                        children: [C(nm, {
                            isLayeredContainer: !0,
                            position: void 0,
                            initialProps: {},
                            instant: !1,
                            transitionProps: C3(b),
                            animation: T3(b),
                            backfaceVisible: R3(b),
                            visible: !0,
                            backdropColor: void 0,
                            onTapBackdrop: void 0,
                            index: 0,
                            children: C(NL, {
                                children: C(ID, {
                                    children: C(Td, {
                                        presenceAffectsLayout: !1,
                                        children: y
                                    })
                                })
                            })
                        }), C(Td, {children: w})]
                    })
                })
            })
        }
    }, e = new WeakMap, n = new WeakSet, r = function (c) {
        let {current: u, previous: f, currentOverlay: d, previousOverlay: m} = this.state;
        return c.overCurrentContext ? {current: d, previous: m, history: this.state.overlayStack} : {
            current: u,
            previous: f,
            history: this.state.history
        }
    }, i = new WeakSet, o = function () {
        return globalThis.event ? fe(this, e) === globalThis.event.timeStamp : !1
    }, s = new WeakMap, a = new WeakSet, l = function (c, u, f) {
        var d, m;
        if ($t(this, i, o).call(this) || (qu(this, e, ((d = globalThis.event) == null ? void 0 : d.timeStamp) || null), !c || !ou(c) || !iu(c))) return;
        let v = {...u, ...f};
        if (!!v.overCurrentContext) return fe(this, s).call(this, {type: "addOverlay", transition: v, component: c});
        let b = ((m = c.key) == null ? void 0 : m.toString()) || `stack-${this.state.historyItemId + 1}`;
        fe(this, s).call(this, {type: "add", key: b, transition: v, component: c})
    }, R(t, "defaultProps", {enabled: !0}), R(t, "contextType", w3), t
})(), pC = {stiffness: 500, damping: 50, restDelta: 1, type: "spring"};

function k3(e) {
    let t, n;
    return e.current !== -1 ? t = e.history[e.current] : n = e.history[e.previous], {
        currentOverlayItem: t,
        previousOverlayItem: n
    }
}

function C3({currentOverlayItem: e}) {
    return e && e.transition.exit
}

function T3({currentOverlayItem: e, previousOverlayItem: t}) {
    return e && e.transition.animation ? e.transition.animation : t && t.transition.animation ? t.transition.animation : pC
}

function R3({currentOverlayItem: e, previousOverlayItem: t}) {
    return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible
}

function E3(e) {
    if (e.backdropColor) return e.backdropColor;
    if (e.overCurrentContext) return "rgba(4,4,15,.4)"
}

function F3(e, t) {
    let {current: n, history: r} = t;
    if (e === n) {
        let i = r[e];
        return i && i.transition ? i.transition.backfaceVisible : !0
    } else if (e < n) {
        let i = r[e + 1];
        return i && i.transition ? i.transition.backfaceVisible : !0
    } else {
        let i = r[e];
        return i && i.transition ? i.transition.backfaceVisible : !0
    }
}

function P3(e, t) {
    let n = t.history[e];
    if (n) return n.transition.enter
}

function _3(e, t) {
    var n, r, i, o;
    let {current: s, previous: a, history: l} = t;
    return e === a && s > a || e === s && s < a ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null ? void 0 : r.backfaceVisible : (o = (i = l[e]) == null ? void 0 : i.transition) == null ? void 0 : o.backfaceVisible
}

function I3(e, t) {
    let {current: n, history: r} = t;
    if (e !== n) if (e < n) {
        let i = r[e + 1];
        if (i && i.transition) return i.transition.exit
    } else {
        let i = r[e];
        if (i && i.transition) return i.transition.enter
    }
}

function b1(e, t) {
    let {current: n, previous: r, history: i} = t, o = r > n ? r : n;
    if (e < o) {
        let s = i[e + 1];
        if (s && s.transition.animation) return s.transition.animation
    } else if (e !== o) {
        let s = i[e];
        if (s && s.transition.animation) return s.transition.animation
    } else {
        let s = i[e];
        if (s?.transition.animation) return s.transition.animation
    }
    return pC
}

function x1(e, t, n) {
    let {current: r, previous: i, history: o} = t;
    return !!(n && o.length > 1 || e !== i && e !== r || r === i)
}

function O3(e, t) {
    let {current: n, previous: r} = t;
    return e > n && e > r ? !1 : e === n
}

function w1(e) {
    return x.Children.map(e.component, n => {
        var r;
        if (!ou(n) || !iu(n) || !n.props) return n;
        let i = {style: n.props.style ?? {}}, o = (r = e?.transition) == null ? void 0 : r.position,
            s = !o || o.left !== void 0 && o.right !== void 0, a = !o || o.top !== void 0 && o.bottom !== void 0,
            l = "style" in n.props ? Re(n.props.style) : !0;
        return s && ("width" in n.props && (i.width = "100%"), l && (i.style.width = "100%")), a && ("height" in n.props && (i.height = "100%"), l && (i.style.height = "100%")), x.cloneElement(n, i)
    })
}

function M3(e, t) {
    if (e.goBackOnTapOutside !== !1) return t
}

function L3(e) {
    let t = rb(), n = Id();
    return x.useInsertionEffect(() => {
        Ma()
    }, []), C(S3, {...e, resetProjection: t, skipLayoutAnimation: n, children: e.children})
}

var hH = pr(Lu(), 1);
var yH = pr(Vm(), 1);

function V3(e, t) {
    let n, r = (...o) => {
        st.clearTimeout(n), n = st.setTimeout(e, t, ...o)
    }, i = () => {
        st.clearTimeout(n)
    };
    return r.cancel = i, r
}

function gu(...e) {
    return e.filter(Boolean).join(" ")
}

var A3 = (() => {
    function e(t = {}) {
        let n = tm(t, !1, !1);
        return e.addData(n), n
    }

    return e._stores = [], e.addData = t => {
        e._stores.push(t)
    }, e.reset = () => {
        e._stores.forEach(t => tm.resetObject(t))
    }, e.addObserver = (t, n) => tm.addObserver(t, n), e
})(), rm = A3;
var D3 = {update: 0}, z3 = x.createContext({update: NaN});
var B3 = class extends Ce {
    constructor() {
        super(...arguments), R(this, "observers", []), R(this, "state", D3), R(this, "taskAdded", !1), R(this, "frameTask", () => {
            this.setState({update: this.state.update + 1}), this.taskAdded = !1
        }), R(this, "observer", () => {
            this.taskAdded || (this.taskAdded = !0, Ik.addFrameTask(this.frameTask))
        })
    }

    componentWillUnmount() {
        this.observers.map(e => e()), rm.reset()
    }

    render() {
        let {children: e} = this.props;
        return this.observers.map(t => t()), this.observers = [], rm._stores.forEach(t => {
            let n = rm.addObserver(t, this.observer);
            this.observers.push(n)
        }), C(z3.Provider, {value: {...this.state}, children: e})
    }
}, WH = pr(Lu(), 1);
var mC = "__framer__", $3 = (() => mC.length)();

function N3(e) {
    if (e.startsWith(mC)) return e.substr($3)
}

var fr = ["opacity", "x", "y", "scale", "rotate", "rotateX", "rotateY", "skewX", "skewY", "transformPerspective"],
    vu = e => ({
        x: Ge(e?.x ?? 0),
        y: Ge(e?.y ?? 0),
        opacity: Ge(e?.opacity ?? 1),
        scale: Ge(e?.scale ?? 1),
        rotate: Ge(e?.rotate ?? 0),
        rotateX: Ge(e?.rotateX ?? 0),
        rotateY: Ge(e?.rotateY ?? 0),
        skewX: Ge(e?.skewX ?? 0),
        skewY: Ge(e?.skewY ?? 0),
        transformPerspective: Ge(e?.transformPerspective ?? 0)
    }), Je = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0
    };

function gC(e) {
    return e in Je
}

function vC(e, t) {
    let n = pt(() => ({values: vu(t ? e : void 0)}));
    return x.useEffect(() => {
        if (!t) for (let r of fr) {
            let i = Je[r];
            _t(i) || n.values[r].set(i)
        }
    }, [n, t]), n
}

var j3 = new Set(["loopEffectEnabled", "loopTransition", "loop", "loopRepeatType", "loopRepeatDelay"]), H3 = () => {
    let e = V();
    return $(() => () => {
        clearTimeout(e.current)
    }, []), async t => new Promise(n => {
        e.current = setTimeout(() => {
            n(!0)
        }, t * 1e3)
    })
};

function W3({loopEffectEnabled: e, loopRepeatDelay: t, loopTransition: n, loopRepeatType: r, loop: i}) {
    let o = ki(), s = pt(vu), a = x.useRef(!1), l = H3(), c = async () => {
        if (!i) return;
        let d = n || void 0, m = a.current && r === "mirror", v = m ? Je : i, g = m ? i : Je;
        return a.current = !a.current, Promise.all(fr.map(b => {
            if (!(o && b !== "opacity")) return s[b].set(g[b] ?? Je[b]), new Promise(p => {
                let h = {...d, onComplete: () => p()}, y = v[b] ?? g[b];
                typeof y == "number" && Zn(s[b], y, h)
            })
        }))
    }, u = async () => {
        e && (await c(), await l(t ?? 0), await u())
    }, f = Q(() => {
        fr.forEach(d => {
            s[d].stop()
        }), fr.forEach(d => {
            s[d].set(Je[d])
        }), a.current = !1
    }, [s]);
    return x.useEffect(() => (e && i ? u() : f(), () => f()), [e]), x.useMemo(() => ({
        values: s,
        style: e ? {willChange: "transform"} : {}
    }), [s, e])
}

function U3(e, t, n, r, i) {
    let o = n / 100 - 1, s = i ? (t - r) * o : 0, a = -e * o;
    return s + a
}

var G3 = new Set(["speed", "adjustPosition", "offset", "parallaxTransformEnabled"]);

function q3(e, t, n) {
    let {speed: r = 100, offset: i = 0, adjustPosition: o = !1, parallaxTransformEnabled: s} = e, a = x.useRef(null),
        l = ki(),
        c = x.useCallback(v => a.current === null || r === 100 ? 0 : U3(v, a.current, r, i, o), [a, r, i, o]), {scrollY: u} = q0(),
        f = Lt(u, c), d = Qn(o && a.current === null ? "hidden" : n), m = Qn(0);
    return Yi(t, v => {
        v !== null && (Y.read(() => {
            var g;
            a.current = ((g = v.getBoundingClientRect()) == null ? void 0 : g.top) ?? 0
        }), Y.update(() => {
            f.set(c(u.get())), o && d.set(n ?? "initial")
        }))
    }, [o]), {values: {y: l || !s ? m : f}, style: s ? {visibility: d, willChange: "transform"} : void 0}
}

function X3(e) {
    if (!(xe(e) || !Re(e))) return e?.transition
}

function im(e, t, n, r, i, o) {
    let s = X3(e);
    return Promise.all(fr.map(a => new Promise(l => {
        if (n && a !== "opacity") return l();
        let c = t.values[a];
        c.stop();
        let u = Re(e) ? e?.[a] ?? Je[a] : Je[a];
        if (ze(u) && (u = u.get()), !We(u)) return l();
        let f = Yn.get(r.current);
        f && f.setBaseTarget(a, u);
        let d;
        if (xe(i) && !c?.hasAnimated && st.MotionHandoffAnimation) {
            let m = st.MotionHandoffAnimation(i, a, Y);
            m && (d = m)
        }
        o ? c.set(u) : Zn(c, u, {...s, velocity: 0, startTime: d, onComplete: () => l()})
    })))
}

var Y3 = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);

function K3({initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: o}, s, a, l, c) {
    let u = r ?? e, f = i ?? t, d = o ?? n, [m, v] = dd(),
        g = V({lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1}), b = pt(() => {
            let h = u ?? l;
            if (!Re(h)) return {values: vu()};
            let y = {};
            for (let w in h) {
                let k = Re(h) ? h[w] : void 0;
                We(k) && (y[w] = k)
            }
            return {values: vu(y)}
        });
    Yi(s, h => {
        let {hasMounted: y} = g.current;
        if (y && f) return;
        let w = Yn.get(h);
        if (w) {
            Object.assign(g.current, {hasMounted: !0});
            for (let k in b.values) {
                if (!gC(k)) continue;
                let S = l?.[k];
                w.setBaseTarget(k, We(S) ? S : Je[k])
            }
        }
    }, [f]);
    let p = ki();
    return Yi(s, h => {
        if (!a) {
            v?.();
            return
        }
        if (h === null) return;
        if (m !== g.current.lastPresence) {
            Object.assign(g.current, {lastPresence: m}), m ? u && f && (Object.assign(g.current, {running: !0}), im(f, b, p, s, c).then(() => Object.assign(g.current, {running: !1}))) : d ? (Object.assign(g.current, {running: !0}), im(d, b, p, s, c).then(() => Object.assign(g.current, {running: !1})).then(() => v())) : v();
            return
        }
        let {lastAnimate: y, running: w} = g.current;
        Xm(f, y) || !f || (Object.assign(g.current, {lastAnimate: f}), im(f, b, p, s, c, !w).then(() => Object.assign(g.current, {running: !1})))
    }), b
}

function Q3(e, t) {
    let n = 0, r = e;
    for (; r && r !== t && r instanceof HTMLElement;) n += r.offsetTop, r = r.offsetParent;
    return n
}

var Z3 = 1;

function yC(e, t = 0, n) {
    var r;
    let i = [], o = [];
    for (let s = e.length; s >= 0; s--) {
        let {ref: a, offset: l} = e[s] ?? {};
        if (!a || !a.current) continue;
        let u = Q3(a.current, document.documentElement) - Z3 - (l ?? 0) - t,
            f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0, d = i[i.length - 1], m = Math.max(u + f, 0);
        i.push(u), o.unshift(Math.max(u, 0), d === void 0 ? m : Math.min(m, Math.max(d - 1, 0))), n?.(s)
    }
    return o
}

function J3(e, t = 0) {
    return e < t ? "up" : "down"
}

var ez = 4;

function tz(e, t, n = {}) {
    let {direction: r, target: i} = e ?? {}, {repeat: o = !0, enabled: s = !0} = n;
    x.useEffect(() => {
        if (!r || !s) return;
        let a, l = 0, c, u;
        return Nr(({y: f}) => {
            if (!o && u === i || f.current > f.scrollLength || f.current < 0) return;
            let d = J3(f.current, a);
            a = f.current;
            let m = d !== c;
            if (c = d, m) l = f.current; else {
                if (Math.abs(f.current - l) < ez) return;
                let g = d === r ? i : void 0;
                g !== u && t(g), u = g
            }
        })
    }, [r, o, i, s, t])
}

var nz = new Set(["threshold", "animateOnce", "opacity", "targetOpacity", "x", "y", "scale", "transition", "rotate", "rotateX", "rotateY", "perspective", "enter", "exit", "animate", "styleAppearEffectEnabled", "targets", "scrollDirection"]),
    rz = ["animate", "animate"], S1 = {inputRange: [], outputRange: []};

function iz(e, t, n) {
    let r = yC(e, t), i = [...rz], o = r[0];
    if (!We(o)) return S1;
    if (o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n) {
        let s = r.length - 1, a = r[s];
        if (!We(a)) return S1;
        r.push(a + 1), i.push("exit")
    }
    return {inputRange: r, outputRange: i}
}

function om(e) {
    return {
        x: e?.x ?? Je.x,
        y: e?.y ?? Je.y,
        scale: e?.scale ?? Je.scale,
        opacity: e?.opacity ?? Je.opacity,
        transformPerspective: e?.transformPerspective ?? Je.transformPerspective,
        rotate: e?.rotate ?? Je.rotate,
        rotateX: e?.rotateX ?? Je.rotateX,
        rotateY: e?.rotateY ?? Je.rotateY,
        skewX: e?.skewX ?? Je.skewX,
        skewY: e?.skewY ?? Je.skewY,
        transition: e?.transition ?? void 0
    }
}

function oz({opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: o, ...s}) {
    return x.useMemo(() => ({
        initial: r ?? om({...s, opacity: e ?? t ?? 1, transformPerspective: n}),
        animate: o ?? om({opacity: t}),
        exit: i ?? om()
    }), [o, s, r, i, e, t, n])
}

function sz(e, t) {
    let n = ki(), r = oz(e), i = e.styleAppearEffectEnabled, o = vC(i ? r.initial : r.animate, i),
        s = x.useRef({isPlaying: !1, scheduledAppearState: void 0, lastAppearState: !e.styleAppearEffectEnabled}),
        a = x.useRef(), l = x.useCallback(async ({transition: d, ...m}, v) => {
            let g = d ?? r.animate.transition ?? e.transition;
            await a.current, a.current = Promise.all(fr.map(b => {
                v && o.values[b].set(r.initial[b] ?? Je[b]);
                let p = m[b] ?? Je[b], h = Yn.get(t.current);
                return h && typeof p != "object" && h.setBaseTarget(b, p), new Promise(y => {
                    if (n && b !== "opacity") We(p) && o.values[b].set(p), y(); else {
                        let w = {restDelta: b === "scale" ? .001 : void 0, ...g, onComplete: () => y()};
                        typeof p == "number" && Zn(o.values[b], p, w)
                    }
                })
            }))
        }, []), c = e.animateOnce && s.current.lastAppearState === !0,
        u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
    $D(t, d => {
        let {isPlaying: m, lastAppearState: v} = s.current;
        if (m) {
            s.current.scheduledAppearState = d;
            return
        }
        s.current.scheduledAppearState = void 0, s.current.lastAppearState = d, v !== d && l(d ? r.animate : r.exit, d)
    }, {enabled: u, animateOnce: !!e.animateOnce, threshold: {y: e.threshold}});
    let f = e.targets && i && !e.scrollDirection;
    return x.useEffect(() => {
        if (!f) return;
        let d = {initial: !0}, m = "initial";
        return Nr(({y: v}) => {
            let {targets: g} = e;
            if (!g || !g[0] || g[0].ref && !g[0].ref.current) return;
            let {inputRange: b, outputRange: p} = iz(g, (e.threshold ?? 0) * v.containerLength, !!e.exit);
            if (b.length === 0 || b.length !== p.length) return;
            let h = Ts(v.current, b, p);
            if (e.animateOnce && d[h] || (d[h] = !0, m === h)) return;
            m = h;
            let y = tt(r)[h];
            y && l(y)
        })
    }, [f]), tz(e.scrollDirection, d => l(d ?? r.animate), {enabled: i, repeat: !e.animateOnce}), o
}

var az = new Set(["transformViewportThreshold", "styleTransformEffectEnabled", "transformTargets", "spring", "transformTrigger"]),
    lz = (e, t) => {
        var n;
        let r = (n = e?.[0]) == null ? void 0 : n.target;
        return t ? {opacity: r?.opacity ?? 1} : r
    }, bC = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: []
    });

function cz(e, t) {
    let n = x.useRef({});
    x.useEffect(() => {
        if (t !== void 0) for (let r of Xi(e)) {
            let i = e[r];
            i.attach((o, s) => {
                let a = n.current[r];
                if (a && a.stop(), n.current[r] = Qf({
                    keyframes: [i.get(), o],
                    velocity: i.getVelocity(), ...t,
                    restDelta: .001,
                    onUpdate: s
                }), !Ue.isProcessing) {
                    let l = performance.now() - Ue.timestamp;
                    l < 40 && (n.current[r].time = l / 1e3)
                }
                return i.get()
            })
        }
    }, [JSON.stringify(t)])
}

function uz(e, t) {
    let n = bC();
    return {
        inputRange: yC(e, t, i => {
            var o, s, a;
            let l = (o = e[i - 1]) == null ? void 0 : o.target, c = (s = e[i]) == null ? void 0 : s.target;
            for (let u of fr) (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0)
        }), effectKeyOutputRange: n
    }
}

function fz(e) {
    var t;
    let n = bC();
    for (let {target: r} of e) for (let i of fr) (t = n[i]) == null || t.push(r[i]);
    return n
}

var k1 = [0, 1];

function dz({
                transformTrigger: e,
                styleTransformEffectEnabled: t,
                transformTargets: n,
                spring: r,
                transformViewportThreshold: i = 0
            }, o) {
    let s = ki(), a = vC(lz(n, s), t), l = !t || !n, c = e === "onScrollTarget";
    return Ae(() => {
        if (!(l || !c)) return Nr(({y: u}) => {
            if (!n[0] || n[0].ref && !n[0].ref.current) return;
            let {inputRange: f, effectKeyOutputRange: d} = uz(n, i * u.containerLength);
            if (f.length !== 0) for (let m of fr) s && m !== "opacity" || f.length === d[m].length && d[m][0] !== void 0 && a.values[m].set(Ts(u.current, f, d[m]))
        })
    }, [s, c, i, a, n, l]), Yi(o, u => {
        if (l || c || u === null) return;
        let f = fz(n);
        return Nr(({y: d}) => {
            for (let m of fr) s && m !== "opacity" || k1.length === f[m].length && f[m][0] !== void 0 && a.values[m].set(Ts(d.progress, k1, f[m]))
        }, e === "onInView" ? {target: u ?? void 0, offset: ["start end", "end end"]} : void 0)
    }, [s, e, c, a, n, l]), cz(a.values, r), x.useMemo(() => ({
        values: a.values,
        style: t ? {willChange: "transform"} : {}
    }), [a, t])
}

var xC = {parallax: G3, styleAppear: nz, styleTransform: az, loop: j3, presence: Y3}, hz = Xi(xC);

function C1(e, t, n) {
    return !(e in n) && t in n || n[e] === !0
}

function pz(e) {
    let t = {
        parallax: {},
        styleAppear: {},
        styleTransform: {},
        presence: {animate: e.animate, initial: e.initial, exit: e.exit},
        loop: {},
        forwardedProps: {}
    };
    for (let n in e) {
        let r = N3(n);
        if (r) for (let i of hz) {
            let o = xC[i];
            if (o?.has(r)) {
                t[i][r] = tt(e)[n];
                break
            }
        } else t.forwardedProps[n] = tt(e)[n]
    }
    return t.parallax.parallaxTransformEnabled = C1("parallaxTransformEnabled", "speed", t.parallax), t.styleAppear.styleAppearEffectEnabled = C1("styleAppearEffectEnabled", "animateOnce", t.styleAppear), t
}

var fi = e => e.reduce((t, n) => t += n, 0), T1 = e => e.reduce((t, n) => t = t * n, 1), mz = "current";

function gz(e) {
    return Re(e) && mz in e
}

function vz(e, t) {
    if (!e || !Re(e)) return t;
    for (let n in e) {
        let r = e[n];
        !ze(r) || !gC(n) || We(r.get()) && t[n].push(r)
    }
}

function ya(e) {
    return xe(e) || Array.isArray(e)
}

var n8 = e => x.forwardRef((t, n) => {
    var r;
    if (t.__withFX) return C(e, {...t, animate: void 0, initial: void 0, exit: void 0, ref: n});
    if (he.current() === he.canvas) {
        let Ye = ya(t.animate) ? t.animate : void 0, ke = ya(t.initial) ? t.initial : void 0;
        return C(e, {...t, animate: Ye, initial: ke, exit: void 0, ref: n})
    }
    let {
            parallax: i = {},
            styleAppear: o = {},
            styleTransform: s = {},
            presence: a = {},
            loop: l = {},
            forwardedProps: c
        } = pz(t), {__targetOpacity: u, __perspectiveFX: f, __smartComponentFX: d = !1} = t, m = Qn(u ?? 1),
        v = oC(n), {values: g} = K3(a, v, d, t.style, t[pl]), {
            values: b,
            style: p
        } = q3(i, v, (r = t.style) == null ? void 0 : r.visibility), {
            values: h,
            style: y
        } = dz(s, v), {values: w} = sz(o, v), {values: k, style: S} = W3(l), T = x.useMemo(() => ({
            scale: [w.scale, k.scale, g.scale, h.scale],
            opacity: [w.opacity, k.opacity, g.opacity, m, h.opacity],
            x: [w.x, k.x, g.x, h.x],
            y: [w.y, k.y, b.y, g.y, h.y],
            rotate: [w.rotate, k.rotate, g.rotate, h.rotate],
            rotateX: [w.rotateX, k.rotateX, g.rotateX, h.rotateX],
            rotateY: [w.rotateY, k.rotateY, g.rotateY, h.rotateY],
            skewX: [w.skewX, k.skewX, g.skewX, h.skewX],
            skewY: [w.skewY, k.skewY, g.skewY, h.skewY],
            transformPerspective: [h.transformPerspective, w.transformPerspective]
        }), [m, h, b, w, k, g]);
    vz(t.style, T);
    let E = Lt(T.scale, T1), O = Lt(T.opacity, T1), I = Lt(T.x, fi), B = Lt(T.y, fi), z = Lt(T.rotate, fi),
        j = Lt(T.rotateX, fi), J = Lt(T.rotateY, fi), H = Lt(T.skewX, fi), ue = Lt(T.skewY, fi),
        ie = Lt(T.transformPerspective, fi), {drag: q, dragConstraints: re} = c;
    XA(q && gz(re) ? re : void 0);
    let W = {opacity: O, scale: E, x: I, y: B, rotate: z, rotateX: j, rotateY: J, skewX: H, skewY: ue};
    _t(f) && (W.transformPerspective = ie);
    let pe = ya(t.animate) ? t.animate : void 0, me = ya(t.initial) ? t.initial : void 0,
        ae = ya(t.exit) ? t.exit : void 0, X = d && !a.presenceInitial ? {initial: me, animate: pe, exit: ae} : {};
    return C(e, {...c, ...X, __withFX: !0, style: {...t.style, ...p, ...y, ...S, ...W}, values: g, ref: v})
});

function Jm(e) {
    let t = pt(() => yz(e));
    return t.useSetup(e), t.cloneAsElement
}

function yz(e) {
    let t = {forwardedRef: e, childRef: null, ref: null};
    t.ref = R1(t);
    let n = (s, a) => {
        if (!t.forwardedRef && t.forwardedRef === s) {
            t.ref = a;
            return
        }
        let l = !1;
        t.childRef !== a && (t.childRef = a, l = !0), t.forwardedRef !== s && (t.forwardedRef = s, l = !0), l && (t.ref = R1(t))
    }, r = !1;

    function i(s, a) {
        if (r) throw new ReferenceError("useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.");
        return r = !0, mn.count(s) > 1 && e && (t.forwardedRef = void 0, t.ref = t.childRef), mn.map(s, l => {
            if (Mt(l)) {
                let c = "ref" in l ? l.ref : void 0;
                n(t.forwardedRef, c);
                let u = t.ref !== c ? {...a, ref: t.ref} : a;
                return mr(l, u)
            }
            return l
        })
    }

    let o = function (a, l) {
        return C(nt, {children: i(a, l)})
    };
    return o.cloneAsArray = i, {
        useSetup: s => {
            r = !1, n(s, t.childRef)
        }, cloneAsElement: o
    }
}

function R1(e) {
    if (!e.forwardedRef) return e.childRef;
    let {forwardedRef: t, childRef: n} = e;
    return r => {
        p1(n, r), p1(t, r)
    }
}

var wC = x.createContext({});

function l8() {
    return x.useContext(wC)
}

var c8 = x.forwardRef(({width: e, height: t, y: n, children: r, ...i}, o) => {
        let s = x.useMemo(() => ({width: e, height: t, y: n}), [e, t, n]), a = Jm(o);
        return C(wC.Provider, {value: s, children: a(r, i)})
    }), bz = e => x.forwardRef((t, n) => {
        let r = Va(t);
        return C(e, {layoutId: r, ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n})
    }), xz = class extends Ce {
        constructor() {
            super(...arguments), R(this, "state", {hasError: !1})
        }

        componentDidCatch(e, t) {
            var n;
            let r = t?.componentStack;
            if (console.error("Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.", r), this.setState({hasError: !0}), typeof P < "u" && Math.random() <= .01) {
                let i = e instanceof Error && typeof e.stack == "string" ? e.stack : null;
                (n = P.__framer_events) == null || n.push(["published_site_load_recoverable_error", {
                    message: String(e),
                    stack: i,
                    componentStack: i ? void 0 : r
                }])
            }
        }

        render() {
            let {children: e} = this.props, {hasError: t} = this.state;
            return t ? null : e
        }
    }, wz = x.forwardRef(({children: e, layoutId: t, as: n, ...r}, i) => {
        let o = pt(() => t ? `${t}-container` : void 0), s = La(n);
        return C(s, {
            layoutId: o, ...r,
            ref: i,
            children: C(es.Provider, {
                value: !0,
                children: C(HL, {
                    enabled: !1,
                    children: C($0, {
                        id: t ?? "",
                        inherit: "id",
                        children: C(xz, {children: x.Children.map(e, a => x.isValidElement(a) ? x.cloneElement(a, {layoutId: t}) : a)})
                    })
                })
            })
        })
    }), m8 = bz(wz), Sz = x.createContext(void 0), kz = "style[data-framer-css-ssr-minified]", Cz = (() => {
        var e;
        if (!Lr()) return new Set;
        let t = (e = document.querySelector(kz)) == null ? void 0 : e.getAttribute("data-framer-components");
        return t ? new Set(t.split(" ")) : new Set
    })(), Tz = "data-framer-css-ssr", SC = (e, t, n) => x.forwardRef((r, i) => {
        let {sheet: o, cache: s} = x.useContext(Sz) ?? {};
        if (!Lr()) {
            $n(t) && (t = t(he.current()));
            let a = Array.isArray(t) ? t.join(`
`) : t;
            return de(nt, {
                children: [C("style", {
                    [Tz]: !0,
                    "data-framer-component": n,
                    dangerouslySetInnerHTML: {__html: a}
                }), C(e, {...r, ref: i})]
            })
        }
        return x.useInsertionEffect(() => {
            if (n && Cz.has(n)) return;
            ($n(t) ? t(he.current()) : Array.isArray(t) ? t : t.split(`
`)).forEach(l => l && zk(l, o, s))
        }, []), C(e, {...r, ref: i})
    }), eg = ve({
        onRegisterCursors: () => () => {
        }, registerCursors: () => {
        }
    }), yu = "framer-cursor-none", Cm = "framer-pointer-events-none", Rz = Ha(function ({children: t}) {
        let n = pt(() => {
            let i = new Set, o = {};
            return {
                onRegisterCursors: s => (s(o), i.add(s), () => i.delete(s)), registerCursors: s => {
                    let a = {};
                    for (let l in s) {
                        let c = o[l] ?? s[l];
                        c && (a[l] = c)
                    }
                    o = a;
                    for (let l of i) l(o)
                }
            }
        }), r = ki();
        return de(eg.Provider, {value: n, children: [t, !r && C(Iz, {})]})
    }),
    Ez = (() => SC(Rz, [`.${yu}, .${yu} * { cursor: none !important; }`, `.${Cm}, .${Cm} * { pointer-events: none !important; }`]))(),
    Fz = (() => ({position: "fixed", top: 0, left: 0, zIndex: 12 + 1, pointerEvents: "none"}))();

function Pz(e) {
    return !(!e || e.placement || e.alignment)
}

function Zc(e) {
    switch (e) {
        case"start":
            return "0%";
        case"center":
            return "-50%";
        case"end":
            return "-100%";
        default:
            Se(e)
    }
}

function _z(e, t = "center") {
    switch (e) {
        case"top":
            return `${Zc(t)}, -100%`;
        case"right":
            return `0%, ${Zc(t)}`;
        case"bottom":
            return `${Zc(t)}, 0%`;
        case"left":
            return `-100%, ${Zc(t)}`;
        default:
            return "-50%, -50%"
    }
}

var E1 = "data-framer-portal-id";

function F1(e, t) {
    let n = document.elementFromPoint(e, t);
    for (; n;) {
        if (n === document.body) return;
        let r = n.getAttribute("data-framer-cursor");
        if (r) return r;
        if (n.hasAttribute(E1)) {
            let i = n.getAttribute(E1);
            n = n.parentElement, i && (n = document.getElementById(i) ?? n)
        } else n = n.parentElement
    }
}

function P1(e) {
    for (let t in e) return !1;
    return !0
}

var Iz = Ha(function () {
    let {onRegisterCursors: t} = A(eg), [n, r] = De(!1), i = Qn(0), o = Qn(0), s = Qn(0), a = V(null),
        l = V({cursors: {}, cursorHash: void 0}), c = Bu();
    Ae(() => {
        let T = st.matchMedia("(any-hover: none)");

        function E(O) {
            O.matches ? Qt(() => r(!1)) : r(!0)
        }

        return T.addEventListener("change", E), T.matches || r(!0), () => {
            T.removeEventListener("change", E)
        }
    }, []), $(() => {
        if (!n) return;
        let T = 0, E = 0;

        function O() {
            i.set(T), o.set(E), Zn(s, 1, {type: "tween", duration: .2})
        }

        let I = () => {
            if (P1(l.current.cursors)) return;
            let j = F1(T, E);
            j !== l.current.cursorHash && (l.current.cursorHash = j, Y.update(() => c()))
        };

        function B(j) {
            if (j.pointerType === "touch") {
                Ct(I);
                return
            }
            Y.read(I, !0), T = j.clientX, E = j.clientY, Y.update(O)
        }

        function z(j) {
            if (j.target === a.current || !a.current) return;
            let J = new PointerEvent(j.type, {
                bubbles: !0,
                cancelable: j.cancelable,
                pointerType: j.pointerType,
                pointerId: j.pointerId,
                composed: j.composed,
                isPrimary: j.isPrimary,
                buttons: j.buttons,
                button: j.button
            });
            Y.update(() => {
                var H;
                (H = a.current) == null || H.dispatchEvent(J)
            })
        }

        return st.addEventListener("pointermove", B), document.addEventListener("pointerdown", z), document.addEventListener("pointerup", z), Y.read(I, !0), () => {
            st.removeEventListener("pointermove", B), document.removeEventListener("pointerdown", z), document.removeEventListener("pointerup", z), Ct(I)
        }
    }, [s, i, o, c, n]), $(() => {
        if (!n) return;

        function T() {
            Zn(s, 0, {type: "tween", duration: .2})
        }

        return document.addEventListener("mouseleave", T), st.addEventListener("blur", T), () => {
            document.removeEventListener("mouseleave", T), st.removeEventListener("blur", T)
        }
    }, [s, n]), Ae(() => {
        function T(O) {
            l.current.cursors = O, l.current.cursorHash = P1(O) ? null : F1(i.get(), o.get()), c()
        }

        let E = t(T);
        return () => {
            E(), document.body.classList.toggle(yu, !1)
        }
    }, [i, o, t, c]);
    let {cursors: u, cursorHash: f} = l.current, d = f ? u[f] : null, m = Pz(d);
    Ae(() => {
        n && document.body.classList.toggle(yu, m)
    }, [m, n]);
    let v = d?.component, g = d?.transition ?? {duration: 0}, b = Ed(i, g), p = Ed(o, g), h = Lt(() => {
        var T;
        return b.get() + (((T = d?.offset) == null ? void 0 : T.x) ?? 0)
    }), y = Lt(() => {
        var T;
        return p.get() + (((T = d?.offset) == null ? void 0 : T.y) ?? 0)
    }), w = d?.alignment, k = d?.placement, S = Q((T, E) => `translate(${_z(k, w)}) ${E}`, [w, k]);
    return !n || !d || !v ? null : C(v, {
        transformTemplate: S,
        style: {...Fz, x: h, y, opacity: s},
        globalTapTarget: !0,
        variant: d?.variant,
        ref: a,
        className: Cm
    })
});

function w8(e) {
    let {registerCursors: t} = A(eg), n = pt(() => e);
    Ae(() => {
        t(n)
    }, [n, t])
}

var kC = x.createContext(void 0), tg = class {
    constructor(e) {
        this.resolver = e, R(this, "status")
    }

    static is(e) {
        return e instanceof tg
    }

    preload() {
        if (this.status) {
            let t = this.status;
            return t.type !== "pending" ? void 0 : t.promise
        }
        let e = this.resolver().then(t => {
            this.status = {type: "fulfilled", value: t}
        }, t => {
            this.status = {type: "rejected", error: t}
        });
        return this.status = {type: "pending", promise: e}, e
    }

    waitFor() {
        return this.resolver()
    }

    read() {
        let e = this.status;
        if (!e) throw new Error("Need to call preload() before read()");
        switch (e.type) {
            case"pending":
                throw new Error("Need to wait for preload() to resolve");
            case"fulfilled":
                return e.value;
            case"rejected":
                throw e.error;
            default:
                Se(e)
        }
    }
}, CC = x.createContext(void 0), E8 = (() => CC.Provider)(), ju = () => x.useContext(CC) ?? {};

function ng(e, t) {
    return e instanceof HTMLAnchorElement ? e : e instanceof Element ? e === t ? null : ng(e.parentElement, t) : null
}

function Oz({children: e}) {
    let {useGranularSuspense: t} = ju();
    return t ? C(Ck, {children: e}) : e
}

function Mz(e) {
    return Ve(function (n, r) {
        return C(Oz, {children: C(e, {...n, ref: r})})
    })
}

var _1 = "element", Lz = "collection", Vz = "collectionItemId", Az = "pathVariables", TC = "framer/page-link,";

function RC(e) {
    return xe(e) && e.startsWith(`data:${TC}`)
}

function rg(e) {
    if (RC(e)) try {
        let t = new URL(e), n = t.pathname.substring(TC.length), r = t.searchParams, i = r.has(_1) ? r.get(_1) : void 0,
            o, s = r.get(Lz), a = r.get(Vz), l = r.get(Az);
        if (s && a && l) {
            let c = Object.fromEntries(new URLSearchParams(l).entries());
            o = {collection: s, collectionItemId: a, pathVariables: c}
        }
        return {target: n === "none" ? null : n, element: i === "none" ? void 0 : i, collectionItem: o}
    } catch {
        return
    }
}

function Dz(e, t, n) {
    var r;
    let i = t.getAttribute("data-framer-page-link-target"), o, s;
    if (i) {
        o = t.getAttribute("data-framer-page-link-element") ?? void 0;
        let l = t.getAttribute("data-framer-page-link-path-variables");
        l && (s = Object.fromEntries(new URLSearchParams(l).entries()))
    } else {
        let l = t.getAttribute("href");
        if (!l) return !1;
        let c = rg(l);
        if (!c || !c.target) return !1;
        i = c.target, o = c.element ?? void 0, s = (r = c.collectionItem) == null ? void 0 : r.pathVariables
    }
    let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
    return e(i, o, Object.assign({}, n, s), a), !0
}

var zz = class {
    constructor() {
        R(this, "links", new Map)
    }

    clear() {
        this.links.clear()
    }

    getLinks() {
        return this.links
    }

    addLink(e, t) {
        if (typeof P < "u" || !e || !t) return;
        this.links.has(e) || this.links.set(e, new Set), this.links.get(e).add(t)
    }
}, Bz = new zz, $z = 500, Nz = .9, jz = 1.7, Hz = 4, Wz = 1 / 0, Ho = new WeakMap, Jc = new Set, Wo = new Map;

function Uz() {
    var e;
    let t = Fe.connection || Fe.mozConnection || Fe.webkitConnection || {}, n = Fe.deviceMemory && Fe.deviceMemory > jz,
        r, i, o;

    function s() {
        r = t.effectiveType || "", i = t.saveData || r.includes("2g"), o = r === "3g" || n ? Hz : Wz
    }

    (e = t.addEventListener) == null || e.call(t, "change", s), s();
    let a = new IntersectionObserver(u, {threshold: Nz}), l = 0;

    async function c(f, d) {
        if (i) return;
        let m = Wo.get(f);
        if (!m?.size || Jc.has(f)) return;
        ++l, Jc.add(f);
        let v = Ek(f).catch(() => {
        });
        a.unobserve(d), Ho.delete(d);
        for (let g of m) a.unobserve(g), Ho.delete(g);
        m.clear(), Wo.delete(f), await v, --l
    }

    function u(f) {
        var d;
        for (let m of f) {
            let v = m.target, g = Ho.get(v);
            if (!g || Jc.has(g)) {
                a.unobserve(v), Ho.delete(v);
                continue
            }
            let b = Wo.get(g), p = ((d = Wo.get(g)) == null ? void 0 : d.size) ?? 0;
            if (m.isIntersecting) {
                if (l >= o) continue;
                b ? b.add(v) : Wo.set(g, new Set([v])), setTimeout(c.bind(void 0, g, v), $z)
            } else b && b.delete(v), p <= 1 && Wo.delete(g)
        }
    }

    return (f, d) => {
        if (!Jc.has(f)) return Ho.set(d, f), a.observe(d), () => {
            Ho.delete(d), a.unobserve(d)
        }
    }
}

var Gz = !Nm || typeof IntersectionObserver > "u" ? null : Uz(), sm = Symbol("noLocale"), eu = new Map;

function qz(e, t, n) {
    var r, i;
    let o = (i = (r = eu?.get(n?.id ?? sm)) == null ? void 0 : r.get(e.collectionId)) == null ? void 0 : i.get(e.collectionItemId);
    if (o) return o;
    let s = eu.get(n?.id ?? sm) ?? new Map;
    eu.set(n?.id ?? sm, s);
    let a = s.get(e.collectionId) ?? new Map;
    s.set(e.collectionId, a);
    let l = new tg(async () => {
        try {
            let c = t[e.collectionId];
            if (!c) throw new Error(`Key not found in collection utils for collection id: "${e.collectionId}`);
            let u = await c();
            if (!u) throw new Error("Collection does not contain utility functions");
            return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0)
        } catch (c) {
            console.warn(`Failed to resolve slug: ${c instanceof Error ? c.message : "Unknown error"}`);
            return
        }
    });
    return a.set(e.collectionItemId, l), l
}

function ts() {
    return he.current() === he.canvas
}

var Xz = "webPageId";

function Tm(e) {
    return !!(e && typeof e == "object" && Xz in e)
}

function Yz(e) {
    if (!e) return;
    let t = {};
    for (let n in e.pathVariables) {
        let r = e.pathVariables[n];
        r && (t[n] = r)
    }
    return t
}

function bu(e) {
    if (!RC(e)) return e;
    let t = rg(e);
    if (!t) return;
    let {target: n, element: r, collectionItem: i} = t;
    if (n) return {webPageId: n, hash: r ?? void 0, pathVariables: Yz(i)}
}

var EC = /:([a-z]\w*)/gi, Kz = ve(void 0);

function FC() {
    var e;
    let t = A(Kz), n = (e = Au()) == null ? void 0 : e.pathVariables;
    return t || n
}

function PC(e, {webPageId: t, hash: n, pathVariables: r}, i) {
    if (t !== e.id || n) return !1;
    if (e.path && e.pathVariables) {
        let o = Object.assign({}, i, r);
        for (let [, s] of e.path.matchAll(EC)) if (!s || e.pathVariables[s] !== o[s]) return !1
    }
    return !0
}

function ig(e) {
    return e === void 0 ? !1 : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."))
}

function Qz(e, t) {
    try {
        return !!new URL(e).protocol
    } catch {
    }
    return t
}

function og(e, t) {
    return e !== void 0 ? e ? "_blank" : void 0 : t ? void 0 : "_blank"
}

function am(e, t = void 0) {
    let n = ig(e), r = og(t, n);
    return {href: e === "" || Qz(e, n) ? e : `https://${e}`, target: r, rel: n ? void 0 : "noopener"}
}

function sg(e, t, n, r, i) {
    var o, s;
    let a = (o = e.getRoute) == null ? void 0 : o.call(e, t);
    a && fk(a?.page) && a.page.preload(), (s = e.navigate) == null || s.call(e, t, n, r, i)
}

function _C(e, t, n, r, i) {
    return async o => {
        if (o.metaKey) return;
        let s = ng(o.target);
        !s || s.getAttribute("target") === "_blank" || (o.preventDefault(), sg(e, t, n, r, i))
    }
}

function tu(e, t, n) {
    let r = document.createElement("a");
    r.href = e, t && (r.rel = t), n && (r.target = n), document.body.appendChild(r), r.click(), r.remove()
}

function Zz(e, t, n, r) {
    let i = [];

    function o(a) {
        if (!a || !n) return;
        let l = {};
        for (let c in a) {
            let u = a[c];
            D(u, "unresolvedSlug should be defined");
            let f = qz(u, n, r), d = f.preload();
            if (d) i.push(d); else {
                let m = f.read();
                m && (l[c] = m)
            }
        }
        return l
    }

    let s = {path: o(e), hash: o(t)};
    if (i.length) throw Promise.allSettled(i);
    return s
}

function Jz(e, t, n, r, i, o, s, a) {
    var l;
    let c = {...i, ...o, ...a?.path}, u = {...i, ...s, ...a?.hash},
        f = (l = e.getRoute) == null ? void 0 : l.call(e, n), d = zm(f, {
            currentRoutePath: t?.path,
            currentPathVariables: t?.pathVariables,
            hash: r,
            pathVariables: c,
            hashVariables: u,
            preserveQueryParams: e.preserveQueryParams
        }), m = d.split("#", 2)[1];
    return {routeId: n, route: f, href: d, elementId: m, pathVariables: c}
}

function e5(e, t, n) {
    if (!(!e.routes || !e.getRoute || !ig(t))) try {
        let [i, o] = t.split("#", 2);
        D(i !== void 0, "A href must have a defined pathname.");
        let [s] = i.split("?", 2);
        D(s !== void 0, "A href must have a defined pathname.");
        let {routeId: a, pathVariables: l} = Rk(e.routes, s), c = e.getRoute(a);
        if (c) {
            let u = Object.assign({}, n, l);
            return {routeId: a, route: c, href: t, elementId: o, pathVariables: u}
        }
    } catch {
    }
}

function t5(e, t, n, r, i) {
    let {webPageId: o, hash: s, pathVariables: a, hashVariables: l, unresolvedHashSlugs: c, unresolvedPathSlugs: u} = n,
        f = Zz(u, c, e.collectionUtils, r);
    return Jz(e, t, o, s, i, a, l, f)
}

function n5(e, t, n, r, i, o) {
    if (!r) return am(e, t);
    let s = e5(n, e, i);
    if (!s) return am(e, t);
    let {routeId: a, route: l, elementId: c, pathVariables: u} = s;
    if (!l) return am(e, t);
    let f = zm(l, {
        currentRoutePath: r.path,
        currentPathVariables: r.pathVariables,
        hash: c,
        pathVariables: u,
        preserveQueryParams: n.preserveQueryParams
    }), d = og(t, !0);
    return {
        href: f,
        target: d,
        onClick: _C(n, a, c, u, o),
        navigate: () => sg(n, a, c, u, o),
        "data-framer-page-link-current": !c && r.id === a || void 0
    }
}

function IC(e, t, n) {
    var r;
    if (xe(e)) {
        let o = ig(e);
        if (!t.routes || !t.getRoute || !n || !o) return;
        let [s] = e.split("#", 2);
        if (s === void 0) return;
        let [a] = s.split("?", 2);
        if (a === void 0) return;
        let {routeId: l} = Rk(t.routes, a);
        return t.getRoute(l)
    }
    let {webPageId: i} = e;
    return (r = t.getRoute) == null ? void 0 : r.call(t, i)
}

var O8 = Mz(Ve(({children: e, href: t, openInNewTab: n, smoothScroll: r, nodeId: i, ...o}, s) => {
    let a = _a(), l = Au(), c = FC(), {activeLocale: u} = cL(), f = Jm(s), d = se(() => {
        if (!t) return {};
        let k = Tm(t) ? t : bu(t);
        if (!k) return {};
        if (xe(k)) return n5(k, n, a, l, c, r);
        let {routeId: S, href: T, elementId: E, pathVariables: O} = t5(a, l, k, u, c), I = og(n, !0);
        return {
            href: T,
            target: I,
            onClick: _C(a, S, E, O, r),
            navigate: () => sg(a, S, E, O, r),
            "data-framer-page-link-current": l && PC(l, k, c) || void 0
        }
    }, [t, a, u, c, n, l, r]), [m, v] = r5(i, t, d), g = Q(k => {
        var S;
        let T = Tm(t) ? t : bu(t);
        if (!T) return;
        let E = IC(T, a, l);
        if (E) return (S = Gz) == null ? void 0 : S(E, k)
    }, [l, t, a]), b = Mt(e) && "ref" in e, p = oC(b ? e.ref : void 0);
    Yi(p, k => {
        k !== null && v(k)
    }, [v]), Yi(p, k => {
        if (k !== null) return g(k)
    }, [g]);
    let {navigate: h, ...y} = d, w = f.cloneAsArray(e, {...o, ...y, ref: p});
    return m(w)
})), I1 = ve(void 0);

function r5(e, t, n) {
    let r = A(I1), i = ts(), o = _a(), s = Au(), {replaceNestedLinks: a} = ju(), l = se(() => {
        let b = Tm(t) ? t : bu(t);
        if (b) return IC(b, o, s)
    }, [s, t, o]), c = Object.keys(n).length > 0, u = !!(a && !i && (r || !c)), f = Q(b => {
        var p;
        if (!n.href) return;
        if (b.preventDefault(), b.stopPropagation(), /Mac|iPod|iPhone|iPad/u.test(Fe.userAgent) ? b.metaKey : b.ctrlKey) {
            tu(n.href, "", "_blank");
            return
        }
        l ? (p = n.navigate) == null || p.call(n) : tu(n.href, n.rel, n.target)
    }, [n, l]), d = Q(b => {
        n.href && (b.preventDefault(), b.stopPropagation(), tu(n.href, "", "_blank"))
    }, [n]), m = Q(b => {
        var p;
        n.href && b.key === "Enter" && (b.preventDefault(), b.stopPropagation(), l ? (p = n.navigate) == null || p.call(n) : tu(n.href, n.rel, n.target))
    }, [n, l]), v = Q(b => {
        let p = {"data-nested-link": !0, role: "link", tabIndex: 0, onClick: f, onAuxClick: d, onKeyDown: m},
            h = u ? mn.map(b, y => {
                if (!i5(y)) return y;
                Bz.addLink(r, e);
                let w = xu(y.type), {children: k, ...S} = y.props, T = c ? {...S, ...p, as: S.as && xu(S.as)} : S,
                    E = "ref" in y ? y.ref : void 0;
                return Zi(w, {...T, ref: E}, k)
            }) : b;
        return C(I1.Provider, {value: e, children: h})
    }, [c, e, d, f, m, u, r]), g = Q(b => {
        i || !u || !c || (b.dataset.hydrated = "true")
    }, [i, c, u]);
    return [v, g]
}

function i5(e) {
    return Mt(e) && (xu(e.type) !== e.type || xu(e.props.as) !== e.props.as)
}

function xu(e) {
    return e === "a" ? "span" : kl(e) && _d(e) === "a" ? Jt.span : e
}

var o5 = class extends Ce {
    constructor() {
        super(...arguments), R(this, "state", {error: void 0})
    }

    static getDerivedStateFromError(e) {
        return {error: e}
    }

    render() {
        return this.state.error ? null : this.props.children
    }
};
var s5 = x.createContext(void 0);

function a5(e) {
    return new Promise((t, n) => {
        try {
            new URL(e);
            let r = new Image;
            r.onload = () => t(), r.onerror = n, r.src = e
        } catch (r) {
            n(r)
        }
    })
}

function l5(e) {
    return typeof e == "object" && e !== null
}

function c5(e, t) {
    if (t === "") return e;
    let n = t.split(/[.[\]]+/u).filter(i => i.length > 0), r = e;
    for (let i of n) {
        if (!l5(r)) return;
        r = r[i]
    }
    return r
}

function ba(e) {
    return `${e.credentials}:${e.url}`
}

var u5 = {status: "loading", data: void 0};

function f5(e) {
    return xe(e) && !Number.isNaN(Number(e))
}

function d5(e, t) {
    switch (e) {
        case"string":
            return xe(t) || We(t);
        case"color":
            return xe(t);
        case"boolean":
            return Wm(t);
        case"number":
            return We(t) || f5(t);
        case"link":
        case"image":
            return xe(t) && Rm(t);
        default: {
            let n = e;
            return !1
        }
    }
}

function h5(e, t) {
    if (e.status === "loading") return t.fallbackValue;
    if (e.status === "error") throw e.error;
    let n = c5(e.data, t.resultKeyPath);
    if (_t(n)) throw new Error(`Key '${t.resultKeyPath}' not found in response`);
    if (!d5(t.resultOutputType, n)) throw new Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
    return n
}

function Rm(e) {
    try {
        return !!new URL(e).protocol
    } catch {
    }
}

function lm(e, t) {
    if (he.current() === he.canvas) return !1;
    let n = t === 0 ? 500 : t * 1e3, r = Date.now(), i = e + n;
    return r >= i
}

var O1 = () => {
}, _r, lu, Bi, $i, xa, di, cu = class {
    constructor() {
        R(this, "responseValues", new Map), Kt(this, _r, new Map), Kt(this, lu, new Set), Kt(this, Bi, new Map), Kt(this, $i, new Map), Kt(this, xa, new Map), Kt(this, di, new Map), R(this, "persistCache", V3(() => {
            let e = {};
            for (let [t, n] of this.responseValues) {
                if (!n || n.status !== "success") continue;
                let r = fe(this, Bi).get(t);
                if (!r || r === 0) continue;
                let i = fe(this, $i).get(t);
                i && (i && lm(i, r) || (e[t] = [i, r, n.data]))
            }
            try {
                localStorage.setItem(cu.cacheKey, JSON.stringify(e))
            } catch {
            }
        }, 500))
    }

    unmount() {
        for (let [e, t] of fe(this, di)) clearInterval(t), fe(this, di).delete(e)
    }

    stopQueryRefetching(e) {
        let t = ba(e), n = fe(this, di).get(t);
        n && (clearInterval(n), fe(this, di).delete(t))
    }

    startQueryRefetching(e) {
        let t = ba(e), n = fe(this, di).get(t), r = fe(this, Bi).get(t);
        if (n || !r) return;
        let i = st.setInterval(() => {
            if (document.visibilityState === "hidden") return;
            let o = fe(this, $i).get(t);
            !r || !o || this.fetchWithCache({...e, cacheDuration: r})
        }, r);
        fe(this, di).set(t, i)
    }

    hydrateCache() {
        try {
            let e = localStorage.getItem(cu.cacheKey);
            if (!e) return;
            let t = JSON.parse(e);
            if (typeof t != "object") throw new Error("Invalid cache data");
            for (let n in t) {
                let r = t[n];
                if (!Array.isArray(r) || r.length !== 3) throw new Error("Invalid cache data");
                let [i, o, s] = r;
                lm(i, o) || (fe(this, $i).set(n, i), fe(this, Bi).set(n, o), this.responseValues.set(n, {
                    status: "success",
                    data: s
                }))
            }
        } catch {
            try {
                localStorage.removeItem(cu.cacheKey)
            } catch {
            }
        }
    }

    setResponseValue(e, t) {
        this.responseValues.set(e, t), this.persistCache();
        let n = fe(this, _r).get(e);
        if (n) for (let r of n) r()
    }

    async prefetch(e) {
        if (!Lr() || !Rm(e.url)) return;
        let t = ba(e);
        fe(this, lu).add(t), await this.fetchWithCache(e);
        let n = this.getValue(t);
        if (!n || n.status === "loading") throw new Error("Unexpected result status for prefetch");
        let r = fe(this, _r).get(t);
        for (let o of r ?? []) o();
        let i = h5(n, e);
        return e.resultOutputType === "image" && xe(i) && await a5(i).catch(O1), i
    }

    async fetchWithCache(e) {
        if (!Lr()) return;
        let t = ba(e), n = fe(this, xa).get(t);
        if (n) return n;
        let r = fe(this, $i).get(t), i = r && lm(r, e.cacheDuration);
        if (this.responseValues.has(t) && !i) return;
        this.responseValues.get(t) || this.setResponseValue(t, u5);
        let a = (async () => {
            try {
                let l = await fetch(e.url, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"},
                    credentials: e.credentials
                });
                if (!l.ok) {
                    this.setResponseValue(t, {
                        status: "error",
                        error: new Error("Invalid Response Status"),
                        data: void 0
                    });
                    return
                }
                let c = await l.json();
                this.setResponseValue(t, {status: "success", data: c}), fe(this, $i).set(t, Date.now())
            } catch (l) {
                this.setResponseValue(t, {status: "error", error: l, data: void 0})
            }
        })();
        return fe(this, xa).set(t, a), a.finally(() => {
            fe(this, xa).delete(t)
        }), a
    }

    getValue(e, t = !1) {
        if (!(t && !fe(this, lu).has(e))) return this.responseValues.get(e)
    }

    subscribe(e, t, n = !1) {
        let {url: r, cacheDuration: i} = e;
        if (!Rm(r)) return O1;
        let o = ba(e), s = fe(this, Bi).get(o);
        (!s || i < s) && fe(this, Bi).set(o, i), n || (this.startQueryRefetching(e), this.fetchWithCache(e));
        let a = fe(this, _r).get(o) ?? new Set;
        return a.add(t), fe(this, _r).set(o, a), () => {
            let l = fe(this, _r).get(o);
            l && (l.delete(t), l.size === 0 && fe(this, _r).delete(o), fe(this, _r).size === 0 && this.stopQueryRefetching(e))
        }
    }
}, OC = cu;
_r = new WeakMap;
lu = new WeakMap;
Bi = new WeakMap;
$i = new WeakMap;
xa = new WeakMap;
di = new WeakMap;
R(OC, "cacheKey", "framer-fetch-client-cache");
var p5 = ve(void 0), m5 = ve(!0), g5 = ({children: e, client: t}) => {
    let [n] = De(() => t ?? new OC), [r, i] = De(!0);
    return $(() => (n.hydrateCache(), Qt(() => {
        i(!1)
    }), () => n.unmount()), [n]), C(m5.Provider, {value: r, children: C(p5.Provider, {value: n, children: e})})
}, v5, y5, b5, x5, w5;
v5 = new WeakMap;
y5 = new WeakMap;
b5 = new WeakMap;
x5 = new WeakMap;
w5 = new WeakMap;

function B8({
                RootComponent: e,
                isWebsite: t,
                routeId: n,
                framerSiteId: r,
                pathVariables: i,
                routes: o,
                collectionUtils: s,
                notFoundPage: a,
                isReducedMotion: l = !1,
                includeDataObserver: c = !1,
                localeId: u,
                locales: f,
                preserveQueryParams: d,
                EditorBar: m
            }) {
    let {enableAsyncURLUpdates: v} = ju();
    if (x.useEffect(() => {
        t || Ik.start()
    }, []), t) return C(D0, {
        reducedMotion: l ? "user" : "never",
        children: C(g5, {
            children: C(Ez, {
                children: C(s5.Provider, {
                    value: r,
                    children: C(dL, {
                        initialRoute: n,
                        initialPathVariables: i,
                        initialLocaleId: u,
                        routes: o,
                        collectionUtils: s,
                        notFoundPage: a,
                        locales: f,
                        defaultPageStyle: {minHeight: "100vh", width: "auto"},
                        preserveQueryParams: d,
                        enableAsyncURLUpdates: v,
                        editorBar: m && r && C(o5, {children: C(mi, {children: C(m, {framerSiteId: r})})})
                    })
                })
            })
        })
    });
    {
        let g = c ? B3 : x.Fragment;
        return C(g, {
            children: C(nL, {
                routes: o,
                children: C(L3, {children: x.isValidElement(e) ? e : x.createElement(e, {key: n})})
            })
        })
    }
}

function S5(e, t, n) {
    let r = mn.map(e, i => Mt(i) ? mr(i, t) : i);
    return n ? r : C(nt, {children: r})
}

var ag = x.createContext(void 0), MC = "ssr-variant";

function M1(e, t, n, r, i, o, s, a) {
    let l = x.Children.toArray(t), c = l[0];
    if (l.length !== 1 || !x.isValidElement(c)) return console.warn("PropertyOverrides: expected exactly one React element for a child", t), s(t, n);
    let u = [], f = [];
    for (let [g] of Object.entries(r)) {
        if (g === i) continue;
        let b = e[g];
        if (!b || !C5(c.props, b)) {
            f.push(g);
            continue
        }
        let p = L1([g], o);
        p.length && u.push({variants: p, propOverrides: b})
    }
    if (u.length === 0) return s(c, n);
    let d = [i, ...f], m = L1(d, o);
    m.length && u.unshift({variants: m});
    let v = [];
    for (let {variants: g, propOverrides: b} of u) {
        if (a && !g.includes(a)) continue;
        let p = g.join("+"), h = C(ag.Provider, {value: new Set(g), children: s(c, b ? {...n, ...b} : n)}, p),
            y = k5(g, o, r);
        y.length ? (D(u.length > 1, "Must branch out when there are hiddenClassNames"), h = C("div", {
            className: `${MC} ${y.join(" ")}`,
            children: h
        }, p)) : D(u.length === 1, "Cannot branch out when hiddenClassNames is empty"), v.push(h)
    }
    return D(!a || v.length === 1, "Must render exactly one branch when activeVariantId is given"), v
}

function LC(e) {
    return e.split("-")[2]
}

function k5(e, t, n) {
    let r = [];
    for (let [i, o] of Object.entries(n)) {
        let s = t && !t.has(i);
        e.includes(i) || s || r.push(`hidden-${LC(o)}`)
    }
    return r
}

function L1(e, t) {
    return t ? e.filter(n => t.has(n)) : e
}

function C5(e, t) {
    for (let n of Object.keys(t)) if (!Xm(e[n], t[n], !0)) return !0;
    return !1
}

function T5(e, t, n) {
    return !n || !e ? t : {...t, ...n[e]}
}

var R5 = x.forwardRef(function ({breakpoint: t, overrides: n, children: r, ...i}, o) {
    let s = Jm(o), a = x.useContext(ag), l = JM(), c = pt(() => l.current ? Lr() ? 1 : 2 : 0), u = x.useContext(kC);
    if (!u) return console.warn("PropertyOverrides is missing GeneratedComponentContext"), s(r, i);
    let {primaryVariantId: f, variantClassNames: d} = u;
    switch (c) {
        case 0:
            return s(r, T5(t, i, n));
        case 1:
            return M1(n, r, i, d, f, a, s, t);
        case 2:
            return M1(n, r, i, d, f, a, S5, void 0);
        default:
            Se(c)
    }
}), H8 = (() => SC(R5, `.${MC} { display: contents }`, "PropertyOverrides"))();

function E5(e) {
    return {
        trace(...t) {
            var n;
            return (n = ht.getLogger(e)) == null ? void 0 : n.trace(...t)
        }, debug(...t) {
            var n;
            return (n = ht.getLogger(e)) == null ? void 0 : n.debug(...t)
        }, info(...t) {
            var n;
            return (n = ht.getLogger(e)) == null ? void 0 : n.info(...t)
        }, warn(...t) {
            var n;
            return (n = ht.getLogger(e)) == null ? void 0 : n.warn(...t)
        }, error(...t) {
            var n;
            return (n = ht.getLogger(e)) == null ? void 0 : n.error(...t)
        }
    }
}

function F5(e) {
    return Du(e) && e.every(Re)
}

function VC(e) {
    return Re(e) && $n(e.read) && $n(e.preload)
}

function P5(e) {
    return F5(e) || VC(e)
}

function AC(e) {
    return Re(e) && Re(e.schema)
}

function _5(e) {
    return Re(e) && Re(e.collectionByLocaleId)
}

async function V1(e, t) {
    return VC(e) ? (await e.preload(t), e.read(t)) : e
}

var I5 = class {
    constructor(e, t) {
        this.collection = e, this.locale = t, R(this, "schema"), R(this, "indexes", []);
        let n = bA(e);
        D(n, "Collection does not have properties");
        let r = {id: {type: "string", isNullable: !1}}, i = Object.entries(n);
        for (let [o, s] of i) {
            if (!s) continue;
            let a = s.type;
            D(a !== "array", "Array properties are not supported"), D(a !== "object", "Object properties are not supported"), r[o] = {
                type: a,
                isNullable: !0
            }
        }
        this.schema = r
    }

    getDatabaseItem(e, t) {
        let n = {};
        for (let r in this.schema) {
            let i = e[r];
            if (hA(i)) continue;
            let o = this.schema[r];
            _t(o) || (D(o.type !== "unknown", "Invalid definition type"), n[r] = {type: o.type, value: i})
        }
        return {pointer: t, data: n}
    }

    async resolveRichText(e) {
        if (tg.is(e)) {
            let t = e.preload();
            return t && await t, e.read()
        }
        return e
    }

    async scanItems() {
        return (await V1(this.collection, this.locale)).map((t, n) => {
            let r = String(n);
            return this.getDatabaseItem(t, r)
        })
    }

    async resolveItems(e) {
        let t = await V1(this.collection, this.locale);
        return e.map(n => {
            let r = Number(n), i = t[r];
            return D(i, "Can't find collection item"), this.getDatabaseItem(i, n)
        })
    }

    compareItems(e, t) {
        return Number(e.pointer) - Number(t.pointer)
    }
};

function O5(e, t) {
    switch (e?.type) {
        case"array":
            return {type: "array", value: e.value.map(r => _e.cast(r, t.definition))}
    }
    return null
}

function DC(e) {
    switch (e?.type) {
        case"boolean":
            return e;
        case"number":
        case"string":
            return {type: "boolean", value: !!e.value}
    }
    return null
}

function Vr(e) {
    let t = DC(e);
    return t?.value ?? !1
}

function M5(e) {
    switch (e?.type) {
        case"color":
            return e
    }
    return null
}

function L5(e) {
    switch (e?.type) {
        case"date":
            return e;
        case"number":
        case"string": {
            let t = new Date(e.value);
            return $k(t) ? {type: "date", value: t.toISOString()} : null
        }
    }
    return null
}

function V5(e) {
    switch (e?.type) {
        case"enum":
            return e;
        case"string":
            return {type: "enum", value: e.value}
    }
    return null
}

function A5(e) {
    switch (e?.type) {
        case"file":
            return e
    }
    return null
}

function D5(e) {
    switch (e?.type) {
        case"link":
            return e;
        case"string":
            try {
                let {protocol: t} = new URL(e.value);
                return t === "http:" || t === "https:" ? {type: "link", value: e.value} : null
            } catch {
                return null
            }
    }
    return null
}

function zC(e) {
    switch (e?.type) {
        case"number":
        case"string": {
            let t = Number(e.value);
            return Number.isFinite(t) ? {type: "number", value: t} : null
        }
    }
    return null
}

function BC(e) {
    let t = zC(e);
    return t?.value ?? null
}

function z5(e, t) {
    switch (e?.type) {
        case"object": {
            let n = {}, r = Object.entries(t.definitions);
            for (let [i, o] of r) {
                let s = e.value[i] ?? null;
                n[i] = _e.cast(s, o)
            }
            return {type: "object", value: n}
        }
    }
    return null
}

function B5(e) {
    switch (e?.type) {
        case"responsiveimage":
            return e
    }
    return null
}

function $5(e) {
    switch (e?.type) {
        case"richtext":
            return e
    }
    return null
}

function $C(e) {
    switch (e?.type) {
        case"string":
            return e;
        case"number":
            return {type: "string", value: String(e.value)}
    }
    return null
}

function Uo(e) {
    let t = $C(e);
    return t?.value ?? null
}

var _e = {
    cast(e, t) {
        switch (t.type) {
            case"array":
                return O5(e, t);
            case"boolean":
                return DC(e);
            case"color":
                return M5(e);
            case"date":
                return L5(e);
            case"enum":
                return V5(e);
            case"file":
                return A5(e);
            case"link":
                return D5(e);
            case"number":
                return zC(e);
            case"object":
                return z5(e, t);
            case"responsiveimage":
                return B5(e);
            case"richtext":
                return $5(e);
            case"string":
                return $C(e);
            case"unknown":
                return e;
            default:
                Se(t, "Unsupported cast")
        }
    }, parse(e) {
        return Wm(e) ? {type: "boolean", value: e} : $k(e) ? {
            type: "date",
            value: e.toISOString()
        } : We(e) ? {type: "number", value: e} : xe(e) ? {type: "string", value: e} : Du(e) ? {
            type: "array",
            value: e.map(_e.parse)
        } : null
    }, equal(e, t, n) {
        return e?.type !== t?.type ? !1 : Ni(e, t, n) === 0
    }, lessThan(e, t, n) {
        return e?.type !== t?.type ? !1 : Ni(e, t, n) < 0
    }, lessThanOrEqual(e, t, n) {
        return e?.type !== t?.type ? !1 : Ni(e, t, n) <= 0
    }, greaterThan(e, t, n) {
        return e?.type !== t?.type ? !1 : Ni(e, t, n) > 0
    }, greaterThanOrEqual(e, t, n) {
        return e?.type !== t?.type ? !1 : Ni(e, t, n) >= 0
    }, in(e, t, n) {
        return t?.type !== "array" ? !1 : t.value.some(r => _e.equal(r, e, n))
    }, indexOf(e, t, n) {
        return e?.type !== "array" ? -1 : e.value.findIndex(r => _e.equal(r, t, n))
    }, contains(e, t, n) {
        let r = Uo(e), i = Uo(t);
        return ar(r) || ar(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(), i = i.toLowerCase()), r.includes(i))
    }, startsWith(e, t, n) {
        let r = Uo(e), i = Uo(t);
        return ar(r) || ar(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(), i = i.toLowerCase()), r.startsWith(i))
    }, endsWith(e, t, n) {
        let r = Uo(e), i = Uo(t);
        return ar(r) || ar(i) ? !1 : (n.type === 0 && (r = r.toLowerCase(), i = i.toLowerCase()), r.endsWith(i))
    }, length(e) {
        switch (e?.type) {
            case"array":
                return e.value.length
        }
        return 0
    }, stringify(e) {
        if (e === null) return "null";
        switch (e.type) {
            case"array":
                return `[${e.value.map(_e.stringify).join(", ")}]`;
            case"boolean":
            case"number":
                return String(e.value);
            case"string":
                return `'${e.value}'`;
            case"enum":
                return `'${e.value}' /* Enum */`;
            case"color":
                return `'${e.value}' /* Color */`;
            case"date":
                return `'${e.value}' /* Date */`;
            case"richtext":
                return "RichText";
            case"responsiveimage":
                return "ResponsiveImage";
            case"file":
                return "File";
            case"link":
                return xe(e.value) ? `'${e.value}' /* Link */` : "Link";
            case"object":
                return "Object";
            default:
                Se(e)
        }
    }
};

function Ni(e, t, n) {
    if (ar(e) || ar(t)) return D(e === t), 0;
    switch (e.type) {
        case"array": {
            D(e.type === t.type);
            let r = e.value.length, i = t.value.length;
            if (r < i) return -1;
            if (r > i) return 1;
            for (let o = 0; o < r; o++) {
                let s = e.value[o], a = t.value[o];
                D(!_t(s), "Left item must exist"), D(!_t(a), "Right item must exist");
                let l = Ni(s, a, n);
                if (l !== 0) return l
            }
            return 0
        }
        case"boolean":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"color":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"date": {
            D(e.type === t.type);
            let r = new Date(e.value), i = new Date(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
        case"enum":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"file":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"link": {
            D(e.type === t.type);
            let r = JSON.stringify(e.value), i = JSON.stringify(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
        case"number":
            return D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
        case"object": {
            D(e.type === t.type);
            let r = Object.keys(e.value).sort(), i = Object.keys(t.value).sort();
            if (r.length < i.length) return -1;
            if (r.length > i.length) return 1;
            for (let o = 0; o < r.length; o++) {
                let s = r[o], a = i[o];
                if (D(!_t(s), "Left key must exist"), D(!_t(a), "Left key must exist"), s < a) return -1;
                if (s > a) return 1;
                let l = e.value[s], c = t.value[a];
                D(!_t(l), "Left value must exist"), D(!_t(c), "Right value must exist");
                let u = Ni(l, c, n);
                if (u !== 0) return u
            }
            return 0
        }
        case"responsiveimage": {
            D(e.type === t.type);
            let r = JSON.stringify(e.value), i = JSON.stringify(t.value);
            return r < i ? -1 : r > i ? 1 : 0
        }
        case"richtext": {
            D(e.type === t.type);
            let r = e.value, i = t.value;
            return r < i ? -1 : r > i ? 1 : 0
        }
        case"string": {
            D(e.type === t.type);
            let r = e.value, i = t.value;
            return n.type === 0 && (r = e.value.toLowerCase(), i = t.value.toLowerCase()), r < i ? -1 : r > i ? 1 : 0
        }
        default:
            Se(e)
    }
}

var A1 = {type: "unknown", isNullable: !0};

function N5(e) {
    return Re(e) && $n(e.getHash)
}

function le(e, ...t) {
    let n = t.map(r => N5(r) ? r.getHash() : JSON.stringify(r));
    return `${e}(${n.join(", ")})`
}

var lg = class {
    constructor(e, t) {
        this.data = e, this.pointer = t, R(this, "cached")
    }

    resolve() {
        return this.cached ?? (this.cached = this.data.resolveRichText(this.pointer)), this.cached
    }
}, Zo = "index", NC = class extends Set {
    merge(e) {
        for (let t of e) this.add(t)
    }

    equals(e) {
        if (this === e) return !0;
        if (this.size !== e.size) return !1;
        for (let t of this) if (!e.has(t)) return !1;
        return !0
    }

    subsetOf(e) {
        if (this === e) return !0;
        if (this.size > e.size) return !1;
        for (let t of this) if (!e.has(t)) return !1;
        return !0
    }

    getHash() {
        let e = [];
        for (let t of this) e.push(t.id);
        return e.sort((t, n) => t - n), le(this.name, ...e)
    }
};
var j5 = class {
    constructor(e, t, n) {
        this.id = e, this.name = t, this.data = n, R(this, "indexes", new W5), R(this, "fields", new U)
    }
};
var H5 = class {
    constructor(e, t, n, r, i, o) {
        this.id = e, this.data = t, this.collection = n, this.lookupNodes = r, this.constraint = i, this.ordering = o, R(this, "resolvedFields", new U);
        for (let s in t.schema) for (let a of n.fields) a.name === s && this.resolvedFields.add(a)
    }
}, W5 = class extends NC {
    constructor() {
        super(...arguments), R(this, "name", "Indexes")
    }
};
var nu = class {
    constructor(e, t, n, r) {
        this.id = e, this.name = t, this.definition = n, this.collection = r
    }

    getValue(e) {
        D(this.name, "Can only get value of field with a name");
        let t = e.data[this.name];
        return t?.type === "richtext" ? (D(this.collection, "Rich text field must have a collection"), {
            type: "richtext",
            value: new lg(this.collection.data, t.value)
        }) : t ?? null
    }
}, U = class extends NC {
    constructor() {
        super(...arguments), R(this, "name", "Fields")
    }
};

function U5() {
    return 25
}

function G5() {
    return 100 * 125
}

var wu = 1e3, oe = class {
    constructor(e) {
        this.network = e
    }

    static estimate(e, t) {
        let n = U5(), r = G5(), i = e * n + t / r;
        return new oe(i)
    }

    static max(e, t) {
        let n = Math.max(e.network, t.network);
        return new oe(n)
    }

    static compare(e, t) {
        return e.network < t.network ? -1 : e.network > t.network ? 1 : 0
    }

    add(e) {
        return this.network += e.network, this
    }

    toString() {
        return `${this.network}ms`
    }
};

function jC(e) {
    let t = e.next();
    return D(t.done, "Generator must not yield"), t.value
}

async function Hu(e, t = e.next()) {
    for (; !t.done;) {
        let n = await t.value;
        t = e.next(n)
    }
    return t.value
}

function* Le(e) {
    let t = {}, n = Object.keys(e), r = [];
    for (let i of n) {
        let o = e[i];
        if (Nk(o)) {
            let s = o.next();
            s.done ? t[i] = s.value : r.push(Hu(o, s).then(a => {
                t[i] = a
            }))
        } else t[i] = o
    }
    return r.length > 0 && (yield Promise.all(r)), t
}

function* Su(e) {
    let t = [], n = e.keys(), r = [];
    for (let i of n) {
        let o = e[i];
        if (Nk(o)) {
            let s = o.next();
            s.done ? t[i] = s.value : r.push(Hu(o, s).then(a => {
                t[i] = a
            }))
        } else t[i] = o
    }
    return r.length > 0 && (yield Promise.all(r)), t
}

var fn = class {
    constructor(e, t) {
        this.ordering = e, this.resolvedFields = t
    }

    getHash() {
        return le("RequiredProps", this.ordering, this.resolvedFields)
    }

    get isMinimal() {
        return this.ordering.length === 0 && this.resolvedFields.size === 0
    }

    canProvide(e) {
        return this.canProvideOrdering(e) && this.canProvideResolvedFields(e)
    }

    canProvideOrdering(e) {
        return this.ordering.length === 0 ? !0 : e.canProvideOrdering(this.ordering)
    }

    canProvideResolvedFields(e) {
        return this.resolvedFields.size === 0 ? !0 : e.canProvideResolvedFields(this.resolvedFields)
    }
}, dr = class {
    constructor() {
        R(this, "pointers", new Map), R(this, "values", new Map)
    }

    getKey() {
        let e = this.pointers.values();
        return Array.from(e).join("-")
    }

    addValue(e, t) {
        this.values.set(e, t)
    }

    getValue(e) {
        return this.values.get(e) ?? null
    }

    mergeValues(e) {
        for (let [t, n] of e.values) this.addValue(t, n)
    }

    addPointer(e, t) {
        this.pointers.set(e, t)
    }

    getPointer(e) {
        return this.pointers.get(e)
    }

    mergePointers(e) {
        for (let [t, n] of e.pointers) this.addPointer(t, n)
    }

    merge(e) {
        this.mergeValues(e), this.mergePointers(e)
    }
}, lr = class {
    constructor(e, t = []) {
        this.fields = e, this.tuples = t
    }

    push(e) {
        this.tuples.push(e)
    }

    filter(e) {
        let t = this.tuples.filter(e);
        return new lr(this.fields, t)
    }

    map(e, t) {
        let n = this.tuples.map(t);
        return new lr(e, n)
    }

    sort(e) {
        let t = Array.from(this.tuples).sort(e);
        return new lr(this.fields, t)
    }

    slice(e, t) {
        let n = this.tuples.slice(e, t);
        return new lr(this.fields, n)
    }

    union(e) {
        let t = new U;
        for (let i of this.fields) e.fields.has(i) && t.add(i);
        let n = new Set, r = new lr(t);
        for (let i of this.tuples) {
            let o = i.getKey();
            n.add(o), r.push(i)
        }
        for (let i of e.tuples) {
            let o = i.getKey();
            n.has(o) || r.push(i)
        }
        return r
    }

    intersection(e) {
        let t = new U;
        for (let i of this.fields) e.fields.has(i) && t.add(i);
        let n = new Set, r = new lr(t);
        for (let i of this.tuples) {
            let o = i.getKey();
            n.add(o)
        }
        for (let i of e.tuples) {
            let o = i.getKey();
            n.has(o) && r.push(i)
        }
        return r
    }
}, HC = class {
    constructor(e) {
        this.isSynchronous = e
    }
}, Nn = class extends HC {
    constructor() {
        super(...arguments), R(this, "group")
    }

    getGroup() {
        return D(this.group, "Node must be in a group"), this.group
    }

    setGroup(e) {
        D(!this.group, "Node is already in a group"), this.group = e
    }

    evaluateSync() {
        let e = this.evaluate(void 0);
        return jC(e)
    }

    evaluateAsync() {
        let e = this.evaluate(void 0);
        return Hu(e)
    }
}, Em = class {
    constructor(e, t) {
        this.input = e, this.field = t
    }

    getHash() {
        return le("ProjectionField", this.input, this.field.id)
    }
}, Fm = class extends Nn {
    constructor(e, t, n) {
        let r = e.isSynchronous;
        for (let i of t) r && (r = i.input.isSynchronous);
        super(r), this.input = e, this.projections = t, this.passthrough = n, R(this, "inputGroup", this.input.getGroup())
    }

    getHash() {
        return le("RelationalProject", this.inputGroup.id, ...this.projections, this.passthrough)
    }

    getOutputFields() {
        let e = new U;
        e.merge(this.passthrough);
        for (let t of this.projections) e.add(t.field);
        return e
    }

    canProvideOrdering() {
        return !0
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new U(e.resolvedFields);
        for (let n of this.projections) t.merge(n.input.referencedFields), t.delete(n.field);
        return new fn(e.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n), i = new oe(0);
        for (let o of this.projections) {
            let s = o.input.optimize(e);
            i = oe.max(i, s)
        }
        return new oe(0).add(oe.max(r, i))
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t), r = this.projections.map(i => {
            let o = i.input.getOptimized();
            return new Em(o, i.field)
        });
        return new Fm(n, r, this.passthrough)
    }

    * evaluate(e) {
        let t = this.getOutputFields(), n = yield* this.input.evaluate(e),
            r = yield* Su(n.tuples.map(i => Su(this.projections.map(o => Le({
                field: o.field,
                value: o.input.evaluate(e, i)
            })))));
        return n.map(t, (i, o) => {
            let s = new dr;
            s.mergePointers(i);
            for (let l of this.passthrough) {
                let c = i.getValue(l);
                s.addValue(l, c)
            }
            let a = r[o];
            D(a, "Projections must exist");
            for (let {field: l, value: c} of a) s.addValue(l, c);
            return s
        })
    }
}, ns = {type: 0}, Xe = class extends HC {
    constructor(e, t, n) {
        super(n), this.referencedFields = e, this.referencedOuterFields = t, this.isSynchronous = n
    }

    evaluateSync() {
        let e = this.evaluate(void 0, void 0);
        return jC(e)
    }

    evaluateAsync() {
        let e = this.evaluate(void 0, void 0);
        return Hu(e)
    }
}, q5 = {type: 0}, cg = class {
    constructor(e, t) {
        this.when = e, this.then = t
    }

    getHash() {
        return le("CaseCondition", this.when, this.then)
    }
}, WC = class extends Xe {
    constructor(e, t, n) {
        let r = new U, i = new U, o = !0;
        e && (r.merge(e.referencedFields), i.merge(e.referencedOuterFields), o && (o = e.isSynchronous));
        for (let {
            when: s,
            then: a
        } of t) r.merge(s.referencedFields), i.merge(s.referencedOuterFields), o && (o = s.isSynchronous), r.merge(a.referencedFields), i.merge(a.referencedOuterFields), o && (o = a.isSynchronous);
        n && (r.merge(n.referencedFields), i.merge(n.referencedOuterFields), o && (o = n.isSynchronous)), super(r, i, o), this.input = e, this.conditions = t, this.otherwise = n, R(this, "definition", {
            type: "unknown",
            isNullable: !0
        })
    }

    getHash() {
        return le("ScalarCase", this.input, ...this.conditions, this.otherwise)
    }

    toString() {
        let e = "CASE";
        this.input && (e = `${e} ${this.input}`);
        for (let {when: t, then: n} of this.conditions) e = `${e} WHEN ${t} THEN ${n}`;
        return this.otherwise && (e = `${e} ELSE ${this.otherwise}`), `${e} END`
    }

    optimize(e) {
        var t, n;
        (t = this.input) == null || t.optimize(e);
        for (let r of this.conditions) r.when.optimize(e), r.then.optimize(e);
        return (n = this.otherwise) == null || n.optimize(e), new oe(0)
    }

    getOptimized() {
        var e, t;
        let n = (e = this.input) == null ? void 0 : e.getOptimized(), r = this.conditions.map(o => {
            let s = o.when.getOptimized(), a = o.then.getOptimized();
            return new cg(s, a)
        }), i = (t = this.otherwise) == null ? void 0 : t.getOptimized();
        return new WC(n, r, i)
    }

    * evaluate(e, t) {
        var n, r;
        let {
            input: i,
            conditions: o,
            otherwise: s
        } = yield* Le({
            input: ((n = this.input) == null ? void 0 : n.evaluate(e, t)) ?? null,
            conditions: Su(this.conditions.map(a => Le({when: a.when.evaluate(e, t), then: a.then.evaluate(e, t)}))),
            otherwise: ((r = this.otherwise) == null ? void 0 : r.evaluate(e, t)) ?? null
        });
        if (this.input) {
            for (let {when: a, then: l} of o) if (_e.equal(i, a, q5)) return l
        } else for (let {when: a, then: l} of o) if (Vr(a)) return l;
        return s
    }
}, cm = class {
    constructor(e, t = "asc") {
        this.field = e, this.direction = t
    }

    getHash() {
        return le("OrderingField", this.field.id, this.direction)
    }
}, cr = class {
    constructor(e) {
        R(this, "fields", []), e && this.merge(e)
    }

    get length() {
        return this.fields.length
    }

    getHash() {
        return le("Ordering", ...this.fields)
    }

    push(e) {
        this.fields.push(e)
    }

    merge(e) {
        this.fields.push(...e.fields)
    }

    equals(e) {
        return this === e ? !0 : this.length !== e.length ? !1 : this.getHash() === e.getHash()
    }

    providedByFields(e) {
        for (let {field: t} of this.fields) if (!e.has(t) && t.name !== Zo) return !1;
        return !0
    }
}, Pm = class {
    constructor(e) {
        this.parent = e, R(this, "node"), R(this, "ordering"), R(this, "fields", [])
    }

    takeNode() {
        let e = this.node;
        return D(e, "Node is missing"), this.node = void 0, e
    }

    setNode(e) {
        D(!this.node, "Node already set"), this.node = e
    }

    setOrdering(e) {
        this.ordering = e
    }

    push() {
        return new Pm(this)
    }

    replace() {
        return new Pm(this.parent)
    }

    addField(e) {
        this.fields.push(e)
    }

    addFieldsFromScope(e) {
        for (let t of e.fields) this.addField(t)
    }

    resolveField(e, t) {
        var n;
        let r = [];
        for (let i of this.fields) i.name === e && (t && i.collectionName !== t || r.push(i));
        if (r.length === 1) return r[0];
        if (r.length > 1) throw new Error("Ambiguous fields");
        return (n = this.parent) == null ? void 0 : n.resolveField(e, t)
    }

    has(e) {
        var t;
        return this.fields.includes(e) ? !0 : ((t = this.parent) == null ? void 0 : t.has(e)) ?? !1
    }

    getRequiredOrdering() {
        return this.ordering ?? new cr
    }

    getRequiredResolvedFields() {
        let e = new U;
        for (let {field: t} of this.fields) t.collection && e.add(t);
        return e
    }

    getRequiredProps() {
        let e = this.getRequiredOrdering(), t = this.getRequiredResolvedFields();
        return new fn(e, t)
    }

    getNamedFields() {
        let e = {};
        for (let {name: t, field: n} of this.fields) e[t] = n;
        return e
    }

    getSingleField() {
        D(this.fields.length === 1, "Scope must contain exactly one field");
        let e = this.fields[0];
        return D(e, "Field must exist"), e.field
    }
}, X5 = class {
    constructor(e, t, n) {
        this.normalizer = e, this.query = t, this.locale = n, R(this, "collectionId", 0), R(this, "indexId", 0), R(this, "fieldId", 0), R(this, "subqueries", [])
    }

    build() {
        let e = new Pm;
        return this.buildQuery(e, this.query)
    }

    buildQuery(e, t) {
        let n = {type: "Select", ...t};
        return this.buildSelect(e, n)
    }

    buildSelect(e, t) {
        let n = this.buildFrom(e, t.from), r = n.getRequiredOrdering();
        if (t.where) {
            let l = n.takeNode(), c = this.buildExpression(n, t.where), u = this.normalizer.newRelationalFilter(l, c);
            n.setNode(u)
        }
        let i = [], o = new U, s;
        if (t.orderBy) {
            s = new cr;
            for (let l of t.orderBy) if (l.type === "Identifier") {
                let c = n.resolveField(l.name, l.collection);
                if (_t(c)) continue;
                o.add(c.field);
                let u = new cm(c.field, l.direction);
                s.push(u)
            } else {
                let c = this.buildExpression(n, l), u = this.fieldId++, f = new nu(u, void 0, c.definition, void 0),
                    d = new Em(c, f);
                i.push(d);
                let m = new cm(f, l.direction);
                s.push(m)
            }
            s.merge(r)
        } else s = r;
        let a = this.buildSelectList(n, t.select, o, i);
        if (a.setOrdering(s), t.offset) {
            let l = a.takeNode(), c = this.buildExpression(e, t.offset),
                u = this.normalizer.newRelationalOffset(l, c, s);
            a.setNode(u)
        }
        if (t.limit) {
            let l = a.takeNode(), c = this.buildExpression(e, t.limit), u = this.normalizer.newRelationalLimit(l, c, s);
            a.setNode(u)
        }
        return a
    }

    buildSelectList(e, t, n, r) {
        let i = e.push(), o = new U(n), s = [...r];
        for (let c of t) if (c.type === "Identifier") {
            let u = e.resolveField(c.name, c.collection);
            if (_t(u)) continue;
            o.add(u.field), i.addField({...u, name: c.alias ?? u.name})
        } else {
            let u = this.buildExpression(e, c);
            D(c.alias, "Subqueries should have an alias");
            let f = this.fieldId++, d = c.alias, m = new nu(f, d, u.definition, void 0), v = new Em(u, m);
            s.push(v), i.addField({field: m, name: d})
        }
        let a = e.takeNode(), l = this.normalizer.newRelationalProject(a, s, o);
        return i.setNode(l), i
    }

    buildFrom(e, t) {
        switch (t.type) {
            case"Collection":
                return this.buildCollection(e, t);
            case"LeftJoin":
                return this.buildJoin(e, t);
            default:
                Se(t, "Unsupported from type")
        }
    }

    buildCollection(e, t) {
        let n = e.push(), r = Y5(t.data, this.locale), i = t.alias, o = this.collectionId++, s = new j5(o, i, r);
        for (let [l, c] of Object.entries(r.schema)) {
            let u = this.fieldId++, f = new nu(u, l, c, s);
            n.addField({field: f, name: l, collectionName: i}), s.fields.add(f)
        }
        {
            let l = {type: "number", isNullable: !1}, c = this.fieldId++, u = new nu(c, Zo, l, s);
            n.addField({field: u, name: Zo, collectionName: i});
            let f = new cr, d = new cm(u);
            f.push(d), n.setOrdering(f)
        }
        for (let l of r.indexes) {
            let c = [];
            for (let v of l.fields) {
                let g = this.buildExpression(n, v);
                c.push(g)
            }
            let u;
            l.where && (u = this.buildExpression(n, l.where));
            let f = new cr, d = this.indexId++, m = new H5(d, l, s, c, u, f);
            s.indexes.add(m)
        }
        let a = this.normalizer.newRelationalScan(s);
        return n.setNode(a), n
    }

    buildJoin(e, t) {
        let n = this.buildFrom(e, t.left), r = this.buildFrom(e, t.right), i = new cr, o = n.getRequiredOrdering();
        i.merge(o);
        let s = r.getRequiredOrdering();
        i.merge(s);
        let a = e.push();
        a.addFieldsFromScope(n), a.addFieldsFromScope(r), a.setOrdering(i);
        let l = this.buildExpression(a, t.constraint), c = n.takeNode(), u = r.takeNode(), f;
        switch (t.type) {
            case"LeftJoin":
                f = this.normalizer.newRelationalLeftJoin(c, u, l);
                break;
            default:
                Se(t.type, "Unsupported join type")
        }
        return a.setNode(f), a
    }

    buildExpression(e, t) {
        switch (t.type) {
            case"Identifier":
                return this.buildIdentifier(e, t);
            case"LiteralValue":
                return this.buildLiteralValue(t);
            case"FunctionCall":
                return this.buildFunctionCall(e, t);
            case"Case":
                return this.buildCase(e, t);
            case"UnaryOperation":
                return this.buildUnaryOperation(e, t);
            case"BinaryOperation":
                return this.buildBinaryOperation(e, t);
            case"TypeCast":
                return this.buildTypeCast(e, t);
            case"Select":
                throw new Error("Subqueries are only supported inside subquery function calls");
            default:
                Se(t, "Unsupported expression")
        }
    }

    buildIdentifier(e, t) {
        let n = e.resolveField(t.name, t.collection);
        if (n) {
            let r = !1;
            for (let i of this.subqueries) r ? i.referencedOuterFields.add(n.field) : (r = i.inScope.has(n), r && i.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, r)
        }
        return this.normalizer.newScalarConstant(A1, null)
    }

    buildLiteralValue(e) {
        let t = _e.parse(e.value);
        return this.normalizer.newScalarConstant(A1, t)
    }

    buildFunctionCall(e, t) {
        let n = r => {
            let i = t.arguments[r];
            return D(i, "Missing argument"), this.buildExpression(e, i)
        };
        switch (t.functionName) {
            case"CONTAINS": {
                let r = n(0), i = n(1);
                return this.normalizer.newScalarContains(r, i)
            }
            case"STARTS_WITH": {
                let r = n(0), i = n(1);
                return this.normalizer.newScalarStartsWith(r, i)
            }
            case"ENDS_WITH": {
                let r = n(0), i = n(1);
                return this.normalizer.newScalarEndsWith(r, i)
            }
            case"LENGTH": {
                let r = n(0);
                return this.normalizer.newScalarLength(r)
            }
            case"INDEX_OF": {
                let r = n(0), i = n(1);
                return this.normalizer.newScalarIndexOf(r, i)
            }
            case"ARRAY": {
                let r = t.arguments[0];
                return D(r, "Missing argument"), D(r.type === "Select", "Subqueries require a select expression"), this.buildSubqueryArray(e, r)
            }
            case"FLAT_ARRAY": {
                let r = t.arguments[0];
                return D(r, "Missing argument"), D(r.type === "Select", "Subqueries require a select expression"), this.buildSubqueryFlatArray(e, r)
            }
            default:
                throw new Error("Unsupported function name")
        }
    }

    buildSubqueryArray(e, t) {
        try {
            let n = new D1(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t), i = r.takeNode(), o = r.getNamedFields(), s = r.getRequiredOrdering(),
                a = n.referencedFields, l = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, o, s, a, l)
        } finally {
            this.subqueries.pop()
        }
    }

    buildSubqueryFlatArray(e, t) {
        try {
            let n = new D1(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t), i = r.takeNode(), o = r.getSingleField(), s = r.getRequiredOrdering(),
                a = n.referencedFields, l = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, o, s, a, l)
        } finally {
            this.subqueries.pop()
        }
    }

    buildCase(e, t) {
        let n;
        t.value && (n = this.buildExpression(e, t.value));
        let r = t.conditions.map(o => {
            let s = this.buildExpression(e, o.when), a = this.buildExpression(e, o.then);
            return new cg(s, a)
        }), i;
        return t.else && (i = this.buildExpression(e, t.else)), this.normalizer.newScalarCase(n, r, i)
    }

    buildUnaryOperation(e, t) {
        let n = this.buildExpression(e, t.value);
        switch (t.operator) {
            case"not":
                return this.normalizer.newScalarNot(n);
            default:
                Se(t.operator, "Unsupported unary operator")
        }
    }

    buildBinaryOperation(e, t) {
        let n = this.buildExpression(e, t.left), r = this.buildExpression(e, t.right);
        switch (t.operator) {
            case"and":
                return this.normalizer.newScalarAnd(n, r);
            case"or":
                return this.normalizer.newScalarOr(n, r);
            case"==":
                return this.normalizer.newScalarEquals(n, r);
            case"!=":
                return this.normalizer.newScalarNotEquals(n, r);
            case"<":
                return this.normalizer.newScalarLessThan(n, r);
            case"<=":
                return this.normalizer.newScalarLessThanOrEqual(n, r);
            case">":
                return this.normalizer.newScalarGreaterThan(n, r);
            case">=":
                return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case"in":
                return this.normalizer.newScalarIn(n, r);
            default:
                Se(t.operator, "Unsupported binary operator")
        }
    }

    buildTypeCast(e, t) {
        let n = this.buildExpression(e, t.value);
        switch (t.dataType) {
            case"BOOLEAN": {
                let r = {type: "boolean", isNullable: !0};
                return this.normalizer.newScalarCast(n, r)
            }
            case"DATE": {
                let r = {type: "date", isNullable: !0};
                return this.normalizer.newScalarCast(n, r)
            }
            case"NUMBER": {
                let r = {type: "number", isNullable: !0};
                return this.normalizer.newScalarCast(n, r)
            }
            case"STRING": {
                let r = {type: "string", isNullable: !0};
                return this.normalizer.newScalarCast(n, r)
            }
            default:
                throw new Error("Unsupported data type")
        }
    }
};

function Y5(e, t) {
    if (P5(e)) return new I5(e, t);
    if (AC(e)) return e;
    if (_5(e)) {
        for (; t;) {
            let n = e.collectionByLocaleId[t.id];
            if (n) return n;
            t = t.fallback
        }
        return e.collectionByLocaleId.default
    }
    Se(e, "Unsupported collection type")
}

var D1 = class {
    constructor(e) {
        this.inScope = e, R(this, "referencedFields", new U), R(this, "referencedOuterFields", new U)
    }
}, ku = class extends Nn {
    constructor(e, t) {
        super(e.isSynchronous && t.isSynchronous), this.input = e, this.predicate = t, R(this, "inputGroup", this.input.getGroup())
    }

    getHash() {
        return le("RelationalFilter", this.inputGroup.id, this.predicate)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering() {
        return !0
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new U(e.resolvedFields);
        return t.merge(this.predicate.referencedFields), new fn(e.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n), i = this.predicate.optimize(e);
        return new oe(0).add(oe.max(r, i))
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t), r = this.predicate.getOptimized();
        return new ku(n, r)
    }

    * evaluate(e) {
        let t = yield* this.input.evaluate(e), n = yield* Su(t.tuples.map(r => this.predicate.evaluate(e, r)));
        return t.filter((r, i) => {
            let o = n[i] ?? null;
            return Vr(o)
        })
    }
}, Rn = class extends Nn {
    constructor(e, t) {
        super(!1), this.index = e, this.query = t
    }

    getHash() {
        return le("RelationalIndexLookup", this.index.id, ...this.query)
    }

    getOutputFields() {
        return this.index.collection.fields
    }

    canProvideOrdering(e) {
        return e.equals(this.index.ordering)
    }

    canProvideResolvedFields(e) {
        return e.subsetOf(this.index.resolvedFields)
    }

    optimize() {
        let e = this.query.every(t => t.type === "All");
        return oe.estimate(1, e ? 100 * wu : 50 * wu)
    }

    getOptimized() {
        return new Rn(this.index, this.query)
    }

    * evaluate() {
        let e = this.index, t = e.collection, n = this.getOutputFields(),
            i = (yield e.data.lookupItems(this.query)).map(o => {
                let s = new dr;
                for (let a of e.resolvedFields) {
                    let l = a.getValue(o);
                    s.addPointer(t, o.pointer), s.addValue(a, l)
                }
                return s
            });
        return new lr(n, i)
    }
}, UC = class extends Nn {
    constructor(e, t) {
        super(e.isSynchronous && t.isSynchronous), this.left = e, this.right = t, R(this, "leftGroup", this.left.getGroup()), R(this, "rightGroup", this.right.getGroup())
    }

    getHash() {
        return le("RelationalIntersection", this.leftGroup.id, this.rightGroup.id)
    }

    getOutputFields() {
        let e = new U, t = this.leftGroup.relational.outputFields, n = this.rightGroup.relational.outputFields;
        for (let r of t) n.has(r) && e.add(r);
        return e
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields() {
        return !0
    }

    getChildRequiredProps(e) {
        let t = new cr;
        return new fn(t, e.resolvedFields)
    }

    optimize(e, t) {
        let n = this.getChildRequiredProps(t), r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t), o = e.optimizeGroup(this.rightGroup, i);
        return oe.max(r, o)
    }

    getOptimized(e) {
        let t = this.getChildRequiredProps(e), n = this.leftGroup.getOptimized(t), r = this.getChildRequiredProps(e),
            i = this.rightGroup.getOptimized(r);
        return new UC(n, i)
    }

    * evaluate(e) {
        let {left: t, right: n} = yield* Le({left: this.left.evaluate(e), right: this.right.evaluate(e)});
        return t.intersection(n)
    }
}, Jo = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarEquals", this.left, this.right)
    }

    toString() {
        return `${this.left} == ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Jo(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: _e.equal(n, r, ns)}
    }
}, Cu = class extends Nn {
    constructor(e, t, n) {
        super(e.isSynchronous && t.isSynchronous && n.isSynchronous), this.left = e, this.right = t, this.constraint = n, R(this, "leftGroup", this.left.getGroup()), R(this, "rightGroup", this.right.getGroup())
    }

    getHash() {
        return le("RelationalLeftJoin", this.leftGroup.id, this.rightGroup.id, this.constraint)
    }

    getOutputFields() {
        let e = new U;
        return e.merge(this.leftGroup.relational.outputFields), e.merge(this.rightGroup.relational.outputFields), e
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields() {
        return !0
    }

    getChildRequiredProps(e, t) {
        let n = new U, r = e.relational.outputFields;
        for (let o of t.resolvedFields) r.has(o) && n.add(o);
        for (let o of this.constraint.referencedFields) r.has(o) && n.add(o);
        let i = new cr;
        return new fn(i, n)
    }

    optimize(e, t) {
        let n = this.getChildRequiredProps(this.leftGroup, t), r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t), o = e.optimizeGroup(this.rightGroup, i),
            s = this.constraint.optimize(e);
        return oe.max(oe.max(r, o), s)
    }

    getOptimized(e) {
        let t = this.getChildRequiredProps(this.leftGroup, e), n = this.leftGroup.getOptimized(t),
            r = this.getChildRequiredProps(this.rightGroup, e), i = this.rightGroup.getOptimized(r),
            o = this.constraint.getOptimized();
        return new Cu(n, i, o)
    }

    * evaluateScalarEquals(e, t, n) {
        let {left: r, right: i} = yield* Le({left: this.left.evaluate(n), right: this.right.evaluate(n)}), o = new Map;
        for (let s of i.tuples) {
            let a = yield* t.right.evaluate(n, s), l = JSON.stringify(a?.value ?? null), c = o.get(l) ?? [];
            c.push(s), o.set(l, c)
        }
        for (let s of r.tuples) {
            let a = yield* t.left.evaluate(n, s), l = JSON.stringify(a?.value ?? null), c = o.get(l) ?? [];
            if (c.length === 0) e.push(s); else for (let u of c) {
                let f = new dr;
                f.merge(s), f.merge(u), e.push(f)
            }
        }
        return e
    }

    * evaluate(e) {
        let t = this.getOutputFields(), n = new lr(t);
        if (this.constraint instanceof Jo) return yield* this.evaluateScalarEquals(n.tuples, this.constraint, e), n;
        let {left: r, right: i} = yield* Le({left: this.left.evaluate(e), right: this.right.evaluate(e)});
        for (let o of r.tuples) {
            let s = !1;
            for (let a of i.tuples) {
                let l = new dr;
                l.merge(o), l.merge(a);
                let c = yield* this.constraint.evaluate(e, l);
                Vr(c) && (n.push(l), s = !0)
            }
            s || n.push(o)
        }
        return n
    }
}, ug = class extends Nn {
    constructor(e, t, n) {
        super(e.isSynchronous && t.isSynchronous && n.isSynchronous), this.left = e, this.right = t, this.constraint = n, R(this, "leftGroup", this.left.getGroup()), R(this, "rightGroup", this.right.getGroup())
    }

    getHash() {
        return le("RelationalRightJoin", this.leftGroup.id, this.rightGroup.id, this.constraint)
    }

    getOutputFields() {
        let e = new U;
        return e.merge(this.leftGroup.relational.outputFields), e.merge(this.rightGroup.relational.outputFields), e
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields() {
        return !0
    }

    getChildRequiredProps(e, t) {
        let n = new U, r = e.relational.outputFields;
        for (let o of t.resolvedFields) r.has(o) && n.add(o);
        for (let o of this.constraint.referencedFields) r.has(o) && n.add(o);
        let i = new cr;
        return new fn(i, n)
    }

    optimize(e, t) {
        let n = this.getChildRequiredProps(this.leftGroup, t), r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t), o = e.optimizeGroup(this.rightGroup, i),
            s = this.constraint.optimize(e);
        return oe.max(oe.max(r, o), s)
    }

    getOptimized(e) {
        let t = this.getChildRequiredProps(this.leftGroup, e), n = this.leftGroup.getOptimized(t),
            r = this.getChildRequiredProps(this.rightGroup, e), i = this.rightGroup.getOptimized(r),
            o = this.constraint.getOptimized();
        return new ug(n, i, o)
    }

    * evaluateScalarEquals(e, t, n) {
        let {left: r, right: i} = yield* Le({left: this.left.evaluate(n), right: this.right.evaluate(n)}), o = new Map;
        for (let s of r.tuples) {
            let a = yield* t.left.evaluate(n, s), l = JSON.stringify(a?.value ?? null), c = o.get(l) ?? [];
            c.push(s), o.set(l, c)
        }
        for (let s of i.tuples) {
            let a = yield* t.right.evaluate(n, s), l = JSON.stringify(a?.value ?? null), c = o.get(l) ?? [];
            if (c.length === 0) e.push(s); else for (let u of c) {
                let f = new dr;
                f.merge(s), f.merge(u), e.push(f)
            }
        }
        return e
    }

    * evaluate(e) {
        let t = this.getOutputFields(), n = new lr(t);
        if (this.constraint instanceof Jo) return yield* this.evaluateScalarEquals(n.tuples, this.constraint, e), n;
        let {left: r, right: i} = yield* Le({left: this.left.evaluate(e), right: this.right.evaluate(e)});
        for (let o of i.tuples) {
            let s = !1;
            for (let a of r.tuples) {
                let l = new dr;
                l.merge(o), l.merge(a);
                let c = yield* this.constraint.evaluate(e, l);
                Vr(c) && (n.push(l), s = !0)
            }
            s || n.push(o)
        }
        return n
    }
}, Tu = class extends Nn {
    constructor(e) {
        super(!1), this.collection = e
    }

    getHash() {
        return le("RelationalScan", this.collection.id)
    }

    getOutputFields() {
        return this.collection.fields
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields(e) {
        return e.subsetOf(this.collection.fields)
    }

    optimize() {
        return oe.estimate(1, 200 * wu)
    }

    getOptimized() {
        return new Tu(this.collection)
    }

    * evaluate() {
        let e = this.collection, t = this.getOutputFields(), r = (yield e.data.scanItems()).map(i => {
            let o = new dr;
            for (let s of t) {
                let a = s.getValue(i);
                o.addPointer(e, i.pointer), o.addValue(s, a)
            }
            return o
        });
        return new lr(t, r)
    }
}, GC = class extends Nn {
    constructor(e, t) {
        super(e.isSynchronous && t.isSynchronous), this.left = e, this.right = t, R(this, "leftGroup", this.left.getGroup()), R(this, "rightGroup", this.right.getGroup())
    }

    getHash() {
        return le("RelationalUnion", this.leftGroup.id, this.rightGroup.id)
    }

    getOutputFields() {
        let e = new U, t = this.leftGroup.relational.outputFields, n = this.rightGroup.relational.outputFields;
        for (let r of t) n.has(r) && e.add(r);
        return e
    }

    canProvideOrdering() {
        return !1
    }

    canProvideResolvedFields() {
        return !0
    }

    getChildRequiredProps(e) {
        let t = new cr;
        return new fn(t, e.resolvedFields)
    }

    optimize(e, t) {
        let n = this.getChildRequiredProps(t), r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t), o = e.optimizeGroup(this.rightGroup, i);
        return oe.max(r, o)
    }

    getOptimized(e) {
        let t = this.getChildRequiredProps(e), n = this.leftGroup.getOptimized(t), r = this.getChildRequiredProps(e),
            i = this.rightGroup.getOptimized(r);
        return new GC(n, i)
    }

    * evaluate(e) {
        let {left: t, right: n} = yield* Le({left: this.left.evaluate(e), right: this.right.evaluate(e)});
        return t.union(n)
    }
}, Ru = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarAnd", this.left, this.right)
    }

    toString() {
        return `${this.left} && ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Ru(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: Vr(n) && Vr(r)}
    }
}, zn = class extends Xe {
    constructor(e, t) {
        let n = new U, r = new U;
        super(n, r, !0), this.definition = e, this.value = t
    }

    getHash() {
        return le("ScalarConstant", this.definition, this.value)
    }

    toString() {
        return _e.stringify(this.value)
    }

    optimize() {
        return new oe(0)
    }

    getOptimized() {
        return this
    }

    * evaluate() {
        return this.value
    }
}, K5 = {type: 0}, fg = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.source = e, this.target = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarContains", this.source, this.target)
    }

    toString() {
        return `CONTAINS(${this.source}, ${this.target})`
    }

    optimize(e) {
        let t = this.source.optimize(e), n = this.target.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.source.getOptimized(), t = this.target.getOptimized();
        return new fg(e, t)
    }

    * evaluate(e, t) {
        let {source: n, target: r} = yield* Le({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t)
        });
        return {type: "boolean", value: _e.contains(n, r, K5)}
    }
}, Q5 = {type: 0}, dg = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.source = e, this.target = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarEndsWith", this.source, this.target)
    }

    toString() {
        return `ENDS_WITH(${this.source}, ${this.target})`
    }

    optimize(e) {
        let t = this.source.optimize(e), n = this.target.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.source.getOptimized(), t = this.target.getOptimized();
        return new dg(e, t)
    }

    * evaluate(e, t) {
        let {source: n, target: r} = yield* Le({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t)
        });
        return {type: "boolean", value: _e.endsWith(n, r, Q5)}
    }
}, Eu = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarGreaterThan", this.left, this.right)
    }

    toString() {
        return `${this.left} > ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Eu(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: _e.greaterThan(n, r, ns)}
    }
}, Fu = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarGreaterThanOrEqual", this.left, this.right)
    }

    toString() {
        return `${this.left} >= ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Fu(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: _e.greaterThanOrEqual(n, r, ns)}
    }
}, Pu = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarLessThan", this.left, this.right)
    }

    toString() {
        return `${this.left} < ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Pu(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: _e.lessThan(n, r, ns)}
    }
}, _u = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarLessThanOrEqual", this.left, this.right)
    }

    toString() {
        return `${this.left} <= ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new _u(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: _e.lessThanOrEqual(n, r, ns)}
    }
}, Iu = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarNotEquals", this.left, this.right)
    }

    toString() {
        return `${this.left} != ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Iu(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: !_e.equal(n, r, ns)}
    }
}, Ou = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarOr", this.left, this.right)
    }

    toString() {
        return `${this.left} || ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new Ou(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: Vr(n) || Vr(r)}
    }
}, Z5 = {type: 0}, hg = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.source = e, this.target = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarStartsWith", this.source, this.target)
    }

    toString() {
        return `STARTS_WITH(${this.source}, ${this.target})`
    }

    optimize(e) {
        let t = this.source.optimize(e), n = this.target.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.source.getOptimized(), t = this.target.getOptimized();
        return new hg(e, t)
    }

    * evaluate(e, t) {
        let {source: n, target: r} = yield* Le({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t)
        });
        return {type: "boolean", value: _e.startsWith(n, r, Z5)}
    }
}, J5 = class {
    constructor(e) {
        this.normalizer = e, R(this, "memo", this.normalizer.memo)
    }

    explore(e) {
        let t = e.getGroup();
        if (e instanceof Cu) {
            let n = new ug(e.left, e.right, e.constraint);
            this.memo.addRelational(n, t)
        }
        if (e instanceof ku) {
            if (e.predicate instanceof Ru) {
                let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                    r = this.normalizer.newRelationalFilter(e.input, e.predicate.right), i = new UC(n, r);
                this.memo.addRelational(i, t)
            }
            if (e.predicate instanceof Ou) {
                let n = this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                    r = this.normalizer.newRelationalFilter(e.input, e.predicate.right), i = new GC(n, r);
                this.memo.addRelational(i, t)
            }
        }
        if (e instanceof Tu) for (let n of e.collection.indexes) {
            if (n.constraint) continue;
            let r = sr(n.lookupNodes.length), i = new Rn(n, r);
            this.memo.addRelational(i, t)
        }
        if (e instanceof ku) {
            for (let n of e.inputGroup.nodes) if (n instanceof Tu) for (let r of n.collection.indexes) {
                if (e.predicate instanceof Jo && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof zn && r.data.supportedLookupTypes.includes("Equals")) {
                    let i = sr(r.lookupNodes.length);
                    i[0] = {type: "Equals", value: e.predicate.right.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Iu && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof zn && r.data.supportedLookupTypes.includes("NotEquals")) {
                    let i = sr(r.lookupNodes.length);
                    i[0] = {type: "NotEquals", value: e.predicate.right.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Pu && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof zn && r.data.supportedLookupTypes.includes("LessThan")) {
                    let i = sr(r.lookupNodes.length);
                    i[0] = {type: "LessThan", value: e.predicate.right.value, inclusive: !1};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof _u && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof zn && r.data.supportedLookupTypes.includes("LessThan")) {
                    let i = sr(r.lookupNodes.length);
                    i[0] = {type: "LessThan", value: e.predicate.right.value, inclusive: !0};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Eu && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof zn && r.data.supportedLookupTypes.includes("GreaterThan")) {
                    let i = sr(r.lookupNodes.length);
                    i[0] = {type: "GreaterThan", value: e.predicate.right.value, inclusive: !1};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof Fu && e.predicate.left === r.lookupNodes[0] && e.predicate.right instanceof zn && r.data.supportedLookupTypes.includes("GreaterThan")) {
                    let i = sr(r.lookupNodes.length);
                    i[0] = {type: "GreaterThan", value: e.predicate.right.value, inclusive: !0};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof fg && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof zn && r.data.supportedLookupTypes.includes("Contains")) {
                    let i = sr(r.lookupNodes.length);
                    i[0] = {type: "Contains", value: e.predicate.target.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof hg && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof zn && r.data.supportedLookupTypes.includes("StartsWith")) {
                    let i = sr(r.lookupNodes.length);
                    i[0] = {type: "StartsWith", value: e.predicate.target.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
                if (e.predicate instanceof dg && e.predicate.source === r.lookupNodes[0] && e.predicate.target instanceof zn && r.data.supportedLookupTypes.includes("EndsWith")) {
                    let i = sr(r.lookupNodes.length);
                    i[0] = {type: "EndsWith", value: e.predicate.target.value};
                    let o = new Rn(r, i);
                    this.memo.addRelational(o, t)
                }
            }
        }
    }
};

function sr(e) {
    let t = {type: "All"};
    return new Array(e).fill(t)
}

var e4 = class {
    constructor(e, t) {
        this.id = e, this.relational = t, R(this, "nodes", []), R(this, "winners", new Map)
    }

    addNode(e) {
        this.nodes.push(e), e.setGroup(this)
    }

    getWinner(e) {
        let t = e.getHash(), n = this.winners.get(t);
        if (n) return n;
        let r = new t4;
        return this.winners.set(t, r), r
    }

    getOptimized(e) {
        let t = this.getWinner(e);
        D(t.node, "Group not optimized");
        let n = t.node.getOptimized(e);
        return n.setGroup(this), n
    }
}, t4 = class {
    constructor() {
        R(this, "node"), R(this, "cost", new oe(1 / 0))
    }

    update(e, t) {
        oe.compare(t, this.cost) < 0 && (this.node = e, this.cost = t)
    }
}, n4 = class {
    constructor(e) {
        this.outputFields = e
    }

    isCompatible(e) {
        return this.outputFields.equals(e.outputFields)
    }
}, r4 = class {
    constructor() {
        R(this, "nodes", new Map), R(this, "groups", [])
    }

    addGroup(e) {
        let t = this.groups.length, n = new e4(t, e);
        return this.groups.push(n), n
    }

    addRelational(e, t) {
        let n = e.getHash(), r = this.nodes.get(n);
        if (r) return r;
        this.nodes.set(n, e);
        let i = e.getOutputFields(), o = new n4(i);
        return t ?? (t = this.addGroup(o)), t.addNode(e), D(o.isCompatible(t.relational), "Group has inconsistent relational props"), e
    }

    addScalar(e) {
        let t = e.getHash(), n = this.nodes.get(t);
        return n || (this.nodes.set(t, e), e)
    }
}, qC = class extends Nn {
}, XC = class extends qC {
    constructor(e, t) {
        super(!1), this.input = e, this.fields = t, R(this, "inputGroup", this.input.getGroup())
    }

    getHash() {
        return le("EnforcerResolve", this.inputGroup.id, this.fields)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering() {
        return !0
    }

    canProvideResolvedFields(e) {
        return e.subsetOf(this.fields)
    }

    getInputRequiredProps(e) {
        let t = new U;
        return new fn(e.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n);
        return oe.estimate(0, 100 * wu).add(r)
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t);
        return new XC(n, this.fields)
    }

    * evaluate(e) {
        let t = yield* this.input.evaluate(e);
        D(this.fields.subsetOf(t.fields), "Fields can't be resolved");
        let n = new Set;
        for (let i of this.fields) D(i.collection, "Collection required to resolve field"), n.add(i.collection);
        for (let i of t.tuples) for (let o of this.fields) {
            let s = i.getValue(o);
            s?.type === "richtext" && (D(s.value instanceof lg, "Pointer must be wrapped"), s.value.resolve())
        }
        let r = yield Promise.all(Array.from(n).map(async i => {
            let o = [];
            for (let a of t.tuples) {
                let l = a.getPointer(i);
                l && o.push(l)
            }
            let s = await i.data.resolveItems(o);
            return D(s.length === o.length, "Invalid number of items"), [i, s]
        }));
        return t.map(t.fields, i => {
            let o = new dr;
            o.merge(i);
            for (let [s, a] of r) {
                let l = i.getPointer(s);
                if (!l) continue;
                let c = a.shift();
                D(c, "Item not found"), D(c.pointer === l, "Pointer mismatch");
                for (let u of s.fields) {
                    let f = u.getValue(c);
                    o.addValue(u, f)
                }
            }
            return o
        })
    }
}, um = {type: 0}, YC = class extends qC {
    constructor(e, t) {
        super(e.isSynchronous), this.input = e, this.ordering = t, R(this, "inputGroup", this.input.getGroup())
    }

    getHash() {
        return le("EnforcerSort", this.inputGroup.id, this.ordering)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering(e) {
        return e.equals(this.ordering)
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new U(e.resolvedFields);
        for (let {field: r} of this.ordering.fields) r.name !== Zo && t.add(r);
        let n = new cr;
        return new fn(n, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n);
        return new oe(0).add(r)
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t);
        return new YC(n, this.ordering)
    }

    * evaluate(e) {
        return (yield* this.input.evaluate(e)).sort((n, r) => {
            for (let {field: i, direction: o} of this.ordering.fields) {
                let s = o === "asc";
                if (i.name === Zo) {
                    let c = i.collection;
                    D(c, "Collection required for sorting");
                    let u = n.getPointer(c);
                    D(u, "Pointer required for sorting");
                    let f = {pointer: u, data: {}}, d = r.getPointer(c);
                    D(d, "Pointer required for sorting");
                    let m = {pointer: d, data: {}}, v = c.data.compareItems(f, m);
                    return s ? v : -v
                }
                let a = n.getValue(i), l = r.getValue(i);
                if (!_e.equal(a, l, um)) {
                    if (ar(a) || _e.lessThan(a, l, um)) return s ? -1 : 1;
                    if (ar(l) || _e.greaterThan(a, l, um)) return s ? 1 : -1;
                    throw new Error("Invalid comparison")
                }
            }
            return 0
        })
    }
}, KC = class extends Nn {
    constructor(e, t, n) {
        super(e.isSynchronous && t.isSynchronous), this.input = e, this.limit = t, this.ordering = n, R(this, "inputGroup", this.input.getGroup())
    }

    getHash() {
        return le("RelationalLimit", this.inputGroup.id, this.limit)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering(e) {
        return e.equals(this.ordering)
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new U(e.resolvedFields);
        return t.merge(this.limit.referencedFields), new fn(this.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n), i = this.limit.optimize(e);
        return new oe(0).add(oe.max(r, i))
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t), r = this.limit.getOptimized();
        return new KC(n, r, this.ordering)
    }

    * evaluate(e) {
        let {input: t, limit: n} = yield* Le({input: this.input.evaluate(e), limit: this.limit.evaluate(e, void 0)}),
            r = BC(n) ?? 1 / 0;
        return r === 1 / 0 ? t : t.slice(0, r)
    }
}, QC = class extends Nn {
    constructor(e, t, n) {
        super(e.isSynchronous && t.isSynchronous), this.input = e, this.offset = t, this.ordering = n, R(this, "inputGroup", this.input.getGroup())
    }

    getHash() {
        return le("RelationalOffset", this.inputGroup.id, this.offset)
    }

    getOutputFields() {
        return this.inputGroup.relational.outputFields
    }

    canProvideOrdering(e) {
        return e.equals(this.ordering)
    }

    canProvideResolvedFields() {
        return !0
    }

    getInputRequiredProps(e) {
        let t = new U(e.resolvedFields);
        return t.merge(this.offset.referencedFields), new fn(this.ordering, t)
    }

    optimize(e, t) {
        let n = this.getInputRequiredProps(t), r = e.optimizeGroup(this.inputGroup, n), i = this.offset.optimize(e);
        return new oe(0).add(oe.max(r, i))
    }

    getOptimized(e) {
        let t = this.getInputRequiredProps(e), n = this.inputGroup.getOptimized(t), r = this.offset.getOptimized();
        return new QC(n, r, this.ordering)
    }

    * evaluate(e) {
        let {input: t, offset: n} = yield* Le({input: this.input.evaluate(e), offset: this.offset.evaluate(e, void 0)}),
            r = BC(n) ?? 0;
        return r === 0 ? t : t.slice(r)
    }
}, ZC = class extends Xe {
    constructor(e, t, n, r, i) {
        super(r, i, e.isSynchronous), this.input = e, this.namedFields = t, this.ordering = n, this.referencedFields = r, this.referencedOuterFields = i, R(this, "inputGroup", this.input.getGroup()), R(this, "definition");
        let o = {}, s = Object.entries(t);
        for (let [a, l] of s) o[a] = l.definition;
        this.definition = {type: "array", isNullable: !1, definition: {type: "object", isNullable: !1, definitions: o}}
    }

    getHash() {
        let e = {}, t = Object.entries(this.namedFields);
        for (let [n, r] of t) e[n] = r.id;
        return le("ScalarArray", this.inputGroup.id, e, this.ordering, this.referencedFields, this.referencedOuterFields)
    }

    toString() {
        return `ARRAY(${this.inputGroup.id})`
    }

    getInputRequiredProps() {
        let e = new U, t = Object.values(this.namedFields);
        for (let n of t) e.add(n);
        return new fn(this.ordering, e)
    }

    optimize(e) {
        let t = this.getInputRequiredProps(), n = e.optimizeGroup(this.inputGroup, t);
        return new oe(0).add(n)
    }

    getOptimized() {
        let e = this.getInputRequiredProps(), t = this.inputGroup.getOptimized(e);
        return new ZC(t, this.namedFields, this.ordering, this.referencedFields, this.referencedOuterFields)
    }

    * evaluate(e, t) {
        let n = new dr;
        e && n.merge(e), t && n.merge(t);
        let r = yield* this.input.evaluate(n), i = Object.entries(this.namedFields);
        return {
            type: "array", value: r.tuples.map(o => {
                let s = {};
                for (let [a, l] of i) s[a] = o.getValue(l);
                return {type: "object", value: s}
            })
        }
    }
}, JC = class extends Xe {
    constructor(e, t) {
        super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), this.input = e, this.definition = t, D(t.isNullable, "Unsupported non-nullable cast")
    }

    getHash() {
        return le("ScalarCast", this.input, this.definition)
    }

    toString() {
        return `CAST(${this.input} AS ${this.definition.type.toUpperCase()})`
    }

    optimize(e) {
        return this.input.optimize(e)
    }

    getOptimized() {
        let e = this.input.getOptimized();
        return new JC(e, this.definition)
    }

    * evaluate(e, t) {
        let n = yield* this.input.evaluate(e, t);
        return _e.cast(n, this.definition)
    }
}, eT = class extends Xe {
    constructor(e, t, n, r, i) {
        super(r, i, e.isSynchronous), this.input = e, this.field = t, this.ordering = n, this.referencedFields = r, this.referencedOuterFields = i, R(this, "inputGroup", this.input.getGroup()), R(this, "definition"), this.definition = {
            type: "array",
            isNullable: !1,
            definition: this.field.definition
        }
    }

    getHash() {
        return le("ScalarFlatArray", this.inputGroup.id, this.field.id, this.ordering, this.referencedFields, this.referencedOuterFields)
    }

    toString() {
        return `FLAT_ARRAY(${this.inputGroup.id})`
    }

    getInputRequiredProps() {
        let e = new U;
        return e.add(this.field), new fn(this.ordering, e)
    }

    optimize(e) {
        let t = this.getInputRequiredProps(), n = e.optimizeGroup(this.inputGroup, t);
        return new oe(0).add(n)
    }

    getOptimized() {
        let e = this.getInputRequiredProps(), t = this.inputGroup.getOptimized(e);
        return new eT(t, this.field, this.ordering, this.referencedFields, this.referencedOuterFields)
    }

    * evaluate(e, t) {
        let n = new dr;
        return e && n.merge(e), t && n.merge(t), {
            type: "array",
            value: (yield* this.input.evaluate(n)).tuples.map(i => i.getValue(this.field))
        }
    }
}, i4 = {type: 0}, tT = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarIn", this.left, this.right)
    }

    toString() {
        return `${this.left} IN ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new tT(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: _e.in(n, r, i4)}
    }
}, o4 = {type: 1}, nT = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.source = e, this.target = t, R(this, "definition", {type: "number", isNullable: !1})
    }

    getHash() {
        return le("ScalarIndexOf", this.source, this.target)
    }

    toString() {
        return `INDEX_OF(${this.source}, ${this.target})`
    }

    optimize(e) {
        let t = this.source.optimize(e), n = this.target.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.source.getOptimized(), t = this.target.getOptimized();
        return new nT(e, t)
    }

    * evaluate(e, t) {
        let {source: n, target: r} = yield* Le({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t)
        });
        return {type: "number", value: _e.indexOf(n, r, o4)}
    }
}, rT = class extends Xe {
    constructor(e) {
        super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), this.input = e, R(this, "definition", {
            type: "number",
            isNullable: !1
        })
    }

    getHash() {
        return le("ScalarLength", this.input)
    }

    toString() {
        return `LENGTH(${this.input})`
    }

    optimize(e) {
        return this.input.optimize(e)
    }

    getOptimized() {
        let e = this.input.getOptimized();
        return new rT(e)
    }

    * evaluate(e, t) {
        let n = yield* this.input.evaluate(e, t);
        return {type: "number", value: _e.length(n)}
    }
}, _m = class extends Xe {
    constructor(e) {
        super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), this.input = e, R(this, "definition", {
            type: "boolean",
            isNullable: !1
        })
    }

    getHash() {
        return le("ScalarNot", this.input)
    }

    toString() {
        return `NOT ${this.input}`
    }

    optimize(e) {
        return this.input.optimize(e)
    }

    getOptimized() {
        let e = this.input.getOptimized();
        return new _m(e)
    }

    * evaluate(e, t) {
        let n = yield* this.input.evaluate(e, t);
        return {type: "boolean", value: !Vr(n)}
    }
}, s4 = {type: 0}, iT = class extends Xe {
    constructor(e, t) {
        let n = new U;
        n.merge(e.referencedFields), n.merge(t.referencedFields);
        let r = new U;
        r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
        let i = e.isSynchronous && t.isSynchronous;
        super(n, r, i), this.left = e, this.right = t, R(this, "definition", {type: "boolean", isNullable: !1})
    }

    getHash() {
        return le("ScalarNotIn", this.left, this.right)
    }

    toString() {
        return `${this.left} NOT IN ${this.right}`
    }

    optimize(e) {
        let t = this.left.optimize(e), n = this.right.optimize(e);
        return oe.max(t, n)
    }

    getOptimized() {
        let e = this.left.getOptimized(), t = this.right.getOptimized();
        return new iT(e, t)
    }

    * evaluate(e, t) {
        let {left: n, right: r} = yield* Le({left: this.left.evaluate(e, t), right: this.right.evaluate(e, t)});
        return {type: "boolean", value: !_e.in(n, r, s4)}
    }
}, ln = class extends Xe {
    constructor(e, t) {
        D(e.name !== Zo, "Invalid field name");
        let n = new U, r = new U;
        t ? r.add(e) : n.add(e), super(n, r, !0), this.field = e, this.isOuterField = t, R(this, "definition", this.field.definition)
    }

    getHash() {
        return le("ScalarVariable", this.field.id, this.isOuterField)
    }

    toString() {
        return `"${this.field.name}" /* ${this.field.id} */`
    }

    optimize() {
        return new oe(0)
    }

    getOptimized() {
        return this
    }

    * evaluate(e, t) {
        return this.isOuterField ? (D(e, "Context must exist"), e.getValue(this.field)) : (D(t, "Tuple must exist"), t.getValue(this.field))
    }
}, a4 = class {
    constructor(e) {
        this.memo = e
    }

    finishRelational(e) {
        return this.memo.addRelational(e)
    }

    newRelationalScan(e) {
        let t = new Tu(e);
        return this.finishRelational(t)
    }

    newRelationalIndexLookup(e, t) {
        let n = new Rn(e, t);
        return this.finishRelational(n)
    }

    newRelationalLeftJoin(e, t, n) {
        let r = new Cu(e, t, n);
        return this.finishRelational(r)
    }

    newRelationalRightJoin(e, t, n) {
        return this.newRelationalLeftJoin(t, e, n)
    }

    newRelationalFilter(e, t) {
        if (e instanceof Cu && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let r = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(r, e.right, e.constraint)
        }
        if (e instanceof ug && t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)) {
            let r = this.newRelationalFilter(e.right, t);
            return this.newRelationalLeftJoin(e.left, r, e.constraint)
        }
        let n = new ku(e, t);
        return this.finishRelational(n)
    }

    newRelationalProject(e, t, n) {
        let r = new Fm(e, t, n);
        return this.finishRelational(r)
    }

    newRelationalLimit(e, t, n) {
        if (e instanceof Fm && t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) && n.providedByFields(e.inputGroup.relational.outputFields)) {
            let i = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(i, e.projections, e.passthrough)
        }
        let r = new KC(e, t, n);
        return this.finishRelational(r)
    }

    newRelationalOffset(e, t, n) {
        let r = new QC(e, t, n);
        return this.finishRelational(r)
    }

    finishScalar(e) {
        if (!(e instanceof zn) && e.isSynchronous && e.referencedFields.size === 0 && e.referencedOuterFields.size === 0) {
            let n = e.evaluateSync();
            return this.newScalarConstant(e.definition, n)
        }
        return this.memo.addScalar(e)
    }

    removeUnknown(e, t) {
        if (e.definition.type !== "unknown" || t.type === "unknown") return e;
        let n = {...t, isNullable: !0};
        return this.newScalarCast(e, n)
    }

    newScalarVariable(e, t) {
        let n = new ln(e, t);
        return this.finishScalar(n)
    }

    newScalarConstant(e, t) {
        let n = new zn(e, t);
        return this.finishScalar(n)
    }

    newScalarNot(e) {
        if (e instanceof _m) {
            if (e.input.definition.type === "boolean") return e.input;
            let n = {type: "boolean", isNullable: !0};
            return this.newScalarCast(e.input, n)
        }
        if (e instanceof Jo) return this.newScalarNotEquals(e.left, e.right);
        if (e instanceof Iu) return this.newScalarEquals(e.left, e.right);
        if (e instanceof Pu) return this.newScalarGreaterThanOrEqual(e.left, e.right);
        if (e instanceof _u) return this.newScalarGreaterThan(e.left, e.right);
        if (e instanceof Eu) return this.newScalarLessThanOrEqual(e.left, e.right);
        if (e instanceof Fu) return this.newScalarLessThan(e.left, e.right);
        if (e instanceof Ru) {
            let n = this.newScalarNot(e.left), r = this.newScalarNot(e.right);
            return this.newScalarOr(n, r)
        }
        if (e instanceof Ou) {
            let n = this.newScalarNot(e.left), r = this.newScalarNot(e.right);
            return this.newScalarAnd(n, r)
        }
        let t = new _m(e);
        return this.finishScalar(t)
    }

    newScalarAnd(e, t) {
        let n = new Ru(e, t);
        return this.finishScalar(n)
    }

    newScalarOr(e, t) {
        let n = new Ou(e, t);
        return this.finishScalar(n)
    }

    newScalarEquals(e, t) {
        let n = e instanceof ln;
        if (t instanceof ln && !n) return this.newScalarEquals(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new Jo(e, t);
        return this.finishScalar(i)
    }

    newScalarNotEquals(e, t) {
        let n = e instanceof ln;
        if (t instanceof ln && !n) return this.newScalarNotEquals(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new Iu(e, t);
        return this.finishScalar(i)
    }

    newScalarLessThan(e, t) {
        let n = e instanceof ln;
        if (t instanceof ln && !n) return this.newScalarGreaterThan(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new Pu(e, t);
        return this.finishScalar(i)
    }

    newScalarLessThanOrEqual(e, t) {
        let n = e instanceof ln;
        if (t instanceof ln && !n) return this.newScalarGreaterThanOrEqual(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new _u(e, t);
        return this.finishScalar(i)
    }

    newScalarGreaterThan(e, t) {
        let n = e instanceof ln;
        if (t instanceof ln && !n) return this.newScalarLessThan(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new Eu(e, t);
        return this.finishScalar(i)
    }

    newScalarGreaterThanOrEqual(e, t) {
        let n = e instanceof ln;
        if (t instanceof ln && !n) return this.newScalarLessThanOrEqual(t, e);
        e = this.removeUnknown(e, t.definition), t = this.removeUnknown(t, e.definition);
        let i = new Fu(e, t);
        return this.finishScalar(i)
    }

    newScalarIn(e, t) {
        t.definition.type === "array" && (e = this.removeUnknown(e, t.definition.definition));
        let n = {type: "array", isNullable: !0, definition: e.definition};
        t = this.removeUnknown(t, n);
        let r = new tT(e, t);
        return this.finishScalar(r)
    }

    newScalarNotIn(e, t) {
        t.definition.type === "array" && (e = this.removeUnknown(e, t.definition.definition));
        let n = {type: "array", isNullable: !0, definition: e.definition};
        t = this.removeUnknown(t, n);
        let r = new iT(e, t);
        return this.finishScalar(r)
    }

    newScalarCase(e, t, n) {
        if (e) {
            let i = [];
            for (let {when: o, then: s} of t) {
                let a = this.removeUnknown(o, e.definition), l = new cg(a, s);
                i.push(l)
            }
            t = i
        }
        let r = new WC(e, t, n);
        return this.finishScalar(r)
    }

    newScalarContains(e, t) {
        let n = new fg(e, t);
        return this.finishScalar(n)
    }

    newScalarStartsWith(e, t) {
        let n = new hg(e, t);
        return this.finishScalar(n)
    }

    newScalarEndsWith(e, t) {
        let n = new dg(e, t);
        return this.finishScalar(n)
    }

    newScalarLength(e) {
        let t = new rT(e);
        return this.finishScalar(t)
    }

    newScalarIndexOf(e, t) {
        let n = new nT(e, t);
        return this.finishScalar(n)
    }

    newScalarArray(e, t, n, r, i) {
        let o = new ZC(e, t, n, r, i);
        return this.finishScalar(o)
    }

    newScalarFlatArray(e, t, n, r, i) {
        let o = new eT(e, t, n, r, i);
        return this.finishScalar(o)
    }

    newScalarCast(e, t) {
        if (e.definition.type === t.type) return e;
        let n = new JC(e, t);
        return this.finishScalar(n)
    }
}, l4 = class {
    constructor(e, t) {
        this.query = e, this.locale = t, R(this, "memo", new r4), R(this, "normalizer", new a4(this.memo)), R(this, "explorer", new J5(this.normalizer))
    }

    optimize() {
        let t = new X5(this.normalizer, this.query, this.locale).build(), r = t.takeNode().getGroup(),
            i = t.getRequiredProps();
        this.optimizeGroup(r, i);
        let o = r.getOptimized(i), s = t.getNamedFields();
        return [o, s]
    }

    optimizeGroup(e, t) {
        let n = e.getWinner(t);
        if (n.node) return n.cost;
        let r = e.nodes[0];
        D(r, "Normalized node not found"), this.createEnforcer(n, r, t);
        for (let i of e.nodes) {
            if (t.canProvide(i)) {
                let o = i.optimize(this, t);
                n.update(i, o)
            }
            t.isMinimal && this.explorer.explore(i)
        }
        return n.cost
    }

    createEnforcer(e, t, n) {
        if (n.resolvedFields.size > 0) {
            let r = new XC(t, n.resolvedFields), i = r.optimize(this, n);
            e.update(r, i)
        }
        if (n.ordering.length > 0) {
            let r = new YC(t, n.ordering), i = r.optimize(this, n);
            e.update(r, i)
        }
    }
};

function c4(e) {
    return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`
}

function u4(e) {
    return typeof e.value == "string" ? `'${e.value}'` : e.value
}

function f4(e) {
    return `${e.functionName}(${e.arguments.map(t => zt(t)).join(", ")})`
}

function d4(e) {
    let t = "CASE";
    e.value && (t += ` ${zt(e.value)}`);
    for (let n of e.conditions) t += ` WHEN ${zt(n.when)} THEN ${zt(n.then)}`;
    return e.else && (t += ` ELSE ${zt(e.else)}`), t += " END", t
}

function h4(e) {
    let t = zt(e.value);
    return `${e.operator.toUpperCase()} ${t}`
}

function p4(e) {
    let t = zt(e.left), n = zt(e.right), r = e.operator.toUpperCase();
    return `${t} ${r} ${n}`
}

function m4(e) {
    return `CAST(${zt(e.value)} as ${e.dataType})`
}

function zt(e) {
    switch (e.type) {
        case"Identifier":
            return c4(e);
        case"LiteralValue":
            return u4(e);
        case"FunctionCall":
            return f4(e);
        case"Case":
            return d4(e);
        case"UnaryOperation":
            return h4(e);
        case"BinaryOperation":
            return p4(e);
        case"TypeCast":
            return m4(e);
        case"Select":
            return `${oT(e)}`;
        default:
            Se(e)
    }
}

function g4(e) {
    return AC(e.data) ? "Collection" : e.alias ? `"${e.data.displayName}" AS "${e.alias}"` : `"${e.data.displayName}"`
}

function v4(e) {
    let t = `${Im(e.left)} LEFT JOIN ${Im(e.right)}`;
    return e.constraint && (t += ` ON ${zt(e.constraint)}`), t
}

function Im(e) {
    switch (e.type) {
        case"Collection":
            return g4(e);
        case"LeftJoin":
            return v4(e);
        default:
            Se(e)
    }
}

function y4(e) {
    let t = "";
    return e.split(/\s+/u).forEach(r => {
        r !== "" && (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r) ? t += `
${r}` : ["AND", "OR"].includes(r) ? t += `
	${r}` : t += ` ${r}`)
    }), t.trim()
}

function oT(e) {
    let t = "";
    return t += `SELECT ${e.select.map(n => {
        let r = zt(n);
        return n.alias ? `${r} AS "${n.alias}"` : r
    }).join(", ")}`, t += ` FROM ${Im(e.from)}`, e.where && (t += ` WHERE ${zt(e.where)}`), e.orderBy && (t += ` ORDER BY ${e.orderBy.map(n => `${zt(n)} ${n.direction ?? "asc"}`).join(", ")}`), e.limit && (t += ` LIMIT ${zt(e.limit)}`), e.offset && (t += ` OFFSET ${zt(e.offset)}`), y4(t)
}

var b4 = E5("query-engine"), U8 = class {
    async query(e, t) {
        b4.debug(`Query:
${oT(e)}`);
        let n = new l4(e, t), [r, i] = n.optimize(), o = await r.evaluateAsync(), s = Object.entries(i);
        return await Promise.all(o.tuples.map(async l => {
            let c = await Promise.all(s.map(async ([u, f]) => {
                let d = l.getValue(f), m = await this.resolveValue(d);
                return [u, m]
            }));
            return Object.fromEntries(c)
        }))
    }

    async resolveValue(e) {
        if (e?.type === "richtext") return D(e.value instanceof lg, "Pointer must be wrapped"), e.value.resolve();
        if (e?.type === "array") return Promise.all(e.value.map(async t => this.resolveValue(t)));
        if (e?.type === "object") {
            let t = Object.entries(e.value), n = await Promise.all(t.map(async ([r, i]) => {
                let o = await this.resolveValue(i);
                return [r, o]
            }));
            return Object.fromEntries(n)
        }
        return e?.value ?? null
    }
}, uu = "default", x4 = new Set([uu]), fu, w4 = class {
    constructor() {
        R(this, "entries", new Map), Kt(this, fu, {})
    }

    set(e, t, n, r) {
        switch (t) {
            case"transformTemplate": {
                D(typeof n == "string", `transformTemplate must be a string, received: ${n}`), this.setHash(e, r, {
                    transformTemplate: n,
                    legacy: !0
                });
                break
            }
            case"initial":
            case"animate": {
                D(typeof n == "object", `${t} must be a valid object, received: ${n}`), this.setHash(e, r, {
                    [t]: n,
                    legacy: !0
                });
                break
            }
            default:
                break
        }
    }

    setHash(e, t = uu, n) {
        let r = this.entries.get(e) ?? {}, i = r[t] ?? {};
        r[t] = n === null ? null : {...i, ...n}, this.entries.set(e, r)
    }

    variantHash(e, t) {
        if (e === t?.primaryVariantId) return uu;
        let n = fe(this, fu)[e];
        if (n) return n;
        let r = t?.variantClassNames[e];
        return r ? fe(this, fu)[e] = LC(r) : uu
    }

    setAll(e, t = x4, n, r) {
        var i;
        if (n === null) {
            for (let c of t) this.setHash(e, this.variantHash(c, r), null);
            return
        }
        let o = $n(n.transformTemplate) ? (i = n.transformTemplate) == null ? void 0 : i.call(n, {}, k4) : void 0,
            s = n.__framer__presenceInitial ?? n.initial, a = n.__framer__presenceAnimate ?? n.animate,
            l = {initial: Re(s) ? s : void 0, animate: Re(a) ? a : void 0, transformTemplate: xe(o) ? o : void 0};
        for (let c of t) this.setHash(e, this.variantHash(c, r), l)
    }

    clear() {
        this.entries.clear()
    }

    toObject() {
        return Object.fromEntries(this.entries)
    }
};
fu = new WeakMap;
var S4 = new w4;

function X8(e) {
    return x.forwardRef(({optimized: t, ...n}, r) => {
        let i = x.useContext(kC), o = x.useContext(ag), s = n[C4];
        return s && !Lr() && S4.setAll(s, o, t ? n : null, i), C(e, {ref: r, ...n})
    })
}

var k4 = "__Appear_Animation_Transform__";
var C4 = "data-framer-appear-id", Y8 = "data-framer-appear-animation";

function fm(e, t) {
    e.forEach(n => clearTimeout(n)), e.clear(), t.forEach(n => n && n("Callback cancelled by variant change")), t.clear()
}

function z1() {
    return new Set
}

function Q8(e) {
    let t = pt(z1), n = pt(z1);
    return cC(() => () => fm(n, t)), x.useEffect(() => () => fm(n, t), [t, n]), x.useEffect(() => {
        fm(n, t)
    }, [e, t, n]), x.useRef({
        activeVariantCallback: r => (...i) => new Promise((o, s) => {
            t.add(s), r(...i).then(o)
        }).catch(() => {
        }), delay: async (r, i) => {
            await new Promise(o => n.add(globalThis.setTimeout(() => o(!0), i))), r()
        }
    }).current
}

function T4(e, t, n) {
    return x.useCallback(r => {
        var i, o, s;
        return n ? e ? t ? Object.assign({}, (i = n[e]) == null ? void 0 : i[r], (o = n[t]) == null ? void 0 : o[r]) : ((s = n[e]) == null ? void 0 : s[r]) || {} : {} : {}
    }, [e, t, n])
}

function R4(e) {
    for (let [t, n] of Object.entries(e)) if (st.matchMedia(n).matches) return t
}

function E4(e) {
    var t;
    for (let {hash: n, mediaQuery: r} of e) {
        if (!r) continue;
        if (st.matchMedia(r).matches) return n
    }
    return (t = e[0]) == null ? void 0 : t.hash
}

function eW(e, t, n = !0) {
    let r = A(hC), i = V(Lr() ? R4(t) ?? e : e), o = V(n && r ? e : i.current), s = Bu(), a = nb(), l = Q(c => {
        (c !== i.current || c !== o.current) && a(() => {
            i.current = o.current = c, Qt(() => {
                s()
            })
        })
    }, [a, s]);
    return Gk(() => {
        !n || r !== !0 || l(i.current)
    }, []), $(() => {
        let c = [];
        for (let [u, f] of Object.entries(t)) {
            let d = st.matchMedia(f), m = v => {
                v.matches && l(u)
            };
            F4(d, m), c.push([d, m])
        }
        return () => c.forEach(([u, f]) => P4(u, f))
    }, [t, l]), [i.current, o.current]
}

function F4(e, t) {
    e.addEventListener ? e.addEventListener("change", t) : e.addListener(t)
}

function P4(e, t) {
    e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t)
}

var _4 = "style[data-framer-breakpoint-css]";

function I4(e) {
    setTimeout(e, 1)
}

function tW(e) {
    var t, n;
    let r = E4(e);
    if (r) for (let o of document.querySelectorAll(".hidden-" + r)) (t = o.parentNode) == null || t.removeChild(o);
    (st.requestIdleCallback ?? I4)(() => {
        var o;
        (o = document.querySelector(_4)) == null || o.remove()
    });
    for (let o of document.querySelectorAll(".ssr-variant:empty")) (n = o.parentNode) == null || n.removeChild(o)
}

function B1(e, t) {
    if (e[t]) return e[t];
    if (!(t in e)) return e.default
}

function aW(e, t) {
    if (ts()) return;
    let r = x.useRef(!0), i = x.useRef(t);
    cC((o, s) => {
        let a = o && !s;
        if (!r.current && a) {
            let l = B1(i.current, e);
            l && l()
        }
        r.current = a
    }, []), x.useEffect(() => {
        if (r.current) {
            let o = B1(i.current, e);
            o && o()
        }
    }, [e])
}

function $1(e, t) {
    return `${e}-${t}`
}

function O4(e, t) {
    let r = e.indexOf(t) + 1;
    r >= e.length && (r = 0);
    let i = e[r];
    return D(i !== void 0, "nextVariant should be defined"), i
}

function M4(e, t) {
    if (e) {
        if (t) {
            let n = e[t];
            if (n) return n
        }
        return e.default
    }
}

function N1(e, t, n, r, i) {
    let {hover: o, pressed: s, loading: a, error: l} = e || {};
    if (l && i) return "error";
    if (a && r) return "loading";
    if (s && n) return "pressed";
    if (o && t) return "hover"
}

function L4(e, t) {
    let n = t[e];
    return n || `framer-v-${e}`
}

function j1(e, t, n) {
    return e && n.has(e) ? e : t
}

var V4 = Symbol("cycle");

function hW({
                variant: e,
                defaultVariant: t,
                transitions: n,
                enabledGestures: r,
                cycleOrder: i = [],
                variantProps: o = {},
                variantClassNames: s = {}
            }) {
    let a = Bu(), l = ts(), c = pt(() => new Set(i)), {wrapUpdatesInTransitions: u} = ju(), f = x.useRef({
        isHovered: !1,
        isPressed: !1,
        isError: !1,
        hasPressedVariants: !0,
        baseVariant: j1(e, t, c),
        lastVariant: e,
        gestureVariant: void 0,
        loadedBaseVariant: {},
        defaultVariant: t,
        enabledGestures: r,
        cycleOrder: i,
        transitions: n
    }), d = x.useCallback(O => {
        let {isHovered: I, isPressed: B, isError: z, enabledGestures: j, defaultVariant: J} = f.current,
            H = j1(O, J, c), ue = N1(j?.[H], I, B, !1, z), ie = ue ? $1(H, ue) : void 0;
        return [H, ie]
    }, [c]), m = x.useCallback(({isHovered: O, isPressed: I, isError: B}) => {
        O !== void 0 && (f.current.isHovered = O), I !== void 0 && (f.current.isPressed = I), B !== void 0 && (f.current.isError = B);
        let {baseVariant: z, gestureVariant: j, defaultVariant: J} = f.current, [H, ue] = d(z);
        (H !== z || ue !== j) && (f.current.baseVariant = H || J, f.current.gestureVariant = ue, B || u ? x.startTransition(() => {
            a()
        }) : a())
    }, [d, a, u]), v = x.useCallback(O => {
        let {defaultVariant: I, cycleOrder: B, baseVariant: z, gestureVariant: j} = f.current,
            J = O === V4 ? O4(B || [], z || I) : O, [H, ue] = d(J);
        (H !== z || ue !== j) && (f.current.isError = !1, f.current.baseVariant = H || I, f.current.gestureVariant = ue, u ? x.startTransition(() => {
            a()
        }) : a())
    }, [d, u, a]), g = x.useCallback(() => {
        let {baseVariant: O} = f.current;
        f.current.loadedBaseVariant[O] = !0, x.startTransition(() => {
            a()
        })
    }, [a]);
    if (e !== f.current.lastVariant) {
        let [O, I] = d(e);
        f.current.lastVariant = O, (O !== f.current.baseVariant || I !== f.current.gestureVariant) && (f.current.baseVariant = O, f.current.gestureVariant = I)
    }
    let {
        baseVariant: b,
        gestureVariant: p,
        defaultVariant: h,
        enabledGestures: y,
        isHovered: w,
        isPressed: k,
        isError: S,
        loadedBaseVariant: T
    } = f.current, E = T4(f.current.baseVariant, f.current.gestureVariant, o);
    return x.useMemo(() => {
        var O;
        let I = [];
        b !== h && I.push(b);
        let B = (O = y?.[b]) == null ? void 0 : O.loading, z = !S && !l && !!B && !T[b], j = z ? $1(b, "loading") : p;
        j && I.push(j);
        let J = y?.[b], H = {onMouseEnter: () => m({isHovered: !0}), onMouseLeave: () => m({isHovered: !1})};
        return J?.pressed && Object.assign(H, {
            onTapStart: () => m({isPressed: !0}),
            onTapCancel: () => m({isPressed: !1}),
            onTap: () => m({isPressed: !1})
        }), {
            variants: I,
            baseVariant: b,
            gestureVariant: j,
            isLoading: z,
            transition: M4(f.current.transitions, b),
            setVariant: v,
            setGestureState: m,
            clearLoadingGesture: g,
            addVariantProps: E,
            gestureHandlers: H,
            classNames: gu(L4(b, s), N1(J, w, k, z, S))
        }
    }, [b, p, w, k, T, E, v, h, y, m, g, s])
}

var A4 = x.createContext(void 0), D4 = () => x.useContext(A4);
var z4 = {
    Arial: {
        Regular: {selector: "Arial", weight: void 0},
        Black: {selector: "Arial-Black", weight: void 0},
        Narrow: {selector: "Arial Narrow", weight: void 0},
        "Rounded Bold": {selector: "Arial Rounded MT Bold", weight: void 0}
    },
    Avenir: {
        Book: {selector: "Avenir", weight: void 0},
        Light: {selector: "Avenir-Light", weight: void 0},
        Medium: {selector: "Avenir-Medium", weight: void 0},
        Heavy: {selector: "Avenir-Heavy", weight: void 0},
        Black: {selector: "Avenir-Black", weight: void 0}
    },
    "Avenir Next": {
        Regular: {selector: "Avenir Next", weight: void 0},
        "Ultra Light": {selector: "AvenirNext-UltraLight", weight: void 0},
        Medium: {selector: "AvenirNext-Medium", weight: void 0},
        "Demi Bold": {selector: "AvenirNext-DemiBold", weight: void 0},
        Heavy: {selector: "AvenirNext-Heavy", weight: void 0}
    },
    "Avenir Next Condensed": {
        Regular: {selector: "Avenir Next Condensed", weight: void 0},
        "Ultra Light": {selector: "AvenirNextCondensed-UltraLight", weight: void 0},
        Medium: {selector: "AvenirNextCondensed-Medium", weight: void 0},
        "Demi Bold": {selector: "AvenirNextCondensed-DemiBold", weight: void 0},
        Heavy: {selector: "AvenirNextCondensed-Heavy", weight: void 0}
    },
    Baskerville: {
        Regular: {selector: "Baskerville", weight: void 0},
        "Semi Bold": {selector: "Baskerville-SemiBold", weight: void 0}
    },
    "Bodoni 72": {
        Book: {selector: "Bodoni 72", weight: void 0},
        Oldstyle: {selector: "Bodoni 72 Oldstyle", weight: void 0},
        Smallcaps: {selector: "Bodoni 72 Smallcaps", weight: void 0}
    },
    Courier: {Regular: {selector: "Courier", weight: void 0}},
    "Courier New": {Regular: {selector: "Courier New", weight: void 0}},
    Futura: {
        Medium: {selector: "Futura", weight: void 0},
        Condensed: {selector: "Futura-CondensedMedium", weight: void 0},
        "Condensed ExtraBold": {selector: "Futura-CondensedExtraBold", weight: void 0}
    },
    Georgia: {Regular: {selector: "Georgia", weight: void 0}},
    "Gill Sans": {
        Regular: {selector: "Gill Sans", weight: void 0},
        Light: {selector: "GillSans-Light", weight: void 0},
        SemiBold: {selector: "GillSans-SemiBold", weight: void 0},
        UltraBold: {selector: "GillSans-UltraBold", weight: void 0}
    },
    Helvetica: {
        Regular: {selector: "Helvetica", weight: void 0},
        Light: {selector: "Helvetica-Light", weight: void 0},
        Bold: {selector: "Helvetica-Bold", weight: void 0},
        Oblique: {selector: "Helvetica-Oblique", weight: void 0},
        "Light Oblique": {selector: "Helvetica-LightOblique", weight: void 0},
        "Bold Oblique": {selector: "Helvetica-BoldOblique", weight: void 0}
    },
    "Helvetica Neue": {
        Regular: {selector: "Helvetica Neue", weight: void 0},
        UltraLight: {selector: "HelveticaNeue-UltraLight", weight: void 0},
        Thin: {selector: "HelveticaNeue-Thin", weight: void 0},
        Light: {selector: "HelveticaNeue-Light", weight: void 0},
        Medium: {selector: "HelveticaNeue-Medium", weight: void 0},
        Bold: {selector: "HelveticaNeue-Bold", weight: void 0},
        Italic: {selector: "HelveticaNeue-Italic", weight: void 0},
        "UltraLight Italic": {selector: "HelveticaNeue-UltraLightItalic", weight: void 0},
        "Thin Italic": {selector: "HelveticaNeue-ThinItalic", weight: void 0},
        "Light Italic": {selector: "HelveticaNeue-LightItalic", weight: void 0},
        "Medium Italic": {selector: "HelveticaNeue-MediumItalic", weight: void 0},
        "Bold Italic": {selector: "HelveticaNeue-BoldItalic", weight: void 0},
        "Condensed Bold": {selector: "HelveticaNeue-CondensedBold", weight: void 0},
        "Condensed Black": {selector: "HelveticaNeue-CondensedBlack", weight: void 0}
    },
    "Hoefler Text": {Regular: {selector: "Hoefler Text", weight: void 0}},
    Impact: {Regular: {selector: "Impact", weight: void 0}},
    "Lucida Grande": {Regular: {selector: "Lucida Grande", weight: void 0}},
    Menlo: {Regular: {selector: "Menlo", weight: void 0}},
    Monaco: {Regular: {selector: "Monaco", weight: void 0}},
    Optima: {
        Regular: {selector: "Optima", weight: void 0},
        ExtraBlack: {selector: "Optima-ExtraBlack", weight: void 0}
    },
    Palatino: {Regular: {selector: "Palatino", weight: void 0}},
    "SF Pro Display": {
        Regular: {selector: "__SF-UI-Display-Regular__", weight: 400},
        Ultralight: {selector: "__SF-UI-Display-Ultralight__", weight: 100},
        Thin: {selector: "__SF-UI-Display-Thin__", weight: 200},
        Light: {selector: "__SF-UI-Display-Light__", weight: 300},
        Medium: {selector: "__SF-UI-Display-Medium__", weight: 500},
        Semibold: {selector: "__SF-UI-Display-Semibold__", weight: 600},
        Bold: {selector: "__SF-UI-Display-Bold__", weight: 700},
        Heavy: {selector: "__SF-UI-Display-Heavy__", weight: 800},
        Black: {selector: "__SF-UI-Display-Black__", weight: 900},
        Italic: {selector: "__SF-UI-Display-Italic__", weight: 400},
        "Ultralight Italic": {selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100},
        "Thin Italic": {selector: "__SF-UI-Display-Thin-Italic__", weight: 200},
        "Light Italic": {selector: "__SF-UI-Display-Light-Italic__", weight: 300},
        "Medium Italic": {selector: "__SF-UI-Display-Medium-Italic__", weight: 500},
        "Semibold Italic": {selector: "__SF-UI-Display-Semibold-Italic__", weight: 600},
        "Bold Italic": {selector: "__SF-UI-Display-Bold-Italic__", weight: 700},
        "Heavy Italic": {selector: "__SF-UI-Display-Heavy-Italic__", weight: 800},
        "Black Italic": {selector: "__SF-UI-Display-Black-Italic__", weight: 900}
    },
    "SF Pro Display Condensed": {
        Regular: {selector: "__SF-UI-Display-Condensed-Regular__", weight: 400},
        Ultralight: {selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100},
        Thin: {selector: "__SF-UI-Display-Condensed-Thin__", weight: 200},
        Light: {selector: "__SF-UI-Display-Condensed-Light__", weight: 300},
        Medium: {selector: "__SF-UI-Display-Condensed-Medium__", weight: 500},
        Semibold: {selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600},
        Bold: {selector: "__SF-UI-Display-Condensed-Bold__", weight: 700},
        Heavy: {selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800},
        Black: {selector: "__SF-UI-Display-Condensed-Black__", weight: 900}
    },
    "SF Pro Text": {
        Regular: {selector: "__SF-UI-Text-Regular__", weight: 400},
        Light: {selector: "__SF-UI-Text-Light__", weight: 200},
        Medium: {selector: "__SF-UI-Text-Medium__", weight: 500},
        Semibold: {selector: "__SF-UI-Text-Semibold__", weight: 600},
        Bold: {selector: "__SF-UI-Text-Bold__", weight: 700},
        Heavy: {selector: "__SF-UI-Text-Heavy__", weight: 800},
        Italic: {selector: "__SF-UI-Text-Italic__", weight: 400},
        "Light Italic": {selector: "__SF-UI-Text-Light-Italic__", weight: 200},
        "Medium Italic": {selector: "__SF-UI-Text-Medium-Italic__", weight: 500},
        "Semibold Italic": {selector: "__SF-UI-Text-Semibold-Italic__", weight: 600},
        "Bold Italic": {selector: "__SF-UI-Text-Bold-Italic__", weight: 700},
        "Heavy Italic": {selector: "__SF-UI-Text-Heavy-Italic__", weight: 800}
    },
    "SF Pro Text Condensed": {
        Regular: {selector: "__SF-UI-Text-Condensed-Regular__", weight: 400},
        Light: {selector: "__SF-UI-Text-Condensed-Light__", weight: 200},
        Medium: {selector: "__SF-UI-Text-Condensed-Medium__", weight: 500},
        Semibold: {selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600},
        Bold: {selector: "__SF-UI-Text-Condensed-Bold__", weight: 700},
        Heavy: {selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800}
    },
    Tahoma: {Regular: {selector: "Tahoma", weight: void 0}},
    Times: {Regular: {selector: "Times", weight: void 0}},
    "Times New Roman": {Regular: {selector: "Times New Roman", weight: void 0}},
    Trebuchet: {Regular: {selector: "Trebuchet MS", weight: void 0}},
    Verdana: {Regular: {selector: "Verdana", weight: void 0}}
}, B4 = {
    "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__": ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__": ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__": ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__": ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__": ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__": ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__": "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__": ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__": ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__": ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__": ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__": ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__": ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__": ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__": ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__": ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__": ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__": ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__": ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__": ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__": ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__": ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__": ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__": ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__": ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__": ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__": ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__": ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__": ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__": ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__": ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__": ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__": ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__": ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__": ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__": ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black"
}, H1 = z4;

function Mu(e) {
    return e.weight !== void 0 && e.style !== void 0
}

var $4 = "System Default", N4 = class {
    constructor() {
        R(this, "name", "local"), R(this, "fontFamilies", []), R(this, "byFamilyName", new Map), R(this, "fontAliasBySelector", new Map), R(this, "fontAliases", new Map)
    }

    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }

    createFontFamily(e) {
        let t = {name: e, fonts: [], source: this.name};
        return this.addFontFamily(t), t
    }

    addFontFamily(e) {
        this.fontFamilies.push(e), this.byFamilyName.set(e.name, e)
    }

    importFonts() {
        let e = [];
        for (let r of Object.keys(H1)) {
            let i = H1[r];
            if (!i) continue;
            let o = this.createFontFamily(r);
            for (let s of Object.keys(i)) {
                let a = i[s];
                if (!a) continue;
                let {selector: l, weight: c} = a, u = {variant: s, selector: l, weight: c, family: o};
                o.fonts.push(u)
            }
            e.push(...o.fonts)
        }
        for (let [r, i] of Object.entries(B4)) this.addFontAlias(r, i);
        let {fontFamily: t, aliases: n} = this.getSystemFontFamily();
        this.addFontFamily(t);
        for (let [r, i] of n) this.addFontAlias(r, i);
        return e.push(...t.fonts), e
    }

    addFontAlias(e, t) {
        this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e)
    }

    getSystemFontFamily() {
        let e = "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
            t = {name: $4, fonts: [], source: this.name}, n = new Map,
            r = [400, 100, 200, 300, 500, 600, 700, 800, 900], i = ["normal", "italic"];
        for (let o of i) for (let s of r) {
            let a = j4(s, o), l = `__SystemDefault-${s}-${o}__`,
                c = {variant: a, selector: l, style: o, weight: s, family: t};
            t.fonts.push(c), n.set(l, e)
        }
        return {fontFamily: t, aliases: n}
    }

    getFontAliasBySelector(e) {
        return this.fontAliasBySelector.get(e) || null
    }

    getFontSelectorByAlias(e) {
        return this.fontAliases.get(e) || null
    }

    isFontFamilyAlias(e) {
        return !!(e && /^__.*__$/u.exec(e))
    }
}, W1 = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black"
};

function j4(e, t) {
    let n = t === "normal" ? "Regular" : "Italic";
    return e === 400 ? n : t !== "normal" ? `${W1[e]} ${n}` : `${W1[e]}`
}

var H4 = pr(Vm(), 1);

function sT(e) {
    return !!e.variationAxes
}

function dm(e) {
    return sT(e) && e.family.source !== "custom" ? W4(e.family.name) : e.family.name
}

function W4(e) {
    return `${e} Variable`
}

var Xo = "CUSTOM;";

function U4(e, t) {
    if (!t) return e.substring(0, e.lastIndexOf("."));
    let {font: n} = t, r = n.preferredFamily || n.fontFamily, i = Array.isArray(n.variationAxes);
    if (i && r.toLowerCase().includes("variable")) return r;
    let o = i ? "Variable" : n.preferredSubFamily || n.fontSubFamily;
    return `${r} ${o}`
}

var G4 = class {
    constructor() {
        R(this, "name", "custom"), R(this, "fontFamilies", []), R(this, "byFamilyName", new Map), R(this, "assetsByFamily", new Map)
    }

    importFonts(e) {
        var t, n, r;
        this.fontFamilies.length = 0, this.byFamilyName.clear(), this.assetsByFamily.clear();
        let i = [];
        for (let o of e) {
            if (!this.isValidCustomFontAsset(o)) continue;
            let s = (t = o.properties) == null ? void 0 : t.font.variationAxes, a = Array.isArray(s),
                l = U4(o.name, o.properties), c = this.createFontFamily(l),
                u = (n = o.properties) == null ? void 0 : n.font.openTypeData,
                f = a ? "variable" : this.inferVariantName(l), d = {
                    family: c,
                    selector: `${Xo}${l}`,
                    variant: f,
                    postscriptName: (r = o.properties) == null ? void 0 : r.font.postscriptName,
                    file: o.url,
                    openTypeFeatures: this.validateOpenTypeData(u),
                    variationAxes: this.validateVariationAxes(s)
                };
            c.fonts.push(d), c.owner = o.ownerType === "team" ? "team" : "project", this.assetsByFamily.set(l, o), i.push(...c.fonts)
        }
        return i
    }

    isValidCustomFontAsset(e) {
        var t;
        return !e.mimeType.startsWith("font/") || ((t = e.properties) == null ? void 0 : t.kind) !== "font" || !e.properties.font ? !1 : "fontFamily" in e.properties.font
    }

    validateOpenTypeData(e) {
        if (e && Array.isArray(e)) return e.map(t => {
            if (this.isOpenTypeFeature(t)) return {tag: t.tag, coverage: t.coverage}
        })
    }

    validateVariationAxes(e) {
        if (!e || !Array.isArray(e)) return;
        let t = [];
        for (let n of e) this.isVariationAxis(n) && t.push({
            tag: n.tag,
            name: n.name,
            minValue: n.minValue,
            maxValue: n.maxValue,
            defaultValue: n.defaultValue
        });
        return t
    }

    isOpenTypeFeature(e) {
        return !(typeof e != "object" || e === null || !("tag" in e) || typeof e.tag != "string" || "coverage" in e && typeof e.coverage < "u" && !Array.isArray(e.coverage))
    }

    isVariationAxis(e) {
        return !(typeof e != "object" || e === null || !("tag" in e) || typeof e.tag != "string" || !("name" in e) || typeof e.name != "string" || !("minValue" in e) || typeof e.minValue != "number" || !("maxValue" in e) || typeof e.maxValue != "number" || !("defaultValue" in e) || typeof e.defaultValue != "number")
    }

    inferVariantName(e) {
        let t = ["thin", "ultra light", "extra light", "light", "normal", "medium", "semi bold", "bold", "extra bold", "black"],
            n = [...t.map(s => `${s} italic`), ...t], r = e.toLowerCase(),
            i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
            o = n.find(s => i.includes(s) || i.includes(s.replace(/\s+/gu, "")));
        return o ? o.replace(/^\w|\s\w/gu, s => s.toUpperCase()) : "Regular"
    }

    createFontFamily(e) {
        let t = this.byFamilyName.get(e);
        if (t) return t;
        let n = {source: this.name, name: e, fonts: []};
        return this.addFontFamily(n), n
    }

    addFontFamily(e) {
        this.fontFamilies.push(e), this.byFamilyName.set(e.name, e)
    }

    parseSelector(e) {
        if (!e.startsWith(Xo)) return null;
        let t = e.split(Xo);
        return t[1] === void 0 ? null : {source: "custom", name: t[1]}
    }

    getFontBySelector(e, t = !0) {
        let n = this.parseSelector(e);
        if (!n || !t && !this.byFamilyName.get(n.name)) return;
        let r = this.getFontFamilyByName(n.name).fonts;
        return r.find(o => {
            var s;
            return (s = o.file) == null ? void 0 : s.endsWith(".woff2")
        }) || r[0]
    }

    getFontFamilyByName(e) {
        let t = this.byFamilyName.get(e);
        if (t) return t;
        let n = {source: "custom", name: e, fonts: []};
        return n.fonts.push({selector: `${Xo}${e}`, variant: this.inferVariantName(e), family: n}), n
    }
};

function aT(e, t) {
    return {...q4(e, t), ...X4(e, t)}
}

function q4(e, t) {
    if (t.length === 0) return {variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0};
    let {weight: n, style: r} = e, i = new Map, o = new Map;
    for (let u of t) u.isVariable === e.isVariable && (i.set(`${u.weight}-${u.style}`, u), !(u.weight <= n) && (o.has(u.style) || o.set(u.style, u)));
    let s = o.get(r), a = o.get("italic"), l = e.weight;
    l <= 300 ? (s = i.get(`400-${r}`) ?? s, a = i.get("400-italic") ?? a) : l <= 500 ? (s = i.get(`700-${r}`) ?? s, a = i.get("700-italic") ?? a) : (s = i.get(`900-${r}`) ?? s, a = i.get("900-italic") ?? a);
    let c = i.get(`${n}-italic`);
    return {variantBold: s, variantItalic: c, variantBoldItalic: a}
}

function X4(e, t) {
    if (t.length === 0) return {variantVariable: void 0, variantVariableItalic: void 0};
    let n = new Map;
    for (let r of t) r.isVariable && n.set(`${r.weight}-${r.style}`, r);
    return {
        variantVariable: n.get(`${e.weight}-normal`) ?? n.get("400-normal") ?? void 0,
        variantVariableItalic: n.get(`${e.weight}-italic`) ?? n.get("400-italic") ?? void 0
    }
}

var Y4 = ["display", "sans", "serif", "slab", "handwritten", "script"];

function K4(e) {
    return e.split(",").map(t => t.trim().toLowerCase()).filter(Q4)
}

function Q4(e) {
    return Y4.includes(e)
}

var wa = "FS;", lT = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900
}, cT = Object.keys(lT), Z4 = (() => new RegExp(`^(?:${[...cT, "italic", "variable"].join("|")})`, "u"))(), Ca = class {
    constructor() {
        R(this, "name", "fontshare"), R(this, "fontFamilies", []), R(this, "byFamilyName", new Map)
    }

    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }

    static parseVariant(e) {
        let t = e.toLowerCase().split(" "), n = cT.find(s => t.includes(s)),
            r = e.toLowerCase().includes("italic") ? "italic" : "normal";
        return {weight: n && lT[n] || 400, style: r === "italic" ? r : "normal"}
    }

    parseSelector(e) {
        if (!e.startsWith(wa)) return null;
        let t = e.split("-");
        if (t.length !== 2) return null;
        let [n, r] = t;
        return !n || !r ? null : {
            name: n.replace(wa, ""),
            variant: r,
            source: this.name,
            isVariable: r.toLowerCase().includes("variable")
        }
    }

    static createSelector(e, t) {
        return `${wa}${e}-${t.toLowerCase()}`
    }

    static createVariationAxesSelector(e) {
        return `${wa}${e}`
    }

    addFontFamily(e) {
        this.fontFamilies.push(e), this.byFamilyName.set(e.name, e)
    }

    importFonts(e, t) {
        this.fontFamilies.length = 0, this.byFamilyName.clear();
        let n = [];
        for (let r of e) {
            let o = r.font_styles.filter(u => {
                let f = u.name.toLowerCase();
                return !(!Z4.exec(f) || f.split(" ").includes("wide"))
            }).map(u => ({
                ...Ca.parseVariant(u.name),
                selector: Ca.createSelector(r.name, u.name),
                isVariable: u.is_variable,
                fontshareVariantName: u.name,
                file: u.file
            })), s = Ca.createVariationAxesSelector(r.name), a = t?.[s], l = r.name, c = this.getFontFamilyByName(l);
            c || (c = {name: l, fonts: [], source: this.name}, this.addFontFamily(c));
            for (let u of o) {
                let {
                    variantBold: f,
                    variantBoldItalic: d,
                    variantItalic: m,
                    variantVariable: v,
                    variantVariableItalic: g
                } = aT(u, o), b = {
                    family: c,
                    variant: u.fontshareVariantName.toLowerCase(),
                    selector: u.selector,
                    selectorBold: f?.selector,
                    selectorBoldItalic: d?.selector,
                    selectorItalic: m?.selector,
                    selectorVariable: v?.selector,
                    selectorVariableItalic: g?.selector,
                    weight: u.weight,
                    style: u.style,
                    file: u.file,
                    category: J4(r.category),
                    variationAxes: u.isVariable ? a : void 0
                };
                c.fonts.push(b), n.push(b)
            }
        }
        return n
    }
};

function J4(e) {
    let t = {
        serif: "serif",
        sans: "sans-serif",
        slab: "slab",
        display: "display",
        handwritten: "handwriting",
        script: "handwriting"
    }, n = K4(e)[0];
    return n && t[n]
}

var eB = "Inter", tB = "FR;", nB = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900
}, Om = class {
    constructor() {
        R(this, "name", "framer"), R(this, "fontFamilies", []), R(this, "byFamilyName", new Map)
    }

    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }

    addFontFamily(e) {
        let t = {name: e, fonts: [], source: this.name};
        return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t
    }

    static getDraftFontPropertiesBySelector(e) {
        if (!e.startsWith(tB) && !e.startsWith(eB)) return null;
        let t = e.split("-"), [n, r = ""] = t;
        if (!n) return null;
        let i = r.includes("Italic") ? "italic" : "normal", o = r.replace("Italic", ""), s = o && nB[o] || 400;
        return {family: n, style: i, weight: s, source: "framer", variant: void 0, category: "sans-serif"}
    }

    static createVariationAxesKey(e) {
        return e.familyName
    }

    importFonts(e, t) {
        this.fontFamilies.length = 0, this.byFamilyName.clear();
        let n = [];
        return e.forEach(r => {
            let {familyName: i, ...o} = r, s = Om.createVariationAxesKey(r), a = t?.[s],
                l = this.getFontFamilyByName(i);
            l || (l = this.addFontFamily(i));
            let c = r.selector === r.selectorVariable || r.selector === r.selectorVariableItalic,
                u = {...o, family: l, variationAxes: c ? a : void 0};
            l.fonts.push(u), n.push(u)
        }), n
    }
}, Sa = "GF;", ji = class {
    constructor() {
        R(this, "name", "google"), R(this, "fontFamilies", []), R(this, "byFamilyName", new Map)
    }

    getFontFamilyByName(e) {
        return this.byFamilyName.get(e) ?? null
    }

    static parseVariant(e) {
        if (e === "regular") return {style: "normal", weight: 400};
        let t = /(\d*)(normal|italic)?/u.exec(e);
        if (!t) return {};
        let n = parseInt(t[1] || "400"), r = t[2] === "italic" ? "italic" : "normal";
        return {weight: n, style: r}
    }

    parseSelector(e) {
        if (!e.startsWith(Sa)) return null;
        let t = e.includes("-variable-"), n = t ? e.split("-variable-") : e.split("-");
        if (n.length !== 2) return null;
        let [r, i] = n;
        return !r || !i ? null : {name: r.replace(Sa, ""), variant: i, source: this.name, isVariable: t}
    }

    static createSelector(e, t, n) {
        return `${Sa}${e}-${n ? "variable-" : ""}${t}`
    }

    static createVariationAxesSelector(e) {
        return `${Sa}${e}`
    }

    addFontFamily(e) {
        let t = {name: e, fonts: [], source: this.name};
        return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t
    }

    importFonts(e, t, n) {
        var r;
        this.fontFamilies.length = 0, this.byFamilyName.clear();
        let i = [], o = U1(e, a => a.family), s = U1(t, a => a.family);
        for (let a in o) {
            let l = o[a];
            if (!l) continue;
            let c = this.getFontFamilyByName(l.family);
            c || (c = this.addFontFamily(l.family));
            let f = l.variants.map(h => ({
                ...ji.parseVariant(h),
                googleFontsVariantName: h,
                selector: ji.createSelector(a, h, !1),
                isVariable: !1,
                file: l.files[h]
            })), d = s[a], m = d?.axes ? d.variants.map(h => ({
                ...ji.parseVariant(h),
                googleFontsVariantName: h,
                selector: ji.createSelector(a, h, !0),
                isVariable: !0,
                file: d.files[h]
            })) : [], v = ji.createVariationAxesSelector(l.family), g = n?.[v], b = [...f, ...m], p = b.filter(Mu);
            for (let h of b) {
                let {weight: y, style: w, selector: k, googleFontsVariantName: S} = h, T = Mu(h) ? aT(h, p) : void 0, {
                    variantBold: E,
                    variantItalic: O,
                    variantBoldItalic: I,
                    variantVariable: B,
                    variantVariableItalic: z
                } = T ?? {}, j = {
                    family: c,
                    variant: S,
                    selector: k,
                    selectorBold: E?.selector,
                    selectorBoldItalic: I?.selector,
                    selectorItalic: O?.selector,
                    selectorVariable: B?.selector,
                    selectorVariableItalic: z?.selector,
                    weight: y,
                    style: w,
                    category: rB(l.category),
                    file: (r = h.file) == null ? void 0 : r.replace("http://", "https://"),
                    variationAxes: h.isVariable ? g : void 0
                };
                c.fonts.push(j), i.push(j)
            }
        }
        return i
    }
};

function rB(e) {
    let t = {
        serif: "serif",
        "sans-serif": "sans-serif",
        display: "display",
        handwriting: "handwriting",
        monospace: "monospace"
    };
    if (e) return t[e]
}

function U1(e, t) {
    return e.reduce((n, r) => (n[t(r)] = r, n), {})
}

var iB = pr(iM(), 1), G1 = 5e3, oB = 3, uT = class extends Error {
    constructor(e) {
        super(e), this.name = "FontLoadingError"
    }
}, hm = new Map, pm = new Map, q1 = (e, t) => fT(e, t);

async function fT(e, t, n = 0) {
    let {family: r, url: i, stretch: o, unicodeRange: s, isVariableFont: a} = e, l = a ? e.weight : e.weight || 500,
        c = e.style || "normal", u = `${r}-${c}-${l}-${i}`;
    if (!hm.has(u) || n > 0) {
        let f = new FontFace(r, `url(${i})`, {
            weight: xe(l) ? l : l?.toString(),
            style: c,
            stretch: o,
            unicodeRange: s
        }), d = f.load().then(() => (t.fonts.add(f), dT(r, c, l))).catch(m => {
            if (m.name !== "NetworkError") throw m;
            if (n < oB) return fT(e, t, n + 1);
            throw new uT(`Font loading failed after ${n} retries due to network error: ${JSON.stringify({
                family: r,
                style: c,
                weight: l,
                url: i,
                stretch: o,
                unicodeRange: s
            })}`)
        });
        hm.set(u, d)
    }
    await hm.get(u)
}

async function dT(e, t, n) {
    let r = `${e}-${t}-${n}`;
    if (!pm.has(r)) {
        let o = new iB.default(e, {style: t, weight: n}).load(null, G1);
        pm.set(r, o)
    }
    try {
        await pm.get(r)
    } catch {
        throw new uT(`Failed to check if font is ready (${G1}ms timeout exceeded): ${JSON.stringify({
            family: e,
            style: t,
            weight: n
        })}`)
    }
}

var X1 = {
    Inter: [{tag: "opsz", minValue: 14, maxValue: 32, defaultValue: 14, name: "Optical size"}, {
        tag: "wght",
        minValue: 100,
        maxValue: 900,
        defaultValue: 400,
        name: "Weight"
    }]
};

function mm(e) {
    try {
        if (e === "framer") return Y1(X1) ? X1 : void 0;
        {
            let t = (async () => {
                switch (e) {
                    case"google":
                        return (await import("./google-5Y2W5CAB-KAMWJK7N.mjs")).default;
                    case"fontshare":
                        return (await import("./fontshare-XR4PZDC4-PHFHRCTW.mjs")).default;
                    default:
                        Se(e)
                }
            })();
            return Y1(t) ? t : void 0
        }
    } catch (t) {
        console.error(t);
        return
    }
}

function Y1(e) {
    return Re(e) && Object.values(e).every(aB)
}

function sB(e) {
    return Re(e) && xe(e.tag)
}

function aB(e) {
    return Array.isArray(e) && e.every(sB)
}

var lB = class {
    constructor() {
        R(this, "enabled", !1), R(this, "bySelector", new Map), R(this, "getGoogleFontsListPromise"), R(this, "getFontshareFontsListPromise"), R(this, "loadedSelectors", new Set), R(this, "local"), R(this, "google"), R(this, "fontshare"), R(this, "framer"), R(this, "custom"), this.local = new N4, this.google = new ji, this.fontshare = new Ca, this.framer = new Om, this.custom = new G4, this.bySelector = new Map, this.importLocalFonts()
    }

    addFont(e) {
        this.bySelector.set(e.selector, e)
    }

    getAvailableFonts() {
        return Array.from(this.bySelector.values())
    }

    importLocalFonts() {
        for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e)
    }

    async importGoogleFonts() {
        return this.getGoogleFontsListPromise || (this.getGoogleFontsListPromise = Promise.resolve().then(async () => {
            let {staticFonts: e, variableFonts: t} = await ht.fetchGoogleFontsList(), n = await mm("google");
            for (let r of this.google.importFonts(e, t, n)) this.addFont(r);
            return {staticFonts: e, variableFonts: t}
        })), this.getGoogleFontsListPromise
    }

    async importFontshareFonts() {
        if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = ht.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise, t = await mm("fontshare");
            for (let n of this.fontshare.importFonts(e, t)) this.addFont(n)
        }
        return this.getFontshareFontsListPromise
    }

    importFramerFonts(e) {
        let t = mm("framer");
        this.framer.importFonts(e, t).forEach(n => {
            this.addFont(n)
        })
    }

    importCustomFonts(e) {
        this.bySelector.forEach((t, n) => {
            n.startsWith(Xo) && this.bySelector.delete(n)
        });
        for (let t of this.custom.importFonts(e)) this.addFont(t)
    }

    getFontFamily(e) {
        return this[e.source].getFontFamilyByName(e.name)
    }

    getFontBySelector(e, t = !0) {
        if (e) return e.startsWith(Xo) ? this.custom.getFontBySelector(e, t) : this.bySelector.get(e)
    }

    getDraftPropertiesBySelector(e) {
        let t = this.getFontBySelector(e);
        if (t) return {
            style: t.style,
            weight: t.weight,
            variant: t.variant,
            family: dm(t),
            source: t.family.source,
            category: t.category
        };
        let n = this.google.parseSelector(e);
        if (n) {
            let o = ji.parseVariant(n.variant);
            if (Mu(o)) return {
                style: o.style,
                weight: o.weight,
                variant: n.variant,
                family: n.name,
                source: "google",
                category: void 0
            }
        }
        let r = this.fontshare.parseSelector(e);
        if (r) {
            let o = Ca.parseVariant(r.variant);
            if (Mu(o)) return {
                style: o.style,
                weight: o.weight,
                variant: r.variant,
                family: r.name,
                source: "fontshare",
                category: void 0
            }
        }
        let i = Om.getDraftFontPropertiesBySelector(e);
        return i || null
    }

    isSelectorLoaded(e) {
        return this.loadedSelectors.has(e)
    }

    async loadFont(e) {
        if (this.isSelectorLoaded(e.selector)) return 0;
        let t = e.family.source, n = sT(e);
        switch (t) {
            case"local":
                return this.loadedSelectors.add(e.selector), 1;
            case"framer":
                if (H4.default.env.NODE_ENV !== "test" && await dT(e.family.name, e.style, e.weight), n) {
                    if (!e.file) return Promise.reject(`Unable to load font: ${e.selector}`);
                    await q1({
                        family: dm(e),
                        url: e.file,
                        weight: e.weight,
                        style: e.style,
                        isVariableFont: n
                    }, document)
                }
                return this.loadedSelectors.add(e.selector), 1;
            case"google":
            case"fontshare":
            case"custom":
                return e.file ? (await q1({
                    family: dm(e),
                    url: e.file,
                    weight: e.weight,
                    style: e.style,
                    isVariableFont: n
                }, document), this.loadedSelectors.add(e.selector), 1) : Promise.reject(`Unable to load font: ${e.selector}`);
            default:
                Se(t)
        }
    }

    async loadFontsFromSelectors(e) {
        if (!this.enabled) return [];
        let t = e.some(i => i.startsWith(Sa)), n = e.some(i => i.startsWith(wa));
        if (t || n) {
            try {
                await this.importFontshareFonts()
            } catch (i) {
                Ra("Failed to load Fontshare fonts:", i)
            }
            try {
                await this.importGoogleFonts()
            } catch (i) {
                Ra("Failed to load Google fonts:", i)
            }
        }
        let r = e.map(i => this.bySelector.get(i)).filter(i => !!i);
        return Promise.allSettled(r.map(i => this.loadFont(i)))
    }

    async loadFonts(e) {
        return {newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(r => r.status === "fulfilled" && r.value === 1).length}
    }

    async loadMissingFonts(e, t) {
        let n = e.filter(i => !du.isSelectorLoaded(i));
        if (n.length === 0) return;
        await du.loadWebFontsFromSelectors(n), n.every(i => du.isSelectorLoaded(i)) && t && t()
    }

    async loadWebFontsFromSelectors(e) {
        return this.loadFontsFromSelectors(e)
    }

    get defaultFont() {
        let e = this.getFontBySelector("Inter");
        return D(e, "Can\u2019t find Inter font"), e
    }
}, du = new lB;
Promise.allSettled = Promise.allSettled || (e => Promise.all(e.map(t => t.then(n => ({
    status: "fulfilled",
    value: n
})).catch(n => ({status: "rejected", reason: n})))));
var hT = (e => (e.Padding = "--framer-input-padding", e.BorderRadiusTopLeft = "--framer-input-border-radius-top-left", e.BorderRadiusTopRight = "--framer-input-border-radius-top-right", e.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right", e.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left", e.BorderColor = "--framer-input-border-color", e.BorderTopWidth = "--framer-input-border-top-width", e.BorderRightWidth = "--framer-input-border-right-width", e.BorderBottomWidth = "--framer-input-border-bottom-width", e.BorderLeftWidth = "--framer-input-border-left-width", e.BorderStyle = "--framer-input-border-style", e.Background = "--framer-input-background", e.FontFamily = "--framer-input-font-family", e.FontWeight = "--framer-input-font-weight", e.FontSize = "--framer-input-font-size", e.FontColor = "--framer-input-font-color", e.FontStyle = "--framer-input-font-style", e.FontLetterSpacing = "--framer-input-font-letter-spacing", e.FontTextAlignment = "--framer-input-font-text-alignment", e.FontLineHeight = "--framer-input-font-line-height", e.FontOpenType = "--framer-input-font-open-type-features", e.PlaceholderColor = "--framer-input-placeholder-color", e.BoxShadow = "--framer-input-box-shadow", e.FocusedBorderColor = "--framer-input-focused-border-color", e.FocusedBorderWidth = "--framer-input-focused-border-width", e.FocusedBorderStyle = "--framer-input-focused-border-style", e.FocusedBackground = "--framer-input-focused-background", e.FocusedBoxShadow = "--framer-input-focused-box-shadow", e.FocusedTransition = "--framer-input-focused-transition", e.BooleanCheckedBackground = "--framer-input-boolean-checked-background", e.BooleanCheckedBorderColor = "--framer-input-boolean-checked-border-color", e.BooleanCheckedBorderWidth = "--framer-input-boolean-checked-border-width", e.BooleanCheckedBorderStyle = "--framer-input-boolean-checked-border-style", e.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow", e.BooleanCheckedTransition = "--framer-input-boolean-checked-transition", e.InvalidTextColor = "--framer-input-invalid-text-color", e.IconBackgroundImage = "--framer-input-icon-image", e.IconMaskImage = "--framer-input-icon-mask-image", e.IconColor = "--framer-input-icon-color", e.WrapperHeight = "--framer-input-wrapper-height", e))(hT || {}),
    Te = hT, K1 = "framer-form-input", cB = "framer-form-input-wrapper";

function uB(e) {
    return typeof e == "number" ? e : e.startsWith("--") ? ft.variable(e) : e === "" ? '""' : e
}

function ft(e, t) {
    let n = " ";
    for (let r in t) {
        let i = t[r];
        n += `${r.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${uB(i)}; `
    }
    return e + " {" + n + "}"
}

(e => {
    function t(...n) {
        let r = n[n.length - 1], i = r.startsWith("--") ? `var(${r})` : r;
        for (let o = n.length - 2; o >= 0; o--) i = `var(${n[o]}, ${i})`;
        return i
    }

    e.variable = t
})(ft || (ft = {}));
var TW = [ft(`.${K1}`, {
    padding: ft.variable(Te.Padding),
    background: "transparent",
    fontFamily: ft.variable(Te.FontFamily),
    fontWeight: ft.variable(Te.FontWeight),
    fontSize: ft.variable(Te.FontSize),
    fontStyle: ft.variable(Te.FontStyle),
    color: ft.variable(Te.FontColor),
    fontFeatureSettings: ft.variable(Te.FontOpenType),
    border: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    height: ft.variable(Te.WrapperHeight, "100%"),
    letterSpacing: ft.variable(Te.FontLetterSpacing),
    textAlign: ft.variable(Te.FontTextAlignment),
    lineHeight: ft.variable(Te.FontLineHeight)
}), ft(`.${K1}:focus-visible`, {outline: "none"})];
var RW = `var(${Te.BorderTopWidth}) var(${Te.BorderRightWidth}) var(${Te.BorderBottomWidth}) var(${Te.BorderLeftWidth})`,
    EW = [`.${cB}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Te.BorderRadiusTopLeft});
        border-top-right-radius: var(${Te.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Te.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Te.BorderRadiusBottomLeft});
        border-color: var(${Te.BorderColor});
        border-top-width: var(${Te.BorderTopWidth});
        border-right-width: var(${Te.BorderRightWidth});
        border-bottom-width: var(${Te.BorderBottomWidth});
        border-left-width: var(${Te.BorderLeftWidth});
        border-style: var(${Te.BorderStyle});
        transition: var(${Te.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`];
var gm = 16, FW = {
    content: "",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: `${gm}px`,
    boxSizing: "content-box",
    padding: ft.variable(Te.Padding),
    border: "none",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${gm}px`,
    maskRepeat: "no-repeat",
    maskSize: `${gm}px`,
    backgroundColor: ft.variable(Te.IconColor)
};
var DW = x.forwardRef(function (t, n) {
    let {background: r, children: i, alt: o, draggable: s, ...a} = t, l = {...a.style};
    r && delete l.background;
    let c = La(t.as);
    return de(c, {...a, style: l, ref: n, children: [r && C(Wk, {image: r, alt: o, draggable: s}), i]})
});

function fB(e, t) {
    return e.length === t.length && e.every((n, r) => n === t[r])
}

var dB = /[^\p{Letter}\p{Number}()]+/gu, hB = /^-+|-+$/gu;

function pB(e) {
    return e.toLowerCase().replace(dB, "-").replace(hB, "")
}

var mB = /[&<>'"]/gu,
    gB = e => e.replace(mB, t => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"})[t] || t),
    vB = /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;

function yB(e, t, n, r) {
    return e.replace(vB, (i, o, s, a, l, c, u) => {
        var f, d;
        if (s.toLowerCase() !== "a") return i;
        let m = l || c, v = rg(m.replace(/&amp;/gu, "&"));
        if (!v || !v.target) return i;
        let g = t(v.target);
        if (!qS(g) || !qS(n)) return i;
        let b = g.path, p = n.path;
        if (!b || !p) return i;
        let h = ` data-framer-page-link-target="${v.target}"`, y = Am(g, v.element ?? void 0);
        y && (h += ` data-framer-page-link-element="${v.element}"`);
        let w = bu(m);
        if (!w || xe(w)) return i;
        PC(n, w, r) && (h += " data-framer-page-link-current");
        let k = b, S = Object.assign({}, r, (f = v.collectionItem) == null ? void 0 : f.pathVariables);
        if (Object.keys(S).length > 0 && (k = k.replace(EC, (T, E) => "" + S[E])), (d = v.collectionItem) != null && d.pathVariables) {
            let T = new URLSearchParams(v.collectionItem.pathVariables);
            h += ` data-framer-page-link-path-variables="${T}"`
        }
        return k = ck(p, k), o + a + `"${gB(k + (y ? `#${y}` : ""))}"` + h + u
    })
}

var bB = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}, pT = /[&<>"']/gu,
    xB = (() => new RegExp(pT.source))();

function Q1(e) {
    return e && xB.test(e) ? e.replace(pT, t => bB[t] ?? "") : e || ""
}

var Z1 = "{{ text-placeholder }}", wB = "rich-text-wrapper", SB = Ve(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: m,
        top: v,
        bottom: g,
        center: b,
        className: p,
        stylesPresetsClassName: h,
        visible: y = !0,
        opacity: w,
        rotation: k = 0,
        verticalAlignment: S = "top",
        isEditable: T = !1,
        willChangeTransform: E,
        environment: O = he.current,
        withExternalLayout: I = !1,
        positionSticky: B,
        positionStickyTop: z,
        positionStickyRight: j,
        positionStickyBottom: J,
        positionStickyLeft: H,
        __htmlStructure: ue,
        __fromCanvasComponent: ie = !1,
        _forwardedOverrideId: q,
        _forwardedOverrides: re,
        _usesDOMRect: W,
        children: pe,
        ...me
    } = t, ae = Oa(), X = Va(t), Ye = V(null), ke = n ?? Ye, {navigate: Ke, getRoute: Ee} = _a(), dn = Au();
    xL(t.preload ?? []), $u(t, ke);
    let wt = A(es), jn = ts(), ce = a, Xt = q ?? r;
    if (Xt && re) {
        let Qe = re[Xt];
        typeof Qe == "string" && (ce = Qe)
    }
    let at = "";
    if (ce) {
        let Qe = Q1(ce);
        at = ue ? ue.replace(Z1, Qe) : `<p>${Qe}</p>`
    } else if (o) at = o; else if (l) {
        let Qe = Q1(l);
        at = ue ? ue.replace(Z1, Qe) : `<p>${Qe}</p>`
    } else s && (at = s);
    let hn = FC(), Da = se(() => jn || !Ee || !dn ? at : yB(at, Ee, dn, hn), [jn, at, Ee, dn, hn]);
    if ($(() => {
        let Qe = ke.current;
        if (Qe === null) return;

        function hr(Yt) {
            let pi = ng(Yt.target, ke.current);
            if (Yt.metaKey || !Ke || !pi || pi.getAttribute("target") === "_blank") return;
            Dz(Ke, pi, hn) && Yt.preventDefault()
        }

        return Qe.addEventListener("click", hr), () => {
            Qe.removeEventListener("click", hr)
        }
    }, [Ke, hn]), gT(c, ie, ke), lt(() => {
        Ma()
    }, []), !y) return null;
    let F = T && O() === he.canvas, _ = {
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: mT(S),
            opacity: F ? 0 : w,
            flexShrink: 0
        }, L = he.hasRestrictions(), G = Ea(t, ae || 0, !1), ge = W && (u === "auto" || f === "auto"),
        mt = !!t.transformTemplate || !G || !L || ie || ge ? t.transformTemplate ?? zu(b) : void 0;
    if (!I) {
        if (G && L && !ge) {
            let Qe = ot.getNumber(k).toFixed(4);
            _.transform = `translate(${G.x}px, ${G.y}px) rotate(${Qe}deg)`, _.width = G.width, _.minWidth = G.width, _.height = G.height
        } else _.left = d, _.right = m, _.top = v, _.bottom = g, _.width = u, _.height = f, _.rotate = k;
        B ? (!jn || wt) && (_.position = "sticky", _.willChange = "transform", _.zIndex = 1, _.top = z, _.right = j, _.bottom = J, _.left = H) : jn && (t.positionFixed || t.positionAbsolute) && (_.position = "absolute")
    }
    return Zm(t, _), sC(t, _), E && Ym(_), Object.assign(_, t.style), C(Jt.div, {
        id: r,
        ref: ke, ...me,
        style: _,
        layoutId: X,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": b,
        className: gu(p, h, wB),
        transformTemplate: mt,
        dangerouslySetInnerHTML: {__html: Da}
    })
});

function mT(e) {
    switch (e) {
        case"top":
            return "flex-start";
        case"center":
            return "center";
        case"bottom":
            return "flex-end"
    }
}

function gT(e, t, n) {
    let r = V([]);
    fB(r.current, e) || (r.current = e, du.loadFonts(e).then(({newlyLoadedFontCount: i}) => {
        !t || !n.current || he.current() !== he.canvas || i > 0 && QA(n.current)
    }))
}

function Mm() {
    return {current: null}
}

async function vT(e, t) {
    let n = e.current;
    if (n) return n;
    let r, i = new Promise((o, s) => {
        r = o, t.signal.addEventListener("abort", () => s())
    });
    return Object.defineProperty(e, "current", {
        get() {
            return n
        }, set(o) {
            if (n = o, o === null) {
                t.abort();
                return
            }
            r(o)
        }, configurable: !0
    }), i
}

var yT = {opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0, filter: "none"};

function kB(e) {
    return e in yT
}

function CB(e) {
    let t = {};
    for (let n in e) !kB(n) || _t(e[n]) || (t[n] = [e[n], yT[n]]);
    return t
}

var TB = /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu;

function RB(e, t = "character", n, r) {
    switch (t) {
        case"character":
        case"line": {
            let i = e.split(" "), o = i.length - 1;
            return i.map((s, a) => {
                var l;
                let c = a === o, u = s.length <= 12;
                return de(gn, {
                    children: [C("span", {
                        style: {whiteSpace: u ? "nowrap" : "unset"},
                        children: (l = s.match(TB)) == null ? void 0 : l.map((f, d) => {
                            let m = Mm();
                            return n.add(m), C("span", {ref: m, style: r, children: f}, f + d)
                        })
                    }), c ? null : " "]
                }, s + a + c)
            })
        }
        case"word": {
            let i = e.split(" "), o = i.length - 1;
            return i.map((s, a) => {
                let l = a === o, c = Mm();
                return n.add(c), de(gn, {
                    children: [C("span", {
                        ref: c,
                        style: r,
                        children: s
                    }), l ? null : " "]
                }, s + a + l)
            })
        }
        case"element":
        default:
            return e
    }
}

function EB(e) {
    let t = e.type;
    switch (t) {
        case"appear":
            return e.tokenization ?? "character";
        default:
            Se(t)
    }
}

function J1(e) {
    let t = [];
    return We(e.x) && t.push(`translateX(${e.x}px)`), We(e.y) && t.push(`translateY(${e.y}px)`), We(e.scale) && t.push(`scale(${e.scale})`), We(e.rotate) && t.push(`rotate(${e.rotate}deg)`), We(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`), We(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`), We(e.skewX) && t.push(`skewX(${e.skewX}deg)`), We(e.skewY) && t.push(`skewY(${e.skewY}deg)`), t.join(" ")
}

function FB(e, t, n) {
    if (!n || !n.effect) return;
    let r = n.type;
    switch (r) {
        case"appear":
            switch (n.tokenization) {
                case"element":
                    return !e || !t ? void 0 : {
                        opacity: n.effect.opacity,
                        filter: n.effect.filter,
                        transform: J1(n.effect)
                    };
                case"line":
                case"word":
                case"character":
                default:
                    return !e || !t ? {display: "inline-block"} : {
                        display: "inline-block",
                        opacity: n.effect.opacity,
                        filter: n.effect.filter,
                        transform: J1(n.effect)
                    }
            }
        default:
            Se(r)
    }
}

function PB(e, t, n) {
    let r = pt(() => new Set), i = ts(), o = n || !i,
        s = V({hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e});
    s.current.effect = e;
    let a = e?.trigger ?? "onMount", l = e?.target, c = e?.threshold;
    $(() => {
        if (!o || n) return;
        s.current.hasMounted = !0;

        function d() {
            let {effect: m} = s.current;
            if (!o || !m || m?.repeat !== !0 && s.current.hasAnimatedOnce || m?.type === "appear" && s.current.isAnimating) return;
            Object.assign(s.current, {hasAnimatedOnce: !0, isAnimating: !0});
            let v = m.type;
            switch (v) {
                case"appear": {
                    let {transition: g, startDelay: b, repeat: p, tokenization: h} = m, y = {current: void 0};
                    return ek(h, m.effect, r, g, b, p, () => {
                        Object.assign(s.current, {isAnimating: !1})
                    }, y), () => {
                        var w;
                        return (w = y.current) == null ? void 0 : w.call(y)
                    }
                }
                default:
                    Se(v)
            }
        }

        switch (a) {
            case"onMount":
                d();
                return;
            case"onInView": {
                let m = t?.current;
                return m ? Sl(m, d, {amount: c ?? 0}) : void 0
            }
            case"onScrollTarget": {
                let m = l?.ref.current;
                return m ? Sl(m, d, {
                    amount: c ?? 0,
                    root: document,
                    margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0
                }) : void 0
            }
            default:
                Se(a)
        }
    }, [o, r, n, t, l, c, a]);
    let u = !!e, f = e ? EB(e) : void 0;
    return se(() => ({
        getTokenizer: () => {
            if (r.clear(), !u) return;
            let {hasMounted: d, hasAnimatedOnce: m, effect: v} = s.current,
                g = FB(o, n || _B(d, m, v), s.current.effect);
            return {
                text: b => RB(b, f, r, g), props: b => {
                    if (v?.tokenization !== "element") return;
                    let p = Mm();
                    return r.add(p), {ref: p, style: {...b, ...g}}
                }
            }
        }, play: () => {
            let {effect: d} = s.current;
            if (!d) return;
            let m = d.type;
            switch (m) {
                case"appear": {
                    let {transition: v, startDelay: g} = d;
                    ek(f, d.effect, r, v, g);
                    break
                }
                default:
                    Se(m)
            }
        }
    }), [o, u, r, n, f])
}

function _B(e, t, n) {
    return !(e && n?.trigger === "onMount" || t && !n?.repeat && (n?.trigger === "onInView" || n?.trigger === "onScrollTarget"))
}

async function ek(e = "character", t, n, r, i = 0, o = !1, s, a) {
    let l = CB(t), c = new AbortController;
    switch (a && (a.current = () => c.abort()), e) {
        case"character":
        case"element":
        case"word": {
            let u = await IB(n, c);
            if (u === null || (Zn(u, l, {
                ...r,
                restDelta: .001,
                delay: Od(r?.delay ?? 0, {startDelay: i})
            }).then(() => s?.()), !o || !a)) return;
            a.current = () => void Zn(u, t, {...r, restDelta: .001, delay: Od(r?.delay ?? 0, {startDelay: i})});
            return
        }
        case"line": {
            try {
                for (let f of n) await vT(f, c)
            } catch {
                return
            }
            let u;
            if (Y.read(() => {
                u = OB(n), u.length !== 0 && Y.update(() => {
                    let f = u.map((d, m) => Zn(d, l, {...r, restDelta: .001, delay: i + m * (r?.delay ?? 0)}));
                    Promise.all(f).then(() => s?.())
                })
            }), !o || !a) return;
            a.current = () => {
                u.length !== 0 && u.forEach((f, d) => {
                    Zn(f, t, {...r, restDelta: .001, delay: i + d * (r?.delay ?? 0)})
                })
            };
            return
        }
        default:
            Se(e)
    }
}

async function IB(e, t) {
    if (e.size === 0) return null;
    let n = [];
    for (let r of e) try {
        let i = await vT(r, t);
        i && n.push(i)
    } catch {
        return null
    }
    return n
}

function OB(e) {
    let t = [], n = [], r = null;
    for (let i of e) {
        if (!i.current) continue;
        let o = i.current.offsetTop, s = i.current.offsetHeight;
        !s || r === null || o === r ? n.push(i.current) : (t.push(n), n = [i.current]), s && (r = o)
    }
    return t.push(n), t
}

var tk = Ve(({viewBoxScale: e, viewBox: t, children: n, ...r}, i) => C(Jt.svg, {
    ref: i, ...r,
    viewBox: t,
    children: C(Jt.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: {overflow: "visible", transformOrigin: "center center"},
        children: n
    })
})), MB = Ve((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        anchorLinkOffsetY: s,
        as: a,
        bottom: l,
        center: c,
        children: u,
        environment: f = he.current,
        fonts: d = [],
        height: m,
        isEditable: v = !1,
        left: g,
        name: b,
        opacity: p,
        positionSticky: h,
        positionStickyBottom: y,
        positionStickyLeft: w,
        positionStickyRight: k,
        positionStickyTop: S,
        right: T,
        rotation: E = 0,
        style: O,
        _initialStyle: I,
        stylesPresetsClassNames: B,
        text: z,
        top: j,
        verticalAlignment: J = "top",
        visible: H = !0,
        width: ue,
        willChangeTransform: ie,
        withExternalLayout: q = !1,
        viewBox: re,
        viewBoxScale: W = 1,
        effect: pe,
        ...me
    } = e, ae = Oa(), X = ts(), Ye = A(es), ke = Va(e), Ke = V(null), Ee = t ?? Ke;
    $u(e, Ee), gT(d, n, Ee), lt(() => {
        Ma()
    }, []);
    let dn = PB(pe, Ee), wt = se(() => {
        if (u) return bT(u, B, z, s, void 0, dn.getTokenizer())
    }, [u, B, z, s, dn]);
    if (!H) return null;
    let jn = v && f() === he.canvas, ce = {
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: mT(J),
            opacity: jn ? 0 : p,
            flexShrink: 0
        }, Xt = he.hasRestrictions(), at = Ea(e, ae || 0, !1), hn = o && (ue === "auto" || m === "auto"),
        F = !!e.transformTemplate || !at || !Xt || n || hn ? e.transformTemplate ?? zu(c) : void 0;
    q || (at && Xt && !hn ? (ce.x = at.x, ce.y = at.y, ce.rotate = ot.getNumber(E), ce.width = at.width, ce.minWidth = at.width, ce.height = at.height) : (ce.left = g, ce.right = T, ce.top = j, ce.bottom = l, ce.width = ue, ce.height = m, ce.rotate = E), h ? (!X || Ye) && (ce.position = "sticky", ce.willChange = "transform", ce.zIndex = 1, ce.top = S, ce.right = k, ce.bottom = y, ce.left = w) : X && (e.positionFixed || e.positionAbsolute) && (ce.position = "absolute")), Zm(e, ce), sC(e, ce), ie && Ym(ce), Object.assign(ce, I, O), ke && (me.layout = "preserve-aspect");
    let _ = La(e.as);
    return xe(e.viewBox) ? e.as !== void 0 ? C(_, {
        ...me,
        ref: Ee,
        style: ce,
        layoutId: ke,
        transformTemplate: F,
        "data-framer-name": b,
        "data-framer-component-type": "RichTextContainer",
        children: C(tk, {viewBox: re, viewBoxScale: W, style: {width: "100%", height: "100%"}, children: wt})
    }) : C(tk, {
        ...me,
        ref: Ee,
        style: ce,
        layoutId: ke,
        viewBox: re,
        viewBoxScale: W,
        transformTemplate: F,
        "data-framer-name": b,
        "data-framer-component-type": "RichTextContainer",
        children: wt
    }) : C(_, {
        ...me,
        ref: Ee,
        style: ce,
        layoutId: ke,
        transformTemplate: F,
        "data-framer-name": b,
        "data-framer-component-type": "RichTextContainer",
        children: wt
    })
});

function LB(e) {
    return e.type === gn
}

function VB(e) {
    return e.type === "br"
}

function bT(e, t, n, r, i = {}, o, s = LB(e) ? -1 : 0) {
    let a = mn.toArray(e.props.children);
    xe(n) && (a = a.slice(0, 1));
    let l = !0;
    a = a.map(f => {
        if ((!Mt(f) || !VB(f)) && (l = !1), Mt(f)) return bT(f, t, n, r, i, o, s + 1);
        let d = xe(n) ? n : f;
        return xe(d) && o ? o.text(d) : d
    });
    let {["data-preset-tag"]: c, ...u} = e.props;
    if (xe(e.type) || kl(e.type)) {
        let f = _d(e.type) || e.type, d = c || f, m = xe(d) ? t?.[d] : void 0;
        u.className = gu("framer-text", u.className, m), o && s === 0 && !l && Object.assign(u, o.props(u.style));
        let v = f === "h1" || f === "h2" || f === "h3" || f === "h4" || f === "h5" || f === "h6", g = t?.anchor;
        if (v && g) {
            let b = AB(a, i);
            u.id = b;
            let p = gu("framer-text", g), h = C("a", {href: `#${b}`, className: p, children: a});
            u.style = {...u.style ?? {}, scrollMarginTop: r}, a = [h]
        }
    }
    return mr(e, u, ...a)
}

function AB(e, t) {
    let n = e.map(Lm).join(""), r = pB(n), i = t[r] ?? 0;
    return i > 0 && (r += `-${i}`), t[r] = i + 1, r
}

function Lm(e) {
    return xe(e) || We(e) ? e.toString() : Mt(e) ? Lm(e.props.children) : Array.isArray(e) ? e.map(Lm).join("") : ""
}

var HW = Ve(({children: e, html: t, htmlFromDesign: n, ...r}, i) => {
    let o = t || e || n;
    if (xe(o)) {
        !r.stylesPresetsClassName && Re(r.stylesPresetsClassNames) && (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(" "));
        let s = {[xe(t) ? "html" : "htmlFromDesign"]: o};
        return C(SB, {...r, ...s, ref: i})
    }
    if (!r.stylesPresetsClassNames && xe(r.stylesPresetsClassName)) {
        let [s, a, l, c, u] = r.stylesPresetsClassName.split(" ");
        s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0 ? console.warn(`Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`) : r.stylesPresetsClassNames = {
            h1: s,
            h2: a,
            h3: l,
            p: c,
            a: u
        }
    }
    return C(MB, {...r, ref: i, children: Mt(o) ? o : void 0})
});

function DB(e) {
    var t, n;
    let r = e * Math.PI / 180, i = {x: -Math.sin(r) * 100, y: Math.cos(r) * 100}, o = un(i.x, i.y),
        s = En(un(.5, .5), o), a = te.points({x: 0, y: 0, width: 1, height: 1}),
        l = a.map(g => ({point: g, distance: un.distance(o, g)})).sort((g, b) => g.distance - b.distance),
        c = (t = l[0]) == null ? void 0 : t.point, u = (n = l[1]) == null ? void 0 : n.point;
    D(c && u, "linearGradientLine: Must have 2 closest points.");
    let [f, d] = a.filter(g => !un.isEqual(g, c) && !un.isEqual(g, u));
    D(f && d, "linearGradientLine: Must have 2 opposing points.");
    let m = En.intersection(s, En(c, u)), v = En.intersection(s, En(f, d));
    return D(m && v, "linearGradientLine: Must have a start and end point."), En(m, v)
}

function zB(e, t) {
    var n, r;
    let i = DB(e.angle), o = Aa(e), s = ((n = o[0]) == null ? void 0 : n.position) ?? 0,
        a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1, l = En.pointAtPercentDistance(i, s),
        c = En.pointAtPercentDistance(i, a), u = fo([s, a], [0, 1]);
    return {
        id: `id${t}g${Fa.hash(e)}`,
        x1: l.x,
        y1: l.y,
        x2: c.x,
        y2: c.y,
        stops: o.map(f => ({color: f.value, alpha: Km.getAlpha(f.value) * e.alpha, position: u(f.position)}))
    }
}

function BB(e, t) {
    return {
        id: `id${t}g${Pa.hash(e)}`,
        widthFactor: e.widthFactor,
        heightFactor: e.heightFactor,
        centerAnchorX: e.centerAnchorX,
        centerAnchorY: e.centerAnchorY,
        stops: Aa(e).map(n => ({color: n.value, alpha: Km.getAlpha(n.value) * e.alpha, position: n.position}))
    }
}

function xT(e) {
    if (!xe(e) || e.charAt(e.length - 1) !== "%") return !1;
    let n = e.slice(0, -1), r = parseFloat(n);
    return We(r)
}

function wT(e) {
    let t = e.slice(0, -1), n = parseFloat(t);
    return We(n) ? n : 50
}

function nk(e) {
    return xT(e) ? wT(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : .5
}

function rk(e) {
    return xT(e) ? wT(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : .5
}

function $B(e, t, n, r) {
    if (e = ot.get(e, "#09F"), !Hi.isImageObject(e) || !e.pixelWidth || !e.pixelHeight) return;
    let i = e.pixelWidth, o = e.pixelHeight, s, {fit: a} = e, l = 1, c = 1, u = 0, f = 0;
    if (a === "fill" || a === "fit" || a === "tile" || !a) {
        let m = 1, v = 1, g = i / o, b = t.height * g, p = t.width / g, h = b / t.width, y = p / t.height;
        if (a === "tile") {
            e.backgroundSize ?? (e.backgroundSize = 1), l = Math.round(e.backgroundSize * (i / 2)), c = Math.round(e.backgroundSize * (o / 2));
            let w = t.x ?? 0, k = t.y ?? 0, S = 0, T = 0;
            r && (S = w, T = k), u = (t.width - l) * nk(e.positionX) + S, f = (t.height - c) * rk(e.positionY) + T, s = `translate(${u + w}, ${f + k})`
        } else (a === "fill" || !a ? y > h : y < h) ? (v = y, f = (1 - y) * rk(e.positionY)) : (m = h, u = (1 - h) * nk(e.positionX)), s = `translate(${u}, ${f}) scale(${m}, ${v})`
    }
    return {id: `id${n}g-fillImage`, path: e.src ?? "", transform: s, width: l, height: c, offsetX: u, offsetY: f}
}

var NB = "framer/asset-reference,";

function jB(e) {
    return e.startsWith(`data:${NB}`)
}

function HB(e, t) {
    if (/^\w+:/u.test(e) && !jB(e)) return e;
    typeof t != "number" ? t = void 0 : t <= 512 ? t = 512 : t <= 1024 ? t = 1024 : t <= 2048 ? t = 2048 : t = 4096;
    let n = he.current() === he.export;
    return ht.assetResolver(e, {pixelSize: t, isExport: n}) ?? ""
}

var WB = ({id: e, path: t, transform: n, repeat: r, width: i, height: o, offsetX: s, offsetY: a}) => {
    let l = HB(t);
    return C("pattern", {
        id: e,
        width: r ? i : "100%",
        height: r ? o : "100%",
        patternContentUnits: r ? void 0 : "objectBoundingBox",
        patternUnits: r ? "userSpaceOnUse" : void 0,
        x: r ? s : void 0,
        y: r ? a : void 0,
        children: C("image", {
            width: r ? i : 1,
            height: r ? o : 1,
            href: l,
            preserveAspectRatio: "none",
            transform: r ? void 0 : n,
            x: r ? 0 : void 0,
            y: r ? 0 : void 0
        }, l)
    })
};
var vm, UB = (() => !$A() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function")();

function GB(e, t) {
    return UB && !t ? Document.parseHTMLUnsafe(e) : (vm ?? (vm = new DOMParser), vm.parseFromString(e, t ?? "text/html"))
}

var ik = Lr(), qB = class {
        constructor(e, t, n, r, i = 0) {
            this.id = e, this.svg = t, this.innerHTML = n, this.viewBox = r, this.count = i
        }
    }, ok = "position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict",
    XB = class {
        constructor() {
            R(this, "entries", new Map)
        }

        debugGetEntries() {
            return this.entries
        }

        subscribe(e, t, n) {
            if (!e || e === "") return "";
            let r = this.entries.get(e);
            if (!r) {
                n || (n = `svg${String(Zk(e))}_${String(e.length)}`);
                let i = e, o, s = YB(e);
                s && (t && KB(s, n), s.id = n, o = e$(s), s.removeAttribute("xmlns"), s.removeAttribute("xlink"), s.removeAttribute("xmlns:xlink"), i = s.outerHTML), r = this.createDOMElementFor(i, n, o), this.entries.set(e, r)
            }
            return r.count += 1, r.innerHTML
        }

        getViewBox(e) {
            if (!e || e === "") return;
            let t = this.entries.get(e);
            return t?.viewBox
        }

        unsubscribe(e) {
            if (!e || e === "") return;
            let t = this.entries.get(e);
            t && (t.count -= 1, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3))
        }

        maybeRemoveEntry(e) {
            let t = this.entries.get(e);
            t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)))
        }

        removeDOMElement(e) {
            if (ik) {
                let t = document?.getElementById(e.id);
                t?.remove()
            }
        }

        createDOMElementFor(e, t, n) {
            if (ik) {
                let s = document.getElementById("svg-templates");
                if (s || (s = document.createElement("div"), s.id = "svg-templates", s.ariaHidden = "true", s.style.cssText = ok, document.body.appendChild(s)), !document.getElementById(t)) {
                    let a = document.createElement("div");
                    a.innerHTML = e;
                    let l = a.firstElementChild;
                    l && (l.id = t, s.appendChild(l))
                }
            }
            let r = n ? `0 0 ${n.width} ${n.height}` : void 0,
                o = `<svg style="width:100%;height:100%"${r ? ` viewBox="${r}"` : ""}><use href="#${t}"/></svg>`;
            return new qB(t, e, o, r)
        }

        clear() {
            this.entries.clear()
        }

        generateTemplates() {
            let e = [];
            return e.push(`<div id="svg-templates" style="${ok}" aria-hidden="true">`), this.entries.forEach(t => e.push(t.svg)), e.push("</div>"), e.join(`
`)
        }
    }, Go = new XB;

function YB(e) {
    try {
        let n = GB(e).getElementsByTagName("svg")[0];
        if (!n) throw Error("no svg element found");
        return n
    } catch {
        return
    }
}

function KB(e, t) {
    let n = QB(t);
    ST(e, n)
}

function QB(e) {
    return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "")
}

function ST(e, t) {
    ZB(e, t), Array.from(e.children).forEach(r => {
        ST(r, t)
    })
}

function ZB(e, t) {
    e.getAttributeNames().forEach(r => {
        let i = e.getAttribute(r);
        if (!i) return;
        if (r === "id" && e.setAttribute(r, `${t}_${i}`), r === "href" || r === "xlink:href") {
            let [s, a] = i.split("#");
            if (s) return;
            e.setAttribute(r, `#${t}_${a}`);
            return
        }
        let o = "url(#";
        if (i.includes(o)) {
            let s = i.replace(o, `${o}${t}_`);
            e.setAttribute(r, s)
        }
    })
}

var JB = (() => ({
    cm: 96 / 2.54,
    mm: 96 / 2.54 / 10,
    Q: 96 / 2.54 / 40,
    in: 96,
    pc: 96 / 6,
    pt: 96 / 72,
    px: 1,
    em: 16,
    ex: 8,
    ch: 8,
    rem: 16
}))();

function sk(e) {
    var t;
    if (!e) return;
    let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
    if (!(n?.[1] === void 0 || n?.[2] === void 0) && !((t = n[2]) != null && t.startsWith("%"))) return Math.round(parseFloat(n[1]) * (JB[n[2]] || 1))
}

function e$(e) {
    let t = sk(e.getAttribute("width")), n = sk(e.getAttribute("height"));
    if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0)) return {width: t, height: n}
}

function qW(e) {
    let t = Oa(), n = Va(e), r = x.useRef(null), i = D4();
    return $u(e, r), C(s$, {...e, innerRef: r, parentSize: t, layoutId: n, providedWindow: i})
}

var t$ = 5e4;

function n$(e) {
    return e.indexOf("image") >= 0
}

function r$(e) {
    return e.indexOf("var(--") >= 0
}

function i$(e) {
    return !!(e.borderRadius || e.borderBottomLeftRadius || e.borderBottomRightRadius || e.borderTopLeftRadius || e.borderTopRightRadius)
}

function ak(e, t) {
    var n, r;
    let i = e.current;
    if (!i) return;
    let o = t.providedWindow ?? st, s = i.firstElementChild;
    if (!s || !(s instanceof o.SVGSVGElement)) return;
    if (!s.getAttribute("viewBox")) {
        let m = Go.getViewBox(t.svg);
        m && s.setAttribute("viewBox", m)
    }
    let {withExternalLayout: a, parentSize: l} = t;
    if (!a && Ia(t) && l !== 1 && l !== 2) return;
    let {intrinsicWidth: u, intrinsicHeight: f, _constraints: d} = t;
    ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 && ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 && ne(u) && ne(f) && s.setAttribute("viewBox", `0 0 ${u} ${f}`), d && d.aspectRatio ? s.setAttribute("preserveAspectRatio", "") : s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("width", "100%"), s.setAttribute("height", "100%")
}

function o$() {
    return x.useInsertionEffect(() => {
        Ma()
    }, []), null
}

var s$ = (() => {
    var e;
    return e = class extends su {
        constructor() {
            super(...arguments), R(this, "container", x.createRef()), R(this, "svgElement", null), R(this, "setSVGElement", t => {
                this.svgElement = t, this.setLayerElement(t)
            }), R(this, "previouslyRenderedSVG", ""), R(this, "unmountedSVG", "")
        }

        static frame(t) {
            return Ea(t, t.parentSize || 0)
        }

        get frame() {
            return Ea(this.props, this.props.parentSize || 0)
        }

        componentDidMount() {
            if (this.unmountedSVG) {
                let {svgContentId: t} = this.props, n = t ? `svg${t}` : null;
                Go.subscribe(this.unmountedSVG, !t, n), this.previouslyRenderedSVG = this.unmountedSVG
            }
            this.props.svgContentId || ak(this.container, this.props)
        }

        componentWillUnmount() {
            Go.unsubscribe(this.previouslyRenderedSVG), this.unmountedSVG = this.previouslyRenderedSVG, this.previouslyRenderedSVG = ""
        }

        componentDidUpdate(t) {
            if (super.componentDidUpdate(t), this.props.svgContentId) return;
            let {fill: n} = this.props;
            Hi.isImageObject(n) && Hi.isImageObject(t.fill) && n.src !== t.fill.src && Qk(this.svgElement, "fill", null, !1), ak(this.container, this.props)
        }

        collectLayout(t, n) {
            if (this.props.withExternalLayout) {
                n.width = "100%", n.height = "100%", n.aspectRatio = "inherit";
                return
            }
            let r = this.frame, {rotation: i, intrinsicWidth: o, intrinsicHeight: s, width: a, height: l} = this.props,
                c = ot.getNumber(i);
            if (t.opacity = ne(this.props.opacity) ? this.props.opacity : 1, he.hasRestrictions() && r) {
                Object.assign(t, {
                    transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(4)}deg)`,
                    width: `${r.width}px`,
                    height: `${r.height}px`
                }), Ia(this.props) && (t.position = "absolute");
                let v = r.width / (o || 1), g = r.height / (s || 1);
                n.transformOrigin = "top left";
                let {zoom: b, target: p} = km;
                if (p === he.export) {
                    let h = b > 1 ? b : 1;
                    n.transform = `scale(${v * h}, ${g * h})`, n.zoom = 1 / h
                } else n.transform = `scale(${v}, ${g})`;
                o && s && (n.width = o, n.height = s);
                return
            }
            let {left: u, right: f, top: d, bottom: m} = this.props;
            Object.assign(t, {
                left: u,
                right: f,
                top: d,
                bottom: m,
                width: a,
                height: l,
                rotate: c
            }), Object.assign(n, {left: 0, top: 0, bottom: 0, right: 0, position: "absolute"})
        }

        render() {
            let {
                id: t,
                visible: n,
                style: r,
                fill: i,
                svg: o,
                intrinsicHeight: s,
                intrinsicWidth: a,
                title: l,
                description: c,
                layoutId: u,
                className: f,
                variants: d,
                withExternalLayout: m,
                innerRef: v,
                svgContentId: g,
                height: b,
                opacity: p,
                width: h,
                ...y
            } = this.props;
            if (!m && (!n || !t)) return null;
            let w = t ?? u ?? "svg", k = this.frame, S = k || {width: a || 100, height: s || 100},
                T = {...r, imageRendering: "pixelated", flexShrink: 0}, E = {};
            this.collectLayout(T, E), qD(this.props, T), Zm(this.props, T), su.applyWillChange(this.props, T, !1);
            let O = null;
            if (typeof i == "string" || K.isColorObject(i)) {
                let W = K.isColorObject(i) ? i.initialValue || K.toRgbString(i) : i;
                T.fill = W, T.color = W
            } else if (Fa.isLinearGradient(i)) {
                let W = i, pe = `${encodeURI(t || "")}g${Fa.hash(W)}`;
                T.fill = `url(#${pe})`;
                let {stops: me, x1: ae, x2: X, y1: Ye, y2: ke} = zB(W, w);
                O = C("svg", {
                    ref: this.setSVGElement,
                    width: "100%",
                    height: "100%",
                    style: {position: "absolute"},
                    children: C("linearGradient", {
                        id: pe,
                        x1: ae,
                        x2: X,
                        y1: Ye,
                        y2: ke,
                        children: me.map((Ke, Ee) => C("stop", {
                            offset: Ke.position,
                            stopColor: Ke.color,
                            stopOpacity: Ke.alpha
                        }, Ee))
                    })
                })
            } else if (Pa.isRadialGradient(i)) {
                let W = i, pe = `${encodeURI(t || "")}g${Pa.hash(W)}`;
                T.fill = `url(#${pe})`;
                let me = BB(W, w);
                O = C("svg", {
                    ref: this.setSVGElement,
                    width: "100%",
                    height: "100%",
                    style: {position: "absolute"},
                    children: C("radialGradient", {
                        id: pe,
                        cy: W.centerAnchorY,
                        cx: W.centerAnchorX,
                        r: W.widthFactor,
                        children: me.stops.map((ae, X) => C("stop", {
                            offset: ae.position,
                            stopColor: ae.color,
                            stopOpacity: ae.alpha
                        }, X))
                    })
                })
            } else if (Hi.isImageObject(i)) {
                let W = $B(i, S, w);
                W && (T.fill = `url(#${W.id})`, O = C("svg", {
                    ref: this.setSVGElement,
                    width: "100%",
                    height: "100%",
                    style: {position: "absolute"},
                    children: C("defs", {children: C(WB, {...W})})
                }))
            }
            let I = {"data-framer-component-type": "SVG"}, B = !k;
            B && Object.assign(I, Uk(this.props.center));
            let z = !O && !T.fill && !T.background && !T.backgroundImage && o.length < t$ && !n$(o) && !r$(o), j = null;
            if (z) T.backgroundSize = "100% 100%", T.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(o)}')`, Go.unsubscribe(this.previouslyRenderedSVG), this.previouslyRenderedSVG = ""; else {
                let W = g ? `svg${g}` : null, pe = Go.subscribe(o, !g, W);
                Go.unsubscribe(this.previouslyRenderedSVG), this.previouslyRenderedSVG = o, i$(T) && (T.overflow = "hidden"), j = de(nt, {
                    children: [O, C("div", {
                        className: "svgContainer",
                        style: E,
                        ref: this.container,
                        dangerouslySetInnerHTML: {__html: pe}
                    }, Hi.isImageObject(i) ? i.src : "")]
                })
            }
            let J = La(this.props.as), {href: H, target: ue, rel: ie, onClick: q} = this.props, re = l || c;
            return de(J, {
                ...I, ...y,
                layoutId: u,
                transformTemplate: B ? zu(this.props.center) : void 0,
                id: t,
                ref: v,
                style: T,
                className: f,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: re ? "img" : void 0,
                "aria-label": l,
                "aria-description": c,
                "aria-hidden": re ? void 0 : "true",
                href: H,
                target: ue,
                rel: ie,
                onClick: q,
                children: [j, C(o$, {})]
            })
        }
    }, R(e, "supportsConstraints", !0), R(e, "defaultSVGProps", {
        left: void 0,
        right: void 0,
        top: void 0,
        bottom: void 0,
        style: void 0,
        _constraints: {enabled: !0, aspectRatio: null},
        parentSize: 0,
        rotation: 0,
        visible: !0,
        svg: "",
        shadows: []
    }), R(e, "defaultProps", {...su.defaultProps, ...e.defaultSVGProps}), e
})();
var a$ = 1e3;

function rU(e) {
    return e > a$ ? "lazy" : void 0
}

function iU(e, t, n) {
    let r = kT(t);
    !n?.supportsExplicitInterCodegen && !r.some(i => i.explicitInter === !1) && r.push({
        explicitInter: !1,
        fonts: []
    }), Object.assign(e, {fonts: r})
}

function oU(e) {
    return e.fonts ?? []
}

function sU(e) {
    return e.length === 0 ? [{explicitInter: !1, fonts: []}] : kT(e)
}

function kT(e) {
    let t = {explicitInter: !1, fonts: []}, n = [];
    for (let r of e) c$(r) ? n.push(r) : t.fonts.push(u$(r));
    return t.fonts.length > 0 && n.push(t), n
}

var l$ = "explicitInter";

function c$(e) {
    return l$ in e
}

function u$(e) {
    let t;
    return e.url.startsWith("https://fonts.gstatic.com/s/") ? t = "google" : e.url.startsWith("https://framerusercontent.com/third-party-assets/fontshare/") ? t = "fontshare" : t = "custom", {
        ...e,
        source: t
    }
}

function aU(e, t) {
    let n = `${e}-start`;
    performance.mark(n), t();
    let r = `${e}-end`;
    performance.mark(r), performance.measure(e, n, r)
}

dl.prototype.addChild = function ({transformer: e = t => t}) {
    let t = Ge(e(this.get()));
    return this.onChange(n => t.set(e(n))), t
};/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *//*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
export {
    x as a,
    mn as b,
    gn as c,
    mr as d,
    Zi as e,
    _g as f,
    Ve as g,
    Ha as h,
    Qt as i,
    Q as j,
    A as k,
    $ as l,
    gi as m,
    lt as n,
    Ae as o,
    se as p,
    V as q,
    De as r,
    St as s,
    C as t,
    de as u,
    Y as v,
    qf as w,
    ze as x,
    Xn as y,
    Jt as z,
    $0 as A,
    Qn as B,
    Lt as C,
    z_ as D,
    X0 as E,
    K0 as F,
    Zn as G,
    sI as H,
    gI as I,
    SS as J,
    Z2 as K,
    I6 as L,
    V6 as M,
    z6 as N,
    $6 as O,
    j6 as P,
    cL as Q,
    Rk as R,
    he as S,
    fj as T,
    hV as U,
    gj as V,
    dA as W,
    vj as X,
    aH as Y,
    gu as Z,
    n8 as _,
    l8 as $,
    c8 as aa,
    m8 as ba,
    Tz as ca,
    SC as da,
    w8 as ea,
    kC as fa,
    E8 as ga,
    Bz as ha,
    O8 as ia,
    B8 as ja,
    H8 as ka,
    U8 as la,
    S4 as ma,
    X8 as na,
    k4 as oa,
    C4 as pa,
    Y8 as qa,
    Q8 as ra,
    eW as sa,
    tW as ta,
    aW as ua,
    hW as va,
    du as wa,
    DW as xa,
    HW as ya,
    Go as za,
    qW as Aa,
    rU as Ba,
    iU as Ca,
    oU as Da,
    sU as Ea,
    aU as Fa
};
//# sourceMappingURL=chunk-5DNJE7XR.mjs.map

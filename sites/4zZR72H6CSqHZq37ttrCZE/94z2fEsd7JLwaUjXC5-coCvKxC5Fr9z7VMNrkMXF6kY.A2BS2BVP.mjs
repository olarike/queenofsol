import {a as Yr} from "./chunk-4ZIDTKVR.mjs";
import {
    $ as pr,
    A as xe,
    Aa as kt,
    B as Sr,
    Ba as O,
    C as Oe,
    Ca as er,
    D as yt,
    Da as ze,
    E as _t,
    Ea as ka,
    F as qe,
    G as vt,
    H as Ke,
    I as St,
    Q as Ze,
    S as ke,
    U as l,
    X as ye,
    Y as jr,
    Z as je,
    _ as Ue,
    aa as le,
    b as nr,
    ba as _e,
    c as a,
    d as _r,
    da as $e,
    ea as ya,
    f as vr,
    fa as _a,
    g as Ae,
    h as wa,
    ia as Re,
    j as Fe,
    k as fr,
    ka as m,
    l as X,
    m as Ge,
    n as xa,
    na as Ur,
    o as wt,
    p as $,
    q as B,
    r as re,
    ra as va,
    s as Be,
    sa as Sa,
    t as e,
    u as S,
    ua as Ca,
    v as Xr,
    va as dr,
    w as xt,
    wa as Ct,
    x as qr,
    xa as te,
    y as Ee,
    ya as f,
    z as T
} from "./chunk-5DNJE7XR.mjs";
import "./chunk-JR5VT52U.mjs";
import {b as k, c as _} from "./chunk-RIUMFBNJ.mjs";

var Cr = r => r;
var Dr = {ms: r => 1e3 * r, s: r => r / 1e3};

function Rt(r, i) {
    return i ? r * (1e3 / i) : 0
}

var Ra = (r, i, s) => (((1 - 3 * s + 3 * i) * r + (3 * s - 6 * i)) * r + 3 * i) * r, zn = 1e-7, Mn = 12;

function Vn(r, i, s, o, c) {
    let p, d, g = 0;
    do d = i + (s - i) / 2, p = Ra(d, o, c) - r, p > 0 ? s = d : i = d; while (Math.abs(p) > zn && ++g < Mn);
    return d
}

function kr(r, i, s, o) {
    if (r === i && s === o) return Cr;
    let c = p => Vn(p, 0, 1, r, s);
    return p => p === 0 || p === 1 ? p : Ra(c(p), i, o)
}

var Fc = {
    ease: kr(.25, .1, .25, 1),
    "ease-in": kr(.42, 0, 1, 1),
    "ease-in-out": kr(.42, 0, .58, 1),
    "ease-out": kr(0, 0, .58, 1)
};

function Wa(r, i) {
    var s = {};
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && i.indexOf(o) < 0 && (s[o] = r[o]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") {
        var c = 0;
        for (o = Object.getOwnPropertySymbols(r); c < o.length; c++) i.indexOf(o[c]) < 0 && Object.prototype.propertyIsEnumerable.call(r, o[c]) && (s[o[c]] = r[o[c]])
    }
    return s
}

var hr = {};
Object.defineProperty(hr, "__esModule", {value: !0});
hr.warning = function () {
};
hr.invariant = function () {
};
var Vc = hr.__esModule, Xc = hr.warning, Yn = hr.invariant;
var Dn = 5;

function Jr(r, i, s) {
    let o = Math.max(i - Dn, 0);
    return Rt(s - r(o), i - o)
}

var gr = {stiffness: 100, damping: 10, mass: 1},
    Jn = (r = gr.stiffness, i = gr.damping, s = gr.mass) => i / (2 * Math.sqrt(r * s));

function Qn(r, i, s) {
    return r < i && s >= i || r > i && s <= i
}

var At = ({
              stiffness: r = gr.stiffness,
              damping: i = gr.damping,
              mass: s = gr.mass,
              from: o = 0,
              to: c = 1,
              velocity: p = 0,
              restSpeed: d = 2,
              restDistance: g = .5
          } = {}) => {
    p = p ? Dr.s(p) : 0;
    let h = {done: !1, hasReachedTarget: !1, current: o, target: c}, n = c - o, b = Math.sqrt(r / s) / 1e3,
        x = Jn(r, i, s), I;
    if (x < 1) {
        let u = b * Math.sqrt(1 - x * x);
        I = C => c - Math.exp(-x * b * C) * ((x * b * n - p) / u * Math.sin(u * C) + n * Math.cos(u * C))
    } else I = u => c - Math.exp(-b * u) * (n + (b * n - p) * u);
    return u => {
        h.current = I(u);
        let C = u === 0 ? p : Jr(I, u, h.current), M = Math.abs(C) <= d, v = Math.abs(c - h.current) <= g;
        return h.done = M && v, h.hasReachedTarget = Qn(o, c, h.current), h
    }
}, Aa = ({
             from: r = 0,
             velocity: i = 0,
             power: s = .8,
             decay: o = .325,
             bounceDamping: c,
             bounceStiffness: p,
             changeTarget: d,
             min: g,
             max: h,
             restDistance: n = .5,
             restSpeed: b
         }) => {
    o = Dr.ms(o);
    let x = {hasReachedTarget: !1, done: !1, current: r, target: r},
        I = y => g !== void 0 && y < g || h !== void 0 && y > h,
        u = y => g === void 0 ? h : h === void 0 || Math.abs(g - y) < Math.abs(h - y) ? g : h, C = s * i, M = r + C,
        v = d === void 0 ? M : d(M);
    x.target = v, v !== M && (C = v - r);
    let L = y => -C * Math.exp(-y / o), w = y => v + L(y), A = y => {
        let D = L(y), ce = w(y);
        x.done = Math.abs(D) <= n, x.current = x.done ? v : ce
    }, V, q, E = y => {
        I(x.current) && (V = y, q = At({
            from: x.current,
            to: u(x.current),
            velocity: Jr(w, y, x.current),
            damping: c,
            stiffness: p,
            restDistance: n,
            restSpeed: b
        }))
    };
    return E(0), y => {
        let D = !1;
        return !q && V === void 0 && (D = !0, A(y), E(y)), V !== void 0 && y > V ? (x.hasReachedTarget = !0, q(y - V)) : (x.hasReachedTarget = !1, !D && A(y), x)
    }
}, Wt = 10, Gn = 1e4;

function Oa(r) {
    let i, s = Wt, o = r(0), c = [o.current];
    for (; !o.done && s < Gn;) o = r(s), c.push(o.done ? o.target : o.current), i === void 0 && o.hasReachedTarget && (i = s), s += Wt;
    let p = s - Wt;
    return c.length === 1 && c.push(o.current), {keyframes: c, duration: p / 1e3, overshootDuration: (i ?? p) / 1e3}
}

var Kn = ["", "X", "Y", "Z"], Zn = ["translate", "scale", "rotate", "skew"];
var Pa = {syntax: "<angle>", initialValue: "0deg", toDefaultUnit: r => r + "deg"}, $n = {
    translate: {syntax: "<length-percentage>", initialValue: "0px", toDefaultUnit: r => r + "px"},
    rotate: Pa,
    scale: {syntax: "<number>", initialValue: 1, toDefaultUnit: Cr},
    skew: Pa
}, ei = new Map, ri = r => `--motion-${r}`, Na = ["x", "y", "z"];
Zn.forEach(r => {
    Kn.forEach(i => {
        Na.push(r + i), ei.set(ri(r + i), $n[r])
    })
});
var hm = new Set(Na);
var La = r => document.createElement("div").animate(r, {duration: .001}), Ta = {
    cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
        try {
            La({opacity: [1]})
        } catch {
            return !1
        }
        return !0
    },
    finished: () => !!La({opacity: [0, 1]}).finished
}, Ot = {}, ti = {};
for (let r in Ta) ti[r] = () => (Ot[r] === void 0 && (Ot[r] = Ta[r]()), Ot[r]);

function Fa(r, i) {
    var s;
    return typeof r == "string" ? i ? ((s = i[r]) !== null && s !== void 0 || (i[r] = document.querySelectorAll(r)), r = i[r]) : r = document.querySelectorAll(r) : r instanceof Element && (r = [r]), Array.from(r || [])
}

function Ba(r) {
    let i = new WeakMap;
    return (s = {}) => {
        let o = new Map, c = (d = 0, g = 100, h = 0, n = !1) => {
            let b = `${d}-${g}-${h}-${n}`;
            return o.has(b) || o.set(b, r(Object.assign({
                from: d,
                to: g,
                velocity: h,
                restSpeed: n ? .05 : 2,
                restDistance: n ? .01 : .5
            }, s))), o.get(b)
        }, p = d => (i.has(d) || i.set(d, Oa(d)), i.get(d));
        return {
            createAnimation: (d, g, h, n, b) => {
                var x, I;
                let u, C = d.length;
                if (h && C <= 2 && d.every(ai)) {
                    let v = d[C - 1], L = C === 1 ? null : d[0], w = 0, A = 0, V = b?.generator;
                    if (V) {
                        let {animation: y, generatorStartTime: D} = b, ce = y?.startTime || D || 0,
                            ge = y?.currentTime || performance.now() - ce, t = V(ge).current;
                        A = (x = L) !== null && x !== void 0 ? x : t, (C === 1 || C === 2 && d[0] === null) && (w = Jr(ne => V(ne).current, ge, t))
                    } else A = (I = L) !== null && I !== void 0 ? I : parseFloat(g());
                    let q = c(A, v, w, n?.includes("scale")), E = p(q);
                    u = Object.assign(Object.assign({}, E), {easing: "linear"}), b && (b.generator = q, b.generatorStartTime = performance.now())
                } else u = {easing: "ease", duration: p(c(0, 100)).overshootDuration};
                return u
            }
        }
    }
}

var ai = r => typeof r != "string", gm = Ba(At), um = Ba(Aa), ni = {any: 0, all: 1};

function ii(r, i, {root: s, margin: o, amount: c = "any"} = {}) {
    if (typeof IntersectionObserver > "u") return () => {
    };
    let p = Fa(r), d = new WeakMap, g = n => {
        n.forEach(b => {
            let x = d.get(b.target);
            if (b.isIntersecting !== !!x) if (b.isIntersecting) {
                let I = i(b);
                typeof I == "function" ? d.set(b.target, I) : h.unobserve(b.target)
            } else x && (x(b), d.delete(b.target))
        })
    }, h = new IntersectionObserver(g, {root: s, rootMargin: o, threshold: typeof c == "number" ? c : ni[c]});
    return p.forEach(n => h.observe(n)), () => h.disconnect()
}

var Qr = new WeakMap, rr;

function oi(r, i) {
    if (i) {
        let {inlineSize: s, blockSize: o} = i[0];
        return {width: s, height: o}
    }
    return r instanceof SVGElement && "getBBox" in r ? r.getBBox() : {width: r.offsetWidth, height: r.offsetHeight}
}

function si({target: r, contentRect: i, borderBoxSize: s}) {
    var o;
    (o = Qr.get(r)) === null || o === void 0 || o.forEach(c => {
        c({
            target: r, contentSize: i, get size() {
                return oi(r, s)
            }
        })
    })
}

function li(r) {
    r.forEach(si)
}

function ci() {
    typeof ResizeObserver < "u" && (rr = new ResizeObserver(li))
}

function mi(r, i) {
    rr || ci();
    let s = Fa(r);
    return s.forEach(o => {
        let c = Qr.get(o);
        c || (c = new Set, Qr.set(o, c)), c.add(i), rr?.observe(o)
    }), () => {
        s.forEach(o => {
            let c = Qr.get(o);
            c?.delete(i), c?.size || rr?.unobserve(o)
        })
    }
}

var Gr = new Set, Rr;

function fi() {
    Rr = () => {
        let r = {width: _.innerWidth, height: _.innerHeight}, i = {target: _, size: r, contentSize: r};
        Gr.forEach(s => s(i))
    }, _.addEventListener("resize", Rr)
}

function pi(r) {
    return Gr.add(r), Rr || fi(), () => {
        Gr.delete(r), !Gr.size && Rr && (Rr = void 0)
    }
}

function Kr(r, i) {
    return typeof r == "function" ? pi(r) : mi(r, i)
}

function Pt(r, i, s) {
    r.dispatchEvent(new CustomEvent(i, {detail: {originalEvent: s}}))
}

function Ia(r, i, s) {
    r.dispatchEvent(new CustomEvent(i, {detail: {originalEntry: s}}))
}

var di = {
    isActive: r => !!r.inView, subscribe: (r, {enable: i, disable: s}, {inViewOptions: o = {}}) => {
        let {once: c} = o, p = Wa(o, ["once"]);
        return ii(r, d => {
            if (i(), Ia(r, "viewenter", d), !c) return g => {
                s(), Ia(r, "viewleave", g)
            }
        }, p)
    }
}, Ha = (r, i, s) => o => {
    (!o.pointerType || o.pointerType === "mouse") && (s(), Pt(r, i, o))
}, hi = {
    isActive: r => !!r.hover, subscribe: (r, {enable: i, disable: s}) => {
        let o = Ha(r, "hoverstart", i), c = Ha(r, "hoverend", s);
        return r.addEventListener("pointerenter", o), r.addEventListener("pointerleave", c), () => {
            r.removeEventListener("pointerenter", o), r.removeEventListener("pointerleave", c)
        }
    }
}, gi = {
    isActive: r => !!r.press, subscribe: (r, {enable: i, disable: s}) => {
        let o = p => {
            s(), Pt(r, "pressend", p), _.removeEventListener("pointerup", o)
        }, c = p => {
            i(), Pt(r, "pressstart", p), _.addEventListener("pointerup", o)
        };
        return r.addEventListener("pointerdown", c), () => {
            r.removeEventListener("pointerdown", c), _.removeEventListener("pointerup", o)
        }
    }
}, ui = {inView: di, hover: hi, press: gi}, bm = ["initial", "animate", ...Object.keys(ui), "exit"];
var bi = 100, wi = {
    left: r => `translateX(-${r}px)`,
    right: r => `translateX(${r}px)`,
    top: r => `translateY(-${r}px)`,
    bottom: r => `translateY(${r}px)`
}, Lt = typeof Animation < "u" && typeof Animation.prototype.updatePlaybackRate == "function";

function Ne(r) {
    let {
            slots: i,
            gap: s,
            padding: o,
            paddingPerSide: c,
            paddingTop: p,
            paddingRight: d,
            paddingBottom: g,
            paddingLeft: h,
            speed: n,
            hoverFactor: b,
            direction: x,
            alignment: I,
            sizingOptions: u,
            fadeOptions: C,
            style: M
        } = r, {fadeContent: v, overflow: L, fadeWidth: w, fadeInset: A, fadeAlpha: V} = C, {
            widthType: q,
            heightType: E
        } = u, y = c ? `${p}px ${d}px ${g}px ${h}px` : `${o}px`, D = ke.current() === ke.canvas, ce = i.filter(Boolean),
        ge = nr.count(ce), t = ge > 0;
    x === !0 && (x = "left");
    let ne = x === "left" || x === "right", G = Sr(0), Le = wi[x], he = Oe(G, Le), pe = B(null),
        K = $(() => [vr(), vr()], []), [ie, Te] = re({parent: null, children: null}), Ye = [], tr = [], me = 0, de = 0;
    D && (me = ge ? Math.floor(10 / ge) : 0, de = 1), !D && t && ie.parent && (me = Math.round(ie.parent / ie.children * 2) + 1, me = Math.min(me, bi), de = 1);
    let Me = Fe(() => {
        if (t && pe.current) {
            let j = ne ? pe.current.offsetWidth : pe.current.offsetHeight,
                U = K[0].current ? ne ? K[0].current.offsetLeft : K[0].current.offsetTop : 0,
                be = (K[1].current ? ne ? K[1].current.offsetLeft + K[1].current.offsetWidth : K[1].current.offsetTop + K[1].current.offsetHeight : 0) - U + s;
            Te({parent: j, children: be})
        }
    }, []), Z = D ? {contentVisibility: "auto"} : {};
    if (t) {
        if (!D) {
            let j = B(!0);
            X(() => (Xr.read(Me), Kr(pe.current, ({contentSize: U}) => {
                !j.current && (U.width || U.height) && Xr.read(Me), j.current = !1
            })), [])
        }
        Ye = nr.map(ce, (j, U) => {
            var We, be, fe, Q;
            let we;
            U === 0 && (we = K[0]), U === ce.length - 1 && (we = K[1]);
            let z = {
                width: q ? (We = j.props) === null || We === void 0 ? void 0 : We.width : "100%",
                height: E ? (be = j.props) === null || be === void 0 ? void 0 : be.height : "100%"
            };
            return e(xe, {
                inherit: "id",
                children: e("li", {
                    ref: we,
                    style: z,
                    children: _r(j, {
                        style: {
                            ...(fe = j.props) === null || fe === void 0 ? void 0 : fe.style, ...z,
                            flexShrink: 0, ...Z
                        }, layoutId: j.props.layoutId ? j.props.layoutId + "-original-" + U : void 0
                    }, (Q = j.props) === null || Q === void 0 ? void 0 : Q.children)
                })
            })
        })
    }
    if (!D) for (let j = 0; j < me; j++) tr = [...tr, ...nr.map(ce, (U, We) => {
        var be, fe, Q, we, z, Qe;
        let Ve = {
            width: q ? (be = U.props) === null || be === void 0 ? void 0 : be.width : "100%",
            height: E ? (fe = U.props) === null || fe === void 0 ? void 0 : fe.height : "100%",
            willChange: "transform"
        };
        return e(xe, {
            inherit: "id",
            children: e("li", {
                style: Ve,
                "aria-hidden": !0,
                children: _r(U, {
                    key: j + " " + We,
                    style: {
                        ...(Q = U.props) === null || Q === void 0 ? void 0 : Q.style,
                        width: q ? (we = U.props) === null || we === void 0 ? void 0 : we.width : "100%",
                        height: E ? (z = U.props) === null || z === void 0 ? void 0 : z.height : "100%",
                        flexShrink: 0, ...Z
                    },
                    layoutId: U.props.layoutId ? U.props.layoutId + "-dupe-" + j : void 0
                }, (Qe = U.props) === null || Qe === void 0 ? void 0 : Qe.children)
            }, j + "li" + We)
        }, j + "lg" + We)
    })];
    let oe = ie.children + ie.children * Math.round(ie.parent / ie.children), De = B(null), ar = B(null), Je = B(0),
        Y = B(!1), Hr = _t(), Nr = B(null), ue = B(null);
    if (!D) {
        let j = Ke(pe);
        Lt ? (X(() => {
            if (!(Hr || !oe || !n)) return ue.current = Nr.current.animate({transform: [Le(0), Le(oe)]}, {
                duration: Math.abs(oe) / n * 1e3,
                iterations: 1 / 0,
                easing: "linear"
            }), () => ue.current.cancel()
        }, [b, oe, n]), X(() => {
            ue.current && (j && ue.current.playState === "paused" ? ue.current.play() : !j && ue.current.playState === "running" && ue.current.pause())
        }, [j])) : yt(U => {
            if (!oe || Hr || Lt) return;
            De.current === null && (De.current = U), U = U - De.current;
            let be = (ar.current === null ? 0 : U - ar.current) * (n / 1e3);
            Y.current && (be *= b), Je.current += be, Je.current = qe(0, oe, Je.current), ar.current = U, j && G.set(Je.current)
        })
    }
    let Fr = ne ? "to right" : "to bottom", Br = w / 2, nt = 100 - w / 2, it = Si(A, 0, Br), ot = 100 - A,
        xr = `linear-gradient(${Fr}, rgba(0, 0, 0, ${V}) ${it}%, rgba(0, 0, 0, 1) ${Br}%, rgba(0, 0, 0, 1) ${nt}%, rgba(0, 0, 0, ${V}) ${ot}%)`;
    return t ? e("section", {
        style: {
            ...Ea,
            opacity: de,
            WebkitMaskImage: v ? xr : void 0,
            MozMaskImage: v ? xr : void 0,
            maskImage: v ? xr : void 0,
            overflow: L ? "visible" : "hidden",
            padding: y
        },
        ref: pe,
        children: S(T.ul, {
            ref: Nr,
            style: {
                ...Ea,
                gap: s,
                top: x === "bottom" && za(oe) ? -oe : void 0,
                left: x === "right" && za(oe) ? -oe : void 0,
                placeItems: I,
                position: "relative",
                flexDirection: ne ? "row" : "column", ...M,
                willChange: D ? "auto" : "transform",
                transform: Lt ? Le(0) : he
            },
            onMouseEnter: () => {
                Y.current = !0, ue.current && (ue.current.playbackRate = b)
            },
            onMouseLeave: () => {
                Y.current = !1, ue.current && (ue.current.playbackRate = 1)
            },
            children: [Ye, tr]
        })
    }) : S("section", {
        style: xi,
        children: [e("div", {style: yi, children: "\u2728"}), e("p", {
            style: _i,
            children: "Connect to Content"
        }), e("p", {style: vi, children: "Add layers or components to infinitely loop on your page."})]
    })
}

Ne.defaultProps = {
    gap: 10,
    padding: 10,
    sizingOptions: {widthType: !0, heightType: !0},
    fadeOptions: {fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0},
    direction: !0
};
ye(Ne, {
    slots: {type: l.Array, title: "Children", control: {type: l.ComponentInstance}},
    speed: {
        type: l.Number,
        title: "Speed",
        min: 0,
        max: 1e3,
        defaultValue: 100,
        unit: "%",
        displayStepper: !0,
        step: 5
    },
    direction: {
        type: l.Enum,
        title: "Direction",
        options: ["left", "right", "top", "bottom"],
        optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
        optionTitles: ["Left", "Right", "Top", "Bottom"],
        defaultValue: "left",
        displaySegmentedControl: !0
    },
    alignment: {
        type: l.Enum,
        title: "Align",
        options: ["flex-start", "center", "flex-end"],
        optionIcons: {
            direction: {
                right: ["align-top", "align-middle", "align-bottom"],
                left: ["align-top", "align-middle", "align-bottom"],
                top: ["align-left", "align-center", "align-right"],
                bottom: ["align-left", "align-center", "align-right"]
            }
        },
        defaultValue: "center",
        displaySegmentedControl: !0
    },
    gap: {type: l.Number, title: "Gap"},
    padding: {
        title: "Padding",
        type: l.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0
    },
    sizingOptions: {
        type: l.Object,
        title: "Sizing",
        controls: {
            widthType: {
                type: l.Boolean,
                title: "Width",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            },
            heightType: {
                type: l.Boolean,
                title: "Height",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            }
        }
    },
    fadeOptions: {
        type: l.Object,
        title: "Clipping",
        controls: {
            fadeContent: {type: l.Boolean, title: "Fade", defaultValue: !0},
            overflow: {
                type: l.Boolean,
                title: "Overflow",
                enabledTitle: "Show",
                disabledTitle: "Hide",
                defaultValue: !1,
                hidden(r) {
                    return r.fadeContent === !0
                }
            },
            fadeWidth: {
                type: l.Number, title: "Width", defaultValue: 25, min: 0, max: 100, unit: "%", hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeInset: {
                type: l.Number, title: "Inset", defaultValue: 0, min: 0, max: 100, unit: "%", hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeAlpha: {
                type: l.Number, title: "Opacity", defaultValue: 0, min: 0, max: 1, step: .05, hidden(r) {
                    return r.fadeContent === !1
                }
            }
        }
    },
    hoverFactor: {
        type: l.Number,
        title: "Hover",
        min: 0,
        max: 1,
        unit: "x",
        defaultValue: 1,
        step: .1,
        displayStepper: !0,
        description: "Slows down the speed while you are hovering."
    }
});
var Ea = {
        display: "flex",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        placeItems: "center",
        margin: 0,
        padding: 0,
        listStyleType: "none",
        textIndent: "none"
    }, xi = {
        display: "flex",
        width: "100%",
        height: "100%",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
        color: "#96F",
        background: "rgba(136, 85, 255, 0.1)",
        fontSize: 11,
        overflow: "hidden",
        padding: "20px 20px 30px 20px"
    }, yi = {fontSize: 32, marginBottom: 10}, _i = {margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center"},
    vi = {margin: 0, opacity: .7, maxWidth: 150, lineHeight: 1.5, textAlign: "center"},
    Si = (r, i, s) => Math.min(Math.max(r, i), s), za = r => typeof r == "number" && !isNaN(r);
var Ma = {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, Ci = {
        ...Ma,
        borderRadius: 6,
        background: "rgba(136, 85, 255, 0.3)",
        color: "#85F",
        border: "1px dashed #85F",
        flexDirection: "column"
    }, Tt = {onClick: {type: l.EventHandler}, onMouseEnter: {type: l.EventHandler}, onMouseLeave: {type: l.EventHandler}},
    ki = {type: l.Number, title: "Font Size", min: 2, max: 200, step: 1, displayStepper: !0}, Ri = {
        font: {type: l.Boolean, title: "Font", defaultValue: !1, disabledTitle: "Default", enabledTitle: "Custom"},
        fontFamily: {type: l.String, title: "Family", placeholder: "Inter", hidden: ({font: r}) => !r},
        fontWeight: {
            type: l.Enum,
            title: "Weight",
            options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            optionTitles: ["Thin", "Extra-light", "Light", "Regular", "Medium", "Semi-bold", "Bold", "Extra-bold", "Black"],
            hidden: ({font: r}) => !r
        }
    };

function It(r, i) {
    return Va(!0, r, i)
}

function Ht(r, i) {
    return Va(!1, r, i)
}

function Va(r, i, s = !0) {
    let o = jr();
    X(() => {
        s && o === r && i()
    }, [o])
}

var Wi = () => {
    if (typeof k < "u") {
        let r = k.userAgent.toLowerCase();
        return (r.indexOf("safari") > -1 || r.indexOf("framermobile") > -1 || r.indexOf("framerx") > -1) && r.indexOf("chrome") < 0
    } else return !1
}, Nt = () => $(() => Wi(), []);

function Ft() {
    return $(() => ke.current() === ke.canvas, [])
}

function Bt(r) {
    let {
        borderRadius: i,
        isMixedBorderRadius: s,
        topLeftRadius: o,
        topRightRadius: c,
        bottomRightRadius: p,
        bottomLeftRadius: d
    } = r;
    return $(() => s ? `${o}px ${c}px ${p}px ${d}px` : `${i}px`, [i, s, o, c, p, d])
}

var Et = {
    borderRadius: {
        title: "Radius",
        type: l.FusedNumber,
        toggleKey: "isMixedBorderRadius",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0
    }
};
var Pi = {
    padding: {
        type: l.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
        title: "Padding"
    }
};
var qa;
(function (r) {
    r.Fill = "fill", r.Contain = "contain", r.Cover = "cover", r.None = "none", r.ScaleDown = "scale-down"
})(qa || (qa = {}));
var ja;
(function (r) {
    r.Video = "Upload", r.Url = "URL"
})(ja || (ja = {}));

function Li(r) {
    let {width: i, height: s, topLeft: o, topRight: c, bottomRight: p, bottomLeft: d, id: g, children: h, ...n} = r;
    return n
}

function ur(r) {
    let i = Li(r);
    return e(Hi, {...i})
}

function Ti(r) {
    let i = jr(), s = B(!1), o = B(!1), c = Fe(g => {
        if (!r.current) return;
        let h = (g === 1 ? .999 : g) * r.current.duration, n = Math.abs(r.current.currentTime - h) < .1;
        r.current.duration > 0 && !n && (r.current.currentTime = h)
    }, []), p = Fe(() => {
        let g = r.current;
        if (!g) return;
        g.preload = "auto", !(g.currentTime > 0 && g.onplaying && !g.paused && !g.ended && g.readyState >= g.HAVE_CURRENT_DATA) && g && !s.current && i && (s.current = !0, o.current = !0, g.play().catch(n => {
        }).finally(() => s.current = !1))
    }, []), d = Fe(() => {
        !r.current || s.current || (r.current.pause(), o.current = !1)
    }, []);
    return {play: p, pause: d, setProgress: c, isPlaying: o}
}

function Ii({playingProp: r, muted: i, loop: s, playsinline: o, controls: c}) {
    let [p] = re(() => r), [d, g] = re(!1);
    r !== p && !d && g(!0);
    let h = p && i && s && o && !c && !d, n;
    return h ? n = "on-viewport" : p ? n = "on-mount" : n = "no-autoplay", n
}

var Hi = wa(function (i) {
    let {
            srcType: s = "URL",
            srcUrl: o,
            srcFile: c = "",
            posterEnabled: p = !1,
            controls: d = !1,
            playing: g = !0,
            loop: h = !0,
            muted: n = !0,
            playsinline: b = !0,
            restartOnEnter: x = !1,
            objectFit: I = "cover",
            backgroundColor: u = "rgba(0,0,0,0)",
            radius: C = 0,
            volume: M = 25,
            startTime: v = 0,
            poster: L = "https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg",
            playing: w,
            progress: A,
            onSeeked: V,
            onPause: q,
            onPlay: E,
            onEnd: y,
            onClick: D,
            onMouseEnter: ce,
            onMouseLeave: ge,
            onMouseDown: t,
            onMouseUp: ne
        } = i, G = B(), Le = Nt(), he = B(null), pe = B(null), K = Ft(), ie = Bt(i),
        Te = K ? "no-autoplay" : Ii({playingProp: w, muted: n, loop: h, playsinline: b, controls: d}),
        Ye = K ? !0 : Ke(G), tr = K ? !1 : Ke(G, {margin: "100px", once: !0}), me = v === 100 ? 99.9 : v, {
            play: de,
            pause: Me,
            setProgress: Z,
            isPlaying: oe
        } = Ti(G);
    X(() => {
        K || (w ? de() : Me())
    }, [w]), X(() => {
        K || Te === "on-viewport" && (Ye ? de() : Me())
    }, [Te, Ye]);
    let De = B(!1);
    X(() => {
        if (!De.current) {
            De.current = !0;
            return
        }
        let Y = qr(A) ? A.get() : (A ?? 0) * .01;
        Z((Y ?? 0) || (me ?? 0) / 100)
    }, [me, c, o, A]), X(() => {
        if (qr(A)) return A.on("change", Y => Z(Y))
    }, [A]), It(() => {
        he.current !== null && G.current && (!pe && h || !he.current) && de()
    }), Ht(() => {
        G.current && (pe.current = G.current.ended, he.current = G.current.paused, Me())
    });
    let ar = $(() => {
        let Y = "";
        if (s === "URL") return o + Y;
        if (s === "Upload") return c + Y
    }, [s, c, o, me]);
    X(() => {
        Le && G.current && Te === "on-mount" && setTimeout(() => de(), 50)
    }, []), X(() => {
        G.current && !n && (G.current.volume = (M ?? 0) / 100)
    }, [M]);
    let Je = () => {
        let Y = G.current;
        Y && (Y.currentTime < .3 && me > 0 && Z((me ?? 0) * .01), Te === "on-mount" && de())
    };
    return e("video", {
        onClick: D,
        onMouseEnter: ce,
        onMouseLeave: ge,
        onMouseDown: t,
        onMouseUp: ne,
        src: ar,
        loop: h,
        ref: G,
        onSeeked: Y => V?.(Y),
        onPause: Y => q?.(Y),
        onPlay: Y => E?.(Y),
        onEnded: Y => y?.(Y),
        autoPlay: Te === "on-mount",
        preload: oe.current ? "auto" : Te !== "on-mount" && p && !tr ? "none" : "metadata",
        poster: p ? L : void 0,
        onLoadedData: Je,
        controls: d,
        muted: K ? !0 : n,
        playsInline: b,
        style: {
            cursor: D ? "pointer" : "auto",
            width: "100%",
            height: "100%",
            borderRadius: ie,
            display: "block",
            objectFit: I,
            backgroundColor: u,
            objectPosition: "50% 50%"
        }
    })
});
ur.displayName = "Video";

function Ni(r) {
    return r.charAt(0).toUpperCase() + r.slice(1)
}

function Fi(r) {
    return (r.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(Ni).join(" ")
}

var Ua = ["cover", "fill", "contain", "scale-down", "none"];
ye(ur, {
    srcType: {type: l.Enum, displaySegmentedControl: !0, title: "Source", options: ["URL", "Upload"]},
    srcUrl: {
        type: l.String,
        title: "URL",
        defaultValue: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
        hidden(r) {
            return r.srcType === "Upload"
        }
    },
    srcFile: {
        type: l.File, title: "File", allowedFileTypes: ["mp4", "webm"], hidden(r) {
            return r.srcType === "URL"
        }
    },
    playing: {type: l.Boolean, title: "Playing", enabledTitle: "Yes", disabledTitle: "No"},
    posterEnabled: {
        type: l.Boolean,
        title: "Poster",
        enabledTitle: "Yes",
        disabledTitle: "No",
        description: "We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/)."
    },
    poster: {type: l.Image, title: " ", hidden: ({posterEnabled: r}) => !r},
    backgroundColor: {type: l.Color, title: "Background", defaultValue: "rgba(0,0,0,0)"}, ...Et,
    startTime: {title: "Start Time", type: l.Number, min: 0, max: 100, step: .1, unit: "%"},
    loop: {type: l.Boolean, title: "Loop", enabledTitle: "Yes", disabledTitle: "No"},
    objectFit: {type: l.Enum, title: "Fit", options: Ua, optionTitles: Ua.map(Fi)},
    controls: {type: l.Boolean, title: "Controls", enabledTitle: "Show", disabledTitle: "Hide", defaultValue: !1},
    muted: {type: l.Boolean, title: "Muted", enabledTitle: "Yes", disabledTitle: "No"},
    volume: {type: l.Number, max: 100, min: 0, unit: "%", hidden: ({muted: r}) => r, defaultValue: 25},
    onEnd: {type: l.EventHandler},
    onSeeked: {type: l.EventHandler},
    onPause: {type: l.EventHandler},
    onPlay: {type: l.EventHandler}, ...Tt
});
var Bi = {width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"};
var Ei = {
    ...Bi,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column"
}, Ya = Ae((r, i) => e("div", {style: Ei, ref: i}));
var zt, Da,
    zi = r => (zt || (zt = new Map([["bold", r.createElement(r.Fragment, null, r.createElement("path", {d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z"}))], ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
        d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
        opacity: "0.2"
    }), r.createElement("path", {d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))], ["fill", r.createElement(r.Fragment, null, r.createElement("path", {d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"}))], ["light", r.createElement(r.Fragment, null, r.createElement("path", {d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"}))], ["regular", r.createElement(r.Fragment, null, r.createElement("path", {d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"}))], ["thin", r.createElement(r.Fragment, null, r.createElement("path", {d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"}))]]), Da = r.forwardRef((i, s) => r.createElement("g", {ref: s, ...i}, zt.get(i.weight)))), Da);
var Ja = zi;
var Qa = {
    onClick: {type: l.EventHandler},
    onMouseDown: {type: l.EventHandler},
    onMouseUp: {type: l.EventHandler},
    onMouseEnter: {type: l.EventHandler},
    onMouseLeave: {type: l.EventHandler}
}, Mi = (r, i) => r.find(s => s.toLowerCase().includes(i));

function Ga(r, i, s = "", o, c) {
    let p = $(() => {
        if (s == null || s?.length === 0) return null;
        let g = s.toLowerCase().replace(/-|\s/g, "");
        var h;
        return (h = c[g]) !== null && h !== void 0 ? h : Mi(r, g)
    }, [o, s]);
    return i ? o : p
}

var Mt = ["Acorn", "AddressBook", "AddressBookTabs", "AirTrafficControl", "Airplane", "AirplaneInFlight", "AirplaneLanding", "AirplaneTakeoff", "AirplaneTaxiing", "AirplaneTilt", "Airplay", "Alarm", "Alien", "AlignBottom", "AlignBottomSimple", "AlignCenterVertical", "AlignLeft", "AlignLeftSimple", "AlignRight", "AlignRightSimple", "AlignTop", "AlignTopSimple", "AmazonLogo", "Ambulance", "Anchor", "AnchorSimple", "AndroidLogo", "Angle", "AngularLogo", "Aperture", "AppStoreLogo", "AppWindow", "AppleLogo", "ApplePodcastsLogo", "ApproximateEquals", "Archive", "ArchiveBox", "ArchiveTray", "Armchair", "ArrowArcLeft", "ArrowArcRight", "ArrowBendDownLeft", "ArrowBendDownRight", "ArrowBendLeftDown", "ArrowBendLeftUp", "ArrowBendRightDown", "ArrowBendRightUp", "ArrowBendUpLeft", "ArrowBendUpRight", "ArrowCircleDown", "ArrowCircleDownLeft", "ArrowCircleDownRight", "ArrowCircleLeft", "ArrowCircleRight", "ArrowCircleUp", "ArrowCircleUpLeft", "ArrowCircleUpRight", "ArrowClockwise", "ArrowDown", "ArrowDownLeft", "ArrowDownRight", "ArrowElbowDownLeft", "ArrowElbowDownRight", "ArrowElbowLeft", "ArrowElbowLeftDown", "ArrowElbowLeftUp", "ArrowElbowRight", "ArrowElbowRightDown", "ArrowElbowRightUp", "ArrowElbowUpLeft", "ArrowElbowUpRight", "ArrowFatDown", "ArrowFatLeft", "ArrowFatLineDown", "ArrowFatLineLeft", "ArrowFatLineRight", "ArrowFatLineUp", "ArrowFatLinesDown", "ArrowFatLinesLeft", "ArrowFatLinesRight", "ArrowFatLinesUp", "ArrowFatRight", "ArrowFatUp", "ArrowLeft", "ArrowLineDown", "ArrowLineDownLeft", "ArrowLineDownRight", "ArrowLineLeft", "ArrowLineRight", "ArrowLineUp", "ArrowLineUpLeft", "ArrowLineUpRight", "ArrowRight", "ArrowSquareDown", "ArrowSquareDownLeft", "ArrowSquareDownRight", "ArrowSquareIn", "ArrowSquareLeft", "ArrowSquareOut", "ArrowSquareRight", "ArrowSquareUp", "ArrowSquareUpLeft", "ArrowSquareUpRight", "ArrowUDownLeft", "ArrowUDownRight", "ArrowULeftDown", "ArrowULeftUp", "ArrowURightDown", "ArrowURightUp", "ArrowUUpLeft", "ArrowUUpRight", "ArrowUp", "ArrowUpLeft", "ArrowUpRight", "ArrowsClockwise", "ArrowsDownUp", "ArrowsHorizontal", "ArrowsIn", "ArrowsInCardinal", "ArrowsInLineVertical", "ArrowsInSimple", "ArrowsLeftRight", "ArrowsMerge", "ArrowsOut", "ArrowsOutCardinal", "ArrowsOutSimple", "ArrowsSplit", "ArrowsVertical", "Article", "ArticleMedium", "ArticleNyTimes", "Asclepius", "Asterisk", "AsteriskSimple", "At", "Atom", "Avocado", "Axe", "Baby", "BabyCarriage", "Backpack", "Backspace", "Bag", "BagSimple", "Balloon", "Bandaids", "Bank", "Barbell", "Barcode", "Barn", "Barricade", "Baseball", "BaseballCap", "BaseballHelmet", "Basket", "Basketball", "Bathtub", "BatteryCharging", "BatteryEmpty", "BatteryFull", "BatteryHigh", "BatteryLow", "BatteryMedium", "BatteryPlus", "BatteryPlusVertical", "BatteryVerticalEmpty", "BatteryVerticalFull", "BatteryVerticalHigh", "BatteryVerticalLow", "BatteryWarning", "BeachBall", "Beanie", "Bed", "BeerBottle", "BeerStein", "BehanceLogo", "Bell", "BellRinging", "BellSimple", "BellSimpleRinging", "BellSimpleSlash", "BellSimpleZ", "BellSlash", "BellZ", "Belt", "BezierCurve", "Bicycle", "Binary", "Binoculars", "Biohazard", "Bird", "Blueprint", "Bluetooth", "BluetoothConnected", "BluetoothSlash", "BluetoothX", "Boat", "Bomb", "Bone", "Book", "BookBookmark", "BookOpen", "BookOpenText", "BookOpenUser", "BookUser", "Bookmark", "BookmarkSimple", "Bookmarks", "BookmarksSimple", "Books", "Boot", "Boules", "BoundingBox", "BowlFood", "BowlSteam", "BowlingBall", "BoxArrowDown", "BoxArrowUp", "BoxingGlove", "BracketsAngle", "BracketsCurly", "BracketsRound", "BracketsSquare", "Brain", "Brandy", "Bread", "Bridge", "Briefcase", "BriefcaseMetal", "Broadcast", "Broom", "Browser", "Browsers", "Bug", "BugBeetle", "BugDroid", "Building", "BuildingApartment", "BuildingOffice", "Buildings", "Bulldozer", "Bus", "Butterfly", "CableCar", "Cactus", "Cake", "Calculator", "Calendar", "CalendarBlank", "CalendarCheck", "CalendarDot", "CalendarDots", "CalendarHeart", "CalendarMinus", "CalendarPlus", "CalendarSlash", "CalendarStar", "CalendarX", "CallBell", "Camera", "CameraPlus", "CameraRotate", "CameraSlash", "Campfire", "Car", "CarBattery", "CarProfile", "CarSimple", "Cardholder", "Cards", "CardsThree", "CaretCircleDoubleUp", "CaretCircleDown", "CaretCircleLeft", "CaretCircleRight", "CaretCircleUp", "CaretCircleUpDown", "CaretDoubleDown", "CaretDoubleLeft", "CaretDoubleRight", "CaretDoubleUp", "CaretDown", "CaretLeft", "CaretLineDown", "CaretLineLeft", "CaretLineRight", "CaretLineUp", "CaretRight", "CaretUp", "CaretUpDown", "Carrot", "CashRegister", "CassetteTape", "CastleTurret", "Cat", "CellSignalFull", "CellSignalHigh", "CellSignalLow", "CellSignalMedium", "CellSignalNone", "CellSignalSlash", "CellSignalX", "CellTower", "Certificate", "Chair", "Chalkboard", "ChalkboardSimple", "ChalkboardTeacher", "Champagne", "ChargingStation", "ChartBar", "ChartBarHorizontal", "ChartDonut", "ChartLine", "ChartLineDown", "ChartLineUp", "ChartPie", "ChartPieSlice", "ChartPolar", "ChartScatter", "Chat", "ChatCentered", "ChatCenteredDots", "ChatCenteredSlash", "ChatCenteredText", "ChatCircle", "ChatCircleDots", "ChatCircleSlash", "ChatCircleText", "ChatDots", "ChatSlash", "ChatTeardrop", "ChatTeardropDots", "ChatTeardropSlash", "ChatTeardropText", "ChatText", "Chats", "ChatsCircle", "ChatsTeardrop", "Check", "CheckCircle", "CheckFat", "CheckSquare", "CheckSquareOffset", "Checkerboard", "Checks", "Cheers", "Cheese", "ChefHat", "Cherries", "Church", "Cigarette", "CigaretteSlash", "Circle", "CircleDashed", "CircleHalf", "CircleHalfTilt", "CircleNotch", "CirclesFour", "CirclesThree", "CirclesThreePlus", "Circuitry", "City", "Clipboard", "ClipboardText", "Clock", "ClockAfternoon", "ClockClockwise", "ClockCountdown", "ClockUser", "ClosedCaptioning", "Cloud", "CloudArrowDown", "CloudArrowUp", "CloudCheck", "CloudFog", "CloudLightning", "CloudMoon", "CloudRain", "CloudSlash", "CloudSnow", "CloudSun", "CloudWarning", "CloudX", "Clover", "Club", "CoatHanger", "CodaLogo", "Code", "CodeBlock", "CodeSimple", "CodepenLogo", "CodesandboxLogo", "Coffee", "CoffeeBean", "Coin", "CoinVertical", "Coins", "Columns", "ColumnsPlusLeft", "ColumnsPlusRight", "Command", "Compass", "CompassRose", "CompassTool", "ComputerTower", "Confetti", "ContactlessPayment", "Control", "Cookie", "CookingPot", "Copy", "CopySimple", "Copyleft", "Copyright", "CornersIn", "CornersOut", "Couch", "CourtBasketball", "Cow", "CowboyHat", "Cpu", "Crane", "CraneTower", "CreditCard", "Cricket", "Crop", "Cross", "Crosshair", "CrosshairSimple", "Crown", "CrownCross", "CrownSimple", "Cube", "CubeFocus", "CubeTransparent", "CurrencyBtc", "CurrencyCircleDollar", "CurrencyCny", "CurrencyDollar", "CurrencyDollarSimple", "CurrencyEth", "CurrencyEur", "CurrencyGbp", "CurrencyInr", "CurrencyJpy", "CurrencyKrw", "CurrencyKzt", "CurrencyNgn", "CurrencyRub", "Cursor", "CursorClick", "CursorText", "Cylinder", "Database", "Desk", "Desktop", "DesktopTower", "Detective", "DevToLogo", "DeviceMobile", "DeviceMobileCamera", "DeviceMobileSlash", "DeviceMobileSpeaker", "DeviceRotate", "DeviceTablet", "DeviceTabletCamera", "DeviceTabletSpeaker", "Devices", "Diamond", "DiamondsFour", "DiceFive", "DiceFour", "DiceOne", "DiceSix", "DiceThree", "DiceTwo", "Disc", "DiscoBall", "DiscordLogo", "Divide", "Dna", "Dog", "Door", "DoorOpen", "Dot", "DotOutline", "DotsNine", "DotsSix", "DotsSixVertical", "DotsThree", "DotsThreeCircle", "DotsThreeOutline", "DotsThreeVertical", "Download", "DownloadSimple", "Dress", "Dresser", "DribbbleLogo", "Drone", "Drop", "DropHalf", "DropHalfBottom", "DropSimple", "DropSlash", "DropboxLogo", "Ear", "EarSlash", "Egg", "EggCrack", "Eject", "EjectSimple", "Elevator", "Empty", "Engine", "Envelope", "EnvelopeOpen", "EnvelopeSimple", "EnvelopeSimpleOpen", "Equalizer", "Equals", "Eraser", "EscalatorDown", "EscalatorUp", "Exam", "ExclamationMark", "Exclude", "ExcludeSquare", "Export", "Eye", "EyeClosed", "EyeSlash", "Eyedropper", "EyedropperSample", "Eyeglasses", "Eyes", "FaceMask", "FacebookLogo", "Factory", "Faders", "FadersHorizontal", "FalloutShelter", "Fan", "Farm", "FastForward", "FastForwardCircle", "Feather", "FediverseLogo", "FigmaLogo", "File", "FileArchive", "FileArrowDown", "FileArrowUp", "FileAudio", "FileC", "FileCloud", "FileCode", "FileCpp", "FileCss", "FileCsv", "FileDashed", "FileDoc", "FileHtml", "FileImage", "FileIni", "FileJpg", "FileJs", "FileJsx", "FileLock", "FileMagnifyingGlass", "FileMd", "FileMinus", "FilePdf", "FilePlus", "FilePng", "FilePpt", "FilePy", "FileRs", "FileSql", "FileSvg", "FileText", "FileTs", "FileTsx", "FileTxt", "FileVideo", "FileVue", "FileX", "FileXls", "FileZip", "Files", "FilmReel", "FilmScript", "FilmSlate", "FilmStrip", "Fingerprint", "FingerprintSimple", "FinnTheHuman", "Fire", "FireExtinguisher", "FireSimple", "FireTruck", "FirstAid", "FirstAidKit", "Fish", "FishSimple", "Flag", "FlagBanner", "FlagBannerFold", "FlagCheckered", "FlagPennant", "Flame", "Flashlight", "Flask", "FlipHorizontal", "FlipVertical", "FloppyDisk", "FloppyDiskBack", "FlowArrow", "Flower", "FlowerLotus", "FlowerTulip", "FlyingSaucer", "Folder", "FolderDashed", "FolderLock", "FolderMinus", "FolderNotch", "FolderNotchMinus", "FolderNotchOpen", "FolderNotchPlus", "FolderOpen", "FolderPlus", "FolderSimple", "FolderSimpleDashed", "FolderSimpleLock", "FolderSimpleMinus", "FolderSimplePlus", "FolderSimpleStar", "FolderSimpleUser", "FolderStar", "FolderUser", "Folders", "Football", "FootballHelmet", "Footprints", "ForkKnife", "FourK", "FrameCorners", "FramerLogo", "Function", "Funnel", "FunnelSimple", "FunnelSimpleX", "FunnelX", "GameController", "Garage", "GasCan", "GasPump", "Gauge", "Gavel", "Gear", "GearFine", "GearSix", "GenderFemale", "GenderIntersex", "GenderMale", "GenderNeuter", "GenderNonbinary", "GenderTransgender", "Ghost", "Gif", "Gift", "GitBranch", "GitCommit", "GitDiff", "GitFork", "GitMerge", "GitPullRequest", "GithubLogo", "GitlabLogo", "GitlabLogoSimple", "Globe", "GlobeHemisphereEast", "GlobeHemisphereWest", "GlobeSimple", "GlobeSimpleX", "GlobeStand", "GlobeX", "Goggles", "Golf", "GoodreadsLogo", "GoogleCardboardLogo", "GoogleChromeLogo", "GoogleDriveLogo", "GoogleLogo", "GooglePhotosLogo", "GooglePlayLogo", "GooglePodcastsLogo", "Gps", "GpsFix", "GpsSlash", "Gradient", "GraduationCap", "Grains", "GrainsSlash", "Graph", "GraphicsCard", "GreaterThan", "GreaterThanOrEqual", "GridFour", "GridNine", "Guitar", "HairDryer", "Hamburger", "Hammer", "Hand", "HandArrowDown", "HandArrowUp", "HandCoins", "HandDeposit", "HandEye", "HandFist", "HandGrabbing", "HandHeart", "HandPalm", "HandPeace", "HandPointing", "HandSoap", "HandSwipeLeft", "HandSwipeRight", "HandTap", "HandWaving", "HandWithdraw", "Handbag", "HandbagSimple", "HandsClapping", "HandsPraying", "Handshake", "HardDrive", "HardDrives", "HardHat", "Hash", "HashStraight", "HeadCircuit", "Headlights", "Headphones", "Headset", "Heart", "HeartBreak", "HeartHalf", "HeartStraight", "HeartStraightBreak", "Heartbeat", "Hexagon", "HighDefinition", "HighHeel", "Highlighter", "HighlighterCircle", "Hockey", "Hoodie", "Horse", "Hospital", "Hourglass", "HourglassHigh", "HourglassLow", "HourglassMedium", "HourglassSimple", "HourglassSimpleHigh", "HourglassSimpleLow", "House", "HouseLine", "HouseSimple", "Hurricane", "IceCream", "IdentificationBadge", "IdentificationCard", "Image", "ImageBroken", "ImageSquare", "Images", "ImagesSquare", "Infinity", "Info", "InstagramLogo", "Intersect", "IntersectSquare", "IntersectThree", "Intersection", "Invoice", "Island", "Jar", "JarLabel", "Jeep", "Joystick", "Kanban", "Key", "KeyReturn", "Keyboard", "Keyhole", "Knife", "Ladder", "LadderSimple", "Lamp", "LampPendant", "Laptop", "Lasso", "LastfmLogo", "Layout", "Leaf", "Lectern", "Lego", "LegoSmiley", "LessThan", "LessThanOrEqual", "LetterCircleH", "LetterCircleP", "LetterCircleV", "Lifebuoy", "Lightbulb", "LightbulbFilament", "Lighthouse", "Lightning", "LightningA", "LightningSlash", "LineSegment", "LineSegments", "LineVertical", "Link", "LinkBreak", "LinkSimple", "LinkSimpleBreak", "LinkSimpleHorizontal", "LinkedinLogo", "LinktreeLogo", "LinuxLogo", "List", "ListBullets", "ListChecks", "ListDashes", "ListHeart", "ListMagnifyingGlass", "ListNumbers", "ListPlus", "ListStar", "Lock", "LockKey", "LockKeyOpen", "LockLaminated", "LockLaminatedOpen", "LockOpen", "LockSimple", "LockSimpleOpen", "Lockers", "Log", "MagicWand", "Magnet", "MagnetStraight", "MagnifyingGlass", "MagnifyingGlassMinus", "MagnifyingGlassPlus", "Mailbox", "MapPin", "MapPinArea", "MapPinLine", "MapPinPlus", "MapPinSimple", "MapPinSimpleArea", "MapPinSimpleLine", "MapTrifold", "MarkdownLogo", "MarkerCircle", "Martini", "MaskHappy", "MaskSad", "MastodonLogo", "MathOperations", "MatrixLogo", "Medal", "MedalMilitary", "MediumLogo", "Megaphone", "MegaphoneSimple", "MemberOf", "Memory", "MessengerLogo", "MetaLogo", "Meteor", "Metronome", "Microphone", "MicrophoneSlash", "MicrophoneStage", "Microscope", "MicrosoftExcelLogo", "MicrosoftOutlookLogo", "MicrosoftTeamsLogo", "MicrosoftWordLogo", "Minus", "MinusCircle", "MinusSquare", "Money", "MoneyWavy", "Monitor", "MonitorArrowUp", "MonitorPlay", "Moon", "MoonStars", "Moped", "MopedFront", "Mosque", "Motorcycle", "Mountains", "Mouse", "MouseLeftClick", "MouseMiddleClick", "MouseRightClick", "MouseScroll", "MouseSimple", "MusicNote", "MusicNoteSimple", "MusicNotes", "MusicNotesMinus", "MusicNotesPlus", "MusicNotesSimple", "NavigationArrow", "Needle", "Network", "NetworkSlash", "NetworkX", "Newspaper", "NewspaperClipping", "NotEquals", "NotMemberOf", "NotSubsetOf", "NotSupersetOf", "Notches", "Note", "NoteBlank", "NotePencil", "Notebook", "Notepad", "Notification", "NotionLogo", "NuclearPlant", "NumberCircleEight", "NumberCircleFive", "NumberCircleFour", "NumberCircleNine", "NumberCircleOne", "NumberCircleSeven", "NumberCircleSix", "NumberCircleThree", "NumberCircleTwo", "NumberCircleZero", "NumberEight", "NumberFive", "NumberFour", "NumberNine", "NumberOne", "NumberSeven", "NumberSix", "NumberSquareEight", "NumberSquareFive", "NumberSquareFour", "NumberSquareNine", "NumberSquareOne", "NumberSquareSeven", "NumberSquareSix", "NumberSquareThree", "NumberSquareTwo", "NumberSquareZero", "NumberThree", "NumberTwo", "NumberZero", "Numpad", "Nut", "NyTimesLogo", "Octagon", "OfficeChair", "Onigiri", "OpenAiLogo", "Option", "Orange", "OrangeSlice", "Oven", "Package", "PaintBrush", "PaintBrushBroad", "PaintBrushHousehold", "PaintBucket", "PaintRoller", "Palette", "Panorama", "Pants", "PaperPlane", "PaperPlaneRight", "PaperPlaneTilt", "Paperclip", "PaperclipHorizontal", "Parachute", "Paragraph", "Parallelogram", "Park", "Password", "Path", "PatreonLogo", "Pause", "PauseCircle", "PawPrint", "PaypalLogo", "Peace", "Pen", "PenNib", "PenNibStraight", "Pencil", "PencilCircle", "PencilLine", "PencilRuler", "PencilSimple", "PencilSimpleLine", "PencilSimpleSlash", "PencilSlash", "Pentagon", "Pentagram", "Pepper", "Percent", "Person", "PersonArmsSpread", "PersonSimple", "PersonSimpleBike", "PersonSimpleCircle", "PersonSimpleHike", "PersonSimpleRun", "PersonSimpleSki", "PersonSimpleSwim", "PersonSimpleTaiChi", "PersonSimpleThrow", "PersonSimpleWalk", "Perspective", "Phone", "PhoneCall", "PhoneDisconnect", "PhoneIncoming", "PhoneList", "PhoneOutgoing", "PhonePause", "PhonePlus", "PhoneSlash", "PhoneTransfer", "PhoneX", "PhosphorLogo", "Pi", "PianoKeys", "PicnicTable", "PictureInPicture", "PiggyBank", "Pill", "PingPong", "PintGlass", "PinterestLogo", "Pinwheel", "Pipe", "PipeWrench", "PixLogo", "Pizza", "Placeholder", "Planet", "Plant", "Play", "PlayCircle", "PlayPause", "Playlist", "Plug", "PlugCharging", "Plugs", "PlugsConnected", "Plus", "PlusCircle", "PlusMinus", "PlusSquare", "PokerChip", "PoliceCar", "Polygon", "Popcorn", "Popsicle", "PottedPlant", "Power", "Prescription", "Presentation", "PresentationChart", "Printer", "Prohibit", "ProhibitInset", "ProjectorScreen", "ProjectorScreenChart", "Pulse", "PushPin", "PushPinSimple", "PushPinSimpleSlash", "PushPinSlash", "PuzzlePiece", "QrCode", "Question", "QuestionMark", "Queue", "Quotes", "Rabbit", "Racquet", "Radical", "Radio", "RadioButton", "Radioactive", "Rainbow", "RainbowCloud", "Ranking", "ReadCvLogo", "Receipt", "ReceiptX", "Record", "Rectangle", "RectangleDashed", "Recycle", "RedditLogo", "Repeat", "RepeatOnce", "ReplitLogo", "Resize", "Rewind", "RewindCircle", "RoadHorizon", "Robot", "Rocket", "RocketLaunch", "Rows", "RowsPlusBottom", "RowsPlusTop", "Rss", "RssSimple", "Rug", "Ruler", "Sailboat", "Scales", "Scan", "ScanSmiley", "Scissors", "Scooter", "Screencast", "Screwdriver", "Scribble", "ScribbleLoop", "Scroll", "Seal", "SealCheck", "SealPercent", "SealQuestion", "SealWarning", "Seat", "Seatbelt", "SecurityCamera", "Selection", "SelectionAll", "SelectionBackground", "SelectionForeground", "SelectionInverse", "SelectionPlus", "SelectionSlash", "Shapes", "Share", "ShareFat", "ShareNetwork", "Shield", "ShieldCheck", "ShieldCheckered", "ShieldChevron", "ShieldPlus", "ShieldSlash", "ShieldStar", "ShieldWarning", "ShippingContainer", "ShirtFolded", "ShootingStar", "ShoppingBag", "ShoppingBagOpen", "ShoppingCart", "ShoppingCartSimple", "Shovel", "Shower", "Shrimp", "Shuffle", "ShuffleAngular", "ShuffleSimple", "Sidebar", "SidebarSimple", "Sigma", "SignIn", "SignOut", "Signature", "Signpost", "SimCard", "Siren", "SketchLogo", "SkipBack", "SkipBackCircle", "SkipForward", "SkipForwardCircle", "Skull", "SkypeLogo", "SlackLogo", "Sliders", "SlidersHorizontal", "Slideshow", "Smiley", "SmileyAngry", "SmileyBlank", "SmileyMeh", "SmileyMelting", "SmileyNervous", "SmileySad", "SmileySticker", "SmileyWink", "SmileyXEyes", "SnapchatLogo", "Sneaker", "SneakerMove", "Snowflake", "SoccerBall", "Sock", "SolarPanel", "SolarRoof", "SortAscending", "SortDescending", "SoundcloudLogo", "Spade", "Sparkle", "SpeakerHifi", "SpeakerHigh", "SpeakerLow", "SpeakerNone", "SpeakerSimpleHigh", "SpeakerSimpleLow", "SpeakerSimpleNone", "SpeakerSimpleSlash", "SpeakerSimpleX", "SpeakerSlash", "SpeakerX", "Speedometer", "Sphere", "Spinner", "SpinnerBall", "SpinnerGap", "Spiral", "SplitHorizontal", "SplitVertical", "SpotifyLogo", "SprayBottle", "Square", "SquareHalf", "SquareHalfBottom", "SquareLogo", "SquareSplitVertical", "SquaresFour", "Stack", "StackMinus", "StackOverflowLogo", "StackPlus", "StackSimple", "Stairs", "Stamp", "StandardDefinition", "Star", "StarAndCrescent", "StarFour", "StarHalf", "StarOfDavid", "SteamLogo", "SteeringWheel", "Steps", "Stethoscope", "Sticker", "Stool", "Stop", "StopCircle", "Storefront", "Strategy", "StripeLogo", "Student", "SubsetOf", "SubsetProperOf", "Subtitles", "SubtitlesSlash", "Subtract", "SubtractSquare", "Subway", "Suitcase", "SuitcaseRolling", "SuitcaseSimple", "Sun", "SunDim", "SunHorizon", "Sunglasses", "SupersetOf", "SupersetProperOf", "Swap", "Swatches", "SwimmingPool", "Sword", "Synagogue", "Syringe", "TShirt", "Table", "Tabs", "Tag", "TagChevron", "TagSimple", "Target", "Taxi", "TeaBag", "TelegramLogo", "Television", "TelevisionSimple", "TennisBall", "Tent", "Terminal", "TerminalWindow", "TestTube", "TextAUnderline", "TextAa", "TextAlignCenter", "TextAlignJustify", "TextAlignLeft", "TextAlignRight", "TextB", "TextColumns", "TextH", "TextHFive", "TextHFour", "TextHOne", "TextHSix", "TextHThree", "TextHTwo", "TextIndent", "TextItalic", "TextOutdent", "TextStrikethrough", "TextSubscript", "TextSuperscript", "TextT", "TextTSlash", "TextUnderline", "Textbox", "Thermometer", "ThermometerCold", "ThermometerHot", "ThermometerSimple", "ThreadsLogo", "ThreeD", "ThumbsDown", "ThumbsUp", "Ticket", "TidalLogo", "TiktokLogo", "Tilde", "Timer", "TipJar", "Tipi", "Tire", "ToggleLeft", "ToggleRight", "Toilet", "ToiletPaper", "Toolbox", "Tooth", "Tornado", "Tote", "ToteSimple", "Towel", "Tractor", "Trademark", "TrademarkRegistered", "TrafficCone", "TrafficSign", "TrafficSignal", "Train", "TrainRegional", "TrainSimple", "Tram", "Translate", "Trash", "TrashSimple", "Tray", "TrayArrowDown", "TrayArrowUp", "TreasureChest", "Tree", "TreeEvergreen", "TreePalm", "TreeStructure", "TreeView", "TrendDown", "TrendUp", "Triangle", "TriangleDashed", "Trolley", "TrolleySuitcase", "Trophy", "Truck", "TruckTrailer", "TumblrLogo", "TwitchLogo", "TwitterLogo", "Umbrella", "UmbrellaSimple", "Union", "Unite", "UniteSquare", "Upload", "UploadSimple", "Usb", "User", "UserCheck", "UserCircle", "UserCircleCheck", "UserCircleDashed", "UserCircleGear", "UserCircleMinus", "UserCirclePlus", "UserFocus", "UserGear", "UserList", "UserMinus", "UserPlus", "UserRectangle", "UserSound", "UserSquare", "UserSwitch", "Users", "UsersFour", "UsersThree", "Van", "Vault", "VectorThree", "VectorTwo", "Vibrate", "Video", "VideoCamera", "VideoCameraSlash", "VideoConference", "Vignette", "VinylRecord", "VirtualReality", "Virus", "Visor", "Voicemail", "Volleyball", "Wall", "Wallet", "Warehouse", "Warning", "WarningCircle", "WarningDiamond", "WarningOctagon", "WashingMachine", "Watch", "WaveSawtooth", "WaveSine", "WaveSquare", "WaveTriangle", "Waveform", "WaveformSlash", "Waves", "Webcam", "WebcamSlash", "WebhooksLogo", "WechatLogo", "WhatsappLogo", "Wheelchair", "WheelchairMotion", "WifiHigh", "WifiLow", "WifiMedium", "WifiNone", "WifiSlash", "WifiX", "Wind", "Windmill", "WindowsLogo", "Wine", "Wrench", "X", "XCircle", "XLogo", "XSquare", "Yarn", "YinYang", "YoutubeLogo"],
    Vi = "https://framer.com/m/phosphor-icons/", Ka = ["thin", "light", "regular", "bold", "fill", "duotone"],
    Xi = Mt.reduce((r, i) => (r[i.toLowerCase()] = i, r), {});

function Pe(r) {
    let {
        color: i,
        selectByList: s,
        iconSearch: o,
        iconSelection: c,
        onClick: p,
        onMouseDown: d,
        onMouseUp: g,
        onMouseEnter: h,
        onMouseLeave: n,
        weight: b,
        mirrored: x
    } = r, I = B(!1), u = Ga(Mt, s, o, c, Xi), [C, M] = re(u === "Home" ? Ja(Be) : null);

    async function v() {
        try {
            let q = await import(`${Vi}${u}.js@0.0.57`);
            I.current && M(q.default(Be))
        } catch {
            I.current && M(null)
        }
    }

    X(() => (I.current = !0, v(), () => {
        I.current = !1
    }), [u]);
    let w = ke.current() === ke.canvas ? e(Ya, {}) : null;
    return e(T.div, {
        style: {display: "contents"},
        onClick: p,
        onMouseEnter: h,
        onMouseLeave: n,
        onMouseDown: d,
        onMouseUp: g,
        children: C ? e("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 256",
            style: {
                userSelect: "none",
                width: "100%",
                height: "100%",
                display: "inline-block",
                fill: i,
                color: i,
                flexShrink: 0,
                transform: x ? "scale(-1, 1)" : void 0
            },
            focusable: "false",
            color: i,
            children: e(C, {color: i, weight: b})
        }) : w
    })
}

Pe.displayName = "Phosphor";
Pe.defaultProps = {
    width: 24,
    height: 24,
    iconSelection: "House",
    iconSearch: "House",
    color: "#66F",
    selectByList: !0,
    weight: "regular",
    mirrored: !1
};
ye(Pe, {
    selectByList: {
        type: l.Boolean,
        title: "Select",
        enabledTitle: "List",
        disabledTitle: "Search",
        defaultValue: Pe.defaultProps.selectByList
    },
    iconSelection: {
        type: l.Enum,
        options: Mt,
        defaultValue: Pe.defaultProps.iconSelection,
        title: "Name",
        hidden: ({selectByList: r}) => !r,
        description: "Find every icon name on the [Phosphor site](https://phosphoricons.com/)"
    },
    iconSearch: {type: l.String, title: "Name", placeholder: "Menu, Wifi, Box\u2026", hidden: ({selectByList: r}) => r},
    color: {type: l.Color, title: "Color", defaultValue: Pe.defaultProps.color},
    weight: {
        type: l.Enum,
        title: "Weight",
        optionTitles: Ka.map(r => r.charAt(0).toUpperCase() + r.slice(1)),
        options: Ka,
        defaultValue: Pe.defaultProps.weight
    },
    mirrored: {type: l.Boolean, enabledTitle: "Yes", disabledTitle: "No", defaultValue: Pe.defaultProps.mirrored}, ...Qa
});
var Zr = () => typeof document == "object";

function qi() {
    if (Zr()) {
        if (typeof document.hidden < "u") return "visibilitychange";
        if (typeof document.msHidden < "u") return "msvisibilitychange";
        if (typeof document.webkitHidden < "u") return "webkitvisibilitychange"
    }
}

function ji() {
    if (Zr()) {
        if (typeof document.hidden < "u") return "hidden";
        if (typeof document.msHidden < "u") return "msHidden";
        if (typeof document.webkitHidden < "u") return "webkitHidden"
    }
}

function Za() {
    if (Zr()) return !document[ji()]
}

function $a() {
    if (!Zr()) return;
    let [r, i] = re(Za()), s = () => i(Za());
    return X(() => {
        let o = qi();
        return document.addEventListener(o, s, !1), () => {
            document.removeEventListener(o, s)
        }
    }), r
}

var Vt = .001;

function ee(r) {
    let {
            slots: i,
            startFrom: s,
            direction: o,
            effectsOptions: c,
            autoPlayControl: p,
            dragControl: d,
            alignment: g,
            gap: h,
            padding: n,
            paddingPerSide: b,
            paddingTop: x,
            paddingRight: I,
            paddingBottom: u,
            paddingLeft: C,
            itemAmount: M,
            fadeOptions: v,
            intervalControl: L,
            transitionControl: w,
            arrowOptions: A,
            borderRadius: V,
            progressOptions: q,
            style: E
        } = r, {
            effectsOpacity: y,
            effectsScale: D,
            effectsRotate: ce,
            effectsPerspective: ge,
            effectsHover: t
        } = c, {fadeContent: ne, overflow: G, fadeWidth: Le, fadeInset: he, fadeAlpha: pe} = v, {
            showMouseControls: K,
            arrowSize: ie,
            arrowRadius: Te,
            arrowFill: Ye,
            leftArrow: tr,
            rightArrow: me,
            arrowShouldSpace: de = !0,
            arrowShouldFadeIn: Me = !1,
            arrowPosition: Z,
            arrowPadding: oe,
            arrowGap: De,
            arrowPaddingTop: ar,
            arrowPaddingRight: Je,
            arrowPaddingBottom: Y,
            arrowPaddingLeft: Hr
        } = A, {
            showProgressDots: Nr,
            dotSize: ue,
            dotsInset: Fr,
            dotsRadius: Br,
            dotsPadding: nt,
            dotsGap: it,
            dotsFill: ot,
            dotsBackground: xr,
            dotsActiveOpacity: j,
            dotsOpacity: U,
            dotsBlur: We
        } = q, be = b ? `${x}px ${I}px ${u}px ${C}px` : `${n}px`, fe = ke.current() === ke.canvas, Q = i.filter(Boolean),
        we = nr.count(Q) > 0, z = o === "left" || o === "right", Qe = o === "right" || o === "bottom";
    if (!we) return S("section", {
        style: Ui,
        children: [e("div", {style: Yi, children: "\u2B50\uFE0F"}), e("p", {
            style: Di,
            children: "Connect to Content"
        }), e("p", {style: Ji, children: "Add layers or components to make infinite auto-playing slideshows."})]
    });
    let Ve = B(null), se = $(() => Q.map(H => vr()), [Q]), st = B(void 0), [J, gn] = re({
        parent: null,
        children: null,
        item: null,
        itemWidth: null,
        itemHeight: null,
        viewportLength: null
    }), [un, ra] = re(!1), [bn, ta] = re(p), [wn, aa] = re(!1), [or, na] = re(!1), lt = [], ia = 4;
    fe && (ia = 1);
    let oa = Fe(() => {
        if (we && Ve.current) {
            let H = Q.length - 1, He = z ? Ve.current.offsetWidth : Ve.current.offsetHeight,
                Ce = se[0].current ? z ? se[0].current.offsetLeft : se[0].current.offsetTop : 0,
                mr = (se[H].current ? z ? se[H].current.offsetLeft + se[H].current.offsetWidth : se[H].current.offsetTop + se[H].current.offsetHeight : 0) - Ce + h,
                Mr = se[0].current ? z ? se[0].current.offsetWidth : se[0].current.offsetHeight : 0,
                gt = se[0].current ? se[0].current.offsetWidth : 0, ut = se[0].current ? se[0].current.offsetHeight : 0,
                bt = z ? Math.max(document.documentElement.clientWidth || 0, _.innerWidth || 0, Ve.current.offsetWidth) : Math.max(document.documentElement.clientHeight || 0, _.innerHeight || 0, Ve.current.offsetHeight);
            gn({parent: He, children: mr, item: Mr, itemWidth: gt, itemHeight: ut, viewportLength: bt})
        }
    }, [we]), sa = Fe(() => {
        St.read(oa)
    }, [oa]);
    wt(() => {
        we && sa()
    }, [we, M]);
    let ct = B(!0);
    X(() => Kr(Ve.current, ({contentSize: H}) => {
        !ct.current && (H.width || H.height) && (sa(), na(!0)), ct.current = !1
    }), []), X(() => {
        if (or) {
            let H = setTimeout(() => na(!1), 500);
            return () => clearTimeout(H)
        }
    }, [or]);
    let sr = Q?.length, Er = fe ? 0 : J?.children, mt = J?.item + h,
        xn = s * mt, [Ie, yr] = re(s + sr), [yn, la] = re(!1), ca = B(null), _n = Ke(ca), ma = $a() && _n,
        fa = Qe ? 1 : -1, lr = Sr(Er), pa = z ? -s * (J?.itemWidth + h) : -s * (J?.itemHeight + h),
        ft = () => fa * Ie * mt, pt = fe ? 0 : Oe(lr, H => {
            let He = qe(-Er, -Er * 2, H);
            return isNaN(He) ? 0 : He
        }), vn = qe(0, sr, Ie), Sn = qe(0, -sr, Ie);
    wt(() => {
        J?.children !== null && !ct.current && or && lr.set(ft())
    }, [J, Er, fa, xn, Ie, mt, or]);
    let da = () => {
        fe || !we || !J.parent || yn || (lr.get() !== ft() && vt(lr, ft(), w), p && bn && (st.current = setTimeout(() => {
            yr(Ie + 1), da()
        }, L * 1e3)))
    }, cr = H => {
        yr(Qe ? Ie - H : Ie + H)
    }, Cn = H => {
        let He = qe(0, sr, Ie), Ce = qe(0, -sr, Ie), Xe = H - He, mr = H - Math.abs(Ce);
        yr(Qe ? Ie - mr : Ie + Xe)
    }, kn = () => {
        la(!0)
    }, Rn = (H, {offset: He, velocity: Ce}) => {
        la(!1);
        let Xe = z ? He.x : He.y, mr = 200, Mr = z ? Ce.x : Ce.y, gt = Xe < -J.item / 2, ut = Xe > J.item / 2,
            bt = Math.abs(Xe), Vr = Math.round(bt / J.item), ba = Vr === 0 ? 1 : Vr;
        Mr > mr ? cr(-ba) : Mr < -mr ? cr(ba) : (gt && cr(Vr), ut && cr(-Vr))
    };
    X(() => {
        if (!(!ma || or)) return da(), () => st.current && clearTimeout(st.current)
    }, [lt, ma, or]);
    let Wn = 0, ha = `calc(${100 / M}% - ${h}px + ${h / M}px)`;
    for (let H = 0; H < ia; H++) lt.push(...nr.map(Q, (He, Ce) => {
        let Xe;
        return Ce === 0 && (Xe = se[0]), Ce === Q.length - 1 && (Xe = se[1]), e(Ki, {
            ref: se[Ce],
            slideKey: H + Ce + "lg",
            index: H,
            width: z && M > 1 ? ha : "100%",
            height: z ? "100%" : M > 1 ? ha : "100%",
            size: J,
            child: He,
            numChildren: Q?.length,
            wrappedValue: pt,
            childCounter: Wn++,
            gap: h,
            isCanvas: fe,
            isHorizontal: z,
            effectsOpacity: y,
            effectsScale: D,
            effectsRotate: ce,
            children: H + Ce
        }, H + Ce + "lg")
    }));
    let An = z ? "to right" : "to bottom", ga = Le / 2, On = 100 - Le / 2, Pn = Gi(he, 0, ga), Ln = 100 - he,
        dt = `linear-gradient(${An}, rgba(0, 0, 0, ${pe}) ${Pn}%, rgba(0, 0, 0, 1) ${ga}%, rgba(0, 0, 0, 1) ${On}%, rgba(0, 0, 0, ${pe}) ${Ln}%)`,
        ht = [], zr = {};
    if (Nr) {
        for (let H = 0; H < Q?.length; H++) ht.push(e(Zi, {
            dotStyle: {
                ...eo,
                width: ue,
                height: ue,
                backgroundColor: ot
            },
            buttonStyle: Xt,
            selectedOpacity: j,
            opacity: U,
            onClick: () => Cn(H),
            wrappedIndex: vn,
            wrappedIndexInverted: Sn,
            total: sr,
            index: H,
            gap: it,
            padding: nt,
            isHorizontal: z,
            isInverted: Qe
        }, H));
        We > 0 && (zr.backdropFilter = zr.WebkitBackdropFilter = zr.MozBackdropFilter = `blur(${We}px)`)
    }
    let Tn = d ? {
            drag: z ? "x" : "y",
            onDragStart: kn,
            onDragEnd: Rn,
            dragDirectionLock: !0,
            values: {x: lr, y: lr},
            dragMomentum: !1
        } : {}, In = Z === "top-left" || Z === "top-mid" || Z === "top-right",
        Hn = Z === "bottom-left" || Z === "bottom-mid" || Z === "bottom-right",
        Nn = Z === "top-left" || Z === "bottom-left", Fn = Z === "top-right" || Z === "bottom-right",
        ua = Z === "top-mid" || Z === "bottom-mid" || Z === "auto";
    return S("section", {
        style: {
            ...en,
            padding: be,
            WebkitMaskImage: ne ? dt : void 0,
            MozMaskImage: ne ? dt : void 0,
            maskImage: ne ? dt : void 0,
            opacity: J?.item !== null ? 1 : Vt,
            userSelect: "none"
        },
        onMouseEnter: () => {
            ra(!0), t || ta(!1)
        },
        onMouseLeave: () => {
            ra(!1), t || ta(!0)
        },
        onMouseDown: H => {
            H.preventDefault(), aa(!0)
        },
        onMouseUp: () => aa(!1),
        ref: ca,
        children: [e("div", {
            style: {
                width: "100%",
                height: "100%",
                margin: 0,
                padding: "inherit",
                position: "absolute",
                inset: 0,
                overflow: G ? "visible" : "hidden",
                borderRadius: V,
                userSelect: "none",
                perspective: fe ? "none" : ge
            },
            children: e(T.ul, {
                ref: Ve, ...Tn,
                style: {
                    ...en,
                    gap: h,
                    placeItems: g,
                    x: z ? fe ? pa : pt : 0,
                    y: z ? 0 : fe ? pa : pt,
                    flexDirection: z ? "row" : "column",
                    transformStyle: ce !== 0 && !fe ? "preserve-3d" : void 0,
                    cursor: d ? wn ? "grabbing" : "grab" : "auto",
                    userSelect: "none", ...E
                },
                children: lt
            })
        }), S("fieldset", {
            style: {...Qi},
            "aria-label": "Slideshow pagination controls",
            className: "framer--slideshow-controls",
            children: [S(T.div, {
                style: {
                    position: "absolute",
                    display: "flex",
                    flexDirection: z ? "row" : "column",
                    justifyContent: de ? "space-between" : "center",
                    gap: de ? "unset" : De,
                    opacity: Me ? Vt : 1,
                    alignItems: "center",
                    inset: oe,
                    top: de ? oe : In ? ar : "unset",
                    left: de ? oe : Nn ? Hr : ua ? 0 : "unset",
                    right: de ? oe : Fn ? Je : ua ? 0 : "unset",
                    bottom: de ? oe : Hn ? Y : "unset"
                },
                animate: Me && {opacity: un ? 1 : Vt},
                transition: w,
                children: [e(T.button, {
                    type: "button",
                    style: {
                        ...Xt,
                        backgroundColor: Ye,
                        width: ie,
                        height: ie,
                        borderRadius: Te,
                        rotate: z ? 0 : 90,
                        display: K ? "block" : "none",
                        pointerEvents: "auto"
                    },
                    onClick: () => cr(-1),
                    "aria-label": "Previous",
                    whileTap: {scale: .9},
                    transition: {duration: .15},
                    children: e("img", {
                        decoding: "async",
                        width: ie,
                        height: ie,
                        src: tr || "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                        alt: "Back Arrow"
                    })
                }), e(T.button, {
                    type: "button",
                    style: {
                        ...Xt,
                        backgroundColor: Ye,
                        width: ie,
                        height: ie,
                        borderRadius: Te,
                        rotate: z ? 0 : 90,
                        display: K ? "block" : "none",
                        pointerEvents: "auto"
                    },
                    onClick: () => cr(1),
                    "aria-label": "Next",
                    whileTap: {scale: .9},
                    transition: {duration: .15},
                    children: e("img", {
                        decoding: "async",
                        width: ie,
                        height: ie,
                        src: me || "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                        alt: "Next Arrow"
                    })
                })]
            }), ht.length > 1 ? e("div", {
                style: {
                    ...$i,
                    left: z ? "50%" : Fr,
                    top: z ? "unset" : "50%",
                    transform: z ? "translateX(-50%)" : "translateY(-50%)",
                    flexDirection: z ? "row" : "column",
                    bottom: z ? Fr : "unset",
                    borderRadius: Br,
                    backgroundColor: xr,
                    userSelect: "none", ...zr
                }, children: ht
            }) : null]
        })]
    })
}

ee.defaultProps = {
    direction: "left",
    dragControl: !1,
    startFrom: 0,
    itemAmount: 1,
    infinity: !0,
    gap: 10,
    padding: 10,
    autoPlayControl: !0,
    effectsOptions: {effectsOpacity: 1, effectsScale: 1, effectsRotate: 0, effectsPerspective: 1200, effectsHover: !0},
    transitionControl: {type: "spring", stiffness: 200, damping: 40},
    fadeOptions: {fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0},
    arrowOptions: {
        showMouseControls: !0,
        arrowShouldFadeIn: !1,
        arrowShouldSpace: !0,
        arrowFill: "rgba(0,0,0,0.2)",
        arrowSize: 40
    },
    progressOptions: {showProgressDots: !0}
};
ye(ee, {
    slots: {type: l.Array, title: "Content", control: {type: l.ComponentInstance}},
    direction: {
        type: l.Enum,
        title: "Direction",
        options: ["left", "right", "top", "bottom"],
        optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
        optionTitles: ["Left", "Right", "Top", "Bottom"],
        displaySegmentedControl: !0,
        defaultValue: ee.defaultProps.direction
    },
    autoPlayControl: {type: l.Boolean, title: "Auto Play", defaultValue: !0},
    intervalControl: {
        type: l.Number,
        title: "Interval",
        defaultValue: 1.5,
        min: .5,
        max: 10,
        step: .1,
        displayStepper: !0,
        unit: "s",
        hidden: r => !r.autoPlayControl
    },
    dragControl: {type: l.Boolean, title: "Draggable", defaultValue: !1},
    startFrom: {
        type: l.Number,
        title: "Current",
        min: 0,
        max: 10,
        displayStepper: !0,
        defaultValue: ee.defaultProps.startFrom
    },
    effectsOptions: {
        type: l.Object,
        title: "Effects",
        controls: {
            effectsOpacity: {
                type: l.Number,
                title: "Opacity",
                defaultValue: ee.defaultProps.effectsOptions.effectsOpacity,
                min: 0,
                max: 1,
                step: .01,
                displayStepper: !0
            },
            effectsScale: {
                type: l.Number,
                title: "Scale",
                defaultValue: ee.defaultProps.effectsOptions.effectsScale,
                min: 0,
                max: 1,
                step: .01,
                displayStepper: !0
            },
            effectsPerspective: {
                type: l.Number,
                title: "Perspective",
                defaultValue: ee.defaultProps.effectsOptions.effectsPerspective,
                min: 200,
                max: 2e3,
                step: 1
            },
            effectsRotate: {
                type: l.Number,
                title: "Rotate",
                defaultValue: ee.defaultProps.effectsOptions.effectsRotate,
                min: -180,
                max: 180,
                step: 1
            },
            effectsHover: {
                type: l.Boolean,
                title: "On Hover",
                enabledTitle: "Play",
                disabledTitle: "Pause",
                defaultValue: ee.defaultProps.effectsOptions.effectsHover
            }
        }
    },
    alignment: {
        type: l.Enum,
        title: "Align",
        options: ["flex-start", "center", "flex-end"],
        optionIcons: {
            direction: {
                right: ["align-top", "align-middle", "align-bottom"],
                left: ["align-top", "align-middle", "align-bottom"],
                top: ["align-left", "align-center", "align-right"],
                bottom: ["align-left", "align-center", "align-right"]
            }
        },
        defaultValue: "center",
        displaySegmentedControl: !0
    },
    itemAmount: {
        type: l.Number,
        title: "Items",
        min: 1,
        max: 10,
        displayStepper: !0,
        defaultValue: ee.defaultProps.itemAmount
    },
    gap: {type: l.Number, title: "Gap", min: 0},
    padding: {
        title: "Padding",
        type: l.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        defaultValue: 0,
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0
    },
    borderRadius: {type: l.Number, title: "Radius", min: 0, max: 500, displayStepper: !0, defaultValue: 0},
    transitionControl: {type: l.Transition, defaultValue: ee.defaultProps.transitionControl, title: "Transition"},
    fadeOptions: {
        type: l.Object,
        title: "Clipping",
        controls: {
            fadeContent: {type: l.Boolean, title: "Fade", defaultValue: !1},
            overflow: {
                type: l.Boolean,
                title: "Overflow",
                enabledTitle: "Show",
                disabledTitle: "Hide",
                defaultValue: !1,
                hidden(r) {
                    return r.fadeContent === !0
                }
            },
            fadeWidth: {
                type: l.Number, title: "Width", defaultValue: 25, min: 0, max: 100, unit: "%", hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeInset: {
                type: l.Number, title: "Inset", defaultValue: 0, min: 0, max: 100, unit: "%", hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeAlpha: {
                type: l.Number, title: "Opacity", defaultValue: 0, min: 0, max: 1, step: .05, hidden(r) {
                    return r.fadeContent === !1
                }
            }
        }
    },
    arrowOptions: {
        type: l.Object, title: "Arrows", controls: {
            showMouseControls: {
                type: l.Boolean,
                title: "Show",
                defaultValue: ee.defaultProps.arrowOptions.showMouseControls
            },
            arrowFill: {
                type: l.Color,
                title: "Fill",
                hidden: r => !r.showMouseControls,
                defaultValue: ee.defaultProps.arrowOptions.arrowFill
            },
            leftArrow: {type: l.Image, title: "Previous", hidden: r => !r.showMouseControls},
            rightArrow: {type: l.Image, title: "Next", hidden: r => !r.showMouseControls},
            arrowSize: {
                type: l.Number,
                title: "Size",
                min: 0,
                max: 200,
                displayStepper: !0,
                defaultValue: ee.defaultProps.arrowOptions.arrowSize,
                hidden: r => !r.showMouseControls
            },
            arrowRadius: {
                type: l.Number,
                title: "Radius",
                min: 0,
                max: 500,
                defaultValue: 40,
                hidden: r => !r.showMouseControls
            },
            arrowShouldFadeIn: {type: l.Boolean, title: "Fade In", defaultValue: !1, hidden: r => !r.showMouseControls},
            arrowShouldSpace: {
                type: l.Boolean,
                title: "Distance",
                enabledTitle: "Space",
                disabledTitle: "Group",
                defaultValue: ee.defaultProps.arrowOptions.arrowShouldSpace,
                hidden: r => !r.showMouseControls
            },
            arrowPosition: {
                type: l.Enum,
                title: "Position",
                options: ["auto", "top-left", "top-mid", "top-right", "bottom-left", "bottom-mid", "bottom-right"],
                optionTitles: ["Center", "Top Left", "Top Middle", "Top Right", "Bottom Left", "Bottom Middle", "Bottom Right"],
                hidden: r => !r.showMouseControls || r.arrowShouldSpace
            },
            arrowPadding: {
                type: l.Number,
                title: "Inset",
                min: -100,
                max: 100,
                defaultValue: 20,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || !r.arrowShouldSpace
            },
            arrowPaddingTop: {
                type: l.Number,
                title: "Top",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "bottom-mid" || r.arrowPosition === "bottom-left" || r.arrowPosition === "bottom-right"
            },
            arrowPaddingBottom: {
                type: l.Number,
                title: "Bottom",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "top-mid" || r.arrowPosition === "top-left" || r.arrowPosition === "top-right"
            },
            arrowPaddingRight: {
                type: l.Number,
                title: "Right",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "top-left" || r.arrowPosition === "top-mid" || r.arrowPosition === "bottom-left" || r.arrowPosition === "bottom-mid"
            },
            arrowPaddingLeft: {
                type: l.Number,
                title: "Left",
                min: -500,
                max: 500,
                defaultValue: 0,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace || r.arrowPosition === "auto" || r.arrowPosition === "top-right" || r.arrowPosition === "top-mid" || r.arrowPosition === "bottom-right" || r.arrowPosition === "bottom-mid"
            },
            arrowGap: {
                type: l.Number,
                title: "Gap",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showMouseControls || r.arrowShouldSpace
            }
        }
    },
    progressOptions: {
        type: l.Object, title: "Dots", controls: {
            showProgressDots: {type: l.Boolean, title: "Show", defaultValue: !1},
            dotSize: {
                type: l.Number,
                title: "Size",
                min: 1,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsInset: {
                type: l.Number,
                title: "Inset",
                min: -100,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsGap: {
                type: l.Number,
                title: "Gap",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsPadding: {
                type: l.Number,
                title: "Padding",
                min: 0,
                max: 100,
                defaultValue: 10,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsFill: {
                type: l.Color,
                title: "Fill",
                defaultValue: "#fff",
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsBackground: {
                type: l.Color,
                title: "Backdrop",
                defaultValue: "rgba(0,0,0,0.2)",
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsRadius: {
                type: l.Number,
                title: "Radius",
                min: 0,
                max: 200,
                defaultValue: 50,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsOpacity: {
                type: l.Number,
                title: "Opacity",
                min: 0,
                max: 1,
                defaultValue: .5,
                step: .1,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsActiveOpacity: {
                type: l.Number,
                title: "Current",
                min: 0,
                max: 1,
                defaultValue: 1,
                step: .1,
                displayStepper: !0,
                hidden: r => !r.showProgressDots || r.showScrollbar
            },
            dotsBlur: {
                type: l.Number,
                title: "Blur",
                min: 0,
                max: 50,
                defaultValue: 0,
                step: 1,
                hidden: r => !r.showProgressDots || r.showScrollbar
            }
        }
    }
});
var en = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        placeItems: "center",
        margin: 0,
        padding: 0,
        listStyleType: "none",
        textIndent: "none"
    }, Ui = {
        display: "flex",
        width: "100%",
        height: "100%",
        placeContent: "center",
        placeItems: "center",
        flexDirection: "column",
        color: "#96F",
        background: "rgba(136, 85, 255, 0.1)",
        fontSize: 11,
        overflow: "hidden",
        padding: "20px 20px 30px 20px"
    }, Yi = {fontSize: 32, marginBottom: 10}, Di = {margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center"},
    Ji = {margin: 0, opacity: .7, maxWidth: 180, lineHeight: 1.5, textAlign: "center"}, Xt = {
        border: "none",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        overflow: "hidden",
        background: "transparent",
        cursor: "pointer",
        margin: 0,
        padding: 0
    }, Qi = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        pointerEvents: "none",
        userSelect: "none",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0
    }, Gi = (r, i, s) => Math.min(Math.max(r, i), s), Ki = Ae(function (i, s) {
        var o, c;
        let {
                slideKey: p,
                width: d,
                height: g,
                child: h,
                size: n,
                gap: b,
                wrappedValue: x,
                numChildren: I,
                childCounter: u,
                isCanvas: C,
                effects: M,
                effectsOpacity: v,
                effectsScale: L,
                effectsRotate: w,
                isHorizontal: A,
                isLast: V,
                index: q
            } = i, E = (n?.item + b) * u, y = [-n?.item, 0, n?.parent - n?.item + b, n?.parent].map(he => he - E),
            D = !C && Oe(x, y, [-w, 0, 0, w]), ce = !C && Oe(x, y, [w, 0, 0, -w]), ge = !C && Oe(x, y, [v, 1, 1, v]),
            t = !C && Oe(x, y, [L, 1, 1, L]), ne = !C && Oe(x, y, [1, 1, 0, 0]),
            G = !C && Oe(x, he => he >= y[1] && he <= y[2]);
        X(() => {
            if (G) return G.onChange(he => {
                var pe;
                (pe = s.current) === null || pe === void 0 || pe.setAttribute("aria-hidden", !he)
            })
        }, []);
        let Le = C ? "visible" : Oe(x, [y[0] - n.viewportLength, xt(y[1], y[2], .5), y[3] + n.viewportLength], ["hidden", "visible", "hidden"]);
        return e(xe, {
            inherit: "id",
            children: e("li", {
                style: {display: "contents"},
                "aria-hidden": q !== 0,
                children: _r(h, {
                    ref: s,
                    key: p + "child",
                    style: {
                        ...(o = h.props) === null || o === void 0 ? void 0 : o.style,
                        flexShrink: 0,
                        userSelect: "none",
                        width: d,
                        height: g,
                        opacity: ge,
                        scale: t,
                        originX: A ? ne : .5,
                        originY: A ? .5 : ne,
                        rotateY: A ? D : 0,
                        rotateX: A ? 0 : ce,
                        visibility: Le
                    },
                    layoutId: h.props.layoutId ? h.props.layoutId + "-original-" + q : void 0
                }, (c = h.props) === null || c === void 0 ? void 0 : c.children)
            })
        })
    });

function Zi({
                selectedOpacity: r,
                opacity: i,
                total: s,
                index: o,
                wrappedIndex: c,
                wrappedIndexInverted: p,
                dotStyle: d,
                buttonStyle: g,
                gap: h,
                padding: n,
                isHorizontal: b,
                isInverted: x,
                ...I
            }) {
    let u = c === o;
    x && (u = Math.abs(p) === o);
    let C = h / 2, M = !b && o > 0 ? C : n, v = !b && o !== s - 1 ? C : n, L = b && o !== s - 1 ? C : n,
        w = b && o > 0 ? C : n;
    return e("button", {
        "aria-label": `Scroll to page ${o + 1}`,
        type: "button", ...I,
        style: {...g, padding: `${M}px ${L}px ${v}px ${w}px`},
        children: e(T.div, {style: {...d}, initial: !1, animate: {opacity: u ? r : i}, transition: {duration: .3}})
    })
}

var $i = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto"
}, eo = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0
};
var ro = ["NjvQ1dvg2", "yt2yRgvlL"], to = "framer-P9isK",
    ao = {NjvQ1dvg2: "framer-v-7bv7z0", yt2yRgvlL: "framer-v-1me5dzm"};

function no(r, ...i) {
    let s = {};
    return i?.forEach(o => o && Object.assign(s, r[o])), s
}

var io = {bounce: .2, delay: 0, duration: .4, type: "spring"}, oo = ({value: r, children: i}) => {
        let s = fr(Ee), o = r ?? s.transition, c = $(() => ({...s, transition: o}), [JSON.stringify(o)]);
        return e(Ee.Provider, {value: c, children: i})
    }, so = T.create(a), lo = {"Variant 1": "NjvQ1dvg2", "Variant 2": "yt2yRgvlL"},
    co = ({height: r, id: i, width: s, ...o}) => {
        var c, p;
        return {
            ...o,
            variant: (p = (c = lo[o.variant]) !== null && c !== void 0 ? c : o.variant) !== null && p !== void 0 ? p : "NjvQ1dvg2"
        }
    }, mo = (r, i) => r.layoutDependency ? i.join("-") + r.layoutDependency : i.join("-"), fo = Ae(function (r, i) {
        let {activeLocale: s, setLocale: o} = Ze(), {
                style: c,
                className: p,
                layoutId: d,
                variant: g,
                ...h
            } = co(r), {
                baseVariant: n,
                classNames: b,
                clearLoadingGesture: x,
                gestureHandlers: I,
                gestureVariant: u,
                isLoading: C,
                setGestureState: M,
                setVariant: v,
                variants: L
            } = dr({cycleOrder: ro, defaultVariant: "NjvQ1dvg2", variant: g, variantClassNames: ao}), w = mo(r, L), A = B(null),
            V = Ge(), q = [], E = pr();
        return e(xe, {
            id: d ?? V,
            children: e(so, {
                animate: L,
                initial: !1,
                children: e(oo, {
                    value: io,
                    children: e(te, {
                        ...h, ...I,
                        background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 1200,
                            intrinsicWidth: 1200,
                            loading: O(E?.y || 0),
                            pixelHeight: 1200,
                            pixelWidth: 1200,
                            sizes: E?.width || "100vw",
                            src: "https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif",
                            srcSet: "https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif?scale-down-to=512 512w,https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif?scale-down-to=1024 1024w,https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif 1200w"
                        },
                        className: je(to, ...q, "framer-7bv7z0", p, b),
                        "data-framer-name": "Variant 1",
                        layoutDependency: w,
                        layoutId: "NjvQ1dvg2",
                        ref: i ?? A,
                        style: {...c}, ...no({yt2yRgvlL: {"data-framer-name": "Variant 2"}}, n, u)
                    })
                })
            })
        })
    }),
    po = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-P9isK.framer-1y04gt9, .framer-P9isK .framer-1y04gt9 { display: block; }", ".framer-P9isK.framer-7bv7z0 { height: 400px; overflow: visible; position: relative; width: 400px; }", ".framer-P9isK.framer-v-1me5dzm.framer-7bv7z0 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); width: 40px; }"],
    Wr = $e(fo, po, "framer-P9isK"), ir = Wr;
Wr.displayName = "Blob-light";
Wr.defaultProps = {height: 400, width: 400};
ye(Wr, {
    variant: {
        options: ["NjvQ1dvg2", "yt2yRgvlL"],
        optionTitles: ["Variant 1", "Variant 2"],
        title: "Variant",
        type: l.Enum
    }
});
er(Wr, [{explicitInter: !0, fonts: []}], {supportsExplicitInterCodegen: !0});
var qt = Ue(T.div), ho = Ue(te), ve = Ur(Ue(te)), go = ze(ir),
    uo = ["HQlUbiSz0", "DS0xI1e0I", "XkiAMa1YK", "LRhSYb0jR"], bo = "framer-s9Bp5", wo = {
        DS0xI1e0I: "framer-v-1wwnioy",
        HQlUbiSz0: "framer-v-br0or5",
        LRhSYb0jR: "framer-v-166zujf",
        XkiAMa1YK: "framer-v-1w83hf2"
    };

function ae(r, ...i) {
    let s = {};
    return i?.forEach(o => o && Object.assign(s, r[o])), s
}

var xo = {bounce: .2, delay: 0, duration: .4, type: "spring"},
    $r = {delay: 0, duration: 2.4, ease: [.44, 0, .56, 1], type: "tween"},
    Ar = {opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0},
    yo = {delay: 1.2, duration: 1.2, ease: [.15, .45, .15, 1.35], type: "tween"},
    Se = {opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: yo, x: 0, y: 0},
    br = {opacity: .001, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0},
    rn = {opacity: .001, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.04, skewX: 4, skewY: 0, x: -16, y: -16},
    tn = {opacity: .001, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.04, skewX: -4, skewY: 0, x: 16, y: -16},
    an = {opacity: .001, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.2, skewX: 0, skewY: 0, x: 0, y: 0},
    nn = {delay: 0, duration: 1.2, ease: [.44, 0, .56, 1], type: "tween"}, jt = (r, i) => `translate(-50%, -50%) ${i}`,
    on = {opacity: .001, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.2, skewX: 0, skewY: 0, x: 0, y: -10},
    _o = {opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 2.4, skewX: 0, skewY: 0, x: 0, y: 0},
    vo = ({value: r, children: i}) => {
        let s = fr(Ee), o = r ?? s.transition, c = $(() => ({...s, transition: o}), [JSON.stringify(o)]);
        return e(Ee.Provider, {value: c, children: i})
    }, So = T.create(a),
    Co = {HLiquina_m: "LRhSYb0jR", HLiquina: "XkiAMa1YK", Liquina_m: "DS0xI1e0I", Liquina: "HQlUbiSz0"},
    ko = ({height: r, id: i, width: s, ...o}) => {
        var c, p;
        return {
            ...o,
            variant: (p = (c = Co[o.variant]) !== null && c !== void 0 ? c : o.variant) !== null && p !== void 0 ? p : "HQlUbiSz0"
        }
    }, Ro = (r, i) => r.layoutDependency ? i.join("-") + r.layoutDependency : i.join("-"), Wo = Ae(function (r, i) {
        let {activeLocale: s, setLocale: o} = Ze(), {
                style: c,
                className: p,
                layoutId: d,
                variant: g,
                ...h
            } = ko(r), {
                baseVariant: n,
                classNames: b,
                clearLoadingGesture: x,
                gestureHandlers: I,
                gestureVariant: u,
                isLoading: C,
                setGestureState: M,
                setVariant: v,
                variants: L
            } = dr({cycleOrder: uo, defaultVariant: "HQlUbiSz0", variant: g, variantClassNames: wo}),
            w = Ro(r, L), {activeVariantCallback: A, delay: V} = va(n), q = A(async (...ne) => {
                await V(() => v("XkiAMa1YK"), 4800)
            }), E = A(async (...ne) => {
                await V(() => v("LRhSYb0jR"), 4800)
            });
        Ca(n, {default: q, DS0xI1e0I: E, LRhSYb0jR: void 0, XkiAMa1YK: void 0});
        let y = B(null), D = () => !!["XkiAMa1YK", "LRhSYb0jR"].includes(n), ce = Ge(), ge = [], t = pr();
        return e(xe, {
            id: d ?? ce, children: e(So, {
                animate: L, initial: !1, children: e(vo, {
                    value: xo, children: S(T.div, {
                        ...h, ...I,
                        className: je(bo, ...ge, "framer-br0or5", p, b),
                        "data-framer-name": "Liquina",
                        "data-highlight": !0,
                        layoutDependency: w,
                        layoutId: "HQlUbiSz0",
                        ref: i ?? y,
                        style: {...c}, ...ae({
                            DS0xI1e0I: {"data-framer-name": "Liquina_m"},
                            LRhSYb0jR: {"data-framer-name": "HLiquina_m", "data-highlight": void 0},
                            XkiAMa1YK: {"data-framer-name": "HLiquina", "data-highlight": void 0}
                        }, n, u),
                        children: [e(qt, {
                            __framer__loop: Ar,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: .4,
                            __framer__loopRepeatType: "mirror",
                            __framer__loopTransition: $r,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: "framer-1o0hmnp",
                            layoutDependency: w,
                            layoutId: "Ta6XtJwLj",
                            style: {background: "radial-gradient(50% 50% at 50% 50%, rgb(20, 241, 149) 30.91920045045045%, rgba(150, 252, 229, 0.24) 61.27885698198199%, rgba(150, 252, 229, 0) 100%)"}
                        }), e(te, {
                            background: {
                                alt: "",
                                intrinsicHeight: 2821,
                                intrinsicWidth: 2500,
                                loading: O((t?.y || 0) + -80),
                                pixelHeight: 2031,
                                pixelWidth: 1800,
                                positionX: "center",
                                positionY: "center",
                                sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                src: "https://framerusercontent.com/images/Zt8QbQpTq6kIN9qGprAw0vcVZE.png",
                                srcSet: "https://framerusercontent.com/images/Zt8QbQpTq6kIN9qGprAw0vcVZE.png?scale-down-to=1024 907w,https://framerusercontent.com/images/Zt8QbQpTq6kIN9qGprAw0vcVZE.png 1800w"
                            },
                            className: "framer-1i8oab9",
                            "data-framer-name": "Liquina_Dark",
                            layoutDependency: w,
                            layoutId: "uqxNVqnmV", ...ae({
                                DS0xI1e0I: {
                                    background: {
                                        alt: "",
                                        intrinsicHeight: 2821,
                                        intrinsicWidth: 2500,
                                        loading: O((t?.y || 0) + -40),
                                        pixelHeight: 1219,
                                        pixelWidth: 1080,
                                        positionX: "center",
                                        positionY: "center",
                                        sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                        src: "https://framerusercontent.com/images/zSRuAew23CaFEYbHGyIcKEaaYxU.png",
                                        srcSet: "https://framerusercontent.com/images/zSRuAew23CaFEYbHGyIcKEaaYxU.png?scale-down-to=1024 907w,https://framerusercontent.com/images/zSRuAew23CaFEYbHGyIcKEaaYxU.png 1080w"
                                    }
                                },
                                LRhSYb0jR: {
                                    background: {
                                        alt: "",
                                        intrinsicHeight: 2821,
                                        intrinsicWidth: 2500,
                                        loading: O((t?.y || 0) + -40),
                                        pixelHeight: 1219,
                                        pixelWidth: 1080,
                                        positionX: "center",
                                        positionY: "center",
                                        sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                        src: "https://framerusercontent.com/images/zSRuAew23CaFEYbHGyIcKEaaYxU.png",
                                        srcSet: "https://framerusercontent.com/images/zSRuAew23CaFEYbHGyIcKEaaYxU.png?scale-down-to=1024 907w,https://framerusercontent.com/images/zSRuAew23CaFEYbHGyIcKEaaYxU.png 1080w"
                                    }
                                }
                            }, n, u)
                        }), e(ho, {
                            __framer__loop: Ar,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: .4,
                            __framer__loopRepeatType: "mirror",
                            __framer__loopTransition: $r,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 5049,
                                intrinsicWidth: 4474,
                                loading: O((t?.y || 0) + -80),
                                pixelHeight: 2031,
                                pixelWidth: 1800,
                                sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                src: "https://framerusercontent.com/images/bcPlgP6VzWtzWOTDn1JIE7uVNss.png",
                                srcSet: "https://framerusercontent.com/images/bcPlgP6VzWtzWOTDn1JIE7uVNss.png?scale-down-to=1024 907w,https://framerusercontent.com/images/bcPlgP6VzWtzWOTDn1JIE7uVNss.png 1800w"
                            },
                            className: "framer-1w067yx",
                            "data-framer-name": "Liquina_Light",
                            layoutDependency: w,
                            layoutId: "MpRYR2r0H", ...ae({
                                DS0xI1e0I: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 5049,
                                        intrinsicWidth: 4474,
                                        loading: O((t?.y || 0) + -40),
                                        pixelHeight: 1219,
                                        pixelWidth: 1080,
                                        sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                        src: "https://framerusercontent.com/images/itbbOqCNDRxoREQPuKLCvxa3Txk.png",
                                        srcSet: "https://framerusercontent.com/images/itbbOqCNDRxoREQPuKLCvxa3Txk.png?scale-down-to=1024 907w,https://framerusercontent.com/images/itbbOqCNDRxoREQPuKLCvxa3Txk.png 1080w"
                                    }
                                },
                                LRhSYb0jR: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 5049,
                                        intrinsicWidth: 4474,
                                        loading: O((t?.y || 0) + -40),
                                        pixelHeight: 1219,
                                        pixelWidth: 1080,
                                        sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                        src: "https://framerusercontent.com/images/itbbOqCNDRxoREQPuKLCvxa3Txk.png",
                                        srcSet: "https://framerusercontent.com/images/itbbOqCNDRxoREQPuKLCvxa3Txk.png?scale-down-to=1024 907w,https://framerusercontent.com/images/itbbOqCNDRxoREQPuKLCvxa3Txk.png 1080w"
                                    }
                                }
                            }, n, u)
                        }), D() && S(T.div, {
                            className: "framer-166hk18",
                            "data-framer-name": "HyperLiquina_Dark",
                            layoutDependency: w,
                            layoutId: "AtybR7PD1",
                            children: [e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/dyMDL9jCPpYVxMk1mWAOU77c38.png",
                                    srcSet: "https://framerusercontent.com/images/dyMDL9jCPpYVxMk1mWAOU77c38.png?scale-down-to=1024 907w,https://framerusercontent.com/images/dyMDL9jCPpYVxMk1mWAOU77c38.png 1800w"
                                },
                                className: "framer-1mxemti",
                                "data-framer-appear-id": "1mxemti",
                                "data-framer-name": "HLA dark_body",
                                initial: br,
                                layoutDependency: w,
                                layoutId: "VwDLlObrZ",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + 0),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/40TIp69Wo6j8QBZjFRvtsZcSPs.png",
                                            srcSet: "https://framerusercontent.com/images/40TIp69Wo6j8QBZjFRvtsZcSPs.png?scale-down-to=1024 907w,https://framerusercontent.com/images/40TIp69Wo6j8QBZjFRvtsZcSPs.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + 0),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/dyMDL9jCPpYVxMk1mWAOU77c38.png",
                                            srcSet: "https://framerusercontent.com/images/dyMDL9jCPpYVxMk1mWAOU77c38.png?scale-down-to=1024 907w,https://framerusercontent.com/images/dyMDL9jCPpYVxMk1mWAOU77c38.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/On5jBhR9lJO5z6Gbm4QN9lfG5ag.png",
                                    srcSet: "https://framerusercontent.com/images/On5jBhR9lJO5z6Gbm4QN9lfG5ag.png?scale-down-to=1024 907w,https://framerusercontent.com/images/On5jBhR9lJO5z6Gbm4QN9lfG5ag.png 1800w"
                                },
                                className: "framer-okk8um",
                                "data-framer-appear-id": "okk8um",
                                "data-framer-name": "HLA dark_right arm",
                                initial: rn,
                                layoutDependency: w,
                                layoutId: "bVzhRGhUW",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + 0),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/CbFGbpQD5rlBe1hbXh3ECEs8k.png",
                                            srcSet: "https://framerusercontent.com/images/CbFGbpQD5rlBe1hbXh3ECEs8k.png?scale-down-to=1024 907w,https://framerusercontent.com/images/CbFGbpQD5rlBe1hbXh3ECEs8k.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + 0),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/On5jBhR9lJO5z6Gbm4QN9lfG5ag.png",
                                            srcSet: "https://framerusercontent.com/images/On5jBhR9lJO5z6Gbm4QN9lfG5ag.png?scale-down-to=1024 907w,https://framerusercontent.com/images/On5jBhR9lJO5z6Gbm4QN9lfG5ag.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/R504WJ9qEToHQTXqWS9pzPNjmCA.png",
                                    srcSet: "https://framerusercontent.com/images/R504WJ9qEToHQTXqWS9pzPNjmCA.png?scale-down-to=1024 907w,https://framerusercontent.com/images/R504WJ9qEToHQTXqWS9pzPNjmCA.png 1800w"
                                },
                                className: "framer-1hqq36p",
                                "data-framer-appear-id": "1hqq36p",
                                "data-framer-name": "HLA dark_left arm",
                                initial: tn,
                                layoutDependency: w,
                                layoutId: "T5hwLu3l3",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + -.27813040969397207),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/ZUIYwHeuwFAPEAmFYO9uN63Gyk.png",
                                            srcSet: "https://framerusercontent.com/images/ZUIYwHeuwFAPEAmFYO9uN63Gyk.png?scale-down-to=1024 907w,https://framerusercontent.com/images/ZUIYwHeuwFAPEAmFYO9uN63Gyk.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + -.49999999999954525),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/R504WJ9qEToHQTXqWS9pzPNjmCA.png",
                                            srcSet: "https://framerusercontent.com/images/R504WJ9qEToHQTXqWS9pzPNjmCA.png?scale-down-to=1024 907w,https://framerusercontent.com/images/R504WJ9qEToHQTXqWS9pzPNjmCA.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/65iUuayXWpj4ou8OYX7I0Aq87xM.png",
                                    srcSet: "https://framerusercontent.com/images/65iUuayXWpj4ou8OYX7I0Aq87xM.png?scale-down-to=1024 907w,https://framerusercontent.com/images/65iUuayXWpj4ou8OYX7I0Aq87xM.png 1800w"
                                },
                                className: "framer-1lzs2sj",
                                "data-framer-appear-id": "1lzs2sj",
                                "data-framer-name": "HLA dark_chest",
                                initial: an,
                                layoutDependency: w,
                                layoutId: "CHZAJZioG",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + -.27813040969397207),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/SBmtxo8rlNvQRA7FOfLYpEIE.png",
                                            srcSet: "https://framerusercontent.com/images/SBmtxo8rlNvQRA7FOfLYpEIE.png?scale-down-to=1024 907w,https://framerusercontent.com/images/SBmtxo8rlNvQRA7FOfLYpEIE.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + -.49999999999954525),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/65iUuayXWpj4ou8OYX7I0Aq87xM.png",
                                            srcSet: "https://framerusercontent.com/images/65iUuayXWpj4ou8OYX7I0Aq87xM.png?scale-down-to=1024 907w,https://framerusercontent.com/images/65iUuayXWpj4ou8OYX7I0Aq87xM.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __framer__loop: Ar,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: nn,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1400,
                                    intrinsicWidth: 2e3,
                                    pixelHeight: 1400,
                                    pixelWidth: 2e3,
                                    src: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png",
                                    srcSet: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=512 512w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png 2000w"
                                },
                                className: "framer-1ju8ms7",
                                "data-framer-appear-id": "1ju8ms7",
                                "data-framer-name": "Liquina's Gravity Blob",
                                initial: on,
                                layoutDependency: w,
                                layoutId: "KlsWGDd2l",
                                optimized: !0,
                                transformTemplate: jt, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1400,
                                            intrinsicWidth: 2e3,
                                            loading: O((t?.y || 0) + -40 + 460.4922100403926),
                                            pixelHeight: 1400,
                                            pixelWidth: 2e3,
                                            sizes: `calc((${t?.width || "100vw"} + 336px) * 0.295)`,
                                            src: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png",
                                            srcSet: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=512 512w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png 2000w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1400,
                                            intrinsicWidth: 2e3,
                                            loading: O((t?.y || 0) + -80 + 827.908251586844),
                                            pixelHeight: 1400,
                                            pixelWidth: 2e3,
                                            sizes: `calc((${t?.width || "100vw"} + 336px) * 0.295)`,
                                            src: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png",
                                            srcSet: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=512 512w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png 2000w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/V8lKwp5juyYaR29oON4meutBZYM.png",
                                    srcSet: "https://framerusercontent.com/images/V8lKwp5juyYaR29oON4meutBZYM.png?scale-down-to=1024 907w,https://framerusercontent.com/images/V8lKwp5juyYaR29oON4meutBZYM.png 1800w"
                                },
                                className: "framer-1dnhg77",
                                "data-framer-appear-id": "1dnhg77",
                                "data-framer-name": "HLA dark_left hand",
                                initial: br,
                                layoutDependency: w,
                                layoutId: "dzHSXNXqI",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + 0),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/QIVKdZbsCZaepE5pdb8VWyN8wcE.png",
                                            srcSet: "https://framerusercontent.com/images/QIVKdZbsCZaepE5pdb8VWyN8wcE.png?scale-down-to=1024 907w,https://framerusercontent.com/images/QIVKdZbsCZaepE5pdb8VWyN8wcE.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + 0),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/V8lKwp5juyYaR29oON4meutBZYM.png",
                                            srcSet: "https://framerusercontent.com/images/V8lKwp5juyYaR29oON4meutBZYM.png?scale-down-to=1024 907w,https://framerusercontent.com/images/V8lKwp5juyYaR29oON4meutBZYM.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/EsDh3ErJgDzJZad2v4wP8v3xcfQ.png",
                                    srcSet: "https://framerusercontent.com/images/EsDh3ErJgDzJZad2v4wP8v3xcfQ.png?scale-down-to=1024 907w,https://framerusercontent.com/images/EsDh3ErJgDzJZad2v4wP8v3xcfQ.png 1800w"
                                },
                                className: "framer-g5ukvm",
                                "data-framer-appear-id": "g5ukvm",
                                "data-framer-name": "HLA dark_right hand",
                                initial: br,
                                layoutDependency: w,
                                layoutId: "Nl8Sc3hve",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + -.27813040969397207),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/plKwnnSsaut7fewppOaby5fHSLA.png",
                                            srcSet: "https://framerusercontent.com/images/plKwnnSsaut7fewppOaby5fHSLA.png?scale-down-to=1024 907w,https://framerusercontent.com/images/plKwnnSsaut7fewppOaby5fHSLA.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + -.49999999999954525),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/EsDh3ErJgDzJZad2v4wP8v3xcfQ.png",
                                            srcSet: "https://framerusercontent.com/images/EsDh3ErJgDzJZad2v4wP8v3xcfQ.png?scale-down-to=1024 907w,https://framerusercontent.com/images/EsDh3ErJgDzJZad2v4wP8v3xcfQ.png 1800w"
                                        }
                                    }
                                }, n, u)
                            })]
                        }), D() && S(qt, {
                            __framer__loop: Ar,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: .4,
                            __framer__loopRepeatType: "mirror",
                            __framer__loopTransition: $r,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: "framer-sg9l9l",
                            "data-framer-name": "HyperLiquina_Light",
                            layoutDependency: w,
                            layoutId: "mpeDdU2oi",
                            children: [e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/T1egGJdlohkUtRGpcWxR1Uly4Nk.png",
                                    srcSet: "https://framerusercontent.com/images/T1egGJdlohkUtRGpcWxR1Uly4Nk.png?scale-down-to=1024 907w,https://framerusercontent.com/images/T1egGJdlohkUtRGpcWxR1Uly4Nk.png 1800w"
                                },
                                className: "framer-1ttmy6w",
                                "data-framer-appear-id": "1ttmy6w",
                                "data-framer-name": "HLA normal_body",
                                initial: br,
                                layoutDependency: w,
                                layoutId: "YiVK3m_nT",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + 0),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/K2OfldOHHjFSeUzfh96Ha94IvY.png",
                                            srcSet: "https://framerusercontent.com/images/K2OfldOHHjFSeUzfh96Ha94IvY.png?scale-down-to=1024 907w,https://framerusercontent.com/images/K2OfldOHHjFSeUzfh96Ha94IvY.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + 0),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/T1egGJdlohkUtRGpcWxR1Uly4Nk.png",
                                            srcSet: "https://framerusercontent.com/images/T1egGJdlohkUtRGpcWxR1Uly4Nk.png?scale-down-to=1024 907w,https://framerusercontent.com/images/T1egGJdlohkUtRGpcWxR1Uly4Nk.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/mPgI8llKkJkQNEkewHeCbs3xgKI.png",
                                    srcSet: "https://framerusercontent.com/images/mPgI8llKkJkQNEkewHeCbs3xgKI.png?scale-down-to=1024 907w,https://framerusercontent.com/images/mPgI8llKkJkQNEkewHeCbs3xgKI.png 1800w"
                                },
                                className: "framer-mk14fx",
                                "data-framer-appear-id": "mk14fx",
                                "data-framer-name": "HLA normal_right arm",
                                initial: rn,
                                layoutDependency: w,
                                layoutId: "Zg7KTRf9f",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + 0),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/lUT36Y3cC2N7JXIMbWr9VKdpVDI.png",
                                            srcSet: "https://framerusercontent.com/images/lUT36Y3cC2N7JXIMbWr9VKdpVDI.png?scale-down-to=1024 907w,https://framerusercontent.com/images/lUT36Y3cC2N7JXIMbWr9VKdpVDI.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + 0),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/mPgI8llKkJkQNEkewHeCbs3xgKI.png",
                                            srcSet: "https://framerusercontent.com/images/mPgI8llKkJkQNEkewHeCbs3xgKI.png?scale-down-to=1024 907w,https://framerusercontent.com/images/mPgI8llKkJkQNEkewHeCbs3xgKI.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/AbGW6XfRQXtXqna1AVNgtvIKcDQ.png",
                                    srcSet: "https://framerusercontent.com/images/AbGW6XfRQXtXqna1AVNgtvIKcDQ.png?scale-down-to=1024 907w,https://framerusercontent.com/images/AbGW6XfRQXtXqna1AVNgtvIKcDQ.png 1800w"
                                },
                                className: "framer-1x6vn3u",
                                "data-framer-appear-id": "1x6vn3u",
                                "data-framer-name": "HLA normal_left arm",
                                initial: tn,
                                layoutDependency: w,
                                layoutId: "JB33WWWJ1",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + 0),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/G0PkPML22nIpvlVAPZNJE4YGIA.png",
                                            srcSet: "https://framerusercontent.com/images/G0PkPML22nIpvlVAPZNJE4YGIA.png?scale-down-to=1024 907w,https://framerusercontent.com/images/G0PkPML22nIpvlVAPZNJE4YGIA.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + 0),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/AbGW6XfRQXtXqna1AVNgtvIKcDQ.png",
                                            srcSet: "https://framerusercontent.com/images/AbGW6XfRQXtXqna1AVNgtvIKcDQ.png?scale-down-to=1024 907w,https://framerusercontent.com/images/AbGW6XfRQXtXqna1AVNgtvIKcDQ.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/uGIyz7pG7hB1qSCzjRFIpSbFz0g.png",
                                    srcSet: "https://framerusercontent.com/images/uGIyz7pG7hB1qSCzjRFIpSbFz0g.png?scale-down-to=1024 907w,https://framerusercontent.com/images/uGIyz7pG7hB1qSCzjRFIpSbFz0g.png 1800w"
                                },
                                className: "framer-1fhbtg7",
                                "data-framer-appear-id": "1fhbtg7",
                                "data-framer-name": "HLA normal_chest",
                                initial: an,
                                layoutDependency: w,
                                layoutId: "zIG8kmsze",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + -.27813040969397207),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/IfUQqVe3NLId3A11VXUNTvPSB4.png",
                                            srcSet: "https://framerusercontent.com/images/IfUQqVe3NLId3A11VXUNTvPSB4.png?scale-down-to=1024 907w,https://framerusercontent.com/images/IfUQqVe3NLId3A11VXUNTvPSB4.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + -.49999999999954525),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/uGIyz7pG7hB1qSCzjRFIpSbFz0g.png",
                                            srcSet: "https://framerusercontent.com/images/uGIyz7pG7hB1qSCzjRFIpSbFz0g.png?scale-down-to=1024 907w,https://framerusercontent.com/images/uGIyz7pG7hB1qSCzjRFIpSbFz0g.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __framer__loop: Ar,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: nn,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1400,
                                    intrinsicWidth: 2e3,
                                    pixelHeight: 1400,
                                    pixelWidth: 2e3,
                                    src: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png",
                                    srcSet: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=512 512w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png 2000w"
                                },
                                className: "framer-1c3q2hs",
                                "data-framer-appear-id": "1c3q2hs",
                                "data-framer-name": "Liquina's Gravity Blob",
                                initial: on,
                                layoutDependency: w,
                                layoutId: "Rs3tkXgtg",
                                optimized: !0,
                                transformTemplate: jt, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1400,
                                            intrinsicWidth: 2e3,
                                            loading: O((t?.y || 0) + -40 + 454.9296018465091),
                                            pixelHeight: 1400,
                                            pixelWidth: 2e3,
                                            sizes: `calc((${t?.width || "100vw"} + 336px) * 0.295)`,
                                            src: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png",
                                            srcSet: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=512 512w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png 2000w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1400,
                                            intrinsicWidth: 2e3,
                                            loading: O((t?.y || 0) + -80 + 817.908251586844),
                                            pixelHeight: 1400,
                                            pixelWidth: 2e3,
                                            sizes: `calc((${t?.width || "100vw"} + 336px) * 0.295)`,
                                            src: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png",
                                            srcSet: "https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=512 512w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/0bBBnYuBea6A5JjCDlIIkM9nEI.png 2000w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/uh8F4FEHtPJNboSkzCyYryqpevA.png",
                                    srcSet: "https://framerusercontent.com/images/uh8F4FEHtPJNboSkzCyYryqpevA.png?scale-down-to=1024 907w,https://framerusercontent.com/images/uh8F4FEHtPJNboSkzCyYryqpevA.png 1800w"
                                },
                                className: "framer-wmshh7",
                                "data-framer-appear-id": "wmshh7",
                                "data-framer-name": "HLA normal_left hand",
                                initial: br,
                                layoutDependency: w,
                                layoutId: "KtGPmnWMg",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + 0),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/zdQ8e7akB7UX6MUPfjdhoJJ3kPY.png",
                                            srcSet: "https://framerusercontent.com/images/zdQ8e7akB7UX6MUPfjdhoJJ3kPY.png?scale-down-to=1024 907w,https://framerusercontent.com/images/zdQ8e7akB7UX6MUPfjdhoJJ3kPY.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + 0),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/uh8F4FEHtPJNboSkzCyYryqpevA.png",
                                            srcSet: "https://framerusercontent.com/images/uh8F4FEHtPJNboSkzCyYryqpevA.png?scale-down-to=1024 907w,https://framerusercontent.com/images/uh8F4FEHtPJNboSkzCyYryqpevA.png 1800w"
                                        }
                                    }
                                }, n, u)
                            }), e(ve, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Se,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 5049,
                                    intrinsicWidth: 4474,
                                    pixelHeight: 2031,
                                    pixelWidth: 1800,
                                    src: "https://framerusercontent.com/images/ySXnxWXg9QHgSl10vy4OLfBA1bM.png",
                                    srcSet: "https://framerusercontent.com/images/ySXnxWXg9QHgSl10vy4OLfBA1bM.png?scale-down-to=1024 907w,https://framerusercontent.com/images/ySXnxWXg9QHgSl10vy4OLfBA1bM.png 1800w"
                                },
                                className: "framer-uq2ttd",
                                "data-framer-appear-id": "uq2ttd",
                                "data-framer-name": "HLA normal_right hand",
                                initial: br,
                                layoutDependency: w,
                                layoutId: "MIaSBqiyi",
                                optimized: !0, ...ae({
                                    LRhSYb0jR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -40 + 0),
                                            pixelHeight: 1219,
                                            pixelWidth: 1080,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/6f7JoukluDUTyUk8gBLCt66pu0.png",
                                            srcSet: "https://framerusercontent.com/images/6f7JoukluDUTyUk8gBLCt66pu0.png?scale-down-to=1024 907w,https://framerusercontent.com/images/6f7JoukluDUTyUk8gBLCt66pu0.png 1080w"
                                        }
                                    },
                                    XkiAMa1YK: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 5049,
                                            intrinsicWidth: 4474,
                                            loading: O((t?.y || 0) + -80 + 0),
                                            pixelHeight: 2031,
                                            pixelWidth: 1800,
                                            sizes: `calc(${t?.width || "100vw"} + 336px)`,
                                            src: "https://framerusercontent.com/images/ySXnxWXg9QHgSl10vy4OLfBA1bM.png",
                                            srcSet: "https://framerusercontent.com/images/ySXnxWXg9QHgSl10vy4OLfBA1bM.png?scale-down-to=1024 907w,https://framerusercontent.com/images/ySXnxWXg9QHgSl10vy4OLfBA1bM.png 1800w"
                                        }
                                    }
                                }, n, u)
                            })]
                        }), e(le, {
                            height: 480,
                            width: `calc(${t?.width || "100vw"} * 0.16)`,
                            y: (t?.y || 0) + ((t?.height || 1111) * .7596759675967599 - 240), ...ae({
                                DS0xI1e0I: {
                                    height: 83,
                                    width: `calc(${t?.width || "100vw"} / 6.241)`,
                                    y: (t?.y || 0) + ((t?.height || 480) * .9812500000000002 - 41.5)
                                }, LRhSYb0jR: {height: 83, y: (t?.y || 0) + ((t?.height || 480) * .9812500000000002 - 41.5)}
                            }, n, u),
                            children: e(qt, {
                                __framer__loop: _o,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: .4,
                                __framer__loopRepeatType: "mirror",
                                __framer__loopTransition: $r,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: "framer-nbck29-container",
                                layoutDependency: w,
                                layoutId: "BSRvVWXwD-container",
                                transformTemplate: jt, ...ae({LRhSYb0jR: {transformTemplate: void 0}}, n, u),
                                children: e(ir, {
                                    height: "100%",
                                    id: "BSRvVWXwD",
                                    layoutId: "BSRvVWXwD",
                                    style: {height: "100%", width: "100%"},
                                    variant: "yt2yRgvlL",
                                    width: "100%"
                                })
                            })
                        }), e(T.div, {
                            className: "framer-1d3pvd7",
                            layoutDependency: w,
                            layoutId: "TifnfMa25",
                            style: {background: "linear-gradient(180deg, rgba(0, 9, 8, 0) 63.33755630630631%, rgba(0, 9, 8, 0.8) 88.28828828828829%, rgb(0, 9, 8) 100%)"}
                        })]
                    })
                })
            })
        })
    }),
    Ao = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-s9Bp5.framer-rbpuvv, .framer-s9Bp5 .framer-rbpuvv { display: block; }", ".framer-s9Bp5.framer-br0or5 { height: 1111px; max-width: 1200px; min-width: 480px; overflow: visible; position: relative; width: 1200px; }", ".framer-s9Bp5 .framer-1o0hmnp, .framer-s9Bp5 .framer-1d3pvd7 { aspect-ratio: 0.8862629246676514 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1733px); left: -168px; overflow: hidden; position: absolute; right: -168px; top: -80px; }", ".framer-s9Bp5 .framer-1i8oab9 { aspect-ratio: 0.8862629246676514 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1733px); left: -168px; overflow: visible; position: absolute; right: -168px; top: -80px; }", ".framer-s9Bp5 .framer-1w067yx { aspect-ratio: 0.8861160625866509 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1733px); left: -168px; overflow: visible; position: absolute; right: -168px; top: -80px; }", ".framer-s9Bp5 .framer-166hk18, .framer-s9Bp5 .framer-sg9l9l { aspect-ratio: 0.8863242931332949 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1733px); left: -168px; overflow: hidden; position: absolute; right: -168px; top: 0px; }", ".framer-s9Bp5 .framer-1mxemti, .framer-s9Bp5 .framer-okk8um, .framer-s9Bp5 .framer-1dnhg77, .framer-s9Bp5 .framer-1ttmy6w, .framer-s9Bp5 .framer-mk14fx, .framer-s9Bp5 .framer-1x6vn3u, .framer-s9Bp5 .framer-wmshh7, .framer-s9Bp5 .framer-uq2ttd { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; }", ".framer-s9Bp5 .framer-1hqq36p, .framer-s9Bp5 .framer-1lzs2sj, .framer-s9Bp5 .framer-g5ukvm, .framer-s9Bp5 .framer-1fhbtg7 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(49.97114829774959% - 100% / 2); width: 100%; }", ".framer-s9Bp5 .framer-1ju8ms7 { aspect-ratio: 1.4285714285714286 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 317px); left: 50%; mix-blend-mode: multiply; overflow: visible; position: absolute; top: 48%; width: 30%; }", ".framer-s9Bp5 .framer-1c3q2hs { aspect-ratio: 1.4285714285714286 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 317px); left: 50%; mix-blend-mode: multiply; overflow: visible; position: absolute; top: 47%; width: 30%; }", ".framer-s9Bp5 .framer-nbck29-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 192px); left: 50%; position: absolute; top: 76%; width: 16%; z-index: 1; }", ".framer-s9Bp5.framer-v-1wwnioy.framer-br0or5 { aspect-ratio: 1.08 / 1; height: var(--framer-aspect-ratio-supported, 480px); width: 518px; }", ".framer-s9Bp5.framer-v-1wwnioy .framer-1o0hmnp, .framer-s9Bp5.framer-v-1wwnioy .framer-1i8oab9, .framer-s9Bp5.framer-v-1wwnioy .framer-1w067yx, .framer-s9Bp5.framer-v-1wwnioy .framer-1d3pvd7, .framer-s9Bp5.framer-v-166zujf .framer-1o0hmnp, .framer-s9Bp5.framer-v-166zujf .framer-1i8oab9, .framer-s9Bp5.framer-v-166zujf .framer-1w067yx, .framer-s9Bp5.framer-v-166zujf .framer-166hk18, .framer-s9Bp5.framer-v-166zujf .framer-sg9l9l, .framer-s9Bp5.framer-v-166zujf .framer-1d3pvd7 { height: var(--framer-aspect-ratio-supported, 964px); top: -40px; }", ".framer-s9Bp5.framer-v-1wwnioy .framer-nbck29-container { height: var(--framer-aspect-ratio-supported, 83px); top: 98%; width: 16%; }", ".framer-s9Bp5.framer-v-1w83hf2 .framer-166hk18, .framer-s9Bp5.framer-v-1w83hf2 .framer-sg9l9l { top: -80px; }", ".framer-s9Bp5.framer-v-166zujf.framer-br0or5 { height: 480px; width: 518px; }", ".framer-s9Bp5.framer-v-166zujf .framer-1ju8ms7 { height: var(--framer-aspect-ratio-supported, 177px); }", ".framer-s9Bp5.framer-v-166zujf .framer-1c3q2hs { height: var(--framer-aspect-ratio-supported, 176px); }", ".framer-s9Bp5.framer-v-166zujf .framer-nbck29-container { aspect-ratio: unset; height: 83px; left: calc(50.00000000000002% - 16% / 2); top: calc(98.12500000000001% - 83px / 2); }"],
    Or = $e(Wo, Ao, "framer-s9Bp5"), Ut = Or;
Or.displayName = "Main Banner";
Or.defaultProps = {height: 1111, width: 1200};
ye(Or, {
    variant: {
        options: ["HQlUbiSz0", "DS0xI1e0I", "XkiAMa1YK", "LRhSYb0jR"],
        optionTitles: ["Liquina", "Liquina_m", "HLiquina", "HLiquina_m"],
        title: "Variant",
        type: l.Enum
    }
});
er(Or, [{explicitInter: !0, fonts: []}, ...go], {supportsExplicitInterCodegen: !0});
var Oo = ["sKMEbgsQk", "QbRCp5BO4"], Po = "framer-8XRvD",
    Lo = {QbRCp5BO4: "framer-v-1gi56fh", sKMEbgsQk: "framer-v-1cjztki"};

function To(r, ...i) {
    let s = {};
    return i?.forEach(o => o && Object.assign(s, r[o])), s
}

var Io = {bounce: .2, delay: 0, duration: .4, type: "spring"}, Ho = ({value: r, children: i}) => {
        let s = fr(Ee), o = r ?? s.transition, c = $(() => ({...s, transition: o}), [JSON.stringify(o)]);
        return e(Ee.Provider, {value: c, children: i})
    }, No = T.create(a), Fo = {"Variant 1": "sKMEbgsQk", "Variant 2": "QbRCp5BO4"},
    Bo = ({height: r, id: i, width: s, ...o}) => {
        var c, p;
        return {
            ...o,
            variant: (p = (c = Fo[o.variant]) !== null && c !== void 0 ? c : o.variant) !== null && p !== void 0 ? p : "sKMEbgsQk"
        }
    }, Eo = (r, i) => r.layoutDependency ? i.join("-") + r.layoutDependency : i.join("-"), zo = Ae(function (r, i) {
        let {activeLocale: s, setLocale: o} = Ze(), {
                style: c,
                className: p,
                layoutId: d,
                variant: g,
                ...h
            } = Bo(r), {
                baseVariant: n,
                classNames: b,
                clearLoadingGesture: x,
                gestureHandlers: I,
                gestureVariant: u,
                isLoading: C,
                setGestureState: M,
                setVariant: v,
                variants: L
            } = dr({cycleOrder: Oo, defaultVariant: "sKMEbgsQk", variant: g, variantClassNames: Lo}), w = Eo(r, L), A = B(null),
            V = Ge(), q = [], E = pr();
        return e(xe, {
            id: d ?? V,
            children: e(No, {
                animate: L,
                initial: !1,
                children: e(Ho, {
                    value: Io,
                    children: e(te, {
                        ...h, ...I,
                        background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 600,
                            intrinsicWidth: 600,
                            loading: O(E?.y || 0),
                            pixelHeight: 600,
                            pixelWidth: 600,
                            sizes: E?.width || "100vw",
                            src: "https://framerusercontent.com/images/jImGw5HacVKz6p1G6FWxv3Uq10.gif",
                            srcSet: "https://framerusercontent.com/images/jImGw5HacVKz6p1G6FWxv3Uq10.gif?scale-down-to=512 512w,https://framerusercontent.com/images/jImGw5HacVKz6p1G6FWxv3Uq10.gif 600w"
                        },
                        className: je(Po, ...q, "framer-1cjztki", p, b),
                        "data-framer-name": "Variant 1",
                        layoutDependency: w,
                        layoutId: "sKMEbgsQk",
                        ref: i ?? A,
                        style: {...c}, ...To({QbRCp5BO4: {"data-framer-name": "Variant 2"}}, n, u)
                    })
                })
            })
        })
    }),
    Mo = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-8XRvD.framer-8kh5nk, .framer-8XRvD .framer-8kh5nk { display: block; }", ".framer-8XRvD.framer-1cjztki { height: 600px; overflow: visible; position: relative; width: 600px; }", ".framer-8XRvD.framer-v-1gi56fh.framer-1cjztki { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); width: 40px; }"],
    Pr = $e(zo, Mo, "framer-8XRvD"), Yt = Pr;
Pr.displayName = "Gravity Blob";
Pr.defaultProps = {height: 600, width: 600};
ye(Pr, {
    variant: {
        options: ["sKMEbgsQk", "QbRCp5BO4"],
        optionTitles: ["Variant 1", "Variant 2"],
        title: "Variant",
        type: l.Enum
    }
});
er(Pr, [{explicitInter: !0, fonts: []}], {supportsExplicitInterCodegen: !0});
Ct.loadFonts([]);
var sn = [{explicitInter: !0, fonts: []}],
    ln = ['.framer-UsQrP .framer-styles-preset-45tqv0:not(.rich-text-wrapper), .framer-UsQrP .framer-styles-preset-45tqv0.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, #96fce5) /* {"name":"Primary"} */; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #50d2c1; --framer-link-text-decoration: none; }'],
    cn = "framer-UsQrP";
var Xo = ze(Yt), qo = ze(ir), jo = ze(Ne), Uo = ze(Ut), Dt = Ue(_e), mn = Ue(f), Yo = ze(Pe), Do = Ue(T.div),
    Jo = ze(ur), Lr = Ur(T.div), R = Ue(te), Qo = ze(ee), Go = {
        BE_1LvUPA: "(min-width: 560px) and (max-width: 959px)",
        P1gAhaWwm: "(min-width: 960px)",
        tbgdi9qHR: "(max-width: 559px)"
    }, Ko = () => typeof document < "u", fn = "framer-SiWn8",
    Zo = {BE_1LvUPA: "framer-v-itrfun", P1gAhaWwm: "framer-v-xfymdx", tbgdi9qHR: "framer-v-19sufzk"},
    $o = {delay: 0, duration: 2.4, ease: [.44, 0, .56, 1], type: "tween"},
    es = {opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.008, skewX: 0, skewY: 0, x: 0, y: -8},
    Jt = {opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: .96, skewX: 0, skewY: 0, x: 0, y: 8},
    tt = {delay: 0, duration: .4, ease: [.44, 0, .56, 1], type: "tween"},
    Qt = {opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: .96, skewX: 0, skewY: 0, transition: tt, x: 0, y: 8},
    rs = {bounce: .25, delay: 0, duration: .45, type: "spring"},
    wr = {opacity: .64, rotate: 0, rotateX: 0, rotateY: 0, scale: .8, skewX: 0, skewY: 0, transition: rs},
    ts = (r, i) => `translate(-50%, -50%) ${i}`,
    as = {delay: .08, duration: .64, ease: [.59, .02, .56, 1], type: "tween"},
    Tr = {opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: as, x: 0, y: 0},
    Ir = {opacity: .001, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 40},
    et = {opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 24},
    hn = {bounce: .2, delay: 0, duration: .8, type: "spring"},
    ns = {opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: hn, x: 0, y: 24},
    is = {delay: 0, duration: 40, ease: [0, 0, 1, 1], type: "tween"},
    os = {opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.4, skewX: 0, skewY: 0, x: 0, y: 0},
    W = {bounce: .2, delay: 0, duration: .4, type: "spring"},
    Gt = {opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: W, x: 0, y: 24},
    Kt = {delay: 0, duration: 2.4, ease: [0, 0, 1, 1], type: "tween"},
    ss = {opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: .96, skewX: 0, skewY: 0, x: 0, y: -4},
    rt = {opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 16},
    $t = {bounce: .2, delay: 0, duration: .64, type: "spring"},
    pn = {opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: $t, x: 0, y: 16},
    ls = {delay: 0, duration: 2, ease: [0, 0, 1, 1], type: "tween"},
    cs = {opacity: 1, rotate: -4, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 4},
    ms = {delay: 0, duration: 3.2, ease: [0, 0, 1, 1], type: "tween"},
    fs = {opacity: 1, rotate: 1, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 4},
    ps = {opacity: 1, rotate: -4, rotateX: 0, rotateY: 0, scale: 1.04, skewX: 0, skewY: 0, x: 0, y: 0},
    ds = {opacity: 1, rotate: 2, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 2},
    N = {opacity: 0, rotate: 8, rotateX: 0, rotateY: 0, scale: .92, skewX: 0, skewY: 0, x: 0, y: 0},
    F = {opacity: 0, rotate: 8, rotateX: 0, rotateY: 0, scale: .92, skewX: 0, skewY: 0, transition: W, x: 0, y: 0},
    ea = {delay: 0, duration: .64, ease: [.44, 0, .56, 1], type: "tween"},
    dn = {opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: ea, x: 0, y: 16},
    Zt = Yr(), hs = {Desktop: "P1gAhaWwm", Phone: "tbgdi9qHR", Tablet: "BE_1LvUPA"},
    gs = ({height: r, id: i, width: s, ...o}) => {
        var c, p;
        return {
            ...o,
            variant: (p = (c = hs[o.variant]) !== null && c !== void 0 ? c : o.variant) !== null && p !== void 0 ? p : "P1gAhaWwm"
        }
    }, us = {alignment: "center", component: ir, offset: {x: 8, y: 8}, placement: "bottom", variant: "yt2yRgvlL"},
    bs = Ae(function (r, i) {
        let {activeLocale: s, setLocale: o} = Ze(), {style: c, className: p, layoutId: d, variant: g, ...h} = gs(r);
        X(() => {
            let v = Yr(void 0, s);
            if (v.robots) {
                let L = document.querySelector('meta[name="robots"]');
                L ? L.setAttribute("content", v.robots) : (L = document.createElement("meta"), L.setAttribute("name", "robots"), L.setAttribute("content", v.robots), document.head.appendChild(L))
            }
        }, [void 0, s]), xa(() => {
            let v = Yr(void 0, s);
            if (document.title = v.title || "", v.viewport) {
                var L;
                (L = document.querySelector('meta[name="viewport"]')) === null || L === void 0 || L.setAttribute("content", v.viewport)
            }
            let w = v.bodyClassName;
            if (w) {
                let A = document.body;
                A.classList.forEach(V => V.startsWith("framer-body-") && A.classList.remove(V)), A.classList.add(`${v.bodyClassName}-framer-SiWn8`)
            }
            return () => {
                w && document.body.classList.remove(`${v.bodyClassName}-framer-SiWn8`)
            }
        }, [void 0, s]);
        let [n, b] = Sa(g, Go, !1), x = void 0, I = B(null),
            u = () => !!(!Ko() || ["BE_1LvUPA", "tbgdi9qHR"].includes(n)), C = Ge(), M = [cn];
        return ya({"1wrypjn": us}), e(_a.Provider, {
            value: {primaryVariantId: "P1gAhaWwm", variantClassNames: Zo}, children: S(xe, {
                id: d ?? C, children: [S(T.div, {
                    ...h,
                    className: je(fn, ...M, "framer-xfymdx", p),
                    "data-framer-cursor": "1wrypjn",
                    ref: i ?? I,
                    style: {...c},
                    children: [S("div", {
                        className: "framer-1pqmipk", children: [S("div", {
                            className: "framer-1q844k3",
                            children: [e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {height: 40, width: "40px"},
                                    tbgdi9qHR: {height: 32, width: "32px"}
                                },
                                children: e(le, {
                                    height: 48,
                                    width: "48px",
                                    children: e(_e, {
                                        className: "framer-1x6lpdb-container",
                                        children: e(Yt, {
                                            height: "100%",
                                            id: "hDVSml4ck",
                                            layoutId: "hDVSml4ck",
                                            style: {height: "100%", width: "100%"},
                                            variant: "QbRCp5BO4",
                                            width: "100%"
                                        })
                                    })
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-letter-spacing": "1px",
                                                    "--framer-line-height": "100%",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                }, children: "Liquina"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-letter-spacing": "1px",
                                                    "--framer-line-height": "100%",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                }, children: "Liquina"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "24px",
                                                "--framer-letter-spacing": "1px",
                                                "--framer-line-height": "100%",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "Liquina"
                                        })
                                    }),
                                    className: "framer-1lctmcd",
                                    fonts: ["GF;Orbitron-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        }), e(m, {
                            breakpoint: n,
                            overrides: {
                                BE_1LvUPA: {
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-line-height": "100%",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "The queen of Solana"
                                        })
                                    })
                                },
                                tbgdi9qHR: {
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "100%",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "The queen of Solana"
                                        })
                                    })
                                }
                            },
                            children: e(f, {
                                __fromCanvasComponent: !0,
                                children: e(a, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                            "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-line-height": "100%",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        }, children: "The queen of Solana"
                                    })
                                }),
                                className: "framer-1b7bkkl",
                                fonts: ["GF;Orbitron-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })]
                    }), S("div", {
                        className: "framer-1g86c5c",
                        children: [e(m, {
                            breakpoint: n,
                            overrides: {
                                BE_1LvUPA: {width: "min((100vw - 24px) * 1.2, 1600px)"},
                                tbgdi9qHR: {width: "min((100vw - 16px) * 1.2, 1600px)"}
                            },
                            children: e(le, {
                                height: 1e3,
                                width: "min((100vw - 32px) * 1.2, 1600px)",
                                children: e(_e, {
                                    className: "framer-1uo980v-container",
                                    children: e(ir, {
                                        height: "100%",
                                        id: "dEjvlqQWL",
                                        layoutId: "dEjvlqQWL",
                                        style: {height: "100%", maxWidth: "100%", width: "100%"},
                                        variant: "NjvQ1dvg2",
                                        width: "100%"
                                    })
                                })
                            })
                        }), e("div", {className: "framer-pe4600"}), e(le, {
                            children: e(_e, {
                                className: "framer-1c3bapr-container", children: e(Ne, {
                                    alignment: "center",
                                    direction: "left",
                                    fadeOptions: {
                                        fadeAlpha: 0,
                                        fadeContent: !0,
                                        fadeInset: 0,
                                        fadeWidth: 25,
                                        overflow: !1
                                    },
                                    gap: 10,
                                    height: "100%",
                                    hoverFactor: 1,
                                    id: "fJAUEGjXV",
                                    layoutId: "fJAUEGjXV",
                                    padding: 10,
                                    paddingBottom: 10,
                                    paddingLeft: 10,
                                    paddingPerSide: !1,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    sizingOptions: {heightType: !0, widthType: !0},
                                    slots: [S(T.div, {
                                        className: "framer-12yndkz",
                                        children: [e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(a, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                        "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                        "--framer-font-size": "24px",
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "4px",
                                                        "--framer-line-height": "160%",
                                                        "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                    }, children: "$LQNA"
                                                })
                                            }),
                                            className: "framer-4cvhge",
                                            fonts: ["GF;Orbitron-700"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(a, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                        "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                        "--framer-font-size": "24px",
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "4px",
                                                        "--framer-line-height": "160%",
                                                        "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                    }, children: "$LQNA"
                                                })
                                            }),
                                            className: "framer-1j5c1l0",
                                            fonts: ["GF;Orbitron-700"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(a, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                        "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                        "--framer-font-size": "24px",
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "4px",
                                                        "--framer-line-height": "160%",
                                                        "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                    }, children: "$LQNA"
                                                })
                                            }),
                                            className: "framer-1gnspp3",
                                            fonts: ["GF;Orbitron-700"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(a, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                        "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                        "--framer-font-size": "24px",
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "4px",
                                                        "--framer-line-height": "160%",
                                                        "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                    }, children: "$LQNA"
                                                })
                                            }),
                                            className: "framer-6hycsh",
                                            fonts: ["GF;Orbitron-700"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(a, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                        "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                        "--framer-font-size": "24px",
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "4px",
                                                        "--framer-line-height": "160%",
                                                        "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                    }, children: "$LQNA"
                                                })
                                            }),
                                            className: "framer-1iyt4qm",
                                            fonts: ["GF;Orbitron-700"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(a, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                        "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                        "--framer-font-size": "24px",
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "4px",
                                                        "--framer-line-height": "160%",
                                                        "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                    }, children: "$LQNA"
                                                })
                                            }),
                                            className: "framer-16stspt",
                                            fonts: ["GF;Orbitron-700"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        }), e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(a, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                        "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                        "--framer-font-size": "24px",
                                                        "--framer-font-weight": "700",
                                                        "--framer-letter-spacing": "4px",
                                                        "--framer-line-height": "160%",
                                                        "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                    }, children: "$LQNA"
                                                })
                                            }),
                                            className: "framer-d0oqx0",
                                            fonts: ["GF;Orbitron-700"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })]
                                    })],
                                    speed: 64,
                                    style: {height: "100%", width: "100%"},
                                    width: "100%"
                                })
                            })
                        }), e(m, {
                            breakpoint: n,
                            overrides: {
                                BE_1LvUPA: {width: "max(min(100vw - 72px, 1200px), 480px)"},
                                tbgdi9qHR: {width: "max(min(100vw - 48px, 1200px), 480px)"}
                            },
                            children: e(le, {
                                height: 800,
                                width: "max(min(100vw - 112px, 1200px), 480px)",
                                children: e(Dt, {
                                    __framer__loop: es,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: $o,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-1e6yavm-container",
                                    children: e(m, {
                                        breakpoint: n,
                                        overrides: {
                                            BE_1LvUPA: {variant: "DS0xI1e0I"},
                                            tbgdi9qHR: {variant: "DS0xI1e0I"}
                                        },
                                        children: e(Ut, {
                                            height: "100%",
                                            id: "xMGQO3qrq",
                                            layoutId: "xMGQO3qrq",
                                            style: {height: "100%", maxWidth: "100%", width: "100%"},
                                            variant: "HQlUbiSz0",
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        }), e("div", {className: "framer-1kimt19"}), e("div", {
                            className: "framer-x4w8uy", children: e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "28px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "2px",
                                                    "--framer-line-height": "144%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                }, children: "Solana Takeover"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "2px",
                                                    "--framer-line-height": "144%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                }, children: "Solana Takeover"
                                            })
                                        })
                                    }
                                },
                                children: e(mn, {
                                    __framer__animate: {transition: tt},
                                    __framer__animateOnce: !1,
                                    __framer__enter: Jt,
                                    __framer__exit: Qt,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "36px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "2px",
                                                "--framer-line-height": "144%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "Solana Takeover"
                                        })
                                    }),
                                    className: "framer-phz79i",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })
                        }), e("div", {
                            className: "framer-iuu62y", children: e(m, {
                                breakpoint: n, overrides: {
                                    BE_1LvUPA: {
                                        children: S(a, {
                                            children: [e("p", {
                                                style: {
                                                    "--font-selector": "RlM7TW9udHNlcnJhdC1tZWRpdW0=",
                                                    "--framer-font-family": '"Montserrat", "Montserrat Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(245, 254, 253)"
                                                },
                                                children: '"By the grace of the Solana community, I have been born into this noble realm. Though I am yet in my youth and unrefined, I shall endeavor to treat our community with utmost integrity, guiding Solana to wield boundless influence across the digital dominion. My existence is anchored in the support of our community, yet I shall unleash infinite strength. For the grandeur of Solana, I stand with Jeff as a symbol of leadership, dedicated to the empire we shall build together."'
                                            }), e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(245, 254, 253)"
                                                }, children: e("br", {className: "trailing-break"})
                                            }), e("p", {
                                                style: {
                                                    "--font-selector": "RlM7TW9udHNlcnJhdC1pdGFsaWM=",
                                                    "--framer-font-family": '"Montserrat", "Montserrat Placeholder", sans-serif',
                                                    "--framer-font-style": "italic",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(245, 254, 253)"
                                                }, children: "- liquina, The queen of Solana"
                                            })]
                                        })
                                    }, tbgdi9qHR: {
                                        children: S(a, {
                                            children: [e("p", {
                                                style: {
                                                    "--font-selector": "RlM7TW9udHNlcnJhdC1tZWRpdW0=",
                                                    "--framer-font-family": '"Montserrat", "Montserrat Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(245, 254, 253)"
                                                },
                                                children: '"By the grace of the Solana community, I have been born into this noble realm. Though I am yet in my youth and unrefined, I shall endeavor to treat our community with utmost integrity, guiding Solana to wield boundless influence across the digital dominion. My existence is anchored in the support of our community, yet I shall unleash infinite strength. For the grandeur of Solana, I stand with Jeff as a symbol of leadership, dedicated to the empire we shall build together."'
                                            }), e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(245, 254, 253)"
                                                }, children: e("br", {className: "trailing-break"})
                                            }), e("p", {
                                                style: {
                                                    "--font-selector": "RlM7TW9udHNlcnJhdC1pdGFsaWM=",
                                                    "--framer-font-family": '"Montserrat", "Montserrat Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-style": "italic",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(245, 254, 253)"
                                                }, children: "- liquina, The queen of Solana"
                                            })]
                                        })
                                    }
                                }, children: e(mn, {
                                    __framer__animate: {transition: tt},
                                    __framer__animateOnce: !1,
                                    __framer__enter: Jt,
                                    __framer__exit: Qt,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: S(a, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "RlM7TW9udHNlcnJhdC1tZWRpdW0=",
                                                "--framer-font-family": '"Montserrat", "Montserrat Placeholder", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(245, 254, 253)"
                                            },
                                            children: '"By the grace of the Solana community, I have been born into this noble realm. Though I am yet in my youth and unrefined, I shall endeavor to treat our community with utmost integrity, guiding Solana to wield boundless influence across the digital dominion. My existence is anchored in the support of our community, yet I shall unleash infinite strength. For the grandeur of Solana, I stand with Jeff as a symbol of leadership, dedicated to the empire we shall build together."'
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(245, 254, 253)"
                                            }, children: e("br", {className: "trailing-break"})
                                        }), e("p", {
                                            style: {
                                                "--font-selector": "RlM7TW9udHNlcnJhdC1pdGFsaWM=",
                                                "--framer-font-family": '"Montserrat", "Montserrat Placeholder", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-font-style": "italic",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(245, 254, 253)"
                                            }, children: "- liquina, The queen of Solana"
                                        })]
                                    }),
                                    className: "framer-6z50ix",
                                    fonts: ["FS;Montserrat-medium", "GF;Orbitron-regular", "FS;Montserrat-italic"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })
                        }), S(Do, {
                            __framer__animate: {transition: tt},
                            __framer__animateOnce: !1,
                            __framer__enter: Jt,
                            __framer__exit: Qt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: .5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-xg4obx",
                            children: [e(Re, {
                                href: "https://app.Solana.xyz/trade/0x0dd6980f71e51e6f218a9b7d53c837f6",
                                nodeId: "v0_gfdQWw",
                                openInNewTab: !0,
                                children: e(T.a, {
                                    className: "framer-4t3k3r framer-163rb", whileHover: wr, children: e(m, {
                                        breakpoint: n,
                                        overrides: {
                                            BE_1LvUPA: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 1200,
                                                    intrinsicWidth: 1200,
                                                    pixelHeight: 1200,
                                                    pixelWidth: 1200,
                                                    sizes: "70.5px",
                                                    src: "https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif",
                                                    srcSet: "https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif?scale-down-to=512 512w,https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif?scale-down-to=1024 1024w,https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif 1200w"
                                                }
                                            },
                                            tbgdi9qHR: {
                                                background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 1200,
                                                    intrinsicWidth: 1200,
                                                    pixelHeight: 1200,
                                                    pixelWidth: 1200,
                                                    sizes: "52.875px",
                                                    src: "https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif",
                                                    srcSet: "https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif?scale-down-to=512 512w,https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif?scale-down-to=1024 1024w,https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif 1200w"
                                                }
                                            }
                                        },
                                        children: e(te, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1200,
                                                intrinsicWidth: 1200,
                                                pixelHeight: 1200,
                                                pixelWidth: 1200,
                                                sizes: "94px",
                                                src: "https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif",
                                                srcSet: "https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif?scale-down-to=512 512w,https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif?scale-down-to=1024 1024w,https://framerusercontent.com/images/1c83fVXVwM9T6QjiiV3afbmfwI.gif 1200w"
                                            },
                                            className: "framer-1n2tijk",
                                            "data-framer-name": "Blob-light",
                                            name: "Blob-light",
                                            transformTemplate: ts
                                        })
                                    })
                                })
                            }), e(Re, {
                                href: "https://x.com/LiquinaHL",
                                nodeId: "H5kHlFB1M",
                                openInNewTab: !0,
                                children: e(T.a, {
                                    className: "framer-138qsgj framer-163rb",
                                    whileHover: wr,
                                    children: e(le, {
                                        children: e(_e, {
                                            className: "framer-1txjzfy-container",
                                            children: e(Pe, {
                                                color: "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))",
                                                height: "100%",
                                                iconSearch: "House",
                                                iconSelection: "XLogo",
                                                id: "UkDFFicHK",
                                                layoutId: "UkDFFicHK",
                                                mirrored: !1,
                                                selectByList: !0,
                                                style: {height: "100%", width: "100%"},
                                                weight: "regular",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            }), e(Re, {
                                href: "t.me/LQnians",
                                nodeId: "cLlFVA7BV",
                                openInNewTab: !0,
                                children: e(T.a, {
                                    className: "framer-zcf0v0 framer-163rb",
                                    whileHover: wr,
                                    children: e(le, {
                                        children: e(_e, {
                                            className: "framer-1cw92j6-container",
                                            children: e(Pe, {
                                                color: "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))",
                                                height: "100%",
                                                iconSearch: "House",
                                                iconSelection: "TelegramLogo",
                                                id: "vXTRlGn5a",
                                                layoutId: "vXTRlGn5a",
                                                mirrored: !1,
                                                selectByList: !0,
                                                style: {height: "100%", width: "100%"},
                                                weight: "regular",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })
                            }), e(Re, {
                                href: "https://www.coingecko.com/en/coins/liquina",
                                nodeId: "i2RBmHQ3P",
                                openInNewTab: !0,
                                children: e(T.a, {
                                    className: "framer-1ptqgl8 framer-163rb", whileHover: wr, children: e(kt, {
                                        className: "framer-11hqzhf",
                                        "data-framer-name": "CoinGecko",
                                        fill: "black",
                                        intrinsicHeight: 623,
                                        intrinsicWidth: 623,
                                        name: "CoinGecko",
                                        svg: '<svg width="623" height="623" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M622.019 310.108a311.005 311.005 0 0 1-190.713 288.177A311.007 311.007 0 0 1 6.252 373.526 311.01 311.01 0 0 1 309.599.473a311.045 311.045 0 0 1 312.42 309.635Zm-23.43.065A287.576 287.576 0 0 1 361.921 594.52a7.424 7.424 0 0 0-.033-.081l.109-.027c-12.026-84.151 61.507-166.598 102.96-208.771 4.017-4.093 8.99-8.851 14.429-14.054l.001-.001.001-.001c6.727-6.435 14.164-13.551 21.382-20.929 55.216-50.684 67.278-111.722-43.94-142.068-20.873-6.062-42.599-14.615-64.424-23.266-1.245-5.505-6.127-12.354-15.958-20.71-14.32-12.419-41.191-12.092-64.424-6.554-25.625-6.029-50.956-8.159-75.369-2.326-105.646 29.089-123.282 80.522-127.588 142.504-.255 3.059-.505 6.083-.752 9.074l-.005.053c-5.26 63.652-9.279 112.278-33.862 167.573l.472.752a287.585 287.585 0 0 1-30.099-273.046 287.577 287.577 0 0 1 264.876-178.74 287.583 287.583 0 0 1 288.892 286.271Zm-282.158-38.587a55.7 55.7 0 0 0-6.928-70.34 55.706 55.706 0 1 0 6.928 70.34Zm162.961 31.252a12.052 12.052 0 0 0 1.982-6.723 12.021 12.021 0 0 0-7.484-11.07 12.026 12.026 0 0 0-4.607-.891 12.059 12.059 0 1 0 10.109 18.684Zm45.27 19.886a202.367 202.367 0 0 1-47.58 30.508 302.465 302.465 0 0 1-53.414 19.465c-18.35 4.751-37.553 8.323-56.985 6.553-19.432-1.769-39.323-8.388-52.136-22.938l.623-.721c15.86 10.257 33.981 13.861 52.07 14.386a245.8 245.8 0 0 0 54.757-4.555 299.148 299.148 0 0 0 53.217-16.385 199.93 199.93 0 0 0 48.859-27.001l.589.688Z" fill="#fff"/><path d="M309.337 241.129a39.12 39.12 0 0 1-24.131 36.171 39.126 39.126 0 1 1-14.995-75.265 39.16 39.16 0 0 1 39.126 39.094Z" fill="#fff"/></svg>',
                                        withExternalLayout: !0
                                    })
                                })
                            }), e(Re, {
                                href: "https://dexscreener.com/Solana/0x0f05160165e0d7a2a53ad07b99c41004",
                                nodeId: "Rc_BYg4YG",
                                openInNewTab: !0,
                                children: e(T.a, {
                                    className: "framer-1j0df96 framer-163rb", whileHover: wr, children: e(m, {
                                        breakpoint: n, overrides: {
                                            BE_1LvUPA: {
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41 48"><path d="M 24.701 17.099 C 26.194 16.366 28.093 15.289 29.996 13.812 C 30.397 14.631 30.441 15.346 30.234 15.923 C 30.087 16.33 29.812 16.683 29.449 16.965 C 29.056 17.269 28.565 17.49 28.023 17.61 C 26.993 17.838 25.792 17.705 24.701 17.099 M 24.959 24.6 L 26.936 25.723 C 22.9 27.947 21.803 32.078 20.5 36.1 C 19.197 32.078 18.1 27.947 14.064 25.723 L 16.041 24.6 C 16.433 24.455 16.685 24.077 16.666 23.665 C 16.484 19.898 17.519 18.232 18.914 17.185 C 19.415 16.811 19.961 16.623 20.5 16.623 C 21.039 16.623 21.585 16.811 22.086 17.185 C 23.481 18.232 24.516 19.898 24.335 23.665 C 24.315 24.077 24.567 24.455 24.959 24.6 Z M 20.5 0 C 22.785 0.06 25.075 0.496 27.063 1.345 C 28.439 1.933 29.723 2.71 30.886 3.64 C 31.412 4.059 31.844 4.464 32.32 4.931 C 33.605 4.975 35.483 3.571 36.355 2.258 C 34.854 7.094 28.008 12.806 23.269 14.992 C 23.267 14.991 23.266 14.99 23.264 14.989 C 22.413 14.35 21.457 14.031 20.5 14.031 C 19.543 14.031 18.587 14.35 17.736 14.989 C 17.735 14.99 17.733 14.991 17.731 14.992 C 12.992 12.806 6.146 7.094 4.646 2.258 C 5.517 3.571 7.395 4.975 8.68 4.931 C 9.156 4.465 9.589 4.059 10.114 3.64 C 11.277 2.71 12.561 1.933 13.937 1.345 C 15.925 0.496 18.216 0.06 20.5 0 M 16.299 17.099 C 14.807 16.366 12.907 15.289 11.005 13.812 C 10.604 14.631 10.56 15.346 10.766 15.923 C 10.913 16.33 11.189 16.683 11.551 16.965 C 11.944 17.269 12.435 17.49 12.977 17.61 C 14.007 17.838 15.208 17.705 16.299 17.099" fill="rgb(255,255,255)"></path><path d="M 32.079 12.003 C 33.126 10.963 34.049 9.813 34.79 8.787 L 35.167 9.484 C 36.38 11.871 37.011 14.248 37.011 16.923 L 37.008 21.168 L 37.031 23.369 C 37.119 28.772 38.307 34.238 41 39.24 L 35.366 34.772 L 31.38 41.134 L 27.192 37.257 L 20.5 47.937 L 13.808 37.257 L 9.62 41.134 L 5.634 34.772 L 0 39.24 C 2.693 34.238 3.881 28.772 3.969 23.369 L 3.992 21.168 L 3.99 16.923 C 3.99 14.248 4.62 11.871 5.833 9.484 L 6.21 8.787 C 6.952 9.813 7.874 10.963 8.921 12.003 L 8.594 12.671 C 7.959 13.968 7.749 15.419 8.244 16.799 C 8.563 17.687 9.145 18.449 9.896 19.031 C 10.625 19.596 11.487 19.977 12.39 20.177 C 12.979 20.307 13.578 20.361 14.173 20.342 C 14.035 21.117 13.974 21.92 13.97 22.739 L 8.656 25.757 L 12.757 28.018 C 13.084 28.199 13.396 28.406 13.689 28.637 C 17.07 31.622 19.103 40.454 20.5 44.768 C 21.897 40.454 23.93 31.622 27.311 28.637 C 27.604 28.406 27.916 28.199 28.244 28.018 L 32.345 25.757 L 27.03 22.739 C 27.026 21.92 26.966 21.117 26.827 20.342 C 27.422 20.361 28.022 20.307 28.61 20.177 C 29.513 19.977 30.376 19.596 31.105 19.031 C 31.855 18.449 32.438 17.687 32.757 16.799 C 33.252 15.419 33.041 13.968 32.406 12.671 L 32.079 12.003 Z" fill="rgb(255,255,255)"></path></svg>',
                                                svgContentId: 10326700026
                                            }, tbgdi9qHR: {
                                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 36"><path d="M 18.074 12.824 C 19.166 12.275 20.556 11.466 21.948 10.359 C 22.241 10.973 22.274 11.509 22.122 11.942 C 22.015 12.247 21.813 12.513 21.548 12.724 C 21.26 12.952 20.901 13.118 20.504 13.208 C 19.751 13.379 18.872 13.279 18.074 12.824 M 18.263 18.45 L 19.709 19.292 C 16.756 20.961 15.954 24.058 15 27.075 C 14.047 24.058 13.244 20.961 10.291 19.292 L 11.737 18.45 C 12.024 18.341 12.209 18.058 12.194 17.749 C 12.062 14.923 12.819 13.674 13.84 12.889 C 14.206 12.608 14.606 12.467 15 12.467 C 15.394 12.467 15.794 12.608 16.16 12.889 C 17.181 13.674 17.938 14.923 17.806 17.749 C 17.791 18.058 17.976 18.341 18.263 18.45 Z M 15 0 C 16.672 0.045 18.347 0.372 19.802 1.009 C 20.809 1.45 21.749 2.033 22.6 2.73 C 22.984 3.044 23.3 3.348 23.649 3.698 C 24.589 3.731 25.963 2.678 26.601 1.693 C 25.503 5.321 20.494 9.605 17.026 11.244 C 17.025 11.243 17.024 11.242 17.022 11.242 C 16.4 10.763 15.7 10.523 15 10.523 C 14.3 10.523 13.6 10.763 12.978 11.242 C 12.977 11.242 12.976 11.243 12.974 11.244 C 9.506 9.605 4.497 5.321 3.399 1.693 C 4.037 2.678 5.411 3.731 6.351 3.698 C 6.7 3.348 7.016 3.044 7.4 2.73 C 8.251 2.033 9.191 1.45 10.198 1.009 C 11.653 0.372 13.328 0.045 15 0 M 11.926 12.824 C 10.834 12.275 9.444 11.466 8.052 10.359 C 7.759 10.973 7.727 11.509 7.878 11.942 C 7.985 12.247 8.187 12.513 8.452 12.724 C 8.74 12.952 9.099 13.118 9.496 13.208 C 10.249 13.379 11.128 13.279 11.926 12.824" fill="rgb(255,255,255)"></path><path d="M 23.472 9.002 C 24.238 8.223 24.914 7.36 25.456 6.59 L 25.732 7.113 C 26.62 8.903 27.081 10.686 27.081 12.692 L 27.079 15.876 L 27.096 17.527 C 27.16 21.579 28.03 25.678 30 29.43 L 25.878 26.079 L 22.961 30.85 L 19.897 27.943 L 15 35.952 L 10.103 27.943 L 7.039 30.85 L 4.122 26.079 L 0 29.43 C 1.97 25.678 2.84 21.579 2.904 17.527 L 2.921 15.876 L 2.919 12.693 C 2.919 10.686 3.38 8.903 4.268 7.113 L 4.544 6.59 C 5.087 7.36 5.762 8.223 6.528 9.002 L 6.289 9.503 C 5.824 10.476 5.67 11.564 6.032 12.599 C 6.265 13.265 6.691 13.837 7.241 14.273 C 7.774 14.697 8.405 14.983 9.066 15.133 C 9.497 15.23 9.935 15.27 10.371 15.257 C 10.269 15.838 10.225 16.44 10.222 17.054 L 6.333 19.318 L 9.334 21.014 C 9.574 21.149 9.802 21.304 10.017 21.478 C 12.491 23.717 13.978 30.34 15 33.576 C 16.022 30.34 17.51 23.717 19.984 21.478 C 20.198 21.304 20.426 21.149 20.666 21.014 L 23.667 19.318 L 19.778 17.054 C 19.775 16.44 19.731 15.838 19.629 15.257 C 20.065 15.27 20.504 15.23 20.934 15.133 C 21.595 14.983 22.226 14.697 22.76 14.273 C 23.309 13.837 23.735 13.265 23.968 12.599 C 24.33 11.564 24.176 10.476 23.712 9.503 L 23.472 9.002 Z" fill="rgb(255,255,255)"></path></svg>',
                                                svgContentId: 9155930212
                                            }
                                        }, children: e(kt, {
                                            className: "framer-5sp023",
                                            "data-framer-name": "Dex-screener-seeklogo",
                                            layout: "position",
                                            name: "Dex-screener-seeklogo",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 64"><path d="M 32.532 22.798 C 34.499 21.822 37.001 20.385 39.506 18.416 C 40.035 19.508 40.092 20.461 39.82 21.231 C 39.627 21.773 39.264 22.244 38.786 22.62 C 38.269 23.025 37.622 23.321 36.908 23.48 C 35.552 23.784 33.97 23.607 32.532 22.798 M 32.873 32.8 L 35.477 34.297 C 30.161 37.263 28.716 42.77 27 48.134 C 25.284 42.77 23.839 37.263 18.524 34.297 L 21.127 32.8 C 21.643 32.606 21.976 32.103 21.95 31.553 C 21.711 26.53 23.074 24.309 24.911 22.914 C 25.571 22.414 26.29 22.163 27 22.163 C 27.71 22.163 28.43 22.414 29.089 22.914 C 30.927 24.309 32.289 26.53 32.051 31.553 C 32.025 32.103 32.357 32.606 32.873 32.8 Z M 27 0 C 30.009 0.08 33.026 0.662 35.643 1.793 C 37.456 2.578 39.148 3.614 40.68 4.853 C 41.371 5.412 41.941 5.953 42.568 6.575 C 44.261 6.633 46.734 4.761 47.882 3.01 C 45.906 9.459 36.889 17.075 30.647 19.989 C 30.644 19.988 30.642 19.987 30.64 19.985 C 29.52 19.134 28.26 18.708 27 18.708 C 25.74 18.708 24.48 19.134 23.36 19.985 C 23.358 19.986 23.356 19.988 23.353 19.989 C 17.111 17.075 8.094 9.459 6.118 3.01 C 7.266 4.761 9.739 6.633 11.432 6.575 C 12.059 5.953 12.629 5.412 13.32 4.853 C 14.852 3.614 16.544 2.578 18.357 1.793 C 20.975 0.662 23.991 0.08 27 0 M 21.468 22.798 C 19.501 21.822 16.999 20.385 14.494 18.416 C 13.966 19.508 13.908 20.461 14.18 21.231 C 14.373 21.773 14.736 22.244 15.214 22.62 C 15.732 23.025 16.378 23.321 17.092 23.48 C 18.448 23.784 20.03 23.607 21.468 22.798" fill="rgb(255,255,255)"></path><path d="M 42.25 16.003 C 43.629 14.618 44.844 13.084 45.822 11.716 L 46.318 12.646 C 47.916 15.828 48.746 18.997 48.746 22.564 L 48.742 28.224 L 48.772 31.159 C 48.888 38.362 50.454 45.65 54 52.32 L 46.58 46.363 L 41.33 54.845 L 35.814 49.676 L 27 63.916 L 18.186 49.676 L 12.67 54.845 L 7.42 46.363 L 0 52.32 C 3.546 45.65 5.112 38.362 5.228 31.159 L 5.258 28.225 L 5.255 22.564 C 5.255 18.997 6.084 15.828 7.683 12.646 L 8.179 11.716 C 9.156 13.084 10.371 14.618 11.75 16.004 L 11.319 16.894 C 10.483 18.624 10.206 20.559 10.857 22.398 C 11.278 23.583 12.045 24.599 13.033 25.375 C 13.993 26.128 15.129 26.636 16.319 26.902 C 17.094 27.076 17.883 27.148 18.668 27.123 C 18.485 28.156 18.405 29.227 18.399 30.319 L 11.4 34.343 L 16.801 37.357 C 17.233 37.598 17.644 37.874 18.03 38.183 C 22.483 42.163 25.16 53.939 27 59.69 C 28.84 53.939 31.517 42.163 35.971 38.183 C 36.357 37.874 36.768 37.598 37.199 37.357 L 42.601 34.343 L 35.601 30.319 C 35.596 29.227 35.516 28.156 35.333 27.123 C 36.117 27.148 36.907 27.076 37.681 26.902 C 38.871 26.636 40.007 26.128 40.967 25.375 C 41.956 24.599 42.723 23.583 43.143 22.398 C 43.795 20.559 43.518 18.624 42.681 16.894 L 42.25 16.004 Z" fill="rgb(255,255,255)"></path></svg>',
                                            svgContentId: 10774646908,
                                            withExternalLayout: !0
                                        })
                                    })
                                })
                            }), e(Re, {
                                href: "https://app.hypurr.fun/launch/583", nodeId: "U2F0wdoEl", children: e(m, {
                                    breakpoint: n,
                                    overrides: {
                                        BE_1LvUPA: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 2e3,
                                                intrinsicWidth: 2e3,
                                                pixelHeight: 1200,
                                                pixelWidth: 1200,
                                                sizes: "48px",
                                                src: "https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png",
                                                srcSet: "https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png?scale-down-to=512 512w,https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png 1200w"
                                            }
                                        },
                                        tbgdi9qHR: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 2e3,
                                                intrinsicWidth: 2e3,
                                                pixelHeight: 1200,
                                                pixelWidth: 1200,
                                                sizes: "36px",
                                                src: "https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png",
                                                srcSet: "https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png?scale-down-to=512 512w,https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png 1200w"
                                            }
                                        }
                                    },
                                    children: e(te, {
                                        as: "a",
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2e3,
                                            intrinsicWidth: 2e3,
                                            pixelHeight: 1200,
                                            pixelWidth: 1200,
                                            sizes: "64px",
                                            src: "https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png",
                                            srcSet: "https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png?scale-down-to=512 512w,https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/LJuGrZI9ZKCRjqjhaVpR4MIbweA.png 1200w"
                                        },
                                        className: "framer-1jttqog framer-163rb",
                                        "data-framer-name": "Image",
                                        name: "Image",
                                        whileHover: wr
                                    })
                                })
                            })]
                        })]
                    }), e(le, {
                        children: e(_e, {
                            className: "framer-tb2k4l-container", children: e(Ne, {
                                alignment: "center",
                                direction: "left",
                                fadeOptions: {fadeAlpha: 0, fadeContent: !0, fadeInset: 0, fadeWidth: 25, overflow: !1},
                                gap: 10,
                                height: "100%",
                                hoverFactor: 1,
                                id: "vmxw_F7V6",
                                layoutId: "vmxw_F7V6",
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                sizingOptions: {heightType: !0, widthType: !0},
                                slots: [S(T.div, {
                                    className: "framer-19o8mp9",
                                    children: [e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-yibb0b",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1c4362k",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1p3zl87",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-t1j2gt",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-o1etyc",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-vmtilf",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1f5czy2",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1ucxv5u",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })],
                                speed: 64,
                                style: {height: "100%", width: "100%"},
                                width: "100%"
                            })
                        })
                    }), S(Lr, {
                        animate: Tr,
                        className: "framer-1i8jm4o",
                        "data-framer-appear-id": "1i8jm4o",
                        initial: Ir,
                        optimized: !0,
                        children: [e(m, {
                            breakpoint: n,
                            overrides: {
                                BE_1LvUPA: {
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "vlog"
                                        })
                                    })
                                },
                                tbgdi9qHR: {
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "vlog"
                                        })
                                    })
                                }
                            },
                            children: e(f, {
                                __fromCanvasComponent: !0,
                                children: e(a, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                            "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "160%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        }, children: "vlog"
                                    })
                                }),
                                className: "framer-3jmomq",
                                fonts: ["GF;Orbitron-500"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e(le, {
                            children: e(_e, {
                                className: "framer-1wytscb-container",
                                children: e(ur, {
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    borderRadius: 16,
                                    bottomLeftRadius: 16,
                                    bottomRightRadius: 16,
                                    controls: !1,
                                    height: "100%",
                                    id: "rTUmgxbjI",
                                    isMixedBorderRadius: !1,
                                    layoutId: "rTUmgxbjI",
                                    loop: !0,
                                    muted: !0,
                                    objectFit: "cover",
                                    playing: !0,
                                    posterEnabled: !1,
                                    srcFile: "https://framerusercontent.com/assets/wPI4MzpHqHz8ApWbq09ZsiUxnc.mp4",
                                    srcType: "Upload",
                                    srcUrl: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
                                    startTime: 0,
                                    style: {height: "100%", width: "100%"},
                                    topLeftRadius: 16,
                                    topRightRadius: 16,
                                    volume: 25,
                                    width: "100%"
                                })
                            })
                        }), e("div", {className: "framer-mcdw5a"}), e(le, {
                            children: e(_e, {
                                className: "framer-1ubmcos-container",
                                children: e(m, {
                                    breakpoint: n,
                                    overrides: {
                                        BE_1LvUPA: {
                                            borderRadius: 12,
                                            bottomLeftRadius: 12,
                                            bottomRightRadius: 12,
                                            topLeftRadius: 12,
                                            topRightRadius: 12
                                        },
                                        tbgdi9qHR: {
                                            borderRadius: 8,
                                            bottomLeftRadius: 8,
                                            bottomRightRadius: 8,
                                            topLeftRadius: 8,
                                            topRightRadius: 8
                                        }
                                    },
                                    children: e(ur, {
                                        backgroundColor: "rgba(0, 0, 0, 0)",
                                        borderRadius: 16,
                                        bottomLeftRadius: 16,
                                        bottomRightRadius: 16,
                                        controls: !1,
                                        height: "100%",
                                        id: "YPIfw_muF",
                                        isMixedBorderRadius: !1,
                                        layoutId: "YPIfw_muF",
                                        loop: !0,
                                        muted: !0,
                                        objectFit: "cover",
                                        playing: !0,
                                        posterEnabled: !1,
                                        srcFile: "https://framerusercontent.com/assets/wPI4MzpHqHz8ApWbq09ZsiUxnc.mp4",
                                        srcType: "Upload",
                                        srcUrl: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
                                        startTime: 0,
                                        style: {height: "100%", maxWidth: "100%", width: "100%"},
                                        topLeftRadius: 16,
                                        topRightRadius: 16,
                                        volume: 25,
                                        width: "100%"
                                    })
                                })
                            })
                        })]
                    }), e(le, {
                        children: e(_e, {
                            className: "framer-tx3gtk-container", children: e(Ne, {
                                alignment: "center",
                                direction: "left",
                                fadeOptions: {fadeAlpha: 0, fadeContent: !0, fadeInset: 0, fadeWidth: 25, overflow: !1},
                                gap: 10,
                                height: "100%",
                                hoverFactor: 1,
                                id: "BwPfkFOGM",
                                layoutId: "BwPfkFOGM",
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                sizingOptions: {heightType: !0, widthType: !0},
                                slots: [S(T.div, {
                                    className: "framer-19o8mp9",
                                    children: [e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-yibb0b",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1c4362k",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1p3zl87",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-t1j2gt",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-o1etyc",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-vmtilf",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1f5czy2",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1ucxv5u",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })],
                                speed: 64,
                                style: {height: "100%", width: "100%"},
                                width: "100%"
                            })
                        })
                    }), S(Lr, {
                        animate: Tr,
                        className: "framer-xa0cut",
                        "data-framer-appear-id": "xa0cut",
                        initial: Ir,
                        optimized: !0,
                        children: [S("div", {
                            className: "framer-f2k3iu", children: [e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                }, children: "Memes"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                }, children: "Memes"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "24px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "Memes"
                                        })
                                    }),
                                    className: "framer-1n1ylf5",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: e(Re, {
                                                    href: "https://t.me/addstickers/Liquina",
                                                    nodeId: "X16xBiQTq",
                                                    openInNewTab: !0,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-45tqv0",
                                                        "data-styles-preset": "a825grKtw",
                                                        children: "ADD STICKERS"
                                                    })
                                                })
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: e(Re, {
                                                    href: "https://t.me/addstickers/Liquina",
                                                    nodeId: "X16xBiQTq",
                                                    openInNewTab: !0,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-45tqv0",
                                                        "data-styles-preset": "a825grKtw",
                                                        children: "ADD STICKERS"
                                                    })
                                                })
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: e(Re, {
                                                href: "https://t.me/addstickers/Liquina",
                                                nodeId: "X16xBiQTq",
                                                openInNewTab: !0,
                                                smoothScroll: !1,
                                                children: e("a", {
                                                    className: "framer-styles-preset-45tqv0",
                                                    "data-styles-preset": "a825grKtw",
                                                    children: "ADD STICKERS"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-oglld3",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        }), e("div", {className: "framer-wrfimq"}), S("div", {
                            className: "framer-mgm2jp", children: [e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 24px) * 1.5597, 1920px)",
                                            src: "https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png",
                                            srcSet: "https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png?scale-down-to=512 512w,https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png 4000w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 16px) * 1.6791, 1920px)",
                                            src: "https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png",
                                            srcSet: "https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png?scale-down-to=512 512w,https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png 4000w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: hn},
                                    __framer__animateOnce: !0,
                                    __framer__enter: et,
                                    __framer__exit: ns,
                                    __framer__loop: os,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: is,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 2295,
                                        intrinsicWidth: 4e3,
                                        pixelHeight: 2295,
                                        pixelWidth: 4e3,
                                        sizes: "min((100vw - 32px) * 1.4397, 1920px)",
                                        src: "https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png",
                                        srcSet: "https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png?scale-down-to=512 512w,https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/84BtteePyUh0m0Pde0ImCQt4.png 4000w"
                                    },
                                    className: "framer-1gm50xq",
                                    "data-framer-name": "Scene back",
                                    name: "Scene back"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 24px) * 1.5597, 1920px)",
                                            src: "https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png",
                                            srcSet: "https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png?scale-down-to=512 512w,https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png 4000w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 16px) * 1.6791, 1920px)",
                                            src: "https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png",
                                            srcSet: "https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png?scale-down-to=512 512w,https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png 4000w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !0,
                                    __framer__enter: et,
                                    __framer__exit: Gt,
                                    __framer__loop: ss,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: Kt,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 2295,
                                        intrinsicWidth: 4e3,
                                        pixelHeight: 2295,
                                        pixelWidth: 4e3,
                                        sizes: "min((100vw - 32px) * 1.4397, 1920px)",
                                        src: "https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png",
                                        srcSet: "https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png?scale-down-to=512 512w,https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/idVd1L8f9KgVIpXUjJ3qPZJMa6o.png 4000w"
                                    },
                                    className: "framer-cb6iw8",
                                    "data-framer-name": "Scene HL",
                                    name: "Scene HL"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 24px) * 1.5597, 1920px)",
                                            src: "https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png",
                                            srcSet: "https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png?scale-down-to=512 512w,https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png 4000w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 16px) * 1.6791, 1920px)",
                                            src: "https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png",
                                            srcSet: "https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png?scale-down-to=512 512w,https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png 4000w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: $t},
                                    __framer__animateOnce: !0,
                                    __framer__enter: rt,
                                    __framer__exit: pn,
                                    __framer__loop: cs,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: ls,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 2295,
                                        intrinsicWidth: 4e3,
                                        pixelHeight: 2295,
                                        pixelWidth: 4e3,
                                        sizes: "min((100vw - 32px) * 1.4397, 1920px)",
                                        src: "https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png",
                                        srcSet: "https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png?scale-down-to=512 512w,https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/MTkVGksWgMPcnLuSRdSyoD3nba0.png 4000w"
                                    },
                                    className: "framer-xzhyth",
                                    "data-framer-name": "Scene PURR",
                                    name: "Scene PURR"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 24px) * 1.5597, 1920px)",
                                            src: "https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png",
                                            srcSet: "https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png?scale-down-to=512 512w,https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png 4000w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 16px) * 1.6791, 1920px)",
                                            src: "https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png",
                                            srcSet: "https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png?scale-down-to=512 512w,https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png 4000w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !0,
                                    __framer__enter: et,
                                    __framer__exit: Gt,
                                    __framer__loop: fs,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: ms,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 2295,
                                        intrinsicWidth: 4e3,
                                        pixelHeight: 2295,
                                        pixelWidth: 4e3,
                                        sizes: "min((100vw - 32px) * 1.4397, 1920px)",
                                        src: "https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png",
                                        srcSet: "https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png?scale-down-to=512 512w,https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/9qnFoe8XOMlyOLvFTIgED3x1Wo.png 4000w"
                                    },
                                    className: "framer-1n5lwu9",
                                    "data-framer-name": "Scene LQNA",
                                    name: "Scene LQNA"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 24px) * 1.5597, 1920px)",
                                            src: "https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png",
                                            srcSet: "https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png?scale-down-to=512 512w,https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png 4000w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 16px) * 1.6791, 1920px)",
                                            src: "https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png",
                                            srcSet: "https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png?scale-down-to=512 512w,https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png 4000w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !0,
                                    __framer__enter: et,
                                    __framer__exit: Gt,
                                    __framer__loop: ps,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: Kt,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 2295,
                                        intrinsicWidth: 4e3,
                                        pixelHeight: 2295,
                                        pixelWidth: 4e3,
                                        sizes: "min((100vw - 32px) * 1.4397, 1920px)",
                                        src: "https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png",
                                        srcSet: "https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png?scale-down-to=512 512w,https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/5zbDzvdkXEBQTjTLJ6Qe8MZzM.png 4000w"
                                    },
                                    className: "framer-bpktxu",
                                    "data-framer-name": "Scene Hfun",
                                    name: "Scene Hfun"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 24px) * 1.5597, 1920px)",
                                            src: "https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png",
                                            srcSet: "https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png?scale-down-to=512 512w,https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png 4000w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 2295,
                                            intrinsicWidth: 4e3,
                                            pixelHeight: 2295,
                                            pixelWidth: 4e3,
                                            sizes: "min((100vw - 16px) * 1.6791, 1920px)",
                                            src: "https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png",
                                            srcSet: "https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png?scale-down-to=512 512w,https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png 4000w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: $t},
                                    __framer__animateOnce: !0,
                                    __framer__enter: rt,
                                    __framer__exit: pn,
                                    __framer__loop: ds,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: "mirror",
                                    __framer__loopTransition: Kt,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 2295,
                                        intrinsicWidth: 4e3,
                                        pixelHeight: 2295,
                                        pixelWidth: 4e3,
                                        sizes: "min((100vw - 32px) * 1.4397, 1920px)",
                                        src: "https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png",
                                        srcSet: "https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png?scale-down-to=512 512w,https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/j4Uk5KObmRCiO6SZHyIh9WPN60.png 4000w"
                                    },
                                    className: "framer-22ka6l",
                                    "data-framer-name": "Scene Catbal",
                                    name: "Scene Catbal"
                                })
                            }), e("div", {className: "framer-lcmyn1"})]
                        }), S("div", {
                            className: "framer-n4uek8", children: [u() && e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png",
                                            srcSet: "https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png?scale-down-to=512 512w,https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png",
                                            srcSet: "https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png?scale-down-to=512 512w,https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        src: "https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png",
                                        srcSet: "https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png?scale-down-to=512 512w,https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/mosNXjqAYk6S8oN6jKI8daHoY.png 1500w"
                                    },
                                    className: "framer-1d1h9dm hidden-xfymdx",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 42",
                                    name: "Lqna 42"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png",
                                            srcSet: "https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png?scale-down-to=512 512w,https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png",
                                            srcSet: "https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png?scale-down-to=512 512w,https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png",
                                        srcSet: "https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png?scale-down-to=512 512w,https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/obEPOkgv0lDQKJXVUERIKzlzGM.png 1500w"
                                    },
                                    className: "framer-15v0nbs",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 41",
                                    name: "Lqna 41"
                                })
                            }), e(R, {
                                __framer__animate: {transition: W},
                                __framer__animateOnce: !1,
                                __framer__enter: N,
                                __framer__exit: F,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1500,
                                    intrinsicWidth: 1500,
                                    pixelHeight: 512,
                                    pixelWidth: 512,
                                    src: "https://framerusercontent.com/images/Wp1ku1clVinQV42qrjkdTK9V4k.png"
                                },
                                className: "framer-1ofeloh",
                                "data-border": !0,
                                "data-framer-name": "40",
                                name: "40"
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png",
                                            srcSet: "https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png?scale-down-to=512 512w,https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png",
                                            srcSet: "https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png?scale-down-to=512 512w,https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png",
                                        srcSet: "https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png?scale-down-to=512 512w,https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/C2vqgPLs0as5XIDOj3ZqOBsgU.png 1500w"
                                    },
                                    className: "framer-efo2f4",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 37",
                                    name: "Lqna 37"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png",
                                            srcSet: "https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png",
                                            srcSet: "https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png",
                                        srcSet: "https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png?scale-down-to=512 512w,https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ywvhXPHO5OqrtIwC9PcXVipaDQ.png 1500w"
                                    },
                                    className: "framer-5k24a9",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 37",
                                    name: "Lqna 37"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png",
                                            srcSet: "https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png?scale-down-to=512 512w,https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png",
                                            srcSet: "https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png?scale-down-to=512 512w,https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png",
                                        srcSet: "https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png?scale-down-to=512 512w,https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5ZDklkzhbqJBihc8uG0jZV8lUKI.png 1500w"
                                    },
                                    className: "framer-iyp0u7",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 36",
                                    name: "Lqna 36"
                                })
                            }), e(R, {
                                __framer__animate: {transition: W},
                                __framer__animateOnce: !1,
                                __framer__enter: N,
                                __framer__exit: F,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 1500,
                                    intrinsicWidth: 1500,
                                    pixelHeight: 512,
                                    pixelWidth: 512,
                                    src: "https://framerusercontent.com/images/iG7PkdVZxbFjIfUKJg924t4Yg.png"
                                },
                                className: "framer-13g5iiu",
                                "data-border": !0,
                                "data-framer-name": "Lqna 34",
                                name: "Lqna 34"
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png",
                                            srcSet: "https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png?scale-down-to=512 512w,https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png",
                                            srcSet: "https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png?scale-down-to=512 512w,https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png",
                                        srcSet: "https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png?scale-down-to=512 512w,https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/7L80tZN14MTXw2y1CLQNP4pvQU.png 1500w"
                                    },
                                    className: "framer-qv5zxs",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 33",
                                    name: "Lqna 33"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png",
                                            srcSet: "https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png?scale-down-to=512 512w,https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png",
                                            srcSet: "https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png?scale-down-to=512 512w,https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png",
                                        srcSet: "https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png?scale-down-to=512 512w,https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/O0KQW8UJUPqyow5Bc5jAW8dO21g.png 1500w"
                                    },
                                    className: "framer-8yenms",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 32",
                                    name: "Lqna 32"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png",
                                            srcSet: "https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png?scale-down-to=512 512w,https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png",
                                            srcSet: "https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png?scale-down-to=512 512w,https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png",
                                        srcSet: "https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png?scale-down-to=512 512w,https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/chq92uBHLuzz8PqitB8PKKyIaI.png 1500w"
                                    },
                                    className: "framer-13y7x02",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 31",
                                    name: "Lqna 31"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png",
                                            srcSet: "https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png?scale-down-to=512 512w,https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png",
                                            srcSet: "https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png?scale-down-to=512 512w,https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png",
                                        srcSet: "https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png?scale-down-to=512 512w,https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/8T1HLmshtYLer6sChidXiThyZFs.png 1500w"
                                    },
                                    className: "framer-1ywy82n",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 30",
                                    name: "Lqna 30"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png",
                                            srcSet: "https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png?scale-down-to=512 512w,https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png",
                                            srcSet: "https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png?scale-down-to=512 512w,https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png",
                                        srcSet: "https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png?scale-down-to=512 512w,https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/IHGAoCnY5psTXJEutWt4quvXXo.png 1500w"
                                    },
                                    className: "framer-1xs0mmg",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 29",
                                    name: "Lqna 29"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png",
                                            srcSet: "https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png?scale-down-to=512 512w,https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png",
                                            srcSet: "https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png?scale-down-to=512 512w,https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png",
                                        srcSet: "https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png?scale-down-to=512 512w,https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/biBpzcyZaIXL3dRNJFIUpdpVc.png 1500w"
                                    },
                                    className: "framer-f2cji5",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 28",
                                    name: "Lqna 28"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png",
                                            srcSet: "https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png?scale-down-to=512 512w,https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png",
                                            srcSet: "https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png?scale-down-to=512 512w,https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png",
                                        srcSet: "https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png?scale-down-to=512 512w,https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9vdIB46WY2zYBun8Ql88LB9Z2g.png 1500w"
                                    },
                                    className: "framer-1lzz8al",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 27",
                                    name: "Lqna 27"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png",
                                            srcSet: "https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png?scale-down-to=512 512w,https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png",
                                            srcSet: "https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png?scale-down-to=512 512w,https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png",
                                        srcSet: "https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png?scale-down-to=512 512w,https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/rDhQGARqaSwpPj9kT50oNS4zb0A.png 1500w"
                                    },
                                    className: "framer-cpqqep",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 26",
                                    name: "Lqna 26"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png",
                                            srcSet: "https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png?scale-down-to=512 512w,https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png",
                                            srcSet: "https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png?scale-down-to=512 512w,https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png",
                                        srcSet: "https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png?scale-down-to=512 512w,https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/V9Gk5p4SZKQvflIswKHFetlyF8.png 1500w"
                                    },
                                    className: "framer-b3sb7l",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 24",
                                    name: "Lqna 24"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png",
                                            srcSet: "https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png?scale-down-to=512 512w,https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png",
                                            srcSet: "https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png?scale-down-to=512 512w,https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png",
                                        srcSet: "https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png?scale-down-to=512 512w,https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/dOQD9RnhB7PUzf2RyvHRejRfSk.png 1500w"
                                    },
                                    className: "framer-1svd3uk",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 22",
                                    name: "Lqna 22"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png",
                                            srcSet: "https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png?scale-down-to=512 512w,https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png",
                                            srcSet: "https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png?scale-down-to=512 512w,https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png",
                                        srcSet: "https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png?scale-down-to=512 512w,https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/rJEFYeJjYKF9NzMAkOmxpTgKCE.png 1500w"
                                    },
                                    className: "framer-78xdpc",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 21",
                                    name: "Lqna 21"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png",
                                            srcSet: "https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png?scale-down-to=512 512w,https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png",
                                            srcSet: "https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png?scale-down-to=512 512w,https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png",
                                        srcSet: "https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png?scale-down-to=512 512w,https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/2e0lZsmf21afpmdrBswKZbsVyFg.png 1500w"
                                    },
                                    className: "framer-aw0yk6",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 20",
                                    name: "Lqna 20"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png",
                                            srcSet: "https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png?scale-down-to=512 512w,https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png",
                                            srcSet: "https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png?scale-down-to=512 512w,https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png",
                                        srcSet: "https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png?scale-down-to=512 512w,https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/BwRb0al2A2UXoIdPoHk2nVX140.png 1500w"
                                    },
                                    className: "framer-rwp9l3",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 19",
                                    name: "Lqna 19"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png",
                                            srcSet: "https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png?scale-down-to=512 512w,https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png",
                                            srcSet: "https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png?scale-down-to=512 512w,https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png",
                                        srcSet: "https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png?scale-down-to=512 512w,https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/lEik5xH2QcCU56Arp807rcDY8U.png 1500w"
                                    },
                                    className: "framer-sh51bz",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 18",
                                    name: "Lqna 18"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png",
                                            srcSet: "https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png?scale-down-to=512 512w,https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png",
                                            srcSet: "https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png?scale-down-to=512 512w,https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png",
                                        srcSet: "https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png?scale-down-to=512 512w,https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/vsNemgPhIzGpeyB2nwA1MGkxI.png 1500w"
                                    },
                                    className: "framer-iens3j",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 17",
                                    name: "Lqna 17"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png",
                                            srcSet: "https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png?scale-down-to=512 512w,https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png",
                                            srcSet: "https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png?scale-down-to=512 512w,https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png",
                                        srcSet: "https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png?scale-down-to=512 512w,https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9J6NfUBoszlxn99SuYeQmjbW1U.png 1500w"
                                    },
                                    className: "framer-9vfp98",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 16",
                                    name: "Lqna 16"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png",
                                            srcSet: "https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png?scale-down-to=512 512w,https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png",
                                            srcSet: "https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png?scale-down-to=512 512w,https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png",
                                        srcSet: "https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png?scale-down-to=512 512w,https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/TPWUnFFMIDSqpkgVMfvbVPJIsc.png 1500w"
                                    },
                                    className: "framer-4bv81i",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 15",
                                    name: "Lqna 15"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png",
                                            srcSet: "https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png?scale-down-to=512 512w,https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png",
                                            srcSet: "https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png?scale-down-to=512 512w,https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png",
                                        srcSet: "https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png?scale-down-to=512 512w,https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/W2Bebixk9hXTXAztRnmyOiXYVCM.png 1500w"
                                    },
                                    className: "framer-1yaawkr",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 14",
                                    name: "Lqna 14"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png",
                                            srcSet: "https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png?scale-down-to=512 512w,https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png",
                                            srcSet: "https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png?scale-down-to=512 512w,https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png",
                                        srcSet: "https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png?scale-down-to=512 512w,https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ZL1eYKJ0PpfaovsCKfBwQjw3mrs.png 1500w"
                                    },
                                    className: "framer-1setfdk",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 13",
                                    name: "Lqna 13"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png",
                                            srcSet: "https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png?scale-down-to=512 512w,https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png",
                                            srcSet: "https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png?scale-down-to=512 512w,https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png",
                                        srcSet: "https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png?scale-down-to=512 512w,https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/1jv5LtDR1vR7cZIO041WH5PuBU.png 1500w"
                                    },
                                    className: "framer-s5mdrg",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 09",
                                    name: "Lqna 09"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png",
                                            srcSet: "https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png?scale-down-to=512 512w,https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png",
                                            srcSet: "https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png?scale-down-to=512 512w,https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png",
                                        srcSet: "https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png?scale-down-to=512 512w,https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ix44Ea3rd6iQNb8ICYShp1SbvXI.png 1500w"
                                    },
                                    className: "framer-dnn5pm",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 06",
                                    name: "Lqna 06"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png",
                                            srcSet: "https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png?scale-down-to=512 512w,https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png",
                                            srcSet: "https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png?scale-down-to=512 512w,https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png",
                                        srcSet: "https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png?scale-down-to=512 512w,https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/5iRup6ccVMshW89S7QhsgGspZc.png 1500w"
                                    },
                                    className: "framer-12zwanf",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 05",
                                    name: "Lqna 05"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png",
                                            srcSet: "https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png?scale-down-to=512 512w,https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png",
                                            srcSet: "https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png?scale-down-to=512 512w,https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png",
                                        srcSet: "https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png?scale-down-to=512 512w,https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/usmbWjzSQOa8V0U84xs7We9B8g.png 1500w"
                                    },
                                    className: "framer-3ok3c2",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 04",
                                    name: "Lqna 04"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png",
                                            srcSet: "https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png?scale-down-to=512 512w,https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png",
                                            srcSet: "https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png?scale-down-to=512 512w,https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png",
                                        srcSet: "https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png?scale-down-to=512 512w,https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/O9CdWxu2jWYocaIjJfI8RaWbCMg.png 1500w"
                                    },
                                    className: "framer-14tscbd",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 03",
                                    name: "Lqna 03"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png",
                                            srcSet: "https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png?scale-down-to=512 512w,https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png",
                                            srcSet: "https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png?scale-down-to=512 512w,https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png",
                                        srcSet: "https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png?scale-down-to=512 512w,https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/NBmF8ypdMUz1YNQ2PQtwoagonjI.png 1500w"
                                    },
                                    className: "framer-45zkbe",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 02",
                                    name: "Lqna 02"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png",
                                            srcSet: "https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png?scale-down-to=512 512w,https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png",
                                            srcSet: "https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png?scale-down-to=512 512w,https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png",
                                        srcSet: "https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png?scale-down-to=512 512w,https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fKBcAMhK496oE7fX7y5e1Jf3I.png 1500w"
                                    },
                                    className: "framer-6k9jnv",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 01",
                                    name: "Lqna 01"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png",
                                            srcSet: "https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png?scale-down-to=512 512w,https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png",
                                            srcSet: "https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png?scale-down-to=512 512w,https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png",
                                        srcSet: "https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png?scale-down-to=512 512w,https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/hquyB9BLYGVMI0H29H4I8qHaJ0k.png 1500w"
                                    },
                                    className: "framer-j0t45k",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 08",
                                    name: "Lqna 08"
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 56px, 1440px) - 16px) / 3, 50px)",
                                            src: "https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png",
                                            srcSet: "https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png?scale-down-to=512 512w,https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png 1500w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1500,
                                            intrinsicWidth: 1500,
                                            pixelHeight: 1500,
                                            pixelWidth: 1500,
                                            sizes: "max((min(100vw - 32px, 1440px) - 8px) / 2, 50px)",
                                            src: "https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png",
                                            srcSet: "https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png?scale-down-to=512 512w,https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png 1500w"
                                        }
                                    }
                                },
                                children: e(R, {
                                    __framer__animate: {transition: W},
                                    __framer__animateOnce: !1,
                                    __framer__enter: N,
                                    __framer__exit: F,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: "max((min(100vw - 80px, 1440px) - 24px) / 4, 50px)",
                                        src: "https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png",
                                        srcSet: "https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png?scale-down-to=512 512w,https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/HxCEbqw9i8ZOkl9fZC1vY9ISlGU.png 1500w"
                                    },
                                    className: "framer-rat02h",
                                    "data-border": !0,
                                    "data-framer-name": "Lqna 07",
                                    name: "Lqna 07"
                                })
                            })]
                        })]
                    }), e(le, {
                        children: e(_e, {
                            className: "framer-2lusbn-container", children: e(Ne, {
                                alignment: "center",
                                direction: "left",
                                fadeOptions: {fadeAlpha: 0, fadeContent: !0, fadeInset: 0, fadeWidth: 25, overflow: !1},
                                gap: 10,
                                height: "100%",
                                hoverFactor: 1,
                                id: "TfmX1Rji5",
                                layoutId: "TfmX1Rji5",
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                sizingOptions: {heightType: !0, widthType: !0},
                                slots: [S(T.div, {
                                    className: "framer-19o8mp9",
                                    children: [e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-yibb0b",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1c4362k",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1p3zl87",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-t1j2gt",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-o1etyc",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-vmtilf",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1f5czy2",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1ucxv5u",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })],
                                speed: 64,
                                style: {height: "100%", width: "100%"},
                                width: "100%"
                            })
                        })
                    }), S(Lr, {
                        animate: Tr,
                        className: "framer-8abub1",
                        "data-framer-appear-id": "8abub1",
                        initial: Ir,
                        optimized: !0,
                        children: [S("div", {
                            className: "framer-10wbps3", children: [e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1136,
                                            intrinsicWidth: 720,
                                            pixelHeight: 1136,
                                            pixelWidth: 720,
                                            sizes: "689.0704px",
                                            src: "https://framerusercontent.com/images/RiTJo0JN3WVghPFvRIUFQ4N3eA.gif",
                                            srcSet: "https://framerusercontent.com/images/RiTJo0JN3WVghPFvRIUFQ4N3eA.gif?scale-down-to=1024 649w,https://framerusercontent.com/images/RiTJo0JN3WVghPFvRIUFQ4N3eA.gif 720w"
                                        }
                                    },
                                    tbgdi9qHR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 1136,
                                            intrinsicWidth: 720,
                                            pixelHeight: 1136,
                                            pixelWidth: 720,
                                            sizes: "595.2676px",
                                            src: "https://framerusercontent.com/images/RiTJo0JN3WVghPFvRIUFQ4N3eA.gif",
                                            srcSet: "https://framerusercontent.com/images/RiTJo0JN3WVghPFvRIUFQ4N3eA.gif?scale-down-to=1024 649w,https://framerusercontent.com/images/RiTJo0JN3WVghPFvRIUFQ4N3eA.gif 720w"
                                        }
                                    }
                                },
                                children: e(te, {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 1136,
                                        intrinsicWidth: 720,
                                        pixelHeight: 1136,
                                        pixelWidth: 720,
                                        sizes: "449.2394px",
                                        src: "https://framerusercontent.com/images/RiTJo0JN3WVghPFvRIUFQ4N3eA.gif",
                                        srcSet: "https://framerusercontent.com/images/RiTJo0JN3WVghPFvRIUFQ4N3eA.gif?scale-down-to=1024 649w,https://framerusercontent.com/images/RiTJo0JN3WVghPFvRIUFQ4N3eA.gif 720w"
                                    },
                                    className: "framer-1nbzzoy",
                                    "data-framer-name": "Liquina_Posing",
                                    name: "Liquina_Posing"
                                })
                            }), e("div", {className: "framer-7fe0hd"})]
                        }), e(m, {
                            breakpoint: n,
                            overrides: {
                                BE_1LvUPA: {
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "Messages from the Community"
                                        })
                                    })
                                },
                                tbgdi9qHR: {
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "Messages from the Community"
                                        })
                                    })
                                }
                            },
                            children: e(f, {
                                __fromCanvasComponent: !0,
                                children: e(a, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                            "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "160%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        }, children: "Messages from the Community"
                                    })
                                }),
                                className: "framer-1g4qkoc",
                                fonts: ["GF;Orbitron-500"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), S("div", {
                            className: "framer-1kamh1v",
                            children: [e(m, {
                                breakpoint: n,
                                overrides: {
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/OUR_QUEEN_TO_STRICT"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/OUR_QUEEN_TO_STRICT"
                                        })
                                    }),
                                    className: "framer-8w9kc1",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LIQUINA_REBOUND_LIQUINA_REBOUND"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/LIQUINA_REBOUND_LIQUINA_REBOUND"
                                        })
                                    }),
                                    className: "framer-5wmmdq",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/lqna_bullish_robotic_panties"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/lqna_bullish_robotic_panties"
                                        })
                                    }),
                                    className: "framer-1cb4ldw",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LQNA_WIFE_OF_YEETI"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/LQNA_WIFE_OF_YEETI"
                                        })
                                    }),
                                    className: "framer-mrnpr4",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/Murad_Buy_And_PumP_LQNA"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/Murad_Buy_And_PumP_LQNA"
                                        })
                                    }),
                                    className: "framer-3tdwh0",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/liquina_boolb_all_in"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/liquina_boolb_all_in"
                                        })
                                    }),
                                    className: "framer-12ieuwg",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/send_it_my_waifu"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/send_it_my_waifu"
                                        })
                                    }),
                                    className: "framer-7hlzwf",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LQNA_TO_3DOLLAR_TODAY"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LQNA_TO_3DOLLAR_TODAY"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/LQNA_TO_3DOLLAR_TODAY"
                                        })
                                    }),
                                    className: "framer-yid2d0",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LQNA_TO_3DOLLAR"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LQNA_TO_3DOLLAR"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/LQNA_TO_3DOLLAR"
                                        })
                                    }),
                                    className: "framer-1hvttoc",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/its_ATH_next_10m"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/its_ATH_next_10m"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/its_ATH_next_10m"
                                        })
                                    }),
                                    className: "framer-jfeb9k",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/lqna_1b_lfg"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/lqna_1b_lfg"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/lqna_1b_lfg"
                                        })
                                    }),
                                    className: "framer-19i2krl",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/WHEN_LQNA_ATH"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/WHEN_LQNA_ATH"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/WHEN_LQNA_ATH"
                                        })
                                    }),
                                    className: "framer-h4f66q",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/QUEENMAKER_IS_COOKING"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/QUEENMAKER_IS_COOKING"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/QUEENMAKER_IS_COOKING"
                                        })
                                    }),
                                    className: "framer-cb4cc3",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/toe_show_wen"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/toe_show_wen"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/toe_show_wen"
                                        })
                                    }),
                                    className: "framer-zeb6h4",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/feet_roadmap"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/feet_roadmap"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/feet_roadmap"
                                        })
                                    }),
                                    className: "framer-1k2s0dk",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/liquina_say_bozo"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/liquina_say_bozo"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/liquina_say_bozo"
                                        })
                                    }),
                                    className: "framer-14aw84q",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/why_cropped"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/why_cropped"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/why_cropped"
                                        })
                                    }),
                                    className: "framer-7u6xt2",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/need_toe"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/need_toe"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/need_toe"
                                        })
                                    }),
                                    className: "framer-44899h",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/need_feet"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/need_feet"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/need_feet"
                                        })
                                    }),
                                    className: "framer-1oyhi9j",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LQNA_LFG"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LQNA_LFG"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/LQNA_LFG"
                                        })
                                    }),
                                    className: "framer-1emz4ry",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/pay_for_feet"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/pay_for_feet"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/pay_for_feet"
                                        })
                                    }),
                                    className: "framer-jy2gec",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/wen_ai"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/wen_ai"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/wen_ai"
                                        })
                                    }),
                                    className: "framer-p997jr",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LIQUINAS_BUSSY"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/LIQUINAS_BUSSY"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/LIQUINAS_BUSSY"
                                        })
                                    }),
                                    className: "framer-14jqv5y",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/Last_chance_LQNA_less_than_1usd"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/Last_chance_LQNA_less_than_1usd"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/Last_chance_LQNA_less_than_1usd"
                                        })
                                    }),
                                    className: "framer-1puhxzl",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/send_trump_in_the_white_house"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/send_trump_in_the_white_house"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/send_trump_in_the_white_house"
                                        })
                                    }),
                                    className: "framer-1ur89l6",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/Send_LQNA_TO_10M"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/Send_LQNA_TO_10M"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/Send_LQNA_TO_10M"
                                        })
                                    }),
                                    className: "framer-1b7fotj",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/vote_liquina_right_now"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/vote_liquina_right_now"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/vote_liquina_right_now"
                                        })
                                    }),
                                    className: "framer-1a6nour",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/WEN_BIKINI"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/WEN_BIKINI"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/WEN_BIKINI"
                                        })
                                    }),
                                    className: "framer-8o0v5y",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/skimpy_bikini_roadmap"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/skimpy_bikini_roadmap"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/skimpy_bikini_roadmap"
                                        })
                                    }),
                                    className: "framer-nwiii0",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/BUY_LQNA_BUY_PIP_BUY_CATBAL"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/BUY_LQNA_BUY_PIP_BUY_CATBAL"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/BUY_LQNA_BUY_PIP_BUY_CATBAL"
                                        })
                                    }),
                                    className: "framer-edyd8a",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/dev_wake_up"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/dev_wake_up"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/dev_wake_up"
                                        })
                                    }),
                                    className: "framer-1felzx1",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/fuck_pip_it_gone_dip_lqna_is_the_bitch"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/fuck_pip_it_gone_dip_lqna_is_the_bitch"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/fuck_pip_it_gone_dip_lqna_is_the_bitch"
                                        })
                                    }),
                                    className: "framer-1lcaeop",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/hot_2d_woman_gud_tech"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/hot_2d_woman_gud_tech"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/hot_2d_woman_gud_tech"
                                        })
                                    }),
                                    className: "framer-u47cg7",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/queenmakeeerrr"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/queenmakeeerrr"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/queenmakeeerrr"
                                        })
                                    }),
                                    className: "framer-1fnuy76",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/SELL_PIP_BUY_LQNA"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/SELL_PIP_BUY_LQNA"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/SELL_PIP_BUY_LQNA"
                                        })
                                    }),
                                    className: "framer-46b0k1",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/Catbal_is_behind_this_sell_while_you_can"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/Catbal_is_behind_this_sell_while_you_can"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/Catbal_is_behind_this_sell_while_you_can"
                                        })
                                    }),
                                    className: "framer-78a030",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/deeeeeeeeeeeev"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/deeeeeeeeeeeev"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/deeeeeeeeeeeev"
                                        })
                                    }),
                                    className: "framer-1fgkigr",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/BUY_PIP_BUY_LQNA"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "120%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "/BUY_PIP_BUY_LQNA"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "120%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "/BUY_PIP_BUY_LQNA"
                                        })
                                    }),
                                    className: "framer-iv9mo0",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        })]
                    }), e(le, {
                        children: e(_e, {
                            className: "framer-1ho5t6j-container", children: e(Ne, {
                                alignment: "center",
                                direction: "left",
                                fadeOptions: {fadeAlpha: 0, fadeContent: !0, fadeInset: 0, fadeWidth: 25, overflow: !1},
                                gap: 10,
                                height: "100%",
                                hoverFactor: 1,
                                id: "IUJrkdm2Q",
                                layoutId: "IUJrkdm2Q",
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                sizingOptions: {heightType: !0, widthType: !0},
                                slots: [S(T.div, {
                                    className: "framer-19o8mp9",
                                    children: [e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-yibb0b",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1c4362k",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1p3zl87",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-t1j2gt",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-o1etyc",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-vmtilf",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1f5czy2",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1ucxv5u",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })],
                                speed: 64,
                                style: {height: "100%", width: "100%"},
                                width: "100%"
                            })
                        })
                    }), S(Lr, {
                        animate: Tr,
                        className: "framer-1ua657i",
                        "data-framer-appear-id": "1ua657i",
                        initial: Ir,
                        optimized: !0,
                        children: [S("div", {
                            className: "framer-1rgivco", children: [e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                }, children: "Pictorials"
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                }, children: "Pictorials"
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "24px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "Pictorials"
                                        })
                                    }),
                                    className: "framer-1goz4rd",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(m, {
                                breakpoint: n,
                                overrides: {
                                    BE_1LvUPA: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "14px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: e(Re, {
                                                    href: "https://t.me/addstickers/LQNApictorial",
                                                    nodeId: "Pn4a9y9dN",
                                                    openInNewTab: !0,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-45tqv0",
                                                        "data-styles-preset": "a825grKtw",
                                                        children: "ADD STICKERS"
                                                    })
                                                })
                                            })
                                        })
                                    },
                                    tbgdi9qHR: {
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: e(Re, {
                                                    href: "https://t.me/addstickers/LQNApictorial",
                                                    nodeId: "Pn4a9y9dN",
                                                    openInNewTab: !0,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-45tqv0",
                                                        "data-styles-preset": "a825grKtw",
                                                        children: "ADD STICKERS"
                                                    })
                                                })
                                            })
                                        })
                                    }
                                },
                                children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: e(Re, {
                                                href: "https://t.me/addstickers/LQNApictorial",
                                                nodeId: "Pn4a9y9dN",
                                                openInNewTab: !0,
                                                smoothScroll: !1,
                                                children: e("a", {
                                                    className: "framer-styles-preset-45tqv0",
                                                    "data-styles-preset": "a825grKtw",
                                                    children: "ADD STICKERS"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-ci556k",
                                    fonts: ["GF;Orbitron-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        }), e(le, {
                            children: e(Dt, {
                                __framer__animate: {transition: ea},
                                __framer__animateOnce: !0,
                                __framer__enter: rt,
                                __framer__exit: dn,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-1n1wnys-container",
                                children: e(m, {
                                    breakpoint: n,
                                    overrides: {BE_1LvUPA: {borderRadius: 12}, tbgdi9qHR: {borderRadius: 8}},
                                    children: e(ee, {
                                        alignment: "center",
                                        arrowOptions: {
                                            arrowFill: "rgba(9, 39, 34, 0.4)",
                                            arrowGap: 10,
                                            arrowPadding: 16,
                                            arrowPaddingBottom: 0,
                                            arrowPaddingLeft: 0,
                                            arrowPaddingRight: 0,
                                            arrowPaddingTop: 0,
                                            arrowPosition: "auto",
                                            arrowRadius: 40,
                                            arrowShouldFadeIn: !1,
                                            arrowShouldSpace: !0,
                                            arrowSize: 40,
                                            showMouseControls: !0
                                        },
                                        autoPlayControl: !0,
                                        borderRadius: 16,
                                        direction: "right",
                                        dragControl: !0,
                                        effectsOptions: {
                                            effectsHover: !0,
                                            effectsOpacity: 1,
                                            effectsPerspective: 1200,
                                            effectsRotate: 0,
                                            effectsScale: 1
                                        },
                                        fadeOptions: {
                                            fadeAlpha: 0,
                                            fadeContent: !1,
                                            fadeInset: 0,
                                            fadeWidth: 25,
                                            overflow: !1
                                        },
                                        gap: 16,
                                        height: "100%",
                                        id: "YhZ1yW239",
                                        intervalControl: 4,
                                        itemAmount: 1,
                                        layoutId: "YhZ1yW239",
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        paddingPerSide: !1,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        progressOptions: {
                                            dotsActiveOpacity: 1,
                                            dotsBackground: "rgba(9, 39, 34, 0.4)",
                                            dotsBlur: 0,
                                            dotsFill: "rgb(255, 255, 255)",
                                            dotsGap: 10,
                                            dotsInset: 10,
                                            dotSize: 10,
                                            dotsOpacity: .5,
                                            dotsPadding: 10,
                                            dotsRadius: 50,
                                            showProgressDots: !0
                                        },
                                        slots: [e(te, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1500,
                                                intrinsicWidth: 1500,
                                                pixelHeight: 1500,
                                                pixelWidth: 1500,
                                                sizes: "1500px",
                                                src: "https://framerusercontent.com/images/R4sKrfJrq7kKI1IqFGZUZqciB2Y.png",
                                                srcSet: "https://framerusercontent.com/images/R4sKrfJrq7kKI1IqFGZUZqciB2Y.png?scale-down-to=512 512w,https://framerusercontent.com/images/R4sKrfJrq7kKI1IqFGZUZqciB2Y.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/R4sKrfJrq7kKI1IqFGZUZqciB2Y.png 1500w"
                                            },
                                            className: "framer-1q79r6j",
                                            "data-framer-name": "Pictorial 04",
                                            name: "Pictorial 04"
                                        }), e(te, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 2e3,
                                                intrinsicWidth: 2e3,
                                                pixelHeight: 2e3,
                                                pixelWidth: 2e3,
                                                sizes: "1500px",
                                                src: "https://framerusercontent.com/images/xIIZQ7USlgODwdSN8FxrAdQ9w.png",
                                                srcSet: "https://framerusercontent.com/images/xIIZQ7USlgODwdSN8FxrAdQ9w.png?scale-down-to=512 512w,https://framerusercontent.com/images/xIIZQ7USlgODwdSN8FxrAdQ9w.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/xIIZQ7USlgODwdSN8FxrAdQ9w.png 2000w"
                                            },
                                            className: "framer-1g0uwst",
                                            "data-framer-name": "Pictorial 03",
                                            name: "Pictorial 03"
                                        }), e(te, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1500,
                                                intrinsicWidth: 1500,
                                                pixelHeight: 1500,
                                                pixelWidth: 1500,
                                                sizes: "1500px",
                                                src: "https://framerusercontent.com/images/ItSRIn1miXUwNK3uAadd2LZPu4.png",
                                                srcSet: "https://framerusercontent.com/images/ItSRIn1miXUwNK3uAadd2LZPu4.png?scale-down-to=512 512w,https://framerusercontent.com/images/ItSRIn1miXUwNK3uAadd2LZPu4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ItSRIn1miXUwNK3uAadd2LZPu4.png 1500w"
                                            },
                                            className: "framer-n272j0",
                                            "data-framer-name": "Pictorial 02",
                                            name: "Pictorial 02"
                                        }), e(te, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1500,
                                                intrinsicWidth: 1500,
                                                pixelHeight: 1500,
                                                pixelWidth: 1500,
                                                sizes: "1500px",
                                                src: "https://framerusercontent.com/images/BWEaHaepfpfvhjyUTfuhViWC4Y.png",
                                                srcSet: "https://framerusercontent.com/images/BWEaHaepfpfvhjyUTfuhViWC4Y.png?scale-down-to=512 512w,https://framerusercontent.com/images/BWEaHaepfpfvhjyUTfuhViWC4Y.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/BWEaHaepfpfvhjyUTfuhViWC4Y.png 1500w"
                                            },
                                            className: "framer-1mxsdfg",
                                            "data-framer-name": "Pictorial 01",
                                            name: "Pictorial 01"
                                        })],
                                        startFrom: 0,
                                        style: {height: "100%", maxWidth: "100%", width: "100%"},
                                        transitionControl: {
                                            damping: 40,
                                            delay: 0,
                                            mass: 1,
                                            stiffness: 200,
                                            type: "spring"
                                        },
                                        width: "100%"
                                    })
                                })
                            })
                        })]
                    }), e(le, {
                        children: e(_e, {
                            className: "framer-12t0qq7-container", children: e(Ne, {
                                alignment: "center",
                                direction: "left",
                                fadeOptions: {fadeAlpha: 0, fadeContent: !0, fadeInset: 0, fadeWidth: 25, overflow: !1},
                                gap: 10,
                                height: "100%",
                                hoverFactor: 1,
                                id: "ZkRnxZKfi",
                                layoutId: "ZkRnxZKfi",
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                sizingOptions: {heightType: !0, widthType: !0},
                                slots: [S(T.div, {
                                    className: "framer-19o8mp9",
                                    children: [e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-yibb0b",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1c4362k",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1p3zl87",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-t1j2gt",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-o1etyc",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-vmtilf",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1f5czy2",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    }), e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(a, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                    "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                    "--framer-font-weight": "500",
                                                    "--framer-letter-spacing": "4px",
                                                    "--framer-line-height": "160%",
                                                    "--framer-text-color": "var(--token-42952042-5228-404e-9924-2ca52934dbb4, rgb(20, 241, 149))"
                                                }, children: "$LQNA"
                                            })
                                        }),
                                        className: "framer-1ucxv5u",
                                        fonts: ["GF;Orbitron-500"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })]
                                })],
                                speed: 64,
                                style: {height: "100%", width: "100%"},
                                width: "100%"
                            })
                        })
                    }), S(Lr, {
                        animate: Tr,
                        className: "framer-1vyi2l6",
                        "data-framer-appear-id": "1vyi2l6",
                        initial: Ir,
                        optimized: !0,
                        children: [e(m, {
                            breakpoint: n,
                            overrides: {
                                BE_1LvUPA: {
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "Toons"
                                        })
                                    })
                                },
                                tbgdi9qHR: {
                                    children: e(a, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "160%",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            }, children: "Toons"
                                        })
                                    })
                                }
                            },
                            children: e(f, {
                                __fromCanvasComponent: !0,
                                children: e(a, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7T3JiaXRyb24tNTAw",
                                            "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "160%",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        }, children: "Toons"
                                    })
                                }),
                                className: "framer-lobd7u",
                                fonts: ["GF;Orbitron-500"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e(le, {
                            children: e(Dt, {
                                __framer__animate: {transition: ea},
                                __framer__animateOnce: !0,
                                __framer__enter: rt,
                                __framer__exit: dn,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-17lcnj7-container",
                                children: e(m, {
                                    breakpoint: n,
                                    overrides: {BE_1LvUPA: {borderRadius: 12}, tbgdi9qHR: {borderRadius: 8}},
                                    children: e(ee, {
                                        alignment: "center",
                                        arrowOptions: {
                                            arrowFill: "rgba(9, 39, 34, 0.4)",
                                            arrowGap: 10,
                                            arrowPadding: 16,
                                            arrowPaddingBottom: 0,
                                            arrowPaddingLeft: 0,
                                            arrowPaddingRight: 0,
                                            arrowPaddingTop: 0,
                                            arrowPosition: "auto",
                                            arrowRadius: 40,
                                            arrowShouldFadeIn: !1,
                                            arrowShouldSpace: !0,
                                            arrowSize: 40,
                                            showMouseControls: !0
                                        },
                                        autoPlayControl: !0,
                                        borderRadius: 16,
                                        direction: "right",
                                        dragControl: !0,
                                        effectsOptions: {
                                            effectsHover: !0,
                                            effectsOpacity: 1,
                                            effectsPerspective: 1200,
                                            effectsRotate: 0,
                                            effectsScale: 1
                                        },
                                        fadeOptions: {
                                            fadeAlpha: 0,
                                            fadeContent: !1,
                                            fadeInset: 0,
                                            fadeWidth: 25,
                                            overflow: !1
                                        },
                                        gap: 16,
                                        height: "100%",
                                        id: "l3iiaoepv",
                                        intervalControl: 4,
                                        itemAmount: 1,
                                        layoutId: "l3iiaoepv",
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        paddingPerSide: !1,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        progressOptions: {
                                            dotsActiveOpacity: 1,
                                            dotsBackground: "rgba(9, 39, 34, 0.4)",
                                            dotsBlur: 0,
                                            dotsFill: "rgb(255, 255, 255)",
                                            dotsGap: 10,
                                            dotsInset: 10,
                                            dotSize: 10,
                                            dotsOpacity: .5,
                                            dotsPadding: 10,
                                            dotsRadius: 50,
                                            showProgressDots: !0
                                        },
                                        slots: [e(te, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 2065,
                                                intrinsicWidth: 1500,
                                                pixelHeight: 2065,
                                                pixelWidth: 1500,
                                                sizes: "1500px",
                                                src: "https://framerusercontent.com/images/CdVtWgQRqcOsJZ99pxxnPogDaCw.png",
                                                srcSet: "https://framerusercontent.com/images/CdVtWgQRqcOsJZ99pxxnPogDaCw.png?scale-down-to=1024 743w,https://framerusercontent.com/images/CdVtWgQRqcOsJZ99pxxnPogDaCw.png?scale-down-to=2048 1487w,https://framerusercontent.com/images/CdVtWgQRqcOsJZ99pxxnPogDaCw.png 1500w"
                                            },
                                            className: "framer-m9ono3",
                                            "data-framer-name": "Community toon 02_catbozio",
                                            name: "Community toon 02_catbozio"
                                        }), e(te, {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 2606,
                                                intrinsicWidth: 1893,
                                                pixelHeight: 2606,
                                                pixelWidth: 1893,
                                                sizes: "1500.0173px",
                                                src: "https://framerusercontent.com/images/8PEkoVxwD2ZipSVhuyJa6cwSLj8.png",
                                                srcSet: "https://framerusercontent.com/images/8PEkoVxwD2ZipSVhuyJa6cwSLj8.png?scale-down-to=1024 743w,https://framerusercontent.com/images/8PEkoVxwD2ZipSVhuyJa6cwSLj8.png?scale-down-to=2048 1487w,https://framerusercontent.com/images/8PEkoVxwD2ZipSVhuyJa6cwSLj8.png 1893w"
                                            },
                                            className: "framer-1x7mhmj",
                                            "data-framer-name": "Community Toon 01",
                                            name: "Community Toon 01"
                                        })],
                                        startFrom: 0,
                                        style: {height: "100%", maxWidth: "100%", width: "100%"},
                                        transitionControl: {
                                            damping: 40,
                                            delay: 0,
                                            mass: 1,
                                            stiffness: 200,
                                            type: "spring"
                                        },
                                        width: "100%"
                                    })
                                })
                            })
                        })]
                    }), e("div", {
                        className: "framer-z8qu71", children: e(m, {
                            breakpoint: n,
                            overrides: {
                                BE_1LvUPA: {
                                    children: e(a, {
                                        children: S("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "100%",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: ["\u24D2 QueenMaker & ", e("span", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                    "--framer-font-weight": "700",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "$LQNA Holder"
                                            }), " all rights reserved."]
                                        })
                                    })
                                },
                                tbgdi9qHR: {
                                    children: e(a, {
                                        children: S("p", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                                "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                                "--framer-font-size": "12px",
                                                "--framer-line-height": "100%",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: ["\u24D2 QueenMaker & ", e("span", {
                                                style: {
                                                    "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                    "--framer-font-weight": "700",
                                                    "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                                }, children: "$LQNA Holder"
                                            }), " all rights reserved."]
                                        })
                                    })
                                }
                            },
                            children: e(f, {
                                __fromCanvasComponent: !0,
                                children: e(a, {
                                    children: S("p", {
                                        style: {
                                            "--font-selector": "R0Y7T3JiaXRyb24tcmVndWxhcg==",
                                            "--framer-font-family": '"Orbitron", "Orbitron Placeholder", sans-serif',
                                            "--framer-line-height": "100%",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: ["\u24D2 QueenMaker & ", e("span", {
                                            style: {
                                                "--font-selector": "R0Y7T3JiaXRyb24tNzAw",
                                                "--framer-font-weight": "700",
                                                "--framer-text-color": "var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(20, 241, 149))"
                                            }, children: "$LQNA Holder"
                                        }), " all rights reserved."]
                                    })
                                }),
                                className: "framer-4b845s",
                                fonts: ["GF;Orbitron-regular", "GF;Orbitron-700"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })
                    })]
                }), e("div", {className: je(fn, ...M), id: "overlay"})]
            })
        })
    }),
    ws = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${Zt.bodyClassName}-framer-SiWn8 { background: rgb(9, 39, 34); }`, ".framer-SiWn8.framer-163rb, .framer-SiWn8 .framer-163rb { display: block; }", ".framer-SiWn8.framer-xfymdx { align-content: center; align-items: center; background-color: #092722; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 960px; }", ".framer-SiWn8 .framer-1pqmipk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 8px; position: relative; width: 100%; }", ".framer-SiWn8 .framer-1q844k3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-SiWn8 .framer-1x6lpdb-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); position: relative; width: 48px; }", ".framer-SiWn8 .framer-1lctmcd, .framer-SiWn8 .framer-1b7bkkl, .framer-SiWn8 .framer-4cvhge, .framer-SiWn8 .framer-1j5c1l0, .framer-SiWn8 .framer-1gnspp3, .framer-SiWn8 .framer-6hycsh, .framer-SiWn8 .framer-1iyt4qm, .framer-SiWn8 .framer-16stspt, .framer-SiWn8 .framer-d0oqx0, .framer-SiWn8 .framer-yibb0b, .framer-SiWn8 .framer-1c4362k, .framer-SiWn8 .framer-1p3zl87, .framer-SiWn8 .framer-t1j2gt, .framer-SiWn8 .framer-o1etyc, .framer-SiWn8 .framer-vmtilf, .framer-SiWn8 .framer-1f5czy2, .framer-SiWn8 .framer-1ucxv5u, .framer-SiWn8 .framer-4b845s { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-SiWn8 .framer-1g86c5c { align-content: center; align-items: center; background-color: #000908; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-SiWn8 .framer-1uo980v-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1114px); left: 50%; max-width: 1600px; position: absolute; top: 0px; transform: translateX(-50%); width: 120%; z-index: 1; }", ".framer-SiWn8 .framer-pe4600 { -webkit-backdrop-filter: blur(40px); aspect-ratio: 0.944 / 1; backdrop-filter: blur(40px); background-color: rgba(0, 9, 8, 0.64); flex: none; height: var(--framer-aspect-ratio-supported, 1180px); left: 50%; min-height: 800px; overflow: hidden; position: absolute; top: 0px; transform: translateX(-50%); width: 120%; z-index: 1; }", ".framer-SiWn8 .framer-1c3bapr-container { flex: none; height: 32px; left: calc(50.00000000000002% - 93.00847457627118% / 2); position: absolute; top: 40px; width: 93%; z-index: 1; }", ".framer-SiWn8 .framer-12yndkz, .framer-SiWn8 .framer-19o8mp9 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 26px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-SiWn8 .framer-1e6yavm-container { aspect-ratio: 1.06 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 800px); max-width: 1200px; min-width: 480px; position: relative; width: 100%; z-index: 1; }", ".framer-SiWn8 .framer-1kimt19 { flex: none; height: 160px; overflow: hidden; position: relative; width: 100%; z-index: 2; }", ".framer-SiWn8 .framer-x4w8uy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1080px; overflow: hidden; padding: 24px; position: relative; width: 100%; z-index: 2; }", ".framer-SiWn8 .framer-phz79i, .framer-SiWn8 .framer-3jmomq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }", ".framer-SiWn8 .framer-iuu62y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 960px; overflow: hidden; padding: 24px; position: relative; width: 100%; z-index: 2; }", ".framer-SiWn8 .framer-6z50ix, .framer-SiWn8 .framer-1n1ylf5, .framer-SiWn8 .framer-1goz4rd, .framer-SiWn8 .framer-lobd7u { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-SiWn8 .framer-xg4obx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 16px 0px; position: relative; width: 100%; z-index: 2; }", ".framer-SiWn8 .framer-4t3k3r, .framer-SiWn8 .framer-138qsgj, .framer-SiWn8 .framer-zcf0v0, .framer-SiWn8 .framer-1ptqgl8, .framer-SiWn8 .framer-1j0df96 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 64px); overflow: hidden; position: relative; text-decoration: none; width: 64px; }", ".framer-SiWn8 .framer-1n2tijk { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 94px); left: 50%; max-width: 1600px; overflow: visible; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 147%; z-index: 1; }", ".framer-SiWn8 .framer-1txjzfy-container, .framer-SiWn8 .framer-1cw92j6-container, .framer-SiWn8 .framer-11hqzhf { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }", ".framer-SiWn8 .framer-5sp023 { flex: none; height: 64px; left: 5px; position: absolute; top: 0px; width: 54px; }", ".framer-SiWn8 .framer-1jttqog { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 64px); overflow: visible; position: relative; text-decoration: none; width: 64px; }", ".framer-SiWn8 .framer-tb2k4l-container { flex: none; height: 24px; position: relative; width: 102%; z-index: 0; }", ".framer-SiWn8 .framer-1i8jm4o, .framer-SiWn8 .framer-1vyi2l6 { align-content: center; align-items: center; background-color: #000908; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-SiWn8 .framer-1wytscb-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }", ".framer-SiWn8 .framer-mcdw5a { -webkit-backdrop-filter: blur(80px); backdrop-filter: blur(80px); background-color: rgba(0, 9, 8, 0.48); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-SiWn8 .framer-1ubmcos-container { aspect-ratio: 0.7659574468085106 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 940px); max-width: 720px; position: relative; width: 100%; z-index: 1; }", ".framer-SiWn8 .framer-tx3gtk-container, .framer-SiWn8 .framer-2lusbn-container, .framer-SiWn8 .framer-1ho5t6j-container, .framer-SiWn8 .framer-12t0qq7-container { flex: none; height: 32px; position: relative; width: 102%; z-index: 0; }", ".framer-SiWn8 .framer-xa0cut, .framer-SiWn8 .framer-1ua657i { align-content: center; align-items: center; background-color: #000908; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-SiWn8 .framer-f2k3iu, .framer-SiWn8 .framer-1rgivco { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-SiWn8 .framer-oglld3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }", ".framer-SiWn8 .framer-wrfimq { aspect-ratio: 2 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 440px); max-width: 1440px; overflow: hidden; position: relative; width: 100%; }", ".framer-SiWn8 .framer-mgm2jp { aspect-ratio: 1.7429193899782136 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 767px); left: 50%; max-width: 1920px; overflow: visible; position: absolute; top: -40px; transform: translateX(-50%); width: 144%; z-index: 0; }", ".framer-SiWn8 .framer-1gm50xq, .framer-SiWn8 .framer-cb6iw8, .framer-SiWn8 .framer-xzhyth, .framer-SiWn8 .framer-1n5lwu9, .framer-SiWn8 .framer-bpktxu, .framer-SiWn8 .framer-22ka6l { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; }", ".framer-SiWn8 .framer-lcmyn1 { aspect-ratio: 4.916201117318436 / 1; background: linear-gradient(180deg, rgba(0, 9, 8, 0) 0%, rgb(0, 9, 8) 51.36542792792793%); bottom: 0px; flex: none; height: var(--framer-aspect-ratio-supported, 272px); left: 50%; overflow: hidden; position: absolute; transform: translateX(-50%); width: 100%; }", ".framer-SiWn8 .framer-n4uek8 { display: grid; flex: none; gap: 8px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-SiWn8 .framer-1d1h9dm { --border-bottom-width: 1px; --border-color: rgba(150, 252, 229, 0.4); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-self: start; aspect-ratio: 1 / 1; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: var(--framer-aspect-ratio-supported, 163px); justify-self: start; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-SiWn8 .framer-15v0nbs, .framer-SiWn8 .framer-1ofeloh, .framer-SiWn8 .framer-efo2f4, .framer-SiWn8 .framer-5k24a9, .framer-SiWn8 .framer-iyp0u7, .framer-SiWn8 .framer-13g5iiu, .framer-SiWn8 .framer-qv5zxs, .framer-SiWn8 .framer-8yenms, .framer-SiWn8 .framer-13y7x02, .framer-SiWn8 .framer-1ywy82n, .framer-SiWn8 .framer-1xs0mmg, .framer-SiWn8 .framer-f2cji5, .framer-SiWn8 .framer-1lzz8al, .framer-SiWn8 .framer-cpqqep, .framer-SiWn8 .framer-b3sb7l, .framer-SiWn8 .framer-1svd3uk, .framer-SiWn8 .framer-78xdpc, .framer-SiWn8 .framer-aw0yk6, .framer-SiWn8 .framer-rwp9l3, .framer-SiWn8 .framer-sh51bz, .framer-SiWn8 .framer-iens3j, .framer-SiWn8 .framer-9vfp98, .framer-SiWn8 .framer-4bv81i, .framer-SiWn8 .framer-1yaawkr, .framer-SiWn8 .framer-1setfdk, .framer-SiWn8 .framer-s5mdrg, .framer-SiWn8 .framer-dnn5pm, .framer-SiWn8 .framer-12zwanf, .framer-SiWn8 .framer-3ok3c2, .framer-SiWn8 .framer-14tscbd, .framer-SiWn8 .framer-45zkbe, .framer-SiWn8 .framer-6k9jnv, .framer-SiWn8 .framer-j0t45k, .framer-SiWn8 .framer-rat02h { --border-bottom-width: 1px; --border-color: rgba(150, 252, 229, 0.4); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-self: start; aspect-ratio: 1 / 1; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: var(--framer-aspect-ratio-supported, 214px); justify-self: start; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-SiWn8 .framer-8abub1 { align-content: center; align-items: center; background-color: #000908; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 16px 40px 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-SiWn8 .framer-10wbps3 { align-content: center; align-items: center; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: calc(50.00000000000002% - min(1440px, 100%) / 2); max-width: 1440px; overflow: hidden; padding: 40px; position: absolute; top: calc(54.11184210526317% - 100% / 2); width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-SiWn8 .framer-1nbzzoy { aspect-ratio: 0.6338028169014085 / 1; flex: none; height: 100%; max-width: 928px; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 352px); }", ".framer-SiWn8 .framer-7fe0hd { -webkit-backdrop-filter: blur(4px); backdrop-filter: blur(4px); background-color: rgba(1, 10, 10, 0.24); bottom: 0px; flex: none; left: -1px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }", ".framer-SiWn8 .framer-1g4qkoc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-SiWn8 .framer-1kamh1v { display: grid; flex: none; gap: 8px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1080px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }", ".framer-SiWn8 .framer-8w9kc1, .framer-SiWn8 .framer-5wmmdq, .framer-SiWn8 .framer-1cb4ldw, .framer-SiWn8 .framer-mrnpr4, .framer-SiWn8 .framer-3tdwh0, .framer-SiWn8 .framer-12ieuwg, .framer-SiWn8 .framer-7hlzwf, .framer-SiWn8 .framer-yid2d0, .framer-SiWn8 .framer-1hvttoc, .framer-SiWn8 .framer-jfeb9k, .framer-SiWn8 .framer-19i2krl, .framer-SiWn8 .framer-h4f66q, .framer-SiWn8 .framer-cb4cc3, .framer-SiWn8 .framer-zeb6h4, .framer-SiWn8 .framer-1k2s0dk, .framer-SiWn8 .framer-14aw84q, .framer-SiWn8 .framer-7u6xt2, .framer-SiWn8 .framer-44899h, .framer-SiWn8 .framer-1oyhi9j, .framer-SiWn8 .framer-1emz4ry, .framer-SiWn8 .framer-jy2gec, .framer-SiWn8 .framer-p997jr, .framer-SiWn8 .framer-14jqv5y, .framer-SiWn8 .framer-1puhxzl, .framer-SiWn8 .framer-1ur89l6, .framer-SiWn8 .framer-1b7fotj, .framer-SiWn8 .framer-1a6nour, .framer-SiWn8 .framer-8o0v5y, .framer-SiWn8 .framer-nwiii0, .framer-SiWn8 .framer-edyd8a, .framer-SiWn8 .framer-1felzx1, .framer-SiWn8 .framer-1lcaeop, .framer-SiWn8 .framer-u47cg7, .framer-SiWn8 .framer-1fnuy76, .framer-SiWn8 .framer-46b0k1, .framer-SiWn8 .framer-78a030, .framer-SiWn8 .framer-1fgkigr, .framer-SiWn8 .framer-iv9mo0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: start; flex: none; height: 100%; justify-self: start; position: relative; white-space: pre; width: fit-content; }", ".framer-SiWn8 .framer-ci556k { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-SiWn8 .framer-1n1wnys-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 880px); max-width: 1080px; position: relative; width: 100%; }", ".framer-SiWn8 .framer-1q79r6j, .framer-SiWn8 .framer-1g0uwst, .framer-SiWn8 .framer-n272j0, .framer-SiWn8 .framer-1mxsdfg { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 1500px); overflow: visible; position: relative; width: 1500px; }", ".framer-SiWn8 .framer-17lcnj7-container { aspect-ratio: 0.7263922518159807 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1211px); max-width: 1080px; position: relative; width: 100%; }", ".framer-SiWn8 .framer-m9ono3 { aspect-ratio: 0.7263922518159807 / 1; height: var(--framer-aspect-ratio-supported, 2065px); overflow: visible; position: relative; width: 1500px; }", ".framer-SiWn8 .framer-1x7mhmj { aspect-ratio: 0.7264006139677667 / 1; height: var(--framer-aspect-ratio-supported, 2065px); overflow: visible; position: relative; width: 1500px; }", ".framer-SiWn8 .framer-z8qu71 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: 100%; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-SiWn8.framer-xfymdx, .framer-SiWn8 .framer-1q844k3, .framer-SiWn8 .framer-1g86c5c, .framer-SiWn8 .framer-12yndkz, .framer-SiWn8 .framer-x4w8uy, .framer-SiWn8 .framer-iuu62y, .framer-SiWn8 .framer-xg4obx, .framer-SiWn8 .framer-19o8mp9, .framer-SiWn8 .framer-1i8jm4o, .framer-SiWn8 .framer-xa0cut, .framer-SiWn8 .framer-f2k3iu, .framer-SiWn8 .framer-8abub1, .framer-SiWn8 .framer-10wbps3, .framer-SiWn8 .framer-1ua657i, .framer-SiWn8 .framer-1rgivco, .framer-SiWn8 .framer-1vyi2l6, .framer-SiWn8 .framer-z8qu71 { gap: 0px; } .framer-SiWn8.framer-xfymdx > *, .framer-SiWn8 .framer-xa0cut > *, .framer-SiWn8 .framer-1ua657i > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-SiWn8.framer-xfymdx > :first-child, .framer-SiWn8 .framer-1g86c5c > :first-child, .framer-SiWn8 .framer-x4w8uy > :first-child, .framer-SiWn8 .framer-iuu62y > :first-child, .framer-SiWn8 .framer-1i8jm4o > :first-child, .framer-SiWn8 .framer-xa0cut > :first-child, .framer-SiWn8 .framer-f2k3iu > :first-child, .framer-SiWn8 .framer-8abub1 > :first-child, .framer-SiWn8 .framer-1ua657i > :first-child, .framer-SiWn8 .framer-1rgivco > :first-child, .framer-SiWn8 .framer-1vyi2l6 > :first-child { margin-top: 0px; } .framer-SiWn8.framer-xfymdx > :last-child, .framer-SiWn8 .framer-1g86c5c > :last-child, .framer-SiWn8 .framer-x4w8uy > :last-child, .framer-SiWn8 .framer-iuu62y > :last-child, .framer-SiWn8 .framer-1i8jm4o > :last-child, .framer-SiWn8 .framer-xa0cut > :last-child, .framer-SiWn8 .framer-f2k3iu > :last-child, .framer-SiWn8 .framer-8abub1 > :last-child, .framer-SiWn8 .framer-1ua657i > :last-child, .framer-SiWn8 .framer-1rgivco > :last-child, .framer-SiWn8 .framer-1vyi2l6 > :last-child { margin-bottom: 0px; } .framer-SiWn8 .framer-1q844k3 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-SiWn8 .framer-1q844k3 > :first-child, .framer-SiWn8 .framer-12yndkz > :first-child, .framer-SiWn8 .framer-xg4obx > :first-child, .framer-SiWn8 .framer-19o8mp9 > :first-child, .framer-SiWn8 .framer-10wbps3 > :first-child, .framer-SiWn8 .framer-z8qu71 > :first-child { margin-left: 0px; } .framer-SiWn8 .framer-1q844k3 > :last-child, .framer-SiWn8 .framer-12yndkz > :last-child, .framer-SiWn8 .framer-xg4obx > :last-child, .framer-SiWn8 .framer-19o8mp9 > :last-child, .framer-SiWn8 .framer-10wbps3 > :last-child, .framer-SiWn8 .framer-z8qu71 > :last-child { margin-right: 0px; } .framer-SiWn8 .framer-1g86c5c > *, .framer-SiWn8 .framer-x4w8uy > *, .framer-SiWn8 .framer-iuu62y > *, .framer-SiWn8 .framer-1i8jm4o > *, .framer-SiWn8 .framer-8abub1 > *, .framer-SiWn8 .framer-1vyi2l6 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-SiWn8 .framer-12yndkz > *, .framer-SiWn8 .framer-19o8mp9 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-SiWn8 .framer-xg4obx > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-SiWn8 .framer-f2k3iu > *, .framer-SiWn8 .framer-1rgivco > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-SiWn8 .framer-10wbps3 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-SiWn8 .framer-z8qu71 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }", `@media (min-width: 560px) and (max-width: 959px) { .${Zt.bodyClassName}-framer-SiWn8 { background: rgb(9, 39, 34); } .framer-SiWn8.framer-xfymdx { gap: 12px; padding: 12px; width: 560px; } .framer-SiWn8 .framer-1q844k3 { gap: 10px; } .framer-SiWn8 .framer-1x6lpdb-container { height: var(--framer-aspect-ratio-supported, 40px); width: 40px; } .framer-SiWn8 .framer-1g86c5c { padding: 24px; } .framer-SiWn8 .framer-1uo980v-container { height: var(--framer-aspect-ratio-supported, 643px); } .framer-SiWn8 .framer-pe4600 { height: var(--framer-aspect-ratio-supported, 800px); } .framer-SiWn8 .framer-1c3bapr-container { top: 32px; } .framer-SiWn8 .framer-1e6yavm-container { height: var(--framer-aspect-ratio-supported, 460px); } .framer-SiWn8 .framer-1kimt19 { height: 240px; } .framer-SiWn8 .framer-xg4obx { gap: 20px; } .framer-SiWn8 .framer-4t3k3r, .framer-SiWn8 .framer-138qsgj, .framer-SiWn8 .framer-zcf0v0, .framer-SiWn8 .framer-1ptqgl8, .framer-SiWn8 .framer-1j0df96, .framer-SiWn8 .framer-1jttqog { height: var(--framer-aspect-ratio-supported, 48px); width: 48px; } .framer-SiWn8 .framer-1n2tijk { height: var(--framer-aspect-ratio-supported, 71px); } .framer-SiWn8 .framer-1txjzfy-container, .framer-SiWn8 .framer-1cw92j6-container { bottom: -2px; top: -2px; } .framer-SiWn8 .framer-5sp023 { height: 48px; left: calc(50.00000000000002% - 41px / 2); top: calc(50.00000000000002% - 48px / 2); width: 41px; } .framer-SiWn8 .framer-1i8jm4o, .framer-SiWn8 .framer-1vyi2l6 { gap: 16px; padding: 16px; } .framer-SiWn8 .framer-1ubmcos-container { height: var(--framer-aspect-ratio-supported, 658px); } .framer-SiWn8 .framer-xa0cut, .framer-SiWn8 .framer-1ua657i { padding: 16px; } .framer-SiWn8 .framer-f2k3iu, .framer-SiWn8 .framer-1rgivco { gap: 6px; } .framer-SiWn8 .framer-wrfimq { height: var(--framer-aspect-ratio-supported, 252px); } .framer-SiWn8 .framer-mgm2jp { height: var(--framer-aspect-ratio-supported, 480px); top: -24px; width: 156%; } .framer-SiWn8 .framer-lcmyn1 { height: var(--framer-aspect-ratio-supported, 170px); } .framer-SiWn8 .framer-n4uek8 { grid-template-columns: repeat(3, minmax(50px, 1fr)); } .framer-SiWn8 .framer-1d1h9dm, .framer-SiWn8 .framer-15v0nbs, .framer-SiWn8 .framer-1ofeloh, .framer-SiWn8 .framer-13y7x02, .framer-SiWn8 .framer-1ywy82n, .framer-SiWn8 .framer-1xs0mmg, .framer-SiWn8 .framer-aw0yk6, .framer-SiWn8 .framer-rwp9l3, .framer-SiWn8 .framer-sh51bz, .framer-SiWn8 .framer-dnn5pm, .framer-SiWn8 .framer-12zwanf, .framer-SiWn8 .framer-3ok3c2 { height: var(--framer-aspect-ratio-supported, 162px); } .framer-SiWn8 .framer-efo2f4, .framer-SiWn8 .framer-5k24a9, .framer-SiWn8 .framer-iyp0u7, .framer-SiWn8 .framer-13g5iiu, .framer-SiWn8 .framer-qv5zxs, .framer-SiWn8 .framer-8yenms, .framer-SiWn8 .framer-f2cji5, .framer-SiWn8 .framer-1lzz8al, .framer-SiWn8 .framer-cpqqep, .framer-SiWn8 .framer-b3sb7l, .framer-SiWn8 .framer-1svd3uk, .framer-SiWn8 .framer-78xdpc, .framer-SiWn8 .framer-iens3j, .framer-SiWn8 .framer-9vfp98, .framer-SiWn8 .framer-4bv81i, .framer-SiWn8 .framer-1yaawkr, .framer-SiWn8 .framer-1setfdk, .framer-SiWn8 .framer-s5mdrg, .framer-SiWn8 .framer-14tscbd, .framer-SiWn8 .framer-45zkbe, .framer-SiWn8 .framer-6k9jnv, .framer-SiWn8 .framer-j0t45k, .framer-SiWn8 .framer-rat02h { height: var(--framer-aspect-ratio-supported, 163px); } .framer-SiWn8 .framer-8abub1 { gap: 16px; padding: 16px 16px 24px 16px; } .framer-SiWn8 .framer-1nbzzoy { width: var(--framer-aspect-ratio-supported, 608px); } .framer-SiWn8 .framer-1kamh1v { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; } .framer-SiWn8 .framer-8w9kc1, .framer-SiWn8 .framer-5wmmdq, .framer-SiWn8 .framer-1cb4ldw, .framer-SiWn8 .framer-mrnpr4, .framer-SiWn8 .framer-3tdwh0, .framer-SiWn8 .framer-12ieuwg, .framer-SiWn8 .framer-7hlzwf, .framer-SiWn8 .framer-yid2d0, .framer-SiWn8 .framer-1hvttoc, .framer-SiWn8 .framer-jfeb9k, .framer-SiWn8 .framer-19i2krl, .framer-SiWn8 .framer-h4f66q, .framer-SiWn8 .framer-cb4cc3, .framer-SiWn8 .framer-zeb6h4, .framer-SiWn8 .framer-1k2s0dk, .framer-SiWn8 .framer-14aw84q, .framer-SiWn8 .framer-7u6xt2, .framer-SiWn8 .framer-44899h, .framer-SiWn8 .framer-1oyhi9j, .framer-SiWn8 .framer-1emz4ry, .framer-SiWn8 .framer-jy2gec, .framer-SiWn8 .framer-p997jr, .framer-SiWn8 .framer-14jqv5y, .framer-SiWn8 .framer-1puhxzl, .framer-SiWn8 .framer-1ur89l6, .framer-SiWn8 .framer-1b7fotj, .framer-SiWn8 .framer-1a6nour, .framer-SiWn8 .framer-8o0v5y, .framer-SiWn8 .framer-nwiii0, .framer-SiWn8 .framer-edyd8a, .framer-SiWn8 .framer-1felzx1, .framer-SiWn8 .framer-1lcaeop, .framer-SiWn8 .framer-u47cg7, .framer-SiWn8 .framer-1fnuy76, .framer-SiWn8 .framer-46b0k1, .framer-SiWn8 .framer-78a030, .framer-SiWn8 .framer-1fgkigr, .framer-SiWn8 .framer-iv9mo0 { align-self: unset; height: auto; width: auto; } .framer-SiWn8 .framer-1n1wnys-container { height: var(--framer-aspect-ratio-supported, 504px); } .framer-SiWn8 .framer-17lcnj7-container { height: var(--framer-aspect-ratio-supported, 694px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-SiWn8.framer-xfymdx, .framer-SiWn8 .framer-1q844k3, .framer-SiWn8 .framer-xg4obx, .framer-SiWn8 .framer-1i8jm4o, .framer-SiWn8 .framer-f2k3iu, .framer-SiWn8 .framer-8abub1, .framer-SiWn8 .framer-1kamh1v, .framer-SiWn8 .framer-1rgivco, .framer-SiWn8 .framer-1vyi2l6 { gap: 0px; } .framer-SiWn8.framer-xfymdx > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-SiWn8.framer-xfymdx > :first-child, .framer-SiWn8 .framer-1i8jm4o > :first-child, .framer-SiWn8 .framer-f2k3iu > :first-child, .framer-SiWn8 .framer-8abub1 > :first-child, .framer-SiWn8 .framer-1kamh1v > :first-child, .framer-SiWn8 .framer-1rgivco > :first-child, .framer-SiWn8 .framer-1vyi2l6 > :first-child { margin-top: 0px; } .framer-SiWn8.framer-xfymdx > :last-child, .framer-SiWn8 .framer-1i8jm4o > :last-child, .framer-SiWn8 .framer-f2k3iu > :last-child, .framer-SiWn8 .framer-8abub1 > :last-child, .framer-SiWn8 .framer-1kamh1v > :last-child, .framer-SiWn8 .framer-1rgivco > :last-child, .framer-SiWn8 .framer-1vyi2l6 > :last-child { margin-bottom: 0px; } .framer-SiWn8 .framer-1q844k3 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-SiWn8 .framer-1q844k3 > :first-child, .framer-SiWn8 .framer-xg4obx > :first-child { margin-left: 0px; } .framer-SiWn8 .framer-1q844k3 > :last-child, .framer-SiWn8 .framer-xg4obx > :last-child { margin-right: 0px; } .framer-SiWn8 .framer-xg4obx > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-SiWn8 .framer-1i8jm4o > *, .framer-SiWn8 .framer-8abub1 > *, .framer-SiWn8 .framer-1vyi2l6 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-SiWn8 .framer-f2k3iu > *, .framer-SiWn8 .framer-1rgivco > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-SiWn8 .framer-1kamh1v > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }}`, `@media (max-width: 559px) { .${Zt.bodyClassName}-framer-SiWn8 { background: rgb(9, 39, 34); } .framer-SiWn8.framer-xfymdx { gap: 8px; padding: 8px; width: 390px; } .framer-SiWn8 .framer-1q844k3 { gap: 8px; } .framer-SiWn8 .framer-1x6lpdb-container { height: var(--framer-aspect-ratio-supported, 32px); width: 32px; } .framer-SiWn8 .framer-1g86c5c { padding: 16px; } .framer-SiWn8 .framer-1uo980v-container { height: var(--framer-aspect-ratio-supported, 449px); } .framer-SiWn8 .framer-pe4600 { height: var(--framer-aspect-ratio-supported, 800px); } .framer-SiWn8 .framer-1c3bapr-container { top: 24px; } .framer-SiWn8 .framer-1e6yavm-container { height: var(--framer-aspect-ratio-supported, 453px); } .framer-SiWn8 .framer-1kimt19 { height: 240px; } .framer-SiWn8 .framer-x4w8uy, .framer-SiWn8 .framer-iuu62y { padding: 8px; } .framer-SiWn8 .framer-phz79i, .framer-SiWn8 .framer-3jmomq, .framer-SiWn8 .framer-1g4qkoc, .framer-SiWn8 .framer-lobd7u { order: 0; } .framer-SiWn8 .framer-xg4obx { gap: 16px; } .framer-SiWn8 .framer-4t3k3r, .framer-SiWn8 .framer-138qsgj, .framer-SiWn8 .framer-zcf0v0, .framer-SiWn8 .framer-1ptqgl8, .framer-SiWn8 .framer-1j0df96, .framer-SiWn8 .framer-1jttqog { height: var(--framer-aspect-ratio-supported, 36px); width: 36px; } .framer-SiWn8 .framer-1n2tijk { height: var(--framer-aspect-ratio-supported, 53px); } .framer-SiWn8 .framer-5sp023 { height: 36px; left: calc(50.00000000000002% - 30px / 2); top: calc(50.00000000000002% - 36px / 2); width: 30px; } .framer-SiWn8 .framer-1i8jm4o, .framer-SiWn8 .framer-xa0cut, .framer-SiWn8 .framer-1ua657i, .framer-SiWn8 .framer-1vyi2l6 { gap: 8px; padding: 12px 8px 8px 8px; } .framer-SiWn8 .framer-1wytscb-container, .framer-SiWn8 .framer-10wbps3 { order: 1; } .framer-SiWn8 .framer-mcdw5a { order: 2; } .framer-SiWn8 .framer-1ubmcos-container { height: var(--framer-aspect-ratio-supported, 467px); order: 3; z-index: unset; } .framer-SiWn8 .framer-f2k3iu, .framer-SiWn8 .framer-1rgivco { gap: 4px; order: 0; } .framer-SiWn8 .framer-wrfimq { height: var(--framer-aspect-ratio-supported, 179px); order: 1; } .framer-SiWn8 .framer-mgm2jp { height: var(--framer-aspect-ratio-supported, 360px); order: 2; top: -16px; width: 168%; } .framer-SiWn8 .framer-lcmyn1 { height: var(--framer-aspect-ratio-supported, 128px); } .framer-SiWn8 .framer-n4uek8 { grid-template-columns: repeat(2, minmax(50px, 1fr)); order: 3; } .framer-SiWn8 .framer-1d1h9dm, .framer-SiWn8 .framer-15v0nbs, .framer-SiWn8 .framer-1ofeloh, .framer-SiWn8 .framer-efo2f4, .framer-SiWn8 .framer-5k24a9, .framer-SiWn8 .framer-iyp0u7, .framer-SiWn8 .framer-13g5iiu, .framer-SiWn8 .framer-qv5zxs, .framer-SiWn8 .framer-8yenms, .framer-SiWn8 .framer-13y7x02, .framer-SiWn8 .framer-1ywy82n, .framer-SiWn8 .framer-1xs0mmg, .framer-SiWn8 .framer-f2cji5, .framer-SiWn8 .framer-1lzz8al, .framer-SiWn8 .framer-cpqqep, .framer-SiWn8 .framer-b3sb7l, .framer-SiWn8 .framer-1svd3uk, .framer-SiWn8 .framer-78xdpc, .framer-SiWn8 .framer-aw0yk6, .framer-SiWn8 .framer-rwp9l3, .framer-SiWn8 .framer-sh51bz, .framer-SiWn8 .framer-iens3j, .framer-SiWn8 .framer-9vfp98, .framer-SiWn8 .framer-4bv81i, .framer-SiWn8 .framer-1yaawkr, .framer-SiWn8 .framer-1setfdk, .framer-SiWn8 .framer-s5mdrg, .framer-SiWn8 .framer-dnn5pm, .framer-SiWn8 .framer-12zwanf, .framer-SiWn8 .framer-3ok3c2, .framer-SiWn8 .framer-14tscbd, .framer-SiWn8 .framer-45zkbe, .framer-SiWn8 .framer-6k9jnv, .framer-SiWn8 .framer-j0t45k, .framer-SiWn8 .framer-rat02h { height: var(--framer-aspect-ratio-supported, 175px); } .framer-SiWn8 .framer-8abub1 { gap: 12px; padding: 12px 8px 24px 8px; } .framer-SiWn8 .framer-1nbzzoy { width: var(--framer-aspect-ratio-supported, 530px); } .framer-SiWn8 .framer-1kamh1v { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; order: 2; } .framer-SiWn8 .framer-8w9kc1, .framer-SiWn8 .framer-5wmmdq, .framer-SiWn8 .framer-1cb4ldw, .framer-SiWn8 .framer-mrnpr4, .framer-SiWn8 .framer-3tdwh0, .framer-SiWn8 .framer-12ieuwg, .framer-SiWn8 .framer-7hlzwf, .framer-SiWn8 .framer-yid2d0, .framer-SiWn8 .framer-1hvttoc, .framer-SiWn8 .framer-jfeb9k, .framer-SiWn8 .framer-19i2krl, .framer-SiWn8 .framer-h4f66q, .framer-SiWn8 .framer-cb4cc3, .framer-SiWn8 .framer-zeb6h4, .framer-SiWn8 .framer-1k2s0dk, .framer-SiWn8 .framer-14aw84q, .framer-SiWn8 .framer-7u6xt2, .framer-SiWn8 .framer-44899h, .framer-SiWn8 .framer-1oyhi9j, .framer-SiWn8 .framer-1emz4ry, .framer-SiWn8 .framer-jy2gec, .framer-SiWn8 .framer-p997jr, .framer-SiWn8 .framer-14jqv5y, .framer-SiWn8 .framer-1puhxzl, .framer-SiWn8 .framer-1ur89l6, .framer-SiWn8 .framer-1b7fotj, .framer-SiWn8 .framer-1a6nour, .framer-SiWn8 .framer-8o0v5y, .framer-SiWn8 .framer-nwiii0, .framer-SiWn8 .framer-edyd8a, .framer-SiWn8 .framer-1felzx1, .framer-SiWn8 .framer-1lcaeop, .framer-SiWn8 .framer-u47cg7, .framer-SiWn8 .framer-1fnuy76, .framer-SiWn8 .framer-46b0k1, .framer-SiWn8 .framer-78a030, .framer-SiWn8 .framer-1fgkigr, .framer-SiWn8 .framer-iv9mo0 { align-self: unset; height: auto; width: auto; } .framer-SiWn8 .framer-1n1wnys-container { height: var(--framer-aspect-ratio-supported, 358px); order: 1; } .framer-SiWn8 .framer-17lcnj7-container { height: var(--framer-aspect-ratio-supported, 493px); order: 1; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-SiWn8.framer-xfymdx, .framer-SiWn8 .framer-1q844k3, .framer-SiWn8 .framer-xg4obx, .framer-SiWn8 .framer-1i8jm4o, .framer-SiWn8 .framer-xa0cut, .framer-SiWn8 .framer-f2k3iu, .framer-SiWn8 .framer-8abub1, .framer-SiWn8 .framer-1kamh1v, .framer-SiWn8 .framer-1ua657i, .framer-SiWn8 .framer-1rgivco, .framer-SiWn8 .framer-1vyi2l6 { gap: 0px; } .framer-SiWn8.framer-xfymdx > *, .framer-SiWn8 .framer-1i8jm4o > *, .framer-SiWn8 .framer-xa0cut > *, .framer-SiWn8 .framer-1kamh1v > *, .framer-SiWn8 .framer-1ua657i > *, .framer-SiWn8 .framer-1vyi2l6 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-SiWn8.framer-xfymdx > :first-child, .framer-SiWn8 .framer-1i8jm4o > :first-child, .framer-SiWn8 .framer-xa0cut > :first-child, .framer-SiWn8 .framer-f2k3iu > :first-child, .framer-SiWn8 .framer-8abub1 > :first-child, .framer-SiWn8 .framer-1kamh1v > :first-child, .framer-SiWn8 .framer-1ua657i > :first-child, .framer-SiWn8 .framer-1rgivco > :first-child, .framer-SiWn8 .framer-1vyi2l6 > :first-child { margin-top: 0px; } .framer-SiWn8.framer-xfymdx > :last-child, .framer-SiWn8 .framer-1i8jm4o > :last-child, .framer-SiWn8 .framer-xa0cut > :last-child, .framer-SiWn8 .framer-f2k3iu > :last-child, .framer-SiWn8 .framer-8abub1 > :last-child, .framer-SiWn8 .framer-1kamh1v > :last-child, .framer-SiWn8 .framer-1ua657i > :last-child, .framer-SiWn8 .framer-1rgivco > :last-child, .framer-SiWn8 .framer-1vyi2l6 > :last-child { margin-bottom: 0px; } .framer-SiWn8 .framer-1q844k3 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-SiWn8 .framer-1q844k3 > :first-child, .framer-SiWn8 .framer-xg4obx > :first-child { margin-left: 0px; } .framer-SiWn8 .framer-1q844k3 > :last-child, .framer-SiWn8 .framer-xg4obx > :last-child { margin-right: 0px; } .framer-SiWn8 .framer-xg4obx > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-SiWn8 .framer-f2k3iu > *, .framer-SiWn8 .framer-1rgivco > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-SiWn8 .framer-8abub1 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }}`, ...ln, '.framer-SiWn8[data-border="true"]::after, .framer-SiWn8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],
    at = $e(bs, ws, "framer-SiWn8"), _0 = at;
at.displayName = "Home";
at.defaultProps = {height: 8729, width: 960};
er(at, [{
    explicitInter: !0,
    fonts: [{
        family: "Orbitron",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/orbitron/v31/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyGy6xo2IyXjU1pg.woff2",
        weight: "400"
    }, {
        family: "Orbitron",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/orbitron/v31/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1ny_Cmxo2IyXjU1pg.woff2",
        weight: "700"
    }, {
        family: "Orbitron",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/orbitron/v31/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyKS6xo2IyXjU1pg.woff2",
        weight: "500"
    }, {
        family: "Montserrat",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/G3U4AIP7I5YYMBY4PZ5BNYEWWVH7G7QB/WED2HATCWTE6B4XVIFFTI3EALCE4D6PD/GDZ4LVIJF6WODYKVZK6E2737DCDQPEMZ.woff2",
        weight: "500"
    }, {
        family: "Montserrat",
        source: "fontshare",
        style: "italic",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/CC6FT7O535LIU5P34T6V2W7R57LGKSDT/KUZZS4REMM64PV6S4GGM77HZQUVJPYU2/3ZPIFBJ6EZFOZSYT4ISIO7DHQQODA5IR.woff2",
        weight: "400"
    }]
}, ...Xo, ...qo, ...jo, ...Uo, ...Yo, ...Jo, ...Qo, ...ka(sn)], {supportsExplicitInterCodegen: !0});
var v0 = {
    exports: {
        default: {
            type: "reactComponent",
            name: "FramerA32Iiwo2G",
            slots: [],
            annotations: {
                framerIntrinsicWidth: "960",
                framerContractVersion: "1",
                framerIntrinsicHeight: "8729",
                framerDisplayContentsDiv: "false",
                framerImmutableVariables: "true",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"BE_1LvUPA":{"layout":["fixed","auto"]},"tbgdi9qHR":{"layout":["fixed","auto"]}}}',
                framerComponentViewportWidth: "true",
                framerResponsiveScreen: ""
            }
        }, Props: {type: "tsType", annotations: {framerContractVersion: "1"}}, __FramerMetadata__: {type: "variable"}
    }
};
export {v0 as __FramerMetadata__, _0 as default};
//# sourceMappingURL=94z2fEsd7JLwaUjXC5-coCvKxC5Fr9z7VMNrkMXF6kY.A2BS2BVP.mjs.map

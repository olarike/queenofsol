import {
    Fa as S,
    J as g,
    K as m,
    L as u,
    M as b,
    N as y,
    O as _,
    P as v,
    R as k,
    T as F,
    V as E,
    e as c,
    ga as I,
    i as h,
    ja as P,
    ta as w
} from "./chunk-5DNJE7XR.mjs";
import "./chunk-JR5VT52U.mjs";
import {c as t} from "./chunk-RIUMFBNJ.mjs";

var T = "default" in m ? g : m, d = {}, V = T;
d.createRoot = V.createRoot;
d.hydrateRoot = V.hydrateRoot;
var x = d.createRoot, D = d.hydrateRoot;
var f = {
    A32Iiwo2G: {
        elements: {},
        page: u(() => import("./94z2fEsd7JLwaUjXC5-coCvKxC5Fr9z7VMNrkMXF6kY.A2BS2BVP.mjs")),
        path: "/"
    }
}, H = [{code: "en", id: "default", name: "English", slug: ""}];

async function W({routeId: a, pathVariables: o, localeId: r}) {
    await f[a].page.preload();
    let n = c(P, {
        isWebsite: !0,
        routeId: a,
        pathVariables: o,
        routes: f,
        collectionUtils: {},
        framerSiteId: "1012d00f1caffb54aa0b337b033a66d26df195926e61b2e309af161da565bb41",
        notFoundPage: u(() => import("./SitesNotFoundPage.js@1.1-3ADSY2YQ.mjs")),
        isReducedMotion: void 0,
        localeId: r,
        locales: H,
        preserveQueryParams: void 0
    }), s = c(I, {
        children: n,
        value: {
            enableAsyncURLUpdates: !0,
            replaceNestedLinks: !0,
            useGranularSuspense: !0,
            wrapUpdatesInTransitions: !1
        }
    });
    return c(b, {children: s, value: {routes: {}}})
}

var N = typeof document < "u";
if (N) {
    t.__framer_importFromPackage = (o, r) => () => c(F, {error: 'Package component not supported: "' + r + '" in "' + o + '"'}), t.process = {
        ...t.process,
        env: {...t.process ? t.process.env : void 0, NODE_ENV: "production"}
    }, t.__framer_events = t.__framer_events || [], E();
    let a = document.getElementById("main");
    "framerHydrateV2" in a.dataset ? O(!0, a) : O(!1, a)
}

function M() {
    N && t.__framer_events.push(arguments)
}

async function O(a, o) {
    try {
        let R = function (e, U) {
            let l = U?.componentStack;
            console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.", e, l), !(Math.random() > .01) && M("published_site_load_recoverable_error", {
                message: String(e),
                componentStack: l,
                stack: l ? void 0 : e instanceof Error && typeof e.stack == "string" ? e.stack : null
            })
        }, r, n, s, i;
        if (a) {
            let e = JSON.parse(o.dataset.framerHydrateV2);
            r = e.routeId, n = e.localeId, s = e.pathVariables, i = e.breakpoints
        } else {
            let e = k(f, decodeURIComponent(location.pathname), !0, H);
            r = e.routeId, n = e.localeId, s = e.pathVariables
        }
        let p = await W({routeId: r, localeId: n, pathVariables: s});
        a ? (S("framer-rewrite-breakpoints", () => {
            w(i), t.__framer_onRewriteBreakpoints?.(i)
        }), h(() => {
            y(), v(), _(), D(o, p, {onRecoverableError: R})
        })) : x(o, {onRecoverableError: R}).render(p)
    } catch (r) {
        throw M("published_site_load_error", {
            message: String(r),
            stack: r instanceof Error && typeof r.stack == "string" ? r.stack : null
        }), r
    }
}

export {W as getPageRoot};
//# sourceMappingURL=script_main.PRWOREB2.mjs.map

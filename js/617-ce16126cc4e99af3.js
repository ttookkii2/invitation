(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [617], {
        5664: function(t) {
            t.exports = {
                style: {
                    fontFamily: "'__Gowun_Batang_04eb5b', '__Gowun_Batang_Fallback_04eb5b'",
                    fontStyle: "normal"
                },
                className: "__className_04eb5b"
            }
        },
        796: function(t, e, i) {
            "use strict";
            let r;
            i.d(e, {
                E: function() {
                    return nU
                }
            });
            var n, s, o = i(7294);
            let a = (0, o.createContext)({
                    transformPagePoint: t => t,
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                l = (0, o.createContext)({}),
                u = (0, o.createContext)(null),
                h = "undefined" != typeof document,
                c = h ? o.useLayoutEffect : o.useEffect,
                d = (0, o.createContext)({
                    strict: !1
                });

            function p(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function m(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function f(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let g = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                v = ["initial", ...g];

            function y(t) {
                return f(t.animate) || v.some(e => m(t[e]))
            }

            function x(t) {
                return !!(y(t) || t.variants)
            }

            function P(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let b = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                w = {};
            for (let t in b) w[t] = {
                isEnabled: e => b[t].some(t => !!e[t])
            };
            let T = (0, o.createContext)({}),
                A = (0, o.createContext)({}),
                S = Symbol.for("motionComponentSymbol"),
                V = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function E(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (V.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let C = {},
                M = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                D = new Set(M);

            function k(t, {
                layout: e,
                layoutId: i
            }) {
                return D.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!C[t] || "opacity" === t)
            }
            let R = t => !!(t && t.getVelocity),
                L = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                j = M.length,
                F = t => e => "string" == typeof e && e.startsWith(t),
                B = F("--"),
                O = F("var(--"),
                I = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                U = (t, e, i) => Math.min(Math.max(i, t), e),
                N = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                $ = {
                    ...N,
                    transform: t => U(0, 1, t)
                },
                W = {
                    ...N,
                    default: 1
                },
                H = t => Math.round(1e5 * t) / 1e5,
                z = /(-)?([\d]*\.?[\d])+/g,
                Y = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                G = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function X(t) {
                return "string" == typeof t
            }
            let _ = t => ({
                    test: e => X(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                q = _("deg"),
                Z = _("%"),
                K = _("px"),
                J = _("vh"),
                Q = _("vw"),
                tt = {
                    ...Z,
                    parse: t => Z.parse(t) / 100,
                    transform: t => Z.transform(100 * t)
                },
                te = {
                    ...N,
                    transform: Math.round
                },
                ti = {
                    borderWidth: K,
                    borderTopWidth: K,
                    borderRightWidth: K,
                    borderBottomWidth: K,
                    borderLeftWidth: K,
                    borderRadius: K,
                    radius: K,
                    borderTopLeftRadius: K,
                    borderTopRightRadius: K,
                    borderBottomRightRadius: K,
                    borderBottomLeftRadius: K,
                    width: K,
                    maxWidth: K,
                    height: K,
                    maxHeight: K,
                    size: K,
                    top: K,
                    right: K,
                    bottom: K,
                    left: K,
                    padding: K,
                    paddingTop: K,
                    paddingRight: K,
                    paddingBottom: K,
                    paddingLeft: K,
                    margin: K,
                    marginTop: K,
                    marginRight: K,
                    marginBottom: K,
                    marginLeft: K,
                    rotate: q,
                    rotateX: q,
                    rotateY: q,
                    rotateZ: q,
                    scale: W,
                    scaleX: W,
                    scaleY: W,
                    scaleZ: W,
                    skew: q,
                    skewX: q,
                    skewY: q,
                    distance: K,
                    translateX: K,
                    translateY: K,
                    translateZ: K,
                    x: K,
                    y: K,
                    z: K,
                    perspective: K,
                    transformPerspective: K,
                    opacity: $,
                    originX: tt,
                    originY: tt,
                    originZ: K,
                    zIndex: te,
                    fillOpacity: $,
                    strokeOpacity: $,
                    numOctaves: te
                };

            function tr(t, e, i, r) {
                let {
                    style: n,
                    vars: s,
                    transform: o,
                    transformOrigin: a
                } = t, l = !1, u = !1, h = !0;
                for (let t in e) {
                    let i = e[t];
                    if (B(t)) {
                        s[t] = i;
                        continue
                    }
                    let r = ti[t],
                        c = I(i, r);
                    if (D.has(t)) {
                        if (l = !0, o[t] = c, !h) continue;
                        i !== (r.default || 0) && (h = !1)
                    } else t.startsWith("origin") ? (u = !0, a[t] = c) : n[t] = c
                }
                if (!e.transform && (l || r ? n.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: i = !0
                    }, r, n) {
                        let s = "";
                        for (let e = 0; e < j; e++) {
                            let i = M[e];
                            if (void 0 !== t[i]) {
                                let e = L[i] || i;
                                s += `${e}(${t[i]}) `
                            }
                        }
                        return e && !t.z && (s += "translateZ(0)"), s = s.trim(), n ? s = n(t, r ? "" : s) : i && r && (s = "none"), s
                    }(t.transform, i, h, r) : n.transform && (n.transform = "none")), u) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = a;
                    n.transformOrigin = `${t} ${e} ${i}`
                }
            }
            let tn = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function ts(t, e, i) {
                for (let r in e) R(e[r]) || k(r, i) || (t[r] = e[r])
            }

            function to(t, e, i) {
                let r = {},
                    n = function(t, e, i) {
                        let r = t.style || {},
                            n = {};
                        return ts(n, r, t), Object.assign(n, function({
                            transformTemplate: t
                        }, e, i) {
                            return (0, o.useMemo)(() => {
                                let r = tn();
                                return tr(r, e, {
                                    enableHardwareAcceleration: !i
                                }, t), Object.assign({}, r.vars, r.style)
                            }, [e])
                        }(t, e, i)), t.transformValues ? t.transformValues(n) : n
                    }(t, e, i);
                return t.drag && !1 !== t.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = n, r
            }
            let ta = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function tl(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || ta.has(t)
            }
            let tu = t => !tl(t);
            try {
                (n = require("@emotion/is-prop-valid").default) && (tu = t => t.startsWith("on") ? !tl(t) : n(t))
            } catch (t) {}

            function th(t, e, i) {
                return "string" == typeof t ? t : K.transform(e + i * t)
            }
            let tc = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                td = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tp(t, {
                attrX: e,
                attrY: i,
                attrScale: r,
                originX: n,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (tr(t, u, h, d), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: p,
                    style: m,
                    dimensions: f
                } = t;
                p.transform && (f && (m.transform = p.transform), delete p.transform), f && (void 0 !== n || void 0 !== s || m.transform) && (m.transformOrigin = function(t, e, i) {
                    let r = th(e, t.x, t.width),
                        n = th(i, t.y, t.height);
                    return `${r} ${n}`
                }(f, void 0 !== n ? n : .5, void 0 !== s ? s : .5)), void 0 !== e && (p.x = e), void 0 !== i && (p.y = i), void 0 !== r && (p.scale = r), void 0 !== o && function(t, e, i = 1, r = 0, n = !0) {
                    t.pathLength = 1;
                    let s = n ? tc : td;
                    t[s.offset] = K.transform(-r);
                    let o = K.transform(e),
                        a = K.transform(i);
                    t[s.array] = `${o} ${a}`
                }(p, o, a, l, !1)
            }
            let tm = () => ({
                    ...tn(),
                    attrs: {}
                }),
                tf = t => "string" == typeof t && "svg" === t.toLowerCase();

            function tg(t, e, i, r) {
                let n = (0, o.useMemo)(() => {
                    let i = tm();
                    return tp(i, e, {
                        enableHardwareAcceleration: !1
                    }, tf(r), t.transformTemplate), {
                        ...i.attrs,
                        style: {
                            ...i.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let e = {};
                    ts(e, t.style, t), n.style = {
                        ...e,
                        ...n.style
                    }
                }
                return n
            }
            let tv = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function ty(t, {
                style: e,
                vars: i
            }, r, n) {
                for (let s in Object.assign(t.style, e, n && n.getProjectionStyles(r)), i) t.style.setProperty(s, i[s])
            }
            let tx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tP(t, e, i, r) {
                for (let i in ty(t, e, void 0, r), e.attrs) t.setAttribute(tx.has(i) ? i : tv(i), e.attrs[i])
            }

            function tb(t, e) {
                let {
                    style: i
                } = t, r = {};
                for (let n in i)(R(i[n]) || e.style && R(e.style[n]) || k(n, t)) && (r[n] = i[n]);
                return r
            }

            function tw(t, e) {
                let i = tb(t, e);
                for (let r in t)
                    if (R(t[r]) || R(e[r])) {
                        let e = -1 !== M.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
                        i[e] = t[r]
                    } return i
            }

            function tT(t, e, i, r = {}, n = {}) {
                return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)), e
            }
            let tA = t => Array.isArray(t),
                tS = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                tV = t => tA(t) ? t[t.length - 1] || 0 : t;

            function tE(t) {
                let e = R(t) ? t.get() : t;
                return tS(e) ? e.toValue() : e
            }
            let tC = t => (e, i) => {
                    let r = (0, o.useContext)(l),
                        n = (0, o.useContext)(u),
                        s = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: i
                        }, r, n, s) {
                            let o = {
                                latestValues: function(t, e, i, r) {
                                    let n = {},
                                        s = r(t, {});
                                    for (let t in s) n[t] = tE(s[t]);
                                    let {
                                        initial: o,
                                        animate: a
                                    } = t, l = y(t), u = x(t);
                                    e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                                    let h = !!i && !1 === i.initial;
                                    h = h || !1 === o;
                                    let c = h ? a : o;
                                    if (c && "boolean" != typeof c && !f(c)) {
                                        let e = Array.isArray(c) ? c : [c];
                                        e.forEach(e => {
                                            let i = tT(t, e);
                                            if (!i) return;
                                            let {
                                                transitionEnd: r,
                                                transition: s,
                                                ...o
                                            } = i;
                                            for (let t in o) {
                                                let e = o[t];
                                                if (Array.isArray(e)) {
                                                    let t = h ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (n[t] = e)
                                            }
                                            for (let t in r) n[t] = r[t]
                                        })
                                    }
                                    return n
                                }(r, n, s, t),
                                renderState: e()
                            };
                            return i && (o.mount = t => i(r, t, o)), o
                        })(t, e, r, n);
                    return i ? s() : function(t) {
                        let e = (0, o.useRef)(null);
                        return null === e.current && (e.current = t()), e.current
                    }(s)
                },
                tM = t => t;
            class tD {
                constructor() {
                    this.order = [], this.scheduled = new Set
                }
                add(t) {
                    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
                }
                remove(t) {
                    let e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
                }
                clear() {
                    this.order.length = 0, this.scheduled.clear()
                }
            }
            let tk = ["prepare", "read", "update", "preRender", "render", "postRender"],
                {
                    schedule: tR,
                    cancel: tL,
                    state: tj,
                    steps: tF
                } = function(t, e) {
                    let i = !1,
                        r = !0,
                        n = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        },
                        s = tk.reduce((t, e) => (t[e] = function(t) {
                            let e = new tD,
                                i = new tD,
                                r = 0,
                                n = !1,
                                s = !1,
                                o = new WeakSet,
                                a = {
                                    schedule: (t, s = !1, a = !1) => {
                                        let l = a && n,
                                            u = l ? e : i;
                                        return s && o.add(t), u.add(t) && l && n && (r = e.order.length), t
                                    },
                                    cancel: t => {
                                        i.remove(t), o.delete(t)
                                    },
                                    process: l => {
                                        if (n) {
                                            s = !0;
                                            return
                                        }
                                        if (n = !0, [e, i] = [i, e], i.clear(), r = e.order.length)
                                            for (let i = 0; i < r; i++) {
                                                let r = e.order[i];
                                                r(l), o.has(r) && (a.schedule(r), t())
                                            }
                                        n = !1, s && (s = !1, a.process(l))
                                    }
                                };
                            return a
                        }(() => i = !0), t), {}),
                        o = t => s[t].process(n),
                        a = () => {
                            let s = performance.now();
                            i = !1, n.delta = r ? 1e3 / 60 : Math.max(Math.min(s - n.timestamp, 40), 1), n.timestamp = s, n.isProcessing = !0, tk.forEach(o), n.isProcessing = !1, i && e && (r = !1, t(a))
                        },
                        l = () => {
                            i = !0, r = !0, n.isProcessing || t(a)
                        },
                        u = tk.reduce((t, e) => {
                            let r = s[e];
                            return t[e] = (t, e = !1, n = !1) => (i || l(), r.schedule(t, e, n)), t
                        }, {});
                    return {
                        schedule: u,
                        cancel: t => tk.forEach(e => s[e].cancel(t)),
                        state: n,
                        steps: s
                    }
                }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : tM, !0),
                tB = {
                    useVisualState: tC({
                        scrapeMotionValuesFromProps: tw,
                        createRenderState: tm,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: r
                        }) => {
                            tR.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), tR.render(() => {
                                tp(i, r, {
                                    enableHardwareAcceleration: !1
                                }, tf(e.tagName), t.transformTemplate), tP(e, i)
                            })
                        }
                    })
                },
                tO = {
                    useVisualState: tC({
                        scrapeMotionValuesFromProps: tb,
                        createRenderState: tn
                    })
                };

            function tI(t, e, i, r = {
                passive: !0
            }) {
                return t.addEventListener(e, i, r), () => t.removeEventListener(e, i)
            }
            let tU = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function tN(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let t$ = t => e => tU(e) && t(e, tN(e));

            function tW(t, e, i, r) {
                return tI(t, e, t$(i), r)
            }
            let tH = (t, e) => i => e(t(i)),
                tz = (...t) => t.reduce(tH);

            function tY(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let tG = tY("dragHorizontal"),
                tX = tY("dragVertical");

            function t_(t) {
                let e = !1;
                if ("y" === t) e = tX();
                else if ("x" === t) e = tG();
                else {
                    let t = tG(),
                        i = tX();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function tq() {
                let t = t_(!0);
                return !t || (t(), !1)
            }
            class tZ {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }

            function tK(t, e) {
                let i = "pointer" + (e ? "enter" : "leave"),
                    r = "onHover" + (e ? "Start" : "End");
                return tW(t.current, i, (i, n) => {
                    if ("touch" === i.type || tq()) return;
                    let s = t.getProps();
                    t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[r] && tR.update(() => s[r](i, n))
                }, {
                    passive: !t.getProps()[r]
                })
            }
            let tJ = (t, e) => !!e && (t === e || tJ(t, e.parentElement));

            function tQ(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, tN(i))
            }
            let t0 = new WeakMap,
                t1 = new WeakMap,
                t5 = t => {
                    let e = t0.get(t.target);
                    e && e(t)
                },
                t2 = t => {
                    t.forEach(t5)
                },
                t3 = {
                    some: 0,
                    all: 1
                };

            function t9(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let r = 0; r < i; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }

            function t4(t, e, i) {
                let r = t.getProps();
                return tT(r, e, void 0 !== i ? i : r.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.getVelocity()), e
                }(t))
            }
            let t6 = "data-" + tv("framerAppearId"),
                t7 = t => 1e3 * t,
                t8 = t => t / 1e3,
                et = {
                    current: !1
                },
                ee = t => Array.isArray(t) && "number" == typeof t[0],
                ei = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
                er = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: ei([0, .65, .55, 1]),
                    circOut: ei([.55, 0, 1, .45]),
                    backIn: ei([.31, .01, .66, -.59]),
                    backOut: ei([.33, 1.53, .69, .99])
                },
                en = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function es(t, e, i, r) {
                if (t === e && i === r) return tM;
                let n = e => (function(t, e, i, r, n) {
                    let s, o;
                    let a = 0;
                    do(s = en(o = e + (i - e) / 2, r, n) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : en(n(t), e, r)
            }
            let eo = es(.42, 0, 1, 1),
                ea = es(0, 0, .58, 1),
                el = es(.42, 0, .58, 1),
                eu = t => Array.isArray(t) && "number" != typeof t[0],
                eh = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                ec = t => e => 1 - t(1 - e),
                ed = t => 1 - Math.sin(Math.acos(t)),
                ep = ec(ed),
                em = eh(ep),
                ef = es(.33, 1.53, .69, .99),
                eg = ec(ef),
                ev = eh(eg),
                ey = {
                    linear: tM,
                    easeIn: eo,
                    easeInOut: el,
                    easeOut: ea,
                    circIn: ed,
                    circInOut: em,
                    circOut: ep,
                    backIn: eg,
                    backInOut: ev,
                    backOut: ef,
                    anticipate: t => (t *= 2) < 1 ? .5 * eg(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                ex = t => {
                    if (Array.isArray(t)) {
                        tM(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, r, n] = t;
                        return es(e, i, r, n)
                    }
                    return "string" == typeof t ? (tM(void 0 !== ey[t], `Invalid easing type '${t}'`), ey[t]) : t
                },
                eP = (t, e) => i => !!(X(i) && G.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
                eb = (t, e, i) => r => {
                    if (!X(r)) return r;
                    let [n, s, o, a] = r.match(z);
                    return {
                        [t]: parseFloat(n),
                        [e]: parseFloat(s),
                        [i]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                ew = t => U(0, 255, t),
                eT = {
                    ...N,
                    transform: t => Math.round(ew(t))
                },
                eA = {
                    test: eP("rgb", "red"),
                    parse: eb("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: r = 1
                    }) => "rgba(" + eT.transform(t) + ", " + eT.transform(e) + ", " + eT.transform(i) + ", " + H($.transform(r)) + ")"
                },
                eS = {
                    test: eP("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            r = "",
                            n = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), r = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), r = t.substring(3, 4), n = t.substring(4, 5), e += e, i += i, r += r, n += n), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(r, 16),
                            alpha: n ? parseInt(n, 16) / 255 : 1
                        }
                    },
                    transform: eA.transform
                },
                eV = {
                    test: eP("hsl", "hue"),
                    parse: eb("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: i,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(t) + ", " + Z.transform(H(e)) + ", " + Z.transform(H(i)) + ", " + H($.transform(r)) + ")"
                },
                eE = {
                    test: t => eA.test(t) || eS.test(t) || eV.test(t),
                    parse: t => eA.test(t) ? eA.parse(t) : eV.test(t) ? eV.parse(t) : eS.parse(t),
                    transform: t => X(t) ? t : t.hasOwnProperty("red") ? eA.transform(t) : eV.transform(t)
                },
                eC = (t, e, i) => -i * t + i * e + t;

            function eM(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            let eD = (t, e, i) => {
                    let r = t * t;
                    return Math.sqrt(Math.max(0, i * (e * e - r) + r))
                },
                ek = [eS, eA, eV],
                eR = t => ek.find(e => e.test(t));

            function eL(t) {
                let e = eR(t);
                tM(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let i = e.parse(t);
                return e === eV && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: r
                }) {
                    t /= 360, i /= 100;
                    let n = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let r = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - r;
                        n = eM(a, r, t + 1 / 3), s = eM(a, r, t), o = eM(a, r, t - 1 / 3)
                    } else n = s = o = i;
                    return {
                        red: Math.round(255 * n),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: r
                    }
                }(i)), i
            }
            let ej = (t, e) => {
                    let i = eL(t),
                        r = eL(e),
                        n = {
                            ...i
                        };
                    return t => (n.red = eD(i.red, r.red, t), n.green = eD(i.green, r.green, t), n.blue = eD(i.blue, r.blue, t), n.alpha = eC(i.alpha, r.alpha, t), eA.transform(n))
                },
                eF = {
                    regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
                    countKey: "Vars",
                    token: "${v}",
                    parse: tM
                },
                eB = {
                    regex: Y,
                    countKey: "Colors",
                    token: "${c}",
                    parse: eE.parse
                },
                eO = {
                    regex: z,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: N.parse
                };

            function eI(t, {
                regex: e,
                countKey: i,
                token: r,
                parse: n
            }) {
                let s = t.tokenised.match(e);
                s && (t["num" + i] = s.length, t.tokenised = t.tokenised.replace(e, r), t.values.push(...s.map(n)))
            }

            function eU(t) {
                let e = t.toString(),
                    i = {
                        value: e,
                        tokenised: e,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return i.value.includes("var(--") && eI(i, eF), eI(i, eB), eI(i, eO), i
            }

            function eN(t) {
                return eU(t).values
            }

            function e$(t) {
                let {
                    values: e,
                    numColors: i,
                    numVars: r,
                    tokenised: n
                } = eU(t), s = e.length;
                return t => {
                    let e = n;
                    for (let n = 0; n < s; n++) e = n < r ? e.replace(eF.token, t[n]) : n < r + i ? e.replace(eB.token, eE.transform(t[n])) : e.replace(eO.token, H(t[n]));
                    return e
                }
            }
            let eW = t => "number" == typeof t ? 0 : t,
                eH = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && X(t) && ((null === (e = t.match(z)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(Y)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: eN,
                    createTransformer: e$,
                    getAnimatableNone: function(t) {
                        let e = eN(t),
                            i = e$(t);
                        return i(e.map(eW))
                    }
                },
                ez = (t, e) => i => `${i>0?e:t}`;

            function eY(t, e) {
                return "number" == typeof t ? i => eC(t, e, i) : eE.test(t) ? ej(t, e) : t.startsWith("var(") ? ez(t, e) : e_(t, e)
            }
            let eG = (t, e) => {
                    let i = [...t],
                        r = i.length,
                        n = t.map((t, i) => eY(t, e[i]));
                    return t => {
                        for (let e = 0; e < r; e++) i[e] = n[e](t);
                        return i
                    }
                },
                eX = (t, e) => {
                    let i = {
                            ...t,
                            ...e
                        },
                        r = {};
                    for (let n in i) void 0 !== t[n] && void 0 !== e[n] && (r[n] = eY(t[n], e[n]));
                    return t => {
                        for (let e in r) i[e] = r[e](t);
                        return i
                    }
                },
                e_ = (t, e) => {
                    let i = eH.createTransformer(e),
                        r = eU(t),
                        n = eU(e),
                        s = r.numVars === n.numVars && r.numColors === n.numColors && r.numNumbers >= n.numNumbers;
                    return s ? tz(eG(r.values, n.values), i) : (tM(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), ez(t, e))
                },
                eq = (t, e, i) => {
                    let r = e - t;
                    return 0 === r ? 1 : (i - t) / r
                },
                eZ = (t, e) => i => eC(t, e, i);

            function eK(t, e, {
                clamp: i = !0,
                ease: r,
                mixer: n
            } = {}) {
                let s = t.length;
                if (tM(s === e.length, "Both input and output ranges must be the same length"), 1 === s) return () => e[0];
                t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let o = function(t, e, i) {
                        let r = [],
                            n = i || function(t) {
                                if ("number" == typeof t);
                                else if ("string" == typeof t) return eE.test(t) ? ej : e_;
                                else if (Array.isArray(t)) return eG;
                                else if ("object" == typeof t) return eX;
                                return eZ
                            }(t[0]),
                            s = t.length - 1;
                        for (let i = 0; i < s; i++) {
                            let s = n(t[i], t[i + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[i] || tM : e;
                                s = tz(t, s)
                            }
                            r.push(s)
                        }
                        return r
                    }(e, r, n),
                    a = o.length,
                    l = e => {
                        let i = 0;
                        if (a > 1)
                            for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                        let r = eq(t[i], t[i + 1], e);
                        return o[i](r)
                    };
                return i ? e => l(U(t[0], t[s - 1], e)) : l
            }

            function eJ({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: r = "easeInOut"
            }) {
                let n = eu(r) ? r.map(ex) : ex(r),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = (i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let r = 1; r <= e; r++) {
                                let n = eq(0, e, r);
                                t.push(eC(i, 1, n))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t),
                    a = eK(o, e, {
                        ease: Array.isArray(n) ? n : e.map(() => n || el).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = a(e), s.done = e >= t, s)
                }
            }

            function eQ(t, e, i) {
                var r, n;
                let s = Math.max(e - 5, 0);
                return r = i - t(s), (n = e - s) ? r * (1e3 / n) : 0
            }

            function e0(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let e1 = ["duration", "bounce"],
                e5 = ["stiffness", "damping", "mass"];

            function e2(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function e3({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...r
            }) {
                let n;
                let s = t[0],
                    o = t[t.length - 1],
                    a = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: h,
                        velocity: c,
                        duration: d,
                        isResolvedFromDuration: p
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!e2(t, e5) && e2(t, e1)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: r = 1
                            }) {
                                let n, s;
                                tM(t <= t7(10), "Spring duration must be 10 seconds or less");
                                let o = 1 - e;
                                o = U(.05, 1, o), t = U(.01, 10, t8(t)), o < 1 ? (n = e => {
                                    let r = e * o,
                                        n = r * t,
                                        s = e0(e, o);
                                    return .001 - (r - i) / s * Math.exp(-n)
                                }, s = e => {
                                    let r = e * o,
                                        s = r * t,
                                        a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                        l = e0(Math.pow(e, 2), o),
                                        u = -n(e) + .001 > 0 ? -1 : 1;
                                    return u * ((s * i + i - a) * Math.exp(-s)) / l
                                }) : (n = e => {
                                    let r = Math.exp(-e * t),
                                        n = (e - i) * t + 1;
                                    return -.001 + r * n
                                }, s = e => {
                                    let r = Math.exp(-e * t),
                                        n = (i - e) * (t * t);
                                    return r * n
                                });
                                let a = 5 / t,
                                    l = function(t, e, i) {
                                        let r = i;
                                        for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                                        return r
                                    }(n, s, a);
                                if (t = t7(t), isNaN(l)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                };
                                {
                                    let e = Math.pow(l, 2) * r;
                                    return {
                                        stiffness: e,
                                        damping: 2 * o * Math.sqrt(r * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = {
                                ...e,
                                ...i,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }(r),
                    m = c ? -t8(c) : 0,
                    f = u / (2 * Math.sqrt(l * h)),
                    g = o - s,
                    v = t8(Math.sqrt(l / h)),
                    y = 5 > Math.abs(g);
                if (i || (i = y ? .01 : 2), e || (e = y ? .005 : .5), f < 1) {
                    let t = e0(v, f);
                    n = e => {
                        let i = Math.exp(-f * v * e);
                        return o - i * ((m + f * v * g) / t * Math.sin(t * e) + g * Math.cos(t * e))
                    }
                } else if (1 === f) n = t => o - Math.exp(-v * t) * (g + (m + v * g) * t);
                else {
                    let t = v * Math.sqrt(f * f - 1);
                    n = e => {
                        let i = Math.exp(-f * v * e),
                            r = Math.min(t * e, 300);
                        return o - i * ((m + f * v * g) * Math.sinh(r) + t * g * Math.cosh(r)) / t
                    }
                }
                return {
                    calculatedDuration: p && d || null,
                    next: t => {
                        let r = n(t);
                        if (p) a.done = t >= d;
                        else {
                            let s = m;
                            0 !== t && (s = f < 1 ? eQ(n, t, r) : 0);
                            let l = Math.abs(s) <= i,
                                u = Math.abs(o - r) <= e;
                            a.done = l && u
                        }
                        return a.value = a.done ? o : r, a
                    }
                }
            }

            function e9({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: r = 325,
                bounceDamping: n = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let p = t[0],
                    m = {
                        done: !1,
                        value: p
                    },
                    f = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    v = i * e,
                    y = p + v,
                    x = void 0 === o ? y : o(y);
                x !== y && (v = x - p);
                let P = t => -v * Math.exp(-t / r),
                    b = t => x + P(t),
                    w = t => {
                        let e = P(t),
                            i = b(t);
                        m.done = Math.abs(e) <= u, m.value = m.done ? x : i
                    },
                    T = t => {
                        f(m.value) && (c = t, d = e3({
                            keyframes: [m.value, g(m.value)],
                            velocity: eQ(b, t, m.value),
                            damping: n,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return T(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, w(t), T(t)), void 0 !== c && t > c) ? d.next(t - c) : (e || w(t), m)
                    }
                }
            }
            let e4 = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: () => tR.update(e, !0),
                    stop: () => tL(e),
                    now: () => tj.isProcessing ? tj.timestamp : performance.now()
                }
            };

            function e6(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let e7 = {
                decay: e9,
                inertia: e9,
                tween: eJ,
                keyframes: eJ,
                spring: e3
            };

            function e8({
                autoplay: t = !0,
                delay: e = 0,
                driver: i = e4,
                keyframes: r,
                type: n = "keyframes",
                repeat: s = 0,
                repeatDelay: o = 0,
                repeatType: a = "loop",
                onPlay: l,
                onStop: u,
                onComplete: h,
                onUpdate: c,
                ...d
            }) {
                let p, m, f, g, v, y = 1,
                    x = !1,
                    P = () => {
                        m = new Promise(t => {
                            p = t
                        })
                    };
                P();
                let b = e7[n] || eJ;
                b !== eJ && "number" != typeof r[0] && (g = eK([0, 100], r, {
                    clamp: !1
                }), r = [0, 100]);
                let w = b({
                    ...d,
                    keyframes: r
                });
                "mirror" === a && (v = b({
                    ...d,
                    keyframes: [...r].reverse(),
                    velocity: -(d.velocity || 0)
                }));
                let T = "idle",
                    A = null,
                    S = null,
                    V = null;
                null === w.calculatedDuration && s && (w.calculatedDuration = e6(w));
                let {
                    calculatedDuration: E
                } = w, C = 1 / 0, M = 1 / 0;
                null !== E && (M = (C = E + o) * (s + 1) - o);
                let D = 0,
                    k = t => {
                        if (null === S) return;
                        y > 0 && (S = Math.min(S, t)), y < 0 && (S = Math.min(t - M / y, S)), D = null !== A ? A : Math.round(t - S) * y;
                        let i = D - e * (y >= 0 ? 1 : -1),
                            n = y >= 0 ? i < 0 : i > M;
                        D = Math.max(i, 0), "finished" === T && null === A && (D = M);
                        let l = D,
                            u = w;
                        if (s) {
                            let t = D / C,
                                e = Math.floor(t),
                                i = t % 1;
                            !i && t >= 1 && (i = 1), 1 === i && e--, e = Math.min(e, s + 1);
                            let r = !!(e % 2);
                            r && ("reverse" === a ? (i = 1 - i, o && (i -= o / C)) : "mirror" === a && (u = v));
                            let n = U(0, 1, i);
                            D > M && (n = "reverse" === a && r ? 1 : 0), l = n * C
                        }
                        let h = n ? {
                            done: !1,
                            value: r[0]
                        } : u.next(l);
                        g && (h.value = g(h.value));
                        let {
                            done: d
                        } = h;
                        n || null === E || (d = y >= 0 ? D >= M : D <= 0);
                        let p = null === A && ("finished" === T || "running" === T && d);
                        return c && c(h.value), p && j(), h
                    },
                    R = () => {
                        f && f.stop(), f = void 0
                    },
                    L = () => {
                        T = "idle", R(), p(), P(), S = V = null
                    },
                    j = () => {
                        T = "finished", h && h(), R(), p()
                    },
                    F = () => {
                        if (x) return;
                        f || (f = i(k));
                        let t = f.now();
                        l && l(), null !== A ? S = t - A : S && "finished" !== T || (S = t), "finished" === T && P(), V = S, A = null, T = "running", f.start()
                    };
                t && F();
                let B = {
                    then: (t, e) => m.then(t, e),
                    get time() {
                        return t8(D)
                    },
                    set time(newTime) {
                        D = newTime = t7(newTime), null === A && f && 0 !== y ? S = f.now() - newTime / y : A = newTime
                    },
                    get duration() {
                        let t = null === w.calculatedDuration ? e6(w) : w.calculatedDuration;
                        return t8(t)
                    },
                    get speed() {
                        return y
                    },
                    set speed(newSpeed) {
                        if (newSpeed === y || !f) return;
                        y = newSpeed, B.time = t8(D)
                    },
                    get state() {
                        return T
                    },
                    play: F,
                    pause: () => {
                        T = "paused", A = D
                    },
                    stop: () => {
                        x = !0, "idle" !== T && (T = "idle", u && u(), L())
                    },
                    cancel: () => {
                        null !== V && k(V), L()
                    },
                    complete: () => {
                        T = "finished"
                    },
                    sample: t => (S = 0, k(t))
                };
                return B
            }
            let it = (s = () => Object.hasOwnProperty.call(Element.prototype, "animate"), () => (void 0 === r && (r = s()), r)),
                ie = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                ii = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function t(e) {
                    return !!(!e || "string" == typeof e && er[e] || ee(e) || Array.isArray(e) && e.every(t))
                }(e.ease),
                ir = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                is = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                io = {
                    type: "keyframes",
                    duration: .8
                },
                ia = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                il = (t, {
                    keyframes: e
                }) => e.length > 2 ? io : D.has(t) ? t.startsWith("scale") ? is(e[1]) : ir : ia,
                iu = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (eH.test(e) || "0" === e) && !e.startsWith("url(")),
                ih = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function ic(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [r] = i.match(z) || [];
                if (!r) return t;
                let n = i.replace(r, ""),
                    s = ih.has(e) ? 1 : 0;
                return r !== i && (s *= 100), e + "(" + s + n + ")"
            }
            let id = /([a-z-]*)\(.*?\)/g,
                ip = {
                    ...eH,
                    getAnimatableNone: t => {
                        let e = t.match(id);
                        return e ? e.map(ic).join(" ") : t
                    }
                },
                im = {
                    ...ti,
                    color: eE,
                    backgroundColor: eE,
                    outlineColor: eE,
                    fill: eE,
                    stroke: eE,
                    borderColor: eE,
                    borderTopColor: eE,
                    borderRightColor: eE,
                    borderBottomColor: eE,
                    borderLeftColor: eE,
                    filter: ip,
                    WebkitFilter: ip
                },
                ig = t => im[t];

            function iv(t, e) {
                let i = ig(t);
                return i !== ip && (i = eH), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let iy = t => /^0[^.\s]+$/.test(t);

            function ix(t, e) {
                return t[e] || t.default || t
            }
            let iP = (t, e, i, r = {}) => n => {
                let s = ix(r, t) || {},
                    o = s.delay || r.delay || 0,
                    {
                        elapsed: a = 0
                    } = r;
                a -= t7(o);
                let l = function(t, e, i, r) {
                        let n, s;
                        let o = iu(e, i);
                        n = Array.isArray(i) ? [...i] : [null, i];
                        let a = void 0 !== r.from ? r.from : t.get(),
                            l = [];
                        for (let t = 0; t < n.length; t++) {
                            var u;
                            null === n[t] && (n[t] = 0 === t ? a : n[t - 1]), ("number" == typeof(u = n[t]) ? 0 === u : null !== u ? "none" === u || "0" === u || iy(u) : void 0) && l.push(t), "string" == typeof n[t] && "none" !== n[t] && "0" !== n[t] && (s = n[t])
                        }
                        if (o && l.length && s)
                            for (let t = 0; t < l.length; t++) {
                                let i = l[t];
                                n[i] = iv(e, s)
                            }
                        return n
                    }(e, t, i, s),
                    u = l[0],
                    h = l[l.length - 1],
                    c = iu(t, u),
                    d = iu(t, h);
                tM(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
                let p = {
                    keyframes: l,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...s,
                    delay: -a,
                    onUpdate: t => {
                        e.set(t), s.onUpdate && s.onUpdate(t)
                    },
                    onComplete: () => {
                        n(), s.onComplete && s.onComplete()
                    }
                };
                if (! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: r,
                        staggerDirection: n,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(s) && (p = {
                        ...p,
                        ...il(t, p)
                    }), p.duration && (p.duration = t7(p.duration)), p.repeatDelay && (p.repeatDelay = t7(p.repeatDelay)), !c || !d || et.current || !1 === s.type) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: i,
                    onComplete: r
                }) {
                    let n = () => (i && i(t[t.length - 1]), r && r(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: tM,
                        pause: tM,
                        stop: tM,
                        then: t => (t(), Promise.resolve()),
                        cancel: tM,
                        complete: tM
                    });
                    return e ? e8({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: n
                    }) : n()
                }(et.current ? {
                    ...p,
                    delay: 0
                } : p);
                if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let i = function(t, e, {
                        onUpdate: i,
                        onComplete: r,
                        ...n
                    }) {
                        let s, o;
                        let a = it() && ie.has(e) && !n.repeatDelay && "mirror" !== n.repeatType && 0 !== n.damping && "inertia" !== n.type;
                        if (!a) return !1;
                        let l = !1,
                            u = () => {
                                o = new Promise(t => {
                                    s = t
                                })
                            };
                        u();
                        let {
                            keyframes: h,
                            duration: c = 300,
                            ease: d,
                            times: p
                        } = n;
                        if (ii(e, n)) {
                            let t = e8({
                                    ...n,
                                    repeat: 0,
                                    delay: 0
                                }),
                                e = {
                                    done: !1,
                                    value: h[0]
                                },
                                i = [],
                                r = 0;
                            for (; !e.done && r < 2e4;) i.push((e = t.sample(r)).value), r += 10;
                            p = void 0, h = i, c = r - 10, d = "linear"
                        }
                        let m = function(t, e, i, {
                            delay: r = 0,
                            duration: n,
                            repeat: s = 0,
                            repeatType: o = "loop",
                            ease: a,
                            times: l
                        } = {}) {
                            let u = {
                                [e]: i
                            };
                            l && (u.offset = l);
                            let h = function t(e) {
                                if (e) return ee(e) ? ei(e) : Array.isArray(e) ? e.map(t) : er[e]
                            }(a);
                            return Array.isArray(h) && (u.easing = h), t.animate(u, {
                                delay: r,
                                duration: n,
                                easing: Array.isArray(h) ? "linear" : h,
                                fill: "both",
                                iterations: s + 1,
                                direction: "reverse" === o ? "alternate" : "normal"
                            })
                        }(t.owner.current, e, h, {
                            ...n,
                            duration: c,
                            ease: d,
                            times: p
                        });
                        n.syncStart && (m.startTime = tj.isProcessing ? tj.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
                        let f = () => m.cancel(),
                            g = () => {
                                tR.update(f), s(), u()
                            };
                        return m.onfinish = () => {
                            t.set(function(t, {
                                repeat: e,
                                repeatType: i = "loop"
                            }) {
                                let r = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                                return t[r]
                            }(h, n)), r && r(), g()
                        }, {
                            then: (t, e) => o.then(t, e),
                            attachTimeline: t => (m.timeline = t, m.onfinish = null, tM),
                            get time() {
                                return t8(m.currentTime || 0)
                            },
                            set time(newTime) {
                                m.currentTime = t7(newTime)
                            },
                            get speed() {
                                return m.playbackRate
                            },
                            set speed(newSpeed) {
                                m.playbackRate = newSpeed
                            },
                            get duration() {
                                return t8(c)
                            },
                            play: () => {
                                l || (m.play(), tL(f))
                            },
                            pause: () => m.pause(),
                            stop: () => {
                                if (l = !0, "idle" === m.playState) return;
                                let {
                                    currentTime: e
                                } = m;
                                if (e) {
                                    let i = e8({
                                        ...n,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                                }
                                g()
                            },
                            complete: () => m.finish(),
                            cancel: g
                        }
                    }(e, t, p);
                    if (i) return i
                }
                return e8(p)
            };

            function ib(t) {
                return !!(R(t) && t.add)
            }
            let iw = t => /^\-?\d*\.?\d+$/.test(t);

            function iT(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function iA(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            class iS {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return iT(this.subscriptions, t), () => iA(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let r = this.subscriptions.length;
                    if (r) {
                        if (1 === r) this.subscriptions[0](t, e, i);
                        else
                            for (let n = 0; n < r; n++) {
                                let r = this.subscriptions[n];
                                r && r(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let iV = t => !isNaN(parseFloat(t)),
                iE = {
                    current: void 0
                };
            class iC {
                constructor(t, e = {}) {
                    this.version = "10.16.5", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: i,
                            timestamp: r
                        } = tj;
                        this.lastUpdated !== r && (this.timeDelta = i, this.lastUpdated = r, tR.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => tR.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = iV(this.current), this.owner = e.owner
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new iS);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), tR.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = t, this.timeDelta = i
                }
                jump(t) {
                    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return iE.current && iE.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t, e;
                    return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev), (e = this.timeDelta) ? t * (1e3 / e) : 0) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
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
            }

            function iM(t, e) {
                return new iC(t, e)
            }
            let iD = t => e => e.test(t),
                ik = [N, K, Z, q, Q, J, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                iR = t => ik.find(iD(t)),
                iL = [...ik, eE, eH],
                ij = t => iL.find(iD(t));

            function iF(t, e, {
                delay: i = 0,
                transitionOverride: r,
                type: n
            } = {}) {
                let {
                    transition: s = t.getDefaultTransition(),
                    transitionEnd: o,
                    ...a
                } = t.makeTargetAnimatable(e), l = t.getValue("willChange");
                r && (s = r);
                let u = [],
                    h = n && t.animationState && t.animationState.getState()[n];
                for (let e in a) {
                    let r = t.getValue(e),
                        n = a[e];
                    if (!r || void 0 === n || h && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let r = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, r
                        }(h, e)) continue;
                    let o = {
                        delay: i,
                        elapsed: 0,
                        ...s
                    };
                    if (window.HandoffAppearAnimations && !r.hasAnimated) {
                        let i = t.getProps()[t6];
                        i && (o.elapsed = window.HandoffAppearAnimations(i, e, r, tR), o.syncStart = !0)
                    }
                    r.start(iP(e, r, n, t.shouldReduceMotion && D.has(e) ? {
                        type: !1
                    } : o));
                    let c = r.animation;
                    ib(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c)
                }
                return o && Promise.all(u).then(() => {
                    o && function(t, e) {
                        let i = t4(t, e),
                            {
                                transitionEnd: r = {},
                                transition: n = {},
                                ...s
                            } = i ? t.makeTargetAnimatable(i, !1) : {};
                        for (let e in s = {
                                ...s,
                                ...r
                            }) {
                            let i = tV(s[e]);
                            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, iM(i))
                        }
                    }(t, o)
                }), u
            }

            function iB(t, e, i = {}) {
                let r = t4(t, e, i.custom),
                    {
                        transition: n = t.getDefaultTransition() || {}
                    } = r || {};
                i.transitionOverride && (n = i.transitionOverride);
                let s = r ? () => Promise.all(iF(t, r, i)) : () => Promise.resolve(),
                    o = t.variantChildren && t.variantChildren.size ? (r = 0) => {
                        let {
                            delayChildren: s = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = n;
                        return function(t, e, i = 0, r = 0, n = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * r,
                                l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                            return Array.from(t.variantChildren).sort(iO).forEach((t, r) => {
                                t.notify("AnimationStart", e), o.push(iB(t, e, {
                                    ...s,
                                    delay: i + l(r)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, s + r, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: a
                    } = n;
                if (!a) return Promise.all([s(), o(i.delay)]);
                {
                    let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
                    return t().then(() => e())
                }
            }

            function iO(t, e) {
                return t.sortNodePosition(e)
            }
            let iI = [...g].reverse(),
                iU = g.length;

            function iN(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let i$ = 0,
                iW = (t, e) => Math.abs(t - e);
            class iH {
                constructor(t, e, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = iG(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    let i = iW(t.x, e.x),
                                        r = iW(t.y, e.y);
                                    return Math.sqrt(i ** 2 + r ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: r
                            } = t, {
                                timestamp: n
                            } = tj;
                            this.history.push({
                                ...r,
                                timestamp: n
                            });
                            let {
                                onStart: s,
                                onMove: o
                            } = this.handlers;
                            e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = iz(e, this.transformPagePoint), tR.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: i,
                                onSessionEnd: r
                            } = this.handlers, n = iG("pointercancel" === t.type ? this.lastMoveEventInfo : iz(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, n), r && r(t, n)
                        }, !tU(t)) return;
                    this.handlers = e, this.transformPagePoint = i;
                    let r = tN(t),
                        n = iz(r, this.transformPagePoint),
                        {
                            point: s
                        } = n,
                        {
                            timestamp: o
                        } = tj;
                    this.history = [{
                        ...s,
                        timestamp: o
                    }];
                    let {
                        onSessionStart: a
                    } = e;
                    a && a(t, iG(n, this.history)), this.removeListeners = tz(tW(window, "pointermove", this.handlePointerMove), tW(window, "pointerup", this.handlePointerUp), tW(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), tL(this.updatePoint)
                }
            }

            function iz(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function iY(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function iG({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: iY(t, iX(e)),
                    offset: iY(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            r = null,
                            n = iX(t);
                        for (; i >= 0 && (r = t[i], !(n.timestamp - r.timestamp > t7(.1)));) i--;
                        if (!r) return {
                            x: 0,
                            y: 0
                        };
                        let s = t8(n.timestamp - r.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (n.x - r.x) / s,
                            y: (n.y - r.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function iX(t) {
                return t[t.length - 1]
            }

            function i_(t) {
                return t.max - t.min
            }

            function iq(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function iZ(t, e, i, r = .5) {
                t.origin = r, t.originPoint = eC(e.min, e.max, t.origin), t.scale = i_(i) / i_(e), (iq(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = eC(i.min, i.max, t.origin) - t.originPoint, (iq(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function iK(t, e, i, r) {
                iZ(t.x, e.x, i.x, r ? r.originX : void 0), iZ(t.y, e.y, i.y, r ? r.originY : void 0)
            }

            function iJ(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + i_(e)
            }

            function iQ(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + i_(e)
            }

            function i0(t, e, i) {
                iQ(t.x, e.x, i.x), iQ(t.y, e.y, i.y)
            }

            function i1(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function i5(t, e) {
                let i = e.min - t.min,
                    r = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, r] = [r, i]), {
                    min: i,
                    max: r
                }
            }

            function i2(t, e, i) {
                return {
                    min: i3(t, e),
                    max: i3(t, i)
                }
            }

            function i3(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let i9 = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                i4 = () => ({
                    x: i9(),
                    y: i9()
                }),
                i6 = () => ({
                    min: 0,
                    max: 0
                }),
                i7 = () => ({
                    x: i6(),
                    y: i6()
                });

            function i8(t) {
                return [t("x"), t("y")]
            }

            function rt({
                top: t,
                left: e,
                right: i,
                bottom: r
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: r
                    }
                }
            }

            function re(t) {
                return void 0 === t || 1 === t
            }

            function ri({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !re(t) || !re(e) || !re(i)
            }

            function rr(t) {
                return ri(t) || rn(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function rn(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function rs(t, e, i, r, n) {
                return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e
            }

            function ro(t, e = 0, i = 1, r, n) {
                t.min = rs(t.min, e, i, r, n), t.max = rs(t.max, e, i, r, n)
            }

            function ra(t, {
                x: e,
                y: i
            }) {
                ro(t.x, e.translate, e.scale, e.originPoint), ro(t.y, i.translate, i.scale, i.originPoint)
            }

            function rl(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function ru(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function rh(t, e, [i, r, n]) {
                let s = void 0 !== e[n] ? e[n] : .5,
                    o = eC(t.min, t.max, s);
                ro(t, e[i], e[r], o, e.scale)
            }
            let rc = ["x", "scaleX", "originX"],
                rd = ["y", "scaleY", "originY"];

            function rp(t, e) {
                rh(t.x, e, rc), rh(t.y, e, rd)
            }

            function rm(t, e) {
                return rt(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        r = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let rf = new WeakMap;
            class rg {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = i7(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    i && !1 === i.isPresent || (this.panSession = new iH(t, {
                        onSessionStart: t => {
                            this.stopAnimation(), e && this.snapToCursor(tN(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: r,
                                onDragStart: n
                            } = this.getProps();
                            if (i && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = t_(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), i8(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (Z.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let r = i.layout.layoutBox[t];
                                        if (r) {
                                            let t = i_(r);
                                            e = t * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), n && tR.update(() => n(t, e), !1, !0);
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: r,
                                onDirectionLock: n,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (r && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && n && n(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e)
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    }))
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: r
                    } = e;
                    this.startAnimation(r);
                    let {
                        onDragEnd: n
                    } = this.getProps();
                    n && tR.update(() => n(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: r
                    } = this.getProps();
                    if (!i || !rv(t, r, this.currentDirection)) return;
                    let n = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, r) {
                        return void 0 !== e && t < e ? t = r ? eC(e, t, r.min) : Math.max(t, e) : void 0 !== i && t > i && (t = r ? eC(i, t, r.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), n.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, r = this.constraints;
                    t && p(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: r,
                        right: n
                    }) {
                        return {
                            x: i1(t.x, i, n),
                            y: i1(t.y, e, r)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: i2(t, "left", "right"),
                            y: i2(t, "top", "bottom")
                        }
                    }(e), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && i8(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !p(e)) return !1;
                    let r = e.current;
                    tM(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: n
                    } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    let s = function(t, e, i) {
                            let r = rm(t, i),
                                {
                                    scroll: n
                                } = e;
                            return n && (ru(r.x, n.offset.x), ru(r.y, n.offset.y)), r
                        }(r, n.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: i5((t = n.layout.layoutBox).x, s.x),
                            y: i5(t.y, s.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = rt(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: r,
                        dragTransition: n,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {}, l = i8(o => {
                        if (!rv(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: r ? 200 : 1e6,
                            bounceDamping: r ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...n,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    });
                    return Promise.all(l).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start(iP(t, i, 0, e))
                }
                stopAnimation() {
                    i8(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps(),
                        r = i[e];
                    return r || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    i8(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!rv(e, i, this.currentDirection)) return;
                        let {
                            projection: r
                        } = this.visualElement, n = this.getAxisMotionValue(e);
                        if (r && r.layout) {
                            let {
                                min: i,
                                max: s
                            } = r.layout.layoutBox[e];
                            n.set(t[e] - eC(i, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!p(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let r = {
                        x: 0,
                        y: 0
                    };
                    i8(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            r[t] = function(t, e) {
                                let i = .5,
                                    r = i_(t),
                                    n = i_(e);
                                return n > r ? i = eq(e.min, e.max - r, t.min) : r > n && (i = eq(t.min, t.max - n, e.min)), U(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: n
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = n ? n({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), i8(e => {
                        if (!rv(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: n,
                                max: s
                            } = this.constraints[e];
                        i.set(eC(n, s, r[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    rf.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = tW(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        i = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            p(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: r
                        } = this.visualElement,
                        n = r.addEventListener("measure", i);
                    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), i();
                    let s = tI(window, "resize", () => this.scalePositionWithinConstraints()),
                        o = r.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (i8(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        s(), e(), n(), o && o()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: r = !1,
                            dragConstraints: n = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return {
                        ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: r,
                        dragConstraints: n,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function rv(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            let ry = t => (e, i) => {
                    t && tR.update(() => t(e, i))
                },
                rx = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function rP(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let rb = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!K.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = rP(t, e.target.x),
                        r = rP(t, e.target.y);
                    return `${i}% ${r}%`
                }
            };
            class rw extends o.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: r
                    } = this.props, {
                        projection: n
                    } = t;
                    Object.assign(C, rA), n && (e.group && e.group.add(n), i && i.register && r && i.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), n.setOptions({
                        ...n.options,
                        onExitComplete: () => this.safeToRemove()
                    })), rx.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: r,
                        isPresent: n
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = n, r || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === n || (n ? s.promote() : s.relegate() || tR.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: r
                    } = t;
                    r && (r.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(r), i && i.deregister && i.deregister(r))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function rT(t) {
                let [e, i] = function() {
                    let t = (0, o.useContext)(u);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: r
                    } = t, n = (0, o.useId)();
                    return (0, o.useEffect)(() => r(n), []), !e && i ? [!1, () => i && i(n)] : [!0]
                }(), r = (0, o.useContext)(T);
                return o.createElement(rw, {
                    ...t,
                    layoutGroup: r,
                    switchLayoutGroup: (0, o.useContext)(A),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let rA = {
                    borderRadius: {
                        ...rb,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: rb,
                    borderTopRightRadius: rb,
                    borderBottomLeftRadius: rb,
                    borderBottomRightRadius: rb,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let r = eH.parse(t);
                            if (r.length > 5) return t;
                            let n = eH.createTransformer(t),
                                s = "number" != typeof r[0] ? 1 : 0,
                                o = i.x.scale * e.x,
                                a = i.y.scale * e.y;
                            r[0 + s] /= o, r[1 + s] /= a;
                            let l = eC(o, a, .5);
                            return "number" == typeof r[2 + s] && (r[2 + s] /= l), "number" == typeof r[3 + s] && (r[3 + s] /= l), n(r)
                        }
                    }
                },
                rS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                rV = rS.length,
                rE = t => "string" == typeof t ? parseFloat(t) : t,
                rC = t => "number" == typeof t || K.test(t);

            function rM(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let rD = rR(0, .5, ep),
                rk = rR(.5, .95, tM);

            function rR(t, e, i) {
                return r => r < t ? 0 : r > e ? 1 : i(eq(t, e, r))
            }

            function rL(t, e) {
                t.min = e.min, t.max = e.max
            }

            function rj(t, e) {
                rL(t.x, e.x), rL(t.y, e.y)
            }

            function rF(t, e, i, r, n) {
                return t -= e, t = r + 1 / i * (t - r), void 0 !== n && (t = r + 1 / n * (t - r)), t
            }

            function rB(t, e, [i, r, n], s, o) {
                ! function(t, e = 0, i = 1, r = .5, n, s = t, o = t) {
                    if (Z.test(e)) {
                        e = parseFloat(e);
                        let t = eC(o.min, o.max, e / 100);
                        e = t - o.min
                    }
                    if ("number" != typeof e) return;
                    let a = eC(s.min, s.max, r);
                    t === s && (a -= e), t.min = rF(t.min, e, i, a, n), t.max = rF(t.max, e, i, a, n)
                }(t, e[i], e[r], e[n], e.scale, s, o)
            }
            let rO = ["x", "scaleX", "originX"],
                rI = ["y", "scaleY", "originY"];

            function rU(t, e, i, r) {
                rB(t.x, e, rO, i ? i.x : void 0, r ? r.x : void 0), rB(t.y, e, rI, i ? i.y : void 0, r ? r.y : void 0)
            }

            function rN(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function r$(t) {
                return rN(t.x) && rN(t.y)
            }

            function rW(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function rH(t) {
                return i_(t.x) / i_(t.y)
            }
            class rz {
                constructor() {
                    this.members = []
                }
                add(t) {
                    iT(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (iA(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: r
                        } = t.options;
                        !1 === r && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function rY(t, e, i) {
                let r = "",
                    n = t.x.translate / e.x,
                    s = t.y.translate / e.y;
                if ((n || s) && (r = `translate3d(${n}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (r += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: n
                    } = i;
                    t && (r += `rotate(${t}deg) `), e && (r += `rotateX(${e}deg) `), n && (r += `rotateY(${n}deg) `)
                }
                let o = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== o || 1 !== a) && (r += `scale(${o}, ${a})`), r || "none"
            }
            let rG = (t, e) => t.depth - e.depth;
            class rX {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    iT(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    iA(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(rG), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let r_ = ["", "X", "Y", "Z"],
                rq = 0,
                rZ = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function rK({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: r,
                resetTransform: n
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = rq++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            rZ.totalNodes = rZ.resolvedTargetDeltas = rZ.recalculatedProjection = 0, this.nodes.forEach(r0), this.nodes.forEach(r6), this.nodes.forEach(r7), this.nodes.forEach(r1), window.MotionDebug && window.MotionDebug.record(rZ)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new rX)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new iS), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: r,
                            layout: n,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (n || r) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let r = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = performance.now(),
                                        r = ({
                                            timestamp: n
                                        }) => {
                                            let s = n - i;
                                            s >= e && (tL(r), t(s - e))
                                        };
                                    return tR.read(r, !0), () => tL(r)
                                }(r, 250), rx.hasAnimatedSinceResize && (rx.hasAnimatedSinceResize = !1, this.nodes.forEach(r4))
                            })
                        }
                        r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && s && (r || n) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: r
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let n = this.options.transition || s.getDefaultTransition() || nn,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !rW(this.targetLayout, r) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = {
                                    ...ix(n, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || r4(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = r
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, tL(this.updateProjection)
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
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(r8), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let r = this.getTransformTemplate();
                        this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        this.updateScheduled = !1;
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(r2);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(r3), this.isUpdating = !1, this.nodes.forEach(r9), this.nodes.forEach(rJ), this.nodes.forEach(rQ), this.clearAllSnapshots();
                        let e = performance.now();
                        tj.delta = U(0, 1e3 / 60, e - tj.timestamp), tj.timestamp = e, tj.isProcessing = !0, tF.update.process(tj), tF.preRender.process(tj), tF.render.process(tj), tj.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(r5), this.sharedNodes.forEach(nt)
                    }
                    scheduleUpdateProjection() {
                        tR.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        tR.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll()
                            }
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = i7(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: r(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!n) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !r$(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            r = i ? i(this.latestValues, "") : void 0,
                            s = r !== this.prevTransformTemplateValue;
                        t && (e || rr(this.latestValues) || s) && (n(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            r = this.removeElementScroll(i);
                        return t && (r = this.removeTransform(r)), na((e = r).x), na(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: r,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return i7();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (ru(e.x, i.offset.x), ru(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = i7();
                        rj(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let r = this.path[i],
                                {
                                    scroll: n,
                                    options: s
                                } = r;
                            if (r !== this.root && n && s.layoutScroll) {
                                if (n.isRoot) {
                                    rj(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && (ru(e.x, -i.offset.x), ru(e.y, -i.offset.y))
                                }
                                ru(e.x, n.offset.x), ru(e.y, n.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = i7();
                        rj(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let r = this.path[t];
                            !e && r.options.layoutScroll && r.scroll && r !== r.root && rp(i, {
                                x: -r.scroll.offset.x,
                                y: -r.scroll.offset.y
                            }), rr(r.latestValues) && rp(i, r.latestValues)
                        }
                        return rr(this.latestValues) && rp(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = i7();
                        rj(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !rr(i.latestValues)) continue;
                            ri(i.latestValues) && i.updateSnapshot();
                            let r = i7(),
                                n = i.measurePageBox();
                            rj(r, n), rU(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, r)
                        }
                        return rr(this.latestValues) && rU(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = {
                            ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tj.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, r, n;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s,
                            a = !(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (a) return;
                        let {
                            layout: l,
                            layoutId: u
                        } = this.options;
                        if (this.layout && (l || u)) {
                            if (this.resolvedRelativeTargetAt = tj.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = i7(), this.relativeTargetOrigin = i7(), i0(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), rj(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = i7(), this.targetWithTransforms = i7()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, r = this.relativeTarget, n = this.relativeParent.target, iJ(i.x, r.x, n.x), iJ(i.y, r.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rj(this.target, this.layout.layoutBox), ra(this.target, this.targetDelta)) : rj(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = i7(), this.relativeTargetOrigin = i7(), i0(this.relativeTargetOrigin, this.target, t.target), rj(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                rZ.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || ri(this.parent.latestValues) || rn(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            r = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (r = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === tj.timestamp && (r = !1), r) return;
                        let {
                            layout: n,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || s)) return;
                        rj(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, r = !1) {
                            let n, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (n = i[a]).projectionDelta;
                                    let o = n.instance;
                                    (!o || !o.style || "contents" !== o.style.display) && (r && n.options.layoutScroll && n.scroll && n !== n.root && rp(t, {
                                        x: -n.scroll.offset.x,
                                        y: -n.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, ra(t, s)), r && rr(n.latestValues) && rp(t, n.latestValues))
                                }
                                e.x = rl(e.x), e.y = rl(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = i4(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = i4(), this.projectionDeltaWithTransform = i4());
                        let u = this.projectionTransform;
                        iK(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = rY(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), rZ.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let r = this.snapshot,
                            n = r ? r.latestValues : {},
                            s = {
                                ...this.latestValues
                            },
                            o = i4();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = i7(),
                            l = r ? r.source : void 0,
                            u = this.layout ? this.layout.source : void 0,
                            h = l !== u,
                            c = this.getStack(),
                            d = !c || c.members.length <= 1,
                            p = !!(h && !d && !0 === this.options.crossfade && !this.path.some(nr));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let r = e / 1e3;
                            if (ne(o.x, t.x, r), ne(o.y, t.y, r), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var l, u, c, m;
                                i0(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), c = this.relativeTarget, m = this.relativeTargetOrigin, ni(c.x, m.x, a.x, r), ni(c.y, m.y, a.y, r), i && (l = this.relativeTarget, u = i, l.x.min === u.x.min && l.x.max === u.x.max && l.y.min === u.y.min && l.y.max === u.y.max) && (this.isProjectionDirty = !1), i || (i = i7()), rj(i, this.relativeTarget)
                            }
                            h && (this.animationValues = s, function(t, e, i, r, n, s) {
                                n ? (t.opacity = eC(0, void 0 !== i.opacity ? i.opacity : 1, rD(r)), t.opacityExit = eC(void 0 !== e.opacity ? e.opacity : 1, 0, rk(r))) : s && (t.opacity = eC(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, r));
                                for (let n = 0; n < rV; n++) {
                                    let s = `border${rS[n]}Radius`,
                                        o = rM(e, s),
                                        a = rM(i, s);
                                    if (void 0 === o && void 0 === a) continue;
                                    o || (o = 0), a || (a = 0);
                                    let l = 0 === o || 0 === a || rC(o) === rC(a);
                                    l ? (t[s] = Math.max(eC(rE(o), rE(a), r), 0), (Z.test(a) || Z.test(o)) && (t[s] += "%")) : t[s] = a
                                }(e.rotate || i.rotate) && (t.rotate = eC(e.rotate || 0, i.rotate || 0, r))
                            }(s, n, this.latestValues, r, p, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (tL(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tR.update(() => {
                            rx.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let r = R(t) ? t : iM(t);
                                return r.start(iP("", r, 1e3, i)), r.animation
                            }(0, 0, {
                                ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: r,
                                latestValues: n
                            } = t;
                        if (e && i && r) {
                            if (this !== t && this.layout && r && nl(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                i = this.target || i7();
                                let e = i_(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let r = i_(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + r
                            }
                            rj(e, i), rp(e, n), iK(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new rz);
                        let i = this.sharedNodes.get(t);
                        i.add(e);
                        let r = e.options.initialPromotionConfig;
                        e.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let r = this.getStack();
                        r && r.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let r = {};
                        for (let e = 0; e < r_.length; e++) {
                            let n = "rotate" + r_[e];
                            i[n] && (r[n] = i[n], t.setStaticValue(n, 0))
                        }
                        for (let e in t.render(), r) t.setStaticValue(e, r[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, i;
                        let r = {};
                        if (!this.instance || this.isSVG) return r;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        r.visibility = "";
                        let n = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = tE(t.pointerEvents) || "", r.transform = n ? n(this.latestValues, "") : "none", r;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tE(t.pointerEvents) || ""), this.hasProjected && !rr(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), r.transform = rY(this.projectionDeltaWithTransform, this.treeScale, o), n && (r.transform = n(o, r.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in r.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, s.animationValues ? r.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : r.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, C) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = C[t], n = "none" === r.transform ? o[t] : e(o[t], s);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) r[i[e]] = n
                            } else r[t] = n
                        }
                        return this.options.layoutId && (r.pointerEvents = s === this ? tE(t.pointerEvents) || "" : "none"), r
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(r2), this.root.sharedNodes.clear()
                    }
                }
            }

            function rJ(t) {
                t.updateLayout()
            }

            function rQ(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: r
                    } = t.layout, {
                        animationType: n
                    } = t.options, s = i.source !== t.layout.source;
                    "size" === n ? i8(t => {
                        let r = s ? i.measuredBox[t] : i.layoutBox[t],
                            n = i_(r);
                        r.min = e[t].min, r.max = r.min + n
                    }) : nl(n, i.layoutBox, e) && i8(r => {
                        let n = s ? i.measuredBox[r] : i.layoutBox[r],
                            o = i_(e[r]);
                        n.max = n.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[r].max = t.relativeTarget[r].min + o)
                    });
                    let o = i4();
                    iK(o, e, i.layoutBox);
                    let a = i4();
                    s ? iK(a, t.applyTransform(r, !0), i.measuredBox) : iK(a, e, i.layoutBox);
                    let l = !r$(o),
                        u = !1;
                    if (!t.resumeFrom) {
                        let r = t.getClosestProjectingParent();
                        if (r && !r.resumeFrom) {
                            let {
                                snapshot: n,
                                layout: s
                            } = r;
                            if (n && s) {
                                let o = i7();
                                i0(o, i.layoutBox, n.layoutBox);
                                let a = i7();
                                i0(a, e, s.layoutBox), rW(o, a) || (u = !0), r.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = r)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function r0(t) {
                rZ.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function r1(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function r5(t) {
                t.clearSnapshot()
            }

            function r2(t) {
                t.clearMeasurements()
            }

            function r3(t) {
                t.isLayoutDirty = !1
            }

            function r9(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function r4(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function r6(t) {
                t.resolveTargetDelta()
            }

            function r7(t) {
                t.calcProjection()
            }

            function r8(t) {
                t.resetRotation()
            }

            function nt(t) {
                t.removeLeadSnapshot()
            }

            function ne(t, e, i) {
                t.translate = eC(e.translate, 0, i), t.scale = eC(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function ni(t, e, i, r) {
                t.min = eC(e.min, i.min, r), t.max = eC(e.max, i.max, r)
            }

            function nr(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let nn = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                ns = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                no = ns("applewebkit/") && !ns("chrome/") ? Math.round : tM;

            function na(t) {
                t.min = no(t.min), t.max = no(t.max)
            }

            function nl(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !iq(rH(e), rH(i), .2)
            }
            let nu = rK({
                    attachResizeListener: (t, e) => tI(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                nh = {
                    current: void 0
                },
                nc = rK({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!nh.current) {
                            let t = new nu({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), nh.current = t
                        }
                        return nh.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                }),
                nd = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function np(t, e, i = 1) {
                tM(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [r, n] = function(t) {
                    let e = nd.exec(t);
                    if (!e) return [, ];
                    let [, i, r] = e;
                    return [i, r]
                }(t);
                if (!r) return;
                let s = window.getComputedStyle(e).getPropertyValue(r);
                if (s) {
                    let t = s.trim();
                    return iw(t) ? parseFloat(t) : t
                }
                return O(n) ? np(n, e, i + 1) : n
            }
            let nm = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                nf = t => nm.has(t),
                ng = t => Object.keys(t).some(nf),
                nv = t => t === N || t === K,
                ny = (t, e) => parseFloat(t.split(", ")[e]),
                nx = (t, e) => (i, {
                    transform: r
                }) => {
                    if ("none" === r || !r) return 0;
                    let n = r.match(/^matrix3d\((.+)\)$/);
                    if (n) return ny(n[1], e);
                    {
                        let e = r.match(/^matrix\((.+)\)$/);
                        return e ? ny(e[1], t) : 0
                    }
                },
                nP = new Set(["x", "y", "z"]),
                nb = M.filter(t => !nP.has(t)),
                nw = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: nx(4, 13),
                    y: nx(5, 14)
                };
            nw.translateX = nw.x, nw.translateY = nw.y;
            let nT = (t, e, i) => {
                    let r = e.measureViewportBox(),
                        n = e.current,
                        s = getComputedStyle(n),
                        {
                            display: o
                        } = s,
                        a = {};
                    "none" === o && e.setStaticValue("display", t.display || "block"), i.forEach(t => {
                        a[t] = nw[t](r, s)
                    }), e.render();
                    let l = e.measureViewportBox();
                    return i.forEach(i => {
                        let r = e.getValue(i);
                        r && r.jump(a[i]), t[i] = nw[i](l, s)
                    }), t
                },
                nA = (t, e, i = {}, r = {}) => {
                    e = {
                        ...e
                    }, r = {
                        ...r
                    };
                    let n = Object.keys(e).filter(nf),
                        s = [],
                        o = !1,
                        a = [];
                    if (n.forEach(n => {
                            let l;
                            let u = t.getValue(n);
                            if (!t.hasValue(n)) return;
                            let h = i[n],
                                c = iR(h),
                                d = e[n];
                            if (tA(d)) {
                                let t = d.length,
                                    e = null === d[0] ? 1 : 0;
                                c = iR(h = d[e]);
                                for (let i = e; i < t && null !== d[i]; i++) l ? tM(iR(d[i]) === l, "All keyframes must be of the same type") : tM((l = iR(d[i])) === c || nv(c) && nv(l), "Keyframes must be of the same dimension as the current value")
                            } else l = iR(d);
                            if (c !== l) {
                                if (nv(c) && nv(l)) {
                                    let t = u.get();
                                    "string" == typeof t && u.set(parseFloat(t)), "string" == typeof d ? e[n] = parseFloat(d) : Array.isArray(d) && l === K && (e[n] = d.map(parseFloat))
                                } else(null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[n] = c.transform(d) : (o || (s = function(t) {
                                    let e = [];
                                    return nb.forEach(i => {
                                        let r = t.getValue(i);
                                        void 0 !== r && (e.push([i, r.get()]), r.set(i.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), o = !0), a.push(n), r[n] = void 0 !== r[n] ? r[n] : e[n], u.jump(d))
                            }
                        }), !a.length) return {
                        target: e,
                        transitionEnd: r
                    };
                    {
                        let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                            n = nT(e, t, a);
                        return s.length && s.forEach(([e, i]) => {
                            t.getValue(e).set(i)
                        }), t.render(), h && null !== i && window.scrollTo({
                            top: i
                        }), {
                            target: n,
                            transitionEnd: r
                        }
                    }
                },
                nS = (t, e, i, r) => {
                    var n, s;
                    let o = function(t, {
                        ...e
                    }, i) {
                        let r = t.current;
                        if (!(r instanceof Element)) return {
                            target: e,
                            transitionEnd: i
                        };
                        for (let n in i && (i = {
                                ...i
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!O(e)) return;
                                let i = np(e, r);
                                i && t.set(i)
                            }), e) {
                            let t = e[n];
                            if (!O(t)) continue;
                            let s = np(t, r);
                            s && (e[n] = s, i || (i = {}), void 0 === i[n] && (i[n] = t))
                        }
                        return {
                            target: e,
                            transitionEnd: i
                        }
                    }(t, e, r);
                    return e = o.target, r = o.transitionEnd, n = e, s = r, ng(n) ? nA(t, n, i, s) : {
                        target: n,
                        transitionEnd: s
                    }
                },
                nV = {
                    current: null
                },
                nE = {
                    current: !1
                },
                nC = new WeakMap,
                nM = Object.keys(w),
                nD = nM.length,
                nk = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                nR = v.length;
            class nL {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: r,
                    visualState: n
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => tR.render(this.render, !1, !0);
                    let {
                        latestValues: o,
                        renderState: a
                    } = n;
                    this.latestValues = o, this.baseTarget = {
                        ...o
                    }, this.initialValues = e.initial ? {
                        ...o
                    } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.isControllingVariants = y(e), this.isVariantNode = x(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (let t in u) {
                        let e = u[t];
                        void 0 !== o[t] && R(e) && (e.set(o[t], !1), ib(l) && l.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, nC.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), nE.current || function() {
                        if (nE.current = !0, h) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => nV.current = t.matches;
                                t.addListener(e), e()
                            } else nV.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || nV.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in nC.delete(this.current), this.projection && this.projection.unmount(), tL(this.notifyUpdate), tL(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i = D.has(t),
                        r = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && tR.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        n = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        r(), n()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, i, r, n) {
                    let s, o;
                    for (let t = 0; t < nD; t++) {
                        let i = nM[t],
                            {
                                isEnabled: r,
                                Feature: n,
                                ProjectionNode: a,
                                MeasureLayout: l
                            } = w[i];
                        a && (s = a), r(e) && (!this.features[i] && n && (this.features[i] = new n(this)), l && (o = l))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: t,
                            layout: i,
                            drag: r,
                            dragConstraints: o,
                            layoutScroll: a,
                            layoutRoot: l
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: i,
                            alwaysMeasureLayout: !!r || o && p(o),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof i ? i : "both",
                            initialPromotionConfig: n,
                            layoutScroll: a,
                            layoutRoot: l
                        })
                    }
                    return o
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : i7()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < nk.length; e++) {
                        let i = nk[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let r = t["on" + i];
                        r && (this.propEventSubscriptions[i] = this.on(i, r))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        let {
                            willChange: r
                        } = e;
                        for (let n in e) {
                            let s = e[n],
                                o = i[n];
                            if (R(s)) t.addValue(n, s), ib(r) && r.add(n);
                            else if (R(o)) t.addValue(n, iM(s, {
                                owner: t
                            })), ib(r) && r.remove(n);
                            else if (o !== s) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    e.hasAnimated || e.set(s)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, iM(void 0 !== e ? e : s, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let r in i) void 0 === e[r] && t.removeValue(r);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
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
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < nR; t++) {
                        let i = v[t],
                            r = this.props[i];
                        (m(r) || !1 === r) && (e[i] = r)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = iM(e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: i
                    } = this.props, r = "string" == typeof i || "object" == typeof i ? null === (e = tT(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (i && void 0 !== r) return r;
                    let n = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === n || R(n) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : n
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new iS), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class nj extends nL {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...i
                }, {
                    transformValues: r
                }, n) {
                    let s = function(t, e, i) {
                        let r = {};
                        for (let n in t) {
                            let t = function(t, e) {
                                if (!e) return;
                                let i = e[t] || e.default || e;
                                return i.from
                            }(n, e);
                            if (void 0 !== t) r[n] = t;
                            else {
                                let t = i.getValue(n);
                                t && (r[n] = t.get())
                            }
                        }
                        return r
                    }(i, t || {}, this);
                    if (r && (e && (e = r(e)), i && (i = r(i)), s && (s = r(s))), n) {
                        ! function(t, e, i) {
                            var r, n;
                            let s = Object.keys(e).filter(e => !t.hasValue(e)),
                                o = s.length;
                            if (o)
                                for (let a = 0; a < o; a++) {
                                    let o = s[a],
                                        l = e[o],
                                        u = null;
                                    Array.isArray(l) && (u = l[0]), null === u && (u = null !== (n = null !== (r = i[o]) && void 0 !== r ? r : t.readValue(o)) && void 0 !== n ? n : e[o]), null != u && ("string" == typeof u && (iw(u) || iy(u)) ? u = parseFloat(u) : !ij(u) && eH.test(l) && (u = iv(o, l)), t.addValue(o, iM(u, {
                                        owner: t
                                    })), void 0 === i[o] && (i[o] = u), null !== u && t.setBaseTarget(o, u))
                                }
                        }(this, i, s);
                        let t = nS(this, i, s, e);
                        e = t.transitionEnd, i = t.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...i
                    }
                }
            }
            class nF extends nj {
                readValueFromInstance(t, e) {
                    if (D.has(e)) {
                        let t = ig(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            r = (B(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof r ? r.trim() : r
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return rm(t, e)
                }
                build(t, e, i, r) {
                    tr(t, e, i, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tb(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    R(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, i, r) {
                    ty(t, e, i, r)
                }
            }
            class nB extends nj {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (D.has(e)) {
                        let t = ig(e);
                        return t && t.default || 0
                    }
                    return e = tx.has(e) ? e : tv(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return i7()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tw(t, e)
                }
                build(t, e, i, r) {
                    tp(t, e, i, this.isSVGTag, r.transformTemplate)
                }
                renderInstance(t, e, i, r) {
                    tP(t, e, i, r)
                }
                mount(t) {
                    this.isSVGTag = tf(t.tagName), super.mount(t)
                }
            }
            let nO = (t, e) => E(t) ? new nB(e, {
                    enableHardwareAcceleration: !1
                }) : new nF(e, {
                    enableHardwareAcceleration: !0
                }),
                nI = {
                    animation: {
                        Feature: class extends tZ {
                            constructor(t) {
                                super(t), t.animationState || (t.animationState = function(t) {
                                    let e = e => Promise.all(e.map(({
                                            animation: e,
                                            options: i
                                        }) => (function(t, e, i = {}) {
                                            let r;
                                            if (t.notify("AnimationStart", e), Array.isArray(e)) {
                                                let n = e.map(e => iB(t, e, i));
                                                r = Promise.all(n)
                                            } else if ("string" == typeof e) r = iB(t, e, i);
                                            else {
                                                let n = "function" == typeof e ? t4(t, e, i.custom) : e;
                                                r = Promise.all(iF(t, n, i))
                                            }
                                            return r.then(() => t.notify("AnimationComplete", e))
                                        })(t, e, i))),
                                        i = {
                                            animate: iN(!0),
                                            whileInView: iN(),
                                            whileHover: iN(),
                                            whileTap: iN(),
                                            whileDrag: iN(),
                                            whileFocus: iN(),
                                            exit: iN()
                                        },
                                        r = !0,
                                        n = (e, i) => {
                                            let r = t4(t, i);
                                            if (r) {
                                                let {
                                                    transition: t,
                                                    transitionEnd: i,
                                                    ...n
                                                } = r;
                                                e = {
                                                    ...e,
                                                    ...n,
                                                    ...i
                                                }
                                            }
                                            return e
                                        };

                                    function s(s, o) {
                                        let a = t.getProps(),
                                            l = t.getVariantContext(!0) || {},
                                            u = [],
                                            h = new Set,
                                            c = {},
                                            d = 1 / 0;
                                        for (let e = 0; e < iU; e++) {
                                            var p;
                                            let g = iI[e],
                                                v = i[g],
                                                y = void 0 !== a[g] ? a[g] : l[g],
                                                x = m(y),
                                                P = g === o ? v.isActive : null;
                                            !1 === P && (d = e);
                                            let b = y === l[g] && y !== a[g] && x;
                                            if (b && r && t.manuallyAnimateOnMount && (b = !1), v.protectedKeys = {
                                                    ...c
                                                }, !v.isActive && null === P || !y && !v.prevProp || f(y) || "boolean" == typeof y) continue;
                                            let w = (p = v.prevProp, "string" == typeof y ? y !== p : !!Array.isArray(y) && !t9(y, p)),
                                                T = w || g === o && v.isActive && !b && x || e > d && x,
                                                A = Array.isArray(y) ? y : [y],
                                                S = A.reduce(n, {});
                                            !1 === P && (S = {});
                                            let {
                                                prevResolvedValues: V = {}
                                            } = v, E = {
                                                ...V,
                                                ...S
                                            }, C = t => {
                                                T = !0, h.delete(t), v.needsAnimating[t] = !0
                                            };
                                            for (let t in E) {
                                                let e = S[t],
                                                    i = V[t];
                                                c.hasOwnProperty(t) || (e !== i ? tA(e) && tA(i) ? !t9(e, i) || w ? C(t) : v.protectedKeys[t] = !0 : void 0 !== e ? C(t) : h.add(t) : void 0 !== e && h.has(t) ? C(t) : v.protectedKeys[t] = !0)
                                            }
                                            v.prevProp = y, v.prevResolvedValues = S, v.isActive && (c = {
                                                ...c,
                                                ...S
                                            }), r && t.blockInitialAnimation && (T = !1), T && !b && u.push(...A.map(t => ({
                                                animation: t,
                                                options: {
                                                    type: g,
                                                    ...s
                                                }
                                            })))
                                        }
                                        if (h.size) {
                                            let e = {};
                                            h.forEach(i => {
                                                let r = t.getBaseTarget(i);
                                                void 0 !== r && (e[i] = r)
                                            }), u.push({
                                                animation: e
                                            })
                                        }
                                        let g = !!u.length;
                                        return r && !1 === a.initial && !t.manuallyAnimateOnMount && (g = !1), r = !1, g ? e(u) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges: s,
                                        setActive: function(e, r, n) {
                                            var o;
                                            if (i[e].isActive === r) return Promise.resolve();
                                            null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                                var i;
                                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, r)
                                            }), i[e].isActive = r;
                                            let a = s(n, e);
                                            for (let t in i) i[t].protectedKeys = {};
                                            return a
                                        },
                                        setAnimateFunction: function(i) {
                                            e = i(t)
                                        },
                                        getState: () => i
                                    }
                                }(t))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: t
                                } = this.node.getProps();
                                this.unmount(), f(t) && (this.unmount = t.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: t
                                } = this.node.getProps(), {
                                    animate: e
                                } = this.node.prevProps || {};
                                t !== e && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends tZ {
                            constructor() {
                                super(...arguments), this.id = i$++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let {
                                    isPresent: t,
                                    onExitComplete: e,
                                    custom: i
                                } = this.node.presenceContext, {
                                    isPresent: r
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || t === r) return;
                                let n = this.node.animationState.setActive("exit", !t, {
                                    custom: null != i ? i : this.node.getProps().custom
                                });
                                e && !t && n.then(() => e(this.id))
                            }
                            mount() {
                                let {
                                    register: t
                                } = this.node.presenceContext || {};
                                t && (this.unmount = t(this.id))
                            }
                            unmount() {}
                        }
                    },
                    inView: {
                        Feature: class extends tZ {
                            constructor() {
                                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: t = {}
                                } = this.node.getProps(), {
                                    root: e,
                                    margin: i,
                                    amount: r = "some",
                                    once: n
                                } = t, s = {
                                    root: e ? e.current : void 0,
                                    rootMargin: i,
                                    threshold: "number" == typeof r ? r : t3[r]
                                };
                                return function(t, e, i) {
                                    let r = function({
                                        root: t,
                                        ...e
                                    }) {
                                        let i = t || document;
                                        t1.has(i) || t1.set(i, {});
                                        let r = t1.get(i),
                                            n = JSON.stringify(e);
                                        return r[n] || (r[n] = new IntersectionObserver(t2, {
                                            root: t,
                                            ...e
                                        })), r[n]
                                    }(e);
                                    return t0.set(t, i), r.observe(t), () => {
                                        t0.delete(t), r.unobserve(t)
                                    }
                                }(this.node.current, s, t => {
                                    let {
                                        isIntersecting: e
                                    } = t;
                                    if (this.isInView === e || (this.isInView = e, n && !e && this.hasEnteredView)) return;
                                    e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                    let {
                                        onViewportEnter: i,
                                        onViewportLeave: r
                                    } = this.node.getProps(), s = e ? i : r;
                                    s && s(t)
                                })
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let {
                                    props: t,
                                    prevProps: e
                                } = this.node, i = ["amount", "margin", "root"].some(function({
                                    viewport: t = {}
                                }, {
                                    viewport: e = {}
                                } = {}) {
                                    return i => t[i] !== e[i]
                                }(t, e));
                                i && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends tZ {
                            constructor() {
                                super(...arguments), this.removeStartListeners = tM, this.removeEndListeners = tM, this.removeAccessibleListeners = tM, this.startPointerPress = (t, e) => {
                                    if (this.removeEndListeners(), this.isPressing) return;
                                    let i = this.node.getProps(),
                                        r = tW(window, "pointerup", (t, e) => {
                                            if (!this.checkPressEnd()) return;
                                            let {
                                                onTap: i,
                                                onTapCancel: r
                                            } = this.node.getProps();
                                            tR.update(() => {
                                                tJ(this.node.current, t.target) ? i && i(t, e) : r && r(t, e)
                                            })
                                        }, {
                                            passive: !(i.onTap || i.onPointerUp)
                                        }),
                                        n = tW(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                            passive: !(i.onTapCancel || i.onPointerCancel)
                                        });
                                    this.removeEndListeners = tz(r, n), this.startPress(t, e)
                                }, this.startAccessiblePress = () => {
                                    let t = tI(this.node.current, "keydown", t => {
                                            "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = tI(this.node.current, "keyup", t => {
                                                "Enter" === t.key && this.checkPressEnd() && tQ("up", (t, e) => {
                                                    let {
                                                        onTap: i
                                                    } = this.node.getProps();
                                                    i && tR.update(() => i(t, e))
                                                })
                                            }), tQ("down", (t, e) => {
                                                this.startPress(t, e)
                                            }))
                                        }),
                                        e = tI(this.node.current, "blur", () => {
                                            this.isPressing && tQ("cancel", (t, e) => this.cancelPress(t, e))
                                        });
                                    this.removeAccessibleListeners = tz(t, e)
                                }
                            }
                            startPress(t, e) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: i,
                                    whileTap: r
                                } = this.node.getProps();
                                r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && tR.update(() => i(t, e))
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), this.isPressing = !1;
                                let t = this.node.getProps();
                                return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !tq()
                            }
                            cancelPress(t, e) {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTapCancel: i
                                } = this.node.getProps();
                                i && tR.update(() => i(t, e))
                            }
                            mount() {
                                let t = this.node.getProps(),
                                    e = tW(this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(t.onTapStart || t.onPointerStart)
                                    }),
                                    i = tI(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = tz(e, i)
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends tZ {
                            constructor() {
                                super(...arguments), this.isActive = !1
                            }
                            onFocus() {
                                let t = !1;
                                try {
                                    t = this.node.current.matches(":focus-visible")
                                } catch (e) {
                                    t = !0
                                }
                                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                            }
                            mount() {
                                this.unmount = tz(tI(this.node.current, "focus", () => this.onFocus()), tI(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends tZ {
                            mount() {
                                this.unmount = tz(tK(this.node, !0), tK(this.node, !1))
                            }
                            unmount() {}
                        }
                    },
                    pan: {
                        Feature: class extends tZ {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = tM
                            }
                            onPointerDown(t) {
                                this.session = new iH(t, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: t,
                                    onPanStart: e,
                                    onPan: i,
                                    onPanEnd: r
                                } = this.node.getProps();
                                return {
                                    onSessionStart: ry(t),
                                    onStart: ry(e),
                                    onMove: i,
                                    onEnd: (t, e) => {
                                        delete this.session, r && tR.update(() => r(t, e))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = tW(this.node.current, "pointerdown", t => this.onPointerDown(t))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends tZ {
                            constructor(t) {
                                super(t), this.removeGroupControls = tM, this.removeListeners = tM, this.controls = new rg(t)
                            }
                            mount() {
                                let {
                                    dragControls: t
                                } = this.node.getProps();
                                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tM
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: nc,
                        MeasureLayout: rT
                    },
                    layout: {
                        ProjectionNode: nc,
                        MeasureLayout: rT
                    }
                },
                nU = function(t) {
                    function e(e, i = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: i,
                            useVisualState: r,
                            Component: n
                        }) {
                            t && function(t) {
                                for (let e in t) w[e] = {
                                    ...w[e],
                                    ...t[e]
                                }
                            }(t);
                            let s = (0, o.forwardRef)(function(s, f) {
                                var g;
                                let v;
                                let x = {
                                        ...(0, o.useContext)(a),
                                        ...s,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, o.useContext)(T).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(s)
                                    },
                                    {
                                        isStatic: b
                                    } = x,
                                    w = function(t) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = function(t, e) {
                                            if (y(t)) {
                                                let {
                                                    initial: e,
                                                    animate: i
                                                } = t;
                                                return {
                                                    initial: !1 === e || m(e) ? e : void 0,
                                                    animate: m(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, o.useContext)(l));
                                        return (0, o.useMemo)(() => ({
                                            initial: e,
                                            animate: i
                                        }), [P(e), P(i)])
                                    }(s),
                                    S = r(s, b);
                                if (!b && h) {
                                    w.visualElement = function(t, e, i, r) {
                                        let {
                                            visualElement: n
                                        } = (0, o.useContext)(l), s = (0, o.useContext)(d), h = (0, o.useContext)(u), p = (0, o.useContext)(a).reducedMotion, m = (0, o.useRef)();
                                        r = r || s.renderer, !m.current && r && (m.current = r(t, {
                                            visualState: e,
                                            parent: n,
                                            props: i,
                                            presenceContext: h,
                                            blockInitialAnimation: !!h && !1 === h.initial,
                                            reducedMotionConfig: p
                                        }));
                                        let f = m.current;
                                        (0, o.useInsertionEffect)(() => {
                                            f && f.update(i, h)
                                        });
                                        let g = (0, o.useRef)(!!window.HandoffAppearAnimations);
                                        return c(() => {
                                            f && (f.render(), g.current && f.animationState && f.animationState.animateChanges())
                                        }), (0, o.useEffect)(() => {
                                            f && (f.updateFeatures(), !g.current && f.animationState && f.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, g.current = !1)
                                        }), f
                                    }(n, S, x, e);
                                    let i = (0, o.useContext)(A),
                                        r = (0, o.useContext)(d).strict;
                                    w.visualElement && (v = w.visualElement.loadFeatures(x, r, t, i))
                                }
                                return o.createElement(l.Provider, {
                                    value: w
                                }, v && w.visualElement ? o.createElement(v, {
                                    visualElement: w.visualElement,
                                    ...x
                                }) : null, i(n, s, (g = w.visualElement, (0, o.useCallback)(t => {
                                    t && S.mount && S.mount(t), g && (t ? g.mount(t) : g.unmount()), f && ("function" == typeof f ? f(t) : p(f) && (f.current = t))
                                }, [g])), S, b, w.visualElement))
                            });
                            return s[S] = n, s
                        }(t(e, i))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let i = new Map;
                    return new Proxy(e, {
                        get: (t, r) => (i.has(r) || i.set(r, e(r)), i.get(r))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, i, r) {
                    let n = E(t) ? tB : tO;
                    return {
                        ...n,
                        preloadedFeatures: i,
                        useRender: function(t = !1) {
                            return (e, i, r, {
                                latestValues: n
                            }, s) => {
                                let a = E(e) ? tg : to,
                                    l = a(i, n, s, e),
                                    u = function(t, e, i) {
                                        let r = {};
                                        for (let n in t)("values" !== n || "object" != typeof t.values) && (tu(n) || !0 === i && tl(n) || !e && !tl(n) || t.draggable && n.startsWith("onDrag")) && (r[n] = t[n]);
                                        return r
                                    }(i, "string" == typeof e, t),
                                    h = {
                                        ...u,
                                        ...l,
                                        ref: r
                                    },
                                    {
                                        children: c
                                    } = i,
                                    d = (0, o.useMemo)(() => R(c) ? c.get() : c, [c]);
                                return (0, o.createElement)(e, {
                                    ...h,
                                    children: d
                                })
                            }
                        }(e),
                        createVisualElement: r,
                        Component: t
                    }
                })(t, e, nI, nO))
        }
    }
]);

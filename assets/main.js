(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/vanilla-headless@0.9.4/node_modules/vanilla-headless/build/index.js
  var require_build = __commonJS({
    "node_modules/.pnpm/vanilla-headless@0.9.4/node_modules/vanilla-headless/build/index.js"() {
      var nr = Object.defineProperty;
      var ar = (r, e, t) => e in r ? nr(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
      var R = (r, e, t) => (ar(r, typeof e != "symbol" ? e + "" : e, t), t);
      var De = (r, e, t) => {
        if (!e.has(r))
          throw TypeError("Cannot " + t);
      };
      var q = (r, e, t) => (De(r, e, "read from private field"), t ? t.call(r) : e.get(r));
      var Tt = (r, e, t) => {
        if (e.has(r))
          throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(r) : e.set(r, t);
      };
      var Y = (r, e, t, o) => (De(r, e, "write to private field"), o ? o.call(r, t) : e.set(r, t), t);
      var Zt = (r, e, t, o) => ({ set _(i) {
        Y(r, e, i, t);
      }, get _() {
        return q(r, e, o);
      } });
      var y = (r, e) => Array.from(r).includes(e.code);
      var k = "top";
      var B = "bottom";
      var S = "right";
      var P = "left";
      var _t = "auto";
      var it = [k, B, S, P];
      var Z = "start";
      var ft = "end";
      var Me = "clippingParents";
      var $t = "viewport";
      var xt = "popper";
      var Re = "reference";
      var te = it.reduce(function(r, e) {
        return r.concat([e + "-" + Z, e + "-" + ft]);
      }, []);
      var Ft = [].concat(it, [_t]).reduce(function(r, e) {
        return r.concat([e, e + "-" + Z, e + "-" + ft]);
      }, []);
      var sr = "beforeRead";
      var pr = "read";
      var lr = "afterRead";
      var dr = "beforeMain";
      var cr = "main";
      var fr = "afterMain";
      var ur = "beforeWrite";
      var mr = "write";
      var hr = "afterWrite";
      var Be = [sr, pr, lr, dr, cr, fr, ur, mr, hr];
      function N(r) {
        return r ? (r.nodeName || "").toLowerCase() : null;
      }
      function L(r) {
        if (r == null)
          return window;
        if (r.toString() !== "[object Window]") {
          var e = r.ownerDocument;
          return e && e.defaultView || window;
        }
        return r;
      }
      function F(r) {
        var e = L(r).Element;
        return r instanceof e || r instanceof Element;
      }
      function H(r) {
        var e = L(r).HTMLElement;
        return r instanceof e || r instanceof HTMLElement;
      }
      function Ot(r) {
        if (typeof ShadowRoot > "u")
          return false;
        var e = L(r).ShadowRoot;
        return r instanceof e || r instanceof ShadowRoot;
      }
      function vr(r) {
        var e = r.state;
        Object.keys(e.elements).forEach(function(t) {
          var o = e.styles[t] || {}, i = e.attributes[t] || {}, n = e.elements[t];
          !H(n) || !N(n) || (Object.assign(n.style, o), Object.keys(i).forEach(function(l) {
            var s = i[l];
            s === false ? n.removeAttribute(l) : n.setAttribute(l, s === true ? "" : s);
          }));
        });
      }
      function gr(r) {
        var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
        return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
          Object.keys(e.elements).forEach(function(o) {
            var i = e.elements[o], n = e.attributes[o] || {}, l = Object.keys(e.styles.hasOwnProperty(o) ? e.styles[o] : t[o]), s = l.reduce(function(a, d) {
              return a[d] = "", a;
            }, {});
            !H(i) || !N(i) || (Object.assign(i.style, s), Object.keys(n).forEach(function(a) {
              i.removeAttribute(a);
            }));
          });
        };
      }
      var He = { name: "applyStyles", enabled: true, phase: "write", fn: vr, effect: gr, requires: ["computeStyles"] };
      function K(r) {
        return r.split("-")[0];
      }
      var G = Math.max;
      var ut = Math.min;
      var tt = Math.round;
      function Lt() {
        var r = navigator.userAgentData;
        return r != null && r.brands ? r.brands.map(function(e) {
          return e.brand + "/" + e.version;
        }).join(" ") : navigator.userAgent;
      }
      function Dt() {
        return !/^((?!chrome|android).)*safari/i.test(Lt());
      }
      function U(r, e, t) {
        e === void 0 && (e = false), t === void 0 && (t = false);
        var o = r.getBoundingClientRect(), i = 1, n = 1;
        e && H(r) && (i = r.offsetWidth > 0 && tt(o.width) / r.offsetWidth || 1, n = r.offsetHeight > 0 && tt(o.height) / r.offsetHeight || 1);
        var l = F(r) ? L(r) : window, s = l.visualViewport, a = !Dt() && t, d = (o.left + (a && s ? s.offsetLeft : 0)) / i, p = (o.top + (a && s ? s.offsetTop : 0)) / n, h = o.width / i, b = o.height / n;
        return { width: h, height: b, top: p, right: d + h, bottom: p + b, left: d, x: d, y: p };
      }
      function mt(r) {
        var e = U(r), t = r.offsetWidth, o = r.offsetHeight;
        return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - o) <= 1 && (o = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: o };
      }
      function Mt(r, e) {
        var t = e.getRootNode && e.getRootNode();
        if (r.contains(e))
          return true;
        if (t && Ot(t)) {
          var o = e;
          do {
            if (o && r.isSameNode(o))
              return true;
            o = o.parentNode || o.host;
          } while (o);
        }
        return false;
      }
      function V(r) {
        return L(r).getComputedStyle(r);
      }
      function ee(r) {
        return ["table", "td", "th"].indexOf(N(r)) >= 0;
      }
      function I(r) {
        return ((F(r) ? r.ownerDocument : r.document) || window.document).documentElement;
      }
      function et(r) {
        return N(r) === "html" ? r : r.assignedSlot || r.parentNode || (Ot(r) ? r.host : null) || I(r);
      }
      function Ne(r) {
        return !H(r) || V(r).position === "fixed" ? null : r.offsetParent;
      }
      function br(r) {
        var e = /firefox/i.test(Lt()), t = /Trident/i.test(Lt());
        if (t && H(r)) {
          var o = V(r);
          if (o.position === "fixed")
            return null;
        }
        var i = et(r);
        for (Ot(i) && (i = i.host); H(i) && ["html", "body"].indexOf(N(i)) < 0; ) {
          var n = V(i);
          if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || e && n.willChange === "filter" || e && n.filter && n.filter !== "none")
            return i;
          i = i.parentNode;
        }
        return null;
      }
      function J(r) {
        for (var e = L(r), t = Ne(r); t && ee(t) && V(t).position === "static"; )
          t = Ne(t);
        return t && (N(t) === "html" || N(t) === "body" && V(t).position === "static") ? e : t || br(r) || e;
      }
      function ht(r) {
        return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
      }
      function vt(r, e, t) {
        return G(r, ut(e, t));
      }
      function Ke(r, e, t) {
        var o = vt(r, e, t);
        return o > t ? t : o;
      }
      function Rt() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function Bt(r) {
        return Object.assign({}, Rt(), r);
      }
      function Ht(r, e) {
        return e.reduce(function(t, o) {
          return t[o] = r, t;
        }, {});
      }
      var yr = function(e, t) {
        return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Bt(typeof e != "number" ? e : Ht(e, it));
      };
      function Er(r) {
        var e, t = r.state, o = r.name, i = r.options, n = t.elements.arrow, l = t.modifiersData.popperOffsets, s = K(t.placement), a = ht(s), d = [P, S].indexOf(s) >= 0, p = d ? "height" : "width";
        if (!(!n || !l)) {
          var h = yr(i.padding, t), b = mt(n), c = a === "y" ? k : P, w = a === "y" ? B : S, u = t.rects.reference[p] + t.rects.reference[a] - l[a] - t.rects.popper[p], f = l[a] - t.rects.reference[a], E = J(n), A = E ? a === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, C = u / 2 - f / 2, m = h[c], v = A - b[p] - h[w], g = A / 2 - b[p] / 2 + C, O = vt(m, g, v), T = a;
          t.modifiersData[o] = (e = {}, e[T] = O, e.centerOffset = O - g, e);
        }
      }
      function wr(r) {
        var e = r.state, t = r.options, o = t.element, i = o === void 0 ? "[data-popper-arrow]" : o;
        i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Mt(e.elements.popper, i) && (e.elements.arrow = i));
      }
      var We = { name: "arrow", enabled: true, phase: "main", fn: Er, effect: wr, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
      function z(r) {
        return r.split("-")[1];
      }
      var xr = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Or(r) {
        var e = r.x, t = r.y, o = window, i = o.devicePixelRatio || 1;
        return { x: tt(e * i) / i || 0, y: tt(t * i) / i || 0 };
      }
      function Ie(r) {
        var e, t = r.popper, o = r.popperRect, i = r.placement, n = r.variation, l = r.offsets, s = r.position, a = r.gpuAcceleration, d = r.adaptive, p = r.roundOffsets, h = r.isFixed, b = l.x, c = b === void 0 ? 0 : b, w = l.y, u = w === void 0 ? 0 : w, f = typeof p == "function" ? p({ x: c, y: u }) : { x: c, y: u };
        c = f.x, u = f.y;
        var E = l.hasOwnProperty("x"), A = l.hasOwnProperty("y"), C = P, m = k, v = window;
        if (d) {
          var g = J(t), O = "clientHeight", T = "clientWidth";
          if (g === L(t) && (g = I(t), V(g).position !== "static" && s === "absolute" && (O = "scrollHeight", T = "scrollWidth")), g = g, i === k || (i === P || i === S) && n === ft) {
            m = B;
            var D = h && g === v && v.visualViewport ? v.visualViewport.height : g[O];
            u -= D - o.height, u *= a ? 1 : -1;
          }
          if (i === P || (i === k || i === B) && n === ft) {
            C = S;
            var M = h && g === v && v.visualViewport ? v.visualViewport.width : g[T];
            c -= M - o.width, c *= a ? 1 : -1;
          }
        }
        var x = Object.assign({ position: s }, d && xr), _ = p === true ? Or({ x: c, y: u }) : { x: c, y: u };
        if (c = _.x, u = _.y, a) {
          var j;
          return Object.assign({}, x, (j = {}, j[m] = A ? "0" : "", j[C] = E ? "0" : "", j.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + u + "px)" : "translate3d(" + c + "px, " + u + "px, 0)", j));
        }
        return Object.assign({}, x, (e = {}, e[m] = A ? u + "px" : "", e[C] = E ? c + "px" : "", e.transform = "", e));
      }
      function Lr(r) {
        var e = r.state, t = r.options, o = t.gpuAcceleration, i = o === void 0 ? true : o, n = t.adaptive, l = n === void 0 ? true : n, s = t.roundOffsets, a = s === void 0 ? true : s;
        if (false)
          var d;
        var p = { placement: K(e.placement), variation: z(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: i, isFixed: e.options.strategy === "fixed" };
        e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Ie(Object.assign({}, p, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: l, roundOffsets: a })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Ie(Object.assign({}, p, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: a })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
      }
      var je = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Lr, data: {} };
      var Ut = { passive: true };
      function kr(r) {
        var e = r.state, t = r.instance, o = r.options, i = o.scroll, n = i === void 0 ? true : i, l = o.resize, s = l === void 0 ? true : l, a = L(e.elements.popper), d = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return n && d.forEach(function(p) {
          p.addEventListener("scroll", t.update, Ut);
        }), s && a.addEventListener("resize", t.update, Ut), function() {
          n && d.forEach(function(p) {
            p.removeEventListener("scroll", t.update, Ut);
          }), s && a.removeEventListener("resize", t.update, Ut);
        };
      }
      var qe = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
      }, effect: kr, data: {} };
      var Ar = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function kt(r) {
        return r.replace(/left|right|bottom|top/g, function(e) {
          return Ar[e];
        });
      }
      var Cr = { start: "end", end: "start" };
      function zt(r) {
        return r.replace(/start|end/g, function(e) {
          return Cr[e];
        });
      }
      function gt(r) {
        var e = L(r), t = e.pageXOffset, o = e.pageYOffset;
        return { scrollLeft: t, scrollTop: o };
      }
      function bt(r) {
        return U(I(r)).left + gt(r).scrollLeft;
      }
      function re(r, e) {
        var t = L(r), o = I(r), i = t.visualViewport, n = o.clientWidth, l = o.clientHeight, s = 0, a = 0;
        if (i) {
          n = i.width, l = i.height;
          var d = Dt();
          (d || !d && e === "fixed") && (s = i.offsetLeft, a = i.offsetTop);
        }
        return { width: n, height: l, x: s + bt(r), y: a };
      }
      function oe(r) {
        var e, t = I(r), o = gt(r), i = (e = r.ownerDocument) == null ? void 0 : e.body, n = G(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = G(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -o.scrollLeft + bt(r), a = -o.scrollTop;
        return V(i || t).direction === "rtl" && (s += G(t.clientWidth, i ? i.clientWidth : 0) - n), { width: n, height: l, x: s, y: a };
      }
      function yt(r) {
        var e = V(r), t = e.overflow, o = e.overflowX, i = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(t + i + o);
      }
      function Xt(r) {
        return ["html", "body", "#document"].indexOf(N(r)) >= 0 ? r.ownerDocument.body : H(r) && yt(r) ? r : Xt(et(r));
      }
      function nt(r, e) {
        var t;
        e === void 0 && (e = []);
        var o = Xt(r), i = o === ((t = r.ownerDocument) == null ? void 0 : t.body), n = L(o), l = i ? [n].concat(n.visualViewport || [], yt(o) ? o : []) : o, s = e.concat(l);
        return i ? s : s.concat(nt(et(l)));
      }
      function At(r) {
        return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
      }
      function Pr(r, e) {
        var t = U(r, false, e === "fixed");
        return t.top = t.top + r.clientTop, t.left = t.left + r.clientLeft, t.bottom = t.top + r.clientHeight, t.right = t.left + r.clientWidth, t.width = r.clientWidth, t.height = r.clientHeight, t.x = t.left, t.y = t.top, t;
      }
      function Ve(r, e, t) {
        return e === $t ? At(re(r, t)) : F(e) ? Pr(e, t) : At(oe(I(r)));
      }
      function Sr(r) {
        var e = nt(et(r)), t = ["absolute", "fixed"].indexOf(V(r).position) >= 0, o = t && H(r) ? J(r) : r;
        return F(o) ? e.filter(function(i) {
          return F(i) && Mt(i, o) && N(i) !== "body";
        }) : [];
      }
      function ie(r, e, t, o) {
        var i = e === "clippingParents" ? Sr(r) : [].concat(e), n = [].concat(i, [t]), l = n[0], s = n.reduce(function(a, d) {
          var p = Ve(r, d, o);
          return a.top = G(p.top, a.top), a.right = ut(p.right, a.right), a.bottom = ut(p.bottom, a.bottom), a.left = G(p.left, a.left), a;
        }, Ve(r, l, o));
        return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
      }
      function Nt(r) {
        var e = r.reference, t = r.element, o = r.placement, i = o ? K(o) : null, n = o ? z(o) : null, l = e.x + e.width / 2 - t.width / 2, s = e.y + e.height / 2 - t.height / 2, a;
        switch (i) {
          case k:
            a = { x: l, y: e.y - t.height };
            break;
          case B:
            a = { x: l, y: e.y + e.height };
            break;
          case S:
            a = { x: e.x + e.width, y: s };
            break;
          case P:
            a = { x: e.x - t.width, y: s };
            break;
          default:
            a = { x: e.x, y: e.y };
        }
        var d = i ? ht(i) : null;
        if (d != null) {
          var p = d === "y" ? "height" : "width";
          switch (n) {
            case Z:
              a[d] = a[d] - (e[p] / 2 - t[p] / 2);
              break;
            case ft:
              a[d] = a[d] + (e[p] / 2 - t[p] / 2);
              break;
            default:
          }
        }
        return a;
      }
      function Q(r, e) {
        e === void 0 && (e = {});
        var t = e, o = t.placement, i = o === void 0 ? r.placement : o, n = t.strategy, l = n === void 0 ? r.strategy : n, s = t.boundary, a = s === void 0 ? Me : s, d = t.rootBoundary, p = d === void 0 ? $t : d, h = t.elementContext, b = h === void 0 ? xt : h, c = t.altBoundary, w = c === void 0 ? false : c, u = t.padding, f = u === void 0 ? 0 : u, E = Bt(typeof f != "number" ? f : Ht(f, it)), A = b === xt ? Re : xt, C = r.rects.popper, m = r.elements[w ? A : b], v = ie(F(m) ? m : m.contextElement || I(r.elements.popper), a, p, l), g = U(r.elements.reference), O = Nt({ reference: g, element: C, strategy: "absolute", placement: i }), T = At(Object.assign({}, C, O)), D = b === xt ? T : g, M = { top: v.top - D.top + E.top, bottom: D.bottom - v.bottom + E.bottom, left: v.left - D.left + E.left, right: D.right - v.right + E.right }, x = r.modifiersData.offset;
        if (b === xt && x) {
          var _ = x[i];
          Object.keys(M).forEach(function(j) {
            var st = [S, B].indexOf(j) >= 0 ? 1 : -1, pt = [k, B].indexOf(j) >= 0 ? "y" : "x";
            M[j] += _[pt] * st;
          });
        }
        return M;
      }
      function ne(r, e) {
        e === void 0 && (e = {});
        var t = e, o = t.placement, i = t.boundary, n = t.rootBoundary, l = t.padding, s = t.flipVariations, a = t.allowedAutoPlacements, d = a === void 0 ? Ft : a, p = z(o), h = p ? s ? te : te.filter(function(w) {
          return z(w) === p;
        }) : it, b = h.filter(function(w) {
          return d.indexOf(w) >= 0;
        });
        b.length === 0 && (b = h);
        var c = b.reduce(function(w, u) {
          return w[u] = Q(r, { placement: u, boundary: i, rootBoundary: n, padding: l })[K(u)], w;
        }, {});
        return Object.keys(c).sort(function(w, u) {
          return c[w] - c[u];
        });
      }
      function Tr(r) {
        if (K(r) === _t)
          return [];
        var e = kt(r);
        return [zt(r), e, zt(e)];
      }
      function Dr(r) {
        var e = r.state, t = r.options, o = r.name;
        if (!e.modifiersData[o]._skip) {
          for (var i = t.mainAxis, n = i === void 0 ? true : i, l = t.altAxis, s = l === void 0 ? true : l, a = t.fallbackPlacements, d = t.padding, p = t.boundary, h = t.rootBoundary, b = t.altBoundary, c = t.flipVariations, w = c === void 0 ? true : c, u = t.allowedAutoPlacements, f = e.options.placement, E = K(f), A = E === f, C = a || (A || !w ? [kt(f)] : Tr(f)), m = [f].concat(C).reduce(function(wt, ot) {
            return wt.concat(K(ot) === _t ? ne(e, { placement: ot, boundary: p, rootBoundary: h, padding: d, flipVariations: w, allowedAutoPlacements: u }) : ot);
          }, []), v = e.rects.reference, g = e.rects.popper, O = /* @__PURE__ */ new Map(), T = true, D = m[0], M = 0; M < m.length; M++) {
            var x = m[M], _ = K(x), j = z(x) === Z, st = [k, B].indexOf(_) >= 0, pt = st ? "width" : "height", $ = Q(e, { placement: x, boundary: p, rootBoundary: h, altBoundary: b, padding: d }), X = st ? j ? S : P : j ? B : k;
            v[pt] > g[pt] && (X = kt(X));
            var Wt = kt(X), lt = [];
            if (n && lt.push($[_] <= 0), s && lt.push($[X] <= 0, $[Wt] <= 0), lt.every(function(wt) {
              return wt;
            })) {
              D = x, T = false;
              break;
            }
            O.set(x, lt);
          }
          if (T)
            for (var It = w ? 3 : 1, Yt = function(ot) {
              var St = m.find(function(qt) {
                var dt = O.get(qt);
                if (dt)
                  return dt.slice(0, ot).every(function(Gt) {
                    return Gt;
                  });
              });
              if (St)
                return D = St, "break";
            }, Pt = It; Pt > 0; Pt--) {
              var jt = Yt(Pt);
              if (jt === "break")
                break;
            }
          e.placement !== D && (e.modifiersData[o]._skip = true, e.placement = D, e.reset = true);
        }
      }
      var _e = { name: "flip", enabled: true, phase: "main", fn: Dr, requiresIfExists: ["offset"], data: { _skip: false } };
      function $e(r, e, t) {
        return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
      }
      function Fe(r) {
        return [k, S, B, P].some(function(e) {
          return r[e] >= 0;
        });
      }
      function Mr(r) {
        var e = r.state, t = r.name, o = e.rects.reference, i = e.rects.popper, n = e.modifiersData.preventOverflow, l = Q(e, { elementContext: "reference" }), s = Q(e, { altBoundary: true }), a = $e(l, o), d = $e(s, i, n), p = Fe(a), h = Fe(d);
        e.modifiersData[t] = { referenceClippingOffsets: a, popperEscapeOffsets: d, isReferenceHidden: p, hasPopperEscaped: h }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": h });
      }
      var Ue = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Mr };
      function Rr(r, e, t) {
        var o = K(r), i = [P, k].indexOf(o) >= 0 ? -1 : 1, n = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, l = n[0], s = n[1];
        return l = l || 0, s = (s || 0) * i, [P, S].indexOf(o) >= 0 ? { x: s, y: l } : { x: l, y: s };
      }
      function Br(r) {
        var e = r.state, t = r.options, o = r.name, i = t.offset, n = i === void 0 ? [0, 0] : i, l = Ft.reduce(function(p, h) {
          return p[h] = Rr(h, e.rects, n), p;
        }, {}), s = l[e.placement], a = s.x, d = s.y;
        e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += d), e.modifiersData[o] = l;
      }
      var ze = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Br };
      function Hr(r) {
        var e = r.state, t = r.name;
        e.modifiersData[t] = Nt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
      }
      var Xe = { name: "popperOffsets", enabled: true, phase: "read", fn: Hr, data: {} };
      function ae(r) {
        return r === "x" ? "y" : "x";
      }
      function Nr(r) {
        var e = r.state, t = r.options, o = r.name, i = t.mainAxis, n = i === void 0 ? true : i, l = t.altAxis, s = l === void 0 ? false : l, a = t.boundary, d = t.rootBoundary, p = t.altBoundary, h = t.padding, b = t.tether, c = b === void 0 ? true : b, w = t.tetherOffset, u = w === void 0 ? 0 : w, f = Q(e, { boundary: a, rootBoundary: d, padding: h, altBoundary: p }), E = K(e.placement), A = z(e.placement), C = !A, m = ht(E), v = ae(m), g = e.modifiersData.popperOffsets, O = e.rects.reference, T = e.rects.popper, D = typeof u == "function" ? u(Object.assign({}, e.rects, { placement: e.placement })) : u, M = typeof D == "number" ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D), x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, _ = { x: 0, y: 0 };
        if (g) {
          if (n) {
            var j, st = m === "y" ? k : P, pt = m === "y" ? B : S, $ = m === "y" ? "height" : "width", X = g[m], Wt = X + f[st], lt = X - f[pt], It = c ? -T[$] / 2 : 0, Yt = A === Z ? O[$] : T[$], Pt = A === Z ? -T[$] : -O[$], jt = e.elements.arrow, wt = c && jt ? mt(jt) : { width: 0, height: 0 }, ot = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Rt(), St = ot[st], qt = ot[pt], dt = vt(0, O[$], wt[$]), Gt = C ? O[$] / 2 - It - dt - St - M.mainAxis : Yt - dt - St - M.mainAxis, Ze = C ? -O[$] / 2 + It + dt + qt + M.mainAxis : Pt + dt + qt + M.mainAxis, Jt = e.elements.arrow && J(e.elements.arrow), tr = Jt ? m === "y" ? Jt.clientTop || 0 : Jt.clientLeft || 0 : 0, xe = (j = x == null ? void 0 : x[m]) != null ? j : 0, er = X + Gt - xe - tr, rr = X + Ze - xe, Oe = vt(c ? ut(Wt, er) : Wt, X, c ? G(lt, rr) : lt);
            g[m] = Oe, _[m] = Oe - X;
          }
          if (s) {
            var Le, or = m === "x" ? k : P, ir = m === "x" ? B : S, ct = g[v], Vt = v === "y" ? "height" : "width", ke = ct + f[or], Ae = ct - f[ir], Qt = [k, P].indexOf(E) !== -1, Ce = (Le = x == null ? void 0 : x[v]) != null ? Le : 0, Pe = Qt ? ke : ct - O[Vt] - T[Vt] - Ce + M.altAxis, Se = Qt ? ct + O[Vt] + T[Vt] - Ce - M.altAxis : Ae, Te = c && Qt ? Ke(Pe, ct, Se) : vt(c ? Pe : ke, ct, c ? Se : Ae);
            g[v] = Te, _[v] = Te - ct;
          }
          e.modifiersData[o] = _;
        }
      }
      var Ye = { name: "preventOverflow", enabled: true, phase: "main", fn: Nr, requiresIfExists: ["offset"] };
      function se(r) {
        return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
      }
      function pe(r) {
        return r === L(r) || !H(r) ? gt(r) : se(r);
      }
      function Kr(r) {
        var e = r.getBoundingClientRect(), t = tt(e.width) / r.offsetWidth || 1, o = tt(e.height) / r.offsetHeight || 1;
        return t !== 1 || o !== 1;
      }
      function le(r, e, t) {
        t === void 0 && (t = false);
        var o = H(e), i = H(e) && Kr(e), n = I(e), l = U(r, i, t), s = { scrollLeft: 0, scrollTop: 0 }, a = { x: 0, y: 0 };
        return (o || !o && !t) && ((N(e) !== "body" || yt(n)) && (s = pe(e)), H(e) ? (a = U(e, true), a.x += e.clientLeft, a.y += e.clientTop) : n && (a.x = bt(n))), { x: l.left + s.scrollLeft - a.x, y: l.top + s.scrollTop - a.y, width: l.width, height: l.height };
      }
      function Wr(r) {
        var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), o = [];
        r.forEach(function(n) {
          e.set(n.name, n);
        });
        function i(n) {
          t.add(n.name);
          var l = [].concat(n.requires || [], n.requiresIfExists || []);
          l.forEach(function(s) {
            if (!t.has(s)) {
              var a = e.get(s);
              a && i(a);
            }
          }), o.push(n);
        }
        return r.forEach(function(n) {
          t.has(n.name) || i(n);
        }), o;
      }
      function de(r) {
        var e = Wr(r);
        return Be.reduce(function(t, o) {
          return t.concat(e.filter(function(i) {
            return i.phase === o;
          }));
        }, []);
      }
      function ce(r) {
        var e;
        return function() {
          return e || (e = new Promise(function(t) {
            Promise.resolve().then(function() {
              e = void 0, t(r());
            });
          })), e;
        };
      }
      function fe(r) {
        var e = r.reduce(function(t, o) {
          var i = t[o.name];
          return t[o.name] = i ? Object.assign({}, i, o, { options: Object.assign({}, i.options, o.options), data: Object.assign({}, i.data, o.data) }) : o, t;
        }, {});
        return Object.keys(e).map(function(t) {
          return e[t];
        });
      }
      var Ge = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Je() {
        for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
          e[t] = arguments[t];
        return !e.some(function(o) {
          return !(o && typeof o.getBoundingClientRect == "function");
        });
      }
      function Qe(r) {
        r === void 0 && (r = {});
        var e = r, t = e.defaultModifiers, o = t === void 0 ? [] : t, i = e.defaultOptions, n = i === void 0 ? Ge : i;
        return function(s, a, d) {
          d === void 0 && (d = n);
          var p = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ge, n), modifiersData: {}, elements: { reference: s, popper: a }, attributes: {}, styles: {} }, h = [], b = false, c = { state: p, setOptions: function(E) {
            var A = typeof E == "function" ? E(p.options) : E;
            u(), p.options = Object.assign({}, n, p.options, A), p.scrollParents = { reference: F(s) ? nt(s) : s.contextElement ? nt(s.contextElement) : [], popper: nt(a) };
            var C = de(fe([].concat(o, p.options.modifiers)));
            if (p.orderedModifiers = C.filter(function(x) {
              return x.enabled;
            }), false) {
              var m;
              if (getBasePlacement(p.options.placement) === auto)
                var v;
              var g, O, T, D, M;
            }
            return w(), c.update();
          }, forceUpdate: function() {
            if (!b) {
              var E = p.elements, A = E.reference, C = E.popper;
              if (Je(A, C)) {
                p.rects = { reference: le(A, J(C), p.options.strategy === "fixed"), popper: mt(C) }, p.reset = false, p.placement = p.options.placement, p.orderedModifiers.forEach(function(x) {
                  return p.modifiersData[x.name] = Object.assign({}, x.data);
                });
                for (var m = 0, v = 0; v < p.orderedModifiers.length; v++) {
                  if (p.reset === true) {
                    p.reset = false, v = -1;
                    continue;
                  }
                  var g = p.orderedModifiers[v], O = g.fn, T = g.options, D = T === void 0 ? {} : T, M = g.name;
                  typeof O == "function" && (p = O({ state: p, options: D, name: M, instance: c }) || p);
                }
              }
            }
          }, update: ce(function() {
            return new Promise(function(f) {
              c.forceUpdate(), f(p);
            });
          }), destroy: function() {
            u(), b = true;
          } };
          if (!Je(s, a))
            return c;
          c.setOptions(d).then(function(f) {
            !b && d.onFirstUpdate && d.onFirstUpdate(f);
          });
          function w() {
            p.orderedModifiers.forEach(function(f) {
              var E = f.name, A = f.options, C = A === void 0 ? {} : A, m = f.effect;
              if (typeof m == "function") {
                var v = m({ state: p, name: E, instance: c, options: C }), g = function() {
                };
                h.push(v || g);
              }
            });
          }
          function u() {
            h.forEach(function(f) {
              return f();
            }), h = [];
          }
          return c;
        };
      }
      var Ir = [qe, Xe, je, He, ze, _e, Ye, We, Ue];
      var ue = Qe({ defaultModifiers: Ir });
      var rt = class extends HTMLElement {
        constructor() {
          super();
          R(this, "button");
          R(this, "mainContainer");
          R(this, "createPopper");
          R(this, "initialDisplayStyle");
          this.button = this.querySelector("[aria-haspopup][aria-expanded]"), this.mainContainer = this.querySelector("[aria-labelledby]"), this.createPopper = ue, this.initialDisplayStyle = "block";
        }
        get placement() {
          var t;
          return this.hasAttribute("placement") ? (t = this.getAttribute("placement")) == null ? void 0 : t.split(/(?:,| )+/g) : ["bottom", "bottom"];
        }
        get offset() {
          var t;
          return ((t = this.getAttribute("offset")) == null ? void 0 : t.split(/(?:,| )+/g).map(function(o) {
            return parseInt(o, 10);
          })) || [0, 0];
        }
        get expanded() {
          var t;
          return ((t = this.button) == null ? void 0 : t.getAttribute("aria-expanded")) === "true";
        }
        set expanded(t) {
          var o;
          (o = this.button) == null || o.setAttribute("aria-expanded", t.toString());
        }
        get hiddenAttribute() {
          var t;
          return !!((t = this.mainContainer) != null && t.hasAttribute("hidden"));
        }
        set hiddenAttribute(t) {
          this.mainContainer && (this.mainContainer.hidden = t);
        }
        get isDisabled() {
          var t;
          return (t = this.button) == null ? void 0 : t.hasAttribute("disabled");
        }
        get popper() {
          return this.getAttribute("popper") === "" || this.getAttribute("popper") === "true";
        }
        connectedCallback() {
          var t, o;
          !this.expanded && !((t = this.mainContainer) != null && t.hasAttribute("hidden")) && (this.hiddenAttribute = true), this.expanded && (this.hiddenAttribute = !this.expanded), (this.isDisabled || !this.expanded) && this.close(), (o = this.mainContainer) == null || o.setAttribute("tabIndex", "-1"), this.addEventListeners(), this.popper && this.popperInit(), this.checkRequirements();
        }
        disconnectedCallback() {
          this.removeEventListeners();
        }
        checkRequirements() {
          this.button || console.log('%c A button element with attribute "aria-haspopup" and "aria-expanded" is required', "color:red;background-color:pink;font-size:18px; padding: 3px; border-radius: 3px; border: red 1px solid;"), this.mainContainer || console.log('%c A div element with attribute "aria-labelledby" is required', "color:red;background-color:pink;font-size:18px; padding: 3px; border-radius: 3px; border: red 1px solid;");
        }
        addEventListeners() {
          var t, o;
          (t = this.button) == null || t.addEventListener("click", this.toggleOpen.bind(this)), (o = this.button) == null || o.addEventListener("keydown", this.buttonKeyEvent.bind(this)), window.addEventListener("keydown", this.closeOnExitKeyDown.bind(this)), window.addEventListener("click", this.closeOnClickOutSide.bind(this));
        }
        removeEventListeners() {
          var t, o;
          (t = this.button) == null || t.removeEventListener("click", this.toggleOpen), (o = this.button) == null || o.removeEventListener("keydown", this.buttonKeyEvent), window.removeEventListener("keydown", this.closeOnExitKeyDown), window.removeEventListener("click", this.closeOnClickOutSide);
        }
        popperInit() {
          this.mainContainer && this.createPopper(this, this.mainContainer, { placement: this.placement[0], modifiers: [{ name: "offset", options: { offset: this.offset } }, { name: "flip", options: { fallbackPlacements: [this.placement[0], this.placement[1]] } }, { name: "arrow", options: { element: this.querySelector("[data-popper-arrow]"), padding: 5 } }] });
        }
        open() {
          this.expanded = true, this.hiddenAttribute = false, this.popper && this.popperInit(), this.mainContainer && (this.mainContainer.style.display = this.initialDisplayStyle);
        }
        close() {
          this.expanded = false, this.hiddenAttribute = true, this.mainContainer && (this.mainContainer.style.display = "none");
        }
        toggleOpen() {
          this.expanded ? this.close() : this.open();
        }
        buttonKeyEvent(t) {
          y(["Space", "Enter"], t) && (t.preventDefault(), this.toggleOpen()), y(["Escape"], t) && this.close(), y(["ArrowDown", "ArrowUp"], t) && (t.preventDefault(), this.open());
        }
        closeOnClickOutSide(t) {
          t instanceof MouseEvent && !this.contains(t.target) && this.expanded && this.close();
        }
        closeOnExitKeyDown(t) {
          y(["Escape"], t) && this.close();
        }
      };
      var me = class extends rt {
        constructor() {
          super();
        }
      };
      customElements.define("headless-popover", me);
      var W;
      var Et;
      var Kt = class extends rt {
        constructor() {
          super();
          R(this, "menuItems");
          Tt(this, W, void 0);
          Tt(this, Et, void 0);
          R(this, "_current");
          Y(this, W, 0), this.menuItems = this.querySelectorAll('[role="menuitem"]'), this._current = this.getAttribute("current") || "page", Y(this, Et, -1), this.menuItems.length < 1 && console.log("%c headless-dropdown require at least 1 item with attribute role fof menuitem", "color:red;background-color:pink;font-size:18px; padding: 3px; border-radius: 3px; border: red 1px solid;");
        }
        get current() {
          return this.getAttribute("current") || "page";
        }
        addEventListeners() {
          super.addEventListeners(), this.menuItems.forEach((t) => t.addEventListener("keydown", this.itemsKeyEvent.bind(this))), this.menuItems.forEach((t) => t.addEventListener("click", this.itemClickEvent.bind(this)));
        }
        removeEventListeners() {
          super.removeEventListeners(), this.menuItems.forEach((t) => t.removeEventListener("keydown", this.itemsKeyEvent)), this.menuItems.forEach((t) => t.removeEventListener("click", this.itemClickEvent));
        }
        buttonKeyEvent(t) {
          y(["Space", "Enter"], t) && (t.preventDefault(), this.toggleOpen()), y(["Escape"], t) && this.close(), y(["ArrowDown", "ArrowUp"], t) && (t.preventDefault(), this.open(), this.focusOnElement(q(this, W)));
        }
        close() {
          super.close(), Y(this, W, 0);
        }
        itemsKeyEvent(t) {
          this.navigateKeys(t), y(["Enter"], t) && this.markAsCurrent(t), this.focusOnElement(q(this, W));
        }
        navigateKeys(t) {
          y(["Enter"], t) || t.preventDefault(), y(["Enter", "Space"], t) && this.close(), (y(["ArrowDown", "ArrowRight"], t) && q(this, W) < this.menuItems.length - 1 || !t.shiftKey && y(["Tab"], t) && q(this, W) < this.menuItems.length - 1) && Zt(this, W)._++, (y(["ArrowUp", "ArrowLeft"], t) && q(this, W) > 0 || t.shiftKey && y(["Tab"], t) && q(this, W) > -1) && (Zt(this, W)._--, q(this, W) === -1 && this.button.focus()), y(["Home"], t) && q(this, W) > 0 && Y(this, W, 0), y(["End"], t) && q(this, W) < this.menuItems.length && Y(this, W, this.menuItems.length - 1);
        }
        itemClickEvent(t) {
          this.markAsCurrent(t), this.close();
        }
        markAsCurrent(t) {
          this.menuItems.forEach((o) => o.removeAttribute("aria-current")), Y(this, Et, Array.from(this.menuItems).indexOf(t.target)), q(this, Et) >= 0 && this.menuItems[q(this, Et)].setAttribute("aria-current", this.current);
        }
        focusOnElement(t) {
          var o;
          (o = this.menuItems[t]) == null || o.focus();
        }
      };
      W = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap();
      customElements.define("headless-dropdown", Kt);
      var he = class extends rt {
        constructor() {
          var t;
          super();
          this.button = this.querySelector("[aria-controls][aria-expanded]"), this.mainContainer = this.querySelector(`#${(t = this.button) == null ? void 0 : t.getAttribute("aria-controls")}`), this.dataset.state = this.ariaExpanded === "true" ? "open" : "close", this.updateAttributeState(String(this.dataset.state));
        }
        static get observedAttributes() {
          return ["data-state"];
        }
        get states() {
          return this.querySelectorAll("[data-state]");
        }
        attributeChangedCallback(t, o, i) {
          t === "data-state" && o !== i && (this.updateAttributeState(i), i === "open" ? this.open() : i === "close" && this.close());
        }
        checkRequirements() {
          this.button || console.log('c% A button element with attribute "aria-controls" and "aria-expanded" is required', "color:red;background-color:pink;font-size:18px; padding: 3px; border-radius: 3px; border: red 1px solid;"), this.mainContainer || console.log('c% A div element with ID equals button "aria-controls" is required', "color:red;background-color:pink;font-size:18px; padding: 3px; border-radius: 3px; border: red 1px solid;");
        }
        addEventListeners() {
          super.addEventListeners(), window.addEventListener("resize", this.closeOnResize.bind(this));
        }
        removeEventListeners() {
          super.removeEventListeners(), window.removeEventListener("resize", this.closeOnResize);
        }
        buttonKeyEvent(t) {
          y(["Space", "Enter"], t) && (t.preventDefault(), this.toggleOpen()), y(["Escape"], t) && this.close();
        }
        open() {
          super.open(), this.dataset.state = "open";
        }
        close() {
          super.close(), this.dataset.state = "close";
        }
        updateAttributeState(t) {
          this.states.forEach((o) => o.dataset.state = t);
        }
        closeOnResize() {
          this.close();
        }
      };
      customElements.define("headless-navigation", he);
      var ve = class extends HTMLElement {
        constructor() {
          super();
          R(this, "buttons");
          this.buttons = this.querySelectorAll("button[aria-controls]");
        }
        connectedCallback() {
          var t;
          (t = this.buttons) == null || t.forEach((o) => {
            o.addEventListener("click", this.toggleVisibility.bind(this));
          }), this.hideContent();
        }
        disconnectedCallback() {
          var t;
          (t = this.buttons) == null || t.forEach((o) => {
            o.removeEventListener("click", this.toggleVisibility);
          });
        }
        childSection(t) {
          return this.querySelector(`#${t == null ? void 0 : t.getAttribute("aria-controls")}`);
        }
        changeHidden(t, o) {
          t && (t.hidden = o);
        }
        hideContent() {
          var t;
          (t = this.buttons) == null || t.forEach((o) => {
            if (o.getAttribute("aria-expanded") === "false") {
              let i = this.childSection(o);
              this.changeHidden(i, true);
            }
          });
        }
        toggleVisibility(t) {
          let o = this.childSection(t.target);
          t.target.getAttribute("aria-expanded") === "false" ? (t.target.setAttribute("aria-expanded", "true"), this.changeHidden(o, false)) : (t.target.setAttribute("aria-expanded", "false"), this.changeHidden(o, true));
        }
      };
      customElements.define("headless-disclosure", ve);
      var ge = class extends Kt {
        constructor() {
          super();
          R(this, "input");
          R(this, "form");
          R(this, "dataValue");
          this.form = this.querySelector("form"), this.input = this.querySelector('input[data-select="input"]'), this.dataValue = this.querySelector('[data-select="value"]');
        }
        itemClickEvent(t) {
          t.preventDefault(), super.itemClickEvent(t), this.input && (this.input.value = t.target.dataset.value), this.dataValue && (this.dataValue.innerText = t.target.dataset.value), this.form && this.form.submit();
        }
      };
      customElements.define("headless-select", ge);
      var be = class extends HTMLElement {
        constructor() {
          super();
          R(this, "button");
          R(this, "dataTheme");
          this.button = this.querySelector("button"), this.button.hasAttribute("aria-checked") || this.button.setAttribute("aria-checked", "false"), this.dataset.theme = this.themeData || "dark", this.dataTheme = this.querySelectorAll("[data-theme]"), this.updateAllDateThemeAttributes(this.dataset.theme);
        }
        connectedCallback() {
          var t, o;
          this.isDarkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), (t = this.button) == null || t.addEventListener("click", this.toggleTheme.bind(this)), (o = this.button) == null || o.addEventListener("keydown", this.toggleThemeWithKeyboard.bind(this));
        }
        disconnectedCallback() {
          var t, o;
          (t = this.button) == null || t.removeEventListener("click", this.toggleTheme), (o = this.button) == null || o.removeEventListener("keydown", this.toggleThemeWithKeyboard);
        }
        get isDarkMode() {
          return localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        toggleTheme(t) {
          t.preventDefault(), this.isDarkMode ? (document.documentElement.classList.remove("dark"), localStorage.theme = "light", this.dataset.theme = "light") : (document.documentElement.classList.add("dark"), localStorage.theme = "dark", this.dataset.theme = "dark");
        }
        toggleThemeWithKeyboard(t) {
          y(["Space", "Enter"], t) && (t.preventDefault(), this.toggleTheme(t));
        }
        get themeData() {
          return localStorage.theme;
        }
        static get observedAttributes() {
          return ["data-theme"];
        }
        attributeChangedCallback(t, o, i) {
          t === "data-theme" && o !== i && this.updateAllDateThemeAttributes(i);
        }
        updateAllDateThemeAttributes(t) {
          this.dataTheme.forEach((o) => o.dataset.theme = t);
        }
      };
      customElements.define("headless-darkmode", be);
      var ye = class extends HTMLElement {
        constructor() {
          super();
          R(this, "button");
          this.button = this.querySelector("button"), this.button.hasAttribute("aria-checked") || this.button.setAttribute("aria-checked", "false"), this.setAttribute("role", "switch"), this.tabIndex = -1, this.updateAttributeSwitch(String(this.dataset.switch));
        }
        static get observedAttributes() {
          return ["data-switch"];
        }
        get datasetSwitch() {
          return this.querySelectorAll("[data-switch]");
        }
        connectedCallback() {
          this.button.addEventListener("click", this.switch.bind(this)), this.button.addEventListener("keydown", this.switch.bind(this)), this.setInitialState();
        }
        disconnectedCallback() {
          this.button.removeEventListener("click", this.switch), this.button.removeEventListener("keydown", this.switch);
        }
        attributeChangedCallback(t, o, i) {
          t === "data-switch" && o !== i && this.updateAttributeSwitch(i);
        }
        switch(t) {
          (t instanceof KeyboardEvent && t.type === "keydown" && y(["Space", "Enter"], t) || t instanceof MouseEvent && t.type === "click") && (t.preventDefault(), this.toggle());
        }
        switchOn() {
          this.button.ariaChecked = "true", this.dataset.switch = "on";
        }
        switchOff() {
          this.button.ariaChecked = "false", this.dataset.switch = "off";
        }
        toggle() {
          this.ariaDisabled !== "true" && (this.button.ariaChecked === "true" ? this.switchOff() : this.switchOn());
        }
        setInitialState() {
          this.button.ariaChecked === "true" ? this.dataset.switch = "on" : this.button.ariaChecked === "false" && (this.dataset.switch = "off");
        }
        updateAttributeSwitch(t) {
          this.datasetSwitch.forEach((o) => o.dataset.switch = t);
        }
      };
      customElements.define("headless-toggle", ye);
      var at = class extends HTMLButtonElement {
        constructor() {
          super();
        }
        get allowedKeyCodes() {
          return ["Space", "Enter"];
        }
        get allowedKeyCodesWithCtrl() {
          return [];
        }
        connectedCallback() {
          this.addEventListeners();
        }
        disconnectedCallback() {
          this.removeEventListeners();
        }
        addEventListeners() {
          this.addEventListener("mousedown", this.buttonPressEvents.bind(this)), this.addEventListener("mouseup", this.buttonPressEvents.bind(this)), this.addEventListener("keydown", this.buttonPressEvents.bind(this)), this.addEventListener("keyup", this.buttonPressEvents.bind(this)), this.addEventListener("blur", this.buttonPressEvents.bind(this));
        }
        removeEventListeners() {
          this.removeEventListener("mousedown", this.buttonPressEvents), this.removeEventListener("mouseup", this.buttonPressEvents), this.removeEventListener("keydown", this.buttonPressEvents), this.removeEventListener("keyup", this.buttonPressEvents), this.removeEventListener("blur", this.buttonPressEvents);
        }
        buttonPressEvents(e) {
          (e instanceof KeyboardEvent && e.type === "keydown" && this.allowedKeyCodes.includes(e.code) || e instanceof KeyboardEvent && e.type === "keydown" && e.ctrlKey && this.allowedKeyCodesWithCtrl.includes(e.code) || e instanceof MouseEvent && e.type === "mousedown") && (e.preventDefault(), this.ariaPressed = "true", this.focus()), (e instanceof KeyboardEvent && e.type === "keyup" && this.allowedKeyCodes.includes(e.code) || e instanceof KeyboardEvent && e.type === "keyup" && e.ctrlKey && this.allowedKeyCodesWithCtrl.includes(e.code) || e instanceof MouseEvent && e.type === "mouseup" || e instanceof FocusEvent) && (e.preventDefault(), this.ariaPressed = "false");
        }
      };
      customElements.define("headless-button", at, { extends: "button" });
      var Ct;
      var Ee = class extends at {
        constructor() {
          super();
          Tt(this, Ct, void 0);
          Y(this, Ct, "none"), this.hiddenAttribute = true;
        }
        skipToFocus() {
          if (this.hasAttribute("skip-to-focus")) {
            let t = this.getAttribute("skip-to-focus");
            return document.querySelector(`a[href="${t}"]`).focus();
          }
        }
        get offset() {
          return parseInt(this.getAttribute("offset"));
        }
        get scrollOffset() {
          return parseInt(this.getAttribute("scroll-offset")) || 100;
        }
        get allowedKeyCodes() {
          return super.allowedKeyCodes;
        }
        get allowedKeyCodesWithCtrl() {
          return ["Home"];
        }
        get hiddenAttribute() {
          return !!(this != null && this.hasAttribute("hidden"));
        }
        set hiddenAttribute(t) {
          this.hidden = t;
        }
        connectedCallback() {
          super.connectedCallback(), this.addEventListener("click", this.scrollTopAnimation.bind(this)), this.addEventListener("keydown", this.scrollUpOnKeyDown.bind(this)), window.addEventListener("scroll", this.hideButtonOnScroll.bind(this)), window.addEventListener("keydown", this.scrollUpOnCtrlHome.bind(this)), Y(this, Ct, window.getComputedStyle(this).display), this.hiddenAttribute && (this.style.display = "none");
        }
        disconnectedCallback() {
          super.disconnectedCallback(), this.removeEventListener("click", this.scrollTopAnimation), this.removeEventListener("keydown", this.scrollUpOnKeyDown), window.removeEventListener("scroll", this.hideButtonOnScroll), window.removeEventListener("keydown", this.scrollUpOnCtrlHome);
        }
        scrollTopAnimation() {
          window.scrollTo({ top: this.offset || 0, behavior: "smooth" }), this.skipToFocus();
        }
        scrollUpOnCtrlHome(t) {
          t instanceof KeyboardEvent && t.ctrlKey && this.allowedKeyCodesWithCtrl.includes(t.code) && (t.preventDefault(), this.scrollTopAnimation());
        }
        scrollUpOnKeyDown(t) {
          this.allowedKeyCodes.includes(t.code) && (t.preventDefault(), this.scrollTopAnimation());
        }
        hideButtonOnScroll() {
          document.documentElement.scrollTop < this.scrollOffset ? (this.hiddenAttribute = true, this.style.display = "none") : (this.hiddenAttribute = false, this.style.display = q(this, Ct));
        }
      };
      Ct = /* @__PURE__ */ new WeakMap();
      customElements.define("headless-scrolltop", Ee, { extends: "button" });
      var we = class extends at {
        constructor() {
          super();
        }
        get allowedKeyCodes() {
          return super.allowedKeyCodes;
        }
        get allowedKeyCodesWithCtrl() {
          return [];
        }
        connectedCallback() {
          super.connectedCallback(), this.addEventListener("click", this.triggerEvents.bind(this)), this.addEventListener("keydown", this.triggerEvents.bind(this));
        }
        disconnectedCallback() {
          super.disconnectedCallback(), this.removeEventListener("click", this.triggerEvents), this.removeEventListener("keydown", this.triggerEvents);
        }
        triggerEvents(e) {
          (e instanceof MouseEvent || e instanceof KeyboardEvent && this.allowedKeyCodes.includes(e.code) || e instanceof KeyboardEvent && e.ctrlKey && this.allowedKeyCodes.includes(e.code)) && (e.preventDefault(), e.stopPropagation(), window.history.back());
        }
      };
      customElements.define("headless-goback", we, { extends: "button" });
    }
  });

  // src/ts/main.ts
  var import_vanilla_headless = __toESM(require_build());

  // src/ts/variant-selector.ts
  var VariantSelector = class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.addEventListener("change", this.variantChanged);
    }
    disconnectedCallback() {
      this.removeEventListener("change", this.variantChanged);
    }
    get selectedOptions() {
      return Array.from(this.querySelectorAll("select"), (select) => select.value);
    }
    get variantJson() {
      return JSON.parse(this.querySelector('script[type="application/json"]').textContent);
    }
    get currentVariant() {
      return this.variantJson.find((variant) => {
        return !variant.options.map((option, index) => {
          return this.selectedOptions[index] === option;
        }).includes(false);
      });
    }
    variantChanged(e) {
      this.updateUrl();
      this.updateFormId();
      this.updatePrice();
    }
    updateUrl() {
      window.history.replaceState({}, "", `${this.dataset.url}?variant=${this.currentVariant.id}`);
    }
    updateFormId() {
      document.querySelector('#product-form input[name="id"]').value = this.currentVariant.id;
    }
    updatePrice() {
      fetch(`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}`).then((response) => response.text()).then((responseText) => {
        const id = `price-${this.dataset.section}`;
        const html = new DOMParser().parseFromString(responseText, "text/html");
        const oldPrice = document.getElementById(id);
        const newPrice = html.getElementById(id);
        if (oldPrice && newPrice) {
          oldPrice.innerHTML = newPrice.innerHTML;
        }
      });
    }
  };
  customElements.define("variant-selector", VariantSelector);
})();

(function() {
        
    console.log("START");
    
    /*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */
    (function(e, t) {
        "use strict";

        function n(e) {
            var t = e.length,
                n = st.type(e);
            return st.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function r(e) {
            var t = Tt[e] = {};
            return st.each(e.match(lt) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function i(e, n, r, i) {
            if (st.acceptData(e)) {
                var o, a, s = st.expando,
                    u = "string" == typeof n,
                    l = e.nodeType,
                    c = l ? st.cache : e,
                    f = l ? e[s] : e[s] && s;
                if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = K.pop() || st.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = st.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = st.extend(c[f], n) : c[f].data = st.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[st.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[st.camelCase(n)])) : a = o, a
            }
        }

        function o(e, t, n) {
            if (st.acceptData(e)) {
                var r, i, o, a = e.nodeType,
                    u = a ? st.cache : e,
                    l = a ? e[st.expando] : st.expando;
                if (u[l]) {
                    if (t && (r = n ? u[l] : u[l].data)) {
                        st.isArray(t) ? t = t.concat(st.map(t, st.camelCase)) : t in r ? t = [t] : (t = st.camelCase(t), t = t in r ? [t] : t.split(" "));
                        for (i = 0, o = t.length; o > i; i++) delete r[t[i]];
                        if (!(n ? s : st.isEmptyObject)(r)) return
                    }(n || (delete u[l].data, s(u[l]))) && (a ? st.cleanData([e], !0) : st.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
                }
            }
        }

        function a(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
                if (r = e.getAttribute(i), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : wt.test(r) ? st.parseJSON(r) : r
                    } catch (o) {}
                    st.data(e, n, r)
                } else r = t
            }
            return r
        }

        function s(e) {
            var t;
            for (t in e) if (("data" !== t || !st.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function u() {
            return !0
        }

        function l() {
            return !1
        }

        function c(e, t) {
            do e = e[t];
            while (e && 1 !== e.nodeType);
            return e
        }

        function f(e, t, n) {
            if (t = t || 0, st.isFunction(t)) return st.grep(e, function(e, r) {
                var i = !! t.call(e, r, e);
                return i === n
            });
            if (t.nodeType) return st.grep(e, function(e) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var r = st.grep(e, function(e) {
                    return 1 === e.nodeType
                });
                if (Wt.test(t)) return st.filter(t, r, !n);
                t = st.filter(t, r)
            }
            return st.grep(e, function(e) {
                return st.inArray(e, t) >= 0 === n
            })
        }

        function p(e) {
            var t = zt.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement) for (; t.length;) n.createElement(t.pop());
            return n
        }

        function d(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function h(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type, e
        }

        function g(e) {
            var t = nn.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function m(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) st._data(n, "globalEval", !t || st._data(t[r], "globalEval"))
        }

        function y(e, t) {
            if (1 === t.nodeType && st.hasData(e)) {
                var n, r, i, o = st._data(e),
                    a = st._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s) for (r = 0, i = s[n].length; i > r; r++) st.event.add(t, n, s[n][r])
                }
                a.data && (a.data = st.extend({}, a.data))
            }
        }

        function v(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !st.support.noCloneEvent && t[st.expando]) {
                    r = st._data(t);
                    for (i in r.events) st.removeEvent(t, i, r.handle);
                    t.removeAttribute(st.expando)
                }
                "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), st.support.html5Clone && e.innerHTML && !st.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Zt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function b(e, n) {
            var r, i, o = 0,
                a = e.getElementsByTagName !== t ? e.getElementsByTagName(n || "*") : e.querySelectorAll !== t ? e.querySelectorAll(n || "*") : t;
            if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++)!n || st.nodeName(i, n) ? a.push(i) : st.merge(a, b(i, n));
            return n === t || n && st.nodeName(e, n) ? st.merge([e], a) : a
        }

        function x(e) {
            Zt.test(e.type) && (e.defaultChecked = e.checked)
        }

        function T(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nn.length; i--;) if (t = Nn[i] + n, t in e) return t;
            return r
        }

        function w(e, t) {
            return e = t || e, "none" === st.css(e, "display") || !st.contains(e.ownerDocument, e)
        }

        function N(e, t) {
            for (var n, r = [], i = 0, o = e.length; o > i; i++) n = e[i], n.style && (r[i] = st._data(n, "olddisplay"), t ? (r[i] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && w(n) && (r[i] = st._data(n, "olddisplay", S(n.nodeName)))) : r[i] || w(n) || st._data(n, "olddisplay", st.css(n, "display")));
            for (i = 0; o > i; i++) n = e[i], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[i] || "" : "none"));
            return e
        }

        function C(e, t, n) {
            var r = mn.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function k(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += st.css(e, n + wn[o], !0, i)), r ? ("content" === n && (a -= st.css(e, "padding" + wn[o], !0, i)), "margin" !== n && (a -= st.css(e, "border" + wn[o] + "Width", !0, i))) : (a += st.css(e, "padding" + wn[o], !0, i), "padding" !== n && (a += st.css(e, "border" + wn[o] + "Width", !0, i)));
            return a
        }

        function E(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = ln(e),
                a = st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = un(e, t, o), (0 > i || null == i) && (i = e.style[t]), yn.test(i)) return i;
                r = a && (st.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function S(e) {
            var t = V,
                n = bn[e];
            return n || (n = A(e, t), "none" !== n && n || (cn = (cn || st("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), bn[e] = n), n
        }

        function A(e, t) {
            var n = st(t.createElement(e)).appendTo(t.body),
                r = st.css(n[0], "display");
            return n.remove(), r
        }

        function j(e, t, n, r) {
            var i;
            if (st.isArray(t)) st.each(t, function(t, i) {
                n || kn.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== st.type(t)) r(e, t);
            else for (i in t) j(e + "[" + i + "]", t[i], n, r)
        }

        function D(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(lt) || [];
                if (st.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function L(e, n, r, i) {
            function o(u) {
                var l;
                return a[u] = !0, st.each(e[u] || [], function(e, u) {
                    var c = u(n, r, i);
                    return "string" != typeof c || s || a[c] ? s ? !(l = c) : t : (n.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var a = {},
                s = e === $n;
            return o(n.dataTypes[0]) || !a["*"] && o("*")
        }

        function H(e, n) {
            var r, i, o = st.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
            return i && st.extend(!0, e, i), e
        }

        function M(e, n, r) {
            var i, o, a, s, u = e.contents,
                l = e.dataTypes,
                c = e.responseFields;
            for (o in c) o in r && (n[c[o]] = r[o]);
            for (;
            "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
            if (i) for (o in u) if (u[o] && u[o].test(i)) {
                l.unshift(o);
                break
            }
            if (l[0] in r) a = l[0];
            else {
                for (o in r) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                        a = o;
                        break
                    }
                    s || (s = o)
                }
                a = a || s
            }
            return a ? (a !== l[0] && l.unshift(a), r[a]) : t
        }

        function q(e, t) {
            var n, r, i, o, a = {},
                s = 0,
                u = e.dataTypes.slice(),
                l = u[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
            for (; i = u[++s];) if ("*" !== i) {
                if ("*" !== l && l !== i) {
                    if (n = a[l + " " + i] || a["* " + i], !n) for (r in a) if (o = r.split(" "), o[1] === i && (n = a[l + " " + o[0]] || a["* " + o[0]])) {
                        n === !0 ? n = a[r] : a[r] !== !0 && (i = o[0], u.splice(s--, 0, i));
                        break
                    }
                    if (n !== !0) if (n && e["throws"]) t = n(t);
                    else try {
                        t = n(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: n ? c : "No conversion from " + l + " to " + i
                        }
                    }
                }
                l = i
            }
            return {
                state: "success",
                data: t
            }
        }

        function _() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function F() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function O() {
            return setTimeout(function() {
                Qn = t
            }), Qn = st.now()
        }

        function B(e, t) {
            st.each(t, function(t, n) {
                for (var r = (rr[t] || []).concat(rr["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return
            })
        }

        function P(e, t, n) {
            var r, i, o = 0,
                a = nr.length,
                s = st.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (i) return !1;
                    for (var t = Qn || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                    return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: st.extend({}, t),
                    opts: st.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Qn || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = st.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) l.tweens[n].run(1);
                        return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (R(c, l.opts.specialEasing); a > o; o++) if (r = nr[o].call(l, e, c, l.opts)) return r;
            return B(l, c), st.isFunction(l.opts.start) && l.opts.start.call(e, l), st.fx.timer(st.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function R(e, t) {
            var n, r, i, o, a;
            for (n in e) if (r = st.camelCase(n), i = t[r], o = e[n], st.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = st.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
        }

        function W(e, t, n) {
            var r, i, o, a, s, u, l, c, f, p = this,
                d = e.style,
                h = {},
                g = [],
                m = e.nodeType && w(e);
            n.queue || (c = st._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() {
                c.unqueued || f()
            }), c.unqueued++, p.always(function() {
                p.always(function() {
                    c.unqueued--, st.queue(e, "fx").length || c.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === st.css(e, "display") && "none" === st.css(e, "float") && (st.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", st.support.shrinkWrapBlocks || p.done(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (r in t) if (o = t[r], Zn.exec(o)) {
                if (delete t[r], u = u || "toggle" === o, o === (m ? "hide" : "show")) continue;
                g.push(r)
            }
            if (a = g.length) {
                s = st._data(e, "fxshow") || st._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? st(e).show() : p.done(function() {
                    st(e).hide()
                }), p.done(function() {
                    var t;
                    st._removeData(e, "fxshow");
                    for (t in h) st.style(e, t, h[t])
                });
                for (r = 0; a > r; r++) i = g[r], l = p.createTween(i, m ? s[i] : 0), h[i] = s[i] || st.style(e, i), i in s || (s[i] = l.start, m && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function $(e, t, n, r, i) {
            return new $.prototype.init(e, t, n, r, i)
        }

        function I(e, t) {
            var n, r = {
                height: e
            },
                i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = wn[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function z(e) {
            return st.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var X, U, V = e.document,
            Y = e.location,
            J = e.jQuery,
            G = e.$,
            Q = {},
            K = [],
            Z = "1.9.0",
            et = K.concat,
            tt = K.push,
            nt = K.slice,
            rt = K.indexOf,
            it = Q.toString,
            ot = Q.hasOwnProperty,
            at = Z.trim,
            st = function(e, t) {
                return new st.fn.init(e, t, X)
            },
            ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            lt = /\S+/g,
            ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            dt = /^[\],:{}\s]*$/,
            ht = /(?:^|:|,)(?:\s*\[)+/g,
            gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            mt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            yt = /^-ms-/,
            vt = /-([\da-z])/gi,
            bt = function(e, t) {
                return t.toUpperCase()
            },
            xt = function() {
                V.addEventListener ? (V.removeEventListener("DOMContentLoaded", xt, !1), st.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", xt), st.ready())
            };
        st.fn = st.prototype = {
            jquery: Z,
            constructor: st,
            init: function(e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof st ? n[0] : n, st.merge(this, st.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), pt.test(i[1]) && st.isPlainObject(n)) for (i in n) st.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (o = V.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = V, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : st.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), st.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return nt.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = st.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return st.each(this, e, t)
            },
            ready: function(e) {
                return st.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(nt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(st.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: tt,
            sort: [].sort,
            splice: [].splice
        }, st.fn.init.prototype = st.fn, st.extend = st.fn.extend = function() {
            var e, n, r, i, o, a, s = arguments[0] || {},
                u = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || st.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (e = arguments[u])) for (n in e) r = s[n], i = e[n], s !== i && (c && i && (st.isPlainObject(i) || (o = st.isArray(i))) ? (o ? (o = !1, a = r && st.isArray(r) ? r : []) : a = r && st.isPlainObject(r) ? r : {}, s[n] = st.extend(c, a, i)) : i !== t && (s[n] = i));
            return s
        }, st.extend({
            noConflict: function(t) {
                return e.$ === st && (e.$ = G), t && e.jQuery === st && (e.jQuery = J), st
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? st.readyWait++ : st.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--st.readyWait : !st.isReady) {
                    if (!V.body) return setTimeout(st.ready);
                    st.isReady = !0, e !== !0 && --st.readyWait > 0 || (U.resolveWith(V, [st]), st.fn.trigger && st(V).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === st.type(e)
            },
            isArray: Array.isArray ||
            function(e) {
                return "array" === st.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[it.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                if (!e || "object" !== st.type(e) || e.nodeType || st.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ot.call(e, "constructor") && !ot.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e);
                return r === t || ot.call(e, r)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || V;
                var r = pt.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = st.buildFragment([e], t, i), i && st(i).remove(), st.merge([], r.childNodes))
            },
            parseJSON: function(n) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = st.trim(n), n && dt.test(n.replace(gt, "@").replace(mt, "]").replace(ht, ""))) ? Function("return " + n)() : (st.error("Invalid JSON: " + n), t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (o) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && st.trim(t) && (e.execScript ||
                function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(yt, "ms-").replace(vt, bt)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i, o = 0,
                    a = e.length,
                    s = n(e);
                if (r) {
                    if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                    else for (o in e) if (i = t.apply(e[o], r), i === !1) break
                } else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
                return e
            },
            trim: at && !at.call("\ufeff\u00a0") ?
            function(e) {
                return null == e ? "" : at.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(ct, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? st.merge(r, "string" == typeof e ? [e] : e) : tt.call(r, e)), r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (rt) return rt.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
                else for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    o = 0,
                    a = e.length;
                for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, r) {
                var i, o = 0,
                    a = e.length,
                    s = n(e),
                    u = [];
                if (s) for (; a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i);
                else for (o in e) i = t(e[o], o, r), null != i && (u[u.length] = i);
                return et.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (r = e[n], n = e, e = r), st.isFunction(e) ? (i = nt.call(arguments, 2), o = function() {
                    return e.apply(n || this, i.concat(nt.call(arguments)))
                }, o.guid = e.guid = e.guid || st.guid++, o) : t
            },
            access: function(e, n, r, i, o, a, s) {
                var u = 0,
                    l = e.length,
                    c = null == r;
                if ("object" === st.type(r)) {
                    o = !0;
                    for (u in r) st.access(e, n, u, r[u], !0, a, s)
                } else if (i !== t && (o = !0, st.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(st(e), n)
                })), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
                return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
            },
            now: function() {
                return (new Date).getTime()
            }
        }), st.ready.promise = function(t) {
            if (!U) if (U = st.Deferred(), "complete" === V.readyState) setTimeout(st.ready);
            else if (V.addEventListener) V.addEventListener("DOMContentLoaded", xt, !1), e.addEventListener("load", st.ready, !1);
            else {
                V.attachEvent("onreadystatechange", xt), e.attachEvent("onload", st.ready);
                var n = !1;
                try {
                    n = null == e.frameElement && V.documentElement
                } catch (r) {}
                n && n.doScroll &&
                function i() {
                    if (!st.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        st.ready()
                    }
                }()
            }
            return U.promise(t)
        }, st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Q["[object " + t + "]"] = t.toLowerCase()
        }), X = st(V);
        var Tt = {};
        st.Callbacks = function(e) {
            e = "string" == typeof e ? Tt[e] || r(e) : st.extend({}, e);
            var n, i, o, a, s, u, l = [],
                c = !e.once && [],
                f = function(t) {
                    for (n = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++) if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                    o = !1, l && (c ? c.length && f(c.shift()) : n ? l = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (l) {
                            var t = l.length;
                            (function r(t) {
                                st.each(t, function(t, n) {
                                    var i = st.type(n);
                                    "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            })(arguments), o ? s = l.length : n && (a = t, f(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && st.each(arguments, function(e, t) {
                            for (var n;
                            (n = st.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (s >= n && s--, u >= n && u--)
                        }), this
                    },
                    has: function(e) {
                        return st.inArray(e, l) > -1
                    },
                    empty: function() {
                        return l = [], this
                    },
                    disable: function() {
                        return l = c = n = t, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = t, n || p.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !c || (o ? c.push(t) : f(t)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return p
        }, st.extend({
            Deferred: function(e) {
                var t = [
                    ["resolve", "done", st.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", st.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", st.Callbacks("memory")]
                ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return st.Deferred(function(n) {
                                st.each(t, function(t, o) {
                                    var a = o[0],
                                        s = st.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && st.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? st.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, st.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t, n, r, i = 0,
                    o = nt.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && st.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : st.Deferred(),
                    l = function(e, n, r) {
                        return function(i) {
                            n[e] = this, r[e] = arguments.length > 1 ? nt.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && st.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        }), st.support = function() {
            var n, r, i, o, a, s, u, l, c, f, p = V.createElement("div");
            if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = p.getElementsByTagName("*"), i = p.getElementsByTagName("a")[0], !r || !i || !r.length) return {};
            o = V.createElement("select"), a = o.appendChild(V.createElement("option")), s = p.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", n = {
                getSetAttribute: "t" !== p.className,
                leadingWhitespace: 3 === p.firstChild.nodeType,
                tbody: !p.getElementsByTagName("tbody").length,
                htmlSerialize: !! p.getElementsByTagName("link").length,
                style: /top/.test(i.getAttribute("style")),
                hrefNormalized: "/a" === i.getAttribute("href"),
                opacity: /^0.5/.test(i.style.opacity),
                cssFloat: !! i.style.cssFloat,
                checkOn: !! s.value,
                optSelected: a.selected,
                enctype: !! V.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === V.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, s.checked = !0, n.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, n.optDisabled = !a.disabled;
            try {
                delete p.test
            } catch (d) {
                n.deleteExpando = !1
            }
            s = V.createElement("input"), s.setAttribute("value", ""), n.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), n.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), u = V.createDocumentFragment(), u.appendChild(s), n.appendChecked = s.checked, n.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
                n.noCloneEvent = !1
            }), p.cloneNode(!0).click());
            for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) p.setAttribute(l = "on" + f, "t"), n[f + "Bubbles"] = l in e || p.attributes[l].expando === !1;
            return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", n.clearCloneStyle = "content-box" === p.style.backgroundClip, st(function() {
                var r, i, o, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = V.getElementsByTagName("body")[0];
                s && (r = V.createElement("div"), r.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(r).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", n.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", n.boxSizing = 4 === p.offsetWidth, n.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (n.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, n.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                    width: "4px"
                }).width, i = p.appendChild(V.createElement("div")), i.style.cssText = p.style.cssText = a, i.style.marginRight = i.style.width = "0", p.style.width = "1px", n.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), p.style.zoom !== t && (p.innerHTML = "", p.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", n.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", n.shrinkWrapBlocks = 3 !== p.offsetWidth, s.style.zoom = 1), s.removeChild(r), r = p = o = i = null)
            }), r = o = u = a = i = s = null, n
        }();
        var wt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Nt = /([A-Z])/g;
        st.extend({
            cache: {},
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? st.cache[e[st.expando]] : e[st.expando], !! e && !s(e)
            },
            data: function(e, t, n) {
                return i(e, t, n, !1)
            },
            removeData: function(e, t) {
                return o(e, t, !1)
            },
            _data: function(e, t, n) {
                return i(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return o(e, t, !0)
            },
            acceptData: function(e) {
                var t = e.nodeName && st.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), st.fn.extend({
            data: function(e, n) {
                var r, i, o = this[0],
                    s = 0,
                    u = null;
                if (e === t) {
                    if (this.length && (u = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
                        for (r = o.attributes; r.length > s; s++) i = r[s].name, i.indexOf("data-") || (i = st.camelCase(i.substring(5)), a(o, i, u[i]));
                        st._data(o, "parsedAttrs", !0)
                    }
                    return u
                }
                return "object" == typeof e ? this.each(function() {
                    st.data(this, e)
                }) : st.access(this, function(n) {
                    return n === t ? o ? a(o, e, st.data(o, e)) : null : (this.each(function() {
                        st.data(this, e, n)
                    }), t)
                }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    st.removeData(this, e)
                })
            }
        }), st.extend({
            queue: function(e, n, r) {
                var i;
                return e ? (n = (n || "fx") + "queue", i = st._data(e, n), r && (!i || st.isArray(r) ? i = st._data(e, n, st.makeArray(r)) : i.push(r)), i || []) : t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = st.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = st._queueHooks(e, t),
                    a = function() {
                        st.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return st._data(e, n) || st._data(e, n, {
                    empty: st.Callbacks("once memory").add(function() {
                        st._removeData(e, t + "queue"), st._removeData(e, n)
                    })
                })
            }
        }), st.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? st.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = st.queue(this, e, n);
                    st._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && st.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    st.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = st.fx ? st.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1,
                    o = st.Deferred(),
                    a = this,
                    s = this.length,
                    u = function() {
                        --i || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = st._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
                return u(), o.promise(n)
            }
        });
        var Ct, kt, Et = /[\t\r\n]/g,
            St = /\r/g,
            At = /^(?:input|select|textarea|button|object)$/i,
            jt = /^(?:a|area)$/i,
            Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            Lt = /^(?:checked|selected)$/i,
            Ht = st.support.getSetAttribute,
            Mt = st.support.input;
        st.fn.extend({
            attr: function(e, t) {
                return st.access(this, st.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    st.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return st.access(this, st.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = st.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    u = "string" == typeof e && e;
                if (st.isFunction(e)) return this.each(function(t) {
                    st(this).addClass(e.call(this, t, this.className))
                });
                if (u) for (t = (e || "").match(lt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                    for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                    n.className = st.trim(r)
                }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    u = 0 === arguments.length || "string" == typeof e && e;
                if (st.isFunction(e)) return this.each(function(t) {
                    st(this).removeClass(e.call(this, t, this.className))
                });
                if (u) for (t = (e || "").match(lt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                    for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                    n.className = e ? st.trim(r) : ""
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "boolean" == typeof t;
                return st.isFunction(e) ? this.each(function(n) {
                    st(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n) for (var i, o = 0, a = st(this), s = t, u = e.match(lt) || []; i = u[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                    else("undefined" === n || "boolean" === n) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : st._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, o = this[0]; {
                    if (arguments.length) return i = st.isFunction(e), this.each(function(r) {
                        var o, a = st(this);
                        1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : st.isArray(o) && (o = st.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), n = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                    });
                    if (o) return n = st.valHooks[o.type] || st.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(St, "") : null == r ? "" : r)
                }
            }
        }), st.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (st.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && st.nodeName(n.parentNode, "optgroup"))) {
                            if (t = st(n).val(), o) return t;
                            a.push(t)
                        }
                        return a
                    },
                    set: function(e, t) {
                        var n = st.makeArray(t);
                        return st(e).find("option").each(function() {
                            this.selected = st.inArray(st(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attr: function(e, n, r) {
                var i, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return e.getAttribute === t ? st.prop(e, n, r) : (a = 1 !== s || !st.isXMLDoc(e), a && (n = n.toLowerCase(), o = st.attrHooks[n] || (Dt.test(n) ? kt : Ct)), r === t ? o && a && "get" in o && null !== (i = o.get(e, n)) ? i : (e.getAttribute !== t && (i = e.getAttribute(n)), null == i ? t : i) : null !== r ? o && a && "set" in o && (i = o.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r) : (st.removeAttr(e, n), t))
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    o = t && t.match(lt);
                if (o && 1 === e.nodeType) for (; n = o[i++];) r = st.propFix[n] || n, Dt.test(n) ? !Ht && Lt.test(n) ? e[st.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : st.attr(e, n, ""), e.removeAttribute(Ht ? n : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!st.support.radioValue && "radio" === t && st.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, r) {
                var i, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !st.isXMLDoc(e), a && (n = st.propFix[n] || n, o = st.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : At.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), kt = {
            get: function(e, n) {
                var r = st.prop(e, n),
                    i = "boolean" == typeof r && e.getAttribute(n),
                    o = "boolean" == typeof r ? Mt && Ht ? null != i : Lt.test(n) ? e[st.camelCase("default-" + n)] : !! i : e.getAttributeNode(n);
                return o && o.value !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                return t === !1 ? st.removeAttr(e, n) : Mt && Ht || !Lt.test(n) ? e.setAttribute(!Ht && st.propFix[n] || n, n) : e[st.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, Mt && Ht || (st.attrHooks.value = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return st.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
            },
            set: function(e, n, r) {
                return st.nodeName(e, "input") ? (e.defaultValue = n, t) : Ct && Ct.set(e, n, r)
            }
        }), Ht || (Ct = st.valHooks.button = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
            },
            set: function(e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
            }
        }, st.attrHooks.contenteditable = {
            get: Ct.get,
            set: function(e, t, n) {
                Ct.set(e, "" === t ? !1 : t, n)
            }
        }, st.each(["width", "height"], function(e, n) {
            st.attrHooks[n] = st.extend(st.attrHooks[n], {
                set: function(e, r) {
                    return "" === r ? (e.setAttribute(n, "auto"), r) : t
                }
            })
        })), st.support.hrefNormalized || (st.each(["href", "src", "width", "height"], function(e, n) {
            st.attrHooks[n] = st.extend(st.attrHooks[n], {
                get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return null == r ? t : r
                }
            })
        }), st.each(["href", "src"], function(e, t) {
            st.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        })), st.support.style || (st.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), st.support.optSelected || (st.propHooks.selected = st.extend(st.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), st.support.enctype || (st.propFix.enctype = "encoding"), st.support.checkOn || st.each(["radio", "checkbox"], function() {
            st.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), st.each(["radio", "checkbox"], function() {
            st.valHooks[this] = st.extend(st.valHooks[this], {
                set: function(e, n) {
                    return st.isArray(n) ? e.checked = st.inArray(st(e).val(), n) >= 0 : t
                }
            })
        });
        var qt = /^(?:input|select|textarea)$/i,
            _t = /^key/,
            Ft = /^(?:mouse|contextmenu)|click/,
            Ot = /^(?:focusinfocus|focusoutblur)$/,
            Bt = /^([^.]*)(?:\.(.+)|)$/;
        st.event = {
            global: {},
            add: function(e, n, r, i, o) {
                var a, s, u, l, c, f, p, d, h, g, m, y = 3 !== e.nodeType && 8 !== e.nodeType && st._data(e);
                if (y) {
                    for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = st.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function(e) {
                        return st === t || e && st.event.triggered === e.type ? t : st.event.dispatch.apply(s.elem, arguments)
                    }, s.elem = e), n = (n || "").match(lt) || [""], c = n.length; c--;) u = Bt.exec(n[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), p = st.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = st.event.special[h] || {}, f = st.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        needsContext: o && st.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, a), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, g, s) !== !1 || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), st.event.global[h] = !0;
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, m = st.hasData(e) && st._data(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(lt) || [""], l = t.length; l--;) if (s = Bt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = st.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || st.removeEvent(e, d, m.handle), delete u[d])
                    } else for (d in u) st.event.remove(e, d + t[l], n, r, !0);
                    st.isEmptyObject(u) && (delete m.handle, st._removeData(e, "events"))
                }
            },
            trigger: function(n, r, i, o) {
                var a, s, u, l, c, f, p, d = [i || V],
                    h = n.type || n,
                    g = n.namespace ? n.namespace.split(".") : [];
                if (s = u = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !Ot.test(h + st.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = 0 > h.indexOf(":") && "on" + h, n = n[st.expando] ? n : new st.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : st.makeArray(r, [n]), p = st.event.special[h] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                    if (!o && !p.noBubble && !st.isWindow(i)) {
                        for (l = p.delegateType || h, Ot.test(l + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), u = s;
                        u === (i.ownerDocument || V) && d.push(u.defaultView || u.parentWindow || e)
                    }
                    for (a = 0;
                    (s = d[a++]) && !n.isPropagationStopped();) n.type = a > 1 ? l : p.bindType || h, f = (st._data(s, "events") || {})[n.type] && st._data(s, "handle"), f && f.apply(s, r), f = c && s[c], f && st.acceptData(s) && f.apply && f.apply(s, r) === !1 && n.preventDefault();
                    if (n.type = h, !(o || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === h && st.nodeName(i, "a") || !st.acceptData(i) || !c || !i[h] || st.isWindow(i))) {
                        u = i[c], u && (i[c] = null), st.event.triggered = h;
                        try {
                            i[h]()
                        } catch (m) {}
                        st.event.triggered = t, u && (i[c] = u)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = st.event.fix(e);
                var n, r, i, o, a, s = [],
                    u = nt.call(arguments),
                    l = (st._data(this, "events") || {})[e.type] || [],
                    c = st.event.special[e.type] || {};
                if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (s = st.event.handlers.call(this, e, l), n = 0;
                    (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, r = 0;
                    (a = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((st.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                    u = n.delegateCount,
                    l = e.target;
                if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== e.type) {
                    for (i = [], r = 0; u > r; r++) a = n[r], o = a.selector + " ", i[o] === t && (i[o] = a.needsContext ? st(o, this).index(l) >= 0 : st.find(o, this, null, [l]).length), i[o] && i.push(a);
                    i.length && s.push({
                        elem: l,
                        handlers: i
                    })
                }
                return n.length > u && s.push({
                    elem: this,
                    handlers: n.slice(u)
                }), s
            },
            fix: function(e) {
                if (e[st.expando]) return e;
                var t, n, r = e,
                    i = st.event.fixHooks[e.type] || {},
                    o = i.props ? this.props.concat(i.props) : this.props;
                for (e = new st.Event(r), t = o.length; t--;) n = o[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, i.filter ? i.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || V, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== V.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === V.activeElement && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = st.extend(new st.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? st.event.trigger(i, null, t) : st.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, st.removeEvent = V.removeEventListener ?
        function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, n, r) {
            var i = "on" + n;
            e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r))
        }, st.Event = function(e, n) {
            return this instanceof st.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, n && st.extend(this, n), this.timeStamp = e && e.timeStamp || st.now(), this[st.expando] = !0, t) : new st.Event(e, n)
        }, st.Event.prototype = {
            isDefaultPrevented: l,
            isPropagationStopped: l,
            isImmediatePropagationStopped: l,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = u, this.stopPropagation()
            }
        }, st.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            st.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !st.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), st.support.submitBubbles || (st.event.special.submit = {
            setup: function() {
                return st.nodeName(this, "form") ? !1 : (st.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = st.nodeName(n, "input") || st.nodeName(n, "button") ? n.form : t;
                    r && !st._data(r, "submitBubbles") && (st.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), st._data(r, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && st.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return st.nodeName(this, "form") ? !1 : (st.event.remove(this, "._submit"), t)
            }
        }), st.support.changeBubbles || (st.event.special.change = {
            setup: function() {
                return qt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), st.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), st.event.simulate("change", this, e, !0)
                })), !1) : (st.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    qt.test(t.nodeName) && !st._data(t, "changeBubbles") && (st.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || st.event.simulate("change", this.parentNode, e, !0)
                    }), st._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return st.event.remove(this, "._change"), !qt.test(this.nodeName)
            }
        }), st.support.focusinBubbles || st.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    st.event.simulate(t, e.target, st.event.fix(e), !0)
                };
            st.event.special[t] = {
                setup: function() {
                    0 === n++ && V.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && V.removeEventListener(e, r, !0)
                }
            }
        }), st.fn.extend({
            on: function(e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (s in e) this.on(s, n, r, e[s], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
                else if (!i) return this;
                return 1 === o && (a = i, i = function(e) {
                    return st().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = st.guid++)), this.each(function() {
                    st.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, st(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function() {
                    st.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    st.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var r = this[0];
                return r ? st.event.trigger(e, n, r, !0) : t
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            st.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, _t.test(t) && (st.event.fixHooks[t] = st.event.keyHooks), Ft.test(t) && (st.event.fixHooks[t] = st.event.mouseHooks)
        }), function(e, t) {
            function n(e) {
                return ht.test(e + "")
            }

            function r() {
                var e, t = [];
                return e = function(n, r) {
                    return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = r
                }
            }

            function i(e) {
                return e[P] = !0, e
            }

            function o(e) {
                var t = L.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function a(e, t, n, r) {
                var i, o, a, s, u, l, c, d, h, g;
                if ((t ? t.ownerDocument || t : R) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (!M && !r) {
                    if (i = gt.exec(e)) if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
                        if ((a = i[3]) && W.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)), n
                    }
                    if (W.qsa && !q.test(e)) {
                        if (c = !0, d = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                            h = dt.test(e) && t.parentNode || t, g = l.join(",")
                        }
                        if (g) try {
                            return Q.apply(n, K.call(h.querySelectorAll(g), 0)), n
                        } catch (m) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return x(e.replace(at, "$1"), t, n, r)
            }

            function s(e, t) {
                for (var n = e && t && e.nextSibling; n; n = n.nextSibling) if (n === t) return -1;
                return e ? 1 : -1
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function(t) {
                    return t = +t, i(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function f(e, t) {
                var n, r, i, o, s, u, l, c = X[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = C.preFilter; s;) {
                    (!n || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(at, " ")
                    }), s = s.slice(n.length));
                    for (o in C.filter)!(r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? a.error(e) : X(e, u).slice(0)
            }

            function p(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function d(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === t.dir,
                    o = I++;
                return t.first ?
                function(t, n, o) {
                    for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, a) {
                    var s, u, l, c = $ + " " + o;
                    if (a) {
                        for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                        if ((s = u[1]) === !0 || s === N) return s === !0
                    } else if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) return !0
                }
            }

            function h(e) {
                return e.length > 1 ?
                function(t, n, r) {
                    for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                return a
            }

            function m(e, t, n, r, o, a) {
                return r && !r[P] && (r = m(r)), o && !o[P] && (o = m(o, a)), i(function(i, a, s, u) {
                    var l, c, f, p = [],
                        d = [],
                        h = a.length,
                        m = i || b(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? m : g(m, p, e, s, u),
                        v = n ? o || (i ? e : h || r) ? [] : a : y;
                    if (n && n(y, v, s, u), r) for (l = g(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                                o(null, v = [], l, u)
                            }
                            for (c = v.length; c--;)(f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                        }
                    } else v = g(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : Q.apply(a, v)
                })
            }

            function y(e) {
                for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                    return e === t
                }, a, !0), l = d(function(e) {
                    return Z.call(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }]; i > s; s++) if (n = C.relative[e[s].type]) c = [d(h(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                        return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
                return h(c)
            }

            function v(e, t) {
                var n = 0,
                    r = t.length > 0,
                    o = e.length > 0,
                    s = function(i, s, u, l, c) {
                        var f, p, d, h = [],
                            m = 0,
                            y = "0",
                            v = i && [],
                            b = null != c,
                            x = j,
                            T = i || o && C.find.TAG("*", c && s.parentNode || s),
                            w = $ += null == x ? 1 : Math.E;
                        for (b && (j = s !== L && s, N = n); null != (f = T[y]); y++) {
                            if (o && f) {
                                for (p = 0; d = e[p]; p++) if (d(f, s, u)) {
                                    l.push(f);
                                    break
                                }
                                b && ($ = w, N = ++n)
                            }
                            r && ((f = !d && f) && m--, i && v.push(f))
                        }
                        if (m += y, r && y !== m) {
                            for (p = 0; d = t[p]; p++) d(v, h, s, u);
                            if (i) {
                                if (m > 0) for (; y--;) v[y] || h[y] || (h[y] = G.call(l));
                                h = g(h)
                            }
                            Q.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                        }
                        return b && ($ = w, j = x), v
                    };
                return r ? i(s) : s
            }

            function b(e, t, n) {
                for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
                return n
            }

            function x(e, t, n, r) {
                var i, o, a, s, u, l = f(e);
                if (!r && 1 === l.length) {
                    if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !M && C.relative[o[1].type]) {
                        if (t = C.find.ID(a.matches[0].replace(xt, Tt), t)[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = pt.needsContext.test(e) ? -1 : o.length - 1; i >= 0 && (a = o[i], !C.relative[s = a.type]); i--) if ((u = C.find[s]) && (r = u(a.matches[0].replace(xt, Tt), dt.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, K.call(r, 0)), n;
                        break
                    }
                }
                return S(e, l)(r, t, M, n, dt.test(e)), n
            }

            function T() {}
            var w, N, C, k, E, S, A, j, D, L, H, M, q, _, F, O, B, P = "sizzle" + -new Date,
                R = e.document,
                W = {},
                $ = 0,
                I = 0,
                z = r(),
                X = r(),
                U = r(),
                V = typeof t,
                Y = 1 << 31,
                J = [],
                G = J.pop,
                Q = J.push,
                K = J.slice,
                Z = J.indexOf ||
            function(e) {
                for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
                return -1
            }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"), rt = "([*^$|!~]?=)", it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)", at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), ut = RegExp("^" + et + "*," + et + "*"), lt = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), ct = RegExp(ot), ft = RegExp("^" + nt + "$"), pt = {
                ID: RegExp("^#(" + tt + ")"),
                CLASS: RegExp("^\\.(" + tt + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
                TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + it),
                PSEUDO: RegExp("^" + ot),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
            }, dt = /[\x20\t\r\n\f]*[+~]/, ht = /\{\s*\[native code\]\s*\}/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /^(?:input|select|textarea|button)$/i, yt = /^h\d$/i, vt = /'|\\/g, bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, Tt = function(e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
            try {
                K.call(H.childNodes, 0)[0].nodeType
            } catch (wt) {
                K = function(e) {
                    for (var t, n = []; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            E = a.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, D = a.setDocument = function(e) {
                var r = e ? e.ownerDocument || e : R;
                return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, M = E(r), W.tagNameNoComments = o(function(e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), W.attributes = o(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), W.getByClassName = o(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), W.getByName = o(function(e) {
                    e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", H.insertBefore(e, H.firstChild);
                    var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
                    return W.getIdNotName = !r.getElementById(P), H.removeChild(e), t
                }), C.attrHandle = o(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                }, W.getIdNotName ? (C.find.ID = function(e, t) {
                    if (typeof t.getElementById !== V && !M) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function(e) {
                    var t = e.replace(xt, Tt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (C.find.ID = function(e, n) {
                    if (typeof n.getElementById !== V && !M) {
                        var r = n.getElementById(e);
                        return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t : []
                    }
                }, C.filter.ID = function(e) {
                    var t = e.replace(xt, Tt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = W.tagNameNoComments ?
                function(e, n) {
                    return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i]; i++) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, C.find.NAME = W.getByName &&
                function(e, n) {
                    return typeof n.getElementsByName !== V ? n.getElementsByName(name) : t
                }, C.find.CLASS = W.getByClassName &&
                function(e, n) {
                    return typeof n.getElementsByClassName === V || M ? t : n.getElementsByClassName(e)
                }, _ = [], q = [":focus"], (W.qsa = n(r.querySelectorAll)) && (o(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || q.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || q.push(":checked")
                }), o(function(e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && q.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                })), (W.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                    W.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), _.push("!=", ot)
                }), q = RegExp(q.join("|")), _ = RegExp(_.join("|")), O = n(H.contains) || H.compareDocumentPosition ?
                function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, B = H.compareDocumentPosition ?
                function(e, t) {
                    var n;
                    return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || O(R, e) ? -1 : t === r || O(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var n, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        u = [e],
                        l = [t];
                    if (e === t) return A = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || Y) - (O(R, e) && ~e.sourceIndex || Y);
                    if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                    if (o === a) return s(e, t);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; u[i] === l[i];) i++;
                    return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
                }, A = !1, [0, 0].sort(B), W.detectDuplicates = A, L) : L
            }, a.matches = function(e, t) {
                return a(e, null, null, t)
            }, a.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== L && D(e), t = t.replace(bt, "='$1']"), !(!W.matchesSelector || M || _ && _.test(t) || q.test(t))) try {
                    var n = F.call(e, t);
                    if (n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (r) {}
                return a(t, L, null, [e]).length > 0
            }, a.contains = function(e, t) {
                return (e.ownerDocument || e) !== L && D(e), O(e, t)
            }, a.attr = function(e, t) {
                var n;
                return (e.ownerDocument || e) !== L && D(e), M || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : M || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, a.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, a.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                if (A = !W.detectDuplicates, e.sort(B), A) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return e
            }, k = a.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else for (; t = e[r]; r++) n += k(t);
                return n
            }, C = a.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(xt, Tt), e[3] = (e[4] || e[5] || "").replace(xt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        return "*" === e ?
                        function() {
                            return !0
                        } : (e = e.replace(xt, Tt).toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = z[e + " "];
                        return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = a.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.substr(i.length - n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.substr(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ?
                        function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !u && !s;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [$, d, p];
                                        break
                                    }
                                } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === $) p = l[1];
                                else for (;
                                (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [$, p]), f !== t)););
                                return p -= i, p === r || 0 === p % r && p / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                        return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                            for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(at, "$1"));
                        return r[P] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(t) {
                            return a(e, t).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return ft.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, Tt).toLowerCase(), function(t) {
                            var n;
                            do
                            if (n = M ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === H
                    },
                    focus: function(e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !! e.checked || "option" === t && !! e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return yt.test(e.nodeName)
                    },
                    input: function(e) {
                        return mt.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                        return e
                    })
                }
            };
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[w] = u(w);
            for (w in {
                submit: !0,
                reset: !0
            }) C.pseudos[w] = l(w);
            S = a.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = U[e + " "];
                if (!o) {
                    for (t || (t = f(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                    o = U(e, v(i, r))
                }
                return o
            }, C.pseudos.nth = C.pseudos.eq, C.filters = T.prototype = C.pseudos, C.setFilters = new T, D(), a.attr = st.attr, st.find = a, st.expr = a.selectors, st.expr[":"] = st.expr.pseudos, st.unique = a.uniqueSort, st.text = a.getText, st.isXMLDoc = a.isXML, st.contains = a.contains
        }(e);
        var Pt = /Until$/,
            Rt = /^(?:parents|prev(?:Until|All))/,
            Wt = /^.[^:#\[\.,]*$/,
            $t = st.expr.match.needsContext,
            It = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        st.fn.extend({
            find: function(e) {
                var t, n, r;
                if ("string" != typeof e) return r = this, this.pushStack(st(e).filter(function() {
                    for (t = 0; r.length > t; t++) if (st.contains(r[t], this)) return !0
                }));
                for (n = [], t = 0; this.length > t; t++) st.find(e, this[t], n);
                return n = this.pushStack(st.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
            },
            has: function(e) {
                var t, n = st(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++) if (st.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(f(this, e, !1))
            },
            filter: function(e) {
                return this.pushStack(f(this, e, !0))
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? $t.test(e) ? st(e, this.context).index(this[0]) >= 0 : st.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], a = $t.test(e) || "string" != typeof e ? st(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : st.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
                return this.pushStack(o.length > 1 ? st.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? st.inArray(this[0], st(e)) : st.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? st(e, t) : st.makeArray(e && e.nodeType ? [e] : e),
                    r = st.merge(this.get(), n);
                return this.pushStack(st.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), st.fn.andSelf = st.fn.addBack, st.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return st.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return st.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return st.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return st.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return st.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return st.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return st.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return st.sibling(e.firstChild)
            },
            contents: function(e) {
                return st.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : st.merge([], e.childNodes)
            }
        }, function(e, t) {
            st.fn[e] = function(n, r) {
                var i = st.map(this, t, n);
                return Pt.test(e) || (r = n), r && "string" == typeof r && (i = st.filter(r, i)), i = this.length > 1 && !It[e] ? st.unique(i) : i, this.length > 1 && Rt.test(e) && (i = i.reverse()), this.pushStack(i)
            }
        }), st.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? st.find.matchesSelector(t[0], e) ? [t[0]] : [] : st.find.matches(e, t)
            },
            dir: function(e, n, r) {
                for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !st(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Xt = / jQuery\d+="(?:null|\d+)"/g,
            Ut = RegExp("<(?:" + zt + ")[\\s/>]", "i"),
            Vt = /^\s+/,
            Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Jt = /<([\w:]+)/,
            Gt = /<tbody/i,
            Qt = /<|&#?\w+;/,
            Kt = /<(?:script|style|link)/i,
            Zt = /^(?:checkbox|radio)$/i,
            en = /checked\s*(?:[^=]|=\s*.checked.)/i,
            tn = /^$|\/(?:java|ecma)script/i,
            nn = /^true\/(.*)/,
            rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            on = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: st.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            an = p(V),
            sn = an.appendChild(V.createElement("div"));
        on.optgroup = on.option, on.tbody = on.tfoot = on.colgroup = on.caption = on.thead, on.th = on.td, st.fn.extend({
            text: function(e) {
                return st.access(this, function(e) {
                    return e === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (st.isFunction(e)) return this.each(function(t) {
                    st(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = st(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return st.isFunction(e) ? this.each(function(t) {
                    st(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = st(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = st.isFunction(e);
                return this.each(function(n) {
                    st(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, r = 0; null != (n = this[r]); r++)(!e || st.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || st.cleanData(b(n)), n.parentNode && (t && st.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && st.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && st.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return st.clone(this, e, t)
                })
            },
            html: function(e) {
                return st.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : t;
                    if (!("string" != typeof e || Kt.test(e) || !st.support.htmlSerialize && Ut.test(e) || !st.support.leadingWhitespace && Vt.test(e) || on[(Jt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Yt, "<$1></$2>");
                        try {
                            for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (st.cleanData(b(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                var t = st.isFunction(e);
                return t || "string" == typeof e || (e = st(e).not(this).detach()), this.domManip([e], !0, function(e) {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    (n && 1 === this.nodeType || 11 === this.nodeType) && (st(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
                })
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = et.apply([], e);
                var i, o, a, s, u, l, c = 0,
                    f = this.length,
                    p = this,
                    m = f - 1,
                    y = e[0],
                    v = st.isFunction(y);
                if (v || !(1 >= f || "string" != typeof y || st.support.checkClone) && en.test(y)) return this.each(function(i) {
                    var o = p.eq(i);
                    v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
                });
                if (f && (i = st.buildFragment(e, this[0].ownerDocument, !1, this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                    for (n = n && st.nodeName(o, "tr"), a = st.map(b(i, "script"), h), s = a.length; f > c; c++) u = i, c !== m && (u = st.clone(u, !0, !0), s && st.merge(a, b(u, "script"))), r.call(n && st.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], u, c);
                    if (s) for (l = a[a.length - 1].ownerDocument, st.map(a, g), c = 0; s > c; c++) u = a[c], tn.test(u.type || "") && !st._data(u, "globalEval") && st.contains(l, u) && (u.src ? st.ajax({
                        url: u.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : st.globalEval((u.text || u.textContent || u.innerHTML || "").replace(rn, "")));
                    i = o = null
                }
                return this
            }
        }), st.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            st.fn[e] = function(e) {
                for (var n, r = 0, i = [], o = st(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), st(o[r])[t](n), tt.apply(i, n.get());
                return this.pushStack(i)
            }
        }), st.extend({
            clone: function(e, t, n) {
                var r, i, o, a, s, u = st.contains(e.ownerDocument, e);
                if (st.support.html5Clone || st.isXMLDoc(e) || !Ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (sn.innerHTML = e.outerHTML, sn.removeChild(s = sn.firstChild)), !(st.support.noCloneEvent && st.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || st.isXMLDoc(e))) for (r = b(s), i = b(e), a = 0; null != (o = i[a]); ++a) r[a] && v(o, r[a]);
                if (t) if (n) for (i = i || b(e), r = r || b(s), a = 0; null != (o = i[a]); a++) y(o, r[a]);
                else y(e, s);
                return r = b(s, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = i = o = null, s
            },
            buildFragment: function(e, t, n, r) {
                for (var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === st.type(o)) st.merge(h, o.nodeType ? [o] : o);
                else if (Qt.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = (Jt.exec(o) || ["", ""])[1].toLowerCase(), u = on[a] || on._default, s.innerHTML = u[1] + o.replace(Yt, "<$1></$2>") + u[2], c = u[0]; c--;) s = s.lastChild;
                    if (!st.support.leadingWhitespace && Vt.test(o) && h.push(t.createTextNode(Vt.exec(o)[0])), !st.support.tbody) for (o = "table" !== a || Gt.test(o) ? "<table>" !== u[1] || Gt.test(o) ? 0 : s : s.firstChild, c = o && o.childNodes.length; c--;) st.nodeName(l = o.childNodes[c], "tbody") && !l.childNodes.length && o.removeChild(l);
                    for (st.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = d.lastChild
                } else h.push(t.createTextNode(o));
                for (s && d.removeChild(s), st.support.appendChecked || st.grep(b(h, "input"), x), g = 0; o = h[g++];) if ((!r || -1 === st.inArray(o, r)) && (i = st.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), i && m(s), n)) for (c = 0; o = s[c++];) tn.test(o.type || "") && n.push(o);
                return s = null, d
            },
            cleanData: function(e, n) {
                for (var r, i, o, a, s = 0, u = st.expando, l = st.cache, c = st.support.deleteExpando, f = st.event.special; null != (o = e[s]); s++) if ((n || st.acceptData(o)) && (i = o[u], r = i && l[i])) {
                    if (r.events) for (a in r.events) f[a] ? st.event.remove(o, a) : st.removeEvent(o, a, r.handle);
                    l[i] && (delete l[i], c ? delete o[u] : o.removeAttribute !== t ? o.removeAttribute(u) : o[u] = null, K.push(i))
                }
            }
        });
        var un, ln, cn, fn = /alpha\([^)]*\)/i,
            pn = /opacity\s*=\s*([^)]*)/,
            dn = /^(top|right|bottom|left)$/,
            hn = /^(none|table(?!-c[ea]).+)/,
            gn = /^margin/,
            mn = RegExp("^(" + ut + ")(.*)$", "i"),
            yn = RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"),
            vn = RegExp("^([+-])=(" + ut + ")", "i"),
            bn = {
                BODY: "block"
            },
            xn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Tn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            wn = ["Top", "Right", "Bottom", "Left"],
            Nn = ["Webkit", "O", "Moz", "ms"];
        st.fn.extend({
            css: function(e, n) {
                return st.access(this, function(e, n, r) {
                    var i, o, a = {},
                        s = 0;
                    if (st.isArray(n)) {
                        for (i = ln(e), o = n.length; o > s; s++) a[n[s]] = st.css(e, n[s], !1, i);
                        return a
                    }
                    return r !== t ? st.style(e, n, r) : st.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return N(this, !0)
            },
            hide: function() {
                return N(this)
            },
            toggle: function(e) {
                var t = "boolean" == typeof e;
                return this.each(function() {
                    (t ? e : w(this)) ? st(this).show() : st(this).hide()
                })
            }
        }), st.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = un(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": st.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, u = st.camelCase(n),
                        l = e.style;
                    if (n = st.cssProps[u] || (st.cssProps[u] = T(l, u)), s = st.cssHooks[n] || st.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                    if (a = typeof r, "string" === a && (o = vn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(st.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || st.cssNumber[u] || (r += "px"), st.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                        l[n] = r
                    } catch (c) {}
                }
            },
            css: function(e, n, r, i) {
                var o, a, s, u = st.camelCase(n);
                return n = st.cssProps[u] || (st.cssProps[u] = T(e.style, u)), s = st.cssHooks[n] || st.cssHooks[u], s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = un(e, n, i)), "normal" === o && n in Tn && (o = Tn[n]), r ? (a = parseFloat(o), r === !0 || st.isNumeric(a) ? a || 0 : o) : o
            },
            swap: function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            }
        }), e.getComputedStyle ? (ln = function(t) {
            return e.getComputedStyle(t, null)
        }, un = function(e, n, r) {
            var i, o, a, s = r || ln(e),
                u = s ? s.getPropertyValue(n) || s[n] : t,
                l = e.style;
            return s && ("" !== u || st.contains(e.ownerDocument, e) || (u = st.style(e, n)), yn.test(u) && gn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
        }) : V.documentElement.currentStyle && (ln = function(e) {
            return e.currentStyle
        }, un = function(e, n, r) {
            var i, o, a, s = r || ln(e),
                u = s ? s[n] : t,
                l = e.style;
            return null == u && l && l[n] && (u = l[n]), yn.test(u) && !dn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
        }), st.each(["height", "width"], function(e, n) {
            st.cssHooks[n] = {
                get: function(e, r, i) {
                    return r ? 0 === e.offsetWidth && hn.test(st.css(e, "display")) ? st.swap(e, xn, function() {
                        return E(e, n, i)
                    }) : E(e, n, i) : t
                },
                set: function(e, t, r) {
                    var i = r && ln(e);
                    return C(e, t, r ? k(e, n, r, st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), st.support.opacity || (st.cssHooks.opacity = {
            get: function(e, t) {
                return pn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = st.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === st.trim(o.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = fn.test(o) ? o.replace(fn, i) : o + " " + i)
            }
        }), st(function() {
            st.support.reliableMarginRight || (st.cssHooks.marginRight = {
                get: function(e, n) {
                    return n ? st.swap(e, {
                        display: "inline-block"
                    }, un, [e, "marginRight"]) : t
                }
            }), !st.support.pixelPosition && st.fn.position && st.each(["top", "left"], function(e, n) {
                st.cssHooks[n] = {
                    get: function(e, r) {
                        return r ? (r = un(e, n), yn.test(r) ? st(e).position()[n] + "px" : r) : t
                    }
                }
            })
        }), st.expr && st.expr.filters && (st.expr.filters.hidden = function(e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight || !st.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || st.css(e, "display"))
        }, st.expr.filters.visible = function(e) {
            return !st.expr.filters.hidden(e)
        }), st.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            st.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + wn[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, gn.test(e) || (st.cssHooks[e + t].set = C)
        });
        var Cn = /%20/g,
            kn = /\[\]$/,
            En = /\r?\n/g,
            Sn = /^(?:submit|button|image|reset)$/i,
            An = /^(?:input|select|textarea|keygen)/i;
        st.fn.extend({
            serialize: function() {
                return st.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = st.prop(this, "elements");
                    return e ? st.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !st(this).is(":disabled") && An.test(this.nodeName) && !Sn.test(e) && (this.checked || !Zt.test(e))
                }).map(function(e, t) {
                    var n = st(this).val();
                    return null == n ? null : st.isArray(n) ? st.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(En, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(En, "\r\n")
                    }
                }).get()
            }
        }), st.param = function(e, n) {
            var r, i = [],
                o = function(e, t) {
                    t = st.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(e) || e.jquery && !st.isPlainObject(e)) st.each(e, function() {
                o(this.name, this.value)
            });
            else for (r in e) j(r, e[r], n, o);
            return i.join("&").replace(Cn, "+")
        };
        var jn, Dn, Ln = st.now(),
            Hn = /\?/,
            Mn = /#.*$/,
            qn = /([?&])_=[^&]*/,
            _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            On = /^(?:GET|HEAD)$/,
            Bn = /^\/\//,
            Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Rn = st.fn.load,
            Wn = {},
            $n = {},
            In = "*/".concat("*");
        try {
            Dn = Y.href
        } catch (zn) {
            Dn = V.createElement("a"), Dn.href = "", Dn = Dn.href
        }
        jn = Pn.exec(Dn.toLowerCase()) || [], st.fn.load = function(e, n, r) {
            if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
            var i, o, a, s = this,
                u = e.indexOf(" ");
            return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), st.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), s.length > 0 && st.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n
            }).done(function(e) {
                a = arguments, s.html(i ? st("<div>").append(st.parseHTML(e)).find(i) : e)
            }).complete(r &&
            function(e, t) {
                s.each(r, a || [e.responseText, t, e])
            }), this
        }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            st.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), st.each(["get", "post"], function(e, n) {
            st[n] = function(e, r, i, o) {
                return st.isFunction(r) && (o = o || i, i = r, r = t), st.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: r,
                    success: i
                })
            }
        }), st.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dn,
                type: "GET",
                isLocal: Fn.test(jn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": In,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": st.parseJSON,
                    "text xml": st.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? H(H(e, st.ajaxSettings), t) : H(st.ajaxSettings, e)
            },
            ajaxPrefilter: D(Wn),
            ajaxTransport: D($n),
            ajax: function(e, n) {
                function r(e, n, r, s) {
                    var l, f, v, b, T, N = n;
                    2 !== x && (x = 2, u && clearTimeout(u), i = t, a = s || "", w.readyState = e > 0 ? 4 : 0, r && (b = M(p, w, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (st.lastModified[o] = T), T = w.getResponseHeader("etag"), T && (st.etag[o] = T)), 304 === e ? (l = !0, N = "notmodified") : (l = q(p, b), N = l.state, f = l.data, v = l.error, l = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || N) + "", l ? g.resolveWith(d, [f, N, w]) : g.rejectWith(d, [w, N, v]), w.statusCode(y), y = t, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? f : v]), m.fireWith(d, [w, N]), c && (h.trigger("ajaxComplete", [w, p]), --st.active || st.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var i, o, a, s, u, l, c, f, p = st.ajaxSetup({}, n),
                    d = p.context || p,
                    h = p.context && (d.nodeType || d.jquery) ? st(d) : st.event,
                    g = st.Deferred(),
                    m = st.Callbacks("once memory"),
                    y = p.statusCode || {},
                    v = {},
                    b = {},
                    x = 0,
                    T = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === x) {
                                if (!s) for (s = {}; t = _n.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return x || (e = b[n] = b[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return x || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) if (2 > x) for (t in e) y[t] = [y[t], e[t]];
                            else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || T;
                            return i && i.abort(t), r(0, t), this
                        }
                    };
                if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Dn) + "").replace(Mn, "").replace(Bn, jn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = st.trim(p.dataType || "*").toLowerCase().match(lt) || [""], null == p.crossDomain && (l = Pn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === jn[1] && l[2] === jn[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (jn[3] || ("http:" === jn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = st.param(p.data, p.traditional)), L(Wn, p, n, w), 2 === x) return w;
                c = p.global, c && 0 === st.active++ && st.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !On.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (Hn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = qn.test(o) ? o.replace(qn, "$1_=" + Ln++) : o + (Hn.test(o) ? "&" : "?") + "_=" + Ln++)), p.ifModified && (st.lastModified[o] && w.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && w.setRequestHeader("If-None-Match", st.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + In + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers) w.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) return w.abort();
                T = "abort";
                for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[f](p[f]);
                if (i = L($n, p, n, w)) {
                    w.readyState = 1, c && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, i.send(v, r)
                    } catch (N) {
                        if (!(2 > x)) throw N;
                        r(-1, N)
                    }
                } else r(-1, "No Transport");
                return w
            },
            getScript: function(e, n) {
                return st.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return st.get(e, t, n, "json")
            }
        }), st.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return st.globalEval(e), e
                }
            }
        }), st.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), st.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = V.head || st("head")[0] || V.documentElement;
                return {
                    send: function(t, i) {
                        n = V.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                        }, r.insertBefore(n, r.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Xn = [],
            Un = /(=)\?(?=&|$)|\?\?/;
        st.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Xn.pop() || st.expando + "_" + Ln++;
                return this[e] = !0, e
            }
        }), st.ajaxPrefilter("json jsonp", function(n, r, i) {
            var o, a, s, u = n.jsonp !== !1 && (Un.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Un.test(n.data) && "data");
            return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = st.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Un, "$1" + o) : n.jsonp !== !1 && (n.url += (Hn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return s || st.error(o + " was not called"), s[0]
            }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
                s = arguments
            }, i.always(function() {
                e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Xn.push(o)), s && st.isFunction(a) && a(s[0]), s = a = t
            }), "script") : t
        });
        var Vn, Yn, Jn = 0,
            Gn = e.ActiveXObject &&
        function() {
            var e;
            for (e in Vn) Vn[e](t, !0)
        };
        st.ajaxSettings.xhr = e.ActiveXObject ?
        function() {
            return !this.isLocal && _() || F()
        } : _, Yn = st.ajaxSettings.xhr(), st.support.cors = !! Yn && "withCredentials" in Yn, Yn = st.support.ajax = !! Yn, Yn && st.ajaxTransport(function(n) {
            if (!n.crossDomain || st.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a, s, u = n.xhr();
                        if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                        n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i) u.setRequestHeader(s, i[s])
                        } catch (l) {}
                        u.send(n.hasContent && n.data || null), r = function(e, i) {
                            var s, l, c, f, p;
                            try {
                                if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = st.noop, Gn && delete Vn[a]), i) 4 !== u.readyState && u.abort();
                                else {
                                    f = {}, s = u.status, p = u.responseXML, c = u.getAllResponseHeaders(), p && p.documentElement && (f.xml = p), "string" == typeof u.responseText && (f.text = u.responseText);
                                    try {
                                        l = u.statusText
                                    } catch (d) {
                                        l = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                            } catch (h) {
                                i || o(-1, h)
                            }
                            f && o(s, l, f, c)
                        }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Jn, Gn && (Vn || (Vn = {}, st(e).unload(Gn)), Vn[a] = r), u.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(t, !0)
                    }
                }
            }
        });
        var Qn, Kn, Zn = /^(?:toggle|show|hide)$/,
            er = RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"),
            tr = /queueHooks$/,
            nr = [W],
            rr = {
                "*": [function(e, t) {
                    var n, r, i = this.createTween(e, t),
                        o = er.exec(t),
                        a = i.cur(),
                        s = +a || 0,
                        u = 1,
                        l = 20;
                    if (o) {
                        if (n = +o[2], r = o[3] || (st.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                            s = st.css(i.elem, e, !0) || n || 1;
                            do u = u || ".5", s /= u, st.style(i.elem, e, s + r);
                            while (u !== (u = i.cur() / a) && 1 !== u && --l)
                        }
                        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                    }
                    return i
                }]
            };
        st.Animation = st.extend(P, {
            tweener: function(e, t) {
                st.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], rr[n] = rr[n] || [], rr[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? nr.unshift(e) : nr.push(e)
            }
        }), st.Tween = $, $.prototype = {
            constructor: $,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (st.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = $.propHooks[this.prop];
                return e && e.get ? e.get(this) : $.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = $.propHooks[this.prop];
                return this.pos = t = this.options.duration ? st.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
            }
        }, $.prototype.init.prototype = $.prototype, $.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = st.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    st.fx.step[e.prop] ? st.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[st.cssProps[e.prop]] || st.cssHooks[e.prop]) ? st.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, st.each(["toggle", "show", "hide"], function(e, t) {
            var n = st.fn[t];
            st.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
            }
        }), st.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(w).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = st.isEmptyObject(e),
                    o = st.speed(t, n, r),
                    a = function() {
                        var t = P(this, st.extend({}, e), o);
                        a.finish = function() {
                            t.stop(!0)
                        }, (i || st._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    };
                return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = st.timers,
                        a = st._data(this);
                    if (n) a[n] && a[n].stop && i(a[n]);
                    else for (n in a) a[n] && a[n].stop && tr.test(n) && i(a[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                    (t || !r) && st.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = st._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = st.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, st.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), st.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            st.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), st.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? st.extend({}, e) : {
                complete: n || !n && t || st.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !st.isFunction(t) && t
            };
            return r.duration = st.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in st.fx.speeds ? st.fx.speeds[r.duration] : st.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                st.isFunction(r.old) && r.old.call(this), r.queue && st.dequeue(this, r.queue)
            }, r
        }, st.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, st.timers = [], st.fx = $.prototype.init, st.fx.tick = function() {
            var e, n = st.timers,
                r = 0;
            for (Qn = st.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
            n.length || st.fx.stop(), Qn = t
        }, st.fx.timer = function(e) {
            e() && st.timers.push(e) && st.fx.start()
        }, st.fx.interval = 13, st.fx.start = function() {
            Kn || (Kn = setInterval(st.fx.tick, st.fx.interval))
        }, st.fx.stop = function() {
            clearInterval(Kn), Kn = null
        }, st.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, st.fx.step = {}, st.expr && st.expr.filters && (st.expr.filters.animated = function(e) {
            return st.grep(st.timers, function(t) {
                return e === t.elem
            }).length
        }), st.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                st.offset.setOffset(this, e, t)
            });
            var n, r, i = {
                top: 0,
                left: 0
            },
                o = this[0],
                a = o && o.ownerDocument;
            if (a) return n = a.documentElement, st.contains(n, o) ? (o.getBoundingClientRect !== t && (i = o.getBoundingClientRect()), r = z(a), {
                top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : i
        }, st.offset = {
            setOffset: function(e, t, n) {
                var r = st.css(e, "position");
                "static" === r && (e.style.position = "relative");
                var i, o, a = st(e),
                    s = a.offset(),
                    u = st.css(e, "top"),
                    l = st.css(e, "left"),
                    c = ("absolute" === r || "fixed" === r) && st.inArray("auto", [u, l]) > -1,
                    f = {},
                    p = {};
                c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), st.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
            }
        }, st.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    },
                        r = this[0];
                    return "fixed" === st.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), st.nodeName(e[0], "html") || (n = e.offset()), n.top += st.css(e[0], "borderTopWidth", !0), n.left += st.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - st.css(r, "marginTop", !0),
                        left: t.left - n.left - st.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || V.documentElement; e && !st.nodeName(e, "html") && "static" === st.css(e, "position");) e = e.offsetParent;
                    return e || V.documentElement
                })
            }
        }), st.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            st.fn[e] = function(i) {
                return st.access(this, function(e, i, o) {
                    var a = z(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? st(a).scrollLeft() : o, r ? o : st(a).scrollTop()) : e[i] = o, t)
                }, e, i, arguments.length, null)
            }
        }), st.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            st.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                st.fn[i] = function(i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i),
                        s = r || (i === !0 || o === !0 ? "margin" : "border");
                    return st.access(this, function(n, r, i) {
                        var o;
                        return st.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? st.css(n, r, s) : st.style(n, r, i, s)
                    }, n, a ? i : t, a, null)
                }
            })
        }), e.jQuery = e.$ = st, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return st
        })
    })(window);

/*
     AngularJS v1.0.4
     (c) 2010-2012 Google, Inc. http://angularjs.org
     License: MIT
    */
    (function(T, Y, p) {
        'use strict';

        function m(b, a, c) {
            var d;
            if (b) if (L(b)) for (d in b) d != "prototype" && d != "length" && d != "name" && b.hasOwnProperty(d) && a.call(c, b[d], d);
            else if (b.forEach && b.forEach !== m) b.forEach(a, c);
            else if (M(b) && va(b.length)) for (d = 0; d < b.length; d++) a.call(c, b[d], d);
            else for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d);
            return b
        }

        function mb(b) {
            var a = [],
                c;
            for (c in b) b.hasOwnProperty(c) && a.push(c);
            return a.sort()
        }

        function fc(b, a, c) {
            for (var d = mb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
            return d
        }

        function nb(b) {
            return function(a, c) {
                b(c, a)
            }
        }

        function wa() {
            for (var b = Z.length, a; b;) {
                b--;
                a = Z[b].charCodeAt(0);
                if (a == 57) return Z[b] = "A", Z.join("");
                if (a == 90) Z[b] = "0";
                else return Z[b] = String.fromCharCode(a + 1), Z.join("")
            }
            Z.unshift("0");
            return Z.join("")
        }

        function y(b) {
            m(arguments, function(a) {
                a !== b && m(a, function(a, d) {
                    b[d] = a
                })
            });
            return b
        }

        function F(b) {
            return parseInt(b, 10)
        }

        function xa(b, a) {
            return y(new(y(function() {}, {
                prototype: b
            })), a)
        }

        function C() {}

        function ma(b) {
            return b
        }

        function H(b) {
            return function() {
                return b
            }
        }

        function t(b) {
            return typeof b == "undefined"
        }

        function v(b) {
            return typeof b != "undefined"
        }

        function M(b) {
            return b != null && typeof b == "object"
        }

        function E(b) {
            return typeof b == "string"
        }

        function va(b) {
            return typeof b == "number"
        }

        function na(b) {
            return Sa.apply(b) == "[object Date]"
        }

        function I(b) {
            return Sa.apply(b) == "[object Array]"
        }

        function L(b) {
            return typeof b == "function"
        }

        function oa(b) {
            return b && b.document && b.location && b.alert && b.setInterval
        }

        function Q(b) {
            return E(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
        }

        function gc(b) {
            return b && (b.nodeName || b.bind && b.find)
        }

        function Ta(b, a, c) {
            var d = [];
            m(b, function(b, g, i) {
                d.push(a.call(c, b, g, i))
            });
            return d
        }

        function ya(b, a) {
            if (b.indexOf) return b.indexOf(a);
            for (var c = 0; c < b.length; c++) if (a === b[c]) return c;
            return -1
        }

        function Ua(b, a) {
            var c = ya(b, a);
            c >= 0 && b.splice(c, 1);
            return a
        }

        function U(b, a) {
            if (oa(b) || b && b.$evalAsync && b.$watch) throw u("Can't copy Window or Scope");
            if (a) {
                if (b === a) throw u("Can't copy equivalent objects or arrays");
                if (I(b)) {
                    for (; a.length;) a.pop();
                    for (var c = 0; c < b.length; c++) a.push(U(b[c]))
                } else for (c in m(a, function(b, c) {
                    delete a[c]
                }), b) a[c] = U(b[c])
            } else(a = b) && (I(b) ? a = U(b, []) : na(b) ? a = new Date(b.getTime()) : M(b) && (a = U(b, {})));
            return a
        }

        function hc(b, a) {
            var a = a || {},
                c;
            for (c in b) b.hasOwnProperty(c) && c.substr(0, 2) !== "$$" && (a[c] = b[c]);
            return a
        }

        function ha(b, a) {
            if (b === a) return !0;
            if (b === null || a === null) return !1;
            if (b !== b && a !== a) return !0;
            var c = typeof b,
                d;
            if (c == typeof a && c == "object") if (I(b)) {
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++) if (!ha(b[d], a[d])) return !1;
                    return !0
                }
            } else if (na(b)) return na(a) && b.getTime() == a.getTime();
            else {
                if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || oa(b) || oa(a)) return !1;
                c = {};
                for (d in b) if (!(d.charAt(0) === "$" || L(b[d]))) {
                    if (!ha(b[d], a[d])) return !1;
                    c[d] = !0
                }
                for (d in a) if (!c[d] && d.charAt(0) !== "$" && a[d] !== p && !L(a[d])) return !1;
                return !0
            }
            return !1
        }

        function Va(b, a) {
            var c = arguments.length > 2 ? ia.call(arguments, 2) : [];
            return L(a) && !(a instanceof RegExp) ? c.length ?
            function() {
                return arguments.length ? a.apply(b, c.concat(ia.call(arguments, 0))) : a.apply(b, c)
            } : function() {
                return arguments.length ? a.apply(b, arguments) : a.call(b)
            } : a
        }

        function ic(b, a) {
            var c = a;
            /^\$+/.test(b) ? c = p : oa(a) ? c = "$WINDOW" : a && Y === a ? c = "$DOCUMENT" : a && a.$evalAsync && a.$watch && (c = "$SCOPE");
            return c
        }

        function da(b, a) {
            return JSON.stringify(b, ic, a ? "  " : null)
        }

        function ob(b) {
            return E(b) ? JSON.parse(b) : b
        }

        function Wa(b) {
            b && b.length !== 0 ? (b = D("" + b), b = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]")) : b = !1;
            return b
        }

        function pa(b) {
            b = z(b).clone();
            try {
                b.html("")
            } catch (a) {}
            return z("<div>").append(b).html().match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + D(b)
            })
        }

        function Xa(b) {
            var a = {},
                c, d;
            m((b || "").split("&"), function(b) {
                b && (c = b.split("="), d = decodeURIComponent(c[0]), a[d] = v(c[1]) ? decodeURIComponent(c[1]) : !0)
            });
            return a
        }

        function pb(b) {
            var a = [];
            m(b, function(b, d) {
                a.push(Ya(d, !0) + (b === !0 ? "" : "=" + Ya(b, !0)))
            });
            return a.length ? a.join("&") : ""
        }

        function Za(b) {
            return Ya(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function Ya(b, a) {
            return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(a ? null : /%20/g, "+")
        }

        function jc(b, a) {
            function c(a) {
                a && d.push(a)
            }
            var d = [b],
                e, g, i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                f = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            m(i, function(a) {
                i[a] = !0;
                c(Y.getElementById(a));
                a = a.replace(":", "\\:");
                b.querySelectorAll && (m(b.querySelectorAll("." + a), c), m(b.querySelectorAll("." + a + "\\:"), c), m(b.querySelectorAll("[" + a + "]"), c))
            });
            m(d, function(a) {
                if (!e) {
                    var b = f.exec(" " + a.className + " ");
                    b ? (e = a, g = (b[2] || "").replace(/\s+/g, ",")) : m(a.attributes, function(b) {
                        if (!e && i[b.name]) e = a, g = b.value
                    })
                }
            });
            e && a(e, g ? [g] : [])
        }

        function qb(b, a) {
            b = z(b);
            a = a || [];
            a.unshift(["$provide", function(a) {
                a.value("$rootElement", b)
            }]);
            a.unshift("ng");
            var c = rb(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, i) {
                a.$apply(function() {
                    b.data("$injector", i);
                    c(b)(a)
                })
            }]);
            return c
        }

        function $a(b, a) {
            a = a || "_";
            return b.replace(kc, function(b, d) {
                return (d ? a : "") + b.toLowerCase()
            })
        }

        function ab(b, a, c) {
            if (!b) throw new u("Argument '" + (a || "?") + "' is " + (c || "required"));
            return b
        }

        function qa(b, a, c) {
            c && I(b) && (b = b[b.length - 1]);
            ab(L(b), a, "not a function, got " + (b && typeof b == "object" ? b.constructor.name || "Object" : typeof b));
            return b
        }

        function lc(b) {
            function a(a, b, e) {
                return a[b] || (a[b] = e())
            }
            return a(a(b, "angular", Object), "module", function() {
                var b = {};
                return function(d, e, g) {
                    e && b.hasOwnProperty(d) && (b[d] = null);
                    return a(b, d, function() {
                        function a(c, d, e) {
                            return function() {
                                b[e || "push"]([c, d, arguments]);
                                return k
                            }
                        }
                        if (!e) throw u("No module: " + d);
                        var b = [],
                            c = [],
                            j = a("$injector", "invoke"),
                            k = {
                                _invokeQueue: b,
                                _runBlocks: c,
                                requires: e,
                                name: d,
                                provider: a("$provide", "provider"),
                                factory: a("$provide", "factory"),
                                service: a("$provide", "service"),
                                value: a("$provide", "value"),
                                constant: a("$provide", "constant", "unshift"),
                                filter: a("$filterProvider", "register"),
                                controller: a("$controllerProvider", "register"),
                                directive: a("$compileProvider", "directive"),
                                config: j,
                                run: function(a) {
                                    c.push(a);
                                    return this
                                }
                            };
                        g && j(g);
                        return k
                    })
                }
            })
        }

        function sb(b) {
            return b.replace(mc, function(a, b, d, e) {
                return e ? d.toUpperCase() : d
            }).replace(nc, "Moz$1")
        }

        function bb(b, a) {
            function c() {
                var e;
                for (var b = [this], c = a, i, f, h, j, k, l; b.length;) {
                    i = b.shift();
                    f = 0;
                    for (h = i.length; f < h; f++) {
                        j = z(i[f]);
                        c ? j.triggerHandler("$destroy") : c = !c;
                        k = 0;
                        for (e = (l = j.children()).length, j = e; k < j; k++) b.push(ja(l[k]))
                    }
                }
                return d.apply(this, arguments)
            }
            var d = ja.fn[b],
                d = d.$original || d;
            c.$original = d;
            ja.fn[b] = c
        }

        function O(b) {
            if (b instanceof O) return b;
            if (!(this instanceof O)) {
                if (E(b) && b.charAt(0) != "<") throw u("selectors not implemented");
                return new O(b)
            }
            if (E(b)) {
                var a = Y.createElement("div");
                a.innerHTML = "<div>&#160;</div>" + b;
                a.removeChild(a.firstChild);
                cb(this, a.childNodes);
                this.remove()
            } else cb(this, b)
        }

        function db(b) {
            return b.cloneNode(!0)
        }

        function ra(b) {
            tb(b);
            for (var a = 0, b = b.childNodes || []; a < b.length; a++) ra(b[a])
        }

        function ub(b, a, c) {
            var d = $(b, "events");
            $(b, "handle") && (t(a) ? m(d, function(a, c) {
                eb(b, c, a);
                delete d[c]
            }) : t(c) ? (eb(b, a, d[a]), delete d[a]) : Ua(d[a], c))
        }

        function tb(b) {
            var a = b[za],
                c = Aa[a];
            c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), ub(b)), delete Aa[a], b[za] = p)
        }

        function $(b, a, c) {
            var d = b[za],
                d = Aa[d || -1];
            if (v(c)) d || (b[za] = d = ++oc, d = Aa[d] = {}), d[a] = c;
            else return d && d[a]
        }

        function vb(b, a, c) {
            var d = $(b, "data"),
                e = v(c),
                g = !e && v(a),
                i = g && !M(a);
            !d && !i && $(b, "data", d = {});
            if (e) d[a] = c;
            else if (g) if (i) return d && d[a];
            else y(d, a);
            else return d
        }

        function Ba(b, a) {
            return (" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") > -1
        }

        function wb(b, a) {
            a && m(a.split(" "), function(a) {
                b.className = Q((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + Q(a) + " ", " "))
            })
        }

        function xb(b, a) {
            a && m(a.split(" "), function(a) {
                if (!Ba(b, a)) b.className = Q(b.className + " " + Q(a))
            })
        }

        function cb(b, a) {
            if (a) for (var a = !a.nodeName && v(a.length) && !oa(a) ? a : [a], c = 0; c < a.length; c++) b.push(a[c])
        }

        function yb(b, a) {
            return Ca(b, "$" + (a || "ngController") + "Controller")
        }

        function Ca(b, a, c) {
            b = z(b);
            for (b[0].nodeType == 9 && (b = b.find("html")); b.length;) {
                if (c = b.data(a)) return c;
                b = b.parent()
            }
        }

        function zb(b, a) {
            var c = Da[a.toLowerCase()];
            return c && Ab[b.nodeName] && c
        }

        function pc(b, a) {
            var c = function(c, e) {
                    if (!c.preventDefault) c.preventDefault = function() {
                        c.returnValue = !1
                    };
                    if (!c.stopPropagation) c.stopPropagation = function() {
                        c.cancelBubble = !0
                    };
                    if (!c.target) c.target = c.srcElement || Y;
                    if (t(c.defaultPrevented)) {
                        var g = c.preventDefault;
                        c.preventDefault = function() {
                            c.defaultPrevented = !0;
                            g.call(c)
                        };
                        c.defaultPrevented = !1
                    }
                    c.isDefaultPrevented = function() {
                        return c.defaultPrevented
                    };
                    m(a[e || c.type], function(a) {
                        a.call(b, c)
                    });
                    aa <= 8 ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
                };
            c.elem = b;
            return c
        }

        function ga(b) {
            var a = typeof b,
                c;
            if (a == "object" && b !== null) if (typeof(c = b.$$hashKey) == "function") c = b.$$hashKey();
            else {
                if (c === p) c = b.$$hashKey = wa()
            } else c = b;
            return a + ":" + c
        }

        function Ea(b) {
            m(b, this.put, this)
        }

        function fb() {}

        function Bb(b) {
            var a, c;
            if (typeof b == "function") {
                if (!(a = b.$inject)) a = [], c = b.toString().replace(qc, ""), c = c.match(rc), m(c[1].split(sc), function(b) {
                    b.replace(tc, function(b, c, d) {
                        a.push(d)
                    })
                }), b.$inject = a
            } else I(b) ? (c = b.length - 1, qa(b[c], "fn"), a = b.slice(0, c)) : qa(b, "fn", !0);
            return a
        }

        function rb(b) {
            function a(a) {
                return function(b, c) {
                    if (M(b)) m(b, nb(a));
                    else return a(b, c)
                }
            }

            function c(a, b) {
                if (L(b) || I(b)) b = l.instantiate(b);
                if (!b.$get) throw u("Provider " + a + " must define $get factory method.");
                return k[a + f] = b
            }

            function d(a, b) {
                return c(a, {
                    $get: b
                })
            }

            function e(a) {
                var b = [];
                m(a, function(a) {
                    if (!j.get(a)) if (j.put(a, !0), E(a)) {
                        var c = sa(a);
                        b = b.concat(e(c.requires)).concat(c._runBlocks);
                        try {
                            for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                                var h = d[c],
                                    g = h[0] == "$injector" ? l : l.get(h[0]);
                                g[h[1]].apply(g, h[2])
                            }
                        } catch (n) {
                            throw n.message && (n.message += " from " + a), n;
                        }
                    } else if (L(a)) try {
                        b.push(l.invoke(a))
                    } catch (i) {
                        throw i.message && (i.message += " from " + a), i;
                    } else if (I(a)) try {
                        b.push(l.invoke(a))
                    } catch (k) {
                        throw k.message && (k.message += " from " + String(a[a.length - 1])), k;
                    } else qa(a, "module")
                });
                return b
            }

            function g(a, b) {
                function c(d) {
                    if (typeof d !== "string") throw u("Service name expected");
                    if (a.hasOwnProperty(d)) {
                        if (a[d] === i) throw u("Circular dependency: " + h.join(" <- "));
                        return a[d]
                    } else try {
                        return h.unshift(d), a[d] = i, a[d] = b(d)
                    } finally {
                        h.shift()
                    }
                }

                function d(a, b, e) {
                    var f = [],
                        h = Bb(a),
                        j, g, n;
                    g = 0;
                    for (j = h.length; g < j; g++) n = h[g], f.push(e && e.hasOwnProperty(n) ? e[n] : c(n));
                    a.$inject || (a = a[j]);
                    switch (b ? -1 : f.length) {
                    case 0:
                        return a();
                    case 1:
                        return a(f[0]);
                    case 2:
                        return a(f[0], f[1]);
                    case 3:
                        return a(f[0], f[1], f[2]);
                    case 4:
                        return a(f[0], f[1], f[2], f[3]);
                    case 5:
                        return a(f[0], f[1], f[2], f[3], f[4]);
                    case 6:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5]);
                    case 7:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6]);
                    case 8:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                    case 9:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
                    case 10:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
                    default:
                        return a.apply(b, f)
                    }
                }
                return {
                    invoke: d,
                    instantiate: function(a, b) {
                        var c = function() {},
                            e;
                        c.prototype = (I(a) ? a[a.length - 1] : a).prototype;
                        c = new c;
                        e = d(a, c, b);
                        return M(e) ? e : c
                    },
                    get: c,
                    annotate: Bb
                }
            }
            var i = {},
                f = "Provider",
                h = [],
                j = new Ea,
                k = {
                    $provide: {
                        provider: a(c),
                        factory: a(d),
                        service: a(function(a, b) {
                            return d(a, ["$injector", function(a) {
                                return a.instantiate(b)
                            }])
                        }),
                        value: a(function(a, b) {
                            return d(a, H(b))
                        }),
                        constant: a(function(a, b) {
                            k[a] = b;
                            o[a] = b
                        }),
                        decorator: function(a, b) {
                            var c = l.get(a + f),
                                d = c.$get;
                            c.$get = function() {
                                var a = r.invoke(d, c);
                                return r.invoke(b, null, {
                                    $delegate: a
                                })
                            }
                        }
                    }
                },
                l = g(k, function() {
                    throw u("Unknown provider: " + h.join(" <- "));
                }),
                o = {},
                r = o.$injector = g(o, function(a) {
                    a = l.get(a + f);
                    return r.invoke(a.$get, a)
                });
            m(e(b), function(a) {
                r.invoke(a || C)
            });
            return r
        }

        function uc() {
            var b = !0;
            this.disableAutoScrolling = function() {
                b = !1
            };
            this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
                function e(a) {
                    var b = null;
                    m(a, function(a) {
                        !b && D(a.nodeName) === "a" && (b = a)
                    });
                    return b
                }

                function g() {
                    var b = c.hash(),
                        d;
                    b ? (d = i.getElementById(b)) ? d.scrollIntoView() : (d = e(i.getElementsByName(b))) ? d.scrollIntoView() : b === "top" && a.scrollTo(0, 0) : a.scrollTo(0, 0)
                }
                var i = a.document;
                b && d.$watch(function() {
                    return c.hash()
                }, function() {
                    d.$evalAsync(g)
                });
                return g
            }]
        }

        function vc(b, a, c, d) {
            function e(a) {
                try {
                    a.apply(null, ia.call(arguments, 1))
                } finally {
                    if (n--, n === 0) for (; w.length;) try {
                        w.pop()()
                    } catch (b) {
                        c.error(b)
                    }
                }
            }

            function g(a, b) {
                (function ea() {
                    m(q, function(a) {
                        a()
                    });
                    x = b(ea, a)
                })()
            }

            function i() {
                X != f.url() && (X = f.url(), m(s, function(a) {
                    a(f.url())
                }))
            }
            var f = this,
                h = a[0],
                j = b.location,
                k = b.history,
                l = b.setTimeout,
                o = b.clearTimeout,
                r = {};
            f.isMock = !1;
            var n = 0,
                w = [];
            f.$$completeOutstandingRequest = e;
            f.$$incOutstandingRequestCount = function() {
                n++
            };
            f.notifyWhenNoOutstandingRequests = function(a) {
                m(q, function(a) {
                    a()
                });
                n === 0 ? a() : w.push(a)
            };
            var q = [],
                x;
            f.addPollFn = function(a) {
                t(x) && g(100, l);
                q.push(a);
                return a
            };
            var X = j.href,
                A = a.find("base");
            f.url = function(a, b) {
                if (a) {
                    if (X != a) return X = a, d.history ? b ? k.replaceState(null, "", a) : (k.pushState(null, "", a), A.attr("href", A.attr("href"))) : b ? j.replace(a) : j.href = a, f
                } else return j.href.replace(/%27/g, "'")
            };
            var s = [],
                J = !1;
            f.onUrlChange = function(a) {
                J || (d.history && z(b).bind("popstate", i), d.hashchange ? z(b).bind("hashchange", i) : f.addPollFn(i), J = !0);
                s.push(a);
                return a
            };
            f.baseHref = function() {
                var a = A.attr("href");
                return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : a
            };
            var ba = {},
                P = "",
                K = f.baseHref();
            f.cookies = function(a, b) {
                var d, e, f, j;
                if (a) if (b === p) h.cookie = escape(a) + "=;path=" + K + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
                else {
                    if (E(b)) d = (h.cookie = escape(a) + "=" + escape(b) + ";path=" + K).length + 1, d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")
                } else {
                    if (h.cookie !== P) {
                        P = h.cookie;
                        d = P.split("; ");
                        ba = {};
                        for (f = 0; f < d.length; f++) e = d[f], j = e.indexOf("="), j > 0 && (ba[unescape(e.substring(0, j))] = unescape(e.substring(j + 1)))
                    }
                    return ba
                }
            };
            f.defer = function(a, b) {
                var c;
                n++;
                c = l(function() {
                    delete r[c];
                    e(a)
                }, b || 0);
                r[c] = !0;
                return c
            };
            f.defer.cancel = function(a) {
                return r[a] ? (delete r[a], o(a), e(C), !0) : !1
            }
        }

        function wc() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
                return new vc(b, d, a, c)
            }]
        }

        function xc() {
            this.$get = function() {
                function b(b, d) {
                    function e(a) {
                        if (a != l) {
                            if (o) {
                                if (o == a) o = a.n
                            } else o = a;
                            g(a.n, a.p);
                            g(a, l);
                            l = a;
                            l.n = null
                        }
                    }

                    function g(a, b) {
                        if (a != b) {
                            if (a) a.p = b;
                            if (b) b.n = a
                        }
                    }
                    if (b in a) throw u("cacheId " + b + " taken");
                    var i = 0,
                        f = y({}, d, {
                            id: b
                        }),
                        h = {},
                        j = d && d.capacity || Number.MAX_VALUE,
                        k = {},
                        l = null,
                        o = null;
                    return a[b] = {
                        put: function(a, b) {
                            var c = k[a] || (k[a] = {
                                key: a
                            });
                            e(c);
                            t(b) || (a in h || i++, h[a] = b, i > j && this.remove(o.key))
                        },
                        get: function(a) {
                            var b = k[a];
                            if (b) return e(b), h[a]
                        },
                        remove: function(a) {
                            var b = k[a];
                            if (b) {
                                if (b == l) l = b.p;
                                if (b == o) o = b.n;
                                g(b.n, b.p);
                                delete k[a];
                                delete h[a];
                                i--
                            }
                        },
                        removeAll: function() {
                            h = {};
                            i = 0;
                            k = {};
                            l = o = null
                        },
                        destroy: function() {
                            k = f = h = null;
                            delete a[b]
                        },
                        info: function() {
                            return y({}, f, {
                                size: i
                            })
                        }
                    }
                }
                var a = {};
                b.info = function() {
                    var b = {};
                    m(a, function(a, e) {
                        b[e] = a.info()
                    });
                    return b
                };
                b.get = function(b) {
                    return a[b]
                };
                return b
            }
        }

        function yc() {
            this.$get = ["$cacheFactory", function(b) {
                return b("templates")
            }]
        }

        function Cb(b) {
            var a = {},
                c = "Directive",
                d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
                e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
                g = "Template must have exactly one root element. was: ";
            this.directive = function f(d, e) {
                E(d) ? (ab(e, "directive"), a.hasOwnProperty(d) || (a[d] = [], b.factory(d + c, ["$injector", "$exceptionHandler", function(b, c) {
                    var e = [];
                    m(a[d], function(a) {
                        try {
                            var f = b.invoke(a);
                            if (L(f)) f = {
                                compile: H(f)
                            };
                            else if (!f.compile && f.link) f.compile = H(f.link);
                            f.priority = f.priority || 0;
                            f.name = f.name || d;
                            f.require = f.require || f.controller && f.name;
                            f.restrict = f.restrict || "A";
                            e.push(f)
                        } catch (j) {
                            c(j)
                        }
                    });
                    return e
                }])), a[d].push(e)) : m(d, nb(f));
                return this
            };
            this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", function(b, h, j, k, l, o, r, n) {
                function w(a, b, c) {
                    a instanceof z || (a = z(a));
                    m(a, function(b, c) {
                        b.nodeType == 3 && b.nodeValue.match(/\S+/) && (a[c] = z(b).wrap("<span></span>").parent()[0])
                    });
                    var d = x(a, b, a, c);
                    return function(b, c) {
                        ab(b, "scope");
                        var e = c ? ta.clone.call(a) : a;
                        e.data("$scope", b);
                        q(e, "ng-scope");
                        c && c(e, b);
                        d && d(b, e, e);
                        return e
                    }
                }

                function q(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {}
                }

                function x(a, b, c, d) {
                    function e(a, c, d, j) {
                        var g, h, k, n, o, l, r, q = [];
                        o = 0;
                        for (l = c.length; o < l; o++) q.push(c[o]);
                        r = o = 0;
                        for (l = f.length; o < l; r++) h = q[r], c = f[o++], g = f[o++], c ? (c.scope ? (k = a.$new(M(c.scope)), z(h).data("$scope", k)) : k = a, (n = c.transclude) || !j && b ? c(g, k, h, d, function(b) {
                            return function(c) {
                                var d = a.$new();
                                return b(d, c).bind("$destroy", Va(d, d.$destroy))
                            }
                        }(n || b)) : c(g, k, h, p, j)) : g && g(a, h.childNodes, p, j)
                    }
                    for (var f = [], j, g, h, k = 0; k < a.length; k++) g = new ea, j = X(a[k], [], g, d), g = (j = j.length ? A(j, a[k], g, b, c) : null) && j.terminal || !a[k].childNodes.length ? null : x(a[k].childNodes, j ? j.transclude : b), f.push(j), f.push(g), h = h || j || g;
                    return h ? e : null
                }

                function X(a, b, c, f) {
                    var j = c.$attr,
                        g;
                    switch (a.nodeType) {
                    case 1:
                        s(b, fa(Db(a).toLowerCase()), "E", f);
                        var h, k, n;
                        g = a.attributes;
                        for (var o = 0, l = g && g.length; o < l; o++) if (h = g[o], h.specified) k = h.name, n = fa(k.toLowerCase()), j[n] = k, c[n] = h = Q(aa && k == "href" ? decodeURIComponent(a.getAttribute(k, 2)) : h.value), zb(a, n) && (c[n] = !0), V(a, b, h, n), s(b, n, "A", f);
                        a = a.className;
                        if (E(a) && a !== "") for (; g = e.exec(a);) n = fa(g[2]), s(b, n, "C", f) && (c[n] = Q(g[3])), a = a.substr(g.index + g[0].length);
                        break;
                    case 3:
                        G(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (g = d.exec(a.nodeValue)) n = fa(g[1]), s(b, n, "M", f) && (c[n] = Q(g[2]))
                        } catch (r) {}
                    }
                    b.sort(P);
                    return b
                }

                function A(a, b, c, d, e) {
                    function f(a, b) {
                        if (a) a.require = B.require, l.push(a);
                        if (b) b.require = B.require, ca.push(b)
                    }

                    function h(a, b) {
                        var c, d = "data",
                            e = !1;
                        if (E(a)) {
                            for (;
                            (c = a.charAt(0)) == "^" || c == "?";) a = a.substr(1), c == "^" && (d = "inheritedData"), e = e || c == "?";
                            c = b[d]("$" + a + "Controller");
                            if (!c && !e) throw u("No controller: " + a);
                        } else I(a) && (c = [], m(a, function(a) {
                            c.push(h(a, b))
                        }));
                        return c
                    }

                    function k(a, d, e, f, g) {
                        var n, q, w, J, Ga;
                        n = b === e ? c : hc(c, new ea(z(e), c.$attr));
                        q = n.$$element;
                        if (A) {
                            var x = /^\s*([@=&])\s*(\w*)\s*$/,
                                s = d.$parent || d;
                            m(A.scope, function(a, b) {
                                var c = a.match(x) || [],
                                    e = c[2] || b,
                                    f, g, j;
                                switch (c[1]) {
                                case "@":
                                    n.$observe(e, function(a) {
                                        d[b] = a
                                    });
                                    n.$$observers[e].$$scope = s;
                                    break;
                                case "=":
                                    g = o(n[e]);
                                    j = g.assign ||
                                    function() {
                                        f = d[b] = g(s);
                                        throw u(Eb + n[e] + " (directive: " + A.name + ")");
                                    };
                                    f = d[b] = g(s);
                                    d.$watch(function() {
                                        var a = g(s);
                                        a !== d[b] && (a !== f ? f = d[b] = a : j(s, a = f = d[b]));
                                        return a
                                    });
                                    break;
                                case "&":
                                    g = o(n[e]);
                                    d[b] = function(a) {
                                        return g(s, a)
                                    };
                                    break;
                                default:
                                    throw u("Invalid isolate scope definition for directive " + A.name + ": " + a);
                                }
                            })
                        }
                        t && m(t, function(a) {
                            var b = {
                                $scope: d,
                                $element: q,
                                $attrs: n,
                                $transclude: g
                            };
                            Ga = a.controller;
                            Ga == "@" && (Ga = n[a.name]);
                            q.data("$" + a.name + "Controller", r(Ga, b))
                        });
                        f = 0;
                        for (w = l.length; f < w; f++) try {
                            J = l[f], J(d, q, n, J.require && h(J.require, q))
                        } catch (X) {
                            j(X, pa(q))
                        }
                        a && a(d, e.childNodes, p, g);
                        f = 0;
                        for (w = ca.length; f < w; f++) try {
                            J = ca[f], J(d, q, n, J.require && h(J.require, q))
                        } catch (Ha) {
                            j(Ha, pa(q))
                        }
                    }
                    for (var n = -Number.MAX_VALUE, l = [], ca = [], x = null, A = null, P = null, s = c.$$element = z(b), B, G, V, C, v = d, t, y, W, D = 0, F = a.length; D < F; D++) {
                        B = a[D];
                        V = p;
                        if (n > B.priority) break;
                        if (W = B.scope) K("isolated scope", A, B, s), M(W) && (q(s, "ng-isolate-scope"), A = B), q(s, "ng-scope"), x = x || B;
                        G = B.name;
                        if (W = B.controller) t = t || {}, K("'" + G + "' controller", t[G], B, s), t[G] = B;
                        if (W = B.transclude) K("transclusion", C, B, s), C = B, n = B.priority, W == "element" ? (V = z(b), s = c.$$element = z(Y.createComment(" " + G + ": " + c[G] + " ")), b = s[0], Fa(e, z(V[0]), b), v = w(V, d, n)) : (V = z(db(b)).contents(), s.html(""), v = w(V, d));
                        if (W = B.template) if (K("template", P, B, s), P = B, W = Ha(W), B.replace) {
                            V = z("<div>" + Q(W) + "</div>").contents();
                            b = V[0];
                            if (V.length != 1 || b.nodeType !== 1) throw new u(g + W);
                            Fa(e, s, b);
                            G = {
                                $attr: {}
                            };
                            a = a.concat(X(b, a.splice(D + 1, a.length - (D + 1)), G));
                            J(c, G);
                            F = a.length
                        } else s.html(W);
                        if (B.templateUrl) K("template", P, B, s), P = B, k = ba(a.splice(D, a.length - D), k, s, c, e, B.replace, v), F = a.length;
                        else if (B.compile) try {
                            y = B.compile(s, c, v), L(y) ? f(null, y) : y && f(y.pre, y.post)
                        } catch (H) {
                            j(H, pa(s))
                        }
                        if (B.terminal) k.terminal = !0, n = Math.max(n, B.priority)
                    }
                    k.scope = x && x.scope;
                    k.transclude = C && v;
                    return k
                }

                function s(d, e, g, h) {
                    var k = !1;
                    if (a.hasOwnProperty(e)) for (var n, e = b.get(e + c), o = 0, l = e.length; o < l; o++) try {
                        if (n = e[o], (h === p || h > n.priority) && n.restrict.indexOf(g) != -1) d.push(n), k = !0
                    } catch (r) {
                        j(r)
                    }
                    return k
                }

                function J(a, b) {
                    var c = b.$attr,
                        d = a.$attr,
                        e = a.$$element;
                    m(a, function(d, e) {
                        e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    });
                    m(b, function(b, f) {
                        f == "class" ? (q(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : f == "style" ? e.attr("style", e.attr("style") + ";" + b) : f.charAt(0) != "$" && !a.hasOwnProperty(f) && (a[f] = b, d[f] = c[f])
                    })
                }

                function ba(a, b, c, d, e, f, j) {
                    var h = [],
                        n, o, r = c[0],
                        q = a.shift(),
                        w = y({}, q, {
                            controller: null,
                            templateUrl: null,
                            transclude: null,
                            scope: null
                        });
                    c.html("");
                    k.get(q.templateUrl, {
                        cache: l
                    }).success(function(k) {
                        var l, q, k = Ha(k);
                        if (f) {
                            q = z("<div>" + Q(k) + "</div>").contents();
                            l = q[0];
                            if (q.length != 1 || l.nodeType !== 1) throw new u(g + k);
                            k = {
                                $attr: {}
                            };
                            Fa(e, c, l);
                            X(l, a, k);
                            J(d, k)
                        } else l = r, c.html(k);
                        a.unshift(w);
                        n = A(a, c, d, j);
                        for (o = x(c.contents(), j); h.length;) {
                            var ca = h.pop(),
                                k = h.pop();
                            q = h.pop();
                            var s = h.pop(),
                                m = l;
                            q !== r && (m = db(l), Fa(k, z(q), m));
                            n(function() {
                                b(o, s, m, e, ca)
                            }, s, m, e, ca)
                        }
                        h = null
                    }).error(function(a, b, c, d) {
                        throw u("Failed to load template: " + d.url);
                    });
                    return function(a, c, d, e, f) {
                        h ? (h.push(c), h.push(d), h.push(e), h.push(f)) : n(function() {
                            b(o, c, d, e, f)
                        }, c, d, e, f)
                    }
                }

                function P(a, b) {
                    return b.priority - a.priority
                }

                function K(a, b, c, d) {
                    if (b) throw u("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + pa(d));
                }

                function G(a, b) {
                    var c = h(b, !0);
                    c && a.push({
                        priority: 0,
                        compile: H(function(a, b) {
                            var d = b.parent(),
                                e = d.data("$binding") || [];
                            e.push(c);
                            q(d.data("$binding", e), "ng-binding");
                            a.$watch(c, function(a) {
                                b[0].nodeValue = a
                            })
                        })
                    })
                }

                function V(a, b, c, d) {
                    var e = h(c, !0);
                    e && b.push({
                        priority: 100,
                        compile: H(function(a, b, c) {
                            b = c.$$observers || (c.$$observers = {});
                            d === "class" && (e = h(c[d], !0));
                            c[d] = p;
                            (b[d] || (b[d] = [])).$$inter = !0;
                            (c.$$observers && c.$$observers[d].$$scope || a).$watch(e, function(a) {
                                c.$set(d, a)
                            })
                        })
                    })
                }

                function Fa(a, b, c) {
                    var d = b[0],
                        e = d.parentNode,
                        f, g;
                    if (a) {
                        f = 0;
                        for (g = a.length; f < g; f++) if (a[f] == d) {
                            a[f] = c;
                            break
                        }
                    }
                    e && e.replaceChild(c, d);
                    c[z.expando] = d[z.expando];
                    b[0] = c
                }
                var ea = function(a, b) {
                        this.$$element = a;
                        this.$attr = b || {}
                    };
                ea.prototype = {
                    $normalize: fa,
                    $set: function(a, b, c, d) {
                        var e = zb(this.$$element[0], a),
                            f = this.$$observers;
                        e && (this.$$element.prop(a, b), d = e);
                        this[a] = b;
                        d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = $a(a, "-"));
                        c !== !1 && (b === null || b === p ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                        f && m(f[a], function(a) {
                            try {
                                a(b)
                            } catch (c) {
                                j(c)
                            }
                        })
                    },
                    $observe: function(a, b) {
                        var c = this,
                            d = c.$$observers || (c.$$observers = {}),
                            e = d[a] || (d[a] = []);
                        e.push(b);
                        n.$evalAsync(function() {
                            e.$$inter || b(c[a])
                        });
                        return b
                    }
                };
                var C = h.startSymbol(),
                    ca = h.endSymbol(),
                    Ha = C == "{{" || ca == "}}" ? ma : function(a) {
                        return a.replace(/\{\{/g, C).replace(/}}/g, ca)
                    };
                return w
            }]
        }

        function fa(b) {
            return sb(b.replace(zc, ""))
        }

        function Ac() {
            var b = {};
            this.register = function(a, c) {
                M(a) ? y(b, a) : b[a] = c
            };
            this.$get = ["$injector", "$window", function(a, c) {
                return function(d, e) {
                    if (E(d)) {
                        var g = d,
                            d = b.hasOwnProperty(g) ? b[g] : gb(e.$scope, g, !0) || gb(c, g, !0);
                        qa(d, g, !0)
                    }
                    return a.instantiate(d, e)
                }
            }]
        }

        function Bc() {
            this.$get = ["$window", function(b) {
                return z(b.document)
            }]
        }

        function Cc() {
            this.$get = ["$log", function(b) {
                return function(a, c) {
                    b.error.apply(b, arguments)
                }
            }]
        }

        function Dc() {
            var b = "{{",
                a = "}}";
            this.startSymbol = function(a) {
                return a ? (b = a, this) : b
            };
            this.endSymbol = function(b) {
                return b ? (a = b, this) : a
            };
            this.$get = ["$parse", function(c) {
                function d(d, f) {
                    for (var h, j, k = 0, l = [], o = d.length, r = !1, n = []; k < o;)(h = d.indexOf(b, k)) != -1 && (j = d.indexOf(a, h + e)) != -1 ? (k != h && l.push(d.substring(k, h)), l.push(k = c(r = d.substring(h + e, j))), k.exp = r, k = j + g, r = !0) : (k != o && l.push(d.substring(k)), k = o);
                    if (!(o = l.length)) l.push(""), o = 1;
                    if (!f || r) return n.length = o, k = function(a) {
                        for (var b = 0, c = o, d; b < c; b++) {
                            if (typeof(d = l[b]) == "function") d = d(a), d == null || d == p ? d = "" : typeof d != "string" && (d = da(d));
                            n[b] = d
                        }
                        return n.join("")
                    }, k.exp = d, k.parts = l, k
                }
                var e = b.length,
                    g = a.length;
                d.startSymbol = function() {
                    return b
                };
                d.endSymbol = function() {
                    return a
                };
                return d
            }]
        }

        function Fb(b) {
            for (var b = b.split("/"), a = b.length; a--;) b[a] = Za(b[a]);
            return b.join("/")
        }

        function ua(b, a) {
            var c = Gb.exec(b),
                c = {
                    protocol: c[1],
                    host: c[3],
                    port: F(c[5]) || Hb[c[1]] || null,
                    path: c[6] || "/",
                    search: c[8],
                    hash: c[10]
                };
            if (a) a.$$protocol = c.protocol, a.$$host = c.host, a.$$port = c.port;
            return c
        }

        function ka(b, a, c) {
            return b + "://" + a + (c == Hb[b] ? "" : ":" + c)
        }

        function Ec(b, a, c) {
            var d = ua(b);
            return decodeURIComponent(d.path) != a || t(d.hash) || d.hash.indexOf(c) !== 0 ? b : ka(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
        }

        function Fc(b, a, c) {
            var d = ua(b);
            if (decodeURIComponent(d.path) == a) return b;
            else {
                var e = d.search && "?" + d.search || "",
                    g = d.hash && "#" + d.hash || "",
                    i = a.substr(0, a.lastIndexOf("/")),
                    f = d.path.substr(i.length);
                if (d.path.indexOf(i) !== 0) throw u('Invalid url "' + b + '", missing path prefix "' + i + '" !');
                return ka(d.protocol, d.host, d.port) + a + "#" + c + f + e + g
            }
        }

        function hb(b, a, c) {
            a = a || "";
            this.$$parse = function(b) {
                var c = ua(b, this);
                if (c.path.indexOf(a) !== 0) throw u('Invalid url "' + b + '", missing path prefix "' + a + '" !');
                this.$$path = decodeURIComponent(c.path.substr(a.length));
                this.$$search = Xa(c.search);
                this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
                this.$$compose()
            };
            this.$$compose = function() {
                var b = pb(this.$$search),
                    c = this.$$hash ? "#" + Za(this.$$hash) : "";
                this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + c;
                this.$$absUrl = ka(this.$$protocol, this.$$host, this.$$port) + a + this.$$url
            };
            this.$$rewriteAppUrl = function(a) {
                if (a.indexOf(c) == 0) return a
            };
            this.$$parse(b)
        }

        function Ia(b, a, c) {
            var d;
            this.$$parse = function(b) {
                var c = ua(b, this);
                if (c.hash && c.hash.indexOf(a) !== 0) throw u('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
                d = c.path + (c.search ? "?" + c.search : "");
                c = Gc.exec((c.hash || "").substr(a.length));
                this.$$path = c[1] ? (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : "";
                this.$$search = Xa(c[3]);
                this.$$hash = c[5] && decodeURIComponent(c[5]) || "";
                this.$$compose()
            };
            this.$$compose = function() {
                var b = pb(this.$$search),
                    c = this.$$hash ? "#" + Za(this.$$hash) : "";
                this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + c;
                this.$$absUrl = ka(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
            };
            this.$$rewriteAppUrl = function(a) {
                if (a.indexOf(c) == 0) return a
            };
            this.$$parse(b)
        }

        function Ib(b, a, c, d) {
            Ia.apply(this, arguments);
            this.$$rewriteAppUrl = function(b) {
                if (b.indexOf(c) == 0) return c + d + "#" + a + b.substr(c.length)
            }
        }

        function Ja(b) {
            return function() {
                return this[b]
            }
        }

        function Jb(b, a) {
            return function(c) {
                if (t(c)) return this[b];
                this[b] = a(c);
                this.$$compose();
                return this
            }
        }

        function Hc() {
            var b = "",
                a = !1;
            this.hashPrefix = function(a) {
                return v(a) ? (b = a, this) : b
            };
            this.html5Mode = function(b) {
                return v(b) ? (a = b, this) : a
            };
            this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(c, d, e, g) {
                function i(a) {
                    c.$broadcast("$locationChangeSuccess", f.absUrl(), a)
                }
                var f, h, j, k = d.url(),
                    l = ua(k);
                a ? (h = d.baseHref() || "/", j = h.substr(0, h.lastIndexOf("/")), l = ka(l.protocol, l.host, l.port) + j + "/", f = e.history ? new hb(Ec(k, h, b), j, l) : new Ib(Fc(k, h, b), b, l, h.substr(j.length + 1))) : (l = ka(l.protocol, l.host, l.port) + (l.path || "") + (l.search ? "?" + l.search : "") + "#" + b + "/", f = new Ia(k, b, l));
                g.bind("click", function(a) {
                    if (!a.ctrlKey && !(a.metaKey || a.which == 2)) {
                        for (var b = z(a.target); D(b[0].nodeName) !== "a";) if (b[0] === g[0] || !(b = b.parent())[0]) return;
                        var d = b.prop("href"),
                            e = f.$$rewriteAppUrl(d);
                        d && !b.attr("target") && e && (f.$$parse(e), c.$apply(), a.preventDefault(), T.angular["ff-684208-preventDefault"] = !0)
                    }
                });
                f.absUrl() != k && d.url(f.absUrl(), !0);
                d.onUrlChange(function(a) {
                    f.absUrl() != a && (c.$evalAsync(function() {
                        var b = f.absUrl();
                        f.$$parse(a);
                        i(b)
                    }), c.$$phase || c.$digest())
                });
                var o = 0;
                c.$watch(function() {
                    var a = d.url(),
                        b = f.$$replace;
                    if (!o || a != f.absUrl()) o++, c.$evalAsync(function() {
                        c.$broadcast("$locationChangeStart", f.absUrl(), a).defaultPrevented ? f.$$parse(a) : (d.url(f.absUrl(), b), i(a))
                    });
                    f.$$replace = !1;
                    return o
                });
                return f
            }]
        }

        function Ic() {
            this.$get = ["$window", function(b) {
                function a(a) {
                    a instanceof u && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                    return a
                }

                function c(c) {
                    var e = b.console || {},
                        g = e[c] || e.log || C;
                    return g.apply ?
                    function() {
                        var b = [];
                        m(arguments, function(c) {
                            b.push(a(c))
                        });
                        return g.apply(e, b)
                    } : function(a, b) {
                        g(a, b)
                    }
                }
                return {
                    log: c("log"),
                    warn: c("warn"),
                    info: c("info"),
                    error: c("error")
                }
            }]
        }

        function Jc(b, a) {
            function c(a) {
                return a.indexOf(q) != -1
            }

            function d() {
                return n + 1 < b.length ? b.charAt(n + 1) : !1
            }

            function e(a) {
                return "0" <= a && a <= "9"
            }

            function g(a) {
                return a == " " || a == "\r" || a == "\t" || a == "\n" || a == "\u000b" || a == "\u00a0"
            }

            function i(a) {
                return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$"
            }

            function f(a) {
                return a == "-" || a == "+" || e(a)
            }

            function h(a, c, d) {
                d = d || n;
                throw u("Lexer Error: " + a + " at column" + (v(c) ? "s " + c + "-" + n + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
            }

            function j() {
                for (var a = "", c = n; n < b.length;) {
                    var j = D(b.charAt(n));
                    if (j == "." || e(j)) a += j;
                    else {
                        var g = d();
                        if (j == "e" && f(g)) a += j;
                        else if (f(j) && g && e(g) && a.charAt(a.length - 1) == "e") a += j;
                        else if (f(j) && (!g || !e(g)) && a.charAt(a.length - 1) == "e") h("Invalid exponent");
                        else break
                    }
                    n++
                }
                a *= 1;
                o.push({
                    index: c,
                    text: a,
                    json: !0,
                    fn: function() {
                        return a
                    }
                })
            }

            function k() {
                for (var c = "", d = n, f, j, h; n < b.length;) {
                    var k = b.charAt(n);
                    if (k == "." || i(k) || e(k)) k == "." && (f = n), c += k;
                    else break;
                    n++
                }
                if (f) for (j = n; j < b.length;) {
                    k = b.charAt(j);
                    if (k == "(") {
                        h = c.substr(f - d + 1);
                        c = c.substr(0, f - d);
                        n = j;
                        break
                    }
                    if (g(k)) j++;
                    else break
                }
                d = {
                    index: d,
                    text: c
                };
                if (Ka.hasOwnProperty(c)) d.fn = d.json = Ka[c];
                else {
                    var l = Kb(c, a);
                    d.fn = y(function(a, b) {
                        return l(a, b)
                    }, {
                        assign: function(a, b) {
                            return Lb(a, c, b)
                        }
                    })
                }
                o.push(d);
                h && (o.push({
                    index: f,
                    text: ".",
                    json: !1
                }), o.push({
                    index: f + 1,
                    text: h,
                    json: !1
                }))
            }

            function l(a) {
                var c = n;
                n++;
                for (var d = "", e = a, f = !1; n < b.length;) {
                    var j = b.charAt(n);
                    e += j;
                    if (f) j == "u" ? (j = b.substring(n + 1, n + 5), j.match(/[\da-f]{4}/i) || h("Invalid unicode escape [\\u" + j + "]"), n += 4, d += String.fromCharCode(parseInt(j, 16))) : (f = Kc[j], d += f ? f : j), f = !1;
                    else if (j == "\\") f = !0;
                    else if (j == a) {
                        n++;
                        o.push({
                            index: c,
                            text: e,
                            string: d,
                            json: !0,
                            fn: function() {
                                return d
                            }
                        });
                        return
                    } else d += j;
                    n++
                }
                h("Unterminated quote", c)
            }
            for (var o = [], r, n = 0, w = [], q, x = ":"; n < b.length;) {
                q = b.charAt(n);
                if (c("\"'")) l(q);
                else if (e(q) || c(".") && e(d())) j();
                else if (i(q)) {
                    if (k(), "{,".indexOf(x) != -1 && w[0] == "{" && (r = o[o.length - 1])) r.json = r.text.indexOf(".") == -1
                } else if (c("(){}[].,;:")) o.push({
                    index: n,
                    text: q,
                    json: ":[,".indexOf(x) != -1 && c("{[") || c("}]:,")
                }), c("{[") && w.unshift(q), c("}]") && w.shift(), n++;
                else if (g(q)) {
                    n++;
                    continue
                } else {
                    var m = q + d(),
                        A = Ka[q],
                        s = Ka[m];
                    s ? (o.push({
                        index: n,
                        text: m,
                        fn: s
                    }), n += 2) : A ? (o.push({
                        index: n,
                        text: q,
                        fn: A,
                        json: "[,:".indexOf(x) != -1 && c("+-")
                    }), n += 1) : h("Unexpected next character ", n, n + 1)
                }
                x = q
            }
            return o
        }

        function Lc(b, a, c, d) {
            function e(a, c) {
                throw u("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
            }

            function g() {
                if (K.length === 0) throw u("Unexpected end of expression: " + b);
                return K[0]
            }

            function i(a, b, c, d) {
                if (K.length > 0) {
                    var e = K[0],
                        f = e.text;
                    if (f == a || f == b || f == c || f == d || !a && !b && !c && !d) return e
                }
                return !1
            }

            function f(b, c, d, f) {
                return (b = i(b, c, d, f)) ? (a && !b.json && e("is not valid json", b), K.shift(), b) : !1
            }

            function h(a) {
                f(a) || e("is unexpected, expecting [" + a + "]", i())
            }

            function j(a, b) {
                return function(c, d) {
                    return a(c, d, b)
                }
            }

            function k(a, b, c) {
                return function(d, e) {
                    return b(d, e, a, c)
                }
            }

            function l() {
                for (var a = [];;) if (K.length > 0 && !i("}", ")", ";", "]") && a.push(v()), !f(";")) return a.length == 1 ? a[0] : function(b, c) {
                    for (var d, e = 0; e < a.length; e++) {
                        var f = a[e];
                        f && (d = f(b, c))
                    }
                    return d
                }
            }

            function o() {
                for (var a = f(), b = c(a.text), d = [];;) if (a = f(":")) d.push(G());
                else {
                    var e = function(a, c, e) {
                            for (var e = [e], f = 0; f < d.length; f++) e.push(d[f](a, c));
                            return b.apply(a, e)
                        };
                    return function() {
                        return e
                    }
                }
            }

            function r() {
                for (var a = n(), b;;) if (b = f("||")) a = k(a, b.fn, n());
                else return a
            }

            function n() {
                var a = w(),
                    b;
                if (b = f("&&")) a = k(a, b.fn, n());
                return a
            }

            function w() {
                var a = q(),
                    b;
                if (b = f("==", "!=")) a = k(a, b.fn, w());
                return a
            }

            function q() {
                var a;
                a = x();
                for (var b; b = f("+", "-");) a = k(a, b.fn, x());
                if (b = f("<", ">", "<=", ">=")) a = k(a, b.fn, q());
                return a
            }

            function x() {
                for (var a = m(), b; b = f("*", "/", "%");) a = k(a, b.fn, m());
                return a
            }

            function m() {
                var a;
                return f("+") ? A() : (a = f("-")) ? k(ba, a.fn, m()) : (a = f("!")) ? j(a.fn, m()) : A()
            }

            function A() {
                var a;
                if (f("(")) a = v(), h(")");
                else if (f("[")) a = s();
                else if (f("{")) a = J();
                else {
                    var b = f();
                    (a = b.fn) || e("not a primary expression", b)
                }
                for (var c; b = f("(", "[", ".");) b.text === "(" ? (a = z(a, c), c = null) : b.text === "[" ? (c = a, a = ea(a)) : b.text === "." ? (c = a, a = t(a)) : e("IMPOSSIBLE");
                return a
            }

            function s() {
                var a = [];
                if (g().text != "]") {
                    do a.push(G());
                    while (f(","))
                }
                h("]");
                return function(b, c) {
                    for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                    return d
                }
            }

            function J() {
                var a = [];
                if (g().text != "}") {
                    do {
                        var b = f(),
                            b = b.string || b.text;
                        h(":");
                        var c = G();
                        a.push({
                            key: b,
                            value: c
                        })
                    } while (f(","))
                }
                h("}");
                return function(b, c) {
                    for (var d = {}, e = 0; e < a.length; e++) {
                        var f = a[e],
                            j = f.value(b, c);
                        d[f.key] = j
                    }
                    return d
                }
            }
            var ba = H(0),
                P, K = Jc(b, d),
                G = function() {
                    var a = r(),
                        c, d;
                    return (d = f("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to", d), c = r(), function(b, d) {
                        return a.assign(b, c(b, d), d)
                    }) : a
                },
                z = function(a, b) {
                    var c = [];
                    if (g().text != ")") {
                        do c.push(G());
                        while (f(","))
                    }
                    h(")");
                    return function(d, e) {
                        for (var f = [], j = b ? b(d, e) : d, h = 0; h < c.length; h++) f.push(c[h](d, e));
                        h = a(d, e) || C;
                        return h.apply ? h.apply(j, f) : h(f[0], f[1], f[2], f[3], f[4])
                    }
                },
                t = function(a) {
                    var b = f().text,
                        c = Kb(b, d);
                    return y(function(b, d) {
                        return c(a(b, d), d)
                    }, {
                        assign: function(c, d, e) {
                            return Lb(a(c, e), b, d)
                        }
                    })
                },
                ea = function(a) {
                    var b = G();
                    h("]");
                    return y(function(c, d) {
                        var e = a(c, d),
                            f = b(c, d),
                            j;
                        if (!e) return p;
                        if ((e = e[f]) && e.then) {
                            j = e;
                            if (!("$$v" in e)) j.$$v = p, j.then(function(a) {
                                j.$$v = a
                            });
                            e = e.$$v
                        }
                        return e
                    }, {
                        assign: function(c, d, e) {
                            return a(c, e)[b(c, e)] = d
                        }
                    })
                },
                v = function() {
                    for (var a = G(), b;;) if (b = f("|")) a = k(a, b.fn, o());
                    else return a
                };
            a ? (G = r, z = t = ea = v = function() {
                e("is not valid json", {
                    text: b,
                    index: 0
                })
            }, P = A()) : P = l();
            K.length !== 0 && e("is an unexpected token", K[0]);
            return P
        }

        function Lb(b, a, c) {
            for (var a = a.split("."), d = 0; a.length > 1; d++) {
                var e = a.shift(),
                    g = b[e];
                g || (g = {}, b[e] = g);
                b = g
            }
            return b[a.shift()] = c
        }

        function gb(b, a, c) {
            if (!a) return b;
            for (var a = a.split("."), d, e = b, g = a.length, i = 0; i < g; i++) d = a[i], b && (b = (e = b)[d]);
            return !c && L(b) ? Va(e, b) : b
        }

        function Mb(b, a, c, d, e) {
            return function(g, i) {
                var f = i && i.hasOwnProperty(b) ? i : g,
                    h;
                if (f === null || f === p) return f;
                if ((f = f[b]) && f.then) {
                    if (!("$$v" in f)) h = f, h.$$v = p, h.then(function(a) {
                        h.$$v = a
                    });
                    f = f.$$v
                }
                if (!a || f === null || f === p) return f;
                if ((f = f[a]) && f.then) {
                    if (!("$$v" in f)) h = f, h.$$v = p, h.then(function(a) {
                        h.$$v = a
                    });
                    f = f.$$v
                }
                if (!c || f === null || f === p) return f;
                if ((f = f[c]) && f.then) {
                    if (!("$$v" in f)) h = f, h.$$v = p, h.then(function(a) {
                        h.$$v = a
                    });
                    f = f.$$v
                }
                if (!d || f === null || f === p) return f;
                if ((f = f[d]) && f.then) {
                    if (!("$$v" in f)) h = f, h.$$v = p, h.then(function(a) {
                        h.$$v = a
                    });
                    f = f.$$v
                }
                if (!e || f === null || f === p) return f;
                if ((f = f[e]) && f.then) {
                    if (!("$$v" in f)) h = f, h.$$v = p, h.then(function(a) {
                        h.$$v = a
                    });
                    f = f.$$v
                }
                return f
            }
        }

        function Kb(b, a) {
            if (ib.hasOwnProperty(b)) return ib[b];
            var c = b.split("."),
                d = c.length,
                e;
            if (a) e = d < 6 ? Mb(c[0], c[1], c[2], c[3], c[4]) : function(a, b) {
                var e = 0,
                    j;
                do j = Mb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b), b = p, a = j;
                while (e < d);
                return j
            };
            else {
                var g = "var l, fn, p;\n";
                m(c, function(a, b) {
                    g += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
                });
                g += "return s;";
                e = Function("s", "k", g);
                e.toString = function() {
                    return g
                }
            }
            return ib[b] = e
        }

        function Mc() {
            var b = {};
            this.$get = ["$filter", "$sniffer", function(a, c) {
                return function(d) {
                    switch (typeof d) {
                    case "string":
                        return b.hasOwnProperty(d) ? b[d] : b[d] = Lc(d, !1, a, c.csp);
                    case "function":
                        return d;
                    default:
                        return C
                    }
                }
            }]
        }

        function Nc() {
            this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
                return Oc(function(a) {
                    b.$evalAsync(a)
                }, a)
            }]
        }

        function Oc(b, a) {
            function c(a) {
                return a
            }

            function d(a) {
                return i(a)
            }
            var e = function() {
                    var f = [],
                        h, j;
                    return j = {
                        resolve: function(a) {
                            if (f) {
                                var c = f;
                                f = p;
                                h = g(a);
                                c.length && b(function() {
                                    for (var a, b = 0, d = c.length; b < d; b++) a = c[b], h.then(a[0], a[1])
                                })
                            }
                        },
                        reject: function(a) {
                            j.resolve(i(a))
                        },
                        promise: {
                            then: function(b, j) {
                                var g = e(),
                                    i = function(d) {
                                        try {
                                            g.resolve((b || c)(d))
                                        } catch (e) {
                                            a(e), g.reject(e)
                                        }
                                    },
                                    n = function(b) {
                                        try {
                                            g.resolve((j || d)(b))
                                        } catch (c) {
                                            a(c), g.reject(c)
                                        }
                                    };
                                f ? f.push([i, n]) : h.then(i, n);
                                return g.promise
                            }
                        }
                    }
                },
                g = function(a) {
                    return a && a.then ? a : {
                        then: function(c) {
                            var d = e();
                            b(function() {
                                d.resolve(c(a))
                            });
                            return d.promise
                        }
                    }
                },
                i = function(a) {
                    return {
                        then: function(c, j) {
                            var g = e();
                            b(function() {
                                g.resolve((j || d)(a))
                            });
                            return g.promise
                        }
                    }
                };
            return {
                defer: e,
                reject: i,
                when: function(f, h, j) {
                    var k = e(),
                        l, o = function(b) {
                            try {
                                return (h || c)(b)
                            } catch (d) {
                                return a(d), i(d)
                            }
                        },
                        r = function(b) {
                            try {
                                return (j || d)(b)
                            } catch (c) {
                                return a(c), i(c)
                            }
                        };
                    b(function() {
                        g(f).then(function(a) {
                            l || (l = !0, k.resolve(g(a).then(o, r)))
                        }, function(a) {
                            l || (l = !0, k.resolve(r(a)))
                        })
                    });
                    return k.promise
                },
                all: function(a) {
                    var b = e(),
                        c = a.length,
                        d = [];
                    c ? m(a, function(a, e) {
                        g(a).then(function(a) {
                            e in d || (d[e] = a, --c || b.resolve(d))
                        }, function(a) {
                            e in d || b.reject(a)
                        })
                    }) : b.resolve(d);
                    return b.promise
                }
            }
        }

        function Pc() {
            var b = {};
            this.when = function(a, c) {
                b[a] = y({
                    reloadOnSearch: !0
                }, c);
                if (a) {
                    var d = a[a.length - 1] == "/" ? a.substr(0, a.length - 1) : a + "/";
                    b[d] = {
                        redirectTo: a
                    }
                }
                return this
            };
            this.otherwise = function(a) {
                this.when(null, a);
                return this
            };
            this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function(a, c, d, e, g, i, f) {
                function h(a, b) {
                    for (var b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$", c = "", d = [], e = {}, f = /:(\w+)/g, j, g = 0;
                    (j = f.exec(b)) !== null;) c += b.slice(g, j.index), c += "([^\\/]*)", d.push(j[1]), g = f.lastIndex;
                    c += b.substr(g);
                    var h = a.match(RegExp(c));
                    h && m(d, function(a, b) {
                        e[a] = h[b + 1]
                    });
                    return h ? e : null
                }

                function j() {
                    var b = k(),
                        j = r.current;
                    if (b && j && b.$route === j.$route && ha(b.pathParams, j.pathParams) && !b.reloadOnSearch && !o) j.params = b.params, U(j.params, d), a.$broadcast("$routeUpdate", j);
                    else if (b || j) o = !1, a.$broadcast("$routeChangeStart", b, j), (r.current = b) && b.redirectTo && (E(b.redirectTo) ? c.path(l(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()), e.when(b).then(function() {
                        if (b) {
                            var a = [],
                                c = [],
                                d;
                            m(b.resolve || {}, function(b, d) {
                                a.push(d);
                                c.push(E(b) ? g.get(b) : g.invoke(b))
                            });
                            if (!v(d = b.template)) if (v(d = b.templateUrl)) d = i.get(d, {
                                cache: f
                            }).then(function(a) {
                                return a.data
                            });
                            v(d) && (a.push("$template"), c.push(d));
                            return e.all(c).then(function(b) {
                                var c = {};
                                m(b, function(b, d) {
                                    c[a[d]] = b
                                });
                                return c
                            })
                        }
                    }).then(function(c) {
                        if (b == r.current) {
                            if (b) b.locals = c, U(b.params, d);
                            a.$broadcast("$routeChangeSuccess", b, j)
                        }
                    }, function(c) {
                        b == r.current && a.$broadcast("$routeChangeError", b, j, c)
                    })
                }

                function k() {
                    var a, d;
                    m(b, function(b, e) {
                        if (!d && (a = h(c.path(), e))) d = xa(b, {
                            params: y({}, c.search(), a),
                            pathParams: a
                        }), d.$route = b
                    });
                    return d || b[null] && xa(b[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function l(a, b) {
                    var c = [];
                    m((a || "").split(":"), function(a, d) {
                        if (d == 0) c.push(a);
                        else {
                            var e = a.match(/(\w+)(.*)/),
                                f = e[1];
                            c.push(b[f]);
                            c.push(e[2] || "");
                            delete b[f]
                        }
                    });
                    return c.join("")
                }
                var o = !1,
                    r = {
                        routes: b,
                        reload: function() {
                            o = !0;
                            a.$evalAsync(j)
                        }
                    };
                a.$on("$locationChangeSuccess", j);
                return r
            }]
        }

        function Qc() {
            this.$get = H({})
        }

        function Rc() {
            var b = 10;
            this.digestTtl = function(a) {
                arguments.length && (b = a);
                return b
            };
            this.$get = ["$injector", "$exceptionHandler", "$parse", function(a, c, d) {
                function e() {
                    this.$id = wa();
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this["this"] = this.$root = this;
                    this.$$destroyed = !1;
                    this.$$asyncQueue = [];
                    this.$$listeners = {}
                }

                function g(a) {
                    if (h.$$phase) throw u(h.$$phase + " already in progress");
                    h.$$phase = a
                }

                function i(a, b) {
                    var c = d(a);
                    qa(c, b);
                    return c
                }

                function f() {}
                e.prototype = {
                    $new: function(a) {
                        if (L(a)) throw u("API-CHANGE: Use $controller to instantiate controllers.");
                        a ? (a = new e, a.$root = this.$root) : (a = function() {}, a.prototype = this, a = new a, a.$id = wa());
                        a["this"] = a;
                        a.$$listeners = {};
                        a.$parent = this;
                        a.$$asyncQueue = [];
                        a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                        a.$$prevSibling = this.$$childTail;
                        this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                        return a
                    },
                    $watch: function(a, b, c) {
                        var d = i(a, "watch"),
                            e = this.$$watchers,
                            g = {
                                fn: b,
                                last: f,
                                get: d,
                                exp: a,
                                eq: !! c
                            };
                        if (!L(b)) {
                            var h = i(b || C, "listener");
                            g.fn = function(a, b, c) {
                                h(c)
                            }
                        }
                        if (!e) e = this.$$watchers = [];
                        e.unshift(g);
                        return function() {
                            Ua(e, g)
                        }
                    },
                    $digest: function() {
                        var a, d, e, i, r, n, m, q = b,
                            x, p = [],
                            A, s;
                        g("$digest");
                        do {
                            m = !1;
                            x = this;
                            do {
                                for (r = x.$$asyncQueue; r.length;) try {
                                    x.$eval(r.shift())
                                } catch (J) {
                                    c(J)
                                }
                                if (i = x.$$watchers) for (n = i.length; n--;) try {
                                    if (a = i[n], (d = a.get(x)) !== (e = a.last) && !(a.eq ? ha(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e))) m = !0, a.last = a.eq ? U(d) : d, a.fn(d, e === f ? d : e, x), q < 5 && (A = 4 - q, p[A] || (p[A] = []), s = L(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, s += "; newVal: " + da(d) + "; oldVal: " + da(e), p[A].push(s))
                                } catch (ba) {
                                    c(ba)
                                }
                                if (!(i = x.$$childHead || x !== this && x.$$nextSibling)) for (; x !== this && !(i = x.$$nextSibling);) x = x.$parent
                            } while (x = i);
                            if (m && !q--) throw h.$$phase = null, u(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + da(p));
                        } while (m || r.length);
                        h.$$phase = null
                    },
                    $destroy: function() {
                        if (!(h == this || this.$$destroyed)) {
                            var a = this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            if (a.$$childHead == this) a.$$childHead = this.$$nextSibling;
                            if (a.$$childTail == this) a.$$childTail = this.$$prevSibling;
                            if (this.$$prevSibling) this.$$prevSibling.$$nextSibling = this.$$nextSibling;
                            if (this.$$nextSibling) this.$$nextSibling.$$prevSibling = this.$$prevSibling;
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                        }
                    },
                    $eval: function(a, b) {
                        return d(a)(this, b)
                    },
                    $evalAsync: function(a) {
                        this.$$asyncQueue.push(a)
                    },
                    $apply: function(a) {
                        try {
                            return g("$apply"), this.$eval(a)
                        } catch (b) {
                            c(b)
                        } finally {
                            h.$$phase = null;
                            try {
                                h.$digest()
                            } catch (d) {
                                throw c(d), d;
                            }
                        }
                    },
                    $on: function(a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []);
                        c.push(b);
                        return function() {
                            c[ya(c, b)] = null
                        }
                    },
                    $emit: function(a, b) {
                        var d = [],
                            e, f = this,
                            g = !1,
                            h = {
                                name: a,
                                targetScope: f,
                                stopPropagation: function() {
                                    g = !0
                                },
                                preventDefault: function() {
                                    h.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            i = [h].concat(ia.call(arguments, 1)),
                            m, p;
                        do {
                            e = f.$$listeners[a] || d;
                            h.currentScope = f;
                            m = 0;
                            for (p = e.length; m < p; m++) if (e[m]) try {
                                if (e[m].apply(null, i), g) return h
                            } catch (A) {
                                c(A)
                            } else e.splice(m, 1), m--, p--;
                            f = f.$parent
                        } while (f);
                        return h
                    },
                    $broadcast: function(a, b) {
                        var d = this,
                            e = this,
                            f = {
                                name: a,
                                targetScope: this,
                                preventDefault: function() {
                                    f.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            g = [f].concat(ia.call(arguments, 1)),
                            h, i;
                        do {
                            d = e;
                            f.currentScope = d;
                            e = d.$$listeners[a] || [];
                            h = 0;
                            for (i = e.length; h < i; h++) if (e[h]) try {
                                e[h].apply(null, g)
                            } catch (m) {
                                c(m)
                            } else e.splice(h, 1), h--, i--;
                            if (!(e = d.$$childHead || d !== this && d.$$nextSibling)) for (; d !== this && !(e = d.$$nextSibling);) d = d.$parent
                        } while (d = e);
                        return f
                    }
                };
                var h = new e;
                return h
            }]
        }

        function Sc() {
            this.$get = ["$window", function(b) {
                var a = {},
                    c = F((/android (\d+)/.exec(D(b.navigator.userAgent)) || [])[1]);
                return {
                    history: !(!b.history || !b.history.pushState || c < 4),
                    hashchange: "onhashchange" in b && (!b.document.documentMode || b.document.documentMode > 7),
                    hasEvent: function(c) {
                        if (c == "input" && aa == 9) return !1;
                        if (t(a[c])) {
                            var e = b.document.createElement("div");
                            a[c] = "on" + c in e
                        }
                        return a[c]
                    },
                    csp: !1
                }
            }]
        }

        function Tc() {
            this.$get = H(T)
        }

        function Nb(b) {
            var a = {},
                c, d, e;
            if (!b) return a;
            m(b.split("\n"), function(b) {
                e = b.indexOf(":");
                c = D(Q(b.substr(0, e)));
                d = Q(b.substr(e + 1));
                c && (a[c] ? a[c] += ", " + d : a[c] = d)
            });
            return a
        }

        function Ob(b) {
            var a = M(b) ? b : p;
            return function(c) {
                a || (a = Nb(b));
                return c ? a[D(c)] || null : a
            }
        }

        function Pb(b, a, c) {
            if (L(c)) return c(b, a);
            m(c, function(c) {
                b = c(b, a)
            });
            return b
        }

        function Uc() {
            var b = /^\s*(\[|\{[^\{])/,
                a = /[\}\]]\s*$/,
                c = /^\)\]\}',?\n/,
                d = this.defaults = {
                    transformResponse: [function(d) {
                        E(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = ob(d, !0)));
                        return d
                    }],
                    transformRequest: [function(a) {
                        return M(a) && Sa.apply(a) !== "[object File]" ? da(a) : a
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        post: {
                            "Content-Type": "application/json;charset=utf-8"
                        },
                        put: {
                            "Content-Type": "application/json;charset=utf-8"
                        }
                    }
                },
                e = this.responseInterceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, c, h, j, k) {
                function l(a) {
                    function c(a) {
                        var b = y({}, a, {
                            data: Pb(a.data, a.headers, f)
                        });
                        return 200 <= a.status && a.status < 300 ? b : j.reject(b)
                    }
                    a.method = la(a.method);
                    var e = a.transformRequest || d.transformRequest,
                        f = a.transformResponse || d.transformResponse,
                        h = d.headers,
                        h = y({
                            "X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]
                        }, h.common, h[D(a.method)], a.headers),
                        e = Pb(a.data, Ob(h), e),
                        g;
                    t(a.data) && delete h["Content-Type"];
                    g = o(a, e, h);
                    g = g.then(c, c);
                    m(w, function(a) {
                        g = a(g)
                    });
                    g.success = function(b) {
                        g.then(function(c) {
                            b(c.data, c.status, c.headers, a)
                        });
                        return g
                    };
                    g.error = function(b) {
                        g.then(null, function(c) {
                            b(c.data, c.status, c.headers, a)
                        });
                        return g
                    };
                    return g
                }

                function o(b, c, d) {
                    function e(a, b, c) {
                        m && (200 <= a && a < 300 ? m.put(w, [a, b, Nb(c)]) : m.remove(w));
                        f(b, a, c);
                        h.$apply()
                    }

                    function f(a, c, d) {
                        c = Math.max(c, 0);
                        (200 <= c && c < 300 ? k.resolve : k.reject)({
                            data: a,
                            status: c,
                            headers: Ob(d),
                            config: b
                        })
                    }

                    function i() {
                        var a = ya(l.pendingRequests, b);
                        a !== -1 && l.pendingRequests.splice(a, 1)
                    }
                    var k = j.defer(),
                        o = k.promise,
                        m, p, w = r(b.url, b.params);
                    l.pendingRequests.push(b);
                    o.then(i, i);
                    b.cache && b.method == "GET" && (m = M(b.cache) ? b.cache : n);
                    if (m) if (p = m.get(w)) if (p.then) return p.then(i, i), p;
                    else I(p) ? f(p[1], p[0], U(p[2])) : f(p, 200, {});
                    else m.put(w, o);
                    p || a(b.method, w, c, e, d, b.timeout, b.withCredentials);
                    return o
                }

                function r(a, b) {
                    if (!b) return a;
                    var c = [];
                    fc(b, function(a, b) {
                        a == null || a == p || (M(a) && (a = da(a)), c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                    });
                    return a + (a.indexOf("?") == -1 ? "?" : "&") + c.join("&")
                }
                var n = c("$http"),
                    w = [];
                m(e, function(a) {
                    w.push(E(a) ? k.get(a) : k.invoke(a))
                });
                l.pendingRequests = [];
                (function(a) {
                    m(arguments, function(a) {
                        l[a] = function(b, c) {
                            return l(y(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function(a) {
                    m(arguments, function(a) {
                        l[a] = function(b, c, d) {
                            return l(y(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                })("post", "put");
                l.defaults = d;
                return l
            }]
        }

        function Vc() {
            this.$get = ["$browser", "$window", "$document", function(b, a, c) {
                return Wc(b, Xc, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
            }]
        }

        function Wc(b, a, c, d, e, g) {
            function i(a, b) {
                var c = e.createElement("script"),
                    d = function() {
                        e.body.removeChild(c);
                        b && b()
                    };
                c.type = "text/javascript";
                c.src = a;
                aa ? c.onreadystatechange = function() {
                    /loaded|complete/.test(c.readyState) && d()
                } : c.onload = c.onerror = d;
                e.body.appendChild(c)
            }
            return function(e, h, j, k, l, o, r) {
                function n(a, c, d, e) {
                    c = (h.match(Gb) || ["", g])[1] == "file" ? d ? 200 : 404 : c;
                    a(c == 1223 ? 204 : c, d, e);
                    b.$$completeOutstandingRequest(C)
                }
                b.$$incOutstandingRequestCount();
                h = h || b.url();
                if (D(e) == "jsonp") {
                    var p = "_" + (d.counter++).toString(36);
                    d[p] = function(a) {
                        d[p].data = a
                    };
                    i(h.replace("JSON_CALLBACK", "angular.callbacks." + p), function() {
                        d[p].data ? n(k, 200, d[p].data) : n(k, -2);
                        delete d[p]
                    })
                } else {
                    var q = new a;
                    q.open(e, h, !0);
                    m(l, function(a, b) {
                        a && q.setRequestHeader(b, a)
                    });
                    var x;
                    q.onreadystatechange = function() {
                        q.readyState == 4 && n(k, x || q.status, q.responseText, q.getAllResponseHeaders())
                    };
                    if (r) q.withCredentials = !0;
                    q.send(j || "");
                    o > 0 && c(function() {
                        x = -1;
                        q.abort()
                    }, o)
                }
            }
        }

        function Yc() {
            this.$get = function() {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "\u00a4",
                            posSuf: "",
                            negPre: "(\u00a4",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                        SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                        DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                        SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a"
                    },
                    pluralCat: function(b) {
                        return b === 1 ? "one" : "other"
                    }
                }
            }
        }

        function Zc() {
            this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(b, a, c, d) {
                function e(e, f, h) {
                    var j = c.defer(),
                        k = j.promise,
                        l = v(h) && !h,
                        f = a.defer(function() {
                            try {
                                j.resolve(e())
                            } catch (a) {
                                j.reject(a), d(a)
                            }
                            l || b.$apply()
                        }, f),
                        h = function() {
                            delete g[k.$$timeoutId]
                        };
                    k.$$timeoutId = f;
                    g[f] = j;
                    k.then(h, h);
                    return k
                }
                var g = {};
                e.cancel = function(b) {
                    return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), a.defer.cancel(b.$$timeoutId)) : !1
                };
                return e
            }]
        }

        function Qb(b) {
            function a(a, e) {
                return b.factory(a + c, e)
            }
            var c = "Filter";
            this.register = a;
            this.$get = ["$injector", function(a) {
                return function(b) {
                    return a.get(b + c)
                }
            }];
            a("currency", Rb);
            a("date", Sb);
            a("filter", $c);
            a("json", ad);
            a("limitTo", bd);
            a("lowercase", cd);
            a("number", Tb);
            a("orderBy", Ub);
            a("uppercase", dd)
        }

        function $c() {
            return function(b, a) {
                if (!(b instanceof Array)) return b;
                var c = [];
                c.check = function(a) {
                    for (var b = 0; b < c.length; b++) if (!c[b](a)) return !1;
                    return !0
                };
                var d = function(a, b) {
                        if (b.charAt(0) === "!") return !d(a, b.substr(1));
                        switch (typeof a) {
                        case "boolean":
                        case "number":
                        case "string":
                            return ("" + a).toLowerCase().indexOf(b) > -1;
                        case "object":
                            for (var c in a) if (c.charAt(0) !== "$" && d(a[c], b)) return !0;
                            return !1;
                        case "array":
                            for (c = 0; c < a.length; c++) if (d(a[c], b)) return !0;
                            return !1;
                        default:
                            return !1
                        }
                    };
                switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    a = {
                        $: a
                    };
                case "object":
                    for (var e in a) e == "$" ?
                    function() {
                        var b = ("" + a[e]).toLowerCase();
                        b && c.push(function(a) {
                            return d(a, b)
                        })
                    }() : function() {
                        var b = e,
                            f = ("" + a[e]).toLowerCase();
                        f && c.push(function(a) {
                            return d(gb(a, b), f)
                        })
                    }();
                    break;
                case "function":
                    c.push(a);
                    break;
                default:
                    return b
                }
                for (var g = [], i = 0; i < b.length; i++) {
                    var f = b[i];
                    c.check(f) && g.push(f)
                }
                return g
            }
        }

        function Rb(b) {
            var a = b.NUMBER_FORMATS;
            return function(b, d) {
                if (t(d)) d = a.CURRENCY_SYM;
                return Vb(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
            }
        }

        function Tb(b) {
            var a = b.NUMBER_FORMATS;
            return function(b, d) {
                return Vb(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
            }
        }

        function Vb(b, a, c, d, e) {
            if (isNaN(b) || !isFinite(b)) return "";
            var g = b < 0,
                b = Math.abs(b),
                i = b + "",
                f = "",
                h = [],
                j = !1;
            if (i.indexOf("e") !== -1) {
                var k = i.match(/([\d\.]+)e(-?)(\d+)/);
                k && k[2] == "-" && k[3] > e + 1 ? i = "0" : (f = i, j = !0)
            }
            if (!j) {
                i = (i.split(Wb)[1] || "").length;
                t(e) && (e = Math.min(Math.max(a.minFrac, i), a.maxFrac));
                var i = Math.pow(10, e),
                    b = Math.round(b * i) / i,
                    b = ("" + b).split(Wb),
                    i = b[0],
                    b = b[1] || "",
                    j = 0,
                    k = a.lgSize,
                    l = a.gSize;
                if (i.length >= k + l) for (var j = i.length - k, o = 0; o < j; o++)(j - o) % l === 0 && o !== 0 && (f += c), f += i.charAt(o);
                for (o = j; o < i.length; o++)(i.length - o) % k === 0 && o !== 0 && (f += c), f += i.charAt(o);
                for (; b.length < e;) b += "0";
                e && (f += d + b.substr(0, e))
            }
            h.push(g ? a.negPre : a.posPre);
            h.push(f);
            h.push(g ? a.negSuf : a.posSuf);
            return h.join("")
        }

        function jb(b, a, c) {
            var d = "";
            b < 0 && (d = "-", b = -b);
            for (b = "" + b; b.length < a;) b = "0" + b;
            c && (b = b.substr(b.length - a));
            return d + b
        }

        function N(b, a, c, d) {
            return function(e) {
                e = e["get" + b]();
                if (c > 0 || e > -c) e += c;
                e === 0 && c == -12 && (e = 12);
                return jb(e, a, d)
            }
        }

        function La(b, a) {
            return function(c, d) {
                var e = c["get" + b](),
                    g = la(a ? "SHORT" + b : b);
                return d[g][e]
            }
        }

        function Sb(b) {
            function a(a) {
                var b;
                if (b = a.match(c)) {
                    var a = new Date(0),
                        g = 0,
                        i = 0;
                    b[9] && (g = F(b[9] + b[10]), i = F(b[9] + b[11]));
                    a.setUTCFullYear(F(b[1]), F(b[2]) - 1, F(b[3]));
                    a.setUTCHours(F(b[4] || 0) - g, F(b[5] || 0) - i, F(b[6] || 0), F(b[7] || 0))
                }
                return a
            }
            var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(c, e) {
                var g = "",
                    i = [],
                    f, h, e = e || "mediumDate",
                    e = b.DATETIME_FORMATS[e] || e;
                E(c) && (c = ed.test(c) ? F(c) : a(c));
                va(c) && (c = new Date(c));
                if (!na(c)) return c;
                for (; e;)(h = fd.exec(e)) ? (i = i.concat(ia.call(h, 1)), e = i.pop()) : (i.push(e), e = null);
                m(i, function(a) {
                    f = gd[a];
                    g += f ? f(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                });
                return g
            }
        }

        function ad() {
            return function(b) {
                return da(b, !0)
            }
        }

        function bd() {
            return function(b, a) {
                if (!(b instanceof Array)) return b;
                var a = F(a),
                    c = [],
                    d, e;
                if (!b || !(b instanceof Array)) return c;
                a > b.length ? a = b.length : a < -b.length && (a = -b.length);
                a > 0 ? (d = 0, e = a) : (d = b.length + a, e = b.length);
                for (; d < e; d++) c.push(b[d]);
                return c
            }
        }

        function Ub(b) {
            return function(a, c, d) {
                function e(a, b) {
                    return Wa(b) ?
                    function(b, c) {
                        return a(c, b)
                    } : a
                }
                if (!(a instanceof Array)) return a;
                if (!c) return a;
                for (var c = I(c) ? c : [c], c = Ta(c, function(a) {
                    var c = !1,
                        d = a || ma;
                    if (E(a)) {
                        if (a.charAt(0) == "+" || a.charAt(0) == "-") c = a.charAt(0) == "-", a = a.substring(1);
                        d = b(a)
                    }
                    return e(function(a, b) {
                        var c;
                        c = d(a);
                        var e = d(b),
                            f = typeof c,
                            g = typeof e;
                        f == g ? (f == "string" && (c = c.toLowerCase()), f == "string" && (e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                        return c
                    }, c)
                }), g = [], i = 0; i < a.length; i++) g.push(a[i]);
                return g.sort(e(function(a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d](a, b);
                        if (e !== 0) return e
                    }
                    return 0
                }, d))
            }
        }

        function R(b) {
            L(b) && (b = {
                link: b
            });
            b.restrict = b.restrict || "AC";
            return H(b)
        }

        function Xb(b, a) {
            function c(a, c) {
                c = c ? "-" + $a(c, "-") : "";
                b.removeClass((a ? Ma : Na) + c).addClass((a ? Na : Ma) + c)
            }
            var d = this,
                e = b.parent().controller("form") || Oa,
                g = 0,
                i = d.$error = {};
            d.$name = a.name;
            d.$dirty = !1;
            d.$pristine = !0;
            d.$valid = !0;
            d.$invalid = !1;
            e.$addControl(d);
            b.addClass(Pa);
            c(!0);
            d.$addControl = function(a) {
                a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
            };
            d.$removeControl = function(a) {
                a.$name && d[a.$name] === a && delete d[a.$name];
                m(i, function(b, c) {
                    d.$setValidity(c, !0, a)
                })
            };
            d.$setValidity = function(a, b, j) {
                var k = i[a];
                if (b) {
                    if (k && (Ua(k, j), !k.length)) {
                        g--;
                        if (!g) c(b), d.$valid = !0, d.$invalid = !1;
                        i[a] = !1;
                        c(!0, a);
                        e.$setValidity(a, !0, d)
                    }
                } else {
                    g || c(b);
                    if (k) {
                        if (ya(k, j) != -1) return
                    } else i[a] = k = [], g++, c(!1, a), e.$setValidity(a, !1, d);
                    k.push(j);
                    d.$valid = !1;
                    d.$invalid = !0
                }
            };
            d.$setDirty = function() {
                b.removeClass(Pa).addClass(Yb);
                d.$dirty = !0;
                d.$pristine = !1;
                e.$setDirty()
            }
        }

        function S(b) {
            return t(b) || b === "" || b === null || b !== b
        }

        function Qa(b, a, c, d, e, g) {
            var i = function() {
                    var c = Q(a.val());
                    d.$viewValue !== c && b.$apply(function() {
                        d.$setViewValue(c)
                    })
                };
            if (e.hasEvent("input")) a.bind("input", i);
            else {
                var f;
                a.bind("keydown", function(a) {
                    a = a.keyCode;
                    a === 91 || 15 < a && a < 19 || 37 <= a && a <= 40 || f || (f = g.defer(function() {
                        i();
                        f = null
                    }))
                });
                a.bind("change", i)
            }
            d.$render = function() {
                a.val(S(d.$viewValue) ? "" : d.$viewValue)
            };
            var h = c.ngPattern,
                j = function(a, b) {
                    return S(b) || a.test(b) ? (d.$setValidity("pattern", !0), b) : (d.$setValidity("pattern", !1), p)
                };
            h && (h.match(/^\/(.*)\/$/) ? (h = RegExp(h.substr(1, h.length - 2)), e = function(a) {
                return j(h, a)
            }) : e = function(a) {
                var c = b.$eval(h);
                if (!c || !c.test) throw new u("Expected " + h + " to be a RegExp but was " + c);
                return j(c, a)
            }, d.$formatters.push(e), d.$parsers.push(e));
            if (c.ngMinlength) {
                var k = F(c.ngMinlength),
                    e = function(a) {
                        return !S(a) && a.length < k ? (d.$setValidity("minlength", !1), p) : (d.$setValidity("minlength", !0), a)
                    };
                d.$parsers.push(e);
                d.$formatters.push(e)
            }
            if (c.ngMaxlength) {
                var l = F(c.ngMaxlength),
                    c = function(a) {
                        return !S(a) && a.length > l ? (d.$setValidity("maxlength", !1), p) : (d.$setValidity("maxlength", !0), a)
                    };
                d.$parsers.push(c);
                d.$formatters.push(c)
            }
        }

        function kb(b, a) {
            b = "ngClass" + b;
            return R(function(c, d, e) {
                function g(b, d) {
                    if (a === !0 || c.$index % 2 === a) d && b !== d && i(d), f(b)
                }

                function i(a) {
                    M(a) && !I(a) && (a = Ta(a, function(a, b) {
                        if (a) return b
                    }));
                    d.removeClass(I(a) ? a.join(" ") : a)
                }

                function f(a) {
                    M(a) && !I(a) && (a = Ta(a, function(a, b) {
                        if (a) return b
                    }));
                    a && d.addClass(I(a) ? a.join(" ") : a)
                }
                c.$watch(e[b], g, !0);
                e.$observe("class", function() {
                    var a = c.$eval(e[b]);
                    g(a, a)
                });
                b !== "ngClass" && c.$watch("$index", function(d, g) {
                    var k = d % 2;
                    k !== g % 2 && (k == a ? f(c.$eval(e[b])) : i(c.$eval(e[b])))
                })
            })
        }
        var D = function(b) {
                return E(b) ? b.toLowerCase() : b
            },
            la = function(b) {
                return E(b) ? b.toUpperCase() : b
            },
            u = T.Error,
            aa = F((/msie (\d+)/.exec(D(navigator.userAgent)) || [])[1]),
            z, ja, ia = [].slice,
            Ra = [].push,
            Sa = Object.prototype.toString,
            Zb = T.angular || (T.angular = {}),
            sa, Db, Z = ["0", "0", "0"];
        C.$inject = [];
        ma.$inject = [];
        Db = aa < 9 ?
        function(b) {
            b = b.nodeName ? b : b[0];
            return b.scopeName && b.scopeName != "HTML" ? la(b.scopeName + ":" + b.nodeName) : b.nodeName
        } : function(b) {
            return b.nodeName ? b.nodeName : b[0].nodeName
        };
        var kc = /[A-Z]/g,
            hd = {
                full: "1.0.4",
                major: 1,
                minor: 0,
                dot: 4,
                codeName: "bewildering-hair"
            },
            Aa = O.cache = {},
            za = O.expando = "ng-" + (new Date).getTime(),
            oc = 1,
            $b = T.document.addEventListener ?
        function(b, a, c) {
            b.addEventListener(a, c, !1)
        } : function(b, a, c) {
            b.attachEvent("on" + a, c)
        }, eb = T.document.removeEventListener ?
        function(b, a, c) {
            b.removeEventListener(a, c, !1)
        } : function(b, a, c) {
            b.detachEvent("on" + a, c)
        }, mc = /([\:\-\_]+(.))/g, nc = /^moz([A-Z])/, ta = O.prototype = {
            ready: function(b) {
                function a() {
                    c || (c = !0, b())
                }
                var c = !1;
                this.bind("DOMContentLoaded", a);
                O(T).bind("load", a)
            },
            toString: function() {
                var b = [];
                m(this, function(a) {
                    b.push("" + a)
                });
                return "[" + b.join(", ") + "]"
            },
            eq: function(b) {
                return b >= 0 ? z(this[b]) : z(this[this.length + b])
            },
            length: 0,
            push: Ra,
            sort: [].sort,
            splice: [].splice
        }, Da = {};
        m("multiple,selected,checked,disabled,readOnly,required".split(","), function(b) {
            Da[D(b)] = b
        });
        var Ab = {};
        m("input,select,option,textarea,button,form".split(","), function(b) {
            Ab[la(b)] = !0
        });
        m({
            data: vb,
            inheritedData: Ca,
            scope: function(b) {
                return Ca(b, "$scope")
            },
            controller: yb,
            injector: function(b) {
                return Ca(b, "$injector")
            },
            removeAttr: function(b, a) {
                b.removeAttribute(a)
            },
            hasClass: Ba,
            css: function(b, a, c) {
                a = sb(a);
                if (v(c)) b.style[a] = c;
                else {
                    var d;
                    aa <= 8 && (d = b.currentStyle && b.currentStyle[a], d === "" && (d = "auto"));
                    d = d || b.style[a];
                    aa <= 8 && (d = d === "" ? p : d);
                    return d
                }
            },
            attr: function(b, a, c) {
                var d = D(a);
                if (Da[d]) if (v(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
                else return b[a] || (b.attributes.getNamedItem(a) || C).specified ? d : p;
                else if (v(c)) b.setAttribute(a, c);
                else if (b.getAttribute) return b = b.getAttribute(a, 2), b === null ? p : b
            },
            prop: function(b, a, c) {
                if (v(c)) b[a] = c;
                else return b[a]
            },
            text: y(aa < 9 ?
            function(b, a) {
                if (b.nodeType == 1) {
                    if (t(a)) return b.innerText;
                    b.innerText = a
                } else {
                    if (t(a)) return b.nodeValue;
                    b.nodeValue = a
                }
            } : function(b, a) {
                if (t(a)) return b.textContent;
                b.textContent = a
            }, {
                $dv: ""
            }),
            val: function(b, a) {
                if (t(a)) return b.value;
                b.value = a
            },
            html: function(b, a) {
                if (t(a)) return b.innerHTML;
                for (var c = 0, d = b.childNodes; c < d.length; c++) ra(d[c]);
                b.innerHTML = a
            }
        }, function(b, a) {
            O.prototype[a] = function(a, d) {
                var e, g;
                if ((b.length == 2 && b !== Ba && b !== yb ? a : d) === p) if (M(a)) {
                    for (e = 0; e < this.length; e++) if (b === vb) b(this[e], a);
                    else for (g in a) b(this[e], g, a[g]);
                    return this
                } else {
                    if (this.length) return b(this[0], a, d)
                } else {
                    for (e = 0; e < this.length; e++) b(this[e], a, d);
                    return this
                }
                return b.$dv
            }
        });
        m({
            removeData: tb,
            dealoc: ra,
            bind: function a(c, d, e) {
                var g = $(c, "events"),
                    i = $(c, "handle");
                g || $(c, "events", g = {});
                i || $(c, "handle", i = pc(c, g));
                m(d.split(" "), function(d) {
                    var h = g[d];
                    if (!h) {
                        if (d == "mouseenter" || d == "mouseleave") {
                            var j = 0;
                            g.mouseenter = [];
                            g.mouseleave = [];
                            a(c, "mouseover", function(a) {
                                j++;
                                j == 1 && i(a, "mouseenter")
                            });
                            a(c, "mouseout", function(a) {
                                j--;
                                j == 0 && i(a, "mouseleave")
                            })
                        } else $b(c, d, i), g[d] = [];
                        h = g[d]
                    }
                    h.push(e)
                })
            },
            unbind: ub,
            replaceWith: function(a, c) {
                var d, e = a.parentNode;
                ra(a);
                m(new O(c), function(c) {
                    d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                    d = c
                })
            },
            children: function(a) {
                var c = [];
                m(a.childNodes, function(a) {
                    a.nodeType === 1 && c.push(a)
                });
                return c
            },
            contents: function(a) {
                return a.childNodes || []
            },
            append: function(a, c) {
                m(new O(c), function(c) {
                    a.nodeType === 1 && a.appendChild(c)
                })
            },
            prepend: function(a, c) {
                if (a.nodeType === 1) {
                    var d = a.firstChild;
                    m(new O(c), function(c) {
                        d ? a.insertBefore(c, d) : (a.appendChild(c), d = c)
                    })
                }
            },
            wrap: function(a, c) {
                var c = z(c)[0],
                    d = a.parentNode;
                d && d.replaceChild(c, a);
                c.appendChild(a)
            },
            remove: function(a) {
                ra(a);
                var c = a.parentNode;
                c && c.removeChild(a)
            },
            after: function(a, c) {
                var d = a,
                    e = a.parentNode;
                m(new O(c), function(a) {
                    e.insertBefore(a, d.nextSibling);
                    d = a
                })
            },
            addClass: xb,
            removeClass: wb,
            toggleClass: function(a, c, d) {
                t(d) && (d = !Ba(a, c));
                (d ? xb : wb)(a, c)
            },
            parent: function(a) {
                return (a = a.parentNode) && a.nodeType !== 11 ? a : null
            },
            next: function(a) {
                if (a.nextElementSibling) return a.nextElementSibling;
                for (a = a.nextSibling; a != null && a.nodeType !== 1;) a = a.nextSibling;
                return a
            },
            find: function(a, c) {
                return a.getElementsByTagName(c)
            },
            clone: db,
            triggerHandler: function(a, c) {
                var d = ($(a, "events") || {})[c];
                m(d, function(c) {
                    c.call(a, null)
                })
            }
        }, function(a, c) {
            O.prototype[c] = function(c, e) {
                for (var g, i = 0; i < this.length; i++) g == p ? (g = a(this[i], c, e), g !== p && (g = z(g))) : cb(g, a(this[i], c, e));
                return g == p ? this : g
            }
        });
        Ea.prototype = {
            put: function(a, c) {
                this[ga(a)] = c
            },
            get: function(a) {
                return this[ga(a)]
            },
            remove: function(a) {
                var c = this[a = ga(a)];
                delete this[a];
                return c
            }
        };
        fb.prototype = {
            push: function(a, c) {
                var d = this[a = ga(a)];
                d ? d.push(c) : this[a] = [c]
            },
            shift: function(a) {
                var c = this[a = ga(a)];
                if (c) return c.length == 1 ? (delete this[a], c[0]) : c.shift()
            },
            peek: function(a) {
                if (a = this[ga(a)]) return a[0]
            }
        };
        var rc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            sc = /,/,
            tc = /^\s*(_?)(\S+?)\1\s*$/,
            qc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
            Eb = "Non-assignable model expression: ";
        Cb.$inject = ["$provide"];
        var zc = /^(x[\:\-_]|data[\:\-_])/i,
            Gb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
            ac = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
            Gc = ac,
            Hb = {
                http: 80,
                https: 443,
                ftp: 21
            };
        hb.prototype = {
            $$replace: !1,
            absUrl: Ja("$$absUrl"),
            url: function(a, c) {
                if (t(a)) return this.$$url;
                var d = ac.exec(a);
                d[1] && this.path(decodeURIComponent(d[1]));
                if (d[2] || d[1]) this.search(d[3] || "");
                this.hash(d[5] || "", c);
                return this
            },
            protocol: Ja("$$protocol"),
            host: Ja("$$host"),
            port: Ja("$$port"),
            path: Jb("$$path", function(a) {
                return a.charAt(0) == "/" ? a : "/" + a
            }),
            search: function(a, c) {
                if (t(a)) return this.$$search;
                v(c) ? c === null ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = E(a) ? Xa(a) : a;
                this.$$compose();
                return this
            },
            hash: Jb("$$hash", ma),
            replace: function() {
                this.$$replace = !0;
                return this
            }
        };
        Ia.prototype = xa(hb.prototype);
        Ib.prototype = xa(Ia.prototype);
        var Ka = {
            "null": function() {
                return null
            },
            "true": function() {
                return !0
            },
            "false": function() {
                return !1
            },
            undefined: C,
            "+": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return v(d) ? v(e) ? d + e : d : v(e) ? e : p
            },
            "-": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return (v(d) ? d : 0) - (v(e) ? e : 0)
            },
            "*": function(a, c, d, e) {
                return d(a, c) * e(a, c)
            },
            "/": function(a, c, d, e) {
                return d(a, c) / e(a, c)
            },
            "%": function(a, c, d, e) {
                return d(a, c) % e(a, c)
            },
            "^": function(a, c, d, e) {
                return d(a, c) ^ e(a, c)
            },
            "=": C,
            "==": function(a, c, d, e) {
                return d(a, c) == e(a, c)
            },
            "!=": function(a, c, d, e) {
                return d(a, c) != e(a, c)
            },
            "<": function(a, c, d, e) {
                return d(a, c) < e(a, c)
            },
            ">": function(a, c, d, e) {
                return d(a, c) > e(a, c)
            },
            "<=": function(a, c, d, e) {
                return d(a, c) <= e(a, c)
            },
            ">=": function(a, c, d, e) {
                return d(a, c) >= e(a, c)
            },
            "&&": function(a, c, d, e) {
                return d(a, c) && e(a, c)
            },
            "||": function(a, c, d, e) {
                return d(a, c) || e(a, c)
            },
            "&": function(a, c, d, e) {
                return d(a, c) & e(a, c)
            },
            "|": function(a, c, d, e) {
                return e(a, c)(a, c, d(a, c))
            },
            "!": function(a, c, d) {
                return !d(a, c)
            }
        },
            Kc = {
                n: "\n",
                f: "\u000c",
                r: "\r",
                t: "\t",
                v: "\u000b",
                "'": "'",
                '"': '"'
            },
            ib = {},
            Xc = T.XMLHttpRequest ||
        function() {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (c) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (d) {}
            throw new u("This browser does not support XMLHttpRequest.");
        };
        Qb.$inject = ["$provide"];
        Rb.$inject = ["$locale"];
        Tb.$inject = ["$locale"];
        var Wb = ".",
            gd = {
                yyyy: N("FullYear", 4),
                yy: N("FullYear", 2, 0, !0),
                y: N("FullYear", 1),
                MMMM: La("Month"),
                MMM: La("Month", !0),
                MM: N("Month", 2, 1),
                M: N("Month", 1, 1),
                dd: N("Date", 2),
                d: N("Date", 1),
                HH: N("Hours", 2),
                H: N("Hours", 1),
                hh: N("Hours", 2, -12),
                h: N("Hours", 1, -12),
                mm: N("Minutes", 2),
                m: N("Minutes", 1),
                ss: N("Seconds", 2),
                s: N("Seconds", 1),
                EEEE: La("Day"),
                EEE: La("Day", !0),
                a: function(a, c) {
                    return a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1]
                },
                Z: function(a) {
                    a = a.getTimezoneOffset();
                    return jb(a / 60, 2) + jb(Math.abs(a % 60), 2)
                }
            },
            fd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
            ed = /^\d+$/;
        Sb.$inject = ["$locale"];
        var cd = H(D),
            dd = H(la);
        Ub.$inject = ["$parse"];
        var id = H({
            restrict: "E",
            compile: function(a, c) {
                c.href || c.$set("href", "");
                return function(a, c) {
                    c.bind("click", function(a) {
                        c.attr("href") || a.preventDefault()
                    })
                }
            }
        }),
            lb = {};
        m(Da, function(a, c) {
            var d = fa("ng-" + c);
            lb[d] = function() {
                return {
                    priority: 100,
                    compile: function() {
                        return function(a, g, i) {
                            a.$watch(i[d], function(a) {
                                i.$set(c, !! a)
                            })
                        }
                    }
                }
            }
        });
        m(["src", "href"], function(a) {
            var c = fa("ng-" + a);
            lb[c] = function() {
                return {
                    priority: 99,
                    link: function(d, e, g) {
                        g.$observe(c, function(c) {
                            c && (g.$set(a, c), aa && e.prop(a, c))
                        })
                    }
                }
            }
        });
        var Oa = {
            $addControl: C,
            $removeControl: C,
            $setValidity: C,
            $setDirty: C
        };
        Xb.$inject = ["$element", "$attrs", "$scope"];
        var Ra = function(a) {
                return ["$timeout", function(c) {
                    var d = {
                        name: "form",
                        restrict: "E",
                        controller: Xb,
                        compile: function() {
                            return {
                                pre: function(a, d, i, f) {
                                    if (!i.action) {
                                        var h = function(a) {
                                                a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                            };
                                        $b(d[0], "submit", h);
                                        d.bind("$destroy", function() {
                                            c(function() {
                                                eb(d[0], "submit", h)
                                            }, 0, !1)
                                        })
                                    }
                                    var j = d.parent().controller("form"),
                                        k = i.name || i.ngForm;
                                    k && (a[k] = f);
                                    j && d.bind("$destroy", function() {
                                        j.$removeControl(f);
                                        k && (a[k] = p);
                                        y(f, Oa)
                                    })
                                }
                            }
                        }
                    };
                    return a ? y(U(d), {
                        restrict: "EAC"
                    }) : d
                }]
            },
            jd = Ra(),
            kd = Ra(!0),
            ld = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            md = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            nd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            bc = {
                text: Qa,
                number: function(a, c, d, e, g, i) {
                    Qa(a, c, d, e, g, i);
                    e.$parsers.push(function(a) {
                        var c = S(a);
                        return c || nd.test(a) ? (e.$setValidity("number", !0), a === "" ? null : c ? a : parseFloat(a)) : (e.$setValidity("number", !1), p)
                    });
                    e.$formatters.push(function(a) {
                        return S(a) ? "" : "" + a
                    });
                    if (d.min) {
                        var f = parseFloat(d.min),
                            a = function(a) {
                                return !S(a) && a < f ? (e.$setValidity("min", !1), p) : (e.$setValidity("min", !0), a)
                            };
                        e.$parsers.push(a);
                        e.$formatters.push(a)
                    }
                    if (d.max) {
                        var h = parseFloat(d.max),
                            d = function(a) {
                                return !S(a) && a > h ? (e.$setValidity("max", !1), p) : (e.$setValidity("max", !0), a)
                            };
                        e.$parsers.push(d);
                        e.$formatters.push(d)
                    }
                    e.$formatters.push(function(a) {
                        return S(a) || va(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), p)
                    })
                },
                url: function(a, c, d, e, g, i) {
                    Qa(a, c, d, e, g, i);
                    a = function(a) {
                        return S(a) || ld.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), p)
                    };
                    e.$formatters.push(a);
                    e.$parsers.push(a)
                },
                email: function(a, c, d, e, g, i) {
                    Qa(a, c, d, e, g, i);
                    a = function(a) {
                        return S(a) || md.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), p)
                    };
                    e.$formatters.push(a);
                    e.$parsers.push(a)
                },
                radio: function(a, c, d, e) {
                    t(d.name) && c.attr("name", wa());
                    c.bind("click", function() {
                        c[0].checked && a.$apply(function() {
                            e.$setViewValue(d.value)
                        })
                    });
                    e.$render = function() {
                        c[0].checked = d.value == e.$viewValue
                    };
                    d.$observe("value", e.$render)
                },
                checkbox: function(a, c, d, e) {
                    var g = d.ngTrueValue,
                        i = d.ngFalseValue;
                    E(g) || (g = !0);
                    E(i) || (i = !1);
                    c.bind("click", function() {
                        a.$apply(function() {
                            e.$setViewValue(c[0].checked)
                        })
                    });
                    e.$render = function() {
                        c[0].checked = e.$viewValue
                    };
                    e.$formatters.push(function(a) {
                        return a === g
                    });
                    e.$parsers.push(function(a) {
                        return a ? g : i
                    })
                },
                hidden: C,
                button: C,
                submit: C,
                reset: C
            },
            cc = ["$browser", "$sniffer", function(a, c) {
                return {
                    restrict: "E",
                    require: "?ngModel",
                    link: function(d, e, g, i) {
                        i && (bc[D(g.type)] || bc.text)(d, e, g, i, c, a)
                    }
                }
            }],
            Na = "ng-valid",
            Ma = "ng-invalid",
            Pa = "ng-pristine",
            Yb = "ng-dirty",
            od = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(a, c, d, e, g) {
                function i(a, c) {
                    c = c ? "-" + $a(c, "-") : "";
                    e.removeClass((a ? Ma : Na) + c).addClass((a ? Na : Ma) + c)
                }
                this.$modelValue = this.$viewValue = Number.NaN;
                this.$parsers = [];
                this.$formatters = [];
                this.$viewChangeListeners = [];
                this.$pristine = !0;
                this.$dirty = !1;
                this.$valid = !0;
                this.$invalid = !1;
                this.$name = d.name;
                var f = g(d.ngModel),
                    h = f.assign;
                if (!h) throw u(Eb + d.ngModel + " (" + pa(e) + ")");
                this.$render = C;
                var j = e.inheritedData("$formController") || Oa,
                    k = 0,
                    l = this.$error = {};
                e.addClass(Pa);
                i(!0);
                this.$setValidity = function(a, c) {
                    if (l[a] !== !c) {
                        if (c) {
                            if (l[a] && k--, !k) i(!0), this.$valid = !0, this.$invalid = !1
                        } else i(!1), this.$invalid = !0, this.$valid = !1, k++;
                        l[a] = !c;
                        i(c, a);
                        j.$setValidity(a, c, this)
                    }
                };
                this.$setViewValue = function(d) {
                    this.$viewValue = d;
                    if (this.$pristine) this.$dirty = !0, this.$pristine = !1, e.removeClass(Pa).addClass(Yb), j.$setDirty();
                    m(this.$parsers, function(a) {
                        d = a(d)
                    });
                    if (this.$modelValue !== d) this.$modelValue = d, h(a, d), m(this.$viewChangeListeners, function(a) {
                        try {
                            a()
                        } catch (d) {
                            c(d)
                        }
                    })
                };
                var o = this;
                a.$watch(function() {
                    var c = f(a);
                    if (o.$modelValue !== c) {
                        var d = o.$formatters,
                            e = d.length;
                        for (o.$modelValue = c; e--;) c = d[e](c);
                        if (o.$viewValue !== c) o.$viewValue = c, o.$render()
                    }
                })
            }],
            pd = function() {
                return {
                    require: ["ngModel", "^?form"],
                    controller: od,
                    link: function(a, c, d, e) {
                        var g = e[0],
                            i = e[1] || Oa;
                        i.$addControl(g);
                        c.bind("$destroy", function() {
                            i.$removeControl(g)
                        })
                    }
                }
            },
            qd = H({
                require: "ngModel",
                link: function(a, c, d, e) {
                    e.$viewChangeListeners.push(function() {
                        a.$eval(d.ngChange)
                    })
                }
            }),
            dc = function() {
                return {
                    require: "?ngModel",
                    link: function(a, c, d, e) {
                        if (e) {
                            d.required = !0;
                            var g = function(a) {
                                    if (d.required && (S(a) || a === !1)) e.$setValidity("required", !1);
                                    else return e.$setValidity("required", !0), a
                                };
                            e.$formatters.push(g);
                            e.$parsers.unshift(g);
                            d.$observe("required", function() {
                                g(e.$viewValue)
                            })
                        }
                    }
                }
            },
            rd = function() {
                return {
                    require: "ngModel",
                    link: function(a, c, d, e) {
                        var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                        e.$parsers.push(function(a) {
                            var c = [];
                            a && m(a.split(g), function(a) {
                                a && c.push(Q(a))
                            });
                            return c
                        });
                        e.$formatters.push(function(a) {
                            return I(a) ? a.join(", ") : p
                        })
                    }
                }
            },
            sd = /^(true|false|\d+)$/,
            td = function() {
                return {
                    priority: 100,
                    compile: function(a, c) {
                        return sd.test(c.ngValue) ?
                        function(a, c, g) {
                            g.$set("value", a.$eval(g.ngValue))
                        } : function(a, c, g) {
                            a.$watch(g.ngValue, function(a) {
                                g.$set("value", a, !1)
                            })
                        }
                    }
                }
            },
            ud = R(function(a, c, d) {
                c.addClass("ng-binding").data("$binding", d.ngBind);
                a.$watch(d.ngBind, function(a) {
                    c.text(a == p ? "" : a)
                })
            }),
            vd = ["$interpolate", function(a) {
                return function(c, d, e) {
                    c = a(d.attr(e.$attr.ngBindTemplate));
                    d.addClass("ng-binding").data("$binding", c);
                    e.$observe("ngBindTemplate", function(a) {
                        d.text(a)
                    })
                }
            }],
            wd = [function() {
                return function(a, c, d) {
                    c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
                    a.$watch(d.ngBindHtmlUnsafe, function(a) {
                        c.html(a || "")
                    })
                }
            }],
            xd = kb("", !0),
            yd = kb("Odd", 0),
            zd = kb("Even", 1),
            Ad = R({
                compile: function(a, c) {
                    c.$set("ngCloak", p);
                    a.removeClass("ng-cloak")
                }
            }),
            Bd = [function() {
                return {
                    scope: !0,
                    controller: "@"
                }
            }],
            Cd = ["$sniffer", function(a) {
                return {
                    priority: 1E3,
                    compile: function() {
                        a.csp = !0
                    }
                }
            }],
            ec = {};
        m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "), function(a) {
            var c = fa("ng-" + a);
            ec[c] = ["$parse", function(d) {
                return function(e, g, i) {
                    var f = d(i[c]);
                    g.bind(D(a), function(a) {
                        e.$apply(function() {
                            f(e, {
                                $event: a
                            })
                        })
                    })
                }
            }]
        });
        var Dd = R(function(a, c, d) {
            c.bind("submit", function() {
                a.$apply(d.ngSubmit)
            })
        }),
            Ed = ["$http", "$templateCache", "$anchorScroll", "$compile", function(a, c, d, e) {
                return {
                    restrict: "ECA",
                    terminal: !0,
                    compile: function(g, i) {
                        var f = i.ngInclude || i.src,
                            h = i.onload || "",
                            j = i.autoscroll;
                        return function(g, i) {
                            var o = 0,
                                m, n = function() {
                                    m && (m.$destroy(), m = null);
                                    i.html("")
                                };
                            g.$watch(f, function(f) {
                                var q = ++o;
                                f ? a.get(f, {
                                    cache: c
                                }).success(function(a) {
                                    q === o && (m && m.$destroy(), m = g.$new(), i.html(a), e(i.contents())(m), v(j) && (!j || g.$eval(j)) && d(), m.$emit("$includeContentLoaded"), g.$eval(h))
                                }).error(function() {
                                    q === o && n()
                                }) : n()
                            })
                        }
                    }
                }
            }],
            Fd = R({
                compile: function() {
                    return {
                        pre: function(a, c, d) {
                            a.$eval(d.ngInit)
                        }
                    }
                }
            }),
            Gd = R({
                terminal: !0,
                priority: 1E3
            }),
            Hd = ["$locale", "$interpolate", function(a, c) {
                var d = /{}/g;
                return {
                    restrict: "EA",
                    link: function(e, g, i) {
                        var f = i.count,
                            h = g.attr(i.$attr.when),
                            j = i.offset || 0,
                            k = e.$eval(h),
                            l = {},
                            o = c.startSymbol(),
                            r = c.endSymbol();
                        m(k, function(a, e) {
                            l[e] = c(a.replace(d, o + f + "-" + j + r))
                        });
                        e.$watch(function() {
                            var c = parseFloat(e.$eval(f));
                            return isNaN(c) ? "" : (k[c] || (c = a.pluralCat(c - j)), l[c](e, g, !0))
                        }, function(a) {
                            g.text(a)
                        })
                    }
                }
            }],
            Id = R({
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                compile: function(a, c, d) {
                    return function(a, c, i) {
                        var f = i.ngRepeat,
                            i = f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),
                            h, j, k;
                        if (!i) throw u("Expected ngRepeat in form of '_item_ in _collection_' but got '" + f + "'.");
                        f = i[1];
                        h = i[2];
                        i = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                        if (!i) throw u("'item' in 'item in collection' should be identifier or (key, value) but got '" + f + "'.");
                        j = i[3] || i[1];
                        k = i[2];
                        var l = new fb;
                        a.$watch(function(a) {
                            var e, f, i = a.$eval(h),
                                m = c,
                                p = new fb,
                                z, A, s, v, t, u;
                            if (I(i)) t = i || [];
                            else {
                                t = [];
                                for (s in i) i.hasOwnProperty(s) && s.charAt(0) != "$" && t.push(s);
                                t.sort()
                            }
                            z = t.length;
                            e = 0;
                            for (f = t.length; e < f; e++) {
                                s = i === t ? e : t[e];
                                v = i[s];
                                if (u = l.shift(v)) {
                                    A = u.scope;
                                    p.push(v, u);
                                    if (e !== u.index) u.index = e, m.after(u.element);
                                    m = u.element
                                } else A = a.$new();
                                A[j] = v;
                                k && (A[k] = s);
                                A.$index = e;
                                A.$first = e === 0;
                                A.$last = e === z - 1;
                                A.$middle = !(A.$first || A.$last);
                                u || d(A, function(a) {
                                    m.after(a);
                                    u = {
                                        scope: A,
                                        element: m = a,
                                        index: e
                                    };
                                    p.push(v, u)
                                })
                            }
                            for (s in l) if (l.hasOwnProperty(s)) for (t = l[s]; t.length;) v = t.pop(), v.element.remove(), v.scope.$destroy();
                            l = p
                        })
                    }
                }
            }),
            Jd = R(function(a, c, d) {
                a.$watch(d.ngShow, function(a) {
                    c.css("display", Wa(a) ? "" : "none")
                })
            }),
            Kd = R(function(a, c, d) {
                a.$watch(d.ngHide, function(a) {
                    c.css("display", Wa(a) ? "none" : "")
                })
            }),
            Ld = R(function(a, c, d) {
                a.$watch(d.ngStyle, function(a, d) {
                    d && a !== d && m(d, function(a, d) {
                        c.css(d, "")
                    });
                    a && c.css(a)
                }, !0)
            }),
            Md = H({
                restrict: "EA",
                require: "ngSwitch",
                controller: function() {
                    this.cases = {}
                },
                link: function(a, c, d, e) {
                    var g, i, f;
                    a.$watch(d.ngSwitch || d.on, function(h) {
                        i && (f.$destroy(), i.remove(), i = f = null);
                        if (g = e.cases["!" + h] || e.cases["?"]) a.$eval(d.change), f = a.$new(), g(f, function(a) {
                            i = a;
                            c.append(a)
                        })
                    })
                }
            }),
            Nd = R({
                transclude: "element",
                priority: 500,
                require: "^ngSwitch",
                compile: function(a, c, d) {
                    return function(a, g, i, f) {
                        f.cases["!" + c.ngSwitchWhen] = d
                    }
                }
            }),
            Od = R({
                transclude: "element",
                priority: 500,
                require: "^ngSwitch",
                compile: function(a, c, d) {
                    return function(a, c, i, f) {
                        f.cases["?"] = d
                    }
                }
            }),
            Pd = R({
                controller: ["$transclude", "$element", function(a, c) {
                    a(function(a) {
                        c.append(a)
                    })
                }]
            }),
            Qd = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function(a, c, d, e, g, i) {
                return {
                    restrict: "ECA",
                    terminal: !0,
                    link: function(a, c, j) {
                        function k() {
                            var j = d.current && d.current.locals,
                                k = j && j.$template;
                            if (k) {
                                c.html(k);
                                l && (l.$destroy(), l = null);
                                var k = g(c.contents()),
                                    m = d.current;
                                l = m.scope = a.$new();
                                if (m.controller) j.$scope = l, j = i(m.controller, j), c.contents().data("$ngControllerController", j);
                                k(l);
                                l.$emit("$viewContentLoaded");
                                l.$eval(o);
                                e()
                            } else c.html(""), l && (l.$destroy(), l = null)
                        }
                        var l, o = j.onload || "";
                        a.$on("$routeChangeSuccess", k);
                        k()
                    }
                }
            }],
            Rd = ["$templateCache", function(a) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(c, d) {
                        d.type == "text/ng-template" && a.put(d.id, c[0].text)
                    }
                }
            }],
            Sd = H({
                terminal: !0
            }),
            Td = ["$compile", "$parse", function(a, c) {
                var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
                    e = {
                        $setViewValue: C
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                        var h = this,
                            j = {},
                            k = e,
                            l;
                        h.databound = d.ngModel;
                        h.init = function(a, c, d) {
                            k = a;
                            l = d
                        };
                        h.addOption = function(c) {
                            j[c] = !0;
                            k.$viewValue == c && (a.val(c), l.parent() && l.remove())
                        };
                        h.removeOption = function(a) {
                            this.hasOption(a) && (delete j[a], k.$viewValue == a && this.renderUnknownOption(a))
                        };
                        h.renderUnknownOption = function(c) {
                            c = "? " + ga(c) + " ?";
                            l.val(c);
                            a.prepend(l);
                            a.val(c);
                            l.prop("selected", !0)
                        };
                        h.hasOption = function(a) {
                            return j.hasOwnProperty(a)
                        };
                        c.$on("$destroy", function() {
                            h.renderUnknownOption = C
                        })
                    }],
                    link: function(e, i, f, h) {
                        function j(a, c, d, e) {
                            d.$render = function() {
                                var a = d.$viewValue;
                                e.hasOption(a) ? (s.parent() && s.remove(), c.val(a), a === "" && x.prop("selected", !0)) : t(a) && x ? c.val("") : e.renderUnknownOption(a)
                            };
                            c.bind("change", function() {
                                a.$apply(function() {
                                    s.parent() && s.remove();
                                    d.$setViewValue(c.val())
                                })
                            })
                        }

                        function k(a, c, d) {
                            var e;
                            d.$render = function() {
                                var a = new Ea(d.$viewValue);
                                m(c.find("option"), function(c) {
                                    c.selected = v(a.get(c.value))
                                })
                            };
                            a.$watch(function() {
                                ha(e, d.$viewValue) || (e = U(d.$viewValue), d.$render())
                            });
                            c.bind("change", function() {
                                a.$apply(function() {
                                    var a = [];
                                    m(c.find("option"), function(c) {
                                        c.selected && a.push(c.value)
                                    });
                                    d.$setViewValue(a)
                                })
                            })
                        }

                        function l(e, f, g) {
                            function h() {
                                var a = {
                                    "": []
                                },
                                    c = [""],
                                    d, i, t, v, u;
                                t = g.$modelValue;
                                v = r(e) || [];
                                var x = l ? mb(v) : v,
                                    z, w, y;
                                w = {};
                                u = !1;
                                var B, D;
                                if (n) u = new Ea(t);
                                else if (t === null || q) a[""].push({
                                    selected: t === null,
                                    id: "",
                                    label: ""
                                }), u = !0;
                                for (y = 0; z = x.length, y < z; y++) {
                                    w[k] = v[l ? w[l] = x[y] : y];
                                    d = m(e, w) || "";
                                    if (!(i = a[d])) i = a[d] = [], c.push(d);
                                    n ? d = u.remove(o(e, w)) != p : (d = t === o(e, w), u = u || d);
                                    B = j(e, w);
                                    B = B === p ? "" : B;
                                    i.push({
                                        id: l ? x[y] : y,
                                        label: B,
                                        selected: d
                                    })
                                }!n && !u && a[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                });
                                w = 0;
                                for (x = c.length; w < x; w++) {
                                    d = c[w];
                                    i = a[d];
                                    if (s.length <= w) t = {
                                        element: A.clone().attr("label", d),
                                        label: i.label
                                    }, v = [t], s.push(v), f.append(t.element);
                                    else if (v = s[w], t = v[0], t.label != d) t.element.attr("label", t.label = d);
                                    B = null;
                                    y = 0;
                                    for (z = i.length; y < z; y++) if (d = i[y], u = v[y + 1]) {
                                        B = u.element;
                                        if (u.label !== d.label) B.text(u.label = d.label);
                                        if (u.id !== d.id) B.val(u.id = d.id);
                                        if (u.element.selected !== d.selected) B.prop("selected", u.selected = d.selected)
                                    } else d.id === "" && q ? D = q : (D = C.clone()).val(d.id).attr("selected", d.selected).text(d.label), v.push({
                                        element: D,
                                        label: d.label,
                                        id: d.id,
                                        selected: d.selected
                                    }), B ? B.after(D) : t.element.append(D), B = D;
                                    for (y++; v.length > y;) v.pop().element.remove()
                                }
                                for (; s.length > w;) s.pop()[0].element.remove()
                            }
                            var i;
                            if (!(i = w.match(d))) throw u("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + w + "'.");
                            var j = c(i[2] || i[1]),
                                k = i[4] || i[6],
                                l = i[5],
                                m = c(i[3] || ""),
                                o = c(i[2] ? i[1] : k),
                                r = c(i[7]),
                                s = [
                                    [{
                                        element: f,
                                        label: ""
                                    }]
                                ];
                            q && (a(q)(e), q.removeClass("ng-scope"), q.remove());
                            f.html("");
                            f.bind("change", function() {
                                e.$apply(function() {
                                    var a, c = r(e) || [],
                                        d = {},
                                        h, i, j, m, q, t;
                                    if (n) {
                                        i = [];
                                        m = 0;
                                        for (t = s.length; m < t; m++) {
                                            a = s[m];
                                            j = 1;
                                            for (q = a.length; j < q; j++) if ((h = a[j].element)[0].selected) h = h.val(), l && (d[l] = h), d[k] = c[h], i.push(o(e, d))
                                        }
                                    } else h = f.val(), h == "?" ? i = p : h == "" ? i = null : (d[k] = c[h], l && (d[l] = h), i = o(e, d));
                                    g.$setViewValue(i)
                                })
                            });
                            g.$render = h;
                            e.$watch(h)
                        }
                        if (h[1]) {
                            for (var o = h[0], r = h[1], n = f.multiple, w = f.ngOptions, q = !1, x, C = z(Y.createElement("option")), A = z(Y.createElement("optgroup")), s = C.clone(), h = 0, y = i.children(), D = y.length; h < D; h++) if (y[h].value == "") {
                                x = q = y.eq(h);
                                break
                            }
                            o.init(r, q, s);
                            if (n && (f.required || f.ngRequired)) {
                                var E = function(a) {
                                        r.$setValidity("required", !f.required || a && a.length);
                                        return a
                                    };
                                r.$parsers.push(E);
                                r.$formatters.unshift(E);
                                f.$observe("required", function() {
                                    E(r.$viewValue)
                                })
                            }
                            w ? l(e, i, r) : n ? k(e, i, r) : j(e, i, r, o)
                        }
                    }
                }
            }],
            Ud = ["$interpolate", function(a) {
                var c = {
                    addOption: C,
                    removeOption: C
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(d, e) {
                        if (t(e.value)) {
                            var g = a(d.text(), !0);
                            g || e.$set("value", d.text())
                        }
                        return function(a, d, e) {
                            var j = d.parent(),
                                k = j.data("$selectController") || j.parent().data("$selectController");
                            k && k.databound ? d.prop("selected", !1) : k = c;
                            g ? a.$watch(g, function(a, c) {
                                e.$set("value", a);
                                a !== c && k.removeOption(c);
                                k.addOption(a)
                            }) : k.addOption(e.value);
                            d.bind("$destroy", function() {
                                k.removeOption(e.value)
                            })
                        }
                    }
                }
            }],
            Vd = H({
                restrict: "E",
                terminal: !0
            });
        (ja = T.jQuery) ? (z = ja, y(ja.fn, {
            scope: ta.scope,
            controller: ta.controller,
            injector: ta.injector,
            inheritedData: ta.inheritedData
        }), bb("remove", !0), bb("empty"), bb("html")) : z = O;
        Zb.element = z;
        (function(a) {
            y(a, {
                bootstrap: qb,
                copy: U,
                extend: y,
                equals: ha,
                element: z,
                forEach: m,
                injector: rb,
                noop: C,
                bind: Va,
                toJson: da,
                fromJson: ob,
                identity: ma,
                isUndefined: t,
                isDefined: v,
                isString: E,
                isFunction: L,
                isObject: M,
                isNumber: va,
                isElement: gc,
                isArray: I,
                version: hd,
                isDate: na,
                lowercase: D,
                uppercase: la,
                callbacks: {
                    counter: 0
                }
            });
            sa = lc(T);
            try {
                sa("ngLocale")
            } catch (c) {
                sa("ngLocale", []).provider("$locale", Yc)
            }
            sa("ng", ["ngLocale"], ["$provide", function(a) {
                a.provider("$compile", Cb).directive({
                    a: id,
                    input: cc,
                    textarea: cc,
                    form: jd,
                    script: Rd,
                    select: Td,
                    style: Vd,
                    option: Ud,
                    ngBind: ud,
                    ngBindHtmlUnsafe: wd,
                    ngBindTemplate: vd,
                    ngClass: xd,
                    ngClassEven: zd,
                    ngClassOdd: yd,
                    ngCsp: Cd,
                    ngCloak: Ad,
                    ngController: Bd,
                    ngForm: kd,
                    ngHide: Kd,
                    ngInclude: Ed,
                    ngInit: Fd,
                    ngNonBindable: Gd,
                    ngPluralize: Hd,
                    ngRepeat: Id,
                    ngShow: Jd,
                    ngSubmit: Dd,
                    ngStyle: Ld,
                    ngSwitch: Md,
                    ngSwitchWhen: Nd,
                    ngSwitchDefault: Od,
                    ngOptions: Sd,
                    ngView: Qd,
                    ngTransclude: Pd,
                    ngModel: pd,
                    ngList: rd,
                    ngChange: qd,
                    required: dc,
                    ngRequired: dc,
                    ngValue: td
                }).directive(lb).directive(ec);
                a.provider({
                    $anchorScroll: uc,
                    $browser: wc,
                    $cacheFactory: xc,
                    $controller: Ac,
                    $document: Bc,
                    $exceptionHandler: Cc,
                    $filter: Qb,
                    $interpolate: Dc,
                    $http: Uc,
                    $httpBackend: Vc,
                    $location: Hc,
                    $log: Ic,
                    $parse: Mc,
                    $route: Pc,
                    $routeParams: Qc,
                    $rootScope: Rc,
                    $q: Nc,
                    $sniffer: Sc,
                    $templateCache: yc,
                    $timeout: Zc,
                    $window: Tc
                })
            }])
        })(Zb);
        z(Y).ready(function() {
            jc(Y, qb)
        })
    })(window, document);
    angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

    // Underscore.js 1.4.4
    // ===================
    // > http://underscorejs.org
    // > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
    // > Underscore may be freely distributed under the MIT license.
    // Baseline setup
    // --------------
    (function() {

        // Establish the root object, `window` in the browser, or `global` on the server.
        var root = this;

        // Save the previous value of the `_` variable.
        var previousUnderscore = root._;

        // Establish the object that gets returned to break out of a loop iteration.
        var breaker = {};

        // Save bytes in the minified (but not gzipped) version:
        var ArrayProto = Array.prototype,
            ObjProto = Object.prototype,
            FuncProto = Function.prototype;

        // Create quick reference variables for speed access to core prototypes.
        var push = ArrayProto.push,
            slice = ArrayProto.slice,
            concat = ArrayProto.concat,
            toString = ObjProto.toString,
            hasOwnProperty = ObjProto.hasOwnProperty;

        // All **ECMAScript 5** native function implementations that we hope to use
        // are declared here.
        var
        nativeForEach = ArrayProto.forEach,
            nativeMap = ArrayProto.map,
            nativeReduce = ArrayProto.reduce,
            nativeReduceRight = ArrayProto.reduceRight,
            nativeFilter = ArrayProto.filter,
            nativeEvery = ArrayProto.every,
            nativeSome = ArrayProto.some,
            nativeIndexOf = ArrayProto.indexOf,
            nativeLastIndexOf = ArrayProto.lastIndexOf,
            nativeIsArray = Array.isArray,
            nativeKeys = Object.keys,
            nativeBind = FuncProto.bind;

        // Create a safe reference to the Underscore object for use below.
        var _ = function(obj) {
                if (obj instanceof _) return obj;
                if (!(this instanceof _)) return new _(obj);
                this._wrapped = obj;
            };

        // Export the Underscore object for **Node.js**, with
        // backwards-compatibility for the old `require()` API. If we're in
        // the browser, add `_` as a global object via a string identifier,
        // for Closure Compiler "advanced" mode.
        if (typeof exports !== 'undefined') {
            if (typeof module !== 'undefined' && module.exports) {
                exports = module.exports = _;
            }
            exports._ = _;
        } else {
            root._ = _;
        }

        // Current version.
        _.VERSION = '1.4.4';

        // Collection Functions
        // --------------------
        // The cornerstone, an `each` implementation, aka `forEach`.
        // Handles objects with the built-in `forEach`, arrays, and raw objects.
        // Delegates to **ECMAScript 5**'s native `forEach` if available.
        var each = _.each = _.forEach = function(obj, iterator, context) {
                if (obj == null) return;
                if (nativeForEach && obj.forEach === nativeForEach) {
                    obj.forEach(iterator, context);
                } else if (obj.length === +obj.length) {
                    for (var i = 0, l = obj.length; i < l; i++) {
                        if (iterator.call(context, obj[i], i, obj) === breaker) return;
                    }
                } else {
                    for (var key in obj) {
                        if (_.has(obj, key)) {
                            if (iterator.call(context, obj[key], key, obj) === breaker) return;
                        }
                    }
                }
            };

        // Return the results of applying the iterator to each element.
        // Delegates to **ECMAScript 5**'s native `map` if available.
        _.map = _.collect = function(obj, iterator, context) {
            var results = [];
            if (obj == null) return results;
            if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
            each(obj, function(value, index, list) {
                results[results.length] = iterator.call(context, value, index, list);
            });
            return results;
        };

        var reduceError = 'Reduce of empty array with no initial value';

        // **Reduce** builds up a single result from a list of values, aka `inject`,
        // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
        _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
            var initial = arguments.length > 2;
            if (obj == null) obj = [];
            if (nativeReduce && obj.reduce === nativeReduce) {
                if (context) iterator = _.bind(iterator, context);
                return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
            }
            each(obj, function(value, index, list) {
                if (!initial) {
                    memo = value;
                    initial = true;
                } else {
                    memo = iterator.call(context, memo, value, index, list);
                }
            });
            if (!initial) throw new TypeError(reduceError);
            return memo;
        };

        // The right-associative version of reduce, also known as `foldr`.
        // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
        _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
            var initial = arguments.length > 2;
            if (obj == null) obj = [];
            if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
                if (context) iterator = _.bind(iterator, context);
                return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
            }
            var length = obj.length;
            if (length !== +length) {
                var keys = _.keys(obj);
                length = keys.length;
            }
            each(obj, function(value, index, list) {
                index = keys ? keys[--length] : --length;
                if (!initial) {
                    memo = obj[index];
                    initial = true;
                } else {
                    memo = iterator.call(context, memo, obj[index], index, list);
                }
            });
            if (!initial) throw new TypeError(reduceError);
            return memo;
        };

        // Return the first value which passes a truth test. Aliased as `detect`.
        _.find = _.detect = function(obj, iterator, context) {
            var result;
            any(obj, function(value, index, list) {
                if (iterator.call(context, value, index, list)) {
                    result = value;
                    return true;
                }
            });
            return result;
        };

        // Return all the elements that pass a truth test.
        // Delegates to **ECMAScript 5**'s native `filter` if available.
        // Aliased as `select`.
        _.filter = _.select = function(obj, iterator, context) {
            var results = [];
            if (obj == null) return results;
            if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
            each(obj, function(value, index, list) {
                if (iterator.call(context, value, index, list)) results[results.length] = value;
            });
            return results;
        };

        // Return all the elements for which a truth test fails.
        _.reject = function(obj, iterator, context) {
            return _.filter(obj, function(value, index, list) {
                return !iterator.call(context, value, index, list);
            }, context);
        };

        // Determine whether all of the elements match a truth test.
        // Delegates to **ECMAScript 5**'s native `every` if available.
        // Aliased as `all`.
        _.every = _.all = function(obj, iterator, context) {
            iterator || (iterator = _.identity);
            var result = true;
            if (obj == null) return result;
            if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
            each(obj, function(value, index, list) {
                if (!(result = result && iterator.call(context, value, index, list))) return breaker;
            });
            return !!result;
        };

        // Determine if at least one element in the object matches a truth test.
        // Delegates to **ECMAScript 5**'s native `some` if available.
        // Aliased as `any`.
        var any = _.some = _.any = function(obj, iterator, context) {
                iterator || (iterator = _.identity);
                var result = false;
                if (obj == null) return result;
                if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
                each(obj, function(value, index, list) {
                    if (result || (result = iterator.call(context, value, index, list))) return breaker;
                });
                return !!result;
            };

        // Determine if the array or object contains a given value (using `===`).
        // Aliased as `include`.
        _.contains = _.include = function(obj, target) {
            if (obj == null) return false;
            if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
            return any(obj, function(value) {
                return value === target;
            });
        };

        // Invoke a method (with arguments) on every item in a collection.
        _.invoke = function(obj, method) {
            var args = slice.call(arguments, 2);
            var isFunc = _.isFunction(method);
            return _.map(obj, function(value) {
                return (isFunc ? method : value[method]).apply(value, args);
            });
        };

        // Convenience version of a common use case of `map`: fetching a property.
        _.pluck = function(obj, key) {
            return _.map(obj, function(value) {
                return value[key];
            });
        };

        // Convenience version of a common use case of `filter`: selecting only objects
        // containing specific `key:value` pairs.
        _.where = function(obj, attrs, first) {
            if (_.isEmpty(attrs)) return first ? null : [];
            return _[first ? 'find' : 'filter'](obj, function(value) {
                for (var key in attrs) {
                    if (attrs[key] !== value[key]) return false;
                }
                return true;
            });
        };

        // Convenience version of a common use case of `find`: getting the first object
        // containing specific `key:value` pairs.
        _.findWhere = function(obj, attrs) {
            return _.where(obj, attrs, true);
        };

        // Return the maximum element or (element-based computation).
        // Can't optimize arrays of integers longer than 65,535 elements.
        // See: https://bugs.webkit.org/show_bug.cgi?id=80797
        _.max = function(obj, iterator, context) {
            if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
                return Math.max.apply(Math, obj);
            }
            if (!iterator && _.isEmpty(obj)) return -Infinity;
            var result = {
                computed: -Infinity,
                value: -Infinity
            };
            each(obj, function(value, index, list) {
                var computed = iterator ? iterator.call(context, value, index, list) : value;
                computed >= result.computed && (result = {
                    value: value,
                    computed: computed
                });
            });
            return result.value;
        };

        // Return the minimum element (or element-based computation).
        _.min = function(obj, iterator, context) {
            if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
                return Math.min.apply(Math, obj);
            }
            if (!iterator && _.isEmpty(obj)) return Infinity;
            var result = {
                computed: Infinity,
                value: Infinity
            };
            each(obj, function(value, index, list) {
                var computed = iterator ? iterator.call(context, value, index, list) : value;
                computed < result.computed && (result = {
                    value: value,
                    computed: computed
                });
            });
            return result.value;
        };

        // Shuffle an array.
        _.shuffle = function(obj) {
            var rand;
            var index = 0;
            var shuffled = [];
            each(obj, function(value) {
                rand = _.random(index++);
                shuffled[index - 1] = shuffled[rand];
                shuffled[rand] = value;
            });
            return shuffled;
        };

        // An internal function to generate lookup iterators.
        var lookupIterator = function(value) {
                return _.isFunction(value) ? value : function(obj) {
                    return obj[value];
                };
            };

        // Sort the object's values by a criterion produced by an iterator.
        _.sortBy = function(obj, value, context) {
            var iterator = lookupIterator(value);
            return _.pluck(_.map(obj, function(value, index, list) {
                return {
                    value: value,
                    index: index,
                    criteria: iterator.call(context, value, index, list)
                };
            }).sort(function(left, right) {
                var a = left.criteria;
                var b = right.criteria;
                if (a !== b) {
                    if (a > b || a === void 0) return 1;
                    if (a < b || b === void 0) return -1;
                }
                return left.index < right.index ? -1 : 1;
            }), 'value');
        };

        // An internal function used for aggregate "group by" operations.
        var group = function(obj, value, context, behavior) {
                var result = {};
                var iterator = lookupIterator(value || _.identity);
                each(obj, function(value, index) {
                    var key = iterator.call(context, value, index, obj);
                    behavior(result, key, value);
                });
                return result;
            };

        // Groups the object's values by a criterion. Pass either a string attribute
        // to group by, or a function that returns the criterion.
        _.groupBy = function(obj, value, context) {
            return group(obj, value, context, function(result, key, value) {
                (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
            });
        };

        // Counts instances of an object that group by a certain criterion. Pass
        // either a string attribute to count by, or a function that returns the
        // criterion.
        _.countBy = function(obj, value, context) {
            return group(obj, value, context, function(result, key) {
                if (!_.has(result, key)) result[key] = 0;
                result[key]++;
            });
        };

        // Use a comparator function to figure out the smallest index at which
        // an object should be inserted so as to maintain order. Uses binary search.
        _.sortedIndex = function(array, obj, iterator, context) {
            iterator = iterator == null ? _.identity : lookupIterator(iterator);
            var value = iterator.call(context, obj);
            var low = 0,
                high = array.length;
            while (low < high) {
                var mid = (low + high) >>> 1;
                iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
            }
            return low;
        };

        // Safely convert anything iterable into a real, live array.
        _.toArray = function(obj) {
            if (!obj) return [];
            if (_.isArray(obj)) return slice.call(obj);
            if (obj.length === +obj.length) return _.map(obj, _.identity);
            return _.values(obj);
        };

        // Return the number of elements in an object.
        _.size = function(obj) {
            if (obj == null) return 0;
            return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
        };

        // Array Functions
        // ---------------
        // Get the first element of an array. Passing **n** will return the first N
        // values in the array. Aliased as `head` and `take`. The **guard** check
        // allows it to work with `_.map`.
        _.first = _.head = _.take = function(array, n, guard) {
            if (array == null) return void 0;
            return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
        };

        // Returns everything but the last entry of the array. Especially useful on
        // the arguments object. Passing **n** will return all the values in
        // the array, excluding the last N. The **guard** check allows it to work with
        // `_.map`.
        _.initial = function(array, n, guard) {
            return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
        };

        // Get the last element of an array. Passing **n** will return the last N
        // values in the array. The **guard** check allows it to work with `_.map`.
        _.last = function(array, n, guard) {
            if (array == null) return void 0;
            if ((n != null) && !guard) {
                return slice.call(array, Math.max(array.length - n, 0));
            } else {
                return array[array.length - 1];
            }
        };

        // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
        // Especially useful on the arguments object. Passing an **n** will return
        // the rest N values in the array. The **guard**
        // check allows it to work with `_.map`.
        _.rest = _.tail = _.drop = function(array, n, guard) {
            return slice.call(array, (n == null) || guard ? 1 : n);
        };

        // Trim out all falsy values from an array.
        _.compact = function(array) {
            return _.filter(array, _.identity);
        };

        // Internal implementation of a recursive `flatten` function.
        var flatten = function(input, shallow, output) {
                each(input, function(value) {
                    if (_.isArray(value)) {
                        shallow ? push.apply(output, value) : flatten(value, shallow, output);
                    } else {
                        output.push(value);
                    }
                });
                return output;
            };

        // Return a completely flattened version of an array.
        _.flatten = function(array, shallow) {
            return flatten(array, shallow, []);
        };

        // Return a version of the array that does not contain the specified value(s).
        _.without = function(array) {
            return _.difference(array, slice.call(arguments, 1));
        };

        // Produce a duplicate-free version of the array. If the array has already
        // been sorted, you have the option of using a faster algorithm.
        // Aliased as `unique`.
        _.uniq = _.unique = function(array, isSorted, iterator, context) {
            if (_.isFunction(isSorted)) {
                context = iterator;
                iterator = isSorted;
                isSorted = false;
            }
            var initial = iterator ? _.map(array, iterator, context) : array;
            var results = [];
            var seen = [];
            each(initial, function(value, index) {
                if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
                    seen.push(value);
                    results.push(array[index]);
                }
            });
            return results;
        };

        // Produce an array that contains the union: each distinct element from all of
        // the passed-in arrays.
        _.union = function() {
            return _.uniq(concat.apply(ArrayProto, arguments));
        };

        // Produce an array that contains every item shared between all the
        // passed-in arrays.
        _.intersection = function(array) {
            var rest = slice.call(arguments, 1);
            return _.filter(_.uniq(array), function(item) {
                return _.every(rest, function(other) {
                    return _.indexOf(other, item) >= 0;
                });
            });
        };

        // Take the difference between one array and a number of other arrays.
        // Only the elements present in just the first array will remain.
        _.difference = function(array) {
            var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
            return _.filter(array, function(value) {
                return !_.contains(rest, value);
            });
        };

        // Zip together multiple lists into a single array -- elements that share
        // an index go together.
        _.zip = function() {
            var args = slice.call(arguments);
            var length = _.max(_.pluck(args, 'length'));
            var results = new Array(length);
            for (var i = 0; i < length; i++) {
                results[i] = _.pluck(args, "" + i);
            }
            return results;
        };

        // Converts lists into objects. Pass either a single array of `[key, value]`
        // pairs, or two parallel arrays of the same length -- one of keys, and one of
        // the corresponding values.
        _.object = function(list, values) {
            if (list == null) return {};
            var result = {};
            for (var i = 0, l = list.length; i < l; i++) {
                if (values) {
                    result[list[i]] = values[i];
                } else {
                    result[list[i][0]] = list[i][1];
                }
            }
            return result;
        };

        // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
        // we need this function. Return the position of the first occurrence of an
        // item in an array, or -1 if the item is not included in the array.
        // Delegates to **ECMAScript 5**'s native `indexOf` if available.
        // If the array is large and already in sort order, pass `true`
        // for **isSorted** to use binary search.
        _.indexOf = function(array, item, isSorted) {
            if (array == null) return -1;
            var i = 0,
                l = array.length;
            if (isSorted) {
                if (typeof isSorted == 'number') {
                    i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
                } else {
                    i = _.sortedIndex(array, item);
                    return array[i] === item ? i : -1;
                }
            }
            if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
            for (; i < l; i++) if (array[i] === item) return i;
            return -1;
        };

        // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
        _.lastIndexOf = function(array, item, from) {
            if (array == null) return -1;
            var hasIndex = from != null;
            if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
                return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
            }
            var i = (hasIndex ? from : array.length);
            while (i--) if (array[i] === item) return i;
            return -1;
        };

        // Generate an integer Array containing an arithmetic progression. A port of
        // the native Python `range()` function. See
        // [the Python documentation](http://docs.python.org/library/functions.html#range).
        _.range = function(start, stop, step) {
            if (arguments.length <= 1) {
                stop = start || 0;
                start = 0;
            }
            step = arguments[2] || 1;

            var len = Math.max(Math.ceil((stop - start) / step), 0);
            var idx = 0;
            var range = new Array(len);

            while (idx < len) {
                range[idx++] = start;
                start += step;
            }

            return range;
        };

        // Function (ahem) Functions
        // ------------------
        // Create a function bound to a given object (assigning `this`, and arguments,
        // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
        // available.
        _.bind = function(func, context) {
            if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
            var args = slice.call(arguments, 2);
            return function() {
                return func.apply(context, args.concat(slice.call(arguments)));
            };
        };

        // Partially apply a function by creating a version that has had some of its
        // arguments pre-filled, without changing its dynamic `this` context.
        _.partial = function(func) {
            var args = slice.call(arguments, 1);
            return function() {
                return func.apply(this, args.concat(slice.call(arguments)));
            };
        };

        // Bind all of an object's methods to that object. Useful for ensuring that
        // all callbacks defined on an object belong to it.
        _.bindAll = function(obj) {
            var funcs = slice.call(arguments, 1);
            if (funcs.length === 0) funcs = _.functions(obj);
            each(funcs, function(f) {
                obj[f] = _.bind(obj[f], obj);
            });
            return obj;
        };

        // Memoize an expensive function by storing its results.
        _.memoize = function(func, hasher) {
            var memo = {};
            hasher || (hasher = _.identity);
            return function() {
                var key = hasher.apply(this, arguments);
                return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
            };
        };

        // Delays a function for the given number of milliseconds, and then calls
        // it with the arguments supplied.
        _.delay = function(func, wait) {
            var args = slice.call(arguments, 2);
            return setTimeout(function() {
                return func.apply(null, args);
            }, wait);
        };

        // Defers a function, scheduling it to run after the current call stack has
        // cleared.
        _.defer = function(func) {
            return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
        };

        // Returns a function, that, when invoked, will only be triggered at most once
        // during a given window of time.
        _.throttle = function(func, wait) {
            var context, args, timeout, result;
            var previous = 0;
            var later = function() {
                    previous = new Date;
                    timeout = null;
                    result = func.apply(context, args);
                };
            return function() {
                var now = new Date;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                } else if (!timeout) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        };

        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        _.debounce = function(func, wait, immediate) {
            var timeout, result;
            return function() {
                var context = this,
                    args = arguments;
                var later = function() {
                        timeout = null;
                        if (!immediate) result = func.apply(context, args);
                    };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) result = func.apply(context, args);
                return result;
            };
        };

        // Returns a function that will be executed at most one time, no matter how
        // often you call it. Useful for lazy initialization.
        _.once = function(func) {
            var ran = false,
                memo;
            return function() {
                if (ran) return memo;
                ran = true;
                memo = func.apply(this, arguments);
                func = null;
                return memo;
            };
        };

        // Returns the first function passed as an argument to the second,
        // allowing you to adjust arguments, run code before and after, and
        // conditionally execute the original function.
        _.wrap = function(func, wrapper) {
            return function() {
                var args = [func];
                push.apply(args, arguments);
                return wrapper.apply(this, args);
            };
        };

        // Returns a function that is the composition of a list of functions, each
        // consuming the return value of the function that follows.
        _.compose = function() {
            var funcs = arguments;
            return function() {
                var args = arguments;
                for (var i = funcs.length - 1; i >= 0; i--) {
                    args = [funcs[i].apply(this, args)];
                }
                return args[0];
            };
        };

        // Returns a function that will only be executed after being called N times.
        _.after = function(times, func) {
            if (times <= 0) return func();
            return function() {
                if (--times < 1) {
                    return func.apply(this, arguments);
                }
            };
        };

        // Object Functions
        // ----------------
        // Retrieve the names of an object's properties.
        // Delegates to **ECMAScript 5**'s native `Object.keys`
        _.keys = nativeKeys ||
        function(obj) {
            if (obj !== Object(obj)) throw new TypeError('Invalid object');
            var keys = [];
            for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
            return keys;
        };

        // Retrieve the values of an object's properties.
        _.values = function(obj) {
            var values = [];
            for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
            return values;
        };

        // Convert an object into a list of `[key, value]` pairs.
        _.pairs = function(obj) {
            var pairs = [];
            for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
            return pairs;
        };

        // Invert the keys and values of an object. The values must be serializable.
        _.invert = function(obj) {
            var result = {};
            for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
            return result;
        };

        // Return a sorted list of the function names available on the object.
        // Aliased as `methods`
        _.functions = _.methods = function(obj) {
            var names = [];
            for (var key in obj) {
                if (_.isFunction(obj[key])) names.push(key);
            }
            return names.sort();
        };

        // Extend a given object with all the properties in passed-in object(s).
        _.extend = function(obj) {
            each(slice.call(arguments, 1), function(source) {
                if (source) {
                    for (var prop in source) {
                        obj[prop] = source[prop];
                    }
                }
            });
            return obj;
        };

        // Return a copy of the object only containing the whitelisted properties.
        _.pick = function(obj) {
            var copy = {};
            var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
            each(keys, function(key) {
                if (key in obj) copy[key] = obj[key];
            });
            return copy;
        };

        // Return a copy of the object without the blacklisted properties.
        _.omit = function(obj) {
            var copy = {};
            var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
            for (var key in obj) {
                if (!_.contains(keys, key)) copy[key] = obj[key];
            }
            return copy;
        };

        // Fill in a given object with default properties.
        _.defaults = function(obj) {
            each(slice.call(arguments, 1), function(source) {
                if (source) {
                    for (var prop in source) {
                        if (obj[prop] == null) obj[prop] = source[prop];
                    }
                }
            });
            return obj;
        };

        // Create a (shallow-cloned) duplicate of an object.
        _.clone = function(obj) {
            if (!_.isObject(obj)) return obj;
            return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
        };

        // Invokes interceptor with the obj, and then returns obj.
        // The primary purpose of this method is to "tap into" a method chain, in
        // order to perform operations on intermediate results within the chain.
        _.tap = function(obj, interceptor) {
            interceptor(obj);
            return obj;
        };

        // Internal recursive comparison function for `isEqual`.
        var eq = function(a, b, aStack, bStack) {
                // Identical objects are equal. `0 === -0`, but they aren't identical.
                // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
                if (a === b) return a !== 0 || 1 / a == 1 / b;
                // A strict comparison is necessary because `null == undefined`.
                if (a == null || b == null) return a === b;
                // Unwrap any wrapped objects.
                if (a instanceof _) a = a._wrapped;
                if (b instanceof _) b = b._wrapped;
                // Compare `[[Class]]` names.
                var className = toString.call(a);
                if (className != toString.call(b)) return false;
                switch (className) {
                    // Strings, numbers, dates, and booleans are compared by value.
                case '[object String]':
                    // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
                    // equivalent to `new String("5")`.
                    return a == String(b);
                case '[object Number]':
                    // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
                    // other numeric values.
                    return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
                case '[object Date]':
                case '[object Boolean]':
                    // Coerce dates and booleans to numeric primitive values. Dates are compared by their
                    // millisecond representations. Note that invalid dates with millisecond representations
                    // of `NaN` are not equivalent.
                    return +a == +b;
                    // RegExps are compared by their source patterns and flags.
                case '[object RegExp]':
                    return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
                }
                if (typeof a != 'object' || typeof b != 'object') return false;
                // Assume equality for cyclic structures. The algorithm for detecting cyclic
                // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
                var length = aStack.length;
                while (length--) {
                    // Linear search. Performance is inversely proportional to the number of
                    // unique nested structures.
                    if (aStack[length] == a) return bStack[length] == b;
                }
                // Add the first object to the stack of traversed objects.
                aStack.push(a);
                bStack.push(b);
                var size = 0,
                    result = true;
                // Recursively compare objects and arrays.
                if (className == '[object Array]') {
                    // Compare array lengths to determine if a deep comparison is necessary.
                    size = a.length;
                    result = size == b.length;
                    if (result) {
                        // Deep compare the contents, ignoring non-numeric properties.
                        while (size--) {
                            if (!(result = eq(a[size], b[size], aStack, bStack))) break;
                        }
                    }
                } else {
                    // Objects with different constructors are not equivalent, but `Object`s
                    // from different frames are.
                    var aCtor = a.constructor,
                        bCtor = b.constructor;
                    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) && _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
                        return false;
                    }
                    // Deep compare objects.
                    for (var key in a) {
                        if (_.has(a, key)) {
                            // Count the expected number of properties.
                            size++;
                            // Deep compare each member.
                            if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
                        }
                    }
                    // Ensure that both objects contain the same number of properties.
                    if (result) {
                        for (key in b) {
                            if (_.has(b, key) && !(size--)) break;
                        }
                        result = !size;
                    }
                }
                // Remove the first object from the stack of traversed objects.
                aStack.pop();
                bStack.pop();
                return result;
            };

        // Perform a deep comparison to check if two objects are equal.
        _.isEqual = function(a, b) {
            return eq(a, b, [], []);
        };

        // Is a given array, string, or object empty?
        // An "empty" object has no enumerable own-properties.
        _.isEmpty = function(obj) {
            if (obj == null) return true;
            if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
            for (var key in obj) if (_.has(obj, key)) return false;
            return true;
        };

        // Is a given value a DOM element?
        _.isElement = function(obj) {
            return !!(obj && obj.nodeType === 1);
        };

        // Is a given value an array?
        // Delegates to ECMA5's native Array.isArray
        _.isArray = nativeIsArray ||
        function(obj) {
            return toString.call(obj) == '[object Array]';
        };

        // Is a given variable an object?
        _.isObject = function(obj) {
            return obj === Object(obj);
        };

        // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
        each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
            _['is' + name] = function(obj) {
                return toString.call(obj) == '[object ' + name + ']';
            };
        });

        // Define a fallback version of the method in browsers (ahem, IE), where
        // there isn't any inspectable "Arguments" type.
        if (!_.isArguments(arguments)) {
            _.isArguments = function(obj) {
                return !!(obj && _.has(obj, 'callee'));
            };
        }

        // Optimize `isFunction` if appropriate.
        if (typeof(/./) !== 'function') {
            _.isFunction = function(obj) {
                return typeof obj === 'function';
            };
        }

        // Is a given object a finite number?
        _.isFinite = function(obj) {
            return isFinite(obj) && !isNaN(parseFloat(obj));
        };

        // Is the given value `NaN`? (NaN is the only number which does not equal itself).
        _.isNaN = function(obj) {
            return _.isNumber(obj) && obj != +obj;
        };

        // Is a given value a boolean?
        _.isBoolean = function(obj) {
            return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
        };

        // Is a given value equal to null?
        _.isNull = function(obj) {
            return obj === null;
        };

        // Is a given variable undefined?
        _.isUndefined = function(obj) {
            return obj === void 0;
        };

        // Shortcut function for checking if an object has a given property directly
        // on itself (in other words, not on a prototype).
        _.has = function(obj, key) {
            return hasOwnProperty.call(obj, key);
        };

        // Utility Functions
        // -----------------
        // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
        // previous owner. Returns a reference to the Underscore object.
        _.noConflict = function() {
            root._ = previousUnderscore;
            return this;
        };

        // Keep the identity function around for default iterators.
        _.identity = function(value) {
            return value;
        };

        // Run a function **n** times.
        _.times = function(n, iterator, context) {
            var accum = Array(n);
            for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
            return accum;
        };

        // Return a random integer between min and max (inclusive).
        _.random = function(min, max) {
            if (max == null) {
                max = min;
                min = 0;
            }
            return min + Math.floor(Math.random() * (max - min + 1));
        };

        // List of HTML entities for escaping.
        var entityMap = {
            escape: {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                '/': '&#x2F;'
            }
        };
        entityMap.unescape = _.invert(entityMap.escape);

        // Regexes containing the keys and values listed immediately above.
        var entityRegexes = {
            escape: new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
            unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
        };

        // Functions for escaping and unescaping strings to/from HTML interpolation.
        _.each(['escape', 'unescape'], function(method) {
            _[method] = function(string) {
                if (string == null) return '';
                return ('' + string).replace(entityRegexes[method], function(match) {
                    return entityMap[method][match];
                });
            };
        });

        // If the value of the named property is a function then invoke it;
        // otherwise, return it.
        _.result = function(object, property) {
            if (object == null) return null;
            var value = object[property];
            return _.isFunction(value) ? value.call(object) : value;
        };

        // Add your own custom functions to the Underscore object.
        _.mixin = function(obj) {
            each(_.functions(obj), function(name) {
                var func = _[name] = obj[name];
                _.prototype[name] = function() {
                    var args = [this._wrapped];
                    push.apply(args, arguments);
                    return result.call(this, func.apply(_, args));
                };
            });
        };

        // Generate a unique integer id (unique within the entire client session).
        // Useful for temporary DOM ids.
        var idCounter = 0;
        _.uniqueId = function(prefix) {
            var id = ++idCounter + '';
            return prefix ? prefix + id : id;
        };

        // By default, Underscore uses ERB-style template delimiters, change the
        // following template settings to use alternative delimiters.
        _.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };

        // When customizing `templateSettings`, if you don't want to define an
        // interpolation, evaluation or escaping regex, we need one that is
        // guaranteed not to match.
        var noMatch = /(.)^/;

        // Certain characters need to be escaped so that they can be put into a
        // string literal.
        var escapes = {
            "'": "'",
            '\\': '\\',
            '\r': 'r',
            '\n': 'n',
            '\t': 't',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
        };

        var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

        // JavaScript micro-templating, similar to John Resig's implementation.
        // Underscore templating handles arbitrary delimiters, preserves whitespace,
        // and correctly escapes quotes within interpolated code.
        _.template = function(text, data, settings) {
            var render;
            settings = _.defaults({}, settings, _.templateSettings);

            // Combine delimiters into one regular expression via alternation.
            var matcher = new RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

            // Compile the template source, escaping string literals appropriately.
            var index = 0;
            var source = "__p+='";
            text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
                source += text.slice(index, offset).replace(escaper, function(match) {
                    return '\\' + escapes[match];
                });

                if (escape) {
                    source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
                }
                if (interpolate) {
                    source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
                }
                if (evaluate) {
                    source += "';\n" + evaluate + "\n__p+='";
                }
                index = offset + match.length;
                return match;
            });
            source += "';\n";

            // If a variable is not specified, place data values in local scope.
            if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

            source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";

            try {
                render = new Function(settings.variable || 'obj', '_', source);
            } catch (e) {
                e.source = source;
                throw e;
            }

            if (data) return render(data, _);
            var template = function(data) {
                    return render.call(this, data, _);
                };

            // Provide the compiled function source as a convenience for precompilation.
            template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

            return template;
        };

        // Add a "chain" function, which will delegate to the wrapper.
        _.chain = function(obj) {
            return _(obj).chain();
        };

        // OOP
        // ---------------
        // If Underscore is called as a function, it returns a wrapped object that
        // can be used OO-style. This wrapper holds altered versions of all the
        // underscore functions. Wrapped objects may be chained.
        // Helper function to continue chaining intermediate results.
        var result = function(obj) {
                return this._chain ? _(obj).chain() : obj;
            };

        // Add all of the Underscore functions to the wrapper object.
        _.mixin(_);

        // Add all mutator Array functions to the wrapper.
        each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
            var method = ArrayProto[name];
            _.prototype[name] = function() {
                var obj = this._wrapped;
                method.apply(obj, arguments);
                if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
                return result.call(this, obj);
            };
        });

        // Add all accessor Array functions to the wrapper.
        each(['concat', 'join', 'slice'], function(name) {
            var method = ArrayProto[name];
            _.prototype[name] = function() {
                return result.call(this, method.apply(this._wrapped, arguments));
            };
        });

        _.extend(_.prototype, {

            // Start chaining a wrapped Underscore object.
            chain: function() {
                this._chain = true;
                return this;
            },

            // Extracts the result from a wrapped and chained object.
            value: function() {
                return this._wrapped;
            }

        });

    }).call(this);

    function injectCss(css) {
        var s = document.createElement('link');
        s.setAttribute('href', css);
        s.setAttribute('rel', 'stylesheet');
        s.setAttribute('type', 'text/css');
        document.getElementsByTagName('head')[0].appendChild(s);
    }

    injectCss('http://twitter.github.com/bootstrap/assets/css/bootstrap.css');
    injectCss('http://hugeen.github.com/1gam_sorter/1gam-sorter.css');
    
    console.log("COMPLETE");
    /*
    var module = angular.module('sorter', []);
    
    $("body").attr({
        "ng-app": "sorter"
    });
    
    var games = [];
    var $games = $(".gadiv");
    var totalGames = $games.length;
    var processedGames = 0;
    
    $("body").append("<div id='waitForDataProcessingOverlay'>" + "<div id='waitForDataProcessing'>Wait for data processing</div>" + "<div id='gameProcessed'><span id='gamesProcessedNumber'>" + processedGames + "</span>/<span id='gamesTotalNumber'>" + totalGames + "</span> games processed</div>" + "</div>");
    
    function populateGames() {
    
        if ($(".gadiv").length === 0) {
            return false;
        }
    
        var div = $(".gadiv").first();
    
        games.push({
            div: div.clone(),
            link: div.find(".ga").attr("href"),
            title: div.find(".ga").attr("title"),
            name: div.find(".ganame").text(),
            description: div.find(".gabyli").text(),
            credits: div.find(".gacred").text(),
            tags: div.find(".gatags").text(),
            about: div.find(".gabout").text(),
            author: div.find(".gauser a").text(),
            authorLink: div.find(".gauser a").attr("href"),
            icon: div.find(".gaicon").attr("src")
        });
    
        div.remove();
        processedGames++;
        if (processedGames < totalGames) {
            $("#gamesProcessedNumber").text(processedGames);
        } else {
            $("#waitForDataProcessingOverlay").remove();
        }
    
        populateGames();
    
    }
    
    populateGames();
    
    
    window.SorterCtrl = function($scope) {
        $scope.games = games;
        $scope.tag = "";
        $scope.filterByTag = function() {
            if (_.isEmpty($scope.tag)) {
                $scope.games = games;
            } else {
                var matcher = new RegExp($scope.tag, "i");
                $scope.games = _.filter(games, function(game) {
                    return matcher.test(game.tags);
                });
            }
        }
    }
    
    var template = '<div class="gadiv" ng-repeat="game in games">' + '<a class="ga" title="{{ game.title }}" href="{{ game.link }}">' + '<img class="gaicon" src="{{ game.icon }}">' + '<span class="ganame">{{ game.name }}</span>' + '<span class="gabyli">{{ game.description }}</span>' + '<span class="gacred">{{ game.credits }}</span>' + '<span class="gatags">{{ game.tags }}</span>' + '<span class="gabout">{{ game.about }}</span>' + '</a>' + '<span class="gauser">' + '<a href="{{ game.authorLink }}" title="Click to view author profile">{{ game.author }}</a>' + '</span>' + '</div>';
    
    $(".walloftext").html('<h1> Filter by tag' + '<form ng-submit="filterByTag()">' + '<input type="text" ng-model="tag" size="30">' + '<input type="submit" value="Filter">' + '</form>' + '</h1>');
    
    $(".walloftext").attr({
        "ng-controller": "SorterCtrl"
    });
    $(".walloftext").append(template);
    */


})();
